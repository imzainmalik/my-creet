/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function (e) {
            return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
            );
        },
        x = function (e) {
            return null != e && e === e.window;
        },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement("script");
        if (((o.text = e), t))
            for (r in c)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? n[o.call(e)] || "object"
            : typeof e;
    }
    var f = "3.6.0",
        S = function (e, t) {
            return new S.fn.init(e, t);
        };
    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return (
            !m(e) &&
            !x(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
        );
    }
    (S.fn = S.prototype =
        {
            jquery: f,
            constructor: S,
            length: 0,
            toArray: function () {
                return s.call(this);
            },
            get: function (e) {
                return null == e
                    ? s.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
            },
            pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
            },
            each: function (e) {
                return S.each(this, e);
            },
            map: function (n) {
                return this.pushStack(
                    S.map(this, function (e, t) {
                        return n.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            even: function () {
                return this.pushStack(
                    S.grep(this, function (e, t) {
                        return (t + 1) % 2;
                    })
                );
            },
            odd: function () {
                return this.pushStack(
                    S.grep(this, function (e, t) {
                        return t % 2;
                    })
                );
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: u,
            sort: t.sort,
            splice: t.splice,
        }),
        (S.extend = S.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for (
                    "boolean" == typeof a &&
                        ((l = a), (a = arguments[s] || {}), s++),
                        "object" == typeof a || m(a) || (a = {}),
                        s === u && ((a = this), s--);
                    s < u;
                    s++
                )
                    if (null != (e = arguments[s]))
                        for (t in e)
                            (r = e[t]),
                                "__proto__" !== t &&
                                    a !== r &&
                                    (l &&
                                    r &&
                                    (S.isPlainObject(r) ||
                                        (i = Array.isArray(r)))
                                        ? ((n = a[t]),
                                          (o =
                                              i && !Array.isArray(n)
                                                  ? []
                                                  : i || S.isPlainObject(n)
                                                  ? n
                                                  : {}),
                                          (i = !1),
                                          (a[t] = S.extend(l, o, r)))
                                        : void 0 !== r && (a[t] = r));
                return a;
            }),
        S.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return (
                    !(!e || "[object Object]" !== o.call(e)) &&
                    (!(t = r(e)) ||
                        ("function" ==
                            typeof (n =
                                v.call(t, "constructor") && t.constructor) &&
                            a.call(n) === l))
                );
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                        (p(Object(e))
                            ? S.merge(n, "string" == typeof e ? [e] : e)
                            : u.call(n, e)),
                    n
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (p(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a);
            },
            guid: 1,
            support: y,
        }),
        "function" == typeof Symbol &&
            (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                n["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var d = (function (n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            v,
            s,
            c,
            y,
            S = "sizzle" + 1 * new Date(),
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function (e, t) {
                return e === t && (l = !0), 0;
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                M +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W =
                "\\[" +
                M +
                "*(" +
                I +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                I +
                "))|)" +
                M +
                "*\\]",
            F =
                ":(" +
                I +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                W +
                ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp(
                "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
                "g"
            ),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        M +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        M +
                        "*(?:([+-]|)" +
                        M +
                        "*(\\d+)|))" +
                        M +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        M +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        M +
                        "*((?:-\\d)?\\d*)" +
                        M +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])",
                "g"
            ),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                    t ||
                    (n < 0
                        ? String.fromCharCode(n + 65536)
                        : String.fromCharCode(
                              (n >> 10) | 55296,
                              (1023 & n) | 56320
                          ))
                );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t
                    ? "\0" === e
                        ? "\ufffd"
                        : e.slice(0, -1) +
                          "\\" +
                          e.charCodeAt(e.length - 1).toString(16) +
                          " "
                    : "\\" + e;
            },
            oe = function () {
                T();
            },
            ae = be(
                function (e) {
                    return (
                        !0 === e.disabled &&
                        "fieldset" === e.nodeName.toLowerCase()
                    );
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            H.apply((t = O.call(p.childNodes)), p.childNodes),
                t[p.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length
                    ? function (e, t) {
                          L.apply(e, O.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (
                ((n = n || []),
                "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
            )
                return n;
            if (!r && (T(e), (e = e || C), E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (
                            f &&
                            (a = f.getElementById(i)) &&
                            y(e, a) &&
                            a.id === i
                        )
                            return n.push(a), n;
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)), n;
                        if (
                            (i = u[3]) &&
                            d.getElementsByClassName &&
                            e.getElementsByClassName
                        )
                            return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (
                    d.qsa &&
                    !N[t + " "] &&
                    (!v || !v.test(t)) &&
                    (1 !== p || "object" !== e.nodeName.toLowerCase())
                ) {
                    if (
                        ((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))
                    ) {
                        ((f = (ee.test(t) && ye(e.parentNode)) || e) === e &&
                            d.scope) ||
                            ((s = e.getAttribute("id"))
                                ? (s = s.replace(re, ie))
                                : e.setAttribute("id", (s = S))),
                            (o = (l = h(t)).length);
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",");
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        s === S && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return (
                    r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                    (e[t + " "] = n)
                );
            };
        }
        function le(e) {
            return (e[S] = !0), e;
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e,
                r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t ||
                              (e.isDisabled !== !t && ae(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le(function (o) {
                return (
                    (o = +o),
                    le(function (e, t) {
                        var n,
                            r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for (e in ((d = se.support = {}),
        (i = se.isXML =
            function (e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
            }),
        (T = se.setDocument =
            function (e) {
                var t,
                    n,
                    r = e ? e.ownerDocument || e : p;
                return (
                    r != C &&
                        9 === r.nodeType &&
                        r.documentElement &&
                        ((a = (C = r).documentElement),
                        (E = !i(C)),
                        p != C &&
                            (n = C.defaultView) &&
                            n.top !== n &&
                            (n.addEventListener
                                ? n.addEventListener("unload", oe, !1)
                                : n.attachEvent &&
                                  n.attachEvent("onunload", oe)),
                        (d.scope = ce(function (e) {
                            return (
                                a
                                    .appendChild(e)
                                    .appendChild(C.createElement("div")),
                                "undefined" != typeof e.querySelectorAll &&
                                    !e.querySelectorAll(":scope fieldset div")
                                        .length
                            );
                        })),
                        (d.attributes = ce(function (e) {
                            return (
                                (e.className = "i"),
                                !e.getAttribute("className")
                            );
                        })),
                        (d.getElementsByTagName = ce(function (e) {
                            return (
                                e.appendChild(C.createComment("")),
                                !e.getElementsByTagName("*").length
                            );
                        })),
                        (d.getElementsByClassName = K.test(
                            C.getElementsByClassName
                        )),
                        (d.getById = ce(function (e) {
                            return (
                                (a.appendChild(e).id = S),
                                !C.getElementsByName ||
                                    !C.getElementsByName(S).length
                            );
                        })),
                        d.getById
                            ? ((b.filter.ID = function (e) {
                                  var t = e.replace(te, ne);
                                  return function (e) {
                                      return e.getAttribute("id") === t;
                                  };
                              }),
                              (b.find.ID = function (e, t) {
                                  if (
                                      "undefined" != typeof t.getElementById &&
                                      E
                                  ) {
                                      var n = t.getElementById(e);
                                      return n ? [n] : [];
                                  }
                              }))
                            : ((b.filter.ID = function (e) {
                                  var n = e.replace(te, ne);
                                  return function (e) {
                                      var t =
                                          "undefined" !=
                                              typeof e.getAttributeNode &&
                                          e.getAttributeNode("id");
                                      return t && t.value === n;
                                  };
                              }),
                              (b.find.ID = function (e, t) {
                                  if (
                                      "undefined" != typeof t.getElementById &&
                                      E
                                  ) {
                                      var n,
                                          r,
                                          i,
                                          o = t.getElementById(e);
                                      if (o) {
                                          if (
                                              (n = o.getAttributeNode("id")) &&
                                              n.value === e
                                          )
                                              return [o];
                                          (i = t.getElementsByName(e)), (r = 0);
                                          while ((o = i[r++]))
                                              if (
                                                  (n =
                                                      o.getAttributeNode(
                                                          "id"
                                                      )) &&
                                                  n.value === e
                                              )
                                                  return [o];
                                      }
                                      return [];
                                  }
                              })),
                        (b.find.TAG = d.getElementsByTagName
                            ? function (e, t) {
                                  return "undefined" !=
                                      typeof t.getElementsByTagName
                                      ? t.getElementsByTagName(e)
                                      : d.qsa
                                      ? t.querySelectorAll(e)
                                      : void 0;
                              }
                            : function (e, t) {
                                  var n,
                                      r = [],
                                      i = 0,
                                      o = t.getElementsByTagName(e);
                                  if ("*" === e) {
                                      while ((n = o[i++]))
                                          1 === n.nodeType && r.push(n);
                                      return r;
                                  }
                                  return o;
                              }),
                        (b.find.CLASS =
                            d.getElementsByClassName &&
                            function (e, t) {
                                if (
                                    "undefined" !=
                                        typeof t.getElementsByClassName &&
                                    E
                                )
                                    return t.getElementsByClassName(e);
                            }),
                        (s = []),
                        (v = []),
                        (d.qsa = K.test(C.querySelectorAll)) &&
                            (ce(function (e) {
                                var t;
                                (a.appendChild(e).innerHTML =
                                    "<a id='" +
                                    S +
                                    "'></a><select id='" +
                                    S +
                                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']")
                                        .length &&
                                        v.push("[*^$]=" + M + "*(?:''|\"\")"),
                                    e.querySelectorAll("[selected]").length ||
                                        v.push(
                                            "\\[" + M + "*(?:value|" + R + ")"
                                        ),
                                    e.querySelectorAll("[id~=" + S + "-]")
                                        .length || v.push("~="),
                                    (t = C.createElement("input")).setAttribute(
                                        "name",
                                        ""
                                    ),
                                    e.appendChild(t),
                                    e.querySelectorAll("[name='']").length ||
                                        v.push(
                                            "\\[" +
                                                M +
                                                "*name" +
                                                M +
                                                "*=" +
                                                M +
                                                "*(?:''|\"\")"
                                        ),
                                    e.querySelectorAll(":checked").length ||
                                        v.push(":checked"),
                                    e.querySelectorAll("a#" + S + "+*")
                                        .length || v.push(".#.+[+~]"),
                                    e.querySelectorAll("\\\f"),
                                    v.push("[\\r\\n\\f]");
                            }),
                            ce(function (e) {
                                e.innerHTML =
                                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = C.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length &&
                                        v.push("name" + M + "*[*^$|!~]?="),
                                    2 !==
                                        e.querySelectorAll(":enabled").length &&
                                        v.push(":enabled", ":disabled"),
                                    (a.appendChild(e).disabled = !0),
                                    2 !==
                                        e.querySelectorAll(":disabled")
                                            .length &&
                                        v.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    v.push(",.*:");
                            })),
                        (d.matchesSelector = K.test(
                            (c =
                                a.matches ||
                                a.webkitMatchesSelector ||
                                a.mozMatchesSelector ||
                                a.oMatchesSelector ||
                                a.msMatchesSelector)
                        )) &&
                            ce(function (e) {
                                (d.disconnectedMatch = c.call(e, "*")),
                                    c.call(e, "[s!='']:x"),
                                    s.push("!=", F);
                            }),
                        (v = v.length && new RegExp(v.join("|"))),
                        (s = s.length && new RegExp(s.join("|"))),
                        (t = K.test(a.compareDocumentPosition)),
                        (y =
                            t || K.test(a.contains)
                                ? function (e, t) {
                                      var n =
                                              9 === e.nodeType
                                                  ? e.documentElement
                                                  : e,
                                          r = t && t.parentNode;
                                      return (
                                          e === r ||
                                          !(
                                              !r ||
                                              1 !== r.nodeType ||
                                              !(n.contains
                                                  ? n.contains(r)
                                                  : e.compareDocumentPosition &&
                                                    16 &
                                                        e.compareDocumentPosition(
                                                            r
                                                        ))
                                          )
                                      );
                                  }
                                : function (e, t) {
                                      if (t)
                                          while ((t = t.parentNode))
                                              if (t === e) return !0;
                                      return !1;
                                  }),
                        (j = t
                            ? function (e, t) {
                                  if (e === t) return (l = !0), 0;
                                  var n =
                                      !e.compareDocumentPosition -
                                      !t.compareDocumentPosition;
                                  return (
                                      n ||
                                      (1 &
                                          (n =
                                              (e.ownerDocument || e) ==
                                              (t.ownerDocument || t)
                                                  ? e.compareDocumentPosition(t)
                                                  : 1) ||
                                      (!d.sortDetached &&
                                          t.compareDocumentPosition(e) === n)
                                          ? e == C ||
                                            (e.ownerDocument == p && y(p, e))
                                              ? -1
                                              : t == C ||
                                                (t.ownerDocument == p &&
                                                    y(p, t))
                                              ? 1
                                              : u
                                              ? P(u, e) - P(u, t)
                                              : 0
                                          : 4 & n
                                          ? -1
                                          : 1)
                                  );
                              }
                            : function (e, t) {
                                  if (e === t) return (l = !0), 0;
                                  var n,
                                      r = 0,
                                      i = e.parentNode,
                                      o = t.parentNode,
                                      a = [e],
                                      s = [t];
                                  if (!i || !o)
                                      return e == C
                                          ? -1
                                          : t == C
                                          ? 1
                                          : i
                                          ? -1
                                          : o
                                          ? 1
                                          : u
                                          ? P(u, e) - P(u, t)
                                          : 0;
                                  if (i === o) return pe(e, t);
                                  n = e;
                                  while ((n = n.parentNode)) a.unshift(n);
                                  n = t;
                                  while ((n = n.parentNode)) s.unshift(n);
                                  while (a[r] === s[r]) r++;
                                  return r
                                      ? pe(a[r], s[r])
                                      : a[r] == p
                                      ? -1
                                      : s[r] == p
                                      ? 1
                                      : 0;
                              })),
                    C
                );
            }),
        (se.matches = function (e, t) {
            return se(e, null, null, t);
        }),
        (se.matchesSelector = function (e, t) {
            if (
                (T(e),
                d.matchesSelector &&
                    E &&
                    !N[t + " "] &&
                    (!s || !s.test(t)) &&
                    (!v || !v.test(t)))
            )
                try {
                    var n = c.call(e, t);
                    if (
                        n ||
                        d.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                    )
                        return n;
                } catch (e) {
                    N(t, !0);
                }
            return 0 < se(t, C, null, [e]).length;
        }),
        (se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t);
        }),
        (se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r =
                    n && D.call(b.attrHandle, t.toLowerCase())
                        ? n(e, t, !E)
                        : void 0;
            return void 0 !== r
                ? r
                : d.attributes || !E
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
        }),
        (se.escape = function (e) {
            return (e + "").replace(re, ie);
        }),
        (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (se.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (
                ((l = !d.detectDuplicates),
                (u = !d.sortStable && e.slice(0)),
                e.sort(j),
                l)
            ) {
                while ((t = e[i++])) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1);
            }
            return (u = null), e;
        }),
        (o = se.getText =
            function (e) {
                var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                    } else if (3 === i || 4 === i) return e.nodeValue;
                } else while ((t = e[r++])) n += o(t);
                return n;
            }),
        ((b = se.selectors =
            {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (e) {
                        return (
                            (e[1] = e[1].replace(te, ne)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(
                                te,
                                ne
                            )),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                                ? (e[3] || se.error(e[0]),
                                  (e[4] = +(e[4]
                                      ? e[5] + (e[6] || 1)
                                      : 2 *
                                        ("even" === e[3] || "odd" === e[3]))),
                                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                : e[3] && se.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return G.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                  ? (e[2] = e[4] || e[5] || "")
                                  : n &&
                                    X.test(n) &&
                                    (t = h(n, !0)) &&
                                    (t =
                                        n.indexOf(")", n.length - t) -
                                        n.length) &&
                                    ((e[0] = e[0].slice(0, t)),
                                    (e[2] = n.slice(0, t))),
                              e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return (
                                      e.nodeName &&
                                      e.nodeName.toLowerCase() === t
                                  );
                              };
                    },
                    CLASS: function (e) {
                        var t = m[e + " "];
                        return (
                            t ||
                            ((t = new RegExp(
                                "(^|" + M + ")" + e + "(" + M + "|$)"
                            )) &&
                                m(e, function (e) {
                                    return t.test(
                                        ("string" == typeof e.className &&
                                            e.className) ||
                                            ("undefined" !=
                                                typeof e.getAttribute &&
                                                e.getAttribute("class")) ||
                                            ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t
                                ? "!=" === r
                                : !r ||
                                      ((t += ""),
                                      "=" === r
                                          ? t === i
                                          : "!=" === r
                                          ? t !== i
                                          : "^=" === r
                                          ? i && 0 === t.indexOf(i)
                                          : "*=" === r
                                          ? i && -1 < t.indexOf(i)
                                          : "$=" === r
                                          ? i && t.slice(-i.length) === i
                                          : "~=" === r
                                          ? -1 <
                                            (
                                                " " +
                                                t.replace(B, " ") +
                                                " "
                                            ).indexOf(i)
                                          : "|=" === r &&
                                            (t === i ||
                                                t.slice(0, i.length + 1) ===
                                                    i + "-"));
                        };
                    },
                    CHILD: function (h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (e, t, n) {
                                  var r,
                                      i,
                                      o,
                                      a,
                                      s,
                                      u,
                                      l =
                                          y !== m
                                              ? "nextSibling"
                                              : "previousSibling",
                                      c = e.parentNode,
                                      f = x && e.nodeName.toLowerCase(),
                                      p = !n && !x,
                                      d = !1;
                                  if (c) {
                                      if (y) {
                                          while (l) {
                                              a = e;
                                              while ((a = a[l]))
                                                  if (
                                                      x
                                                          ? a.nodeName.toLowerCase() ===
                                                            f
                                                          : 1 === a.nodeType
                                                  )
                                                      return !1;
                                              u = l =
                                                  "only" === h &&
                                                  !u &&
                                                  "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (
                                          ((u = [
                                              m ? c.firstChild : c.lastChild,
                                          ]),
                                          m && p)
                                      ) {
                                          (d =
                                              (s =
                                                  (r =
                                                      (i =
                                                          (o =
                                                              (a = c)[S] ||
                                                              (a[S] = {}))[
                                                              a.uniqueID
                                                          ] ||
                                                          (o[a.uniqueID] = {}))[
                                                          h
                                                      ] || [])[0] === k &&
                                                  r[1]) && r[2]),
                                              (a = s && c.childNodes[s]);
                                          while (
                                              (a =
                                                  (++s && a && a[l]) ||
                                                  (d = s = 0) ||
                                                  u.pop())
                                          )
                                              if (
                                                  1 === a.nodeType &&
                                                  ++d &&
                                                  a === e
                                              ) {
                                                  i[h] = [k, s, d];
                                                  break;
                                              }
                                      } else if (
                                          (p &&
                                              (d = s =
                                                  (r =
                                                      (i =
                                                          (o =
                                                              (a = e)[S] ||
                                                              (a[S] = {}))[
                                                              a.uniqueID
                                                          ] ||
                                                          (o[a.uniqueID] = {}))[
                                                          h
                                                      ] || [])[0] === k &&
                                                  r[1]),
                                          !1 === d)
                                      )
                                          while (
                                              (a =
                                                  (++s && a && a[l]) ||
                                                  (d = s = 0) ||
                                                  u.pop())
                                          )
                                              if (
                                                  (x
                                                      ? a.nodeName.toLowerCase() ===
                                                        f
                                                      : 1 === a.nodeType) &&
                                                  ++d &&
                                                  (p &&
                                                      ((i =
                                                          (o =
                                                              a[S] ||
                                                              (a[S] = {}))[
                                                              a.uniqueID
                                                          ] ||
                                                          (o[a.uniqueID] = {}))[
                                                          h
                                                      ] = [k, d]),
                                                  a === e)
                                              )
                                                  break;
                                      return (
                                          (d -= v) === g ||
                                          (d % g == 0 && 0 <= d / g)
                                      );
                                  }
                              };
                    },
                    PSEUDO: function (e, o) {
                        var t,
                            a =
                                b.pseudos[e] ||
                                b.setFilters[e.toLowerCase()] ||
                                se.error("unsupported pseudo: " + e);
                        return a[S]
                            ? a(o)
                            : 1 < a.length
                            ? ((t = [e, e, "", o]),
                              b.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? le(function (e, t) {
                                        var n,
                                            r = a(e, o),
                                            i = r.length;
                                        while (i--)
                                            e[(n = P(e, r[i]))] = !(t[n] =
                                                r[i]);
                                    })
                                  : function (e) {
                                        return a(e, 0, t);
                                    })
                            : a;
                    },
                },
                pseudos: {
                    not: le(function (e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S]
                            ? le(function (e, t, n, r) {
                                  var i,
                                      o = s(e, null, r, []),
                                      a = e.length;
                                  while (a--)
                                      (i = o[a]) && (e[a] = !(t[a] = i));
                              })
                            : function (e, t, n) {
                                  return (
                                      (r[0] = e),
                                      s(r, null, n, i),
                                      (r[0] = null),
                                      !i.pop()
                                  );
                              };
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length;
                        };
                    }),
                    contains: le(function (t) {
                        return (
                            (t = t.replace(te, ne)),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t);
                            }
                        );
                    }),
                    lang: le(function (n) {
                        return (
                            V.test(n || "") ||
                                se.error("unsupported lang: " + n),
                            (n = n.replace(te, ne).toLowerCase()),
                            function (e) {
                                var t;
                                do {
                                    if (
                                        (t = E
                                            ? e.lang
                                            : e.getAttribute("xml:lang") ||
                                              e.getAttribute("lang"))
                                    )
                                        return (
                                            (t = t.toLowerCase()) === n ||
                                            0 === t.indexOf(n + "-")
                                        );
                                } while (
                                    (e = e.parentNode) &&
                                    1 === e.nodeType
                                );
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id;
                    },
                    root: function (e) {
                        return e === a;
                    },
                    focus: function (e) {
                        return (
                            e === C.activeElement &&
                            (!C.hasFocus || C.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && !!e.checked) ||
                            ("option" === t && !!e.selected)
                        );
                    },
                    selected: function (e) {
                        return (
                            e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        );
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e);
                    },
                    header: function (e) {
                        return J.test(e.nodeName);
                    },
                    input: function (e) {
                        return Q.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && "button" === e.type) ||
                            "button" === t
                        );
                    },
                    text: function (e) {
                        var t;
                        return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (t = e.getAttribute("type")) ||
                                "text" === t.toLowerCase())
                        );
                    },
                    first: ve(function () {
                        return [0];
                    }),
                    last: ve(function (e, t) {
                        return [t - 1];
                    }),
                    eq: ve(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: ve(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: ve(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                            e.push(r);
                        return e;
                    }),
                    gt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = b.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first
                ? function (e, t, n) {
                      while ((e = e[u]))
                          if (1 === e.nodeType || f) return s(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var r,
                          i,
                          o,
                          a = [k, p];
                      if (n) {
                          while ((e = e[u]))
                              if ((1 === e.nodeType || f) && s(e, t, n))
                                  return !0;
                      } else
                          while ((e = e[u]))
                              if (1 === e.nodeType || f)
                                  if (
                                      ((i =
                                          (o = e[S] || (e[S] = {}))[
                                              e.uniqueID
                                          ] || (o[e.uniqueID] = {})),
                                      l && l === e.nodeName.toLowerCase())
                                  )
                                      e = e[u] || e;
                                  else {
                                      if (
                                          (r = i[c]) &&
                                          r[0] === k &&
                                          r[1] === p
                                      )
                                          return (a[2] = r[2]);
                                      if (((i[c] = a)[2] = s(e, t, n)))
                                          return !0;
                                  }
                      return !1;
                  };
        }
        function we(i) {
            return 1 < i.length
                ? function (e, t, n) {
                      var r = i.length;
                      while (r--) if (!i[r](e, t, n)) return !1;
                      return !0;
                  }
                : i[0];
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) &&
                    ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, v, y, e) {
            return (
                v && !v[S] && (v = Ce(v)),
                y && !y[S] && (y = Ce(y, e)),
                le(function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = [],
                        u = [],
                        l = t.length,
                        c =
                            e ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++)
                                    se(e, t[r], n);
                                return n;
                            })(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || (!e && h) ? c : Te(c, s, d, n, r),
                        p = g ? (y || (e ? d : l || v) ? [] : t) : f;
                    if ((g && g(f, p, n, r), v)) {
                        (i = Te(p, u)), v(i, [], n, r), (o = i.length);
                        while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                (i = []), (o = p.length);
                                while (o--) (a = p[o]) && i.push((f[o] = a));
                                y(null, (p = []), i, r);
                            }
                            o = p.length;
                            while (o--)
                                (a = p[o]) &&
                                    -1 < (i = y ? P(e, a) : s[o]) &&
                                    (e[i] = !(t[i] = a));
                        }
                    } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
                })
            );
        }
        function Ee(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[" "],
                    s = o ? 1 : 0,
                    u = be(
                        function (e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    l = be(
                        function (e) {
                            return -1 < P(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            var r =
                                (!o && (n || t !== w)) ||
                                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ];
                s < r;
                s++
            )
                if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
                else {
                    if (
                        (t = b.filter[e[s].type].apply(null, e[s].matches))[S]
                    ) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(
                            1 < s && we(c),
                            1 < s &&
                                xe(
                                    e
                                        .slice(0, s - 1)
                                        .concat({
                                            value:
                                                " " === e[s - 2].type
                                                    ? "*"
                                                    : "",
                                        })
                                ).replace($, "$1"),
                            t,
                            s < n && Ee(e.slice(s, n)),
                            n < r && Ee((e = e.slice(n))),
                            n < r && xe(e)
                        );
                    }
                    c.push(t);
                }
            return we(c);
        }
        return (
            (me.prototype = b.filters = b.pseudos),
            (b.setFilters = new me()),
            (h = se.tokenize =
                function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l = x[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    (a = e), (s = []), (u = b.preFilter);
                    while (a) {
                        for (o in ((n && !(r = _.exec(a))) ||
                            (r && (a = a.slice(r[0].length) || a),
                            s.push((i = []))),
                        (n = !1),
                        (r = z.exec(a)) &&
                            ((n = r.shift()),
                            i.push({ value: n, type: r[0].replace($, " ") }),
                            (a = a.slice(n.length))),
                        b.filter))
                            !(r = G[o].exec(a)) ||
                                (u[o] && !(r = u[o](r))) ||
                                ((n = r.shift()),
                                i.push({ value: n, type: o, matches: r }),
                                (a = a.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
                }),
            (f = se.compile =
                function (e, t) {
                    var n,
                        v,
                        y,
                        m,
                        x,
                        r,
                        i = [],
                        o = [],
                        a = A[e + " "];
                    if (!a) {
                        t || (t = h(e)), (n = t.length);
                        while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                        (a = A(
                            e,
                            ((v = o),
                            (m = 0 < (y = i).length),
                            (x = 0 < v.length),
                            (r = function (e, t, n, r, i) {
                                var o,
                                    a,
                                    s,
                                    u = 0,
                                    l = "0",
                                    c = e && [],
                                    f = [],
                                    p = w,
                                    d = e || (x && b.find.TAG("*", i)),
                                    h = (k +=
                                        null == p ? 1 : Math.random() || 0.1),
                                    g = d.length;
                                for (
                                    i && (w = t == C || t || i);
                                    l !== g && null != (o = d[l]);
                                    l++
                                ) {
                                    if (x && o) {
                                        (a = 0),
                                            t ||
                                                o.ownerDocument == C ||
                                                (T(o), (n = !E));
                                        while ((s = v[a++]))
                                            if (s(o, t || C, n)) {
                                                r.push(o);
                                                break;
                                            }
                                        i && (k = h);
                                    }
                                    m && ((o = !s && o) && u--, e && c.push(o));
                                }
                                if (((u += l), m && l !== u)) {
                                    a = 0;
                                    while ((s = y[a++])) s(c, f, t, n);
                                    if (e) {
                                        if (0 < u)
                                            while (l--)
                                                c[l] ||
                                                    f[l] ||
                                                    (f[l] = q.call(r));
                                        f = Te(f);
                                    }
                                    H.apply(r, f),
                                        i &&
                                            !e &&
                                            0 < f.length &&
                                            1 < u + y.length &&
                                            se.uniqueSort(r);
                                }
                                return i && ((k = h), (w = p)), c;
                            }),
                            m ? le(r) : r)
                        )).selector = e;
                    }
                    return a;
                }),
            (g = se.select =
                function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = "function" == typeof e && e,
                        c = !r && h((e = l.selector || e));
                    if (((n = n || []), 1 === c.length)) {
                        if (
                            2 < (o = c[0] = c[0].slice(0)).length &&
                            "ID" === (a = o[0]).type &&
                            9 === t.nodeType &&
                            E &&
                            b.relative[o[1].type]
                        ) {
                            if (
                                !(t = (b.find.ID(
                                    a.matches[0].replace(te, ne),
                                    t
                                ) || [])[0])
                            )
                                return n;
                            l && (t = t.parentNode),
                                (e = e.slice(o.shift().value.length));
                        }
                        i = G.needsContext.test(e) ? 0 : o.length;
                        while (i--) {
                            if (((a = o[i]), b.relative[(s = a.type)])) break;
                            if (
                                (u = b.find[s]) &&
                                (r = u(
                                    a.matches[0].replace(te, ne),
                                    (ee.test(o[0].type) && ye(t.parentNode)) ||
                                        t
                                ))
                            ) {
                                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                                    return H.apply(n, r), n;
                                break;
                            }
                        }
                    }
                    return (
                        (l || f(e, c))(
                            r,
                            t,
                            !E,
                            n,
                            !t || (ee.test(e) && ye(t.parentNode)) || t
                        ),
                        n
                    );
                }),
            (d.sortStable = S.split("").sort(j).join("") === S),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function (e) {
                return (
                    1 & e.compareDocumentPosition(C.createElement("fieldset"))
                );
            })),
            ce(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
                fe("type|href|height|width", function (e, t, n) {
                    if (!n)
                        return e.getAttribute(
                            t,
                            "type" === t.toLowerCase() ? 1 : 2
                        );
                }),
            (d.attributes &&
                ce(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
                fe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
            ce(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                fe(R, function (e, t, n) {
                    var r;
                    if (!n)
                        return !0 === e[t]
                            ? t.toLowerCase()
                            : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
                }),
            se
        );
    })(C);
    (S.find = d),
        (S.expr = d.selectors),
        (S.expr[":"] = S.expr.pseudos),
        (S.uniqueSort = S.unique = d.uniqueSort),
        (S.text = d.getText),
        (S.isXMLDoc = d.isXML),
        (S.contains = d.contains),
        (S.escapeSelector = d.escape);
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n)
            ? S.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? S.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : "string" != typeof n
            ? S.grep(e, function (e) {
                  return -1 < i.call(n, e) !== r;
              })
            : S.filter(n, e, r);
    }
    (S.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? S.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : S.find.matches(
                      e,
                      S.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        S.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        S(e).filter(function () {
                            for (t = 0; t < r; t++)
                                if (S.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                    S.find(e, i[t], n);
                return 1 < r ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function (e) {
                return !!j(
                    this,
                    "string" == typeof e && k.test(e) ? S(e) : e || [],
                    !1
                ).length;
            },
        });
    var D,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || D), "string" == typeof e)) {
            if (
                !(r =
                    "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                        ? [null, e, null]
                        : q.exec(e)) ||
                (!r[1] && t)
            )
                return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
            if (r[1]) {
                if (
                    ((t = t instanceof S ? t[0] : t),
                    S.merge(
                        this,
                        S.parseHTML(
                            r[1],
                            t && t.nodeType ? t.ownerDocument || t : E,
                            !0
                        )
                    ),
                    N.test(r[1]) && S.isPlainObject(t))
                )
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (
                (i = E.getElementById(r[2])) &&
                    ((this[0] = i), (this.length = 1)),
                this
            );
        }
        return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : m(e)
            ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
            : S.makeArray(e, this);
    }).prototype = S.fn),
        (D = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (a
                                ? -1 < a.index(n)
                                : 1 === n.nodeType &&
                                  S.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? i.call(S(e), this[0])
                    : i.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    }),
        S.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return h(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return h(e, "parentNode", n);
                },
                next: function (e) {
                    return O(e, "nextSibling");
                },
                prev: function (e) {
                    return O(e, "previousSibling");
                },
                nextAll: function (e) {
                    return h(e, "nextSibling");
                },
                prevAll: function (e) {
                    return h(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return h(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return h(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return T(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && r(e.contentDocument)
                        ? e.contentDocument
                        : (A(e, "template") && (e = e.content || e),
                          S.merge([], e.childNodes));
                },
            },
            function (r, i) {
                S.fn[r] = function (e, t) {
                    var n = S.map(this, i, e);
                    return (
                        "Until" !== r.slice(-5) && (t = e),
                        t && "string" == typeof t && (n = S.filter(t, n)),
                        1 < this.length &&
                            (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
                        this.pushStack(n)
                    );
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && m((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (S.Callbacks = function (r) {
        var e, n;
        r =
            "string" == typeof r
                ? ((e = r),
                  (n = {}),
                  S.each(e.match(P) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : S.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length)
                        !1 === s[l].apply(t[0], t[1]) &&
                            r.stopOnFalse &&
                            ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                            (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                S.each(e, function (e, t) {
                                    m(t)
                                        ? (r.unique && f.has(t)) || s.push(t)
                                        : t &&
                                          t.length &&
                                          "string" !== w(t) &&
                                          n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        S.each(arguments, function (e, t) {
                            var n;
                            while (-1 < (n = S.inArray(t, s, n)))
                                s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = t = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), t || i || (s = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return (
                        a ||
                            ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            u.push(t),
                            i || c()),
                        this
                    );
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        S.extend({
            Deferred: function (e) {
                var o = [
                        [
                            "notify",
                            "progress",
                            S.Callbacks("memory"),
                            S.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            S.Callbacks("once memory"),
                            S.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            S.Callbacks("once memory"),
                            S.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return S.Deferred(function (r) {
                                S.each(o, function (e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(r.notify)
                                                  .done(r.resolve)
                                                  .fail(r.reject)
                                            : r[t[0] + "With"](
                                                  this,
                                                  n ? [e] : arguments
                                              );
                                    });
                                }),
                                    (i = null);
                            }).promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    var n = this,
                                        r = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(i < u)) {
                                                if (
                                                    (e = a.apply(n, r)) ===
                                                    o.promise()
                                                )
                                                    throw new TypeError(
                                                        "Thenable self-resolution"
                                                    );
                                                (t =
                                                    e &&
                                                    ("object" == typeof e ||
                                                        "function" ==
                                                            typeof e) &&
                                                    e.then),
                                                    m(t)
                                                        ? s
                                                            ? t.call(
                                                                  e,
                                                                  l(u, o, R, s),
                                                                  l(u, o, M, s)
                                                              )
                                                            : (u++,
                                                              t.call(
                                                                  e,
                                                                  l(u, o, R, s),
                                                                  l(u, o, M, s),
                                                                  l(
                                                                      u,
                                                                      o,
                                                                      R,
                                                                      o.notifyWith
                                                                  )
                                                              ))
                                                        : (a !== R &&
                                                              ((n = void 0),
                                                              (r = [e])),
                                                          (s || o.resolveWith)(
                                                              n,
                                                              r
                                                          ));
                                            }
                                        },
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      S.Deferred
                                                          .exceptionHook &&
                                                          S.Deferred.exceptionHook(
                                                              e,
                                                              t.stackTrace
                                                          ),
                                                          u <= i + 1 &&
                                                              (a !== M &&
                                                                  ((n = void 0),
                                                                  (r = [e])),
                                                              o.rejectWith(
                                                                  n,
                                                                  r
                                                              ));
                                                  }
                                              };
                                    i
                                        ? t()
                                        : (S.Deferred.getStackHook &&
                                              (t.stackTrace =
                                                  S.Deferred.getStackHook()),
                                          C.setTimeout(t));
                                };
                            }
                            return S.Deferred(function (e) {
                                o[0][3].add(
                                    l(0, e, m(r) ? r : R, e.notifyWith)
                                ),
                                    o[1][3].add(l(0, e, m(t) ? t : R)),
                                    o[2][3].add(l(0, e, m(n) ? n : M));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? S.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    S.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return (
                                    s[t[0] + "With"](
                                        this === s ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    o = S.Deferred(),
                    a = function (t) {
                        return function (e) {
                            (r[t] = this),
                                (i[t] =
                                    1 < arguments.length
                                        ? s.call(arguments)
                                        : e),
                                --n || o.resolveWith(r, i);
                        };
                    };
                if (
                    n <= 1 &&
                    (I(e, o.done(a(t)).resolve, o.reject, !n),
                    "pending" === o.state() || m(i[t] && i[t].then))
                )
                    return o.then();
                while (t--) I(i[t], a(t), o.reject);
                return o.promise();
            },
        });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
        C.console &&
            C.console.warn &&
            e &&
            W.test(e.name) &&
            C.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
            );
    }),
        (S.readyException = function (e) {
            C.setTimeout(function () {
                throw e;
            });
        });
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
            C.removeEventListener("load", B),
            S.ready();
    }
    (S.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                S.readyException(e);
            }),
            this
        );
    }),
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                    ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
                    F.resolveWith(E, [S]);
            },
        }),
        (S.ready.then = F.then),
        "complete" === E.readyState ||
        ("loading" !== E.readyState && !E.documentElement.doScroll)
            ? C.setTimeout(S.ready)
            : (E.addEventListener("DOMContentLoaded", B),
              C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(S(e), n);
                          }))),
                t)
            )
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U);
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
        this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
        (G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        V(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else for (r in t) i[X(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][X(t)];
            },
            access: function (e, t, n) {
                return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(X)
                            : (t = X(t)) in r
                            ? [t]
                            : t.match(P) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || S.isEmptyObject(r)) &&
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
            },
        });
    var Y = new G(),
        Q = new G(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
            ) {
                try {
                    n =
                        "true" === (i = n) ||
                        ("false" !== i &&
                            ("null" === i
                                ? null
                                : i === +i + ""
                                ? +i
                                : J.test(i)
                                ? JSON.parse(i)
                                : i));
                } catch (e) {}
                Q.set(e, t, n);
            } else n = void 0;
        return n;
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e);
        },
        data: function (e, t, n) {
            return Q.access(e, t, n);
        },
        removeData: function (e, t) {
            Q.remove(e, t);
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function (e, t) {
            Y.remove(e, t);
        },
    }),
        S.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (
                        this.length &&
                        ((i = Q.get(o)),
                        1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
                    ) {
                        t = a.length;
                        while (t--)
                            a[t] &&
                                0 === (r = a[t].name).indexOf("data-") &&
                                ((r = X(r.slice(5))), Z(o, r, i[r]));
                        Y.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n
                    ? this.each(function () {
                          Q.set(this, n);
                      })
                    : $(
                          this,
                          function (e) {
                              var t;
                              if (o && void 0 === e)
                                  return void 0 !== (t = Q.get(o, n))
                                      ? t
                                      : void 0 !== (t = Z(o, n))
                                      ? t
                                      : void 0;
                              this.each(function () {
                                  Q.set(this, n, e);
                              });
                          },
                          null,
                          e,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e);
                });
            },
        }),
        S.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return (
                        (t = (t || "fx") + "queue"),
                        (r = Y.get(e, t)),
                        n &&
                            (!r || Array.isArray(n)
                                ? (r = Y.access(e, t, S.makeArray(n)))
                                : r.push(n)),
                        r || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = S._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                S.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Y.get(e, n) ||
                    Y.access(e, n, {
                        empty: S.Callbacks("once memory").add(function () {
                            Y.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        S.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? S.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = S.queue(this, t, n);
                              S._queueHooks(this, t),
                                  "fx" === t &&
                                      "inprogress" !== e[0] &&
                                      S.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    S.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = S.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)),
                    (e = e || "fx");
                while (a--)
                    (n = Y.get(o[a], e + "queueHooks")) &&
                        n.empty &&
                        (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    re.getRootNode &&
        (ie = function (e) {
            return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(oe) === e.ownerDocument
            );
        });
    var ae = function (e, t) {
        return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
        );
    };
    function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return S.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            c =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== l && +u)) &&
                te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--)
                S.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                    (c /= o);
            (c *= 2), S.style(e, t, c + l), (n = n || []);
        }
        return (
            n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
        );
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
                ((n = r.style.display),
                t
                    ? ("none" === n &&
                          ((l[c] = Y.get(r, "display") || null),
                          l[c] || (r.style.display = "")),
                      "" === r.style.display &&
                          ae(r) &&
                          (l[c] =
                              ((u = a = o = void 0),
                              (a = (i = r).ownerDocument),
                              (s = i.nodeName),
                              (u = ue[s]) ||
                                  ((o = a.body.appendChild(a.createElement(s))),
                                  (u = S.css(o, "display")),
                                  o.parentNode.removeChild(o),
                                  "none" === u && (u = "block"),
                                  (ue[s] = u)))))
                    : "none" !== n &&
                      ((l[c] = "none"), Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    S.fn.extend({
        show: function () {
            return le(this, !0);
        },
        hide: function () {
            return le(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? S(this).show() : S(this).hide();
                  });
        },
    });
    var ce,
        fe,
        pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
        (fe = E.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ce.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
        (ce.innerHTML = "<option></option>"),
        (y.option = !!ce.lastChild);
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
    };
    function ve(e, t) {
        var n;
        return (
            (n =
                "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : "undefined" != typeof e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : []),
            void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
        );
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td),
        y.option ||
            (ge.optgroup = ge.option =
                [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (
            var o,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
            d < h;
            d++
        )
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))),
                        (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
                        (u = ge[s] || ge._default),
                        (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
                        (c = u[0]);
                    while (c--) a = a.lastChild;
                    S.merge(p, a.childNodes),
                        ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (
                ((l = ie(o)),
                (a = ve(f.appendChild(o), "script")),
                l && ye(a),
                n)
            ) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0;
    }
    function Te() {
        return !1;
    }
    function Ce(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
                Ee(e, s, n, r, t[s], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                      ? ((i = r), (r = void 0))
                      : ((i = r), (r = n), (n = void 0))),
            !1 === i)
        )
            i = Te;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return S().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = S.guid++))),
            e.each(function () {
                S.event.add(this, t, i, r, n);
            })
        );
    }
    function Se(e, i, o) {
        o
            ? (Y.set(e, i, !1),
              S.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          r = Y.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (r.length)
                              (S.event.special[i] || {}).delegateType &&
                                  e.stopPropagation();
                          else if (
                              ((r = s.call(arguments)),
                              Y.set(this, i, r),
                              (t = o(this, i)),
                              this[i](),
                              r !== (n = Y.get(this, i)) || t
                                  ? Y.set(this, i, !1)
                                  : (n = {}),
                              r !== n)
                          )
                              return (
                                  e.stopImmediatePropagation(),
                                  e.preventDefault(),
                                  n && n.value
                              );
                      } else
                          r.length &&
                              (Y.set(this, i, {
                                  value: S.event.trigger(
                                      S.extend(r[0], S.Event.prototype),
                                      r.slice(1),
                                      this
                                  ),
                              }),
                              e.stopImmediatePropagation());
                  },
              }))
            : void 0 === Y.get(e, i) && S.event.add(e, i, we);
    }
    (S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.get(t);
            if (V(t)) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && S.find.matchesSelector(re, i),
                    n.guid || (n.guid = S.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                        (a = v.handle =
                            function (e) {
                                return "undefined" != typeof S &&
                                    S.event.triggered !== e.type
                                    ? S.event.dispatch.apply(t, arguments)
                                    : void 0;
                            }),
                    (l = (e = (e || "").match(P) || [""]).length);
                while (l--)
                    (d = g = (s = be.exec(e[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = S.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = S.event.special[d] || {}),
                            (c = S.extend(
                                {
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext:
                                        i && S.expr.match.needsContext.test(i),
                                    namespace: h.join("."),
                                },
                                o
                            )),
                            (p = u[d]) ||
                                (((p = u[d] = []).delegateCount = 0),
                                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                                    (t.addEventListener &&
                                        t.addEventListener(d, a))),
                            f.add &&
                                (f.add.call(t, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (S.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (
                        ((d = g = (s = be.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d)
                    ) {
                        (f = S.event.special[d] || {}),
                            (p =
                                u[
                                    (d = (r ? f.delegateType : f.bindType) || d)
                                ] || []),
                            (s =
                                s[2] &&
                                new RegExp(
                                    "(^|\\.)" +
                                        h.join("\\.(?:.*\\.|)") +
                                        "(\\.|$)"
                                )),
                            (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r &&
                                        r !== c.selector &&
                                        ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        a &&
                            !p.length &&
                            ((f.teardown &&
                                !1 !== f.teardown.call(e, h, v.handle)) ||
                                S.removeEvent(e, d, v.handle),
                            delete u[d]);
                    } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                l =
                    (Y.get(this, "events") || Object.create(null))[u.type] ||
                    [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
            ) {
                (a = S.event.handlers.call(this, u, l)), (t = 0);
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    (u.currentTarget = i.elem), (n = 0);
                    while (
                        (o = i.handlers[n++]) &&
                        !u.isImmediatePropagationStopped()
                    )
                        (u.rnamespace &&
                            !1 !== o.namespace &&
                            !u.rnamespace.test(o.namespace)) ||
                            ((u.handleObj = o),
                            (u.data = o.data),
                            void 0 !==
                                (r = (
                                    (S.event.special[o.origType] || {})
                                        .handle || o.handler
                                ).apply(i.elem, s)) &&
                                !1 === (u.result = r) &&
                                (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (
                        1 === l.nodeType &&
                        ("click" !== e.type || !0 !== l.disabled)
                    ) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[(i = (r = t[n]).selector + " ")] &&
                                (a[i] = r.needsContext
                                    ? -1 < S(i, this).index(l)
                                    : S.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
            );
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return (
                        pe.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            Se(t, "click", we),
                        !1
                    );
                },
                trigger: function (e) {
                    var t = this || e;
                    return (
                        pe.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            Se(t, "click"),
                        !0
                    );
                },
                _default: function (e) {
                    var t = e.target;
                    return (
                        (pe.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            Y.get(t, "click")) ||
                        A(t, "a")
                    );
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? we
                          : Te),
                  (this.target =
                      e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = we),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = we),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = we),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        S.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            S.event.addProp
        ),
        S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            S.event.special[e] = {
                setup: function () {
                    return Se(this, e, Ce), !1;
                },
                trigger: function () {
                    return Se(this, e), !0;
                },
                _default: function () {
                    return !0;
                },
                delegateType: t,
            };
        }),
        S.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, i) {
                S.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            r = e.handleObj;
                        return (
                            (n && (n === this || S.contains(this, n))) ||
                                ((e.type = r.origType),
                                (t = r.handler.apply(this, arguments)),
                                (e.type = i)),
                            t
                        );
                    },
                };
            }
        ),
        S.fn.extend({
            on: function (e, t, n, r) {
                return Ee(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return Ee(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                        S(e.delegateTarget).off(
                            r.namespace
                                ? r.origType + "." + r.namespace
                                : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) ||
                        ((n = t), (t = void 0)),
                    !1 === n && (n = Te),
                    this.each(function () {
                        S.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return (
            (A(e, "table") &&
                A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
            e
        );
    }
    function De(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function qe(e) {
        return (
            "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
            e
        );
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in (Y.remove(t, "handle events"), s))
                    for (n = 0, r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) &&
                ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
        }
    }
    function He(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
            });
        if (
            f &&
            ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
        ) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
                (u = e),
                    c !== p &&
                        ((u = S.clone(u, !0, !0)),
                        s && S.merge(a, ve(u, "script"))),
                    i.call(n[c], u, c);
            if (s)
                for (
                    l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0;
                    c < s;
                    c++
                )
                    (u = a[c]),
                        he.test(u.type || "") &&
                            !Y.access(u, "globalEval") &&
                            S.contains(l, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase()
                                ? S._evalUrl &&
                                  !u.noModule &&
                                  S._evalUrl(
                                      u.src,
                                      {
                                          nonce:
                                              u.nonce ||
                                              u.getAttribute("nonce"),
                                      },
                                      l
                                  )
                                : b(u.textContent.replace(Ne, ""), u, l));
        }
        return n;
    }
    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
                r.parentNode &&
                    (n && ie(r) && ye(ve(r, "script")),
                    r.parentNode.removeChild(r));
        return e;
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = ie(e);
            if (
                !(
                    y.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    S.isXMLDoc(e)
                )
            )
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
                    (s = o[r]),
                        (u = a[r]),
                        void 0,
                        "input" === (l = u.nodeName.toLowerCase()) &&
                        pe.test(s.type)
                            ? (u.checked = s.checked)
                            : ("input" !== l && "textarea" !== l) ||
                              (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (
                        o = o || ve(e), a = a || ve(c), r = 0, i = o.length;
                        r < i;
                        r++
                    )
                        Le(o[r], a[r]);
                else Le(e, c);
            return (
                0 < (a = ve(c, "script")).length &&
                    ye(a, !f && ve(e, "script")),
                c
            );
        },
        cleanData: function (e) {
            for (
                var t, n, r, i = S.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (V(n)) {
                    if ((t = n[Y.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r]
                                    ? S.event.remove(n, r)
                                    : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0;
                    }
                    n[Q.expando] && (n[Q.expando] = void 0);
                }
        },
    }),
        S.fn.extend({
            detach: function (e) {
                return Oe(this, e, !0);
            },
            remove: function (e) {
                return Oe(this, e);
            },
            text: function (e) {
                return $(
                    this,
                    function (e) {
                        return void 0 === e
                            ? S.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return He(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        je(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return He(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return He(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (S.cleanData(ve(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return S.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return $(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !ke.test(e) &&
                            !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (S.cleanData(ve(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return He(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        S.inArray(this, n) < 0 &&
                            (S.cleanData(ve(this)),
                            t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        S.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, a) {
                S.fn[e] = function (e) {
                    for (
                        var t, n = [], r = S(e), i = r.length - 1, o = 0;
                        o <= i;
                        o++
                    )
                        (t = o === i ? this : this.clone(!0)),
                            S(r[o])[a](t),
                            u.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        Me = function (e, t, n) {
            var r,
                i,
                o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
        },
        Ie = new RegExp(ne.join("|"), "i");
    function We(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || Re(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                    ie(e) ||
                    (a = S.style(e, t)),
                !y.pixelBoxStyles() &&
                    Pe.test(a) &&
                    Ie.test(t) &&
                    ((r = s.width),
                    (i = s.minWidth),
                    (o = s.maxWidth),
                    (s.minWidth = s.maxWidth = s.width = a),
                    (a = n.width),
                    (s.width = r),
                    (s.minWidth = i),
                    (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function Fe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (l) {
                (u.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (l.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                (n = "1%" !== e.top),
                    (s = 12 === t(e.marginLeft)),
                    (l.style.right = "60%"),
                    (o = 36 === t(e.right)),
                    (r = 36 === t(e.width)),
                    (l.style.position = "absolute"),
                    (i = 12 === t(l.offsetWidth / 3)),
                    re.removeChild(u),
                    (l = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = E.createElement("div"),
            l = E.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
            S.extend(y, {
                boxSizingReliable: function () {
                    return e(), r;
                },
                pixelBoxStyles: function () {
                    return e(), o;
                },
                pixelPosition: function () {
                    return e(), n;
                },
                reliableMarginLeft: function () {
                    return e(), s;
                },
                scrollboxSize: function () {
                    return e(), i;
                },
                reliableTrDimensions: function () {
                    var e, t, n, r;
                    return (
                        null == a &&
                            ((e = E.createElement("table")),
                            (t = E.createElement("tr")),
                            (n = E.createElement("div")),
                            (e.style.cssText =
                                "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "border:1px solid"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            re.appendChild(e).appendChild(t).appendChild(n),
                            (r = C.getComputedStyle(t)),
                            (a =
                                parseInt(r.height, 10) +
                                    parseInt(r.borderTopWidth, 10) +
                                    parseInt(r.borderBottomWidth, 10) ===
                                t.offsetHeight),
                            re.removeChild(e)),
                        a
                    );
                },
            }));
    })();
    var Be = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        _e = {};
    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return (
            t ||
            (e in $e
                ? e
                : (_e[e] =
                      (function (e) {
                          var t = e[0].toUpperCase() + e.slice(1),
                              n = Be.length;
                          while (n--) if ((e = Be[n] + t) in $e) return e;
                      })(e) || e))
        );
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = { position: "absolute", visibility: "hidden", display: "block" },
        Ge = { letterSpacing: "0", fontWeight: "400" };
    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
                r
                    ? ("content" === n &&
                          (u -= S.css(e, "padding" + ne[a], !0, i)),
                      "margin" !== n &&
                          (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
                    : ((u += S.css(e, "padding" + ne[a], !0, i)),
                      "padding" !== n
                          ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
                          : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
        return (
            !r &&
                0 <= o &&
                (u +=
                    Math.max(
                        0,
                        Math.ceil(
                            e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                o -
                                u -
                                s -
                                0.5
                        )
                    ) || 0),
            u
        );
    }
    function Je(e, t, n) {
        var r = Re(e),
            i =
                (!y.boxSizingReliable() || n) &&
                "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!y.boxSizingReliable() && i) ||
                (!y.reliableTrDimensions() && A(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
                (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) +
                Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
        );
    }
    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = X(t),
                    u = Xe.test(t),
                    l = e.style;
                if (
                    (u || (t = ze(s)),
                    (a = S.cssHooks[t] || S.cssHooks[s]),
                    void 0 === n)
                )
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                        ? i
                        : l[t];
                "string" === (o = typeof n) &&
                    (i = te.exec(n)) &&
                    i[1] &&
                    ((n = se(e, t, i)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o ||
                            u ||
                            (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                        y.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                            (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = X(t);
            return (
                Xe.test(t) || (t = ze(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) &&
                    "get" in a &&
                    (i = a.get(e, !0, n)),
                void 0 === i && (i = We(e, t, r)),
                "normal" === i && t in Ge && (i = Ge[t]),
                "" === n || n
                    ? ((o = parseFloat(i)),
                      !0 === n || isFinite(o) ? o || 0 : i)
                    : i
            );
        },
    }),
        S.each(["height", "width"], function (e, u) {
            S.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !Ue.test(S.css(e, "display")) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? Je(e, u, n)
                            : Me(e, Ve, function () {
                                  return Je(e, u, n);
                              });
                },
                set: function (e, t, n) {
                    var r,
                        i = Re(e),
                        o = !y.scrollboxSize() && "absolute" === i.position,
                        a =
                            (o || n) &&
                            "border-box" === S.css(e, "boxSizing", !1, i),
                        s = n ? Qe(e, u, n, a, i) : 0;
                    return (
                        a &&
                            o &&
                            (s -= Math.ceil(
                                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                                    parseFloat(i[u]) -
                                    Qe(e, u, "border", !1, i) -
                                    0.5
                            )),
                        s &&
                            (r = te.exec(t)) &&
                            "px" !== (r[3] || "px") &&
                            ((e.style[u] = t), (t = S.css(e, u))),
                        Ye(0, t, s)
                    );
                },
            };
        }),
        (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(We(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Me(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
            (S.cssHooks[i + o] = {
                expand: function (e) {
                    for (
                        var t = 0,
                            n = {},
                            r = "string" == typeof e ? e.split(" ") : [e];
                        t < 4;
                        t++
                    )
                        n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
                "margin" !== i && (S.cssHooks[i + o].set = Ye);
        }),
        S.fn.extend({
            css: function (e, t) {
                return $(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Re(e), i = t.length; a < i; a++)
                                o[t[a]] = S.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((S.Tween = Ke).prototype = {
            constructor: Ke,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || S.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = Ke.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : Ke.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = Ke.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                              S.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = Ke.prototype),
        ((Ke.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                        ? t
                        : 0;
                },
                set: function (e) {
                    S.fx.step[e.prop]
                        ? S.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!S.cssHooks[e.prop] &&
                              null == e.elem.style[ze(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : S.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = Ke.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (S.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (S.fx = Ke.prototype.init),
        (S.fx.step = {});
    var Ze,
        et,
        tt,
        nt,
        rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;
    function ot() {
        et &&
            (!1 === E.hidden && C.requestAnimationFrame
                ? C.requestAnimationFrame(ot)
                : C.setTimeout(ot, S.fx.interval),
            S.fx.tick());
    }
    function at() {
        return (
            C.setTimeout(function () {
                Ze = void 0;
            }),
            (Ze = Date.now())
        );
    }
    function st(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ut(e, t, n) {
        for (
            var r,
                i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
                o = 0,
                a = i.length;
            o < a;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function lt(o, e, t) {
        var n,
            a,
            r = 0,
            i = lt.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (a) return !1;
                for (
                    var e = Ze || at(),
                        t = Math.max(0, l.startTime + l.duration - e),
                        n = 1 - (t / l.duration || 0),
                        r = 0,
                        i = l.tweens.length;
                    r < i;
                    r++
                )
                    l.tweens[r].run(n);
                return (
                    s.notifyWith(o, [l, n, t]),
                    n < 1 && i
                        ? t
                        : (i || s.notifyWith(o, [l, 1, 0]),
                          s.resolveWith(o, [l]),
                          !1)
                );
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(
                    !0,
                    { specialEasing: {}, easing: S.easing._default },
                    t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(
                        o,
                        l.opts,
                        e,
                        t,
                        l.opts.specialEasing[e] || l.opts.easing
                    );
                    return l.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return (
                        e
                            ? (s.notifyWith(o, [l, 1, 0]),
                              s.resolveWith(o, [l, e]))
                            : s.rejectWith(o, [l, e]),
                        this
                    );
                },
            }),
            c = l.props;
        for (
            !(function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (
                        ((i = t[(r = X(n))]),
                        (o = e[n]),
                        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                        n !== r && ((e[r] = o), delete e[n]),
                        (a = S.cssHooks[r]) && ("expand" in a))
                    )
                        for (n in ((o = a.expand(o)), delete e[r], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing);
            r < i;
            r++
        )
            if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
                return (
                    m(n.stop) &&
                        (S._queueHooks(l.elem, l.opts.queue).stop =
                            n.stop.bind(n)),
                    n
                );
        return (
            S.map(c, ut, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
            S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (S.Animation = S.extend(lt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
            for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                    (lt.tweeners[n] = lt.tweeners[n] || []),
                    lt.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    v = Y.get(e, "fxshow");
                for (r in (n.queue ||
                    (null == (a = S._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--,
                                S.queue(e, "fx").length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), rt.test(i))) {
                        if (
                            (delete t[r],
                            (o = o || "toggle" === i),
                            i === (g ? "hide" : "show"))
                        ) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        d[r] = (v && v[r]) || S.style(e, r);
                    }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                    for (r in (f &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (l = v && v.display) &&
                            (l = Y.get(e, "display")),
                        "none" === (c = S.css(e, "display")) &&
                            (l
                                ? (c = l)
                                : (le([e], !0),
                                  (l = e.style.display || l),
                                  (c = S.css(e, "display")),
                                  le([e]))),
                        ("inline" === c ||
                            ("inline-block" === c && null != l)) &&
                            "none" === S.css(e, "float") &&
                            (u ||
                                (p.done(function () {
                                    h.display = l;
                                }),
                                null == l &&
                                    ((c = h.display),
                                    (l = "none" === c ? "" : c))),
                            (h.display = "inline-block"))),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        p.always(function () {
                            (h.overflow = n.overflow[0]),
                                (h.overflowX = n.overflow[1]),
                                (h.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    d))
                        u ||
                            (v
                                ? "hidden" in v && (g = v.hidden)
                                : (v = Y.access(e, "fxshow", { display: l })),
                            o && (v.hidden = !g),
                            g && le([e], !0),
                            p.done(function () {
                                for (r in (g || le([e]),
                                Y.remove(e, "fxshow"),
                                d))
                                    S.style(e, r, d[r]);
                            })),
                            (u = ut(g ? v[r] : 0, r, p)),
                            r in v ||
                                ((v[r] = u.start),
                                g && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
        },
    })),
        (S.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? S.extend({}, e)
                    : {
                          complete: n || (!n && t) || (m(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !m(t) && t),
                      };
            return (
                S.fx.off
                    ? (r.duration = 0)
                    : "number" != typeof r.duration &&
                      (r.duration in S.fx.speeds
                          ? (r.duration = S.fx.speeds[r.duration])
                          : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    m(r.old) && r.old.call(this),
                        r.queue && S.dequeue(this, r.queue);
                }),
                r
            );
        }),
        S.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (t, e, n, r) {
                var i = S.isEmptyObject(t),
                    o = S.speed(e, n, r),
                    a = function () {
                        var e = lt(this, S.extend({}, t), o);
                        (i || Y.get(this, "finish")) && e.stop(!0);
                    };
                return (
                    (a.finish = a),
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (i, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = S.timers,
                            r = Y.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && it.test(t) && a(r[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this ||
                                (null != i && n[t].queue !== i) ||
                                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || S.dequeue(this, i);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e,
                            t = Y.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = S.timers,
                            o = n ? n.length : 0;
                        for (
                            t.finish = !0,
                                S.queue(this, a, []),
                                r && r.stop && r.stop.call(this, !0),
                                e = i.length;
                            e--;

                        )
                            i[e].elem === this &&
                                i[e].queue === a &&
                                (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        S.each(["toggle", "show", "hide"], function (e, r) {
            var i = S.fn[r];
            S.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e
                    ? i.apply(this, arguments)
                    : this.animate(st(r, !0), e, t, n);
            };
        }),
        S.each(
            {
                slideDown: st("show"),
                slideUp: st("hide"),
                slideToggle: st("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, r) {
                S.fn[e] = function (e, t, n) {
                    return this.animate(r, e, t, n);
                };
            }
        ),
        (S.timers = []),
        (S.fx.tick = function () {
            var e,
                t = 0,
                n = S.timers;
            for (Ze = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (Ze = void 0);
        }),
        (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
            et || ((et = !0), ot());
        }),
        (S.fx.stop = function () {
            et = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function (r, e) {
            return (
                (r = (S.fx && S.fx.speeds[r]) || r),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function () {
                        C.clearTimeout(n);
                    };
                })
            );
        }),
        (tt = E.createElement("input")),
        (nt = E.createElement("select").appendChild(E.createElement("option"))),
        (tt.type = "checkbox"),
        (y.checkOn = "" !== tt.value),
        (y.optSelected = nt.selected),
        ((tt = E.createElement("input")).value = "t"),
        (tt.type = "radio"),
        (y.radioValue = "t" === tt.value);
    var ct,
        ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e);
            });
        },
    }),
        S.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? S.prop(e, t, n)
                        : ((1 === o && S.isXMLDoc(e)) ||
                              (i =
                                  S.attrHooks[t.toLowerCase()] ||
                                  (S.expr.match.bool.test(t) ? ct : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void S.removeAttr(e, t)
                                  : i &&
                                    "set" in i &&
                                    void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = S.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return (
                                e.setAttribute("type", t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (ct = {
            set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = ft[t] || S.find.attr;
            ft[t] = function (e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return (
                    n ||
                        ((i = ft[o]),
                        (ft[o] = r),
                        (r = null != a(e, t, n) ? o : null),
                        (ft[o] = i)),
                    r
                );
            };
        });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(P) || []).join(" ");
    }
    function gt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function vt(e) {
        return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e];
            });
        },
    }),
        S.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && S.isXMLDoc(e)) ||
                            ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                        void 0 !== n
                            ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e[t] = n)
                            : i && "get" in i && null !== (r = i.get(e, t))
                            ? r
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = S.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : pt.test(e.nodeName) ||
                              (dt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
            (S.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return (
                        t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    var t = e.parentNode;
                    t &&
                        (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        S.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                S.propFix[this.toLowerCase()] = this;
            }
        ),
        S.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).addClass(t.call(this, e, gt(this)));
                    });
                if ((e = vt(t)).length)
                    while ((n = this[u++]))
                        if (
                            ((i = gt(n)),
                            (r = 1 === n.nodeType && " " + ht(i) + " "))
                        ) {
                            a = 0;
                            while ((o = e[a++]))
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = ht(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).removeClass(t.call(this, e, gt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = vt(t)).length)
                    while ((n = this[u++]))
                        if (
                            ((i = gt(n)),
                            (r = 1 === n.nodeType && " " + ht(i) + " "))
                        ) {
                            a = 0;
                            while ((o = e[a++]))
                                while (-1 < r.indexOf(" " + o + " "))
                                    r = r.replace(" " + o + " ", " ");
                            i !== (s = ht(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (i, t) {
                var o = typeof i,
                    a = "string" === o || Array.isArray(i);
                return "boolean" == typeof t && a
                    ? t
                        ? this.addClass(i)
                        : this.removeClass(i)
                    : m(i)
                    ? this.each(function (e) {
                          S(this).toggleClass(i.call(this, e, gt(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, r;
                          if (a) {
                              (t = 0), (n = S(this)), (r = vt(i));
                              while ((e = r[t++]))
                                  n.hasClass(e)
                                      ? n.removeClass(e)
                                      : n.addClass(e);
                          } else (void 0 !== i && "boolean" !== o) || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                t = " " + e + " ";
                while ((n = this[r++]))
                    if (
                        1 === n.nodeType &&
                        -1 < (" " + ht(gt(n)) + " ").indexOf(t)
                    )
                        return !0;
                return !1;
            },
        });
    var yt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length
                ? ((i = m(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = i ? n.call(this, e, S(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : Array.isArray(t) &&
                                (t = S.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((r =
                              S.valHooks[this.type] ||
                              S.valHooks[this.nodeName.toLowerCase()]) &&
                              "set" in r &&
                              void 0 !== r.set(this, t, "value")) ||
                              (this.value = t));
                  }))
                : t
                ? (r =
                      S.valHooks[t.type] ||
                      S.valHooks[t.nodeName.toLowerCase()]) &&
                  "get" in r &&
                  void 0 !== (e = r.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(yt, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        S.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : ht(S.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (
                                ((n = i[r]).selected || r === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled ||
                                    !A(n.parentNode, "optgroup"))
                            ) {
                                if (((t = S(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = S.makeArray(t),
                            a = i.length;
                        while (a--)
                            ((r = i[a]).selected =
                                -1 < S.inArray(S.valHooks.option.get(r), o)) &&
                                (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return (e.checked = -1 < S.inArray(S(e).val(), t));
                },
            }),
                y.checkOn ||
                    (S.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                            ? "on"
                            : e.value;
                    });
        }),
        (y.focusin = "onfocusin" in C);
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function (e) {
            e.stopPropagation();
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((o = f = a = n = n || E),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !mt.test(d + S.event.triggered) &&
                    (-1 < d.indexOf(".") &&
                        ((d = (h = d.split(".")).shift()), h.sort()),
                    (u = d.indexOf(":") < 0 && "on" + d),
                    ((e = e[S.expando]
                        ? e
                        : new S.Event(d, "object" == typeof e && e)).isTrigger =
                        r ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.rnamespace = e.namespace
                        ? new RegExp(
                              "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : S.makeArray(t, [e])),
                    (c = S.event.special[d] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!r && !c.noBubble && !x(n)) {
                    for (
                        s = c.delegateType || d,
                            mt.test(s + d) || (o = o.parentNode);
                        o;
                        o = o.parentNode
                    )
                        p.push(o), (a = o);
                    a === (n.ownerDocument || E) &&
                        p.push(a.defaultView || a.parentWindow || C);
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                        (l =
                            (Y.get(o, "events") || Object.create(null))[
                                e.type
                            ] && Y.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) &&
                            l.apply &&
                            V(o) &&
                            ((e.result = l.apply(o, t)),
                            !1 === e.result && e.preventDefault());
                return (
                    (e.type = d),
                    r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !V(n) ||
                        (u &&
                            m(n[d]) &&
                            !x(n) &&
                            ((a = n[u]) && (n[u] = null),
                            (S.event.triggered = d),
                            e.isPropagationStopped() &&
                                f.addEventListener(d, xt),
                            n[d](),
                            e.isPropagationStopped() &&
                                f.removeEventListener(d, xt),
                            (S.event.triggered = void 0),
                            a && (n[u] = a))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t);
        },
    }),
        S.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    S.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
            },
        }),
        y.focusin ||
            S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
                var i = function (e) {
                    S.event.simulate(r, e.target, S.event.fix(e));
                };
                S.event.special[r] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Y.access(e, r);
                        t || e.addEventListener(n, i, !0),
                            Y.access(e, r, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Y.access(e, r) - 1;
                        t
                            ? Y.access(e, r, t)
                            : (e.removeEventListener(n, i, !0), Y.remove(e, r));
                    },
                };
            });
    var bt = C.location,
        wt = { guid: Date.now() },
        Tt = /\?/;
    S.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
                S.error(
                    "Invalid XML: " +
                        (n
                            ? S.map(n.childNodes, function (e) {
                                  return e.textContent;
                              }).join("\n")
                            : e)
                ),
            t
        );
    };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;
    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function (e, t) {
                r || Ct.test(n)
                    ? i(n, t)
                    : At(
                          n +
                              "[" +
                              ("object" == typeof t && null != t ? e : "") +
                              "]",
                          t,
                          r,
                          i
                      );
            });
        else if (r || "object" !== w(e)) i(n, e);
        else for (t in e) At(n + "[" + t + "]", e[t], r, i);
    }
    (S.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) At(n, e[n], t, i);
        return r.join("&");
    }),
        S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !S(this).is(":disabled") &&
                            kt.test(this.nodeName) &&
                            !St.test(e) &&
                            (this.checked || !pe.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = S(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? S.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(Et, "\r\n"),
                                  };
                              })
                            : { name: t.name, value: n.replace(Et, "\r\n") };
                    })
                    .get();
            },
        });
    var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = E.createElement("a");
    function It(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while ((n = i[r++]))
                    "+" === n[0]
                        ? ((n = n.slice(1) || "*"),
                          (o[n] = o[n] || []).unshift(t))
                        : (o[n] = o[n] || []).push(t);
        };
    }
    function Wt(t, i, o, a) {
        var s = {},
            u = t === Pt;
        function l(e) {
            var r;
            return (
                (s[e] = !0),
                S.each(t[e] || [], function (e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n]
                        ? u
                            ? !(r = n)
                            : void 0
                        : (i.dataTypes.unshift(n), l(n), !1);
                }),
                r
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Ft(e, t) {
        var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e;
    }
    (Mt.href = bt.href),
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: bt.href,
                type: "GET",
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        bt.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
            },
            ajaxPrefilter: It(Ot),
            ajaxTransport: It(Pt),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    n,
                    d,
                    r,
                    h,
                    g,
                    i,
                    o,
                    v = S.ajaxSetup({}, t),
                    y = v.context || v,
                    m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                    x = S.Deferred(),
                    b = S.Callbacks("once memory"),
                    w = v.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while ((t = qt.exec(p)))
                                        n[t[1].toLowerCase() + " "] = (
                                            n[t[1].toLowerCase() + " "] || []
                                        ).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return h ? p : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == h &&
                                    ((e = s[e.toLowerCase()] =
                                        s[e.toLowerCase()] || e),
                                    (a[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == h && (v.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        },
                    };
                if (
                    (x.promise(T),
                    (v.url = ((e || v.url || bt.href) + "").replace(
                        Ht,
                        bt.protocol + "//"
                    )),
                    (v.type = t.method || t.type || v.method || v.type),
                    (v.dataTypes = (v.dataType || "*")
                        .toLowerCase()
                        .match(P) || [""]),
                    null == v.crossDomain)
                ) {
                    r = E.createElement("a");
                    try {
                        (r.href = v.url),
                            (r.href = r.href),
                            (v.crossDomain =
                                Mt.protocol + "//" + Mt.host !=
                                r.protocol + "//" + r.host);
                    } catch (e) {
                        v.crossDomain = !0;
                    }
                }
                if (
                    (v.data &&
                        v.processData &&
                        "string" != typeof v.data &&
                        (v.data = S.param(v.data, v.traditional)),
                    Wt(Ot, v, t, T),
                    h)
                )
                    return T;
                for (i in ((g = S.event && v.global) &&
                    0 == S.active++ &&
                    S.event.trigger("ajaxStart"),
                (v.type = v.type.toUpperCase()),
                (v.hasContent = !Lt.test(v.type)),
                (f = v.url.replace(jt, "")),
                v.hasContent
                    ? v.data &&
                      v.processData &&
                      0 ===
                          (v.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                      (v.data = v.data.replace(Nt, "+"))
                    : ((o = v.url.slice(f.length)),
                      v.data &&
                          (v.processData || "string" == typeof v.data) &&
                          ((f += (Tt.test(f) ? "&" : "?") + v.data),
                          delete v.data),
                      !1 === v.cache &&
                          ((f = f.replace(Dt, "$1")),
                          (o =
                              (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
                      (v.url = f + o)),
                v.ifModified &&
                    (S.lastModified[f] &&
                        T.setRequestHeader(
                            "If-Modified-Since",
                            S.lastModified[f]
                        ),
                    S.etag[f] &&
                        T.setRequestHeader("If-None-Match", S.etag[f])),
                ((v.data && v.hasContent && !1 !== v.contentType) ||
                    t.contentType) &&
                    T.setRequestHeader("Content-Type", v.contentType),
                T.setRequestHeader(
                    "Accept",
                    v.dataTypes[0] && v.accepts[v.dataTypes[0]]
                        ? v.accepts[v.dataTypes[0]] +
                              ("*" !== v.dataTypes[0]
                                  ? ", " + Rt + "; q=0.01"
                                  : "")
                        : v.accepts["*"]
                ),
                v.headers))
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                    return T.abort();
                if (
                    ((u = "abort"),
                    b.add(v.complete),
                    T.done(v.success),
                    T.fail(v.error),
                    (c = Wt(Pt, v, t, T)))
                ) {
                    if (
                        ((T.readyState = 1),
                        g && m.trigger("ajaxSend", [T, v]),
                        h)
                    )
                        return T;
                    v.async &&
                        0 < v.timeout &&
                        (d = C.setTimeout(function () {
                            T.abort("timeout");
                        }, v.timeout));
                    try {
                        (h = !1), c.send(a, l);
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                        ((h = !0),
                        d && C.clearTimeout(d),
                        (c = void 0),
                        (p = r || ""),
                        (T.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s = e.contents,
                                    u = e.dataTypes;
                                while ("*" === u[0])
                                    u.shift(),
                                        void 0 === r &&
                                            (r =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    "Content-Type"
                                                ));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (
                                            !u[0] ||
                                            e.converters[i + " " + u[0]]
                                        ) {
                                            o = i;
                                            break;
                                        }
                                        a || (a = i);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(v, T, n)),
                        !i &&
                            -1 < S.inArray("script", v.dataTypes) &&
                            S.inArray("json", v.dataTypes) < 0 &&
                            (v.converters["text script"] = function () {}),
                        (s = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if (
                                    (e.responseFields[o] &&
                                        (n[e.responseFields[o]] = t),
                                    !u &&
                                        r &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (u = o),
                                    (o = c.shift()))
                                )
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (
                                            !(a = l[u + " " + o] || l["* " + o])
                                        )
                                            for (i in l)
                                                if (
                                                    (s = i.split(" "))[1] ===
                                                        o &&
                                                    (a =
                                                        l[u + " " + s[0]] ||
                                                        l["* " + s[0]])
                                                ) {
                                                    !0 === a
                                                        ? (a = l[i])
                                                        : !0 !== l[i] &&
                                                          ((o = s[0]),
                                                          c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e["throws"]) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a
                                                            ? e
                                                            : "No conversion from " +
                                                              u +
                                                              " to " +
                                                              o,
                                                    };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(v, s, T, i)),
                        i
                            ? (v.ifModified &&
                                  ((u = T.getResponseHeader("Last-Modified")) &&
                                      (S.lastModified[f] = u),
                                  (u = T.getResponseHeader("etag")) &&
                                      (S.etag[f] = u)),
                              204 === e || "HEAD" === v.type
                                  ? (l = "nocontent")
                                  : 304 === e
                                  ? (l = "notmodified")
                                  : ((l = s.state),
                                    (o = s.data),
                                    (i = !(a = s.error))))
                            : ((a = l),
                              (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (t || l) + ""),
                        i
                            ? x.resolveWith(y, [o, l, T])
                            : x.rejectWith(y, [T, l, a]),
                        T.statusCode(w),
                        (w = void 0),
                        g &&
                            m.trigger(i ? "ajaxSuccess" : "ajaxError", [
                                T,
                                v,
                                i ? o : a,
                            ]),
                        b.fireWith(y, [T, l]),
                        g &&
                            (m.trigger("ajaxComplete", [T, v]),
                            --S.active || S.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
            },
        }),
        S.each(["get", "post"], function (e, i) {
            S[i] = function (e, t, n, r) {
                return (
                    m(t) && ((r = r || n), (n = t), (t = void 0)),
                    S.ajax(
                        S.extend(
                            {
                                url: e,
                                type: i,
                                dataType: r,
                                data: t,
                                success: n,
                            },
                            S.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || "");
        }),
        (S._evalUrl = function (e, t, n) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    S.globalEval(e, t, n);
                },
            });
        }),
        S.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (m(e) && (e = e.call(this[0])),
                        (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild)
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return m(n)
                    ? this.each(function (e) {
                          S(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = S(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = m(t);
                return this.each(function (e) {
                    S(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            S(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
        }),
        (S.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (S.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var Bt = { 0: 200, 1223: 204 },
        $t = S.ajaxSettings.xhr();
    (y.cors = !!$t && "withCredentials" in $t),
        (y.ajax = $t = !!$t),
        S.ajaxTransport(function (i) {
            var o, a;
            if (y.cors || ($t && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if (
                            (r.open(
                                i.type,
                                i.url,
                                i.async,
                                i.username,
                                i.password
                            ),
                            i.xhrFields)
                        )
                            for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType &&
                            r.overrideMimeType &&
                            r.overrideMimeType(i.mimeType),
                        i.crossDomain ||
                            e["X-Requested-With"] ||
                            (e["X-Requested-With"] = "XMLHttpRequest"),
                        e))
                            r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o =
                                        a =
                                        r.onload =
                                        r.onerror =
                                        r.onabort =
                                        r.ontimeout =
                                        r.onreadystatechange =
                                            null),
                                    "abort" === e
                                        ? r.abort()
                                        : "error" === e
                                        ? "number" != typeof r.status
                                            ? t(0, "error")
                                            : t(r.status, r.statusText)
                                        : t(
                                              Bt[r.status] || r.status,
                                              r.statusText,
                                              "text" !==
                                                  (r.responseType || "text") ||
                                                  "string" !=
                                                      typeof r.responseText
                                                  ? { binary: r.response }
                                                  : { text: r.responseText },
                                              r.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o("error")),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                      4 === r.readyState &&
                                          C.setTimeout(function () {
                                              o && a();
                                          });
                                  }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return S.globalEval(e), e;
                },
            },
        }),
        S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
        }),
        S.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = S("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (i = function (e) {
                                    r.remove(),
                                        (i = null),
                                        e &&
                                            t(
                                                "error" === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            E.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var _t,
        zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return (this[e] = !0), e;
        },
    }),
        S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
                i,
                o,
                a =
                    !1 !== e.jsonp &&
                    (Ut.test(e.url)
                        ? "url"
                        : "string" == typeof e.data &&
                          0 ===
                              (e.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          Ut.test(e.data) &&
                          "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback =
                        m(e.jsonpCallback)
                            ? e.jsonpCallback()
                            : e.jsonpCallback),
                    a
                        ? (e[a] = e[a].replace(Ut, "$1" + r))
                        : !1 !== e.jsonp &&
                          (e.url +=
                              (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    (e.converters["script json"] = function () {
                        return o || S.error(r + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = C[r]),
                    (C[r] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === i ? S(C).removeProp(r) : (C[r] = i),
                            e[r] &&
                                ((e.jsonpCallback = t.jsonpCallback),
                                zt.push(r)),
                            o && m(i) && i(o[0]),
                            (o = i = void 0);
                    }),
                    "script"
                );
        }),
        (y.createHTMLDocument =
            (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
            2 === _t.childNodes.length)),
        (S.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                      (y.createHTMLDocument
                          ? (((r = (t =
                                E.implementation.createHTMLDocument(
                                    ""
                                )).createElement("base")).href =
                                E.location.href),
                            t.head.appendChild(r))
                          : (t = E)),
                  (o = !n && []),
                  (i = N.exec(e))
                      ? [t.createElement(i[1])]
                      : ((i = xe([e], t, o)),
                        o && o.length && S(o).remove(),
                        S.merge([], i.childNodes)));
            var r, i, o;
        }),
        (S.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                    ? ((n = t), (t = void 0))
                    : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                    S.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t,
                    })
                        .done(function (e) {
                            (o = arguments),
                                a.html(
                                    r
                                        ? S("<div>")
                                              .append(S.parseHTML(e))
                                              .find(r)
                                        : e
                                );
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(
                                            this,
                                            o || [e.responseText, t, e]
                                        );
                                    });
                                }
                        ),
                this
            );
        }),
        (S.expr.pseudos.animated = function (t) {
            return S.grep(S.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (S.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = S.css(e, "position"),
                    c = S(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = S.css(e, "top")),
                    (u = S.css(e, "left")),
                    ("absolute" === l || "fixed" === l) &&
                    -1 < (o + u).indexOf("auto")
                        ? ((a = (r = c.position()).top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    m(t) && (t = t.call(e, n, S.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f);
            },
        }),
        S.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              S.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    r = this[0];
                return r
                    ? r.getClientRects().length
                        ? ((e = r.getBoundingClientRect()),
                          (n = r.ownerDocument.defaultView),
                          {
                              top: e.top + n.pageYOffset,
                              left: e.left + n.pageXOffset,
                          })
                        : { top: 0, left: 0 }
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === S.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()),
                            (n = r.ownerDocument),
                            (e = r.offsetParent || n.documentElement);
                        while (
                            e &&
                            (e === n.body || e === n.documentElement) &&
                            "static" === S.css(e, "position")
                        )
                            e = e.parentNode;
                        e &&
                            e !== r &&
                            1 === e.nodeType &&
                            (((i = S(e).offset()).top += S.css(
                                e,
                                "borderTopWidth",
                                !0
                            )),
                            (i.left += S.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - i.top - S.css(r, "marginTop", !0),
                        left: t.left - i.left - S.css(r, "marginLeft", !0),
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === S.css(e, "position"))
                        e = e.offsetParent;
                    return e || re;
                });
            },
        }),
        S.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (t, i) {
                var o = "pageYOffset" === i;
                S.fn[t] = function (e) {
                    return $(
                        this,
                        function (e, t, n) {
                            var r;
                            if (
                                (x(e)
                                    ? (r = e)
                                    : 9 === e.nodeType && (r = e.defaultView),
                                void 0 === n)
                            )
                                return r ? r[i] : e[t];
                            r
                                ? r.scrollTo(
                                      o ? r.pageXOffset : n,
                                      o ? n : r.pageYOffset
                                  )
                                : (e[t] = n);
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }
        ),
        S.each(["top", "left"], function (e, n) {
            S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
                if (t)
                    return (
                        (t = We(e, n)),
                        Pe.test(t) ? S(e).position()[n] + "px" : t
                    );
            });
        }),
        S.each({ Height: "height", Width: "width" }, function (a, s) {
            S.each(
                { padding: "inner" + a, content: s, "": "outer" + a },
                function (r, o) {
                    S.fn[o] = function (e, t) {
                        var n =
                                arguments.length &&
                                (r || "boolean" != typeof e),
                            i =
                                r ||
                                (!0 === e || !0 === t ? "margin" : "border");
                        return $(
                            this,
                            function (e, t, n) {
                                var r;
                                return x(e)
                                    ? 0 === o.indexOf("outer")
                                        ? e["inner" + a]
                                        : e.document.documentElement[
                                              "client" + a
                                          ]
                                    : 9 === e.nodeType
                                    ? ((r = e.documentElement),
                                      Math.max(
                                          e.body["scroll" + a],
                                          r["scroll" + a],
                                          e.body["offset" + a],
                                          r["offset" + a],
                                          r["client" + a]
                                      ))
                                    : void 0 === n
                                    ? S.css(e, t, i)
                                    : S.style(e, t, n, i);
                            },
                            s,
                            n ? e : void 0,
                            n
                        );
                    };
                }
            );
        }),
        S.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                S.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        S.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        S.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function (e, n) {
                S.fn[n] = function (e, t) {
                    return 0 < arguments.length
                        ? this.on(n, null, e, t)
                        : this.trigger(n);
                };
            }
        );
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
                (r = s.call(arguments, 2)),
                ((i = function () {
                    return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid =
                    e.guid || S.guid++),
                i
            );
    }),
        (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
        }),
        (S.isArray = Array.isArray),
        (S.parseJSON = JSON.parse),
        (S.nodeName = A),
        (S.isFunction = m),
        (S.isWindow = x),
        (S.camelCase = X),
        (S.type = w),
        (S.now = Date.now),
        (S.isNumeric = function (e) {
            var t = S.type(e);
            return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
        }),
        (S.trim = function (e) {
            return null == e ? "" : (e + "").replace(Xt, "");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return S;
            });
    var Vt = C.jQuery,
        Gt = C.$;
    return (
        (S.noConflict = function (e) {
            return (
                C.$ === S && (C.$ = Gt),
                e && C.jQuery === S && (C.jQuery = Vt),
                S
            );
        }),
        "undefined" == typeof e && (C.jQuery = C.$ = S),
        S
    );
});

/* Slick Slider */
!(function (i) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], i)
        : "undefined" != typeof exports
        ? (module.exports = i(require("jquery")))
        : i(jQuery);
})(function (i) {
    "use strict";
    var e = window.Slick || {};
    ((e = (function () {
        var e = 0;
        return function (t, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = "hidden"),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(t)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = "visibilitychange"),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(t).data("slick") || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                void 0 !== document.mozHidden
                    ? ((n.hidden = "mozHidden"),
                      (n.visibilityChange = "mozvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((n.hidden = "webkitHidden"),
                      (n.visibilityChange = "webkitvisibilitychange")),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = e++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        };
    })()).prototype.activateADA = function () {
        this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
    }),
        (e.prototype.addSlide = e.prototype.slickAdd =
            function (e, t, o) {
                var s = this;
                if ("boolean" == typeof t) (o = t), (t = null);
                else if (t < 0 || t >= s.slideCount) return !1;
                s.unload(),
                    "number" == typeof t
                        ? 0 === t && 0 === s.$slides.length
                            ? i(e).appendTo(s.$slideTrack)
                            : o
                            ? i(e).insertBefore(s.$slides.eq(t))
                            : i(e).insertAfter(s.$slides.eq(t))
                        : !0 === o
                        ? i(e).prependTo(s.$slideTrack)
                        : i(e).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (e, t) {
                        i(t).attr("data-slick-index", e);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
        (e.prototype.animateHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function (e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
                !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                !1 === s.transformsEnabled
                    ? !1 === s.options.vertical
                        ? s.$slideTrack.animate(
                              { left: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                        : s.$slideTrack.animate(
                              { top: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                    : !1 === s.cssTransitions
                    ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                      i({ animStart: s.currentLeft }).animate(
                          { animStart: e },
                          {
                              duration: s.options.speed,
                              easing: s.options.easing,
                              step: function (i) {
                                  (i = Math.ceil(i)),
                                      !1 === s.options.vertical
                                          ? ((o[s.animType] =
                                                "translate(" + i + "px, 0px)"),
                                            s.$slideTrack.css(o))
                                          : ((o[s.animType] =
                                                "translate(0px," + i + "px)"),
                                            s.$slideTrack.css(o));
                              },
                              complete: function () {
                                  t && t.call();
                              },
                          }
                      ))
                    : (s.applyTransition(),
                      (e = Math.ceil(e)),
                      !1 === s.options.vertical
                          ? (o[s.animType] =
                                "translate3d(" + e + "px, 0px, 0px)")
                          : (o[s.animType] =
                                "translate3d(0px," + e + "px, 0px)"),
                      s.$slideTrack.css(o),
                      t &&
                          setTimeout(function () {
                              s.disableTransition(), t.call();
                          }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function (e) {
            var t = this.getNavTarget();
            null !== t &&
                "object" == typeof t &&
                t.each(function () {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            !1 === e.options.fade
                ? (t[e.transitionType] =
                      e.transformType +
                      " " +
                      e.options.speed +
                      "ms " +
                      e.options.cssEase)
                : (t[e.transitionType] =
                      "opacity " + e.options.speed + "ms " + e.options.cssEase),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow &&
                    (i.autoPlayTimer = setInterval(
                        i.autoPlayIterator,
                        i.options.autoplaySpeed
                    ));
        }),
        (e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (!1 === i.options.infinite &&
                    (1 === i.direction &&
                    i.currentSlide + 1 === i.slideCount - 1
                        ? (i.direction = 0)
                        : 0 === i.direction &&
                          ((e = i.currentSlide - i.options.slidesToScroll),
                          i.currentSlide - 1 == 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass(
                    "slick-arrow"
                )),
                (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.htmlExpr.test(e.options.prevArrow) &&
                          e.$prevArrow.prependTo(e.options.appendArrows),
                      e.htmlExpr.test(e.options.nextArrow) &&
                          e.$nextArrow.appendTo(e.options.appendArrows),
                      !0 !== e.options.infinite &&
                          e.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"))
                    : e.$prevArrow
                          .add(e.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function () {
            var e,
                t,
                o = this;
            if (!0 === o.options.dots) {
                for (
                    o.$slider.addClass("slick-dotted"),
                        t = i("<ul />").addClass(o.options.dotsClass),
                        e = 0;
                    e <= o.getDotCount();
                    e += 1
                )
                    t.append(
                        i("<li />").append(
                            o.options.customPaging.call(this, o, e)
                        )
                    );
                (o.$dots = t.appendTo(o.options.appendDots)),
                    o.$dots.find("li").first().addClass("slick-active");
            }
        }),
        (e.prototype.buildOut = function () {
            var e = this;
            (e.$slides = e.$slider
                .children(e.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                    i(t)
                        .attr("data-slick-index", e)
                        .data("originalStyling", i(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack =
                    0 === e.slideCount
                        ? i('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides
                              .wrapAll('<div class="slick-track"/>')
                              .parent()),
                (e.$list = e.$slideTrack
                    .wrap('<div class="slick-list"/>')
                    .parent()),
                e.$slideTrack.css("opacity", 0),
                (!0 !== e.options.centerMode &&
                    !0 !== e.options.swipeToSlide) ||
                    (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider)
                    .not("[src]")
                    .addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                !0 === e.options.draggable && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function () {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (
                ((o = document.createDocumentFragment()),
                (n = l.$slider.children()),
                l.options.rows > 1)
            ) {
                for (
                    r = l.options.slidesPerRow * l.options.rows,
                        s = Math.ceil(n.length / r),
                        i = 0;
                    i < s;
                    i++
                ) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                            width: 100 / l.options.slidesPerRow + "%",
                            display: "inline-block",
                        });
            }
        }),
        (e.prototype.checkResponsive = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (
                ("window" === r.respondTo
                    ? (n = a)
                    : "slider" === r.respondTo
                    ? (n = d)
                    : "min" === r.respondTo && (n = Math.min(a, d)),
                r.options.responsive &&
                    r.options.responsive.length &&
                    null !== r.options.responsive)
            ) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) &&
                        (!1 === r.originalSettings.mobileFirst
                            ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                            : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                          ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                    : null !== r.activeBreakpoint &&
                      ((r.activeBreakpoint = null),
                      (r.options = r.originalSettings),
                      !0 === e && (r.currentSlide = r.options.initialSlide),
                      r.refresh(e),
                      (l = s)),
                    e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
            }
        }),
        (e.prototype.changeSlide = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch (
                (l.is("a") && e.preventDefault(),
                l.is("li") || (l = l.closest("li")),
                (n = r.slideCount % r.options.slidesToScroll != 0),
                (o = n
                    ? 0
                    : (r.slideCount - r.currentSlide) %
                      r.options.slidesToScroll),
                e.data.message)
            ) {
                case "previous":
                    (s =
                        0 === o
                            ? r.options.slidesToScroll
                            : r.options.slidesToShow - o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    (s = 0 === o ? r.options.slidesToScroll : o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d =
                        0 === e.data.index
                            ? 0
                            : e.data.index ||
                              l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function (i) {
            var e, t;
            if (
                ((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])
            )
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i("li", e.$dots)
                    .off("click.slick", e.changeSlide)
                    .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                    .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
                !0 === e.options.accessibility &&
                    e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow &&
                        e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow &&
                        e.$nextArrow.off("click.slick", e.changeSlide),
                    !0 === e.options.accessibility &&
                        (e.$prevArrow &&
                            e.$prevArrow.off("keydown.slick", e.keyHandler),
                        e.$nextArrow &&
                            e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off(
                    "touchcancel.slick mouseleave.slick",
                    e.swipeHandler
                ),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                !0 === e.options.accessibility &&
                    e.$list.off("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .off("click.slick", e.selectHandler),
                i(window).off(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    e.orientationChange
                ),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).off(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                );
        }),
        (e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
            var i,
                e = this;
            e.options.rows > 1 &&
                ((i = e.$slides.children().children()).removeAttr("style"),
                e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function (i) {
            !1 === this.shouldClick &&
                (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                    t.$prevArrow.length &&
                    (t.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.prevArrow) &&
                        t.$prevArrow.remove()),
                t.$nextArrow &&
                    t.$nextArrow.length &&
                    (t.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.nextArrow) &&
                        t.$nextArrow.remove()),
                t.$slides &&
                    (t.$slides
                        .removeClass(
                            "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                            i(this).attr(
                                "style",
                                i(this).data("originalStyling")
                            );
                        }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
                e || t.$slider.trigger("destroy", [t]);
        }),
        (e.prototype.disableTransition = function (i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ""),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function (i, e) {
            var t = this;
            !1 === t.cssTransitions
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
                  t.$slides
                      .eq(i)
                      .animate(
                          { opacity: 1 },
                          t.options.speed,
                          t.options.easing,
                          e
                      ))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                  e &&
                      setTimeout(function () {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (i) {
            var e = this;
            !1 === e.cssTransitions
                ? e.$slides
                      .eq(i)
                      .animate(
                          { opacity: 0, zIndex: e.options.zIndex - 2 },
                          e.options.speed,
                          e.options.easing
                      )
                : (e.applyTransition(i),
                  e.$slides
                      .eq(i)
                      .css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter =
            function (i) {
                var e = this;
                null !== i &&
                    ((e.$slidesCache = e.$slides),
                    e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                    e.reinit());
            }),
        (e.prototype.focusHandler = function () {
            var e = this;
            e.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*", function (t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus &&
                            ((e.focussed = o.is(":focus")), e.autoPlay());
                    }, 0);
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
            function () {
                return this.currentSlide;
            }),
        (e.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                            (e = t + i.options.slidesToScroll),
                            (t +=
                                i.options.slidesToScroll <=
                                i.options.slidesToShow
                                    ? i.options.slidesToScroll
                                    : i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                        (e = t + i.options.slidesToScroll),
                        (t +=
                            i.options.slidesToScroll <= i.options.slidesToShow
                                ? i.options.slidesToScroll
                                : i.options.slidesToShow);
            else
                o =
                    1 +
                    Math.ceil(
                        (i.slideCount - i.options.slidesToShow) /
                            i.options.slidesToScroll
                    );
            return o - 1;
        }),
        (e.prototype.getLeft = function (i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)),
                !0 === n.options.infinite
                    ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset =
                              n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          !0 === n.options.vertical &&
                              !0 === n.options.centerMode &&
                              (2 === n.options.slidesToShow
                                  ? (s = -1.5)
                                  : 1 === n.options.slidesToShow && (s = -2)),
                          (r = t * n.options.slidesToShow * s)),
                      n.slideCount % n.options.slidesToScroll != 0 &&
                          i + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (i > n.slideCount
                              ? ((n.slideOffset =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    t *
                                    -1))
                              : ((n.slideOffset =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    t *
                                    -1))))
                    : i + n.options.slidesToShow > n.slideCount &&
                      ((n.slideOffset =
                          (i + n.options.slidesToShow - n.slideCount) *
                          n.slideWidth),
                      (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow &&
                    ((n.slideOffset = 0), (r = 0)),
                !0 === n.options.centerMode &&
                n.slideCount <= n.options.slidesToShow
                    ? (n.slideOffset =
                          (n.slideWidth * Math.floor(n.options.slidesToShow)) /
                              2 -
                          (n.slideWidth * n.slideCount) / 2)
                    : !0 === n.options.centerMode && !0 === n.options.infinite
                    ? (n.slideOffset +=
                          n.slideWidth *
                              Math.floor(n.options.slidesToShow / 2) -
                          n.slideWidth)
                    : !0 === n.options.centerMode &&
                      ((n.slideOffset = 0),
                      (n.slideOffset +=
                          n.slideWidth *
                          Math.floor(n.options.slidesToShow / 2))),
                (e =
                    !1 === n.options.vertical
                        ? i * n.slideWidth * -1 + n.slideOffset
                        : i * t * -1 + r),
                !0 === n.options.variableWidth &&
                    ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        !1 === n.options.infinite
                            ? n.$slideTrack.children(".slick-slide").eq(i)
                            : n.$slideTrack
                                  .children(".slick-slide")
                                  .eq(i + n.options.slidesToShow)),
                    (e =
                        !0 === n.options.rtl
                            ? o[0]
                                ? -1 *
                                  (n.$slideTrack.width() -
                                      o[0].offsetLeft -
                                      o.width())
                                : 0
                            : o[0]
                            ? -1 * o[0].offsetLeft
                            : 0),
                    !0 === n.options.centerMode &&
                        ((o =
                            n.slideCount <= n.options.slidesToShow ||
                            !1 === n.options.infinite
                                ? n.$slideTrack.children(".slick-slide").eq(i)
                                : n.$slideTrack
                                      .children(".slick-slide")
                                      .eq(i + n.options.slidesToShow + 1)),
                        (e =
                            !0 === n.options.rtl
                                ? o[0]
                                    ? -1 *
                                      (n.$slideTrack.width() -
                                          o[0].offsetLeft -
                                          o.width())
                                    : 0
                                : o[0]
                                ? -1 * o[0].offsetLeft
                                : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption =
            function (i) {
                return this.options[i];
            }),
        (e.prototype.getNavigableIndexes = function () {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (
                !1 === e.options.infinite
                    ? (i = e.slideCount)
                    : ((t = -1 * e.options.slidesToScroll),
                      (o = -1 * e.options.slidesToScroll),
                      (i = 2 * e.slideCount));
                t < i;

            )
                s.push(t),
                    (t = o + e.options.slidesToScroll),
                    (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function () {
            return this;
        }),
        (e.prototype.getSlideCount = function () {
            var e,
                t,
                o = this;
            return (
                (t =
                    !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
                !0 === o.options.swipeToSlide
                    ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
                          if (
                              n.offsetLeft - t + i(n).outerWidth() / 2 >
                              -1 * o.swipeLeft
                          )
                              return (e = n), !1;
                      }),
                      Math.abs(
                          i(e).attr("data-slick-index") - o.currentSlide
                      ) || 1)
                    : o.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo =
            function (i, e) {
                this.changeSlide(
                    { data: { message: "index", index: parseInt(i) } },
                    e
                );
            }),
        (e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") ||
                (i(t.$slider).addClass("slick-initialized"),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
                e && t.$slider.trigger("init", [t]),
                !0 === t.options.accessibility && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function () {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides
                .add(e.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                null !== e.$dots &&
                    (e.$slides
                        .not(e.$slideTrack.find(".slick-cloned"))
                        .each(function (t) {
                            var s = o.indexOf(t);
                            i(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + e.instanceUid + t,
                                tabindex: -1,
                            }),
                                -1 !== s &&
                                    i(this).attr({
                                        "aria-describedby":
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                    });
                        }),
                    e.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (s) {
                            var n = o[s];
                            i(this).attr({ role: "presentation" }),
                                i(this)
                                    .find("button")
                                    .first()
                                    .attr({
                                        role: "tab",
                                        id:
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                        "aria-controls":
                                            "slick-slide" + e.instanceUid + n,
                                        "aria-label": s + 1 + " of " + t,
                                        "aria-selected": null,
                                        tabindex: "-1",
                                    });
                        })
                        .eq(e.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
            for (
                var s = e.currentSlide, n = s + e.options.slidesToShow;
                s < n;
                s++
            )
                e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow
                    .off("click.slick")
                    .on("click.slick", { message: "previous" }, i.changeSlide),
                i.$nextArrow
                    .off("click.slick")
                    .on("click.slick", { message: "next" }, i.changeSlide),
                !0 === i.options.accessibility &&
                    (i.$prevArrow.on("keydown.slick", i.keyHandler),
                    i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots &&
                (i("li", e.$dots).on(
                    "click.slick",
                    { message: "index" },
                    e.changeSlide
                ),
                !0 === e.options.accessibility &&
                    e.$dots.on("keydown.slick", e.keyHandler)),
                !0 === e.options.dots &&
                    !0 === e.options.pauseOnDotsHover &&
                    i("li", e.$dots)
                        .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                        .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover &&
                (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                    "touchstart.slick mousedown.slick",
                    { action: "start" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchmove.slick mousemove.slick",
                    { action: "move" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchend.slick mouseup.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchcancel.slick mouseleave.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                !0 === e.options.accessibility &&
                    e.$list.on("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                i(window).on(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    i.proxy(e.orientationChange, e)
                ),
                i(window).on(
                    "resize.slick.slick-" + e.instanceUid,
                    i.proxy(e.resize, e)
                ),
                i("[draggable!=true]", e.$slideTrack).on(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).on(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                ),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.show(), i.$nextArrow.show()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.show();
        }),
        (e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === i.keyCode && !0 === e.options.accessibility
                    ? e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? "next" : "previous",
                          },
                      })
                    : 39 === i.keyCode &&
                      !0 === e.options.accessibility &&
                      e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? "previous" : "next",
                          },
                      }));
        }),
        (e.prototype.lazyLoad = function () {
            function e(e) {
                i("img[data-lazy]", e).each(function () {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s =
                            i(this).attr("data-sizes") ||
                            n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    (r.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                                e
                                    .attr("src", t)
                                    .animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr(
                                            "data-lazy data-srcset data-sizes"
                                        ).removeClass("slick-loading");
                                    }),
                                n.$slider.trigger("lazyLoaded", [n, e, t]);
                        });
                    }),
                        (r.onerror = function () {
                            e
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                n.$slider.trigger("lazyLoadError", [n, e, t]);
                        }),
                        (r.src = t);
                });
            }
            var t,
                o,
                s,
                n = this;
            if (
                (!0 === n.options.centerMode
                    ? !0 === n.options.infinite
                        ? (s =
                              (o =
                                  n.currentSlide +
                                  (n.options.slidesToShow / 2 + 1)) +
                              n.options.slidesToShow +
                              2)
                        : ((o = Math.max(
                              0,
                              n.currentSlide - (n.options.slidesToShow / 2 + 1)
                          )),
                          (s =
                              n.options.slidesToShow / 2 +
                              1 +
                              2 +
                              n.currentSlide))
                    : ((o = n.options.infinite
                          ? n.options.slidesToShow + n.currentSlide
                          : n.currentSlide),
                      (s = Math.ceil(o + n.options.slidesToShow)),
                      !0 === n.options.fade &&
                          (o > 0 && o--, s <= n.slideCount && s++)),
                (t = n.$slider.find(".slick-slide").slice(o, s)),
                "anticipated" === n.options.lazyLoad)
            )
                for (
                    var r = o - 1,
                        l = s,
                        d = n.$slider.find(".slick-slide"),
                        a = 0;
                    a < n.options.slidesToScroll;
                    a++
                )
                    r < 0 && (r = n.slideCount - 1),
                        (t = (t = t.add(d.eq(r))).add(d.eq(l))),
                        r--,
                        l++;
            e(t),
                n.slideCount <= n.options.slidesToShow
                    ? e(n.$slider.find(".slick-slide"))
                    : n.currentSlide >= n.slideCount - n.options.slidesToShow
                    ? e(
                          n.$slider
                              .find(".slick-cloned")
                              .slice(0, n.options.slidesToShow)
                      )
                    : 0 === n.currentSlide &&
                      e(
                          n.$slider
                              .find(".slick-cloned")
                              .slice(-1 * n.options.slidesToShow)
                      );
        }),
        (e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({ opacity: 1 }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
                "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext =
            function () {
                this.changeSlide({ data: { message: "next" } });
            }),
        (e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause =
            function () {
                var i = this;
                i.autoPlayClear(), (i.paused = !0);
            }),
        (e.prototype.play = e.prototype.slickPlay =
            function () {
                var i = this;
                i.autoPlay(),
                    (i.options.autoplay = !0),
                    (i.paused = !1),
                    (i.focussed = !1),
                    (i.interrupted = !1);
            }),
        (e.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked ||
                (t.$slider.trigger("afterChange", [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                !0 === t.options.accessibility &&
                    (t.initADA(),
                    t.options.focusOnChange &&
                        i(t.$slides.get(t.currentSlide))
                            .attr("tabindex", 0)
                            .focus()));
        }),
        (e.prototype.prev = e.prototype.slickPrev =
            function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
        (e.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length
                ? ((t = d.first()),
                  (o = t.attr("data-lazy")),
                  (s = t.attr("data-srcset")),
                  (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                  ((r = document.createElement("img")).onload = function () {
                      s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                          t
                              .attr("src", o)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                          !0 === l.options.adaptiveHeight && l.setPosition(),
                          l.$slider.trigger("lazyLoaded", [l, t, o]),
                          l.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                      e < 3
                          ? setTimeout(function () {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (t
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                            l.$slider.trigger("lazyLoadError", [l, t, o]),
                            l.progressiveLazyLoad());
                  }),
                  (r.src = o))
                : l.$slider.trigger("allImagesLoaded", [l]);
        }),
        (e.prototype.refresh = function (e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
                !s.options.infinite &&
                    s.currentSlide > o &&
                    (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
                e ||
                    s.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] &&
                                s.breakpoints[o] === t &&
                                s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t),
                            (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function () {
            var e = this;
            (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount &&
                    0 !== e.currentSlide &&
                    (e.currentSlide =
                        e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                    (e.windowWidth = i(window).width()),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove =
            function (i, e, t) {
                var o = this;
                if (
                    ((i =
                        "boolean" == typeof i
                            ? !0 === (e = i)
                                ? 0
                                : o.slideCount - 1
                            : !0 === e
                            ? --i
                            : i),
                    o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                )
                    return !1;
                o.unload(),
                    !0 === t
                        ? o.$slideTrack.children().remove()
                        : o.$slideTrack
                              .children(this.options.slide)
                              .eq(i)
                              .remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
            }),
        (e.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i),
                !1 === o.transformsEnabled
                    ? o.$slideTrack.css(s)
                    : ((s = {}),
                      !1 === o.cssTransitions
                          ? ((s[o.animType] =
                                "translate(" + e + ", " + t + ")"),
                            o.$slideTrack.css(s))
                          : ((s[o.animType] =
                                "translate3d(" + e + ", " + t + ", 0px)"),
                            o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function () {
            var i = this;
            !1 === i.options.vertical
                ? !0 === i.options.centerMode &&
                  i.$list.css({ padding: "0px " + i.options.centerPadding })
                : (i.$list.height(
                      i.$slides.first().outerHeight(!0) * i.options.slidesToShow
                  ),
                  !0 === i.options.centerMode &&
                      i.$list.css({
                          padding: i.options.centerPadding + " 0px",
                      })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                !1 === i.options.vertical && !1 === i.options.variableWidth
                    ? ((i.slideWidth = Math.ceil(
                          i.listWidth / i.options.slidesToShow
                      )),
                      i.$slideTrack.width(
                          Math.ceil(
                              i.slideWidth *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ))
                    : !0 === i.options.variableWidth
                    ? i.$slideTrack.width(5e3 * i.slideCount)
                    : ((i.slideWidth = Math.ceil(i.listWidth)),
                      i.$slideTrack.height(
                          Math.ceil(
                              i.$slides.first().outerHeight(!0) *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ));
            var e =
                i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth &&
                i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
            var e,
                t = this;
            t.$slides.each(function (o, s) {
                (e = t.slideWidth * o * -1),
                    !0 === t.options.rtl
                        ? i(s).css({
                              position: "relative",
                              right: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          })
                        : i(s).css({
                              position: "relative",
                              left: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          });
            }),
                t.$slides
                    .eq(t.currentSlide)
                    .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption =
            function () {
                var e,
                    t,
                    o,
                    s,
                    n,
                    r = this,
                    l = !1;
                if (
                    ("object" === i.type(arguments[0])
                        ? ((o = arguments[0]),
                          (l = arguments[1]),
                          (n = "multiple"))
                        : "string" === i.type(arguments[0]) &&
                          ((o = arguments[0]),
                          (s = arguments[1]),
                          (l = arguments[2]),
                          "responsive" === arguments[0] &&
                          "array" === i.type(arguments[1])
                              ? (n = "responsive")
                              : void 0 !== arguments[1] && (n = "single")),
                    "single" === n)
                )
                    r.options[o] = s;
                else if ("multiple" === n)
                    i.each(o, function (i, e) {
                        r.options[i] = e;
                    });
                else if ("responsive" === n)
                    for (t in s)
                        if ("array" !== i.type(r.options.responsive))
                            r.options.responsive = [s[t]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0; )
                                r.options.responsive[e].breakpoint ===
                                    s[t].breakpoint &&
                                    r.options.responsive.splice(e, 1),
                                    e--;
                            r.options.responsive.push(s[t]);
                        }
                l && (r.unload(), r.reinit());
            }),
        (e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                !1 === i.options.fade
                    ? i.setCSS(i.getLeft(i.currentSlide))
                    : i.setFade(),
                i.$slider.trigger("setPosition", [i]);
        }),
        (e.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
                "top" === i.positionProp
                    ? i.$slider.addClass("slick-vertical")
                    : i.$slider.removeClass("slick-vertical"),
                (void 0 === e.WebkitTransition &&
                    void 0 === e.MozTransition &&
                    void 0 === e.msTransition) ||
                    (!0 === i.options.useCSS && (i.cssTransitions = !0)),
                i.options.fade &&
                    ("number" == typeof i.options.zIndex
                        ? i.options.zIndex < 3 && (i.options.zIndex = 3)
                        : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform &&
                    ((i.animType = "OTransform"),
                    (i.transformType = "-o-transform"),
                    (i.transitionType = "OTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.MozTransform &&
                    ((i.animType = "MozTransform"),
                    (i.transformType = "-moz-transform"),
                    (i.transitionType = "MozTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.MozPerspective &&
                        (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                    ((i.animType = "webkitTransform"),
                    (i.transformType = "-webkit-transform"),
                    (i.transitionType = "webkitTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.msTransform &&
                    ((i.animType = "msTransform"),
                    (i.transformType = "-ms-transform"),
                    (i.transitionType = "msTransition"),
                    void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform &&
                    !1 !== i.animType &&
                    ((i.animType = "transform"),
                    (i.transformType = "transform"),
                    (i.transitionType = "transition")),
                (i.transformsEnabled =
                    i.options.useTransform &&
                    null !== i.animType &&
                    !1 !== i.animType);
        }),
        (e.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (
                ((t = n.$slider
                    .find(".slick-slide")
                    .removeClass("slick-active slick-center slick-current")
                    .attr("aria-hidden", "true")),
                n.$slides.eq(i).addClass("slick-current"),
                !0 === n.options.centerMode)
            ) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                    !0 === n.options.infinite &&
                        (i >= e && i <= n.slideCount - 1 - e
                            ? n.$slides
                                  .slice(i - e + r, i + e + 1)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")
                            : ((o = n.options.slidesToShow + i),
                              t
                                  .slice(o - e + 1 + r, o + e + 2)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")),
                        0 === i
                            ? t
                                  .eq(t.length - 1 - n.options.slidesToShow)
                                  .addClass("slick-center")
                            : i === n.slideCount - 1 &&
                              t
                                  .eq(n.options.slidesToShow)
                                  .addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center");
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                          .slice(i, i + n.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                    : t.length <= n.options.slidesToShow
                    ? t.addClass("slick-active").attr("aria-hidden", "false")
                    : ((s = n.slideCount % n.options.slidesToShow),
                      (o =
                          !0 === n.options.infinite
                              ? n.options.slidesToShow + i
                              : i),
                      n.options.slidesToShow == n.options.slidesToScroll &&
                      n.slideCount - i < n.options.slidesToShow
                          ? t
                                .slice(o - (n.options.slidesToShow - s), o + s)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                          : t
                                .slice(o, o + n.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
            ("ondemand" !== n.options.lazyLoad &&
                "anticipated" !== n.options.lazyLoad) ||
                n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
            var e,
                t,
                o,
                s = this;
            if (
                (!0 === s.options.fade && (s.options.centerMode = !1),
                !0 === s.options.infinite &&
                    !1 === s.options.fade &&
                    ((t = null), s.slideCount > s.options.slidesToShow))
            ) {
                for (
                    o =
                        !0 === s.options.centerMode
                            ? s.options.slidesToShow + 1
                            : s.options.slidesToShow,
                        e = s.slideCount;
                    e > s.slideCount - o;
                    e -= 1
                )
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass("slick-cloned");
                s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        i(this).attr("id", "");
                    });
            }
        }),
        (e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function (e) {
            var t = this,
                o = i(e.target).is(".slick-slide")
                    ? i(e.target)
                    : i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0),
                t.slideCount <= t.options.slidesToShow
                    ? t.slideHandler(s, !1, !0)
                    : t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (
                ((e = e || !1),
                !(
                    (!0 === a.animating && !0 === a.options.waitForAnimate) ||
                    (!0 === a.options.fade && a.currentSlide === i)
                ))
            )
                if (
                    (!1 === e && a.asNavFor(i),
                    (o = i),
                    (d = a.getLeft(o)),
                    (r = a.getLeft(a.currentSlide)),
                    (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    !1 === a.options.infinite &&
                        !1 === a.options.centerMode &&
                        (i < 0 ||
                            i > a.getDotCount() * a.options.slidesToScroll))
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else if (
                    !1 === a.options.infinite &&
                    !0 === a.options.centerMode &&
                    (i < 0 || i > a.slideCount - a.options.slidesToScroll)
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else {
                    if (
                        (a.options.autoplay && clearInterval(a.autoPlayTimer),
                        (s =
                            o < 0
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? a.slideCount -
                                      (a.slideCount % a.options.slidesToScroll)
                                    : a.slideCount + o
                                : o >= a.slideCount
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? 0
                                    : o - a.slideCount
                                : o),
                        (a.animating = !0),
                        a.$slider.trigger("beforeChange", [
                            a,
                            a.currentSlide,
                            s,
                        ]),
                        (n = a.currentSlide),
                        (a.currentSlide = s),
                        a.setSlideClasses(a.currentSlide),
                        a.options.asNavFor &&
                            (l = (l = a.getNavTarget()).slick("getSlick"))
                                .slideCount <= l.options.slidesToShow &&
                            l.setSlideClasses(a.currentSlide),
                        a.updateDots(),
                        a.updateArrows(),
                        !0 === a.options.fade)
                    )
                        return (
                            !0 !== t
                                ? (a.fadeSlideOut(n),
                                  a.fadeSlide(s, function () {
                                      a.postSlide(s);
                                  }))
                                : a.postSlide(s),
                            void a.animateHeight()
                        );
                    !0 !== t
                        ? a.animateSlide(d, function () {
                              a.postSlide(s);
                          })
                        : a.postSlide(s);
                }
        }),
        (e.prototype.startLoad = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.hide(), i.$nextArrow.hide()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function () {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)) < 0 &&
                    (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o <= 360 && o >= 315
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o >= 135 && o <= 225
                    ? !1 === s.options.rtl
                        ? "right"
                        : "left"
                    : !0 === s.options.verticalSwiping
                    ? o >= 35 && o <= 135
                        ? "down"
                        : "up"
                    : "vertical"
            );
        }),
        (e.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                return (o.scrolling = !1), !1;
            if (
                ((o.interrupted = !1),
                (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                void 0 === o.touchObject.curX)
            )
                return !1;
            if (
                (!0 === o.touchObject.edgeHit &&
                    o.$slider.trigger("edge", [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe)
            ) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide + o.getSlideCount()
                              )
                            : o.currentSlide + o.getSlideCount()),
                            (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide - o.getSlideCount()
                              )
                            : o.currentSlide - o.getSlideCount()),
                            (o.currentDirection = 1);
                }
                "vertical" != t &&
                    (o.slideHandler(e),
                    (o.touchObject = {}),
                    o.$slider.trigger("swipe", [o, t]));
            } else
                o.touchObject.startX !== o.touchObject.curX &&
                    (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (i) {
            var e = this;
            if (
                !(
                    !1 === e.options.swipe ||
                    ("ontouchend" in document && !1 === e.options.swipe) ||
                    (!1 === e.options.draggable &&
                        -1 !== i.type.indexOf("mouse"))
                )
            )
                switch (
                    ((e.touchObject.fingerCount =
                        i.originalEvent && void 0 !== i.originalEvent.touches
                            ? i.originalEvent.touches.length
                            : 1),
                    (e.touchObject.minSwipe =
                        e.listWidth / e.options.touchThreshold),
                    !0 === e.options.verticalSwiping &&
                        (e.touchObject.minSwipe =
                            e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function (i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n =
                    void 0 !== i.originalEvent
                        ? i.originalEvent.touches
                        : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX =
                        void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY =
                        void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curX - l.touchObject.startX,
                                2
                            )
                        )
                    )),
                    (r = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curY - l.touchObject.startY,
                                2
                            )
                        )
                    )),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (!0 === l.options.verticalSwiping &&
                              (l.touchObject.swipeLength = r),
                          (t = l.swipeDirection()),
                          void 0 !== i.originalEvent &&
                              l.touchObject.swipeLength > 4 &&
                              ((l.swiping = !0), i.preventDefault()),
                          (s =
                              (!1 === l.options.rtl ? 1 : -1) *
                              (l.touchObject.curX > l.touchObject.startX
                                  ? 1
                                  : -1)),
                          !0 === l.options.verticalSwiping &&
                              (s =
                                  l.touchObject.curY > l.touchObject.startY
                                      ? 1
                                      : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          !1 === l.options.infinite &&
                              ((0 === l.currentSlide && "right" === t) ||
                                  (l.currentSlide >= l.getDotCount() &&
                                      "left" === t)) &&
                              ((o =
                                  l.touchObject.swipeLength *
                                  l.options.edgeFriction),
                              (l.touchObject.edgeHit = !0)),
                          !1 === l.options.vertical
                              ? (l.swipeLeft = e + o * s)
                              : (l.swipeLeft =
                                    e +
                                    o * (l.$list.height() / l.listWidth) * s),
                          !0 === l.options.verticalSwiping &&
                              (l.swipeLeft = e + o * s),
                          !0 !== l.options.fade &&
                              !1 !== l.options.touchMove &&
                              (!0 === l.animating
                                  ? ((l.swipeLeft = null), !1)
                                  : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function (i) {
            var e,
                t = this;
            if (
                ((t.interrupted = !0),
                1 !== t.touchObject.fingerCount ||
                    t.slideCount <= t.options.slidesToShow)
            )
                return (t.touchObject = {}), !1;
            void 0 !== i.originalEvent &&
                void 0 !== i.originalEvent.touches &&
                (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX =
                    void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY =
                    void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
            function () {
                var i = this;
                null !== i.$slidesCache &&
                    (i.unload(),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slidesCache.appendTo(i.$slideTrack),
                    i.reinit());
            }),
        (e.prototype.unload = function () {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                    e.htmlExpr.test(e.options.prevArrow) &&
                    e.$prevArrow.remove(),
                e.$nextArrow &&
                    e.htmlExpr.test(e.options.nextArrow) &&
                    e.$nextArrow.remove(),
                e.$slides
                    .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                    )
                    .attr("aria-hidden", "true")
                    .css("width", "");
        }),
        (e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
                !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    !i.options.infinite &&
                    (i.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    i.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    0 === i.currentSlide
                        ? (i.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$nextArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : i.currentSlide >=
                              i.slideCount - i.options.slidesToShow &&
                          !1 === i.options.centerMode
                        ? (i.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : i.currentSlide >= i.slideCount - 1 &&
                          !0 === i.options.centerMode &&
                          (i.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay &&
                (document[i.hidden]
                    ? (i.interrupted = !0)
                    : (i.interrupted = !1));
        }),
        (i.fn.slick = function () {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if (
                    ("object" == typeof s || void 0 === s
                        ? (o[i].slick = new e(o[i], s))
                        : (t = o[i].slick[s].apply(o[i].slick, n)),
                    void 0 !== t)
                )
                    return t;
            return o;
        });
});

/* Fancy Box */
!(function (t, e, n, o) {
    "use strict";
    function i(t) {
        var e = n(t.currentTarget),
            o = t.data ? t.data.options : {},
            i = e.attr("data-fancybox") || "",
            a = 0,
            s = [];
        t.isDefaultPrevented() ||
            (t.preventDefault(),
            i
                ? ((s = o.selector
                      ? n(o.selector)
                      : t.data
                      ? t.data.items
                      : []),
                  (s = s.length
                      ? s.filter('[data-fancybox="' + i + '"]')
                      : n('[data-fancybox="' + i + '"]')),
                  (a = s.index(e)),
                  a < 0 && (a = 0))
                : (s = [e]),
            n.fancybox.open(s, o, a));
    }
    if (n) {
        if (n.fn.fancybox)
            return void (
                "console" in t && console.log("fancyBox already initialized")
            );
        var a = {
                loop: !1,
                margin: [44, 0],
                gutter: 50,
                keyboard: !0,
                arrows: !0,
                infobar: !0,
                toolbar: !0,
                buttons: [
                    "slideShow",
                    "fullScreen",
                    "thumbs",
                    "share",
                    "close",
                ],
                idleTime: 3,
                smallBtn: "auto",
                protect: !1,
                modal: !1,
                image: { preload: "auto" },
                ajax: { settings: { data: { fancybox: !0 } } },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: { scrolling: "auto" },
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 500,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl:
                    '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                btnTpl: {
                    download:
                        '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                    smallBtn:
                        '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                    arrowLeft:
                        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                    arrowRight:
                        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>',
                },
                parentEl: "body",
                autoFocus: !1,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: { autoStart: !1 },
                touch: { vertical: !0, momentum: !0 },
                hash: null,
                media: {},
                slideShow: { autoStart: !1, speed: 4e3 },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y",
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom";
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    idleTime: !1,
                    margin: 0,
                    clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls";
                    },
                    clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close";
                    },
                    dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom";
                    },
                    dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom";
                    },
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom",
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "ZurÃƒÆ’Ã‚Â¼ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃƒÆ’Ã‚Â¤ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "MaÃƒÆ’Ã…Â¸stab",
                    },
                },
            },
            s = n(t),
            r = n(e),
            c = 0,
            l = function (t) {
                return t && t.hasOwnProperty && t instanceof n;
            },
            u = (function () {
                return (
                    t.requestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.oRequestAnimationFrame ||
                    function (e) {
                        return t.setTimeout(e, 1e3 / 60);
                    }
                );
            })(),
            d = (function () {
                var t,
                    n = e.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                    };
                for (t in i) if (n.style[t] !== o) return i[t];
                return "transitionend";
            })(),
            f = function (t) {
                return t && t.length && t[0].offsetHeight;
            },
            p = function (t, o, i) {
                var a = this;
                (a.opts = n.extend(
                    !0,
                    { index: i },
                    n.fancybox.defaults,
                    o || {}
                )),
                    n.fancybox.isMobile &&
                        (a.opts = n.extend(!0, {}, a.opts, a.opts.mobile)),
                    o && n.isArray(o.buttons) && (a.opts.buttons = o.buttons),
                    (a.id = a.opts.id || ++c),
                    (a.group = []),
                    (a.currIndex = parseInt(a.opts.index, 10) || 0),
                    (a.prevIndex = null),
                    (a.prevPos = null),
                    (a.currPos = 0),
                    (a.firstRun = null),
                    a.createGroup(t),
                    a.group.length &&
                        ((a.$lastFocus = n(e.activeElement).blur()),
                        (a.slides = {}),
                        a.init());
            };
        n.extend(p.prototype, {
            init: function () {
                var i,
                    a,
                    s,
                    c = this,
                    l = c.group[c.currIndex],
                    u = l.opts,
                    d = n.fancybox.scrollbarWidth;
                (c.scrollTop = r.scrollTop()),
                    (c.scrollLeft = r.scrollLeft()),
                    n.fancybox.getInstance() ||
                        (n("body").addClass("fancybox-active"),
                        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                        !t.MSStream
                            ? "image" !== l.type &&
                              n("body")
                                  .css("top", n("body").scrollTop() * -1)
                                  .addClass("fancybox-iosfix")
                            : !n.fancybox.isMobile &&
                              e.body.scrollHeight > t.innerHeight &&
                              (d === o &&
                                  ((i = n(
                                      '<div style="width:50px;height:50px;overflow:scroll;" />'
                                  ).appendTo("body")),
                                  (d = n.fancybox.scrollbarWidth =
                                      i[0].offsetWidth - i[0].clientWidth),
                                  i.remove()),
                              n("head").append(
                                  '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' +
                                      d +
                                      "px; }</style>"
                              ),
                              n("body").addClass("compensate-for-scrollbar"))),
                    (s = ""),
                    n.each(u.buttons, function (t, e) {
                        s += u.btnTpl[e] || "";
                    }),
                    (a = n(
                        c.translate(
                            c,
                            u.baseTpl
                                .replace("{{buttons}}", s)
                                .replace(
                                    "{{arrows}}",
                                    u.btnTpl.arrowLeft + u.btnTpl.arrowRight
                                )
                        )
                    )
                        .attr("id", "fancybox-container-" + c.id)
                        .addClass("fancybox-is-hidden")
                        .addClass(u.baseClass)
                        .data("FancyBox", c)
                        .appendTo(u.parentEl)),
                    (c.$refs = { container: a }),
                    [
                        "bg",
                        "inner",
                        "infobar",
                        "toolbar",
                        "stage",
                        "caption",
                        "navigation",
                    ].forEach(function (t) {
                        c.$refs[t] = a.find(".fancybox-" + t);
                    }),
                    c.trigger("onInit"),
                    c.activate(),
                    c.jumpTo(c.currIndex);
            },
            translate: function (t, e) {
                var n = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    var i = n[e];
                    return i === o ? t : i;
                });
            },
            createGroup: function (t) {
                var e = this,
                    i = n.makeArray(t);
                n.each(i, function (t, i) {
                    var a,
                        s,
                        r,
                        c,
                        l,
                        u = {},
                        d = {};
                    n.isPlainObject(i)
                        ? ((u = i), (d = i.opts || i))
                        : "object" === n.type(i) && n(i).length
                        ? ((a = n(i)),
                          (d = a.data()),
                          (d = n.extend({}, d, d.options || {})),
                          (d.$orig = a),
                          (u.src = d.src || a.attr("href")),
                          u.type || u.src || ((u.type = "inline"), (u.src = i)))
                        : (u = { type: "html", src: i + "" }),
                        (u.opts = n.extend(!0, {}, e.opts, d)),
                        n.isArray(d.buttons) && (u.opts.buttons = d.buttons),
                        (s = u.type || u.opts.type),
                        (c = u.src || ""),
                        !s &&
                            c &&
                            (c.match(
                                /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                            )
                                ? (s = "image")
                                : c.match(/\.(pdf)((\?|#).*)?$/i)
                                ? (s = "pdf")
                                : (r = c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))
                                ? ((s = "video"),
                                  u.opts.videoFormat ||
                                      (u.opts.videoFormat =
                                          "video/" +
                                          ("ogv" === r[1] ? "ogg" : r[1])))
                                : "#" === c.charAt(0) && (s = "inline")),
                        s ? (u.type = s) : e.trigger("objectNeedsType", u),
                        (u.index = e.group.length),
                        u.opts.$orig &&
                            !u.opts.$orig.length &&
                            delete u.opts.$orig,
                        !u.opts.$thumb &&
                            u.opts.$orig &&
                            (u.opts.$thumb = u.opts.$orig.find("img:first")),
                        u.opts.$thumb &&
                            !u.opts.$thumb.length &&
                            delete u.opts.$thumb,
                        "function" === n.type(u.opts.caption) &&
                            (u.opts.caption = u.opts.caption.apply(i, [e, u])),
                        "function" === n.type(e.opts.caption) &&
                            (u.opts.caption = e.opts.caption.apply(i, [e, u])),
                        u.opts.caption instanceof n ||
                            (u.opts.caption =
                                u.opts.caption === o
                                    ? ""
                                    : u.opts.caption + ""),
                        "ajax" === s &&
                            ((l = c.split(/\s+/, 2)),
                            l.length > 1 &&
                                ((u.src = l.shift()),
                                (u.opts.filter = l.shift()))),
                        "auto" == u.opts.smallBtn &&
                            (n.inArray(s, ["html", "inline", "ajax"]) > -1
                                ? ((u.opts.toolbar = !1),
                                  (u.opts.smallBtn = !0))
                                : (u.opts.smallBtn = !1)),
                        "pdf" === s &&
                            ((u.type = "iframe"), (u.opts.iframe.preload = !1)),
                        u.opts.modal &&
                            (u.opts = n.extend(!0, u.opts, {
                                infobar: 0,
                                toolbar: 0,
                                smallBtn: 0,
                                keyboard: 0,
                                slideShow: 0,
                                fullScreen: 0,
                                thumbs: 0,
                                touch: 0,
                                clickContent: !1,
                                clickSlide: !1,
                                clickOutside: !1,
                                dblclickContent: !1,
                                dblclickSlide: !1,
                                dblclickOutside: !1,
                            })),
                        e.group.push(u);
                });
            },
            addEvents: function () {
                var o = this;
                o.removeEvents(),
                    o.$refs.container
                        .on(
                            "click.fb-close",
                            "[data-fancybox-close]",
                            function (t) {
                                t.stopPropagation(),
                                    t.preventDefault(),
                                    o.close(t);
                            }
                        )
                        .on(
                            "click.fb-prev touchend.fb-prev",
                            "[data-fancybox-prev]",
                            function (t) {
                                t.stopPropagation(),
                                    t.preventDefault(),
                                    o.previous();
                            }
                        )
                        .on(
                            "click.fb-next touchend.fb-next",
                            "[data-fancybox-next]",
                            function (t) {
                                t.stopPropagation(),
                                    t.preventDefault(),
                                    o.next();
                            }
                        )
                        .on("click.fb", "[data-fancybox-zoom]", function (t) {
                            o[
                                o.isScaledDown()
                                    ? "scaleToActual"
                                    : "scaleToFit"
                            ]();
                        }),
                    s.on("orientationchange.fb resize.fb", function (t) {
                        t &&
                        t.originalEvent &&
                        "resize" === t.originalEvent.type
                            ? u(function () {
                                  o.update();
                              })
                            : (o.$refs.stage.hide(),
                              setTimeout(function () {
                                  o.$refs.stage.show(), o.update();
                              }, 600));
                    }),
                    r.on("focusin.fb", function (t) {
                        var i = n.fancybox ? n.fancybox.getInstance() : null;
                        i.isClosing ||
                            !i.current ||
                            !i.current.opts.trapFocus ||
                            n(t.target).hasClass("fancybox-container") ||
                            n(t.target).is(e) ||
                            (i &&
                                "fixed" !== n(t.target).css("position") &&
                                !i.$refs.container.has(t.target).length &&
                                (t.stopPropagation(),
                                i.focus(),
                                s
                                    .scrollTop(o.scrollTop)
                                    .scrollLeft(o.scrollLeft)));
                    }),
                    r.on("keydown.fb", function (t) {
                        var e = o.current,
                            i = t.keyCode || t.which;
                        if (
                            e &&
                            e.opts.keyboard &&
                            !n(t.target).is("input") &&
                            !n(t.target).is("textarea")
                        )
                            return 8 === i || 27 === i
                                ? (t.preventDefault(), void o.close(t))
                                : 37 === i || 38 === i
                                ? (t.preventDefault(), void o.previous())
                                : 39 === i || 40 === i
                                ? (t.preventDefault(), void o.next())
                                : void o.trigger("afterKeydown", t, i);
                    }),
                    o.group[o.currIndex].opts.idleTime &&
                        ((o.idleSecondsCounter = 0),
                        r.on(
                            "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                            function (t) {
                                (o.idleSecondsCounter = 0),
                                    o.isIdle && o.showControls(),
                                    (o.isIdle = !1);
                            }
                        ),
                        (o.idleInterval = t.setInterval(function () {
                            o.idleSecondsCounter++,
                                o.idleSecondsCounter >=
                                    o.group[o.currIndex].opts.idleTime &&
                                    !o.isDragging &&
                                    ((o.isIdle = !0),
                                    (o.idleSecondsCounter = 0),
                                    o.hideControls());
                        }, 1e3)));
            },
            removeEvents: function () {
                var e = this;
                s.off("orientationchange.fb resize.fb"),
                    r.off("focusin.fb keydown.fb .fb-idle"),
                    this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                    e.idleInterval &&
                        (t.clearInterval(e.idleInterval),
                        (e.idleInterval = null));
            },
            previous: function (t) {
                return this.jumpTo(this.currPos - 1, t);
            },
            next: function (t) {
                return this.jumpTo(this.currPos + 1, t);
            },
            jumpTo: function (t, e, i) {
                var a,
                    s,
                    r,
                    c,
                    l,
                    u,
                    d,
                    p = this,
                    h = p.group.length;
                if (
                    !(
                        p.isDragging ||
                        p.isClosing ||
                        (p.isAnimating && p.firstRun)
                    )
                ) {
                    if (
                        ((t = parseInt(t, 10)),
                        (s = p.current ? p.current.opts.loop : p.opts.loop),
                        !s && (t < 0 || t >= h))
                    )
                        return !1;
                    if (
                        ((a = p.firstRun = null === p.firstRun),
                        !(h < 2 && !a && p.isDragging))
                    ) {
                        if (
                            ((c = p.current),
                            (p.prevIndex = p.currIndex),
                            (p.prevPos = p.currPos),
                            (r = p.createSlide(t)),
                            h > 1 &&
                                ((s || r.index > 0) && p.createSlide(t - 1),
                                (s || r.index < h - 1) && p.createSlide(t + 1)),
                            (p.current = r),
                            (p.currIndex = r.index),
                            (p.currPos = r.pos),
                            p.trigger("beforeShow", a),
                            p.updateControls(),
                            (u = n.fancybox.getTranslate(r.$slide)),
                            (r.isMoved =
                                (0 !== u.left || 0 !== u.top) &&
                                !r.$slide.hasClass("fancybox-animated")),
                            (r.forcedDuration = o),
                            n.isNumeric(e)
                                ? (r.forcedDuration = e)
                                : (e =
                                      r.opts[
                                          a
                                              ? "animationDuration"
                                              : "transitionDuration"
                                      ]),
                            (e = parseInt(e, 10)),
                            a)
                        )
                            return (
                                r.opts.animationEffect &&
                                    e &&
                                    p.$refs.container.css(
                                        "transition-duration",
                                        e + "ms"
                                    ),
                                p.$refs.container.removeClass(
                                    "fancybox-is-hidden"
                                ),
                                f(p.$refs.container),
                                p.$refs.container.addClass("fancybox-is-open"),
                                r.$slide.addClass("fancybox-slide--current"),
                                p.loadSlide(r),
                                void p.preload("image")
                            );
                        n.each(p.slides, function (t, e) {
                            n.fancybox.stop(e.$slide);
                        }),
                            r.$slide
                                .removeClass(
                                    "fancybox-slide--next fancybox-slide--previous"
                                )
                                .addClass("fancybox-slide--current"),
                            r.isMoved
                                ? ((l = Math.round(r.$slide.width())),
                                  n.each(p.slides, function (t, o) {
                                      var i = o.pos - r.pos;
                                      n.fancybox.animate(
                                          o.$slide,
                                          {
                                              top: 0,
                                              left: i * l + i * o.opts.gutter,
                                          },
                                          e,
                                          function () {
                                              o.$slide
                                                  .removeAttr("style")
                                                  .removeClass(
                                                      "fancybox-slide--next fancybox-slide--previous"
                                                  ),
                                                  o.pos === p.currPos &&
                                                      ((r.isMoved = !1),
                                                      p.complete());
                                          }
                                      );
                                  }))
                                : p.$refs.stage.children().removeAttr("style"),
                            r.isLoaded ? p.revealContent(r) : p.loadSlide(r),
                            p.preload("image"),
                            c.pos !== r.pos &&
                                ((d =
                                    "fancybox-slide--" +
                                    (c.pos > r.pos ? "next" : "previous")),
                                c.$slide.removeClass(
                                    "fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                                ),
                                (c.isComplete = !1),
                                e &&
                                    (r.isMoved || r.opts.transitionEffect) &&
                                    (r.isMoved
                                        ? c.$slide.addClass(d)
                                        : ((d =
                                              "fancybox-animated " +
                                              d +
                                              " fancybox-fx-" +
                                              r.opts.transitionEffect),
                                          n.fancybox.animate(
                                              c.$slide,
                                              d,
                                              e,
                                              function () {
                                                  c.$slide
                                                      .removeClass(d)
                                                      .removeAttr("style");
                                              }
                                          ))));
                    }
                }
            },
            createSlide: function (t) {
                var e,
                    o,
                    i = this;
                return (
                    (o = t % i.group.length),
                    (o = o < 0 ? i.group.length + o : o),
                    !i.slides[t] &&
                        i.group[o] &&
                        ((e = n('<div class="fancybox-slide"></div>').appendTo(
                            i.$refs.stage
                        )),
                        (i.slides[t] = n.extend(!0, {}, i.group[o], {
                            pos: t,
                            $slide: e,
                            isLoaded: !1,
                        })),
                        i.updateSlide(i.slides[t])),
                    i.slides[t]
                );
            },
            scaleToActual: function (t, e, i) {
                var a,
                    s,
                    r,
                    c,
                    l,
                    u = this,
                    d = u.current,
                    f = d.$content,
                    p = parseInt(d.$slide.width(), 10),
                    h = parseInt(d.$slide.height(), 10),
                    g = d.width,
                    b = d.height;
                "image" != d.type ||
                    d.hasError ||
                    !f ||
                    u.isAnimating ||
                    (n.fancybox.stop(f),
                    (u.isAnimating = !0),
                    (t = t === o ? 0.5 * p : t),
                    (e = e === o ? 0.5 * h : e),
                    (a = n.fancybox.getTranslate(f)),
                    (c = g / a.width),
                    (l = b / a.height),
                    (s = 0.5 * p - 0.5 * g),
                    (r = 0.5 * h - 0.5 * b),
                    g > p &&
                        ((s = a.left * c - (t * c - t)),
                        s > 0 && (s = 0),
                        s < p - g && (s = p - g)),
                    b > h &&
                        ((r = a.top * l - (e * l - e)),
                        r > 0 && (r = 0),
                        r < h - b && (r = h - b)),
                    u.updateCursor(g, b),
                    n.fancybox.animate(
                        f,
                        { top: r, left: s, scaleX: c, scaleY: l },
                        i || 330,
                        function () {
                            u.isAnimating = !1;
                        }
                    ),
                    u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop());
            },
            scaleToFit: function (t) {
                var e,
                    o = this,
                    i = o.current,
                    a = i.$content;
                "image" != i.type ||
                    i.hasError ||
                    !a ||
                    o.isAnimating ||
                    (n.fancybox.stop(a),
                    (o.isAnimating = !0),
                    (e = o.getFitPos(i)),
                    o.updateCursor(e.width, e.height),
                    n.fancybox.animate(
                        a,
                        {
                            top: e.top,
                            left: e.left,
                            scaleX: e.width / a.width(),
                            scaleY: e.height / a.height(),
                        },
                        t || 330,
                        function () {
                            o.isAnimating = !1;
                        }
                    ));
            },
            getFitPos: function (t) {
                var e,
                    o,
                    i,
                    a,
                    s,
                    r = this,
                    c = t.$content,
                    l = t.width,
                    u = t.height,
                    d = t.opts.margin;
                return (
                    !(!c || !c.length || (!l && !u)) &&
                    ("number" === n.type(d) && (d = [d, d]),
                    2 == d.length && (d = [d[0], d[1], d[0], d[1]]),
                    (e = parseInt(r.$refs.stage.width(), 10) - (d[1] + d[3])),
                    (o = parseInt(r.$refs.stage.height(), 10) - (d[0] + d[2])),
                    (i = Math.min(1, e / l, o / u)),
                    (a = Math.floor(i * l)),
                    (s = Math.floor(i * u)),
                    {
                        top: Math.floor(0.5 * (o - s)) + d[0],
                        left: Math.floor(0.5 * (e - a)) + d[3],
                        width: a,
                        height: s,
                    })
                );
            },
            update: function () {
                var t = this;
                n.each(t.slides, function (e, n) {
                    t.updateSlide(n);
                });
            },
            updateSlide: function (t, e) {
                var o = this,
                    i = t && t.$content;
                i &&
                    (t.width || t.height) &&
                    ((o.isAnimating = !1),
                    n.fancybox.stop(i),
                    n.fancybox.setTranslate(i, o.getFitPos(t)),
                    t.pos === o.currPos && o.updateCursor()),
                    t.$slide.trigger("refresh"),
                    o.trigger("onUpdate", t);
            },
            centerSlide: function (t, e) {
                var i,
                    a,
                    s = this;
                s.current &&
                    ((i = Math.round(t.$slide.width())),
                    (a = t.pos - s.current.pos),
                    n.fancybox.animate(
                        t.$slide,
                        { top: 0, left: a * i + a * t.opts.gutter, opacity: 1 },
                        e === o ? 0 : e,
                        null,
                        !1
                    ));
            },
            updateCursor: function (t, e) {
                var n,
                    i = this,
                    a = i.$refs.container.removeClass(
                        "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut"
                    );
                i.current &&
                    !i.isClosing &&
                    (i.isZoomable()
                        ? (a.addClass("fancybox-is-zoomable"),
                          (n =
                              t !== o && e !== o
                                  ? t < i.current.width && e < i.current.height
                                  : i.isScaledDown()),
                          n
                              ? a.addClass("fancybox-can-zoomIn")
                              : i.current.opts.touch
                              ? a.addClass("fancybox-can-drag")
                              : a.addClass("fancybox-can-zoomOut"))
                        : i.current.opts.touch &&
                          a.addClass("fancybox-can-drag"));
            },
            isZoomable: function () {
                var t,
                    e = this,
                    o = e.current;
                if (o && !e.isClosing)
                    return !!(
                        "image" === o.type &&
                        o.isLoaded &&
                        !o.hasError &&
                        ("zoom" === o.opts.clickContent ||
                            (n.isFunction(o.opts.clickContent) &&
                                "zoom" === o.opts.clickContent(o))) &&
                        ((t = e.getFitPos(o)),
                        o.width > t.width || o.height > t.height)
                    );
            },
            isScaledDown: function () {
                var t = this,
                    e = t.current,
                    o = e.$content,
                    i = !1;
                return (
                    o &&
                        ((i = n.fancybox.getTranslate(o)),
                        (i = i.width < e.width || i.height < e.height)),
                    i
                );
            },
            canPan: function () {
                var t = this,
                    e = t.current,
                    n = e.$content,
                    o = !1;
                return (
                    n &&
                        ((o = t.getFitPos(e)),
                        (o =
                            Math.abs(n.width() - o.width) > 1 ||
                            Math.abs(n.height() - o.height) > 1)),
                    o
                );
            },
            loadSlide: function (t) {
                var e,
                    o,
                    i,
                    a = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (
                        ((t.isLoading = !0),
                        a.trigger("beforeLoad", t),
                        (e = t.type),
                        (o = t.$slide),
                        o
                            .off("refresh")
                            .trigger("onReset")
                            .addClass("fancybox-slide--" + (e || "unknown"))
                            .addClass(t.opts.slideClass),
                        e)
                    ) {
                        case "image":
                            a.setImage(t);
                            break;
                        case "iframe":
                            a.setIframe(t);
                            break;
                        case "html":
                            a.setContent(t, t.src || t.content);
                            break;
                        case "inline":
                            n(t.src).length
                                ? a.setContent(t, n(t.src))
                                : a.setError(t);
                            break;
                        case "ajax":
                            a.showLoading(t),
                                (i = n.ajax(
                                    n.extend({}, t.opts.ajax.settings, {
                                        url: t.src,
                                        success: function (e, n) {
                                            "success" === n &&
                                                a.setContent(t, e);
                                        },
                                        error: function (e, n) {
                                            e && "abort" !== n && a.setError(t);
                                        },
                                    })
                                )),
                                o.one("onReset", function () {
                                    i.abort();
                                });
                            break;
                        case "video":
                            a.setContent(
                                t,
                                '<video controls><source src="' +
                                    t.src +
                                    '" type="' +
                                    t.opts.videoFormat +
                                    "\">Your browser doesn't support HTML5 video</video>"
                            );
                            break;
                        default:
                            a.setError(t);
                    }
                    return !0;
                }
            },
            setImage: function (e) {
                var o,
                    i,
                    a,
                    s,
                    r = this,
                    c = e.opts.srcset || e.opts.image.srcset;
                if (c) {
                    (a = t.devicePixelRatio || 1),
                        (s = t.innerWidth * a),
                        (i = c.split(",").map(function (t) {
                            var e = {};
                            return (
                                t
                                    .trim()
                                    .split(/\s+/)
                                    .forEach(function (t, n) {
                                        var o = parseInt(
                                            t.substring(0, t.length - 1),
                                            10
                                        );
                                        return 0 === n
                                            ? (e.url = t)
                                            : void (
                                                  o &&
                                                  ((e.value = o),
                                                  (e.postfix = t[t.length - 1]))
                                              );
                                    }),
                                e
                            );
                        })),
                        i.sort(function (t, e) {
                            return t.value - e.value;
                        });
                    for (var l = 0; l < i.length; l++) {
                        var u = i[l];
                        if (
                            ("w" === u.postfix && u.value >= s) ||
                            ("x" === u.postfix && u.value >= a)
                        ) {
                            o = u;
                            break;
                        }
                    }
                    !o && i.length && (o = i[i.length - 1]),
                        o &&
                            ((e.src = o.url),
                            e.width &&
                                e.height &&
                                "w" == o.postfix &&
                                ((e.height = (e.width / e.height) * o.value),
                                (e.width = o.value)));
                }
                (e.$content = n('<div class="fancybox-image-wrap"></div>')
                    .addClass("fancybox-is-hidden")
                    .appendTo(e.$slide)),
                    e.opts.preload !== !1 &&
                    e.opts.width &&
                    e.opts.height &&
                    (e.opts.thumb || e.opts.$thumb)
                        ? ((e.width = e.opts.width),
                          (e.height = e.opts.height),
                          (e.$ghost = n("<img />")
                              .one("error", function () {
                                  n(this).remove(),
                                      (e.$ghost = null),
                                      r.setBigImage(e);
                              })
                              .one("load", function () {
                                  r.afterLoad(e), r.setBigImage(e);
                              })
                              .addClass("fancybox-image")
                              .appendTo(e.$content)
                              .attr(
                                  "src",
                                  e.opts.thumb || e.opts.$thumb.attr("src")
                              )))
                        : r.setBigImage(e);
            },
            setBigImage: function (t) {
                var e = this,
                    o = n("<img />");
                (t.$image = o
                    .one("error", function () {
                        e.setError(t);
                    })
                    .one("load", function () {
                        clearTimeout(t.timouts),
                            (t.timouts = null),
                            e.isClosing ||
                                ((t.width = t.opts.width || this.naturalWidth),
                                (t.height =
                                    t.opts.height || this.naturalHeight),
                                t.opts.image.srcset &&
                                    o
                                        .attr("sizes", "100vw")
                                        .attr("srcset", t.opts.image.srcset),
                                e.hideLoading(t),
                                t.$ghost
                                    ? (t.timouts = setTimeout(function () {
                                          (t.timouts = null), t.$ghost.hide();
                                      }, Math.min(
                                          300,
                                          Math.max(1e3, t.height / 1600)
                                      )))
                                    : e.afterLoad(t));
                    })
                    .addClass("fancybox-image")
                    .attr("src", t.src)
                    .appendTo(t.$content)),
                    (o[0].complete || "complete" == o[0].readyState) &&
                    o[0].naturalWidth &&
                    o[0].naturalHeight
                        ? o.trigger("load")
                        : o[0].error
                        ? o.trigger("error")
                        : (t.timouts = setTimeout(function () {
                              o[0].complete || t.hasError || e.showLoading(t);
                          }, 100));
            },
            setIframe: function (t) {
                var e,
                    i = this,
                    a = t.opts.iframe,
                    s = t.$slide;
                (t.$content = n(
                    '<div class="fancybox-content' +
                        (a.preload ? " fancybox-is-hidden" : "") +
                        '"></div>'
                )
                    .css(a.css)
                    .appendTo(s)),
                    (e = n(a.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                        .attr(a.attr)
                        .appendTo(t.$content)),
                    a.preload
                        ? (i.showLoading(t),
                          e.on("load.fb error.fb", function (e) {
                              (this.isReady = 1),
                                  t.$slide.trigger("refresh"),
                                  i.afterLoad(t);
                          }),
                          s.on("refresh.fb", function () {
                              var n,
                                  i,
                                  s,
                                  r = t.$content,
                                  c = a.css.width,
                                  l = a.css.height;
                              if (1 === e[0].isReady) {
                                  try {
                                      (i = e.contents()), (s = i.find("body"));
                                  } catch (t) {}
                                  s &&
                                      s.length &&
                                      (c === o &&
                                          ((n =
                                              e[0].contentWindow.document
                                                  .documentElement.scrollWidth),
                                          (c = Math.ceil(
                                              s.outerWidth(!0) + (r.width() - n)
                                          )),
                                          (c +=
                                              r.outerWidth() - r.innerWidth())),
                                      l === o &&
                                          ((l = Math.ceil(s.outerHeight(!0))),
                                          (l +=
                                              r.outerHeight() -
                                              r.innerHeight())),
                                      c && r.width(c),
                                      l && r.height(l)),
                                      r.removeClass("fancybox-is-hidden");
                              }
                          }))
                        : this.afterLoad(t),
                    e.attr("src", t.src),
                    t.opts.smallBtn === !0 &&
                        t.$content.prepend(
                            i.translate(t, t.opts.btnTpl.smallBtn)
                        ),
                    s.one("onReset", function () {
                        try {
                            n(this)
                                .find("iframe")
                                .hide()
                                .attr("src", "//about:blank");
                        } catch (t) {}
                        n(this).empty(), (t.isLoaded = !1);
                    });
            },
            setContent: function (t, e) {
                var o = this;
                o.isClosing ||
                    (o.hideLoading(t),
                    t.$slide.empty(),
                    l(e) && e.parent().length
                        ? (e
                              .parent(".fancybox-slide--inline")
                              .trigger("onReset"),
                          (t.$placeholder = n("<div></div>")
                              .hide()
                              .insertAfter(e)),
                          e.css("display", "inline-block"))
                        : t.hasError ||
                          ("string" === n.type(e) &&
                              ((e = n("<div>").append(n.trim(e)).contents()),
                              3 === e[0].nodeType && (e = n("<div>").html(e))),
                          t.opts.filter &&
                              (e = n("<div>").html(e).find(t.opts.filter))),
                    t.$slide.one("onReset", function () {
                        n(this).find("video,audio").trigger("pause"),
                            t.$placeholder &&
                                (t.$placeholder.after(e.hide()).remove(),
                                (t.$placeholder = null)),
                            t.$smallBtn &&
                                (t.$smallBtn.remove(), (t.$smallBtn = null)),
                            t.hasError || (n(this).empty(), (t.isLoaded = !1));
                    }),
                    (t.$content = n(e).appendTo(t.$slide)),
                    this.afterLoad(t));
            },
            setError: function (t) {
                (t.hasError = !0),
                    t.$slide.removeClass("fancybox-slide--" + t.type),
                    this.setContent(t, this.translate(t, t.opts.errorTpl));
            },
            showLoading: function (t) {
                var e = this;
                (t = t || e.current),
                    t &&
                        !t.$spinner &&
                        (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide));
            },
            hideLoading: function (t) {
                var e = this;
                (t = t || e.current),
                    t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
            },
            afterLoad: function (t) {
                var e = this;
                e.isClosing ||
                    ((t.isLoading = !1),
                    (t.isLoaded = !0),
                    e.trigger("afterLoad", t),
                    e.hideLoading(t),
                    t.opts.smallBtn &&
                        !t.$smallBtn &&
                        (t.$smallBtn = n(
                            e.translate(t, t.opts.btnTpl.smallBtn)
                        ).appendTo(t.$content.filter("div,form").first())),
                    t.opts.protect &&
                        t.$content &&
                        !t.hasError &&
                        (t.$content.on("contextmenu.fb", function (t) {
                            return 2 == t.button && t.preventDefault(), !0;
                        }),
                        "image" === t.type &&
                            n(
                                '<div class="fancybox-spaceball"></div>'
                            ).appendTo(t.$content)),
                    e.revealContent(t));
            },
            revealContent: function (t) {
                var e,
                    i,
                    a,
                    s,
                    r,
                    c = this,
                    l = t.$slide,
                    u = !1;
                return (
                    (e =
                        t.opts[
                            c.firstRun ? "animationEffect" : "transitionEffect"
                        ]),
                    (a =
                        t.opts[
                            c.firstRun
                                ? "animationDuration"
                                : "transitionDuration"
                        ]),
                    (a = parseInt(
                        t.forcedDuration === o ? a : t.forcedDuration,
                        10
                    )),
                    (!t.isMoved && t.pos === c.currPos && a) || (e = !1),
                    "zoom" !== e ||
                        (t.pos === c.currPos &&
                            a &&
                            "image" === t.type &&
                            !t.hasError &&
                            (u = c.getThumbPos(t))) ||
                        (e = "fade"),
                    "zoom" === e
                        ? ((r = c.getFitPos(t)),
                          (r.scaleX = r.width / u.width),
                          (r.scaleY = r.height / u.height),
                          delete r.width,
                          delete r.height,
                          (s = t.opts.zoomOpacity),
                          "auto" == s &&
                              (s =
                                  Math.abs(
                                      t.width / t.height - u.width / u.height
                                  ) > 0.1),
                          s && ((u.opacity = 0.1), (r.opacity = 1)),
                          n.fancybox.setTranslate(
                              t.$content.removeClass("fancybox-is-hidden"),
                              u
                          ),
                          f(t.$content),
                          void n.fancybox.animate(
                              t.$content,
                              r,
                              a,
                              function () {
                                  c.complete();
                              }
                          ))
                        : (c.updateSlide(t),
                          e
                              ? (n.fancybox.stop(l),
                                (i =
                                    "fancybox-animated fancybox-slide--" +
                                    (t.pos >= c.prevPos ? "next" : "previous") +
                                    " fancybox-fx-" +
                                    e),
                                l
                                    .removeAttr("style")
                                    .removeClass(
                                        "fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                                    )
                                    .addClass(i),
                                t.$content.removeClass("fancybox-is-hidden"),
                                f(l),
                                void n.fancybox.animate(
                                    l,
                                    "fancybox-slide--current",
                                    a,
                                    function (e) {
                                        l.removeClass(i).removeAttr("style"),
                                            t.pos === c.currPos && c.complete();
                                    },
                                    !0
                                ))
                              : (f(l),
                                t.$content.removeClass("fancybox-is-hidden"),
                                void (t.pos === c.currPos && c.complete())))
                );
            },
            getThumbPos: function (o) {
                var i,
                    a = this,
                    s = !1,
                    r = function (e) {
                        for (
                            var o,
                                i = e[0],
                                a = i.getBoundingClientRect(),
                                s = [];
                            null !== i.parentElement;

                        )
                            ("hidden" !== n(i.parentElement).css("overflow") &&
                                "auto" !==
                                    n(i.parentElement).css("overflow")) ||
                                s.push(i.parentElement.getBoundingClientRect()),
                                (i = i.parentElement);
                        return (
                            (o = s.every(function (t) {
                                var e =
                                        Math.min(a.right, t.right) -
                                        Math.max(a.left, t.left),
                                    n =
                                        Math.min(a.bottom, t.bottom) -
                                        Math.max(a.top, t.top);
                                return e > 0 && n > 0;
                            })),
                            o &&
                                a.bottom > 0 &&
                                a.right > 0 &&
                                a.left < n(t).width() &&
                                a.top < n(t).height()
                        );
                    },
                    c = o.opts.$thumb,
                    l = c ? c.offset() : 0;
                return (
                    l &&
                        c[0].ownerDocument === e &&
                        r(c) &&
                        ((i = a.$refs.stage.offset()),
                        (s = {
                            top:
                                l.top -
                                i.top +
                                parseFloat(c.css("border-top-width") || 0),
                            left:
                                l.left -
                                i.left +
                                parseFloat(c.css("border-left-width") || 0),
                            width: c.width(),
                            height: c.height(),
                            scaleX: 1,
                            scaleY: 1,
                        })),
                    s
                );
            },
            complete: function () {
                var t = this,
                    o = t.current,
                    i = {};
                o.isMoved ||
                    !o.isLoaded ||
                    o.isComplete ||
                    ((o.isComplete = !0),
                    o.$slide.siblings().trigger("onReset"),
                    t.preload("inline"),
                    f(o.$slide),
                    o.$slide.addClass("fancybox-slide--complete"),
                    n.each(t.slides, function (e, o) {
                        o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1
                            ? (i[o.pos] = o)
                            : o &&
                              (n.fancybox.stop(o.$slide),
                              o.$slide.off().remove());
                    }),
                    (t.slides = i),
                    t.updateCursor(),
                    t.trigger("afterShow"),
                    o.$slide.find("video,audio").first().trigger("play"),
                    (n(e.activeElement).is("[disabled]") ||
                        (o.opts.autoFocus &&
                            "image" != o.type &&
                            "iframe" !== o.type)) &&
                        t.focus());
            },
            preload: function (t) {
                var e = this,
                    n = e.slides[e.currPos + 1],
                    o = e.slides[e.currPos - 1];
                n && n.type === t && e.loadSlide(n),
                    o && o.type === t && e.loadSlide(o);
            },
            focus: function () {
                var t,
                    e = this.current;
                this.isClosing ||
                    (e &&
                        e.isComplete &&
                        ((t = e.$slide.find(
                            "input[autofocus]:enabled:visible:first"
                        )),
                        t.length ||
                            (t = e.$slide
                                .find("button,:input,[tabindex],a")
                                .filter(":enabled:visible:first"))),
                    (t = t && t.length ? t : this.$refs.container),
                    t.focus());
            },
            activate: function () {
                var t = this;
                n(".fancybox-container").each(function () {
                    var e = n(this).data("FancyBox");
                    e &&
                        e.id !== t.id &&
                        !e.isClosing &&
                        (e.trigger("onDeactivate"),
                        e.removeEvents(),
                        (e.isVisible = !1));
                }),
                    (t.isVisible = !0),
                    (t.current || t.isIdle) && (t.update(), t.updateControls()),
                    t.trigger("onActivate"),
                    t.addEvents();
            },
            close: function (t, e) {
                var o,
                    i,
                    a,
                    s,
                    r,
                    c,
                    l = this,
                    p = l.current,
                    h = function () {
                        l.cleanUp(t);
                    };
                return (
                    !l.isClosing &&
                    ((l.isClosing = !0),
                    l.trigger("beforeClose", t) === !1
                        ? ((l.isClosing = !1),
                          u(function () {
                              l.update();
                          }),
                          !1)
                        : (l.removeEvents(),
                          p.timouts && clearTimeout(p.timouts),
                          (a = p.$content),
                          (o = p.opts.animationEffect),
                          (i = n.isNumeric(e)
                              ? e
                              : o
                              ? p.opts.animationDuration
                              : 0),
                          p.$slide
                              .off(d)
                              .removeClass(
                                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                              ),
                          p.$slide.siblings().trigger("onReset").remove(),
                          i &&
                              l.$refs.container
                                  .removeClass("fancybox-is-open")
                                  .addClass("fancybox-is-closing"),
                          l.hideLoading(p),
                          l.hideControls(),
                          l.updateCursor(),
                          "zoom" !== o ||
                              (t !== !0 &&
                                  a &&
                                  i &&
                                  "image" === p.type &&
                                  !p.hasError &&
                                  (c = l.getThumbPos(p))) ||
                              (o = "fade"),
                          "zoom" === o
                              ? (n.fancybox.stop(a),
                                (r = n.fancybox.getTranslate(a)),
                                (r.width = r.width * r.scaleX),
                                (r.height = r.height * r.scaleY),
                                (s = p.opts.zoomOpacity),
                                "auto" == s &&
                                    (s =
                                        Math.abs(
                                            p.width / p.height -
                                                c.width / c.height
                                        ) > 0.1),
                                s && (c.opacity = 0),
                                (r.scaleX = r.width / c.width),
                                (r.scaleY = r.height / c.height),
                                (r.width = c.width),
                                (r.height = c.height),
                                n.fancybox.setTranslate(p.$content, r),
                                f(p.$content),
                                n.fancybox.animate(p.$content, c, i, h),
                                !0)
                              : (o && i
                                    ? t === !0
                                        ? setTimeout(h, i)
                                        : n.fancybox.animate(
                                              p.$slide.removeClass(
                                                  "fancybox-slide--current"
                                              ),
                                              "fancybox-animated fancybox-slide--previous fancybox-fx-" +
                                                  o,
                                              i,
                                              h
                                          )
                                    : h(),
                                !0)))
                );
            },
            cleanUp: function (t) {
                var o,
                    i,
                    a = this,
                    r = n("body");
                a.current.$slide.trigger("onReset"),
                    a.$refs.container.empty().remove(),
                    a.trigger("afterClose", t),
                    a.$lastFocus &&
                        a.current.opts.backFocus &&
                        a.$lastFocus.focus(),
                    (a.current = null),
                    (o = n.fancybox.getInstance()),
                    o
                        ? o.activate()
                        : (s.scrollTop(a.scrollTop).scrollLeft(a.scrollLeft),
                          r.removeClass(
                              "fancybox-active compensate-for-scrollbar"
                          ),
                          r.hasClass("fancybox-iosfix") &&
                              ((i = parseInt(e.body.style.top, 10)),
                              r
                                  .removeClass("fancybox-iosfix")
                                  .css("top", "")
                                  .scrollTop(i * -1)),
                          n("#fancybox-style-noscroll").remove());
            },
            trigger: function (t, e) {
                var o,
                    i = Array.prototype.slice.call(arguments, 1),
                    a = this,
                    s = e && e.opts ? e : a.current;
                return (
                    s ? i.unshift(s) : (s = a),
                    i.unshift(a),
                    n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
                    o === !1
                        ? o
                        : void ("afterClose" !== t && a.$refs
                              ? a.$refs.container.trigger(t + ".fb", i)
                              : r.trigger(t + ".fb", i))
                );
            },
            updateControls: function (t) {
                var e = this,
                    n = e.current,
                    o = n.index,
                    i = n.opts.caption,
                    a = e.$refs.container,
                    s = e.$refs.caption;
                n.$slide.trigger("refresh"),
                    (e.$caption = i && i.length ? s.html(i) : null),
                    e.isHiddenControls || e.isIdle || e.showControls(),
                    a.find("[data-fancybox-count]").html(e.group.length),
                    a.find("[data-fancybox-index]").html(o + 1),
                    a
                        .find("[data-fancybox-prev]")
                        .prop("disabled", !n.opts.loop && o <= 0),
                    a
                        .find("[data-fancybox-next]")
                        .prop(
                            "disabled",
                            !n.opts.loop && o >= e.group.length - 1
                        ),
                    "image" === n.type
                        ? a
                              .find("[data-fancybox-download]")
                              .attr("href", n.opts.image.src || n.src)
                              .show()
                        : a
                              .find(
                                  "[data-fancybox-download],[data-fancybox-zoom]"
                              )
                              .hide();
            },
            hideControls: function () {
                (this.isHiddenControls = !0),
                    this.$refs.container.removeClass(
                        "fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav"
                    );
            },
            showControls: function () {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;
                (t.isHiddenControls = !1),
                    (t.idleSecondsCounter = 0),
                    n
                        .toggleClass(
                            "fancybox-show-toolbar",
                            !(!e.toolbar || !e.buttons)
                        )
                        .toggleClass(
                            "fancybox-show-infobar",
                            !!(e.infobar && t.group.length > 1)
                        )
                        .toggleClass(
                            "fancybox-show-nav",
                            !!(e.arrows && t.group.length > 1)
                        )
                        .toggleClass("fancybox-is-modal", !!e.modal),
                    t.$caption
                        ? n.addClass("fancybox-show-caption ")
                        : n.removeClass("fancybox-show-caption");
            },
            toggleControls: function () {
                this.isHiddenControls
                    ? this.showControls()
                    : this.hideControls();
            },
        }),
            (n.fancybox = {
                version: "3.2.10",
                defaults: a,
                getInstance: function (t) {
                    var e = n(
                            '.fancybox-container:not(".fancybox-is-closing"):last'
                        ).data("FancyBox"),
                        o = Array.prototype.slice.call(arguments, 1);
                    return (
                        e instanceof p &&
                        ("string" === n.type(t)
                            ? e[t].apply(e, o)
                            : "function" === n.type(t) && t.apply(e, o),
                        e)
                    );
                },
                open: function (t, e, n) {
                    return new p(t, e, n);
                },
                close: function (t) {
                    var e = this.getInstance();
                    e && (e.close(), t === !0 && this.close());
                },
                destroy: function () {
                    this.close(!0), r.off("click.fb-start");
                },
                isMobile:
                    e.createTouch !== o &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                    ),
                use3d: (function () {
                    var n = e.createElement("div");
                    return (
                        t.getComputedStyle &&
                        t.getComputedStyle(n).getPropertyValue("transform") &&
                        !(e.documentMode && e.documentMode < 11)
                    );
                })(),
                getTranslate: function (t) {
                    var e;
                    if (!t || !t.length) return !1;
                    if (
                        ((e = t.eq(0).css("transform")),
                        e && e.indexOf("matrix") !== -1
                            ? ((e = e.split("(")[1]),
                              (e = e.split(")")[0]),
                              (e = e.split(",")))
                            : (e = []),
                        e.length)
                    )
                        (e =
                            e.length > 10
                                ? [e[13], e[12], e[0], e[5]]
                                : [e[5], e[4], e[0], e[3]]),
                            (e = e.map(parseFloat));
                    else {
                        e = [0, 0, 1, 1];
                        var n = /\.*translate\((.*)px,(.*)px\)/i,
                            o = n.exec(t.eq(0).attr("style"));
                        o &&
                            ((e[0] = parseFloat(o[2])),
                            (e[1] = parseFloat(o[1])));
                    }
                    return {
                        top: e[0],
                        left: e[1],
                        scaleX: e[2],
                        scaleY: e[3],
                        opacity: parseFloat(t.css("opacity")),
                        width: t.width(),
                        height: t.height(),
                    };
                },
                setTranslate: function (t, e) {
                    var n = "",
                        i = {};
                    if (t && e)
                        return (
                            (e.left === o && e.top === o) ||
                                ((n =
                                    (e.left === o
                                        ? t.position().left
                                        : e.left) +
                                    "px, " +
                                    (e.top === o ? t.position().top : e.top) +
                                    "px"),
                                (n = this.use3d
                                    ? "translate3d(" + n + ", 0px)"
                                    : "translate(" + n + ")")),
                            e.scaleX !== o &&
                                e.scaleY !== o &&
                                (n =
                                    (n.length ? n + " " : "") +
                                    "scale(" +
                                    e.scaleX +
                                    ", " +
                                    e.scaleY +
                                    ")"),
                            n.length && (i.transform = n),
                            e.opacity !== o && (i.opacity = e.opacity),
                            e.width !== o && (i.width = e.width),
                            e.height !== o && (i.height = e.height),
                            t.css(i)
                        );
                },
                animate: function (t, e, i, a, s) {
                    n.isFunction(i) && ((a = i), (i = null)),
                        n.isPlainObject(e) || t.removeAttr("style"),
                        t.on(d, function (i) {
                            (!i ||
                                !i.originalEvent ||
                                (t.is(i.originalEvent.target) &&
                                    "z-index" !=
                                        i.originalEvent.propertyName)) &&
                                (n.fancybox.stop(t),
                                n.isPlainObject(e)
                                    ? (e.scaleX !== o &&
                                          e.scaleY !== o &&
                                          (t.css("transition-duration", ""),
                                          (e.width = Math.round(
                                              t.width() * e.scaleX
                                          )),
                                          (e.height = Math.round(
                                              t.height() * e.scaleY
                                          )),
                                          (e.scaleX = 1),
                                          (e.scaleY = 1),
                                          n.fancybox.setTranslate(t, e)),
                                      s === !1 && t.removeAttr("style"))
                                    : s !== !0 && t.removeClass(e),
                                n.isFunction(a) && a(i));
                        }),
                        n.isNumeric(i) &&
                            t.css("transition-duration", i + "ms"),
                        n.isPlainObject(e)
                            ? n.fancybox.setTranslate(t, e)
                            : t.addClass(e),
                        e.scaleX &&
                            t.hasClass("fancybox-image-wrap") &&
                            t.parent().addClass("fancybox-is-scaling"),
                        t.data(
                            "timer",
                            setTimeout(function () {
                                t.trigger("transitionend");
                            }, i + 16)
                        );
                },
                stop: function (t) {
                    clearTimeout(t.data("timer")),
                        t.off("transitionend").css("transition-duration", ""),
                        t.hasClass("fancybox-image-wrap") &&
                            t.parent().removeClass("fancybox-is-scaling");
                },
            }),
            (n.fn.fancybox = function (t) {
                var e;
                return (
                    (t = t || {}),
                    (e = t.selector || !1),
                    e
                        ? n("body")
                              .off("click.fb-start", e)
                              .on("click.fb-start", e, { options: t }, i)
                        : this.off("click.fb-start").on(
                              "click.fb-start",
                              { items: this, options: t },
                              i
                          ),
                    this
                );
            }),
            r.on("click.fb-start", "[data-fancybox]", i);
    }
})(window, document, window.jQuery || jQuery),
    (function (t) {
        "use strict";
        var e = function (e, n, o) {
                if (e)
                    return (
                        (o = o || ""),
                        "object" === t.type(o) && (o = t.param(o, !0)),
                        t.each(n, function (t, n) {
                            e = e.replace("$" + t, n || "");
                        }),
                        o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
                        e
                    );
            },
            n = {
                youtube: {
                    matcher:
                        /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1,
                    },
                    paramPlace: 8,
                    type: "iframe",
                    url: "//www.youtube.com/embed/$4",
                    thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1,
                        api: 1,
                    },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2",
                },
                metacafe: {
                    matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                    type: "iframe",
                    url: "//www.metacafe.com/embed/$1/?ap=1",
                },
                dailymotion: {
                    matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                    params: { additionalInfos: 0, autoStart: 1 },
                    type: "iframe",
                    url: "//www.dailymotion.com/embed/video/$1",
                },
                vine: {
                    matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                    type: "iframe",
                    url: "//vine.co/v/$1/embed/simple",
                },
                instagram: {
                    matcher:
                        /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l",
                },
                gmap_place: {
                    matcher:
                        /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function (t) {
                        return (
                            "//maps.google." +
                            t[2] +
                            "/?ll=" +
                            (t[9]
                                ? t[9] +
                                  "&z=" +
                                  Math.floor(t[10]) +
                                  (t[12] ? t[12].replace(/^\//, "&") : "")
                                : t[12]) +
                            "&output=" +
                            (t[12] && t[12].indexOf("layer=c") > 0
                                ? "svembed"
                                : "embed")
                        );
                    },
                },
                gmap_search: {
                    matcher:
                        /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function (t) {
                        return (
                            "//maps.google." +
                            t[2] +
                            "/maps?q=" +
                            t[5].replace("query=", "q=").replace("api=1", "") +
                            "&output=embed"
                        );
                    },
                },
            };
        t(document).on("objectNeedsType.fb", function (o, i, a) {
            var s,
                r,
                c,
                l,
                u,
                d,
                f,
                p = a.src || "",
                h = !1;
            (s = t.extend(!0, {}, n, a.opts.media)),
                t.each(s, function (n, o) {
                    if ((c = p.match(o.matcher))) {
                        if (
                            ((h = o.type),
                            (d = {}),
                            o.paramPlace && c[o.paramPlace])
                        ) {
                            (u = c[o.paramPlace]),
                                "?" == u[0] && (u = u.substring(1)),
                                (u = u.split("&"));
                            for (var i = 0; i < u.length; ++i) {
                                var s = u[i].split("=", 2);
                                2 == s.length &&
                                    (d[s[0]] = decodeURIComponent(
                                        s[1].replace(/\+/g, " ")
                                    ));
                            }
                        }
                        return (
                            (l = t.extend(!0, {}, o.params, a.opts[n], d)),
                            (p =
                                "function" === t.type(o.url)
                                    ? o.url.call(this, c, l, a)
                                    : e(o.url, c, l)),
                            (r =
                                "function" === t.type(o.thumb)
                                    ? o.thumb.call(this, c, l, a)
                                    : e(o.thumb, c)),
                            "vimeo" === n && (p = p.replace("&%23", "#")),
                            !1
                        );
                    }
                }),
                h
                    ? ((a.src = p),
                      (a.type = h),
                      a.opts.thumb ||
                          (a.opts.$thumb && a.opts.$thumb.length) ||
                          (a.opts.thumb = r),
                      "iframe" === h &&
                          (t.extend(!0, a.opts, {
                              iframe: {
                                  preload: !1,
                                  attr: { scrolling: "no" },
                              },
                          }),
                          (a.contentProvider = f),
                          (a.opts.slideClass +=
                              " fancybox-slide--" +
                              ("gmap_place" == f || "gmap_search" == f
                                  ? "map"
                                  : "video"))))
                    : p && (a.type = a.opts.defaultType);
        });
    })(window.jQuery || jQuery),
    (function (t, e, n) {
        "use strict";
        var o = (function () {
                return (
                    t.requestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.oRequestAnimationFrame ||
                    function (e) {
                        return t.setTimeout(e, 1e3 / 60);
                    }
                );
            })(),
            i = (function () {
                return (
                    t.cancelAnimationFrame ||
                    t.webkitCancelAnimationFrame ||
                    t.mozCancelAnimationFrame ||
                    t.oCancelAnimationFrame ||
                    function (e) {
                        t.clearTimeout(e);
                    }
                );
            })(),
            a = function (e) {
                var n = [];
                (e = e.originalEvent || e || t.e),
                    (e =
                        e.touches && e.touches.length
                            ? e.touches
                            : e.changedTouches && e.changedTouches.length
                            ? e.changedTouches
                            : [e]);
                for (var o in e)
                    e[o].pageX
                        ? n.push({ x: e[o].pageX, y: e[o].pageY })
                        : e[o].clientX &&
                          n.push({ x: e[o].clientX, y: e[o].clientY });
                return n;
            },
            s = function (t, e, n) {
                return e && t
                    ? "x" === n
                        ? t.x - e.x
                        : "y" === n
                        ? t.y - e.y
                        : Math.sqrt(
                              Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)
                          )
                    : 0;
            },
            r = function (t) {
                if (
                    t.is(
                        'a,area,button,[role="button"],input,label,select,summary,textarea'
                    ) ||
                    n.isFunction(t.get(0).onclick) ||
                    t.data("selectable")
                )
                    return !0;
                for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
                    if ("data-fancybox-" === o[e].nodeName.substr(0, 14))
                        return !0;
                return !1;
            },
            c = function (e) {
                var n = t.getComputedStyle(e)["overflow-y"],
                    o = t.getComputedStyle(e)["overflow-x"],
                    i =
                        ("scroll" === n || "auto" === n) &&
                        e.scrollHeight > e.clientHeight,
                    a =
                        ("scroll" === o || "auto" === o) &&
                        e.scrollWidth > e.clientWidth;
                return i || a;
            },
            l = function (t) {
                for (var e = !1; ; ) {
                    if ((e = c(t.get(0)))) break;
                    if (
                        ((t = t.parent()),
                        !t.length ||
                            t.hasClass("fancybox-stage") ||
                            t.is("body"))
                    )
                        break;
                }
                return e;
            },
            u = function (t) {
                var e = this;
                (e.instance = t),
                    (e.$bg = t.$refs.bg),
                    (e.$stage = t.$refs.stage),
                    (e.$container = t.$refs.container),
                    e.destroy(),
                    e.$container.on(
                        "touchstart.fb.touch mousedown.fb.touch",
                        n.proxy(e, "ontouchstart")
                    );
            };
        (u.prototype.destroy = function () {
            this.$container.off(".fb.touch");
        }),
            (u.prototype.ontouchstart = function (o) {
                var i = this,
                    c = n(o.target),
                    u = i.instance,
                    d = u.current,
                    f = d.$content,
                    p = "touchstart" == o.type;
                if (
                    (p && i.$container.off("mousedown.fb.touch"),
                    (!o.originalEvent || 2 != o.originalEvent.button) &&
                        c.length &&
                        !r(c) &&
                        !r(c.parent()) &&
                        (c.is("img") ||
                            !(
                                o.originalEvent.clientX >
                                c[0].clientWidth + c.offset().left
                            )))
                ) {
                    if (!d || i.instance.isAnimating || i.instance.isClosing)
                        return o.stopPropagation(), void o.preventDefault();
                    if (
                        ((i.realPoints = i.startPoints = a(o)), i.startPoints)
                    ) {
                        if (
                            (o.stopPropagation(),
                            (i.startEvent = o),
                            (i.canTap = !0),
                            (i.$target = c),
                            (i.$content = f),
                            (i.opts = d.opts.touch),
                            (i.isPanning = !1),
                            (i.isSwiping = !1),
                            (i.isZooming = !1),
                            (i.isScrolling = !1),
                            (i.sliderStartPos = i.sliderLastPos || {
                                top: 0,
                                left: 0,
                            }),
                            (i.contentStartPos = n.fancybox.getTranslate(
                                i.$content
                            )),
                            (i.contentLastPos = null),
                            (i.startTime = new Date().getTime()),
                            (i.distanceX = i.distanceY = i.distance = 0),
                            (i.canvasWidth = Math.round(
                                d.$slide[0].clientWidth
                            )),
                            (i.canvasHeight = Math.round(
                                d.$slide[0].clientHeight
                            )),
                            n(e)
                                .off(".fb.touch")
                                .on(
                                    p
                                        ? "touchend.fb.touch touchcancel.fb.touch"
                                        : "mouseup.fb.touch mouseleave.fb.touch",
                                    n.proxy(i, "ontouchend")
                                )
                                .on(
                                    p
                                        ? "touchmove.fb.touch"
                                        : "mousemove.fb.touch",
                                    n.proxy(i, "ontouchmove")
                                ),
                            n.fancybox.isMobile &&
                                e.addEventListener("scroll", i.onscroll, !0),
                            (!i.opts && !u.canPan()) ||
                                (!c.is(i.$stage) && !i.$stage.find(c).length))
                        )
                            return void (c.is("img") && o.preventDefault());
                        (n.fancybox.isMobile && (l(c) || l(c.parent()))) ||
                            o.preventDefault(),
                            1 === i.startPoints.length &&
                                ("image" === d.type &&
                                (i.contentStartPos.width > i.canvasWidth + 1 ||
                                    i.contentStartPos.height >
                                        i.canvasHeight + 1)
                                    ? (n.fancybox.stop(i.$content),
                                      i.$content.css("transition-duration", ""),
                                      (i.isPanning = !0))
                                    : (i.isSwiping = !0),
                                i.$container.addClass(
                                    "fancybox-controls--isGrabbing"
                                )),
                            2 !== i.startPoints.length ||
                                u.isAnimating ||
                                d.hasError ||
                                "image" !== d.type ||
                                (!d.isLoaded && !d.$ghost) ||
                                ((i.canTap = !1),
                                (i.isSwiping = !1),
                                (i.isPanning = !1),
                                (i.isZooming = !0),
                                n.fancybox.stop(i.$content),
                                i.$content.css("transition-duration", ""),
                                (i.centerPointStartX =
                                    0.5 *
                                        (i.startPoints[0].x +
                                            i.startPoints[1].x) -
                                    n(t).scrollLeft()),
                                (i.centerPointStartY =
                                    0.5 *
                                        (i.startPoints[0].y +
                                            i.startPoints[1].y) -
                                    n(t).scrollTop()),
                                (i.percentageOfImageAtPinchPointX =
                                    (i.centerPointStartX -
                                        i.contentStartPos.left) /
                                    i.contentStartPos.width),
                                (i.percentageOfImageAtPinchPointY =
                                    (i.centerPointStartY -
                                        i.contentStartPos.top) /
                                    i.contentStartPos.height),
                                (i.startDistanceBetweenFingers = s(
                                    i.startPoints[0],
                                    i.startPoints[1]
                                )));
                    }
                }
            }),
            (u.prototype.onscroll = function (t) {
                self.isScrolling = !0;
            }),
            (u.prototype.ontouchmove = function (t) {
                var e = this,
                    o = n(t.target);
                return e.isScrolling ||
                    (!o.is(e.$stage) && !e.$stage.find(o).length)
                    ? void (e.canTap = !1)
                    : ((e.newPoints = a(t)),
                      void (
                          (e.opts || e.instance.canPan()) &&
                          e.newPoints &&
                          e.newPoints.length &&
                          ((e.isSwiping && e.isSwiping === !0) ||
                              t.preventDefault(),
                          (e.distanceX = s(
                              e.newPoints[0],
                              e.startPoints[0],
                              "x"
                          )),
                          (e.distanceY = s(
                              e.newPoints[0],
                              e.startPoints[0],
                              "y"
                          )),
                          (e.distance = s(e.newPoints[0], e.startPoints[0])),
                          e.distance > 0 &&
                              (e.isSwiping
                                  ? e.onSwipe(t)
                                  : e.isPanning
                                  ? e.onPan()
                                  : e.isZooming && e.onZoom()))
                      ));
            }),
            (u.prototype.onSwipe = function (e) {
                var a,
                    s = this,
                    r = s.isSwiping,
                    c = s.sliderStartPos.left || 0;
                if (r !== !0)
                    "x" == r &&
                        (s.distanceX > 0 &&
                        (s.instance.group.length < 2 ||
                            (0 === s.instance.current.index &&
                                !s.instance.current.opts.loop))
                            ? (c += Math.pow(s.distanceX, 0.8))
                            : s.distanceX < 0 &&
                              (s.instance.group.length < 2 ||
                                  (s.instance.current.index ===
                                      s.instance.group.length - 1 &&
                                      !s.instance.current.opts.loop))
                            ? (c -= Math.pow(-s.distanceX, 0.8))
                            : (c += s.distanceX)),
                        (s.sliderLastPos = {
                            top:
                                "x" == r
                                    ? 0
                                    : s.sliderStartPos.top + s.distanceY,
                            left: c,
                        }),
                        s.requestId && (i(s.requestId), (s.requestId = null)),
                        (s.requestId = o(function () {
                            s.sliderLastPos &&
                                (n.each(s.instance.slides, function (t, e) {
                                    var o = e.pos - s.instance.currPos;
                                    n.fancybox.setTranslate(e.$slide, {
                                        top: s.sliderLastPos.top,
                                        left:
                                            s.sliderLastPos.left +
                                            o * s.canvasWidth +
                                            o * e.opts.gutter,
                                    });
                                }),
                                s.$container.addClass("fancybox-is-sliding"));
                        }));
                else if (Math.abs(s.distance) > 10) {
                    if (
                        ((s.canTap = !1),
                        s.instance.group.length < 2 && s.opts.vertical
                            ? (s.isSwiping = "y")
                            : s.instance.isDragging ||
                              s.opts.vertical === !1 ||
                              ("auto" === s.opts.vertical && n(t).width() > 800)
                            ? (s.isSwiping = "x")
                            : ((a = Math.abs(
                                  (180 * Math.atan2(s.distanceY, s.distanceX)) /
                                      Math.PI
                              )),
                              (s.isSwiping = a > 45 && a < 135 ? "y" : "x")),
                        (s.canTap = !1),
                        "y" === s.isSwiping &&
                            n.fancybox.isMobile &&
                            (l(s.$target) || l(s.$target.parent())))
                    )
                        return void (s.isScrolling = !0);
                    (s.instance.isDragging = s.isSwiping),
                        (s.startPoints = s.newPoints),
                        n.each(s.instance.slides, function (t, e) {
                            n.fancybox.stop(e.$slide),
                                e.$slide.css("transition-duration", ""),
                                (e.inTransition = !1),
                                e.pos === s.instance.current.pos &&
                                    (s.sliderStartPos.left =
                                        n.fancybox.getTranslate(e.$slide).left);
                        }),
                        s.instance.SlideShow &&
                            s.instance.SlideShow.isActive &&
                            s.instance.SlideShow.stop();
                }
            }),
            (u.prototype.onPan = function () {
                var t = this;
                return s(t.newPoints[0], t.realPoints[0]) <
                    (n.fancybox.isMobile ? 10 : 5)
                    ? void (t.startPoints = t.newPoints)
                    : ((t.canTap = !1),
                      (t.contentLastPos = t.limitMovement()),
                      t.requestId && (i(t.requestId), (t.requestId = null)),
                      void (t.requestId = o(function () {
                          n.fancybox.setTranslate(t.$content, t.contentLastPos);
                      })));
            }),
            (u.prototype.limitMovement = function () {
                var t,
                    e,
                    n,
                    o,
                    i,
                    a,
                    s = this,
                    r = s.canvasWidth,
                    c = s.canvasHeight,
                    l = s.distanceX,
                    u = s.distanceY,
                    d = s.contentStartPos,
                    f = d.left,
                    p = d.top,
                    h = d.width,
                    g = d.height;
                return (
                    (i = h > r ? f + l : f),
                    (a = p + u),
                    (t = Math.max(0, 0.5 * r - 0.5 * h)),
                    (e = Math.max(0, 0.5 * c - 0.5 * g)),
                    (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
                    (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
                    h > r &&
                        (l > 0 &&
                            i > t &&
                            (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
                        l < 0 &&
                            i < n &&
                            (i = n + 1 - Math.pow(n - f - l, 0.8) || 0)),
                    g > c &&
                        (u > 0 &&
                            a > e &&
                            (a = e - 1 + Math.pow(-e + p + u, 0.8) || 0),
                        u < 0 &&
                            a < o &&
                            (a = o + 1 - Math.pow(o - p - u, 0.8) || 0)),
                    { top: a, left: i, scaleX: d.scaleX, scaleY: d.scaleY }
                );
            }),
            (u.prototype.limitPosition = function (t, e, n, o) {
                var i = this,
                    a = i.canvasWidth,
                    s = i.canvasHeight;
                return (
                    n > a
                        ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
                        : (t = Math.max(0, a / 2 - n / 2)),
                    o > s
                        ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
                        : (e = Math.max(0, s / 2 - o / 2)),
                    { top: e, left: t }
                );
            }),
            (u.prototype.onZoom = function () {
                var e = this,
                    a = e.contentStartPos.width,
                    r = e.contentStartPos.height,
                    c = e.contentStartPos.left,
                    l = e.contentStartPos.top,
                    u = s(e.newPoints[0], e.newPoints[1]),
                    d = u / e.startDistanceBetweenFingers,
                    f = Math.floor(a * d),
                    p = Math.floor(r * d),
                    h = (a - f) * e.percentageOfImageAtPinchPointX,
                    g = (r - p) * e.percentageOfImageAtPinchPointY,
                    b =
                        (e.newPoints[0].x + e.newPoints[1].x) / 2 -
                        n(t).scrollLeft(),
                    m =
                        (e.newPoints[0].y + e.newPoints[1].y) / 2 -
                        n(t).scrollTop(),
                    y = b - e.centerPointStartX,
                    v = m - e.centerPointStartY,
                    x = c + (h + y),
                    w = l + (g + v),
                    $ = {
                        top: w,
                        left: x,
                        scaleX: e.contentStartPos.scaleX * d,
                        scaleY: e.contentStartPos.scaleY * d,
                    };
                (e.canTap = !1),
                    (e.newWidth = f),
                    (e.newHeight = p),
                    (e.contentLastPos = $),
                    e.requestId && (i(e.requestId), (e.requestId = null)),
                    (e.requestId = o(function () {
                        n.fancybox.setTranslate(e.$content, e.contentLastPos);
                    }));
            }),
            (u.prototype.ontouchend = function (t) {
                var o = this,
                    s = Math.max(new Date().getTime() - o.startTime, 1),
                    r = o.isSwiping,
                    c = o.isPanning,
                    l = o.isZooming,
                    u = o.isScrolling;
                return (
                    (o.endPoints = a(t)),
                    o.$container.removeClass("fancybox-controls--isGrabbing"),
                    n(e).off(".fb.touch"),
                    e.removeEventListener("scroll", o.onscroll, !0),
                    o.requestId && (i(o.requestId), (o.requestId = null)),
                    (o.isSwiping = !1),
                    (o.isPanning = !1),
                    (o.isZooming = !1),
                    (o.isScrolling = !1),
                    (o.instance.isDragging = !1),
                    o.canTap
                        ? o.onTap(t)
                        : ((o.speed = 366),
                          (o.velocityX = (o.distanceX / s) * 0.5),
                          (o.velocityY = (o.distanceY / s) * 0.5),
                          (o.speedX = Math.max(
                              0.5 * o.speed,
                              Math.min(
                                  1.5 * o.speed,
                                  (1 / Math.abs(o.velocityX)) * o.speed
                              )
                          )),
                          void (c
                              ? o.endPanning()
                              : l
                              ? o.endZooming()
                              : o.endSwiping(r, u)))
                );
            }),
            (u.prototype.endSwiping = function (t, e) {
                var o = this,
                    i = !1,
                    a = o.instance.group.length;
                (o.sliderLastPos = null),
                    "y" == t && !e && Math.abs(o.distanceY) > 50
                        ? (n.fancybox.animate(
                              o.instance.current.$slide,
                              {
                                  top:
                                      o.sliderStartPos.top +
                                      o.distanceY +
                                      150 * o.velocityY,
                                  opacity: 0,
                              },
                              150
                          ),
                          (i = o.instance.close(!0, 300)))
                        : "x" == t && o.distanceX > 50 && a > 1
                        ? (i = o.instance.previous(o.speedX))
                        : "x" == t &&
                          o.distanceX < -50 &&
                          a > 1 &&
                          (i = o.instance.next(o.speedX)),
                    i !== !1 ||
                        ("x" != t && "y" != t) ||
                        (e || a < 2
                            ? o.instance.centerSlide(o.instance.current, 150)
                            : o.instance.jumpTo(o.instance.current.index)),
                    o.$container.removeClass("fancybox-is-sliding");
            }),
            (u.prototype.endPanning = function () {
                var t,
                    e,
                    o,
                    i = this;
                i.contentLastPos &&
                    (i.opts.momentum === !1
                        ? ((t = i.contentLastPos.left),
                          (e = i.contentLastPos.top))
                        : ((t = i.contentLastPos.left + i.velocityX * i.speed),
                          (e = i.contentLastPos.top + i.velocityY * i.speed)),
                    (o = i.limitPosition(
                        t,
                        e,
                        i.contentStartPos.width,
                        i.contentStartPos.height
                    )),
                    (o.width = i.contentStartPos.width),
                    (o.height = i.contentStartPos.height),
                    n.fancybox.animate(i.$content, o, 330));
            }),
            (u.prototype.endZooming = function () {
                var t,
                    e,
                    o,
                    i,
                    a = this,
                    s = a.instance.current,
                    r = a.newWidth,
                    c = a.newHeight;
                a.contentLastPos &&
                    ((t = a.contentLastPos.left),
                    (e = a.contentLastPos.top),
                    (i = {
                        top: e,
                        left: t,
                        width: r,
                        height: c,
                        scaleX: 1,
                        scaleY: 1,
                    }),
                    n.fancybox.setTranslate(a.$content, i),
                    r < a.canvasWidth && c < a.canvasHeight
                        ? a.instance.scaleToFit(150)
                        : r > s.width || c > s.height
                        ? a.instance.scaleToActual(
                              a.centerPointStartX,
                              a.centerPointStartY,
                              150
                          )
                        : ((o = a.limitPosition(t, e, r, c)),
                          n.fancybox.setTranslate(
                              a.content,
                              n.fancybox.getTranslate(a.$content)
                          ),
                          n.fancybox.animate(a.$content, o, 150)));
            }),
            (u.prototype.onTap = function (t) {
                var e,
                    o = this,
                    i = n(t.target),
                    s = o.instance,
                    r = s.current,
                    c = (t && a(t)) || o.startPoints,
                    l = c[0] ? c[0].x - o.$stage.offset().left : 0,
                    u = c[0] ? c[0].y - o.$stage.offset().top : 0,
                    d = function (e) {
                        var i = r.opts[e];
                        if ((n.isFunction(i) && (i = i.apply(s, [r, t])), i))
                            switch (i) {
                                case "close":
                                    s.close(o.startEvent);
                                    break;
                                case "toggleControls":
                                    s.toggleControls(!0);
                                    break;
                                case "next":
                                    s.next();
                                    break;
                                case "nextOrClose":
                                    s.group.length > 1
                                        ? s.next()
                                        : s.close(o.startEvent);
                                    break;
                                case "zoom":
                                    "image" == r.type &&
                                        (r.isLoaded || r.$ghost) &&
                                        (s.canPan()
                                            ? s.scaleToFit()
                                            : s.isScaledDown()
                                            ? s.scaleToActual(l, u)
                                            : s.group.length < 2 &&
                                              s.close(o.startEvent));
                            }
                    };
                if (
                    (!t.originalEvent || 2 != t.originalEvent.button) &&
                    (i.is("img") || !(l > i[0].clientWidth + i.offset().left))
                ) {
                    if (
                        i.is(
                            ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
                        )
                    )
                        e = "Outside";
                    else if (i.is(".fancybox-slide")) e = "Slide";
                    else {
                        if (
                            !s.current.$content ||
                            !s.current.$content.find(i).addBack().filter(i)
                                .length
                        )
                            return;
                        e = "Content";
                    }
                    if (o.tapped) {
                        if (
                            (clearTimeout(o.tapped),
                            (o.tapped = null),
                            Math.abs(l - o.tapX) > 50 ||
                                Math.abs(u - o.tapY) > 50)
                        )
                            return this;
                        d("dblclick" + e);
                    } else
                        (o.tapX = l),
                            (o.tapY = u),
                            r.opts["dblclick" + e] &&
                            r.opts["dblclick" + e] !== r.opts["click" + e]
                                ? (o.tapped = setTimeout(function () {
                                      (o.tapped = null), d("click" + e);
                                  }, 500))
                                : d("click" + e);
                    return this;
                }
            }),
            n(e).on("onActivate.fb", function (t, e) {
                e && !e.Guestures && (e.Guestures = new u(e));
            });
    })(window, document, window.jQuery || jQuery),
    (function (t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3 },
        });
        var n = function (t) {
            (this.instance = t), this.init();
        };
        e.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this;
                (t.$button = t.instance.$refs.toolbar
                    .find("[data-fancybox-play]")
                    .on("click", function () {
                        t.toggle();
                    })),
                    (t.instance.group.length < 2 ||
                        !t.instance.group[t.instance.currIndex].opts
                            .slideShow) &&
                        t.$button.hide();
            },
            set: function (t) {
                var e = this;
                e.instance &&
                e.instance.current &&
                (t === !0 ||
                    e.instance.current.opts.loop ||
                    e.instance.currIndex < e.instance.group.length - 1)
                    ? (e.timer = setTimeout(function () {
                          e.isActive &&
                              e.instance.jumpTo(
                                  (e.instance.currIndex + 1) %
                                      e.instance.group.length
                              );
                      }, e.instance.current.opts.slideShow.speed))
                    : (e.stop(),
                      (e.instance.idleSecondsCounter = 0),
                      e.instance.showControls());
            },
            clear: function () {
                var t = this;
                clearTimeout(t.timer), (t.timer = null);
            },
            start: function () {
                var t = this,
                    e = t.instance.current;
                e &&
                    ((t.isActive = !0),
                    t.$button
                        .attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP)
                        .removeClass("fancybox-button--play")
                        .addClass("fancybox-button--pause"),
                    t.set(!0));
            },
            stop: function () {
                var t = this,
                    e = t.instance.current;
                t.clear(),
                    t.$button
                        .attr("title", e.opts.i18n[e.opts.lang].PLAY_START)
                        .removeClass("fancybox-button--pause")
                        .addClass("fancybox-button--play"),
                    (t.isActive = !1);
            },
            toggle: function () {
                var t = this;
                t.isActive ? t.stop() : t.start();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    e && !e.SlideShow && (e.SlideShow = new n(e));
                },
                "beforeShow.fb": function (t, e, n, o) {
                    var i = e && e.SlideShow;
                    o
                        ? i && n.opts.slideShow.autoStart && i.start()
                        : i && i.isActive && i.clear();
                },
                "afterShow.fb": function (t, e, n) {
                    var o = e && e.SlideShow;
                    o && o.isActive && o.set();
                },
                "afterKeydown.fb": function (n, o, i, a, s) {
                    var r = o && o.SlideShow;
                    !r ||
                        !i.opts.slideShow ||
                        (80 !== s && 32 !== s) ||
                        e(t.activeElement).is("button,a,input") ||
                        (a.preventDefault(), r.toggle());
                },
                "beforeClose.fb onDeactivate.fb": function (t, e) {
                    var n = e && e.SlideShow;
                    n && n.stop();
                },
            }),
            e(t).on("visibilitychange", function () {
                var n = e.fancybox.getInstance(),
                    o = n && n.SlideShow;
                o && o.isActive && (t.hidden ? o.clear() : o.set());
            });
    })(document, window.jQuery || jQuery),
    (function (t, e) {
        "use strict";
        var n = (function () {
            var e,
                n,
                o,
                i = [
                    [
                        "requestFullscreen",
                        "exitFullscreen",
                        "fullscreenElement",
                        "fullscreenEnabled",
                        "fullscreenchange",
                        "fullscreenerror",
                    ],
                    [
                        "webkitRequestFullscreen",
                        "webkitExitFullscreen",
                        "webkitFullscreenElement",
                        "webkitFullscreenEnabled",
                        "webkitfullscreenchange",
                        "webkitfullscreenerror",
                    ],
                    [
                        "webkitRequestFullScreen",
                        "webkitCancelFullScreen",
                        "webkitCurrentFullScreenElement",
                        "webkitCancelFullScreen",
                        "webkitfullscreenchange",
                        "webkitfullscreenerror",
                    ],
                    [
                        "mozRequestFullScreen",
                        "mozCancelFullScreen",
                        "mozFullScreenElement",
                        "mozFullScreenEnabled",
                        "mozfullscreenchange",
                        "mozfullscreenerror",
                    ],
                    [
                        "msRequestFullscreen",
                        "msExitFullscreen",
                        "msFullscreenElement",
                        "msFullscreenEnabled",
                        "MSFullscreenChange",
                        "MSFullscreenError",
                    ],
                ],
                a = {};
            for (n = 0; n < i.length; n++)
                if (((e = i[n]), e && e[1] in t)) {
                    for (o = 0; o < e.length; o++) a[i[0][o]] = e[o];
                    return a;
                }
            return !1;
        })();
        if (!n)
            return void (
                e &&
                e.fancybox &&
                (e.fancybox.defaults.btnTpl.fullScreen = !1)
            );
        var o = {
            request: function (e) {
                (e = e || t.documentElement),
                    e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
            },
            exit: function () {
                t[n.exitFullscreen]();
            },
            toggle: function (e) {
                (e = e || t.documentElement),
                    this.isFullscreen() ? this.exit() : this.request(e);
            },
            isFullscreen: function () {
                return Boolean(t[n.fullscreenElement]);
            },
            enabled: function () {
                return Boolean(t[n.fullscreenEnabled]);
            },
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen:
                    '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>',
            },
            fullScreen: { autoStart: !1 },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    var n;
                    e && e.group[e.currIndex].opts.fullScreen
                        ? ((n = e.$refs.container),
                          n.on(
                              "click.fb-fullscreen",
                              "[data-fancybox-fullscreen]",
                              function (t) {
                                  t.stopPropagation(),
                                      t.preventDefault(),
                                      o.toggle(n[0]);
                              }
                          ),
                          e.opts.fullScreen &&
                              e.opts.fullScreen.autoStart === !0 &&
                              o.request(n[0]),
                          (e.FullScreen = o))
                        : e &&
                          e.$refs.toolbar
                              .find("[data-fancybox-fullscreen]")
                              .hide();
                },
                "afterKeydown.fb": function (t, e, n, o, i) {
                    e &&
                        e.FullScreen &&
                        70 === i &&
                        (o.preventDefault(),
                        e.FullScreen.toggle(e.$refs.container[0]));
                },
                "beforeClose.fb": function (t) {
                    t && t.FullScreen && o.exit();
                },
            }),
            e(t).on(n.fullscreenchange, function () {
                var t = o.isFullscreen(),
                    n = e.fancybox.getInstance();
                n &&
                    (n.current &&
                        "image" === n.current.type &&
                        n.isAnimating &&
                        (n.current.$content.css("transition", "none"),
                        (n.isAnimating = !1),
                        n.update(!0, !0, 0)),
                    n.trigger("onFullscreenChange", t),
                    n.$refs.container.toggleClass("fancybox-is-fullscreen", t));
            });
    })(document, window.jQuery || jQuery),
    (function (t, e) {
        "use strict";
        e.fancybox.defaults = e.extend(
            !0,
            {
                btnTpl: {
                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>',
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y",
                },
            },
            e.fancybox.defaults
        );
        var n = function (t) {
            this.init(t);
        };
        e.extend(n.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this;
                (e.instance = t), (t.Thumbs = e);
                var n = t.group[0],
                    o = t.group[1];
                (e.opts = t.group[t.currIndex].opts.thumbs),
                    (e.$button = t.$refs.toolbar.find(
                        "[data-fancybox-thumbs]"
                    )),
                    e.opts &&
                    n &&
                    o &&
                    ("image" == n.type || n.opts.thumb || n.opts.$thumb) &&
                    ("image" == o.type || o.opts.thumb || o.opts.$thumb)
                        ? (e.$button.show().on("click", function () {
                              e.toggle();
                          }),
                          (e.isActive = !0))
                        : e.$button.hide();
            },
            create: function () {
                var t,
                    n,
                    o = this,
                    i = o.instance,
                    a = o.opts.parentEl;
                (o.$grid = e(
                    '<div class="fancybox-thumbs fancybox-thumbs-' +
                        o.opts.axis +
                        '"></div>'
                ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
                    (t = "<ul>"),
                    e.each(i.group, function (e, o) {
                        (n =
                            o.opts.thumb ||
                            (o.opts.$thumb ? o.opts.$thumb.attr("src") : null)),
                            n || "image" !== o.type || (n = o.src),
                            n &&
                                n.length &&
                                (t +=
                                    '<li data-index="' +
                                    e +
                                    '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' +
                                    n +
                                    '" /></li>');
                    }),
                    (t += "</ul>"),
                    (o.$list = e(t)
                        .appendTo(o.$grid)
                        .on("click", "li", function () {
                            i.jumpTo(e(this).data("index"));
                        })),
                    o.$list
                        .find("img")
                        .hide()
                        .one("load", function () {
                            var t,
                                n,
                                o,
                                i,
                                a = e(this)
                                    .parent()
                                    .removeClass("fancybox-thumbs-loading"),
                                s = a.outerWidth(),
                                r = a.outerHeight();
                            (t = this.naturalWidth || this.width),
                                (n = this.naturalHeight || this.height),
                                (o = t / s),
                                (i = n / r),
                                o >= 1 &&
                                    i >= 1 &&
                                    (o > i
                                        ? ((t /= i), (n = r))
                                        : ((t = s), (n /= o))),
                                e(this)
                                    .css({
                                        width: Math.floor(t),
                                        height: Math.floor(n),
                                        "margin-top":
                                            n > r
                                                ? Math.floor(0.3 * r - 0.3 * n)
                                                : Math.floor(0.5 * r - 0.5 * n),
                                        "margin-left": Math.floor(
                                            0.5 * s - 0.5 * t
                                        ),
                                    })
                                    .show();
                        })
                        .each(function () {
                            this.src = e(this).data("src");
                        }),
                    "x" === o.opts.axis &&
                        o.$list.width(
                            parseInt(o.$grid.css("padding-right")) +
                                i.group.length *
                                    o.$list.children().eq(0).outerWidth(!0) +
                                "px"
                        );
            },
            focus: function (t) {
                var e,
                    n,
                    o = this,
                    i = o.$list;
                o.instance.current &&
                    ((e = i
                        .children()
                        .removeClass("fancybox-thumbs-active")
                        .filter(
                            '[data-index="' + o.instance.current.index + '"]'
                        )
                        .addClass("fancybox-thumbs-active")),
                    (n = e.position()),
                    "y" === o.opts.axis &&
                    (n.top < 0 || n.top > i.height() - e.outerHeight())
                        ? i
                              .stop()
                              .animate({ scrollTop: i.scrollTop() + n.top }, t)
                        : "x" === o.opts.axis &&
                          (n.left < i.parent().scrollLeft() ||
                              n.left >
                                  i.parent().scrollLeft() +
                                      (i.parent().width() - e.outerWidth())) &&
                          i.parent().stop().animate({ scrollLeft: n.left }, t));
            },
            update: function () {
                this.instance.$refs.container.toggleClass(
                    "fancybox-show-thumbs",
                    this.isVisible
                ),
                    this.isVisible
                        ? (this.$grid || this.create(),
                          this.instance.trigger("onThumbsShow"),
                          this.focus(0))
                        : this.$grid && this.instance.trigger("onThumbsHide"),
                    this.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    var o;
                    e &&
                        !e.Thumbs &&
                        ((o = new n(e)),
                        o.isActive && o.opts.autoStart === !0 && o.show());
                },
                "beforeShow.fb": function (t, e, n, o) {
                    var i = e && e.Thumbs;
                    i && i.isVisible && i.focus(o ? 0 : 250);
                },
                "afterKeydown.fb": function (t, e, n, o, i) {
                    var a = e && e.Thumbs;
                    a &&
                        a.isActive &&
                        71 === i &&
                        (o.preventDefault(), a.toggle());
                },
                "beforeClose.fb": function (t, e) {
                    var n = e && e.Thumbs;
                    n &&
                        n.isVisible &&
                        n.opts.hideOnClose !== !1 &&
                        n.$grid.hide();
                },
            });
    })(document, window.jQuery),
    (function (t, e) {
        "use strict";
        function n(t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;",
            };
            return String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return e[t];
            });
        }
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>',
            },
            share: {
                tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>',
            },
        }),
            e(t).on("click", "[data-fancybox-share]", function () {
                var t,
                    o,
                    i = e.fancybox.getInstance();
                i &&
                    ((t =
                        i.current.opts.hash === !1
                            ? i.current.src
                            : window.location),
                    (o = i.current.opts.share.tpl
                        .replace(
                            /\{\{media\}\}/g,
                            "image" === i.current.type
                                ? encodeURIComponent(i.current.src)
                                : ""
                        )
                        .replace(/\{\{url\}\}/g, encodeURIComponent(t))
                        .replace(/\{\{url_raw\}\}/g, n(t))
                        .replace(
                            /\{\{descr\}\}/g,
                            i.$caption
                                ? encodeURIComponent(i.$caption.text())
                                : ""
                        )),
                    e.fancybox.open({
                        src: i.translate(i, o),
                        type: "html",
                        opts: {
                            animationEffect: "fade",
                            animationDuration: 250,
                            afterLoad: function (t, e) {
                                e.$content
                                    .find(".fancybox-share__links a")
                                    .click(function () {
                                        return (
                                            window.open(
                                                this.href,
                                                "Share",
                                                "width=550, height=450"
                                            ),
                                            !1
                                        );
                                    });
                            },
                        },
                    }));
            });
    })(document, window.jQuery || jQuery),
    (function (t, e, n) {
        "use strict";
        function o() {
            var t = e.location.hash.substr(1),
                n = t.split("-"),
                o =
                    n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
                        ? parseInt(n.pop(-1), 10) || 1
                        : 1,
                i = n.join("-");
            return o < 1 && (o = 1), { hash: t, index: o, gallery: i };
        }
        function i(t) {
            var e;
            "" !== t.gallery &&
                ((e = n(
                    "[data-fancybox='" + n.escapeSelector(t.gallery) + "']"
                ).eq(t.index - 1)),
                e.length || (e = n("#" + n.escapeSelector(t.gallery))),
                e.length && ((s = !1), e.trigger("click")));
        }
        function a(t) {
            var e;
            return (
                !!t &&
                ((e = t.current ? t.current.opts : t.opts),
                e.hash || (e.$orig ? e.$orig.data("fancybox") : ""))
            );
        }
        n.escapeSelector ||
            (n.escapeSelector = function (t) {
                var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                    n = function (t, e) {
                        return e
                            ? "\0" === t
                                ? "ÃƒÂ¯Ã‚Â¿Ã‚Â½"
                                : t.slice(0, -1) +
                                  "\\" +
                                  t.charCodeAt(t.length - 1).toString(16) +
                                  " "
                            : "\\" + t;
                    };
                return (t + "").replace(e, n);
            });
        var s = !0,
            r = null,
            c = null;
        n(function () {
            n.fancybox.defaults.hash !== !1 &&
                (n(t).on({
                    "onInit.fb": function (t, e) {
                        var n, i;
                        e.group[e.currIndex].opts.hash !== !1 &&
                            ((n = o()),
                            (i = a(e)),
                            i &&
                                n.gallery &&
                                i == n.gallery &&
                                (e.currIndex = n.index - 1));
                    },
                    "beforeShow.fb": function (n, o, i) {
                        var l;
                        i &&
                            i.opts.hash !== !1 &&
                            ((l = a(o)),
                            l &&
                                "" !== l &&
                                (e.location.hash.indexOf(l) < 0 &&
                                    (o.opts.origHash = e.location.hash),
                                (r =
                                    l +
                                    (o.group.length > 1
                                        ? "-" + (i.index + 1)
                                        : "")),
                                "replaceState" in e.history
                                    ? (c && clearTimeout(c),
                                      (c = setTimeout(function () {
                                          e.history[
                                              s ? "pushState" : "replaceState"
                                          ](
                                              {},
                                              t.title,
                                              e.location.pathname +
                                                  e.location.search +
                                                  "#" +
                                                  r
                                          ),
                                              (c = null),
                                              (s = !1);
                                      }, 300)))
                                    : (e.location.hash = r)));
                    },
                    "beforeClose.fb": function (o, i, s) {
                        var l, u;
                        c && clearTimeout(c),
                            s.opts.hash !== !1 &&
                                ((l = a(i)),
                                (u =
                                    i && i.opts.origHash
                                        ? i.opts.origHash
                                        : ""),
                                l &&
                                    "" !== l &&
                                    ("replaceState" in history
                                        ? e.history.replaceState(
                                              {},
                                              t.title,
                                              e.location.pathname +
                                                  e.location.search +
                                                  u
                                          )
                                        : ((e.location.hash = u),
                                          n(e)
                                              .scrollTop(i.scrollTop)
                                              .scrollLeft(i.scrollLeft))),
                                (r = null));
                    },
                }),
                n(e).on("hashchange.fb", function () {
                    var t = o();
                    n.fancybox.getInstance()
                        ? !r ||
                          r === t.gallery + "-" + t.index ||
                          (1 === t.index && r == t.gallery) ||
                          ((r = null), n.fancybox.close())
                        : "" !== t.gallery && i(t);
                }),
                setTimeout(function () {
                    i(o());
                }, 50));
        });
    })(document, window, window.jQuery || jQuery),
    (function (t, e) {
        "use strict";
        var n = new Date().getTime();
        e(t).on({
            "onInit.fb": function (t, e, o) {
                e.$refs.stage.on(
                    "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
                    function (t) {
                        var o = e.current,
                            i = new Date().getTime();
                        e.group.length < 1 ||
                            o.opts.wheel === !1 ||
                            ("auto" === o.opts.wheel && "image" !== o.type) ||
                            (t.preventDefault(),
                            t.stopPropagation(),
                            o.$slide.hasClass("fancybox-animated") ||
                                ((t = t.originalEvent || t),
                                i - n < 250 ||
                                    ((n = i),
                                    e[
                                        (-t.deltaY ||
                                            -t.deltaX ||
                                            t.wheelDelta ||
                                            -t.detail) < 0
                                            ? "next"
                                            : "previous"
                                    ]())));
                    }
                );
            },
        });
    })(document, window.jQuery || jQuery);

/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/ (function () {
    var a,
        b,
        c,
        d,
        e,
        f = function (a, b) {
            return function () {
                return a.apply(b, arguments);
            };
        },
        g =
            [].indexOf ||
            function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1;
            };
    (b = (function () {
        function a() {}
        return (
            (a.prototype.extend = function (a, b) {
                var c, d;
                for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
                return a;
            }),
            (a.prototype.isMobile = function (a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    a
                );
            }),
            (a.prototype.createEvent = function (a, b, c, d) {
                var e;
                return (
                    null == b && (b = !1),
                    null == c && (c = !1),
                    null == d && (d = null),
                    null != document.createEvent
                        ? ((e = document.createEvent("CustomEvent")),
                          e.initCustomEvent(a, b, c, d))
                        : null != document.createEventObject
                        ? ((e = document.createEventObject()),
                          (e.eventType = a))
                        : (e.eventName = a),
                    e
                );
            }),
            (a.prototype.emitEvent = function (a, b) {
                return null != a.dispatchEvent
                    ? a.dispatchEvent(b)
                    : b in (null != a)
                    ? a[b]()
                    : "on" + b in (null != a)
                    ? a["on" + b]()
                    : void 0;
            }),
            (a.prototype.addEvent = function (a, b, c) {
                return null != a.addEventListener
                    ? a.addEventListener(b, c, !1)
                    : null != a.attachEvent
                    ? a.attachEvent("on" + b, c)
                    : (a[b] = c);
            }),
            (a.prototype.removeEvent = function (a, b, c) {
                return null != a.removeEventListener
                    ? a.removeEventListener(b, c, !1)
                    : null != a.detachEvent
                    ? a.detachEvent("on" + b, c)
                    : delete a[b];
            }),
            (a.prototype.innerHeight = function () {
                return "innerHeight" in window
                    ? window.innerHeight
                    : document.documentElement.clientHeight;
            }),
            a
        );
    })()),
        (c =
            this.WeakMap ||
            this.MozWeakMap ||
            (c = (function () {
                function a() {
                    (this.keys = []), (this.values = []);
                }
                return (
                    (a.prototype.get = function (a) {
                        var b, c, d, e, f;
                        for (
                            f = this.keys, b = d = 0, e = f.length;
                            e > d;
                            b = ++d
                        )
                            if (((c = f[b]), c === a)) return this.values[b];
                    }),
                    (a.prototype.set = function (a, b) {
                        var c, d, e, f, g;
                        for (
                            g = this.keys, c = e = 0, f = g.length;
                            f > e;
                            c = ++e
                        )
                            if (((d = g[c]), d === a))
                                return void (this.values[c] = b);
                        return this.keys.push(a), this.values.push(b);
                    }),
                    a
                );
            })())),
        (a =
            this.MutationObserver ||
            this.WebkitMutationObserver ||
            this.MozMutationObserver ||
            (a = (function () {
                function a() {
                    "undefined" != typeof console &&
                        null !== console &&
                        console.warn(
                            "MutationObserver is not supported by your browser."
                        ),
                        "undefined" != typeof console &&
                            null !== console &&
                            console.warn(
                                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                            );
                }
                return (
                    (a.notSupported = !0),
                    (a.prototype.observe = function () {}),
                    a
                );
            })())),
        (d =
            this.getComputedStyle ||
            function (a, b) {
                return (
                    (this.getPropertyValue = function (b) {
                        var c;
                        return (
                            "float" === b && (b = "styleFloat"),
                            e.test(b) &&
                                b.replace(e, function (a, b) {
                                    return b.toUpperCase();
                                }),
                            (null != (c = a.currentStyle) ? c[b] : void 0) ||
                                null
                        );
                    }),
                    this
                );
            }),
        (e = /(\-([a-z]){1})/g),
        (this.WOW = (function () {
            function e(a) {
                null == a && (a = {}),
                    (this.scrollCallback = f(this.scrollCallback, this)),
                    (this.scrollHandler = f(this.scrollHandler, this)),
                    (this.resetAnimation = f(this.resetAnimation, this)),
                    (this.start = f(this.start, this)),
                    (this.scrolled = !0),
                    (this.config = this.util().extend(a, this.defaults)),
                    null != a.scrollContainer &&
                        (this.config.scrollContainer = document.querySelector(
                            a.scrollContainer
                        )),
                    (this.animationNameCache = new c()),
                    (this.wowEvent = this.util().createEvent(
                        this.config.boxClass
                    ));
            }
            return (
                (e.prototype.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                }),
                (e.prototype.init = function () {
                    var a;
                    return (
                        (this.element = window.document.documentElement),
                        "interactive" === (a = document.readyState) ||
                        "complete" === a
                            ? this.start()
                            : this.util().addEvent(
                                  document,
                                  "DOMContentLoaded",
                                  this.start
                              ),
                        (this.finished = [])
                    );
                }),
                (e.prototype.start = function () {
                    var b, c, d, e;
                    if (
                        ((this.stopped = !1),
                        (this.boxes = function () {
                            var a, c, d, e;
                            for (
                                d = this.element.querySelectorAll(
                                    "." + this.config.boxClass
                                ),
                                    e = [],
                                    a = 0,
                                    c = d.length;
                                c > a;
                                a++
                            )
                                (b = d[a]), e.push(b);
                            return e;
                        }.call(this)),
                        (this.all = function () {
                            var a, c, d, e;
                            for (
                                d = this.boxes, e = [], a = 0, c = d.length;
                                c > a;
                                a++
                            )
                                (b = d[a]), e.push(b);
                            return e;
                        }.call(this)),
                        this.boxes.length)
                    )
                        if (this.disabled()) this.resetStyle();
                        else
                            for (
                                e = this.boxes, c = 0, d = e.length;
                                d > c;
                                c++
                            )
                                (b = e[c]), this.applyStyle(b, !0);
                    return (
                        this.disabled() ||
                            (this.util().addEvent(
                                this.config.scrollContainer || window,
                                "scroll",
                                this.scrollHandler
                            ),
                            this.util().addEvent(
                                window,
                                "resize",
                                this.scrollHandler
                            ),
                            (this.interval = setInterval(
                                this.scrollCallback,
                                50
                            ))),
                        this.config.live
                            ? new a(
                                  (function (a) {
                                      return function (b) {
                                          var c, d, e, f, g;
                                          for (
                                              g = [], c = 0, d = b.length;
                                              d > c;
                                              c++
                                          )
                                              (f = b[c]),
                                                  g.push(
                                                      function () {
                                                          var a, b, c, d;
                                                          for (
                                                              c =
                                                                  f.addedNodes ||
                                                                  [],
                                                                  d = [],
                                                                  a = 0,
                                                                  b = c.length;
                                                              b > a;
                                                              a++
                                                          )
                                                              (e = c[a]),
                                                                  d.push(
                                                                      this.doSync(
                                                                          e
                                                                      )
                                                                  );
                                                          return d;
                                                      }.call(a)
                                                  );
                                          return g;
                                      };
                                  })(this)
                              ).observe(document.body, {
                                  childList: !0,
                                  subtree: !0,
                              })
                            : void 0
                    );
                }),
                (e.prototype.stop = function () {
                    return (
                        (this.stopped = !0),
                        this.util().removeEvent(
                            this.config.scrollContainer || window,
                            "scroll",
                            this.scrollHandler
                        ),
                        this.util().removeEvent(
                            window,
                            "resize",
                            this.scrollHandler
                        ),
                        null != this.interval
                            ? clearInterval(this.interval)
                            : void 0
                    );
                }),
                (e.prototype.sync = function (b) {
                    return a.notSupported ? this.doSync(this.element) : void 0;
                }),
                (e.prototype.doSync = function (a) {
                    var b, c, d, e, f;
                    if ((null == a && (a = this.element), 1 === a.nodeType)) {
                        for (
                            a = a.parentNode || a,
                                e = a.querySelectorAll(
                                    "." + this.config.boxClass
                                ),
                                f = [],
                                c = 0,
                                d = e.length;
                            d > c;
                            c++
                        )
                            (b = e[c]),
                                g.call(this.all, b) < 0
                                    ? (this.boxes.push(b),
                                      this.all.push(b),
                                      this.stopped || this.disabled()
                                          ? this.resetStyle()
                                          : this.applyStyle(b, !0),
                                      f.push((this.scrolled = !0)))
                                    : f.push(void 0);
                        return f;
                    }
                }),
                (e.prototype.show = function (a) {
                    return (
                        this.applyStyle(a),
                        (a.className =
                            a.className + " " + this.config.animateClass),
                        null != this.config.callback && this.config.callback(a),
                        this.util().emitEvent(a, this.wowEvent),
                        this.util().addEvent(
                            a,
                            "animationend",
                            this.resetAnimation
                        ),
                        this.util().addEvent(
                            a,
                            "oanimationend",
                            this.resetAnimation
                        ),
                        this.util().addEvent(
                            a,
                            "webkitAnimationEnd",
                            this.resetAnimation
                        ),
                        this.util().addEvent(
                            a,
                            "MSAnimationEnd",
                            this.resetAnimation
                        ),
                        a
                    );
                }),
                (e.prototype.applyStyle = function (a, b) {
                    var c, d, e;
                    return (
                        (d = a.getAttribute("data-wow-duration")),
                        (c = a.getAttribute("data-wow-delay")),
                        (e = a.getAttribute("data-wow-iteration")),
                        this.animate(
                            (function (f) {
                                return function () {
                                    return f.customStyle(a, b, d, c, e);
                                };
                            })(this)
                        )
                    );
                }),
                (e.prototype.animate = (function () {
                    return "requestAnimationFrame" in window
                        ? function (a) {
                              return window.requestAnimationFrame(a);
                          }
                        : function (a) {
                              return a();
                          };
                })()),
                (e.prototype.resetStyle = function () {
                    var a, b, c, d, e;
                    for (
                        d = this.boxes, e = [], b = 0, c = d.length;
                        c > b;
                        b++
                    )
                        (a = d[b]), e.push((a.style.visibility = "visible"));
                    return e;
                }),
                (e.prototype.resetAnimation = function (a) {
                    var b;
                    return a.type.toLowerCase().indexOf("animationend") >= 0
                        ? ((b = a.target || a.srcElement),
                          (b.className = b.className
                              .replace(this.config.animateClass, "")
                              .trim()))
                        : void 0;
                }),
                (e.prototype.customStyle = function (a, b, c, d, e) {
                    return (
                        b && this.cacheAnimationName(a),
                        (a.style.visibility = b ? "hidden" : "visible"),
                        c && this.vendorSet(a.style, { animationDuration: c }),
                        d && this.vendorSet(a.style, { animationDelay: d }),
                        e &&
                            this.vendorSet(a.style, {
                                animationIterationCount: e,
                            }),
                        this.vendorSet(a.style, {
                            animationName: b
                                ? "none"
                                : this.cachedAnimationName(a),
                        }),
                        a
                    );
                }),
                (e.prototype.vendors = ["moz", "webkit"]),
                (e.prototype.vendorSet = function (a, b) {
                    var c, d, e, f;
                    d = [];
                    for (c in b)
                        (e = b[c]),
                            (a["" + c] = e),
                            d.push(
                                function () {
                                    var b, d, g, h;
                                    for (
                                        g = this.vendors,
                                            h = [],
                                            b = 0,
                                            d = g.length;
                                        d > b;
                                        b++
                                    )
                                        (f = g[b]),
                                            h.push(
                                                (a[
                                                    "" +
                                                        f +
                                                        c
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                        c.substr(1)
                                                ] = e)
                                            );
                                    return h;
                                }.call(this)
                            );
                    return d;
                }),
                (e.prototype.vendorCSS = function (a, b) {
                    var c, e, f, g, h, i;
                    for (
                        h = d(a),
                            g = h.getPropertyCSSValue(b),
                            f = this.vendors,
                            c = 0,
                            e = f.length;
                        e > c;
                        c++
                    )
                        (i = f[c]),
                            (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
                    return g;
                }),
                (e.prototype.animationName = function (a) {
                    var b;
                    try {
                        b = this.vendorCSS(a, "animation-name").cssText;
                    } catch (c) {
                        b = d(a).getPropertyValue("animation-name");
                    }
                    return "none" === b ? "" : b;
                }),
                (e.prototype.cacheAnimationName = function (a) {
                    return this.animationNameCache.set(
                        a,
                        this.animationName(a)
                    );
                }),
                (e.prototype.cachedAnimationName = function (a) {
                    return this.animationNameCache.get(a);
                }),
                (e.prototype.scrollHandler = function () {
                    return (this.scrolled = !0);
                }),
                (e.prototype.scrollCallback = function () {
                    var a;
                    return !this.scrolled ||
                        ((this.scrolled = !1),
                        (this.boxes = function () {
                            var b, c, d, e;
                            for (
                                d = this.boxes, e = [], b = 0, c = d.length;
                                c > b;
                                b++
                            )
                                (a = d[b]),
                                    a &&
                                        (this.isVisible(a)
                                            ? this.show(a)
                                            : e.push(a));
                            return e;
                        }.call(this)),
                        this.boxes.length || this.config.live)
                        ? void 0
                        : this.stop();
                }),
                (e.prototype.offsetTop = function (a) {
                    for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
                    for (b = a.offsetTop; (a = a.offsetParent); )
                        b += a.offsetTop;
                    return b;
                }),
                (e.prototype.isVisible = function (a) {
                    var b, c, d, e, f;
                    return (
                        (c =
                            a.getAttribute("data-wow-offset") ||
                            this.config.offset),
                        (f =
                            (this.config.scrollContainer &&
                                this.config.scrollContainer.scrollTop) ||
                            window.pageYOffset),
                        (e =
                            f +
                            Math.min(
                                this.element.clientHeight,
                                this.util().innerHeight()
                            ) -
                            c),
                        (d = this.offsetTop(a)),
                        (b = d + a.clientHeight),
                        e >= d && b >= f
                    );
                }),
                (e.prototype.util = function () {
                    return null != this._util
                        ? this._util
                        : (this._util = new b());
                }),
                (e.prototype.disabled = function () {
                    return (
                        !this.config.mobile &&
                        this.util().isMobile(navigator.userAgent)
                    );
                }),
                e
            );
        })());
}).call(this);

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!(function (t, e) {
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
              return e(t, i);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("jquery")))
        : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n,
                s = "$()." + i + '("' + e + '")';
            return (
                t.each(function (t, u) {
                    var h = a.data(u, i);
                    if (!h)
                        return void r(
                            i +
                                " not initialized. Cannot call methods, i.e. " +
                                s
                        );
                    var d = h[e];
                    if (!d || "_" == e.charAt(0))
                        return void r(s + " is not a valid method");
                    var l = d.apply(h, o);
                    n = void 0 === n ? l : n;
                }),
                void 0 !== n ? n : t
            );
        }
        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n
                    ? (n.option(e), n._init())
                    : ((n = new s(o, e)), a.data(o, i, n));
            });
        }
        (a = a || e || t.jQuery),
            a &&
                (s.prototype.option ||
                    (s.prototype.option = function (t) {
                        a.isPlainObject(t) &&
                            (this.options = a.extend(!0, this.options, t));
                    }),
                (a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = n.call(arguments, 1);
                        return u(this, t, e);
                    }
                    return h(this, t), this;
                }),
                o(a));
    }
    function o(t) {
        !t || (t && t.bridget) || (t.bridget = i);
    }
    var n = Array.prototype.slice,
        s = t.console,
        r =
            "undefined" == typeof s
                ? function () {}
                : function (t) {
                      s.error(t);
                  };
    return o(e || t.jQuery), i;
}),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("ev-emitter/ev-emitter", e)
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        o = (i[t] = i[t] || []);
                    return o.indexOf(e) == -1 && o.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {}),
                        o = (i[t] = i[t] || {});
                    return (o[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return o != -1 && i.splice(o, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (
                        var o = this._onceEvents && this._onceEvents[t], n = 0;
                        n < i.length;
                        n++
                    ) {
                        var s = i[n],
                            r = o && o[s];
                        r && (this.off(t, s), delete o[s]), s.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("get-size/get-size", e)
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t),
                i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e;
        }
        function e() {}
        function i() {
            for (
                var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0,
                    },
                    e = 0;
                e < h;
                e++
            ) {
                var i = u[e];
                t[i] = 0;
            }
            return t;
        }
        function o(t) {
            var e = getComputedStyle(t);
            return (
                e ||
                    a(
                        "Style returned " +
                            e +
                            ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                    ),
                e
            );
        }
        function n() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"),
                    (e.style.padding = "1px 2px 3px 4px"),
                    (e.style.borderStyle = "solid"),
                    (e.style.borderWidth = "1px 2px 3px 4px"),
                    (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var n = o(e);
                (r = 200 == Math.round(t(n.width))),
                    (s.isBoxSizeOuter = r),
                    i.removeChild(e);
            }
        }
        function s(e) {
            if (
                (n(),
                "string" == typeof e && (e = document.querySelector(e)),
                e && "object" == typeof e && e.nodeType)
            ) {
                var s = o(e);
                if ("none" == s.display) return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (
                    var d = (a.isBorderBox = "border-box" == s.boxSizing),
                        l = 0;
                    l < h;
                    l++
                ) {
                    var f = u[l],
                        c = s[f],
                        m = parseFloat(c);
                    a[f] = isNaN(m) ? 0 : m;
                }
                var p = a.paddingLeft + a.paddingRight,
                    y = a.paddingTop + a.paddingBottom,
                    g = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    _ = a.borderLeftWidth + a.borderRightWidth,
                    z = a.borderTopWidth + a.borderBottomWidth,
                    I = d && r,
                    x = t(s.width);
                x !== !1 && (a.width = x + (I ? 0 : p + _));
                var S = t(s.height);
                return (
                    S !== !1 && (a.height = S + (I ? 0 : y + z)),
                    (a.innerWidth = a.width - (p + _)),
                    (a.innerHeight = a.height - (y + z)),
                    (a.outerWidth = a.width + g),
                    (a.outerHeight = a.height + v),
                    a
                );
            }
        }
        var r,
            a =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      },
            u = [
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth",
            ],
            h = u.length,
            d = !1;
        return s;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("desandro-matches-selector/matches-selector", e)
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (
                var e = ["webkit", "moz", "ms", "o"], i = 0;
                i < e.length;
                i++
            ) {
                var o = e[i],
                    n = o + "MatchesSelector";
                if (t[n]) return n;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "fizzy-ui-utils/utils",
                  ["desandro-matches-selector/matches-selector"],
                  function (i) {
                      return e(t, i);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            });
        var o = Array.prototype.slice;
        (i.makeArray = function (t) {
            if (Array.isArray(t)) return t;
            if (null === t || void 0 === t) return [];
            var e = "object" == typeof t && "number" == typeof t.length;
            return e ? o.call(t) : [t];
        }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                i != -1 && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body; )
                    if (((t = t.parentNode), e(t, i))) return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, o) {
                t = i.makeArray(t);
                var n = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!o) return void n.push(t);
                            e(t, o) && n.push(t);
                            for (
                                var i = t.querySelectorAll(o), s = 0;
                                s < i.length;
                                s++
                            )
                                n.push(i[s]);
                        }
                    }),
                    n
                );
            }),
            (i.debounceMethod = function (t, e, i) {
                i = i || 100;
                var o = t.prototype[e],
                    n = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[n];
                    clearTimeout(t);
                    var e = arguments,
                        s = this;
                    this[n] = setTimeout(function () {
                        o.apply(s, e), delete s[n];
                    }, i);
                };
            }),
            (i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e
                    ? setTimeout(t)
                    : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var n = t.console;
        return (
            (i.htmlInit = function (e, o) {
                i.docReady(function () {
                    var s = i.toDashed(o),
                        r = "data-" + s,
                        a = document.querySelectorAll("[" + r + "]"),
                        u = document.querySelectorAll(".js-" + s),
                        h = i.makeArray(a).concat(i.makeArray(u)),
                        d = r + "-options",
                        l = t.jQuery;
                    h.forEach(function (t) {
                        var i,
                            s = t.getAttribute(r) || t.getAttribute(d);
                        try {
                            i = s && JSON.parse(s);
                        } catch (a) {
                            return void (
                                n &&
                                n.error(
                                    "Error parsing " +
                                        r +
                                        " on " +
                                        t.className +
                                        ": " +
                                        a
                                )
                            );
                        }
                        var u = new e(t, i);
                        l && l.data(t, o, u);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "outlayer/item",
                  ["ev-emitter/ev-emitter", "get-size/get-size"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}),
              (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function o(t, e) {
            t &&
                ((this.element = t),
                (this.layout = e),
                (this.position = { x: 0, y: 0 }),
                this._create());
        }
        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var s = document.documentElement.style,
            r =
                "string" == typeof s.transition
                    ? "transition"
                    : "WebkitTransition",
            a =
                "string" == typeof s.transform
                    ? "transform"
                    : "WebkitTransform",
            u = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend",
            }[r],
            h = {
                transform: a,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay",
            },
            d = (o.prototype = Object.create(t.prototype));
        (d.constructor = o),
            (d._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
                    this.css({ position: "absolute" });
            }),
            (d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (d.getSize = function () {
                this.size = e(this.element);
            }),
            (d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = h[i] || i;
                    e[o] = t[i];
                }
            }),
            (d.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    o = t[e ? "left" : "right"],
                    n = t[i ? "top" : "bottom"],
                    s = parseFloat(o),
                    r = parseFloat(n),
                    a = this.layout.size;
                o.indexOf("%") != -1 && (s = (s / 100) * a.width),
                    n.indexOf("%") != -1 && (r = (r / 100) * a.height),
                    (s = isNaN(s) ? 0 : s),
                    (r = isNaN(r) ? 0 : r),
                    (s -= e ? a.paddingLeft : a.paddingRight),
                    (r -= i ? a.paddingTop : a.paddingBottom),
                    (this.position.x = s),
                    (this.position.y = r);
            }),
            (d.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop"),
                    n = i ? "paddingLeft" : "paddingRight",
                    s = i ? "left" : "right",
                    r = i ? "right" : "left",
                    a = this.position.x + t[n];
                (e[s] = this.getXValue(a)), (e[r] = "");
                var u = o ? "paddingTop" : "paddingBottom",
                    h = o ? "top" : "bottom",
                    d = o ? "bottom" : "top",
                    l = this.position.y + t[u];
                (e[h] = this.getYValue(l)),
                    (e[d] = ""),
                    this.css(e),
                    this.emitEvent("layout", [this]);
            }),
            (d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e
                    ? (t / this.layout.size.width) * 100 + "%"
                    : t + "px";
            }),
            (d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e
                    ? (t / this.layout.size.height) * 100 + "%"
                    : t + "px";
            }),
            (d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = t == this.position.x && e == this.position.y;
                if ((this.setPosition(t, e), n && !this.isTransitioning))
                    return void this.layoutPosition();
                var s = t - i,
                    r = e - o,
                    a = {};
                (a.transform = this.getTranslate(s, r)),
                    this.transition({
                        to: a,
                        onTransitionEnd: { transform: this.layoutPosition },
                        isCleaning: !0,
                    });
            }),
            (d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop");
                return (
                    (t = i ? t : -t),
                    (e = o ? e : -e),
                    "translate3d(" + t + "px, " + e + "px, 0)"
                );
            }),
            (d.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (d.moveTo = d._transitionTo),
            (d.setPosition = function (t, e) {
                (this.position.x = parseFloat(t)),
                    (this.position.y = parseFloat(e));
            }),
            (d._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd)
                    t.onTransitionEnd[e].call(this);
            }),
            (d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration))
                    return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd)
                    e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to)
                    (e.ingProperties[i] = !0),
                        t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null;
                }
                this.enableTransition(t.to),
                    this.css(t.to),
                    (this.isTransitioning = !0);
            });
        var l = "opacity," + n(a);
        (d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t),
                    this.css({
                        transitionProperty: l,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0,
                    }),
                    this.element.addEventListener(u, this, !1);
            }
        }),
            (d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (d.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var f = { "-webkit-transform": "transform" };
        (d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    o = f[t.propertyName] || t.propertyName;
                if (
                    (delete e.ingProperties[o],
                    i(e.ingProperties) && this.disableTransition(),
                    o in e.clean &&
                        ((this.element.style[t.propertyName] = ""),
                        delete e.clean[o]),
                    o in e.onEnd)
                ) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (d.disableTransition = function () {
                this.removeTransitionStyles(),
                    this.element.removeEventListener(u, this, !1),
                    (this.isTransitioning = !1);
            }),
            (d._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var c = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: "",
        };
        return (
            (d.removeTransitionStyles = function () {
                this.css(c);
            }),
            (d.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (d.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                    this.css({ display: "" }),
                    this.emitEvent("remove", [this]);
            }),
            (d.remove = function () {
                return r && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (d.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("visibleStyle");
                (e[i] = this.onRevealTransitionEnd),
                    this.transition({
                        from: t.hiddenStyle,
                        to: t.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: e,
                    });
            }),
            (d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (d.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                (e[i] = this.onHideTransitionEnd),
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: e,
                    });
            }),
            (d.onHideTransitionEnd = function () {
                this.isHidden &&
                    (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (d.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: "",
                });
            }),
            o
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(
                  "outlayer/outlayer",
                  [
                      "ev-emitter/ev-emitter",
                      "get-size/get-size",
                      "fizzy-ui-utils/utils",
                      "./item",
                  ],
                  function (i, o, n, s) {
                      return e(t, i, o, n, s);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  t,
                  require("ev-emitter"),
                  require("get-size"),
                  require("fizzy-ui-utils"),
                  require("./item")
              ))
            : (t.Outlayer = e(
                  t,
                  t.EvEmitter,
                  t.getSize,
                  t.fizzyUIUtils,
                  t.Outlayer.Item
              ));
    })(window, function (t, e, i, o, n) {
        "use strict";
        function s(t, e) {
            var i = o.getQueryElement(t);
            if (!i)
                return void (
                    u &&
                    u.error(
                        "Bad element for " +
                            this.constructor.namespace +
                            ": " +
                            (i || t)
                    )
                );
            (this.element = i),
                h && (this.$element = h(this.element)),
                (this.options = o.extend({}, this.constructor.defaults)),
                this.option(e);
            var n = ++l;
            (this.element.outlayerGUID = n), (f[n] = this), this._create();
            var s = this._getOption("initLayout");
            s && this.layout();
        }
        function r(t) {
            function e() {
                t.apply(this, arguments);
            }
            return (
                (e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                e
            );
        }
        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var n = m[o] || 1;
            return i * n;
        }
        var u = t.console,
            h = t.jQuery,
            d = function () {},
            l = 0,
            f = {};
        (s.namespace = "outlayer"),
            (s.Item = n),
            (s.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var c = s.prototype;
        o.extend(c, e.prototype),
            (c.option = function (t) {
                o.extend(this.options, t);
            }),
            (c._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e]
                    ? this.options[e]
                    : this.options[t];
            }),
            (s.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (c._create = function () {
                this.reloadItems(),
                    (this.stamps = []),
                    this.stamp(this.options.stamp),
                    o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }),
            (c.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (c._itemize = function (t) {
                for (
                    var e = this._filterFindItemElements(t),
                        i = this.constructor.Item,
                        o = [],
                        n = 0;
                    n < e.length;
                    n++
                ) {
                    var s = e[n],
                        r = new i(s, this);
                    o.push(r);
                }
                return o;
            }),
            (c._filterFindItemElements = function (t) {
                return o.filterFindElements(t, this.options.itemSelector);
            }),
            (c.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (c.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (c._init = c.layout),
            (c._resetLayout = function () {
                this.getSize();
            }),
            (c.getSize = function () {
                this.size = i(this.element);
            }),
            (c._getMeasurement = function (t, e) {
                var o,
                    n = this.options[t];
                n
                    ? ("string" == typeof n
                          ? (o = this.element.querySelector(n))
                          : n instanceof HTMLElement && (o = n),
                      (this[t] = o ? i(o)[e] : n))
                    : (this[t] = 0);
            }),
            (c.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)),
                    this._layoutItems(t, e),
                    this._postLayout();
            }),
            (c._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (c._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var o = this._getItemLayoutPosition(t);
                        (o.item = t),
                            (o.isInstant = e || t.isLayoutInstant),
                            i.push(o);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (c._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (c._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (c.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t
                    ? void (this.stagger = 0)
                    : ((this.stagger = a(t)), this.stagger);
            }),
            (c._positionItem = function (t, e, i, o, n) {
                o
                    ? t.goTo(e, i)
                    : (t.stagger(n * this.stagger), t.moveTo(e, i));
            }),
            (c._postLayout = function () {
                this.resizeContainer();
            }),
            (c.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e &&
                        (this._setContainerMeasure(e.width, !0),
                        this._setContainerMeasure(e.height, !1));
                }
            }),
            (c._getContainerSize = d),
            (c._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox &&
                        (t += e
                            ? i.paddingLeft +
                              i.paddingRight +
                              i.borderLeftWidth +
                              i.borderRightWidth
                            : i.paddingBottom +
                              i.paddingTop +
                              i.borderTopWidth +
                              i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (c._emitCompleteOnItems = function (t, e) {
                function i() {
                    n.dispatchEvent(t + "Complete", null, [e]);
                }
                function o() {
                    r++, r == s && i();
                }
                var n = this,
                    s = e.length;
                if (!e || !s) return void i();
                var r = 0;
                e.forEach(function (e) {
                    e.once(t, o);
                });
            }),
            (c.dispatchEvent = function (t, e, i) {
                var o = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, o), h))
                    if (
                        ((this.$element = this.$element || h(this.element)), e)
                    ) {
                        var n = h.Event(e);
                        (n.type = t), this.$element.trigger(n, i);
                    } else this.$element.trigger(t, i);
            }),
            (c.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (c.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (c.stamp = function (t) {
                (t = this._find(t)),
                    t &&
                        ((this.stamps = this.stamps.concat(t)),
                        t.forEach(this.ignore, this));
            }),
            (c.unstamp = function (t) {
                (t = this._find(t)),
                    t &&
                        t.forEach(function (t) {
                            o.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
            }),
            (c._find = function (t) {
                if (t)
                    return (
                        "string" == typeof t &&
                            (t = this.element.querySelectorAll(t)),
                        (t = o.makeArray(t))
                    );
            }),
            (c._manageStamps = function () {
                this.stamps &&
                    this.stamps.length &&
                    (this._getBoundingRect(),
                    this.stamps.forEach(this._manageStamp, this));
            }),
            (c._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (c._manageStamp = d),
            (c._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    o = this._boundingRect,
                    n = i(t),
                    s = {
                        left: e.left - o.left - n.marginLeft,
                        top: e.top - o.top - n.marginTop,
                        right: o.right - e.right - n.marginRight,
                        bottom: o.bottom - e.bottom - n.marginBottom,
                    };
                return s;
            }),
            (c.handleEvent = o.handleEvent),
            (c.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (c.unbindResize = function () {
                t.removeEventListener("resize", this),
                    (this.isResizeBound = !1);
            }),
            (c.onresize = function () {
                this.resize();
            }),
            o.debounceMethod(s, "onresize", 100),
            (c.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (c.needsResizeLayout = function () {
                var t = i(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }),
            (c.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (c.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (c.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(e, !0),
                        this.reveal(e),
                        this.layoutItems(i);
                }
            }),
            (c.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (c.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (c.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (c.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (c.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (c.getItems = function (t) {
                t = o.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getItem(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (c.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), o.removeFrom(this.items, t);
                        }, this);
            }),
            (c.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete f[e],
                    delete this.element.outlayerGUID,
                    h && h.removeData(this.element, this.constructor.namespace);
            }),
            (s.data = function (t) {
                t = o.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && f[e];
            }),
            (s.create = function (t, e) {
                var i = r(s);
                return (
                    (i.defaults = o.extend({}, s.defaults)),
                    o.extend(i.defaults, e),
                    (i.compatOptions = o.extend({}, s.compatOptions)),
                    (i.namespace = t),
                    (i.data = s.data),
                    (i.Item = r(n)),
                    o.htmlInit(i, t),
                    h && h.bridget && h.bridget(t, i),
                    i
                );
            });
        var m = { ms: 1, s: 1e3 };
        return (s.Item = n), s;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            o = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++),
                o.call(this),
                (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id),
                        (this.sortData["original-order"] = this.id),
                        (this.sortData.random = Math.random());
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this);
                    }
                }
            });
        var n = i.destroy;
        return (
            (i.destroy = function () {
                n.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-mode",
                  ["get-size/get-size", "outlayer/outlayer"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}),
              (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            (this.isotope = t),
                t &&
                    ((this.options = t.options[this.namespace]),
                    (this.element = t.element),
                    (this.items = t.filteredItems),
                    (this.size = t.size));
        }
        var o = i.prototype,
            n = [
                "_resetLayout",
                "_getItemLayoutPosition",
                "_manageStamp",
                "_getContainerSize",
                "_getElementOffset",
                "needsResizeLayout",
                "_getOption",
            ];
        return (
            n.forEach(function (t) {
                o[t] = function () {
                    return e.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (o.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight != this.isotope.size.innerHeight;
            }),
            (o._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (o.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (o.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (o.getSegmentSize = function (t, e) {
                var i = t + e,
                    o = "outer" + e;
                if ((this._getMeasurement(i, o), !this[i])) {
                    var n = this.getFirstItemSize();
                    this[i] = (n && n[o]) || this.isotope.size["inner" + e];
                }
            }),
            (o.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element);
            }),
            (o.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (o.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (i.modes = {}),
            (i.create = function (t, e) {
                function n() {
                    i.apply(this, arguments);
                }
                return (
                    (n.prototype = Object.create(o)),
                    (n.prototype.constructor = n),
                    e && (n.options = e),
                    (n.prototype.namespace = t),
                    (i.modes[t] = n),
                    n
                );
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "masonry-layout/masonry",
                  ["outlayer/outlayer", "get-size/get-size"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var o = i.prototype;
        return (
            (o._resetLayout = function () {
                this.getSize(),
                    this._getMeasurement("columnWidth", "outerWidth"),
                    this._getMeasurement("gutter", "outerWidth"),
                    this.measureColumns(),
                    (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (o.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth =
                        (i && e(i).outerWidth) || this.containerWidth;
                }
                var o = (this.columnWidth += this.gutter),
                    n = this.containerWidth + this.gutter,
                    s = n / o,
                    r = o - (n % o),
                    a = r && r < 1 ? "round" : "floor";
                (s = Math[a](s)), (this.cols = Math.max(s, 1));
            }),
            (o.getContainerWidth = function () {
                var t = this._getOption("fitWidth"),
                    i = t ? this.element.parentNode : this.element,
                    o = e(i);
                this.containerWidth = o && o.innerWidth;
            }),
            (o._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = e && e < 1 ? "round" : "ceil",
                    o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (
                    var n = this.options.horizontalOrder
                            ? "_getHorizontalColPosition"
                            : "_getTopColPosition",
                        s = this[n](o, t),
                        r = { x: this.columnWidth * s.col, y: s.y },
                        a = s.y + t.size.outerHeight,
                        u = o + s.col,
                        h = s.col;
                    h < u;
                    h++
                )
                    this.colYs[h] = a;
                return r;
            }),
            (o._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);
                return { col: e.indexOf(i), y: i };
            }),
            (o._getTopColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
                    e[o] = this._getColGroupY(o, t);
                return e;
            }),
            (o._getColGroupY = function (t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }),
            (o._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols,
                    o = t > 1 && i + t > this.cols;
                i = o ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return (
                    (this.horizontalColIndex = n
                        ? i + t
                        : this.horizontalColIndex),
                    { col: i, y: this._getColGroupY(i, t) }
                );
            }),
            (o._manageStamp = function (t) {
                var i = e(t),
                    o = this._getElementOffset(t),
                    n = this._getOption("originLeft"),
                    s = n ? o.left : o.right,
                    r = s + i.outerWidth,
                    a = Math.floor(s / this.columnWidth);
                a = Math.max(0, a);
                var u = Math.floor(r / this.columnWidth);
                (u -= r % this.columnWidth ? 0 : 1),
                    (u = Math.min(this.cols - 1, u));
                for (
                    var h = this._getOption("originTop"),
                        d = (h ? o.top : o.bottom) + i.outerHeight,
                        l = a;
                    l <= u;
                    l++
                )
                    this.colYs[l] = Math.max(d, this.colYs[l]);
            }),
            (o._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return (
                    this._getOption("fitWidth") &&
                        (t.width = this._getContainerFitWidth()),
                    t
                );
            }),
            (o._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
                    t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (o.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-modes/masonry",
                  ["../layout-mode", "masonry-layout/masonry"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  require("../layout-mode"),
                  require("masonry-layout")
              ))
            : e(t.Isotope.LayoutMode, t.Masonry);
    })(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
            o = i.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
        var r = o.measureColumns;
        o.measureColumns = function () {
            (this.items = this.isotope.filteredItems), r.call(this);
        };
        var a = o._getOption;
        return (
            (o._getOption = function (t) {
                return "fitWidth" == t
                    ? void 0 !== this.options.isFitWidth
                        ? this.options.isFitWidth
                        : this.options.fitWidth
                    : a.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-modes/fit-rows",
                  ["../layout-mode"],
                  e
              )
            : "object" == typeof exports
            ? (module.exports = e(require("../layout-mode")))
            : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0),
                    (this.y = 0),
                    (this.maxY = 0),
                    this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x &&
                    e + this.x > i &&
                    ((this.x = 0), (this.y = this.maxY));
                var o = { x: this.x, y: this.y };
                return (
                    (this.maxY = Math.max(
                        this.maxY,
                        this.y + t.size.outerHeight
                    )),
                    (this.x += e),
                    o
                );
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-modes/vertical",
                  ["../layout-mode"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode")))
            : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e =
                        (this.isotope.size.innerWidth - t.size.outerWidth) *
                        this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  [
                      "outlayer/outlayer",
                      "get-size/get-size",
                      "desandro-matches-selector/matches-selector",
                      "fizzy-ui-utils/utils",
                      "isotope-layout/js/item",
                      "isotope-layout/js/layout-mode",
                      "isotope-layout/js/layout-modes/masonry",
                      "isotope-layout/js/layout-modes/fit-rows",
                      "isotope-layout/js/layout-modes/vertical",
                  ],
                  function (i, o, n, s, r, a) {
                      return e(t, i, o, n, s, r, a);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  t,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope-layout/js/item"),
                  require("isotope-layout/js/layout-mode"),
                  require("isotope-layout/js/layout-modes/masonry"),
                  require("isotope-layout/js/layout-modes/fit-rows"),
                  require("isotope-layout/js/layout-modes/vertical")
              ))
            : (t.Isotope = e(
                  t,
                  t.Outlayer,
                  t.getSize,
                  t.matchesSelector,
                  t.fizzyUIUtils,
                  t.Isotope.Item,
                  t.Isotope.LayoutMode
              ));
    })(window, function (t, e, i, o, n, s, r) {
        function a(t, e) {
            return function (i, o) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n],
                        r = i.sortData[s],
                        a = o.sortData[s];
                    if (r > a || r < a) {
                        var u = void 0 !== e[s] ? e[s] : e,
                            h = u ? 1 : -1;
                        return (r > a ? 1 : -1) * h;
                    }
                }
                return 0;
            };
        }
        var u = t.jQuery,
            h = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0,
            });
        (d.Item = s), (d.LayoutMode = r);
        var l = d.prototype;
        (l._create = function () {
            (this.itemGUID = 0),
                (this._sorters = {}),
                this._getSorters(),
                e.prototype._create.call(this),
                (this.modes = {}),
                (this.filteredItems = this.items),
                (this.sortHistory = ["original-order"]);
            for (var t in r.modes) this._initLayoutMode(t);
        }),
            (l.reloadItems = function () {
                (this.itemGUID = 0), e.prototype.reloadItems.call(this);
            }),
            (l._itemize = function () {
                for (
                    var t = e.prototype._itemize.apply(this, arguments), i = 0;
                    i < t.length;
                    i++
                ) {
                    var o = t[i];
                    o.id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }),
            (l._initLayoutMode = function (t) {
                var e = r.modes[t],
                    i = this.options[t] || {};
                (this.options[t] = e.options ? n.extend(e.options, i) : i),
                    (this.modes[t] = new e(this));
            }),
            (l.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout")
                    ? void this.arrange()
                    : void this._layout();
            }),
            (l._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(this.filteredItems, t),
                    (this._isLayoutInited = !0);
            }),
            (l.arrange = function (t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                (this.filteredItems = e.matches),
                    this._bindArrangeComplete(),
                    this._isInstant
                        ? this._noTransition(this._hideReveal, [e])
                        : this._hideReveal(e),
                    this._sort(),
                    this._layout();
            }),
            (l._init = l.arrange),
            (l._hideReveal = function (t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }),
            (l._getIsInstant = function () {
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                return (this._isInstant = e), e;
            }),
            (l._bindArrangeComplete = function () {
                function t() {
                    e &&
                        i &&
                        o &&
                        n.dispatchEvent("arrangeComplete", null, [
                            n.filteredItems,
                        ]);
                }
                var e,
                    i,
                    o,
                    n = this;
                this.once("layoutComplete", function () {
                    (e = !0), t();
                }),
                    this.once("hideComplete", function () {
                        (i = !0), t();
                    }),
                    this.once("revealComplete", function () {
                        (o = !0), t();
                    });
            }),
            (l._filter = function (t) {
                var e = this.options.filter;
                e = e || "*";
                for (
                    var i = [],
                        o = [],
                        n = [],
                        s = this._getFilterTest(e),
                        r = 0;
                    r < t.length;
                    r++
                ) {
                    var a = t[r];
                    if (!a.isIgnored) {
                        var u = s(a);
                        u && i.push(a),
                            u && a.isHidden
                                ? o.push(a)
                                : u || a.isHidden || n.push(a);
                    }
                }
                return { matches: i, needReveal: o, needHide: n };
            }),
            (l._getFilterTest = function (t) {
                return u && this.options.isJQueryFiltering
                    ? function (e) {
                          return u(e.element).is(t);
                      }
                    : "function" == typeof t
                    ? function (e) {
                          return t(e.element);
                      }
                    : function (e) {
                          return o(e.element, t);
                      };
            }),
            (l.updateSortData = function (t) {
                var e;
                t
                    ? ((t = n.makeArray(t)), (e = this.getItems(t)))
                    : (e = this.items),
                    this._getSorters(),
                    this._updateItemsSortData(e);
            }),
            (l._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i);
                }
            }),
            (l._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    var o = t[i];
                    o.updateSortData();
                }
            });
        var f = (function () {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = h(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    s = n && n[1],
                    r = e(s, o),
                    a = d.sortDataParsers[i[1]];
                return (t = a
                    ? function (t) {
                          return t && a(r(t));
                      }
                    : function (t) {
                          return t && r(t);
                      });
            }
            function e(t, e) {
                return t
                    ? function (e) {
                          return e.getAttribute(t);
                      }
                    : function (t) {
                          var i = t.querySelector(e);
                          return i && i.textContent;
                      };
            }
            return t;
        })();
        (d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10);
            },
            parseFloat: function (t) {
                return parseFloat(t);
            },
        }),
            (l._sort = function () {
                if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) ||
                        (this.sortHistory = t.concat(this.sortHistory));
                    var e = a(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e);
                }
            }),
            (l._getIsSameSortBy = function (t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e] != this.sortHistory[e]) return !1;
                return !0;
            }),
            (l._mode = function () {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return (e.options = this.options[t]), e;
            }),
            (l._resetLayout = function () {
                e.prototype._resetLayout.call(this),
                    this._mode()._resetLayout();
            }),
            (l._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t);
            }),
            (l._manageStamp = function (t) {
                this._mode()._manageStamp(t);
            }),
            (l._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (l.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (l.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }),
            (l.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems),
                        (this.filteredItems = i.concat(this.filteredItems)),
                        (this.items = e.concat(this.items));
                }
            }),
            (l._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return (
                    this.hide(e.needHide),
                    this.reveal(e.matches),
                    this.layoutItems(e.matches, !0),
                    e.matches
                );
            }),
            (l.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i,
                        o,
                        n = e.length;
                    for (i = 0; i < n; i++)
                        (o = e[i]), this.element.appendChild(o.element);
                    var s = this._filter(e).matches;
                    for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++)
                        delete e[i].isLayoutInstant;
                    this.reveal(s);
                }
            });
        var c = l.remove;
        return (
            (l.remove = function (t) {
                t = n.makeArray(t);
                var e = this.getItems(t);
                c.call(this, t);
                for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var s = e[o];
                    n.removeFrom(this.filteredItems, s);
                }
            }),
            (l.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    var e = this.items[t];
                    e.sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (l._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var o = t.apply(this, e);
                return (this.options.transitionDuration = i), o;
            }),
            (l.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element;
                });
            }),
            d
        );
    });
