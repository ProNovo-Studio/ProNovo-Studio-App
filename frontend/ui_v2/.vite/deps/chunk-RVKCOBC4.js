import {
  ElementIterator,
  LabelTextParams,
  eachSerialElement,
  fovAdjustedPosition,
  getSerialElementLoci
} from "./chunk-BOTKILZC.js";
import {
  Box,
  BoxCage,
  Circle,
  ColorThemeCategory,
  ComplexRepresentation,
  ComplexTextVisual,
  CustomModelProperties,
  CustomStructureProperties,
  DataFormatProvider,
  Download,
  Lines,
  LinesBuilder,
  MarkerAction,
  Mesh,
  MeshBuilder,
  ModelFromTrajectory,
  ParseCcp4,
  ParseCif,
  PluginBehavior,
  PluginCommands,
  PluginStateObject,
  PluginStateSnapshotManager,
  PluginStateTransform,
  Representation,
  Shape,
  ShapeRepresentation3D,
  StateAction,
  StateObject,
  StateObjectRef,
  StateTransforms,
  StateTree,
  StaticStructureComponentTypes,
  StructureComponent,
  StructureFromModel,
  StructureQueryHelper,
  StructureRepresentation3D,
  StructureRepresentationProvider,
  StructureRepresentationStateBuilder,
  Text,
  TextBuilder,
  TrajectoryFromMmCif,
  TrajectoryFromPDB,
  TransformStructureConformation,
  Transformer,
  Volume,
  VolumeFromCcp4,
  VolumeFromDensityServerCif,
  VolumeRepresentation3D,
  addEllipsoid,
  addFixedCountDashedCylinder,
  addSimpleCylinder,
  createStructureComponent
} from "./chunk-CLY72GQO.js";
import {
  Asset,
  Bond,
  BoundaryHelper,
  Box3D,
  CIF,
  CifBlock,
  CifFile,
  CustomModelProperty,
  CustomPropertyDescriptor,
  CustomStructureProperty,
  MmcifFormat,
  MolScriptBuilder,
  ParamDefinition,
  Sphere3D,
  StringLike,
  Structure,
  StructureProperties,
  StructureSelection,
  Task,
  arrayDistinct,
  arrayExtend,
  element_exports,
  filterInPlace,
  range,
  sortIfNeeded,
  toTable,
  unzip
} from "./chunk-HZ3UTCAK.js";
import {
  DefaultColor,
  FullMVSTreeSchema,
  MVSData,
  MVSTreeSchema,
  MolstarParseFormatT,
  MultiMap,
  NumberMap,
  RequiredField,
  SimpleParamsSchema,
  TreeSchema,
  addDefaults,
  bool,
  collectMVSReferences,
  condenseTree,
  convertTree,
  decodeColor,
  dfs,
  filterDefined,
  formatObject,
  getChildren,
  getCustomProps,
  isAnyDefined,
  isComponentExpression,
  isDefined,
  isPrimitiveComponentExpressions,
  isVector3,
  resolveUris,
  safePromise,
  stringHash,
  validateTree
} from "./chunk-GA6RA535.js";
import {
  ColorNames
} from "./chunk-Y4JRF7OT.js";
import {
  Color,
  Column,
  Mat3,
  Mat4,
  SortedArray,
  UUID,
  Vec3,
  canonicalJsonString,
  capitalize,
  deepEqual,
  hashFnv32a,
  mapArrayToObject,
  omitObjectKeys,
  pickObjectKeys,
  promiseAllObj,
  radToDeg,
  round,
  stringToWords
} from "./chunk-TA3F3DCY.js";

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/param-choice.js
var Choice = class {
  constructor(opts, defaultValue) {
    this.defaultValue = defaultValue;
    this.options = Object.keys(opts).map((k) => [k, opts[k]]);
    this.nameDict = opts;
  }
  PDSelect(defaultValue, info) {
    return ParamDefinition.Select(defaultValue !== null && defaultValue !== void 0 ? defaultValue : this.defaultValue, this.options, info);
  }
  prettyName(value) {
    return this.nameDict[value];
  }
  get values() {
    return this.options.map(([value, pretty]) => value);
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/helpers/atom-ranges.js
var AtomRanges = {
  /** Return the number of disjoined ranges in a `AtomRanges` object */
  count(ranges) {
    return ranges.from.length;
  },
  /** Create new `AtomRanges` without any atoms */
  empty() {
    return { from: [], to: [] };
  },
  /** Create new `AtomRanges` containing a single range of atoms `[from, to)` */
  single(from, to) {
    return { from: [from], to: [to] };
  },
  /** Add a range of atoms `[from, to)` to existing `AtomRanges` and return the modified original.
   * The added range must start after the end of the last existing range
   * (if it starts just on the next atom, these two ranges will get merged). */
  add(ranges, from, to) {
    const n = AtomRanges.count(ranges);
    if (n > 0) {
      const lastTo = ranges.to[n - 1];
      if (from < lastTo)
        throw new Error("Overlapping ranges not allowed");
      if (from === lastTo) {
        ranges.to[n - 1] = to;
      } else {
        ranges.from.push(from);
        ranges.to.push(to);
      }
    } else {
      ranges.from.push(from);
      ranges.to.push(to);
    }
    return ranges;
  },
  /** Apply function `func` to each range in `ranges` */
  foreach(ranges, func) {
    const n = AtomRanges.count(ranges);
    for (let i = 0; i < n; i++)
      func(ranges.from[i], ranges.to[i]);
  },
  /** Apply function `func` to each range in `ranges` and return an array with results */
  map(ranges, func) {
    const n = AtomRanges.count(ranges);
    const result = new Array(n);
    for (let i = 0; i < n; i++)
      result[i] = func(ranges.from[i], ranges.to[i]);
    return result;
  },
  /** Compute the set union of multiple `AtomRanges` objects (as sets of atoms) */
  union(ranges) {
    const concat = AtomRanges.empty();
    for (const r of ranges) {
      arrayExtend(concat.from, r.from);
      arrayExtend(concat.to, r.to);
    }
    const indices = range(concat.from.length).sort((i, j) => concat.from[i] - concat.from[j]);
    const result = AtomRanges.empty();
    let last = -1;
    for (const i of indices) {
      const from = concat.from[i];
      const to = concat.to[i];
      if (last >= 0 && from <= result.to[last]) {
        if (to > result.to[last]) {
          result.to[last] = to;
        }
      } else {
        result.from.push(from);
        result.to.push(to);
        last++;
      }
    }
    return result;
  },
  /** Return a sorted subset of `atoms` which lie in any of `ranges` (i.e. set intersection of `atoms` and `ranges`).
   * If `out` is provided, use it to store the result (clear any old contents).
   * If `outFirstAtomIndex` is provided, fill `outFirstAtomIndex.value` with the index of the first selected atom (if any). */
  selectAtomsInRanges(atoms, ranges, out, outFirstAtomIndex2 = {}) {
    var _a, _b;
    out !== null && out !== void 0 ? out : out = [];
    out.length = 0;
    outFirstAtomIndex2.value = void 0;
    const nAtoms = atoms.length;
    const nRanges = AtomRanges.count(ranges);
    if (nAtoms <= nRanges) {
      let iRange = SortedArray.findPredecessorIndex(SortedArray.ofSortedArray(ranges.to), atoms[0] + 1);
      for (let iAtom = 0; iAtom < nAtoms; iAtom++) {
        const a = atoms[iAtom];
        while (iRange < nRanges && ranges.to[iRange] <= a)
          iRange++;
        const qualifies = iRange < nRanges && ranges.from[iRange] <= a;
        if (qualifies) {
          out.push(a);
          (_a = outFirstAtomIndex2.value) !== null && _a !== void 0 ? _a : outFirstAtomIndex2.value = iAtom;
        }
      }
    } else {
      for (let iRange = 0; iRange < nRanges; iRange++) {
        const from = ranges.from[iRange];
        const to = ranges.to[iRange];
        for (let iAtom = SortedArray.findPredecessorIndex(atoms, from); iAtom < nAtoms; iAtom++) {
          const a = atoms[iAtom];
          if (a < to) {
            out.push(a);
            (_b = outFirstAtomIndex2.value) !== null && _b !== void 0 ? _b : outFirstAtomIndex2.value = iAtom;
          } else {
            break;
          }
        }
      }
    }
    return out;
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/helpers/indexing.js
var IndicesAndSortings = {
  /** Get `IndicesAndSortings` for a model (use a cached value or create if not available yet) */
  get(model) {
    var _a;
    var _b;
    return (_a = (_b = model._dynamicPropertyData)["indices-and-sortings"]) !== null && _a !== void 0 ? _a : _b["indices-and-sortings"] = IndicesAndSortings.create(model);
  },
  /** Create `IndicesAndSortings` for a model */
  create(model) {
    const h = model.atomicHierarchy;
    const nAtoms = h.atoms._rowCount;
    const nChains = h.chains._rowCount;
    const { label_entity_id, label_asym_id, auth_asym_id } = h.chains;
    const { label_seq_id, auth_seq_id, pdbx_PDB_ins_code } = h.residues;
    const { label_comp_id, auth_comp_id } = h.atoms;
    const { Present } = Column.ValueKind;
    const chainsByLabelEntityId = new MultiMap();
    const chainsByLabelAsymId = new MultiMap();
    const chainsByAuthAsymId = new MultiMap();
    const residuesSortedByLabelSeqId = /* @__PURE__ */ new Map();
    const residuesSortedByAuthSeqId = /* @__PURE__ */ new Map();
    const residuesByInsCode = /* @__PURE__ */ new Map();
    const residuesByLabelCompId = /* @__PURE__ */ new Map();
    let residuesByLabelCompIdIsPure = true;
    const residuesByAuthCompId = /* @__PURE__ */ new Map();
    let residuesByAuthCompIdIsPure = true;
    const atomsById = new NumberMap(nAtoms + 1);
    const atomsByIndex = new NumberMap(nAtoms);
    const _labelCompIdSet = /* @__PURE__ */ new Set();
    const _authCompIdSet = /* @__PURE__ */ new Set();
    for (let iChain = 0; iChain < nChains; iChain++) {
      chainsByLabelEntityId.add(label_entity_id.value(iChain), iChain);
      chainsByLabelAsymId.add(label_asym_id.value(iChain), iChain);
      chainsByAuthAsymId.add(auth_asym_id.value(iChain), iChain);
      const iResFrom = h.residueAtomSegments.index[h.chainAtomSegments.offsets[iChain]];
      const iResTo = h.residueAtomSegments.index[h.chainAtomSegments.offsets[iChain + 1] - 1] + 1;
      const residuesWithLabelSeqId = filterInPlace(range(iResFrom, iResTo), (iRes) => label_seq_id.valueKind(iRes) === Present);
      residuesSortedByLabelSeqId.set(iChain, Sorting.create(residuesWithLabelSeqId, label_seq_id.value));
      const residuesWithAuthSeqId = filterInPlace(range(iResFrom, iResTo), (iRes) => auth_seq_id.valueKind(iRes) === Present);
      residuesSortedByAuthSeqId.set(iChain, Sorting.create(residuesWithAuthSeqId, auth_seq_id.value));
      const residuesHereByInsCode = new MultiMap();
      const residuesHereByLabelCompId = new MultiMap();
      const residuesHereByAuthCompId = new MultiMap();
      for (let iRes = iResFrom; iRes < iResTo; iRes++) {
        if (pdbx_PDB_ins_code.valueKind(iRes) === Present) {
          residuesHereByInsCode.add(pdbx_PDB_ins_code.value(iRes), iRes);
        }
        const iAtomFrom = h.residueAtomSegments.offsets[iRes];
        const iAtomTo = h.residueAtomSegments.offsets[iRes + 1];
        for (let iAtom = iAtomFrom; iAtom < iAtomTo; iAtom++) {
          _labelCompIdSet.add(label_comp_id.value(iAtom));
          _authCompIdSet.add(auth_comp_id.value(iAtom));
        }
        if (_labelCompIdSet.size > 1)
          residuesByLabelCompIdIsPure = false;
        if (_authCompIdSet.size > 1)
          residuesByAuthCompIdIsPure = false;
        for (const labelCompId of _labelCompIdSet)
          residuesHereByLabelCompId.add(labelCompId, iRes);
        for (const authCompId of _authCompIdSet)
          residuesHereByAuthCompId.add(authCompId, iRes);
        _labelCompIdSet.clear();
        _authCompIdSet.clear();
      }
      residuesByInsCode.set(iChain, residuesHereByInsCode);
      residuesByLabelCompId.set(iChain, residuesHereByLabelCompId);
      residuesByAuthCompId.set(iChain, residuesHereByAuthCompId);
    }
    const atomId = model.atomicConformation.atomId.value;
    const atomIndex = h.atomSourceIndex.value;
    for (let iAtom = 0; iAtom < nAtoms; iAtom++) {
      atomsById.set(atomId(iAtom), iAtom);
      atomsByIndex.set(atomIndex(iAtom), iAtom);
    }
    return {
      chainsByLabelEntityId,
      chainsByLabelAsymId,
      chainsByAuthAsymId,
      residuesSortedByLabelSeqId,
      residuesSortedByAuthSeqId,
      residuesByInsCode,
      residuesByLabelCompId,
      residuesByLabelCompIdIsPure,
      residuesByAuthCompId,
      residuesByAuthCompIdIsPure,
      atomsById,
      atomsByIndex
    };
  }
};
var Sorting = {
  /** Create a `Sorting` from an array of keys and a function returning their corresponding values.
   * If two keys have the same value, the smaller key will come first.
   * This function modifies `keys` - create a copy if you need the original order! */
  create(keys, valueFunction) {
    sortIfNeeded(keys, (a, b) => valueFunction(a) - valueFunction(b) || a - b);
    const values = SortedArray.ofSortedArray(keys.map(valueFunction));
    return { keys, values };
  },
  /** Return a newly allocated array of keys which have value equal to `target`.
   * The returned keys are sorted by their value. */
  getKeysWithValue(sorting, target) {
    return Sorting.getKeysWithValueInRange(sorting, target, target);
  },
  /** Return a newly allocated array of keys which have value within interval `[min, max]` (inclusive).
   * The returned keys are sorted by their value.
   * Undefined `min` is interpreted as negative infitity, undefined `max` is interpreted as positive infinity. */
  getKeysWithValueInRange(sorting, min, max) {
    const { keys, values } = sorting;
    if (!keys)
      return [];
    const n = keys.length;
    const from = min !== void 0 ? SortedArray.findPredecessorIndex(values, min) : 0;
    let to;
    if (max !== void 0) {
      to = from;
      while (to < n && values[to] <= max)
        to++;
    } else {
      to = n;
    }
    return keys.slice(from, to);
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/helpers/param-definition.js
function MaybeStringParamDefinition(defaultValue, info) {
  return ParamDefinition.Converted(stringifyMaybeString, parseMaybeString, ParamDefinition.Text(stringifyMaybeString(defaultValue), info));
}
function parseMaybeString(input) {
  return input === "" ? void 0 : input;
}
function stringifyMaybeString(str2) {
  return str2 === void 0 ? "" : str2;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/helpers/schemas.js
var { str, int } = Column.Schema;
var MVSAnnotationSchema = new Choice({
  whole_structure: "Whole Structure",
  entity: "Entity",
  chain: "Chain (label*)",
  auth_chain: "Chain (auth*)",
  residue: "Residue (label*)",
  auth_residue: "Residue (auth*)",
  residue_range: "Residue range (label*)",
  auth_residue_range: "Residue range (auth*)",
  atom: "Atom (label*)",
  auth_atom: "Atom (auth*)",
  all_atomic: "All atomic selectors"
}, "all_atomic");
function getCifAnnotationSchema(schemaName) {
  return pickObjectKeys(AllAtomicCifAnnotationSchema, FieldsForSchemas[schemaName]);
}
var AllAtomicCifAnnotationSchema = {
  /** Tag for grouping multiple annotation rows with the same `group_id` (e.g. to show one label for two chains);
   * if the `group_id` is not given, each row is processed separately */
  group_id: str,
  label_entity_id: str,
  label_asym_id: str,
  auth_asym_id: str,
  label_seq_id: int,
  auth_seq_id: int,
  pdbx_PDB_ins_code: str,
  /** Minimum label_seq_id (inclusive) */
  beg_label_seq_id: int,
  /** Maximum label_seq_id (inclusive) */
  end_label_seq_id: int,
  /** Minimum auth_seq_id (inclusive) */
  beg_auth_seq_id: int,
  /** Maximum auth_seq_id (inclusive) */
  end_auth_seq_id: int,
  label_comp_id: str,
  auth_comp_id: str,
  // residue_index: int, // 0-based residue index in the source file // TODO this is defined in Python builder but not supported by Molstar yet
  /** Atom name like 'CA', 'N', 'O'... */
  label_atom_id: str,
  /** Atom name like 'CA', 'N', 'O'... */
  auth_atom_id: str,
  /** Element symbol like 'H', 'He', 'Li', 'Be' (case-insensitive)... */
  type_symbol: str,
  /** Unique atom identifier across conformations (_atom_site.id) */
  atom_id: int,
  /** 0-based index of the atom in the source data */
  atom_index: int
};
var FieldsForSchemas = {
  whole_structure: ["group_id"],
  entity: ["group_id", "label_entity_id"],
  chain: ["group_id", "label_entity_id", "label_asym_id"],
  auth_chain: ["group_id", "auth_asym_id"],
  residue: ["group_id", "label_entity_id", "label_asym_id", "label_seq_id"],
  auth_residue: ["group_id", "auth_asym_id", "auth_seq_id", "pdbx_PDB_ins_code"],
  residue_range: ["group_id", "label_entity_id", "label_asym_id", "beg_label_seq_id", "end_label_seq_id"],
  auth_residue_range: ["group_id", "auth_asym_id", "beg_auth_seq_id", "end_auth_seq_id"],
  atom: ["group_id", "label_entity_id", "label_asym_id", "label_seq_id", "label_atom_id", "type_symbol", "atom_id", "atom_index"],
  auth_atom: ["group_id", "auth_asym_id", "auth_seq_id", "pdbx_PDB_ins_code", "auth_atom_id", "type_symbol", "atom_id", "atom_index"],
  all_atomic: Object.keys(AllAtomicCifAnnotationSchema)
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/helpers/selections.js
var EmptyArray = [];
function getAtomRangesForRow(model, row, indices) {
  const h = model.atomicHierarchy;
  const nAtoms = h.atoms._rowCount;
  const hasAtomIds = isAnyDefined(row.atom_id, row.atom_index);
  const hasAtomFilter = isAnyDefined(row.label_atom_id, row.auth_atom_id, row.type_symbol) || isDefined(row.label_comp_id) && !indices.residuesByLabelCompIdIsPure || isDefined(row.auth_comp_id) && !indices.residuesByAuthCompIdIsPure;
  const hasResidueFilter = isAnyDefined(row.label_seq_id, row.auth_seq_id, row.pdbx_PDB_ins_code, row.beg_label_seq_id, row.end_label_seq_id, row.beg_auth_seq_id, row.end_auth_seq_id, row.label_comp_id, row.auth_comp_id);
  const hasChainFilter = isAnyDefined(row.label_asym_id, row.auth_asym_id, row.label_entity_id);
  if (hasAtomIds) {
    const theAtom = getTheAtomForRow(model, row, indices);
    return theAtom !== void 0 ? AtomRanges.single(theAtom, theAtom + 1) : AtomRanges.empty();
  }
  if (!hasChainFilter && !hasResidueFilter && !hasAtomFilter) {
    return AtomRanges.single(0, nAtoms);
  }
  const qualifyingChains = getQualifyingChains(model, row, indices);
  if (!hasResidueFilter && !hasAtomFilter) {
    const chainOffsets = h.chainAtomSegments.offsets;
    const ranges2 = AtomRanges.empty();
    for (const iChain of qualifyingChains) {
      AtomRanges.add(ranges2, chainOffsets[iChain], chainOffsets[iChain + 1]);
    }
    return ranges2;
  }
  const qualifyingResidues = getQualifyingResidues(model, row, indices, qualifyingChains);
  if (!hasAtomFilter) {
    const residueOffsets = h.residueAtomSegments.offsets;
    const ranges2 = AtomRanges.empty();
    for (const iRes of qualifyingResidues) {
      AtomRanges.add(ranges2, residueOffsets[iRes], residueOffsets[iRes + 1]);
    }
    return ranges2;
  }
  const qualifyingAtoms = getQualifyingAtoms(model, row, indices, qualifyingResidues);
  const ranges = AtomRanges.empty();
  for (const iAtom of qualifyingAtoms) {
    AtomRanges.add(ranges, iAtom, iAtom + 1);
  }
  return ranges;
}
function getAtomRangesForRows(model, rows, indices) {
  if (Array.isArray(rows)) {
    return AtomRanges.union(rows.map((row) => getAtomRangesForRow(model, row, indices)));
  } else {
    return getAtomRangesForRow(model, rows, indices);
  }
}
function getQualifyingChains(model, row, indices) {
  var _a, _b, _c;
  const { auth_asym_id, label_entity_id, _rowCount: nChains } = model.atomicHierarchy.chains;
  let result = void 0;
  if (isDefined(row.label_asym_id)) {
    result = (_a = indices.chainsByLabelAsymId.get(row.label_asym_id)) !== null && _a !== void 0 ? _a : EmptyArray;
  }
  if (isDefined(row.auth_asym_id)) {
    if (result) {
      result = result.filter((i) => auth_asym_id.value(i) === row.auth_asym_id);
    } else {
      result = (_b = indices.chainsByAuthAsymId.get(row.auth_asym_id)) !== null && _b !== void 0 ? _b : EmptyArray;
    }
  }
  if (isDefined(row.label_entity_id)) {
    if (result) {
      result = result.filter((i) => label_entity_id.value(i) === row.label_entity_id);
    } else {
      result = (_c = indices.chainsByLabelEntityId.get(row.label_entity_id)) !== null && _c !== void 0 ? _c : EmptyArray;
    }
  }
  result !== null && result !== void 0 ? result : result = range(nChains);
  return result;
}
function getQualifyingResidues(model, row, indices, fromChains) {
  var _a, _b, _c;
  const { label_seq_id, auth_seq_id, pdbx_PDB_ins_code } = model.atomicHierarchy.residues;
  const { label_comp_id, auth_comp_id } = model.atomicHierarchy.atoms;
  const { residueAtomSegments, chainAtomSegments } = model.atomicHierarchy;
  const { Present } = Column.ValueKind;
  const result = [];
  for (const iChain of fromChains) {
    let residuesHere = void 0;
    if (isDefined(row.label_seq_id)) {
      const sorting = indices.residuesSortedByLabelSeqId.get(iChain);
      residuesHere = Sorting.getKeysWithValue(sorting, row.label_seq_id);
    }
    if (isDefined(row.auth_seq_id)) {
      if (residuesHere) {
        residuesHere = residuesHere.filter((i) => auth_seq_id.valueKind(i) === Present && auth_seq_id.value(i) === row.auth_seq_id);
      } else {
        const sorting = indices.residuesSortedByAuthSeqId.get(iChain);
        residuesHere = Sorting.getKeysWithValue(sorting, row.auth_seq_id);
      }
    }
    if (isDefined(row.pdbx_PDB_ins_code)) {
      if (residuesHere) {
        residuesHere = residuesHere.filter((i) => pdbx_PDB_ins_code.value(i) === row.pdbx_PDB_ins_code);
      } else {
        residuesHere = (_a = indices.residuesByInsCode.get(iChain).get(row.pdbx_PDB_ins_code)) !== null && _a !== void 0 ? _a : EmptyArray;
      }
    }
    if (isDefined(row.beg_label_seq_id) || isDefined(row.end_label_seq_id)) {
      if (residuesHere) {
        if (isDefined(row.beg_label_seq_id)) {
          residuesHere = residuesHere.filter((i) => label_seq_id.valueKind(i) === Present && label_seq_id.value(i) >= row.beg_label_seq_id);
        }
        if (isDefined(row.end_label_seq_id)) {
          residuesHere = residuesHere.filter((i) => label_seq_id.valueKind(i) === Present && label_seq_id.value(i) <= row.end_label_seq_id);
        }
      } else {
        const sorting = indices.residuesSortedByLabelSeqId.get(iChain);
        residuesHere = Sorting.getKeysWithValueInRange(sorting, row.beg_label_seq_id, row.end_label_seq_id);
      }
    }
    if (isDefined(row.beg_auth_seq_id) || isDefined(row.end_auth_seq_id)) {
      if (residuesHere) {
        if (isDefined(row.beg_auth_seq_id)) {
          residuesHere = residuesHere.filter((i) => auth_seq_id.valueKind(i) === Present && auth_seq_id.value(i) >= row.beg_auth_seq_id);
        }
        if (isDefined(row.end_auth_seq_id)) {
          residuesHere = residuesHere.filter((i) => auth_seq_id.valueKind(i) === Present && auth_seq_id.value(i) <= row.end_auth_seq_id);
        }
      } else {
        const sorting = indices.residuesSortedByAuthSeqId.get(iChain);
        residuesHere = Sorting.getKeysWithValueInRange(sorting, row.beg_auth_seq_id, row.end_auth_seq_id);
      }
    }
    if (isDefined(row.label_comp_id)) {
      if (residuesHere) {
        if (indices.residuesByLabelCompIdIsPure) {
          residuesHere = residuesHere.filter((i) => label_comp_id.value(residueAtomSegments.offsets[i]) === row.label_comp_id);
        } else {
          residuesHere = residuesHere.filter((i) => {
            for (let iAtom = residueAtomSegments.offsets[i], stop = residueAtomSegments.offsets[i + 1]; iAtom < stop; iAtom++) {
              if (label_comp_id.value(iAtom) === row.label_comp_id)
                return true;
            }
          });
        }
      } else {
        residuesHere = (_b = indices.residuesByLabelCompId.get(iChain).get(row.label_comp_id)) !== null && _b !== void 0 ? _b : EmptyArray;
      }
    }
    if (isDefined(row.auth_comp_id)) {
      if (residuesHere) {
        if (indices.residuesByAuthCompIdIsPure) {
          residuesHere = residuesHere.filter((i) => auth_comp_id.value(residueAtomSegments.offsets[i]) === row.auth_comp_id);
        } else {
          residuesHere = residuesHere.filter((i) => {
            for (let iAtom = residueAtomSegments.offsets[i], stop = residueAtomSegments.offsets[i + 1]; iAtom < stop; iAtom++) {
              if (auth_comp_id.value(iAtom) === row.auth_comp_id)
                return true;
            }
          });
        }
      } else {
        residuesHere = (_c = indices.residuesByAuthCompId.get(iChain).get(row.auth_comp_id)) !== null && _c !== void 0 ? _c : EmptyArray;
      }
    }
    if (!residuesHere) {
      const firstResidueForChain = residueAtomSegments.index[chainAtomSegments.offsets[iChain]];
      const firstResidueAfterChain = residueAtomSegments.index[chainAtomSegments.offsets[iChain + 1] - 1] + 1;
      residuesHere = range(firstResidueForChain, firstResidueAfterChain);
    }
    arrayExtend(result, residuesHere);
  }
  return result;
}
function getQualifyingAtoms(model, row, indices, fromResidues) {
  const { label_atom_id, auth_atom_id, type_symbol, label_comp_id, auth_comp_id } = model.atomicHierarchy.atoms;
  const residueAtomSegments_offsets = model.atomicHierarchy.residueAtomSegments.offsets;
  const result = [];
  for (const iRes of fromResidues) {
    const atomIdcs = range(residueAtomSegments_offsets[iRes], residueAtomSegments_offsets[iRes + 1]);
    if (isDefined(row.label_atom_id)) {
      filterInPlace(atomIdcs, (iAtom) => label_atom_id.value(iAtom) === row.label_atom_id);
    }
    if (isDefined(row.auth_atom_id)) {
      filterInPlace(atomIdcs, (iAtom) => auth_atom_id.value(iAtom) === row.auth_atom_id);
    }
    if (isDefined(row.type_symbol)) {
      filterInPlace(atomIdcs, (iAtom) => {
        var _a;
        return type_symbol.value(iAtom) === ((_a = row.type_symbol) === null || _a === void 0 ? void 0 : _a.toUpperCase());
      });
    }
    if (isDefined(row.label_comp_id) && !indices.residuesByLabelCompIdIsPure) {
      filterInPlace(atomIdcs, (iAtom) => label_comp_id.value(iAtom) === row.label_comp_id);
    }
    if (isDefined(row.auth_comp_id) && !indices.residuesByAuthCompIdIsPure) {
      filterInPlace(atomIdcs, (iAtom) => auth_comp_id.value(iAtom) === row.auth_comp_id);
    }
    arrayExtend(result, atomIdcs);
  }
  return result;
}
function getTheAtomForRow(model, row, indices) {
  let iAtom = void 0;
  if (!isDefined(row.atom_id) && !isDefined(row.atom_index))
    throw new Error("ArgumentError: at least one of row.atom_id, row.atom_index must be defined.");
  if (isDefined(row.atom_id) && isDefined(row.atom_index)) {
    const a1 = indices.atomsById.get(row.atom_id);
    const a2 = indices.atomsByIndex.get(row.atom_index);
    if (a1 !== a2)
      return void 0;
    iAtom = a1;
  }
  if (isDefined(row.atom_id)) {
    iAtom = indices.atomsById.get(row.atom_id);
  }
  if (isDefined(row.atom_index)) {
    iAtom = indices.atomsByIndex.get(row.atom_index);
  }
  if (iAtom === void 0)
    return void 0;
  if (!atomQualifies(model, iAtom, row))
    return void 0;
  return iAtom;
}
function atomQualifies(model, iAtom, row) {
  var _a;
  const h = model.atomicHierarchy;
  const iChain = h.chainAtomSegments.index[iAtom];
  const label_asym_id = h.chains.label_asym_id.value(iChain);
  const auth_asym_id = h.chains.auth_asym_id.value(iChain);
  const label_entity_id = h.chains.label_entity_id.value(iChain);
  if (!matches(row.label_asym_id, label_asym_id))
    return false;
  if (!matches(row.auth_asym_id, auth_asym_id))
    return false;
  if (!matches(row.label_entity_id, label_entity_id))
    return false;
  const iRes = h.residueAtomSegments.index[iAtom];
  const label_seq_id = h.residues.label_seq_id.valueKind(iRes) === Column.ValueKind.Present ? h.residues.label_seq_id.value(iRes) : void 0;
  const auth_seq_id = h.residues.auth_seq_id.valueKind(iRes) === Column.ValueKind.Present ? h.residues.auth_seq_id.value(iRes) : void 0;
  const pdbx_PDB_ins_code = h.residues.pdbx_PDB_ins_code.value(iRes);
  if (!matches(row.label_seq_id, label_seq_id))
    return false;
  if (!matches(row.auth_seq_id, auth_seq_id))
    return false;
  if (!matches(row.pdbx_PDB_ins_code, pdbx_PDB_ins_code))
    return false;
  if (!matchesRange(row.beg_label_seq_id, row.end_label_seq_id, label_seq_id))
    return false;
  if (!matchesRange(row.beg_auth_seq_id, row.end_auth_seq_id, auth_seq_id))
    return false;
  const label_comp_id = h.atoms.label_comp_id.value(iAtom);
  const auth_comp_id = h.atoms.auth_comp_id.value(iAtom);
  const label_atom_id = h.atoms.label_atom_id.value(iAtom);
  const auth_atom_id = h.atoms.auth_atom_id.value(iAtom);
  const type_symbol = h.atoms.type_symbol.value(iAtom);
  const atom_id = model.atomicConformation.atomId.value(iAtom);
  const atom_index = h.atomSourceIndex.value(iAtom);
  if (!matches(row.label_comp_id, label_comp_id))
    return false;
  if (!matches(row.auth_comp_id, auth_comp_id))
    return false;
  if (!matches(row.label_atom_id, label_atom_id))
    return false;
  if (!matches(row.auth_atom_id, auth_atom_id))
    return false;
  if (!matches((_a = row.type_symbol) === null || _a === void 0 ? void 0 : _a.toUpperCase(), type_symbol))
    return false;
  if (!matches(row.atom_id, atom_id))
    return false;
  if (!matches(row.atom_index, atom_index))
    return false;
  return true;
}
function matches(requiredValue, value) {
  return !isDefined(requiredValue) || value === requiredValue;
}
function matchesRange(requiredMin, requiredMax, value) {
  if (isDefined(requiredMin) && (!isDefined(value) || value < requiredMin))
    return false;
  if (isDefined(requiredMax) && (!isDefined(value) || value > requiredMax))
    return false;
  return true;
}
function rowToExpression(row) {
  return element_exports.Schema.toExpression(row);
}
function rowsToExpression(rows) {
  return element_exports.Schema.toExpression({
    items: rows
  });
}
function groupRows(rows) {
  let counter = 0;
  const groupMap = /* @__PURE__ */ new Map();
  const groups = [];
  for (let i = 0; i < rows.length; i++) {
    const group_id = rows[i].group_id;
    if (group_id === void 0) {
      groups.push(counter++);
    } else {
      const groupIndex = groupMap.get(group_id);
      if (groupIndex === void 0) {
        groupMap.set(group_id, counter);
        groups.push(counter);
        counter++;
      } else {
        groups.push(groupIndex);
      }
    }
  }
  const rowIndices = range(rows.length).sort((i, j) => groups[i] - groups[j]);
  const offsets = [];
  for (let i = 0; i < rows.length; i++) {
    if (i === 0 || groups[rowIndices[i]] !== groups[rowIndices[i - 1]])
      offsets.push(i);
  }
  offsets.push(rowIndices.length);
  return { count: offsets.length - 1, offsets, grouped: rowIndices };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/annotation-prop.js
var MVSAnnotationFormat = new Choice({ json: "json", cif: "cif", bcif: "bcif" }, "json");
var MVSAnnotationFormatTypes = { json: "string", cif: "string", bcif: "binary" };
var MVSAnnotationsParams = {
  annotations: ParamDefinition.ObjectList({
    source: ParamDefinition.MappedStatic("source-cif", {
      "source-cif": ParamDefinition.EmptyGroup(),
      "url": ParamDefinition.Group({
        url: ParamDefinition.Text(""),
        format: MVSAnnotationFormat.PDSelect()
      })
    }),
    schema: MVSAnnotationSchema.PDSelect(),
    cifBlock: ParamDefinition.MappedStatic("index", {
      index: ParamDefinition.Group({ index: ParamDefinition.Numeric(0, { min: 0, step: 1 }, { description: "0-based index of the block" }) }),
      header: ParamDefinition.Group({ header: ParamDefinition.Text(void 0, { description: "Block header" }) })
    }, { description: "Specify which CIF block contains annotation data (only relevant when format=cif or format=bcif)" }),
    cifCategory: MaybeStringParamDefinition(void 0, { description: "Specify which CIF category contains annotation data (only relevant when format=cif or format=bcif)" }),
    id: ParamDefinition.Text("", { description: "Arbitrary identifier that can be referenced by MVSAnnotationColorTheme" })
  }, (obj) => obj.id)
};
var MVSAnnotationsProvider = CustomModelProperty.createProvider({
  label: "MVS Annotations",
  descriptor: CustomPropertyDescriptor({
    name: "mvs-annotations"
  }),
  type: "static",
  defaultParams: MVSAnnotationsParams,
  getParams: (data) => MVSAnnotationsParams,
  isApplicable: (data) => true,
  obtain: async (ctx, data, props) => {
    var _a;
    props = { ...ParamDefinition.getDefaultValues(MVSAnnotationsParams), ...props };
    const specs = (_a = props.annotations) !== null && _a !== void 0 ? _a : [];
    const annots = await MVSAnnotations.fromSpecs(ctx, specs, data);
    return { value: annots };
  }
});
var MVSAnnotations = class _MVSAnnotations {
  constructor(dict) {
    this.dict = dict;
  }
  static async fromSpecs(ctx, specs, model) {
    var _a;
    const sources = specs.map(annotationSourceFromSpec);
    const files = await getFilesFromSources(ctx, sources, model);
    const annots = {};
    for (let i = 0; i < specs.length; i++) {
      const spec = specs[i];
      try {
        const file = files[i];
        if (!file.ok)
          throw file.error;
        annots[spec.id] = await MVSAnnotation.fromSpec(ctx, spec, file.value);
      } catch (err) {
        (_a = ctx.errorContext) === null || _a === void 0 ? void 0 : _a.add("mvs", `Failed to obtain annotation (${err}).
Annotation specification source params: ${JSON.stringify(spec.source.params)}`);
        console.error(`Failed to obtain annotation (${err}).
Annotation specification:`, spec);
        annots[spec.id] = MVSAnnotation.createEmpty(spec.schema);
      }
    }
    return new _MVSAnnotations(annots);
  }
  getAnnotation(id) {
    return this.dict[id];
  }
  getAllAnnotations() {
    return Object.values(this.dict);
  }
};
function getMVSAnnotationForStructure(structure, annotationId) {
  const models = structure.isEmpty ? [] : structure.models;
  for (const model of models) {
    if (model.customProperties.has(MVSAnnotationsProvider.descriptor)) {
      const annots = MVSAnnotationsProvider.get(model).value;
      const annotation = annots === null || annots === void 0 ? void 0 : annots.getAnnotation(annotationId);
      if (annotation) {
        return { annotation, model };
      }
    }
  }
  return { annotation: void 0, model: void 0 };
}
var MVSAnnotation = class _MVSAnnotation {
  constructor(data, schema) {
    this.data = data;
    this.schema = schema;
    this.indexedModels = /* @__PURE__ */ new Map();
    this.rows = void 0;
  }
  /** Create a new `MVSAnnotation` based on specification `spec`. Use `file` if provided, otherwise download the file.
   * Throw error if download fails or problem with data. */
  static async fromSpec(ctx, spec, file) {
    var _a;
    file !== null && file !== void 0 ? file : file = await getFileFromSource(ctx, annotationSourceFromSpec(spec));
    let data;
    switch (file.format) {
      case "json":
        data = file;
        break;
      case "cif":
        if (file.data.blocks.length === 0)
          throw new Error("No block in CIF");
        const blockSpec2 = spec.cifBlock;
        let block;
        switch (blockSpec2.name) {
          case "header":
            const foundBlock = file.data.blocks.find((b) => b.header === blockSpec2.params.header);
            if (!foundBlock)
              throw new Error(`CIF block with header ${blockSpec2.params.header} not found`);
            block = foundBlock;
            break;
          case "index":
            block = file.data.blocks[blockSpec2.params.index];
            if (!block)
              throw new Error(`CIF block with index ${blockSpec2.params.index} not found`);
            break;
        }
        const categoryName = (_a = spec.cifCategory) !== null && _a !== void 0 ? _a : Object.keys(block.categories)[0];
        if (!categoryName)
          throw new Error("There are no categories in CIF block");
        const category = block.categories[categoryName];
        if (!category)
          throw new Error(`CIF category ${categoryName} not found`);
        data = { format: "cif", data: category };
        break;
    }
    return new _MVSAnnotation(data, spec.schema);
  }
  static createEmpty(schema) {
    return new _MVSAnnotation({ format: "json", data: [] }, schema);
  }
  /** Reference implementation of `getAnnotationForLocation`, just for checking, DO NOT USE DIRECTLY */
  getAnnotationForLocation_Reference(loc) {
    const model = loc.unit.model;
    const iAtom = loc.element;
    let result = void 0;
    for (const row of this.getRows()) {
      if (atomQualifies(model, iAtom, row))
        result = row;
    }
    return result;
  }
  /** Return value of field `fieldName` assigned to location `loc`, if any */
  getValueForLocation(loc, fieldName) {
    const indexedModel = this.getIndexedModel(loc.unit.model);
    const iRow = indexedModel[loc.element];
    return this.getValueForRow(iRow, fieldName);
  }
  /** Return value of field `fieldName` assigned to `i`-th annotation row, if any */
  getValueForRow(i, fieldName) {
    if (i < 0)
      return void 0;
    switch (this.data.format) {
      case "json":
        const value = getValueFromJson(i, fieldName, this.data.data);
        if (value === void 0 || typeof value === "string")
          return value;
        else
          return `${value}`;
      case "cif":
        return getValueFromCif(i, fieldName, this.data.data);
    }
  }
  /** Return cached `ElementIndex` -> `MVSAnnotationRow` mapping for `Model` (or create it if not cached yet) */
  getIndexedModel(model) {
    const key = model.id;
    if (!this.indexedModels.has(key)) {
      const result = this.getRowForEachAtom(model);
      this.indexedModels.set(key, result);
    }
    return this.indexedModels.get(key);
  }
  /** Create `ElementIndex` -> `MVSAnnotationRow` mapping for `Model` */
  getRowForEachAtom(model) {
    const indices = IndicesAndSortings.get(model);
    const nAtoms = model.atomicHierarchy.atoms._rowCount;
    const result = Array(nAtoms).fill(-1);
    const rows = this.getRows();
    for (let i = 0, nRows = rows.length; i < nRows; i++) {
      const atomRanges = getAtomRangesForRow(model, rows[i], indices);
      AtomRanges.foreach(atomRanges, (from, to) => result.fill(i, from, to));
    }
    return result;
  }
  /** Parse and return all annotation rows in this annotation */
  _getRows() {
    switch (this.data.format) {
      case "json":
        return getRowsFromJson(this.data.data, this.schema);
      case "cif":
        return getRowsFromCif(this.data.data, this.schema);
    }
  }
  /** Parse and return all annotation rows in this annotation, or return cached result if available */
  getRows() {
    var _a;
    return (_a = this.rows) !== null && _a !== void 0 ? _a : this.rows = this._getRows();
  }
};
function getValueFromJson(rowIndex, fieldName, data) {
  var _a, _b;
  const js = data;
  if (Array.isArray(js)) {
    const row = (_a = js[rowIndex]) !== null && _a !== void 0 ? _a : {};
    return row[fieldName];
  } else {
    const column = (_b = js[fieldName]) !== null && _b !== void 0 ? _b : [];
    return column[rowIndex];
  }
}
function getValueFromCif(rowIndex, fieldName, data) {
  const column = data.getField(fieldName);
  if (!column)
    return void 0;
  if (column.valueKind(rowIndex) !== Column.ValueKind.Present)
    return void 0;
  return column.str(rowIndex);
}
function getRowsFromJson(data, schema) {
  const js = data;
  const cifSchema = getCifAnnotationSchema(schema);
  if (Array.isArray(js)) {
    return js.map((row) => pickObjectKeys(row, Object.keys(cifSchema)));
  } else {
    const rows = [];
    const keys = Object.keys(js).filter((key) => Object.hasOwn(cifSchema, key));
    if (keys.length > 0) {
      const n = js[keys[0]].length;
      if (keys.some((key) => js[key].length !== n))
        throw new Error("FormatError: arrays must have the same length.");
      for (let i = 0; i < n; i++) {
        const item = {};
        for (const key of keys) {
          item[key] = js[key][i];
        }
        rows.push(item);
      }
    }
    return rows;
  }
}
function getRowsFromCif(data, schema) {
  const rows = [];
  const cifSchema = getCifAnnotationSchema(schema);
  const table = toTable(cifSchema, data);
  arrayExtend(rows, getRowsFromTable(table));
  return rows;
}
function getRowsFromTable(table) {
  const rows = [];
  const columns = table._columns;
  const nRows = table._rowCount;
  const Present = Column.ValueKind.Present;
  for (let iRow = 0; iRow < nRows; iRow++) {
    const row = {};
    for (const col of columns) {
      if (table[col].valueKind(iRow) === Present) {
        row[col] = table[col].value(iRow);
      }
    }
    rows[iRow] = row;
  }
  return rows;
}
async function getFileFromSource(ctx, source, model) {
  switch (source.kind) {
    case "source-cif":
      return { format: "cif", data: getSourceFileFromModel(model) };
    case "url":
      const url = Asset.getUrlAsset(ctx.assetManager, source.url);
      const dataType = MVSAnnotationFormatTypes[source.format];
      const dataWrapper = await ctx.assetManager.resolve(url, dataType).runInContext(ctx.runtime);
      const rawData = dataWrapper.data;
      if (!rawData)
        throw new Error("Missing data");
      switch (source.format) {
        case "json":
          const json = JSON.parse(rawData);
          return { format: "json", data: json };
        case "cif":
        case "bcif":
          const parsed = await CIF.parse(rawData).run();
          if (parsed.isError)
            throw new Error(`Failed to parse ${source.format}`);
          return { format: "cif", data: parsed.result };
      }
  }
}
async function getFilesFromSources(ctx, sources, model) {
  var _a;
  const promises = {};
  for (const src of sources) {
    const key = canonicalJsonString(src);
    (_a = promises[key]) !== null && _a !== void 0 ? _a : promises[key] = safePromise(getFileFromSource(ctx, src, model));
  }
  const files = await promiseAllObj(promises);
  return sources.map((src) => files[canonicalJsonString(src)]);
}
function getSourceFileFromModel(model) {
  if (model && MmcifFormat.is(model.sourceData)) {
    if (model.sourceData.data.file) {
      return model.sourceData.data.file;
    } else {
      const frame = model.sourceData.data.frame;
      const block = CifBlock(Array.from(frame.categoryNames), frame.categories, frame.header);
      const file = CifFile([block]);
      return file;
    }
  } else {
    console.warn("Could not get CifFile from Model, returning empty CifFile");
    return CifFile([]);
  }
}
function annotationSourceFromSpec(s) {
  switch (s.source.name) {
    case "url":
      return { kind: "url", ...s.source.params };
    case "source-cif":
      return { kind: "source-cif" };
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/is-mvs-model-prop.js
var IsMVSModelParams = {
  isMvs: ParamDefinition.Boolean(false, { description: "Flag this model as managed by MolViewSpec and enable MolViewSpec features" })
};
var IsMVSModelProvider = CustomModelProperty.createProvider({
  label: "MVS",
  descriptor: CustomPropertyDescriptor({
    name: "mvs-is-mvs-model"
  }),
  type: "static",
  defaultParams: IsMVSModelParams,
  getParams: (data) => IsMVSModelParams,
  isApplicable: (data) => true,
  obtain: async (ctx, data, props) => ({ value: {} })
});
function isMVSModel(model) {
  var _a;
  return !!((_a = IsMVSModelProvider.props(model)) === null || _a === void 0 ? void 0 : _a.isMvs);
}
function isMVSStructure(structure) {
  return structure.models.some(isMVSModel);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/annotation-color-theme.js
var MVSAnnotationColorThemeParams = {
  annotationId: ParamDefinition.Text("", { description: 'Reference to "Annotation" custom model property' }),
  fieldName: ParamDefinition.Text("color", { description: "Annotation field (column) from which to take color values" }),
  background: ParamDefinition.Color(ColorNames.gainsboro, { description: "Color for elements without annotation" })
};
function MVSAnnotationColorTheme(ctx, props) {
  let color = () => props.background;
  if (ctx.structure && !ctx.structure.isEmpty) {
    const { annotation } = getMVSAnnotationForStructure(ctx.structure, props.annotationId);
    if (annotation) {
      const colorForStructureElementLocation = (location) => {
        var _a;
        return (_a = decodeColor(annotation === null || annotation === void 0 ? void 0 : annotation.getValueForLocation(location, props.fieldName))) !== null && _a !== void 0 ? _a : props.background;
      };
      const auxLocation = element_exports.Location.create(ctx.structure);
      color = (location) => {
        if (element_exports.Location.is(location)) {
          return colorForStructureElementLocation(location);
        } else if (Bond.isLocation(location)) {
          auxLocation.unit = location.aUnit;
          auxLocation.element = location.aUnit.elements[location.aIndex];
          return colorForStructureElementLocation(auxLocation);
        }
        return props.background;
      };
    } else {
      console.error(`Annotation source "${props.annotationId}" not present`);
    }
  }
  return {
    factory: MVSAnnotationColorTheme,
    granularity: "group",
    preferSmoothing: true,
    color,
    props,
    description: "Assigns colors based on custom MolViewSpec annotation data."
  };
}
var MVSAnnotationColorThemeProvider = {
  name: "mvs-annotation",
  label: "MVS Annotation",
  category: "Miscellaneous",
  // ColorTheme.Category.Misc can cause webpack build error due to import ordering
  factory: MVSAnnotationColorTheme,
  getParams: (ctx) => MVSAnnotationColorThemeParams,
  defaultValues: ParamDefinition.getDefaultValues(MVSAnnotationColorThemeParams),
  isApplicable: (ctx) => !!ctx.structure && isMVSStructure(ctx.structure)
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/helpers/label-text.js
var tmpVec = Vec3();
var tmpArray = [];
var boundaryHelper = new BoundaryHelper("98");
var outAtoms = [];
var outFirstAtomIndex = {};
function textPropsForSelection(structure, sizeFunction, rows, onlyInModel) {
  var _a;
  var _b;
  const loc = element_exports.Location.create(structure);
  const { units } = structure;
  const { type_symbol } = StructureProperties.atom;
  tmpArray.length = 0;
  let includedAtoms = 0;
  let includedHeavyAtoms = 0;
  let group = void 0;
  let atomSize = void 0;
  const rangesByModel = {};
  for (let iUnit = 0, nUnits = units.length; iUnit < nUnits; iUnit++) {
    const unit = units[iUnit];
    if (onlyInModel && unit.model.id !== onlyInModel.id)
      continue;
    const ranges = (_a = rangesByModel[_b = unit.model.id]) !== null && _a !== void 0 ? _a : rangesByModel[_b] = getAtomRangesForRows(unit.model, rows, IndicesAndSortings.get(unit.model));
    loc.unit = unit;
    AtomRanges.selectAtomsInRanges(unit.elements, ranges, outAtoms, outFirstAtomIndex);
    for (const atom of outAtoms) {
      loc.element = atom;
      unit.conformation.position(atom, tmpVec);
      arrayExtend(tmpArray, tmpVec);
      group !== null && group !== void 0 ? group : group = structure.serialMapping.cumulativeUnitElementCount[iUnit] + outFirstAtomIndex.value;
      atomSize !== null && atomSize !== void 0 ? atomSize : atomSize = sizeFunction(loc);
      includedAtoms++;
      if (type_symbol(loc) !== "H")
        includedHeavyAtoms++;
    }
  }
  if (includedAtoms > 0) {
    const { center, radius } = includedAtoms > 1 ? boundarySphere(tmpArray) : { center: Vec3.fromArray(Vec3(), tmpArray, 0), radius: 1.1 * atomSize };
    const scale = (includedHeavyAtoms || includedAtoms) ** (1 / 3);
    return { center, depth: radius, scale, group };
  }
}
function boundarySphere(flatCoords) {
  const length = flatCoords.length;
  boundaryHelper.reset();
  for (let offset = 0; offset < length; offset += 3) {
    Vec3.fromArray(tmpVec, flatCoords, offset);
    boundaryHelper.includePosition(tmpVec);
  }
  boundaryHelper.finishedIncludeStep();
  for (let offset = 0; offset < length; offset += 3) {
    Vec3.fromArray(tmpVec, flatCoords, offset);
    boundaryHelper.radiusPosition(tmpVec);
  }
  return boundaryHelper.getSphere();
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/annotation-label/visual.js
var MVSAnnotationLabelTextParams = {
  annotationId: ParamDefinition.Text("", { description: 'Reference to "Annotation" custom model property', isEssential: true }),
  fieldName: ParamDefinition.Text("label", { description: "Annotation field (column) from which to take label contents", isEssential: true }),
  ...omitObjectKeys(LabelTextParams, ["level", "chainScale", "residueScale", "elementScale"]),
  borderColor: { ...LabelTextParams.borderColor, defaultValue: ColorNames.black }
};
function MVSAnnotationLabelTextVisual(materialId) {
  return ComplexTextVisual({
    defaultProps: ParamDefinition.getDefaultValues(MVSAnnotationLabelTextParams),
    createGeometry: createLabelText,
    createLocationIterator: ElementIterator.fromStructure,
    getLoci: getSerialElementLoci,
    eachLocation: eachSerialElement,
    setUpdateState: (state, newProps, currentProps) => {
      state.createGeometry = newProps.annotationId !== currentProps.annotationId || newProps.fieldName !== currentProps.fieldName;
    }
  }, materialId);
}
function createLabelText(ctx, structure, theme, props, text) {
  var _a;
  const { annotation, model } = getMVSAnnotationForStructure(structure, props.annotationId);
  const rows = (_a = annotation === null || annotation === void 0 ? void 0 : annotation.getRows()) !== null && _a !== void 0 ? _a : [];
  const { count, offsets, grouped } = groupRows(rows);
  const builder = TextBuilder.create(props, count, count / 2, text);
  for (let iGroup = 0; iGroup < count; iGroup++) {
    const iFirstRowInGroup = grouped[offsets[iGroup]];
    const labelText = annotation.getValueForRow(iFirstRowInGroup, props.fieldName);
    if (!labelText)
      continue;
    const rowsInGroup = grouped.slice(offsets[iGroup], offsets[iGroup + 1]).map((j) => rows[j]);
    const p = textPropsForSelection(structure, theme.size.size, rowsInGroup, model);
    if (!p)
      continue;
    builder.add(labelText, p.center[0], p.center[1], p.center[2], p.depth, p.scale, p.group);
  }
  return builder.getText();
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/annotation-label/representation.js
var MVSAnnotationLabelVisuals = {
  "label-text": (ctx, getParams) => ComplexRepresentation("Label text", ctx, getParams, MVSAnnotationLabelTextVisual)
};
var MVSAnnotationLabelParams = {
  ...MVSAnnotationLabelTextParams,
  visuals: ParamDefinition.MultiSelect(["label-text"], ParamDefinition.objectToOptions(MVSAnnotationLabelVisuals))
};
function MVSAnnotationLabelRepresentation(ctx, getParams) {
  const repr = Representation.createMulti("Label", ctx, getParams, StructureRepresentationStateBuilder, MVSAnnotationLabelVisuals);
  repr.setState({ pickable: false, markerActions: MarkerAction.None });
  return repr;
}
var MVSAnnotationLabelRepresentationProvider = StructureRepresentationProvider({
  name: "mvs-annotation-label",
  label: "MVS Annotation Label",
  description: "Displays labels based on annotation custom model property",
  factory: MVSAnnotationLabelRepresentation,
  getParams: () => MVSAnnotationLabelParams,
  defaultValues: ParamDefinition.getDefaultValues(MVSAnnotationLabelParams),
  defaultColorTheme: { name: "uniform" },
  // this ain't workin
  defaultSizeTheme: { name: "physical" },
  isApplicable: (structure) => structure.elementCount > 0 && isMVSStructure(structure)
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/annotation-tooltips-prop.js
var MVSAnnotationTooltipsParams = {
  tooltips: ParamDefinition.ObjectList({
    annotationId: ParamDefinition.Text("", { description: 'Reference to "MVS Annotation" custom model property' }),
    fieldName: ParamDefinition.Text("tooltip", { description: "Annotation field (column) from which to take color values" })
  }, (obj) => `${obj.annotationId}:${obj.fieldName}`)
};
var MVSAnnotationTooltipsProvider = CustomStructureProperty.createProvider({
  label: "MVS Annotation Tooltips",
  descriptor: CustomPropertyDescriptor({
    name: "mvs-annotation-tooltips"
  }),
  type: "local",
  defaultParams: MVSAnnotationTooltipsParams,
  getParams: (data) => MVSAnnotationTooltipsParams,
  isApplicable: (data) => data.root === data,
  obtain: async (ctx, data, props) => {
    const fullProps = { ...ParamDefinition.getDefaultValues(MVSAnnotationTooltipsParams), ...props };
    return { value: fullProps };
  }
});
var MVSAnnotationTooltipsLabelProvider = {
  label: (loci) => {
    switch (loci.kind) {
      case "element-loci":
        if (!loci.structure.customPropertyDescriptors.hasReference(MVSAnnotationTooltipsProvider.descriptor))
          return void 0;
        const location = element_exports.Loci.getFirstLocation(loci);
        if (!location)
          return void 0;
        const tooltipProps = MVSAnnotationTooltipsProvider.get(location.structure).value;
        if (!tooltipProps || tooltipProps.tooltips.length === 0)
          return void 0;
        const annotations = MVSAnnotationsProvider.get(location.unit.model).value;
        const texts = tooltipProps.tooltips.map((p) => {
          var _a;
          return (_a = annotations === null || annotations === void 0 ? void 0 : annotations.getAnnotation(p.annotationId)) === null || _a === void 0 ? void 0 : _a.getValueForLocation(location, p.fieldName);
        });
        return filterDefined(texts).join(" | ");
      default:
        return void 0;
    }
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/annotation-structure-component.js
var MVSAnnotationStructureComponentParams = {
  annotationId: ParamDefinition.Text("", { description: 'Reference to "Annotation" custom model property' }),
  fieldName: ParamDefinition.Text("component", { description: "Annotation field (column) from which to take component identifier" }),
  fieldValues: ParamDefinition.MappedStatic("all", {
    all: ParamDefinition.EmptyGroup(),
    selected: ParamDefinition.ObjectList({
      value: ParamDefinition.Text()
    }, (obj) => obj.value)
  }),
  nullIfEmpty: ParamDefinition.Optional(ParamDefinition.Boolean(true, { isHidden: false })),
  label: ParamDefinition.Text("", { isHidden: false })
};
var MVSTransform = Transformer.builderFactory("mvs");
var MVSAnnotationStructureComponent = MVSTransform({
  name: "mvs-structure-component-from-annotation",
  display: { name: "MVS Annotation Component", description: "A molecular structure component defined by MVS annotation data." },
  from: PluginStateObject.Molecule.Structure,
  to: PluginStateObject.Molecule.Structure,
  params: MVSAnnotationStructureComponentParams
})({
  apply({ a, params }) {
    return createMVSAnnotationStructureComponent(a.data, params);
  },
  update: ({ a, b, oldParams, newParams }) => {
    return updateMVSAnnotationStructureComponent(a.data, b, oldParams, newParams);
  },
  dispose({ b }) {
    b === null || b === void 0 ? void 0 : b.data.customPropertyDescriptors.dispose();
  }
});
function createMVSAnnotationSubstructure(structure, params) {
  const { annotation } = getMVSAnnotationForStructure(structure, params.annotationId);
  if (annotation) {
    let rows = annotation.getRows();
    if (params.fieldValues.name === "selected") {
      const selectedValues = new Set(params.fieldValues.params.map((obj) => obj.value));
      rows = rows.filter((row, i) => selectedValues.has(annotation.getValueForRow(i, params.fieldName)));
    }
    const expression = rowsToExpression(rows);
    const { selection } = StructureQueryHelper.createAndRun(structure, expression);
    return StructureSelection.unionStructure(selection);
  } else {
    return Structure.Empty;
  }
}
function createMVSAnnotationStructureComponent(structure, params) {
  const component = createMVSAnnotationSubstructure(structure, params);
  if (params.nullIfEmpty && component.elementCount === 0)
    return StateObject.Null;
  let label = params.label;
  if (label === void 0 || label === "") {
    if (params.fieldValues.name === "selected" && params.fieldValues.params.length > 0) {
      const values = params.fieldValues.params;
      let valuesStr = `"${values[0].value}"`;
      if (values.length === 2) {
        valuesStr += ` + "${values[1].value}"`;
      } else if (values.length > 2) {
        valuesStr += ` + ${values.length - 1} more values`;
      }
      label = `MVS Annotation Component (${params.fieldName}: ${valuesStr})`;
    } else {
      label = "MVS Annotation Component";
    }
  }
  const props = { label, description: Structure.elementDescription(component) };
  return new PluginStateObject.Molecule.Structure(component, props);
}
function updateMVSAnnotationStructureComponent(a, b, oldParams, newParams) {
  const change = !deepEqual(newParams, oldParams);
  const needsRecreate = !deepEqual(omitObjectKeys(newParams, ["label"]), omitObjectKeys(oldParams, ["label"]));
  if (!change) {
    return Transformer.UpdateResult.Unchanged;
  }
  if (!needsRecreate) {
    b.label = newParams.label || b.label;
    return Transformer.UpdateResult.Updated;
  }
  return Transformer.UpdateResult.Recreate;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/selector.js
var StaticSelectorChoice = new Choice(mapArrayToObject(StaticStructureComponentTypes, (t) => capitalize(t)), "all");
var SelectorParams = ParamDefinition.MappedStatic("static", {
  static: StaticSelectorChoice.PDSelect(),
  expression: ParamDefinition.Value(MolScriptBuilder.struct.generator.all),
  bundle: ParamDefinition.Value(element_exports.Bundle.Empty),
  script: ParamDefinition.Script({ language: "mol-script", expression: "(sel.atom.all)" }),
  annotation: ParamDefinition.Group(pickObjectKeys(MVSAnnotationStructureComponentParams, ["annotationId", "fieldName", "fieldValues"]))
}, { description: "Define a part of the structure where this layer applies (use Static:all to apply to the whole structure)" });
var SelectorAll = { name: "static", params: "all" };
function isSelectorAll(props) {
  return props.name === "static" && props.params === "all";
}
var ElementSet = {
  /** Create an `ElementSet` from the substructure of `structure` defined by `selector` */
  fromSelector(structure, selector) {
    var _a;
    var _b;
    if (!structure)
      return {};
    const arrays = {};
    const selection = substructureFromSelector(structure, selector);
    for (const unit of selection.units) {
      arrayExtend((_a = arrays[_b = unit.model.id]) !== null && _a !== void 0 ? _a : arrays[_b] = [], unit.elements);
    }
    const result = {};
    for (const modelId in arrays) {
      const array = arrays[modelId];
      sortIfNeeded(array, (a, b) => a - b);
      result[modelId] = SortedArray.ofSortedArray(array);
    }
    return result;
  },
  /** Decide if the element set `set` contains structure element location `location` */
  has(set, location) {
    const array = set[location.unit.model.id];
    return array ? SortedArray.has(array, location.element) : false;
  }
};
function substructureFromSelector(structure, selector) {
  const pso = selector.name === "annotation" ? createMVSAnnotationStructureComponent(structure, { ...selector.params, label: "", nullIfEmpty: false }) : createStructureComponent(structure, { type: selector, label: "", nullIfEmpty: false }, { source: structure });
  return PluginStateObject.Molecule.Structure.is(pso) ? pso.data : Structure.Empty;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/custom-label/visual.js
var CustomLabelTextParams = {
  items: ParamDefinition.ObjectList({
    text: ParamDefinition.Text("¯\\_(ツ)_/¯"),
    position: ParamDefinition.MappedStatic("selection", {
      x_y_z: ParamDefinition.Group({
        x: ParamDefinition.Numeric(0),
        y: ParamDefinition.Numeric(0),
        z: ParamDefinition.Numeric(0),
        scale: ParamDefinition.Numeric(1, { min: 0, max: 20, step: 0.1 })
      }),
      selection: ParamDefinition.Group({
        selector: SelectorParams
      })
    })
  }, (obj) => obj.text, { isEssential: true }),
  ...omitObjectKeys(LabelTextParams, ["level", "chainScale", "residueScale", "elementScale"]),
  borderColor: { ...LabelTextParams.borderColor, defaultValue: ColorNames.black }
};
function CustomLabelTextVisual(materialId) {
  return ComplexTextVisual({
    defaultProps: ParamDefinition.getDefaultValues(CustomLabelTextParams),
    createGeometry: createLabelText2,
    createLocationIterator: ElementIterator.fromStructure,
    getLoci: getSerialElementLoci,
    eachLocation: eachSerialElement,
    setUpdateState: (state, newProps, currentProps) => {
      state.createGeometry = !deepEqual(newProps.items, currentProps.items);
    }
  }, materialId);
}
function createLabelText2(ctx, structure, theme, props, text) {
  var _a;
  const count = props.items.length;
  const builder = TextBuilder.create(props, count, count / 2, text);
  for (const item of props.items) {
    switch (item.position.name) {
      case "x_y_z":
        const scale = item.position.params.scale;
        builder.add(item.text, item.position.params.x, item.position.params.y, item.position.params.z, scale, scale, 0);
        break;
      case "selection":
        const substructure = substructureFromSelector(structure, item.position.params.selector);
        const p = textPropsForSelection(substructure, theme.size.size, {});
        const group = (_a = serialIndexOfSubstructure(structure, substructure)) !== null && _a !== void 0 ? _a : 0;
        if (p)
          builder.add(item.text, p.center[0], p.center[1], p.center[2], p.depth, p.scale, group);
        break;
    }
  }
  return builder.getText();
}
function serialIndexOfSubstructure(structure, substructure) {
  if (substructure.isEmpty)
    return void 0;
  const theUnit = substructure.units[0];
  const theElement = theUnit.elements[0];
  for (const unit of structure.units) {
    if (unit.model.id === theUnit.model.id && SortedArray.has(unit.elements, theElement)) {
      return structure.serialMapping.getSerialIndex(unit, theElement);
    }
  }
  return void 0;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/custom-label/representation.js
var CustomLabelVisuals = {
  "label-text": (ctx, getParams) => ComplexRepresentation("Label text", ctx, getParams, CustomLabelTextVisual)
};
var CustomLabelParams = {
  ...CustomLabelTextParams,
  visuals: ParamDefinition.MultiSelect(["label-text"], ParamDefinition.objectToOptions(CustomLabelVisuals))
};
function CustomLabelRepresentation(ctx, getParams) {
  const repr = Representation.createMulti("Label", ctx, getParams, StructureRepresentationStateBuilder, CustomLabelVisuals);
  repr.setState({ pickable: false, markerActions: MarkerAction.None });
  return repr;
}
var CustomLabelRepresentationProvider = StructureRepresentationProvider({
  name: "mvs-custom-label",
  label: "MVS Custom Label",
  description: "Displays labels with custom text",
  factory: CustomLabelRepresentation,
  getParams: () => CustomLabelParams,
  defaultValues: ParamDefinition.getDefaultValues(CustomLabelParams),
  defaultColorTheme: { name: "uniform" },
  defaultSizeTheme: { name: "physical" },
  isApplicable: (structure) => structure.elementCount > 0 && isMVSStructure(structure)
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/custom-tooltips-prop.js
var CustomTooltipsParams = {
  tooltips: ParamDefinition.ObjectList({
    text: ParamDefinition.Text("", { description: "Text of the tooltip" }),
    selector: SelectorParams
  }, (obj) => obj.text)
};
var CustomTooltipsProvider = CustomStructureProperty.createProvider({
  label: "MVS Custom Tooltips",
  descriptor: CustomPropertyDescriptor({
    name: "mvs-custom-tooltips"
  }),
  type: "local",
  defaultParams: CustomTooltipsParams,
  getParams: (data) => CustomTooltipsParams,
  isApplicable: (data) => data.root === data,
  obtain: async (ctx, data, props) => {
    const fullProps = { ...ParamDefinition.getDefaultValues(CustomTooltipsParams), ...props };
    const value = fullProps.tooltips.map((t) => ({
      selector: t.selector,
      text: t.text
    }));
    return { value };
  }
});
var CustomTooltipsLabelProvider = {
  label: (loci) => {
    var _a;
    switch (loci.kind) {
      case "element-loci":
        if (!loci.structure.customPropertyDescriptors.hasReference(CustomTooltipsProvider.descriptor))
          return void 0;
        const location = element_exports.Loci.getFirstLocation(loci);
        if (!location)
          return void 0;
        const tooltipData = CustomTooltipsProvider.get(location.structure).value;
        if (!tooltipData || tooltipData.length === 0)
          return void 0;
        const texts = [];
        for (const tooltip of tooltipData) {
          const elements = (_a = tooltip.elementSet) !== null && _a !== void 0 ? _a : tooltip.elementSet = ElementSet.fromSelector(location.structure, tooltip.selector);
          if (ElementSet.has(elements, location))
            texts.push(tooltip.text);
        }
        return filterDefined(texts).join(" | ");
      default:
        return void 0;
    }
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/formats.js
var Mvs = class extends PluginStateObject.Create({ name: "MVS Data", typeClass: "Data" }) {
};
var ParseMVSJ = MVSTransform({
  name: "mvs-parse-mvsj",
  display: { name: "MolViewSpec from MVSJ", description: "Create MolViewSpec view from MVSJ data" },
  from: PluginStateObject.Data.String,
  to: Mvs
})({
  apply({ a }, plugin) {
    const mvsData = MVSData.fromMVSJ(StringLike.toString(a.data));
    const sourceUrl = tryGetDownloadUrl(a, plugin);
    return new Mvs({ mvsData, sourceUrl });
  }
});
var ParseMVSX = MVSTransform({
  name: "mvs-parse-mvsx",
  display: { name: "MolViewSpec from MVSX", description: "Create MolViewSpec view from MVSX data" },
  from: PluginStateObject.Data.Binary,
  to: Mvs,
  params: {
    mainFilePath: ParamDefinition.Text("index.mvsj")
  }
})({
  apply({ a, params }, plugin) {
    return Task.create("Parse MVSX file", async (ctx) => {
      const data = await loadMVSX(plugin, ctx, a.data, params.mainFilePath);
      return new Mvs(data);
    });
  }
});
var LoadMvsDataParams = {
  appendSnapshots: ParamDefinition.Boolean(false, { description: "If true, add snapshots from MVS into current snapshot list; if false, replace the snapshot list." }),
  keepCamera: ParamDefinition.Boolean(false, { description: "If true, any camera positioning from the MVS state will be ignored and the current camera position will be kept." }),
  applyExtensions: ParamDefinition.Boolean(true, { description: "If true, apply builtin MVS-loading extensions (not a part of standard MVS specification)." })
};
var LoadMvsData = StateAction.build({
  display: { name: "Load MVS Data" },
  from: Mvs,
  params: LoadMvsDataParams
})(({ a, params }, plugin) => Task.create("Load MVS Data", async () => {
  const { mvsData, sourceUrl } = a.data;
  await loadMVS(plugin, mvsData, { appendSnapshots: params.appendSnapshots, keepCamera: params.keepCamera, sourceUrl, extensions: params.applyExtensions ? void 0 : [] });
}));
var MVSJFormatProvider = DataFormatProvider({
  label: "MVSJ",
  description: "MVSJ",
  category: "Miscellaneous",
  stringExtensions: ["mvsj"],
  parse: async (plugin, data) => {
    return plugin.state.data.build().to(data).apply(ParseMVSJ).commit();
  },
  visuals: async (plugin, data) => {
    const ref = StateObjectRef.resolveRef(data);
    const params = ParamDefinition.getDefaultValues(LoadMvsDataParams);
    return await plugin.state.data.applyAction(LoadMvsData, params, ref).run();
  }
});
var MVSXFormatProvider = DataFormatProvider({
  label: "MVSX",
  description: "MVSX",
  category: "Miscellaneous",
  binaryExtensions: ["mvsx"],
  parse: async (plugin, data) => {
    return plugin.state.data.build().to(data).apply(ParseMVSX).commit();
  },
  visuals: MVSJFormatProvider.visuals
});
async function loadMVSX(plugin, runtimeCtx, data, mainFilePath = "index.mvsj") {
  clearMVSXFileAssets(plugin);
  const archiveId = `ni,fnv1a;${hashFnv32a(data)}`;
  let files;
  try {
    files = await unzip(runtimeCtx, data);
  } catch (err) {
    plugin.log.error("Invalid MVSX file");
    throw err;
  }
  for (const path in files) {
    const url = arcpUri(archiveId, path);
    ensureUrlAsset(plugin.managers.asset, url, files[path], { isFile: true });
  }
  const mainFile = files[mainFilePath];
  if (!mainFile)
    throw new Error(`File ${mainFilePath} not found in the MVSX archive`);
  const mvsData = MVSData.fromMVSJ(decodeUtf8(mainFile));
  const sourceUrl = arcpUri(archiveId, mainFilePath);
  return { mvsData, sourceUrl };
}
function clearMVSXFileAssets(plugin) {
  plugin.managers.asset.clearTag("mvsx-file");
}
function tryGetDownloadUrl(pso, plugin) {
  var _a;
  const theCell = plugin.state.data.selectQ((q) => q.ofTransformer(Download)).find((cell) => cell.obj === pso);
  const urlParam = (_a = theCell === null || theCell === void 0 ? void 0 : theCell.transform.params) === null || _a === void 0 ? void 0 : _a.url;
  return urlParam ? Asset.getUrl(urlParam) : void 0;
}
function arcpUri(archiveId, path) {
  return new URL(path, `arcp://${archiveId}/`).href;
}
function ensureUrlAsset(manager, url, data, options) {
  var _a;
  const asset = Asset.getUrlAsset(manager, url);
  if (!manager.has(asset)) {
    const filename = (_a = url.split("/").pop()) !== null && _a !== void 0 ? _a : "file";
    manager.set(asset, new File([data], filename), (options === null || options === void 0 ? void 0 : options.isFile) ? { isStatic: true, tag: "mvsx-file" } : void 0);
  }
}
function decodeUtf8(bytes) {
  _decoder !== null && _decoder !== void 0 ? _decoder : _decoder = new TextDecoder();
  return _decoder.decode(bytes);
}
var _decoder;

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/multilayer-color-theme.js
var NoColor = Color(-1);
function isValidColor(color) {
  return color >= 0;
}
var DefaultBackgroundColor = ColorNames.white;
function makeMultilayerColorThemeParams(colorThemeRegistry, ctx) {
  const colorThemeInfo = {
    help: (value) => {
      const { name, params } = value;
      const p = colorThemeRegistry.get(name);
      const ct = p.factory({}, params);
      return { description: ct.description, legend: ct.legend };
    }
  };
  const nestedThemeTypes = colorThemeRegistry.types.filter(([name, label, category]) => name !== MultilayerColorThemeName && colorThemeRegistry.get(name).isApplicable(ctx));
  return {
    layers: ParamDefinition.ObjectList({
      theme: ParamDefinition.Mapped("uniform", nestedThemeTypes, (name) => ParamDefinition.Group(colorThemeRegistry.get(name).getParams({ structure: Structure.Empty })), colorThemeInfo),
      selection: SelectorParams
    }, (obj) => stringToWords(obj.theme.name), { description: "A list of layers, each defining a color theme. The last listed layer is the top layer (applies first). If the top layer does not provide color for a location or its selection does not cover the location, the underneath layers will apply." }),
    background: ParamDefinition.Color(DefaultBackgroundColor, { description: "Color for elements where no layer applies" })
  };
}
var DefaultMultilayerColorThemeProps = { layers: [], background: DefaultBackgroundColor };
function makeMultilayerColorTheme(ctx, props, colorThemeRegistry) {
  var _a;
  const colorLayers = [];
  for (let i = props.layers.length - 1; i >= 0; i--) {
    const layer = props.layers[i];
    const themeProvider = colorThemeRegistry.get(layer.theme.name);
    if (!themeProvider) {
      console.warn(`Skipping color theme '${layer.theme.name}', cannot find it in registry.`);
      continue;
    }
    if ((_a = themeProvider.ensureCustomProperties) === null || _a === void 0 ? void 0 : _a.attach) {
      console.warn(`Multilayer color theme: layer "${themeProvider.name}" has ensureCustomProperties.attach method, but Multilayer color theme does not call it. If the layer does not work, make sure you call ensureCustomProperties.attach somewhere.`);
    }
    const theme = themeProvider.factory(ctx, layer.theme.params);
    switch (theme.granularity) {
      case "uniform":
      case "instance":
      case "group":
      case "groupInstance":
      case "vertex":
      case "vertexInstance":
        const elementSet = isSelectorAll(layer.selection) ? void 0 : ElementSet.fromSelector(ctx.structure, layer.selection);
        colorLayers.push({ color: theme.color, elementSet });
        break;
      default:
        console.warn(`Skipping color theme '${layer.theme.name}', cannot process granularity '${theme.granularity}'`);
    }
  }
  ;
  function structureElementColor(loc, isSecondary) {
    for (const layer of colorLayers) {
      const matches2 = !layer.elementSet || ElementSet.has(layer.elementSet, loc);
      if (!matches2)
        continue;
      const color2 = layer.color(loc, isSecondary);
      if (!isValidColor(color2))
        continue;
      return color2;
    }
    return props.background;
  }
  const auxLocation = element_exports.Location.create(ctx.structure);
  const color = (location, isSecondary) => {
    if (element_exports.Location.is(location)) {
      return structureElementColor(location, isSecondary);
    } else if (Bond.isLocation(location)) {
      auxLocation.unit = location.aUnit;
      auxLocation.element = location.aUnit.elements[location.aIndex];
      return structureElementColor(auxLocation, isSecondary);
    }
    return props.background;
  };
  return {
    factory: (ctx_, props_) => makeMultilayerColorTheme(ctx_, props_, colorThemeRegistry),
    granularity: "group",
    preferSmoothing: true,
    color,
    props,
    description: "Combines colors from multiple color themes."
  };
}
var MultilayerColorThemeName = "mvs-multilayer";
function makeMultilayerColorThemeProvider(colorThemeRegistry) {
  return {
    name: MultilayerColorThemeName,
    label: "MVS Multi-layer",
    category: ColorThemeCategory.Misc,
    factory: (ctx, props) => makeMultilayerColorTheme(ctx, props, colorThemeRegistry),
    getParams: (ctx) => makeMultilayerColorThemeParams(colorThemeRegistry, ctx),
    defaultValues: DefaultMultilayerColorThemeProps,
    isApplicable: (ctx) => !!ctx.structure && isMVSStructure(ctx.structure)
  };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/behavior.js
var MolViewSpec = PluginBehavior.create({
  name: "molviewspec",
  category: "misc",
  display: {
    name: "MolViewSpec",
    description: "MolViewSpec extension"
  },
  ctor: class extends PluginBehavior.Handler {
    constructor() {
      super(...arguments);
      this.registrables = {
        customModelProperties: [
          IsMVSModelProvider,
          MVSAnnotationsProvider
        ],
        customStructureProperties: [
          CustomTooltipsProvider,
          MVSAnnotationTooltipsProvider
        ],
        representations: [
          CustomLabelRepresentationProvider,
          MVSAnnotationLabelRepresentationProvider
        ],
        colorThemes: [
          MVSAnnotationColorThemeProvider,
          makeMultilayerColorThemeProvider(this.ctx.representation.structure.themes.colorThemeRegistry)
        ],
        lociLabels: [
          CustomTooltipsLabelProvider,
          MVSAnnotationTooltipsLabelProvider
        ],
        dragAndDropHandlers: [
          MVSDragAndDropHandler
        ],
        dataFormats: [
          { name: "MVSJ", provider: MVSJFormatProvider },
          { name: "MVSX", provider: MVSXFormatProvider }
        ],
        actions: [
          LoadMvsData
        ]
      };
    }
    register() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      for (const prop of (_a = this.registrables.customModelProperties) !== null && _a !== void 0 ? _a : []) {
        this.ctx.customModelProperties.register(prop, this.params.autoAttach);
      }
      for (const prop of (_b = this.registrables.customStructureProperties) !== null && _b !== void 0 ? _b : []) {
        this.ctx.customStructureProperties.register(prop, this.params.autoAttach);
      }
      for (const repr of (_c = this.registrables.representations) !== null && _c !== void 0 ? _c : []) {
        this.ctx.representation.structure.registry.add(repr);
      }
      for (const theme of (_d = this.registrables.colorThemes) !== null && _d !== void 0 ? _d : []) {
        this.ctx.representation.structure.themes.colorThemeRegistry.add(theme);
      }
      for (const provider of (_e = this.registrables.lociLabels) !== null && _e !== void 0 ? _e : []) {
        this.ctx.managers.lociLabels.addProvider(provider);
      }
      for (const handler of (_f = this.registrables.dragAndDropHandlers) !== null && _f !== void 0 ? _f : []) {
        this.ctx.managers.dragAndDrop.addHandler(handler.name, handler.handle);
      }
      for (const format of (_g = this.registrables.dataFormats) !== null && _g !== void 0 ? _g : []) {
        this.ctx.dataFormats.add(format.name, format.provider);
      }
      for (const action of (_h = this.registrables.actions) !== null && _h !== void 0 ? _h : []) {
        this.ctx.state.data.actions.add(action);
      }
    }
    update(p) {
      var _a, _b;
      const updated = this.params.autoAttach !== p.autoAttach;
      this.params.autoAttach = p.autoAttach;
      for (const prop of (_a = this.registrables.customModelProperties) !== null && _a !== void 0 ? _a : []) {
        this.ctx.customModelProperties.setDefaultAutoAttach(prop.descriptor.name, this.params.autoAttach);
      }
      for (const prop of (_b = this.registrables.customStructureProperties) !== null && _b !== void 0 ? _b : []) {
        this.ctx.customStructureProperties.setDefaultAutoAttach(prop.descriptor.name, this.params.autoAttach);
      }
      return updated;
    }
    unregister() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      for (const prop of (_a = this.registrables.customModelProperties) !== null && _a !== void 0 ? _a : []) {
        this.ctx.customModelProperties.unregister(prop.descriptor.name);
      }
      for (const prop of (_b = this.registrables.customStructureProperties) !== null && _b !== void 0 ? _b : []) {
        this.ctx.customStructureProperties.unregister(prop.descriptor.name);
      }
      for (const repr of (_c = this.registrables.representations) !== null && _c !== void 0 ? _c : []) {
        this.ctx.representation.structure.registry.remove(repr);
      }
      for (const theme of (_d = this.registrables.colorThemes) !== null && _d !== void 0 ? _d : []) {
        this.ctx.representation.structure.themes.colorThemeRegistry.remove(theme);
      }
      for (const labelProvider of (_e = this.registrables.lociLabels) !== null && _e !== void 0 ? _e : []) {
        this.ctx.managers.lociLabels.removeProvider(labelProvider);
      }
      for (const handler of (_f = this.registrables.dragAndDropHandlers) !== null && _f !== void 0 ? _f : []) {
        this.ctx.managers.dragAndDrop.removeHandler(handler.name);
      }
      for (const format of (_g = this.registrables.dataFormats) !== null && _g !== void 0 ? _g : []) {
        this.ctx.dataFormats.remove(format.name);
      }
      for (const action of (_h = this.registrables.actions) !== null && _h !== void 0 ? _h : []) {
        this.ctx.state.data.actions.remove(action);
      }
    }
  },
  params: () => ({
    autoAttach: ParamDefinition.Boolean(false)
  })
});
var MVSDragAndDropHandler = {
  name: "mvs-mvsj-mvsx",
  /** Load .mvsj and .mvsx files. Delete previous plugin state before loading.
   * If multiple files are provided, merge their MVS data into one state.
   * Return `true` if at least one file has been loaded. */
  async handle(files, plugin) {
    let applied = false;
    for (const file of files) {
      if (file.name.toLowerCase().endsWith(".mvsj")) {
        const task = Task.create("Load MVSJ file", async (ctx) => {
          const data = await file.text();
          const mvsData = MVSData.fromMVSJ(data);
          await loadMVS(plugin, mvsData, { sanityChecks: true, appendSnapshots: applied, sourceUrl: void 0 });
        });
        await plugin.runTask(task);
        applied = true;
      }
      if (file.name.toLowerCase().endsWith(".mvsx")) {
        const task = Task.create("Load MVSX file", async (ctx) => {
          const buffer = await file.arrayBuffer();
          const array = new Uint8Array(buffer);
          const parsed = await loadMVSX(plugin, ctx, array);
          await loadMVS(plugin, parsed.mvsData, { sanityChecks: true, appendSnapshots: applied, sourceUrl: parsed.sourceUrl });
        });
        await plugin.runTask(task);
        applied = true;
      }
    }
    return applied;
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/camera.js
var DefaultCanvasBackgroundColor = ColorNames.white;
var _tmpVec = Vec3();
function cameraParamsToCameraSnapshot(plugin, params) {
  const target = Vec3.create(...params.target);
  let position = Vec3.create(...params.position);
  const radius = Vec3.distance(target, position) / 2;
  if (plugin.canvas3d)
    position = fovAdjustedPosition(target, position, plugin.canvas3d.camera.state.mode, plugin.canvas3d.camera.state.fov);
  const up = Vec3.create(...params.up);
  Vec3.orthogonalize(up, Vec3.sub(_tmpVec, target, position), up);
  const snapshot = { target, position, up, radius, radiusMax: radius };
  return snapshot;
}
function snapshotFocusInfoFromMvsFocuses(focuses) {
  var _a, _b;
  const lastFocus = focuses.length > 0 ? focuses[focuses.length - 1] : void 0;
  const direction = (_a = lastFocus === null || lastFocus === void 0 ? void 0 : lastFocus.params.direction) !== null && _a !== void 0 ? _a : MVSTreeSchema.nodes.focus.params.fields.direction.default;
  const up = (_b = lastFocus === null || lastFocus === void 0 ? void 0 : lastFocus.params.up) !== null && _b !== void 0 ? _b : MVSTreeSchema.nodes.focus.params.fields.up.default;
  return {
    targets: focuses.map((f) => {
      var _a2;
      return {
        targetRef: f.target.ref === "-=root=-" ? void 0 : f.target.ref,
        // need to treat root separately so it does not include invisible structure parts etc.
        radius: (_a2 = f.params.radius) !== null && _a2 !== void 0 ? _a2 : void 0,
        radiusFactor: f.params.radius_factor,
        extraRadius: f.params.radius_extent
      };
    }),
    direction: Vec3.create(...direction),
    up: Vec3.create(...up)
  };
}
function createPluginStateSnapshotCamera(plugin, context, metadata) {
  var _a;
  const camera = {
    transitionStyle: "animate",
    transitionDurationInMs: (_a = metadata.previousTransitionDurationMs) !== null && _a !== void 0 ? _a : 0
  };
  if (context.camera.cameraParams !== void 0) {
    const currentCameraSnapshot = plugin.canvas3d.camera.getSnapshot();
    const cameraSnapshot = cameraParamsToCameraSnapshot(plugin, context.camera.cameraParams);
    camera.current = { ...currentCameraSnapshot, ...cameraSnapshot };
  } else {
    camera.focus = snapshotFocusInfoFromMvsFocuses(context.camera.focuses);
  }
  return camera;
}
function modifyCanvasProps(oldCanvasProps, params) {
  var _a;
  const backgroundColor = (_a = decodeColor(params === null || params === void 0 ? void 0 : params.background_color)) !== null && _a !== void 0 ? _a : DefaultCanvasBackgroundColor;
  return {
    ...oldCanvasProps,
    renderer: {
      ...oldCanvasProps.renderer,
      backgroundColor
    }
  };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/primitives.js
function getPrimitiveStructureRefs(primitives) {
  var _a, _b, _c;
  const refs = /* @__PURE__ */ new Set();
  for (const c of (_a = primitives.children) !== null && _a !== void 0 ? _a : []) {
    if (c.kind !== "primitive")
      continue;
    const p = c.params;
    (_c = (_b = Builders[p.kind]).resolveRefs) === null || _c === void 0 ? void 0 : _c.call(_b, p, refs);
  }
  return refs;
}
var MVSPrimitivesData = class extends PluginStateObject.Create({ name: "Primitive Data", typeClass: "Object" }) {
};
var MVSPrimitiveShapes = class extends PluginStateObject.Create({ name: "Primitive Shapes", typeClass: "Object" }) {
};
var MVSDownloadPrimitiveData = MVSTransform({
  name: "mvs-download-primitive-data",
  display: { name: "MVS Primitives" },
  from: [PluginStateObject.Root, PluginStateObject.Molecule.Structure],
  to: MVSPrimitivesData,
  params: {
    uri: ParamDefinition.Url("", { isHidden: true }),
    format: ParamDefinition.Text("mvs-node-json", { isHidden: true })
  }
})({
  apply({ a, params, cache }, plugin) {
    return Task.create("Download Primitive Data", async (ctx) => {
      const url = Asset.getUrlAsset(plugin.managers.asset, params.uri);
      const asset = await plugin.managers.asset.resolve(url, "string").runInContext(ctx);
      const node = JSON.parse(StringLike.toString(asset.data));
      cache.asset = asset;
      return new MVSPrimitivesData({
        node,
        defaultStructure: PluginStateObject.Molecule.Structure.is(a) ? a.data : void 0,
        structureRefs: {},
        primitives: getPrimitives(node),
        options: { ...node.params },
        positionCache: /* @__PURE__ */ new Map(),
        instances: getInstances(node.params)
      }, { label: "Primitive Data" });
    });
  },
  dispose({ cache }) {
    var _a;
    (_a = cache === null || cache === void 0 ? void 0 : cache.asset) === null || _a === void 0 ? void 0 : _a.dispose();
  }
});
var MVSInlinePrimitiveData = MVSTransform({
  name: "mvs-inline-primitive-data",
  display: { name: "MVS Primitives" },
  from: [PluginStateObject.Root, PluginStateObject.Molecule.Structure],
  to: MVSPrimitivesData,
  params: {
    node: ParamDefinition.Value(void 0, { isHidden: true })
  }
})({
  apply({ a, params }) {
    return new MVSPrimitivesData({
      node: params.node,
      defaultStructure: PluginStateObject.Molecule.Structure.is(a) ? a.data : void 0,
      structureRefs: {},
      primitives: getPrimitives(params.node),
      options: { ...params.node.params },
      positionCache: /* @__PURE__ */ new Map(),
      instances: getInstances(params.node.params)
    }, { label: "Primitive Data" });
  }
});
var MVSBuildPrimitiveShape = MVSTransform({
  name: "mvs-build-primitive-shape",
  display: { name: "MVS Primitives" },
  from: MVSPrimitivesData,
  to: PluginStateObject.Shape.Provider,
  params: {
    kind: ParamDefinition.Text("mesh")
  }
})({
  apply({ a, params, dependencies }) {
    var _a, _b, _c, _d, _e, _f;
    const structureRefs = dependencies ? collectMVSReferences([PluginStateObject.Molecule.Structure], dependencies) : {};
    const context = { ...a.data, structureRefs };
    const label = capitalize(params.kind);
    if (params.kind === "mesh") {
      if (!hasPrimitiveKind(a.data, "mesh"))
        return StateObject.Null;
      return new PluginStateObject.Shape.Provider({
        label,
        data: context,
        params: ParamDefinition.withDefaults(Mesh.Params, { alpha: (_b = (_a = a.data.options) === null || _a === void 0 ? void 0 : _a.opacity) !== null && _b !== void 0 ? _b : 1 }),
        getShape: (_, data, __, prev) => buildPrimitiveMesh(data, prev === null || prev === void 0 ? void 0 : prev.geometry),
        geometryUtils: Mesh.Utils
      }, { label });
    } else if (params.kind === "labels") {
      if (!hasPrimitiveKind(a.data, "label"))
        return StateObject.Null;
      return new PluginStateObject.Shape.Provider({
        label,
        data: context,
        params: ParamDefinition.withDefaults(DefaultLabelParams, { alpha: (_d = (_c = a.data.options) === null || _c === void 0 ? void 0 : _c.label_opacity) !== null && _d !== void 0 ? _d : 1 }),
        getShape: (_, data, __, prev) => buildPrimitiveLabels(data, prev === null || prev === void 0 ? void 0 : prev.geometry),
        geometryUtils: Text.Utils
      }, { label });
    } else if (params.kind === "lines") {
      if (!hasPrimitiveKind(a.data, "line"))
        return StateObject.Null;
      return new PluginStateObject.Shape.Provider({
        label,
        data: context,
        params: ParamDefinition.withDefaults(Lines.Params, { alpha: (_f = (_e = a.data.options) === null || _e === void 0 ? void 0 : _e.opacity) !== null && _f !== void 0 ? _f : 1 }),
        getShape: (_, data, __, prev) => buildPrimitiveLines(data, prev === null || prev === void 0 ? void 0 : prev.geometry),
        geometryUtils: Lines.Utils
      }, { label });
    }
    return StateObject.Null;
  }
});
var GroupManager = class {
  constructor() {
    this.current = -1;
    this.groupToNodeMap = /* @__PURE__ */ new Map();
    this.sizes = /* @__PURE__ */ new Map();
    this.colors = /* @__PURE__ */ new Map();
    this.tooltips = /* @__PURE__ */ new Map();
  }
  allocateSingle(node) {
    const group = ++this.current;
    this.groupToNodeMap.set(group, node);
    return group;
  }
  allocateMany(node, groups) {
    const newGroups = /* @__PURE__ */ new Map();
    const base = this.current;
    for (const g of groups) {
      if (newGroups.has(g))
        continue;
      const group = base + newGroups.size + 1;
      this.groupToNodeMap.set(group, node);
      newGroups.set(g, group);
    }
    this.current += newGroups.size + 1;
    return newGroups;
  }
  updateColor(group, color) {
    const c = decodeColor(color);
    if (typeof c === "number")
      this.colors.set(group, c);
  }
  updateTooltip(group, tooltip) {
    if (typeof tooltip === "string")
      this.tooltips.set(group, tooltip);
  }
  updateSize(group, size) {
    if (typeof size === "number")
      this.sizes.set(group, size);
  }
};
function printEmptySelectionWarning(ctx, position) {
  if (!ctx.emptySelectionWarningPrinted) {
    console.warn("Some primitives use positions which refer to empty substructure, not showing these primitives.", position, "(There may be more)");
    ctx.emptySelectionWarningPrinted = true;
  }
}
var BaseLabelProps = {
  ...ParamDefinition.getDefaultValues(Text.Params),
  attachment: "middle-center",
  fontQuality: 3,
  fontWeight: "normal",
  borderWidth: 0.15,
  borderColor: Color(0),
  background: false,
  backgroundOpacity: 0.5,
  tether: false
};
var DefaultLabelParams = ParamDefinition.withDefaults(Text.Params, BaseLabelProps);
var Builders = {
  mesh: {
    builders: {
      mesh: addMesh,
      line: addMeshWireframe
    },
    isApplicable: {
      mesh: (m) => m.show_triangles,
      line: (m) => m.show_wireframe
    }
  },
  lines: {
    builders: {
      line: addLines
    }
  },
  tube: {
    builders: {
      mesh: addTubeMesh
    },
    resolveRefs: resolveLineRefs
  },
  arrow: {
    builders: {
      mesh: addArrowMesh
    },
    resolveRefs: (params, refs) => {
      addRef(params.start, refs);
      if (params.end)
        addRef(params.end, refs);
    }
  },
  label: {
    builders: {
      label: addPrimitiveLabel
    },
    resolveRefs: resolveLabelRefs
  },
  distance_measurement: {
    builders: {
      mesh: addDistanceMesh,
      label: addDistanceLabel
    },
    resolveRefs: resolveLineRefs
  },
  angle_measurement: {
    builders: {
      mesh: addAngleMesh,
      label: addAngleLabel
    },
    resolveRefs: (params, refs) => {
      addRef(params.a, refs);
      addRef(params.b, refs);
      addRef(params.c, refs);
    }
  },
  ellipse: {
    builders: {
      mesh: addEllipseMesh
    },
    resolveRefs: (params, refs) => {
      addRef(params.center, refs);
      if (params.major_axis_endpoint)
        addRef(params.major_axis_endpoint, refs);
      if (params.minor_axis_endpoint)
        addRef(params.minor_axis_endpoint, refs);
    }
  },
  ellipsoid: {
    builders: {
      mesh: addEllipsoidMesh
    },
    resolveRefs: (params, refs) => {
      addRef(params.center, refs);
      if (params.major_axis_endpoint)
        addRef(params.major_axis_endpoint, refs);
      if (params.minor_axis_endpoint)
        addRef(params.minor_axis_endpoint, refs);
    }
  },
  box: {
    builders: {
      mesh: addBoxMesh
    },
    resolveRefs: (params, refs) => {
      addRef(params.center, refs);
    }
  }
};
function getPrimitives(primitives) {
  var _a;
  return ((_a = primitives.children) !== null && _a !== void 0 ? _a : []).filter((c) => c.kind === "primitive");
}
function addRef(position, refs) {
  if (isPrimitiveComponentExpressions(position) && position.structure_ref) {
    refs.add(position.structure_ref);
  }
}
function hasPrimitiveKind(context, kind) {
  var _a;
  for (const c of context.primitives) {
    const params = c.params;
    const b = Builders[params.kind];
    const builderFunction = b.builders[kind];
    if (builderFunction) {
      const test = (_a = b.isApplicable) === null || _a === void 0 ? void 0 : _a[kind];
      if (test === void 0 || test(params, context)) {
        return true;
      }
    }
  }
  return false;
}
function resolveBasePosition(context, position, targetPosition) {
  return resolvePosition(context, position, targetPosition, void 0, void 0);
}
var _EmptySphere = Sphere3D.zero();
var _EmptyBox = Box3D.zero();
function resolvePosition(context, position, targetPosition, targetSphere, targetBox) {
  let expr;
  let pivotRef;
  if (isVector3(position)) {
    if (targetPosition)
      Vec3.copy(targetPosition, position);
    if (targetSphere)
      Sphere3D.set(targetSphere, position, 0);
    if (targetBox)
      Box3D.set(targetBox, position, position);
    return true;
  }
  if (isPrimitiveComponentExpressions(position)) {
    expr = rowsToExpression(position.expressions);
    pivotRef = position.structure_ref;
  } else if (isComponentExpression(position)) {
    expr = rowToExpression(position);
  }
  if (!expr) {
    console.error("Invalid expression", position);
    throw new Error("Invalid primitive potition expression, see console for details.");
  }
  const pivot = !pivotRef ? context.defaultStructure : context.structureRefs[pivotRef];
  if (!pivot) {
    throw new Error(`Structure with ref '${pivotRef !== null && pivotRef !== void 0 ? pivotRef : "<default>"}' not found.`);
  }
  const cacheKey = JSON.stringify(position);
  if (context.positionCache.has(cacheKey)) {
    const [isDefined3, sphere2, box2] = context.positionCache.get(cacheKey);
    if (targetPosition)
      Vec3.copy(targetPosition, sphere2.center);
    if (targetSphere)
      Sphere3D.copy(targetSphere, sphere2);
    if (targetBox)
      Box3D.copy(targetBox, box2);
    return isDefined3;
  }
  const { selection } = StructureQueryHelper.createAndRun(pivot, expr);
  let box;
  let sphere;
  let isDefined2;
  if (StructureSelection.isEmpty(selection)) {
    if (targetPosition)
      Vec3.set(targetPosition, 0, 0, 0);
    box = _EmptyBox;
    sphere = _EmptySphere;
    isDefined2 = false;
    printEmptySelectionWarning(context, position);
  } else {
    const loci = StructureSelection.toLociWithSourceUnits(selection);
    const boundary = element_exports.Loci.getBoundary(loci);
    if (targetPosition)
      Vec3.copy(targetPosition, boundary.sphere.center);
    box = boundary.box;
    sphere = boundary.sphere;
    isDefined2 = true;
  }
  if (targetSphere)
    Sphere3D.copy(targetSphere, sphere);
  if (targetBox)
    Box3D.copy(targetBox, box);
  context.positionCache.set(cacheKey, [isDefined2, sphere, box]);
  return isDefined2;
}
function getInstances(options) {
  var _a;
  if (!((_a = options === null || options === void 0 ? void 0 : options.instances) === null || _a === void 0 ? void 0 : _a.length))
    return void 0;
  return options.instances.map((i) => Mat4.fromArray(Mat4(), i, 0));
}
function buildPrimitiveMesh(context, prev) {
  var _a, _b, _c, _d, _e, _f;
  const meshBuilder = MeshBuilder.createState(1024, 1024, prev);
  const state = { groups: new GroupManager(), mesh: meshBuilder };
  meshBuilder.currentGroup = -1;
  for (const c of context.primitives) {
    const p = c.params;
    const b = Builders[p.kind];
    if (!b) {
      console.warn(`Primitive ${p.kind} not supported`);
      continue;
    }
    (_b = (_a = b.builders).mesh) === null || _b === void 0 ? void 0 : _b.call(_a, context, state, c, p);
  }
  const { colors, tooltips } = state.groups;
  const tooltip = (_d = (_c = context.options) === null || _c === void 0 ? void 0 : _c.tooltip) !== null && _d !== void 0 ? _d : "";
  const color = (_f = decodeColor((_e = context.options) === null || _e === void 0 ? void 0 : _e.color)) !== null && _f !== void 0 ? _f : Color(0);
  return Shape.create("Mesh", {
    kind: "mvs-primitives",
    node: context.node,
    groupToNode: state.groups.groupToNodeMap
  }, MeshBuilder.getMesh(meshBuilder), (g) => {
    var _a2;
    return (_a2 = colors.get(g)) !== null && _a2 !== void 0 ? _a2 : color;
  }, (g) => 1, (g) => {
    var _a2;
    return (_a2 = tooltips.get(g)) !== null && _a2 !== void 0 ? _a2 : tooltip;
  }, context.instances);
}
function buildPrimitiveLines(context, prev) {
  var _a, _b, _c, _d, _e, _f;
  const linesBuilder = LinesBuilder.create(1024, 1024, prev);
  const state = { groups: new GroupManager(), lines: linesBuilder };
  for (const c of context.primitives) {
    const p = c.params;
    const b = Builders[p.kind];
    if (!b) {
      console.warn(`Primitive ${p.kind} not supported`);
      continue;
    }
    (_b = (_a = b.builders).line) === null || _b === void 0 ? void 0 : _b.call(_a, context, state, c, p);
  }
  const { colors, sizes, tooltips } = state.groups;
  const tooltip = (_d = (_c = context.options) === null || _c === void 0 ? void 0 : _c.tooltip) !== null && _d !== void 0 ? _d : "";
  const color = (_f = decodeColor((_e = context.options) === null || _e === void 0 ? void 0 : _e.color)) !== null && _f !== void 0 ? _f : Color(0);
  return Shape.create("Lines", {
    kind: "mvs-primitives",
    node: context.node,
    groupToNode: state.groups.groupToNodeMap
  }, linesBuilder.getLines(), (g) => {
    var _a2;
    return (_a2 = colors.get(g)) !== null && _a2 !== void 0 ? _a2 : color;
  }, (g) => {
    var _a2;
    return (_a2 = sizes.get(g)) !== null && _a2 !== void 0 ? _a2 : 1;
  }, (g) => {
    var _a2;
    return (_a2 = tooltips.get(g)) !== null && _a2 !== void 0 ? _a2 : tooltip;
  }, context.instances);
}
function buildPrimitiveLabels(context, prev) {
  var _a, _b, _c, _d;
  const labelsBuilder = TextBuilder.create(BaseLabelProps, 1024, 1024, prev);
  const state = { groups: new GroupManager(), labels: labelsBuilder };
  for (const c of context.primitives) {
    const p = c.params;
    const b = Builders[p.kind];
    if (!b) {
      console.warn(`Primitive ${p.kind} not supported`);
      continue;
    }
    (_b = (_a = b.builders).label) === null || _b === void 0 ? void 0 : _b.call(_a, context, state, c, p);
  }
  const color = (_d = decodeColor((_c = context.options) === null || _c === void 0 ? void 0 : _c.label_color)) !== null && _d !== void 0 ? _d : Color(0);
  const { colors, sizes, tooltips } = state.groups;
  return Shape.create("Labels", {
    kind: "mvs-primitives",
    node: context.node,
    groupToNode: state.groups.groupToNodeMap
  }, labelsBuilder.getText(), (g) => {
    var _a2;
    return (_a2 = colors.get(g)) !== null && _a2 !== void 0 ? _a2 : color;
  }, (g) => {
    var _a2;
    return (_a2 = sizes.get(g)) !== null && _a2 !== void 0 ? _a2 : 1;
  }, (g) => {
    var _a2;
    return (_a2 = tooltips.get(g)) !== null && _a2 !== void 0 ? _a2 : "";
  }, context.instances);
}
function addMeshFaces(context, groups, node, params, addFace) {
  const a = Vec3.zero();
  const b = Vec3.zero();
  const c = Vec3.zero();
  let { indices, vertices, triangle_groups } = params;
  const nTriangles = Math.floor(indices.length / 3);
  triangle_groups !== null && triangle_groups !== void 0 ? triangle_groups : triangle_groups = range(nTriangles);
  const groupSet = groups.allocateMany(node, triangle_groups);
  for (let i = 0; i < nTriangles; i++) {
    const mvsGroup = triangle_groups[i];
    const builderGroup = groupSet.get(mvsGroup);
    Vec3.fromArray(a, vertices, 3 * indices[3 * i]);
    Vec3.fromArray(b, vertices, 3 * indices[3 * i + 1]);
    Vec3.fromArray(c, vertices, 3 * indices[3 * i + 2]);
    addFace(mvsGroup, builderGroup, a, b, c);
  }
}
function addMesh(context, { groups, mesh }, node, params) {
  if (!params.show_triangles)
    return;
  const { group_colors, group_tooltips, color, tooltip } = params;
  addMeshFaces(context, groups, node, params, (mvsGroup, builderGroup, a, b, c) => {
    var _a, _b;
    groups.updateColor(builderGroup, (_a = group_colors[mvsGroup]) !== null && _a !== void 0 ? _a : color);
    groups.updateTooltip(builderGroup, (_b = group_tooltips[mvsGroup]) !== null && _b !== void 0 ? _b : tooltip);
    mesh.currentGroup = builderGroup;
    MeshBuilder.addTriangle(mesh, a, b, c);
  });
}
function addMeshWireframe(context, { groups, lines }, node, params) {
  if (!params.show_wireframe)
    return;
  const width = params.wireframe_width;
  const { group_colors, group_tooltips, wireframe_color, color, tooltip } = params;
  addMeshFaces(context, groups, node, params, (mvsGroup, builderGroup, a, b, c) => {
    var _a, _b;
    groups.updateColor(builderGroup, (_a = wireframe_color !== null && wireframe_color !== void 0 ? wireframe_color : group_colors[mvsGroup]) !== null && _a !== void 0 ? _a : color);
    groups.updateTooltip(builderGroup, (_b = group_tooltips[mvsGroup]) !== null && _b !== void 0 ? _b : tooltip);
    groups.updateSize(builderGroup, width);
    lines.add(a[0], a[1], a[2], b[0], b[1], b[2], builderGroup);
    lines.add(b[0], b[1], b[2], c[0], c[1], c[2], builderGroup);
    lines.add(c[0], c[1], c[2], a[0], a[1], a[2], builderGroup);
  });
}
function addLines(context, { groups, lines }, node, params) {
  var _a, _b, _c;
  const a = Vec3.zero();
  const b = Vec3.zero();
  let { indices, vertices, line_groups, group_colors, group_tooltips, group_widths } = params;
  const width = params.width;
  const nLines = Math.floor(indices.length / 2);
  line_groups !== null && line_groups !== void 0 ? line_groups : line_groups = range(nLines);
  const groupSet = groups.allocateMany(node, line_groups);
  for (let i = 0; i < nLines; i++) {
    const mvsGroup = line_groups[i];
    const builderGroup = groupSet.get(mvsGroup);
    groups.updateColor(builderGroup, (_a = group_colors[mvsGroup]) !== null && _a !== void 0 ? _a : params.color);
    groups.updateTooltip(builderGroup, (_b = group_tooltips[mvsGroup]) !== null && _b !== void 0 ? _b : params.tooltip);
    groups.updateSize(builderGroup, (_c = group_widths[mvsGroup]) !== null && _c !== void 0 ? _c : width);
    Vec3.fromArray(a, vertices, 3 * indices[2 * i]);
    Vec3.fromArray(b, vertices, 3 * indices[2 * i + 1]);
    lines.add(a[0], a[1], a[2], b[0], b[1], b[2], builderGroup);
  }
}
function resolveLineRefs(params, refs) {
  addRef(params.start, refs);
  addRef(params.end, refs);
}
var lStart = Vec3.zero();
var lEnd = Vec3.zero();
function addTubeMesh(context, { groups, mesh }, node, params, options) {
  if (!(options === null || options === void 0 ? void 0 : options.skipResolvePosition)) {
    const startDefined = resolveBasePosition(context, params.start, lStart);
    const endDefined = resolveBasePosition(context, params.end, lEnd);
    if (!startDefined || !endDefined)
      return;
  }
  const radius = params.radius;
  const cylinderProps = {
    radiusBottom: radius,
    radiusTop: radius,
    topCap: true,
    bottomCap: true
  };
  mesh.currentGroup = groups.allocateSingle(node);
  groups.updateColor(mesh.currentGroup, params.color);
  groups.updateTooltip(mesh.currentGroup, params.tooltip);
  if (params.dash_length) {
    const dist = Vec3.distance(lStart, lEnd);
    const count = Math.ceil(dist / (2 * params.dash_length));
    addFixedCountDashedCylinder(mesh, lStart, lEnd, 1, count, true, cylinderProps);
  } else {
    addSimpleCylinder(mesh, lStart, lEnd, cylinderProps);
  }
}
var ArrowState = {
  start: Vec3.zero(),
  end: Vec3.zero(),
  dir: Vec3.zero(),
  startCap: Vec3.zero(),
  endCap: Vec3.zero()
};
function addArrowMesh(context, { groups, mesh }, node, params) {
  var _a, _b, _c, _d;
  const startDefined = resolveBasePosition(context, params.start, ArrowState.start);
  if (!startDefined)
    return;
  if (params.end) {
    const endDefined = resolveBasePosition(context, params.end, ArrowState.end);
    if (!endDefined)
      return;
  } else if (params.direction) {
    Vec3.add(ArrowState.end, ArrowState.start, params.direction);
  } else {
    console.warn(`Primitive arrow does not contain "end" nor "distance". Not showing.`);
    return;
  }
  Vec3.sub(ArrowState.dir, ArrowState.end, ArrowState.start);
  Vec3.normalize(ArrowState.dir, ArrowState.dir);
  if (params.length) {
    Vec3.scaleAndAdd(ArrowState.end, ArrowState.start, ArrowState.dir, params.length);
  }
  const length = Vec3.distance(ArrowState.start, ArrowState.end);
  if (length < 1e-3)
    return;
  const tubeRadius = params.tube_radius;
  const tubeProps = {
    radiusBottom: tubeRadius,
    radiusTop: tubeRadius,
    topCap: !params.show_end_cap,
    bottomCap: !params.show_start_cap
  };
  mesh.currentGroup = groups.allocateSingle(node);
  groups.updateColor(mesh.currentGroup, params.color);
  groups.updateTooltip(mesh.currentGroup, params.tooltip);
  if (params.show_start_cap) {
    const startRadius = (_a = params.start_cap_radius) !== null && _a !== void 0 ? _a : 2 * tubeRadius;
    const startCapLength = (_b = params.start_cap_length) !== null && _b !== void 0 ? _b : 2 * startRadius;
    Vec3.scaleAndAdd(ArrowState.startCap, ArrowState.start, ArrowState.dir, startCapLength);
    addSimpleCylinder(mesh, ArrowState.startCap, ArrowState.start, {
      radiusBottom: startRadius,
      radiusTop: 0,
      topCap: false,
      bottomCap: true,
      radialSegments: 12
    });
  } else {
    Vec3.copy(ArrowState.startCap, ArrowState.start);
  }
  if (params.show_end_cap) {
    const endRadius = (_c = params.end_cap_radius) !== null && _c !== void 0 ? _c : 2 * tubeRadius;
    const endCapLength = (_d = params.end_cap_length) !== null && _d !== void 0 ? _d : 2 * endRadius;
    Vec3.scaleAndAdd(ArrowState.endCap, ArrowState.end, ArrowState.dir, -endCapLength);
    addSimpleCylinder(mesh, ArrowState.endCap, ArrowState.end, {
      radiusBottom: endRadius,
      radiusTop: 0,
      topCap: false,
      bottomCap: true,
      radialSegments: 12
    });
  } else {
    Vec3.copy(ArrowState.endCap, ArrowState.end);
  }
  if (params.show_tube) {
    if (params.tube_dash_length) {
      const dist = Vec3.distance(ArrowState.startCap, ArrowState.endCap);
      const count = Math.ceil(dist / (2 * params.tube_dash_length));
      addFixedCountDashedCylinder(mesh, ArrowState.startCap, ArrowState.endCap, 1, count, true, tubeProps);
    } else {
      addSimpleCylinder(mesh, ArrowState.startCap, ArrowState.endCap, tubeProps);
    }
  }
}
function computeDistance(context, start, end) {
  const startDefined = resolveBasePosition(context, start, lStart);
  const endDefined = resolveBasePosition(context, end, lEnd);
  if (startDefined && endDefined)
    return Vec3.distance(lStart, lEnd);
  else
    return void 0;
}
function distanceLabel(distance, params) {
  const distStr = `${round(distance, 2)} Å`;
  if (typeof params.label_template === "string")
    return params.label_template.replace("{{distance}}", distStr);
  else
    return distStr;
}
function addDistanceMesh(context, state, node, params) {
  const distance = computeDistance(context, params.start, params.end);
  if (distance === void 0)
    return;
  const tooltip = distanceLabel(distance, params);
  addTubeMesh(context, state, node, { ...params, tooltip }, { skipResolvePosition: true });
}
var labelPos = Vec3.zero();
function addDistanceLabel(context, state, node, params) {
  const { labels, groups } = state;
  const dist = computeDistance(context, params.start, params.end);
  if (dist === void 0)
    return;
  let size;
  if (typeof params.label_size === "number") {
    size = params.label_size;
  } else {
    size = Math.max(dist * params.label_auto_size_scale, params.label_auto_size_min);
  }
  Vec3.add(labelPos, lStart, lEnd);
  Vec3.scale(labelPos, labelPos, 0.5);
  const group = groups.allocateSingle(node);
  groups.updateColor(group, params.label_color);
  groups.updateSize(group, size);
  labels.add(distanceLabel(dist, params), labelPos[0], labelPos[1], labelPos[2], 1.05 * params.radius, 1, group);
}
var AngleState = {
  isDefined: false,
  a: Vec3(),
  b: Vec3(),
  c: Vec3(),
  ba: Vec3(),
  bc: Vec3(),
  labelPos: Vec3(),
  /** Sector radius */
  radius: 0,
  label: ""
};
function syncAngleState(context, params) {
  const aDefined = resolveBasePosition(context, params.a, AngleState.a);
  const bDefined = resolveBasePosition(context, params.b, AngleState.b);
  const cDefined = resolveBasePosition(context, params.c, AngleState.c);
  AngleState.isDefined = aDefined && bDefined && cDefined;
  if (!AngleState.isDefined)
    return;
  Vec3.sub(AngleState.ba, AngleState.a, AngleState.b);
  Vec3.sub(AngleState.bc, AngleState.c, AngleState.b);
  const value = radToDeg(Vec3.angle(AngleState.ba, AngleState.bc));
  const angle = `${round(value, 2)}°`;
  AngleState.label = typeof params.label_template === "string" ? params.label_template.replace("{{angle}}", angle) : angle;
  if (typeof params.section_radius === "number") {
    AngleState.radius = params.section_radius;
  } else {
    AngleState.radius = Math.min(Vec3.magnitude(AngleState.ba), Vec3.magnitude(AngleState.bc));
    if (typeof params.section_radius_scale === "number") {
      AngleState.radius *= params.section_radius_scale;
    }
  }
}
function addAngleMesh(context, state, node, params) {
  var _a;
  syncAngleState(context, params);
  if (!AngleState.isDefined)
    return;
  const { groups, mesh } = state;
  if (params.show_vector) {
    const radius = (_a = params.vector_radius) !== null && _a !== void 0 ? _a : 0.05;
    const cylinderProps = {
      radiusBottom: radius,
      radiusTop: radius,
      topCap: true,
      bottomCap: true
    };
    mesh.currentGroup = groups.allocateSingle(node);
    groups.updateColor(mesh.currentGroup, params.vector_color);
    groups.updateTooltip(mesh.currentGroup, AngleState.label);
    let count = Math.ceil(Vec3.magnitude(AngleState.ba) / (2 * radius));
    addFixedCountDashedCylinder(mesh, AngleState.a, AngleState.b, 1, count, true, cylinderProps);
    count = Math.ceil(Vec3.magnitude(AngleState.bc) / (2 * radius));
    addFixedCountDashedCylinder(mesh, AngleState.b, AngleState.c, 1, count, true, cylinderProps);
  }
  if (params.show_section) {
    const angle = Vec3.angle(AngleState.ba, AngleState.bc);
    Vec3.normalize(AngleState.ba, AngleState.ba);
    Vec3.normalize(AngleState.bc, AngleState.bc);
    Vec3.scale(AngleState.ba, AngleState.ba, AngleState.radius);
    Vec3.scale(AngleState.bc, AngleState.bc, AngleState.radius);
    addEllipseMesh(context, state, node, {
      kind: "ellipse",
      as_circle: true,
      center: AngleState.b,
      major_axis_endpoint: null,
      major_axis: AngleState.ba,
      minor_axis_endpoint: null,
      minor_axis: AngleState.bc,
      radius_major: AngleState.radius,
      radius_minor: AngleState.radius,
      theta_start: 0,
      theta_end: angle,
      color: params.section_color,
      tooltip: AngleState.label
    });
  }
}
function addAngleLabel(context, state, node, params) {
  const { labels, groups } = state;
  syncAngleState(context, params);
  if (!AngleState.isDefined)
    return;
  Vec3.normalize(AngleState.ba, AngleState.ba);
  Vec3.normalize(AngleState.bc, AngleState.bc);
  Vec3.scale(AngleState.ba, AngleState.ba, AngleState.radius);
  Vec3.scale(AngleState.bc, AngleState.bc, AngleState.radius);
  let size;
  if (typeof params.label_size === "number") {
    size = params.label_size;
  } else {
    size = Math.max(AngleState.radius * params.label_auto_size_scale, params.label_auto_size_min);
  }
  Vec3.add(AngleState.labelPos, AngleState.ba, AngleState.bc);
  Vec3.normalize(AngleState.labelPos, AngleState.labelPos);
  Vec3.scale(AngleState.labelPos, AngleState.labelPos, AngleState.radius);
  Vec3.add(AngleState.labelPos, AngleState.labelPos, AngleState.b);
  const group = groups.allocateSingle(node);
  groups.updateColor(group, params.label_color);
  groups.updateSize(group, size);
  labels.add(AngleState.label, AngleState.labelPos[0], AngleState.labelPos[1], AngleState.labelPos[2], 1, 1, group);
}
function resolveLabelRefs(params, refs) {
  addRef(params.position, refs);
}
var PrimitiveLabelState = {
  position: Vec3.zero(),
  sphere: Sphere3D.zero()
};
function addPrimitiveLabel(context, state, node, params) {
  const { labels, groups } = state;
  const positionDefined = resolvePosition(context, params.position, PrimitiveLabelState.position, PrimitiveLabelState.sphere, void 0);
  if (!positionDefined)
    return;
  const group = groups.allocateSingle(node);
  groups.updateColor(group, params.label_color);
  groups.updateSize(group, params.label_size);
  const offset = PrimitiveLabelState.sphere.radius + params.label_offset;
  labels.add(params.text, PrimitiveLabelState.position[0], PrimitiveLabelState.position[1], PrimitiveLabelState.position[2], offset, 1, group);
}
var circleCache = /* @__PURE__ */ new Map();
function getCircle(options) {
  var _a, _b, _c;
  const key = JSON.stringify(options);
  if (circleCache.has(key))
    return circleCache.get(key);
  const thetaLength = ((_a = options.thetaEnd) !== null && _a !== void 0 ? _a : 2 * Math.PI) - ((_b = options.thetaStart) !== null && _b !== void 0 ? _b : 0);
  if (Math.abs(thetaLength) < 1e-3)
    return null;
  const circle = Circle({
    radius: 1,
    thetaStart: (_c = options.thetaStart) !== null && _c !== void 0 ? _c : 0,
    thetaLength,
    segments: Math.ceil(2 * Math.PI / thetaLength * 64)
  });
  circleCache.set(key, circle);
  return circle;
}
var EllipseState = {
  centerPos: Vec3.zero(),
  majorPos: Vec3.zero(),
  minorPos: Vec3.zero(),
  majorAxis: Vec3.zero(),
  minorAxis: Vec3.zero(),
  scale: Vec3.zero(),
  normal: Vec3.zero(),
  scaleXform: Mat4.identity(),
  rotationXform: Mat4.identity(),
  translationXform: Mat4.identity(),
  xform: Mat4.identity()
};
function addEllipseMesh(context, state, node, params) {
  var _a, _b, _c;
  const circle = getCircle({ thetaStart: params.theta_start, thetaEnd: params.theta_end });
  if (!circle)
    return;
  const centerDefined = resolvePosition(context, params.center, EllipseState.centerPos, void 0, void 0);
  if (!centerDefined)
    return;
  if (params.major_axis_endpoint) {
    const endpointDefined = resolvePosition(context, params.major_axis_endpoint, EllipseState.majorPos, void 0, void 0);
    if (!endpointDefined)
      return;
    Vec3.sub(EllipseState.majorAxis, EllipseState.majorPos, EllipseState.centerPos);
  } else {
    Vec3.copy(EllipseState.majorAxis, params.major_axis);
  }
  if (params.minor_axis_endpoint) {
    const endpointDefined = resolvePosition(context, params.minor_axis_endpoint, EllipseState.minorPos, void 0, void 0);
    if (!endpointDefined)
      return;
    Vec3.sub(EllipseState.minorAxis, EllipseState.minorPos, EllipseState.centerPos);
  } else {
    Vec3.copy(EllipseState.minorAxis, params.minor_axis);
  }
  const { mesh, groups } = state;
  Mat4.fromTranslation(EllipseState.translationXform, EllipseState.centerPos);
  if (params.as_circle) {
    const r = (_a = params.radius_major) !== null && _a !== void 0 ? _a : Vec3.magnitude(EllipseState.majorAxis);
    Vec3.set(EllipseState.scale, r, 1, r);
  } else {
    const major = (_b = params.radius_major) !== null && _b !== void 0 ? _b : Vec3.magnitude(EllipseState.majorAxis);
    const minor = (_c = params.radius_minor) !== null && _c !== void 0 ? _c : Vec3.magnitude(EllipseState.minorAxis);
    Vec3.set(EllipseState.scale, minor, 1, major);
  }
  Mat4.fromScaling(EllipseState.scaleXform, EllipseState.scale);
  Vec3.normalize(EllipseState.minorAxis, EllipseState.minorAxis);
  Vec3.normalize(EllipseState.majorAxis, EllipseState.majorAxis);
  Vec3.cross(EllipseState.normal, EllipseState.majorAxis, EllipseState.minorAxis);
  Mat4.targetTo(EllipseState.rotationXform, Vec3.origin, EllipseState.majorAxis, EllipseState.normal);
  Mat4.mul(EllipseState.rotationXform, EllipseState.rotationXform, Mat4.rotY180);
  Mat4.mul3(EllipseState.xform, EllipseState.translationXform, EllipseState.rotationXform, EllipseState.scaleXform);
  mesh.currentGroup = groups.allocateSingle(node);
  groups.updateColor(mesh.currentGroup, params.color);
  groups.updateTooltip(mesh.currentGroup, params.tooltip);
  MeshBuilder.addPrimitive(mesh, EllipseState.xform, circle);
  MeshBuilder.addPrimitiveFlipped(mesh, EllipseState.xform, circle);
}
var EllipsoidState = {
  centerPos: Vec3.zero(),
  majorPos: Vec3.zero(),
  minorPos: Vec3.zero(),
  majorAxis: Vec3.zero(),
  minorAxis: Vec3.zero(),
  sphere: Sphere3D.zero(),
  radius: Vec3.zero(),
  extent: Vec3.zero(),
  up: Vec3.zero()
};
function addEllipsoidMesh(context, state, node, params) {
  const centerDefined = resolvePosition(context, params.center, EllipsoidState.centerPos, EllipsoidState.sphere, void 0);
  if (!centerDefined)
    return;
  if (params.major_axis_endpoint) {
    const endpointDefined = resolvePosition(context, params.major_axis_endpoint, EllipsoidState.majorPos, void 0, void 0);
    if (!endpointDefined)
      return;
    Vec3.sub(EllipsoidState.majorAxis, EllipsoidState.majorPos, EllipsoidState.centerPos);
  } else if (params.major_axis) {
    Vec3.copy(EllipsoidState.majorAxis, params.major_axis);
  } else {
    Vec3.copy(EllipsoidState.majorAxis, Vec3.unitX);
  }
  if (params.minor_axis_endpoint) {
    const endpointDefined = resolvePosition(context, params.minor_axis_endpoint, EllipsoidState.minorPos, void 0, void 0);
    if (!endpointDefined)
      return;
    Vec3.sub(EllipsoidState.minorAxis, EllipsoidState.minorPos, EllipsoidState.centerPos);
  } else if (params.minor_axis) {
    Vec3.copy(EllipsoidState.minorAxis, params.minor_axis);
  } else {
    Vec3.copy(EllipsoidState.minorAxis, Vec3.unitY);
  }
  if (typeof params.radius === "number") {
    Vec3.set(EllipsoidState.radius, params.radius, params.radius, params.radius);
  } else if (params.radius) {
    Vec3.copy(EllipsoidState.radius, params.radius);
  } else {
    const r = EllipsoidState.sphere.radius;
    Vec3.set(EllipsoidState.radius, r, r, r);
  }
  if (typeof params.radius_extent === "number") {
    Vec3.set(EllipsoidState.extent, params.radius_extent, params.radius_extent, params.radius_extent);
  } else if (params.radius_extent) {
    Vec3.copy(EllipsoidState.extent, params.radius_extent);
  } else {
    Vec3.set(EllipsoidState.extent, 0, 0, 0);
  }
  Vec3.add(EllipsoidState.radius, EllipsoidState.radius, EllipsoidState.extent);
  const { mesh, groups } = state;
  mesh.currentGroup = groups.allocateSingle(node);
  groups.updateColor(mesh.currentGroup, params.color);
  groups.updateTooltip(mesh.currentGroup, params.tooltip);
  Vec3.normalize(EllipsoidState.majorAxis, EllipsoidState.majorAxis);
  Vec3.normalize(EllipsoidState.minorAxis, EllipsoidState.minorAxis);
  Vec3.cross(EllipsoidState.up, EllipsoidState.majorAxis, EllipsoidState.minorAxis);
  addEllipsoid(mesh, EllipsoidState.centerPos, EllipsoidState.up, EllipsoidState.minorAxis, EllipsoidState.radius, 3);
}
var BoxState = {
  center: Vec3.zero(),
  boundary: Box3D.zero(),
  size: Vec3.zero(),
  cage: BoxCage(),
  translationXform: Mat4.identity(),
  scaleXform: Mat4.identity(),
  xform: Mat4.identity()
};
function addBoxMesh(context, state, node, params) {
  if (!params.show_edges && !params.show_faces)
    return;
  const positionDefined = resolvePosition(context, params.center, BoxState.center, void 0, BoxState.boundary);
  if (!positionDefined)
    return;
  if (params.extent) {
    Box3D.expand(BoxState.boundary, BoxState.boundary, params.extent);
  }
  if (Box3D.volume(BoxState.boundary) < 1e-3)
    return;
  const { mesh, groups } = state;
  Mat4.fromScaling(BoxState.scaleXform, Box3D.size(BoxState.size, BoxState.boundary));
  Mat4.fromTranslation(BoxState.translationXform, BoxState.center);
  Mat4.mul(BoxState.xform, BoxState.translationXform, BoxState.scaleXform);
  if (params.show_faces) {
    mesh.currentGroup = groups.allocateSingle(node);
    groups.updateColor(mesh.currentGroup, params.face_color);
    groups.updateTooltip(mesh.currentGroup, params.tooltip);
    MeshBuilder.addPrimitive(mesh, BoxState.xform, Box());
  }
  if (params.show_edges) {
    mesh.currentGroup = groups.allocateSingle(node);
    groups.updateColor(mesh.currentGroup, params.edge_color);
    groups.updateTooltip(mesh.currentGroup, params.tooltip);
    MeshBuilder.addCage(mesh, BoxState.xform, BoxCage(), params.edge_radius, 2, 8);
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/load-extensions/is-hidden-custom-state.js
var IsHiddenCustomStateExtension = {
  id: "ww-pdb/is-hidden-custom-state",
  description: "Allow updating initial visibility of nodes",
  createExtensionContext: () => ({}),
  action: (updateTarget, node) => {
    var _a;
    if (!node.custom || !((_a = node.custom) === null || _a === void 0 ? void 0 : _a.is_hidden))
      return;
    updateTarget.update.to(updateTarget.selector).updateState({ isHidden: true });
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/components/surroundings.js
var StructureSurroundingsParams = {
  radius: ParamDefinition.Numeric(5, { min: 0 }, { description: "Surroundings radius in Angstroms" }),
  includeSelf: ParamDefinition.Boolean(true, { description: "Include parent selection itself in the surroundings" }),
  wholeResidues: ParamDefinition.Boolean(true, { description: "Include whole residues, instead of individual atoms" }),
  nullIfEmpty: ParamDefinition.Optional(ParamDefinition.Boolean(true, { isHidden: true }))
};
var StructureSurroundings = PluginStateTransform.BuiltIn({
  name: "structure-surroundings",
  display: { name: "Surroundings", description: "Surroundings of a structure component." },
  from: PluginStateObject.Molecule.Structure,
  to: PluginStateObject.Molecule.Structure,
  params: StructureSurroundingsParams
})({
  apply({ a, params, cache }) {
    var _a;
    const struct = a.data;
    const rootStruct = (_a = struct.parent) !== null && _a !== void 0 ? _a : struct;
    const targetBundle = element_exports.Bundle.fromSubStructure(rootStruct, struct);
    const targetExpr = element_exports.Bundle.toExpression(targetBundle);
    let surroundingsExpr = MolScriptBuilder.struct.modifier.includeSurroundings({
      0: targetExpr,
      radius: params.radius,
      "as-whole-residues": params.wholeResidues
    });
    if (!params.includeSelf) {
      surroundingsExpr = MolScriptBuilder.struct.modifier.exceptBy({
        0: surroundingsExpr,
        by: targetExpr
      });
    }
    return createStructureComponent(rootStruct, { label: `Surroundings (${params.radius} Å)`, type: { name: "expression", params: surroundingsExpr }, nullIfEmpty: params.nullIfEmpty }, cache);
  },
  dispose({ b }) {
    b === null || b === void 0 ? void 0 : b.data.customPropertyDescriptors.dispose();
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/load-generic.js
function loadTreeVirtual(plugin, tree, loadingActions, context, options) {
  var _a;
  const updateRoot = UpdateTarget.create(plugin, (_a = options === null || options === void 0 ? void 0 : options.replaceExisting) !== null && _a !== void 0 ? _a : false);
  loadTreeInUpdate(updateRoot, tree, loadingActions, context, options);
  const stateTree = updateRoot.update.getTree();
  const stateSnapshot = { tree: StateTree.toJSON(stateTree) };
  const pluginStateSnapshot = { id: UUID.create22(), data: stateSnapshot };
  return pluginStateSnapshot;
}
function loadTreeInUpdate(updateRoot, tree, loadingActions, context, options) {
  var _a;
  const mapping = /* @__PURE__ */ new Map();
  if (options === null || options === void 0 ? void 0 : options.replaceExisting) {
    UpdateTarget.deleteChildren(updateRoot);
  }
  const extensionContexts = ((_a = options === null || options === void 0 ? void 0 : options.extensions) !== null && _a !== void 0 ? _a : []).map((ext) => ({ ext, extCtx: ext.createExtensionContext(tree, context) }));
  const mvsRefMap = /* @__PURE__ */ new Map();
  dfs(tree, (node, parent) => {
    const kind = node.kind;
    let msNode;
    const updateParent = parent ? mapping.get(parent) : updateRoot;
    const action = loadingActions[kind];
    if (action) {
      if (updateParent) {
        msNode = action(updateParent, node, context);
        if (msNode && node.ref) {
          UpdateTarget.tag(msNode, mvsRefTags(node.ref));
          mvsRefMap.set(node.ref, msNode.selector.ref);
        }
        mapping.set(node, msNode);
      } else {
        console.warn(`No target found for this "${node.kind}" node`);
        return;
      }
    }
    if (updateParent) {
      for (const { ext, extCtx } of extensionContexts) {
        ext.action(msNode !== null && msNode !== void 0 ? msNode : updateParent, node, context, extCtx);
      }
    }
  });
  for (const target of updateRoot.targetManager.allTargets) {
    UpdateTarget.dependsOn(target, mvsRefMap);
  }
  extensionContexts.forEach((e) => {
    var _a2, _b;
    return (_b = (_a2 = e.ext).disposeExtensionContext) === null || _b === void 0 ? void 0 : _b.call(_a2, e.extCtx, tree, context);
  });
}
var UpdateTarget = {
  /** Create a new update, with `selector` pointing to the root. */
  create(plugin, replaceExisting) {
    const update = plugin.build();
    const msTarget = update.toRoot();
    return { update, selector: msTarget.selector, targetManager: new TargetManager(plugin, replaceExisting), mvsDependencyRefs: /* @__PURE__ */ new Set() };
  },
  /** Add a child node to `target.selector`, return a new `UpdateTarget` pointing to the new child. */
  apply(target, transformer, params, options) {
    var _a, _b;
    let refSuffix = transformer.id;
    if (transformer.id === StructureRepresentation3D.id) {
      const reprType = (_b = (_a = params === null || params === void 0 ? void 0 : params.type) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "";
      refSuffix += `:${reprType}`;
    }
    const ref = target.targetManager.getChildRef(target.selector, refSuffix);
    const apply = target.update.to(target.selector).apply(transformer, params, { ...options, ref });
    const result = { ...target, selector: apply.selector, mvsDependencyRefs: /* @__PURE__ */ new Set(), transformer, transformParams: params };
    target.targetManager.allTargets.push(result);
    return result;
  },
  setMvsDependencies(target, refs) {
    refs.forEach((ref) => target.mvsDependencyRefs.add(ref));
    return target;
  },
  dependsOn(target, mapping) {
    if (!target.mvsDependencyRefs.size)
      return target;
    const dependsOn = Array.from(target.mvsDependencyRefs).map((d) => mapping.get(d)).filter((d) => d);
    if (!dependsOn.length)
      return target;
    target.update.to(target.selector).dependsOn(dependsOn);
    return target;
  },
  /** Add tags to `target.selector` */
  tag(target, tags) {
    if (tags.length > 0) {
      target.update.to(target.selector).tag(tags);
    }
    return target;
  },
  /** Delete all children of `target.selector`. */
  deleteChildren(target) {
    const children = target.update.currentTree.children.get(target.selector.ref);
    children.forEach((child) => target.update.delete(child));
    return target;
  },
  /** Commit all changes done in the current update. */
  commit(target) {
    return target.update.commit();
  }
};
var TargetManager = class {
  constructor(plugin, replaceExisting) {
    this._counter = {};
    this.allTargets = [];
    if (!replaceExisting) {
      plugin.state.data.cells.forEach((cell) => {
        var _a;
        const ref = cell.transform.ref;
        if (ref.startsWith("!mvs:")) {
          const [_, hash, idNumber] = ref.split(":");
          const nextIdNumber = parseInt(idNumber) + 1;
          if (nextIdNumber > ((_a = this._counter[hash]) !== null && _a !== void 0 ? _a : 0)) {
            this._counter[hash] = nextIdNumber;
          }
        }
      });
    }
  }
  /** Return ref for a new node with given `hash`; update the counter accordingly. */
  nextRef(hash) {
    var _a;
    var _b;
    (_a = (_b = this._counter)[hash]) !== null && _a !== void 0 ? _a : _b[hash] = 0;
    const idNumber = this._counter[hash]++;
    return `!mvs:${hash}:${idNumber}`;
  }
  /** Return ref for a new node based on parent and desired suffix. */
  getChildRef(parent, suffix) {
    const hashBase = parent.ref.replace(/^!mvs:/, "") + ":" + suffix;
    const hash = stringHash(hashBase);
    const result = this.nextRef(hash);
    return result;
  }
};
function mvsRefTags(mvsNodeRef) {
  if (mvsNodeRef === void 0)
    return [];
  else
    return [`mvs-ref:${mvsNodeRef}`];
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/load-extensions/non-covalent-interactions.js
var DefaultNonCovalentInteractionRadius = 5;
var NonCovalentInteractionsExtension = {
  id: "wwpdb/non-covalent-interactions",
  description: "Allow showing non-covalent interactions around components with molstar_show_non_covalent_interactions additional property",
  createExtensionContext: () => ({}),
  action: (updateTarget, node, context, extContext) => {
    var _a;
    if (node.kind !== "component" && node.kind !== "component_from_uri" && node.kind !== "component_from_source")
      return;
    const customProps = getCustomProps(node);
    if (!customProps.molstar_show_non_covalent_interactions)
      return void 0;
    const surroundings = UpdateTarget.apply(updateTarget, StructureSurroundings, {
      radius: (_a = customProps.molstar_non_covalent_interactions_radius_ang) !== null && _a !== void 0 ? _a : DefaultNonCovalentInteractionRadius,
      includeSelf: true,
      wholeResidues: true,
      nullIfEmpty: false
    });
    UpdateTarget.apply(updateTarget, StateTransforms.Representation.StructureRepresentation3D, {
      type: { name: "ball-and-stick", params: { sizeFactor: 0.22, sizeAspectRatio: 0.73, adjustCylinderLength: true, xrayShaded: true, aromaticBonds: false, multipleBonds: "off", excludeTypes: ["hydrogen-bond", "metal-coordination"] } },
      colorTheme: { name: "element-symbol", params: {} },
      sizeTheme: { name: "physical", params: {} }
    });
    UpdateTarget.apply(surroundings, StateTransforms.Representation.StructureRepresentation3D, {
      type: { name: "ball-and-stick", params: { sizeFactor: 0.16, excludeTypes: ["hydrogen-bond", "metal-coordination"] } },
      colorTheme: { name: "element-symbol", params: {} },
      sizeTheme: { name: "physical", params: {} }
    });
    UpdateTarget.apply(surroundings, StateTransforms.Representation.StructureRepresentation3D, {
      type: { name: "interactions", params: {} },
      colorTheme: { name: "interaction-type", params: {} },
      sizeTheme: { name: "uniform", params: {} }
    });
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/load-helpers.js
var AnnotationFromUriKinds = /* @__PURE__ */ new Set(["color_from_uri", "component_from_uri", "label_from_uri", "tooltip_from_uri"]);
var AnnotationFromSourceKinds = /* @__PURE__ */ new Set(["color_from_source", "component_from_source", "label_from_source", "tooltip_from_source"]);
function transformFromRotationTranslation(rotation, translation) {
  if (rotation && rotation.length !== 9)
    throw new Error(`'rotation' param for 'transform' node must be array of 9 elements, found ${rotation}`);
  if (translation && translation.length !== 3)
    throw new Error(`'translation' param for 'transform' node must be array of 3 elements, found ${translation}`);
  const T = Mat4.identity();
  if (rotation) {
    const rotMatrix = Mat3.fromArray(Mat3(), rotation, 0);
    ensureRotationMatrix(rotMatrix, rotMatrix);
    Mat4.fromMat3(T, rotMatrix);
  }
  if (translation) {
    Mat4.setTranslation(T, Vec3.fromArray(Vec3(), translation, 0));
  }
  if (!Mat4.isRotationAndTranslation(T))
    throw new Error(`'rotation' param for 'transform' is not a valid rotation matrix: ${rotation}`);
  return T;
}
function ensureRotationMatrix(out, a) {
  const x = Vec3.fromArray(_tmpVecX, a, 0);
  const y = Vec3.fromArray(_tmpVecY, a, 3);
  const z = Vec3.fromArray(_tmpVecZ, a, 6);
  Vec3.normalize(x, x);
  Vec3.orthogonalize(y, x, y);
  Vec3.normalize(z, Vec3.cross(z, x, y));
  Mat3.fromColumns(out, x, y, z);
  return out;
}
var _tmpVecX = Vec3();
var _tmpVecY = Vec3();
var _tmpVecZ = Vec3();
function transformProps(node) {
  const result = [];
  const transforms = getChildren(node).filter((c) => c.kind === "transform");
  for (const transform of transforms) {
    const { rotation, translation } = transform.params;
    const matrix = transformFromRotationTranslation(rotation, translation);
    result.push({ transform: { name: "matrix", params: { data: matrix, transpose: false } } });
  }
  return result;
}
function collectAnnotationReferences(tree, context) {
  const distinctSpecs = {};
  dfs(tree, (node) => {
    var _a, _b, _c;
    let spec = void 0;
    if (AnnotationFromUriKinds.has(node.kind)) {
      const p = node.params;
      spec = { source: { name: "url", params: { url: p.uri, format: p.format } }, schema: p.schema, cifBlock: blockSpec(p.block_header, p.block_index), cifCategory: (_a = p.category_name) !== null && _a !== void 0 ? _a : void 0 };
    } else if (AnnotationFromSourceKinds.has(node.kind)) {
      const p = node.params;
      spec = { source: { name: "source-cif", params: {} }, schema: p.schema, cifBlock: blockSpec(p.block_header, p.block_index), cifCategory: (_b = p.category_name) !== null && _b !== void 0 ? _b : void 0 };
    }
    if (spec) {
      const key = canonicalJsonString(spec);
      (_c = distinctSpecs[key]) !== null && _c !== void 0 ? _c : distinctSpecs[key] = { ...spec, id: stringHash(key) };
      context.annotationMap.set(node, distinctSpecs[key].id);
    }
  });
  return Object.values(distinctSpecs);
}
function blockSpec(header, index) {
  if (isDefined(header)) {
    return { name: "header", params: { header } };
  } else {
    return { name: "index", params: { index: index !== null && index !== void 0 ? index : 0 } };
  }
}
function collectAnnotationTooltips(tree, context) {
  const annotationTooltips = [];
  dfs(tree, (node) => {
    if (node.kind === "tooltip_from_uri" || node.kind === "tooltip_from_source") {
      const annotationId = context.annotationMap.get(node);
      if (annotationId) {
        annotationTooltips.push({ annotationId, fieldName: node.params.field_name });
      }
      ;
    }
  });
  return arrayDistinct(annotationTooltips);
}
function collectInlineTooltips(tree, context) {
  const inlineTooltips = [];
  dfs(tree, (node, parent) => {
    if (node.kind === "tooltip") {
      if ((parent === null || parent === void 0 ? void 0 : parent.kind) === "component") {
        inlineTooltips.push({
          text: node.params.text,
          selector: componentPropsFromSelector(parent.params.selector)
        });
      } else if ((parent === null || parent === void 0 ? void 0 : parent.kind) === "component_from_uri" || (parent === null || parent === void 0 ? void 0 : parent.kind) === "component_from_source") {
        const p = componentFromXProps(parent, context);
        if (isDefined(p.annotationId) && isDefined(p.fieldName) && isDefined(p.fieldValues)) {
          inlineTooltips.push({
            text: node.params.text,
            selector: {
              name: "annotation",
              params: { annotationId: p.annotationId, fieldName: p.fieldName, fieldValues: p.fieldValues }
            }
          });
        }
      }
    }
  });
  return inlineTooltips;
}
function collectInlineLabels(tree, context) {
  const inlineLabels = [];
  dfs(tree, (node, parent) => {
    if (node.kind === "label") {
      if ((parent === null || parent === void 0 ? void 0 : parent.kind) === "component") {
        inlineLabels.push({
          text: node.params.text,
          position: {
            name: "selection",
            params: {
              selector: componentPropsFromSelector(parent.params.selector)
            }
          }
        });
      } else if ((parent === null || parent === void 0 ? void 0 : parent.kind) === "component_from_uri" || (parent === null || parent === void 0 ? void 0 : parent.kind) === "component_from_source") {
        const p = componentFromXProps(parent, context);
        if (isDefined(p.annotationId) && isDefined(p.fieldName) && isDefined(p.fieldValues)) {
          inlineLabels.push({
            text: node.params.text,
            position: {
              name: "selection",
              params: {
                selector: {
                  name: "annotation",
                  params: { annotationId: p.annotationId, fieldName: p.fieldName, fieldValues: p.fieldValues }
                }
              }
            }
          });
        }
      }
    }
  });
  return inlineLabels;
}
function isPhantomComponent(node) {
  if (node.ref !== void 0)
    return false;
  if (node.custom !== void 0 && Object.keys(node.custom).length > 0)
    return false;
  return node.children && node.children.every((child) => child.kind === "tooltip" || child.kind === "label");
}
function structureProps(node) {
  var _a;
  const params = node.params;
  switch (params.type) {
    case "model":
      return {
        type: {
          name: "model",
          params: {}
        }
      };
    case "assembly":
      return {
        type: {
          name: "assembly",
          params: { id: (_a = params.assembly_id) !== null && _a !== void 0 ? _a : void 0 }
        }
      };
    case "symmetry":
      return {
        type: {
          name: "symmetry",
          params: { ijkMin: Vec3.ofArray(params.ijk_min), ijkMax: Vec3.ofArray(params.ijk_max) }
        }
      };
    case "symmetry_mates":
      return {
        type: {
          name: "symmetry-mates",
          params: { radius: params.radius }
        }
      };
    default:
      throw new Error(`NotImplementedError: Loading action for "structure" node, type "${params.type}"`);
  }
}
function componentPropsFromSelector(selector) {
  if (selector === void 0) {
    return SelectorAll;
  } else if (typeof selector === "string") {
    return { name: "static", params: selector };
  } else if (Array.isArray(selector)) {
    return { name: "expression", params: rowsToExpression(selector) };
  } else {
    return { name: "expression", params: rowToExpression(selector) };
  }
}
function prettyNameFromSelector(selector) {
  if (selector === void 0) {
    return "All";
  } else if (typeof selector === "string") {
    return stringToWords(selector);
  } else if (Array.isArray(selector)) {
    return `Custom Selection: [${selector.map(formatObject).join(", ")}]`;
  } else {
    return `Custom Selection: ${formatObject(selector)}`;
  }
}
function labelFromXProps(node, context) {
  var _a;
  const annotationId = context.annotationMap.get(node);
  const fieldName = node.params.field_name;
  const nearestReprNode = (_a = context.nearestReprMap) === null || _a === void 0 ? void 0 : _a.get(node);
  return {
    type: { name: MVSAnnotationLabelRepresentationProvider.name, params: { annotationId, fieldName } },
    colorTheme: colorThemeForNode(nearestReprNode, context)
  };
}
function componentFromXProps(node, context) {
  const annotationId = context.annotationMap.get(node);
  const { field_name, field_values } = node.params;
  return {
    annotationId,
    fieldName: field_name,
    fieldValues: field_values ? { name: "selected", params: field_values.map((v) => ({ value: v })) } : { name: "all", params: {} },
    nullIfEmpty: false
  };
}
function representationProps(node) {
  var _a, _b;
  const alpha = alphaForNode(node);
  const params = node.params;
  switch (params.type) {
    case "cartoon":
      return {
        type: { name: "cartoon", params: { alpha, tubularHelices: params.tubular_helices } },
        sizeTheme: { name: "uniform", params: { value: params.size_factor } }
      };
    case "ball_and_stick":
      return {
        type: { name: "ball-and-stick", params: { sizeFactor: ((_a = params.size_factor) !== null && _a !== void 0 ? _a : 1) * 0.5, sizeAspectRatio: 0.5, alpha, ignoreHydrogens: params.ignore_hydrogens } }
      };
    case "spacefill":
      return {
        type: { name: "spacefill", params: { alpha, ignoreHydrogens: params.ignore_hydrogens } },
        sizeTheme: { name: "physical", params: { scale: params.size_factor } }
      };
    case "carbohydrate":
      return {
        type: { name: "carbohydrate", params: { alpha, sizeFactor: (_b = params.size_factor) !== null && _b !== void 0 ? _b : 1 } }
      };
    case "surface":
      return {
        type: { name: "molecular-surface", params: { alpha, ignoreHydrogens: params.ignore_hydrogens } },
        sizeTheme: { name: "physical", params: { scale: params.size_factor } }
      };
    default:
      throw new Error("NotImplementedError");
  }
}
function alphaForNode(node) {
  const children = getChildren(node).filter((c) => c.kind === "opacity");
  if (children.length > 0) {
    return children[children.length - 1].params.opacity;
  } else {
    return 1;
  }
}
function hasMolStarUseDefaultColoring(node) {
  if (!node.custom)
    return false;
  return "molstar_use_default_coloring" in node.custom || "molstar_color_theme_name" in node.custom;
}
function colorThemeForNode(node, context) {
  var _a, _b, _c;
  if ((node === null || node === void 0 ? void 0 : node.kind) === "representation") {
    const children = getChildren(node).filter((c) => c.kind === "color" || c.kind === "color_from_uri" || c.kind === "color_from_source");
    if (children.length === 0) {
      return {
        name: "uniform",
        params: { value: decodeColor(DefaultColor) }
      };
    } else if (children.length === 1 && hasMolStarUseDefaultColoring(children[0])) {
      if ((_a = children[0].custom) === null || _a === void 0 ? void 0 : _a.molstar_use_default_coloring)
        return void 0;
      const custom = children[0].custom;
      return {
        name: (_b = custom === null || custom === void 0 ? void 0 : custom.molstar_color_theme_name) !== null && _b !== void 0 ? _b : void 0,
        params: (_c = custom === null || custom === void 0 ? void 0 : custom.molstar_color_theme_params) !== null && _c !== void 0 ? _c : {}
      };
    } else if (children.length === 1 && appliesColorToWholeRepr(children[0])) {
      return colorThemeForNode(children[0], context);
    } else {
      const layers = children.map((c) => {
        const theme = colorThemeForNode(c, context);
        if (!theme)
          return void 0;
        return { theme, selection: componentPropsFromSelector(c.kind === "color" ? c.params.selector : void 0) };
      }).filter((t) => !!t);
      return {
        name: MultilayerColorThemeName,
        params: { layers }
      };
    }
  }
  let annotationId = void 0;
  let fieldName = void 0;
  let color = void 0;
  switch (node === null || node === void 0 ? void 0 : node.kind) {
    case "color_from_uri":
    case "color_from_source":
      annotationId = context.annotationMap.get(node);
      fieldName = node.params.field_name;
      break;
    case "color":
      color = node.params.color;
      break;
  }
  if (annotationId) {
    return {
      name: MVSAnnotationColorThemeProvider.name,
      params: { annotationId, fieldName, background: NoColor }
    };
  } else {
    return {
      name: "uniform",
      params: { value: decodeColor(color) }
    };
  }
}
function appliesColorToWholeRepr(node) {
  if (node.kind === "color") {
    return !isDefined(node.params.selector) || node.params.selector === "all";
  } else {
    return true;
  }
}
function makeNearestReprMap(root) {
  const map = /* @__PURE__ */ new Map();
  dfs(root, void 0, (node, parent) => {
    if (node.kind === "representation") {
      map.set(node, node);
    }
    if (node.kind !== "structure" && map.has(node) && parent && !map.has(parent)) {
      map.set(parent, map.get(node));
    }
  });
  dfs(root, (node, parent) => {
    if (!map.has(node) && parent && map.has(parent)) {
      map.set(node, map.get(parent));
    }
  });
  return map;
}
function volumeRepresentationProps(node) {
  var _a;
  const alpha = alphaForNode(node);
  const params = node.params;
  switch (params.type) {
    case "isosurface":
      const isoValue = typeof params.absolute_isovalue === "number" ? Volume.IsoValue.absolute(params.absolute_isovalue) : Volume.IsoValue.relative((_a = params.relative_isovalue) !== null && _a !== void 0 ? _a : 0);
      const visuals = [];
      if (params.show_wireframe)
        visuals.push("wireframe");
      if (params.show_faces)
        visuals.push("solid");
      return {
        type: { name: "isosurface", params: { alpha, isoValue, visuals } }
      };
    default:
      throw new Error("NotImplementedError");
  }
}
function volumeColorThemeForNode(node, context) {
  if ((node === null || node === void 0 ? void 0 : node.kind) !== "volume_representation")
    return void 0;
  const children = getChildren(node).filter((c) => c.kind === "color");
  if (children.length === 0) {
    return {
      name: "uniform",
      params: { value: decodeColor(DefaultColor) }
    };
  }
  if (children.length === 1) {
    return colorThemeForNode(children[0], context);
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/molstar/conversion.js
var ParseFormatMvsToMolstar = {
  mmcif: { format: "cif", is_binary: false },
  bcif: { format: "cif", is_binary: true },
  pdb: { format: "pdb", is_binary: false },
  map: { format: "map", is_binary: true }
};
var mvsToMolstarConversionRules = {
  "download": (node) => [],
  "parse": (node, parent) => {
    const { format, is_binary } = ParseFormatMvsToMolstar[node.params.format];
    const convertedNode = { kind: "parse", params: { ...node.params, format }, custom: node.custom, ref: node.ref };
    if ((parent === null || parent === void 0 ? void 0 : parent.kind) === "download") {
      return [
        { kind: "download", params: { ...parent.params, is_binary }, custom: parent.custom, ref: parent.ref },
        convertedNode
      ];
    } else {
      console.warn('"parse" node is not being converted, this is suspicious');
      return [convertedNode];
    }
  },
  "structure": (node, parent) => {
    if ((parent === null || parent === void 0 ? void 0 : parent.kind) !== "parse")
      throw new Error(`Parent of "structure" must be "parse", not "${parent === null || parent === void 0 ? void 0 : parent.kind}".`);
    const { format } = ParseFormatMvsToMolstar[parent.params.format];
    return [
      { kind: "trajectory", params: { format, ...pickObjectKeys(node.params, ["block_header", "block_index"]) } },
      { kind: "model", params: pickObjectKeys(node.params, ["model_index"]) },
      { kind: "structure", params: omitObjectKeys(node.params, ["block_header", "block_index", "model_index"]), custom: node.custom, ref: node.ref }
    ];
  }
};
var molstarNodesToCondense = /* @__PURE__ */ new Set(["download", "parse", "trajectory", "model"]);
function convertMvsToMolstar(mvsTree, sourceUrl) {
  const full = addDefaults(mvsTree, MVSTreeSchema);
  if (sourceUrl)
    resolveUris(full, sourceUrl, ["uri", "url"]);
  const converted = convertTree(full, mvsToMolstarConversionRules);
  if (converted.kind !== "root")
    throw new Error("Root's type is not 'root' after conversion from MVS tree to Molstar tree.");
  const condensed = condenseTree(converted, molstarNodesToCondense);
  return condensed;
}
function fileExtensionMatches(filename, extensions) {
  filename = filename.toLowerCase();
  return extensions.some((ext) => ext === "*" || filename.endsWith(ext));
}
var StructureFormatExtensions = {
  mmcif: [".cif", ".mmif"],
  bcif: [".bcif"],
  pdb: [".pdb", ".ent"],
  map: [".map", ".ccp4", ".mrc", ".mrcs"]
};
function mvsSanityCheckIssues(tree) {
  const result = [];
  dfs(tree, (node, parent) => {
    if (node.kind === "parse" && (parent === null || parent === void 0 ? void 0 : parent.kind) === "download") {
      const source = parent.params.url;
      const extensions = StructureFormatExtensions[node.params.format];
      if (!fileExtensionMatches(source, extensions)) {
        result.push(`Parsing data from ${source} as ${node.params.format} format might be a mistake. The file extension doesn't match recommended file extensions (${extensions.join(", ")})`);
      }
    }
  });
  return result.length > 0 ? result : void 0;
}
function mvsSanityCheck(tree) {
  const issues = mvsSanityCheckIssues(tree);
  if (issues) {
    console.warn("There are potential issues in the MVS tree:");
    for (const issue of issues) {
      console.warn(" ", issue);
    }
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/molstar/molstar-tree.js
var MolstarTreeSchema = TreeSchema({
  rootKind: "root",
  nodes: {
    ...FullMVSTreeSchema.nodes,
    download: {
      ...FullMVSTreeSchema.nodes.download,
      params: SimpleParamsSchema({
        ...FullMVSTreeSchema.nodes.download.params.fields,
        is_binary: RequiredField(bool, "Specifies whether file is downloaded as bytes array or string")
      })
    },
    parse: {
      ...FullMVSTreeSchema.nodes.parse,
      params: SimpleParamsSchema({
        format: RequiredField(MolstarParseFormatT, "File format")
      })
    },
    /** Auxiliary node corresponding to Molstar's TrajectoryFrom*. */
    trajectory: {
      description: "Auxiliary node corresponding to Molstar's TrajectoryFrom*.",
      parent: ["parse"],
      params: SimpleParamsSchema({
        format: RequiredField(MolstarParseFormatT, "File format"),
        ...pickObjectKeys(FullMVSTreeSchema.nodes.structure.params.fields, ["block_header", "block_index"])
      })
    },
    /** Auxiliary node corresponding to Molstar's ModelFromTrajectory. */
    model: {
      description: "Auxiliary node corresponding to Molstar's ModelFromTrajectory.",
      parent: ["trajectory"],
      params: SimpleParamsSchema(pickObjectKeys(FullMVSTreeSchema.nodes.structure.params.fields, ["model_index"]))
    },
    /** Auxiliary node corresponding to Molstar's StructureFromModel. */
    structure: {
      ...FullMVSTreeSchema.nodes.structure,
      parent: ["model"],
      params: SimpleParamsSchema(omitObjectKeys(FullMVSTreeSchema.nodes.structure.params.fields, ["block_header", "block_index", "model_index"]))
    }
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/load.js
async function loadMVS(plugin, data, options = {}) {
  plugin.errorContext.clear("mvs");
  try {
    const mvsExtensionLoaded = plugin.state.hasBehavior(MolViewSpec);
    if (!mvsExtensionLoaded)
      throw new Error("MolViewSpec extension is not loaded.");
    const multiData = data.kind === "multiple" ? data : MVSData.stateToStates(data);
    const entries = [];
    for (let i = 0; i < multiData.snapshots.length; i++) {
      const snapshot = multiData.snapshots[i];
      const previousSnapshot = i > 0 ? multiData.snapshots[i - 1] : multiData.snapshots[multiData.snapshots.length - 1];
      validateTree(MVSTreeSchema, snapshot.root, "MVS");
      if (options.sanityChecks)
        mvsSanityCheck(snapshot.root);
      const molstarTree = convertMvsToMolstar(snapshot.root, options.sourceUrl);
      validateTree(MolstarTreeSchema, molstarTree, "Converted Molstar");
      const entry = molstarTreeToEntry(plugin, molstarTree, { ...snapshot.metadata, previousTransitionDurationMs: previousSnapshot.metadata.transition_duration_ms }, options);
      entries.push(entry);
    }
    if (!options.appendSnapshots) {
      plugin.managers.snapshot.clear();
    }
    for (const entry of entries) {
      plugin.managers.snapshot.add(entry);
    }
    if (entries.length > 0) {
      await PluginCommands.State.Snapshots.Apply(plugin, { id: entries[0].snapshot.id });
    }
  } catch (err) {
    plugin.log.error(`${err}`);
    throw err;
  } finally {
    if (!options.doNotReportErrors) {
      for (const error of plugin.errorContext.get("mvs")) {
        plugin.log.warn(error);
        PluginCommands.Toast.Show(plugin, {
          title: "Error",
          message: error,
          timeoutMs: 1e4
        });
      }
    }
    plugin.errorContext.clear("mvs");
  }
}
function molstarTreeToEntry(plugin, tree, metadata, options) {
  var _a, _b, _c;
  const context = MolstarLoadingContext.create();
  const snapshot = loadTreeVirtual(plugin, tree, MolstarLoadingActions, context, { replaceExisting: true, extensions: (_a = options === null || options === void 0 ? void 0 : options.extensions) !== null && _a !== void 0 ? _a : BuiltinLoadingExtensions });
  snapshot.canvas3d = {
    props: plugin.canvas3d ? modifyCanvasProps(plugin.canvas3d.props, context.canvas) : void 0
  };
  if (!(options === null || options === void 0 ? void 0 : options.keepCamera)) {
    snapshot.camera = createPluginStateSnapshotCamera(plugin, context, metadata);
  }
  snapshot.durationInMs = metadata.linger_duration_ms + ((_b = metadata.previousTransitionDurationMs) !== null && _b !== void 0 ? _b : 0);
  const entryParams = {
    key: metadata.key,
    name: metadata.title,
    description: metadata.description,
    descriptionFormat: (_c = metadata.description_format) !== null && _c !== void 0 ? _c : "markdown"
  };
  const entry = PluginStateSnapshotManager.Entry(snapshot, entryParams);
  return entry;
}
var MolstarLoadingContext = {
  create() {
    return {
      annotationMap: /* @__PURE__ */ new Map(),
      camera: { focuses: [] }
    };
  }
};
var MolstarLoadingActions = {
  root(updateParent, node, context) {
    context.nearestReprMap = makeNearestReprMap(node);
    return updateParent;
  },
  download(updateParent, node) {
    return UpdateTarget.apply(updateParent, Download, {
      url: node.params.url,
      isBinary: node.params.is_binary
    });
  },
  parse(updateParent, node) {
    const format = node.params.format;
    if (format === "cif") {
      return UpdateTarget.apply(updateParent, ParseCif, {});
    } else if (format === "pdb") {
      return updateParent;
    } else if (format === "map") {
      return UpdateTarget.apply(updateParent, ParseCcp4, {});
    } else {
      console.error(`Unknown format in "parse" node: "${format}"`);
      return void 0;
    }
  },
  trajectory(updateParent, node) {
    var _a, _b;
    const format = node.params.format;
    if (format === "cif") {
      return UpdateTarget.apply(updateParent, TrajectoryFromMmCif, {
        blockHeader: (_a = node.params.block_header) !== null && _a !== void 0 ? _a : "",
        // Must set to '' because just undefined would get overwritten by createDefaults
        blockIndex: (_b = node.params.block_index) !== null && _b !== void 0 ? _b : void 0
      });
    } else if (format === "pdb") {
      return UpdateTarget.apply(updateParent, TrajectoryFromPDB, {});
    } else {
      console.error(`Unknown format in "trajectory" node: "${format}"`);
      return void 0;
    }
  },
  model(updateParent, node, context) {
    const annotations = collectAnnotationReferences(node, context);
    const model = UpdateTarget.apply(updateParent, ModelFromTrajectory, {
      modelIndex: node.params.model_index
    });
    UpdateTarget.apply(model, CustomModelProperties, {
      properties: {
        [IsMVSModelProvider.descriptor.name]: { isMvs: true },
        [MVSAnnotationsProvider.descriptor.name]: { annotations }
      },
      autoAttach: [
        IsMVSModelProvider.descriptor.name,
        MVSAnnotationsProvider.descriptor.name
      ]
    });
    return model;
  },
  structure(updateParent, node, context) {
    var _a;
    const props = structureProps(node);
    const struct = UpdateTarget.apply(updateParent, StructureFromModel, props);
    let transformed = struct;
    for (const t of transformProps(node)) {
      transformed = UpdateTarget.apply(transformed, TransformStructureConformation, t);
    }
    const annotationTooltips = collectAnnotationTooltips(node, context);
    const inlineTooltips = collectInlineTooltips(node, context);
    if (annotationTooltips.length + inlineTooltips.length > 0) {
      UpdateTarget.apply(struct, CustomStructureProperties, {
        properties: {
          [MVSAnnotationTooltipsProvider.descriptor.name]: { tooltips: annotationTooltips },
          [CustomTooltipsProvider.descriptor.name]: { tooltips: inlineTooltips }
        },
        autoAttach: [
          MVSAnnotationTooltipsProvider.descriptor.name,
          CustomTooltipsProvider.descriptor.name
        ]
      });
    }
    const inlineLabels = collectInlineLabels(node, context);
    if (inlineLabels.length > 0) {
      const nearestReprNode = (_a = context.nearestReprMap) === null || _a === void 0 ? void 0 : _a.get(node);
      UpdateTarget.apply(struct, StructureRepresentation3D, {
        type: {
          name: CustomLabelRepresentationProvider.name,
          params: { items: inlineLabels }
        },
        colorTheme: colorThemeForNode(nearestReprNode, context)
      });
    }
    return struct;
  },
  tooltip: void 0,
  // No action needed, already loaded in `structure`
  tooltip_from_uri: void 0,
  // No action needed, already loaded in `structure`
  tooltip_from_source: void 0,
  // No action needed, already loaded in `structure`
  component(updateParent, node) {
    if (isPhantomComponent(node)) {
      return updateParent;
    }
    const selector = node.params.selector;
    return UpdateTarget.apply(updateParent, StructureComponent, {
      type: componentPropsFromSelector(selector),
      label: prettyNameFromSelector(selector),
      nullIfEmpty: false
    });
  },
  component_from_uri(updateParent, node, context) {
    if (isPhantomComponent(node))
      return void 0;
    const props = componentFromXProps(node, context);
    return UpdateTarget.apply(updateParent, MVSAnnotationStructureComponent, props);
  },
  component_from_source(updateParent, node, context) {
    if (isPhantomComponent(node))
      return void 0;
    const props = componentFromXProps(node, context);
    return UpdateTarget.apply(updateParent, MVSAnnotationStructureComponent, props);
  },
  representation(updateParent, node, context) {
    return UpdateTarget.apply(updateParent, StructureRepresentation3D, {
      ...representationProps(node),
      colorTheme: colorThemeForNode(node, context)
    });
  },
  volume(updateParent, node) {
    var _a, _b;
    if ((_a = updateParent.transformer) === null || _a === void 0 ? void 0 : _a.definition.to.includes(PluginStateObject.Format.Ccp4)) {
      return UpdateTarget.apply(updateParent, VolumeFromCcp4, {});
    } else if ((_b = updateParent.transformer) === null || _b === void 0 ? void 0 : _b.definition.to.includes(PluginStateObject.Format.Cif)) {
      return UpdateTarget.apply(updateParent, VolumeFromDensityServerCif, { blockHeader: node.params.channel_id || void 0 });
    } else {
      console.error(`Unsupported volume format`);
      return void 0;
    }
  },
  volume_representation(updateParent, node, context) {
    return UpdateTarget.apply(updateParent, VolumeRepresentation3D, {
      ...volumeRepresentationProps(node),
      colorTheme: volumeColorThemeForNode(node, context)
    });
  },
  color: void 0,
  // No action needed, already loaded in `representation`
  color_from_uri: void 0,
  // No action needed, already loaded in `representation`
  color_from_source: void 0,
  // No action needed, already loaded in `representation`
  label: void 0,
  // No action needed, already loaded in `structure`
  label_from_uri(updateParent, node, context) {
    const props = labelFromXProps(node, context);
    return UpdateTarget.apply(updateParent, StructureRepresentation3D, props);
  },
  label_from_source(updateParent, node, context) {
    const props = labelFromXProps(node, context);
    return UpdateTarget.apply(updateParent, StructureRepresentation3D, props);
  },
  focus(updateParent, node, context) {
    context.camera.focuses.push({ target: updateParent.selector, params: node.params });
    return updateParent;
  },
  camera(updateParent, node, context) {
    context.camera.cameraParams = node.params;
    return updateParent;
  },
  canvas(updateParent, node, context) {
    context.canvas = node.params;
    return updateParent;
  },
  primitives(updateParent, tree, context) {
    const refs = getPrimitiveStructureRefs(tree);
    const data = UpdateTarget.apply(updateParent, MVSInlinePrimitiveData, { node: tree });
    return applyPrimitiveVisuals(data, refs);
  },
  primitives_from_uri(updateParent, tree, context) {
    const data = UpdateTarget.apply(updateParent, MVSDownloadPrimitiveData, { uri: tree.params.uri, format: tree.params.format });
    return applyPrimitiveVisuals(data, new Set(tree.params.references));
  }
};
function applyPrimitiveVisuals(data, refs) {
  const mesh = UpdateTarget.setMvsDependencies(UpdateTarget.apply(data, MVSBuildPrimitiveShape, { kind: "mesh" }, { state: { isGhost: true } }), refs);
  UpdateTarget.apply(mesh, ShapeRepresentation3D);
  const labels = UpdateTarget.setMvsDependencies(UpdateTarget.apply(data, MVSBuildPrimitiveShape, { kind: "labels" }, { state: { isGhost: true } }), refs);
  UpdateTarget.apply(labels, ShapeRepresentation3D);
  const lines = UpdateTarget.setMvsDependencies(UpdateTarget.apply(data, MVSBuildPrimitiveShape, { kind: "lines" }, { state: { isGhost: true } }), refs);
  UpdateTarget.apply(lines, ShapeRepresentation3D);
  return data;
}
var BuiltinLoadingExtensions = [
  NonCovalentInteractionsExtension,
  IsHiddenCustomStateExtension
];

export {
  loadMVS,
  MolstarLoadingContext,
  BuiltinLoadingExtensions,
  MolViewSpec
};
//# sourceMappingURL=chunk-RVKCOBC4.js.map
