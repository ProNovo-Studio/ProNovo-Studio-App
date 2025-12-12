import {
  BaseGeometry,
  Binding,
  ButtonsType,
  CameraHelperAxis,
  ChainIdColorThemeProvider,
  Clip,
  ColorTheme,
  ColorThemeCategory,
  ComplexMeshParams,
  ComplexMeshVisual,
  ComplexRepresentation,
  CustomModelProperties,
  CustomStructureProperties,
  Cylinders,
  DataFormatProvider,
  DataLocation,
  DataLoci,
  DefaultCanvas3DParams,
  DefineSpec,
  DirectVolume,
  EmptyLoci,
  Geometry,
  Grid,
  Image,
  Lines,
  LinesBuilder,
  LocationIterator,
  Loci,
  MarkerAction,
  Material,
  Mesh,
  MeshBuilder,
  ModelFromTrajectory,
  ModifiersKeys,
  NullLocation,
  OperatorNameColorThemeProvider,
  PluginBehavior,
  PluginCommands,
  PluginStateObject,
  PluginStateSnapshotManager,
  PluginStateTransform,
  Points,
  PositionLocation,
  QuadSchema,
  QuadValues,
  Representation,
  RepresentationRegistry,
  RootStructureDefinition,
  ShaderCode,
  SizeTheme,
  Spheres,
  SpheresBuilder,
  StateAction,
  StateObject,
  StateObjectRef,
  StateSelection,
  StateTransforms,
  StateTree,
  StateTreeSpine,
  StructureRepresentationProvider,
  StructureRepresentationStateBuilder,
  StructureSelectionCategory,
  StructureSelectionQueries,
  StructureSelectionQuery,
  Subject,
  TextureMesh,
  TextureSpec,
  Theme,
  TrajectoryFromModelAndCoordinates,
  Transform,
  Transformer,
  UniformSpec,
  UnitsMeshParams,
  UnitsMeshVisual,
  UnitsRepresentation,
  Visual,
  VisualQualityOptions,
  VisualUpdateState,
  Volume,
  VolumeRepresentation3DHelpers,
  addCylinder,
  addDoubleCylinder,
  addFixedCountDashedCylinder,
  addSphere,
  altLoc,
  atomId,
  bondCount,
  bondLabel,
  bondToElementCount,
  compId,
  connectedTo,
  createColors,
  createComputeRenderItem,
  createComputeRenderable,
  createIdentityTransform,
  createMarkers,
  createRenderObject,
  createSegmentTexture2d,
  createSizes,
  createTextureImage,
  createVolumeCellLocationIterator,
  createVolumeTexture2d,
  createVolumeTexture3d,
  distinctUntilChanged,
  eachBondedAtom,
  eachIntraBondedAtom,
  eachVolumeLoci,
  filter,
  formalCharge,
  getNextMaterialId,
  getPalette,
  getPaletteParams,
  getQualityProps,
  getUnitKindsParam,
  getVolumeTexture2dLayout,
  guessCifVariant,
  isAcetamidine,
  isCameraAxesLoci,
  isCarboxylate,
  isEmptyLoci,
  isEveryLoci,
  isGuanidine,
  isHydrogen as isHydrogen2,
  isPhosphate,
  isSulfate,
  isSulfonicAcid,
  isWebGL2,
  is_iOS,
  lociLabel,
  map,
  packIntToRGBArray,
  quad_vert,
  sphereVertexCount,
  throttleTime,
  transformPositionArray,
  typeSymbol,
  unpackRGBToInt,
  volumeFromDensityServerData
} from "./chunk-CLY72GQO.js";
import {
  AminoAcidNames,
  Asset,
  BaseNames,
  Bond,
  BondType,
  Box3D,
  CIF,
  CentroidHelper,
  CustomPropSymbol,
  CustomPropertyDescriptor,
  CustomStructureProperty,
  DefaultQueryRuntimeTable,
  Elements,
  FormatPropertyProvider,
  GlobalModelTransformInfo,
  GridLookup3D,
  IndexPairBonds,
  IntAdjacencyGraph,
  InterUnitGraph,
  LinkedList,
  MmcifFormat,
  Model,
  MolScriptBuilder,
  MoleculeType,
  NucleicBackboneAtoms,
  ParamDefinition,
  PolymerNames,
  ProteinBackboneAtoms,
  QuerySymbolRuntime,
  SIFTSMapping,
  SecondaryStructureProvider,
  SetUtils,
  Sphere3D,
  StructConn,
  Structure,
  StructureLookup3DResultContext,
  StructureProperties,
  Task,
  Type,
  Unit,
  VdwRadius,
  arrayMax,
  arraySetAdd,
  arraySum,
  element_exports,
  fillSerial,
  getBoundary,
  getElementIdx,
  getElementMoleculeType,
  isDebugMode,
  isHalogen,
  isHydrogen,
  isMetal,
  isNucleic,
  isPolymer,
  isTimingMode,
  isTransitionMetal,
  unzip
} from "./chunk-HZ3UTCAK.js";
import {
  ChunkedArray,
  Color,
  ColorMap,
  ColorScale,
  EPSILON,
  IntMap,
  Interval,
  Mat4,
  ObjectKeys,
  OrderedSet,
  Quat,
  Segmentation,
  SortedArray,
  TableLegend,
  Tensor,
  ValueCell,
  Vec2,
  Vec3,
  assertUnreachable,
  clamp,
  defaults,
  degToRad,
  hash2,
  isPowerOfTwo,
  isPromiseLike,
  noop,
  normalize,
  objectForEach,
  shallowEqual
} from "./chunk-TA3F3DCY.js";
import {
  __export
} from "./chunk-WOOG5QLI.js";

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/animation/model.js
var PluginStateAnimation;
(function(PluginStateAnimation2) {
  function create(params) {
    return params;
  }
  PluginStateAnimation2.create = create;
  function getDuration(ctx, instance) {
    var _a, _b;
    if (instance.customDurationMs)
      return instance.customDurationMs;
    const d = (_b = (_a = instance.definition).getDuration) === null || _b === void 0 ? void 0 : _b.call(_a, instance.params, ctx);
    if ((d === null || d === void 0 ? void 0 : d.kind) === "fixed")
      return d.durationMs;
  }
  PluginStateAnimation2.getDuration = getDuration;
})(PluginStateAnimation || (PluginStateAnimation = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/animation/built-in/assembly-unwind.js
var AnimateAssemblyUnwind = PluginStateAnimation.create({
  name: "built-in.animate-assembly-unwind",
  display: { name: "Unwind Assembly" },
  isExportable: true,
  params: (plugin) => {
    const targets = [["all", "All"]];
    const structures = plugin.state.data.select(StateSelection.Generators.rootsOfType(PluginStateObject.Molecule.Structure));
    for (const s of structures) {
      targets.push([s.transform.ref, s.obj.data.models[0].label]);
    }
    return {
      durationInMs: ParamDefinition.Numeric(3e3, { min: 100, max: 1e4, step: 100 }),
      playOnce: ParamDefinition.Boolean(false),
      target: ParamDefinition.Select(targets[0][0], targets)
    };
  },
  canApply(plugin) {
    const state = plugin.state.data;
    const root = Transform.RootRef;
    const reprs = state.select(StateSelection.Generators.ofType(PluginStateObject.Molecule.Structure.Representation3D, root));
    return { canApply: reprs.length > 0 };
  },
  getDuration: (params) => {
    return {
      kind: "fixed",
      durationMs: params.durationInMs
    };
  },
  initialState: () => ({ t: 0 }),
  setup(params, _, plugin) {
    const state = plugin.state.data;
    const root = !params.target || params.target === "all" ? Transform.RootRef : params.target;
    const reprs = state.select(StateSelection.Generators.ofType(PluginStateObject.Molecule.Structure.Representation3D, root));
    const update = state.build();
    let changed = false;
    for (const r of reprs) {
      const unwinds = state.select(StateSelection.Generators.ofTransformer(StateTransforms.Representation.UnwindStructureAssemblyRepresentation3D, r.transform.ref));
      if (unwinds.length > 0)
        continue;
      changed = true;
      update.to(r).apply(StateTransforms.Representation.UnwindStructureAssemblyRepresentation3D, { t: 0 }, { tags: "animate-assembly-unwind" });
    }
    if (!changed)
      return;
    return update.commit({ doNotUpdateCurrent: true });
  },
  teardown(_, __, plugin) {
    const state = plugin.state.data;
    const reprs = state.select(StateSelection.Generators.ofType(PluginStateObject.Molecule.Structure.Representation3DState).withTag("animate-assembly-unwind"));
    if (reprs.length === 0)
      return;
    const update = state.build();
    for (const r of reprs)
      update.delete(r.transform.ref);
    return update.commit();
  },
  async apply(animState, t, ctx) {
    const state = ctx.plugin.state.data;
    const root = !ctx.params.target || ctx.params.target === "all" ? Transform.RootRef : ctx.params.target;
    const anims = state.select(StateSelection.Generators.ofTransformer(StateTransforms.Representation.UnwindStructureAssemblyRepresentation3D, root));
    if (anims.length === 0) {
      return { kind: "finished" };
    }
    const update = state.build();
    const d = (t.current - t.lastApplied) / ctx.params.durationInMs;
    let newTime = animState.t + d, finished = false;
    if (ctx.params.playOnce && newTime >= 1) {
      finished = true;
      newTime = 1;
    } else {
      newTime = newTime % 1;
    }
    for (const m of anims) {
      update.to(m).update({ t: newTime });
    }
    await PluginCommands.State.Update(ctx.plugin, { state, tree: update, options: { doNotLogTiming: true } });
    if (finished)
      return { kind: "finished" };
    return { kind: "next", state: { t: newTime } };
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/animation/built-in/camera-spin.js
var _dir = Vec3();
var _axis = Vec3();
var _rot = Quat();
var AnimateCameraSpin = PluginStateAnimation.create({
  name: "built-in.animate-camera-spin",
  display: { name: "Camera Spin", description: "Spin the 3D scene around the x-axis in view space" },
  isExportable: true,
  params: () => ({
    durationInMs: ParamDefinition.Numeric(4e3, { min: 100, max: 2e4, step: 100 }),
    speed: ParamDefinition.Numeric(1, { min: 1, max: 10, step: 1 }, { description: "How many times to spin in the specified duration." }),
    direction: ParamDefinition.Select("cw", [["cw", "Clockwise"], ["ccw", "Counter Clockwise"]], { cycle: true })
  }),
  initialState: (_, ctx) => {
    var _a;
    return { snapshot: (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.camera.getSnapshot() };
  },
  getDuration: (p) => ({ kind: "fixed", durationMs: p.durationInMs }),
  teardown: (_, state, ctx) => {
    var _a;
    (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.requestCameraReset({ snapshot: state.snapshot, durationMs: 0 });
  },
  async apply(animState, t, ctx) {
    var _a, _b;
    if (t.current === 0) {
      return { kind: "next", state: animState };
    }
    const snapshot = animState.snapshot;
    if (snapshot.radiusMax < 1e-4) {
      return { kind: "finished" };
    }
    const phase = t.animation ? ((_a = t.animation) === null || _a === void 0 ? void 0 : _a.currentFrame) / (t.animation.frameCount + 1) : clamp(t.current / ctx.params.durationInMs, 0, 1);
    const angle = 2 * Math.PI * phase * ctx.params.speed * (ctx.params.direction === "ccw" ? -1 : 1);
    Vec3.sub(_dir, snapshot.position, snapshot.target);
    Vec3.normalize(_axis, snapshot.up);
    Quat.setAxisAngle(_rot, _axis, angle);
    Vec3.transformQuat(_dir, _dir, _rot);
    const position = Vec3.add(Vec3(), snapshot.target, _dir);
    (_b = ctx.plugin.canvas3d) === null || _b === void 0 ? void 0 : _b.requestCameraReset({ snapshot: { ...snapshot, position }, durationMs: 0 });
    if (phase >= 0.99999) {
      return { kind: "finished" };
    }
    return { kind: "next", state: animState };
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/animation/built-in/model-index.js
var AnimateModelIndex = PluginStateAnimation.create({
  name: "built-in.animate-model-index",
  display: { name: "Animate Trajectory" },
  isExportable: true,
  params: () => ({
    mode: ParamDefinition.MappedStatic("loop", {
      palindrome: ParamDefinition.Group({}),
      loop: ParamDefinition.Group({ direction: ParamDefinition.Select("forward", [["forward", "Forward"], ["backward", "Backward"]]) }),
      once: ParamDefinition.Group({ direction: ParamDefinition.Select("forward", [["forward", "Forward"], ["backward", "Backward"]]) }, { isFlat: true })
    }, { options: [["palindrome", "Palindrome"], ["loop", "Loop"], ["once", "Once"]] }),
    duration: ParamDefinition.MappedStatic("fixed", {
      fixed: ParamDefinition.Group({
        durationInS: ParamDefinition.Numeric(5, { min: 1, max: 120, step: 0.1 }, { description: "Duration in seconds" })
      }, { isFlat: true }),
      computed: ParamDefinition.Group({
        targetFps: ParamDefinition.Numeric(30, { min: 5, max: 250, step: 1 }, { label: "Target FPS" })
      }, { isFlat: true }),
      sequential: ParamDefinition.Group({
        maxFps: ParamDefinition.Numeric(30, { min: 5, max: 60, step: 1 })
      }, { isFlat: true })
    })
  }),
  canApply(ctx) {
    const state = ctx.state.data;
    const models = state.select(StateSelection.Generators.ofTransformer(StateTransforms.Model.ModelFromTrajectory));
    for (const m of models) {
      const parent = StateSelection.findAncestorOfType(state.tree, state.cells, m.transform.ref, PluginStateObject.Molecule.Trajectory);
      if (parent && parent.obj && parent.obj.data.frameCount > 1)
        return { canApply: true };
    }
    return { canApply: false, reason: "No trajectory to animate" };
  },
  getDuration: (p, ctx) => {
    var _a;
    if (((_a = p.duration) === null || _a === void 0 ? void 0 : _a.name) === "fixed") {
      return { kind: "fixed", durationMs: p.duration.params.durationInS * 1e3 };
    } else if (p.duration.name === "computed") {
      const state = ctx.state.data;
      const models = state.select(StateSelection.Generators.ofTransformer(StateTransforms.Model.ModelFromTrajectory));
      let maxDuration = 0;
      for (const m of models) {
        const parent = StateSelection.findAncestorOfType(state.tree, state.cells, m.transform.ref, PluginStateObject.Molecule.Trajectory);
        if (!parent || !parent.obj)
          continue;
        const traj = parent.obj;
        maxDuration = Math.max(Math.ceil(1e3 * traj.data.frameCount / p.duration.params.targetFps), maxDuration);
      }
      return { kind: "fixed", durationMs: maxDuration };
    }
    return { kind: "unknown" };
  },
  initialState: () => ({}),
  async apply(animState, t, ctx) {
    if (ctx.params.duration.name === "sequential" && t.current > 0 && t.current - t.lastApplied < 1e3 / ctx.params.duration.params.maxFps) {
      return { kind: "skip" };
    }
    const state = ctx.plugin.state.data;
    const models = state.select(StateSelection.Generators.ofTransformer(StateTransforms.Model.ModelFromTrajectory));
    if (models.length === 0) {
      return { kind: "finished" };
    }
    const update = state.build();
    const params = ctx.params;
    const palindromeDirections = animState.palindromeDirections || {};
    let isEnd = false, allSingles = true;
    for (const m of models) {
      const parent = StateSelection.findAncestorOfType(state.tree, state.cells, m.transform.ref, PluginStateObject.Molecule.Trajectory);
      if (!parent || !parent.obj)
        continue;
      const traj = parent.obj;
      if (traj.data.frameCount <= 1)
        continue;
      update.to(m).update((old) => {
        const len = traj.data.frameCount;
        if (len !== 1) {
          allSingles = false;
        } else {
          return old;
        }
        if (params.duration.name === "sequential") {
          let dir = 1;
          if (params.mode.name === "once") {
            dir = params.mode.params.direction === "backward" ? -1 : 1;
            if (dir === -1 && old.modelIndex === 0 || dir === 1 && old.modelIndex === len - 1) {
              isEnd = true;
              return old;
            }
          } else if (params.mode.name === "palindrome") {
            if (old.modelIndex === 0)
              dir = 1;
            else if (old.modelIndex === len - 1)
              dir = -1;
            else
              dir = palindromeDirections[m.transform.ref] || 1;
          }
          palindromeDirections[m.transform.ref] = dir;
          let modelIndex = (old.modelIndex + dir) % len;
          if (modelIndex < 0)
            modelIndex += len;
          isEnd = isEnd || dir === -1 && modelIndex === 0 || dir === 1 && modelIndex === len - 1;
          return { modelIndex };
        } else {
          const durationInMs = params.duration.name === "fixed" ? params.duration.params.durationInS * 1e3 : Math.ceil(1e3 * traj.data.frameCount / params.duration.params.targetFps);
          if (params.mode.name === "once" && t.current >= durationInMs) {
            isEnd = true;
            return { modelIndex: traj.data.frameCount - 1 };
          }
          let phase = t.current % durationInMs / durationInMs;
          if (params.mode.name === "loop") {
            if (params.mode.params.direction === "backward") {
              phase = 1 - phase;
            }
          }
          if (params.mode.name === "palindrome") {
            phase = 2 * phase;
            if (phase > 1)
              phase = 2 - phase;
          }
          const modelIndex = Math.min(Math.floor(traj.data.frameCount * phase), traj.data.frameCount - 1);
          return { modelIndex };
        }
      });
    }
    if (!allSingles) {
      await PluginCommands.State.Update(ctx.plugin, { state, tree: update, options: { doNotLogTiming: true } });
    }
    if (allSingles || params.mode.name === "once" && isEnd)
      return { kind: "finished" };
    if (params.mode.name === "palindrome")
      return { kind: "next", state: { palindromeDirections } };
    return { kind: "next", state: {} };
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/animation/built-in/state-snapshots.js
async function setPartialSnapshot(plugin, entry, first = false) {
  var _a, _b, _c, _d, _e, _f;
  if (entry.snapshot.data) {
    await plugin.runTask(plugin.state.data.setSnapshot(entry.snapshot.data));
    (_a = plugin.canvas3d) === null || _a === void 0 ? void 0 : _a.setProps({
      trackball: (_c = (_b = entry.snapshot.canvas3d) === null || _b === void 0 ? void 0 : _b.props) === null || _c === void 0 ? void 0 : _c.trackball
    });
  }
  if ((_d = entry.snapshot.camera) === null || _d === void 0 ? void 0 : _d.current) {
    (_e = plugin.canvas3d) === null || _e === void 0 ? void 0 : _e.requestCameraReset({
      snapshot: entry.snapshot.camera.current,
      durationMs: first || entry.snapshot.camera.transitionStyle === "instant" ? 0 : entry.snapshot.camera.transitionDurationInMs
    });
  } else if ((_f = entry.snapshot.camera) === null || _f === void 0 ? void 0 : _f.focus) {
    plugin.managers.camera.focusObject({
      ...entry.snapshot.camera.focus,
      durationMs: first || entry.snapshot.camera.transitionStyle === "instant" ? 0 : entry.snapshot.camera.transitionDurationInMs
    });
  }
}
var AnimateStateSnapshots = PluginStateAnimation.create({
  name: "built-in.animate-state-snapshots",
  display: { name: "State Snapshots" },
  isExportable: true,
  params: () => ({}),
  canApply(plugin) {
    const entries = plugin.managers.snapshot.state.entries;
    if (entries.size < 2) {
      return { canApply: false, reason: "At least 2 states required." };
    }
    if (entries.some((e) => !!(e === null || e === void 0 ? void 0 : e.snapshot.startAnimation))) {
      return { canApply: false, reason: "Nested animations not supported." };
    }
    return { canApply: plugin.managers.snapshot.state.entries.size > 1 };
  },
  setup(_, __, plugin) {
    const pivot = plugin.managers.snapshot.state.entries.get(0);
    setPartialSnapshot(plugin, pivot, true);
  },
  getDuration: (_, plugin) => {
    return {
      kind: "fixed",
      durationMs: plugin.managers.snapshot.state.entries.toArray().reduce((a, b) => {
        var _a;
        return a + ((_a = b.snapshot.durationInMs) !== null && _a !== void 0 ? _a : 0);
      }, 0)
    };
  },
  initialState: (_, plugin) => {
    const snapshots = plugin.managers.snapshot.state.entries.toArray();
    return {
      totalDuration: snapshots.reduce((a, b) => {
        var _a;
        return a + ((_a = b.snapshot.durationInMs) !== null && _a !== void 0 ? _a : 0);
      }, 0),
      snapshots,
      currentIndex: 0
    };
  },
  async apply(animState, t, ctx) {
    var _a;
    if (t.current >= animState.totalDuration) {
      return { kind: "finished" };
    }
    let ctime = 0, i = 0;
    for (const s of animState.snapshots) {
      ctime += (_a = s.snapshot.durationInMs) !== null && _a !== void 0 ? _a : 0;
      if (t.current < ctime) {
        break;
      }
      i++;
    }
    if (i >= animState.snapshots.length)
      return { kind: "finished" };
    if (i === animState.currentIndex) {
      return { kind: "skip" };
    }
    await setPartialSnapshot(ctx.plugin, animState.snapshots[i]);
    return { kind: "next", state: { ...animState, currentIndex: i } };
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/static/state.js
var state_exports = {};
__export(state_exports, {
  ApplyAction: () => ApplyAction,
  ClearHighlights: () => ClearHighlights,
  Highlight: () => Highlight,
  RemoveObject: () => RemoveObject,
  SetCurrentObject: () => SetCurrentObject,
  Snapshots: () => Snapshots,
  SyncBehaviors: () => SyncBehaviors,
  ToggleExpanded: () => ToggleExpanded,
  ToggleVisibility: () => ToggleVisibility,
  Update: () => Update,
  registerDefault: () => registerDefault,
  setSubtreeVisibility: () => setSubtreeVisibility
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/date.js
function getFormattedTime() {
  const today = /* @__PURE__ */ new Date();
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  const h = today.getHours();
  const mi = today.getMinutes();
  const s = today.getSeconds();
  return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/download.js
function openUrl(url) {
  const opened = window.open(url, "_blank");
  if (!opened) {
    window.location.href = url;
  }
}
function click(node) {
  try {
    node.dispatchEvent(new MouseEvent("click"));
  } catch (e) {
    const evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
    node.dispatchEvent(evt);
  }
}
function download(data, downloadName = "download") {
  if (!data)
    return;
  if ("download" in HTMLAnchorElement.prototype) {
    const a = document.createElement("a");
    a.download = downloadName;
    a.rel = "noopener";
    if (typeof data === "string") {
      a.href = data;
      click(a);
    } else {
      a.href = URL.createObjectURL(data);
      setTimeout(() => URL.revokeObjectURL(a.href), 4e4);
      setTimeout(() => click(a));
    }
  } else if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(data, downloadName);
  } else {
    const ua = window.navigator.userAgent;
    const isSafari = /Safari/i.test(ua);
    const isChromeIos = /CriOS\/[\d]+/.test(ua);
    const open = (str) => {
      openUrl(isChromeIos ? str : str.replace(/^data:[^;]*;/, "data:attachment/file;"));
    };
    if ((isSafari || isChromeIos) && FileReader) {
      if (data instanceof Blob) {
        const reader = new FileReader();
        reader.onloadend = () => open(reader.result);
        reader.readAsDataURL(data);
      } else {
        open(data);
      }
    } else {
      const url = URL.createObjectURL(typeof data === "string" ? new Blob([data]) : data);
      location.href = url;
      setTimeout(() => URL.revokeObjectURL(url), 4e4);
    }
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/url.js
function urlCombine(base, query) {
  return `${base}${base[base.length - 1] === "/" || query[0] === "/" ? "" : "/"}${query}`;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/features.js
var PluginFeatureDetection = {
  get defaultTransparency() {
    return is_iOS() ? "blended" : "wboit";
  },
  get preferWebGl1() {
    if (typeof navigator === "undefined" || typeof window === "undefined")
      return false;
    const unpportedSafariVersions = [
      "Version/15.1 Safari",
      "Version/15.2 Safari",
      "Version/15.3 Safari"
    ];
    if (unpportedSafariVersions.some((v) => navigator.userAgent.indexOf(v) > 0)) {
      return true;
    }
    return is_iOS();
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/config.js
var PluginConfigItem = class {
  toString() {
    return this.key;
  }
  valueOf() {
    return this.key;
  }
  constructor(key, defaultValue) {
    this.key = key;
    this.defaultValue = defaultValue;
  }
};
function item(key, defaultValue) {
  return new PluginConfigItem(key, defaultValue);
}
var PluginConfig = {
  item,
  General: {
    IsBusyTimeoutMs: item("plugin-config.is-busy-timeout", 750),
    DisableAntialiasing: item("plugin-config.disable-antialiasing", false),
    DisablePreserveDrawingBuffer: item("plugin-config.disable-preserve-drawing-buffer", false),
    PixelScale: item("plugin-config.pixel-scale", 1),
    PickScale: item("plugin-config.pick-scale", 0.25),
    Transparency: item("plugin-config.transparency", PluginFeatureDetection.defaultTransparency),
    // as of Oct 1 2021, WebGL 2 doesn't work on iOS 15.
    // TODO: check back in a few weeks to see if it was fixed
    PreferWebGl1: item("plugin-config.prefer-webgl1", PluginFeatureDetection.preferWebGl1),
    AllowMajorPerformanceCaveat: item("plugin-config.allow-major-performance-caveat", false),
    PowerPreference: item("plugin-config.power-preference", "high-performance"),
    ResolutionMode: item("plugin-config.resolution-mode", "auto")
  },
  State: {
    DefaultServer: item("plugin-state.server", "https://webchem.ncbr.muni.cz/molstar-state"),
    CurrentServer: item("plugin-state.server", "https://webchem.ncbr.muni.cz/molstar-state"),
    HistoryCapacity: item("history-capacity.server", 5)
  },
  VolumeStreaming: {
    Enabled: item("volume-streaming.enabled", true),
    DefaultServer: item("volume-streaming.server", "https://ds.litemol.org"),
    CanStream: item("volume-streaming.can-stream", (s, plugin) => {
      return s.models.length === 1 && Model.probablyHasDensityMap(s.models[0]);
    }),
    EmdbHeaderServer: item("volume-streaming.emdb-header-server", "https://files.wwpdb.org/pub/emdb/structures")
  },
  Viewport: {
    ShowExpand: item("viewer.show-expand-button", true),
    ShowControls: item("viewer.show-controls-button", true),
    ShowSettings: item("viewer.show-settings-button", true),
    ShowSelectionMode: item("viewer.show-selection-model-button", true),
    ShowAnimation: item("viewer.show-animation-button", true),
    ShowTrajectoryControls: item("viewer.show-trajectory-controls", true),
    ShowScreenshotControls: item("viewer.show-screenshot-controls", true)
  },
  Download: {
    DefaultPdbProvider: item("download.default-pdb-provider", "pdbe"),
    DefaultEmdbProvider: item("download.default-emdb-provider", "pdbe")
  },
  Structure: {
    SizeThresholds: item("structure.size-thresholds", Structure.DefaultSizeThresholds),
    DefaultRepresentationPreset: item("structure.default-representation-preset", "auto"),
    DefaultRepresentationPresetParams: item("structure.default-representation-preset-params", {}),
    SaccharideCompIdMapType: item("structure.saccharide-comp-id-map-type", "default")
  },
  Background: {
    Styles: item("background.styles", [])
  }
};
var PluginConfigManager = class {
  get(key) {
    if (!this._config.has(key))
      return key.defaultValue;
    return this._config.get(key);
  }
  set(key, value) {
    this._config.set(key, value);
  }
  delete(key) {
    this._config.delete(key);
  }
  constructor(initial) {
    this._config = /* @__PURE__ */ new Map();
    if (!initial)
      return;
    initial.forEach(([k, v]) => this._config.set(k, v));
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/static/state.js
function registerDefault(ctx) {
  SyncBehaviors(ctx);
  SetCurrentObject(ctx);
  Update(ctx);
  ApplyAction(ctx);
  RemoveObject(ctx);
  ToggleExpanded(ctx);
  ToggleVisibility(ctx);
  Highlight(ctx);
  ClearHighlights(ctx);
  Snapshots(ctx);
}
function SyncBehaviors(ctx) {
  ctx.state.events.object.created.subscribe((o) => {
    if (!PluginStateObject.isBehavior(o.obj))
      return;
    o.obj.data.register(o.ref);
  });
  ctx.state.events.object.removed.subscribe((o) => {
    var _a, _b, _c, _d;
    if (!PluginStateObject.isBehavior(o.obj))
      return;
    (_b = (_a = o.obj.data).unregister) === null || _b === void 0 ? void 0 : _b.call(_a);
    (_d = (_c = o.obj.data).dispose) === null || _d === void 0 ? void 0 : _d.call(_c);
  });
  ctx.state.events.object.updated.subscribe((o) => {
    var _a, _b, _c, _d;
    if (o.action === "recreate") {
      if (o.oldObj && PluginStateObject.isBehavior(o.oldObj)) {
        (_b = (_a = o.oldObj.data).unregister) === null || _b === void 0 ? void 0 : _b.call(_a);
        (_d = (_c = o.oldObj.data).dispose) === null || _d === void 0 ? void 0 : _d.call(_c);
      }
      if (o.obj && PluginStateObject.isBehavior(o.obj))
        o.obj.data.register(o.ref);
    }
  });
}
function SetCurrentObject(ctx) {
  PluginCommands.State.SetCurrentObject.subscribe(ctx, ({ state, ref }) => state.setCurrent(ref));
}
function Update(ctx) {
  PluginCommands.State.Update.subscribe(ctx, ({ state, tree, options }) => ctx.runTask(state.updateTree(tree, options)));
}
function ApplyAction(ctx) {
  PluginCommands.State.ApplyAction.subscribe(ctx, ({ state, action, ref }) => ctx.runTask(state.applyAction(action.action, action.params, ref)));
}
function RemoveObject(ctx) {
  function remove(state, ref) {
    const tree = state.build().delete(ref);
    return ctx.runTask(state.updateTree(tree));
  }
  PluginCommands.State.RemoveObject.subscribe(ctx, ({ state, ref, removeParentGhosts }) => {
    if (removeParentGhosts) {
      const tree = state.tree;
      let curr = tree.transforms.get(ref);
      if (curr.parent === ref)
        return remove(state, ref);
      while (true) {
        const children = tree.children.get(curr.parent);
        if (curr.parent === curr.ref || children.size > 1)
          return remove(state, curr.ref);
        const parent = tree.transforms.get(curr.parent);
        if (!parent.state.isGhost)
          return remove(state, curr.ref);
        curr = parent;
      }
    } else {
      return remove(state, ref);
    }
  });
}
function ToggleExpanded(ctx) {
  PluginCommands.State.ToggleExpanded.subscribe(ctx, ({ state, ref }) => state.updateCellState(ref, ({ isCollapsed }) => ({ isCollapsed: !isCollapsed })));
}
function ToggleVisibility(ctx) {
  PluginCommands.State.ToggleVisibility.subscribe(ctx, ({ state, ref }) => setSubtreeVisibility(state, ref, !state.cells.get(ref).state.isHidden));
}
function setSubtreeVisibility(state, root, value) {
  StateTree.doPreOrder(state.tree, state.transforms.get(root), { state, value }, setVisibilityVisitor);
}
function setVisibilityVisitor(t, tree, ctx) {
  ctx.state.updateCellState(t.ref, { isHidden: ctx.value });
}
function Highlight(ctx) {
  PluginCommands.Interactivity.Object.Highlight.subscribe(ctx, ({ state, ref }) => {
    if (!ctx.canvas3d || ctx.isBusy)
      return;
    ctx.managers.interactivity.lociHighlights.clearHighlights();
    const refs = typeof ref === "string" ? [ref] : ref;
    for (const r of refs) {
      const cell = state.cells.get(r);
      if (!cell)
        continue;
      if (PluginStateObject.Molecule.Structure.is(cell.obj)) {
        ctx.managers.interactivity.lociHighlights.highlight({ loci: Structure.Loci(cell.obj.data) }, false);
      } else if (cell && PluginStateObject.isRepresentation3D(cell.obj)) {
        const { repr } = cell.obj.data;
        for (const loci of repr.getAllLoci()) {
          ctx.managers.interactivity.lociHighlights.highlight({ loci, repr }, false);
        }
      } else if (PluginStateObject.Molecule.Structure.Selections.is(cell.obj)) {
        for (const entry of cell.obj.data) {
          ctx.managers.interactivity.lociHighlights.highlight({ loci: entry.loci }, false);
        }
      }
    }
  });
}
function ClearHighlights(ctx) {
  PluginCommands.Interactivity.ClearHighlights.subscribe(ctx, () => {
    ctx.managers.interactivity.lociHighlights.clearHighlights();
  });
}
function Snapshots(ctx) {
  ctx.config.set(PluginConfig.State.CurrentServer, ctx.config.get(PluginConfig.State.DefaultServer));
  PluginCommands.State.Snapshots.Clear.subscribe(ctx, () => {
    ctx.managers.snapshot.clear();
  });
  PluginCommands.State.Snapshots.Remove.subscribe(ctx, ({ id }) => {
    ctx.managers.snapshot.remove(id);
  });
  PluginCommands.State.Snapshots.Add.subscribe(ctx, async ({ key, name, description, descriptionFormat, params }) => {
    var _a;
    const snapshot = ctx.state.getSnapshot(params);
    const image = ((_a = params === null || params === void 0 ? void 0 : params.image) !== null && _a !== void 0 ? _a : ctx.state.snapshotParams.value.image) ? await PluginStateSnapshotManager.getCanvasImageAsset(ctx, `${snapshot.id}-image.png`) : void 0;
    const entry = PluginStateSnapshotManager.Entry(snapshot, { key, name, description, descriptionFormat, image });
    ctx.managers.snapshot.add(entry);
  });
  PluginCommands.State.Snapshots.Replace.subscribe(ctx, async ({ id, params }) => {
    var _a;
    const snapshot = ctx.state.getSnapshot(params);
    const image = ((_a = params === null || params === void 0 ? void 0 : params.image) !== null && _a !== void 0 ? _a : ctx.state.snapshotParams.value.image) ? await PluginStateSnapshotManager.getCanvasImageAsset(ctx, `${snapshot.id}-image.png`) : void 0;
    ctx.managers.snapshot.replace(id, ctx.state.getSnapshot(params), { image });
  });
  PluginCommands.State.Snapshots.Move.subscribe(ctx, ({ id, dir }) => {
    ctx.managers.snapshot.move(id, dir);
  });
  PluginCommands.State.Snapshots.Apply.subscribe(ctx, ({ id }) => {
    const snapshot = ctx.managers.snapshot.setCurrent(id);
    if (!snapshot)
      return;
    return ctx.state.setSnapshot(snapshot);
  });
  PluginCommands.State.Snapshots.Upload.subscribe(ctx, async ({ name, description, playOnLoad, serverUrl, params }) => {
    return fetch(urlCombine(serverUrl, `set?name=${encodeURIComponent(name || "")}&description=${encodeURIComponent(description || "")}`), {
      method: "POST",
      mode: "cors",
      referrer: "no-referrer",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(await ctx.managers.snapshot.getStateSnapshot({ name, description, playOnLoad }))
    });
  });
  PluginCommands.State.Snapshots.Fetch.subscribe(ctx, async ({ url }) => {
    const json = await ctx.runTask(ctx.fetch({ url, type: "json" }));
    await ctx.managers.snapshot.setStateSnapshot(json.data);
  });
  PluginCommands.State.Snapshots.DownloadToFile.subscribe(ctx, async ({ name, type, params }) => {
    const filename = `mol-star_state_${name || getFormattedTime()}.${type === "json" ? "molj" : "molx"}`;
    const data = await ctx.managers.snapshot.serialize({ type, params });
    download(data, `${filename}`);
  });
  PluginCommands.State.Snapshots.OpenFile.subscribe(ctx, ({ file }) => {
    return ctx.managers.snapshot.open(file);
  });
  PluginCommands.State.Snapshots.OpenUrl.subscribe(ctx, async ({ url, type }) => {
    const data = await ctx.runTask(ctx.fetch({ url, type: "binary" }));
    return ctx.managers.snapshot.open(new File([data], `state.${type}`));
  });
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/static/representation.js
var representation_exports = {};
__export(representation_exports, {
  SyncRepresentationToCanvas: () => SyncRepresentationToCanvas,
  SyncStructureRepresentation3DState: () => SyncStructureRepresentation3DState,
  UpdateRepresentationVisibility: () => UpdateRepresentationVisibility,
  registerDefault: () => registerDefault2
});
function registerDefault2(ctx) {
  SyncRepresentationToCanvas(ctx);
  SyncStructureRepresentation3DState(ctx);
  UpdateRepresentationVisibility(ctx);
}
function SyncRepresentationToCanvas(ctx) {
  const events = ctx.state.data.events;
  events.object.created.subscribe((e) => {
    var _a;
    if (!PluginStateObject.isRepresentation3D(e.obj))
      return;
    updateVisibility(e.state.cells.get(e.ref), e.obj.data.repr);
    e.obj.data.repr.setState({ syncManually: true });
    (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.add(e.obj.data.repr);
  });
  events.object.updated.subscribe((e) => {
    var _a, _b;
    if (e.oldObj && PluginStateObject.isRepresentation3D(e.oldObj)) {
      (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.remove(e.oldObj.data.repr);
      e.oldObj.data.repr.destroy();
    }
    if (!PluginStateObject.isRepresentation3D(e.obj)) {
      return;
    }
    updateVisibility(e.state.cells.get(e.ref), e.obj.data.repr);
    if (e.action === "recreate") {
      e.obj.data.repr.setState({ syncManually: true });
    }
    (_b = ctx.canvas3d) === null || _b === void 0 ? void 0 : _b.add(e.obj.data.repr);
  });
  events.object.removed.subscribe((e) => {
    var _a;
    if (!PluginStateObject.isRepresentation3D(e.obj))
      return;
    (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.remove(e.obj.data.repr);
    e.obj.data.repr.destroy();
  });
}
function SyncStructureRepresentation3DState(ctx) {
  const events = ctx.state.data.events;
  events.object.created.subscribe((e) => {
    var _a;
    if (!PluginStateObject.Molecule.Structure.Representation3DState.is(e.obj))
      return;
    const data = e.obj.data;
    data.repr.setState(data.state);
    (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.update(data.repr);
  });
  events.object.updated.subscribe((e) => {
    var _a;
    if (!PluginStateObject.Molecule.Structure.Representation3DState.is(e.obj))
      return;
    const data = e.obj.data;
    data.repr.setState(data.state);
    (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.update(data.repr);
  });
  events.object.removed.subscribe((e) => {
    var _a;
    if (!PluginStateObject.Molecule.Structure.Representation3DState.is(e.obj))
      return;
    const data = e.obj.data;
    data.repr.setState(data.initialState);
    (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.update(data.repr);
  });
}
function UpdateRepresentationVisibility(ctx) {
  ctx.state.data.events.cell.stateUpdated.subscribe((e) => {
    var _a;
    const cell = e.state.cells.get(e.ref);
    if (!PluginStateObject.isRepresentation3D(cell.obj))
      return;
    if (updateVisibility(cell, cell.obj.data.repr)) {
      (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.syncVisibility();
    }
  });
}
function updateVisibility(cell, r) {
  if (r.state.visible === !!cell.state.isHidden) {
    r.setState({ visible: !cell.state.isHidden });
    return true;
  } else {
    return false;
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/static/camera.js
var camera_exports = {};
__export(camera_exports, {
  Focus: () => Focus,
  FocusObject: () => FocusObject,
  OrientAxes: () => OrientAxes,
  Reset: () => Reset,
  ResetAxes: () => ResetAxes,
  SetSnapshot: () => SetSnapshot,
  registerDefault: () => registerDefault3
});
function registerDefault3(ctx) {
  Reset(ctx);
  Focus(ctx);
  FocusObject(ctx);
  SetSnapshot(ctx);
  OrientAxes(ctx);
  ResetAxes(ctx);
}
function Reset(ctx) {
  PluginCommands.Camera.Reset.subscribe(ctx, (options) => {
    ctx.managers.camera.reset(options === null || options === void 0 ? void 0 : options.snapshot, options === null || options === void 0 ? void 0 : options.durationMs);
  });
}
function SetSnapshot(ctx) {
  PluginCommands.Camera.SetSnapshot.subscribe(ctx, ({ snapshot, durationMs }) => {
    ctx.managers.camera.setSnapshot(snapshot, durationMs);
  });
}
function Focus(ctx) {
  PluginCommands.Camera.Focus.subscribe(ctx, ({ center, radius, durationMs }) => {
    ctx.managers.camera.focusSphere({ center, radius }, { durationMs });
    ctx.events.canvas3d.settingsUpdated.next(void 0);
  });
}
function FocusObject(ctx) {
  PluginCommands.Camera.FocusObject.subscribe(ctx, async (options) => {
    ctx.managers.camera.focusObject(options);
  });
}
function OrientAxes(ctx) {
  PluginCommands.Camera.OrientAxes.subscribe(ctx, ({ structures, durationMs }) => {
    ctx.managers.camera.orientAxes(structures, durationMs);
  });
}
function ResetAxes(ctx) {
  PluginCommands.Camera.ResetAxes.subscribe(ctx, ({ durationMs }) => {
    ctx.managers.camera.resetAxes(durationMs);
  });
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/static/misc.js
var misc_exports = {};
__export(misc_exports, {
  Canvas3DSetSettings: () => Canvas3DSetSettings,
  registerDefault: () => registerDefault4
});
function registerDefault4(ctx) {
  Canvas3DSetSettings(ctx);
}
function Canvas3DSetSettings(ctx) {
  PluginCommands.Canvas3D.ResetSettings.subscribe(ctx, () => {
    var _a;
    (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.setProps(DefaultCanvas3DParams);
    ctx.events.canvas3d.settingsUpdated.next(void 0);
  });
  PluginCommands.Canvas3D.SetSettings.subscribe(ctx, (e) => {
    var _a;
    if (!ctx.canvas3d)
      return;
    (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.setProps(e.settings);
    ctx.events.canvas3d.settingsUpdated.next(void 0);
  });
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/representation.js
var representation_exports2 = {};
__export(representation_exports2, {
  DefaultFocusLociBindings: () => DefaultFocusLociBindings,
  DefaultLociLabelProvider: () => DefaultLociLabelProvider,
  DefaultSelectLociBindings: () => DefaultSelectLociBindings,
  FocusLoci: () => FocusLoci,
  HighlightLoci: () => HighlightLoci,
  SelectLoci: () => SelectLoci
});
var B = ButtonsType;
var M = ModifiersKeys;
var Trigger = Binding.Trigger;
var DefaultHighlightLociBindings = {
  hoverHighlightOnly: Binding([Trigger(B.Flag.None)], "Highlight", "Hover element using ${triggers}"),
  hoverHighlightOnlyExtend: Binding([Trigger(B.Flag.None, M.create({ shift: true }))], "Extend highlight", "From selected to hovered element along polymer using ${triggers}")
};
var HighlightLociParams = {
  bindings: ParamDefinition.Value(DefaultHighlightLociBindings, { isHidden: true }),
  ignore: ParamDefinition.Value([], { isHidden: true }),
  preferAtoms: ParamDefinition.Boolean(false, { description: "Always prefer atoms over bonds" }),
  mark: ParamDefinition.Boolean(true)
};
var HighlightLoci = PluginBehavior.create({
  name: "representation-highlight-loci",
  category: "interaction",
  ctor: class extends PluginBehavior.Handler {
    constructor() {
      super(...arguments);
      this.lociMarkProvider = (interactionLoci, action) => {
        if (!this.ctx.canvas3d || !this.params.mark)
          return;
        this.ctx.canvas3d.mark(interactionLoci, action);
      };
    }
    getLoci(loci) {
      return this.params.preferAtoms && Bond.isLoci(loci) && loci.bonds.length === 2 ? Bond.toFirstStructureElementLoci(loci) : loci;
    }
    register() {
      this.subscribeObservable(this.ctx.behaviors.interaction.hover, ({ current, buttons, modifiers }) => {
        if (!this.ctx.canvas3d || this.ctx.isBusy)
          return;
        const loci = this.getLoci(current.loci);
        if (this.params.ignore.includes(loci.kind)) {
          this.ctx.managers.interactivity.lociHighlights.highlightOnly({ repr: current.repr, loci: EmptyLoci });
          return;
        }
        let matched = false;
        if (Binding.match(this.params.bindings.hoverHighlightOnly, buttons, modifiers)) {
          this.ctx.managers.interactivity.lociHighlights.highlightOnly({ loci });
          matched = true;
        }
        if (Binding.match(this.params.bindings.hoverHighlightOnlyExtend, buttons, modifiers)) {
          this.ctx.managers.interactivity.lociHighlights.highlightOnlyExtend({ loci });
          matched = true;
        }
        if (!matched) {
          this.ctx.managers.interactivity.lociHighlights.highlightOnly({ repr: current.repr, loci: EmptyLoci });
        }
      });
      this.ctx.managers.interactivity.lociHighlights.addProvider(this.lociMarkProvider);
    }
    unregister() {
      this.ctx.managers.interactivity.lociHighlights.removeProvider(this.lociMarkProvider);
    }
  },
  params: () => HighlightLociParams,
  display: { name: "Highlight Loci on Canvas" }
});
var DefaultSelectLociBindings = {
  clickSelect: Binding.Empty,
  clickSelectOnly: Binding.Empty,
  clickToggle: Binding([Trigger(B.Flag.Primary, M.create())], "Toggle selection", "Click on element using ${triggers}"),
  clickToggleExtend: Binding([Trigger(B.Flag.Primary, M.create({ shift: true }))], "Toggle extended selection", "Click on element using ${triggers} to extend selection along polymer"),
  clickDeselect: Binding.Empty,
  clickDeselectAllOnEmpty: Binding([Trigger(B.Flag.Primary, M.create())], "Deselect all", "Click on nothing using ${triggers}")
};
var SelectLociParams = {
  bindings: ParamDefinition.Value(DefaultSelectLociBindings, { isHidden: true }),
  ignore: ParamDefinition.Value([], { isHidden: true }),
  preferAtoms: ParamDefinition.Boolean(false, { description: "Always prefer atoms over bonds" }),
  mark: ParamDefinition.Boolean(true)
};
var SelectLoci = PluginBehavior.create({
  name: "representation-select-loci",
  category: "interaction",
  ctor: class extends PluginBehavior.Handler {
    getLoci(loci) {
      return this.params.preferAtoms && Bond.isLoci(loci) && loci.bonds.length === 2 ? Bond.toFirstStructureElementLoci(loci) : loci;
    }
    applySelectMark(ref, clear) {
      const cell = this.ctx.state.data.cells.get(ref);
      if (cell && PluginStateObject.isRepresentation3D(cell.obj)) {
        this.spine.current = cell;
        const so = this.spine.getRootOfType(PluginStateObject.Molecule.Structure);
        if (so) {
          if (clear) {
            this.lociMarkProvider({ loci: Structure.Loci(so.data) }, MarkerAction.Deselect);
          }
          const loci = this.ctx.managers.structure.selection.getLoci(so.data);
          this.lociMarkProvider({ loci }, MarkerAction.Select);
        }
      }
    }
    register() {
      const lociIsEmpty = (loci) => Loci.isEmpty(loci);
      const lociIsNotEmpty = (loci) => !Loci.isEmpty(loci);
      const actions = [
        ["clickSelect", (current) => this.ctx.managers.interactivity.lociSelects.select(current), lociIsNotEmpty],
        ["clickToggle", (current) => this.ctx.managers.interactivity.lociSelects.toggle(current), lociIsNotEmpty],
        ["clickToggleExtend", (current) => this.ctx.managers.interactivity.lociSelects.toggleExtend(current), lociIsNotEmpty],
        ["clickSelectOnly", (current) => this.ctx.managers.interactivity.lociSelects.selectOnly(current), lociIsNotEmpty],
        ["clickDeselect", (current) => this.ctx.managers.interactivity.lociSelects.deselect(current), lociIsNotEmpty],
        ["clickDeselectAllOnEmpty", () => this.ctx.managers.interactivity.lociSelects.deselectAll(), lociIsEmpty]
      ];
      actions.sort((a, b) => {
        const x = this.params.bindings[a[0]], y = this.params.bindings[b[0]];
        const k = x.triggers.length === 0 ? 0 : arrayMax(x.triggers.map((t) => M.size(t.modifiers)));
        const l = y.triggers.length === 0 ? 0 : arrayMax(y.triggers.map((t) => M.size(t.modifiers)));
        return l - k;
      });
      this.subscribeObservable(this.ctx.behaviors.interaction.click, ({ current, button, modifiers }) => {
        if (!this.ctx.canvas3d || this.ctx.isBusy || !this.ctx.selectionMode)
          return;
        const loci = this.getLoci(current.loci);
        if (this.params.ignore.includes(loci.kind))
          return;
        for (const [binding, action, condition] of actions) {
          if (Binding.match(this.params.bindings[binding], button, modifiers) && (!condition || condition(loci))) {
            action({ repr: current.repr, loci });
            break;
          }
        }
      });
      this.ctx.managers.interactivity.lociSelects.addProvider(this.lociMarkProvider);
      this.subscribeObservable(this.ctx.state.events.object.created, ({ ref }) => this.applySelectMark(ref));
      this.subscribeObservable(this.ctx.state.events.object.updated, ({ ref, obj, oldObj, oldData, action }) => {
        const cell = this.ctx.state.data.cells.get(ref);
        if (cell && PluginStateObject.Molecule.Structure.is(cell.obj)) {
          const structure = obj.data;
          const oldStructure = action === "recreate" ? oldObj === null || oldObj === void 0 ? void 0 : oldObj.data : action === "in-place" ? oldData : void 0;
          if (oldStructure && Structure.areEquivalent(structure, oldStructure) && Structure.areHierarchiesEqual(structure, oldStructure))
            return;
          const reprs = this.ctx.state.data.select(StateSelection.children(ref).ofType(PluginStateObject.Molecule.Structure.Representation3D));
          for (const repr of reprs)
            this.applySelectMark(repr.transform.ref, true);
        }
      });
    }
    unregister() {
      this.ctx.managers.interactivity.lociSelects.removeProvider(this.lociMarkProvider);
    }
    constructor(ctx, params) {
      super(ctx, params);
      this.lociMarkProvider = (reprLoci, action) => {
        if (!this.ctx.canvas3d || !this.params.mark)
          return;
        this.ctx.canvas3d.mark({ loci: reprLoci.loci }, action);
      };
      this.spine = new StateTreeSpine.Impl(ctx.state.data.cells);
    }
  },
  params: () => SelectLociParams,
  display: { name: "Select Loci on Canvas" }
});
var DefaultLociLabelProvider = PluginBehavior.create({
  name: "default-loci-label-provider",
  category: "interaction",
  ctor: class {
    register() {
      this.ctx.managers.lociLabels.addProvider(this.f);
    }
    unregister() {
      this.ctx.managers.lociLabels.removeProvider(this.f);
    }
    constructor(ctx) {
      this.ctx = ctx;
      this.f = {
        label: (loci) => {
          const label = [];
          if (element_exports.Loci.is(loci)) {
            const entityNames = /* @__PURE__ */ new Set();
            for (const { unit: u } of loci.elements) {
              const l = element_exports.Location.create(loci.structure, u, u.elements[0]);
              const name = StructureProperties.entity.pdbx_description(l).join(", ");
              entityNames.add(name);
            }
            if (entityNames.size === 1)
              entityNames.forEach((name) => label.push(name));
          }
          label.push(lociLabel(loci));
          return label.filter((l) => !!l).join("</br>");
        },
        group: (label) => label.toString().replace(/Model [0-9]+/g, "Models"),
        priority: 100
      };
    }
  },
  display: { name: "Provide Default Loci Label" }
});
var DefaultFocusLociBindings = {
  clickFocus: Binding([
    Trigger(B.Flag.Primary, M.create())
  ], "Representation Focus", "Click element using ${triggers}"),
  clickFocusAdd: Binding([
    Trigger(B.Flag.Primary, M.create({ control: true })),
    Trigger(B.Flag.Primary, M.create({ meta: true }))
  ], "Representation Focus Add", "Click element using ${triggers}"),
  clickFocusExtend: Binding([
    Trigger(B.Flag.Primary, M.create({ shift: true }))
  ], "Representation Focus Extend", "Click on element using ${triggers}"),
  clickFocusSelectMode: Binding([
    // default is empty
  ], "Representation Focus (Selection Mode)", "Click element using ${triggers}"),
  clickFocusAddSelectMode: Binding([
    // default is empty
  ], "Representation Focus Add (Selection Mode)", "Click element using ${triggers}"),
  clickFocusExtendSelectMode: Binding([
    // default is empty
  ], "Representation Focus Extend (Selection Mode)", "Click on element using ${triggers}")
};
var FocusLociParams = {
  bindings: ParamDefinition.Value(DefaultFocusLociBindings, { isHidden: true })
};
var FocusLoci = PluginBehavior.create({
  name: "representation-focus-loci",
  category: "interaction",
  ctor: class extends PluginBehavior.Handler {
    register() {
      this.subscribeObservable(this.ctx.behaviors.interaction.click, ({ current, button, modifiers }) => {
        var _a, _b, _c, _d, _e;
        const { clickFocus, clickFocusAdd, clickFocusExtend, clickFocusSelectMode, clickFocusAddSelectMode, clickFocusExtendSelectMode } = this.params.bindings;
        const binding = this.ctx.selectionMode ? clickFocusSelectMode : clickFocus;
        const matched = Binding.match(binding, button, modifiers);
        const bindingAdd = this.ctx.selectionMode ? clickFocusAddSelectMode : clickFocusAdd;
        const matchedAdd = Binding.match(bindingAdd, button, modifiers);
        const bindingExtend = this.ctx.selectionMode ? clickFocusExtendSelectMode : clickFocusExtend;
        const matchedExtend = Binding.match(bindingExtend, button, modifiers);
        if (!matched && !matchedAdd && !matchedExtend)
          return;
        const snapshotKey = (_d = (_c = (_b = (_a = current.repr) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.snapshotKey) === null || _c === void 0 ? void 0 : _c.trim()) !== null && _d !== void 0 ? _d : "";
        if (!this.ctx.selectionMode && matched && snapshotKey) {
          this.ctx.managers.snapshot.applyKey(snapshotKey);
          return;
        }
        const { granularity } = this.ctx.managers.interactivity.props;
        if (granularity !== "residue" && granularity !== "element")
          return;
        const loci = Loci.normalize(current.loci, "residue");
        const entry = this.ctx.managers.structure.focus.current;
        if (entry && Loci.areEqual(entry.loci, loci)) {
          this.ctx.managers.structure.focus.clear();
        } else {
          if (matched) {
            this.ctx.managers.structure.focus.setFromLoci(loci);
          } else {
            if (matchedExtend) {
              this.ctx.managers.structure.focus.extendFromLoci(loci);
            } else {
              this.ctx.managers.structure.focus.toggleFromLoci(loci);
            }
            const current2 = (_e = this.ctx.managers.structure.focus.current) === null || _e === void 0 ? void 0 : _e.loci;
            if (current2)
              this.ctx.managers.camera.focusLoci(current2);
          }
        }
      });
    }
  },
  params: () => FocusLociParams,
  display: { name: "Representation Focus Loci on Canvas" }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/camera.js
var camera_exports2 = {};
__export(camera_exports2, {
  CameraAxisHelper: () => CameraAxisHelper,
  CameraControls: () => CameraControls,
  DefaultClickResetCameraOnEmpty: () => DefaultClickResetCameraOnEmpty,
  DefaultClickResetCameraOnEmptySelectMode: () => DefaultClickResetCameraOnEmptySelectMode,
  DefaultFocusLociBindings: () => DefaultFocusLociBindings2,
  FocusLoci: () => FocusLoci2
});
var B2 = ButtonsType;
var M2 = ModifiersKeys;
var Trigger2 = Binding.Trigger;
var Key = Binding.TriggerKey;
var DefaultClickResetCameraOnEmpty = Binding([
  Trigger2(B2.Flag.Primary, M2.create()),
  Trigger2(B2.Flag.Secondary, M2.create()),
  Trigger2(B2.Flag.Primary, M2.create({ control: true }))
], "Reset camera focus", "Click on nothing using ${triggers}");
var DefaultClickResetCameraOnEmptySelectMode = Binding([
  Trigger2(B2.Flag.Secondary, M2.create()),
  Trigger2(B2.Flag.Primary, M2.create({ control: true }))
], "Reset camera focus (Selection Mode)", "Click on nothing using ${triggers}");
var DefaultFocusLociBindings2 = {
  clickCenterFocus: Binding([
    Trigger2(B2.Flag.Primary, M2.create()),
    Trigger2(B2.Flag.Secondary, M2.create()),
    Trigger2(B2.Flag.Primary, M2.create({ control: true }))
  ], "Camera center and focus", "Click element using ${triggers}"),
  clickCenterFocusSelectMode: Binding([
    Trigger2(B2.Flag.Secondary, M2.create()),
    Trigger2(B2.Flag.Primary, M2.create({ control: true }))
  ], "Camera center and focus (Selection Mode)", "Click element using ${triggers}"),
  clickResetCameraOnEmpty: DefaultClickResetCameraOnEmpty,
  clickResetCameraOnEmptySelectMode: DefaultClickResetCameraOnEmptySelectMode
};
var FocusLociParams2 = {
  minRadius: ParamDefinition.Numeric(8, { min: 1, max: 50, step: 1 }),
  extraRadius: ParamDefinition.Numeric(4, { min: 1, max: 50, step: 1 }, { description: "Value added to the bounding-sphere radius of the Loci" }),
  durationMs: ParamDefinition.Numeric(250, { min: 0, max: 1e3, step: 1 }, { description: "Camera transition duration" }),
  bindings: ParamDefinition.Value(DefaultFocusLociBindings2, { isHidden: true })
};
var FocusLoci2 = PluginBehavior.create({
  name: "camera-focus-loci",
  category: "interaction",
  ctor: class extends PluginBehavior.Handler {
    register() {
      this.subscribeObservable(this.ctx.behaviors.interaction.click, ({ current, button, modifiers }) => {
        var _a, _b;
        if (!this.ctx.canvas3d)
          return;
        const binding = this.ctx.selectionMode ? this.params.bindings.clickCenterFocusSelectMode : this.params.bindings.clickCenterFocus;
        const resetBinding = this.ctx.selectionMode ? (_a = this.params.bindings.clickResetCameraOnEmptySelectMode) !== null && _a !== void 0 ? _a : DefaultClickResetCameraOnEmptySelectMode : (_b = this.params.bindings.clickResetCameraOnEmpty) !== null && _b !== void 0 ? _b : DefaultClickResetCameraOnEmpty;
        if (Loci.isEmpty(current.loci) && Binding.match(resetBinding, button, modifiers)) {
          PluginCommands.Camera.Reset(this.ctx, {});
          return;
        }
        if (Binding.match(binding, button, modifiers)) {
          const loci = Loci.normalize(current.loci, this.ctx.managers.interactivity.props.granularity);
          this.ctx.managers.camera.focusLoci(loci, this.params);
        }
      });
    }
  },
  params: () => FocusLociParams2,
  display: { name: "Camera Focus Loci on Canvas" }
});
var CameraAxisHelper = PluginBehavior.create({
  name: "camera-axis-helper",
  category: "interaction",
  ctor: class extends PluginBehavior.Handler {
    register() {
      let lastPlane = CameraHelperAxis.None;
      let state = 0;
      this.subscribeObservable(this.ctx.behaviors.interaction.click, ({ current }) => {
        if (!this.ctx.canvas3d || !isCameraAxesLoci(current.loci))
          return;
        const axis = current.loci.elements[0].groupId;
        if (axis === CameraHelperAxis.None) {
          lastPlane = CameraHelperAxis.None;
          state = 0;
          return;
        }
        const { camera } = this.ctx.canvas3d;
        let dir, up2;
        if (axis >= CameraHelperAxis.X && axis <= CameraHelperAxis.Z) {
          lastPlane = CameraHelperAxis.None;
          state = 0;
          const d = Vec3.sub(Vec3(), camera.target, camera.position);
          const c = Vec3.cross(Vec3(), d, camera.up);
          up2 = Vec3();
          up2[axis - 1] = 1;
          dir = Vec3.cross(Vec3(), up2, c);
          if (Vec3.magnitude(dir) === 0)
            dir = d;
        } else {
          if (lastPlane === axis) {
            state = (state + 1) % 2;
          } else {
            lastPlane = axis;
            state = 0;
          }
          if (axis === CameraHelperAxis.XY) {
            up2 = state ? Vec3.unitX : Vec3.unitY;
            dir = Vec3.negUnitZ;
          } else if (axis === CameraHelperAxis.XZ) {
            up2 = state ? Vec3.unitX : Vec3.unitZ;
            dir = Vec3.negUnitY;
          } else {
            up2 = state ? Vec3.unitY : Vec3.unitZ;
            dir = Vec3.negUnitX;
          }
        }
        this.ctx.canvas3d.requestCameraReset({
          snapshot: (scene, camera2) => camera2.getInvariantFocus(scene.boundingSphereVisible.center, scene.boundingSphereVisible.radius, up2, dir)
        });
      });
    }
  },
  params: () => ({}),
  display: { name: "Camera Axis Helper" }
});
var DefaultCameraControlsBindings = {
  keySpinAnimation: Binding([Key("I")], "Spin Animation", "Press ${triggers}"),
  keyRockAnimation: Binding([Key("O")], "Rock Animation", "Press ${triggers}"),
  keyToggleFlyMode: Binding([Key("Space", M2.create({ shift: true }))], "Toggle Fly Mode", "Press ${triggers}"),
  keyResetView: Binding([Key("T")], "Reset View", "Press ${triggers}"),
  keyGlobalIllumination: Binding([Key("G")], "Global Illumination", "Press ${triggers}")
};
var CameraControlsParams = {
  bindings: ParamDefinition.Value(DefaultCameraControlsBindings, { isHidden: true })
};
var CameraControls = PluginBehavior.create({
  name: "camera-controls",
  category: "interaction",
  ctor: class extends PluginBehavior.Handler {
    register() {
      this.subscribeObservable(this.ctx.behaviors.interaction.key, ({ code, key, modifiers }) => {
        var _a;
        if (!this.ctx.canvas3d)
          return;
        const b = { ...DefaultCameraControlsBindings, ...this.params.bindings };
        const tp = this.ctx.canvas3d.props.trackball;
        const ip = this.ctx.canvas3d.props.illumination;
        if (Binding.matchKey(b.keySpinAnimation, code, modifiers, key)) {
          const name = tp.animate.name !== "spin" ? "spin" : "off";
          if (name === "off") {
            this.ctx.canvas3d.setProps({
              trackball: { animate: { name, params: {} } }
            });
          } else {
            this.ctx.canvas3d.setProps({
              trackball: {
                animate: {
                  name,
                  params: { speed: 1 }
                }
              }
            });
          }
        }
        if (Binding.matchKey(b.keyRockAnimation, code, modifiers, key)) {
          const name = tp.animate.name !== "rock" ? "rock" : "off";
          if (name === "off") {
            this.ctx.canvas3d.setProps({
              trackball: { animate: { name, params: {} } }
            });
          } else {
            this.ctx.canvas3d.setProps({
              trackball: {
                animate: {
                  name,
                  params: { speed: 0.3, angle: 10 }
                }
              }
            });
          }
        }
        if (Binding.matchKey(b.keyToggleFlyMode, code, modifiers, key)) {
          const flyMode = !tp.flyMode;
          this.ctx.canvas3d.setProps({
            trackball: { flyMode }
          });
          if ((_a = this.ctx.canvas3dContext) === null || _a === void 0 ? void 0 : _a.canvas) {
            this.ctx.canvas3dContext.canvas.style.cursor = flyMode ? "crosshair" : "unset";
          }
        }
        if (Binding.matchKey(b.keyResetView, code, modifiers, key)) {
          PluginCommands.Camera.Reset(this.ctx, {});
        }
        if (Binding.matchKey(b.keyGlobalIllumination, code, modifiers, key)) {
          this.ctx.canvas3d.setProps({
            illumination: {
              ...ip,
              enabled: !ip.enabled
            }
          });
        }
      });
    }
  },
  params: () => CameraControlsParams,
  display: { name: "Camera Controls on Canvas" }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/custom-props.js
var custom_props_exports = {};
__export(custom_props_exports, {
  AccessibleSurfaceArea: () => AccessibleSurfaceArea2,
  BestDatabaseSequenceMapping: () => SIFTSMapping2,
  CrossLinkRestraint: () => CrossLinkRestraint2,
  Interactions: () => Interactions2,
  SecondaryStructure: () => SecondaryStructure,
  StructureInfo: () => StructureInfo,
  ValenceModel: () => ValenceModel
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/custom-props/structure-info.js
var StructureInfo = PluginBehavior.create({
  name: "structure-info-prop",
  category: "custom-props",
  display: { name: "Structure Info" },
  ctor: class extends PluginBehavior.Handler {
    get maxModelIndex() {
      var _a, _b;
      let maxIndex = -1;
      const cells = this.ctx.state.data.select(StateSelection.Generators.rootsOfType(PluginStateObject.Molecule.Model));
      for (const c of cells) {
        const index = ((_a = c.obj) === null || _a === void 0 ? void 0 : _a.data) && Model.Index.get((_b = c.obj) === null || _b === void 0 ? void 0 : _b.data).value;
        if (index !== void 0 && index > maxIndex)
          maxIndex = index;
      }
      return maxIndex;
    }
    get maxStructureIndex() {
      var _a, _b;
      let maxIndex = -1;
      const cells = this.ctx.state.data.select(StateSelection.Generators.rootsOfType(PluginStateObject.Molecule.Structure));
      for (const c of cells) {
        const index = ((_a = c.obj) === null || _a === void 0 ? void 0 : _a.data) && Structure.Index.get((_b = c.obj) === null || _b === void 0 ? void 0 : _b.data).value;
        if (index !== void 0 && index > maxIndex)
          maxIndex = index;
      }
      return maxIndex;
    }
    get asymIdOffset() {
      var _a;
      let auth = 0;
      let label = 0;
      const cells = this.ctx.state.data.select(StateSelection.Generators.rootsOfType(PluginStateObject.Molecule.Model));
      for (const c of cells) {
        const m = (_a = c.obj) === null || _a === void 0 ? void 0 : _a.data;
        if (m) {
          const count = Model.AsymIdCount.get(m);
          const offset = Model.AsymIdOffset.get(m).value;
          if (count !== void 0 && offset !== void 0) {
            auth = Math.max(auth, offset.auth + count.auth);
            label = Math.max(label, offset.label + count.label);
          }
        }
      }
      return { auth, label };
    }
    setModelMaxIndex() {
      var _a;
      const value = this.maxModelIndex;
      const cells = this.ctx.state.data.select(StateSelection.Generators.rootsOfType(PluginStateObject.Molecule.Model));
      for (const c of cells) {
        const m = (_a = c.obj) === null || _a === void 0 ? void 0 : _a.data;
        if (m) {
          if (Model.MaxIndex.get(m).value !== value) {
            Model.MaxIndex.set(m, { value }, value);
          }
        }
      }
    }
    setStructureMaxIndex() {
      var _a;
      const value = this.maxModelIndex;
      const cells = this.ctx.state.data.select(StateSelection.Generators.rootsOfType(PluginStateObject.Molecule.Structure));
      for (const c of cells) {
        const s = (_a = c.obj) === null || _a === void 0 ? void 0 : _a.data;
        if (s) {
          if (Structure.MaxIndex.get(s).value !== value) {
            Structure.MaxIndex.set(s, { value }, value);
          }
        }
      }
    }
    handleModel(model, oldModel) {
      if (Model.Index.get(model).value === void 0) {
        const oldIndex = oldModel && Model.Index.get(oldModel).value;
        const value = oldIndex !== null && oldIndex !== void 0 ? oldIndex : this.maxModelIndex + 1;
        Model.Index.set(model, { value }, value);
      }
      if (Model.AsymIdOffset.get(model).value === void 0) {
        const oldOffset = oldModel && Model.AsymIdOffset.get(oldModel).value;
        const value = oldOffset !== null && oldOffset !== void 0 ? oldOffset : { ...this.asymIdOffset };
        Model.AsymIdOffset.set(model, { value }, value);
      }
    }
    handleStructure(structure, oldStructure) {
      if (structure.parent !== void 0)
        return;
      if (Structure.Index.get(structure).value !== void 0)
        return;
      const oldIndex = oldStructure && Structure.Index.get(oldStructure).value;
      const value = oldIndex !== null && oldIndex !== void 0 ? oldIndex : this.maxStructureIndex + 1;
      Structure.Index.set(structure, { value }, value);
    }
    handle(ref, obj, oldObj) {
      if (PluginStateObject.Molecule.Structure.is(obj)) {
        const transform = this.ctx.state.data.tree.transforms.get(ref);
        if (!transform.transformer.definition.isDecorator && obj.data.parent === void 0) {
          this.handleStructure(obj.data, oldObj === null || oldObj === void 0 ? void 0 : oldObj.data);
        }
      } else if (PluginStateObject.Molecule.Model.is(obj)) {
        const transform = this.ctx.state.data.tree.transforms.get(ref);
        if (!transform.transformer.definition.isDecorator) {
          this.handleModel(obj.data, oldObj === null || oldObj === void 0 ? void 0 : oldObj.data);
        }
      }
    }
    register() {
      this.ctx.customModelProperties.register(Model.AsymIdOffset, true);
      this.ctx.customModelProperties.register(Model.Index, true);
      this.ctx.customModelProperties.register(Model.MaxIndex, true);
      this.ctx.customStructureProperties.register(Structure.Index, true);
      this.ctx.customStructureProperties.register(Structure.MaxIndex, true);
      this.subscribeObservable(this.ctx.state.data.events.object.created, (o) => {
        this.handle(o.ref, o.obj);
        this.setModelMaxIndex();
        this.setStructureMaxIndex();
      });
      this.subscribeObservable(this.ctx.state.data.events.object.updated, (o) => {
        this.handle(o.ref, o.obj, o.oldObj);
      });
    }
    unregister() {
      this.ctx.customModelProperties.unregister(Model.AsymIdOffset.descriptor.name);
      this.ctx.customModelProperties.unregister(Model.Index.descriptor.name);
      this.ctx.customModelProperties.unregister(Model.MaxIndex.descriptor.name);
      this.ctx.customStructureProperties.unregister(Structure.Index.descriptor.name);
      this.ctx.customStructureProperties.unregister(Structure.MaxIndex.descriptor.name);
    }
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/accessible-surface-area/shrake-rupley/common.js
var VdWLookup = [
  -1,
  // 0: missing
  1.76,
  // 1: trigonal C
  1.87,
  // 2: tetrahedral C
  1.65,
  // 3: trigonal N
  1.5,
  // 4: tetrahedral N
  1.4,
  // 5: O
  1.85,
  // 6: S
  1.8,
  // 7: C (nucleic)
  1.6,
  // 8: N (nucleic)
  1.4
  // 9: P (nucleic)
];
var MaxAsa = {
  "ALA": 121,
  "ARG": 265,
  "ASN": 187,
  "ASP": 187,
  "CYS": 148,
  "GLU": 214,
  "GLN": 214,
  "GLY": 97,
  "HIS": 216,
  "ILE": 195,
  "LEU": 191,
  "LYS": 230,
  "MET": 203,
  "PHE": 228,
  "PRO": 154,
  "SER": 143,
  "THR": 163,
  "TRP": 264,
  "TYR": 255,
  "VAL": 165
};
var DefaultMaxAsa = 121;

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/accessible-surface-area/shrake-rupley/radii.js
function assignRadiusForHeavyAtoms(ctx) {
  const { key } = StructureProperties.residue;
  const { type_symbol, label_atom_id, label_comp_id } = StructureProperties.atom;
  const { structure, atomRadiusType, serialResidueIndex } = ctx;
  const l = element_exports.Location.create(structure);
  let prevResidueIdx = 0;
  let residueIdx = 0;
  let serialResidueIdx = -1;
  l.structure = structure;
  for (let i = 0, m = 0, il = structure.units.length; i < il; ++i) {
    const unit = structure.units[i];
    const { elements } = unit;
    l.unit = unit;
    prevResidueIdx = -1;
    for (let j = 0, jl = elements.length; j < jl; ++j) {
      const eI = elements[j];
      const mj = m + j;
      l.element = eI;
      residueIdx = key(l);
      if (prevResidueIdx !== residueIdx)
        ++serialResidueIdx;
      prevResidueIdx = residueIdx;
      const element = type_symbol(l);
      const elementIdx = getElementIdx(element);
      if (isHydrogen(elementIdx)) {
        atomRadiusType[mj] = 0;
        serialResidueIndex[mj] = -1;
        continue;
      }
      const atomId2 = label_atom_id(l);
      const moleculeType = getElementMoleculeType(unit, eI);
      if (moleculeType === MoleculeType.Water || !ctx.nonPolymer && !isPolymer(moleculeType)) {
        atomRadiusType[mj] = 0;
        serialResidueIndex[mj] = -1;
        continue;
      }
      const compId2 = label_comp_id(l);
      if (ctx.traceOnly && (atomId2 !== "CA" && atomId2 !== "BB" || !MaxAsa[compId2])) {
        atomRadiusType[mj] = 0;
        serialResidueIndex[mj] = serialResidueIdx;
        continue;
      }
      if (isNucleic(moleculeType)) {
        atomRadiusType[mj] = determineRadiusNucl(atomId2, element, compId2);
      } else if (moleculeType === MoleculeType.Protein) {
        atomRadiusType[mj] = determineRadiusAmino(atomId2, element, compId2);
      } else {
        atomRadiusType[mj] = handleNonStandardCase(element);
      }
      serialResidueIndex[mj] = serialResidueIdx;
    }
    m += elements.length;
  }
}
function determineRadiusAmino(atomId2, element, compId2) {
  switch (element) {
    case "O":
      return 5;
    case "S":
      return 6;
    case "N":
      return atomId2 === "NZ" ? 4 : 3;
    case "C":
      switch (atomId2) {
        case "C":
        case "CE1":
        case "CE2":
        case "CE3":
        case "CH2":
        case "CZ":
        case "CZ2":
        case "CZ3":
          return 1;
        case "CA":
        case "CB":
        case "CE":
        case "CG1":
        case "CG2":
          return 2;
        default:
          switch (compId2) {
            case "PHE":
            case "TRP":
            case "TYR":
            case "HIS":
            case "ASP":
            case "ASN":
              return 1;
            case "PRO":
            case "LYS":
            case "ARG":
            case "MET":
            case "ILE":
            case "LEU":
              return 2;
            case "GLU":
            case "GLN":
              return atomId2 === "CD" ? 1 : 2;
          }
      }
  }
  return handleNonStandardCase(element);
}
function determineRadiusNucl(atomId2, element, compId2) {
  switch (element) {
    case "C":
      return 7;
    case "N":
      return 8;
    case "P":
      return 9;
    case "O":
      return 5;
  }
  return handleNonStandardCase(element);
}
function handleNonStandardCase(element) {
  const radius = VdwRadius(element);
  let index = VdWLookup.indexOf(radius);
  if (index === -1) {
    index = VdWLookup.length;
    VdWLookup[index] = radius;
  }
  return index;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/accessible-surface-area/shrake-rupley/area.js
var updateChunk = 5e3;
async function computeArea(runtime, ctx) {
  const { atomRadiusType: atomRadius } = ctx;
  for (let i = 0; i < atomRadius.length; i += updateChunk) {
    if (runtime.shouldUpdate) {
      await runtime.update({ message: "Computing per residue surface accessibility...", current: i, max: atomRadius.length });
    }
    computeRange(ctx, i, Math.min(i + updateChunk, atomRadius.length));
  }
}
function computeRange(ctx, begin, end) {
  const { structure, atomRadiusType, serialResidueIndex, area, spherePoints, scalingConstant, maxLookupRadius, probeSize } = ctx;
  const { lookup3d, serialMapping, unitIndexMap, units } = structure;
  const { cumulativeUnitElementCount, elementIndices, unitIndices } = serialMapping;
  for (let aI = begin; aI < end; ++aI) {
    const vdw1 = VdWLookup[atomRadiusType[aI]];
    if (vdw1 === VdWLookup[0])
      continue;
    const aUnit = units[unitIndices[aI]];
    const aElementIndex = elementIndices[aI];
    const aX = aUnit.conformation.x(aElementIndex);
    const aY = aUnit.conformation.y(aElementIndex);
    const aZ = aUnit.conformation.z(aElementIndex);
    const { count, units: lUnits, indices, squaredDistances } = lookup3d.find(aX, aY, aZ, maxLookupRadius);
    const radius1 = probeSize + vdw1;
    const cutoff1 = probeSize + radius1;
    const neighbors = [];
    for (let iI = 0; iI < count; ++iI) {
      const bUnit = lUnits[iI];
      const bI = cumulativeUnitElementCount[unitIndexMap.get(bUnit.id)] + indices[iI];
      const bElementIndex = elementIndices[bI];
      const vdw2 = VdWLookup[atomRadiusType[bI]];
      if (aUnit === bUnit && aElementIndex === bElementIndex || vdw2 === VdWLookup[0])
        continue;
      const radius2 = probeSize + vdw2;
      if (squaredDistances[iI] < (cutoff1 + vdw2) * (cutoff1 + vdw2)) {
        const bElementIndex2 = elementIndices[bI];
        neighbors[neighbors.length] = [
          squaredDistances[iI],
          (squaredDistances[iI] + radius1 * radius1 - radius2 * radius2) / (2 * radius1),
          bUnit.conformation.x(bElementIndex2) - aX,
          bUnit.conformation.y(bElementIndex2) - aY,
          bUnit.conformation.z(bElementIndex2) - aZ
        ];
      }
    }
    neighbors.sort((a, b) => a[0] - b[0]);
    let accessiblePointCount = 0;
    sl: for (let sI = 0; sI < spherePoints.length; ++sI) {
      const [sX, sY, sZ] = spherePoints[sI];
      for (let nI = 0; nI < neighbors.length; ++nI) {
        const [, sqRadius, nX, nY, nZ] = neighbors[nI];
        const dot = sX * nX + sY * nY + sZ * nZ;
        if (dot > sqRadius) {
          continue sl;
        }
      }
      ++accessiblePointCount;
    }
    area[serialResidueIndex[aI]] += scalingConstant * accessiblePointCount * radius1 * radius1;
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/accessible-surface-area/shrake-rupley.js
var ShrakeRupleyComputationParams = {
  numberOfSpherePoints: ParamDefinition.Numeric(92, { min: 12, max: 360, step: 1 }, { description: "Number of sphere points to sample per atom: 92 (original paper), 960 (BioJava), 3000 (EPPIC) - see Shrake A, Rupley JA: Environment and exposure to solvent of protein atoms. Lysozyme and insulin. J Mol Biol 1973." }),
  probeSize: ParamDefinition.Numeric(1.4, { min: 0.1, max: 4, step: 0.01 }, { description: "Corresponds to the size of a water molecule: 1.4 (original paper), 1.5 (occassionally used)" }),
  // buriedRasaThreshold: PD.Numeric(0.16, { min: 0.0, max: 1.0 }, { description: 'below this cutoff of relative accessible surface area a residue will be considered buried - see: Rost B, Sander C: Conservation and prediction of solvent accessibility in protein families. Proteins 1994.' }),
  nonPolymer: ParamDefinition.Boolean(false, { description: "Include non-polymer atoms as occluders." }),
  traceOnly: ParamDefinition.Boolean(false, { description: "Compute only using alpha-carbons, if true increase probeSize accordingly (e.g., 4 A). Considers only canonical amino acids." })
};
var AccessibleSurfaceArea;
(function(AccessibleSurfaceArea3) {
  function compute(structure, props = {}) {
    const p = { ...ParamDefinition.getDefaultValues(ShrakeRupleyComputationParams), ...props };
    return Task.create("Compute Accessible Surface Area", async (runtime) => {
      return await calculate(runtime, structure, p);
    });
  }
  AccessibleSurfaceArea3.compute = compute;
  async function calculate(runtime, structure, props) {
    const ctx = initialize(structure, props);
    assignRadiusForHeavyAtoms(ctx);
    await computeArea(runtime, ctx);
    const { area, serialResidueIndex } = ctx;
    return { area, serialResidueIndex };
  }
  function initialize(structure, props) {
    const { elementCount, atomicResidueCount } = structure;
    const { probeSize, nonPolymer, traceOnly, numberOfSpherePoints } = props;
    return {
      structure,
      probeSize,
      nonPolymer,
      traceOnly,
      spherePoints: generateSpherePoints(numberOfSpherePoints),
      scalingConstant: 4 * Math.PI / numberOfSpherePoints,
      maxLookupRadius: 2 * props.probeSize + 2 * VdWLookup[2],
      // 2x probe size + 2x largest VdW
      atomRadiusType: new Int8Array(elementCount),
      serialResidueIndex: new Int32Array(elementCount),
      area: new Float32Array(atomicResidueCount)
    };
  }
  function generateSpherePoints(numberOfSpherePoints) {
    const points = [];
    const inc = Math.PI * (3 - Math.sqrt(5));
    const offset = 2 / numberOfSpherePoints;
    for (let k = 0; k < numberOfSpherePoints; ++k) {
      const y = k * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = k * inc;
      points[points.length] = Vec3.create(Math.cos(phi) * r, y, Math.sin(phi) * r);
    }
    return points;
  }
  let Flags;
  (function(Flags2) {
    Flags2[Flags2["NA"] = 0] = "NA";
    Flags2[Flags2["Buried"] = 1] = "Buried";
    Flags2[Flags2["Accessible"] = 2] = "Accessible";
  })(Flags = AccessibleSurfaceArea3.Flags || (AccessibleSurfaceArea3.Flags = {}));
  AccessibleSurfaceArea3.Flag = {
    NA: Flags.NA,
    Buried: Flags.Buried,
    Accessible: Flags.Accessible
  };
  function normalize2(compId2, asa) {
    const maxAsa = MaxAsa[compId2] || DefaultMaxAsa;
    return asa / maxAsa;
  }
  AccessibleSurfaceArea3.normalize = normalize2;
  function getValue(location2, accessibleSurfaceArea) {
    const { area, serialResidueIndex } = accessibleSurfaceArea;
    const rSI = serialResidueIndex[SortedArray.indexOf(SortedArray.ofSortedArray(location2.structure.root.serialMapping.elementIndices), location2.element)];
    if (rSI === -1)
      return -1;
    return area[rSI];
  }
  AccessibleSurfaceArea3.getValue = getValue;
  function getNormalizedValue(location2, accessibleSurfaceArea) {
    const value = getValue(location2, accessibleSurfaceArea);
    return value === -1 ? -1 : normalize2(StructureProperties.atom.label_comp_id(location2), value);
  }
  AccessibleSurfaceArea3.getNormalizedValue = getNormalizedValue;
  function getFlag(location2, accessibleSurfaceArea) {
    const value = getNormalizedValue(location2, accessibleSurfaceArea);
    return value === -1 ? Flags.NA : value < 0.16 ? Flags.Buried : Flags.Accessible;
  }
  AccessibleSurfaceArea3.getFlag = getFlag;
})(AccessibleSurfaceArea || (AccessibleSurfaceArea = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/accessible-surface-area.js
var AccessibleSurfaceAreaParams = {
  ...ShrakeRupleyComputationParams
};
var AccessibleSurfaceAreaSymbols = {
  isBuried: QuerySymbolRuntime.Dynamic(CustomPropSymbol("computed", "accessible-surface-area.is-buried", Type.Bool), (ctx) => {
    if (!Unit.isAtomic(ctx.element.unit))
      return false;
    const accessibleSurfaceArea = AccessibleSurfaceAreaProvider.get(ctx.element.structure).value;
    if (!accessibleSurfaceArea)
      return false;
    return AccessibleSurfaceArea.getFlag(ctx.element, accessibleSurfaceArea) === AccessibleSurfaceArea.Flags.Buried;
  }),
  isAccessible: QuerySymbolRuntime.Dynamic(CustomPropSymbol("computed", "accessible-surface-area.is-accessible", Type.Bool), (ctx) => {
    if (!Unit.isAtomic(ctx.element.unit))
      return false;
    const accessibleSurfaceArea = AccessibleSurfaceAreaProvider.get(ctx.element.structure).value;
    if (!accessibleSurfaceArea)
      return false;
    return AccessibleSurfaceArea.getFlag(ctx.element, accessibleSurfaceArea) === AccessibleSurfaceArea.Flags.Accessible;
  })
};
var AccessibleSurfaceAreaProvider = CustomStructureProperty.createProvider({
  label: "Accessible Surface Area",
  descriptor: CustomPropertyDescriptor({
    name: "molstar_accessible_surface_area",
    symbols: AccessibleSurfaceAreaSymbols
    // TODO `cifExport`
  }),
  type: "root",
  defaultParams: AccessibleSurfaceAreaParams,
  getParams: (data) => AccessibleSurfaceAreaParams,
  isApplicable: (data) => true,
  obtain: async (ctx, data, props) => {
    const p = { ...ParamDefinition.getDefaultValues(AccessibleSurfaceAreaParams), ...props };
    return { value: await AccessibleSurfaceArea.compute(data, p).runInContext(ctx.runtime) };
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/themes/accessible-surface-area.js
var DefaultColor = Color(16448250);
var Description = "Assigns a color based on the relative accessible surface area of a residue.";
var AccessibleSurfaceAreaColorThemeParams = {
  list: ParamDefinition.ColorList("rainbow", { presetKind: "scale" })
};
function getAccessibleSurfaceAreaColorThemeParams(ctx) {
  return AccessibleSurfaceAreaColorThemeParams;
}
function AccessibleSurfaceAreaColorTheme(ctx, props) {
  let color;
  const scale = ColorScale.create({
    listOrName: props.list.colors,
    minLabel: "buried",
    maxLabel: "exposed",
    domain: [0, 1]
  });
  const accessibleSurfaceArea = ctx.structure && AccessibleSurfaceAreaProvider.get(ctx.structure);
  const contextHash = accessibleSurfaceArea ? hash2(accessibleSurfaceArea.id, accessibleSurfaceArea.version) : -1;
  if ((accessibleSurfaceArea === null || accessibleSurfaceArea === void 0 ? void 0 : accessibleSurfaceArea.value) && ctx.structure) {
    const l = element_exports.Location.create(ctx.structure);
    const asa = accessibleSurfaceArea.value;
    const getColor = (location2) => {
      const value = AccessibleSurfaceArea.getNormalizedValue(location2, asa);
      return value === -1 ? DefaultColor : scale.color(value);
    };
    color = (location2) => {
      if (element_exports.Location.is(location2) && Unit.isAtomic(location2.unit)) {
        return getColor(location2);
      } else if (Bond.isLocation(location2)) {
        l.unit = location2.aUnit;
        l.element = location2.aUnit.elements[location2.aIndex];
        return getColor(l);
      }
      return DefaultColor;
    };
  } else {
    color = () => DefaultColor;
  }
  return {
    factory: AccessibleSurfaceAreaColorTheme,
    granularity: "group",
    preferSmoothing: true,
    color,
    props,
    contextHash,
    description: Description,
    legend: scale ? scale.legend : void 0
  };
}
var AccessibleSurfaceAreaColorThemeProvider = {
  name: "accessible-surface-area",
  label: "Accessible Surface Area",
  category: ColorThemeCategory.Residue,
  factory: AccessibleSurfaceAreaColorTheme,
  getParams: getAccessibleSurfaceAreaColorThemeParams,
  defaultValues: ParamDefinition.getDefaultValues(AccessibleSurfaceAreaColorThemeParams),
  isApplicable: (ctx) => !!ctx.structure,
  ensureCustomProperties: {
    attach: (ctx, data) => data.structure ? AccessibleSurfaceAreaProvider.attach(ctx, data.structure, void 0, true) : Promise.resolve(),
    detach: (data) => data.structure && AccessibleSurfaceAreaProvider.ref(data.structure, false)
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/custom-props/computed/accessible-surface-area.js
var AccessibleSurfaceArea2 = PluginBehavior.create({
  name: "computed-accessible-surface-area-prop",
  category: "custom-props",
  display: { name: "Accessible Surface Area" },
  ctor: class extends PluginBehavior.Handler {
    constructor() {
      super(...arguments);
      this.provider = AccessibleSurfaceAreaProvider;
      this.labelProvider = {
        label: (loci) => {
          if (!this.params.showTooltip)
            return;
          return accessibleSurfaceAreaLabel(loci);
        }
      };
    }
    update(p) {
      const updated = this.params.autoAttach !== p.autoAttach || this.params.showTooltip !== p.showTooltip;
      this.params.autoAttach = p.autoAttach;
      this.params.showTooltip = p.showTooltip;
      this.ctx.customStructureProperties.setDefaultAutoAttach(this.provider.descriptor.name, this.params.autoAttach);
      return updated;
    }
    register() {
      DefaultQueryRuntimeTable.addCustomProp(this.provider.descriptor);
      this.ctx.customStructureProperties.register(this.provider, this.params.autoAttach);
      this.ctx.representation.structure.themes.colorThemeRegistry.add(AccessibleSurfaceAreaColorThemeProvider);
      this.ctx.managers.lociLabels.addProvider(this.labelProvider);
      this.ctx.query.structure.registry.add(isBuried);
      this.ctx.query.structure.registry.add(isAccessible);
    }
    unregister() {
      DefaultQueryRuntimeTable.removeCustomProp(this.provider.descriptor);
      this.ctx.customStructureProperties.unregister(this.provider.descriptor.name);
      this.ctx.representation.structure.themes.colorThemeRegistry.remove(AccessibleSurfaceAreaColorThemeProvider);
      this.ctx.managers.lociLabels.removeProvider(this.labelProvider);
      this.ctx.query.structure.registry.remove(isBuried);
      this.ctx.query.structure.registry.remove(isAccessible);
    }
  },
  params: () => ({
    autoAttach: ParamDefinition.Boolean(false),
    showTooltip: ParamDefinition.Boolean(true)
  })
});
function accessibleSurfaceAreaLabel(loci) {
  if (loci.kind === "element-loci") {
    if (loci.elements.length === 0)
      return;
    const accessibleSurfaceArea = AccessibleSurfaceAreaProvider.get(loci.structure).value;
    if (!accessibleSurfaceArea || loci.structure.customPropertyDescriptors.hasReference(AccessibleSurfaceAreaProvider.descriptor))
      return;
    const { getSerialIndex } = loci.structure.root.serialMapping;
    const { area, serialResidueIndex } = accessibleSurfaceArea;
    const seen = /* @__PURE__ */ new Set();
    let cummulativeArea = 0;
    for (const { indices, unit } of loci.elements) {
      const { elements } = unit;
      OrderedSet.forEach(indices, (idx) => {
        const rSI = serialResidueIndex[getSerialIndex(unit, elements[idx])];
        if (rSI !== -1 && !seen.has(rSI)) {
          cummulativeArea += area[rSI];
          seen.add(rSI);
        }
      });
    }
    if (seen.size === 0)
      return;
    const residueCount = `<small>(${seen.size} ${seen.size > 1 ? "Residues sum" : "Residue"})</small>`;
    return `Accessible Surface Area ${residueCount}: ${cummulativeArea.toFixed(2)} Å<sup>2</sup>`;
  } else if (loci.kind === "structure-loci") {
    const accessibleSurfaceArea = AccessibleSurfaceAreaProvider.get(loci.structure).value;
    if (!accessibleSurfaceArea || loci.structure.customPropertyDescriptors.hasReference(AccessibleSurfaceAreaProvider.descriptor))
      return;
    return `Accessible Surface Area <small>(Whole Structure)</small>: ${arraySum(accessibleSurfaceArea.area).toFixed(2)} Å<sup>2</sup>`;
  }
}
var isBuried = StructureSelectionQuery("Buried Protein Residues", MolScriptBuilder.struct.modifier.union([
  MolScriptBuilder.struct.modifier.wholeResidues([
    MolScriptBuilder.struct.modifier.union([
      MolScriptBuilder.struct.generator.atomGroups({
        "chain-test": MolScriptBuilder.core.rel.eq([MolScriptBuilder.ammp("objectPrimitive"), "atomistic"]),
        "residue-test": AccessibleSurfaceAreaSymbols.isBuried.symbol()
      })
    ])
  ])
]), {
  description: "Select buried protein residues.",
  category: StructureSelectionCategory.Residue,
  ensureCustomProperties: (ctx, structure) => {
    return AccessibleSurfaceAreaProvider.attach(ctx, structure);
  }
});
var isAccessible = StructureSelectionQuery("Accessible Protein Residues", MolScriptBuilder.struct.modifier.union([
  MolScriptBuilder.struct.modifier.wholeResidues([
    MolScriptBuilder.struct.modifier.union([
      MolScriptBuilder.struct.generator.atomGroups({
        "chain-test": MolScriptBuilder.core.rel.eq([MolScriptBuilder.ammp("objectPrimitive"), "atomistic"]),
        "residue-test": AccessibleSurfaceAreaSymbols.isAccessible.symbol()
      })
    ])
  ])
]), {
  description: "Select accessible protein residues.",
  category: StructureSelectionCategory.Residue,
  ensureCustomProperties: (ctx, structure) => {
    return AccessibleSurfaceAreaProvider.attach(ctx, structure);
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/chemistry/geometry.js
var AtomGeometry;
(function(AtomGeometry2) {
  AtomGeometry2[AtomGeometry2["Spherical"] = 0] = "Spherical";
  AtomGeometry2[AtomGeometry2["Terminal"] = 1] = "Terminal";
  AtomGeometry2[AtomGeometry2["Linear"] = 2] = "Linear";
  AtomGeometry2[AtomGeometry2["Trigonal"] = 3] = "Trigonal";
  AtomGeometry2[AtomGeometry2["Tetrahedral"] = 4] = "Tetrahedral";
  AtomGeometry2[AtomGeometry2["TrigonalBiPyramidal"] = 5] = "TrigonalBiPyramidal";
  AtomGeometry2[AtomGeometry2["Octahedral"] = 6] = "Octahedral";
  AtomGeometry2[AtomGeometry2["SquarePlanar"] = 7] = "SquarePlanar";
  AtomGeometry2[AtomGeometry2["Unknown"] = 8] = "Unknown";
})(AtomGeometry || (AtomGeometry = {}));
function geometryLabel(geometry) {
  switch (geometry) {
    case AtomGeometry.Spherical:
      return "Spherical";
    case AtomGeometry.Terminal:
      return "Terminal";
    case AtomGeometry.Linear:
      return "Linear";
    case AtomGeometry.Trigonal:
      return "Trigonal";
    case AtomGeometry.Tetrahedral:
      return "Tetrahedral";
    case AtomGeometry.TrigonalBiPyramidal:
      return "Trigonal Bi-Pyramidal";
    case AtomGeometry.Octahedral:
      return "Octahedral";
    case AtomGeometry.SquarePlanar:
      return "Square Planar";
    case AtomGeometry.Unknown:
      return "Unknown";
  }
}
function assignGeometry(totalCoordination) {
  switch (totalCoordination) {
    case 0:
      return AtomGeometry.Spherical;
    case 1:
      return AtomGeometry.Terminal;
    case 2:
      return AtomGeometry.Linear;
    case 3:
      return AtomGeometry.Trigonal;
    case 4:
      return AtomGeometry.Tetrahedral;
    default:
      return AtomGeometry.Unknown;
  }
}
var AtomGeometryAngles = /* @__PURE__ */ new Map([
  [AtomGeometry.Linear, degToRad(180)],
  [AtomGeometry.Trigonal, degToRad(120)],
  [AtomGeometry.Tetrahedral, degToRad(109.4721)],
  [AtomGeometry.Octahedral, degToRad(90)]
]);
var tmpDir1 = Vec3();
var tmpDir2 = Vec3();
var tmpPosA = Vec3();
var tmpPosB = Vec3();
var tmpPosX = Vec3();
function calcAngles(structure, unitA, indexA, unitB, indexB, ignoreHydrogens = true) {
  const angles = [];
  const anglesH = [];
  unitA.conformation.position(unitA.elements[indexA], tmpPosA);
  unitB.conformation.position(unitB.elements[indexB], tmpPosB);
  Vec3.sub(tmpDir1, tmpPosB, tmpPosA);
  eachBondedAtom(structure, unitA, indexA, (unitX, indexX) => {
    if (typeSymbol(unitX, indexX) !== Elements.H) {
      unitX.conformation.position(unitX.elements[indexX], tmpPosX);
      Vec3.sub(tmpDir2, tmpPosX, tmpPosA);
      angles.push(Vec3.angle(tmpDir1, tmpDir2));
    } else if (!ignoreHydrogens) {
      unitX.conformation.position(unitX.elements[indexX], tmpPosX);
      Vec3.sub(tmpDir2, tmpPosX, tmpPosA);
      anglesH.push(Vec3.angle(tmpDir1, tmpDir2));
    }
  });
  return [angles, anglesH];
}
function calcPlaneAngle(structure, unitA, indexA, unitB, indexB) {
  unitA.conformation.position(unitA.elements[indexA], tmpPosA);
  unitB.conformation.position(unitB.elements[indexB], tmpPosB);
  Vec3.sub(tmpDir1, tmpPosB, tmpPosA);
  const neighbours = [Vec3(), Vec3()];
  let ni = 0;
  let unitX1;
  let indexX1;
  eachBondedAtom(structure, unitA, indexA, (unitX, indexX) => {
    if (ni > 1)
      return;
    if (typeSymbol(unitX, indexX) !== Elements.H) {
      unitX1 = unitX;
      indexX1 = indexX;
      unitX.conformation.position(unitX.elements[indexX], tmpPosX);
      Vec3.sub(neighbours[ni++], tmpPosX, tmpPosA);
    }
  });
  if (ni === 1 && unitX1 && indexX1) {
    eachBondedAtom(structure, unitX1, indexX1, (unitX, indexX) => {
      if (ni > 1)
        return;
      if (unitX === unitA && indexX === indexA)
        return;
      if (typeSymbol(unitX, indexX) !== Elements.H) {
        unitX.conformation.position(unitX.elements[indexX], tmpPosX);
        Vec3.sub(neighbours[ni++], tmpPosX, tmpPosA);
      }
    });
  }
  if (ni !== 2) {
    return;
  }
  Vec3.cross(tmpDir2, neighbours[0], neighbours[1]);
  return Math.abs(Math.PI / 2 - Vec3.angle(tmpDir2, tmpDir1));
}
function closestHydrogenIndex(structure, unitA, indexA, unitB, indexB) {
  let hIndex = indexA;
  unitA.conformation.position(unitA.elements[indexA], tmpPosA);
  unitB.conformation.position(unitB.elements[indexB], tmpPosB);
  Vec3.sub(tmpDir1, tmpPosB, tmpPosA);
  let minDistSq = Vec3.squaredDistance(tmpPosA, tmpPosB);
  eachBondedAtom(structure, unitA, indexA, (unitX, indexX) => {
    if (typeSymbol(unitX, indexX) === Elements.H) {
      unitX.conformation.position(unitX.elements[indexX], tmpPosX);
      const dist = Vec3.squaredDistance(tmpPosX, tmpPosB);
      if (dist < minDistSq) {
        minDistSq = dist;
        hIndex = indexX;
      }
    }
  });
  return hIndex;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/chemistry/valence-model.js
var tmpConjBondItA = new Bond.ElementBondIterator();
var tmpConjBondItB = new Bond.ElementBondIterator();
function isConjugated(structure, unit, index) {
  const element = typeSymbol(unit, index);
  const hetero = element === Elements.O || element === Elements.N;
  if (hetero && bondCount(structure, unit, index) === 4)
    return false;
  tmpConjBondItA.setElement(structure, unit, index);
  while (tmpConjBondItA.hasNext) {
    const bA = tmpConjBondItA.move();
    if (bA.order > 1)
      return true;
    if (hetero) {
      const elementB = typeSymbol(bA.otherUnit, bA.otherIndex);
      tmpConjBondItB.setElement(structure, bA.otherUnit, bA.otherIndex);
      while (tmpConjBondItB.hasNext) {
        const bB = tmpConjBondItB.move();
        if (bB.order > 1) {
          if ((elementB === Elements.P || elementB === Elements.S) && typeSymbol(bB.otherUnit, bB.otherIndex) === Elements.O) {
            continue;
          }
          return true;
        }
      }
    }
  }
  return false;
}
function explicitValence(structure, unit, index) {
  let v = 0;
  const { offset, edgeProps: { flags, order } } = unit.bonds;
  for (let i = offset[index], il = offset[index + 1]; i < il; ++i) {
    if (BondType.isCovalent(flags[i]))
      v += order[i];
  }
  structure.interUnitBonds.getEdgeIndices(index, unit.id).forEach((i) => {
    const b = structure.interUnitBonds.edges[i];
    if (BondType.isCovalent(b.props.flag))
      v += b.props.order;
  });
  return v;
}
var tmpChargeBondItA = new Bond.ElementBondIterator();
var tmpChargeBondItB = new Bond.ElementBondIterator();
function calculateHydrogensCharge(structure, unit, index, props, hasExplicitH) {
  const hydrogenCount = bondToElementCount(structure, unit, index, Elements.H);
  const element = typeSymbol(unit, index);
  let charge = formalCharge(unit, index);
  const assignCharge = props.assignCharge === "always" || props.assignCharge === "auto" && charge === 0;
  const assignH = props.assignH === "always" || props.assignH === "auto" && !hasExplicitH && hydrogenCount === 0;
  const degree = bondCount(structure, unit, index);
  const valence = explicitValence(structure, unit, index);
  const conjugated = isConjugated(structure, unit, index);
  const multiBond = valence - degree > 0;
  let implicitHCount = 0;
  let geom = AtomGeometry.Unknown;
  switch (element) {
    case Elements.H:
      if (assignCharge) {
        if (degree === 0) {
          charge = 1;
          geom = AtomGeometry.Spherical;
        } else if (degree === 1) {
          charge = 0;
          geom = AtomGeometry.Terminal;
        }
      }
      break;
    case Elements.C:
      if (assignCharge) {
        charge = 0;
      }
      if (assignH) {
        implicitHCount = Math.max(0, 4 - valence - Math.abs(charge));
      }
      geom = assignGeometry(degree + implicitHCount + Math.max(0, -charge));
      break;
    case Elements.N:
      if (assignCharge) {
        if (!assignH) {
          charge = valence - 3;
        } else if (conjugated && valence < 4) {
          if (degree - hydrogenCount === 1 && valence - hydrogenCount === 2) {
            charge = 1;
          } else {
            charge = 0;
          }
        } else {
          tmpChargeBondItA.setElement(structure, unit, index);
          while (tmpChargeBondItA.hasNext) {
            const b = tmpChargeBondItA.move();
            const elementB = typeSymbol(b.otherUnit, b.otherIndex);
            if (elementB === Elements.S || isMetal(elementB)) {
              charge = 0;
              break;
            } else {
              charge = 1;
            }
          }
        }
      }
      if (assignH) {
        implicitHCount = Math.max(0, 3 - valence + charge);
      }
      if (conjugated && !multiBond) {
        geom = assignGeometry(degree + implicitHCount - charge);
      } else {
        geom = assignGeometry(degree + implicitHCount + 1 - charge);
      }
      break;
    case Elements.O:
      if (assignCharge) {
        if (!assignH) {
          charge = valence - 2;
        }
        if (valence === 1) {
          tmpChargeBondItA.setElement(structure, unit, index);
          b1: while (tmpChargeBondItA.hasNext) {
            const bA = tmpChargeBondItA.move();
            tmpChargeBondItB.setElement(structure, bA.otherUnit, bA.otherIndex);
            while (tmpChargeBondItB.hasNext) {
              const bB = tmpChargeBondItB.move();
              if (!(bB.otherUnit === unit && bB.otherIndex === index) && typeSymbol(bB.otherUnit, bB.otherIndex) === Elements.O && bB.order === 2) {
                charge = -1;
                break b1;
              }
            }
          }
        }
      }
      if (assignH) {
        implicitHCount = Math.max(0, 2 - valence + charge);
      }
      if (conjugated && !multiBond) {
        geom = assignGeometry(degree + implicitHCount - charge + 1);
      } else {
        geom = assignGeometry(degree + implicitHCount - charge + 2);
      }
      break;
    case Elements.S:
      if (assignCharge) {
        if (!assignH) {
          if (valence <= 3 && bondToElementCount(structure, unit, index, Elements.O) === 0) {
            charge = valence - 2;
          } else {
            charge = 0;
          }
        }
      }
      if (assignH) {
        if (valence < 2) {
          implicitHCount = Math.max(0, 2 - valence + charge);
        }
      }
      if (valence <= 3) {
        geom = assignGeometry(degree + implicitHCount - charge + 2);
      }
      break;
    case Elements.F:
    case Elements.CL:
    case Elements.BR:
    case Elements.I:
    case Elements.AT:
      if (assignCharge) {
        charge = valence - 1;
      }
      break;
    case Elements.LI:
    case Elements.NA:
    case Elements.K:
    case Elements.RB:
    case Elements.CS:
    case Elements.FR:
      if (assignCharge) {
        charge = 1 - valence;
      }
      break;
    case Elements.BE:
    case Elements.MG:
    case Elements.CA:
    case Elements.SR:
    case Elements.BA:
    case Elements.RA:
      if (assignCharge) {
        charge = 2 - valence;
      }
      break;
    default:
      if (isDebugMode) {
        console.warn("Requested charge, protonation for an unhandled element", element);
      }
  }
  return [charge, implicitHCount, implicitHCount + hydrogenCount, geom];
}
function calcUnitValenceModel(structure, unit, props) {
  const n = unit.elements.length;
  const charge = new Int8Array(n);
  const implicitH = new Int8Array(n);
  const totalH = new Int8Array(n);
  const idealGeometry = new Int8Array(n);
  const hasParent = !!structure.parent;
  let mapping;
  if (hasParent) {
    const rootUnit = structure.root.unitMap.get(unit.id);
    mapping = SortedArray.indicesOf(rootUnit.elements, unit.elements);
    if (mapping.length !== unit.elements.length) {
      throw new Error("expected to find an index for every element");
    }
    unit = rootUnit;
    structure = structure.root;
  }
  let hasExplicitH = false;
  for (let i = 0; i < n; ++i) {
    const j = hasParent ? mapping[i] : i;
    if (typeSymbol(unit, j) === Elements.H) {
      hasExplicitH = true;
      break;
    }
  }
  for (let i = 0; i < n; ++i) {
    const j = hasParent ? mapping[i] : i;
    const [chg, implH, totH, geom] = calculateHydrogensCharge(structure, unit, j, props, hasExplicitH);
    charge[i] = chg;
    implicitH[i] = implH;
    totalH[i] = totH;
    idealGeometry[i] = geom;
  }
  return { charge, implicitH, totalH, idealGeometry };
}
var ValenceModelParams = {
  assignCharge: ParamDefinition.Select("auto", [["always", "always"], ["auto", "auto"], ["never", "never"]]),
  assignH: ParamDefinition.Select("auto", [["always", "always"], ["auto", "auto"], ["never", "never"]])
};
async function calcValenceModel(ctx, structure, props) {
  const p = { ...ParamDefinition.getDefaultValues(ValenceModelParams), ...props };
  const map2 = /* @__PURE__ */ new Map();
  const cacheKey = `valence-model-${JSON.stringify(p)}`;
  for (let i = 0, il = structure.units.length; i < il; ++i) {
    const u = structure.units[i];
    if (Unit.isAtomic(u)) {
      let valenceModel;
      if (u.transientCache.has(cacheKey)) {
        valenceModel = u.transientCache.get(cacheKey);
      } else {
        valenceModel = calcUnitValenceModel(structure, u, p);
        u.transientCache.set(cacheKey, valenceModel);
      }
      map2.set(u.id, valenceModel);
    }
  }
  return map2;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/valence-model.js
var ValenceModelParams2 = {
  ...ValenceModelParams
};
var ValenceModelProvider = CustomStructureProperty.createProvider({
  label: "Valence Model",
  descriptor: CustomPropertyDescriptor({
    name: "molstar_computed_valence_model"
    // TODO `cifExport` and `symbol`
  }),
  type: "local",
  defaultParams: ValenceModelParams2,
  getParams: (data) => ValenceModelParams2,
  isApplicable: (data) => true,
  obtain: async (ctx, data, props) => {
    const p = { ...ParamDefinition.getDefaultValues(ValenceModelParams2), ...props };
    return { value: await calcValenceModel(ctx.runtime, data, p) };
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/features.js
var Features;
(function(Features2) {
  function setPosition(out, unit, index, features) {
    Vec3.set(out, features.x[index], features.y[index], features.z[index]);
    Vec3.transformMat4(out, out, unit.conformation.operator.matrix);
    return out;
  }
  Features2.setPosition = setPosition;
  function createElementsIndex(data, elementsCount) {
    const offsets = new Int32Array(elementsCount + 1);
    const bucketFill = new Int32Array(elementsCount);
    const bucketSizes = new Int32Array(elementsCount);
    const { members, count, offsets: featureOffsets } = data;
    for (let i = 0, il = featureOffsets[count]; i < il; ++i)
      ++bucketSizes[members[i]];
    let offset = 0;
    for (let i = 0; i < elementsCount; i++) {
      offsets[i] = offset;
      offset += bucketSizes[i];
    }
    offsets[elementsCount] = offset;
    const indices = new Int32Array(offset);
    for (let i = 0; i < count; ++i) {
      for (let j = featureOffsets[i], jl = featureOffsets[i + 1]; j < jl; ++j) {
        const a = members[j];
        const oa = offsets[a] + bucketFill[a];
        indices[oa] = i;
        ++bucketFill[a];
      }
    }
    return { indices, offsets };
  }
  Features2.createElementsIndex = createElementsIndex;
  function create(elementsCount, data) {
    let lookup3d;
    let elementsIndex;
    return {
      ...data,
      get lookup3d() {
        if (!lookup3d) {
          const position2 = { x: data.x, y: data.y, z: data.z, indices: OrderedSet.ofBounds(0, data.count) };
          lookup3d = GridLookup3D(position2, getBoundary(position2));
        }
        return lookup3d;
      },
      get elementsIndex() {
        return elementsIndex || (elementsIndex = createElementsIndex(data, elementsCount));
      },
      subset: (types) => createSubset(data, types)
    };
  }
  Features2.create = create;
  function createSubset(data, types) {
    let lookup3d;
    const { count, types: _types } = data;
    const _indices = [];
    for (let i = 0; i < count; ++i) {
      if (types.has(_types[i]))
        _indices.push(i);
    }
    const indices = SortedArray.ofSortedArray(_indices);
    return {
      indices,
      get lookup3d() {
        if (!lookup3d) {
          const position2 = { x: data.x, y: data.y, z: data.z, indices };
          lookup3d = GridLookup3D(position2, getBoundary(position2));
        }
        return lookup3d;
      }
    };
  }
  Features2.createSubset = createSubset;
  function Info(structure, unit, features) {
    const valenceModel = ValenceModelProvider.get(structure).value;
    if (!valenceModel || !valenceModel.has(unit.id))
      throw new Error("valence model required");
    return {
      unit,
      types: features.types,
      feature: -1,
      x: features.x,
      y: features.y,
      z: features.z,
      members: features.members,
      offsets: features.offsets,
      idealGeometry: valenceModel.get(unit.id).idealGeometry
    };
  }
  Features2.Info = Info;
  function position(out, info) {
    Vec3.set(out, info.x[info.feature], info.y[info.feature], info.z[info.feature]);
    Vec3.transformMat4(out, out, info.unit.conformation.operator.matrix);
    return out;
  }
  Features2.position = position;
  const tmpVecA4 = Vec3();
  const tmpVecB4 = Vec3();
  function distance(infoA, infoB) {
    const elementA = infoA.members[infoA.offsets[infoA.feature]];
    const elementB = infoB.members[infoB.offsets[infoB.feature]];
    infoA.unit.conformation.position(infoA.unit.elements[elementA], tmpVecA4);
    infoB.unit.conformation.position(infoB.unit.elements[elementB], tmpVecB4);
    return Vec3.distance(tmpVecA4, tmpVecB4);
  }
  Features2.distance = distance;
  function Provider(types, add) {
    return { types: new Set(types), add };
  }
  Features2.Provider = Provider;
})(Features || (Features = {}));
var FeaturesBuilder;
(function(FeaturesBuilder2) {
  function create(initialCount = 2048, chunkSize = 1024, features) {
    const xCenters = ChunkedArray.create(Float32Array, 1, chunkSize, features ? features.x : initialCount);
    const yCenters = ChunkedArray.create(Float32Array, 1, chunkSize, features ? features.y : initialCount);
    const zCenters = ChunkedArray.create(Float32Array, 1, chunkSize, features ? features.z : initialCount);
    const types = ChunkedArray.create(Uint8Array, 1, chunkSize, features ? features.types : initialCount);
    const groups = ChunkedArray.create(Uint8Array, 1, chunkSize, features ? features.groups : initialCount);
    const offsets = ChunkedArray.create(Uint32Array, 1, chunkSize, features ? features.offsets : initialCount);
    const members = ChunkedArray.create(Uint32Array, 1, chunkSize, features ? features.members : initialCount);
    const state = { x: 0, y: 0, z: 0, offset: 0, count: 0 };
    return {
      startState: () => {
        state.x = 0;
        state.y = 0;
        state.z = 0;
        state.offset = members.elementCount;
        state.count = 0;
      },
      pushMember: (x, y, z, member) => {
        ChunkedArray.add(members, member);
        state.x += x;
        state.y += y;
        state.z += z;
        state.count += 1;
      },
      finishState: (type, group) => {
        const { count } = state;
        if (count === 0)
          return;
        ChunkedArray.add(types, type);
        ChunkedArray.add(groups, group);
        ChunkedArray.add(xCenters, state.x / count);
        ChunkedArray.add(yCenters, state.y / count);
        ChunkedArray.add(zCenters, state.z / count);
        ChunkedArray.add(offsets, state.offset);
      },
      add: (type, group, x, y, z, member) => {
        ChunkedArray.add(types, type);
        ChunkedArray.add(groups, group);
        ChunkedArray.add(xCenters, x);
        ChunkedArray.add(yCenters, y);
        ChunkedArray.add(zCenters, z);
        ChunkedArray.add(offsets, members.elementCount);
        ChunkedArray.add(members, member);
      },
      getFeatures: (elementsCount) => {
        ChunkedArray.add(offsets, members.elementCount);
        const x = ChunkedArray.compact(xCenters, true);
        const y = ChunkedArray.compact(yCenters, true);
        const z = ChunkedArray.compact(zCenters, true);
        const count = xCenters.elementCount;
        return Features.create(elementsCount, {
          x,
          y,
          z,
          count,
          types: ChunkedArray.compact(types, true),
          groups: ChunkedArray.compact(groups, true),
          offsets: ChunkedArray.compact(offsets, true),
          members: ChunkedArray.compact(members, true)
        });
      }
    };
  }
  FeaturesBuilder2.create = create;
})(FeaturesBuilder || (FeaturesBuilder = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/common.js
var InteractionsIntraContacts;
(function(InteractionsIntraContacts2) {
  function createElementsIndex(contacts, features, elementsCount) {
    const offsets = new Int32Array(elementsCount + 1);
    const bucketFill = new Int32Array(elementsCount);
    const bucketSizes = new Int32Array(elementsCount);
    const { members, offsets: featureOffsets } = features;
    for (let i = 0, il = contacts.edgeCount * 2; i < il; ++i) {
      const aI = contacts.a[i];
      const bI = contacts.b[i];
      if (aI > bI)
        continue;
      for (let j = featureOffsets[aI], jl = featureOffsets[aI + 1]; j < jl; ++j) {
        ++bucketSizes[members[j]];
      }
      for (let j = featureOffsets[bI], jl = featureOffsets[bI + 1]; j < jl; ++j) {
        ++bucketSizes[members[j]];
      }
    }
    let offset = 0;
    for (let i = 0; i < elementsCount; i++) {
      offsets[i] = offset;
      offset += bucketSizes[i];
    }
    offsets[elementsCount] = offset;
    const indices = new Int32Array(offset);
    for (let i = 0, il = contacts.edgeCount * 2; i < il; ++i) {
      const aI = contacts.a[i];
      const bI = contacts.b[i];
      if (aI > bI)
        continue;
      for (let j = featureOffsets[aI], jl = featureOffsets[aI + 1]; j < jl; ++j) {
        const m = members[j];
        const om = offsets[m] + bucketFill[m];
        indices[om] = i;
        ++bucketFill[m];
      }
      for (let j = featureOffsets[bI], jl = featureOffsets[bI + 1]; j < jl; ++j) {
        const m = members[j];
        const om = offsets[m] + bucketFill[m];
        indices[om] = i;
        ++bucketFill[m];
      }
    }
    return { indices, offsets };
  }
  InteractionsIntraContacts2.createElementsIndex = createElementsIndex;
})(InteractionsIntraContacts || (InteractionsIntraContacts = {}));
var InteractionsInterContacts = class extends InterUnitGraph {
  getContactIndicesForElement(index, unit) {
    return this.elementKeyIndex.get(this.getElementKey(index, unit.id)) || [];
  }
  getElementKey(index, unitId) {
    return `${index}|${unitId}`;
  }
  constructor(map2, unitsFeatures) {
    super(map2);
    this.elementKeyIndex = /* @__PURE__ */ new Map();
    for (let i = 0, il = this.edges.length; i < il; ++i) {
      const { unitA, indexA } = this.edges[i];
      const { offsets, members } = unitsFeatures.get(unitA);
      for (let j = offsets[indexA], jl = offsets[indexA + 1]; j < jl; ++j) {
        const vertexKey = this.getElementKey(members[j], unitA);
        const e = this.elementKeyIndex.get(vertexKey);
        if (e === void 0) {
          this.elementKeyIndex.set(vertexKey, [i]);
        } else {
          e.push(i);
        }
      }
    }
  }
};
var InteractionFlag;
(function(InteractionFlag2) {
  InteractionFlag2[InteractionFlag2["None"] = 0] = "None";
  InteractionFlag2[InteractionFlag2["Filtered"] = 1] = "Filtered";
})(InteractionFlag || (InteractionFlag = {}));
var InteractionType;
(function(InteractionType2) {
  InteractionType2[InteractionType2["Unknown"] = 0] = "Unknown";
  InteractionType2[InteractionType2["Ionic"] = 1] = "Ionic";
  InteractionType2[InteractionType2["CationPi"] = 2] = "CationPi";
  InteractionType2[InteractionType2["PiStacking"] = 3] = "PiStacking";
  InteractionType2[InteractionType2["HydrogenBond"] = 4] = "HydrogenBond";
  InteractionType2[InteractionType2["HalogenBond"] = 5] = "HalogenBond";
  InteractionType2[InteractionType2["Hydrophobic"] = 6] = "Hydrophobic";
  InteractionType2[InteractionType2["MetalCoordination"] = 7] = "MetalCoordination";
  InteractionType2[InteractionType2["WeakHydrogenBond"] = 8] = "WeakHydrogenBond";
})(InteractionType || (InteractionType = {}));
function interactionTypeLabel(type) {
  switch (type) {
    case InteractionType.HydrogenBond:
      return "Hydrogen Bond";
    case InteractionType.Hydrophobic:
      return "Hydrophobic Contact";
    case InteractionType.HalogenBond:
      return "Halogen Bond";
    case InteractionType.Ionic:
      return "Ionic Interaction";
    case InteractionType.MetalCoordination:
      return "Metal Coordination";
    case InteractionType.CationPi:
      return "Cation-Pi Interaction";
    case InteractionType.PiStacking:
      return "Pi Stacking";
    case InteractionType.WeakHydrogenBond:
      return "Weak Hydrogen Bond";
    case InteractionType.Unknown:
      return "Unknown Interaction";
  }
}
var FeatureType;
(function(FeatureType2) {
  FeatureType2[FeatureType2["None"] = 0] = "None";
  FeatureType2[FeatureType2["PositiveCharge"] = 1] = "PositiveCharge";
  FeatureType2[FeatureType2["NegativeCharge"] = 2] = "NegativeCharge";
  FeatureType2[FeatureType2["AromaticRing"] = 3] = "AromaticRing";
  FeatureType2[FeatureType2["HydrogenDonor"] = 4] = "HydrogenDonor";
  FeatureType2[FeatureType2["HydrogenAcceptor"] = 5] = "HydrogenAcceptor";
  FeatureType2[FeatureType2["HalogenDonor"] = 6] = "HalogenDonor";
  FeatureType2[FeatureType2["HalogenAcceptor"] = 7] = "HalogenAcceptor";
  FeatureType2[FeatureType2["HydrophobicAtom"] = 8] = "HydrophobicAtom";
  FeatureType2[FeatureType2["WeakHydrogenDonor"] = 9] = "WeakHydrogenDonor";
  FeatureType2[FeatureType2["IonicTypePartner"] = 10] = "IonicTypePartner";
  FeatureType2[FeatureType2["DativeBondPartner"] = 11] = "DativeBondPartner";
  FeatureType2[FeatureType2["TransitionMetal"] = 12] = "TransitionMetal";
  FeatureType2[FeatureType2["IonicTypeMetal"] = 13] = "IonicTypeMetal";
})(FeatureType || (FeatureType = {}));
var FeatureTypes;
(function(FeatureTypes2) {
  FeatureTypes2[FeatureTypes2["None"] = 0] = "None";
  FeatureTypes2[FeatureTypes2["PositiveCharge"] = 1] = "PositiveCharge";
  FeatureTypes2[FeatureTypes2["NegativeCharge"] = 2] = "NegativeCharge";
  FeatureTypes2[FeatureTypes2["AromaticRing"] = 3] = "AromaticRing";
  FeatureTypes2[FeatureTypes2["HydrogenDonor"] = 4] = "HydrogenDonor";
  FeatureTypes2[FeatureTypes2["HydrogenAcceptor"] = 5] = "HydrogenAcceptor";
  FeatureTypes2[FeatureTypes2["HalogenDonor"] = 6] = "HalogenDonor";
  FeatureTypes2[FeatureTypes2["HalogenAcceptor"] = 7] = "HalogenAcceptor";
  FeatureTypes2[FeatureTypes2["HydrophobicAtom"] = 8] = "HydrophobicAtom";
  FeatureTypes2[FeatureTypes2["WeakHydrogenDonor"] = 9] = "WeakHydrogenDonor";
  FeatureTypes2[FeatureTypes2["IonicTypePartner"] = 10] = "IonicTypePartner";
  FeatureTypes2[FeatureTypes2["DativeBondPartner"] = 11] = "DativeBondPartner";
  FeatureTypes2[FeatureTypes2["TransitionMetal"] = 12] = "TransitionMetal";
  FeatureTypes2[FeatureTypes2["IonicTypeMetal"] = 13] = "IonicTypeMetal";
})(FeatureTypes || (FeatureTypes = {}));
function featureTypeLabel(type) {
  switch (type) {
    case FeatureType.None:
      return "None";
    case FeatureType.PositiveCharge:
      return "Positive Charge";
    case FeatureType.NegativeCharge:
      return "Negative Charge";
    case FeatureType.AromaticRing:
      return "Aromatic Ring";
    case FeatureType.HydrogenDonor:
      return "Hydrogen Donor";
    case FeatureType.HydrogenAcceptor:
      return "Hydrogen Acceptor";
    case FeatureType.HalogenDonor:
      return "Halogen Donor";
    case FeatureType.HalogenAcceptor:
      return "Halogen Acceptor";
    case FeatureType.HydrophobicAtom:
      return "HydrophobicAtom";
    case FeatureType.WeakHydrogenDonor:
      return "Weak Hydrogen Donor";
    case FeatureType.IonicTypePartner:
      return "Ionic Type Partner";
    case FeatureType.DativeBondPartner:
      return "Dative Bond Partner";
    case FeatureType.TransitionMetal:
      return "Transition Metal";
    case FeatureType.IonicTypeMetal:
      return "Ionic Type Metal";
  }
}
var FeatureGroup;
(function(FeatureGroup2) {
  FeatureGroup2[FeatureGroup2["None"] = 0] = "None";
  FeatureGroup2[FeatureGroup2["QuaternaryAmine"] = 1] = "QuaternaryAmine";
  FeatureGroup2[FeatureGroup2["TertiaryAmine"] = 2] = "TertiaryAmine";
  FeatureGroup2[FeatureGroup2["Sulfonium"] = 3] = "Sulfonium";
  FeatureGroup2[FeatureGroup2["SulfonicAcid"] = 4] = "SulfonicAcid";
  FeatureGroup2[FeatureGroup2["Sulfate"] = 5] = "Sulfate";
  FeatureGroup2[FeatureGroup2["Phosphate"] = 6] = "Phosphate";
  FeatureGroup2[FeatureGroup2["Halocarbon"] = 7] = "Halocarbon";
  FeatureGroup2[FeatureGroup2["Guanidine"] = 8] = "Guanidine";
  FeatureGroup2[FeatureGroup2["Acetamidine"] = 9] = "Acetamidine";
  FeatureGroup2[FeatureGroup2["Carboxylate"] = 10] = "Carboxylate";
})(FeatureGroup || (FeatureGroup = {}));
function featureGroupLabel(group) {
  switch (group) {
    case FeatureGroup.None:
      return "None";
    case FeatureGroup.QuaternaryAmine:
      return "Quaternary Amine";
    case FeatureGroup.TertiaryAmine:
      return "Tertiary Amine";
    case FeatureGroup.Sulfonium:
      return "Sulfonium";
    case FeatureGroup.SulfonicAcid:
      return "Sulfonic Acid";
    case FeatureGroup.Sulfate:
      return "Sulfate";
    case FeatureGroup.Phosphate:
      return "Phosphate";
    case FeatureGroup.Halocarbon:
      return "Halocarbon";
    case FeatureGroup.Guanidine:
      return "Guanidine";
    case FeatureGroup.Acetamidine:
      return "Acetamidine";
    case FeatureGroup.Carboxylate:
      return "Carboxylate";
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/contacts-builder.js
var IntraContactsBuilder;
(function(IntraContactsBuilder2) {
  function create(features, elementsCount) {
    const aIndices = [];
    const bIndices = [];
    const types = [];
    return {
      add(indexA, indexB, type) {
        aIndices[aIndices.length] = indexA;
        bIndices[bIndices.length] = indexB;
        types[types.length] = type;
      },
      getContacts() {
        const builder = new IntAdjacencyGraph.EdgeBuilder(features.count, aIndices, bIndices);
        const type = new Int8Array(builder.slotCount);
        const flag = new Int8Array(builder.slotCount);
        for (let i = 0, _i = builder.edgeCount; i < _i; i++) {
          builder.addNextEdge();
          builder.assignProperty(type, types[i]);
        }
        const graph = builder.createGraph({ type, flag });
        let elementsIndex;
        const contacts = Object.defineProperty(graph, "elementsIndex", {
          get: () => {
            return elementsIndex || (elementsIndex = InteractionsIntraContacts.createElementsIndex(graph, features, elementsCount));
          }
        });
        return contacts;
      }
    };
  }
  IntraContactsBuilder2.create = create;
})(IntraContactsBuilder || (IntraContactsBuilder = {}));
var InterContactsBuilder;
(function(InterContactsBuilder2) {
  function create() {
    const builder = new InterUnitGraph.Builder();
    return {
      startUnitPair(unitA, unitB) {
        builder.startUnitPair(unitA.id, unitB.id);
      },
      finishUnitPair() {
        builder.finishUnitPair();
      },
      add(indexA, indexB, type) {
        builder.add(indexA, indexB, { type, flag: InteractionFlag.None });
      },
      getContacts(unitsFeatures) {
        return new InteractionsInterContacts(builder.getMap(), unitsFeatures);
      }
    };
  }
  InterContactsBuilder2.create = create;
})(InterContactsBuilder || (InterContactsBuilder = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/contacts.js
var ContactsParams = {
  lineOfSightDistFactor: ParamDefinition.Numeric(1, { min: 0, max: 3, step: 0.1 })
};
var MAX_LINE_OF_SIGHT_DISTANCE = 3;
function validPair(structure, infoA, infoB) {
  const indexA = infoA.members[infoA.offsets[infoA.feature]];
  const indexB = infoB.members[infoB.offsets[infoB.feature]];
  if (indexA === indexB && infoA.unit === infoB.unit)
    return false;
  const altA = altLoc(infoA.unit, indexA);
  const altB = altLoc(infoB.unit, indexB);
  if (altA && altB && altA !== altB)
    return false;
  if (infoA.unit === infoB.unit && infoA.unit.model.atomicHierarchy.residueAtomSegments.count > 1 && infoA.unit.residueIndex[infoA.unit.elements[indexA]] === infoB.unit.residueIndex[infoB.unit.elements[indexB]])
    return false;
  if (connectedTo(structure, infoA.unit, indexA, infoB.unit, indexB))
    return false;
  return true;
}
function invalidAltLoc(unitA, indexA, unitB, indexB) {
  const altA = altLoc(unitA, indexA);
  const altB = altLoc(unitB, indexB);
  return altA && altB && altA !== altB;
}
function isMember(element, info) {
  const { feature, offsets, members } = info;
  for (let i = offsets[feature], il = offsets[feature + 1]; i < il; ++i) {
    if (members[i] === element)
      return true;
  }
  return false;
}
var tmpVec = Vec3();
var tmpVecA = Vec3();
var tmpVecB = Vec3();
var lineOfSightLookupCtx = StructureLookup3DResultContext();
function checkLineOfSight(structure, infoA, infoB, distFactor) {
  const featureA = infoA.feature;
  const featureB = infoB.feature;
  const indexA = infoA.members[infoA.offsets[featureA]];
  const indexB = infoB.members[infoB.offsets[featureB]];
  Features.position(tmpVecA, infoA);
  Features.position(tmpVecB, infoB);
  Vec3.scale(tmpVec, Vec3.add(tmpVec, tmpVecA, tmpVecB), 0.5);
  const distMax = distFactor * MAX_LINE_OF_SIGHT_DISTANCE;
  const { count, indices, units, squaredDistances } = structure.lookup3d.find(tmpVec[0], tmpVec[1], tmpVec[2], distMax, lineOfSightLookupCtx);
  if (count === 0)
    return true;
  for (let r = 0; r < count; ++r) {
    const i = indices[r];
    const unit = units[r];
    if (!Unit.isAtomic(unit))
      continue;
    const element = typeSymbol(unit, i);
    if (element === Elements.H)
      continue;
    const vdw = VdwRadius(element);
    if (vdw * vdw * distFactor * distFactor <= squaredDistances[r])
      continue;
    if (invalidAltLoc(unit, i, infoA.unit, indexA) || invalidAltLoc(unit, i, infoB.unit, indexB))
      continue;
    if (infoA.unit === unit && isMember(i, infoA) || infoB.unit === unit && isMember(i, infoB))
      continue;
    unit.conformation.position(unit.elements[i], tmpVec);
    if (Vec3.squaredDistance(tmpVec, tmpVecA) < 1 || Vec3.squaredDistance(tmpVec, tmpVecB) < 1)
      continue;
    return false;
  }
  return true;
}
function addUnitContacts(structure, unit, features, builder, testers, props) {
  for (const tester of testers) {
    _addUnitContacts(structure, unit, features, builder, tester, props);
  }
}
function _addUnitContacts(structure, unit, features, builder, tester, props) {
  const { x, y, z } = features;
  const { lookup3d, indices: subsetIndices } = features.subset(tester.requiredFeatures);
  const infoA = Features.Info(structure, unit, features);
  const infoB = { ...infoA };
  const distFactor = props.lineOfSightDistFactor;
  for (let t = 0, tl = OrderedSet.size(subsetIndices); t < tl; ++t) {
    const i = OrderedSet.getAt(subsetIndices, t);
    const { count, indices, squaredDistances } = lookup3d.find(x[i], y[i], z[i], tester.maxDistance);
    if (count === 0)
      continue;
    infoA.feature = i;
    for (let r = 0; r < count; ++r) {
      const j = OrderedSet.getAt(subsetIndices, indices[r]);
      if (j <= i)
        continue;
      infoB.feature = j;
      if (!validPair(structure, infoA, infoB))
        continue;
      const type = tester.getType(structure, infoA, infoB, squaredDistances[r]);
      if (type && checkLineOfSight(structure, infoA, infoB, distFactor)) {
        builder.add(i, j, type);
      }
    }
  }
}
var _imageTransform = Mat4();
function addStructureContacts(structure, unitA, featuresA, unitB, featuresB, builder, testers, props) {
  const { count: countA, x: xA, y: yA, z: zA } = featuresA;
  const { lookup3d } = featuresB;
  const imageTransform = Mat4.mul(_imageTransform, unitB.conformation.operator.inverse, unitA.conformation.operator.matrix);
  const isNotIdentity = !Mat4.isIdentity(imageTransform);
  const imageA = Vec3();
  const maxDistance = Math.max(...testers.map((t) => t.maxDistance));
  const { center, radius } = lookup3d.boundary.sphere;
  const testDistanceSq = (radius + maxDistance) * (radius + maxDistance);
  const distFactor = props.lineOfSightDistFactor;
  const infoA = Features.Info(structure, unitA, featuresA);
  const infoB = Features.Info(structure, unitB, featuresB);
  builder.startUnitPair(unitA, unitB);
  for (let i = 0; i < countA; ++i) {
    Vec3.set(imageA, xA[i], yA[i], zA[i]);
    if (isNotIdentity)
      Vec3.transformMat4(imageA, imageA, imageTransform);
    if (Vec3.squaredDistance(imageA, center) > testDistanceSq)
      continue;
    const { indices, count, squaredDistances } = lookup3d.find(imageA[0], imageA[1], imageA[2], maxDistance);
    if (count === 0)
      continue;
    infoA.feature = i;
    for (let r = 0; r < count; ++r) {
      const j = indices[r];
      infoB.feature = j;
      if (!validPair(structure, infoA, infoB))
        continue;
      const distanceSq = squaredDistances[r];
      for (const tester of testers) {
        if (distanceSq < tester.maxDistance * tester.maxDistance) {
          const type = tester.getType(structure, infoA, infoB, distanceSq);
          if (type && checkLineOfSight(structure, infoA, infoB, distFactor)) {
            builder.add(i, j, type);
            break;
          }
        }
      }
    }
  }
  builder.finishUnitPair();
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/halogen-bonds.js
var HalogenBondsParams = {
  distanceMax: ParamDefinition.Numeric(4, { min: 1, max: 5, step: 0.1 }),
  angleMax: ParamDefinition.Numeric(30, { min: 0, max: 60, step: 1 })
};
var halBondElements = [Elements.CL, Elements.BR, Elements.I, Elements.AT];
function addUnitHalogenDonors(structure, unit, builder) {
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  for (let i = 0, il = elements.length; i < il; ++i) {
    const element = typeSymbol(unit, i);
    if (halBondElements.includes(element)) {
      builder.add(FeatureType.HalogenDonor, FeatureGroup.None, x[elements[i]], y[elements[i]], z[elements[i]], i);
    }
  }
}
var X = [Elements.N, Elements.O, Elements.S];
var Y = [Elements.C, Elements.N, Elements.P, Elements.S];
function addUnitHalogenAcceptors(structure, unit, builder) {
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  for (let i = 0, il = elements.length; i < il; ++i) {
    const element = typeSymbol(unit, i);
    if (X.includes(element)) {
      let flag = false;
      eachBondedAtom(structure, unit, i, (unitB, indexB) => {
        if (Y.includes(typeSymbol(unitB, indexB))) {
          flag = true;
        }
      });
      if (flag) {
        builder.add(FeatureType.HalogenAcceptor, FeatureGroup.None, x[elements[i]], y[elements[i]], z[elements[i]], i);
      }
    }
  }
}
function isHalogenBond(ti, tj) {
  return ti === FeatureType.HalogenAcceptor && tj === FeatureType.HalogenDonor || ti === FeatureType.HalogenDonor && tj === FeatureType.HalogenAcceptor;
}
var OptimalHalogenAngle = degToRad(180);
var OptimalAcceptorAngle = degToRad(120);
function getOptions(props) {
  return {
    angleMax: degToRad(props.angleMax)
  };
}
function testHalogenBond(structure, infoA, infoB, opts) {
  const typeA = infoA.types[infoA.feature];
  const typeB = infoB.types[infoB.feature];
  if (!isHalogenBond(typeA, typeB))
    return;
  const [don, acc] = typeA === FeatureType.HalogenDonor ? [infoA, infoB] : [infoB, infoA];
  const donIndex = don.members[don.offsets[don.feature]];
  const accIndex = acc.members[acc.offsets[acc.feature]];
  const [halogenAngles] = calcAngles(structure, don.unit, donIndex, acc.unit, accIndex);
  if (halogenAngles.length !== 1)
    return;
  if (OptimalHalogenAngle - halogenAngles[0] > opts.angleMax)
    return;
  const [acceptorAngles] = calcAngles(structure, acc.unit, accIndex, don.unit, donIndex);
  if (acceptorAngles.length === 0)
    return;
  if (acceptorAngles.some((acceptorAngle) => OptimalAcceptorAngle - acceptorAngle > opts.angleMax))
    return;
  return InteractionType.HalogenBond;
}
var HalogenDonorProvider = Features.Provider([FeatureType.HalogenDonor], addUnitHalogenDonors);
var HalogenAcceptorProvider = Features.Provider([FeatureType.HalogenAcceptor], addUnitHalogenAcceptors);
var HalogenBondsProvider = {
  name: "halogen-bonds",
  params: HalogenBondsParams,
  createTester: (props) => {
    const opts = getOptions(props);
    return {
      maxDistance: props.distanceMax,
      requiredFeatures: /* @__PURE__ */ new Set([FeatureType.HalogenDonor, FeatureType.HalogenAcceptor]),
      getType: (structure, infoA, infoB) => testHalogenBond(structure, infoA, infoB, opts)
    };
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/hydrogen-bonds.js
var GeometryParams = {
  distanceMax: ParamDefinition.Numeric(3.5, { min: 1, max: 5, step: 0.1 }),
  backbone: ParamDefinition.Boolean(true, { description: "Include backbone-to-backbone hydrogen bonds" }),
  accAngleDevMax: ParamDefinition.Numeric(45, { min: 0, max: 180, step: 1 }, { description: "Max deviation from ideal acceptor angle" }),
  ignoreHydrogens: ParamDefinition.Boolean(false, { description: "Ignore explicit hydrogens in geometric constraints" }),
  donAngleDevMax: ParamDefinition.Numeric(45, { min: 0, max: 180, step: 1 }, { description: "Max deviation from ideal donor angle" }),
  accOutOfPlaneAngleMax: ParamDefinition.Numeric(90, { min: 0, max: 180, step: 1 }),
  donOutOfPlaneAngleMax: ParamDefinition.Numeric(45, { min: 0, max: 180, step: 1 })
};
var HydrogenBondsParams = {
  ...GeometryParams,
  water: ParamDefinition.Boolean(false, { description: "Include water-to-water hydrogen bonds" }),
  sulfurDistanceMax: ParamDefinition.Numeric(4.1, { min: 1, max: 5, step: 0.1 })
};
var WeakHydrogenBondsParams = {
  ...GeometryParams
};
function getUnitValenceModel(structure, unit) {
  const valenceModel = ValenceModelProvider.get(structure).value;
  if (!valenceModel)
    throw Error("expected valence model to be available");
  const unitValenceModel = valenceModel.get(unit.id);
  if (!unitValenceModel)
    throw Error("expected valence model for unit to be available");
  return unitValenceModel;
}
function addUnitHydrogenDonors(structure, unit, builder) {
  const { totalH } = getUnitValenceModel(structure, unit);
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  for (let i = 0, il = elements.length; i < il; ++i) {
    const element = typeSymbol(unit, i);
    if (
      // include both nitrogen atoms in histidine due to
      // their often ambiguous protonation assignment
      isHistidineNitrogen(unit, i) || totalH[i] > 0 && (element === Elements.N || element === Elements.O || element === Elements.S)
    ) {
      builder.add(FeatureType.HydrogenDonor, FeatureGroup.None, x[elements[i]], y[elements[i]], z[elements[i]], i);
    }
  }
}
function addUnitWeakHydrogenDonors(structure, unit, builder) {
  const { totalH } = getUnitValenceModel(structure, unit);
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  for (let i = 0, il = elements.length; i < il; ++i) {
    if (typeSymbol(unit, i) === Elements.C && totalH[i] > 0 && (bondToElementCount(structure, unit, i, Elements.N) > 0 || bondToElementCount(structure, unit, i, Elements.O) > 0 || inAromaticRingWithElectronNegativeElement(unit, i))) {
      builder.add(FeatureType.WeakHydrogenDonor, FeatureGroup.None, x[elements[i]], y[elements[i]], z[elements[i]], i);
    }
  }
}
function inAromaticRingWithElectronNegativeElement(unit, index) {
  const { elementAromaticRingIndices, all } = unit.rings;
  const ringIndices = elementAromaticRingIndices.get(index);
  if (ringIndices === void 0)
    return false;
  for (let i = 0, il = ringIndices.length; i < il; ++i) {
    const ring = all[ringIndices[i]];
    for (let j = 0, jl = ring.length; j < jl; ++j) {
      const element = typeSymbol(unit, ring[j]);
      if (element === Elements.N || element === Elements.O) {
        return true;
      }
    }
  }
  return false;
}
function addUnitHydrogenAcceptors(structure, unit, builder) {
  const { charge, implicitH, idealGeometry } = getUnitValenceModel(structure, unit);
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  const add = (i) => {
    builder.add(FeatureType.HydrogenAcceptor, FeatureGroup.None, x[elements[i]], y[elements[i]], z[elements[i]], i);
  };
  for (let i = 0, il = elements.length; i < il; ++i) {
    const element = typeSymbol(unit, i);
    if (element === Elements.O) {
      add(i);
    } else if (element === Elements.N) {
      if (isHistidineNitrogen(unit, i)) {
        add(i);
      } else if (charge[i] < 1) {
        const totalBonds = bondCount(structure, unit, i) + implicitH[i];
        const ig = idealGeometry[i];
        if (ig === AtomGeometry.Tetrahedral && totalBonds < 4 || ig === AtomGeometry.Trigonal && totalBonds < 3 || ig === AtomGeometry.Linear && totalBonds < 2) {
          add(i);
        }
      }
    } else if (element === Elements.S) {
      const resname = compId(unit, i);
      if (resname === "CYS" || resname === "MET" || formalCharge(unit, i) === -1) {
        add(i);
      }
    }
  }
}
function isWater(unit, index) {
  return unit.model.atomicHierarchy.derived.residue.moleculeType[unit.residueIndex[unit.elements[index]]] === MoleculeType.Water;
}
function isBackbone(unit, index) {
  return ProteinBackboneAtoms.has(atomId(unit, index));
}
function isRing(unit, index) {
  return unit.rings.elementRingIndices.has(index);
}
function isHistidineNitrogen(unit, index) {
  return compId(unit, index) === "HIS" && typeSymbol(unit, index) === Elements.N && isRing(unit, index);
}
function isBackboneHydrogenBond(unitA, indexA, unitB, indexB) {
  return isBackbone(unitA, indexA) && isBackbone(unitB, indexB);
}
function isWaterHydrogenBond(unitA, indexA, unitB, indexB) {
  return isWater(unitA, indexA) && isWater(unitB, indexB);
}
function isHydrogenBond(ti, tj) {
  return ti === FeatureType.HydrogenAcceptor && tj === FeatureType.HydrogenDonor || ti === FeatureType.HydrogenDonor && tj === FeatureType.HydrogenAcceptor;
}
function isWeakHydrogenBond(ti, tj) {
  return ti === FeatureType.WeakHydrogenDonor && tj === FeatureType.HydrogenAcceptor || ti === FeatureType.HydrogenAcceptor && tj === FeatureType.WeakHydrogenDonor;
}
function getGeometryOptions(props) {
  return {
    ignoreHydrogens: props.ignoreHydrogens,
    includeBackbone: props.backbone,
    maxAccAngleDev: degToRad(props.accAngleDevMax),
    maxDonAngleDev: degToRad(props.donAngleDevMax),
    maxAccOutOfPlaneAngle: degToRad(props.accOutOfPlaneAngleMax),
    maxDonOutOfPlaneAngle: degToRad(props.donOutOfPlaneAngleMax)
  };
}
function getHydrogenBondsOptions(props) {
  return {
    ...getGeometryOptions(props),
    includeWater: props.water,
    maxSulfurDistSq: props.sulfurDistanceMax * props.sulfurDistanceMax,
    maxDistSq: props.distanceMax * props.distanceMax
  };
}
var deg120InRad = degToRad(120);
function checkGeometry(structure, don, acc, opts) {
  const donIndex = don.members[don.offsets[don.feature]];
  const accIndex = acc.members[acc.offsets[acc.feature]];
  if (!opts.includeBackbone && isBackboneHydrogenBond(don.unit, donIndex, acc.unit, accIndex))
    return;
  const [donAngles, donHAngles] = calcAngles(structure, don.unit, donIndex, acc.unit, accIndex, opts.ignoreHydrogens);
  const idealDonAngle = AtomGeometryAngles.get(don.idealGeometry[donIndex]) || deg120InRad;
  if (donAngles.some((donAngle) => Math.abs(idealDonAngle - donAngle) > opts.maxDonAngleDev))
    return;
  if (donHAngles.length && !donHAngles.some((donHAngles2) => donHAngles2 < opts.maxDonAngleDev))
    return;
  if (don.idealGeometry[donIndex] === AtomGeometry.Trigonal) {
    const outOfPlane = calcPlaneAngle(structure, don.unit, donIndex, acc.unit, accIndex);
    if (outOfPlane !== void 0 && outOfPlane > opts.maxDonOutOfPlaneAngle)
      return;
  }
  let donorIndex = donIndex;
  if (!opts.ignoreHydrogens && donHAngles.length > 0) {
    donorIndex = closestHydrogenIndex(structure, don.unit, donIndex, acc.unit, accIndex);
  }
  const [accAngles, accHAngles] = calcAngles(structure, acc.unit, accIndex, don.unit, donorIndex, opts.ignoreHydrogens);
  const idealAccAngle = AtomGeometryAngles.get(acc.idealGeometry[accIndex]) || deg120InRad;
  if (accAngles.some((accAngle) => idealAccAngle - accAngle > opts.maxAccAngleDev))
    return;
  if (accHAngles.some((accHAngles2) => idealAccAngle - accHAngles2 > opts.maxAccAngleDev))
    return;
  if (acc.idealGeometry[accIndex] === AtomGeometry.Trigonal) {
    const outOfPlane = calcPlaneAngle(structure, acc.unit, accIndex, don.unit, donIndex);
    if (outOfPlane !== void 0 && outOfPlane > opts.maxAccOutOfPlaneAngle)
      return;
  }
  return true;
}
function testHydrogenBond(structure, infoA, infoB, distanceSq, opts) {
  const typeA = infoA.types[infoA.feature];
  const typeB = infoB.types[infoB.feature];
  if (!isHydrogenBond(typeA, typeB))
    return;
  const [don, acc] = typeB === FeatureType.HydrogenAcceptor ? [infoA, infoB] : [infoB, infoA];
  const donIndex = don.members[don.offsets[don.feature]];
  const accIndex = acc.members[acc.offsets[acc.feature]];
  const maxDistSq = typeSymbol(don.unit, donIndex) === Elements.S || typeSymbol(acc.unit, accIndex) === Elements.S ? opts.maxSulfurDistSq : opts.maxDistSq;
  if (distanceSq > maxDistSq)
    return;
  if (!opts.includeWater && isWaterHydrogenBond(don.unit, donIndex, acc.unit, accIndex))
    return;
  if (!checkGeometry(structure, don, acc, opts))
    return;
  return InteractionType.HydrogenBond;
}
function testWeakHydrogenBond(structure, infoA, infoB, distanceSq, opts) {
  const typeA = infoA.types[infoA.feature];
  const typeB = infoB.types[infoB.feature];
  if (!isWeakHydrogenBond(typeA, typeB))
    return;
  const [don, acc] = typeB === FeatureType.HydrogenAcceptor ? [infoA, infoB] : [infoB, infoA];
  if (!checkGeometry(structure, don, acc, opts))
    return;
  return InteractionType.WeakHydrogenBond;
}
var HydrogenDonorProvider = Features.Provider([FeatureType.HydrogenDonor], addUnitHydrogenDonors);
var WeakHydrogenDonorProvider = Features.Provider([FeatureType.WeakHydrogenDonor], addUnitWeakHydrogenDonors);
var HydrogenAcceptorProvider = Features.Provider([FeatureType.HydrogenAcceptor], addUnitHydrogenAcceptors);
var HydrogenBondsProvider = {
  name: "hydrogen-bonds",
  params: HydrogenBondsParams,
  createTester: (props) => {
    const maxDistance = Math.max(props.distanceMax, props.sulfurDistanceMax);
    const opts = getHydrogenBondsOptions(props);
    return {
      maxDistance,
      requiredFeatures: /* @__PURE__ */ new Set([FeatureType.HydrogenDonor, FeatureType.HydrogenAcceptor]),
      getType: (structure, infoA, infoB, distanceSq) => testHydrogenBond(structure, infoA, infoB, distanceSq, opts)
    };
  }
};
var WeakHydrogenBondsProvider = {
  name: "weak-hydrogen-bonds",
  params: WeakHydrogenBondsParams,
  createTester: (props) => {
    const opts = getGeometryOptions(props);
    return {
      maxDistance: props.distanceMax,
      requiredFeatures: /* @__PURE__ */ new Set([FeatureType.WeakHydrogenDonor, FeatureType.HydrogenAcceptor]),
      getType: (structure, infoA, infoB, distanceSq) => testWeakHydrogenBond(structure, infoA, infoB, distanceSq, opts)
    };
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/charged.js
var IonicParams = {
  distanceMax: ParamDefinition.Numeric(5, { min: 0, max: 8, step: 0.1 })
};
var PiStackingParams = {
  distanceMax: ParamDefinition.Numeric(5.5, { min: 1, max: 8, step: 0.1 }),
  offsetMax: ParamDefinition.Numeric(2, { min: 0, max: 4, step: 0.1 }),
  angleDevMax: ParamDefinition.Numeric(30, { min: 0, max: 180, step: 1 })
};
var CationPiParams = {
  distanceMax: ParamDefinition.Numeric(6, { min: 1, max: 8, step: 0.1 }),
  offsetMax: ParamDefinition.Numeric(2, { min: 0, max: 4, step: 0.1 })
};
var PositvelyCharged = ["ARG", "HIS", "LYS"];
var NegativelyCharged = ["GLU", "ASP"];
function getUnitValenceModel2(structure, unit) {
  const valenceModel = ValenceModelProvider.get(structure).value;
  if (!valenceModel)
    throw Error("expected valence model to be available");
  const unitValenceModel = valenceModel.get(unit.id);
  if (!unitValenceModel)
    throw Error("expected valence model for unit to be available");
  return unitValenceModel;
}
function addUnitPositiveCharges(structure, unit, builder) {
  const { charge } = getUnitValenceModel2(structure, unit);
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  const addedElements = /* @__PURE__ */ new Set();
  const { label_comp_id } = unit.model.atomicHierarchy.atoms;
  const residueIt = Segmentation.transientSegments(unit.model.atomicHierarchy.residueAtomSegments, elements);
  while (residueIt.hasNext) {
    const { index: residueIndex, start, end } = residueIt.move();
    const compId2 = label_comp_id.value(unit.model.atomicHierarchy.residueAtomSegments.offsets[residueIndex]);
    if (PositvelyCharged.includes(compId2)) {
      builder.startState();
      for (let j = start; j < end; ++j) {
        if (typeSymbol(unit, j) === Elements.N && !ProteinBackboneAtoms.has(atomId(unit, j))) {
          builder.pushMember(x[elements[j]], y[elements[j]], z[elements[j]], j);
        }
      }
      builder.finishState(FeatureType.PositiveCharge, FeatureGroup.None);
    } else if (!PolymerNames.has(compId2)) {
      addedElements.clear();
      for (let j = start; j < end; ++j) {
        let group = FeatureGroup.None;
        if (isGuanidine(structure, unit, j)) {
          group = FeatureGroup.Guanidine;
        } else if (isAcetamidine(structure, unit, j)) {
          group = FeatureGroup.Acetamidine;
        }
        if (group) {
          builder.startState();
          eachBondedAtom(structure, unit, j, (_, k) => {
            if (typeSymbol(unit, k) === Elements.N) {
              addedElements.add(k);
              builder.pushMember(x[elements[k]], y[elements[k]], z[elements[k]], k);
            }
          });
          builder.finishState(FeatureType.PositiveCharge, group);
        }
      }
      for (let j = start; j < end; ++j) {
        if (charge[j] > 0 && !addedElements.has(j)) {
          builder.add(FeatureType.PositiveCharge, FeatureGroup.None, x[elements[j]], y[elements[j]], z[elements[j]], j);
        }
      }
    }
  }
}
function addUnitNegativeCharges(structure, unit, builder) {
  const { charge } = getUnitValenceModel2(structure, unit);
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  const addedElements = /* @__PURE__ */ new Set();
  const { label_comp_id } = unit.model.atomicHierarchy.atoms;
  const residueIt = Segmentation.transientSegments(unit.model.atomicHierarchy.residueAtomSegments, elements);
  while (residueIt.hasNext) {
    const { index: residueIndex, start, end } = residueIt.move();
    const compId2 = label_comp_id.value(unit.model.atomicHierarchy.residueAtomSegments.offsets[residueIndex]);
    if (NegativelyCharged.includes(compId2)) {
      builder.startState();
      for (let j = start; j < end; ++j) {
        if (typeSymbol(unit, j) === Elements.O && !ProteinBackboneAtoms.has(atomId(unit, j))) {
          builder.pushMember(x[elements[j]], y[elements[j]], z[elements[j]], j);
        }
      }
      builder.finishState(FeatureType.NegativeCharge, FeatureGroup.None);
    } else if (BaseNames.has(compId2)) {
      for (let j = start; j < end; ++j) {
        if (isPhosphate(structure, unit, j)) {
          builder.startState();
          eachBondedAtom(structure, unit, j, (_, k) => {
            if (typeSymbol(unit, k) === Elements.O) {
              builder.pushMember(x[elements[k]], y[elements[k]], z[elements[k]], k);
            }
          });
          builder.finishState(FeatureType.NegativeCharge, FeatureGroup.Phosphate);
        }
      }
    } else if (!PolymerNames.has(compId2)) {
      for (let j = start; j < end; ++j) {
        builder.startState();
        if (typeSymbol(unit, j) === Elements.N && !ProteinBackboneAtoms.has(atomId(unit, j))) {
          builder.pushMember(x[elements[j]], y[elements[j]], z[elements[j]], j);
        }
        builder.finishState(FeatureType.NegativeCharge, FeatureGroup.None);
        let group = FeatureGroup.None;
        if (isSulfonicAcid(structure, unit, j)) {
          group = FeatureGroup.SulfonicAcid;
        } else if (isPhosphate(structure, unit, j)) {
          group = FeatureGroup.Phosphate;
        } else if (isSulfate(structure, unit, j)) {
          group = FeatureGroup.Sulfate;
        } else if (isCarboxylate(structure, unit, j)) {
          group = FeatureGroup.Carboxylate;
        }
        if (group) {
          builder.startState();
          eachBondedAtom(structure, unit, j, (_, k) => {
            if (typeSymbol(unit, k) === Elements.O) {
              addedElements.add(k);
              builder.pushMember(x[elements[k]], y[elements[k]], z[elements[k]], k);
            }
          });
          builder.finishState(FeatureType.NegativeCharge, group);
        }
      }
      for (let j = start; j < end; ++j) {
        if (charge[j] < 0 && !addedElements.has(j)) {
          builder.add(FeatureType.NegativeCharge, FeatureGroup.None, x[elements[j]], y[elements[j]], z[elements[j]], j);
        }
      }
    }
  }
}
function addUnitAromaticRings(structure, unit, builder) {
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  for (const ringIndex of unit.rings.aromaticRings) {
    const ring = unit.rings.all[ringIndex];
    builder.startState();
    for (let i = 0, il = ring.length; i < il; ++i) {
      const j = ring[i];
      builder.pushMember(x[elements[j]], y[elements[j]], z[elements[j]], j);
    }
    builder.finishState(FeatureType.AromaticRing, FeatureGroup.None);
  }
}
function isIonic(ti, tj) {
  return ti === FeatureType.NegativeCharge && tj === FeatureType.PositiveCharge || ti === FeatureType.PositiveCharge && tj === FeatureType.NegativeCharge;
}
function isPiStacking(ti, tj) {
  return ti === FeatureType.AromaticRing && tj === FeatureType.AromaticRing;
}
function isCationPi(ti, tj) {
  return ti === FeatureType.AromaticRing && tj === FeatureType.PositiveCharge || ti === FeatureType.PositiveCharge && tj === FeatureType.AromaticRing;
}
var tmpPointA = Vec3();
var tmpPointB = Vec3();
function areFeaturesWithinDistanceSq(infoA, infoB, distanceSq) {
  const { feature: featureA, offsets: offsetsA, members: membersA } = infoA;
  const { feature: featureB, offsets: offsetsB, members: membersB } = infoB;
  for (let i = offsetsA[featureA], il = offsetsA[featureA + 1]; i < il; ++i) {
    const elementA = membersA[i];
    infoA.unit.conformation.position(infoA.unit.elements[elementA], tmpPointA);
    for (let j = offsetsB[featureB], jl = offsetsB[featureB + 1]; j < jl; ++j) {
      const elementB = membersB[j];
      infoB.unit.conformation.position(infoB.unit.elements[elementB], tmpPointB);
      if (Vec3.squaredDistance(tmpPointA, tmpPointB) < distanceSq)
        return true;
    }
  }
  return false;
}
var tmpVecA2 = Vec3();
var tmpVecB2 = Vec3();
var tmpVecC = Vec3();
var tmpVecD = Vec3();
function getNormal(out, info) {
  const { unit, feature, offsets, members } = info;
  const { elements } = unit;
  const i = offsets[feature];
  info.unit.conformation.position(elements[members[i]], tmpVecA2);
  info.unit.conformation.position(elements[members[i + 1]], tmpVecB2);
  info.unit.conformation.position(elements[members[i + 2]], tmpVecC);
  return Vec3.triangleNormal(out, tmpVecA2, tmpVecB2, tmpVecC);
}
var getOffset = function(infoA, infoB, normal) {
  Features.position(tmpVecA2, infoA);
  Features.position(tmpVecB2, infoB);
  Vec3.sub(tmpVecC, tmpVecA2, tmpVecB2);
  Vec3.projectOnPlane(tmpVecD, tmpVecC, normal);
  Vec3.add(tmpVecD, tmpVecD, tmpVecB2);
  return Vec3.distance(tmpVecD, tmpVecB2);
};
function getIonicOptions(props) {
  return {
    distanceMaxSq: props.distanceMax * props.distanceMax
  };
}
function getPiStackingOptions(props) {
  return {
    offsetMax: props.offsetMax,
    angleDevMax: degToRad(props.angleDevMax)
  };
}
function getCationPiOptions(props) {
  return {
    offsetMax: props.offsetMax
  };
}
var deg180InRad = degToRad(180);
var deg90InRad = degToRad(90);
var tmpNormalA = Vec3();
var tmpNormalB = Vec3();
function testIonic(structure, infoA, infoB, distanceSq, opts) {
  const typeA = infoA.types[infoA.feature];
  const typeB = infoB.types[infoB.feature];
  if (isIonic(typeA, typeB)) {
    if (areFeaturesWithinDistanceSq(infoA, infoB, opts.distanceMaxSq)) {
      return InteractionType.Ionic;
    }
  }
}
function testPiStacking(structure, infoA, infoB, distanceSq, opts) {
  const typeA = infoA.types[infoA.feature];
  const typeB = infoB.types[infoB.feature];
  if (isPiStacking(typeA, typeB)) {
    getNormal(tmpNormalA, infoA);
    getNormal(tmpNormalB, infoB);
    const angle = Vec3.angle(tmpNormalA, tmpNormalB);
    const offset = Math.min(getOffset(infoA, infoB, tmpNormalB), getOffset(infoB, infoA, tmpNormalA));
    if (offset <= opts.offsetMax) {
      if (angle <= opts.angleDevMax || angle >= deg180InRad - opts.angleDevMax) {
        return InteractionType.PiStacking;
      } else if (angle <= opts.angleDevMax + deg90InRad && angle >= deg90InRad - opts.angleDevMax) {
        return InteractionType.PiStacking;
      }
    }
  }
}
function testCationPi(structure, infoA, infoB, distanceSq, opts) {
  const typeA = infoA.types[infoA.feature];
  const typeB = infoB.types[infoB.feature];
  if (isCationPi(typeA, typeB)) {
    const [infoR, infoC] = typeA === FeatureType.AromaticRing ? [infoA, infoB] : [infoB, infoA];
    getNormal(tmpNormalA, infoR);
    const offset = getOffset(infoC, infoR, tmpNormalA);
    if (offset <= opts.offsetMax) {
      return InteractionType.CationPi;
    }
  }
}
var NegativChargeProvider = Features.Provider([FeatureType.NegativeCharge], addUnitNegativeCharges);
var PositiveChargeProvider = Features.Provider([FeatureType.PositiveCharge], addUnitPositiveCharges);
var AromaticRingProvider = Features.Provider([FeatureType.AromaticRing], addUnitAromaticRings);
var IonicProvider = {
  name: "ionic",
  params: IonicParams,
  createTester: (props) => {
    const opts = getIonicOptions(props);
    return {
      maxDistance: props.distanceMax,
      requiredFeatures: /* @__PURE__ */ new Set([FeatureType.NegativeCharge, FeatureType.PositiveCharge]),
      getType: (structure, infoA, infoB, distanceSq) => testIonic(structure, infoA, infoB, distanceSq, opts)
    };
  }
};
var PiStackingProvider = {
  name: "pi-stacking",
  params: PiStackingParams,
  createTester: (props) => {
    const opts = getPiStackingOptions(props);
    return {
      maxDistance: props.distanceMax,
      requiredFeatures: /* @__PURE__ */ new Set([FeatureType.AromaticRing]),
      getType: (structure, infoA, infoB, distanceSq) => testPiStacking(structure, infoA, infoB, distanceSq, opts)
    };
  }
};
var CationPiProvider = {
  name: "cation-pi",
  params: CationPiParams,
  createTester: (props) => {
    const opts = getCationPiOptions(props);
    return {
      maxDistance: props.distanceMax,
      requiredFeatures: /* @__PURE__ */ new Set([FeatureType.AromaticRing, FeatureType.PositiveCharge]),
      getType: (structure, infoA, infoB, distanceSq) => testCationPi(structure, infoA, infoB, distanceSq, opts)
    };
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/hydrophobic.js
var HydrophobicParams = {
  distanceMax: ParamDefinition.Numeric(4, { min: 1, max: 5, step: 0.1 })
};
function addHydrophobicAtom(structure, unit, builder) {
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  for (let i = 0, il = elements.length; i < il; ++i) {
    const element = typeSymbol(unit, i);
    let flag = false;
    if (element === Elements.C) {
      flag = true;
      eachBondedAtom(structure, unit, i, (unitB, indexB) => {
        const elementB = typeSymbol(unitB, indexB);
        if (elementB !== Elements.C && elementB !== Elements.H)
          flag = false;
      });
    } else if (element === Elements.F) {
      flag = true;
    }
    if (flag) {
      builder.add(FeatureType.HydrophobicAtom, FeatureGroup.None, x[elements[i]], y[elements[i]], z[elements[i]], i);
    }
  }
}
function isHydrophobicContact(ti, tj) {
  return ti === FeatureType.HydrophobicAtom && tj === FeatureType.HydrophobicAtom;
}
function testHydrophobic(structure, infoA, infoB, distanceSq) {
  const typeA = infoA.types[infoA.feature];
  const typeB = infoB.types[infoB.feature];
  if (!isHydrophobicContact(typeA, typeB))
    return;
  const indexA = infoA.members[infoA.offsets[infoA.feature]];
  const indexB = infoB.members[infoB.offsets[infoB.feature]];
  if (typeSymbol(infoA.unit, indexA) === Elements.F && typeSymbol(infoB.unit, indexB) === Elements.F)
    return;
  return InteractionType.Hydrophobic;
}
var HydrophobicAtomProvider = Features.Provider([FeatureType.HydrophobicAtom], addHydrophobicAtom);
var HydrophobicProvider = {
  name: "hydrophobic",
  params: HydrophobicParams,
  createTester: (props) => {
    return {
      maxDistance: props.distanceMax,
      requiredFeatures: /* @__PURE__ */ new Set([FeatureType.HydrophobicAtom]),
      getType: (structure, infoA, infoB, distanceSq) => testHydrophobic(structure, infoA, infoB, distanceSq)
    };
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/metal.js
var MetalCoordinationParams = {
  distanceMax: ParamDefinition.Numeric(3, { min: 1, max: 5, step: 0.1 })
};
var IonicTypeMetals = [
  Elements.LI,
  Elements.NA,
  Elements.K,
  Elements.RB,
  Elements.CS,
  Elements.MG,
  Elements.CA,
  Elements.SR,
  Elements.BA,
  Elements.AL,
  Elements.GA,
  Elements.IN,
  Elements.TL,
  Elements.SC,
  Elements.SN,
  Elements.PB,
  Elements.BI,
  Elements.SB,
  Elements.HG
];
function addMetal(structure, unit, builder) {
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  for (let i = 0, il = elements.length; i < il; ++i) {
    const element = typeSymbol(unit, i);
    let type = FeatureType.None;
    if (IonicTypeMetals.includes(element)) {
      type = FeatureType.IonicTypeMetal;
    } else if (isTransitionMetal(element) || element === Elements.ZN || element === Elements.CD) {
      type = FeatureType.TransitionMetal;
    }
    if (type) {
      builder.add(type, FeatureGroup.None, x[elements[i]], y[elements[i]], z[elements[i]], i);
    }
  }
}
function isProteinSidechain(atomname) {
  return !ProteinBackboneAtoms.has(atomname);
}
function isProteinBackbone(atomname) {
  return ProteinBackboneAtoms.has(atomname);
}
function isNucleicBackbone(atomname) {
  return NucleicBackboneAtoms.has(atomname);
}
function addMetalBinding(structure, unit, builder) {
  const { elements } = unit;
  const { x, y, z } = unit.model.atomicConformation;
  for (let i = 0, il = elements.length; i < il; ++i) {
    const element = typeSymbol(unit, i);
    const resname = compId(unit, i);
    const atomname = atomId(unit, i);
    let dative = false;
    let ionic = false;
    const isStandardAminoacid = AminoAcidNames.has(resname);
    const isStandardBase = BaseNames.has(resname);
    if (!isStandardAminoacid && !isStandardBase) {
      if (isHalogen(element) || element === Elements.O || element === Elements.S) {
        dative = true;
        ionic = true;
      } else if (element === Elements.N) {
        dative = true;
      }
    } else if (isStandardAminoacid) {
      if (element === Elements.O) {
        if (["ASP", "GLU", "SER", "THR", "TYR", "ASN", "GLN"].includes(resname) && isProteinSidechain(atomname)) {
          dative = true;
          ionic = true;
        } else if (isProteinBackbone(atomname)) {
          dative = true;
          ionic = true;
        }
      } else if (element === Elements.S && (resname === "CYS" || resname === "MET")) {
        dative = true;
        ionic = true;
      } else if (element === Elements.N) {
        if (resname === "HIS" && isProteinSidechain(atomname)) {
          dative = true;
        }
      }
    } else if (isStandardBase) {
      if (element === Elements.O && isNucleicBackbone(atomname)) {
        dative = true;
        ionic = true;
      } else if (["N3", "N4", "N7"].includes(atomname)) {
        dative = true;
      } else if (["O2", "O4", "O6"].includes(atomname)) {
        dative = true;
        ionic = true;
      }
    }
    if (dative) {
      builder.add(FeatureType.DativeBondPartner, FeatureGroup.None, x[elements[i]], y[elements[i]], z[elements[i]], i);
    }
    if (ionic) {
      builder.add(FeatureType.IonicTypePartner, FeatureGroup.None, x[elements[i]], y[elements[i]], z[elements[i]], i);
    }
  }
}
function isMetalCoordination(ti, tj) {
  if (ti === FeatureType.TransitionMetal) {
    return tj === FeatureType.DativeBondPartner || tj === FeatureType.TransitionMetal;
  } else if (ti === FeatureType.IonicTypeMetal) {
    return tj === FeatureType.IonicTypePartner;
  }
}
function testMetalCoordination(structure, infoA, infoB, distanceSq) {
  const typeA = infoA.types[infoA.feature];
  const typeB = infoB.types[infoB.feature];
  if (!isMetalCoordination(typeA, typeB) && !isMetalCoordination(typeB, typeA))
    return;
  return InteractionType.MetalCoordination;
}
var MetalProvider = Features.Provider([FeatureType.IonicTypeMetal, FeatureType.TransitionMetal], addMetal);
var MetalBindingProvider = Features.Provider([FeatureType.IonicTypePartner, FeatureType.DativeBondPartner], addMetalBinding);
var MetalCoordinationProvider = {
  name: "metal-coordination",
  params: MetalCoordinationParams,
  createTester: (props) => {
    return {
      maxDistance: props.distanceMax,
      requiredFeatures: /* @__PURE__ */ new Set([FeatureType.IonicTypeMetal, FeatureType.TransitionMetal, FeatureType.IonicTypePartner, FeatureType.DativeBondPartner]),
      getType: (structure, infoA, infoB, distanceSq) => testMetalCoordination(structure, infoA, infoB, distanceSq)
    };
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/refine.js
function refineInteractions(structure, interactions) {
  const { contacts, unitsContacts, unitsFeatures } = interactions;
  const contactRefiners = [
    hydrophobicRefiner(structure, interactions),
    weakHydrogenBondsRefiner(structure, interactions),
    saltBridgeRefiner(structure, interactions),
    piStackingRefiner(structure, interactions),
    metalCoordinationRefiner(structure, interactions)
  ];
  for (let i = 0, il = contacts.edgeCount; i < il; ++i) {
    const e = contacts.edges[i];
    const uA = structure.unitMap.get(e.unitA);
    const uB = structure.unitMap.get(e.unitB);
    const infoA = Features.Info(structure, uA, unitsFeatures.get(e.unitA));
    infoA.feature = e.indexA;
    const infoB = Features.Info(structure, uB, unitsFeatures.get(e.unitB));
    infoB.feature = e.indexB;
    for (const refiner of contactRefiners) {
      if (refiner.isApplicable(e.props.type))
        refiner.handleInterContact(i, infoA, infoB);
    }
  }
  const ucKeys = unitsContacts.keys();
  while (true) {
    const { done, value } = ucKeys.next();
    if (done)
      break;
    const contacts2 = unitsContacts.get(value);
    const features = unitsFeatures.get(value);
    const unit = structure.unitMap.get(value);
    if (!Unit.isAtomic(unit))
      continue;
    const infoA = Features.Info(structure, unit, features);
    const infoB = Features.Info(structure, unit, features);
    for (const refiner of contactRefiners)
      refiner.startUnit(unit, contacts2, features);
    for (let i = 0, il = contacts2.edgeCount * 2; i < il; ++i) {
      infoA.feature = contacts2.a[i];
      infoB.feature = contacts2.b[i];
      for (const refiner of contactRefiners) {
        if (refiner.isApplicable(contacts2.edgeProps.type[i]))
          refiner.handleIntraContact(i, infoA, infoB);
      }
    }
  }
}
function hydrophobicRefiner(structure, interactions) {
  const { contacts } = interactions;
  const handleResidueContact = function(dist, edge, key, map2, set) {
    const [minDist, minIndex] = map2.get(key) || [Infinity, -1];
    if (dist < minDist) {
      if (minIndex !== -1)
        set(minIndex);
      map2.set(key, [dist, edge]);
    } else {
      set(edge);
    }
  };
  function handleEdge(edge, infoA, infoB, map2, set) {
    const elementA = infoA.members[infoA.offsets[infoA.feature]];
    const elementB = infoB.members[infoB.offsets[infoB.feature]];
    const residueA = infoA.unit.getResidueIndex(elementA);
    const residueB = infoB.unit.getResidueIndex(elementB);
    const keyA = `${elementA}|${infoA.unit.id}|${residueB}|${infoB.unit.id}|A`;
    const keyB = `${elementB}|${infoB.unit.id}|${residueA}|${infoA.unit.id}|B`;
    const dist = Features.distance(infoA, infoB);
    handleResidueContact(dist, edge, keyA, map2, set);
    handleResidueContact(dist, edge, keyB, map2, set);
  }
  const residueInterMap = /* @__PURE__ */ new Map();
  const setInterFiltered = (i) => contacts.edges[i].props.flag = InteractionFlag.Filtered;
  let residueIntraMap;
  let setIntraFiltered;
  return {
    isApplicable: (type) => type === InteractionType.Hydrophobic,
    handleInterContact: (index, infoA, infoB) => {
      handleEdge(index, infoA, infoB, residueInterMap, setInterFiltered);
    },
    startUnit: (unit, contacts2, features) => {
      residueIntraMap = /* @__PURE__ */ new Map();
      setIntraFiltered = (i) => contacts2.edgeProps.flag[i] = InteractionFlag.Filtered;
    },
    handleIntraContact: (index, infoA, infoB) => {
      handleEdge(index, infoA, infoB, residueIntraMap, setIntraFiltered);
    }
  };
}
function weakHydrogenBondsRefiner(structure, interactions) {
  const { contacts } = interactions;
  const hasHydrogenBond = (infoA, infoB) => {
    const acc = infoA.types[infoA.feature] === FeatureType.WeakHydrogenDonor ? infoB : infoA;
    const eI = acc.members[acc.offsets[acc.feature]];
    const { edgeProps: { type }, elementsIndex: { offsets, indices } } = interactions.unitsContacts.get(acc.unit.id);
    for (let i = offsets[eI], il = offsets[eI + 1]; i < il; ++i) {
      if (type[indices[i]] === InteractionType.HydrogenBond)
        return true;
    }
    const interIndices = contacts.getEdgeIndices(acc.feature, acc.unit.id);
    for (let i = 0, il = interIndices.length; i < il; ++i) {
      if (contacts.edges[interIndices[i]].props.type === InteractionType.HydrogenBond)
        return true;
    }
    return false;
  };
  return {
    isApplicable: (type) => type === InteractionType.WeakHydrogenBond,
    handleInterContact: (index, infoA, infoB) => {
      if (hasHydrogenBond(infoA, infoB)) {
        contacts.edges[index].props.flag = InteractionFlag.Filtered;
      }
    },
    startUnit: () => {
    },
    handleIntraContact: (index, infoA, infoB) => {
      if (hasHydrogenBond(infoA, infoB)) {
        const { flag } = interactions.unitsContacts.get(infoA.unit.id).edgeProps;
        flag[index] = InteractionFlag.Filtered;
      }
    }
  };
}
function filterInter(types, index, infoA, infoB, contacts) {
  const { offsets: offsetsA, feature: featureA } = infoA;
  const { offsets: offsetsB, feature: featureB } = infoB;
  for (let i = offsetsA[featureA], il = offsetsA[featureA + 1]; i < il; ++i) {
    const aI = infoA.members[i];
    const indices = contacts.getContactIndicesForElement(aI, infoA.unit);
    for (let k = 0, kl = indices.length; k < kl; ++k) {
      const cI = indices[k];
      if (types.includes(contacts.edges[cI].props.type)) {
        for (let j = offsetsB[featureB], jl = offsetsB[featureB + 1]; j < jl; ++j) {
          const bI = infoB.members[j];
          if (contacts.getContactIndicesForElement(bI, infoB.unit).includes(cI)) {
            contacts.edges[index].props.flag = InteractionFlag.Filtered;
            return;
          }
        }
      }
    }
  }
}
function filterIntra(types, index, infoA, infoB, contacts) {
  const { edgeProps: { type, flag }, elementsIndex: { offsets, indices } } = contacts;
  const { offsets: offsetsA, feature: featureA } = infoA;
  const { offsets: offsetsB, feature: featureB } = infoB;
  for (let i = offsetsA[featureA], il = offsetsA[featureA + 1]; i < il; ++i) {
    const aI = infoA.members[i];
    for (let k = offsets[aI], kl = offsets[aI + 1]; k < kl; ++k) {
      const cI = indices[k];
      if (types.includes(type[cI])) {
        for (let j = offsetsB[featureB], jl = offsetsB[featureB + 1]; j < jl; ++j) {
          const bI = infoB.members[j];
          for (let l = offsets[bI], ll = offsets[bI + 1]; l < ll; ++l) {
            if (cI === indices[l]) {
              flag[index] = InteractionFlag.Filtered;
              return;
            }
          }
        }
      }
    }
  }
}
function saltBridgeRefiner(structure, interactions) {
  const { contacts } = interactions;
  return {
    isApplicable: (type) => type === InteractionType.Ionic,
    handleInterContact: (index, infoA, infoB) => {
      filterInter([InteractionType.HydrogenBond, InteractionType.WeakHydrogenBond], index, infoA, infoB, contacts);
    },
    startUnit: () => {
    },
    handleIntraContact: (index, infoA, infoB) => {
      filterIntra([InteractionType.HydrogenBond, InteractionType.WeakHydrogenBond], index, infoA, infoB, interactions.unitsContacts.get(infoA.unit.id));
    }
  };
}
function piStackingRefiner(structure, interactions) {
  const { contacts } = interactions;
  return {
    isApplicable: (type) => type === InteractionType.Hydrophobic || type === InteractionType.CationPi,
    handleInterContact: (index, infoA, infoB) => {
      filterInter([InteractionType.PiStacking], index, infoA, infoB, contacts);
    },
    startUnit: () => {
    },
    handleIntraContact: (index, infoA, infoB) => {
      filterIntra([InteractionType.PiStacking], index, infoA, infoB, interactions.unitsContacts.get(infoA.unit.id));
    }
  };
}
function metalCoordinationRefiner(structure, interactions) {
  const { contacts } = interactions;
  return {
    isApplicable: (type) => type === InteractionType.Ionic,
    handleInterContact: (index, infoA, infoB) => {
      filterInter([InteractionType.MetalCoordination], index, infoA, infoB, contacts);
    },
    startUnit: () => {
    },
    handleIntraContact: (index, infoA, infoB) => {
      filterIntra([InteractionType.MetalCoordination], index, infoA, infoB, interactions.unitsContacts.get(infoA.unit.id));
    }
  };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions/interactions.js
var Interactions;
(function(Interactions3) {
  function Location(interactions, structure, unitA, indexA, unitB, indexB) {
    return DataLocation("interactions", { structure, interactions }, { unitA, indexA, unitB, indexB });
  }
  Interactions3.Location = Location;
  function isLocation(x) {
    return !!x && x.kind === "data-location" && x.tag === "interactions";
  }
  Interactions3.isLocation = isLocation;
  function areLocationsEqual(locA, locB) {
    return locA.data.structure === locB.data.structure && locA.data.interactions === locB.data.interactions && locA.element.indexA === locB.element.indexA && locA.element.indexB === locB.element.indexB && locA.element.unitA === locB.element.unitA && locA.element.unitB === locB.element.unitB;
  }
  Interactions3.areLocationsEqual = areLocationsEqual;
  function _label(interactions, element) {
    const { unitA, indexA, unitB, indexB } = element;
    const { contacts, unitsContacts } = interactions;
    if (unitA === unitB) {
      const contacts2 = unitsContacts.get(unitA.id);
      const idx = contacts2.getDirectedEdgeIndex(indexA, indexB);
      return interactionTypeLabel(contacts2.edgeProps.type[idx]);
    } else {
      const idx = contacts.getEdgeIndex(indexA, unitA.id, indexB, unitB.id);
      return interactionTypeLabel(contacts.edges[idx].props.type);
    }
  }
  function locationLabel(location2) {
    return _label(location2.data.interactions, location2.element);
  }
  Interactions3.locationLabel = locationLabel;
  function Loci2(structure, interactions, elements) {
    return DataLoci("interactions", { structure, interactions }, elements, (boundingSphere) => getBoundingSphere(interactions, elements, boundingSphere), () => getLabel(structure, interactions, elements));
  }
  Interactions3.Loci = Loci2;
  function isLoci(x) {
    return !!x && x.kind === "data-loci" && x.tag === "interactions";
  }
  Interactions3.isLoci = isLoci;
  function getBoundingSphere(interactions, elements, boundingSphere) {
    const { unitsFeatures } = interactions;
    return CentroidHelper.fromPairProvider(elements.length, (i, pA, pB) => {
      const e = elements[i];
      Features.setPosition(pA, e.unitA, e.indexA, unitsFeatures.get(e.unitA.id));
      Features.setPosition(pB, e.unitB, e.indexB, unitsFeatures.get(e.unitB.id));
    }, boundingSphere);
  }
  Interactions3.getBoundingSphere = getBoundingSphere;
  function getLabel(structure, interactions, elements) {
    const element = elements[0];
    if (element === void 0)
      return "";
    const { unitA, indexA, unitB, indexB } = element;
    const { unitsFeatures } = interactions;
    const { members: mA, offsets: oA } = unitsFeatures.get(unitA.id);
    const { members: mB, offsets: oB } = unitsFeatures.get(unitB.id);
    const options = { granularity: "element" };
    if (oA[indexA + 1] - oA[indexA] > 1 || oB[indexB + 1] - oB[indexB] > 1) {
      options.granularity = "residue";
    }
    return [
      _label(interactions, element),
      bondLabel(Bond.Location(structure, unitA, mA[oA[indexA]], structure, unitB, mB[oB[indexB]]), options)
    ].join("</br>");
  }
  Interactions3.getLabel = getLabel;
})(Interactions || (Interactions = {}));
var FeatureProviders = [
  HydrogenDonorProvider,
  WeakHydrogenDonorProvider,
  HydrogenAcceptorProvider,
  NegativChargeProvider,
  PositiveChargeProvider,
  AromaticRingProvider,
  HalogenDonorProvider,
  HalogenAcceptorProvider,
  HydrophobicAtomProvider,
  MetalProvider,
  MetalBindingProvider
];
var ContactProviders = {
  "ionic": IonicProvider,
  "pi-stacking": PiStackingProvider,
  "cation-pi": CationPiProvider,
  "halogen-bonds": HalogenBondsProvider,
  "hydrogen-bonds": HydrogenBondsProvider,
  "weak-hydrogen-bonds": WeakHydrogenBondsProvider,
  "hydrophobic": HydrophobicProvider,
  "metal-coordination": MetalCoordinationProvider
};
function getProvidersParams(defaultOn = []) {
  const params = /* @__PURE__ */ Object.create(null);
  Object.keys(ContactProviders).forEach((k) => {
    params[k] = ParamDefinition.MappedStatic(defaultOn.includes(k) ? "on" : "off", {
      on: ParamDefinition.Group(ContactProviders[k].params),
      off: ParamDefinition.Group({})
    }, { cycle: true });
  });
  return params;
}
var ContactProviderParams = getProvidersParams([
  // 'ionic',
  "cation-pi",
  "pi-stacking",
  "hydrogen-bonds",
  "halogen-bonds",
  // 'hydrophobic',
  "metal-coordination"
  // 'weak-hydrogen-bonds',
]);
var InteractionsParams = {
  providers: ParamDefinition.Group(ContactProviderParams, { isFlat: true }),
  contacts: ParamDefinition.Group(ContactsParams, { label: "Advanced Options" })
};
async function computeInteractions(ctx, structure, props, options) {
  const p = { ...ParamDefinition.getDefaultValues(InteractionsParams), ...props };
  const cacheKey = JSON.stringify(p);
  await ValenceModelProvider.attach(ctx, structure);
  const contactTesters = [];
  ObjectKeys(ContactProviders).forEach((k) => {
    const { name, params } = p.providers[k];
    if (name === "on") {
      contactTesters.push(ContactProviders[k].createTester(params));
    }
  });
  const requiredFeatures = /* @__PURE__ */ new Set();
  contactTesters.forEach((l) => SetUtils.add(requiredFeatures, l.requiredFeatures));
  const featureProviders = FeatureProviders.filter((f) => SetUtils.areIntersecting(requiredFeatures, f.types));
  const unitsFeatures = IntMap.Mutable();
  const unitsContacts = IntMap.Mutable();
  for (let i = 0, il = structure.unitSymmetryGroups.length; i < il; ++i) {
    const group = structure.unitSymmetryGroups[i];
    if (ctx.runtime.shouldUpdate) {
      await ctx.runtime.update({ message: "computing interactions", current: i, max: il });
    }
    const features = findUnitFeatures(structure, group.units[0], featureProviders, cacheKey);
    for (let j = 0, jl = group.units.length; j < jl; ++j) {
      const u = group.units[j];
      unitsFeatures.set(u.id, features);
    }
    if (options === null || options === void 0 ? void 0 : options.skipIntraContacts)
      continue;
    const intraUnitContacts = findIntraUnitContacts(structure, group.units[0], features, contactTesters, p.contacts);
    for (let j = 0, jl = group.units.length; j < jl; ++j) {
      const u = group.units[j];
      unitsContacts.set(u.id, intraUnitContacts);
    }
  }
  const contacts = findInterUnitContacts(structure, unitsFeatures, contactTesters, p.contacts, options);
  const interactions = { unitsFeatures, unitsContacts, contacts };
  refineInteractions(structure, interactions);
  return interactions;
}
function findUnitFeatures(structure, unit, featureProviders, cacheKey) {
  const key = `features-${cacheKey}`;
  if (unit.transientCache.has(key)) {
    return unit.transientCache.get(key);
  }
  const count = unit.elements.length;
  const featuresBuilder = FeaturesBuilder.create(count, count / 2);
  if (Unit.isAtomic(unit)) {
    for (const fp of featureProviders) {
      fp.add(structure, unit, featuresBuilder);
    }
  }
  const features = featuresBuilder.getFeatures(count);
  unit.transientCache.set(key, features);
  return features;
}
function findIntraUnitContacts(structure, unit, features, contactTesters, props) {
  const builder = IntraContactsBuilder.create(features, unit.elements.length);
  if (Unit.isAtomic(unit)) {
    addUnitContacts(structure, unit, features, builder, contactTesters, props);
  }
  return builder.getContacts();
}
function findInterUnitContacts(structure, unitsFeatures, contactTesters, props, options) {
  const builder = InterContactsBuilder.create();
  Structure.eachUnitPair(structure, (unitA, unitB) => {
    const featuresA = unitsFeatures.get(unitA.id);
    const featuresB = unitsFeatures.get(unitB.id);
    addStructureContacts(structure, unitA, featuresA, unitB, featuresB, builder, contactTesters, props);
  }, {
    maxRadius: Math.max(...contactTesters.map((t) => t.maxDistance)),
    validUnit: (unit) => Unit.isAtomic(unit),
    validUnitPair: (unitA, unitB) => {
      if (options === null || options === void 0 ? void 0 : options.unitPairTest)
        return options.unitPairTest(unitA, unitB);
      return Structure.validUnitPair(structure, unitA, unitB);
    }
  });
  return builder.getContacts(unitsFeatures);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/interactions.js
var InteractionsParams2 = {
  ...InteractionsParams
};
var InteractionsProvider = CustomStructureProperty.createProvider({
  label: "Interactions",
  descriptor: CustomPropertyDescriptor({
    name: "molstar_computed_interactions"
    // TODO `cifExport` and `symbol`
  }),
  type: "local",
  defaultParams: InteractionsParams2,
  getParams: (data) => InteractionsParams2,
  isApplicable: (data) => !data.isCoarseGrained,
  obtain: async (ctx, data, props) => {
    const p = { ...ParamDefinition.getDefaultValues(InteractionsParams2), ...props };
    return { value: await computeInteractions(ctx, data, p) };
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/themes/interaction-type.js
var DefaultColor2 = Color(13421772);
var Description2 = "Assigns colors according the interaction type of a link.";
var InteractionTypeColors = ColorMap({
  HydrogenBond: 2851770,
  Hydrophobic: 8421504,
  HalogenBond: 4259775,
  Ionic: 15779860,
  MetalCoordination: 9191577,
  CationPi: 16744448,
  PiStacking: 9220966,
  WeakHydrogenBond: 12967404
});
var InteractionTypeColorTable = [
  ["Hydrogen Bond", InteractionTypeColors.HydrogenBond],
  ["Hydrophobic", InteractionTypeColors.Hydrophobic],
  ["Halogen Bond", InteractionTypeColors.HalogenBond],
  ["Ionic", InteractionTypeColors.Ionic],
  ["Metal Coordination", InteractionTypeColors.MetalCoordination],
  ["Cation Pi", InteractionTypeColors.CationPi],
  ["Pi Stacking", InteractionTypeColors.PiStacking],
  ["Weak HydrogenBond", InteractionTypeColors.WeakHydrogenBond]
];
function typeColor(type) {
  switch (type) {
    case InteractionType.HydrogenBond:
      return InteractionTypeColors.HydrogenBond;
    case InteractionType.Hydrophobic:
      return InteractionTypeColors.Hydrophobic;
    case InteractionType.HalogenBond:
      return InteractionTypeColors.HalogenBond;
    case InteractionType.Ionic:
      return InteractionTypeColors.Ionic;
    case InteractionType.MetalCoordination:
      return InteractionTypeColors.MetalCoordination;
    case InteractionType.CationPi:
      return InteractionTypeColors.CationPi;
    case InteractionType.PiStacking:
      return InteractionTypeColors.PiStacking;
    case InteractionType.WeakHydrogenBond:
      return InteractionTypeColors.WeakHydrogenBond;
    case InteractionType.Unknown:
      return DefaultColor2;
  }
}
var InteractionTypeColorThemeParams = {};
function getInteractionTypeColorThemeParams(ctx) {
  return InteractionTypeColorThemeParams;
}
function InteractionTypeColorTheme(ctx, props) {
  let color;
  const interactions = ctx.structure ? InteractionsProvider.get(ctx.structure) : void 0;
  const contextHash = interactions ? hash2(interactions.id, interactions.version) : -1;
  if (interactions && interactions.value) {
    color = (location2) => {
      if (Interactions.isLocation(location2)) {
        const { unitsContacts, contacts } = location2.data.interactions;
        const { unitA, unitB, indexA, indexB } = location2.element;
        if (unitA === unitB) {
          const links = unitsContacts.get(unitA.id);
          const idx = links.getDirectedEdgeIndex(indexA, indexB);
          return typeColor(links.edgeProps.type[idx]);
        } else {
          const idx = contacts.getEdgeIndex(indexA, unitA.id, indexB, unitB.id);
          return typeColor(contacts.edges[idx].props.type);
        }
      }
      return DefaultColor2;
    };
  } else {
    color = () => DefaultColor2;
  }
  return {
    factory: InteractionTypeColorTheme,
    granularity: "group",
    color,
    props,
    contextHash,
    description: Description2,
    legend: TableLegend(InteractionTypeColorTable)
  };
}
var InteractionTypeColorThemeProvider = {
  name: "interaction-type",
  label: "Interaction Type",
  category: ColorThemeCategory.Misc,
  factory: InteractionTypeColorTheme,
  getParams: getInteractionTypeColorThemeParams,
  defaultValues: ParamDefinition.getDefaultValues(InteractionTypeColorThemeParams),
  isApplicable: (ctx) => !!ctx.structure,
  ensureCustomProperties: {
    attach: (ctx, data) => data.structure ? InteractionsProvider.attach(ctx, data.structure, void 0, true) : Promise.resolve(),
    detach: (data) => data.structure && InteractionsProvider.ref(data.structure, false)
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-geo/geometry/cylinders/cylinders-builder.js
var tmpVecA3 = Vec3();
var tmpVecB3 = Vec3();
var tmpDir = Vec3();
var caAdd = ChunkedArray.add;
var caAdd3 = ChunkedArray.add3;
var CylindersBuilder;
(function(CylindersBuilder2) {
  function create(initialCount = 2048, chunkSize = 1024, cylinders) {
    const groups = ChunkedArray.create(Float32Array, 1, chunkSize, cylinders ? cylinders.groupBuffer.ref.value : initialCount);
    const starts = ChunkedArray.create(Float32Array, 3, chunkSize, cylinders ? cylinders.startBuffer.ref.value : initialCount);
    const ends = ChunkedArray.create(Float32Array, 3, chunkSize, cylinders ? cylinders.endBuffer.ref.value : initialCount);
    const scales = ChunkedArray.create(Float32Array, 1, chunkSize, cylinders ? cylinders.scaleBuffer.ref.value : initialCount);
    const caps = ChunkedArray.create(Float32Array, 1, chunkSize, cylinders ? cylinders.capBuffer.ref.value : initialCount);
    const colorModes = ChunkedArray.create(Float32Array, 1, chunkSize, cylinders ? cylinders.colorModeBuffer.ref.value : initialCount);
    const add = (startX, startY, startZ, endX, endY, endZ, radiusScale, topCap, bottomCap, colorMode, group) => {
      for (let i = 0; i < 6; ++i) {
        caAdd3(starts, startX, startY, startZ);
        caAdd3(ends, endX, endY, endZ);
        caAdd(groups, group);
        caAdd(scales, radiusScale);
        caAdd(caps, (topCap ? 1 : 0) + (bottomCap ? 2 : 0));
        caAdd(colorModes, colorMode);
      }
    };
    const addFixedCountDashes = (start, end, segmentCount, radiusScale, topCap, bottomCap, stubCap, interpolate, group) => {
      const d = Vec3.distance(start, end);
      const isOdd = segmentCount % 2 !== 0;
      const s = Math.floor((segmentCount + 1) / 2);
      const step = d / (segmentCount + 0.5);
      let colorMode = 2;
      Vec3.setMagnitude(tmpDir, Vec3.sub(tmpDir, end, start), step);
      Vec3.copy(tmpVecA3, start);
      for (let j = 0; j < s; ++j) {
        Vec3.add(tmpVecA3, tmpVecA3, tmpDir);
        if (isOdd && j === s - 1) {
          Vec3.copy(tmpVecB3, end);
          if (!stubCap)
            bottomCap = false;
        } else {
          Vec3.add(tmpVecB3, tmpVecA3, tmpDir);
        }
        if (interpolate) {
          colorMode = Vec3.distance(start, tmpVecB3) / (d * 2);
        }
        add(tmpVecA3[0], tmpVecA3[1], tmpVecA3[2], tmpVecB3[0], tmpVecB3[1], tmpVecB3[2], radiusScale, topCap, bottomCap, colorMode, group);
        Vec3.add(tmpVecA3, tmpVecA3, tmpDir);
      }
    };
    return {
      add,
      addFixedCountDashes,
      addFixedLengthDashes: (start, end, segmentLength, radiusScale, topCap, bottomCap, interpolate, group) => {
        const d = Vec3.distance(start, end);
        addFixedCountDashes(start, end, d / segmentLength, radiusScale, topCap, bottomCap, true, interpolate, group);
      },
      getCylinders: () => {
        const cylinderCount = groups.elementCount / 6;
        const gb = ChunkedArray.compact(groups, true);
        const sb = ChunkedArray.compact(starts, true);
        const eb = ChunkedArray.compact(ends, true);
        const ab = ChunkedArray.compact(scales, true);
        const cb = ChunkedArray.compact(caps, true);
        const cmb = ChunkedArray.compact(colorModes, true);
        const mb = cylinders && cylinderCount <= cylinders.cylinderCount ? cylinders.mappingBuffer.ref.value : new Float32Array(cylinderCount * 18);
        const ib = cylinders && cylinderCount <= cylinders.cylinderCount ? cylinders.indexBuffer.ref.value : new Uint32Array(cylinderCount * 12);
        if (!cylinders || cylinderCount > cylinders.cylinderCount)
          fillMappingAndIndices(cylinderCount, mb, ib);
        return Cylinders.create(mb, ib, gb, sb, eb, ab, cb, cmb, cylinderCount, cylinders);
      }
    };
  }
  CylindersBuilder2.create = create;
})(CylindersBuilder || (CylindersBuilder = {}));
function fillMappingAndIndices(n, mb, ib) {
  for (let i = 0; i < n; ++i) {
    const mo = i * 18;
    mb[mo] = -1;
    mb[mo + 1] = 1;
    mb[mo + 2] = -1;
    mb[mo + 3] = -1;
    mb[mo + 4] = -1;
    mb[mo + 5] = -1;
    mb[mo + 6] = 1;
    mb[mo + 7] = 1;
    mb[mo + 8] = -1;
    mb[mo + 9] = 1;
    mb[mo + 10] = 1;
    mb[mo + 11] = 1;
    mb[mo + 12] = 1;
    mb[mo + 13] = -1;
    mb[mo + 14] = -1;
    mb[mo + 15] = 1;
    mb[mo + 16] = -1;
    mb[mo + 17] = 1;
  }
  for (let i = 0; i < n; ++i) {
    const o = i * 6;
    const io = i * 12;
    ib[io] = o;
    ib[io + 1] = o + 1;
    ib[io + 2] = o + 2;
    ib[io + 3] = o + 1;
    ib[io + 4] = o + 4;
    ib[io + 5] = o + 2;
    ib[io + 6] = o + 2;
    ib[io + 7] = o + 4;
    ib[io + 8] = o + 3;
    ib[io + 9] = o + 4;
    ib[io + 10] = o + 5;
    ib[io + 11] = o + 3;
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-repr/structure/visual/util/link.js
var LinkCylinderParams = {
  linkScale: ParamDefinition.Numeric(0.45, { min: 0, max: 1, step: 0.01 }),
  linkSpacing: ParamDefinition.Numeric(1, { min: 0, max: 2, step: 0.01 }),
  linkCap: ParamDefinition.Boolean(false),
  aromaticScale: ParamDefinition.Numeric(0.3, { min: 0, max: 1, step: 0.01 }),
  aromaticSpacing: ParamDefinition.Numeric(1.5, { min: 0, max: 3, step: 0.01 }),
  aromaticDashCount: ParamDefinition.Numeric(2, { min: 1, max: 6, step: 1 }),
  dashCount: ParamDefinition.Numeric(4, { min: 0, max: 10, step: 1 }),
  dashScale: ParamDefinition.Numeric(0.8, { min: 0, max: 2, step: 0.1 }),
  dashCap: ParamDefinition.Boolean(true),
  stubCap: ParamDefinition.Boolean(true),
  radialSegments: ParamDefinition.Numeric(16, { min: 2, max: 56, step: 2 }, BaseGeometry.CustomQualityParamInfo),
  colorMode: ParamDefinition.Select("default", ParamDefinition.arrayToOptions(["default", "interpolate"]), BaseGeometry.ShadingCategory)
};
var DefaultLinkCylinderProps = ParamDefinition.getDefaultValues(LinkCylinderParams);
var LinkLineParams = {
  linkScale: ParamDefinition.Numeric(0.5, { min: 0, max: 1, step: 0.1 }),
  linkSpacing: ParamDefinition.Numeric(0.1, { min: 0, max: 2, step: 0.01 }),
  aromaticDashCount: ParamDefinition.Numeric(2, { min: 1, max: 6, step: 1 }),
  dashCount: ParamDefinition.Numeric(4, { min: 0, max: 10, step: 1 })
};
var DefaultLinkLineProps = ParamDefinition.getDefaultValues(LinkLineParams);
var tmpV12 = Vec3();
var tmpShiftV12 = Vec3();
var tmpShiftV13 = Vec3();
var up = Vec3.create(0, 1, 0);
function calculateShiftDir(out, v1, v2, v3) {
  Vec3.normalize(tmpShiftV12, Vec3.sub(tmpShiftV12, v1, v2));
  if (v3 !== null) {
    Vec3.sub(tmpShiftV13, v1, v3);
  } else {
    Vec3.copy(tmpShiftV13, v1);
  }
  Vec3.normalize(tmpShiftV13, tmpShiftV13);
  let dp = Vec3.dot(tmpShiftV12, tmpShiftV13);
  if (1 - Math.abs(dp) < 1e-5) {
    Vec3.set(tmpShiftV13, 1, 0, 0);
    dp = Vec3.dot(tmpShiftV12, tmpShiftV13);
    if (1 - Math.abs(dp) < 1e-5) {
      Vec3.set(tmpShiftV13, 0, 1, 0);
      dp = Vec3.dot(tmpShiftV12, tmpShiftV13);
    }
  }
  Vec3.setMagnitude(tmpShiftV12, tmpShiftV12, dp);
  Vec3.sub(tmpShiftV13, tmpShiftV13, tmpShiftV12);
  return Vec3.normalize(out, tmpShiftV13);
}
var EmptyLinkBuilderProps = {
  linkCount: 0,
  position: () => {
  },
  radius: () => 0
};
var LinkStyle;
(function(LinkStyle2) {
  LinkStyle2[LinkStyle2["Solid"] = 0] = "Solid";
  LinkStyle2[LinkStyle2["Dashed"] = 1] = "Dashed";
  LinkStyle2[LinkStyle2["Double"] = 2] = "Double";
  LinkStyle2[LinkStyle2["OffsetDouble"] = 3] = "OffsetDouble";
  LinkStyle2[LinkStyle2["Triple"] = 4] = "Triple";
  LinkStyle2[LinkStyle2["OffsetTriple"] = 5] = "OffsetTriple";
  LinkStyle2[LinkStyle2["Disk"] = 6] = "Disk";
  LinkStyle2[LinkStyle2["Aromatic"] = 7] = "Aromatic";
  LinkStyle2[LinkStyle2["MirroredAromatic"] = 8] = "MirroredAromatic";
})(LinkStyle || (LinkStyle = {}));
var v3scale = Vec3.scale;
var v3add = Vec3.add;
var v3sub = Vec3.sub;
var v3setMagnitude = Vec3.setMagnitude;
var v3dot = Vec3.dot;
function createLinkCylinderMesh(ctx, linkBuilder, props, mesh) {
  const { linkCount, referencePosition, position, style, radius, ignore, stub } = linkBuilder;
  if (!linkCount)
    return { mesh: Mesh.createEmpty(mesh) };
  const { radialSegments, stubCap } = props;
  const vertexCountEstimate = radialSegments * 2 * linkCount * 2;
  const builderState = MeshBuilder.createState(vertexCountEstimate, vertexCountEstimate / 4, mesh);
  const center = Vec3();
  let count = 0;
  let edgeIndex = 0;
  const addOptions = {
    builderState,
    props,
    assignNonAdjustedPosition: (posA, posB) => {
      position(posA, posB, edgeIndex, false);
    },
    referencePosition: referencePosition ? () => referencePosition(edgeIndex) : void 0
  };
  const addParams = {
    a: Vec3(),
    b: Vec3(),
    group: 0,
    linkStub: false,
    linkStyle: LinkStyle.Solid,
    linkRadius: 0
  };
  for (let _eI = linkCount; edgeIndex < _eI; ++edgeIndex) {
    if (ignore && ignore(edgeIndex))
      continue;
    position(addParams.a, addParams.b, edgeIndex, true);
    v3add(center, center, addParams.a);
    v3add(center, center, addParams.b);
    count += 2;
    addParams.group = edgeIndex;
    addParams.linkStub = stubCap && (stub ? stub(edgeIndex) : false);
    addParams.linkRadius = radius(edgeIndex);
    addParams.linkStyle = style ? style(edgeIndex) : LinkStyle.Solid;
    addLinkCylinderMesh(addOptions, addParams);
  }
  const m = MeshBuilder.getMesh(builderState);
  if (count === 0)
    return { mesh: m };
  Vec3.scale(center, center, 1 / count);
  const oldBoundingSphere = mesh ? Sphere3D.clone(mesh.boundingSphere) : void 0;
  if (oldBoundingSphere && Vec3.distance(center, oldBoundingSphere.center) / oldBoundingSphere.radius < 0.1) {
    return { mesh: m, boundingSphere: oldBoundingSphere };
  } else {
    return { mesh: m };
  }
}
var AddLinkCylinderState = {
  cylinderProps: {
    radiusTop: 1,
    radiusBottom: 1,
    radialSegments: 8,
    topCap: false,
    bottomCap: false
  },
  vShift: Vec3(),
  va: Vec3(),
  vb: Vec3()
};
function addLinkCylinderMesh(options, params) {
  const { builderState, props, assignNonAdjustedPosition, referencePosition } = options;
  const { linkRadius, linkStub, linkStyle, a, b } = params;
  const { linkScale, linkSpacing, radialSegments, linkCap, aromaticScale, aromaticSpacing, aromaticDashCount, dashCount, dashScale, dashCap } = props;
  const { cylinderProps, vShift, va, vb } = AddLinkCylinderState;
  cylinderProps.radialSegments = radialSegments;
  Vec3.copy(va, a);
  Vec3.copy(vb, b);
  v3sub(tmpV12, vb, va);
  const dirFlag = v3dot(tmpV12, up) > 0;
  const [topCap, bottomCap] = dirFlag ? [linkStub, linkCap] : [linkCap, linkStub];
  builderState.currentGroup = params.group;
  if (linkStyle === LinkStyle.Solid) {
    cylinderProps.radiusTop = cylinderProps.radiusBottom = linkRadius;
    cylinderProps.topCap = topCap;
    cylinderProps.bottomCap = bottomCap;
    addCylinder(builderState, va, vb, 0.5, cylinderProps);
  } else if (linkStyle === LinkStyle.Dashed) {
    cylinderProps.radiusTop = cylinderProps.radiusBottom = linkRadius * dashScale;
    cylinderProps.topCap = cylinderProps.bottomCap = dashCap;
    addFixedCountDashedCylinder(builderState, va, vb, 0.5, dashCount, linkStub, cylinderProps);
  } else if (linkStyle === LinkStyle.Double || linkStyle === LinkStyle.OffsetDouble || linkStyle === LinkStyle.Triple || linkStyle === LinkStyle.OffsetTriple || linkStyle === LinkStyle.Aromatic || linkStyle === LinkStyle.MirroredAromatic) {
    const order = linkStyle === LinkStyle.Double || linkStyle === LinkStyle.OffsetDouble ? 2 : linkStyle === LinkStyle.Triple || linkStyle === LinkStyle.OffsetTriple ? 3 : 1.5;
    const multiRadius = linkRadius * (linkScale / (0.5 * order));
    const absOffset = (linkRadius - multiRadius) * linkSpacing;
    calculateShiftDir(vShift, va, vb, referencePosition ? referencePosition() : null);
    cylinderProps.topCap = topCap;
    cylinderProps.bottomCap = bottomCap;
    if (linkStyle === LinkStyle.Aromatic || linkStyle === LinkStyle.MirroredAromatic) {
      cylinderProps.radiusTop = cylinderProps.radiusBottom = linkRadius;
      addCylinder(builderState, va, vb, 0.5, cylinderProps);
      const aromaticOffset = linkRadius + aromaticScale * linkRadius + aromaticScale * linkRadius * aromaticSpacing;
      if (assignNonAdjustedPosition) {
        assignNonAdjustedPosition(va, vb);
      }
      v3setMagnitude(tmpV12, v3sub(tmpV12, vb, va), linkRadius * 0.5);
      v3add(va, va, tmpV12);
      v3sub(vb, vb, tmpV12);
      cylinderProps.radiusTop = cylinderProps.radiusBottom = linkRadius * aromaticScale;
      cylinderProps.topCap = cylinderProps.bottomCap = dashCap;
      v3setMagnitude(vShift, vShift, aromaticOffset);
      v3sub(va, va, vShift);
      v3sub(vb, vb, vShift);
      addFixedCountDashedCylinder(builderState, va, vb, 0.5, aromaticDashCount, linkStub, cylinderProps);
      if (linkStyle === LinkStyle.MirroredAromatic) {
        v3setMagnitude(vShift, vShift, aromaticOffset * 2);
        v3add(va, va, vShift);
        v3add(vb, vb, vShift);
        addFixedCountDashedCylinder(builderState, va, vb, 0.5, aromaticDashCount, linkStub, cylinderProps);
      }
    } else if (linkStyle === LinkStyle.OffsetDouble || linkStyle === LinkStyle.OffsetTriple) {
      const multipleOffset = linkRadius + multiRadius + linkScale * linkRadius * linkSpacing;
      v3setMagnitude(vShift, vShift, multipleOffset);
      cylinderProps.radiusTop = cylinderProps.radiusBottom = linkRadius;
      addCylinder(builderState, va, vb, 0.5, cylinderProps);
      v3scale(tmpV12, tmpV12, linkSpacing * linkScale * 0.2);
      v3add(va, va, tmpV12);
      v3sub(vb, vb, tmpV12);
      cylinderProps.radiusTop = cylinderProps.radiusBottom = multiRadius;
      cylinderProps.topCap = dirFlag ? linkStub : dashCap;
      cylinderProps.bottomCap = dirFlag ? dashCap : linkStub;
      v3setMagnitude(vShift, vShift, multipleOffset);
      v3sub(va, va, vShift);
      v3sub(vb, vb, vShift);
      addCylinder(builderState, va, vb, 0.5, cylinderProps);
      if (order === 3) {
        v3setMagnitude(vShift, vShift, multipleOffset * 2);
        v3add(va, va, vShift);
        v3add(vb, vb, vShift);
        addCylinder(builderState, va, vb, 0.5, cylinderProps);
      }
    } else {
      v3setMagnitude(vShift, vShift, absOffset);
      cylinderProps.radiusTop = cylinderProps.radiusBottom = multiRadius;
      if (order === 3)
        addCylinder(builderState, va, vb, 0.5, cylinderProps);
      addDoubleCylinder(builderState, va, vb, 0.5, vShift, cylinderProps);
    }
  } else if (linkStyle === LinkStyle.Disk) {
    v3scale(tmpV12, tmpV12, 0.475);
    v3add(va, va, tmpV12);
    v3sub(vb, vb, tmpV12);
    cylinderProps.radiusTop = cylinderProps.radiusBottom = linkRadius;
    cylinderProps.topCap = topCap;
    cylinderProps.bottomCap = bottomCap;
    addCylinder(builderState, va, vb, 0.5, cylinderProps);
  }
}
function createLinkCylinderImpostors(ctx, linkBuilder, props, cylinders) {
  const { linkCount, referencePosition, position, style, radius, ignore, stub } = linkBuilder;
  if (!linkCount)
    return { cylinders: Cylinders.createEmpty(cylinders) };
  const { linkScale, linkSpacing, linkCap, aromaticScale, aromaticSpacing, aromaticDashCount, dashCount, dashScale, dashCap, stubCap, colorMode } = props;
  const interpolate = colorMode === "interpolate";
  const colorModeFlag = interpolate === true ? 3 : 2;
  const cylindersCountEstimate = linkCount * 2;
  const builder = CylindersBuilder.create(cylindersCountEstimate, cylindersCountEstimate / 4, cylinders);
  const va = Vec3();
  const vb = Vec3();
  const vm = Vec3();
  const vShift = Vec3();
  const center = Vec3();
  let count = 0;
  for (let edgeIndex = 0, _eI = linkCount; edgeIndex < _eI; ++edgeIndex) {
    if (ignore && ignore(edgeIndex))
      continue;
    position(va, vb, edgeIndex, true);
    v3add(center, center, va);
    v3add(center, center, vb);
    count += 2;
    const linkRadius = radius(edgeIndex);
    const linkStyle = style ? style(edgeIndex) : LinkStyle.Solid;
    const linkStub = stubCap && (stub ? stub(edgeIndex) : false);
    if (linkStyle === LinkStyle.Solid) {
      v3scale(vm, v3add(vm, va, vb), 0.5);
      builder.add(va[0], va[1], va[2], vm[0], vm[1], vm[2], 1, linkCap, linkStub, colorModeFlag, edgeIndex);
    } else if (linkStyle === LinkStyle.Dashed) {
      v3scale(vm, v3add(vm, va, vb), 0.5);
      builder.addFixedCountDashes(va, vm, dashCount, dashScale, dashCap, dashCap, linkStub, interpolate, edgeIndex);
    } else if (linkStyle === LinkStyle.Double || linkStyle === LinkStyle.OffsetDouble || linkStyle === LinkStyle.Triple || linkStyle === LinkStyle.OffsetTriple || linkStyle === LinkStyle.Aromatic || linkStyle === LinkStyle.MirroredAromatic) {
      const order = linkStyle === LinkStyle.Double || linkStyle === LinkStyle.OffsetDouble ? 2 : linkStyle === LinkStyle.Triple || linkStyle === LinkStyle.OffsetTriple ? 3 : 1.5;
      const multiScale = linkScale / (0.5 * order);
      const absOffset = (linkRadius - multiScale * linkRadius) * linkSpacing;
      v3scale(vm, v3add(vm, va, vb), 0.5);
      calculateShiftDir(vShift, va, vb, referencePosition ? referencePosition(edgeIndex) : null);
      if (linkStyle === LinkStyle.Aromatic || linkStyle === LinkStyle.MirroredAromatic) {
        builder.add(va[0], va[1], va[2], vm[0], vm[1], vm[2], 1, linkCap, linkStub, colorModeFlag, edgeIndex);
        const aromaticOffset = linkRadius + aromaticScale * linkRadius + aromaticScale * linkRadius * aromaticSpacing;
        position(va, vb, edgeIndex, false);
        v3setMagnitude(tmpV12, v3sub(tmpV12, vb, va), linkRadius * 0.5);
        v3add(va, va, tmpV12);
        v3setMagnitude(vShift, vShift, aromaticOffset);
        v3sub(va, va, vShift);
        v3sub(vm, vm, vShift);
        builder.addFixedCountDashes(va, vm, aromaticDashCount, aromaticScale, dashCap, dashCap, linkStub, interpolate, edgeIndex);
        if (linkStyle === LinkStyle.MirroredAromatic) {
          v3setMagnitude(vShift, vShift, aromaticOffset * 2);
          v3add(va, va, vShift);
          v3add(vm, vm, vShift);
          builder.addFixedCountDashes(va, vm, aromaticDashCount, aromaticScale, dashCap, dashCap, linkStub, interpolate, edgeIndex);
        }
      } else if (linkStyle === LinkStyle.OffsetDouble || linkStyle === LinkStyle.OffsetTriple) {
        const multipleOffset = linkRadius + multiScale * linkRadius + linkScale * linkRadius * linkSpacing;
        v3setMagnitude(vShift, vShift, multipleOffset);
        builder.add(va[0], va[1], va[2], vm[0], vm[1], vm[2], 1, linkCap, linkStub, colorModeFlag, edgeIndex);
        v3setMagnitude(tmpV12, v3sub(tmpV12, va, vm), linkRadius / 1.5);
        v3sub(va, va, tmpV12);
        if (order === 3)
          builder.add(va[0] + vShift[0], va[1] + vShift[1], va[2] + vShift[2], vm[0] + vShift[0], vm[1] + vShift[1], vm[2] + vShift[2], multiScale, linkCap, linkStub, colorModeFlag, edgeIndex);
        builder.add(va[0] - vShift[0], va[1] - vShift[1], va[2] - vShift[2], vm[0] - vShift[0], vm[1] - vShift[1], vm[2] - vShift[2], multiScale, dashCap, linkStub, colorModeFlag, edgeIndex);
      } else {
        v3setMagnitude(vShift, vShift, absOffset);
        if (order === 3)
          builder.add(va[0], va[1], va[2], vm[0], vm[1], vm[2], multiScale, linkCap, linkStub, colorModeFlag, edgeIndex);
        builder.add(va[0] + vShift[0], va[1] + vShift[1], va[2] + vShift[2], vm[0] + vShift[0], vm[1] + vShift[1], vm[2] + vShift[2], multiScale, linkCap, linkStub, colorModeFlag, edgeIndex);
        builder.add(va[0] - vShift[0], va[1] - vShift[1], va[2] - vShift[2], vm[0] - vShift[0], vm[1] - vShift[1], vm[2] - vShift[2], multiScale, linkCap, linkStub, colorModeFlag, edgeIndex);
      }
    } else if (linkStyle === LinkStyle.Disk) {
      v3scale(tmpV12, v3sub(tmpV12, vm, va), 0.475);
      v3add(va, va, tmpV12);
      v3sub(vm, vm, tmpV12);
      builder.add(va[0], va[1], va[2], vm[0], vm[1], vm[2], 1, linkCap, linkStub, colorModeFlag, edgeIndex);
    }
  }
  const c = builder.getCylinders();
  if (count === 0)
    return { cylinders: c };
  Vec3.scale(center, center, 1 / count);
  const oldBoundingSphere = cylinders ? Sphere3D.clone(cylinders.boundingSphere) : void 0;
  if (oldBoundingSphere && Vec3.distance(center, oldBoundingSphere.center) / oldBoundingSphere.radius < 0.1) {
    return { cylinders: c, boundingSphere: oldBoundingSphere };
  } else {
    return { cylinders: c };
  }
}
function createLinkLines(ctx, linkBuilder, props, lines) {
  const { linkCount, referencePosition, position, style, ignore } = linkBuilder;
  if (!linkCount)
    return { lines: Lines.createEmpty(lines) };
  const { linkScale, linkSpacing, aromaticDashCount, dashCount } = props;
  const linesCountEstimate = linkCount * 2;
  const builder = LinesBuilder.create(linesCountEstimate, linesCountEstimate / 4, lines);
  const va = Vec3();
  const vb = Vec3();
  const vm = Vec3();
  const vShift = Vec3();
  const center = Vec3();
  let count = 0;
  const aromaticOffsetFactor = 4.5;
  const multipleOffsetFactor = 3;
  for (let edgeIndex = 0, _eI = linkCount; edgeIndex < _eI; ++edgeIndex) {
    if (ignore && ignore(edgeIndex))
      continue;
    position(va, vb, edgeIndex, true);
    v3add(center, center, va);
    v3add(center, center, vb);
    count += 2;
    const linkStyle = style ? style(edgeIndex) : LinkStyle.Solid;
    if (linkStyle === LinkStyle.Solid) {
      v3scale(vm, v3add(vm, va, vb), 0.5);
      builder.add(va[0], va[1], va[2], vm[0], vm[1], vm[2], edgeIndex);
    } else if (linkStyle === LinkStyle.Dashed) {
      v3scale(vm, v3add(vm, va, vb), 0.5);
      builder.addFixedCountDashes(va, vm, dashCount, edgeIndex);
    } else if (linkStyle === LinkStyle.Double || linkStyle === LinkStyle.OffsetDouble || linkStyle === LinkStyle.Triple || linkStyle === LinkStyle.OffsetTriple || linkStyle === LinkStyle.Aromatic || linkStyle === LinkStyle.MirroredAromatic) {
      const order = linkStyle === LinkStyle.Double || linkStyle === LinkStyle.OffsetDouble ? 2 : linkStyle === LinkStyle.Triple || linkStyle === LinkStyle.OffsetTriple ? 3 : 1.5;
      const multiRadius = 1 * (linkScale / (0.5 * order));
      const absOffset = (1 - multiRadius) * linkSpacing;
      v3scale(vm, v3add(vm, va, vb), 0.5);
      calculateShiftDir(vShift, va, vb, referencePosition ? referencePosition(edgeIndex) : null);
      if (linkStyle === LinkStyle.Aromatic || linkStyle === LinkStyle.MirroredAromatic) {
        builder.add(va[0], va[1], va[2], vm[0], vm[1], vm[2], edgeIndex);
        const aromaticOffset = absOffset * aromaticOffsetFactor;
        v3setMagnitude(tmpV12, v3sub(tmpV12, vb, va), aromaticOffset * 0.5);
        v3add(va, va, tmpV12);
        v3setMagnitude(vShift, vShift, aromaticOffset);
        v3sub(va, va, vShift);
        v3sub(vm, vm, vShift);
        builder.addFixedCountDashes(va, vm, aromaticDashCount, edgeIndex);
        if (linkStyle === LinkStyle.MirroredAromatic) {
          v3setMagnitude(vShift, vShift, aromaticOffset * 2);
          v3add(va, va, vShift);
          v3add(vm, vm, vShift);
          builder.addFixedCountDashes(va, vm, aromaticDashCount, edgeIndex);
        }
      } else if (linkStyle === LinkStyle.OffsetDouble || linkStyle === LinkStyle.OffsetTriple) {
        v3setMagnitude(vShift, vShift, absOffset * multipleOffsetFactor);
        builder.add(va[0], va[1], va[2], vm[0], vm[1], vm[2], edgeIndex);
        v3scale(tmpV12, v3sub(tmpV12, va, vm), linkSpacing * linkScale);
        v3sub(va, va, tmpV12);
        if (order === 3)
          builder.add(va[0] + vShift[0], va[1] + vShift[1], va[2] + vShift[2], vm[0] + vShift[0], vm[1] + vShift[1], vm[2] + vShift[2], edgeIndex);
        builder.add(va[0] - vShift[0], va[1] - vShift[1], va[2] - vShift[2], vm[0] - vShift[0], vm[1] - vShift[1], vm[2] - vShift[2], edgeIndex);
      } else {
        v3setMagnitude(vShift, vShift, absOffset * 1.5);
        if (order === 3)
          builder.add(va[0], va[1], va[2], vm[0], vm[1], vm[2], edgeIndex);
        builder.add(va[0] + vShift[0], va[1] + vShift[1], va[2] + vShift[2], vm[0] + vShift[0], vm[1] + vShift[1], vm[2] + vShift[2], edgeIndex);
        builder.add(va[0] - vShift[0], va[1] - vShift[1], va[2] - vShift[2], vm[0] - vShift[0], vm[1] - vShift[1], vm[2] - vShift[2], edgeIndex);
      }
    } else if (linkStyle === LinkStyle.Disk) {
      v3scale(tmpV12, v3sub(tmpV12, vm, va), 0.475);
      v3add(va, va, tmpV12);
      v3sub(vm, vm, tmpV12);
      builder.add(va[0], va[1], va[2], vm[0], vm[1], vm[2], edgeIndex);
    }
  }
  const l = builder.getLines();
  if (count === 0)
    return { lines: l };
  Vec3.scale(center, center, 1 / count);
  const oldBoundingSphere = lines ? Sphere3D.clone(lines.boundingSphere) : void 0;
  if (oldBoundingSphere && Vec3.distance(center, oldBoundingSphere.center) / oldBoundingSphere.radius < 0.1) {
    return { lines: l, boundingSphere: oldBoundingSphere };
  } else {
    return { lines: l };
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/representations/shared.js
var InteractionsSharedParams = {
  sizeFactor: ParamDefinition.Numeric(0.3, { min: 0, max: 10, step: 0.01 }),
  dashCount: ParamDefinition.Numeric(6, { min: 1, max: 10, step: 1 }),
  dashScale: ParamDefinition.Numeric(0.4, { min: 0, max: 2, step: 0.1 }),
  ignoreHydrogens: ParamDefinition.Boolean(false),
  ignoreHydrogensVariant: ParamDefinition.Select("all", ParamDefinition.arrayToOptions(["all", "non-polar"])),
  includeParent: ParamDefinition.Boolean(false),
  parentDisplay: ParamDefinition.Select("stub", ParamDefinition.arrayToOptions(["stub", "full", "between"]), { description: 'Only has an effect when "includeParent" is enabled. "Stub" shows just the child side of interactions to the parent. "Full" shows both sides of interactions to the parent. "Between" shows only interactions to the parent.' })
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/representations/interactions-intra-unit-cylinder.js
async function createIntraUnitInteractionsCylinderMesh(ctx, unit, structure, theme, props, mesh) {
  if (!Unit.isAtomic(unit))
    return Mesh.createEmpty(mesh);
  const { child } = structure;
  const childUnit = child === null || child === void 0 ? void 0 : child.unitMap.get(unit.id);
  if (child && !childUnit)
    return Mesh.createEmpty(mesh);
  const location2 = element_exports.Location.create(structure, unit);
  const interactions = InteractionsProvider.get(structure).value;
  const features = interactions.unitsFeatures.get(unit.id);
  const contacts = interactions.unitsContacts.get(unit.id);
  const { x, y, z, members, offsets, types } = features;
  const { edgeCount, a, b, edgeProps: { flag, type } } = contacts;
  const { sizeFactor, ignoreHydrogens, ignoreHydrogensVariant, parentDisplay } = props;
  if (!edgeCount)
    return Mesh.createEmpty(mesh);
  const { elements, conformation: c } = unit;
  const p = Vec3();
  const pA = Vec3();
  const pB = Vec3();
  const builderProps = {
    linkCount: edgeCount * 2,
    position: (posA, posB, edgeIndex) => {
      const t = type[edgeIndex];
      if ((!ignoreHydrogens || ignoreHydrogensVariant !== "all") && (t === InteractionType.HydrogenBond || t === InteractionType.WeakHydrogenBond && ignoreHydrogensVariant !== "non-polar")) {
        const idxA = members[offsets[a[edgeIndex]]];
        const idxB = members[offsets[b[edgeIndex]]];
        c.invariantPosition(elements[idxA], pA);
        c.invariantPosition(elements[idxB], pB);
        let minDistA = Vec3.distance(pA, pB);
        let minDistB = minDistA;
        Vec3.copy(posA, pA);
        Vec3.copy(posB, pB);
        const donorType = t === InteractionType.HydrogenBond ? FeatureType.HydrogenDonor : FeatureType.WeakHydrogenDonor;
        const isHydrogenDonorA = types[offsets[a[edgeIndex]]] === donorType;
        if (isHydrogenDonorA) {
          eachIntraBondedAtom(unit, idxA, (_, idx) => {
            if (isHydrogen2(structure, unit, elements[idx], "all")) {
              c.invariantPosition(elements[idx], p);
              const dist = Vec3.distance(p, pB);
              if (dist < minDistA) {
                minDistA = dist;
                Vec3.copy(posA, p);
              }
            }
          });
        } else {
          eachIntraBondedAtom(unit, idxB, (_, idx) => {
            if (isHydrogen2(structure, unit, elements[idx], "all")) {
              c.invariantPosition(elements[idx], p);
              const dist = Vec3.distance(p, pA);
              if (dist < minDistB) {
                minDistB = dist;
                Vec3.copy(posB, p);
              }
            }
          });
        }
      } else {
        Vec3.set(posA, x[a[edgeIndex]], y[a[edgeIndex]], z[a[edgeIndex]]);
        Vec3.set(posB, x[b[edgeIndex]], y[b[edgeIndex]], z[b[edgeIndex]]);
      }
    },
    style: (edgeIndex) => LinkStyle.Dashed,
    radius: (edgeIndex) => {
      location2.element = elements[members[offsets[a[edgeIndex]]]];
      const sizeA = theme.size.size(location2);
      location2.element = elements[members[offsets[b[edgeIndex]]]];
      const sizeB = theme.size.size(location2);
      return Math.min(sizeA, sizeB) * sizeFactor;
    },
    ignore: (edgeIndex) => {
      if (flag[edgeIndex] === InteractionFlag.Filtered)
        return true;
      if (childUnit) {
        if (parentDisplay === "stub") {
          const f = a[edgeIndex];
          for (let i = offsets[f], il = offsets[f + 1]; i < il; ++i) {
            const e = elements[members[offsets[i]]];
            if (!SortedArray.has(childUnit.elements, e))
              return true;
          }
        } else if (parentDisplay === "full" || parentDisplay === "between") {
          let flagA = false;
          let flagB = false;
          const fA = a[edgeIndex];
          for (let i = offsets[fA], il = offsets[fA + 1]; i < il; ++i) {
            const eA = elements[members[offsets[i]]];
            if (!SortedArray.has(childUnit.elements, eA))
              flagA = true;
          }
          const fB = b[edgeIndex];
          for (let i = offsets[fB], il = offsets[fB + 1]; i < il; ++i) {
            const eB = elements[members[offsets[i]]];
            if (!SortedArray.has(childUnit.elements, eB))
              flagB = true;
          }
          return parentDisplay === "full" ? flagA && flagB : flagA === flagB;
        } else {
          assertUnreachable(parentDisplay);
        }
      }
      return false;
    }
  };
  const { mesh: m, boundingSphere } = createLinkCylinderMesh(ctx, builderProps, props, mesh);
  if (boundingSphere) {
    m.setBoundingSphere(boundingSphere);
  } else if (m.triangleCount > 0) {
    const sphere = Sphere3D.expand(Sphere3D(), (childUnit !== null && childUnit !== void 0 ? childUnit : unit).boundary.sphere, 1 * sizeFactor);
    m.setBoundingSphere(sphere);
  }
  return m;
}
var InteractionsIntraUnitParams = {
  ...UnitsMeshParams,
  ...LinkCylinderParams,
  ...InteractionsSharedParams
};
function InteractionsIntraUnitVisual(materialId) {
  return UnitsMeshVisual({
    defaultProps: ParamDefinition.getDefaultValues(InteractionsIntraUnitParams),
    createGeometry: createIntraUnitInteractionsCylinderMesh,
    createLocationIterator: createInteractionsIterator,
    getLoci: getInteractionLoci,
    eachLocation: eachInteraction,
    setUpdateState: (state, newProps, currentProps, newTheme, currentTheme, newStructureGroup, currentStructureGroup) => {
      state.createGeometry = newProps.sizeFactor !== currentProps.sizeFactor || newProps.dashCount !== currentProps.dashCount || newProps.dashScale !== currentProps.dashScale || newProps.dashCap !== currentProps.dashCap || newProps.radialSegments !== currentProps.radialSegments || newProps.ignoreHydrogens !== currentProps.ignoreHydrogens || newProps.ignoreHydrogensVariant !== currentProps.ignoreHydrogensVariant || newProps.parentDisplay !== currentProps.parentDisplay;
      const interactionsHash = InteractionsProvider.get(newStructureGroup.structure).version;
      if (state.info.interactionsHash !== interactionsHash) {
        state.createGeometry = true;
        state.updateTransform = true;
        state.updateColor = true;
        state.info.interactionsHash = interactionsHash;
      }
    }
  }, materialId);
}
function getInteractionLoci(pickingId, structureGroup, id) {
  const { objectId, instanceId, groupId } = pickingId;
  if (id === objectId) {
    const { structure, group } = structureGroup;
    const unit = structure.unitMap.get(group.units[instanceId].id);
    const interactions = InteractionsProvider.get(structure).value;
    const { a, b } = interactions.unitsContacts.get(unit.id);
    return Interactions.Loci(structure, interactions, [
      { unitA: unit, indexA: a[groupId], unitB: unit, indexB: b[groupId] },
      { unitA: unit, indexA: b[groupId], unitB: unit, indexB: a[groupId] }
    ]);
  }
  return EmptyLoci;
}
var __contactIndicesSet = /* @__PURE__ */ new Set();
function eachInteraction(loci, structureGroup, apply, isMarking) {
  let changed = false;
  if (Interactions.isLoci(loci)) {
    const { structure, group } = structureGroup;
    if (!Structure.areEquivalent(loci.data.structure, structure))
      return false;
    const interactions = InteractionsProvider.get(structure).value;
    if (loci.data.interactions !== interactions)
      return false;
    const unit = group.units[0];
    const contacts = interactions.unitsContacts.get(unit.id);
    const groupCount = contacts.edgeCount * 2;
    for (const e of loci.elements) {
      if (e.unitA !== e.unitB)
        continue;
      const unitIdx = group.unitIndexMap.get(e.unitA.id);
      if (unitIdx !== void 0) {
        const idx = contacts.getDirectedEdgeIndex(e.indexA, e.indexB);
        if (idx !== -1) {
          if (apply(Interval.ofSingleton(unitIdx * groupCount + idx)))
            changed = true;
        }
      }
    }
  } else if (element_exports.Loci.is(loci)) {
    const { structure, group } = structureGroup;
    if (!Structure.areEquivalent(loci.structure, structure))
      return false;
    const interactions = InteractionsProvider.get(structure).value;
    if (!interactions)
      return false;
    const unit = group.units[0];
    const contacts = interactions.unitsContacts.get(unit.id);
    const features = interactions.unitsFeatures.get(unit.id);
    const groupCount = contacts.edgeCount * 2;
    const { offset } = contacts;
    const { offsets: fOffsets, indices: fIndices } = features.elementsIndex;
    const { members, offsets } = features;
    for (const e of loci.elements) {
      const unitIdx = group.unitIndexMap.get(e.unit.id);
      if (unitIdx === void 0)
        continue;
      OrderedSet.forEach(e.indices, (v) => {
        for (let i = fOffsets[v], il = fOffsets[v + 1]; i < il; ++i) {
          const fI = fIndices[i];
          for (let j = offset[fI], jl = offset[fI + 1]; j < jl; ++j) {
            __contactIndicesSet.add(j);
          }
        }
      });
      __contactIndicesSet.forEach((i) => {
        if (isMarking) {
          const fA = contacts.a[i];
          for (let j = offsets[fA], jl = offsets[fA + 1]; j < jl; ++j) {
            if (!OrderedSet.has(e.indices, members[j]))
              return;
          }
          const fB = contacts.b[i];
          for (let j = offsets[fB], jl = offsets[fB + 1]; j < jl; ++j) {
            if (!OrderedSet.has(e.indices, members[j]))
              return;
          }
        }
        if (apply(Interval.ofSingleton(unitIdx * groupCount + i)))
          changed = true;
      });
      __contactIndicesSet.clear();
    }
  }
  return changed;
}
function createInteractionsIterator(structureGroup) {
  const { structure, group } = structureGroup;
  const unit = group.units[0];
  const interactions = InteractionsProvider.get(structure).value;
  const contacts = interactions.unitsContacts.get(unit.id);
  const groupCount = contacts.edgeCount * 2;
  const instanceCount = group.units.length;
  const location2 = Interactions.Location(interactions, structure);
  const { element } = location2;
  const getLocation = (groupIndex, instanceIndex) => {
    const instanceUnit = group.units[instanceIndex];
    element.unitA = instanceUnit;
    element.indexA = contacts.a[groupIndex];
    element.unitB = instanceUnit;
    element.indexB = contacts.b[groupIndex];
    return location2;
  };
  return LocationIterator(groupCount, instanceCount, 1, getLocation);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/representations/interactions-inter-unit-cylinder.js
function createInterUnitInteractionCylinderMesh(ctx, structure, theme, props, mesh) {
  if (!structure.hasAtomic)
    return Mesh.createEmpty(mesh);
  const l = element_exports.Location.create(structure);
  const interactions = InteractionsProvider.get(structure).value;
  const { contacts, unitsFeatures } = interactions;
  const { edgeCount, edges } = contacts;
  const { sizeFactor, ignoreHydrogens, ignoreHydrogensVariant, parentDisplay } = props;
  if (!edgeCount)
    return Mesh.createEmpty(mesh);
  const { child } = structure;
  const p = Vec3();
  const pA = Vec3();
  const pB = Vec3();
  const builderProps = {
    linkCount: edgeCount,
    position: (posA, posB, edgeIndex) => {
      const { unitA, indexA, unitB, indexB, props: { type: t } } = edges[edgeIndex];
      const fA = unitsFeatures.get(unitA);
      const fB = unitsFeatures.get(unitB);
      const uA = structure.unitMap.get(unitA);
      const uB = structure.unitMap.get(unitB);
      if ((!ignoreHydrogens || ignoreHydrogensVariant !== "all") && (t === InteractionType.HydrogenBond || t === InteractionType.WeakHydrogenBond && ignoreHydrogensVariant !== "non-polar")) {
        const idxA = fA.members[fA.offsets[indexA]];
        const idxB = fB.members[fB.offsets[indexB]];
        uA.conformation.position(uA.elements[idxA], pA);
        uB.conformation.position(uB.elements[idxB], pB);
        let minDistA = Vec3.distance(pA, pB);
        let minDistB = minDistA;
        Vec3.copy(posA, pA);
        Vec3.copy(posB, pB);
        const donorType = t === InteractionType.HydrogenBond ? FeatureType.HydrogenDonor : FeatureType.WeakHydrogenDonor;
        const isHydrogenDonorA = fA.types[fA.offsets[indexA]] === donorType;
        if (isHydrogenDonorA) {
          eachBondedAtom(structure, uA, idxA, (u, idx) => {
            const eI = u.elements[idx];
            if (isHydrogen2(structure, u, eI, "all")) {
              u.conformation.position(eI, p);
              const dist = Vec3.distance(p, pB);
              if (dist < minDistA) {
                minDistA = dist;
                Vec3.copy(posA, p);
              }
            }
          });
        } else {
          eachBondedAtom(structure, uB, idxB, (u, idx) => {
            const eI = u.elements[idx];
            if (isHydrogen2(structure, u, eI, "all")) {
              u.conformation.position(eI, p);
              const dist = Vec3.distance(p, pA);
              if (dist < minDistB) {
                minDistB = dist;
                Vec3.copy(posB, p);
              }
            }
          });
        }
      } else {
        Vec3.set(posA, fA.x[indexA], fA.y[indexA], fA.z[indexA]);
        Vec3.transformMat4(posA, posA, uA.conformation.operator.matrix);
        Vec3.set(posB, fB.x[indexB], fB.y[indexB], fB.z[indexB]);
        Vec3.transformMat4(posB, posB, uB.conformation.operator.matrix);
      }
    },
    style: (edgeIndex) => LinkStyle.Dashed,
    radius: (edgeIndex) => {
      const b = edges[edgeIndex];
      const fA = unitsFeatures.get(b.unitA);
      l.unit = structure.unitMap.get(b.unitA);
      l.element = l.unit.elements[fA.members[fA.offsets[b.indexA]]];
      const sizeA = theme.size.size(l);
      const fB = unitsFeatures.get(b.unitB);
      l.unit = structure.unitMap.get(b.unitB);
      l.element = l.unit.elements[fB.members[fB.offsets[b.indexB]]];
      const sizeB = theme.size.size(l);
      return Math.min(sizeA, sizeB) * sizeFactor;
    },
    ignore: (edgeIndex) => {
      if (edges[edgeIndex].props.flag === InteractionFlag.Filtered)
        return true;
      if (child) {
        const b = edges[edgeIndex];
        if (parentDisplay === "stub") {
          const childUnitA = child.unitMap.get(b.unitA);
          if (!childUnitA)
            return true;
          const unitA = structure.unitMap.get(b.unitA);
          const { offsets, members } = unitsFeatures.get(b.unitA);
          for (let i = offsets[b.indexA], il = offsets[b.indexA + 1]; i < il; ++i) {
            const eA = unitA.elements[members[i]];
            if (!SortedArray.has(childUnitA.elements, eA))
              return true;
          }
        } else if (parentDisplay === "full" || parentDisplay === "between") {
          let flagA = false;
          let flagB = false;
          const childUnitA = child.unitMap.get(b.unitA);
          if (!childUnitA) {
            flagA = true;
          } else {
            const unitA = structure.unitMap.get(b.unitA);
            const { offsets, members } = unitsFeatures.get(b.unitA);
            for (let i = offsets[b.indexA], il = offsets[b.indexA + 1]; i < il; ++i) {
              const eA = unitA.elements[members[i]];
              if (!SortedArray.has(childUnitA.elements, eA))
                flagA = true;
            }
          }
          const childUnitB = child.unitMap.get(b.unitB);
          if (!childUnitB) {
            flagB = true;
          } else {
            const unitB = structure.unitMap.get(b.unitB);
            const { offsets, members } = unitsFeatures.get(b.unitB);
            for (let i = offsets[b.indexB], il = offsets[b.indexB + 1]; i < il; ++i) {
              const eB = unitB.elements[members[i]];
              if (!SortedArray.has(childUnitB.elements, eB))
                flagB = true;
            }
          }
          return parentDisplay === "full" ? flagA && flagB : flagA === flagB;
        } else {
          assertUnreachable(parentDisplay);
        }
      }
      return false;
    }
  };
  const { mesh: m, boundingSphere } = createLinkCylinderMesh(ctx, builderProps, props, mesh);
  if (boundingSphere) {
    m.setBoundingSphere(boundingSphere);
  } else if (m.triangleCount > 0) {
    const { child: child2 } = structure;
    const sphere = Sphere3D.expand(Sphere3D(), (child2 !== null && child2 !== void 0 ? child2 : structure).boundary.sphere, 1 * sizeFactor);
    m.setBoundingSphere(sphere);
  }
  return m;
}
var InteractionsInterUnitParams = {
  ...ComplexMeshParams,
  ...LinkCylinderParams,
  ...InteractionsSharedParams
};
function InteractionsInterUnitVisual(materialId) {
  return ComplexMeshVisual({
    defaultProps: ParamDefinition.getDefaultValues(InteractionsInterUnitParams),
    createGeometry: createInterUnitInteractionCylinderMesh,
    createLocationIterator: createInteractionsIterator2,
    getLoci: getInteractionLoci2,
    eachLocation: eachInteraction2,
    setUpdateState: (state, newProps, currentProps, newTheme, currentTheme, newStructure, currentStructure) => {
      state.createGeometry = newProps.sizeFactor !== currentProps.sizeFactor || newProps.dashCount !== currentProps.dashCount || newProps.dashScale !== currentProps.dashScale || newProps.dashCap !== currentProps.dashCap || newProps.radialSegments !== currentProps.radialSegments || newProps.ignoreHydrogens !== currentProps.ignoreHydrogens || newProps.ignoreHydrogensVariant !== currentProps.ignoreHydrogensVariant || newProps.parentDisplay !== currentProps.parentDisplay;
      const interactionsHash = InteractionsProvider.get(newStructure).version;
      if (state.info.interactionsHash !== interactionsHash) {
        state.createGeometry = true;
        state.updateTransform = true;
        state.updateColor = true;
        state.info.interactionsHash = interactionsHash;
      }
    }
  }, materialId);
}
function getInteractionLoci2(pickingId, structure, id) {
  const { objectId, groupId } = pickingId;
  if (id === objectId) {
    const interactions = InteractionsProvider.get(structure).value;
    const c = interactions.contacts.edges[groupId];
    const unitA = structure.unitMap.get(c.unitA);
    const unitB = structure.unitMap.get(c.unitB);
    return Interactions.Loci(structure, interactions, [
      { unitA, indexA: c.indexA, unitB, indexB: c.indexB },
      { unitA: unitB, indexA: c.indexB, unitB: unitA, indexB: c.indexA }
    ]);
  }
  return EmptyLoci;
}
var __unitMap = /* @__PURE__ */ new Map();
var __contactIndicesSet2 = /* @__PURE__ */ new Set();
function eachInteraction2(loci, structure, apply, isMarking) {
  let changed = false;
  if (Interactions.isLoci(loci)) {
    if (!Structure.areEquivalent(loci.data.structure, structure))
      return false;
    const interactions = InteractionsProvider.get(structure).value;
    if (loci.data.interactions !== interactions)
      return false;
    const { contacts } = interactions;
    for (const c of loci.elements) {
      const idx = contacts.getEdgeIndex(c.indexA, c.unitA.id, c.indexB, c.unitB.id);
      if (idx !== -1) {
        if (apply(Interval.ofSingleton(idx)))
          changed = true;
      }
    }
  } else if (element_exports.Loci.is(loci)) {
    if (!Structure.areEquivalent(loci.structure, structure))
      return false;
    if (isMarking && loci.elements.length === 1)
      return false;
    const interactions = InteractionsProvider.get(structure).value;
    if (!interactions)
      return false;
    const { contacts, unitsFeatures } = interactions;
    for (const e of loci.elements)
      __unitMap.set(e.unit.id, e.indices);
    for (const e of loci.elements) {
      const { unit } = e;
      if (!Unit.isAtomic(unit))
        continue;
      OrderedSet.forEach(e.indices, (v) => {
        for (const idx of contacts.getContactIndicesForElement(v, unit)) {
          __contactIndicesSet2.add(idx);
        }
      });
    }
    __contactIndicesSet2.forEach((i) => {
      if (isMarking) {
        const { indexA, unitA, indexB, unitB } = contacts.edges[i];
        const indicesA = __unitMap.get(unitA);
        const indicesB = __unitMap.get(unitB);
        if (!indicesA || !indicesB)
          return;
        const { offsets: offsetsA, members: membersA } = unitsFeatures.get(unitA);
        for (let j = offsetsA[indexA], jl = offsetsA[indexA + 1]; j < jl; ++j) {
          if (!OrderedSet.has(indicesA, membersA[j]))
            return;
        }
        const { offsets: offsetsB, members: membersB } = unitsFeatures.get(unitB);
        for (let j = offsetsB[indexB], jl = offsetsB[indexB + 1]; j < jl; ++j) {
          if (!OrderedSet.has(indicesB, membersB[j]))
            return;
        }
      }
      if (apply(Interval.ofSingleton(i)))
        changed = true;
    });
    __unitMap.clear();
    __contactIndicesSet2.clear();
  }
  return changed;
}
function createInteractionsIterator2(structure) {
  const interactions = InteractionsProvider.get(structure).value;
  const { contacts } = interactions;
  const groupCount = contacts.edgeCount;
  const instanceCount = 1;
  const location2 = Interactions.Location(interactions, structure);
  const { element } = location2;
  const getLocation = (groupIndex) => {
    const c = contacts.edges[groupIndex];
    element.unitA = structure.unitMap.get(c.unitA);
    element.indexA = c.indexA;
    element.unitB = structure.unitMap.get(c.unitB);
    element.indexB = c.indexB;
    return location2;
  };
  return LocationIterator(groupCount, instanceCount, 1, getLocation, true);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/computed/representations/interactions.js
var InteractionsVisuals = {
  "intra-unit": (ctx, getParams) => UnitsRepresentation("Intra-unit interactions cylinder", ctx, getParams, InteractionsIntraUnitVisual),
  "inter-unit": (ctx, getParams) => ComplexRepresentation("Inter-unit interactions cylinder", ctx, getParams, InteractionsInterUnitVisual)
};
var InteractionsParams3 = {
  ...InteractionsIntraUnitParams,
  ...InteractionsInterUnitParams,
  unitKinds: getUnitKindsParam(["atomic"]),
  sizeFactor: ParamDefinition.Numeric(0.2, { min: 0.01, max: 1, step: 0.01 }),
  visuals: ParamDefinition.MultiSelect(["intra-unit", "inter-unit"], ParamDefinition.objectToOptions(InteractionsVisuals))
};
function getInteractionParams(ctx, structure) {
  return ParamDefinition.clone(InteractionsParams3);
}
function InteractionRepresentation(ctx, getParams) {
  return Representation.createMulti("Interactions", ctx, getParams, StructureRepresentationStateBuilder, InteractionsVisuals);
}
var InteractionsRepresentationProvider = StructureRepresentationProvider({
  name: "interactions",
  label: "Non-covalent Interactions",
  description: "Displays non-covalent interactions as dashed cylinders.",
  factory: InteractionRepresentation,
  getParams: getInteractionParams,
  defaultValues: ParamDefinition.getDefaultValues(InteractionsParams3),
  defaultColorTheme: { name: "interaction-type" },
  defaultSizeTheme: { name: "uniform" },
  isApplicable: (structure) => structure.elementCount > 0 && InteractionsProvider.isApplicable(structure),
  ensureCustomProperties: {
    attach: (ctx, structure) => InteractionsProvider.attach(ctx, structure, void 0, true),
    detach: (data) => InteractionsProvider.ref(data, false)
  },
  getData: (structure, props) => {
    return props.includeParent ? structure.asParent() : structure;
  },
  mustRecreate: (oldProps, newProps) => {
    return oldProps.includeParent !== newProps.includeParent;
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/custom-props/computed/interactions.js
var Interactions2 = PluginBehavior.create({
  name: "computed-interactions-prop",
  category: "custom-props",
  display: { name: "Interactions" },
  ctor: class extends PluginBehavior.Handler {
    constructor() {
      super(...arguments);
      this.provider = InteractionsProvider;
      this.labelProvider = {
        label: (loci) => {
          if (!this.params.showTooltip)
            return void 0;
          switch (loci.kind) {
            case "element-loci":
              if (loci.elements.length === 0)
                return void 0;
              const labels = [];
              const structures = this.getStructures(loci.structure);
              for (const s of structures) {
                const interactions = this.provider.get(s).value;
                if (!interactions)
                  continue;
                const l = element_exports.Loci.remap(loci, s);
                if (l.elements.length !== 1)
                  continue;
                const e = l.elements[0];
                if (OrderedSet.size(e.indices) !== 1)
                  continue;
                const features = interactions.unitsFeatures.get(e.unit.id);
                if (!features)
                  continue;
                const typeLabels = [];
                const groupLabels = [];
                const label = [];
                const idx = OrderedSet.start(e.indices);
                const { types, groups, elementsIndex: { indices, offsets } } = features;
                for (let i = offsets[idx], il = offsets[idx + 1]; i < il; ++i) {
                  const f = indices[i];
                  const type = types[f];
                  const group = groups[f];
                  if (type)
                    typeLabels.push(featureTypeLabel(type));
                  if (group)
                    groupLabels.push(featureGroupLabel(group));
                }
                if (typeLabels.length)
                  label.push(`<small>Types</small> ${typeLabels.join(", ")}`);
                if (groupLabels.length)
                  label.push(`<small>Groups</small> ${groupLabels.join(", ")}`);
                if (label.length)
                  labels.push(`Interaction Feature: ${label.join(" | ")}`);
              }
              return labels.length ? labels.join("<br/>") : void 0;
            default:
              return void 0;
          }
        }
      };
    }
    getStructures(structure) {
      const structures = [];
      const root = this.ctx.helpers.substructureParent.get(structure);
      if (root) {
        const state = this.ctx.state.data;
        const selections = state.select(StateSelection.Generators.ofType(PluginStateObject.Molecule.Structure, root.transform.ref));
        for (const s of selections) {
          if (s.obj)
            arraySetAdd(structures, s.obj.data);
        }
      }
      return structures;
    }
    update(p) {
      const updated = this.params.autoAttach !== p.autoAttach || this.params.showTooltip !== p.showTooltip;
      this.params.autoAttach = p.autoAttach;
      this.params.showTooltip = p.showTooltip;
      this.ctx.customStructureProperties.setDefaultAutoAttach(this.provider.descriptor.name, this.params.autoAttach);
      return updated;
    }
    register() {
      this.ctx.customStructureProperties.register(this.provider, this.params.autoAttach);
      this.ctx.representation.structure.themes.colorThemeRegistry.add(InteractionTypeColorThemeProvider);
      this.ctx.managers.lociLabels.addProvider(this.labelProvider);
      this.ctx.representation.structure.registry.add(InteractionsRepresentationProvider);
    }
    unregister() {
      this.ctx.customStructureProperties.unregister(this.provider.descriptor.name);
      this.ctx.representation.structure.themes.colorThemeRegistry.remove(InteractionTypeColorThemeProvider);
      this.ctx.managers.lociLabels.removeProvider(this.labelProvider);
      this.ctx.representation.structure.registry.remove(InteractionsRepresentationProvider);
    }
  },
  params: () => ({
    autoAttach: ParamDefinition.Boolean(false),
    showTooltip: ParamDefinition.Boolean(true)
  })
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/custom-props/computed/secondary-structure.js
var SecondaryStructure = PluginBehavior.create({
  name: "computed-secondary-structure-prop",
  category: "custom-props",
  display: { name: "Secondary Structure" },
  ctor: class extends PluginBehavior.Handler {
    constructor() {
      super(...arguments);
      this.provider = SecondaryStructureProvider;
    }
    update(p) {
      const updated = this.params.autoAttach !== p.autoAttach;
      this.params.autoAttach = p.autoAttach;
      this.ctx.customStructureProperties.setDefaultAutoAttach(this.provider.descriptor.name, this.params.autoAttach);
      return updated;
    }
    register() {
      this.ctx.customStructureProperties.register(this.provider, this.params.autoAttach);
    }
    unregister() {
      this.ctx.customStructureProperties.unregister(this.provider.descriptor.name);
    }
  },
  params: () => ({
    autoAttach: ParamDefinition.Boolean(false)
  })
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/custom-props/computed/valence-model.js
var ValenceModel = PluginBehavior.create({
  name: "computed-valence-model-prop",
  category: "custom-props",
  display: { name: "Valence Model" },
  ctor: class extends PluginBehavior.Handler {
    constructor() {
      super(...arguments);
      this.provider = ValenceModelProvider;
      this.labelProvider = {
        label: (loci) => {
          if (!this.params.showTooltip)
            return void 0;
          switch (loci.kind) {
            case "element-loci":
              if (loci.elements.length === 0)
                return void 0;
              const labels = [];
              const structures = this.getStructures(loci.structure);
              for (const s of structures) {
                const valenceModel = this.provider.get(s).value;
                if (!valenceModel)
                  continue;
                const l = element_exports.Loci.remap(loci, s);
                if (l.elements.length !== 1)
                  continue;
                const e = l.elements[0];
                if (OrderedSet.size(e.indices) !== 1)
                  continue;
                const vm = valenceModel.get(e.unit.id);
                if (!vm)
                  continue;
                const idx = OrderedSet.start(e.indices);
                const charge = vm.charge[idx];
                const idealGeometry = vm.idealGeometry[idx];
                const implicitH = vm.implicitH[idx];
                const totalH = vm.totalH[idx];
                labels.push(`Valence Model: <small>Charge</small> ${charge} | <small>Ideal Geometry</small> ${geometryLabel(idealGeometry)} | <small>Implicit H</small> ${implicitH} | <small>Total H</small> ${totalH}`);
              }
              return labels.length ? labels.join("<br/>") : void 0;
            default:
              return void 0;
          }
        }
      };
    }
    getStructures(structure) {
      const structures = [];
      const root = this.ctx.helpers.substructureParent.get(structure);
      if (root) {
        const state = this.ctx.state.data;
        const selections = state.select(StateSelection.Generators.ofType(PluginStateObject.Molecule.Structure, root.transform.ref));
        for (const s of selections) {
          if (s.obj)
            arraySetAdd(structures, s.obj.data);
        }
      }
      return structures;
    }
    update(p) {
      const updated = this.params.autoAttach !== p.autoAttach || this.params.showTooltip !== p.showTooltip;
      this.params.autoAttach = p.autoAttach;
      this.params.showTooltip = p.showTooltip;
      this.ctx.customStructureProperties.setDefaultAutoAttach(this.provider.descriptor.name, this.params.autoAttach);
      return updated;
    }
    register() {
      this.ctx.customStructureProperties.register(this.provider, this.params.autoAttach);
      this.ctx.managers.lociLabels.addProvider(this.labelProvider);
    }
    unregister() {
      this.ctx.customStructureProperties.unregister(this.provider.descriptor.name);
      this.ctx.managers.lociLabels.removeProvider(this.labelProvider);
    }
  },
  params: () => ({
    autoAttach: ParamDefinition.Boolean(false),
    showTooltip: ParamDefinition.Boolean(true)
  })
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/sequence/themes/sifts-mapping.js
var DefaultColor3 = Color(16448250);
var Description3 = "Assigns a color based on SIFTS mapping.";
var globalAccessionMap = /* @__PURE__ */ new Map();
var SIFTSMappingColorThemeParams = {
  ...getPaletteParams({ type: "colors", colorList: "set-1" })
};
function getSIFTSMappingColorThemeParams(ctx) {
  return SIFTSMappingColorThemeParams;
}
function SIFTSMappingColorTheme(ctx, props) {
  let color;
  if (ctx.structure) {
    for (const m of ctx.structure.models) {
      const mapping = SIFTSMapping.Provider.get(m).value;
      if (!mapping)
        continue;
      for (const acc of mapping.accession) {
        if (!acc || globalAccessionMap.has(acc))
          continue;
        globalAccessionMap.set(acc, globalAccessionMap.size);
      }
    }
    const l = element_exports.Location.create(ctx.structure);
    const palette = getPalette(globalAccessionMap.size + 1, props, { valueLabel: (i) => `${i}` });
    const colorMap = /* @__PURE__ */ new Map();
    const getColor = (location2) => {
      const key = SIFTSMapping.getKey(location2);
      if (!key)
        return DefaultColor3;
      if (colorMap.has(key))
        return colorMap.get(key);
      const color2 = palette.color(globalAccessionMap.get(key));
      colorMap.set(key, color2);
      return color2;
    };
    color = (location2) => {
      if (element_exports.Location.is(location2) && Unit.isAtomic(location2.unit)) {
        return getColor(location2);
      } else if (Bond.isLocation(location2)) {
        l.unit = location2.aUnit;
        l.element = location2.aUnit.elements[location2.aIndex];
        return getColor(l);
      }
      return DefaultColor3;
    };
  } else {
    color = () => DefaultColor3;
  }
  return {
    factory: SIFTSMappingColorTheme,
    granularity: "group",
    preferSmoothing: true,
    color,
    props,
    description: Description3
  };
}
var SIFTSMappingColorThemeProvider = {
  name: "sifts-mapping",
  label: "SIFTS Mapping",
  category: ColorThemeCategory.Residue,
  factory: SIFTSMappingColorTheme,
  getParams: getSIFTSMappingColorThemeParams,
  defaultValues: ParamDefinition.getDefaultValues(SIFTSMappingColorThemeParams),
  isApplicable: (ctx) => {
    var _a;
    return !!((_a = ctx.structure) === null || _a === void 0 ? void 0 : _a.models.some((m) => SIFTSMapping.Provider.isApplicable(m)));
  },
  ensureCustomProperties: {
    attach: async (ctx, data) => {
      if (!data.structure)
        return;
      for (const m of data.structure.models) {
        await SIFTSMapping.Provider.attach(ctx, m, void 0, true);
      }
    },
    detach: (data) => {
      if (!data.structure)
        return;
      for (const m of data.structure.models) {
        SIFTSMapping.Provider.ref(m, false);
      }
    }
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/custom-props/sequence/sifts-mapping.js
var SIFTSMapping2 = PluginBehavior.create({
  name: "sifts-mapping-prop",
  category: "custom-props",
  display: { name: "SIFTS Mapping" },
  ctor: class extends PluginBehavior.Handler {
    constructor() {
      super(...arguments);
      this.provider = SIFTSMapping.Provider;
      this.labelProvider = {
        label: (loci) => {
          if (!this.params.showTooltip)
            return;
          return bestDatabaseSequenceMappingLabel(loci);
        }
      };
    }
    update(p) {
      const updated = this.params.autoAttach !== p.autoAttach || this.params.showTooltip !== p.showTooltip;
      this.params.autoAttach = p.autoAttach;
      this.params.showTooltip = p.showTooltip;
      this.ctx.customStructureProperties.setDefaultAutoAttach(this.provider.descriptor.name, this.params.autoAttach);
      return updated;
    }
    register() {
      this.ctx.customModelProperties.register(this.provider, this.params.autoAttach);
      this.ctx.representation.structure.themes.colorThemeRegistry.add(SIFTSMappingColorThemeProvider);
      this.ctx.managers.lociLabels.addProvider(this.labelProvider);
    }
    unregister() {
      this.ctx.customModelProperties.unregister(this.provider.descriptor.name);
      this.ctx.representation.structure.themes.colorThemeRegistry.remove(SIFTSMappingColorThemeProvider);
      this.ctx.managers.lociLabels.removeProvider(this.labelProvider);
    }
  },
  params: () => ({
    autoAttach: ParamDefinition.Boolean(true),
    showTooltip: ParamDefinition.Boolean(true)
  })
});
function bestDatabaseSequenceMappingLabel(loci) {
  if (loci.kind === "element-loci") {
    if (loci.elements.length === 0)
      return;
    const e = loci.elements[0];
    const u = e.unit;
    const se = element_exports.Location.create(loci.structure, u, u.elements[OrderedSet.getAt(e.indices, 0)]);
    return SIFTSMapping.getLabel(se);
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/integrative/cross-link-restraint/format.js
var ModelCrossLinkRestraint;
(function(ModelCrossLinkRestraint2) {
  ModelCrossLinkRestraint2.Descriptor = {
    name: "ihm_cross_link_restraint"
    // TODO cifExport
  };
  ModelCrossLinkRestraint2.Provider = FormatPropertyProvider.create(ModelCrossLinkRestraint2.Descriptor);
  function fromTable(table, model) {
    const p1 = {
      entity_id: table.entity_id_1,
      asym_id: table.asym_id_1,
      seq_id: table.seq_id_1,
      atom_id: table.atom_id_1
    };
    const p2 = {
      entity_id: table.entity_id_2,
      asym_id: table.asym_id_2,
      seq_id: table.seq_id_2,
      atom_id: table.atom_id_2
    };
    function _add(map2, element, row) {
      const indices = map2.get(element);
      if (indices)
        indices.push(row);
      else
        map2.set(element, [row]);
    }
    function add(row, ps) {
      const entityId = ps.entity_id.value(row);
      const asymId = ps.asym_id.value(row);
      const seqId = ps.seq_id.value(row);
      if (table.model_granularity.value(row) === "by-atom") {
        const atomicElement = model.atomicHierarchy.index.findAtom({
          auth_seq_id: seqId,
          label_asym_id: asymId,
          label_atom_id: ps.atom_id.value(row),
          label_entity_id: entityId
        });
        if (atomicElement >= 0)
          _add(atomicElementMap, atomicElement, row);
      } else if (model.coarseHierarchy.isDefined) {
        const sphereElement = model.coarseHierarchy.spheres.findSequenceKey(entityId, asymId, seqId);
        if (sphereElement >= 0) {
          _add(sphereElementMap, sphereElement, row);
        } else {
          const gaussianElement = model.coarseHierarchy.gaussians.findSequenceKey(entityId, asymId, seqId);
          if (gaussianElement >= 0)
            _add(gaussianElementMap, gaussianElement, row);
        }
      }
    }
    function getMapByKind(kind) {
      switch (kind) {
        case Unit.Kind.Atomic:
          return atomicElementMap;
        case Unit.Kind.Spheres:
          return sphereElementMap;
        case Unit.Kind.Gaussians:
          return gaussianElementMap;
      }
    }
    const atomicElementMap = /* @__PURE__ */ new Map();
    const sphereElementMap = /* @__PURE__ */ new Map();
    const gaussianElementMap = /* @__PURE__ */ new Map();
    const emptyIndexArray = [];
    for (let i = 0; i < table._rowCount; ++i) {
      add(i, p1);
      add(i, p2);
    }
    return {
      getIndicesByElement: (element, kind) => {
        const map2 = getMapByKind(kind);
        const idx = map2.get(element);
        return idx !== void 0 ? idx : emptyIndexArray;
      },
      data: table
    };
  }
  ModelCrossLinkRestraint2.fromTable = fromTable;
})(ModelCrossLinkRestraint || (ModelCrossLinkRestraint = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/integrative/pair-restraints.js
var emptyArray = [];
function getPairKey(indexA, unitA, indexB, unitB) {
  return `${indexA}|${unitA.id}|${indexB}|${unitB.id}`;
}
var PairRestraints = class {
  /** Indices into this.pairs */
  getPairIndices(indexA, unitA, indexB, unitB) {
    const key = getPairKey(indexA, unitA, indexB, unitB);
    return this.pairKeyIndices.get(key) || emptyArray;
  }
  getPairs(indexA, unitA, indexB, unitB) {
    const indices = this.getPairIndices(indexA, unitA, indexB, unitB);
    return indices.map((idx) => this.pairs[idx]);
  }
  constructor(pairs) {
    this.pairs = pairs;
    const pairKeyIndices = /* @__PURE__ */ new Map();
    this.pairs.forEach((p, i) => {
      const key = getPairKey(p.indexA, p.unitA, p.indexB, p.unitB);
      const indices = pairKeyIndices.get(key);
      if (indices)
        indices.push(i);
      else
        pairKeyIndices.set(key, [i]);
    });
    this.count = pairs.length;
    this.pairKeyIndices = pairKeyIndices;
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/integrative/cross-link-restraint/property.js
var CrossLinkRestraintProvider = CustomStructureProperty.createProvider({
  label: "Cross Link Restraint",
  descriptor: CustomPropertyDescriptor({
    name: "integrative-cross-link-restraint"
    // TODO `cifExport` and `symbol`
  }),
  type: "local",
  defaultParams: {},
  getParams: (data) => ({}),
  isApplicable: (data) => data.models.some((m) => !!ModelCrossLinkRestraint.Provider.get(m)),
  obtain: async (ctx, data, props) => {
    return { value: extractCrossLinkRestraints(data) };
  }
});
var CrossLinkRestraint;
(function(CrossLinkRestraint3) {
  let Tag;
  (function(Tag2) {
    Tag2["CrossLinkRestraint"] = "cross-link-restraint";
  })(Tag = CrossLinkRestraint3.Tag || (CrossLinkRestraint3.Tag = {}));
  function isApplicable(structure) {
    return structure.models.some((m) => !!ModelCrossLinkRestraint.Provider.get(m));
  }
  CrossLinkRestraint3.isApplicable = isApplicable;
  const distVecA = Vec3(), distVecB = Vec3();
  function distance(pair) {
    pair.unitA.conformation.position(pair.unitA.elements[pair.indexA], distVecA);
    pair.unitB.conformation.position(pair.unitB.elements[pair.indexB], distVecB);
    return Vec3.distance(distVecA, distVecB);
  }
  CrossLinkRestraint3.distance = distance;
  function Location(crossLinkRestraints, structure, index) {
    return DataLocation("cross-link-restraints", { structure, crossLinkRestraints }, index);
  }
  CrossLinkRestraint3.Location = Location;
  function isLocation(x) {
    return !!x && x.kind === "data-location" && x.tag === "cross-link-restraints";
  }
  CrossLinkRestraint3.isLocation = isLocation;
  function areLocationsEqual(locA, locB) {
    return locA.data.structure === locB.data.structure && locA.data.crossLinkRestraints === locB.data.crossLinkRestraints && locA.element === locB.element;
  }
  CrossLinkRestraint3.areLocationsEqual = areLocationsEqual;
  function _label(crossLinkRestraints, element) {
    const p = crossLinkRestraints.pairs[element];
    return `Cross Link Restraint | Type: ${p.restraintType} | Threshold: ${p.distanceThreshold} Å | Psi: ${p.psi} | Sigma 1: ${p.sigma1} | Sigma 2: ${p.sigma2} | Distance: ${distance(p).toFixed(2)} Å`;
  }
  function locationLabel(location2) {
    return _label(location2.data.crossLinkRestraints, location2.element);
  }
  CrossLinkRestraint3.locationLabel = locationLabel;
  function Loci2(structure, crossLinkRestraints, elements) {
    return DataLoci("cross-link-restraints", { structure, crossLinkRestraints }, elements, (boundingSphere) => getBoundingSphere(crossLinkRestraints, elements, boundingSphere), () => getLabel(structure, crossLinkRestraints, elements));
  }
  CrossLinkRestraint3.Loci = Loci2;
  function isLoci(x) {
    return !!x && x.kind === "data-loci" && x.tag === "interactions";
  }
  CrossLinkRestraint3.isLoci = isLoci;
  function getBoundingSphere(crossLinkRestraints, elements, boundingSphere) {
    return CentroidHelper.fromPairProvider(elements.length, (i, pA, pB) => {
      const p = crossLinkRestraints.pairs[elements[i]];
      p.unitA.conformation.position(p.unitA.elements[p.indexA], pA);
      p.unitB.conformation.position(p.unitB.elements[p.indexB], pB);
    }, boundingSphere);
  }
  CrossLinkRestraint3.getBoundingSphere = getBoundingSphere;
  function getLabel(structure, crossLinkRestraints, elements) {
    const element = elements[0];
    if (element === void 0)
      return "";
    const p = crossLinkRestraints.pairs[element];
    return [
      _label(crossLinkRestraints, element),
      bondLabel(Bond.Location(structure, p.unitA, p.indexA, structure, p.unitB, p.indexB))
    ].join("</br>");
  }
  CrossLinkRestraint3.getLabel = getLabel;
})(CrossLinkRestraint || (CrossLinkRestraint = {}));
function _addRestraints(map2, unit, restraints) {
  const { elements } = unit;
  const elementCount = elements.length;
  const kind = unit.kind;
  for (let i = 0; i < elementCount; i++) {
    const e = elements[i];
    restraints.getIndicesByElement(e, kind).forEach((ri) => map2.set(ri, i));
  }
}
function extractInter(pairs, unitA, unitB) {
  if (unitA.model !== unitB.model)
    return;
  if (unitA.model.sourceData.kind !== "mmCIF")
    return;
  const restraints = ModelCrossLinkRestraint.Provider.get(unitA.model);
  if (!restraints)
    return;
  const rA = /* @__PURE__ */ new Map();
  const rB = /* @__PURE__ */ new Map();
  _addRestraints(rA, unitA, restraints);
  _addRestraints(rB, unitB, restraints);
  rA.forEach((indexA, ri) => {
    const indexB = rB.get(ri);
    if (indexB !== void 0) {
      pairs.push(createCrossLinkRestraint(unitA, indexA, unitB, indexB, restraints, ri), createCrossLinkRestraint(unitB, indexB, unitA, indexA, restraints, ri));
    }
  });
}
function extractIntra(pairs, unit) {
  if (unit.model.sourceData.kind !== "mmCIF")
    return;
  const restraints = ModelCrossLinkRestraint.Provider.get(unit.model);
  if (!restraints)
    return;
  const { elements } = unit;
  const elementCount = elements.length;
  const kind = unit.kind;
  const r = /* @__PURE__ */ new Map();
  for (let i = 0; i < elementCount; i++) {
    const e = elements[i];
    restraints.getIndicesByElement(e, kind).forEach((ri) => {
      const il = r.get(ri);
      if (il)
        il.push(i);
      else
        r.set(ri, [i]);
    });
  }
  r.forEach((il, ri) => {
    if (il.length < 2)
      return;
    const [indexA, indexB] = il;
    pairs.push(createCrossLinkRestraint(unit, indexA, unit, indexB, restraints, ri), createCrossLinkRestraint(unit, indexB, unit, indexA, restraints, ri));
  });
}
function createCrossLinkRestraint(unitA, indexA, unitB, indexB, restraints, row) {
  return {
    unitA,
    indexA,
    unitB,
    indexB,
    restraintType: restraints.data.restraint_type.value(row),
    distanceThreshold: restraints.data.distance_threshold.value(row),
    psi: restraints.data.psi.value(row),
    sigma1: restraints.data.sigma_1.value(row),
    sigma2: restraints.data.sigma_2.value(row)
  };
}
function extractCrossLinkRestraints(structure) {
  const pairs = [];
  if (!structure.models.some((m) => ModelCrossLinkRestraint.Provider.get(m))) {
    return new PairRestraints(pairs);
  }
  const n = structure.units.length;
  for (let i = 0; i < n; ++i) {
    const unitA = structure.units[i];
    extractIntra(pairs, unitA);
    for (let j = i + 1; j < n; ++j) {
      const unitB = structure.units[j];
      if (unitA.model === unitB.model) {
        extractInter(pairs, unitA, unitB);
      }
    }
  }
  return new PairRestraints(pairs);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/integrative/cross-link-restraint/representation.js
function createCrossLinkRestraintCylinderMesh(ctx, structure, theme, props, mesh) {
  const crossLinks = CrossLinkRestraintProvider.get(structure).value;
  if (!crossLinks.count)
    return Mesh.createEmpty(mesh);
  const { sizeFactor } = props;
  const location2 = element_exports.Location.create(structure);
  const builderProps = {
    linkCount: crossLinks.count,
    position: (posA, posB, edgeIndex) => {
      const b = crossLinks.pairs[edgeIndex];
      const uA = b.unitA, uB = b.unitB;
      uA.conformation.position(uA.elements[b.indexA], posA);
      uB.conformation.position(uB.elements[b.indexB], posB);
    },
    radius: (edgeIndex) => {
      const b = crossLinks.pairs[edgeIndex];
      location2.unit = b.unitA;
      location2.element = b.unitA.elements[b.indexA];
      return theme.size.size(location2) * sizeFactor;
    }
  };
  const { mesh: m, boundingSphere } = createLinkCylinderMesh(ctx, builderProps, props, mesh);
  if (boundingSphere) {
    m.setBoundingSphere(boundingSphere);
  } else if (m.triangleCount > 0) {
    const sphere = Sphere3D.expand(Sphere3D(), structure.boundary.sphere, 1 * sizeFactor);
    m.setBoundingSphere(sphere);
  }
  return m;
}
var CrossLinkRestraintCylinderParams = {
  ...ComplexMeshParams,
  ...LinkCylinderParams,
  sizeFactor: ParamDefinition.Numeric(0.5, { min: 0, max: 10, step: 0.1 })
};
function CrossLinkRestraintVisual(materialId) {
  return ComplexMeshVisual({
    defaultProps: ParamDefinition.getDefaultValues(CrossLinkRestraintCylinderParams),
    createGeometry: createCrossLinkRestraintCylinderMesh,
    createLocationIterator: createCrossLinkRestraintIterator,
    getLoci: getLinkLoci,
    eachLocation: eachCrossLink,
    setUpdateState: (state, newProps, currentProps) => {
      state.createGeometry = newProps.sizeFactor !== currentProps.sizeFactor || newProps.radialSegments !== currentProps.radialSegments || newProps.linkCap !== currentProps.linkCap;
    }
  }, materialId);
}
function createCrossLinkRestraintIterator(structure) {
  const crossLinkRestraints = CrossLinkRestraintProvider.get(structure).value;
  const { pairs } = crossLinkRestraints;
  const groupCount = pairs.length;
  const instanceCount = 1;
  const location2 = CrossLinkRestraint.Location(crossLinkRestraints, structure);
  const getLocation = (groupIndex) => {
    location2.element = groupIndex;
    return location2;
  };
  return LocationIterator(groupCount, instanceCount, 1, getLocation, true);
}
function getLinkLoci(pickingId, structure, id) {
  const { objectId, groupId } = pickingId;
  if (id === objectId) {
    const crossLinkRestraints = CrossLinkRestraintProvider.get(structure).value;
    const pair = crossLinkRestraints.pairs[groupId];
    if (pair) {
      return CrossLinkRestraint.Loci(structure, crossLinkRestraints, [groupId]);
    }
  }
  return EmptyLoci;
}
function eachCrossLink(loci, structure, apply) {
  let changed = false;
  if (CrossLinkRestraint.isLoci(loci)) {
    if (!Structure.areEquivalent(loci.data.structure, structure))
      return false;
    const crossLinkRestraints = CrossLinkRestraintProvider.get(structure).value;
    if (loci.data.crossLinkRestraints !== crossLinkRestraints)
      return false;
    for (const e of loci.elements) {
      if (apply(Interval.ofSingleton(e)))
        changed = true;
    }
  }
  return changed;
}
var CrossLinkRestraintVisuals = {
  "cross-link-restraint": (ctx, getParams) => ComplexRepresentation("Cross-link restraint", ctx, getParams, CrossLinkRestraintVisual)
};
var CrossLinkRestraintParams = {
  ...CrossLinkRestraintCylinderParams
};
function getCrossLinkRestraintParams(ctx, structure) {
  return ParamDefinition.clone(CrossLinkRestraintParams);
}
function CrossLinkRestraintRepresentation(ctx, getParams) {
  return Representation.createMulti("CrossLinkRestraint", ctx, getParams, StructureRepresentationStateBuilder, CrossLinkRestraintVisuals);
}
var CrossLinkRestraintRepresentationProvider = StructureRepresentationProvider({
  name: CrossLinkRestraint.Tag.CrossLinkRestraint,
  label: "Cross Link Restraint",
  description: "Displays cross-link restraints.",
  factory: CrossLinkRestraintRepresentation,
  getParams: getCrossLinkRestraintParams,
  defaultValues: ParamDefinition.getDefaultValues(CrossLinkRestraintParams),
  defaultColorTheme: { name: CrossLinkRestraint.Tag.CrossLinkRestraint },
  defaultSizeTheme: { name: "uniform" },
  isApplicable: (structure) => CrossLinkRestraint.isApplicable(structure),
  ensureCustomProperties: {
    attach: (ctx, structure) => CrossLinkRestraintProvider.attach(ctx, structure, void 0, true),
    detach: (data) => CrossLinkRestraintProvider.ref(data, false)
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-model-props/integrative/cross-link-restraint/color.js
var DefaultColor4 = Color(13421772);
var Description4 = "Colors cross-links by the deviation of the observed distance versus the modeled distance (e.g. modeled / `ihm_cross_link_restraint.distance_threshold`).";
var CrossLinkColorThemeParams = {
  domain: ParamDefinition.Interval([0.5, 1.5], { step: 0.01 }),
  list: ParamDefinition.ColorList("red-grey", { presetKind: "scale" })
};
function getCrossLinkColorThemeParams(ctx) {
  return CrossLinkColorThemeParams;
}
function CrossLinkColorTheme(ctx, props) {
  let color;
  let scale = void 0;
  const crossLinkRestraints = ctx.structure && CrossLinkRestraintProvider.get(ctx.structure).value;
  if (crossLinkRestraints) {
    scale = ColorScale.create({
      domain: props.domain,
      listOrName: props.list.colors
    });
    const scaleColor = scale.color;
    color = (location2) => {
      if (CrossLinkRestraint.isLocation(location2)) {
        const pair = crossLinkRestraints.pairs[location2.element];
        if (pair) {
          return scaleColor(CrossLinkRestraint.distance(pair) / pair.distanceThreshold);
        }
      }
      return DefaultColor4;
    };
  } else {
    color = () => DefaultColor4;
  }
  return {
    factory: CrossLinkColorTheme,
    granularity: "group",
    color,
    props,
    description: Description4,
    legend: scale ? scale.legend : void 0
  };
}
var CrossLinkColorThemeProvider = {
  name: "cross-link",
  label: "Cross Link",
  category: ColorThemeCategory.Misc,
  factory: CrossLinkColorTheme,
  getParams: getCrossLinkColorThemeParams,
  defaultValues: ParamDefinition.getDefaultValues(CrossLinkColorThemeParams),
  isApplicable: (ctx) => !!ctx.structure && CrossLinkRestraint.isApplicable(ctx.structure),
  ensureCustomProperties: {
    attach: (ctx, data) => data.structure ? CrossLinkRestraintProvider.attach(ctx, data.structure, void 0, true) : Promise.resolve(),
    detach: (data) => data.structure && CrossLinkRestraintProvider.ref(data.structure, false)
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/custom-props/integrative/cross-link-restraint.js
var CrossLinkRestraint2 = PluginBehavior.create({
  name: "integrative-cross-link-restraint",
  category: "custom-props",
  display: { name: "Cross Link Restraint" },
  ctor: class extends PluginBehavior.Handler {
    constructor() {
      super(...arguments);
      this.provider = ModelCrossLinkRestraint.Provider;
    }
    register() {
      this.provider.formatRegistry.add("mmCIF", crossLinkRestraintFromMmcif);
      this.ctx.representation.structure.themes.colorThemeRegistry.add(CrossLinkColorThemeProvider);
      this.ctx.representation.structure.registry.add(CrossLinkRestraintRepresentationProvider);
    }
    unregister() {
      this.provider.formatRegistry.remove("mmCIF");
      this.ctx.representation.structure.themes.colorThemeRegistry.remove(CrossLinkColorThemeProvider);
      this.ctx.representation.structure.registry.remove(CrossLinkRestraintRepresentationProvider);
    }
  }
});
function crossLinkRestraintFromMmcif(model) {
  if (!MmcifFormat.is(model.sourceData))
    return;
  const { ihm_cross_link_restraint } = model.sourceData.data.db;
  if (ihm_cross_link_restraint._rowCount === 0)
    return;
  return ModelCrossLinkRestraint.fromTable(ihm_cross_link_restraint, model);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior.js
var BuiltInPluginBehaviors = {
  State: state_exports,
  Representation: representation_exports,
  Camera: camera_exports,
  Misc: misc_exports
};
var PluginBehaviors = {
  Representation: representation_exports2,
  Camera: camera_exports2,
  CustomProps: custom_props_exports
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/helpers/structure-representation-params.js
function createStructureRepresentationParams(ctx, structure, props = {}) {
  const p = props;
  if (typeof p.type === "string" || typeof p.color === "string" || typeof p.size === "string")
    return createParamsByName(ctx, structure || Structure.Empty, props);
  return createParamsProvider(ctx, structure || Structure.Empty, props);
}
function getStructureThemeTypes(ctx, structure) {
  const { themes: themeCtx } = ctx.representation.structure;
  if (!structure)
    return themeCtx.colorThemeRegistry.types;
  return themeCtx.colorThemeRegistry.getApplicableTypes({ structure });
}
function createStructureColorThemeParams(ctx, structure, typeName, themeName, params) {
  const { registry, themes } = ctx.representation.structure;
  const repr = registry.get(typeName || registry.default.name);
  const color = themes.colorThemeRegistry.get(themeName || repr.defaultColorTheme.name);
  const colorDefaultParams = ParamDefinition.getDefaultValues(color.getParams({ structure: structure || Structure.Empty }));
  if (color.name === repr.defaultColorTheme.name)
    Object.assign(colorDefaultParams, repr.defaultColorTheme.props);
  return { name: color.name, params: Object.assign(colorDefaultParams, params) };
}
function createStructureSizeThemeParams(ctx, structure, typeName, themeName, params) {
  const { registry, themes } = ctx.representation.structure;
  const repr = registry.get(typeName || registry.default.name);
  const size = themes.sizeThemeRegistry.get(themeName || repr.defaultSizeTheme.name);
  const sizeDefaultParams = ParamDefinition.getDefaultValues(size.getParams({ structure: structure || Structure.Empty }));
  if (size.name === repr.defaultSizeTheme.name)
    Object.assign(sizeDefaultParams, repr.defaultSizeTheme.props);
  return { name: size.name, params: Object.assign(sizeDefaultParams, params) };
}
function createParamsByName(ctx, structure, props) {
  const typeProvider = props.type && ctx.representation.structure.registry.get(props.type) || ctx.representation.structure.registry.default.provider;
  const colorProvider = props.color && ctx.representation.structure.themes.colorThemeRegistry.get(props.color) || ctx.representation.structure.themes.colorThemeRegistry.get(typeProvider.defaultColorTheme.name);
  const sizeProvider = props.size && ctx.representation.structure.themes.sizeThemeRegistry.get(props.size) || ctx.representation.structure.themes.sizeThemeRegistry.get(typeProvider.defaultSizeTheme.name);
  return createParamsProvider(ctx, structure, {
    type: typeProvider,
    typeParams: props.typeParams,
    color: colorProvider,
    colorParams: props.colorParams,
    size: sizeProvider,
    sizeParams: props.sizeParams
  });
}
function createParamsProvider(ctx, structure, props = {}) {
  const { themes: themeCtx } = ctx.representation.structure;
  const themeDataCtx = { structure };
  const repr = props.type || ctx.representation.structure.registry.default.provider;
  const reprDefaultParams = ParamDefinition.getDefaultValues(repr.getParams(themeCtx, structure));
  const reprParams = Object.assign(reprDefaultParams, props.typeParams);
  const color = props.color || themeCtx.colorThemeRegistry.get(repr.defaultColorTheme.name);
  const colorDefaultParams = ParamDefinition.getDefaultValues(color.getParams(themeDataCtx));
  if (color.name === repr.defaultColorTheme.name)
    Object.assign(colorDefaultParams, repr.defaultColorTheme.props);
  const colorParams = Object.assign(colorDefaultParams, props.colorParams);
  const size = props.size || themeCtx.sizeThemeRegistry.get(repr.defaultSizeTheme.name);
  const sizeDefaultParams = ParamDefinition.getDefaultValues(size.getParams(themeDataCtx));
  if (size.name === repr.defaultSizeTheme.name)
    Object.assign(sizeDefaultParams, repr.defaultSizeTheme.props);
  const sizeParams = Object.assign(sizeDefaultParams, props.sizeParams);
  return {
    type: { name: repr.name, params: reprParams },
    colorTheme: { name: color.name, params: colorParams },
    sizeTheme: { name: size.name, params: sizeParams }
  };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/selection/structure-focus-representation.js
var StructureFocusRepresentationParams = (plugin) => {
  const reprParams = StateTransforms.Representation.StructureRepresentation3D.definition.params(void 0, plugin);
  return {
    expandRadius: ParamDefinition.Numeric(5, { min: 1, max: 10, step: 1 }),
    targetParams: ParamDefinition.Group(reprParams, {
      label: "Target",
      customDefault: createStructureRepresentationParams(plugin, void 0, {
        type: "ball-and-stick",
        size: "physical",
        typeParams: { sizeFactor: 0.22, sizeAspectRatio: 0.73, adjustCylinderLength: true, xrayShaded: true, aromaticBonds: false, multipleBonds: "off", excludeTypes: ["hydrogen-bond", "metal-coordination"] }
      })
    }),
    surroundingsParams: ParamDefinition.Group(reprParams, {
      label: "Surroundings",
      customDefault: createStructureRepresentationParams(plugin, void 0, {
        type: "ball-and-stick",
        size: "physical",
        typeParams: { sizeFactor: 0.16, excludeTypes: ["hydrogen-bond", "metal-coordination"] }
      })
    }),
    nciParams: ParamDefinition.Group(reprParams, {
      label: "Non-covalent Int.",
      customDefault: createStructureRepresentationParams(plugin, void 0, {
        type: InteractionsRepresentationProvider,
        color: InteractionTypeColorThemeProvider,
        size: SizeTheme.BuiltIn.uniform
      })
    }),
    components: ParamDefinition.MultiSelect(FocusComponents, ParamDefinition.arrayToOptions(FocusComponents)),
    excludeTargetFromSurroundings: ParamDefinition.Boolean(false, { label: "Exclude Target", description: 'Exclude the focus "target" from the surroudings component.' }),
    ignoreHydrogens: ParamDefinition.Boolean(false),
    ignoreHydrogensVariant: ParamDefinition.Select("all", ParamDefinition.arrayToOptions(["all", "non-polar"])),
    ignoreLight: ParamDefinition.Boolean(false),
    material: Material.getParam(),
    clip: ParamDefinition.Group(Clip.Params)
  };
};
var FocusComponents = ["target", "surroundings", "interactions"];
var StructureFocusRepresentationTags;
(function(StructureFocusRepresentationTags2) {
  StructureFocusRepresentationTags2["TargetSel"] = "structure-focus-target-sel";
  StructureFocusRepresentationTags2["TargetRepr"] = "structure-focus-target-repr";
  StructureFocusRepresentationTags2["SurrSel"] = "structure-focus-surr-sel";
  StructureFocusRepresentationTags2["SurrRepr"] = "structure-focus-surr-repr";
  StructureFocusRepresentationTags2["SurrNciRepr"] = "structure-focus-surr-nci-repr";
})(StructureFocusRepresentationTags || (StructureFocusRepresentationTags = {}));
var TagSet = /* @__PURE__ */ new Set([StructureFocusRepresentationTags.TargetSel, StructureFocusRepresentationTags.TargetRepr, StructureFocusRepresentationTags.SurrSel, StructureFocusRepresentationTags.SurrRepr, StructureFocusRepresentationTags.SurrNciRepr]);
var StructureFocusRepresentationBehavior = class extends PluginBehavior.WithSubscribers {
  constructor() {
    super(...arguments);
    this.currentSource = void 0;
  }
  get surrLabel() {
    return `[Focus] Surroundings (${this.params.expandRadius} Å)`;
  }
  getReprParams(reprParams) {
    return {
      ...reprParams,
      type: {
        name: reprParams.type.name,
        params: { ...reprParams.type.params, ignoreHydrogens: this.params.ignoreHydrogens, ignoreHydrogensVariant: this.params.ignoreHydrogensVariant, ignoreLight: this.params.ignoreLight, material: this.params.material, clip: this.params.clip }
      }
    };
  }
  ensureShape(cell) {
    var _a;
    const state = this.plugin.state.data, tree = state.tree;
    const builder = state.build();
    const refs = StateSelection.findUniqueTagsInSubtree(tree, cell.transform.ref, TagSet);
    if (!refs[StructureFocusRepresentationTags.TargetSel]) {
      refs[StructureFocusRepresentationTags.TargetSel] = builder.to(cell).apply(StateTransforms.Model.StructureSelectionFromBundle, { bundle: element_exports.Bundle.Empty, label: "[Focus] Target" }, { tags: StructureFocusRepresentationTags.TargetSel }).ref;
    }
    if (!refs[StructureFocusRepresentationTags.SurrSel]) {
      refs[StructureFocusRepresentationTags.SurrSel] = builder.to(cell).apply(StateTransforms.Model.StructureSelectionFromExpression, { expression: MolScriptBuilder.struct.generator.empty(), label: this.surrLabel }, { tags: StructureFocusRepresentationTags.SurrSel }).ref;
    }
    const components = this.params.components;
    if (components.indexOf("target") >= 0 && !refs[StructureFocusRepresentationTags.TargetRepr]) {
      refs[StructureFocusRepresentationTags.TargetRepr] = builder.to(refs[StructureFocusRepresentationTags.TargetSel]).apply(StateTransforms.Representation.StructureRepresentation3D, this.getReprParams(this.params.targetParams), { tags: StructureFocusRepresentationTags.TargetRepr }).ref;
    }
    if (components.indexOf("surroundings") >= 0 && !refs[StructureFocusRepresentationTags.SurrRepr]) {
      refs[StructureFocusRepresentationTags.SurrRepr] = builder.to(refs[StructureFocusRepresentationTags.SurrSel]).apply(StateTransforms.Representation.StructureRepresentation3D, this.getReprParams(this.params.surroundingsParams), { tags: StructureFocusRepresentationTags.SurrRepr }).ref;
    }
    if (components.indexOf("interactions") >= 0 && !refs[StructureFocusRepresentationTags.SurrNciRepr] && cell.obj && InteractionsRepresentationProvider.isApplicable((_a = cell.obj) === null || _a === void 0 ? void 0 : _a.data)) {
      refs[StructureFocusRepresentationTags.SurrNciRepr] = builder.to(refs[StructureFocusRepresentationTags.SurrSel]).apply(StateTransforms.Representation.StructureRepresentation3D, this.getReprParams(this.params.nciParams), { tags: StructureFocusRepresentationTags.SurrNciRepr }).ref;
    }
    return { state, builder, refs };
  }
  clear(root) {
    const state = this.plugin.state.data;
    this.currentSource = void 0;
    const foci = state.select(StateSelection.Generators.byRef(root).subtree().withTag(StructureFocusRepresentationTags.TargetSel));
    const surrs = state.select(StateSelection.Generators.byRef(root).subtree().withTag(StructureFocusRepresentationTags.SurrSel));
    if (foci.length === 0 && surrs.length === 0)
      return;
    const update = state.build();
    const bundle = element_exports.Bundle.Empty;
    for (const f of foci) {
      update.to(f).update(StateTransforms.Model.StructureSelectionFromBundle, (old) => ({ ...old, bundle }));
    }
    const expression = MolScriptBuilder.struct.generator.empty();
    for (const s of surrs) {
      update.to(s).update(StateTransforms.Model.StructureSelectionFromExpression, (old) => ({ ...old, expression }));
    }
    return PluginCommands.State.Update(this.plugin, { state, tree: update, options: { doNotLogTiming: true, doNotUpdateCurrent: true } });
  }
  async focus(sourceLoci) {
    const parent = this.plugin.helpers.substructureParent.get(sourceLoci.structure);
    if (!parent || !parent.obj)
      return;
    this.currentSource = sourceLoci;
    const loci = element_exports.Loci.remap(sourceLoci, parent.obj.data);
    const residueLoci = element_exports.Loci.extendToWholeResidues(loci);
    const residueBundle = element_exports.Bundle.fromLoci(residueLoci);
    const target = element_exports.Bundle.toExpression(residueBundle);
    let surroundings = MolScriptBuilder.struct.modifier.includeSurroundings({
      0: target,
      radius: this.params.expandRadius,
      "as-whole-residues": true
    });
    if (this.params.excludeTargetFromSurroundings) {
      surroundings = MolScriptBuilder.struct.modifier.exceptBy({
        0: surroundings,
        by: target
      });
    }
    const { state, builder, refs } = this.ensureShape(parent);
    builder.to(refs[StructureFocusRepresentationTags.TargetSel]).update(StateTransforms.Model.StructureSelectionFromBundle, (old) => ({ ...old, bundle: residueBundle }));
    builder.to(refs[StructureFocusRepresentationTags.SurrSel]).update(StateTransforms.Model.StructureSelectionFromExpression, (old) => ({ ...old, expression: surroundings, label: this.surrLabel }));
    await PluginCommands.State.Update(this.plugin, { state, tree: builder, options: { doNotLogTiming: true, doNotUpdateCurrent: true } });
  }
  register(ref) {
    this.subscribeObservable(this.plugin.managers.structure.focus.behaviors.current, (entry) => {
      if (entry)
        this.focus(entry.loci);
      else
        this.clear(Transform.RootRef);
    });
  }
  async update(params) {
    const old = this.params;
    this.params = params;
    if (old.excludeTargetFromSurroundings !== params.excludeTargetFromSurroundings) {
      if (this.currentSource) {
        this.focus(this.currentSource);
      }
      return true;
    }
    const state = this.plugin.state.data;
    const builder = state.build();
    const all = StateSelection.Generators.root.subtree();
    const components = this.params.components;
    let hasComponent = components.indexOf("target") >= 0;
    for (const repr of state.select(all.withTag(StructureFocusRepresentationTags.TargetRepr))) {
      if (!hasComponent)
        builder.delete(repr.transform.ref);
      else
        builder.to(repr).update(this.getReprParams(this.params.targetParams));
    }
    hasComponent = components.indexOf("surroundings") >= 0;
    for (const repr of state.select(all.withTag(StructureFocusRepresentationTags.SurrRepr))) {
      if (!hasComponent)
        builder.delete(repr.transform.ref);
      else
        builder.to(repr).update(this.getReprParams(this.params.surroundingsParams));
    }
    hasComponent = components.indexOf("interactions") >= 0;
    for (const repr of state.select(all.withTag(StructureFocusRepresentationTags.SurrNciRepr))) {
      if (!hasComponent)
        builder.delete(repr.transform.ref);
      else
        builder.to(repr).update(this.getReprParams(this.params.nciParams));
    }
    await PluginCommands.State.Update(this.plugin, { state, tree: builder, options: { doNotLogTiming: true, doNotUpdateCurrent: true } });
    if (params.expandRadius !== old.expandRadius) {
      if (this.currentSource) {
        this.focus(this.currentSource);
      }
      return true;
    }
    return true;
  }
};
var StructureFocusRepresentation = PluginBehavior.create({
  name: "create-structure-focus-representation",
  display: { name: "Structure Focus Representation" },
  category: "interaction",
  ctor: StructureFocusRepresentationBehavior,
  params: (_, plugin) => StructureFocusRepresentationParams(plugin)
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/actions/structure.js
var structure_exports = {};
__export(structure_exports, {
  AddTrajectory: () => AddTrajectory,
  DownloadStructure: () => DownloadStructure,
  EnableModelCustomProps: () => EnableModelCustomProps,
  EnableStructureCustomProps: () => EnableStructureCustomProps,
  LoadTrajectory: () => LoadTrajectory,
  PdbDownloadProvider: () => PdbDownloadProvider,
  UpdateTrajectory: () => UpdateTrajectory
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/builder/structure/representation-preset.js
function StructureRepresentationPresetProvider(repr) {
  return repr;
}
(function(StructureRepresentationPresetProvider2) {
  StructureRepresentationPresetProvider2.CommonParams = {
    ignoreHydrogens: ParamDefinition.Optional(ParamDefinition.Boolean(false)),
    ignoreHydrogensVariant: ParamDefinition.Optional(ParamDefinition.Select("all", ParamDefinition.arrayToOptions(["all", "non-polar"]))),
    ignoreLight: ParamDefinition.Optional(ParamDefinition.Boolean(false)),
    quality: ParamDefinition.Optional(ParamDefinition.Select("auto", VisualQualityOptions)),
    theme: ParamDefinition.Optional(ParamDefinition.Group({
      globalName: ParamDefinition.Optional(ParamDefinition.Text("")),
      globalColorParams: ParamDefinition.Optional(ParamDefinition.Value({}, { isHidden: true })),
      carbonColor: ParamDefinition.Optional(ParamDefinition.Select("chain-id", ParamDefinition.arrayToOptions(["chain-id", "operator-name", "element-symbol"]))),
      symmetryColor: ParamDefinition.Optional(ParamDefinition.Text("")),
      symmetryColorParams: ParamDefinition.Optional(ParamDefinition.Value({}, { isHidden: true })),
      focus: ParamDefinition.Optional(ParamDefinition.Group({
        name: ParamDefinition.Optional(ParamDefinition.Text("")),
        params: ParamDefinition.Optional(ParamDefinition.Value({}))
      }))
    }))
  };
  function getCarbonColorParams(name) {
    return name === "chain-id" ? { name, params: ChainIdColorThemeProvider.defaultValues } : name === "operator-name" ? { name, params: OperatorNameColorThemeProvider.defaultValues } : { name, params: {} };
  }
  function isSymmetry(structure) {
    return structure.units.some((u) => !u.conformation.operator.assembly && u.conformation.operator.spgrOp >= 0);
  }
  function reprBuilder2(plugin, params, structure) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const update = plugin.state.data.build();
    const builder = plugin.builders.structure.representation;
    const h = plugin.managers.structure.component.state.options.hydrogens;
    const typeParams = {
      quality: plugin.managers.structure.component.state.options.visualQuality,
      ignoreHydrogens: h !== "all",
      ignoreHydrogensVariant: h === "only-polar" ? "non-polar" : "all",
      ignoreLight: plugin.managers.structure.component.state.options.ignoreLight
    };
    if (params.quality && params.quality !== "auto")
      typeParams.quality = params.quality;
    if (params.ignoreHydrogens !== void 0)
      typeParams.ignoreHydrogens = !!params.ignoreHydrogens;
    if (params.ignoreHydrogensVariant !== void 0)
      typeParams.ignoreHydrogensVariant = params.ignoreHydrogensVariant;
    if (params.ignoreLight !== void 0)
      typeParams.ignoreLight = !!params.ignoreLight;
    const color = ((_a = params.theme) === null || _a === void 0 ? void 0 : _a.globalName) ? (_b = params.theme) === null || _b === void 0 ? void 0 : _b.globalName : void 0;
    const ballAndStickColor = ((_c = params.theme) === null || _c === void 0 ? void 0 : _c.carbonColor) !== void 0 ? { carbonColor: getCarbonColorParams((_d = params.theme) === null || _d === void 0 ? void 0 : _d.carbonColor), ...(_e = params.theme) === null || _e === void 0 ? void 0 : _e.globalColorParams } : { ...(_f = params.theme) === null || _f === void 0 ? void 0 : _f.globalColorParams };
    const symmetryColor = structure && ((_g = params.theme) === null || _g === void 0 ? void 0 : _g.symmetryColor) ? isSymmetry(structure) ? (_h = params.theme) === null || _h === void 0 ? void 0 : _h.symmetryColor : color : color;
    const symmetryColorParams = ((_j = params.theme) === null || _j === void 0 ? void 0 : _j.symmetryColorParams) ? { ...(_k = params.theme) === null || _k === void 0 ? void 0 : _k.globalColorParams, ...(_l = params.theme) === null || _l === void 0 ? void 0 : _l.symmetryColorParams } : { ...(_m = params.theme) === null || _m === void 0 ? void 0 : _m.globalColorParams };
    const globalColorParams = ((_o = params.theme) === null || _o === void 0 ? void 0 : _o.globalColorParams) ? { ...(_p = params.theme) === null || _p === void 0 ? void 0 : _p.globalColorParams } : void 0;
    return { update, builder, color, symmetryColor, symmetryColorParams, globalColorParams, typeParams, ballAndStickColor };
  }
  StructureRepresentationPresetProvider2.reprBuilder = reprBuilder2;
  function updateFocusRepr2(plugin, structure, themeName, themeParams) {
    if (!plugin.state.hasBehavior(StructureFocusRepresentation))
      return;
    return plugin.state.updateBehavior(StructureFocusRepresentation, (p) => {
      const c = createStructureColorThemeParams(plugin, structure, "ball-and-stick", themeName || "element-symbol", themeParams);
      p.surroundingsParams.colorTheme = c;
      p.targetParams.colorTheme = c;
    });
  }
  StructureRepresentationPresetProvider2.updateFocusRepr = updateFocusRepr2;
})(StructureRepresentationPresetProvider || (StructureRepresentationPresetProvider = {}));
var CommonParams = StructureRepresentationPresetProvider.CommonParams;
var reprBuilder = StructureRepresentationPresetProvider.reprBuilder;
var updateFocusRepr = StructureRepresentationPresetProvider.updateFocusRepr;
var auto = StructureRepresentationPresetProvider({
  id: "preset-structure-representation-auto",
  display: {
    name: "Automatic",
    description: "Show representations based on the size of the structure. Smaller structures are shown with more detail than larger ones, ranging from atomistic display to coarse surfaces."
  },
  params: () => CommonParams,
  apply(ref, params, plugin) {
    var _a, _b;
    const structure = (_b = (_a = StateObjectRef.resolveAndCheck(plugin.state.data, ref)) === null || _a === void 0 ? void 0 : _a.obj) === null || _b === void 0 ? void 0 : _b.data;
    if (!structure)
      return {};
    const thresholds = plugin.config.get(PluginConfig.Structure.SizeThresholds) || Structure.DefaultSizeThresholds;
    const size = Structure.getSize(structure, thresholds);
    const gapFraction = structure.polymerResidueCount / structure.polymerGapCount;
    switch (size) {
      case Structure.Size.Gigantic:
      case Structure.Size.Huge:
        return coarseSurface.apply(ref, params, plugin);
      case Structure.Size.Large:
        return polymerCartoon.apply(ref, params, plugin);
      case Structure.Size.Medium:
        if (gapFraction > 3) {
          return polymerAndLigand.apply(ref, params, plugin);
        }
      case Structure.Size.Small:
        return atomicDetail.apply(ref, { ...params, showCarbohydrateSymbol: true }, plugin);
      default:
        assertUnreachable(size);
    }
  }
});
var empty = StructureRepresentationPresetProvider({
  id: "preset-structure-representation-empty",
  display: { name: "Empty", description: "Removes all existing representations." },
  async apply(ref, params, plugin) {
    return {};
  }
});
var BuiltInPresetGroupName = "Basic";
var polymerAndLigand = StructureRepresentationPresetProvider({
  id: "preset-structure-representation-polymer-and-ligand",
  display: {
    name: "Polymer & Ligand",
    group: BuiltInPresetGroupName,
    description: "Shows polymers as Cartoon, ligands as Ball & Stick, carbohydrates as 3D-SNFG and water molecules semi-transparent."
  },
  params: () => CommonParams,
  async apply(ref, params, plugin) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const structureCell = StateObjectRef.resolveAndCheck(plugin.state.data, ref);
    if (!structureCell)
      return {};
    const components = {
      polymer: await presetStaticComponent(plugin, structureCell, "polymer"),
      ligand: await presetStaticComponent(plugin, structureCell, "ligand"),
      nonStandard: await presetStaticComponent(plugin, structureCell, "non-standard"),
      branched: await presetStaticComponent(plugin, structureCell, "branched", { label: "Carbohydrate" }),
      water: await presetStaticComponent(plugin, structureCell, "water"),
      ion: await presetStaticComponent(plugin, structureCell, "ion"),
      lipid: await presetStaticComponent(plugin, structureCell, "lipid"),
      coarse: await presetStaticComponent(plugin, structureCell, "coarse")
    };
    const structure = structureCell.obj.data;
    const waterType = (((_c = (_b = (_a = components.water) === null || _a === void 0 ? void 0 : _a.obj) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.elementCount) || 0) > 5e4 ? "line" : "ball-and-stick";
    const lipidType = (((_f = (_e = (_d = components.lipid) === null || _d === void 0 ? void 0 : _d.obj) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.elementCount) || 0) > 2e4 ? "line" : "ball-and-stick";
    const { update, builder, typeParams, color, symmetryColor, symmetryColorParams, globalColorParams, ballAndStickColor } = reprBuilder(plugin, params, structure);
    const representations = {
      polymer: builder.buildRepresentation(update, components.polymer, { type: "cartoon", typeParams, color: symmetryColor, colorParams: symmetryColorParams }, { tag: "polymer" }),
      ligand: builder.buildRepresentation(update, components.ligand, { type: "ball-and-stick", typeParams, color, colorParams: ballAndStickColor }, { tag: "ligand" }),
      nonStandard: builder.buildRepresentation(update, components.nonStandard, { type: "ball-and-stick", typeParams, color, colorParams: ballAndStickColor }, { tag: "non-standard" }),
      branchedBallAndStick: builder.buildRepresentation(update, components.branched, { type: "ball-and-stick", typeParams: { ...typeParams, alpha: 0.3 }, color, colorParams: ballAndStickColor }, { tag: "branched-ball-and-stick" }),
      branchedSnfg3d: builder.buildRepresentation(update, components.branched, { type: "carbohydrate", typeParams, color, colorParams: globalColorParams }, { tag: "branched-snfg-3d" }),
      water: builder.buildRepresentation(update, components.water, { type: waterType, typeParams: { ...typeParams, alpha: 0.6, visuals: waterType === "line" ? ["intra-bond", "element-point"] : void 0 }, color, colorParams: { carbonColor: { name: "element-symbol", params: {} }, ...globalColorParams } }, { tag: "water" }),
      ion: builder.buildRepresentation(update, components.ion, { type: "ball-and-stick", typeParams, color, colorParams: { carbonColor: { name: "element-symbol", params: {} }, ...globalColorParams } }, { tag: "ion" }),
      lipid: builder.buildRepresentation(update, components.lipid, { type: lipidType, typeParams: { ...typeParams, alpha: 0.6, visuals: lipidType === "line" ? ["intra-bond"] : void 0 }, color, colorParams: { carbonColor: { name: "element-symbol", params: {} }, ...globalColorParams } }, { tag: "lipid" }),
      coarse: builder.buildRepresentation(update, components.coarse, { type: "spacefill", typeParams, color: color || "chain-id", colorParams: globalColorParams }, { tag: "coarse" })
    };
    await update.commit({ revertOnError: false });
    await updateFocusRepr(plugin, structure, (_h = (_g = params.theme) === null || _g === void 0 ? void 0 : _g.focus) === null || _h === void 0 ? void 0 : _h.name, (_k = (_j = params.theme) === null || _j === void 0 ? void 0 : _j.focus) === null || _k === void 0 ? void 0 : _k.params);
    return { components, representations };
  }
});
var proteinAndNucleic = StructureRepresentationPresetProvider({
  id: "preset-structure-representation-protein-and-nucleic",
  display: {
    name: "Protein & Nucleic",
    group: BuiltInPresetGroupName,
    description: "Shows proteins as Cartoon and RNA/DNA as Gaussian Surface."
  },
  params: () => CommonParams,
  async apply(ref, params, plugin) {
    var _a, _b, _c, _d;
    const structureCell = StateObjectRef.resolveAndCheck(plugin.state.data, ref);
    if (!structureCell)
      return {};
    const components = {
      protein: await presetSelectionComponent(plugin, structureCell, "protein"),
      nucleic: await presetSelectionComponent(plugin, structureCell, "nucleic")
    };
    const structure = structureCell.obj.data;
    const gaussianProps = {
      radiusOffset: structure.isCoarseGrained ? 2 : 0,
      smoothness: structure.isCoarseGrained ? 1 : 1.5
    };
    const { update, builder, typeParams, symmetryColor, symmetryColorParams } = reprBuilder(plugin, params, structure);
    const representations = {
      protein: builder.buildRepresentation(update, components.protein, { type: "cartoon", typeParams, color: symmetryColor, colorParams: symmetryColorParams }, { tag: "protein" }),
      nucleic: builder.buildRepresentation(update, components.nucleic, { type: "gaussian-surface", typeParams: { ...typeParams, ...gaussianProps }, color: symmetryColor, colorParams: symmetryColorParams }, { tag: "nucleic" })
    };
    await update.commit({ revertOnError: true });
    await updateFocusRepr(plugin, structure, (_b = (_a = params.theme) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.name, (_d = (_c = params.theme) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.params);
    return { components, representations };
  }
});
var coarseSurface = StructureRepresentationPresetProvider({
  id: "preset-structure-representation-coarse-surface",
  display: {
    name: "Coarse Surface",
    group: BuiltInPresetGroupName,
    description: "Shows polymers and lipids as coarse Gaussian Surface."
  },
  params: () => CommonParams,
  async apply(ref, params, plugin) {
    var _a, _b, _c, _d;
    const structureCell = StateObjectRef.resolveAndCheck(plugin.state.data, ref);
    if (!structureCell)
      return {};
    const components = {
      polymer: await presetStaticComponent(plugin, structureCell, "polymer"),
      lipid: await presetStaticComponent(plugin, structureCell, "lipid")
    };
    const structure = structureCell.obj.data;
    const thresholds = plugin.config.get(PluginConfig.Structure.SizeThresholds) || Structure.DefaultSizeThresholds;
    const size = Structure.getSize(structure, thresholds);
    const gaussianProps = /* @__PURE__ */ Object.create(null);
    if (size === Structure.Size.Gigantic) {
      Object.assign(gaussianProps, {
        traceOnly: !structure.isCoarseGrained,
        radiusOffset: 2,
        smoothness: 1,
        visuals: ["structure-gaussian-surface-mesh"]
      });
    } else if (size === Structure.Size.Huge) {
      Object.assign(gaussianProps, {
        radiusOffset: structure.isCoarseGrained ? 2 : 0,
        smoothness: 1
      });
    } else if (structure.isCoarseGrained) {
      Object.assign(gaussianProps, {
        radiusOffset: 2,
        smoothness: 1
      });
    }
    const { update, builder, typeParams, symmetryColor, symmetryColorParams } = reprBuilder(plugin, params, structure);
    const representations = {
      polymer: builder.buildRepresentation(update, components.polymer, { type: "gaussian-surface", typeParams: { ...typeParams, ...gaussianProps }, color: symmetryColor, colorParams: symmetryColorParams }, { tag: "polymer" }),
      lipid: builder.buildRepresentation(update, components.lipid, { type: "gaussian-surface", typeParams: { ...typeParams, ...gaussianProps }, color: symmetryColor, colorParams: symmetryColorParams }, { tag: "lipid" })
    };
    await update.commit({ revertOnError: true });
    await updateFocusRepr(plugin, structure, (_b = (_a = params.theme) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.name, (_d = (_c = params.theme) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.params);
    return { components, representations };
  }
});
var polymerCartoon = StructureRepresentationPresetProvider({
  id: "preset-structure-representation-polymer-cartoon",
  display: {
    name: "Polymer Cartoon",
    group: BuiltInPresetGroupName,
    description: "Shows polymers as Cartoon."
  },
  params: () => CommonParams,
  async apply(ref, params, plugin) {
    var _a, _b, _c, _d;
    const structureCell = StateObjectRef.resolveAndCheck(plugin.state.data, ref);
    if (!structureCell)
      return {};
    const components = {
      polymer: await presetStaticComponent(plugin, structureCell, "polymer")
    };
    const structure = structureCell.obj.data;
    const { update, builder, typeParams, symmetryColor, symmetryColorParams } = reprBuilder(plugin, params, structure);
    const representations = {
      polymer: builder.buildRepresentation(update, components.polymer, { type: "cartoon", typeParams, color: symmetryColor, colorParams: symmetryColorParams }, { tag: "polymer" })
    };
    await update.commit({ revertOnError: true });
    await updateFocusRepr(plugin, structure, (_b = (_a = params.theme) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.name, (_d = (_c = params.theme) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.params);
    return { components, representations };
  }
});
var atomicDetail = StructureRepresentationPresetProvider({
  id: "preset-structure-representation-atomic-detail",
  display: {
    name: "Atomic Detail",
    group: BuiltInPresetGroupName,
    description: "Shows everything in atomic detail."
  },
  params: () => ({
    ...CommonParams,
    showCarbohydrateSymbol: ParamDefinition.Boolean(false)
  }),
  async apply(ref, params, plugin) {
    var _a, _b, _c, _d, _e, _f;
    const structureCell = StateObjectRef.resolveAndCheck(plugin.state.data, ref);
    if (!structureCell)
      return {};
    const components = {
      all: await presetStaticComponent(plugin, structureCell, "all"),
      branched: void 0
    };
    const structure = structureCell.obj.data;
    const highElementCount = structure.elementCount > 1e5;
    const veryHighElementCount = structure.elementCount > 1e6;
    const highUnitCount = structure.units.length > 5e3;
    const lowResidueElementRatio = structure.atomicResidueCount && structure.elementCount > 1e3 && structure.atomicResidueCount / structure.elementCount < 3;
    const m = structure.models[0];
    const bondsGiven = !!IndexPairBonds.Provider.get(m) || StructConn.isExhaustive(m);
    let atomicType = "ball-and-stick";
    if (structure.isCoarseGrained || highUnitCount) {
      atomicType = veryHighElementCount ? "point" : "spacefill";
    } else if (lowResidueElementRatio && !bondsGiven) {
      atomicType = "spacefill";
    } else if (highElementCount) {
      atomicType = "line";
    }
    const showCarbohydrateSymbol = params.showCarbohydrateSymbol && !highElementCount && !lowResidueElementRatio;
    if (showCarbohydrateSymbol) {
      Object.assign(components, {
        branched: await presetStaticComponent(plugin, structureCell, "branched", { label: "Carbohydrate" })
      });
    }
    const { update, builder, typeParams, color, ballAndStickColor, globalColorParams } = reprBuilder(plugin, params, structure);
    const colorParams = lowResidueElementRatio && !bondsGiven ? { carbonColor: { name: "element-symbol", params: {} }, ...globalColorParams } : ballAndStickColor;
    const representations = {
      all: builder.buildRepresentation(update, components.all, { type: atomicType, typeParams, color, colorParams }, { tag: "all" })
    };
    if (showCarbohydrateSymbol) {
      Object.assign(representations, {
        snfg3d: builder.buildRepresentation(update, components.branched, { type: "carbohydrate", typeParams: { ...typeParams, alpha: 0.4, visuals: ["carbohydrate-symbol"] }, color, colorParams: globalColorParams }, { tag: "snfg-3d" })
      });
    }
    await update.commit({ revertOnError: true });
    await updateFocusRepr(plugin, structure, (_c = (_b = (_a = params.theme) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : color, (_f = (_e = (_d = params.theme) === null || _d === void 0 ? void 0 : _d.focus) === null || _e === void 0 ? void 0 : _e.params) !== null && _f !== void 0 ? _f : colorParams);
    return { components, representations };
  }
});
var illustrative = StructureRepresentationPresetProvider({
  id: "preset-structure-representation-illustrative",
  display: {
    name: "Illustrative",
    group: "Miscellaneous",
    description: "Show everything in spacefill representation with illustrative colors and ignore light."
  },
  params: () => CommonParams,
  async apply(ref, params, plugin) {
    var _a, _b, _c, _d, _e;
    const structureCell = StateObjectRef.resolveAndCheck(plugin.state.data, ref);
    if (!structureCell)
      return {};
    const components = {
      all: await presetStaticComponent(plugin, structureCell, "all"),
      branched: void 0
    };
    const structure = structureCell.obj.data;
    const { update, builder, typeParams, color } = reprBuilder(plugin, params, structure);
    const representations = {
      all: builder.buildRepresentation(update, components.all, {
        type: "spacefill",
        typeParams: { ...typeParams, ignoreLight: true },
        color: "illustrative",
        colorParams: { style: { name: "entity-id", params: { overrideWater: true } } }
      }, { tag: "all" })
    };
    await update.commit({ revertOnError: true });
    await updateFocusRepr(plugin, structure, (_c = (_b = (_a = params.theme) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : color, (_e = (_d = params.theme) === null || _d === void 0 ? void 0 : _d.focus) === null || _e === void 0 ? void 0 : _e.params);
    return { components, representations };
  }
});
var molecularSurface = StructureRepresentationPresetProvider({
  id: "preset-structure-representation-molecular-surface",
  display: {
    name: "Molecular Surface",
    group: "Miscellaneous",
    description: "Show everything in molecular surface representation with illustrative colors."
  },
  params: () => CommonParams,
  async apply(ref, params, plugin) {
    var _a, _b, _c, _d, _e;
    const structureCell = StateObjectRef.resolveAndCheck(plugin.state.data, ref);
    if (!structureCell)
      return {};
    const components = {
      all: await presetStaticComponent(plugin, structureCell, "all"),
      branched: void 0
    };
    const structure = structureCell.obj.data;
    const { update, builder, typeParams, color } = reprBuilder(plugin, params, structure);
    const representations = {
      all: builder.buildRepresentation(update, components.all, {
        type: "molecular-surface",
        typeParams,
        color: "entity-id",
        colorParams: { overrideWater: true }
      }, { tag: "all" })
    };
    await update.commit({ revertOnError: true });
    await updateFocusRepr(plugin, structure, (_c = (_b = (_a = params.theme) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : color, (_e = (_d = params.theme) === null || _d === void 0 ? void 0 : _d.focus) === null || _e === void 0 ? void 0 : _e.params);
    return { components, representations };
  }
});
var autoLod = StructureRepresentationPresetProvider({
  id: "preset-structure-representation-auto-lod",
  display: {
    name: "Automatic Detail",
    group: "Miscellaneous",
    description: "Shows more (or less) detailed representations automatically based on camera distance."
  },
  params: () => CommonParams,
  async apply(ref, params, plugin) {
    var _a, _b, _c, _d;
    const structureCell = StateObjectRef.resolveAndCheck(plugin.state.data, ref);
    if (!structureCell)
      return {};
    const components = {
      all: await presetStaticComponent(plugin, structureCell, "all")
    };
    const structure = structureCell.obj.data;
    const { update, builder, typeParams, color, symmetryColor, symmetryColorParams, ballAndStickColor } = reprBuilder(plugin, params, structure);
    const representations = {
      gaussianSurface: builder.buildRepresentation(update, components.all, { type: "gaussian-surface", typeParams: { ...typeParams, lod: Vec3.create(30, 1e7, 100) }, color: symmetryColor, colorParams: symmetryColorParams }, { tag: "gaussian-surface" }),
      cartoon: builder.buildRepresentation(update, components.all, { type: "cartoon", typeParams: { ...typeParams, lod: Vec3.create(-20, 300, 100) }, color: symmetryColor, colorParams: symmetryColorParams }, { tag: "cartoon" }),
      ballAndStick: builder.buildRepresentation(update, components.all, { type: "ball-and-stick", typeParams: { ...typeParams, lod: Vec3.create(-20, 40, 20) }, color, colorParams: ballAndStickColor }, { tag: "ball-and-stick" })
    };
    await update.commit({ revertOnError: false });
    await updateFocusRepr(plugin, structure, (_b = (_a = params.theme) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.name, (_d = (_c = params.theme) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.params);
    return { components, representations };
  }
});
function presetStaticComponent(plugin, structure, type, params) {
  return plugin.builders.structure.tryCreateComponentStatic(structure, type, params);
}
function presetSelectionComponent(plugin, structure, query, params) {
  return plugin.builders.structure.tryCreateComponentFromSelection(structure, StructureSelectionQueries[query], `selection-${query}`, params);
}
var PresetStructureRepresentations = {
  empty,
  auto,
  "atomic-detail": atomicDetail,
  "polymer-cartoon": polymerCartoon,
  "polymer-and-ligand": polymerAndLigand,
  "protein-and-nucleic": proteinAndNucleic,
  "coarse-surface": coarseSurface,
  illustrative,
  "molecular-surface": molecularSurface,
  "auto-lod": autoLod
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/formats/trajectory.js
var TrajectoryFormatCategory = "Trajectory";
function defaultVisuals(plugin, data) {
  return plugin.builders.structure.hierarchy.applyPreset(data.trajectory, "default");
}
var MmcifProvider = {
  label: "mmCIF",
  description: "mmCIF",
  category: TrajectoryFormatCategory,
  stringExtensions: ["cif", "mmcif", "mcif"],
  binaryExtensions: ["bcif"],
  isApplicable: (info, data) => {
    if (info.ext === "mmcif" || info.ext === "mcif")
      return true;
    if (info.ext === "cif" || info.ext === "bcif")
      return guessCifVariant(info, data) === -1;
    return false;
  },
  parse: async (plugin, data, params) => {
    var _a, _b;
    const state = plugin.state.data;
    const cif = state.build().to(data).apply(StateTransforms.Data.ParseCif, void 0, { state: { isGhost: true } });
    const trajectory = await cif.apply(StateTransforms.Model.TrajectoryFromMmCif, void 0, { tags: params === null || params === void 0 ? void 0 : params.trajectoryTags }).commit({ revertOnError: true });
    if ((((_b = (_a = cif.selector.cell) === null || _a === void 0 ? void 0 : _a.obj) === null || _b === void 0 ? void 0 : _b.data.blocks.length) || 0) > 1) {
      plugin.state.data.updateCellState(cif.ref, { isGhost: false });
    }
    return { trajectory };
  },
  visuals: defaultVisuals
};
var CifCoreProvider = {
  label: "cifCore",
  description: "CIF Core",
  category: TrajectoryFormatCategory,
  stringExtensions: ["cif"],
  isApplicable: (info, data) => {
    if (info.ext === "cif")
      return guessCifVariant(info, data) === "coreCif";
    return false;
  },
  parse: async (plugin, data, params) => {
    var _a, _b;
    const state = plugin.state.data;
    const cif = state.build().to(data).apply(StateTransforms.Data.ParseCif, void 0, { state: { isGhost: true } });
    const trajectory = await cif.apply(StateTransforms.Model.TrajectoryFromCifCore, void 0, { tags: params === null || params === void 0 ? void 0 : params.trajectoryTags }).commit({ revertOnError: true });
    if ((((_b = (_a = cif.selector.cell) === null || _a === void 0 ? void 0 : _a.obj) === null || _b === void 0 ? void 0 : _b.data.blocks.length) || 0) > 1) {
      plugin.state.data.updateCellState(cif.ref, { isGhost: false });
    }
    return { trajectory };
  },
  visuals: defaultVisuals
};
function directTrajectory(transformer, transformerParams) {
  return async (plugin, data, params) => {
    const state = plugin.state.data;
    const trajectory = await state.build().to(data).apply(transformer, transformerParams, { tags: params === null || params === void 0 ? void 0 : params.trajectoryTags }).commit({ revertOnError: true });
    return { trajectory };
  };
}
var PdbProvider = {
  label: "PDB",
  description: "PDB",
  category: TrajectoryFormatCategory,
  stringExtensions: ["pdb", "ent"],
  parse: directTrajectory(StateTransforms.Model.TrajectoryFromPDB),
  visuals: defaultVisuals
};
var PdbqtProvider = {
  label: "PDBQT",
  description: "PDBQT",
  category: TrajectoryFormatCategory,
  stringExtensions: ["pdbqt"],
  parse: directTrajectory(StateTransforms.Model.TrajectoryFromPDB, { isPdbqt: true }),
  visuals: defaultVisuals
};
var XyzProvider = {
  label: "XYZ",
  description: "XYZ",
  category: TrajectoryFormatCategory,
  stringExtensions: ["xyz"],
  parse: directTrajectory(StateTransforms.Model.TrajectoryFromXYZ),
  visuals: defaultVisuals
};
var LammpsDataProvider = {
  label: "Lammps Data",
  description: "Lammps Data",
  category: TrajectoryFormatCategory,
  stringExtensions: ["data"],
  parse: directTrajectory(StateTransforms.Model.TrajectoryFromLammpsData),
  visuals: defaultVisuals
};
var LammpsTrajectoryDataProvider = {
  label: "Lammps Trajectory Data",
  description: "Lammps Trajectory Data",
  category: TrajectoryFormatCategory,
  stringExtensions: ["lammpstrj"],
  parse: directTrajectory(StateTransforms.Model.TrajectoryFromLammpsTrajData),
  visuals: defaultVisuals
};
var GroProvider = {
  label: "GRO",
  description: "GRO",
  category: TrajectoryFormatCategory,
  stringExtensions: ["gro"],
  binaryExtensions: [],
  parse: directTrajectory(StateTransforms.Model.TrajectoryFromGRO),
  visuals: defaultVisuals
};
var MolProvider = {
  label: "MOL",
  description: "MOL",
  category: TrajectoryFormatCategory,
  stringExtensions: ["mol"],
  parse: directTrajectory(StateTransforms.Model.TrajectoryFromMOL),
  visuals: defaultVisuals
};
var SdfProvider = {
  label: "SDF",
  description: "SDF",
  category: TrajectoryFormatCategory,
  stringExtensions: ["sdf", "sd"],
  parse: directTrajectory(StateTransforms.Model.TrajectoryFromSDF),
  visuals: defaultVisuals
};
var Mol2Provider = {
  label: "MOL2",
  description: "MOL2",
  category: TrajectoryFormatCategory,
  stringExtensions: ["mol2"],
  parse: directTrajectory(StateTransforms.Model.TrajectoryFromMOL2),
  visuals: defaultVisuals
};
var BuiltInTrajectoryFormats = [
  ["mmcif", MmcifProvider],
  ["cifCore", CifCoreProvider],
  ["pdb", PdbProvider],
  ["pdbqt", PdbqtProvider],
  ["gro", GroProvider],
  ["xyz", XyzProvider],
  ["lammps_data", LammpsDataProvider],
  ["lammps_traj_data", LammpsTrajectoryDataProvider],
  ["mol", MolProvider],
  ["sdf", SdfProvider],
  ["mol2", Mol2Provider]
];

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/file-info.js
var COMPRESSED_EXT_LIST = ["gz", "zip"];
function getFileNameInfo(fileName) {
  let path = fileName;
  let protocol = "";
  const queryIndex = path.lastIndexOf("?");
  const query = queryIndex !== -1 ? path.substring(queryIndex) : "";
  path = path.substring(0, queryIndex === -1 ? path.length : queryIndex);
  const name = path.replace(/^.*[\\/]/, "");
  let base = name.substring(0, name.lastIndexOf("."));
  const nameSplit = name.split(".");
  let ext = nameSplit.length > 1 ? (nameSplit.pop() || "").toLowerCase() : "";
  const protocolMatch = path.match(/^(.+):\/\/(.+)$/);
  if (protocolMatch) {
    protocol = protocolMatch[1].toLowerCase();
    path = protocolMatch[2] || "";
  }
  const dir = path.substring(0, path.lastIndexOf("/") + 1);
  if (COMPRESSED_EXT_LIST.includes(ext)) {
    const n = path.length - ext.length - 1;
    ext = (path.substring(0, n).split(".").pop() || "").toLowerCase();
    const m = base.length - ext.length - 1;
    base = base.substring(0, m);
  }
  return { path, name, ext, base, dir, protocol, query };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/formats/topology.js
var TopologyFormatCategory = "Topology";
var PsfProvider = DataFormatProvider({
  label: "PSF",
  description: "PSF",
  category: TopologyFormatCategory,
  stringExtensions: ["psf"],
  parse: async (plugin, data) => {
    const format = plugin.state.data.build().to(data).apply(StateTransforms.Data.ParsePsf, {}, { state: { isGhost: true } });
    const topology = format.apply(StateTransforms.Model.TopologyFromPsf);
    await format.commit();
    return { format: format.selector, topology: topology.selector };
  }
});
var PrmtopProvider = DataFormatProvider({
  label: "PRMTOP",
  description: "PRMTOP",
  category: TopologyFormatCategory,
  stringExtensions: ["prmtop", "parm7"],
  parse: async (plugin, data) => {
    const format = plugin.state.data.build().to(data).apply(StateTransforms.Data.ParsePrmtop, {}, { state: { isGhost: true } });
    const topology = format.apply(StateTransforms.Model.TopologyFromPrmtop);
    await format.commit();
    return { format: format.selector, topology: topology.selector };
  }
});
var TopProvider = DataFormatProvider({
  label: "TOP",
  description: "TOP",
  category: TopologyFormatCategory,
  stringExtensions: ["top"],
  parse: async (plugin, data) => {
    const format = plugin.state.data.build().to(data).apply(StateTransforms.Data.ParseTop, {}, { state: { isGhost: true } });
    const topology = format.apply(StateTransforms.Model.TopologyFromTop);
    await format.commit();
    return { format: format.selector, topology: topology.selector };
  }
});
var BuiltInTopologyFormats = [
  ["psf", PsfProvider],
  ["prmtop", PrmtopProvider],
  ["top", TopProvider]
];

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/formats/coordinates.js
var CoordinatesFormatCategory = "Coordinates";
var DcdProvider = DataFormatProvider({
  label: "DCD",
  description: "DCD",
  category: CoordinatesFormatCategory,
  binaryExtensions: ["dcd"],
  parse: (plugin, data) => {
    const coordinates = plugin.state.data.build().to(data).apply(StateTransforms.Model.CoordinatesFromDcd);
    return coordinates.commit();
  }
});
var XtcProvider = DataFormatProvider({
  label: "XTC",
  description: "XTC",
  category: CoordinatesFormatCategory,
  binaryExtensions: ["xtc"],
  parse: (plugin, data) => {
    const coordinates = plugin.state.data.build().to(data).apply(StateTransforms.Model.CoordinatesFromXtc);
    return coordinates.commit();
  }
});
var TrrProvider = DataFormatProvider({
  label: "TRR",
  description: "TRR",
  category: CoordinatesFormatCategory,
  binaryExtensions: ["trr"],
  parse: (plugin, data) => {
    const coordinates = plugin.state.data.build().to(data).apply(StateTransforms.Model.CoordinatesFromTrr);
    return coordinates.commit();
  }
});
var NctrajProvider = DataFormatProvider({
  label: "NCTRAJ",
  description: "NCTRAJ",
  category: CoordinatesFormatCategory,
  binaryExtensions: ["nc", "nctraj"],
  parse: (plugin, data) => {
    const coordinates = plugin.state.data.build().to(data).apply(StateTransforms.Model.CoordinatesFromNctraj);
    return coordinates.commit();
  }
});
var LammpsTrajectoryProvider = DataFormatProvider({
  label: "LAMMPSTRAJ",
  description: "LAMMPSTRAJ",
  category: CoordinatesFormatCategory,
  stringExtensions: ["lammpstrj"],
  parse: (plugin, data) => {
    const coordinates = plugin.state.data.build().to(data).apply(StateTransforms.Model.CoordinatesFromLammpstraj);
    return coordinates.commit();
  }
});
var BuiltInCoordinatesFormats = [
  ["dcd", DcdProvider],
  ["xtc", XtcProvider],
  ["trr", TrrProvider],
  ["nctraj", NctrajProvider],
  ["lammpstrj", LammpsTrajectoryProvider]
];

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/actions/structure.js
var DownloadModelRepresentationOptions = (plugin) => {
  const representationDefault = plugin.config.get(PluginConfig.Structure.DefaultRepresentationPreset) || PresetStructureRepresentations.auto.id;
  return ParamDefinition.Group({
    type: RootStructureDefinition.getParams(void 0, "auto").type,
    representation: ParamDefinition.Select(representationDefault, plugin.builders.structure.representation.getPresets().map((p) => [p.id, p.display.name, p.display.group]), { description: "Which representation preset to use." }),
    representationParams: ParamDefinition.Group(StructureRepresentationPresetProvider.CommonParams, { isHidden: true }),
    asTrajectory: ParamDefinition.Optional(ParamDefinition.Boolean(false, { description: "Load all entries into a single trajectory." }))
  }, { isExpanded: false });
};
var PdbDownloadProvider = {
  "rcsb": ParamDefinition.Group({
    encoding: ParamDefinition.Select("bcif", ParamDefinition.arrayToOptions(["cif", "bcif"]))
  }, { label: "RCSB PDB", isFlat: true }),
  "pdbe": ParamDefinition.Group({
    variant: ParamDefinition.Select("updated-bcif", [["updated-bcif", "Updated (bcif)"], ["updated", "Updated"], ["archival", "Archival"]])
  }, { label: "PDBe", isFlat: true }),
  "pdbj": ParamDefinition.EmptyGroup({ label: "PDBj" })
};
var DownloadStructure = StateAction.build({
  from: PluginStateObject.Root,
  display: { name: "Download Structure", description: "Load a structure from the provided source and create its representation." },
  params: (_, plugin) => {
    const options = DownloadModelRepresentationOptions(plugin);
    const defaultPdbProvider = plugin.config.get(PluginConfig.Download.DefaultPdbProvider) || "pdbe";
    return {
      source: ParamDefinition.MappedStatic("pdb", {
        "pdb": ParamDefinition.Group({
          provider: ParamDefinition.Group({
            id: ParamDefinition.Text("1tqn", { label: "PDB Id(s)", description: "One or more comma/space separated PDB ids." }),
            server: ParamDefinition.MappedStatic(defaultPdbProvider, PdbDownloadProvider)
          }, { pivot: "id" }),
          options
        }, { isFlat: true, label: "PDB" }),
        "pdb-ihm": ParamDefinition.Group({
          provider: ParamDefinition.Group({
            id: ParamDefinition.Text("8zzc", { label: "PDB-IHM Id(s)", description: "One or more comma/space separated ids." }),
            encoding: ParamDefinition.Select("bcif", ParamDefinition.arrayToOptions(["cif", "bcif"]))
          }, { pivot: "id" }),
          options
        }, { isFlat: true, label: "PDB-IHM" }),
        "swissmodel": ParamDefinition.Group({
          id: ParamDefinition.Text("Q9Y2I8", { label: "UniProtKB AC(s)", description: "One or more comma/space separated ACs." }),
          options
        }, { isFlat: true, label: "SWISS-MODEL", description: "Loads the best homology model or experimental structure" }),
        "alphafolddb": ParamDefinition.Group({
          provider: ParamDefinition.Group({
            id: ParamDefinition.Text("Q8W3K0", { label: "UniProtKB AC(s)", description: "One or more comma/space separated ACs." }),
            encoding: ParamDefinition.Select("bcif", ParamDefinition.arrayToOptions(["cif", "bcif"]))
          }, { pivot: "id" }),
          options
        }, { isFlat: true, label: "AlphaFold DB", description: "Loads the predicted model if available" }),
        "modelarchive": ParamDefinition.Group({
          id: ParamDefinition.Text("ma-bak-cepc-0003", { label: "Accession Code(s)", description: "One or more comma/space separated ACs." }),
          options
        }, { isFlat: true, label: "Model Archive" }),
        "pubchem": ParamDefinition.Group({
          id: ParamDefinition.Text("2244,2245", { label: "PubChem ID", description: "One or more comma/space separated IDs." }),
          options
        }, { isFlat: true, label: "PubChem", description: "Loads 3D conformer from PubChem." }),
        "url": ParamDefinition.Group({
          url: ParamDefinition.Url(""),
          format: ParamDefinition.Select("mmcif", ParamDefinition.arrayToOptions(BuiltInTrajectoryFormats.map((f) => f[0]), (f) => f)),
          isBinary: ParamDefinition.Boolean(false),
          label: ParamDefinition.Optional(ParamDefinition.Text("")),
          options
        }, { isFlat: true, label: "URL" })
      })
    };
  }
})(({ params, state }, plugin) => Task.create("Download Structure", async (ctx) => {
  plugin.behaviors.layout.leftPanelTabName.next("data");
  const src = params.source;
  let downloadParams;
  let asTrajectory = false;
  let format = "mmcif";
  switch (src.name) {
    case "url":
      downloadParams = [{ url: src.params.url, isBinary: src.params.isBinary, label: src.params.label || void 0 }];
      format = src.params.format;
      break;
    case "pdb":
      downloadParams = await (src.params.provider.server.name === "pdbe" ? getPdbeDownloadParams(src) : src.params.provider.server.name === "pdbj" ? getPdbjDownloadParams(src) : src.params.provider.server.name === "rcsb" ? getRcsbDownloadParams(src) : assertUnreachable(src));
      asTrajectory = !!src.params.options.asTrajectory;
      break;
    case "pdb-ihm":
      const map2 = (id) => id.startsWith("PDBDEV_") ? id : `PDBDEV_${id.padStart(8, "0")}`;
      downloadParams = await getDownloadParams(src.params.provider.id, (id) => {
        if (id.match(/^[1-9][A-Z0-9]{3}$/i) !== null) {
          return src.params.provider.encoding === "bcif" ? `https://pdb-ihm.org/bcif/${id.toLowerCase()}.bcif` : `https://pdb-ihm.org/cif/${id.toLowerCase()}.cif`;
        }
        const nId = map2(id.toUpperCase());
        return src.params.provider.encoding === "bcif" ? `https://pdb-ihm.org/bcif/${nId}.bcif` : `https://pdb-ihm.org/cif/${nId}.cif`;
      }, (id) => {
        const nId = id.toUpperCase();
        return nId.match(/^[1-9][A-Z0-9]{3}$/) ? `PDB-IHM: ${nId}` : map2(nId);
      }, src.params.provider.encoding === "bcif");
      asTrajectory = !!src.params.options.asTrajectory;
      break;
    case "swissmodel":
      downloadParams = await getDownloadParams(src.params.id, (id) => `https://swissmodel.expasy.org/repository/uniprot/${id.toUpperCase()}.pdb`, (id) => `SWISS-MODEL: ${id}`, false);
      asTrajectory = !!src.params.options.asTrajectory;
      format = "pdb";
      break;
    case "alphafolddb":
      downloadParams = await getDownloadParams(src.params.provider.id, async (id) => {
        const url = `https://www.alphafold.ebi.ac.uk/api/prediction/${id.toUpperCase()}`;
        const info = await plugin.runTask(plugin.fetch({ url, type: "json" }));
        if (Array.isArray(info) && info.length > 0) {
          const prop = src.params.provider.encoding === "bcif" ? "bcifUrl" : "cifUrl";
          return info[0][prop];
        }
        throw new Error(`No AlphaFold DB entry for '${id}'`);
      }, (id) => `AlphaFold DB: ${id}`, src.params.provider.encoding === "bcif");
      asTrajectory = !!src.params.options.asTrajectory;
      format = "mmcif";
      break;
    case "modelarchive":
      downloadParams = await getDownloadParams(src.params.id, (id) => `https://www.modelarchive.org/doi/10.5452/${id.toLowerCase()}.cif`, (id) => `Model Archive: ${id}`, false);
      asTrajectory = !!src.params.options.asTrajectory;
      format = "mmcif";
      break;
    case "pubchem":
      downloadParams = await getDownloadParams(src.params.id, (id) => `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/CID/${id.trim()}/record/SDF/?record_type=3d`, (id) => `PubChem: ${id}`, false);
      asTrajectory = !!src.params.options.asTrajectory;
      format = "mol";
      break;
    default:
      assertUnreachable(src);
  }
  const representationPreset = params.source.params.options.representation || plugin.config.get(PluginConfig.Structure.DefaultRepresentationPreset) || PresetStructureRepresentations.auto.id;
  const showUnitcell = representationPreset !== PresetStructureRepresentations.empty.id;
  const structure = src.params.options.type.name === "auto" ? void 0 : src.params.options.type;
  await state.transaction(async () => {
    if (downloadParams.length > 0 && asTrajectory) {
      const blob = await plugin.builders.data.downloadBlob({
        sources: downloadParams.map((src2, i) => ({ id: "" + i, url: src2.url, isBinary: src2.isBinary })),
        maxConcurrency: 6
      }, { state: { isGhost: true } });
      const trajectory = await plugin.builders.structure.parseTrajectory(blob, { formats: downloadParams.map((_, i) => ({ id: "" + i, format: "cif" })) });
      await plugin.builders.structure.hierarchy.applyPreset(trajectory, "default", {
        structure,
        showUnitcell,
        representationPreset,
        representationPresetParams: params.source.params.options.representationParams
      });
    } else {
      for (const download2 of downloadParams) {
        const data = await plugin.builders.data.download(download2, { state: { isGhost: true } });
        const provider = plugin.dataFormats.get(format);
        if (!provider)
          throw new Error("unknown file format");
        const trajectory = await plugin.builders.structure.parseTrajectory(data, provider);
        await plugin.builders.structure.hierarchy.applyPreset(trajectory, "default", {
          structure,
          showUnitcell,
          representationPreset,
          representationPresetParams: params.source.params.options.representationParams
        });
      }
    }
  }).runInContext(ctx);
}));
async function getDownloadParams(src, url, label, isBinary) {
  const ids = src.split(/[,\s]/).map((id) => id.trim()).filter((id) => !!id && (id.length >= 4 || /^[1-9][0-9]*$/.test(id)));
  const ret = [];
  for (const id of ids) {
    ret.push({ url: Asset.Url(await url(id)), isBinary, label: label(id) });
  }
  return ret;
}
async function getPdbeDownloadParams(src) {
  if (src.name !== "pdb" || src.params.provider.server.name !== "pdbe")
    throw new Error("expected pdbe");
  return src.params.provider.server.params.variant === "updated" ? getDownloadParams(src.params.provider.id, (id) => `https://www.ebi.ac.uk/pdbe/static/entry/${id.toLowerCase()}_updated.cif`, (id) => `PDBe: ${id} (updated cif)`, false) : src.params.provider.server.params.variant === "updated-bcif" ? getDownloadParams(src.params.provider.id, (id) => `https://www.ebi.ac.uk/pdbe/entry-files/download/${id.toLowerCase()}.bcif`, (id) => `PDBe: ${id} (updated cif)`, true) : getDownloadParams(src.params.provider.id, (id) => `https://www.ebi.ac.uk/pdbe/static/entry/${id.toLowerCase()}.cif`, (id) => `PDBe: ${id} (cif)`, false);
}
async function getPdbjDownloadParams(src) {
  if (src.name !== "pdb" || src.params.provider.server.name !== "pdbj")
    throw new Error("expected pdbj");
  return getDownloadParams(src.params.provider.id, (id) => `https://data.pdbjlc1.pdbj.org/pub/pdb/data/structures/divided/mmCIF/${id.toLowerCase().substring(1, 3)}/${id.toLowerCase()}.cif`, (id) => `PDBj: ${id} (cif)`, false);
}
async function getRcsbDownloadParams(src) {
  if (src.name !== "pdb" || src.params.provider.server.name !== "rcsb")
    throw new Error("expected rcsb");
  return src.params.provider.server.params.encoding === "cif" ? getDownloadParams(src.params.provider.id, (id) => `https://files.rcsb.org/download/${id.toUpperCase()}.cif`, (id) => `RCSB PDB: ${id} (cif)`, false) : getDownloadParams(src.params.provider.id, (id) => `https://models.rcsb.org/${id.toUpperCase()}.bcif`, (id) => `RCSB PDB: ${id} (bcif)`, true);
}
var UpdateTrajectory = StateAction.build({
  display: { name: "Update Trajectory" },
  params: {
    action: ParamDefinition.Select("advance", ParamDefinition.arrayToOptions(["advance", "reset"])),
    by: ParamDefinition.Optional(ParamDefinition.Numeric(1, { min: -1, max: 1, step: 1 }))
  }
})(({ params, state }) => {
  const models = state.selectQ((q) => q.ofTransformer(StateTransforms.Model.ModelFromTrajectory));
  const update = state.build();
  if (params.action === "reset") {
    for (const m of models) {
      update.to(m).update({ modelIndex: 0 });
    }
  } else {
    for (const m of models) {
      const parent = StateSelection.findAncestorOfType(state.tree, state.cells, m.transform.ref, PluginStateObject.Molecule.Trajectory);
      if (!parent || !parent.obj)
        continue;
      const traj = parent.obj;
      update.to(m).update((old) => {
        let modelIndex = (old.modelIndex + params.by) % traj.data.frameCount;
        if (modelIndex < 0)
          modelIndex += traj.data.frameCount;
        return { modelIndex };
      });
    }
  }
  return state.updateTree(update);
});
var EnableModelCustomProps = StateAction.build({
  display: { name: "Custom Model Properties", description: "Enable parameters for custom properties of the model." },
  from: PluginStateObject.Molecule.Model,
  params(a, ctx) {
    return ctx.customModelProperties.getParams(a === null || a === void 0 ? void 0 : a.data);
  },
  isApplicable(a, t, ctx) {
    return t.transformer !== CustomModelProperties;
  }
})(({ ref, params }, ctx) => ctx.builders.structure.insertModelProperties(ref, params));
var EnableStructureCustomProps = StateAction.build({
  display: { name: "Custom Structure Properties", description: "Enable parameters for custom properties of the structure." },
  from: PluginStateObject.Molecule.Structure,
  params(a, ctx) {
    return ctx.customStructureProperties.getParams(a === null || a === void 0 ? void 0 : a.data);
  },
  isApplicable(a, t, ctx) {
    return t.transformer !== CustomStructureProperties;
  }
})(({ ref, params }, ctx) => ctx.builders.structure.insertStructureProperties(ref, params));
var AddTrajectory = StateAction.build({
  display: { name: "Add Trajectory", description: "Add trajectory from existing model/topology and coordinates." },
  from: PluginStateObject.Root,
  params(a, ctx) {
    const state = ctx.state.data;
    const models = [
      ...state.selectQ((q) => q.rootsOfType(PluginStateObject.Molecule.Model)),
      ...state.selectQ((q) => q.rootsOfType(PluginStateObject.Molecule.Topology))
    ];
    const modelOptions = models.map((t) => [t.transform.ref, t.obj.label]);
    const coords = state.selectQ((q) => q.rootsOfType(PluginStateObject.Molecule.Coordinates));
    const coordOptions = coords.map((c) => [c.transform.ref, c.obj.label]);
    return {
      model: ParamDefinition.Select(modelOptions.length ? modelOptions[0][0] : "", modelOptions),
      coordinates: ParamDefinition.Select(coordOptions.length ? coordOptions[0][0] : "", coordOptions)
    };
  }
})(({ params, state }, ctx) => Task.create("Add Trajectory", (taskCtx) => {
  return state.transaction(async () => {
    const dependsOn = [params.model, params.coordinates];
    const model = state.build().toRoot().apply(TrajectoryFromModelAndCoordinates, {
      modelRef: params.model,
      coordinatesRef: params.coordinates
    }, { dependsOn }).apply(StateTransforms.Model.ModelFromTrajectory, { modelIndex: 0 });
    await state.updateTree(model).runInContext(taskCtx);
    const structure = await ctx.builders.structure.createStructure(model.selector);
    await ctx.builders.structure.representation.applyPreset(structure, "auto");
  }).runInContext(taskCtx);
}));
var LoadTrajectory = StateAction.build({
  display: { name: "Load Trajectory", description: "Load trajectory of model/topology and coordinates from URL or file." },
  from: PluginStateObject.Root,
  params(a, ctx) {
    const { options } = ctx.dataFormats;
    const modelOptions = options.filter((o) => o[2] === TrajectoryFormatCategory || o[2] === TopologyFormatCategory);
    const coordinatesOptions = options.filter((o) => o[2] === CoordinatesFormatCategory);
    const modelExts = [];
    const coordinatesExts = [];
    for (const { provider } of ctx.dataFormats.list) {
      if (provider.category === TrajectoryFormatCategory || provider.category === TopologyFormatCategory) {
        if (provider.binaryExtensions)
          modelExts.push(...provider.binaryExtensions);
        if (provider.stringExtensions)
          modelExts.push(...provider.stringExtensions);
      } else if (provider.category === CoordinatesFormatCategory) {
        if (provider.binaryExtensions)
          coordinatesExts.push(...provider.binaryExtensions);
        if (provider.stringExtensions)
          coordinatesExts.push(...provider.stringExtensions);
      }
    }
    return {
      source: ParamDefinition.MappedStatic("file", {
        url: ParamDefinition.Group({
          model: ParamDefinition.Group({
            url: ParamDefinition.Url(""),
            format: ParamDefinition.Select(modelOptions[0][0], modelOptions),
            isBinary: ParamDefinition.Boolean(false)
          }, { isExpanded: true }),
          coordinates: ParamDefinition.Group({
            url: ParamDefinition.Url(""),
            format: ParamDefinition.Select(coordinatesOptions[0][0], coordinatesOptions)
          }, { isExpanded: true })
        }, { isFlat: true }),
        file: ParamDefinition.Group({
          model: ParamDefinition.File({ accept: modelExts.map((e) => `.${e}`).join(","), label: "Model" }),
          coordinates: ParamDefinition.File({ accept: coordinatesExts.map((e) => `.${e}`).join(","), label: "Coordinates" })
        }, { isFlat: true })
      }, { options: [["url", "URL"], ["file", "File"]] })
    };
  }
})(({ params, state }, ctx) => Task.create("Load Trajectory", (taskCtx) => {
  return state.transaction(async () => {
    const s = params.source;
    if (s.name === "file" && (s.params.model === null || s.params.coordinates === null)) {
      ctx.log.error("No file(s) selected");
      return;
    }
    if (s.name === "url" && (!s.params.model || !s.params.coordinates)) {
      ctx.log.error("No URL(s) given");
      return;
    }
    const processUrl = async (url, format, isBinary) => {
      const data = await ctx.builders.data.download({ url, isBinary });
      const provider = ctx.dataFormats.get(format);
      if (!provider) {
        ctx.log.warn(`LoadTrajectory: could not find data provider for '${format}'`);
        return;
      }
      return provider.parse(ctx, data);
    };
    const processFile2 = async (file) => {
      var _a, _b, _c;
      if (!file)
        throw new Error("No file selected");
      const info = getFileNameInfo((_b = (_a = file.file) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "");
      const isBinary = ctx.dataFormats.binaryExtensions.has(info.ext);
      const { data } = await ctx.builders.data.readFile({ file, isBinary });
      const provider = ctx.dataFormats.auto(info, (_c = data.cell) === null || _c === void 0 ? void 0 : _c.obj);
      if (!provider) {
        ctx.log.warn(`LoadTrajectory: could not find data provider for '${info.ext}'`);
        await ctx.state.data.build().delete(data).commit();
        return;
      }
      return provider.parse(ctx, data);
    };
    try {
      const modelParsed = s.name === "url" ? await processUrl(s.params.model.url, s.params.model.format, s.params.model.isBinary) : await processFile2(s.params.model);
      let model;
      if ("trajectory" in modelParsed) {
        model = await state.build().to(modelParsed.trajectory).apply(ModelFromTrajectory, { modelIndex: 0 }).commit();
      } else {
        model = modelParsed.topology;
      }
      const coordinates = s.name === "url" ? await processUrl(s.params.coordinates.url, s.params.coordinates.format, true) : await processFile2(s.params.coordinates);
      const dependsOn = [model.ref, coordinates.ref];
      const traj = state.build().toRoot().apply(TrajectoryFromModelAndCoordinates, {
        modelRef: model.ref,
        coordinatesRef: coordinates.ref
      }, { dependsOn }).apply(StateTransforms.Model.ModelFromTrajectory, { modelIndex: 0 });
      await state.updateTree(traj).runInContext(taskCtx);
      const structure = await ctx.builders.structure.createStructure(traj.selector);
      await ctx.builders.structure.representation.applyPreset(structure, "auto");
    } catch (e) {
      console.error(e);
      ctx.log.error(`Error loading trajectory`);
    }
  }).runInContext(taskCtx);
}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/actions/volume.js
var volume_exports = {};
__export(volume_exports, {
  AssignColorVolume: () => AssignColorVolume,
  DownloadDensity: () => DownloadDensity
});
var DownloadDensity = StateAction.build({
  from: PluginStateObject.Root,
  display: { name: "Download Density", description: "Load a density from the provided source and create its default visual." },
  params: (a, ctx) => {
    const { options } = ctx.dataFormats;
    return {
      source: ParamDefinition.MappedStatic("pdb-xray", {
        "pdb-xray": ParamDefinition.Group({
          provider: ParamDefinition.Group({
            id: ParamDefinition.Text("1tqn", { label: "Id" }),
            server: ParamDefinition.Select("pdbe", [["pdbe", "PDBe"]])
          }, { pivot: "id" }),
          type: ParamDefinition.Select("2fofc", [["2fofc", "2Fo-Fc"], ["fofc", "Fo-Fc"]])
        }, { isFlat: true }),
        "pdb-xray-ds": ParamDefinition.Group({
          provider: ParamDefinition.Group({
            id: ParamDefinition.Text("1tqn", { label: "Id" }),
            server: ParamDefinition.Select("pdbe", [["pdbe", "PDBe"], ["rcsb", "RCSB PDB"]])
          }, { pivot: "id" }),
          detail: ParamDefinition.Numeric(3, { min: 0, max: 6, step: 1 }, { label: "Detail" })
        }, { isFlat: true }),
        "pdb-emd-ds": ParamDefinition.Group({
          provider: ParamDefinition.Group({
            id: ParamDefinition.Text("emd-8004", { label: "Id" }),
            server: ParamDefinition.Select("pdbe", [["pdbe", "PDBe"], ["rcsb", "RCSB PDB"]])
          }, { pivot: "id" }),
          detail: ParamDefinition.Numeric(3, { min: 0, max: 6, step: 1 }, { label: "Detail" })
        }, { isFlat: true }),
        "url": ParamDefinition.Group({
          url: ParamDefinition.Url(""),
          isBinary: ParamDefinition.Boolean(false),
          format: ParamDefinition.Select("auto", options)
        }, { isFlat: true })
      }, {
        options: [
          ["pdb-xray", "PDB X-ray maps"],
          ["pdb-emd-ds", "PDB EMD Density Server"],
          ["pdb-xray-ds", "PDB X-ray Density Server"],
          ["url", "URL"]
        ]
      })
    };
  }
})(({ params }, plugin) => Task.create("Download Density", async (taskCtx) => {
  var _a, _b;
  const src = params.source;
  let downloadParams;
  let provider;
  switch (src.name) {
    case "url":
      downloadParams = src.params;
      break;
    case "pdb-xray":
      downloadParams = {
        url: Asset.Url(src.params.type === "2fofc" ? `https://www.ebi.ac.uk/pdbe/coordinates/files/${src.params.provider.id.toLowerCase()}.ccp4` : `https://www.ebi.ac.uk/pdbe/coordinates/files/${src.params.provider.id.toLowerCase()}_diff.ccp4`),
        isBinary: true,
        label: `PDBe X-ray map: ${src.params.provider.id}`
      };
      break;
    case "pdb-emd-ds":
      downloadParams = src.params.provider.server === "pdbe" ? {
        url: Asset.Url(`https://www.ebi.ac.uk/pdbe/densities/emd/${src.params.provider.id.toLowerCase()}/cell?detail=${src.params.detail}`),
        isBinary: true,
        label: `PDBe EMD Density Server: ${src.params.provider.id}`
      } : {
        url: Asset.Url(`https://maps.rcsb.org/em/${src.params.provider.id.toLowerCase()}/cell?detail=${src.params.detail}`),
        isBinary: true,
        label: `RCSB PDB EMD Density Server: ${src.params.provider.id}`
      };
      break;
    case "pdb-xray-ds":
      downloadParams = src.params.provider.server === "pdbe" ? {
        url: Asset.Url(`https://www.ebi.ac.uk/pdbe/densities/x-ray/${src.params.provider.id.toLowerCase()}/cell?detail=${src.params.detail}`),
        isBinary: true,
        label: `PDBe X-ray Density Server: ${src.params.provider.id}`
      } : {
        url: Asset.Url(`https://maps.rcsb.org/x-ray/${src.params.provider.id.toLowerCase()}/cell?detail=${src.params.detail}`),
        isBinary: true,
        label: `RCSB PDB X-ray Density Server: ${src.params.provider.id}`
      };
      break;
    default:
      assertUnreachable(src);
  }
  const data = await plugin.builders.data.download(downloadParams);
  let entryId = void 0;
  switch (src.name) {
    case "url":
      downloadParams = src.params;
      provider = src.params.format === "auto" ? plugin.dataFormats.auto(getFileNameInfo(Asset.getUrl(downloadParams.url)), (_a = data.cell) === null || _a === void 0 ? void 0 : _a.obj) : plugin.dataFormats.get(src.params.format);
      break;
    case "pdb-xray":
      entryId = src.params.provider.id;
      provider = plugin.dataFormats.get("ccp4");
      break;
    case "pdb-emd-ds":
    case "pdb-xray-ds":
      entryId = src.params.provider.id;
      provider = plugin.dataFormats.get("dscif");
      break;
    default:
      assertUnreachable(src);
  }
  if (!provider) {
    plugin.log.warn("DownloadDensity: Format provider not found.");
    return;
  }
  const volumes = await provider.parse(plugin, data, { entryId });
  await ((_b = provider.visuals) === null || _b === void 0 ? void 0 : _b.call(provider, plugin, volumes));
}));
var AssignColorVolume = StateAction.build({
  display: { name: "Assign Volume Colors", description: "Assigns another volume to be available for coloring." },
  from: PluginStateObject.Volume.Data,
  isApplicable(a) {
    return !a.data.colorVolume;
  },
  params(a, plugin) {
    const cells = plugin.state.data.select(StateSelection.Generators.root.subtree().ofType(PluginStateObject.Volume.Data).filter((cell) => {
      var _a;
      return !!cell.obj && !((_a = cell.obj) === null || _a === void 0 ? void 0 : _a.data.colorVolume) && cell.obj !== a;
    }));
    if (cells.length === 0)
      return { ref: ParamDefinition.Text("", { isHidden: true, label: "Volume" }) };
    return { ref: ParamDefinition.Select(cells[0].transform.ref, cells.map((c) => [c.transform.ref, c.obj.label]), { label: "Volume" }) };
  }
})(({ ref, params, state }, plugin) => {
  return plugin.build().to(ref).apply(StateTransforms.Volume.AssignColorVolume, { ref: params.ref }, { dependsOn: [params.ref] }).commit();
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/actions/file.js
var file_exports = {};
__export(file_exports, {
  DownloadFile: () => DownloadFile,
  OpenFiles: () => OpenFiles
});
async function processFile(file, plugin, format, visuals) {
  var _a, _b, _c, _d;
  const info = getFileNameInfo((_b = (_a = file.file) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "");
  const isBinary = plugin.dataFormats.binaryExtensions.has(info.ext);
  const { data } = await plugin.builders.data.readFile({ file, isBinary });
  const provider = format === "auto" ? plugin.dataFormats.auto(info, (_c = data.cell) === null || _c === void 0 ? void 0 : _c.obj) : plugin.dataFormats.get(format);
  if (!provider) {
    plugin.log.warn(`OpenFiles: could not find data provider for '${info.ext}'`);
    await plugin.state.data.build().delete(data).commit();
    return;
  }
  const parsed = await provider.parse(plugin, data);
  if (visuals) {
    await ((_d = provider.visuals) === null || _d === void 0 ? void 0 : _d.call(provider, plugin, parsed));
  }
}
var OpenFiles = StateAction.build({
  display: { name: "Open Files", description: "Load one or more files and optionally create default visuals" },
  from: PluginStateObject.Root,
  params: (a, ctx) => {
    const { extensions, options } = ctx.dataFormats;
    return {
      files: ParamDefinition.FileList({ accept: Array.from(extensions.values()).map((e) => `.${e}`).join(",") + ",.gz,.zip", multiple: true }),
      format: ParamDefinition.MappedStatic("auto", {
        auto: ParamDefinition.EmptyGroup(),
        specific: ParamDefinition.Select(options[0][0], options)
      }),
      visuals: ParamDefinition.Boolean(true, { description: "Add default visuals" })
    };
  }
})(({ params, state }, plugin) => Task.create("Open Files", async (taskCtx) => {
  plugin.behaviors.layout.leftPanelTabName.next("data");
  await state.transaction(async () => {
    if (params.files === null) {
      plugin.log.error("No file(s) selected");
      return;
    }
    for (const file of params.files) {
      try {
        if (file.file && file.name.toLowerCase().endsWith(".zip")) {
          const zippedFiles = await unzip(taskCtx, await file.file.arrayBuffer());
          for (const [fn, filedata] of Object.entries(zippedFiles)) {
            if (!(filedata instanceof Uint8Array) || filedata.length === 0)
              continue;
            const asset = Asset.File(new File([filedata], fn));
            await processFile(asset, plugin, "auto", params.visuals);
          }
        } else {
          const format = params.format.name === "auto" ? "auto" : params.format.params;
          await processFile(file, plugin, format, params.visuals);
        }
      } catch (e) {
        console.error(e);
        plugin.log.error(`Error opening file '${file.name}'`);
      }
    }
  }).runInContext(taskCtx);
}));
var DownloadFile = StateAction.build({
  display: { name: "Download File", description: "Load one or more file from an URL" },
  from: PluginStateObject.Root,
  params: (a, ctx) => {
    const options = [...ctx.dataFormats.options, ["zip", "Zip"], ["gzip", "Gzip"]];
    return {
      url: ParamDefinition.Url(""),
      format: ParamDefinition.Select(options[0][0], options),
      isBinary: ParamDefinition.Boolean(false),
      visuals: ParamDefinition.Boolean(true, { description: "Add default visuals" })
    };
  }
})(({ params, state }, plugin) => Task.create("Open Files", async (taskCtx) => {
  plugin.behaviors.layout.leftPanelTabName.next("data");
  await state.transaction(async () => {
    var _a, _b, _c;
    try {
      if (params.format === "zip" || params.format === "gzip") {
        const data = await plugin.builders.data.download({ url: params.url, isBinary: true });
        if (params.format === "zip") {
          const zippedFiles = await unzip(taskCtx, ((_a = data.obj) === null || _a === void 0 ? void 0 : _a.data).buffer);
          for (const [fn, filedata] of Object.entries(zippedFiles)) {
            if (!(filedata instanceof Uint8Array) || filedata.length === 0)
              continue;
            const asset = Asset.File(new File([filedata], fn));
            await processFile(asset, plugin, "auto", params.visuals);
          }
        } else {
          const url = Asset.getUrl(params.url);
          const fileName = getFileNameInfo(url).name;
          await processFile(Asset.File(new File([(_b = data.obj) === null || _b === void 0 ? void 0 : _b.data], fileName)), plugin, "auto", params.visuals);
        }
      } else {
        const provider = plugin.dataFormats.get(params.format);
        if (!provider) {
          plugin.log.warn(`DownloadFile: could not find data provider for '${params.format}'`);
          return;
        }
        const data = await plugin.builders.data.download({ url: params.url, isBinary: params.isBinary });
        const parsed = await provider.parse(plugin, data);
        if (params.visuals) {
          await ((_c = provider.visuals) === null || _c === void 0 ? void 0 : _c.call(provider, plugin, parsed));
        }
      }
    } catch (e) {
      console.error(e);
      plugin.log.error(`Error downloading '${typeof params.url === "string" ? params.url : params.url.url}'`);
    }
  }).runInContext(taskCtx);
}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/actions.js
var StateActions = {
  Structure: structure_exports,
  Volume: volume_exports,
  DataFormat: file_exports
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/volume-streaming/model.js
var VolumeServerInfo = class extends PluginStateObject.Create({ name: "Volume Streaming", typeClass: "Object" }) {
};
var VolumeServerHeader;
(function(VolumeServerHeader2) {
  let ValueType;
  (function(ValueType2) {
    ValueType2.Float32 = "float32";
    ValueType2.Int8 = "int8";
  })(ValueType = VolumeServerHeader2.ValueType || (VolumeServerHeader2.ValueType = {}));
})(VolumeServerHeader || (VolumeServerHeader = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/volume-streaming/util.js
function getStreamingMethod(s, defaultKind = "x-ray") {
  if (!s)
    return defaultKind;
  const model = s.models[0];
  if (!MmcifFormat.is(model.sourceData))
    return defaultKind;
  if (Model.hasEmMap(model))
    return "em";
  if (Model.hasXrayMap(model))
    return "x-ray";
  if (Model.isFromEm(model))
    return "em";
  if (Model.isFromXray(model))
    return "x-ray";
  return defaultKind;
}
function getEmIds(model) {
  const ids = [];
  if (!MmcifFormat.is(model.sourceData))
    return [model.entryId];
  const { db_id, db_name, content_type } = model.sourceData.data.db.pdbx_database_related;
  if (!db_name.isDefined)
    return [model.entryId];
  for (let i = 0, il = db_name.rowCount; i < il; ++i) {
    if (db_name.value(i).toUpperCase() === "EMDB" && content_type.value(i) === "associated EM volume") {
      ids.push(db_id.value(i));
    }
  }
  return ids;
}
function getXrayIds(model) {
  return [model.entryId];
}
function getIds(method, s) {
  if (!s || !s.models.length)
    return [];
  const model = s.models[0];
  switch (method) {
    case "em":
      return getEmIds(model);
    case "x-ray":
      return getXrayIds(model);
  }
}
async function getContourLevel(provider, plugin, taskCtx, emdbId) {
  switch (provider) {
    case "emdb":
      return getContourLevelEmdb(plugin, taskCtx, emdbId);
    case "pdbe":
      return getContourLevelPdbe(plugin, taskCtx, emdbId);
  }
}
async function getContourLevelEmdb(plugin, taskCtx, emdbId) {
  const emdbHeaderServer = plugin.config.get(PluginConfig.VolumeStreaming.EmdbHeaderServer);
  const header = await plugin.fetch({ url: `${emdbHeaderServer}/${emdbId.toUpperCase()}/header/${emdbId.toLowerCase()}.xml`, type: "xml" }).runInContext(taskCtx);
  const map2 = header.getElementsByTagName("map")[0];
  const contours = map2.getElementsByTagName("contour");
  let primaryContour = contours[0];
  for (let i = 1; i < contours.length; i++) {
    if (contours[i].getAttribute("primary") === "true") {
      primaryContour = contours[i];
      break;
    }
  }
  const contourLevel = parseFloat(primaryContour.getElementsByTagName("level")[0].textContent);
  return contourLevel;
}
async function getContourLevelPdbe(plugin, taskCtx, emdbId) {
  var _a, _b, _c, _d;
  emdbId = emdbId.toUpperCase();
  const header = await plugin.fetch({ url: `https://www.ebi.ac.uk/emdb/api/entry/map/${emdbId}`, type: "json" }).runInContext(taskCtx);
  const contours = (_b = (_a = header === null || header === void 0 ? void 0 : header.map) === null || _a === void 0 ? void 0 : _a.contour_list) === null || _b === void 0 ? void 0 : _b.contour;
  if (!contours || contours.length === 0) {
    return getContourLevelPdbeLegacy(plugin, taskCtx, emdbId);
  }
  return (_d = (_c = contours.find((c) => c.primary)) === null || _c === void 0 ? void 0 : _c.level) !== null && _d !== void 0 ? _d : contours[0].level;
}
async function getContourLevelPdbeLegacy(plugin, taskCtx, emdbId) {
  var _a, _b, _c;
  emdbId = emdbId.toUpperCase();
  const header = await plugin.fetch({ url: `https://www.ebi.ac.uk/pdbe/api/emdb/entry/map/${emdbId}`, type: "json" }).runInContext(taskCtx);
  const emdbEntry = header === null || header === void 0 ? void 0 : header[emdbId];
  let contourLevel = void 0;
  if (((_c = (_b = (_a = emdbEntry === null || emdbEntry === void 0 ? void 0 : emdbEntry[0]) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.contour_level) === null || _c === void 0 ? void 0 : _c.value) !== void 0) {
    contourLevel = +emdbEntry[0].map.contour_level.value;
  }
  return contourLevel;
}
async function getEmdbIds(plugin, taskCtx, pdbId) {
  var _a;
  const summary = await plugin.fetch({ url: `https://www.ebi.ac.uk/pdbe/api/pdb/entry/summary/${pdbId}`, type: "json" }).runInContext(taskCtx);
  const summaryEntry = summary === null || summary === void 0 ? void 0 : summary[pdbId];
  const emdbIds = [];
  if ((_a = summaryEntry === null || summaryEntry === void 0 ? void 0 : summaryEntry[0]) === null || _a === void 0 ? void 0 : _a.related_structures) {
    const emdb = summaryEntry[0].related_structures.filter((s) => s.resource === "EMDB" && s.relationship === "associated EM volume");
    if (!emdb.length) {
      throw new Error(`No related EMDB entry found for '${pdbId}'.`);
    }
    emdbIds.push(...emdb.map((e) => e.accession));
  } else {
    throw new Error(`No related EMDB entry found for '${pdbId}'.`);
  }
  return emdbIds;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/lru-cache.js
var LRUCache;
(function(LRUCache2) {
  function entry(key, data) {
    return { key, data };
  }
  function create(capacity) {
    return {
      entries: LinkedList(),
      capacity: Math.max(1, capacity)
    };
  }
  LRUCache2.create = create;
  function get(cache, key) {
    for (let e = cache.entries.first; e; e = e.next) {
      if (e.value.key === key) {
        cache.entries.remove(e);
        cache.entries.addLast(e.value);
        return e.value.data;
      }
    }
    return void 0;
  }
  LRUCache2.get = get;
  function set(cache, key, data) {
    let removed = void 0;
    if (cache.entries.count >= cache.capacity) {
      const first = cache.entries.first;
      removed = first.value.data;
      cache.entries.remove(first);
    }
    cache.entries.addLast(entry(key, data));
    return removed;
  }
  LRUCache2.set = set;
  function remove(cache, key) {
    for (let e = cache.entries.first; e; e = e.next) {
      if (e.value.key === key) {
        cache.entries.remove(e);
        break;
      }
    }
  }
  LRUCache2.remove = remove;
})(LRUCache || (LRUCache = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/single-async-queue.js
var SingleAsyncQueue = class {
  constructor(log = false) {
    this.isRunning = false;
    this.queue = [];
    this.counter = 0;
    this.log = log;
  }
  enqueue(job) {
    if (this.log)
      console.log("SingleAsyncQueue enqueue", this.counter);
    this.queue[0] = { id: this.counter, func: job };
    this.counter++;
    this.run();
  }
  async run() {
    if (this.isRunning)
      return;
    const job = this.queue.pop();
    if (!job)
      return;
    this.isRunning = true;
    try {
      if (this.log)
        console.log("SingleAsyncQueue run", job.id);
      await job.func();
      if (this.log)
        console.log("SingleAsyncQueue complete", job.id);
    } finally {
      this.isRunning = false;
      this.run();
    }
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/volume-streaming/behavior.js
var VolumeStreaming = class extends PluginStateObject.CreateBehavior({ name: "Volume Streaming" }) {
};
(function(VolumeStreaming2) {
  VolumeStreaming2.RootTag = "volume-streaming-info";
  function channelParam(label, color, defaultValue, stats, defaults2 = {}) {
    var _a, _b, _c, _d;
    return ParamDefinition.Group({
      isoValue: Volume.createIsoValueParam((_a = defaults2.isoValue) !== null && _a !== void 0 ? _a : defaultValue, stats),
      color: ParamDefinition.Color((_b = defaults2.color) !== null && _b !== void 0 ? _b : color),
      wireframe: ParamDefinition.Boolean((_c = defaults2.wireframe) !== null && _c !== void 0 ? _c : false),
      opacity: ParamDefinition.Numeric((_d = defaults2.opacity) !== null && _d !== void 0 ? _d : 0.3, { min: 0, max: 1, step: 0.01 })
    }, { label, isExpanded: true });
  }
  const fakeSampling = {
    byteOffset: 0,
    rate: 1,
    sampleCount: [1, 1, 1],
    valuesInfo: [{ mean: 0, min: -1, max: 1, sigma: 0.1 }, { mean: 0, min: -1, max: 1, sigma: 0.1 }]
  };
  function createParams(options = {}) {
    const { data, defaultView, channelParams } = options;
    const map2 = /* @__PURE__ */ new Map();
    if (data)
      data.entries.forEach((d) => map2.set(d.dataId, d));
    const names = data ? data.entries.map((d) => [d.dataId, d.dataId]) : [];
    const defaultKey = data ? data.entries[0].dataId : "";
    return {
      entry: ParamDefinition.Mapped(defaultKey, names, (name) => ParamDefinition.Group(createEntryParams({ entryData: map2.get(name), defaultView, structure: data && data.structure, channelParams })))
    };
  }
  VolumeStreaming2.createParams = createParams;
  function createEntryParams(options) {
    const { entryData, defaultView, structure, channelParams = {} } = options;
    const info = entryData || { kind: "em", header: { sampling: [fakeSampling], availablePrecisions: [{ precision: 0, maxVoxels: 0 }] }, emDefaultContourLevel: Volume.IsoValue.relative(0) };
    const box = structure && structure.boundary.box || Box3D();
    return {
      view: ParamDefinition.MappedStatic(defaultView || (info.kind === "em" ? "auto" : "selection-box"), {
        "off": ParamDefinition.Group({}),
        "box": ParamDefinition.Group({
          bottomLeft: ParamDefinition.Vec3(box.min),
          topRight: ParamDefinition.Vec3(box.max)
        }, { description: "Static box defined by cartesian coords.", isFlat: true }),
        "selection-box": ParamDefinition.Group({
          radius: ParamDefinition.Numeric(5, { min: 0, max: 50, step: 0.5 }, { description: "Radius in Å within which the volume is shown." }),
          bottomLeft: ParamDefinition.Vec3(Vec3.create(0, 0, 0), {}, { isHidden: true }),
          topRight: ParamDefinition.Vec3(Vec3.create(0, 0, 0), {}, { isHidden: true })
        }, { description: "Box around focused element.", isFlat: true }),
        "camera-target": ParamDefinition.Group({
          radius: ParamDefinition.Numeric(0.5, { min: 0, max: 1, step: 0.05 }, { description: "Radius within which the volume is shown (relative to the field of view)." }),
          // Minimal detail level for the inside of the zoomed region (real detail can be higher, depending on the region size)
          dynamicDetailLevel: createDetailParams(info.header.availablePrecisions, 0, { label: "Dynamic Detail" }),
          bottomLeft: ParamDefinition.Vec3(Vec3.create(0, 0, 0), {}, { isHidden: true }),
          topRight: ParamDefinition.Vec3(Vec3.create(0, 0, 0), {}, { isHidden: true })
        }, { description: "Box around camera target.", isFlat: true }),
        "cell": ParamDefinition.Group({}),
        // Show selection-box if available and cell otherwise.
        "auto": ParamDefinition.Group({
          radius: ParamDefinition.Numeric(5, { min: 0, max: 50, step: 0.5 }, { description: "Radius in Å within which the volume is shown." }),
          selectionDetailLevel: createDetailParams(info.header.availablePrecisions, 6, { label: "Selection Detail" }),
          isSelection: ParamDefinition.Boolean(false, { isHidden: true }),
          bottomLeft: ParamDefinition.Vec3(box.min, {}, { isHidden: true }),
          topRight: ParamDefinition.Vec3(box.max, {}, { isHidden: true })
        }, { description: "Box around focused element.", isFlat: true })
      }, { options: VolumeStreaming2.ViewTypeOptions, description: 'Controls what of the volume is displayed. "Off" hides the volume alltogether. "Bounded box" shows the volume inside the given box. "Around Interaction" shows the volume around the focused element/atom. "Whole Structure" shows the volume for the whole structure.' }),
      detailLevel: createDetailParams(info.header.availablePrecisions, 3),
      channels: info.kind === "em" ? ParamDefinition.Group({
        "em": channelParam("EM", Color(6524815), info.emDefaultContourLevel || Volume.IsoValue.relative(1), info.header.sampling[0].valuesInfo[0], channelParams["em"])
      }, { isFlat: true }) : ParamDefinition.Group({
        "2fo-fc": channelParam("2Fo-Fc", Color(3367602), Volume.IsoValue.relative(1.5), info.header.sampling[0].valuesInfo[0], channelParams["2fo-fc"]),
        "fo-fc(+ve)": channelParam("Fo-Fc(+ve)", Color(3390259), Volume.IsoValue.relative(3), info.header.sampling[0].valuesInfo[1], channelParams["fo-fc(+ve)"]),
        "fo-fc(-ve)": channelParam("Fo-Fc(-ve)", Color(12268339), Volume.IsoValue.relative(-3), info.header.sampling[0].valuesInfo[1], channelParams["fo-fc(-ve)"])
      }, { isFlat: true })
    };
  }
  VolumeStreaming2.createEntryParams = createEntryParams;
  function createDetailParams(availablePrecisions, preferredPrecision, info) {
    return ParamDefinition.Select(Math.min(preferredPrecision, availablePrecisions.length - 1), availablePrecisions.map((p, i) => [i, `${i + 1} [ ${Math.pow(p.maxVoxels, 1 / 3) | 0}^3 cells ]`]), {
      description: "Determines the maximum number of voxels. Depending on the size of the volume options are in the range from 1 (0.52M voxels) to 7 (25.17M voxels).",
      ...info
    });
  }
  function copyParams(origParams) {
    return {
      entry: {
        name: origParams.entry.name,
        params: {
          detailLevel: origParams.entry.params.detailLevel,
          channels: origParams.entry.params.channels,
          view: {
            name: origParams.entry.params.view.name,
            params: { ...origParams.entry.params.view.params }
          }
        }
      }
    };
  }
  VolumeStreaming2.copyParams = copyParams;
  VolumeStreaming2.ViewTypeOptions = [["off", "Off"], ["box", "Bounded Box"], ["selection-box", "Around Focus"], ["camera-target", "Around Camera"], ["cell", "Whole Structure"], ["auto", "Auto"]];
  VolumeStreaming2.ChannelTypeOptions = [["em", "em"], ["2fo-fc", "2fo-fc"], ["fo-fc(+ve)", "fo-fc(+ve)"], ["fo-fc(-ve)", "fo-fc(-ve)"]];
  class Behavior extends PluginBehavior.WithSubscribers {
    get info() {
      return this.infoMap.get(this.params.entry.name);
    }
    async queryData(box) {
      let url = urlCombine(this.data.serverUrl, `${this.info.kind}/${this.info.dataId.toLowerCase()}`);
      if (box) {
        const { min: a, max: b } = box;
        url += `/box/${a.map((v) => Math.round(1e3 * v) / 1e3).join(",")}/${b.map((v) => Math.round(1e3 * v) / 1e3).join(",")}`;
      } else {
        url += `/cell`;
      }
      let detail = this.params.entry.params.detailLevel;
      if (this.params.entry.params.view.name === "auto" && this.params.entry.params.view.params.isSelection) {
        detail = this.params.entry.params.view.params.selectionDetailLevel;
      }
      if (this.params.entry.params.view.name === "camera-target" && box) {
        detail = this.decideDetail(box, this.params.entry.params.view.params.dynamicDetailLevel);
      }
      url += `?detail=${detail}`;
      const entry = LRUCache.get(this.cache, url);
      if (entry)
        return entry.data;
      const urlAsset = Asset.getUrlAsset(this.plugin.managers.asset, url);
      const asset = await this.plugin.runTask(this.plugin.managers.asset.resolve(urlAsset, "binary"));
      const data = await this.parseCif(asset.data);
      if (!data)
        return;
      const removed = LRUCache.set(this.cache, url, { data, asset });
      if (removed)
        removed.asset.dispose();
      return data;
    }
    async parseCif(data) {
      const parsed = await this.plugin.runTask(CIF.parseBinary(data));
      if (parsed.isError) {
        this.plugin.log.error("VolumeStreaming, parsing CIF: " + parsed.toString());
        return;
      }
      if (parsed.result.blocks.length < 2) {
        this.plugin.log.error("VolumeStreaming: Invalid data.");
        return;
      }
      const ret = {};
      for (let i = 1; i < parsed.result.blocks.length; i++) {
        const block = parsed.result.blocks[i];
        const densityServerCif = CIF.schema.densityServer(block);
        const volume = await this.plugin.runTask(volumeFromDensityServerData(densityServerCif));
        ret[block.header] = volume;
      }
      return ret;
    }
    async updateParams(box, autoIsSelection = false) {
      const newParams = copyParams(this.params);
      const viewType = newParams.entry.params.view.name;
      if (viewType !== "off" && viewType !== "cell") {
        newParams.entry.params.view.params.bottomLeft = (box === null || box === void 0 ? void 0 : box.min) || Vec3.zero();
        newParams.entry.params.view.params.topRight = (box === null || box === void 0 ? void 0 : box.max) || Vec3.zero();
      }
      if (viewType === "auto") {
        newParams.entry.params.view.params.isSelection = autoIsSelection;
      }
      const state = this.plugin.state.data;
      const update = state.build().to(this.ref).update(newParams);
      await PluginCommands.State.Update(this.plugin, { state, tree: update, options: { doNotUpdateCurrent: true } });
    }
    getStructureRoot() {
      return this.plugin.state.data.select(StateSelection.Generators.byRef(this.ref).rootOfType(PluginStateObject.Molecule.Structure))[0];
    }
    register(ref) {
      this.ref = ref;
      this.subscribeObservable(this.plugin.state.events.object.removed, (o) => {
        if (!PluginStateObject.Molecule.Structure.is(o.obj) || !element_exports.Loci.is(this.lastLoci))
          return;
        if (this.lastLoci.structure === o.obj.data) {
          this.lastLoci = EmptyLoci;
        }
      });
      this.subscribeObservable(this.plugin.state.events.object.updated, (o) => {
        if (!PluginStateObject.Molecule.Structure.is(o.oldObj) || !element_exports.Loci.is(this.lastLoci))
          return;
        if (this.lastLoci.structure === o.oldObj.data) {
          this.lastLoci = EmptyLoci;
        }
      });
      this.subscribeObservable(this.plugin.managers.structure.focus.behaviors.current, (entry) => {
        if (!this.plugin.state.data.tree.children.has(this.ref))
          return;
        const loci = entry ? entry.loci : EmptyLoci;
        switch (this.params.entry.params.view.name) {
          case "auto":
            this.updateAuto(loci);
            break;
          case "selection-box":
            this.updateSelectionBox(loci);
            break;
          default:
            this.lastLoci = loci;
            break;
        }
      });
    }
    unregister() {
      let entry = this.cache.entries.first;
      while (entry) {
        entry.value.data.asset.dispose();
        entry = entry.next;
      }
    }
    isCameraTargetSame(a, b) {
      if (!a || !b)
        return false;
      const targetSame = Vec3.equals(a.target, b.target);
      const sqDistA = Vec3.squaredDistance(a.target, a.position);
      const sqDistB = Vec3.squaredDistance(b.target, b.position);
      const distanceSame = Math.abs(sqDistA - sqDistB) / sqDistA < 1e-3;
      return targetSame && distanceSame;
    }
    cameraTargetDistance(snapshot) {
      return Vec3.distance(snapshot.target, snapshot.position);
    }
    getBoxFromLoci(loci) {
      var _a, _b, _c;
      if (Loci.isEmpty(loci) || isEmptyLoci(loci)) {
        return Box3D();
      }
      const parent = this.plugin.helpers.substructureParent.get(loci.structure, true);
      if (!parent)
        return Box3D();
      const root = this.getStructureRoot();
      if (!root || ((_a = root.obj) === null || _a === void 0 ? void 0 : _a.data) !== ((_b = parent.obj) === null || _b === void 0 ? void 0 : _b.data))
        return Box3D();
      const transform = GlobalModelTransformInfo.get((_c = root.obj) === null || _c === void 0 ? void 0 : _c.data.models[0]);
      if (transform)
        Mat4.invert(this._invTransform, transform);
      const extendedLoci = element_exports.Loci.extendToWholeResidues(loci);
      const box = element_exports.Loci.getBoundary(extendedLoci, transform && !Number.isNaN(this._invTransform[0]) ? this._invTransform : void 0).box;
      if (element_exports.Loci.size(extendedLoci) === 1) {
        Box3D.expand(box, box, Vec3.create(1, 1, 1));
      }
      return box;
    }
    updateAuto(loci) {
      this.updateQueue.enqueue(async () => {
        this.lastLoci = loci;
        if (isEmptyLoci(loci)) {
          await this.updateParams(this.info.kind === "x-ray" ? this.data.structure.boundary.box : void 0, false);
        } else {
          await this.updateParams(this.getBoxFromLoci(loci), true);
        }
      });
    }
    updateSelectionBox(loci) {
      this.updateQueue.enqueue(async () => {
        if (Loci.areEqual(this.lastLoci, loci)) {
          this.lastLoci = EmptyLoci;
        } else {
          this.lastLoci = loci;
        }
        const box = this.getBoxFromLoci(this.lastLoci);
        await this.updateParams(box);
      });
    }
    updateCameraTarget(snapshot) {
      this.updateQueue.enqueue(async () => {
        var _a, _b, _c;
        const origManualReset = (_a = this.plugin.canvas3d) === null || _a === void 0 ? void 0 : _a.props.camera.manualReset;
        try {
          if (!origManualReset)
            (_b = this.plugin.canvas3d) === null || _b === void 0 ? void 0 : _b.setProps({ camera: { manualReset: true } });
          const box = this.boxFromCameraTarget(snapshot, true);
          await this.updateParams(box);
        } finally {
          if (!origManualReset)
            (_c = this.plugin.canvas3d) === null || _c === void 0 ? void 0 : _c.setProps({ camera: { manualReset: origManualReset } });
        }
      });
    }
    boxFromCameraTarget(snapshot, boundByBoundarySize) {
      var _a;
      const target = snapshot.target;
      const distance = this.cameraTargetDistance(snapshot);
      const top = Math.tan(0.5 * snapshot.fov) * distance;
      let radius = top;
      const viewport = (_a = this.plugin.canvas3d) === null || _a === void 0 ? void 0 : _a.camera.viewport;
      if (viewport && viewport.width > viewport.height) {
        radius *= viewport.width / viewport.height;
      }
      const relativeRadius = this.params.entry.params.view.name === "camera-target" ? this.params.entry.params.view.params.radius : 0.5;
      radius *= relativeRadius;
      let radiusX, radiusY, radiusZ;
      if (boundByBoundarySize) {
        const bBoxSize = Vec3.zero();
        Box3D.size(bBoxSize, this.data.structure.boundary.box);
        radiusX = Math.min(radius, 0.5 * bBoxSize[0]);
        radiusY = Math.min(radius, 0.5 * bBoxSize[1]);
        radiusZ = Math.min(radius, 0.5 * bBoxSize[2]);
      } else {
        radiusX = radiusY = radiusZ = radius;
      }
      return Box3D.create(Vec3.create(target[0] - radiusX, target[1] - radiusY, target[2] - radiusZ), Vec3.create(target[0] + radiusX, target[1] + radiusY, target[2] + radiusZ));
    }
    decideDetail(box, baseDetail) {
      const cellVolume = this.info.kind === "x-ray" ? Box3D.volume(this.data.structure.boundary.box) : this.info.header.spacegroup.size.reduce((a, b) => a * b, 1);
      const boxVolume = Box3D.volume(box);
      let ratio = boxVolume / cellVolume;
      const maxDetail = this.info.header.availablePrecisions.length - 1;
      let detail = baseDetail;
      while (ratio <= 0.5 && detail < maxDetail) {
        ratio *= 2;
        detail += 1;
      }
      return detail;
    }
    async update(params) {
      const switchedToSelection = params.entry.params.view.name === "selection-box" && this.params && this.params.entry && this.params.entry.params && this.params.entry.params.view && this.params.entry.params.view.name !== "selection-box";
      this.params = params;
      let box = void 0, emptyData = false;
      if (params.entry.params.view.name !== "camera-target" && this.cameraTargetSubscription) {
        this.cameraTargetSubscription.unsubscribe();
        this.cameraTargetSubscription = void 0;
      }
      switch (params.entry.params.view.name) {
        case "off":
          emptyData = true;
          break;
        case "box":
          box = Box3D.create(params.entry.params.view.params.bottomLeft, params.entry.params.view.params.topRight);
          emptyData = Box3D.volume(box) < 1e-4;
          break;
        case "selection-box": {
          if (switchedToSelection) {
            box = this.getBoxFromLoci(this.lastLoci) || Box3D();
          } else {
            box = Box3D.create(Vec3.clone(params.entry.params.view.params.bottomLeft), Vec3.clone(params.entry.params.view.params.topRight));
          }
          const r = params.entry.params.view.params.radius;
          emptyData = Box3D.volume(box) < 1e-4;
          Box3D.expand(box, box, Vec3.create(r, r, r));
          break;
        }
        case "camera-target":
          if (!this.cameraTargetSubscription) {
            this.cameraTargetSubscription = this.subscribeObservable(this.cameraTargetObservable, (e) => this.updateCameraTarget(e));
          }
          box = this.boxFromCameraTarget(this.plugin.canvas3d.camera.getSnapshot(), true);
          break;
        case "cell":
          box = this.info.kind === "x-ray" ? this.data.structure.boundary.box : void 0;
          break;
        case "auto":
          box = params.entry.params.view.params.isSelection || this.info.kind === "x-ray" ? Box3D.create(Vec3.clone(params.entry.params.view.params.bottomLeft), Vec3.clone(params.entry.params.view.params.topRight)) : void 0;
          if (box) {
            emptyData = Box3D.volume(box) < 1e-4;
            if (params.entry.params.view.params.isSelection) {
              const r = params.entry.params.view.params.radius;
              Box3D.expand(box, box, Vec3.create(r, r, r));
            }
          }
          break;
      }
      const data = emptyData ? {} : await this.queryData(box);
      if (!data)
        return false;
      const info = params.entry.params.channels;
      if (this.info.kind === "x-ray") {
        this.channels["2fo-fc"] = this.createChannel(data["2FO-FC"] || Volume.One, info["2fo-fc"], this.info.header.sampling[0].valuesInfo[0]);
        this.channels["fo-fc(+ve)"] = this.createChannel(data["FO-FC"] || Volume.One, info["fo-fc(+ve)"], this.info.header.sampling[0].valuesInfo[1]);
        this.channels["fo-fc(-ve)"] = this.createChannel(data["FO-FC"] || Volume.One, info["fo-fc(-ve)"], this.info.header.sampling[0].valuesInfo[1]);
      } else {
        this.channels["em"] = this.createChannel(data["EM"] || Volume.One, info["em"], this.info.header.sampling[0].valuesInfo[0]);
      }
      return true;
    }
    createChannel(data, info, stats) {
      const i = info;
      return {
        data,
        color: i.color,
        wireframe: i.wireframe,
        opacity: i.opacity,
        isoValue: i.isoValue.kind === "relative" ? i.isoValue : Volume.IsoValue.toRelative(i.isoValue, stats)
      };
    }
    getDescription() {
      if (this.params.entry.params.view.name === "selection-box")
        return "Selection";
      if (this.params.entry.params.view.name === "camera-target")
        return "Camera";
      if (this.params.entry.params.view.name === "box")
        return "Static Box";
      if (this.params.entry.params.view.name === "cell")
        return "Cell";
      return "";
    }
    constructor(plugin, data) {
      super(plugin, {});
      this.plugin = plugin;
      this.data = data;
      this.cache = LRUCache.create(25);
      this.params = {};
      this.lastLoci = EmptyLoci;
      this.ref = "";
      this.cameraTargetObservable = this.plugin.canvas3d.didDraw.pipe(throttleTime(500, void 0, { "leading": true, "trailing": true }), map(() => {
        var _a;
        return (_a = this.plugin.canvas3d) === null || _a === void 0 ? void 0 : _a.camera.getSnapshot();
      }), distinctUntilChanged((a, b) => this.isCameraTargetSame(a, b)), filter((a) => a !== void 0));
      this.cameraTargetSubscription = void 0;
      this.channels = {};
      this._invTransform = Mat4();
      this.infoMap = /* @__PURE__ */ new Map();
      this.data.entries.forEach((info) => this.infoMap.set(info.dataId, info));
      this.updateQueue = new SingleAsyncQueue();
    }
  }
  VolumeStreaming2.Behavior = Behavior;
})(VolumeStreaming || (VolumeStreaming = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-geo/util/marching-cubes/tables.js
function Index(i, j, k) {
  return { i, j, k };
}
function IndexPair(a, b) {
  return { a, b };
}
var CubeVertices = [
  Index(0, 0, 0),
  // a
  Index(1, 0, 0),
  // b
  Index(1, 1, 0),
  // c
  Index(0, 1, 0),
  // d
  Index(0, 0, 1),
  // e
  Index(1, 0, 1),
  // f
  Index(1, 1, 1),
  // g
  Index(0, 1, 1)
  // h
];
var CubeEdges = [
  IndexPair(CubeVertices[0], CubeVertices[1]),
  IndexPair(CubeVertices[1], CubeVertices[2]),
  IndexPair(CubeVertices[2], CubeVertices[3]),
  IndexPair(CubeVertices[3], CubeVertices[0]),
  IndexPair(CubeVertices[4], CubeVertices[5]),
  IndexPair(CubeVertices[5], CubeVertices[6]),
  IndexPair(CubeVertices[6], CubeVertices[7]),
  IndexPair(CubeVertices[7], CubeVertices[4]),
  IndexPair(CubeVertices[0], CubeVertices[4]),
  IndexPair(CubeVertices[1], CubeVertices[5]),
  IndexPair(CubeVertices[2], CubeVertices[6]),
  IndexPair(CubeVertices[3], CubeVertices[7])
];
var EdgeIdInfo = [
  { i: 0, j: 0, k: 0, e: 0 },
  { i: 1, j: 0, k: 0, e: 1 },
  { i: 0, j: 1, k: 0, e: 0 },
  { i: 0, j: 0, k: 0, e: 1 },
  { i: 0, j: 0, k: 1, e: 0 },
  { i: 1, j: 0, k: 1, e: 1 },
  { i: 0, j: 1, k: 1, e: 0 },
  { i: 0, j: 0, k: 1, e: 1 },
  { i: 0, j: 0, k: 0, e: 2 },
  { i: 1, j: 0, k: 0, e: 2 },
  { i: 1, j: 1, k: 0, e: 2 },
  { i: 0, j: 1, k: 0, e: 2 }
];
var EdgeTable = [
  0,
  265,
  515,
  778,
  1030,
  1295,
  1541,
  1804,
  2060,
  2309,
  2575,
  2822,
  3082,
  3331,
  3593,
  3840,
  400,
  153,
  915,
  666,
  1430,
  1183,
  1941,
  1692,
  2460,
  2197,
  2975,
  2710,
  3482,
  3219,
  3993,
  3728,
  560,
  825,
  51,
  314,
  1590,
  1855,
  1077,
  1340,
  2620,
  2869,
  2111,
  2358,
  3642,
  3891,
  3129,
  3376,
  928,
  681,
  419,
  170,
  1958,
  1711,
  1445,
  1196,
  2988,
  2725,
  2479,
  2214,
  4010,
  3747,
  3497,
  3232,
  1120,
  1385,
  1635,
  1898,
  102,
  367,
  613,
  876,
  3180,
  3429,
  3695,
  3942,
  2154,
  2403,
  2665,
  2912,
  1520,
  1273,
  2035,
  1786,
  502,
  255,
  1013,
  764,
  3580,
  3317,
  4095,
  3830,
  2554,
  2291,
  3065,
  2800,
  1616,
  1881,
  1107,
  1370,
  598,
  863,
  85,
  348,
  3676,
  3925,
  3167,
  3414,
  2650,
  2899,
  2137,
  2384,
  1984,
  1737,
  1475,
  1226,
  966,
  719,
  453,
  204,
  4044,
  3781,
  3535,
  3270,
  3018,
  2755,
  2505,
  2240,
  2240,
  2505,
  2755,
  3018,
  3270,
  3535,
  3781,
  4044,
  204,
  453,
  719,
  966,
  1226,
  1475,
  1737,
  1984,
  2384,
  2137,
  2899,
  2650,
  3414,
  3167,
  3925,
  3676,
  348,
  85,
  863,
  598,
  1370,
  1107,
  1881,
  1616,
  2800,
  3065,
  2291,
  2554,
  3830,
  4095,
  3317,
  3580,
  764,
  1013,
  255,
  502,
  1786,
  2035,
  1273,
  1520,
  2912,
  2665,
  2403,
  2154,
  3942,
  3695,
  3429,
  3180,
  876,
  613,
  367,
  102,
  1898,
  1635,
  1385,
  1120,
  3232,
  3497,
  3747,
  4010,
  2214,
  2479,
  2725,
  2988,
  1196,
  1445,
  1711,
  1958,
  170,
  419,
  681,
  928,
  3376,
  3129,
  3891,
  3642,
  2358,
  2111,
  2869,
  2620,
  1340,
  1077,
  1855,
  1590,
  314,
  51,
  825,
  560,
  3728,
  3993,
  3219,
  3482,
  2710,
  2975,
  2197,
  2460,
  1692,
  1941,
  1183,
  1430,
  666,
  915,
  153,
  400,
  3840,
  3593,
  3331,
  3082,
  2822,
  2575,
  2309,
  2060,
  1804,
  1541,
  1295,
  1030,
  778,
  515,
  265,
  0
];
var TriTable = [
  [],
  [0, 8, 3],
  [0, 1, 9],
  [1, 8, 3, 9, 8, 1],
  [1, 2, 10],
  [0, 8, 3, 1, 2, 10],
  [9, 2, 10, 0, 2, 9],
  [2, 8, 3, 2, 10, 8, 10, 9, 8],
  [3, 11, 2],
  [0, 11, 2, 8, 11, 0],
  [1, 9, 0, 2, 3, 11],
  [1, 11, 2, 1, 9, 11, 9, 8, 11],
  [3, 10, 1, 11, 10, 3],
  [0, 10, 1, 0, 8, 10, 8, 11, 10],
  [3, 9, 0, 3, 11, 9, 11, 10, 9],
  [9, 8, 10, 10, 8, 11],
  [4, 7, 8],
  [4, 3, 0, 7, 3, 4],
  [0, 1, 9, 8, 4, 7],
  [4, 1, 9, 4, 7, 1, 7, 3, 1],
  [1, 2, 10, 8, 4, 7],
  [3, 4, 7, 3, 0, 4, 1, 2, 10],
  [9, 2, 10, 9, 0, 2, 8, 4, 7],
  [2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4],
  [8, 4, 7, 3, 11, 2],
  [11, 4, 7, 11, 2, 4, 2, 0, 4],
  [9, 0, 1, 8, 4, 7, 2, 3, 11],
  [4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1],
  [3, 10, 1, 3, 11, 10, 7, 8, 4],
  [1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4],
  [4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3],
  [4, 7, 11, 4, 11, 9, 9, 11, 10],
  [9, 5, 4],
  [9, 5, 4, 0, 8, 3],
  [0, 5, 4, 1, 5, 0],
  [8, 5, 4, 8, 3, 5, 3, 1, 5],
  [1, 2, 10, 9, 5, 4],
  [3, 0, 8, 1, 2, 10, 4, 9, 5],
  [5, 2, 10, 5, 4, 2, 4, 0, 2],
  [2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8],
  [9, 5, 4, 2, 3, 11],
  [0, 11, 2, 0, 8, 11, 4, 9, 5],
  [0, 5, 4, 0, 1, 5, 2, 3, 11],
  [2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5],
  [10, 3, 11, 10, 1, 3, 9, 5, 4],
  [4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10],
  [5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3],
  [5, 4, 8, 5, 8, 10, 10, 8, 11],
  [9, 7, 8, 5, 7, 9],
  [9, 3, 0, 9, 5, 3, 5, 7, 3],
  [0, 7, 8, 0, 1, 7, 1, 5, 7],
  [1, 5, 3, 3, 5, 7],
  [9, 7, 8, 9, 5, 7, 10, 1, 2],
  [10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3],
  [8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2],
  [2, 10, 5, 2, 5, 3, 3, 5, 7],
  [7, 9, 5, 7, 8, 9, 3, 11, 2],
  [9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11],
  [2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7],
  [11, 2, 1, 11, 1, 7, 7, 1, 5],
  [9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11],
  [5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0],
  [11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0],
  [11, 10, 5, 7, 11, 5],
  [10, 6, 5],
  [0, 8, 3, 5, 10, 6],
  [9, 0, 1, 5, 10, 6],
  [1, 8, 3, 1, 9, 8, 5, 10, 6],
  [1, 6, 5, 2, 6, 1],
  [1, 6, 5, 1, 2, 6, 3, 0, 8],
  [9, 6, 5, 9, 0, 6, 0, 2, 6],
  [5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8],
  [2, 3, 11, 10, 6, 5],
  [11, 0, 8, 11, 2, 0, 10, 6, 5],
  [0, 1, 9, 2, 3, 11, 5, 10, 6],
  [5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11],
  [6, 3, 11, 6, 5, 3, 5, 1, 3],
  [0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6],
  [3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9],
  [6, 5, 9, 6, 9, 11, 11, 9, 8],
  [5, 10, 6, 4, 7, 8],
  [4, 3, 0, 4, 7, 3, 6, 5, 10],
  [1, 9, 0, 5, 10, 6, 8, 4, 7],
  [10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4],
  [6, 1, 2, 6, 5, 1, 4, 7, 8],
  [1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7],
  [8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6],
  [7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9],
  [3, 11, 2, 7, 8, 4, 10, 6, 5],
  [5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11],
  [0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6],
  [9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6],
  [8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6],
  [5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11],
  [0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7],
  [6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9],
  [10, 4, 9, 6, 4, 10],
  [4, 10, 6, 4, 9, 10, 0, 8, 3],
  [10, 0, 1, 10, 6, 0, 6, 4, 0],
  [8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10],
  [1, 4, 9, 1, 2, 4, 2, 6, 4],
  [3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4],
  [0, 2, 4, 4, 2, 6],
  [8, 3, 2, 8, 2, 4, 4, 2, 6],
  [10, 4, 9, 10, 6, 4, 11, 2, 3],
  [0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6],
  [3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10],
  [6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1],
  [9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3],
  [8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1],
  [3, 11, 6, 3, 6, 0, 0, 6, 4],
  [6, 4, 8, 11, 6, 8],
  [7, 10, 6, 7, 8, 10, 8, 9, 10],
  [0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10],
  [10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0],
  [10, 6, 7, 10, 7, 1, 1, 7, 3],
  [1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7],
  [2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9],
  [7, 8, 0, 7, 0, 6, 6, 0, 2],
  [7, 3, 2, 6, 7, 2],
  [2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7],
  [2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7],
  [1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11],
  [11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1],
  [8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6],
  [0, 9, 1, 11, 6, 7],
  [7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0],
  [7, 11, 6],
  [7, 6, 11],
  [3, 0, 8, 11, 7, 6],
  [0, 1, 9, 11, 7, 6],
  [8, 1, 9, 8, 3, 1, 11, 7, 6],
  [10, 1, 2, 6, 11, 7],
  [1, 2, 10, 3, 0, 8, 6, 11, 7],
  [2, 9, 0, 2, 10, 9, 6, 11, 7],
  [6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8],
  [7, 2, 3, 6, 2, 7],
  [7, 0, 8, 7, 6, 0, 6, 2, 0],
  [2, 7, 6, 2, 3, 7, 0, 1, 9],
  [1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6],
  [10, 7, 6, 10, 1, 7, 1, 3, 7],
  [10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8],
  [0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7],
  [7, 6, 10, 7, 10, 8, 8, 10, 9],
  [6, 8, 4, 11, 8, 6],
  [3, 6, 11, 3, 0, 6, 0, 4, 6],
  [8, 6, 11, 8, 4, 6, 9, 0, 1],
  [9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6],
  [6, 8, 4, 6, 11, 8, 2, 10, 1],
  [1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6],
  [4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9],
  [10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3],
  [8, 2, 3, 8, 4, 2, 4, 6, 2],
  [0, 4, 2, 4, 6, 2],
  [1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8],
  [1, 9, 4, 1, 4, 2, 2, 4, 6],
  [8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1],
  [10, 1, 0, 10, 0, 6, 6, 0, 4],
  [4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3],
  [10, 9, 4, 6, 10, 4],
  [4, 9, 5, 7, 6, 11],
  [0, 8, 3, 4, 9, 5, 11, 7, 6],
  [5, 0, 1, 5, 4, 0, 7, 6, 11],
  [11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5],
  [9, 5, 4, 10, 1, 2, 7, 6, 11],
  [6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5],
  [7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2],
  [3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6],
  [7, 2, 3, 7, 6, 2, 5, 4, 9],
  [9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7],
  [3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0],
  [6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8],
  [9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7],
  [1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4],
  [4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10],
  [7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10],
  [6, 9, 5, 6, 11, 9, 11, 8, 9],
  [3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5],
  [0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11],
  [6, 11, 3, 6, 3, 5, 5, 3, 1],
  [1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6],
  [0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10],
  [11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5],
  [6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3],
  [5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2],
  [9, 5, 6, 9, 6, 0, 0, 6, 2],
  [1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8],
  [1, 5, 6, 2, 1, 6],
  [1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6],
  [10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0],
  [0, 3, 8, 5, 6, 10],
  [10, 5, 6],
  [11, 5, 10, 7, 5, 11],
  [11, 5, 10, 11, 7, 5, 8, 3, 0],
  [5, 11, 7, 5, 10, 11, 1, 9, 0],
  [10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1],
  [11, 1, 2, 11, 7, 1, 7, 5, 1],
  [0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11],
  [9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7],
  [7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2],
  [2, 5, 10, 2, 3, 5, 3, 7, 5],
  [8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5],
  [9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2],
  [9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2],
  [1, 3, 5, 3, 7, 5],
  [0, 8, 7, 0, 7, 1, 1, 7, 5],
  [9, 0, 3, 9, 3, 5, 5, 3, 7],
  [9, 8, 7, 5, 9, 7],
  [5, 8, 4, 5, 10, 8, 10, 11, 8],
  [5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0],
  [0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5],
  [10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4],
  [2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8],
  [0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11],
  [0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5],
  [9, 4, 5, 2, 11, 3],
  [2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4],
  [5, 10, 2, 5, 2, 4, 4, 2, 0],
  [3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9],
  [5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2],
  [8, 4, 5, 8, 5, 3, 3, 5, 1],
  [0, 4, 5, 1, 0, 5],
  [8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5],
  [9, 4, 5],
  [4, 11, 7, 4, 9, 11, 9, 10, 11],
  [0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11],
  [1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11],
  [3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4],
  [4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2],
  [9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3],
  [11, 7, 4, 11, 4, 2, 2, 4, 0],
  [11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4],
  [2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9],
  [9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7],
  [3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10],
  [1, 10, 2, 8, 7, 4],
  [4, 9, 1, 4, 1, 7, 7, 1, 3],
  [4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1],
  [4, 0, 3, 7, 4, 3],
  [4, 8, 7],
  [9, 10, 8, 10, 11, 8],
  [3, 0, 9, 3, 9, 11, 11, 9, 10],
  [0, 1, 10, 0, 10, 8, 8, 10, 11],
  [3, 1, 10, 11, 3, 10],
  [1, 2, 11, 1, 11, 9, 9, 11, 8],
  [3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9],
  [0, 2, 11, 8, 0, 11],
  [3, 2, 11],
  [2, 3, 8, 2, 8, 10, 10, 8, 9],
  [9, 10, 2, 0, 9, 2],
  [2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8],
  [1, 10, 2],
  [1, 3, 8, 9, 1, 8],
  [0, 9, 1],
  [0, 3, 8],
  []
];
var AllowedContours = [
  [0, 4, 4, 4, 2, 0, 0, 0, 2, 2, 0, 0],
  // 1 2 3 4 8 9
  [4, 0, 4, 4, 0, 8, 0, 0, 0, 8, 8, 0],
  // 0 2 3 5 9 10
  [4, 4, 0, 4, 0, 0, 8, 0, 0, 0, 8, 8],
  // 0 1 3 6 10 11
  [4, 4, 4, 0, 0, 0, 0, 1, 1, 0, 0, 1],
  // 0 1 2 7 8 11
  [2, 0, 0, 0, 0, 8, 8, 8, 2, 2, 0, 0],
  // 0 5 6 7 8 9
  [0, 8, 0, 0, 8, 0, 8, 8, 0, 8, 8, 0],
  // And rotate it
  [0, 0, 8, 0, 8, 8, 0, 8, 0, 0, 8, 8],
  [0, 0, 0, 1, 8, 8, 8, 0, 1, 0, 0, 1],
  [2, 0, 0, 1, 2, 0, 0, 1, 0, 2, 0, 1],
  // 0 3 4 7 9 11
  [2, 8, 0, 0, 2, 8, 0, 0, 2, 0, 8, 0],
  // And rotate some more
  [0, 8, 8, 0, 0, 8, 8, 0, 0, 8, 0, 8],
  [0, 0, 8, 1, 0, 0, 8, 1, 1, 0, 8, 0]
];

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-geo/util/marching-cubes/builder.js
function MarchinCubesMeshBuilder(vertexChunkSize, mesh) {
  const triangleChunkSize = Math.min(1 << 16, vertexChunkSize * 4);
  const vertices = ChunkedArray.create(Float32Array, 3, vertexChunkSize, mesh && mesh.vertexBuffer.ref.value);
  const normals = ChunkedArray.create(Float32Array, 3, vertexChunkSize, mesh && mesh.normalBuffer.ref.value);
  const groups = ChunkedArray.create(Float32Array, 1, vertexChunkSize, mesh && mesh.groupBuffer.ref.value);
  const indices = ChunkedArray.create(Uint32Array, 3, triangleChunkSize, mesh && mesh.indexBuffer.ref.value);
  let vertexCount = 0;
  let triangleCount = 0;
  return {
    addVertex: (x, y, z) => {
      ++vertexCount;
      return ChunkedArray.add3(vertices, x, y, z);
    },
    addNormal: (x, y, z) => {
      ChunkedArray.add3(normals, x, y, z);
    },
    addGroup: (group) => {
      ChunkedArray.add(groups, group);
    },
    addTriangle: (vertList, a, b, c) => {
      const i = vertList[a], j = vertList[b], k = vertList[c];
      if (i >= 0 && j >= 0 && k >= 0) {
        ++triangleCount;
        ChunkedArray.add3(indices, i, j, k);
      }
    },
    get: () => {
      const vb = ChunkedArray.compact(vertices, true);
      const nb = ChunkedArray.compact(normals, true);
      const ib = ChunkedArray.compact(indices, true);
      const gb = ChunkedArray.compact(groups, true);
      return Mesh.create(vb, ib, nb, gb, vertexCount, triangleCount, mesh);
    }
  };
}
function MarchinCubesLinesBuilder(vertexChunkSize, lines) {
  const vertices = ChunkedArray.create(Float32Array, 3, vertexChunkSize);
  const groups = ChunkedArray.create(Float32Array, 1, vertexChunkSize);
  const indices = ChunkedArray.create(Float32Array, 2, vertexChunkSize);
  let linesCount = 0;
  return {
    addVertex: (x, y, z) => {
      return ChunkedArray.add3(vertices, x, y, z);
    },
    addNormal: () => noop,
    addGroup: (group) => {
      ChunkedArray.add(groups, group);
    },
    addTriangle: (vertList, a, b, c, edgeFilter) => {
      const i = vertList[a], j = vertList[b], k = vertList[c];
      if (i >= 0 && j >= 0 && k >= 0) {
        if (AllowedContours[a][b] & edgeFilter) {
          ++linesCount;
          ChunkedArray.add2(indices, vertList[a], vertList[b]);
        }
        if (AllowedContours[b][c] & edgeFilter) {
          ++linesCount;
          ChunkedArray.add2(indices, vertList[b], vertList[c]);
        }
        if (AllowedContours[a][c] & edgeFilter) {
          ++linesCount;
          ChunkedArray.add2(indices, vertList[a], vertList[c]);
        }
      }
    },
    get: () => {
      const vb = ChunkedArray.compact(vertices, true);
      const ib = ChunkedArray.compact(indices, true);
      const gb = ChunkedArray.compact(groups, true);
      const builder = LinesBuilder.create(linesCount, linesCount / 10, lines);
      for (let i = 0; i < linesCount; ++i) {
        const la = ib[i * 2], lb = ib[i * 2 + 1];
        builder.add(vb[la * 3], vb[la * 3 + 1], vb[la * 3 + 2], vb[lb * 3], vb[lb * 3 + 1], vb[lb * 3 + 2], gb[la]);
      }
      return builder.getLines();
    }
  };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-geo/util/marching-cubes/algorithm.js
function getInputParams(params) {
  return {
    ...params,
    bottomLeft: defaults(params.bottomLeft, [0, 0, 0]),
    topRight: defaults(params.topRight, params.scalarField.space.dimensions)
  };
}
function getExtent(inputParams) {
  return {
    dX: inputParams.topRight[0] - inputParams.bottomLeft[0],
    dY: inputParams.topRight[1] - inputParams.bottomLeft[1],
    dZ: inputParams.topRight[2] - inputParams.bottomLeft[2]
  };
}
function computeMarchingCubesMesh(params, mesh) {
  return Task.create("Marching Cubes Mesh", async (ctx) => {
    const inputParams = getInputParams(params);
    const { dX, dY, dZ } = getExtent(inputParams);
    const vertexChunkSize = Math.min(262144, Math.max(dX * dY * dZ / 32, 1024));
    const builder = MarchinCubesMeshBuilder(vertexChunkSize, mesh);
    await new MarchingCubesComputation(ctx, builder, inputParams).run();
    return builder.get();
  });
}
function computeMarchingCubesLines(params, lines) {
  return Task.create("Marching Cubes Lines", async (ctx) => {
    const inputParams = getInputParams(params);
    const { dX, dY, dZ } = getExtent(inputParams);
    const vertexChunkSize = Math.min(262144, Math.max(dX * dY * dZ / 32, 1024));
    const builder = MarchinCubesLinesBuilder(vertexChunkSize, lines);
    await new MarchingCubesComputation(ctx, builder, inputParams).run();
    return builder.get();
  });
}
var MarchingCubesComputation = class {
  async doSlices() {
    let done = 0;
    this.edgeFilter = 15;
    for (let k = this.minZ; k < this.maxZ; k++, this.edgeFilter &= ~4) {
      this.slice(k);
      done += this.sliceSize;
      if (this.ctx.shouldUpdate) {
        await this.ctx.update({ message: "Computing surface...", current: done, max: this.size });
      }
    }
  }
  slice(k) {
    this.edgeFilter |= 2;
    for (let j = this.minY; j < this.maxY; j++, this.edgeFilter &= ~2) {
      this.edgeFilter |= 1;
      for (let i = this.minX; i < this.maxX; i++, this.edgeFilter &= ~1) {
        this.state.processCell(i, j, k, this.edgeFilter);
      }
    }
    this.state.clearEdgeVertexIndexSlice(k);
  }
  async run() {
    await this.doSlices();
  }
  constructor(ctx, builder, params) {
    this.ctx = ctx;
    this.minX = 0;
    this.minY = 0;
    this.minZ = 0;
    this.maxX = 0;
    this.maxY = 0;
    this.maxZ = 0;
    this.state = new MarchingCubesState(builder, params);
    this.minX = params.bottomLeft[0];
    this.minY = params.bottomLeft[1];
    this.minZ = params.bottomLeft[2];
    this.maxX = params.topRight[0] - 1;
    this.maxY = params.topRight[1] - 1;
    this.maxZ = params.topRight[2] - 1;
    this.size = (this.maxX - this.minX) * (this.maxY - this.minY) * (this.maxZ - this.minZ);
    this.sliceSize = (this.maxX - this.minX) * (this.maxY - this.minY);
  }
};
var MarchingCubesState = class {
  get3dOffsetFromEdgeInfo(index) {
    return this.nX * ((this.k + index.k) % 2 * this.nY + this.j + index.j) + this.i + index.i;
  }
  /**
   * This clears the "vertex index buffer" for the slice that will not be accessed anymore.
   */
  clearEdgeVertexIndexSlice(k) {
    const start = k % 2 === 0 ? 0 : 3 * this.nX * this.nY;
    const end = k % 2 === 0 ? 3 * this.nX * this.nY : this.verticesOnEdges.length;
    this.verticesOnEdges.fill(0, start, end);
  }
  interpolate(edgeNum) {
    const info = EdgeIdInfo[edgeNum];
    const edgeId = 3 * this.get3dOffsetFromEdgeInfo(info) + info.e;
    const ret = this.verticesOnEdges[edgeId];
    if (ret > 0)
      return ret - 1;
    const sf = this.scalarField;
    const sfg = this.scalarFieldGet;
    const edge = CubeEdges[edgeNum];
    const a = edge.a, b = edge.b;
    const li = a.i + this.i, lj = a.j + this.j, lk = a.k + this.k;
    const hi = b.i + this.i, hj = b.j + this.j, hk = b.k + this.k;
    const v0 = sfg(sf, li, lj, lk);
    const v1 = sfg(sf, hi, hj, hk);
    const t = (this.isoLevel - v0) / (v0 - v1);
    if (this.idField) {
      const u = this.idFieldGet(this.idField, li, lj, lk);
      const v = this.idFieldGet(this.idField, hi, hj, hk);
      let a2 = t < 0.5 ? u : v;
      if (a2 === -1)
        a2 = t < 0.5 ? v : u;
      if (a2 === -2)
        return -1;
      this.builder.addGroup(a2);
    } else {
      this.builder.addGroup(0);
    }
    const id = this.builder.addVertex(li + t * (li - hi), lj + t * (lj - hj), lk + t * (lk - hk));
    this.verticesOnEdges[edgeId] = id + 1;
    const n0x = sfg(sf, Math.max(0, li - 1), lj, lk) - sfg(sf, Math.min(this.nX - 1, li + 1), lj, lk);
    const n0y = sfg(sf, li, Math.max(0, lj - 1), lk) - sfg(sf, li, Math.min(this.nY - 1, lj + 1), lk);
    const n0z = sfg(sf, li, lj, Math.max(0, lk - 1)) - sfg(sf, li, lj, Math.min(this.nZ - 1, lk + 1));
    const n1x = sfg(sf, Math.max(0, hi - 1), hj, hk) - sfg(sf, Math.min(this.nX - 1, hi + 1), hj, hk);
    const n1y = sfg(sf, hi, Math.max(0, hj - 1), hk) - sfg(sf, hi, Math.min(this.nY - 1, hj + 1), hk);
    const n1z = sfg(sf, hi, hj, Math.max(0, hk - 1)) - sfg(sf, hi, hj, Math.min(this.nZ - 1, hk + 1));
    const nx = n0x + t * (n0x - n1x);
    const ny = n0y + t * (n0y - n1y);
    const nz = n0z + t * (n0z - n1z);
    if (this.isoLevel >= 0) {
      this.builder.addNormal(nx, ny, nz);
    } else {
      this.builder.addNormal(-nx, -ny, -nz);
    }
    return id;
  }
  constructor(builder, params) {
    this.builder = builder;
    this.vertList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.i = 0;
    this.j = 0;
    this.k = 0;
    const dims = params.scalarField.space.dimensions;
    this.nX = dims[0];
    this.nY = dims[1];
    this.nZ = dims[2];
    this.isoLevel = params.isoLevel;
    this.scalarFieldGet = params.scalarField.space.get;
    this.scalarField = params.scalarField.data;
    if (params.idField) {
      this.idField = params.idField.data;
      this.idFieldGet = params.idField.space.get;
    }
    this.verticesOnEdges = new Int32Array(3 * this.nX * this.nY * 2);
  }
  get(i, j, k) {
    return this.scalarFieldGet(this.scalarField, i, j, k);
  }
  processCell(i, j, k, edgeFilter) {
    let tableIndex = 0;
    if (this.get(i, j, k) < this.isoLevel)
      tableIndex |= 1;
    if (this.get(i + 1, j, k) < this.isoLevel)
      tableIndex |= 2;
    if (this.get(i + 1, j + 1, k) < this.isoLevel)
      tableIndex |= 4;
    if (this.get(i, j + 1, k) < this.isoLevel)
      tableIndex |= 8;
    if (this.get(i, j, k + 1) < this.isoLevel)
      tableIndex |= 16;
    if (this.get(i + 1, j, k + 1) < this.isoLevel)
      tableIndex |= 32;
    if (this.get(i + 1, j + 1, k + 1) < this.isoLevel)
      tableIndex |= 64;
    if (this.get(i, j + 1, k + 1) < this.isoLevel)
      tableIndex |= 128;
    if (tableIndex === 0 || tableIndex === 255)
      return;
    this.i = i;
    this.j = j;
    this.k = k;
    const edgeInfo = EdgeTable[tableIndex];
    if ((edgeInfo & 1) > 0)
      this.vertList[0] = this.interpolate(0);
    if ((edgeInfo & 2) > 0)
      this.vertList[1] = this.interpolate(1);
    if ((edgeInfo & 4) > 0)
      this.vertList[2] = this.interpolate(2);
    if ((edgeInfo & 8) > 0)
      this.vertList[3] = this.interpolate(3);
    if ((edgeInfo & 16) > 0)
      this.vertList[4] = this.interpolate(4);
    if ((edgeInfo & 32) > 0)
      this.vertList[5] = this.interpolate(5);
    if ((edgeInfo & 64) > 0)
      this.vertList[6] = this.interpolate(6);
    if ((edgeInfo & 128) > 0)
      this.vertList[7] = this.interpolate(7);
    if ((edgeInfo & 256) > 0)
      this.vertList[8] = this.interpolate(8);
    if ((edgeInfo & 512) > 0)
      this.vertList[9] = this.interpolate(9);
    if ((edgeInfo & 1024) > 0)
      this.vertList[10] = this.interpolate(10);
    if ((edgeInfo & 2048) > 0)
      this.vertList[11] = this.interpolate(11);
    const triInfo = TriTable[tableIndex];
    for (let t = 0; t < triInfo.length; t += 3) {
      const l = triInfo[t], m = triInfo[t + 1], n = triInfo[t + 2];
      if (this.isoLevel >= 0) {
        this.builder.addTriangle(this.vertList, l, m, n, edgeFilter);
      } else {
        this.builder.addTriangle(this.vertList, n, m, l, edgeFilter);
      }
    }
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-repr/volume/representation.js
function createVolumeRenderObject(volume, geometry, locationIt, theme, props, materialId) {
  const { createValues, createRenderableState } = Geometry.getUtils(geometry);
  const transform = createIdentityTransform();
  const values = createValues(geometry, transform, locationIt, theme, props);
  const state = createRenderableState(props);
  return createRenderObject(geometry.kind, values, state, materialId);
}
function VolumeVisual(builder, materialId) {
  const { defaultProps, createGeometry, createLocationIterator, getLoci: getLoci6, eachLocation, setUpdateState, mustRecreate, dispose } = builder;
  const { updateValues, updateBoundingSphere, updateRenderableState, createPositionIterator } = builder.geometryUtils;
  const updateState = VisualUpdateState.create();
  let renderObject;
  let newProps;
  let newTheme;
  let newVolume;
  let newKey;
  let currentProps = Object.assign({}, defaultProps);
  let currentTheme = Theme.createEmpty();
  let currentVolume;
  let currentKey;
  let geometry;
  let geometryVersion = -1;
  let locationIt;
  let positionIt;
  function prepareUpdate(theme, props, volume, key) {
    if (!volume && !currentVolume) {
      throw new Error("missing volume");
    }
    newProps = Object.assign({}, currentProps, props);
    newTheme = theme;
    newVolume = volume;
    newKey = key;
    VisualUpdateState.reset(updateState);
    if (!renderObject) {
      updateState.createNew = true;
    } else if (!Volume.areEquivalent(newVolume, currentVolume) || newKey !== currentKey) {
      updateState.createNew = true;
    }
    if (updateState.createNew) {
      updateState.createGeometry = true;
      return;
    }
    setUpdateState(updateState, volume, newProps, currentProps, newTheme, currentTheme);
    if (!ColorTheme.areEqual(theme.color, currentTheme.color)) {
      updateState.updateColor = true;
    }
    if (!SizeTheme.areEqual(theme.size, currentTheme.size)) {
      updateState.updateSize = true;
    }
    if (newProps.instanceGranularity !== currentProps.instanceGranularity) {
      updateState.updateTransform = true;
    }
    if (updateState.updateSize && !("uSize" in renderObject.values)) {
      updateState.createGeometry = true;
    }
    if (updateState.createGeometry) {
      updateState.updateColor = true;
      updateState.updateSize = true;
    }
  }
  function update(newGeometry) {
    if (updateState.createNew) {
      locationIt = createLocationIterator(newVolume, newKey);
      if (newGeometry) {
        renderObject = createVolumeRenderObject(newVolume, newGeometry, locationIt, newTheme, newProps, materialId);
        positionIt = createPositionIterator(newGeometry, renderObject.values);
      } else {
        throw new Error("expected geometry to be given");
      }
    } else {
      if (!renderObject) {
        throw new Error("expected renderObject to be available");
      }
      if (updateState.updateTransform) {
        locationIt = createLocationIterator(newVolume, newKey);
        const { instanceCount, groupCount } = locationIt;
        if (newProps.instanceGranularity) {
          createMarkers(instanceCount, "instance", renderObject.values);
        } else {
          createMarkers(instanceCount * groupCount, "groupInstance", renderObject.values);
        }
      } else {
        locationIt.reset();
      }
      if (updateState.createGeometry) {
        if (newGeometry) {
          ValueCell.updateIfChanged(renderObject.values.drawCount, Geometry.getDrawCount(newGeometry));
          ValueCell.updateIfChanged(renderObject.values.uVertexCount, Geometry.getVertexCount(newGeometry));
          ValueCell.updateIfChanged(renderObject.values.uGroupCount, Geometry.getGroupCount(newGeometry));
        } else {
          throw new Error("expected geometry to be given");
        }
      }
      if (updateState.updateTransform || updateState.createGeometry) {
        updateBoundingSphere(renderObject.values, newGeometry || geometry);
        positionIt = createPositionIterator(newGeometry || geometry, renderObject.values);
      }
      if (updateState.updateSize) {
        if ("uSize" in renderObject.values) {
          createSizes(locationIt, newTheme.size, renderObject.values);
        }
      }
      if (updateState.updateColor) {
        createColors(locationIt, positionIt, newTheme.color, renderObject.values);
      }
      updateValues(renderObject.values, newProps);
      updateRenderableState(renderObject.state, newProps);
    }
    currentProps = newProps;
    currentTheme = newTheme;
    currentVolume = newVolume;
    currentKey = newKey;
    if (newGeometry) {
      geometry = newGeometry;
      geometryVersion += 1;
    }
  }
  function eachInstance(loci, volume, key, apply) {
    let changed = false;
    if (Volume.Cell.isLoci(loci)) {
      if (Volume.Cell.isLociEmpty(loci))
        return false;
      if (!Volume.areEquivalent(loci.volume, volume))
        return false;
      if (apply(Interval.ofSingleton(0)))
        changed = true;
    } else if (Volume.Segment.isLoci(loci)) {
      if (Volume.Segment.isLociEmpty(loci))
        return false;
      if (!Volume.areEquivalent(loci.volume, volume))
        return false;
      if (!SortedArray.has(loci.segments, key))
        return false;
      if (apply(Interval.ofSingleton(0)))
        changed = true;
    }
    return changed;
  }
  function lociApply(loci, apply) {
    if (isEveryLoci(loci)) {
      if (currentProps.instanceGranularity) {
        return apply(Interval.ofBounds(0, locationIt.instanceCount));
      } else {
        return apply(Interval.ofBounds(0, locationIt.groupCount * locationIt.instanceCount));
      }
    } else {
      if (currentProps.instanceGranularity) {
        return eachInstance(loci, currentVolume, currentKey, apply);
      } else {
        return eachLocation(loci, currentVolume, currentKey, currentProps, apply);
      }
    }
  }
  return {
    get groupCount() {
      return locationIt ? locationIt.count : 0;
    },
    get renderObject() {
      return renderObject;
    },
    get geometryVersion() {
      return geometryVersion;
    },
    async createOrUpdate(ctx, theme, props = {}, volumeKey) {
      prepareUpdate(theme, props, (volumeKey === null || volumeKey === void 0 ? void 0 : volumeKey.volume) || currentVolume, (volumeKey === null || volumeKey === void 0 ? void 0 : volumeKey.key) || currentKey);
      if (updateState.createGeometry) {
        const newGeometry = createGeometry(ctx, newVolume, newKey, newTheme, newProps, geometry);
        return isPromiseLike(newGeometry) ? newGeometry.then(update) : update(newGeometry);
      } else {
        update();
      }
    },
    getLoci(pickingId) {
      return renderObject ? getLoci6(pickingId, currentVolume, currentKey, currentProps, renderObject.id) : EmptyLoci;
    },
    eachLocation(cb) {
      locationIt.reset();
      while (locationIt.hasNext) {
        const { location: location2, isSecondary } = locationIt.move();
        cb(location2, isSecondary);
      }
    },
    mark(loci, action) {
      return Visual.mark(renderObject, loci, action, lociApply);
    },
    setVisibility(visible) {
      Visual.setVisibility(renderObject, visible);
    },
    setAlphaFactor(alphaFactor) {
      Visual.setAlphaFactor(renderObject, alphaFactor);
    },
    setPickable(pickable) {
      Visual.setPickable(renderObject, pickable);
    },
    setColorOnly(colorOnly) {
      Visual.setColorOnly(renderObject, colorOnly);
    },
    setTransform(matrix, instanceMatrices) {
      Visual.setTransform(renderObject, matrix, instanceMatrices);
    },
    setOverpaint(overpaint) {
      return Visual.setOverpaint(renderObject, overpaint, lociApply, true);
    },
    setTransparency(transparency) {
      return Visual.setTransparency(renderObject, transparency, lociApply, true);
    },
    setEmissive(emissive) {
      return Visual.setEmissive(renderObject, emissive, lociApply, true);
    },
    setSubstance(substance) {
      return Visual.setSubstance(renderObject, substance, lociApply, true);
    },
    setClipping(clipping) {
      return Visual.setClipping(renderObject, clipping, lociApply, true);
    },
    setThemeStrength(strength) {
      Visual.setThemeStrength(renderObject, strength);
    },
    destroy() {
      dispose === null || dispose === void 0 ? void 0 : dispose(geometry);
      if (renderObject) {
        renderObject.state.disposed = true;
        renderObject = void 0;
      }
    },
    mustRecreate
  };
}
function VolumeRepresentationProvider(p) {
  return p;
}
var VolumeParams = {
  ...BaseGeometry.Params
};
function VolumeRepresentation(label, ctx, getParams, visualCtor, getLoci6, getKeys = () => [-1]) {
  let version = 0;
  const { webgl } = ctx;
  const updated = new Subject();
  const geometryState = new Representation.GeometryState();
  const materialId = getNextMaterialId();
  const renderObjects = [];
  const _state = Representation.createState();
  const visuals = /* @__PURE__ */ new Map();
  let _volume;
  let _keys;
  let _params;
  let _props;
  let _theme = Theme.createEmpty();
  async function visual(runtime, key) {
    var _a;
    let visual2 = visuals.get(key);
    if (!visual2) {
      visual2 = visualCtor(materialId, _volume, key, _props, webgl);
      visuals.set(key, visual2);
    } else if ((_a = visual2.mustRecreate) === null || _a === void 0 ? void 0 : _a.call(visual2, { volume: _volume, key }, _props, webgl)) {
      visual2.destroy();
      visual2 = visualCtor(materialId, _volume, key, _props, webgl);
      visuals.set(key, visual2);
    }
    return visual2.createOrUpdate({ webgl, runtime }, _theme, _props, { volume: _volume, key });
  }
  function createOrUpdate(props = {}, volume) {
    if (volume && volume !== _volume) {
      _params = getParams(ctx, volume);
      _volume = volume;
      if (!_props)
        _props = ParamDefinition.getDefaultValues(_params);
    }
    const qualityProps = getQualityProps(Object.assign({}, _props, props), _volume);
    Object.assign(_props, props, qualityProps);
    _keys = getKeys(_props);
    return Task.create("Creating or updating VolumeRepresentation", async (runtime) => {
      const toDelete = new Set(visuals.keys());
      for (let i = 0, il = _keys.length; i < il; ++i) {
        const segment = _keys[i];
        toDelete.delete(segment);
        const promise = visual(runtime, segment);
        if (promise)
          await promise;
      }
      toDelete.forEach((segment) => {
        var _a;
        (_a = visuals.get(segment)) === null || _a === void 0 ? void 0 : _a.destroy();
        visuals.delete(segment);
      });
      renderObjects.length = 0;
      visuals.forEach((visual2) => {
        if (visual2.renderObject) {
          renderObjects.push(visual2.renderObject);
          geometryState.add(visual2.renderObject.id, visual2.geometryVersion);
        }
      });
      geometryState.snapshot();
      updated.next(version++);
    });
  }
  function mark(loci, action) {
    let changed = false;
    visuals.forEach((visual2) => {
      changed = visual2.mark(loci, action) || changed;
    });
    return changed;
  }
  function setVisualState(visual2, state) {
    if (state.visible !== void 0 && visual2)
      visual2.setVisibility(state.visible);
    if (state.alphaFactor !== void 0 && visual2)
      visual2.setAlphaFactor(state.alphaFactor);
    if (state.pickable !== void 0 && visual2)
      visual2.setPickable(state.pickable);
    if (state.overpaint !== void 0 && visual2)
      visual2.setOverpaint(state.overpaint);
    if (state.transparency !== void 0 && visual2)
      visual2.setTransparency(state.transparency);
    if (state.emissive !== void 0 && visual2)
      visual2.setEmissive(state.emissive);
    if (state.substance !== void 0 && visual2)
      visual2.setSubstance(state.substance);
    if (state.clipping !== void 0 && visual2)
      visual2.setClipping(state.clipping);
    if (state.transform !== void 0 && visual2)
      visual2.setTransform(state.transform);
    if (state.themeStrength !== void 0 && visual2)
      visual2.setThemeStrength(state.themeStrength);
  }
  function setState(state) {
    const { visible, alphaFactor, pickable, overpaint, transparency, emissive, substance, clipping, transform, themeStrength, syncManually, markerActions } = state;
    const newState = {};
    if (visible !== void 0)
      newState.visible = visible;
    if (alphaFactor !== void 0)
      newState.alphaFactor = alphaFactor;
    if (pickable !== void 0)
      newState.pickable = pickable;
    if (overpaint !== void 0)
      newState.overpaint = overpaint;
    if (transparency !== void 0)
      newState.transparency = transparency;
    if (emissive !== void 0)
      newState.emissive = emissive;
    if (substance !== void 0)
      newState.substance = substance;
    if (clipping !== void 0)
      newState.clipping = clipping;
    if (themeStrength !== void 0)
      newState.themeStrength = themeStrength;
    if (transform !== void 0 && !Mat4.areEqual(transform, _state.transform, EPSILON)) {
      newState.transform = transform;
    }
    if (syncManually !== void 0)
      newState.syncManually = syncManually;
    if (markerActions !== void 0)
      newState.markerActions = markerActions;
    visuals.forEach((visual2) => setVisualState(visual2, newState));
    Representation.updateState(_state, state);
  }
  function setTheme(theme) {
    _theme = theme;
  }
  function destroy() {
    visuals.forEach((visual2) => visual2.destroy());
    visuals.clear();
  }
  return {
    label,
    get groupCount() {
      let groupCount = 0;
      visuals.forEach((visual2) => {
        if (visual2.renderObject)
          groupCount += visual2.groupCount;
      });
      return groupCount;
    },
    get props() {
      return _props;
    },
    get params() {
      return _params;
    },
    get state() {
      return _state;
    },
    get theme() {
      return _theme;
    },
    get geometryVersion() {
      return geometryState.version;
    },
    renderObjects,
    updated,
    createOrUpdate,
    setState,
    setTheme,
    getLoci: (pickingId) => {
      let loci = EmptyLoci;
      visuals.forEach((visual2) => {
        const _loci = visual2.getLoci(pickingId);
        if (!isEmptyLoci(_loci))
          loci = _loci;
      });
      return loci;
    },
    getAllLoci: () => {
      return [getLoci6(_volume, _props)];
    },
    eachLocation: (cb) => {
      visuals.forEach((visual2) => {
        visual2.eachLocation(cb);
      });
    },
    mark,
    destroy
  };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-gl/shader/histogram-pyramid/sum.frag.js
var sum_frag = `
precision highp float;
precision highp int;

#if __VERSION__ == 100
    precision highp sampler2D;
    uniform sampler2D tTexture;
#else
    precision highp isampler2D;
    uniform isampler2D tTexture;
#endif

void main(void) {
    #if __VERSION__ == 100
        gl_FragColor = texture2D(tTexture, vec2(0.5));
    #else
        gl_FragColor = ivec4(texture2D(tTexture, vec2(0.5)).r);
    #endif
}
`;

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-gl/compute/histogram-pyramid/sum.js
var HistopyramidSumSchema = {
  ...QuadSchema,
  tTexture: TextureSpec("texture", "rgba", "float", "nearest")
};
var HistopyramidSumName = "histopyramid-sum";
function getHistopyramidSumRenderable(ctx, texture) {
  if (ctx.namedComputeRenderables[HistopyramidSumName]) {
    const v = ctx.namedComputeRenderables[HistopyramidSumName].values;
    ValueCell.update(v.tTexture, texture);
    ctx.namedComputeRenderables[HistopyramidSumName].update();
  } else {
    ctx.namedComputeRenderables[HistopyramidSumName] = createHistopyramidSumRenderable(ctx, texture);
  }
  return ctx.namedComputeRenderables[HistopyramidSumName];
}
function createHistopyramidSumRenderable(ctx, texture) {
  const values = {
    ...QuadValues,
    tTexture: ValueCell.create(texture)
  };
  const schema = { ...HistopyramidSumSchema };
  const shaderCode = ShaderCode("sum", quad_vert, sum_frag, {}, { 0: "ivec4" });
  const renderItem = createComputeRenderItem(ctx, "triangles", shaderCode, schema, values);
  return createComputeRenderable(renderItem, values);
}
function setRenderingDefaults(ctx) {
  const { gl, state } = ctx;
  state.disable(gl.CULL_FACE);
  state.disable(gl.BLEND);
  state.disable(gl.DEPTH_TEST);
  state.disable(gl.SCISSOR_TEST);
  state.depthMask(false);
  state.colorMask(true, true, true, true);
  state.clearColor(0, 0, 0, 0);
}
var sumBytes = new Uint8Array(4);
var sumInts = new Int32Array(4);
function getHistopyramidSum(ctx, pyramidTopTexture) {
  if (isTimingMode)
    ctx.timer.mark("getHistopyramidSum");
  const { gl, state, resources } = ctx;
  const renderable = getHistopyramidSumRenderable(ctx, pyramidTopTexture);
  ctx.state.currentRenderItemId = -1;
  if (!ctx.namedFramebuffers[HistopyramidSumName]) {
    ctx.namedFramebuffers[HistopyramidSumName] = resources.framebuffer();
  }
  const framebuffer = ctx.namedFramebuffers[HistopyramidSumName];
  if (!ctx.namedTextures[HistopyramidSumName]) {
    ctx.namedTextures[HistopyramidSumName] = isWebGL2(gl) ? resources.texture("image-int32", "rgba", "int", "nearest") : resources.texture("image-uint8", "rgba", "ubyte", "nearest");
    ctx.namedTextures[HistopyramidSumName].define(1, 1);
  }
  const sumTexture = ctx.namedTextures[HistopyramidSumName];
  sumTexture.attachFramebuffer(framebuffer, 0);
  setRenderingDefaults(ctx);
  state.viewport(0, 0, 1, 1);
  renderable.render();
  gl.finish();
  ctx.readPixels(0, 0, 1, 1, isWebGL2(gl) ? sumInts : sumBytes);
  ctx.unbindFramebuffer();
  if (isTimingMode)
    ctx.timer.markEnd("getHistopyramidSum");
  return isWebGL2(gl) ? sumInts[0] : unpackRGBToInt(sumBytes[0], sumBytes[1], sumBytes[2]);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-gl/shader/histogram-pyramid/reduction.frag.js
var reduction_frag = `
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D tInputLevel;

// previous level used to evaluate the new level
#if __VERSION__ == 100
    uniform sampler2D tPreviousLevel;
#else
    precision highp isampler2D;
    uniform isampler2D tPreviousLevel;
#endif

// inverted size of the previous level texture.
uniform float uSize;
uniform float uTexSize;
uniform bool uFirst;

#include common

void main(void) {
    float k = 0.5 * uSize;
    vec2 position = floor((gl_FragCoord.xy / uTexSize) / uSize) * uSize;

    #if __VERSION__ == 100
        float a, b, c, d;

        if (uFirst) {
            a = texture2D(tInputLevel, position).r * 255.0;
            b = texture2D(tInputLevel, position + vec2(k, 0.0)).r * 255.0;
            c = texture2D(tInputLevel, position + vec2(0.0, k)).r * 255.0;
            d = texture2D(tInputLevel, position + vec2(k, k)).r * 255.0;
        } else {
            a = unpackRGBToInt(texture2D(tPreviousLevel, position).rgb);
            b = unpackRGBToInt(texture2D(tPreviousLevel, position + vec2(k, 0.0)).rgb);
            c = unpackRGBToInt(texture2D(tPreviousLevel, position + vec2(0.0, k)).rgb);
            d = unpackRGBToInt(texture2D(tPreviousLevel, position + vec2(k, k)).rgb);
        }
        gl_FragColor = vec4(packIntToRGB(a + b + c + d), 1.0);
    #else
        int a, b, c, d;

        if (uFirst) {
            a = int(texture2D(tInputLevel, position).r * 255.0);
            b = int(texture2D(tInputLevel, position + vec2(k, 0.0)).r * 255.0);
            c = int(texture2D(tInputLevel, position + vec2(0.0, k)).r * 255.0);
            d = int(texture2D(tInputLevel, position + vec2(k, k)).r * 255.0);
        } else {
            a = texture2D(tPreviousLevel, position).r;
            b = texture2D(tPreviousLevel, position + vec2(k, 0.0)).r;
            c = texture2D(tPreviousLevel, position + vec2(0.0, k)).r;
            d = texture2D(tPreviousLevel, position + vec2(k, k)).r;
        }
        gl_FragColor = ivec4(a + b + c + d);
    #endif
}
`;

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-gl/compute/histogram-pyramid/reduction.js
var HistopyramidReductionSchema = {
  ...QuadSchema,
  tInputLevel: TextureSpec("texture", "rgba", "float", "nearest"),
  tPreviousLevel: TextureSpec("texture", "rgba", "float", "nearest"),
  uSize: UniformSpec("f"),
  uTexSize: UniformSpec("f"),
  uFirst: UniformSpec("b")
};
var HistogramPyramidName = "histogram-pyramid";
function getHistopyramidReductionRenderable(ctx, inputLevel, previousLevel) {
  if (ctx.namedComputeRenderables[HistogramPyramidName]) {
    const v = ctx.namedComputeRenderables[HistogramPyramidName].values;
    ValueCell.update(v.tInputLevel, inputLevel);
    ValueCell.update(v.tPreviousLevel, previousLevel);
    ctx.namedComputeRenderables[HistogramPyramidName].update();
  } else {
    ctx.namedComputeRenderables[HistogramPyramidName] = createHistopyramidReductionRenderable(ctx, inputLevel, previousLevel);
  }
  return ctx.namedComputeRenderables[HistogramPyramidName];
}
function createHistopyramidReductionRenderable(ctx, inputLevel, previousLevel) {
  const values = {
    ...QuadValues,
    tInputLevel: ValueCell.create(inputLevel),
    tPreviousLevel: ValueCell.create(previousLevel),
    uSize: ValueCell.create(0),
    uTexSize: ValueCell.create(0),
    uFirst: ValueCell.create(true)
  };
  const schema = { ...HistopyramidReductionSchema };
  const shaderCode = ShaderCode("reduction", quad_vert, reduction_frag, {}, { 0: "ivec4" });
  const renderItem = createComputeRenderItem(ctx, "triangles", shaderCode, schema, values);
  return createComputeRenderable(renderItem, values);
}
function getLevelTextureFramebuffer(ctx, level) {
  const size = Math.pow(2, level);
  const name = `level${level}`;
  const texture = ctx.isWebGL2 ? getTexture(name, ctx, "image-int32", "alpha", "int", "nearest") : getTexture(name, ctx, "image-uint8", "rgba", "ubyte", "nearest");
  texture.define(size, size);
  let framebuffer = tryGetFramebuffer(name, ctx);
  if (!framebuffer) {
    framebuffer = getFramebuffer(name, ctx);
  }
  texture.attachFramebuffer(framebuffer, 0);
  return { texture, framebuffer };
}
function setRenderingDefaults2(ctx) {
  const { gl, state } = ctx;
  state.disable(gl.CULL_FACE);
  state.disable(gl.BLEND);
  state.disable(gl.DEPTH_TEST);
  state.enable(gl.SCISSOR_TEST);
  state.depthMask(false);
  state.colorMask(true, true, true, true);
  state.clearColor(0, 0, 0, 0);
}
function getFramebuffer(name, webgl) {
  const _name = `${HistogramPyramidName}-${name}`;
  if (!webgl.namedFramebuffers[_name]) {
    webgl.namedFramebuffers[_name] = webgl.resources.framebuffer();
  }
  return webgl.namedFramebuffers[_name];
}
function getTexture(name, webgl, kind, format, type, filter2) {
  const _name = `${HistogramPyramidName}-${name}`;
  if (!webgl.namedTextures[_name]) {
    webgl.namedTextures[_name] = webgl.resources.texture(kind, format, type, filter2);
  }
  return webgl.namedTextures[_name];
}
function tryGetFramebuffer(name, webgl) {
  const _name = `${HistogramPyramidName}-${name}`;
  return webgl.namedFramebuffers[_name];
}
function createHistogramPyramid(ctx, inputTexture, scale, gridTexDim) {
  if (isTimingMode)
    ctx.timer.mark("createHistogramPyramid");
  const { gl, state } = ctx;
  const w = inputTexture.getWidth();
  const h = inputTexture.getHeight();
  if (w !== h || !isPowerOfTwo(w)) {
    throw new Error("inputTexture must be of square power-of-two size");
  }
  const levels = Math.ceil(Math.log(w) / Math.log(2));
  const maxSize = Math.pow(2, levels);
  const maxSizeX = Math.pow(2, levels);
  const maxSizeY = Math.pow(2, levels - 1);
  const pyramidTex = ctx.isWebGL2 ? getTexture("pyramid", ctx, "image-int32", "alpha", "int", "nearest") : getTexture("pyramid", ctx, "image-uint8", "rgba", "ubyte", "nearest");
  pyramidTex.define(maxSizeX, maxSizeY);
  const framebuffer = getFramebuffer("pyramid", ctx);
  pyramidTex.attachFramebuffer(framebuffer, 0);
  state.viewport(0, 0, maxSizeX, maxSizeY);
  if (isWebGL2(gl)) {
    gl.clearBufferiv(gl.COLOR, 0, [0, 0, 0, 0]);
  } else {
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
  const levelTexturesFramebuffers = [];
  for (let i = 0; i < levels; ++i)
    levelTexturesFramebuffers.push(getLevelTextureFramebuffer(ctx, i));
  const renderable = getHistopyramidReductionRenderable(ctx, inputTexture, levelTexturesFramebuffers[0].texture);
  state.currentRenderItemId = -1;
  setRenderingDefaults2(ctx);
  let offset = 0;
  for (let i = 0; i < levels; i++) {
    const currLevel = levels - 1 - i;
    const tf = levelTexturesFramebuffers[currLevel];
    tf.framebuffer.bind();
    const size = Math.pow(2, currLevel);
    ValueCell.update(renderable.values.uSize, Math.pow(2, i + 1) / maxSize);
    ValueCell.update(renderable.values.uTexSize, size);
    ValueCell.updateIfChanged(renderable.values.uFirst, i === 0);
    if (i > 0) {
      ValueCell.update(renderable.values.tPreviousLevel, levelTexturesFramebuffers[levels - i].texture);
      renderable.update();
    }
    state.currentRenderItemId = -1;
    state.viewport(0, 0, size, size);
    state.scissor(0, 0, size, size);
    if (isWebGL2(gl)) {
      gl.clearBufferiv(gl.COLOR, 0, [0, 0, 0, 0]);
    } else {
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    state.scissor(0, 0, gridTexDim[0], gridTexDim[1]);
    renderable.render();
    pyramidTex.bind(0);
    gl.copyTexSubImage2D(gl.TEXTURE_2D, 0, offset, 0, 0, 0, size, size);
    pyramidTex.unbind(0);
    offset += size;
  }
  gl.finish();
  if (isTimingMode)
    ctx.timer.markEnd("createHistogramPyramid");
  const count = Math.max(1, getHistopyramidSum(ctx, levelTexturesFramebuffers[0].texture));
  const height = Math.ceil(count / Math.pow(2, levels));
  return { pyramidTex, count, height, levels, scale };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-gl/compute/marching-cubes/tables.js
var TriCount;
function getTriCount() {
  if (TriCount !== void 0)
    return TriCount;
  TriCount = createTextureImage(16 * 16, 1, Uint8Array);
  const { array } = TriCount;
  for (let i = 0, il = TriTable.length; i < il; ++i) {
    array[i] = TriTable[i].length / 3;
  }
  return TriCount;
}
var TriIndices;
function getTriIndices() {
  if (TriIndices !== void 0)
    return TriIndices;
  TriIndices = createTextureImage(64 * 64, 1, Uint8Array);
  const { array } = TriIndices;
  for (let i = 0, il = TriTable.length; i < il; ++i) {
    for (let j = 0; j < 16; ++j) {
      if (j < TriTable[i].length) {
        array[i * 16 + j] = TriTable[i][j];
      } else {
        array[i * 16 + j] = 255;
      }
    }
  }
  return TriIndices;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-gl/shader/marching-cubes/isosurface.frag.js
var isosurface_frag = `
precision highp float;
precision highp int;
precision highp sampler2D;

#if __VERSION__ == 100
    uniform sampler2D tActiveVoxelsPyramid;
#else
    precision highp isampler2D;
    uniform isampler2D tActiveVoxelsPyramid;
#endif

uniform sampler2D tActiveVoxelsBase;
uniform sampler2D tVolumeData;
uniform sampler2D tTriIndices;

uniform float uIsoValue;
uniform float uLevels;
uniform float uSize;
uniform float uCount;
uniform bool uInvert;

uniform vec3 uGridDim;
uniform vec3 uGridTexDim;
uniform mat4 uGridTransform;

// scale to volume data coord
uniform vec2 uScale;

#include common

// cube corners (excluding origin)
const vec3 c1 = vec3(1., 0., 0.);
const vec3 c2 = vec3(1., 1., 0.);
const vec3 c3 = vec3(0., 1., 0.);
const vec3 c4 = vec3(0., 0., 1.);
const vec3 c5 = vec3(1., 0., 1.);
const vec3 c6 = vec3(1., 1., 1.);
const vec3 c7 = vec3(0., 1., 1.);

vec3 index3dFrom2d(vec2 coord) {
    vec2 gridTexPos = coord * uGridTexDim.xy;
    vec2 columnRow = ivec2Div(gridTexPos, uGridDim.xy);
    vec2 posXY = gridTexPos - columnRow * uGridDim.xy;
    float posZ = columnRow.y * intDiv(uGridTexDim.x, uGridDim.x) + columnRow.x;
    return vec3(posXY, posZ);
}

vec4 texture3dFrom2dNearest(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice = floor(pos.z * gridDim.z + 0.5); // round to nearest z-slice
    float column = intDiv(intMod(zSlice * gridDim.x, texDim.x), gridDim.x);
    float row = intDiv(zSlice * gridDim.x, texDim.x);
    vec2 coord = (vec2(column * gridDim.x, row * gridDim.y) + (pos.xy * gridDim.xy)) / (texDim / uScale);
    return texture2D(tex, coord + 0.5 / (texDim / uScale));
}

vec4 voxel(vec3 pos) {
    pos = min(max(vec3(0.0), pos), uGridDim - vec3(1.0));
    return texture3dFrom2dNearest(tVolumeData, pos / uGridDim, uGridDim, uGridTexDim.xy);
}

float voxelValuePadded(vec3 pos) {
    pos = min(max(vec3(0.0), pos), uGridDim - vec3(vec2(2.0), 1.0)); // remove xy padding
    vec4 v = texture3dFrom2dNearest(tVolumeData, pos / uGridDim, uGridDim, uGridTexDim.xy);
    #ifdef dValueChannel_red
        return v.r;
    #else
        return v.a;
    #endif
}

int idot2(const in ivec2 a, const in ivec2 b) {
    return a.x * b.x + a.y * b.y;
}

int idot4(const in ivec4 a, const in ivec4 b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
}

#if __VERSION__ == 100
    int pyramidVoxel(vec2 pos) {
        return int(unpackRGBToInt(texture2D(tActiveVoxelsPyramid, pos / (vec2(1.0, 0.5) * uSize)).rgb));
    }
#else
    int pyramidVoxel(vec2 pos) {
        return texture2D(tActiveVoxelsPyramid, pos / (vec2(1.0, 0.5) * uSize)).r;
    }
#endif

vec4 baseVoxel(vec2 pos) {
    return texture2D(tActiveVoxelsBase, pos / uSize);
}

vec4 getGroup(const in vec3 p) {
    vec3 gridDim = uGridDim - vec3(1.0, 1.0, 0.0); // remove xy padding
    // note that we swap x and z because the texture is flipped around y
    #if defined(dAxisOrder_012)
        float group = p.z + p.y * gridDim.z + p.x * gridDim.z * gridDim.y; // 210
    #elif defined(dAxisOrder_021)
        float group = p.y + p.z * gridDim.y + p.x * gridDim.y * gridDim.z; // 120
    #elif defined(dAxisOrder_102)
        float group = p.z + p.x * gridDim.z + p.y * gridDim.z * gridDim.x; // 201
    #elif defined(dAxisOrder_120)
        float group = p.x + p.z * gridDim.x + p.y * gridDim.x * gridDim.z; // 021
    #elif defined(dAxisOrder_201)
        float group = p.y + p.x * gridDim.y + p.z * gridDim.y * gridDim.x; // 102
    #elif defined(dAxisOrder_210)
        float group = p.x + p.y * gridDim.x + p.z * gridDim.x * gridDim.y; // 012
    #endif
    return vec4(group > 16777215.5 ? vec3(1.0) : packIntToRGB(group), 1.0);
}

void main(void) {
    // get 1D index
    int vI = int(gl_FragCoord.x) + int(gl_FragCoord.y) * int(uSize);

    // ignore 1D indices outside of the grid
    if(vI >= int(uCount)) discard;

    ivec2 offset = ivec2(int(uSize) - 2, 0);

    int start = 0;
    ivec4 starts = ivec4(0);
    ivec4 ends = ivec4(0);
    int diff = 2;
    ivec4 m = ivec4(0);
    ivec2 position = ivec2(0);
    ivec4 vI4 = ivec4(vI);

    ivec2 relativePosition = ivec2(0);
    int end = 0;
    ivec2 pos1 = ivec2(0);
    ivec2 pos2 = ivec2(0);
    ivec2 pos3 = ivec2(0);
    ivec2 pos4 = ivec2(0);
    ivec3 vI3 = ivec3(vI);
    ivec3 mask = ivec3(0);

    // traverse the different levels of the pyramid
    for(int i = 1; i < 14; i++) {
        if(float(i) >= uLevels) break;

        offset.x -= diff;
        diff *= 2;
        relativePosition = position + offset;

        end = start + pyramidVoxel(vec2(relativePosition));
        pos1 = ivec2(relativePosition);
        starts.x = start;
        ends.x = end;
        pos2 = ivec2(relativePosition + ivec2(1, 0));
        starts.y = ends.x;
        ends.y = ends.x + pyramidVoxel(vec2(pos2));
        pos3 = relativePosition + ivec2(0, 1);
        starts.z = ends.y;
        ends.z = ends.y + pyramidVoxel(vec2(pos3));
        pos4 = relativePosition + ivec2(1, 1);
        starts.w = ends.z;
        mask = ivec3(greaterThanEqual(vI3, starts.rgb)) * ivec3(lessThan(vI3, ends.rgb));
        m = ivec4(mask, 1 - int(any(bvec3(mask))));

        relativePosition = m.x * pos1 + m.y * pos2 + m.z * pos3 + m.w * pos4;
        start = idot4(m, starts);
        position = 2 * (relativePosition - offset);
    }

    end = start + int(baseVoxel(vec2(position)).r * 255.0);
    pos1 = position;
    starts.x = start;
    ends.x = end;
    pos2 = position + ivec2(1, 0);
    starts.y = ends.x;
    ends.y = ends.x + int(baseVoxel(vec2(pos2)).r * 255.0);
    pos3 = position + ivec2(0, 1);
    starts.z = ends.y;
    ends.z = ends.y + int(baseVoxel(vec2(pos3)).r * 255.0);
    pos4 = position + ivec2(1, 1);
    starts.w = ends.z;
    mask = ivec3(greaterThanEqual(vI3, starts.rgb)) * ivec3(lessThan(vI3, ends.rgb));
    m = ivec4(mask, 1 - int(any(bvec3(mask))));
    position = m.x * pos1 + m.y * pos2 + m.z * pos3 + m.w * pos4;

    vec2 coord2d = (vec2(position) / uSize) / uScale;
    vec3 coord3d = floor(index3dFrom2d(coord2d) + 0.5);

    float edgeIndex = floor(baseVoxel(vec2(position)).a * 255.0 + 0.5);

    // current vertex for the up to 15 MC cases
    int currentVertex = vI - idot4(m, starts);

    // ensure winding-order is the same for negative and positive iso-levels
    if (uInvert) {
        int v = imod(currentVertex + 1, 3);
        if (v == 1) currentVertex += 2;
        else if (v == 0) currentVertex -= 2;
    }

    // get index into triIndices table
    int mcIndex = 16 * int(edgeIndex) + currentVertex;
    vec4 mcData = texture2D(tTriIndices, vec2(imod(mcIndex, 64), mcIndex / 64) / 64.);

    // bit mask to avoid conditionals (see comment below) for getting MC case corner
    vec4 m0 = vec4(floor(mcData.a * 255.0 + 0.5));

    // get edge value masks
    vec4 m1 = vec4(equal(m0, vec4(0., 1., 2., 3.)));
    vec4 m2 = vec4(equal(m0, vec4(4., 5., 6., 7.)));
    vec4 m3 = vec4(equal(m0, vec4(8., 9., 10., 11.)));

    // apply bit masks
    vec3 b0 = coord3d +
                m1.y * c1 +
                m1.z * c2 +
                m1.w * c3 +
                m2.x * c4 +
                m2.y * c5 +
                m2.z * c6 +
                m2.w * c7 +
                m3.y * c1 +
                m3.z * c2 +
                m3.w * c3;
    vec3 b1 = coord3d +
                m1.x * c1 +
                m1.y * c2 +
                m1.z * c3 +
                m2.x * c5 +
                m2.y * c6 +
                m2.z * c7 +
                m2.w * c4 +
                m3.x * c4 +
                m3.y * c5 +
                m3.z * c6 +
                m3.w * c7;

    // the conditionals that are avoided by above bitmasks
    // vec3 b0 = coord3d;
    // vec3 b1 = coord3d;
    // if (mcIndex == 0.0) {
    //     b1 += c1;
    // } else if (mcIndex == 1.0) {
    //     b0 += c1; b1 += c2;
    // } else if (mcIndex == 2.0) {
    //     b0 += c2; b1 += c3;
    // } else if (mcIndex == 3.0) {
    //     b0 += c3;
    // } else if (mcIndex == 4.0) {
    //     b0 += c4; b1 += c5;
    // } else if (mcIndex == 5.0) {
    //     b0 += c5; b1 += c6;
    // } else if (mcIndex == 6.0) {
    //     b0 += c6; b1 += c7;
    // } else if (mcIndex == 7.0) {
    //     b0 += c7; b1 += c4;
    // } else if (mcIndex == 8.0) {
    //     b1 += c4;
    // } else if (mcIndex == 9.0) {
    //     b0 += c1; b1 += c5;
    // } else if (mcIndex == 10.0) {
    //     b0 += c2; b1 += c6;
    // } else if (mcIndex == 11.0) {
    //     b0 += c3; b1 += c7;
    // }
    // b0 = floor(b0 + 0.5);
    // b1 = floor(b1 + 0.5);

    vec4 d0 = voxel(b0);
    vec4 d1 = voxel(b1);

    #ifdef dValueChannel_red
        float v0 = d0.r;
        float v1 = d1.r;
    #else
        float v0 = d0.a;
        float v1 = d1.a;
    #endif

    float t = (uIsoValue - v0) / (v0 - v1);
    gl_FragData[0].xyz = (uGridTransform * vec4(b0 + t * (b0 - b1), 1.0)).xyz;

    // group id
    #if __VERSION__ == 100 || defined(dConstantGroup)
        // webgl1 does not support 'flat' interpolation (i.e. no interpolation)
        // ensure a constant group id per triangle as needed
        #ifdef dPackedGroup
            gl_FragData[1] = vec4(voxel(coord3d).rgb, 1.0);
        #else
            gl_FragData[1] = getGroup(coord3d);
        #endif
    #else
        #ifdef dPackedGroup
            gl_FragData[1] = vec4(t < 0.5 ? d0.rgb : d1.rgb, 1.0);
        #else
            gl_FragData[1] = getGroup(t < 0.5 ? b0 : b1);
        #endif
    #endif

    // normals from gradients
    vec3 n0 = -normalize(vec3(
        voxelValuePadded(b0 - c1) - voxelValuePadded(b0 + c1),
        voxelValuePadded(b0 - c3) - voxelValuePadded(b0 + c3),
        voxelValuePadded(b0 - c4) - voxelValuePadded(b0 + c4)
    ));
    vec3 n1 = -normalize(vec3(
        voxelValuePadded(b1 - c1) - voxelValuePadded(b1 + c1),
        voxelValuePadded(b1 - c3) - voxelValuePadded(b1 + c3),
        voxelValuePadded(b1 - c4) - voxelValuePadded(b1 + c4)
    ));
    gl_FragData[2].xyz = -vec3(
        n0.x + t * (n0.x - n1.x),
        n0.y + t * (n0.y - n1.y),
        n0.z + t * (n0.z - n1.z)
    );

    // ensure normal-direction is the same for negative and positive iso-levels
    if (uInvert) {
        gl_FragData[2].xyz *= -1.0;
    }

    // apply normal matrix
    gl_FragData[2].xyz *= adjoint(uGridTransform);
}
`;

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-gl/shader/marching-cubes/active-voxels.frag.js
var activeVoxels_frag = `
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D tTriCount;
uniform sampler2D tVolumeData;

uniform float uIsoValue;
uniform vec3 uGridDim;
uniform vec3 uGridTexDim;
uniform vec2 uScale;

#include common

// cube corners (excluding origin)
const vec3 c1 = vec3(1., 0., 0.);
const vec3 c2 = vec3(1., 1., 0.);
const vec3 c3 = vec3(0., 1., 0.);
const vec3 c4 = vec3(0., 0., 1.);
const vec3 c5 = vec3(1., 0., 1.);
const vec3 c6 = vec3(1., 1., 1.);
const vec3 c7 = vec3(0., 1., 1.);

vec3 index3dFrom2d(vec2 coord) {
    vec2 gridTexPos = coord * uGridTexDim.xy;
    vec2 columnRow = ivec2Div(gridTexPos, uGridDim.xy);
    vec2 posXY = gridTexPos - columnRow * uGridDim.xy;
    float posZ = columnRow.y * intDiv(uGridTexDim.x, uGridDim.x) + columnRow.x;
    return vec3(posXY, posZ);
}

vec4 texture3dFrom2dNearest(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice = floor(pos.z * gridDim.z + 0.5); // round to nearest z-slice
    float column = intDiv(intMod(zSlice * gridDim.x, texDim.x), gridDim.x);
    float row = intDiv(zSlice * gridDim.x, texDim.x);
    vec2 coord = (vec2(column * gridDim.x, row * gridDim.y) + (pos.xy * gridDim.xy)) / (texDim / uScale);
    return texture2D(tex, coord);
}

float voxelValue(vec3 pos) {
    pos = min(max(vec3(0.0), pos), uGridDim - vec3(1.0));
    vec4 v = texture3dFrom2dNearest(tVolumeData, pos / uGridDim, uGridDim, uGridTexDim.xy);
    #ifdef dValueChannel_red
        return v.r;
    #else
        return v.a;
    #endif
}

void main(void) {
    vec2 uv = gl_FragCoord.xy / uGridTexDim.xy;
    vec3 posXYZ = index3dFrom2d(uv);

    // get MC case as the sum of corners that are below the given iso level
    float c = step(voxelValue(posXYZ), uIsoValue)
        + 2. * step(voxelValue(posXYZ + c1), uIsoValue)
        + 4. * step(voxelValue(posXYZ + c2), uIsoValue)
        + 8. * step(voxelValue(posXYZ + c3), uIsoValue)
        + 16. * step(voxelValue(posXYZ + c4), uIsoValue)
        + 32. * step(voxelValue(posXYZ + c5), uIsoValue)
        + 64. * step(voxelValue(posXYZ + c6), uIsoValue)
        + 128. * step(voxelValue(posXYZ + c7), uIsoValue);
    c *= step(c, 254.);

    // handle out of bounds positions
    posXYZ += 1.0;
    posXYZ.xy += 1.0; // pixel padding (usually ok even if the texture has no padding)
    if (posXYZ.x >= uGridDim.x || posXYZ.y >= uGridDim.y || posXYZ.z >= uGridDim.z)
        c = 0.0;

    // get total triangles to generate for calculated MC case from triCount texture
    float totalTrianglesToGenerate = texture2D(tTriCount, vec2(intMod(c, 16.), floor(c / 16.)) / 16.).a;
    gl_FragColor = vec4(vec3(totalTrianglesToGenerate * 3.0), c / 255.0);
}
`;

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-gl/compute/marching-cubes/active-voxels.js
var ActiveVoxelsSchema = {
  ...QuadSchema,
  tTriCount: TextureSpec("image-uint8", "alpha", "ubyte", "nearest"),
  tVolumeData: TextureSpec("texture", "rgba", "ubyte", "nearest"),
  dValueChannel: DefineSpec("string", ["red", "alpha"]),
  uIsoValue: UniformSpec("f"),
  uGridDim: UniformSpec("v3"),
  uGridTexDim: UniformSpec("v3"),
  uScale: UniformSpec("v2")
};
var ActiveVoxelsName = "active-voxels";
function valueChannel(ctx, volumeData) {
  return isWebGL2(ctx.gl) && volumeData.format === ctx.gl.RED ? "red" : "alpha";
}
function getActiveVoxelsRenderable(ctx, volumeData, gridDim, gridTexDim, isoValue, scale) {
  if (ctx.namedComputeRenderables[ActiveVoxelsName]) {
    const v = ctx.namedComputeRenderables[ActiveVoxelsName].values;
    ValueCell.update(v.uQuadScale, scale);
    ValueCell.update(v.tVolumeData, volumeData);
    ValueCell.update(v.dValueChannel, valueChannel(ctx, volumeData));
    ValueCell.updateIfChanged(v.uIsoValue, isoValue);
    ValueCell.update(v.uGridDim, gridDim);
    ValueCell.update(v.uGridTexDim, gridTexDim);
    ValueCell.update(v.uScale, scale);
    ctx.namedComputeRenderables[ActiveVoxelsName].update();
  } else {
    ctx.namedComputeRenderables[ActiveVoxelsName] = createActiveVoxelsRenderable(ctx, volumeData, gridDim, gridTexDim, isoValue, scale);
  }
  return ctx.namedComputeRenderables[ActiveVoxelsName];
}
function createActiveVoxelsRenderable(ctx, volumeData, gridDim, gridTexDim, isoValue, scale) {
  const values = {
    ...QuadValues,
    tTriCount: ValueCell.create(getTriCount()),
    uQuadScale: ValueCell.create(scale),
    tVolumeData: ValueCell.create(volumeData),
    dValueChannel: ValueCell.create(valueChannel(ctx, volumeData)),
    uIsoValue: ValueCell.create(isoValue),
    uGridDim: ValueCell.create(gridDim),
    uGridTexDim: ValueCell.create(gridTexDim),
    uScale: ValueCell.create(scale)
  };
  const schema = { ...ActiveVoxelsSchema };
  const shaderCode = ShaderCode("active-voxels", quad_vert, activeVoxels_frag);
  const renderItem = createComputeRenderItem(ctx, "triangles", shaderCode, schema, values);
  return createComputeRenderable(renderItem, values);
}
function setRenderingDefaults3(ctx) {
  const { gl, state } = ctx;
  state.disable(gl.CULL_FACE);
  state.disable(gl.BLEND);
  state.disable(gl.DEPTH_TEST);
  state.enable(gl.SCISSOR_TEST);
  state.depthMask(false);
  state.colorMask(true, true, true, true);
  state.clearColor(0, 0, 0, 0);
}
function calcActiveVoxels(ctx, volumeData, gridDim, gridTexDim, isoValue, gridScale) {
  if (isTimingMode)
    ctx.timer.mark("calcActiveVoxels");
  const { gl, state, resources } = ctx;
  const width = volumeData.getWidth();
  const height = volumeData.getHeight();
  if (!ctx.namedFramebuffers[ActiveVoxelsName]) {
    ctx.namedFramebuffers[ActiveVoxelsName] = resources.framebuffer();
  }
  const framebuffer = ctx.namedFramebuffers[ActiveVoxelsName];
  framebuffer.bind();
  if (!ctx.namedTextures[ActiveVoxelsName]) {
    ctx.namedTextures[ActiveVoxelsName] = resources.texture("image-uint8", "rgba", "ubyte", "nearest");
  }
  const activeVoxelsTex = ctx.namedTextures[ActiveVoxelsName];
  activeVoxelsTex.define(width, height);
  const renderable = getActiveVoxelsRenderable(ctx, volumeData, gridDim, gridTexDim, isoValue, gridScale);
  ctx.state.currentRenderItemId = -1;
  activeVoxelsTex.attachFramebuffer(framebuffer, 0);
  setRenderingDefaults3(ctx);
  state.viewport(0, 0, width, height);
  state.scissor(0, 0, width, height);
  gl.clear(gl.COLOR_BUFFER_BIT);
  state.scissor(0, 0, gridTexDim[0], gridTexDim[1]);
  renderable.render();
  gl.finish();
  if (isTimingMode)
    ctx.timer.markEnd("calcActiveVoxels");
  return activeVoxelsTex;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-gl/compute/marching-cubes/isosurface.js
var IsosurfaceSchema = {
  ...QuadSchema,
  tTriIndices: TextureSpec("image-uint8", "alpha", "ubyte", "nearest"),
  tActiveVoxelsPyramid: TextureSpec("texture", "rgba", "float", "nearest"),
  tActiveVoxelsBase: TextureSpec("texture", "rgba", "float", "nearest"),
  tVolumeData: TextureSpec("texture", "rgba", "ubyte", "nearest"),
  dValueChannel: DefineSpec("string", ["red", "alpha"]),
  uIsoValue: UniformSpec("f"),
  uSize: UniformSpec("f"),
  uLevels: UniformSpec("f"),
  uCount: UniformSpec("f"),
  uInvert: UniformSpec("b"),
  uGridDim: UniformSpec("v3"),
  uGridTexDim: UniformSpec("v3"),
  uGridTransform: UniformSpec("m4"),
  uScale: UniformSpec("v2"),
  dPackedGroup: DefineSpec("boolean"),
  dAxisOrder: DefineSpec("string", ["012", "021", "102", "120", "201", "210"]),
  dConstantGroup: DefineSpec("boolean")
};
var IsosurfaceName = "isosurface";
function valueChannel2(ctx, volumeData) {
  return isWebGL2(ctx.gl) && volumeData.format === ctx.gl.RED ? "red" : "alpha";
}
function getIsosurfaceRenderable(ctx, activeVoxelsPyramid, activeVoxelsBase, volumeData, gridDim, gridTexDim, transform, isoValue, levels, scale, count, invert, packedGroup, axisOrder, constantGroup) {
  if (ctx.namedComputeRenderables[IsosurfaceName]) {
    const v = ctx.namedComputeRenderables[IsosurfaceName].values;
    ValueCell.update(v.tActiveVoxelsPyramid, activeVoxelsPyramid);
    ValueCell.update(v.tActiveVoxelsBase, activeVoxelsBase);
    ValueCell.update(v.tVolumeData, volumeData);
    ValueCell.update(v.dValueChannel, valueChannel2(ctx, volumeData));
    ValueCell.updateIfChanged(v.uIsoValue, isoValue);
    ValueCell.updateIfChanged(v.uSize, Math.pow(2, levels));
    ValueCell.updateIfChanged(v.uLevels, levels);
    ValueCell.updateIfChanged(v.uCount, count);
    ValueCell.updateIfChanged(v.uInvert, invert);
    ValueCell.update(v.uGridDim, gridDim);
    ValueCell.update(v.uGridTexDim, gridTexDim);
    ValueCell.update(v.uGridTransform, transform);
    ValueCell.update(v.uScale, scale);
    ValueCell.updateIfChanged(v.dPackedGroup, packedGroup);
    ValueCell.updateIfChanged(v.dAxisOrder, axisOrder.join(""));
    ValueCell.updateIfChanged(v.dConstantGroup, constantGroup);
    ctx.namedComputeRenderables[IsosurfaceName].update();
  } else {
    ctx.namedComputeRenderables[IsosurfaceName] = createIsosurfaceRenderable(ctx, activeVoxelsPyramid, activeVoxelsBase, volumeData, gridDim, gridTexDim, transform, isoValue, levels, scale, count, invert, packedGroup, axisOrder, constantGroup);
  }
  return ctx.namedComputeRenderables[IsosurfaceName];
}
function createIsosurfaceRenderable(ctx, activeVoxelsPyramid, activeVoxelsBase, volumeData, gridDim, gridTexDim, transform, isoValue, levels, scale, count, invert, packedGroup, axisOrder, constantGroup) {
  const values = {
    ...QuadValues,
    tTriIndices: ValueCell.create(getTriIndices()),
    tActiveVoxelsPyramid: ValueCell.create(activeVoxelsPyramid),
    tActiveVoxelsBase: ValueCell.create(activeVoxelsBase),
    tVolumeData: ValueCell.create(volumeData),
    dValueChannel: ValueCell.create(valueChannel2(ctx, volumeData)),
    uIsoValue: ValueCell.create(isoValue),
    uSize: ValueCell.create(Math.pow(2, levels)),
    uLevels: ValueCell.create(levels),
    uCount: ValueCell.create(count),
    uInvert: ValueCell.create(invert),
    uGridDim: ValueCell.create(gridDim),
    uGridTexDim: ValueCell.create(gridTexDim),
    uGridTransform: ValueCell.create(transform),
    uScale: ValueCell.create(scale),
    dPackedGroup: ValueCell.create(packedGroup),
    dAxisOrder: ValueCell.create(axisOrder.join("")),
    dConstantGroup: ValueCell.create(constantGroup)
  };
  const schema = { ...IsosurfaceSchema };
  const shaderCode = ShaderCode("isosurface", quad_vert, isosurface_frag, { drawBuffers: "required" });
  const renderItem = createComputeRenderItem(ctx, "triangles", shaderCode, schema, values);
  return createComputeRenderable(renderItem, values);
}
function setRenderingDefaults4(ctx) {
  const { gl, state } = ctx;
  state.disable(gl.CULL_FACE);
  state.disable(gl.BLEND);
  state.disable(gl.DEPTH_TEST);
  state.disable(gl.SCISSOR_TEST);
  state.depthMask(false);
  state.colorMask(true, true, true, true);
  state.clearColor(0, 0, 0, 0);
}
function createIsosurfaceBuffers(ctx, activeVoxelsBase, volumeData, histogramPyramid, gridDim, gridTexDim, transform, isoValue, invert, packedGroup, axisOrder, constantGroup, vertexTexture, groupTexture, normalTexture) {
  const { drawBuffers } = ctx.extensions;
  if (!drawBuffers)
    throw new Error("need WebGL draw buffers");
  if (isTimingMode)
    ctx.timer.mark("createIsosurfaceBuffers");
  const { gl, state, resources, extensions } = ctx;
  const { pyramidTex, height, levels, scale, count } = histogramPyramid;
  const width = pyramidTex.getWidth();
  if (!ctx.namedFramebuffers[IsosurfaceName]) {
    ctx.namedFramebuffers[IsosurfaceName] = resources.framebuffer();
  }
  const framebuffer = ctx.namedFramebuffers[IsosurfaceName];
  if (isWebGL2(gl)) {
    if (!vertexTexture) {
      vertexTexture = resources.texture("image-float32", "rgba", "float", "nearest");
    }
    if (!groupTexture) {
      groupTexture = resources.texture("image-uint8", "rgba", "ubyte", "nearest");
    }
    if (!normalTexture) {
      normalTexture = extensions.colorBufferHalfFloat && extensions.textureHalfFloat ? resources.texture("image-float16", "rgba", "fp16", "nearest") : resources.texture("image-float32", "rgba", "float", "nearest");
    }
  } else {
    if (!vertexTexture) {
      vertexTexture = resources.texture("image-float32", "rgba", "float", "nearest");
    }
    if (!groupTexture) {
      groupTexture = resources.texture("image-float32", "rgba", "float", "nearest");
    }
    if (!normalTexture) {
      normalTexture = resources.texture("image-float32", "rgba", "float", "nearest");
    }
  }
  vertexTexture.define(width, height);
  groupTexture.define(width, height);
  normalTexture.define(width, height);
  vertexTexture.attachFramebuffer(framebuffer, 0);
  groupTexture.attachFramebuffer(framebuffer, 1);
  normalTexture.attachFramebuffer(framebuffer, 2);
  const renderable = getIsosurfaceRenderable(ctx, pyramidTex, activeVoxelsBase, volumeData, gridDim, gridTexDim, transform, isoValue, levels, scale, count, invert, packedGroup, axisOrder, constantGroup);
  ctx.state.currentRenderItemId = -1;
  framebuffer.bind();
  drawBuffers.drawBuffers([
    drawBuffers.COLOR_ATTACHMENT0,
    drawBuffers.COLOR_ATTACHMENT1,
    drawBuffers.COLOR_ATTACHMENT2
  ]);
  setRenderingDefaults4(ctx);
  state.viewport(0, 0, width, height);
  gl.clear(gl.COLOR_BUFFER_BIT);
  renderable.render();
  gl.finish();
  if (isTimingMode)
    ctx.timer.markEnd("createIsosurfaceBuffers");
  return { vertexTexture, groupTexture, normalTexture, vertexCount: count };
}
function extractIsosurface(ctx, volumeData, gridDim, gridTexDim, gridTexScale, transform, isoValue, invert, packedGroup, axisOrder, constantGroup, vertexTexture, groupTexture, normalTexture) {
  if (isTimingMode)
    ctx.timer.mark("extractIsosurface");
  const activeVoxelsTex = calcActiveVoxels(ctx, volumeData, gridDim, gridTexDim, isoValue, gridTexScale);
  const compacted = createHistogramPyramid(ctx, activeVoxelsTex, gridTexScale, gridTexDim);
  const gv = createIsosurfaceBuffers(ctx, activeVoxelsTex, volumeData, compacted, gridDim, gridTexDim, transform, isoValue, invert, packedGroup, axisOrder, constantGroup, vertexTexture, groupTexture, normalTexture);
  if (isTimingMode)
    ctx.timer.markEnd("extractIsosurface");
  return gv;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-repr/volume/isosurface.js
var VolumeIsosurfaceParams = {
  isoValue: Volume.IsoValueParam
};
var VolumeIsosurfaceTextureParams = {
  isoValue: Volume.IsoValueParam,
  tryUseGpu: ParamDefinition.Boolean(true),
  gpuDataType: ParamDefinition.Select("byte", ParamDefinition.arrayToOptions(["byte", "float", "halfFloat"]), { hideIf: (p) => !p.tryUseGpu })
};
function gpuSupport(webgl) {
  return webgl.extensions.colorBufferFloat && webgl.extensions.textureFloat && webgl.extensions.drawBuffers;
}
var Padding = 1;
function suitableForGpu(volume, webgl) {
  if (volume.grid.cells.data.length < Math.pow(10, 3))
    return false;
  const gridDim = volume.grid.cells.space.dimensions;
  const { powerOfTwoSize } = getVolumeTexture2dLayout(gridDim, Padding);
  return powerOfTwoSize <= webgl.maxTextureSize / 2;
}
function IsosurfaceVisual(materialId, volume, key, props, webgl) {
  if (props.tryUseGpu && webgl && gpuSupport(webgl) && suitableForGpu(volume, webgl)) {
    return IsosurfaceTextureMeshVisual(materialId);
  }
  return IsosurfaceMeshVisual(materialId);
}
function getLoci(volume, props) {
  return Volume.Isosurface.Loci(volume, props.isoValue);
}
function getIsosurfaceLoci(pickingId, volume, key, props, id) {
  const { objectId, groupId } = pickingId;
  if (id === objectId) {
    const granularity = Volume.PickingGranularity.get(volume);
    if (granularity === "volume") {
      return Volume.Loci(volume);
    } else if (granularity === "object") {
      return Volume.Isosurface.Loci(volume, props.isoValue);
    } else {
      return Volume.Cell.Loci(volume, Interval.ofSingleton(groupId));
    }
  }
  return EmptyLoci;
}
function eachIsosurface(loci, volume, key, props, apply) {
  return eachVolumeLoci(loci, volume, { isoValue: props.isoValue }, apply);
}
async function createVolumeIsosurfaceMesh(ctx, volume, key, theme, props, mesh) {
  ctx.runtime.update({ message: "Marching cubes..." });
  const ids = fillSerial(new Int32Array(volume.grid.cells.data.length));
  const surface = await computeMarchingCubesMesh({
    isoLevel: Volume.IsoValue.toAbsolute(props.isoValue, volume.grid.stats).absoluteValue,
    scalarField: volume.grid.cells,
    idField: Tensor.create(volume.grid.cells.space, Tensor.Data1(ids))
  }, mesh).runAsChild(ctx.runtime);
  const transform = Grid.getGridToCartesianTransform(volume.grid);
  Mesh.transform(surface, transform);
  if (ctx.webgl && !ctx.webgl.isWebGL2) {
    Mesh.uniformTriangleGroup(surface, false);
    ValueCell.updateIfChanged(surface.varyingGroup, false);
  } else {
    ValueCell.updateIfChanged(surface.varyingGroup, true);
  }
  surface.setBoundingSphere(Volume.Isosurface.getBoundingSphere(volume, props.isoValue));
  return surface;
}
var IsosurfaceMeshParams = {
  ...Mesh.Params,
  ...TextureMesh.Params,
  ...VolumeIsosurfaceParams,
  ...VolumeIsosurfaceTextureParams,
  quality: { ...Mesh.Params.quality, isEssential: false }
};
function IsosurfaceMeshVisual(materialId) {
  return VolumeVisual({
    defaultProps: ParamDefinition.getDefaultValues(IsosurfaceMeshParams),
    createGeometry: createVolumeIsosurfaceMesh,
    createLocationIterator: (volume) => LocationIterator(volume.grid.cells.data.length, 1, 1, () => NullLocation),
    getLoci: getIsosurfaceLoci,
    eachLocation: eachIsosurface,
    setUpdateState: (state, volume, newProps, currentProps) => {
      if (!Volume.IsoValue.areSame(newProps.isoValue, currentProps.isoValue, volume.grid.stats))
        state.createGeometry = true;
    },
    geometryUtils: Mesh.Utils,
    mustRecreate: (volumekey, props, webgl) => {
      return props.tryUseGpu && !!webgl && suitableForGpu(volumekey.volume, webgl);
    }
  }, materialId);
}
var VolumeIsosurfaceTexture;
(function(VolumeIsosurfaceTexture2) {
  const name = "volume-isosurface-texture";
  VolumeIsosurfaceTexture2.descriptor = CustomPropertyDescriptor({ name });
  function clear(volume) {
    delete volume._propertyData[name];
  }
  VolumeIsosurfaceTexture2.clear = clear;
  function get(volume, webgl, props) {
    var _a;
    const transform = Grid.getGridToCartesianTransform(volume.grid);
    const gridDimension = Vec3.clone(volume.grid.cells.space.dimensions);
    const { width, height, powerOfTwoSize: texDim } = getVolumeTexture2dLayout(gridDimension, Padding);
    const gridTexDim = Vec3.create(width, height, 0);
    const gridTexScale = Vec2.create(width / texDim, height / texDim);
    if (texDim > webgl.maxTextureSize / 2) {
      throw new Error("volume too large for gpu isosurface extraction");
    }
    const dataType = props.gpuDataType === "halfFloat" && !webgl.extensions.textureHalfFloat ? "float" : props.gpuDataType;
    if (((_a = volume._propertyData[name]) === null || _a === void 0 ? void 0 : _a.dataType) !== dataType) {
      const texture = dataType === "byte" ? webgl.resources.texture("image-uint8", "alpha", "ubyte", "linear") : dataType === "halfFloat" ? webgl.resources.texture("image-float16", "alpha", "fp16", "linear") : webgl.resources.texture("image-float32", "alpha", "float", "linear");
      volume._propertyData[name] = { texture, dataType };
      texture.define(texDim, texDim);
      texture.load(createVolumeTexture2d(volume, "data", Padding, dataType), true);
      volume.customProperties.add(VolumeIsosurfaceTexture2.descriptor);
      volume.customProperties.assets(VolumeIsosurfaceTexture2.descriptor, [{ dispose: () => texture.destroy() }]);
    }
    gridDimension[0] += Padding;
    gridDimension[1] += Padding;
    return {
      texture: volume._propertyData[name].texture,
      transform,
      gridDimension,
      gridTexDim,
      gridTexScale
    };
  }
  VolumeIsosurfaceTexture2.get = get;
})(VolumeIsosurfaceTexture || (VolumeIsosurfaceTexture = {}));
function createVolumeIsosurfaceTextureMesh(ctx, volume, key, theme, props, textureMesh) {
  const { webgl } = ctx;
  if (!webgl)
    throw new Error("webgl context required to create volume isosurface texture-mesh");
  if (volume.grid.cells.data.length <= 1) {
    return TextureMesh.createEmpty(textureMesh);
  }
  const { max, min } = volume.grid.stats;
  const diff = max - min;
  const value = Volume.IsoValue.toAbsolute(props.isoValue, volume.grid.stats).absoluteValue;
  const isoLevel = (value - min) / diff;
  const axisOrder = volume.grid.cells.space.axisOrderSlowToFast;
  const groupCount = volume.grid.cells.data.length;
  const boundingSphere = Volume.getBoundingSphere(volume);
  const create = (textureMesh2) => {
    const { texture, gridDimension, gridTexDim, gridTexScale, transform } = VolumeIsosurfaceTexture.get(volume, webgl, props);
    const buffer = textureMesh2 === null || textureMesh2 === void 0 ? void 0 : textureMesh2.doubleBuffer.get();
    const gv = extractIsosurface(webgl, texture, gridDimension, gridTexDim, gridTexScale, transform, isoLevel, value < 0, false, axisOrder, true, buffer === null || buffer === void 0 ? void 0 : buffer.vertex, buffer === null || buffer === void 0 ? void 0 : buffer.group, buffer === null || buffer === void 0 ? void 0 : buffer.normal);
    return TextureMesh.create(gv.vertexCount, groupCount, gv.vertexTexture, gv.groupTexture, gv.normalTexture, boundingSphere, textureMesh2);
  };
  const surface = create(textureMesh);
  surface.meta.webgl = webgl;
  surface.meta.reset = () => {
    VolumeIsosurfaceTexture.clear(volume);
    create(surface);
  };
  return surface;
}
function IsosurfaceTextureMeshVisual(materialId) {
  return VolumeVisual({
    defaultProps: ParamDefinition.getDefaultValues(IsosurfaceMeshParams),
    createGeometry: createVolumeIsosurfaceTextureMesh,
    createLocationIterator: (volume) => LocationIterator(volume.grid.cells.data.length, 1, 1, () => NullLocation),
    getLoci: getIsosurfaceLoci,
    eachLocation: eachIsosurface,
    setUpdateState: (state, volume, newProps, currentProps) => {
      if (!Volume.IsoValue.areSame(newProps.isoValue, currentProps.isoValue, volume.grid.stats))
        state.createGeometry = true;
      if (newProps.gpuDataType !== currentProps.gpuDataType)
        state.createGeometry = true;
    },
    geometryUtils: TextureMesh.Utils,
    mustRecreate: (volumeKey, props, webgl) => {
      return !props.tryUseGpu || !webgl || !suitableForGpu(volumeKey.volume, webgl);
    },
    dispose: (geometry) => {
      geometry.vertexTexture.ref.value.destroy();
      geometry.groupTexture.ref.value.destroy();
      geometry.normalTexture.ref.value.destroy();
      geometry.doubleBuffer.destroy();
    }
  }, materialId);
}
async function createVolumeIsosurfaceWireframe(ctx, volume, key, theme, props, lines) {
  ctx.runtime.update({ message: "Marching cubes..." });
  const ids = fillSerial(new Int32Array(volume.grid.cells.data.length));
  const wireframe = await computeMarchingCubesLines({
    isoLevel: Volume.IsoValue.toAbsolute(props.isoValue, volume.grid.stats).absoluteValue,
    scalarField: volume.grid.cells,
    idField: Tensor.create(volume.grid.cells.space, Tensor.Data1(ids))
  }, lines).runAsChild(ctx.runtime);
  const transform = Grid.getGridToCartesianTransform(volume.grid);
  Lines.transform(wireframe, transform);
  wireframe.setBoundingSphere(Volume.Isosurface.getBoundingSphere(volume, props.isoValue));
  return wireframe;
}
var IsosurfaceWireframeParams = {
  ...Lines.Params,
  ...VolumeIsosurfaceParams,
  quality: { ...Lines.Params.quality, isEssential: false },
  sizeFactor: ParamDefinition.Numeric(3, { min: 0, max: 10, step: 0.1 })
};
function IsosurfaceWireframeVisual(materialId) {
  return VolumeVisual({
    defaultProps: ParamDefinition.getDefaultValues(IsosurfaceWireframeParams),
    createGeometry: createVolumeIsosurfaceWireframe,
    createLocationIterator: (volume) => LocationIterator(volume.grid.cells.data.length, 1, 1, () => NullLocation),
    getLoci: getIsosurfaceLoci,
    eachLocation: eachIsosurface,
    setUpdateState: (state, volume, newProps, currentProps) => {
      if (!Volume.IsoValue.areSame(newProps.isoValue, currentProps.isoValue, volume.grid.stats))
        state.createGeometry = true;
    },
    geometryUtils: Lines.Utils
  }, materialId);
}
var IsosurfaceVisuals = {
  "solid": (ctx, getParams) => VolumeRepresentation("Isosurface mesh", ctx, getParams, IsosurfaceVisual, getLoci),
  "wireframe": (ctx, getParams) => VolumeRepresentation("Isosurface wireframe", ctx, getParams, IsosurfaceWireframeVisual, getLoci)
};
var IsosurfaceParams = {
  ...IsosurfaceMeshParams,
  ...IsosurfaceWireframeParams,
  visuals: ParamDefinition.MultiSelect(["solid"], ParamDefinition.objectToOptions(IsosurfaceVisuals)),
  bumpFrequency: ParamDefinition.Numeric(1, { min: 0, max: 10, step: 0.1 }, BaseGeometry.ShadingCategory)
};
function getIsosurfaceParams(ctx, volume) {
  const p = ParamDefinition.clone(IsosurfaceParams);
  p.isoValue = Volume.createIsoValueParam(Volume.IsoValue.relative(2), volume.grid.stats);
  return p;
}
function IsosurfaceRepresentation(ctx, getParams) {
  return Representation.createMulti("Isosurface", ctx, getParams, Representation.StateBuilder, IsosurfaceVisuals);
}
var IsosurfaceRepresentationProvider = VolumeRepresentationProvider({
  name: "isosurface",
  label: "Isosurface",
  description: "Displays a triangulated isosurface of volumetric data.",
  factory: IsosurfaceRepresentation,
  getParams: getIsosurfaceParams,
  defaultValues: ParamDefinition.getDefaultValues(IsosurfaceParams),
  defaultColorTheme: { name: "uniform" },
  defaultSizeTheme: { name: "uniform" },
  isApplicable: (volume) => !Volume.isEmpty(volume) && !Volume.Segmentation.get(volume)
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-repr/volume/slice.js
var SliceParams = {
  ...Image.Params,
  quality: { ...Image.Params.quality, isEssential: false },
  dimension: ParamDefinition.MappedStatic("x", {
    x: ParamDefinition.Numeric(0, { min: 0, max: 0, step: 1 }, { immediateUpdate: true }),
    y: ParamDefinition.Numeric(0, { min: 0, max: 0, step: 1 }, { immediateUpdate: true }),
    z: ParamDefinition.Numeric(0, { min: 0, max: 0, step: 1 }, { immediateUpdate: true })
  }, { isEssential: true, hideIf: (p) => p.mode !== "grid", description: "Slice position in grid coordinates." }),
  isoValue: Volume.IsoValueParam,
  mode: ParamDefinition.Select("grid", ParamDefinition.arrayToOptions(["grid", "frame", "plane"]), { description: "Grid: slice through the volume along the grid axes in integer steps. Frame: slice through the volume along arbitrary axes in any step size. Plane: an arbitrary plane defined by point and normal." }),
  offset: ParamDefinition.Numeric(0, { min: -1, max: 1, step: 0.01 }, { isEssential: true, immediateUpdate: true, hideIf: (p) => p.mode !== "frame", description: "Relative offset from center." }),
  axis: ParamDefinition.Select("a", ParamDefinition.arrayToOptions(["a", "b", "c"]), { isEssential: true, hideIf: (p) => p.mode !== "frame", description: "Axis of the frame." }),
  rotation: ParamDefinition.Group({
    axis: ParamDefinition.Vec3(Vec3.create(1, 0, 0), {}, { description: "Axis of rotation" }),
    angle: ParamDefinition.Numeric(0, { min: -180, max: 180, step: 1 }, { immediateUpdate: true, description: "Axis rotation angle in Degrees" })
  }, { isExpanded: true, hideIf: (p) => p.mode !== "frame" }),
  plane: ParamDefinition.Group({
    point: ParamDefinition.Vec3(Vec3.create(0, 0, 0), {}, { description: "Plane point" }),
    normal: ParamDefinition.Vec3(Vec3.create(1, 0, 0), {}, { description: "Plane normal" })
  }, { isExpanded: true, hideIf: (p) => p.mode !== "plane" })
};
function getSliceParams(ctx, volume) {
  const p = ParamDefinition.clone(SliceParams);
  const dim = volume.grid.cells.space.dimensions;
  p.dimension = ParamDefinition.MappedStatic("x", {
    x: ParamDefinition.Numeric(0, { min: 0, max: dim[0] - 1, step: 1 }, { immediateUpdate: true }),
    y: ParamDefinition.Numeric(0, { min: 0, max: dim[1] - 1, step: 1 }, { immediateUpdate: true }),
    z: ParamDefinition.Numeric(0, { min: 0, max: dim[2] - 1, step: 1 }, { immediateUpdate: true })
  }, { isEssential: true, hideIf: (p2) => p2.mode !== "grid" });
  p.isoValue = Volume.createIsoValueParam(Volume.IsoValue.absolute(volume.grid.stats.min), volume.grid.stats);
  return p;
}
async function createImage(ctx, volume, key, theme, props, image) {
  switch (props.mode) {
    case "frame":
      return createFrameImage(ctx, volume, key, theme, props, image);
    case "grid":
      return createGridImage(ctx, volume, key, theme, props, image);
    case "plane":
      return createPlaneImage(ctx, volume, key, theme, props, image);
    default:
      assertUnreachable(props.mode);
  }
}
function getFrame(volume, props) {
  const { axis, rotation, mode } = props;
  const gridToCartn = Grid.getGridToCartesianTransform(volume.grid);
  const cartnToGrid = Mat4.invert(Mat4(), gridToCartn);
  const [nx, ny, nz] = volume.grid.cells.space.dimensions;
  const a = nx - 1;
  const b = ny - 1;
  const c = nz - 1;
  const dirA = Vec3.create(a, 0, 0);
  const dirB = Vec3.create(0, b, 0);
  const dirC = Vec3.create(0, 0, c);
  const resolution = Math.max(a, b, c) / Math.max(nx, ny, nz);
  const min = Vec3.create(0, 0, 0);
  const max = Vec3.create(a, b, c);
  Vec3.transformMat4(min, min, gridToCartn);
  Vec3.transformMat4(max, max, gridToCartn);
  const center = Vec3.center(Vec3(), max, min);
  const size = Vec3();
  const major = Vec3();
  const minor = Vec3();
  const normal = Vec3();
  if (axis === "c") {
    Vec3.set(size, a, b, c);
    Vec3.copy(major, dirA);
    Vec3.copy(minor, dirB);
    Vec3.copy(normal, dirC);
  } else if (axis === "b") {
    Vec3.set(size, a, c, b);
    Vec3.copy(major, dirA);
    Vec3.copy(normal, dirB);
    Vec3.copy(minor, dirC);
  } else {
    Vec3.set(size, b, c, a);
    Vec3.copy(normal, dirA);
    Vec3.copy(major, dirB);
    Vec3.copy(minor, dirC);
  }
  if (rotation.angle !== 0) {
    const ra = Vec3();
    Vec3.scaleAndAdd(ra, ra, dirA, rotation.axis[0]);
    Vec3.scaleAndAdd(ra, ra, dirB, rotation.axis[1]);
    Vec3.scaleAndAdd(ra, ra, dirC, rotation.axis[2]);
    Vec3.normalize(ra, ra);
    const rm = Mat4.fromRotation(Mat4(), degToRad(rotation.angle), ra);
    Vec3.transformDirection(major, major, rm);
    Vec3.transformDirection(minor, minor, rm);
    Vec3.transformDirection(normal, normal, rm);
  }
  if (mode === "frame") {
    const r = Vec3.distance(min, max);
    const s = Vec3.distance(min, max) * Math.SQRT2;
    Vec3.set(size, s, s, r);
  }
  Vec3.transformDirection(major, major, gridToCartn);
  Vec3.transformDirection(minor, minor, gridToCartn);
  Vec3.transformDirection(normal, normal, gridToCartn);
  const trim = {
    type: 3,
    center: Vec3.create(a / 2, b / 2, c / 2),
    scale: Vec3.create(a, b, c),
    rotation: Quat.identity(),
    transform: cartnToGrid
  };
  return { size, major, minor, normal, center, trim, resolution };
}
function getSampledImage(volume, theme, info, isoValue, trim, image) {
  const { m, width, height } = info;
  const { cells: { space }, stats } = volume.grid;
  const { min, max } = stats;
  const isUniform = theme.color.granularity === "uniform";
  const color = "color" in theme.color && theme.color.color ? theme.color.color : () => Color(16777215);
  const v = Vec3();
  const gridToCartn = Grid.getGridToCartesianTransform(volume.grid);
  const cartnToGrid = Mat4.invert(Mat4(), gridToCartn);
  const [mx, my, mz] = space.dimensions;
  const imageArray = new Uint8Array(width * height * 4);
  const groupArray = new Uint8Array(width * height * 4);
  const valueArray = new Float32Array(width * height);
  const gridCoords = Vec3();
  const pl = PositionLocation(Vec3(), Vec3());
  const getTrilinearlyInterpolated = Grid.makeGetTrilinearlyInterpolated(volume.grid, "none");
  let i = 0;
  for (let ih = 0; ih < height; ++ih) {
    for (let iw = 0; iw < width; ++iw) {
      const y = clamp(iw + 0.5, 0, width - 1) / width - 0.5;
      const x = clamp(ih + 0.5, 0, height - 1) / height - 0.5;
      Vec3.set(v, x, -y, 0);
      Vec3.transformMat4(v, v, m);
      Vec3.copy(gridCoords, v);
      Vec3.transformMat4(gridCoords, gridCoords, cartnToGrid);
      const ix = Math.trunc(gridCoords[0]);
      const iy = Math.trunc(gridCoords[1]);
      const iz = Math.trunc(gridCoords[2]);
      Vec3.copy(pl.position, v);
      const c = color(pl, false);
      Color.toArray(c, imageArray, i);
      const val = normalize(getTrilinearlyInterpolated(v), min, max);
      if (isUniform) {
        imageArray[i] *= val;
        imageArray[i + 1] *= val;
        imageArray[i + 2] *= val;
      }
      valueArray[i / 4] = val;
      if (ix >= 0 && ix < mx && iy >= 0 && iy < my && iz >= 0 && iz < mz) {
        packIntToRGBArray(space.dataOffset(ix, iy, iz), groupArray, i);
      }
      i += 4;
    }
  }
  const imageTexture = { width, height, array: imageArray, flipY: true };
  const groupTexture = { width, height, array: groupArray, flipY: true };
  const valueTexture = { width, height, array: valueArray, flipY: true };
  const corners = new Float32Array([
    -0.5,
    0.5,
    0,
    0.5,
    0.5,
    0,
    -0.5,
    -0.5,
    0,
    0.5,
    -0.5,
    0
  ]);
  transformPositionArray(m, corners, 0, 4);
  const isoLevel = clamp(normalize(Volume.IsoValue.toAbsolute(isoValue, stats).absoluteValue, min, max), 0, 1);
  const im = Image.create(imageTexture, corners, groupTexture, valueTexture, trim, isoLevel, image);
  im.setBoundingSphere(Volume.getBoundingSphere(volume));
  return im;
}
async function createFrameImage(ctx, volume, key, theme, props, image) {
  const { offset, isoValue } = props;
  const { size, major, minor, normal, center, trim, resolution } = getFrame(volume, props);
  const scaleFactor = 1 / resolution;
  const scale = Vec3.create(size[0], size[1], 1);
  const offsetDir = Vec3.setMagnitude(Vec3(), normal, size[2] / 2);
  const width = Math.floor(size[1] * scaleFactor);
  const height = Math.floor(size[0] * scaleFactor);
  const m = Mat4.identity();
  const v = Vec3();
  const anchor = Vec3();
  Vec3.add(v, center, major);
  Mat4.targetTo(m, center, v, minor);
  Vec3.scaleAndAdd(anchor, center, offsetDir, offset);
  Mat4.setTranslation(m, anchor);
  Mat4.mul(m, m, Mat4.rotY90);
  Mat4.scale(m, m, scale);
  const info = { m, width, height };
  return getSampledImage(volume, theme, info, isoValue, trim, image);
}
async function createPlaneImage(ctx, volume, key, theme, props, image) {
  const { plane: { point, normal }, isoValue } = props;
  const m = Mat4.fromPlane(Mat4(), normal, point);
  const gridToCartn = Grid.getGridToCartesianTransform(volume.grid);
  const cartnToGrid = Mat4.invert(Mat4(), gridToCartn);
  const [mx, my, mz] = volume.grid.cells.space.dimensions;
  const a = mx - 1;
  const b = my - 1;
  const c = mz - 1;
  const resolution = Math.max(a, b, c) / Math.max(mx, my, mz);
  const scaleFactor = 1 / resolution;
  const s = Vec3.distance(Vec3.create(0, 0, 0), Vec3.create(a, b, c)) * Math.SQRT2;
  const size = Vec3.set(Vec3(), s, s, s);
  Mat4.mul(m, m, Mat4.rotY90);
  Mat4.scale(m, m, size);
  const width = Math.floor(size[1] * scaleFactor);
  const height = Math.floor(size[0] * scaleFactor);
  const trim = {
    type: 3,
    center: Vec3.create(a / 2, b / 2, c / 2),
    scale: Vec3.create(a, b, c),
    rotation: Quat.identity(),
    transform: cartnToGrid
  };
  const info = { m, width, height };
  return getSampledImage(volume, theme, info, isoValue, trim, image);
}
async function createGridImage(ctx, volume, key, theme, props, image) {
  const { dimension: { name: dim }, isoValue } = props;
  const { cells: { space, data }, stats } = volume.grid;
  const { min, max } = stats;
  const isUniform = theme.color.granularity === "uniform";
  const color = "color" in theme.color && theme.color.color ? theme.color.color : () => Color(16777215);
  const { width, height, x, y, z, x0, y0, z0, nx, ny, nz } = getSliceInfo(volume.grid, props);
  const corners = new Float32Array(dim === "x" ? [x, 0, 0, x, y, 0, x, 0, z, x, y, z] : dim === "y" ? [0, y, 0, x, y, 0, 0, y, z, x, y, z] : [0, 0, z, 0, y, z, x, 0, z, x, y, z]);
  const imageArray = new Uint8Array(width * height * 4);
  const groupArray = getPackedGroupArray(volume.grid, props);
  const valueArray = new Float32Array(width * height);
  const gridToCartn = Grid.getGridToCartesianTransform(volume.grid);
  const l = PositionLocation(Vec3(), Vec3());
  let i = 0;
  for (let iy = y0; iy < ny; ++iy) {
    for (let ix = x0; ix < nx; ++ix) {
      for (let iz = z0; iz < nz; ++iz) {
        Vec3.set(l.position, ix, iy, iz);
        Vec3.transformMat4(l.position, l.position, gridToCartn);
        Color.toArray(color(l, false), imageArray, i);
        const val = normalize(space.get(data, ix, iy, iz), min, max);
        if (isUniform) {
          imageArray[i] *= val;
          imageArray[i + 1] *= val;
          imageArray[i + 2] *= val;
        }
        valueArray[i / 4] = val;
        i += 4;
      }
    }
  }
  const imageTexture = { width, height, array: imageArray, flipY: true };
  const groupTexture = { width, height, array: groupArray, flipY: true };
  const valueTexture = { width, height, array: valueArray, flipY: true };
  const transform = Grid.getGridToCartesianTransform(volume.grid);
  transformPositionArray(transform, corners, 0, 4);
  const trim = Image.createEmptyTrim();
  const isoLevel = clamp(normalize(Volume.IsoValue.toAbsolute(isoValue, stats).absoluteValue, min, max), 0, 1);
  const im = Image.create(imageTexture, corners, groupTexture, valueTexture, trim, isoLevel, image);
  im.setBoundingSphere(Volume.getBoundingSphere(volume));
  return im;
}
function getSliceInfo(grid, props) {
  const { dimension: { name: dim, params: index } } = props;
  const { space } = grid.cells;
  let width, height;
  let x, y, z;
  let x0 = 0, y0 = 0, z0 = 0;
  let [nx, ny, nz] = space.dimensions;
  if (dim === "x") {
    x = index, y = ny - 1, z = nz - 1;
    width = nz, height = ny;
    x0 = x, nx = x0 + 1;
  } else if (dim === "y") {
    x = nx - 1, y = index, z = nz - 1;
    width = nz, height = nx;
    y0 = y, ny = y0 + 1;
  } else {
    x = nx - 1, y = ny - 1, z = index;
    width = nx, height = ny;
    z0 = z, nz = z0 + 1;
  }
  return {
    width,
    height,
    x,
    y,
    z,
    x0,
    y0,
    z0,
    nx,
    ny,
    nz
  };
}
function getPackedGroupArray(grid, props) {
  const { space } = grid.cells;
  const { width, height, x0, y0, z0, nx, ny, nz } = getSliceInfo(grid, props);
  const groupArray = new Uint8Array(width * height * 4);
  let j = 0;
  for (let iy = y0; iy < ny; ++iy) {
    for (let ix = x0; ix < nx; ++ix) {
      for (let iz = z0; iz < nz; ++iz) {
        packIntToRGBArray(space.dataOffset(ix, iy, iz), groupArray, j);
        j += 4;
      }
    }
  }
  return groupArray;
}
function getGroupArray(grid, props) {
  const { space } = grid.cells;
  const { width, height, x0, y0, z0, nx, ny, nz } = getSliceInfo(grid, props);
  const groupArray = new Uint32Array(width * height);
  let j = 0;
  for (let iy = y0; iy < ny; ++iy) {
    for (let ix = x0; ix < nx; ++ix) {
      for (let iz = z0; iz < nz; ++iz) {
        groupArray[j] = space.dataOffset(ix, iy, iz);
        j += 1;
      }
    }
  }
  return groupArray;
}
function getLoci2(volume, props) {
  if (props.mode === "grid") {
    const groupArray = getGroupArray(volume.grid, props);
    return Volume.Cell.Loci(volume, SortedArray.ofUnsortedArray(groupArray));
  } else {
    return Volume.Loci(volume);
  }
}
function getSliceLoci(pickingId, volume, key, props, id) {
  const { objectId, groupId } = pickingId;
  if (id === objectId) {
    const granularity = Volume.PickingGranularity.get(volume);
    if (granularity === "volume") {
      return Volume.Loci(volume);
    }
    if (granularity === "object") {
      return getLoci2(volume, props);
    } else {
      return Volume.Cell.Loci(volume, Interval.ofSingleton(groupId));
    }
  }
  return EmptyLoci;
}
function eachSlice(loci, volume, key, props, apply) {
  return eachVolumeLoci(loci, volume, void 0, apply);
}
function SliceVisual(materialId) {
  return VolumeVisual({
    defaultProps: ParamDefinition.getDefaultValues(SliceParams),
    createGeometry: createImage,
    createLocationIterator: (volume) => LocationIterator(volume.grid.cells.data.length, 1, 1, () => NullLocation),
    getLoci: getSliceLoci,
    eachLocation: eachSlice,
    setUpdateState: (state, volume, newProps, currentProps, newTheme, currentTheme) => {
      state.createGeometry = newProps.dimension.name !== currentProps.dimension.name || newProps.dimension.params !== currentProps.dimension.params || newProps.mode !== currentProps.mode || !Vec3.equals(newProps.rotation.axis, currentProps.rotation.axis) || newProps.rotation.angle !== currentProps.rotation.angle || newProps.offset !== currentProps.offset || newProps.axis !== currentProps.axis || !Vec3.equals(newProps.plane.point, currentProps.plane.point) || !Vec3.equals(newProps.plane.normal, currentProps.plane.normal) || !Volume.IsoValue.areSame(newProps.isoValue, currentProps.isoValue, volume.grid.stats) || !ColorTheme.areEqual(newTheme.color, currentTheme.color);
    },
    geometryUtils: Image.Utils
  }, materialId);
}
function SliceRepresentation(ctx, getParams) {
  return VolumeRepresentation("Slice", ctx, getParams, SliceVisual, getLoci2);
}
var SliceRepresentationProvider = VolumeRepresentationProvider({
  name: "slice",
  label: "Slice",
  description: "Slice of volume rendered as image with interpolation.",
  factory: SliceRepresentation,
  getParams: getSliceParams,
  defaultValues: ParamDefinition.getDefaultValues(SliceParams),
  defaultColorTheme: { name: "uniform" },
  defaultSizeTheme: { name: "uniform" },
  isApplicable: (volume) => !Volume.isEmpty(volume) && !Volume.Segmentation.get(volume)
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-repr/volume/direct-volume.js
function getBoundingBox(gridDimension, transform) {
  const bbox = Box3D();
  Box3D.add(bbox, gridDimension);
  Box3D.transform(bbox, bbox, transform);
  return bbox;
}
function createDirectVolume2d(ctx, webgl, volume, props, directVolume) {
  const gridDimension = volume.grid.cells.space.dimensions;
  const { width, height } = getVolumeTexture2dLayout(gridDimension);
  if (Math.max(width, height) > webgl.maxTextureSize / 2) {
    throw new Error("volume too large for direct-volume rendering");
  }
  const dataType = props.dataType === "halfFloat" && !webgl.extensions.textureHalfFloat ? "float" : props.dataType;
  const textureImage = createVolumeTexture2d(volume, "normals", 0, dataType);
  const transform = Grid.getGridToCartesianTransform(volume.grid);
  const bbox = getBoundingBox(gridDimension, transform);
  let texture;
  if (directVolume && directVolume.dataType.ref.value === dataType) {
    texture = directVolume.gridTexture.ref.value;
  } else {
    texture = dataType === "byte" ? webgl.resources.texture("image-uint8", "rgba", "ubyte", "linear") : dataType === "halfFloat" ? webgl.resources.texture("image-float16", "rgba", "fp16", "linear") : webgl.resources.texture("image-float32", "rgba", "float", "linear");
  }
  texture.load(textureImage);
  const { unitToCartn, cellDim } = getUnitToCartn(volume.grid);
  const axisOrder = volume.grid.cells.space.axisOrderSlowToFast;
  return DirectVolume.create(bbox, gridDimension, transform, unitToCartn, cellDim, texture, volume.grid.stats, false, axisOrder, dataType, directVolume);
}
function getUnitToCartn(grid) {
  if (grid.transform.kind === "matrix") {
    return {
      unitToCartn: Mat4.mul(Mat4(), grid.transform.matrix, Mat4.fromScaling(Mat4(), grid.cells.space.dimensions)),
      cellDim: Mat4.getScaling(Vec3(), grid.transform.matrix)
    };
  }
  const box = grid.transform.fractionalBox;
  const size = Box3D.size(Vec3(), box);
  return {
    unitToCartn: Mat4.mul3(Mat4(), grid.transform.cell.fromFractional, Mat4.fromTranslation(Mat4(), box.min), Mat4.fromScaling(Mat4(), size)),
    cellDim: Vec3.div(Vec3(), grid.transform.cell.size, grid.cells.space.dimensions)
  };
}
function createDirectVolume3d(ctx, webgl, volume, props, directVolume) {
  const gridDimension = volume.grid.cells.space.dimensions;
  if (Math.max(...gridDimension) > webgl.max3dTextureSize / 2) {
    throw new Error("volume too large for direct-volume rendering");
  }
  const dataType = props.dataType === "halfFloat" && !webgl.extensions.textureHalfFloat ? "float" : props.dataType;
  const textureVolume = createVolumeTexture3d(volume, dataType);
  const transform = Grid.getGridToCartesianTransform(volume.grid);
  const bbox = getBoundingBox(gridDimension, transform);
  let texture;
  if (directVolume && directVolume.dataType.ref.value === dataType) {
    texture = directVolume.gridTexture.ref.value;
  } else {
    texture = dataType === "byte" ? webgl.resources.texture("volume-uint8", "rgba", "ubyte", "linear") : dataType === "halfFloat" ? webgl.resources.texture("volume-float16", "rgba", "fp16", "linear") : webgl.resources.texture("volume-float32", "rgba", "float", "linear");
  }
  texture.load(textureVolume);
  const { unitToCartn, cellDim } = getUnitToCartn(volume.grid);
  const axisOrder = volume.grid.cells.space.axisOrderSlowToFast;
  return DirectVolume.create(bbox, gridDimension, transform, unitToCartn, cellDim, texture, volume.grid.stats, false, axisOrder, dataType, directVolume);
}
async function createDirectVolume(ctx, volume, key, theme, props, directVolume) {
  const { runtime, webgl } = ctx;
  if (webgl === void 0)
    throw new Error("DirectVolumeVisual requires `webgl` in VisualContext");
  return webgl.isWebGL2 ? createDirectVolume3d(runtime, webgl, volume, props, directVolume) : createDirectVolume2d(runtime, webgl, volume, props, directVolume);
}
function getLoci3(volume, props) {
  return Volume.Loci(volume);
}
function getDirectVolumeLoci(pickingId, volume, key, props, id) {
  const { objectId, groupId } = pickingId;
  if (id === objectId) {
    return Volume.Cell.Loci(volume, Interval.ofSingleton(groupId));
  }
  return EmptyLoci;
}
function eachDirectVolume(loci, volume, key, props, apply) {
  return eachVolumeLoci(loci, volume, void 0, apply);
}
var DirectVolumeParams = {
  ...DirectVolume.Params,
  quality: { ...DirectVolume.Params.quality, isEssential: false },
  dataType: ParamDefinition.Select("byte", ParamDefinition.arrayToOptions(["byte", "float", "halfFloat"]))
};
function getDirectVolumeParams(ctx, volume) {
  const params = ParamDefinition.clone(DirectVolumeParams);
  params.controlPoints.getVolume = () => volume;
  return params;
}
function DirectVolumeVisual(materialId) {
  return VolumeVisual({
    defaultProps: ParamDefinition.getDefaultValues(DirectVolumeParams),
    createGeometry: createDirectVolume,
    createLocationIterator: (volume) => LocationIterator(volume.grid.cells.data.length, 1, 1, () => NullLocation),
    getLoci: getDirectVolumeLoci,
    eachLocation: eachDirectVolume,
    setUpdateState: (state, volume, newProps, currentProps) => {
      state.createGeometry = newProps.dataType !== currentProps.dataType;
    },
    geometryUtils: DirectVolume.Utils,
    dispose: (geometry) => {
      geometry.gridTexture.ref.value.destroy();
    }
  }, materialId);
}
function DirectVolumeRepresentation(ctx, getParams) {
  return VolumeRepresentation("Direct Volume", ctx, getParams, DirectVolumeVisual, getLoci3);
}
var DirectVolumeRepresentationProvider = VolumeRepresentationProvider({
  name: "direct-volume",
  label: "Direct Volume",
  description: "Direct rendering of volumetric data.",
  factory: DirectVolumeRepresentation,
  getParams: getDirectVolumeParams,
  defaultValues: ParamDefinition.getDefaultValues(DirectVolumeParams),
  defaultColorTheme: { name: "volume-value" },
  defaultSizeTheme: { name: "uniform" },
  locationKinds: ["position-location", "direct-location"],
  isApplicable: (volume) => !Volume.isEmpty(volume) && !Volume.Segmentation.get(volume)
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-repr/volume/segment.js
var VolumeSegmentParams = {
  segments: ParamDefinition.Converted((v) => v.map((x) => `${x}`), (v) => v.map((x) => parseInt(x)), ParamDefinition.MultiSelect(["0"], ParamDefinition.arrayToOptions(["0"]), {
    isEssential: true
  }))
};
function gpuSupport2(webgl) {
  return webgl.extensions.colorBufferFloat && webgl.extensions.textureFloat && webgl.extensions.drawBuffers;
}
var Padding2 = 1;
function suitableForGpu2(volume, webgl) {
  if (volume.grid.cells.data.length < Math.pow(10, 3))
    return false;
  const gridDim = volume.grid.cells.space.dimensions;
  const { powerOfTwoSize } = getVolumeTexture2dLayout(gridDim, Padding2);
  return powerOfTwoSize <= webgl.maxTextureSize / 2;
}
var _translate = Mat4();
function getSegmentTransform(grid, segmentBox) {
  const transform = Grid.getGridToCartesianTransform(grid);
  const translate = Mat4.fromTranslation(_translate, segmentBox.min);
  return Mat4.mul(Mat4(), transform, translate);
}
function SegmentVisual(materialId, volume, key, props, webgl) {
  if (props.tryUseGpu && webgl && gpuSupport2(webgl) && suitableForGpu2(volume, webgl)) {
    return SegmentTextureMeshVisual(materialId);
  }
  return SegmentMeshVisual(materialId);
}
function getLoci4(volume, props) {
  return Volume.Segment.Loci(volume, props.segments);
}
function getSegmentLoci(pickingId, volume, key, props, id) {
  const { objectId, groupId } = pickingId;
  if (id === objectId) {
    const granularity = Volume.PickingGranularity.get(volume);
    if (granularity === "volume") {
      return Volume.Loci(volume);
    } else if (granularity === "object") {
      return Volume.Segment.Loci(volume, [key]);
    } else {
      return Volume.Cell.Loci(volume, Interval.ofSingleton(groupId));
    }
  }
  return EmptyLoci;
}
function eachSegment(loci, volume, key, props, apply) {
  const segments = SortedArray.ofSingleton(key);
  return eachVolumeLoci(loci, volume, { segments }, apply);
}
function getSegmentCells(set, bbox, cells) {
  const data = cells.data;
  const o = cells.space.dataOffset;
  const dim = Box3D.size(Vec3(), bbox);
  const [xn, yn, zn] = dim;
  const xn1 = xn - 1;
  const yn1 = yn - 1;
  const zn1 = zn - 1;
  const [minx, miny, minz] = bbox.min;
  const [maxx, maxy, maxz] = bbox.max;
  const axisOrder = [...cells.space.axisOrderSlowToFast];
  const segmentSpace = Tensor.Space(dim, axisOrder, Uint8Array);
  const segmentCells = Tensor.create(segmentSpace, segmentSpace.create());
  const segData = segmentCells.data;
  const segSet = segmentSpace.set;
  for (let z = 0; z < zn; ++z) {
    for (let y = 0; y < yn; ++y) {
      for (let x = 0; x < xn; ++x) {
        const v0 = set.includes(data[o(x + minx, y + miny, z + minz)]) ? 255 : 0;
        const xp = set.includes(data[o(Math.min(xn1 + maxx, x + 1 + minx), y + miny, z + minz)]) ? 255 : 0;
        const xn2 = set.includes(data[o(Math.max(0, x - 1 + minx), y + miny, z + minz)]) ? 255 : 0;
        const yp = set.includes(data[o(x + minx, Math.min(yn1 + maxy, y + 1 + miny), z + minz)]) ? 255 : 0;
        const yn2 = set.includes(data[o(x + minx, Math.max(0, y - 1 + miny), z + minz)]) ? 255 : 0;
        const zp = set.includes(data[o(x + minx, y + miny, Math.min(zn1 + maxz, z + 1 + minz))]) ? 255 : 0;
        const zn2 = set.includes(data[o(x + minx, y + miny, Math.max(0, z - 1 + minz))]) ? 255 : 0;
        segSet(segData, x, y, z, Math.round((v0 + v0 + xp + xn2 + yp + yn2 + zp + zn2) / 8));
      }
    }
  }
  return segmentCells;
}
async function createVolumeSegmentMesh(ctx, volume, key, theme, props, mesh) {
  const segmentation = Volume.Segmentation.get(volume);
  if (!segmentation)
    throw new Error("missing volume segmentation");
  ctx.runtime.update({ message: "Marching cubes..." });
  const bbox = Box3D.clone(segmentation.bounds[key]);
  Box3D.expand(bbox, bbox, Vec3.create(2, 2, 2));
  const set = Array.from(segmentation.segments.get(key).values());
  const cells = getSegmentCells(set, bbox, volume.grid.cells);
  const ids = fillSerial(new Int32Array(cells.data.length));
  const surface = await computeMarchingCubesMesh({
    isoLevel: 128,
    scalarField: cells,
    idField: Tensor.create(cells.space, Tensor.Data1(ids))
  }, mesh).runAsChild(ctx.runtime);
  const transform = getSegmentTransform(volume.grid, bbox);
  Mesh.transform(surface, transform);
  if (ctx.webgl && !ctx.webgl.isWebGL2) {
    Mesh.uniformTriangleGroup(surface, false);
    ValueCell.updateIfChanged(surface.varyingGroup, false);
  } else {
    ValueCell.updateIfChanged(surface.varyingGroup, true);
  }
  surface.setBoundingSphere(Volume.Segment.getBoundingSphere(volume, [key]));
  return surface;
}
var SegmentMeshParams = {
  ...Mesh.Params,
  ...TextureMesh.Params,
  ...VolumeSegmentParams,
  quality: { ...Mesh.Params.quality, isEssential: false },
  tryUseGpu: ParamDefinition.Boolean(true)
};
function SegmentMeshVisual(materialId) {
  return VolumeVisual({
    defaultProps: ParamDefinition.getDefaultValues(SegmentMeshParams),
    createGeometry: createVolumeSegmentMesh,
    createLocationIterator: (volume, key) => {
      const l = Volume.Segment.Location(volume, key);
      return LocationIterator(volume.grid.cells.data.length, 1, 1, () => l);
    },
    getLoci: getSegmentLoci,
    eachLocation: eachSegment,
    setUpdateState: (state, volume, newProps, currentProps) => {
    },
    geometryUtils: Mesh.Utils,
    mustRecreate: (volumeKey, props, webgl) => {
      return props.tryUseGpu && !!webgl && suitableForGpu2(volumeKey.volume, webgl);
    }
  }, materialId);
}
var SegmentTextureName = "segment-texture";
function getSegmentTexture(volume, segment, webgl) {
  const segmentation = Volume.Segmentation.get(volume);
  if (!segmentation)
    throw new Error("missing volume segmentation");
  const { resources } = webgl;
  const bbox = Box3D.clone(segmentation.bounds[segment]);
  Box3D.expand(bbox, bbox, Vec3.create(2, 2, 2));
  const transform = getSegmentTransform(volume.grid, bbox);
  const gridDimension = Box3D.size(Vec3(), bbox);
  const { width, height, powerOfTwoSize: texDim } = getVolumeTexture2dLayout(gridDimension, Padding2);
  const gridTexDim = Vec3.create(width, height, 0);
  const gridTexScale = Vec2.create(width / texDim, height / texDim);
  if (texDim > webgl.maxTextureSize / 2) {
    throw new Error("volume too large for gpu segment extraction");
  }
  if (!webgl.namedTextures[SegmentTextureName]) {
    webgl.namedTextures[SegmentTextureName] = resources.texture("image-uint8", "alpha", "ubyte", "linear");
  }
  const texture = webgl.namedTextures[SegmentTextureName];
  texture.define(texDim, texDim);
  const set = Array.from(segmentation.segments.get(segment).values());
  texture.load(createSegmentTexture2d(volume, set, bbox, Padding2), true);
  gridDimension[0] += Padding2;
  gridDimension[1] += Padding2;
  return {
    texture,
    transform,
    gridDimension,
    gridTexDim,
    gridTexScale
  };
}
async function createVolumeSegmentTextureMesh(ctx, volume, segment, theme, props, textureMesh) {
  if (!ctx.webgl)
    throw new Error("webgl context required to create volume segment texture-mesh");
  if (volume.grid.cells.data.length <= 1) {
    return TextureMesh.createEmpty(textureMesh);
  }
  const { texture, gridDimension, gridTexDim, gridTexScale, transform } = getSegmentTexture(volume, segment, ctx.webgl);
  const axisOrder = volume.grid.cells.space.axisOrderSlowToFast;
  const buffer = textureMesh === null || textureMesh === void 0 ? void 0 : textureMesh.doubleBuffer.get();
  const gv = extractIsosurface(ctx.webgl, texture, gridDimension, gridTexDim, gridTexScale, transform, 0.5, false, false, axisOrder, true, buffer === null || buffer === void 0 ? void 0 : buffer.vertex, buffer === null || buffer === void 0 ? void 0 : buffer.group, buffer === null || buffer === void 0 ? void 0 : buffer.normal);
  const groupCount = volume.grid.cells.data.length;
  const surface = TextureMesh.create(gv.vertexCount, groupCount, gv.vertexTexture, gv.groupTexture, gv.normalTexture, Volume.Segment.getBoundingSphere(volume, [segment]), textureMesh);
  return surface;
}
function SegmentTextureMeshVisual(materialId) {
  return VolumeVisual({
    defaultProps: ParamDefinition.getDefaultValues(SegmentMeshParams),
    createGeometry: createVolumeSegmentTextureMesh,
    createLocationIterator: (volume, segment) => {
      const l = Volume.Segment.Location(volume, segment);
      return LocationIterator(volume.grid.cells.data.length, 1, 1, () => l);
    },
    getLoci: getSegmentLoci,
    eachLocation: eachSegment,
    setUpdateState: (state, volume, newProps, currentProps) => {
    },
    geometryUtils: TextureMesh.Utils,
    mustRecreate: (volumeKey, props, webgl) => {
      return !props.tryUseGpu || !webgl || !suitableForGpu2(volumeKey.volume, webgl);
    },
    dispose: (geometry) => {
      geometry.vertexTexture.ref.value.destroy();
      geometry.groupTexture.ref.value.destroy();
      geometry.normalTexture.ref.value.destroy();
      geometry.doubleBuffer.destroy();
    }
  }, materialId);
}
function getSegments(props) {
  return SortedArray.ofUnsortedArray(props.segments);
}
var SegmentVisuals = {
  "segment": (ctx, getParams) => VolumeRepresentation("Segment mesh", ctx, getParams, SegmentVisual, getLoci4, getSegments)
};
var SegmentParams = {
  ...SegmentMeshParams,
  visuals: ParamDefinition.MultiSelect(["segment"], ParamDefinition.objectToOptions(SegmentVisuals)),
  bumpFrequency: ParamDefinition.Numeric(1, { min: 0, max: 10, step: 0.1 }, BaseGeometry.ShadingCategory)
};
function getSegmentParams(ctx, volume) {
  const p = ParamDefinition.clone(SegmentParams);
  const segmentation = Volume.Segmentation.get(volume);
  if (segmentation) {
    const segments = Array.from(segmentation.segments.keys());
    p.segments = ParamDefinition.Converted((v) => v.map((x) => `${x}`), (v) => v.map((x) => parseInt(x)), ParamDefinition.MultiSelect(segments.map((x) => `${x}`), ParamDefinition.arrayToOptions(segments.map((x) => `${x}`)), {
      isEssential: true
    }));
  }
  return p;
}
function SegmentRepresentation(ctx, getParams) {
  return Representation.createMulti("Segment", ctx, getParams, Representation.StateBuilder, SegmentVisuals);
}
var SegmentRepresentationProvider = VolumeRepresentationProvider({
  name: "segment",
  label: "Segment",
  description: "Displays a triangulated segment of volumetric data.",
  factory: SegmentRepresentation,
  getParams: getSegmentParams,
  defaultValues: ParamDefinition.getDefaultValues(SegmentParams),
  defaultColorTheme: { name: "volume-segment" },
  defaultSizeTheme: { name: "uniform" },
  isApplicable: (volume) => !Volume.isEmpty(volume) && !!Volume.Segmentation.get(volume)
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-geo/geometry/points/points-builder.js
var caAdd32 = ChunkedArray.add3;
var caAdd2 = ChunkedArray.add;
var PointsBuilder;
(function(PointsBuilder2) {
  function create(initialCount = 2048, chunkSize = 1024, points) {
    const centers = ChunkedArray.create(Float32Array, 3, chunkSize, points ? points.centerBuffer.ref.value : initialCount);
    const groups = ChunkedArray.create(Float32Array, 1, chunkSize, points ? points.groupBuffer.ref.value : initialCount);
    return {
      add: (x, y, z, group) => {
        caAdd32(centers, x, y, z);
        caAdd2(groups, group);
      },
      getPoints: () => {
        const cb = ChunkedArray.compact(centers, true);
        const gb = ChunkedArray.compact(groups, true);
        return Points.create(cb, gb, centers.elementCount, points);
      }
    };
  }
  PointsBuilder2.create = create;
})(PointsBuilder || (PointsBuilder = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-repr/volume/dot.js
var VolumeDotParams = {
  isoValue: Volume.IsoValueParam
};
var VolumeSphereParams = {
  ...Spheres.Params,
  ...Mesh.Params,
  ...VolumeDotParams,
  tryUseImpostor: ParamDefinition.Boolean(true),
  detail: ParamDefinition.Numeric(0, { min: 0, max: 3, step: 1 }, BaseGeometry.CustomQualityParamInfo)
};
function VolumeSphereVisual(materialId, volume, key, props, webgl) {
  return props.tryUseImpostor && webgl && webgl.extensions.fragDepth && webgl.extensions.textureFloat ? VolumeSphereImpostorVisual(materialId) : VolumeSphereMeshVisual(materialId);
}
function VolumeSphereImpostorVisual(materialId) {
  return VolumeVisual({
    defaultProps: ParamDefinition.getDefaultValues(VolumeSphereParams),
    createGeometry: createVolumeSphereImpostor,
    createLocationIterator: createVolumeCellLocationIterator,
    getLoci: getDotLoci,
    eachLocation: eachDot,
    setUpdateState: (state, volume, newProps, currentProps) => {
      state.createGeometry = !Volume.IsoValue.areSame(newProps.isoValue, currentProps.isoValue, volume.grid.stats);
    },
    geometryUtils: Spheres.Utils,
    mustRecreate: (volumekey, props, webgl) => {
      return !props.tryUseImpostor || !webgl;
    }
  }, materialId);
}
function VolumeSphereMeshVisual(materialId) {
  return VolumeVisual({
    defaultProps: ParamDefinition.getDefaultValues(VolumeSphereParams),
    createGeometry: createVolumeSphereMesh,
    createLocationIterator: createVolumeCellLocationIterator,
    getLoci: getDotLoci,
    eachLocation: eachDot,
    setUpdateState: (state, volume, newProps, currentProps) => {
      state.createGeometry = !Volume.IsoValue.areSame(newProps.isoValue, currentProps.isoValue, volume.grid.stats) || newProps.sizeFactor !== currentProps.sizeFactor || newProps.detail !== currentProps.detail;
    },
    geometryUtils: Mesh.Utils,
    mustRecreate: (volumekey, props, webgl) => {
      return props.tryUseImpostor && !!webgl;
    }
  }, materialId);
}
function createVolumeSphereImpostor(ctx, volume, key, theme, props, spheres) {
  const { cells: { space, data }, stats } = volume.grid;
  const gridToCartn = Grid.getGridToCartesianTransform(volume.grid);
  const isoVal = Volume.IsoValue.toAbsolute(props.isoValue, stats).absoluteValue;
  const p = Vec3();
  const [xn, yn, zn] = space.dimensions;
  const count = Math.ceil(xn * yn * zn / 10);
  const builder = SpheresBuilder.create(count, Math.ceil(count / 2), spheres);
  for (let z = 0; z < zn; ++z) {
    for (let y = 0; y < yn; ++y) {
      for (let x = 0; x < xn; ++x) {
        if (space.get(data, x, y, z) < isoVal)
          continue;
        Vec3.set(p, x, y, z);
        Vec3.transformMat4(p, p, gridToCartn);
        builder.add(p[0], p[1], p[2], space.dataOffset(x, y, z));
      }
    }
  }
  const s = builder.getSpheres();
  s.setBoundingSphere(Volume.Isosurface.getBoundingSphere(volume, props.isoValue));
  return s;
}
function createVolumeSphereMesh(ctx, volume, key, theme, props, mesh) {
  const { detail, sizeFactor } = props;
  const { cells: { space, data }, stats } = volume.grid;
  const gridToCartn = Grid.getGridToCartesianTransform(volume.grid);
  const isoVal = Volume.IsoValue.toAbsolute(props.isoValue, stats).absoluteValue;
  const p = Vec3();
  const [xn, yn, zn] = space.dimensions;
  const count = xn * yn * zn / 10;
  const vertexCount = count * sphereVertexCount(detail);
  const builderState = MeshBuilder.createState(vertexCount, vertexCount / 2, mesh);
  const l = Volume.Cell.Location(volume);
  const themeSize = theme.size.size;
  for (let z = 0; z < zn; ++z) {
    for (let y = 0; y < yn; ++y) {
      for (let x = 0; x < xn; ++x) {
        if (space.get(data, x, y, z) < isoVal)
          continue;
        Vec3.set(p, x, y, z);
        Vec3.transformMat4(p, p, gridToCartn);
        builderState.currentGroup = space.dataOffset(x, y, z);
        l.cell = builderState.currentGroup;
        const size = themeSize(l);
        addSphere(builderState, p, size * sizeFactor, detail);
      }
    }
  }
  const m = MeshBuilder.getMesh(builderState);
  m.setBoundingSphere(Volume.Isosurface.getBoundingSphere(volume, props.isoValue));
  return m;
}
var VolumePointParams = {
  ...Points.Params,
  ...VolumeDotParams
};
function VolumePointVisual(materialId) {
  return VolumeVisual({
    defaultProps: ParamDefinition.getDefaultValues(VolumePointParams),
    createGeometry: createVolumePoint,
    createLocationIterator: createVolumeCellLocationIterator,
    getLoci: getDotLoci,
    eachLocation: eachDot,
    setUpdateState: (state, volume, newProps, currentProps) => {
      state.createGeometry = !Volume.IsoValue.areSame(newProps.isoValue, currentProps.isoValue, volume.grid.stats);
    },
    geometryUtils: Points.Utils
  }, materialId);
}
function createVolumePoint(ctx, volume, key, theme, props, points) {
  const { cells: { space, data }, stats } = volume.grid;
  const gridToCartn = Grid.getGridToCartesianTransform(volume.grid);
  const isoVal = Volume.IsoValue.toAbsolute(props.isoValue, stats).absoluteValue;
  const p = Vec3();
  const [xn, yn, zn] = space.dimensions;
  const count = Math.ceil(xn * yn * zn / 10);
  const builder = PointsBuilder.create(count, Math.ceil(count / 2), points);
  for (let z = 0; z < zn; ++z) {
    for (let y = 0; y < yn; ++y) {
      for (let x = 0; x < xn; ++x) {
        if (space.get(data, x, y, z) < isoVal)
          continue;
        Vec3.set(p, x, y, z);
        Vec3.transformMat4(p, p, gridToCartn);
        builder.add(p[0], p[1], p[2], space.dataOffset(x, y, z));
      }
    }
  }
  const pt = builder.getPoints();
  pt.setBoundingSphere(Volume.Isosurface.getBoundingSphere(volume, props.isoValue));
  return pt;
}
function getLoci5(volume, props) {
  return Volume.Isosurface.Loci(volume, props.isoValue);
}
function getDotLoci(pickingId, volume, key, props, id) {
  const { objectId, groupId } = pickingId;
  if (id === objectId) {
    const granularity = Volume.PickingGranularity.get(volume);
    if (granularity === "volume") {
      return Volume.Loci(volume);
    } else if (granularity === "object") {
      return Volume.Isosurface.Loci(volume, props.isoValue);
    } else {
      return Volume.Cell.Loci(volume, Interval.ofSingleton(groupId));
    }
  }
  return EmptyLoci;
}
function eachDot(loci, volume, key, props, apply) {
  return eachVolumeLoci(loci, volume, { isoValue: props.isoValue }, apply);
}
var DotVisuals = {
  "sphere": (ctx, getParams) => VolumeRepresentation("Dot sphere", ctx, getParams, VolumeSphereVisual, getLoci5),
  "point": (ctx, getParams) => VolumeRepresentation("Dot point", ctx, getParams, VolumePointVisual, getLoci5)
};
var DotParams = {
  ...VolumeSphereParams,
  ...VolumePointParams,
  visuals: ParamDefinition.MultiSelect(["sphere"], ParamDefinition.objectToOptions(DotVisuals)),
  bumpFrequency: ParamDefinition.Numeric(1, { min: 0, max: 10, step: 0.1 }, BaseGeometry.ShadingCategory)
};
function getDotParams(ctx, volume) {
  const p = ParamDefinition.clone(DotParams);
  p.isoValue = Volume.createIsoValueParam(Volume.IsoValue.relative(2), volume.grid.stats);
  return p;
}
function DotRepresentation(ctx, getParams) {
  return Representation.createMulti("Dot", ctx, getParams, Representation.StateBuilder, DotVisuals);
}
var DotRepresentationProvider = VolumeRepresentationProvider({
  name: "dot",
  label: "Dot",
  description: "Displays dots of volumetric data.",
  factory: DotRepresentation,
  getParams: getDotParams,
  defaultValues: ParamDefinition.getDefaultValues(DotParams),
  defaultColorTheme: { name: "uniform" },
  defaultSizeTheme: { name: "uniform" },
  isApplicable: (volume) => !Volume.isEmpty(volume) && !Volume.Segmentation.get(volume)
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-repr/volume/registry.js
var VolumeRepresentationRegistry = class _VolumeRepresentationRegistry extends RepresentationRegistry {
  constructor() {
    super();
    objectForEach(_VolumeRepresentationRegistry.BuiltIn, (p, k) => {
      if (p.name !== k)
        throw new Error(`Fix BuiltInVolumeRepresentations to have matching names. ${p.name} ${k}`);
      this.add(p);
    });
  }
};
(function(VolumeRepresentationRegistry2) {
  VolumeRepresentationRegistry2.BuiltIn = {
    "direct-volume": DirectVolumeRepresentationProvider,
    "dot": DotRepresentationProvider,
    "isosurface": IsosurfaceRepresentationProvider,
    "segment": SegmentRepresentationProvider,
    "slice": SliceRepresentationProvider
  };
})(VolumeRepresentationRegistry || (VolumeRepresentationRegistry = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/behavior/dynamic/volume-streaming/transformers.js
function addEntry(entries, method, dataId, emDefaultContourLevel) {
  entries.push({
    source: method === "em" ? { name: "em", params: { isoValue: Volume.IsoValue.absolute(emDefaultContourLevel || 0) } } : { name: "x-ray", params: {} },
    dataId
  });
}
var InitVolumeStreaming = StateAction.build({
  display: { name: "Volume Streaming" },
  from: PluginStateObject.Molecule.Structure,
  params(a, plugin) {
    const method = getStreamingMethod(a && a.data);
    const ids = getIds(method, a && a.data);
    return {
      method: ParamDefinition.Select(method, [["em", "EM"], ["x-ray", "X-Ray"]]),
      entries: ParamDefinition.ObjectList({ id: ParamDefinition.Text(ids[0] || "") }, ({ id }) => id, { defaultValue: ids.map((id) => ({ id })) }),
      defaultView: ParamDefinition.Select(method === "em" ? "auto" : "selection-box", VolumeStreaming.ViewTypeOptions),
      options: ParamDefinition.Group({
        serverUrl: ParamDefinition.Text(plugin.config.get(PluginConfig.VolumeStreaming.DefaultServer) || "https://ds.litemol.org"),
        behaviorRef: ParamDefinition.Text("", { isHidden: true }),
        emContourProvider: ParamDefinition.Select("emdb", [["emdb", "EMDB"], ["pdbe", "PDBe"]], { isHidden: true }),
        channelParams: ParamDefinition.Value({}, { isHidden: true })
      })
    };
  },
  isApplicable: (a, _, plugin) => {
    const canStreamTest = plugin.config.get(PluginConfig.VolumeStreaming.CanStream);
    if (canStreamTest)
      return canStreamTest(a.data, plugin);
    return a.data.models.length === 1 && Model.probablyHasDensityMap(a.data.models[0]);
  }
})(({ ref, state, params }, plugin) => Task.create("Volume Streaming", async (taskCtx) => {
  const entries = [];
  for (let i = 0, il = params.entries.length; i < il; ++i) {
    const dataId = params.entries[i].id.toLowerCase();
    let emDefaultContourLevel;
    if (params.method === "em") {
      if (!dataId.toUpperCase().startsWith("EMD")) {
        await taskCtx.update("Getting EMDB info...");
        const emdbIds = await getEmdbIds(plugin, taskCtx, dataId);
        for (let j = 0, jl = emdbIds.length; j < jl; ++j) {
          const emdbId = emdbIds[j];
          let contourLevel;
          try {
            contourLevel = await getContourLevel(params.options.emContourProvider, plugin, taskCtx, emdbId);
          } catch (e) {
            console.info(`Could not get map info for ${emdbId}: ${e}`);
            continue;
          }
          addEntry(entries, params.method, emdbId, contourLevel || 0);
        }
        continue;
      }
      try {
        emDefaultContourLevel = await getContourLevel(params.options.emContourProvider, plugin, taskCtx, dataId);
      } catch (e) {
        console.info(`Could not get map info for ${dataId}: ${e}`);
        continue;
      }
    }
    addEntry(entries, params.method, dataId, emDefaultContourLevel || 0);
  }
  const infoTree = state.build().to(ref).applyOrUpdateTagged(VolumeStreaming.RootTag, CreateVolumeStreamingInfo, {
    serverUrl: params.options.serverUrl,
    entries
  });
  await infoTree.commit();
  const info = infoTree.selector;
  if (!info.isOk)
    return;
  const children = state.tree.children.get(info.ref);
  if ((children === null || children === void 0 ? void 0 : children.size) > 0)
    await plugin.managers.structure.hierarchy.remove(children === null || children === void 0 ? void 0 : children.toArray());
  const infoObj = info.cell.obj;
  const behTree = state.build().to(infoTree.ref).apply(CreateVolumeStreamingBehavior, ParamDefinition.getDefaultValues(VolumeStreaming.createParams({ data: infoObj.data, defaultView: params.defaultView, channelParams: params.options.channelParams })), { ref: params.options.behaviorRef ? params.options.behaviorRef : void 0 });
  if (params.method === "em") {
    behTree.apply(VolumeStreamingVisual, { channel: "em" }, { state: { isGhost: true }, tags: "em" });
  } else {
    behTree.apply(VolumeStreamingVisual, { channel: "2fo-fc" }, { state: { isGhost: true }, tags: "2fo-fc" });
    behTree.apply(VolumeStreamingVisual, { channel: "fo-fc(+ve)" }, { state: { isGhost: true }, tags: "fo-fc(+ve)" });
    behTree.apply(VolumeStreamingVisual, { channel: "fo-fc(-ve)" }, { state: { isGhost: true }, tags: "fo-fc(-ve)" });
  }
  await state.updateTree(behTree).runInContext(taskCtx);
}));
var BoxifyVolumeStreaming = StateAction.build({
  display: { name: "Boxify Volume Streaming", description: "Make the current box permanent." },
  from: VolumeStreaming,
  isApplicable: (a) => a.data.params.entry.params.view.name === "selection-box"
})(({ a, ref, state }, plugin) => {
  const params = a.data.params;
  if (params.entry.params.view.name !== "selection-box")
    return;
  const box = Box3D.create(Vec3.clone(params.entry.params.view.params.bottomLeft), Vec3.clone(params.entry.params.view.params.topRight));
  const r = params.entry.params.view.params.radius;
  Box3D.expand(box, box, Vec3.create(r, r, r));
  const newParams = {
    ...params,
    entry: {
      name: params.entry.name,
      params: {
        ...params.entry.params,
        view: {
          name: "box",
          params: {
            bottomLeft: box.min,
            topRight: box.max
          }
        }
      }
    }
  };
  return state.updateTree(state.build().to(ref).update(newParams));
});
var InfoEntryParams = {
  dataId: ParamDefinition.Text(""),
  source: ParamDefinition.MappedStatic("x-ray", {
    "em": ParamDefinition.Group({
      isoValue: Volume.createIsoValueParam(Volume.IsoValue.relative(1))
    }),
    "x-ray": ParamDefinition.Group({})
  })
};
var CreateVolumeStreamingInfo = PluginStateTransform.BuiltIn({
  name: "create-volume-streaming-info",
  display: { name: "Volume Streaming Info" },
  from: PluginStateObject.Molecule.Structure,
  to: VolumeServerInfo,
  params(a) {
    return {
      serverUrl: ParamDefinition.Text("https://ds.litemol.org"),
      entries: ParamDefinition.ObjectList(InfoEntryParams, ({ dataId }) => dataId, {
        defaultValue: [{ dataId: "", source: { name: "x-ray", params: {} } }]
      })
    };
  }
})({
  apply: ({ a, params }, plugin) => Task.create("", async (taskCtx) => {
    const entries = [];
    for (let i = 0, il = params.entries.length; i < il; ++i) {
      const e = params.entries[i];
      const dataId = e.dataId;
      const emDefaultContourLevel = e.source.name === "em" ? e.source.params.isoValue : Volume.IsoValue.relative(1);
      await taskCtx.update("Getting server header...");
      const header = await plugin.fetch({ url: urlCombine(params.serverUrl, `${e.source.name}/${dataId.toLocaleLowerCase()}`), type: "json" }).runInContext(taskCtx);
      entries.push({
        dataId,
        kind: e.source.name,
        header,
        emDefaultContourLevel
      });
    }
    const data = {
      serverUrl: params.serverUrl,
      entries,
      structure: a.data
    };
    return new VolumeServerInfo(data, { label: "Volume Server", description: `${entries.map((e) => e.dataId).join(", ")}` });
  })
});
var CreateVolumeStreamingBehavior = PluginStateTransform.BuiltIn({
  name: "create-volume-streaming-behavior",
  display: { name: "Volume Streaming Behavior" },
  from: VolumeServerInfo,
  to: VolumeStreaming,
  params(a) {
    return VolumeStreaming.createParams({ data: a && a.data });
  }
})({
  canAutoUpdate: ({ oldParams, newParams }) => {
    return oldParams.entry.params.view === newParams.entry.params.view || newParams.entry.params.view.name === "selection-box" || newParams.entry.params.view.name === "camera-target" || newParams.entry.params.view.name === "off";
  },
  apply: ({ a, params }, plugin) => Task.create("Volume streaming", async (_) => {
    const behavior = new VolumeStreaming.Behavior(plugin, a.data);
    await behavior.update(params);
    return new VolumeStreaming(behavior, { label: "Volume Streaming", description: behavior.getDescription() });
  }),
  update({ a, b, oldParams, newParams }) {
    return Task.create("Update Volume Streaming", async (_) => {
      if (oldParams.entry.name !== newParams.entry.name) {
        if ("em" in newParams.entry.params.channels) {
          const { emDefaultContourLevel } = b.data.infoMap.get(newParams.entry.name);
          if (emDefaultContourLevel) {
            newParams.entry.params.channels["em"].isoValue = emDefaultContourLevel;
          }
        }
      }
      const ret = await b.data.update(newParams) ? Transformer.UpdateResult.Updated : Transformer.UpdateResult.Unchanged;
      b.description = b.data.getDescription();
      return ret;
    });
  }
});
var VolumeStreamingVisual = PluginStateTransform.BuiltIn({
  name: "create-volume-streaming-visual",
  display: { name: "Volume Streaming Visual" },
  from: VolumeStreaming,
  to: PluginStateObject.Volume.Representation3D,
  params: {
    channel: ParamDefinition.Select("em", VolumeStreaming.ChannelTypeOptions, { isHidden: true })
  }
})({
  apply: ({ a, params: srcParams, spine }, plugin) => Task.create("Volume Representation", async (ctx) => {
    var _a, _b;
    const channel = a.data.channels[srcParams.channel];
    if (!channel)
      return StateObject.Null;
    const params = createVolumeProps(a.data, srcParams.channel);
    const provider = VolumeRepresentationRegistry.BuiltIn.isosurface;
    const props = params.type.params || {};
    const repr = provider.factory({ webgl: (_a = plugin.canvas3d) === null || _a === void 0 ? void 0 : _a.webgl, ...plugin.representation.volume.themes }, provider.getParams);
    repr.setTheme(Theme.create(plugin.representation.volume.themes, { volume: channel.data }, params));
    const structure = (_b = spine.getAncestorOfType(PluginStateObject.Molecule.Structure)) === null || _b === void 0 ? void 0 : _b.data;
    const transform = (structure === null || structure === void 0 ? void 0 : structure.models.length) === 0 ? void 0 : GlobalModelTransformInfo.get(structure === null || structure === void 0 ? void 0 : structure.models[0]);
    await repr.createOrUpdate(props, channel.data).runInContext(ctx);
    if (transform)
      repr.setState({ transform });
    return new PluginStateObject.Volume.Representation3D({ repr, sourceData: channel.data }, { label: `${Math.round(channel.isoValue.relativeValue * 100) / 100} σ [${srcParams.channel}]` });
  }),
  update: ({ a, b, newParams, spine }, plugin) => Task.create("Volume Representation", async (ctx) => {
    const channel = a.data.channels[newParams.channel];
    if (!channel)
      return Transformer.UpdateResult.Unchanged;
    const visible = b.data.repr.state.visible;
    const params = createVolumeProps(a.data, newParams.channel);
    const props = { ...b.data.repr.props, ...params.type.params };
    b.data.repr.setTheme(Theme.create(plugin.representation.volume.themes, { volume: channel.data }, params));
    await b.data.repr.createOrUpdate(props, channel.data).runInContext(ctx);
    b.data.repr.setState({ visible });
    b.data.sourceData = channel.data;
    return Transformer.UpdateResult.Updated;
  })
});
function createVolumeProps(streaming, channelName) {
  const channel = streaming.channels[channelName];
  return VolumeRepresentation3DHelpers.getDefaultParamsStatic(streaming.plugin, "isosurface", { isoValue: channel.isoValue, alpha: channel.opacity, visuals: channel.wireframe ? ["wireframe"] : ["solid"] }, "uniform", { value: channel.color });
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/animation/built-in/state-interpolation.js
var AnimateStateInterpolation = PluginStateAnimation.create({
  name: "built-in.animate-state-interpolation",
  display: { name: "Animate State (experimental)" },
  params: () => ({
    transtionDurationInMs: ParamDefinition.Numeric(2e3, { min: 100, max: 3e4, step: 10 })
  }),
  canApply(plugin) {
    return { canApply: plugin.managers.snapshot.state.entries.size > 1 };
  },
  initialState: () => ({}),
  async apply(animState, t, ctx) {
    const snapshots = ctx.plugin.managers.snapshot.state.entries;
    if (snapshots.size < 2)
      return { kind: "finished" };
    const currentT = t.current % ctx.params.transtionDurationInMs / ctx.params.transtionDurationInMs;
    const srcIndex = Math.floor(t.current / ctx.params.transtionDurationInMs) % snapshots.size;
    let tarIndex = Math.ceil(t.current / ctx.params.transtionDurationInMs);
    if (tarIndex === srcIndex)
      tarIndex++;
    tarIndex = tarIndex % snapshots.size;
    const _src = snapshots.get(srcIndex).snapshot, _tar = snapshots.get(tarIndex).snapshot;
    if (!_src.data || !_tar.data)
      return { kind: "skip" };
    const src = _src.data.tree.transforms, tar = _tar.data.tree.transforms;
    const state = ctx.plugin.state.data;
    const update = state.build();
    for (const s of src) {
      for (const t2 of tar) {
        if (t2.ref !== s.ref)
          continue;
        if (t2.version === s.version)
          continue;
        const e = Transform.fromJSON(s), f = Transform.fromJSON(t2);
        const oldState = state.cells.get(s.ref);
        if (!oldState)
          continue;
        let newState;
        if (!e.transformer.definition.interpolate) {
          newState = currentT <= 0.5 ? e.params : f.params;
        } else {
          newState = e.transformer.definition.interpolate(e.params, f.params, currentT, ctx.plugin);
        }
        if (!shallowEqual(oldState, newState)) {
          update.to(s.ref).update(newState);
        }
      }
    }
    await PluginCommands.State.Update(ctx.plugin, { state, tree: update, options: { doNotLogTiming: true } });
    return { kind: "next", state: {} };
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/animation/built-in/spin-structure.js
var AnimateStructureSpin = PluginStateAnimation.create({
  name: "built-in.animate-structure-spin",
  display: { name: "Spin Structure" },
  isExportable: true,
  params: () => ({
    durationInMs: ParamDefinition.Numeric(3e3, { min: 100, max: 1e4, step: 100 })
  }),
  initialState: () => ({ t: 0 }),
  getDuration: (p) => ({ kind: "fixed", durationMs: p.durationInMs }),
  async setup(_, __, plugin) {
    const state = plugin.state.data;
    const reprs = state.select(StateSelection.Generators.ofType(PluginStateObject.Molecule.Structure.Representation3D));
    const update = state.build();
    let changed = false;
    for (const r of reprs) {
      const spins = state.select(StateSelection.Generators.ofTransformer(StateTransforms.Representation.SpinStructureRepresentation3D, r.transform.ref));
      if (spins.length > 0)
        continue;
      changed = true;
      update.to(r.transform.ref).apply(StateTransforms.Representation.SpinStructureRepresentation3D, { t: 0 }, { tags: "animate-structure-spin" });
    }
    if (!changed)
      return;
    return update.commit({ doNotUpdateCurrent: true });
  },
  teardown(_, __, plugin) {
    const state = plugin.state.data;
    const reprs = state.select(StateSelection.Generators.ofType(PluginStateObject.Molecule.Structure.Representation3DState).withTag("animate-structure-spin"));
    if (reprs.length === 0)
      return;
    const update = state.build();
    for (const r of reprs)
      update.delete(r.transform.ref);
    return update.commit();
  },
  async apply(animState, t, ctx) {
    var _a;
    const state = ctx.plugin.state.data;
    const anims = state.select(StateSelection.Generators.ofTransformer(StateTransforms.Representation.SpinStructureRepresentation3D));
    if (anims.length === 0) {
      return { kind: "finished" };
    }
    const update = state.build();
    const d = (t.current - t.lastApplied) / ctx.params.durationInMs;
    const newTime = (animState.t + d) % 1;
    for (const m of anims) {
      update.to(m).update({ ...(_a = m.params) === null || _a === void 0 ? void 0 : _a.values, t: newTime });
    }
    await PluginCommands.State.Update(ctx.plugin, { state, tree: update, options: { doNotLogTiming: true } });
    return { kind: "next", state: { t: newTime } };
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-state/animation/built-in/camera-rock.js
var _dir2 = Vec3();
var _axis2 = Vec3();
var _rot2 = Quat();
var AnimateCameraRock = PluginStateAnimation.create({
  name: "built-in.animate-camera-rock",
  display: { name: "Camera Rock", description: "Rock the 3D scene around the x-axis in view space" },
  isExportable: true,
  params: () => ({
    durationInMs: ParamDefinition.Numeric(4e3, { min: 100, max: 2e4, step: 100 }),
    speed: ParamDefinition.Numeric(1, { min: 1, max: 10, step: 1 }, { description: "How many times to rock from side to side." }),
    angle: ParamDefinition.Numeric(10, { min: 0, max: 180, step: 1 }, { description: "How many degrees to rotate in each direction." })
  }),
  initialState: (p, ctx) => ({ snapshot: ctx.canvas3d.camera.getSnapshot() }),
  getDuration: (p) => ({ kind: "fixed", durationMs: p.durationInMs }),
  teardown: (_, state, ctx) => {
    var _a;
    (_a = ctx.canvas3d) === null || _a === void 0 ? void 0 : _a.requestCameraReset({ snapshot: state.snapshot, durationMs: 0 });
  },
  async apply(animState, t, ctx) {
    var _a, _b;
    if (t.current === 0) {
      return { kind: "next", state: animState };
    }
    const snapshot = animState.snapshot;
    if (snapshot.radiusMax < 1e-4) {
      return { kind: "finished" };
    }
    const phase = t.animation ? ((_a = t.animation) === null || _a === void 0 ? void 0 : _a.currentFrame) / (t.animation.frameCount + 1) : clamp(t.current / ctx.params.durationInMs, 0, 1);
    const angle = Math.sin(phase * ctx.params.speed * Math.PI * 2) * degToRad(ctx.params.angle);
    Vec3.sub(_dir2, snapshot.position, snapshot.target);
    Vec3.normalize(_axis2, snapshot.up);
    Quat.setAxisAngle(_rot2, _axis2, angle);
    Vec3.transformQuat(_dir2, _dir2, _rot2);
    const position = Vec3.add(Vec3(), snapshot.target, _dir2);
    (_b = ctx.plugin.canvas3d) === null || _b === void 0 ? void 0 : _b.requestCameraReset({ snapshot: { ...snapshot, position }, durationMs: 0 });
    if (phase >= 0.99999) {
      return { kind: "finished" };
    }
    return { kind: "next", state: animState };
  }
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin/spec.js
var PluginSpec;
(function(PluginSpec2) {
  function Action(action, params) {
    return { action, customControl: params && params.customControl, autoUpdate: params && params.autoUpdate };
  }
  PluginSpec2.Action = Action;
  function Behavior(transformer, defaultParams = {}) {
    return { transformer, defaultParams };
  }
  PluginSpec2.Behavior = Behavior;
})(PluginSpec || (PluginSpec = {}));
var DefaultPluginSpec = () => ({
  actions: [
    PluginSpec.Action(StateActions.Structure.DownloadStructure),
    PluginSpec.Action(StateActions.Volume.DownloadDensity),
    PluginSpec.Action(StateActions.DataFormat.DownloadFile),
    PluginSpec.Action(StateActions.DataFormat.OpenFiles),
    PluginSpec.Action(StateActions.Structure.LoadTrajectory),
    PluginSpec.Action(StateActions.Structure.EnableModelCustomProps),
    PluginSpec.Action(StateActions.Structure.EnableStructureCustomProps),
    // Volume streaming
    PluginSpec.Action(InitVolumeStreaming),
    PluginSpec.Action(BoxifyVolumeStreaming),
    PluginSpec.Action(CreateVolumeStreamingBehavior),
    PluginSpec.Action(StateTransforms.Data.Download),
    PluginSpec.Action(StateTransforms.Data.ParseCif),
    PluginSpec.Action(StateTransforms.Data.ParseCcp4),
    PluginSpec.Action(StateTransforms.Data.ParseDsn6),
    PluginSpec.Action(StateTransforms.Model.TrajectoryFromMmCif),
    PluginSpec.Action(StateTransforms.Model.TrajectoryFromCifCore),
    PluginSpec.Action(StateTransforms.Model.TrajectoryFromPDB),
    PluginSpec.Action(StateTransforms.Model.TransformStructureConformation),
    PluginSpec.Action(StateTransforms.Model.StructureFromModel),
    PluginSpec.Action(StateTransforms.Model.StructureFromTrajectory),
    PluginSpec.Action(StateTransforms.Model.ModelFromTrajectory),
    PluginSpec.Action(StateTransforms.Model.StructureSelectionFromScript),
    PluginSpec.Action(StateTransforms.Representation.StructureRepresentation3D),
    PluginSpec.Action(StateTransforms.Representation.StructureSelectionsDistance3D),
    PluginSpec.Action(StateTransforms.Representation.StructureSelectionsAngle3D),
    PluginSpec.Action(StateTransforms.Representation.StructureSelectionsDihedral3D),
    PluginSpec.Action(StateTransforms.Representation.StructureSelectionsLabel3D),
    PluginSpec.Action(StateTransforms.Representation.StructureSelectionsOrientation3D),
    PluginSpec.Action(StateTransforms.Representation.ModelUnitcell3D),
    PluginSpec.Action(StateTransforms.Representation.StructureBoundingBox3D),
    PluginSpec.Action(StateTransforms.Representation.ExplodeStructureRepresentation3D),
    PluginSpec.Action(StateTransforms.Representation.SpinStructureRepresentation3D),
    PluginSpec.Action(StateTransforms.Representation.UnwindStructureAssemblyRepresentation3D),
    PluginSpec.Action(StateTransforms.Representation.OverpaintStructureRepresentation3DFromScript),
    PluginSpec.Action(StateTransforms.Representation.TransparencyStructureRepresentation3DFromScript),
    PluginSpec.Action(StateTransforms.Representation.ClippingStructureRepresentation3DFromScript),
    PluginSpec.Action(StateTransforms.Representation.SubstanceStructureRepresentation3DFromScript),
    PluginSpec.Action(StateTransforms.Representation.ThemeStrengthRepresentation3D),
    PluginSpec.Action(AssignColorVolume),
    PluginSpec.Action(StateTransforms.Volume.VolumeFromCcp4),
    PluginSpec.Action(StateTransforms.Volume.VolumeFromDsn6),
    PluginSpec.Action(StateTransforms.Volume.VolumeFromCube),
    PluginSpec.Action(StateTransforms.Volume.VolumeFromDx),
    PluginSpec.Action(StateTransforms.Representation.VolumeRepresentation3D)
  ],
  behaviors: [
    PluginSpec.Behavior(PluginBehaviors.Representation.HighlightLoci),
    PluginSpec.Behavior(PluginBehaviors.Representation.SelectLoci),
    PluginSpec.Behavior(PluginBehaviors.Representation.DefaultLociLabelProvider),
    PluginSpec.Behavior(PluginBehaviors.Representation.FocusLoci),
    PluginSpec.Behavior(PluginBehaviors.Camera.FocusLoci),
    PluginSpec.Behavior(PluginBehaviors.Camera.CameraAxisHelper),
    PluginSpec.Behavior(PluginBehaviors.Camera.CameraControls),
    PluginSpec.Behavior(StructureFocusRepresentation),
    PluginSpec.Behavior(PluginBehaviors.CustomProps.StructureInfo),
    PluginSpec.Behavior(PluginBehaviors.CustomProps.AccessibleSurfaceArea),
    PluginSpec.Behavior(PluginBehaviors.CustomProps.BestDatabaseSequenceMapping),
    PluginSpec.Behavior(PluginBehaviors.CustomProps.Interactions),
    PluginSpec.Behavior(PluginBehaviors.CustomProps.SecondaryStructure),
    PluginSpec.Behavior(PluginBehaviors.CustomProps.ValenceModel),
    PluginSpec.Behavior(PluginBehaviors.CustomProps.CrossLinkRestraint)
  ],
  animations: [
    AnimateModelIndex,
    AnimateCameraSpin,
    AnimateCameraRock,
    AnimateStateSnapshots,
    AnimateAssemblyUnwind,
    AnimateStructureSpin,
    AnimateStateInterpolation
  ]
});

export {
  PluginConfig,
  PluginConfigManager,
  InteractionsProvider,
  CylindersBuilder,
  LinkCylinderParams,
  LinkLineParams,
  EmptyLinkBuilderProps,
  LinkStyle,
  createLinkCylinderMesh,
  createLinkCylinderImpostors,
  createLinkLines,
  createStructureRepresentationParams,
  getStructureThemeTypes,
  createStructureColorThemeParams,
  createStructureSizeThemeParams,
  download,
  urlCombine,
  setSubtreeVisibility,
  SelectLoci,
  FocusLoci,
  BuiltInPluginBehaviors,
  StructureFocusRepresentation,
  StructureRepresentationPresetProvider,
  PresetStructureRepresentations,
  BuiltInTrajectoryFormats,
  getFileNameInfo,
  BuiltInTopologyFormats,
  BuiltInCoordinatesFormats,
  UpdateTrajectory,
  VolumeStreaming,
  getContourLevelEmdb,
  computeMarchingCubesMesh,
  computeMarchingCubesLines,
  extractIsosurface,
  PointsBuilder,
  VolumeRepresentationRegistry,
  InitVolumeStreaming,
  CreateVolumeStreamingBehavior,
  OpenFiles,
  PluginSpec,
  DefaultPluginSpec
};
//# sourceMappingURL=chunk-56E7FU5U.js.map
