!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "cf301cb5-ca29-46c8-8d96-e52e2d357ac5",
        e._sentryDebugIdIdentifier = "sentry-dbid-cf301cb5-ca29-46c8-8d96-e52e2d357ac5")
    } catch (e) {}
}(),
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2888], {
    19014: function(e) {
        "use strict";
        let t;
        function n(e, t, n) {
            return (n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        function r(e, t, r) {
            let i = r < .5 ? r * (1 + t) : r + t - r * t
              , o = 2 * r - i;
            return Math.round(255 * n(o, i, e + 1 / 3)) << 24 | Math.round(255 * n(o, i, e)) << 16 | Math.round(255 * n(o, i, e - 1 / 3)) << 8
        }
        let i = "[-+]?\\d*\\.?\\d+"
          , o = i + "%";
        function a(...e) {
            return "\\(\\s*(" + e.join(")\\s*,?\\s*(") + ")\\s*\\)"
        }
        function s(...e) {
            return "\\(\\s*(" + e.slice(0, e.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + e[e.length - 1] + ")\\s*\\)"
        }
        function l(...e) {
            return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
        }
        function u(e) {
            let t = parseInt(e, 10);
            return t < 0 ? 0 : t > 255 ? 255 : t
        }
        function c(e) {
            return (parseFloat(e) % 360 + 360) % 360 / 360
        }
        function d(e) {
            let t = parseFloat(e);
            return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
        }
        function p(e) {
            let t = parseFloat(e);
            return t < 0 ? 0 : t > 100 ? 1 : t / 100
        }
        e.exports = function(e) {
            let f;
            if ("number" == typeof e)
                return e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null;
            if ("string" != typeof e)
                return null;
            let h = (void 0 === t && (t = {
                rgb: RegExp("rgb" + a(i, i, i)),
                rgba: RegExp("rgba(" + l(i, i, i, i) + "|" + s(i, i, i, i) + ")"),
                hsl: RegExp("hsl" + a(i, o, o)),
                hsla: RegExp("hsla(" + l(i, o, o, i) + "|" + s(i, o, o, i) + ")"),
                hwb: RegExp("hwb" + a(i, o, o)),
                hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^#([0-9a-fA-F]{6})$/,
                hex8: /^#([0-9a-fA-F]{8})$/
            }),
            t);
            if (f = h.hex6.exec(e))
                return parseInt(f[1] + "ff", 16) >>> 0;
            let m = function(e) {
                switch (e) {
                case "transparent":
                    return 0;
                case "aliceblue":
                    return 4042850303;
                case "antiquewhite":
                    return 4209760255;
                case "aqua":
                case "cyan":
                    return 16777215;
                case "aquamarine":
                    return 2147472639;
                case "azure":
                    return 4043309055;
                case "beige":
                    return 4126530815;
                case "bisque":
                    return 4293182719;
                case "black":
                    return 255;
                case "blanchedalmond":
                    return 4293643775;
                case "blue":
                    return 65535;
                case "blueviolet":
                    return 2318131967;
                case "brown":
                    return 2771004159;
                case "burlywood":
                    return 3736635391;
                case "burntsienna":
                    return 3934150143;
                case "cadetblue":
                    return 1604231423;
                case "chartreuse":
                    return 2147418367;
                case "chocolate":
                    return 3530104575;
                case "coral":
                    return 4286533887;
                case "cornflowerblue":
                    return 1687547391;
                case "cornsilk":
                    return 4294499583;
                case "crimson":
                    return 3692313855;
                case "darkblue":
                    return 35839;
                case "darkcyan":
                    return 9145343;
                case "darkgoldenrod":
                    return 3095792639;
                case "darkgray":
                case "darkgrey":
                    return 2846468607;
                case "darkgreen":
                    return 6553855;
                case "darkkhaki":
                    return 3182914559;
                case "darkmagenta":
                    return 2332068863;
                case "darkolivegreen":
                    return 1433087999;
                case "darkorange":
                    return 4287365375;
                case "darkorchid":
                    return 2570243327;
                case "darkred":
                    return 2332033279;
                case "darksalmon":
                    return 3918953215;
                case "darkseagreen":
                    return 2411499519;
                case "darkslateblue":
                    return 1211993087;
                case "darkslategray":
                case "darkslategrey":
                    return 793726975;
                case "darkturquoise":
                    return 13554175;
                case "darkviolet":
                    return 2483082239;
                case "deeppink":
                    return 4279538687;
                case "deepskyblue":
                    return 12582911;
                case "dimgray":
                case "dimgrey":
                    return 1768516095;
                case "dodgerblue":
                    return 512819199;
                case "firebrick":
                    return 2988581631;
                case "floralwhite":
                    return 4294635775;
                case "forestgreen":
                    return 579543807;
                case "fuchsia":
                case "magenta":
                    return 4278255615;
                case "gainsboro":
                    return 3705462015;
                case "ghostwhite":
                    return 4177068031;
                case "gold":
                    return 4292280575;
                case "goldenrod":
                    return 3668254975;
                case "gray":
                case "grey":
                    return 2155905279;
                case "green":
                    return 8388863;
                case "greenyellow":
                    return 2919182335;
                case "honeydew":
                    return 4043305215;
                case "hotpink":
                    return 4285117695;
                case "indianred":
                    return 3445382399;
                case "indigo":
                    return 1258324735;
                case "ivory":
                    return 4294963455;
                case "khaki":
                    return 4041641215;
                case "lavender":
                    return 3873897215;
                case "lavenderblush":
                    return 4293981695;
                case "lawngreen":
                    return 2096890111;
                case "lemonchiffon":
                    return 4294626815;
                case "lightblue":
                    return 2916673279;
                case "lightcoral":
                    return 4034953471;
                case "lightcyan":
                    return 3774873599;
                case "lightgoldenrodyellow":
                    return 4210742015;
                case "lightgray":
                case "lightgrey":
                    return 3553874943;
                case "lightgreen":
                    return 2431553791;
                case "lightpink":
                    return 4290167295;
                case "lightsalmon":
                    return 4288707327;
                case "lightseagreen":
                    return 548580095;
                case "lightskyblue":
                    return 2278488831;
                case "lightslategray":
                case "lightslategrey":
                    return 2005441023;
                case "lightsteelblue":
                    return 2965692159;
                case "lightyellow":
                    return 4294959359;
                case "lime":
                    return 16711935;
                case "limegreen":
                    return 852308735;
                case "linen":
                    return 4210091775;
                case "maroon":
                    return 2147483903;
                case "mediumaquamarine":
                    return 1724754687;
                case "mediumblue":
                    return 52735;
                case "mediumorchid":
                    return 3126187007;
                case "mediumpurple":
                    return 2473647103;
                case "mediumseagreen":
                    return 1018393087;
                case "mediumslateblue":
                    return 2070474495;
                case "mediumspringgreen":
                    return 16423679;
                case "mediumturquoise":
                    return 1221709055;
                case "mediumvioletred":
                    return 3340076543;
                case "midnightblue":
                    return 421097727;
                case "mintcream":
                    return 4127193855;
                case "mistyrose":
                    return 4293190143;
                case "moccasin":
                    return 4293178879;
                case "navajowhite":
                    return 4292783615;
                case "navy":
                    return 33023;
                case "oldlace":
                    return 4260751103;
                case "olive":
                    return 2155872511;
                case "olivedrab":
                    return 1804477439;
                case "orange":
                    return 4289003775;
                case "orangered":
                    return 4282712319;
                case "orchid":
                    return 3664828159;
                case "palegoldenrod":
                    return 4008225535;
                case "palegreen":
                    return 2566625535;
                case "paleturquoise":
                    return 2951671551;
                case "palevioletred":
                    return 3681588223;
                case "papayawhip":
                    return 4293907967;
                case "peachpuff":
                    return 4292524543;
                case "peru":
                    return 3448061951;
                case "pink":
                    return 4290825215;
                case "plum":
                    return 3718307327;
                case "powderblue":
                    return 2967529215;
                case "purple":
                    return 2147516671;
                case "rebeccapurple":
                    return 1714657791;
                case "red":
                    return 4278190335;
                case "rosybrown":
                    return 3163525119;
                case "royalblue":
                    return 1097458175;
                case "saddlebrown":
                    return 2336560127;
                case "salmon":
                    return 4202722047;
                case "sandybrown":
                    return 4104413439;
                case "seagreen":
                    return 780883967;
                case "seashell":
                    return 4294307583;
                case "sienna":
                    return 2689740287;
                case "silver":
                    return 3233857791;
                case "skyblue":
                    return 2278484991;
                case "slateblue":
                    return 1784335871;
                case "slategray":
                case "slategrey":
                    return 1887473919;
                case "snow":
                    return 4294638335;
                case "springgreen":
                    return 16744447;
                case "steelblue":
                    return 1182971135;
                case "tan":
                    return 3535047935;
                case "teal":
                    return 8421631;
                case "thistle":
                    return 3636451583;
                case "tomato":
                    return 4284696575;
                case "turquoise":
                    return 1088475391;
                case "violet":
                    return 4001558271;
                case "wheat":
                    return 4125012991;
                case "white":
                    return 4294967295;
                case "whitesmoke":
                    return 4126537215;
                case "yellow":
                    return 4294902015;
                case "yellowgreen":
                    return 2597139199
                }
                return null
            }(e);
            return null != m ? m : (f = h.rgb.exec(e)) ? (u(f[1]) << 24 | u(f[2]) << 16 | u(f[3]) << 8 | 255) >>> 0 : (f = h.rgba.exec(e)) ? void 0 !== f[6] ? (u(f[6]) << 24 | u(f[7]) << 16 | u(f[8]) << 8 | d(f[9])) >>> 0 : (u(f[2]) << 24 | u(f[3]) << 16 | u(f[4]) << 8 | d(f[5])) >>> 0 : (f = h.hex3.exec(e)) ? parseInt(f[1] + f[1] + f[2] + f[2] + f[3] + f[3] + "ff", 16) >>> 0 : (f = h.hex8.exec(e)) ? parseInt(f[1], 16) >>> 0 : (f = h.hex4.exec(e)) ? parseInt(f[1] + f[1] + f[2] + f[2] + f[3] + f[3] + f[4] + f[4], 16) >>> 0 : (f = h.hsl.exec(e)) ? (255 | r(c(f[1]), p(f[2]), p(f[3]))) >>> 0 : (f = h.hsla.exec(e)) ? void 0 !== f[6] ? (r(c(f[6]), p(f[7]), p(f[8])) | d(f[9])) >>> 0 : (r(c(f[2]), p(f[3]), p(f[4])) | d(f[5])) >>> 0 : (f = h.hwb.exec(e)) ? (255 | function(e, t, r) {
                if (t + r >= 1) {
                    let e = Math.round(255 * t / (t + r));
                    return e << 24 | e << 16 | e << 8
                }
                return Math.round(255 * (n(0, 1, e + 1 / 3) * (1 - t - r) + t)) << 24 | Math.round(255 * (n(0, 1, e) * (1 - t - r) + t)) << 16 | Math.round(255 * (n(0, 1, e - 1 / 3) * (1 - t - r) + t)) << 8
            }(c(f[1]), p(f[2]), p(f[3]))) >>> 0 : null
        }
    },
    15790: function(e, t) {
        "use strict";
        t.E = function() {
            var e = []
              , t = e;
            function n() {
                t === e && (t = e.slice())
            }
            return {
                listen: function(e) {
                    if ("function" != typeof e)
                        throw Error("Expected listener to be a function.");
                    var r = !0;
                    return n(),
                    t.push(e),
                    function() {
                        if (r) {
                            r = !1,
                            n();
                            var i = t.indexOf(e);
                            t.splice(i, 1)
                        }
                    }
                },
                emit: function() {
                    for (var n = e = t, r = 0; r < n.length; r++)
                        n[r].apply(n, arguments)
                }
            }
        }
    },
    17081: function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function o(e) {
            return e.filter(function(t, n) {
                return e.lastIndexOf(t) === n
            })
        }
        n.r(t),
        n.d(t, {
            assignStyle: function() {
                return function e(t) {
                    for (var n = 0, a = arguments.length <= 1 ? 0 : arguments.length - 1; n < a; ++n) {
                        var s = n + 1 < 1 || arguments.length <= n + 1 ? void 0 : arguments[n + 1];
                        for (var l in s) {
                            var u = s[l]
                              , c = t[l];
                            if (c && u) {
                                if (Array.isArray(c)) {
                                    t[l] = o(c.concat(u));
                                    continue
                                }
                                if (Array.isArray(u)) {
                                    t[l] = o([c].concat(function(e) {
                                        if (Array.isArray(e))
                                            return i(e)
                                    }(u) || function(e) {
                                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                                            return Array.from(e)
                                    }(u) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e)
                                                return i(e, void 0);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name),
                                            "Map" === n || "Set" === n)
                                                return Array.from(n);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                                return i(e, void 0)
                                        }
                                    }(u) || function() {
                                        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()));
                                    continue
                                }
                                if ("object" === r(u)) {
                                    t[l] = e({}, c, u);
                                    continue
                                }
                            }
                            t[l] = u
                        }
                    }
                    return t
                }
            },
            camelCaseProperty: function() {
                return c
            },
            cssifyDeclaration: function() {
                return f
            },
            cssifyObject: function() {
                return h
            },
            hyphenateProperty: function() {
                return p
            },
            isPrefixedProperty: function() {
                return g
            },
            isPrefixedValue: function() {
                return v
            },
            isUnitlessProperty: function() {
                return T
            },
            normalizeProperty: function() {
                return M
            },
            resolveArrayValue: function() {
                return A
            },
            unprefixProperty: function() {
                return I
            },
            unprefixValue: function() {
                return L
            }
        });
        var a = /-([a-z])/g
          , s = /^Ms/g
          , l = {};
        function u(e) {
            return e[1].toUpperCase()
        }
        function c(e) {
            if (l.hasOwnProperty(e))
                return l[e];
            var t = e.replace(a, u).replace(s, "ms");
            return l[e] = t,
            t
        }
        var d = n(25477);
        function p(e) {
            return (0,
            d.default)(e)
        }
        function f(e, t) {
            return p(e) + ":" + t
        }
        function h(e) {
            var t = "";
            for (var n in e) {
                var r = e[n];
                ("string" == typeof r || "number" == typeof r) && (t && (t += ";"),
                t += f(n, r))
            }
            return t
        }
        var m = /^(Webkit|Moz|O|ms)/;
        function g(e) {
            return m.test(e)
        }
        var y = /-webkit-|-moz-|-ms-/;
        function v(e) {
            return "string" == typeof e && y.test(e)
        }
        for (var b = {
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        }, _ = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"], S = ["Webkit", "ms", "Moz", "O"], w = 0, E = _.length; w < E; ++w) {
            var x = _[w];
            b[x] = !0;
            for (var k = 0, O = S.length; k < O; ++k)
                b[S[k] + x.charAt(0).toUpperCase() + x.slice(1)] = !0
        }
        for (var C in b)
            b[p(C)] = !0;
        function T(e) {
            return b.hasOwnProperty(e)
        }
        var R = /^(ms|Webkit|Moz|O)/;
        function I(e) {
            var t = e.replace(R, "");
            return t.charAt(0).toLowerCase() + t.slice(1)
        }
        function M(e) {
            return I(c(e))
        }
        function A(e, t) {
            return t.join(";" + p(e) + ":")
        }
        var D = /(-ms-|-webkit-|-moz-|-o-)/g;
        function L(e) {
            return "string" == typeof e ? e.replace(D, "") : e
        }
    },
    16238: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            i.default)(e)
        }
        ;
        var r, i = (r = n(25477)) && r.__esModule ? r : {
            default: r
        }
    },
    50638: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return "string" == typeof e && n.test(e)
        }
        ;
        var n = /-webkit-|-moz-|-ms-/
    },
    19303: function(e) {
        "use strict";
        var t = Object.prototype.hasOwnProperty;
        function n(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
        }
        e.exports = function(e, r) {
            if (n(e, r))
                return !0;
            if ("object" != typeof e || null === e || "object" != typeof r || null === r)
                return !1;
            var i = Object.keys(e)
              , o = Object.keys(r);
            if (i.length !== o.length)
                return !1;
            for (var a = 0; a < i.length; a++)
                if (!t.call(r, i[a]) || !n(e[i[a]], r[i[a]]))
                    return !1;
            return !0
        }
    },
    25477: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = /[A-Z]/g
          , i = /^ms-/
          , o = {};
        function a(e) {
            return "-" + e.toLowerCase()
        }
        t.default = function(e) {
            if (o.hasOwnProperty(e))
                return o[e];
            var t = e.replace(r, a);
            return o[e] = i.test(t) ? "-" + t : t
        }
    },
    39668: function(e, t, n) {
        "use strict";
        t.Z = function(e) {
            var t = e.prefixMap
              , n = e.plugins;
            return function e(s) {
                for (var l in s) {
                    var u = s[l];
                    if ((0,
                    a.default)(u))
                        s[l] = e(u);
                    else if (Array.isArray(u)) {
                        for (var c = [], d = 0, p = u.length; d < p; ++d) {
                            var f = (0,
                            i.default)(n, l, u[d], s, t);
                            (0,
                            o.default)(c, f || u[d])
                        }
                        c.length > 0 && (s[l] = c)
                    } else {
                        var h = (0,
                        i.default)(n, l, u, s, t);
                        h && (s[l] = h),
                        s = (0,
                        r.default)(t, l, s)
                    }
                }
                return s
            }
        }
        ;
        var r = s(n(7351))
          , i = s(n(65158))
          , o = s(n(70382))
          , a = s(n(81568));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    61505: function(e, t) {
        "use strict";
        t.Z = function() {
            return null
        }
    },
    7951: function(e, t, n) {
        "use strict";
        t.Z = function(e, t) {
            if ("string" == typeof t && !(0,
            r.isPrefixedValue)(t) && -1 !== t.indexOf("cross-fade("))
                return o.map(function(e) {
                    return t.replace(i, e + "cross-fade(")
                })
        }
        ;
        var r = n(17081)
          , i = /cross-fade\(/g
          , o = ["-webkit-", ""]
    },
    81385: function(e, t) {
        "use strict";
        t.Z = function(e, t) {
            if ("cursor" === e && r.hasOwnProperty(t))
                return n.map(function(e) {
                    return e + t
                })
        }
        ;
        var n = ["-webkit-", "-moz-", ""]
          , r = {
            "zoom-in": !0,
            "zoom-out": !0,
            grab: !0,
            grabbing: !0
        }
    },
    29432: function(e, t, n) {
        "use strict";
        t.Z = function(e, t) {
            if ("string" == typeof t && !(0,
            r.isPrefixedValue)(t) && -1 !== t.indexOf("filter("))
                return o.map(function(e) {
                    return t.replace(i, e + "filter(")
                })
        }
        ;
        var r = n(17081)
          , i = /filter\(/g
          , o = ["-webkit-", ""]
    },
    23716: function(e, t, n) {
        "use strict";
        t.Z = function(e, t) {
            if ("string" == typeof t && !(0,
            i.default)(t) && t.indexOf("image-set(") > -1)
                return o.map(function(e) {
                    return t.replace(/image-set\(/g, e + "image-set(")
                })
        }
        ;
        var r, i = (r = n(50638)) && r.__esModule ? r : {
            default: r
        }, o = ["-webkit-", ""]
    },
    40109: function(e, t) {
        "use strict";
        t.Z = function(e, t, r) {
            if (Object.prototype.hasOwnProperty.call(n, e))
                for (var i = n[e], o = 0, a = i.length; o < a; ++o)
                    r[i[o]] = t
        }
        ;
        var n = {
            marginBlockStart: ["WebkitMarginBefore"],
            marginBlockEnd: ["WebkitMarginAfter"],
            marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
            marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
            paddingBlockStart: ["WebkitPaddingBefore"],
            paddingBlockEnd: ["WebkitPaddingAfter"],
            paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
            paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
            borderBlockStart: ["WebkitBorderBefore"],
            borderBlockStartColor: ["WebkitBorderBeforeColor"],
            borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
            borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
            borderBlockEnd: ["WebkitBorderAfter"],
            borderBlockEndColor: ["WebkitBorderAfterColor"],
            borderBlockEndStyle: ["WebkitBorderAfterStyle"],
            borderBlockEndWidth: ["WebkitBorderAfterWidth"],
            borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
            borderInlineStartColor: ["WebkitBorderStartColor", "MozBorderStartColor"],
            borderInlineStartStyle: ["WebkitBorderStartStyle", "MozBorderStartStyle"],
            borderInlineStartWidth: ["WebkitBorderStartWidth", "MozBorderStartWidth"],
            borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
            borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
            borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
            borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"]
        }
    },
    42564: function(e, t) {
        "use strict";
        t.Z = function(e, t) {
            if ("position" === e && "sticky" === t)
                return ["-webkit-sticky", "sticky"]
        }
    },
    42758: function(e, t) {
        "use strict";
        t.Z = function(e, t) {
            if (r.hasOwnProperty(e) && i.hasOwnProperty(t))
                return n.map(function(e) {
                    return e + t
                })
        }
        ;
        var n = ["-webkit-", "-moz-", ""]
          , r = {
            maxHeight: !0,
            maxWidth: !0,
            width: !0,
            height: !0,
            columnWidth: !0,
            minWidth: !0,
            minHeight: !0
        }
          , i = {
            "min-content": !0,
            "max-content": !0,
            "fill-available": !0,
            "fit-content": !0,
            "contain-floats": !0
        }
    },
    26327: function(e, t, n) {
        "use strict";
        t.Z = function(e, t, n, a) {
            if ("string" == typeof t && s.hasOwnProperty(e)) {
                var u = function(e, t) {
                    if ((0,
                    i.default)(e))
                        return e;
                    for (var n = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), o = 0, a = n.length; o < a; ++o) {
                        var s = n[o]
                          , u = [s];
                        for (var c in t) {
                            var d = (0,
                            r.default)(c);
                            if (s.indexOf(d) > -1 && "order" !== d)
                                for (var p = t[c], f = 0, h = p.length; f < h; ++f)
                                    u.unshift(s.replace(d, l[p[f]] + d))
                        }
                        n[o] = u.join(",")
                    }
                    return n.join(",")
                }(t, a)
                  , c = u.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(e) {
                    return !/-moz-|-ms-/.test(e)
                }).join(",");
                if (e.indexOf("Webkit") > -1)
                    return c;
                var d = u.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(e) {
                    return !/-webkit-|-ms-/.test(e)
                }).join(",");
                return e.indexOf("Moz") > -1 ? d : (n["Webkit" + (0,
                o.default)(e)] = c,
                n["Moz" + (0,
                o.default)(e)] = d,
                u)
            }
        }
        ;
        var r = a(n(16238))
          , i = a(n(50638))
          , o = a(n(92045));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = {
            transition: !0,
            transitionProperty: !0,
            WebkitTransition: !0,
            WebkitTransitionProperty: !0,
            MozTransition: !0,
            MozTransitionProperty: !0
        }
          , l = {
            Webkit: "-webkit-",
            Moz: "-moz-",
            ms: "-ms-"
        }
    },
    70382: function(e, t) {
        "use strict";
        function n(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if (Array.isArray(t))
                for (var r = 0, i = t.length; r < i; ++r)
                    n(e, t[r]);
            else
                n(e, t)
        }
    },
    92045: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
    },
    81568: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return e instanceof Object && !Array.isArray(e)
        }
    },
    7351: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            var r = e[t];
            if (r && n.hasOwnProperty(t))
                for (var o = (0,
                i.default)(t), a = 0; a < r.length; ++a) {
                    var s = r[a] + o;
                    n[s] || (n[s] = n[t])
                }
            return n
        }
        ;
        var r, i = (r = n(92045)) && r.__esModule ? r : {
            default: r
        }
    },
    65158: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n, r, i) {
            for (var o = 0, a = e.length; o < a; ++o) {
                var s = e[o](t, n, r, i);
                if (s)
                    return s
            }
        }
    },
    29548: function(e, t, n) {
        "use strict";
        var r = n(64836);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.BroadcastChannel = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "nextauth.message";
            return {
                receive: function(t) {
                    var n = function(n) {
                        if (n.key === e) {
                            var r, i = JSON.parse(null !== (r = n.newValue) && void 0 !== r ? r : "{}");
                            (null == i ? void 0 : i.event) === "session" && null != i && i.data && t(i)
                        }
                    };
                    return window.addEventListener("storage", n),
                    function() {
                        return window.removeEventListener("storage", n)
                    }
                },
                post: function(t) {
                    if ("undefined" != typeof window)
                        try {
                            localStorage.setItem(e, JSON.stringify(l(l({}, t), {}, {
                                timestamp: d()
                            })))
                        } catch (e) {}
                }
            }
        }
        ,
        t.apiBaseUrl = c,
        t.fetchData = function(e, t, n) {
            return u.apply(this, arguments)
        }
        ,
        t.now = d;
        var i = r(n(64687))
          , o = r(n(38416))
          , a = r(n(17156));
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach(function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function u() {
            return (u = (0,
            a.default)(i.default.mark(function e(t, n, r) {
                var o, a, s, u, d, p, f, h, m, g = arguments;
                return i.default.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = (o = g.length > 3 && void 0 !== g[3] ? g[3] : {}).ctx,
                            u = void 0 === (s = o.req) ? null == a ? void 0 : a.req : s,
                            d = "".concat(c(n), "/").concat(t),
                            e.prev = 2,
                            f = {
                                headers: l({
                                    "Content-Type": "application/json"
                                }, null != u && null !== (p = u.headers) && void 0 !== p && p.cookie ? {
                                    cookie: u.headers.cookie
                                } : {})
                            },
                            null != u && u.body && (f.body = JSON.stringify(u.body),
                            f.method = "POST"),
                            e.next = 7,
                            fetch(d, f);
                        case 7:
                            return h = e.sent,
                            e.next = 10,
                            h.json();
                        case 10:
                            if (m = e.sent,
                            h.ok) {
                                e.next = 13;
                                break
                            }
                            throw m;
                        case 13:
                            return e.abrupt("return", Object.keys(m).length > 0 ? m : null);
                        case 16:
                            return e.prev = 16,
                            e.t0 = e.catch(2),
                            r.error("CLIENT_FETCH_ERROR", {
                                error: e.t0,
                                url: d
                            }),
                            e.abrupt("return", null);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[2, 16]])
            }))).apply(this, arguments)
        }
        function c(e) {
            return "undefined" == typeof window ? "".concat(e.baseUrlServer).concat(e.basePathServer) : e.basePath
        }
        function d() {
            return Math.floor(Date.now() / 1e3)
        }
    },
    36925: function(e, t, n) {
        "use strict";
        var r = n(64836);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.UnsupportedStrategy = t.UnknownError = t.OAuthCallbackError = t.MissingSecret = t.MissingAuthorize = t.MissingAdapterMethods = t.MissingAdapter = t.MissingAPIRoute = t.InvalidCallbackUrl = t.AccountNotLinkedError = void 0,
        t.adapterErrorHandler = function(e, t) {
            if (e)
                return Object.keys(e).reduce(function(n, r) {
                    return n[r] = (0,
                    o.default)(i.default.mark(function n() {
                        var o, a, s, l, u, c = arguments;
                        return i.default.wrap(function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    for (n.prev = 0,
                                    a = Array(o = c.length),
                                    s = 0; s < o; s++)
                                        a[s] = c[s];
                                    return t.debug("adapter_".concat(r), {
                                        args: a
                                    }),
                                    l = e[r],
                                    n.next = 6,
                                    l.apply(void 0, a);
                                case 6:
                                    return n.abrupt("return", n.sent);
                                case 9:
                                    throw n.prev = 9,
                                    n.t0 = n.catch(0),
                                    t.error("adapter_error_".concat(r), n.t0),
                                    (u = new h(n.t0)).name = "".concat(k(r), "Error"),
                                    u;
                                case 15:
                                case "end":
                                    return n.stop()
                                }
                        }, n, null, [[0, 9]])
                    })),
                    n
                }, {})
        }
        ,
        t.capitalize = k,
        t.eventsErrorHandler = function(e, t) {
            return Object.keys(e).reduce(function(n, r) {
                return n[r] = (0,
                o.default)(i.default.mark(function n() {
                    var o, a = arguments;
                    return i.default.wrap(function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0,
                                o = e[r],
                                n.next = 4,
                                o.apply(void 0, a);
                            case 4:
                                return n.abrupt("return", n.sent);
                            case 7:
                                n.prev = 7,
                                n.t0 = n.catch(0),
                                t.error("".concat(x(r), "_EVENT_ERROR"), n.t0);
                            case 10:
                            case "end":
                                return n.stop()
                            }
                    }, n, null, [[0, 7]])
                })),
                n
            }, {})
        }
        ,
        t.upperSnake = x;
        var i = r(n(64687))
          , o = r(n(17156))
          , a = r(n(66115))
          , s = r(n(38416))
          , l = r(n(56690))
          , u = r(n(89728))
          , c = r(n(61655))
          , d = r(n(94993))
          , p = r(n(73808));
        function f(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                p.default)(e);
                return n = t ? Reflect.construct(r, arguments, (0,
                p.default)(this).constructor) : r.apply(this, arguments),
                (0,
                d.default)(this, n)
            }
        }
        var h = function(e) {
            (0,
            c.default)(n, e);
            var t = f(n);
            function n(e) {
                var r, i;
                return (0,
                l.default)(this, n),
                (i = t.call(this, null !== (r = null == e ? void 0 : e.message) && void 0 !== r ? r : e)).name = "UnknownError",
                i.code = e.code,
                e instanceof Error && (i.stack = e.stack),
                i
            }
            return (0,
            u.default)(n, [{
                key: "toJSON",
                value: function() {
                    return {
                        name: this.name,
                        message: this.message,
                        stack: this.stack
                    }
                }
            }]),
            n
        }((0,
        r(n(33496)).default)(Error));
        t.UnknownError = h;
        var m = function(e) {
            (0,
            c.default)(n, e);
            var t = f(n);
            function n() {
                var e;
                (0,
                l.default)(this, n);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(i)),
                (0,
                s.default)((0,
                a.default)(e), "name", "OAuthCallbackError"),
                e
            }
            return (0,
            u.default)(n)
        }(h);
        t.OAuthCallbackError = m;
        var g = function(e) {
            (0,
            c.default)(n, e);
            var t = f(n);
            function n() {
                var e;
                (0,
                l.default)(this, n);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(i)),
                (0,
                s.default)((0,
                a.default)(e), "name", "AccountNotLinkedError"),
                e
            }
            return (0,
            u.default)(n)
        }(h);
        t.AccountNotLinkedError = g;
        var y = function(e) {
            (0,
            c.default)(n, e);
            var t = f(n);
            function n() {
                var e;
                (0,
                l.default)(this, n);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(i)),
                (0,
                s.default)((0,
                a.default)(e), "name", "MissingAPIRouteError"),
                (0,
                s.default)((0,
                a.default)(e), "code", "MISSING_NEXTAUTH_API_ROUTE_ERROR"),
                e
            }
            return (0,
            u.default)(n)
        }(h);
        t.MissingAPIRoute = y;
        var v = function(e) {
            (0,
            c.default)(n, e);
            var t = f(n);
            function n() {
                var e;
                (0,
                l.default)(this, n);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(i)),
                (0,
                s.default)((0,
                a.default)(e), "name", "MissingSecretError"),
                (0,
                s.default)((0,
                a.default)(e), "code", "NO_SECRET"),
                e
            }
            return (0,
            u.default)(n)
        }(h);
        t.MissingSecret = v;
        var b = function(e) {
            (0,
            c.default)(n, e);
            var t = f(n);
            function n() {
                var e;
                (0,
                l.default)(this, n);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(i)),
                (0,
                s.default)((0,
                a.default)(e), "name", "MissingAuthorizeError"),
                (0,
                s.default)((0,
                a.default)(e), "code", "CALLBACK_CREDENTIALS_HANDLER_ERROR"),
                e
            }
            return (0,
            u.default)(n)
        }(h);
        t.MissingAuthorize = b;
        var _ = function(e) {
            (0,
            c.default)(n, e);
            var t = f(n);
            function n() {
                var e;
                (0,
                l.default)(this, n);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(i)),
                (0,
                s.default)((0,
                a.default)(e), "name", "MissingAdapterError"),
                (0,
                s.default)((0,
                a.default)(e), "code", "EMAIL_REQUIRES_ADAPTER_ERROR"),
                e
            }
            return (0,
            u.default)(n)
        }(h);
        t.MissingAdapter = _;
        var S = function(e) {
            (0,
            c.default)(n, e);
            var t = f(n);
            function n() {
                var e;
                (0,
                l.default)(this, n);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(i)),
                (0,
                s.default)((0,
                a.default)(e), "name", "MissingAdapterMethodsError"),
                (0,
                s.default)((0,
                a.default)(e), "code", "MISSING_ADAPTER_METHODS_ERROR"),
                e
            }
            return (0,
            u.default)(n)
        }(h);
        t.MissingAdapterMethods = S;
        var w = function(e) {
            (0,
            c.default)(n, e);
            var t = f(n);
            function n() {
                var e;
                (0,
                l.default)(this, n);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(i)),
                (0,
                s.default)((0,
                a.default)(e), "name", "UnsupportedStrategyError"),
                (0,
                s.default)((0,
                a.default)(e), "code", "CALLBACK_CREDENTIALS_JWT_ERROR"),
                e
            }
            return (0,
            u.default)(n)
        }(h);
        t.UnsupportedStrategy = w;
        var E = function(e) {
            (0,
            c.default)(n, e);
            var t = f(n);
            function n() {
                var e;
                (0,
                l.default)(this, n);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return e = t.call.apply(t, [this].concat(i)),
                (0,
                s.default)((0,
                a.default)(e), "name", "InvalidCallbackUrl"),
                (0,
                s.default)((0,
                a.default)(e), "code", "INVALID_CALLBACK_URL_ERROR"),
                e
            }
            return (0,
            u.default)(n)
        }(h);
        function x(e) {
            return e.replace(/([A-Z])/g, "_$1").toUpperCase()
        }
        function k(e) {
            return "".concat(e[0].toUpperCase()).concat(e.slice(1))
        }
        t.InvalidCallbackUrl = E
    },
    33299: function(e, t, n) {
        "use strict";
        var r, i, o, a, s, l = n(34155), u = n(64836), c = n(18698);
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = {
            SessionContext: !0,
            useSession: !0,
            getSession: !0,
            getCsrfToken: !0,
            getProviders: !0,
            signIn: !0,
            signOut: !0,
            SessionProvider: !0
        };
        t.SessionContext = void 0,
        t.SessionProvider = function(e) {
            if (!R)
                throw Error("React Context is unavailable in Server Components");
            var t, n, r, i, o, a, s = e.children, l = e.basePath, u = e.refetchInterval, c = e.refetchWhenOffline;
            l && (O.basePath = l);
            var d = void 0 !== e.session;
            O._lastSync = d ? (0,
            b.now)() : 0;
            var f = g.useState(function() {
                return d && (O._session = e.session),
                e.session
            })
              , y = (0,
            m.default)(f, 2)
              , v = y[0]
              , S = y[1]
              , w = g.useState(!d)
              , E = (0,
            m.default)(w, 2)
              , x = E[0]
              , k = E[1];
            g.useEffect(function() {
                return O._getSession = (0,
                h.default)(p.default.mark(function e() {
                    var t, n, r = arguments;
                    return p.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = (r.length > 0 && void 0 !== r[0] ? r[0] : {}).event,
                                e.prev = 1,
                                !((n = "storage" === t) || void 0 === O._session)) {
                                    e.next = 10;
                                    break
                                }
                                return O._lastSync = (0,
                                b.now)(),
                                e.next = 7,
                                I({
                                    broadcast: !n
                                });
                            case 7:
                                return O._session = e.sent,
                                S(O._session),
                                e.abrupt("return");
                            case 10:
                                if (!(!t || null === O._session || (0,
                                b.now)() < O._lastSync)) {
                                    e.next = 12;
                                    break
                                }
                                return e.abrupt("return");
                            case 12:
                                return O._lastSync = (0,
                                b.now)(),
                                e.next = 15,
                                I();
                            case 15:
                                O._session = e.sent,
                                S(O._session),
                                e.next = 22;
                                break;
                            case 19:
                                e.prev = 19,
                                e.t0 = e.catch(1),
                                T.error("CLIENT_SESSION_ERROR", e.t0);
                            case 22:
                                return e.prev = 22,
                                k(!1),
                                e.finish(22);
                            case 25:
                            case "end":
                                return e.stop()
                            }
                    }, e, null, [[1, 19, 22, 25]])
                })),
                O._getSession(),
                function() {
                    O._lastSync = 0,
                    O._session = void 0,
                    O._getSession = function() {}
                }
            }, []),
            g.useEffect(function() {
                var e = C.receive(function() {
                    return O._getSession({
                        event: "storage"
                    })
                });
                return function() {
                    return e()
                }
            }, []),
            g.useEffect(function() {
                var t = e.refetchOnWindowFocus
                  , n = void 0 === t || t
                  , r = function() {
                    n && "visible" === document.visibilityState && O._getSession({
                        event: "visibilitychange"
                    })
                };
                return document.addEventListener("visibilitychange", r, !1),
                function() {
                    return document.removeEventListener("visibilitychange", r, !1)
                }
            }, [e.refetchOnWindowFocus]);
            var M = (t = g.useState("undefined" != typeof navigator && navigator.onLine),
            r = (n = (0,
            m.default)(t, 2))[0],
            i = n[1],
            o = function() {
                return i(!0)
            }
            ,
            a = function() {
                return i(!1)
            }
            ,
            g.useEffect(function() {
                return window.addEventListener("online", o),
                window.addEventListener("offline", a),
                function() {
                    window.removeEventListener("online", o),
                    window.removeEventListener("offline", a)
                }
            }, []),
            r)
              , D = !1 !== c || M;
            g.useEffect(function() {
                if (u && D) {
                    var e = setInterval(function() {
                        O._session && O._getSession({
                            event: "poll"
                        })
                    }, 1e3 * u);
                    return function() {
                        return clearInterval(e)
                    }
                }
            }, [u, D]);
            var L = g.useMemo(function() {
                return {
                    data: v,
                    status: x ? "loading" : v ? "authenticated" : "unauthenticated",
                    update: function(e) {
                        return (0,
                        h.default)(p.default.mark(function t() {
                            var n;
                            return p.default.wrap(function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (!(x || !v)) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return k(!0),
                                        t.t0 = b.fetchData,
                                        t.t1 = O,
                                        t.t2 = T,
                                        t.next = 8,
                                        A();
                                    case 8:
                                        return t.t3 = t.sent,
                                        t.t4 = e,
                                        t.t5 = {
                                            csrfToken: t.t3,
                                            data: t.t4
                                        },
                                        t.t6 = {
                                            body: t.t5
                                        },
                                        t.t7 = {
                                            req: t.t6
                                        },
                                        t.next = 15,
                                        (0,
                                        t.t0)("session", t.t1, t.t2, t.t7);
                                    case 15:
                                        return n = t.sent,
                                        k(!1),
                                        n && (S(n),
                                        C.post({
                                            event: "session",
                                            data: {
                                                trigger: "getSession"
                                            }
                                        })),
                                        t.abrupt("return", n);
                                    case 19:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t)
                        }))()
                    }
                }
            }, [v, x]);
            return (0,
            _.jsx)(R.Provider, {
                value: L,
                children: s
            })
        }
        ,
        t.getCsrfToken = A,
        t.getProviders = L,
        t.getSession = I,
        t.signIn = function(e, t, n) {
            return N.apply(this, arguments)
        }
        ,
        t.signOut = function(e) {
            return j.apply(this, arguments)
        }
        ,
        t.useSession = function(e) {
            if (!R)
                throw Error("React Context is unavailable in Server Components");
            var t = g.useContext(R)
              , n = null != e ? e : {}
              , r = n.required
              , i = n.onUnauthenticated
              , o = r && "unauthenticated" === t.status;
            return (g.useEffect(function() {
                if (o) {
                    var e = "/api/auth/signin?".concat(new URLSearchParams({
                        error: "SessionRequired",
                        callbackUrl: window.location.href
                    }));
                    i ? i() : window.location.href = e
                }
            }, [o, i]),
            o) ? {
                data: t.data,
                update: t.update,
                status: "loading"
            } : t
        }
        ;
        var p = u(n(64687))
          , f = u(n(38416))
          , h = u(n(17156))
          , m = u(n(27424))
          , g = E(n(67294))
          , y = E(n(26553))
          , v = u(n(30762))
          , b = n(29548)
          , _ = n(85893)
          , S = n(527);
        function w(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (w = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function E(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" !== c(e) && "function" != typeof e)
                return {
                    default: e
                };
            var n = w(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {}
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        function x(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function k(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? x(Object(n), !0).forEach(function(t) {
                    (0,
                    f.default)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        Object.keys(S).forEach(function(e) {
            !("default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(d, e)) && (e in t && t[e] === S[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return S[e]
                }
            }))
        });
        var O = {
            baseUrl: (0,
            v.default)(null !== (r = l.env.NEXTAUTH_URL) && void 0 !== r ? r : l.env.VERCEL_URL).origin,
            basePath: (0,
            v.default)(l.env.NEXTAUTH_URL).path,
            baseUrlServer: (0,
            v.default)(null !== (i = null !== (o = l.env.NEXTAUTH_URL_INTERNAL) && void 0 !== o ? o : l.env.NEXTAUTH_URL) && void 0 !== i ? i : l.env.VERCEL_URL).origin,
            basePathServer: (0,
            v.default)(null !== (a = l.env.NEXTAUTH_URL_INTERNAL) && void 0 !== a ? a : l.env.NEXTAUTH_URL).path,
            _lastSync: 0,
            _session: void 0,
            _getSession: function() {}
        }
          , C = (0,
        b.BroadcastChannel)()
          , T = (0,
        y.proxyLogger)(y.default, O.basePath)
          , R = null === (s = g.createContext) || void 0 === s ? void 0 : s.call(g, void 0);
        function I(e) {
            return M.apply(this, arguments)
        }
        function M() {
            return (M = (0,
            h.default)(p.default.mark(function e(t) {
                var n, r;
                return p.default.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            b.fetchData)("session", O, T, t);
                        case 2:
                            return r = e.sent,
                            (null === (n = null == t ? void 0 : t.broadcast) || void 0 === n || n) && C.post({
                                event: "session",
                                data: {
                                    trigger: "getSession"
                                }
                            }),
                            e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        function A(e) {
            return D.apply(this, arguments)
        }
        function D() {
            return (D = (0,
            h.default)(p.default.mark(function e(t) {
                var n;
                return p.default.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            b.fetchData)("csrf", O, T, t);
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", null == n ? void 0 : n.csrfToken);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        function L() {
            return P.apply(this, arguments)
        }
        function P() {
            return (P = (0,
            h.default)(p.default.mark(function e() {
                return p.default.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            b.fetchData)("providers", O, T);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        function N() {
            return (N = (0,
            h.default)(p.default.mark(function e(t, n, r) {
                var i, o, a, s, l, u, c, d, f, h, m, g, y, v, _, S, w;
                return p.default.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = void 0 === (o = (i = null != n ? n : {}).callbackUrl) ? window.location.href : o,
                            l = void 0 === (s = i.redirect) || s,
                            u = (0,
                            b.apiBaseUrl)(O),
                            e.next = 4,
                            L();
                        case 4:
                            if (c = e.sent) {
                                e.next = 8;
                                break
                            }
                            return window.location.href = "".concat(u, "/error"),
                            e.abrupt("return");
                        case 8:
                            if (!(!t || !(t in c))) {
                                e.next = 11;
                                break
                            }
                            return window.location.href = "".concat(u, "/signin?").concat(new URLSearchParams({
                                callbackUrl: a
                            })),
                            e.abrupt("return");
                        case 11:
                            return d = "credentials" === c[t].type,
                            f = "email" === c[t].type,
                            h = d || f,
                            m = "".concat(u, "/").concat(d ? "callback" : "signin", "/").concat(t),
                            g = "".concat(m).concat(r ? "?".concat(new URLSearchParams(r)) : ""),
                            e.t0 = fetch,
                            e.t1 = g,
                            e.t2 = {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            e.t3 = URLSearchParams,
                            e.t4 = k,
                            e.t5 = k({}, n),
                            e.t6 = {},
                            e.next = 25,
                            A();
                        case 25:
                            return e.t7 = e.sent,
                            e.t8 = a,
                            e.t9 = {
                                csrfToken: e.t7,
                                callbackUrl: e.t8,
                                json: !0
                            },
                            e.t10 = (0,
                            e.t4)(e.t5, e.t6, e.t9),
                            e.t11 = new e.t3(e.t10),
                            e.t12 = {
                                method: "post",
                                headers: e.t2,
                                body: e.t11
                            },
                            e.next = 33,
                            (0,
                            e.t0)(e.t1, e.t12);
                        case 33:
                            return y = e.sent,
                            e.next = 36,
                            y.json();
                        case 36:
                            if (v = e.sent,
                            !(l || !h)) {
                                e.next = 42;
                                break
                            }
                            return S = null !== (_ = v.url) && void 0 !== _ ? _ : a,
                            window.location.href = S,
                            S.includes("#") && window.location.reload(),
                            e.abrupt("return");
                        case 42:
                            if (w = new URL(v.url).searchParams.get("error"),
                            !y.ok) {
                                e.next = 46;
                                break
                            }
                            return e.next = 46,
                            O._getSession({
                                event: "storage"
                            });
                        case 46:
                            return e.abrupt("return", {
                                error: w,
                                status: y.status,
                                ok: y.ok,
                                url: w ? null : v.url
                            });
                        case 47:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        function j() {
            return (j = (0,
            h.default)(p.default.mark(function e(t) {
                var n, r, i, o, a, s, l, u, c;
                return p.default.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return i = void 0 === (r = (null != t ? t : {}).callbackUrl) ? window.location.href : r,
                            o = (0,
                            b.apiBaseUrl)(O),
                            e.t0 = {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            e.t1 = URLSearchParams,
                            e.next = 6,
                            A();
                        case 6:
                            return e.t2 = e.sent,
                            e.t3 = i,
                            e.t4 = {
                                csrfToken: e.t2,
                                callbackUrl: e.t3,
                                json: !0
                            },
                            e.t5 = new e.t1(e.t4),
                            a = {
                                method: "post",
                                headers: e.t0,
                                body: e.t5
                            },
                            e.next = 13,
                            fetch("".concat(o, "/signout"), a);
                        case 13:
                            return s = e.sent,
                            e.next = 16,
                            s.json();
                        case 16:
                            if (l = e.sent,
                            C.post({
                                event: "session",
                                data: {
                                    trigger: "signout"
                                }
                            }),
                            !(null === (n = null == t ? void 0 : t.redirect) || void 0 === n || n)) {
                                e.next = 23;
                                break
                            }
                            return c = null !== (u = l.url) && void 0 !== u ? u : i,
                            window.location.href = c,
                            c.includes("#") && window.location.reload(),
                            e.abrupt("return");
                        case 23:
                            return e.next = 25,
                            O._getSession({
                                event: "storage"
                            });
                        case 25:
                            return e.abrupt("return", l);
                        case 26:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        t.SessionContext = R
    },
    527: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    26553: function(e, t, n) {
        "use strict";
        var r = n(64836);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        t.proxyLogger = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l
              , t = arguments.length > 1 ? arguments[1] : void 0;
            try {
                if ("undefined" == typeof window)
                    return e;
                var n = {}
                  , r = function(e) {
                    n[e] = function(n, r) {
                        l[e](n, r),
                        "error" === e && (r = s(r)),
                        r.client = !0;
                        var o = "".concat(t, "/_log")
                          , u = new URLSearchParams(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? a(Object(n), !0).forEach(function(t) {
                                    (0,
                                    i.default)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            level: e,
                            code: n
                        }, r));
                        return navigator.sendBeacon ? navigator.sendBeacon(o, u) : fetch(o, {
                            method: "POST",
                            body: u,
                            keepalive: !0
                        })
                    }
                };
                for (var o in e)
                    r(o);
                return n
            } catch (e) {
                return l
            }
        }
        ,
        t.setLogger = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0;
            t || (l.debug = function() {}
            ),
            e.error && (l.error = e.error),
            e.warn && (l.warn = e.warn),
            e.debug && (l.debug = e.debug)
        }
        ;
        var i = r(n(38416))
          , o = n(36925);
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function s(e) {
            var t;
            return e instanceof Error && !(e instanceof o.UnknownError) ? {
                message: e.message,
                stack: e.stack,
                name: e.name
            } : (null != e && e.error && (e.error = s(e.error),
            e.message = null !== (t = e.message) && void 0 !== t ? t : e.error.message),
            e)
        }
        var l = {
            error: function(e, t) {
                t = s(t),
                console.error("[next-auth][error][".concat(e, "]"), "\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase()), t.message, t)
            },
            warn: function(e) {
                console.warn("[next-auth][warn][".concat(e, "]"), "\nhttps://next-auth.js.org/warnings#".concat(e.toLowerCase()))
            },
            debug: function(e, t) {
                console.log("[next-auth][debug][".concat(e, "]"), t)
            }
        };
        t.default = l
    },
    30762: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t;
            let n = new URL("http://localhost:3000/api/auth");
            e && !e.startsWith("http") && (e = `https://${e}`);
            let r = new URL(null !== (t = e) && void 0 !== t ? t : n)
              , i = ("/" === r.pathname ? n.pathname : r.pathname).replace(/\/$/, "")
              , o = `${r.origin}${i}`;
            return {
                origin: r.origin,
                host: r.host,
                path: i,
                base: o,
                toString: () => o
            }
        }
    },
    11752: function(e, t, n) {
        e.exports = n(17500)
    },
    91118: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(14926)
        }
        ])
    },
    20351: function(e, t, n) {
        "use strict";
        let r, i, o, a, s, l, u, c, d, p, f, h, m, g, y, v, b, _, S;
        var w, E, x, k, O, C, T, R, I = n(42990);
        function M(e, t, n=[t], r="npm") {
            let i = e._metadata || {};
            i.sdk || (i.sdk = {
                name: `sentry.javascript.${t}`,
                packages: n.map(e => ({
                    name: `${r}:@sentry/${e}`,
                    version: I.J
                })),
                version: I.J
            }),
            e._metadata = i
        }
        var A = n(39424)
          , D = n(67973)
          , L = n(41001)
          , P = n(41982)
          , N = n(89163)
          , j = n(94223);
        let B = [];
        function U(e, t) {
            for (let n of t)
                n && n.afterAllSetup && n.afterAllSetup(e)
        }
        function $(e, t, n) {
            if (n[t.name]) {
                j.X && L.kg.log(`Integration skipped because it was already installed: ${t.name}`);
                return
            }
            if (n[t.name] = t,
            -1 === B.indexOf(t.name) && "function" == typeof t.setupOnce && (t.setupOnce(),
            B.push(t.name)),
            t.setup && "function" == typeof t.setup && t.setup(e),
            "function" == typeof t.preprocessEvent) {
                let n = t.preprocessEvent.bind(t);
                e.on("preprocessEvent", (t, r) => n(t, r, e))
            }
            if ("function" == typeof t.processEvent) {
                let n = t.processEvent.bind(t)
                  , r = Object.assign( (t, r) => n(t, r, e), {
                    id: t.name
                });
                e.addEventProcessor(r)
            }
            j.X && L.kg.log(`Integration installed: ${t.name}`)
        }
        let W = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"]
          , F = (e={}) => ({
            name: "InboundFilters",
            processEvent: (t, n, r) => {
                var i, o;
                return ((i = function(e={}, t={}) {
                    return {
                        allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                        denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                        ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : W],
                        ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []],
                        ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                    }
                }(e, r.getOptions())).ignoreInternal && function(e) {
                    try {
                        return "SentryError" === e.exception.values[0].type
                    } catch (e) {}
                    return !1
                }(t) ? (j.X && L.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0,
                P.jH)(t)}`),
                0) : (o = i.ignoreErrors,
                !t.type && o && o.length && (function(e) {
                    let t;
                    let n = [];
                    e.message && n.push(e.message);
                    try {
                        t = e.exception.values[e.exception.values.length - 1]
                    } catch (e) {}
                    return t && t.value && (n.push(t.value),
                    t.type && n.push(`${t.type}: ${t.value}`)),
                    n
                }
                )(t).some(e => (0,
                N.U0)(e, o))) ? (j.X && L.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0,
                P.jH)(t)}`),
                0) : t.type || !t.exception || !t.exception.values || 0 === t.exception.values.length || t.message || t.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value) ? !function(e, t) {
                    if ("transaction" !== e.type || !t || !t.length)
                        return !1;
                    let n = e.transaction;
                    return !!n && (0,
                    N.U0)(n, t)
                }(t, i.ignoreTransactions) ? !function(e, t) {
                    if (!t || !t.length)
                        return !1;
                    let n = z(e);
                    return !!n && (0,
                    N.U0)(n, t)
                }(t, i.denyUrls) ? function(e, t) {
                    if (!t || !t.length)
                        return !0;
                    let n = z(e);
                    return !n || (0,
                    N.U0)(n, t)
                }(t, i.allowUrls) || (j.X && L.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0,
                P.jH)(t)}.
Url: ${z(t)}`),
                0) : (j.X && L.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0,
                P.jH)(t)}.
Url: ${z(t)}`),
                0) : (j.X && L.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0,
                P.jH)(t)}`),
                0) : (j.X && L.kg.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0,
                P.jH)(t)}`),
                0)) ? t : null
            }
        });
        function z(e) {
            try {
                let t;
                try {
                    t = e.exception.values[0].stacktrace.frames
                } catch (e) {}
                return t ? function(e=[]) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                            return n.filename || null
                    }
                    return null
                }(t) : null
            } catch (t) {
                return j.X && L.kg.error(`Cannot extract url for event ${(0,
                P.jH)(e)}`),
                null
            }
        }
        var H = n(27179)
          , q = n(73076);
        let Z = new WeakMap
          , X = () => ({
            name: "FunctionToString",
            setupOnce() {
                r = Function.prototype.toString;
                try {
                    Function.prototype.toString = function(...e) {
                        let t = (0,
                        H.HK)(this)
                          , n = Z.has((0,
                        q.s3)()) && void 0 !== t ? t : this;
                        return r.apply(n, e)
                    }
                } catch (e) {}
            },
            setup(e) {
                Z.set(e, !0)
            }
        });
        var J = n(42283);
        let G = () => {
            let e;
            return {
                name: "Dedupe",
                processEvent(t) {
                    if (t.type)
                        return t;
                    try {
                        var n;
                        if ((n = e) && (function(e, t) {
                            let n = e.message
                              , r = t.message;
                            return !!((n || r) && (!n || r) && (n || !r) && n === r && Y(e, t) && V(e, t))
                        }(t, n) || function(e, t) {
                            let n = K(t)
                              , r = K(e);
                            return !!(n && r && n.type === r.type && n.value === r.value && Y(e, t) && V(e, t))
                        }(t, n)))
                            return j.X && L.kg.warn("Event dropped due to being a duplicate of previously captured event."),
                            null
                    } catch (e) {}
                    return e = t
                }
            }
        }
        ;
        function V(e, t) {
            let n = (0,
            J.Fr)(e)
              , r = (0,
            J.Fr)(t);
            if (!n && !r)
                return !0;
            if (n && !r || !n && r || r.length !== n.length)
                return !1;
            for (let e = 0; e < r.length; e++) {
                let t = r[e]
                  , i = n[e];
                if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function)
                    return !1
            }
            return !0
        }
        function Y(e, t) {
            let n = e.fingerprint
              , r = t.fingerprint;
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (e) {
                return !1
            }
        }
        function K(e) {
            return e.exception && e.exception.values && e.exception.values[0]
        }
        var Q = n(1525)
          , ee = n(29531);
        let et = ee.GLOBAL_OBJ;
        function en(e) {
            return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        }
        let er = {}
          , ei = {};
        function eo(e, t) {
            er[e] = er[e] || [],
            er[e].push(t)
        }
        function ea(e, t) {
            ei[e] || (t(),
            ei[e] = !0)
        }
        function es(e, t) {
            let n = e && er[e];
            if (n)
                for (let r of n)
                    try {
                        r(t)
                    } catch (t) {
                        Q.X && L.kg.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0,
                        J.$P)(r)}
Error:`, t)
                    }
        }
        let el = ee.GLOBAL_OBJ
          , eu = ee.GLOBAL_OBJ;
        function ec(e) {
            let t = "history";
            eo(t, e),
            ea(t, ed)
        }
        function ed() {
            if (!function() {
                let e = el.chrome
                  , t = e && e.app && e.app.runtime
                  , n = "history"in el && !!el.history.pushState && !!el.history.replaceState;
                return !t && n
            }())
                return;
            let e = eu.onpopstate;
            function t(e) {
                return function(...t) {
                    let n = t.length > 2 ? t[2] : void 0;
                    if (n) {
                        let e = i
                          , t = String(n);
                        i = t,
                        es("history", {
                            from: e,
                            to: t
                        })
                    }
                    return e.apply(this, t)
                }
            }
            eu.onpopstate = function(...t) {
                let n = eu.location.href
                  , r = i;
                if (i = n,
                es("history", {
                    from: r,
                    to: n
                }),
                e)
                    try {
                        return e.apply(this, t)
                    } catch (e) {}
            }
            ,
            (0,
            H.hl)(eu.history, "pushState", t),
            (0,
            H.hl)(eu.history, "replaceState", t)
        }
        var ep = n(73326)
          , ef = n(16824)
          , eh = n(80128)
          , em = n(39432);
        class eg extends Error {
            constructor(e, t="warn") {
                super(e),
                this.message = e,
                this.name = new.target.prototype.constructor.name,
                Object.setPrototypeOf(this, new.target.prototype),
                this.logLevel = t
            }
        }
        var ey = n(11793)
          , ev = n(10042)
          , eb = n(72123)
          , e_ = n(79769)
          , eS = n(5808);
        let ew = "Not capturing exception because it's already been captured.";
        class eE {
            constructor(e) {
                if (this._options = e,
                this._integrations = {},
                this._numProcessing = 0,
                this._outcomes = {},
                this._hooks = {},
                this._eventProcessors = [],
                e.dsn ? this._dsn = (0,
                ep.vK)(e.dsn) : j.X && L.kg.warn("No DSN provided, client will not send events."),
                this._dsn) {
                    var t, n, r;
                    let i = (t = this._dsn,
                    n = e.tunnel,
                    r = e._metadata ? e._metadata.sdk : void 0,
                    n || `${function(e) {
                        let t = e.protocol ? `${e.protocol}:` : ""
                          , n = e.port ? `:${e.port}` : "";
                        return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
                    }(t)}${t.projectId}/envelope/?${(0,
                    H._j)({
                        sentry_key: t.publicKey,
                        sentry_version: "7",
                        ...r && {
                            sentry_client: `${r.name}/${r.version}`
                        }
                    })}`);
                    this._transport = e.transport({
                        tunnel: this._options.tunnel,
                        recordDroppedEvent: this.recordDroppedEvent.bind(this),
                        ...e.transportOptions,
                        url: i
                    })
                }
            }
            captureException(e, t, n) {
                let r = (0,
                P.DM)();
                if ((0,
                P.YO)(e))
                    return j.X && L.kg.log(ew),
                    r;
                let i = {
                    event_id: r,
                    ...t
                };
                return this._process(this.eventFromException(e, i).then(e => this._captureEvent(e, i, n))),
                i.event_id
            }
            captureMessage(e, t, n, r) {
                let i = {
                    event_id: (0,
                    P.DM)(),
                    ...n
                }
                  , o = (0,
                ef.Le)(e) ? e : String(e)
                  , a = (0,
                ef.pt)(e) ? this.eventFromMessage(o, t, i) : this.eventFromException(e, i);
                return this._process(a.then(e => this._captureEvent(e, i, r))),
                i.event_id
            }
            captureEvent(e, t, n) {
                let r = (0,
                P.DM)();
                if (t && t.originalException && (0,
                P.YO)(t.originalException))
                    return j.X && L.kg.log(ew),
                    r;
                let i = {
                    event_id: r,
                    ...t
                }
                  , o = (e.sdkProcessingMetadata || {}).capturedSpanScope;
                return this._process(this._captureEvent(e, i, o || n)),
                i.event_id
            }
            captureSession(e) {
                "string" != typeof e.release ? j.X && L.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
                (0,
                ev.CT)(e, {
                    init: !1
                }))
            }
            getDsn() {
                return this._dsn
            }
            getOptions() {
                return this._options
            }
            getSdkMetadata() {
                return this._options._metadata
            }
            getTransport() {
                return this._transport
            }
            flush(e) {
                let t = this._transport;
                return t ? (this.emit("flush"),
                this._isClientDoneProcessing(e).then(n => t.flush(e).then(e => n && e))) : (0,
                eh.WD)(!0)
            }
            close(e) {
                return this.flush(e).then(e => (this.getOptions().enabled = !1,
                this.emit("close"),
                e))
            }
            getEventProcessors() {
                return this._eventProcessors
            }
            addEventProcessor(e) {
                this._eventProcessors.push(e)
            }
            init() {
                this._isEnabled() && this._setupIntegrations()
            }
            getIntegrationByName(e) {
                return this._integrations[e]
            }
            addIntegration(e) {
                let t = this._integrations[e.name];
                $(this, e, this._integrations),
                t || U(this, [e])
            }
            sendEvent(e, t={}) {
                this.emit("beforeSendEvent", e, t);
                let n = (0,
                ey.Mq)(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (let e of t.attachments || [])
                    n = (0,
                    em.BO)(n, (0,
                    em.zQ)(e));
                let r = this.sendEnvelope(n);
                r && r.then(t => this.emit("afterSendEvent", e, t), null)
            }
            sendSession(e) {
                let t = (0,
                ey.Q3)(e, this._dsn, this._options._metadata, this._options.tunnel);
                this.sendEnvelope(t)
            }
            recordDroppedEvent(e, t, n) {
                if (this._options.sendClientReports) {
                    let n = `${e}:${t}`;
                    j.X && L.kg.log(`Adding outcome: "${n}"`),
                    this._outcomes[n] = (this._outcomes[n] || 0) + 1
                }
            }
            on(e, t) {
                let n = this._hooks[e] = this._hooks[e] || [];
                return n.push(t),
                () => {
                    let e = n.indexOf(t);
                    e > -1 && n.splice(e, 1)
                }
            }
            emit(e, ...t) {
                let n = this._hooks[e];
                n && n.forEach(e => e(...t))
            }
            sendEnvelope(e) {
                return (this.emit("beforeEnvelope", e),
                this._isEnabled() && this._transport) ? this._transport.send(e).then(null, e => (j.X && L.kg.error("Error while sending event:", e),
                e)) : (j.X && L.kg.error("Transport disabled"),
                (0,
                eh.WD)({}))
            }
            _setupIntegrations() {
                let {integrations: e} = this._options;
                this._integrations = function(e, t) {
                    let n = {};
                    return t.forEach(t => {
                        t && $(e, t, n)
                    }
                    ),
                    n
                }(this, e),
                U(this, e)
            }
            _updateSessionFromEvent(e, t) {
                let n = !1
                  , r = !1
                  , i = t.exception && t.exception.values;
                if (i)
                    for (let e of (r = !0,
                    i)) {
                        let t = e.mechanism;
                        if (t && !1 === t.handled) {
                            n = !0;
                            break
                        }
                    }
                let o = "ok" === e.status;
                (o && 0 === e.errors || o && n) && ((0,
                ev.CT)(e, {
                    ...n && {
                        status: "crashed"
                    },
                    errors: e.errors || Number(r || n)
                }),
                this.captureSession(e))
            }
            _isClientDoneProcessing(e) {
                return new eh.cW(t => {
                    let n = 0
                      , r = setInterval( () => {
                        0 == this._numProcessing ? (clearInterval(r),
                        t(!0)) : (n += 1,
                        e && n >= e && (clearInterval(r),
                        t(!1)))
                    }
                    , 1)
                }
                )
            }
            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._transport
            }
            _prepareEvent(e, t, n, r=(0,
            q.aF)()) {
                let i = this.getOptions()
                  , o = Object.keys(this._integrations);
                return !t.integrations && o.length > 0 && (t.integrations = o),
                this.emit("preprocessEvent", e, t),
                e.type || r.setLastEventId(e.event_id || t.event_id),
                (0,
                eS.R)(i, e, t, n, this, r).then(e => {
                    if (null === e)
                        return e;
                    let t = {
                        ...r.getPropagationContext(),
                        ...n ? n.getPropagationContext() : void 0
                    };
                    if (!(e.contexts && e.contexts.trace) && t) {
                        let {traceId: n, spanId: r, parentSpanId: i, dsc: o} = t;
                        e.contexts = {
                            trace: (0,
                            H.Jr)({
                                trace_id: n,
                                span_id: r,
                                parent_span_id: i
                            }),
                            ...e.contexts
                        };
                        let a = o || (0,
                        eb._l)(n, this);
                        e.sdkProcessingMetadata = {
                            dynamicSamplingContext: a,
                            ...e.sdkProcessingMetadata
                        }
                    }
                    return e
                }
                )
            }
            _captureEvent(e, t={}, n) {
                return this._processEvent(e, t, n).then(e => e.event_id, e => {
                    j.X && ("log" === e.logLevel ? L.kg.log(e.message) : L.kg.warn(e))
                }
                )
            }
            _processEvent(e, t, n) {
                let r = this.getOptions()
                  , {sampleRate: i} = r
                  , o = ek(e)
                  , a = ex(e)
                  , s = e.type || "error"
                  , l = `before send for type \`${s}\``
                  , u = void 0 === i ? void 0 : (0,
                e_.o)(i);
                if (a && "number" == typeof u && Math.random() > u)
                    return this.recordDroppedEvent("sample_rate", "error", e),
                    (0,
                    eh.$2)(new eg(`Discarding event because it's not included in the random sample (sampling rate = ${i})`,"log"));
                let c = "replay_event" === s ? "replay" : s
                  , d = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                return this._prepareEvent(e, t, n, d).then(n => {
                    if (null === n)
                        throw this.recordDroppedEvent("event_processor", c, e),
                        new eg("An event processor returned `null`, will not send event.","log");
                    return t.data && !0 === t.data.__sentry__ ? n : function(e, t) {
                        let n = `${t} must return \`null\` or a valid event.`;
                        if ((0,
                        ef.J8)(e))
                            return e.then(e => {
                                if (!(0,
                                ef.PO)(e) && null !== e)
                                    throw new eg(n);
                                return e
                            }
                            , e => {
                                throw new eg(`${t} rejected with ${e}`)
                            }
                            );
                        if (!(0,
                        ef.PO)(e) && null !== e)
                            throw new eg(n);
                        return e
                    }(function(e, t, n, r) {
                        let {beforeSend: i, beforeSendTransaction: o, beforeSendSpan: a} = t;
                        if (ex(n) && i)
                            return i(n, r);
                        if (ek(n)) {
                            if (n.spans && a) {
                                let t = [];
                                for (let r of n.spans) {
                                    let n = a(r);
                                    n ? t.push(n) : e.recordDroppedEvent("before_send", "span")
                                }
                                n.spans = t
                            }
                            if (o)
                                return o(n, r)
                        }
                        return n
                    }(this, r, n, t), l)
                }
                ).then(r => {
                    if (null === r) {
                        if (this.recordDroppedEvent("before_send", c, e),
                        ek(e)) {
                            let t = 1 + (e.spans || []).length;
                            this._outcomes.span = (this._outcomes.span || 0) + t
                        }
                        throw new eg(`${l} returned \`null\`, will not send event.`,"log")
                    }
                    let i = n && n.getSession();
                    !o && i && this._updateSessionFromEvent(i, r);
                    let a = r.transaction_info;
                    return o && a && r.transaction !== e.transaction && (r.transaction_info = {
                        ...a,
                        source: "custom"
                    }),
                    this.sendEvent(r, t),
                    r
                }
                ).then(null, e => {
                    if (e instanceof eg)
                        throw e;
                    throw this.captureException(e, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: e
                    }),
                    new eg(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`)
                }
                )
            }
            _process(e) {
                this._numProcessing++,
                e.then(e => (this._numProcessing--,
                e), e => (this._numProcessing--,
                e))
            }
            _clearOutcomes() {
                let e = this._outcomes;
                return this._outcomes = {},
                Object.entries(e).map( ([e,t]) => {
                    let[n,r] = e.split(":");
                    return {
                        reason: n,
                        category: r,
                        quantity: t
                    }
                }
                )
            }
        }
        function ex(e) {
            return void 0 === e.type
        }
        function ek(e) {
            return "transaction" === e.type
        }
        var eO = n(26181)
          , eC = n(83408);
        function eT(e, t) {
            let n = eI(e, t)
              , r = {
                type: t && t.name,
                value: function(e) {
                    let t = e && e.message;
                    return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
                }(t)
            };
            return n.length && (r.stacktrace = {
                frames: n
            }),
            void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
            r
        }
        function eR(e, t) {
            return {
                exception: {
                    values: [eT(e, t)]
                }
            }
        }
        function eI(e, t) {
            let n = t.stacktrace || t.stack || ""
              , r = t && eM.test(t.message) ? 1 : 0
              , i = "number" == typeof t.framesToPop ? t.framesToPop : 0;
            try {
                return e(n, r, i)
            } catch (e) {}
            return []
        }
        let eM = /Minified React error #\d+;/i;
        function eA(e, t, n, r, i) {
            let o;
            if ((0,
            ef.VW)(t) && t.error)
                return eR(e, t.error);
            if ((0,
            ef.TX)(t) || (0,
            ef.fm)(t)) {
                if ("stack"in t)
                    o = eR(e, t);
                else {
                    let i = t.name || ((0,
                    ef.TX)(t) ? "DOMError" : "DOMException")
                      , a = t.message ? `${i}: ${t.message}` : i;
                    o = eD(e, a, n, r),
                    (0,
                    P.Db)(o, a)
                }
                return "code"in t && (o.tags = {
                    ...o.tags,
                    "DOMException.code": `${t.code}`
                }),
                o
            }
            return (0,
            ef.VZ)(t) ? eR(e, t) : ((0,
            ef.PO)(t) || (0,
            ef.cO)(t) ? o = function(e, t, n, r) {
                let i = (0,
                q.s3)()
                  , o = i && i.getOptions().normalizeDepth
                  , a = function(e) {
                    for (let t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                            let n = e[t];
                            if (n instanceof Error)
                                return n
                        }
                }(t)
                  , s = {
                    __serialized__: (0,
                    eC.Qy)(t, o)
                };
                if (a)
                    return {
                        exception: {
                            values: [eT(e, a)]
                        },
                        extra: s
                    };
                let l = {
                    exception: {
                        values: [{
                            type: (0,
                            ef.cO)(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                            value: function(e, {isUnhandledRejection: t}) {
                                let n = (0,
                                H.zf)(e)
                                  , r = t ? "promise rejection" : "exception";
                                if ((0,
                                ef.VW)(e))
                                    return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                                if ((0,
                                ef.cO)(e)) {
                                    let t = function(e) {
                                        try {
                                            let t = Object.getPrototypeOf(e);
                                            return t ? t.constructor.name : void 0
                                        } catch (e) {}
                                    }(e);
                                    return `Event \`${t}\` (type=${e.type}) captured as ${r}`
                                }
                                return `Object captured as ${r} with keys: ${n}`
                            }(t, {
                                isUnhandledRejection: r
                            })
                        }]
                    },
                    extra: s
                };
                if (n) {
                    let t = eI(e, n);
                    t.length && (l.exception.values[0].stacktrace = {
                        frames: t
                    })
                }
                return l
            }(e, t, n, i) : (o = eD(e, t, n, r),
            (0,
            P.Db)(o, `${t}`, void 0)),
            (0,
            P.EG)(o, {
                synthetic: !0
            }),
            o)
        }
        function eD(e, t, n, r) {
            let i = {};
            if (r && n) {
                let r = eI(e, n);
                r.length && (i.exception = {
                    values: [{
                        value: t,
                        stacktrace: {
                            frames: r
                        }
                    }]
                })
            }
            if ((0,
            ef.Le)(t)) {
                let {__sentry_template_string__: e, __sentry_template_values__: n} = t;
                return i.logentry = {
                    message: e,
                    params: n
                },
                i
            }
            return i.message = t,
            i
        }
        let eL = ee.GLOBAL_OBJ
          , eP = 0;
        function eN(e, t={}, n) {
            if ("function" != typeof e)
                return e;
            try {
                let t = e.__sentry_wrapped__;
                if (t)
                    return t;
                if ((0,
                H.HK)(e))
                    return e
            } catch (t) {
                return e
            }
            let r = function() {
                let r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    let i = r.map(e => eN(e, t));
                    return e.apply(this, i)
                } catch (e) {
                    throw eP++,
                    setTimeout( () => {
                        eP--
                    }
                    ),
                    (0,
                    q.$e)(n => {
                        n.addEventProcessor(e => (t.mechanism && ((0,
                        P.Db)(e, void 0, void 0),
                        (0,
                        P.EG)(e, t.mechanism)),
                        e.extra = {
                            ...e.extra,
                            arguments: r
                        },
                        e)),
                        (0,
                        A.Tb)(e)
                    }
                    ),
                    e
                }
            };
            try {
                for (let t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
            } catch (e) {}
            (0,
            H.$Q)(r, e),
            (0,
            H.xp)(e, "__sentry_wrapped__", r);
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                    get: () => e.name
                })
            } catch (e) {}
            return r
        }
        class ej extends eE {
            constructor(e) {
                let t = {
                    parentSpanIsAlwaysRootSpan: !0,
                    ...e
                };
                M(t, "browser", ["browser"], eL.SENTRY_SDK_SOURCE || "npm"),
                super(t),
                t.sendClientReports && eL.document && eL.document.addEventListener("visibilitychange", () => {
                    "hidden" === eL.document.visibilityState && this._flushOutcomes()
                }
                )
            }
            eventFromException(e, t) {
                return function(e, t, n, r) {
                    let i = eA(e, t, n && n.syntheticException || void 0, r);
                    return (0,
                    P.EG)(i),
                    i.level = "error",
                    n && n.event_id && (i.event_id = n.event_id),
                    (0,
                    eh.WD)(i)
                }(this._options.stackParser, e, t, this._options.attachStacktrace)
            }
            eventFromMessage(e, t="info", n) {
                return function(e, t, n="info", r, i) {
                    let o = eD(e, t, r && r.syntheticException || void 0, i);
                    return o.level = n,
                    r && r.event_id && (o.event_id = r.event_id),
                    (0,
                    eh.WD)(o)
                }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
            }
            captureUserFeedback(e) {
                if (!this._isEnabled())
                    return;
                let t = function(e, {metadata: t, tunnel: n, dsn: r}) {
                    let i = {
                        event_id: e.event_id,
                        sent_at: new Date().toISOString(),
                        ...t && t.sdk && {
                            sdk: {
                                name: t.sdk.name,
                                version: t.sdk.version
                            }
                        },
                        ...!!n && !!r && {
                            dsn: (0,
                            ep.RA)(r)
                        }
                    };
                    return (0,
                    em.Jd)(i, [[{
                        type: "user_report"
                    }, e]])
                }(e, {
                    metadata: this.getSdkMetadata(),
                    dsn: this.getDsn(),
                    tunnel: this.getOptions().tunnel
                });
                this.sendEnvelope(t)
            }
            _prepareEvent(e, t, n) {
                return e.platform = e.platform || "javascript",
                super._prepareEvent(e, t, n)
            }
            _flushOutcomes() {
                let e = this._clearOutcomes();
                if (0 === e.length || !this._dsn)
                    return;
                let t = function(e, t, n) {
                    let r = [{
                        type: "client_report"
                    }, {
                        timestamp: (0,
                        eO.yW)(),
                        discarded_events: e
                    }];
                    return (0,
                    em.Jd)(t ? {
                        dsn: t
                    } : {}, [r])
                }(e, this._options.tunnel && (0,
                ep.RA)(this._dsn));
                this.sendEnvelope(t)
            }
        }
        function eB(e) {
            eo("dom", e),
            ea("dom", eU)
        }
        function eU() {
            if (!eu.document)
                return;
            let e = es.bind(null, "dom")
              , t = e$(e, !0);
            eu.document.addEventListener("click", t, !1),
            eu.document.addEventListener("keypress", t, !1),
            ["EventTarget", "Node"].forEach(t => {
                let n = eu[t] && eu[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
                H.hl)(n, "addEventListener", function(t) {
                    return function(n, r, i) {
                        if ("click" === n || "keypress" == n)
                            try {
                                let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}
                                  , o = r[n] = r[n] || {
                                    refCount: 0
                                };
                                if (!o.handler) {
                                    let r = e$(e);
                                    o.handler = r,
                                    t.call(this, n, r, i)
                                }
                                o.refCount++
                            } catch (e) {}
                        return t.call(this, n, r, i)
                    }
                }),
                (0,
                H.hl)(n, "removeEventListener", function(e) {
                    return function(t, n, r) {
                        if ("click" === t || "keypress" == t)
                            try {
                                let n = this.__sentry_instrumentation_handlers__ || {}
                                  , i = n[t];
                                i && (i.refCount--,
                                i.refCount <= 0 && (e.call(this, t, i.handler, r),
                                i.handler = void 0,
                                delete n[t]),
                                0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                            } catch (e) {}
                        return e.call(this, t, n, r)
                    }
                }))
            }
            )
        }
        function e$(e, t=!1) {
            return n => {
                if (!n || n._sentryCaptured)
                    return;
                let r = function(e) {
                    try {
                        return e.target
                    } catch (e) {
                        return null
                    }
                }(n);
                if ("keypress" === n.type && (!r || !r.tagName || "INPUT" !== r.tagName && "TEXTAREA" !== r.tagName && !r.isContentEditable))
                    return;
                (0,
                H.xp)(n, "_sentryCaptured", !0),
                r && !r._sentryId && (0,
                H.xp)(r, "_sentryId", (0,
                P.DM)());
                let i = "keypress" === n.type ? "input" : n.type;
                !function(e) {
                    if (e.type !== a)
                        return !1;
                    try {
                        if (!e.target || e.target._sentryId !== s)
                            return !1
                    } catch (e) {}
                    return !0
                }(n) && (e({
                    event: n,
                    name: i,
                    global: t
                }),
                a = n.type,
                s = r ? r._sentryId : void 0),
                clearTimeout(o),
                o = eu.setTimeout( () => {
                    s = void 0,
                    a = void 0
                }
                , 1e3)
            }
        }
        let eW = "__sentry_xhr_v3__";
        function eF(e) {
            eo("xhr", e),
            ea("xhr", ez)
        }
        function ez() {
            if (!eu.XMLHttpRequest)
                return;
            let e = XMLHttpRequest.prototype;
            (0,
            H.hl)(e, "open", function(e) {
                return function(...t) {
                    let n = 1e3 * (0,
                    eO.ph)()
                      , r = (0,
                    ef.HD)(t[0]) ? t[0].toUpperCase() : void 0
                      , i = function(e) {
                        if ((0,
                        ef.HD)(e))
                            return e;
                        try {
                            return e.toString()
                        } catch (e) {}
                    }(t[1]);
                    if (!r || !i)
                        return e.apply(this, t);
                    this[eW] = {
                        method: r,
                        url: i,
                        request_headers: {}
                    },
                    "POST" === r && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                    let o = () => {
                        let e = this[eW];
                        if (e && 4 === this.readyState) {
                            try {
                                e.status_code = this.status
                            } catch (e) {}
                            es("xhr", {
                                endTimestamp: 1e3 * (0,
                                eO.ph)(),
                                startTimestamp: n,
                                xhr: this
                            })
                        }
                    }
                    ;
                    return "onreadystatechange"in this && "function" == typeof this.onreadystatechange ? (0,
                    H.hl)(this, "onreadystatechange", function(e) {
                        return function(...t) {
                            return o(),
                            e.apply(this, t)
                        }
                    }) : this.addEventListener("readystatechange", o),
                    (0,
                    H.hl)(this, "setRequestHeader", function(e) {
                        return function(...t) {
                            let[n,r] = t
                              , i = this[eW];
                            return i && (0,
                            ef.HD)(n) && (0,
                            ef.HD)(r) && (i.request_headers[n.toLowerCase()] = r),
                            e.apply(this, t)
                        }
                    }),
                    e.apply(this, t)
                }
            }),
            (0,
            H.hl)(e, "send", function(e) {
                return function(...t) {
                    let n = this[eW];
                    return n && (void 0 !== t[0] && (n.body = t[0]),
                    es("xhr", {
                        startTimestamp: 1e3 * (0,
                        eO.ph)(),
                        xhr: this
                    })),
                    e.apply(this, t)
                }
            })
        }
        function eH(e, t) {
            let n = (0,
            q.s3)()
              , r = (0,
            q.aF)();
            if (!n)
                return;
            let {beforeBreadcrumb: i=null, maxBreadcrumbs: o=100} = n.getOptions();
            if (o <= 0)
                return;
            let a = {
                timestamp: (0,
                eO.yW)(),
                ...e
            }
              , s = i ? (0,
            L.Cf)( () => i(a, t)) : a;
            null !== s && (n.emit && n.emit("beforeAddBreadcrumb", s, t),
            r.addBreadcrumb(s, o))
        }
        function eq() {
            "console"in ee.GLOBAL_OBJ && L.RU.forEach(function(e) {
                e in ee.GLOBAL_OBJ.console && (0,
                H.hl)(ee.GLOBAL_OBJ.console, e, function(t) {
                    return L.LD[e] = t,
                    function(...t) {
                        es("console", {
                            args: t,
                            level: e
                        });
                        let n = L.LD[e];
                        n && n.apply(ee.GLOBAL_OBJ.console, t)
                    }
                })
            })
        }
        function eZ(e) {
            let t = "fetch";
            eo(t, e),
            ea(t, eX)
        }
        function eX() {
            (function() {
                if ("string" == typeof EdgeRuntime)
                    return !0;
                if (!function() {
                    if (!("fetch"in et))
                        return !1;
                    try {
                        return new Headers,
                        new Request("http://www.example.com"),
                        new Response,
                        !0
                    } catch (e) {
                        return !1
                    }
                }())
                    return !1;
                if (en(et.fetch))
                    return !0;
                let e = !1
                  , t = et.document;
                if (t && "function" == typeof t.createElement)
                    try {
                        let n = t.createElement("iframe");
                        n.hidden = !0,
                        t.head.appendChild(n),
                        n.contentWindow && n.contentWindow.fetch && (e = en(n.contentWindow.fetch)),
                        t.head.removeChild(n)
                    } catch (e) {
                        Q.X && L.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                    }
                return e
            }
            )() && (0,
            H.hl)(ee.GLOBAL_OBJ, "fetch", function(e) {
                return function(...t) {
                    let {method: n, url: r} = function(e) {
                        if (0 === e.length)
                            return {
                                method: "GET",
                                url: ""
                            };
                        if (2 === e.length) {
                            let[t,n] = e;
                            return {
                                url: eG(t),
                                method: eJ(n, "method") ? String(n.method).toUpperCase() : "GET"
                            }
                        }
                        let t = e[0];
                        return {
                            url: eG(t),
                            method: eJ(t, "method") ? String(t.method).toUpperCase() : "GET"
                        }
                    }(t)
                      , i = {
                        args: t,
                        fetchData: {
                            method: n,
                            url: r
                        },
                        startTimestamp: 1e3 * (0,
                        eO.ph)()
                    };
                    es("fetch", {
                        ...i
                    });
                    let o = Error().stack;
                    return e.apply(ee.GLOBAL_OBJ, t).then(e => (es("fetch", {
                        ...i,
                        endTimestamp: 1e3 * (0,
                        eO.ph)(),
                        response: e
                    }),
                    e), e => {
                        throw es("fetch", {
                            ...i,
                            endTimestamp: 1e3 * (0,
                            eO.ph)(),
                            error: e
                        }),
                        (0,
                        ef.VZ)(e) && void 0 === e.stack && (e.stack = o,
                        (0,
                        H.xp)(e, "framesToPop", 1)),
                        e
                    }
                    )
                }
            })
        }
        function eJ(e, t) {
            return !!e && "object" == typeof e && !!e[t]
        }
        function eG(e) {
            return "string" == typeof e ? e : e ? eJ(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
        }
        var eV = n(1869);
        let eY = ["fatal", "error", "warning", "log", "info", "debug"];
        function eK(e) {
            if (!e)
                return {};
            let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t)
                return {};
            let n = t[6] || ""
              , r = t[8] || "";
            return {
                host: t[4],
                path: t[5],
                protocol: t[2],
                search: n,
                hash: r,
                relative: t[5] + n + r
            }
        }
        let eQ = (e={}) => {
            let t = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            };
            return {
                name: "Breadcrumbs",
                setup(e) {
                    var n;
                    t.console && function(e) {
                        let t = "console";
                        eo(t, e),
                        ea(t, eq)
                    }(function(t) {
                        var n;
                        if ((0,
                        q.s3)() !== e)
                            return;
                        let r = {
                            category: "console",
                            data: {
                                arguments: t.args,
                                logger: "console"
                            },
                            level: "warn" === (n = t.level) ? "warning" : eY.includes(n) ? n : "log",
                            message: (0,
                            N.nK)(t.args, " ")
                        };
                        if ("assert" === t.level) {
                            if (!1 !== t.args[0])
                                return;
                            r.message = `Assertion failed: ${(0,
                            N.nK)(t.args.slice(1), " ") || "console.assert"}`,
                            r.data.arguments = t.args.slice(1)
                        }
                        eH(r, {
                            input: t.args,
                            level: t.level
                        })
                    }),
                    t.dom && eB((n = t.dom,
                    function(t) {
                        let r, i;
                        if ((0,
                        q.s3)() !== e)
                            return;
                        let o = "object" == typeof n ? n.serializeAttribute : void 0
                          , a = "object" == typeof n && "number" == typeof n.maxStringLength ? n.maxStringLength : void 0;
                        a && a > 1024 && (a = 1024),
                        "string" == typeof o && (o = [o]);
                        try {
                            let e = t.event
                              , n = e && e.target ? e.target : e;
                            r = (0,
                            eV.Rt)(n, {
                                keyAttrs: o,
                                maxStringLength: a
                            }),
                            i = (0,
                            eV.iY)(n)
                        } catch (e) {
                            r = "<unknown>"
                        }
                        if (0 === r.length)
                            return;
                        let s = {
                            category: `ui.${t.name}`,
                            message: r
                        };
                        i && (s.data = {
                            "ui.component_name": i
                        }),
                        eH(s, {
                            event: t.event,
                            name: t.name,
                            global: t.global
                        })
                    }
                    )),
                    t.xhr && eF(function(t) {
                        if ((0,
                        q.s3)() !== e)
                            return;
                        let {startTimestamp: n, endTimestamp: r} = t
                          , i = t.xhr[eW];
                        if (!n || !r || !i)
                            return;
                        let {method: o, url: a, status_code: s, body: l} = i;
                        eH({
                            category: "xhr",
                            data: {
                                method: o,
                                url: a,
                                status_code: s
                            },
                            type: "http"
                        }, {
                            xhr: t.xhr,
                            input: l,
                            startTimestamp: n,
                            endTimestamp: r
                        })
                    }),
                    t.fetch && eZ(function(t) {
                        if ((0,
                        q.s3)() !== e)
                            return;
                        let {startTimestamp: n, endTimestamp: r} = t;
                        if (!(!r || t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method)) {
                            if (t.error)
                                eH({
                                    category: "fetch",
                                    data: t.fetchData,
                                    level: "error",
                                    type: "http"
                                }, {
                                    data: t.error,
                                    input: t.args,
                                    startTimestamp: n,
                                    endTimestamp: r
                                });
                            else {
                                let e = t.response;
                                eH({
                                    category: "fetch",
                                    data: {
                                        ...t.fetchData,
                                        status_code: e && e.status
                                    },
                                    type: "http"
                                }, {
                                    input: t.args,
                                    response: e,
                                    startTimestamp: n,
                                    endTimestamp: r
                                })
                            }
                        }
                    }),
                    t.history && ec(function(t) {
                        if ((0,
                        q.s3)() !== e)
                            return;
                        let n = t.from
                          , r = t.to
                          , i = eK(eL.location.href)
                          , o = n ? eK(n) : void 0
                          , a = eK(r);
                        o && o.path || (o = i),
                        i.protocol === a.protocol && i.host === a.host && (r = a.relative),
                        i.protocol === o.protocol && i.host === o.host && (n = o.relative),
                        eH({
                            category: "navigation",
                            data: {
                                from: n,
                                to: r
                            }
                        })
                    }),
                    t.sentry && e.on("beforeSendEvent", function(t) {
                        (0,
                        q.s3)() === e && eH({
                            category: `sentry.${"transaction" === t.type ? "transaction" : "event"}`,
                            event_id: t.event_id,
                            level: t.level,
                            message: (0,
                            P.jH)(t)
                        }, {
                            event: t
                        })
                    })
                }
            }
        }
          , e0 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
          , e1 = (e={}) => {
            let t = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            };
            return {
                name: "BrowserApiErrors",
                setupOnce() {
                    t.setTimeout && (0,
                    H.hl)(eL, "setTimeout", e2),
                    t.setInterval && (0,
                    H.hl)(eL, "setInterval", e2),
                    t.requestAnimationFrame && (0,
                    H.hl)(eL, "requestAnimationFrame", e3),
                    t.XMLHttpRequest && "XMLHttpRequest"in eL && (0,
                    H.hl)(XMLHttpRequest.prototype, "send", e5);
                    let e = t.eventTarget;
                    e && (Array.isArray(e) ? e : e0).forEach(e4)
                }
            }
        }
        ;
        function e2(e) {
            return function(...t) {
                let n = t[0];
                return t[0] = eN(n, {
                    mechanism: {
                        data: {
                            function: (0,
                            J.$P)(e)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }),
                e.apply(this, t)
            }
        }
        function e3(e) {
            return function(t) {
                return e.apply(this, [eN(t, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: (0,
                            J.$P)(e)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                })])
            }
        }
        function e5(e) {
            return function(...t) {
                let n = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
                    e in n && "function" == typeof n[e] && (0,
                    H.hl)(n, e, function(t) {
                        let n = {
                            mechanism: {
                                data: {
                                    function: e,
                                    handler: (0,
                                    J.$P)(t)
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }
                          , r = (0,
                        H.HK)(t);
                        return r && (n.mechanism.data.handler = (0,
                        J.$P)(r)),
                        eN(t, n)
                    })
                }
                ),
                e.apply(this, t)
            }
        }
        function e4(e) {
            let t = eL[e] && eL[e].prototype;
            t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && ((0,
            H.hl)(t, "addEventListener", function(t) {
                return function(n, r, i) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = eN(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: (0,
                                    J.$P)(r),
                                    target: e
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }))
                    } catch (e) {}
                    return t.apply(this, [n, eN(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: (0,
                                J.$P)(r),
                                target: e
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }), i])
                }
            }),
            (0,
            H.hl)(t, "removeEventListener", function(e) {
                return function(t, n, r) {
                    try {
                        let i = n && n.__sentry_wrapped__;
                        i && e.call(this, t, i, r)
                    } catch (e) {}
                    return e.call(this, t, n, r)
                }
            }))
        }
        let e6 = null;
        function e8(e) {
            let t = "error";
            eo(t, e),
            ea(t, e9)
        }
        function e9() {
            e6 = ee.GLOBAL_OBJ.onerror,
            ee.GLOBAL_OBJ.onerror = function(e, t, n, r, i) {
                return es("error", {
                    column: r,
                    error: i,
                    line: n,
                    msg: e,
                    url: t
                }),
                !!e6 && !e6.__SENTRY_LOADER__ && e6.apply(this, arguments)
            }
            ,
            ee.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0
        }
        let e7 = null;
        function te(e) {
            let t = "unhandledrejection";
            eo(t, e),
            ea(t, tt)
        }
        function tt() {
            e7 = ee.GLOBAL_OBJ.onunhandledrejection,
            ee.GLOBAL_OBJ.onunhandledrejection = function(e) {
                return es("unhandledrejection", e),
                !e7 || !!e7.__SENTRY_LOADER__ || e7.apply(this, arguments)
            }
            ,
            ee.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
        }
        let tn = (e={}) => {
            let t = {
                onerror: !0,
                onunhandledrejection: !0,
                ...e
            };
            return {
                name: "GlobalHandlers",
                setupOnce() {
                    Error.stackTraceLimit = 50
                },
                setup(e) {
                    t.onerror && e8(t => {
                        let {stackParser: n, attachStacktrace: r} = tr();
                        if ((0,
                        q.s3)() !== e || eP > 0)
                            return;
                        let {msg: i, url: o, line: a, column: s, error: l} = t
                          , u = function(e, t, n, r) {
                            let i = e.exception = e.exception || {}
                              , o = i.values = i.values || []
                              , a = o[0] = o[0] || {}
                              , s = a.stacktrace = a.stacktrace || {}
                              , l = s.frames = s.frames || []
                              , u = isNaN(parseInt(r, 10)) ? void 0 : r
                              , c = isNaN(parseInt(n, 10)) ? void 0 : n
                              , d = (0,
                            ef.HD)(t) && t.length > 0 ? t : (0,
                            eV.l4)();
                            return 0 === l.length && l.push({
                                colno: u,
                                filename: d,
                                function: J.Fi,
                                in_app: !0,
                                lineno: c
                            }),
                            e
                        }(eA(n, l || i, void 0, r, !1), o, a, s);
                        u.level = "error",
                        (0,
                        A.eN)(u, {
                            originalException: l,
                            mechanism: {
                                handled: !1,
                                type: "onerror"
                            }
                        })
                    }
                    ),
                    t.onunhandledrejection && te(t => {
                        let {stackParser: n, attachStacktrace: r} = tr();
                        if ((0,
                        q.s3)() !== e || eP > 0)
                            return;
                        let i = function(e) {
                            if ((0,
                            ef.pt)(e))
                                return e;
                            try {
                                if ("reason"in e)
                                    return e.reason;
                                if ("detail"in e && "reason"in e.detail)
                                    return e.detail.reason
                            } catch (e) {}
                            return e
                        }(t)
                          , o = (0,
                        ef.pt)(i) ? {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: `Non-Error promise rejection captured with value: ${String(i)}`
                                }]
                            }
                        } : eA(n, i, void 0, r, !0);
                        o.level = "error",
                        (0,
                        A.eN)(o, {
                            originalException: i,
                            mechanism: {
                                handled: !1,
                                type: "onunhandledrejection"
                            }
                        })
                    }
                    )
                }
            }
        }
        ;
        function tr() {
            let e = (0,
            q.s3)();
            return e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            }
        }
        let ti = () => ({
            name: "HttpContext",
            preprocessEvent(e) {
                if (!eL.navigator && !eL.location && !eL.document)
                    return;
                let t = e.request && e.request.url || eL.location && eL.location.href
                  , {referrer: n} = eL.document || {}
                  , {userAgent: r} = eL.navigator || {}
                  , i = {
                    ...e.request && e.request.headers,
                    ...n && {
                        Referer: n
                    },
                    ...r && {
                        "User-Agent": r
                    }
                }
                  , o = {
                    ...e.request,
                    ...t && {
                        url: t
                    },
                    headers: i
                };
                e.request = o
            }
        });
        function to(e, t) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            },
            e.mechanism = {
                ...e.mechanism,
                ..."AggregateError" === e.type && {
                    is_exception_group: !0
                },
                exception_id: t
            }
        }
        function ta(e, t, n, r) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            },
            e.mechanism = {
                ...e.mechanism,
                type: "chained",
                source: t,
                exception_id: n,
                parent_id: r
            }
        }
        let ts = (e={}) => {
            let t = e.limit || 5
              , n = e.key || "cause";
            return {
                name: "LinkedErrors",
                preprocessEvent(e, r, i) {
                    let o = i.getOptions();
                    !function(e, t, n=250, r, i, o, a) {
                        if (!o.exception || !o.exception.values || !a || !(0,
                        ef.V9)(a.originalException, Error))
                            return;
                        let s = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
                        s && (o.exception.values = (function e(t, n, r, i, o, a, s, l) {
                            if (a.length >= r + 1)
                                return a;
                            let u = [...a];
                            if ((0,
                            ef.V9)(i[o], Error)) {
                                to(s, l);
                                let a = t(n, i[o])
                                  , c = u.length;
                                ta(a, o, c, l),
                                u = e(t, n, r, i[o], o, [a, ...u], a, c)
                            }
                            return Array.isArray(i.errors) && i.errors.forEach( (i, a) => {
                                if ((0,
                                ef.V9)(i, Error)) {
                                    to(s, l);
                                    let c = t(n, i)
                                      , d = u.length;
                                    ta(c, `errors[${a}]`, d, l),
                                    u = e(t, n, r, i, o, [c, ...u], c, d)
                                }
                            }
                            ),
                            u
                        }
                        )(e, t, i, a.originalException, r, o.exception.values, s, 0).map(e => (e.value && (e.value = (0,
                        N.$G)(e.value, n)),
                        e)))
                    }(eT, o.stackParser, o.maxValueLength, n, t, e, r)
                }
            }
        }
        ;
        function tl(e, t, n, r) {
            let i = {
                filename: e,
                function: "<anonymous>" === t ? J.Fi : t,
                in_app: !0
            };
            return void 0 !== n && (i.lineno = n),
            void 0 !== r && (i.colno = r),
            i
        }
        let tu = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
          , tc = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
          , td = /\((\S*)(?::(\d+))(?::(\d+))\)/
          , tp = [30, e => {
            let t = tu.exec(e);
            if (t) {
                let[,e,n,r] = t;
                return tl(e, J.Fi, +n, +r)
            }
            let n = tc.exec(e);
            if (n) {
                if (n[2] && 0 === n[2].indexOf("eval")) {
                    let e = td.exec(n[2]);
                    e && (n[2] = e[1],
                    n[3] = e[2],
                    n[4] = e[3])
                }
                let[e,t] = ty(n[1] || J.Fi, n[2]);
                return tl(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
            }
        }
        ]
          , tf = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
          , th = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
          , tm = [50, e => {
            let t = tf.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    let e = th.exec(t[3]);
                    e && (t[1] = t[1] || "eval",
                    t[3] = e[1],
                    t[4] = e[2],
                    t[5] = "")
                }
                let e = t[3]
                  , n = t[1] || J.Fi;
                return [n,e] = ty(n, e),
                tl(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
            }
        }
        ]
          , tg = (0,
        J.pE)(tp, tm)
          , ty = (e, t) => {
            let n = -1 !== e.indexOf("safari-extension")
              , r = -1 !== e.indexOf("safari-web-extension");
            return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : J.Fi, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
        }
          , tv = {};
        function tb(e) {
            let t = tv[e];
            if (t)
                return t;
            let n = eu[e];
            if (en(n))
                return tv[e] = n.bind(eu);
            let r = eu.document;
            if (r && "function" == typeof r.createElement)
                try {
                    let t = r.createElement("iframe");
                    t.hidden = !0,
                    r.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (n = i[e]),
                    r.head.removeChild(t)
                } catch (e) {}
            return n ? tv[e] = n.bind(eu) : n
        }
        function t_(...e) {
            return tb("setTimeout")(...e)
        }
        function tS(e, t, n=Date.now()) {
            return (e[t] || e.all || 0) > n
        }
        function tw(e, {statusCode: t, headers: n}, r=Date.now()) {
            let i = {
                ...e
            }
              , o = n && n["x-sentry-rate-limits"]
              , a = n && n["retry-after"];
            if (o)
                for (let e of o.trim().split(",")) {
                    let[t,n,,,o] = e.split(":", 5)
                      , a = parseInt(t, 10)
                      , s = (isNaN(a) ? 60 : a) * 1e3;
                    if (n)
                        for (let e of n.split(";"))
                            "metric_bucket" === e ? (!o || o.split(";").includes("custom")) && (i[e] = r + s) : i[e] = r + s;
                    else
                        i.all = r + s
                }
            else
                a ? i.all = r + function(e, t=Date.now()) {
                    let n = parseInt(`${e}`, 10);
                    if (!isNaN(n))
                        return 1e3 * n;
                    let r = Date.parse(`${e}`);
                    return isNaN(r) ? 6e4 : r - t
                }(a, r) : 429 === t && (i.all = r + 6e4);
            return i
        }
        function tE(e, t) {
            if ("event" === t || "transaction" === t)
                return Array.isArray(e) ? e[1] : void 0
        }
        function tx(e, t=tb("fetch")) {
            let n = 0
              , r = 0;
            return function(e, t, n=function(e) {
                let t = [];
                function n(e) {
                    return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0)
                }
                return {
                    $: t,
                    add: function(r) {
                        if (!(void 0 === e || t.length < e))
                            return (0,
                            eh.$2)(new eg("Not adding Promise because buffer limit was reached."));
                        let i = r();
                        return -1 === t.indexOf(i) && t.push(i),
                        i.then( () => n(i)).then(null, () => n(i).then(null, () => {}
                        )),
                        i
                    },
                    drain: function(e) {
                        return new eh.cW( (n, r) => {
                            let i = t.length;
                            if (!i)
                                return n(!0);
                            let o = setTimeout( () => {
                                e && e > 0 && n(!1)
                            }
                            , e);
                            t.forEach(e => {
                                (0,
                                eh.WD)(e).then( () => {
                                    --i || (clearTimeout(o),
                                    n(!0))
                                }
                                , r)
                            }
                            )
                        }
                        )
                    }
                }
            }(e.bufferSize || 64)) {
                let r = {};
                return {
                    send: function(i) {
                        let o = [];
                        if ((0,
                        em.gv)(i, (t, n) => {
                            let i = (0,
                            em.mL)(n);
                            if (tS(r, i)) {
                                let r = tE(t, n);
                                e.recordDroppedEvent("ratelimit_backoff", i, r)
                            } else
                                o.push(t)
                        }
                        ),
                        0 === o.length)
                            return (0,
                            eh.WD)({});
                        let a = (0,
                        em.Jd)(i[0], o)
                          , s = t => {
                            (0,
                            em.gv)(a, (n, r) => {
                                let i = tE(n, r);
                                e.recordDroppedEvent(t, (0,
                                em.mL)(r), i)
                            }
                            )
                        }
                        ;
                        return n.add( () => t({
                            body: (0,
                            em.V$)(a)
                        }).then(e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && j.X && L.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                        r = tw(r, e),
                        e), e => {
                            throw s("network_error"),
                            e
                        }
                        )).then(e => e, e => {
                            if (e instanceof eg)
                                return j.X && L.kg.error("Skipped sending event because buffer is full."),
                                s("queue_overflow"),
                                (0,
                                eh.WD)({});
                            throw e
                        }
                        )
                    },
                    flush: e => n.drain(e)
                }
            }(e, function(i) {
                let o = i.body.length;
                n += o,
                r++;
                let a = {
                    body: i.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: e.headers,
                    keepalive: n <= 6e4 && r < 15,
                    ...e.fetchOptions
                };
                if (!t)
                    return tv.fetch = void 0,
                    (0,
                    eh.$2)("No fetch implementation available");
                try {
                    return t(e.url, a).then(e => (n -= o,
                    r--,
                    {
                        statusCode: e.status,
                        headers: {
                            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": e.headers.get("Retry-After")
                        }
                    }))
                } catch (e) {
                    return tv.fetch = void 0,
                    n -= o,
                    r--,
                    (0,
                    eh.$2)(e)
                }
            })
        }
        function tk(e) {
            return [F(), X(), e1(), eQ(), tn(), ts(), G(), ti()]
        }
        var tO = n(67294)
          , tC = n(34155)
          , tT = n(81585)
          , tR = n(99450)
          , tI = n(31218)
          , tM = n(72441);
        let tA = (e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
          , tD = (e, t, n, r) => {
            let i, o;
            return a => {
                t.value >= 0 && (a || r) && ((o = t.value - (i || 0)) || void 0 === i) && (i = t.value,
                t.delta = o,
                t.rating = tA(t.value, n),
                e(t))
            }
        }
          , tL = () => `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`
          , tP = () => eu.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
          , tN = () => {
            let e = tP();
            return e && e.activationStart || 0
        }
          , tj = (e, t) => {
            let n = tP()
              , r = "navigate";
            return n && (eu.document && eu.document.prerendering || tN() > 0 ? r = "prerender" : eu.document && eu.document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))),
            {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: tL(),
                navigationType: r
            }
        }
          , tB = (e, t, n) => {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    let r = new PerformanceObserver(e => {
                        Promise.resolve().then( () => {
                            t(e.getEntries())
                        }
                        )
                    }
                    );
                    return r.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, n || {})),
                    r
                }
            } catch (e) {}
        }
          , tU = e => {
            let t = t => {
                ("pagehide" === t.type || eu.document && "hidden" === eu.document.visibilityState) && e(t)
            }
            ;
            eu.document && (addEventListener("visibilitychange", t, !0),
            addEventListener("pagehide", t, !0))
        }
          , t$ = e => {
            let t = !1;
            return n => {
                t || (e(n),
                t = !0)
            }
        }
          , tW = -1
          , tF = () => {
            tW = "hidden" !== eu.document.visibilityState || eu.document.prerendering ? 1 / 0 : 0
        }
          , tz = e => {
            "hidden" === eu.document.visibilityState && tW > -1 && (tW = "visibilitychange" === e.type ? e.timeStamp : 0,
            removeEventListener("visibilitychange", tz, !0),
            removeEventListener("prerenderingchange", tz, !0))
        }
          , tH = () => {
            addEventListener("visibilitychange", tz, !0),
            addEventListener("prerenderingchange", tz, !0)
        }
          , tq = () => (eu.document && tW < 0 && (tF(),
        tH()),
        {
            get firstHiddenTime() {
                return tW
            }
        })
          , tZ = e => {
            eu.document && eu.document.prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
        }
          , tX = [1800, 3e3]
          , tJ = (e, t={}) => {
            tZ( () => {
                let n;
                let r = tq()
                  , i = tj("FCP")
                  , o = tB("paint", e => {
                    e.forEach(e => {
                        "first-contentful-paint" === e.name && (o.disconnect(),
                        e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - tN(), 0),
                        i.entries.push(e),
                        n(!0)))
                    }
                    )
                }
                );
                o && (n = tD(e, i, tX, t.reportAllChanges))
            }
            )
        }
          , tG = [.1, .25]
          , tV = (e, t={}) => {
            tJ(t$( () => {
                let n;
                let r = tj("CLS", 0)
                  , i = 0
                  , o = []
                  , a = e => {
                    e.forEach(e => {
                        if (!e.hadRecentInput) {
                            let t = o[0]
                              , n = o[o.length - 1];
                            i && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value,
                            o.push(e)) : (i = e.value,
                            o = [e])
                        }
                    }
                    ),
                    i > r.value && (r.value = i,
                    r.entries = o,
                    n())
                }
                  , s = tB("layout-shift", a);
                s && (n = tD(e, r, tG, t.reportAllChanges),
                tU( () => {
                    a(s.takeRecords()),
                    n(!0)
                }
                ),
                setTimeout(n, 0))
            }
            ))
        }
          , tY = [100, 300]
          , tK = (e, t={}) => {
            tZ( () => {
                let n;
                let r = tq()
                  , i = tj("FID")
                  , o = e => {
                    e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime,
                    i.entries.push(e),
                    n(!0))
                }
                  , a = e => {
                    e.forEach(o)
                }
                  , s = tB("first-input", a);
                n = tD(e, i, tY, t.reportAllChanges),
                s && tU(t$( () => {
                    a(s.takeRecords()),
                    s.disconnect()
                }
                ))
            }
            )
        }
          , tQ = 0
          , t0 = 1 / 0
          , t1 = 0
          , t2 = e => {
            e.forEach(e => {
                e.interactionId && (t0 = Math.min(t0, e.interactionId),
                tQ = (t1 = Math.max(t1, e.interactionId)) ? (t1 - t0) / 7 + 1 : 0)
            }
            )
        }
          , t3 = () => l ? tQ : performance.interactionCount || 0
          , t5 = () => {
            "interactionCount"in performance || l || (l = tB("event", t2, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        }
          , t4 = [200, 500]
          , t6 = () => t3() - 0
          , t8 = []
          , t9 = {}
          , t7 = e => {
            let t = t8[t8.length - 1]
              , n = t9[e.interactionId];
            if (n || t8.length < 10 || t && e.duration > t.latency) {
                if (n)
                    n.entries.push(e),
                    n.latency = Math.max(n.latency, e.duration);
                else {
                    let t = {
                        id: e.interactionId,
                        latency: e.duration,
                        entries: [e]
                    };
                    t9[t.id] = t,
                    t8.push(t)
                }
                t8.sort( (e, t) => t.latency - e.latency),
                t8.splice(10).forEach(e => {
                    delete t9[e.id]
                }
                )
            }
        }
          , ne = () => {
            let e = Math.min(t8.length - 1, Math.floor(t6() / 50));
            return t8[e]
        }
          , nt = (e, t={}) => {
            tZ( () => {
                let n;
                t5();
                let r = tj("INP")
                  , i = e => {
                    e.forEach(e => {
                        e.interactionId && t7(e),
                        "first-input" !== e.entryType || t8.some(t => t.entries.some(t => e.duration === t.duration && e.startTime === t.startTime)) || t7(e)
                    }
                    );
                    let t = ne();
                    t && t.latency !== r.value && (r.value = t.latency,
                    r.entries = t.entries,
                    n())
                }
                  , o = tB("event", i, {
                    durationThreshold: null != t.durationThreshold ? t.durationThreshold : 40
                });
                n = tD(e, r, t4, t.reportAllChanges),
                o && ("PerformanceEventTiming"in eu && "interactionId"in PerformanceEventTiming.prototype && o.observe({
                    type: "first-input",
                    buffered: !0
                }),
                tU( () => {
                    i(o.takeRecords()),
                    r.value < 0 && t6() > 0 && (r.value = 0,
                    r.entries = []),
                    n(!0)
                }
                ))
            }
            )
        }
          , nn = [2500, 4e3]
          , nr = {}
          , ni = (e, t={}) => {
            tZ( () => {
                let n;
                let r = tq()
                  , i = tj("LCP")
                  , o = e => {
                    let t = e[e.length - 1];
                    t && t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - tN(), 0),
                    i.entries = [t],
                    n())
                }
                  , a = tB("largest-contentful-paint", o);
                if (a) {
                    n = tD(e, i, nn, t.reportAllChanges);
                    let r = t$( () => {
                        nr[i.id] || (o(a.takeRecords()),
                        a.disconnect(),
                        nr[i.id] = !0,
                        n(!0))
                    }
                    );
                    ["keydown", "click"].forEach(e => {
                        eu.document && addEventListener(e, () => setTimeout(r, 0), !0)
                    }
                    ),
                    tU(r)
                }
            }
            )
        }
          , no = [800, 1800]
          , na = e => {
            eu.document && eu.document.prerendering ? tZ( () => na(e)) : eu.document && "complete" !== eu.document.readyState ? addEventListener("load", () => na(e), !0) : setTimeout(e, 0)
        }
          , ns = (e, t={}) => {
            let n = tj("TTFB")
              , r = tD(e, n, no, t.reportAllChanges);
            na( () => {
                let e = tP();
                if (e) {
                    let t = e.responseStart;
                    if (t <= 0 || t > performance.now())
                        return;
                    n.value = Math.max(t - tN(), 0),
                    n.entries = [e],
                    r(!0)
                }
            }
            )
        }
          , nl = {}
          , nu = {};
        function nc(e, t=!1) {
            return nS("cls", e, ng, u, t)
        }
        function nd(e, t=!1) {
            return nS("lcp", e, nv, d, t)
        }
        function np(e) {
            return nS("fid", e, ny, c)
        }
        function nf(e) {
            return nS("inp", e, n_, f)
        }
        function nh(e, t) {
            return nw(e, t),
            nu[e] || (function(e) {
                let t = {};
                "event" === e && (t.durationThreshold = 0),
                tB(e, t => {
                    nm(e, {
                        entries: t
                    })
                }
                , t)
            }(e),
            nu[e] = !0),
            nE(e, t)
        }
        function nm(e, t) {
            let n = nl[e];
            if (n && n.length)
                for (let e of n)
                    try {
                        e(t)
                    } catch (e) {}
        }
        function ng() {
            return tV(e => {
                nm("cls", {
                    metric: e
                }),
                u = e
            }
            , {
                reportAllChanges: !0
            })
        }
        function ny() {
            return tK(e => {
                nm("fid", {
                    metric: e
                }),
                c = e
            }
            )
        }
        function nv() {
            return ni(e => {
                nm("lcp", {
                    metric: e
                }),
                d = e
            }
            , {
                reportAllChanges: !0
            })
        }
        function nb() {
            return ns(e => {
                nm("ttfb", {
                    metric: e
                }),
                p = e
            }
            )
        }
        function n_() {
            return nt(e => {
                nm("inp", {
                    metric: e
                }),
                f = e
            }
            )
        }
        function nS(e, t, n, r, i=!1) {
            let o;
            return nw(e, t),
            nu[e] || (o = n(),
            nu[e] = !0),
            r && t({
                metric: r
            }),
            nE(e, t, i ? o : void 0)
        }
        function nw(e, t) {
            nl[e] = nl[e] || [],
            nl[e].push(t)
        }
        function nE(e, t, n) {
            return () => {
                n && n();
                let r = nl[e];
                if (!r)
                    return;
                let i = r.indexOf(t);
                -1 !== i && r.splice(i, 1)
            }
        }
        function nx(e) {
            return "number" == typeof e && isFinite(e)
        }
        function nk(e, t, n, {...r}) {
            let i = (0,
            tT.XU)(e).start_timestamp;
            return i && i > t && "function" == typeof e.updateStartTime && e.updateStartTime(t),
            (0,
            tR._d)(e, () => {
                let e = (0,
                tR.qp)({
                    startTime: t,
                    ...r
                });
                return e && e.end(n),
                e
            }
            )
        }
        function nO() {
            return eu && eu.addEventListener && eu.performance
        }
        function nC(e) {
            return e / 1e3
        }
        let nT = 0
          , nR = {};
        function nI(e, t, n, r, i, o) {
            let a = o ? t[o] : t[`${n}End`]
              , s = t[`${n}Start`];
            s && a && nk(e, r + nC(s), r + nC(a), {
                op: "browser",
                name: i || n,
                attributes: {
                    [tI.S3]: "auto.ui.browser.metrics"
                }
            })
        }
        function nM(e, t, n, r) {
            let i = t[n];
            null != i && i < 2147483647 && (e[r] = i)
        }
        let nA = []
          , nD = new Map
          , nL = {
            click: "click",
            pointerdown: "click",
            pointerup: "click",
            mousedown: "click",
            mouseup: "click",
            touchstart: "click",
            touchend: "click",
            mouseover: "hover",
            mouseout: "hover",
            mouseenter: "hover",
            mouseleave: "hover",
            pointerover: "hover",
            pointerout: "hover",
            pointerenter: "hover",
            pointerleave: "hover",
            dragstart: "drag",
            dragend: "drag",
            drag: "drag",
            dragenter: "drag",
            dragleave: "drag",
            dragover: "drag",
            drop: "drag",
            keydown: "press",
            keyup: "press",
            keypress: "press",
            input: "press"
        };
        var nP = n(89366)
          , nN = n(58915)
          , nj = n(69737);
        let nB = {
            idleTimeout: 1e3,
            finalTimeout: 3e4,
            childSpanTimeout: 15e3
        };
        function nU(e, t={}) {
            let n;
            let r = new Map
              , i = !1
              , o = "externalFinish"
              , a = !t.disableAutoFinish
              , s = []
              , {idleTimeout: l=nB.idleTimeout, finalTimeout: u=nB.finalTimeout, childSpanTimeout: c=nB.childSpanTimeout, beforeSpanEnd: d} = t
              , p = (0,
            q.s3)();
            if (!p || !(0,
            D.z)())
                return new nN.b;
            let f = (0,
            q.nZ)()
              , h = (0,
            tT.HN)()
              , m = function(e) {
                let t = (0,
                tR.qp)(e);
                return (0,
                nP.D)((0,
                q.nZ)(), t),
                j.X && L.kg.log("[Tracing] Started span is an idle span"),
                t
            }(e);
            function g() {
                n && (clearTimeout(n),
                n = void 0)
            }
            function y(e) {
                g(),
                n = setTimeout( () => {
                    !i && 0 === r.size && a && (o = "idleTimeout",
                    m.end(e))
                }
                , l)
            }
            function v(e) {
                n = setTimeout( () => {
                    !i && a && (o = "heartbeatFailed",
                    m.end(e))
                }
                , c)
            }
            function b(e) {
                i = !0,
                r.clear(),
                s.forEach(e => e()),
                (0,
                nP.D)(f, h);
                let t = (0,
                tT.XU)(m)
                  , {start_timestamp: n} = t;
                if (!n)
                    return;
                (t.data || {})[tI.ju] || m.setAttribute(tI.ju, o),
                L.kg.log(`[Tracing] Idle span "${t.op}" finished`);
                let a = (0,
                tT.Dp)(m).filter(e => e !== m)
                  , c = 0;
                a.forEach(t => {
                    t.isRecording() && (t.setStatus({
                        code: nj.jt,
                        message: "cancelled"
                    }),
                    t.end(e),
                    j.X && L.kg.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
                    let {timestamp: n=0, start_timestamp: r=0} = (0,
                    tT.XU)(t)
                      , i = r <= e
                      , o = n - r <= (u + l) / 1e3;
                    if (j.X) {
                        let e = JSON.stringify(t, void 0, 2);
                        i ? o || L.kg.log("[Tracing] Discarding span since it finished after idle span final timeout", e) : L.kg.log("[Tracing] Discarding span since it happened after idle span was finished", e)
                    }
                    (!o || !i) && ((0,
                    tT.ed)(m, t),
                    c++)
                }
                ),
                c > 0 && m.setAttribute("sentry.idle_span_discarded_spans", c)
            }
            return m.end = new Proxy(m.end,{
                apply(e, t, n) {
                    d && d(m);
                    let[r,...i] = n
                      , o = r || (0,
                    eO.ph)()
                      , a = (0,
                    tT.$k)(o)
                      , s = (0,
                    tT.Dp)(m).filter(e => e !== m);
                    if (!s.length)
                        return b(a),
                        Reflect.apply(e, t, [a, ...i]);
                    let l = s.map(e => (0,
                    tT.XU)(e).timestamp).filter(e => !!e)
                      , c = l.length ? Math.max(...l) : void 0
                      , p = (0,
                    tT.XU)(m).start_timestamp
                      , f = Math.min(p ? p + u / 1e3 : 1 / 0, Math.max(p || -1 / 0, Math.min(a, c || 1 / 0)));
                    return b(f),
                    Reflect.apply(e, t, [f, ...i])
                }
            }),
            s.push(p.on("spanStart", e => {
                if (!i && e !== m && !(0,
                tT.XU)(e).timestamp && (0,
                tT.Dp)(m).includes(e)) {
                    var t;
                    t = e.spanContext().spanId,
                    g(),
                    r.set(t, !0),
                    v((0,
                    eO.ph)() + c / 1e3)
                }
            }
            )),
            s.push(p.on("spanEnd", e => {
                var t;
                i || (t = e.spanContext().spanId,
                r.has(t) && r.delete(t),
                0 === r.size && y((0,
                eO.ph)() + l / 1e3))
            }
            )),
            s.push(p.on("idleSpanEnableAutoFinish", e => {
                e === m && (a = !0,
                y(),
                r.size && v())
            }
            )),
            t.disableAutoFinish || y(),
            setTimeout( () => {
                i || (m.setStatus({
                    code: nj.jt,
                    message: "deadline_exceeded"
                }),
                o = "finalTimeout",
                m.end())
            }
            , u),
            m
        }
        let n$ = !1;
        function nW() {
            let e = (0,
            tT.HN)()
              , t = e && (0,
            tT.Gx)(e);
            if (t) {
                let e = "internal_error";
                j.X && L.kg.log(`[Tracing] Root span: ${e} -> Global error occured`),
                t.setStatus({
                    code: nj.jt,
                    message: e
                })
            }
        }
        nW.tag = "sentry_tracingErrorCallback";
        var nF = n(85712)
          , nz = n(19548)
          , nH = n(60859);
        let nq = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0
        };
        function nZ(e) {
            let {url: t} = (0,
            tT.XU)(e).data || {};
            if (!t || "string" != typeof t)
                return;
            let n = nh("resource", ({entries: r}) => {
                r.forEach(r => {
                    "resource" === r.entryType && "initiatorType"in r && "string" == typeof r.nextHopProtocol && ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(t) && ((function(e) {
                        let {name: t, version: n} = function(e) {
                            let t = "unknown"
                              , n = "unknown"
                              , r = "";
                            for (let i of e) {
                                if ("/" === i) {
                                    [t,n] = e.split("/");
                                    break
                                }
                                if (!isNaN(Number(i))) {
                                    t = "h" === r ? "http" : r,
                                    n = e.split(r)[1];
                                    break
                                }
                                r += i
                            }
                            return r === e && (t = r),
                            {
                                name: t,
                                version: n
                            }
                        }(e.nextHopProtocol)
                          , r = [];
                        return (r.push(["network.protocol.version", n], ["network.protocol.name", t]),
                        eO.Z1) ? [...r, ["http.request.redirect_start", nX(e.redirectStart)], ["http.request.fetch_start", nX(e.fetchStart)], ["http.request.domain_lookup_start", nX(e.domainLookupStart)], ["http.request.domain_lookup_end", nX(e.domainLookupEnd)], ["http.request.connect_start", nX(e.connectStart)], ["http.request.secure_connection_start", nX(e.secureConnectionStart)], ["http.request.connection_end", nX(e.connectEnd)], ["http.request.request_start", nX(e.requestStart)], ["http.request.response_start", nX(e.responseStart)], ["http.request.response_end", nX(e.responseEnd)]] : r
                    }
                    )(r).forEach(t => e.setAttribute(...t)),
                    setTimeout(n))
                }
                )
            }
            )
        }
        function nX(e=0) {
            return ((eO.Z1 || performance.timeOrigin) + e) / 1e3
        }
        function nJ(e) {
            try {
                return new URL(e,eL.location.origin).href
            } catch (e) {
                return
            }
        }
        let nG = {
            ...nB,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableLongAnimationFrame: !1,
            enableInp: !0,
            _experiments: {},
            ...nq
        }
          , nV = (e={}) => {
            n$ || (n$ = !0,
            e8(nW),
            te(nW));
            let {enableInp: t, enableLongTask: n, enableLongAnimationFrame: r, _experiments: {enableInteractions: i}, beforeStartSpan: o, idleTimeout: a, finalTimeout: s, childSpanTimeout: l, markBackgroundSpan: u, traceFetch: c, traceXHR: d, shouldCreateSpanForRequest: f, enableHTTPTimings: g, instrumentPageLoad: y, instrumentNavigation: v} = {
                ...nG,
                ...e
            }
              , b = function() {
                let e = nO();
                if (e && eO.Z1) {
                    e.mark && eu.performance.mark("sentry-tracing-init");
                    let t = np( ({metric: e}) => {
                        let t = e.entries[e.entries.length - 1];
                        if (!t)
                            return;
                        let n = nC(eO.Z1)
                          , r = nC(t.startTime);
                        nR.fid = {
                            value: e.value,
                            unit: "millisecond"
                        },
                        nR["mark.fid"] = {
                            value: n + r,
                            unit: "second"
                        }
                    }
                    )
                      , n = nc( ({metric: e}) => {
                        let t = e.entries[e.entries.length - 1];
                        t && (nR.cls = {
                            value: e.value,
                            unit: ""
                        },
                        m = t)
                    }
                    , !0)
                      , r = nd( ({metric: e}) => {
                        let t = e.entries[e.entries.length - 1];
                        t && (nR.lcp = {
                            value: e.value,
                            unit: "millisecond"
                        },
                        h = t)
                    }
                    , !0)
                      , i = nS("ttfb", ({metric: e}) => {
                        e.entries[e.entries.length - 1] && (nR.ttfb = {
                            value: e.value,
                            unit: "millisecond"
                        })
                    }
                    , nb, p);
                    return () => {
                        t(),
                        n(),
                        r(),
                        i()
                    }
                }
                return () => void 0
            }();
            t && function() {
                if (nO() && eO.Z1) {
                    let e = nf( ({metric: e}) => {
                        let t;
                        let n = (0,
                        q.s3)();
                        if (!n || void 0 == e.value)
                            return;
                        let r = e.entries.find(t => t.duration === e.value && nL[t.name]);
                        if (!r)
                            return;
                        let {interactionId: i} = r
                          , o = nL[r.name]
                          , a = n.getOptions()
                          , s = nC(eO.Z1 + r.startTime)
                          , l = nC(e.value)
                          , u = (0,
                        q.nZ)()
                          , c = (0,
                        tT.HN)()
                          , d = c ? (0,
                        tT.Gx)(c) : void 0
                          , p = (null != i ? nD.get(i) : void 0) || d
                          , f = p ? (0,
                        tT.XU)(p).description : u.getScopeData().transactionName
                          , h = u.getUser()
                          , m = n.getIntegrationByName("Replay")
                          , g = m && m.getReplayId()
                          , y = void 0 !== h ? h.email || h.id || h.ip_address : void 0;
                        try {
                            t = u.getScopeData().contexts.profile.profile_id
                        } catch (e) {}
                        let v = (0,
                        eV.Rt)(r.target)
                          , b = (0,
                        H.Jr)({
                            release: a.release,
                            environment: a.environment,
                            transaction: f,
                            [tI.JQ]: e.value,
                            [tI.S3]: "auto.http.browser.inp",
                            user: y || void 0,
                            profile_id: t || void 0,
                            replay_id: g || void 0,
                            "user_agent.original": eu.navigator && eu.navigator.userAgent
                        })
                          , _ = (0,
                        tR.qp)({
                            name: v,
                            op: `ui.interaction.${o}`,
                            attributes: b,
                            startTime: s,
                            experimental: {
                                standalone: !0
                            }
                        });
                        _.addEvent("inp", {
                            [tI.E1]: "millisecond",
                            [tI.Wb]: e.value
                        }),
                        _.end(s + l)
                    }
                    )
                }
            }(),
            r && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? new PerformanceObserver(e => {
                for (let t of e.getEntries()) {
                    if (!(0,
                    tT.HN)() || !t.scripts[0])
                        return;
                    let e = nC(eO.Z1 + t.startTime)
                      , n = nC(t.duration)
                      , r = {
                        [tI.S3]: "auto.ui.browser.metrics"
                    }
                      , i = t.scripts[0];
                    if (i) {
                        let {invoker: e, invokerType: t, sourceURL: n, sourceFunctionName: o, sourceCharPosition: a} = i;
                        r["browser.script.invoker"] = e,
                        r["browser.script.invoker_type"] = t,
                        n && (r["code.filepath"] = n),
                        o && (r["code.function"] = o),
                        -1 !== a && (r["browser.script.source_char_position"] = a)
                    }
                    let o = (0,
                    tR.qp)({
                        name: "Main UI thread blocked",
                        op: "ui.long-animation-frame",
                        startTime: e,
                        attributes: r
                    });
                    o && o.end(e + n)
                }
            }
            ).observe({
                type: "long-animation-frame",
                buffered: !0
            }) : n && nh("longtask", ({entries: e}) => {
                for (let t of e) {
                    if (!(0,
                    tT.HN)())
                        return;
                    let e = nC(eO.Z1 + t.startTime)
                      , n = nC(t.duration)
                      , r = (0,
                    tR.qp)({
                        name: "Main UI thread blocked",
                        op: "ui.long-task",
                        startTime: e,
                        attributes: {
                            [tI.S3]: "auto.ui.browser.metrics"
                        }
                    });
                    r && r.end(e + n)
                }
            }
            ),
            i && nh("event", ({entries: e}) => {
                for (let t of e) {
                    if (!(0,
                    tT.HN)())
                        return;
                    if ("click" === t.name) {
                        let e = nC(eO.Z1 + t.startTime)
                          , n = nC(t.duration)
                          , r = {
                            name: (0,
                            eV.Rt)(t.target),
                            op: `ui.interaction.${t.name}`,
                            startTime: e,
                            attributes: {
                                [tI.S3]: "auto.ui.browser.metrics"
                            }
                        }
                          , i = (0,
                        eV.iY)(t.target);
                        i && (r.attributes["ui.component_name"] = i);
                        let o = (0,
                        tR.qp)(r);
                        o && o.end(e + n)
                    }
                }
            }
            );
            let _ = {
                name: void 0,
                source: void 0
            };
            function S(e, t) {
                let n = "pageload" === t.op
                  , r = o ? o(t) : t
                  , i = r.attributes || {};
                t.name !== r.name && (i[tI.Zj] = "custom",
                r.attributes = i),
                _.name = r.name,
                _.source = i[tI.Zj];
                let u = nU(r, {
                    idleTimeout: a,
                    finalTimeout: s,
                    childSpanTimeout: l,
                    disableAutoFinish: n,
                    beforeSpanEnd: e => {
                        b(),
                        function(e) {
                            let t = nO();
                            if (!t || !eu.performance.getEntries || !eO.Z1)
                                return;
                            let n = nC(eO.Z1)
                              , r = t.getEntries()
                              , {op: i, start_timestamp: o} = (0,
                            tT.XU)(e);
                            if (r.slice(nT).forEach(t => {
                                let r = nC(t.startTime)
                                  , a = nC(Math.max(0, t.duration));
                                if ("navigation" !== i || !o || !(n + r < o))
                                    switch (t.entryType) {
                                    case "navigation":
                                        ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
                                            nI(e, t, r, n)
                                        }
                                        ),
                                        nI(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
                                        nI(e, t, "fetch", n, "cache", "domainLookupStart"),
                                        nI(e, t, "domainLookup", n, "DNS"),
                                        function(e, t, n) {
                                            let r = n + nC(t.requestStart)
                                              , i = n + nC(t.responseEnd)
                                              , o = n + nC(t.responseStart);
                                            t.responseEnd && (nk(e, r, i, {
                                                op: "browser",
                                                name: "request",
                                                attributes: {
                                                    [tI.S3]: "auto.ui.browser.metrics"
                                                }
                                            }),
                                            nk(e, o, i, {
                                                op: "browser",
                                                name: "response",
                                                attributes: {
                                                    [tI.S3]: "auto.ui.browser.metrics"
                                                }
                                            }))
                                        }(e, t, n);
                                        break;
                                    case "mark":
                                    case "paint":
                                    case "measure":
                                        {
                                            (function(e, t, n, r, i) {
                                                let o = tP()
                                                  , a = i + Math.max(n, nC(o ? o.requestStart : 0))
                                                  , s = i + n
                                                  , l = {
                                                    [tI.S3]: "auto.resource.browser.metrics"
                                                };
                                                a !== s && (l["sentry.browser.measure_happened_before_request"] = !0,
                                                l["sentry.browser.measure_start_time"] = a),
                                                nk(e, a, s + r, {
                                                    name: t.name,
                                                    op: t.entryType,
                                                    attributes: l
                                                })
                                            }
                                            )(e, t, r, a, n);
                                            let i = tq()
                                              , o = t.startTime < i.firstHiddenTime;
                                            "first-paint" === t.name && o && (nR.fp = {
                                                value: t.startTime,
                                                unit: "millisecond"
                                            }),
                                            "first-contentful-paint" === t.name && o && (nR.fcp = {
                                                value: t.startTime,
                                                unit: "millisecond"
                                            });
                                            break
                                        }
                                    case "resource":
                                        (function(e, t, n, r, i, o) {
                                            if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType)
                                                return;
                                            let a = eK(n)
                                              , s = {
                                                [tI.S3]: "auto.resource.browser.metrics"
                                            };
                                            nM(s, t, "transferSize", "http.response_transfer_size"),
                                            nM(s, t, "encodedBodySize", "http.response_content_length"),
                                            nM(s, t, "decodedBodySize", "http.decoded_response_content_length"),
                                            "renderBlockingStatus"in t && (s["resource.render_blocking_status"] = t.renderBlockingStatus),
                                            a.protocol && (s["url.scheme"] = a.protocol.split(":").pop()),
                                            a.host && (s["server.address"] = a.host),
                                            s["url.same_origin"] = n.includes(eu.location.origin);
                                            let l = o + r;
                                            nk(e, l, l + i, {
                                                name: n.replace(eu.location.origin, ""),
                                                op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                                                attributes: s
                                            })
                                        }
                                        )(e, t, t.name, r, a, n)
                                    }
                            }
                            ),
                            nT = Math.max(r.length - 1, 0),
                            function(e) {
                                let t = eu.navigator;
                                if (!t)
                                    return;
                                let n = t.connection;
                                n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType),
                                n.type && e.setAttribute("connectionType", n.type),
                                nx(n.rtt) && (nR["connection.rtt"] = {
                                    value: n.rtt,
                                    unit: "millisecond"
                                })),
                                nx(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
                                nx(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
                            }(e),
                            "pageload" === i) {
                                (function(e) {
                                    let t = tP();
                                    if (!t)
                                        return;
                                    let {responseStart: n, requestStart: r} = t;
                                    r <= n && (e["ttfb.requestTime"] = {
                                        value: n - r,
                                        unit: "millisecond"
                                    })
                                }
                                )(nR),
                                ["fcp", "fp", "lcp"].forEach(e => {
                                    let t = nR[e];
                                    if (!t || !o || n >= o)
                                        return;
                                    let r = Math.abs((n + nC(t.value) - o) * 1e3);
                                    t.value = r
                                }
                                );
                                let t = nR["mark.fid"];
                                t && nR.fid && (nk(e, t.value, t.value + nC(nR.fid.value), {
                                    name: "first input delay",
                                    op: "ui.action",
                                    attributes: {
                                        [tI.S3]: "auto.ui.browser.metrics"
                                    }
                                }),
                                delete nR["mark.fid"]),
                                "fcp"in nR || delete nR.cls,
                                Object.entries(nR).forEach( ([e,t]) => {
                                    (0,
                                    tM.o)(e, t.value, t.unit)
                                }
                                ),
                                h && (h.element && e.setAttribute("lcp.element", (0,
                                eV.Rt)(h.element)),
                                h.id && e.setAttribute("lcp.id", h.id),
                                h.url && e.setAttribute("lcp.url", h.url.trim().slice(0, 200)),
                                e.setAttribute("lcp.size", h.size)),
                                m && m.sources && m.sources.forEach( (t, n) => e.setAttribute(`cls.source.${n + 1}`, (0,
                                eV.Rt)(t.node)))
                            }
                            h = void 0,
                            m = void 0,
                            nR = {}
                        }(e)
                    }
                });
                function c() {
                    ["interactive", "complete"].includes(eL.document.readyState) && e.emit("idleSpanEnableAutoFinish", u)
                }
                return n && eL.document && (eL.document.addEventListener("readystatechange", () => {
                    c()
                }
                ),
                c()),
                u
            }
            return {
                name: "BrowserTracing",
                afterAllSetup(e) {
                    let n, r;
                    let o = eL.location && eL.location.href;
                    e.on("startNavigationSpan", t => {
                        (0,
                        q.s3)() === e && (n && !(0,
                        tT.XU)(n).timestamp && n.end(),
                        n = S(e, {
                            op: "navigation",
                            ...t
                        }))
                    }
                    ),
                    e.on("startPageLoadSpan", (t, r={}) => {
                        if ((0,
                        q.s3)() !== e)
                            return;
                        n && !(0,
                        tT.XU)(n).timestamp && n.end();
                        let i = r.sentryTrace || nQ("sentry-trace")
                          , o = r.baggage || nQ("baggage")
                          , a = (0,
                        nF.pT)(i, o);
                        (0,
                        q.nZ)().setPropagationContext(a),
                        n = S(e, {
                            op: "pageload",
                            ...t
                        })
                    }
                    ),
                    e.on("spanEnd", e => {
                        let t = (0,
                        tT.XU)(e).op;
                        if (e !== (0,
                        tT.Gx)(e) || "navigation" !== t && "pageload" !== t)
                            return;
                        let n = (0,
                        q.nZ)()
                          , r = n.getPropagationContext();
                        n.setPropagationContext({
                            ...r,
                            sampled: void 0 !== r.sampled ? r.sampled : (0,
                            tT.Tt)(e),
                            dsc: r.dsc || (0,
                            eb.jC)(e)
                        })
                    }
                    ),
                    eL.location && (y && nY(e, {
                        name: eL.location.pathname,
                        startTime: eO.Z1 ? eO.Z1 / 1e3 : void 0,
                        attributes: {
                            [tI.Zj]: "url",
                            [tI.S3]: "auto.pageload.browser"
                        }
                    }),
                    v && ec( ({to: t, from: n}) => {
                        if (void 0 === n && o && -1 !== o.indexOf(t)) {
                            o = void 0;
                            return
                        }
                        n !== t && (o = void 0,
                        nK(e, {
                            name: eL.location.pathname,
                            attributes: {
                                [tI.Zj]: "url",
                                [tI.S3]: "auto.navigation.browser"
                            }
                        }))
                    }
                    )),
                    u && eL && eL.document && eL.document.addEventListener("visibilitychange", () => {
                        let e = (0,
                        tT.HN)();
                        if (!e)
                            return;
                        let t = (0,
                        tT.Gx)(e);
                        if (eL.document.hidden && t) {
                            let {op: e, status: n} = (0,
                            tT.XU)(t);
                            n || t.setStatus({
                                code: nj.jt,
                                message: "cancelled"
                            }),
                            t.setAttribute("sentry.cancellation_reason", "document.hidden"),
                            t.end()
                        }
                    }
                    ),
                    i && eL.document && addEventListener("click", () => {
                        let e = (0,
                        tT.HN)()
                          , t = e && (0,
                        tT.Gx)(e);
                        !(t && ["navigation", "pageload"].includes((0,
                        tT.XU)(t).op)) && (r && (r.setAttribute(tI.ju, "interactionInterrupted"),
                        r.end(),
                        r = void 0),
                        _.name && (r = nU({
                            name: _.name,
                            op: "ui.action.click",
                            attributes: {
                                [tI.Zj]: _.source || "url"
                            }
                        }, {
                            idleTimeout: a,
                            finalTimeout: s,
                            childSpanTimeout: l
                        })))
                    }
                    , {
                        once: !1,
                        capture: !0
                    }),
                    t && function() {
                        let e = ({entries: e}) => {
                            let t = (0,
                            tT.HN)()
                              , n = t && (0,
                            tT.Gx)(t);
                            e.forEach(e => {
                                if (!("duration"in e) || !n)
                                    return;
                                let t = e.interactionId;
                                if (!(null == t || nD.has(t))) {
                                    if (nA.length > 10) {
                                        let e = nA.shift();
                                        nD.delete(e)
                                    }
                                    nA.push(t),
                                    nD.set(t, n)
                                }
                            }
                            )
                        }
                        ;
                        nh("event", e),
                        nh("first-input", e)
                    }(),
                    function(e) {
                        let {traceFetch: t, traceXHR: n, shouldCreateSpanForRequest: r, enableHTTPTimings: i, tracePropagationTargets: o} = {
                            traceFetch: nq.traceFetch,
                            traceXHR: nq.traceXHR,
                            ...e
                        }
                          , a = "function" == typeof r ? r : e => !0
                          , s = e => (function(e, t) {
                            let n = eL.location && eL.location.href;
                            if (n) {
                                let r, i;
                                try {
                                    r = new URL(e,n),
                                    i = new URL(n).origin
                                } catch (e) {
                                    return !1
                                }
                                let o = r.origin === i;
                                return t ? (0,
                                N.U0)(r.toString(), t) || o && (0,
                                N.U0)(r.pathname, t) : o
                            }
                            {
                                let n = !!e.match(/^\/(?!\/)/);
                                return t ? (0,
                                N.U0)(e, t) : n
                            }
                        }
                        )(e, o)
                          , l = {};
                        t && eZ(e => {
                            let t = function(e, t, n, r, i="auto.http.browser") {
                                if (!e.fetchData)
                                    return;
                                let o = (0,
                                D.z)() && t(e.fetchData.url);
                                if (e.endTimestamp && o) {
                                    let t = e.fetchData.__span;
                                    if (!t)
                                        return;
                                    let n = r[t];
                                    n && (function(e, t) {
                                        if (t.response) {
                                            (0,
                                            nj.Q0)(e, t.response.status);
                                            let n = t.response && t.response.headers && t.response.headers.get("content-length");
                                            if (n) {
                                                let t = parseInt(n);
                                                t > 0 && e.setAttribute("http.response_content_length", t)
                                            }
                                        } else
                                            t.error && e.setStatus({
                                                code: nj.jt,
                                                message: "internal_error"
                                            });
                                        e.end()
                                    }(n, e),
                                    delete r[t]);
                                    return
                                }
                                let a = (0,
                                q.nZ)()
                                  , s = (0,
                                q.s3)()
                                  , {method: l, url: u} = e.fetchData
                                  , c = function(e) {
                                    try {
                                        return new URL(e).href
                                    } catch (e) {
                                        return
                                    }
                                }(u)
                                  , d = c ? eK(c).host : void 0
                                  , p = !!(0,
                                tT.HN)()
                                  , f = o && p ? (0,
                                tR.qp)({
                                    name: `${l} ${u}`,
                                    attributes: {
                                        url: u,
                                        type: "fetch",
                                        "http.method": l,
                                        "http.url": c,
                                        "server.address": d,
                                        [tI.S3]: i,
                                        [tI.$J]: "http.client"
                                    }
                                }) : new nN.b;
                                if (e.fetchData.__span = f.spanContext().spanId,
                                r[f.spanContext().spanId] = f,
                                n(e.fetchData.url) && s) {
                                    let t = e.args[0];
                                    e.args[1] = e.args[1] || {};
                                    let n = e.args[1];
                                    n.headers = function(e, t, n, r, i) {
                                        let {traceId: o, spanId: a, sampled: s, dsc: l} = {
                                            ...(0,
                                            q.aF)().getPropagationContext(),
                                            ...n.getPropagationContext()
                                        }
                                          , u = i ? (0,
                                        tT.Hb)(i) : (0,
                                        nF.$p)(o, a, s)
                                          , c = (0,
                                        nH.IQ)(l || (i ? (0,
                                        eb.jC)(i) : (0,
                                        eb._l)(o, t)))
                                          , d = r.headers || ("undefined" != typeof Request && (0,
                                        ef.V9)(e, Request) ? e.headers : void 0);
                                        if (!d)
                                            return {
                                                "sentry-trace": u,
                                                baggage: c
                                            };
                                        if ("undefined" != typeof Headers && (0,
                                        ef.V9)(d, Headers)) {
                                            let e = new Headers(d);
                                            return e.append("sentry-trace", u),
                                            c && e.append(nH.bU, c),
                                            e
                                        }
                                        if (Array.isArray(d)) {
                                            let e = [...d, ["sentry-trace", u]];
                                            return c && e.push([nH.bU, c]),
                                            e
                                        }
                                        {
                                            let e = "baggage"in d ? d.baggage : void 0
                                              , t = [];
                                            return Array.isArray(e) ? t.push(...e) : e && t.push(e),
                                            c && t.push(c),
                                            {
                                                ...d,
                                                "sentry-trace": u,
                                                baggage: t.length > 0 ? t.join(",") : void 0
                                            }
                                        }
                                    }(t, s, a, n, (0,
                                    D.z)() && p ? f : void 0)
                                }
                                return f
                            }(e, a, s, l);
                            if (t) {
                                let n = nJ(e.fetchData.url)
                                  , r = n ? eK(n).host : void 0;
                                t.setAttributes({
                                    "http.url": n,
                                    "server.address": r
                                })
                            }
                            i && t && nZ(t)
                        }
                        ),
                        n && eF(e => {
                            let t = function(e, t, n, r) {
                                let i = e.xhr
                                  , o = i && i[eW];
                                if (!i || i.__sentry_own_request__ || !o)
                                    return;
                                let a = (0,
                                D.z)() && t(o.url);
                                if (e.endTimestamp && a) {
                                    let e = i.__sentry_xhr_span_id__;
                                    if (!e)
                                        return;
                                    let t = r[e];
                                    t && void 0 !== o.status_code && ((0,
                                    nj.Q0)(t, o.status_code),
                                    t.end(),
                                    delete r[e]);
                                    return
                                }
                                let s = nJ(o.url)
                                  , l = s ? eK(s).host : void 0
                                  , u = !!(0,
                                tT.HN)()
                                  , c = a && u ? (0,
                                tR.qp)({
                                    name: `${o.method} ${o.url}`,
                                    attributes: {
                                        type: "xhr",
                                        "http.method": o.method,
                                        "http.url": s,
                                        url: o.url,
                                        "server.address": l,
                                        [tI.S3]: "auto.http.browser",
                                        [tI.$J]: "http.client"
                                    }
                                }) : new nN.b;
                                i.__sentry_xhr_span_id__ = c.spanContext().spanId,
                                r[i.__sentry_xhr_span_id__] = c;
                                let d = (0,
                                q.s3)();
                                return i.setRequestHeader && n(o.url) && d && function(e, t, n) {
                                    let r = (0,
                                    q.nZ)()
                                      , {traceId: i, spanId: o, sampled: a, dsc: s} = {
                                        ...(0,
                                        q.aF)().getPropagationContext(),
                                        ...r.getPropagationContext()
                                    };
                                    (function(e, t, n) {
                                        try {
                                            e.setRequestHeader("sentry-trace", t),
                                            n && e.setRequestHeader(nH.bU, n)
                                        } catch (e) {}
                                    }
                                    )(e, n && (0,
                                    D.z)() ? (0,
                                    tT.Hb)(n) : (0,
                                    nF.$p)(i, o, a), (0,
                                    nH.IQ)(s || (n ? (0,
                                    eb.jC)(n) : (0,
                                    eb._l)(i, t))))
                                }(i, d, (0,
                                D.z)() && u ? c : void 0),
                                c
                            }(e, a, s, l);
                            i && t && nZ(t)
                        }
                        )
                    }({
                        traceFetch: c,
                        traceXHR: d,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: f,
                        enableHTTPTimings: g
                    })
                }
            }
        }
        ;
        function nY(e, t, n) {
            e.emit("startPageLoadSpan", t, n),
            (0,
            q.nZ)().setTransactionName(t.name);
            let r = (0,
            tT.HN)();
            return "pageload" === (r && (0,
            tT.XU)(r).op) ? r : void 0
        }
        function nK(e, t) {
            (0,
            q.aF)().setPropagationContext((0,
            nz.Q)()),
            (0,
            q.nZ)().setPropagationContext((0,
            nz.Q)()),
            e.emit("startNavigationSpan", t),
            (0,
            q.nZ)().setTransactionName(t.name);
            let n = (0,
            tT.HN)();
            return "navigation" === (n && (0,
            tT.XU)(n).op) ? n : void 0
        }
        function nQ(e) {
            let t = (0,
            eV.qT)(`meta[name=${e}]`);
            return t ? t.getAttribute("content") : void 0
        }
        var n0 = n(57608)
          , n1 = n(11163)
          , n2 = n(36096);
        let n3 = n1.events ? n1 : n1.default
          , n5 = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
        function n4(...e) {
            let t = ""
              , n = !1;
            for (let r = e.length - 1; r >= -1 && !n; r--) {
                let i = r >= 0 ? e[r] : "/";
                i && (t = `${i}/${t}`,
                n = "/" === i.charAt(0))
            }
            return t = (function(e, t) {
                let n = 0;
                for (let t = e.length - 1; t >= 0; t--) {
                    let r = e[t];
                    "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1),
                    n++) : n && (e.splice(t, 1),
                    n--)
                }
                if (t)
                    for (; n--; n)
                        e.unshift("..");
                return e
            }
            )(t.split("/").filter(e => !!e), !n).join("/"),
            (n ? "/" : "") + t || "."
        }
        function n6(e) {
            let t = 0;
            for (; t < e.length && "" === e[t]; t++)
                ;
            let n = e.length - 1;
            for (; n >= 0 && "" === e[n]; n--)
                ;
            return t > n ? [] : e.slice(t, n - t + 1)
        }
        let n8 = (e={}) => {
            let t = e.root
              , n = e.prefix || "app:///"
              , r = "window"in ee.GLOBAL_OBJ && void 0 !== ee.GLOBAL_OBJ.window
              , i = e.iteratee || function({isBrowser: e, root: t, prefix: n}) {
                return r => {
                    if (!r.filename)
                        return r;
                    let i = /^[a-zA-Z]:\\/.test(r.filename) || r.filename.includes("\\") && !r.filename.includes("/")
                      , o = /^\//.test(r.filename);
                    if (e) {
                        if (t) {
                            let e = r.filename;
                            0 === e.indexOf(t) && (r.filename = e.replace(t, n))
                        }
                    } else if (i || o) {
                        let e;
                        let o = i ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r.filename
                          , a = t ? function(e, t) {
                            e = n4(e).slice(1),
                            t = n4(t).slice(1);
                            let n = n6(e.split("/"))
                              , r = n6(t.split("/"))
                              , i = Math.min(n.length, r.length)
                              , o = i;
                            for (let e = 0; e < i; e++)
                                if (n[e] !== r[e]) {
                                    o = e;
                                    break
                                }
                            let a = [];
                            for (let e = o; e < n.length; e++)
                                a.push("..");
                            return (a = a.concat(r.slice(o))).join("/")
                        }(t, o) : function(e) {
                            let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e
                              , n = n5.exec(t);
                            return n ? n.slice(1) : []
                        }(o)[2] || "";
                        r.filename = `${n}${a}`
                    }
                    return r
                }
            }({
                isBrowser: r,
                root: t,
                prefix: n
            });
            return {
                name: "RewriteFrames",
                processEvent(e) {
                    let t = e;
                    return e.exception && Array.isArray(e.exception.values) && (t = function(e) {
                        try {
                            return {
                                ...e,
                                exception: {
                                    ...e.exception,
                                    values: e.exception.values.map(e => {
                                        var t;
                                        return {
                                            ...e,
                                            ...e.stacktrace && {
                                                stacktrace: {
                                                    ...t = e.stacktrace,
                                                    frames: t && t.frames && t.frames.map(e => i(e))
                                                }
                                            }
                                        }
                                    }
                                    )
                                }
                            }
                        } catch (t) {
                            return e
                        }
                    }(t)),
                    t
                }
            }
        }
          , n9 = ({assetPrefixPath: e}) => ({
            ...n8({
                iteratee: t => {
                    try {
                        let {origin: n} = new URL(t.filename);
                        t.filename = (0,
                        n0.x)([t, "access", e => e.filename, "optionalAccess", e => e.replace, "call", e => e(n, "app://"), "access", e => e.replace, "call", t => t(e, "")])
                    } catch (e) {}
                    return t.filename && t.filename.startsWith("app:///_next") && (t.filename = decodeURI(t.filename)),
                    t.filename && t.filename.match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (t.in_app = !1),
                    t
                }
            }),
            name: "NextjsClientStackFrameNormalization"
        })
          , n7 = ee.GLOBAL_OBJ
          , re = ee.GLOBAL_OBJ;
        var rt = n(28643);
        function rn(e) {
            return "/" === e[e.length - 1] ? e.slice(0, -1) : e
        }
        var rr = n(34155);
        function ri() {
            return "undefined" != typeof window && (!(!("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== rr ? rr : 0)) || void 0 !== ee.GLOBAL_OBJ.process && "renderer" === ee.GLOBAL_OBJ.process.type)
        }
        let ro = ee.GLOBAL_OBJ
          , ra = "sentryReplaySession"
          , rs = "Unable to send Replay";
        function rl(e, t) {
            return null != e ? e : t()
        }
        function ru(e) {
            let t;
            let n = e[0]
              , r = 1;
            for (; r < e.length; ) {
                let i = e[r]
                  , o = e[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (t = n,
                n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o( (...e) => n.call(t, ...e)),
                t = void 0)
            }
            return n
        }
        function rc(e) {
            let t = ru([e, "optionalAccess", e => e.host]);
            return ru([t, "optionalAccess", e => e.shadowRoot]) === e
        }
        function rd(e) {
            return "[object ShadowRoot]" === Object.prototype.toString.call(e)
        }
        function rp(e) {
            try {
                var t;
                let n = e.rules || e.cssRules;
                return n ? ((t = Array.from(n, rf).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")),
                t) : null
            } catch (e) {
                return null
            }
        }
        function rf(e) {
            let t;
            if ("styleSheet"in e)
                try {
                    t = rp(e.styleSheet) || function(e) {
                        let {cssText: t} = e;
                        if (t.split('"').length < 3)
                            return t;
                        let n = ["@import", `url(${JSON.stringify(e.href)})`];
                        return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`),
                        e.supportsText && n.push(`supports(${e.supportsText})`),
                        e.media.length && n.push(e.media.mediaText),
                        n.join(" ") + ";"
                    }(e)
                } catch (e) {}
            else if ("selectorText"in e && e.selectorText.includes(":"))
                return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
            return t || e.cssText
        }
        (w = T || (T = {}))[w.Document = 0] = "Document",
        w[w.DocumentType = 1] = "DocumentType",
        w[w.Element = 2] = "Element",
        w[w.Text = 3] = "Text",
        w[w.CDATA = 4] = "CDATA",
        w[w.Comment = 5] = "Comment";
        class rh {
            constructor() {
                this.idNodeMap = new Map,
                this.nodeMetaMap = new WeakMap
            }
            getId(e) {
                return e ? rl(ru([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id]), () => -1) : -1
            }
            getNode(e) {
                return this.idNodeMap.get(e) || null
            }
            getIds() {
                return Array.from(this.idNodeMap.keys())
            }
            getMeta(e) {
                return this.nodeMetaMap.get(e) || null
            }
            removeNodeFromMap(e) {
                let t = this.getId(e);
                this.idNodeMap.delete(t),
                e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
            }
            has(e) {
                return this.idNodeMap.has(e)
            }
            hasNode(e) {
                return this.nodeMetaMap.has(e)
            }
            add(e, t) {
                let n = t.id;
                this.idNodeMap.set(n, e),
                this.nodeMetaMap.set(e, t)
            }
            replace(e, t) {
                let n = this.getNode(e);
                if (n) {
                    let e = this.nodeMetaMap.get(n);
                    e && this.nodeMetaMap.set(t, e)
                }
                this.idNodeMap.set(e, t)
            }
            reset() {
                this.idNodeMap = new Map,
                this.nodeMetaMap = new WeakMap
            }
        }
        function rm({maskInputOptions: e, tagName: t, type: n}) {
            return "OPTION" === t && (t = "SELECT"),
            !!(e[t.toLowerCase()] || n && e[n] || "password" === n || "INPUT" === t && !n && e.text)
        }
        function rg({isMasked: e, element: t, value: n, maskInputFn: r}) {
            let i = n || "";
            return e ? (r && (i = r(i, t)),
            "*".repeat(i.length)) : i
        }
        function ry(e) {
            return e.toLowerCase()
        }
        function rv(e) {
            return e.toUpperCase()
        }
        let rb = "__rrweb_original__";
        function r_(e) {
            let t = e.type;
            return e.hasAttribute("data-rr-is-password") ? "password" : t ? ry(t) : null
        }
        function rS(e, t, n) {
            return "INPUT" === t && ("radio" === n || "checkbox" === n) ? e.getAttribute("value") || "" : e.value
        }
        function rw(e, t) {
            let n;
            try {
                n = new URL(e,rl(t, () => window.location.href))
            } catch (e) {
                return null
            }
            return rl(ru([n.pathname.match(/\.([0-9a-z]+)(?:$)/i), "optionalAccess", e => e[1]]), () => null)
        }
        let rE = {};
        function rx(e) {
            let t = rE[e];
            if (t)
                return t;
            let n = window.document
              , r = window[e];
            if (n && "function" == typeof n.createElement)
                try {
                    let t = n.createElement("iframe");
                    t.hidden = !0,
                    n.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (r = i[e]),
                    n.head.removeChild(t)
                } catch (e) {}
            return rE[e] = r.bind(window)
        }
        function rk(...e) {
            return rx("setTimeout")(...e)
        }
        function rO(...e) {
            return rx("clearTimeout")(...e)
        }
        let rC = 1
          , rT = RegExp("[^a-z0-9-_:]");
        function rR() {
            return rC++
        }
        let rI = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm
          , rM = /^(?:[a-z+]+:)?\/\//i
          , rA = /^www\..*/i
          , rD = /^(data:)([^,]*),(.*)/i;
        function rL(e, t) {
            return (e || "").replace(rI, (e, n, r, i, o, a) => {
                let s = r || o || a
                  , l = n || i || "";
                if (!s)
                    return e;
                if (rM.test(s) || rA.test(s) || rD.test(s))
                    return `url(${l}${s}${l})`;
                if ("/" === s[0])
                    return `url(${l}${(t.indexOf("//") > -1 ? t.split("/").slice(0, 3).join("/") : t.split("/")[0]).split("?")[0] + s}${l})`;
                let u = t.split("/")
                  , c = s.split("/");
                for (let e of (u.pop(),
                c))
                    "." !== e && (".." === e ? u.pop() : u.push(e));
                return `url(${l}${u.join("/")}${l})`
            }
            )
        }
        let rP = /^[^ \t\n\r\u000c]+/
          , rN = /^[, \t\n\r\u000c]+/;
        function rj(e, t) {
            if (!t || "" === t.trim())
                return t;
            let n = e.createElement("a");
            return n.href = t,
            n.href
        }
        function rB() {
            let e = document.createElement("a");
            return e.href = "",
            e.href
        }
        function rU(e, t, n, r, i, o) {
            return r ? "src" !== n && ("href" !== n || "use" === t && "#" === r[0]) && ("xlink:href" !== n || "#" === r[0]) && ("background" !== n || "table" !== t && "td" !== t && "th" !== t) ? "srcset" === n ? function(e, t) {
                if ("" === t.trim())
                    return t;
                let n = 0;
                function r(e) {
                    let r;
                    let i = e.exec(t.substring(n));
                    return i ? (r = i[0],
                    n += r.length,
                    r) : ""
                }
                let i = [];
                for (; r(rN),
                !(n >= t.length); ) {
                    let o = r(rP);
                    if ("," === o.slice(-1))
                        o = rj(e, o.substring(0, o.length - 1)),
                        i.push(o);
                    else {
                        let r = "";
                        o = rj(e, o);
                        let a = !1;
                        for (; ; ) {
                            let e = t.charAt(n);
                            if ("" === e) {
                                i.push((o + r).trim());
                                break
                            }
                            if (a)
                                ")" === e && (a = !1);
                            else {
                                if ("," === e) {
                                    n += 1,
                                    i.push((o + r).trim());
                                    break
                                }
                                "(" === e && (a = !0)
                            }
                            r += e,
                            n += 1
                        }
                    }
                }
                return i.join(", ")
            }(e, r) : "style" === n ? rL(r, rB()) : "object" === t && "data" === n ? rj(e, r) : "function" == typeof o ? o(n, r, i) : r : rj(e, r) : r
        }
        function r$(e, t, n) {
            return ("video" === e || "audio" === e) && "autoplay" === t
        }
        function rW(e, t, n=1 / 0, r=0) {
            return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : rW(e.parentNode, t, n, r + 1)
        }
        function rF(e, t) {
            return n => {
                if (null === n)
                    return !1;
                try {
                    if (e) {
                        if ("string" == typeof e) {
                            if (n.matches(`.${e}`))
                                return !0
                        } else if (function(e, t) {
                            for (let n = e.classList.length; n--; ) {
                                let r = e.classList[n];
                                if (t.test(r))
                                    return !0
                            }
                            return !1
                        }(n, e))
                            return !0
                    }
                    if (t && n.matches(t))
                        return !0;
                    return !1
                } catch (e) {
                    return !1
                }
            }
        }
        function rz(e, t, n, r, i, o) {
            try {
                let a = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                if (null === a)
                    return !1;
                if ("INPUT" === a.tagName) {
                    let e = a.getAttribute("autocomplete");
                    if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e))
                        return !0
                }
                let s = -1
                  , l = -1;
                if (o) {
                    if ((l = rW(a, rF(r, i))) < 0)
                        return !0;
                    s = rW(a, rF(t, n), l >= 0 ? l : 1 / 0)
                } else {
                    if ((s = rW(a, rF(t, n))) < 0)
                        return !1;
                    l = rW(a, rF(r, i), s >= 0 ? s : 1 / 0)
                }
                return s >= 0 ? !(l >= 0) || s <= l : !(l >= 0) && !!o
            } catch (e) {}
            return !!o
        }
        function rH(e) {
            return null == e ? "" : e.toLowerCase()
        }
        function rq(e, t) {
            let n;
            let {doc: r, mirror: i, blockClass: o, blockSelector: a, unblockSelector: s, maskAllText: l, maskTextClass: u, unmaskTextClass: c, maskTextSelector: d, unmaskTextSelector: p, skipChild: f=!1, inlineStylesheet: h=!0, maskInputOptions: m={}, maskAttributeFn: v, maskTextFn: b, maskInputFn: _, slimDOMOptions: S, dataURLOptions: w={}, inlineImages: E=!1, recordCanvas: x=!1, onSerialize: k, onIframeLoad: O, iframeLoadTimeout: C=5e3, onStylesheetLoad: R, stylesheetLoadTimeout: I=5e3, keepIframeSrcFn: M= () => !1, newlyAddedElement: A=!1} = t
              , {preserveWhiteSpace: D=!0} = t
              , L = function(e, t) {
                let {doc: n, mirror: r, blockClass: i, blockSelector: o, unblockSelector: a, maskAllText: s, maskAttributeFn: l, maskTextClass: u, unmaskTextClass: c, maskTextSelector: d, unmaskTextSelector: p, inlineStylesheet: f, maskInputOptions: h={}, maskTextFn: m, maskInputFn: v, dataURLOptions: b={}, inlineImages: _, recordCanvas: S, keepIframeSrcFn: w, newlyAddedElement: E=!1} = t
                  , x = function(e, t) {
                    if (!t.hasNode(e))
                        return;
                    let n = t.getId(e);
                    return 1 === n ? void 0 : n
                }(n, r);
                switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    if ("CSS1Compat" !== e.compatMode)
                        return {
                            type: T.Document,
                            childNodes: [],
                            compatMode: e.compatMode
                        };
                    return {
                        type: T.Document,
                        childNodes: []
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: T.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: x
                    };
                case e.ELEMENT_NODE:
                    return function(e, t) {
                        let n;
                        let {doc: r, blockClass: i, blockSelector: o, unblockSelector: a, inlineStylesheet: s, maskInputOptions: l={}, maskAttributeFn: u, maskInputFn: c, dataURLOptions: d={}, inlineImages: p, recordCanvas: f, keepIframeSrcFn: h, newlyAddedElement: m=!1, rootId: v, maskAllText: b, maskTextClass: _, unmaskTextClass: S, maskTextSelector: w, unmaskTextSelector: E} = t
                          , x = function(e, t, n, r) {
                            try {
                                if (r && e.matches(r))
                                    return !1;
                                if ("string" == typeof t) {
                                    if (e.classList.contains(t))
                                        return !0
                                } else
                                    for (let n = e.classList.length; n--; ) {
                                        let r = e.classList[n];
                                        if (t.test(r))
                                            return !0
                                    }
                                if (n)
                                    return e.matches(n)
                            } catch (e) {}
                            return !1
                        }(e, i, o, a)
                          , k = function(e) {
                            if (e instanceof HTMLFormElement)
                                return "form";
                            let t = ry(e.tagName);
                            return rT.test(t) ? "div" : t
                        }(e)
                          , O = {}
                          , C = e.attributes.length;
                        for (let t = 0; t < C; t++) {
                            let n = e.attributes[t];
                            n.name && !r$(k, n.name, n.value) && (O[n.name] = rU(r, k, ry(n.name), n.value, e, u))
                        }
                        if ("link" === k && s) {
                            let t = Array.from(r.styleSheets).find(t => t.href === e.href)
                              , n = null;
                            t && (n = rp(t)),
                            n && (delete O.rel,
                            delete O.href,
                            O._cssText = rL(n, t.href))
                        }
                        if ("style" === k && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                            let t = rp(e.sheet);
                            t && (O._cssText = rL(t, rB()))
                        }
                        if ("input" === k || "textarea" === k || "select" === k || "option" === k) {
                            let t = r_(e)
                              , n = rS(e, rv(k), t)
                              , r = e.checked;
                            if ("submit" !== t && "button" !== t && n) {
                                let r = rz(e, _, w, S, E, rm({
                                    type: t,
                                    tagName: rv(k),
                                    maskInputOptions: l
                                }));
                                O.value = rg({
                                    isMasked: r,
                                    element: e,
                                    value: n,
                                    maskInputFn: c
                                })
                            }
                            r && (O.checked = r)
                        }
                        if ("option" === k && (e.selected && !l.select ? O.selected = !0 : delete O.selected),
                        "canvas" === k && f) {
                            if ("2d" === e.__context)
                                !function(e) {
                                    let t = e.getContext("2d");
                                    if (!t)
                                        return !0;
                                    for (let n = 0; n < e.width; n += 50)
                                        for (let r = 0; r < e.height; r += 50) {
                                            let i = t.getImageData;
                                            if (new Uint32Array((rb in i ? i[rb] : i).call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some(e => 0 !== e))
                                                return !1
                                        }
                                    return !0
                                }(e) && (O.rr_dataURL = e.toDataURL(d.type, d.quality));
                            else if (!("__context"in e)) {
                                let t = e.toDataURL(d.type, d.quality)
                                  , n = document.createElement("canvas");
                                n.width = e.width,
                                n.height = e.height,
                                t !== n.toDataURL(d.type, d.quality) && (O.rr_dataURL = t)
                            }
                        }
                        if ("img" === k && p) {
                            g || (y = (g = r.createElement("canvas")).getContext("2d"));
                            let t = e.crossOrigin;
                            e.crossOrigin = "anonymous";
                            let n = () => {
                                e.removeEventListener("load", n);
                                try {
                                    g.width = e.naturalWidth,
                                    g.height = e.naturalHeight,
                                    y.drawImage(e, 0, 0),
                                    O.rr_dataURL = g.toDataURL(d.type, d.quality)
                                } catch (t) {
                                    console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`)
                                }
                                t ? O.crossOrigin = t : e.removeAttribute("crossorigin")
                            }
                            ;
                            e.complete && 0 !== e.naturalWidth ? n() : e.addEventListener("load", n)
                        }
                        if (("audio" === k || "video" === k) && (O.rr_mediaState = e.paused ? "paused" : "played",
                        O.rr_mediaCurrentTime = e.currentTime),
                        !m && (e.scrollLeft && (O.rr_scrollLeft = e.scrollLeft),
                        e.scrollTop && (O.rr_scrollTop = e.scrollTop)),
                        x) {
                            let {width: t, height: n} = e.getBoundingClientRect();
                            O = {
                                class: O.class,
                                rr_width: `${t}px`,
                                rr_height: `${n}px`
                            }
                        }
                        "iframe" !== k || h(O.src) || (x || e.contentDocument || (O.rr_src = O.src),
                        delete O.src);
                        try {
                            customElements.get(k) && (n = !0)
                        } catch (e) {}
                        return {
                            type: T.Element,
                            tagName: k,
                            attributes: O,
                            childNodes: [],
                            isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                            needBlock: x,
                            rootId: v,
                            isCustom: n
                        }
                    }(e, {
                        doc: n,
                        blockClass: i,
                        blockSelector: o,
                        unblockSelector: a,
                        inlineStylesheet: f,
                        maskAttributeFn: l,
                        maskInputOptions: h,
                        maskInputFn: v,
                        dataURLOptions: b,
                        inlineImages: _,
                        recordCanvas: S,
                        keepIframeSrcFn: w,
                        newlyAddedElement: E,
                        rootId: x,
                        maskAllText: s,
                        maskTextClass: u,
                        unmaskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: p
                    });
                case e.TEXT_NODE:
                    return function(e, t) {
                        let {maskAllText: n, maskTextClass: r, unmaskTextClass: i, maskTextSelector: o, unmaskTextSelector: a, maskTextFn: s, maskInputOptions: l, maskInputFn: u, rootId: c} = t
                          , d = e.parentNode && e.parentNode.tagName
                          , p = e.textContent
                          , f = "STYLE" === d || void 0
                          , h = "SCRIPT" === d || void 0
                          , m = "TEXTAREA" === d || void 0;
                        if (f && p) {
                            try {
                                e.nextSibling || e.previousSibling || ru([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (p = rp(e.parentNode.sheet))
                            } catch (t) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                            }
                            p = rL(p, rB())
                        }
                        h && (p = "SCRIPT_PLACEHOLDER");
                        let g = rz(e, r, o, i, a, n);
                        return f || h || m || !p || !g || (p = s ? s(p, e.parentElement) : p.replace(/[\S]/g, "*")),
                        m && p && (l.textarea || g) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")),
                        "OPTION" === d && p && (p = rg({
                            isMasked: rz(e, r, o, i, a, rm({
                                type: null,
                                tagName: d,
                                maskInputOptions: l
                            })),
                            element: e,
                            value: p,
                            maskInputFn: u
                        })),
                        {
                            type: T.Text,
                            textContent: p || "",
                            isStyle: f,
                            rootId: c
                        }
                    }(e, {
                        maskAllText: s,
                        maskTextClass: u,
                        unmaskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        maskTextFn: m,
                        maskInputOptions: h,
                        maskInputFn: v,
                        rootId: x
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: T.CDATA,
                        textContent: "",
                        rootId: x
                    };
                case e.COMMENT_NODE:
                    return {
                        type: T.Comment,
                        textContent: e.textContent || "",
                        rootId: x
                    };
                default:
                    return !1
                }
            }(e, {
                doc: r,
                mirror: i,
                blockClass: o,
                blockSelector: a,
                maskAllText: l,
                unblockSelector: s,
                maskTextClass: u,
                unmaskTextClass: c,
                maskTextSelector: d,
                unmaskTextSelector: p,
                inlineStylesheet: h,
                maskInputOptions: m,
                maskAttributeFn: v,
                maskTextFn: b,
                maskInputFn: _,
                dataURLOptions: w,
                inlineImages: E,
                recordCanvas: x,
                keepIframeSrcFn: M,
                newlyAddedElement: A
            });
            if (!L)
                return console.warn(e, "not serialized"),
                null;
            n = i.hasNode(e) ? i.getId(e) : !function(e, t) {
                if (t.comment && e.type === T.Comment)
                    return !0;
                if (e.type === T.Element) {
                    if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === rw(e.attributes.href)) || t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (rH(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === rH(e.attributes.name) || "icon" === rH(e.attributes.rel) || "apple-touch-icon" === rH(e.attributes.rel) || "shortcut icon" === rH(e.attributes.rel))))
                        return !0;
                    if ("meta" === e.tagName) {
                        if (t.headMetaDescKeywords && rH(e.attributes.name).match(/^description|keywords$/) || t.headMetaSocial && (rH(e.attributes.property).match(/^(og|twitter|fb):/) || rH(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === rH(e.attributes.name)))
                            return !0;
                        if (t.headMetaRobots && ("robots" === rH(e.attributes.name) || "googlebot" === rH(e.attributes.name) || "bingbot" === rH(e.attributes.name)))
                            return !0;
                        if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"])
                            return !0;
                        else if (t.headMetaAuthorship && ("author" === rH(e.attributes.name) || "generator" === rH(e.attributes.name) || "framework" === rH(e.attributes.name) || "publisher" === rH(e.attributes.name) || "progid" === rH(e.attributes.name) || rH(e.attributes.property).match(/^article:/) || rH(e.attributes.property).match(/^product:/)))
                            return !0;
                        else if (t.headMetaVerification && ("google-site-verification" === rH(e.attributes.name) || "yandex-verification" === rH(e.attributes.name) || "csrf-token" === rH(e.attributes.name) || "p:domain_verify" === rH(e.attributes.name) || "verify-v1" === rH(e.attributes.name) || "verification" === rH(e.attributes.name) || "shopify-checkout-api-token" === rH(e.attributes.name)))
                            return !0
                    }
                }
                return !1
            }(L, S) && (D || L.type !== T.Text || L.isStyle || L.textContent.replace(/^\s+|\s+$/gm, "").length) ? rR() : -2;
            let P = Object.assign(L, {
                id: n
            });
            if (i.add(e, P),
            -2 === n)
                return null;
            k && k(e);
            let N = !f;
            if (P.type === T.Element) {
                N = N && !P.needBlock,
                delete P.needBlock;
                let t = e.shadowRoot;
                t && rd(t) && (P.isShadowHost = !0)
            }
            if ((P.type === T.Document || P.type === T.Element) && N) {
                S.headWhitespace && P.type === T.Element && "head" === P.tagName && (D = !1);
                let t = {
                    doc: r,
                    mirror: i,
                    blockClass: o,
                    blockSelector: a,
                    maskAllText: l,
                    unblockSelector: s,
                    maskTextClass: u,
                    unmaskTextClass: c,
                    maskTextSelector: d,
                    unmaskTextSelector: p,
                    skipChild: f,
                    inlineStylesheet: h,
                    maskInputOptions: m,
                    maskAttributeFn: v,
                    maskTextFn: b,
                    maskInputFn: _,
                    slimDOMOptions: S,
                    dataURLOptions: w,
                    inlineImages: E,
                    recordCanvas: x,
                    preserveWhiteSpace: D,
                    onSerialize: k,
                    onIframeLoad: O,
                    iframeLoadTimeout: C,
                    onStylesheetLoad: R,
                    stylesheetLoadTimeout: I,
                    keepIframeSrcFn: M
                };
                for (let n of Array.from(e.childNodes)) {
                    let e = rq(n, t);
                    e && P.childNodes.push(e)
                }
                if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
                    for (let n of Array.from(e.shadowRoot.childNodes)) {
                        let r = rq(n, t);
                        r && (rd(e.shadowRoot) && (r.isShadow = !0),
                        P.childNodes.push(r))
                    }
            }
            return e.parentNode && rc(e.parentNode) && rd(e.parentNode) && (P.isShadow = !0),
            P.type === T.Element && "iframe" === P.tagName && function(e, t, n) {
                let r;
                let i = e.contentWindow;
                if (!i)
                    return;
                let o = !1;
                try {
                    r = i.document.readyState
                } catch (e) {
                    return
                }
                if ("complete" !== r) {
                    let r = rk( () => {
                        o || (t(),
                        o = !0)
                    }
                    , n);
                    e.addEventListener("load", () => {
                        rO(r),
                        o = !0,
                        t()
                    }
                    );
                    return
                }
                let a = "about:blank";
                if (i.location.href !== a || e.src === a || "" === e.src)
                    return rk(t, 0),
                    e.addEventListener("load", t);
                e.addEventListener("load", t)
            }(e, () => {
                let t = e.contentDocument;
                if (t && O) {
                    let n = rq(t, {
                        doc: t,
                        mirror: i,
                        blockClass: o,
                        blockSelector: a,
                        unblockSelector: s,
                        maskAllText: l,
                        maskTextClass: u,
                        unmaskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        skipChild: !1,
                        inlineStylesheet: h,
                        maskInputOptions: m,
                        maskAttributeFn: v,
                        maskTextFn: b,
                        maskInputFn: _,
                        slimDOMOptions: S,
                        dataURLOptions: w,
                        inlineImages: E,
                        recordCanvas: x,
                        preserveWhiteSpace: D,
                        onSerialize: k,
                        onIframeLoad: O,
                        iframeLoadTimeout: C,
                        onStylesheetLoad: R,
                        stylesheetLoadTimeout: I,
                        keepIframeSrcFn: M
                    });
                    n && O(e, n)
                }
            }
            , C),
            P.type === T.Element && "link" === P.tagName && "string" == typeof P.attributes.rel && ("stylesheet" === P.attributes.rel || "preload" === P.attributes.rel && "string" == typeof P.attributes.href && "css" === rw(P.attributes.href)) && function(e, t, n) {
                let r, i = !1;
                try {
                    r = e.sheet
                } catch (e) {
                    return
                }
                if (r)
                    return;
                let o = rk( () => {
                    i || (t(),
                    i = !0)
                }
                , n);
                e.addEventListener("load", () => {
                    rO(o),
                    i = !0,
                    t()
                }
                )
            }(e, () => {
                if (R) {
                    let t = rq(e, {
                        doc: r,
                        mirror: i,
                        blockClass: o,
                        blockSelector: a,
                        unblockSelector: s,
                        maskAllText: l,
                        maskTextClass: u,
                        unmaskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        skipChild: !1,
                        inlineStylesheet: h,
                        maskInputOptions: m,
                        maskAttributeFn: v,
                        maskTextFn: b,
                        maskInputFn: _,
                        slimDOMOptions: S,
                        dataURLOptions: w,
                        inlineImages: E,
                        recordCanvas: x,
                        preserveWhiteSpace: D,
                        onSerialize: k,
                        onIframeLoad: O,
                        iframeLoadTimeout: C,
                        onStylesheetLoad: R,
                        stylesheetLoadTimeout: I,
                        keepIframeSrcFn: M
                    });
                    t && R(e, t)
                }
            }
            , I),
            P
        }
        function rZ(e) {
            let t;
            let n = e[0]
              , r = 1;
            for (; r < e.length; ) {
                let i = e[r]
                  , o = e[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (t = n,
                n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o( (...e) => n.call(t, ...e)),
                t = void 0)
            }
            return n
        }
        function rX(e, t, n=document) {
            let r = {
                capture: !0,
                passive: !0
            };
            return n.addEventListener(e, t, r),
            () => n.removeEventListener(e, t, r)
        }
        let rJ = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording."
          , rG = {
            map: {},
            getId: () => (console.error(rJ),
            -1),
            getNode: () => (console.error(rJ),
            null),
            removeNodeFromMap() {
                console.error(rJ)
            },
            has: () => (console.error(rJ),
            !1),
            reset() {
                console.error(rJ)
            }
        };
        function rV(e, t, n={}) {
            let r = null
              , i = 0;
            return function(...o) {
                let a = Date.now();
                i || !1 !== n.leading || (i = a);
                let s = t - (a - i)
                  , l = this;
                s <= 0 || s > t ? (r && (function(...e) {
                    ii("clearTimeout")(...e)
                }(r),
                r = null),
                i = a,
                e.apply(l, o)) : r || !1 === n.trailing || (r = io( () => {
                    i = !1 === n.leading ? 0 : Date.now(),
                    r = null,
                    e.apply(l, o)
                }
                , s))
            }
        }
        function rY(e, t, n) {
            try {
                if (!(t in e))
                    return () => {}
                    ;
                let r = e[t]
                  , i = n(r);
                return "function" == typeof i && (i.prototype = i.prototype || {},
                Object.defineProperties(i, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })),
                e[t] = i,
                () => {
                    e[t] = r
                }
            } catch (e) {
                return () => {}
            }
        }
        "undefined" != typeof window && window.Proxy && window.Reflect && (rG = new Proxy(rG,{
            get: (e, t, n) => ("map" === t && console.error(rJ),
            Reflect.get(e, t, n))
        }));
        let rK = Date.now;
        function rQ(e) {
            let t = e.document;
            return {
                left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : rZ([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || rZ([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || rZ([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
                top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : rZ([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || rZ([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || rZ([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
            }
        }
        function r0() {
            return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
        }
        function r1() {
            return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
        }
        function r2(e) {
            return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
        }
        function r3(e, t, n, r, i) {
            if (!e)
                return !1;
            let o = r2(e);
            if (!o)
                return !1;
            let a = rF(t, n);
            if (!i) {
                let e = r && o.matches(r);
                return a(o) && !e
            }
            let s = rW(o, a)
              , l = -1;
            return !(s < 0) && (r && (l = rW(o, rF(null, r))),
            s > -1 && l < 0 || s < l)
        }
        function r5(e, t) {
            return -2 === t.getId(e)
        }
        function r4(e) {
            return !!e.changedTouches
        }
        function r6(e, t) {
            return !!("IFRAME" === e.nodeName && t.getMeta(e))
        }
        function r8(e, t) {
            return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
        }
        function r9(e) {
            return !!rZ([e, "optionalAccess", e => e.shadowRoot])
        }
        /[1-9][0-9]{12}/.test(Date.now().toString()) || (rK = () => new Date().getTime());
        class r7 {
            constructor() {
                this.id = 1,
                this.styleIDMap = new WeakMap,
                this.idStyleMap = new Map
            }
            getId(e) {
                return (0,
                rt.h)(this.styleIDMap.get(e), () => -1)
            }
            has(e) {
                return this.styleIDMap.has(e)
            }
            add(e, t) {
                let n;
                return this.has(e) ? this.getId(e) : (n = void 0 === t ? this.id++ : t,
                this.styleIDMap.set(e, n),
                this.idStyleMap.set(n, e),
                n)
            }
            getStyle(e) {
                return this.idStyleMap.get(e) || null
            }
            reset() {
                this.styleIDMap = new WeakMap,
                this.idStyleMap = new Map,
                this.id = 1
            }
            generateId() {
                return this.id++
            }
        }
        function ie(e) {
            let t = null;
            return rZ([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host),
            t
        }
        function it(e) {
            let t = e.ownerDocument;
            return !!t && (t.contains(e) || function(e) {
                let t = e.ownerDocument;
                if (!t)
                    return !1;
                let n = function(e) {
                    let t, n = e;
                    for (; t = ie(n); )
                        n = t;
                    return n
                }(e);
                return t.contains(n)
            }(e))
        }
        let ir = {};
        function ii(e) {
            let t = ir[e];
            if (t)
                return t;
            let n = window.document
              , r = window[e];
            if (n && "function" == typeof n.createElement)
                try {
                    let t = n.createElement("iframe");
                    t.hidden = !0,
                    n.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (r = i[e]),
                    n.head.removeChild(t)
                } catch (e) {}
            return ir[e] = r.bind(window)
        }
        function io(...e) {
            return ii("setTimeout")(...e)
        }
        var ia = ((E = ia || {})[E.DomContentLoaded = 0] = "DomContentLoaded",
        E[E.Load = 1] = "Load",
        E[E.FullSnapshot = 2] = "FullSnapshot",
        E[E.IncrementalSnapshot = 3] = "IncrementalSnapshot",
        E[E.Meta = 4] = "Meta",
        E[E.Custom = 5] = "Custom",
        E[E.Plugin = 6] = "Plugin",
        E)
          , is = ((x = is || {})[x.Mutation = 0] = "Mutation",
        x[x.MouseMove = 1] = "MouseMove",
        x[x.MouseInteraction = 2] = "MouseInteraction",
        x[x.Scroll = 3] = "Scroll",
        x[x.ViewportResize = 4] = "ViewportResize",
        x[x.Input = 5] = "Input",
        x[x.TouchMove = 6] = "TouchMove",
        x[x.MediaInteraction = 7] = "MediaInteraction",
        x[x.StyleSheetRule = 8] = "StyleSheetRule",
        x[x.CanvasMutation = 9] = "CanvasMutation",
        x[x.Font = 10] = "Font",
        x[x.Log = 11] = "Log",
        x[x.Drag = 12] = "Drag",
        x[x.StyleDeclaration = 13] = "StyleDeclaration",
        x[x.Selection = 14] = "Selection",
        x[x.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
        x[x.CustomElement = 16] = "CustomElement",
        x)
          , il = ((k = il || {})[k.MouseUp = 0] = "MouseUp",
        k[k.MouseDown = 1] = "MouseDown",
        k[k.Click = 2] = "Click",
        k[k.ContextMenu = 3] = "ContextMenu",
        k[k.DblClick = 4] = "DblClick",
        k[k.Focus = 5] = "Focus",
        k[k.Blur = 6] = "Blur",
        k[k.TouchStart = 7] = "TouchStart",
        k[k.TouchMove_Departed = 8] = "TouchMove_Departed",
        k[k.TouchEnd = 9] = "TouchEnd",
        k[k.TouchCancel = 10] = "TouchCancel",
        k)
          , iu = ((O = iu || {})[O.Mouse = 0] = "Mouse",
        O[O.Pen = 1] = "Pen",
        O[O.Touch = 2] = "Touch",
        O);
        class ic {
            constructor() {
                this.length = 0,
                this.head = null,
                this.tail = null
            }
            get(e) {
                if (e >= this.length)
                    throw Error("Position outside of list range");
                let t = this.head;
                for (let n = 0; n < e; n++)
                    t = function(e) {
                        let t;
                        let n = e[0]
                          , r = 1;
                        for (; r < e.length; ) {
                            let i = e[r]
                              , o = e[r + 1];
                            if (r += 2,
                            ("optionalAccess" === i || "optionalCall" === i) && null == n)
                                return;
                            "access" === i || "optionalAccess" === i ? (t = n,
                            n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o( (...e) => n.call(t, ...e)),
                            t = void 0)
                        }
                        return n
                    }([t, "optionalAccess", e => e.next]) || null;
                return t
            }
            addNode(e) {
                let t = {
                    value: e,
                    previous: null,
                    next: null
                };
                if (e.__ln = t,
                e.previousSibling && "__ln"in e.previousSibling) {
                    let n = e.previousSibling.__ln.next;
                    t.next = n,
                    t.previous = e.previousSibling.__ln,
                    e.previousSibling.__ln.next = t,
                    n && (n.previous = t)
                } else if (e.nextSibling && "__ln"in e.nextSibling && e.nextSibling.__ln.previous) {
                    let n = e.nextSibling.__ln.previous;
                    t.previous = n,
                    t.next = e.nextSibling.__ln,
                    e.nextSibling.__ln.previous = t,
                    n && (n.next = t)
                } else
                    this.head && (this.head.previous = t),
                    t.next = this.head,
                    this.head = t;
                null === t.next && (this.tail = t),
                this.length++
            }
            removeNode(e) {
                let t = e.__ln;
                this.head && (t.previous ? (t.previous.next = t.next,
                t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next,
                this.head ? this.head.previous = null : this.tail = null),
                e.__ln && delete e.__ln,
                this.length--)
            }
        }
        let id = (e, t) => `${e}@${t}`;
        class ip {
            constructor() {
                this.frozen = !1,
                this.locked = !1,
                this.texts = [],
                this.attributes = [],
                this.attributeMap = new WeakMap,
                this.removes = [],
                this.mapRemoves = [],
                this.movedMap = {},
                this.addedSet = new Set,
                this.movedSet = new Set,
                this.droppedSet = new Set,
                this.processMutations = e => {
                    e.forEach(this.processMutation),
                    this.emit()
                }
                ,
                this.emit = () => {
                    if (this.frozen || this.locked)
                        return;
                    let e = []
                      , t = new Set
                      , n = new ic
                      , r = e => {
                        let t = e
                          , n = -2;
                        for (; -2 === n; )
                            n = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return n
                    }
                      , i = i => {
                        if (!i.parentNode || !it(i))
                            return;
                        let o = rc(i.parentNode) ? this.mirror.getId(ie(i)) : this.mirror.getId(i.parentNode)
                          , a = r(i);
                        if (-1 === o || -1 === a)
                            return n.addNode(i);
                        let s = rq(i, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: e => {
                                r6(e, this.mirror) && this.iframeManager.addIframe(e),
                                r8(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                                r9(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                            }
                            ,
                            onIframeLoad: (e, t) => {
                                this.iframeManager.attachIframe(e, t),
                                e.contentWindow && this.canvasManager.addWindow(e.contentWindow),
                                this.shadowDomManager.observeAttachShadow(e)
                            }
                            ,
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t)
                            }
                        });
                        s && (e.push({
                            parentId: o,
                            nextId: a,
                            node: s
                        }),
                        t.add(s.id))
                    }
                    ;
                    for (; this.mapRemoves.length; )
                        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                    for (let e of this.movedSet)
                        (!im(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
                    for (let e of this.addedSet)
                        ig(this.droppedSet, e) || im(this.removes, e, this.mirror) ? ig(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
                    let o = null;
                    for (; n.length; ) {
                        let e = null;
                        if (o) {
                            let t = this.mirror.getId(o.value.parentNode)
                              , n = r(o.value);
                            -1 !== t && -1 !== n && (e = o)
                        }
                        if (!e) {
                            let t = n.tail;
                            for (; t; ) {
                                let n = t;
                                if (t = t.previous,
                                n) {
                                    let t = this.mirror.getId(n.value.parentNode);
                                    if (-1 === r(n.value))
                                        continue;
                                    if (-1 !== t) {
                                        e = n;
                                        break
                                    }
                                    {
                                        let t = n.value;
                                        if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                            let r = t.parentNode.host;
                                            if (-1 !== this.mirror.getId(r)) {
                                                e = n;
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (!e) {
                            for (; n.head; )
                                n.removeNode(n.head.value);
                            break
                        }
                        o = e.previous,
                        n.removeNode(e.value),
                        i(e.value)
                    }
                    let a = {
                        texts: this.texts.map(e => ({
                            id: this.mirror.getId(e.node),
                            value: e.value
                        })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                        attributes: this.attributes.map(e => {
                            let {attributes: t} = e;
                            if ("string" == typeof t.style) {
                                let n = JSON.stringify(e.styleDiff)
                                  , r = JSON.stringify(e._unchangedStyles);
                                n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                            }
                            return {
                                id: this.mirror.getId(e.node),
                                attributes: t
                            }
                        }
                        ).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                        removes: this.removes,
                        adds: e
                    };
                    (a.texts.length || a.attributes.length || a.removes.length || a.adds.length) && (this.texts = [],
                    this.attributes = [],
                    this.attributeMap = new WeakMap,
                    this.removes = [],
                    this.addedSet = new Set,
                    this.movedSet = new Set,
                    this.droppedSet = new Set,
                    this.movedMap = {},
                    this.mutationCb(a))
                }
                ,
                this.processMutation = e => {
                    if (!r5(e.target, this.mirror))
                        switch (e.type) {
                        case "characterData":
                            {
                                let t = e.target.textContent;
                                r3(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                    value: rz(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, r2(e.target)) : t.replace(/[\S]/g, "*") : t,
                                    node: e.target
                                });
                                break
                            }
                        case "attributes":
                            {
                                let t = e.target
                                  , n = e.attributeName
                                  , r = e.target.getAttribute(n);
                                if ("value" === n) {
                                    let n = r_(t)
                                      , i = t.tagName;
                                    r = rS(t, i, n);
                                    let o = rm({
                                        maskInputOptions: this.maskInputOptions,
                                        tagName: i,
                                        type: n
                                    });
                                    r = rg({
                                        isMasked: rz(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, o),
                                        element: t,
                                        value: r,
                                        maskInputFn: this.maskInputFn
                                    })
                                }
                                if (r3(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue)
                                    return;
                                let i = this.attributeMap.get(e.target);
                                if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                                    if (t.contentDocument)
                                        return;
                                    n = "rr_src"
                                }
                                if (i || (i = {
                                    node: e.target,
                                    attributes: {},
                                    styleDiff: {},
                                    _unchangedStyles: {}
                                },
                                this.attributes.push(i),
                                this.attributeMap.set(e.target, i)),
                                "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"),
                                !r$(t.tagName, n) && (i.attributes[n] = rU(this.doc, ry(t.tagName), ry(n), r, t, this.maskAttributeFn),
                                "style" === n)) {
                                    if (!this.unattachedDoc)
                                        try {
                                            this.unattachedDoc = document.implementation.createHTMLDocument()
                                        } catch (e) {
                                            this.unattachedDoc = this.doc
                                        }
                                    let n = this.unattachedDoc.createElement("span");
                                    for (let r of (e.oldValue && n.setAttribute("style", e.oldValue),
                                    Array.from(t.style))) {
                                        let e = t.style.getPropertyValue(r)
                                          , o = t.style.getPropertyPriority(r);
                                        e !== n.style.getPropertyValue(r) || o !== n.style.getPropertyPriority(r) ? "" === o ? i.styleDiff[r] = e : i.styleDiff[r] = [e, o] : i._unchangedStyles[r] = [e, o]
                                    }
                                    for (let e of Array.from(n.style))
                                        "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                                }
                                break
                            }
                        case "childList":
                            if (r3(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0))
                                return;
                            e.addedNodes.forEach(t => this.genAdds(t, e.target)),
                            e.removedNodes.forEach(t => {
                                let n = this.mirror.getId(t)
                                  , r = rc(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                r3(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r5(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (ih(this.addedSet, t),
                                this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || function e(t, n) {
                                    if (rc(t))
                                        return !1;
                                    let r = n.getId(t);
                                    return !n.has(r) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, n))
                                }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[id(n, r)] ? ih(this.movedSet, t) : this.removes.push({
                                    parentId: r,
                                    id: n,
                                    isShadow: !!(rc(e.target) && rd(e.target)) || void 0
                                })),
                                this.mapRemoves.push(t))
                            }
                            )
                        }
                }
                ,
                this.genAdds = (e, t) => {
                    if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                        if (this.mirror.hasNode(e)) {
                            if (r5(e, this.mirror))
                                return;
                            this.movedSet.add(e);
                            let n = null;
                            t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
                            n && -1 !== n && (this.movedMap[id(this.mirror.getId(e), n)] = !0)
                        } else
                            this.addedSet.add(e),
                            this.droppedSet.delete(e);
                        !r3(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes.forEach(e => this.genAdds(e)),
                        r9(e) && e.shadowRoot.childNodes.forEach(t => {
                            this.processedNodeManager.add(t, this),
                            this.genAdds(t, e)
                        }
                        ))
                    }
                }
            }
            init(e) {
                ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
                    this[t] = e[t]
                }
                )
            }
            freeze() {
                this.frozen = !0,
                this.canvasManager.freeze()
            }
            unfreeze() {
                this.frozen = !1,
                this.canvasManager.unfreeze(),
                this.emit()
            }
            isFrozen() {
                return this.frozen
            }
            lock() {
                this.locked = !0,
                this.canvasManager.lock()
            }
            unlock() {
                this.locked = !1,
                this.canvasManager.unlock(),
                this.emit()
            }
            reset() {
                this.shadowDomManager.reset(),
                this.canvasManager.reset()
            }
        }
        function ih(e, t) {
            e.delete(t),
            t.childNodes.forEach(t => ih(e, t))
        }
        function im(e, t, n) {
            return 0 !== e.length && function e(t, n, r) {
                let {parentNode: i} = n;
                if (!i)
                    return !1;
                let o = r.getId(i);
                return !!t.some(e => e.id === o) || e(t, i, r)
            }(e, t, n)
        }
        function ig(e, t) {
            return 0 !== e.size && function e(t, n) {
                let {parentNode: r} = n;
                return !!r && (!!t.has(r) || e(t, r))
            }(e, t)
        }
        let iy = e => v ? (...t) => {
            try {
                return e(...t)
            } catch (e) {
                if (v && !0 === v(e))
                    return () => {}
                    ;
                throw e
            }
        }
        : e;
        function iv(e) {
            let t;
            let n = e[0]
              , r = 1;
            for (; r < e.length; ) {
                let i = e[r]
                  , o = e[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (t = n,
                n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o( (...e) => n.call(t, ...e)),
                t = void 0)
            }
            return n
        }
        let ib = [];
        function i_(e) {
            try {
                if ("composedPath"in e) {
                    let t = e.composedPath();
                    if (t.length)
                        return t[0]
                } else if ("path"in e && e.path.length)
                    return e.path[0]
            } catch (e) {}
            return e && e.target
        }
        function iS(e, t) {
            let n = new ip;
            ib.push(n),
            n.init(e);
            let r = window.MutationObserver || window.__rrMutationObserver
              , i = iv([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
            i && window[i] && (r = window[i]);
            let o = new r(iy(t => {
                e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t)
            }
            ));
            return o.observe(t, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            }),
            o
        }
        function iw({scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: o, sampling: a}) {
            return rX("scroll", iy(rV(iy(a => {
                let s = i_(a);
                if (!s || r3(s, r, i, o, !0))
                    return;
                let l = n.getId(s);
                if (s === t && t.defaultView) {
                    let n = rQ(t.defaultView);
                    e({
                        id: l,
                        x: n.left,
                        y: n.top
                    })
                } else
                    e({
                        id: l,
                        x: s.scrollLeft,
                        y: s.scrollTop
                    })
            }
            ), a.scroll || 100)), t)
        }
        let iE = ["INPUT", "TEXTAREA", "SELECT"]
          , ix = new WeakMap;
        function ik(e) {
            var t;
            return t = [],
            iR("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || iR("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || iR("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || iR("CSSConditionRule") && e.parentRule instanceof CSSConditionRule ? t.unshift(Array.from(e.parentRule.cssRules).indexOf(e)) : e.parentStyleSheet && t.unshift(Array.from(e.parentStyleSheet.cssRules).indexOf(e)),
            t
        }
        function iO(e, t, n) {
            let r, i;
            return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e),
            {
                styleId: i,
                id: r
            }) : {}
        }
        function iC({mirror: e, stylesheetManager: t}, n) {
            let r = null;
            r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
            let i = "#document" === n.nodeName ? iv([n, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : iv([n, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot])
              , o = iv([i, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(iv([i, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
            return null !== r && -1 !== r && i && o ? (Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: o.configurable,
                enumerable: o.enumerable,
                get() {
                    return iv([o, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
                },
                set(e) {
                    let n = iv([o, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
                    if (null !== r && -1 !== r)
                        try {
                            t.adoptStyleSheets(e, r)
                        } catch (e) {}
                    return n
                }
            }),
            iy( () => {
                Object.defineProperty(n, "adoptedStyleSheets", {
                    configurable: o.configurable,
                    enumerable: o.enumerable,
                    get: o.get,
                    set: o.set
                })
            }
            )) : () => {}
        }
        function iT(e, t={}) {
            let n;
            let r = e.doc.defaultView;
            if (!r)
                return () => {}
                ;
            e.recordDOM && (n = iS(e, e.doc));
            let i = function({mousemoveCb: e, sampling: t, doc: n, mirror: r}) {
                let i;
                if (!1 === t.mousemove)
                    return () => {}
                    ;
                let o = "number" == typeof t.mousemove ? t.mousemove : 50
                  , a = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500
                  , s = []
                  , l = rV(iy(t => {
                    let n = Date.now() - i;
                    e(s.map(e => (e.timeOffset -= n,
                    e)), t),
                    s = [],
                    i = null
                }
                ), a)
                  , u = iy(rV(iy(e => {
                    let t = i_(e)
                      , {clientX: n, clientY: o} = r4(e) ? e.changedTouches[0] : e;
                    i || (i = rK()),
                    s.push({
                        x: n,
                        y: o,
                        id: r.getId(t),
                        timeOffset: rK() - i
                    }),
                    l("undefined" != typeof DragEvent && e instanceof DragEvent ? is.Drag : e instanceof MouseEvent ? is.MouseMove : is.TouchMove)
                }
                ), o, {
                    trailing: !1
                }))
                  , c = [rX("mousemove", u, n), rX("touchmove", u, n), rX("drag", u, n)];
                return iy( () => {
                    c.forEach(e => e())
                }
                )
            }(e)
              , o = function({mouseInteractionCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: o, sampling: a}) {
                if (!1 === a.mouseInteraction)
                    return () => {}
                    ;
                let s = !0 === a.mouseInteraction || void 0 === a.mouseInteraction ? {} : a.mouseInteraction
                  , l = []
                  , u = null
                  , c = t => a => {
                    let s = i_(a);
                    if (r3(s, r, i, o, !0))
                        return;
                    let l = null
                      , c = t;
                    if ("pointerType"in a) {
                        switch (a.pointerType) {
                        case "mouse":
                            l = iu.Mouse;
                            break;
                        case "touch":
                            l = iu.Touch;
                            break;
                        case "pen":
                            l = iu.Pen
                        }
                        l === iu.Touch ? il[t] === il.MouseDown ? c = "TouchStart" : il[t] === il.MouseUp && (c = "TouchEnd") : iu.Pen
                    } else
                        r4(a) && (l = iu.Touch);
                    null !== l ? (u = l,
                    (c.startsWith("Touch") && l === iu.Touch || c.startsWith("Mouse") && l === iu.Mouse) && (l = null)) : il[t] === il.Click && (l = u,
                    u = null);
                    let d = r4(a) ? a.changedTouches[0] : a;
                    if (!d)
                        return;
                    let p = n.getId(s)
                      , {clientX: f, clientY: h} = d;
                    iy(e)({
                        type: il[c],
                        id: p,
                        x: f,
                        y: h,
                        ...null !== l && {
                            pointerType: l
                        }
                    })
                }
                ;
                return Object.keys(il).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== s[e]).forEach(e => {
                    let n = ry(e)
                      , r = c(e);
                    if (window.PointerEvent)
                        switch (il[e]) {
                        case il.MouseDown:
                        case il.MouseUp:
                            n = n.replace("mouse", "pointer");
                            break;
                        case il.TouchStart:
                        case il.TouchEnd:
                            return
                        }
                    l.push(rX(n, r, t))
                }
                ),
                iy( () => {
                    l.forEach(e => e())
                }
                )
            }(e)
              , a = iw(e)
              , s = function({viewportResizeCb: e}, {win: t}) {
                let n = -1
                  , r = -1;
                return rX("resize", iy(rV(iy( () => {
                    let t = r0()
                      , i = r1();
                    (n !== t || r !== i) && (e({
                        width: Number(i),
                        height: Number(t)
                    }),
                    n = t,
                    r = i)
                }
                ), 200)), t)
            }(e, {
                win: r
            })
              , l = function({inputCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: o, ignoreClass: a, ignoreSelector: s, maskInputOptions: l, maskInputFn: u, sampling: c, userTriggeredOnInput: d, maskTextClass: p, unmaskTextClass: f, maskTextSelector: h, unmaskTextSelector: m}) {
                function g(e) {
                    let n = i_(e)
                      , c = e.isTrusted
                      , g = n && rv(n.tagName);
                    if ("OPTION" === g && (n = n.parentElement),
                    !n || !g || 0 > iE.indexOf(g) || r3(n, r, i, o, !0))
                        return;
                    let v = n;
                    if (v.classList.contains(a) || s && v.matches(s))
                        return;
                    let b = r_(n)
                      , _ = rS(v, g, b)
                      , S = !1
                      , w = rm({
                        maskInputOptions: l,
                        tagName: g,
                        type: b
                    })
                      , E = rz(n, p, h, f, m, w);
                    ("radio" === b || "checkbox" === b) && (S = n.checked),
                    _ = rg({
                        isMasked: E,
                        element: n,
                        value: _,
                        maskInputFn: u
                    }),
                    y(n, d ? {
                        text: _,
                        isChecked: S,
                        userTriggered: c
                    } : {
                        text: _,
                        isChecked: S
                    });
                    let x = n.name;
                    "radio" === b && x && S && t.querySelectorAll(`input[type="radio"][name="${x}"]`).forEach(e => {
                        if (e !== n) {
                            let t = rg({
                                isMasked: E,
                                element: e,
                                value: rS(e, g, b),
                                maskInputFn: u
                            });
                            y(e, d ? {
                                text: t,
                                isChecked: !S,
                                userTriggered: !1
                            } : {
                                text: t,
                                isChecked: !S
                            })
                        }
                    }
                    )
                }
                function y(t, r) {
                    let i = ix.get(t);
                    if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                        ix.set(t, r);
                        let i = n.getId(t);
                        iy(e)({
                            ...r,
                            id: i
                        })
                    }
                }
                let v = ("last" === c.input ? ["change"] : ["input", "change"]).map(e => rX(e, iy(g), t))
                  , b = t.defaultView;
                if (!b)
                    return () => {
                        v.forEach(e => e())
                    }
                    ;
                let _ = b.Object.getOwnPropertyDescriptor(b.HTMLInputElement.prototype, "value")
                  , S = [[b.HTMLInputElement.prototype, "value"], [b.HTMLInputElement.prototype, "checked"], [b.HTMLSelectElement.prototype, "value"], [b.HTMLTextAreaElement.prototype, "value"], [b.HTMLSelectElement.prototype, "selectedIndex"], [b.HTMLOptionElement.prototype, "selected"]];
                return _ && _.set && v.push(...S.map(e => (function e(t, n, r, i, o=window) {
                    let a = o.Object.getOwnPropertyDescriptor(t, n);
                    return o.Object.defineProperty(t, n, i ? r : {
                        set(e) {
                            io( () => {
                                r.set.call(this, e)
                            }
                            , 0),
                            a && a.set && a.set.call(this, e)
                        }
                    }),
                    () => e(t, n, a || {}, !0)
                }
                )(e[0], e[1], {
                    set() {
                        iy(g)({
                            target: this,
                            isTrusted: !1
                        })
                    }
                }, !1, b))),
                iy( () => {
                    v.forEach(e => e())
                }
                )
            }(e)
              , u = function({mediaInteractionCb: e, blockClass: t, blockSelector: n, unblockSelector: r, mirror: i, sampling: o, doc: a}) {
                let s = iy(a => rV(iy(o => {
                    let s = i_(o);
                    if (!s || r3(s, t, n, r, !0))
                        return;
                    let {currentTime: l, volume: u, muted: c, playbackRate: d} = s;
                    e({
                        type: a,
                        id: i.getId(s),
                        currentTime: l,
                        volume: u,
                        muted: c,
                        playbackRate: d
                    })
                }
                ), o.media || 500))
                  , l = [rX("play", s(0), a), rX("pause", s(1), a), rX("seeked", s(2), a), rX("volumechange", s(3), a), rX("ratechange", s(4), a)];
                return iy( () => {
                    l.forEach(e => e())
                }
                )
            }(e)
              , c = () => {}
              , d = () => {}
              , p = () => {}
              , f = () => {}
            ;
            e.recordDOM && (c = function({styleSheetRuleCb: e, mirror: t, stylesheetManager: n}, {win: r}) {
                let i, o;
                if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype)
                    return () => {}
                    ;
                let a = r.CSSStyleSheet.prototype.insertRule;
                r.CSSStyleSheet.prototype.insertRule = new Proxy(a,{
                    apply: iy( (r, i, o) => {
                        let[a,s] = o
                          , {id: l, styleId: u} = iO(i, t, n.styleMirror);
                        return (l && -1 !== l || u && -1 !== u) && e({
                            id: l,
                            styleId: u,
                            adds: [{
                                rule: a,
                                index: s
                            }]
                        }),
                        r.apply(i, o)
                    }
                    )
                });
                let s = r.CSSStyleSheet.prototype.deleteRule;
                r.CSSStyleSheet.prototype.deleteRule = new Proxy(s,{
                    apply: iy( (r, i, o) => {
                        let[a] = o
                          , {id: s, styleId: l} = iO(i, t, n.styleMirror);
                        return (s && -1 !== s || l && -1 !== l) && e({
                            id: s,
                            styleId: l,
                            removes: [{
                                index: a
                            }]
                        }),
                        r.apply(i, o)
                    }
                    )
                }),
                r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace,
                r.CSSStyleSheet.prototype.replace = new Proxy(i,{
                    apply: iy( (r, i, o) => {
                        let[a] = o
                          , {id: s, styleId: l} = iO(i, t, n.styleMirror);
                        return (s && -1 !== s || l && -1 !== l) && e({
                            id: s,
                            styleId: l,
                            replace: a
                        }),
                        r.apply(i, o)
                    }
                    )
                })),
                r.CSSStyleSheet.prototype.replaceSync && (o = r.CSSStyleSheet.prototype.replaceSync,
                r.CSSStyleSheet.prototype.replaceSync = new Proxy(o,{
                    apply: iy( (r, i, o) => {
                        let[a] = o
                          , {id: s, styleId: l} = iO(i, t, n.styleMirror);
                        return (s && -1 !== s || l && -1 !== l) && e({
                            id: s,
                            styleId: l,
                            replaceSync: a
                        }),
                        r.apply(i, o)
                    }
                    )
                }));
                let l = {};
                iI("CSSGroupingRule") ? l.CSSGroupingRule = r.CSSGroupingRule : (iI("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule),
                iI("CSSConditionRule") && (l.CSSConditionRule = r.CSSConditionRule),
                iI("CSSSupportsRule") && (l.CSSSupportsRule = r.CSSSupportsRule));
                let u = {};
                return Object.entries(l).forEach( ([r,i]) => {
                    u[r] = {
                        insertRule: i.prototype.insertRule,
                        deleteRule: i.prototype.deleteRule
                    },
                    i.prototype.insertRule = new Proxy(u[r].insertRule,{
                        apply: iy( (r, i, o) => {
                            let[a,s] = o
                              , {id: l, styleId: u} = iO(i.parentStyleSheet, t, n.styleMirror);
                            return (l && -1 !== l || u && -1 !== u) && e({
                                id: l,
                                styleId: u,
                                adds: [{
                                    rule: a,
                                    index: [...ik(i), s || 0]
                                }]
                            }),
                            r.apply(i, o)
                        }
                        )
                    }),
                    i.prototype.deleteRule = new Proxy(u[r].deleteRule,{
                        apply: iy( (r, i, o) => {
                            let[a] = o
                              , {id: s, styleId: l} = iO(i.parentStyleSheet, t, n.styleMirror);
                            return (s && -1 !== s || l && -1 !== l) && e({
                                id: s,
                                styleId: l,
                                removes: [{
                                    index: [...ik(i), a]
                                }]
                            }),
                            r.apply(i, o)
                        }
                        )
                    })
                }
                ),
                iy( () => {
                    r.CSSStyleSheet.prototype.insertRule = a,
                    r.CSSStyleSheet.prototype.deleteRule = s,
                    i && (r.CSSStyleSheet.prototype.replace = i),
                    o && (r.CSSStyleSheet.prototype.replaceSync = o),
                    Object.entries(l).forEach( ([e,t]) => {
                        t.prototype.insertRule = u[e].insertRule,
                        t.prototype.deleteRule = u[e].deleteRule
                    }
                    )
                }
                )
            }(e, {
                win: r
            }),
            d = iC(e, e.doc),
            p = function({styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r}, {win: i}) {
                let o = i.CSSStyleDeclaration.prototype.setProperty;
                i.CSSStyleDeclaration.prototype.setProperty = new Proxy(o,{
                    apply: iy( (i, a, s) => {
                        let[l,u,c] = s;
                        if (n.has(l))
                            return o.apply(a, [l, u, c]);
                        let {id: d, styleId: p} = iO(iv([a, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, r.styleMirror);
                        return (d && -1 !== d || p && -1 !== p) && e({
                            id: d,
                            styleId: p,
                            set: {
                                property: l,
                                value: u,
                                priority: c
                            },
                            index: ik(a.parentRule)
                        }),
                        i.apply(a, s)
                    }
                    )
                });
                let a = i.CSSStyleDeclaration.prototype.removeProperty;
                return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(a,{
                    apply: iy( (i, o, s) => {
                        let[l] = s;
                        if (n.has(l))
                            return a.apply(o, [l]);
                        let {id: u, styleId: c} = iO(iv([o, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, r.styleMirror);
                        return (u && -1 !== u || c && -1 !== c) && e({
                            id: u,
                            styleId: c,
                            remove: {
                                property: l
                            },
                            index: ik(o.parentRule)
                        }),
                        i.apply(o, s)
                    }
                    )
                }),
                iy( () => {
                    i.CSSStyleDeclaration.prototype.setProperty = o,
                    i.CSSStyleDeclaration.prototype.removeProperty = a
                }
                )
            }(e, {
                win: r
            }),
            e.collectFonts && (f = function({fontCb: e, doc: t}) {
                let n = t.defaultView;
                if (!n)
                    return () => {}
                    ;
                let r = []
                  , i = new WeakMap
                  , o = n.FontFace;
                n.FontFace = function(e, t, n) {
                    let r = new o(e,t,n);
                    return i.set(r, {
                        family: e,
                        buffer: "string" != typeof t,
                        descriptors: n,
                        fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                    }),
                    r
                }
                ;
                let a = rY(t.fonts, "add", function(t) {
                    return function(n) {
                        return io(iy( () => {
                            let t = i.get(n);
                            t && (e(t),
                            i.delete(n))
                        }
                        ), 0),
                        t.apply(this, [n])
                    }
                });
                return r.push( () => {
                    n.FontFace = o
                }
                ),
                r.push(a),
                iy( () => {
                    r.forEach(e => e())
                }
                )
            }(e)));
            let h = function(e) {
                let {doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: o, selectionCb: a} = e
                  , s = !0
                  , l = iy( () => {
                    let e = t.getSelection();
                    if (!e || s && iv([e, "optionalAccess", e => e.isCollapsed]))
                        return;
                    s = e.isCollapsed || !1;
                    let l = []
                      , u = e.rangeCount || 0;
                    for (let t = 0; t < u; t++) {
                        let {startContainer: a, startOffset: s, endContainer: u, endOffset: c} = e.getRangeAt(t);
                        r3(a, r, i, o, !0) || r3(u, r, i, o, !0) || l.push({
                            start: n.getId(a),
                            startOffset: s,
                            end: n.getId(u),
                            endOffset: c
                        })
                    }
                    a({
                        ranges: l
                    })
                }
                );
                return l(),
                rX("selectionchange", l)
            }(e)
              , m = function({doc: e, customElementCb: t}) {
                let n = e.defaultView;
                return n && n.customElements ? rY(n.customElements, "define", function(e) {
                    return function(n, r, i) {
                        try {
                            t({
                                define: {
                                    name: n
                                }
                            })
                        } catch (e) {}
                        return e.apply(this, [n, r, i])
                    }
                }) : () => {}
            }(e)
              , g = [];
            for (let t of e.plugins)
                g.push(t.observer(t.callback, r, t.options));
            return iy( () => {
                ib.forEach(e => e.reset()),
                iv([n, "optionalAccess", e => e.disconnect, "call", e => e()]),
                i(),
                o(),
                a(),
                s(),
                l(),
                u(),
                c(),
                d(),
                p(),
                f(),
                h(),
                m(),
                g.forEach(e => e())
            }
            )
        }
        function iR(e) {
            return void 0 !== window[e]
        }
        function iI(e) {
            return !!(void 0 !== window[e] && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
        }
        class iM {
            constructor(e) {
                this.generateIdFn = e,
                this.iframeIdToRemoteIdMap = new WeakMap,
                this.iframeRemoteIdToIdMap = new WeakMap
            }
            getId(e, t, n, r) {
                let i = n || this.getIdToRemoteIdMap(e)
                  , o = r || this.getRemoteIdToIdMap(e)
                  , a = i.get(t);
                return a || (a = this.generateIdFn(),
                i.set(t, a),
                o.set(a, t)),
                a
            }
            getIds(e, t) {
                let n = this.getIdToRemoteIdMap(e)
                  , r = this.getRemoteIdToIdMap(e);
                return t.map(t => this.getId(e, t, n, r))
            }
            getRemoteId(e, t, n) {
                let r = n || this.getRemoteIdToIdMap(e);
                return "number" != typeof t ? t : r.get(t) || -1
            }
            getRemoteIds(e, t) {
                let n = this.getRemoteIdToIdMap(e);
                return t.map(t => this.getRemoteId(e, t, n))
            }
            reset(e) {
                if (!e) {
                    this.iframeIdToRemoteIdMap = new WeakMap,
                    this.iframeRemoteIdToIdMap = new WeakMap;
                    return
                }
                this.iframeIdToRemoteIdMap.delete(e),
                this.iframeRemoteIdToIdMap.delete(e)
            }
            getIdToRemoteIdMap(e) {
                let t = this.iframeIdToRemoteIdMap.get(e);
                return t || (t = new Map,
                this.iframeIdToRemoteIdMap.set(e, t)),
                t
            }
            getRemoteIdToIdMap(e) {
                let t = this.iframeRemoteIdToIdMap.get(e);
                return t || (t = new Map,
                this.iframeRemoteIdToIdMap.set(e, t)),
                t
            }
        }
        function iA(e) {
            let t;
            let n = e[0]
              , r = 1;
            for (; r < e.length; ) {
                let i = e[r]
                  , o = e[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (t = n,
                n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o( (...e) => n.call(t, ...e)),
                t = void 0)
            }
            return n
        }
        class iD {
            constructor() {
                this.crossOriginIframeMirror = new iM(rR),
                this.crossOriginIframeRootIdMap = new WeakMap
            }
            addIframe() {}
            addLoadListener() {}
            attachIframe() {}
        }
        class iL {
            constructor(e) {
                this.iframes = new WeakMap,
                this.crossOriginIframeMap = new WeakMap,
                this.crossOriginIframeMirror = new iM(rR),
                this.crossOriginIframeRootIdMap = new WeakMap,
                this.mutationCb = e.mutationCb,
                this.wrappedEmit = e.wrappedEmit,
                this.stylesheetManager = e.stylesheetManager,
                this.recordCrossOriginIframes = e.recordCrossOriginIframes,
                this.crossOriginIframeStyleMirror = new iM(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
                this.mirror = e.mirror,
                this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
            }
            addIframe(e) {
                this.iframes.set(e, !0),
                e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
            }
            addLoadListener(e) {
                this.loadListener = e
            }
            attachIframe(e, t) {
                this.mutationCb({
                    adds: [{
                        parentId: this.mirror.getId(e),
                        nextId: null,
                        node: t
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                }),
                iA([this, "access", e => e.loadListener, "optionalCall", t => t(e)]),
                e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
            }
            handleMessage(e) {
                if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source)
                    return;
                let t = this.crossOriginIframeMap.get(e.source);
                if (!t)
                    return;
                let n = this.transformCrossOriginEvent(t, e.data.event);
                n && this.wrappedEmit(n, e.data.isCheckout)
            }
            transformCrossOriginEvent(e, t) {
                switch (t.type) {
                case ia.FullSnapshot:
                    {
                        this.crossOriginIframeMirror.reset(e),
                        this.crossOriginIframeStyleMirror.reset(e),
                        this.replaceIdOnNode(t.data.node, e);
                        let n = t.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(e, n),
                        this.patchRootIdOnNode(t.data.node, n),
                        {
                            timestamp: t.timestamp,
                            type: ia.IncrementalSnapshot,
                            data: {
                                source: is.Mutation,
                                adds: [{
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        }
                    }
                case ia.Meta:
                case ia.Load:
                case ia.DomContentLoaded:
                    break;
                case ia.Plugin:
                    return t;
                case ia.Custom:
                    return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]),
                    t;
                case ia.IncrementalSnapshot:
                    switch (t.data.source) {
                    case is.Mutation:
                        return t.data.adds.forEach(t => {
                            this.replaceIds(t, e, ["parentId", "nextId", "previousId"]),
                            this.replaceIdOnNode(t.node, e);
                            let n = this.crossOriginIframeRootIdMap.get(e);
                            n && this.patchRootIdOnNode(t.node, n)
                        }
                        ),
                        t.data.removes.forEach(t => {
                            this.replaceIds(t, e, ["parentId", "id"])
                        }
                        ),
                        t.data.attributes.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        ),
                        t.data.texts.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        ),
                        t;
                    case is.Drag:
                    case is.TouchMove:
                    case is.MouseMove:
                        return t.data.positions.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        ),
                        t;
                    case is.ViewportResize:
                        return !1;
                    case is.MediaInteraction:
                    case is.MouseInteraction:
                    case is.Scroll:
                    case is.CanvasMutation:
                    case is.Input:
                        return this.replaceIds(t.data, e, ["id"]),
                        t;
                    case is.StyleSheetRule:
                    case is.StyleDeclaration:
                        return this.replaceIds(t.data, e, ["id"]),
                        this.replaceStyleIds(t.data, e, ["styleId"]),
                        t;
                    case is.Font:
                        return t;
                    case is.Selection:
                        return t.data.ranges.forEach(t => {
                            this.replaceIds(t, e, ["start", "end"])
                        }
                        ),
                        t;
                    case is.AdoptedStyleSheet:
                        return this.replaceIds(t.data, e, ["id"]),
                        this.replaceStyleIds(t.data, e, ["styleIds"]),
                        iA([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t(t => {
                            this.replaceStyleIds(t, e, ["styleId"])
                        }
                        )]),
                        t
                    }
                }
                return !1
            }
            replace(e, t, n, r) {
                for (let i of r)
                    (Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(n, t[i]) : t[i] = e.getId(n, t[i]));
                return t
            }
            replaceIds(e, t, n) {
                return this.replace(this.crossOriginIframeMirror, e, t, n)
            }
            replaceStyleIds(e, t, n) {
                return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
            }
            replaceIdOnNode(e, t) {
                this.replaceIds(e, t, ["id", "rootId"]),
                "childNodes"in e && e.childNodes.forEach(e => {
                    this.replaceIdOnNode(e, t)
                }
                )
            }
            patchRootIdOnNode(e, t) {
                e.type === T.Document || e.rootId || (e.rootId = t),
                "childNodes"in e && e.childNodes.forEach(e => {
                    this.patchRootIdOnNode(e, t)
                }
                )
            }
        }
        class iP {
            init() {}
            addShadowRoot() {}
            observeAttachShadow() {}
            reset() {}
        }
        class iN {
            constructor(e) {
                this.shadowDoms = new WeakSet,
                this.restoreHandlers = [],
                this.mutationCb = e.mutationCb,
                this.scrollCb = e.scrollCb,
                this.bypassOptions = e.bypassOptions,
                this.mirror = e.mirror,
                this.init()
            }
            init() {
                this.reset(),
                this.patchAttachShadow(Element, document)
            }
            addShadowRoot(e, t) {
                if (!rd(e) || this.shadowDoms.has(e))
                    return;
                this.shadowDoms.add(e),
                this.bypassOptions.canvasManager.addShadowRoot(e);
                let n = iS({
                    ...this.bypassOptions,
                    doc: t,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }, e);
                this.restoreHandlers.push( () => n.disconnect()),
                this.restoreHandlers.push(iw({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror
                })),
                io( () => {
                    e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)),
                    this.restoreHandlers.push(iC({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, e))
                }
                , 0)
            }
            observeAttachShadow(e) {
                e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
            }
            patchAttachShadow(e, t) {
                let n = this;
                this.restoreHandlers.push(rY(e.prototype, "attachShadow", function(e) {
                    return function(r) {
                        let i = e.call(this, r);
                        return this.shadowRoot && it(this) && n.addShadowRoot(this.shadowRoot, t),
                        i
                    }
                }))
            }
            reset() {
                this.restoreHandlers.forEach(e => {
                    try {
                        e()
                    } catch (e) {}
                }
                ),
                this.restoreHandlers = [],
                this.shadowDoms = new WeakSet,
                this.bypassOptions.canvasManager.resetShadowRoots()
            }
        }
        class ij {
            reset() {}
            freeze() {}
            unfreeze() {}
            lock() {}
            unlock() {}
            snapshot() {}
            addWindow() {}
            addShadowRoot() {}
            resetShadowRoots() {}
        }
        class iB {
            constructor(e) {
                this.trackedLinkElements = new WeakSet,
                this.styleMirror = new r7,
                this.mutationCb = e.mutationCb,
                this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
            }
            attachLinkElement(e, t) {
                "_cssText"in t.attributes && this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [{
                        id: t.id,
                        attributes: t.attributes
                    }]
                }),
                this.trackLinkElement(e)
            }
            trackLinkElement(e) {
                this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e),
                this.trackStylesheetInLinkElement(e))
            }
            adoptStyleSheets(e, t) {
                if (0 === e.length)
                    return;
                let n = {
                    id: t,
                    styleIds: []
                }
                  , r = [];
                for (let t of e) {
                    let e;
                    this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t),
                    r.push({
                        styleId: e,
                        rules: Array.from(t.rules || CSSRule, (e, t) => ({
                            rule: rf(e),
                            index: t
                        }))
                    })),
                    n.styleIds.push(e)
                }
                r.length > 0 && (n.styles = r),
                this.adoptedStyleSheetCb(n)
            }
            reset() {
                this.styleMirror.reset(),
                this.trackedLinkElements = new WeakSet
            }
            trackStylesheetInLinkElement(e) {}
        }
        class iU {
            constructor() {
                this.nodeMap = new WeakMap,
                this.loop = !0,
                this.periodicallyClear()
            }
            periodicallyClear() {
                !function(...e) {
                    ii("requestAnimationFrame")(...e)
                }( () => {
                    this.clear(),
                    this.loop && this.periodicallyClear()
                }
                )
            }
            inOtherBuffer(e, t) {
                let n = this.nodeMap.get(e);
                return n && Array.from(n).some(e => e !== t)
            }
            add(e, t) {
                this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
            }
            clear() {
                this.nodeMap = new WeakMap
            }
            destroy() {
                this.loop = !1
            }
        }
        try {
            if (2 !== Array.from([1], e => 2 * e)[0]) {
                let e = document.createElement("iframe");
                document.body.appendChild(e),
                Array.from = (0,
                n0.x)([e, "access", e => e.contentWindow, "optionalAccess", e => e.Array, "access", e => e.from]) || Array.from,
                document.body.removeChild(e)
            }
        } catch (e) {
            console.debug("Unable to override Array.from", e)
        }
        let i$ = new rh;
        function iW(e={}) {
            let t;
            let {emit: n, checkoutEveryNms: r, checkoutEveryNth: i, blockClass: o="rr-block", blockSelector: a=null, unblockSelector: s=null, ignoreClass: l="rr-ignore", ignoreSelector: u=null, maskAllText: c=!1, maskTextClass: d="rr-mask", unmaskTextClass: p=null, maskTextSelector: f=null, unmaskTextSelector: h=null, inlineStylesheet: m=!0, maskAllInputs: g, maskInputOptions: y, slimDOMOptions: S, maskAttributeFn: w, maskInputFn: E, maskTextFn: x, maxCanvasSize: k=null, packFn: O, sampling: C={}, dataURLOptions: T={}, mousemoveWait: R, recordDOM: I=!0, recordCanvas: M=!1, recordCrossOriginIframes: A=!1, recordAfter: D="DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load", userTriggeredOnInput: L=!1, collectFonts: P=!1, inlineImages: N=!1, plugins: j, keepIframeSrcFn: B= () => !1, ignoreCSSAttributes: U=new Set([]), errorHandler: $, onMutation: W, getCanvasManager: F} = e;
            v = $;
            let z = !A || window.parent === window
              , H = !1;
            if (!z)
                try {
                    window.parent.document && (H = !1)
                } catch (e) {
                    H = !0
                }
            if (z && !n)
                throw Error("emit function is required");
            void 0 !== R && void 0 === C.mousemove && (C.mousemove = R),
            i$.reset();
            let q = !0 === g ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== y ? y : {}
              , Z = !0 === S || "all" === S ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === S,
                headMetaDescKeywords: "all" === S
            } : S || {};
            !function(e=window) {
                "NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
                "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
                Node.prototype.contains || (Node.prototype.contains = (...e) => {
                    let t = e[0];
                    if (!(0 in e))
                        throw TypeError("1 argument is required");
                    do
                        if (this === t)
                            return !0;
                    while (t = t && t.parentNode);
                    return !1
                }
                )
            }();
            let X = 0
              , J = e => {
                for (let t of j || [])
                    t.eventProcessor && (e = t.eventProcessor(e));
                return O && !H && (e = O(e)),
                e
            }
            ;
            b = (e, o) => {
                if (e.timestamp = rK(),
                (0,
                n0.x)([ib, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) && e.type !== ia.FullSnapshot && !(e.type === ia.IncrementalSnapshot && e.data.source === is.Mutation) && ib.forEach(e => e.unfreeze()),
                z)
                    (0,
                    n0.x)([n, "optionalCall", t => t(J(e), o)]);
                else if (H) {
                    let t = {
                        type: "rrweb",
                        event: J(e),
                        origin: window.location.origin,
                        isCheckout: o
                    };
                    window.parent.postMessage(t, "*")
                }
                if (e.type === ia.FullSnapshot)
                    t = e,
                    X = 0;
                else if (e.type === ia.IncrementalSnapshot) {
                    if (e.data.source === is.Mutation && e.data.isAttachIframe)
                        return;
                    X++;
                    let n = i && X >= i
                      , o = r && t && e.timestamp - t.timestamp > r;
                    (n || o) && er(!0)
                }
            }
            ;
            let G = e => {
                b({
                    type: ia.IncrementalSnapshot,
                    data: {
                        source: is.Mutation,
                        ...e
                    }
                })
            }
              , V = e => b({
                type: ia.IncrementalSnapshot,
                data: {
                    source: is.Scroll,
                    ...e
                }
            })
              , Y = e => b({
                type: ia.IncrementalSnapshot,
                data: {
                    source: is.CanvasMutation,
                    ...e
                }
            })
              , K = new iB({
                mutationCb: G,
                adoptedStyleSheetCb: e => b({
                    type: ia.IncrementalSnapshot,
                    data: {
                        source: is.AdoptedStyleSheet,
                        ...e
                    }
                })
            })
              , Q = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new iD : new iL({
                mirror: i$,
                mutationCb: G,
                stylesheetManager: K,
                recordCrossOriginIframes: A,
                wrappedEmit: b
            });
            for (let e of j || [])
                e.getMirror && e.getMirror({
                    nodeMirror: i$,
                    crossOriginIframeMirror: Q.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: Q.crossOriginIframeStyleMirror
                });
            let ee = new iU
              , et = function(e, t) {
                try {
                    return e ? e(t) : new ij
                } catch (e) {
                    return console.warn("Unable to initialize CanvasManager"),
                    new ij
                }
            }(F, {
                mirror: i$,
                win: window,
                mutationCb: e => b({
                    type: ia.IncrementalSnapshot,
                    data: {
                        source: is.CanvasMutation,
                        ...e
                    }
                }),
                recordCanvas: M,
                blockClass: o,
                blockSelector: a,
                unblockSelector: s,
                maxCanvasSize: k,
                sampling: C.canvas,
                dataURLOptions: T,
                errorHandler: $
            })
              , en = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new iP : new iN({
                mutationCb: G,
                scrollCb: V,
                bypassOptions: {
                    onMutation: W,
                    blockClass: o,
                    blockSelector: a,
                    unblockSelector: s,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    inlineStylesheet: m,
                    maskInputOptions: q,
                    dataURLOptions: T,
                    maskAttributeFn: w,
                    maskTextFn: x,
                    maskInputFn: E,
                    recordCanvas: M,
                    inlineImages: N,
                    sampling: C,
                    slimDOMOptions: Z,
                    iframeManager: Q,
                    stylesheetManager: K,
                    canvasManager: et,
                    keepIframeSrcFn: B,
                    processedNodeManager: ee
                },
                mirror: i$
            })
              , er = (e=!1) => {
                if (!I)
                    return;
                b({
                    type: ia.Meta,
                    data: {
                        href: window.location.href,
                        width: r1(),
                        height: r0()
                    }
                }, e),
                K.reset(),
                en.init(),
                ib.forEach(e => e.lock());
                let t = function(e, t) {
                    let {mirror: n=new rh, blockClass: r="rr-block", blockSelector: i=null, unblockSelector: o=null, maskAllText: a=!1, maskTextClass: s="rr-mask", unmaskTextClass: l=null, maskTextSelector: u=null, unmaskTextSelector: c=null, inlineStylesheet: d=!0, inlineImages: p=!1, recordCanvas: f=!1, maskAllInputs: h=!1, maskAttributeFn: m, maskTextFn: g, maskInputFn: y, slimDOM: v=!1, dataURLOptions: b, preserveWhiteSpace: _, onSerialize: S, onIframeLoad: w, iframeLoadTimeout: E, onStylesheetLoad: x, stylesheetLoadTimeout: k, keepIframeSrcFn: O= () => !1} = t || {};
                    return rq(e, {
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        unblockSelector: o,
                        maskAllText: a,
                        maskTextClass: s,
                        unmaskTextClass: l,
                        maskTextSelector: u,
                        unmaskTextSelector: c,
                        skipChild: !1,
                        inlineStylesheet: d,
                        maskInputOptions: !0 === h ? {
                            color: !0,
                            date: !0,
                            "datetime-local": !0,
                            email: !0,
                            month: !0,
                            number: !0,
                            range: !0,
                            search: !0,
                            tel: !0,
                            text: !0,
                            time: !0,
                            url: !0,
                            week: !0,
                            textarea: !0,
                            select: !0
                        } : !1 === h ? {} : h,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: y,
                        slimDOMOptions: !0 === v || "all" === v ? {
                            script: !0,
                            comment: !0,
                            headFavicon: !0,
                            headWhitespace: !0,
                            headMetaDescKeywords: "all" === v,
                            headMetaSocial: !0,
                            headMetaRobots: !0,
                            headMetaHttpEquiv: !0,
                            headMetaAuthorship: !0,
                            headMetaVerification: !0
                        } : !1 === v ? {} : v,
                        dataURLOptions: b,
                        inlineImages: p,
                        recordCanvas: f,
                        preserveWhiteSpace: _,
                        onSerialize: S,
                        onIframeLoad: w,
                        iframeLoadTimeout: E,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: k,
                        keepIframeSrcFn: O,
                        newlyAddedElement: !1
                    })
                }(document, {
                    mirror: i$,
                    blockClass: o,
                    blockSelector: a,
                    unblockSelector: s,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    inlineStylesheet: m,
                    maskAllInputs: q,
                    maskAttributeFn: w,
                    maskInputFn: E,
                    maskTextFn: x,
                    slimDOM: Z,
                    dataURLOptions: T,
                    recordCanvas: M,
                    inlineImages: N,
                    onSerialize: e => {
                        r6(e, i$) && Q.addIframe(e),
                        r8(e, i$) && K.trackLinkElement(e),
                        r9(e) && en.addShadowRoot(e.shadowRoot, document)
                    }
                    ,
                    onIframeLoad: (e, t) => {
                        Q.attachIframe(e, t),
                        e.contentWindow && et.addWindow(e.contentWindow),
                        en.observeAttachShadow(e)
                    }
                    ,
                    onStylesheetLoad: (e, t) => {
                        K.attachLinkElement(e, t)
                    }
                    ,
                    keepIframeSrcFn: B
                });
                if (!t)
                    return console.warn("Failed to snapshot the document");
                b({
                    type: ia.FullSnapshot,
                    data: {
                        node: t,
                        initialOffset: rQ(window)
                    }
                }),
                ib.forEach(e => e.unlock()),
                document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && K.adoptStyleSheets(document.adoptedStyleSheets, i$.getId(document))
            }
            ;
            _ = er;
            try {
                let e = []
                  , t = e => iy(iT)({
                    onMutation: W,
                    mutationCb: G,
                    mousemoveCb: (e, t) => b({
                        type: ia.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => b({
                        type: ia.IncrementalSnapshot,
                        data: {
                            source: is.MouseInteraction,
                            ...e
                        }
                    }),
                    scrollCb: V,
                    viewportResizeCb: e => b({
                        type: ia.IncrementalSnapshot,
                        data: {
                            source: is.ViewportResize,
                            ...e
                        }
                    }),
                    inputCb: e => b({
                        type: ia.IncrementalSnapshot,
                        data: {
                            source: is.Input,
                            ...e
                        }
                    }),
                    mediaInteractionCb: e => b({
                        type: ia.IncrementalSnapshot,
                        data: {
                            source: is.MediaInteraction,
                            ...e
                        }
                    }),
                    styleSheetRuleCb: e => b({
                        type: ia.IncrementalSnapshot,
                        data: {
                            source: is.StyleSheetRule,
                            ...e
                        }
                    }),
                    styleDeclarationCb: e => b({
                        type: ia.IncrementalSnapshot,
                        data: {
                            source: is.StyleDeclaration,
                            ...e
                        }
                    }),
                    canvasMutationCb: Y,
                    fontCb: e => b({
                        type: ia.IncrementalSnapshot,
                        data: {
                            source: is.Font,
                            ...e
                        }
                    }),
                    selectionCb: e => {
                        b({
                            type: ia.IncrementalSnapshot,
                            data: {
                                source: is.Selection,
                                ...e
                            }
                        })
                    }
                    ,
                    customElementCb: e => {
                        b({
                            type: ia.IncrementalSnapshot,
                            data: {
                                source: is.CustomElement,
                                ...e
                            }
                        })
                    }
                    ,
                    blockClass: o,
                    ignoreClass: l,
                    ignoreSelector: u,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    maskInputOptions: q,
                    inlineStylesheet: m,
                    sampling: C,
                    recordDOM: I,
                    recordCanvas: M,
                    inlineImages: N,
                    userTriggeredOnInput: L,
                    collectFonts: P,
                    doc: e,
                    maskAttributeFn: w,
                    maskInputFn: E,
                    maskTextFn: x,
                    keepIframeSrcFn: B,
                    blockSelector: a,
                    unblockSelector: s,
                    slimDOMOptions: Z,
                    dataURLOptions: T,
                    mirror: i$,
                    iframeManager: Q,
                    stylesheetManager: K,
                    shadowDomManager: en,
                    processedNodeManager: ee,
                    canvasManager: et,
                    ignoreCSSAttributes: U,
                    plugins: (0,
                    n0.x)([j, "optionalAccess", e => e.filter, "call", e => e(e => e.observer), "optionalAccess", e => e.map, "call", e => e(e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => b({
                            type: ia.Plugin,
                            data: {
                                plugin: e.name,
                                payload: t
                            }
                        })
                    }))]) || []
                }, {});
                Q.addLoadListener(n => {
                    try {
                        e.push(t(n.contentDocument))
                    } catch (e) {
                        console.warn(e)
                    }
                }
                );
                let n = () => {
                    er(),
                    e.push(t(document))
                }
                ;
                return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(rX("DOMContentLoaded", () => {
                    b({
                        type: ia.DomContentLoaded,
                        data: {}
                    }),
                    "DOMContentLoaded" === D && n()
                }
                )),
                e.push(rX("load", () => {
                    b({
                        type: ia.Load,
                        data: {}
                    }),
                    "load" === D && n()
                }
                , window))),
                () => {
                    e.forEach(e => e()),
                    ee.destroy(),
                    _ = void 0,
                    v = void 0
                }
            } catch (e) {
                console.warn(e)
            }
        }
        function iF(e) {
            return e > 9999999999 ? e : 1e3 * e
        }
        function iz(e) {
            return e > 9999999999 ? e / 1e3 : e
        }
        function iH(e, t) {
            "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
            e.addUpdate( () => (e.throttledAddEvent({
                type: ia.Custom,
                timestamp: 1e3 * (t.timestamp || 0),
                data: {
                    tag: "breadcrumb",
                    payload: (0,
                    eC.Fv)(t, 10, 1e3)
                }
            }),
            "console" === t.category)))
        }
        function iq(e) {
            return e.closest("button,a") || e
        }
        function iZ(e) {
            let t = iX(e);
            return t && t instanceof Element ? iq(t) : t
        }
        function iX(e) {
            return "object" == typeof e && e && "target"in e ? e.target : e
        }
        iW.mirror = i$,
        iW.takeFullSnapshot = function(e) {
            if (!_)
                throw Error("please take full snapshot after start recording");
            _(e)
        }
        ;
        class iJ {
            constructor(e, t, n=iH) {
                this._lastMutation = 0,
                this._lastScroll = 0,
                this._clicks = [],
                this._timeout = t.timeout / 1e3,
                this._threshold = t.threshold / 1e3,
                this._scollTimeout = t.scrollTimeout / 1e3,
                this._replay = e,
                this._ignoreSelector = t.ignoreSelector,
                this._addBreadcrumbEvent = n
            }
            addListeners() {
                var e;
                let t = (e = () => {
                    this._lastMutation = iV()
                }
                ,
                S || (S = [],
                (0,
                H.hl)(ro, "open", function(e) {
                    return function(...t) {
                        if (S)
                            try {
                                S.forEach(e => e())
                            } catch (e) {}
                        return e.apply(ro, t)
                    }
                })),
                S.push(e),
                () => {
                    let t = S ? S.indexOf(e) : -1;
                    t > -1 && S.splice(t, 1)
                }
                );
                this._teardown = () => {
                    t(),
                    this._clicks = [],
                    this._lastMutation = 0,
                    this._lastScroll = 0
                }
            }
            removeListeners() {
                this._teardown && this._teardown(),
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
            }
            handleClick(e, t) {
                var n;
                if (n = this._ignoreSelector,
                !iG.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || n && t.matches(n) || !(e.data && "number" == typeof e.data.nodeId && e.timestamp))
                    return;
                let r = {
                    timestamp: iz(e.timestamp),
                    clickBreadcrumb: e,
                    clickCount: 0,
                    node: t
                };
                this._clicks.some(e => e.node === r.node && 1 > Math.abs(e.timestamp - r.timestamp)) || (this._clicks.push(r),
                1 === this._clicks.length && this._scheduleCheckClicks())
            }
            registerMutation(e=Date.now()) {
                this._lastMutation = iz(e)
            }
            registerScroll(e=Date.now()) {
                this._lastScroll = iz(e)
            }
            registerClick(e) {
                let t = iq(e);
                this._handleMultiClick(t)
            }
            _handleMultiClick(e) {
                this._getClicks(e).forEach(e => {
                    e.clickCount++
                }
                )
            }
            _getClicks(e) {
                return this._clicks.filter(t => t.node === e)
            }
            _checkClicks() {
                let e = []
                  , t = iV();
                for (let n of (this._clicks.forEach(n => {
                    !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0),
                    !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0),
                    n.timestamp + this._timeout <= t && e.push(n)
                }
                ),
                e)) {
                    let e = this._clicks.indexOf(n);
                    e > -1 && (this._generateBreadcrumbs(n),
                    this._clicks.splice(e, 1))
                }
                this._clicks.length && this._scheduleCheckClicks()
            }
            _generateBreadcrumbs(e) {
                let t = this._replay
                  , n = e.scrollAfter && e.scrollAfter <= this._scollTimeout
                  , r = e.mutationAfter && e.mutationAfter <= this._threshold
                  , {clickCount: i, clickBreadcrumb: o} = e;
                if (!n && !r) {
                    let n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout)
                      , r = n < 1e3 * this._timeout ? "mutation" : "timeout"
                      , a = {
                        type: "default",
                        message: o.message,
                        timestamp: o.timestamp,
                        category: "ui.slowClickDetected",
                        data: {
                            ...o.data,
                            url: ro.location.href,
                            route: t.getCurrentRoute(),
                            timeAfterClickMs: n,
                            endReason: r,
                            clickCount: i || 1
                        }
                    };
                    this._addBreadcrumbEvent(t, a);
                    return
                }
                if (i > 1) {
                    let e = {
                        type: "default",
                        message: o.message,
                        timestamp: o.timestamp,
                        category: "ui.multiClick",
                        data: {
                            ...o.data,
                            url: ro.location.href,
                            route: t.getCurrentRoute(),
                            clickCount: i,
                            metric: !0
                        }
                    };
                    this._addBreadcrumbEvent(t, e)
                }
            }
            _scheduleCheckClicks() {
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
                this._checkClickTimeout = t_( () => this._checkClicks(), 1e3)
            }
        }
        let iG = ["A", "BUTTON", "INPUT"];
        function iV() {
            return Date.now() / 1e3
        }
        function iY(e) {
            return {
                timestamp: Date.now() / 1e3,
                type: "default",
                ...e
            }
        }
        (C = R || (R = {}))[C.Document = 0] = "Document",
        C[C.DocumentType = 1] = "DocumentType",
        C[C.Element = 2] = "Element",
        C[C.Text = 3] = "Text",
        C[C.CDATA = 4] = "CDATA",
        C[C.Comment = 5] = "Comment";
        let iK = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"])
          , iQ = e => t => {
            if (!e.isEnabled())
                return;
            let n = function(e) {
                let {target: t, message: n} = function(e) {
                    let t;
                    let n = "click" === e.name
                      , r = null;
                    try {
                        r = n ? iZ(e.event) : iX(e.event),
                        t = (0,
                        eV.Rt)(r, {
                            maxStringLength: 200
                        }) || "<unknown>"
                    } catch (e) {
                        t = "<unknown>"
                    }
                    return {
                        target: r,
                        message: t
                    }
                }(e);
                return iY({
                    category: `ui.${e.name}`,
                    ...i0(t, n)
                })
            }(t);
            if (!n)
                return;
            let r = "click" === t.name
              , i = r ? t.event : void 0;
            r && e.clickDetector && i && i.target && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && function(e, t, n) {
                e.handleClick(t, n)
            }(e.clickDetector, n, iZ(t.event)),
            iH(e, n)
        }
        ;
        function i0(e, t) {
            let n = iW.mirror.getId(e)
              , r = n && iW.mirror.getNode(n)
              , i = r && iW.mirror.getMeta(r)
              , o = i && i.type === R.Element ? i : null;
            return {
                message: t,
                data: o ? {
                    nodeId: n,
                    node: {
                        id: n,
                        tagName: o.tagName,
                        textContent: Array.from(o.childNodes).map(e => e.type === R.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                        attributes: function(e) {
                            let t = {};
                            for (let n in !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]),
                            e)
                                if (iK.has(n)) {
                                    let r = n;
                                    ("data-testid" === n || "data-test-id" === n) && (r = "testId"),
                                    t[r] = e[n]
                                }
                            return t
                        }(o.attributes)
                    }
                } : {}
            }
        }
        let i1 = {
            resource: function(e) {
                let {entryType: t, initiatorType: n, name: r, responseEnd: i, startTime: o, decodedBodySize: a, encodedBodySize: s, responseStatus: l, transferSize: u} = e;
                return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                    type: `${t}.${n}`,
                    start: i5(o),
                    end: i5(i),
                    name: r,
                    data: {
                        size: u,
                        statusCode: l,
                        decodedBodySize: a,
                        encodedBodySize: s
                    }
                }
            },
            paint: function(e) {
                let {duration: t, entryType: n, name: r, startTime: i} = e
                  , o = i5(i);
                return {
                    type: n,
                    name: r,
                    start: o,
                    end: o + t,
                    data: void 0
                }
            },
            navigation: function(e) {
                let {entryType: t, name: n, decodedBodySize: r, duration: i, domComplete: o, encodedBodySize: a, domContentLoadedEventStart: s, domContentLoadedEventEnd: l, domInteractive: u, loadEventStart: c, loadEventEnd: d, redirectCount: p, startTime: f, transferSize: h, type: m} = e;
                return 0 === i ? null : {
                    type: `${t}.${m}`,
                    start: i5(f),
                    end: i5(o),
                    name: n,
                    data: {
                        size: h,
                        decodedBodySize: r,
                        encodedBodySize: a,
                        duration: i,
                        domInteractive: u,
                        domContentLoadedEventStart: s,
                        domContentLoadedEventEnd: l,
                        loadEventStart: c,
                        loadEventEnd: d,
                        domComplete: o,
                        redirectCount: p
                    }
                }
            }
        };
        function i2(e, t) {
            return ({metric: n}) => void t.replayPerformanceEntries.push(e(n))
        }
        function i3(e) {
            let t = i1[e.entryType];
            return t ? t(e) : null
        }
        function i5(e) {
            return ((eO.Z1 || ro.performance.timeOrigin) + e) / 1e3
        }
        function i4(e) {
            let t = e.entries[e.entries.length - 1];
            return i7(e, "largest-contentful-paint", t ? t.element : void 0)
        }
        function i6(e) {
            let t = e.entries[0];
            return i7(e, "cumulative-layout-shift", t && t.sources && t.sources[0] ? t.sources[0].node : void 0)
        }
        function i8(e) {
            let t = e.entries[e.entries.length - 1];
            return i7(e, "first-input-delay", t ? t.target : void 0)
        }
        function i9(e) {
            let t = e.entries[e.entries.length - 1];
            return i7(e, "interaction-to-next-paint", t ? t.target : void 0)
        }
        function i7(e, t, n) {
            let r = e.value
              , i = e.rating
              , o = i5(r);
            return {
                type: "web-vital",
                name: t,
                start: o,
                end: o,
                data: {
                    value: r,
                    size: r,
                    rating: i,
                    nodeId: n ? iW.mirror.getId(n) : void 0
                }
            }
        }
        class oe extends Error {
            constructor() {
                super("Event buffer exceeded maximum size of 20000000.")
            }
        }
        class ot {
            constructor() {
                this.events = [],
                this._totalSize = 0,
                this.hasCheckout = !1
            }
            get hasEvents() {
                return this.events.length > 0
            }
            get type() {
                return "sync"
            }
            destroy() {
                this.events = []
            }
            async addEvent(e) {
                let t = JSON.stringify(e).length;
                if (this._totalSize += t,
                this._totalSize > 2e7)
                    throw new oe;
                this.events.push(e)
            }
            finish() {
                return new Promise(e => {
                    let t = this.events;
                    this.clear(),
                    e(JSON.stringify(t))
                }
                )
            }
            clear() {
                this.events = [],
                this._totalSize = 0,
                this.hasCheckout = !1
            }
            getEarliestTimestamp() {
                let e = this.events.map(e => e.timestamp).sort()[0];
                return e ? iF(e) : null
            }
        }
        class on {
            constructor(e) {
                this._worker = e,
                this._id = 0
            }
            ensureReady() {
                return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise( (e, t) => {
                    this._worker.addEventListener("message", ({data: n}) => {
                        n.success ? e() : t()
                    }
                    , {
                        once: !0
                    }),
                    this._worker.addEventListener("error", e => {
                        t(e)
                    }
                    , {
                        once: !0
                    })
                }
                )),
                this._ensureReadyPromise
            }
            destroy() {
                this._worker.terminate()
            }
            postMessage(e, t) {
                let n = this._getAndIncrementId();
                return new Promise( (r, i) => {
                    let o = ({data: t}) => {
                        if (t.method === e && t.id === n) {
                            if (this._worker.removeEventListener("message", o),
                            !t.success) {
                                i(Error("Error in compression worker"));
                                return
                            }
                            r(t.response)
                        }
                    }
                    ;
                    this._worker.addEventListener("message", o),
                    this._worker.postMessage({
                        id: n,
                        method: e,
                        arg: t
                    })
                }
                )
            }
            _getAndIncrementId() {
                return this._id++
            }
        }
        class or {
            constructor(e) {
                this._worker = new on(e),
                this._earliestTimestamp = null,
                this._totalSize = 0,
                this.hasCheckout = !1
            }
            get hasEvents() {
                return !!this._earliestTimestamp
            }
            get type() {
                return "worker"
            }
            ensureReady() {
                return this._worker.ensureReady()
            }
            destroy() {
                this._worker.destroy()
            }
            addEvent(e) {
                let t = iF(e.timestamp);
                (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
                let n = JSON.stringify(e);
                return (this._totalSize += n.length,
                this._totalSize > 2e7) ? Promise.reject(new oe) : this._sendEventToWorker(n)
            }
            finish() {
                return this._finishRequest()
            }
            clear() {
                this._earliestTimestamp = null,
                this._totalSize = 0,
                this.hasCheckout = !1,
                this._worker.postMessage("clear").then(null, e => {}
                )
            }
            getEarliestTimestamp() {
                return this._earliestTimestamp
            }
            _sendEventToWorker(e) {
                return this._worker.postMessage("addEvent", e)
            }
            async _finishRequest() {
                let e = await this._worker.postMessage("finish");
                return this._earliestTimestamp = null,
                this._totalSize = 0,
                e
            }
        }
        class oi {
            constructor(e) {
                this._fallback = new ot,
                this._compression = new or(e),
                this._used = this._fallback,
                this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
            }
            get type() {
                return this._used.type
            }
            get hasEvents() {
                return this._used.hasEvents
            }
            get hasCheckout() {
                return this._used.hasCheckout
            }
            set hasCheckout(e) {
                this._used.hasCheckout = e
            }
            destroy() {
                this._fallback.destroy(),
                this._compression.destroy()
            }
            clear() {
                return this._used.clear()
            }
            getEarliestTimestamp() {
                return this._used.getEarliestTimestamp()
            }
            addEvent(e) {
                return this._used.addEvent(e)
            }
            async finish() {
                return await this.ensureWorkerIsLoaded(),
                this._used.finish()
            }
            ensureWorkerIsLoaded() {
                return this._ensureWorkerIsLoadedPromise
            }
            async _ensureWorkerIsLoaded() {
                try {
                    await this._compression.ensureReady()
                } catch (e) {
                    return
                }
                await this._switchToCompressionWorker()
            }
            async _switchToCompressionWorker() {
                let {events: e, hasCheckout: t} = this._fallback
                  , n = [];
                for (let t of e)
                    n.push(this._compression.addEvent(t));
                this._compression.hasCheckout = t,
                this._used = this._compression;
                try {
                    await Promise.all(n)
                } catch (e) {}
            }
        }
        function oo() {
            try {
                return "sessionStorage"in ro && !!ro.sessionStorage
            } catch (e) {
                return !1
            }
        }
        function oa(e) {
            return void 0 !== e && Math.random() < e
        }
        function os(e) {
            let t = Date.now()
              , n = e.id || (0,
            P.DM)()
              , r = e.started || t
              , i = e.lastActivity || t;
            return {
                id: n,
                started: r,
                lastActivity: i,
                segmentId: e.segmentId || 0,
                sampled: e.sampled,
                previousSessionId: e.previousSessionId
            }
        }
        function ol(e) {
            if (oo())
                try {
                    ro.sessionStorage.setItem(ra, JSON.stringify(e))
                } catch (e) {}
        }
        function ou({sessionSampleRate: e, allowBuffering: t, stickySession: n=!1}, {previousSessionId: r}={}) {
            let i = os({
                sampled: oa(e) ? "session" : !!t && "buffer",
                previousSessionId: r
            });
            return n && ol(i),
            i
        }
        function oc(e, t, n=+new Date) {
            return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
        }
        function od(e, {maxReplayDuration: t, sessionIdleExpire: n, targetTime: r=Date.now()}) {
            return oc(e.started, t, r) || oc(e.lastActivity, n, r)
        }
        function op(e, {sessionIdleExpire: t, maxReplayDuration: n}) {
            return !!od(e, {
                sessionIdleExpire: t,
                maxReplayDuration: n
            }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
        }
        function of({traceInternals: e, sessionIdleExpire: t, maxReplayDuration: n, previousSessionId: r}, i) {
            let o = i.stickySession && function(e) {
                if (!oo())
                    return null;
                try {
                    let e = ro.sessionStorage.getItem(ra);
                    if (!e)
                        return null;
                    let t = JSON.parse(e);
                    return os(t)
                } catch (e) {
                    return null
                }
            }(0);
            return o ? op(o, {
                sessionIdleExpire: t,
                maxReplayDuration: n
            }) ? ou(i, {
                previousSessionId: o.id
            }) : o : ou(i, {
                previousSessionId: r
            })
        }
        function oh(e, t, n) {
            return !!og(e, t) && (om(e, t, n),
            !0)
        }
        async function om(e, t, n) {
            if (!e.eventBuffer)
                return null;
            try {
                n && "buffer" === e.recordingMode && e.eventBuffer.clear(),
                n && (e.eventBuffer.hasCheckout = !0);
                let r = e.getOptions()
                  , i = function(e, t) {
                    try {
                        if ("function" == typeof t && e.type === ia.Custom)
                            return t(e)
                    } catch (e) {
                        return null
                    }
                    return e
                }(t, r.beforeAddRecordingEvent);
                if (!i)
                    return;
                return await e.eventBuffer.addEvent(i)
            } catch (n) {
                await e.stop({
                    reason: n && n instanceof oe ? "addEventSizeExceeded" : "addEvent"
                });
                let t = (0,
                q.s3)();
                t && t.recordDroppedEvent("internal_sdk_error", "replay")
            }
        }
        function og(e, t) {
            if (!e.eventBuffer || e.isPaused() || !e.isEnabled())
                return !1;
            let n = iF(t.timestamp);
            return !(n + e.timeouts.sessionIdlePause < Date.now()) && (!(n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (e.getOptions()._experiments.traceInternals,
            !1))
        }
        function oy(e) {
            return "transaction" === e.type
        }
        function ov(e) {
            return "feedback" === e.type
        }
        function ob(e) {
            return !!e.category
        }
        function o_(e, t) {
            return t.map( ({type: t, start: n, end: r, name: i, data: o}) => {
                let a = e.throttledAddEvent({
                    type: ia.Custom,
                    timestamp: n,
                    data: {
                        tag: "performanceSpan",
                        payload: {
                            op: t,
                            description: i,
                            startTimestamp: n,
                            endTimestamp: r,
                            data: o
                        }
                    }
                });
                return "string" == typeof a ? Promise.resolve(null) : a
            }
            )
        }
        function oS(e, t) {
            e.isEnabled() && null !== t && !function(e, t) {
                let n = t && t.getDsn()
                  , r = t && t.getOptions().tunnel;
                return !!n && e.includes(n.host) || !!r && rn(e) === rn(r)
            }(t.name, (0,
            q.s3)()) && e.addUpdate( () => (o_(e, [t]),
            !0))
        }
        function ow(e) {
            if (!e)
                return;
            let t = new TextEncoder;
            try {
                if ("string" == typeof e)
                    return t.encode(e).length;
                if (e instanceof URLSearchParams)
                    return t.encode(e.toString()).length;
                if (e instanceof FormData) {
                    let n = oI(e);
                    return t.encode(n).length
                }
                if (e instanceof Blob)
                    return e.size;
                if (e instanceof ArrayBuffer)
                    return e.byteLength
            } catch (e) {}
        }
        function oE(e) {
            if (!e)
                return;
            let t = parseInt(e, 10);
            return isNaN(t) ? void 0 : t
        }
        function ox(e) {
            try {
                if ("string" == typeof e)
                    return [e];
                if (e instanceof URLSearchParams)
                    return [e.toString()];
                if (e instanceof FormData)
                    return [oI(e)];
                if (!e)
                    return [void 0]
            } catch (e) {
                return [void 0, "BODY_PARSE_ERROR"]
            }
            return [void 0, "UNPARSEABLE_BODY_TYPE"]
        }
        function ok(e, t) {
            if (!e)
                return {
                    headers: {},
                    size: void 0,
                    _meta: {
                        warnings: [t]
                    }
                };
            let n = {
                ...e._meta
            }
              , r = n.warnings || [];
            return n.warnings = [...r, t],
            e._meta = n,
            e
        }
        function oO(e, t) {
            if (!t)
                return null;
            let {startTimestamp: n, endTimestamp: r, url: i, method: o, statusCode: a, request: s, response: l} = t;
            return {
                type: e,
                start: n / 1e3,
                end: r / 1e3,
                name: i,
                data: (0,
                H.Jr)({
                    method: o,
                    statusCode: a,
                    request: s,
                    response: l
                })
            }
        }
        function oC(e) {
            return {
                headers: {},
                size: e,
                _meta: {
                    warnings: ["URL_SKIPPED"]
                }
            }
        }
        function oT(e, t, n) {
            if (!t && 0 === Object.keys(e).length)
                return;
            if (!t)
                return {
                    headers: e
                };
            if (!n)
                return {
                    headers: e,
                    size: t
                };
            let r = {
                headers: e,
                size: t
            }
              , {body: i, warnings: o} = function(e) {
                if (!e || "string" != typeof e)
                    return {
                        body: e
                    };
                let t = e.length > 15e4
                  , n = function(e) {
                    let t = e[0]
                      , n = e[e.length - 1];
                    return "[" === t && "]" === n || "{" === t && "}" === n
                }(e);
                if (t) {
                    let t = e.slice(0, 15e4);
                    return n ? {
                        body: t,
                        warnings: ["MAYBE_JSON_TRUNCATED"]
                    } : {
                        body: `${t}…`,
                        warnings: ["TEXT_TRUNCATED"]
                    }
                }
                if (n)
                    try {
                        return {
                            body: JSON.parse(e)
                        }
                    } catch (e) {}
                return {
                    body: e
                }
            }(n);
            return r.body = i,
            o && o.length > 0 && (r._meta = {
                warnings: o
            }),
            r
        }
        function oR(e, t) {
            return Object.entries(e).reduce( (n, [r,i]) => {
                let o = r.toLowerCase();
                return t.includes(o) && e[r] && (n[o] = i),
                n
            }
            , {})
        }
        function oI(e) {
            return new URLSearchParams(e).toString()
        }
        function oM(e, t) {
            let n = function(e, t=ro.document.baseURI) {
                if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(ro.location.origin))
                    return e;
                let n = new URL(e,t);
                if (n.origin !== new URL(t).origin)
                    return e;
                let r = n.href;
                return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
            }(e);
            return (0,
            N.U0)(n, t)
        }
        async function oA(e, t, n) {
            try {
                let r = await oD(e, t, n)
                  , i = oO("resource.fetch", r);
                oS(n.replay, i)
            } catch (e) {}
        }
        async function oD(e, t, n) {
            let r = Date.now()
              , {startTimestamp: i=r, endTimestamp: o=r} = t
              , {url: a, method: s, status_code: l=0, request_body_size: u, response_body_size: c} = e.data
              , d = oM(a, n.networkDetailAllowUrls) && !oM(a, n.networkDetailDenyUrls);
            return {
                startTimestamp: i,
                endTimestamp: o,
                url: a,
                method: s,
                statusCode: l,
                request: d ? function({networkCaptureBodies: e, networkRequestHeaders: t}, n, r) {
                    let i = n ? 1 === n.length && "string" != typeof n[0] ? oB(n[0], t) : 2 === n.length ? oB(n[1], t) : {} : {};
                    if (!e)
                        return oT(i, r, void 0);
                    let[o,a] = ox(oN(n))
                      , s = oT(i, r, o);
                    return a ? ok(s, a) : s
                }(n, t.input, u) : oC(u),
                response: await oL(d, n, t.response, c)
            }
        }
        async function oL(e, {networkCaptureBodies: t, networkResponseHeaders: n}, r, i) {
            if (!e && void 0 !== i)
                return oC(i);
            let o = r ? oj(r.headers, n) : {};
            if (!r || !t && void 0 !== i)
                return oT(o, i, void 0);
            let[a,s] = await oP(r)
              , l = function(e, {networkCaptureBodies: t, responseBodySize: n, captureDetails: r, headers: i}) {
                try {
                    let o = e && e.length && void 0 === n ? ow(e) : n;
                    if (!r)
                        return oC(o);
                    if (t)
                        return oT(i, o, e);
                    return oT(i, o, void 0)
                } catch (e) {
                    return oT(i, n, void 0)
                }
            }(a, {
                networkCaptureBodies: t,
                responseBodySize: i,
                captureDetails: e,
                headers: o
            });
            return s ? ok(l, s) : l
        }
        async function oP(e) {
            let t = function(e) {
                try {
                    return e.clone()
                } catch (e) {}
            }(e);
            if (!t)
                return [void 0, "BODY_PARSE_ERROR"];
            try {
                return [await new Promise( (e, n) => {
                    let r = t_( () => n(Error("Timeout while trying to read response body")), 500);
                    oU(t).then(t => e(t), e => n(e)).finally( () => clearTimeout(r))
                }
                )]
            } catch (e) {
                return [void 0, "BODY_PARSE_ERROR"]
            }
        }
        function oN(e=[]) {
            if (2 === e.length && "object" == typeof e[1])
                return e[1].body
        }
        function oj(e, t) {
            let n = {};
            return t.forEach(t => {
                e.get(t) && (n[t] = e.get(t))
            }
            ),
            n
        }
        function oB(e, t) {
            if (!e)
                return {};
            let n = e.headers;
            return n ? n instanceof Headers ? oj(n, t) : Array.isArray(n) ? {} : oR(n, t) : {}
        }
        async function oU(e) {
            return await e.text()
        }
        async function o$(e, t, n) {
            try {
                let r = function(e, t, n) {
                    let r = Date.now()
                      , {startTimestamp: i=r, endTimestamp: o=r, input: a, xhr: s} = t
                      , {url: l, method: u, status_code: c=0, request_body_size: d, response_body_size: p} = e.data;
                    if (!l)
                        return null;
                    if (!s || !oM(l, n.networkDetailAllowUrls) || oM(l, n.networkDetailDenyUrls)) {
                        let e = oC(d);
                        return {
                            startTimestamp: i,
                            endTimestamp: o,
                            url: l,
                            method: u,
                            statusCode: c,
                            request: e,
                            response: oC(p)
                        }
                    }
                    let f = s[eW]
                      , h = f ? oR(f.request_headers, n.networkRequestHeaders) : {}
                      , m = oR(function(e) {
                        let t = e.getAllResponseHeaders();
                        return t ? t.split("\r\n").reduce( (e, t) => {
                            let[n,r] = t.split(": ");
                            return r && (e[n.toLowerCase()] = r),
                            e
                        }
                        , {}) : {}
                    }(s), n.networkResponseHeaders)
                      , [g,y] = n.networkCaptureBodies ? ox(a) : [void 0]
                      , [v,b] = n.networkCaptureBodies ? function(e) {
                        let t = [];
                        try {
                            return [e.responseText]
                        } catch (e) {
                            t.push(e)
                        }
                        try {
                            return function(e, t) {
                                try {
                                    if ("string" == typeof e)
                                        return [e];
                                    if (e instanceof Document)
                                        return [e.body.outerHTML];
                                    if ("json" === t && e && "object" == typeof e)
                                        return [JSON.stringify(e)];
                                    if (!e)
                                        return [void 0]
                                } catch (e) {
                                    return [void 0, "BODY_PARSE_ERROR"]
                                }
                                return [void 0, "UNPARSEABLE_BODY_TYPE"]
                            }(e.response, e.responseType)
                        } catch (e) {
                            t.push(e)
                        }
                        return [void 0]
                    }(s) : [void 0]
                      , _ = oT(h, d, g)
                      , S = oT(m, p, v);
                    return {
                        startTimestamp: i,
                        endTimestamp: o,
                        url: l,
                        method: u,
                        statusCode: c,
                        request: y ? ok(_, y) : _,
                        response: b ? ok(S, b) : S
                    }
                }(e, t, n)
                  , i = oO("resource.xhr", r);
                oS(n.replay, i)
            } catch (e) {}
        }
        async function oW(e) {
            try {
                return Promise.all(o_(e, [function(e) {
                    let {jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r} = e
                      , i = Date.now() / 1e3;
                    return {
                        type: "memory",
                        name: "memory",
                        start: i,
                        end: i,
                        data: {
                            memory: {
                                jsHeapSizeLimit: t,
                                totalJSHeapSize: n,
                                usedJSHeapSize: r
                            }
                        }
                    }
                }(ro.performance.memory)]))
            } catch (e) {
                return []
            }
        }
        async function oF({client: e, scope: t, replayId: n, event: r}) {
            let i = {
                event_id: n,
                integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
            };
            e.emit("preprocessEvent", r, i);
            let o = await (0,
            eS.R)(e.getOptions(), r, i, t, e, (0,
            q.aF)());
            if (!o)
                return null;
            o.platform = o.platform || "javascript";
            let a = e.getSdkMetadata()
              , {name: s, version: l} = a && a.sdk || {};
            return o.sdk = {
                ...o.sdk,
                name: s || "sentry.javascript.unknown",
                version: l || "0.0.0"
            },
            o
        }
        async function oz({recordingData: e, replayId: t, segmentId: n, eventContext: r, timestamp: i, session: o}) {
            var a;
            let s;
            let l = function({recordingData: e, headers: t}) {
                let n;
                let r = `${JSON.stringify(t)}
`;
                if ("string" == typeof e)
                    n = `${r}${e}`;
                else {
                    let t = new TextEncoder().encode(r);
                    (n = new Uint8Array(t.length + e.length)).set(t),
                    n.set(e, t.length)
                }
                return n
            }({
                recordingData: e,
                headers: {
                    segment_id: n
                }
            })
              , {urls: u, errorIds: c, traceIds: d, initialTimestamp: p} = r
              , f = (0,
            q.s3)()
              , h = (0,
            q.nZ)()
              , m = f && f.getTransport()
              , g = f && f.getDsn();
            if (!f || !m || !g || !o.sampled)
                return (0,
                eh.WD)({});
            let y = {
                type: "replay_event",
                replay_start_timestamp: p / 1e3,
                timestamp: i / 1e3,
                error_ids: c,
                trace_ids: d,
                urls: u,
                replay_id: t,
                segment_id: n,
                replay_type: o.sampled
            }
              , v = await oF({
                scope: h,
                client: f,
                replayId: t,
                event: y
            });
            if (!v)
                return f.recordDroppedEvent("event_processor", "replay", y),
                (0,
                eh.WD)({});
            delete v.sdkProcessingMetadata;
            let b = (a = f.getOptions().tunnel,
            (0,
            em.Jd)((0,
            em.Cd)(v, (0,
            em.HY)(v), a, g), [[{
                type: "replay_event"
            }, v], [{
                type: "replay_recording",
                length: "string" == typeof l ? new TextEncoder().encode(l).length : l.length
            }, l]]));
            try {
                s = await m.send(b)
            } catch (t) {
                let e = Error(rs);
                try {
                    e.cause = t
                } catch (e) {}
                throw e
            }
            if ("number" == typeof s.statusCode && (s.statusCode < 200 || s.statusCode >= 300))
                throw new oH(s.statusCode);
            let _ = tw({}, s);
            if (tS(_, "replay"))
                throw new oq(_);
            return s
        }
        class oH extends Error {
            constructor(e) {
                super(`Transport returned status code ${e}`)
            }
        }
        class oq extends Error {
            constructor(e) {
                super("Rate limit hit"),
                this.rateLimits = e
            }
        }
        async function oZ(e, t={
            count: 0,
            interval: 5e3
        }) {
            let {recordingData: n, options: r} = e;
            if (n.length)
                try {
                    return await oz(e),
                    !0
                } catch (n) {
                    if (n instanceof oH || n instanceof oq)
                        throw n;
                    if ((0,
                    A.v)("Replays", {
                        _retryCount: t.count
                    }),
                    t.count >= 3) {
                        let e = Error(`${rs} - max retries exceeded`);
                        try {
                            e.cause = n
                        } catch (e) {}
                        throw e
                    }
                    return t.interval *= ++t.count,
                    new Promise( (n, r) => {
                        t_(async () => {
                            try {
                                await oZ(e, t),
                                n(!0)
                            } catch (e) {
                                r(e)
                            }
                        }
                        , t.interval)
                    }
                    )
                }
        }
        let oX = "__THROTTLED";
        class oJ {
            constructor({options: e, recordingOptions: t}) {
                oJ.prototype.__init.call(this),
                oJ.prototype.__init2.call(this),
                oJ.prototype.__init3.call(this),
                oJ.prototype.__init4.call(this),
                oJ.prototype.__init5.call(this),
                oJ.prototype.__init6.call(this),
                this.eventBuffer = null,
                this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                this.recordingMode = "session",
                this.timeouts = {
                    sessionIdlePause: 3e5,
                    sessionIdleExpire: 9e5
                },
                this._lastActivity = Date.now(),
                this._isEnabled = !1,
                this._isPaused = !1,
                this._requiresManualStart = !1,
                this._hasInitializedCoreListeners = !1,
                this._context = {
                    errorIds: new Set,
                    traceIds: new Set,
                    urls: [],
                    initialTimestamp: Date.now(),
                    initialUrl: ""
                },
                this._recordingOptions = t,
                this._options = e,
                this._debouncedFlush = function(e, t, n) {
                    let r, i, o;
                    let a = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
                    function s() {
                        return l(),
                        r = e()
                    }
                    function l() {
                        void 0 !== i && clearTimeout(i),
                        void 0 !== o && clearTimeout(o),
                        i = o = void 0
                    }
                    function u() {
                        return i && clearTimeout(i),
                        i = t_(s, t),
                        a && void 0 === o && (o = t_(s, a)),
                        r
                    }
                    return u.cancel = l,
                    u.flush = function() {
                        return void 0 !== i || void 0 !== o ? s() : r
                    }
                    ,
                    u
                }( () => this._flush(), this._options.flushMinDelay, {
                    maxWait: this._options.flushMaxDelay
                }),
                this._throttledAddEvent = function(e, t, n) {
                    let r = new Map
                      , i = e => {
                        let t = e - 5;
                        r.forEach( (e, n) => {
                            n < t && r.delete(n)
                        }
                        )
                    }
                      , o = () => [...r.values()].reduce( (e, t) => e + t, 0)
                      , a = !1;
                    return (...t) => {
                        let n = Math.floor(Date.now() / 1e3);
                        if (i(n),
                        o() >= 300) {
                            let e = a;
                            return a = !0,
                            e ? "__SKIPPED" : oX
                        }
                        a = !1;
                        let s = r.get(n) || 0;
                        return r.set(n, s + 1),
                        e(...t)
                    }
                }( (e, t) => og(this, e) ? om(this, e, t) : Promise.resolve(null), 0, 0);
                let {slowClickTimeout: n, slowClickIgnoreSelectors: r} = this.getOptions()
                  , i = n ? {
                    threshold: Math.min(3e3, n),
                    timeout: n,
                    scrollTimeout: 300,
                    ignoreSelector: r ? r.join(",") : ""
                } : void 0;
                i && (this.clickDetector = new iJ(this,i))
            }
            getContext() {
                return this._context
            }
            isEnabled() {
                return this._isEnabled
            }
            isPaused() {
                return this._isPaused
            }
            isRecordingCanvas() {
                return !!this._canvas
            }
            getOptions() {
                return this._options
            }
            initializeSampling(e) {
                let {errorSampleRate: t, sessionSampleRate: n} = this._options
                  , r = t <= 0 && n <= 0;
                if (this._requiresManualStart = r,
                !r) {
                    if (this._initializeSessionForSampling(e),
                    !this.session) {
                        this._handleException(Error("Unable to initialize and create session"));
                        return
                    }
                    !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session",
                    this.recordingMode,
                    this._options._experiments.traceInternals,
                    this._initializeRecording())
                }
            }
            start() {
                if (this._isEnabled && "session" === this.recordingMode)
                    throw Error("Replay recording is already in progress");
                if (this._isEnabled && "buffer" === this.recordingMode)
                    throw Error("Replay buffering is in progress, call `flush()` to save the replay");
                this._options._experiments.traceInternals,
                this._updateUserActivity();
                let e = of({
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    traceInternals: this._options._experiments.traceInternals
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 1,
                    allowBuffering: !1
                });
                this.session = e,
                this._initializeRecording()
            }
            startBuffering() {
                if (this._isEnabled)
                    throw Error("Replay recording is already in progress");
                this._options._experiments.traceInternals;
                let e = of({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 0,
                    allowBuffering: !0
                });
                this.session = e,
                this.recordingMode = "buffer",
                this._initializeRecording()
            }
            startRecording() {
                try {
                    var e;
                    let t;
                    let n = this._canvas;
                    this._stopRecording = iW({
                        ...this._recordingOptions,
                        ..."buffer" === this.recordingMode && {
                            checkoutEveryNms: 6e4
                        },
                        emit: (e = this,
                        t = !1,
                        (n, r) => {
                            if (!e.checkAndHandleExpiredSession())
                                return;
                            let i = r || !t;
                            t = !0,
                            e.clickDetector && function(e, t) {
                                try {
                                    if (3 !== t.type)
                                        return;
                                    let {source: n} = t.data;
                                    if (n === is.Mutation && e.registerMutation(t.timestamp),
                                    n === is.Scroll && e.registerScroll(t.timestamp),
                                    t.data.source === is.MouseInteraction) {
                                        let {type: n, id: r} = t.data
                                          , i = iW.mirror.getNode(r);
                                        i instanceof HTMLElement && n === il.Click && e.registerClick(i)
                                    }
                                } catch (e) {}
                            }(e.clickDetector, n),
                            e.addUpdate( () => {
                                if ("buffer" === e.recordingMode && i && e.setInitialState(),
                                !oh(e, n, i))
                                    return !0;
                                if (!i)
                                    return !1;
                                if (i && e.session && 0 === e.session.segmentId && oh(e, function(e) {
                                    let t = e.getOptions();
                                    return {
                                        type: ia.Custom,
                                        timestamp: Date.now(),
                                        data: {
                                            tag: "options",
                                            payload: {
                                                shouldRecordCanvas: e.isRecordingCanvas(),
                                                sessionSampleRate: t.sessionSampleRate,
                                                errorSampleRate: t.errorSampleRate,
                                                useCompressionOption: t.useCompression,
                                                blockAllMedia: t.blockAllMedia,
                                                maskAllText: t.maskAllText,
                                                maskAllInputs: t.maskAllInputs,
                                                useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                networkCaptureBodies: t.networkCaptureBodies,
                                                networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                            }
                                        }
                                    }
                                }(e), !1),
                                e.session && e.session.previousSessionId)
                                    return !0;
                                if ("buffer" === e.recordingMode && e.session && e.eventBuffer) {
                                    let t = e.eventBuffer.getEarliestTimestamp();
                                    t && (e.getOptions()._experiments.traceInternals,
                                    e.session.started = t,
                                    e.getOptions().stickySession && ol(e.session))
                                }
                                return "session" === e.recordingMode && e.flush(),
                                !0
                            }
                            )
                        }
                        ),
                        onMutation: this._onMutationHandler,
                        ...n ? {
                            recordCanvas: n.recordCanvas,
                            getCanvasManager: n.getCanvasManager,
                            sampling: n.sampling,
                            dataURLOptions: n.dataURLOptions
                        } : {}
                    })
                } catch (e) {
                    this._handleException(e)
                }
            }
            stopRecording() {
                try {
                    return this._stopRecording && (this._stopRecording(),
                    this._stopRecording = void 0),
                    !0
                } catch (e) {
                    return this._handleException(e),
                    !1
                }
            }
            async stop({forceFlush: e=!1, reason: t}={}) {
                if (this._isEnabled) {
                    this._isEnabled = !1;
                    try {
                        this._options._experiments.traceInternals,
                        this._removeListeners(),
                        this.stopRecording(),
                        this._debouncedFlush.cancel(),
                        e && await this._flush({
                            force: !0
                        }),
                        this.eventBuffer && this.eventBuffer.destroy(),
                        this.eventBuffer = null,
                        function() {
                            if (oo())
                                try {
                                    ro.sessionStorage.removeItem(ra)
                                } catch (e) {}
                        }(),
                        this.session = void 0
                    } catch (e) {
                        this._handleException(e)
                    }
                }
            }
            pause() {
                this._isPaused || (this._isPaused = !0,
                this.stopRecording(),
                this._options._experiments.traceInternals)
            }
            resume() {
                this._isPaused && this._checkSession() && (this._isPaused = !1,
                this.startRecording(),
                this._options._experiments.traceInternals)
            }
            async sendBufferedReplayOrFlush({continueRecording: e=!0}={}) {
                if ("session" === this.recordingMode)
                    return this.flushImmediate();
                let t = Date.now();
                this._options._experiments.traceInternals,
                await this.flushImmediate();
                let n = this.stopRecording();
                e && n && "session" !== this.recordingMode && (this.recordingMode = "session",
                this.session && (this._updateUserActivity(t),
                this._updateSessionActivity(t),
                this._maybeSaveSession()),
                this.startRecording())
            }
            addUpdate(e) {
                let t = e();
                "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush()
            }
            triggerUserActivity() {
                if (this._updateUserActivity(),
                !this._stopRecording) {
                    if (!this._checkSession())
                        return;
                    this.resume();
                    return
                }
                this.checkAndHandleExpiredSession(),
                this._updateSessionActivity()
            }
            updateUserActivity() {
                this._updateUserActivity(),
                this._updateSessionActivity()
            }
            conditionalFlush() {
                return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
            }
            flush() {
                return this._debouncedFlush()
            }
            flushImmediate() {
                return this._debouncedFlush(),
                this._debouncedFlush.flush()
            }
            cancelFlush() {
                this._debouncedFlush.cancel()
            }
            getSessionId() {
                return this.session && this.session.id
            }
            checkAndHandleExpiredSession() {
                if (this._lastActivity && oc(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                    this.pause();
                    return
                }
                return !!this._checkSession()
            }
            setInitialState() {
                let e = `${ro.location.pathname}${ro.location.hash}${ro.location.search}`
                  , t = `${ro.location.origin}${e}`;
                this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                this._clearContext(),
                this._context.initialUrl = t,
                this._context.initialTimestamp = Date.now(),
                this._context.urls.push(t)
            }
            throttledAddEvent(e, t) {
                let n = this._throttledAddEvent(e, t);
                if (n === oX) {
                    let e = iY({
                        category: "replay.throttled"
                    });
                    this.addUpdate( () => !oh(this, {
                        type: 5,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e,
                            metric: !0
                        }
                    }))
                }
                return n
            }
            getCurrentRoute() {
                let e = this.lastActiveSpan || (0,
                tT.HN)()
                  , t = e && (0,
                tT.Gx)(e)
                  , n = (t && (0,
                tT.XU)(t).data || {})[tI.Zj];
                if (t && n && ["route", "custom"].includes(n))
                    return (0,
                    tT.XU)(t).description
            }
            _initializeRecording() {
                this.setInitialState(),
                this._updateSessionActivity(),
                this.eventBuffer = function({useCompression: e, workerUrl: t}) {
                    if (e && window.Worker) {
                        let e = function(e) {
                            try {
                                let t = e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                                    let e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                    return URL.createObjectURL(e)
                                }());
                                if (!t)
                                    return;
                                let n = new Worker(t);
                                return new oi(n)
                            } catch (e) {}
                        }(t);
                        if (e)
                            return e
                    }
                    return new ot
                }({
                    useCompression: this._options.useCompression,
                    workerUrl: this._options.workerUrl
                }),
                this._removeListeners(),
                this._addListeners(),
                this._isEnabled = !0,
                this._isPaused = !1,
                this.startRecording()
            }
            _handleException(e) {}
            _initializeSessionForSampling(e) {
                let t = this._options.errorSampleRate > 0
                  , n = of({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals,
                    previousSessionId: e
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t
                });
                this.session = n
            }
            _checkSession() {
                if (!this.session)
                    return !1;
                let e = this.session;
                return !op(e, {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration
                }) || (this._refreshSession(e),
                !1)
            }
            async _refreshSession(e) {
                this._isEnabled && (await this.stop({
                    reason: "refresh session"
                }),
                this.initializeSampling(e.id))
            }
            _addListeners() {
                try {
                    ro.document.addEventListener("visibilitychange", this._handleVisibilityChange),
                    ro.addEventListener("blur", this._handleWindowBlur),
                    ro.addEventListener("focus", this._handleWindowFocus),
                    ro.addEventListener("keydown", this._handleKeyboardEvent),
                    this.clickDetector && this.clickDetector.addListeners(),
                    this._hasInitializedCoreListeners || (function(e) {
                        let t = (0,
                        q.s3)();
                        eB(iQ(e)),
                        ec(t => {
                            if (!e.isEnabled())
                                return;
                            let n = function(e) {
                                let {from: t, to: n} = e
                                  , r = Date.now() / 1e3;
                                return {
                                    type: "navigation.push",
                                    start: r,
                                    end: r,
                                    name: n,
                                    data: {
                                        previous: t
                                    }
                                }
                            }(t);
                            null !== n && (e.getContext().urls.push(n.name),
                            e.triggerUserActivity(),
                            e.addUpdate( () => (o_(e, [n]),
                            !1)))
                        }
                        ),
                        function(e) {
                            let t = (0,
                            q.s3)();
                            t && t.on("beforeAddBreadcrumb", t => (function(e, t) {
                                if (!e.isEnabled() || !ob(t))
                                    return;
                                let n = !ob(t) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.") ? null : "console" === t.category ? function(e) {
                                    let t = e.data && e.data.arguments;
                                    if (!Array.isArray(t) || 0 === t.length)
                                        return iY(e);
                                    let n = !1
                                      , r = t.map(e => {
                                        if (!e)
                                            return e;
                                        if ("string" == typeof e)
                                            return e.length > 5e3 ? (n = !0,
                                            `${e.slice(0, 5e3)}…`) : e;
                                        if ("object" == typeof e)
                                            try {
                                                let t = (0,
                                                eC.Fv)(e, 7);
                                                if (JSON.stringify(t).length > 5e3)
                                                    return n = !0,
                                                    `${JSON.stringify(t, null, 2).slice(0, 5e3)}…`;
                                                return t
                                            } catch (e) {}
                                        return e
                                    }
                                    );
                                    return iY({
                                        ...e,
                                        data: {
                                            ...e.data,
                                            arguments: r,
                                            ...n ? {
                                                _meta: {
                                                    warnings: ["CONSOLE_ARG_TRUNCATED"]
                                                }
                                            } : {}
                                        }
                                    })
                                }(t) : iY(t);
                                n && iH(e, n)
                            }
                            )(e, t))
                        }(e),
                        function(e) {
                            let t = (0,
                            q.s3)();
                            try {
                                let {networkDetailAllowUrls: n, networkDetailDenyUrls: r, networkCaptureBodies: i, networkRequestHeaders: o, networkResponseHeaders: a} = e.getOptions()
                                  , s = {
                                    replay: e,
                                    networkDetailAllowUrls: n,
                                    networkDetailDenyUrls: r,
                                    networkCaptureBodies: i,
                                    networkRequestHeaders: o,
                                    networkResponseHeaders: a
                                };
                                t && t.on("beforeAddBreadcrumb", (e, t) => (function(e, t, n) {
                                    if (t.data)
                                        try {
                                            var r, i;
                                            "xhr" === t.category && (r = n) && r.xhr && (function(e, t) {
                                                let {xhr: n, input: r} = t;
                                                if (!n)
                                                    return;
                                                let i = ow(r)
                                                  , o = n.getResponseHeader("content-length") ? oE(n.getResponseHeader("content-length")) : function(e, t) {
                                                    try {
                                                        let n = "json" === t && e && "object" == typeof e ? JSON.stringify(e) : e;
                                                        return ow(n)
                                                    } catch (e) {
                                                        return
                                                    }
                                                }(n.response, n.responseType);
                                                void 0 !== i && (e.data.request_body_size = i),
                                                void 0 !== o && (e.data.response_body_size = o)
                                            }(t, n),
                                            o$(t, n, e)),
                                            "fetch" === t.category && (i = n) && i.response && (function(e, t) {
                                                let {input: n, response: r} = t
                                                  , i = ow(n ? oN(n) : void 0)
                                                  , o = r ? oE(r.headers.get("content-length")) : void 0;
                                                void 0 !== i && (e.data.request_body_size = i),
                                                void 0 !== o && (e.data.response_body_size = o)
                                            }(t, n),
                                            oA(t, n, e))
                                        } catch (e) {}
                                }
                                )(s, e, t))
                            } catch (e) {}
                        }(e);
                        let n = Object.assign( (t, n) => e.isEnabled() ? "replay_event" === t.type ? (delete t.breadcrumbs,
                        t) : (!t.type || oy(t) || ov(t)) && e.checkAndHandleExpiredSession() ? ov(t) ? (e.flush(),
                        t.contexts.feedback.replay_id = e.getSessionId(),
                        e.triggerUserActivity(),
                        e.addUpdate( () => !t.timestamp || (e.throttledAddEvent({
                            type: ia.Custom,
                            timestamp: 1e3 * t.timestamp,
                            data: {
                                tag: "breadcrumb",
                                payload: {
                                    timestamp: t.timestamp,
                                    type: "default",
                                    category: "sentry.feedback",
                                    data: {
                                        feedbackId: t.event_id
                                    }
                                }
                            }
                        }),
                        !1)),
                        t) : !t.type && t.exception && t.exception.values && t.exception.values.length && n.originalException && n.originalException.__rrweb__ && !e.getOptions()._experiments.captureExceptions ? null : (("buffer" === e.recordingMode && t.message !== rs && t.exception && !t.type && oa(e.getOptions().errorSampleRate) || "session" === e.recordingMode) && (t.tags = {
                            ...t.tags,
                            replayId: e.getSessionId()
                        }),
                        t) : t : t, {
                            id: "Replay"
                        });
                        (0,
                        A.Qy)(n),
                        t && (t.on("beforeSendEvent", t => {
                            e.isEnabled() && !t.type && function(e, t) {
                                let n = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
                                "string" == typeof n && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && iH(e, iY({
                                    category: "replay.hydrate-error",
                                    data: {
                                        url: (0,
                                        eV.l4)()
                                    }
                                }))
                            }(e, t)
                        }
                        ),
                        t.on("afterSendEvent", (t, n) => {
                            if (!e.isEnabled() || t.type && !oy(t))
                                return;
                            let r = n && n.statusCode;
                            if (r && !(r < 200) && !(r >= 300)) {
                                if (oy(t)) {
                                    (function(e, t) {
                                        let n = e.getContext();
                                        t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
                                    }
                                    )(e, t);
                                    return
                                }
                                (function(e, t) {
                                    let n = e.getContext();
                                    if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
                                    "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId)
                                        return;
                                    let {beforeErrorSampling: r} = e.getOptions();
                                    ("function" != typeof r || r(t)) && t_( () => {
                                        e.sendBufferedReplayOrFlush()
                                    }
                                    )
                                }
                                )(e, t)
                            }
                        }
                        ),
                        t.on("createDsc", t => {
                            let n = e.getSessionId();
                            n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
                        }
                        ),
                        t.on("spanStart", t => {
                            e.lastActiveSpan = t
                        }
                        ),
                        t.on("spanEnd", t => {
                            e.lastActiveSpan = t
                        }
                        ),
                        t.on("beforeSendFeedback", (t, n) => {
                            let r = e.getSessionId();
                            n && n.includeReplay && e.isEnabled() && r && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = r)
                        }
                        ))
                    }(this),
                    this._hasInitializedCoreListeners = !0)
                } catch (e) {
                    this._handleException(e)
                }
                this._performanceCleanupCallback = function(e) {
                    function t(t) {
                        e.performanceEntries.includes(t) || e.performanceEntries.push(t)
                    }
                    function n({entries: e}) {
                        e.forEach(t)
                    }
                    let r = [];
                    return ["navigation", "paint", "resource"].forEach(e => {
                        r.push(nh(e, n))
                    }
                    ),
                    r.push(nd(i2(i4, e)), nc(i2(i6, e)), np(i2(i8, e)), nf(i2(i9, e))),
                    () => {
                        r.forEach(e => e())
                    }
                }(this)
            }
            _removeListeners() {
                try {
                    ro.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
                    ro.removeEventListener("blur", this._handleWindowBlur),
                    ro.removeEventListener("focus", this._handleWindowFocus),
                    ro.removeEventListener("keydown", this._handleKeyboardEvent),
                    this.clickDetector && this.clickDetector.removeListeners(),
                    this._performanceCleanupCallback && this._performanceCleanupCallback()
                } catch (e) {
                    this._handleException(e)
                }
            }
            __init() {
                this._handleVisibilityChange = () => {
                    "visible" === ro.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                }
            }
            __init2() {
                this._handleWindowBlur = () => {
                    let e = iY({
                        category: "ui.blur"
                    });
                    this._doChangeToBackgroundTasks(e)
                }
            }
            __init3() {
                this._handleWindowFocus = () => {
                    let e = iY({
                        category: "ui.focus"
                    });
                    this._doChangeToForegroundTasks(e)
                }
            }
            __init4() {
                this._handleKeyboardEvent = e => {
                    !function(e, t) {
                        if (!e.isEnabled())
                            return;
                        e.updateUserActivity();
                        let n = function(e) {
                            var t;
                            let {metaKey: n, shiftKey: r, ctrlKey: i, altKey: o, key: a, target: s} = e;
                            if (!s || "INPUT" === (t = s).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !a)
                                return null;
                            let l = n || i || o
                              , u = 1 === a.length;
                            if (!l && u)
                                return null;
                            let c = (0,
                            eV.Rt)(s, {
                                maxStringLength: 200
                            }) || "<unknown>"
                              , d = i0(s, c);
                            return iY({
                                category: "ui.keyDown",
                                message: c,
                                data: {
                                    ...d.data,
                                    metaKey: n,
                                    shiftKey: r,
                                    ctrlKey: i,
                                    altKey: o,
                                    key: a
                                }
                            })
                        }(t);
                        n && iH(e, n)
                    }(this, e)
                }
            }
            _doChangeToBackgroundTasks(e) {
                !this.session || od(this.session, {
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire
                }) || (e && this._createCustomBreadcrumb(e),
                this.conditionalFlush())
            }
            _doChangeToForegroundTasks(e) {
                this.session && this.checkAndHandleExpiredSession() && e && this._createCustomBreadcrumb(e)
            }
            _updateUserActivity(e=Date.now()) {
                this._lastActivity = e
            }
            _updateSessionActivity(e=Date.now()) {
                this.session && (this.session.lastActivity = e,
                this._maybeSaveSession())
            }
            _createCustomBreadcrumb(e) {
                this.addUpdate( () => {
                    this.throttledAddEvent({
                        type: ia.Custom,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e
                        }
                    })
                }
                )
            }
            _addPerformanceEntries() {
                let e = this.performanceEntries.map(i3).filter(Boolean).concat(this.replayPerformanceEntries);
                return this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                Promise.all(o_(this, e))
            }
            _clearContext() {
                this._context.errorIds.clear(),
                this._context.traceIds.clear(),
                this._context.urls = []
            }
            _updateInitialTimestampFromEventBuffer() {
                let {session: e, eventBuffer: t} = this;
                if (!e || !t || this._requiresManualStart || e.segmentId)
                    return;
                let n = t.getEarliestTimestamp();
                n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
            }
            _popEventContext() {
                let e = {
                    initialTimestamp: this._context.initialTimestamp,
                    initialUrl: this._context.initialUrl,
                    errorIds: Array.from(this._context.errorIds),
                    traceIds: Array.from(this._context.traceIds),
                    urls: this._context.urls
                };
                return this._clearContext(),
                e
            }
            async _runFlush() {
                let e = this.getSessionId();
                if (this.session && this.eventBuffer && e && (await this._addPerformanceEntries(),
                this.eventBuffer && this.eventBuffer.hasEvents) && (await oW(this),
                this.eventBuffer && e === this.getSessionId()))
                    try {
                        this._updateInitialTimestampFromEventBuffer();
                        let t = Date.now();
                        if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4)
                            throw Error("Session is too long, not sending replay");
                        let n = this._popEventContext()
                          , r = this.session.segmentId++;
                        this._maybeSaveSession();
                        let i = await this.eventBuffer.finish();
                        await oZ({
                            replayId: e,
                            recordingData: i,
                            segmentId: r,
                            eventContext: n,
                            session: this.session,
                            options: this.getOptions(),
                            timestamp: t
                        })
                    } catch (t) {
                        this._handleException(t),
                        this.stop({
                            reason: "sendReplay"
                        });
                        let e = (0,
                        q.s3)();
                        e && e.recordDroppedEvent("send_error", "replay")
                    }
            }
            __init5() {
                this._flush = async ({force: e=!1}={}) => {
                    if (!this._isEnabled && !e || !this.checkAndHandleExpiredSession() || !this.session)
                        return;
                    let t = this.session.started
                      , n = Date.now() - t;
                    this._debouncedFlush.cancel();
                    let r = n < this._options.minReplayDuration
                      , i = n > this._options.maxReplayDuration + 5e3;
                    if (r || i) {
                        this._options._experiments.traceInternals,
                        r && this._debouncedFlush();
                        return
                    }
                    let o = this.eventBuffer;
                    if (o && 0 === this.session.segmentId && !o.hasCheckout && this._options._experiments.traceInternals,
                    !this._flushLock) {
                        this._flushLock = this._runFlush(),
                        await this._flushLock,
                        this._flushLock = void 0;
                        return
                    }
                    try {
                        await this._flushLock
                    } catch (e) {} finally {
                        this._debouncedFlush()
                    }
                }
            }
            _maybeSaveSession() {
                this.session && this._options.stickySession && ol(this.session)
            }
            __init6() {
                this._onMutationHandler = e => {
                    let t = e.length
                      , n = this._options.mutationLimit
                      , r = this._options.mutationBreadcrumbLimit
                      , i = n && t > n;
                    if (t > r || i) {
                        let e = iY({
                            category: "replay.mutations",
                            data: {
                                count: t,
                                limit: i
                            }
                        });
                        this._createCustomBreadcrumb(e)
                    }
                    return !i || (this.stop({
                        reason: "mutationLimit",
                        forceFlush: "session" === this.recordingMode
                    }),
                    !1)
                }
            }
        }
        function oG(e, t) {
            return [...e, ...t].join(",")
        }
        let oV = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]'
          , oY = ["content-length", "content-type", "accept"]
          , oK = !1;
        class oQ {
            static __initStatic() {
                this.id = "Replay"
            }
            constructor({flushMinDelay: e=5e3, flushMaxDelay: t=5500, minReplayDuration: n=4999, maxReplayDuration: r=36e5, stickySession: i=!0, useCompression: o=!0, workerUrl: a, _experiments: s={}, maskAllText: l=!0, maskAllInputs: u=!0, blockAllMedia: c=!0, mutationBreadcrumbLimit: d=750, mutationLimit: p=1e4, slowClickTimeout: f=7e3, slowClickIgnoreSelectors: h=[], networkDetailAllowUrls: m=[], networkDetailDenyUrls: g=[], networkCaptureBodies: y=!0, networkRequestHeaders: v=[], networkResponseHeaders: b=[], mask: _=[], maskAttributes: S=["title", "placeholder"], unmask: w=[], block: E=[], unblock: x=[], ignore: k=[], maskFn: O, beforeAddRecordingEvent: C, beforeErrorSampling: T}={}) {
                this.name = oQ.id;
                let R = function({mask: e, unmask: t, block: n, unblock: r, ignore: i}) {
                    return {
                        maskTextSelector: oG(e, [".sentry-mask", "[data-sentry-mask]"]),
                        unmaskTextSelector: oG(t, []),
                        blockSelector: oG(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]']),
                        unblockSelector: oG(r, []),
                        ignoreSelector: oG(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
                    }
                }({
                    mask: _,
                    unmask: w,
                    block: E,
                    unblock: x,
                    ignore: k
                });
                if (this._recordingOptions = {
                    maskAllInputs: u,
                    maskAllText: l,
                    maskInputOptions: {
                        password: !0
                    },
                    maskTextFn: O,
                    maskInputFn: O,
                    maskAttributeFn: (e, t, n) => (function({el: e, key: t, maskAttributes: n, maskAllText: r, privacyOptions: i, value: o}) {
                        return !r || i.unmaskTextSelector && e.matches(i.unmaskTextSelector) ? o : n.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? o.replace(/[\S]/g, "*") : o
                    }
                    )({
                        maskAttributes: S,
                        maskAllText: l,
                        privacyOptions: R,
                        key: e,
                        value: t,
                        el: n
                    }),
                    ...R,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: e => {
                        try {
                            e.__rrweb__ = !0
                        } catch (e) {}
                    }
                },
                this._initialOptions = {
                    flushMinDelay: e,
                    flushMaxDelay: t,
                    minReplayDuration: Math.min(n, 15e3),
                    maxReplayDuration: Math.min(r, 36e5),
                    stickySession: i,
                    useCompression: o,
                    workerUrl: a,
                    blockAllMedia: c,
                    maskAllInputs: u,
                    maskAllText: l,
                    mutationBreadcrumbLimit: d,
                    mutationLimit: p,
                    slowClickTimeout: f,
                    slowClickIgnoreSelectors: h,
                    networkDetailAllowUrls: m,
                    networkDetailDenyUrls: g,
                    networkCaptureBodies: y,
                    networkRequestHeaders: o0(v),
                    networkResponseHeaders: o0(b),
                    beforeAddRecordingEvent: C,
                    beforeErrorSampling: T,
                    _experiments: s
                },
                this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${oV}` : oV),
                this._isInitialized && ri())
                    throw Error("Multiple Sentry Session Replay instances are not supported");
                this._isInitialized = !0
            }
            get _isInitialized() {
                return oK
            }
            set _isInitialized(e) {
                oK = e
            }
            afterAllSetup(e) {
                ri() && !this._replay && (this._setup(e),
                this._initialize(e))
            }
            start() {
                this._replay && this._replay.start()
            }
            startBuffering() {
                this._replay && this._replay.startBuffering()
            }
            stop() {
                return this._replay ? this._replay.stop({
                    forceFlush: "session" === this._replay.recordingMode
                }) : Promise.resolve()
            }
            flush(e) {
                return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : Promise.resolve()
            }
            getReplayId() {
                if (this._replay && this._replay.isEnabled())
                    return this._replay.getSessionId()
            }
            _initialize(e) {
                this._replay && (this._maybeLoadFromReplayCanvasIntegration(e),
                this._replay.initializeSampling())
            }
            _setup(e) {
                let t = function(e, t) {
                    let n = t.getOptions()
                      , r = {
                        sessionSampleRate: 0,
                        errorSampleRate: 0,
                        ...(0,
                        H.Jr)(e)
                    }
                      , i = (0,
                    e_.o)(n.replaysSessionSampleRate)
                      , o = (0,
                    e_.o)(n.replaysOnErrorSampleRate);
                    return null == i && null == o && (0,
                    L.Cf)( () => {
                        console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
                    }
                    ),
                    null != i && (r.sessionSampleRate = i),
                    null != o && (r.errorSampleRate = o),
                    r
                }(this._initialOptions, e);
                this._replay = new oJ({
                    options: t,
                    recordingOptions: this._recordingOptions
                })
            }
            _maybeLoadFromReplayCanvasIntegration(e) {
                try {
                    let t = e.getIntegrationByName("ReplayCanvas");
                    if (!t)
                        return;
                    this._replay._canvas = t.getOptions()
                } catch (e) {}
            }
        }
        function o0(e) {
            return [...oY, ...e.map(e => e.toLowerCase())]
        }
        oQ.__initStatic();
        var o1 = window;
        o1.__sentryRewritesTunnelPath__ = void 0,
        o1.SENTRY_RELEASE = {
            id: "mazPSg8n3CJg4ZwuREDuL"
        },
        o1.__sentryBasePath = void 0,
        o1.__rewriteFramesAssetPrefixPath__ = "",
        function(e) {
            let t = {
                environment: function(e) {
                    let t = e ? tC.env.NEXT_PUBLIC_VERCEL_ENV : tC.env.VERCEL_ENV;
                    return t ? `vercel-${t}` : void 0
                }(!0) || "production",
                defaultIntegrations: function(e) {
                    let t = tk(e);
                    ("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && (0,
                    D.z)(e) && t.push(function(e={}) {
                        let t = nV({
                            ...e,
                            instrumentNavigation: !1,
                            instrumentPageLoad: !1
                        })
                          , {instrumentPageLoad: n=!0, instrumentNavigation: r=!0} = e;
                        return {
                            ...t,
                            afterAllSetup(e) {
                                var i;
                                r && (i = e,
                                eL.document.getElementById("__NEXT_DATA__") ? n3.events.on("routeChangeStart", e => {
                                    let t, n;
                                    let r = e.split(/[?#]/, 1)[0]
                                      , o = function(e) {
                                        let t = (eL.__BUILD_MANIFEST || {}).sortedPages;
                                        if (t)
                                            return t.find(t => {
                                                let n = function(e) {
                                                    let t = e.split("/")
                                                      , n = "";
                                                    (0,
                                                    n0.x)([t, "access", e => e[t.length - 1], "optionalAccess", e => e.match, "call", e => e(/^\[\[\.\.\..+\]\]$/)]) && (t.pop(),
                                                    n = "(?:/(.+?))?");
                                                    let r = t.map(e => e.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)")).join("/");
                                                    return RegExp(`^${r}${n}(?:/)?$`)
                                                }(t);
                                                return e.match(n)
                                            }
                                            )
                                    }(r);
                                    o ? (t = o,
                                    n = "route") : (t = r,
                                    n = "url"),
                                    nK(i, {
                                        name: t,
                                        attributes: {
                                            [tI.$J]: "navigation",
                                            [tI.S3]: "auto.navigation.nextjs.pages_router_instrumentation",
                                            [tI.Zj]: n
                                        }
                                    })
                                }
                                ) : eZ(e => {
                                    if (void 0 !== e.endTimestamp || "GET" !== e.fetchData.method)
                                        return;
                                    let t = function(e) {
                                        if (!e[0] || "object" != typeof e[0] || void 0 === e[0].searchParams || !e[1] || "object" != typeof e[1] || !("headers"in e[1]))
                                            return null;
                                        try {
                                            let t = e[0]
                                              , n = e[1].headers;
                                            if ("1" !== n.RSC || "1" === n["Next-Router-Prefetch"])
                                                return null;
                                            return {
                                                targetPathname: t.pathname
                                            }
                                        } catch (e) {
                                            return null
                                        }
                                    }(e.args);
                                    null !== t && nK(i, {
                                        name: t.targetPathname,
                                        attributes: {
                                            [tI.$J]: "navigation",
                                            [tI.S3]: "auto.navigation.nextjs.app_router_instrumentation",
                                            [tI.Zj]: "url"
                                        }
                                    })
                                }
                                )),
                                t.afterAllSetup(e),
                                n && (eL.document.getElementById("__NEXT_DATA__") ? function(e) {
                                    let {route: t, params: n, sentryTrace: r, baggage: i} = function() {
                                        let e;
                                        let t = eL.document.getElementById("__NEXT_DATA__");
                                        if (t && t.innerHTML)
                                            try {
                                                e = JSON.parse(t.innerHTML)
                                            } catch (e) {
                                                n2.X && L.kg.warn("Could not extract __NEXT_DATA__")
                                            }
                                        if (!e)
                                            return {};
                                        let n = {}
                                          , {page: r, query: i, props: o} = e;
                                        return n.route = r,
                                        n.params = i,
                                        o && o.pageProps && (n.sentryTrace = o.pageProps._sentryTraceData,
                                        n.baggage = o.pageProps._sentryBaggage),
                                        n
                                    }();
                                    nY(e, {
                                        name: t || eL.location.pathname,
                                        startTime: eO.Z1 ? eO.Z1 / 1e3 : void 0,
                                        attributes: {
                                            [tI.$J]: "pageload",
                                            [tI.S3]: "auto.pageload.nextjs.pages_router_instrumentation",
                                            [tI.Zj]: t ? "route" : "url",
                                            ...n && e.getOptions().sendDefaultPii && {
                                                ...n
                                            }
                                        }
                                    }, {
                                        sentryTrace: r,
                                        baggage: i
                                    })
                                }(e) : nY(e, {
                                    name: eL.location.pathname,
                                    startTime: eO.Z1 ? eO.Z1 / 1e3 : void 0,
                                    attributes: {
                                        [tI.$J]: "pageload",
                                        [tI.S3]: "auto.pageload.nextjs.app_router_instrumentation",
                                        [tI.Zj]: "url"
                                    }
                                }))
                            }
                        }
                    }());
                    let n = re.__rewriteFramesAssetPrefixPath__ || "";
                    return t.push(n9({
                        assetPrefixPath: n
                    })),
                    t
                }(e),
                ...e
            };
            (function(e) {
                let t = n7.__sentryRewritesTunnelPath__;
                if (t && e.dsn) {
                    let n = (0,
                    ep.U4)(e.dsn);
                    if (!n)
                        return;
                    let r = n.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
                    if (r) {
                        let i = r[1]
                          , o = r[2]
                          , a = `${t}?o=${i}&p=${n.projectId}`;
                        o && (a += `&r=${o}`),
                        e.tunnel = a,
                        n2.X && L.kg.info(`Tunneling events to "${a}"`)
                    } else
                        n2.X && L.kg.warn("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.")
                }
            }
            )(t),
            M(t, "nextjs", ["nextjs", "react"]),
            function(e) {
                let t = {
                    ...e
                };
                M(t, "react"),
                (0,
                A.v)("react", {
                    version: tO.version
                }),
                function(e={}) {
                    let t = function(e={}) {
                        return {
                            defaultIntegrations: tk(),
                            release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : eL.SENTRY_RELEASE && eL.SENTRY_RELEASE.id ? eL.SENTRY_RELEASE.id : void 0,
                            autoSessionTracking: !0,
                            sendClientReports: !0,
                            ...e
                        }
                    }(e);
                    if (function() {
                        let e = eL.chrome ? "chrome" : "browser"
                          , t = eL[e]
                          , n = t && t.runtime && t.runtime.id
                          , r = eL.location && eL.location.href || ""
                          , i = !!n && eL === eL.top && ["chrome-extension:", "moz-extension:", "ms-browser-extension:"].some(e => r.startsWith(`${e}//`))
                          , o = void 0 !== eL.nw;
                        return !!n && !i && !o
                    }()) {
                        (0,
                        L.Cf)( () => {
                            console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
                        }
                        );
                        return
                    }
                    (function(e, t) {
                        !0 === t.debug && (j.X ? L.kg.enable() : (0,
                        L.Cf)( () => {
                            console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
                        }
                        )),
                        (0,
                        q.nZ)().update(t.initialScope);
                        let n = new e(t);
                        (0,
                        q.nZ)().setClient(n),
                        n.init()
                    }
                    )(ej, {
                        ...t,
                        stackParser: (0,
                        J.Sq)(t.stackParser || tg),
                        integrations: function(e) {
                            let t = e.defaultIntegrations || []
                              , n = e.integrations;
                            t.forEach(e => {
                                e.isDefaultInstance = !0
                            }
                            );
                            let r = function(e) {
                                let t = {};
                                return e.forEach(e => {
                                    let {name: n} = e
                                      , r = t[n];
                                    r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                                }
                                ),
                                Object.values(t)
                            }(Array.isArray(n) ? [...t, ...n] : "function" == typeof n ? (0,
                            P.lE)(n(t)) : t)
                              , i = r.findIndex(e => "Debug" === e.name);
                            if (i > -1) {
                                let[e] = r.splice(i, 1);
                                r.push(e)
                            }
                            return r
                        }(t),
                        transport: t.transport || tx
                    }),
                    t.autoSessionTracking && void 0 !== eL.document && ((0,
                    A.yj)({
                        ignoreDuration: !0
                    }),
                    (0,
                    A.cg)(),
                    ec( ({from: e, to: t}) => {
                        void 0 !== e && e !== t && ((0,
                        A.yj)({
                            ignoreDuration: !0
                        }),
                        (0,
                        A.cg)())
                    }
                    ))
                }(t)
            }(t),
            (0,
            A.YA)("runtime", "browser");
            let n = e => "transaction" === e.type && "/404" === e.transaction ? null : e;
            n.id = "NextClient404Filter",
            (0,
            A.Qy)(n)
        }({
            dsn: "https://5ae7ee1c4c23066ecb9610d7d9258f2c@o4507623550353408.ingest.us.sentry.io/4507623554351104",
            tracesSampleRate: 1,
            debug: !1,
            replaysOnErrorSampleRate: 0,
            replaysSessionSampleRate: 0,
            integrations: [new oQ({
                maskAllText: !0,
                blockAllMedia: !0
            })]
        })
    },
    14926: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(85893)
          , i = n(11752)
          , o = n.n(i)
          , a = n(67294)
          , s = n(9008)
          , l = n.n(s)
          , u = n(67177)
          , c = n(11163)
          , d = n(74865)
          , p = n.n(d)
          , f = n(53121);
        n(60969),
        n(46996);
        var h = n(33299);
        n(91329),
        n(92463),
        n(34168),
        n(62588),
        n(89143),
        n(39985),
        n(59332);
        let {publicRuntimeConfig: m} = o()()
          , {DISABLE_LOGS: g} = m;
        console.log("Logs disabled for console: ".concat(g)),
        "true" === g && n.e(6961).then(n.t.bind(n, 36961, 23)),
        t.default = (0,
        f.qC)()(function(e) {
            let {Component: t, pageProps: n, ...i} = e
              , o = (0,
            c.useRouter)()
              , [s,d] = (0,
            a.useState)(!1);
            return (0,
            a.useEffect)( () => {
                d(!0)
            }
            , []),
            (0,
            a.useEffect)( () => {
                let e = e => {
                    console.log("Loading: ".concat(e)),
                    p().start()
                }
                  , t = () => {
                    p().done()
                }
                ;
                return o.events.on("routeChangeStart", e),
                o.events.on("routeChangeComplete", t),
                o.events.on("routeChangeError", t),
                () => {
                    o.events.off("routeChangeStart", e),
                    o.events.off("routeChangeComplete", t),
                    o.events.off("routeChangeError", t)
                }
            }
            , [o]),
            (0,
            r.jsxs)(u.Z, {
                style: {
                    flex: 1
                },
                suppressHydrationWarning: !0,
                children: [(0,
                r.jsxs)(l(), {
                    children: [(0,
                    r.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }), (0,
                    r.jsx)("title", {
                        children: "Human Design in Detail"
                    })]
                }), (0,
                r.jsx)(h.SessionProvider, {
                    children: s ? (0,
                    r.jsx)(t, {
                        ...n,
                        ...i
                    }) : null
                })]
            })
        })
    },
    59332: function() {},
    39985: function() {},
    92463: function() {},
    89143: function() {},
    62588: function() {},
    34168: function() {},
    60969: function() {},
    46996: function() {},
    91329: function() {},
    9008: function(e, t, n) {
        e.exports = n(23867)
    },
    11163: function(e, t, n) {
        e.exports = n(43079)
    },
    74865: function(e, t, n) {
        var r, i;
        void 0 !== (i = "function" == typeof (r = function() {
            var e, t, n, r = {};
            r.version = "0.2.0";
            var i = r.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };
            function o(e, t, n) {
                return e < t ? t : e > n ? n : e
            }
            r.configure = function(e) {
                var t, n;
                for (t in e)
                    void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (i[t] = n);
                return this
            }
            ,
            r.status = null,
            r.set = function(e) {
                var t = r.isStarted();
                e = o(e, i.minimum, 1),
                r.status = 1 === e ? null : e;
                var n = r.render(!t)
                  , l = n.querySelector(i.barSelector)
                  , u = i.speed
                  , c = i.easing;
                return n.offsetWidth,
                a(function(t) {
                    var o, a;
                    "" === i.positionUsing && (i.positionUsing = r.getPositioningCSS()),
                    s(l, (o = e,
                    (a = "translate3d" === i.positionUsing ? {
                        transform: "translate3d(" + (-1 + o) * 100 + "%,0,0)"
                    } : "translate" === i.positionUsing ? {
                        transform: "translate(" + (-1 + o) * 100 + "%,0)"
                    } : {
                        "margin-left": (-1 + o) * 100 + "%"
                    }).transition = "all " + u + "ms " + c,
                    a)),
                    1 === e ? (s(n, {
                        transition: "none",
                        opacity: 1
                    }),
                    n.offsetWidth,
                    setTimeout(function() {
                        s(n, {
                            transition: "all " + u + "ms linear",
                            opacity: 0
                        }),
                        setTimeout(function() {
                            r.remove(),
                            t()
                        }, u)
                    }, u)) : setTimeout(t, u)
                }),
                this
            }
            ,
            r.isStarted = function() {
                return "number" == typeof r.status
            }
            ,
            r.start = function() {
                r.status || r.set(0);
                var e = function() {
                    setTimeout(function() {
                        r.status && (r.trickle(),
                        e())
                    }, i.trickleSpeed)
                };
                return i.trickle && e(),
                this
            }
            ,
            r.done = function(e) {
                return e || r.status ? r.inc(.3 + .5 * Math.random()).set(1) : this
            }
            ,
            r.inc = function(e) {
                var t = r.status;
                return t ? ("number" != typeof e && (e = (1 - t) * o(Math.random() * t, .1, .95)),
                t = o(t + e, 0, .994),
                r.set(t)) : r.start()
            }
            ,
            r.trickle = function() {
                return r.inc(Math.random() * i.trickleRate)
            }
            ,
            e = 0,
            t = 0,
            r.promise = function(n) {
                return n && "resolved" !== n.state() && (0 === t && r.start(),
                e++,
                t++,
                n.always(function() {
                    0 == --t ? (e = 0,
                    r.done()) : r.set((e - t) / e)
                })),
                this
            }
            ,
            r.render = function(e) {
                if (r.isRendered())
                    return document.getElementById("nprogress");
                u(document.documentElement, "nprogress-busy");
                var t = document.createElement("div");
                t.id = "nprogress",
                t.innerHTML = i.template;
                var n, o = t.querySelector(i.barSelector), a = e ? "-100" : (-1 + (r.status || 0)) * 100, l = document.querySelector(i.parent);
                return s(o, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + a + "%,0,0)"
                }),
                !i.showSpinner && (n = t.querySelector(i.spinnerSelector)) && p(n),
                l != document.body && u(l, "nprogress-custom-parent"),
                l.appendChild(t),
                t
            }
            ,
            r.remove = function() {
                c(document.documentElement, "nprogress-busy"),
                c(document.querySelector(i.parent), "nprogress-custom-parent");
                var e = document.getElementById("nprogress");
                e && p(e)
            }
            ,
            r.isRendered = function() {
                return !!document.getElementById("nprogress")
            }
            ,
            r.getPositioningCSS = function() {
                var e = document.body.style
                  , t = "WebkitTransform"in e ? "Webkit" : "MozTransform"in e ? "Moz" : "msTransform"in e ? "ms" : "OTransform"in e ? "O" : "";
                return t + "Perspective"in e ? "translate3d" : t + "Transform"in e ? "translate" : "margin"
            }
            ;
            var a = (n = [],
            function(e) {
                n.push(e),
                1 == n.length && function e() {
                    var t = n.shift();
                    t && t(e)
                }()
            }
            )
              , s = function() {
                var e = ["Webkit", "O", "Moz", "ms"]
                  , t = {};
                function n(n, r, i) {
                    var o;
                    r = t[o = (o = r).replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                        return t.toUpperCase()
                    })] || (t[o] = function(t) {
                        var n = document.body.style;
                        if (t in n)
                            return t;
                        for (var r, i = e.length, o = t.charAt(0).toUpperCase() + t.slice(1); i--; )
                            if ((r = e[i] + o)in n)
                                return r;
                        return t
                    }(o)),
                    n.style[r] = i
                }
                return function(e, t) {
                    var r, i, o = arguments;
                    if (2 == o.length)
                        for (r in t)
                            void 0 !== (i = t[r]) && t.hasOwnProperty(r) && n(e, r, i);
                    else
                        n(e, o[1], o[2])
                }
            }();
            function l(e, t) {
                return ("string" == typeof e ? e : d(e)).indexOf(" " + t + " ") >= 0
            }
            function u(e, t) {
                var n = d(e)
                  , r = n + t;
                l(n, t) || (e.className = r.substring(1))
            }
            function c(e, t) {
                var n, r = d(e);
                l(e, t) && (n = r.replace(" " + t + " ", " "),
                e.className = n.substring(1, n.length - 1))
            }
            function d(e) {
                return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
            }
            function p(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }
            return r
        }
        ) ? r.call(t, n, t, e) : r) && (e.exports = i)
    },
    34155: function(e) {
        var t, n, r, i = e.exports = {};
        function o() {
            throw Error("setTimeout has not been defined")
        }
        function a() {
            throw Error("clearTimeout has not been defined")
        }
        function s(e) {
            if (t === setTimeout)
                return setTimeout(e, 0);
            if ((t === o || !t) && setTimeout)
                return t = setTimeout,
                setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (n) {
                try {
                    return t.call(null, e, 0)
                } catch (n) {
                    return t.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                t = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                t = o
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                n = a
            }
        }();
        var l = []
          , u = !1
          , c = -1;
        function d() {
            u && r && (u = !1,
            r.length ? l = r.concat(l) : c = -1,
            l.length && p())
        }
        function p() {
            if (!u) {
                var e = s(d);
                u = !0;
                for (var t = l.length; t; ) {
                    for (r = l,
                    l = []; ++c < t; )
                        r && r[c].run();
                    c = -1,
                    t = l.length
                }
                r = null,
                u = !1,
                function(e) {
                    if (n === clearTimeout)
                        return clearTimeout(e);
                    if ((n === a || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(e);
                    try {
                        n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function f(e, t) {
            this.fun = e,
            this.array = t
        }
        function h() {}
        i.nextTick = function(e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            l.push(new f(e,t)),
            1 !== l.length || u || s(p)
        }
        ,
        f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        i.title = "browser",
        i.browser = !0,
        i.env = {},
        i.argv = [],
        i.version = "",
        i.versions = {},
        i.on = h,
        i.addListener = h,
        i.once = h,
        i.off = h,
        i.removeListener = h,
        i.removeAllListeners = h,
        i.emit = h,
        i.prependListener = h,
        i.prependOnceListener = h,
        i.listeners = function(e) {
            return []
        }
        ,
        i.binding = function(e) {
            throw Error("process.binding is not supported")
        }
        ,
        i.cwd = function() {
            return "/"
        }
        ,
        i.chdir = function(e) {
            throw Error("process.chdir is not supported")
        }
        ,
        i.umask = function() {
            return 0
        }
    },
    90599: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = e => "currentcolor" === e || "currentColor" === e || "inherit" === e || 0 === e.indexOf("var(")
          , i = n(1082)
          , o = function(e, t) {
            if (void 0 === t && (t = 1),
            null != e) {
                if ("string" == typeof e && r(e))
                    return e;
                var n = (0,
                i.Z)(e);
                if (null != n) {
                    var o = ((n >> 24 & 255) / 255 * t).toFixed(2);
                    return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (255 & n) + "," + o + ")"
                }
            }
        }
    },
    45775: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var r = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexOrder: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            fontWeight: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowGap: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnGap: !0,
            gridColumnStart: !0,
            lineClamp: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
            scale: !0,
            scaleX: !0,
            scaleY: !0,
            scaleZ: !0,
            shadowOpacity: !0
        }
          , i = ["ms", "Moz", "O", "Webkit"]
          , o = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1);
        Object.keys(r).forEach(e => {
            i.forEach(t => {
                r[o(t, e)] = r[e]
            }
            )
        }
        );
        var a = n(90599)
          , s = {
            backgroundColor: !0,
            borderColor: !0,
            borderTopColor: !0,
            borderRightColor: !0,
            borderBottomColor: !0,
            borderLeftColor: !0,
            color: !0,
            shadowColor: !0,
            textDecorationColor: !0,
            textShadowColor: !0
        };
        function l(e, t) {
            var n = e;
            return null != t && r[t] || "number" != typeof e ? null != t && s[t] && (n = (0,
            a.Z)(e)) : n = e + "px",
            n
        }
    },
    61212: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return h
            }
        });
        var r = n(13145);
        function i(e, t, n) {
            if (!r.Z)
                return null;
            var i = null != t ? t : document
              , o = i.getElementById(e);
            if (null == o) {
                if ((o = document.createElement("style")).setAttribute("id", e),
                "string" == typeof n && o.appendChild(document.createTextNode(n)),
                i instanceof ShadowRoot)
                    i.insertBefore(o, i.firstChild);
                else {
                    var a = i.head;
                    a && a.insertBefore(o, a.firstChild)
                }
            }
            return o.sheet
        }
        var o = Array.prototype.slice;
        function a(e) {
            var t, n = {}, r = {};
            function i(e, t, r) {
                var i = l(n)
                  , o = i.indexOf(t) + 1
                  , a = i[o]
                  , s = null != a && null != n[a].start ? n[a].start : e.cssRules.length
                  , u = function(e, t, n) {
                    try {
                        return e.insertRule(t, n),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(e, r, s);
                if (u) {
                    null == n[t].start && (n[t].start = s);
                    for (var c = o; c < i.length; c += 1) {
                        var d = i[c]
                          , p = n[d].start || 0;
                        n[d].start = p + 1
                    }
                }
                return u
            }
            return null != e && o.call(e.cssRules).forEach( (e, i) => {
                var o = e.cssText;
                if (o.indexOf("stylesheet-group") > -1)
                    n[t = Number(e.selectorText.split(s)[1])] = {
                        start: i,
                        rules: [o]
                    };
                else {
                    var a = c(o);
                    null != a && (r[a] = !0,
                    n[t].rules.push(o))
                }
            }
            ),
            {
                getTextContent: () => l(n).map(e => {
                    var t = n[e].rules
                      , r = t.shift();
                    return t.sort(),
                    t.unshift(r),
                    t.join("\n")
                }
                ).join("\n"),
                insert(t, o) {
                    var a = Number(o);
                    if (null == n[a]) {
                        var s = '[stylesheet-group="' + a + '"]{}';
                        n[a] = {
                            start: null,
                            rules: [s]
                        },
                        null != e && i(e, a, s)
                    }
                    var l = c(t);
                    null == l || null != r[l] || (r[l] = !0,
                    n[a].rules.push(t),
                    null == e || i(e, a, t) || n[a].rules.pop())
                }
            }
        }
        var s = /["']/g;
        function l(e) {
            return Object.keys(e).map(Number).sort( (e, t) => e > t ? 1 : -1)
        }
        var u = /\s*([,])\s*/g;
        function c(e) {
            var t = e.split("{")[0].trim();
            return "" !== t ? t.replace(u, "$1") : null
        }
        var d = new WeakMap
          , p = []
          , f = ["html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}", "body{margin:0;}", "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}", "input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"];
        function h(e, t) {
            if (void 0 === t && (t = "react-native-stylesheet"),
            r.Z) {
                var n, o = null != e ? e.getRootNode() : document;
                if (0 === p.length)
                    n = a(i(t)),
                    f.forEach(e => {
                        n.insert(e, 0)
                    }
                    ),
                    d.set(o, p.length),
                    p.push(n);
                else {
                    var s = d.get(o);
                    if (null == s) {
                        var l = p[0];
                        n = a(i(t, o, null != l ? l.getTextContent() : "")),
                        d.set(o, p.length),
                        p.push(n)
                    } else
                        n = p[s]
                }
            } else
                0 === p.length ? (n = a(i(t)),
                f.forEach(e => {
                    n.insert(e, 0)
                }
                ),
                p.push(n)) : n = p[0];
            return {
                getTextContent: () => n.getTextContent(),
                id: t,
                insert(e, t) {
                    p.forEach(n => {
                        n.insert(e, t)
                    }
                    )
                }
            }
        }
    },
    57592: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return eg
            }
        });
        var r = n(89984)
          , i = n(89172)
          , o = n(45775)
          , a = n(13145)
          , s = {}
          , l = !a.Z || null != window.CSS && null != window.CSS.supports && (window.CSS.supports("text-decoration-line", "none") || window.CSS.supports("-webkit-text-decoration-line", "none"))
          , u = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif'
          , c = {
            borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
            borderBlockColor: ["borderTopColor", "borderBottomColor"],
            borderInlineColor: ["borderRightColor", "borderLeftColor"],
            borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            borderStyle: ["borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle"],
            borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
            borderInlineStyle: ["borderRightStyle", "borderLeftStyle"],
            borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
            borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
            borderInlineWidth: ["borderRightWidth", "borderLeftWidth"],
            insetBlock: ["top", "bottom"],
            insetInline: ["left", "right"],
            marginBlock: ["marginTop", "marginBottom"],
            marginInline: ["marginRight", "marginLeft"],
            paddingBlock: ["paddingTop", "paddingBottom"],
            paddingInline: ["paddingRight", "paddingLeft"],
            overflow: ["overflowX", "overflowY"],
            overscrollBehavior: ["overscrollBehaviorX", "overscrollBehaviorY"],
            borderBlockStartColor: ["borderTopColor"],
            borderBlockStartStyle: ["borderTopStyle"],
            borderBlockStartWidth: ["borderTopWidth"],
            borderBlockEndColor: ["borderBottomColor"],
            borderBlockEndStyle: ["borderBottomStyle"],
            borderBlockEndWidth: ["borderBottomWidth"],
            borderEndStartRadius: ["borderBottomLeftRadius"],
            borderEndEndRadius: ["borderBottomRightRadius"],
            borderStartStartRadius: ["borderTopLeftRadius"],
            borderStartEndRadius: ["borderTopRightRadius"],
            insetBlockEnd: ["bottom"],
            insetBlockStart: ["top"],
            marginBlockStart: ["marginTop"],
            marginBlockEnd: ["marginBottom"],
            paddingBlockStart: ["paddingTop"],
            paddingBlockEnd: ["paddingBottom"]
        }
          , d = (e, t) => {
            if (!e)
                return s;
            var n = {};
            for (var r in e)
                if ("continue" === function() {
                    var i = e[r];
                    if (null == i)
                        return "continue";
                    if ("backgroundClip" === r)
                        "text" === i && (n.backgroundClip = i,
                        n.WebkitBackgroundClip = i);
                    else if ("flex" === r)
                        -1 === i ? (n.flexGrow = 0,
                        n.flexShrink = 1,
                        n.flexBasis = "auto") : n.flex = i;
                    else if ("font" === r)
                        n[r] = i.replace("System", u);
                    else if ("fontFamily" === r) {
                        if (i.indexOf("System") > -1) {
                            var a = i.split(/,\s*/);
                            a[a.indexOf("System")] = u,
                            n[r] = a.join(",")
                        } else
                            "monospace" === i ? n[r] = "monospace,monospace" : n[r] = i
                    } else if ("textDecorationLine" === r)
                        l ? n.textDecorationLine = i : n.textDecoration = i;
                    else if ("writingDirection" === r)
                        n.direction = i;
                    else {
                        var s = (0,
                        o.Z)(e[r], r)
                          , d = c[r];
                        t && "inset" === r ? (null == e.insetInline && (n.left = s,
                        n.right = s),
                        null == e.insetBlock && (n.top = s,
                        n.bottom = s)) : t && "margin" === r ? (null == e.marginInline && (n.marginLeft = s,
                        n.marginRight = s),
                        null == e.marginBlock && (n.marginTop = s,
                        n.marginBottom = s)) : t && "padding" === r ? (null == e.paddingInline && (n.paddingLeft = s,
                        n.paddingRight = s),
                        null == e.paddingBlock && (n.paddingTop = s,
                        n.paddingBottom = s)) : d ? d.forEach( (t, r) => {
                            null == e[t] && (n[t] = s)
                        }
                        ) : n[r] = s
                    }
                }())
                    continue;
            return n
        }
          , p = e => (function(e, t) {
            for (var n, r = e.length, i = 1 ^ r, o = 0; r >= 4; )
                n = (65535 & (n = 255 & e.charCodeAt(o) | (255 & e.charCodeAt(++o)) << 8 | (255 & e.charCodeAt(++o)) << 16 | (255 & e.charCodeAt(++o)) << 24)) * 1540483477 + (((n >>> 16) * 1540483477 & 65535) << 16),
                n ^= n >>> 24,
                i = (65535 & i) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16) ^ (n = (65535 & n) * 1540483477 + (((n >>> 16) * 1540483477 & 65535) << 16)),
                r -= 4,
                ++o;
            switch (r) {
            case 3:
                i ^= (255 & e.charCodeAt(o + 2)) << 16;
            case 2:
                i ^= (255 & e.charCodeAt(o + 1)) << 8;
            case 1:
                i ^= 255 & e.charCodeAt(o),
                i = (65535 & i) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16)
            }
            return i ^= i >>> 13,
            i = (65535 & i) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16),
            (i ^= i >>> 15) >>> 0
        }
        )(e, 0).toString(36)
          , f = /[A-Z]/g
          , h = /^ms-/
          , m = {};
        function g(e) {
            return "-" + e.toLowerCase()
        }
        var y = function(e) {
            if (e in m)
                return m[e];
            var t = e.replace(f, g);
            return m[e] = h.test(t) ? "-" + t : t
        }
          , v = n(39668)
          , b = n(61505)
          , _ = n(7951)
          , S = n(81385)
          , w = n(29432)
          , E = n(23716)
          , x = n(40109)
          , k = n(42564)
          , O = n(42758)
          , C = n(26327)
          , T = ["Webkit"]
          , R = ["Webkit", "ms"]
          , I = {
            plugins: [b.Z, _.Z, S.Z, w.Z, E.Z, x.Z, k.Z, O.Z, C.Z],
            prefixMap: {
                appearance: ["Webkit", "Moz", "ms"],
                userSelect: ["Webkit", "Moz"],
                textEmphasisPosition: R,
                textEmphasis: R,
                textEmphasisStyle: R,
                textEmphasisColor: R,
                boxDecorationBreak: R,
                clipPath: T,
                maskImage: R,
                maskMode: R,
                maskRepeat: R,
                maskPosition: R,
                maskClip: R,
                maskOrigin: R,
                maskSize: R,
                maskComposite: R,
                mask: R,
                maskBorderSource: R,
                maskBorderMode: R,
                maskBorderSlice: R,
                maskBorderWidth: R,
                maskBorderOutset: R,
                maskBorderRepeat: R,
                maskBorder: R,
                maskType: R,
                textDecorationStyle: T,
                textDecorationSkip: T,
                textDecorationLine: T,
                textDecorationColor: T,
                filter: T,
                breakAfter: T,
                breakBefore: T,
                breakInside: T,
                columnCount: T,
                columnFill: T,
                columnGap: T,
                columnRule: T,
                columnRuleColor: T,
                columnRuleStyle: T,
                columnRuleWidth: T,
                columns: T,
                columnSpan: T,
                columnWidth: T,
                backdropFilter: T,
                hyphens: T,
                flowInto: T,
                flowFrom: T,
                regionFragment: T,
                textOrientation: T,
                tabSize: ["Moz"],
                fontKerning: T,
                textSizeAdjust: T
            }
        }
          , M = (0,
        v.Z)(I)
          , A = ["animationKeyframes"]
          , D = new Map
          , L = {}
          , P = {
            borderColor: 2,
            borderRadius: 2,
            borderStyle: 2,
            borderWidth: 2,
            display: 2,
            flex: 2,
            inset: 2,
            margin: 2,
            overflow: 2,
            overscrollBehavior: 2,
            padding: 2,
            insetBlock: 2.1,
            insetInline: 2.1,
            marginInline: 2.1,
            marginBlock: 2.1,
            paddingInline: 2.1,
            paddingBlock: 2.1,
            borderBlockStartColor: 2.2,
            borderBlockStartStyle: 2.2,
            borderBlockStartWidth: 2.2,
            borderBlockEndColor: 2.2,
            borderBlockEndStyle: 2.2,
            borderBlockEndWidth: 2.2,
            borderInlineStartColor: 2.2,
            borderInlineStartStyle: 2.2,
            borderInlineStartWidth: 2.2,
            borderInlineEndColor: 2.2,
            borderInlineEndStyle: 2.2,
            borderInlineEndWidth: 2.2,
            borderEndStartRadius: 2.2,
            borderEndEndRadius: 2.2,
            borderStartStartRadius: 2.2,
            borderStartEndRadius: 2.2,
            insetBlockEnd: 2.2,
            insetBlockStart: 2.2,
            insetInlineEnd: 2.2,
            insetInlineStart: 2.2,
            marginBlockStart: 2.2,
            marginBlockEnd: 2.2,
            marginInlineStart: 2.2,
            marginInlineEnd: 2.2,
            paddingBlockStart: 2.2,
            paddingBlockEnd: 2.2,
            paddingInlineStart: 2.2,
            paddingInlineEnd: 2.2
        }
          , N = "borderTopLeftRadius"
          , j = "borderTopRightRadius"
          , B = "borderBottomLeftRadius"
          , U = "borderBottomRightRadius"
          , $ = "borderLeftColor"
          , W = "borderLeftStyle"
          , F = "borderLeftWidth"
          , z = "borderRightColor"
          , H = "borderRightStyle"
          , q = "borderRightWidth"
          , Z = "right"
          , X = "marginLeft"
          , J = "marginRight"
          , G = "paddingLeft"
          , V = "paddingRight"
          , Y = "left"
          , K = {
            [N]: j,
            [j]: N,
            [B]: U,
            [U]: B,
            [$]: z,
            [W]: H,
            [F]: q,
            [z]: $,
            [H]: W,
            [q]: F,
            [Y]: Z,
            [X]: J,
            [J]: X,
            [G]: V,
            [V]: G,
            [Z]: Y
        }
          , Q = {
            borderStartStartRadius: N,
            borderStartEndRadius: j,
            borderEndStartRadius: B,
            borderEndEndRadius: U,
            borderInlineStartColor: $,
            borderInlineStartStyle: W,
            borderInlineStartWidth: F,
            borderInlineEndColor: z,
            borderInlineEndStyle: H,
            borderInlineEndWidth: q,
            insetInlineEnd: Z,
            insetInlineStart: Y,
            marginInlineStart: X,
            marginInlineEnd: J,
            paddingInlineStart: G,
            paddingInlineEnd: V
        }
          , ee = ["clear", "float", "textAlign"];
        function et(e) {
            var t = M(d(e));
            return "{" + Object.keys(t).map(e => {
                var n = t[e]
                  , r = y(e);
                return Array.isArray(n) ? n.map(e => r + ":" + e).join(";") : r + ":" + n
            }
            ).sort().join(";") + ";}"
        }
        function en(e) {
            if ("number" == typeof e)
                throw Error("Invalid CSS keyframes type: " + typeof e);
            var t = []
              , n = [];
            return (Array.isArray(e) ? e : [e]).forEach(e => {
                if ("string" == typeof e)
                    t.push(e);
                else {
                    var r, i, o, a = (r = "r-" + p("animation" + JSON.stringify(e)),
                    i = "{" + Object.keys(e).map(t => {
                        var n = et(e[t]);
                        return "" + t + n
                    }
                    ).join("") + "}",
                    o = ["-webkit-", ""].map(e => "@" + e + "keyframes " + r + i),
                    [r, o]), s = a[0], l = a[1];
                    t.push(s),
                    n.push(...l)
                }
            }
            ),
            [t, n]
        }
        var er = n(61212)
          , ei = n(55789)
          , eo = n(53817)
          , ea = n(59061)
          , es = ["writingDirection"]
          , el = new WeakMap
          , eu = (0,
        er.S)()
          , ec = {
            shadow: !0,
            textShadow: !0
        };
        function ed(e) {
            e.forEach(e => {
                var t = e[0]
                  , n = e[1];
                null != eu && t.forEach(e => {
                    eu.insert(e, n)
                }
                )
            }
            )
        }
        var ep = {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
          , ef = eh({
            x: (0,
            r.Z)({}, ep)
        }).x;
        function eh(e) {
            return Object.keys(e).forEach(t => {
                var n, a, s, l, u, c = e[t];
                null != c && !0 !== c.$$css && (t.indexOf("$raw") > -1 ? (a = (n = function(e, t) {
                    var n, o = {
                        $$css: !0
                    }, a = [], s = e.animationKeyframes, l = (0,
                    i.Z)(e, A), u = "css-" + p(t + JSON.stringify(e));
                    if (null != s) {
                        var c = en(s)
                          , d = c[0]
                          , f = c[1];
                        n = d.join(","),
                        a.push(...f)
                    }
                    var h = et((0,
                    r.Z)((0,
                    r.Z)({}, l), {}, {
                        animationName: n
                    }));
                    return a.push("." + u + h),
                    o[u] = u,
                    [o, [[a, 1]]]
                }(c, t.split("$raw")[0]))[0],
                ed(n[1]),
                u = a) : (l = (s = function(e) {
                    var t = {
                        $$css: !0
                    }
                      , n = [];
                    function r(e, t, r) {
                        var i, a, s = "string" != typeof (i = (0,
                        o.Z)(r, t)) ? JSON.stringify(i || "") : i, l = t + s, u = D.get(l);
                        if (null != u)
                            a = u[0],
                            n.push(u[1]);
                        else {
                            a = "r-" + p(e + (e !== t ? l : s));
                            var c = P[e] || 3
                              , d = [function(e, t, n) {
                                var r = []
                                  , i = "." + e;
                                switch (t) {
                                case "animationKeyframes":
                                    var o = en(n)
                                      , a = o[0]
                                      , s = o[1]
                                      , l = et({
                                        animationName: a.join(",")
                                    });
                                    r.push("" + i + l, ...s);
                                    break;
                                case "placeholderTextColor":
                                    var u = et({
                                        color: n,
                                        opacity: 1
                                    });
                                    r.push(i + "::-webkit-input-placeholder" + u, i + "::-moz-placeholder" + u, i + ":-ms-input-placeholder" + u, i + "::placeholder" + u);
                                    break;
                                case "pointerEvents":
                                    var c = n;
                                    if ("auto" === n || "box-only" === n) {
                                        if (c = "auto!important",
                                        "box-only" === n) {
                                            var d = et({
                                                pointerEvents: "none"
                                            });
                                            r.push(i + ">*" + d)
                                        }
                                    } else if (("none" === n || "box-none" === n) && (c = "none!important",
                                    "box-none" === n)) {
                                        var p = et({
                                            pointerEvents: "auto"
                                        });
                                        r.push(i + ">*" + p)
                                    }
                                    var f = et({
                                        pointerEvents: c
                                    });
                                    r.push("" + i + f);
                                    break;
                                case "scrollbarWidth":
                                    "none" === n && r.push(i + "::-webkit-scrollbar{display:none}");
                                    var h = et({
                                        scrollbarWidth: n
                                    });
                                    r.push("" + i + h);
                                    break;
                                default:
                                    var m = et({
                                        [t]: n
                                    });
                                    r.push("" + i + m)
                                }
                                return r
                            }(a, t, r), c];
                            n.push(d),
                            D.set(l, [a, d])
                        }
                        return a
                    }
                    return Object.keys(e).sort().forEach(n => {
                        var i = e[n];
                        if (null != i) {
                            if (ee.indexOf(n) > -1) {
                                var o, a = r(n, n, "left"), s = r(n, n, "right");
                                "start" === i ? o = [a, s] : "end" === i && (o = [s, a])
                            }
                            var l = Q[n];
                            if (null != l && (o = [r(n, l, i), r(n, K[l], i)]),
                            "transitionProperty" === n) {
                                for (var u = Array.isArray(i) ? i : [i], c = [], d = 0; d < u.length; d++) {
                                    var p = u[d];
                                    "string" == typeof p && null != Q[p] && c.push(d)
                                }
                                if (c.length > 0) {
                                    var f = [...u]
                                      , h = [...u];
                                    c.forEach(e => {
                                        var t = f[e];
                                        if ("string" == typeof t) {
                                            var i = Q[t]
                                              , a = K[i];
                                            f[e] = i,
                                            h[e] = a,
                                            o = [r(n, n, f), r(n, n, h)]
                                        }
                                    }
                                    )
                                }
                            }
                            null == o ? o = r(n, n, i) : t.$$css$localize = !0,
                            t[n] = o
                        }
                    }
                    ),
                    [t, n]
                }((0,
                eo.dj)(c, ec)))[0],
                ed(s[1]),
                u = l),
                el.set(c, u))
            }
            ),
            e
        }
        function em(e, t) {
            void 0 === t && (t = {});
            var n, o, a, s, l, u = "rtl" === t.writingDirection, c = (void 0 === (n = t) && (n = {}),
            a = (o = n).writingDirection,
            s = (0,
            i.Z)(o, es),
            l = "rtl" === a,
            ea.D.factory({
                transform(e) {
                    var t = el.get(e);
                    return null != t ? (0,
                    ei.j)(t, l) : (0,
                    eo.dj)(e, (0,
                    r.Z)((0,
                    r.Z)({}, ec), s))
                }
            })(e));
            return Array.isArray(c) && null != c[1] && (c[1] = function(e, t) {
                var n = e || L
                  , r = {}
                  , i = {};
                for (var o in n)
                    if ("continue" === function() {
                        var e = n[o]
                          , a = o
                          , s = e;
                        if (!Object.prototype.hasOwnProperty.call(n, o) || null == e)
                            return "continue";
                        ee.indexOf(o) > -1 && ("start" === e ? s = t ? "right" : "left" : "end" === e && (s = t ? "left" : "right"));
                        var l = Q[o];
                        if (null != l && (a = t ? K[l] : l),
                        "transitionProperty" === o) {
                            var u = Array.isArray(e) ? e : [e];
                            u.forEach( (e, n) => {
                                if ("string" == typeof e) {
                                    var r = Q[e];
                                    null != r && (u[n] = t ? K[r] : r,
                                    s = u.join(" "))
                                }
                            }
                            )
                        }
                        r[a] || (i[a] = s),
                        a === o && (r[a] = !0)
                    }())
                        continue;
                return d(i, !0)
            }(c[1], u)),
            c
        }
        em.absoluteFill = ef,
        em.absoluteFillObject = ep,
        em.create = eh,
        em.compose = function(e, t) {
            return [e, t]
        }
        ,
        em.flatten = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            for (var r = t.flat(1 / 0), i = {}, o = 0; o < r.length; o++) {
                var a = r[o];
                null != a && "object" == typeof a && Object.assign(i, a)
            }
            return i
        }
        ,
        em.getSheet = function() {
            return {
                id: eu.id,
                textContent: eu.getTextContent()
            }
        }
        ,
        em.hairlineWidth = 1,
        a.Z && window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = em.flatten);
        var eg = em
    },
    53817: function(e, t, n) {
        "use strict";
        n.d(t, {
            Lm: function() {
                return l
            },
            dj: function() {
                return h
            }
        });
        var r = n(90599)
          , i = n(45775)
          , o = n(98506)
          , a = {}
          , s = {
            height: 0,
            width: 0
        }
          , l = e => {
            var t = e.shadowColor
              , n = e.shadowOffset
              , o = e.shadowOpacity
              , a = e.shadowRadius
              , l = n || s
              , u = l.height
              , c = l.width
              , d = (0,
            i.Z)(c)
              , p = (0,
            i.Z)(u)
              , f = (0,
            i.Z)(a || 0)
              , h = (0,
            r.Z)(t || "black", o);
            if (null != h && null != d && null != p && null != f)
                return d + " " + p + " " + f + " " + h
        }
          , u = e => {
            var t = e.textShadowColor
              , n = e.textShadowOffset
              , r = e.textShadowRadius
              , o = n || s
              , a = o.height
              , l = o.width
              , u = r || 0
              , c = (0,
            i.Z)(l)
              , d = (0,
            i.Z)(a)
              , p = (0,
            i.Z)(u)
              , f = (0,
            i.Z)(t, "textShadowColor");
            if (f && (0 !== a || 0 !== l || 0 !== u) && null != c && null != d && null != p)
                return c + " " + d + " " + p + " " + f
        }
          , c = e => {
            var t = Object.keys(e)[0]
              , n = e[t];
            if ("matrix" === t || "matrix3d" === t)
                return t + "(" + n.join(",") + ")";
            var r = (0,
            i.Z)(n, t);
            return t + "(" + r + ")"
        }
          , d = e => e.map(c).join(" ")
          , p = {
            borderBottomEndRadius: "borderEndEndRadius",
            borderBottomStartRadius: "borderEndStartRadius",
            borderTopEndRadius: "borderStartEndRadius",
            borderTopStartRadius: "borderStartStartRadius",
            borderEndColor: "borderInlineEndColor",
            borderEndStyle: "borderInlineEndStyle",
            borderEndWidth: "borderInlineEndWidth",
            borderStartColor: "borderInlineStartColor",
            borderStartStyle: "borderInlineStartStyle",
            borderStartWidth: "borderInlineStartWidth",
            end: "insetInlineEnd",
            marginEnd: "marginInlineEnd",
            marginHorizontal: "marginInline",
            marginStart: "marginInlineStart",
            marginVertical: "marginBlock",
            paddingEnd: "paddingInlineEnd",
            paddingHorizontal: "paddingInline",
            paddingStart: "paddingInlineStart",
            paddingVertical: "paddingBlock",
            start: "insetInlineStart"
        }
          , f = {
            elevation: !0,
            overlayColor: !0,
            resizeMode: !0,
            tintColor: !0
        }
          , h = function(e, t) {
            void 0 === t && (t = {});
            var n = e || a
              , r = {};
            if (t.shadow,
            null != n.shadowColor || null != n.shadowOffset || null != n.shadowOpacity || null != n.shadowRadius) {
                (0,
                o.O)("shadowStyles", '"shadow*" style props are deprecated. Use "boxShadow".');
                var i = l(n);
                if (null != i && null == r.boxShadow) {
                    var s = n.boxShadow;
                    r.boxShadow = s ? s + ", " + i : i
                }
            }
            if (t.textShadow,
            null != n.textShadowColor || null != n.textShadowOffset || null != n.textShadowRadius) {
                (0,
                o.O)("textShadowStyles", '"textShadow*" style props are deprecated. Use "textShadow".');
                var c = u(n);
                if (null != c && null == r.textShadow) {
                    var h = n.textShadow;
                    r.textShadow = h ? h + ", " + c : c
                }
            }
            for (var m in n)
                if (null == f[m] && "shadowColor" !== m && "shadowOffset" !== m && "shadowOpacity" !== m && "shadowRadius" !== m && "textShadowColor" !== m && "textShadowOffset" !== m && "textShadowRadius" !== m) {
                    var g = n[m]
                      , y = p[m] || m
                      , v = g;
                    Object.prototype.hasOwnProperty.call(n, m) && (y === m || null == n[y]) && ("aspectRatio" === y && "number" == typeof v ? r[y] = v.toString() : "fontVariant" === y ? (Array.isArray(v) && v.length > 0 && ((0,
                    o.O)("fontVariant", '"fontVariant" style array value is deprecated. Use space-separated values.'),
                    v = v.join(" ")),
                    r[y] = v) : "textAlignVertical" === y ? ((0,
                    o.O)("textAlignVertical", '"textAlignVertical" style is deprecated. Use "verticalAlign".'),
                    null == n.verticalAlign && (r.verticalAlign = "center" === v ? "middle" : v)) : "transform" === y ? (Array.isArray(v) && (v = d(v)),
                    r.transform = v) : r[y] = v)
                }
            return r
        }
    },
    84370: function(e, t, n) {
        "use strict";
        var r = (0,
        n(67294).createContext)(!1);
        t.Z = r
    },
    90005: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return d
            }
        });
        var r = n(53767)
          , i = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexOrder: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            fontWeight: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowGap: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnGap: !0,
            gridColumnStart: !0,
            lineClamp: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
            scale: !0,
            scaleX: !0,
            scaleY: !0,
            scaleZ: !0,
            shadowOpacity: !0
        }
          , o = ["ms", "Moz", "O", "Webkit"]
          , a = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1);
        Object.keys(i).forEach(e => {
            o.forEach(t => {
                i[a(t, e)] = i[e]
            }
            )
        }
        );
        var s = function(e, t) {
            var n = e.style;
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var o, a, s = 0 === r.indexOf("--"), l = (o = r,
                    null == (a = t[r]) || "boolean" == typeof a || "" === a ? "" : s || "number" != typeof a || 0 === a || i.hasOwnProperty(o) && i[o] ? ("" + a).trim() : a + "px");
                    "float" === r && (r = "cssFloat"),
                    s ? n.setProperty(r, l) : n[r] = l
                }
        }
          , l = e => {
            var t = e.offsetHeight
              , n = e.offsetWidth
              , r = e.offsetLeft
              , i = e.offsetTop;
            for (e = e.offsetParent; e && 1 === e.nodeType; )
                r += e.offsetLeft + e.clientLeft - e.scrollLeft,
                i += e.offsetTop + e.clientTop - e.scrollTop,
                e = e.offsetParent;
            return {
                width: n,
                height: t,
                top: i -= window.scrollY,
                left: r -= window.scrollX
            }
        }
          , u = (e, t, n) => {
            var r = t || e && e.parentNode;
            e && r && setTimeout( () => {
                if (e.isConnected && r.isConnected) {
                    var t = l(r)
                      , i = l(e)
                      , o = i.height
                      , a = i.left
                      , s = i.top
                      , u = i.width;
                    n(a - t.left, s - t.top, u, o, a, s)
                }
            }
            , 0)
        }
          , c = {
            A: !0,
            BODY: !0,
            INPUT: !0,
            SELECT: !0,
            TEXTAREA: !0
        }
          , d = {
            blur(e) {
                try {
                    e.blur()
                } catch (e) {}
            },
            focus(e) {
                try {
                    var t = e.nodeName;
                    null == e.getAttribute("tabIndex") && !0 !== e.isContentEditable && null == c[t] && e.setAttribute("tabIndex", "-1"),
                    e.focus()
                } catch (e) {}
            },
            measure(e, t) {
                u(e, null, t)
            },
            measureInWindow(e, t) {
                e && setTimeout( () => {
                    var n = (0,
                    r.Z)(e)
                      , i = n.height;
                    t(n.left, n.top, n.width, i)
                }
                , 0)
            },
            measureLayout(e, t, n, r) {
                u(e, t, r)
            },
            updateView(e, t) {
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = t[n];
                        switch (n) {
                        case "style":
                            s(e, r);
                            break;
                        case "class":
                        case "className":
                            e.setAttribute("class", r);
                            break;
                        case "text":
                        case "value":
                            e.value = r;
                            break;
                        default:
                            e.setAttribute(n, r)
                        }
                    }
            },
            configureNextLayoutAnimation(e, t) {
                t()
            },
            setLayoutAnimationEnabledExperimental() {}
        }
    },
    67177: function(e, t, n) {
        "use strict";
        var r = n(89172)
          , i = n(67294)
          , o = n(87573)
          , a = n(13250)
          , s = n(45819)
          , l = n(30042)
          , u = n(16528)
          , c = n(60091)
          , d = n(72359)
          , p = n(57592)
          , f = n(84370)
          , h = n(72931)
          , m = ["hrefAttrs", "onLayout", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture"]
          , g = Object.assign({}, a.lG, a.LO, a._T, a.YB, a.Uy, a.hJ, a.E5, a.vr, {
            href: !0,
            lang: !0,
            onScroll: !0,
            onWheel: !0,
            pointerEvents: !0
        })
          , y = e => (0,
        s.Z)(e, g)
          , v = i.forwardRef( (e, t) => {
            var n = e.hrefAttrs
              , a = e.onLayout
              , s = e.onMoveShouldSetResponder
              , p = e.onMoveShouldSetResponderCapture
              , g = e.onResponderEnd
              , v = e.onResponderGrant
              , _ = e.onResponderMove
              , S = e.onResponderReject
              , w = e.onResponderRelease
              , E = e.onResponderStart
              , x = e.onResponderTerminate
              , k = e.onResponderTerminationRequest
              , O = e.onScrollShouldSetResponder
              , C = e.onScrollShouldSetResponderCapture
              , T = e.onSelectionChangeShouldSetResponder
              , R = e.onSelectionChangeShouldSetResponderCapture
              , I = e.onStartShouldSetResponder
              , M = e.onStartShouldSetResponderCapture
              , A = (0,
            r.Z)(e, m)
              , D = i.useContext(f.Z)
              , L = i.useRef(null)
              , P = (0,
            h.PE)().direction;
            (0,
            l.Z)(L, a),
            (0,
            d.Z)(L, {
                onMoveShouldSetResponder: s,
                onMoveShouldSetResponderCapture: p,
                onResponderEnd: g,
                onResponderGrant: v,
                onResponderMove: _,
                onResponderReject: S,
                onResponderRelease: w,
                onResponderStart: E,
                onResponderTerminate: x,
                onResponderTerminationRequest: k,
                onScrollShouldSetResponder: O,
                onScrollShouldSetResponderCapture: C,
                onSelectionChangeShouldSetResponder: T,
                onSelectionChangeShouldSetResponderCapture: R,
                onStartShouldSetResponder: I,
                onStartShouldSetResponderCapture: M
            });
            var N = "div"
              , j = null != e.lang ? (0,
            h.w1)(e.lang) : null
              , B = e.dir || j
              , U = B || P
              , $ = y(A);
            if ($.dir = B,
            $.style = [b.view$raw, D && b.inline, e.style],
            null != e.href && (N = "a",
            null != n)) {
                var W = n.download
                  , F = n.rel
                  , z = n.target;
                null != W && ($.download = W),
                null != F && ($.rel = F),
                "string" == typeof z && ($.target = "_" !== z.charAt(0) ? "_" + z : z)
            }
            var H = (0,
            c.Z)($)
              , q = (0,
            u.Z)(L, H, t);
            return $.ref = q,
            (0,
            o.Z)(N, $, {
                writingDirection: U
            })
        }
        );
        v.displayName = "View";
        var b = p.Z.create({
            view$raw: {
                alignItems: "stretch",
                backgroundColor: "transparent",
                border: "0 solid black",
                boxSizing: "border-box",
                display: "flex",
                flexBasis: "auto",
                flexDirection: "column",
                flexShrink: 0,
                listStyle: "none",
                margin: 0,
                minHeight: 0,
                minWidth: 0,
                padding: 0,
                position: "relative",
                textDecoration: "none",
                zIndex: 0
            },
            inline: {
                display: "inline-flex"
            }
        });
        t.Z = v
    },
    87573: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return b
            }
        });
        var r = n(56861)
          , i = n(89984)
          , o = n(89172)
          , a = n(57592)
          , s = n(98506)
          , l = ["aria-activedescendant", "accessibilityActiveDescendant", "aria-atomic", "accessibilityAtomic", "aria-autocomplete", "accessibilityAutoComplete", "aria-busy", "accessibilityBusy", "aria-checked", "accessibilityChecked", "aria-colcount", "accessibilityColumnCount", "aria-colindex", "accessibilityColumnIndex", "aria-colspan", "accessibilityColumnSpan", "aria-controls", "accessibilityControls", "aria-current", "accessibilityCurrent", "aria-describedby", "accessibilityDescribedBy", "aria-details", "accessibilityDetails", "aria-disabled", "accessibilityDisabled", "aria-errormessage", "accessibilityErrorMessage", "aria-expanded", "accessibilityExpanded", "aria-flowto", "accessibilityFlowTo", "aria-haspopup", "accessibilityHasPopup", "aria-hidden", "accessibilityHidden", "aria-invalid", "accessibilityInvalid", "aria-keyshortcuts", "accessibilityKeyShortcuts", "aria-label", "accessibilityLabel", "aria-labelledby", "accessibilityLabelledBy", "aria-level", "accessibilityLevel", "aria-live", "accessibilityLiveRegion", "aria-modal", "accessibilityModal", "aria-multiline", "accessibilityMultiline", "aria-multiselectable", "accessibilityMultiSelectable", "aria-orientation", "accessibilityOrientation", "aria-owns", "accessibilityOwns", "aria-placeholder", "accessibilityPlaceholder", "aria-posinset", "accessibilityPosInSet", "aria-pressed", "accessibilityPressed", "aria-readonly", "accessibilityReadOnly", "aria-required", "accessibilityRequired", "role", "accessibilityRole", "aria-roledescription", "accessibilityRoleDescription", "aria-rowcount", "accessibilityRowCount", "aria-rowindex", "accessibilityRowIndex", "aria-rowspan", "accessibilityRowSpan", "aria-selected", "accessibilitySelected", "aria-setsize", "accessibilitySetSize", "aria-sort", "accessibilitySort", "aria-valuemax", "accessibilityValueMax", "aria-valuemin", "accessibilityValueMin", "aria-valuenow", "accessibilityValueNow", "aria-valuetext", "accessibilityValueText", "dataSet", "focusable", "id", "nativeID", "pointerEvents", "style", "tabIndex", "testID"]
          , u = {}
          , c = Object.prototype.hasOwnProperty
          , d = Array.isArray
          , p = /[A-Z]/g;
        function f(e) {
            return "-" + e.toLowerCase()
        }
        function h(e) {
            return d(e) ? e.join(" ") : e
        }
        var m = a.Z.create({
            auto: {
                pointerEvents: "auto"
            },
            "box-none": {
                pointerEvents: "box-none"
            },
            "box-only": {
                pointerEvents: "box-only"
            },
            none: {
                pointerEvents: "none"
            }
        })
          , g = (e, t, n) => {
            t || (t = u);
            var d = t
              , g = d["aria-activedescendant"]
              , y = d.accessibilityActiveDescendant
              , v = d["aria-atomic"]
              , b = d.accessibilityAtomic
              , _ = d["aria-autocomplete"]
              , S = d.accessibilityAutoComplete
              , w = d["aria-busy"]
              , E = d.accessibilityBusy
              , x = d["aria-checked"]
              , k = d.accessibilityChecked
              , O = d["aria-colcount"]
              , C = d.accessibilityColumnCount
              , T = d["aria-colindex"]
              , R = d.accessibilityColumnIndex
              , I = d["aria-colspan"]
              , M = d.accessibilityColumnSpan
              , A = d["aria-controls"]
              , D = d.accessibilityControls
              , L = d["aria-current"]
              , P = d.accessibilityCurrent
              , N = d["aria-describedby"]
              , j = d.accessibilityDescribedBy
              , B = d["aria-details"]
              , U = d.accessibilityDetails
              , $ = d["aria-disabled"]
              , W = d.accessibilityDisabled
              , F = d["aria-errormessage"]
              , z = d.accessibilityErrorMessage
              , H = d["aria-expanded"]
              , q = d.accessibilityExpanded
              , Z = d["aria-flowto"]
              , X = d.accessibilityFlowTo
              , J = d["aria-haspopup"]
              , G = d.accessibilityHasPopup
              , V = d["aria-hidden"]
              , Y = d.accessibilityHidden
              , K = d["aria-invalid"]
              , Q = d.accessibilityInvalid
              , ee = d["aria-keyshortcuts"]
              , et = d.accessibilityKeyShortcuts
              , en = d["aria-label"]
              , er = d.accessibilityLabel
              , ei = d["aria-labelledby"]
              , eo = d.accessibilityLabelledBy
              , ea = d["aria-level"]
              , es = d.accessibilityLevel
              , el = d["aria-live"]
              , eu = d.accessibilityLiveRegion
              , ec = d["aria-modal"]
              , ed = d.accessibilityModal
              , ep = d["aria-multiline"]
              , ef = d.accessibilityMultiline
              , eh = d["aria-multiselectable"]
              , em = d.accessibilityMultiSelectable
              , eg = d["aria-orientation"]
              , ey = d.accessibilityOrientation
              , ev = d["aria-owns"]
              , eb = d.accessibilityOwns
              , e_ = d["aria-placeholder"]
              , eS = d.accessibilityPlaceholder
              , ew = d["aria-posinset"]
              , eE = d.accessibilityPosInSet
              , ex = d["aria-pressed"]
              , ek = d.accessibilityPressed
              , eO = d["aria-readonly"]
              , eC = d.accessibilityReadOnly
              , eT = d["aria-required"]
              , eR = d.accessibilityRequired
              , eI = (d.role,
            d.accessibilityRole)
              , eM = d["aria-roledescription"]
              , eA = d.accessibilityRoleDescription
              , eD = d["aria-rowcount"]
              , eL = d.accessibilityRowCount
              , eP = d["aria-rowindex"]
              , eN = d.accessibilityRowIndex
              , ej = d["aria-rowspan"]
              , eB = d.accessibilityRowSpan
              , eU = d["aria-selected"]
              , e$ = d.accessibilitySelected
              , eW = d["aria-setsize"]
              , eF = d.accessibilitySetSize
              , ez = d["aria-sort"]
              , eH = d.accessibilitySort
              , eq = d["aria-valuemax"]
              , eZ = d.accessibilityValueMax
              , eX = d["aria-valuemin"]
              , eJ = d.accessibilityValueMin
              , eG = d["aria-valuenow"]
              , eV = d.accessibilityValueNow
              , eY = d["aria-valuetext"]
              , eK = d.accessibilityValueText
              , eQ = d.dataSet
              , e0 = d.focusable
              , e1 = d.id
              , e2 = d.nativeID
              , e3 = d.pointerEvents
              , e5 = d.style
              , e4 = d.tabIndex
              , e6 = d.testID
              , e8 = (0,
            o.Z)(d, l);
            null != W && (0,
            s.O)("accessibilityDisabled", "accessibilityDisabled is deprecated.");
            var e9 = r.Z.propsToAriaRole(t);
            null != y && (0,
            s.O)("accessibilityActiveDescendant", "accessibilityActiveDescendant is deprecated. Use aria-activedescendant.");
            var e7 = null != g ? g : y;
            null != e7 && (e8["aria-activedescendant"] = e7),
            null != b && (0,
            s.O)("accessibilityAtomic", "accessibilityAtomic is deprecated. Use aria-atomic.");
            var te = null != v ? g : b;
            null != te && (e8["aria-atomic"] = te),
            null != S && (0,
            s.O)("accessibilityAutoComplete", "accessibilityAutoComplete is deprecated. Use aria-autocomplete.");
            var tt = null != _ ? _ : S;
            null != tt && (e8["aria-autocomplete"] = tt),
            null != E && (0,
            s.O)("accessibilityBusy", "accessibilityBusy is deprecated. Use aria-busy.");
            var tn = null != w ? w : E;
            null != tn && (e8["aria-busy"] = tn),
            null != k && (0,
            s.O)("accessibilityChecked", "accessibilityChecked is deprecated. Use aria-checked.");
            var tr = null != x ? x : k;
            null != tr && (e8["aria-checked"] = tr),
            null != C && (0,
            s.O)("accessibilityColumnCount", "accessibilityColumnCount is deprecated. Use aria-colcount.");
            var ti = null != O ? O : C;
            null != ti && (e8["aria-colcount"] = ti),
            null != R && (0,
            s.O)("accessibilityColumnIndex", "accessibilityColumnIndex is deprecated. Use aria-colindex.");
            var to = null != T ? T : R;
            null != to && (e8["aria-colindex"] = to),
            null != M && (0,
            s.O)("accessibilityColumnSpan", "accessibilityColumnSpan is deprecated. Use aria-colspan.");
            var ta = null != I ? I : M;
            null != ta && (e8["aria-colspan"] = ta),
            null != D && (0,
            s.O)("accessibilityControls", "accessibilityControls is deprecated. Use aria-controls.");
            var ts = null != A ? A : D;
            null != ts && (e8["aria-controls"] = h(ts)),
            null != P && (0,
            s.O)("accessibilityCurrent", "accessibilityCurrent is deprecated. Use aria-current.");
            var tl = null != L ? L : P;
            null != tl && (e8["aria-current"] = tl),
            null != j && (0,
            s.O)("accessibilityDescribedBy", "accessibilityDescribedBy is deprecated. Use aria-describedby.");
            var tu = null != N ? N : j;
            null != tu && (e8["aria-describedby"] = h(tu)),
            null != U && (0,
            s.O)("accessibilityDetails", "accessibilityDetails is deprecated. Use aria-details.");
            var tc = null != B ? B : U;
            null != tc && (e8["aria-details"] = tc),
            !0 === ($ || W) && (e8["aria-disabled"] = !0,
            ("button" === e || "form" === e || "input" === e || "select" === e || "textarea" === e) && (e8.disabled = !0)),
            null != z && (0,
            s.O)("accessibilityErrorMessage", "accessibilityErrorMessage is deprecated. Use aria-errormessage.");
            var td = null != F ? F : z;
            null != td && (e8["aria-errormessage"] = td),
            null != q && (0,
            s.O)("accessibilityExpanded", "accessibilityExpanded is deprecated. Use aria-expanded.");
            var tp = null != H ? H : q;
            null != tp && (e8["aria-expanded"] = tp),
            null != X && (0,
            s.O)("accessibilityFlowTo", "accessibilityFlowTo is deprecated. Use aria-flowto.");
            var tf = null != Z ? Z : X;
            null != tf && (e8["aria-flowto"] = h(tf)),
            null != G && (0,
            s.O)("accessibilityHasPopup", "accessibilityHasPopup is deprecated. Use aria-haspopup.");
            var th = null != J ? J : G;
            null != th && (e8["aria-haspopup"] = th),
            null != Y && (0,
            s.O)("accessibilityHidden", "accessibilityHidden is deprecated. Use aria-hidden.");
            var tm = null != V ? V : Y;
            !0 === tm && (e8["aria-hidden"] = tm),
            null != Q && (0,
            s.O)("accessibilityInvalid", "accessibilityInvalid is deprecated. Use aria-invalid.");
            var tg = null != K ? K : Q;
            null != tg && (e8["aria-invalid"] = tg),
            null != et && (0,
            s.O)("accessibilityKeyShortcuts", "accessibilityKeyShortcuts is deprecated. Use aria-keyshortcuts.");
            var ty = null != ee ? ee : et;
            null != ty && (e8["aria-keyshortcuts"] = h(ty)),
            null != er && (0,
            s.O)("accessibilityLabel", "accessibilityLabel is deprecated. Use aria-label.");
            var tv = null != en ? en : er;
            null != tv && (e8["aria-label"] = tv),
            null != eo && (0,
            s.O)("accessibilityLabelledBy", "accessibilityLabelledBy is deprecated. Use aria-labelledby.");
            var tb = null != ei ? ei : eo;
            null != tb && (e8["aria-labelledby"] = h(tb)),
            null != es && (0,
            s.O)("accessibilityLevel", "accessibilityLevel is deprecated. Use aria-level.");
            var t_ = null != ea ? ea : es;
            null != t_ && (e8["aria-level"] = t_),
            null != eu && (0,
            s.O)("accessibilityLiveRegion", "accessibilityLiveRegion is deprecated. Use aria-live.");
            var tS = null != el ? el : eu;
            null != tS && (e8["aria-live"] = "none" === tS ? "off" : tS),
            null != ed && (0,
            s.O)("accessibilityModal", "accessibilityModal is deprecated. Use aria-modal.");
            var tw = null != ec ? ec : ed;
            null != tw && (e8["aria-modal"] = tw),
            null != ef && (0,
            s.O)("accessibilityMultiline", "accessibilityMultiline is deprecated. Use aria-multiline.");
            var tE = null != ep ? ep : ef;
            null != tE && (e8["aria-multiline"] = tE),
            null != em && (0,
            s.O)("accessibilityMultiSelectable", "accessibilityMultiSelectable is deprecated. Use aria-multiselectable.");
            var tx = null != eh ? eh : em;
            null != tx && (e8["aria-multiselectable"] = tx),
            null != ey && (0,
            s.O)("accessibilityOrientation", "accessibilityOrientation is deprecated. Use aria-orientation.");
            var tk = null != eg ? eg : ey;
            null != tk && (e8["aria-orientation"] = tk),
            null != eb && (0,
            s.O)("accessibilityOwns", "accessibilityOwns is deprecated. Use aria-owns.");
            var tO = null != ev ? ev : eb;
            null != tO && (e8["aria-owns"] = h(tO)),
            null != eS && (0,
            s.O)("accessibilityPlaceholder", "accessibilityPlaceholder is deprecated. Use aria-placeholder.");
            var tC = null != e_ ? e_ : eS;
            null != tC && (e8["aria-placeholder"] = tC),
            null != eE && (0,
            s.O)("accessibilityPosInSet", "accessibilityPosInSet is deprecated. Use aria-posinset.");
            var tT = null != ew ? ew : eE;
            null != tT && (e8["aria-posinset"] = tT),
            null != ek && (0,
            s.O)("accessibilityPressed", "accessibilityPressed is deprecated. Use aria-pressed.");
            var tR = null != ex ? ex : ek;
            null != tR && (e8["aria-pressed"] = tR),
            null != eC && (0,
            s.O)("accessibilityReadOnly", "accessibilityReadOnly is deprecated. Use aria-readonly.");
            var tI = null != eO ? eO : eC;
            null != tI && (e8["aria-readonly"] = tI,
            ("input" === e || "select" === e || "textarea" === e) && (e8.readOnly = !0)),
            null != eR && (0,
            s.O)("accessibilityRequired", "accessibilityRequired is deprecated. Use aria-required.");
            var tM = null != eT ? eT : eR;
            null != tM && (e8["aria-required"] = tM,
            ("input" === e || "select" === e || "textarea" === e) && (e8.required = eR)),
            null != eI && (0,
            s.O)("accessibilityRole", "accessibilityRole is deprecated. Use role."),
            null != e9 && (e8.role = "none" === e9 ? "presentation" : e9),
            null != eA && (0,
            s.O)("accessibilityRoleDescription", "accessibilityRoleDescription is deprecated. Use aria-roledescription.");
            var tA = null != eM ? eM : eA;
            null != tA && (e8["aria-roledescription"] = tA),
            null != eL && (0,
            s.O)("accessibilityRowCount", "accessibilityRowCount is deprecated. Use aria-rowcount.");
            var tD = null != eD ? eD : eL;
            null != tD && (e8["aria-rowcount"] = tD),
            null != eN && (0,
            s.O)("accessibilityRowIndex", "accessibilityRowIndex is deprecated. Use aria-rowindex.");
            var tL = null != eP ? eP : eN;
            null != tL && (e8["aria-rowindex"] = tL),
            null != eB && (0,
            s.O)("accessibilityRowSpan", "accessibilityRowSpan is deprecated. Use aria-rowspan.");
            var tP = null != ej ? ej : eB;
            null != tP && (e8["aria-rowspan"] = tP),
            null != e$ && (0,
            s.O)("accessibilitySelected", "accessibilitySelected is deprecated. Use aria-selected.");
            var tN = null != eU ? eU : e$;
            null != tN && (e8["aria-selected"] = tN),
            null != eF && (0,
            s.O)("accessibilitySetSize", "accessibilitySetSize is deprecated. Use aria-setsize.");
            var tj = null != eW ? eW : eF;
            null != tj && (e8["aria-setsize"] = tj),
            null != eH && (0,
            s.O)("accessibilitySort", "accessibilitySort is deprecated. Use aria-sort.");
            var tB = null != ez ? ez : eH;
            null != tB && (e8["aria-sort"] = tB),
            null != eZ && (0,
            s.O)("accessibilityValueMax", "accessibilityValueMax is deprecated. Use aria-valuemax.");
            var tU = null != eq ? eq : eZ;
            null != tU && (e8["aria-valuemax"] = tU),
            null != eJ && (0,
            s.O)("accessibilityValueMin", "accessibilityValueMin is deprecated. Use aria-valuemin.");
            var t$ = null != eX ? eX : eJ;
            null != t$ && (e8["aria-valuemin"] = t$),
            null != eV && (0,
            s.O)("accessibilityValueNow", "accessibilityValueNow is deprecated. Use aria-valuenow.");
            var tW = null != eG ? eG : eV;
            null != tW && (e8["aria-valuenow"] = tW),
            null != eK && (0,
            s.O)("accessibilityValueText", "accessibilityValueText is deprecated. Use aria-valuetext.");
            var tF = null != eY ? eY : eK;
            if (null != tF && (e8["aria-valuetext"] = tF),
            null != eQ) {
                for (var tz in eQ)
                    if (c.call(eQ, tz)) {
                        var tH = tz.replace(p, f)
                          , tq = eQ[tz];
                        null != tq && (e8["data-" + tH] = tq)
                    }
            }
            0 === e4 || "0" === e4 || -1 === e4 || "-1" === e4 ? e8.tabIndex = e4 : (null != e0 && (0,
            s.O)("focusable", "focusable is deprecated."),
            !1 === e0 && (e8.tabIndex = "-1"),
            "a" === e || "button" === e || "input" === e || "select" === e || "textarea" === e ? (!1 === e0 || !0 === W) && (e8.tabIndex = "-1") : "button" === e9 || "checkbox" === e9 || "link" === e9 || "radio" === e9 || "textbox" === e9 || "switch" === e9 ? !1 !== e0 && (e8.tabIndex = "0") : !0 === e0 && (e8.tabIndex = "0")),
            null != e3 && (0,
            s.O)("pointerEvents", "props.pointerEvents is deprecated. Use style.pointerEvents");
            var tZ = (0,
            a.Z)([e5, e3 && m[e3]], (0,
            i.Z)({
                writingDirection: "ltr"
            }, n))
              , tX = tZ[0]
              , tJ = tZ[1];
            tX && (e8.className = tX),
            tJ && (e8.style = tJ),
            null != e2 && (0,
            s.O)("nativeID", "nativeID is deprecated. Use id.");
            var tG = null != e1 ? e1 : e2;
            return null != tG && (e8.id = tG),
            null != e6 && (e8["data-testid"] = e6),
            null == e8.type && "button" === e && (e8.type = "button"),
            e8
        }
          , y = n(67294)
          , v = n(72931)
          , b = (e, t, n) => {
            e && e.constructor === String && (i = r.Z.propsToAccessibilityComponent(t));
            var i, o = i || e, a = g(o, t, n), s = y.createElement(o, a);
            return a.dir ? y.createElement(v.Iw, {
                children: s,
                direction: a.dir,
                locale: a.lang
            }) : s
        }
    },
    1082: function(e, t, n) {
        "use strict";
        var r = n(19014)
          , i = n.n(r);
        t.Z = e => {
            if (null == e)
                return e;
            var t = i()(e);
            if (null != t)
                return (t << 24 | t >>> 8) >>> 0
        }
    },
    56861: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var r = {
            adjustable: "slider",
            button: "button",
            header: "heading",
            image: "img",
            imagebutton: null,
            keyboardkey: null,
            label: null,
            link: "link",
            none: "presentation",
            search: "search",
            summary: "region",
            text: null
        }
          , i = e => {
            var t = e.accessibilityRole
              , n = e.role || t;
            if (n) {
                var i = r[n];
                if (null !== i)
                    return i || n
            }
        }
          , o = {
            article: "article",
            banner: "header",
            blockquote: "blockquote",
            button: "button",
            code: "code",
            complementary: "aside",
            contentinfo: "footer",
            deletion: "del",
            emphasis: "em",
            figure: "figure",
            insertion: "ins",
            form: "form",
            list: "ul",
            listitem: "li",
            main: "main",
            navigation: "nav",
            paragraph: "p",
            region: "section",
            strong: "strong"
        }
          , a = {}
          , s = {
            isDisabled: e => e.disabled || Array.isArray(e.accessibilityStates) && e.accessibilityStates.indexOf("disabled") > -1,
            propsToAccessibilityComponent: function(e) {
                if (void 0 === e && (e = a),
                "label" === (e.role || e.accessibilityRole))
                    return "label";
                var t = i(e);
                if (t) {
                    if ("heading" === t) {
                        var n = e.accessibilityLevel || e["aria-level"];
                        return null != n ? "h" + n : "h1"
                    }
                    return o[t]
                }
            },
            propsToAriaRole: i
        }
    },
    13145: function(e, t) {
        "use strict";
        var n = !!("undefined" != typeof window && window.document && window.document.createElement);
        t.Z = n
    },
    13250: function(e, t, n) {
        "use strict";
        n.d(t, {
            E5: function() {
                return u
            },
            LO: function() {
                return i
            },
            Uy: function() {
                return s
            },
            YB: function() {
                return a
            },
            _T: function() {
                return o
            },
            hJ: function() {
                return l
            },
            lG: function() {
                return r
            },
            vr: function() {
                return c
            }
        });
        var r = {
            children: !0,
            dataSet: !0,
            dir: !0,
            id: !0,
            ref: !0,
            suppressHydrationWarning: !0,
            tabIndex: !0,
            testID: !0,
            focusable: !0,
            nativeID: !0
        }
          , i = {
            "aria-activedescendant": !0,
            "aria-atomic": !0,
            "aria-autocomplete": !0,
            "aria-busy": !0,
            "aria-checked": !0,
            "aria-colcount": !0,
            "aria-colindex": !0,
            "aria-colspan": !0,
            "aria-controls": !0,
            "aria-current": !0,
            "aria-describedby": !0,
            "aria-details": !0,
            "aria-disabled": !0,
            "aria-errormessage": !0,
            "aria-expanded": !0,
            "aria-flowto": !0,
            "aria-haspopup": !0,
            "aria-hidden": !0,
            "aria-invalid": !0,
            "aria-keyshortcuts": !0,
            "aria-label": !0,
            "aria-labelledby": !0,
            "aria-level": !0,
            "aria-live": !0,
            "aria-modal": !0,
            "aria-multiline": !0,
            "aria-multiselectable": !0,
            "aria-orientation": !0,
            "aria-owns": !0,
            "aria-placeholder": !0,
            "aria-posinset": !0,
            "aria-pressed": !0,
            "aria-readonly": !0,
            "aria-required": !0,
            role: !0,
            "aria-roledescription": !0,
            "aria-rowcount": !0,
            "aria-rowindex": !0,
            "aria-rowspan": !0,
            "aria-selected": !0,
            "aria-setsize": !0,
            "aria-sort": !0,
            "aria-valuemax": !0,
            "aria-valuemin": !0,
            "aria-valuenow": !0,
            "aria-valuetext": !0,
            accessibilityActiveDescendant: !0,
            accessibilityAtomic: !0,
            accessibilityAutoComplete: !0,
            accessibilityBusy: !0,
            accessibilityChecked: !0,
            accessibilityColumnCount: !0,
            accessibilityColumnIndex: !0,
            accessibilityColumnSpan: !0,
            accessibilityControls: !0,
            accessibilityCurrent: !0,
            accessibilityDescribedBy: !0,
            accessibilityDetails: !0,
            accessibilityDisabled: !0,
            accessibilityErrorMessage: !0,
            accessibilityExpanded: !0,
            accessibilityFlowTo: !0,
            accessibilityHasPopup: !0,
            accessibilityHidden: !0,
            accessibilityInvalid: !0,
            accessibilityKeyShortcuts: !0,
            accessibilityLabel: !0,
            accessibilityLabelledBy: !0,
            accessibilityLevel: !0,
            accessibilityLiveRegion: !0,
            accessibilityModal: !0,
            accessibilityMultiline: !0,
            accessibilityMultiSelectable: !0,
            accessibilityOrientation: !0,
            accessibilityOwns: !0,
            accessibilityPlaceholder: !0,
            accessibilityPosInSet: !0,
            accessibilityPressed: !0,
            accessibilityReadOnly: !0,
            accessibilityRequired: !0,
            accessibilityRole: !0,
            accessibilityRoleDescription: !0,
            accessibilityRowCount: !0,
            accessibilityRowIndex: !0,
            accessibilityRowSpan: !0,
            accessibilitySelected: !0,
            accessibilitySetSize: !0,
            accessibilitySort: !0,
            accessibilityValueMax: !0,
            accessibilityValueMin: !0,
            accessibilityValueNow: !0,
            accessibilityValueText: !0
        }
          , o = {
            onClick: !0,
            onAuxClick: !0,
            onContextMenu: !0,
            onGotPointerCapture: !0,
            onLostPointerCapture: !0,
            onPointerCancel: !0,
            onPointerDown: !0,
            onPointerEnter: !0,
            onPointerMove: !0,
            onPointerLeave: !0,
            onPointerOut: !0,
            onPointerOver: !0,
            onPointerUp: !0
        }
          , a = {
            onBlur: !0,
            onFocus: !0
        }
          , s = {
            onKeyDown: !0,
            onKeyDownCapture: !0,
            onKeyUp: !0,
            onKeyUpCapture: !0
        }
          , l = {
            onMouseDown: !0,
            onMouseEnter: !0,
            onMouseLeave: !0,
            onMouseMove: !0,
            onMouseOver: !0,
            onMouseOut: !0,
            onMouseUp: !0
        }
          , u = {
            onTouchCancel: !0,
            onTouchCancelCapture: !0,
            onTouchEnd: !0,
            onTouchEndCapture: !0,
            onTouchMove: !0,
            onTouchMoveCapture: !0,
            onTouchStart: !0,
            onTouchStartCapture: !0
        }
          , c = {
            style: !0
        }
    },
    53767: function(e, t) {
        "use strict";
        t.Z = e => {
            if (null != e && 1 === e.nodeType && "function" == typeof e.getBoundingClientRect)
                return e.getBoundingClientRect()
        }
    },
    70596: function(e, t, n) {
        "use strict";
        function r() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                t.forEach(t => {
                    if (null != t) {
                        if ("function" == typeof t) {
                            t(e);
                            return
                        }
                        if ("object" == typeof t) {
                            t.current = e;
                            return
                        }
                        console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(t))
                    }
                }
                )
            }
        }
        n.d(t, {
            Z: function() {
                return r
            }
        }),
        n(67294)
    },
    45819: function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n = {};
            for (var r in e)
                e.hasOwnProperty(r) && !0 === t[r] && (n[r] = e[r]);
            return n
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    30042: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var r = n(39863)
          , i = n(90005)
          , o = n(13145)
          , a = "__reactLayoutHandler"
          , s = (o.Z,
        null);
        function l(e, t) {
            var n = (o.Z && void 0 !== window.ResizeObserver && null == s && (s = new window.ResizeObserver(function(e) {
                e.forEach(e => {
                    var t = e.target
                      , n = t[a];
                    "function" == typeof n && i.Z.measure(t, (t, r, i, o, a, s) => {
                        var l = {
                            nativeEvent: {
                                layout: {
                                    x: t,
                                    y: r,
                                    width: i,
                                    height: o,
                                    left: a,
                                    top: s
                                }
                            },
                            timeStamp: Date.now()
                        };
                        Object.defineProperty(l.nativeEvent, "target", {
                            enumerable: !0,
                            get: () => e.target
                        }),
                        n(l)
                    }
                    )
                }
                )
            }
            )),
            s);
            (0,
            r.Z)( () => {
                var n = e.current;
                null != n && (n[a] = t)
            }
            , [e, t]),
            (0,
            r.Z)( () => {
                var t = e.current;
                return null != t && null != n && ("function" == typeof t[a] ? n.observe(t) : n.unobserve(t)),
                () => {
                    null != t && null != n && n.unobserve(t)
                }
            }
            , [e, n])
        }
    },
    39863: function(e, t, n) {
        "use strict";
        var r = n(67294)
          , i = n(13145).Z ? r.useLayoutEffect : r.useEffect;
        t.Z = i
    },
    72931: function(e, t, n) {
        "use strict";
        n.d(t, {
            Iw: function() {
                return u
            },
            w1: function() {
                return l
            },
            PE: function() {
                return c
            }
        });
        var r = n(67294)
          , i = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"])
          , o = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "far", "glk", "he", "iw", "khw", "ks", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"])
          , a = new Map
          , s = (0,
        r.createContext)({
            direction: "ltr",
            locale: "en-US"
        });
        function l(e) {
            return !function(e) {
                var t = a.get(e);
                if (t)
                    return t;
                var n = !1;
                if (Intl.Locale) {
                    var r = new Intl.Locale(e).maximize().script;
                    n = i.has(r)
                } else {
                    var s = e.split("-")[0];
                    n = o.has(s)
                }
                return a.set(e, n),
                n
            }(e) ? "ltr" : "rtl"
        }
        function u(e) {
            var t = e.direction
              , n = e.locale
              , i = e.children;
            return t || n ? r.createElement(s.Provider, {
                children: i,
                value: {
                    direction: n ? l(n) : t,
                    locale: n
                }
            }) : i
        }
        function c() {
            return (0,
            r.useContext)(s)
        }
    },
    16528: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(67294)
          , i = n(70596);
        function o() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return r.useMemo( () => (0,
            i.Z)(...t), [...t])
        }
    },
    60091: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(90005)
          , i = n(57771);
        function o(e) {
            return e.pointerEvents,
            e.style,
            (0,
            i.Z)( () => e => {
                null != e && (e.measure = t => r.Z.measure(e, t),
                e.measureLayout = (t, n, i) => r.Z.measureLayout(e, t, i, n),
                e.measureInWindow = t => r.Z.measureInWindow(e, t))
            }
            )
        }
    },
    72359: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return U
            }
        });
        var r = n(67294)
          , i = n(53767)
          , o = () => {}
          , a = {}
          , s = [];
        function l(e) {
            return e > 20 ? e % 20 : e
        }
        function u(e, t) {
            var n, r, u, c = !1, d = e.changedTouches, p = e.type, f = !0 === e.metaKey, h = !0 === e.shiftKey, m = d && d[0].force || 0, g = l(d && d[0].identifier || 0), y = d && d[0].clientX || e.clientX, v = d && d[0].clientY || e.clientY, b = d && d[0].pageX || e.pageX, _ = d && d[0].pageY || e.pageY, S = "function" == typeof e.preventDefault ? e.preventDefault.bind(e) : o, w = e.timeStamp;
            function E(e) {
                return Array.prototype.slice.call(e).map(e => ({
                    force: e.force,
                    identifier: l(e.identifier),
                    get locationX() {
                        return O(e.clientX)
                    },
                    get locationY() {
                        return C(e.clientY)
                    },
                    pageX: e.pageX,
                    pageY: e.pageY,
                    target: e.target,
                    timestamp: w
                }))
            }
            if (null != d)
                r = E(d),
                u = E(e.touches);
            else {
                var x = [{
                    force: m,
                    identifier: g,
                    get locationX() {
                        return O(y)
                    },
                    get locationY() {
                        return C(v)
                    },
                    pageX: b,
                    pageY: _,
                    target: e.target,
                    timestamp: w
                }];
                r = x,
                u = "mouseup" === p || "dragstart" === p ? s : x
            }
            var k = {
                bubbles: !0,
                cancelable: !0,
                currentTarget: null,
                defaultPrevented: e.defaultPrevented,
                dispatchConfig: a,
                eventPhase: e.eventPhase,
                isDefaultPrevented: () => e.defaultPrevented,
                isPropagationStopped: () => c,
                isTrusted: e.isTrusted,
                nativeEvent: {
                    altKey: !1,
                    ctrlKey: !1,
                    metaKey: f,
                    shiftKey: h,
                    changedTouches: r,
                    force: m,
                    identifier: g,
                    get locationX() {
                        return O(y)
                    },
                    get locationY() {
                        return C(v)
                    },
                    pageX: b,
                    pageY: _,
                    target: e.target,
                    timestamp: w,
                    touches: u,
                    type: p
                },
                persist: o,
                preventDefault: S,
                stopPropagation() {
                    c = !0
                },
                target: e.target,
                timeStamp: w,
                touchHistory: t.touchHistory
            };
            function O(e) {
                if (n = n || (0,
                i.Z)(k.currentTarget))
                    return e - n.left
            }
            function C(e) {
                if (n = n || (0,
                i.Z)(k.currentTarget))
                    return e - n.top
            }
            return k
        }
        function c(e) {
            return "touchstart" === e || "mousedown" === e
        }
        function d(e) {
            return "touchmove" === e || "mousemove" === e
        }
        function p(e) {
            return "touchend" === e || "mouseup" === e || f(e)
        }
        function f(e) {
            return "touchcancel" === e || "dragstart" === e
        }
        var h = "__reactResponderId";
        function m(e) {
            for (var t = []; null != e && e !== document.body; )
                t.push(e),
                e = e.parentNode;
            return t
        }
        function g(e) {
            return e.timeStamp || e.timestamp
        }
        function y(e) {
            var t = e.identifier;
            return null == t && console.error("Touch object is missing identifier."),
            t
        }
        function v(e) {
            return JSON.stringify({
                identifier: e.identifier,
                pageX: e.pageX,
                pageY: e.pageY,
                timestamp: g(e)
            })
        }
        function b(e) {
            var t = e.touchBank
              , n = JSON.stringify(t.slice(0, 20));
            return t.length > 20 && (n += " (original size: " + t.length + ")"),
            n
        }
        class _ {
            constructor() {
                this._touchHistory = {
                    touchBank: [],
                    numberActiveTouches: 0,
                    indexOfSingleActiveTouch: -1,
                    mostRecentTimeStamp: 0
                }
            }
            recordTouchTrack(e, t) {
                var n = this._touchHistory;
                if (d(e))
                    t.changedTouches.forEach(e => {
                        var t;
                        (t = n.touchBank[y(e)]) ? (t.touchActive = !0,
                        t.previousPageX = t.currentPageX,
                        t.previousPageY = t.currentPageY,
                        t.previousTimeStamp = t.currentTimeStamp,
                        t.currentPageX = e.pageX,
                        t.currentPageY = e.pageY,
                        t.currentTimeStamp = g(e),
                        n.mostRecentTimeStamp = g(e)) : console.warn("Cannot record touch move without a touch start.\n", "Touch Move: " + v(e) + "\n", "Touch Bank: " + b(n))
                    }
                    );
                else if (c(e))
                    t.changedTouches.forEach(e => {
                        var t, r, i, o;
                        return t = e,
                        r = n,
                        i = y(t),
                        void ((o = r.touchBank[i]) ? (o.touchActive = !0,
                        o.startPageX = t.pageX,
                        o.startPageY = t.pageY,
                        o.startTimeStamp = g(t),
                        o.currentPageX = t.pageX,
                        o.currentPageY = t.pageY,
                        o.currentTimeStamp = g(t),
                        o.previousPageX = t.pageX,
                        o.previousPageY = t.pageY,
                        o.previousTimeStamp = g(t)) : r.touchBank[i] = {
                            touchActive: !0,
                            startPageX: t.pageX,
                            startPageY: t.pageY,
                            startTimeStamp: g(t),
                            currentPageX: t.pageX,
                            currentPageY: t.pageY,
                            currentTimeStamp: g(t),
                            previousPageX: t.pageX,
                            previousPageY: t.pageY,
                            previousTimeStamp: g(t)
                        },
                        r.mostRecentTimeStamp = g(t))
                    }
                    ),
                    n.numberActiveTouches = t.touches.length,
                    1 === n.numberActiveTouches && (n.indexOfSingleActiveTouch = t.touches[0].identifier);
                else if (p(e) && (t.changedTouches.forEach(e => {
                    var t;
                    (t = n.touchBank[y(e)]) ? (t.touchActive = !1,
                    t.previousPageX = t.currentPageX,
                    t.previousPageY = t.currentPageY,
                    t.previousTimeStamp = t.currentTimeStamp,
                    t.currentPageX = e.pageX,
                    t.currentPageY = e.pageY,
                    t.currentTimeStamp = g(e),
                    n.mostRecentTimeStamp = g(e)) : console.warn("Cannot record touch end without a touch start.\n", "Touch End: " + v(e) + "\n", "Touch Bank: " + b(n))
                }
                ),
                n.numberActiveTouches = t.touches.length,
                1 === n.numberActiveTouches))
                    for (var r = n.touchBank, i = 0; i < r.length; i++) {
                        var o = r[i];
                        if (null != o && o.touchActive) {
                            n.indexOfSingleActiveTouch = i;
                            break
                        }
                    }
            }
            get touchHistory() {
                return this._touchHistory
            }
        }
        var S = n(13145)
          , w = {}
          , E = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", {
            bubbles: !0
        }]
          , x = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", {
            bubbles: !0
        }]
          , k = {
            touchstart: E,
            mousedown: E,
            touchmove: x,
            mousemove: x,
            scroll: ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", {
                bubbles: !1
            }]
        }
          , O = {
            id: null,
            idPath: null,
            node: null
        }
          , C = new Map
          , T = !1
          , R = 0
          , I = {
            id: null,
            node: null,
            idPath: null
        }
          , M = new _;
        function A(e) {
            var t = C.get(e);
            return null != t ? t : w
        }
        function D(e) {
            var t, n, r, i, o, a, s, l = e.type, g = e.target;
            if ("touchstart" === l && (T = !0),
            ("touchmove" === l || R > 1) && (T = !1),
            ("mousedown" !== l || !T) && ("mousemove" !== l || !T) && ("mousemove" !== l || !(R < 1))) {
                if (T && "mouseup" === l) {
                    0 === R && (T = !1);
                    return
                }
                var y = c(l) && (t = e.altKey,
                n = e.button,
                r = e.buttons,
                i = e.ctrlKey,
                o = e.type,
                a = !1 === t && !1 === i,
                "touchstart" === o || "touchmove" === o || "mousedown" === o && (0 === n || 1 === r) && !!a || "mousemove" === o && 1 === r && !!a)
                  , v = d(l)
                  , b = p(l)
                  , _ = "scroll" === l
                  , S = "select" === l || "selectionchange" === l
                  , w = u(e, M);
                (y || v || b) && (e.touches ? R = e.touches.length : y ? R = 1 : b && (R = 0),
                M.recordTouchTrack(l, w.nativeEvent));
                var E = function(e) {
                    for (var t = [], n = [], r = "selectionchange" === e.type ? m(window.getSelection().anchorNode) : null != e.composedPath ? e.composedPath() : m(e.target), i = 0; i < r.length; i++) {
                        var o = r[i]
                          , a = null != o ? o[h] : null;
                        null != a && (t.push(a),
                        n.push(o))
                    }
                    return {
                        idPath: t,
                        nodePath: n
                    }
                }(e)
                  , x = !1;
                if (y || v || _ && R > 0) {
                    var C = I.idPath
                      , D = E.idPath;
                    if (null != C && null != D) {
                        var L = function(e, t) {
                            var n = e.length
                              , r = t.length;
                            if (0 === n || 0 === r || e[n - 1] !== t[r - 1])
                                return null;
                            var i = e[0]
                              , o = 0
                              , a = t[0]
                              , s = 0;
                            n - r > 0 && (i = e[o = n - r],
                            n = r),
                            r - n > 0 && (a = t[s = r - n],
                            r = n);
                            for (var l = n; l--; ) {
                                if (i === a)
                                    return i;
                                i = e[o++],
                                a = t[s++]
                            }
                            return null
                        }(C, D);
                        if (null != L) {
                            var P = D.indexOf(L) + (L === I.id ? 1 : 0);
                            E = {
                                idPath: D.slice(P),
                                nodePath: E.nodePath.slice(P)
                            }
                        } else
                            E = null
                    }
                    null != E && null != (s = function(e, t, n) {
                        var r = k[t.type];
                        if (null != r) {
                            for (var i = e.idPath, o = e.nodePath, a = r[0], s = r[1], l = r[2].bubbles, u = function(e, t, r) {
                                var o = A(e)[r];
                                if (null != o && (n.currentTarget = t,
                                !0 === o(n))) {
                                    var a = i.slice(i.indexOf(e));
                                    return {
                                        id: e,
                                        node: t,
                                        idPath: a
                                    }
                                }
                            }, c = i.length - 1; c >= 0; c--) {
                                var d = u(i[c], o[c], a);
                                if (null != d)
                                    return d;
                                if (!0 === n.isPropagationStopped())
                                    return
                            }
                            if (l)
                                for (var p = 0; p < i.length; p++) {
                                    var f = u(i[p], o[p], s);
                                    if (null != f)
                                        return f;
                                    if (!0 === n.isPropagationStopped())
                                        return
                                }
                            else {
                                var h = i[0]
                                  , m = o[0];
                                if (t.target === m)
                                    return u(h, m, s)
                            }
                        }
                    }(E, e, w)) && (function(e, t) {
                        var n = I
                          , r = n.id
                          , i = n.node
                          , o = t.id
                          , a = t.node
                          , s = A(o)
                          , l = s.onResponderGrant
                          , u = s.onResponderReject;
                        if (e.bubbles = !1,
                        e.cancelable = !1,
                        e.currentTarget = a,
                        null == r)
                            null != l && (e.currentTarget = a,
                            e.dispatchConfig.registrationName = "onResponderGrant",
                            l(e)),
                            I = t;
                        else {
                            var c = A(r)
                              , d = c.onResponderTerminate
                              , p = c.onResponderTerminationRequest
                              , f = !0;
                            (null != p && (e.currentTarget = i,
                            e.dispatchConfig.registrationName = "onResponderTerminationRequest",
                            !1 === p(e) && (f = !1)),
                            f) ? (null != d && (e.currentTarget = i,
                            e.dispatchConfig.registrationName = "onResponderTerminate",
                            d(e)),
                            null != l && (e.currentTarget = a,
                            e.dispatchConfig.registrationName = "onResponderGrant",
                            l(e)),
                            I = t) : null != u && (e.currentTarget = a,
                            e.dispatchConfig.registrationName = "onResponderReject",
                            u(e))
                        }
                    }(w, s),
                    x = !0)
                }
                if (null != I.id && null != I.node) {
                    var N = I
                      , j = N.id
                      , B = N.node
                      , U = A(j)
                      , $ = U.onResponderStart
                      , W = U.onResponderMove
                      , F = U.onResponderEnd
                      , z = U.onResponderRelease
                      , H = U.onResponderTerminate
                      , q = U.onResponderTerminationRequest;
                    if (w.bubbles = !1,
                    w.cancelable = !1,
                    w.currentTarget = B,
                    y)
                        null != $ && (w.dispatchConfig.registrationName = "onResponderStart",
                        $(w));
                    else if (v)
                        null != W && (w.dispatchConfig.registrationName = "onResponderMove",
                        W(w));
                    else {
                        var Z = f(l) || "contextmenu" === l || "blur" === l && g === window || "blur" === l && g.contains(B) && e.relatedTarget !== B || _ && 0 === R || _ && g.contains(B) && g !== B || S && function(e) {
                            if ("selectionchange" === e.type) {
                                var t, n, r, i, o;
                                return n = (t = window.getSelection()).toString(),
                                r = t.anchorNode,
                                i = t.focusNode,
                                o = r && r.nodeType === window.Node.TEXT_NODE || i && i.nodeType === window.Node.TEXT_NODE,
                                n.length >= 1 && "\n" !== n && o
                            }
                            return "select" === e.type
                        }(e)
                          , X = b && !Z && !function(e, t) {
                            if (!t || 0 === t.length)
                                return !1;
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n].target;
                                if (null != r && e.contains(r))
                                    return !0
                            }
                            return !1
                        }(B, e.touches);
                        if (b && null != F && (w.dispatchConfig.registrationName = "onResponderEnd",
                        F(w)),
                        X && (null != z && (w.dispatchConfig.registrationName = "onResponderRelease",
                        z(w)),
                        I = O),
                        Z) {
                            var J = !0;
                            ("contextmenu" === l || "scroll" === l || "selectionchange" === l) && (x ? J = !1 : null != q && (w.dispatchConfig.registrationName = "onResponderTerminationRequest",
                            !1 === q(w) && (J = !1))),
                            J && (null != H && (w.dispatchConfig.registrationName = "onResponderTerminate",
                            H(w)),
                            I = O,
                            T = !1,
                            R = 0)
                        }
                    }
                }
            }
        }
        var L = ["blur", "scroll"]
          , P = ["mousedown", "mousemove", "mouseup", "dragstart", "touchstart", "touchmove", "touchend", "touchcancel", "contextmenu", "select", "selectionchange"];
        function N(e) {
            I.id === e && function() {
                var e = I
                  , t = e.id
                  , n = e.node;
                if (null != t && null != n) {
                    var r = A(t).onResponderTerminate;
                    if (null != r) {
                        var i = u({}, M);
                        i.currentTarget = n,
                        r(i)
                    }
                    I = O
                }
                T = !1,
                R = 0
            }(),
            C.has(e) && C.delete(e)
        }
        var j = {}
          , B = 0;
        function U(e, t) {
            void 0 === t && (t = j);
            var n, i, o = (n = () => B++,
            null == (i = r.useRef(null)).current && (i.current = n()),
            i.current), a = r.useRef(!1);
            r.useEffect( () => (S.Z && null == window.__reactResponderSystemActive && (window.addEventListener("blur", D),
            P.forEach(e => {
                document.addEventListener(e, D)
            }
            ),
            L.forEach(e => {
                document.addEventListener(e, D, !0)
            }
            ),
            window.__reactResponderSystemActive = !0),
            () => {
                N(o)
            }
            ), [o]),
            r.useEffect( () => {
                var n, r = t, i = r.onMoveShouldSetResponder, s = r.onMoveShouldSetResponderCapture, l = r.onScrollShouldSetResponder, u = r.onScrollShouldSetResponderCapture, c = r.onSelectionChangeShouldSetResponder, d = r.onSelectionChangeShouldSetResponderCapture, p = r.onStartShouldSetResponder, f = r.onStartShouldSetResponderCapture, m = e.current;
                null != i || null != s || null != l || null != u || null != c || null != d || null != p || null != f ? (n = t,
                null != m && (m[h] = o),
                C.set(o, n),
                a.current = !0) : a.current && (N(o),
                a.current = !1)
            }
            , [t, e, o]),
            r.useDebugValue({
                isResponder: e.current === I.node
            }),
            r.useDebugValue(t)
        }
    },
    57771: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(67294)
          , i = "function" == typeof Symbol && "symbol" == typeof Symbol() ? Symbol() : Object.freeze({});
        function o(e) {
            var t = r.useRef(i);
            return t.current === i && (t.current = e()),
            t.current
        }
    },
    98506: function(e, t, n) {
        "use strict";
        function r(e, t) {}
        n.d(t, {
            O: function() {
                return r
            }
        })
    },
    53121: function(e, t, n) {
        "use strict";
        n.d(t, {
            qC: function() {
                return s
            },
            jM: function() {
                return o
            },
            vl: function() {
                return a
            }
        });
        var r = n(67294);
        function i() {
            return (i = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        n(19303),
        n(48766),
        n(15790),
        n(98123);
        var o = function(e) {
            return function(t) {
                var n = (0,
                r.createFactory)(t);
                return function(t) {
                    return n(e(t))
                }
            }
        }
          , a = function(e) {
            return o(function(t) {
                return i({}, t, "function" == typeof e ? e(t) : e)
            })
        }
          , s = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.reduce(function(e, t) {
                return function() {
                    return e(t.apply(void 0, arguments))
                }
            }, function(e) {
                return e
            })
        }
    },
    48766: function(e) {
        "use strict";
        var t = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }
          , n = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }
          , r = Object.defineProperty
          , i = Object.getOwnPropertyNames
          , o = Object.getOwnPropertySymbols
          , a = Object.getOwnPropertyDescriptor
          , s = Object.getPrototypeOf
          , l = s && s(Object);
        e.exports = function e(u, c, d) {
            if ("string" != typeof c) {
                if (l) {
                    var p = s(c);
                    p && p !== l && e(u, p, d)
                }
                var f = i(c);
                o && (f = f.concat(o(c)));
                for (var h = 0; h < f.length; ++h) {
                    var m = f[h];
                    if (!t[m] && !n[m] && (!d || !d[m])) {
                        var g = a(c, m);
                        try {
                            r(u, m, g)
                        } catch (e) {}
                    }
                }
            }
            return u
        }
    },
    59061: function(e, t) {
        "use strict";
        t.D = void 0;
        var n = new WeakMap;
        function r(e) {
            var t, r, i;
            return null != e && (t = !0 === e.disableCache,
            r = !0 === e.disableMix,
            i = e.transform),
            function() {
                for (var e = [], o = "", a = null, s = t ? null : n, l = Array(arguments.length), u = 0; u < arguments.length; u++)
                    l[u] = arguments[u];
                for (; l.length > 0; ) {
                    var c = l.pop();
                    if (null != c && !1 !== c) {
                        if (Array.isArray(c)) {
                            for (var d = 0; d < c.length; d++)
                                l.push(c[d]);
                            continue
                        }
                        var p = null != i ? i(c) : c;
                        if (p.$$css) {
                            var f = "";
                            if (null != s && s.has(p)) {
                                var h = s.get(p);
                                null != h && (f = h[0],
                                e.push.apply(e, h[1]),
                                s = h[2])
                            } else {
                                var m = [];
                                for (var g in p) {
                                    var y = p[g];
                                    "$$css" === g || ("string" == typeof y || null === y ? e.includes(g) || (e.push(g),
                                    null != s && m.push(g),
                                    "string" == typeof y && (f += f ? " " + y : y)) : console.error("styleq: ".concat(g, " typeof ").concat(String(y), ' is not "string" or "null".')))
                                }
                                if (null != s) {
                                    var v = new WeakMap;
                                    s.set(p, [f, m, v]),
                                    s = v
                                }
                            }
                            f && (o = o ? f + " " + o : f)
                        } else if (r)
                            null == a && (a = {}),
                            a = Object.assign({}, p, a);
                        else {
                            var b = null;
                            for (var _ in p) {
                                var S = p[_];
                                void 0 === S || e.includes(_) || (null != S && (null == a && (a = {}),
                                null == b && (b = {}),
                                b[_] = S),
                                e.push(_),
                                s = null)
                            }
                            null != b && (a = Object.assign(b, a))
                        }
                    }
                }
                return [o, a]
            }
        }
        var i = r();
        t.D = i,
        i.factory = r
    },
    55789: function(e, t) {
        "use strict";
        t.j = function(e, t) {
            if (null != e[r]) {
                var o = t ? 1 : 0;
                if (n.has(e)) {
                    var a = n.get(e)
                      , s = a[o];
                    return null == s && (s = i(e, t),
                    a[o] = s,
                    n.set(e, a)),
                    s
                }
                var l = i(e, t)
                  , u = [, , ];
                return u[o] = l,
                n.set(e, u),
                l
            }
            return e
        }
        ;
        var n = new WeakMap
          , r = "$$css$localize";
        function i(e, t) {
            var n = {};
            for (var i in e)
                if (i !== r) {
                    var o = e[i];
                    Array.isArray(o) ? n[i] = t ? o[1] : o[0] : n[i] = o
                }
            return n
        }
    },
    98123: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        }),
        e = n.hmd(e),
        "undefined" != typeof self ? o = self : o = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : e;
        var r, i, o, a = ("function" == typeof (i = o.Symbol) ? i.observable ? r = i.observable : (r = i("observable"),
        i.observable = r) : r = "@@observable",
        r)
    },
    73897: function(e) {
        e.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    85372: function(e) {
        e.exports = function(e) {
            if (Array.isArray(e))
                return e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    66115: function(e) {
        e.exports = function(e) {
            if (void 0 === e)
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    17156: function(e) {
        function t(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a)
                  , l = s.value
            } catch (e) {
                n(e);
                return
            }
            s.done ? t(l) : Promise.resolve(l).then(r, i)
        }
        e.exports = function(e) {
            return function() {
                var n = this
                  , r = arguments;
                return new Promise(function(i, o) {
                    var a = e.apply(n, r);
                    function s(e) {
                        t(a, i, o, s, l, "next", e)
                    }
                    function l(e) {
                        t(a, i, o, s, l, "throw", e)
                    }
                    s(void 0)
                }
                )
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    56690: function(e) {
        e.exports = function(e, t) {
            if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function")
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    3515: function(e, t, n) {
        var r = n(6015)
          , i = n(69617);
        function o(t, n, a) {
            return i() ? e.exports = o = Reflect.construct.bind() : e.exports = o = function(e, t, n) {
                var i = [null];
                i.push.apply(i, t);
                var o = new (Function.bind.apply(e, i));
                return n && r(o, n.prototype),
                o
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            o.apply(null, arguments)
        }
        e.exports = o,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    89728: function(e, t, n) {
        var r = n(64062);
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, r(i.key), i)
            }
        }
        e.exports = function(e, t, n) {
            return t && i(e.prototype, t),
            n && i(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    38416: function(e, t, n) {
        var r = n(64062);
        e.exports = function(e, t, n) {
            return (t = r(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    73808: function(e) {
        function t(n) {
            return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            t(n)
        }
        e.exports = t,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    61655: function(e, t, n) {
        var r = n(6015);
        e.exports = function(e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && r(e, t)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    64836: function(e) {
        e.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    46035: function(e) {
        e.exports = function(e) {
            try {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            } catch (t) {
                return "function" == typeof e
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    69617: function(e) {
        e.exports = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    68872: function(e) {
        e.exports = function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, i, o, a, s = [], l = !0, u = !1;
                try {
                    if (o = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        l = !1
                    } else
                        for (; !(l = (r = o.call(n)).done) && (s.push(r.value),
                        s.length !== t); l = !0)
                            ;
                } catch (e) {
                    u = !0,
                    i = e
                } finally {
                    try {
                        if (!l && null != n.return && (a = n.return(),
                        Object(a) !== a))
                            return
                    } finally {
                        if (u)
                            throw i
                    }
                }
                return s
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    12218: function(e) {
        e.exports = function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    94993: function(e, t, n) {
        var r = n(18698).default
          , i = n(66115);
        e.exports = function(e, t) {
            if (t && ("object" === r(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw TypeError("Derived constructors may only return object or undefined");
            return i(e)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    17061: function(e, t, n) {
        var r = n(18698).default;
        function i() {
            "use strict";
            e.exports = i = function() {
                return n
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports;
            var t, n = {}, o = Object.prototype, a = o.hasOwnProperty, s = Object.defineProperty || function(e, t, n) {
                e[t] = n.value
            }
            , l = "function" == typeof Symbol ? Symbol : {}, u = l.iterator || "@@iterator", c = l.asyncIterator || "@@asyncIterator", d = l.toStringTag || "@@toStringTag";
            function p(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                p({}, "")
            } catch (e) {
                p = function(e, t, n) {
                    return e[t] = n
                }
            }
            function f(e, n, r, i) {
                var o, a, l = Object.create((n && n.prototype instanceof b ? n : b).prototype);
                return s(l, "_invoke", {
                    value: (o = new I(i || []),
                    a = m,
                    function(n, i) {
                        if (a === g)
                            throw Error("Generator is already running");
                        if (a === y) {
                            if ("throw" === n)
                                throw i;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (o.method = n,
                        o.arg = i; ; ) {
                            var s = o.delegate;
                            if (s) {
                                var l = function e(n, r) {
                                    var i = r.method
                                      , o = n.iterator[i];
                                    if (o === t)
                                        return r.delegate = null,
                                        "throw" === i && n.iterator.return && (r.method = "return",
                                        r.arg = t,
                                        e(n, r),
                                        "throw" === r.method) || "return" !== i && (r.method = "throw",
                                        r.arg = TypeError("The iterator does not provide a '" + i + "' method")),
                                        v;
                                    var a = h(o, n.iterator, r.arg);
                                    if ("throw" === a.type)
                                        return r.method = "throw",
                                        r.arg = a.arg,
                                        r.delegate = null,
                                        v;
                                    var s = a.arg;
                                    return s ? s.done ? (r[n.resultName] = s.value,
                                    r.next = n.nextLoc,
                                    "return" !== r.method && (r.method = "next",
                                    r.arg = t),
                                    r.delegate = null,
                                    v) : s : (r.method = "throw",
                                    r.arg = TypeError("iterator result is not an object"),
                                    r.delegate = null,
                                    v)
                                }(s, o);
                                if (l) {
                                    if (l === v)
                                        continue;
                                    return l
                                }
                            }
                            if ("next" === o.method)
                                o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if (a === m)
                                    throw a = y,
                                    o.arg;
                                o.dispatchException(o.arg)
                            } else
                                "return" === o.method && o.abrupt("return", o.arg);
                            a = g;
                            var u = h(e, r, o);
                            if ("normal" === u.type) {
                                if (a = o.done ? y : "suspendedYield",
                                u.arg === v)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: o.done
                                }
                            }
                            "throw" === u.type && (a = y,
                            o.method = "throw",
                            o.arg = u.arg)
                        }
                    }
                    )
                }),
                l
            }
            function h(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            n.wrap = f;
            var m = "suspendedStart"
              , g = "executing"
              , y = "completed"
              , v = {};
            function b() {}
            function _() {}
            function S() {}
            var w = {};
            p(w, u, function() {
                return this
            });
            var E = Object.getPrototypeOf
              , x = E && E(E(M([])));
            x && x !== o && a.call(x, u) && (w = x);
            var k = S.prototype = b.prototype = Object.create(w);
            function O(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    p(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function C(e, t) {
                var n;
                s(this, "_invoke", {
                    value: function(i, o) {
                        function s() {
                            return new t(function(n, s) {
                                !function n(i, o, s, l) {
                                    var u = h(e[i], e, o);
                                    if ("throw" !== u.type) {
                                        var c = u.arg
                                          , d = c.value;
                                        return d && "object" == r(d) && a.call(d, "__await") ? t.resolve(d.__await).then(function(e) {
                                            n("next", e, s, l)
                                        }, function(e) {
                                            n("throw", e, s, l)
                                        }) : t.resolve(d).then(function(e) {
                                            c.value = e,
                                            s(c)
                                        }, function(e) {
                                            return n("throw", e, s, l)
                                        })
                                    }
                                    l(u.arg)
                                }(i, o, n, s)
                            }
                            )
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                })
            }
            function T(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function R(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function I(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(T, this),
                this.reset(!0)
            }
            function M(e) {
                if (e || "" === e) {
                    var n = e[u];
                    if (n)
                        return n.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var i = -1
                          , o = function n() {
                            for (; ++i < e.length; )
                                if (a.call(e, i))
                                    return n.value = e[i],
                                    n.done = !1,
                                    n;
                            return n.value = t,
                            n.done = !0,
                            n
                        };
                        return o.next = o
                    }
                }
                throw TypeError(r(e) + " is not iterable")
            }
            return _.prototype = S,
            s(k, "constructor", {
                value: S,
                configurable: !0
            }),
            s(S, "constructor", {
                value: _,
                configurable: !0
            }),
            _.displayName = p(S, d, "GeneratorFunction"),
            n.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            n.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, S) : (e.__proto__ = S,
                p(e, d, "GeneratorFunction")),
                e.prototype = Object.create(k),
                e
            }
            ,
            n.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            O(C.prototype),
            p(C.prototype, c, function() {
                return this
            }),
            n.AsyncIterator = C,
            n.async = function(e, t, r, i, o) {
                void 0 === o && (o = Promise);
                var a = new C(f(e, t, r, i),o);
                return n.isGeneratorFunction(t) ? a : a.next().then(function(e) {
                    return e.done ? e.value : a.next()
                })
            }
            ,
            O(k),
            p(k, d, "Generator"),
            p(k, u, function() {
                return this
            }),
            p(k, "toString", function() {
                return "[object Generator]"
            }),
            n.keys = function(e) {
                var t = Object(e)
                  , n = [];
                for (var r in t)
                    n.push(r);
                return n.reverse(),
                function e() {
                    for (; n.length; ) {
                        var r = n.pop();
                        if (r in t)
                            return e.value = r,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            n.values = M,
            I.prototype = {
                constructor: I,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(R),
                    !e)
                        for (var n in this)
                            "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var n = this;
                    function r(r, i) {
                        return s.type = "throw",
                        s.arg = e,
                        n.next = r,
                        i && (n.method = "next",
                        n.arg = t),
                        !!i
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i]
                          , s = o.completion;
                        if ("root" === o.tryLoc)
                            return r("end");
                        if (o.tryLoc <= this.prev) {
                            var l = a.call(o, "catchLoc")
                              , u = a.call(o, "finallyLoc");
                            if (l && u) {
                                if (this.prev < o.catchLoc)
                                    return r(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return r(o.finallyLoc)
                            } else if (l) {
                                if (this.prev < o.catchLoc)
                                    return r(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return r(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var o = i ? i.completion : {};
                    return o.type = e,
                    o.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    v) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    v
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            R(n),
                            v
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                R(n)
                            }
                            return i
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(e, n, r) {
                    return this.delegate = {
                        iterator: M(e),
                        resultName: n,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = t),
                    v
                }
            },
            n
        }
        e.exports = i,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    6015: function(e) {
        function t(n, r) {
            return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            t(n, r)
        }
        e.exports = t,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    27424: function(e, t, n) {
        var r = n(85372)
          , i = n(68872)
          , o = n(86116)
          , a = n(12218);
        e.exports = function(e, t) {
            return r(e) || i(e, t) || o(e, t) || a()
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    95036: function(e, t, n) {
        var r = n(18698).default;
        e.exports = function(e, t) {
            if ("object" !== r(e) || null === e)
                return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(e, t || "default");
                if ("object" !== r(i))
                    return i;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    64062: function(e, t, n) {
        var r = n(18698).default
          , i = n(95036);
        e.exports = function(e) {
            var t = i(e, "string");
            return "symbol" === r(t) ? t : String(t)
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    18698: function(e) {
        function t(n) {
            return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            t(n)
        }
        e.exports = t,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    86116: function(e, t, n) {
        var r = n(73897);
        e.exports = function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return r(e, t)
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    33496: function(e, t, n) {
        var r = n(73808)
          , i = n(6015)
          , o = n(46035)
          , a = n(3515);
        function s(t) {
            var n = "function" == typeof Map ? new Map : void 0;
            return e.exports = s = function(e) {
                if (null === e || !o(e))
                    return e;
                if ("function" != typeof e)
                    throw TypeError("Super expression must either be null or a function");
                if (void 0 !== n) {
                    if (n.has(e))
                        return n.get(e);
                    n.set(e, t)
                }
                function t() {
                    return a(e, arguments, r(this).constructor)
                }
                return t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                i(t, e)
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            s(t)
        }
        e.exports = s,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    64687: function(e, t, n) {
        var r = n(17061)();
        e.exports = r;
        try {
            regeneratorRuntime = r
        } catch (e) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
        }
    },
    60811: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return p
            }
        });
        var r = n(13533)
          , i = n(16824)
          , o = n(29531)
          , a = n(43927);
        class s {
            constructor(e, t) {
                let n, r;
                n = e || new a.s,
                r = t || new a.s,
                this._stack = [{
                    scope: n
                }],
                this._isolationScope = r
            }
            withScope(e) {
                let t;
                let n = this._pushScope();
                try {
                    t = e(n)
                } catch (e) {
                    throw this._popScope(),
                    e
                }
                return (0,
                i.J8)(t) ? t.then(e => (this._popScope(),
                e), e => {
                    throw this._popScope(),
                    e
                }
                ) : (this._popScope(),
                t)
            }
            getClient() {
                return this.getStackTop().client
            }
            getScope() {
                return this.getStackTop().scope
            }
            getIsolationScope() {
                return this._isolationScope
            }
            getStackTop() {
                return this._stack[this._stack.length - 1]
            }
            _pushScope() {
                let e = this.getScope().clone();
                return this._stack.push({
                    client: this.getClient(),
                    scope: e
                }),
                e
            }
            _popScope() {
                return !(this._stack.length <= 1) && !!this._stack.pop()
            }
        }
        function l() {
            let e = (0,
            r.c)()
              , t = (0,
            r.q)(e);
            return t.stack = t.stack || new s((0,
            o.Y)("defaultCurrentScope", () => new a.s),(0,
            o.Y)("defaultIsolationScope", () => new a.s))
        }
        function u(e) {
            return l().withScope(e)
        }
        function c(e, t) {
            let n = l();
            return n.withScope( () => (n.getStackTop().scope = e,
            t(e)))
        }
        function d(e) {
            return l().withScope( () => e(l().getIsolationScope()))
        }
        function p(e) {
            let t = (0,
            r.q)(e);
            return t.acs ? t.acs : {
                withIsolationScope: d,
                withScope: u,
                withSetScope: c,
                withSetIsolationScope: (e, t) => d(t),
                getCurrentScope: () => l().getScope(),
                getIsolationScope: () => l().getIsolationScope()
            }
        }
    },
    13533: function(e, t, n) {
        "use strict";
        n.d(t, {
            c: function() {
                return o
            },
            q: function() {
                return a
            }
        });
        var r = n(29531)
          , i = n(42990);
        function o() {
            return a(r.GLOBAL_OBJ),
            r.GLOBAL_OBJ
        }
        function a(e) {
            let t = e.__SENTRY__ = e.__SENTRY__ || {};
            return t.version = t.version || i.J,
            t[i.J] = t[i.J] || {}
        }
    },
    73243: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return r
            }
        });
        let r = "production"
    },
    73076: function(e, t, n) {
        "use strict";
        n.d(t, {
            $e: function() {
                return c
            },
            aF: function() {
                return l
            },
            lW: function() {
                return u
            },
            nZ: function() {
                return s
            },
            s3: function() {
                return d
            }
        });
        var r = n(29531)
          , i = n(60811)
          , o = n(13533)
          , a = n(43927);
        function s() {
            let e = (0,
            o.c)();
            return (0,
            i.G)(e).getCurrentScope()
        }
        function l() {
            let e = (0,
            o.c)();
            return (0,
            i.G)(e).getIsolationScope()
        }
        function u() {
            return (0,
            r.Y)("globalScope", () => new a.s)
        }
        function c(...e) {
            let t = (0,
            o.c)()
              , n = (0,
            i.G)(t);
            if (2 === e.length) {
                let[t,r] = e;
                return t ? n.withSetScope(t, r) : n.withScope(r)
            }
            return n.withScope(e[0])
        }
        function d() {
            return s().getClient()
        }
    },
    94223: function(e, t, n) {
        "use strict";
        n.d(t, {
            X: function() {
                return r
            }
        });
        let r = !1
    },
    11793: function(e, t, n) {
        "use strict";
        n.d(t, {
            Mq: function() {
                return l
            },
            Q3: function() {
                return s
            },
            uE: function() {
                return u
            }
        });
        var r = n(39432)
          , i = n(73326)
          , o = n(72123)
          , a = n(81585);
        function s(e, t, n, o) {
            let a = (0,
            r.HY)(n)
              , s = {
                sent_at: new Date().toISOString(),
                ...a && {
                    sdk: a
                },
                ...!!o && t && {
                    dsn: (0,
                    i.RA)(t)
                }
            }
              , l = "aggregates"in e ? [{
                type: "sessions"
            }, e] : [{
                type: "session"
            }, e.toJSON()];
            return (0,
            r.Jd)(s, [l])
        }
        function l(e, t, n, i) {
            var o;
            let a = (0,
            r.HY)(n)
              , s = e.type && "replay_event" !== e.type ? e.type : "event";
            (o = n && n.sdk) && (e.sdk = e.sdk || {},
            e.sdk.name = e.sdk.name || o.name,
            e.sdk.version = e.sdk.version || o.version,
            e.sdk.integrations = [...e.sdk.integrations || [], ...o.integrations || []],
            e.sdk.packages = [...e.sdk.packages || [], ...o.packages || []]);
            let l = (0,
            r.Cd)(e, a, i, t);
            delete e.sdkProcessingMetadata;
            let u = [{
                type: s
            }, e];
            return (0,
            r.Jd)(l, [u])
        }
        function u(e, t) {
            let n = (0,
            o.jC)(e[0])
              , s = t && t.getDsn()
              , l = t && t.getOptions().tunnel
              , u = {
                sent_at: new Date().toISOString(),
                ...!!n.trace_id && !!n.public_key && {
                    trace: n
                },
                ...!!l && s && {
                    dsn: (0,
                    i.RA)(s)
                }
            }
              , c = t && t.getOptions().beforeSendSpan
              , d = c ? e => c((0,
            a.XU)(e)) : e => (0,
            a.XU)(e)
              , p = [];
            for (let t of e) {
                let e = d(t);
                e && p.push((0,
                r.KQ)(e))
            }
            return (0,
            r.Jd)(u, p)
        }
    },
    39424: function(e, t, n) {
        "use strict";
        n.d(t, {
            Qy: function() {
                return m
            },
            Tb: function() {
                return c
            },
            YA: function() {
                return f
            },
            cg: function() {
                return b
            },
            eN: function() {
                return d
            },
            v: function() {
                return p
            },
            yj: function() {
                return g
            },
            yl: function() {
                return h
            }
        });
        var r = n(41001)
          , i = n(29531)
          , o = n(73243)
          , a = n(73076)
          , s = n(94223)
          , l = n(10042)
          , u = n(5808);
        function c(e, t) {
            return (0,
            a.nZ)().captureException(e, (0,
            u.U0)(t))
        }
        function d(e, t) {
            return (0,
            a.nZ)().captureEvent(e, t)
        }
        function p(e, t) {
            (0,
            a.aF)().setContext(e, t)
        }
        function f(e, t) {
            (0,
            a.aF)().setTag(e, t)
        }
        async function h(e) {
            let t = (0,
            a.s3)();
            return t ? t.flush(e) : (s.X && r.kg.warn("Cannot flush events. No client defined."),
            Promise.resolve(!1))
        }
        function m(e) {
            (0,
            a.aF)().addEventProcessor(e)
        }
        function g(e) {
            let t = (0,
            a.s3)()
              , n = (0,
            a.aF)()
              , r = (0,
            a.nZ)()
              , {release: s, environment: u=o.J} = t && t.getOptions() || {}
              , {userAgent: c} = i.GLOBAL_OBJ.navigator || {}
              , d = (0,
            l.Hv)({
                release: s,
                environment: u,
                user: r.getUser() || n.getUser(),
                ...c && {
                    userAgent: c
                },
                ...e
            })
              , p = n.getSession();
            return p && "ok" === p.status && (0,
            l.CT)(p, {
                status: "exited"
            }),
            y(),
            n.setSession(d),
            r.setSession(d),
            d
        }
        function y() {
            let e = (0,
            a.aF)()
              , t = (0,
            a.nZ)()
              , n = t.getSession() || e.getSession();
            n && (0,
            l.RJ)(n),
            v(),
            e.setSession(),
            t.setSession()
        }
        function v() {
            let e = (0,
            a.aF)()
              , t = (0,
            a.nZ)()
              , n = (0,
            a.s3)()
              , r = t.getSession() || e.getSession();
            r && n && n.captureSession(r)
        }
        function b(e=!1) {
            if (e) {
                y();
                return
            }
            v()
        }
    },
    72751: function(e, t, n) {
        "use strict";
        n.d(t, {
            y: function() {
                return i
            }
        });
        var r = n(27179);
        function i(e) {
            let t = e._sentryMetrics;
            if (!t)
                return;
            let n = {};
            for (let[,[e,i]] of t)
                (n[e] || (n[e] = [])).push((0,
                r.Jr)(i));
            return n
        }
    },
    43927: function(e, t, n) {
        "use strict";
        n.d(t, {
            s: function() {
                return d
            }
        });
        var r = n(19548)
          , i = n(16824)
          , o = n(26181)
          , a = n(41982)
          , s = n(41001)
          , l = n(10042)
          , u = n(89366);
        class c {
            constructor() {
                this._notifyingListeners = !1,
                this._scopeListeners = [],
                this._eventProcessors = [],
                this._breadcrumbs = [],
                this._attachments = [],
                this._user = {},
                this._tags = {},
                this._extra = {},
                this._contexts = {},
                this._sdkProcessingMetadata = {},
                this._propagationContext = (0,
                r.Q)()
            }
            clone() {
                let e = new c;
                return e._breadcrumbs = [...this._breadcrumbs],
                e._tags = {
                    ...this._tags
                },
                e._extra = {
                    ...this._extra
                },
                e._contexts = {
                    ...this._contexts
                },
                e._user = this._user,
                e._level = this._level,
                e._session = this._session,
                e._transactionName = this._transactionName,
                e._fingerprint = this._fingerprint,
                e._eventProcessors = [...this._eventProcessors],
                e._requestSession = this._requestSession,
                e._attachments = [...this._attachments],
                e._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata
                },
                e._propagationContext = {
                    ...this._propagationContext
                },
                e._client = this._client,
                e._lastEventId = this._lastEventId,
                (0,
                u.D)(e, (0,
                u.Y)(this)),
                e
            }
            setClient(e) {
                this._client = e
            }
            setLastEventId(e) {
                this._lastEventId = e
            }
            getClient() {
                return this._client
            }
            lastEventId() {
                return this._lastEventId
            }
            addScopeListener(e) {
                this._scopeListeners.push(e)
            }
            addEventProcessor(e) {
                return this._eventProcessors.push(e),
                this
            }
            setUser(e) {
                return this._user = e || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    username: void 0
                },
                this._session && (0,
                l.CT)(this._session, {
                    user: e
                }),
                this._notifyScopeListeners(),
                this
            }
            getUser() {
                return this._user
            }
            getRequestSession() {
                return this._requestSession
            }
            setRequestSession(e) {
                return this._requestSession = e,
                this
            }
            setTags(e) {
                return this._tags = {
                    ...this._tags,
                    ...e
                },
                this._notifyScopeListeners(),
                this
            }
            setTag(e, t) {
                return this._tags = {
                    ...this._tags,
                    [e]: t
                },
                this._notifyScopeListeners(),
                this
            }
            setExtras(e) {
                return this._extra = {
                    ...this._extra,
                    ...e
                },
                this._notifyScopeListeners(),
                this
            }
            setExtra(e, t) {
                return this._extra = {
                    ...this._extra,
                    [e]: t
                },
                this._notifyScopeListeners(),
                this
            }
            setFingerprint(e) {
                return this._fingerprint = e,
                this._notifyScopeListeners(),
                this
            }
            setLevel(e) {
                return this._level = e,
                this._notifyScopeListeners(),
                this
            }
            setTransactionName(e) {
                return this._transactionName = e,
                this._notifyScopeListeners(),
                this
            }
            setContext(e, t) {
                return null === t ? delete this._contexts[e] : this._contexts[e] = t,
                this._notifyScopeListeners(),
                this
            }
            setSession(e) {
                return e ? this._session = e : delete this._session,
                this._notifyScopeListeners(),
                this
            }
            getSession() {
                return this._session
            }
            update(e) {
                if (!e)
                    return this;
                let t = "function" == typeof e ? e(this) : e
                  , [n,r] = t instanceof d ? [t.getScopeData(), t.getRequestSession()] : (0,
                i.PO)(t) ? [e, e.requestSession] : []
                  , {tags: o, extra: a, user: s, contexts: l, level: u, fingerprint: c=[], propagationContext: p} = n || {};
                return this._tags = {
                    ...this._tags,
                    ...o
                },
                this._extra = {
                    ...this._extra,
                    ...a
                },
                this._contexts = {
                    ...this._contexts,
                    ...l
                },
                s && Object.keys(s).length && (this._user = s),
                u && (this._level = u),
                c.length && (this._fingerprint = c),
                p && (this._propagationContext = p),
                r && (this._requestSession = r),
                this
            }
            clear() {
                return this._breadcrumbs = [],
                this._tags = {},
                this._extra = {},
                this._user = {},
                this._contexts = {},
                this._level = void 0,
                this._transactionName = void 0,
                this._fingerprint = void 0,
                this._requestSession = void 0,
                this._session = void 0,
                (0,
                u.D)(this, void 0),
                this._attachments = [],
                this._propagationContext = (0,
                r.Q)(),
                this._notifyScopeListeners(),
                this
            }
            addBreadcrumb(e, t) {
                let n = "number" == typeof t ? t : 100;
                if (n <= 0)
                    return this;
                let r = {
                    timestamp: (0,
                    o.yW)(),
                    ...e
                }
                  , i = this._breadcrumbs;
                return i.push(r),
                this._breadcrumbs = i.length > n ? i.slice(-n) : i,
                this._notifyScopeListeners(),
                this
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [],
                this._notifyScopeListeners(),
                this
            }
            addAttachment(e) {
                return this._attachments.push(e),
                this
            }
            clearAttachments() {
                return this._attachments = [],
                this
            }
            getScopeData() {
                return {
                    breadcrumbs: this._breadcrumbs,
                    attachments: this._attachments,
                    contexts: this._contexts,
                    tags: this._tags,
                    extra: this._extra,
                    user: this._user,
                    level: this._level,
                    fingerprint: this._fingerprint || [],
                    eventProcessors: this._eventProcessors,
                    propagationContext: this._propagationContext,
                    sdkProcessingMetadata: this._sdkProcessingMetadata,
                    transactionName: this._transactionName,
                    span: (0,
                    u.Y)(this)
                }
            }
            setSDKProcessingMetadata(e) {
                return this._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata,
                    ...e
                },
                this
            }
            setPropagationContext(e) {
                return this._propagationContext = e,
                this
            }
            getPropagationContext() {
                return this._propagationContext
            }
            captureException(e, t) {
                let n = t && t.event_id ? t.event_id : (0,
                a.DM)();
                if (!this._client)
                    return s.kg.warn("No client configured on scope - will not capture exception!"),
                    n;
                let r = Error("Sentry syntheticException");
                return this._client.captureException(e, {
                    originalException: e,
                    syntheticException: r,
                    ...t,
                    event_id: n
                }, this),
                n
            }
            captureMessage(e, t, n) {
                let r = n && n.event_id ? n.event_id : (0,
                a.DM)();
                if (!this._client)
                    return s.kg.warn("No client configured on scope - will not capture message!"),
                    r;
                let i = Error(e);
                return this._client.captureMessage(e, t, {
                    originalException: e,
                    syntheticException: i,
                    ...n,
                    event_id: r
                }, this),
                r
            }
            captureEvent(e, t) {
                let n = t && t.event_id ? t.event_id : (0,
                a.DM)();
                return this._client ? this._client.captureEvent(e, {
                    ...t,
                    event_id: n
                }, this) : s.kg.warn("No client configured on scope - will not capture event!"),
                n
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0,
                this._scopeListeners.forEach(e => {
                    e(this)
                }
                ),
                this._notifyingListeners = !1)
            }
        }
        let d = c
    },
    31218: function(e, t, n) {
        "use strict";
        n.d(t, {
            $J: function() {
                return o
            },
            E1: function() {
                return l
            },
            JQ: function() {
                return d
            },
            S3: function() {
                return a
            },
            TE: function() {
                return i
            },
            Wb: function() {
                return u
            },
            Zj: function() {
                return r
            },
            ju: function() {
                return s
            },
            p6: function() {
                return c
            }
        });
        let r = "sentry.source"
          , i = "sentry.sample_rate"
          , o = "sentry.op"
          , a = "sentry.origin"
          , s = "sentry.idle_span_finish_reason"
          , l = "sentry.measurement_unit"
          , u = "sentry.measurement_value"
          , c = "sentry.profile_id"
          , d = "sentry.exclusive_time"
    },
    10042: function(e, t, n) {
        "use strict";
        n.d(t, {
            CT: function() {
                return s
            },
            Hv: function() {
                return a
            },
            RJ: function() {
                return l
            }
        });
        var r = n(26181)
          , i = n(41982)
          , o = n(27179);
        function a(e) {
            let t = (0,
            r.ph)()
              , n = {
                sid: (0,
                i.DM)(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => (0,
                o.Jr)({
                    sid: `${n.sid}`,
                    init: n.init,
                    started: new Date(1e3 * n.started).toISOString(),
                    timestamp: new Date(1e3 * n.timestamp).toISOString(),
                    status: n.status,
                    errors: n.errors,
                    did: "number" == typeof n.did || "string" == typeof n.did ? `${n.did}` : void 0,
                    duration: n.duration,
                    abnormal_mechanism: n.abnormal_mechanism,
                    attrs: {
                        release: n.release,
                        environment: n.environment,
                        ip_address: n.ipAddress,
                        user_agent: n.userAgent
                    }
                })
            };
            return e && s(n, e),
            n
        }
        function s(e, t={}) {
            if (!t.user || (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
            e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
            e.timestamp = t.timestamp || (0,
            r.ph)(),
            t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
            t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
            t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0,
            i.DM)()),
            void 0 !== t.init && (e.init = t.init),
            !e.did && t.did && (e.did = `${t.did}`),
            "number" == typeof t.started && (e.started = t.started),
            e.ignoreDuration)
                e.duration = void 0;
            else if ("number" == typeof t.duration)
                e.duration = t.duration;
            else {
                let t = e.timestamp - e.started;
                e.duration = t >= 0 ? t : 0
            }
            t.release && (e.release = t.release),
            t.environment && (e.environment = t.environment),
            !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
            !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
            "number" == typeof t.errors && (e.errors = t.errors),
            t.status && (e.status = t.status)
        }
        function l(e, t) {
            let n = {};
            t ? n = {
                status: t
            } : "ok" === e.status && (n = {
                status: "exited"
            }),
            s(e, n)
        }
    },
    72123: function(e, t, n) {
        "use strict";
        n.d(t, {
            Lh: function() {
                return c
            },
            _l: function() {
                return d
            },
            jC: function() {
                return p
            }
        });
        var r = n(27179)
          , i = n(60859)
          , o = n(73243)
          , a = n(73076)
          , s = n(31218)
          , l = n(81585);
        let u = "_frozenDsc";
        function c(e, t) {
            (0,
            r.xp)(e, u, t)
        }
        function d(e, t) {
            let n = t.getOptions()
              , {publicKey: i} = t.getDsn() || {}
              , a = (0,
            r.Jr)({
                environment: n.environment || o.J,
                release: n.release,
                public_key: i,
                trace_id: e
            });
            return t.emit("createDsc", a),
            a
        }
        function p(e) {
            let t = (0,
            a.s3)();
            if (!t)
                return {};
            let n = d((0,
            l.XU)(e).trace_id || "", t)
              , r = (0,
            l.Gx)(e)
              , o = r[u];
            if (o)
                return o;
            let c = r.spanContext().traceState
              , p = c && c.get("sentry.dsc")
              , f = p && (0,
            i.EN)(p);
            if (f)
                return f;
            let h = (0,
            l.XU)(r)
              , m = h.data || {}
              , g = m[s.TE];
            null != g && (n.sample_rate = `${g}`);
            let y = m[s.Zj]
              , v = h.description;
            return "url" !== y && v && (n.transaction = v),
            n.sampled = String((0,
            l.Tt)(r)),
            t.emit("createDsc", n, r),
            n
        }
    },
    72441: function(e, t, n) {
        "use strict";
        n.d(t, {
            l: function() {
                return a
            },
            o: function() {
                return o
            }
        });
        var r = n(31218)
          , i = n(81585);
        function o(e, t, n) {
            let o = (0,
            i.HN)()
              , a = o && (0,
            i.Gx)(o);
            a && a.addEvent(e, {
                [r.Wb]: t,
                [r.E1]: n
            })
        }
        function a(e) {
            if (!e || 0 === e.length)
                return;
            let t = {};
            return e.forEach(e => {
                let n = e.attributes || {}
                  , i = n[r.E1]
                  , o = n[r.Wb];
                "string" == typeof i && "number" == typeof o && (t[e.name] = {
                    value: o,
                    unit: i
                })
            }
            ),
            t
        }
    },
    58915: function(e, t, n) {
        "use strict";
        n.d(t, {
            b: function() {
                return o
            }
        });
        var r = n(41982)
          , i = n(81585);
        class o {
            constructor(e={}) {
                this._traceId = e.traceId || (0,
                r.DM)(),
                this._spanId = e.spanId || (0,
                r.DM)().substring(16)
            }
            spanContext() {
                return {
                    spanId: this._spanId,
                    traceId: this._traceId,
                    traceFlags: i.ve
                }
            }
            end(e) {}
            setAttribute(e, t) {
                return this
            }
            setAttributes(e) {
                return this
            }
            setStatus(e) {
                return this
            }
            updateName(e) {
                return this
            }
            isRecording() {
                return !1
            }
            addEvent(e, t, n) {
                return this
            }
            addLink(e) {
                return this
            }
            addLinks(e) {
                return this
            }
            recordException(e, t) {}
        }
    },
    69737: function(e, t, n) {
        "use strict";
        n.d(t, {
            OP: function() {
                return i
            },
            Q0: function() {
                return a
            },
            jt: function() {
                return o
            },
            pq: function() {
                return r
            }
        });
        let r = 0
          , i = 1
          , o = 2;
        function a(e, t) {
            e.setAttribute("http.response.status_code", t);
            let n = function(e) {
                if (e < 400 && e >= 100)
                    return {
                        code: i
                    };
                if (e >= 400 && e < 500)
                    switch (e) {
                    case 401:
                        return {
                            code: o,
                            message: "unauthenticated"
                        };
                    case 403:
                        return {
                            code: o,
                            message: "permission_denied"
                        };
                    case 404:
                        return {
                            code: o,
                            message: "not_found"
                        };
                    case 409:
                        return {
                            code: o,
                            message: "already_exists"
                        };
                    case 413:
                        return {
                            code: o,
                            message: "failed_precondition"
                        };
                    case 429:
                        return {
                            code: o,
                            message: "resource_exhausted"
                        };
                    case 499:
                        return {
                            code: o,
                            message: "cancelled"
                        };
                    default:
                        return {
                            code: o,
                            message: "invalid_argument"
                        }
                    }
                if (e >= 500 && e < 600)
                    switch (e) {
                    case 501:
                        return {
                            code: o,
                            message: "unimplemented"
                        };
                    case 503:
                        return {
                            code: o,
                            message: "unavailable"
                        };
                    case 504:
                        return {
                            code: o,
                            message: "deadline_exceeded"
                        };
                    default:
                        return {
                            code: o,
                            message: "internal_error"
                        }
                    }
                return {
                    code: o,
                    message: "unknown_error"
                }
            }(t);
            "unknown_error" !== n.message && e.setStatus(n)
        }
    },
    99450: function(e, t, n) {
        "use strict";
        n.d(t, {
            qp: function() {
                return M
            },
            GK: function() {
                return I
            },
            _d: function() {
                return A
            }
        });
        var r = n(13533)
          , i = n(73076)
          , o = n(60811)
          , a = n(31218)
          , s = n(16824)
          , l = n(67973)
          , u = n(89366)
          , c = n(81585)
          , d = n(72123)
          , p = n(41001)
          , f = n(94223)
          , h = n(79769)
          , m = n(58915)
          , g = n(41982)
          , y = n(26181)
          , v = n(27179)
          , b = n(11793)
          , _ = n(72751)
          , S = n(72441);
        let w = "_sentryScope"
          , E = "_sentryIsolationScope";
        function x(e) {
            return {
                scope: e[w],
                isolationScope: e[E]
            }
        }
        class k {
            constructor(e={}) {
                this._traceId = e.traceId || (0,
                g.DM)(),
                this._spanId = e.spanId || (0,
                g.DM)().substring(16),
                this._startTime = e.startTimestamp || (0,
                y.ph)(),
                this._attributes = {},
                this.setAttributes({
                    [a.S3]: "manual",
                    [a.$J]: e.op,
                    ...e.attributes
                }),
                this._name = e.name,
                e.parentSpanId && (this._parentSpanId = e.parentSpanId),
                "sampled"in e && (this._sampled = e.sampled),
                e.endTimestamp && (this._endTime = e.endTimestamp),
                this._events = [],
                this._isStandaloneSpan = e.isStandalone,
                this._endTime && this._onSpanEnded()
            }
            addLink(e) {
                return this
            }
            addLinks(e) {
                return this
            }
            recordException(e, t) {}
            spanContext() {
                let {_spanId: e, _traceId: t, _sampled: n} = this;
                return {
                    spanId: e,
                    traceId: t,
                    traceFlags: n ? c.i0 : c.ve
                }
            }
            setAttribute(e, t) {
                return void 0 === t ? delete this._attributes[e] : this._attributes[e] = t,
                this
            }
            setAttributes(e) {
                return Object.keys(e).forEach(t => this.setAttribute(t, e[t])),
                this
            }
            updateStartTime(e) {
                this._startTime = (0,
                c.$k)(e)
            }
            setStatus(e) {
                return this._status = e,
                this
            }
            updateName(e) {
                return this._name = e,
                this
            }
            end(e) {
                this._endTime || (this._endTime = (0,
                c.$k)(e),
                function(e) {
                    if (!f.X)
                        return;
                    let {description: t="< unknown name >", op: n="< unknown op >"} = (0,
                    c.XU)(e)
                      , {spanId: r} = e.spanContext()
                      , i = (0,
                    c.Gx)(e) === e
                      , o = `[Tracing] Finishing "${n}" ${i ? "root " : ""}span "${t}" with ID ${r}`;
                    p.kg.log(o)
                }(this),
                this._onSpanEnded())
            }
            getSpanJSON() {
                return (0,
                v.Jr)({
                    data: this._attributes,
                    description: this._name,
                    op: this._attributes[a.$J],
                    parent_span_id: this._parentSpanId,
                    span_id: this._spanId,
                    start_timestamp: this._startTime,
                    status: (0,
                    c._4)(this._status),
                    timestamp: this._endTime,
                    trace_id: this._traceId,
                    origin: this._attributes[a.S3],
                    _metrics_summary: (0,
                    _.y)(this),
                    profile_id: this._attributes[a.p6],
                    exclusive_time: this._attributes[a.JQ],
                    measurements: (0,
                    S.l)(this._events),
                    is_segment: this._isStandaloneSpan && (0,
                    c.Gx)(this) === this || void 0,
                    segment_id: this._isStandaloneSpan ? (0,
                    c.Gx)(this).spanContext().spanId : void 0
                })
            }
            isRecording() {
                return !this._endTime && !!this._sampled
            }
            addEvent(e, t, n) {
                f.X && p.kg.log("[Tracing] Adding an event to span:", e);
                let r = O(t) ? t : n || (0,
                y.ph)()
                  , i = O(t) ? {} : t || {}
                  , o = {
                    name: e,
                    time: (0,
                    c.$k)(r),
                    attributes: i
                };
                return this._events.push(o),
                this
            }
            isStandaloneSpan() {
                return !!this._isStandaloneSpan
            }
            _onSpanEnded() {
                let e = (0,
                i.s3)();
                if (e && e.emit("spanEnd", this),
                !(this._isStandaloneSpan || this === (0,
                c.Gx)(this)))
                    return;
                if (this._isStandaloneSpan) {
                    this._sampled ? function(e) {
                        let t = (0,
                        i.s3)();
                        if (!t)
                            return;
                        let n = e[1];
                        if (!n || 0 === n.length) {
                            t.recordDroppedEvent("before_send", "span");
                            return
                        }
                        let r = t.getTransport();
                        r && r.send(e).then(null, e => {
                            f.X && p.kg.error("Error while sending span:", e)
                        }
                        )
                    }((0,
                    b.uE)([this], e)) : (f.X && p.kg.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),
                    e && e.recordDroppedEvent("sample_rate", "span"));
                    return
                }
                let t = this._convertSpanToTransaction();
                t && (x(this).scope || (0,
                i.nZ)()).captureEvent(t)
            }
            _convertSpanToTransaction() {
                if (!C((0,
                c.XU)(this)))
                    return;
                this._name || (f.X && p.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
                this._name = "<unlabeled transaction>");
                let {scope: e, isolationScope: t} = x(this)
                  , n = (e || (0,
                i.nZ)()).getClient() || (0,
                i.s3)();
                if (!0 !== this._sampled) {
                    f.X && p.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
                    n && n.recordDroppedEvent("sample_rate", "transaction");
                    return
                }
                let r = (0,
                c.Dp)(this).filter(e => e !== this && !(e instanceof k && e.isStandaloneSpan())).map(e => (0,
                c.XU)(e)).filter(C)
                  , o = this._attributes[a.Zj]
                  , s = {
                    contexts: {
                        trace: (0,
                        c.HR)(this)
                    },
                    spans: r.length > 1e3 ? r.sort( (e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3) : r,
                    start_timestamp: this._startTime,
                    timestamp: this._endTime,
                    transaction: this._name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        capturedSpanScope: e,
                        capturedSpanIsolationScope: t,
                        ...(0,
                        v.Jr)({
                            dynamicSamplingContext: (0,
                            d.jC)(this)
                        })
                    },
                    _metrics_summary: (0,
                    _.y)(this),
                    ...o && {
                        transaction_info: {
                            source: o
                        }
                    }
                }
                  , l = (0,
                S.l)(this._events);
                return l && Object.keys(l).length && (f.X && p.kg.log("[Measurements] Adding measurements to transaction event", JSON.stringify(l, void 0, 2)),
                s.measurements = l),
                s
            }
        }
        function O(e) {
            return e && "number" == typeof e || e instanceof Date || Array.isArray(e)
        }
        function C(e) {
            return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
        }
        var T = n(69737);
        let R = "__SENTRY_SUPPRESS_TRACING__";
        function I(e, t) {
            let n = P();
            if (n.startSpan)
                return n.startSpan(e, t);
            let r = L(e)
              , {forceTransaction: o, parentSpan: a} = e;
            return (0,
            i.$e)(e.scope, () => (void 0 !== a ? e => A(a, e) : e => e())( () => {
                let n = (0,
                i.nZ)()
                  , a = j(n)
                  , l = e.onlyIfParent && !a ? new m.b : D({
                    parentSpan: a,
                    spanArguments: r,
                    forceTransaction: o,
                    scope: n
                });
                return (0,
                u.D)(n, l),
                function(e, t, n= () => {}
                ) {
                    var r;
                    let i;
                    try {
                        i = e()
                    } catch (e) {
                        throw t(e),
                        n(),
                        e
                    }
                    return r = i,
                    (0,
                    s.J8)(r) ? r.then(e => (n(),
                    e), e => {
                        throw t(e),
                        n(),
                        e
                    }
                    ) : (n(),
                    r)
                }( () => t(l), () => {
                    let {status: e} = (0,
                    c.XU)(l);
                    l.isRecording() && (!e || "ok" === e) && l.setStatus({
                        code: T.jt,
                        message: "internal_error"
                    })
                }
                , () => l.end())
            }
            ))
        }
        function M(e) {
            let t = P();
            if (t.startInactiveSpan)
                return t.startInactiveSpan(e);
            let n = L(e)
              , {forceTransaction: r, parentSpan: o} = e;
            return (e.scope ? t => (0,
            i.$e)(e.scope, t) : void 0 !== o ? e => A(o, e) : e => e())( () => {
                let t = (0,
                i.nZ)()
                  , o = j(t);
                return e.onlyIfParent && !o ? new m.b : D({
                    parentSpan: o,
                    spanArguments: n,
                    forceTransaction: r,
                    scope: t
                })
            }
            )
        }
        function A(e, t) {
            let n = P();
            return n.withActiveSpan ? n.withActiveSpan(e, t) : (0,
            i.$e)(n => ((0,
            u.D)(n, e || void 0),
            t(n)))
        }
        function D({parentSpan: e, spanArguments: t, forceTransaction: n, scope: r}) {
            var o;
            let a;
            if (!(0,
            l.z)())
                return new m.b;
            let s = (0,
            i.aF)();
            if (e && !n)
                a = function(e, t, n) {
                    let {spanId: r, traceId: o} = e.spanContext()
                      , a = !t.getScopeData().sdkProcessingMetadata[R] && (0,
                    c.Tt)(e)
                      , s = a ? new k({
                        ...n,
                        parentSpanId: r,
                        traceId: o,
                        sampled: a
                    }) : new m.b({
                        traceId: o
                    });
                    (0,
                    c.j5)(e, s);
                    let l = (0,
                    i.s3)();
                    return l && (l.emit("spanStart", s),
                    n.endTimestamp && l.emit("spanEnd", s)),
                    s
                }(e, r, t),
                (0,
                c.j5)(e, a);
            else if (e) {
                let n = (0,
                d.jC)(e)
                  , {traceId: i, spanId: o} = e.spanContext()
                  , s = (0,
                c.Tt)(e);
                a = N({
                    traceId: i,
                    parentSpanId: o,
                    ...t
                }, r, s),
                (0,
                d.Lh)(a, n)
            } else {
                let {traceId: e, dsc: n, parentSpanId: i, sampled: o} = {
                    ...s.getPropagationContext(),
                    ...r.getPropagationContext()
                };
                a = N({
                    traceId: e,
                    parentSpanId: i,
                    ...t
                }, r, o),
                n && (0,
                d.Lh)(a, n)
            }
            return function(e) {
                if (!f.X)
                    return;
                let {description: t="< unknown name >", op: n="< unknown op >", parent_span_id: r} = (0,
                c.XU)(e)
                  , {spanId: i} = e.spanContext()
                  , o = (0,
                c.Tt)(e)
                  , a = (0,
                c.Gx)(e)
                  , s = a === e
                  , l = `[Tracing] Starting ${o ? "sampled" : "unsampled"} ${s ? "root " : ""}span`
                  , u = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
                if (r && u.push(`parent ID: ${r}`),
                !s) {
                    let {op: e, description: t} = (0,
                    c.XU)(a);
                    u.push(`root ID: ${a.spanContext().spanId}`),
                    e && u.push(`root op: ${e}`),
                    t && u.push(`root description: ${t}`)
                }
                p.kg.log(`${l}
  ${u.join("\n  ")}`)
            }(a),
            (o = a) && ((0,
            v.xp)(o, E, s),
            (0,
            v.xp)(o, w, r)),
            a
        }
        function L(e) {
            let t = {
                isStandalone: (e.experimental || {}).standalone,
                ...e
            };
            if (e.startTime) {
                let n = {
                    ...t
                };
                return n.startTimestamp = (0,
                c.$k)(e.startTime),
                delete n.startTime,
                n
            }
            return t
        }
        function P() {
            let e = (0,
            r.c)();
            return (0,
            o.G)(e)
        }
        function N(e, t, n) {
            let r = (0,
            i.s3)()
              , o = r && r.getOptions() || {}
              , {name: s="", attributes: u} = e
              , [c,d] = t.getScopeData().sdkProcessingMetadata[R] ? [!1] : function(e, t) {
                let n;
                if (!(0,
                l.z)(e))
                    return [!1];
                n = "function" == typeof e.tracesSampler ? e.tracesSampler(t) : void 0 !== t.parentSampled ? t.parentSampled : void 0 !== e.tracesSampleRate ? e.tracesSampleRate : 1;
                let r = (0,
                h.o)(n);
                return void 0 === r ? (f.X && p.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),
                [!1]) : r ? Math.random() < r ? [!0, r] : (f.X && p.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`),
                [!1, r]) : (f.X && p.kg.log(`[Tracing] Discarding transaction because ${"function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),
                [!1, r])
            }(o, {
                name: s,
                parentSampled: n,
                attributes: u,
                transactionContext: {
                    name: s,
                    parentSampled: n
                }
            })
              , m = new k({
                ...e,
                attributes: {
                    [a.Zj]: "custom",
                    ...e.attributes
                },
                sampled: c
            });
            return void 0 !== d && m.setAttribute(a.TE, d),
            r && r.emit("spanStart", m),
            m
        }
        function j(e) {
            let t = (0,
            u.Y)(e);
            if (!t)
                return;
            let n = (0,
            i.s3)();
            return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0,
            c.Gx)(t) : t
        }
    },
    67973: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return i
            }
        });
        var r = n(73076);
        function i(e) {
            if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
                return !1;
            let t = e || function() {
                let e = (0,
                r.s3)();
                return e && e.getOptions()
            }();
            return !!t && (t.enableTracing || "tracesSampleRate"in t || "tracesSampler"in t)
        }
    },
    79769: function(e, t, n) {
        "use strict";
        n.d(t, {
            o: function() {
                return o
            }
        });
        var r = n(41001)
          , i = n(94223);
        function o(e) {
            if ("boolean" == typeof e)
                return Number(e);
            let t = "string" == typeof e ? parseFloat(e) : e;
            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) {
                i.X && r.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`);
                return
            }
            return t
        }
    },
    5808: function(e, t, n) {
        "use strict";
        n.d(t, {
            U0: function() {
                return w
            },
            R: function() {
                return _
            }
        });
        var r = n(41982)
          , i = n(26181)
          , o = n(89163)
          , a = n(29531)
          , s = n(83408)
          , l = n(73243)
          , u = n(73076)
          , c = n(80128)
          , d = n(41001)
          , p = n(16824)
          , f = n(94223)
          , h = n(43927)
          , m = n(27179)
          , g = n(72123)
          , y = n(81585);
        function v(e, t) {
            let {extra: n, tags: r, user: i, contexts: o, level: a, sdkProcessingMetadata: s, breadcrumbs: l, fingerprint: u, eventProcessors: c, attachments: d, propagationContext: p, transactionName: f, span: h} = t;
            b(e, "extra", n),
            b(e, "tags", r),
            b(e, "user", i),
            b(e, "contexts", o),
            b(e, "sdkProcessingMetadata", s),
            a && (e.level = a),
            f && (e.transactionName = f),
            h && (e.span = h),
            l.length && (e.breadcrumbs = [...e.breadcrumbs, ...l]),
            u.length && (e.fingerprint = [...e.fingerprint, ...u]),
            c.length && (e.eventProcessors = [...e.eventProcessors, ...c]),
            d.length && (e.attachments = [...e.attachments, ...d]),
            e.propagationContext = {
                ...e.propagationContext,
                ...p
            }
        }
        function b(e, t, n) {
            if (n && Object.keys(n).length)
                for (let r in e[t] = {
                    ...e[t]
                },
                n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r])
        }
        function _(e, t, n, b, _, w) {
            let {normalizeDepth: E=3, normalizeMaxBreadth: x=1e3} = e
              , k = {
                ...t,
                event_id: t.event_id || n.event_id || (0,
                r.DM)(),
                timestamp: t.timestamp || (0,
                i.yW)()
            }
              , O = n.integrations || e.integrations.map(e => e.name);
            (function(e, t) {
                let {environment: n, release: r, dist: i, maxValueLength: a=250} = t;
                "environment"in e || (e.environment = "environment"in t ? n : l.J),
                void 0 === e.release && void 0 !== r && (e.release = r),
                void 0 === e.dist && void 0 !== i && (e.dist = i),
                e.message && (e.message = (0,
                o.$G)(e.message, a));
                let s = e.exception && e.exception.values && e.exception.values[0];
                s && s.value && (s.value = (0,
                o.$G)(s.value, a));
                let u = e.request;
                u && u.url && (u.url = (0,
                o.$G)(u.url, a))
            }
            )(k, e),
            O.length > 0 && (k.sdk = k.sdk || {},
            k.sdk.integrations = [...k.sdk.integrations || [], ...O]),
            _ && _.emit("applyFrameMetadata", t),
            void 0 === t.type && function(e, t) {
                let n;
                let r = a.GLOBAL_OBJ._sentryDebugIds;
                if (!r)
                    return;
                let i = S.get(t);
                i ? n = i : (n = new Map,
                S.set(t, n));
                let o = Object.entries(r).reduce( (e, [r,i]) => {
                    let o;
                    let a = n.get(r);
                    a ? o = a : (o = t(r),
                    n.set(r, o));
                    for (let t = o.length - 1; t >= 0; t--) {
                        let n = o[t];
                        if (n.filename) {
                            e[n.filename] = i;
                            break
                        }
                    }
                    return e
                }
                , {});
                try {
                    e.exception.values.forEach(e => {
                        e.stacktrace.frames.forEach(e => {
                            e.filename && (e.debug_id = o[e.filename])
                        }
                        )
                    }
                    )
                } catch (e) {}
            }(k, e.stackParser);
            let C = function(e, t) {
                if (!t)
                    return e;
                let n = e ? e.clone() : new h.s;
                return n.update(t),
                n
            }(b, n.captureContext);
            n.mechanism && (0,
            r.EG)(k, n.mechanism);
            let T = _ ? _.getEventProcessors() : []
              , R = (0,
            u.lW)().getScopeData();
            w && v(R, w.getScopeData()),
            C && v(R, C.getScopeData());
            let I = [...n.attachments || [], ...R.attachments];
            return I.length && (n.attachments = I),
            function(e, t) {
                let {fingerprint: n, span: i, breadcrumbs: o, sdkProcessingMetadata: a} = t;
                (function(e, t) {
                    let {extra: n, tags: r, user: i, contexts: o, level: a, transactionName: s} = t
                      , l = (0,
                    m.Jr)(n);
                    l && Object.keys(l).length && (e.extra = {
                        ...l,
                        ...e.extra
                    });
                    let u = (0,
                    m.Jr)(r);
                    u && Object.keys(u).length && (e.tags = {
                        ...u,
                        ...e.tags
                    });
                    let c = (0,
                    m.Jr)(i);
                    c && Object.keys(c).length && (e.user = {
                        ...c,
                        ...e.user
                    });
                    let d = (0,
                    m.Jr)(o);
                    d && Object.keys(d).length && (e.contexts = {
                        ...d,
                        ...e.contexts
                    }),
                    a && (e.level = a),
                    s && "transaction" !== e.type && (e.transaction = s)
                }
                )(e, t),
                i && function(e, t) {
                    e.contexts = {
                        trace: (0,
                        y.wy)(t),
                        ...e.contexts
                    },
                    e.sdkProcessingMetadata = {
                        dynamicSamplingContext: (0,
                        g.jC)(t),
                        ...e.sdkProcessingMetadata
                    };
                    let n = (0,
                    y.Gx)(t)
                      , r = (0,
                    y.XU)(n).description;
                    r && !e.transaction && "transaction" === e.type && (e.transaction = r)
                }(e, i),
                e.fingerprint = e.fingerprint ? (0,
                r.lE)(e.fingerprint) : [],
                n && (e.fingerprint = e.fingerprint.concat(n)),
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint,
                function(e, t) {
                    let n = [...e.breadcrumbs || [], ...t];
                    e.breadcrumbs = n.length ? n : void 0
                }(e, o),
                e.sdkProcessingMetadata = {
                    ...e.sdkProcessingMetadata,
                    ...a
                }
            }(k, R),
            (function e(t, n, r, i=0) {
                return new c.cW( (o, a) => {
                    let s = t[i];
                    if (null === n || "function" != typeof s)
                        o(n);
                    else {
                        let l = s({
                            ...n
                        }, r);
                        f.X && s.id && null === l && d.kg.log(`Event processor "${s.id}" dropped event`),
                        (0,
                        p.J8)(l) ? l.then(n => e(t, n, r, i + 1).then(o)).then(null, a) : e(t, l, r, i + 1).then(o).then(null, a)
                    }
                }
                )
            }
            )([...T, ...R.eventProcessors], k, n).then(e => (e && function(e) {
                let t = {};
                try {
                    e.exception.values.forEach(e => {
                        e.stacktrace.frames.forEach(e => {
                            e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id),
                            delete e.debug_id)
                        }
                        )
                    }
                    )
                } catch (e) {}
                if (0 === Object.keys(t).length)
                    return;
                e.debug_meta = e.debug_meta || {},
                e.debug_meta.images = e.debug_meta.images || [];
                let n = e.debug_meta.images;
                Object.entries(t).forEach( ([e,t]) => {
                    n.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: t
                    })
                }
                )
            }(e),
            "number" == typeof E && E > 0) ? function(e, t, n) {
                if (!e)
                    return null;
                let r = {
                    ...e,
                    ...e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map(e => ({
                            ...e,
                            ...e.data && {
                                data: (0,
                                s.Fv)(e.data, t, n)
                            }
                        }))
                    },
                    ...e.user && {
                        user: (0,
                        s.Fv)(e.user, t, n)
                    },
                    ...e.contexts && {
                        contexts: (0,
                        s.Fv)(e.contexts, t, n)
                    },
                    ...e.extra && {
                        extra: (0,
                        s.Fv)(e.extra, t, n)
                    }
                };
                return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
                e.contexts.trace.data && (r.contexts.trace.data = (0,
                s.Fv)(e.contexts.trace.data, t, n))),
                e.spans && (r.spans = e.spans.map(e => ({
                    ...e,
                    ...e.data && {
                        data: (0,
                        s.Fv)(e.data, t, n)
                    }
                }))),
                r
            }(e, E, x) : e)
        }
        let S = new WeakMap;
        function w(e) {
            return e ? e instanceof h.s || "function" == typeof e || Object.keys(e).some(e => E.includes(e)) ? {
                captureContext: e
            } : e : void 0
        }
        let E = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"]
    },
    89366: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return o
            },
            Y: function() {
                return a
            }
        });
        var r = n(27179);
        let i = "_sentrySpan";
        function o(e, t) {
            t ? (0,
            r.xp)(e, i, t) : delete e[i]
        }
        function a(e) {
            return e[i]
        }
    },
    81585: function(e, t, n) {
        "use strict";
        n.d(t, {
            $k: function() {
                return v
            },
            Dp: function() {
                return C
            },
            Gx: function() {
                return T
            },
            HN: function() {
                return R
            },
            HR: function() {
                return m
            },
            Hb: function() {
                return y
            },
            Tt: function() {
                return S
            },
            XU: function() {
                return _
            },
            _4: function() {
                return w
            },
            ed: function() {
                return O
            },
            i0: function() {
                return h
            },
            j5: function() {
                return k
            },
            ve: function() {
                return f
            },
            wy: function() {
                return g
            }
        });
        var r = n(27179)
          , i = n(85712)
          , o = n(26181)
          , a = n(60811)
          , s = n(13533)
          , l = n(73076)
          , u = n(72751)
          , c = n(31218)
          , d = n(69737)
          , p = n(89366);
        let f = 0
          , h = 1;
        function m(e) {
            let {spanId: t, traceId: n} = e.spanContext()
              , {data: i, op: o, parent_span_id: a, status: s, origin: l} = _(e);
            return (0,
            r.Jr)({
                parent_span_id: a,
                span_id: t,
                trace_id: n,
                data: i,
                op: o,
                status: s,
                origin: l
            })
        }
        function g(e) {
            let {spanId: t, traceId: n} = e.spanContext()
              , {parent_span_id: i} = _(e);
            return (0,
            r.Jr)({
                parent_span_id: i,
                span_id: t,
                trace_id: n
            })
        }
        function y(e) {
            let {traceId: t, spanId: n} = e.spanContext()
              , r = S(e);
            return (0,
            i.$p)(t, n, r)
        }
        function v(e) {
            return "number" == typeof e ? b(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? b(e.getTime()) : (0,
            o.ph)()
        }
        function b(e) {
            return e > 9999999999 ? e / 1e3 : e
        }
        function _(e) {
            if ("function" == typeof e.getSpanJSON)
                return e.getSpanJSON();
            try {
                let {spanId: t, traceId: n} = e.spanContext();
                if (e.attributes && e.startTime && e.name && e.endTime && e.status) {
                    let {attributes: i, startTime: o, name: a, endTime: s, parentSpanId: l, status: d} = e;
                    return (0,
                    r.Jr)({
                        span_id: t,
                        trace_id: n,
                        data: i,
                        description: a,
                        parent_span_id: l,
                        start_timestamp: v(o),
                        timestamp: v(s) || void 0,
                        status: w(d),
                        op: i[c.$J],
                        origin: i[c.S3],
                        _metrics_summary: (0,
                        u.y)(e)
                    })
                }
                return {
                    span_id: t,
                    trace_id: n
                }
            } catch (e) {
                return {}
            }
        }
        function S(e) {
            let {traceFlags: t} = e.spanContext();
            return t === h
        }
        function w(e) {
            return e && e.code !== d.pq ? e.code === d.OP ? "ok" : e.message || "unknown_error" : void 0
        }
        let E = "_sentryChildSpans"
          , x = "_sentryRootSpan";
        function k(e, t) {
            let n = e[x] || e;
            (0,
            r.xp)(t, x, n),
            e[E] ? e[E].add(t) : (0,
            r.xp)(e, E, new Set([t]))
        }
        function O(e, t) {
            e[E] && e[E].delete(t)
        }
        function C(e) {
            let t = new Set;
            return function e(n) {
                if (!t.has(n) && S(n))
                    for (let r of (t.add(n),
                    n[E] ? Array.from(n[E]) : []))
                        e(r)
            }(e),
            Array.from(t)
        }
        function T(e) {
            return e[x] || e
        }
        function R() {
            let e = (0,
            s.c)()
              , t = (0,
            a.G)(e);
            return t.getActiveSpan ? t.getActiveSpan() : (0,
            p.Y)((0,
            l.nZ)())
        }
    },
    36096: function(e, t, n) {
        "use strict";
        n.d(t, {
            X: function() {
                return r
            }
        });
        let r = !1
    },
    60859: function(e, t, n) {
        "use strict";
        n.d(t, {
            EN: function() {
                return u
            },
            IQ: function() {
                return c
            },
            bU: function() {
                return a
            }
        });
        var r = n(1525)
          , i = n(16824)
          , o = n(41001);
        let a = "baggage"
          , s = "sentry-"
          , l = /^sentry-/;
        function u(e) {
            let t = e && ((0,
            i.HD)(e) || Array.isArray(e)) ? Array.isArray(e) ? e.reduce( (e, t) => (Object.entries(d(t)).forEach( ([t,n]) => {
                e[t] = n
            }
            ),
            e), {}) : d(e) : void 0;
            if (!t)
                return;
            let n = Object.entries(t).reduce( (e, [t,n]) => (t.match(l) && (e[t.slice(s.length)] = n),
            e), {});
            return Object.keys(n).length > 0 ? n : void 0
        }
        function c(e) {
            if (e)
                return function(e) {
                    if (0 !== Object.keys(e).length)
                        return Object.entries(e).reduce( (e, [t,n], i) => {
                            let a = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`
                              , s = 0 === i ? a : `${e},${a}`;
                            return s.length > 8192 ? (r.X && o.kg.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`),
                            e) : s
                        }
                        , "")
                }(Object.entries(e).reduce( (e, [t,n]) => (n && (e[`${s}${t}`] = n),
                e), {}))
        }
        function d(e) {
            return e.split(",").map(e => e.split("=").map(e => decodeURIComponent(e.trim()))).reduce( (e, [t,n]) => (t && n && (e[t] = n),
            e), {})
        }
    },
    1869: function(e, t, n) {
        "use strict";
        n.d(t, {
            Rt: function() {
                return o
            },
            iY: function() {
                return l
            },
            l4: function() {
                return a
            },
            qT: function() {
                return s
            }
        });
        var r = n(16824);
        let i = n(29531).GLOBAL_OBJ;
        function o(e, t={}) {
            if (!e)
                return "<unknown>";
            try {
                let n, o = e, a = [], s = 0, l = 0, u = Array.isArray(t) ? t : t.keyAttrs, c = !Array.isArray(t) && t.maxStringLength || 80;
                for (; o && s++ < 5 && (n = function(e, t) {
                    let n = [];
                    if (!e || !e.tagName)
                        return "";
                    if (i.HTMLElement && e instanceof HTMLElement && e.dataset) {
                        if (e.dataset.sentryComponent)
                            return e.dataset.sentryComponent;
                        if (e.dataset.sentryElement)
                            return e.dataset.sentryElement
                    }
                    n.push(e.tagName.toLowerCase());
                    let o = t && t.length ? t.filter(t => e.getAttribute(t)).map(t => [t, e.getAttribute(t)]) : null;
                    if (o && o.length)
                        o.forEach(e => {
                            n.push(`[${e[0]}="${e[1]}"]`)
                        }
                        );
                    else {
                        e.id && n.push(`#${e.id}`);
                        let t = e.className;
                        if (t && (0,
                        r.HD)(t))
                            for (let e of t.split(/\s+/))
                                n.push(`.${e}`)
                    }
                    for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                        let r = e.getAttribute(t);
                        r && n.push(`[${t}="${r}"]`)
                    }
                    return n.join("")
                }(o, u),
                "html" !== n && (!(s > 1) || !(l + 3 * a.length + n.length >= c))); )
                    a.push(n),
                    l += n.length,
                    o = o.parentNode;
                return a.reverse().join(" > ")
            } catch (e) {
                return "<unknown>"
            }
        }
        function a() {
            try {
                return i.document.location.href
            } catch (e) {
                return ""
            }
        }
        function s(e) {
            return i.document && i.document.querySelector ? i.document.querySelector(e) : null
        }
        function l(e) {
            if (!i.HTMLElement)
                return null;
            let t = e;
            for (let e = 0; e < 5 && t; e++) {
                if (t instanceof HTMLElement) {
                    if (t.dataset.sentryComponent)
                        return t.dataset.sentryComponent;
                    if (t.dataset.sentryElement)
                        return t.dataset.sentryElement
                }
                t = t.parentNode
            }
            return null
        }
    },
    28643: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return null != e ? e : t()
        }
        n.d(t, {
            h: function() {
                return r
            }
        })
    },
    57608: function(e, t, n) {
        "use strict";
        function r(e) {
            let t;
            let n = e[0]
              , r = 1;
            for (; r < e.length; ) {
                let i = e[r]
                  , o = e[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (t = n,
                n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o( (...e) => n.call(t, ...e)),
                t = void 0)
            }
            return n
        }
        n.d(t, {
            x: function() {
                return r
            }
        })
    },
    1525: function(e, t, n) {
        "use strict";
        n.d(t, {
            X: function() {
                return r
            }
        });
        let r = !1
    },
    73326: function(e, t, n) {
        "use strict";
        n.d(t, {
            RA: function() {
                return a
            },
            U4: function() {
                return s
            },
            vK: function() {
                return u
            }
        });
        var r = n(1525)
          , i = n(41001);
        let o = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function a(e, t=!1) {
            let {host: n, path: r, pass: i, port: o, projectId: a, protocol: s, publicKey: l} = e;
            return `${s}://${l}${t && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${a}`
        }
        function s(e) {
            let t = o.exec(e);
            if (!t) {
                (0,
                i.Cf)( () => {
                    console.error(`Invalid Sentry Dsn: ${e}`)
                }
                );
                return
            }
            let[n,r,a="",s="",u="",c=""] = t.slice(1)
              , d = ""
              , p = c
              , f = p.split("/");
            if (f.length > 1 && (d = f.slice(0, -1).join("/"),
            p = f.pop()),
            p) {
                let e = p.match(/^\d+/);
                e && (p = e[0])
            }
            return l({
                host: s,
                pass: a,
                path: d,
                projectId: p,
                port: u,
                protocol: n,
                publicKey: r
            })
        }
        function l(e) {
            return {
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            }
        }
        function u(e) {
            let t = "string" == typeof e ? s(e) : l(e);
            if (t && function(e) {
                if (!r.X)
                    return !0;
                let {port: t, projectId: n, protocol: o} = e;
                return !["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (i.kg.error(`Invalid Sentry Dsn: ${t} missing`),
                !0)) && (n.match(/^\d+$/) ? "http" === o || "https" === o ? !(t && isNaN(parseInt(t, 10))) || (i.kg.error(`Invalid Sentry Dsn: Invalid port ${t}`),
                !1) : (i.kg.error(`Invalid Sentry Dsn: Invalid protocol ${o}`),
                !1) : (i.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                !1))
            }(t))
                return t
        }
    },
    39432: function(e, t, n) {
        "use strict";
        n.d(t, {
            BO: function() {
                return l
            },
            Cd: function() {
                return y
            },
            HY: function() {
                return g
            },
            Jd: function() {
                return s
            },
            KQ: function() {
                return p
            },
            V$: function() {
                return d
            },
            gv: function() {
                return u
            },
            mL: function() {
                return m
            },
            zQ: function() {
                return f
            }
        });
        var r = n(73326)
          , i = n(83408)
          , o = n(27179)
          , a = n(29531);
        function s(e, t=[]) {
            return [e, t]
        }
        function l(e, t) {
            let[n,r] = e;
            return [n, [...r, t]]
        }
        function u(e, t) {
            for (let n of e[1]) {
                let e = n[0].type;
                if (t(n, e))
                    return !0
            }
            return !1
        }
        function c(e) {
            return a.GLOBAL_OBJ.__SENTRY__ && a.GLOBAL_OBJ.__SENTRY__.encodePolyfill ? a.GLOBAL_OBJ.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e)
        }
        function d(e) {
            let[t,n] = e
              , r = JSON.stringify(t);
            function o(e) {
                "string" == typeof r ? r = "string" == typeof e ? r + e : [c(r), e] : r.push("string" == typeof e ? c(e) : e)
            }
            for (let e of n) {
                let[t,n] = e;
                if (o(`
${JSON.stringify(t)}
`),
                "string" == typeof n || n instanceof Uint8Array)
                    o(n);
                else {
                    let e;
                    try {
                        e = JSON.stringify(n)
                    } catch (t) {
                        e = JSON.stringify((0,
                        i.Fv)(n))
                    }
                    o(e)
                }
            }
            return "string" == typeof r ? r : function(e) {
                let t = new Uint8Array(e.reduce( (e, t) => e + t.length, 0))
                  , n = 0;
                for (let r of e)
                    t.set(r, n),
                    n += r.length;
                return t
            }(r)
        }
        function p(e) {
            return [{
                type: "span"
            }, e]
        }
        function f(e) {
            let t = "string" == typeof e.data ? c(e.data) : e.data;
            return [(0,
            o.Jr)({
                type: "attachment",
                length: t.length,
                filename: e.filename,
                content_type: e.contentType,
                attachment_type: e.attachmentType
            }), t]
        }
        let h = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            profile_chunk: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor",
            feedback: "feedback",
            span: "span",
            statsd: "metric_bucket"
        };
        function m(e) {
            return h[e]
        }
        function g(e) {
            if (!e || !e.sdk)
                return;
            let {name: t, version: n} = e.sdk;
            return {
                name: t,
                version: n
            }
        }
        function y(e, t, n, i) {
            let a = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
            return {
                event_id: e.event_id,
                sent_at: new Date().toISOString(),
                ...t && {
                    sdk: t
                },
                ...!!n && i && {
                    dsn: (0,
                    r.RA)(i)
                },
                ...a && {
                    trace: (0,
                    o.Jr)({
                        ...a
                    })
                }
            }
        }
    },
    16824: function(e, t, n) {
        "use strict";
        n.d(t, {
            Cy: function() {
                return y
            },
            HD: function() {
                return u
            },
            J8: function() {
                return g
            },
            Kj: function() {
                return m
            },
            Le: function() {
                return c
            },
            PO: function() {
                return p
            },
            TX: function() {
                return s
            },
            V9: function() {
                return v
            },
            VW: function() {
                return a
            },
            VZ: function() {
                return i
            },
            cO: function() {
                return f
            },
            fm: function() {
                return l
            },
            kK: function() {
                return h
            },
            pt: function() {
                return d
            },
            y1: function() {
                return b
            }
        });
        let r = Object.prototype.toString;
        function i(e) {
            switch (r.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return v(e, Error)
            }
        }
        function o(e, t) {
            return r.call(e) === `[object ${t}]`
        }
        function a(e) {
            return o(e, "ErrorEvent")
        }
        function s(e) {
            return o(e, "DOMError")
        }
        function l(e) {
            return o(e, "DOMException")
        }
        function u(e) {
            return o(e, "String")
        }
        function c(e) {
            return "object" == typeof e && null !== e && "__sentry_template_string__"in e && "__sentry_template_values__"in e
        }
        function d(e) {
            return null === e || c(e) || "object" != typeof e && "function" != typeof e
        }
        function p(e) {
            return o(e, "Object")
        }
        function f(e) {
            return "undefined" != typeof Event && v(e, Event)
        }
        function h(e) {
            return "undefined" != typeof Element && v(e, Element)
        }
        function m(e) {
            return o(e, "RegExp")
        }
        function g(e) {
            return !!(e && e.then && "function" == typeof e.then)
        }
        function y(e) {
            return p(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
        }
        function v(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return !1
            }
        }
        function b(e) {
            return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue))
        }
    },
    41001: function(e, t, n) {
        "use strict";
        n.d(t, {
            Cf: function() {
                return s
            },
            LD: function() {
                return a
            },
            RU: function() {
                return o
            },
            kg: function() {
                return l
            }
        });
        var r = n(1525)
          , i = n(29531);
        let o = ["debug", "info", "warn", "error", "log", "assert", "trace"]
          , a = {};
        function s(e) {
            if (!("console"in i.GLOBAL_OBJ))
                return e();
            let t = i.GLOBAL_OBJ.console
              , n = {}
              , r = Object.keys(a);
            r.forEach(e => {
                let r = a[e];
                n[e] = t[e],
                t[e] = r
            }
            );
            try {
                return e()
            } finally {
                r.forEach(e => {
                    t[e] = n[e]
                }
                )
            }
        }
        let l = function() {
            let e = !1
              , t = {
                enable: () => {
                    e = !0
                }
                ,
                disable: () => {
                    e = !1
                }
                ,
                isEnabled: () => e
            };
            return r.X ? o.forEach(n => {
                t[n] = (...t) => {
                    e && s( () => {
                        i.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...t)
                    }
                    )
                }
            }
            ) : o.forEach(e => {
                t[e] = () => void 0
            }
            ),
            t
        }()
    },
    41982: function(e, t, n) {
        "use strict";
        n.d(t, {
            DM: function() {
                return o
            },
            Db: function() {
                return l
            },
            EG: function() {
                return u
            },
            YO: function() {
                return c
            },
            jH: function() {
                return s
            },
            lE: function() {
                return d
            }
        });
        var r = n(27179)
          , i = n(29531);
        function o() {
            let e = i.GLOBAL_OBJ
              , t = e.crypto || e.msCrypto
              , n = () => 16 * Math.random();
            try {
                if (t && t.randomUUID)
                    return t.randomUUID().replace(/-/g, "");
                t && t.getRandomValues && (n = () => {
                    let e = new Uint8Array(1);
                    return t.getRandomValues(e),
                    e[0]
                }
                )
            } catch (e) {}
            return "10000000100040008000100000000000".replace(/[018]/g, e => (e ^ (15 & n()) >> e / 4).toString(16))
        }
        function a(e) {
            return e.exception && e.exception.values ? e.exception.values[0] : void 0
        }
        function s(e) {
            let {message: t, event_id: n} = e;
            if (t)
                return t;
            let r = a(e);
            return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }
        function l(e, t, n) {
            let r = e.exception = e.exception || {}
              , i = r.values = r.values || []
              , o = i[0] = i[0] || {};
            o.value || (o.value = t || ""),
            o.type || (o.type = n || "Error")
        }
        function u(e, t) {
            let n = a(e);
            if (!n)
                return;
            let r = n.mechanism;
            if (n.mechanism = {
                type: "generic",
                handled: !0,
                ...r,
                ...t
            },
            t && "data"in t) {
                let e = {
                    ...r && r.data,
                    ...t.data
                };
                n.mechanism.data = e
            }
        }
        function c(e) {
            if (e && e.__sentry_captured__)
                return !0;
            try {
                (0,
                r.xp)(e, "__sentry_captured__", !0)
            } catch (e) {}
            return !1
        }
        function d(e) {
            return Array.isArray(e) ? e : [e]
        }
    },
    83408: function(e, t, n) {
        "use strict";
        n.d(t, {
            Fv: function() {
                return a
            },
            Qy: function() {
                return function e(t, n=3, r=102400) {
                    let i = a(t, n);
                    return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i
                }
            }
        });
        var r = n(16824)
          , i = n(27179)
          , o = n(42283);
        function a(e, t=100, n=Infinity) {
            try {
                return function e(t, n, a=Infinity, s=Infinity, l=function() {
                    let e = "function" == typeof WeakSet
                      , t = e ? new WeakSet : [];
                    return [function(n) {
                        if (e)
                            return !!t.has(n) || (t.add(n),
                            !1);
                        for (let e = 0; e < t.length; e++)
                            if (t[e] === n)
                                return !0;
                        return t.push(n),
                        !1
                    }
                    , function(n) {
                        if (e)
                            t.delete(n);
                        else
                            for (let e = 0; e < t.length; e++)
                                if (t[e] === n) {
                                    t.splice(e, 1);
                                    break
                                }
                    }
                    ]
                }()) {
                    let[u,c] = l;
                    if (null == n || ["number", "boolean", "string"].includes(typeof n) && !Number.isNaN(n))
                        return n;
                    let d = function(e, t) {
                        try {
                            if ("domain" === e && t && "object" == typeof t && t._events)
                                return "[Domain]";
                            if ("domainEmitter" === e)
                                return "[DomainEmitter]";
                            if ("undefined" != typeof global && t === global)
                                return "[Global]";
                            if ("undefined" != typeof window && t === window)
                                return "[Window]";
                            if ("undefined" != typeof document && t === document)
                                return "[Document]";
                            if ((0,
                            r.y1)(t))
                                return "[VueViewModel]";
                            if ((0,
                            r.Cy)(t))
                                return "[SyntheticEvent]";
                            if ("number" == typeof t && t != t)
                                return "[NaN]";
                            if ("function" == typeof t)
                                return `[Function: ${(0,
                                o.$P)(t)}]`;
                            if ("symbol" == typeof t)
                                return `[${String(t)}]`;
                            if ("bigint" == typeof t)
                                return `[BigInt: ${String(t)}]`;
                            let n = function(e) {
                                let t = Object.getPrototypeOf(e);
                                return t ? t.constructor.name : "null prototype"
                            }(t);
                            if (/^HTML(\w*)Element$/.test(n))
                                return `[HTMLElement: ${n}]`;
                            return `[object ${n}]`
                        } catch (e) {
                            return `**non-serializable** (${e})`
                        }
                    }(t, n);
                    if (!d.startsWith("[object "))
                        return d;
                    if (n.__sentry_skip_normalization__)
                        return n;
                    let p = "number" == typeof n.__sentry_override_normalization_depth__ ? n.__sentry_override_normalization_depth__ : a;
                    if (0 === p)
                        return d.replace("object ", "");
                    if (u(n))
                        return "[Circular ~]";
                    if (n && "function" == typeof n.toJSON)
                        try {
                            let t = n.toJSON();
                            return e("", t, p - 1, s, l)
                        } catch (e) {}
                    let f = Array.isArray(n) ? [] : {}
                      , h = 0
                      , m = (0,
                    i.Sh)(n);
                    for (let t in m) {
                        if (!Object.prototype.hasOwnProperty.call(m, t))
                            continue;
                        if (h >= s) {
                            f[t] = "[MaxProperties ~]";
                            break
                        }
                        let n = m[t];
                        f[t] = e(t, n, p - 1, s, l),
                        h++
                    }
                    return c(n),
                    f
                }("", e, t, n)
            } catch (e) {
                return {
                    ERROR: `**non-serializable** (${e})`
                }
            }
        }
    },
    27179: function(e, t, n) {
        "use strict";
        n.d(t, {
            $Q: function() {
                return c
            },
            HK: function() {
                return d
            },
            Jr: function() {
                return y
            },
            Sh: function() {
                return f
            },
            _j: function() {
                return p
            },
            hl: function() {
                return l
            },
            xp: function() {
                return u
            },
            zf: function() {
                return g
            }
        });
        var r = n(1869)
          , i = n(1525)
          , o = n(16824)
          , a = n(41001)
          , s = n(89163);
        function l(e, t, n) {
            if (!(t in e))
                return;
            let r = e[t]
              , i = n(r);
            "function" == typeof i && c(i, r),
            e[t] = i
        }
        function u(e, t, n) {
            try {
                Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            } catch (n) {
                i.X && a.kg.log(`Failed to add non-enumerable property "${t}" to object`, e)
            }
        }
        function c(e, t) {
            try {
                let n = t.prototype || {};
                e.prototype = t.prototype = n,
                u(e, "__sentry_original__", t)
            } catch (e) {}
        }
        function d(e) {
            return e.__sentry_original__
        }
        function p(e) {
            return Object.keys(e).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")
        }
        function f(e) {
            if ((0,
            o.VZ)(e))
                return {
                    message: e.message,
                    name: e.name,
                    stack: e.stack,
                    ...m(e)
                };
            if (!(0,
            o.cO)(e))
                return e;
            {
                let t = {
                    type: e.type,
                    target: h(e.target),
                    currentTarget: h(e.currentTarget),
                    ...m(e)
                };
                return "undefined" != typeof CustomEvent && (0,
                o.V9)(e, CustomEvent) && (t.detail = e.detail),
                t
            }
        }
        function h(e) {
            try {
                return (0,
                o.kK)(e) ? (0,
                r.Rt)(e) : Object.prototype.toString.call(e)
            } catch (e) {
                return "<unknown>"
            }
        }
        function m(e) {
            if ("object" != typeof e || null === e)
                return {};
            {
                let t = {};
                for (let n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }
        }
        function g(e, t=40) {
            let n = Object.keys(f(e));
            n.sort();
            let r = n[0];
            if (!r)
                return "[object has no keys]";
            if (r.length >= t)
                return (0,
                s.$G)(r, t);
            for (let e = n.length; e > 0; e--) {
                let r = n.slice(0, e).join(", ");
                if (!(r.length > t)) {
                    if (e === n.length)
                        return r;
                    return (0,
                    s.$G)(r, t)
                }
            }
            return ""
        }
        function y(e) {
            return function e(t, n) {
                if (function(e) {
                    if (!(0,
                    o.PO)(e))
                        return !1;
                    try {
                        let t = Object.getPrototypeOf(e).constructor.name;
                        return !t || "Object" === t
                    } catch (e) {
                        return !0
                    }
                }(t)) {
                    let r = n.get(t);
                    if (void 0 !== r)
                        return r;
                    let i = {};
                    for (let r of (n.set(t, i),
                    Object.keys(t)))
                        void 0 !== t[r] && (i[r] = e(t[r], n));
                    return i
                }
                if (Array.isArray(t)) {
                    let r = n.get(t);
                    if (void 0 !== r)
                        return r;
                    let i = [];
                    return n.set(t, i),
                    t.forEach(t => {
                        i.push(e(t, n))
                    }
                    ),
                    i
                }
                return t
            }(e, new Map)
        }
    },
    19548: function(e, t, n) {
        "use strict";
        n.d(t, {
            Q: function() {
                return i
            }
        });
        var r = n(41982);
        function i() {
            return {
                traceId: (0,
                r.DM)(),
                spanId: (0,
                r.DM)().substring(16)
            }
        }
    },
    42283: function(e, t, n) {
        "use strict";
        n.d(t, {
            $P: function() {
                return c
            },
            Fi: function() {
                return r
            },
            Fr: function() {
                return d
            },
            Sq: function() {
                return s
            },
            pE: function() {
                return a
            }
        });
        let r = "?"
          , i = /\(error: (.*)\)/
          , o = /captureMessage|captureException/;
        function a(...e) {
            let t = e.sort( (e, t) => e[0] - t[0]).map(e => e[1]);
            return (e, n=0, a=0) => {
                let s = []
                  , u = e.split("\n");
                for (let e = n; e < u.length; e++) {
                    let n = u[e];
                    if (n.length > 1024)
                        continue;
                    let r = i.test(n) ? n.replace(i, "$1") : n;
                    if (!r.match(/\S*Error: /)) {
                        for (let e of t) {
                            let t = e(r);
                            if (t) {
                                s.push(t);
                                break
                            }
                        }
                        if (s.length >= 50 + a)
                            break
                    }
                }
                return function(e) {
                    if (!e.length)
                        return [];
                    let t = Array.from(e);
                    return /sentryWrapped/.test(l(t).function || "") && t.pop(),
                    t.reverse(),
                    o.test(l(t).function || "") && (t.pop(),
                    o.test(l(t).function || "") && t.pop()),
                    t.slice(0, 50).map(e => ({
                        ...e,
                        filename: e.filename || l(t).filename,
                        function: e.function || r
                    }))
                }(s.slice(a))
            }
        }
        function s(e) {
            return Array.isArray(e) ? a(...e) : e
        }
        function l(e) {
            return e[e.length - 1] || {}
        }
        let u = "<anonymous>";
        function c(e) {
            try {
                if (!e || "function" != typeof e)
                    return u;
                return e.name || u
            } catch (e) {
                return u
            }
        }
        function d(e) {
            let t = e.exception;
            if (t) {
                let e = [];
                try {
                    return t.values.forEach(t => {
                        t.stacktrace.frames && e.push(...t.stacktrace.frames)
                    }
                    ),
                    e
                } catch (e) {}
            }
        }
    },
    89163: function(e, t, n) {
        "use strict";
        n.d(t, {
            $G: function() {
                return i
            },
            U0: function() {
                return a
            },
            nK: function() {
                return o
            }
        });
        var r = n(16824);
        function i(e, t=0) {
            return "string" != typeof e || 0 === t ? e : e.length <= t ? e : `${e.slice(0, t)}...`
        }
        function o(e, t) {
            if (!Array.isArray(e))
                return "";
            let n = [];
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                try {
                    (0,
                    r.y1)(i) ? n.push("[VueViewModel]") : n.push(String(i))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }
        function a(e, t=[], n=!1) {
            return t.some(t => (function(e, t, n=!1) {
                return !!(0,
                r.HD)(e) && ((0,
                r.Kj)(t) ? t.test(e) : !!(0,
                r.HD)(t) && (n ? e === t : e.includes(t)))
            }
            )(e, t, n))
        }
    },
    80128: function(e, t, n) {
        "use strict";
        n.d(t, {
            $2: function() {
                return s
            },
            WD: function() {
                return a
            },
            cW: function() {
                return l
            }
        });
        var r, i, o = n(16824);
        function a(e) {
            return new l(t => {
                t(e)
            }
            )
        }
        function s(e) {
            return new l( (t, n) => {
                n(e)
            }
            )
        }
        (r = i || (i = {}))[r.PENDING = 0] = "PENDING",
        r[r.RESOLVED = 1] = "RESOLVED",
        r[r.REJECTED = 2] = "REJECTED";
        class l {
            constructor(e) {
                l.prototype.__init.call(this),
                l.prototype.__init2.call(this),
                l.prototype.__init3.call(this),
                l.prototype.__init4.call(this),
                this._state = i.PENDING,
                this._handlers = [];
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            then(e, t) {
                return new l( (n, r) => {
                    this._handlers.push([!1, t => {
                        if (e)
                            try {
                                n(e(t))
                            } catch (e) {
                                r(e)
                            }
                        else
                            n(t)
                    }
                    , e => {
                        if (t)
                            try {
                                n(t(e))
                            } catch (e) {
                                r(e)
                            }
                        else
                            r(e)
                    }
                    ]),
                    this._executeHandlers()
                }
                )
            }
            catch(e) {
                return this.then(e => e, e)
            }
            finally(e) {
                return new l( (t, n) => {
                    let r, i;
                    return this.then(t => {
                        i = !1,
                        r = t,
                        e && e()
                    }
                    , t => {
                        i = !0,
                        r = t,
                        e && e()
                    }
                    ).then( () => {
                        if (i) {
                            n(r);
                            return
                        }
                        t(r)
                    }
                    )
                }
                )
            }
            __init() {
                this._resolve = e => {
                    this._setResult(i.RESOLVED, e)
                }
            }
            __init2() {
                this._reject = e => {
                    this._setResult(i.REJECTED, e)
                }
            }
            __init3() {
                this._setResult = (e, t) => {
                    if (this._state === i.PENDING) {
                        if ((0,
                        o.J8)(t)) {
                            t.then(this._resolve, this._reject);
                            return
                        }
                        this._state = e,
                        this._value = t,
                        this._executeHandlers()
                    }
                }
            }
            __init4() {
                this._executeHandlers = () => {
                    if (this._state === i.PENDING)
                        return;
                    let e = this._handlers.slice();
                    this._handlers = [],
                    e.forEach(e => {
                        e[0] || (this._state === i.RESOLVED && e[1](this._value),
                        this._state === i.REJECTED && e[2](this._value),
                        e[0] = !0)
                    }
                    )
                }
            }
        }
    },
    26181: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z1: function() {
                return a
            },
            ph: function() {
                return o
            },
            yW: function() {
                return i
            }
        });
        var r = n(29531);
        function i() {
            return Date.now() / 1e3
        }
        let o = function() {
            let {performance: e} = r.GLOBAL_OBJ;
            if (!e || !e.now)
                return i;
            let t = Date.now() - e.now()
              , n = void 0 == e.timeOrigin ? t : e.timeOrigin;
            return () => (n + e.now()) / 1e3
        }()
          , a = ( () => {
            let {performance: e} = r.GLOBAL_OBJ;
            if (!e || !e.now)
                return;
            let t = e.now()
              , n = Date.now()
              , i = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5
              , o = e.timing && e.timing.navigationStart
              , a = "number" == typeof o ? Math.abs(o + t - n) : 36e5;
            return i < 36e5 || a < 36e5 ? i <= a ? e.timeOrigin : o : n
        }
        )()
    },
    85712: function(e, t, n) {
        "use strict";
        n.d(t, {
            $p: function() {
                return s
            },
            pT: function() {
                return a
            }
        });
        var r = n(60859)
          , i = n(41982);
        let o = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
        function a(e, t) {
            let n = function(e) {
                let t;
                if (!e)
                    return;
                let n = e.match(o);
                if (n)
                    return "1" === n[3] ? t = !0 : "0" === n[3] && (t = !1),
                    {
                        traceId: n[1],
                        parentSampled: t,
                        parentSpanId: n[2]
                    }
            }(e)
              , a = (0,
            r.EN)(t)
              , {traceId: s, parentSpanId: l, parentSampled: u} = n || {};
            return n ? {
                traceId: s || (0,
                i.DM)(),
                parentSpanId: l || (0,
                i.DM)().substring(16),
                spanId: (0,
                i.DM)().substring(16),
                sampled: u,
                dsc: a || {}
            } : {
                traceId: s || (0,
                i.DM)(),
                spanId: (0,
                i.DM)().substring(16)
            }
        }
        function s(e=(0,
        i.DM)(), t=(0,
        i.DM)().substring(16), n) {
            let r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"),
            `${e}-${t}${r}`
        }
    },
    42990: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return r
            }
        });
        let r = "8.19.0"
    },
    29531: function(e, t, n) {
        "use strict";
        n.d(t, {
            GLOBAL_OBJ: function() {
                return i
            },
            Y: function() {
                return o
            }
        });
        var r = n(42990);
        let i = globalThis;
        function o(e, t, n) {
            let o = n || i
              , a = o.__SENTRY__ = o.__SENTRY__ || {}
              , s = a[r.J] = a[r.J] || {};
            return s[e] || (s[e] = t())
        }
    },
    89984: function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    !function(e, t, n) {
                        var i;
                        i = function(e, t) {
                            if ("object" !== r(e) || null === e)
                                return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var i = n.call(e, t || "default");
                                if ("object" !== r(i))
                                    return i;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(t, "string"),
                        (t = "symbol" === r(i) ? i : String(i))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    89172: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (null == e)
                return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [9774, 179], function() {
        return t(20351),
        t(91118),
        t(43079)
    }),
    _N_E = e.O()
}
]);
