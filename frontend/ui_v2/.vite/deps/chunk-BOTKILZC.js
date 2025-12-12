import {
  ComplexTextParams,
  ComplexTextVisual,
  EmptyLoci,
  LocationIterator,
  Loci,
  Mesh,
  MeshBuilder,
  PluginStateObject,
  Spheres,
  SpheresBuilder,
  TextBuilder,
  addSphere,
  isHydrogen,
  isTrace,
  sphereVertexCount
} from "./chunk-CLY72GQO.js";
import {
  BoundaryHelper,
  ParamDefinition,
  Sphere3D,
  Structure,
  StructureProperties,
  Unit,
  element_exports
} from "./chunk-HZ3UTCAK.js";
import {
  ColorNames
} from "./chunk-Y4JRF7OT.js";
import {
  Interval,
  OrderedSet,
  SortedArray,
  Vec3
} from "./chunk-TA3F3DCY.js";

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/camera.js
function distanceAdjustment(mode, fov) {
  if (mode === "orthographic")
    return 1 / (2 * Math.tan(fov / 2));
  else
    return 1 / (2 * Math.sin(fov / 2));
}
function fovAdjustedPosition(target, refPosition, mode, fov) {
  const delta = Vec3.sub(Vec3(), refPosition, target);
  const adjustment = distanceAdjustment(mode, fov);
  return Vec3.scaleAndAdd(delta, target, delta, adjustment);
}
function fovNormalizedCameraPosition(target, refPosition, mode, fov) {
  const delta = Vec3.sub(Vec3(), refPosition, target);
  const adjustment = distanceAdjustment(mode, fov) || 1;
  return Vec3.scaleAndAdd(delta, target, delta, 1 / adjustment);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/manager/focus-camera/focus-object.js
function getFocusSnapshot(plugin, options) {
  var _a, _b;
  if (!plugin.canvas3d)
    return void 0;
  const targetSpheres = (_a = options.targets) === null || _a === void 0 ? void 0 : _a.map((target) => {
    var _a2, _b2, _c;
    const bounding = target.targetRef !== void 0 ? getCellBoundingSphere(plugin, target.targetRef) : getPluginBoundingSphere(plugin);
    if (!bounding)
      return void 0;
    const radius = (_a2 = target.radius) !== null && _a2 !== void 0 ? _a2 : bounding.radius * ((_b2 = target.radiusFactor) !== null && _b2 !== void 0 ? _b2 : 1) + ((_c = target.extraRadius) !== null && _c !== void 0 ? _c : 0);
    return Sphere3D.create(bounding.center, radius);
  }).filter((sphere) => sphere !== void 0);
  const mergedSphere = targetSpheres && targetSpheres.length > 0 ? boundingSphereOfSpheres(targetSpheres) : getPluginBoundingSphere(plugin);
  return snapshotFromSphereAndDirections(plugin.canvas3d.camera, {
    center: mergedSphere.center,
    radius: Math.max(mergedSphere.radius, (_b = options.minRadius) !== null && _b !== void 0 ? _b : 0),
    up: options.up,
    direction: options.direction
  });
}
var _tmpVec = Vec3();
function snapshotFromSphereAndDirections(camera, options) {
  var _a, _b;
  const target = options.center;
  const radius = Math.max(options.radius, 0.01);
  const direction = (_a = options.direction) !== null && _a !== void 0 ? _a : Vec3.sub(Vec3(), camera.target, camera.position);
  const up = Vec3.orthogonalize(Vec3(), direction, (_b = options.up) !== null && _b !== void 0 ? _b : camera.up);
  const distance = camera.getTargetDistance(radius);
  const deltaDirection = Vec3.setMagnitude(_tmpVec, direction, distance);
  const position = Vec3.sub(Vec3(), target, deltaDirection);
  return { target, position, up, radius };
}
function getCellBoundingSphere(plugin, cellRef) {
  const spheres = collectCellBoundingSpheres([], plugin, cellRef);
  if (spheres.length === 0)
    return void 0;
  if (spheres.length === 1)
    return spheres[0];
  return boundingSphereOfSpheres(spheres);
}
function collectCellBoundingSpheres(out, plugin, cellRef) {
  const cell = plugin.state.data.cells.get(cellRef);
  const spheres = getStateObjectBoundingSpheres(cell === null || cell === void 0 ? void 0 : cell.obj);
  if (spheres) {
    out.push(...spheres);
  } else {
    const children = plugin.state.data.tree.children.get(cellRef);
    children.forEach((child) => collectCellBoundingSpheres(out, plugin, child));
  }
  return out;
}
function getStateObjectBoundingSpheres(obj) {
  if (!obj)
    return void 0;
  if (!obj.data) {
    console.warn("Focus: no data");
    return void 0;
  }
  if (obj.data instanceof Structure) {
    const sphere = Loci.getBoundingSphere(Structure.Loci(obj.data));
    return sphere ? [sphere] : [];
  } else if (PluginStateObject.isRepresentation3D(obj)) {
    const out = [];
    for (const renderObject of obj.data.repr.renderObjects) {
      const sphere = renderObject.values.boundingSphere.ref.value;
      if (sphere.radius > 0)
        out.push(sphere);
    }
    return out;
  }
  return void 0;
}
function getPluginBoundingSphere(plugin) {
  const renderObjects = getRenderObjects(plugin, false);
  const spheres = renderObjects.map((r) => r.values.boundingSphere.ref.value).filter((sphere) => sphere.radius > 0);
  return boundingSphereOfSpheres(spheres);
}
function getRenderObjects(plugin, includeHidden) {
  let reprCells = Array.from(plugin.state.data.cells.values()).filter((cell) => cell.obj && PluginStateObject.isRepresentation3D(cell.obj));
  if (!includeHidden)
    reprCells = reprCells.filter((cell) => !cell.state.isHidden);
  const renderables = reprCells.flatMap((cell) => cell.obj.data.repr.renderObjects);
  return renderables;
}
var boundaryHelper = void 0;
function boundingSphereOfSpheres(spheres) {
  boundaryHelper !== null && boundaryHelper !== void 0 ? boundaryHelper : boundaryHelper = new BoundaryHelper("98");
  boundaryHelper.reset();
  for (const s of spheres)
    boundaryHelper.includeSphere(s);
  boundaryHelper.finishedIncludeStep();
  for (const s of spheres)
    boundaryHelper.radiusSphere(s);
  return boundaryHelper.getSphere();
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-repr/structure/visual/util/element.js
var v3add = Vec3.add;
function makeElementIgnoreTest(structure, unit, props) {
  const { ignoreHydrogens, ignoreHydrogensVariant, traceOnly } = props;
  const isCoarse = Unit.isCoarse(unit);
  const { child } = structure;
  const childUnit = child === null || child === void 0 ? void 0 : child.unitMap.get(unit.id);
  if (child && !childUnit)
    throw new Error("expected childUnit to exist if child exists");
  if (!child && !ignoreHydrogens && !traceOnly)
    return;
  return (element) => {
    return !!childUnit && !SortedArray.has(childUnit.elements, element) || !isCoarse && ignoreHydrogens && isHydrogen(structure, unit, element, ignoreHydrogensVariant) || traceOnly && !isTrace(unit, element);
  };
}
function createElementSphereMesh(ctx, unit, structure, theme, props, mesh) {
  const { child } = structure;
  const childUnit = child === null || child === void 0 ? void 0 : child.unitMap.get(unit.id);
  if (child && !childUnit)
    return Mesh.createEmpty(mesh);
  const { detail, sizeFactor, stride } = props;
  const { elements, conformation: c } = unit;
  const elementCount = elements.length;
  const vertexCount = elementCount * sphereVertexCount(detail);
  const builderState = MeshBuilder.createState(vertexCount, vertexCount / 2, mesh);
  const v = Vec3();
  const ignore = makeElementIgnoreTest(structure, unit, props);
  const l = element_exports.Location.create(structure, unit);
  const themeSize = theme.size.size;
  const center = Vec3();
  let maxSize = 0;
  let count = 0;
  for (let i = 0; i < elementCount; i++) {
    if (stride && i % stride !== 0)
      continue;
    if (ignore && ignore(elements[i]))
      continue;
    c.invariantPosition(elements[i], v);
    v3add(center, center, v);
    count += 1;
    l.element = elements[i];
    const size = themeSize(l);
    if (size > maxSize)
      maxSize = size;
    builderState.currentGroup = i;
    addSphere(builderState, v, size * sizeFactor, detail);
  }
  const m = MeshBuilder.getMesh(builderState);
  if (count === 0)
    return m;
  let boundingSphere;
  Vec3.scale(center, center, 1 / count);
  const oldBoundingSphere = mesh ? Sphere3D.clone(mesh.boundingSphere) : void 0;
  if (oldBoundingSphere && Vec3.distance(center, oldBoundingSphere.center) / oldBoundingSphere.radius < 0.1) {
    boundingSphere = oldBoundingSphere;
  } else {
    boundingSphere = Sphere3D.expand(Sphere3D(), (childUnit !== null && childUnit !== void 0 ? childUnit : unit).boundary.sphere, maxSize * sizeFactor + 0.05);
  }
  m.setBoundingSphere(boundingSphere);
  return m;
}
function createElementSphereImpostor(ctx, unit, structure, theme, props, spheres) {
  const { child } = structure;
  const childUnit = child === null || child === void 0 ? void 0 : child.unitMap.get(unit.id);
  if (child && !childUnit)
    return Spheres.createEmpty(spheres);
  const { sizeFactor, stride } = props;
  const { elements, conformation: c } = unit;
  const elementCount = elements.length;
  const builder = SpheresBuilder.create(elementCount, elementCount / 2, spheres);
  const v = Vec3();
  const ignore = makeElementIgnoreTest(structure, unit, props);
  const l = element_exports.Location.create(structure, unit);
  const themeSize = theme.size.size;
  const center = Vec3();
  let maxSize = 0;
  let count = 0;
  if (stride && stride > 1 || ignore || theme.size.granularity !== "uniform") {
    for (let i = 0; i < elementCount; i++) {
      if (stride && i % stride !== 0)
        continue;
      if (ignore && ignore(elements[i]))
        continue;
      c.invariantPosition(elements[i], v);
      builder.add(v[0], v[1], v[2], i);
      v3add(center, center, v);
      count += 1;
      l.element = elements[i];
      const size = themeSize(l);
      if (size > maxSize)
        maxSize = size;
    }
  } else {
    for (let i = 0; i < elementCount; i++) {
      c.invariantPosition(elements[i], v);
      builder.add(v[0], v[1], v[2], i);
      v3add(center, center, v);
    }
    count = elementCount;
    maxSize = themeSize(l);
  }
  const s = builder.getSpheres();
  if (count === 0)
    return s;
  let boundingSphere;
  Vec3.scale(center, center, 1 / count);
  const oldBoundingSphere = spheres ? Sphere3D.clone(spheres.boundingSphere) : void 0;
  if (oldBoundingSphere && Vec3.distance(center, oldBoundingSphere.center) / oldBoundingSphere.radius < 0.1) {
    boundingSphere = oldBoundingSphere;
  } else {
    boundingSphere = Sphere3D.expand(Sphere3D(), (childUnit !== null && childUnit !== void 0 ? childUnit : unit).boundary.sphere, maxSize * sizeFactor + 0.05);
  }
  s.setBoundingSphere(boundingSphere);
  return s;
}
function eachElement(loci, structureGroup, apply) {
  let changed = false;
  if (!element_exports.Loci.is(loci))
    return false;
  const { structure, group } = structureGroup;
  if (!Structure.areEquivalent(loci.structure, structure))
    return false;
  const elementCount = group.elements.length;
  const { unitIndexMap } = group;
  for (const e of loci.elements) {
    const unitIdx = unitIndexMap.get(e.unit.id);
    if (unitIdx !== void 0) {
      const offset = unitIdx * elementCount;
      if (Interval.is(e.indices)) {
        const start = offset + Interval.start(e.indices);
        const end = offset + Interval.end(e.indices);
        if (apply(Interval.ofBounds(start, end)))
          changed = true;
      } else {
        for (let i = 0, _i = e.indices.length; i < _i; i++) {
          const start = e.indices[i];
          let endI = i + 1;
          while (endI < _i && e.indices[endI] === start)
            endI++;
          i = endI - 1;
          const end = e.indices[i];
          changed = apply(Interval.ofRange(offset + start, offset + end)) || changed;
        }
      }
    }
  }
  return changed;
}
function getElementLoci(pickingId, structureGroup, id) {
  const { objectId, instanceId, groupId } = pickingId;
  if (id === objectId) {
    const { structure, group } = structureGroup;
    const unit = group.units[instanceId];
    const indices = OrderedSet.ofSingleton(groupId);
    return element_exports.Loci(structure.target, [{ unit, indices }]);
  }
  return EmptyLoci;
}
function createStructureElementSphereMesh(ctx, structure, theme, props, mesh) {
  const { child } = structure;
  const { detail, sizeFactor, stride } = props;
  const { getSerialIndex } = structure.serialMapping;
  const structureElementCount = structure.elementCount;
  const vertexCount = structureElementCount * sphereVertexCount(detail);
  const builderState = MeshBuilder.createState(vertexCount, vertexCount / 2, mesh);
  const themeSize = theme.size.size;
  const center = Vec3();
  let maxSize = 0;
  let count = 0;
  for (const unit of structure.units) {
    const childUnit = child === null || child === void 0 ? void 0 : child.unitMap.get(unit.id);
    if (child && !childUnit)
      continue;
    const { elements, conformation: c } = unit;
    const elementCount = elements.length;
    const v = Vec3();
    const ignore = makeElementIgnoreTest(structure, unit, props);
    const l = element_exports.Location.create(structure, unit);
    for (let i = 0; i < elementCount; i++) {
      const eI = elements[i];
      if (stride && i % stride !== 0)
        continue;
      if (ignore && ignore(eI))
        continue;
      c.position(eI, v);
      v3add(center, center, v);
      count += 1;
      l.element = eI;
      const size = themeSize(l);
      if (size > maxSize)
        maxSize = size;
      builderState.currentGroup = getSerialIndex(unit, eI);
      addSphere(builderState, v, size * sizeFactor, detail);
    }
  }
  const m = MeshBuilder.getMesh(builderState);
  if (count === 0)
    return m;
  let boundingSphere;
  Vec3.scale(center, center, 1 / count);
  const oldBoundingSphere = mesh ? Sphere3D.clone(mesh.boundingSphere) : void 0;
  if (oldBoundingSphere && Vec3.distance(center, oldBoundingSphere.center) / oldBoundingSphere.radius < 1) {
    boundingSphere = oldBoundingSphere;
  } else {
    boundingSphere = Sphere3D.expand(Sphere3D(), (child !== null && child !== void 0 ? child : structure).boundary.sphere, maxSize * sizeFactor + 0.05);
  }
  m.setBoundingSphere(boundingSphere);
  return m;
}
function createStructureElementSphereImpostor(ctx, structure, theme, props, spheres) {
  const { child } = structure;
  const { sizeFactor, stride } = props;
  const { getSerialIndex } = structure.serialMapping;
  const structureElementCount = structure.elementCount;
  const builder = SpheresBuilder.create(structureElementCount, structureElementCount / 2, spheres);
  const themeSize = theme.size.size;
  const center = Vec3();
  let maxSize = 0;
  let count = 0;
  for (const unit of structure.units) {
    const childUnit = child === null || child === void 0 ? void 0 : child.unitMap.get(unit.id);
    if (child && !childUnit)
      continue;
    const { elements, conformation: c } = unit;
    const elementCount = elements.length;
    const v = Vec3();
    const ignore = makeElementIgnoreTest(structure, unit, props);
    const l = element_exports.Location.create(structure, unit);
    if (stride && stride > 1 || ignore || theme.size.granularity !== "uniform") {
      for (let i = 0; i < elementCount; i++) {
        const eI = elements[i];
        if (stride && i % stride !== 0)
          continue;
        if (ignore && ignore(eI))
          continue;
        c.position(eI, v);
        builder.add(v[0], v[1], v[2], getSerialIndex(unit, eI));
        v3add(center, center, v);
        count += 1;
        l.element = eI;
        const size = themeSize(l);
        if (size > maxSize)
          maxSize = size;
      }
    } else {
      for (let i = 0; i < elementCount; i++) {
        const eI = elements[i];
        c.position(eI, v);
        builder.add(v[0], v[1], v[2], getSerialIndex(unit, eI));
        v3add(center, center, v);
      }
      count += elementCount;
      maxSize = themeSize(l);
    }
  }
  const s = builder.getSpheres();
  if (count === 0)
    return s;
  let boundingSphere;
  Vec3.scale(center, center, 1 / count);
  const oldBoundingSphere = spheres ? Sphere3D.clone(spheres.boundingSphere) : void 0;
  if (oldBoundingSphere && Vec3.distance(center, oldBoundingSphere.center) / oldBoundingSphere.radius < 1) {
    boundingSphere = oldBoundingSphere;
  } else {
    boundingSphere = Sphere3D.expand(Sphere3D(), (child !== null && child !== void 0 ? child : structure).boundary.sphere, maxSize * sizeFactor + 0.05);
  }
  s.setBoundingSphere(boundingSphere);
  return s;
}
function eachSerialElement(loci, structure, apply) {
  let changed = false;
  if (!element_exports.Loci.is(loci))
    return false;
  if (!Structure.areEquivalent(loci.structure, structure))
    return false;
  const { cumulativeUnitElementCount } = structure.serialMapping;
  for (const e of loci.elements) {
    const unitIdx = structure.unitIndexMap.get(e.unit.id);
    if (unitIdx !== void 0) {
      if (Interval.is(e.indices)) {
        const start = cumulativeUnitElementCount[unitIdx] + Interval.start(e.indices);
        const end = cumulativeUnitElementCount[unitIdx] + Interval.end(e.indices);
        if (apply(Interval.ofBounds(start, end)))
          changed = true;
      } else {
        for (let i = 0, _i = e.indices.length; i < _i; i++) {
          const idx = cumulativeUnitElementCount[unitIdx] + e.indices[i];
          if (apply(Interval.ofSingleton(idx)))
            changed = true;
        }
      }
    }
  }
  return changed;
}
function getSerialElementLoci(pickingId, structure, id) {
  const { objectId, groupId } = pickingId;
  if (id === objectId) {
    const { unitIndices, cumulativeUnitElementCount } = structure.serialMapping;
    const unitIdx = unitIndices[groupId];
    const unit = structure.units[unitIdx];
    const idx = groupId - cumulativeUnitElementCount[unitIdx];
    const indices = OrderedSet.ofSingleton(idx);
    return element_exports.Loci(structure, [{ unit, indices }]);
  }
  return EmptyLoci;
}
var ElementIterator;
(function(ElementIterator2) {
  function fromGroup(structureGroup) {
    const { group, structure } = structureGroup;
    const groupCount = group.elements.length;
    const instanceCount = group.units.length;
    const location = element_exports.Location.create(structure);
    const getLocation = (groupIndex, instanceIndex) => {
      const unit = group.units[instanceIndex];
      location.unit = unit;
      location.element = unit.elements[groupIndex];
      return location;
    };
    return LocationIterator(groupCount, instanceCount, 1, getLocation);
  }
  ElementIterator2.fromGroup = fromGroup;
  function fromStructure(structure) {
    const { units, elementCount } = structure;
    const groupCount = elementCount;
    const instanceCount = 1;
    const { unitIndices, elementIndices } = structure.serialMapping;
    const location = element_exports.Location.create(structure);
    const getLocation = (groupIndex) => {
      location.unit = units[unitIndices[groupIndex]];
      location.element = elementIndices[groupIndex];
      return location;
    };
    return LocationIterator(groupCount, instanceCount, 1, getLocation, true);
  }
  ElementIterator2.fromStructure = fromStructure;
})(ElementIterator || (ElementIterator = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-repr/structure/visual/label-text.js
var LabelTextParams = {
  ...ComplexTextParams,
  background: ParamDefinition.Boolean(false),
  backgroundMargin: ParamDefinition.Numeric(0, { min: 0, max: 1, step: 0.01 }),
  backgroundColor: ParamDefinition.Color(ColorNames.black),
  backgroundOpacity: ParamDefinition.Numeric(0.5, { min: 0, max: 1, step: 0.01 }),
  borderWidth: ParamDefinition.Numeric(0.25, { min: 0, max: 0.5, step: 0.01 }),
  level: ParamDefinition.Select("residue", [["chain", "Chain"], ["residue", "Residue"], ["element", "Element"]], { isEssential: true }),
  ignoreHydrogens: ParamDefinition.Boolean(false),
  ignoreHydrogensVariant: ParamDefinition.Select("all", ParamDefinition.arrayToOptions(["all", "non-polar"])),
  chainScale: ParamDefinition.Numeric(10, { min: 0, max: 20, step: 0.1 }),
  residueScale: ParamDefinition.Numeric(1, { min: 0, max: 20, step: 0.1 }),
  elementScale: ParamDefinition.Numeric(0.5, { min: 0, max: 20, step: 0.1 })
};
function LabelTextVisual(materialId) {
  return ComplexTextVisual({
    defaultProps: ParamDefinition.getDefaultValues(LabelTextParams),
    createGeometry: createLabelText,
    createLocationIterator: ElementIterator.fromStructure,
    getLoci: getSerialElementLoci,
    eachLocation: eachSerialElement,
    setUpdateState: (state, newProps, currentProps) => {
      state.createGeometry = newProps.level !== currentProps.level || newProps.level === "chain" && newProps.chainScale !== currentProps.chainScale || newProps.level === "residue" && newProps.residueScale !== currentProps.residueScale || newProps.level === "element" && newProps.elementScale !== currentProps.elementScale || newProps.ignoreHydrogens !== currentProps.ignoreHydrogens || newProps.ignoreHydrogensVariant !== currentProps.ignoreHydrogensVariant;
    }
  }, materialId);
}
function createLabelText(ctx, structure, theme, props, text) {
  switch (props.level) {
    case "chain":
      return createChainText(ctx, structure, theme, props, text);
    case "residue":
      return createResidueText(ctx, structure, theme, props, text);
    case "element":
      return createElementText(ctx, structure, theme, props, text);
  }
}
var tmpVec = Vec3();
var boundaryHelper2 = new BoundaryHelper("98");
function createChainText(ctx, structure, theme, props, text) {
  const l = element_exports.Location.create(structure);
  const { units, serialMapping } = structure;
  const { auth_asym_id, label_asym_id } = StructureProperties.chain;
  const { cumulativeUnitElementCount } = serialMapping;
  const count = units.length;
  const { chainScale } = props;
  const builder = TextBuilder.create(props, count, count / 2, text);
  for (let i = 0, il = units.length; i < il; ++i) {
    const unit = units[i];
    l.unit = unit;
    l.element = unit.elements[0];
    const { center, radius } = unit.lookup3d.boundary.sphere;
    Vec3.transformMat4(tmpVec, center, unit.conformation.operator.matrix);
    const authId = auth_asym_id(l);
    const labelId = label_asym_id(l);
    const text2 = authId === labelId ? labelId : `${labelId} [${authId}]`;
    builder.add(text2, tmpVec[0], tmpVec[1], tmpVec[2], radius, chainScale, cumulativeUnitElementCount[i]);
  }
  return builder.getText();
}
function createResidueText(ctx, structure, theme, props, text) {
  const l = element_exports.Location.create(structure);
  const { units, serialMapping } = structure;
  const { label_comp_id } = StructureProperties.atom;
  const { auth_seq_id } = StructureProperties.residue;
  const { cumulativeUnitElementCount } = serialMapping;
  const count = structure.polymerResidueCount * 2;
  const { residueScale } = props;
  const builder = TextBuilder.create(props, count, count / 2, text);
  for (let i = 0, il = units.length; i < il; ++i) {
    const unit = units[i];
    const c = unit.conformation;
    const { elements } = unit;
    l.unit = unit;
    l.element = unit.elements[0];
    const residueIndex = unit.model.atomicHierarchy.residueAtomSegments.index;
    const groupOffset = cumulativeUnitElementCount[i];
    let j = 0;
    const jl = elements.length;
    while (j < jl) {
      const start = j, rI = residueIndex[elements[j]];
      j++;
      while (j < jl && residueIndex[elements[j]] === rI)
        j++;
      boundaryHelper2.reset();
      for (let eI = start; eI < j; eI++) {
        c.position(elements[eI], tmpVec);
        boundaryHelper2.includePosition(tmpVec);
      }
      boundaryHelper2.finishedIncludeStep();
      for (let eI = start; eI < j; eI++) {
        c.position(elements[eI], tmpVec);
        boundaryHelper2.radiusPosition(tmpVec);
      }
      l.element = elements[start];
      const { center, radius } = boundaryHelper2.getSphere();
      const authSeqId = auth_seq_id(l);
      const compId = label_comp_id(l);
      const text2 = `${compId} ${authSeqId}`;
      builder.add(text2, center[0], center[1], center[2], radius, residueScale, groupOffset + start);
    }
  }
  return builder.getText();
}
function createElementText(ctx, structure, theme, props, text) {
  const l = element_exports.Location.create(structure);
  const { units, serialMapping } = structure;
  const { label_atom_id, label_alt_id } = StructureProperties.atom;
  const { cumulativeUnitElementCount } = serialMapping;
  const sizeTheme = theme.size;
  const count = structure.elementCount;
  const { elementScale } = props;
  const builder = TextBuilder.create(props, count, count / 2, text);
  for (let i = 0, il = units.length; i < il; ++i) {
    const unit = units[i];
    const c = unit.conformation;
    const { elements } = unit;
    l.unit = unit;
    const groupOffset = cumulativeUnitElementCount[i];
    const ignore = makeElementIgnoreTest(structure, unit, { ...props, traceOnly: false });
    for (let j = 0, _j = elements.length; j < _j; j++) {
      if (ignore && ignore(elements[j]))
        continue;
      l.element = elements[j];
      c.position(l.element, tmpVec);
      const atomId = label_atom_id(l);
      const altId = label_alt_id(l);
      const text2 = altId ? `${atomId}%${altId}` : atomId;
      builder.add(text2, tmpVec[0], tmpVec[1], tmpVec[2], sizeTheme.size(l), elementScale, groupOffset + j);
    }
  }
  return builder.getText();
}

export {
  fovAdjustedPosition,
  fovNormalizedCameraPosition,
  getFocusSnapshot,
  makeElementIgnoreTest,
  createElementSphereMesh,
  createElementSphereImpostor,
  eachElement,
  getElementLoci,
  createStructureElementSphereMesh,
  createStructureElementSphereImpostor,
  eachSerialElement,
  getSerialElementLoci,
  ElementIterator,
  LabelTextParams,
  LabelTextVisual
};
//# sourceMappingURL=chunk-BOTKILZC.js.map
