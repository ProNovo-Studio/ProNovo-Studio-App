import {
  __export
} from "./chunk-WOOG5QLI.js";

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/object.js
var hasOwnProperty = Object.prototype.hasOwnProperty;
function assignIfUndefined(to, full) {
  for (const k of Object.keys(full)) {
    if (!hasOwnProperty.call(full, k))
      continue;
    if (typeof to[k] === "undefined") {
      to[k] = full[k];
    }
  }
  return to;
}
function shallowMerge2(source, update) {
  let changed = false;
  for (const k of Object.keys(update)) {
    if (!hasOwnProperty.call(update, k))
      continue;
    if (update[k] !== source[k]) {
      changed = true;
      break;
    }
  }
  if (!changed)
    return source;
  return Object.assign({}, source, update);
}
function shallowEqual(a, b) {
  if (!a) {
    if (!b)
      return true;
    return false;
  }
  if (!b)
    return false;
  const keys = Object.keys(a);
  if (Object.keys(b).length !== keys.length)
    return false;
  for (const k of keys) {
    if (!hasOwnProperty.call(a, k) || a[k] !== b[k])
      return false;
  }
  return true;
}
function shallowMergeArray(source, rest) {
  let ret = source;
  for (let s = 0; s < rest.length; s++) {
    if (!rest[s])
      continue;
    ret = shallowMerge2(source, rest[s]);
    if (ret !== source) {
      for (let i = s + 1; i < rest.length; i++) {
        ret = Object.assign(ret, rest[i]);
      }
      break;
    }
  }
  return ret;
}
function deepClone(source) {
  if (null === source || "object" !== typeof source)
    return source;
  if (source instanceof Array) {
    const copy = [];
    for (let i = 0, len = source.length; i < len; i++) {
      copy[i] = deepClone(source[i]);
    }
    return copy;
  }
  if (typeof source === "object" && !("prototype" in source)) {
    const copy = {};
    for (const k in source) {
      if (hasOwnProperty.call(source, k))
        copy[k] = deepClone(source[k]);
    }
    return copy;
  }
  throw new Error(`Can't clone, type "${typeof source}" unsupported`);
}
function mapObjectMap(obj, f) {
  const ret = {};
  for (const k of Object.keys(obj)) {
    ret[k] = f(obj[k]);
  }
  return ret;
}
function mapArrayToObject(array, getValue) {
  const result = {};
  for (const key of array) {
    result[key] = getValue(key);
  }
  return result;
}
function objectForEach(o, f) {
  if (!o)
    return;
  for (const k of Object.keys(o)) {
    f(o[k], k);
  }
}
function pickObjectKeys(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (Object.hasOwn(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function omitObjectKeys(obj, omitKeys) {
  const result = { ...obj };
  for (const key of omitKeys) {
    delete result[key];
  }
  return result;
}
function objectFromKeysAndValues(keys, values) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
}
function isPlainObject(obj) {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}
async function promiseAllObj(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = Object.values(promisesObj);
  const results = await Promise.all(promises);
  return objectFromKeysAndValues(keys, results);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/bit-flags.js
var BitFlags;
(function(BitFlags2) {
  function create2(flags) {
    return flags;
  }
  BitFlags2.create = create2;
  function has4(flags, flag) {
    return (flags & flag) !== 0;
  }
  BitFlags2.has = has4;
  function hasAll(flags, toCheck) {
    return !!toCheck && (flags & toCheck) === toCheck;
  }
  BitFlags2.hasAll = hasAll;
})(BitFlags || (BitFlags = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/now.js
var now = function() {
  if (typeof window !== "undefined" && window.performance) {
    const perf = window.performance;
    return () => perf.now();
  } else if (typeof process !== "undefined" && process.hrtime !== "undefined" && typeof process.hrtime === "function") {
    return () => {
      const t = process.hrtime();
      return t[0] * 1e3 + t[1] / 1e6;
    };
  } else if (Date.now) {
    return () => Date.now();
  } else {
    return () => +/* @__PURE__ */ new Date();
  }
}();
function formatTimespan(t, includeMsZeroes = true) {
  if (isNaN(t))
    return "n/a";
  const h = Math.floor(t / (60 * 60 * 1e3)), m = Math.floor(t / (60 * 1e3) % 60), s = Math.floor(t / 1e3 % 60);
  let ms = Math.floor(t % 1e3).toString();
  while (ms.length < 3)
    ms = "0" + ms;
  while (!includeMsZeroes && ms.length > 1 && ms[ms.length - 1] === "0")
    ms = ms.substr(0, ms.length - 1);
  if (h > 0)
    return `${h}h${m}m${s}.${ms}s`;
  if (m > 0)
    return `${m}m${s}.${ms}s`;
  if (s > 0)
    return `${s}.${ms}s`;
  return `${t.toFixed(0)}ms`;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/uuid.js
var UUID;
(function(UUID2) {
  const _btoa = typeof btoa !== "undefined" ? btoa : (s) => Buffer.from(s).toString("base64");
  const chars = [];
  function create22() {
    let d = +/* @__PURE__ */ new Date() + now();
    for (let i = 0; i < 16; i++) {
      chars[i] = String.fromCharCode((d + Math.random() * 255) % 255 | 0);
      d = Math.floor(d / 255);
    }
    return _btoa(chars.join("")).replace(/\+/g, "-").replace(/\//g, "_").substr(0, 22);
  }
  UUID2.create22 = create22;
  function createv4() {
    let d = +/* @__PURE__ */ new Date() + now();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : r & 3 | 8).toString(16);
    });
    return uuid;
  }
  UUID2.createv4 = createv4;
  function is3(x) {
    return typeof x === "string";
  }
  UUID2.is = is3;
})(UUID || (UUID = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/id-factory.js
function idFactory(firstId = 0, maxId = Number.MAX_SAFE_INTEGER) {
  let _nextId = firstId;
  return () => {
    const ret = _nextId;
    _nextId = (_nextId + 1) % maxId;
    return ret;
  };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/string-builder.js
var StringBuilder;
(function(StringBuilder2) {
  function create2(chunkCapacity = 512) {
    return {
      current: [],
      offset: 0,
      capacity: chunkCapacity,
      chunks: []
    };
  }
  StringBuilder2.create = create2;
  function getString(builder) {
    if (!builder.chunks.length) {
      if (builder.current.length === builder.offset)
        return builder.current.join("");
      return builder.current.splice(0, builder.offset).join("");
    }
    if (builder.offset > 0) {
      builder.chunks[builder.chunks.length] = builder.current.length === builder.offset ? builder.current.join("") : builder.current.slice(0, builder.offset).join("");
    }
    return builder.chunks.join("");
  }
  StringBuilder2.getString = getString;
  function getSize(builder) {
    let size4 = 0;
    for (const c of builder.chunks)
      size4 += c.length;
    for (let i = 0; i < builder.offset; i++)
      size4 += builder.current[i].length;
    return size4;
  }
  StringBuilder2.getSize = getSize;
  function getChunks(builder) {
    if (builder.offset > 0) {
      if (builder.current.length === builder.offset)
        builder.chunks[builder.chunks.length] = builder.current.join("");
      else
        builder.chunks[builder.chunks.length] = builder.current.slice(0, builder.offset).join("");
      builder.offset = 0;
    }
    return builder.chunks;
  }
  StringBuilder2.getChunks = getChunks;
  let PaddingSpaces;
  (function(PaddingSpaces2) {
    PaddingSpaces2[PaddingSpaces2["Count"] = 512] = "Count";
  })(PaddingSpaces || (PaddingSpaces = {}));
  const __paddingSpaces = [];
  (function() {
    let s = "";
    for (let i = 0; i < PaddingSpaces.Count; i++) {
      __paddingSpaces[i] = s;
      s = s + " ";
    }
  })();
  function newline(builder) {
    writeSafe(builder, "\n");
  }
  StringBuilder2.newline = newline;
  function whitespace(builder, len) {
    if (len > 0)
      writeSafe(builder, __paddingSpaces[len]);
  }
  StringBuilder2.whitespace = whitespace;
  function whitespace1(builder) {
    writeSafe(builder, " ");
  }
  StringBuilder2.whitespace1 = whitespace1;
  function write(builder, val) {
    if (!val)
      return;
    if (builder.offset === builder.capacity) {
      builder.chunks[builder.chunks.length] = builder.current.join("");
      builder.offset = 0;
    }
    builder.current[builder.offset++] = val;
  }
  StringBuilder2.write = write;
  function writeSafe(builder, val) {
    if (builder.offset === builder.capacity) {
      builder.chunks[builder.chunks.length] = builder.current.join("");
      builder.offset = 0;
    }
    builder.current[builder.offset++] = val;
  }
  StringBuilder2.writeSafe = writeSafe;
  function writePadLeft(builder, val, totalWidth) {
    if (!val) {
      whitespace(builder, totalWidth);
      return;
    }
    const padding = totalWidth - val.length;
    whitespace(builder, padding);
    writeSafe(builder, val);
  }
  StringBuilder2.writePadLeft = writePadLeft;
  function writePadRight(builder, val, totalWidth) {
    if (!val) {
      whitespace(builder, totalWidth);
      return;
    }
    const padding = totalWidth - val.length;
    writeSafe(builder, val);
    whitespace(builder, padding);
  }
  StringBuilder2.writePadRight = writePadRight;
  function writeInteger(builder, val) {
    writeSafe(builder, "" + val);
  }
  StringBuilder2.writeInteger = writeInteger;
  function writeIntegerAndSpace(builder, val) {
    writeSafe(builder, "" + val + " ");
  }
  StringBuilder2.writeIntegerAndSpace = writeIntegerAndSpace;
  function writeIntegerPadLeft(builder, val, totalWidth) {
    const s = "" + val;
    const padding = totalWidth - s.length;
    whitespace(builder, padding);
    writeSafe(builder, s);
  }
  StringBuilder2.writeIntegerPadLeft = writeIntegerPadLeft;
  function writeIntegerPadRight(builder, val, totalWidth) {
    const s = "" + val;
    const padding = totalWidth - s.length;
    writeSafe(builder, s);
    whitespace(builder, padding);
  }
  StringBuilder2.writeIntegerPadRight = writeIntegerPadRight;
  function writeFloat(builder, val, precisionMultiplier) {
    writeSafe(builder, "" + Math.round(precisionMultiplier * val) / precisionMultiplier);
  }
  StringBuilder2.writeFloat = writeFloat;
  function writeFloatPadLeft(builder, val, precisionMultiplier, totalWidth) {
    const s = "" + Math.round(precisionMultiplier * val) / precisionMultiplier;
    const padding = totalWidth - s.length;
    whitespace(builder, padding);
    writeSafe(builder, s);
  }
  StringBuilder2.writeFloatPadLeft = writeFloatPadLeft;
  function writeFloatPadRight(builder, val, precisionMultiplier, totalWidth) {
    const s = "" + Math.round(precisionMultiplier * val) / precisionMultiplier;
    const padding = totalWidth - s.length;
    writeSafe(builder, s);
    whitespace(builder, padding);
  }
  StringBuilder2.writeFloatPadRight = writeFloatPadRight;
})(StringBuilder || (StringBuilder = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/mask.js
function _ascSort(a, b) {
  return a - b;
}
function sortAsc(array) {
  Array.prototype.sort.call(array, _ascSort);
  return array;
}
var Mask;
(function(Mask2) {
  class EmptyMask {
    has(i) {
      return false;
    }
    forEach(f, ctx) {
      return ctx;
    }
    constructor() {
      this.size = 0;
    }
  }
  class SingletonMask {
    has(i) {
      return i === this.idx;
    }
    forEach(f, ctx) {
      f(this.idx, ctx);
      return ctx;
    }
    constructor(idx) {
      this.idx = idx;
      this.size = 1;
    }
  }
  class BitMask {
    has(i) {
      return i < this.length && !!this.mask[i];
    }
    _forEach(f, ctx) {
      for (let i = 0; i < this.length; i++) {
        if (this.mask[i])
          f(i, ctx);
      }
    }
    forEach(f, ctx) {
      this._forEach(f, ctx);
      return ctx;
    }
    constructor(mask, size4) {
      this.mask = mask;
      this.size = size4;
      this.length = mask.length;
    }
  }
  class AllMask {
    has(i) {
      return true;
    }
    _forEach(f, ctx) {
      for (let i = 0; i < this.size; i++) {
        f(i, ctx);
      }
    }
    forEach(f, ctx) {
      this._forEach(f, ctx);
      return ctx;
    }
    constructor(size4) {
      this.size = size4;
    }
  }
  class SetMask {
    has(i) {
      return this.set.has(i);
    }
    _forEach(f, ctx) {
      for (const idx of this.flatten()) {
        f(idx, ctx);
      }
    }
    flatten() {
      if (this._flat)
        return this._flat;
      const indices = new Int32Array(this.size);
      let offset = 0;
      this.set.forEach((i) => indices[offset++] = i);
      sortAsc(indices);
      this._flat = indices;
      return this._flat;
    }
    forEach(f, ctx) {
      this._forEach(f, ctx);
      return ctx;
    }
    constructor(set) {
      this.set = set;
      this._flat = void 0;
      this.size = set.size;
    }
  }
  function always(size4) {
    return new AllMask(size4);
  }
  Mask2.always = always;
  Mask2.never = new EmptyMask();
  function ofSet(set) {
    return new SetMask(set);
  }
  Mask2.ofSet = ofSet;
  function singleton(i) {
    return new SingletonMask(i);
  }
  Mask2.singleton = singleton;
  function ofUniqueIndices(indices) {
    const len = indices.length;
    if (len === 0)
      return new EmptyMask();
    if (len === 1)
      return new SingletonMask(indices[0]);
    let max4 = 0;
    for (const i of indices) {
      if (i > max4)
        max4 = i;
    }
    if (len === max4)
      return new AllMask(len);
    const f = len / max4;
    if (f < 1 / 12) {
      const set = /* @__PURE__ */ new Set();
      for (const i of indices)
        set.add(i);
      return new SetMask(set);
    }
    const mask = new Int8Array(max4 + 1);
    for (const i of indices) {
      mask[i] = 1;
    }
    return new BitMask(mask, indices.length);
  }
  Mask2.ofUniqueIndices = ofUniqueIndices;
  function ofMask(mask, size4) {
    return new BitMask(mask, size4);
  }
  Mask2.ofMask = ofMask;
  function hasAny(mask, xs) {
    for (const x of xs) {
      if (mask.has(x))
        return true;
    }
    return false;
  }
  Mask2.hasAny = hasAny;
  function complement(mask, against) {
    let count2 = 0;
    let max4 = 0;
    against.forEach((i) => {
      if (!mask.has(i)) {
        count2++;
        if (i > max4)
          max4 = i;
      }
    });
    if (count2 / max4 < 1 / 12) {
      const set = /* @__PURE__ */ new Set();
      against.forEach((i) => {
        if (!mask.has(i)) {
          set.add(i);
        }
      });
      return ofSet(set);
    } else {
      const target = new Uint8Array(max4 + 1);
      against.forEach((i) => {
        if (!mask.has(i)) {
          target[i] = 1;
        }
      });
      return ofMask(target, count2);
    }
  }
  Mask2.complement = complement;
})(Mask || (Mask = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/value-cell.js
var ValueRef;
(function(ValueRef2) {
  function create2(ref) {
    return { ref };
  }
  ValueRef2.create = create2;
  function set(ref, value) {
    ref.ref = value;
    return ref;
  }
  ValueRef2.set = set;
})(ValueRef || (ValueRef = {}));
var getNextId = idFactory(0, 2147483647);
var ValueBox;
(function(ValueBox2) {
  function create2(value, metadata) {
    return { id: getNextId(), version: 0, value, metadata };
  }
  ValueBox2.create = create2;
  function withValue(box, value) {
    return { id: box.id, version: box.version + 1, value, metadata: box.metadata };
  }
  ValueBox2.withValue = withValue;
})(ValueBox || (ValueBox = {}));
var ValueCell;
(function(ValueCell2) {
  function create2(value, metadata) {
    return ValueRef.create(ValueBox.create(value, metadata));
  }
  ValueCell2.create = create2;
  function update(cell, value) {
    return ValueRef.set(cell, ValueBox.withValue(cell.ref, value));
  }
  ValueCell2.update = update;
  function set(cell, box) {
    return ValueRef.set(cell, box);
  }
  ValueCell2.set = set;
  function updateIfChanged(cell, value) {
    return cell.ref.value !== value ? update(cell, value) : cell;
  }
  ValueCell2.updateIfChanged = updateIfChanged;
})(ValueCell || (ValueCell = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/index.js
var noop = function() {
};
function round(n, d) {
  const f = Math.pow(10, d);
  return Math.round(f * n) / f;
}
function arrayEqual(arr1, arr2) {
  const length = arr1.length;
  if (length !== arr2.length)
    return false;
  for (let i = 0; i < length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
var hasOwnProperty2 = Object.prototype.hasOwnProperty;
function deepEqual(a, b) {
  if (a === b)
    return true;
  const arrA = Array.isArray(a);
  const arrB = Array.isArray(b);
  if (arrA && arrB) {
    if (a.length !== b.length)
      return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i]))
        return false;
    }
    return true;
  }
  if (arrA !== arrB)
    return false;
  if (a && b && typeof a === "object" && typeof b === "object") {
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
      return false;
    const dateA = a instanceof Date;
    const dateB = b instanceof Date;
    if (dateA && dateB)
      return a.getTime() === b.getTime();
    if (dateA !== dateB)
      return false;
    const regexpA = a instanceof RegExp;
    const regexpB = b instanceof RegExp;
    if (regexpA && regexpB)
      return a.toString() === b.toString();
    if (regexpA !== regexpB)
      return false;
    for (let i = 0; i < keys.length; i++) {
      if (!hasOwnProperty2.call(b, keys[i]))
        return false;
    }
    for (let i = 0; i < keys.length; i++) {
      if (!deepEqual(a[keys[i]], b[keys[i]]))
        return false;
    }
    return true;
  }
  return false;
}
function shallowEqual2(a, b) {
  if (a === b)
    return true;
  const arrA = Array.isArray(a);
  const arrB = Array.isArray(b);
  if (arrA && arrB)
    return shallowEqualArrays(a, b);
  if (arrA !== arrB)
    return false;
  if (a && b && typeof a === "object" && typeof b === "object") {
    return shallowEqualObjects(a, b);
  }
  return false;
}
function shallowEqualObjects(a, b) {
  if (a === b)
    return true;
  if (!a || !b)
    return false;
  const keys = Object.keys(a);
  if (Object.keys(b).length !== keys.length)
    return false;
  for (const k of keys) {
    if (!hasOwnProperty2.call(a, k) || a[k] !== b[k])
      return false;
  }
  return true;
}
function shallowEqualArrays(a, b) {
  if (a === b)
    return true;
  if (!a || !b)
    return false;
  if (a.length !== b.length)
    return false;
  for (let i = 0, il = a.length; i < il; ++i) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
}
function defaults(value, defaultValue) {
  return value !== void 0 ? value : defaultValue;
}
function padTime(n) {
  return (n < 10 ? "0" : "") + n;
}
function formatTime(d) {
  const h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
  return `${h}:${padTime(m)}:${padTime(s)}`;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-math/misc.js
var halfPI = Math.PI / 2;
var PiDiv180 = Math.PI / 180;
function degToRad(deg) {
  return deg * PiDiv180;
}
function radToDeg(rad) {
  return rad / PiDiv180;
}
function isPowerOfTwo(x) {
  return x !== 0 && (x & x - 1) === 0;
}
function absMax(...values) {
  let max4 = 0;
  let absMax2 = 0;
  for (let i = 0, il = values.length; i < il; ++i) {
    const value = values[i];
    const abs = Math.abs(value);
    if (abs > absMax2) {
      max4 = value;
      absMax2 = abs;
    }
  }
  return max4;
}
function arcLength(angle, radius) {
  return angle * radius;
}
function spiral2d(radius) {
  let x = 0;
  let y = 0;
  let deltaX = 0;
  let deltaY = -1;
  const size4 = radius * 2 + 1;
  const halfSize = size4 / 2;
  const out = [];
  for (let i = Math.pow(size4, 2); i > 0; --i) {
    if (-halfSize < x && x <= halfSize && (-halfSize < y && y <= halfSize)) {
      out.push([x, y]);
    }
    if (x === y || x < 0 && x === -y || x > 0 && x === 1 - y) {
      const prevDeltaX = deltaX;
      const prevDeltaY = deltaY;
      deltaX = -prevDeltaY;
      deltaY = prevDeltaX;
    }
    x += deltaX;
    y += deltaY;
  }
  return out;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-math/interpolate.js
function normalize(value, min4, max4) {
  return (value - min4) / (max4 - min4);
}
function clamp(value, min4, max4) {
  return Math.max(min4, Math.min(max4, value));
}
function saturate(value) {
  return clamp(value, 0, 1);
}
function lerp(start4, stop, alpha) {
  return start4 + (stop - start4) * alpha;
}
function spline(p0, p1, p2, p3, t, tension) {
  const v0 = (p2 - p0) * tension;
  const v1 = (p3 - p1) * tension;
  const t2 = t * t;
  const t3 = t * t2;
  return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
}
function quadraticBezier(p0, p1, p2, t) {
  const k = 1 - t;
  return k * k * p0 + 2 * k * t * p1 + t * t * p2;
}
function smoothstep(min4, max4, x) {
  x = saturate(normalize(x, min4, max4));
  return x * x * (3 - 2 * x);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/color/spaces/lab.js
function Lab() {
  return Lab.zero();
}
(function(Lab2) {
  function zero() {
    const out = [0.1, 0, 0];
    out[0] = 0;
    return out;
  }
  Lab2.zero = zero;
  function create2(l, a, b) {
    const out = zero();
    out[0] = l;
    out[1] = a;
    out[2] = b;
    return out;
  }
  Lab2.create = create2;
  function set(out, l, a, b) {
    out[0] = l;
    out[1] = a;
    out[2] = b;
    return out;
  }
  Lab2.set = set;
  function distance(a, b) {
    const x = b[0] - a[0], y = b[1] - a[1], z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
  }
  Lab2.distance = distance;
  function fromColor(out, color) {
    const [r, g, b] = Color.toRgb(color);
    const [x, y, z] = rgbToXyz(r, g, b);
    const l = 116 * y - 16;
    out[0] = l < 0 ? 0 : l;
    out[1] = 500 * (x - y);
    out[2] = 200 * (y - z);
    return out;
  }
  Lab2.fromColor = fromColor;
  function fromHcl(out, hcl) {
    return Hcl.toLab(out, hcl);
  }
  Lab2.fromHcl = fromHcl;
  function toColor(lab) {
    let y = (lab[0] + 16) / 116;
    let x = isNaN(lab[1]) ? y : y + lab[1] / 500;
    let z = isNaN(lab[2]) ? y : y - lab[2] / 200;
    y = Yn * lab_xyz(y);
    x = Xn * lab_xyz(x);
    z = Zn * lab_xyz(z);
    const r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
    const g = xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
    const b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
    return Color.fromRgb(Math.round(clamp(r, 0, 255)), Math.round(clamp(g, 0, 255)), Math.round(clamp(b, 0, 255)));
  }
  Lab2.toColor = toColor;
  function toHcl(out, lab) {
    const [l, a, b] = lab;
    const c = Math.sqrt(a * a + b * b);
    let h = (radToDeg(Math.atan2(b, a)) + 360) % 360;
    if (Math.round(c * 1e4) === 0)
      h = Number.NaN;
    out[0] = h;
    out[1] = c;
    out[2] = l;
    return out;
  }
  Lab2.toHcl = toHcl;
  function copy(out, c) {
    out[0] = c[0];
    out[1] = c[1];
    out[2] = c[2];
    return out;
  }
  Lab2.copy = copy;
  function darken(out, c, amount) {
    out[0] = c[0] - Kn * amount;
    out[1] = c[1];
    out[2] = c[2];
    return out;
  }
  Lab2.darken = darken;
  function lighten(out, c, amount) {
    return darken(out, c, -amount);
  }
  Lab2.lighten = lighten;
  const tmpSaturateHcl = [0, 0, 0];
  function saturate2(out, c, amount) {
    toHcl(tmpSaturateHcl, c);
    return Hcl.toLab(out, Hcl.saturate(tmpSaturateHcl, tmpSaturateHcl, amount));
  }
  Lab2.saturate = saturate2;
  function desaturate(out, c, amount) {
    return saturate2(out, c, -amount);
  }
  Lab2.desaturate = desaturate;
  const Kn = 18;
  const Xn = 0.95047;
  const Yn = 1;
  const Zn = 1.08883;
  const T0 = 0.137931034;
  const T1 = 0.206896552;
  const T2 = 0.12841855;
  const T3 = 8856452e-9;
  function xyz_rgb(c) {
    return 255 * (c <= 304e-5 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);
  }
  function lab_xyz(t) {
    return t > T1 ? t * t * t : T2 * (t - T0);
  }
  function rgb_xyz(c) {
    if ((c /= 255) <= 0.04045)
      return c / 12.92;
    return Math.pow((c + 0.055) / 1.055, 2.4);
  }
  function xyz_lab(t) {
    if (t > T3)
      return Math.pow(t, 1 / 3);
    return t / T2 + T0;
  }
  function rgbToXyz(r, g, b) {
    r = rgb_xyz(r);
    g = rgb_xyz(g);
    b = rgb_xyz(b);
    const x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / Xn);
    const y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / Yn);
    const z = xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / Zn);
    return [x, y, z];
  }
})(Lab || (Lab = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/color/spaces/hcl.js
function Hcl() {
  return Hcl.zero();
}
(function(Hcl2) {
  function zero() {
    const out = [0.1, 0, 0];
    out[0] = 0;
    return out;
  }
  Hcl2.zero = zero;
  function create2(h, c, l) {
    const out = zero();
    out[0] = h;
    out[1] = c;
    out[2] = l;
    return out;
  }
  Hcl2.create = create2;
  function set(out, h, c, l) {
    out[0] = h;
    out[1] = c;
    out[2] = l;
    return out;
  }
  Hcl2.set = set;
  function hasHue(a) {
    return !isNaN(a[0]);
  }
  Hcl2.hasHue = hasHue;
  const tmpFromColorLab = [0, 0, 0];
  function fromColor(out, color) {
    return Lab.toHcl(out, Lab.fromColor(tmpFromColorLab, color));
  }
  Hcl2.fromColor = fromColor;
  function fromLab(hcl, lab) {
    return Lab.toHcl(hcl, lab);
  }
  Hcl2.fromLab = fromLab;
  const tmpToColorLab = [0, 0, 0];
  function toColor(hcl) {
    return Lab.toColor(toLab(tmpToColorLab, hcl));
  }
  Hcl2.toColor = toColor;
  function toLab(out, hcl) {
    let [h, c, l] = hcl;
    if (isNaN(h))
      h = 0;
    h = degToRad(h);
    out[0] = l;
    out[1] = Math.cos(h) * c;
    out[2] = Math.sin(h) * c;
    return out;
  }
  Hcl2.toLab = toLab;
  function copy(out, c) {
    out[0] = c[0];
    out[1] = c[1];
    out[2] = c[2];
    return out;
  }
  Hcl2.copy = copy;
  function saturate2(out, c, amount) {
    out[0] = c[0];
    out[1] = Math.max(0, c[1] + Kn * amount);
    out[2] = c[2];
    return out;
  }
  Hcl2.saturate = saturate2;
  function desaturate(out, c, amount) {
    return saturate2(out, c, -amount);
  }
  Hcl2.desaturate = desaturate;
  const tmpDarkenLab = [0, 0, 0];
  function darken(out, c, amount) {
    toLab(tmpDarkenLab, c);
    return Lab.toHcl(out, Lab.darken(tmpDarkenLab, tmpDarkenLab, amount));
  }
  Hcl2.darken = darken;
  function lighten(out, c, amount) {
    return darken(out, c, -amount);
  }
  Hcl2.lighten = lighten;
  const Kn = 18;
})(Hcl || (Hcl = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/color/color.js
function Color(hex) {
  return hex;
}
(function(Color2) {
  function toStyle(hexColor) {
    return `rgb(${hexColor >> 16 & 255}, ${hexColor >> 8 & 255}, ${hexColor & 255})`;
  }
  Color2.toStyle = toStyle;
  function toHexStyle(hexColor) {
    return "#" + ("000000" + hexColor.toString(16)).slice(-6);
  }
  Color2.toHexStyle = toHexStyle;
  function toHexString(hexColor) {
    return "0x" + ("000000" + hexColor.toString(16)).slice(-6);
  }
  Color2.toHexString = toHexString;
  function toRgbString(hexColor) {
    return `RGB: ${Color2.toRgb(hexColor).join(", ")}`;
  }
  Color2.toRgbString = toRgbString;
  function toRgb(hexColor) {
    return [hexColor >> 16 & 255, hexColor >> 8 & 255, hexColor & 255];
  }
  Color2.toRgb = toRgb;
  function toRgbNormalized(hexColor) {
    return [(hexColor >> 16 & 255) / 255, (hexColor >> 8 & 255) / 255, (hexColor & 255) / 255];
  }
  Color2.toRgbNormalized = toRgbNormalized;
  function fromHexStyle(s) {
    return parseInt(s.replace("#", "0x"));
  }
  Color2.fromHexStyle = fromHexStyle;
  function fromHexString(s) {
    return parseInt(s);
  }
  Color2.fromHexString = fromHexString;
  function fromRgb(r, g, b) {
    return r << 16 | g << 8 | b;
  }
  Color2.fromRgb = fromRgb;
  function fromNormalizedRgb(r, g, b) {
    return r * 255 << 16 | g * 255 << 8 | b * 255;
  }
  Color2.fromNormalizedRgb = fromNormalizedRgb;
  function fromArray(array, offset) {
    return fromRgb(array[offset], array[offset + 1], array[offset + 2]);
  }
  Color2.fromArray = fromArray;
  function fromNormalizedArray(array, offset) {
    return fromNormalizedRgb(array[offset], array[offset + 1], array[offset + 2]);
  }
  Color2.fromNormalizedArray = fromNormalizedArray;
  function toArray(hexColor, array, offset) {
    array[offset] = hexColor >> 16 & 255;
    array[offset + 1] = hexColor >> 8 & 255;
    array[offset + 2] = hexColor & 255;
    return array;
  }
  Color2.toArray = toArray;
  function toArrayNormalized(hexColor, array, offset) {
    array[offset] = (hexColor >> 16 & 255) / 255;
    array[offset + 1] = (hexColor >> 8 & 255) / 255;
    array[offset + 2] = (hexColor & 255) / 255;
    return array;
  }
  Color2.toArrayNormalized = toArrayNormalized;
  function toVec3(out, hexColor) {
    out[0] = hexColor >> 16 & 255;
    out[1] = hexColor >> 8 & 255;
    out[2] = hexColor & 255;
    return out;
  }
  Color2.toVec3 = toVec3;
  function toVec3Normalized(out, hexColor) {
    out[0] = (hexColor >> 16 & 255) / 255;
    out[1] = (hexColor >> 8 & 255) / 255;
    out[2] = (hexColor & 255) / 255;
    return out;
  }
  Color2.toVec3Normalized = toVec3Normalized;
  function interpolate2(c1, c2, t) {
    const r1 = c1 >> 16 & 255;
    const g1 = c1 >> 8 & 255;
    const b1 = c1 & 255;
    const r2 = c2 >> 16 & 255;
    const g2 = c2 >> 8 & 255;
    const b2 = c2 & 255;
    const r = r1 + (r2 - r1) * t;
    const g = g1 + (g2 - g1) * t;
    const b = b1 + (b2 - b1) * t;
    return r << 16 | g << 8 | b;
  }
  Color2.interpolate = interpolate2;
  function hasHue(c) {
    const r = c >> 16 & 255;
    const g = c >> 8 & 255;
    const b = c & 255;
    return r !== g || r !== b;
  }
  Color2.hasHue = hasHue;
  const tmpSaturateHcl = [0, 0, 0];
  function saturate2(c, amount) {
    if (!hasHue(c))
      return c;
    Hcl.fromColor(tmpSaturateHcl, c);
    return Hcl.toColor(Hcl.saturate(tmpSaturateHcl, tmpSaturateHcl, amount));
  }
  Color2.saturate = saturate2;
  function desaturate(c, amount) {
    return saturate2(c, -amount);
  }
  Color2.desaturate = desaturate;
  const tmpDarkenLab = [0, 0, 0];
  function darken(c, amount) {
    Lab.fromColor(tmpDarkenLab, c);
    return Lab.toColor(Lab.darken(tmpDarkenLab, tmpDarkenLab, amount));
  }
  Color2.darken = darken;
  function lighten(c, amount) {
    return darken(c, -amount);
  }
  Color2.lighten = lighten;
  function _luminance(x) {
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  }
  function luminance(c) {
    const r = _luminance((c >> 16 & 255) / 255);
    const g = _luminance((c >> 8 & 255) / 255);
    const b = _luminance((c & 255) / 255);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  Color2.luminance = luminance;
  function contrast(a, b) {
    const l1 = luminance(a);
    const l2 = luminance(b);
    return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
  }
  Color2.contrast = contrast;
  ;
  function _sRGBToLinear(c) {
    return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
  }
  function sRGBToLinear(c) {
    return fromNormalizedRgb(_sRGBToLinear((c >> 16 & 255) / 255), _sRGBToLinear((c >> 8 & 255) / 255), _sRGBToLinear((c & 255) / 255));
  }
  Color2.sRGBToLinear = sRGBToLinear;
  function _linearToSRGB(c) {
    return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
  }
  function linearToSRGB(c) {
    return fromNormalizedRgb(_linearToSRGB((c >> 16 & 255) / 255), _linearToSRGB((c >> 8 & 255) / 255), _linearToSRGB((c & 255) / 255));
  }
  Color2.linearToSRGB = linearToSRGB;
})(Color || (Color = {}));
function ColorList(label, type, description, list) {
  return { label, description, list, type };
}
function ColorMap(o) {
  return o;
}
function getAdjustedColorMap(map, saturation, lightness) {
  const adjustedMap = {};
  for (const e in map) {
    let c = map[e];
    c = Color.saturate(c, saturation);
    c = Color.darken(c, -lightness);
    adjustedMap[e] = c;
  }
  return adjustedMap;
}
function ColorSwatch(l) {
  return l;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/string.js
function splitCamelCase(str, separator = " ") {
  return str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, `$1${separator}$2`);
}
function camelCaseToWords(str) {
  return capitalize(splitCamelCase(str));
}
var upperCase = (str) => str.toUpperCase();
function upperCaseAny(value) {
  if (!value)
    return "";
  return typeof value === "string" ? value.toUpperCase() : `${value}`.toUpperCase();
}
function capitalize(str) {
  return str.toLowerCase().replace(/^\w|\s\w/g, upperCase);
}
function splitSnakeCase(str) {
  return str.replace(/_/g, " ");
}
function splitKebabCase(str) {
  return str.replace(/-/g, " ");
}
function stringToWords(str) {
  return capitalize(splitCamelCase(splitSnakeCase(splitKebabCase(str))));
}
function substringStartsWith(str, start4, end4, target) {
  const len = target.length;
  if (len > end4 - start4)
    return false;
  for (let i = 0; i < len; i++) {
    if (str.charCodeAt(start4 + i) !== target.charCodeAt(i))
      return false;
  }
  return true;
}
function interpolate(str, params) {
  const names = Object.keys(params);
  const values = Object.values(params);
  return new Function(...names, `return \`${str}\`;`)(...values);
}
function stripTags(str) {
  return str.replace(/<\/?[^>]+>/g, "");
}
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/color/lists.js
var ColorLists = {
  /**
   * Brewer Color Lists
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The Pennsylvania State University.
   * Licensed under the Apache License, Version 2.0 (the "License");
   */
  "orange-red": ColorList("Orange-Red", "sequential", "Orange-Red, sequential color scheme from ColorBrewer 2.0", [16775148, 16705736, 16635038, 16628612, 16551257, 15689032, 14102559, 11730944, 8323072]),
  "purple-blue": ColorList("Purple-Blue", "sequential", "Purple-Blue, sequential color scheme from ColorBrewer 2.0", [16775163, 15525874, 13685222, 10927579, 7645647, 3576e3, 356528, 285325, 145496]),
  "blue-purple": ColorList("Blue-Purple", "sequential", "Blue-Purple, sequential color scheme from ColorBrewer 2.0", [16252157, 14740724, 12571622, 10403034, 9213638, 9202609, 8929693, 8458108, 5046347]),
  "oranges": ColorList("Oranges", "sequential", "", [16774635, 16705230, 16634018, 16625259, 16616764, 15821075, 14239745, 10892803, 8333060]),
  "blue-green": ColorList("Blue-Green", "sequential", "", [16252157, 15070713, 13429990, 10082505, 6734500, 4304502, 2329413, 27948, 17435]),
  "yellow-orange-brown": ColorList("Yellow-Orange-Brown", "sequential", "", [16777189, 16775100, 16704401, 16696399, 16685353, 15495188, 13388802, 10040324, 6694150]),
  "yellow-green": ColorList("Yellow-Green", "sequential", "", [16777189, 16252089, 14282915, 11394446, 7915129, 4303709, 2327619, 26679, 17705]),
  "reds": ColorList("Reds", "sequential", "", [16774640, 16703698, 16563105, 16552562, 16476746, 15678252, 13309981, 10817301, 6750221]),
  "red-purple": ColorList("Red-Purple", "sequential", "", [16775155, 16638173, 16565696, 16424885, 16214177, 14496919, 11403646, 7995767, 4784234]),
  "greens": ColorList("Greens", "sequential", "", [16252149, 15070688, 13101504, 10607003, 7652470, 4303709, 2329413, 27948, 17435]),
  "yellow-green-blue": ColorList("Yellow-Green-Blue", "sequential", "", [16777177, 15595697, 13101492, 8375739, 4306628, 1937856, 2252456, 2438292, 531800]),
  "purples": ColorList("Purples", "sequential", "", [16579581, 15724021, 14342891, 12369372, 10394312, 8420794, 6967715, 5515151, 4128893]),
  "green-blue": ColorList("Green-Blue", "sequential", "", [16252144, 14742491, 13429701, 11066805, 8113348, 5157843, 2854078, 551084, 540801]),
  "greys": ColorList("Greys", "sequential", "", [16777215, 15790320, 14277081, 12434877, 9868950, 7566195, 5395026, 2434341, 0]),
  "yellow-orange-red": ColorList("Yellow-Orange-Red", "sequential", "", [16777164, 16772512, 16701814, 16691788, 16616764, 16535082, 14883356, 12386342, 8388646]),
  "purple-red": ColorList("Purple-Red", "sequential", "", [16250105, 15196655, 13941210, 13210823, 14640560, 15149450, 13505110, 9961539, 6750239]),
  "blues": ColorList("Blues", "sequential", "", [16251903, 14609399, 13032431, 10406625, 7057110, 4362950, 2191797, 545180, 536683]),
  "purple-blue-green": ColorList("Purple-Blue-Green", "sequential", "", [16775163, 15524592, 13685222, 10927579, 6793679, 3576e3, 164234, 93273, 83510]),
  "spectral": ColorList("Spectral", "diverging", "", [10355010, 13975119, 16018755, 16625249, 16703627, 16777151, 15136152, 11263396, 6734501, 3311805, 6180770]),
  "red-yellow-green": ColorList("Red-Yellow-Green", "diverging", "", [10813478, 14102567, 16018755, 16625249, 16703627, 16777151, 14282635, 10934634, 6733155, 1742928, 26679]),
  "red-blue": ColorList("Red-Blue", "diverging", "", [6750239, 11671595, 14049357, 16033154, 16636871, 16250871, 13755888, 9618910, 4428739, 2188972, 340065]),
  "pink-yellow-green": ColorList("Pink-Yellow-Green", "diverging", "", [9306450, 12917629, 14579630, 15840986, 16638191, 16250871, 15136208, 12116358, 8371265, 5083681, 2581529]),
  "purple-green": ColorList("Purple-Green", "diverging", "", [4194379, 7744131, 10055851, 12756431, 15193320, 16250871, 14282963, 10935200, 5942881, 1800247, 17435]),
  "red-yellow-blue": ColorList("Red-Yellow-Blue", "diverging", "Red-Yellow-Blue, diverging color scheme from ColorBrewer 2.0", [10813478, 14102567, 16018755, 16625249, 16703632, 16777151, 14742520, 11262441, 7646673, 4552116, 3225237]),
  "brown-white-green": ColorList("Brown-White-Green", "diverging", "", [5517317, 9195786, 12550445, 14664317, 16181443, 16119285, 13101797, 8441281, 3512207, 91742, 15408]),
  "red-grey": ColorList("Red-Grey", "diverging", "", [6750239, 11671595, 14049357, 16033154, 16636871, 16777215, 14737632, 12237498, 8882055, 5066061, 1710618]),
  "orange-purple": ColorList("Orange-Purple", "diverging", "", [8338184, 11753478, 14713364, 16627811, 16703670, 16250871, 14211819, 11709394, 8418220, 5515144, 2949195]),
  "set-2": ColorList("Set-2", "qualitative", "", [6734501, 16551266, 9281739, 15174339, 10934356, 16767279, 15058068, 11776947]),
  "accent": ColorList("Accent", "qualitative", "", [8374655, 12496596, 16629894, 16777113, 3697840, 15729279, 12540695, 6710886]),
  "set-1": ColorList("Set-1", "qualitative", "", [14948892, 3636920, 5091146, 9981603, 16744192, 16777011, 10901032, 16220607, 10066329]),
  "set-3": ColorList("Set-3", "qualitative", "", [9294791, 16777139, 12499674, 16482418, 8434131, 16626786, 11787881, 16567781, 14277081, 12353725, 13429701, 16772463]),
  "dark-2": ColorList("Dark-2", "qualitative", "", [1810039, 14245634, 7696563, 15149450, 6727198, 15117058, 10909213, 6710886]),
  "paired": ColorList("Paired", "qualitative", "", [10931939, 2062516, 11722634, 3383340, 16489113, 14883356, 16629615, 16744192, 13284054, 6962586, 16777113, 11622696]),
  "pastel-2": ColorList("Pastel-2", "qualitative", "", [11789005, 16633260, 13358568, 16042724, 15136201, 16773806, 15852236, 13421772]),
  "pastel-1": ColorList("Pastel-1", "qualitative", "", [16495790, 11783651, 13429701, 14601188, 16701862, 16777164, 15063229, 16636652, 15921906]),
  "many-distinct": ColorList("Many-Distinct", "qualitative", "", [
    // dark-2
    1810039,
    14245634,
    7696563,
    15149450,
    6727198,
    15117058,
    10909213,
    6710886,
    // set-1
    14948892,
    3636920,
    5091146,
    9981603,
    16744192,
    16777011,
    10901032,
    16220607,
    10066329,
    // set-2
    6734501,
    16551266,
    9281739,
    15174339,
    10934356,
    16767279,
    15058068,
    11776947
  ]),
  /**
   * Matplotlib colormaps, including various perceptually uniform shades, see https://bids.github.io/colormap/
   */
  "magma": ColorList("Magma", "sequential", "Perceptually uniform shades of black-red-white", [4329332, 4853881, 5378684, 5903742, 6363263, 6888576, 7413633, 7938689, 8463745, 8988801, 9513600, 10038655, 10563454, 11088508, 11613562, 12138360, 12728949, 13254258, 13714030, 14239338, 14699366, 15094114, 15489119, 15753309, 16017499, 16216411, 16350045, 16483424, 16551523, 16619368, 16621934, 16689780, 16692091, 16694402, 16696969, 16633746, 16636058, 16638371, 16575148, 16577461, 16514239]),
  "inferno": ColorList("Inferno", "sequential", "Perceptually uniform shades of black-red-yellow", [4721514, 5246316, 5771373, 6296430, 6821486, 7346542, 7871597, 8396651, 8921450, 9446504, 9971557, 10496610, 10956127, 11481435, 12006486, 12466258, 12926285, 13386056, 13780802, 14241085, 14570295, 14965297, 15229227, 15558693, 15757342, 15956248, 16154897, 16288267, 16421638, 16489734, 16492043, 16494612, 16496926, 16368426, 16305463, 16111429, 15982678, 15853928, 15856253, 16119953, 16580260]),
  "plasma": ColorList("Plasma", "sequential", "Perceptually uniform shades of blue-red-yellow", [1771148, 2426257, 3081365, 3671193, 4195228, 4784799, 5308834, 5833124, 6357158, 6815911, 7340200, 7864744, 8324007, 8783782, 9309348, 9769377, 10164126, 10624154, 11018902, 11413393, 11808141, 12137352, 12466307, 12795519, 13124730, 13453685, 13717361, 14046573, 14309992, 14573668, 14837344, 15035483, 15299159, 15497299, 15695438, 15893834, 16091974, 16224833, 16357693, 16425017, 16557877, 16625457, 16627245, 16629289, 16631334, 16567845, 16438820, 16310052, 16115494, 15921190, 15726625]),
  "viridis": ColorList("Viridis", "sequential", "Perceptually uniform shades of blue-green-yellow", [4524123, 4656994, 4658793, 4726127, 4727668, 4663929, 4599933, 4535937, 4406404, 4276870, 4081800, 3952010, 3822475, 3627148, 3497356, 3302029, 3172237, 3042446, 2912654, 2782862, 2652814, 2523022, 2393229, 2328973, 2198924, 2069132, 2004874, 2005897, 2007175, 2139525, 2337154, 2666111, 3060348, 3520376, 4045684, 4570991, 5227369, 5883748, 6605661, 7392854, 8180303, 8967495, 9819967, 10672695, 11525166, 12443174, 13295646, 14148121, 15000344, 15852828, 16639780]),
  "cividis": ColorList("Cividis", "sequential", "Perceptually uniform shades of blue-green-yellow, should look effectively identical to colorblind and non-colorblind users", [11367, 12400, 537456, 1455727, 2046574, 2571629, 3031404, 3425388, 3754092, 4148075, 4476779, 4805227, 5133932, 5396844, 5725549, 5988462, 6317166, 6580079, 6843249, 7171698, 7434867, 7697781, 7960951, 8289656, 8618104, 8881272, 9209976, 9538679, 9867127, 10195830, 10524533, 10853235, 11181938, 11510640, 11839343, 12168045, 12497002, 12891240, 13219941, 13548642, 13943134, 14271834, 14666326, 14995025, 15389516, 15718470, 16112703, 16507190, 16639799]),
  "twilight": ColorList("Twilight", "sequential", "Perceptually uniform shades of white-blue-black-red-white, cyclic", [14670305, 14211037, 13554648, 12766675, 11847630, 10993866, 10139847, 9351365, 8628419, 8036290, 7509952, 7048895, 6718653, 6519739, 6386105, 6252470, 6184114, 6181293, 6112935, 6044831, 5976470, 5777291, 5447293, 5052270, 4592479, 4067665, 3674181, 3281211, 3150646, 3543352, 4067644, 4657728, 5379141, 6166345, 6953549, 7741007, 8463184, 9120336, 9777743, 10304079, 10830671, 11291984, 11687762, 12083541, 12348505, 12613471, 12878439, 13077872, 13211771, 13411209, 13545111, 13809830, 14074293, 14338756, 14537169, 14735067, 14801121]),
  /**
   * https://ai.googleblog.com/2019/08/turbo-improved-rainbow-colormap-for.html
   */
  "turbo": ColorList("Turbo", "sequential", "Improved (smooth) rainbow colormap for visualization", [4866485, 4872413, 4354034, 3770361, 3120629, 2667241, 2475736, 2611140, 3073454, 3928216, 5109892, 6487408, 8126047, 9829201, 11531332, 13167162, 14605618, 15780908, 16693543, 16753699, 16748063, 16741916, 16146200, 15026195, 13644558, 12198408, 10818563, 9833728]),
  /**
   * Other
   */
  "rainbow": ColorList("Rainbow", "sequential", "", [3367393, 3516485, 16383744, 15501073, 12526114]),
  "red-white-blue": ColorList("Red-White-Blue", "diverging", "", [12526114, 16777215, 3367393])
};
var ColorListNames = Object.keys(ColorLists);
var ColorListOptions = ColorListNames.map((n) => [n, ColorLists[n].label, capitalize(ColorLists[n].type)]);
var ColorListOptionsScale = ColorListOptions.filter((v) => ColorLists[v[0]].type === "diverging" || ColorLists[v[0]].type === "sequential");
var ColorListOptionsSet = ColorListOptions.filter((v) => ColorLists[v[0]].type === "qualitative");
function getColorListFromName(name) {
  if (name in ColorLists)
    return ColorLists[name];
  console.warn(`unknown color list named '${name}'`);
  return ColorLists["red-yellow-blue"];
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/util/sort.js
function arrayLess(arr, i, j) {
  return arr[i] - arr[j];
}
function arraySwap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function medianPivotIndex(data, cmp, l, r) {
  const m = l + r >> 1;
  if (cmp(data, l, r) > 0)
    return cmp(data, l, m) > 0 ? cmp(data, m, r) > 0 ? m : r : l;
  else
    return cmp(data, r, m) > 0 ? cmp(data, m, l) > 0 ? m : l : r;
}
function partition(ctx, l, r) {
  const { cmp, swap, data, parts } = ctx;
  let equals = l + 1, tail = r;
  swap(data, l, medianPivotIndex(data, cmp, l, r));
  while (cmp(data, tail, l) > 0) {
    --tail;
  }
  for (let i = l + 1; i <= tail; i++) {
    const c = cmp(data, i, l);
    if (c > 0) {
      swap(data, i, tail);
      --tail;
      while (cmp(data, tail, l) > 0) {
        --tail;
      }
      i--;
    } else if (c === 0) {
      swap(data, i, equals);
      equals++;
    }
  }
  for (let i = l; i < equals; i++) {
    swap(data, i, l + tail - i);
  }
  parts[0] = tail - equals + l + 1;
  parts[1] = tail;
}
function insertionSort({ data, cmp, swap }, start4, end4) {
  for (let i = start4 + 1; i <= end4; i++) {
    let j = i - 1;
    while (j >= start4 && cmp(data, j, j + 1) > 0) {
      swap(data, j, j + 1);
      j = j - 1;
    }
  }
}
function quickSort(ctx, low, high) {
  const { parts } = ctx;
  while (low < high) {
    if (high - low < 16) {
      insertionSort(ctx, low, high);
      return;
    }
    partition(ctx, low, high);
    const li = parts[0], ri = parts[1];
    if (li - low < high - ri) {
      quickSort(ctx, low, li - 1);
      low = ri + 1;
    } else {
      quickSort(ctx, ri + 1, high);
      high = li - 1;
    }
  }
}
function partitionArrayAsc(data, parts, l, r) {
  let equals = l + 1, tail = r;
  arraySwap(data, l, medianPivotIndex(data, arrayLess, l, r));
  const pivot = data[l];
  while (data[tail] > pivot) {
    --tail;
  }
  for (let i = l + 1; i <= tail; i++) {
    const v = data[i];
    if (v > pivot) {
      arraySwap(data, i, tail);
      --tail;
      while (data[tail] > pivot) {
        --tail;
      }
      i--;
    } else if (v === pivot) {
      arraySwap(data, i, equals);
      ++equals;
    }
  }
  for (let i = l; i < equals; i++) {
    arraySwap(data, i, l + tail - i);
  }
  parts[0] = tail - equals + l + 1;
  parts[1] = tail;
}
function insertionSortArrayAsc(data, start4, end4) {
  for (let i = start4 + 1; i <= end4; i++) {
    const key = data[i];
    let j = i - 1;
    while (j >= start4 && data[j] > key) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = key;
  }
}
function quickSortArrayAsc(data, parts, low, high) {
  while (low < high) {
    if (high - low < 16) {
      insertionSortArrayAsc(data, low, high);
      return;
    }
    partitionArrayAsc(data, parts, low, high);
    const li = parts[0], ri = parts[1];
    if (li - low < high - ri) {
      quickSortArrayAsc(data, parts, low, li - 1);
      low = ri + 1;
    } else {
      quickSortArrayAsc(data, parts, ri + 1, high);
      high = li - 1;
    }
  }
}
function sortArray(data, cmp = arrayLess) {
  return sortArrayRange(data, 0, data.length, cmp);
}
function sortArrayRange(data, start4, end4, cmp = arrayLess) {
  if (cmp === arrayLess)
    quickSortArrayAsc(data, [0, 0], start4, end4 - 1);
  else
    quickSort({ data, cmp, swap: arraySwap, parts: [0, 0] }, start4, end4 - 1);
  return data;
}
function sort(data, start4, end4, cmp, swap) {
  const ctx = { data, cmp, swap, parts: [0, 0] };
  quickSort(ctx, start4, end4 - 1);
  return data;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/util/equivalence-classes.js
var EquivalenceClassesImpl = class {
  createGroup(key, value) {
    const id = this.id++;
    const keys = [key];
    this.groups[id] = keys;
    return { id, keys, value };
  }
  // Return the group representative.
  add(key, a) {
    const hash = this.getHash(a);
    if (this.byHash.has(hash)) {
      const groups = this.byHash.get(hash);
      for (let i = 0, _i = groups.length; i < _i; i++) {
        const group2 = groups[i];
        if (this.areEqual(a, group2.value)) {
          group2.keys[group2.keys.length] = key;
          return group2.value;
        }
      }
      const group = this.createGroup(key, a);
      groups[groups.length] = group;
      return group.value;
    } else {
      const group = this.createGroup(key, a);
      this.byHash.set(hash, [group]);
      return group.value;
    }
  }
  constructor(getHash, areEqual4) {
    this.getHash = getHash;
    this.areEqual = areEqual4;
    this.id = 0;
    this.byHash = /* @__PURE__ */ new Map();
    this.groups = [];
  }
};
function EquivalenceClasses(getHash, areEqual4) {
  return new EquivalenceClassesImpl(getHash, areEqual4);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/util/hash-functions.js
function hash1(i) {
  let a = i ^ i >> 4;
  a = (a ^ 3735928559) + (a << 5);
  a = a ^ a >> 11;
  return a;
}
function hash2(i, j) {
  let a = 23;
  a = 31 * a + i | 0;
  a = 31 * a + j | 0;
  a = a ^ a >> 4;
  a = (a ^ 3735928559) + (a << 5);
  a = a ^ a >> 11;
  return a;
}
function hash3(i, j, k) {
  let a = 23;
  a = 31 * a + i | 0;
  a = 31 * a + j | 0;
  a = 31 * a + k | 0;
  a = a ^ a >> 4;
  a = (a ^ 3735928559) + (a << 5);
  a = a ^ a >> 11;
  return a;
}
function hash4(i, j, k, l) {
  let a = 23;
  a = 31 * a + i | 0;
  a = 31 * a + j | 0;
  a = 31 * a + k | 0;
  a = 31 * a + l | 0;
  a = a ^ a >> 4;
  a = (a ^ 3735928559) + (a << 5);
  a = a ^ a >> 11;
  return a;
}
function hashString(s) {
  let h = 0;
  for (let i = 0, l = s.length; i < l; i++) {
    h = (h << 5) - h + s.charCodeAt(i) | 0;
  }
  return h;
}
function cantorPairing(a, b) {
  return (a + b) * (a + b + 1) / 2 + b;
}
function sortedCantorPairing(a, b) {
  return a < b ? cantorPairing(a, b) : cantorPairing(b, a);
}
function invertCantorPairing(out, z) {
  const w = Math.floor((Math.sqrt(8 * z + 1) - 1) / 2);
  const t = (w * w + w) / 2;
  const y = z - t;
  out[0] = w - y;
  out[1] = y;
  return out;
}
function hashFnv32a(array) {
  let hval = 2166136261;
  for (let i = 0, il = array.length; i < il; ++i) {
    hval ^= array[i];
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  return hval >>> 0;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-math/linear-algebra/3d/common.js
var EPSILON = 1e-6;
function equalEps(a, b, eps) {
  return Math.abs(a - b) <= eps;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-math/linear-algebra/3d/mat4.js
function Mat4() {
  return Mat4.zero();
}
(function(Mat42) {
  function zero() {
    const ret = [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    ret[0] = 0;
    return ret;
  }
  Mat42.zero = zero;
  function identity() {
    const out = zero();
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  Mat42.identity = identity;
  function setIdentity(mat) {
    mat[0] = 1;
    mat[1] = 0;
    mat[2] = 0;
    mat[3] = 0;
    mat[4] = 0;
    mat[5] = 1;
    mat[6] = 0;
    mat[7] = 0;
    mat[8] = 0;
    mat[9] = 0;
    mat[10] = 1;
    mat[11] = 0;
    mat[12] = 0;
    mat[13] = 0;
    mat[14] = 0;
    mat[15] = 1;
    return mat;
  }
  Mat42.setIdentity = setIdentity;
  function setZero(mat) {
    for (let i = 0; i < 16; i++)
      mat[i] = 0;
    return mat;
  }
  Mat42.setZero = setZero;
  function ofRows(rows) {
    const out = zero();
    for (let i = 0; i < 4; i++) {
      const r = rows[i];
      for (let j = 0; j < 4; j++) {
        out[4 * j + i] = r[j];
      }
    }
    return out;
  }
  Mat42.ofRows = ofRows;
  const _id = identity();
  function isIdentity2(m, eps) {
    return areEqual4(m, _id, typeof eps === "undefined" ? EPSILON : eps);
  }
  Mat42.isIdentity = isIdentity2;
  function hasNaN(m) {
    for (let i = 0; i < 16; i++)
      if (isNaN(m[i]))
        return true;
    return false;
  }
  Mat42.hasNaN = hasNaN;
  function areEqual4(a, b, eps) {
    for (let i = 0; i < 16; i++) {
      if (Math.abs(a[i] - b[i]) > eps)
        return false;
    }
    return true;
  }
  Mat42.areEqual = areEqual4;
  function setValue(a, i, j, value) {
    a[4 * j + i] = value;
  }
  Mat42.setValue = setValue;
  function getValue(a, i, j) {
    return a[4 * j + i];
  }
  Mat42.getValue = getValue;
  function toArray(a, out, offset) {
    out[offset + 0] = a[0];
    out[offset + 1] = a[1];
    out[offset + 2] = a[2];
    out[offset + 3] = a[3];
    out[offset + 4] = a[4];
    out[offset + 5] = a[5];
    out[offset + 6] = a[6];
    out[offset + 7] = a[7];
    out[offset + 8] = a[8];
    out[offset + 9] = a[9];
    out[offset + 10] = a[10];
    out[offset + 11] = a[11];
    out[offset + 12] = a[12];
    out[offset + 13] = a[13];
    out[offset + 14] = a[14];
    out[offset + 15] = a[15];
    return out;
  }
  Mat42.toArray = toArray;
  function fromArray(a, array, offset) {
    a[0] = array[offset + 0];
    a[1] = array[offset + 1];
    a[2] = array[offset + 2];
    a[3] = array[offset + 3];
    a[4] = array[offset + 4];
    a[5] = array[offset + 5];
    a[6] = array[offset + 6];
    a[7] = array[offset + 7];
    a[8] = array[offset + 8];
    a[9] = array[offset + 9];
    a[10] = array[offset + 10];
    a[11] = array[offset + 11];
    a[12] = array[offset + 12];
    a[13] = array[offset + 13];
    a[14] = array[offset + 14];
    a[15] = array[offset + 15];
    return a;
  }
  Mat42.fromArray = fromArray;
  function fromBasis(a, x, y, z) {
    setZero(a);
    setValue(a, 0, 0, x[0]);
    setValue(a, 1, 0, x[1]);
    setValue(a, 2, 0, x[2]);
    setValue(a, 0, 1, y[0]);
    setValue(a, 1, 1, y[1]);
    setValue(a, 2, 1, y[2]);
    setValue(a, 0, 2, z[0]);
    setValue(a, 1, 2, z[1]);
    setValue(a, 2, 2, z[2]);
    setValue(a, 3, 3, 1);
    return a;
  }
  Mat42.fromBasis = fromBasis;
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  Mat42.copy = copy;
  function clone(a) {
    return copy(zero(), a);
  }
  Mat42.clone = clone;
  function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
  }
  Mat42.getTranslation = getTranslation;
  function getScaling(out, mat) {
    const m11 = mat[0];
    const m12 = mat[1];
    const m13 = mat[2];
    const m21 = mat[4];
    const m22 = mat[5];
    const m23 = mat[6];
    const m31 = mat[8];
    const m32 = mat[9];
    const m33 = mat[10];
    out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
    out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
    out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
    return out;
  }
  Mat42.getScaling = getScaling;
  function getRotation(out, mat) {
    const trace = mat[0] + mat[5] + mat[10];
    let S = 0;
    if (trace > 0) {
      S = Math.sqrt(trace + 1) * 2;
      out[3] = 0.25 * S;
      out[0] = (mat[6] - mat[9]) / S;
      out[1] = (mat[8] - mat[2]) / S;
      out[2] = (mat[1] - mat[4]) / S;
    } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
      S = Math.sqrt(1 + mat[0] - mat[5] - mat[10]) * 2;
      out[3] = (mat[6] - mat[9]) / S;
      out[0] = 0.25 * S;
      out[1] = (mat[1] + mat[4]) / S;
      out[2] = (mat[8] + mat[2]) / S;
    } else if (mat[5] > mat[10]) {
      S = Math.sqrt(1 + mat[5] - mat[0] - mat[10]) * 2;
      out[3] = (mat[8] - mat[2]) / S;
      out[0] = (mat[1] + mat[4]) / S;
      out[1] = 0.25 * S;
      out[2] = (mat[6] + mat[9]) / S;
    } else {
      S = Math.sqrt(1 + mat[10] - mat[0] - mat[5]) * 2;
      out[3] = (mat[1] - mat[4]) / S;
      out[0] = (mat[8] + mat[2]) / S;
      out[1] = (mat[6] + mat[9]) / S;
      out[2] = 0.25 * S;
    }
    return out;
  }
  Mat42.getRotation = getRotation;
  function extractRotation(out, mat) {
    const scaleX = 1 / Math.sqrt(mat[0] * mat[0] + mat[1] * mat[1] + mat[2] * mat[2]);
    const scaleY = 1 / Math.sqrt(mat[4] * mat[4] + mat[5] * mat[5] + mat[6] * mat[6]);
    const scaleZ = 1 / Math.sqrt(mat[8] * mat[8] + mat[9] * mat[9] + mat[10] * mat[10]);
    out[0] = mat[0] * scaleX;
    out[1] = mat[1] * scaleX;
    out[2] = mat[2] * scaleX;
    out[3] = 0;
    out[4] = mat[4] * scaleY;
    out[5] = mat[5] * scaleY;
    out[6] = mat[6] * scaleY;
    out[7] = 0;
    out[8] = mat[8] * scaleZ;
    out[9] = mat[9] * scaleZ;
    out[10] = mat[10] * scaleZ;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  Mat42.extractRotation = extractRotation;
  function transpose(out, a) {
    if (out === a) {
      const a01 = a[1], a02 = a[2], a03 = a[3];
      const a12 = a[6], a13 = a[7];
      const a23 = a[11];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a01;
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a02;
      out[9] = a12;
      out[11] = a[14];
      out[12] = a03;
      out[13] = a13;
      out[14] = a23;
    } else {
      out[0] = a[0];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a[1];
      out[5] = a[5];
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a[2];
      out[9] = a[6];
      out[10] = a[10];
      out[11] = a[14];
      out[12] = a[3];
      out[13] = a[7];
      out[14] = a[11];
      out[15] = a[15];
    }
    return out;
  }
  Mat42.transpose = transpose;
  function tryInvert(out, a) {
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15], b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11, b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12, b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30, b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
      return false;
    }
    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return true;
  }
  Mat42.tryInvert = tryInvert;
  function invert(out, a) {
    if (!tryInvert(out, a)) {
      console.warn("non-invertible matrix.", a);
    }
    return out;
  }
  Mat42.invert = invert;
  function mul(out, a, b) {
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
  Mat42.mul = mul;
  function mulOffset(out, a, b, oOut, oA, oB) {
    const a00 = a[0 + oA], a01 = a[1 + oA], a02 = a[2 + oA], a03 = a[3 + oA], a10 = a[4 + oA], a11 = a[5 + oA], a12 = a[6 + oA], a13 = a[7 + oA], a20 = a[8 + oA], a21 = a[9 + oA], a22 = a[10 + oA], a23 = a[11 + oA], a30 = a[12 + oA], a31 = a[13 + oA], a32 = a[14 + oA], a33 = a[15 + oA];
    let b0 = b[0 + oB], b1 = b[1 + oB], b2 = b[2 + oB], b3 = b[3 + oB];
    out[0 + oOut] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1 + oOut] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2 + oOut] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3 + oOut] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4 + oB];
    b1 = b[5 + oB];
    b2 = b[6 + oB];
    b3 = b[7 + oB];
    out[4 + oOut] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5 + oOut] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6 + oOut] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7 + oOut] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8 + oB];
    b1 = b[9 + oB];
    b2 = b[10 + oB];
    b3 = b[11 + oB];
    out[8 + oOut] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9 + oOut] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10 + oOut] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11 + oOut] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12 + oB];
    b1 = b[13 + oB];
    b2 = b[14 + oB];
    b3 = b[15 + oB];
    out[12 + oOut] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13 + oOut] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14 + oOut] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15 + oOut] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
  Mat42.mulOffset = mulOffset;
  function mul3(out, a, b, c) {
    return mul(out, mul(out, a, b), c);
  }
  Mat42.mul3 = mul3;
  function translate(out, a, v) {
    const x = v[0], y = v[1], z = v[2];
    let a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23;
    if (a === out) {
      out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
      out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
      out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
      out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a03;
      out[4] = a10;
      out[5] = a11;
      out[6] = a12;
      out[7] = a13;
      out[8] = a20;
      out[9] = a21;
      out[10] = a22;
      out[11] = a23;
      out[12] = a00 * x + a10 * y + a20 * z + a[12];
      out[13] = a01 * x + a11 * y + a21 * z + a[13];
      out[14] = a02 * x + a12 * y + a22 * z + a[14];
      out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
  }
  Mat42.translate = translate;
  function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  Mat42.fromTranslation = fromTranslation;
  function setTranslation(out, v) {
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    return out;
  }
  Mat42.setTranslation = setTranslation;
  function setAxes(out, view, right, up) {
    out[0] = right[0];
    out[4] = right[1];
    out[8] = right[2];
    out[1] = up[0];
    out[5] = up[1];
    out[9] = up[2];
    out[2] = view[0];
    out[6] = view[1];
    out[10] = view[2];
    return out;
  }
  Mat42.setAxes = setAxes;
  function rotate(out, a, rad, axis) {
    let x = axis[0], y = axis[1], z = axis[2];
    let len = Math.sqrt(x * x + y * y + z * z);
    if (Math.abs(len) < EPSILON) {
      return identity();
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    const s = Math.sin(rad);
    const c = Math.cos(rad);
    const t = 1 - c;
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    const b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s;
    const b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s;
    const b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    return out;
  }
  Mat42.rotate = rotate;
  function fromRotation(out, rad, axis) {
    let x = axis[0], y = axis[1], z = axis[2];
    let len = Math.sqrt(x * x + y * y + z * z);
    if (Math.abs(len) < EPSILON) {
      return setIdentity(out);
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    const s = Math.sin(rad);
    const c = Math.cos(rad);
    const t = 1 - c;
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  Mat42.fromRotation = fromRotation;
  function scale(out, a, v) {
    const x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  Mat42.scale = scale;
  function scaleUniformly(out, a, scale2) {
    out[0] = a[0] * scale2;
    out[1] = a[1] * scale2;
    out[2] = a[2] * scale2;
    out[3] = a[3] * scale2;
    out[4] = a[4] * scale2;
    out[5] = a[5] * scale2;
    out[6] = a[6] * scale2;
    out[7] = a[7] * scale2;
    out[8] = a[8] * scale2;
    out[9] = a[9] * scale2;
    out[10] = a[10] * scale2;
    out[11] = a[11] * scale2;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  Mat42.scaleUniformly = scaleUniformly;
  function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  Mat42.fromScaling = fromScaling;
  function fromUniformScaling(out, scale2) {
    out[0] = scale2;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = scale2;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = scale2;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  Mat42.fromUniformScaling = fromUniformScaling;
  const _v3pa = [0, 0, 0];
  const _v3pb = [0, 0, 0];
  function fromPlane(out, normal, point) {
    const tangent0 = Vec3.cross(_v3pa, normal, Vec3.unitX);
    if (Vec3.dot(tangent0, tangent0) < EPSILON) {
      Vec3.cross(tangent0, normal, Vec3.unitY);
    }
    Vec3.normalize(tangent0, tangent0);
    const tangent1 = Vec3.cross(_v3pb, normal, tangent0);
    Vec3.normalize(tangent1, tangent1);
    setAxes(out, normal, tangent0, tangent1);
    out[12] = point[0];
    out[13] = point[1];
    out[14] = point[2];
    out[15] = 1;
    return out;
  }
  Mat42.fromPlane = fromPlane;
  function fromMat3(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[4] = a[3];
    out[5] = a[4];
    out[6] = a[5];
    out[8] = a[6];
    out[9] = a[7];
    out[10] = a[8];
    return out;
  }
  Mat42.fromMat3 = fromMat3;
  function compose(out, position, quaternion, scale2) {
    const [x, y, z, w] = quaternion;
    const x2 = x + x, y2 = y + y, z2 = z + z;
    const xx = x * x2, xy = x * y2, xz = x * z2;
    const yy = y * y2, yz = y * z2, zz = z * z2;
    const wx = w * x2, wy = w * y2, wz = w * z2;
    const [sx, sy, sz] = scale2;
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = position[0];
    out[13] = position[1];
    out[14] = position[2];
    out[15] = 1;
    return out;
  }
  Mat42.compose = compose;
  const _v3 = [0, 0, 0];
  const _m4 = zero();
  function decompose(m, position, quaternion, scale2) {
    let sx = Vec3.magnitude(Vec3.set(_v3, m[0], m[1], m[2]));
    const sy = Vec3.magnitude(Vec3.set(_v3, m[4], m[5], m[6]));
    const sz = Vec3.magnitude(Vec3.set(_v3, m[8], m[9], m[10]));
    const det = determinant(m);
    if (det < 0)
      sx = -sx;
    position[0] = m[12];
    position[1] = m[13];
    position[2] = m[14];
    copy(_m4, m);
    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;
    _m4[0] *= invSX;
    _m4[1] *= invSX;
    _m4[2] *= invSX;
    _m4[4] *= invSY;
    _m4[5] *= invSY;
    _m4[6] *= invSY;
    _m4[8] *= invSZ;
    _m4[9] *= invSZ;
    _m4[10] *= invSZ;
    getRotation(quaternion, _m4);
    scale2[0] = sx;
    scale2[1] = sy;
    scale2[2] = sz;
    return m;
  }
  Mat42.decompose = decompose;
  function makeTable(m) {
    let ret = "";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        ret += m[4 * j + i].toString();
        if (j < 3)
          ret += " ";
      }
      if (i < 3)
        ret += "\n";
    }
    return ret;
  }
  Mat42.makeTable = makeTable;
  function determinant(a) {
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15], b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11, b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12, b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30, b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  }
  Mat42.determinant = determinant;
  function isRotationAndTranslation(a, eps) {
    return _isRotationAndTranslation(a, typeof eps !== "undefined" ? eps : EPSILON);
  }
  Mat42.isRotationAndTranslation = isRotationAndTranslation;
  function _isRotationAndTranslation(a, eps) {
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], a33 = a[15];
    if (!equalEps(a33, 1, eps) || !equalEps(a03, 0, eps) || !equalEps(a13, 0, eps) || !equalEps(a23, 0, eps)) {
      return false;
    }
    const det3x3 = Math.abs(a00 * (a11 * a22 - a12 * a21) - a01 * (a10 * a22 - a12 * a20) + a02 * (a10 * a21 - a11 * a20));
    if (!equalEps(det3x3, 1, eps)) {
      return false;
    }
    return true;
  }
  function isTranslationAndUniformScaling(a, eps) {
    return _isTranslationAndUniformScaling(a, typeof eps !== "undefined" ? eps : EPSILON);
  }
  Mat42.isTranslationAndUniformScaling = isTranslationAndUniformScaling;
  function _isTranslationAndUniformScaling(a, eps) {
    const a00 = a[0];
    return (
      // 0 base scaling
      equalEps(a[1], 0, eps) && equalEps(a[2], 0, eps) && equalEps(a[3], 0, eps) && equalEps(a[4], 0, eps) && equalEps(a[5], a00, eps) && equalEps(a[6], 0, eps) && equalEps(a[7], 0, eps) && equalEps(a[8], 0, eps) && equalEps(a[9], 0, eps) && equalEps(a[10], a00, eps) && equalEps(a[11], 0, eps) && // 12, 13, 14 translation can be anything
      equalEps(a[15], 1, eps)
    );
  }
  function fromQuat(out, q) {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const yx = y * x2;
    const yy = y * y2;
    const zx = z * x2;
    const zy = z * y2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  Mat42.fromQuat = fromQuat;
  function fromEuler(out, euler, order) {
    const x = euler[0], y = euler[1], z = euler[2];
    const a = Math.cos(x), b = Math.sin(x);
    const c = Math.cos(y), d = Math.sin(y);
    const e = Math.cos(z), f = Math.sin(z);
    if (order === "XYZ") {
      const ae = a * e, af = a * f, be = b * e, bf = b * f;
      out[0] = c * e;
      out[4] = -c * f;
      out[8] = d;
      out[1] = af + be * d;
      out[5] = ae - bf * d;
      out[9] = -b * c;
      out[2] = bf - ae * d;
      out[6] = be + af * d;
      out[10] = a * c;
    } else if (order === "YXZ") {
      const ce = c * e, cf = c * f, de = d * e, df = d * f;
      out[0] = ce + df * b;
      out[4] = de * b - cf;
      out[8] = a * d;
      out[1] = a * f;
      out[5] = a * e;
      out[9] = -b;
      out[2] = cf * b - de;
      out[6] = df + ce * b;
      out[10] = a * c;
    } else if (order === "ZXY") {
      const ce = c * e, cf = c * f, de = d * e, df = d * f;
      out[0] = ce - df * b;
      out[4] = -a * f;
      out[8] = de + cf * b;
      out[1] = cf + de * b;
      out[5] = a * e;
      out[9] = df - ce * b;
      out[2] = -a * d;
      out[6] = b;
      out[10] = a * c;
    } else if (order === "ZYX") {
      const ae = a * e, af = a * f, be = b * e, bf = b * f;
      out[0] = c * e;
      out[4] = be * d - af;
      out[8] = ae * d + bf;
      out[1] = c * f;
      out[5] = bf * d + ae;
      out[9] = af * d - be;
      out[2] = -d;
      out[6] = b * c;
      out[10] = a * c;
    } else if (order === "YZX") {
      const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
      out[0] = c * e;
      out[4] = bd - ac * f;
      out[8] = bc * f + ad;
      out[1] = f;
      out[5] = a * e;
      out[9] = -b * e;
      out[2] = -d * e;
      out[6] = ad * f + bc;
      out[10] = ac - bd * f;
    } else if (order === "XZY") {
      const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
      out[0] = c * e;
      out[4] = -f;
      out[8] = d * e;
      out[1] = ac * f + bd;
      out[5] = a * e;
      out[9] = ad * f - bc;
      out[2] = bc * f - ad;
      out[6] = b * e;
      out[10] = bd * f + ac;
    }
    out[3] = 0;
    out[7] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  Mat42.fromEuler = fromEuler;
  function perspective(out, left, right, top, bottom, near, far) {
    const x = 2 * near / (right - left);
    const y = 2 * near / (top - bottom);
    const a = (right + left) / (right - left);
    const b = (top + bottom) / (top - bottom);
    const c = -(far + near) / (far - near);
    const d = -2 * far * near / (far - near);
    out[0] = x;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = y;
    out[6] = 0;
    out[7] = 0;
    out[8] = a;
    out[9] = b;
    out[10] = c;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = d;
    out[15] = 0;
    return out;
  }
  Mat42.perspective = perspective;
  function ortho(out, left, right, top, bottom, near, far) {
    const w = 1 / (right - left);
    const h = 1 / (top - bottom);
    const p = 1 / (far - near);
    const x = (right + left) * w;
    const y = (top + bottom) * h;
    const z = (far + near) * p;
    out[0] = 2 * w;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 2 * h;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = -2 * p;
    out[11] = 0;
    out[12] = -x;
    out[13] = -y;
    out[14] = -z;
    out[15] = 1;
    return out;
  }
  Mat42.ortho = ortho;
  function lookAt(out, eye, center, up) {
    let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    const eyex = eye[0];
    const eyey = eye[1];
    const eyez = eye[2];
    const upx = up[0];
    const upy = up[1];
    const upz = up[2];
    const centerx = center[0];
    const centery = center[1];
    const centerz = center[2];
    if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
      return setIdentity(out);
    }
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len = 1 / len;
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len = 1 / len;
      y0 *= len;
      y1 *= len;
      y2 *= len;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
  }
  Mat42.lookAt = lookAt;
  function targetTo(out, eye, target, up) {
    const eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    let z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    let len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      z0 *= len;
      z1 *= len;
      z2 *= len;
    }
    let x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
  }
  Mat42.targetTo = targetTo;
  function fromPermutation(out, perm) {
    setZero(out);
    for (let i = 0; i < 4; i++) {
      const p = perm[i];
      setValue(out, i, p, 1);
    }
    return out;
  }
  Mat42.fromPermutation = fromPermutation;
  function getMaxScaleOnAxis(m) {
    const scaleXSq = m[0] * m[0] + m[1] * m[1] + m[2] * m[2];
    const scaleYSq = m[4] * m[4] + m[5] * m[5] + m[6] * m[6];
    const scaleZSq = m[8] * m[8] + m[9] * m[9] + m[10] * m[10];
    return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
  }
  Mat42.getMaxScaleOnAxis = getMaxScaleOnAxis;
  const xAxis = [1, 0, 0];
  const yAxis = [0, 1, 0];
  const zAxis = [0, 0, 1];
  Mat42.rotX90 = fromRotation(zero(), degToRad(90), xAxis);
  Mat42.rotX180 = fromRotation(zero(), degToRad(180), xAxis);
  Mat42.rotY90 = fromRotation(zero(), degToRad(90), yAxis);
  Mat42.rotY180 = fromRotation(zero(), degToRad(180), yAxis);
  Mat42.rotY270 = fromRotation(zero(), degToRad(270), yAxis);
  Mat42.rotZ90 = fromRotation(zero(), degToRad(90), zAxis);
  Mat42.rotZ180 = fromRotation(zero(), degToRad(180), zAxis);
  Mat42.rotXY90 = mul(zero(), Mat42.rotX90, Mat42.rotY90);
  Mat42.rotZY90 = mul(zero(), Mat42.rotZ90, Mat42.rotY90);
  Mat42.rotZYZ90 = mul(zero(), Mat42.rotZY90, Mat42.rotZ90);
  Mat42.rotZ90X180 = mul(zero(), Mat42.rotZ90, Mat42.rotX180);
  Mat42.rotY90Z180 = mul(zero(), Mat42.rotY90, Mat42.rotZ180);
  Mat42.id = identity();
})(Mat4 || (Mat4 = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-math/linear-algebra/3d/vec3.js
var _isFinite = isFinite;
function Vec3() {
  return Vec3.zero();
}
(function(Vec32) {
  function zero() {
    const out = [0.1, 0, 0];
    out[0] = 0;
    return out;
  }
  Vec32.zero = zero;
  function clone(a) {
    const out = zero();
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  Vec32.clone = clone;
  function isFinite2(a) {
    return _isFinite(a[0]) && _isFinite(a[1]) && _isFinite(a[2]);
  }
  Vec32.isFinite = isFinite2;
  function hasNaN(a) {
    return isNaN(a[0]) || isNaN(a[1]) || isNaN(a[2]);
  }
  Vec32.hasNaN = hasNaN;
  function setNaN(out) {
    out[0] = NaN;
    out[1] = NaN;
    out[2] = NaN;
    return out;
  }
  Vec32.setNaN = setNaN;
  function fromObj(v) {
    return create2(v.x, v.y, v.z);
  }
  Vec32.fromObj = fromObj;
  function toObj(v) {
    return { x: v[0], y: v[1], z: v[2] };
  }
  Vec32.toObj = toObj;
  function fromArray(v, array, offset) {
    v[0] = array[offset + 0];
    v[1] = array[offset + 1];
    v[2] = array[offset + 2];
    return v;
  }
  Vec32.fromArray = fromArray;
  function toArray(v, out, offset) {
    out[offset + 0] = v[0];
    out[offset + 1] = v[1];
    out[offset + 2] = v[2];
    return out;
  }
  Vec32.toArray = toArray;
  function create2(x, y, z) {
    const out = zero();
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  Vec32.create = create2;
  function ofArray(array) {
    const out = zero();
    out[0] = array[0];
    out[1] = array[1];
    out[2] = array[2];
    return out;
  }
  Vec32.ofArray = ofArray;
  function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  Vec32.set = set;
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  Vec32.copy = copy;
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
  }
  Vec32.add = add;
  function sub(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
  }
  Vec32.sub = sub;
  function mul(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
  }
  Vec32.mul = mul;
  function div(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
  }
  Vec32.div = div;
  function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
  }
  Vec32.scale = scale;
  function scaleAndAdd(out, a, b, scale2) {
    out[0] = a[0] + b[0] * scale2;
    out[1] = a[1] + b[1] * scale2;
    out[2] = a[2] + b[2] * scale2;
    return out;
  }
  Vec32.scaleAndAdd = scaleAndAdd;
  function scaleAndSub(out, a, b, scale2) {
    out[0] = a[0] - b[0] * scale2;
    out[1] = a[1] - b[1] * scale2;
    out[2] = a[2] - b[2] * scale2;
    return out;
  }
  Vec32.scaleAndSub = scaleAndSub;
  function addScalar(out, a, b) {
    out[0] = a[0] + b;
    out[1] = a[1] + b;
    out[2] = a[2] + b;
    return out;
  }
  Vec32.addScalar = addScalar;
  function subScalar(out, a, b) {
    out[0] = a[0] - b;
    out[1] = a[1] - b;
    out[2] = a[2] - b;
    return out;
  }
  Vec32.subScalar = subScalar;
  function round2(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
  }
  Vec32.round = round2;
  function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
  }
  Vec32.ceil = ceil;
  function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
  }
  Vec32.floor = floor;
  function trunc(out, a) {
    out[0] = Math.trunc(a[0]);
    out[1] = Math.trunc(a[1]);
    out[2] = Math.trunc(a[2]);
    return out;
  }
  Vec32.trunc = trunc;
  function abs(out, a) {
    out[0] = Math.abs(a[0]);
    out[1] = Math.abs(a[1]);
    out[2] = Math.abs(a[2]);
    return out;
  }
  Vec32.abs = abs;
  function min4(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
  }
  Vec32.min = min4;
  function max4(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
  }
  Vec32.max = max4;
  function clamp2(out, a, min5, max5) {
    out[0] = Math.max(min5[0], Math.min(max5[0], a[0]));
    out[1] = Math.max(min5[1], Math.min(max5[1], a[1]));
    out[2] = Math.max(min5[2], Math.min(max5[2], a[2]));
    return out;
  }
  Vec32.clamp = clamp2;
  function distance(a, b) {
    const x = b[0] - a[0], y = b[1] - a[1], z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
  }
  Vec32.distance = distance;
  function squaredDistance(a, b) {
    const x = b[0] - a[0], y = b[1] - a[1], z = b[2] - a[2];
    return x * x + y * y + z * z;
  }
  Vec32.squaredDistance = squaredDistance;
  function magnitude(a) {
    const x = a[0], y = a[1], z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
  }
  Vec32.magnitude = magnitude;
  function squaredMagnitude(a) {
    const x = a[0], y = a[1], z = a[2];
    return x * x + y * y + z * z;
  }
  Vec32.squaredMagnitude = squaredMagnitude;
  function setMagnitude(out, a, l) {
    return scale(out, normalize2(out, a), l);
  }
  Vec32.setMagnitude = setMagnitude;
  function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
  }
  Vec32.negate = negate;
  function inverse(out, a) {
    out[0] = 1 / a[0];
    out[1] = 1 / a[1];
    out[2] = 1 / a[2];
    return out;
  }
  Vec32.inverse = inverse;
  function normalize2(out, a) {
    const x = a[0], y = a[1], z = a[2];
    let len = x * x + y * y + z * z;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      out[0] = a[0] * len;
      out[1] = a[1] * len;
      out[2] = a[2] * len;
    }
    return out;
  }
  Vec32.normalize = normalize2;
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  Vec32.dot = dot;
  function cross(out, a, b) {
    const ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  }
  Vec32.cross = cross;
  function lerp2(out, a, b, t) {
    const ax = a[0], ay = a[1], az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
  }
  Vec32.lerp = lerp2;
  const slerpRelVec = zero();
  function slerp(out, a, b, t) {
    const d = clamp(dot(a, b), -1, 1);
    const theta = Math.acos(d) * t;
    scaleAndAdd(slerpRelVec, b, a, -d);
    normalize2(slerpRelVec, slerpRelVec);
    return add(out, scale(out, a, Math.cos(theta)), scale(slerpRelVec, slerpRelVec, Math.sin(theta)));
  }
  Vec32.slerp = slerp;
  function hermite(out, a, b, c, d, t) {
    const factorTimes2 = t * t;
    const factor1 = factorTimes2 * (2 * t - 3) + 1;
    const factor2 = factorTimes2 * (t - 2) + t;
    const factor3 = factorTimes2 * (t - 1);
    const factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  Vec32.hermite = hermite;
  function bezier(out, a, b, c, d, t) {
    const inverseFactor = 1 - t;
    const inverseFactorTimesTwo = inverseFactor * inverseFactor;
    const factorTimes2 = t * t;
    const factor1 = inverseFactorTimesTwo * inverseFactor;
    const factor2 = 3 * t * inverseFactorTimesTwo;
    const factor3 = 3 * factorTimes2 * inverseFactor;
    const factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  Vec32.bezier = bezier;
  function quadraticBezier2(out, a, b, c, t) {
    out[0] = quadraticBezier(a[0], b[0], c[0], t);
    out[1] = quadraticBezier(a[1], b[1], c[1], t);
    out[2] = quadraticBezier(a[2], b[2], c[2], t);
    return out;
  }
  Vec32.quadraticBezier = quadraticBezier2;
  function spline2(out, a, b, c, d, t, tension) {
    out[0] = spline(a[0], b[0], c[0], d[0], t, tension);
    out[1] = spline(a[1], b[1], c[1], d[1], t, tension);
    out[2] = spline(a[2], b[2], c[2], d[2], t, tension);
    return out;
  }
  Vec32.spline = spline2;
  function random(out, scale2) {
    const r = Math.random() * 2 * Math.PI;
    const z = Math.random() * 2 - 1;
    const zScale = Math.sqrt(1 - z * z) * scale2;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale2;
    return out;
  }
  Vec32.random = random;
  function transformMat4(out, a, m) {
    const x = a[0], y = a[1], z = a[2], w = 1 / (m[3] * x + m[7] * y + m[11] * z + m[15] || 1);
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) * w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) * w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) * w;
    return out;
  }
  Vec32.transformMat4 = transformMat4;
  function transformDirection(out, a, m) {
    const x = a[0], y = a[1], z = a[2];
    out[0] = m[0] * x + m[4] * y + m[8] * z;
    out[1] = m[1] * x + m[5] * y + m[9] * z;
    out[2] = m[2] * x + m[6] * y + m[10] * z;
    return normalize2(out, out);
  }
  Vec32.transformDirection = transformDirection;
  function transformMat4Offset(out, a, m, outO, aO, oM) {
    const x = a[0 + aO], y = a[1 + aO], z = a[2 + aO], w = 1 / (m[3 + oM] * x + m[7 + oM] * y + m[11 + oM] * z + m[15 + oM] || 1);
    out[0 + outO] = (m[0 + oM] * x + m[4 + oM] * y + m[8 + oM] * z + m[12 + oM]) * w;
    out[1 + outO] = (m[1 + oM] * x + m[5 + oM] * y + m[9 + oM] * z + m[13 + oM]) * w;
    out[2 + outO] = (m[2 + oM] * x + m[6 + oM] * y + m[10 + oM] * z + m[14 + oM]) * w;
    return out;
  }
  Vec32.transformMat4Offset = transformMat4Offset;
  function transformDirectionOffset(out, a, m, outO, aO, oM) {
    const x = a[0 + aO], y = a[1 + aO], z = a[2 + aO];
    out[0 + outO] = m[0 + oM] * x + m[4 + oM] * y + m[8 + oM] * z;
    out[1 + outO] = m[1 + oM] * x + m[5 + oM] * y + m[9 + oM] * z;
    out[2 + outO] = m[2 + oM] * x + m[6 + oM] * y + m[10 + oM] * z;
    const len = Math.hypot(out[0 + outO], out[1 + outO], out[2 + outO]);
    if (len > 0) {
      out[0 + outO] /= len;
      out[1 + outO] /= len;
      out[2 + outO] /= len;
    }
    return out;
  }
  Vec32.transformDirectionOffset = transformDirectionOffset;
  function transformMat3(out, a, m) {
    const x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
  }
  Vec32.transformMat3 = transformMat3;
  function transformQuat(out, a, q) {
    const x = a[0], y = a[1], z = a[2];
    const qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    const ix = qw * x + qy * z - qz * y;
    const iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x;
    const iw = -qx * x - qy * y - qz * z;
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
  }
  Vec32.transformQuat = transformQuat;
  function angle(a, b) {
    const denominator = Math.sqrt(squaredMagnitude(a) * squaredMagnitude(b));
    if (denominator === 0)
      return Math.PI / 2;
    const theta = dot(a, b) / denominator;
    return Math.acos(clamp(theta, -1, 1));
  }
  Vec32.angle = angle;
  const tmp_dh_ab = zero();
  const tmp_dh_cb = zero();
  const tmp_dh_bc = zero();
  const tmp_dh_dc = zero();
  const tmp_dh_abc = zero();
  const tmp_dh_bcd = zero();
  const tmp_dh_cross = zero();
  function dihedralAngle(a, b, c, d) {
    sub(tmp_dh_ab, a, b);
    sub(tmp_dh_cb, c, b);
    sub(tmp_dh_bc, b, c);
    sub(tmp_dh_dc, d, c);
    cross(tmp_dh_abc, tmp_dh_ab, tmp_dh_cb);
    cross(tmp_dh_bcd, tmp_dh_bc, tmp_dh_dc);
    const _angle = angle(tmp_dh_abc, tmp_dh_bcd);
    cross(tmp_dh_cross, tmp_dh_abc, tmp_dh_bcd);
    return dot(tmp_dh_cb, tmp_dh_cross) > 0 ? _angle : -_angle;
  }
  Vec32.dihedralAngle = dihedralAngle;
  function directionFromSpherical(out, inclination, azimuth, radius) {
    return Vec32.set(out, radius * Math.cos(azimuth) * Math.sin(inclination), radius * Math.sin(azimuth) * Math.sin(inclination), radius * Math.cos(inclination));
  }
  Vec32.directionFromSpherical = directionFromSpherical;
  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
  }
  Vec32.exactEquals = exactEquals;
  function equals(a, b) {
    const a0 = a[0], a1 = a[1], a2 = a[2];
    const b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
  }
  Vec32.equals = equals;
  const rotTemp = zero();
  function makeRotation(mat, a, b) {
    const by = angle(a, b);
    if (Math.abs(by) < 1e-4)
      return Mat4.setIdentity(mat);
    if (Math.abs(by - Math.PI) < EPSILON) {
      return Mat4.fromRotation(mat, Math.PI, Math.abs(a[0]) < 0.9 ? Vec32.unitX : Vec32.unitZ);
    }
    const axis = cross(rotTemp, a, b);
    return Mat4.fromRotation(mat, by, axis);
  }
  Vec32.makeRotation = makeRotation;
  function isZero(v) {
    return v[0] === 0 && v[1] === 0 && v[2] === 0;
  }
  Vec32.isZero = isZero;
  function projectPointOnVector(out, point, vector, origin) {
    sub(out, point, origin);
    const scalar = dot(vector, out) / squaredMagnitude(vector);
    return add(out, scale(out, vector, scalar), origin);
  }
  Vec32.projectPointOnVector = projectPointOnVector;
  const tmpProjectPlane = zero();
  function projectPointOnPlane(out, point, normal, origin) {
    normalize2(tmpProjectPlane, normal);
    sub(out, point, origin);
    return sub(out, point, scale(tmpProjectPlane, tmpProjectPlane, dot(out, tmpProjectPlane)));
  }
  Vec32.projectPointOnPlane = projectPointOnPlane;
  function projectOnVector(out, p, vector) {
    const scalar = dot(vector, p) / squaredMagnitude(vector);
    return scale(out, vector, scalar);
  }
  Vec32.projectOnVector = projectOnVector;
  const tmpProject = zero();
  function projectOnPlane(out, p, normal) {
    projectOnVector(tmpProject, p, normal);
    return sub(out, p, tmpProject);
  }
  Vec32.projectOnPlane = projectOnPlane;
  function orthogonalize(out, a, b) {
    return normalize2(out, cross(out, cross(out, a, b), a));
  }
  Vec32.orthogonalize = orthogonalize;
  function matchDirection(out, a, b) {
    if (dot(a, b) > 0)
      copy(out, a);
    else
      negate(out, copy(out, a));
    return out;
  }
  Vec32.matchDirection = matchDirection;
  const triangleNormalTmpAB = zero();
  const triangleNormalTmpAC = zero();
  function triangleNormal(out, a, b, c) {
    sub(triangleNormalTmpAB, b, a);
    sub(triangleNormalTmpAC, c, a);
    return normalize2(out, cross(out, triangleNormalTmpAB, triangleNormalTmpAC));
  }
  Vec32.triangleNormal = triangleNormal;
  const centerTmpV = zero();
  function center(out, a, b) {
    return Vec32.scaleAndAdd(out, a, Vec32.sub(centerTmpV, b, a), 0.5);
  }
  Vec32.center = center;
  function toString4(a, precision) {
    return `[${a[0].toPrecision(precision)} ${a[1].toPrecision(precision)} ${a[2].toPrecision(precision)}]`;
  }
  Vec32.toString = toString4;
  Vec32.origin = create2(0, 0, 0);
  Vec32.unit = create2(1, 1, 1);
  Vec32.negUnit = create2(-1, -1, -1);
  Vec32.unitX = create2(1, 0, 0);
  Vec32.unitY = create2(0, 1, 0);
  Vec32.unitZ = create2(0, 0, 1);
  Vec32.negUnitX = create2(-1, 0, 0);
  Vec32.negUnitY = create2(0, -1, 0);
  Vec32.negUnitZ = create2(0, 0, -1);
})(Vec3 || (Vec3 = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-math/linear-algebra/3d/mat3.js
function Mat3() {
  return Mat3.zero();
}
(function(Mat32) {
  function zero() {
    const ret = [0.1, 0, 0, 0, 0, 0, 0, 0, 0];
    ret[0] = 0;
    return ret;
  }
  Mat32.zero = zero;
  function identity() {
    const out = zero();
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
  }
  Mat32.identity = identity;
  function setIdentity(mat) {
    mat[0] = 1;
    mat[1] = 0;
    mat[2] = 0;
    mat[3] = 0;
    mat[4] = 1;
    mat[5] = 0;
    mat[6] = 0;
    mat[7] = 0;
    mat[8] = 1;
    return mat;
  }
  Mat32.setIdentity = setIdentity;
  function toArray(a, out, offset) {
    out[offset + 0] = a[0];
    out[offset + 1] = a[1];
    out[offset + 2] = a[2];
    out[offset + 3] = a[3];
    out[offset + 4] = a[4];
    out[offset + 5] = a[5];
    out[offset + 6] = a[6];
    out[offset + 7] = a[7];
    out[offset + 8] = a[8];
    return out;
  }
  Mat32.toArray = toArray;
  function fromArray(a, array, offset) {
    a[0] = array[offset + 0];
    a[1] = array[offset + 1];
    a[2] = array[offset + 2];
    a[3] = array[offset + 3];
    a[4] = array[offset + 4];
    a[5] = array[offset + 5];
    a[6] = array[offset + 6];
    a[7] = array[offset + 7];
    a[8] = array[offset + 8];
    return a;
  }
  Mat32.fromArray = fromArray;
  function fromColumns(out, left, middle, right) {
    out[0] = left[0];
    out[1] = left[1];
    out[2] = left[2];
    out[3] = middle[0];
    out[4] = middle[1];
    out[5] = middle[2];
    out[6] = right[0];
    out[7] = right[1];
    out[8] = right[2];
    return out;
  }
  Mat32.fromColumns = fromColumns;
  function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
  }
  Mat32.fromMat4 = fromMat4;
  const _m4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function fromEuler(out, euler, order) {
    Mat4.fromEuler(_m4, euler, order);
    return fromMat4(out, _m4);
  }
  Mat32.fromEuler = fromEuler;
  function create2(a00, a01, a02, a10, a11, a12, a20, a21, a22) {
    const out = zero();
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a10;
    out[4] = a11;
    out[5] = a12;
    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
  }
  Mat32.create = create2;
  const _id = identity();
  function isIdentity2(m, eps) {
    return areEqual4(m, _id, typeof eps === "undefined" ? EPSILON : eps);
  }
  Mat32.isIdentity = isIdentity2;
  function hasNaN(m) {
    for (let i = 0; i < 9; i++)
      if (isNaN(m[i]))
        return true;
    return false;
  }
  Mat32.hasNaN = hasNaN;
  function clone(a) {
    return copy(zero(), a);
  }
  Mat32.clone = clone;
  function areEqual4(a, b, eps) {
    for (let i = 0; i < 9; i++) {
      if (Math.abs(a[i] - b[i]) > eps)
        return false;
    }
    return true;
  }
  Mat32.areEqual = areEqual4;
  function setValue(a, i, j, value) {
    a[3 * j + i] = value;
  }
  Mat32.setValue = setValue;
  function getValue(a, i, j) {
    return a[3 * j + i];
  }
  Mat32.getValue = getValue;
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
  }
  Mat32.copy = copy;
  function transpose(out, a) {
    if (out === a) {
      const a01 = a[1], a02 = a[2], a12 = a[5];
      out[1] = a[3];
      out[2] = a[6];
      out[3] = a01;
      out[5] = a[7];
      out[6] = a02;
      out[7] = a12;
    } else {
      out[0] = a[0];
      out[1] = a[3];
      out[2] = a[6];
      out[3] = a[1];
      out[4] = a[4];
      out[5] = a[7];
      out[6] = a[2];
      out[7] = a[5];
      out[8] = a[8];
    }
    return out;
  }
  Mat32.transpose = transpose;
  function invert(out, a) {
    const a00 = a[0], a01 = a[1], a02 = a[2];
    const a10 = a[3], a11 = a[4], a12 = a[5];
    const a20 = a[6], a21 = a[7], a22 = a[8];
    const b01 = a22 * a11 - a12 * a21;
    const b11 = -a22 * a10 + a12 * a20;
    const b21 = a21 * a10 - a11 * a20;
    let det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) {
      console.warn("non-invertible matrix.", a);
      return out;
    }
    det = 1 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
  }
  Mat32.invert = invert;
  function symmtricFromUpper(out, a) {
    if (out === a) {
      out[3] = a[1];
      out[6] = a[2];
      out[7] = a[5];
    } else {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[1];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[2];
      out[7] = a[5];
      out[8] = a[8];
    }
    return out;
  }
  Mat32.symmtricFromUpper = symmtricFromUpper;
  function symmtricFromLower(out, a) {
    if (out === a) {
      out[1] = a[3];
      out[2] = a[6];
      out[5] = a[7];
    } else {
      out[0] = a[0];
      out[1] = a[3];
      out[2] = a[6];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[7];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
    }
    return out;
  }
  Mat32.symmtricFromLower = symmtricFromLower;
  function determinant(a) {
    const a00 = a[0], a01 = a[1], a02 = a[2];
    const a10 = a[3], a11 = a[4], a12 = a[5];
    const a20 = a[6], a21 = a[7], a22 = a[8];
    const b01 = a22 * a11 - a12 * a21;
    const b11 = -a22 * a10 + a12 * a20;
    const b21 = a21 * a10 - a11 * a20;
    return a00 * b01 + a01 * b11 + a02 * b21;
  }
  Mat32.determinant = determinant;
  function trace(a) {
    return a[0] + a[4] + a[8];
  }
  Mat32.trace = trace;
  function sub(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
  }
  Mat32.sub = sub;
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
  }
  Mat32.add = add;
  function mul(out, a, b) {
    const a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8];
    const b00 = b[0], b01 = b[1], b02 = b[2], b10 = b[3], b11 = b[4], b12 = b[5], b20 = b[6], b21 = b[7], b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
  }
  Mat32.mul = mul;
  function subScalar(out, a, s) {
    out[0] = a[0] - s;
    out[1] = a[1] - s;
    out[2] = a[2] - s;
    out[3] = a[3] - s;
    out[4] = a[4] - s;
    out[5] = a[5] - s;
    out[6] = a[6] - s;
    out[7] = a[7] - s;
    out[8] = a[8] - s;
    return out;
  }
  Mat32.subScalar = subScalar;
  function addScalar(out, a, s) {
    out[0] = a[0] + s;
    out[1] = a[1] + s;
    out[2] = a[2] + s;
    out[3] = a[3] + s;
    out[4] = a[4] + s;
    out[5] = a[5] + s;
    out[6] = a[6] + s;
    out[7] = a[7] + s;
    out[8] = a[8] + s;
    return out;
  }
  Mat32.addScalar = addScalar;
  function mulScalar(out, a, s) {
    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;
    out[3] = a[3] * s;
    out[4] = a[4] * s;
    out[5] = a[5] * s;
    out[6] = a[6] * s;
    out[7] = a[7] * s;
    out[8] = a[8] * s;
    return out;
  }
  Mat32.mulScalar = mulScalar;
  const piThird = Math.PI / 3;
  const tmpB = zero();
  function symmetricEigenvalues(out, a) {
    const p1 = a[1] * a[1] + a[2] * a[2] + a[5] * a[5];
    if (p1 === 0) {
      out[0] = a[0];
      out[1] = a[4];
      out[2] = a[8];
    } else {
      const q = trace(a) / 3;
      const a1 = a[0] - q;
      const a2 = a[4] - q;
      const a3 = a[8] - q;
      const p2 = a1 * a1 + a2 * a2 + a3 * a3 + 2 * p1;
      const p = Math.sqrt(p2 / 6);
      mulScalar(tmpB, Mat32.Identity, q);
      sub(tmpB, a, tmpB);
      mulScalar(tmpB, tmpB, 1 / p);
      const r = determinant(tmpB) / 2;
      const phi = r <= -1 ? piThird : r >= 1 ? 0 : Math.acos(r) / 3;
      out[0] = q + 2 * p * Math.cos(phi);
      out[2] = q + 2 * p * Math.cos(phi + 2 * piThird);
      out[1] = 3 * q - out[0] - out[2];
    }
    return out;
  }
  Mat32.symmetricEigenvalues = symmetricEigenvalues;
  const tmpR0 = [0.1, 0, 0];
  const tmpR1 = [0.1, 0, 0];
  const tmpR2 = [0.1, 0, 0];
  const tmpR0xR1 = [0.1, 0, 0];
  const tmpR0xR2 = [0.1, 0, 0];
  const tmpR1xR2 = [0.1, 0, 0];
  function eigenvector(out, a, e) {
    Vec3.set(tmpR0, a[0] - e, a[1], a[2]);
    Vec3.set(tmpR1, a[1], a[4] - e, a[5]);
    Vec3.set(tmpR2, a[2], a[5], a[8] - e);
    Vec3.cross(tmpR0xR1, tmpR0, tmpR1);
    Vec3.cross(tmpR0xR2, tmpR0, tmpR2);
    Vec3.cross(tmpR1xR2, tmpR1, tmpR2);
    const d0 = Vec3.dot(tmpR0xR1, tmpR0xR1);
    const d1 = Vec3.dot(tmpR0xR2, tmpR0xR2);
    const d2 = Vec3.dot(tmpR1xR2, tmpR1xR2);
    let dmax = d0;
    let imax = 0;
    if (d1 > dmax) {
      dmax = d1;
      imax = 1;
    }
    if (d2 > dmax)
      imax = 2;
    if (imax === 0) {
      Vec3.scale(out, tmpR0xR1, 1 / Math.sqrt(d0));
    } else if (imax === 1) {
      Vec3.scale(out, tmpR0xR2, 1 / Math.sqrt(d1));
    } else {
      Vec3.scale(out, tmpR1xR2, 1 / Math.sqrt(d2));
    }
    return out;
  }
  Mat32.eigenvector = eigenvector;
  function directionTransform(out, t) {
    fromMat4(out, t);
    invert(out, out);
    transpose(out, out);
    return out;
  }
  Mat32.directionTransform = directionTransform;
  Mat32.Identity = identity();
  function innerProduct(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3] + a[4] * b[4] + a[5] * b[5] + a[6] * b[6] + a[7] * b[7] + a[8] * b[8];
  }
  Mat32.innerProduct = innerProduct;
})(Mat3 || (Mat3 = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-math/linear-algebra/3d/vec2.js
function Vec2() {
  return Vec2.zero();
}
(function(Vec22) {
  function zero() {
    const ret = [0.1, 0];
    ret[0] = 0;
    return ret;
  }
  Vec22.zero = zero;
  function clone(a) {
    const out = zero();
    out[0] = a[0];
    out[1] = a[1];
    return out;
  }
  Vec22.clone = clone;
  function create2(x, y) {
    const out = zero();
    out[0] = x;
    out[1] = y;
    return out;
  }
  Vec22.create = create2;
  function hasNaN(a) {
    return isNaN(a[0]) || isNaN(a[1]);
  }
  Vec22.hasNaN = hasNaN;
  function toArray(a, out, offset) {
    out[offset + 0] = a[0];
    out[offset + 1] = a[1];
    return out;
  }
  Vec22.toArray = toArray;
  function fromArray(a, array, offset) {
    a[0] = array[offset + 0];
    a[1] = array[offset + 1];
    return a;
  }
  Vec22.fromArray = fromArray;
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
  }
  Vec22.copy = copy;
  function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
  }
  Vec22.set = set;
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
  }
  Vec22.add = add;
  function sub(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
  }
  Vec22.sub = sub;
  function mul(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
  }
  Vec22.mul = mul;
  function div(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
  }
  Vec22.div = div;
  function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
  }
  Vec22.scale = scale;
  function round2(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    return out;
  }
  Vec22.round = round2;
  function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
  }
  Vec22.ceil = ceil;
  function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
  }
  Vec22.floor = floor;
  function distance(a, b) {
    const x = b[0] - a[0], y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
  }
  Vec22.distance = distance;
  function squaredDistance(a, b) {
    const x = b[0] - a[0], y = b[1] - a[1];
    return x * x + y * y;
  }
  Vec22.squaredDistance = squaredDistance;
  function magnitude(a) {
    const x = a[0], y = a[1];
    return Math.sqrt(x * x + y * y);
  }
  Vec22.magnitude = magnitude;
  function squaredMagnitude(a) {
    const x = a[0], y = a[1];
    return x * x + y * y;
  }
  Vec22.squaredMagnitude = squaredMagnitude;
  function inverse(out, a) {
    out[0] = 1 / a[0];
    out[1] = 1 / a[1];
    return out;
  }
  Vec22.inverse = inverse;
  function areEqual4(a, b) {
    return a[0] === b[0] && a[1] === b[1];
  }
  Vec22.areEqual = areEqual4;
  function toString4(a, precision) {
    return `[${a[0].toPrecision(precision)} ${a[1].toPrecision(precision)}}]`;
  }
  Vec22.toString = toString4;
})(Vec2 || (Vec2 = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/type-helpers.js
function ObjectKeys(o) {
  return Object.keys(o);
}
function assertUnreachable(x) {
  throw new Error("unreachable");
}
function isPromiseLike(x) {
  return typeof (x === null || x === void 0 ? void 0 : x.then) === "function";
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-math/linear-algebra/3d/quat.js
function Quat() {
  return Quat.zero();
}
(function(Quat2) {
  function zero() {
    const ret = [0.1, 0, 0, 0];
    ret[0] = 0;
    return ret;
  }
  Quat2.zero = zero;
  function identity() {
    const out = zero();
    out[3] = 1;
    return out;
  }
  Quat2.identity = identity;
  function setIdentity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
  }
  Quat2.setIdentity = setIdentity;
  function hasNaN(q) {
    return isNaN(q[0]) || isNaN(q[1]) || isNaN(q[2]) || isNaN(q[3]);
  }
  Quat2.hasNaN = hasNaN;
  function create2(x, y, z, w) {
    const out = identity();
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  Quat2.create = create2;
  function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    const s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
  }
  Quat2.setAxisAngle = setAxisAngle;
  function getAxisAngle(out_axis, q) {
    const rad = Math.acos(q[3]) * 2;
    const s = Math.sin(rad / 2);
    if (s !== 0) {
      out_axis[0] = q[0] / s;
      out_axis[1] = q[1] / s;
      out_axis[2] = q[2] / s;
    } else {
      out_axis[0] = 1;
      out_axis[1] = 0;
      out_axis[2] = 0;
    }
    return rad;
  }
  Quat2.getAxisAngle = getAxisAngle;
  function multiply(out, a, b) {
    const ax = a[0], ay = a[1], az = a[2], aw = a[3];
    const bx = b[0], by = b[1], bz = b[2], bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
  }
  Quat2.multiply = multiply;
  function rotateX(out, a, rad) {
    rad *= 0.5;
    const ax = a[0], ay = a[1], az = a[2], aw = a[3];
    const bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
  }
  Quat2.rotateX = rotateX;
  function rotateY(out, a, rad) {
    rad *= 0.5;
    const ax = a[0], ay = a[1], az = a[2], aw = a[3];
    const by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
  }
  Quat2.rotateY = rotateY;
  function rotateZ(out, a, rad) {
    rad *= 0.5;
    const ax = a[0], ay = a[1], az = a[2], aw = a[3];
    const bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
  }
  Quat2.rotateZ = rotateZ;
  function calculateW(out, a) {
    const x = a[0], y = a[1], z = a[2];
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
    return out;
  }
  Quat2.calculateW = calculateW;
  function slerp(out, a, b, t) {
    const ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bx = b[0], by = b[1], bz = b[2], bw = b[3];
    let omega, cosom, sinom, scale0, scale1;
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    if (cosom < 0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }
    if (1 - cosom > 1e-6) {
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      scale0 = 1 - t;
      scale1 = t;
    }
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
  }
  Quat2.slerp = slerp;
  function invert(out, a) {
    const a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    const dot2 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    const invDot = dot2 ? 1 / dot2 : 0;
    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
  }
  Quat2.invert = invert;
  function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
  }
  Quat2.conjugate = conjugate;
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  Quat2.dot = dot;
  function fromMat3(out, m) {
    const fTrace = m[0] + m[4] + m[8];
    let fRoot;
    if (fTrace > 0) {
      fRoot = Math.sqrt(fTrace + 1);
      out[3] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[0] = (m[5] - m[7]) * fRoot;
      out[1] = (m[6] - m[2]) * fRoot;
      out[2] = (m[1] - m[3]) * fRoot;
    } else {
      let i = 0;
      if (m[4] > m[0])
        i = 1;
      if (m[8] > m[i * 3 + i])
        i = 2;
      const j = (i + 1) % 3;
      const k = (i + 2) % 3;
      fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
      out[i] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
      out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
      out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
  }
  Quat2.fromMat3 = fromMat3;
  const m3tmp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function fromMat4(out, m) {
    Mat3.fromMat4(m3tmp, m);
    return fromMat3(out, m3tmp);
  }
  Quat2.fromMat4 = fromMat4;
  function fromEuler(out, euler, order) {
    const [x, y, z] = euler;
    const c1 = Math.cos(x / 2);
    const c2 = Math.cos(y / 2);
    const c3 = Math.cos(z / 2);
    const s1 = Math.sin(x / 2);
    const s2 = Math.sin(y / 2);
    const s3 = Math.sin(z / 2);
    switch (order) {
      case "XYZ":
        out[0] = s1 * c2 * c3 + c1 * s2 * s3;
        out[1] = c1 * s2 * c3 - s1 * c2 * s3;
        out[2] = c1 * c2 * s3 + s1 * s2 * c3;
        out[3] = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "YXZ":
        out[0] = s1 * c2 * c3 + c1 * s2 * s3;
        out[1] = c1 * s2 * c3 - s1 * c2 * s3;
        out[2] = c1 * c2 * s3 - s1 * s2 * c3;
        out[3] = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case "ZXY":
        out[0] = s1 * c2 * c3 - c1 * s2 * s3;
        out[1] = c1 * s2 * c3 + s1 * c2 * s3;
        out[2] = c1 * c2 * s3 + s1 * s2 * c3;
        out[3] = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "ZYX":
        out[0] = s1 * c2 * c3 - c1 * s2 * s3;
        out[1] = c1 * s2 * c3 + s1 * c2 * s3;
        out[2] = c1 * c2 * s3 - s1 * s2 * c3;
        out[3] = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case "YZX":
        out[0] = s1 * c2 * c3 + c1 * s2 * s3;
        out[1] = c1 * s2 * c3 + s1 * c2 * s3;
        out[2] = c1 * c2 * s3 - s1 * s2 * c3;
        out[3] = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "XZY":
        out[0] = s1 * c2 * c3 - c1 * s2 * s3;
        out[1] = c1 * s2 * c3 - s1 * c2 * s3;
        out[2] = c1 * c2 * s3 + s1 * s2 * c3;
        out[3] = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      default:
        assertUnreachable(order);
    }
    return out;
  }
  Quat2.fromEuler = fromEuler;
  const fromUnitVec3Temp = [0, 0, 0];
  function fromUnitVec3(out, a, b) {
    let r = Vec3.dot(a, b) + 1;
    if (r < EPSILON) {
      r = 0;
      if (Math.abs(a[0]) > Math.abs(a[2])) {
        Vec3.set(fromUnitVec3Temp, -a[1], a[0], 0);
      } else {
        Vec3.set(fromUnitVec3Temp, 0, -a[2], a[1]);
      }
    } else {
      Vec3.cross(fromUnitVec3Temp, a, b);
    }
    out[0] = fromUnitVec3Temp[0];
    out[1] = fromUnitVec3Temp[1];
    out[2] = fromUnitVec3Temp[2];
    out[3] = r;
    normalize2(out, out);
    return out;
  }
  Quat2.fromUnitVec3 = fromUnitVec3;
  const m4tmp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function fromBasis(out, x, y, z) {
    Mat4.fromBasis(m4tmp, x, y, z);
    return fromMat4(out, m4tmp);
  }
  Quat2.fromBasis = fromBasis;
  function clone(a) {
    const out = zero();
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }
  Quat2.clone = clone;
  function toArray(a, out, offset) {
    out[offset + 0] = a[0];
    out[offset + 1] = a[1];
    out[offset + 2] = a[2];
    out[offset + 3] = a[3];
    return out;
  }
  Quat2.toArray = toArray;
  function fromArray(a, array, offset) {
    a[0] = array[offset + 0];
    a[1] = array[offset + 1];
    a[2] = array[offset + 2];
    a[3] = array[offset + 3];
    return a;
  }
  Quat2.fromArray = fromArray;
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }
  Quat2.copy = copy;
  function set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  Quat2.set = set;
  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
  }
  Quat2.exactEquals = exactEquals;
  function equals(a, b) {
    const a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    const b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
  }
  Quat2.equals = equals;
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
  }
  Quat2.add = add;
  function normalize2(out, a) {
    const x = a[0];
    const y = a[1];
    const z = a[2];
    const w = a[3];
    let len = x * x + y * y + z * z + w * w;
    if (len > 0) {
      len = 1 / Math.sqrt(len);
      out[0] = x * len;
      out[1] = y * len;
      out[2] = z * len;
      out[3] = w * len;
    }
    return out;
  }
  Quat2.normalize = normalize2;
  const rotTmpVec3 = [0, 0, 0];
  const rotTmpVec3UnitX = [1, 0, 0];
  const rotTmpVec3UnitY = [0, 1, 0];
  function rotationTo(out, a, b) {
    const dot2 = Vec3.dot(a, b);
    if (dot2 < -0.999999) {
      Vec3.cross(rotTmpVec3, rotTmpVec3UnitX, a);
      if (Vec3.magnitude(rotTmpVec3) < 1e-6)
        Vec3.cross(rotTmpVec3, rotTmpVec3UnitY, a);
      Vec3.normalize(rotTmpVec3, rotTmpVec3);
      setAxisAngle(out, rotTmpVec3, Math.PI);
      return out;
    } else if (dot2 > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      Vec3.cross(rotTmpVec3, a, b);
      out[0] = rotTmpVec3[0];
      out[1] = rotTmpVec3[1];
      out[2] = rotTmpVec3[2];
      out[3] = 1 + dot2;
      return normalize2(out, out);
    }
  }
  Quat2.rotationTo = rotationTo;
  const sqlerpTemp1 = zero();
  const sqlerpTemp2 = zero();
  function sqlerp(out, a, b, c, d, t) {
    slerp(sqlerpTemp1, a, d, t);
    slerp(sqlerpTemp2, b, c, t);
    slerp(out, sqlerpTemp1, sqlerpTemp2, 2 * t * (1 - t));
    return out;
  }
  Quat2.sqlerp = sqlerp;
  const axesTmpMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  function setAxes(out, view, right, up) {
    axesTmpMat[0] = right[0];
    axesTmpMat[3] = right[1];
    axesTmpMat[6] = right[2];
    axesTmpMat[1] = up[0];
    axesTmpMat[4] = up[1];
    axesTmpMat[7] = up[2];
    axesTmpMat[2] = -view[0];
    axesTmpMat[5] = -view[1];
    axesTmpMat[8] = -view[2];
    return normalize2(out, fromMat3(out, axesTmpMat));
  }
  Quat2.setAxes = setAxes;
  function toString4(a, precision) {
    return `[${a[0].toPrecision(precision)} ${a[1].toPrecision(precision)} ${a[2].toPrecision(precision)}  ${a[3].toPrecision(precision)}]`;
  }
  Quat2.toString = toString4;
  Quat2.Identity = identity();
})(Quat || (Quat = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-math/linear-algebra/3d/vec4.js
function Vec4() {
  return Vec4.zero();
}
(function(Vec42) {
  function zero() {
    const ret = [0.1, 0, 0, 0];
    ret[0] = 0;
    return ret;
  }
  Vec42.zero = zero;
  function clone(a) {
    const out = zero();
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }
  Vec42.clone = clone;
  function create2(x, y, z, w) {
    const out = zero();
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  Vec42.create = create2;
  function fromSphere(out, sphere) {
    out[0] = sphere.center[0];
    out[1] = sphere.center[1];
    out[2] = sphere.center[2];
    out[3] = sphere.radius;
    return out;
  }
  Vec42.fromSphere = fromSphere;
  function ofSphere(sphere) {
    return fromSphere(zero(), sphere);
  }
  Vec42.ofSphere = ofSphere;
  function hasNaN(a) {
    return isNaN(a[0]) || isNaN(a[1]) || isNaN(a[2]) || isNaN(a[3]);
  }
  Vec42.hasNaN = hasNaN;
  function toArray(a, out, offset) {
    out[offset + 0] = a[0];
    out[offset + 1] = a[1];
    out[offset + 2] = a[2];
    out[offset + 3] = a[3];
    return out;
  }
  Vec42.toArray = toArray;
  function fromArray(a, array, offset) {
    a[0] = array[offset + 0];
    a[1] = array[offset + 1];
    a[2] = array[offset + 2];
    a[3] = array[offset + 3];
    return a;
  }
  Vec42.fromArray = fromArray;
  function toVec3Array(a, out, offset) {
    out[offset + 0] = a[0];
    out[offset + 1] = a[1];
    out[offset + 2] = a[2];
  }
  Vec42.toVec3Array = toVec3Array;
  function fromVec3Array(a, array, offset) {
    a[0] = array[offset + 0];
    a[1] = array[offset + 1];
    a[2] = array[offset + 2];
    a[3] = 0;
    return a;
  }
  Vec42.fromVec3Array = fromVec3Array;
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }
  Vec42.copy = copy;
  function set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  Vec42.set = set;
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
  }
  Vec42.add = add;
  function distance(a, b) {
    const x = b[0] - a[0], y = b[1] - a[1], z = b[2] - a[2], w = b[3] - a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }
  Vec42.distance = distance;
  function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[4] = a[4] * b;
    return out;
  }
  Vec42.scale = scale;
  function round2(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
  }
  Vec42.round = round2;
  function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
  }
  Vec42.ceil = ceil;
  function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
  }
  Vec42.floor = floor;
  function squaredDistance(a, b) {
    const x = b[0] - a[0], y = b[1] - a[1], z = b[2] - a[2], w = b[3] - a[3];
    return x * x + y * y + z * z + w * w;
  }
  Vec42.squaredDistance = squaredDistance;
  function norm(a) {
    const x = a[0], y = a[1], z = a[2], w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }
  Vec42.norm = norm;
  function squaredNorm(a) {
    const x = a[0], y = a[1], z = a[2], w = a[3];
    return x * x + y * y + z * z + w * w;
  }
  Vec42.squaredNorm = squaredNorm;
  function transformMat4(out, a, m) {
    const x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
  }
  Vec42.transformMat4 = transformMat4;
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  Vec42.dot = dot;
  function inverse(out, a) {
    out[0] = 1 / a[0];
    out[1] = 1 / a[1];
    out[2] = 1 / a[2];
    out[3] = 1 / a[3];
    return out;
  }
  Vec42.inverse = inverse;
  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
  }
  Vec42.exactEquals = exactEquals;
  function equals(a, b) {
    const a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    const b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
  }
  Vec42.equals = equals;
  function toString4(a, precision) {
    return `[${a[0].toPrecision(precision)} ${a[1].toPrecision(precision)} ${a[2].toPrecision(precision)}  ${a[3].toPrecision(precision)}]`;
  }
  Vec42.toString = toString4;
})(Vec4 || (Vec4 = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-math/linear-algebra/tensor.js
var Tensor;
(function(Tensor2) {
  function Layout(dimensions, axisOrderSlowToFast, ctor) {
    const axisOrderFastToSlow = [];
    for (let i = 0; i < axisOrderSlowToFast.length; i++)
      axisOrderFastToSlow[i] = axisOrderSlowToFast[axisOrderSlowToFast.length - i - 1];
    const accessDimensions = [1];
    for (let i = 1; i < dimensions.length; i++)
      accessDimensions[i] = dimensions[axisOrderFastToSlow[i - 1]];
    return { dimensions, axisOrderFastToSlow, axisOrderSlowToFast, accessDimensions, defaultCtor: ctor || Float64Array };
  }
  function create2(space, data) {
    return { space, data };
  }
  Tensor2.create = create2;
  function Space(dimensions, axisOrderSlowToFast, ctor) {
    const layout = Layout(dimensions, axisOrderSlowToFast, ctor);
    const { get, set, add, dataOffset: dataOffset2, getCoords: getCoords2 } = accessors(layout);
    return { rank: dimensions.length, dimensions, axisOrderSlowToFast, create: creator(layout), get, set, add, dataOffset: dataOffset2, getCoords: getCoords2 };
  }
  Tensor2.Space = Space;
  function Data1(values) {
    return values;
  }
  Tensor2.Data1 = Data1;
  function Vector(d, ctor) {
    return Space([d], [0], ctor);
  }
  Tensor2.Vector = Vector;
  function ColumnMajorMatrix(rows, cols, ctor) {
    return Space([rows, cols], [1, 0], ctor);
  }
  Tensor2.ColumnMajorMatrix = ColumnMajorMatrix;
  function RowMajorMatrix(rows, cols, ctor) {
    return Space([rows, cols], [0, 1], ctor);
  }
  Tensor2.RowMajorMatrix = RowMajorMatrix;
  function toMat4(out, space, data) {
    if (space.rank !== 2)
      throw new Error("Invalid tensor rank");
    const d0 = Math.min(4, space.dimensions[0]), d1 = Math.min(4, space.dimensions[1]);
    for (let i = 0; i < d0; i++) {
      for (let j = 0; j < d1; j++)
        Mat4.setValue(out, i, j, space.get(data, i, j));
    }
    return out;
  }
  Tensor2.toMat4 = toMat4;
  function toMat3(out, space, data) {
    if (space.rank !== 2)
      throw new Error("Invalid tensor rank");
    const d0 = Math.min(3, space.dimensions[0]), d1 = Math.min(3, space.dimensions[1]);
    for (let i = 0; i < d0; i++) {
      for (let j = 0; j < d1; j++)
        Mat3.setValue(out, i, j, space.get(data, i, j));
    }
    return out;
  }
  Tensor2.toMat3 = toMat3;
  function toVec3(out, space, data) {
    if (space.rank !== 1)
      throw new Error("Invalid tensor rank");
    const d0 = Math.min(3, space.dimensions[0]);
    for (let i = 0; i < d0; i++)
      out[i] = data[i];
    return out;
  }
  Tensor2.toVec3 = toVec3;
  function toVec4(out, space, data) {
    if (space.rank !== 1)
      throw new Error("Invalid tensor rank");
    const d0 = Math.min(4, space.dimensions[0]);
    for (let i = 0; i < d0; i++)
      out[i] = data[i];
    return out;
  }
  Tensor2.toVec4 = toVec4;
  function areEqualExact(a, b) {
    const len = a.length;
    if (len !== b.length)
      return false;
    for (let i = 0; i < len; i++)
      if (a[i] !== b[i])
        return false;
    return true;
  }
  Tensor2.areEqualExact = areEqualExact;
  function accessors(layout) {
    const { dimensions, axisOrderFastToSlow: ao } = layout;
    switch (dimensions.length) {
      case 1:
        return {
          get: (t, d) => t[d],
          set: (t, d, x) => t[d] = x,
          add: (t, d, x) => t[d] += x,
          dataOffset: (d) => d,
          getCoords: (o, c) => {
            c[0] = o;
            return c;
          }
        };
      case 2: {
        if (ao[0] === 0 && ao[1] === 1) {
          const rows = dimensions[0];
          return {
            get: (t, i, j) => t[j * rows + i],
            set: (t, i, j, x) => t[j * rows + i] = x,
            add: (t, i, j, x) => t[j * rows + i] += x,
            dataOffset: (i, j) => j * rows + i,
            getCoords: (o, c) => {
              c[0] = o % rows;
              c[1] = Math.floor(o / rows);
              return c;
            }
          };
        }
        if (ao[0] === 1 && ao[1] === 0) {
          const cols = dimensions[1];
          return {
            get: (t, i, j) => t[i * cols + j],
            set: (t, i, j, x) => t[i * cols + j] = x,
            add: (t, i, j, x) => t[i * cols + j] += x,
            dataOffset: (i, j) => i * cols + j,
            getCoords: (o, c) => {
              c[0] = Math.floor(o / cols);
              c[1] = o % cols;
              return c;
            }
          };
        }
        throw new Error("bad axis order");
      }
      case 3: {
        if (ao[0] === 0 && ao[1] === 1 && ao[2] === 2) {
          const u = dimensions[0], v = dimensions[1], uv = u * v;
          return {
            get: (t, i, j, k) => t[i + j * u + k * uv],
            set: (t, i, j, k, x) => t[i + j * u + k * uv] = x,
            add: (t, i, j, k, x) => t[i + j * u + k * uv] += x,
            dataOffset: (i, j, k) => i + j * u + k * uv,
            getCoords: (o, c) => {
              const p = Math.floor(o / u);
              c[0] = o % u;
              c[1] = p % v;
              c[2] = Math.floor(p / v);
              return c;
            }
          };
        }
        if (ao[0] === 0 && ao[1] === 2 && ao[2] === 1) {
          const u = dimensions[0], v = dimensions[2], uv = u * v;
          return {
            get: (t, i, j, k) => t[i + k * u + j * uv],
            set: (t, i, j, k, x) => t[i + k * u + j * uv] = x,
            add: (t, i, j, k, x) => t[i + k * u + j * uv] += x,
            dataOffset: (i, j, k) => i + k * u + j * uv,
            getCoords: (o, c) => {
              const p = Math.floor(o / u);
              c[0] = o % u;
              c[1] = Math.floor(p / v);
              c[2] = p % v;
              return c;
            }
          };
        }
        if (ao[0] === 1 && ao[1] === 0 && ao[2] === 2) {
          const u = dimensions[1], v = dimensions[0], uv = u * v;
          return {
            get: (t, i, j, k) => t[j + i * u + k * uv],
            set: (t, i, j, k, x) => t[j + i * u + k * uv] = x,
            add: (t, i, j, k, x) => t[j + i * u + k * uv] += x,
            dataOffset: (i, j, k) => j + i * u + k * uv,
            getCoords: (o, c) => {
              const p = Math.floor(o / u);
              c[0] = p % v;
              c[1] = o % u;
              c[2] = Math.floor(p / v);
              return c;
            }
          };
        }
        if (ao[0] === 1 && ao[1] === 2 && ao[2] === 0) {
          const u = dimensions[1], v = dimensions[2], uv = u * v;
          return {
            get: (t, i, j, k) => t[j + k * u + i * uv],
            set: (t, i, j, k, x) => t[j + k * u + i * uv] = x,
            add: (t, i, j, k, x) => t[j + k * u + i * uv] += x,
            dataOffset: (i, j, k) => j + k * u + i * uv,
            getCoords: (o, c) => {
              const p = Math.floor(o / u);
              c[0] = Math.floor(p / v);
              c[1] = o % u;
              c[2] = p % v;
              return c;
            }
          };
        }
        if (ao[0] === 2 && ao[1] === 0 && ao[2] === 1) {
          const u = dimensions[2], v = dimensions[0], uv = u * v;
          return {
            get: (t, i, j, k) => t[k + i * u + j * uv],
            set: (t, i, j, k, x) => t[k + i * u + j * uv] = x,
            add: (t, i, j, k, x) => t[k + i * u + j * uv] += x,
            dataOffset: (i, j, k) => k + i * u + j * uv,
            getCoords: (o, c) => {
              const p = Math.floor(o / u);
              c[0] = p % v;
              c[1] = Math.floor(p / v);
              c[2] = o % u;
              return c;
            }
          };
        }
        if (ao[0] === 2 && ao[1] === 1 && ao[2] === 0) {
          const u = dimensions[2], v = dimensions[1], uv = u * v;
          return {
            get: (t, i, j, k) => t[k + j * u + i * uv],
            set: (t, i, j, k, x) => t[k + j * u + i * uv] = x,
            add: (t, i, j, k, x) => t[k + j * u + i * uv] += x,
            dataOffset: (i, j, k) => k + j * u + i * uv,
            getCoords: (o, c) => {
              const p = Math.floor(o / u);
              c[0] = Math.floor(p / v);
              c[1] = p % v;
              c[2] = o % u;
              return c;
            }
          };
        }
        throw new Error("bad axis order");
      }
      default:
        return {
          get: (t, ...c) => t[dataOffset(layout, c)],
          set: (t, ...c) => t[dataOffset(layout, c)] = c[c.length - 1],
          add: (t, ...c) => t[dataOffset(layout, c)] += c[c.length - 1],
          dataOffset: (...c) => dataOffset(layout, c),
          getCoords: (o, c) => getCoords(layout, o, c)
        };
    }
  }
  function creator(layout) {
    const { dimensions: ds } = layout;
    let size4 = 1;
    for (let i = 0, _i = ds.length; i < _i; i++)
      size4 *= ds[i];
    return (ctor) => new (ctor || layout.defaultCtor)(size4);
  }
  function dataOffset(layout, coord) {
    const { accessDimensions: acc, axisOrderFastToSlow: ao } = layout;
    const d = acc.length - 1;
    let o = acc[d] * coord[ao[d]];
    for (let i = d - 1; i >= 0; i--) {
      o = (o + coord[ao[i]]) * acc[i];
    }
    return o;
  }
  function getCoords(layout, o, coords) {
    const { dimensions: dim, axisOrderFastToSlow: ao } = layout;
    const d = dim.length;
    let c = o;
    for (let i = 0; i < d; i++) {
      const d2 = dim[ao[i]];
      coords[ao[i]] = c % d2;
      c = Math.floor(c / d2);
    }
    coords[ao[d + 1]] = c;
    return coords;
  }
  function invertAxisOrder(v) {
    const ret = [];
    for (let i = 0; i < v.length; i++) {
      ret[i] = v[v.length - i - 1];
    }
    return ret;
  }
  Tensor2.invertAxisOrder = invertAxisOrder;
  function reorder(xs, indices) {
    const ret = [];
    for (let i = 0; i < xs.length; i++)
      ret[i] = xs[indices[i]];
    return ret;
  }
  function convertToCanonicalAxisIndicesFastToSlow(order) {
    const indices = new Int32Array(order.length);
    for (let i = 0; i < order.length; i++)
      indices[order[i]] = i;
    return (xs) => reorder(xs, indices);
  }
  Tensor2.convertToCanonicalAxisIndicesFastToSlow = convertToCanonicalAxisIndicesFastToSlow;
  function convertToCanonicalAxisIndicesSlowToFast(order) {
    const indices = new Int32Array(order.length);
    for (let i = 0; i < order.length; i++)
      indices[order[order.length - i - 1]] = i;
    return (xs) => reorder(xs, indices);
  }
  Tensor2.convertToCanonicalAxisIndicesSlowToFast = convertToCanonicalAxisIndicesSlowToFast;
})(Tensor || (Tensor = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/db/column-helpers.js
var column_helpers_exports = {};
__export(column_helpers_exports, {
  createAndFillArray: () => createAndFillArray,
  createArray: () => createArray,
  fillArrayValues: () => fillArrayValues,
  getArrayBounds: () => getArrayBounds,
  isTypedArray: () => isTypedArray,
  typedArrayWindow: () => typedArrayWindow
});
function getArrayBounds(rowCount, params) {
  const start4 = params && typeof params.start !== "undefined" ? Math.max(Math.min(params.start, rowCount - 1), 0) : 0;
  const end4 = params && typeof params.end !== "undefined" ? Math.min(params.end, rowCount) : rowCount;
  return { start: start4, end: end4 };
}
function createArray(rowCount, params) {
  const c = params && typeof params.array !== "undefined" ? params.array : Array;
  const { start: start4, end: end4 } = getArrayBounds(rowCount, params);
  return { array: new c(end4 - start4), start: start4, end: end4 };
}
function fillArrayValues(value, target, start4) {
  for (let i = 0, _e = target.length; i < _e; i++)
    target[i] = value(start4 + i);
  return target;
}
function createAndFillArray(rowCount, value, params) {
  const { array, start: start4 } = createArray(rowCount, params);
  return fillArrayValues(value, array, start4);
}
function isTypedArray(data) {
  return !!data.buffer && typeof data.byteLength === "number" && typeof data.BYTES_PER_ELEMENT === "number";
}
function typedArrayWindow(data, params) {
  const { constructor, buffer, length, byteOffset, BYTES_PER_ELEMENT } = data;
  const { start: start4, end: end4 } = getArrayBounds(length, params);
  if (start4 === 0 && end4 === length)
    return data;
  return new constructor(buffer, byteOffset + BYTES_PER_ELEMENT * start4, Math.min(length, end4 - start4));
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-io/reader/common/text/number-parser.js
function parseIntSkipLeadingWhitespace(str, start4, end4) {
  while (start4 < end4 && str.charCodeAt(start4) === 32)
    start4++;
  return parseInt2(str, start4, end4);
}
function parseInt2(str, start4, end4) {
  let _start = start4, ret = 0, neg = 1;
  if (str.charCodeAt(_start) === 45) {
    neg = -1;
    ++_start;
  } else if (str.charCodeAt(_start) === 43) {
    ++_start;
  }
  for (; _start < end4; _start++) {
    const c = str.charCodeAt(_start) - 48;
    if (c > 9 || c < 0)
      return neg * ret | 0;
    else
      ret = 10 * ret + c | 0;
  }
  return neg * ret;
}
function parseScientific(main, str, start4, end4) {
  if (str.charCodeAt(start4) === 43)
    start4++;
  return main * Math.pow(10, parseInt2(str, start4, end4));
}
function parseFloatSkipLeadingWhitespace(str, start4, end4) {
  while (start4 < end4 && str.charCodeAt(start4) === 32)
    start4++;
  return parseFloat(str, start4, end4);
}
function parseFloat(str, start4, end4) {
  let _start = start4, neg = 1, ret = 0, point = 0, div = 1;
  if (str.charCodeAt(_start) === 45) {
    neg = -1;
    ++_start;
  } else if (str.charCodeAt(_start) === 43) {
    ++_start;
  }
  while (_start < end4) {
    let c = str.charCodeAt(_start) - 48;
    if (c >= 0 && c < 10) {
      ret = ret * 10 + c;
      ++_start;
    } else if (c === -2) {
      ++_start;
      while (_start < end4) {
        c = str.charCodeAt(_start) - 48;
        if (c >= 0 && c < 10) {
          point = 10 * point + c;
          div = 10 * div;
          ++_start;
        } else if (c === 53 || c === 21) {
          return parseScientific(neg * (ret + point / div), str, _start + 1, end4);
        } else {
          return neg * (ret + point / div);
        }
      }
      return neg * (ret + point / div);
    } else if (c === 53 || c === 21) {
      return parseScientific(neg * ret, str, _start + 1, end4);
    } else {
      break;
    }
  }
  return neg * ret;
}
var NumberTypes;
(function(NumberTypes2) {
  NumberTypes2[NumberTypes2["Int"] = 0] = "Int";
  NumberTypes2[NumberTypes2["Float"] = 1] = "Float";
  NumberTypes2[NumberTypes2["Scientific"] = 2] = "Scientific";
  NumberTypes2[NumberTypes2["NaN"] = 3] = "NaN";
})(NumberTypes || (NumberTypes = {}));
var NumberType = {
  Int: NumberTypes.Int,
  Float: NumberTypes.Float,
  Scientific: NumberTypes.Scientific,
  NaN: NumberTypes.NaN
};
function isInt(str, start4, end4) {
  if (str.charCodeAt(start4) === 45) {
    start4++;
  }
  for (; start4 < end4; start4++) {
    const c = str.charCodeAt(start4) - 48;
    if (c > 9 || c < 0)
      return false;
  }
  return true;
}
function getNumberTypeScientific(str, start4, end4) {
  if (str.charCodeAt(start4) === 43)
    start4++;
  return isInt(str, start4, end4) ? NumberTypes.Scientific : NumberTypes.NaN;
}
function getNumberType(str) {
  let start4 = 0;
  const end4 = str.length;
  if (str.charCodeAt(start4) === 45) {
    ++start4;
  }
  if (str.charCodeAt(start4) === 46 && end4 - start4 === 1) {
    return NumberTypes.NaN;
  }
  while (start4 < end4) {
    let c = str.charCodeAt(start4) - 48;
    if (c >= 0 && c < 10) {
      ++start4;
    } else if (c === -2) {
      ++start4;
      let hasDigit = false;
      while (start4 < end4) {
        c = str.charCodeAt(start4) - 48;
        if (c >= 0 && c < 10) {
          hasDigit = true;
          ++start4;
        } else if (c === 53 || c === 21) {
          return getNumberTypeScientific(str, start4 + 1, end4);
        } else {
          return NumberTypes.NaN;
        }
      }
      return hasDigit ? NumberTypes.Float : NumberTypes.Int;
    } else if (c === 53 || c === 21) {
      if (start4 === 0 || start4 === 1 && str.charCodeAt(0) === 45) {
        return NumberTypes.NaN;
      }
      return getNumberTypeScientific(str, start4 + 1, end4);
    } else {
      break;
    }
  }
  return start4 === end4 ? NumberTypes.Int : NumberTypes.NaN;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/db/column.js
var Column;
(function(Column2) {
  let Schema;
  (function(Schema2) {
    Schema2.str = { "@type": "str", T: "", valueType: "str" };
    Schema2.ustr = { "@type": "str", T: "", valueType: "str", transform: "uppercase" };
    Schema2.lstr = { "@type": "str", T: "", valueType: "str", transform: "lowercase" };
    Schema2.int = { "@type": "int", T: 0, valueType: "int" };
    Schema2.coord = { "@type": "coord", T: 0, valueType: "float" };
    Schema2.float = { "@type": "float", T: 0, valueType: "float" };
    function Str(options) {
      var _a;
      return { "@type": "str", T: (_a = options === null || options === void 0 ? void 0 : options.defaultValue) !== null && _a !== void 0 ? _a : "", transform: options === null || options === void 0 ? void 0 : options.transform, valueType: "str" };
    }
    Schema2.Str = Str;
    ;
    function Int(defaultValue = 0) {
      return { "@type": "int", T: defaultValue, valueType: "int" };
    }
    Schema2.Int = Int;
    ;
    function Float(defaultValue = 0) {
      return { "@type": "float", T: defaultValue, valueType: "float" };
    }
    Schema2.Float = Float;
    ;
    function Tensor2(space, baseType = Schema2.float) {
      return { "@type": "tensor", T: space.create(), space, valueType: "tensor", baseType };
    }
    Schema2.Tensor = Tensor2;
    function Vector(dim, baseType = Schema2.float) {
      return Tensor2(Tensor.Vector(dim, baseType["@type"] === "int" ? Int32Array : Float64Array), baseType);
    }
    Schema2.Vector = Vector;
    function Matrix(rows, cols, baseType = Schema2.float) {
      return Tensor2(Tensor.ColumnMajorMatrix(rows, cols, baseType["@type"] === "int" ? Int32Array : Float64Array), baseType);
    }
    Schema2.Matrix = Matrix;
    function Aliased(t) {
      return t;
    }
    Schema2.Aliased = Aliased;
    function List(separator, itemParse, defaultValue = []) {
      return { "@type": "list", T: defaultValue, separator, itemParse, valueType: "list" };
    }
    Schema2.List = List;
  })(Schema = Column2.Schema || (Column2.Schema = {}));
  function is3(v) {
    return !!v && !!v.schema && !!v.value;
  }
  Column2.is = is3;
  let ValueKinds;
  (function(ValueKinds2) {
    ValueKinds2[ValueKinds2["Present"] = 0] = "Present";
    ValueKinds2[ValueKinds2["NotPresent"] = 1] = "NotPresent";
    ValueKinds2[ValueKinds2["Unknown"] = 2] = "Unknown";
  })(ValueKinds = Column2.ValueKinds || (Column2.ValueKinds = {}));
  Column2.ValueKind = {
    /** Defined value (= 0) */
    Present: ValueKinds.Present,
    /** Expressed in CIF as `.` (= 1) */
    NotPresent: ValueKinds.NotPresent,
    /** Expressed in CIF as `?` (= 2) */
    Unknown: ValueKinds.Unknown
  };
  function Undefined(rowCount, schema) {
    return constColumn(schema["T"], rowCount, schema, ValueKinds.NotPresent);
  }
  Column2.Undefined = Undefined;
  function ofConst(v, rowCount, type) {
    return constColumn(v, rowCount, type, ValueKinds.Present);
  }
  Column2.ofConst = ofConst;
  function ofLambda(spec) {
    return lambdaColumn(spec);
  }
  Column2.ofLambda = ofLambda;
  function range(min4, max4) {
    return ofLambda({
      value: (i) => i + min4,
      rowCount: Math.max(max4 - min4 + 1, 0),
      schema: Schema.int
    });
  }
  Column2.range = range;
  function ofArray(spec) {
    return arrayColumn(spec);
  }
  Column2.ofArray = ofArray;
  function ofIntArray(array) {
    return arrayColumn({ array, schema: Schema.int });
  }
  Column2.ofIntArray = ofIntArray;
  function ofFloatArray(array) {
    return arrayColumn({ array, schema: Schema.float });
  }
  Column2.ofFloatArray = ofFloatArray;
  function ofStringArray(array) {
    return arrayColumn({ array, schema: Schema.str });
  }
  Column2.ofStringArray = ofStringArray;
  function ofStringAliasArray(array) {
    return arrayColumn({ array, schema: Schema.Aliased(Schema.str) });
  }
  Column2.ofStringAliasArray = ofStringAliasArray;
  function ofStringListArray(array, separator = ",") {
    return arrayColumn({ array, schema: Schema.List(separator, (x) => x) });
  }
  Column2.ofStringListArray = ofStringListArray;
  function ofIntTokens(tokens) {
    const { count: count2, data, indices } = tokens;
    return lambdaColumn({
      value: (row) => parseInt2(data, indices[2 * row], indices[2 * row + 1]) || 0,
      rowCount: count2,
      schema: Schema.int
    });
  }
  Column2.ofIntTokens = ofIntTokens;
  function ofFloatTokens(tokens) {
    const { count: count2, data, indices } = tokens;
    return lambdaColumn({
      value: (row) => parseFloat(data, indices[2 * row], indices[2 * row + 1]) || 0,
      rowCount: count2,
      schema: Schema.float
    });
  }
  Column2.ofFloatTokens = ofFloatTokens;
  function ofStringTokens(tokens) {
    const { count: count2, data, indices } = tokens;
    return lambdaColumn({
      value: (row) => {
        const ret = data.substring(indices[2 * row], indices[2 * row + 1]);
        if (ret === "." || ret === "?")
          return "";
        return ret;
      },
      rowCount: count2,
      schema: Schema.str
    });
  }
  Column2.ofStringTokens = ofStringTokens;
  function window2(column, start4, end4) {
    return windowColumn(column, start4, end4);
  }
  Column2.window = window2;
  function view(column, indices, checkIndentity = true) {
    return columnView(column, indices, checkIndentity);
  }
  Column2.view = view;
  function createFirstIndexMap(column) {
    return createFirstIndexMapOfColumn(column);
  }
  Column2.createFirstIndexMap = createFirstIndexMap;
  function createIndexer(column) {
    return createIndexerOfColumn(column);
  }
  Column2.createIndexer = createIndexer;
  function mapToArray(column, f, ctor) {
    return mapToArrayImpl(column, f, ctor || Array);
  }
  Column2.mapToArray = mapToArray;
  function areEqual4(a, b) {
    return areColumnsEqual(a, b);
  }
  Column2.areEqual = areEqual4;
  function indicesOf2(c, test) {
    return columnIndicesOf(c, test);
  }
  Column2.indicesOf = indicesOf2;
  function asArrayColumn(c, array) {
    if (c.__array)
      return c;
    if (!c.isDefined)
      return Undefined(c.rowCount, c.schema);
    return arrayColumn({ array: c.toArray({ array }), schema: c.schema, valueKind: c.valueKind });
  }
  Column2.asArrayColumn = asArrayColumn;
  function copyToArray(c, array, offset = 0) {
    if (!c.isDefined)
      return;
    const cArray = c.__array;
    if (cArray) {
      for (let i = 0, _i = cArray.length; i < _i; i++)
        array[offset + i] = cArray[i];
    } else {
      for (let i = 0, _i = c.rowCount; i < _i; i++)
        array[offset + i] = c.value(i);
    }
  }
  Column2.copyToArray = copyToArray;
  function isIdentity2(c) {
    for (let i = 0, _i = c.rowCount; i < _i; i++) {
      if (i !== c.value(i))
        return false;
    }
    return true;
  }
  Column2.isIdentity = isIdentity2;
})(Column || (Column = {}));
function createFirstIndexMapOfColumn(c) {
  const map = /* @__PURE__ */ new Map();
  for (let i = 0, _i = c.rowCount; i < _i; i++) {
    const v = c.value(i);
    if (!map.has(v))
      map.set(c.value(i), i);
  }
  return map;
}
function createIndexerOfColumn(c) {
  const map = /* @__PURE__ */ new Map();
  for (let i = 0, _i = c.rowCount; i < _i; i++) {
    const v = c.value(i);
    if (!map.has(v))
      map.set(c.value(i), i);
  }
  return (v) => map.has(v) ? map.get(v) : -1;
}
function constColumn(v, rowCount, schema, valueKind) {
  const value = (row) => v;
  return {
    schema,
    __array: void 0,
    isDefined: valueKind === Column.ValueKinds.Present,
    rowCount,
    value,
    valueKind: (row) => valueKind,
    toArray: (params) => {
      const { array } = createArray(rowCount, params);
      for (let i = 0, _i = array.length; i < _i; i++)
        array[i] = v;
      return array;
    },
    areValuesEqual: (rowA, rowB) => true
  };
}
function lambdaColumn({ value, valueKind, areValuesEqual: areValuesEqual2, rowCount, schema }) {
  return {
    schema,
    __array: void 0,
    isDefined: true,
    rowCount,
    value,
    valueKind: valueKind ? valueKind : (row) => Column.ValueKinds.Present,
    toArray: (params) => {
      const { array, start: start4 } = createArray(rowCount, params);
      for (let i = 0, _i = array.length; i < _i; i++)
        array[i] = value(i + start4);
      return array;
    },
    areValuesEqual: areValuesEqual2 ? areValuesEqual2 : (rowA, rowB) => value(rowA) === value(rowB)
  };
}
function arrayColumn({ array, schema, valueKind }) {
  const rowCount = array.length;
  const defaultValue = schema.T;
  const value = schema.valueType === "str" ? schema.transform === "lowercase" ? (row) => {
    const v = array[row];
    return typeof v === "string" ? v.toLowerCase() : `${v !== null && v !== void 0 ? v : defaultValue}`.toLowerCase();
  } : schema.transform === "uppercase" ? (row) => {
    const v = array[row];
    return typeof v === "string" ? v.toUpperCase() : `${v !== null && v !== void 0 ? v : defaultValue}`.toUpperCase();
  } : (row) => {
    const v = array[row];
    return typeof v === "string" ? v : `${v !== null && v !== void 0 ? v : defaultValue}`;
  } : (row) => array[row];
  const isTyped = isTypedArray(array);
  return {
    schema,
    __array: array,
    isDefined: true,
    rowCount,
    value,
    valueKind: valueKind ? valueKind : (row) => Column.ValueKinds.Present,
    toArray: schema.valueType === "str" ? schema.transform === "lowercase" ? (params) => {
      const { start: start4, end: end4 } = getArrayBounds(rowCount, params);
      const ret = new (params && typeof params.array !== "undefined" ? params.array : array.constructor)(end4 - start4);
      for (let i = 0, _i = end4 - start4; i < _i; i++) {
        const v = array[start4 + i];
        ret[i] = typeof v === "string" ? v.toLowerCase() : `${v !== null && v !== void 0 ? v : defaultValue}`.toLowerCase();
      }
      return ret;
    } : schema.transform === "uppercase" ? (params) => {
      const { start: start4, end: end4 } = getArrayBounds(rowCount, params);
      const ret = new (params && typeof params.array !== "undefined" ? params.array : array.constructor)(end4 - start4);
      for (let i = 0, _i = end4 - start4; i < _i; i++) {
        const v = array[start4 + i];
        ret[i] = typeof v === "string" ? v.toUpperCase() : `${v !== null && v !== void 0 ? v : defaultValue}`.toUpperCase();
      }
      return ret;
    } : (params) => {
      const { start: start4, end: end4 } = getArrayBounds(rowCount, params);
      const ret = new (params && typeof params.array !== "undefined" ? params.array : array.constructor)(end4 - start4);
      for (let i = 0, _i = end4 - start4; i < _i; i++) {
        const v = array[start4 + i];
        ret[i] = typeof v === "string" ? v : `${v !== null && v !== void 0 ? v : defaultValue}`;
      }
      return ret;
    } : isTyped ? (params) => typedArrayWindow(array, params) : (params) => {
      const { start: start4, end: end4 } = getArrayBounds(rowCount, params);
      if (start4 === 0 && end4 === array.length)
        return array;
      const ret = new (params && typeof params.array !== "undefined" ? params.array : array.constructor)(end4 - start4);
      for (let i = 0, _i = end4 - start4; i < _i; i++)
        ret[i] = array[start4 + i];
      return ret;
    },
    areValuesEqual: (rowA, rowB) => array[rowA] === array[rowB]
  };
}
function windowColumn(column, start4, end4) {
  if (!column.isDefined)
    return Column.Undefined(end4 - start4, column.schema);
  if (start4 === 0 && end4 === column.rowCount)
    return column;
  if (!!column.__array && isTypedArray(column.__array))
    return windowTyped(column, start4, end4);
  return windowFull(column, start4, end4);
}
function windowTyped(c, start4, end4) {
  const array = typedArrayWindow(c.__array, { start: start4, end: end4 });
  const vk = c.valueKind;
  return arrayColumn({ array, schema: c.schema, valueKind: (row) => vk(start4 + row) });
}
function windowFull(c, start4, end4) {
  const v = c.value, vk = c.valueKind, ave = c.areValuesEqual;
  const value = start4 === 0 ? v : (row) => v(row + start4);
  const rowCount = end4 - start4;
  return {
    schema: c.schema,
    __array: void 0,
    isDefined: c.isDefined,
    rowCount,
    value,
    valueKind: start4 === 0 ? vk : (row) => vk(row + start4),
    toArray: (params) => {
      const { array } = createArray(rowCount, params);
      for (let i = 0, _i = array.length; i < _i; i++)
        array[i] = v(i + start4);
      return array;
    },
    areValuesEqual: start4 === 0 ? ave : (rowA, rowB) => ave(rowA + start4, rowB + start4)
  };
}
function isIdentity(map, rowCount) {
  if (map.length !== rowCount)
    return false;
  for (let i = 0, _i = map.length; i < _i; i++) {
    if (map[i] !== i)
      return false;
  }
  return true;
}
function columnView(c, map, checkIdentity) {
  if (c.rowCount === 0)
    return c;
  if (checkIdentity && isIdentity(map, c.rowCount))
    return c;
  if (!!c.__array && typeof c.value(0) === typeof c.__array[0])
    return arrayView(c, map);
  return viewFull(c, map);
}
function arrayView(c, map) {
  const array = c.__array;
  const ret = new array.constructor(map.length);
  for (let i = 0, _i = map.length; i < _i; i++)
    ret[i] = array[map[i]];
  const vk = c.valueKind;
  return arrayColumn({ array: ret, schema: c.schema, valueKind: (row) => vk(map[row]) });
}
function viewFull(c, map) {
  const v = c.value, vk = c.valueKind, ave = c.areValuesEqual;
  const value = (row) => v(map[row]);
  const rowCount = map.length;
  return {
    schema: c.schema,
    __array: void 0,
    isDefined: c.isDefined,
    rowCount,
    value,
    valueKind: (row) => vk(map[row]),
    toArray: (params) => {
      const { array } = createArray(rowCount, params);
      for (let i = 0, _i = array.length; i < _i; i++)
        array[i] = v(map[i]);
      return array;
    },
    areValuesEqual: (rowA, rowB) => ave(map[rowA], map[rowB])
  };
}
function mapToArrayImpl(c, f, ctor) {
  const ret = new ctor(c.rowCount);
  for (let i = 0, _i = c.rowCount; i < _i; i++)
    ret[i] = f(c.value(i));
  return ret;
}
function areColumnsEqual(a, b) {
  if (a === b)
    return true;
  if (a.rowCount !== b.rowCount || a.isDefined !== b.isDefined || a.schema.valueType !== b.schema.valueType)
    return false;
  if (!!a.__array && !!b.__array)
    return areArraysEqual(a, b);
  return areValuesEqual(a, b);
}
function areArraysEqual(a, b) {
  const xs = a.__array, ys = b.__array;
  for (let i = 0, _i = a.rowCount; i < _i; i++) {
    if (xs[i] !== ys[i])
      return false;
  }
  return true;
}
function areValuesEqual(a, b) {
  const va = a.value, vb = b.value;
  for (let i = 0, _i = a.rowCount; i < _i; i++) {
    if (va(i) !== vb(i))
      return false;
  }
  return true;
}
function columnIndicesOf(c, test) {
  const ret = [], v = c.value;
  for (let i = 0, _i = c.rowCount; i < _i; i++) {
    if (test(v(i)))
      ret[ret.length] = i;
  }
  return ret;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/db/table.js
var Table;
(function(Table2) {
  function is3(t) {
    return t && typeof t._rowCount === "number" && !!t._columns && !!t._schema;
  }
  Table2.is = is3;
  function pickColumns(schema, table, guard = {}) {
    const ret = /* @__PURE__ */ Object.create(null);
    const keys = Object.keys(schema);
    ret._rowCount = table._rowCount;
    ret._columns = keys;
    ret._schema = schema;
    for (const k of keys) {
      if (!!table[k])
        ret[k] = table[k];
      else if (!!guard[k])
        ret[k] = guard[k];
      else
        throw Error(`Cannot find column '${k}'.`);
    }
    return ret;
  }
  Table2.pickColumns = pickColumns;
  function ofColumns(schema, columns) {
    const _columns = Object.keys(columns);
    const _rowCount = columns[_columns[0]].rowCount;
    return { _rowCount, _columns, _schema: schema, ...columns };
  }
  Table2.ofColumns = ofColumns;
  function ofPartialColumns(schema, partialColumns, rowCount) {
    const ret = /* @__PURE__ */ Object.create(null);
    const columns = Object.keys(schema);
    ret._rowCount = rowCount;
    ret._columns = columns;
    ret._schema = schema;
    for (const k of columns) {
      if (k in partialColumns)
        ret[k] = partialColumns[k];
      else
        ret[k] = Column.Undefined(rowCount, schema[k]);
    }
    return ret;
  }
  Table2.ofPartialColumns = ofPartialColumns;
  function ofUndefinedColumns(schema, rowCount) {
    const ret = /* @__PURE__ */ Object.create(null);
    const columns = Object.keys(schema);
    ret._rowCount = rowCount;
    ret._columns = columns;
    ret._schema = schema;
    for (const k of columns) {
      ret[k] = Column.Undefined(rowCount, schema[k]);
    }
    return ret;
  }
  Table2.ofUndefinedColumns = ofUndefinedColumns;
  function ofRows(schema, rows) {
    const ret = /* @__PURE__ */ Object.create(null);
    const rowCount = rows.length;
    const columns = Object.keys(schema);
    ret._rowCount = rowCount;
    ret._columns = columns;
    ret._schema = schema;
    for (const k of columns) {
      ret[k] = Column.ofLambda({
        rowCount,
        schema: schema[k],
        value: (r) => rows[r][k],
        valueKind: (r) => typeof rows[r][k] === "undefined" ? Column.ValueKinds.NotPresent : Column.ValueKinds.Present
      });
    }
    return ret;
  }
  Table2.ofRows = ofRows;
  function ofArrays(schema, arrays) {
    var _a;
    const ret = /* @__PURE__ */ Object.create(null);
    const columns = Object.keys(schema);
    ret._rowCount = 0;
    ret._columns = columns;
    ret._schema = schema;
    for (const k of columns) {
      if (typeof arrays[k] !== "undefined") {
        ret[k] = Column.ofArray({ array: arrays[k], schema: schema[k] });
        ret._rowCount = (_a = arrays[k]) === null || _a === void 0 ? void 0 : _a.length;
      } else {
        ret[k] = Column.Undefined(ret._rowCount, schema[k]);
      }
    }
    return ret;
  }
  Table2.ofArrays = ofArrays;
  function view(table, schema, view2) {
    const ret = /* @__PURE__ */ Object.create(null);
    const columns = Object.keys(schema);
    ret._rowCount = view2.length;
    ret._columns = columns;
    ret._schema = schema;
    for (const k of columns) {
      ret[k] = Column.view(table[k], view2);
    }
    return ret;
  }
  Table2.view = view;
  function pick(table, schema, test) {
    const _view = [];
    for (let i = 0, il = table._rowCount; i < il; ++i) {
      if (test(i))
        _view.push(i);
    }
    return view(table, schema, _view);
  }
  Table2.pick = pick;
  function window2(table, schema, start4, end4) {
    if (start4 === 0 && end4 === table._rowCount)
      return table;
    const ret = /* @__PURE__ */ Object.create(null);
    const columns = Object.keys(schema);
    ret._rowCount = end4 - start4;
    ret._columns = columns;
    ret._schema = schema;
    for (const k of columns) {
      ret[k] = Column.window(table[k], start4, end4);
    }
    return ret;
  }
  Table2.window = window2;
  function concat(tables, schema) {
    const ret = /* @__PURE__ */ Object.create(null);
    const columns = Object.keys(schema);
    ret._rowCount = 0;
    for (const table of tables) {
      ret._rowCount += table._rowCount;
    }
    const arrays = {};
    for (const column of columns) {
      arrays[column] = new Array(ret._rowCount);
    }
    ret._columns = columns;
    ret._schema = schema;
    let offset = 0;
    for (const table of tables) {
      for (const k of columns) {
        Column.copyToArray(table[k], arrays[k], offset);
      }
      offset += table._rowCount;
    }
    for (const k of columns) {
      ret[k] = Column.ofArray({ array: arrays[k], schema: schema[k] });
    }
    return ret;
  }
  Table2.concat = concat;
  function columnToArray(table, name, array) {
    table[name] = Column.asArrayColumn(table[name], array);
  }
  Table2.columnToArray = columnToArray;
  function sort2(table, cmp) {
    const indices = new Int32Array(table._rowCount);
    for (let i = 0, _i = indices.length; i < _i; i++)
      indices[i] = i;
    sortArray(indices, (_, i, j) => cmp(i, j));
    let isIdentity2 = true;
    for (let i = 0, _i = indices.length; i < _i; i++) {
      if (indices[i] !== i) {
        isIdentity2 = false;
        break;
      }
    }
    if (isIdentity2)
      return table;
    const ret = /* @__PURE__ */ Object.create(null);
    ret._rowCount = table._rowCount;
    ret._columns = table._columns;
    ret._schema = table._schema;
    for (const c of table._columns) {
      ret[c] = Column.view(table[c], indices, false);
    }
    return ret;
  }
  Table2.sort = sort2;
  function areEqual4(a, b) {
    if (a._rowCount !== b._rowCount)
      return false;
    if (a._columns.length !== b._columns.length)
      return false;
    for (const c of a._columns) {
      if (!b[c])
        return false;
    }
    for (const c of a._columns) {
      if (!Column.areEqual(a[c], b[c]))
        return false;
    }
    return true;
  }
  Table2.areEqual = areEqual4;
  function getRow(table, index) {
    const row = /* @__PURE__ */ Object.create(null);
    const { _columns: cols } = table;
    for (let i = 0; i < cols.length; i++) {
      const c = cols[i];
      row[c] = table[c].value(index);
    }
    return row;
  }
  Table2.getRow = getRow;
  function pickRow(table, test) {
    for (let i = 0, il = table._rowCount; i < il; ++i) {
      if (test(i))
        return getRow(table, i);
    }
  }
  Table2.pickRow = pickRow;
  function getRows(table) {
    const ret = [];
    const { _rowCount: c } = table;
    for (let i = 0; i < c; i++) {
      ret[i] = getRow(table, i);
    }
    return ret;
  }
  Table2.getRows = getRows;
  function toArrays(table) {
    const arrays = {};
    const { _columns } = table;
    for (let i = 0; i < _columns.length; i++) {
      const c = _columns[i];
      arrays[c] = table[c].toArray();
    }
    return arrays;
  }
  Table2.toArrays = toArrays;
  function formatToString(table) {
    const sb = StringBuilder.create();
    const { _columns: cols, _rowCount } = table;
    let headerLength = 1;
    StringBuilder.write(sb, "|");
    for (let i = 0; i < cols.length; i++) {
      StringBuilder.write(sb, cols[i]);
      StringBuilder.write(sb, "|");
      headerLength += cols[i].length + 1;
    }
    StringBuilder.newline(sb);
    StringBuilder.write(sb, new Array(headerLength + 1).join("-"));
    StringBuilder.newline(sb);
    for (let r = 0; r < _rowCount; r++) {
      StringBuilder.write(sb, "|");
      for (let i = 0; i < cols.length; i++) {
        const c = table[cols[i]];
        if (c.valueKind(r) === Column.ValueKinds.Present) {
          StringBuilder.write(sb, c.value(r));
          StringBuilder.write(sb, "|");
        } else {
          StringBuilder.write(sb, ".|");
        }
      }
      StringBuilder.newline(sb);
    }
    return StringBuilder.getString(sb);
  }
  Table2.formatToString = formatToString;
})(Table || (Table = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/db/database.js
var Database;
(function(Database2) {
  function ofTables(name, schema, tables) {
    const keys = Object.keys(tables);
    const ret = /* @__PURE__ */ Object.create(null);
    const tableNames = [];
    ret._name = name;
    ret._tableNames = tableNames;
    ret._schema = schema;
    for (const k of keys) {
      if (!Table.is(tables[k]))
        continue;
      ret[k] = tables[k];
      tableNames[tableNames.length] = k;
    }
    return ret;
  }
  Database2.ofTables = ofTables;
  function getTablesAsRows(database) {
    const ret = {};
    for (const k of database._tableNames) {
      ret[k] = Table.getRows(database[k]);
    }
    return ret;
  }
  Database2.getTablesAsRows = getTablesAsRows;
})(Database || (Database = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/util/array.js
function arrayFind(array, f) {
  for (let i = 0, _i = array.length; i < _i; i++) {
    if (f(array[i]))
      return array[i];
  }
  return void 0;
}
function iterableToArray(it) {
  if (Array.from)
    return Array.from(it);
  const ret = [];
  while (true) {
    const { done, value } = it.next();
    if (done)
      break;
    ret[ret.length] = value;
  }
  return ret;
}
function createRangeArray(start4, end4, ctor) {
  const len = end4 - start4 + 1;
  const array = ctor ? new ctor(len) : new Int32Array(len);
  for (let i = 0; i < len; i++) {
    array[i] = i + start4;
  }
  return array;
}
function arrayPickIndices(array, indices) {
  const ret = new (arrayGetCtor(array))(indices.length);
  for (let i = 0, _i = indices.length; i < _i; i++) {
    ret[i] = array[indices[i]];
  }
  return ret;
}
function arrayGetCtor(data) {
  const ret = data.constructor;
  if (!ret)
    throw new Error("data does not define a constructor and it should");
  return ret;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/util/chunked-array.js
var ChunkedArray;
(function(ChunkedArray2) {
  function is3(x) {
    return x.creator && x.chunkSize;
  }
  ChunkedArray2.is = is3;
  function allocateNext(array) {
    const nextSize = array.growBy * array.elementSize;
    array.currentSize = nextSize;
    array.currentIndex = 0;
    array.currentChunk = new array.ctor(nextSize);
    array.allocatedSize += nextSize;
    array.chunks[array.chunks.length] = array.currentChunk;
  }
  function add4(array, x, y, z, w) {
    if (array.currentIndex >= array.currentSize)
      allocateNext(array);
    const c = array.currentChunk;
    const i = array.currentIndex;
    c[i] = x;
    c[i + 1] = y;
    c[i + 2] = z;
    c[i + 3] = w;
    array.currentIndex += 4;
    return array.elementCount++;
  }
  ChunkedArray2.add4 = add4;
  function add3(array, x, y, z) {
    if (array.currentIndex >= array.currentSize)
      allocateNext(array);
    const c = array.currentChunk;
    const i = array.currentIndex;
    c[i] = x;
    c[i + 1] = y;
    c[i + 2] = z;
    array.currentIndex += 3;
    return array.elementCount++;
  }
  ChunkedArray2.add3 = add3;
  function add2(array, x, y) {
    if (array.currentIndex >= array.currentSize)
      allocateNext(array);
    const c = array.currentChunk;
    const i = array.currentIndex;
    c[i] = x;
    c[i + 1] = y;
    array.currentIndex += 2;
    return array.elementCount++;
  }
  ChunkedArray2.add2 = add2;
  function add(array, x) {
    if (array.currentIndex >= array.currentSize)
      allocateNext(array);
    array.currentChunk[array.currentIndex] = x;
    array.currentIndex += 1;
    return array.elementCount++;
  }
  ChunkedArray2.add = add;
  function addRepeat(array, n, x) {
    for (let i = 0; i < n; i++) {
      if (array.currentIndex >= array.currentSize)
        allocateNext(array);
      array.currentChunk[array.currentIndex++] = x;
      array.elementCount++;
    }
    return array.elementCount;
  }
  ChunkedArray2.addRepeat = addRepeat;
  function addMany(array, data) {
    const { elementSize } = array;
    for (let i = 0, _i = data.length; i < _i; i += elementSize) {
      if (array.currentIndex >= array.currentSize)
        allocateNext(array);
      const { currentChunk } = array;
      for (let j = 0; j < elementSize; j++) {
        currentChunk[array.currentIndex++] = data[i + j];
      }
      array.elementCount++;
    }
    return array.elementCount;
  }
  ChunkedArray2.addMany = addMany;
  function compact(array, doNotResizeSingleton = false) {
    return _compact(array, doNotResizeSingleton);
  }
  ChunkedArray2.compact = compact;
  function _compact(array, doNotResizeSingleton) {
    const { ctor, chunks, currentIndex } = array;
    if (!chunks.length)
      return new ctor(0);
    if (chunks.length === 1) {
      if (doNotResizeSingleton || currentIndex === array.allocatedSize) {
        return chunks[0];
      }
    }
    let size4 = 0;
    for (let i = 0, _i = chunks.length - 1; i < _i; i++)
      size4 += chunks[i].length;
    size4 += array.currentIndex;
    const ret = new ctor(size4);
    let offset = 0;
    if (ret.buffer) {
      for (let i = 0, _i = chunks.length - 1; i < _i; i++) {
        ret.set(chunks[i], offset);
        offset += chunks[i].length;
      }
    } else {
      for (let i = 0, _i = chunks.length - 1; i < _i; i++) {
        const chunk = chunks[i];
        for (let j = 0, _j = chunk.length; j < _j; j++)
          ret[offset + j] = chunk[j];
        offset += chunk.length;
      }
    }
    const lastChunk = chunks[chunks.length - 1];
    if (ret.buffer && currentIndex >= array.currentSize) {
      ret.set(lastChunk, offset);
    } else {
      for (let j = 0, _j = lastChunk.length; j < _j; j++)
        ret[offset + j] = lastChunk[j];
    }
    return ret;
  }
  ChunkedArray2._compact = _compact;
  function create2(ctor, elementSize, chunkSize, initialChunkOrCount) {
    const ret = {
      ctor,
      elementSize,
      growBy: Math.max(1, Math.ceil(chunkSize)),
      allocatedSize: 0,
      elementCount: 0,
      currentSize: 0,
      currentChunk: void 0,
      currentIndex: 0,
      chunks: []
    };
    if (typeof initialChunkOrCount === "undefined")
      return ret;
    if (typeof initialChunkOrCount === "number") {
      ret.currentChunk = new ctor(initialChunkOrCount * elementSize);
      ret.allocatedSize = initialChunkOrCount * elementSize;
      ret.currentSize = ret.currentChunk.length;
      ret.chunks[0] = ret.currentChunk;
      return ret;
    }
    const initialChunk = initialChunkOrCount;
    if (initialChunk.length % elementSize !== 0)
      throw new Error("initialChunk length must be a multiple of the element size.");
    ret.currentChunk = initialChunk;
    ret.allocatedSize = initialChunk.length;
    ret.currentSize = initialChunk.length;
    ret.chunks[0] = initialChunk;
    return ret;
  }
  ChunkedArray2.create = create2;
})(ChunkedArray || (ChunkedArray = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/util/buckets.js
function sortAsc2(bs, i, j) {
  return bs[i].key < bs[j].key ? -1 : 1;
}
function _makeBuckets(indices, getKey, sortBuckets, start4, end4) {
  const buckets = /* @__PURE__ */ new Map();
  const bucketList = [];
  let prevKey = getKey(indices[0]);
  let isBucketed = true;
  for (let i = start4; i < end4; i++) {
    const key = getKey(indices[i]);
    if (buckets.has(key)) {
      buckets.get(key).count++;
      if (prevKey !== key)
        isBucketed = false;
    } else {
      const bucket = { key, count: 1, offset: i };
      buckets.set(key, bucket);
      bucketList[bucketList.length] = bucket;
    }
    prevKey = key;
  }
  const bucketOffsets = new Int32Array(bucketList.length + 1);
  bucketOffsets[bucketList.length] = end4;
  let sorted = true;
  if (sortBuckets) {
    for (let i = 1, _i = bucketList.length; i < _i; i++) {
      if (bucketList[i - 1].key > bucketList[i].key) {
        sorted = false;
        break;
      }
    }
  }
  if (isBucketed && sorted) {
    for (let i = 0; i < bucketList.length; i++)
      bucketOffsets[i] = bucketList[i].offset;
    return bucketOffsets;
  }
  if (sortBuckets && !sorted) {
    sort(bucketList, 0, bucketList.length, sortAsc2, arraySwap);
  }
  let offset = 0;
  for (let i = 0; i < bucketList.length; i++) {
    const b = bucketList[i];
    b.offset = offset;
    offset += b.count;
  }
  const reorderedIndices = new Int32Array(end4 - start4);
  for (let i = start4; i < end4; i++) {
    const key = getKey(indices[i]);
    const bucket = buckets.get(key);
    reorderedIndices[bucket.offset++] = indices[i];
  }
  for (let i = 0, _i = reorderedIndices.length; i < _i; i++) {
    indices[i + start4] = reorderedIndices[i];
  }
  bucketOffsets[0] = start4;
  for (let i = 1; i < bucketList.length; i++)
    bucketOffsets[i] = bucketList[i - 1].offset + start4;
  return bucketOffsets;
}
function makeBuckets(indices, getKey, options) {
  const s = options && options.start || 0;
  const e = options && options.end || indices.length;
  if (e - s <= 0)
    throw new Error("Can only bucket non-empty collections.");
  return _makeBuckets(indices, getKey, !!(options && options.sort), s, e);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/tuple.js
var IntTuple;
(function(IntTuple2) {
  IntTuple2.Zero = 0;
  const { _int32, _float64, _int32_1, _float64_1 } = function() {
    const data = new ArrayBuffer(8);
    const data_1 = new ArrayBuffer(8);
    return {
      _int32: new Int32Array(data),
      _float64: new Float64Array(data),
      _int32_1: new Int32Array(data_1),
      _float64_1: new Float64Array(data_1)
    };
  }();
  function is3(x) {
    return typeof x === "number";
  }
  IntTuple2.is = is3;
  function create2(fst2, snd2) {
    _int32[0] = fst2;
    _int32[1] = snd2;
    return _float64[0];
  }
  IntTuple2.create = create2;
  function diff(t) {
    _float64[0] = t;
    return _int32[1] - _int32[0];
  }
  IntTuple2.diff = diff;
  function fst(t) {
    _float64[0] = t;
    return _int32[0];
  }
  IntTuple2.fst = fst;
  function snd(t) {
    _float64[0] = t;
    return _int32[1];
  }
  IntTuple2.snd = snd;
  function areEqual4(a, b) {
    _float64[0] = a;
    _float64_1[0] = b;
    return _int32[0] === _int32_1[0] && _int32[1] === _int32_1[1];
  }
  IntTuple2.areEqual = areEqual4;
  function compare(a, b) {
    _float64[0] = a;
    _float64_1[0] = b;
    const x = _int32[0] - _int32_1[0];
    if (x !== 0)
      return x;
    return _int32[1] - _int32_1[1];
  }
  IntTuple2.compare = compare;
  function compareInArray(xs, i, j) {
    _float64[0] = xs[i];
    _float64_1[0] = xs[j];
    const x = _int32[0] - _int32_1[0];
    if (x !== 0)
      return x;
    return _int32[1] - _int32_1[1];
  }
  IntTuple2.compareInArray = compareInArray;
  function hashCode4(t) {
    _float64[0] = t;
    return hash2(_int32[0], _int32[1]);
  }
  IntTuple2.hashCode = hashCode4;
  function toString4(t) {
    _float64[0] = t;
    return `(${_int32[0]}, ${_int32[1]})`;
  }
  IntTuple2.toString = toString4;
})(IntTuple || (IntTuple = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/impl/interval.js
var Empty = IntTuple.Zero;
function ofRange(min4, max4) {
  return max4 < min4 ? IntTuple.create(min4, min4) : IntTuple.create(min4, max4 + 1);
}
function ofBounds(start4, end4) {
  return end4 <= start4 ? IntTuple.create(start4, start4) : IntTuple.create(start4, end4);
}
function ofLength(length) {
  return length < 0 ? IntTuple.create(0, 0) : IntTuple.create(0, length);
}
var is = IntTuple.is;
var start = IntTuple.fst;
var end = IntTuple.snd;
var min = IntTuple.fst;
function max(i) {
  return IntTuple.snd(i) - 1;
}
var size = IntTuple.diff;
var hashCode = IntTuple.hashCode;
var toString = IntTuple.toString;
function has(int, v) {
  return IntTuple.fst(int) <= v && v < IntTuple.snd(int);
}
function indexOf(int, x) {
  const m = start(int);
  return x >= m && x < end(int) ? x - m : -1;
}
function getAt(int, i) {
  return IntTuple.fst(int) + i;
}
var areEqual = IntTuple.areEqual;
function areIntersecting(a, b) {
  const sa = size(a), sb = size(b);
  if (sa === 0 && sb === 0)
    return true;
  return sa > 0 && sb > 0 && max(a) >= min(b) && min(a) <= max(b);
}
function isSubInterval(a, b) {
  if (!size(a))
    return size(b) === 0;
  if (!size(b))
    return true;
  return start(a) <= start(b) && end(a) >= end(b);
}
function findPredecessorIndex(int, v) {
  const s = start(int);
  if (v <= s)
    return 0;
  const e = end(int);
  if (v >= e)
    return e - s;
  return v - s;
}
function findPredecessorIndexInInterval(int, v, bounds) {
  const bS = start(bounds);
  const s = start(int);
  if (v <= bS + s)
    return bS;
  const bE = end(bounds);
  if (v >= bE + s)
    return bE;
  return v - s;
}
function findRange(int, min4, max4) {
  return ofBounds(findPredecessorIndex(int, min4), findPredecessorIndex(int, max4 + 1));
}
function intersect(a, b) {
  if (!areIntersecting(a, b))
    return Empty;
  return ofBounds(Math.max(start(a), start(b)), Math.min(end(a), end(b)));
}
function intersectionSize(a, b) {
  return size(findRange(a, min(b), max(b)));
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/interval.js
var Interval;
(function(Interval2) {
  Interval2.Empty = Empty;
  Interval2.ofSingleton = (v) => ofRange(v, v);
  Interval2.ofRange = ofRange;
  Interval2.ofBounds = ofBounds;
  Interval2.ofLength = ofLength;
  Interval2.is = is;
  Interval2.has = has;
  Interval2.indexOf = indexOf;
  Interval2.getAt = getAt;
  Interval2.start = start;
  Interval2.end = end;
  Interval2.min = min;
  Interval2.max = max;
  Interval2.size = size;
  Interval2.hashCode = hashCode;
  Interval2.toString = toString;
  Interval2.areEqual = areEqual;
  Interval2.areIntersecting = areIntersecting;
  Interval2.isSubInterval = isSubInterval;
  Interval2.findPredecessorIndex = findPredecessorIndex;
  Interval2.findPredecessorIndexInInterval = findPredecessorIndexInInterval;
  Interval2.findRange = findRange;
  Interval2.intersectionSize = intersectionSize;
  Interval2.intersect = intersect;
})(Interval || (Interval = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/impl/sorted-array.js
var Empty2 = [];
function ofSingleton(v) {
  return [v];
}
function ofSortedArray(xs) {
  return xs;
}
function ofUnsortedArray(xs) {
  sortArray(xs);
  return xs;
}
function ofRange2(min4, max4) {
  if (max4 < min4)
    return [];
  const ret = new Int32Array(max4 - min4 + 1);
  for (let i = min4; i <= max4; i++)
    ret[i - min4] = i;
  return ret;
}
function is2(xs) {
  return xs && (Array.isArray(xs) || !!xs.buffer);
}
function isRange(xs) {
  return xs[xs.length - 1] - xs[0] + 1 === xs.length;
}
function start2(xs) {
  return xs[0];
}
function end2(xs) {
  return xs[xs.length - 1] + 1;
}
function min2(xs) {
  return xs[0];
}
function max2(xs) {
  return xs[xs.length - 1];
}
function size2(xs) {
  return xs.length;
}
function hashCode2(xs) {
  const s = xs.length;
  if (!s)
    return 0;
  if (s > 2)
    return hash4(s, xs[0], xs[s - 1], xs[s >> 1]);
  return hash3(s, xs[0], xs[s - 1]);
}
function toString2(xs) {
  const s = xs.length;
  if (s > 5)
    return `[${xs[0]}, ${xs[1]}, ..., ${xs[s - 1]}], length ${s}`;
  return `[${xs.join(", ")}]`;
}
function indexOf2(xs, v) {
  const l = xs.length;
  return l === 0 ? -1 : xs[0] <= v && v <= xs[l - 1] ? binarySearchRange(xs, v, 0, l) : -1;
}
function indexOfInInterval(xs, v, bounds) {
  return indexOfInRange(xs, v, Interval.start(bounds), Interval.end(bounds));
}
function indexOfInRange(xs, v, s, e) {
  const l = xs.length;
  return l === 0 || e <= s ? -1 : xs[s] <= v && v <= xs[e - 1] ? binarySearchRange(xs, v, s, e) : -1;
}
function has2(xs, v) {
  return indexOf2(xs, v) >= 0;
}
function areEqual2(a, b) {
  if (a === b)
    return true;
  let aSize = a.length;
  if (aSize !== b.length || a[0] !== b[0] || a[aSize - 1] !== b[aSize - 1])
    return false;
  if (isRange(a))
    return true;
  aSize--;
  for (let i = 1; i < aSize; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
}
function findPredecessorIndex2(xs, query) {
  return binarySearchPredIndexRange(xs, query, 0, xs.length);
}
function findPredecessorIndexInInterval2(xs, query, bounds) {
  return binarySearchPredIndexRange(xs, query, Interval.start(bounds), Interval.end(bounds));
}
function findRange2(xs, min4, max4) {
  return Interval.ofBounds(findPredecessorIndex2(xs, min4), findPredecessorIndex2(xs, max4 + 1));
}
function binarySearchRange(xs, value, start4, end4) {
  let min4 = start4, max4 = end4 - 1;
  while (min4 <= max4) {
    if (min4 + 11 > max4) {
      for (let i = min4; i <= max4; i++) {
        if (value === xs[i])
          return i;
      }
      return -1;
    }
    const mid = min4 + max4 >> 1;
    const v = xs[mid];
    if (value < v)
      max4 = mid - 1;
    else if (value > v)
      min4 = mid + 1;
    else
      return mid;
  }
  return -1;
}
function binarySearchPredIndexRange(xs, query, start4, end4) {
  if (start4 === end4)
    return start4;
  if (xs[start4] >= query)
    return start4;
  if (xs[end4 - 1] < query)
    return end4;
  let min4 = start4, max4 = end4;
  while (max4 - min4 > 4) {
    const mid = min4 + max4 >> 1;
    if (xs[mid] >= query) {
      max4 = mid;
    } else {
      min4 = mid + 1;
    }
  }
  for (let i = min4; i < max4; i++) {
    if (xs[i] >= query) {
      return i;
    }
  }
  return max4;
}
function areIntersecting2(a, b) {
  if (a === b)
    return true;
  let { startI: i, startJ: j, endI, endJ } = getSuitableIntersectionRange(a, b);
  while (i < endI && j < endJ) {
    const x = a[i], y = b[j];
    if (x < y)
      i++;
    else if (x > y)
      j++;
    else
      return true;
  }
  return false;
}
function isSubset(a, b) {
  if (a === b)
    return true;
  const lenB = b.length;
  let { startI: i, startJ: j, endI, endJ } = getSuitableIntersectionRange(a, b);
  if (endJ - j < lenB || endI - i < lenB)
    return false;
  let equal = 0;
  while (i < endI && j < endJ) {
    const x = a[i], y = b[j];
    if (x < y) {
      i++;
    } else if (x > y) {
      j++;
    } else {
      i++;
      j++;
      equal++;
    }
  }
  return equal === lenB;
}
function union(a, b) {
  if (a === b)
    return a;
  const lenA = a.length, lenB = b.length;
  if (lenA === 0)
    return b;
  if (lenB === 0)
    return a;
  if (a[0] > b[0])
    return union(b, a);
  const { startI, startJ, endI, endJ } = getSuitableIntersectionRange(a, b);
  const commonCount = getCommonCount(a, b, startI, startJ, endI, endJ);
  if (commonCount === lenA && commonCount === lenB || commonCount === lenB)
    return a;
  if (commonCount === lenA)
    return b;
  const indices = new Int32Array(lenA + lenB - commonCount);
  let i = 0, j = 0, offset = 0;
  for (i = 0; i < startI; i++)
    indices[offset++] = a[i];
  while (j < endJ && a[startI] > b[j])
    indices[offset++] = b[j++];
  while (i < endI && j < endJ) {
    const x = a[i], y = b[j];
    if (x < y) {
      indices[offset++] = x;
      i++;
    } else if (x > y) {
      indices[offset++] = y;
      j++;
    } else {
      indices[offset++] = x;
      i++;
      j++;
    }
  }
  for (; i < endI; i++)
    indices[offset++] = a[i];
  for (; j < endJ; j++)
    indices[offset++] = b[j];
  for (; i < lenA; i++)
    indices[offset++] = a[i];
  for (; j < lenB; j++)
    indices[offset++] = b[j];
  return ofSortedArray(indices);
}
function intersectionSize2(a, b) {
  if (a === b)
    return size2(a);
  const { startI, startJ, endI, endJ } = getSuitableIntersectionRange(a, b);
  return getCommonCount(a, b, startI, startJ, endI, endJ);
}
function getCommonCount(a, b, startI, startJ, endI, endJ) {
  let i = startI, j = startJ;
  let commonCount = 0;
  while (i < endI && j < endJ) {
    const x = a[i], y = b[j];
    if (x < y) {
      i++;
    } else if (x > y) {
      j++;
    } else {
      i++;
      j++;
      commonCount++;
    }
  }
  return commonCount;
}
function intersect2(a, b) {
  if (a === b)
    return a;
  const { startI, startJ, endI, endJ } = getSuitableIntersectionRange(a, b);
  const commonCount = getCommonCount(a, b, startI, startJ, endI, endJ);
  const lenA = a.length, lenB = b.length;
  if (!commonCount)
    return Empty2;
  if (commonCount === lenA && commonCount === lenB || commonCount === lenB)
    return b;
  if (commonCount === lenA)
    return a;
  const indices = new Int32Array(commonCount);
  let offset = 0;
  let i = startI;
  let j = startJ;
  while (i < endI && j < endJ) {
    const x = a[i], y = b[j];
    if (x < y) {
      i++;
    } else if (x > y) {
      j++;
    } else {
      indices[offset++] = x;
      i++;
      j++;
    }
  }
  return ofSortedArray(indices);
}
function subtract(a, b) {
  if (a === b)
    return Empty2;
  const lenA = a.length;
  const { startI: sI, startJ: sJ, endI, endJ } = getSuitableIntersectionRange(a, b);
  let i = sI, j = sJ;
  let commonCount = 0;
  while (i < endI && j < endJ) {
    const x = a[i], y = b[j];
    if (x < y) {
      i++;
    } else if (x > y) {
      j++;
    } else {
      i++;
      j++;
      commonCount++;
    }
  }
  if (!commonCount)
    return a;
  if (commonCount >= lenA)
    return Empty2;
  const indices = new Int32Array(lenA - commonCount);
  let offset = 0;
  for (let k = 0; k < sI; k++)
    indices[offset++] = a[k];
  i = sI;
  j = sJ;
  while (i < endI && j < endJ) {
    const x = a[i], y = b[j];
    if (x < y) {
      indices[offset++] = x;
      i++;
    } else if (x > y) {
      j++;
    } else {
      i++;
      j++;
    }
  }
  for (; i < lenA; i++)
    indices[offset++] = a[i];
  return ofSortedArray(indices);
}
function deduplicate(xs) {
  if (xs.length < 2)
    return xs;
  let count2 = 1;
  for (let i = 0, _i = xs.length - 1; i < _i; i++) {
    if (xs[i] !== xs[i + 1])
      count2++;
  }
  if (count2 === xs.length)
    return xs;
  const ret = new Int32Array(count2);
  let o = 0;
  for (let i = 0, _i = xs.length - 1; i < _i; i++) {
    if (xs[i] !== xs[i + 1])
      ret[o++] = xs[i];
  }
  ret[o] = xs[xs.length - 1];
  return ret;
}
function indicesOf(a, b) {
  if (areEqual2(a, b))
    return ofSortedArray(createRangeArray(0, a.length - 1));
  const { startI: sI, startJ: sJ, endI, endJ } = getSuitableIntersectionRange(a, b);
  let i = sI, j = sJ;
  let commonCount = 0;
  while (i < endI && j < endJ) {
    const x = a[i], y = b[j];
    if (x < y) {
      i++;
    } else if (x > y) {
      j++;
    } else {
      i++;
      j++;
      commonCount++;
    }
  }
  const lenA = a.length;
  if (!commonCount)
    return Empty2;
  if (commonCount === lenA)
    return ofSortedArray(createRangeArray(0, a.length - 1));
  const indices = new Int32Array(commonCount);
  let offset = 0;
  i = sI;
  j = sJ;
  while (i < endI && j < endJ) {
    const x = a[i], y = b[j];
    if (x < y) {
      i++;
    } else if (x > y) {
      j++;
    } else {
      indices[offset++] = i;
      i++;
      j++;
    }
  }
  return ofSortedArray(indices);
}
var _maxIntRangeRet = { startI: 0, startJ: 0, endI: 0, endJ: 0 };
function getSuitableIntersectionRange(a, b) {
  const la = a.length, lb = b.length;
  const ratio = la / lb;
  if (la >= 128 || lb >= 128 || ratio <= 0.34 || ratio >= 2.99) {
    _maxIntRangeRet.startI = findPredecessorIndex2(a, start2(b));
    _maxIntRangeRet.startJ = findPredecessorIndex2(b, start2(a));
    _maxIntRangeRet.endI = findPredecessorIndex2(a, end2(b));
    _maxIntRangeRet.endJ = findPredecessorIndex2(b, end2(a));
  } else {
    _maxIntRangeRet.startI = 0;
    _maxIntRangeRet.startJ = 0;
    _maxIntRangeRet.endI = la;
    _maxIntRangeRet.endJ = lb;
  }
  return _maxIntRangeRet;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/sorted-array.js
var SortedArray;
(function(SortedArray2) {
  SortedArray2.Empty = Empty2;
  SortedArray2.ofUnsortedArray = ofUnsortedArray;
  SortedArray2.ofSingleton = ofSingleton;
  SortedArray2.ofSortedArray = ofSortedArray;
  SortedArray2.ofRange = ofRange2;
  SortedArray2.ofBounds = (min4, max4) => ofRange2(min4, max4 - 1);
  SortedArray2.is = is2;
  SortedArray2.isRange = isRange;
  SortedArray2.has = has2;
  SortedArray2.indexOf = indexOf2;
  SortedArray2.indexOfInInterval = indexOfInInterval;
  SortedArray2.indexOfInRange = indexOfInRange;
  SortedArray2.start = start2;
  SortedArray2.end = end2;
  SortedArray2.min = min2;
  SortedArray2.max = max2;
  SortedArray2.size = size2;
  SortedArray2.hashCode = hashCode2;
  SortedArray2.toString = toString2;
  SortedArray2.areEqual = areEqual2;
  SortedArray2.areIntersecting = areIntersecting2;
  SortedArray2.isSubset = isSubset;
  SortedArray2.union = union;
  SortedArray2.intersect = intersect2;
  SortedArray2.subtract = subtract;
  SortedArray2.findPredecessorIndex = findPredecessorIndex2;
  SortedArray2.findPredecessorIndexInInterval = findPredecessorIndexInInterval2;
  SortedArray2.findRange = findRange2;
  SortedArray2.intersectionSize = intersectionSize2;
  SortedArray2.deduplicate = deduplicate;
  SortedArray2.indicesOf = indicesOf;
})(SortedArray || (SortedArray = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/impl/ordered-set.js
var Empty3 = Interval.Empty;
var ofSingleton2 = Interval.ofSingleton;
var ofRange3 = Interval.ofRange;
var ofBounds2 = Interval.ofBounds;
function ofSortedArray2(xs) {
  if (!xs.length)
    return Empty3;
  if (SortedArray.isRange(xs))
    return Interval.ofRange(xs[0], xs[xs.length - 1]);
  return xs;
}
function size3(set) {
  return Interval.is(set) ? Interval.size(set) : SortedArray.size(set);
}
function has3(set, x) {
  return Interval.is(set) ? Interval.has(set, x) : SortedArray.has(set, x);
}
function indexOf3(set, x) {
  return Interval.is(set) ? Interval.indexOf(set, x) : SortedArray.indexOf(set, x);
}
function getAt2(set, i) {
  return Interval.is(set) ? Interval.getAt(set, i) : set[i];
}
function min3(set) {
  return Interval.is(set) ? Interval.min(set) : SortedArray.min(set);
}
function max3(set) {
  return Interval.is(set) ? Interval.max(set) : SortedArray.max(set);
}
function start3(set) {
  return Interval.is(set) ? Interval.start(set) : SortedArray.start(set);
}
function end3(set) {
  return Interval.is(set) ? Interval.end(set) : SortedArray.end(set);
}
function hashCode3(set) {
  return Interval.is(set) ? Interval.hashCode(set) : SortedArray.hashCode(set);
}
function toString3(set) {
  return Interval.is(set) ? Interval.toString(set) : SortedArray.toString(set);
}
function areEqual3(a, b) {
  if (Interval.is(a)) {
    if (Interval.is(b))
      return Interval.areEqual(a, b);
    return areEqualIS(a, b);
  } else if (Interval.is(b))
    return areEqualIS(b, a);
  return SortedArray.areEqual(a, b);
}
function areIntersecting3(a, b) {
  if (Interval.is(a)) {
    if (Interval.is(b))
      return Interval.areIntersecting(a, b);
    return areIntersectingSI(b, a);
  } else if (Interval.is(b))
    return areIntersectingSI(a, b);
  return SortedArray.areIntersecting(a, b);
}
function isSubset2(a, b) {
  if (Interval.is(a)) {
    if (Interval.is(b))
      return Interval.isSubInterval(a, b);
    return isSubsetIS(a, b);
  } else if (Interval.is(b))
    return isSubsetSI(a, b);
  return SortedArray.isSubset(a, b);
}
function findPredecessorIndex3(set, x) {
  return Interval.is(set) ? Interval.findPredecessorIndex(set, x) : SortedArray.findPredecessorIndex(set, x);
}
function findPredecessorIndexInInterval3(set, x, bounds) {
  return Interval.is(set) ? Interval.findPredecessorIndexInInterval(set, x, bounds) : SortedArray.findPredecessorIndexInInterval(set, x, bounds);
}
function findRange3(set, min4, max4) {
  return Interval.is(set) ? Interval.findRange(set, min4, max4) : SortedArray.findRange(set, min4, max4);
}
function intersectionSize3(a, b) {
  if (Interval.is(a)) {
    if (Interval.is(b))
      return Interval.intersectionSize(a, b);
    return intersectionSizeSI(b, a);
  } else if (Interval.is(b))
    return intersectionSizeSI(a, b);
  return SortedArray.intersectionSize(a, b);
}
function union2(a, b) {
  if (Interval.is(a)) {
    if (Interval.is(b))
      return unionII(a, b);
    return unionSI(b, a);
  } else if (Interval.is(b))
    return unionSI(a, b);
  return ofSortedArray2(SortedArray.union(a, b));
}
function intersect3(a, b) {
  if (Interval.is(a)) {
    if (Interval.is(b))
      return Interval.intersect(a, b);
    return intersectSI(b, a);
  } else if (Interval.is(b))
    return intersectSI(a, b);
  return ofSortedArray2(SortedArray.intersect(a, b));
}
function subtract2(a, b) {
  if (Interval.is(a)) {
    if (Interval.is(b))
      return subtractII(a, b);
    return subtractIS(a, b);
  } else if (Interval.is(b))
    return subtractSI(a, b);
  return ofSortedArray2(SortedArray.subtract(a, b));
}
function areEqualIS(a, b) {
  return Interval.size(a) === SortedArray.size(b) && Interval.start(a) === SortedArray.start(b) && Interval.end(a) === SortedArray.end(b);
}
function areIntersectingSI(a, b) {
  return a.length !== 0 && Interval.size(SortedArray.findRange(a, Interval.min(b), Interval.max(b))) !== 0;
}
function isSubsetSI(a, b) {
  const minB = Interval.min(b), maxB = Interval.max(b);
  if (maxB - minB + 1 === 0)
    return true;
  const minA = SortedArray.min(a), maxA = SortedArray.max(a);
  if (minB < minA || maxB > maxA)
    return false;
  const r = SortedArray.findRange(a, minB, maxB);
  return Interval.size(r) === Interval.size(b);
}
function isSubsetIS(a, b) {
  const minA = Interval.min(a), maxA = Interval.max(a);
  if (maxA - minA + 1 === 0)
    return false;
  const minB = SortedArray.min(b), maxB = SortedArray.max(b);
  return minB >= minA && maxB <= maxA;
}
function areRangesIntersecting(a, b) {
  const sa = size3(a), sb = size3(b);
  if (sa === 0 && sb === 0)
    return true;
  return sa > 0 && sb > 0 && max3(a) >= min3(b) && min3(a) <= max3(b);
}
function isRangeSubset(a, b) {
  if (!size3(a))
    return size3(b) === 0;
  if (!size3(b))
    return true;
  return min3(a) <= min3(b) && max3(a) >= max3(b);
}
function unionII(a, b) {
  if (Interval.areEqual(a, b))
    return a;
  const sizeA = Interval.size(a), sizeB = Interval.size(b);
  if (!sizeB)
    return a;
  if (!sizeA)
    return b;
  const minA = Interval.min(a), minB = Interval.min(b);
  if (areRangesIntersecting(a, b))
    return Interval.ofRange(Math.min(minA, minB), Math.max(Interval.max(a), Interval.max(b)));
  let lSize, lMin, rSize, rMin;
  if (minA < minB) {
    lSize = sizeA;
    lMin = minA;
    rSize = sizeB;
    rMin = minB;
  } else {
    lSize = sizeB;
    lMin = minB;
    rSize = sizeA;
    rMin = minA;
  }
  const arr = new Int32Array(sizeA + sizeB);
  for (let i = 0; i < lSize; i++)
    arr[i] = i + lMin;
  for (let i = 0; i < rSize; i++)
    arr[i + lSize] = i + rMin;
  return ofSortedArray2(arr);
}
function unionSI(a, b) {
  const bSize = Interval.size(b);
  if (!bSize)
    return a;
  if (isRangeSubset(b, a))
    return b;
  const min4 = Interval.min(b), max4 = Interval.max(b);
  const r = SortedArray.findRange(a, min4, max4);
  const start4 = Interval.start(r), end4 = Interval.end(r);
  const indices = new Int32Array(start4 + (a.length - end4) + bSize);
  let offset = 0;
  for (let i = 0; i < start4; i++)
    indices[offset++] = a[i];
  for (let i = min4; i <= max4; i++)
    indices[offset++] = i;
  for (let i = end4, _i = a.length; i < _i; i++)
    indices[offset++] = a[i];
  return ofSortedArray2(indices);
}
function intersectionSizeSI(a, b) {
  if (!Interval.size(b))
    return 0;
  const r = SortedArray.findRange(a, Interval.min(b), Interval.max(b));
  return Interval.end(r) - Interval.start(r);
}
function intersectSI(a, b) {
  if (!Interval.size(b))
    return Empty3;
  const r = SortedArray.findRange(a, Interval.min(b), Interval.max(b));
  const start4 = Interval.start(r), end4 = Interval.end(r);
  const resultSize = end4 - start4;
  if (!resultSize)
    return Empty3;
  if (resultSize === a.length)
    return a;
  const indices = new Int32Array(resultSize);
  let offset = 0;
  for (let i = start4; i < end4; i++) {
    indices[offset++] = a[i];
  }
  return ofSortedArray2(indices);
}
function subtractII(a, b) {
  if (Interval.areEqual(a, b))
    return Empty3;
  if (!Interval.areIntersecting(a, b))
    return a;
  const minA = Interval.min(a), maxA = Interval.max(a);
  const minB = Interval.min(b), maxB = Interval.max(b);
  if (maxA < minA || maxB < minB)
    return a;
  if (Interval.isSubInterval(b, a))
    return Empty3;
  if (Interval.isSubInterval(a, b)) {
    const l = minB - minA, r = maxA - maxB;
    if (l <= 0)
      return Interval.ofRange(maxB + 1, maxB + r);
    if (r <= 0)
      return Interval.ofRange(minA, minA + l - 1);
    const ret = new Int32Array(l + r);
    let offset = 0;
    for (let i = 0; i < l; i++)
      ret[offset++] = minA + i;
    for (let i = 1; i <= r; i++)
      ret[offset++] = maxB + i;
    return ofSortedArray2(ret);
  }
  if (minA < minB)
    return Interval.ofRange(minA, minB - 1);
  return Interval.ofRange(maxB + 1, maxA);
}
function subtractSI(a, b) {
  const min4 = Interval.min(b), max4 = Interval.max(b);
  if (max4 < min4)
    return a;
  const r = SortedArray.findRange(a, min4, max4);
  const start4 = Interval.start(r), end4 = Interval.end(r);
  const resultSize = a.length - (end4 - start4);
  if (resultSize <= 0)
    return Empty3;
  if (resultSize === a.length)
    return a;
  const ret = new Int32Array(resultSize);
  let offset = 0;
  for (let i = 0; i < start4; i++)
    ret[offset++] = a[i];
  for (let i = end4, _i = a.length; i < _i; i++)
    ret[offset++] = a[i];
  return ofSortedArray2(ret);
}
function subtractIS(a, b) {
  const min4 = Interval.min(a), max4 = Interval.max(a);
  if (max4 < min4)
    return a;
  const rSize = max4 - min4 + 1;
  const interval = SortedArray.findRange(b, min4, max4);
  const start4 = Interval.start(interval), end4 = Interval.end(interval);
  const commonCount = end4 - start4;
  if (commonCount === 0)
    return a;
  const resultSize = rSize - commonCount;
  if (resultSize <= 0)
    return Empty3;
  const ret = new Int32Array(resultSize);
  const li = b.length - 1;
  const fst = b[Math.min(start4, li)], last = b[Math.min(end4, li)];
  let offset = 0;
  for (let i = min4; i < fst; i++)
    ret[offset++] = i;
  for (let i = fst; i <= last; i++) {
    if (SortedArray.indexOfInInterval(b, i, interval) < 0)
      ret[offset++] = i;
  }
  for (let i = last + 1; i <= max4; i++)
    ret[offset++] = i;
  return ofSortedArray2(ret);
}
function forEach(set, f, ctx) {
  if (Interval.is(set)) {
    const start4 = Interval.min(set);
    for (let i = start4, _i = Interval.max(set); i <= _i; i++) {
      f(i, i - start4, ctx);
    }
  } else {
    for (let i = 0, _i = set.length; i < _i; i++) {
      f(set[i], i, ctx);
    }
  }
  return ctx;
}
function forEachSegment(set, segment, f, ctx) {
  if (Interval.is(set)) {
    let sI = 0;
    for (let i = Interval.min(set), _i = Interval.max(set); i <= _i; i++) {
      const s = segment(i);
      let endI = i + 1;
      while (endI < _i && segment(endI) === s)
        endI++;
      i = endI - 1;
      f(s, sI, ctx);
      sI++;
    }
  } else {
    let sI = 0;
    for (let i = 0, _i = set.length; i < _i; i++) {
      const s = segment(set[i]);
      let endI = i + 1;
      while (endI < _i && segment(set[endI]) === s)
        endI++;
      i = endI - 1;
      f(s, sI, ctx);
      sI++;
    }
  }
  return ctx;
}
function indexedIntersect(idxA, a, b) {
  if (a === b)
    return idxA;
  const lenI = size3(idxA), lenA = a.length, lenB = b.length;
  if (lenI === 0 || lenA === 0 || lenB === 0)
    return Empty3;
  const startJ = SortedArray.findPredecessorIndex(b, a[min3(idxA)]);
  const endJ = SortedArray.findPredecessorIndex(b, a[max3(idxA)] + 1);
  let commonCount = 0;
  let offset = 0;
  let O = 0;
  let j = startJ;
  while (O < lenI && j < endJ) {
    const x = a[getAt2(idxA, O)], y = b[j];
    if (x < y) {
      O++;
    } else if (x > y) {
      j++;
    } else {
      commonCount++;
      O++;
      j++;
    }
  }
  if (commonCount === 0)
    return Empty3;
  if (commonCount === lenA && commonCount === lenB)
    return idxA;
  const indices = new Int32Array(commonCount);
  offset = 0;
  O = 0;
  j = startJ;
  while (O < lenI && j < endJ) {
    const x = a[getAt2(idxA, O)], y = b[j];
    if (x < y) {
      O++;
    } else if (x > y) {
      j++;
    } else {
      indices[offset++] = j;
      O++;
      j++;
    }
  }
  return ofSortedArray2(indices);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/ordered-set.js
var OrderedSet;
(function(OrderedSet2) {
  OrderedSet2.Empty = Empty3;
  OrderedSet2.ofSingleton = ofSingleton2;
  OrderedSet2.ofRange = ofRange3;
  OrderedSet2.ofBounds = ofBounds2;
  OrderedSet2.ofSortedArray = ofSortedArray2;
  OrderedSet2.has = has3;
  OrderedSet2.indexOf = indexOf3;
  OrderedSet2.getAt = getAt2;
  OrderedSet2.min = min3;
  OrderedSet2.max = max3;
  OrderedSet2.start = start3;
  OrderedSet2.end = end3;
  OrderedSet2.size = size3;
  OrderedSet2.hashCode = hashCode3;
  OrderedSet2.areEqual = areEqual3;
  OrderedSet2.areIntersecting = areIntersecting3;
  OrderedSet2.isSubset = isSubset2;
  OrderedSet2.union = union2;
  OrderedSet2.intersect = intersect3;
  OrderedSet2.indexedIntersect = indexedIntersect;
  OrderedSet2.subtract = subtract2;
  OrderedSet2.findPredecessorIndex = findPredecessorIndex3;
  OrderedSet2.findPredecessorIndexInInterval = findPredecessorIndexInInterval3;
  OrderedSet2.findRange = findRange3;
  OrderedSet2.intersectionSize = intersectionSize3;
  function forEach2(set, f, ctx) {
    return forEach(set, f, ctx);
  }
  OrderedSet2.forEach = forEach2;
  function forEachSegment2(set, segment, f, ctx) {
    return forEachSegment(set, segment, f, ctx);
  }
  OrderedSet2.forEachSegment = forEachSegment2;
  function isInterval(set) {
    return Interval.is(set);
  }
  OrderedSet2.isInterval = isInterval;
  function isSortedArray(set) {
    return !Interval.is(set);
  }
  OrderedSet2.isSortedArray = isSortedArray;
  function toArray(set) {
    const array = [];
    OrderedSet2.forEach(set, (v) => array.push(v));
    return array;
  }
  OrderedSet2.toArray = toArray;
  function toString4(set) {
    return toString3(set);
  }
  OrderedSet2.toString = toString4;
})(OrderedSet || (OrderedSet = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/impl/segmentation.js
function create(values) {
  const offsets = SortedArray.ofSortedArray(values);
  const max4 = SortedArray.max(offsets);
  const index = new Int32Array(max4);
  for (let i = 0, _i = values.length - 1; i < _i; i++) {
    for (let j = values[i], _j = values[i + 1]; j < _j; j++) {
      index[j] = i;
    }
  }
  return { offsets, index, count: values.length - 1 };
}
function ofOffsets(offsets, bounds) {
  const s = Interval.start(bounds);
  const segments2 = new Int32Array(offsets.length + 1);
  for (let i = 0, _i = offsets.length; i < _i; i++) {
    segments2[i] = offsets[i] - s;
  }
  segments2[offsets.length] = Interval.end(bounds) - s;
  return create(segments2);
}
function count({ count: count2 }) {
  return count2;
}
function getSegment({ index }, value) {
  return index[value];
}
function projectValue({ offsets }, set, value) {
  const last = OrderedSet.max(offsets);
  const idx = value >= last ? -1 : OrderedSet.findPredecessorIndex(offsets, value - 1);
  return OrderedSet.findRange(set, OrderedSet.getAt(offsets, idx), OrderedSet.getAt(offsets, idx + 1) - 1);
}
var SegmentIterator = class {
  move() {
    while (this.hasNext) {
      if (this.updateValue()) {
        this.value.index = this.segmentMin++;
        this.hasNext = this.segmentMax >= this.segmentMin && Interval.size(this.setRange) > 0;
        break;
      } else {
        this.updateSegmentRange();
      }
    }
    return this.value;
  }
  updateValue() {
    const segmentEnd = this.segments[this.segmentMin + 1];
    const setEnd = OrderedSet.findPredecessorIndexInInterval(this.set, segmentEnd, this.setRange);
    this.value.start = Interval.start(this.setRange);
    this.value.end = setEnd;
    this.setRange = Interval.ofBounds(setEnd, Interval.end(this.setRange));
    return setEnd > this.value.start;
  }
  updateSegmentRange() {
    const sMin = Interval.min(this.setRange), sMax = Interval.max(this.setRange);
    if (sMax < sMin) {
      this.hasNext = false;
      return;
    }
    this.segmentMin = this.segmentMap[OrderedSet.getAt(this.set, sMin)];
    this.segmentMax = this.segmentMap[OrderedSet.getAt(this.set, sMax)];
    this.hasNext = this.segmentMax >= this.segmentMin;
  }
  setSegment(segment) {
    this.setRange = Interval.ofBounds(segment.start, segment.end);
    this.updateSegmentRange();
  }
  constructor(segments2, segmentMap, set, inputRange) {
    this.segments = segments2;
    this.segmentMap = segmentMap;
    this.set = set;
    this.segmentMin = 0;
    this.segmentMax = 0;
    this.setRange = Interval.Empty;
    this.value = { index: 0, start: 0, end: 0 };
    this.hasNext = false;
    this.setRange = inputRange;
    this.updateSegmentRange();
  }
};
function segments(segs, set, segment) {
  const int = typeof segment !== "undefined" ? Interval.ofBounds(segment.start, segment.end) : Interval.ofBounds(0, OrderedSet.size(set));
  return new SegmentIterator(segs.offsets, segs.index, set, int);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/segmentation.js
var Segmentation;
(function(Segmentation2) {
  Segmentation2.create = create;
  Segmentation2.ofOffsets = ofOffsets;
  Segmentation2.count = count;
  Segmentation2.getSegment = getSegment;
  Segmentation2.projectValue = projectValue;
  Segmentation2.transientSegments = segments;
})(Segmentation || (Segmentation = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/map.js
var IntMap;
(function(IntMap2) {
  IntMap2.Empty = /* @__PURE__ */ new Map();
  function keyArray(map) {
    return iterableToArray(map.keys());
  }
  IntMap2.keyArray = keyArray;
  function Mutable() {
    return /* @__PURE__ */ new Map();
  }
  IntMap2.Mutable = Mutable;
  function asImmutable(map) {
    return map;
  }
  IntMap2.asImmutable = asImmutable;
  function copy(map) {
    const ret = Mutable();
    const it = map.keys();
    while (true) {
      const { done, value } = it.next();
      if (done)
        break;
      ret.set(value, map.get(value));
    }
    return ret;
  }
  IntMap2.copy = copy;
  function addFrom(map, src) {
    const it = src.keys();
    while (true) {
      const { done, value } = it.next();
      if (done)
        break;
      map.set(value, src.get(value));
    }
    return map;
  }
  IntMap2.addFrom = addFrom;
})(IntMap || (IntMap = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/int/linked-index.js
function LinkedIndex(size4) {
  return new LinkedIndexImpl(size4);
}
var LinkedIndexImpl = class {
  remove(i) {
    const { prev, next } = this;
    const p = prev[i], n = next[i];
    if (p >= 0) {
      next[p] = n;
      prev[i] = -1;
    }
    if (n >= 0) {
      prev[n] = p;
      next[i] = -1;
    }
    if (i === this.head) {
      if (p < 0)
        this.head = n;
      else
        this.head = p;
    }
  }
  has(i) {
    return this.prev[i] >= 0 || this.next[i] >= 0 || this.head === i;
  }
  constructor(size4) {
    this.head = size4 > 0 ? 0 : -1;
    this.prev = new Int32Array(size4);
    this.next = new Int32Array(size4);
    for (let i = 0; i < size4; i++) {
      this.next[i] = i + 1;
      this.prev[i] = i - 1;
    }
    this.prev[0] = -1;
    this.next[size4 - 1] = -1;
  }
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-data/iterator.js
var ArrayIteratorImpl = class {
  move() {
    ++this.index;
    this.lastValue = this.xs[this.index];
    this.hasNext = this.index < this.length - 1;
    return this.lastValue;
  }
  constructor(xs) {
    this.xs = [];
    this.index = -1;
    this.length = 0;
    this.hasNext = false;
    this.length = xs.length;
    this.hasNext = xs.length > 0;
    this.xs = xs;
    this.index = -1;
    this.lastValue = xs.length > 0 ? xs[0] : void 0;
  }
};
var RangeIteratorImpl = class {
  move() {
    ++this.value;
    this.hasNext = this.value < this.max;
    return this.value;
  }
  constructor(min4, max4) {
    this.max = max4;
    this.value = 0;
    this.hasNext = false;
    this.value = min4 - 1;
    this.hasNext = max4 >= min4;
  }
};
var ValueIterator = class {
  move() {
    this.hasNext = false;
    return this.value;
  }
  constructor(value) {
    this.value = value;
    this.hasNext = true;
  }
};
var MapIteratorImpl = class {
  move() {
    const v = this.f(this.base.move());
    this.hasNext = this.base.hasNext;
    return v;
  }
  constructor(base, f) {
    this.base = base;
    this.f = f;
    this.hasNext = false;
    this.hasNext = base.hasNext;
  }
};
var FilterIteratorImpl = class {
  move() {
    const ret = this.next;
    this.hasNext = this.findNext();
    return ret;
  }
  findNext() {
    while (this.base.hasNext) {
      this.next = this.base.move();
      if (this.p(this.next))
        return true;
    }
    return false;
  }
  constructor(base, p) {
    this.base = base;
    this.p = p;
    this.hasNext = this.findNext();
  }
};
var Iterator;
(function(Iterator2) {
  Iterator2.Empty = new RangeIteratorImpl(0, -1);
  function Array2(xs) {
    return new ArrayIteratorImpl(xs);
  }
  Iterator2.Array = Array2;
  function Value(value) {
    return new ValueIterator(value);
  }
  Iterator2.Value = Value;
  function Range(min4, max4) {
    return new RangeIteratorImpl(min4, max4);
  }
  Iterator2.Range = Range;
  function map(base, f) {
    return new MapIteratorImpl(base, f);
  }
  Iterator2.map = map;
  function filter(base, p) {
    return new FilterIteratorImpl(base, p);
  }
  Iterator2.filter = filter;
  function forEach2(it, f, ctx) {
    while (it.hasNext) {
      const c = f(it.move(), ctx);
      if (c)
        return ctx;
    }
    return ctx;
  }
  Iterator2.forEach = forEach2;
})(Iterator || (Iterator = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/legend.js
function TableLegend(table) {
  return { kind: "table-legend", table };
}
function ScaleLegend(minLabel, maxLabel, colors) {
  return { kind: "scale-legend", minLabel, maxLabel, colors };
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/color/scale.js
var DefaultColorScaleProps = {
  domain: [0, 1],
  reverse: false,
  listOrName: "red-yellow-blue",
  minLabel: "",
  maxLabel: ""
};
var ColorScale;
(function(ColorScale2) {
  function create2(props) {
    return createColorScaleByType(props, "continuous");
  }
  ColorScale2.create = create2;
  function createDiscrete(props) {
    return createColorScaleByType(props, "discrete");
  }
  ColorScale2.createDiscrete = createDiscrete;
  function createColorScaleByType(props, type) {
    const { domain, reverse, listOrName } = { ...DefaultColorScaleProps, ...props };
    const list = typeof listOrName === "string" ? getColorListFromName(listOrName).list : listOrName;
    const colors = reverse ? list.slice().reverse() : list;
    let diff = 0, min4 = 0, max4 = 0;
    function setDomain(_min, _max) {
      min4 = _min;
      max4 = _max;
      diff = max4 - min4 || 1;
    }
    setDomain(domain[0], domain[1]);
    const minLabel = defaults(props.minLabel, min4.toString());
    const maxLabel = defaults(props.maxLabel, max4.toString());
    let color;
    const hasOffsets = colors.every((c) => Array.isArray(c));
    if (hasOffsets) {
      const sorted = [...colors];
      sorted.sort((a, b) => a[1] - b[1]);
      const src = sorted.map((c) => c[0]);
      const off = SortedArray.ofSortedArray(sorted.map((c) => c[1]));
      const max5 = src.length - 1;
      switch (type) {
        case "continuous":
          color = (value) => valueToColorWithOffsets(value, src, off, min4, max5, diff);
          break;
        case "discrete":
          color = (value) => valueToDiscreteColorWithOffsets(value, src, off, min4, max5, diff);
          break;
      }
    } else {
      switch (type) {
        case "continuous":
          color = (value) => valueToColor(value, colors, min4, max4, diff);
          break;
        case "discrete":
          color = (value) => valueToDiscreteColor(value, colors, min4, max4, diff);
          break;
      }
    }
    return {
      color,
      colorToArray: (value, array, offset) => {
        Color.toArray(color(value), array, offset);
      },
      normalizedColorToArray: (value, array, offset) => {
        Color.toArrayNormalized(color(value), array, offset);
      },
      setDomain,
      get legend() {
        return ScaleLegend(minLabel, maxLabel, colors);
      }
    };
  }
  function valueToColorWithOffsets(value, src, off, min4, max4, diff) {
    const t = clamp((value - min4) / diff, 0, 1);
    const i = SortedArray.findPredecessorIndex(off, t);
    if (i === 0) {
      return src[min4];
    } else if (i > max4) {
      return src[max4];
    }
    const o1 = off[i - 1], o2 = off[i];
    const t1 = clamp((t - o1) / (o2 - o1), 0, 1);
    return Color.interpolate(src[i - 1], src[i], t1);
  }
  function valueToColor(value, colors, min4, max4, diff) {
    const t = Math.min(colors.length - 1, Math.max(0, (value - min4) / diff * colors.length - 1));
    const tf = Math.floor(t);
    const c1 = colors[tf];
    const c2 = colors[Math.ceil(t)];
    return Color.interpolate(c1, c2, t - tf);
  }
  function valueToDiscreteColorWithOffsets(value, src, off, min4, max4, diff) {
    if (src.length === 0) {
      return Color.fromRgb(0, 0, 0);
    }
    const t = clamp((value - min4) / diff, 0, 1);
    const i = SortedArray.findPredecessorIndex(off, t);
    if (i === 0) {
      return src[min4];
    } else if (i > max4) {
      return src[max4];
    }
    return src[i];
  }
  function valueToDiscreteColor(value, colors, min4, max4, diff) {
    if (colors.length === 0) {
      return Color.fromRgb(0, 0, 0);
    }
    const intervalSize = diff / colors.length;
    if (value <= min4) {
      return colors[0];
    } else if (value >= max4) {
      return colors[colors.length - 1];
    }
    const i = Math.min(colors.length - 1, Math.floor((value - min4) / intervalSize));
    return colors[i];
  }
})(ColorScale || (ColorScale = {}));

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/mol-util/json.js
function canonicalJsonString(obj) {
  return JSON.stringify(obj, (key, value) => isPlainObject(value) ? sortObjectKeys(value) : value);
}
function onelinerJsonString(obj) {
  return JSON.stringify(obj, void 0, "	").replace(/,\n\t*/g, ", ").replace(/\n\t*/g, "");
}
function sortObjectKeys(obj) {
  const result = {};
  for (const key of Object.keys(obj).sort()) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}

export {
  BitFlags,
  StringBuilder,
  now,
  formatTimespan,
  UUID,
  idFactory,
  ValueBox,
  ValueCell,
  noop,
  round,
  arrayEqual,
  deepEqual,
  shallowEqual2 as shallowEqual,
  shallowEqualObjects,
  defaults,
  formatTime,
  halfPI,
  degToRad,
  radToDeg,
  isPowerOfTwo,
  absMax,
  arcLength,
  spiral2d,
  normalize,
  clamp,
  lerp,
  spline,
  smoothstep,
  Lab,
  Hcl,
  Color,
  ColorMap,
  getAdjustedColorMap,
  ColorSwatch,
  camelCaseToWords,
  upperCaseAny,
  capitalize,
  stringToWords,
  substringStartsWith,
  interpolate,
  stripTags,
  escapeRegExp,
  ColorLists,
  ColorListOptions,
  ColorListOptionsScale,
  ColorListOptionsSet,
  getColorListFromName,
  TableLegend,
  ChunkedArray,
  arraySwap,
  sortArray,
  sort,
  makeBuckets,
  EquivalenceClasses,
  hash1,
  hash2,
  hashString,
  cantorPairing,
  sortedCantorPairing,
  invertCantorPairing,
  hashFnv32a,
  column_helpers_exports,
  EPSILON,
  equalEps,
  Vec3,
  Mat4,
  Mat3,
  Vec2,
  Vec4,
  ObjectKeys,
  assertUnreachable,
  isPromiseLike,
  Quat,
  Tensor,
  parseIntSkipLeadingWhitespace,
  parseInt2 as parseInt,
  parseFloatSkipLeadingWhitespace,
  parseFloat,
  NumberTypes,
  getNumberType,
  Column,
  Table,
  Database,
  arrayFind,
  iterableToArray,
  createRangeArray,
  arrayPickIndices,
  IntTuple,
  Interval,
  SortedArray,
  OrderedSet,
  Segmentation,
  LinkedIndex,
  IntMap,
  Iterator,
  ColorScale,
  assignIfUndefined,
  shallowEqual as shallowEqual2,
  shallowMergeArray,
  deepClone,
  mapObjectMap,
  mapArrayToObject,
  objectForEach,
  pickObjectKeys,
  omitObjectKeys,
  isPlainObject,
  promiseAllObj,
  canonicalJsonString,
  onelinerJsonString
};
//# sourceMappingURL=chunk-TA3F3DCY.js.map
