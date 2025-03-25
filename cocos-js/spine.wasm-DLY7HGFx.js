System.register(['./_virtual_cc-Cwc8jSX0.js'], (function (exports) {
    'use strict';
    var _createForOfIteratorHelperLoose;
    return {
        setters: [function (module) {
            _createForOfIteratorHelperLoose = module._;
        }],
        execute: (function () {

            var spineWasm = exports("default", function () {
                var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
                return function (spineWasm) {
                    if (spineWasm === void 0) {
                        spineWasm = {};
                    }
                    var e;
                    e || (e = typeof spineWasm !== 'undefined' ? spineWasm : {});
                    var ba, ca;
                    e.ready = new Promise(function (a, b) {
                        ba = a;
                        ca = b;
                    });
                    var da = Object.assign({}, e),
                        r = "";
                    "undefined" != typeof document && document.currentScript && (r = document.currentScript.src);
                    _scriptDir && (r = _scriptDir);
                    0 !== r.indexOf("blob:") ? r = r.substr(0, r.replace(/[?#].*/, "").lastIndexOf("/") + 1) : r = "";
                    var w = e.printErr || console.error.bind(console);
                    Object.assign(e, da);
                    da = null;
                    var y;
                    e.wasmBinary && (y = e.wasmBinary);
                    e.noExitRuntime || !0;
                    "object" != typeof WebAssembly && z("no native wasm support detected");
                    var ea,
                        fa = !1,
                        ha,
                        A,
                        ia,
                        ja,
                        ka,
                        B,
                        la,
                        ma;

                    function na() {
                        var a = ea.buffer;
                        e.HEAP8 = ha = new Int8Array(a);
                        e.HEAP16 = ia = new Int16Array(a);
                        e.HEAP32 = ka = new Int32Array(a);
                        e.HEAPU8 = A = new Uint8Array(a);
                        e.HEAPU16 = ja = new Uint16Array(a);
                        e.HEAPU32 = B = new Uint32Array(a);
                        e.HEAPF32 = la = new Float32Array(a);
                        e.HEAPF64 = ma = new Float64Array(a);
                    }

                    var oa,
                        pa = [],
                        qa = [],
                        ra = [];

                    function sa() {
                        var a = e.preRun.shift();
                        pa.unshift(a);
                    }

                    var C = 0,
                        D = null;

                    function z(a) {
                        if (e.onAbort) e.onAbort(a);
                        a = "Aborted(" + a + ")";
                        w(a);
                        fa = !0;
                        a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
                        ca(a);
                        throw a;
                    }

                    function ua(a) {
                        return a.startsWith("data:application/octet-stream;base64,");
                    }

                    var F;
                    F = "spine.wasm";
                    if (!ua(F)) {
                        var va = F;
                        F = e.locateFile ? e.locateFile(va, r) : r + va;
                    }

                    function wa(a) {
                        try {
                            if (a == F && y) return new Uint8Array(y);
                            throw "both async and sync fetching of the wasm failed";
                        } catch (b) {
                            z(b);
                        }
                    }

                    function xa(a) {
                        return y || "function" != typeof fetch ? Promise.resolve().then(function () {
                            return wa(a);
                        }) : fetch(a, {
                            credentials: "same-origin"
                        }).then(function (b) {
                            if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
                            return b.arrayBuffer();
                        })["catch"](function () {
                            return wa(a);
                        });
                    }

                    function ya(a, b, c) {
                        return xa(a).then(function (d) {
                            return WebAssembly.instantiate(d, b);
                        }).then(function (d) {
                            return d;
                        }).then(c, function (d) {
                            w("failed to asynchronously prepare wasm: " + d);
                            z(d);
                        });
                    }

                    function za(a, b) {
                        var c = F;
                        return y || "function" != typeof WebAssembly.instantiateStreaming || ua(c) || "function" != typeof fetch ? ya(c, a, b) : fetch(c, {
                            credentials: "same-origin"
                        }).then(function (d) {
                            return WebAssembly.instantiateStreaming(d, a).then(b, function (g) {
                                w("wasm streaming compile failed: " + g);
                                w("falling back to ArrayBuffer instantiation");
                                return ya(c, a, b);
                            });
                        });
                    }

                    function Aa(a) {
                        for (; 0 < a.length;) a.shift()(e);
                    }

                    function Ba(a) {
                        switch (a) {
                            case 1:
                                return 0;
                            case 2:
                                return 1;
                            case 4:
                                return 2;
                            case 8:
                                return 3;
                            default:
                                throw new TypeError("Unknown type size: " + a);
                        }
                    }

                    var Ca = void 0;

                    function G(a) {
                        for (var b = ""; A[a];) b += Ca[A[a++]];
                        return b;
                    }

                    var H = {},
                        I = {},
                        Da = {};

                    function Ea(a) {
                        if (void 0 === a) return "_unknown";
                        a = a.replace(/[^a-zA-Z0-9_]/g, "$");
                        var b = a.charCodeAt(0);
                        return 48 <= b && 57 >= b ? "_" + a : a;
                    }

                    function Fa(a, b) {
                        var _a$a;
                        a = Ea(a);
                        return (_a$a = {}, _a$a[a] = function () {
                            return b.apply(this, arguments);
                        }, _a$a)[a];
                    }

                    function Ga(a) {
                        var b = Error,
                            c = Fa(a, function (d) {
                                this.name = a;
                                this.message = d;
                                d = Error(d).stack;
                                void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
                            });
                        c.prototype = Object.create(b.prototype);
                        c.prototype.constructor = c;
                        c.prototype.toString = function () {
                            return void 0 === this.message ? this.name : this.name + ": " + this.message;
                        };
                        return c;
                    }

                    var J = void 0;

                    function L(a) {
                        throw new J(a);
                    }

                    var Ha = void 0;

                    function Ia(a) {
                        throw new Ha(a);
                    }

                    function M(a, b, c) {
                        function d(f) {
                            f = c(f);
                            f.length !== a.length && Ia("Mismatched type converter count");
                            for (var l = 0; l < a.length; ++l) N(a[l], f[l]);
                        }

                        a.forEach(function (f) {
                            Da[f] = b;
                        });
                        var g = Array(b.length),
                            k = [],
                            h = 0;
                        b.forEach(function (f, l) {
                            I.hasOwnProperty(f) ? g[l] = I[f] : (k.push(f), H.hasOwnProperty(f) || (H[f] = []), H[f].push(function () {
                                g[l] = I[f];
                                ++h;
                                h === k.length && d(g);
                            }));
                        });
                        0 === k.length && d(g);
                    }

                    function N(a, b) {
                        var c = {};
                        if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                        var d = b.name;
                        a || L("type \"" + d + "\" must have a positive integer typeid pointer");
                        if (I.hasOwnProperty(a)) {
                            if (c.qa) return;
                            L("Cannot register type '" + d + "' twice");
                        }
                        I[a] = b;
                        delete Da[a];
                        H.hasOwnProperty(a) && (b = H[a], delete H[a], b.forEach(function (g) {
                            return g();
                        }));
                    }

                    function Ja(a) {
                        L(a.F.I.G.name + " instance already deleted");
                    }

                    var Ka = !1;

                    function La() {
                    }

                    function Ma(a) {
                        --a.count.value;
                        0 === a.count.value && (a.L ? a.M.S(a.L) : a.I.G.S(a.H));
                    }

                    function Na(a, b, c) {
                        if (b === c) return a;
                        if (void 0 === c.J) return null;
                        a = Na(a, b, c.J);
                        return null === a ? null : c.ha(a);
                    }

                    var Oa = {},
                        O = [];

                    function Pa() {
                        for (; O.length;) {
                            var a = O.pop();
                            a.F.U = !1;
                            a["delete"]();
                        }
                    }

                    var P = void 0,
                        Q = {};

                    function Qa(a, b) {
                        for (void 0 === b && L("ptr should not be undefined"); a.J;) b = a.W(b), a = a.J;
                        return Q[b];
                    }

                    function Ra(a, b) {
                        b.I && b.H || Ia("makeClassHandle requires ptr and ptrType");
                        !!b.M !== !!b.L && Ia("Both smartPtrType and smartPtr must be specified");
                        b.count = {
                            value: 1
                        };
                        return R(Object.create(a, {
                            F: {
                                value: b
                            }
                        }));
                    }

                    function R(a) {
                        if ("undefined" === typeof FinalizationRegistry) return R = function R(b) {
                            return b;
                        }, a;
                        Ka = new FinalizationRegistry(function (b) {
                            Ma(b.F);
                        });
                        R = function R(b) {
                            var c = b.F;
                            c.L && Ka.register(b, {
                                F: c
                            }, b);
                            return b;
                        };
                        La = function La(b) {
                            Ka.unregister(b);
                        };
                        return R(a);
                    }

                    function S() {
                    }

                    function Sa(a, b, c) {
                        if (void 0 === a[b].K) {
                            var d = a[b];
                            a[b] = function () {
                                a[b].K.hasOwnProperty(arguments.length) || L("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + a[b].K + ")!");
                                return a[b].K[arguments.length].apply(this, arguments);
                            };
                            a[b].K = [];
                            a[b].K[d.T] = d;
                        }
                    }

                    function Ta(a, b) {
                        e.hasOwnProperty(a) ? (L("Cannot register public name '" + a + "' twice"), Sa(e, a, a), e.hasOwnProperty(void 0) && L("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), e[a].K[void 0] = b) : e[a] = b;
                    }

                    function Ua(a, b, c, d, g, k, h, f) {
                        this.name = a;
                        this.constructor = b;
                        this.P = c;
                        this.S = d;
                        this.J = g;
                        this.ia = k;
                        this.W = h;
                        this.ha = f;
                        this.la = [];
                    }

                    function Va(a, b, c) {
                        for (; b !== c;) b.W || L("Expected null or instance of " + c.name + ", got an instance of " + b.name), a = b.W(a), b = b.J;
                        return a;
                    }

                    function Wa(a, b) {
                        if (null === b) return this.$ && L("null is not a valid " + this.name), 0;
                        b.F || L("Cannot pass \"" + Xa(b) + "\" as a " + this.name);
                        b.F.H || L("Cannot pass deleted object as a pointer of type " + this.name);
                        return Va(b.F.H, b.F.I.G, this.G);
                    }

                    function Ya(a, b) {
                        if (null === b) {
                            this.$ && L("null is not a valid " + this.name);
                            if (this.Z) {
                                var c = this.ma();
                                null !== a && a.push(this.S, c);
                                return c;
                            }
                            return 0;
                        }
                        b.F || L("Cannot pass \"" + Xa(b) + "\" as a " + this.name);
                        b.F.H || L("Cannot pass deleted object as a pointer of type " + this.name);
                        !this.Y && b.F.I.Y && L("Cannot convert argument of type " + (b.F.M ? b.F.M.name : b.F.I.name) + " to parameter type " + this.name);
                        c = Va(b.F.H, b.F.I.G, this.G);
                        if (this.Z) switch (void 0 === b.F.L && L("Passing raw pointer to smart pointer is illegal"), this.pa) {
                            case 0:
                                b.F.M === this ? c = b.F.L : L("Cannot convert argument of type " + (b.F.M ? b.F.M.name : b.F.I.name) + " to parameter type " + this.name);
                                break;
                            case 1:
                                c = b.F.L;
                                break;
                            case 2:
                                if (b.F.M === this) c = b.F.L; else {
                                    var d = b.clone();
                                    c = this.na(c, T(function () {
                                        d["delete"]();
                                    }));
                                    null !== a && a.push(this.S, c);
                                }
                                break;
                            default:
                                L("Unsupporting sharing policy");
                        }
                        return c;
                    }

                    function Za(a, b) {
                        if (null === b) return this.$ && L("null is not a valid " + this.name), 0;
                        b.F || L("Cannot pass \"" + Xa(b) + "\" as a " + this.name);
                        b.F.H || L("Cannot pass deleted object as a pointer of type " + this.name);
                        b.F.I.Y && L("Cannot convert argument of type " + b.F.I.name + " to parameter type " + this.name);
                        return Va(b.F.H, b.F.I.G, this.G);
                    }

                    function $a(a) {
                        return this.fromWireType(ka[a >> 2]);
                    }

                    function U(a, b, c, d) {
                        this.name = a;
                        this.G = b;
                        this.$ = c;
                        this.Y = d;
                        this.Z = !1;
                        this.S = this.na = this.ma = this.da = this.pa = this.ka = void 0;
                        void 0 !== b.J ? this.toWireType = Ya : (this.toWireType = d ? Wa : Za, this.O = null);
                    }

                    function ab(a, b) {
                        e.hasOwnProperty(a) || Ia("Replacing nonexistant public symbol");
                        e[a] = b;
                        e[a].T = void 0;
                    }

                    function bb(a, b) {
                        var c = [];
                        return function () {
                            c.length = 0;
                            Object.assign(c, arguments);
                            if (a.includes("j")) {
                                var d = e["dynCall_" + a];
                                d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
                            } else d = oa.get(b).apply(null, c);
                            return d;
                        };
                    }

                    function V(a, b) {
                        a = G(a);
                        var c = a.includes("j") ? bb(a, b) : oa.get(b);
                        "function" != typeof c && L("unknown function pointer with signature " + a + ": " + b);
                        return c;
                    }

                    var cb = void 0;

                    function db(a) {
                        a = eb(a);
                        var b = G(a);
                        W(a);
                        return b;
                    }

                    function X(a, b) {
                        function c(k) {
                            g[k] || I[k] || (Da[k] ? Da[k].forEach(c) : (d.push(k), g[k] = !0));
                        }

                        var d = [],
                            g = {};
                        b.forEach(c);
                        throw new cb(a + ": " + d.map(db).join([", "]));
                    }

                    function fb(a) {
                        for (; a.length;) {
                            var b = a.pop();
                            a.pop()(b);
                        }
                    }

                    function hb(a, b, c, d, g) {
                        var k = b.length;
                        2 > k && L("argTypes array size mismatch! Must at least get return value and 'this' types!");
                        var h = null !== b[1] && null !== c,
                            f = !1;
                        for (c = 1; c < b.length; ++c) if (null !== b[c] && void 0 === b[c].O) {
                            f = !0;
                            break;
                        }
                        var l = "void" !== b[0].name,
                            n = k - 2,
                            m = Array(n),
                            q = [],
                            p = [];
                        return function () {
                            arguments.length !== n && L("function " + a + " called with " + arguments.length + " arguments, expected " + n + " args!");
                            p.length = 0;
                            q.length = h ? 2 : 1;
                            q[0] = g;
                            if (h) {
                                var u = b[1].toWireType(p, this);
                                q[1] = u;
                            }
                            for (var t = 0; t < n; ++t) m[t] = b[t + 2].toWireType(p, arguments[t]), q.push(m[t]);
                            t = d.apply(null, q);
                            if (f) fb(p); else for (var v = h ? 1 : 2; v < b.length; v++) {
                                var E = 1 === v ? u : m[v - 2];
                                null !== b[v].O && b[v].O(E);
                            }
                            u = l ? b[0].fromWireType(t) : void 0;
                            return u;
                        };
                    }

                    function ib(a, b) {
                        for (var c = [], d = 0; d < a; d++) c.push(B[b + 4 * d >> 2]);
                        return c;
                    }

                    function jb(a, b, c) {
                        a instanceof Object || L(c + " with invalid \"this\": " + a);
                        a instanceof b.G.constructor || L(c + " incompatible with \"this\" of type " + a.constructor.name);
                        a.F.H || L("cannot call emscripten binding method " + c + " on deleted object");
                        return Va(a.F.H, a.F.I.G, b.G);
                    }

                    var Y = new function () {
                        this.N = [void 0];
                        this.aa = [];
                        this.get = function (a) {
                            return this.N[a];
                        };
                        this.has = function (a) {
                            return void 0 !== this.N[a];
                        };
                        this.ea = function (a) {
                            var b = this.aa.pop() || this.N.length;
                            this.N[b] = a;
                            return b;
                        };
                        this.fa = function (a) {
                            this.N[a] = void 0;
                            this.aa.push(a);
                        };
                    }();

                    function kb(a) {
                        a >= Y.ba && 0 === --Y.get(a).oa && Y.fa(a);
                    }

                    var Z = function Z(a) {
                            a || L("Cannot use deleted val. handle = " + a);
                            return Y.get(a).value;
                        },
                        T = function T(a) {
                            switch (a) {
                                case void 0:
                                    return 1;
                                case null:
                                    return 2;
                                case !0:
                                    return 3;
                                case !1:
                                    return 4;
                                default:
                                    return Y.ea({
                                        oa: 1,
                                        value: a
                                    });
                            }
                        };

                    function Xa(a) {
                        if (null === a) return "null";
                        var b = typeof a;
                        return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
                    }

                    function lb(a, b) {
                        switch (b) {
                            case 2:
                                return function (c) {
                                    return this.fromWireType(la[c >> 2]);
                                };
                            case 3:
                                return function (c) {
                                    return this.fromWireType(ma[c >> 3]);
                                };
                            default:
                                throw new TypeError("Unknown float type: " + a);
                        }
                    }

                    function mb(a, b, c) {
                        switch (b) {
                            case 0:
                                return c ? function (d) {
                                    return ha[d];
                                } : function (d) {
                                    return A[d];
                                };
                            case 1:
                                return c ? function (d) {
                                    return ia[d >> 1];
                                } : function (d) {
                                    return ja[d >> 1];
                                };
                            case 2:
                                return c ? function (d) {
                                    return ka[d >> 2];
                                } : function (d) {
                                    return B[d >> 2];
                                };
                            default:
                                throw new TypeError("Unknown integer type: " + a);
                        }
                    }

                    var nb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                    function ob(a, b) {
                        var c = I[a];
                        void 0 === c && L(b + " has unknown type " + db(a));
                        return c;
                    }

                    var pb = {};

                    function qb() {
                        var a = e.SpineWasmUtil,
                            b = a.getCurrentListenerID(),
                            c = a.getCurrentTrackEntry(),
                            d = a.getCurrentEvent();
                        a = a.getCurrentEventType();
                        globalThis.TrackEntryListeners.emitListener(b, c, d, a);
                    }

                    e._spineListenerCallBackFromJS = qb;

                    function rb() {
                        var a = e.SpineWasmUtil,
                            b = a.getCurrentListenerID(),
                            c = a.getCurrentEventType(),
                            d = a.getCurrentTrackEntry();
                        a = a.getCurrentEvent();
                        globalThis.TrackEntryListeners.emitTrackEntryListener(b, d, a, c);
                    }

                    e._spineTrackListenerCallback = rb;
                    for (var sb = Array(256), tb = 0; 256 > tb; ++tb) sb[tb] = String.fromCharCode(tb);
                    Ca = sb;
                    J = e.BindingError = Ga("BindingError");
                    Ha = e.InternalError = Ga("InternalError");
                    S.prototype.isAliasOf = function (a) {
                        if (!(this instanceof S && a instanceof S)) return !1;
                        var b = this.F.I.G,
                            c = this.F.H,
                            d = a.F.I.G;
                        for (a = a.F.H; b.J;) c = b.W(c), b = b.J;
                        for (; d.J;) a = d.W(a), d = d.J;
                        return b === d && c === a;
                    };
                    S.prototype.clone = function () {
                        this.F.H || Ja(this);
                        if (this.F.V) return this.F.count.value += 1, this;
                        var a = R,
                            b = Object,
                            c = b.create,
                            d = Object.getPrototypeOf(this),
                            g = this.F;
                        a = a(c.call(b, d, {
                            F: {
                                value: {
                                    count: g.count,
                                    U: g.U,
                                    V: g.V,
                                    H: g.H,
                                    I: g.I,
                                    L: g.L,
                                    M: g.M
                                }
                            }
                        }));
                        a.F.count.value += 1;
                        a.F.U = !1;
                        return a;
                    };
                    S.prototype["delete"] = function () {
                        this.F.H || Ja(this);
                        this.F.U && !this.F.V && L("Object already scheduled for deletion");
                        La(this);
                        Ma(this.F);
                        this.F.V || (this.F.L = void 0, this.F.H = void 0);
                    };
                    S.prototype.isDeleted = function () {
                        return !this.F.H;
                    };
                    S.prototype.deleteLater = function () {
                        this.F.H || Ja(this);
                        this.F.U && !this.F.V && L("Object already scheduled for deletion");
                        O.push(this);
                        1 === O.length && P && P(Pa);
                        this.F.U = !0;
                        return this;
                    };
                    e.getInheritedInstanceCount = function () {
                        return Object.keys(Q).length;
                    };
                    e.getLiveInheritedInstances = function () {
                        var a = [],
                            b;
                        for (b in Q) Q.hasOwnProperty(b) && a.push(Q[b]);
                        return a;
                    };
                    e.flushPendingDeletes = Pa;
                    e.setDelayFunction = function (a) {
                        P = a;
                        O.length && P && P(Pa);
                    };
                    U.prototype.ja = function (a) {
                        this.da && (a = this.da(a));
                        return a;
                    };
                    U.prototype.ca = function (a) {
                        this.S && this.S(a);
                    };
                    U.prototype.argPackAdvance = 8;
                    U.prototype.readValueFromPointer = $a;
                    U.prototype.deleteObject = function (a) {
                        if (null !== a) a["delete"]();
                    };
                    U.prototype.fromWireType = function (a) {
                        function b() {
                            return this.Z ? Ra(this.G.P, {
                                I: this.ka,
                                H: c,
                                M: this,
                                L: a
                            }) : Ra(this.G.P, {
                                I: this,
                                H: a
                            });
                        }

                        var c = this.ja(a);
                        if (!c) return this.ca(a), null;
                        var d = Qa(this.G, c);
                        if (void 0 !== d) {
                            if (0 === d.F.count.value) return d.F.H = c, d.F.L = a, d.clone();
                            d = d.clone();
                            this.ca(a);
                            return d;
                        }
                        d = this.G.ia(c);
                        d = Oa[d];
                        if (!d) return b.call(this);
                        d = this.Y ? d.ga : d.pointerType;
                        var g = Na(c, this.G, d.G);
                        return null === g ? b.call(this) : this.Z ? Ra(d.G.P, {
                            I: d,
                            H: g,
                            M: this,
                            L: a
                        }) : Ra(d.G.P, {
                            I: d,
                            H: g
                        });
                    };
                    cb = e.UnboundTypeError = Ga("UnboundTypeError");
                    Y.N.push({
                        value: void 0
                    }, {
                        value: null
                    }, {
                        value: !0
                    }, {
                        value: !1
                    });
                    Y.ba = Y.N.length;
                    e.count_emval_handles = function () {
                        for (var a = 0, b = Y.ba; b < Y.N.length; ++b) void 0 !== Y.N[b] && ++a;
                        return a;
                    };
                    var vb = {
                        p: function p() {
                        },
                        t: function t(a, b, c, d, g) {
                            var k = Ba(c);
                            b = G(b);
                            N(a, {
                                name: b,
                                fromWireType: function fromWireType(h) {
                                    return !!h;
                                },
                                toWireType: function toWireType(h, f) {
                                    return f ? d : g;
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: function readValueFromPointer(h) {
                                    if (1 === c) var f = ha; else if (2 === c) f = ia; else if (4 === c) f = ka; else throw new TypeError("Unknown boolean type size: " + b);
                                    return this.fromWireType(f[h >> k]);
                                },
                                O: null
                            });
                        },
                        c: function c(a, b, _c, d, g, k, h, f, l, n, m, q, p) {
                            m = G(m);
                            k = V(g, k);
                            f && (f = V(h, f));
                            n && (n = V(l, n));
                            p = V(q, p);
                            var u = Ea(m);
                            Ta(u, function () {
                                X("Cannot construct " + m + " due to unbound types", [d]);
                            });
                            M([a, b, _c], d ? [d] : [], function (t) {
                                t = t[0];
                                if (d) {
                                    var v = t.G;
                                    var E = v.P;
                                } else E = S.prototype;
                                t = Fa(u, function () {
                                    if (Object.getPrototypeOf(this) !== K) throw new J("Use 'new' to construct " + m);
                                    if (void 0 === x.R) throw new J(m + " has no accessible constructor");
                                    var gb = x.R[arguments.length];
                                    if (void 0 === gb) throw new J("Tried to invoke ctor of " + m + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(x.R).toString() + ") parameters instead!");
                                    return gb.apply(this, arguments);
                                });
                                var K = Object.create(E, {
                                    constructor: {
                                        value: t
                                    }
                                });
                                t.prototype = K;
                                var x = new Ua(m, t, K, p, v, k, f, n);
                                x.J && (void 0 === x.J.X && (x.J.X = []), x.J.X.push(x));
                                v = new U(m, x, !0, !1);
                                E = new U(m + "*", x, !1, !1);
                                var aa = new U(m + " const*", x, !1, !0);
                                Oa[a] = {
                                    pointerType: E,
                                    ga: aa
                                };
                                ab(u, t);
                                return [v, E, aa];
                            });
                        },
                        f: function f(a, b, c, d, g, k, h) {
                            var f = ib(c, d);
                            b = G(b);
                            k = V(g, k);
                            M([], [a], function (l) {
                                function n() {
                                    X("Cannot call " + m + " due to unbound types", f);
                                }

                                l = l[0];
                                var m = l.name + "." + b;
                                b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                                var q = l.G.constructor;
                                void 0 === q[b] ? (n.T = c - 1, q[b] = n) : (Sa(q, b, m), q[b].K[c - 1] = n);
                                M([], f, function (p) {
                                    p = hb(m, [p[0], null].concat(p.slice(1)), null, k, h);
                                    void 0 === q[b].K ? (p.T = c - 1, q[b] = p) : q[b].K[c - 1] = p;
                                    if (l.G.X) {
                                        for (var _iterator = _createForOfIteratorHelperLoose(l.G.X), _step; !(_step = _iterator()).done;) {
                                            var u = _step.value;
                                            u.constructor.hasOwnProperty(b) || (u.constructor[b] = p);
                                        }
                                    }
                                    return [];
                                });
                                return [];
                            });
                        },
                        h: function h(a, b, c, d, g, k, _h, f) {
                            b = G(b);
                            k = V(g, k);
                            M([], [a], function (l) {
                                l = l[0];
                                var n = l.name + "." + b,
                                    m = {
                                        get: function get() {
                                            X("Cannot access " + n + " due to unbound types", [c]);
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    };
                                m.set = f ? function () {
                                    X("Cannot access " + n + " due to unbound types", [c]);
                                } : function () {
                                    L(n + " is a read-only property");
                                };
                                Object.defineProperty(l.G.constructor, b, m);
                                M([], [c], function (q) {
                                    q = q[0];
                                    var p = {
                                        get: function get() {
                                            return q.fromWireType(k(d));
                                        },
                                        enumerable: !0
                                    };
                                    f && (f = V(_h, f), p.set = function (u) {
                                        var t = [];
                                        f(d, q.toWireType(t, u));
                                        fb(t);
                                    });
                                    Object.defineProperty(l.G.constructor, b, p);
                                    return [];
                                });
                                return [];
                            });
                        },
                        d: function d(a, b, c, _d, g, k) {
                            0 < b || z();
                            var h = ib(b, c);
                            g = V(_d, g);
                            M([], [a], function (f) {
                                f = f[0];
                                var l = "constructor " + f.name;
                                void 0 === f.G.R && (f.G.R = []);
                                if (void 0 !== f.G.R[b - 1]) throw new J("Cannot register multiple constructors with identical number of parameters (" + (b - 1) + ") for class '" + f.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                                f.G.R[b - 1] = function () {
                                    X("Cannot construct " + f.name + " due to unbound types", h);
                                };
                                M([], h, function (n) {
                                    n.splice(1, 0, null);
                                    f.G.R[b - 1] = hb(l, n, null, g, k);
                                    return [];
                                });
                                return [];
                            });
                        },
                        a: function a(_a, b, c, d, g, k, h, f) {
                            var l = ib(c, d);
                            b = G(b);
                            k = V(g, k);
                            M([], [_a], function (n) {
                                function m() {
                                    X("Cannot call " + q + " due to unbound types", l);
                                }

                                n = n[0];
                                var q = n.name + "." + b;
                                b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                                f && n.G.la.push(b);
                                var p = n.G.P,
                                    u = p[b];
                                void 0 === u || void 0 === u.K && u.className !== n.name && u.T === c - 2 ? (m.T = c - 2, m.className = n.name, p[b] = m) : (Sa(p, b, q), p[b].K[c - 2] = m);
                                M([], l, function (t) {
                                    t = hb(q, t, n, k, h);
                                    void 0 === p[b].K ? (t.T = c - 2, p[b] = t) : p[b].K[c - 2] = t;
                                    return [];
                                });
                                return [];
                            });
                        },
                        b: function b(a, _b, c, d, g, k, h, f, l, n) {
                            _b = G(_b);
                            g = V(d, g);
                            M([], [a], function (m) {
                                m = m[0];
                                var q = m.name + "." + _b,
                                    p = {
                                        get: function get() {
                                            X("Cannot access " + q + " due to unbound types", [c, h]);
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    };
                                p.set = l ? function () {
                                    X("Cannot access " + q + " due to unbound types", [c, h]);
                                } : function () {
                                    L(q + " is a read-only property");
                                };
                                Object.defineProperty(m.G.P, _b, p);
                                M([], l ? [c, h] : [c], function (u) {
                                    var t = u[0],
                                        v = {
                                            get: function get() {
                                                var K = jb(this, m, q + " getter");
                                                return t.fromWireType(g(k, K));
                                            },
                                            enumerable: !0
                                        };
                                    if (l) {
                                        l = V(f, l);
                                        var E = u[1];
                                        v.set = function (K) {
                                            var x = jb(this, m, q + " setter"),
                                                aa = [];
                                            l(n, x, E.toWireType(aa, K));
                                            fb(aa);
                                        };
                                    }
                                    Object.defineProperty(m.G.P, _b, v);
                                    return [];
                                });
                                return [];
                            });
                        },
                        s: function s(a, b) {
                            b = G(b);
                            N(a, {
                                name: b,
                                fromWireType: function fromWireType(c) {
                                    var d = Z(c);
                                    kb(c);
                                    return d;
                                },
                                toWireType: function toWireType(c, d) {
                                    return T(d);
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: $a,
                                O: null
                            });
                        },
                        m: function m(a, b, c) {
                            c = Ba(c);
                            b = G(b);
                            N(a, {
                                name: b,
                                fromWireType: function fromWireType(d) {
                                    return d;
                                },
                                toWireType: function toWireType(d, g) {
                                    return g;
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: lb(b, c),
                                O: null
                            });
                        },
                        e: function e(a, b, c, d, g) {
                            b = G(b);
                            -1 === g && (g = 4294967295);
                            g = Ba(c);
                            var k = function k(f) {
                                return f;
                            };
                            if (0 === d) {
                                var h = 32 - 8 * c;
                                k = function k(f) {
                                    return f << h >>> h;
                                };
                            }
                            c = b.includes("unsigned") ? function (f, l) {
                                return l >>> 0;
                            } : function (f, l) {
                                return l;
                            };
                            N(a, {
                                name: b,
                                fromWireType: k,
                                toWireType: c,
                                argPackAdvance: 8,
                                readValueFromPointer: mb(b, g, 0 !== d),
                                O: null
                            });
                        },
                        r: function r(a, b) {
                            b = G(b);
                            var c = "std::string" === b;
                            N(a, {
                                name: b,
                                fromWireType: function fromWireType(d) {
                                    var g = B[d >> 2],
                                        k = d + 4;
                                    if (c) for (var h = k, f = 0; f <= g; ++f) {
                                        var l = k + f;
                                        if (f == g || 0 == A[l]) {
                                            if (h) {
                                                var n = h;
                                                var m = A,
                                                    q = n + (l - h);
                                                for (h = n; m[h] && !(h >= q);) ++h;
                                                if (16 < h - n && m.buffer && nb) n = nb.decode(m.subarray(n, h)); else {
                                                    for (q = ""; n < h;) {
                                                        var p = m[n++];
                                                        if (p & 128) {
                                                            var u = m[n++] & 63;
                                                            if (192 == (p & 224)) q += String.fromCharCode((p & 31) << 6 | u); else {
                                                                var t = m[n++] & 63;
                                                                p = 224 == (p & 240) ? (p & 15) << 12 | u << 6 | t : (p & 7) << 18 | u << 12 | t << 6 | m[n++] & 63;
                                                                65536 > p ? q += String.fromCharCode(p) : (p -= 65536, q += String.fromCharCode(55296 | p >> 10, 56320 | p & 1023));
                                                            }
                                                        } else q += String.fromCharCode(p);
                                                    }
                                                    n = q;
                                                }
                                            } else n = "";
                                            if (void 0 === v) var v = n; else v += String.fromCharCode(0), v += n;
                                            h = l + 1;
                                        }
                                    } else {
                                        v = Array(g);
                                        for (f = 0; f < g; ++f) v[f] = String.fromCharCode(A[k + f]);
                                        v = v.join("");
                                    }
                                    W(d);
                                    return v;
                                },
                                toWireType: function toWireType(d, g) {
                                    g instanceof ArrayBuffer && (g = new Uint8Array(g));
                                    var k,
                                        h = "string" == typeof g;
                                    h || g instanceof Uint8Array || g instanceof Uint8ClampedArray || g instanceof Int8Array || L("Cannot pass non-string to std::string");
                                    var f;
                                    if (c && h) for (k = f = 0; k < g.length; ++k) {
                                        var l = g.charCodeAt(k);
                                        127 >= l ? f++ : 2047 >= l ? f += 2 : 55296 <= l && 57343 >= l ? (f += 4, ++k) : f += 3;
                                    } else f = g.length;
                                    k = f;
                                    f = ub(4 + k + 1);
                                    l = f + 4;
                                    B[f >> 2] = k;
                                    if (c && h) {
                                        if (h = l, l = k + 1, k = A, 0 < l) {
                                            l = h + l - 1;
                                            for (var n = 0; n < g.length; ++n) {
                                                var m = g.charCodeAt(n);
                                                if (55296 <= m && 57343 >= m) {
                                                    var q = g.charCodeAt(++n);
                                                    m = 65536 + ((m & 1023) << 10) | q & 1023;
                                                }
                                                if (127 >= m) {
                                                    if (h >= l) break;
                                                    k[h++] = m;
                                                } else {
                                                    if (2047 >= m) {
                                                        if (h + 1 >= l) break;
                                                        k[h++] = 192 | m >> 6;
                                                    } else {
                                                        if (65535 >= m) {
                                                            if (h + 2 >= l) break;
                                                            k[h++] = 224 | m >> 12;
                                                        } else {
                                                            if (h + 3 >= l) break;
                                                            k[h++] = 240 | m >> 18;
                                                            k[h++] = 128 | m >> 12 & 63;
                                                        }
                                                        k[h++] = 128 | m >> 6 & 63;
                                                    }
                                                    k[h++] = 128 | m & 63;
                                                }
                                            }
                                            k[h] = 0;
                                        }
                                    } else if (h) for (h = 0; h < k; ++h) n = g.charCodeAt(h), 255 < n && (W(l), L("String has UTF-16 code units that do not fit in 8 bits")), A[l + h] = n; else for (h = 0; h < k; ++h) A[l + h] = g[h];
                                    null !== d && d.push(W, f);
                                    return f;
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: $a,
                                O: function O(d) {
                                    W(d);
                                }
                            });
                        },
                        u: function u(a, b) {
                            b = G(b);
                            N(a, {
                                ra: !0,
                                name: b,
                                argPackAdvance: 0,
                                fromWireType: function fromWireType() {
                                },
                                toWireType: function toWireType() {
                                }
                            });
                        },
                        j: function j(a, b, c) {
                            a = Z(a);
                            b = ob(b, "emval::as");
                            var d = [],
                                g = T(d);
                            B[c >> 2] = g;
                            return b.toWireType(d, a);
                        },
                        g: kb,
                        k: function k(a, b) {
                            a = Z(a);
                            b = Z(b);
                            return T(a[b]);
                        },
                        o: function o(a) {
                            var b = pb[a];
                            return T(void 0 === b ? G(a) : b);
                        },
                        i: function i(a) {
                            var b = Z(a);
                            fb(b);
                            kb(a);
                        },
                        n: function n(a, b) {
                            a = ob(a, "_emval_take_value");
                            a = a.readValueFromPointer(b);
                            return T(a);
                        },
                        l: function l() {
                            z("");
                        },
                        q: function q(a) {
                            var b = A.length;
                            a >>>= 0;
                            if (2147483648 < a) return !1;
                            for (var c = 1; 4 >= c; c *= 2) {
                                var d = b * (1 + .2 / c);
                                d = Math.min(d, a + 100663296);
                                var g = Math;
                                d = Math.max(a, d);
                                a: {
                                    g = g.min.call(g, 2147483648, d + (65536 - d % 65536) % 65536) - ea.buffer.byteLength + 65535 >>> 16;
                                    try {
                                        ea.grow(g);
                                        na();
                                        var k = 1;
                                        break a;
                                    } catch (h) {
                                    }
                                    k = void 0;
                                }
                                if (k) return !0;
                            }
                            return !1;
                        },
                        w: qb,
                        v: rb
                    };
                    (function () {
                        function a(c) {
                            c = c.exports;
                            e.asm = c;
                            ea = e.asm.x;
                            na();
                            oa = e.asm.z;
                            qa.unshift(e.asm.y);
                            C--;
                            e.monitorRunDependencies && e.monitorRunDependencies(C);
                            if (0 == C && (D)) {
                                var d = D;
                                D = null;
                                d();
                            }
                            return c;
                        }

                        var b = {
                            a: vb
                        };
                        C++;
                        e.monitorRunDependencies && e.monitorRunDependencies(C);
                        if (e.instantiateWasm) try {
                            return e.instantiateWasm(b, a);
                        } catch (c) {
                            w("Module.instantiateWasm callback failed with error: " + c), ca(c);
                        }
                        za(b, function (c) {
                            a(c.instance);
                        })["catch"](ca);
                        return {};
                    })();

                    function ub() {
                        return (ub = e.asm.A).apply(null, arguments);
                    }

                    function W() {
                        return (W = e.asm.B).apply(null, arguments);
                    }

                    function eb() {
                        return (eb = e.asm.C).apply(null, arguments);
                    }

                    e.__embind_initialize_bindings = function () {
                        return (e.__embind_initialize_bindings = e.asm.D).apply(null, arguments);
                    };
                    var wb;
                    D = function xb() {
                        wb || yb();
                        wb || (D = xb);
                    };

                    function yb() {
                        function a() {
                            if (!wb && (wb = !0, e.calledRun = !0, !fa)) {
                                Aa(qa);
                                ba(e);
                                if (e.onRuntimeInitialized) e.onRuntimeInitialized();
                                if (e.postRun) for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
                                    var b = e.postRun.shift();
                                    ra.unshift(b);
                                }
                                Aa(ra);
                            }
                        }

                        if (!(0 < C)) {
                            if (e.preRun) for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) sa();
                            Aa(pa);
                            0 < C || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function () {
                                setTimeout(function () {
                                    e.setStatus("");
                                }, 1);
                                a();
                            }, 1)) : a());
                        }
                    }

                    if (e.preInit) for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) e.preInit.pop()();
                    yb();
                    return spineWasm.ready;
                };
            }());

        })
    };
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BpbmUud2FzbS1ETFk3SEdGeC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0NvY29zL0NyZWF0b3IvMy44LjUvQ29jb3NDcmVhdG9yLmFwcC9Db250ZW50cy9leHRlcm5hbDplbXNjcmlwdGVuL3NwaW5lL3NwaW5lLndhc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgc3BpbmVXYXNtID0gKCgpID0+IHtcbiAgdmFyIF9zY3JpcHREaXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyA6IHVuZGVmaW5lZDtcbiAgXG4gIHJldHVybiAoXG5mdW5jdGlvbihzcGluZVdhc20gPSB7fSkgIHtcblxudmFyIGU7ZXx8KGU9dHlwZW9mIHNwaW5lV2FzbSAhPT0gJ3VuZGVmaW5lZCcgPyBzcGluZVdhc20gOiB7fSk7dmFyIGJhLGNhO2UucmVhZHk9bmV3IFByb21pc2UoKGEsYik9PntiYT1hO2NhPWJ9KTt2YXIgZGE9T2JqZWN0LmFzc2lnbih7fSxlKSxyPVwiXCI7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZkb2N1bWVudC5jdXJyZW50U2NyaXB0JiYocj1kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyk7X3NjcmlwdERpciYmKHI9X3NjcmlwdERpcik7MCE9PXIuaW5kZXhPZihcImJsb2I6XCIpP3I9ci5zdWJzdHIoMCxyLnJlcGxhY2UoL1s/I10uKi8sXCJcIikubGFzdEluZGV4T2YoXCIvXCIpKzEpOnI9XCJcIjt2YXIgdz1lLnByaW50RXJyfHxjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7T2JqZWN0LmFzc2lnbihlLGRhKTtkYT1udWxsO3ZhciB5O2Uud2FzbUJpbmFyeSYmKHk9ZS53YXNtQmluYXJ5KTt2YXIgbm9FeGl0UnVudGltZT1lLm5vRXhpdFJ1bnRpbWV8fCEwO1xuXCJvYmplY3RcIiE9dHlwZW9mIFdlYkFzc2VtYmx5JiZ6KFwibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZFwiKTt2YXIgZWEsZmE9ITEsaGEsQSxpYSxqYSxrYSxCLGxhLG1hO2Z1bmN0aW9uIG5hKCl7dmFyIGE9ZWEuYnVmZmVyO2UuSEVBUDg9aGE9bmV3IEludDhBcnJheShhKTtlLkhFQVAxNj1pYT1uZXcgSW50MTZBcnJheShhKTtlLkhFQVAzMj1rYT1uZXcgSW50MzJBcnJheShhKTtlLkhFQVBVOD1BPW5ldyBVaW50OEFycmF5KGEpO2UuSEVBUFUxNj1qYT1uZXcgVWludDE2QXJyYXkoYSk7ZS5IRUFQVTMyPUI9bmV3IFVpbnQzMkFycmF5KGEpO2UuSEVBUEYzMj1sYT1uZXcgRmxvYXQzMkFycmF5KGEpO2UuSEVBUEY2ND1tYT1uZXcgRmxvYXQ2NEFycmF5KGEpfXZhciBvYSxwYT1bXSxxYT1bXSxyYT1bXTtmdW5jdGlvbiBzYSgpe3ZhciBhPWUucHJlUnVuLnNoaWZ0KCk7cGEudW5zaGlmdChhKX12YXIgQz0wLHRhPW51bGwsRD1udWxsO1xuZnVuY3Rpb24geihhKXtpZihlLm9uQWJvcnQpZS5vbkFib3J0KGEpO2E9XCJBYm9ydGVkKFwiK2ErXCIpXCI7dyhhKTtmYT0hMDthPW5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoYStcIi4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby5cIik7Y2EoYSk7dGhyb3cgYTt9ZnVuY3Rpb24gdWEoYSl7cmV0dXJuIGEuc3RhcnRzV2l0aChcImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIil9dmFyIEY7Rj1cInNwaW5lLndhc21cIjtpZighdWEoRikpe3ZhciB2YT1GO0Y9ZS5sb2NhdGVGaWxlP2UubG9jYXRlRmlsZSh2YSxyKTpyK3ZhfWZ1bmN0aW9uIHdhKGEpe3RyeXtpZihhPT1GJiZ5KXJldHVybiBuZXcgVWludDhBcnJheSh5KTt0aHJvd1wiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWRcIjt9Y2F0Y2goYil7eihiKX19XG5mdW5jdGlvbiB4YShhKXtyZXR1cm4geXx8XCJmdW5jdGlvblwiIT10eXBlb2YgZmV0Y2g/UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+d2EoYSkpOmZldGNoKGEse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4oYj0+e2lmKCFiLm9rKXRocm93XCJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICdcIithK1wiJ1wiO3JldHVybiBiLmFycmF5QnVmZmVyKCl9KS5jYXRjaCgoKT0+d2EoYSkpfWZ1bmN0aW9uIHlhKGEsYixjKXtyZXR1cm4geGEoYSkudGhlbihkPT5XZWJBc3NlbWJseS5pbnN0YW50aWF0ZShkLGIpKS50aGVuKGQ9PmQpLnRoZW4oYyxkPT57dyhcImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206IFwiK2QpO3ooZCl9KX1cbmZ1bmN0aW9uIHphKGEsYil7dmFyIGM9RjtyZXR1cm4geXx8XCJmdW5jdGlvblwiIT10eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmd8fHVhKGMpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBmZXRjaD95YShjLGEsYik6ZmV0Y2goYyx7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSkudGhlbihkPT5XZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhkLGEpLnRoZW4oYixmdW5jdGlvbihnKXt3KFwid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6IFwiK2cpO3coXCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvblwiKTtyZXR1cm4geWEoYyxhLGIpfSkpfWZ1bmN0aW9uIEFhKGEpe2Zvcig7MDxhLmxlbmd0aDspYS5zaGlmdCgpKGUpfVxuZnVuY3Rpb24gQmEoYSl7c3dpdGNoKGEpe2Nhc2UgMTpyZXR1cm4gMDtjYXNlIDI6cmV0dXJuIDE7Y2FzZSA0OnJldHVybiAyO2Nhc2UgODpyZXR1cm4gMztkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoYFVua25vd24gdHlwZSBzaXplOiAke2F9YCk7fX12YXIgQ2E9dm9pZCAwO2Z1bmN0aW9uIEcoYSl7Zm9yKHZhciBiPVwiXCI7QVthXTspYis9Q2FbQVthKytdXTtyZXR1cm4gYn12YXIgSD17fSxJPXt9LERhPXt9O2Z1bmN0aW9uIEVhKGEpe2lmKHZvaWQgMD09PWEpcmV0dXJuXCJfdW5rbm93blwiO2E9YS5yZXBsYWNlKC9bXmEtekEtWjAtOV9dL2csXCIkXCIpO3ZhciBiPWEuY2hhckNvZGVBdCgwKTtyZXR1cm4gNDg8PWImJjU3Pj1iP2BfJHthfWA6YX1mdW5jdGlvbiBGYShhLGIpe2E9RWEoYSk7cmV0dXJue1thXTpmdW5jdGlvbigpe3JldHVybiBiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19W2FdfVxuZnVuY3Rpb24gR2EoYSl7dmFyIGI9RXJyb3IsYz1GYShhLGZ1bmN0aW9uKGQpe3RoaXMubmFtZT1hO3RoaXMubWVzc2FnZT1kO2Q9RXJyb3IoZCkuc3RhY2s7dm9pZCAwIT09ZCYmKHRoaXMuc3RhY2s9dGhpcy50b1N0cmluZygpK1wiXFxuXCIrZC5yZXBsYWNlKC9eRXJyb3IoOlteXFxuXSopP1xcbi8sXCJcIikpfSk7Yy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShiLnByb3RvdHlwZSk7Yy5wcm90b3R5cGUuY29uc3RydWN0b3I9YztjLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT10aGlzLm1lc3NhZ2U/dGhpcy5uYW1lOmAke3RoaXMubmFtZX06ICR7dGhpcy5tZXNzYWdlfWB9O3JldHVybiBjfXZhciBKPXZvaWQgMDtmdW5jdGlvbiBMKGEpe3Rocm93IG5ldyBKKGEpO312YXIgSGE9dm9pZCAwO2Z1bmN0aW9uIElhKGEpe3Rocm93IG5ldyBIYShhKTt9XG5mdW5jdGlvbiBNKGEsYixjKXtmdW5jdGlvbiBkKGYpe2Y9YyhmKTtmLmxlbmd0aCE9PWEubGVuZ3RoJiZJYShcIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnRcIik7Zm9yKHZhciBsPTA7bDxhLmxlbmd0aDsrK2wpTihhW2xdLGZbbF0pfWEuZm9yRWFjaChmdW5jdGlvbihmKXtEYVtmXT1ifSk7dmFyIGc9QXJyYXkoYi5sZW5ndGgpLGs9W10saD0wO2IuZm9yRWFjaCgoZixsKT0+e0kuaGFzT3duUHJvcGVydHkoZik/Z1tsXT1JW2ZdOihrLnB1c2goZiksSC5oYXNPd25Qcm9wZXJ0eShmKXx8KEhbZl09W10pLEhbZl0ucHVzaCgoKT0+e2dbbF09SVtmXTsrK2g7aD09PWsubGVuZ3RoJiZkKGcpfSkpfSk7MD09PWsubGVuZ3RoJiZkKGcpfVxuZnVuY3Rpb24gTihhLGIpe3ZhciBjPXt9O2lmKCEoXCJhcmdQYWNrQWR2YW5jZVwiaW4gYikpdGhyb3cgbmV3IFR5cGVFcnJvcihcInJlZ2lzdGVyVHlwZSByZWdpc3RlcmVkSW5zdGFuY2UgcmVxdWlyZXMgYXJnUGFja0FkdmFuY2VcIik7dmFyIGQ9Yi5uYW1lO2F8fEwoYHR5cGUgXCIke2R9XCIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcmApO2lmKEkuaGFzT3duUHJvcGVydHkoYSkpe2lmKGMucWEpcmV0dXJuO0woYENhbm5vdCByZWdpc3RlciB0eXBlICcke2R9JyB0d2ljZWApfUlbYV09YjtkZWxldGUgRGFbYV07SC5oYXNPd25Qcm9wZXJ0eShhKSYmKGI9SFthXSxkZWxldGUgSFthXSxiLmZvckVhY2goZz0+ZygpKSl9ZnVuY3Rpb24gSmEoYSl7TChhLkYuSS5HLm5hbWUrXCIgaW5zdGFuY2UgYWxyZWFkeSBkZWxldGVkXCIpfXZhciBLYT0hMTtmdW5jdGlvbiBMYSgpe31cbmZ1bmN0aW9uIE1hKGEpey0tYS5jb3VudC52YWx1ZTswPT09YS5jb3VudC52YWx1ZSYmKGEuTD9hLk0uUyhhLkwpOmEuSS5HLlMoYS5IKSl9ZnVuY3Rpb24gTmEoYSxiLGMpe2lmKGI9PT1jKXJldHVybiBhO2lmKHZvaWQgMD09PWMuSilyZXR1cm4gbnVsbDthPU5hKGEsYixjLkopO3JldHVybiBudWxsPT09YT9udWxsOmMuaGEoYSl9dmFyIE9hPXt9LE89W107ZnVuY3Rpb24gUGEoKXtmb3IoO08ubGVuZ3RoOyl7dmFyIGE9Ty5wb3AoKTthLkYuVT0hMTthW1wiZGVsZXRlXCJdKCl9fXZhciBQPXZvaWQgMCxRPXt9O2Z1bmN0aW9uIFFhKGEsYil7Zm9yKHZvaWQgMD09PWImJkwoXCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWRcIik7YS5KOyliPWEuVyhiKSxhPWEuSjtyZXR1cm4gUVtiXX1cbmZ1bmN0aW9uIFJhKGEsYil7Yi5JJiZiLkh8fElhKFwibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZVwiKTshIWIuTSE9PSEhYi5MJiZJYShcIkJvdGggc21hcnRQdHJUeXBlIGFuZCBzbWFydFB0ciBtdXN0IGJlIHNwZWNpZmllZFwiKTtiLmNvdW50PXt2YWx1ZToxfTtyZXR1cm4gUihPYmplY3QuY3JlYXRlKGEse0Y6e3ZhbHVlOmJ9fSkpfWZ1bmN0aW9uIFIoYSl7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSlyZXR1cm4gUj1iPT5iLGE7S2E9bmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KGI9PntNYShiLkYpfSk7Uj1iPT57dmFyIGM9Yi5GO2MuTCYmS2EucmVnaXN0ZXIoYix7RjpjfSxiKTtyZXR1cm4gYn07TGE9Yj0+e0thLnVucmVnaXN0ZXIoYil9O3JldHVybiBSKGEpfWZ1bmN0aW9uIFMoKXt9XG5mdW5jdGlvbiBTYShhLGIsYyl7aWYodm9pZCAwPT09YVtiXS5LKXt2YXIgZD1hW2JdO2FbYl09ZnVuY3Rpb24oKXthW2JdLksuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCl8fEwoYEZ1bmN0aW9uICcke2N9JyBjYWxsZWQgd2l0aCBhbiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgKCR7YXJndW1lbnRzLmxlbmd0aH0pIC0gZXhwZWN0cyBvbmUgb2YgKCR7YVtiXS5LfSkhYCk7cmV0dXJuIGFbYl0uS1thcmd1bWVudHMubGVuZ3RoXS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2FbYl0uSz1bXTthW2JdLktbZC5UXT1kfX1cbmZ1bmN0aW9uIFRhKGEsYil7ZS5oYXNPd25Qcm9wZXJ0eShhKT8oTChgQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICcke2F9JyB0d2ljZWApLFNhKGUsYSxhKSxlLmhhc093blByb3BlcnR5KHZvaWQgMCkmJkwoXCJDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgb3ZlcmxvYWRzIG9mIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzICh1bmRlZmluZWQpIVwiKSxlW2FdLktbdm9pZCAwXT1iKTplW2FdPWJ9ZnVuY3Rpb24gVWEoYSxiLGMsZCxnLGssaCxmKXt0aGlzLm5hbWU9YTt0aGlzLmNvbnN0cnVjdG9yPWI7dGhpcy5QPWM7dGhpcy5TPWQ7dGhpcy5KPWc7dGhpcy5pYT1rO3RoaXMuVz1oO3RoaXMuaGE9Zjt0aGlzLmxhPVtdfVxuZnVuY3Rpb24gVmEoYSxiLGMpe2Zvcig7YiE9PWM7KWIuV3x8TChgRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAke2MubmFtZX0sIGdvdCBhbiBpbnN0YW5jZSBvZiAke2IubmFtZX1gKSxhPWIuVyhhKSxiPWIuSjtyZXR1cm4gYX1mdW5jdGlvbiBXYShhLGIpe2lmKG51bGw9PT1iKXJldHVybiB0aGlzLiQmJkwoYG51bGwgaXMgbm90IGEgdmFsaWQgJHt0aGlzLm5hbWV9YCksMDtiLkZ8fEwoYENhbm5vdCBwYXNzIFwiJHtYYShiKX1cIiBhcyBhICR7dGhpcy5uYW1lfWApO2IuRi5IfHxMKGBDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAke3RoaXMubmFtZX1gKTtyZXR1cm4gVmEoYi5GLkgsYi5GLkkuRyx0aGlzLkcpfVxuZnVuY3Rpb24gWWEoYSxiKXtpZihudWxsPT09Yil7dGhpcy4kJiZMKGBudWxsIGlzIG5vdCBhIHZhbGlkICR7dGhpcy5uYW1lfWApO2lmKHRoaXMuWil7dmFyIGM9dGhpcy5tYSgpO251bGwhPT1hJiZhLnB1c2godGhpcy5TLGMpO3JldHVybiBjfXJldHVybiAwfWIuRnx8TChgQ2Fubm90IHBhc3MgXCIke1hhKGIpfVwiIGFzIGEgJHt0aGlzLm5hbWV9YCk7Yi5GLkh8fEwoYENhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICR7dGhpcy5uYW1lfWApOyF0aGlzLlkmJmIuRi5JLlkmJkwoYENhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgJHtiLkYuTT9iLkYuTS5uYW1lOmIuRi5JLm5hbWV9IHRvIHBhcmFtZXRlciB0eXBlICR7dGhpcy5uYW1lfWApO2M9VmEoYi5GLkgsYi5GLkkuRyx0aGlzLkcpO2lmKHRoaXMuWilzd2l0Y2godm9pZCAwPT09Yi5GLkwmJkwoXCJQYXNzaW5nIHJhdyBwb2ludGVyIHRvIHNtYXJ0IHBvaW50ZXIgaXMgaWxsZWdhbFwiKSxcbnRoaXMucGEpe2Nhc2UgMDpiLkYuTT09PXRoaXM/Yz1iLkYuTDpMKGBDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICR7Yi5GLk0/Yi5GLk0ubmFtZTpiLkYuSS5uYW1lfSB0byBwYXJhbWV0ZXIgdHlwZSAke3RoaXMubmFtZX1gKTticmVhaztjYXNlIDE6Yz1iLkYuTDticmVhaztjYXNlIDI6aWYoYi5GLk09PT10aGlzKWM9Yi5GLkw7ZWxzZXt2YXIgZD1iLmNsb25lKCk7Yz10aGlzLm5hKGMsVChmdW5jdGlvbigpe2RbXCJkZWxldGVcIl0oKX0pKTtudWxsIT09YSYmYS5wdXNoKHRoaXMuUyxjKX1icmVhaztkZWZhdWx0OkwoXCJVbnN1cHBvcnRpbmcgc2hhcmluZyBwb2xpY3lcIil9cmV0dXJuIGN9XG5mdW5jdGlvbiBaYShhLGIpe2lmKG51bGw9PT1iKXJldHVybiB0aGlzLiQmJkwoYG51bGwgaXMgbm90IGEgdmFsaWQgJHt0aGlzLm5hbWV9YCksMDtiLkZ8fEwoYENhbm5vdCBwYXNzIFwiJHtYYShiKX1cIiBhcyBhICR7dGhpcy5uYW1lfWApO2IuRi5IfHxMKGBDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAke3RoaXMubmFtZX1gKTtiLkYuSS5ZJiZMKGBDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICR7Yi5GLkkubmFtZX0gdG8gcGFyYW1ldGVyIHR5cGUgJHt0aGlzLm5hbWV9YCk7cmV0dXJuIFZhKGIuRi5ILGIuRi5JLkcsdGhpcy5HKX1mdW5jdGlvbiAkYShhKXtyZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoa2FbYT4+Ml0pfVxuZnVuY3Rpb24gVShhLGIsYyxkKXt0aGlzLm5hbWU9YTt0aGlzLkc9Yjt0aGlzLiQ9Yzt0aGlzLlk9ZDt0aGlzLlo9ITE7dGhpcy5TPXRoaXMubmE9dGhpcy5tYT10aGlzLmRhPXRoaXMucGE9dGhpcy5rYT12b2lkIDA7dm9pZCAwIT09Yi5KP3RoaXMudG9XaXJlVHlwZT1ZYToodGhpcy50b1dpcmVUeXBlPWQ/V2E6WmEsdGhpcy5PPW51bGwpfWZ1bmN0aW9uIGFiKGEsYil7ZS5oYXNPd25Qcm9wZXJ0eShhKXx8SWEoXCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbFwiKTtlW2FdPWI7ZVthXS5UPXZvaWQgMH1cbmZ1bmN0aW9uIGJiKGEsYil7dmFyIGM9W107cmV0dXJuIGZ1bmN0aW9uKCl7Yy5sZW5ndGg9MDtPYmplY3QuYXNzaWduKGMsYXJndW1lbnRzKTtpZihhLmluY2x1ZGVzKFwialwiKSl7dmFyIGQ9ZVtcImR5bkNhbGxfXCIrYV07ZD1jJiZjLmxlbmd0aD9kLmFwcGx5KG51bGwsW2JdLmNvbmNhdChjKSk6ZC5jYWxsKG51bGwsYil9ZWxzZSBkPW9hLmdldChiKS5hcHBseShudWxsLGMpO3JldHVybiBkfX1mdW5jdGlvbiBWKGEsYil7YT1HKGEpO3ZhciBjPWEuaW5jbHVkZXMoXCJqXCIpP2JiKGEsYik6b2EuZ2V0KGIpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIGMmJkwoYHVua25vd24gZnVuY3Rpb24gcG9pbnRlciB3aXRoIHNpZ25hdHVyZSAke2F9OiAke2J9YCk7cmV0dXJuIGN9dmFyIGNiPXZvaWQgMDtmdW5jdGlvbiBkYihhKXthPWViKGEpO3ZhciBiPUcoYSk7VyhhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIFgoYSxiKXtmdW5jdGlvbiBjKGspe2dba118fElba118fChEYVtrXT9EYVtrXS5mb3JFYWNoKGMpOihkLnB1c2goayksZ1trXT0hMCkpfXZhciBkPVtdLGc9e307Yi5mb3JFYWNoKGMpO3Rocm93IG5ldyBjYihgJHthfTogYCtkLm1hcChkYikuam9pbihbXCIsIFwiXSkpO31mdW5jdGlvbiBmYihhKXtmb3IoO2EubGVuZ3RoOyl7dmFyIGI9YS5wb3AoKTthLnBvcCgpKGIpfX1cbmZ1bmN0aW9uIGhiKGEsYixjLGQsZyl7dmFyIGs9Yi5sZW5ndGg7Mj5rJiZMKFwiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhXCIpO3ZhciBoPW51bGwhPT1iWzFdJiZudWxsIT09YyxmPSExO2ZvcihjPTE7YzxiLmxlbmd0aDsrK2MpaWYobnVsbCE9PWJbY10mJnZvaWQgMD09PWJbY10uTyl7Zj0hMDticmVha312YXIgbD1cInZvaWRcIiE9PWJbMF0ubmFtZSxuPWstMixtPUFycmF5KG4pLHE9W10scD1bXTtyZXR1cm4gZnVuY3Rpb24oKXthcmd1bWVudHMubGVuZ3RoIT09biYmTChgZnVuY3Rpb24gJHthfSBjYWxsZWQgd2l0aCAke2FyZ3VtZW50cy5sZW5ndGh9IGFyZ3VtZW50cywgZXhwZWN0ZWQgJHtufSBhcmdzIWApO3AubGVuZ3RoPTA7cS5sZW5ndGg9aD8yOjE7cVswXT1nO2lmKGgpe3ZhciB1PWJbMV0udG9XaXJlVHlwZShwLHRoaXMpO3FbMV09dX1mb3IodmFyIHQ9MDt0PG47Kyt0KW1bdF09XG5iW3QrMl0udG9XaXJlVHlwZShwLGFyZ3VtZW50c1t0XSkscS5wdXNoKG1bdF0pO3Q9ZC5hcHBseShudWxsLHEpO2lmKGYpZmIocCk7ZWxzZSBmb3IodmFyIHY9aD8xOjI7djxiLmxlbmd0aDt2Kyspe3ZhciBFPTE9PT12P3U6bVt2LTJdO251bGwhPT1iW3ZdLk8mJmJbdl0uTyhFKX11PWw/YlswXS5mcm9tV2lyZVR5cGUodCk6dm9pZCAwO3JldHVybiB1fX1mdW5jdGlvbiBpYihhLGIpe2Zvcih2YXIgYz1bXSxkPTA7ZDxhO2QrKyljLnB1c2goQltiKzQqZD4+Ml0pO3JldHVybiBjfVxuZnVuY3Rpb24gamIoYSxiLGMpe2EgaW5zdGFuY2VvZiBPYmplY3R8fEwoYCR7Y30gd2l0aCBpbnZhbGlkIFwidGhpc1wiOiAke2F9YCk7YSBpbnN0YW5jZW9mIGIuRy5jb25zdHJ1Y3Rvcnx8TChgJHtjfSBpbmNvbXBhdGlibGUgd2l0aCBcInRoaXNcIiBvZiB0eXBlICR7YS5jb25zdHJ1Y3Rvci5uYW1lfWApO2EuRi5IfHxMKGBjYW5ub3QgY2FsbCBlbXNjcmlwdGVuIGJpbmRpbmcgbWV0aG9kICR7Y30gb24gZGVsZXRlZCBvYmplY3RgKTtyZXR1cm4gVmEoYS5GLkgsYS5GLkkuRyxiLkcpfVxudmFyIFk9bmV3IGZ1bmN0aW9uKCl7dGhpcy5OPVt2b2lkIDBdO3RoaXMuYWE9W107dGhpcy5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuTlthXX07dGhpcy5oYXM9ZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMCE9PXRoaXMuTlthXX07dGhpcy5lYT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmFhLnBvcCgpfHx0aGlzLk4ubGVuZ3RoO3RoaXMuTltiXT1hO3JldHVybiBifTt0aGlzLmZhPWZ1bmN0aW9uKGEpe3RoaXMuTlthXT12b2lkIDA7dGhpcy5hYS5wdXNoKGEpfX07ZnVuY3Rpb24ga2IoYSl7YT49WS5iYSYmMD09PS0tWS5nZXQoYSkub2EmJlkuZmEoYSl9XG52YXIgWj1hPT57YXx8TChcIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9IFwiK2EpO3JldHVybiBZLmdldChhKS52YWx1ZX0sVD1hPT57c3dpdGNoKGEpe2Nhc2Ugdm9pZCAwOnJldHVybiAxO2Nhc2UgbnVsbDpyZXR1cm4gMjtjYXNlICEwOnJldHVybiAzO2Nhc2UgITE6cmV0dXJuIDQ7ZGVmYXVsdDpyZXR1cm4gWS5lYSh7b2E6MSx2YWx1ZTphfSl9fTtmdW5jdGlvbiBYYShhKXtpZihudWxsPT09YSlyZXR1cm5cIm51bGxcIjt2YXIgYj10eXBlb2YgYTtyZXR1cm5cIm9iamVjdFwiPT09Ynx8XCJhcnJheVwiPT09Ynx8XCJmdW5jdGlvblwiPT09Yj9hLnRvU3RyaW5nKCk6XCJcIithfVxuZnVuY3Rpb24gbGIoYSxiKXtzd2l0Y2goYil7Y2FzZSAyOnJldHVybiBmdW5jdGlvbihjKXtyZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUobGFbYz4+Ml0pfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKGMpe3JldHVybiB0aGlzLmZyb21XaXJlVHlwZShtYVtjPj4zXSl9O2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gZmxvYXQgdHlwZTogXCIrYSk7fX1cbmZ1bmN0aW9uIG1iKGEsYixjKXtzd2l0Y2goYil7Y2FzZSAwOnJldHVybiBjP2Z1bmN0aW9uKGQpe3JldHVybiBoYVtkXX06ZnVuY3Rpb24oZCl7cmV0dXJuIEFbZF19O2Nhc2UgMTpyZXR1cm4gYz9mdW5jdGlvbihkKXtyZXR1cm4gaWFbZD4+MV19OmZ1bmN0aW9uKGQpe3JldHVybiBqYVtkPj4xXX07Y2FzZSAyOnJldHVybiBjP2Z1bmN0aW9uKGQpe3JldHVybiBrYVtkPj4yXX06ZnVuY3Rpb24oZCl7cmV0dXJuIEJbZD4+Ml19O2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gaW50ZWdlciB0eXBlOiBcIithKTt9fXZhciBuYj1cInVuZGVmaW5lZFwiIT10eXBlb2YgVGV4dERlY29kZXI/bmV3IFRleHREZWNvZGVyKFwidXRmOFwiKTp2b2lkIDA7ZnVuY3Rpb24gb2IoYSxiKXt2YXIgYz1JW2FdO3ZvaWQgMD09PWMmJkwoYitcIiBoYXMgdW5rbm93biB0eXBlIFwiK2RiKGEpKTtyZXR1cm4gY312YXIgcGI9e307XG5mdW5jdGlvbiBxYigpe3ZhciBhPWUuU3BpbmVXYXNtVXRpbCxiPWEuZ2V0Q3VycmVudExpc3RlbmVySUQoKSxjPWEuZ2V0Q3VycmVudFRyYWNrRW50cnkoKSxkPWEuZ2V0Q3VycmVudEV2ZW50KCk7YT1hLmdldEN1cnJlbnRFdmVudFR5cGUoKTtnbG9iYWxUaGlzLlRyYWNrRW50cnlMaXN0ZW5lcnMuZW1pdExpc3RlbmVyKGIsYyxkLGEpfWUuX3NwaW5lTGlzdGVuZXJDYWxsQmFja0Zyb21KUz1xYjtmdW5jdGlvbiByYigpe3ZhciBhPWUuU3BpbmVXYXNtVXRpbCxiPWEuZ2V0Q3VycmVudExpc3RlbmVySUQoKSxjPWEuZ2V0Q3VycmVudEV2ZW50VHlwZSgpLGQ9YS5nZXRDdXJyZW50VHJhY2tFbnRyeSgpO2E9YS5nZXRDdXJyZW50RXZlbnQoKTtnbG9iYWxUaGlzLlRyYWNrRW50cnlMaXN0ZW5lcnMuZW1pdFRyYWNrRW50cnlMaXN0ZW5lcihiLGQsYSxjKX1lLl9zcGluZVRyYWNrTGlzdGVuZXJDYWxsYmFjaz1yYjtcbmZvcih2YXIgc2I9QXJyYXkoMjU2KSx0Yj0wOzI1Nj50YjsrK3RiKXNiW3RiXT1TdHJpbmcuZnJvbUNoYXJDb2RlKHRiKTtDYT1zYjtKPWUuQmluZGluZ0Vycm9yPUdhKFwiQmluZGluZ0Vycm9yXCIpO0hhPWUuSW50ZXJuYWxFcnJvcj1HYShcIkludGVybmFsRXJyb3JcIik7Uy5wcm90b3R5cGUuaXNBbGlhc09mPWZ1bmN0aW9uKGEpe2lmKCEodGhpcyBpbnN0YW5jZW9mIFMmJmEgaW5zdGFuY2VvZiBTKSlyZXR1cm4hMTt2YXIgYj10aGlzLkYuSS5HLGM9dGhpcy5GLkgsZD1hLkYuSS5HO2ZvcihhPWEuRi5IO2IuSjspYz1iLlcoYyksYj1iLko7Zm9yKDtkLko7KWE9ZC5XKGEpLGQ9ZC5KO3JldHVybiBiPT09ZCYmYz09PWF9O1xuUy5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXt0aGlzLkYuSHx8SmEodGhpcyk7aWYodGhpcy5GLlYpcmV0dXJuIHRoaXMuRi5jb3VudC52YWx1ZSs9MSx0aGlzO3ZhciBhPVIsYj1PYmplY3QsYz1iLmNyZWF0ZSxkPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSxnPXRoaXMuRjthPWEoYy5jYWxsKGIsZCx7Rjp7dmFsdWU6e2NvdW50OmcuY291bnQsVTpnLlUsVjpnLlYsSDpnLkgsSTpnLkksTDpnLkwsTTpnLk19fX0pKTthLkYuY291bnQudmFsdWUrPTE7YS5GLlU9ITE7cmV0dXJuIGF9O1MucHJvdG90eXBlW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKCl7dGhpcy5GLkh8fEphKHRoaXMpO3RoaXMuRi5VJiYhdGhpcy5GLlYmJkwoXCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uXCIpO0xhKHRoaXMpO01hKHRoaXMuRik7dGhpcy5GLlZ8fCh0aGlzLkYuTD12b2lkIDAsdGhpcy5GLkg9dm9pZCAwKX07Uy5wcm90b3R5cGUuaXNEZWxldGVkPWZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuRi5IfTtcblMucHJvdG90eXBlLmRlbGV0ZUxhdGVyPWZ1bmN0aW9uKCl7dGhpcy5GLkh8fEphKHRoaXMpO3RoaXMuRi5VJiYhdGhpcy5GLlYmJkwoXCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uXCIpO08ucHVzaCh0aGlzKTsxPT09Ty5sZW5ndGgmJlAmJlAoUGEpO3RoaXMuRi5VPSEwO3JldHVybiB0aGlzfTtlLmdldEluaGVyaXRlZEluc3RhbmNlQ291bnQ9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXMoUSkubGVuZ3RofTtlLmdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXM9ZnVuY3Rpb24oKXt2YXIgYT1bXSxiO2ZvcihiIGluIFEpUS5oYXNPd25Qcm9wZXJ0eShiKSYmYS5wdXNoKFFbYl0pO3JldHVybiBhfTtlLmZsdXNoUGVuZGluZ0RlbGV0ZXM9UGE7ZS5zZXREZWxheUZ1bmN0aW9uPWZ1bmN0aW9uKGEpe1A9YTtPLmxlbmd0aCYmUCYmUChQYSl9O1UucHJvdG90eXBlLmphPWZ1bmN0aW9uKGEpe3RoaXMuZGEmJihhPXRoaXMuZGEoYSkpO3JldHVybiBhfTtcblUucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEpe3RoaXMuUyYmdGhpcy5TKGEpfTtVLnByb3RvdHlwZS5hcmdQYWNrQWR2YW5jZT04O1UucHJvdG90eXBlLnJlYWRWYWx1ZUZyb21Qb2ludGVyPSRhO1UucHJvdG90eXBlLmRlbGV0ZU9iamVjdD1mdW5jdGlvbihhKXtpZihudWxsIT09YSlhW1wiZGVsZXRlXCJdKCl9O1xuVS5wcm90b3R5cGUuZnJvbVdpcmVUeXBlPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXtyZXR1cm4gdGhpcy5aP1JhKHRoaXMuRy5QLHtJOnRoaXMua2EsSDpjLE06dGhpcyxMOmF9KTpSYSh0aGlzLkcuUCx7STp0aGlzLEg6YX0pfXZhciBjPXRoaXMuamEoYSk7aWYoIWMpcmV0dXJuIHRoaXMuY2EoYSksbnVsbDt2YXIgZD1RYSh0aGlzLkcsYyk7aWYodm9pZCAwIT09ZCl7aWYoMD09PWQuRi5jb3VudC52YWx1ZSlyZXR1cm4gZC5GLkg9YyxkLkYuTD1hLGQuY2xvbmUoKTtkPWQuY2xvbmUoKTt0aGlzLmNhKGEpO3JldHVybiBkfWQ9dGhpcy5HLmlhKGMpO2Q9T2FbZF07aWYoIWQpcmV0dXJuIGIuY2FsbCh0aGlzKTtkPXRoaXMuWT9kLmdhOmQucG9pbnRlclR5cGU7dmFyIGc9TmEoYyx0aGlzLkcsZC5HKTtyZXR1cm4gbnVsbD09PWc/Yi5jYWxsKHRoaXMpOnRoaXMuWj9SYShkLkcuUCx7STpkLEg6ZyxNOnRoaXMsTDphfSk6UmEoZC5HLlAse0k6ZCxIOmd9KX07XG5jYj1lLlVuYm91bmRUeXBlRXJyb3I9R2EoXCJVbmJvdW5kVHlwZUVycm9yXCIpO1kuTi5wdXNoKHt2YWx1ZTp2b2lkIDB9LHt2YWx1ZTpudWxsfSx7dmFsdWU6ITB9LHt2YWx1ZTohMX0pO1kuYmE9WS5OLmxlbmd0aDtlLmNvdW50X2VtdmFsX2hhbmRsZXM9ZnVuY3Rpb24oKXtmb3IodmFyIGE9MCxiPVkuYmE7YjxZLk4ubGVuZ3RoOysrYil2b2lkIDAhPT1ZLk5bYl0mJisrYTtyZXR1cm4gYX07XG52YXIgdmI9e3A6ZnVuY3Rpb24oKXt9LHQ6ZnVuY3Rpb24oYSxiLGMsZCxnKXt2YXIgaz1CYShjKTtiPUcoYik7TihhLHtuYW1lOmIsZnJvbVdpcmVUeXBlOmZ1bmN0aW9uKGgpe3JldHVybiEhaH0sdG9XaXJlVHlwZTpmdW5jdGlvbihoLGYpe3JldHVybiBmP2Q6Z30sYXJnUGFja0FkdmFuY2U6OCxyZWFkVmFsdWVGcm9tUG9pbnRlcjpmdW5jdGlvbihoKXtpZigxPT09Yyl2YXIgZj1oYTtlbHNlIGlmKDI9PT1jKWY9aWE7ZWxzZSBpZig0PT09YylmPWthO2Vsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6IFwiK2IpO3JldHVybiB0aGlzLmZyb21XaXJlVHlwZShmW2g+PmtdKX0sTzpudWxsfSl9LGM6ZnVuY3Rpb24oYSxiLGMsZCxnLGssaCxmLGwsbixtLHEscCl7bT1HKG0pO2s9VihnLGspO2YmJihmPVYoaCxmKSk7biYmKG49VihsLG4pKTtwPVYocSxwKTt2YXIgdT1FYShtKTtUYSh1LGZ1bmN0aW9uKCl7WChgQ2Fubm90IGNvbnN0cnVjdCAke219IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxcbltkXSl9KTtNKFthLGIsY10sZD9bZF06W10sZnVuY3Rpb24odCl7dD10WzBdO2lmKGQpe3ZhciB2PXQuRzt2YXIgRT12LlB9ZWxzZSBFPVMucHJvdG90eXBlO3Q9RmEodSxmdW5jdGlvbigpe2lmKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSE9PUspdGhyb3cgbmV3IEooXCJVc2UgJ25ldycgdG8gY29uc3RydWN0IFwiK20pO2lmKHZvaWQgMD09PXguUil0aHJvdyBuZXcgSihtK1wiIGhhcyBubyBhY2Nlc3NpYmxlIGNvbnN0cnVjdG9yXCIpO3ZhciBnYj14LlJbYXJndW1lbnRzLmxlbmd0aF07aWYodm9pZCAwPT09Z2IpdGhyb3cgbmV3IEooYFRyaWVkIHRvIGludm9rZSBjdG9yIG9mICR7bX0gd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgke2FyZ3VtZW50cy5sZW5ndGh9KSAtIGV4cGVjdGVkICgke09iamVjdC5rZXlzKHguUikudG9TdHJpbmcoKX0pIHBhcmFtZXRlcnMgaW5zdGVhZCFgKTtyZXR1cm4gZ2IuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7dmFyIEs9T2JqZWN0LmNyZWF0ZShFLFxue2NvbnN0cnVjdG9yOnt2YWx1ZTp0fX0pO3QucHJvdG90eXBlPUs7dmFyIHg9bmV3IFVhKG0sdCxLLHAsdixrLGYsbik7eC5KJiYodm9pZCAwPT09eC5KLlgmJih4LkouWD1bXSkseC5KLlgucHVzaCh4KSk7dj1uZXcgVShtLHgsITAsITEpO0U9bmV3IFUobStcIipcIix4LCExLCExKTt2YXIgYWE9bmV3IFUobStcIiBjb25zdCpcIix4LCExLCEwKTtPYVthXT17cG9pbnRlclR5cGU6RSxnYTphYX07YWIodSx0KTtyZXR1cm5bdixFLGFhXX0pfSxmOmZ1bmN0aW9uKGEsYixjLGQsZyxrLGgpe3ZhciBmPWliKGMsZCk7Yj1HKGIpO2s9VihnLGspO00oW10sW2FdLGZ1bmN0aW9uKGwpe2Z1bmN0aW9uIG4oKXtYKGBDYW5ub3QgY2FsbCAke219IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxmKX1sPWxbMF07dmFyIG09YCR7bC5uYW1lfS4ke2J9YDtiLnN0YXJ0c1dpdGgoXCJAQFwiKSYmKGI9U3ltYm9sW2Iuc3Vic3RyaW5nKDIpXSk7dmFyIHE9bC5HLmNvbnN0cnVjdG9yO3ZvaWQgMD09PXFbYl0/KG4uVD1jLVxuMSxxW2JdPW4pOihTYShxLGIsbSkscVtiXS5LW2MtMV09bik7TShbXSxmLGZ1bmN0aW9uKHApe3A9aGIobSxbcFswXSxudWxsXS5jb25jYXQocC5zbGljZSgxKSksbnVsbCxrLGgpO3ZvaWQgMD09PXFbYl0uSz8ocC5UPWMtMSxxW2JdPXApOnFbYl0uS1tjLTFdPXA7aWYobC5HLlgpZm9yKGNvbnN0IHUgb2YgbC5HLlgpdS5jb25zdHJ1Y3Rvci5oYXNPd25Qcm9wZXJ0eShiKXx8KHUuY29uc3RydWN0b3JbYl09cCk7cmV0dXJuW119KTtyZXR1cm5bXX0pfSxoOmZ1bmN0aW9uKGEsYixjLGQsZyxrLGgsZil7Yj1HKGIpO2s9VihnLGspO00oW10sW2FdLGZ1bmN0aW9uKGwpe2w9bFswXTt2YXIgbj1gJHtsLm5hbWV9LiR7Yn1gLG09e2dldDpmdW5jdGlvbigpe1goYENhbm5vdCBhY2Nlc3MgJHtufSBkdWUgdG8gdW5ib3VuZCB0eXBlc2AsW2NdKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9O20uc2V0PWY/KCk9PntYKGBDYW5ub3QgYWNjZXNzICR7bn0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLFxuW2NdKX06KCk9PntMKGAke259IGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5YCl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShsLkcuY29uc3RydWN0b3IsYixtKTtNKFtdLFtjXSxmdW5jdGlvbihxKXtxPXFbMF07dmFyIHA9e2dldDpmdW5jdGlvbigpe3JldHVybiBxLmZyb21XaXJlVHlwZShrKGQpKX0sZW51bWVyYWJsZTohMH07ZiYmKGY9VihoLGYpLHAuc2V0PXU9Pnt2YXIgdD1bXTtmKGQscS50b1dpcmVUeXBlKHQsdSkpO2ZiKHQpfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGwuRy5jb25zdHJ1Y3RvcixiLHApO3JldHVybltdfSk7cmV0dXJuW119KX0sZDpmdW5jdGlvbihhLGIsYyxkLGcsayl7MDxifHx6KCk7dmFyIGg9aWIoYixjKTtnPVYoZCxnKTtNKFtdLFthXSxmdW5jdGlvbihmKXtmPWZbMF07dmFyIGw9YGNvbnN0cnVjdG9yICR7Zi5uYW1lfWA7dm9pZCAwPT09Zi5HLlImJihmLkcuUj1bXSk7aWYodm9pZCAwIT09Zi5HLlJbYi0xXSl0aHJvdyBuZXcgSihgQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoJHtiLVxuMX0pIGZvciBjbGFzcyAnJHtmLm5hbWV9JyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hYCk7Zi5HLlJbYi0xXT0oKT0+e1goYENhbm5vdCBjb25zdHJ1Y3QgJHtmLm5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxoKX07TShbXSxoLGZ1bmN0aW9uKG4pe24uc3BsaWNlKDEsMCxudWxsKTtmLkcuUltiLTFdPWhiKGwsbixudWxsLGcsayk7cmV0dXJuW119KTtyZXR1cm5bXX0pfSxhOmZ1bmN0aW9uKGEsYixjLGQsZyxrLGgsZil7dmFyIGw9aWIoYyxkKTtiPUcoYik7az1WKGcsayk7TShbXSxbYV0sZnVuY3Rpb24obil7ZnVuY3Rpb24gbSgpe1goYENhbm5vdCBjYWxsICR7cX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLGwpfW49blswXTt2YXIgcT1gJHtuLm5hbWV9LiR7Yn1gO2Iuc3RhcnRzV2l0aChcIkBAXCIpJiYoYj1TeW1ib2xbYi5zdWJzdHJpbmcoMildKTtcbmYmJm4uRy5sYS5wdXNoKGIpO3ZhciBwPW4uRy5QLHU9cFtiXTt2b2lkIDA9PT11fHx2b2lkIDA9PT11LksmJnUuY2xhc3NOYW1lIT09bi5uYW1lJiZ1LlQ9PT1jLTI/KG0uVD1jLTIsbS5jbGFzc05hbWU9bi5uYW1lLHBbYl09bSk6KFNhKHAsYixxKSxwW2JdLktbYy0yXT1tKTtNKFtdLGwsZnVuY3Rpb24odCl7dD1oYihxLHQsbixrLGgpO3ZvaWQgMD09PXBbYl0uSz8odC5UPWMtMixwW2JdPXQpOnBbYl0uS1tjLTJdPXQ7cmV0dXJuW119KTtyZXR1cm5bXX0pfSxiOmZ1bmN0aW9uKGEsYixjLGQsZyxrLGgsZixsLG4pe2I9RyhiKTtnPVYoZCxnKTtNKFtdLFthXSxmdW5jdGlvbihtKXttPW1bMF07dmFyIHE9YCR7bS5uYW1lfS4ke2J9YCxwPXtnZXQ6ZnVuY3Rpb24oKXtYKGBDYW5ub3QgYWNjZXNzICR7cX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLFtjLGhdKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9O3Auc2V0PWw/KCk9PntYKGBDYW5ub3QgYWNjZXNzICR7cX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLFxuW2MsaF0pfTooKT0+e0wocStcIiBpcyBhIHJlYWQtb25seSBwcm9wZXJ0eVwiKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KG0uRy5QLGIscCk7TShbXSxsP1tjLGhdOltjXSxmdW5jdGlvbih1KXt2YXIgdD11WzBdLHY9e2dldDpmdW5jdGlvbigpe3ZhciBLPWpiKHRoaXMsbSxxK1wiIGdldHRlclwiKTtyZXR1cm4gdC5mcm9tV2lyZVR5cGUoZyhrLEspKX0sZW51bWVyYWJsZTohMH07aWYobCl7bD1WKGYsbCk7dmFyIEU9dVsxXTt2LnNldD1mdW5jdGlvbihLKXt2YXIgeD1qYih0aGlzLG0scStcIiBzZXR0ZXJcIiksYWE9W107bChuLHgsRS50b1dpcmVUeXBlKGFhLEspKTtmYihhYSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShtLkcuUCxiLHYpO3JldHVybltdfSk7cmV0dXJuW119KX0sczpmdW5jdGlvbihhLGIpe2I9RyhiKTtOKGEse25hbWU6Yixmcm9tV2lyZVR5cGU6ZnVuY3Rpb24oYyl7dmFyIGQ9WihjKTtrYihjKTtyZXR1cm4gZH0sdG9XaXJlVHlwZTpmdW5jdGlvbihjLGQpe3JldHVybiBUKGQpfSxcbmFyZ1BhY2tBZHZhbmNlOjgscmVhZFZhbHVlRnJvbVBvaW50ZXI6JGEsTzpudWxsfSl9LG06ZnVuY3Rpb24oYSxiLGMpe2M9QmEoYyk7Yj1HKGIpO04oYSx7bmFtZTpiLGZyb21XaXJlVHlwZTpmdW5jdGlvbihkKXtyZXR1cm4gZH0sdG9XaXJlVHlwZTpmdW5jdGlvbihkLGcpe3JldHVybiBnfSxhcmdQYWNrQWR2YW5jZTo4LHJlYWRWYWx1ZUZyb21Qb2ludGVyOmxiKGIsYyksTzpudWxsfSl9LGU6ZnVuY3Rpb24oYSxiLGMsZCxnKXtiPUcoYik7LTE9PT1nJiYoZz00Mjk0OTY3Mjk1KTtnPUJhKGMpO3ZhciBrPWY9PmY7aWYoMD09PWQpe3ZhciBoPTMyLTgqYztrPWY9PmY8PGg+Pj5ofWM9Yi5pbmNsdWRlcyhcInVuc2lnbmVkXCIpP2Z1bmN0aW9uKGYsbCl7cmV0dXJuIGw+Pj4wfTpmdW5jdGlvbihmLGwpe3JldHVybiBsfTtOKGEse25hbWU6Yixmcm9tV2lyZVR5cGU6ayx0b1dpcmVUeXBlOmMsYXJnUGFja0FkdmFuY2U6OCxyZWFkVmFsdWVGcm9tUG9pbnRlcjptYihiLGcsMCE9PWQpLE86bnVsbH0pfSxcbnI6ZnVuY3Rpb24oYSxiKXtiPUcoYik7dmFyIGM9XCJzdGQ6OnN0cmluZ1wiPT09YjtOKGEse25hbWU6Yixmcm9tV2lyZVR5cGU6ZnVuY3Rpb24oZCl7dmFyIGc9QltkPj4yXSxrPWQrNDtpZihjKWZvcih2YXIgaD1rLGY9MDtmPD1nOysrZil7dmFyIGw9aytmO2lmKGY9PWd8fDA9PUFbbF0pe2lmKGgpe3ZhciBuPWg7dmFyIG09QSxxPW4rKGwtaCk7Zm9yKGg9bjttW2hdJiYhKGg+PXEpOykrK2g7aWYoMTY8aC1uJiZtLmJ1ZmZlciYmbmIpbj1uYi5kZWNvZGUobS5zdWJhcnJheShuLGgpKTtlbHNle2ZvcihxPVwiXCI7bjxoOyl7dmFyIHA9bVtuKytdO2lmKHAmMTI4KXt2YXIgdT1tW24rK10mNjM7aWYoMTkyPT0ocCYyMjQpKXErPVN0cmluZy5mcm9tQ2hhckNvZGUoKHAmMzEpPDw2fHUpO2Vsc2V7dmFyIHQ9bVtuKytdJjYzO3A9MjI0PT0ocCYyNDApPyhwJjE1KTw8MTJ8dTw8Nnx0OihwJjcpPDwxOHx1PDwxMnx0PDw2fG1bbisrXSY2Mzs2NTUzNj5wP3ErPVN0cmluZy5mcm9tQ2hhckNvZGUocCk6XG4ocC09NjU1MzYscSs9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxwPj4xMCw1NjMyMHxwJjEwMjMpKX19ZWxzZSBxKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHApfW49cX19ZWxzZSBuPVwiXCI7aWYodm9pZCAwPT09dil2YXIgdj1uO2Vsc2Ugdis9U3RyaW5nLmZyb21DaGFyQ29kZSgwKSx2Kz1uO2g9bCsxfX1lbHNle3Y9QXJyYXkoZyk7Zm9yKGY9MDtmPGc7KytmKXZbZl09U3RyaW5nLmZyb21DaGFyQ29kZShBW2srZl0pO3Y9di5qb2luKFwiXCIpfVcoZCk7cmV0dXJuIHZ9LHRvV2lyZVR5cGU6ZnVuY3Rpb24oZCxnKXtnIGluc3RhbmNlb2YgQXJyYXlCdWZmZXImJihnPW5ldyBVaW50OEFycmF5KGcpKTt2YXIgayxoPVwic3RyaW5nXCI9PXR5cGVvZiBnO2h8fGcgaW5zdGFuY2VvZiBVaW50OEFycmF5fHxnIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXl8fGcgaW5zdGFuY2VvZiBJbnQ4QXJyYXl8fEwoXCJDYW5ub3QgcGFzcyBub24tc3RyaW5nIHRvIHN0ZDo6c3RyaW5nXCIpO3ZhciBmO2lmKGMmJlxuaClmb3Ioaz1mPTA7azxnLmxlbmd0aDsrK2spe3ZhciBsPWcuY2hhckNvZGVBdChrKTsxMjc+PWw/ZisrOjIwNDc+PWw/Zis9Mjo1NTI5Njw9bCYmNTczNDM+PWw/KGYrPTQsKytrKTpmKz0zfWVsc2UgZj1nLmxlbmd0aDtrPWY7Zj11Yig0K2srMSk7bD1mKzQ7QltmPj4yXT1rO2lmKGMmJmgpe2lmKGg9bCxsPWsrMSxrPUEsMDxsKXtsPWgrbC0xO2Zvcih2YXIgbj0wO248Zy5sZW5ndGg7KytuKXt2YXIgbT1nLmNoYXJDb2RlQXQobik7aWYoNTUyOTY8PW0mJjU3MzQzPj1tKXt2YXIgcT1nLmNoYXJDb2RlQXQoKytuKTttPTY1NTM2KygobSYxMDIzKTw8MTApfHEmMTAyM31pZigxMjc+PW0pe2lmKGg+PWwpYnJlYWs7a1toKytdPW19ZWxzZXtpZigyMDQ3Pj1tKXtpZihoKzE+PWwpYnJlYWs7a1toKytdPTE5MnxtPj42fWVsc2V7aWYoNjU1MzU+PW0pe2lmKGgrMj49bClicmVhaztrW2grK109MjI0fG0+PjEyfWVsc2V7aWYoaCszPj1sKWJyZWFrO2tbaCsrXT0yNDB8bT4+MTg7a1toKytdPVxuMTI4fG0+PjEyJjYzfWtbaCsrXT0xMjh8bT4+NiY2M31rW2grK109MTI4fG0mNjN9fWtbaF09MH19ZWxzZSBpZihoKWZvcihoPTA7aDxrOysraCluPWcuY2hhckNvZGVBdChoKSwyNTU8biYmKFcobCksTChcIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0c1wiKSksQVtsK2hdPW47ZWxzZSBmb3IoaD0wO2g8azsrK2gpQVtsK2hdPWdbaF07bnVsbCE9PWQmJmQucHVzaChXLGYpO3JldHVybiBmfSxhcmdQYWNrQWR2YW5jZTo4LHJlYWRWYWx1ZUZyb21Qb2ludGVyOiRhLE86ZnVuY3Rpb24oZCl7VyhkKX19KX0sdTpmdW5jdGlvbihhLGIpe2I9RyhiKTtOKGEse3JhOiEwLG5hbWU6YixhcmdQYWNrQWR2YW5jZTowLGZyb21XaXJlVHlwZTpmdW5jdGlvbigpe30sdG9XaXJlVHlwZTpmdW5jdGlvbigpe319KX0sajpmdW5jdGlvbihhLGIsYyl7YT1aKGEpO2I9b2IoYixcImVtdmFsOjphc1wiKTt2YXIgZD1bXSxnPVQoZCk7QltjPj4yXT1nO3JldHVybiBiLnRvV2lyZVR5cGUoZCxcbmEpfSxnOmtiLGs6ZnVuY3Rpb24oYSxiKXthPVooYSk7Yj1aKGIpO3JldHVybiBUKGFbYl0pfSxvOmZ1bmN0aW9uKGEpe3ZhciBiPXBiW2FdO3JldHVybiBUKHZvaWQgMD09PWI/RyhhKTpiKX0saTpmdW5jdGlvbihhKXt2YXIgYj1aKGEpO2ZiKGIpO2tiKGEpfSxuOmZ1bmN0aW9uKGEsYil7YT1vYihhLFwiX2VtdmFsX3Rha2VfdmFsdWVcIik7YT1hLnJlYWRWYWx1ZUZyb21Qb2ludGVyKGIpO3JldHVybiBUKGEpfSxsOmZ1bmN0aW9uKCl7eihcIlwiKX0scTpmdW5jdGlvbihhKXt2YXIgYj1BLmxlbmd0aDthPj4+PTA7aWYoMjE0NzQ4MzY0ODxhKXJldHVybiExO2Zvcih2YXIgYz0xOzQ+PWM7Yyo9Mil7dmFyIGQ9YiooMSsuMi9jKTtkPU1hdGgubWluKGQsYSsxMDA2NjMyOTYpO3ZhciBnPU1hdGg7ZD1NYXRoLm1heChhLGQpO2E6e2c9Zy5taW4uY2FsbChnLDIxNDc0ODM2NDgsZCsoNjU1MzYtZCU2NTUzNiklNjU1MzYpLWVhLmJ1ZmZlci5ieXRlTGVuZ3RoKzY1NTM1Pj4+MTY7dHJ5e2VhLmdyb3coZyk7XG5uYSgpO3ZhciBrPTE7YnJlYWsgYX1jYXRjaChoKXt9az12b2lkIDB9aWYoaylyZXR1cm4hMH1yZXR1cm4hMX0sdzpxYix2OnJifTtcbihmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYyl7Yz1jLmV4cG9ydHM7ZS5hc209YztlYT1lLmFzbS54O25hKCk7b2E9ZS5hc20uejtxYS51bnNoaWZ0KGUuYXNtLnkpO0MtLTtlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMmJmUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyhDKTtpZigwPT1DJiYobnVsbCE9PXRhJiYoY2xlYXJJbnRlcnZhbCh0YSksdGE9bnVsbCksRCkpe3ZhciBkPUQ7RD1udWxsO2QoKX1yZXR1cm4gY312YXIgYj17YTp2Yn07QysrO2UubW9uaXRvclJ1bkRlcGVuZGVuY2llcyYmZS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKEMpO2lmKGUuaW5zdGFudGlhdGVXYXNtKXRyeXtyZXR1cm4gZS5pbnN0YW50aWF0ZVdhc20oYixhKX1jYXRjaChjKXt3KFwiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogXCIrYyksY2EoYyl9emEoYixmdW5jdGlvbihjKXthKGMuaW5zdGFuY2UpfSkuY2F0Y2goY2EpO3JldHVybnt9fSkoKTtcbmZ1bmN0aW9uIHViKCl7cmV0dXJuKHViPWUuYXNtLkEpLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiBXKCl7cmV0dXJuKFc9ZS5hc20uQikuYXBwbHkobnVsbCxhcmd1bWVudHMpfWZ1bmN0aW9uIGViKCl7cmV0dXJuKGViPWUuYXNtLkMpLmFwcGx5KG51bGwsYXJndW1lbnRzKX1lLl9fZW1iaW5kX2luaXRpYWxpemVfYmluZGluZ3M9ZnVuY3Rpb24oKXtyZXR1cm4oZS5fX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzPWUuYXNtLkQpLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIHdiO0Q9ZnVuY3Rpb24geGIoKXt3Ynx8eWIoKTt3Ynx8KEQ9eGIpfTtcbmZ1bmN0aW9uIHliKCl7ZnVuY3Rpb24gYSgpe2lmKCF3YiYmKHdiPSEwLGUuY2FsbGVkUnVuPSEwLCFmYSkpe0FhKHFhKTtiYShlKTtpZihlLm9uUnVudGltZUluaXRpYWxpemVkKWUub25SdW50aW1lSW5pdGlhbGl6ZWQoKTtpZihlLnBvc3RSdW4pZm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUucG9zdFJ1biYmKGUucG9zdFJ1bj1bZS5wb3N0UnVuXSk7ZS5wb3N0UnVuLmxlbmd0aDspe3ZhciBiPWUucG9zdFJ1bi5zaGlmdCgpO3JhLnVuc2hpZnQoYil9QWEocmEpfX1pZighKDA8Qykpe2lmKGUucHJlUnVuKWZvcihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnByZVJ1biYmKGUucHJlUnVuPVtlLnByZVJ1bl0pO2UucHJlUnVuLmxlbmd0aDspc2EoKTtBYShwYSk7MDxDfHwoZS5zZXRTdGF0dXM/KGUuc2V0U3RhdHVzKFwiUnVubmluZy4uLlwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2Uuc2V0U3RhdHVzKFwiXCIpfSwxKTthKCl9LDEpKTphKCkpfX1cbmlmKGUucHJlSW5pdClmb3IoXCJmdW5jdGlvblwiPT10eXBlb2YgZS5wcmVJbml0JiYoZS5wcmVJbml0PVtlLnByZUluaXRdKTswPGUucHJlSW5pdC5sZW5ndGg7KWUucHJlSW5pdC5wb3AoKSgpO3liKCk7XG5cblxuICByZXR1cm4gc3BpbmVXYXNtLnJlYWR5XG59XG5cbik7XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgc3BpbmVXYXNtOyJdLCJuYW1lcyI6WyJzcGluZVdhc20iLCJfc2NyaXB0RGlyIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwidW5kZWZpbmVkIiwiZSIsImJhIiwiY2EiLCJyZWFkeSIsIlByb21pc2UiLCJhIiwiYiIsImRhIiwiT2JqZWN0IiwiYXNzaWduIiwiciIsImluZGV4T2YiLCJzdWJzdHIiLCJyZXBsYWNlIiwibGFzdEluZGV4T2YiLCJ3IiwicHJpbnRFcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJiaW5kIiwieSIsIndhc21CaW5hcnkiLCJub0V4aXRSdW50aW1lIiwiV2ViQXNzZW1ibHkiLCJ6IiwiZWEiLCJmYSIsImhhIiwiQSIsImlhIiwiamEiLCJrYSIsIkIiLCJsYSIsIm1hIiwibmEiLCJidWZmZXIiLCJIRUFQOCIsIkludDhBcnJheSIsIkhFQVAxNiIsIkludDE2QXJyYXkiLCJIRUFQMzIiLCJJbnQzMkFycmF5IiwiSEVBUFU4IiwiVWludDhBcnJheSIsIkhFQVBVMTYiLCJVaW50MTZBcnJheSIsIkhFQVBVMzIiLCJVaW50MzJBcnJheSIsIkhFQVBGMzIiLCJGbG9hdDMyQXJyYXkiLCJIRUFQRjY0IiwiRmxvYXQ2NEFycmF5Iiwib2EiLCJwYSIsInFhIiwicmEiLCJzYSIsInByZVJ1biIsInNoaWZ0IiwidW5zaGlmdCIsIkMiLCJ0YSIsIkQiLCJvbkFib3J0IiwiUnVudGltZUVycm9yIiwidWEiLCJzdGFydHNXaXRoIiwiRiIsInZhIiwibG9jYXRlRmlsZSIsIndhIiwieGEiLCJmZXRjaCIsInJlc29sdmUiLCJ0aGVuIiwiY3JlZGVudGlhbHMiLCJvayIsImFycmF5QnVmZmVyIiwieWEiLCJjIiwiZCIsImluc3RhbnRpYXRlIiwiemEiLCJpbnN0YW50aWF0ZVN0cmVhbWluZyIsImciLCJBYSIsImxlbmd0aCIsIkJhIiwiVHlwZUVycm9yIiwiQ2EiLCJHIiwiSCIsIkkiLCJEYSIsIkVhIiwiY2hhckNvZGVBdCIsIkZhIiwiX2EkYSIsImFwcGx5IiwiYXJndW1lbnRzIiwiR2EiLCJFcnJvciIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siLCJ0b1N0cmluZyIsInByb3RvdHlwZSIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiSiIsIkwiLCJIYSIsIklhIiwiTSIsImYiLCJsIiwiTiIsImZvckVhY2giLCJBcnJheSIsImsiLCJoIiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwiSmEiLCJLYSIsIkxhIiwiTWEiLCJjb3VudCIsInZhbHVlIiwiUyIsIk5hIiwiT2EiLCJPIiwiUGEiLCJwb3AiLCJVIiwiUCIsIlEiLCJRYSIsIlciLCJSYSIsIlIiLCJGaW5hbGl6YXRpb25SZWdpc3RyeSIsInJlZ2lzdGVyIiwidW5yZWdpc3RlciIsIlNhIiwiSyIsIlQiLCJUYSIsIlVhIiwiVmEiLCJXYSIsIiQiLCJYYSIsIllhIiwiWiIsIlkiLCJjbG9uZSIsIlphIiwiJGEiLCJmcm9tV2lyZVR5cGUiLCJ0b1dpcmVUeXBlIiwiYWIiLCJiYiIsImluY2x1ZGVzIiwiY29uY2F0IiwiY2FsbCIsImdldCIsIlYiLCJjYiIsImRiIiwiZWIiLCJYIiwibWFwIiwiam9pbiIsImZiIiwiaGIiLCJuIiwibSIsInEiLCJwIiwidSIsInQiLCJ2IiwiRSIsImliIiwiamIiLCJhYSIsImhhcyIsImtiIiwibGIiLCJtYiIsIm5iIiwiVGV4dERlY29kZXIiLCJvYiIsInBiIiwicWIiLCJTcGluZVdhc21VdGlsIiwiZ2V0Q3VycmVudExpc3RlbmVySUQiLCJnZXRDdXJyZW50VHJhY2tFbnRyeSIsImdldEN1cnJlbnRFdmVudCIsImdldEN1cnJlbnRFdmVudFR5cGUiLCJnbG9iYWxUaGlzIiwiVHJhY2tFbnRyeUxpc3RlbmVycyIsImVtaXRMaXN0ZW5lciIsIl9zcGluZUxpc3RlbmVyQ2FsbEJhY2tGcm9tSlMiLCJyYiIsImVtaXRUcmFja0VudHJ5TGlzdGVuZXIiLCJfc3BpbmVUcmFja0xpc3RlbmVyQ2FsbGJhY2siLCJzYiIsInRiIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiQmluZGluZ0Vycm9yIiwiSW50ZXJuYWxFcnJvciIsImlzQWxpYXNPZiIsImdldFByb3RvdHlwZU9mIiwiaXNEZWxldGVkIiwiZGVsZXRlTGF0ZXIiLCJnZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50Iiwia2V5cyIsImdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXMiLCJmbHVzaFBlbmRpbmdEZWxldGVzIiwic2V0RGVsYXlGdW5jdGlvbiIsImFyZ1BhY2tBZHZhbmNlIiwicmVhZFZhbHVlRnJvbVBvaW50ZXIiLCJkZWxldGVPYmplY3QiLCJnYSIsInBvaW50ZXJUeXBlIiwiVW5ib3VuZFR5cGVFcnJvciIsImNvdW50X2VtdmFsX2hhbmRsZXMiLCJ2YiIsIngiLCJnYiIsIlN5bWJvbCIsInN1YnN0cmluZyIsInNsaWNlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJzZXQiLCJkZWZpbmVQcm9wZXJ0eSIsInNwbGljZSIsImNsYXNzTmFtZSIsInMiLCJkZWNvZGUiLCJzdWJhcnJheSIsIkFycmF5QnVmZmVyIiwiVWludDhDbGFtcGVkQXJyYXkiLCJ1YiIsImoiLCJvIiwiaSIsIk1hdGgiLCJtaW4iLCJtYXgiLCJieXRlTGVuZ3RoIiwiZ3JvdyIsImV4cG9ydHMiLCJhc20iLCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzIiwiaW5zdGFudGlhdGVXYXNtIiwiaW5zdGFuY2UiLCJfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzIiwid2IiLCJ4YiIsInliIiwiY2FsbGVkUnVuIiwib25SdW50aW1lSW5pdGlhbGl6ZWQiLCJwb3N0UnVuIiwic2V0U3RhdHVzIiwic2V0VGltZW91dCIsInByZUluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJQSxVQUFBQSxTQUFTLHNCQUFJLFlBQU07TUFDckIsRUFBQSxJQUFJQyxVQUFVLEdBQUcsT0FBT0MsUUFBUSxLQUFLLFdBQVcsSUFBSUEsUUFBUSxDQUFDQyxhQUFhLEdBQUdELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxHQUFHLEdBQUdDLFNBQVMsQ0FBQTtRQUVuSCxPQUNGLFVBQVNMLFNBQVMsRUFBUTtNQUFBLElBQUEsSUFBakJBLFNBQVMs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
