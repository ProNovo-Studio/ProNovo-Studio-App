import {
  ColorNames
} from "./chunk-Y4JRF7OT.js";
import {
  Color,
  canonicalJsonString,
  deepClone,
  hashString,
  isPlainObject,
  mapObjectMap,
  omitObjectKeys,
  onelinerJsonString,
  pickObjectKeys
} from "./chunk-TA3F3DCY.js";

// ../node_modules/.pnpm/fp-ts@2.16.11/node_modules/fp-ts/es6/function.js
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
function identity(a) {
  return a;
}
function constant(a) {
  return function() {
    return a;
  };
}
var constTrue = constant(true);
var constFalse = constant(false);
var constNull = constant(null);
var constUndefined = constant(void 0);
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
  switch (arguments.length) {
    case 1:
      return ab;
    case 2:
      return function() {
        return bc(ab.apply(this, arguments));
      };
    case 3:
      return function() {
        return cd(bc(ab.apply(this, arguments)));
      };
    case 4:
      return function() {
        return de(cd(bc(ab.apply(this, arguments))));
      };
    case 5:
      return function() {
        return ef(de(cd(bc(ab.apply(this, arguments)))));
      };
    case 6:
      return function() {
        return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
      };
    case 7:
      return function() {
        return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
      };
    case 8:
      return function() {
        return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
      };
    case 9:
      return function() {
        return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
      };
  }
  return;
}
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
  switch (arguments.length) {
    case 1:
      return a;
    case 2:
      return ab(a);
    case 3:
      return bc(ab(a));
    case 4:
      return cd(bc(ab(a)));
    case 5:
      return de(cd(bc(ab(a))));
    case 6:
      return ef(de(cd(bc(ab(a)))));
    case 7:
      return fg(ef(de(cd(bc(ab(a))))));
    case 8:
      return gh(fg(ef(de(cd(bc(ab(a)))))));
    case 9:
      return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
    default: {
      var ret = arguments[0];
      for (var i = 1; i < arguments.length; i++) {
        ret = arguments[i](ret);
      }
      return ret;
    }
  }
}
var dual = function(arity, body) {
  var isDataFirst = typeof arity === "number" ? function(args) {
    return args.length >= arity;
  } : arity;
  return function() {
    var args = Array.from(arguments);
    if (isDataFirst(arguments)) {
      return body.apply(this, args);
    }
    return function(self) {
      return body.apply(void 0, __spreadArray([self], args, false));
    };
  };
};

// ../node_modules/.pnpm/fp-ts@2.16.11/node_modules/fp-ts/es6/internal.js
var isNone = function(fa) {
  return fa._tag === "None";
};
var isLeft = function(ma) {
  return ma._tag === "Left";
};
var left = function(e) {
  return { _tag: "Left", left: e };
};
var right = function(a) {
  return { _tag: "Right", right: a };
};
var isNonEmpty = function(as3) {
  return as3.length > 0;
};
var head = function(as3) {
  return as3[0];
};
var emptyReadonlyArray = [];
var emptyRecord = {};
var liftNullable = function(F) {
  return function(f, onNullable) {
    return function() {
      var a = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      var o = f.apply(void 0, a);
      return F.fromEither(o == null ? left(onNullable.apply(void 0, a)) : right(o));
    };
  };
};
var liftOption = function(F) {
  return function(f, onNone) {
    return function() {
      var a = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      var o = f.apply(void 0, a);
      return F.fromEither(isNone(o) ? left(onNone.apply(void 0, a)) : right(o.value));
    };
  };
};
var flatMapNullable = function(F, M) {
  return dual(3, function(self, f, onNullable) {
    return M.flatMap(self, liftNullable(F)(f, onNullable));
  });
};
var flatMapOption = function(F, M) {
  return dual(3, function(self, f, onNone) {
    return M.flatMap(self, liftOption(F)(f, onNone));
  });
};

// ../node_modules/.pnpm/fp-ts@2.16.11/node_modules/fp-ts/es6/Apply.js
function apFirst(A) {
  return function(second) {
    return function(first) {
      return A.ap(A.map(first, function(a) {
        return function() {
          return a;
        };
      }), second);
    };
  };
}
function apSecond(A) {
  return function(second) {
    return function(first) {
      return A.ap(A.map(first, function() {
        return function(b) {
          return b;
        };
      }), second);
    };
  };
}
function apS(F) {
  return function(name, fb) {
    return function(fa) {
      return F.ap(F.map(fa, function(a) {
        return function(b) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
        };
      }), fb);
    };
  };
}
function getApplySemigroup(F) {
  return function(S) {
    return {
      concat: function(first, second) {
        return F.ap(F.map(first, function(x) {
          return function(y) {
            return S.concat(x, y);
          };
        }), second);
      }
    };
  };
}

// ../node_modules/.pnpm/fp-ts@2.16.11/node_modules/fp-ts/es6/Functor.js
function flap(F) {
  return function(a) {
    return function(fab) {
      return F.map(fab, function(f) {
        return f(a);
      });
    };
  };
}
function bindTo(F) {
  return function(name) {
    return function(fa) {
      return F.map(fa, function(a) {
        var _a;
        return _a = {}, _a[name] = a, _a;
      });
    };
  };
}
function let_(F) {
  return function(name, f) {
    return function(fa) {
      return F.map(fa, function(a) {
        var _a;
        return Object.assign({}, a, (_a = {}, _a[name] = f(a), _a));
      });
    };
  };
}
function as(F) {
  return function(self, b) {
    return F.map(self, function() {
      return b;
    });
  };
}
function asUnit(F) {
  var asM = as(F);
  return function(self) {
    return asM(self, void 0);
  };
}

// ../node_modules/.pnpm/fp-ts@2.16.11/node_modules/fp-ts/es6/Applicative.js
function getApplicativeMonoid(F) {
  var f = getApplySemigroup(F);
  return function(M) {
    return {
      concat: f(M).concat,
      empty: F.of(M.empty)
    };
  };
}

// ../node_modules/.pnpm/fp-ts@2.16.11/node_modules/fp-ts/es6/Chain.js
function tap(M) {
  return function(first, f) {
    return M.chain(first, function(a) {
      return M.map(f(a), function() {
        return a;
      });
    });
  };
}
function bind(M) {
  return function(name, f) {
    return function(ma) {
      return M.chain(ma, function(a) {
        return M.map(f(a), function(b) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
        });
      });
    };
  };
}

// ../node_modules/.pnpm/fp-ts@2.16.11/node_modules/fp-ts/es6/FromEither.js
function fromOption(F) {
  return function(onNone) {
    return function(ma) {
      return F.fromEither(isNone(ma) ? left(onNone()) : right(ma.value));
    };
  };
}
function fromPredicate(F) {
  return function(predicate, onFalse) {
    return function(a) {
      return F.fromEither(predicate(a) ? right(a) : left(onFalse(a)));
    };
  };
}
function fromOptionK(F) {
  var fromOptionF = fromOption(F);
  return function(onNone) {
    var from = fromOptionF(onNone);
    return function(f) {
      return flow(f, from);
    };
  };
}
function chainOptionK(F, M) {
  var fromOptionKF = fromOptionK(F);
  return function(onNone) {
    var from = fromOptionKF(onNone);
    return function(f) {
      return function(ma) {
        return M.chain(ma, from(f));
      };
    };
  };
}
function filterOrElse(F, M) {
  return function(predicate, onFalse) {
    return function(ma) {
      return M.chain(ma, function(a) {
        return F.fromEither(predicate(a) ? right(a) : left(onFalse(a)));
      });
    };
  };
}

// ../node_modules/.pnpm/fp-ts@2.16.11/node_modules/fp-ts/es6/Separated.js
var separated = function(left4, right4) {
  return { left: left4, right: right4 };
};
var _map = function(fa, f) {
  return pipe(fa, map(f));
};
var map = function(f) {
  return function(fa) {
    return separated(left2(fa), f(right2(fa)));
  };
};
var URI = "Separated";
var Functor = {
  URI,
  map: _map
};
var flap2 = flap(Functor);
var left2 = function(s) {
  return s.left;
};
var right2 = function(s) {
  return s.right;
};

// ../node_modules/.pnpm/fp-ts@2.16.11/node_modules/fp-ts/es6/Either.js
var left3 = left;
var right3 = right;
var flatMap = dual(2, function(ma, f) {
  return isLeft2(ma) ? ma : f(ma.right);
});
var _map2 = function(fa, f) {
  return pipe(fa, map2(f));
};
var _ap = function(fab, fa) {
  return pipe(fab, ap2(fa));
};
var URI2 = "Either";
var map2 = function(f) {
  return function(fa) {
    return isLeft2(fa) ? fa : right3(f(fa.right));
  };
};
var Functor2 = {
  URI: URI2,
  map: _map2
};
var as2 = dual(2, as(Functor2));
var asUnit2 = asUnit(Functor2);
var of = right3;
var apW = function(fa) {
  return function(fab) {
    return isLeft2(fab) ? fab : isLeft2(fa) ? fa : right3(fab.right(fa.right));
  };
};
var ap2 = apW;
var Apply = {
  URI: URI2,
  map: _map2,
  ap: _ap
};
var Applicative = {
  URI: URI2,
  map: _map2,
  ap: _ap,
  of
};
var Chain = {
  URI: URI2,
  map: _map2,
  ap: _ap,
  chain: flatMap
};
var extend = function(f) {
  return function(wa) {
    return isLeft2(wa) ? wa : right3(f(wa));
  };
};
var FromEither = {
  URI: URI2,
  fromEither: identity
};
var fromPredicate2 = fromPredicate(FromEither);
var fromOption2 = fromOption(FromEither);
var isLeft2 = isLeft;
var matchW = function(onLeft, onRight) {
  return function(ma) {
    return isLeft2(ma) ? onLeft(ma.left) : onRight(ma.right);
  };
};
var foldW = matchW;
var match = matchW;
var fold = match;
var flap3 = flap(Functor2);
var apFirst2 = apFirst(Apply);
var apSecond2 = apSecond(Apply);
var tap2 = dual(2, tap(Chain));
var flattenW = flatMap(identity);
var duplicate = extend(identity);
var fromOptionK2 = fromOptionK(FromEither);
var chainOptionK2 = chainOptionK(FromEither, Chain);
var _FromEither = {
  fromEither: FromEither.fromEither
};
var liftNullable2 = liftNullable(_FromEither);
var liftOption2 = liftOption(_FromEither);
var _FlatMap = {
  flatMap
};
var flatMapNullable2 = flatMapNullable(_FromEither, _FlatMap);
var flatMapOption2 = flatMapOption(_FromEither, _FlatMap);
var filterOrElse2 = filterOrElse(FromEither, Chain);
var toUnion = foldW(identity, identity);
var Do = of(emptyRecord);
var bindTo2 = bindTo(Functor2);
var let_2 = let_(Functor2);
var bind2 = bind(Chain);
var apS2 = apS(Apply);
var ApT = of(emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
  return function(as3) {
    var e = f(0, head(as3));
    if (isLeft2(e)) {
      return e;
    }
    var out = [e.right];
    for (var i = 1; i < as3.length; i++) {
      var e_1 = f(i, as3[i]);
      if (isLeft2(e_1)) {
        return e_1;
      }
      out.push(e_1.right);
    }
    return right3(out);
  };
};
var traverseReadonlyArrayWithIndex = function(f) {
  var g = traverseReadonlyNonEmptyArrayWithIndex(f);
  return function(as3) {
    return isNonEmpty(as3) ? g(as3) : ApT;
  };
};
var traverseArray = function(f) {
  return traverseReadonlyArrayWithIndex(function(_, a) {
    return f(a);
  });
};
var sequenceArray = traverseArray(identity);
var getApplySemigroup2 = getApplySemigroup(Apply);
var getApplyMonoid = getApplicativeMonoid(Applicative);

// ../node_modules/.pnpm/io-ts@2.2.22_fp-ts@2.16.11/node_modules/io-ts/es6/index.js
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var failures = left3;
var failure = function(value, context, message) {
  return failures([{ value, context, message }]);
};
var success = right3;
var Type = (
  /** @class */
  function() {
    function Type2(name, is, validate, encode) {
      this.name = name;
      this.is = is;
      this.validate = validate;
      this.encode = encode;
      this.decode = this.decode.bind(this);
    }
    Type2.prototype.pipe = function(ab, name) {
      var _this = this;
      if (name === void 0) {
        name = "pipe(".concat(this.name, ", ").concat(ab.name, ")");
      }
      return new Type2(name, ab.is, function(i, c) {
        var e = _this.validate(i, c);
        if (isLeft2(e)) {
          return e;
        }
        return ab.validate(e.right, c);
      }, this.encode === identity2 && ab.encode === identity2 ? identity2 : function(b) {
        return _this.encode(ab.encode(b));
      });
    };
    Type2.prototype.asDecoder = function() {
      return this;
    };
    Type2.prototype.asEncoder = function() {
      return this;
    };
    Type2.prototype.decode = function(i) {
      return this.validate(i, [{ key: "", type: this, actual: i }]);
    };
    return Type2;
  }()
);
var identity2 = function(a) {
  return a;
};
function getFunctionName(f) {
  return f.displayName || f.name || "<function".concat(f.length, ">");
}
function appendContext(c, key, decoder, actual) {
  var len = c.length;
  var r = Array(len + 1);
  for (var i = 0; i < len; i++) {
    r[i] = c[i];
  }
  r[len] = { key, type: decoder, actual };
  return r;
}
function pushAll(xs, ys) {
  var l = ys.length;
  for (var i = 0; i < l; i++) {
    xs.push(ys[i]);
  }
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function getNameFromProps(props) {
  return Object.keys(props).map(function(k) {
    return "".concat(k, ": ").concat(props[k].name);
  }).join(", ");
}
function useIdentity(codecs) {
  for (var i = 0; i < codecs.length; i++) {
    if (codecs[i].encode !== identity2) {
      return false;
    }
  }
  return true;
}
function getInterfaceTypeName(props) {
  return "{ ".concat(getNameFromProps(props), " }");
}
function getPartialTypeName(inner) {
  return "Partial<".concat(inner, ">");
}
function enumerableRecord(keys, domain, codomain, name) {
  if (name === void 0) {
    name = "{ [K in ".concat(domain.name, "]: ").concat(codomain.name, " }");
  }
  var len = keys.length;
  var props = {};
  for (var i = 0; i < len; i++) {
    props[keys[i]] = codomain;
  }
  var exactCodec = strict(props, name);
  return new DictionaryType(name, function(u) {
    return exactCodec.is(u);
  }, exactCodec.validate, exactCodec.encode, domain, codomain);
}
function getDomainKeys(domain) {
  var _a;
  if (isLiteralC(domain)) {
    var literal_1 = domain.value;
    if (string.is(literal_1)) {
      return _a = {}, _a[literal_1] = null, _a;
    }
  } else if (isKeyofC(domain)) {
    return domain.keys;
  } else if (isUnionC(domain)) {
    var keys = domain.types.map(function(type2) {
      return getDomainKeys(type2);
    });
    return keys.some(undefinedType.is) ? void 0 : Object.assign.apply(Object, __spreadArray2([{}], keys, false));
  }
  return void 0;
}
function stripNonDomainKeys(o, domain) {
  var keys = Object.keys(o);
  var len = keys.length;
  var shouldStrip = false;
  var r = {};
  for (var i = 0; i < len; i++) {
    var k = keys[i];
    if (domain.is(k)) {
      r[k] = o[k];
    } else {
      shouldStrip = true;
    }
  }
  return shouldStrip ? r : o;
}
function nonEnumerableRecord(domain, codomain, name) {
  if (name === void 0) {
    name = "{ [K in ".concat(domain.name, "]: ").concat(codomain.name, " }");
  }
  return new DictionaryType(name, function(u) {
    if (UnknownRecord.is(u)) {
      return Object.keys(u).every(function(k) {
        return !domain.is(k) || codomain.is(u[k]);
      });
    }
    return isAnyC(codomain) && Array.isArray(u);
  }, function(u, c) {
    if (UnknownRecord.is(u)) {
      var a = {};
      var errors = [];
      var keys = Object.keys(u);
      var len = keys.length;
      var changed = false;
      for (var i = 0; i < len; i++) {
        var k = keys[i];
        var ok = u[k];
        var domainResult = domain.validate(k, appendContext(c, k, domain, k));
        if (isLeft2(domainResult)) {
          changed = true;
        } else {
          var vk = domainResult.right;
          changed = changed || vk !== k;
          k = vk;
          var codomainResult = codomain.validate(ok, appendContext(c, k, codomain, ok));
          if (isLeft2(codomainResult)) {
            pushAll(errors, codomainResult.left);
          } else {
            var vok = codomainResult.right;
            changed = changed || vok !== ok;
            a[k] = vok;
          }
        }
      }
      return errors.length > 0 ? failures(errors) : success(changed ? a : u);
    }
    if (isAnyC(codomain) && Array.isArray(u)) {
      return success(u);
    }
    return failure(u, c);
  }, domain.encode === identity2 && codomain.encode === identity2 ? function(a) {
    return stripNonDomainKeys(a, domain);
  } : function(a) {
    var s = {};
    var keys = Object.keys(stripNonDomainKeys(a, domain));
    var len = keys.length;
    for (var i = 0; i < len; i++) {
      var k = keys[i];
      s[String(domain.encode(k))] = codomain.encode(a[k]);
    }
    return s;
  }, domain, codomain);
}
function getUnionName(codecs) {
  return "(" + codecs.map(function(type2) {
    return type2.name;
  }).join(" | ") + ")";
}
function getProps(codec) {
  switch (codec._tag) {
    case "RefinementType":
    case "ReadonlyType":
      return getProps(codec.type);
    case "InterfaceType":
    case "StrictType":
    case "PartialType":
      return codec.props;
    case "IntersectionType":
      return codec.types.reduce(function(props, type2) {
        return Object.assign(props, getProps(type2));
      }, {});
  }
}
function stripKeys(o, props) {
  var keys = Object.getOwnPropertyNames(o);
  var shouldStrip = false;
  var r = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwnProperty.call(props, key)) {
      shouldStrip = true;
    } else {
      r[key] = o[key];
    }
  }
  return shouldStrip ? r : o;
}
function getExactTypeName(codec) {
  if (isTypeC(codec)) {
    return "{| ".concat(getNameFromProps(codec.props), " |}");
  } else if (isPartialC(codec)) {
    return getPartialTypeName("{| ".concat(getNameFromProps(codec.props), " |}"));
  }
  return "Exact<".concat(codec.name, ">");
}
function isNonEmpty2(as3) {
  return as3.length > 0;
}
var emptyTags = {};
function intersect(a, b) {
  var r = [];
  for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
    var v = a_1[_i];
    if (b.indexOf(v) !== -1) {
      r.push(v);
    }
  }
  return r;
}
function mergeTags(a, b) {
  if (a === emptyTags) {
    return b;
  }
  if (b === emptyTags) {
    return a;
  }
  var r = Object.assign({}, a);
  for (var k in b) {
    if (hasOwnProperty.call(a, k)) {
      var intersection_1 = intersect(a[k], b[k]);
      if (isNonEmpty2(intersection_1)) {
        r[k] = intersection_1;
      } else {
        r = emptyTags;
        break;
      }
    } else {
      r[k] = b[k];
    }
  }
  return r;
}
function intersectTags(a, b) {
  if (a === emptyTags || b === emptyTags) {
    return emptyTags;
  }
  var r = emptyTags;
  for (var k in a) {
    if (hasOwnProperty.call(b, k)) {
      var intersection_2 = intersect(a[k], b[k]);
      if (intersection_2.length === 0) {
        if (r === emptyTags) {
          r = {};
        }
        r[k] = a[k].concat(b[k]);
      }
    }
  }
  return r;
}
function isAnyC(codec) {
  return codec._tag === "AnyType";
}
function isLiteralC(codec) {
  return codec._tag === "LiteralType";
}
function isKeyofC(codec) {
  return codec._tag === "KeyofType";
}
function isTypeC(codec) {
  return codec._tag === "InterfaceType";
}
function isPartialC(codec) {
  return codec._tag === "PartialType";
}
function isStrictC(codec) {
  return codec._tag === "StrictType";
}
function isExactC(codec) {
  return codec._tag === "ExactType";
}
function isRefinementC(codec) {
  return codec._tag === "RefinementType";
}
function isIntersectionC(codec) {
  return codec._tag === "IntersectionType";
}
function isUnionC(codec) {
  return codec._tag === "UnionType";
}
function isRecursiveC(codec) {
  return codec._tag === "RecursiveType";
}
function isReadonlyC(codec) {
  return codec._tag === "ReadonlyType";
}
var lazyCodecs = [];
function getTags(codec) {
  if (lazyCodecs.indexOf(codec) !== -1) {
    return emptyTags;
  }
  if (isTypeC(codec) || isStrictC(codec)) {
    var index = emptyTags;
    for (var k in codec.props) {
      var prop = codec.props[k];
      if (isLiteralC(prop)) {
        if (index === emptyTags) {
          index = {};
        }
        index[k] = [prop.value];
      }
    }
    return index;
  } else if (isExactC(codec) || isRefinementC(codec) || isReadonlyC(codec)) {
    return getTags(codec.type);
  } else if (isIntersectionC(codec)) {
    return codec.types.reduce(function(tags2, codec2) {
      return mergeTags(tags2, getTags(codec2));
    }, emptyTags);
  } else if (isUnionC(codec)) {
    return codec.types.slice(1).reduce(function(tags2, codec2) {
      return intersectTags(tags2, getTags(codec2));
    }, getTags(codec.types[0]));
  } else if (isRecursiveC(codec)) {
    lazyCodecs.push(codec);
    var tags = getTags(codec.type);
    lazyCodecs.pop();
    return tags;
  }
  return emptyTags;
}
function getIndex(codecs) {
  var tags = getTags(codecs[0]);
  var keys = Object.keys(tags);
  var len = codecs.length;
  var _loop_1 = function(k2) {
    var all = tags[k2].slice();
    var index = [tags[k2]];
    for (var i = 1; i < len; i++) {
      var codec = codecs[i];
      var ctags = getTags(codec);
      var values = ctags[k2];
      if (values === void 0) {
        return "continue-keys";
      } else {
        if (values.some(function(v) {
          return all.indexOf(v) !== -1;
        })) {
          return "continue-keys";
        } else {
          all.push.apply(all, values);
          index.push(values);
        }
      }
    }
    return { value: [k2, index] };
  };
  keys: for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
    var k = keys_1[_i];
    var state_1 = _loop_1(k);
    if (typeof state_1 === "object")
      return state_1.value;
    switch (state_1) {
      case "continue-keys":
        continue keys;
    }
  }
  return void 0;
}
var NullType = (
  /** @class */
  function(_super) {
    __extends(NullType2, _super);
    function NullType2() {
      var _this = _super.call(this, "null", function(u) {
        return u === null;
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "NullType";
      return _this;
    }
    return NullType2;
  }(Type)
);
var nullType = new NullType();
var UndefinedType = (
  /** @class */
  function(_super) {
    __extends(UndefinedType2, _super);
    function UndefinedType2() {
      var _this = _super.call(this, "undefined", function(u) {
        return u === void 0;
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "UndefinedType";
      return _this;
    }
    return UndefinedType2;
  }(Type)
);
var undefinedType = new UndefinedType();
var VoidType = (
  /** @class */
  function(_super) {
    __extends(VoidType2, _super);
    function VoidType2() {
      var _this = _super.call(this, "void", undefinedType.is, undefinedType.validate, identity2) || this;
      _this._tag = "VoidType";
      return _this;
    }
    return VoidType2;
  }(Type)
);
var voidType = new VoidType();
var UnknownType = (
  /** @class */
  function(_super) {
    __extends(UnknownType2, _super);
    function UnknownType2() {
      var _this = _super.call(this, "unknown", function(_) {
        return true;
      }, success, identity2) || this;
      _this._tag = "UnknownType";
      return _this;
    }
    return UnknownType2;
  }(Type)
);
var unknown = new UnknownType();
var StringType = (
  /** @class */
  function(_super) {
    __extends(StringType2, _super);
    function StringType2() {
      var _this = _super.call(this, "string", function(u) {
        return typeof u === "string";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "StringType";
      return _this;
    }
    return StringType2;
  }(Type)
);
var string = new StringType();
var NumberType = (
  /** @class */
  function(_super) {
    __extends(NumberType2, _super);
    function NumberType2() {
      var _this = _super.call(this, "number", function(u) {
        return typeof u === "number";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "NumberType";
      return _this;
    }
    return NumberType2;
  }(Type)
);
var number = new NumberType();
var BigIntType = (
  /** @class */
  function(_super) {
    __extends(BigIntType2, _super);
    function BigIntType2() {
      var _this = _super.call(
        this,
        "bigint",
        // tslint:disable-next-line: valid-typeof
        function(u) {
          return typeof u === "bigint";
        },
        function(u, c) {
          return _this.is(u) ? success(u) : failure(u, c);
        },
        identity2
      ) || this;
      _this._tag = "BigIntType";
      return _this;
    }
    return BigIntType2;
  }(Type)
);
var bigint = new BigIntType();
var BooleanType = (
  /** @class */
  function(_super) {
    __extends(BooleanType2, _super);
    function BooleanType2() {
      var _this = _super.call(this, "boolean", function(u) {
        return typeof u === "boolean";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "BooleanType";
      return _this;
    }
    return BooleanType2;
  }(Type)
);
var boolean = new BooleanType();
var AnyArrayType = (
  /** @class */
  function(_super) {
    __extends(AnyArrayType2, _super);
    function AnyArrayType2() {
      var _this = _super.call(this, "UnknownArray", Array.isArray, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "AnyArrayType";
      return _this;
    }
    return AnyArrayType2;
  }(Type)
);
var UnknownArray = new AnyArrayType();
var AnyDictionaryType = (
  /** @class */
  function(_super) {
    __extends(AnyDictionaryType2, _super);
    function AnyDictionaryType2() {
      var _this = _super.call(this, "UnknownRecord", function(u) {
        return u !== null && typeof u === "object" && !Array.isArray(u);
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "AnyDictionaryType";
      return _this;
    }
    return AnyDictionaryType2;
  }(Type)
);
var UnknownRecord = new AnyDictionaryType();
var LiteralType = (
  /** @class */
  function(_super) {
    __extends(LiteralType2, _super);
    function LiteralType2(name, is, validate, encode, value) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.value = value;
      _this._tag = "LiteralType";
      return _this;
    }
    return LiteralType2;
  }(Type)
);
var KeyofType = (
  /** @class */
  function(_super) {
    __extends(KeyofType2, _super);
    function KeyofType2(name, is, validate, encode, keys) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.keys = keys;
      _this._tag = "KeyofType";
      return _this;
    }
    return KeyofType2;
  }(Type)
);
var RefinementType = (
  /** @class */
  function(_super) {
    __extends(RefinementType2, _super);
    function RefinementType2(name, is, validate, encode, type2, predicate) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.type = type2;
      _this.predicate = predicate;
      _this._tag = "RefinementType";
      return _this;
    }
    return RefinementType2;
  }(Type)
);
function brand(codec, predicate, name) {
  return refinement(codec, predicate, name);
}
var Int = brand(number, function(n) {
  return Number.isInteger(n);
}, "Int");
var RecursiveType = (
  /** @class */
  function(_super) {
    __extends(RecursiveType2, _super);
    function RecursiveType2(name, is, validate, encode, runDefinition) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.runDefinition = runDefinition;
      _this._tag = "RecursiveType";
      return _this;
    }
    return RecursiveType2;
  }(Type)
);
Object.defineProperty(RecursiveType.prototype, "type", {
  get: function() {
    return this.runDefinition();
  },
  enumerable: true,
  configurable: true
});
var ArrayType = (
  /** @class */
  function(_super) {
    __extends(ArrayType2, _super);
    function ArrayType2(name, is, validate, encode, type2) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.type = type2;
      _this._tag = "ArrayType";
      return _this;
    }
    return ArrayType2;
  }(Type)
);
function array(item, name) {
  if (name === void 0) {
    name = "Array<".concat(item.name, ">");
  }
  return new ArrayType(name, function(u) {
    return UnknownArray.is(u) && u.every(item.is);
  }, function(u, c) {
    var e = UnknownArray.validate(u, c);
    if (isLeft2(e)) {
      return e;
    }
    var us = e.right;
    var len = us.length;
    var as3 = us;
    var errors = [];
    for (var i = 0; i < len; i++) {
      var ui = us[i];
      var result = item.validate(ui, appendContext(c, String(i), item, ui));
      if (isLeft2(result)) {
        pushAll(errors, result.left);
      } else {
        var ai = result.right;
        if (ai !== ui) {
          if (as3 === us) {
            as3 = us.slice();
          }
          as3[i] = ai;
        }
      }
    }
    return errors.length > 0 ? failures(errors) : success(as3);
  }, item.encode === identity2 ? identity2 : function(a) {
    return a.map(item.encode);
  }, item);
}
var InterfaceType = (
  /** @class */
  function(_super) {
    __extends(InterfaceType2, _super);
    function InterfaceType2(name, is, validate, encode, props) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.props = props;
      _this._tag = "InterfaceType";
      return _this;
    }
    return InterfaceType2;
  }(Type)
);
function type(props, name) {
  if (name === void 0) {
    name = getInterfaceTypeName(props);
  }
  var keys = Object.keys(props);
  var types = keys.map(function(key) {
    return props[key];
  });
  var len = keys.length;
  return new InterfaceType(name, function(u) {
    if (UnknownRecord.is(u)) {
      for (var i = 0; i < len; i++) {
        var k = keys[i];
        var uk = u[k];
        if (uk === void 0 && !hasOwnProperty.call(u, k) || !types[i].is(uk)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }, function(u, c) {
    var e = UnknownRecord.validate(u, c);
    if (isLeft2(e)) {
      return e;
    }
    var o = e.right;
    var a = o;
    var errors = [];
    for (var i = 0; i < len; i++) {
      var k = keys[i];
      var ak = a[k];
      var type_1 = types[i];
      var result = type_1.validate(ak, appendContext(c, k, type_1, ak));
      if (isLeft2(result)) {
        pushAll(errors, result.left);
      } else {
        var vak = result.right;
        if (vak !== ak || vak === void 0 && !hasOwnProperty.call(a, k)) {
          if (a === o) {
            a = __assign({}, o);
          }
          a[k] = vak;
        }
      }
    }
    return errors.length > 0 ? failures(errors) : success(a);
  }, useIdentity(types) ? identity2 : function(a) {
    var s = __assign({}, a);
    for (var i = 0; i < len; i++) {
      var k = keys[i];
      var encode = types[i].encode;
      if (encode !== identity2) {
        s[k] = encode(a[k]);
      }
    }
    return s;
  }, props);
}
var PartialType = (
  /** @class */
  function(_super) {
    __extends(PartialType2, _super);
    function PartialType2(name, is, validate, encode, props) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.props = props;
      _this._tag = "PartialType";
      return _this;
    }
    return PartialType2;
  }(Type)
);
function partial(props, name) {
  if (name === void 0) {
    name = getPartialTypeName(getInterfaceTypeName(props));
  }
  var keys = Object.keys(props);
  var types = keys.map(function(key) {
    return props[key];
  });
  var len = keys.length;
  return new PartialType(name, function(u) {
    if (UnknownRecord.is(u)) {
      for (var i = 0; i < len; i++) {
        var k = keys[i];
        var uk = u[k];
        if (uk !== void 0 && !props[k].is(uk)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }, function(u, c) {
    var e = UnknownRecord.validate(u, c);
    if (isLeft2(e)) {
      return e;
    }
    var o = e.right;
    var a = o;
    var errors = [];
    for (var i = 0; i < len; i++) {
      var k = keys[i];
      var ak = a[k];
      var type_2 = props[k];
      var result = type_2.validate(ak, appendContext(c, k, type_2, ak));
      if (isLeft2(result)) {
        if (ak !== void 0) {
          pushAll(errors, result.left);
        }
      } else {
        var vak = result.right;
        if (vak !== ak) {
          if (a === o) {
            a = __assign({}, o);
          }
          a[k] = vak;
        }
      }
    }
    return errors.length > 0 ? failures(errors) : success(a);
  }, useIdentity(types) ? identity2 : function(a) {
    var s = __assign({}, a);
    for (var i = 0; i < len; i++) {
      var k = keys[i];
      var ak = a[k];
      if (ak !== void 0) {
        s[k] = types[i].encode(ak);
      }
    }
    return s;
  }, props);
}
var DictionaryType = (
  /** @class */
  function(_super) {
    __extends(DictionaryType2, _super);
    function DictionaryType2(name, is, validate, encode, domain, codomain) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.domain = domain;
      _this.codomain = codomain;
      _this._tag = "DictionaryType";
      return _this;
    }
    return DictionaryType2;
  }(Type)
);
function record(domain, codomain, name) {
  var keys = getDomainKeys(domain);
  return keys ? enumerableRecord(Object.keys(keys), domain, codomain, name) : nonEnumerableRecord(domain, codomain, name);
}
var UnionType = (
  /** @class */
  function(_super) {
    __extends(UnionType2, _super);
    function UnionType2(name, is, validate, encode, types) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.types = types;
      _this._tag = "UnionType";
      return _this;
    }
    return UnionType2;
  }(Type)
);
function union(codecs, name) {
  if (name === void 0) {
    name = getUnionName(codecs);
  }
  var index = getIndex(codecs);
  if (index !== void 0 && codecs.length > 0) {
    var tag_1 = index[0], groups_1 = index[1];
    var len_1 = groups_1.length;
    var find_1 = function(value) {
      for (var i = 0; i < len_1; i++) {
        if (groups_1[i].indexOf(value) !== -1) {
          return i;
        }
      }
      return void 0;
    };
    return new TaggedUnionType(name, function(u) {
      if (UnknownRecord.is(u)) {
        var i = find_1(u[tag_1]);
        return i !== void 0 ? codecs[i].is(u) : false;
      }
      return false;
    }, function(u, c) {
      var e = UnknownRecord.validate(u, c);
      if (isLeft2(e)) {
        return e;
      }
      var r = e.right;
      var i = find_1(r[tag_1]);
      if (i === void 0) {
        return failure(u, c);
      }
      var codec = codecs[i];
      return codec.validate(r, appendContext(c, String(i), codec, r));
    }, useIdentity(codecs) ? identity2 : function(a) {
      var i = find_1(a[tag_1]);
      if (i === void 0) {
        throw new Error("no codec found to encode value in union codec ".concat(name));
      } else {
        return codecs[i].encode(a);
      }
    }, codecs, tag_1);
  } else {
    return new UnionType(name, function(u) {
      return codecs.some(function(type2) {
        return type2.is(u);
      });
    }, function(u, c) {
      var errors = [];
      for (var i = 0; i < codecs.length; i++) {
        var codec = codecs[i];
        var result = codec.validate(u, appendContext(c, String(i), codec, u));
        if (isLeft2(result)) {
          pushAll(errors, result.left);
        } else {
          return success(result.right);
        }
      }
      return failures(errors);
    }, useIdentity(codecs) ? identity2 : function(a) {
      for (var _i = 0, codecs_1 = codecs; _i < codecs_1.length; _i++) {
        var codec = codecs_1[_i];
        if (codec.is(a)) {
          return codec.encode(a);
        }
      }
      throw new Error("no codec found to encode value in union type ".concat(name));
    }, codecs);
  }
}
var IntersectionType = (
  /** @class */
  function(_super) {
    __extends(IntersectionType2, _super);
    function IntersectionType2(name, is, validate, encode, types) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.types = types;
      _this._tag = "IntersectionType";
      return _this;
    }
    return IntersectionType2;
  }(Type)
);
var TupleType = (
  /** @class */
  function(_super) {
    __extends(TupleType2, _super);
    function TupleType2(name, is, validate, encode, types) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.types = types;
      _this._tag = "TupleType";
      return _this;
    }
    return TupleType2;
  }(Type)
);
function tuple2(codecs, name) {
  if (name === void 0) {
    name = "[".concat(codecs.map(function(type2) {
      return type2.name;
    }).join(", "), "]");
  }
  var len = codecs.length;
  return new TupleType(name, function(u) {
    return UnknownArray.is(u) && u.length === len && codecs.every(function(type2, i) {
      return type2.is(u[i]);
    });
  }, function(u, c) {
    var e = UnknownArray.validate(u, c);
    if (isLeft2(e)) {
      return e;
    }
    var us = e.right;
    var as3 = us.length > len ? us.slice(0, len) : us;
    var errors = [];
    for (var i = 0; i < len; i++) {
      var a = us[i];
      var type_3 = codecs[i];
      var result = type_3.validate(a, appendContext(c, String(i), type_3, a));
      if (isLeft2(result)) {
        pushAll(errors, result.left);
      } else {
        var va = result.right;
        if (va !== a) {
          if (as3 === us) {
            as3 = us.slice();
          }
          as3[i] = va;
        }
      }
    }
    return errors.length > 0 ? failures(errors) : success(as3);
  }, useIdentity(codecs) ? identity2 : function(a) {
    return codecs.map(function(type2, i) {
      return type2.encode(a[i]);
    });
  }, codecs);
}
var ReadonlyType = (
  /** @class */
  function(_super) {
    __extends(ReadonlyType2, _super);
    function ReadonlyType2(name, is, validate, encode, type2) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.type = type2;
      _this._tag = "ReadonlyType";
      return _this;
    }
    return ReadonlyType2;
  }(Type)
);
var ReadonlyArrayType = (
  /** @class */
  function(_super) {
    __extends(ReadonlyArrayType2, _super);
    function ReadonlyArrayType2(name, is, validate, encode, type2) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.type = type2;
      _this._tag = "ReadonlyArrayType";
      return _this;
    }
    return ReadonlyArrayType2;
  }(Type)
);
var strict = function(props, name) {
  return exact(type(props), name);
};
var ExactType = (
  /** @class */
  function(_super) {
    __extends(ExactType2, _super);
    function ExactType2(name, is, validate, encode, type2) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.type = type2;
      _this._tag = "ExactType";
      return _this;
    }
    return ExactType2;
  }(Type)
);
function exact(codec, name) {
  if (name === void 0) {
    name = getExactTypeName(codec);
  }
  var props = getProps(codec);
  return new ExactType(name, codec.is, function(u, c) {
    var e = UnknownRecord.validate(u, c);
    if (isLeft2(e)) {
      return e;
    }
    var ce = codec.validate(u, c);
    if (isLeft2(ce)) {
      return ce;
    }
    return right3(stripKeys(ce.right, props));
  }, function(a) {
    return codec.encode(stripKeys(a, props));
  }, codec);
}
var FunctionType = (
  /** @class */
  function(_super) {
    __extends(FunctionType2, _super);
    function FunctionType2() {
      var _this = _super.call(
        this,
        "Function",
        // tslint:disable-next-line:strict-type-predicates
        function(u) {
          return typeof u === "function";
        },
        function(u, c) {
          return _this.is(u) ? success(u) : failure(u, c);
        },
        identity2
      ) || this;
      _this._tag = "FunctionType";
      return _this;
    }
    return FunctionType2;
  }(Type)
);
var Function = new FunctionType();
var NeverType = (
  /** @class */
  function(_super) {
    __extends(NeverType2, _super);
    function NeverType2() {
      var _this = _super.call(
        this,
        "never",
        function(_) {
          return false;
        },
        function(u, c) {
          return failure(u, c);
        },
        /* istanbul ignore next */
        function() {
          throw new Error("cannot encode never");
        }
      ) || this;
      _this._tag = "NeverType";
      return _this;
    }
    return NeverType2;
  }(Type)
);
var never = new NeverType();
var AnyType = (
  /** @class */
  function(_super) {
    __extends(AnyType2, _super);
    function AnyType2() {
      var _this = _super.call(this, "any", function(_) {
        return true;
      }, success, identity2) || this;
      _this._tag = "AnyType";
      return _this;
    }
    return AnyType2;
  }(Type)
);
var any = new AnyType();
function refinement(codec, predicate, name) {
  if (name === void 0) {
    name = "(".concat(codec.name, " | ").concat(getFunctionName(predicate), ")");
  }
  return new RefinementType(name, function(u) {
    return codec.is(u) && predicate(u);
  }, function(i, c) {
    var e = codec.validate(i, c);
    if (isLeft2(e)) {
      return e;
    }
    var a = e.right;
    return predicate(a) ? success(a) : failure(a, c);
  }, codec.encode, codec, predicate);
}
var Integer = refinement(number, Number.isInteger, "Integer");
var TaggedUnionType = (
  /** @class */
  function(_super) {
    __extends(TaggedUnionType2, _super);
    function TaggedUnionType2(name, is, validate, encode, codecs, tag) {
      var _this = _super.call(this, name, is, validate, encode, codecs) || this;
      _this.tag = tag;
      return _this;
    }
    return TaggedUnionType2;
  }(UnionType)
);
var ObjectType = (
  /** @class */
  function(_super) {
    __extends(ObjectType2, _super);
    function ObjectType2() {
      var _this = _super.call(this, "object", function(u) {
        return u !== null && typeof u === "object";
      }, function(u, c) {
        return _this.is(u) ? success(u) : failure(u, c);
      }, identity2) || this;
      _this._tag = "ObjectType";
      return _this;
    }
    return ObjectType2;
  }(Type)
);
var object = new ObjectType();
var StrictType = (
  /** @class */
  function(_super) {
    __extends(StrictType2, _super);
    function StrictType2(name, is, validate, encode, props) {
      var _this = _super.call(this, name, is, validate, encode) || this;
      _this.props = props;
      _this._tag = "StrictType";
      return _this;
    }
    return StrictType2;
  }(Type)
);

// ../node_modules/.pnpm/io-ts@2.2.22_fp-ts@2.16.11/node_modules/io-ts/es6/PathReporter.js
function stringify(v) {
  if (typeof v === "function") {
    return getFunctionName(v);
  }
  if (typeof v === "number" && !isFinite(v)) {
    if (isNaN(v)) {
      return "NaN";
    }
    return v > 0 ? "Infinity" : "-Infinity";
  }
  return JSON.stringify(v);
}
function getContextPath(context) {
  return context.map(function(_a) {
    var key = _a.key, type2 = _a.type;
    return "".concat(key, ": ").concat(type2.name);
  }).join("/");
}
function getMessage(e) {
  return e.message !== void 0 ? e.message : "Invalid value ".concat(stringify(e.value), " supplied to ").concat(getContextPath(e.context));
}
function failure2(es) {
  return es.map(getMessage);
}
function success2() {
  return ["No errors!"];
}
var PathReporter = {
  report: fold(failure2, success2)
};

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/generic/field-schema.js
var str = string;
var int = Integer;
var float = number;
var bool = boolean;
var tuple3 = tuple2;
var list = array;
var union2 = union;
function nullable(type2) {
  return union2([type2, nullType]);
}
function literal(...values) {
  if (values.length === 0) {
    throw new Error(`literal type must have at least one value`);
  }
  const typeName = `(${values.map((v) => onelinerJsonString(v)).join(" | ")})`;
  return new Type(typeName, (value) => values.includes(value), (value, ctx) => values.includes(value) ? { _tag: "Right", right: value } : { _tag: "Left", left: [{ value, context: ctx, message: `"${value}" is not a valid value for literal type ${typeName}` }] }, (value) => value);
}
function mapping(from, to) {
  return record(from, to);
}
function RequiredField(type2, description) {
  return { type: type2, required: true, description };
}
function OptionalField(type2, defaultValue, description) {
  return { type: type2, required: false, description, default: defaultValue };
}
function fieldValidationIssues(field, value) {
  const validation = field.type.decode(value);
  if (validation._tag === "Right") {
    return void 0;
  } else {
    return PathReporter.report(validation);
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/generic/params-schema.js
function SimpleParamsSchema(fields) {
  return { type: "simple", fields };
}
function UnionParamsSchema(discriminator, discriminatorDescription, cases) {
  return { type: "union", discriminator, discriminatorDescription, cases };
}
function AllRequiredSimple(schema) {
  const newFields = mapObjectMap(schema.fields, (field) => RequiredField(field.type, field.description));
  return SimpleParamsSchema(newFields);
}
function AllRequiredUnion(schema) {
  const newCases = mapObjectMap(schema.cases, AllRequired);
  return UnionParamsSchema(schema.discriminator, schema.discriminatorDescription, newCases);
}
function AllRequired(schema) {
  if (schema.type === "simple") {
    return AllRequiredSimple(schema);
  } else {
    return AllRequiredUnion(schema);
  }
}
function paramsValidationIssues(schema, values, options = {}) {
  if (!isPlainObject(values))
    return [`Parameters must be an object, not ${values}`];
  if (schema.type === "simple") {
    return simpleParamsValidationIssue(schema, values, options);
  } else {
    return unionParamsValidationIssues(schema, values, options);
  }
}
function simpleParamsValidationIssue(schema, values, options) {
  for (const key in schema.fields) {
    const fieldSchema = schema.fields[key];
    if (Object.hasOwn(values, key)) {
      const value = values[key];
      const issues = fieldValidationIssues(fieldSchema, value);
      if (issues)
        return [`Invalid value for parameter "${key}":`, ...issues.map((s) => "  " + s)];
    } else {
      if (fieldSchema.required)
        return [`Missing required parameter "${key}".`];
      if (options.requireAll)
        return [`Missing optional parameter "${key}".`];
    }
  }
  if (options.noExtra) {
    for (const key in values) {
      if (!Object.hasOwn(schema.fields, key))
        return [`Unknown parameter "${key}".`];
    }
  }
  return void 0;
}
function unionParamsValidationIssues(schema, values, options) {
  if (!Object.hasOwn(values, schema.discriminator)) {
    return [`Missing required parameter "${schema.discriminator}".`];
  }
  const case_ = values[schema.discriminator];
  const subschema = schema.cases[case_];
  if (subschema === void 0) {
    const allowedCases = Object.keys(schema.cases).map((x) => `"${x}"`).join(" | ");
    return [
      `Invalid value for parameter "${schema.discriminator}":`,
      `"${case_}" is not a valid value for literal type (${allowedCases})`
    ];
  }
  const issues = paramsValidationIssues(subschema, omitObjectKeys(values, [schema.discriminator]), options);
  if (issues) {
    issues.unshift(`(case "${schema.discriminator}": "${case_}")`);
    return issues.map((s) => "  " + s);
  }
  return void 0;
}
function addParamDefaults(schema, values) {
  if (schema.type === "simple") {
    return addSimpleParamsDefaults(schema, values);
  } else {
    return addUnionParamsDefaults(schema, values);
  }
}
function addSimpleParamsDefaults(schema, values) {
  const out = { ...values };
  for (const key in schema.fields) {
    const field = schema.fields[key];
    if (!field.required && out[key] === void 0) {
      out[key] = field.default;
    }
  }
  return out;
}
function addUnionParamsDefaults(schema, values) {
  const case_ = values[schema.discriminator];
  const subschema = schema.cases[case_];
  return addParamDefaults(subschema, values);
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/generic/tree-utils.js
function dfs(root, visit, postVisit) {
  return _dfs(root, void 0, visit, postVisit);
}
function _dfs(root, parent, visit, postVisit) {
  var _a;
  if (visit)
    visit(root, parent);
  for (const child of (_a = root.children) !== null && _a !== void 0 ? _a : []) {
    _dfs(child, root, visit, postVisit);
  }
  if (postVisit)
    postVisit(root, parent);
}
function treeToString(tree) {
  let level = 0;
  const lines = [];
  dfs(tree, (node) => lines.push("  ".repeat(level++) + nodeToString(node)), (node) => level--);
  return lines.join("\n");
}
function nodeToString(node) {
  var _a;
  return `- ${node.kind} ${formatObject((_a = node.params) !== null && _a !== void 0 ? _a : {})}${formatCustomProps(node.custom)}${formatRef(node.ref)}`;
}
function formatObject(obj) {
  if (!obj)
    return "undefined";
  return JSON.stringify(obj).replace(/,("\w+":)/g, ", $1").replace(/"(\w+)":/g, "$1: ");
}
function formatCustomProps(customProps) {
  if (!customProps || Object.keys(customProps).length === 0)
    return "";
  return `, custom: ${formatObject(customProps)}`;
}
function formatRef(ref) {
  if (ref === void 0)
    return "";
  return `, ref: "${ref}"`;
}
function copyNodeWithoutChildren(node) {
  return {
    kind: node.kind,
    params: node.params ? { ...node.params } : void 0,
    custom: node.custom ? { ...node.custom } : void 0,
    ref: node.ref
  };
}
function copyTree(root) {
  return convertTree(root, {});
}
function convertTree(root, conversions) {
  const mapping2 = /* @__PURE__ */ new Map();
  let convertedRoot;
  dfs(root, (node, parent) => {
    var _a, _b;
    var _c;
    const conversion = conversions[node.kind];
    if (conversion) {
      const convertidos = conversion(node, parent);
      if (!parent && convertidos.length === 0)
        throw new Error("Cannot convert root to empty path");
      let convParent = parent ? mapping2.get(parent) : void 0;
      for (const conv of convertidos) {
        if (convParent) {
          ((_a = convParent.children) !== null && _a !== void 0 ? _a : convParent.children = []).push(conv);
        } else {
          convertedRoot = conv;
        }
        convParent = conv;
      }
      mapping2.set(node, convParent);
    } else {
      const converted = copyNodeWithoutChildren(node);
      if (parent) {
        ((_b = (_c = mapping2.get(parent)).children) !== null && _b !== void 0 ? _b : _c.children = []).push(converted);
      } else {
        convertedRoot = converted;
      }
      mapping2.set(node, converted);
    }
  });
  return convertedRoot;
}
function condenseTree(root, condenseNodes, skipNodes) {
  const map3 = /* @__PURE__ */ new Map();
  const result = copyTree(root);
  dfs(result, (node) => {
    var _a, _b, _c;
    map3.clear();
    const newChildren = [];
    for (const child of (_a = node.children) !== null && _a !== void 0 ? _a : []) {
      let twin = void 0;
      const doApply = (!condenseNodes || condenseNodes.has(child.kind)) && !(skipNodes === null || skipNodes === void 0 ? void 0 : skipNodes.has(child.kind));
      if (doApply) {
        const key = child.kind + canonicalJsonString(getParams(child));
        twin = map3.get(key);
        if (!twin)
          map3.set(key, child);
      }
      if (twin) {
        ((_b = twin.children) !== null && _b !== void 0 ? _b : twin.children = []).push(...(_c = child.children) !== null && _c !== void 0 ? _c : []);
      } else {
        newChildren.push(child);
      }
    }
    node.children = newChildren;
  });
  return result;
}
function addDefaults(tree, treeSchema) {
  const rules = {};
  for (const kind in treeSchema.nodes) {
    rules[kind] = (node) => [{
      kind: node.kind,
      params: addParamDefaults(treeSchema.nodes[kind].params, node.params),
      custom: node.custom,
      ref: node.ref
    }];
  }
  return convertTree(tree, rules);
}
function resolveUris(tree, baseUri, uriParamNames) {
  dfs(tree, (node) => {
    const params = node.params;
    if (!params)
      return;
    for (const name in params) {
      if (uriParamNames.includes(name)) {
        const uri = params[name];
        if (typeof uri === "string") {
          params[name] = resolveUri(uri, baseUri, windowUrl());
        }
      }
    }
  });
}
function resolveUri(...refs) {
  let result = void 0;
  for (const ref of refs.reverse()) {
    if (ref !== void 0) {
      if (result === void 0)
        result = ref;
      else
        result = new URL(ref, result).href;
    }
  }
  return result;
}
function windowUrl() {
  return typeof window !== "undefined" ? window.location.href : void 0;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/generic/tree-schema.js
function getParams(node) {
  var _a;
  return (_a = node.params) !== null && _a !== void 0 ? _a : {};
}
function getCustomProps(node) {
  var _a;
  return (_a = node.custom) !== null && _a !== void 0 ? _a : {};
}
function getChildren(tree) {
  var _a;
  return (_a = tree.children) !== null && _a !== void 0 ? _a : [];
}
function TreeSchema(schema) {
  return schema;
}
function TreeSchemaWithAllRequired(schema) {
  return {
    ...schema,
    nodes: mapObjectMap(schema.nodes, (node) => ({ ...node, params: AllRequired(node.params) }))
  };
}
function treeValidationIssues(schema, tree, options = {}) {
  if (!isPlainObject(tree))
    return [`Node must be an object, not ${tree}`];
  if (!options.anyRoot && tree.kind !== schema.rootKind)
    return [`Invalid root node kind "${tree.kind}", root must be of kind "${schema.rootKind}"`];
  const nodeSchema = schema.nodes[tree.kind];
  if (!nodeSchema)
    return [`Unknown node kind "${tree.kind}"`];
  if (nodeSchema.parent && options.parent !== void 0 && !nodeSchema.parent.includes(options.parent)) {
    return [`Node of kind "${tree.kind}" cannot appear as a child of "${options.parent}". Allowed parents for "${tree.kind}" are: ${nodeSchema.parent.map((s) => `"${s}"`).join(", ")}`];
  }
  const issues = paramsValidationIssues(nodeSchema.params, getParams(tree), options);
  if (issues)
    return [`Invalid parameters for node of kind "${tree.kind}":`, ...issues.map((s) => "  " + s)];
  if (tree.custom !== void 0 && (typeof tree.custom !== "object" || tree.custom === null)) {
    return [`Invalid "custom" for node of kind "${tree.kind}": must be an object, not ${tree.custom}.`];
  }
  for (const child of getChildren(tree)) {
    const issues2 = treeValidationIssues(schema, child, { ...options, anyRoot: true, parent: tree.kind });
    if (issues2)
      return issues2;
  }
  return void 0;
}
function validateTree(schema, tree, label) {
  const issues = treeValidationIssues(schema, tree, { noExtra: true });
  if (issues) {
    console.warn(`Invalid ${label} tree:
${treeToString(tree)}`);
    console.error(`${label} tree validation issues:`);
    for (const line of issues) {
      console.error(" ", line);
    }
    throw new Error("FormatError");
  }
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/mvs/mvs-tree-representations.js
var Cartoon = {
  /** Scales the corresponding visuals */
  size_factor: OptionalField(float, 1, "Scales the corresponding visuals."),
  /** Simplify corkscrew helices to tubes. */
  tubular_helices: OptionalField(bool, false, "Simplify corkscrew helices to tubes.")
};
var BallAndStick = {
  /** Scales the corresponding visuals */
  size_factor: OptionalField(float, 1, "Scales the corresponding visuals."),
  /** Controls whether hydrogen atoms are drawn. */
  ignore_hydrogens: OptionalField(bool, false, "Controls whether hydrogen atoms are drawn.")
};
var Spacefill = {
  /** Scales the corresponding visuals */
  size_factor: OptionalField(float, 1, "Scales the corresponding visuals."),
  /** Controls whether hydrogen atoms are drawn. */
  ignore_hydrogens: OptionalField(bool, false, "Controls whether hydrogen atoms are drawn.")
};
var Carbohydrate = {
  /** Scales the corresponding visuals */
  size_factor: OptionalField(float, 1, "Scales the corresponding visuals.")
};
var Surface = {
  /** Scales the corresponding visuals */
  size_factor: OptionalField(float, 1, "Scales the corresponding visuals."),
  /** Controls whether hydrogen atoms are drawn. */
  ignore_hydrogens: OptionalField(bool, false, "Controls whether hydrogen atoms are drawn.")
};
var MVSRepresentationParams = UnionParamsSchema("type", "Representation type", {
  cartoon: SimpleParamsSchema(Cartoon),
  ball_and_stick: SimpleParamsSchema(BallAndStick),
  spacefill: SimpleParamsSchema(Spacefill),
  carbohydrate: SimpleParamsSchema(Carbohydrate),
  surface: SimpleParamsSchema(Surface)
});
var VolumeIsoSurface = {
  /** Relative isovalue. */
  relative_isovalue: OptionalField(nullable(float), null, "Relative isovalue."),
  /** Absolute isovalue. Overrides `relative_isovalue`. */
  absolute_isovalue: OptionalField(nullable(float), null, "Absolute isovalue. Overrides `relative_isovalue`."),
  /** Show mesh wireframe. Defaults to false. */
  show_wireframe: OptionalField(bool, false, "Show mesh wireframe. Defaults to false."),
  /** Show mesh faces. Defaults to true. */
  show_faces: OptionalField(bool, true, "Show mesh faces. Defaults to true.")
};
var MVSVolumeRepresentationParams = UnionParamsSchema("type", "Representation type", {
  "isosurface": SimpleParamsSchema(VolumeIsoSurface)
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/helpers/utils.js
async function safePromise(promise) {
  try {
    const value = await promise;
    return { ok: true, value };
  } catch (error) {
    return { ok: false, error };
  }
}
var MultiMap = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map();
  }
  /** Return the array of values assidned to a key (or `undefined` if no such values) */
  get(key) {
    return this._map.get(key);
  }
  /** Append value to a key (handles missing keys) */
  add(key, value) {
    if (!this._map.has(key)) {
      this._map.set(key, []);
    }
    this._map.get(key).push(value);
  }
};
var NumberMap = class {
  constructor(limit) {
    this.limit = limit;
    this.array = new Array(limit);
    this.map = /* @__PURE__ */ new Map();
  }
  get(key) {
    if (0 <= key && key < this.limit)
      return this.array[key];
    else
      return this.map.get(key);
  }
  set(key, value) {
    if (0 <= key && key < this.limit)
      this.array[key] = value;
    else
      this.map.set(key, value);
  }
};
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isAnyDefined(...values) {
  return values.some(isDefined);
}
function filterDefined(elements) {
  return elements.filter((x) => x !== void 0 && x !== null);
}
function stringHash32(input) {
  const uint32hash = hashString(input) >>> 0;
  return uint32hash.toString(16).padStart(8, "0");
}
function stringHash(input) {
  const reversed = input.split("").reverse().join("");
  return stringHash32(input) + stringHash32(reversed);
}
function decodeColor(colorString) {
  if (colorString === void 0 || colorString === null)
    return void 0;
  let result;
  if (HexColor.is(colorString)) {
    if (colorString.length === 4) {
      colorString = `#${colorString[1]}${colorString[1]}${colorString[2]}${colorString[2]}${colorString[3]}${colorString[3]}`;
    }
    result = Color.fromHexStyle(colorString);
    if (result !== void 0 && !isNaN(result))
      return result;
  }
  result = ColorNames[colorString.toLowerCase()];
  if (result !== void 0)
    return result;
  return void 0;
}
var hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;
var HexColor = {
  /** Decide if a string is a valid hexadecimal color string (6-digit or 3-digit, e.g. '#FF1100' or '#f10') */
  is(str2) {
    return typeof str2 === "string" && hexColorRegex.test(str2);
  }
};
var ColorName = {
  /** Decide if a string is a valid named color string */
  is(str2) {
    return str2 in ColorNames;
  }
};
function collectMVSReferences(type2, dependencies) {
  const ret = {};
  for (const key of Object.keys(dependencies)) {
    const o = dependencies[key];
    let okType = false;
    for (const t of type2) {
      if (t.is(o)) {
        okType = true;
        break;
      }
    }
    if (!okType || !o.tags)
      continue;
    for (const tag of o.tags) {
      if (tag.startsWith("mvs-ref:")) {
        ret[tag.substring(8)] = o.data;
        break;
      }
    }
  }
  return ret;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/mvs/param-types.js
var ParseFormatT = literal("mmcif", "bcif", "pdb", "map");
var MolstarParseFormatT = literal("cif", "pdb", "map");
var StructureTypeT = literal("model", "assembly", "symmetry", "symmetry_mates");
var ComponentSelectorT = literal("all", "polymer", "protein", "nucleic", "branched", "ligand", "ion", "water", "coarse");
var ComponentExpressionT = partial({
  label_entity_id: str,
  label_asym_id: str,
  auth_asym_id: str,
  label_seq_id: int,
  auth_seq_id: int,
  pdbx_PDB_ins_code: str,
  beg_label_seq_id: int,
  end_label_seq_id: int,
  beg_auth_seq_id: int,
  end_auth_seq_id: int,
  label_comp_id: str,
  auth_comp_id: str,
  // residue_index: int, // 0-based residue index in the source file // TODO this is defined in Python builder but not supported by Molstar yet
  label_atom_id: str,
  auth_atom_id: str,
  type_symbol: str,
  atom_id: int,
  atom_index: int
});
var SchemaT = literal("whole_structure", "entity", "chain", "auth_chain", "residue", "auth_residue", "residue_range", "auth_residue_range", "atom", "auth_atom", "all_atomic");
var SchemaFormatT = literal("cif", "bcif", "json");
var Vector3 = tuple3([float, float, float]);
var Matrix = list(float);
var PrimitiveComponentExpressionT = partial({ structure_ref: str, expression_schema: SchemaT, expressions: list(ComponentExpressionT) });
var PrimitivePositionT = union([Vector3, ComponentExpressionT, PrimitiveComponentExpressionT]);
var FloatList = list(float);
var IntList = list(int);
var StrList = list(str);
var HexColorT = new Type("HexColor", (value) => typeof value === "string", (value, ctx) => HexColor.is(value) ? { _tag: "Right", right: value } : { _tag: "Left", left: [{ value, context: ctx, message: `"${value}" is not a valid hex color string` }] }, (value) => value);
var ColorNameT = new Type("ColorName", (value) => typeof value === "string", (value, ctx) => ColorName.is(value) ? { _tag: "Right", right: value } : { _tag: "Left", left: [{ value, context: ctx, message: `"${value}" is not a valid hex color string` }] }, (value) => value);
var ColorNamesT = literal(...Object.keys(ColorNames));
var ColorT = union2([ColorNameT, HexColorT]);
function isVector3(x) {
  return !!x && Array.isArray(x) && x.length === 3 && typeof x[0] === "number";
}
function isPrimitiveComponentExpressions(x) {
  return !!x && Array.isArray(x.expressions);
}
function isComponentExpression(x) {
  return !!x && typeof x === "object" && !x.expressions;
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/mvs/mvs-tree-primitives.js
var _TubeBase = {
  /** Start point of the tube. */
  start: RequiredField(PrimitivePositionT, "Start point of the tube."),
  /** End point of the tube. */
  end: RequiredField(PrimitivePositionT, "End point of the tube."),
  /** Tube radius (in Angstroms). */
  radius: OptionalField(float, 0.05, "Tube radius (in Angstroms)."),
  /** Length of each dash and gap between dashes. If not specified (null), draw full line. */
  dash_length: OptionalField(nullable(float), null, "Length of each dash and gap between dashes. If not specified (null), draw full line."),
  /** Color of the tube. If not specified, uses the parent primitives group `color`. */
  color: OptionalField(nullable(ColorT), null, "Color of the tube. If not specified, uses the parent primitives group `color`.")
};
var MeshParams = {
  /** 3*n_vertices length array of floats with vertex position (x1, y1, z1, ...). */
  vertices: RequiredField(FloatList, "3*n_vertices length array of floats with vertex position (x1, y1, z1, ...)."),
  /** 3*n_triangles length array of indices into vertices that form triangles (t1_1, t1_2, t1_3, ...). */
  indices: RequiredField(IntList, "3*n_triangles length array of indices into vertices that form triangles (t1_1, t1_2, t1_3, ...)."),
  /** Assign a number to each triangle to group them. If not specified, each triangle is considered a separate group (triangle i = group i). */
  triangle_groups: OptionalField(nullable(IntList), null, "Assign a number to each triangle to group them. If not specified, each triangle is considered a separate group (triangle i = group i)."),
  /** Assign a color to each group. Where not assigned, uses `color`. */
  group_colors: OptionalField(mapping(int, ColorT), {}, "Assign a color to each group. Where not assigned, uses `color`."),
  /** Assign a tooltip to each group. Where not assigned, uses `tooltip`. */
  group_tooltips: OptionalField(mapping(int, str), {}, "Assign a tooltip to each group. Where not assigned, uses `tooltip`."),
  /** Color of the triangles and wireframe. Can be overwritten by `group_colors`. If not specified, uses the parent primitives group `color`. */
  color: OptionalField(nullable(ColorT), null, "Color of the triangles and wireframe. Can be overwritten by `group_colors`. If not specified, uses the parent primitives group `color`."),
  /** Tooltip shown when hovering over the mesh. Can be overwritten by `group_tooltips`. If not specified, uses the parent primitives group `tooltip`. */
  tooltip: OptionalField(nullable(str), null, "Tooltip shown when hovering over the mesh. Can be overwritten by `group_tooltips`. If not specified, uses the parent primitives group `tooltip`."),
  /** Determine whether to render triangles of the mesh. */
  show_triangles: OptionalField(bool, true, "Determine whether to render triangles of the mesh."),
  /** Determine whether to render wireframe of the mesh. */
  show_wireframe: OptionalField(bool, false, "Determine whether to render wireframe of the mesh."),
  /** Wireframe line width (in screen-space units). */
  wireframe_width: OptionalField(float, 1, "Wireframe line width (in screen-space units)."),
  /** Wireframe color. If not specified, uses `group_colors`. */
  wireframe_color: OptionalField(nullable(ColorT), null, "Wireframe color. If not specified, uses `group_colors`.")
};
var LinesParams = {
  /** 3*n_vertices length array of floats with vertex position (x1, y1, z1, ...). */
  vertices: RequiredField(FloatList, "3*n_vertices length array of floats with vertex position (x1, y1, z1, ...)."),
  /** 2*n_lines length array of indices into vertices that form lines (l1_1, l1_2, ...). */
  indices: RequiredField(IntList, "2*n_lines length array of indices into vertices that form lines (l1_1, l1_2, ...)."),
  /** Assign a number to each triangle to group them. If not specified, each line is considered a separate group (line i = group i). */
  line_groups: OptionalField(nullable(IntList), null, "Assign a number to each triangle to group them. If not specified, each line is considered a separate group (line i = group i)."),
  /** Assign a color to each group. Where not assigned, uses `color`. */
  group_colors: OptionalField(mapping(int, ColorT), {}, "Assign a color to each group. Where not assigned, uses `color`."),
  /** Assign a tooltip to each group. Where not assigned, uses `tooltip`. */
  group_tooltips: OptionalField(mapping(int, str), {}, "Assign a tooltip to each group. Where not assigned, uses `tooltip`."),
  /** Assign a line width to each group. Where not assigned, uses `width`. */
  group_widths: OptionalField(mapping(int, float), {}, "Assign a line width to each group. Where not assigned, uses `width`."),
  /** Color of the lines. Can be overwritten by `group_colors`. If not specified, uses the parent primitives group `color`. */
  color: OptionalField(nullable(ColorT), null, "Color of the lines. Can be overwritten by `group_colors`. If not specified, uses the parent primitives group `color`."),
  /** Tooltip shown when hovering over the lines. Can be overwritten by `group_tooltips`. If not specified, uses the parent primitives group `tooltip`. */
  tooltip: OptionalField(nullable(str), null, "Tooltip shown when hovering over the lines. Can be overwritten by `group_tooltips`. If not specified, uses the parent primitives group `tooltip`."),
  /** Line width (in screen-space units). Can be overwritten by `group_widths`. */
  width: OptionalField(float, 1, "Line width (in screen-space units). Can be overwritten by `group_widths`.")
};
var TubeParams = {
  ..._TubeBase,
  /** Tooltip to show when hovering over the tube. If not specified, uses the parent primitives group `tooltip`. */
  tooltip: OptionalField(nullable(str), null, "Tooltip to show when hovering over the tube. If not specified, uses the parent primitives group `tooltip`.")
};
var ArrowParams = {
  /** Start point of the tube. */
  start: RequiredField(PrimitivePositionT, "Start point of the arrow."),
  /** End point of the tube. */
  end: OptionalField(nullable(PrimitivePositionT), null, "End point of the arrow."),
  /** If specified, the endpoint is computed as start + direction. */
  direction: OptionalField(nullable(Vector3), null, "If specified, the endpoint is computed as start + direction."),
  /** Length of the arrow. If unset, the distance between start and end is used. */
  length: OptionalField(nullable(float), null, "Length of the arrow. If unset, the distance between start and end is used."),
  /** Draw a cap at the start of the arrow. */
  show_start_cap: OptionalField(bool, false, "Draw a cap at the start of the arrow."),
  /** Length of the start cap. */
  start_cap_length: OptionalField(nullable(float), null, "Length of the start cap. If not provided, will be 2 * start_cap_radius."),
  /** Radius of the start cap. */
  start_cap_radius: OptionalField(nullable(float), null, "Radius of the start cap. If not provided, will be 2 * tube_radius."),
  /** Draw an arrow at the end of the arrow. */
  show_end_cap: OptionalField(bool, false, "Draw a cap at the end of the arrow."),
  /** Height of the arrow at the end. */
  end_cap_length: OptionalField(nullable(float), null, "Length of the end cap. If not provided, will be 2 * end_cap_radius."),
  /** Radius of the arrow at the end. */
  end_cap_radius: OptionalField(nullable(float), null, "Radius of the end cap. If not provided, will be 2 * tube_radius."),
  /** Draw a tube connecting the start and end points. */
  show_tube: OptionalField(bool, true, "Draw a tube connecting the start and end points."),
  /** Tube radius (in Angstroms). */
  tube_radius: OptionalField(float, 0.05, "Tube radius (in Angstroms)."),
  /** Length of each dash and gap between dashes. If not specified (null), draw full line. */
  tube_dash_length: OptionalField(nullable(float), null, "Length of each dash and gap between dashes. If not specified (null), draw full line."),
  /** Color of the tube. If not specified, uses the parent primitives group `color`. */
  color: OptionalField(nullable(ColorT), null, "Color of the tube. If not specified, uses the parent primitives group `color`."),
  /** Tooltip to show when hovering over the tube. If not specified, uses the parent primitives group `tooltip`. */
  tooltip: OptionalField(nullable(str), null, "Tooltip to show when hovering over the arrow. If not specified, uses the parent primitives group `tooltip`.")
};
var DistanceMeasurementParams = {
  ..._TubeBase,
  /** Template used to construct the label. Use {{distance}} as placeholder for the distance. */
  label_template: OptionalField(str, "{{distance}}", "Template used to construct the label. Use {{distance}} as placeholder for the distance."),
  /** Size of the label (text height in Angstroms). If not specified, size will be relative to the distance (see label_auto_size_scale, label_auto_size_min). */
  label_size: OptionalField(nullable(float), null, "Size of the label (text height in Angstroms). If not specified, size will be relative to the distance (see label_auto_size_scale, label_auto_size_min)."),
  /** Scaling factor for relative size. */
  label_auto_size_scale: OptionalField(float, 0.1, "Scaling factor for relative size."),
  /** Minimum size for relative size. */
  label_auto_size_min: OptionalField(float, 0, "Minimum size for relative size."),
  /** Color of the label. If not specified, uses the parent primitives group `label_color`. */
  label_color: OptionalField(nullable(ColorT), null, "Color of the label. If not specified, uses the parent primitives group `label_color`.")
};
var AngleMeasurementParams = {
  /** Point A. */
  a: RequiredField(PrimitivePositionT, "Point A."),
  /** Point B. */
  b: RequiredField(PrimitivePositionT, "Point B."),
  /** Point C. */
  c: RequiredField(PrimitivePositionT, "Point C."),
  /** Template used to construct the label. Use {{angle}} as placeholder for the angle in radians. */
  label_template: OptionalField(str, "{{angle}}", "Template used to construct the label. Use {{angle}} as placeholder for the angle in radians."),
  /** Size of the label (text height in Angstroms). If not specified, size will be relative to the distance (see label_auto_size_scale, label_auto_size_min). */
  label_size: OptionalField(nullable(float), null, "Size of the label (text height in Angstroms). If not specified, size will be relative to the distance (see label_auto_size_scale, label_auto_size_min)."),
  /** Scaling factor for relative size. */
  label_auto_size_scale: OptionalField(float, 0.33, "Scaling factor for relative size."),
  /** Minimum size for relative size. */
  label_auto_size_min: OptionalField(float, 0, "Minimum size for relative size."),
  /** Color of the label. If not specified, uses the parent primitives group `label_color`. */
  label_color: OptionalField(nullable(ColorT), null, "Color of the label. If not specified, uses the parent primitives group `label_color`."),
  /** Draw vectors between (a, b) and (b, c). */
  show_vector: OptionalField(bool, true, "Draw vectors between (a, b) and (b, c)."),
  /** Color of the vectors. */
  vector_color: OptionalField(nullable(ColorT), null, "Color of the vectors."),
  /** Radius of the vectors. */
  vector_radius: OptionalField(float, 0.05, "Radius of the vectors."),
  /** Draw a filled circle section representing the angle. */
  show_section: OptionalField(bool, true, "Draw a filled circle section representing the angle."),
  /** Color of the angle section. If not specified, the primitives group color is used. */
  section_color: OptionalField(nullable(ColorT), null, "Color of the angle section. If not specified, the primitives group color is used."),
  /** Radius of the angle section. In angstroms. */
  section_radius: OptionalField(nullable(float), null, "Radius of the angle section. In angstroms."),
  /** Factor to scale the radius of the angle section. Ignored if section_radius is set. */
  section_radius_scale: OptionalField(float, 0.33, "Factor to scale the radius of the angle section. Ignored if section_radius is set.")
};
var PrimitiveLabelParams = {
  /** Position of this label. */
  position: RequiredField(PrimitivePositionT, "Position of this label."),
  /** The label. */
  text: RequiredField(str, "The label."),
  /** Size of the label (text height in Angstroms). */
  label_size: OptionalField(float, 1, "Size of the label (text height in Angstroms)."),
  /** Color of the label. If not specified, uses the parent primitives group `label_color`. */
  label_color: OptionalField(nullable(ColorT), null, "Color of the label. If not specified, uses the parent primitives group `label_color`."),
  /** Camera-facing offset to prevent overlap with geometry. */
  label_offset: OptionalField(float, 0, "Camera-facing offset to prevent overlap with geometry.")
};
var EllipseParams = {
  /** Color of the primitive. If not specified, uses the parent primitives group `color`. */
  color: OptionalField(nullable(ColorT), null, "Color of the ellipse. If not specified, uses the parent primitives group `color`."),
  /** If true, ignores radius_minor/magnitude of the minor axis */
  as_circle: OptionalField(bool, false, "If true, ignores radius_minor/magnitude of the minor axis."),
  /** ellipse center. */
  center: RequiredField(PrimitivePositionT, "The center of the ellipse."),
  /** Major axis of this ellipse. */
  major_axis: OptionalField(nullable(Vector3), null, "Major axis of this ellipse."),
  /** Minor axis of this ellipse. */
  minor_axis: OptionalField(nullable(Vector3), null, "Minor axis of this ellipse."),
  /** Major axis endpoint. If specified, overrides major axis to be major_axis_endpoint - center. */
  major_axis_endpoint: OptionalField(nullable(PrimitivePositionT), null, "Major axis endpoint. If specified, overrides major axis to be major_axis_endpoint - center."),
  /** Minor axis endpoint. If specified, overrides minor axis to be minor_axis_endpoint - center. */
  minor_axis_endpoint: OptionalField(nullable(PrimitivePositionT), null, "Minor axis endpoint. If specified, overrides minor axis to be minor_axis_endpoint - center."),
  /** Radius of the major axis. If unset, the length of the major axis is used. */
  radius_major: OptionalField(nullable(float), null, "Radius of the major axis. If unset, the length of the major axis is used."),
  /** Radius of the minor axis. If unset, the length of the minor axis is used. */
  radius_minor: OptionalField(nullable(float), null, "Radius of the minor axis. If unset, the length of the minor axis is used."),
  /** Start of the arc. In radians */
  theta_start: OptionalField(float, 0, "Start of the arc. In radians"),
  /** End of the arc. In radians */
  theta_end: OptionalField(float, 2 * Math.PI, "End of the arc. In radians"),
  /** Tooltip to show when hovering over the tube. If not specified, uses the parent primitives group `tooltip`. */
  tooltip: OptionalField(nullable(str), null, "Tooltip to show when hovering over the tube. If not specified, uses the parent primitives group `tooltip`.")
};
var EllipsoidParams = {
  /** Color of the primitive. If not specified, uses the parent primitives group `color`. */
  color: OptionalField(nullable(ColorT), null, "Color of the ellipsoid. If not specified, uses the parent primitives group `color`."),
  /** Ellipsoid center. */
  center: RequiredField(PrimitivePositionT, "The center of the ellipsoid."),
  /** Major axis of this ellipsoid. */
  major_axis: OptionalField(nullable(Vector3), null, "Major axis of this ellipsoid."),
  /** Minor axis of this ellipsoid. */
  minor_axis: OptionalField(nullable(Vector3), null, "Minor axis of this ellipsoid."),
  /** Major axis endpoint. If specified, overrides major axis to be major_axis_endpoint - center. */
  major_axis_endpoint: OptionalField(nullable(PrimitivePositionT), null, "Major axis endpoint. If specified, overrides major axis to be major_axis_endpoint - center."),
  /** Minor axis endpoint. If specified, overrides minor axis to be minor_axis_endpoint - center. */
  minor_axis_endpoint: OptionalField(nullable(PrimitivePositionT), null, "Minor axis endpoint. If specified, overrides minor axis to be minor_axis_endpoint - center."),
  /** Radii of the ellipsoid along each axis. */
  radius: OptionalField(nullable(union2([Vector3, float])), null, "Radii of the ellipsoid along each axis."),
  /** Added to the radii of the ellipsoid along each axis. */
  radius_extent: OptionalField(nullable(union2([Vector3, float])), null, "Added to the radii of the ellipsoid along each axis."),
  /** Tooltip to show when hovering over the tube. If not specified, uses the parent primitives group `tooltip`. */
  tooltip: OptionalField(nullable(str), null, "Tooltip to show when hovering over the tube. If not specified, uses the parent primitives group `tooltip`.")
};
var BoxParams = {
  /** The center of the box. */
  center: RequiredField(PrimitivePositionT, "The center of the box."),
  /** The width, the height, and the depth of the box. Added to the bounding box determined by the center. */
  extent: OptionalField(nullable(Vector3), null, "The width, the height, and the depth of the box. Added to the bounding box determined by the center."),
  /** Determine whether to render the faces of the box. */
  show_faces: OptionalField(bool, true, "Determine whether to render the faces of the box."),
  /** Color of the box faces. */
  face_color: OptionalField(nullable(ColorT), null, "Color of the box faces."),
  /** Determine whether to render the edges of the box. */
  show_edges: OptionalField(bool, false, "Determine whether to render the edges of the box."),
  /** Radius of the box edges. In angstroms. */
  edge_radius: OptionalField(float, 0.1, "Radius of the box edges. In angstroms."),
  /** Color of the box edges. */
  edge_color: OptionalField(nullable(ColorT), null, "Color of the edges."),
  /** Tooltip to show when hovering over the tube. If not specified, uses the parent primitives group `tooltip`. */
  tooltip: OptionalField(nullable(str), null, "Tooltip to show when hovering over the tube. If not specified, uses the parent primitives group `tooltip`.")
};
var MVSPrimitiveParams = UnionParamsSchema("kind", "Kind of geometrical primitive", {
  "mesh": SimpleParamsSchema(MeshParams),
  "lines": SimpleParamsSchema(LinesParams),
  "tube": SimpleParamsSchema(TubeParams),
  "arrow": SimpleParamsSchema(ArrowParams),
  "distance_measurement": SimpleParamsSchema(DistanceMeasurementParams),
  "angle_measurement": SimpleParamsSchema(AngleMeasurementParams),
  "label": SimpleParamsSchema(PrimitiveLabelParams),
  "ellipse": SimpleParamsSchema(EllipseParams),
  "ellipsoid": SimpleParamsSchema(EllipsoidParams),
  "box": SimpleParamsSchema(BoxParams)
});

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/mvs/mvs-tree.js
var _DataFromUriParams = {
  /** URL of the annotation resource. */
  uri: RequiredField(str, "URL of the annotation resource."),
  /** Format of the annotation resource. */
  format: RequiredField(SchemaFormatT, "Format of the annotation resource."),
  /** Annotation schema defines what fields in the annotation will be taken into account. */
  schema: RequiredField(SchemaT, "Annotation schema defines what fields in the annotation will be taken into account."),
  /** Header of the CIF block to read annotation from (only applies when `format` is `"cif"` or `"bcif"`). If `null`, block is selected based on `block_index`. */
  block_header: OptionalField(nullable(str), null, 'Header of the CIF block to read annotation from (only applies when `format` is `"cif"` or `"bcif"`). If `null`, block is selected based on `block_index`.'),
  /** 0-based index of the CIF block to read annotation from (only applies when `format` is `"cif"` or `"bcif"` and `block_header` is `null`). */
  block_index: OptionalField(int, 0, '0-based index of the CIF block to read annotation from (only applies when `format` is `"cif"` or `"bcif"` and `block_header` is `null`).'),
  /** Name of the CIF category to read annotation from (only applies when `format` is `"cif"` or `"bcif"`). If `null`, the first category in the block is used. */
  category_name: OptionalField(nullable(str), null, 'Name of the CIF category to read annotation from (only applies when `format` is `"cif"` or `"bcif"`). If `null`, the first category in the block is used.'),
  /** Name of the column in CIF or field name (key) in JSON that contains the dependent variable (color/label/tooltip/component_id...). The default value is 'color'/'label'/'tooltip'/'component' depending on the node type */
  field_name: RequiredField(str, "Name of the column in CIF or field name (key) in JSON that contains the dependent variable (color/label/tooltip/component_id...).")
};
var _DataFromSourceParams = {
  /** Annotation schema defines what fields in the annotation will be taken into account. */
  schema: RequiredField(SchemaT, "Annotation schema defines what fields in the annotation will be taken into account."),
  /** Header of the CIF block to read annotation from. If `null`, block is selected based on `block_index`. */
  block_header: OptionalField(nullable(str), null, "Header of the CIF block to read annotation from. If `null`, block is selected based on `block_index`."),
  /** 0-based index of the CIF block to read annotation from (only applies when `block_header` is `null`). */
  block_index: OptionalField(int, 0, "0-based index of the CIF block to read annotation from (only applies when `block_header` is `null`)."),
  /** Name of the CIF category to read annotation from. If `null`, the first category in the block is used. */
  category_name: OptionalField(nullable(str), null, "Name of the CIF category to read annotation from. If `null`, the first category in the block is used."),
  /** Name of the column in CIF or field name (key) in JSON that contains the dependent variable (color/label/tooltip/component_id...). The default value is 'color'/'label'/'tooltip'/'component' depending on the node type */
  field_name: RequiredField(str, "Name of the column in CIF or field name (key) in JSON that contains the dependent variable (color/label/tooltip/component_id...).")
};
var DefaultColor = "white";
var MVSTreeSchema = TreeSchema({
  rootKind: "root",
  nodes: {
    /** Auxiliary node kind that only appears as the tree root. */
    root: {
      description: "Auxiliary node kind that only appears as the tree root.",
      parent: [],
      params: SimpleParamsSchema({})
    },
    /** This node instructs to retrieve a data resource. */
    download: {
      description: "This node instructs to retrieve a data resource.",
      parent: ["root"],
      params: SimpleParamsSchema({
        /** URL of the data resource. */
        url: RequiredField(str, "URL of the data resource.")
      })
    },
    /** This node instructs to parse a data resource. */
    parse: {
      description: "This node instructs to parse a data resource.",
      parent: ["download"],
      params: SimpleParamsSchema({
        /** Format of the input data resource. */
        format: RequiredField(ParseFormatT, "Format of the input data resource.")
      })
    },
    /** This node instructs to create a structure from a parsed data resource. "Structure" refers to an internal representation of molecular coordinates without any visual representation. */
    structure: {
      description: 'This node instructs to create a structure from a parsed data resource. "Structure" refers to an internal representation of molecular coordinates without any visual representation.',
      parent: ["parse"],
      params: SimpleParamsSchema({
        /** Type of structure to be created (`"model"` for original model coordinates, `"assembly"` for assembly structure, `"symmetry"` for a set of crystal unit cells based on Miller indices, `"symmetry_mates"` for a set of asymmetric units within a radius from the original model). */
        type: RequiredField(StructureTypeT, 'Type of structure to be created (`"model"` for original model coordinates, `"assembly"` for assembly structure, `"symmetry"` for a set of crystal unit cells based on Miller indices, `"symmetry_mates"` for a set of asymmetric units within a radius from the original model).'),
        /** Header of the CIF block to read coordinates from (only applies when the input data are from CIF or BinaryCIF). If `null`, block is selected based on `block_index`. */
        block_header: OptionalField(nullable(str), null, "Header of the CIF block to read coordinates from (only applies when the input data are from CIF or BinaryCIF). If `null`, block is selected based on `block_index`."),
        /** 0-based index of the CIF block to read coordinates from (only applies when the input data are from CIF or BinaryCIF and `block_header` is `null`). */
        block_index: OptionalField(int, 0, "0-based index of the CIF block to read coordinates from (only applies when the input data are from CIF or BinaryCIF and `block_header` is `null`)."),
        /** 0-based index of model in case the input data contain multiple models. */
        model_index: OptionalField(int, 0, "0-based index of model in case the input data contain multiple models."),
        /** Assembly identifier (only applies when `kind` is `"assembly"`). If `null`, the first assembly is selected. */
        assembly_id: OptionalField(nullable(str), null, 'Assembly identifier (only applies when `kind` is `"assembly"`). If `null`, the first assembly is selected.'),
        /** Distance (in Angstroms) from the original model in which asymmetric units should be included (only applies when `kind` is `"symmetry_mates"`). */
        radius: OptionalField(float, 5, 'Distance (in Angstroms) from the original model in which asymmetric units should be included (only applies when `kind` is `"symmetry_mates"`).'),
        /** Miller indices of the bottom-left unit cell to be included (only applies when `kind` is `"symmetry"`). */
        ijk_min: OptionalField(tuple3([int, int, int]), [-1, -1, -1], 'Miller indices of the bottom-left unit cell to be included (only applies when `kind` is `"symmetry"`).'),
        /** Miller indices of the top-right unit cell to be included (only applies when `kind` is `"symmetry"`). */
        ijk_max: OptionalField(tuple3([int, int, int]), [1, 1, 1], 'Miller indices of the top-right unit cell to be included (only applies when `kind` is `"symmetry"`).')
      })
    },
    /** This node instructs to rotate and/or translate structure coordinates. */
    transform: {
      description: "This node instructs to rotate and/or translate structure coordinates.",
      parent: ["structure"],
      params: SimpleParamsSchema({
        /** Rotation matrix (3x3 matrix flattened in column major format (j*3+i indexing), this is equivalent to Fortran-order in numpy). This matrix will multiply the structure coordinates from the left. The default value is the identity matrix (corresponds to no rotation). */
        rotation: OptionalField(Matrix, [1, 0, 0, 0, 1, 0, 0, 0, 1], "Rotation matrix (3x3 matrix flattened in column major format (j*3+i indexing), this is equivalent to Fortran-order in numpy). This matrix will multiply the structure coordinates from the left. The default value is the identity matrix (corresponds to no rotation)."),
        /** Translation vector, applied to the structure coordinates after rotation. The default value is the zero vector (corresponds to no translation). */
        translation: OptionalField(Vector3, [0, 0, 0], "Translation vector, applied to the structure coordinates after rotation. The default value is the zero vector (corresponds to no translation).")
      })
    },
    /** This node instructs to create a component (i.e. a subset of the parent structure). */
    component: {
      description: "This node instructs to create a component (i.e. a subset of the parent structure).",
      parent: ["structure"],
      params: SimpleParamsSchema({
        /** Defines what part of the parent structure should be included in this component. */
        selector: RequiredField(union2([ComponentSelectorT, ComponentExpressionT, list(ComponentExpressionT)]), "Defines what part of the parent structure should be included in this component.")
      })
    },
    /** This node instructs to create a component defined by an external annotation resource. */
    component_from_uri: {
      description: "This node instructs to create a component defined by an external annotation resource.",
      parent: ["structure"],
      params: SimpleParamsSchema({
        ..._DataFromUriParams,
        /** Name of the column in CIF or field name (key) in JSON that contains the component identifier. */
        field_name: OptionalField(str, "component", "Name of the column in CIF or field name (key) in JSON that contains the component identifier."),
        /** List of component identifiers (i.e. values in the field given by `field_name`) which should be included in this component. If `null`, component identifiers are ignored (all annotation rows are included), and `field_name` field can be dropped from the annotation. */
        field_values: OptionalField(nullable(list(str)), null, "List of component identifiers (i.e. values in the field given by `field_name`) which should be included in this component. If `null`, component identifiers are ignored (all annotation rows are included), and `field_name` field can be dropped from the annotation.")
      })
    },
    /** This node instructs to create a component defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file. */
    component_from_source: {
      description: "This node instructs to create a component defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file.",
      parent: ["structure"],
      params: SimpleParamsSchema({
        ..._DataFromSourceParams,
        /** Name of the column in CIF or field name (key) in JSON that contains the component identifier. */
        field_name: OptionalField(str, "component", "Name of the column in CIF or field name (key) in JSON that contains the component identifier."),
        /** List of component identifiers (i.e. values in the field given by `field_name`) which should be included in this component. If `null`, component identifiers are ignored (all annotation rows are included), and `field_name` field can be dropped from the annotation. */
        field_values: OptionalField(nullable(list(str)), null, "List of component identifiers (i.e. values in the field given by `field_name`) which should be included in this component. If `null`, component identifiers are ignored (all annotation rows are included), and `field_name` field can be dropped from the annotation.")
      })
    },
    /** This node instructs to create a visual representation of a component. */
    representation: {
      description: "This node instructs to create a visual representation of a component.",
      parent: ["component", "component_from_uri", "component_from_source"],
      params: MVSRepresentationParams
    },
    /** This node instructs to create a volume from a parsed data resource. "Volume" refers to an internal representation of volumetric data without any visual representation. */
    volume: {
      description: 'This node instructs to create a volume from a parsed data resource. "Volume" refers to an internal representation of volumetric data without any visual representation.',
      parent: ["parse"],
      params: SimpleParamsSchema({
        channel_id: OptionalField(nullable(str), null, "Channel identifier (only applies when the input data contain multiple channels).")
      })
    },
    /** This node instructs to create a visual representation of a volume. */
    volume_representation: {
      description: "This node instructs to create a visual representation of a volume.",
      parent: ["volume"],
      params: MVSVolumeRepresentationParams
    },
    /** This node instructs to apply color to a visual representation. */
    color: {
      description: "This node instructs to apply color to a visual representation.",
      parent: ["representation", "volume_representation"],
      params: SimpleParamsSchema({
        /** Color to apply to the representation. Can be either an X11 color name (e.g. `"red"`) or a hexadecimal code (e.g. `"#FF0011"`). */
        color: OptionalField(ColorT, DefaultColor, 'Color to apply to the representation. Can be either an X11 color name (e.g. `"red"`) or a hexadecimal code (e.g. `"#FF0011"`).'),
        /** Defines to what part of the representation this color should be applied. */
        selector: OptionalField(union2([ComponentSelectorT, ComponentExpressionT, list(ComponentExpressionT)]), "all", "Defines to what part of the representation this color should be applied.")
      })
    },
    /** This node instructs to apply colors to a visual representation. The colors are defined by an external annotation resource. */
    color_from_uri: {
      description: "This node instructs to apply colors to a visual representation. The colors are defined by an external annotation resource.",
      parent: ["representation"],
      params: SimpleParamsSchema({
        ..._DataFromUriParams,
        /** Name of the column in CIF or field name (key) in JSON that contains the color. */
        field_name: OptionalField(str, "color", "Name of the column in CIF or field name (key) in JSON that contains the color.")
      })
    },
    /** This node instructs to apply colors to a visual representation. The colors are defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file. */
    color_from_source: {
      description: "This node instructs to apply colors to a visual representation. The colors are defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file.",
      parent: ["representation"],
      params: SimpleParamsSchema({
        ..._DataFromSourceParams,
        /** Name of the column in CIF or field name (key) in JSON that contains the color. */
        field_name: OptionalField(str, "color", "Name of the column in CIF or field name (key) in JSON that contains the color.")
      })
    },
    /** This node instructs to apply opacity/transparency to a visual representation. */
    opacity: {
      description: "This node instructs to apply opacity/transparency to a visual representation.",
      parent: ["representation", "volume_representation"],
      params: SimpleParamsSchema({
        /** Opacity of a representation. 0.0: fully transparent, 1.0: fully opaque. */
        opacity: RequiredField(float, "Opacity of a representation. 0.0: fully transparent, 1.0: fully opaque.")
      })
    },
    /** This node instructs to add a label (textual visual representation) to a component. */
    label: {
      description: "This node instructs to add a label (textual visual representation) to a component.",
      parent: ["component", "component_from_uri", "component_from_source"],
      params: SimpleParamsSchema({
        /** Content of the shown label. */
        text: RequiredField(str, "Content of the shown label.")
      })
    },
    /** This node instructs to add labels (textual visual representations) to parts of a structure. The labels are defined by an external annotation resource. */
    label_from_uri: {
      description: "This node instructs to add labels (textual visual representations) to parts of a structure. The labels are defined by an external annotation resource.",
      parent: ["structure"],
      params: SimpleParamsSchema({
        ..._DataFromUriParams,
        /** Name of the column in CIF or field name (key) in JSON that contains the label text. */
        field_name: OptionalField(str, "label", "Name of the column in CIF or field name (key) in JSON that contains the label text.")
      })
    },
    /** This node instructs to add labels (textual visual representations) to parts of a structure. The labels are defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file. */
    label_from_source: {
      description: "This node instructs to add labels (textual visual representations) to parts of a structure. The labels are defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file.",
      parent: ["structure"],
      params: SimpleParamsSchema({
        ..._DataFromSourceParams,
        /** Name of the column in CIF or field name (key) in JSON that contains the label text. */
        field_name: OptionalField(str, "label", "Name of the column in CIF or field name (key) in JSON that contains the label text.")
      })
    },
    /** This node instructs to add a tooltip to a component. "Tooltip" is a text which is not a part of the visualization but should be presented to the users when they interact with the component (typically, the tooltip will be shown somewhere on the screen when the user hovers over a visual representation of the component). */
    tooltip: {
      description: 'This node instructs to add a tooltip to a component. "Tooltip" is a text which is not a part of the visualization but should be presented to the users when they interact with the component (typically, the tooltip will be shown somewhere on the screen when the user hovers over a visual representation of the component).',
      parent: ["component", "component_from_uri", "component_from_source"],
      params: SimpleParamsSchema({
        /** Content of the shown tooltip. */
        text: RequiredField(str, "Content of the shown tooltip.")
      })
    },
    /** This node instructs to add tooltips to parts of a structure. The tooltips are defined by an external annotation resource. */
    tooltip_from_uri: {
      description: "This node instructs to add tooltips to parts of a structure. The tooltips are defined by an external annotation resource.",
      parent: ["structure"],
      params: SimpleParamsSchema({
        ..._DataFromUriParams,
        /** Name of the column in CIF or field name (key) in JSON that contains the tooltip text. */
        field_name: OptionalField(str, "tooltip", "Name of the column in CIF or field name (key) in JSON that contains the tooltip text.")
      })
    },
    /** This node instructs to add tooltips to parts of a structure. The tooltips are defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file. */
    tooltip_from_source: {
      description: "This node instructs to add tooltips to parts of a structure. The tooltips are defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file.",
      parent: ["structure"],
      params: SimpleParamsSchema({
        ..._DataFromSourceParams,
        /** Name of the column in CIF or field name (key) in JSON that contains the tooltip text. */
        field_name: OptionalField(str, "tooltip", "Name of the column in CIF or field name (key) in JSON that contains the tooltip text.")
      })
    },
    /** This node instructs to set the camera focus to a component (zoom in). */
    focus: {
      description: "This node instructs to set the camera focus to a component (zoom in).",
      parent: ["root", "component", "component_from_uri", "component_from_source", "primitives", "primitives_from_uri", "volume", "volume_representation"],
      params: SimpleParamsSchema({
        /** Vector describing the direction of the view (camera position -> focused target). */
        direction: OptionalField(Vector3, [0, 0, -1], "Vector describing the direction of the view (camera position -> focused target)."),
        /** Vector which will be aligned with the screen Y axis. */
        up: OptionalField(Vector3, [0, 1, 0], "Vector which will be aligned with the screen Y axis."),
        /** Radius of the focused sphere (overrides `radius_factor` and `radius_extra`. */
        radius: OptionalField(nullable(float), null, "Radius of the focused sphere (overrides `radius_factor` and `radius_extra`)."),
        /** Radius of the focused sphere relative to the radius of parent component (default: 1). Focused radius = component_radius * radius_factor + radius_extent. */
        radius_factor: OptionalField(float, 1, "Radius of the focused sphere relative to the radius of parent component (default: 1). Focused radius = component_radius * radius_factor + radius_extent."),
        /** Addition to the radius of the focused sphere, if computed from the radius of parent component (default: 0). Focused radius = component_radius * radius_factor + radius_extent. */
        radius_extent: OptionalField(float, 0, "Addition to the radius of the focused sphere, if computed from the radius of parent component (default: 0). Focused radius = component_radius * radius_factor + radius_extent.")
      })
    },
    /** This node instructs to set the camera position and orientation. */
    camera: {
      description: "This node instructs to set the camera position and orientation.",
      parent: ["root"],
      params: SimpleParamsSchema({
        /** Coordinates of the point in space at which the camera is pointing. */
        target: RequiredField(Vector3, "Coordinates of the point in space at which the camera is pointing."),
        /** Coordinates of the camera. */
        position: RequiredField(Vector3, "Coordinates of the camera."),
        /** Vector which will be aligned with the screen Y axis. */
        up: OptionalField(Vector3, [0, 1, 0], "Vector which will be aligned with the screen Y axis.")
      })
    },
    /** This node sets canvas properties. */
    canvas: {
      description: "This node sets canvas properties.",
      parent: ["root"],
      params: SimpleParamsSchema({
        /** Color of the canvas background. Can be either an X11 color name (e.g. `"red"`) or a hexadecimal code (e.g. `"#FF0011"`). */
        background_color: RequiredField(ColorT, 'Color of the canvas background. Can be either an X11 color name (e.g. `"red"`) or a hexadecimal code (e.g. `"#FF0011"`).')
      })
    },
    primitives: {
      description: "This node groups a list of geometrical primitives",
      parent: ["structure", "root"],
      params: SimpleParamsSchema({
        /** Default color for primitives in this group. */
        color: OptionalField(ColorT, "white", "Default color for primitives in this group."),
        /** Default label color for primitives in this group. */
        label_color: OptionalField(ColorT, "white", "Default label color for primitives in this group."),
        /** Default tooltip for primitives in this group. */
        tooltip: OptionalField(nullable(str), null, "Default tooltip for primitives in this group."),
        /** Opacity of primitive geometry in this group. */
        opacity: OptionalField(float, 1, "Opacity of primitive geometry in this group."),
        /** Opacity of primitive labels in this group. */
        label_opacity: OptionalField(float, 1, "Opacity of primitive labels in this group."),
        /** Instances of this primitive group defined as 4x4 column major (j * 4 + i indexing) transformation matrices. */
        instances: OptionalField(nullable(list(Matrix)), null, "Instances of this primitive group defined as 4x4 column major (j * 4 + i indexing) transformation matrices.")
      })
    },
    primitives_from_uri: {
      description: "This node loads a list of primitives from URI",
      parent: ["structure", "root"],
      params: SimpleParamsSchema({
        /** Location of the resource. */
        uri: RequiredField(str, "Location of the resource."),
        /** Format of the data. */
        format: RequiredField(literal("mvs-node-json"), "Format of the data."),
        /** List of nodes the data are referencing. */
        references: OptionalField(StrList, [], "List of nodes the data are referencing.")
      })
    },
    primitive: {
      description: "This node represents a geometrical primitive",
      parent: ["primitives"],
      params: MVSPrimitiveParams
    }
  }
});
var FullMVSTreeSchema = TreeSchemaWithAllRequired(MVSTreeSchema);

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/mvs-data.js
var GlobalMetadata = {
  create(metadata) {
    return {
      ...metadata,
      version: `${MVSData.SupportedVersion}`,
      timestamp: utcNowISO()
    };
  }
};
var MVSData = {
  /** Currently supported major version of MolViewSpec format (e.g. 1 for version '1.0.8') */
  SupportedVersion: 1,
  /** Parse MVSJ (MolViewSpec-JSON) format to `MVSData`. Does not include any validation. */
  fromMVSJ(mvsjString) {
    var _a, _b;
    const result = JSON.parse(mvsjString);
    const major = majorVersion((_a = result === null || result === void 0 ? void 0 : result.metadata) === null || _a === void 0 ? void 0 : _a.version);
    if (major === void 0) {
      console.error("Loaded MVS does not contain valid version info.");
    } else if (major > ((_b = majorVersion(MVSData.SupportedVersion)) !== null && _b !== void 0 ? _b : 0)) {
      console.warn(`Loaded MVS is of higher version (${result.metadata.version}) than currently supported version (${MVSData.SupportedVersion}). Some features may not work as expected.`);
    }
    return result;
  },
  /** Encode `MVSData` to MVSJ (MolViewSpec-JSON) string. Use `space` parameter to control formatting (as with `JSON.stringify`). */
  toMVSJ(mvsData, space) {
    return JSON.stringify(mvsData, void 0, space);
  },
  /** Validate `MVSData`. Return `true` if OK; `false` if not OK.
   * If `options.noExtra` is true, presence of any extra node parameters is treated as an issue. */
  isValid(mvsData, options = {}) {
    return MVSData.validationIssues(mvsData, options) === void 0;
  },
  /** Validate `MVSData`. Return `undefined` if OK; list of issues if not OK.
   * If `options.noExtra` is true, presence of any extra node parameters is treated as an issue. */
  validationIssues(mvsData, options = {}) {
    var _a;
    const version = (_a = mvsData === null || mvsData === void 0 ? void 0 : mvsData.metadata) === null || _a === void 0 ? void 0 : _a.version;
    if (typeof version !== "string")
      return [`MVSData.metadata.version must be a string, not ${typeof version}: ${version}`];
    if (mvsData.kind === "single" || mvsData.kind === void 0) {
      return snapshotValidationIssues(mvsData, options);
    } else if (mvsData.kind === "multiple") {
      if (mvsData.snapshots === void 0)
        return [`"snapshots" missing in MVS`];
      const issues = [];
      for (const snapshot of mvsData.snapshots) {
        const snapshotIssues = snapshotValidationIssues(snapshot, options);
        if (snapshotIssues)
          issues.push(...snapshotIssues);
      }
      if (issues.length > 0)
        return issues;
      else
        return void 0;
    } else {
      return [`MVSData.kind must be 'single' or 'multiple', not ${mvsData.kind}`];
    }
  },
  /** Return a human-friendly textual representation of `mvsData`. */
  toPrettyString(mvsData) {
    const type2 = mvsData.kind === "multiple" ? "multiple states" : "single state";
    const title = mvsData.metadata.title !== void 0 ? ` "${mvsData.metadata.title}"` : "";
    const trees = mvsData.kind === "multiple" ? mvsData.snapshots.map((s, i) => `[Snapshot #${i}]
${treeToString(s.root)}`).join("\n") : treeToString(mvsData.root);
    return `MolViewSpec ${type2}${title} (version ${mvsData.metadata.version}, created ${mvsData.metadata.timestamp}):
${trees}`;
  },
  /** Create a new MolViewSpec builder containing only a root node. Example of MVS builder usage:
   *
   * ```
   * const builder = MVSData.createBuilder();
   * builder.canvas({ background_color: 'white' });
   * const struct = builder.download({ url: 'https://www.ebi.ac.uk/pdbe/entry-files/download/1og2_updated.cif' }).parse({ format: 'mmcif' }).modelStructure();
   * struct.component().representation().color({ color: '#3050F8' });
   * console.log(MVSData.toPrettyString(builder.getState()));
   * ```
   */
  createBuilder() {
    return createMVSBuilder();
  },
  /** Create a multi-state MVS data from a list of snapshots. */
  createMultistate(snapshots, metadata) {
    return {
      kind: "multiple",
      snapshots: [...snapshots],
      metadata: GlobalMetadata.create(metadata)
    };
  },
  /** Convert single-state MVSData into multi-state MVSData with one state. */
  stateToStates(state) {
    return {
      kind: "multiple",
      metadata: state.metadata,
      snapshots: [{
        metadata: {
          title: state.metadata.title,
          description: state.metadata.description,
          description_format: state.metadata.description_format,
          key: void 0,
          linger_duration_ms: 1e3,
          transition_duration_ms: 250
        },
        root: state.root
      }]
    };
  }
};
function majorVersion(semanticVersion) {
  if (typeof semanticVersion === "string")
    return parseInt(semanticVersion.split(".")[0]);
  if (typeof semanticVersion === "number")
    return Math.floor(semanticVersion);
  console.error(`Version should be a string, not ${typeof semanticVersion}: ${semanticVersion}`);
  return void 0;
}
function snapshotValidationIssues(snapshot, options = {}) {
  if (snapshot.root === void 0)
    return [`"root" missing in snapshot`];
  return treeValidationIssues(MVSTreeSchema, snapshot.root, options);
}
function utcNowISO() {
  return (/* @__PURE__ */ new Date()).toISOString();
}

// ../node_modules/.pnpm/molstar@4.18.0_@types+react@18.3.27_fp-ts@2.16.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/molstar/lib/extensions/mvs/tree/mvs/mvs-builder.js
function createMVSBuilder(params = {}) {
  return new Root(params);
}
var _Base = class {
  constructor(_root, _node) {
    this._root = _root;
    this._node = _node;
  }
  /** Create a new node, append as child to current _node, and return the new node */
  addChild(kind, params_) {
    var _a;
    var _b;
    const { params, custom, ref } = splitParams(params_);
    const node = {
      kind,
      params,
      custom,
      ref
    };
    (_a = (_b = this._node).children) !== null && _a !== void 0 ? _a : _b.children = [];
    this._node.children.push(node);
    return node;
  }
};
var Root = class extends _Base {
  constructor(params_) {
    const { custom, ref } = params_;
    const node = { kind: "root", custom, ref };
    super(void 0, node);
    this.focus = bindMethod(this, FocusMixinImpl, "focus");
    this.primitives = bindMethod(this, PrimitivesMixinImpl, "primitives");
    this.primitives_from_uri = bindMethod(this, PrimitivesMixinImpl, "primitives_from_uri");
    this._root = this;
  }
  /** Return the current state of the builder as object in MVS format. */
  getState(metadata) {
    return {
      root: deepClone(this._node),
      metadata: GlobalMetadata.create(metadata)
    };
  }
  // omitting `saveState`, filesystem operations are responsibility of the caller code (platform-dependent)
  /** Return the current state of the builder as a snapshot object to be used in multi-state . */
  getSnapshot(metadata) {
    return {
      root: deepClone(this._node),
      metadata: { ...metadata }
    };
  }
  /** Add a 'camera' node and return builder pointing to the root. 'camera' node instructs to set the camera position and orientation. */
  camera(params) {
    this.addChild("camera", params);
    return this;
  }
  /** Add a 'canvas' node and return builder pointing to the root. 'canvas' node sets canvas properties. */
  canvas(params) {
    this.addChild("canvas", params);
    return this;
  }
  /** Add a 'download' node and return builder pointing to it. 'download' node instructs to retrieve a data resource. */
  download(params) {
    return new Download(this._root, this.addChild("download", params));
  }
};
var Download = class extends _Base {
  /** Add a 'parse' node and return builder pointing to it. 'parse' node instructs to parse a data resource. */
  parse(params) {
    return new Parse(this._root, this.addChild("parse", params));
  }
};
var StructureParamsSubsets = {
  model: ["block_header", "block_index", "model_index"],
  assembly: ["block_header", "block_index", "model_index", "assembly_id"],
  symmetry: ["block_header", "block_index", "model_index", "ijk_min", "ijk_max"],
  symmetry_mates: ["block_header", "block_index", "model_index", "radius"]
};
var Parse = class extends _Base {
  /** Add a 'structure' node representing a "model structure", i.e. includes all coordinates from the original model without applying any transformations.
   * Return builder pointing to the new node. */
  modelStructure(params = {}) {
    return new Structure(this._root, this.addChild("structure", {
      type: "model",
      ...pickObjectKeys(params, [...StructureParamsSubsets.model]),
      custom: params.custom,
      ref: params.ref
    }));
  }
  /** Add a 'structure' node representing an "assembly structure", i.e. may apply filters and symmetry operators to the original model coordinates.
   * Return builder pointing to the new node. */
  assemblyStructure(params = {}) {
    return new Structure(this._root, this.addChild("structure", {
      type: "assembly",
      ...pickObjectKeys(params, StructureParamsSubsets.assembly),
      custom: params.custom,
      ref: params.ref
    }));
  }
  /** Add a 'structure' node representing a "symmetry structure", i.e. applies symmetry operators to build crystal unit cells within given Miller indices.
   * Return builder pointing to the new node. */
  symmetryStructure(params = {}) {
    return new Structure(this._root, this.addChild("structure", {
      type: "symmetry",
      ...pickObjectKeys(params, StructureParamsSubsets.symmetry),
      custom: params.custom,
      ref: params.ref
    }));
  }
  /** Add a 'structure' node representing a "symmetry mates structure", i.e. applies symmetry operators to build asymmetric units within a radius from the original model.
   * Return builder pointing to the new node. */
  symmetryMatesStructure(params = {}) {
    return new Structure(this._root, this.addChild("structure", {
      type: "symmetry_mates",
      ...pickObjectKeys(params, StructureParamsSubsets.symmetry_mates),
      custom: params.custom,
      ref: params.ref
    }));
  }
  /** Add a 'volume' node representing raw volume data */
  volume(params = {}) {
    return new Volume(this._root, this.addChild("volume", params));
  }
};
var Structure = class extends _Base {
  constructor() {
    super(...arguments);
    this.primitives = bindMethod(this, PrimitivesMixinImpl, "primitives");
    this.primitives_from_uri = bindMethod(this, PrimitivesMixinImpl, "primitives_from_uri");
  }
  /** Add a 'component' node and return builder pointing to it. 'component' node instructs to create a component (i.e. a subset of the parent structure). */
  component(params = {}) {
    var _a;
    const fullParams = { ...params, selector: (_a = params.selector) !== null && _a !== void 0 ? _a : "all" };
    return new Component(this._root, this.addChild("component", fullParams));
  }
  /** Add a 'component_from_uri' node and return builder pointing to it. 'component_from_uri' node instructs to create a component defined by an external annotation resource. */
  componentFromUri(params) {
    return new Component(this._root, this.addChild("component_from_uri", params));
  }
  /** Add a 'component_from_source' node and return builder pointing to it. 'component_from_source' node instructs to create a component defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file. */
  componentFromSource(params) {
    return new Component(this._root, this.addChild("component_from_source", params));
  }
  /** Add a 'label_from_uri' node and return builder pointing back to the structure node. 'label_from_uri' node instructs to add labels (textual visual representations) to parts of a structure. The labels are defined by an external annotation resource. */
  labelFromUri(params) {
    this.addChild("label_from_uri", params);
    return this;
  }
  /** Add a 'label_from_source' node and return builder pointing back to the structure node. 'label_from_source' node instructs to add labels (textual visual representations) to parts of a structure. The labels are defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file. */
  labelFromSource(params) {
    this.addChild("label_from_source", params);
    return this;
  }
  /** Add a 'tooltip_from_uri' node and return builder pointing back to the structure node. 'tooltip_from_uri' node instructs to add tooltips to parts of a structure. The tooltips are defined by an external annotation resource. */
  tooltipFromUri(params) {
    this.addChild("tooltip_from_uri", params);
    return this;
  }
  /** Add a 'tooltip_from_source' node and return builder pointing back to the structure node. 'tooltip_from_source' node instructs to add tooltips to parts of a structure. The tooltips are defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file. */
  tooltipFromSource(params) {
    this.addChild("tooltip_from_source", params);
    return this;
  }
  /** Add a 'transform' node and return builder pointing back to the structure node. 'transform' node instructs to rotate and/or translate structure coordinates. */
  transform(params = {}) {
    if (params.rotation && params.rotation.length !== 9) {
      throw new Error("ValueError: `rotation` parameter must be an array of 9 numbers");
    }
    this.addChild("transform", params);
    return this;
  }
};
var Component = class extends _Base {
  constructor() {
    super(...arguments);
    this.focus = bindMethod(this, FocusMixinImpl, "focus");
  }
  /** Add a 'representation' node and return builder pointing to it. 'representation' node instructs to create a visual representation of a component. */
  representation(params = {}) {
    var _a;
    const fullParams = { ...params, type: (_a = params.type) !== null && _a !== void 0 ? _a : "cartoon" };
    return new Representation(this._root, this.addChild("representation", fullParams));
  }
  /** Add a 'label' node and return builder pointing back to the component node. 'label' node instructs to add a label (textual visual representation) to a component. */
  label(params) {
    this.addChild("label", params);
    return this;
  }
  /** Add a 'tooltip' node and return builder pointing back to the component node. 'tooltip' node instructs to add a text which is not a part of the visualization but should be presented to the users when they interact with the component (typically, the tooltip will be shown somewhere on the screen when the user hovers over a visual representation of the component). */
  tooltip(params) {
    this.addChild("tooltip", params);
    return this;
  }
};
var Representation = class extends _Base {
  /** Add a 'color' node and return builder pointing back to the representation node. 'color' node instructs to apply color to a visual representation. */
  color(params) {
    this.addChild("color", params);
    return this;
  }
  /** Add a 'color_from_uri' node and return builder pointing back to the representation node. 'color_from_uri' node instructs to apply colors to a visual representation. The colors are defined by an external annotation resource. */
  colorFromUri(params) {
    this.addChild("color_from_uri", params);
    return this;
  }
  /** Add a 'color_from_source' node and return builder pointing back to the representation node. 'color_from_source' node instructs to apply colors to a visual representation. The colors are defined by an annotation resource included in the same file this structure was loaded from. Only applicable if the structure was loaded from an mmCIF or BinaryCIF file. */
  colorFromSource(params) {
    this.addChild("color_from_source", params);
    return this;
  }
  /** Add an 'opacity' node and return builder pointing back to the representation node. 'opacity' node instructs to customize opacity/transparency of a visual representation. */
  opacity(params) {
    this.addChild("opacity", params);
    return this;
  }
};
var Volume = class extends _Base {
  constructor() {
    super(...arguments);
    this.focus = bindMethod(this, FocusMixinImpl, "focus");
  }
  /** Add a 'representation' node and return builder pointing to it. 'representation' node instructs to create a visual representation of a component. */
  representation(params = {}) {
    var _a;
    const fullParams = { ...params, type: (_a = params.type) !== null && _a !== void 0 ? _a : "isosurface" };
    return new VolumeRepresentation(this._root, this.addChild("volume_representation", fullParams));
  }
};
var VolumeRepresentation = class extends _Base {
  constructor() {
    super(...arguments);
    this.focus = bindMethod(this, FocusMixinImpl, "focus");
  }
  /** Add a 'color' node and return builder pointing back to the representation node. 'color' node instructs to apply color to a visual representation. */
  color(params) {
    this.addChild("color", params);
    return this;
  }
  /** Add an 'opacity' node and return builder pointing back to the representation node. 'opacity' node instructs to customize opacity/transparency of a visual representation. */
  opacity(params) {
    this.addChild("opacity", params);
    return this;
  }
};
var Primitives = class extends _Base {
  constructor() {
    super(...arguments);
    this.focus = bindMethod(this, FocusMixinImpl, "focus");
  }
  /** Construct custom meshes/shapes in a low-level fashion by providing vertices and indices. */
  mesh(params) {
    this.addChild("primitive", { kind: "mesh", ...params });
    return this;
  }
  /** Construct custom set of lines in a low-level fashion by providing vertices and indices. */
  lines(params) {
    this.addChild("primitive", { kind: "lines", ...params });
    return this;
  }
  /** Defines a tube (3D cylinder), connecting a start and an end point. */
  tube(params) {
    this.addChild("primitive", { kind: "tube", ...params });
    return this;
  }
  /** Defines an arrow. */
  arrow(params) {
    this.addChild("primitive", { kind: "arrow", ...params });
    return this;
  }
  /** Defines a tube, connecting a start and an end point, with label containing distance between start and end. */
  distance(params) {
    this.addChild("primitive", { kind: "distance_measurement", ...params });
    return this;
  }
  /** Defines a label. */
  label(params) {
    this.addChild("primitive", { kind: "label", ...params });
    return this;
  }
  /** Defines an ellipse. */
  ellipse(params) {
    this.addChild("primitive", { kind: "ellipse", ...params });
    return this;
  }
  /** Defines an ellipsoid */
  ellipsoid(params) {
    this.addChild("primitive", { kind: "ellipsoid", ...params });
    return this;
  }
  /** Defines a box. */
  box(params) {
    this.addChild("primitive", { kind: "box", ...params });
    return this;
  }
};
var PrimitivesFromUri = class extends _Base {
  constructor() {
    super(...arguments);
    this.focus = bindMethod(this, FocusMixinImpl, "focus");
  }
};
function bindMethod(thisObj, mixin, methodName) {
  return mixin.prototype[methodName].bind(thisObj);
}
var FocusMixinImpl = class extends _Base {
  focus(params = {}) {
    this.addChild("focus", params);
    return this;
  }
};
var PrimitivesMixinImpl = class extends _Base {
  primitives(params = {}) {
    return new Primitives(this._root, this.addChild("primitives", params));
  }
  primitives_from_uri(params) {
    return new PrimitivesFromUri(this._root, this.addChild("primitives_from_uri", params));
  }
};
function builderDemo() {
  const builder = createMVSBuilder();
  builder.canvas({ background_color: "white" });
  const struct = builder.download({ url: "https://www.ebi.ac.uk/pdbe/entry-files/download/1og2_updated.cif" }).parse({ format: "mmcif" }).modelStructure();
  struct.component().representation().color({ color: "white" });
  struct.component({ selector: "ligand" }).representation({ type: "ball_and_stick", custom: { repr_quality: "high" }, ref: "Ligand" }).color({ color: "#555555" }).color({ selector: { type_symbol: "N" }, color: "#3050F8" }).color({ selector: { type_symbol: "O" }, color: "#FF0D0D" }).color({ selector: { type_symbol: "S" }, color: "#FFFF30" }).color({ selector: { type_symbol: "FE" }, color: "#E06633" });
  builder.download({ url: "https://www.ebi.ac.uk/pdbe/entry-files/download/1og5_updated.cif" }).parse({ format: "mmcif" }).assemblyStructure({ assembly_id: "1" }).component().representation().color({ color: "cyan" });
  builder.download({ url: "https://www.ebi.ac.uk/pdbe/entry-files/download/1og5_updated.cif" }).parse({ format: "mmcif" }).assemblyStructure({ assembly_id: "2" }).component().representation().color({ color: "blue" });
  const cif = builder.download({ url: "https://www.ebi.ac.uk/pdbe/entry-files/download/1wrf_updated.cif" }).parse({ format: "mmcif" });
  cif.modelStructure({ model_index: 0 }).component().representation().color({ color: "#CC0000" });
  cif.modelStructure({ model_index: 1 }).component().representation().color({ color: "#EE7700" });
  cif.modelStructure({ model_index: 2 }).component().representation().color({ color: "#FFFF00" });
  cif.modelStructure({ model_index: 0 }).transform({ translation: [30, 0, 0] }).component().representation().color({ color: "#ff88bb" });
  cif.modelStructure({ model_index: 0 }).transform({ translation: [60, 0, 0], rotation: [0, 1, 0, -1, 0, 0, 0, 0, 1] }).component().representation().color({ color: "#aa0077" });
  return builder.getState();
}
function splitParams(params_custom_ref) {
  const { custom, ref, ...params } = params_custom_ref;
  return { params, custom, ref };
}

export {
  safePromise,
  MultiMap,
  NumberMap,
  isDefined,
  isAnyDefined,
  filterDefined,
  stringHash,
  decodeColor,
  collectMVSReferences,
  bool,
  RequiredField,
  SimpleParamsSchema,
  dfs,
  formatObject,
  convertTree,
  condenseTree,
  addDefaults,
  resolveUris,
  getCustomProps,
  getChildren,
  TreeSchema,
  validateTree,
  MolstarParseFormatT,
  isVector3,
  isPrimitiveComponentExpressions,
  isComponentExpression,
  DefaultColor,
  MVSTreeSchema,
  FullMVSTreeSchema,
  createMVSBuilder,
  Root,
  Download,
  Parse,
  Structure,
  Component,
  Representation,
  Volume,
  VolumeRepresentation,
  Primitives,
  builderDemo,
  MVSData
};
//# sourceMappingURL=chunk-GA6RA535.js.map
