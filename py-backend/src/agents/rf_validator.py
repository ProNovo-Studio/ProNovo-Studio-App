from typing import List, Set
from Bio.PDB import PDBParser
import re
from io import StringIO

# -------------------------------------------------------------
# Helpers
# -------------------------------------------------------------

def parse_contig_segment(seg):
    """
    Parse a segment such as:
        'A114-353', 'A119', '5-15', '119', '0', 'B10-20'
    Returns dict describing what type it is.
    """
    seg = seg.strip()

    # chain break
    if seg == "0":
        return {"type": "break"}

    # Regexes:
    chain_range = re.match(r"^([A-Za-z])(\d+)-(\d+)$", seg)
    chain_single = re.match(r"^([A-Za-z])(\d+)$", seg)
    pure_range = re.match(r"^(\d+)-(\d+)$", seg)
    pure_single = re.match(r"^(\d+)$", seg)

    if chain_range:
        chain, start, end = chain_range.groups()
        return {"type": "pdb_range", "chain": chain, "start": int(start), "end": int(end)}
    elif chain_single:
        chain, num = chain_single.groups()
        return {"type": "pdb_single", "chain": chain, "res": int(num)}
    elif pure_range:
        start, end = pure_range.groups()
        return {"type": "generated_range", "start": int(start), "end": int(end)}
    elif pure_single:
        # ambiguous: generated single or residue number?
        # RFdiffusion treats numeric-only entries as generated unless chain is specified.
        return {"type": "generated_single", "len": int(pure_single.group(1))}
    else:
        raise ValueError(f"Unrecognized contig segment: {seg}")


def validate_segment(seg_info, present_set):
    """
    Validate that PDB-dependent segments exist in the structure.
    """
    if seg_info["type"] in ["generated_range", "generated_single", "break"]:
        # Nothing to validate in the input structure
        return True, []

    missing = []

    if seg_info["type"] == "pdb_single":
        chain = seg_info["chain"]
        res = seg_info["res"]
        if (chain, res) not in present_set:
            missing.append(f"{chain}{res}")

    if seg_info["type"] == "pdb_range":
        chain = seg_info["chain"]
        for r in range(seg_info["start"], seg_info["end"] + 1):
            if (chain, r) not in present_set:
                missing.append(f"{chain}{r}")

    return len(missing) == 0, missing


# -------------------------------------------------------------
# Validate hotspot residues
# -------------------------------------------------------------
def validate_hotspots(hotspot_res: List[str], residues: Set[tuple]):
  missing = []
  for hs in hotspot_res:
    chain = hs[0]
    resnum = int(hs[1:])
    if (chain, resnum) not in residues:
      missing.append(hs)

  if len(missing) != 0:
     raise ValueError(f"Missing the following hotspot residues in the input pdb: {missing}")


# -------------------------------------------------------------
# Validate contigs (all allowed RFdiffusion forms)
# -------------------------------------------------------------
def validate_contigs(contigs: str, residues: Set[tuple]):
  segments = re.split(r"[ /]", contigs)   # split on space OR slash
  parsed = [parse_contig_segment(s) for s in segments]
  missing_contigs = []

  for s, seg_info in zip(segments, parsed):
    _, missing = validate_segment(seg_info, residues)
    if missing:
      missing_contigs.extend(missing)

  if len(missing_contigs) != 0:
     raise ValueError(f"Missing the following contigs from the input pdb: {', '.join(missing_contigs)}")


def validate_rf_params(pdb, hotspot_res, contigs):
  parser = PDBParser(QUIET=True)
  handle = StringIO(pdb)

  structure = parser.get_structure("structure_id", handle)

  # ---- Collect residues present in PDB ----
  residues = {
      (residue.get_parent().get_id(), residue.get_id()[1])
      for residue in structure.get_residues()
  }

  validate_hotspots(hotspot_res, residues)
  validate_contigs(contigs, residues)



# ------------- For testing ------------------:

# def main():

#   parser = PDBParser()
#   structure = parser.get_structure("structure_id", "1R42.pdb")

#   residues = {
#       (residue.get_parent().get_id(), residue.get_id()[1])
#       for residue in structure.get_residues()
#   }

#   hotspot_res = ["A19", "A20", "A21"]
#   contigs = "5-15/A114-353/0 30-40"

#   validate_hotspots(hotspot_res, residues)
#   validate_contigs(contigs, residues)


# if __name__ == "__main__":
#   main()