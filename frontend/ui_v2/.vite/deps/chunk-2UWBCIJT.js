import {
  CreateVolumeStreamingBehavior,
  DefaultPluginSpec,
  VolumeStreaming,
  setSubtreeVisibility
} from "./chunk-56E7FU5U.js";
import {
  Grid,
  Script,
  StateSelection,
  Volume,
  normalizeWheel
} from "./chunk-CLY72GQO.js";
import {
  Asset,
  ParamDefinition,
  arrayMax,
  getPrecision,
  memoize1,
  memoizeLatest,
  toPrecision
} from "./chunk-HZ3UTCAK.js";
import {
  ColorNames
} from "./chunk-Y4JRF7OT.js";
import {
  Color,
  ColorListOptions,
  ColorListOptionsScale,
  ColorListOptionsSet,
  ColorSwatch,
  Mat4,
  Vec2,
  Vec3,
  camelCaseToWords,
  getColorListFromName,
  noop
} from "./chunk-TA3F3DCY.js";
import {
  require_jsx_runtime
} from "./chunk-7PELO4AO.js";
import {
  require_react
} from "./chunk-5VKIP5V5.js";
import {
  __toESM
} from "./chunk-WOOG5QLI.js";

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/custom/volume.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/base.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var React2 = __toESM(require_react());

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/common.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var React = __toESM(require_react());

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/icons.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
function Icon(props) {
  if (!props.svg)
    return null;
  return (0, import_jsx_runtime.jsx)("span", { className: `msp-icon msp-material-icon${props.inline ? " msp-icon-inline" : ""}`, title: props.title, style: props.style, children: (0, import_jsx_runtime.jsx)(props.svg, {}) });
}
var circleLeft = (0, import_jsx_runtime.jsx)("circle", { r: "6px", id: "circle-left", cy: "12px", cx: "8px", strokeWidth: "1px" });
var circleRight = (0, import_jsx_runtime.jsx)("circle", { r: "6px", id: "circle-right", cy: "12px", cx: "16px", strokeWidth: "1px" });
var _Union = (0, import_jsx_runtime.jsxs)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: [(0, import_jsx_runtime.jsxs)("defs", { children: [circleLeft, circleRight] }), (0, import_jsx_runtime.jsxs)("g", { children: [(0, import_jsx_runtime.jsx)("use", { href: "#circle-left", className: "msp-shape-filled" }), (0, import_jsx_runtime.jsx)("use", { href: "#circle-right", className: "msp-shape-filled" }), (0, import_jsx_runtime.jsx)("use", { href: "#circle-left", className: "msp-shape-empty" })] })] });
function UnionSvg() {
  return _Union;
}
var _Subtract = (0, import_jsx_runtime.jsxs)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: [(0, import_jsx_runtime.jsxs)("defs", { children: [circleLeft, circleRight, (0, import_jsx_runtime.jsxs)("mask", { id: "mask-left", children: [(0, import_jsx_runtime.jsx)("use", { href: "#circle-left", fill: "white", stroke: "white" }), (0, import_jsx_runtime.jsx)("use", { href: "#circle-right", fill: "black", strokeWidth: "0px", stroke: "white" })] })] }), (0, import_jsx_runtime.jsxs)("g", { children: [(0, import_jsx_runtime.jsx)("use", { href: "#circle-left", className: "msp-shape-filled", mask: "url(#mask-left)" }), (0, import_jsx_runtime.jsx)("use", { href: "#circle-right", className: "msp-shape-empty" })] })] });
function SubtractSvg() {
  return _Subtract;
}
var _Intersect = (0, import_jsx_runtime.jsxs)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: [(0, import_jsx_runtime.jsxs)("defs", { children: [circleLeft, circleRight, (0, import_jsx_runtime.jsx)("clipPath", { id: "clip-left", children: (0, import_jsx_runtime.jsx)("use", { href: "#circle-right" }) })] }), (0, import_jsx_runtime.jsxs)("g", { children: [(0, import_jsx_runtime.jsx)("use", { href: "#circle-left", className: "msp-shape-filled", clipPath: "url(#clip-left)" }), (0, import_jsx_runtime.jsx)("use", { href: "#circle-left", className: "msp-shape-empty" }), (0, import_jsx_runtime.jsx)("use", { href: "#circle-right", className: "msp-shape-empty" })] })] });
function IntersectSvg() {
  return _Intersect;
}
var _Set = (0, import_jsx_runtime.jsxs)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: [(0, import_jsx_runtime.jsxs)("defs", { children: [circleLeft, circleRight] }), (0, import_jsx_runtime.jsxs)("g", { children: [(0, import_jsx_runtime.jsx)("use", { href: "#circle-left", className: "msp-shape-empty" }), (0, import_jsx_runtime.jsx)("use", { href: "#circle-right", className: "msp-shape-filled" })] })] });
function SetSvg() {
  return _Set;
}
var _Molecule = (0, import_jsx_runtime.jsx)("svg", { width: "17px", height: "17px", viewBox: "0 0 299.463 299.463", strokeWidth: "6px", children: (0, import_jsx_runtime.jsx)("g", { children: (0, import_jsx_runtime.jsx)("path", { d: "M256.851,173.832v-48.201c22.916-4.918,34.151-30.668,22.556-50.771c-11.547-20.004-39.486-23.251-55.242-5.844 l-41.746-24.106C189.618,22.603,172.861,0,149.734,0c-23.132,0-39.881,22.609-32.685,44.911L75.305,69.016 C59.522,51.586,31.597,54.88,20.061,74.863c-11.63,20.163-0.298,45.862,22.557,50.769v48.2 c-22.821,4.898-34.195,30.591-22.556,50.771c11.529,19.972,39.454,23.285,55.242,5.845l41.746,24.106 c-7.199,22.308,9.559,44.911,32.685,44.911c23.132,0,39.88-22.609,32.685-44.911l41.745-24.106 c15.817,17.469,43.73,14.099,55.242-5.844c0,0,0-0.001,0.001-0.002c4.587-7.953,5.805-17.213,3.431-26.076 C279.392,185.657,269.129,176.461,256.851,173.832z M249.62,72.088c20.568,0,27.428,27.191,10.008,37.239 c-0.003,0.002-0.006,0.003-0.009,0.005c-10.04,5.81-22.85,1.762-27.877-8.475C225.206,87.548,234.938,72.088,249.62,72.088z M149.734,14.4c11.005,0,19.958,8.954,19.958,19.959c0,11.127-9.077,19.958-19.958,19.958c-10.95,0-19.958-8.9-19.958-19.958 C129.776,23.354,138.729,14.4,149.734,14.4z M39.84,109.328c-17.451-10.067-10.534-37.24,10.01-37.24 c15.311,0,24.922,16.653,17.251,29.942C61.681,111.397,49.517,114.925,39.84,109.328z M59.802,224.702 c-9.535,5.503-21.768,2.229-27.268-7.298c-7.639-13.242,1.887-29.945,17.236-29.945c0.013,0,0.027,0,0.04,0 C70.07,187.48,77.49,214.469,59.802,224.702z M149.734,285.062c-11.005,0-19.958-8.954-19.958-19.958 c0-11.127,9.077-19.958,19.958-19.958c10.954,0,19.958,8.903,19.958,19.958C169.693,276.109,160.74,285.062,149.734,285.062z M216.953,217.982l-41.727,24.095c-13.778-15.22-37.459-14.94-50.983,0l-41.728-24.096c6.196-19.289-5.541-39.835-25.498-44.149 V125.63c19.752-4.268,31.762-24.65,25.498-44.149l41.727-24.095c13.629,15.055,37.32,15.093,50.983,0l41.728,24.096 c-6.196,19.29,5.534,39.835,25.498,44.149v48.202C222.61,178.123,210.721,198.581,216.953,217.982z M266.935,217.404 c-5.501,9.528-17.732,12.802-27.261,7.302c-17.682-10.23-10.301-37.247,10.032-37.247 C264.984,187.459,274.602,204.112,266.935,217.404z" }) }) });
function MoleculeSvg() {
  return _Molecule;
}
var _CubeOutline = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "0.1px", children: (0, import_jsx_runtime.jsx)("path", { d: "M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" }) });
function CubeOutlineSvg() {
  return _CubeOutline;
}
var _CubeScan = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "0.1px", children: (0, import_jsx_runtime.jsx)("path", { d: "M17,22V20H20V17H22V20.5C22,20.89 21.84,21.24 21.54,21.54C21.24,21.84 20.89,22 20.5,22H17M7,22H3.5C3.11,22 2.76,21.84 2.46,21.54C2.16,21.24 2,20.89 2,20.5V17H4V20H7V22M17,2H20.5C20.89,2 21.24,2.16 21.54,2.46C21.84,2.76 22,3.11 22,3.5V7H20V4H17V2M7,2V4H4V7H2V3.5C2,3.11 2.16,2.76 2.46,2.46C2.76,2.16 3.11,2 3.5,2H7M13,17.25L17,14.95V10.36L13,12.66V17.25M12,10.92L16,8.63L12,6.28L8,8.63L12,10.92M7,14.95L11,17.25V12.66L7,10.36V14.95M18.23,7.59C18.73,7.91 19,8.34 19,8.91V15.23C19,15.8 18.73,16.23 18.23,16.55L12.75,19.73C12.25,20.05 11.75,20.05 11.25,19.73L5.77,16.55C5.27,16.23 5,15.8 5,15.23V8.91C5,8.34 5.27,7.91 5.77,7.59L11.25,4.41C11.5,4.28 11.75,4.22 12,4.22C12.25,4.22 12.5,4.28 12.75,4.41L18.23,7.59Z" }) });
var _CubeSend = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "0.1px", children: (0, import_jsx_runtime.jsx)("path", { d: "M16,4L9,8.04V15.96L16,20L23,15.96V8.04M16,6.31L19.8,8.5L16,10.69L12.21,8.5M0,7V9H7V7M11,10.11L15,12.42V17.11L11,14.81M21,10.11V14.81L17,17.11V12.42M2,11V13H7V11M4,15V17H7V15" }) });
var _CursorDefaultOutline = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M10.07,14.27C10.57,14.03 11.16,14.25 11.4,14.75L13.7,19.74L15.5,18.89L13.19,13.91C12.95,13.41 13.17,12.81 13.67,12.58L13.95,12.5L16.25,12.05L8,5.12V15.9L9.82,14.43L10.07,14.27M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z" }) });
function CursorDefaultOutlineSvg() {
  return _CursorDefaultOutline;
}
var _FileOutline = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "0.1px", children: (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" }) });
var _LightbulbOnOutline = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "0.1px", children: (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z" }) });
var _MagicWand = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z" }) });
function MagicWandSvg() {
  return _MagicWand;
}
var _PencilRuler = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "0.1px", children: (0, import_jsx_runtime.jsx)("path", { d: "M3 17.25V21H6.75L17.81 9.93L14.06 6.18L3 17.25M22.61 18.36L18.36 22.61L13.16 17.41L14.93 15.64L15.93 16.64L18.4 14.16L19.82 15.58L18.36 17L19.42 18L20.84 16.6L22.61 18.36M6.61 10.83L1.39 5.64L5.64 1.39L7.4 3.16L4.93 5.64L6 6.7L8.46 4.22L9.88 5.64L8.46 7.05L9.46 8.05L6.61 10.83M20.71 7C21.1 6.61 21.1 6 20.71 5.59L18.37 3.29C18 2.9 17.35 2.9 16.96 3.29L15.12 5.12L18.87 8.87L20.71 7Z" }) });
function PencilRulerSvg() {
  return _PencilRuler;
}
var _AccountTreeOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z" }) });
function AccountTreeOutlinedSvg() {
  return _AccountTreeOutlined;
}
var _Add = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }) });
function AddSvg() {
  return _Add;
}
var _ArrowDownward = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }) });
function ArrowDownwardSvg() {
  return _ArrowDownward;
}
var _ArrowDropDown = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M7 10l5 5 5-5z" }) });
function ArrowDropDownSvg() {
  return _ArrowDropDown;
}
var _ArrowRight = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M10 17l5-5-5-5v10z" }) });
function ArrowRightSvg() {
  return _ArrowRight;
}
var _ArrowUpward = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" }) });
function ArrowUpwardSvg() {
  return _ArrowUpward;
}
var _Autorenew = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" }) });
function AutorenewSvg() {
  return _Autorenew;
}
var _BlurOn = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" }) });
function BlurOnSvg() {
  return _BlurOn;
}
var _BookmarksOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z" }) });
function BookmarksOutlinedSvg() {
  return _BookmarksOutlined;
}
var _Brush = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.9959.9959 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" }) });
function BrushSvg() {
  return _Brush;
}
var _BuildOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M22.61 18.99l-9.08-9.08c.93-2.34.45-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11 6.08 7.52 2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.4-.38.4-1.01 0-1.41zm-3 1.6l-9.46-9.46c-.61.45-1.29.72-2 .82-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09 4.24-4.24-3.09-3.09c1.24-.07 2.49.37 3.44 1.31 1.08 1.08 1.49 2.57 1.24 3.96-.12.71-.42 1.37-.88 1.96l9.45 9.45-.88.89z" }) });
function BuildOutlinedSvg() {
  return _BuildOutlined;
}
var _Build = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" }) });
function BuildSvg() {
  return _Build;
}
var _CameraOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M14.25 2.26l-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-4.75-3.31-8.72-7.75-9.74zM19.41 9h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7zM13.1 4.08L10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4c.37 0 .74.03 1.1.08zM5.7 7.09L8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12c0-1.85.64-3.55 1.7-4.91zM4.59 15h7.98l-2.71 4.7c-2.4-.67-4.34-2.42-5.27-4.7zm6.31 4.91L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20c-.38 0-.74-.04-1.1-.09zm7.4-3l-4-6.91h5.43c.17.64.27 1.31.27 2 0 1.85-.64 3.55-1.7 4.91z" }) });
function CameraOutlinedSvg() {
  return _CameraOutlined;
}
var _Camera = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z" }) });
function CameraSvg() {
  return _Camera;
}
var _CancelOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" }) });
function CancelOutlinedSvg() {
  return _CancelOutlined;
}
var _Cancel = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }) });
function CancelSvg() {
  return _Cancel;
}
var _CenterFocusStrong = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z" }) });
function CenterFocusStrongSvg() {
  return _CenterFocusStrong;
}
var _Check = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) });
function CheckSvg() {
  return _Check;
}
var _Clear = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) });
function ClearSvg() {
  return _Clear;
}
var _Close = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) });
function CloseSvg() {
  return _Close;
}
var _CloudUpload = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" }) });
function CloudUploadSvg() {
  return _CloudUpload;
}
var _Code = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" }) });
function CodeSvg() {
  return _Code;
}
var _Copy = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z" }) });
function CopySvg() {
  return _Copy;
}
var _Crop = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z" }) });
function CropSvg() {
  return _Crop;
}
var _CropFree = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z" }) });
function CropFreeSvg() {
  return _CropFree;
}
var _CropOriginal = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" }) });
function CropOrginalSvg() {
  return _CropOriginal;
}
var _DeleteOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" }) });
function DeleteOutlinedSvg() {
  return _DeleteOutlined;
}
var _Delete = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }) });
var _Error = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }) });
function ErrorSvg() {
  return _Error;
}
var _Extension = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" }) });
var _FlipToFront = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "0.1px", children: (0, import_jsx_runtime.jsx)("path", { d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z" }) });
function FlipToFrontSvg() {
  return _FlipToFront;
}
var _Fullscreen = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }) });
function FullscreenSvg() {
  return _Fullscreen;
}
var _GetApp = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" }) });
function GetAppSvg() {
  return _GetApp;
}
var _HelpOutline = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" }) });
function HelpOutlineSvg() {
  return _HelpOutline;
}
var _HomeOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" }) });
function HomeOutlinedSvg() {
  return _HomeOutlined;
}
var _Launch = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }) });
var _LinearScale = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z" }) });
function LinearScaleSvg() {
  return _LinearScale;
}
var _MoreHoriz = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) });
function MoreHorizSvg() {
  return _MoreHoriz;
}
var _NavigateBefore = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) });
function NavigateBeforeSvg() {
  return _NavigateBefore;
}
var _NavigateNext = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) });
function NavigateNextSvg() {
  return _NavigateNext;
}
var _OpenInBrowser = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z" }) });
function OpenInBrowserSvg() {
  return _OpenInBrowser;
}
var _PlayArrow = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M8 5v14l11-7z" }) });
function PlayArrowSvg() {
  return _PlayArrow;
}
var _Refresh = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" }) });
function RefreshSvg() {
  return _Refresh;
}
var _Remove = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19 13H5v-2h14v2z" }) });
function RemoveSvg() {
  return _Remove;
}
var _Restore = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" }) });
function RestoreSvg() {
  return _Restore;
}
var _SaveOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", strokeWidth: "0.1px", children: (0, import_jsx_runtime.jsx)("path", { d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z" }) });
function SaveOutlinedSvg() {
  return _SaveOutlined;
}
var _ScatterPlot = (0, import_jsx_runtime.jsxs)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: [(0, import_jsx_runtime.jsx)("circle", { cx: "7", cy: "14", r: "3" }), (0, import_jsx_runtime.jsx)("circle", { cx: "11", cy: "6", r: "3" }), (0, import_jsx_runtime.jsx)("circle", { cx: "16.6", cy: "17.6", r: "3" })] });
function ScatterPlotSvg() {
  return _ScatterPlot;
}
var _Search = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }) });
var _SkipPrevious = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M6 6h2v12H6zm3.5 6l8.5 6V6z" }) });
function SkipPreviousSvg() {
  return _SkipPrevious;
}
var _Stop = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M6 6h12v12H6z" }) });
function StopSvg() {
  return _Stop;
}
var _SubscriptionsOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z" }) });
function SubscriptionsOutlinedSvg() {
  return _SubscriptionsOutlined;
}
var _SwapHoriz = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" }) });
function SwapHorizSvg() {
  return _SwapHoriz;
}
var _Tour = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M21 4H7V2H5v20h2v-8h14l-2-5zm-6 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2" }) });
var _Tune = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" }) });
function TuneSvg() {
  return _Tune;
}
var _VisibilityOffOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" }) });
var _TooltipText = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z" }) });
var _TooltipTextOutline = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" }) });
var _PlusBox = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z" }) });
var _MinusBox = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z" }) });
function VisibilityOffOutlinedSvg() {
  return _VisibilityOffOutlined;
}
var _VisibilityOutlined = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" }) });
function VisibilityOutlinedSvg() {
  return _VisibilityOutlined;
}
var _Warning = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }) });
function WarningSvg() {
  return _Warning;
}
var _ContentCut = (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", children: (0, import_jsx_runtime.jsx)("path", { d: "M 9.64 7.64 c 0.23 -0.5 0.36 -1.05 0.36 -1.64 c 0 -2.21 -1.79 -4 -4 -4 S 2 3.79 2 6 s 1.79 4 4 4 c 0.59 0 1.14 -0.13 1.64 -0.36 L 10 12 l -2.36 2.36 C 7.14 14.13 6.59 14 6 14 c -2.21 0 -4 1.79 -4 4 s 1.79 4 4 4 s 4 -1.79 4 -4 c 0 -0.59 -0.13 -1.14 -0.36 -1.64 L 12 14 l 7 7 h 3 v -1 L 9.64 7.64 Z M 6 8 c -1.1 0 -2 -0.89 -2 -2 s 0.9 -2 2 -2 s 2 0.89 2 2 s -0.9 2 -2 2 Z m 0 12 c -1.1 0 -2 -0.89 -2 -2 s 0.9 -2 2 -2 s 2 0.89 2 2 s -0.9 2 -2 2 Z m 6 -7.5 c -0.28 0 -0.5 -0.22 -0.5 -0.5 s 0.22 -0.5 0.5 -0.5 s 0.5 0.22 0.5 0.5 s -0.22 0.5 -0.5 0.5 Z M 19 3 l -6 6 l 2 2 l 7 -7 V 3 Z" }) });
var SelectionModeSvg = CursorDefaultOutlineSvg;
var SuperposeAtomsSvg = ScatterPlotSvg;
var SuperposeChainsSvg = LinearScaleSvg;
var SuperpositionSvg = FlipToFrontSvg;

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/common.js
var ControlGroup = class extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: !!this.props.initialExpanded };
    this.headerClicked = () => {
      if (this.props.onHeaderClick) {
        this.props.onHeaderClick();
      } else {
        this.setState({ isExpanded: !this.state.isExpanded });
      }
    };
  }
  render() {
    let groupClassName = this.props.hideOffset ? "msp-control-group-children" : "msp-control-group-children msp-control-offset";
    if (this.props.childrenClassName)
      groupClassName += " " + this.props.childrenClassName;
    return (0, import_jsx_runtime2.jsxs)("div", { className: "msp-control-group-wrapper", style: { position: "relative", marginTop: this.props.noTopMargin ? 0 : void 0 }, children: [(0, import_jsx_runtime2.jsx)("div", { className: "msp-control-group-header", style: { marginLeft: this.props.headerLeftMargin }, title: this.props.title, children: (0, import_jsx_runtime2.jsxs)(Button, { onClick: this.headerClicked, children: [!this.props.hideExpander && (0, import_jsx_runtime2.jsx)(Icon, { svg: this.state.isExpanded ? ArrowRightSvg : ArrowDropDownSvg }), this.props.topRightIcon && (0, import_jsx_runtime2.jsx)(Icon, { svg: this.props.topRightIcon, style: { position: "absolute", right: "2px", top: 0 } }), (0, import_jsx_runtime2.jsx)("b", { children: this.props.header })] }) }), this.state.isExpanded && (0, import_jsx_runtime2.jsx)("div", { className: groupClassName, style: { display: this.state.isExpanded ? "block" : "none", maxHeight: this.props.maxHeight, overflow: "hidden", overflowY: "auto" }, children: this.props.children })] });
  }
};
function _id(x) {
  return x;
}
var TextInput = class extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.input = React.createRef();
    this.delayHandle = void 0;
    this.pendingValue = void 0;
    this.state = { originalValue: "", value: "" };
    this.onBlur = () => {
      this.setState({ value: "" + this.state.originalValue });
      if (this.props.onBlur)
        this.props.onBlur();
    };
    this.raiseOnChange = () => {
      if (this.pendingValue === void 0)
        return;
      this.props.onChange(this.pendingValue);
      this.pendingValue = void 0;
    };
    this.onChange = (e) => {
      const value = e.target.value;
      const isInvalid = this.props.isValid && !this.props.isValid(value) || this.props.numeric && Number.isNaN(+value);
      if (isInvalid) {
        this.clearTimeout();
        this.setState({ value });
        return;
      }
      if (this.props.numeric) {
        this.setState({ value }, () => this.triggerChanged(value, +value));
      } else {
        const converted = (this.props.toValue || _id)(value);
        const formatted = (this.props.fromValue || _id)(converted);
        this.setState({ value: formatted }, () => this.triggerChanged(formatted, converted));
      }
    };
    this.onKeyUp = (e) => {
      if (e.charCode === 27 || e.keyCode === 27 || e.key === "Escape") {
        if (this.props.blurOnEscape && this.input.current) {
          this.input.current.blur();
        }
      }
    };
    this.onKeyPress = (e) => {
      if (e.keyCode === 13 || e.charCode === 13 || e.key === "Enter") {
        if (this.isPending) {
          this.clearTimeout();
          this.raiseOnChange();
        }
        if (this.props.blurOnEnter && this.input.current) {
          this.input.current.blur();
        }
        if (this.props.onEnter)
          this.props.onEnter();
      }
      e.stopPropagation();
    };
  }
  get isPending() {
    return typeof this.delayHandle !== "undefined";
  }
  clearTimeout() {
    if (this.isPending) {
      clearTimeout(this.delayHandle);
      this.delayHandle = void 0;
    }
  }
  triggerChanged(formatted, converted) {
    this.clearTimeout();
    if (formatted === this.state.originalValue)
      return;
    if (this.props.delayMs) {
      this.pendingValue = converted;
      this.delayHandle = setTimeout(this.raiseOnChange, this.props.delayMs);
    } else {
      this.props.onChange(converted);
    }
  }
  static getDerivedStateFromProps(props, state) {
    const value = props.fromValue ? props.fromValue(props.value) : props.value;
    if (value === state.originalValue)
      return null;
    return { originalValue: value, value };
  }
  render() {
    return (0, import_jsx_runtime2.jsx)("input", { type: "text", className: this.props.className, style: this.props.style, ref: this.input, onBlur: this.onBlur, value: this.state.value, placeholder: this.props.placeholder, onChange: this.onChange, onKeyPress: this.props.onEnter || this.props.blurOnEnter || this.props.blurOnEscape ? this.onKeyPress : void 0, onKeyDown: this.props.blurOnEscape ? this.onKeyUp : void 0, disabled: !!this.props.isDisabled });
  }
};
var ExpandableControlRow = class extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: false };
    this.toggleExpanded = () => this.setState({ isExpanded: !this.state.isExpanded });
  }
  render() {
    const { label, pivot, controls } = this.props;
    return (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [(0, import_jsx_runtime2.jsx)(ControlRow, { label: (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [label, (0, import_jsx_runtime2.jsx)("button", { className: "msp-btn-link msp-btn-icon msp-control-group-expander", onClick: this.toggleExpanded, title: `${this.state.isExpanded ? "Less" : "More"} options`, style: { background: "transparent", textAlign: "left", padding: "0" }, children: (0, import_jsx_runtime2.jsx)(Icon, { svg: this.state.isExpanded ? RemoveSvg : AddSvg, style: { display: "inline-block" } }) })] }), control: pivot, children: this.props.colorStripe && (0, import_jsx_runtime2.jsx)("div", { className: "msp-expandable-group-color-stripe", style: { backgroundColor: Color.toStyle(this.props.colorStripe) } }) }), this.state.isExpanded && (0, import_jsx_runtime2.jsx)("div", { className: "msp-control-offset", children: controls })] });
  }
};
function SectionHeader(props) {
  return (0, import_jsx_runtime2.jsxs)("div", { className: `msp-section-header${props.accent ? " msp-transform-header-brand-" + props.accent : ""}`, children: [props.icon && (0, import_jsx_runtime2.jsx)(Icon, { svg: props.icon }), props.title, " ", (0, import_jsx_runtime2.jsx)("small", { children: props.desc })] });
}
function Button(props) {
  let className = "msp-btn";
  if (!props.inline)
    className += " msp-btn-block";
  if (props.noOverflow)
    className += " msp-no-overflow";
  if (props.flex)
    className += " msp-flex-item";
  if (props.commit === "on" || props.commit)
    className += " msp-btn-commit msp-btn-commit-on";
  if (props.commit === "off")
    className += " msp-btn-commit msp-btn-commit-off";
  if (!props.children)
    className += " msp-btn-childless";
  if (props.className)
    className += " " + props.className;
  let style = void 0;
  if (props.flex) {
    if (typeof props.flex === "number")
      style = { flex: `0 0 ${props.flex}px`, padding: 0, maxWidth: `${props.flex}px` };
    else if (typeof props.flex === "string")
      style = { flex: `0 0 ${props.flex}`, padding: 0, maxWidth: props.flex };
  }
  if (props.style) {
    if (style)
      Object.assign(style, props.style);
    else
      style = props.style;
  }
  return (0, import_jsx_runtime2.jsxs)("button", { onClick: props.onClick, title: props.title, disabled: props.disabled, style, className, "data-id": props["data-id"], "data-color": props["data-color"], onContextMenu: props.onContextMenu, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, children: [props.icon && (0, import_jsx_runtime2.jsx)(Icon, { svg: props.icon }), props.children] });
}
function IconButton(props) {
  let className = `msp-btn msp-btn-icon${props.small ? "-small" : ""}${props.className ? " " + props.className : ""}`;
  if (typeof props.toggleState !== "undefined") {
    className += ` msp-btn-link-toggle-${props.toggleState ? "on" : "off"}`;
  }
  if (props.transparent) {
    className += " msp-transparent-bg";
  }
  let style = void 0;
  if (props.flex) {
    if (typeof props.flex === "boolean")
      style = { flex: "0 0 32px", padding: 0 };
    else if (typeof props.flex === "number")
      style = { flex: `0 0 ${props.flex}px`, padding: 0, maxWidth: `${props.flex}px` };
    else
      style = { flex: `0 0 ${props.flex}`, padding: 0, maxWidth: props.flex };
  }
  if (props.style) {
    if (style)
      Object.assign(style, props.style);
    else
      style = props.style;
  }
  return (0, import_jsx_runtime2.jsxs)("button", { className, onClick: props.onClick, title: props.title, disabled: props.disabled, "data-id": props["data-id"], style, children: [props.svg && (0, import_jsx_runtime2.jsx)(Icon, { svg: props.svg }), props.extraContent] });
}
var ToggleButton = class extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.onClick = (e) => {
      e.currentTarget.blur();
      this.props.toggle();
    };
  }
  render() {
    const props = this.props;
    const label = props.label;
    const className = props.isSelected ? `${props.className || ""} msp-control-current` : props.className;
    return (0, import_jsx_runtime2.jsx)(Button, { icon: this.props.icon, onClick: this.onClick, title: this.props.title, inline: this.props.inline, disabled: props.disabled, style: props.style, className, children: label && this.props.isSelected ? (0, import_jsx_runtime2.jsx)("b", { children: label }) : label });
  }
};
var ExpandGroup = class extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: !!this.props.initiallyExpanded };
    this.toggleExpanded = () => this.setState({ isExpanded: !this.state.isExpanded });
  }
  render() {
    return (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [(0, import_jsx_runtime2.jsx)("div", { className: "msp-control-group-header", style: { marginTop: this.props.marginTop !== void 0 ? this.props.marginTop : "1px", marginLeft: this.props.headerLeftMargin }, children: (0, import_jsx_runtime2.jsxs)("button", { className: "msp-btn msp-form-control msp-btn-block", onClick: this.toggleExpanded, style: this.props.headerStyle, children: [(0, import_jsx_runtime2.jsx)(Icon, { svg: this.state.isExpanded ? ArrowDropDownSvg : ArrowRightSvg }), this.props.header] }) }), this.state.isExpanded && (this.props.noOffset ? this.props.children : (0, import_jsx_runtime2.jsx)("div", { className: this.props.accent ? "msp-accent-offset" : "msp-control-offset", children: this.props.children }))] });
  }
};
function ControlRow(props) {
  let className = "msp-control-row";
  if (props.className)
    className += " " + props.className;
  return (0, import_jsx_runtime2.jsxs)("div", { className, children: [(0, import_jsx_runtime2.jsx)("span", { className: "msp-control-row-label", title: props.title, children: props.label }), (0, import_jsx_runtime2.jsx)("div", { className: "msp-control-row-ctrl", children: props.control }), props.children] });
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/base.js
var PluginReactContext = React2.createContext(void 0);
var PluginUIComponent = class extends React2.Component {
  subscribe(obs, action) {
    if (typeof this.subs === "undefined")
      this.subs = [];
    this.subs.push(obs.subscribe(action));
  }
  componentWillUnmount() {
    if (!this.subs)
      return;
    for (const s of this.subs)
      s.unsubscribe();
    this.subs = void 0;
  }
  constructor(props, context) {
    super(props);
    this.subs = void 0;
    this.plugin = context;
    if (this.init)
      this.init();
  }
};
PluginUIComponent.contextType = PluginReactContext;
var PurePluginUIComponent = class extends React2.PureComponent {
  subscribe(obs, action) {
    if (typeof this.subs === "undefined")
      this.subs = [];
    this.subs.push(obs.subscribe(action));
  }
  componentWillUnmount() {
    if (!this.subs)
      return;
    for (const s of this.subs)
      s.unsubscribe();
    this.subs = void 0;
  }
  constructor(props, context) {
    super(props, context);
    this.subs = void 0;
    this.plugin = context;
    if (this.init)
      this.init();
  }
};
PurePluginUIComponent.contextType = PluginReactContext;
var CollapsableControls = class extends PluginUIComponent {
  toggleCollapsed() {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }
  componentDidUpdate(prevProps) {
    if (this.props.initiallyCollapsed !== void 0 && prevProps.initiallyCollapsed !== this.props.initiallyCollapsed) {
      this.setState({ isCollapsed: this.props.initiallyCollapsed });
    }
  }
  render() {
    var _a;
    if (this.state.isHidden)
      return null;
    const divid = this.state.header.toLowerCase().replace(/\s/g, "");
    const wrapClass = this.state.isCollapsed ? "msp-transform-wrapper msp-transform-wrapper-collapsed" : "msp-transform-wrapper";
    return (0, import_jsx_runtime3.jsxs)("div", { className: wrapClass, children: [(0, import_jsx_runtime3.jsx)("div", { id: divid, className: "msp-transform-header", children: (0, import_jsx_runtime3.jsxs)(Button, { icon: this.state.brand ? void 0 : this.state.isCollapsed ? ArrowRightSvg : ArrowDropDownSvg, noOverflow: true, onClick: () => this.toggleCollapsed(), className: this.state.brand ? `msp-transform-header-brand msp-transform-header-brand-${this.state.brand.accent}` : void 0, title: `Click to ${this.state.isCollapsed ? "expand" : "collapse"}`, children: [(0, import_jsx_runtime3.jsx)(Icon, { svg: (_a = this.state.brand) === null || _a === void 0 ? void 0 : _a.svg, inline: true }), this.state.header, (0, import_jsx_runtime3.jsx)("small", { style: { margin: "0 6px" }, children: this.state.isCollapsed ? "" : this.state.description })] }) }), !this.state.isCollapsed && this.renderControls()] });
  }
  constructor(props, context) {
    super(props, context);
    const state = this.defaultState();
    if (props.initiallyCollapsed !== void 0)
      state.isCollapsed = props.initiallyCollapsed;
    if (props.header !== void 0)
      state.header = props.header;
    this.state = state;
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/parameters.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var React9 = __toESM(require_react());

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/action-menu.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var React3 = __toESM(require_react());
var ActionMenu = class extends React3.PureComponent {
  constructor() {
    super(...arguments);
    this.hide = () => this.props.onSelect(void 0);
  }
  render() {
    const cmd = this.props;
    const section = (0, import_jsx_runtime4.jsx)(Section, { items: cmd.items, onSelect: cmd.onSelect, current: cmd.current, multiselect: this.props.multiselect, noOffset: this.props.noOffset, noAccent: this.props.noAccent });
    return (0, import_jsx_runtime4.jsxs)("div", { className: `msp-action-menu-options${cmd.header ? "" : " msp-action-menu-options-no-header"}`, children: [cmd.header && (0, import_jsx_runtime4.jsx)(ControlGroup, { header: cmd.header, title: cmd.title, initialExpanded: true, hideExpander: true, hideOffset: true, onHeaderClick: this.hide, topRightIcon: CloseSvg, children: section }), !cmd.header && section] });
  }
};
(function(ActionMenu2) {
  function Header(label, options) {
    return options ? { kind: "header", label, ...options } : { kind: "header", label };
  }
  ActionMenu2.Header = Header;
  function Item(label, value, options) {
    return { kind: "item", label, value, ...options };
  }
  ActionMenu2.Item = Item;
  function createItems(xs, params) {
    const { label, value, category, selected, icon, addOn, description } = params || {};
    let cats = void 0;
    const items = [];
    for (let i = 0; i < xs.length; i++) {
      const x = xs[i];
      if ((params === null || params === void 0 ? void 0 : params.filter) && !params.filter(x))
        continue;
      const catName = category === null || category === void 0 ? void 0 : category(x);
      const l = label ? label(x) : "" + x;
      const v = value ? value(x) : x;
      const d = description ? description(x) : typeof x === "string" ? x : void 0;
      let cat;
      if (!!catName) {
        if (!cats)
          cats = /* @__PURE__ */ new Map();
        cat = cats.get(catName);
        if (!cat) {
          cat = [ActionMenu2.Header(catName, { description: catName })];
          cats.set(catName, cat);
          items.push(cat);
        }
      } else {
        cat = items;
      }
      const ao = addOn === null || addOn === void 0 ? void 0 : addOn(x);
      cat.push({ kind: "item", label: l, value: v, icon: icon ? icon(x) : void 0, selected: selected ? selected(x) : void 0, addOn: ao, description: d });
    }
    return items;
  }
  ActionMenu2.createItems = createItems;
  const _selectOptions = { value: (o) => o[0], label: (o) => o[1], category: (o) => o[2] };
  function createItemsFromSelectOptions(options, params) {
    return createItems(options, params ? { ..._selectOptions, ...params } : _selectOptions);
  }
  ActionMenu2.createItemsFromSelectOptions = createItemsFromSelectOptions;
  function hasSelectedItem(items) {
    if (isHeader(items))
      return false;
    if (isItem(items))
      return !!items.selected;
    for (const s of items) {
      const found = hasSelectedItem(s);
      if (found)
        return true;
    }
    return false;
  }
  ActionMenu2.hasSelectedItem = hasSelectedItem;
  function findItem(items, value) {
    if (isHeader(items))
      return;
    if (isItem(items))
      return items.value === value ? items : void 0;
    for (const s of items) {
      const found = findItem(s, value);
      if (found)
        return found;
    }
  }
  ActionMenu2.findItem = findItem;
  function getFirstItem(items) {
    if (isHeader(items))
      return;
    if (isItem(items))
      return items;
    for (const s of items) {
      const found = getFirstItem(s);
      if (found)
        return found;
    }
  }
  ActionMenu2.getFirstItem = getFirstItem;
})(ActionMenu || (ActionMenu = {}));
var Section = class _Section extends React3.PureComponent {
  constructor() {
    super(...arguments);
    this.state = _Section.createState(this.props);
    this.toggleExpanded = (e) => {
      this.setState({ isExpanded: !this.state.isExpanded });
      e.currentTarget.blur();
    };
    this.selectAll = () => {
      const items = collectItems(this.props.items, []).filter((i) => !i.selected);
      this.props.onSelect(items);
    };
    this.selectNone = () => {
      const items = collectItems(this.props.items, []).filter((i) => !!i.selected);
      this.props.onSelect(items);
    };
  }
  static createState(props, isExpanded) {
    const header = isItems(props.items) && isHeader(props.items[0]) ? props.items[0] : void 0;
    const hasCurrent = (header === null || header === void 0 ? void 0 : header.isIndependent) ? false : props.multiselect ? ActionMenu.hasSelectedItem(props.items) : !!props.current && !!ActionMenu.findItem(props.items, props.current.value) || ActionMenu.hasSelectedItem(props.items);
    return {
      header,
      hasCurrent,
      isExpanded: hasCurrent || (isExpanded !== null && isExpanded !== void 0 ? isExpanded : !!(header === null || header === void 0 ? void 0 : header.initiallyExpanded))
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items || this.props.current !== prevProps.current) {
      const isExpanded = isItems(this.props.items) && isItems(prevProps.items) && isHeader(this.props.items[0]) && isHeader(prevProps.items[0]) && this.props.items[0].label === prevProps.items[0].label ? this.state.isExpanded : void 0;
      this.setState(_Section.createState(this.props, isExpanded));
    }
  }
  get multiselectHeader() {
    const { header, hasCurrent } = this.state;
    return (0, import_jsx_runtime4.jsxs)("div", { className: "msp-flex-row msp-control-group-header", children: [(0, import_jsx_runtime4.jsx)(Button, { icon: this.state.isExpanded ? ArrowDropDownSvg : ArrowRightSvg, flex: true, noOverflow: true, onClick: this.toggleExpanded, title: `Click to ${this.state.isExpanded ? "collapse" : "expand"}.${(header === null || header === void 0 ? void 0 : header.description) ? ` ${header === null || header === void 0 ? void 0 : header.description}` : ""}`, children: hasCurrent ? (0, import_jsx_runtime4.jsx)("b", { children: header === null || header === void 0 ? void 0 : header.label }) : header === null || header === void 0 ? void 0 : header.label }), (0, import_jsx_runtime4.jsx)(Button, { icon: CheckSvg, flex: true, onClick: this.selectAll, style: { flex: "0 0 50px", textAlign: "right" }, children: "All" }), (0, import_jsx_runtime4.jsx)(Button, { icon: CloseSvg, flex: true, onClick: this.selectNone, style: { flex: "0 0 50px", textAlign: "right" }, children: "None" })] });
  }
  get basicHeader() {
    const { header, hasCurrent } = this.state;
    return (0, import_jsx_runtime4.jsx)("div", { className: "msp-control-group-header", style: { marginTop: "1px" }, children: (0, import_jsx_runtime4.jsx)(Button, { noOverflow: true, icon: this.state.isExpanded ? ArrowDropDownSvg : ArrowRightSvg, onClick: this.toggleExpanded, title: `Click to ${this.state.isExpanded ? "collapse" : "expand"}. ${(header === null || header === void 0 ? void 0 : header.description) ? header === null || header === void 0 ? void 0 : header.description : ""}`, children: hasCurrent ? (0, import_jsx_runtime4.jsx)("b", { children: header === null || header === void 0 ? void 0 : header.label }) : header === null || header === void 0 ? void 0 : header.label }) });
  }
  render() {
    const { items, onSelect, current } = this.props;
    if (isHeader(items))
      return null;
    if (isItem(items))
      return (0, import_jsx_runtime4.jsx)(Action, { item: items, onSelect, current, multiselect: this.props.multiselect });
    const { header } = this.state;
    return (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [header && (this.props.multiselect && this.state.isExpanded ? this.multiselectHeader : this.basicHeader), (0, import_jsx_runtime4.jsx)("div", { className: this.props.noOffset ? void 0 : this.props.noAccent ? "msp-control-offset" : "msp-accent-offset", children: (!header || this.state.isExpanded) && items.map((x, i) => {
      if (isHeader(x))
        return null;
      if (isItem(x))
        return (0, import_jsx_runtime4.jsx)(Action, { item: x, onSelect, current, multiselect: this.props.multiselect }, i);
      return (0, import_jsx_runtime4.jsx)(_Section, { items: x, onSelect, current, multiselect: this.props.multiselect, noAccent: true }, i);
    }) })] });
  }
};
var Action = ({ item, onSelect, current, multiselect }) => {
  const isCurrent = current === item;
  const style = item.addOn ? { position: "relative" } : void 0;
  return (0, import_jsx_runtime4.jsxs)(Button, { icon: item.icon, noOverflow: true, className: "msp-action-menu-button", onClick: (e) => onSelect(multiselect ? [item] : item, e), disabled: item.disabled, style, title: item.description, children: [isCurrent || item.selected ? (0, import_jsx_runtime4.jsx)("b", { children: item.label }) : item.label, item.addOn] });
};
function isItems(x) {
  return !!x && Array.isArray(x);
}
function isItem(x) {
  const v = x;
  return v && v.kind === "item";
}
function isHeader(x) {
  const v = x;
  return v && v.kind === "header";
}
function collectItems(items, target) {
  if (isHeader(items))
    return target;
  if (isItem(items)) {
    target.push(items);
    return target;
  }
  for (const i of items) {
    collectItems(i, target);
  }
  return target;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/color.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var React4 = __toESM(require_react());

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/color/swatches.js
var DefaultColorSwatch = ColorSwatch([
  ["black", 0],
  ["gray", 8421504],
  ["white", 16777215],
  ["red", 13840661],
  ["orange", 14840576],
  ["yellow", 16565248],
  ["green", 6863872],
  ["cyan", 1484197],
  ["blue", 40160],
  ["purple", 8086783],
  ["magenta", 16394495],
  ["violet", 8200583]
]);

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/color.js
var CombinedColorControl = class extends React4.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isExpanded: !!this.props.param.isExpanded || !!this.props.hideNameRow,
      lightness: 0
    };
    this.toggleExpanded = (e) => {
      this.setState({ isExpanded: !this.state.isExpanded });
      e.currentTarget.blur();
    };
    this.onClickSwatch = (e) => {
      const value = Color.fromHexString(e.currentTarget.getAttribute("data-color") || "0");
      if (value !== this.props.value) {
        if (!this.props.param.isExpanded)
          this.setState({ isExpanded: false });
        this.update(value);
      }
    };
    this.onR = (v) => {
      const [, g, b] = Color.toRgb(this.props.value);
      const value = Color.fromRgb(v, g, b);
      if (value !== this.props.value)
        this.update(value);
    };
    this.onG = (v) => {
      const [r, , b] = Color.toRgb(this.props.value);
      const value = Color.fromRgb(r, v, b);
      if (value !== this.props.value)
        this.update(value);
    };
    this.onB = (v) => {
      const [r, g] = Color.toRgb(this.props.value);
      const value = Color.fromRgb(r, g, v);
      if (value !== this.props.value)
        this.update(value);
    };
    this.onRGB = (e) => {
      const value = Color.fromHexStyle(e.currentTarget.value || "0");
      if (value !== this.props.value)
        this.update(value);
    };
    this.onLighten = () => {
      this.update(Color.lighten(this.props.value, 0.1));
    };
    this.onDarken = () => {
      this.update(Color.darken(this.props.value, 0.1));
    };
  }
  update(value) {
    this.props.onChange({ param: this.props.param, name: this.props.name, value });
  }
  swatch() {
    return (0, import_jsx_runtime5.jsx)("div", { className: "msp-combined-color-swatch", children: DefaultColorSwatch.map((c) => (0, import_jsx_runtime5.jsx)(Button, { inline: true, "data-color": c[1], onClick: this.onClickSwatch, style: { background: Color.toStyle(c[1]) } }, c[1])) });
  }
  render() {
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    const [r, g, b] = Color.toRgb(this.props.value);
    const inner = (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [this.swatch(), (0, import_jsx_runtime5.jsx)(ControlRow, { label: "RGB", className: "msp-control-label-short", control: (0, import_jsx_runtime5.jsxs)("div", { style: { display: "flex", textAlignLast: "center", left: "80px" }, children: [(0, import_jsx_runtime5.jsx)(TextInput, { onChange: this.onR, numeric: true, value: r, delayMs: 250, style: { order: 1, flex: "1 1 auto", minWidth: 0 }, className: "msp-form-control", onEnter: this.props.onEnter, blurOnEnter: true, blurOnEscape: true }), (0, import_jsx_runtime5.jsx)(TextInput, { onChange: this.onG, numeric: true, value: g, delayMs: 250, style: { order: 2, flex: "1 1 auto", minWidth: 0 }, className: "msp-form-control", onEnter: this.props.onEnter, blurOnEnter: true, blurOnEscape: true }), (0, import_jsx_runtime5.jsx)(TextInput, { onChange: this.onB, numeric: true, value: b, delayMs: 250, style: { order: 3, flex: "1 1 auto", minWidth: 0 }, className: "msp-form-control", onEnter: this.props.onEnter, blurOnEnter: true, blurOnEscape: true }), (0, import_jsx_runtime5.jsx)("input", { onInput: this.onRGB, type: "color", value: Color.toHexStyle(this.props.value), style: { order: 4, flex: "1 1 auto", minWidth: "32px", width: "32px", height: "32px", padding: "0 2px 0 2px", background: "none", border: "none", cursor: "pointer" } })] }) }), (0, import_jsx_runtime5.jsxs)("div", { style: { display: "flex", textAlignLast: "center" }, children: [(0, import_jsx_runtime5.jsx)(Button, { onClick: this.onLighten, style: { order: 1, flex: "1 1 auto", minWidth: 0 }, className: "msp-form-control", children: "Lighten" }), (0, import_jsx_runtime5.jsx)(Button, { onClick: this.onDarken, style: { order: 1, flex: "1 1 auto", minWidth: 0 }, className: "msp-form-control", children: "Darken" })] })] });
    if (this.props.hideNameRow) {
      return inner;
    }
    return (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [(0, import_jsx_runtime5.jsx)(ControlRow, { title: this.props.param.description, label, control: (0, import_jsx_runtime5.jsx)(Button, { onClick: this.toggleExpanded, inline: true, className: "msp-combined-color-button", style: { background: Color.toStyle(this.props.value) } }) }), this.state.isExpanded && (0, import_jsx_runtime5.jsx)("div", { className: "msp-control-offset", children: inner })] });
  }
};
var DefaultColorSwatchMap = function() {
  const map = /* @__PURE__ */ new Map();
  for (const v of DefaultColorSwatch)
    map.set(v[1], v[0]);
  return map;
}();

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/legend.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var React5 = __toESM(require_react());
function legendFor(legend) {
  switch (legend.kind) {
    case "scale-legend":
      return ScaleLegend;
    case "table-legend":
      return TableLegend;
    default:
      const _ = legend;
      console.warn(`${_} has no associated UI component`);
      return void 0;
  }
}
var ScaleLegend = class extends React5.PureComponent {
  render() {
    const { legend } = this.props;
    const colors = legend.colors.map((c) => Array.isArray(c) ? `${Color.toStyle(c[0])} ${100 * c[1]}%` : Color.toStyle(c)).join(", ");
    return (0, import_jsx_runtime6.jsx)("div", { className: "msp-scale-legend", children: (0, import_jsx_runtime6.jsxs)("div", { style: { background: `linear-gradient(to right, ${colors})` }, children: [(0, import_jsx_runtime6.jsx)("span", { style: { float: "left" }, children: legend.minLabel }), (0, import_jsx_runtime6.jsx)("span", { style: { float: "right" }, children: legend.maxLabel })] }) });
  }
};
var TableLegend = class extends React5.PureComponent {
  render() {
    const { legend } = this.props;
    return (0, import_jsx_runtime6.jsx)("div", { className: "msp-table-legend", children: legend.table.map((value, i) => {
      const [name, color] = value;
      return (0, import_jsx_runtime6.jsxs)("div", { children: [(0, import_jsx_runtime6.jsx)("div", { className: "msp-table-legend-color", style: { backgroundColor: Color.toStyle(color) } }), (0, import_jsx_runtime6.jsx)("div", { className: "msp-table-legend-text", children: name })] }, i);
    }) });
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/line-graph/line-graph-component.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/line-graph/point-component.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var React6 = __toESM(require_react());
var PointComponent = class extends React6.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.deletePoint = this.deletePoint.bind(this);
  }
  handleHover() {
    this.setState({ show: true });
    const point = Vec2.create(this.props.nX, this.props.nY);
    this.props.onmouseover(point);
  }
  handleHoverOff() {
    this.setState({ show: false });
    this.props.onmouseover(void 0);
  }
  deletePoint() {
    this.props.delete(this.props.id);
  }
  render() {
    return [
      (0, import_jsx_runtime7.jsx)("circle", { r: "10", id: `${this.props.id}`, cx: this.props.x, cy: this.props.y, onClick: this.props.onclick, onDoubleClick: this.props.delete(this.props.id), onMouseEnter: this.handleHover, onMouseLeave: this.handleHoverOff, onMouseDown: this.props.onmousedown, fill: "black" }, `${this.props.id}circle`)
    ];
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/line-graph/line-graph-component.js
var React7 = __toESM(require_react());
var LineGraphComponent = class extends React7.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = (event) => {
    };
    this.handleKeyUp = (event) => {
    };
    this.handleClick = (id) => (event) => {
    };
    this.handleMouseDown = (id) => (event) => {
      if (id === 0 || id === this.state.points.length - 1) {
        return;
      }
      if (this.state.canSelectMultiple) {
        return;
      }
      const copyPoint = this.normalizePoint(Vec2.create(this.state.points[id][0], this.state.points[id][1]));
      this.ghostPoints.push(document.createElementNS(this.namespace, "circle"));
      this.ghostPoints[0].setAttribute("r", "10");
      this.ghostPoints[0].setAttribute("fill", "orange");
      this.ghostPoints[0].setAttribute("cx", `${copyPoint[0]}`);
      this.ghostPoints[0].setAttribute("cy", `${copyPoint[1]}`);
      this.ghostPoints[0].setAttribute("style", "display: none");
      this.gElement.appendChild(this.ghostPoints[0]);
      this.updatedX = copyPoint[0];
      this.updatedY = copyPoint[1];
      this.selected = [id];
    };
    this.deletePoint = (i) => (event) => {
      if (i === 0 || i === this.state.points.length - 1) {
        return;
      }
      const points = this.state.points.filter((_, j) => j !== i);
      points.sort((a, b) => {
        if (a[0] === b[0]) {
          if (a[0] === 0) {
            return a[1] - b[1];
          }
          if (a[1] === 1) {
            return b[1] - a[1];
          }
          return a[1] - b[1];
        }
        return a[0] - b[0];
      });
      this.setState({ points });
      this.change(points);
      event.stopPropagation();
    };
    this.myRef = React7.createRef();
    this.state = {
      points: [
        Vec2.create(0, 0),
        Vec2.create(1, 0)
      ],
      copyPoint: void 0,
      canSelectMultiple: false
    };
    this.height = 400;
    this.width = 600;
    this.padding = 70;
    this.selected = void 0;
    this.ghostPoints = [];
    this.namespace = "http://www.w3.org/2000/svg";
    for (const point of this.props.data) {
      this.state.points.push(point);
    }
    this.state.points.sort((a, b) => {
      if (a[0] === b[0]) {
        if (a[0] === 0) {
          return a[1] - b[1];
        }
        if (a[1] === 1) {
          return b[1] - a[1];
        }
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
    this.handleDrag = this.handleDrag.bind(this);
    this.handleMultipleDrag = this.handleMultipleDrag.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.refCallBack = this.refCallBack.bind(this);
    this.handlePointUpdate = this.handlePointUpdate.bind(this);
    this.change = this.change.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  render() {
    const points = this.renderPoints();
    const lines = this.renderLines();
    const histogram = this.renderHistogram();
    return [
      (0, import_jsx_runtime8.jsx)("div", { children: (0, import_jsx_runtime8.jsxs)("svg", { className: "msp-canvas", ref: this.refCallBack, viewBox: `0 0 ${this.width + this.padding} ${this.height + this.padding}`, onMouseMove: this.handleDrag, onMouseUp: this.handlePointUpdate, onMouseLeave: this.handleLeave, onMouseEnter: this.handleEnter, tabIndex: 0, onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp, onDoubleClick: this.handleDoubleClick, children: [(0, import_jsx_runtime8.jsxs)("g", { stroke: "black", fill: "black", children: [histogram, lines, points] }), (0, import_jsx_runtime8.jsx)("g", { className: "ghost-points", stroke: "black", fill: "black" })] }) }, "LineGraph"),
      (0, import_jsx_runtime8.jsx)("div", { id: "modal-root" }, "modal")
    ];
  }
  componentDidMount() {
    this.gElement = document.getElementsByClassName("ghost-points")[0];
  }
  change(points) {
    const copyPoints = points.slice();
    copyPoints.shift();
    copyPoints.pop();
    this.props.onChange(copyPoints);
  }
  handleDrag(event) {
    if (this.selected === void 0) {
      return;
    }
    const pt = this.myRef.createSVGPoint();
    let updatedCopyPoint;
    const padding = this.padding / 2;
    pt.x = event.clientX;
    pt.y = event.clientY;
    const svgP = pt.matrixTransform(this.myRef.getScreenCTM().inverse());
    updatedCopyPoint = Vec2.create(svgP.x, svgP.y);
    if ((svgP.x < padding || svgP.x > this.width + padding) && (svgP.y > this.height + padding || svgP.y < padding)) {
      updatedCopyPoint = Vec2.create(this.updatedX, this.updatedY);
    } else if (svgP.x < padding) {
      updatedCopyPoint = Vec2.create(padding, svgP.y);
    } else if (svgP.x > this.width + padding) {
      updatedCopyPoint = Vec2.create(this.width + padding, svgP.y);
    } else if (svgP.y > this.height + padding) {
      updatedCopyPoint = Vec2.create(svgP.x, this.height + padding);
    } else if (svgP.y < padding) {
      updatedCopyPoint = Vec2.create(svgP.x, padding);
    } else {
      updatedCopyPoint = Vec2.create(svgP.x, svgP.y);
    }
    this.updatedX = updatedCopyPoint[0];
    this.updatedY = updatedCopyPoint[1];
    const unNormalizePoint = this.unNormalizePoint(updatedCopyPoint);
    this.ghostPoints[0].setAttribute("style", "display: visible");
    this.ghostPoints[0].setAttribute("cx", `${updatedCopyPoint[0]}`);
    this.ghostPoints[0].setAttribute("cy", `${updatedCopyPoint[1]}`);
    this.props.onDrag(unNormalizePoint);
  }
  handleMultipleDrag() {
  }
  handlePointUpdate(event) {
    const selected = this.selected;
    if (this.state.canSelectMultiple) {
      return;
    }
    if (selected === void 0 || selected[0] === 0 || selected[0] === this.state.points.length - 1) {
      this.setState({
        copyPoint: void 0
      });
      return;
    }
    this.selected = void 0;
    const updatedPoint = this.unNormalizePoint(Vec2.create(this.updatedX, this.updatedY));
    const points = this.state.points.filter((_, i) => i !== selected[0]);
    points.push(updatedPoint);
    points.sort((a, b) => {
      if (a[0] === b[0]) {
        if (a[0] === 0) {
          return a[1] - b[1];
        }
        if (a[1] === 1) {
          return b[1] - a[1];
        }
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
    this.setState({
      points
    });
    this.change(points);
    this.gElement.innerHTML = "";
    this.ghostPoints = [];
    document.removeEventListener("mousemove", this.handleDrag, true);
    document.removeEventListener("mouseup", this.handlePointUpdate, true);
  }
  handleDoubleClick(event) {
    const pt = this.myRef.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const svgP = pt.matrixTransform(this.myRef.getScreenCTM().inverse());
    const points = this.state.points;
    const padding = this.padding / 2;
    if (svgP.x < padding || svgP.x > this.width + padding || svgP.y > this.height + padding || svgP.y < this.padding / 2) {
      return;
    }
    const newPoint = this.unNormalizePoint(Vec2.create(svgP.x, svgP.y));
    points.push(newPoint);
    points.sort((a, b) => {
      if (a[0] === b[0]) {
        if (a[0] === 0) {
          return a[1] - b[1];
        }
        if (a[1] === 1) {
          return b[1] - a[1];
        }
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
    this.setState({ points });
    this.change(points);
  }
  handleLeave() {
    if (this.selected === void 0) {
      return;
    }
    document.addEventListener("mousemove", this.handleDrag, true);
    document.addEventListener("mouseup", this.handlePointUpdate, true);
  }
  handleEnter() {
    document.removeEventListener("mousemove", this.handleDrag, true);
    document.removeEventListener("mouseup", this.handlePointUpdate, true);
  }
  normalizePoint(point) {
    const offset = this.padding / 2;
    const maxX = this.width + offset;
    const maxY = this.height + offset;
    const normalizedX = point[0] * (maxX - offset) + offset;
    const normalizedY = point[1] * (maxY - offset) + offset;
    const reverseY = this.height + this.padding - normalizedY;
    const newPoint = Vec2.create(normalizedX, reverseY);
    return newPoint;
  }
  unNormalizePoint(point) {
    const min = this.padding / 2;
    const maxX = this.width + min;
    const maxY = this.height + min;
    const unNormalizedX = (point[0] - min) / (maxX - min);
    const unNormalizedY = (this.height + this.padding - point[1] - min) / (maxY - min);
    return Vec2.create(unNormalizedX, unNormalizedY);
  }
  refCallBack(element) {
    if (element) {
      this.myRef = element;
    }
  }
  renderHistogram() {
    if (!this.props.volume)
      return null;
    const histogram = Grid.getHistogram(this.props.volume.grid, 40);
    const bars = [];
    const N = histogram.counts.length;
    const w = this.width / N;
    const offset = this.padding / 2;
    const max = arrayMax(histogram.counts) || 1;
    for (let i = 0; i < N; i++) {
      const x = this.width * i / (N - 1) + offset;
      const y1 = this.height + offset;
      const y2 = this.height * (1 - histogram.counts[i] / max) + offset;
      bars.push((0, import_jsx_runtime8.jsx)("line", { x1: x, x2: x, y1, y2, stroke: "#ded9ca", strokeWidth: w }, `histogram${i}`));
    }
    return bars;
  }
  renderPoints() {
    const points = [];
    let point;
    for (let i = 0; i < this.state.points.length; i++) {
      if (i !== 0 && i !== this.state.points.length - 1) {
        point = this.normalizePoint(this.state.points[i]);
        points.push((0, import_jsx_runtime8.jsx)(PointComponent, { id: i, x: point[0], y: point[1], nX: this.state.points[i][0], nY: this.state.points[i][1], selected: false, delete: this.deletePoint, onmouseover: this.props.onHover, onmousedown: this.handleMouseDown(i), onclick: this.handleClick(i) }, i));
      }
    }
    return points;
  }
  renderLines() {
    const points = [];
    const lines = [];
    let maxX;
    let maxY;
    let normalizedX;
    let normalizedY;
    let reverseY;
    const o = this.padding / 2;
    for (const point of this.state.points) {
      maxX = this.width + o;
      maxY = this.height + this.padding;
      normalizedX = point[0] * (maxX - o) + o;
      normalizedY = point[1] * (maxY - o) + o;
      reverseY = this.height + this.padding - normalizedY;
      points.push(Vec2.create(normalizedX, reverseY));
    }
    const data = points;
    const size = data.length;
    for (let i = 0; i < size - 1; i++) {
      const x1 = data[i][0];
      const y1 = data[i][1];
      const x2 = data[i + 1][0];
      const y2 = data[i + 1][1];
      lines.push((0, import_jsx_runtime8.jsx)("line", { x1, x2, y1, y2, stroke: "#cec9ba", strokeWidth: "5" }, `lineOf${i}`));
    }
    return lines;
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/slider.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var React8 = __toESM(require_react());
var Slider = class extends React8.Component {
  constructor() {
    super(...arguments);
    this.state = { isChanging: false, current: 0 };
    this.begin = () => {
      this.setState({ isChanging: true });
    };
    this.end = (v) => {
      this.setState({ isChanging: false });
      this.props.onChange(v);
    };
    this.updateCurrent = (current) => {
      var _a, _b;
      this.setState({ current });
      (_b = (_a = this.props).onChangeImmediate) === null || _b === void 0 ? void 0 : _b.call(_a, current);
    };
    this.updateManually = (v) => {
      this.setState({ isChanging: true });
      let n = v;
      if (this.props.step === 1)
        n = Math.round(n);
      if (n < this.props.min)
        n = this.props.min;
      if (n > this.props.max)
        n = this.props.max;
      this.setState({ current: n, isChanging: true });
    };
    this.onManualBlur = () => {
      this.setState({ isChanging: false });
      this.props.onChange(this.state.current);
    };
    this.onMouseWheel = (e) => {
      const { dx, dy, dz } = normalizeWheel(e);
      const sign = (dx >= 0 ? 1 : -1) * (dy >= 0 ? 1 : -1) * (dz >= 0 ? 1 : -1);
      const shift = e.getModifierState("Shift");
      const delta = sign * (this.props.max - this.props.min) / (shift ? 100 : 25);
      this.updateCurrent(this.state.current + delta);
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.isChanging || props.value === state.current)
      return null;
    return { current: props.value };
  }
  render() {
    let step = this.props.step;
    if (step === void 0)
      step = 1;
    return (0, import_jsx_runtime9.jsxs)("div", { className: "msp-slider", children: [(0, import_jsx_runtime9.jsx)("div", { children: (0, import_jsx_runtime9.jsx)(SliderBase, { min: this.props.min, max: this.props.max, step, value: this.state.current, disabled: this.props.disabled, onBeforeChange: this.begin, onWheel: this.onMouseWheel, onChange: this.updateCurrent, onAfterChange: this.end }) }), (0, import_jsx_runtime9.jsx)("div", { children: (0, import_jsx_runtime9.jsx)(TextInput, { numeric: true, delayMs: 50, value: this.state.current, blurOnEnter: true, onBlur: this.onManualBlur, isDisabled: this.props.disabled, onChange: this.updateManually }) })] });
  }
};
var Slider2 = class extends React8.Component {
  constructor() {
    super(...arguments);
    this.state = { isChanging: false, current: [0, 1] };
    this.begin = () => {
      this.setState({ isChanging: true });
    };
    this.end = (v) => {
      this.setState({ isChanging: false });
      this.props.onChange(v);
    };
    this.updateCurrent = (current) => {
      this.setState({ current });
    };
    this.updateMax = (v) => {
      let n = v;
      if (this.props.step === 1)
        n = Math.round(n);
      if (n < this.state.current[0])
        n = this.state.current[0];
      else if (n < this.props.min)
        n = this.props.min;
      if (n > this.props.max)
        n = this.props.max;
      this.props.onChange([this.state.current[0], n]);
    };
    this.updateMin = (v) => {
      let n = v;
      if (this.props.step === 1)
        n = Math.round(n);
      if (n < this.props.min)
        n = this.props.min;
      if (n > this.state.current[1])
        n = this.state.current[1];
      else if (n > this.props.max)
        n = this.props.max;
      this.props.onChange([n, this.state.current[1]]);
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.isChanging || props.value[0] === state.current[0] && props.value[1] === state.current[1])
      return null;
    return { current: props.value };
  }
  render() {
    let step = this.props.step;
    if (step === void 0)
      step = 1;
    return (0, import_jsx_runtime9.jsxs)("div", { className: "msp-slider2", children: [(0, import_jsx_runtime9.jsx)("div", { children: (0, import_jsx_runtime9.jsx)(TextInput, { numeric: true, delayMs: 50, value: this.state.current[0], onEnter: this.props.onEnter, blurOnEnter: true, isDisabled: this.props.disabled, onChange: this.updateMin }) }), (0, import_jsx_runtime9.jsx)("div", { children: (0, import_jsx_runtime9.jsx)(SliderBase, { min: this.props.min, max: this.props.max, step, value: this.state.current, disabled: this.props.disabled, onBeforeChange: this.begin, onChange: this.updateCurrent, onAfterChange: this.end, range: true, allowCross: true }) }), (0, import_jsx_runtime9.jsx)("div", { children: (0, import_jsx_runtime9.jsx)(TextInput, { numeric: true, delayMs: 50, value: this.state.current[1], onEnter: this.props.onEnter, blurOnEnter: true, isDisabled: this.props.disabled, onChange: this.updateMax }) })] });
  }
};
function classNames(_classes) {
  const classes = [];
  const hasOwn = {}.hasOwnProperty;
  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];
    if (!arg)
      continue;
    const argType = typeof arg;
    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(classNames.apply(null, arg));
    } else if (argType === "object") {
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(" ");
}
function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === "touchend" && e.touches.length > 0;
}
function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}
function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}
function getHandleCenterPosition(vertical, handle) {
  const coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
}
function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
var Handle = class extends React8.Component {
  render() {
    const { className, tipFormatter, vertical, offset, value, index } = this.props;
    const style = vertical ? { bottom: `${offset}%` } : { left: `${offset}%` };
    return (0, import_jsx_runtime9.jsx)("div", { className, style, title: tipFormatter(value, index) });
  }
};
var SliderBase = class extends React8.Component {
  constructor(props) {
    super(props);
    this.sliderElement = React8.createRef();
    this.handleElements = [];
    this.dragOffset = 0;
    this.startPosition = 0;
    this.startValue = 0;
    this._getPointsCache = void 0;
    this.onMouseDown = (e) => {
      if (e.button !== 0) {
        return;
      }
      let position = getMousePosition(this.props.vertical, e);
      if (!this.isEventFromHandle(e)) {
        this.dragOffset = 0;
      } else {
        const handlePosition = getHandleCenterPosition(this.props.vertical, e.target);
        this.dragOffset = position - handlePosition;
        position = handlePosition;
      }
      this.onStart(position);
      this.addDocumentEvents("mouse");
      pauseEvent(e);
    };
    this.onTouchMove = (e) => {
      if (isNotTouchEvent(e)) {
        this.end("touch");
        return;
      }
      const position = getTouchPosition(this.props.vertical, e);
      this.onMove(e, position - this.dragOffset);
    };
    this.onTouchStart = (e) => {
      if (isNotTouchEvent(e))
        return;
      let position = getTouchPosition(this.props.vertical, e);
      if (!this.isEventFromHandle(e)) {
        this.dragOffset = 0;
      } else {
        const handlePosition = getHandleCenterPosition(this.props.vertical, e.target);
        this.dragOffset = position - handlePosition;
        position = handlePosition;
      }
      this.onStart(position);
      this.addDocumentEvents("touch");
      pauseEvent(e);
    };
    this.eventHandlers = {
      "touchmove": (e) => this.onTouchMove(e),
      "touchend": (e) => this.end("touch"),
      "mousemove": (e) => this.onMouseMove(e),
      "mouseup": (e) => this.end("mouse")
    };
    this.calcOffset = (value2) => {
      const { min: min2, max: max2 } = this.props;
      const ratio = (value2 - min2) / (max2 - min2);
      return ratio * 100;
    };
    const { range, min, max } = props;
    const initialValue = range ? Array.apply(null, Array(+range + 1)).map(() => min) : min;
    const defaultValue = "defaultValue" in props ? props.defaultValue : initialValue;
    const value = props.value !== void 0 ? props.value : defaultValue;
    const bounds = (range ? value : [min, value]).map((v) => this.trimAlignValue(v));
    let recent;
    if (range && bounds[0] === bounds[bounds.length - 1] && bounds[0] === max) {
      recent = 0;
    } else {
      recent = bounds.length - 1;
    }
    this.state = {
      handle: null,
      recent,
      bounds
    };
  }
  componentDidUpdate(prevProps) {
    if (!("value" in this.props || "min" in this.props || "max" in this.props))
      return;
    const { bounds } = this.state;
    if (prevProps.range) {
      const value = this.props.value || bounds;
      const nextBounds = value.map((v) => this.trimAlignValue(v, this.props));
      if (nextBounds.every((v, i) => v === bounds[i]))
        return;
      this.setState({ bounds: nextBounds });
      if (bounds.some((v) => this.isValueOutOfBounds(v, this.props))) {
        this.props.onChange(nextBounds);
      }
    } else {
      const value = this.props.value !== void 0 ? this.props.value : bounds[1];
      const nextValue = this.trimAlignValue(value, this.props);
      if (nextValue === bounds[1] && bounds[0] === prevProps.min)
        return;
      this.setState({ bounds: [prevProps.min, nextValue] });
      if (this.isValueOutOfBounds(bounds[1], this.props)) {
        this.props.onChange(nextValue);
      }
    }
  }
  onChange(state) {
    const props = this.props;
    const isNotControlled = !("value" in props);
    if (isNotControlled) {
      this.setState(state);
    } else if (state.handle !== void 0) {
      this.setState({ handle: state.handle });
    }
    const data = { ...this.state, ...state };
    const changedValue = props.range ? data.bounds : data.bounds[1];
    props.onChange(changedValue);
  }
  onMouseMove(e) {
    const position = getMousePosition(this.props.vertical, e);
    this.onMove(e, position - this.dragOffset);
  }
  onMove(e, position) {
    pauseEvent(e);
    const props = this.props;
    const state = this.state;
    let diffPosition = position - this.startPosition;
    diffPosition = this.props.vertical ? -diffPosition : diffPosition;
    const diffValue = diffPosition / this.getSliderLength() * (props.max - props.min);
    const value = this.trimAlignValue(this.startValue + diffValue);
    const oldValue = state.bounds[state.handle];
    if (value === oldValue)
      return;
    const nextBounds = [...state.bounds];
    nextBounds[state.handle] = value;
    let nextHandle = state.handle;
    if (!!props.pushable) {
      const originalValue = state.bounds[nextHandle];
      this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
    } else if (props.allowCross) {
      nextBounds.sort((a, b) => a - b);
      nextHandle = nextBounds.indexOf(value);
    }
    this.onChange({
      handle: nextHandle,
      bounds: nextBounds
    });
  }
  onStart(position) {
    const props = this.props;
    props.onBeforeChange(this.getValue());
    const value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;
    const state = this.state;
    const { bounds } = state;
    let valueNeedChanging = 1;
    if (this.props.range) {
      let closestBound = 0;
      for (let i = 1; i < bounds.length - 1; ++i) {
        if (value > bounds[i]) {
          closestBound = i;
        }
      }
      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound = closestBound + 1;
      }
      valueNeedChanging = closestBound;
      const isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];
      if (isAtTheSamePoint) {
        valueNeedChanging = state.recent;
      }
      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        valueNeedChanging = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }
    }
    this.setState({
      handle: valueNeedChanging,
      recent: valueNeedChanging
    });
    const oldValue = state.bounds[valueNeedChanging];
    if (value === oldValue)
      return;
    const nextBounds = [...state.bounds];
    nextBounds[valueNeedChanging] = value;
    this.onChange({ bounds: nextBounds });
  }
  /**
   * Returns an array of possible slider points, taking into account both
   * `marks` and `step`. The result is cached.
   */
  getPoints() {
    const { marks, step, min, max } = this.props;
    const cache = this._getPointsCache;
    if (!cache || cache.marks !== marks || cache.step !== step) {
      const pointsObject = { ...marks };
      if (step !== null) {
        for (let point = min; point <= max; point += step) {
          pointsObject[point] = point;
        }
      }
      const points = Object.keys(pointsObject).map(parseFloat);
      points.sort((a, b) => a - b);
      this._getPointsCache = { marks, step, points };
    }
    return this._getPointsCache.points;
  }
  getPrecision(step) {
    const stepString = step.toString();
    let precision = 0;
    if (stepString.indexOf(".") >= 0) {
      precision = stepString.length - stepString.indexOf(".") - 1;
    }
    return precision;
  }
  getSliderLength() {
    const slider = this.sliderElement.current;
    if (!slider) {
      return 0;
    }
    return this.props.vertical ? slider.clientHeight : slider.clientWidth;
  }
  getSliderStart() {
    const slider = this.sliderElement.current;
    const rect = slider.getBoundingClientRect();
    return this.props.vertical ? rect.top : rect.left;
  }
  getValue() {
    const { bounds } = this.state;
    return this.props.range ? bounds : bounds[1];
  }
  addDocumentEvents(type) {
    if (type === "touch") {
      document.addEventListener("touchmove", this.eventHandlers.touchmove);
      document.addEventListener("touchend", this.eventHandlers.touchend);
    } else if (type === "mouse") {
      document.addEventListener("mousemove", this.eventHandlers.mousemove);
      document.addEventListener("mouseup", this.eventHandlers.mouseup);
    }
  }
  calcValue(offset) {
    const { vertical, min, max } = this.props;
    const ratio = Math.abs(offset / this.getSliderLength());
    const value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
    return value;
  }
  calcValueByPos(position) {
    const pixelOffset = position - this.getSliderStart();
    const nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
    return nextValue;
  }
  end(type) {
    this.removeEvents(type);
    this.props.onAfterChange(this.getValue());
    this.setState({ handle: null });
  }
  isEventFromHandle(e) {
    for (const h of this.handleElements) {
      if (h.current === e.target)
        return true;
    }
    return false;
  }
  isValueOutOfBounds(value, props) {
    return value < props.min || value > props.max;
  }
  pushHandle(bounds, handle, direction, amount) {
    const originalValue = bounds[handle];
    let currentValue = bounds[handle];
    while (direction * (currentValue - originalValue) < amount) {
      if (!this.pushHandleOnePoint(bounds, handle, direction)) {
        bounds[handle] = originalValue;
        return false;
      }
      currentValue = bounds[handle];
    }
    return true;
  }
  pushHandleOnePoint(bounds, handle, direction) {
    const points = this.getPoints();
    const pointIndex = points.indexOf(bounds[handle]);
    const nextPointIndex = pointIndex + direction;
    if (nextPointIndex >= points.length || nextPointIndex < 0) {
      return false;
    }
    const nextHandle = handle + direction;
    const nextValue = points[nextPointIndex];
    const { pushable: threshold } = this.props;
    const diffToNext = direction * (bounds[nextHandle] - nextValue);
    if (!this.pushHandle(bounds, nextHandle, direction, +threshold - diffToNext)) {
      return false;
    }
    bounds[handle] = nextValue;
    return true;
  }
  pushSurroundingHandles(bounds, handle, originalValue) {
    const { pushable: threshold } = this.props;
    const value = bounds[handle];
    let direction = 0;
    if (bounds[handle + 1] - value < +threshold) {
      direction = 1;
    } else if (value - bounds[handle - 1] < +threshold) {
      direction = -1;
    }
    if (direction === 0) {
      return;
    }
    const nextHandle = handle + direction;
    const diffToNext = direction * (bounds[nextHandle] - value);
    if (!this.pushHandle(bounds, nextHandle, direction, +threshold - diffToNext)) {
      bounds[handle] = originalValue;
    }
  }
  removeEvents(type) {
    if (type === "touch") {
      document.removeEventListener("touchmove", this.eventHandlers.touchmove);
      document.removeEventListener("touchend", this.eventHandlers.touchend);
    } else if (type === "mouse") {
      document.removeEventListener("mousemove", this.eventHandlers.mousemove);
      document.removeEventListener("mouseup", this.eventHandlers.mouseup);
    }
  }
  trimAlignValue(v, props) {
    const { handle, bounds } = this.state || {};
    const { marks, step, min, max, allowCross } = { ...this.props, ...props || {} };
    let val = v;
    if (val <= min) {
      val = min;
    }
    if (val >= max) {
      val = max;
    }
    if (!allowCross && handle != null && handle > 0 && val <= bounds[handle - 1]) {
      val = bounds[handle - 1];
    }
    if (!allowCross && handle != null && handle < bounds.length - 1 && val >= bounds[handle + 1]) {
      val = bounds[handle + 1];
    }
    const points = Object.keys(marks).map(parseFloat);
    if (step !== null) {
      const closestStep = Math.round((val - min) / step) * step + min;
      points.push(closestStep);
    }
    const diffs = points.map((point) => Math.abs(val - point));
    const closestPoint = points[diffs.indexOf(Math.min.apply(Math, diffs))];
    return step !== null ? parseFloat(closestPoint.toFixed(this.getPrecision(step))) : closestPoint;
  }
  render() {
    const { handle, bounds } = this.state;
    const { className, prefixCls, disabled, vertical, range, step, marks, tipFormatter } = this.props;
    const customHandle = this.props.handle;
    const offsets = bounds.map(this.calcOffset);
    const handleClassName = `${prefixCls}-handle`;
    const handlesClassNames = bounds.map((v, i) => classNames({
      [handleClassName]: true,
      [`${handleClassName}-${i + 1}`]: true,
      [`${handleClassName}-lower`]: i === 0,
      [`${handleClassName}-upper`]: i === bounds.length - 1
    }));
    const isNoTip = step === null || tipFormatter === null;
    const commonHandleProps = {
      prefixCls,
      noTip: isNoTip,
      tipFormatter,
      vertical
    };
    if (this.handleElements.length !== bounds.length) {
      this.handleElements = [];
      for (let i = 0; i < bounds.length; i++)
        this.handleElements.push(React8.createRef());
    }
    const handles = bounds.map((v, i) => React8.cloneElement(customHandle, {
      ...commonHandleProps,
      className: handlesClassNames[i],
      value: v,
      offset: offsets[i],
      dragging: handle === i,
      index: i,
      key: i,
      ref: this.handleElements[i]
    }));
    if (!range) {
      handles.shift();
    }
    const sliderClassName = classNames({
      [prefixCls]: true,
      [`${prefixCls}-with-marks`]: Object.keys(marks).length,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-vertical`]: this.props.vertical,
      [className]: !!className
    });
    return (0, import_jsx_runtime9.jsxs)("div", { ref: this.sliderElement, className: sliderClassName, onTouchStart: disabled ? noop : this.onTouchStart, onMouseDown: disabled ? noop : this.onMouseDown, onWheel: disabled ? noop : this.props.onWheel, children: [(0, import_jsx_runtime9.jsx)("div", { className: `${prefixCls}-rail` }), handles] });
  }
};
SliderBase.defaultProps = {
  prefixCls: "msp-slider-base",
  className: "",
  min: 0,
  max: 100,
  step: 1,
  marks: {},
  handle: (0, import_jsx_runtime9.jsx)(Handle, { className: "", vertical: false, offset: 0, tipFormatter: (v) => v, value: 0, index: 0 }),
  onBeforeChange: noop,
  onChange: noop,
  onAfterChange: noop,
  tipFormatter: (value, index) => value,
  disabled: false,
  range: false,
  vertical: false,
  allowCross: true,
  pushable: false
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/controls/parameters.js
var ParameterControls = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.onChange = (params) => {
      var _a, _b;
      (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, params, this.props.values);
      if (this.props.onChangeValues) {
        const values = { ...this.props.values, [params.name]: params.value };
        this.props.onChangeValues(values, this.props.values);
      }
    };
    this.paramGroups = memoizeLatest((params) => classifyParams(params));
  }
  renderGroup(group) {
    var _a;
    if (group.length === 0)
      return null;
    const values = this.props.values;
    let ctrls = null;
    let category = void 0;
    for (const [key, p, Control] of group) {
      if ((_a = p.hideIf) === null || _a === void 0 ? void 0 : _a.call(p, values))
        continue;
      if (!ctrls)
        ctrls = [];
      category = p.category;
      ctrls.push((0, import_jsx_runtime10.jsx)(Control, { param: p, onChange: this.onChange, onEnter: this.props.onEnter, isDisabled: this.props.isDisabled, name: key, value: values[key] }, key));
    }
    if (!ctrls)
      return null;
    if (category) {
      return [(0, import_jsx_runtime10.jsx)(ExpandGroup, { header: category, children: ctrls }, category)];
    }
    return ctrls;
  }
  renderPart(groups) {
    let parts = null;
    for (const g of groups) {
      const ctrls = this.renderGroup(g);
      if (!ctrls)
        continue;
      if (!parts)
        parts = [];
      for (const c of ctrls)
        parts.push(c);
    }
    return parts;
  }
  render() {
    const groups = this.paramGroups(this.props.params);
    const essentials = this.renderPart(groups.essentials);
    const advanced = this.renderPart(groups.advanced);
    if (essentials && advanced) {
      return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [essentials, (0, import_jsx_runtime10.jsx)(ExpandGroup, { header: "Advanced Options", children: advanced })] });
    } else if (essentials) {
      return essentials;
    } else {
      return advanced;
    }
  }
};
var ParameterMappingControl = class extends PluginUIComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isDisabled: false
    };
    this.setSettings = (p, old) => {
      const values = { ...old, [p.name]: p.value };
      const t = this.props.mapping.update(values, this.plugin);
      this.props.mapping.apply(t, this.plugin);
    };
  }
  componentDidMount() {
    this.subscribe(this.plugin.state.data.behaviors.isUpdating, (v) => {
      this.setState({ isDisabled: v });
    });
  }
  render() {
    const t = this.props.mapping.getTarget(this.plugin);
    const values = this.props.mapping.getValues(t, this.plugin);
    const params = this.props.mapping.params(this.plugin);
    return (0, import_jsx_runtime10.jsx)(ParameterControls, { params, values, onChange: this.setSettings, isDisabled: this.state.isDisabled });
  }
};
function classifyParams(params) {
  function addParam(k, p, group) {
    const ctrl = controlFor(p);
    if (!ctrl)
      return;
    if (!p.category)
      group.params[0].push([k, p, ctrl]);
    else {
      if (!group.map)
        group.map = /* @__PURE__ */ new Map();
      let c = group.map.get(p.category);
      if (!c) {
        c = [];
        group.map.set(p.category, c);
        group.params.push(c);
      }
      c.push([k, p, ctrl]);
    }
  }
  function sortGroups(x, y) {
    const a = x[0], b = y[0];
    if (!a || !a[1].category)
      return -1;
    if (!b || !b[1].category)
      return 1;
    return a[1].category < b[1].category ? -1 : 1;
  }
  const keys = Object.keys(params);
  const essentials = { params: [[]], map: void 0 };
  const advanced = { params: [[]], map: void 0 };
  for (const k of keys) {
    const p = params[k];
    if (p.isHidden)
      continue;
    if (p.isEssential)
      addParam(k, p, essentials);
    else
      addParam(k, p, advanced);
  }
  essentials.params.sort(sortGroups);
  advanced.params.sort(sortGroups);
  return { essentials: essentials.params, advanced: advanced.params };
}
function controlFor(param) {
  switch (param.type) {
    case "value":
      return void 0;
    case "boolean":
      return BoolControl;
    case "number":
      return typeof param.min !== "undefined" && typeof param.max !== "undefined" ? NumberRangeControl : NumberInputControl;
    case "converted":
      return ConvertedControl;
    case "conditioned":
      return ConditionedControl;
    case "multi-select":
      return MultiSelectControl;
    case "color":
      return CombinedColorControl;
    case "color-list":
      return param.offsets ? OffsetColorListControl : ColorListControl;
    case "vec3":
      return Vec3Control;
    case "mat4":
      return Mat4Control;
    case "url":
      return UrlControl;
    case "file":
      return FileControl;
    case "file-list":
      return FileListControl;
    case "select":
      return SelectControl;
    case "value-ref":
      return ValueRefControl;
    case "data-ref":
      return void 0;
    case "text":
      return TextControl;
    case "interval":
      return typeof param.min !== "undefined" && typeof param.max !== "undefined" ? BoundedIntervalControl : IntervalControl;
    case "group":
      return GroupControl;
    case "mapped":
      return MappedControl;
    case "line-graph":
      return LineGraphControl;
    case "script":
      return ScriptControl;
    case "object-list":
      return ObjectListControl;
    default:
      const _ = param;
      console.warn(`${_} has no associated UI component`);
      return void 0;
  }
}
var ParamHelp = class extends React9.PureComponent {
  render() {
    const { legend, description } = this.props;
    const Legend = legend && legendFor(legend);
    return (0, import_jsx_runtime10.jsx)("div", { className: "msp-help-text", children: (0, import_jsx_runtime10.jsxs)("div", { children: [(0, import_jsx_runtime10.jsxs)("div", { className: "msp-help-description", children: [(0, import_jsx_runtime10.jsx)(Icon, { svg: HelpOutlineSvg, inline: true }), description] }), Legend && (0, import_jsx_runtime10.jsx)("div", { className: "msp-help-legend", children: (0, import_jsx_runtime10.jsx)(Legend, { legend }) })] }) });
  }
};
function renderSimple(options) {
  const { props, state, control, toggleHelp, addOn } = options;
  const _className = [];
  if (props.param.shortLabel)
    _className.push("msp-control-label-short");
  if (props.param.twoColumns)
    _className.push("msp-control-col-2");
  if (props.param.multiline)
    _className.push("msp-control-twoline");
  const className = _className.join(" ");
  const label = props.param.label || camelCaseToWords(props.name);
  const help = props.param.help ? props.param.help(props.value) : { description: props.param.description, legend: props.param.legend };
  const hasHelp = help.description || help.legend;
  const desc = label + (hasHelp ? ". Click for help." : "");
  return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsx)(ControlRow, { className, title: desc, label: (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [label, hasHelp && (0, import_jsx_runtime10.jsx)(ToggleParamHelpButton, { show: state.showHelp, toggle: toggleHelp, title: desc })] }), control }), hasHelp && state.showHelp && (0, import_jsx_runtime10.jsx)("div", { className: "msp-control-offset", children: (0, import_jsx_runtime10.jsx)(ParamHelp, { legend: help.legend, description: help.description }) }), addOn] });
}
function ToggleParamHelpButton({ show, toggle, title }) {
  return (0, import_jsx_runtime10.jsx)("button", { className: "msp-help msp-btn-link msp-btn-icon msp-control-group-expander", onClick: toggle, title: title || `${show ? "Hide" : "Show"} help`, style: { background: "transparent", textAlign: "left", padding: "0" }, children: (0, import_jsx_runtime10.jsx)(Icon, { svg: HelpOutlineSvg }) });
}
var SimpleParam = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { showHelp: false };
    this.toggleHelp = () => this.setState({ showHelp: !this.state.showHelp });
  }
  update(value) {
    this.props.onChange({ param: this.props.param, name: this.props.name, value });
  }
  renderAddOn() {
    return null;
  }
  render() {
    return renderSimple({
      props: this.props,
      state: this.state,
      control: this.renderControl(),
      toggleHelp: this.toggleHelp,
      addOn: this.renderAddOn()
    });
  }
};
var BoolControl = class extends SimpleParam {
  constructor() {
    super(...arguments);
    this.onClick = (e) => {
      this.update(!this.props.value);
      e.currentTarget.blur();
    };
  }
  renderControl() {
    return (0, import_jsx_runtime10.jsxs)("button", { onClick: this.onClick, disabled: this.props.isDisabled, children: [(0, import_jsx_runtime10.jsx)(Icon, { svg: this.props.value ? CheckSvg : ClearSvg }), this.props.value ? "On" : "Off"] });
  }
};
var LineGraphControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isExpanded: false,
      isOverPoint: false,
      message: `${this.props.param.defaultValue.length} points`
    };
    this.onHover = (point) => {
      this.setState({ isOverPoint: !this.state.isOverPoint });
      if (point) {
        this.setState({ message: this.pointToLabel(point) });
      } else {
        this.setState({ message: `${this.props.value.length} points` });
      }
    };
    this.onDrag = (point) => {
      this.setState({ message: this.pointToLabel(point) });
    };
    this.onChange = (value) => {
      this.props.onChange({ name: this.props.name, param: this.props.param, value });
    };
    this.toggleExpanded = (e) => {
      this.setState({ isExpanded: !this.state.isExpanded });
      e.currentTarget.blur();
    };
  }
  pointToLabel(point) {
    var _a, _b;
    if (!point)
      return "";
    const volume = (_b = (_a = this.props.param).getVolume) === null || _b === void 0 ? void 0 : _b.call(_a);
    if (volume) {
      const { min, max, mean, sigma } = volume.grid.stats;
      const v = min + (max - min) * point[0];
      const s = (v - mean) / sigma;
      return `(${v.toFixed(2)} | ${s.toFixed(2)}σ, ${point[1].toFixed(2)})`;
    } else {
      return `(${point[0].toFixed(2)}, ${point[1].toFixed(2)})`;
    }
  }
  render() {
    var _a, _b;
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsx)(ControlRow, { label, control: (0, import_jsx_runtime10.jsx)("button", { onClick: this.toggleExpanded, disabled: this.props.isDisabled, children: `${this.state.message}` }) }), (0, import_jsx_runtime10.jsx)("div", { className: "msp-control-offset", style: { display: this.state.isExpanded ? "block" : "none", marginTop: 1 }, children: (0, import_jsx_runtime10.jsx)(LineGraphComponent, { data: this.props.value, volume: (_b = (_a = this.props.param).getVolume) === null || _b === void 0 ? void 0 : _b.call(_a), onChange: this.onChange, onHover: this.onHover, onDrag: this.onDrag }) })] });
  }
};
var NumberInputControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { value: "0" };
    this.update = (value) => {
      const p = getPrecision(this.props.param.step || 0.01);
      value = parseFloat(value.toFixed(p));
      this.props.onChange({ param: this.props.param, name: this.props.name, value });
    };
  }
  render() {
    const placeholder = this.props.param.label || camelCaseToWords(this.props.name);
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    const p = getPrecision(this.props.param.step || 0.01);
    return (0, import_jsx_runtime10.jsx)(ControlRow, { title: this.props.param.description, label, control: (0, import_jsx_runtime10.jsx)(TextInput, { numeric: true, value: parseFloat(this.props.value.toFixed(p)), onEnter: this.props.onEnter, placeholder, isDisabled: this.props.isDisabled, onChange: this.update }) });
  }
};
var NumberRangeControl = class extends SimpleParam {
  constructor() {
    super(...arguments);
    this.onChange = (v) => {
      this.update(v);
    };
  }
  renderControl() {
    const value = typeof this.props.value === "undefined" ? this.props.param.defaultValue : this.props.value;
    return (0, import_jsx_runtime10.jsx)(Slider, { value, min: this.props.param.min, max: this.props.param.max, step: this.props.param.step, onChange: this.onChange, onChangeImmediate: this.props.param.immediateUpdate ? this.onChange : void 0, disabled: this.props.isDisabled, onEnter: this.props.onEnter });
  }
};
var TextControl = class extends SimpleParam {
  constructor() {
    super(...arguments);
    this.updateValue = (value) => {
      if (value !== this.props.value) {
        this.update(value);
      }
    };
  }
  renderControl() {
    const placeholder = this.props.param.placeholder || this.props.param.label || camelCaseToWords(this.props.name);
    return (0, import_jsx_runtime10.jsx)(TextCtrl, { props: this.props, placeholder, update: this.updateValue });
  }
};
function TextCtrl({ props, placeholder, update }) {
  const [value, setValue] = React9.useState(props.value);
  React9.useEffect(() => setValue(props.value), [props.value]);
  if (props.param.multiline) {
    return (0, import_jsx_runtime10.jsx)("div", { className: "msp-control-text-area-wrapper", children: (0, import_jsx_runtime10.jsx)("textarea", { value: props.param.disableInteractiveUpdates ? value || "" : props.value, placeholder, onChange: (e) => {
      if (props.param.disableInteractiveUpdates)
        setValue(e.target.value);
      else
        update(e.target.value);
    }, onBlur: (e) => {
      if (props.param.disableInteractiveUpdates)
        update(e.target.value);
    }, onKeyDown: (e) => {
      if (e.key === "Enter" && (e.shiftKey || e.ctrlKey || e.metaKey)) {
        e.currentTarget.blur();
      }
    }, disabled: props.isDisabled }) });
  }
  return (0, import_jsx_runtime10.jsx)("input", { type: "text", value: props.param.disableInteractiveUpdates ? value || "" : props.value, placeholder, onChange: (e) => {
    if (props.param.disableInteractiveUpdates)
      setValue(e.target.value);
    else
      update(e.target.value);
  }, onBlur: (e) => {
    if (props.param.disableInteractiveUpdates)
      update(e.target.value);
  }, disabled: props.isDisabled, onKeyDown: (e) => {
    if (e.key !== "Enter")
      return;
    if (props.onEnter) {
      e.stopPropagation();
      props.onEnter();
    } else if (e.key === "Enter" && (e.shiftKey || e.ctrlKey || e.metaKey)) {
      e.currentTarget.blur();
    } else if (props.param.disableInteractiveUpdates) {
      update(value);
    }
  } });
}
var PureSelectControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.onChange = (e) => {
      if (typeof this.props.param.defaultValue === "number") {
        this.update(parseInt(e.target.value, 10));
      } else {
        this.update(e.target.value);
      }
    };
  }
  update(value) {
    this.props.onChange({ param: this.props.param, name: this.props.name, value });
  }
  render() {
    const isInvalid = this.props.value !== void 0 && !this.props.param.options.some((e) => e[0] === this.props.value);
    return (0, import_jsx_runtime10.jsxs)("select", { className: "msp-form-control", title: this.props.title, value: this.props.value !== void 0 ? this.props.value : this.props.param.defaultValue, onChange: this.onChange, disabled: this.props.isDisabled, children: [isInvalid && (0, import_jsx_runtime10.jsx)("option", { value: this.props.value, children: `[Invalid] ${this.props.value}` }, this.props.value), this.props.param.options.map(([value, label]) => (0, import_jsx_runtime10.jsx)("option", { value, children: label }, value))] });
  }
};
var SelectControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { showHelp: false, showOptions: false };
    this.onSelect = (item) => {
      if (!item || item.value === this.props.value) {
        this.setState({ showOptions: false });
      } else {
        this.setState({ showOptions: false }, () => {
          this.props.onChange({ param: this.props.param, name: this.props.name, value: item.value });
        });
      }
    };
    this.toggle = () => this.setState({ showOptions: !this.state.showOptions });
    this.cycle = () => {
      const { options } = this.props.param;
      const current = options.findIndex((o) => o[0] === this.props.value);
      const next = current === options.length - 1 ? 0 : current + 1;
      this.props.onChange({ param: this.props.param, name: this.props.name, value: options[next][0] });
    };
    this.items = memoizeLatest((param) => ActionMenu.createItemsFromSelectOptions(param.options));
    this.toggleHelp = () => this.setState({ showHelp: !this.state.showHelp });
  }
  renderControl() {
    var _a;
    const items = this.items(this.props.param);
    const current = this.props.value !== void 0 ? ActionMenu.findItem(items, this.props.value) : void 0;
    const label = current ? current.label : typeof this.props.value === "undefined" ? `${((_a = ActionMenu.getFirstItem(items)) === null || _a === void 0 ? void 0 : _a.label) || ""} [Default]` : `[Invalid] ${this.props.value}`;
    const toggle = this.props.param.cycle ? this.cycle : this.toggle;
    const textAlign = this.props.param.cycle ? "center" : "left";
    const icon = this.props.param.cycle ? this.props.value === "on" ? CheckSvg : this.props.value === "off" ? ClearSvg : void 0 : void 0;
    return (0, import_jsx_runtime10.jsx)(ToggleButton, { disabled: this.props.isDisabled, style: { textAlign, overflow: "hidden", textOverflow: "ellipsis" }, label, title: label, icon, toggle, isSelected: this.state.showOptions });
  }
  renderAddOn() {
    if (!this.state.showOptions)
      return null;
    const items = this.items(this.props.param);
    const current = ActionMenu.findItem(items, this.props.value);
    return (0, import_jsx_runtime10.jsx)(ActionMenu, { items, current, onSelect: this.onSelect });
  }
  render() {
    return renderSimple({
      props: this.props,
      state: this.state,
      control: this.renderControl(),
      toggleHelp: this.toggleHelp,
      addOn: this.renderAddOn()
    });
  }
};
var ValueRefControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { showHelp: false, showOptions: false };
    this.onSelect = (item) => {
      if (!item || item.value === this.props.value) {
        this.setState({ showOptions: false });
      } else {
        this.setState({ showOptions: false }, () => {
          this.props.onChange({ param: this.props.param, name: this.props.name, value: { ref: item.value } });
        });
      }
    };
    this.toggle = () => this.setState({ showOptions: !this.state.showOptions });
    this.toggleHelp = () => this.setState({ showHelp: !this.state.showHelp });
  }
  get items() {
    return ActionMenu.createItemsFromSelectOptions(this.props.param.getOptions(this.context));
  }
  renderControl() {
    var _a;
    const items = this.items;
    const current = this.props.value.ref ? ActionMenu.findItem(items, this.props.value.ref) : void 0;
    const label = current ? current.label : `[Ref] ${(_a = this.props.value.ref) !== null && _a !== void 0 ? _a : ""}`;
    return (0, import_jsx_runtime10.jsx)(ToggleButton, { disabled: this.props.isDisabled, style: { textAlign: "left", overflow: "hidden", textOverflow: "ellipsis" }, label, title: label, toggle: this.toggle, isSelected: this.state.showOptions });
  }
  renderAddOn() {
    if (!this.state.showOptions)
      return null;
    const items = this.items;
    const current = ActionMenu.findItem(items, this.props.value.ref);
    return (0, import_jsx_runtime10.jsx)(ActionMenu, { items, current, onSelect: this.onSelect });
  }
  render() {
    return renderSimple({
      props: this.props,
      state: this.state,
      control: this.renderControl(),
      toggleHelp: this.toggleHelp,
      addOn: this.renderAddOn()
    });
  }
};
ValueRefControl.contextType = PluginReactContext;
var IntervalControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: false };
    this.components = {
      0: ParamDefinition.Numeric(0, { step: this.props.param.step }, { label: "Min" }),
      1: ParamDefinition.Numeric(0, { step: this.props.param.step }, { label: "Max" })
    };
    this.componentChange = ({ name, value }) => {
      const v = [...this.props.value];
      v[+name] = value;
      this.change(v);
    };
    this.toggleExpanded = (e) => {
      this.setState({ isExpanded: !this.state.isExpanded });
      e.currentTarget.blur();
    };
  }
  change(value) {
    this.props.onChange({ name: this.props.name, param: this.props.param, value });
  }
  render() {
    const v = this.props.value;
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    const p = getPrecision(this.props.param.step || 0.01);
    const value = `[${v[0].toFixed(p)}, ${v[1].toFixed(p)}]`;
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsx)(ControlRow, { label, control: (0, import_jsx_runtime10.jsx)("button", { onClick: this.toggleExpanded, disabled: this.props.isDisabled, children: value }) }), this.state.isExpanded && (0, import_jsx_runtime10.jsx)("div", { className: "msp-control-offset", children: (0, import_jsx_runtime10.jsx)(ParameterControls, { params: this.components, values: v, onChange: this.componentChange, onEnter: this.props.onEnter }) })] });
  }
};
var BoundedIntervalControl = class extends SimpleParam {
  constructor() {
    super(...arguments);
    this.onChange = (v) => {
      this.update(v);
    };
  }
  renderControl() {
    return (0, import_jsx_runtime10.jsx)(Slider2, { value: this.props.value, min: this.props.param.min, max: this.props.param.max, step: this.props.param.step, onChange: this.onChange, disabled: this.props.isDisabled, onEnter: this.props.onEnter });
  }
};
function colorEntryToStyle(e, includeOffset = false) {
  if (Array.isArray(e)) {
    if (includeOffset)
      return `${Color.toStyle(e[0])} ${(100 * e[1]).toFixed(2)}%`;
    return Color.toStyle(e[0]);
  }
  return Color.toStyle(e);
}
var colorGradientInterpolated = memoize1((colors) => {
  if (colors.length === 0)
    return "linear-gradient(to right, #000 0%, #000 100%)";
  const hasOffsets = colors.every((c) => Array.isArray(c));
  let styles;
  if (hasOffsets) {
    const off = [...colors];
    off.sort((a, b) => a[1] - b[1]);
    styles = off.map((c) => colorEntryToStyle(c, true));
  } else {
    styles = colors.map((c) => colorEntryToStyle(c));
  }
  return `linear-gradient(to right, ${styles.join(", ")})`;
});
var colorGradientBanded = memoize1((colors) => {
  const n = colors.length;
  const styles = [];
  const hasOffsets = colors.every((c) => Array.isArray(c));
  if (hasOffsets) {
    const off = [...colors];
    if (!off[0]) {
      return "linear-gradient(to right, #000 0%, #000 100%)";
    }
    off.sort((a, b) => a[1] - b[1]);
    styles.push(`${Color.toStyle(off[0][0])} ${(100 * off[0][1]).toFixed(2)}%`);
    for (let i = 0, il = off.length - 1; i < il; ++i) {
      const [c0, o0] = off[i];
      const [c1, o1] = off[i + 1];
      const o = o0 + (o1 - o0) / 2;
      styles.push(`${Color.toStyle(c0)} ${(100 * o).toFixed(2)}%`, `${Color.toStyle(c1)} ${(100 * o).toFixed(2)}%`);
    }
    styles.push(`${Color.toStyle(off[off.length - 1][0])} ${(100 * off[off.length - 1][1]).toFixed(2)}%`);
  } else {
    styles.push(`${colorEntryToStyle(colors[0])} ${100 * (1 / n)}%`);
    for (let i = 1, il = n - 1; i < il; ++i) {
      styles.push(`${colorEntryToStyle(colors[i])} ${100 * (i / n)}%`, `${colorEntryToStyle(colors[i])} ${100 * ((i + 1) / n)}%`);
    }
    styles.push(`${colorEntryToStyle(colors[n - 1])} ${100 * ((n - 1) / n)}%`);
  }
  return `linear-gradient(to right, ${styles.join(", ")})`;
});
function colorStripStyle(list, right = "0") {
  return {
    background: colorGradient(list.colors, list.kind === "set"),
    position: "absolute",
    bottom: "0",
    height: "4px",
    right,
    left: "0"
  };
}
function colorGradient(colors, banded) {
  return banded ? colorGradientBanded(colors) : colorGradientInterpolated(colors);
}
function createColorListHelpers() {
  const addOn = (l) => {
    const preset = getColorListFromName(l[0]);
    return (0, import_jsx_runtime10.jsx)("div", { style: colorStripStyle({ kind: preset.type !== "qualitative" ? "interpolate" : "set", colors: preset.list }) });
  };
  return {
    ColorPresets: {
      all: ActionMenu.createItemsFromSelectOptions(ColorListOptions, { addOn }),
      scale: ActionMenu.createItemsFromSelectOptions(ColorListOptionsScale, { addOn }),
      set: ActionMenu.createItemsFromSelectOptions(ColorListOptionsSet, { addOn })
    },
    ColorsParam: ParamDefinition.ObjectList({ color: ParamDefinition.Color(0) }, ({ color }) => Color.toHexString(color).toUpperCase()),
    OffsetColorsParam: ParamDefinition.ObjectList({ color: ParamDefinition.Color(0), offset: ParamDefinition.Numeric(0, { min: 0, max: 1, step: 0.01 }) }, ({ color, offset }) => `${Color.toHexString(color).toUpperCase()} [${offset.toFixed(2)}]`),
    IsInterpolatedParam: ParamDefinition.Boolean(false, { label: "Interpolated" })
  };
}
var _colorListHelpers;
function ColorListHelpers() {
  if (_colorListHelpers)
    return _colorListHelpers;
  _colorListHelpers = createColorListHelpers();
  return _colorListHelpers;
}
var ColorListControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { showHelp: false, show: void 0 };
    this.toggleEdit = () => this.setState({ show: this.state.show === "edit" ? void 0 : "edit" });
    this.togglePresets = () => this.setState({ show: this.state.show === "presets" ? void 0 : "presets" });
    this.selectPreset = (item) => {
      if (!item)
        return;
      this.setState({ show: void 0 });
      const preset = getColorListFromName(item.value);
      this.update({ kind: preset.type !== "qualitative" ? "interpolate" : "set", colors: preset.list });
    };
    this.colorsChanged = ({ value }) => {
      this.update({
        kind: this.props.value.kind,
        colors: value.map((c) => c.color)
      });
    };
    this.isInterpolatedChanged = ({ value }) => {
      this.update({ kind: value ? "interpolate" : "set", colors: this.props.value.colors });
    };
    this.toggleHelp = () => this.setState({ showHelp: !this.state.showHelp });
  }
  update(value) {
    this.props.onChange({ param: this.props.param, name: this.props.name, value });
  }
  renderControl() {
    const { value } = this.props;
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsxs)("button", { onClick: this.toggleEdit, style: { position: "relative", paddingRight: "33px" }, children: [value.colors.length === 1 ? "1 color" : `${value.colors.length} colors`, (0, import_jsx_runtime10.jsx)("div", { style: colorStripStyle(value, "33px") })] }), (0, import_jsx_runtime10.jsx)(IconButton, { svg: BookmarksOutlinedSvg, onClick: this.togglePresets, toggleState: this.state.show === "presets", title: "Color Presets", style: { padding: 0, position: "absolute", right: 0, top: 0, width: "32px" } })] });
  }
  renderColors() {
    if (!this.state.show)
      return null;
    const { ColorPresets, ColorsParam, IsInterpolatedParam } = ColorListHelpers();
    const preset = ColorPresets[this.props.param.presetKind];
    if (this.state.show === "presets")
      return (0, import_jsx_runtime10.jsx)(ActionMenu, { items: preset, onSelect: this.selectPreset });
    const values = this.props.value.colors.map((color) => ({
      color: Array.isArray(color) ? color[0] : color
    }));
    return (0, import_jsx_runtime10.jsxs)("div", { className: "msp-control-offset", children: [(0, import_jsx_runtime10.jsx)(ObjectListControl, { name: "colors", param: ColorsParam, value: values, onChange: this.colorsChanged, isDisabled: this.props.isDisabled, onEnter: this.props.onEnter }), (0, import_jsx_runtime10.jsx)(BoolControl, { name: "isInterpolated", param: IsInterpolatedParam, value: this.props.value.kind === "interpolate", onChange: this.isInterpolatedChanged, isDisabled: this.props.isDisabled, onEnter: this.props.onEnter })] });
  }
  render() {
    return renderSimple({
      props: this.props,
      state: this.state,
      control: this.renderControl(),
      toggleHelp: this.toggleHelp,
      addOn: this.renderColors()
    });
  }
};
var OffsetColorListControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { showHelp: false, show: void 0 };
    this.toggleEdit = () => this.setState({ show: this.state.show === "edit" ? void 0 : "edit" });
    this.togglePresets = () => this.setState({ show: this.state.show === "presets" ? void 0 : "presets" });
    this.selectPreset = (item) => {
      if (!item)
        return;
      this.setState({ show: void 0 });
      const preset = getColorListFromName(item.value);
      this.update({ kind: preset.type !== "qualitative" ? "interpolate" : "set", colors: preset.list });
    };
    this.colorsChanged = ({ value }) => {
      const colors = value.map((c) => [c.color, c.offset]);
      colors.sort((a, b) => a[1] - b[1]);
      this.update({ kind: this.props.value.kind, colors });
    };
    this.isInterpolatedChanged = ({ value }) => {
      this.update({ kind: value ? "interpolate" : "set", colors: this.props.value.colors });
    };
    this.toggleHelp = () => this.setState({ showHelp: !this.state.showHelp });
  }
  update(value) {
    this.props.onChange({ param: this.props.param, name: this.props.name, value });
  }
  renderControl() {
    const { value } = this.props;
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsxs)("button", { onClick: this.toggleEdit, style: { position: "relative", paddingRight: "33px" }, children: [value.colors.length === 1 ? "1 color" : `${value.colors.length} colors`, (0, import_jsx_runtime10.jsx)("div", { style: colorStripStyle(value, "33px") })] }), (0, import_jsx_runtime10.jsx)(IconButton, { svg: BookmarksOutlinedSvg, onClick: this.togglePresets, toggleState: this.state.show === "presets", title: "Color Presets", style: { padding: 0, position: "absolute", right: 0, top: 0, width: "32px" } })] });
  }
  renderColors() {
    if (!this.state.show)
      return null;
    const { ColorPresets, OffsetColorsParam, IsInterpolatedParam } = ColorListHelpers();
    const preset = ColorPresets[this.props.param.presetKind];
    if (this.state.show === "presets")
      return (0, import_jsx_runtime10.jsx)(ActionMenu, { items: preset, onSelect: this.selectPreset });
    const colors = this.props.value.colors;
    const values = colors.map((color, i) => {
      if (Array.isArray(color))
        return { color: color[0], offset: color[1] };
      return { color, offset: i / colors.length };
    });
    values.sort((a, b) => a.offset - b.offset);
    return (0, import_jsx_runtime10.jsxs)("div", { className: "msp-control-offset", children: [(0, import_jsx_runtime10.jsx)(ObjectListControl, { name: "colors", param: OffsetColorsParam, value: values, onChange: this.colorsChanged, isDisabled: this.props.isDisabled, onEnter: this.props.onEnter }), (0, import_jsx_runtime10.jsx)(BoolControl, { name: "isInterpolated", param: IsInterpolatedParam, value: this.props.value.kind === "interpolate", onChange: this.isInterpolatedChanged, isDisabled: this.props.isDisabled, onEnter: this.props.onEnter })] });
  }
  render() {
    return renderSimple({
      props: this.props,
      state: this.state,
      control: this.renderControl(),
      toggleHelp: this.toggleHelp,
      addOn: this.renderColors()
    });
  }
};
var Vec3Control = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: false };
    this.components = {
      0: ParamDefinition.Numeric(0, { step: this.props.param.step }, { label: this.props.param.fieldLabels && this.props.param.fieldLabels.x || "X" }),
      1: ParamDefinition.Numeric(0, { step: this.props.param.step }, { label: this.props.param.fieldLabels && this.props.param.fieldLabels.y || "Y" }),
      2: ParamDefinition.Numeric(0, { step: this.props.param.step }, { label: this.props.param.fieldLabels && this.props.param.fieldLabels.z || "Z" })
    };
    this.componentChange = ({ name, value }) => {
      const v = Vec3.copy(Vec3.zero(), this.props.value);
      v[+name] = value;
      this.change(v);
    };
    this.toggleExpanded = (e) => {
      this.setState({ isExpanded: !this.state.isExpanded });
      e.currentTarget.blur();
    };
  }
  change(value) {
    this.props.onChange({ name: this.props.name, param: this.props.param, value });
  }
  render() {
    const v = this.props.value;
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    const p = getPrecision(this.props.param.step || 0.01);
    const value = `[${v[0].toFixed(p)}, ${v[1].toFixed(p)}, ${v[2].toFixed(p)}]`;
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsx)(ControlRow, { label, control: (0, import_jsx_runtime10.jsx)("button", { onClick: this.toggleExpanded, disabled: this.props.isDisabled, children: value }) }), this.state.isExpanded && (0, import_jsx_runtime10.jsx)("div", { className: "msp-control-offset", children: (0, import_jsx_runtime10.jsx)(ParameterControls, { params: this.components, values: v, onChange: this.componentChange, onEnter: this.props.onEnter }) })] });
  }
};
var Mat4Control = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: false };
    this.components = {
      json: ParamDefinition.Text(JSON.stringify(Mat4()), { description: "JSON array with 4x4 matrix in a column major (j * 4 + i indexing) format" })
    };
    this.componentChange = ({ name, value }) => {
      const v = Mat4.copy(Mat4(), this.props.value);
      if (name === "json") {
        Mat4.copy(v, JSON.parse(value));
      } else {
        v[+name] = value;
      }
      this.change(v);
    };
    this.toggleExpanded = (e) => {
      this.setState({ isExpanded: !this.state.isExpanded });
      e.currentTarget.blur();
    };
  }
  change(value) {
    this.props.onChange({ name: this.props.name, param: this.props.param, value });
  }
  changeValue(idx) {
    return (v) => {
      const m = Mat4.copy(Mat4(), this.props.value);
      m[idx] = v;
      this.change(m);
    };
  }
  get grid() {
    const v = this.props.value;
    const rows = [];
    for (let i = 0; i < 4; i++) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        row.push((0, import_jsx_runtime10.jsx)(TextInput, { numeric: true, delayMs: 50, value: Mat4.getValue(v, i, j), onChange: this.changeValue(4 * j + i), className: "msp-form-control", blurOnEnter: true, isDisabled: this.props.isDisabled }, j));
      }
      rows.push((0, import_jsx_runtime10.jsx)("div", { className: "msp-flex-row", children: row }, i));
    }
    return (0, import_jsx_runtime10.jsx)("div", { className: "msp-parameter-matrix", children: rows });
  }
  render() {
    const v = {
      json: JSON.stringify(this.props.value)
    };
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsx)(ControlRow, { label, control: (0, import_jsx_runtime10.jsx)("button", { onClick: this.toggleExpanded, disabled: this.props.isDisabled, children: "4×4 Matrix" }) }), this.state.isExpanded && (0, import_jsx_runtime10.jsxs)("div", { className: "msp-control-offset", children: [this.grid, (0, import_jsx_runtime10.jsx)(ParameterControls, { params: this.components, values: v, onChange: this.componentChange, onEnter: this.props.onEnter })] })] });
  }
};
var UrlControl = class extends SimpleParam {
  constructor() {
    super(...arguments);
    this.onChange = (e) => {
      const value = e.target.value;
      if (value !== Asset.getUrl(this.props.value || "")) {
        this.update(Asset.Url(value));
      }
    };
    this.onKeyPress = (e) => {
      if (e.keyCode === 13 || e.charCode === 13 || e.key === "Enter") {
        if (this.props.onEnter)
          this.props.onEnter();
      }
      e.stopPropagation();
    };
  }
  renderControl() {
    const placeholder = this.props.param.label || camelCaseToWords(this.props.name);
    return (0, import_jsx_runtime10.jsx)("input", { type: "text", value: Asset.getUrl(this.props.value || ""), placeholder, onChange: this.onChange, onKeyPress: this.props.onEnter ? this.onKeyPress : void 0, disabled: this.props.isDisabled });
  }
};
var FileControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { showHelp: false };
    this.onChangeFile = (e) => {
      this.change(e.target.files[0]);
    };
    this.toggleHelp = () => this.setState({ showHelp: !this.state.showHelp });
  }
  change(value) {
    this.props.onChange({ name: this.props.name, param: this.props.param, value: Asset.File(value) });
  }
  renderControl() {
    const value = this.props.value;
    return (0, import_jsx_runtime10.jsxs)("div", { className: "msp-btn msp-btn-block msp-btn-action msp-loader-msp-btn-file", style: { marginTop: "1px" }, children: [value ? value.name : "Select a file...", " ", (0, import_jsx_runtime10.jsx)("input", { disabled: this.props.isDisabled, onChange: this.onChangeFile, type: "file", multiple: false, accept: this.props.param.accept })] });
  }
  render() {
    if (this.props.param.label) {
      return renderSimple({
        props: this.props,
        state: this.state,
        control: this.renderControl(),
        toggleHelp: this.toggleHelp,
        addOn: null
      });
    } else {
      return this.renderControl();
    }
  }
};
var FileListControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { showHelp: false };
    this.onChangeFileList = (e) => {
      this.change(e.target.files);
    };
    this.toggleHelp = () => this.setState({ showHelp: !this.state.showHelp });
  }
  change(value) {
    const files = [];
    if (value) {
      for (let i = 0, il = value.length; i < il; ++i) {
        files.push(Asset.File(value[i]));
      }
    }
    this.props.onChange({ name: this.props.name, param: this.props.param, value: files });
  }
  renderControl() {
    const value = this.props.value;
    const names = [];
    if (value) {
      for (const file of value) {
        names.push(file.name);
      }
    }
    const label = names.length === 0 ? "Select files..." : names.length === 1 ? names[0] : `${names.length} files selected`;
    return (0, import_jsx_runtime10.jsxs)("div", { className: "msp-btn msp-btn-block msp-btn-action msp-loader-msp-btn-file", style: { marginTop: "1px" }, children: [label, " ", (0, import_jsx_runtime10.jsx)("input", { disabled: this.props.isDisabled, onChange: this.onChangeFileList, type: "file", multiple: true, accept: this.props.param.accept })] });
  }
  render() {
    if (this.props.param.label) {
      return renderSimple({
        props: this.props,
        state: this.state,
        control: this.renderControl(),
        toggleHelp: this.toggleHelp,
        addOn: null
      });
    } else {
      return this.renderControl();
    }
  }
};
var MultiSelectControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: false };
    this.toggleExpanded = (e) => {
      this.setState({ isExpanded: !this.state.isExpanded });
      e.currentTarget.blur();
    };
  }
  change(value) {
    this.props.onChange({ name: this.props.name, param: this.props.param, value });
  }
  toggle(key) {
    return (e) => {
      if (this.props.value.indexOf(key) < 0)
        this.change(this.props.value.concat(key));
      else
        this.change(this.props.value.filter((v) => v !== key));
      e.currentTarget.blur();
    };
  }
  render() {
    const current = this.props.value;
    const emptyLabel = this.props.param.emptyValue;
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsx)(ControlRow, { label, control: (0, import_jsx_runtime10.jsx)("button", { onClick: this.toggleExpanded, disabled: this.props.isDisabled, children: current.length === 0 && emptyLabel ? emptyLabel : `${current.length} of ${this.props.param.options.length}` }) }), this.state.isExpanded && (0, import_jsx_runtime10.jsx)("div", { className: "msp-control-offset", children: this.props.param.options.map(([value, label2]) => {
      const sel = current.indexOf(value) >= 0;
      return (0, import_jsx_runtime10.jsx)(Button, { onClick: this.toggle(value), disabled: this.props.isDisabled, style: { marginTop: "1px" }, children: (0, import_jsx_runtime10.jsx)("span", { style: { float: sel ? "left" : "right" }, children: sel ? `✓ ${label2}` : `${label2} ✗` }) }, value);
    }) })] });
  }
};
var GroupControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: !!this.props.param.isExpanded, showPresets: false, showHelp: false };
    this.onChangeParam = (e) => {
      this.change({ ...this.props.value, [e.name]: e.value });
    };
    this.toggleExpanded = () => this.setState({ isExpanded: !this.state.isExpanded });
    this.toggleShowPresets = () => this.setState({ showPresets: !this.state.showPresets });
    this.presetItems = memoizeLatest((param) => {
      var _a;
      return ActionMenu.createItemsFromSelectOptions((_a = param.presets) !== null && _a !== void 0 ? _a : []);
    });
    this.onSelectPreset = (item) => {
      this.setState({ showPresets: false });
      this.change(item === null || item === void 0 ? void 0 : item.value);
    };
  }
  change(value) {
    this.props.onChange({ name: this.props.name, param: this.props.param, value });
  }
  pivotedPresets() {
    if (!this.props.param.presets)
      return null;
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    return (0, import_jsx_runtime10.jsxs)("div", { className: "msp-control-group-wrapper", children: [(0, import_jsx_runtime10.jsx)("div", { className: "msp-control-group-header", children: (0, import_jsx_runtime10.jsxs)("button", { className: "msp-btn msp-form-control msp-btn-block", onClick: this.toggleShowPresets, children: [(0, import_jsx_runtime10.jsx)(Icon, { svg: BookmarksOutlinedSvg }), label, " Presets"] }) }), this.state.showPresets && (0, import_jsx_runtime10.jsx)(ActionMenu, { items: this.presetItems(this.props.param), onSelect: this.onSelectPreset })] });
  }
  presets() {
    if (!this.props.param.presets)
      return null;
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsx)("div", { className: "msp-control-group-presets-wrapper", children: (0, import_jsx_runtime10.jsx)("div", { className: "msp-control-group-header", children: (0, import_jsx_runtime10.jsxs)("button", { className: "msp-btn msp-form-control msp-btn-block", onClick: this.toggleShowPresets, children: [(0, import_jsx_runtime10.jsx)(Icon, { svg: BookmarksOutlinedSvg }), "Presets"] }) }) }), this.state.showPresets && (0, import_jsx_runtime10.jsx)(ActionMenu, { items: this.presetItems(this.props.param), onSelect: this.onSelectPreset })] });
  }
  pivoted() {
    const key = this.props.param.pivot;
    const params = this.props.param.params;
    const pivot = params[key];
    const Control = controlFor(pivot);
    const ctrl = (0, import_jsx_runtime10.jsx)(Control, { name: key, param: pivot, value: this.props.value[key], onChange: this.onChangeParam, onEnter: this.props.onEnter, isDisabled: this.props.isDisabled });
    if (!this.state.isExpanded) {
      return (0, import_jsx_runtime10.jsxs)("div", { className: "msp-mapped-parameter-group", children: [ctrl, (0, import_jsx_runtime10.jsx)(IconButton, { svg: MoreHorizSvg, onClick: this.toggleExpanded, toggleState: this.state.isExpanded, title: `More Options` })] });
    }
    const filtered = /* @__PURE__ */ Object.create(null);
    for (const k of Object.keys(params)) {
      if (k !== key)
        filtered[k] = params[k];
    }
    return (0, import_jsx_runtime10.jsxs)("div", { className: "msp-mapped-parameter-group", children: [ctrl, (0, import_jsx_runtime10.jsx)(IconButton, { svg: MoreHorizSvg, onClick: this.toggleExpanded, toggleState: this.state.isExpanded, title: `More Options` }), (0, import_jsx_runtime10.jsxs)("div", { className: "msp-control-offset", children: [this.pivotedPresets(), (0, import_jsx_runtime10.jsx)(ParameterControls, { params: filtered, onEnter: this.props.onEnter, values: this.props.value, onChange: this.onChangeParam, isDisabled: this.props.isDisabled })] })] });
  }
  render() {
    const params = this.props.param.params;
    if (Object.keys(params).length === 0)
      return null;
    if (this.props.param.pivot)
      return this.pivoted();
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    const controls = (0, import_jsx_runtime10.jsx)(ParameterControls, { params, onChange: this.onChangeParam, values: this.props.value, onEnter: this.props.onEnter, isDisabled: this.props.isDisabled });
    if (this.props.inMapped) {
      return (0, import_jsx_runtime10.jsx)("div", { className: "msp-control-offset", children: controls });
    }
    if (this.props.param.isFlat) {
      return controls;
    }
    return (0, import_jsx_runtime10.jsxs)("div", { className: "msp-control-group-wrapper", style: { position: "relative" }, children: [(0, import_jsx_runtime10.jsx)("div", { className: "msp-control-group-header", children: (0, import_jsx_runtime10.jsxs)("button", { className: "msp-btn msp-form-control msp-btn-block", onClick: this.toggleExpanded, children: [(0, import_jsx_runtime10.jsx)(Icon, { svg: this.state.isExpanded ? ArrowDropDownSvg : ArrowRightSvg }), label] }) }), this.presets(), this.state.isExpanded && (0, import_jsx_runtime10.jsx)("div", { className: "msp-control-offset", children: controls })] });
  }
};
var MappedControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: false };
    this.valuesCache = {};
    this.onChangeName = (e) => {
      this.change({ name: e.value, params: this.getValues(e.value) });
    };
    this.onChangeParam = (e) => {
      this.setValues(this.props.value.name, e.value);
      this.change({ name: this.props.value.name, params: e.value });
    };
    this.toggleExpanded = () => this.setState({ isExpanded: !this.state.isExpanded });
  }
  setValues(name, values) {
    this.valuesCache[name] = values;
  }
  getValues(name) {
    if (name in this.valuesCache) {
      return this.valuesCache[name];
    } else {
      return this.props.param.map(name).defaultValue;
    }
  }
  change(value) {
    this.props.onChange({ name: this.props.name, param: this.props.param, value });
  }
  areParamsEmpty(params) {
    for (const k of Object.keys(params)) {
      if (!params[k].isHidden)
        return false;
    }
    return true;
  }
  render() {
    const value = this.props.value || this.props.param.defaultValue;
    const param = this.props.param.map(value.name);
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    const Mapped = controlFor(param);
    const help = this.props.param.help;
    const select = help ? {
      ...this.props.param.select,
      help: (name) => help({ name, params: this.getValues(name) })
    } : this.props.param.select;
    const Select = (0, import_jsx_runtime10.jsx)(SelectControl, { param: select, isDisabled: this.props.isDisabled, onChange: this.onChangeName, onEnter: this.props.onEnter, name: label, value: value.name });
    if (!Mapped) {
      return Select;
    }
    if (param.type === "group" && !param.isFlat) {
      if (!this.areParamsEmpty(param.params)) {
        return (0, import_jsx_runtime10.jsxs)("div", { className: "msp-mapped-parameter-group", children: [Select, (0, import_jsx_runtime10.jsx)(IconButton, { svg: MoreHorizSvg, onClick: this.toggleExpanded, toggleState: this.state.isExpanded, title: `${label} Properties` }), this.state.isExpanded && (0, import_jsx_runtime10.jsx)(GroupControl, { inMapped: true, param, value: value.params, name: value.name, onChange: this.onChangeParam, onEnter: this.props.onEnter, isDisabled: this.props.isDisabled })] });
      }
      return Select;
    }
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [Select, (0, import_jsx_runtime10.jsx)(Mapped, { param, value: value.params, name: value.name, onChange: this.onChangeParam, onEnter: this.props.onEnter, isDisabled: this.props.isDisabled })] });
  }
};
var ObjectListEditor = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { current: this.props.value };
    this.onChangeParam = (e) => {
      this.setState({ current: { ...this.state.current, [e.name]: e.value } });
    };
    this.apply = () => {
      this.props.apply(this.state.current);
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.params !== prevProps.params || this.props.value !== prevProps.value) {
      this.setState({ current: this.props.value });
    }
  }
  render() {
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsx)(ParameterControls, { params: this.props.params, onChange: this.onChangeParam, values: this.state.current, onEnter: this.apply, isDisabled: this.props.isDisabled }), (0, import_jsx_runtime10.jsx)("button", { className: `msp-btn msp-btn-block msp-form-control msp-control-top-offset`, onClick: this.apply, disabled: this.props.isDisabled, children: this.props.isUpdate ? "Update" : "Add" })] });
  }
};
var ObjectListItem = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: false };
    this.update = (v) => {
      this.props.actions.update(v, this.props.index);
    };
    this.moveUp = () => {
      this.props.actions.move(this.props.index, -1);
    };
    this.moveDown = () => {
      this.props.actions.move(this.props.index, 1);
    };
    this.remove = () => {
      this.setState({ isExpanded: false });
      this.props.actions.remove(this.props.index);
    };
    this.toggleExpanded = (e) => {
      this.setState({ isExpanded: !this.state.isExpanded });
      e.currentTarget.blur();
    };
  }
  render() {
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsxs)("div", { className: "msp-param-object-list-item", children: [(0, import_jsx_runtime10.jsxs)("button", { className: "msp-btn msp-btn-block msp-form-control", onClick: this.toggleExpanded, children: [(0, import_jsx_runtime10.jsx)("span", { children: `${this.props.index + 1}: ` }), this.props.param.getLabel(this.props.value)] }), (0, import_jsx_runtime10.jsxs)("div", { children: [(0, import_jsx_runtime10.jsx)(IconButton, { svg: ArrowDownwardSvg, title: "Move Up", onClick: this.moveUp, small: true }), (0, import_jsx_runtime10.jsx)(IconButton, { svg: ArrowUpwardSvg, title: "Move Down", onClick: this.moveDown, small: true }), (0, import_jsx_runtime10.jsx)(IconButton, { svg: DeleteOutlinedSvg, title: "Remove", onClick: this.remove, small: true })] })] }), this.state.isExpanded && (0, import_jsx_runtime10.jsx)("div", { className: "msp-control-offset", children: (0, import_jsx_runtime10.jsx)(ObjectListEditor, { params: this.props.param.element, apply: this.update, value: this.props.value, isUpdate: true, isDisabled: this.props.isDisabled }) })] });
  }
};
var ObjectListControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.state = { isExpanded: false };
    this.add = (v) => {
      this.change([...this.props.value, v]);
    };
    this.actions = {
      update: (v, i) => {
        const value = this.props.value.slice(0);
        value[i] = v;
        this.change(value);
      },
      move: (i, dir) => {
        let xs = this.props.value;
        if (xs.length === 1)
          return;
        let j = (i + dir) % xs.length;
        if (j < 0)
          j += xs.length;
        xs = xs.slice(0);
        const t = xs[i];
        xs[i] = xs[j];
        xs[j] = t;
        this.change(xs);
      },
      remove: (i) => {
        const xs = this.props.value;
        const update = [];
        for (let j = 0; j < xs.length; j++) {
          if (i !== j)
            update.push(xs[j]);
        }
        this.change(update);
      }
    };
    this.toggleExpanded = (e) => {
      this.setState({ isExpanded: !this.state.isExpanded });
      e.currentTarget.blur();
    };
  }
  change(value) {
    this.props.onChange({ name: this.props.name, param: this.props.param, value });
  }
  render() {
    const v = this.props.value;
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    const value = `${v.length} item${v.length !== 1 ? "s" : ""}`;
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [(0, import_jsx_runtime10.jsx)(ControlRow, { label, control: (0, import_jsx_runtime10.jsx)("button", { onClick: this.toggleExpanded, disabled: this.props.isDisabled, children: value }) }), this.state.isExpanded && (0, import_jsx_runtime10.jsxs)("div", { className: "msp-control-offset", children: [this.props.value.map((v2, i) => (0, import_jsx_runtime10.jsx)(ObjectListItem, { param: this.props.param, value: v2, index: i, actions: this.actions, isDisabled: this.props.isDisabled }, i)), (0, import_jsx_runtime10.jsx)(ControlGroup, { header: "New Item", children: (0, import_jsx_runtime10.jsx)(ObjectListEditor, { params: this.props.param.element, apply: this.add, value: this.props.param.ctor(), isDisabled: this.props.isDisabled }) })] })] });
  }
};
var ConditionedControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.onChangeCondition = (e) => {
      this.change(this.props.param.conditionedValue(this.props.value, e.value));
    };
    this.onChangeParam = (e) => {
      this.change(e.value);
    };
  }
  change(value) {
    this.props.onChange({ name: this.props.name, param: this.props.param, value });
  }
  render() {
    const value = this.props.value;
    const condition = this.props.param.conditionForValue(value);
    const param = this.props.param.conditionParams[condition];
    const label = this.props.param.label || camelCaseToWords(this.props.name);
    const Conditioned = controlFor(param);
    const select = (0, import_jsx_runtime10.jsx)(SelectControl, { param: this.props.param.select, isDisabled: this.props.isDisabled, onChange: this.onChangeCondition, onEnter: this.props.onEnter, name: `${label} Kind`, value: condition });
    if (!Conditioned) {
      return select;
    }
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [select, (0, import_jsx_runtime10.jsx)(Conditioned, { param, value, name: label, onChange: this.onChangeParam, onEnter: this.props.onEnter, isDisabled: this.props.isDisabled })] });
  }
};
var ConvertedControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.onChange = (e) => {
      this.props.onChange({
        name: this.props.name,
        param: this.props.param,
        value: this.props.param.toValue(e.value)
      });
    };
  }
  render() {
    const value = this.props.param.fromValue(this.props.value);
    const Converted = controlFor(this.props.param.converted);
    if (!Converted)
      return null;
    return (0, import_jsx_runtime10.jsx)(Converted, { param: this.props.param.converted, value, name: this.props.name, onChange: this.onChange, onEnter: this.props.onEnter, isDisabled: this.props.isDisabled });
  }
};
var ScriptControl = class extends React9.PureComponent {
  constructor() {
    super(...arguments);
    this.onChange = ({ name, value }) => {
      const k = name;
      if (value !== this.props.value[k]) {
        this.props.onChange({ param: this.props.param, name: this.props.name, value: { ...this.props.value, [k]: value } });
      }
    };
  }
  render() {
    const selectParam = {
      defaultValue: this.props.value.language,
      options: ParamDefinition.objectToOptions(Script.Info),
      type: "select"
    };
    const select = (0, import_jsx_runtime10.jsx)(SelectControl, { param: selectParam, isDisabled: this.props.isDisabled, onChange: this.onChange, onEnter: this.props.onEnter, name: "language", value: this.props.value.language });
    const textParam = {
      defaultValue: this.props.value.language,
      type: "text"
    };
    const text = (0, import_jsx_runtime10.jsx)(TextControl, { param: textParam, isDisabled: this.props.isDisabled, onChange: this.onChange, name: "expression", value: this.props.value.expression });
    return (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [select, this.props.value.language !== "mol-script" && (0, import_jsx_runtime10.jsxs)("div", { className: "msp-help-text", style: { padding: "10px" }, children: [(0, import_jsx_runtime10.jsx)(Icon, { svg: WarningSvg }), " Support for PyMOL, VMD, and Jmol selections is an experimental feature and may not always work as intended."] }), text] });
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/custom/volume.js
var ChannelParams = {
  color: ParamDefinition.Color(ColorNames.black, { description: "Display color of the volume." }),
  wireframe: ParamDefinition.Boolean(false, { description: "Control display of the volume as a wireframe." }),
  opacity: ParamDefinition.Numeric(0.3, { min: 0, max: 1, step: 0.01 }, { description: "Opacity of the volume." })
};
var Bounds = /* @__PURE__ */ new Map([
  ["em", [-5, 5]],
  ["2fo-fc", [0, 3]],
  ["fo-fc(+ve)", [1, 5]],
  ["fo-fc(-ve)", [-5, -1]]
]);
var Channel = class extends PluginUIComponent {
  constructor() {
    super(...arguments);
    this.ref = StateSelection.findTagInSubtree(this.plugin.state.data.tree, this.props.bCell.transform.ref, this.props.name);
    this.getVisible = () => {
      const state = this.plugin.state.data;
      const ref = this.ref;
      if (!ref)
        return false;
      return !state.cells.get(ref).state.isHidden;
    };
    this.toggleVisible = () => {
      const state = this.plugin.state.data;
      const ref = this.ref;
      if (!ref)
        return;
      setSubtreeVisibility(state, ref, !state.cells.get(ref).state.isHidden);
    };
  }
  componentDidUpdate() {
    this.ref = StateSelection.findTagInSubtree(this.plugin.state.data.tree, this.props.bCell.transform.ref, this.props.name);
  }
  componentDidMount() {
    this.subscribe(this.plugin.state.data.events.cell.stateUpdated, (e) => {
      if (this.ref === e.ref)
        this.forceUpdate();
    });
  }
  render() {
    const props = this.props;
    const { isRelative, stats } = props;
    const channel = props.channels[props.name];
    const { min, max, mean, sigma } = stats;
    const value = Math.round(100 * (channel.isoValue.kind === "relative" ? channel.isoValue.relativeValue : channel.isoValue.absoluteValue)) / 100;
    let relMin = (min - mean) / sigma;
    let relMax = (max - mean) / sigma;
    if (!this.props.isUnbounded) {
      const bounds = Bounds.get(this.props.name);
      if (this.props.name === "em") {
        relMin = Math.max(bounds[0], relMin);
        relMax = Math.min(bounds[1], relMax);
      } else {
        relMin = bounds[0];
        relMax = bounds[1];
      }
    }
    const vMin = mean + sigma * relMin, vMax = mean + sigma * relMax;
    const step = toPrecision(isRelative ? Math.round((vMax - vMin) / sigma) / 100 : sigma / 100, 2);
    const ctrlMin = isRelative ? relMin : vMin;
    const ctrlMax = isRelative ? relMax : vMax;
    return (0, import_jsx_runtime11.jsx)(ExpandableControlRow, { label: props.label + (props.isRelative ? " σ" : ""), colorStripe: channel.color, pivot: (0, import_jsx_runtime11.jsxs)("div", { className: "msp-volume-channel-inline-controls", children: [(0, import_jsx_runtime11.jsx)(Slider, { value, min: ctrlMin, max: ctrlMax, step, onChange: (v) => props.changeIso(props.name, v, isRelative), onChangeImmediate: (v) => props.changeIso(props.name, v, isRelative), disabled: props.params.isDisabled, onEnter: props.params.events.onEnter }), (0, import_jsx_runtime11.jsx)(IconButton, { svg: this.getVisible() ? VisibilityOutlinedSvg : VisibilityOffOutlinedSvg, onClick: this.toggleVisible, toggleState: false, disabled: props.params.isDisabled })] }), controls: (0, import_jsx_runtime11.jsx)(ParameterControls, { onChange: ({ name, value: value2 }) => props.changeParams(props.name, name, value2), params: ChannelParams, values: channel, onEnter: props.params.events.onEnter, isDisabled: props.params.isDisabled }) });
  }
};
var VolumeStreamingCustomControls = class extends PluginUIComponent {
  constructor() {
    super(...arguments);
    this.changeIso = (name, value, isRelative) => {
      const old = this.props.params;
      this.newParams({
        ...old,
        entry: {
          name: old.entry.name,
          params: {
            ...old.entry.params,
            channels: {
              ...old.entry.params.channels,
              [name]: {
                ...old.entry.params.channels[name],
                isoValue: isRelative ? Volume.IsoValue.relative(value) : Volume.IsoValue.absolute(value)
              }
            }
          }
        }
      });
    };
    this.changeParams = (name, param, value) => {
      const old = this.props.params;
      this.newParams({
        ...old,
        entry: {
          name: old.entry.name,
          params: {
            ...old.entry.params,
            channels: {
              ...old.entry.params.channels,
              [name]: {
                ...old.entry.params.channels[name],
                [param]: value
              }
            }
          }
        }
      });
    };
    this.changeOption = ({ name, value }) => {
      const old = this.props.params;
      if (name === "entry") {
        this.newParams({
          ...old,
          entry: {
            name: value,
            params: old.entry.params
          }
        });
      } else {
        const b = this.props.b.data;
        const isEM = b.info.kind === "em";
        const isRelative = value.params.isRelative;
        const sampling = b.info.header.sampling[0];
        const oldChannels = old.entry.params.channels;
        const oldView = old.entry.params.view.name === value.name ? old.entry.params.view.params : this.props.info.params.entry.map(old.entry.name).params.view.map(value.name).defaultValue;
        const viewParams = { ...oldView };
        if (value.name === "selection-box") {
          viewParams.radius = value.params.radius;
        } else if (value.name === "camera-target") {
          viewParams.radius = value.params.radius;
          viewParams.dynamicDetailLevel = value.params.dynamicDetailLevel;
        } else if (value.name === "box") {
          viewParams.bottomLeft = value.params.bottomLeft;
          viewParams.topRight = value.params.topRight;
        } else if (value.name === "auto") {
          viewParams.radius = value.params.radius;
          viewParams.selectionDetailLevel = value.params.selectionDetailLevel;
        }
        viewParams.isUnbounded = !!value.params.isUnbounded;
        this.newParams({
          ...old,
          entry: {
            name: old.entry.name,
            params: {
              ...old.entry.params,
              view: {
                name: value.name,
                params: viewParams
              },
              detailLevel: value.params.detailLevel,
              channels: isEM ? { em: this.convert(oldChannels.em, sampling.valuesInfo[0], isRelative) } : {
                "2fo-fc": this.convert(oldChannels["2fo-fc"], sampling.valuesInfo[0], isRelative),
                "fo-fc(+ve)": this.convert(oldChannels["fo-fc(+ve)"], sampling.valuesInfo[1], isRelative),
                "fo-fc(-ve)": this.convert(oldChannels["fo-fc(-ve)"], sampling.valuesInfo[1], isRelative)
              }
            }
          }
        });
      }
    };
  }
  areInitial(params) {
    return ParamDefinition.areEqual(this.props.info.params, params, this.props.info.initialValues);
  }
  newParams(params) {
    this.props.events.onChange(params, this.areInitial(params));
  }
  convert(channel, stats, isRelative) {
    return {
      ...channel,
      isoValue: isRelative ? Volume.IsoValue.toRelative(channel.isoValue, stats) : Volume.IsoValue.toAbsolute(channel.isoValue, stats)
    };
  }
  render() {
    if (!this.props.b)
      return null;
    const b = this.props.b.data;
    const isEM = b.info.kind === "em";
    const pivot = isEM ? "em" : "2fo-fc";
    const params = this.props.params;
    const entry = this.props.info.params.entry.map(params.entry.name);
    const detailLevel = entry.params.detailLevel;
    const dynamicDetailLevel = {
      ...detailLevel,
      label: "Dynamic Detail",
      defaultValue: entry.params.view.map("camera-target").params.dynamicDetailLevel.defaultValue
    };
    const selectionDetailLevel = {
      ...detailLevel,
      label: "Selection Detail",
      defaultValue: entry.params.view.map("auto").params.selectionDetailLevel.defaultValue
    };
    const sampling = b.info.header.sampling[0];
    const isRelative = params.entry.params.channels[pivot].isoValue.kind === "relative";
    const isRelativeParam = ParamDefinition.Boolean(isRelative, { description: "Use normalized or absolute isocontour scale.", label: "Normalized" });
    const isUnbounded = !!params.entry.params.view.params.isUnbounded;
    const isUnboundedParam = ParamDefinition.Boolean(isUnbounded, { description: "Show full/limited range of iso-values for more fine-grained control.", label: "Unbounded" });
    const isOff = params.entry.params.view.name === "off";
    const OptionsParams = {
      entry: ParamDefinition.Select(params.entry.name, b.data.entries.map((info) => [info.dataId, info.dataId]), { isHidden: isOff, description: "Which entry with volume data to display." }),
      view: ParamDefinition.MappedStatic(params.entry.params.view.name, {
        "off": ParamDefinition.Group({
          isRelative: ParamDefinition.Boolean(isRelative, { isHidden: true }),
          isUnbounded: ParamDefinition.Boolean(isUnbounded, { isHidden: true })
        }, { description: "Display off." }),
        "box": ParamDefinition.Group({
          bottomLeft: ParamDefinition.Vec3(Vec3.zero()),
          topRight: ParamDefinition.Vec3(Vec3.zero()),
          detailLevel,
          isRelative: isRelativeParam,
          isUnbounded: isUnboundedParam
        }, { description: "Static box defined by cartesian coords." }),
        "selection-box": ParamDefinition.Group({
          radius: ParamDefinition.Numeric(5, { min: 0, max: 50, step: 0.5 }, { description: "Radius in Å within which the volume is shown." }),
          detailLevel,
          isRelative: isRelativeParam,
          isUnbounded: isUnboundedParam
        }, { description: "Box around focused element." }),
        "camera-target": ParamDefinition.Group({
          radius: ParamDefinition.Numeric(0.5, { min: 0, max: 1, step: 0.05 }, { description: "Radius within which the volume is shown (relative to the field of view)." }),
          detailLevel: { ...detailLevel, isHidden: true },
          dynamicDetailLevel,
          isRelative: isRelativeParam,
          isUnbounded: isUnboundedParam
        }, { description: "Box around camera target." }),
        "cell": ParamDefinition.Group({
          detailLevel,
          isRelative: isRelativeParam,
          isUnbounded: isUnboundedParam
        }, { description: "Box around the structure's bounding box." }),
        "auto": ParamDefinition.Group({
          radius: ParamDefinition.Numeric(5, { min: 0, max: 50, step: 0.5 }, { description: "Radius in Å within which the volume is shown." }),
          detailLevel,
          selectionDetailLevel,
          isRelative: isRelativeParam,
          isUnbounded: isUnboundedParam
        }, { description: "Box around focused element." })
      }, { options: VolumeStreaming.ViewTypeOptions, description: 'Controls what of the volume is displayed. "Off" hides the volume alltogether. "Bounded box" shows the volume inside the given box. "Around Focus" shows the volume around the element/atom last interacted with. "Around Camera" shows the volume around the point the camera is targeting. "Whole Structure" shows the volume for the whole structure.' })
    };
    const options = {
      entry: params.entry.name,
      view: {
        name: params.entry.params.view.name,
        params: {
          detailLevel: params.entry.params.detailLevel,
          radius: params.entry.params.view.params.radius,
          bottomLeft: params.entry.params.view.params.bottomLeft,
          topRight: params.entry.params.view.params.topRight,
          selectionDetailLevel: params.entry.params.view.params.selectionDetailLevel,
          dynamicDetailLevel: params.entry.params.view.params.dynamicDetailLevel,
          isRelative,
          isUnbounded
        }
      }
    };
    if (isOff) {
      return (0, import_jsx_runtime11.jsx)(ParameterControls, { onChange: this.changeOption, params: OptionsParams, values: options, onEnter: this.props.events.onEnter, isDisabled: this.props.isDisabled });
    }
    return (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [!isEM && (0, import_jsx_runtime11.jsx)(Channel, { label: "2Fo-Fc", name: "2fo-fc", bCell: this.props.bCell, channels: params.entry.params.channels, changeIso: this.changeIso, changeParams: this.changeParams, isRelative, params: this.props, stats: sampling.valuesInfo[0], isUnbounded }), !isEM && (0, import_jsx_runtime11.jsx)(Channel, { label: "Fo-Fc(+ve)", name: "fo-fc(+ve)", bCell: this.props.bCell, channels: params.entry.params.channels, changeIso: this.changeIso, changeParams: this.changeParams, isRelative, params: this.props, stats: sampling.valuesInfo[1], isUnbounded }), !isEM && (0, import_jsx_runtime11.jsx)(Channel, { label: "Fo-Fc(-ve)", name: "fo-fc(-ve)", bCell: this.props.bCell, channels: params.entry.params.channels, changeIso: this.changeIso, changeParams: this.changeParams, isRelative, params: this.props, stats: sampling.valuesInfo[1], isUnbounded }), isEM && (0, import_jsx_runtime11.jsx)(Channel, { label: "EM", name: "em", bCell: this.props.bCell, channels: params.entry.params.channels, changeIso: this.changeIso, changeParams: this.changeParams, isRelative, params: this.props, stats: sampling.valuesInfo[0], isUnbounded }), (0, import_jsx_runtime11.jsx)(ParameterControls, { onChange: this.changeOption, params: OptionsParams, values: options, onEnter: this.props.events.onEnter, isDisabled: this.props.isDisabled })] });
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-plugin-ui/spec.js
var DefaultPluginUISpec = () => ({
  ...DefaultPluginSpec(),
  customParamEditors: [
    [CreateVolumeStreamingBehavior, VolumeStreamingCustomControls]
  ]
});

export {
  Icon,
  UnionSvg,
  SubtractSvg,
  IntersectSvg,
  SetSvg,
  MoleculeSvg,
  CubeOutlineSvg,
  MagicWandSvg,
  PencilRulerSvg,
  AccountTreeOutlinedSvg,
  AddSvg,
  ArrowDownwardSvg,
  ArrowDropDownSvg,
  ArrowRightSvg,
  ArrowUpwardSvg,
  AutorenewSvg,
  BlurOnSvg,
  BookmarksOutlinedSvg,
  BrushSvg,
  BuildOutlinedSvg,
  BuildSvg,
  CameraOutlinedSvg,
  CameraSvg,
  CancelOutlinedSvg,
  CancelSvg,
  CenterFocusStrongSvg,
  CheckSvg,
  CloseSvg,
  CloudUploadSvg,
  CodeSvg,
  CopySvg,
  CropSvg,
  CropFreeSvg,
  CropOrginalSvg,
  DeleteOutlinedSvg,
  ErrorSvg,
  FullscreenSvg,
  GetAppSvg,
  HelpOutlineSvg,
  HomeOutlinedSvg,
  MoreHorizSvg,
  NavigateBeforeSvg,
  NavigateNextSvg,
  OpenInBrowserSvg,
  PlayArrowSvg,
  RefreshSvg,
  RemoveSvg,
  RestoreSvg,
  SaveOutlinedSvg,
  SkipPreviousSvg,
  StopSvg,
  SubscriptionsOutlinedSvg,
  SwapHorizSvg,
  TuneSvg,
  VisibilityOffOutlinedSvg,
  VisibilityOutlinedSvg,
  WarningSvg,
  SelectionModeSvg,
  SuperposeAtomsSvg,
  SuperposeChainsSvg,
  SuperpositionSvg,
  ControlGroup,
  TextInput,
  SectionHeader,
  Button,
  IconButton,
  ToggleButton,
  ExpandGroup,
  ControlRow,
  PluginReactContext,
  PluginUIComponent,
  PurePluginUIComponent,
  CollapsableControls,
  ActionMenu,
  CombinedColorControl,
  ParameterControls,
  ParameterMappingControl,
  ParamHelp,
  ToggleParamHelpButton,
  PureSelectControl,
  DefaultPluginUISpec
};
//# sourceMappingURL=chunk-2UWBCIJT.js.map
