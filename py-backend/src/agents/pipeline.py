from tools import design_protein
from tools import design_seq

def main():
  pdb_file = open("./1R42.pdb", "r")
  pdb_str = pdb_file.read()
  output_pdb = design_protein(input_pdb=pdb_str, contigs="A114-353/0 50-100", hotspot_res=["A119","A123","A233","A234","A235"])
  # print("Created output: ", output_pdb[:50])
  print("sending to protein mpnn")
  protein_seq = design_seq(input_pdb=output_pdb["pdb"], ca_only=False, soluble_model=True)
  print(protein_seq)
  # print("protein seq created: ", protein_seq[:50])
  output_file = open("protein_seq.fasta", "w+")
  output_file.write(protein_seq)



if __name__ == "__main__":
  main()

