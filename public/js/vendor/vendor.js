/**
 * Created by amitav on 6/18/15.
 */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery-1.10.2.min.map
 */
(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
        return new x.fn.init(e, t, r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) {
        return t.toUpperCase()
    }, q = function (e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
    }, _ = function () {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {
        jquery: f, constructor: x, init: function (e, n, r) {
            var i, o;
            if (!e)return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n)return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))for (i in n)x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2])return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return g.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return x.each(this, e, t)
        }, ready: function (e) {
            return x.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(g.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(x.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: h, sort: [].sort, splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)if (null != (o = arguments[l]))for (i in o)e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? x.readyWait++ : x.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body)return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === x.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === x.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)for (n in e)return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        }, parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n)return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && x.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(D, "ms-").replace(L, H)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)if (r = t.apply(e[i], n), r === !1)break
                } else for (i in e)if (r = t.apply(e[i], n), r === !1)break
            } else if (a) {
                for (; o > i; i++)if (r = t.call(e[i], i, e[i]), r === !1)break
            } else for (i in e)if (r = t.call(e[i], i, e[i]), r === !1)break;
            return e
        }, trim: b && !b.call("\ufeff\u00a0") ? function (e) {
            return null == e ? "" : b.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(C, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (m)return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r)for (; r > o; o++)e[i++] = n[o]; else while (n[o] !== t)e[i++] = n[o++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a)for (; o > i; i++)r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e)r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        }, access: function (e, n, r, i, o, a, s) {
            var l = 0, u = e.length, c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r)x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                    return c.call(x(e), n)
                })), n))for (; u > l; l++)n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }, swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function (t) {
        if (!n)if (n = x.Deferred(), "complete" === a.readyState)setTimeout(x.ready); else if (a.addEventListener)a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {
            }
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    r = x(a), function (e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) {
            return e === t ? (S = !0, 0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) {
                var t = 0, n = this.length;
                for (; n > t; t++)if (this[t] === e)return t;
                return -1
            }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function (e, t) {
                    _.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (l = t.nodeType) && 9 !== l)return [];
            if (h && !i) {
                if (o = Z.exec(e))if (s = o[1]) {
                    if (9 === l) {
                        if (a = t.getElementById(s), !a || !a.parentNode)return n;
                        if (a.id === s)return n.push(a), n
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)return n.push(a), n
                } else {
                    if (o[2])return M.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)return M.apply(n, t.getElementsByClassName(s)), n
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--)c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x)try {
                        return M.apply(n, y.querySelectorAll(x)), n
                    } catch (T) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }

            return t
        }

        function lt(e) {
            return e[b] = !0, e
        }

        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ct(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--)o.attrHandle[n[r]] = t
        }

        function pt(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)return r;
            if (n)while (n = n.nextSibling)if (n === t)return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function dt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return lt(function (t) {
                return t = +t, lt(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        s = at.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, r = at.support = {}, p = at.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w, i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                p()
            }), r.attributes = ut(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function (e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function (e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
                    return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
                }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return !0;
                return !1
            }, A = d.compareDocumentPosition ? function (e, t) {
                if (e === t)return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t)return S = !0, 0;
                if (!o || !a)return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a)return pt(e, t);
                r = e;
                while (r = r.parentNode)s.unshift(r);
                r = t;
                while (r = r.parentNode)l.unshift(r);
                while (s[i] === l[i])i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, n) : f
        }, at.matches = function (e, t) {
            return at(e, null, null, t)
        }, at.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (i) {
            }
            return at(t, f, null, [e]).length > 0
        }, at.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && p(e), v(e, t)
        }, at.attr = function (e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }, at.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, at.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++])t === e[o] && (i = n.push(o));
                while (i--)e.splice(n[i], 1)
            }
            return e
        }, a = at.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += a(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r]; r++)n += a(t);
            return n
        }, o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                }, PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [T, d, f];
                                    break
                                }
                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t))break;
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--)i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: lt(function (e) {
                    var t = [], n = [], r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: lt(function (e) {
                    return function (t) {
                        return at(e, t).length > 0
                    }
                }), contains: lt(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }), lang: lt(function (e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
                        var n;
                        do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === d
                }, focus: function (e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
                    return !0
                }, parent: function (e) {
                    return !o.pseudos.empty(e)
                }, header: function (e) {
                    return tt.test(e.nodeName)
                }, input: function (e) {
                    return et.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: ht(function () {
                    return [0]
                }), last: ht(function (e, t) {
                    return [t - 1]
                }), eq: ht(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: ht(function (e, t) {
                    var n = 0;
                    for (; t > n; n += 2)e.push(n);
                    return e
                }), odd: ht(function (e, t) {
                    var n = 1;
                    for (; t > n; n += 2)e.push(n);
                    return e
                }), lt: ht(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;)e.push(r);
                    return e
                }), gt: ht(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;)e.push(r);
                    return e
                })
            }
        }, o.pseudos.nth = o.pseudos.eq;
        for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})o.pseudos[n] = ft(n);
        for (n in{submit: !0, reset: !0})o.pseudos[n] = dt(n);
        function gt() {
        }

        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c)return t ? 0 : c.slice(0);
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }

        function yt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++)r += e[t].value;
            return r
        }

        function vt(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, a = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])if (1 === t.nodeType || o)return e(t, n, i)
            } : function (t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])if ((1 === t.nodeType || o) && e(t, n, s))return !0
                } else while (t = t[r])if (1 === t.nodeType || o)if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                    if ((l = u[1]) === !0 || l === i)return l === !0
                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0)return !0
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--)(p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
            })
        }

        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) {
                return e === t
            }, s, !0), p = vt(function (e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function (e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }];
            for (; i > l; l++)if (n = o.relative[e[l].type])f = [vt(bt(f), n)]; else {
                if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                    for (r = ++l; i > r; r++)if (o.relative[e[r].type])break;
                    return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                }
                f.push(n)
            }
            return bt(f)
        }

        function Ct(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++])if (m(h, l, c)) {
                            p.push(h);
                            break
                        }
                        w && (T = k, i = ++n)
                    }
                    r && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while (m = t[g++])m(x, y, l, c);
                    if (s) {
                        if (v > 0)while (b--)x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y)
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k, u = C), x
            };
            return r ? lt(s) : s
        }

        l = at.compile = function (e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while (n--)o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        };
        function Nt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++)at(e, t[r], n);
            return n
        }

        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t)return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type])break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e)return M.apply(n, i), n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }

        r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ut(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function (e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), r.attributes && ut(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ct("value", function (e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), ut(function (e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function (e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function (t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    })(arguments), n ? o = l.length : r && (s = t, c(r))
                }
                return this
            }, remove: function () {
                return l && x.each(arguments, function (e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1)l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                }), this
            }, has: function (e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], o = 0, this
            }, disable: function () {
                return l = u = r = t, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = t, r || p.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (e, t) {
                return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return p
    }, x.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return x.Deferred(function (n) {
                        x.each(t, function (t, o) {
                            var a = o[0], s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? x.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, x.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) {
                return function (r) {
                    t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            }, s, l, u;
            if (r > 1)for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length)return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in{
            submit: !0,
            change: !0,
            focusin: !0
        })d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t))break;
        return t.ownLast = "0" !== f, x(function () {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: x.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--)delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r))return
                }
                (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    x.extend({
        cache: {},
        noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function (e, t, n) {
            return R(e, t, n)
        },
        removeData: function (e, t) {
            return W(e, t)
        },
        _data: function (e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return W(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function (e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++)i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        }, removeData: function (e) {
            return this.each(function () {
                x.removeData(this, e)
            })
        }
    });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {
                }
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    x.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                    empty: x.Callbacks("once memory").add(function () {
                        x._removeData(e, t + "queue"), x._removeData(e, n)
                    })
                })
        }
    }), x.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                x.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () {
                --i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--)r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function (e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = x.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e))return this.each(function (t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                o = 0;
                while (i = t[o++])0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = x.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e))return this.each(function (t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                o = 0;
                while (i = t[o++])while (r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
                n.className = e ? x.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var t, r = 0, o = x(this), a = e.match(T) || [];
                    while (t = a[r++])o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length)return i = x.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o)return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), o)return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                    while (a--)r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }, attr: function (e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType)while (n = o[i++])r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function (e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
            var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function (e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        }, set: z.set
    }, x.attrHooks.contenteditable = {
        set: function (e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function (e, n) {
        x.attrHooks[n] = {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
        x.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {
            set: function (e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {
        }
    }

    x.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--)s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--)if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                    while (o--)a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                    l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                } else for (d in c)x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped())n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {
                    }
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; l > a; a++)i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                o.length && s.push({elem: u, handlers: o})
            }
            return n.length > l && s.push({elem: this, handlers: n.slice(l)}), s
        },
        fix: function (e) {
            if (e[x.expando])return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--)n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== at() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }, _default: function (e) {
                    return x.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = x.extend(new x.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function (e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        x.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function () {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        }, handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        }, teardown: function () {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function () {
                0 === n++ && a.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e)this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = ot; else if (!i)return this;
            return 1 === o && (s = i, i = function (e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
                x.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e)this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
                x.event.remove(this, e, r, n)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                x.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)return this.pushStack(x(e).filter(function () {
                for (t = 0; i > t; t++)if (x.contains(r[t], this))return !0
            }));
            for (t = 0; i > t; t++)x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, has: function (e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)if (x.contains(this, n[t]))return !0
            })
        }, not: function (e) {
            return this.pushStack(ft(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(ft(this, e || [], !1))
        }, is: function (e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    x.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return x.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return x.dir(e, "parentNode", n)
        }, next: function (e) {
            return pt(e, "nextSibling")
        }, prev: function (e) {
            return pt(e, "previousSibling")
        }, nextAll: function (e) {
            return x.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return x.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return x.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return x.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return x.sibling(e.firstChild)
        }, contents: function (e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function (e, t) {
        x.fn[e] = function (n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, dir: function (e, n, r) {
            var i = [], o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    function ft(e, t, n) {
        if (x.isFunction(t))return x.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return x.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t))return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement)while (t.length)n.createElement(t.pop());
        return n
    }

    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function (e) {
            return x.access(this, function (e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++)t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild)e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return x.clone(this, e, t)
            })
        }, html: function (e) {
            return x.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = x.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))return this.each(function (r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o)for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++)i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events)x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        x.fn[e] = function (e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++)n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }

    x.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)r[a] && Ot(i, r[a]);
            if (t)if (n)for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)Mt(i, r[a]); else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        }, buildFragment: function (e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++)if (o = e[h], o || 0 === o)if ("object" === x.type(o))x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--)s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--)x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild)s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++])if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                i = 0;
                while (o = s[i++])kt.test(o.type || "") && n.push(o)
            }
            return s = null, f
        }, cleanData: function (e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (; null != (n = e[s]); s++)if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                if (a.events)for (r in a.events)f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
            }
        }, _evalUrl: function (e) {
            return x.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), x.fn.extend({
        wrapAll: function (e) {
            if (x.isFunction(e))return this.each(function (t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return x.isFunction(e) ? this.each(function (t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = x.isFunction(e);
            return this.each(function (n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {BODY: "block"}, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e)return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--)if (t = en[i] + n, t in e)return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++)r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    x.fn.extend({
        css: function (e, n) {
            return x.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++)a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return rn(this, !0)
        }, hide: function () {
            return rn(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": x.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t)return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t)))try {
                    u[n] = r
                } catch (c) {
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get"in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; 4 > o; o += 2)"margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i))return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }

    x.each(["height", "width"], function (e, n) {
        x.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            }, set: function (e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function (e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function () {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? x.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
            x.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function (e) {
        return !x.expr.filters.hidden(e)
    }), x.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        x.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++)i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function (e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
                    return {name: t.name, value: e.replace(fn, "\r\n")}
                }) : {name: t.name, value: n.replace(fn, "\r\n")}
            }).get()
        }
    }), x.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))x.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e)gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))x.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x.type(t))r(e, t); else for (i in t)gn(e + "[" + i + "]", t[i], n, r)
    }

    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))while (r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function (e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }

        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }

    x.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn)return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
                s.each(r, o || [e.responseText, t, e])
            }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === b) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a))c[t[1].toLowerCase()] = t[2]
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === b ? a : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e, y[e] = t), this
                },
                overrideMimeType: function (e) {
                    return b || (p.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else C.always(e[C.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return u && u.abort(t), k(0, t), this
                }
            };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b)return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers)C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))return C.abort();
            w = "abort";
            for (i in{success: 1, error: 1, complete: 1})C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b))throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }

            return C
        },
        getJSON: function (e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function (e, n) {
        x[n] = function (e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0])u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (s in l)if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0]in r)a = u[0]; else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])for (a in e.converters)u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)for (i in u)if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0)if (a && e["throws"])t = a(t); else try {
                t = a(t)
            } catch (p) {
                return {state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    x.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function (t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
            var e;
            for (e in Pn)Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    x.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials"in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)l.setRequestHeader(s, i[s])
                    } catch (u) {
                    }
                    l.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i)4 !== l.readyState && l.abort(); else {
                                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch (f) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], i = i || [], a = +r || 1;
                do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
        }]
    };

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++)if (r = i[o].call(n, t, e))return r
    }

    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i)return !1;
            var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
            for (; l > a; a++)u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)if (r = Gn[o].call(u, e, c, u.opts))return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand"in a) {
            o = a.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    x.Animation = x.extend(er, {
        tweener: function (e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++)n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], Vn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show"))continue;
            c[r] = d && d[r] || x.style(e, r)
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
                x(e).hide()
            }), u.done(function () {
                var t;
                x._removeData(e, "fxshow");
                for (t in c)x.style(e, t, c[t])
            });
            for (r in c)a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    x.Tween = rr, rr.prototype = {
        constructor: rr, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () {
                var t = er(this, x.extend({}, e), o);
                (i || x._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
                if (n)a[n] && a[n].stop && i(a[n]); else for (n in a)a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });
    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        x.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function (e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function () {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
        return x.grep(x.timers, function (t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {top: 0, left: 0}, a = this[0], s = a && a.ownerDocument;
        if (s)return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function (e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using"in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function (i) {
            return x.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    x.each({Height: "height", Width: "width"}, function (e, n) {
        x.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            x.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function (n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function () {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    }))
})(window);

/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)if (void 0 !== a.style[c])return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }

    var c = '[data-dismiss="alert"]', d = function (b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }

    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.2", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }

    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active"))return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }

    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.2", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : a.extend({}, e.data(), {trigger: this});
        c.call(f, h)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function () {
            var d = a(this), e = c(d), f = {relatedTarget: this};
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }

    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.2", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function (b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d), g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which)return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }

    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.options.backdrop && d.adjustBackdrop(), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function (a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, c.prototype.adjustBackdrop = function () {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, c.prototype.checkScrollbar = function () {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, c.prototype.init = function (b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g)this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.options.container ? a(this.options.container) : this.$element.parent(), p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }

        var e = this, f = this.tip(), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
        var f = d ? {
            top: 0,
            left: 0
        } : b.offset(), g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()}, h = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {top: 0, left: 0};
        if (!this.$viewport)return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.2", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function () {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }

    b.VERSION = "3.3.2", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = "offset", c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function () {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])return this.activeTarget = null, this.clear();
        for (a = e.length; a--;)g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.2", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}), g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }

        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.2", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed)return c > e ? "top" : !1;
        if ("bottom" == this.affixed)return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = a("body").height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented())return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);

/*
 AngularJS v1.3.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (T, V, s) {
    'use strict';
    function F(b) {
        return function () {
            var a = arguments[0], c;
            c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.16/" + (b ? b + "/" : "") + a;
            for (a = 1; a < arguments.length; a++) {
                c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                var d = encodeURIComponent, e;
                e = arguments[a];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                c += d(e)
            }
            return Error(c)
        }
    }

    function Sa(b) {
        if (null == b || Ta(b))return !1;
        var a = "length"in Object(b) && b.length;
        return b.nodeType === ma && a ? !0 : O(b) || w(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function q(b, a, c) {
        var d, e;
        if (b)if (E(b))for (d in b)"prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b); else if (w(b) || Sa(b)) {
            var f = "object" !== typeof b;
            d = 0;
            for (e = b.length; d < e; d++)(f || d in b) && a.call(c, b[d], d, b)
        } else if (b.forEach && b.forEach !== q)b.forEach(a, c, b); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d, b);
        return b
    }

    function Jd(b, a, c) {
        for (var d = Object.keys(b).sort(),
                 e = 0; e < d.length; e++)a.call(c, b[d[e]], d[e]);
        return d
    }

    function pc(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function Kd() {
        return ++rb
    }

    function qc(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function x(b) {
        for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            if (e)for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
                var l = f[g];
                b[l] = e[l]
            }
        }
        qc(b, a);
        return b
    }

    function aa(b) {
        return parseInt(b, 10)
    }

    function Pb(b, a) {
        return x(Object.create(b), a)
    }

    function A() {
    }

    function na(b) {
        return b
    }

    function ca(b) {
        return function () {
            return b
        }
    }

    function C(b) {
        return "undefined" === typeof b
    }

    function y(b) {
        return "undefined" !== typeof b
    }

    function I(b) {
        return null !== b && "object" === typeof b
    }

    function O(b) {
        return "string" === typeof b
    }

    function Q(b) {
        return "number" === typeof b
    }

    function ea(b) {
        return "[object Date]" === Aa.call(b)
    }

    function E(b) {
        return "function" === typeof b
    }

    function Ua(b) {
        return "[object RegExp]" === Aa.call(b)
    }

    function Ta(b) {
        return b && b.window === b
    }

    function Va(b) {
        return b && b.$evalAsync && b.$watch
    }

    function Wa(b) {
        return "boolean" === typeof b
    }

    function rc(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find))
    }

    function Ld(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++)a[b[c]] = !0;
        return a
    }

    function sa(b) {
        return L(b.nodeName || b[0] && b[0].nodeName)
    }

    function Xa(b, a) {
        var c = b.indexOf(a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function Ba(b, a, c, d) {
        if (Ta(b) || Va(b))throw Ja("cpws");
        if (a) {
            if (b === a)throw Ja("cpi");
            c = c || [];
            d = d || [];
            if (I(b)) {
                var e = c.indexOf(b);
                if (-1 !== e)return d[e];
                c.push(b);
                d.push(a)
            }
            if (w(b))for (var f = a.length = 0; f < b.length; f++)e = Ba(b[f], null, c, d), I(b[f]) && (c.push(b[f]),
                d.push(e)), a.push(e); else {
                var g = a.$$hashKey;
                w(a) ? a.length = 0 : q(a, function (b, c) {
                    delete a[c]
                });
                for (f in b)b.hasOwnProperty(f) && (e = Ba(b[f], null, c, d), I(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
                qc(a, g)
            }
        } else if (a = b)w(b) ? a = Ba(b, [], c, d) : ea(b) ? a = new Date(b.getTime()) : Ua(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : I(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Ba(b, e, c, d));
        return a
    }

    function oa(b, a) {
        if (w(b)) {
            a = a || [];
            for (var c = 0, d = b.length; c < d; c++)a[c] = b[c]
        } else if (I(b))for (c in a =
            a || {}, b)if ("$" !== c.charAt(0) || "$" !== c.charAt(1))a[c] = b[c];
        return a || b
    }

    function fa(b, a) {
        if (b === a)return !0;
        if (null === b || null === a)return !1;
        if (b !== b && a !== a)return !0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c)if (w(b)) {
            if (!w(a))return !1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++)if (!fa(b[d], a[d]))return !1;
                return !0
            }
        } else {
            if (ea(b))return ea(a) ? fa(b.getTime(), a.getTime()) : !1;
            if (Ua(b))return Ua(a) ? b.toString() == a.toString() : !1;
            if (Va(b) || Va(a) || Ta(b) || Ta(a) || w(a) || ea(a) || Ua(a))return !1;
            c = {};
            for (d in b)if ("$" !==
                d.charAt(0) && !E(b[d])) {
                if (!fa(b[d], a[d]))return !1;
                c[d] = !0
            }
            for (d in a)if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== s && !E(a[d]))return !1;
            return !0
        }
        return !1
    }

    function Ya(b, a, c) {
        return b.concat(Za.call(a, c))
    }

    function sc(b, a) {
        var c = 2 < arguments.length ? Za.call(arguments, 2) : [];
        return !E(a) || a instanceof RegExp ? a : c.length ? function () {
            return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function Md(b, a) {
        var c = a;
        "string" === typeof b &&
        "$" === b.charAt(0) && "$" === b.charAt(1) ? c = s : Ta(a) ? c = "$WINDOW" : a && V === a ? c = "$DOCUMENT" : Va(a) && (c = "$SCOPE");
        return c
    }

    function $a(b, a) {
        if ("undefined" === typeof b)return s;
        Q(a) || (a = a ? 2 : null);
        return JSON.stringify(b, Md, a)
    }

    function tc(b) {
        return O(b) ? JSON.parse(b) : b
    }

    function ta(b) {
        b = z(b).clone();
        try {
            b.empty()
        } catch (a) {
        }
        var c = z("<div>").append(b).html();
        try {
            return b[0].nodeType === ab ? L(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + L(b)
            })
        } catch (d) {
            return L(c)
        }
    }

    function uc(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {
        }
    }

    function vc(b) {
        var a = {}, c, d;
        q((b || "").split("&"), function (b) {
            b && (c = b.replace(/\+/g, "%20").split("="), d = uc(c[0]), y(d) && (b = y(c[1]) ? uc(c[1]) : !0, wc.call(a, d) ? w(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Qb(b) {
        var a = [];
        q(b, function (b, d) {
            w(b) ? q(b, function (b) {
                a.push(Ca(d, !0) + (!0 === b ? "" : "=" + Ca(b, !0)))
            }) : a.push(Ca(d, !0) + (!0 === b ? "" : "=" + Ca(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function sb(b) {
        return Ca(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Ca(b, a) {
        return encodeURIComponent(b).replace(/%40/gi,
            "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+")
    }

    function Nd(b, a) {
        var c, d, e = tb.length;
        b = z(b);
        for (d = 0; d < e; ++d)if (c = tb[d] + a, O(c = b.attr(c)))return c;
        return null
    }

    function Od(b, a) {
        var c, d, e = {};
        q(tb, function (a) {
            a += "app";
            !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a))
        });
        q(tb, function (a) {
            a += "app";
            var e;
            !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a))
        });
        c && (e.strictDi = null !== Nd(c, "strict-di"),
            a(c, d ? [d] : [], e))
    }

    function xc(b, a, c) {
        I(c) || (c = {});
        c = x({strictDi: !1}, c);
        var d = function () {
            b = z(b);
            if (b.injector()) {
                var d = b[0] === V ? "document" : ta(b);
                throw Ja("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            a = a || [];
            a.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]);
            c.debugInfoEnabled && a.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]);
            a.unshift("ng");
            d = bb(a, c.strictDi);
            d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector",
                        d);
                    c(b)(a)
                })
            }]);
            return d
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        T && e.test(T.name) && (c.debugInfoEnabled = !0, T.name = T.name.replace(e, ""));
        if (T && !f.test(T.name))return d();
        T.name = T.name.replace(f, "");
        ba.resumeBootstrap = function (b) {
            q(b, function (b) {
                a.push(b)
            });
            return d()
        };
        E(ba.resumeDeferredBootstrap) && ba.resumeDeferredBootstrap()
    }

    function Pd() {
        T.name = "NG_ENABLE_DEBUG_INFO!" + T.name;
        T.location.reload()
    }

    function Qd(b) {
        b = ba.element(b).injector();
        if (!b)throw Ja("test");
        return b.get("$$testability")
    }

    function yc(b, a) {
        a = a || "_";
        return b.replace(Rd, function (b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function Sd() {
        var b;
        zc || ((pa = T.jQuery) && pa.fn.on ? (z = pa, x(pa.fn, {
            scope: Ka.scope,
            isolateScope: Ka.isolateScope,
            controller: Ka.controller,
            injector: Ka.injector,
            inheritedData: Ka.inheritedData
        }), b = pa.cleanData, pa.cleanData = function (a) {
            var c;
            if (Rb)Rb = !1; else for (var d = 0, e; null != (e = a[d]); d++)(c = pa._data(e, "events")) && c.$destroy && pa(e).triggerHandler("$destroy");
            b(a)
        }) : z = R, ba.element = z, zc = !0)
    }

    function Sb(b, a, c) {
        if (!b)throw Ja("areq",
            a || "?", c || "required");
        return b
    }

    function La(b, a, c) {
        c && w(b) && (b = b[b.length - 1]);
        Sb(E(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function Ma(b, a) {
        if ("hasOwnProperty" === b)throw Ja("badname", a);
    }

    function Ac(b, a, c) {
        if (!a)return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; g < f; g++)d = a[g], b && (b = (e = b)[d]);
        return !c && E(b) ? sc(e, b) : b
    }

    function ub(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a)break;
            c.push(a)
        } while (a !== b);
        return z(c)
    }

    function ga() {
        return Object.create(null)
    }

    function Td(b) {
        function a(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var c = F("$injector"), d = F("ng");
        b = a(b, "angular", Object);
        b.$$minErr = b.$$minErr || F;
        return a(b, "module", function () {
            var b = {};
            return function (f, g, h) {
                if ("hasOwnProperty" === f)throw d("badname", "module");
                g && b.hasOwnProperty(f) && (b[f] = null);
                return a(b, f, function () {
                    function a(c, d, e, f) {
                        f || (f = b);
                        return function () {
                            f[e || "push"]([c, d, arguments]);
                            return u
                        }
                    }

                    if (!g)throw c("nomod", f);
                    var b = [], d = [], e = [], n = a("$injector", "invoke", "push", d), u = {
                        _invokeQueue: b,
                        _configBlocks: d,
                        _runBlocks: e,
                        requires: g,
                        name: f,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: n,
                        run: function (a) {
                            e.push(a);
                            return this
                        }
                    };
                    h && n(h);
                    return u
                })
            }
        })
    }

    function Ud(b) {
        x(b, {
            bootstrap: xc,
            copy: Ba,
            extend: x,
            equals: fa,
            element: z,
            forEach: q,
            injector: bb,
            noop: A,
            bind: sc,
            toJson: $a,
            fromJson: tc,
            identity: na,
            isUndefined: C,
            isDefined: y,
            isString: O,
            isFunction: E,
            isObject: I,
            isNumber: Q,
            isElement: rc,
            isArray: w,
            version: Vd,
            isDate: ea,
            lowercase: L,
            uppercase: vb,
            callbacks: {counter: 0},
            getTestability: Qd,
            $$minErr: F,
            $$csp: cb,
            reloadWithDebugInfo: Pd
        });
        db = Td(T);
        try {
            db("ngLocale")
        } catch (a) {
            db("ngLocale", []).provider("$locale", Wd)
        }
        db("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: Xd});
            a.provider("$compile", Bc).directive({
                a: Yd,
                input: Cc,
                textarea: Cc,
                form: Zd,
                script: $d,
                select: ae,
                style: be,
                option: ce,
                ngBind: de,
                ngBindHtml: ee,
                ngBindTemplate: fe,
                ngClass: ge,
                ngClassEven: he,
                ngClassOdd: ie,
                ngCloak: je,
                ngController: ke,
                ngForm: le,
                ngHide: me,
                ngIf: ne,
                ngInclude: oe,
                ngInit: pe,
                ngNonBindable: qe,
                ngPluralize: re,
                ngRepeat: se,
                ngShow: te,
                ngStyle: ue,
                ngSwitch: ve,
                ngSwitchWhen: we,
                ngSwitchDefault: xe,
                ngOptions: ye,
                ngTransclude: ze,
                ngModel: Ae,
                ngList: Be,
                ngChange: Ce,
                pattern: Dc,
                ngPattern: Dc,
                required: Ec,
                ngRequired: Ec,
                minlength: Fc,
                ngMinlength: Fc,
                maxlength: Gc,
                ngMaxlength: Gc,
                ngValue: De,
                ngModelOptions: Ee
            }).directive({ngInclude: Fe}).directive(wb).directive(Hc);
            a.provider({
                $anchorScroll: Ge,
                $animate: He,
                $browser: Ie,
                $cacheFactory: Je,
                $controller: Ke,
                $document: Le,
                $exceptionHandler: Me,
                $filter: Ic,
                $interpolate: Ne,
                $interval: Oe,
                $http: Pe,
                $httpBackend: Qe,
                $location: Re,
                $log: Se,
                $parse: Te,
                $rootScope: Ue,
                $q: Ve,
                $$q: We,
                $sce: Xe,
                $sceDelegate: Ye,
                $sniffer: Ze,
                $templateCache: $e,
                $templateRequest: af,
                $$testability: bf,
                $timeout: cf,
                $window: df,
                $$rAF: ef,
                $$asyncCallback: ff,
                $$jqLite: gf
            })
        }])
    }

    function eb(b) {
        return b.replace(hf,
            function (a, b, d, e) {
                return e ? d.toUpperCase() : d
            }).replace(jf, "Moz$1")
    }

    function Jc(b) {
        b = b.nodeType;
        return b === ma || !b || 9 === b
    }

    function Kc(b, a) {
        var c, d, e = a.createDocumentFragment(), f = [];
        if (Tb.test(b)) {
            c = c || e.appendChild(a.createElement("div"));
            d = (kf.exec(b) || ["", ""])[1].toLowerCase();
            d = ha[d] || ha._default;
            c.innerHTML = d[1] + b.replace(lf, "<$1></$2>") + d[2];
            for (d = d[0]; d--;)c = c.lastChild;
            f = Ya(f, c.childNodes);
            c = e.firstChild;
            c.textContent = ""
        } else f.push(a.createTextNode(b));
        e.textContent = "";
        e.innerHTML = "";
        q(f, function (a) {
            e.appendChild(a)
        });
        return e
    }

    function R(b) {
        if (b instanceof R)return b;
        var a;
        O(b) && (b = U(b), a = !0);
        if (!(this instanceof R)) {
            if (a && "<" != b.charAt(0))throw Ub("nosel");
            return new R(b)
        }
        if (a) {
            a = V;
            var c;
            b = (c = mf.exec(b)) ? [a.createElement(c[1])] : (c = Kc(b, a)) ? c.childNodes : []
        }
        Lc(this, b)
    }

    function Vb(b) {
        return b.cloneNode(!0)
    }

    function xb(b, a) {
        a || yb(b);
        if (b.querySelectorAll)for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++)yb(c[d])
    }

    function Mc(b, a, c, d) {
        if (y(d))throw Ub("offargs");
        var e = (d = zb(b)) && d.events, f = d && d.handle;
        if (f)if (a)q(a.split(" "),
            function (a) {
                if (y(c)) {
                    var d = e[a];
                    Xa(d || [], c);
                    if (d && 0 < d.length)return
                }
                b.removeEventListener(a, f, !1);
                delete e[a]
            }); else for (a in e)"$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a]
    }

    function yb(b, a) {
        var c = b.ng339, d = c && Ab[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Mc(b)), delete Ab[c], b.ng339 = s))
    }

    function zb(b, a) {
        var c = b.ng339, c = c && Ab[c];
        a && !c && (b.ng339 = c = ++nf, c = Ab[c] = {events: {}, data: {}, handle: s});
        return c
    }

    function Wb(b, a, c) {
        if (Jc(b)) {
            var d = y(c), e = !d && a && !I(a),
                f = !a;
            b = (b = zb(b, !e)) && b.data;
            if (d)b[a] = c; else {
                if (f)return b;
                if (e)return b && b[a];
                x(b, a)
            }
        }
    }

    function Bb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function Cb(b, a) {
        a && b.setAttribute && q(a.split(" "), function (a) {
            b.setAttribute("class", U((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(a) + " ", " ")))
        })
    }

    function Db(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            q(a.split(" "), function (a) {
                a = U(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", U(c))
        }
    }

    function Lc(b, a) {
        if (a)if (a.nodeType)b[b.length++] = a; else {
            var c = a.length;
            if ("number" === typeof c && a.window !== a) {
                if (c)for (var d = 0; d < c; d++)b[b.length++] = a[d]
            } else b[b.length++] = a
        }
    }

    function Nc(b, a) {
        return Eb(b, "$" + (a || "ngController") + "Controller")
    }

    function Eb(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = w(a) ? a : [a]; b;) {
            for (var d = 0, e = a.length; d < e; d++)if ((c = z.data(b, a[d])) !== s)return c;
            b = b.parentNode ||
                11 === b.nodeType && b.host
        }
    }

    function Oc(b) {
        for (xb(b, !0); b.firstChild;)b.removeChild(b.firstChild)
    }

    function Pc(b, a) {
        a || xb(b);
        var c = b.parentNode;
        c && c.removeChild(b)
    }

    function of(b, a) {
        a = a || T;
        if ("complete" === a.document.readyState)a.setTimeout(b); else z(a).on("load", b)
    }

    function Qc(b, a) {
        var c = Fb[a.toLowerCase()];
        return c && Rc[sa(b)] && c
    }

    function pf(b, a) {
        var c = b.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Sc[a]
    }

    function qf(b, a) {
        var c = function (c, e) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var f =
                a[e || c.type], g = f ? f.length : 0;
            if (g) {
                if (C(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped
                };
                1 < g && (f = oa(f));
                for (var l = 0; l < g; l++)c.isImmediatePropagationStopped() || f[l].call(b, c)
            }
        };
        c.elem = b;
        return c
    }

    function gf() {
        this.$get = function () {
            return x(R, {
                hasClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return Bb(b, a)
                }, addClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return Db(b, a)
                }, removeClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return Cb(b, a)
                }
            })
        }
    }

    function Na(b, a) {
        var c = b && b.$$hashKey;
        if (c)return "function" === typeof c && (c = b.$$hashKey()), c;
        c = typeof b;
        return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Kd)() : c + ":" + b
    }

    function fb(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function () {
                return ++c
            }
        }
        q(b, this.put, this)
    }

    function rf(b) {
        return (b = b.toString().replace(Tc, "").match(Uc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/,
            " ") + ")" : "fn"
    }

    function bb(b, a) {
        function c(a) {
            return function (b, c) {
                if (I(b))q(b, pc(a)); else return a(b, c)
            }
        }

        function d(a, b) {
            Ma(a, "service");
            if (E(b) || w(b))b = n.instantiate(b);
            if (!b.$get)throw Da("pget", a);
            return r[a + "Provider"] = b
        }

        function e(a, b) {
            return function () {
                var c = v.invoke(b, this);
                if (C(c))throw Da("undef", a);
                return c
            }
        }

        function f(a, b, c) {
            return d(a, {$get: !1 !== c ? e(a, b) : b})
        }

        function g(a) {
            var b = [], c;
            q(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b], f = n.get(e[0]);
                        f[e[1]].apply(f,
                            e[2])
                    }
                }

                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        O(a) ? (c = db(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : E(a) ? b.push(n.invoke(a)) : w(a) ? b.push(n.invoke(a)) : La(a, "module")
                    } catch (e) {
                        throw w(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Da("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(b, c) {
            function d(a, e) {
                if (b.hasOwnProperty(a)) {
                    if (b[a] === l)throw Da("cdep", a + " <- " + k.join(" <- "));
                    return b[a]
                }
                try {
                    return k.unshift(a),
                        b[a] = l, b[a] = c(a, e)
                } catch (f) {
                    throw b[a] === l && delete b[a], f;
                } finally {
                    k.shift()
                }
            }

            function e(b, c, f, g) {
                "string" === typeof f && (g = f, f = null);
                var k = [], l = bb.$$annotate(b, a, g), h, n, m;
                n = 0;
                for (h = l.length; n < h; n++) {
                    m = l[n];
                    if ("string" !== typeof m)throw Da("itkn", m);
                    k.push(f && f.hasOwnProperty(m) ? f[m] : d(m, g))
                }
                w(b) && (b = b[h]);
                return b.apply(c, k)
            }

            return {
                invoke: e, instantiate: function (a, b, c) {
                    var d = Object.create((w(a) ? a[a.length - 1] : a).prototype || null);
                    a = e(a, d, b, c);
                    return I(a) || E(a) ? a : d
                }, get: d, annotate: bb.$$annotate, has: function (a) {
                    return r.hasOwnProperty(a +
                            "Provider") || b.hasOwnProperty(a)
                }
            }
        }

        a = !0 === a;
        var l = {}, k = [], m = new fb([], !0), r = {
            $provide: {
                provider: c(d),
                factory: c(f),
                service: c(function (a, b) {
                    return f(a, ["$injector", function (a) {
                        return a.instantiate(b)
                    }])
                }),
                value: c(function (a, b) {
                    return f(a, ca(b), !1)
                }),
                constant: c(function (a, b) {
                    Ma(a, "constant");
                    r[a] = b;
                    u[a] = b
                }),
                decorator: function (a, b) {
                    var c = n.get(a + "Provider"), d = c.$get;
                    c.$get = function () {
                        var a = v.invoke(d, c);
                        return v.invoke(b, null, {$delegate: a})
                    }
                }
            }
        }, n = r.$injector = h(r, function (a, b) {
            ba.isString(b) && k.push(b);
            throw Da("unpr", k.join(" <- "));
        }), u = {}, v = u.$injector = h(u, function (a, b) {
            var c = n.get(a + "Provider", b);
            return v.invoke(c.$get, c, s, a)
        });
        q(g(b), function (a) {
            v.invoke(a || A)
        });
        return v
    }

    function Ge() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === sa(a))return b = a, !0
                });
                return b
            }

            function f(b) {
                if (b) {
                    b.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    E(c) ? c = c() : rc(c) ? (c = c[0], c = "fixed" !==
                    a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Q(c) || (c = 0);
                    c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
                } else a.scrollTo(0, 0)
            }

            function g() {
                var a = c.hash(), b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }

            var h = a.document;
            b && d.$watch(function () {
                return c.hash()
            }, function (a, b) {
                a === b && "" === a || of(function () {
                    d.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function ff() {
        this.$get = ["$$rAF", "$timeout", function (b, a) {
            return b.supported ? function (a) {
                return b(a)
            } :
                function (b) {
                    return a(b, 0, !1)
                }
        }]
    }

    function sf(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, Za.call(arguments, 1))
            } finally {
                if (p--, 0 === p)for (; H.length;)try {
                    H.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function f(a, b) {
            (function Xb() {
                q(J, function (a) {
                    a()
                });
                B = b(Xb, a)
            })()
        }

        function g() {
            h();
            l()
        }

        function h() {
            a:{
                try {
                    M = u.state;
                    break a
                } catch (a) {
                }
                M = void 0
            }
            M = C(M) ? null : M;
            fa(M, S) && (M = S);
            S = M
        }

        function l() {
            if (G !== m.url() || D !== M)G = m.url(), D = M, q($, function (a) {
                a(m.url(), M)
            })
        }

        function k(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var m = this, r = a[0], n = b.location, u = b.history, v = b.setTimeout, P = b.clearTimeout, t = {};
        m.isMock = !1;
        var p = 0, H = [];
        m.$$completeOutstandingRequest = e;
        m.$$incOutstandingRequestCount = function () {
            p++
        };
        m.notifyWhenNoOutstandingRequests = function (a) {
            q(J, function (a) {
                a()
            });
            0 === p ? a() : H.push(a)
        };
        var J = [], B;
        m.addPollFn = function (a) {
            C(B) && f(100, v);
            J.push(a);
            return a
        };
        var M, D, G = n.href, N = a.find("base"), Y = null;
        h();
        D = M;
        m.url = function (a, c, e) {
            C(e) && (e = null);
            n !== b.location && (n = b.location);
            u !== b.history && (u = b.history);
            if (a) {
                var f =
                    D === e;
                if (G === a && (!d.history || f))return m;
                var g = G && Ea(G) === Ea(a);
                G = a;
                D = e;
                !d.history || g && f ? (g || (Y = a), c ? n.replace(a) : g ? (c = n, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : n.href = a) : (u[c ? "replaceState" : "pushState"](e, "", a), h(), D = M);
                return m
            }
            return Y || n.href.replace(/%27/g, "'")
        };
        m.state = function () {
            return M
        };
        var $ = [], W = !1, S = null;
        m.onUrlChange = function (a) {
            if (!W) {
                if (d.history)z(b).on("popstate", g);
                z(b).on("hashchange", g);
                W = !0
            }
            $.push(a);
            return a
        };
        m.$$checkUrlChange = l;
        m.baseHref = function () {
            var a = N.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var Fa = {}, y = "", hb = m.baseHref();
        m.cookies = function (a, b) {
            var d, e, f, g;
            if (a)b === s ? r.cookie = encodeURIComponent(a) + "=;path=" + hb + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : O(b) && (d = (r.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + hb).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
                if (r.cookie !== y)for (y = r.cookie, d = y.split("; "), Fa = {}, f = 0; f < d.length; f++)e = d[f], g =
                    e.indexOf("="), 0 < g && (a = k(e.substring(0, g)), Fa[a] === s && (Fa[a] = k(e.substring(g + 1))));
                return Fa
            }
        };
        m.defer = function (a, b) {
            var c;
            p++;
            c = v(function () {
                delete t[c];
                e(a)
            }, b || 0);
            t[c] = !0;
            return c
        };
        m.defer.cancel = function (a) {
            return t[a] ? (delete t[a], P(a), e(A), !0) : !1
        }
    }

    function Ie() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
            return new sf(b, d, a, c)
        }]
    }

    function Je() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    a != r && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, r), r = a, r.n = null)
                }

                function f(a, b) {
                    a !=
                    b && (a && (a.p = b), b && (b.n = a))
                }

                if (b in a)throw F("$cacheFactory")("iid", b);
                var g = 0, h = x({}, d, {id: b}), l = {}, k = d && d.capacity || Number.MAX_VALUE, m = {}, r = null, n = null;
                return a[b] = {
                    put: function (a, b) {
                        if (k < Number.MAX_VALUE) {
                            var c = m[a] || (m[a] = {key: a});
                            e(c)
                        }
                        if (!C(b))return a in l || g++, l[a] = b, g > k && this.remove(n.key), b
                    }, get: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)return;
                            e(b)
                        }
                        return l[a]
                    }, remove: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)return;
                            b == r && (r = b.p);
                            b == n && (n = b.n);
                            f(b.n, b.p);
                            delete m[a]
                        }
                        delete l[a];
                        g--
                    }, removeAll: function () {
                        l = {};
                        g = 0;
                        m = {};
                        r = n = null
                    }, destroy: function () {
                        m = h = l = null;
                        delete a[b]
                    }, info: function () {
                        return x({}, h, {size: g})
                    }
                }
            }

            var a = {};
            b.info = function () {
                var b = {};
                q(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function $e() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function Bc(b, a) {
        function c(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
            q(a, function (a, e) {
                var f = a.match(c);
                if (!f)throw da("iscp", b, e, a);
                d[e] = {
                    mode: f[1][0], collection: "*" ===
                    f[2], optional: "?" === f[3], attrName: f[4] || e
                }
            });
            return d
        }

        function d(a) {
            var b = a.charAt(0);
            if (!b || b !== L(b))throw da("baddir", a);
            return a
        }

        var e = {}, f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, g = /(([\w\-]+)(?:\:([^;]+))?;?)/, h = Ld("ngSrc,ngSrcset,src,srcset"), l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, k = /^(on[a-z]+|formaction)$/;
        this.directive = function n(a, f) {
            Ma(a, "directive");
            O(a) ? (d(a), Sb(f, "directiveFactory"), e.hasOwnProperty(a) || (e[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function (b, d) {
                var f = [];
                q(e[a], function (e, g) {
                    try {
                        var h = b.invoke(e);
                        E(h) ? h = {compile: ca(h)} : !h.compile && h.link && (h.compile = ca(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || a;
                        h.require = h.require || h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        I(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
                        f.push(h)
                    } catch (l) {
                        d(l)
                    }
                });
                return f
            }])), e[a].push(f)) : q(a, pc(n));
            return this
        };
        this.aHrefSanitizationWhitelist = function (b) {
            return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist =
            function (b) {
                return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
            };
        var m = !0;
        this.debugInfoEnabled = function (a) {
            return y(a) ? (m = a, this) : m
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, d, t, p, H, J, B, M, D) {
            function G(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function N(a, b, c, d, e) {
                a instanceof z || (a = z(a));
                q(a, function (b, c) {
                    b.nodeType == ab && b.nodeValue.match(/\S+/) &&
                    (a[c] = z(b).wrap("<span></span>").parent()[0])
                });
                var f = Y(a, b, a, c, d, e);
                N.$$addScopeClass(a);
                var g = null;
                return function (b, c, d) {
                    Sb(b, "scope");
                    d = d || {};
                    var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
                    d = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude);
                    g || (g = (d = d && d[0]) ? "foreignobject" !== sa(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== g ? z(T(g, z("<div>").append(a).html())) : c ? Ka.clone.call(a) : a;
                    if (h)for (var l in h)d.data("$" + l + "Controller", h[l].instance);
                    N.$$addScopeInfo(d,
                        b);
                    c && c(d, b);
                    f && f(b, d, d, e);
                    return d
                }
            }

            function Y(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, l, k, n, m, v, u;
                    if (p)for (u = Array(c.length), n = 0; n < h.length; n += 3)f = h[n], u[f] = c[f]; else u = c;
                    n = 0;
                    for (m = h.length; n < m;)l = u[h[n++]], c = h[n++], f = h[n++], c ? (c.scope ? (k = a.$new(), N.$$addScopeInfo(z(l), k)) : k = a, v = c.transcludeOnThisElement ? $(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? $(a, b) : null, c(f, k, l, d, v)) : f && f(a, l.childNodes, s, e)
                }

                for (var h = [], l, k, n, m, p, v = 0; v < a.length; v++) {
                    l = new $b;
                    k =
                        W(a[v], [], l, 0 === v ? d : s, e);
                    (f = k.length ? y(k, a[v], l, b, c, null, [], [], f) : null) && f.scope && N.$$addScopeClass(l.$$element);
                    l = f && f.terminal || !(n = a[v].childNodes) || !n.length ? null : Y(n, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || l)h.push(v, f, l), m = !0, p = p || f;
                    f = null
                }
                return m ? g : null
            }

            function $(a, b, c, d) {
                return function (d, e, f, g, h) {
                    d || (d = a.$new(!1, h), d.$$transcluded = !0);
                    return b(d, e, {parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g})
                }
            }

            function W(a, b, c, d, e) {
                var h =
                    c.$attr, l;
                switch (a.nodeType) {
                    case ma:
                        C(b, va(sa(a)), "E", d, e);
                        for (var k, n, m, p = a.attributes, v = 0, u = p && p.length; v < u; v++) {
                            var B = !1, P = !1;
                            k = p[v];
                            l = k.name;
                            n = U(k.value);
                            k = va(l);
                            if (m = ac.test(k))l = l.replace(Wc, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase()
                            });
                            var M = k.replace(/(Start|End)$/, "");
                            F(M) && k === M + "Start" && (B = l, P = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
                            k = va(l.toLowerCase());
                            h[k] = l;
                            if (m || !c.hasOwnProperty(k))c[k] = n, Qc(a, k) && (c[k] = !0);
                            R(a, b, n, k, m);
                            C(b, k, "A", d, e, B, P)
                        }
                        a =
                            a.className;
                        I(a) && (a = a.animVal);
                        if (O(a) && "" !== a)for (; l = g.exec(a);)k = va(l[2]), C(b, k, "C", d, e) && (c[k] = U(l[3])), a = a.substr(l.index + l[0].length);
                        break;
                    case ab:
                        ia(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (l = f.exec(a.nodeValue))k = va(l[1]), C(b, k, "M", d, e) && (c[k] = U(l[2]))
                        } catch (t) {
                        }
                }
                b.sort(xa);
                return b
            }

            function S(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw da("uterdir", b, c);
                        a.nodeType == ma && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return z(d)
            }

            function Fa(a, b, c) {
                return function (d, e, f, g, h) {
                    e = S(e[0], b, c);
                    return a(d, e, f, g, h)
                }
            }

            function y(a, d, e, f, g, h, k, n, m) {
                function B(a, b, c, d) {
                    if (a) {
                        c && (a = Fa(a, c, d));
                        a.require = K.require;
                        a.directiveName = ia;
                        if (J === K || K.$$isolateScope)a = X(a, {isolateScope: !0});
                        k.push(a)
                    }
                    if (b) {
                        c && (b = Fa(b, c, d));
                        b.require = K.require;
                        b.directiveName = ia;
                        if (J === K || K.$$isolateScope)b = X(b, {isolateScope: !0});
                        n.push(b)
                    }
                }

                function P(a, b, c, d) {
                    var e, f = "data", g = !1, h = c, k;
                    if (O(b)) {
                        k = b.match(l);
                        b = b.substring(k[0].length);
                        k[3] && (k[1] ? k[3] =
                            null : k[1] = k[3]);
                        "^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData", h = c.parent());
                        "?" === k[2] && (g = !0);
                        e = null;
                        d && "data" === f && (e = d[b]) && (e = e.instance);
                        e = e || h[f]("$" + b + "Controller");
                        if (!e && !g)throw da("ctreq", b, a);
                        return e || null
                    }
                    w(b) && (e = [], q(b, function (b) {
                        e.push(P(a, b, c, d))
                    }));
                    return e
                }

                function M(a, c, f, g, h) {
                    function l(a, b, c) {
                        var d;
                        Va(a) || (c = b, b = a, a = s);
                        A && (d = G);
                        c || (c = A ? S.parent() : S);
                        return h(a, b, d, c, Zb)
                    }

                    var m, v, B, D, G, ib, S, W;
                    d === f ? (W = e, S = e.$$element) : (S = z(f), W = new $b(S, e));
                    J && (D = c.$new(!0));
                    h &&
                    (ib = l, ib.$$boundTransclude = h);
                    H && ($ = {}, G = {}, q(H, function (a) {
                        var b = {$scope: a === J || a.$$isolateScope ? D : c, $element: S, $attrs: W, $transclude: ib};
                        B = a.controller;
                        "@" == B && (B = W[a.name]);
                        b = p(B, b, !0, a.controllerAs);
                        G[a.name] = b;
                        A || S.data("$" + a.name + "Controller", b.instance);
                        $[a.name] = b
                    }));
                    if (J) {
                        N.$$addScopeInfo(S, D, !0, !(Y && (Y === J || Y === J.$$originalDirective)));
                        N.$$addScopeClass(S, !0);
                        g = $ && $[J.name];
                        var ua = D;
                        g && g.identifier && !0 === J.bindToController && (ua = g.instance);
                        q(D.$$isolateBindings = J.$$isolateBindings, function (a,
                                                                               d) {
                            var e = a.attrName, f = a.optional, g, h, k, l;
                            switch (a.mode) {
                                case "@":
                                    W.$observe(e, function (a) {
                                        ua[d] = a
                                    });
                                    W.$$observers[e].$$scope = c;
                                    W[e] && (ua[d] = b(W[e])(c));
                                    break;
                                case "=":
                                    if (f && !W[e])break;
                                    h = t(W[e]);
                                    l = h.literal ? fa : function (a, b) {
                                        return a === b || a !== a && b !== b
                                    };
                                    k = h.assign || function () {
                                            g = ua[d] = h(c);
                                            throw da("nonassign", W[e], J.name);
                                        };
                                    g = ua[d] = h(c);
                                    f = function (a) {
                                        l(a, ua[d]) || (l(a, g) ? k(c, a = ua[d]) : ua[d] = a);
                                        return g = a
                                    };
                                    f.$stateful = !0;
                                    f = a.collection ? c.$watchCollection(W[e], f) : c.$watch(t(W[e], f), null, h.literal);
                                    D.$on("$destroy",
                                        f);
                                    break;
                                case "&":
                                    h = t(W[e]), ua[d] = function (a) {
                                        return h(c, a)
                                    }
                            }
                        })
                    }
                    $ && (q($, function (a) {
                        a()
                    }), $ = null);
                    g = 0;
                    for (m = k.length; g < m; g++)v = k[g], Xc(v, v.isolateScope ? D : c, S, W, v.require && P(v.directiveName, v.require, S, G), ib);
                    var Zb = c;
                    J && (J.template || null === J.templateUrl) && (Zb = D);
                    a && a(Zb, f.childNodes, s, h);
                    for (g = n.length - 1; 0 <= g; g--)v = n[g], Xc(v, v.isolateScope ? D : c, S, W, v.require && P(v.directiveName, v.require, S, G), ib)
                }

                m = m || {};
                for (var D = -Number.MAX_VALUE, G, H = m.controllerDirectives, $, J = m.newIsolateScopeDirective, Y = m.templateDirective,
                         Ga = m.nonTlbTranscludeDirective, C = !1, Yb = !1, A = m.hasElementTranscludeDirective, x = e.$$element = z(d), K, ia, F, gb = f, xa, qa = 0, L = a.length; qa < L; qa++) {
                    K = a[qa];
                    var R = K.$$start, jb = K.$$end;
                    R && (x = S(d, R, jb));
                    F = s;
                    if (D > K.priority)break;
                    if (F = K.scope)K.templateUrl || (I(F) ? (Oa("new/isolated scope", J || G, K, x), J = K) : Oa("new/isolated scope", J, K, x)), G = G || K;
                    ia = K.name;
                    !K.templateUrl && K.controller && (F = K.controller, H = H || {}, Oa("'" + ia + "' controller", H[ia], K, x), H[ia] = K);
                    if (F = K.transclude)C = !0, K.$$tlb || (Oa("transclusion", Ga, K, x), Ga = K),
                        "element" == F ? (A = !0, D = K.priority, F = x, x = e.$$element = z(V.createComment(" " + ia + ": " + e[ia] + " ")), d = x[0], Q(g, Za.call(F, 0), d), gb = N(F, f, D, h && h.name, {nonTlbTranscludeDirective: Ga})) : (F = z(Vb(d)).contents(), x.empty(), gb = N(F, f));
                    if (K.template)if (Yb = !0, Oa("template", Y, K, x), Y = K, F = E(K.template) ? K.template(x, e) : K.template, F = Yc(F), K.replace) {
                        h = K;
                        F = Tb.test(F) ? Zc(T(K.templateNamespace, U(F))) : [];
                        d = F[0];
                        if (1 != F.length || d.nodeType !== ma)throw da("tplrt", ia, "");
                        Q(g, x, d);
                        L = {$attr: {}};
                        F = W(d, [], L);
                        var tf = a.splice(qa + 1, a.length -
                            (qa + 1));
                        J && hb(F);
                        a = a.concat(F).concat(tf);
                        Vc(e, L);
                        L = a.length
                    } else x.html(F);
                    if (K.templateUrl)Yb = !0, Oa("template", Y, K, x), Y = K, K.replace && (h = K), M = Xb(a.splice(qa, a.length - qa), x, e, g, C && gb, k, n, {
                        controllerDirectives: H,
                        newIsolateScopeDirective: J,
                        templateDirective: Y,
                        nonTlbTranscludeDirective: Ga
                    }), L = a.length; else if (K.compile)try {
                        xa = K.compile(x, e, gb), E(xa) ? B(null, xa, R, jb) : xa && B(xa.pre, xa.post, R, jb)
                    } catch (ac) {
                        c(ac, ta(x))
                    }
                    K.terminal && (M.terminal = !0, D = Math.max(D, K.priority))
                }
                M.scope = G && !0 === G.scope;
                M.transcludeOnThisElement =
                    C;
                M.elementTranscludeOnThisElement = A;
                M.templateOnThisElement = Yb;
                M.transclude = gb;
                m.hasElementTranscludeDirective = A;
                return M
            }

            function hb(a) {
                for (var b = 0, c = a.length; b < c; b++)a[b] = Pb(a[b], {$$isolateScope: !0})
            }

            function C(b, d, f, g, h, k, l) {
                if (d === h)return null;
                h = null;
                if (e.hasOwnProperty(d)) {
                    var m;
                    d = a.get(d + "Directive");
                    for (var p = 0, B = d.length; p < B; p++)try {
                        m = d[p], (g === s || g > m.priority) && -1 != m.restrict.indexOf(f) && (k && (m = Pb(m, {
                            $$start: k,
                            $$end: l
                        })), b.push(m), h = m)
                    } catch (u) {
                        c(u)
                    }
                }
                return h
            }

            function F(b) {
                if (e.hasOwnProperty(b))for (var c =
                    a.get(b + "Directive"), d = 0, f = c.length; d < f; d++)if (b = c[d], b.multiElement)return !0;
                return !1
            }

            function Vc(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                q(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                q(b, function (b, f) {
                    "class" == f ? (G(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function Xb(a, b, c, e, f, g,
                        h, k) {
                var l = [], n, m, p = b[0], v = a.shift(), u = Pb(v, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: v
                }), M = E(v.templateUrl) ? v.templateUrl(b, c) : v.templateUrl, D = v.templateNamespace;
                b.empty();
                d(B.getTrustedResourceUrl(M)).then(function (d) {
                    var B, P;
                    d = Yc(d);
                    if (v.replace) {
                        d = Tb.test(d) ? Zc(T(D, U(d))) : [];
                        B = d[0];
                        if (1 != d.length || B.nodeType !== ma)throw da("tplrt", v.name, M);
                        d = {$attr: {}};
                        Q(e, b, B);
                        var t = W(B, [], d);
                        I(v.scope) && hb(t);
                        a = t.concat(a);
                        Vc(c, d)
                    } else B = p, b.html(d);
                    a.unshift(u);
                    n = y(a, B, c, f, b, v, g, h,
                        k);
                    q(e, function (a, c) {
                        a == B && (e[c] = b[0])
                    });
                    for (m = Y(b[0].childNodes, f); l.length;) {
                        d = l.shift();
                        P = l.shift();
                        var H = l.shift(), N = l.shift(), t = b[0];
                        if (!d.$$destroyed) {
                            if (P !== p) {
                                var J = P.className;
                                k.hasElementTranscludeDirective && v.replace || (t = Vb(B));
                                Q(H, z(P), t);
                                G(z(t), J)
                            }
                            P = n.transcludeOnThisElement ? $(d, n.transclude, N) : N;
                            n(m, d, t, e, P)
                        }
                    }
                    l = null
                });
                return function (a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (l ? l.push(b, c, d, a) : (n.transcludeOnThisElement && (a = $(b, n.transclude, e)), n(m, b, c, d, a)))
                }
            }

            function xa(a, b) {
                var c = b.priority -
                    a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Oa(a, b, c, d) {
                if (b)throw da("multidir", b.name, c.name, a, ta(d));
            }

            function ia(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0, compile: function (a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && N.$$addBindingClass(a);
                        return function (a, c) {
                            var e = c.parent();
                            b || N.$$addBindingClass(e);
                            N.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function (a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function T(a, b) {
                a = L(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = V.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function jb(a, b) {
                if ("srcdoc" == b)return B.HTML;
                var c = sa(a);
                if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))return B.RESOURCE_URL
            }

            function R(a, c, d, e, f) {
                var g = jb(a, e);
                f = h[e] || f;
                var l = b(d, !0, g, f);
                if (l) {
                    if ("multiple" === e && "select" === sa(a))throw da("selmulti", ta(a));
                    c.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (a, c, h) {
                                    c = h.$$observers || (h.$$observers = {});
                                    if (k.test(e))throw da("nodomevents");
                                    var n = h[e];
                                    n !== d && (l = n && b(n, !0, g, f), d = n);
                                    l && (h[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(l, function (a, b) {
                                        "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function Q(a, b, c) {
                var d = b[0], e = b.length, f = d.parentNode, g, h;
                if (a)for (g = 0, h = a.length; g < h; g++)if (a[g] == d) {
                    a[g++] = c;
                    h = g + e - 1;
                    for (var l = a.length; g < l; g++, h++)h < l ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1;
                    a.context === d && (a.context = c);
                    break
                }
                f && f.replaceChild(c, d);
                a = V.createDocumentFragment();
                a.appendChild(d);
                z(c).data(z(d).data());
                pa ? (Rb = !0, pa.cleanData([d])) : delete z.cache[d[z.expando]];
                d = 1;
                for (e = b.length; d < e; d++)f = b[d], z(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1
            }

            function X(a, b) {
                return x(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function Xc(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h, ta(d))
                }
            }

            var $b = function (a, b) {
                if (b) {
                    var c = Object.keys(b), d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++)f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            };
            $b.prototype = {
                $normalize: va, $addClass: function (a) {
                    a &&
                    0 < a.length && M.addClass(this.$$element, a)
                }, $removeClass: function (a) {
                    a && 0 < a.length && M.removeClass(this.$$element, a)
                }, $updateClass: function (a, b) {
                    var c = $c(a, b);
                    c && c.length && M.addClass(this.$$element, c);
                    (c = $c(b, a)) && c.length && M.removeClass(this.$$element, c)
                }, $set: function (a, b, d, e) {
                    var f = this.$$element[0], g = Qc(f, a), h = pf(f, a), f = a;
                    g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = yc(a, "-"));
                    g = sa(this.$$element);
                    if ("a" === g && "href" === a || "img" ===
                        g && "src" === a)this[a] = b = D(b, "src" === a); else if ("img" === g && "srcset" === a) {
                        for (var g = "", h = U(b), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(h) ? l : /(,)/, h = h.split(l), l = Math.floor(h.length / 2), k = 0; k < l; k++)var n = 2 * k, g = g + D(U(h[n]), !0), g = g + (" " + U(h[n + 1]));
                        h = U(h[2 * k]).split(/\s/);
                        g += D(U(h[0]), !0);
                        2 === h.length && (g += " " + U(h[1]));
                        this[a] = b = g
                    }
                    !1 !== d && (null === b || b === s ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                    (a = this.$$observers) && q(a[f], function (a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                }, $observe: function (a,
                                       b) {
                    var c = this, d = c.$$observers || (c.$$observers = ga()), e = d[a] || (d[a] = []);
                    e.push(b);
                    H.$evalAsync(function () {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                    });
                    return function () {
                        Xa(e, b)
                    }
                }
            };
            var Ga = b.startSymbol(), qa = b.endSymbol(), Yc = "{{" == Ga || "}}" == qa ? na : function (a) {
                return a.replace(/\{\{/g, Ga).replace(/}}/g, qa)
            }, ac = /^ngAttr[A-Z]/;
            N.$$addBindingInfo = m ? function (a, b) {
                var c = a.data("$binding") || [];
                w(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : A;
            N.$$addBindingClass = m ? function (a) {
                G(a, "ng-binding")
            } : A;
            N.$$addScopeInfo =
                m ? function (a, b, c, d) {
                    a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
                } : A;
            N.$$addScopeClass = m ? function (a, b) {
                G(a, b ? "ng-isolate-scope" : "ng-scope")
            } : A;
            return N
        }]
    }

    function va(b) {
        return eb(b.replace(Wc, ""))
    }

    function $c(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
        a:for (; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
            c += (0 < c.length ? " " : "") + g
        }
        return c
    }

    function Zc(b) {
        b = z(b);
        var a = b.length;
        if (1 >= a)return b;
        for (; a--;)8 === b[a].nodeType && uf.call(b, a, 1);
        return b
    }

    function Ke() {
        var b =
        {}, a = !1, c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (a, c) {
            Ma(a, "controller");
            I(a) ? x(b, a) : b[a] = c
        };
        this.allowGlobals = function () {
            a = !0
        };
        this.$get = ["$injector", "$window", function (d, e) {
            function f(a, b, c, d) {
                if (!a || !I(a.$scope))throw F("$controller")("noscp", d, b);
                a.$scope[b] = c
            }

            return function (g, h, l, k) {
                var m, r, n;
                l = !0 === l;
                k && O(k) && (n = k);
                if (O(g)) {
                    k = g.match(c);
                    if (!k)throw vf("ctrlfmt", g);
                    r = k[1];
                    n = n || k[3];
                    g = b.hasOwnProperty(r) ? b[r] : Ac(h.$scope, r, !0) || (a ? Ac(e, r, !0) : s);
                    La(g, r, !0)
                }
                if (l)return l = (w(g) ? g[g.length -
                1] : g).prototype, m = Object.create(l || null), n && f(h, n, m, r || g.name), x(function () {
                    d.invoke(g, m, h, r);
                    return m
                }, {instance: m, identifier: n});
                m = d.instantiate(g, h, r);
                n && f(h, n, m, r || g.name);
                return m
            }
        }]
    }

    function Le() {
        this.$get = ["$window", function (b) {
            return z(b.document)
        }]
    }

    function Me() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function bc(b, a) {
        if (O(b)) {
            var c = b.replace(wf, "").trim();
            if (c) {
                var d = a("Content-Type");
                (d = d && 0 === d.indexOf(ad)) || (d = (d = c.match(xf)) && yf[d[0]].test(c));
                d && (b = tc(c))
            }
        }
        return b
    }

    function bd(b) {
        var a = ga(), c, d, e;
        if (!b)return a;
        q(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = L(U(b.substr(0, e)));
            d = U(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + ", " + d : d)
        });
        return a
    }

    function cd(b) {
        var a = I(b) ? b : s;
        return function (c) {
            a || (a = bd(b));
            return c ? (c = a[L(c)], void 0 === c && (c = null), c) : a
        }
    }

    function dd(b, a, c, d) {
        if (E(d))return d(b, a, c);
        q(d, function (d) {
            b = d(b, a, c)
        });
        return b
    }

    function Pe() {
        var b = this.defaults = {
            transformResponse: [bc],
            transformRequest: [function (a) {
                return I(a) && "[object File]" !==
                Aa.call(a) && "[object Blob]" !== Aa.call(a) && "[object FormData]" !== Aa.call(a) ? $a(a) : a
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: oa(cc), put: oa(cc), patch: oa(cc)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, a = !1;
        this.useApplyAsync = function (b) {
            return y(b) ? (a = !!b, this) : a
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (d, e, f, g, h, l) {
            function k(a) {
                function c(a) {
                    var b = x({}, a);
                    b.data = a.data ? dd(a.data,
                        a.headers, a.status, e.transformResponse) : a.data;
                    a = a.status;
                    return 200 <= a && 300 > a ? b : h.reject(b)
                }

                function d(a) {
                    var b, c = {};
                    q(a, function (a, d) {
                        E(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a
                    });
                    return c
                }

                if (!ba.isObject(a))throw F("$http")("badreq", a);
                var e = x({
                    method: "get",
                    transformRequest: b.transformRequest,
                    transformResponse: b.transformResponse
                }, a);
                e.headers = function (a) {
                    var c = b.headers, e = x({}, a.headers), f, g, c = x({}, c.common, c[L(a.method)]);
                    a:for (f in c) {
                        a = L(f);
                        for (g in e)if (L(g) === a)continue a;
                        e[f] = c[f]
                    }
                    return d(e)
                }(a);
                e.method = vb(e.method);
                var f = [function (a) {
                    var d = a.headers, e = dd(a.data, cd(d), s, a.transformRequest);
                    C(e) && q(d, function (a, b) {
                        "content-type" === L(b) && delete d[b]
                    });
                    C(a.withCredentials) && !C(b.withCredentials) && (a.withCredentials = b.withCredentials);
                    return m(a, e).then(c, c)
                }, s], g = h.when(e);
                for (q(u, function (a) {
                    (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && f.push(a.response, a.responseError)
                }); f.length;) {
                    a = f.shift();
                    var l = f.shift(), g = g.then(a, l)
                }
                g.success = function (a) {
                    La(a,
                        "fn");
                    g.then(function (b) {
                        a(b.data, b.status, b.headers, e)
                    });
                    return g
                };
                g.error = function (a) {
                    La(a, "fn");
                    g.then(null, function (b) {
                        a(b.data, b.status, b.headers, e)
                    });
                    return g
                };
                return g
            }

            function m(c, f) {
                function l(b, c, d, e) {
                    function f() {
                        m(c, b, d, e)
                    }

                    D && (200 <= b && 300 > b ? D.put(q, [b, c, bd(d), e]) : D.remove(q));
                    a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply())
                }

                function m(a, b, d, e) {
                    b = Math.max(b, 0);
                    (200 <= b && 300 > b ? B.resolve : B.reject)({
                        data: a,
                        status: b,
                        headers: cd(d),
                        config: c,
                        statusText: e
                    })
                }

                function u(a) {
                    m(a.data, a.status, oa(a.headers()),
                        a.statusText)
                }

                function J() {
                    var a = k.pendingRequests.indexOf(c);
                    -1 !== a && k.pendingRequests.splice(a, 1)
                }

                var B = h.defer(), M = B.promise, D, G, N = c.headers, q = r(c.url, c.params);
                k.pendingRequests.push(c);
                M.then(J, J);
                !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (D = I(c.cache) ? c.cache : I(b.cache) ? b.cache : n);
                D && (G = D.get(q), y(G) ? G && E(G.then) ? G.then(u, u) : w(G) ? m(G[1], G[0], oa(G[2]), G[3]) : m(G, 200, {}, "OK") : D.put(q, M));
                C(G) && ((G = ed(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : s) && (N[c.xsrfHeaderName ||
                b.xsrfHeaderName] = G), d(c.method, q, f, l, N, c.timeout, c.withCredentials, c.responseType));
                return M
            }

            function r(a, b) {
                if (!b)return a;
                var c = [];
                Jd(b, function (a, b) {
                    null === a || C(a) || (w(a) || (a = [a]), q(a, function (a) {
                        I(a) && (a = ea(a) ? a.toISOString() : $a(a));
                        c.push(Ca(b) + "=" + Ca(a))
                    }))
                });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a
            }

            var n = f("$http"), u = [];
            q(c, function (a) {
                u.unshift(O(a) ? l.get(a) : l.invoke(a))
            });
            k.pendingRequests = [];
            (function (a) {
                q(arguments, function (a) {
                    k[a] = function (b, c) {
                        return k(x(c ||
                            {}, {method: a, url: b}))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                q(arguments, function (a) {
                    k[a] = function (b, c, d) {
                        return k(x(d || {}, {method: a, url: b, data: c}))
                    }
                })
            })("post", "put", "patch");
            k.defaults = b;
            return k
        }]
    }

    function zf() {
        return new T.XMLHttpRequest
    }

    function Qe() {
        this.$get = ["$browser", "$window", "$document", function (b, a, c) {
            return Af(b, zf, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function Af(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"), m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function (a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error", m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1, u = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {type: "error"}), u = a.type, g = "error" === a.type ? 404 : 200);
                c && c(g, u)
            };
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m
        }

        return function (e, h, l, k, m, r, n, u) {
            function v() {
                p && p();
                H && H.abort()
            }

            function P(a, d, e, f, g) {
                B !== s && c.cancel(B);
                p = H = null;
                a(d, e, f, g);
                b.$$completeOutstandingRequest(A)
            }

            b.$$incOutstandingRequestCount();
            h = h || b.url();
            if ("jsonp" == L(e)) {
                var t = "_" + (d.counter++).toString(36);
                d[t] = function (a) {
                    d[t].data = a;
                    d[t].called = !0
                };
                var p = f(h.replace("JSON_CALLBACK", "angular.callbacks." + t), t, function (a, b) {
                    P(k, a, d[t].data, "", b);
                    d[t] = A
                })
            } else {
                var H = a();
                H.open(e, h, !0);
                q(m, function (a, b) {
                    y(a) && H.setRequestHeader(b, a)
                });
                H.onload = function () {
                    var a = H.statusText || "", b = "response"in H ? H.response : H.responseText, c = 1223 === H.status ? 204 : H.status;
                    0 === c && (c = b ? 200 : "file" == ya(h).protocol ? 404 : 0);
                    P(k, c, b, H.getAllResponseHeaders(), a)
                };
                e =
                    function () {
                        P(k, -1, null, null, "")
                    };
                H.onerror = e;
                H.onabort = e;
                n && (H.withCredentials = !0);
                if (u)try {
                    H.responseType = u
                } catch (J) {
                    if ("json" !== u)throw J;
                }
                H.send(l || null)
            }
            if (0 < r)var B = c(v, r); else r && E(r.then) && r.then(v)
        }
    }

    function Ne() {
        var b = "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(f, g, u, v) {
                function P(c) {
                    return c.replace(k, b).replace(m,
                        a)
                }

                function t(a) {
                    try {
                        var b = a;
                        a = u ? e.getTrusted(u, b) : e.valueOf(b);
                        var c;
                        if (v && !y(a))c = a; else if (null == a)c = ""; else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = $a(a)
                            }
                            c = a
                        }
                        return c
                    } catch (g) {
                        c = dc("interr", f, g.toString()), d(c)
                    }
                }

                v = !!v;
                for (var p, H, q = 0, B = [], M = [], D = f.length, G = [], N = []; q < D;)if (-1 != (p = f.indexOf(b, q)) && -1 != (H = f.indexOf(a, p + h)))q !== p && G.push(P(f.substring(q, p))), q = f.substring(p + h, H), B.push(q), M.push(c(q, t)), q = H + l, N.push(G.length), G.push(""); else {
                    q !== D && G.push(P(f.substring(q)));
                    break
                }
                if (u && 1 < G.length)throw dc("noconcat", f);
                if (!g || B.length) {
                    var Y = function (a) {
                        for (var b = 0, c = B.length; b < c; b++) {
                            if (v && C(a[b]))return;
                            G[N[b]] = a[b]
                        }
                        return G.join("")
                    };
                    return x(function (a) {
                        var b = 0, c = B.length, e = Array(c);
                        try {
                            for (; b < c; b++)e[b] = M[b](a);
                            return Y(e)
                        } catch (g) {
                            a = dc("interr", f, g.toString()), d(a)
                        }
                    }, {
                        exp: f, expressions: B, $$watchDelegate: function (a, b, c) {
                            var d;
                            return a.$watchGroup(M, function (c, e) {
                                var f = Y(c);
                                E(b) && b.call(this, f, c !== e ? d : f, a);
                                d = f
                            }, c)
                        }
                    })
                }
            }

            var h = b.length, l = a.length, k = new RegExp(b.replace(/./g,
                f), "g"), m = new RegExp(a.replace(/./g, f), "g");
            g.startSymbol = function () {
                return b
            };
            g.endSymbol = function () {
                return a
            };
            return g
        }]
    }

    function Oe() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function (b, a, c, d) {
            function e(e, h, l, k) {
                var m = a.setInterval, r = a.clearInterval, n = 0, u = y(k) && !k, v = (u ? d : c).defer(), P = v.promise;
                l = y(l) ? l : 0;
                P.then(null, null, e);
                P.$$intervalId = m(function () {
                    v.notify(n++);
                    0 < l && n >= l && (v.resolve(n), r(P.$$intervalId), delete f[P.$$intervalId]);
                    u || b.$apply()
                }, h);
                f[P.$$intervalId] = v;
                return P
            }

            var f = {};
            e.cancel = function (b) {
                return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1
            };
            return e
        }]
    }

    function Wd() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a",
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"]
                },
                pluralCat: function (b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function ec(b) {
        b = b.split("/");
        for (var a = b.length; a--;)b[a] = sb(b[a]);
        return b.join("/")
    }

    function fd(b, a) {
        var c = ya(b);
        a.$$protocol = c.protocol;
        a.$$host = c.hostname;
        a.$$port = aa(c.port) || Bf[c.protocol] || null
    }

    function gd(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = ya(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
        a.$$search = vc(d.search);
        a.$$hash = decodeURIComponent(d.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function wa(b, a) {
        if (0 ===
            a.indexOf(b))return a.substr(b.length)
    }

    function Ea(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a)
    }

    function Gb(b) {
        return b.replace(/(#.+)|#$/, "$1")
    }

    function fc(b) {
        return b.substr(0, Ea(b).lastIndexOf("/") + 1)
    }

    function gc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = fc(b);
        fd(b, this);
        this.$$parse = function (a) {
            var b = wa(c, a);
            if (!O(b))throw Hb("ipthprfx", a, c);
            gd(b, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = Qb(this.$$search), b = this.$$hash ? "#" + sb(this.$$hash) : "";
            this.$$url =
                ec(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            (f = wa(b, d)) !== s ? (g = f, g = (f = wa(a, f)) !== s ? c + (wa("/", f) || f) : b + g) : (f = wa(c, d)) !== s ? g = c + f : c == d + "/" && (g = c);
            g && this.$$parse(g);
            return !!g
        }
    }

    function hc(b, a) {
        var c = fc(b);
        fd(b, this);
        this.$$parse = function (d) {
            d = wa(b, d) || wa(c, d);
            var e;
            "#" === d.charAt(0) ? (e = wa(a, d), C(e) && (e = d)) : e = this.$$html5 ? d : "";
            gd(e, this);
            d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(b) &&
            (e = e.replace(b, ""));
            f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function () {
            var c = Qb(this.$$search), e = this.$$hash ? "#" + sb(this.$$hash) : "";
            this.$$url = ec(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$parseLinkUrl = function (a, c) {
            return Ea(b) == Ea(a) ? (this.$$parse(a), !0) : !1
        }
    }

    function hd(b, a) {
        this.$$html5 = !0;
        hc.apply(this, arguments);
        var c = fc(b);
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f,
                g;
            b == Ea(d) ? f = d : (g = wa(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function () {
            var c = Qb(this.$$search), e = this.$$hash ? "#" + sb(this.$$hash) : "";
            this.$$url = ec(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + a + this.$$url
        }
    }

    function Ib(b) {
        return function () {
            return this[b]
        }
    }

    function id(b, a) {
        return function (c) {
            if (C(c))return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Re() {
        var b = "", a = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (a) {
            return y(a) ?
                (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return Wa(b) ? (a.enabled = b, this) : I(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
            function h(a, b, c) {
                var e = k.url(), f = k.$$state;
                try {
                    d.url(a, b, c), k.$$state = d.state()
                } catch (g) {
                    throw k.url(e), k.$$state = f, g;
                }
            }

            function l(a, b) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(),
                    a, k.$$state, b)
            }

            var k, m;
            m = d.baseHref();
            var r = d.url(), n;
            if (a.enabled) {
                if (!m && a.requireBase)throw Hb("nobase");
                n = r.substring(0, r.indexOf("/", r.indexOf("//") + 2)) + (m || "/");
                m = e.history ? gc : hd
            } else n = Ea(r), m = hc;
            k = new m(n, "#" + b);
            k.$$parseLinkUrl(r, r);
            k.$$state = d.state();
            var u = /^\s*(javascript|mailto):/i;
            f.on("click", function (b) {
                if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                    for (var e = z(b.target); "a" !== sa(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
                    var h = e.prop("href"),
                        l = e.attr("href") || e.attr("xlink:href");
                    I(h) && "[object SVGAnimatedString]" === h.toString() && (h = ya(h.animVal).href);
                    u.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            Gb(k.absUrl()) != Gb(r) && d.url(k.absUrl(), !0);
            var v = !0;
            d.onUrlChange(function (a, b) {
                c.$evalAsync(function () {
                    var d = k.absUrl(), e = k.$$state, f;
                    k.$$parse(a);
                    k.$$state = b;
                    f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
                    k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (v = !1, l(d, e)))
                });
                c.$$phase || c.$digest()
            });
            c.$watch(function () {
                var a = Gb(d.url()), b = Gb(k.absUrl()), f = d.state(), g = k.$$replace, n = a !== b || k.$$html5 && e.history && f !== k.$$state;
                if (v || n)v = !1, c.$evalAsync(function () {
                    var b = k.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                    k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (n && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)))
                });
                k.$$replace = !1
            });
            return k
        }]
    }

    function Se() {
        var b = !0, a = this;
        this.debugEnabled = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function (c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || A;
                a = !1;
                try {
                    a = !!e.apply
                } catch (l) {
                }
                return a ? function () {
                    var a = [];
                    q(arguments, function (b) {
                        a.push(d(b))
                    });
                    return e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return {
                log: e("log"),
                info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        b && c.apply(a, arguments)
                    }
                }()
            }
        }]
    }

    function ra(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b)throw ja("isecfld", a);
        return b
    }

    function ka(b, a) {
        if (b) {
            if (b.constructor === b)throw ja("isecfn", a);
            if (b.window === b)throw ja("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find))throw ja("isecdom", a);
            if (b === Object)throw ja("isecobj",
                a);
        }
        return b
    }

    function ic(b) {
        return b.constant
    }

    function kb(b, a, c, d, e) {
        ka(b, e);
        ka(a, e);
        c = c.split(".");
        for (var f, g = 0; 1 < c.length; g++) {
            f = ra(c.shift(), e);
            var h = 0 === g && a && a[f] || b[f];
            h || (h = {}, b[f] = h);
            b = ka(h, e)
        }
        f = ra(c.shift(), e);
        ka(b[f], e);
        return b[f] = d
    }

    function Pa(b) {
        return "constructor" == b
    }

    function jd(b, a, c, d, e, f, g) {
        ra(b, f);
        ra(a, f);
        ra(c, f);
        ra(d, f);
        ra(e, f);
        var h = function (a) {
            return ka(a, f)
        }, l = g || Pa(b) ? h : na, k = g || Pa(a) ? h : na, m = g || Pa(c) ? h : na, r = g || Pa(d) ? h : na, n = g || Pa(e) ? h : na;
        return function (f, g) {
            var h = g && g.hasOwnProperty(b) ?
                g : f;
            if (null == h)return h;
            h = l(h[b]);
            if (!a)return h;
            if (null == h)return s;
            h = k(h[a]);
            if (!c)return h;
            if (null == h)return s;
            h = m(h[c]);
            if (!d)return h;
            if (null == h)return s;
            h = r(h[d]);
            return e ? null == h ? s : h = n(h[e]) : h
        }
    }

    function Cf(b, a) {
        return function (c, d) {
            return b(c, d, ka, a)
        }
    }

    function Df(b, a, c) {
        var d = a.expensiveChecks, e = d ? Ef : Ff, f = e[b];
        if (f)return f;
        var g = b.split("."), h = g.length;
        if (a.csp)f = 6 > h ? jd(g[0], g[1], g[2], g[3], g[4], c, d) : function (a, b) {
            var e = 0, f;
            do f = jd(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = s, a = f; while (e <
            h);
            return f
        }; else {
            var l = "";
            d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var k = d;
            q(g, function (a, b) {
                ra(a, c);
                var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                if (d || Pa(a))e = "eso(" + e + ", fe)", k = !0;
                l += "if(s == null) return undefined;\ns=" + e + ";\n"
            });
            l += "return s;";
            a = new Function("s", "l", "eso", "fe", l);
            a.toString = ca(l);
            k && (a = Cf(a, c));
            f = a
        }
        f.sharedGetter = !0;
        f.assign = function (a, c, d) {
            return kb(a, d, b, c, b)
        };
        return e[b] = f
    }

    function jc(b) {
        return E(b.valueOf) ? b.valueOf() : Gf.call(b)
    }

    function Te() {
        var b = ga(),
            a = ga();
        this.$get = ["$filter", "$sniffer", function (c, d) {
            function e(a) {
                var b = a;
                a.sharedGetter && (b = function (b, c) {
                    return a(b, c)
                }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
                return b
            }

            function f(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                }
                return b
            }

            function g(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = jc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function h(a, b, c, d) {
                var e = d.$$inputs || (d.$$inputs = f(d.inputs,
                        [])), h;
                if (1 === e.length) {
                    var l = g, e = e[0];
                    return a.$watch(function (a) {
                        var b = e(a);
                        g(b, l) || (h = d(a), l = b && jc(b));
                        return h
                    }, b, c)
                }
                for (var k = [], n = 0, m = e.length; n < m; n++)k[n] = g;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, f = e.length; c < f; c++) {
                        var l = e[c](a);
                        if (b || (b = !g(l, k[c])))k[c] = l && jc(l)
                    }
                    b && (h = d(a));
                    return h
                }, b, c)
            }

            function l(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a;
                    E(b) && b.apply(this, arguments);
                    y(a) && d.$$postDigest(function () {
                        y(f) && e()
                    })
                }, c)
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b =
                        !0;
                    q(a, function (a) {
                        y(a) || (b = !1)
                    });
                    return b
                }

                var f, g;
                return f = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    g = a;
                    E(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function () {
                        e(g) && f()
                    })
                }, c)
            }

            function m(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    E(b) && b.apply(this, arguments);
                    e()
                }, c)
            }

            function r(a, b) {
                if (!b)return a;
                var c = a.$$watchDelegate, c = c !== k && c !== l ? function (c, d) {
                    var e = a(c, d);
                    return b(e, c, d)
                } : function (c, d) {
                    var e = a(c, d), f = b(e, c, d);
                    return y(e) ? f : e
                };
                a.$$watchDelegate && a.$$watchDelegate !==
                h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
                return c
            }

            var n = {csp: d.csp, expensiveChecks: !1}, u = {csp: d.csp, expensiveChecks: !0};
            return function (d, f, g) {
                var p, q, s;
                switch (typeof d) {
                    case "string":
                        s = d = d.trim();
                        var B = g ? a : b;
                        p = B[s];
                        p || (":" === d.charAt(0) && ":" === d.charAt(1) && (q = !0, d = d.substring(2)), g = g ? u : n, p = new kc(g), p = (new lb(p, c, g)).parse(d), p.constant ? p.$$watchDelegate = m : q ? (p = e(p), p.$$watchDelegate = p.literal ? k : l) : p.inputs && (p.$$watchDelegate = h), B[s] = p);
                        return r(p, f);
                    case "function":
                        return r(d, f);
                    default:
                        return r(A, f)
                }
            }
        }]
    }

    function Ve() {
        this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
            return kd(function (a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function We() {
        this.$get = ["$browser", "$exceptionHandler", function (b, a) {
            return kd(function (a) {
                b.defer(a)
            }, a)
        }]
    }

    function kd(b, a) {
        function c(a, b, c) {
            function d(b) {
                return function (c) {
                    e || (e = !0, b.call(a, c))
                }
            }

            var e = !1;
            return [d(b), d(c)]
        }

        function d() {
            this.$$state = {status: 0}
        }

        function e(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function f(c) {
            !c.processScheduled &&
            c.pending && (c.processScheduled = !0, b(function () {
                var b, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = s;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    b = e[f][c.status];
                    try {
                        E(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), a(h)
                    }
                }
            }))
        }

        function g() {
            this.promise = new d;
            this.resolve = e(this, this.resolve);
            this.reject = e(this, this.reject);
            this.notify = e(this, this.notify)
        }

        var h = F("$q", TypeError);
        d.prototype = {
            then: function (a, b, c) {
                var d = new g;
                this.$$state.pending = this.$$state.pending ||
                    [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && f(this.$$state);
                return d.promise
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a, b) {
                return this.then(function (b) {
                    return k(b, !0, a)
                }, function (b) {
                    return k(b, !1, a)
                }, b)
            }
        };
        g.prototype = {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
            }, $$resolve: function (b) {
                var d, e;
                e = c(this, this.$$resolve, this.$$reject);
                try {
                    if (I(b) || E(b))d = b && b.then;
                    E(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state))
                } catch (g) {
                    e[1](g), a(g)
                }
            }, reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            }, $$reject: function (a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                f(this.promise.$$state)
            }, notify: function (c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && b(function () {
                    for (var b, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        b = d[f][3];
                        try {
                            e.notify(E(b) ?
                                b(c) : c)
                        } catch (h) {
                            a(h)
                        }
                    }
                })
            }
        };
        var l = function (a, b) {
            var c = new g;
            b ? c.resolve(a) : c.reject(a);
            return c.promise
        }, k = function (a, b, c) {
            var d = null;
            try {
                E(c) && (d = c())
            } catch (e) {
                return l(e, !1)
            }
            return d && E(d.then) ? d.then(function () {
                return l(a, b)
            }, function (a) {
                return l(a, !1)
            }) : l(a, b)
        }, m = function (a, b, c, d) {
            var e = new g;
            e.resolve(a);
            return e.promise.then(b, c, d)
        }, r = function u(a) {
            if (!E(a))throw h("norslvr", a);
            if (!(this instanceof u))return new u(a);
            var b = new g;
            a(function (a) {
                b.resolve(a)
            }, function (a) {
                b.reject(a)
            });
            return b.promise
        };
        r.defer = function () {
            return new g
        };
        r.reject = function (a) {
            var b = new g;
            b.reject(a);
            return b.promise
        };
        r.when = m;
        r.all = function (a) {
            var b = new g, c = 0, d = w(a) ? [] : {};
            q(a, function (a, e) {
                c++;
                m(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return r
    }

    function ef() {
        this.$get = ["$window", "$timeout", function (b, a) {
            function c() {
                for (var a = 0; a < m.length; a++) {
                    var b = m[a];
                    b && (m[a] = null, b())
                }
                k = m.length = 0
            }

            function d(a) {
                var b =
                    m.length;
                k++;
                m.push(a);
                0 === b && (l = h(c));
                return function () {
                    0 <= b && (b = m[b] = null, 0 === --k && l && (l(), l = null, m.length = 0))
                }
            }

            var e = b.requestAnimationFrame || b.webkitRequestAnimationFrame, f = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, g = !!e, h = g ? function (a) {
                var b = e(a);
                return function () {
                    f(b)
                }
            } : function (b) {
                var c = a(b, 16.66, !1);
                return function () {
                    a.cancel(c)
                }
            };
            d.supported = g;
            var l, k = 0, m = [];
            return d
        }]
    }

    function Ue() {
        function b(a) {
            function b() {
                this.$$watchers = this.$$nextSibling =
                    this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$id = ++rb;
                this.$$ChildScope = null
            }

            b.prototype = a;
            return b
        }

        var a = 10, c = F("$rootScope"), d = null, e = null;
        this.digestTtl = function (b) {
            arguments.length && (a = b);
            return a
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (f, g, h, l) {
            function k(a) {
                a.currentScope.$$destroyed = !0
            }

            function m() {
                this.$id = ++rb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail =
                    null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = null
            }

            function r(a) {
                if (t.$$phase)throw c("inprog", t.$$phase);
                t.$$phase = a
            }

            function n(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function u() {
            }

            function v() {
                for (; J.length;)try {
                    J.shift()()
                } catch (a) {
                    g(a)
                }
                e = null
            }

            function s() {
                null === e && (e = l.defer(function () {
                    t.$apply(v)
                }))
            }

            m.prototype = {
                constructor: m, $new: function (a, c) {
                    var d;
                    c = c || this;
                    a ?
                        (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), d = new this.$$ChildScope);
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                    (a || c != this) && d.$on("$destroy", k);
                    return d
                }, $watch: function (a, b, c) {
                    var e = h(a);
                    if (e.$$watchDelegate)return e.$$watchDelegate(this, b, c, e);
                    var f = this.$$watchers, g = {fn: b, last: u, get: e, exp: a, eq: !!c};
                    d = null;
                    E(b) || (g.fn = A);
                    f || (f = this.$$watchers = []);
                    f.unshift(g);
                    return function () {
                        Xa(f,
                            g);
                        d = null
                    }
                }, $watchGroup: function (a, b) {
                    function c() {
                        h = !1;
                        l ? (l = !1, b(e, e, g)) : b(e, d, g)
                    }

                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, l = !0;
                    if (!a.length) {
                        var k = !0;
                        g.$evalAsync(function () {
                            k && b(e, e, g)
                        });
                        return function () {
                            k = !1
                        }
                    }
                    if (1 === a.length)return this.$watch(a[0], function (a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f)
                    });
                    q(a, function (a, b) {
                        var l = g.$watch(a, function (a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c))
                        });
                        f.push(l)
                    });
                    return function () {
                        for (; f.length;)f.shift()()
                    }
                }, $watchCollection: function (a, b) {
                    function c(a) {
                        e =
                            a;
                        var b, d, g, h;
                        if (!C(e)) {
                            if (I(e))if (Sa(e))for (f !== n && (f = n, u = f.length = 0, k++), a = e.length, u !== a && (k++, f.length = u = a), b = 0; b < a; b++)h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (k++, f[b] = g); else {
                                f !== r && (f = r = {}, u = 0, k++);
                                a = 0;
                                for (b in e)e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (k++, f[b] = g)) : (u++, f[b] = g, k++));
                                if (u > a)for (b in k++, f)e.hasOwnProperty(b) || (u--, delete f[b])
                            } else f !== e && (f = e, k++);
                            return k
                        }
                    }

                    c.$stateful = !0;
                    var d = this, e, f, g, l = 1 < b.length, k = 0, m = h(a, c), n = [], r = {}, p = !0, u = 0;
                    return this.$watch(m,
                        function () {
                            p ? (p = !1, b(e, e, d)) : b(e, g, d);
                            if (l)if (I(e))if (Sa(e)) {
                                g = Array(e.length);
                                for (var a = 0; a < e.length; a++)g[a] = e[a]
                            } else for (a in g = {}, e)wc.call(e, a) && (g[a] = e[a]); else g = e
                        })
                }, $digest: function () {
                    var b, f, h, k, m, n, q = a, s, S = [], P, J;
                    r("$digest");
                    l.$$checkUrlChange();
                    this === t && null !== e && (l.defer.cancel(e), v());
                    d = null;
                    do {
                        n = !1;
                        for (s = this; p.length;) {
                            try {
                                J = p.shift(), J.scope.$eval(J.expression, J.locals)
                            } catch (y) {
                                g(y)
                            }
                            d = null
                        }
                        a:do {
                            if (k = s.$$watchers)for (m = k.length; m--;)try {
                                if (b = k[m])if ((f = b.get(s)) !== (h = b.last) && !(b.eq ? fa(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h)))n = !0, d = b, b.last = b.eq ? Ba(f, null) : f, b.fn(f, h === u ? f : h, s), 5 > q && (P = 4 - q, S[P] || (S[P] = []), S[P].push({
                                    msg: E(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp,
                                    newVal: f,
                                    oldVal: h
                                })); else if (b === d) {
                                    n = !1;
                                    break a
                                }
                            } catch (F) {
                                g(F)
                            }
                            if (!(k = s.$$childHead || s !== this && s.$$nextSibling))for (; s !== this && !(k = s.$$nextSibling);)s = s.$parent
                        } while (s = k);
                        if ((n || p.length) && !q--)throw t.$$phase = null, c("infdig", a, S);
                    } while (n || p.length);
                    for (t.$$phase = null; H.length;)try {
                        H.shift()()
                    } catch (x) {
                        g(x)
                    }
                },
                $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        if (this !== t) {
                            for (var b in this.$$listenerCount)n(this, this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                            a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync =
                                this.$applyAsync = A;
                            this.$on = this.$watch = this.$watchGroup = function () {
                                return A
                            };
                            this.$$listeners = {};
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                }, $eval: function (a, b) {
                    return h(a)(this, b)
                }, $evalAsync: function (a, b) {
                    t.$$phase || p.length || l.defer(function () {
                        p.length && t.$digest()
                    });
                    p.push({scope: this, expression: a, locals: b})
                }, $$postDigest: function (a) {
                    H.push(a)
                }, $apply: function (a) {
                    try {
                        return r("$apply"), this.$eval(a)
                    } catch (b) {
                        g(b)
                    } finally {
                        t.$$phase =
                            null;
                        try {
                            t.$digest()
                        } catch (c) {
                            throw g(c), c;
                        }
                    }
                }, $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }

                    var c = this;
                    a && J.push(b);
                    s()
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, n(e, 1, a))
                    }
                }, $emit: function (a, b) {
                    var c = [], d, e = this, f = !1, h = {
                        name: a, targetScope: e, stopPropagation: function () {
                            f = !0
                        }, preventDefault: function () {
                            h.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, l = Ya([h], arguments, 1), k, m;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope = e;
                        k = 0;
                        for (m = d.length; k < m; k++)if (d[k])try {
                            d[k].apply(null, l)
                        } catch (n) {
                            g(n)
                        } else d.splice(k, 1), k--, m--;
                        if (f)return h.currentScope = null, h;
                        e = e.$parent
                    } while (e);
                    h.currentScope = null;
                    return h
                }, $broadcast: function (a, b) {
                    var c = this, d = this, e = {
                        name: a, targetScope: this, preventDefault: function () {
                            e.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a])return e;
                    for (var f = Ya([e], arguments, 1), h, l; c = d;) {
                        e.currentScope =
                            c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (l = d.length; h < l; h++)if (d[h])try {
                            d[h].apply(null, f)
                        } catch (k) {
                            g(k)
                        } else d.splice(h, 1), h--, l--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
                    }
                    e.currentScope = null;
                    return e
                }
            };
            var t = new m, p = t.$$asyncQueue = [], H = t.$$postDigestQueue = [], J = t.$$applyAsyncQueue = [];
            return t
        }]
    }

    function Xd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist =
            function (a) {
                return y(a) ? (b = a, this) : b
            };
        this.imgSrcSanitizationWhitelist = function (b) {
            return y(b) ? (a = b, this) : a
        };
        this.$get = function () {
            return function (c, d) {
                var e = d ? a : b, f;
                f = ya(c).href;
                return "" === f || f.match(e) ? c : "unsafe:" + f
            }
        }
    }

    function Hf(b) {
        if ("self" === b)return b;
        if (O(b)) {
            if (-1 < b.indexOf("***"))throw za("iwcard", b);
            b = ld(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + b + "$")
        }
        if (Ua(b))return new RegExp("^" + b.source + "$");
        throw za("imatcher");
    }

    function md(b) {
        var a = [];
        y(b) && q(b, function (b) {
            a.push(Hf(b))
        });
        return a
    }

    function Ye() {
        this.SCE_CONTEXTS = la;
        var b = ["self"], a = [];
        this.resourceUrlWhitelist = function (a) {
            arguments.length && (b = md(a));
            return b
        };
        this.resourceUrlBlacklist = function (b) {
            arguments.length && (a = md(b));
            return a
        };
        this.$get = ["$injector", function (c) {
            function d(a, b) {
                return "self" === a ? ed(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }

            var f = function (a) {
                throw za("unsafe");
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(), h = {};
            h[la.HTML] = e(g);
            h[la.CSS] = e(g);
            h[la.URL] = e(g);
            h[la.JS] = e(g);
            h[la.RESOURCE_URL] = e(h[la.URL]);
            return {
                trustAs: function (a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c)throw za("icontext", a, b);
                    if (null === b || b === s || "" === b)return b;
                    if ("string" !== typeof b)throw za("itype", a);
                    return new c(b)
                }, getTrusted: function (c, e) {
                    if (null === e || e === s || "" === e)return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof
                        g)return e.$$unwrapTrustedValue();
                    if (c === la.RESOURCE_URL) {
                        var g = ya(e.toString()), r, n, u = !1;
                        r = 0;
                        for (n = b.length; r < n; r++)if (d(b[r], g)) {
                            u = !0;
                            break
                        }
                        if (u)for (r = 0, n = a.length; r < n; r++)if (d(a[r], g)) {
                            u = !1;
                            break
                        }
                        if (u)return e;
                        throw za("insecurl", e.toString());
                    }
                    if (c === la.HTML)return f(e);
                    throw za("unsafe");
                }, valueOf: function (a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function Xe() {
        var b = !0;
        this.enabled = function (a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sceDelegate", function (a, c) {
            if (b &&
                8 > Qa)throw za("iequirks");
            var d = oa(la);
            d.isEnabled = function () {
                return b
            };
            d.trustAs = c.trustAs;
            d.getTrusted = c.getTrusted;
            d.valueOf = c.valueOf;
            b || (d.trustAs = d.getTrusted = function (a, b) {
                return b
            }, d.valueOf = na);
            d.parseAs = function (b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function (a) {
                    return d.getTrusted(b, a)
                })
            };
            var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
            q(la, function (a, b) {
                var c = L(b);
                d[eb("parse_as_" + c)] = function (b) {
                    return e(a, b)
                };
                d[eb("get_trusted_" + c)] = function (b) {
                    return f(a, b)
                };
                d[eb("trust_as_" +
                    c)] = function (b) {
                    return g(a, b)
                }
            });
            return d
        }]
    }

    function Ze() {
        this.$get = ["$window", "$document", function (b, a) {
            var c = {}, d = aa((/android (\d+)/.exec(L((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, l = f.body && f.body.style, k = !1, m = !1;
            if (l) {
                for (var r in l)if (k = h.exec(r)) {
                    g = k[0];
                    g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break
                }
                g || (g = "WebkitOpacity"in l && "webkit");
                k = !!("transition"in l || g + "Transition"in l);
                m = !!("animation"in l || g + "Animation"in
                l);
                !d || k && m || (k = O(f.body.style.webkitTransition), m = O(f.body.style.webkitAnimation))
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e), hasEvent: function (a) {
                    if ("input" === a && 11 >= Qa)return !1;
                    if (C(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b
                    }
                    return c[a]
                }, csp: cb(), vendorPrefix: g, transitions: k, animations: m, android: d
            }
        }]
    }

    function af() {
        this.$get = ["$templateCache", "$http", "$q", function (b, a, c) {
            function d(e, f) {
                d.totalPendingRequests++;
                var g = a.defaults && a.defaults.transformResponse;
                w(g) ? g = g.filter(function (a) {
                    return a !==
                        bc
                }) : g === bc && (g = null);
                return a.get(e, {cache: b, transformResponse: g})["finally"](function () {
                    d.totalPendingRequests--
                }).then(function (a) {
                    return a.data
                }, function (a) {
                    if (!f)throw da("tpload", e);
                    return c.reject(a)
                })
            }

            d.totalPendingRequests = 0;
            return d
        }]
    }

    function bf() {
        this.$get = ["$rootScope", "$browser", "$location", function (b, a, c) {
            return {
                findBindings: function (a, b, c) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    q(a, function (a) {
                        var d = ba.element(a).data("$binding");
                        d && q(d, function (d) {
                            c ? (new RegExp("(^|\\s)" +
                                ld(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                }, findModels: function (a, b, c) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                        if (l.length)return l
                    }
                }, getLocation: function () {
                    return c.url()
                }, setLocation: function (a) {
                    a !== c.url() && (c.url(a), b.$digest())
                }, whenStable: function (b) {
                    a.notifyWhenNoOutstandingRequests(b)
                }
            }
        }]
    }

    function cf() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler",
            function (b, a, c, d, e) {
                function f(f, l, k) {
                    var m = y(k) && !k, r = (m ? d : c).defer(), n = r.promise;
                    l = a.defer(function () {
                        try {
                            r.resolve(f())
                        } catch (a) {
                            r.reject(a), e(a)
                        } finally {
                            delete g[n.$$timeoutId]
                        }
                        m || b.$apply()
                    }, l);
                    n.$$timeoutId = l;
                    g[l] = r;
                    return n
                }

                var g = {};
                f.cancel = function (b) {
                    return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
                };
                return f
            }]
    }

    function ya(b) {
        Qa && (X.setAttribute("href", b), b = X.href);
        X.setAttribute("href", b);
        return {
            href: X.href,
            protocol: X.protocol ?
                X.protocol.replace(/:$/, "") : "",
            host: X.host,
            search: X.search ? X.search.replace(/^\?/, "") : "",
            hash: X.hash ? X.hash.replace(/^#/, "") : "",
            hostname: X.hostname,
            port: X.port,
            pathname: "/" === X.pathname.charAt(0) ? X.pathname : "/" + X.pathname
        }
    }

    function ed(b) {
        b = O(b) ? ya(b) : b;
        return b.protocol === nd.protocol && b.host === nd.host
    }

    function df() {
        this.$get = ca(T)
    }

    function Ic(b) {
        function a(c, d) {
            if (I(c)) {
                var e = {};
                q(c, function (b, c) {
                    e[c] = a(c, b)
                });
                return e
            }
            return b.factory(c + "Filter", d)
        }

        this.register = a;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b +
                    "Filter")
            }
        }];
        a("currency", od);
        a("date", pd);
        a("filter", If);
        a("json", Jf);
        a("limitTo", Kf);
        a("lowercase", Lf);
        a("number", qd);
        a("orderBy", rd);
        a("uppercase", Mf)
    }

    function If() {
        return function (b, a, c) {
            if (!w(b))return b;
            var d;
            switch (null !== a ? typeof a : "null") {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    d = !0;
                case "object":
                    a = Nf(a, c, d);
                    break;
                default:
                    return b
            }
            return b.filter(a)
        }
    }

    function Nf(b, a, c) {
        var d = I(b) && "$"in b;
        !0 === a ? a = fa : E(a) || (a = function (a, b) {
            if (C(a))return !1;
            if (null === a ||
                null === b)return a === b;
            if (I(a) || I(b))return !1;
            a = L("" + a);
            b = L("" + b);
            return -1 !== a.indexOf(b)
        });
        return function (e) {
            return d && !I(e) ? Ha(e, b.$, a, !1) : Ha(e, b, a, c)
        }
    }

    function Ha(b, a, c, d, e) {
        var f = null !== b ? typeof b : "null", g = null !== a ? typeof a : "null";
        if ("string" === g && "!" === a.charAt(0))return !Ha(b, a.substring(1), c, d);
        if (w(b))return b.some(function (b) {
            return Ha(b, a, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in b)if ("$" !== h.charAt(0) && Ha(b[h], a, c, !0))return !0;
                    return e ? !1 : Ha(b, a, c, !1)
                }
                if ("object" === g) {
                    for (h in a)if (e =
                            a[h], !E(e) && !C(e) && (f = "$" === h, !Ha(f ? b : b[h], e, c, f, f)))return !1;
                    return !0
                }
                return c(b, a);
            case "function":
                return !1;
            default:
                return c(b, a)
        }
    }

    function od(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d, e) {
            C(d) && (d = a.CURRENCY_SYM);
            C(e) && (e = a.PATTERNS[1].maxFrac);
            return null == b ? b : sd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
        }
    }

    function qd(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            return null == b ? b : sd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function sd(b, a, c, d, e) {
        if (!isFinite(b) ||
            I(b))return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "", h = "", l = [], k = !1;
        if (-1 !== g.indexOf("e")) {
            var m = g.match(/([\d\.]+)e(-?)(\d+)/);
            m && "-" == m[2] && m[3] > e + 1 ? b = 0 : (h = g, k = !0)
        }
        if (k)0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h)); else {
            g = (g.split(td)[1] || "").length;
            C(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + b).split(td), k = g[0], g = g[1] || "", r = 0, n = a.lgSize, u = a.gSize;
            if (k.length >= n + u)for (r = k.length - n, m = 0; m < r; m++)0 === (r - m) % u && 0 !== m && (h += c), h += k.charAt(m);
            for (m = r; m < k.length; m++)0 === (k.length - m) % n && 0 !== m && (h += c), h += k.charAt(m);
            for (; g.length < e;)g += "0";
            e && "0" !== e && (h += d + g.substr(0, e))
        }
        0 === b && (f = !1);
        l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
        return l.join("")
    }

    function Jb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;)b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function Z(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e = e["get" + b]();
            if (0 < c || e > -c)e += c;
            0 === e && -12 == c && (e = 12);
            return Jb(e, a, d)
        }
    }

    function Kb(b, a) {
        return function (c, d) {
            var e = c["get" + b](),
                f = vb(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function ud(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a)
    }

    function vd(b) {
        return function (a) {
            var c = ud(a.getFullYear());
            a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
            a = 1 + Math.round(a / 6048E5);
            return Jb(a, b)
        }
    }

    function lc(b, a) {
        return 0 >= b.getFullYear() ? a.ERAS[0] : a.ERAS[1]
    }

    function pd(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = aa(b[9] + b[10]), g = aa(b[9] + b[11]));
                h.call(a, aa(b[1]), aa(b[2]) - 1, aa(b[3]));
                f = aa(b[4] || 0) - f;
                g = aa(b[5] || 0) - g;
                h = aa(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                l.call(a, f, g, h, b)
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e, f) {
            var g = "", h = [], l, k;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            O(c) && (c = Of.test(c) ? aa(c) : a(c));
            Q(c) && (c = new Date(c));
            if (!ea(c))return c;
            for (; e;)(k = Pf.exec(e)) ? (h = Ya(h, k, 1),
                e = h.pop()) : (h.push(e), e = null);
            f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
            q(h, function (a) {
                l = Qf[a];
                g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function Jf() {
        return function (b, a) {
            C(a) && (a = 2);
            return $a(b, a)
        }
    }

    function Kf() {
        return function (b, a) {
            Q(b) && (b = b.toString());
            return w(b) || O(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) : aa(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : O(b) ? "" : [] : b
        }
    }

    function rd(b) {
        return function (a, c, d) {
            function e(a,
                       b) {
                return b ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function f(a) {
                switch (typeof a) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function g(a) {
                return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : ""
            }

            function h(a, b) {
                var c = typeof a, d = typeof b;
                c === d && "object" === c && (a = g(a), b = g(b));
                return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }

            if (!Sa(a))return a;
            c = w(c) ? c : [c];
            0 ===
            c.length && (c = ["+"]);
            c = c.map(function (a) {
                var c = !1, d = a || na;
                if (O(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0))c = "-" == a.charAt(0), a = a.substring(1);
                    if ("" === a)return e(h, c);
                    d = b(a);
                    if (d.constant) {
                        var f = d();
                        return e(function (a, b) {
                            return h(a[f], b[f])
                        }, c)
                    }
                }
                return e(function (a, b) {
                    return h(d(a), d(b))
                }, c)
            });
            return Za.call(a).sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)return e
                }
                return 0
            }, d))
        }
    }

    function Ia(b) {
        E(b) && (b = {link: b});
        b.restrict = b.restrict || "AC";
        return ca(b)
    }

    function wd(b, a, c,
                d, e) {
        var f = this, g = [], h = f.$$parentForm = b.parent().controller("form") || Lb;
        f.$error = {};
        f.$$success = {};
        f.$pending = s;
        f.$name = e(a.name || a.ngForm || "")(c);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        h.$addControl(f);
        f.$rollbackViewValue = function () {
            q(g, function (a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function () {
            q(g, function (a) {
                a.$commitViewValue()
            })
        };
        f.$addControl = function (a) {
            Ma(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$$renameControl = function (a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            q(f.$pending, function (b, c) {
                f.$setValidity(c, null, a)
            });
            q(f.$error, function (b, c) {
                f.$setValidity(c, null, a)
            });
            q(f.$$success, function (b, c) {
                f.$setValidity(c, null, a)
            });
            Xa(g, a)
        };
        xd({
            ctrl: this, $element: b, set: function (a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            }, unset: function (a, b, c) {
                var d = a[b];
                d && (Xa(d, c), 0 === d.length && delete a[b])
            }, parentForm: h, $animate: d
        });
        f.$setDirty = function () {
            d.removeClass(b,
                Ra);
            d.addClass(b, Mb);
            f.$dirty = !0;
            f.$pristine = !1;
            h.$setDirty()
        };
        f.$setPristine = function () {
            d.setClass(b, Ra, Mb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            q(g, function (a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function () {
            q(g, function (a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function () {
            d.addClass(b, "ng-submitted");
            f.$submitted = !0;
            h.$setSubmitted()
        }
    }

    function mc(b) {
        b.$formatters.push(function (a) {
            return b.$isEmpty(a) ? a : a.toString()
        })
    }

    function mb(b, a, c, d, e, f) {
        var g = L(a[0].type);
        if (!e.android) {
            var h =
                !1;
            a.on("compositionstart", function (a) {
                h = !0
            });
            a.on("compositionend", function () {
                h = !1;
                l()
            })
        }
        var l = function (b) {
            k && (f.defer.cancel(k), k = null);
            if (!h) {
                var e = a.val();
                b = b && b.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = U(e));
                (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b)
            }
        };
        if (e.hasEvent("input"))a.on("input", l); else {
            var k, m = function (a, b, c) {
                k || (k = f.defer(function () {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            a.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >=
                b || m(a, this, this.value)
            });
            if (e.hasEvent("paste"))a.on("paste cut", m)
        }
        a.on("change", l);
        d.$render = function () {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }

    function Nb(b, a) {
        return function (c, d) {
            var e, f;
            if (ea(c))return c;
            if (O(c)) {
                '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
                if (Rf.test(c))return new Date(c);
                b.lastIndex = 0;
                if (e = b.exec(c))return e.shift(), f = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() /
                    1E3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, q(e, function (b, c) {
                    c < a.length && (f[a[c]] = +b)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function nb(b, a, c, d) {
        return function (e, f, g, h, l, k, m) {
            function r(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function n(a) {
                return y(a) ? ea(a) ? a : c(a) : s
            }

            yd(e, f, g, h);
            mb(e, f, g, h, l, k);
            var u = h && h.$options && h.$options.timezone, v;
            h.$$parserName = b;
            h.$parsers.push(function (b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, v), "UTC" === u && b.setMinutes(b.getMinutes() -
                    b.getTimezoneOffset()), b) : s
            });
            h.$formatters.push(function (a) {
                if (a && !ea(a))throw Ob("datefmt", a);
                if (r(a)) {
                    if ((v = a) && "UTC" === u) {
                        var b = 6E4 * v.getTimezoneOffset();
                        v = new Date(v.getTime() + b)
                    }
                    return m("date")(a, d, u)
                }
                v = null;
                return ""
            });
            if (y(g.min) || g.ngMin) {
                var q;
                h.$validators.min = function (a) {
                    return !r(a) || C(q) || c(a) >= q
                };
                g.$observe("min", function (a) {
                    q = n(a);
                    h.$validate()
                })
            }
            if (y(g.max) || g.ngMax) {
                var t;
                h.$validators.max = function (a) {
                    return !r(a) || C(t) || c(a) <= t
                };
                g.$observe("max", function (a) {
                    t = n(a);
                    h.$validate()
                })
            }
        }
    }

    function yd(b, a, c, d) {
        (d.$$hasNativeValidators = I(a[0].validity)) && d.$parsers.push(function (b) {
            var c = a.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? s : b
        })
    }

    function zd(b, a, c, d, e) {
        if (y(d)) {
            b = b(d);
            if (!b.constant)throw F("ngModel")("constexpr", c, d);
            return b(a)
        }
        return e
    }

    function nc(b, a) {
        b = "ngClass" + b;
        return ["$animate", function (c) {
            function d(a, b) {
                var c = [], d = 0;
                a:for (; d < a.length; d++) {
                    for (var e = a[d], m = 0; m < b.length; m++)if (e == b[m])continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                if (!w(a)) {
                    if (O(a))return a.split(" ");
                    if (I(a)) {
                        var b = [];
                        q(a, function (a, c) {
                            a && (b = b.concat(c.split(" ")))
                        });
                        return b
                    }
                }
                return a
            }

            return {
                restrict: "AC", link: function (f, g, h) {
                    function l(a, b) {
                        var c = g.data("$classCounts") || {}, d = [];
                        q(a, function (a) {
                            if (0 < b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts", c);
                        return d.join(" ")
                    }

                    function k(b) {
                        if (!0 === a || f.$index % 2 === a) {
                            var k = e(b || []);
                            if (!m) {
                                var u = l(k, 1);
                                h.$addClass(u)
                            } else if (!fa(b, m)) {
                                var q = e(m), u = d(k, q), k = d(q, k), u = l(u, 1), k = l(k, -1);
                                u && u.length && c.addClass(g, u);
                                k && k.length && c.removeClass(g,
                                    k)
                            }
                        }
                        m = oa(b)
                    }

                    var m;
                    f.$watch(h[b], k, !0);
                    h.$observe("class", function (a) {
                        k(f.$eval(h[b]))
                    });
                    "ngClass" !== b && f.$watch("$index", function (c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var k = e(f.$eval(h[b]));
                            g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g))
                        }
                    })
                }
            }
        }]
    }

    function xd(b) {
        function a(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function c(b, c) {
            b = b ? "-" + yc(b, "-") : "";
            a(ob + b, !0 === c);
            a(Ad + b, !1 === c)
        }

        var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, l = b.parentForm, k = b.$animate;
        f[Ad] = !(f[ob] = e.hasClass(ob));
        d.$setValidity = function (b, e, f) {
            e === s ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), Bd(d.$pending) && (d.$pending = s));
            Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
            d.$pending ? (a(Cd, !0), d.$valid = d.$invalid = s, c("", null)) : (a(Cd, !1), d.$valid = Bd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
            e = d.$pending && d.$pending[b] ? s : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
            c(b, e);
            l.$setValidity(b,
                e, d)
        }
    }

    function Bd(b) {
        if (b)for (var a in b)return !1;
        return !0
    }

    var Sf = /^\/(.+)\/([a-z]*)$/, L = function (b) {
        return O(b) ? b.toLowerCase() : b
    }, wc = Object.prototype.hasOwnProperty, vb = function (b) {
        return O(b) ? b.toUpperCase() : b
    }, Qa, z, pa, Za = [].slice, uf = [].splice, Tf = [].push, Aa = Object.prototype.toString, Ja = F("ng"), ba = T.angular || (T.angular = {}), db, rb = 0;
    Qa = V.documentMode;
    A.$inject = [];
    na.$inject = [];
    var w = Array.isArray, U = function (b) {
        return O(b) ? b.trim() : b
    }, ld = function (b) {
        return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
            "\\$1").replace(/\x08/g, "\\x08")
    }, cb = function () {
        if (y(cb.isActive_))return cb.isActive_;
        var b = !(!V.querySelector("[ng-csp]") && !V.querySelector("[data-ng-csp]"));
        if (!b)try {
            new Function("")
        } catch (a) {
            b = !0
        }
        return cb.isActive_ = b
    }, tb = ["ng-", "data-ng-", "ng:", "x-ng-"], Rd = /[A-Z]/g, zc = !1, Rb, ma = 1, ab = 3, Vd = {
        full: "1.3.16",
        major: 1,
        minor: 3,
        dot: 16,
        codeName: "cookie-oatmealification"
    };
    R.expando = "ng339";
    var Ab = R.cache = {}, nf = 1;
    R._data = function (b) {
        return this.cache[b[this.expando]] || {}
    };
    var hf = /([\:\-\_]+(.))/g, jf = /^moz([A-Z])/,
        Uf = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        }, Ub = F("jqLite"), mf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Tb = /<|&#?\w+;/, kf = /<([\w:]+)/, lf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ha = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ha.optgroup = ha.option;
    ha.tbody = ha.tfoot = ha.colgroup =
        ha.caption = ha.thead;
    ha.th = ha.td;
    var Ka = R.prototype = {
        ready: function (b) {
            function a() {
                c || (c = !0, b())
            }

            var c = !1;
            "complete" === V.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), R(T).on("load", a))
        }, toString: function () {
            var b = [];
            q(this, function (a) {
                b.push("" + a)
            });
            return "[" + b.join(", ") + "]"
        }, eq: function (b) {
            return 0 <= b ? z(this[b]) : z(this[this.length + b])
        }, length: 0, push: Tf, sort: [].sort, splice: [].splice
    }, Fb = {};
    q("multiple selected checked disabled readOnly required open".split(" "), function (b) {
        Fb[L(b)] = b
    });
    var Rc = {};
    q("input select option textarea button form details".split(" "), function (b) {
        Rc[b] = !0
    });
    var Sc = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    q({data: Wb, removeData: yb}, function (b, a) {
        R[a] = b
    });
    q({
        data: Wb, inheritedData: Eb, scope: function (b) {
            return z.data(b, "$scope") || Eb(b.parentNode || b, ["$isolateScope", "$scope"])
        }, isolateScope: function (b) {
            return z.data(b, "$isolateScope") || z.data(b, "$isolateScopeNoTemplate")
        }, controller: Nc, injector: function (b) {
            return Eb(b,
                "$injector")
        }, removeAttr: function (b, a) {
            b.removeAttribute(a)
        }, hasClass: Bb, css: function (b, a, c) {
            a = eb(a);
            if (y(c))b.style[a] = c; else return b.style[a]
        }, attr: function (b, a, c) {
            var d = b.nodeType;
            if (d !== ab && 2 !== d && 8 !== d)if (d = L(a), Fb[d])if (y(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || A).specified ? d : s; else if (y(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), null === b ? s : b
        }, prop: function (b, a, c) {
            if (y(c))b[a] = c; else return b[a]
        },
        text: function () {
            function b(a, b) {
                if (C(b)) {
                    var d = a.nodeType;
                    return d === ma || d === ab ? a.textContent : ""
                }
                a.textContent = b
            }

            b.$dv = "";
            return b
        }(), val: function (b, a) {
            if (C(a)) {
                if (b.multiple && "select" === sa(b)) {
                    var c = [];
                    q(b.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        }, html: function (b, a) {
            if (C(a))return b.innerHTML;
            xb(b, !0);
            b.innerHTML = a
        }, empty: Oc
    }, function (b, a) {
        R.prototype[a] = function (a, d) {
            var e, f, g = this.length;
            if (b !== Oc && (2 == b.length && b !== Bb && b !== Nc ?
                    a : d) === s) {
                if (I(a)) {
                    for (e = 0; e < g; e++)if (b === Wb)b(this[e], a); else for (f in a)b(this[e], f, a[f]);
                    return this
                }
                e = b.$dv;
                g = e === s ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++)b(this[e], a, d);
            return this
        }
    });
    q({
        removeData: yb, on: function a(c, d, e, f) {
            if (y(f))throw Ub("onargs");
            if (Jc(c)) {
                var g = zb(c, !0);
                f = g.events;
                var h = g.handle;
                h || (h = g.handle = qf(c, f));
                for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d], l = g.length; l--;) {
                    d = g[l];
                    var k = f[d];
                    k || (f[d] = [], "mouseenter" === d || "mouseleave" ===
                    d ? a(c, Uf[d], function (a) {
                        var c = a.relatedTarget;
                        c && (c === this || this.contains(c)) || h(a, d)
                    }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
                    k.push(e)
                }
            }
        }, off: Mc, one: function (a, c, d) {
            a = z(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f)
            });
            a.on(c, d)
        }, replaceWith: function (a, c) {
            var d, e = a.parentNode;
            xb(a);
            q(new R(c), function (c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        }, children: function (a) {
            var c = [];
            q(a.childNodes, function (a) {
                a.nodeType === ma && c.push(a)
            });
            return c
        }, contents: function (a) {
            return a.contentDocument ||
                a.childNodes || []
        }, append: function (a, c) {
            var d = a.nodeType;
            if (d === ma || 11 === d) {
                c = new R(c);
                for (var d = 0, e = c.length; d < e; d++)a.appendChild(c[d])
            }
        }, prepend: function (a, c) {
            if (a.nodeType === ma) {
                var d = a.firstChild;
                q(new R(c), function (c) {
                    a.insertBefore(c, d)
                })
            }
        }, wrap: function (a, c) {
            c = z(c).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        }, remove: Pc, detach: function (a) {
            Pc(a, !0)
        }, after: function (a, c) {
            var d = a, e = a.parentNode;
            c = new R(c);
            for (var f = 0, g = c.length; f < g; f++) {
                var h = c[f];
                e.insertBefore(h,
                    d.nextSibling);
                d = h
            }
        }, addClass: Db, removeClass: Cb, toggleClass: function (a, c, d) {
            c && q(c.split(" "), function (c) {
                var f = d;
                C(f) && (f = !Bb(a, c));
                (f ? Db : Cb)(a, c)
            })
        }, parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, next: function (a) {
            return a.nextElementSibling
        }, find: function (a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : []
        }, clone: Vb, triggerHandler: function (a, c, d) {
            var e, f, g = c.type || c, h = zb(a);
            if (h = (h = h && h.events) && h[g])e = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 ===
                        this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                }, stopPropagation: A, type: g, target: a
            }, c.type && (e = x(e, c)), c = oa(h), f = d ? [e].concat(d) : [e], q(c, function (c) {
                e.isImmediatePropagationStopped() || c.apply(a, f)
            })
        }
    }, function (a, c) {
        R.prototype[c] = function (c, e, f) {
            for (var g, h = 0, l = this.length; h < l; h++)C(g) ? (g = a(this[h], c, e, f), y(g) && (g = z(g))) : Lc(g, a(this[h], c, e, f));
            return y(g) ? g : this
        };
        R.prototype.bind =
            R.prototype.on;
        R.prototype.unbind = R.prototype.off
    });
    fb.prototype = {
        put: function (a, c) {
            this[Na(a, this.nextUid)] = c
        }, get: function (a) {
            return this[Na(a, this.nextUid)]
        }, remove: function (a) {
            var c = this[a = Na(a, this.nextUid)];
            delete this[a];
            return c
        }
    };
    var Uc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Vf = /,/, Wf = /^\s*(_?)(\S+?)\1\s*$/, Tc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Da = F("$injector");
    bb.$$annotate = function (a, c, d) {
        var e;
        if ("function" === typeof a) {
            if (!(e = a.$inject)) {
                e = [];
                if (a.length) {
                    if (c)throw O(d) && d || (d = a.name ||
                        rf(a)), Da("strictdi", d);
                    c = a.toString().replace(Tc, "");
                    c = c.match(Uc);
                    q(c[1].split(Vf), function (a) {
                        a.replace(Wf, function (a, c, d) {
                            e.push(d)
                        })
                    })
                }
                a.$inject = e
            }
        } else w(a) ? (c = a.length - 1, La(a[c], "fn"), e = a.slice(0, c)) : La(a, "fn", !0);
        return e
    };
    var Xf = F("$animate"), He = ["$provide", function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0))throw Xf("notcsel", c);
            this.$$selectors[c.substr(1)] = e;
            a.factory(e, d)
        };
        this.classNameFilter = function (a) {
            1 === arguments.length && (this.$$classNameFilter =
                a instanceof RegExp ? a : null);
            return this.$$classNameFilter
        };
        this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (a, d, e) {
            function f(d) {
                var f, g = a.defer();
                g.promise.$$cancelFn = function () {
                    f && f()
                };
                e.$$postDigest(function () {
                    f = d(function () {
                        g.resolve()
                    })
                });
                return g.promise
            }

            function g(a, c) {
                var d = [], e = [], f = ga();
                q((a.attr("class") || "").split(/\s+/), function (a) {
                    f[a] = !0
                });
                q(c, function (a, c) {
                    var g = f[c];
                    !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c)
                });
                return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null]
            }

            function h(a,
                       c, d) {
                for (var e = 0, f = c.length; e < f; ++e)a[c[e]] = d
            }

            function l() {
                m || (m = a.defer(), d(function () {
                    m.resolve();
                    m = null
                }));
                return m.promise
            }

            function k(a, c) {
                if (ba.isObject(c)) {
                    var d = x(c.from || {}, c.to || {});
                    a.css(d)
                }
            }

            var m;
            return {
                animate: function (a, c, d) {
                    k(a, {from: c, to: d});
                    return l()
                }, enter: function (a, c, d, e) {
                    k(a, e);
                    d ? d.after(a) : c.prepend(a);
                    return l()
                }, leave: function (a, c) {
                    k(a, c);
                    a.remove();
                    return l()
                }, move: function (a, c, d, e) {
                    return this.enter(a, c, d, e)
                }, addClass: function (a, c, d) {
                    return this.setClass(a, c, [], d)
                }, $$addClassImmediately: function (a,
                                                    c, d) {
                    a = z(a);
                    c = O(c) ? c : w(c) ? c.join(" ") : "";
                    q(a, function (a) {
                        Db(a, c)
                    });
                    k(a, d);
                    return l()
                }, removeClass: function (a, c, d) {
                    return this.setClass(a, [], c, d)
                }, $$removeClassImmediately: function (a, c, d) {
                    a = z(a);
                    c = O(c) ? c : w(c) ? c.join(" ") : "";
                    q(a, function (a) {
                        Cb(a, c)
                    });
                    k(a, d);
                    return l()
                }, setClass: function (a, c, d, e) {
                    var k = this, l = !1;
                    a = z(a);
                    var m = a.data("$$animateClasses");
                    m ? e && m.options && (m.options = ba.extend(m.options || {}, e)) : (m = {
                        classes: {},
                        options: e
                    }, l = !0);
                    e = m.classes;
                    c = w(c) ? c : c.split(" ");
                    d = w(d) ? d : d.split(" ");
                    h(e, c, !0);
                    h(e, d, !1);
                    l && (m.promise = f(function (c) {
                        var d = a.data("$$animateClasses");
                        a.removeData("$$animateClasses");
                        if (d) {
                            var e = g(a, d.classes);
                            e && k.$$setClassImmediately(a, e[0], e[1], d.options)
                        }
                        c()
                    }), a.data("$$animateClasses", m));
                    return m.promise
                }, $$setClassImmediately: function (a, c, d, e) {
                    c && this.$$addClassImmediately(a, c);
                    d && this.$$removeClassImmediately(a, d);
                    k(a, e);
                    return l()
                }, enabled: A, cancel: A
            }
        }]
    }], da = F("$compile");
    Bc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Wc = /^((?:x|data)[\:\-_])/i, vf = F("$controller"),
        ad = "application/json", cc = {"Content-Type": ad + ";charset=utf-8"}, xf = /^\[|^\{(?!\{)/, yf = {
            "[": /]$/,
            "{": /}$/
        }, wf = /^\)\]\}',?\n/, dc = F("$interpolate"), Yf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Bf = {
            http: 80,
            https: 443,
            ftp: 21
        }, Hb = F("$location"), Zf = {
            $$html5: !1, $$replace: !1, absUrl: Ib("$$absUrl"), url: function (a) {
                if (C(a))return this.$$url;
                var c = Yf.exec(a);
                (c[1] || "" === a) && this.path(decodeURIComponent(c[1]));
                (c[2] || c[1] || "" === a) && this.search(c[3] || "");
                this.hash(c[5] || "");
                return this
            }, protocol: Ib("$$protocol"), host: Ib("$$host"),
            port: Ib("$$port"), path: id("$$path", function (a) {
                a = null !== a ? a.toString() : "";
                return "/" == a.charAt(0) ? a : "/" + a
            }), search: function (a, c) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (O(a) || Q(a))a = a.toString(), this.$$search = vc(a); else if (I(a))a = Ba(a, {}), q(a, function (c, e) {
                            null == c && delete a[e]
                        }), this.$$search = a; else throw Hb("isrcharg");
                        break;
                    default:
                        C(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
                }
                this.$$compose();
                return this
            }, hash: id("$$hash", function (a) {
                return null !== a ? a.toString() :
                    ""
            }), replace: function () {
                this.$$replace = !0;
                return this
            }
        };
    q([hd, hc, gc], function (a) {
        a.prototype = Object.create(Zf);
        a.prototype.state = function (c) {
            if (!arguments.length)return this.$$state;
            if (a !== gc || !this.$$html5)throw Hb("nostate");
            this.$$state = C(c) ? null : c;
            return this
        }
    });
    var ja = F("$parse"), $f = Function.prototype.call, ag = Function.prototype.apply, bg = Function.prototype.bind, pb = ga();
    q({
        "null": function () {
            return null
        }, "true": function () {
            return !0
        }, "false": function () {
            return !1
        }, undefined: function () {
        }
    }, function (a,
                 c) {
        a.constant = a.literal = a.sharedGetter = !0;
        pb[c] = a
    });
    pb["this"] = function (a) {
        return a
    };
    pb["this"].sharedGetter = !0;
    var qb = x(ga(), {
        "+": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return y(d) ? y(e) ? d + e : d : y(e) ? e : s
        }, "-": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return (y(d) ? d : 0) - (y(e) ? e : 0)
        }, "*": function (a, c, d, e) {
            return d(a, c) * e(a, c)
        }, "/": function (a, c, d, e) {
            return d(a, c) / e(a, c)
        }, "%": function (a, c, d, e) {
            return d(a, c) % e(a, c)
        }, "===": function (a, c, d, e) {
            return d(a, c) === e(a, c)
        }, "!==": function (a, c, d, e) {
            return d(a, c) !== e(a, c)
        }, "==": function (a,
                           c, d, e) {
            return d(a, c) == e(a, c)
        }, "!=": function (a, c, d, e) {
            return d(a, c) != e(a, c)
        }, "<": function (a, c, d, e) {
            return d(a, c) < e(a, c)
        }, ">": function (a, c, d, e) {
            return d(a, c) > e(a, c)
        }, "<=": function (a, c, d, e) {
            return d(a, c) <= e(a, c)
        }, ">=": function (a, c, d, e) {
            return d(a, c) >= e(a, c)
        }, "&&": function (a, c, d, e) {
            return d(a, c) && e(a, c)
        }, "||": function (a, c, d, e) {
            return d(a, c) || e(a, c)
        }, "!": function (a, c, d) {
            return !d(a, c)
        }, "=": !0, "|": !0
    }), cg = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, kc = function (a) {
        this.options = a
    };
    kc.prototype = {
        constructor: kc,
        lex: function (a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)if (a = this.text.charAt(this.index), '"' === a || "'" === a)this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(a))this.readIdent(); else if (this.is(a, "(){}[].,;:?"))this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a))this.index++; else {
                var c = a + this.peek(), d = c + this.peek(2), e = qb[c], f = qb[d];
                qb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                    index: this.index,
                    text: a, operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (a, c) {
            return -1 !== c.indexOf(a)
        }, peek: function (a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        }, isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        }, isIdent: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" ===
                a
        }, isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        }, throwError: function (a, c, d) {
            d = d || this.index;
            c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw ja("lexerr", a, c, this.text);
        }, readNumber: function () {
            for (var a = "", c = this.index; this.index < this.text.length;) {
                var d = L(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d))a += d; else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e))a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length -
                            1))a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({index: c, text: a, constant: !0, value: Number(a)})
        }, readIdent: function () {
            for (var a = this.index; this.index < this.text.length;) {
                var c = this.text.charAt(this.index);
                if (!this.isIdent(c) && !this.isNumber(c))break;
                this.index++
            }
            this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
        }, readString: function (a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var g = this.text.charAt(this.index), e = e + g;
                if (f)"u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += cg[g] || g, f = !1; else if ("\\" === g)f = !0; else {
                    if (g === a) {
                        this.index++;
                        this.tokens.push({index: c, text: e, constant: !0, value: d});
                        return
                    }
                    d += g
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var lb = function (a, c, d) {
        this.lexer =
            a;
        this.$filter = c;
        this.options = d
    };
    lb.ZERO = x(function () {
        return 0
    }, {sharedGetter: !0, constant: !0});
    lb.prototype = {
        constructor: lb, parse: function (a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            a.literal = !!a.literal;
            a.constant = !!a.constant;
            return a
        }, primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier &&
            this.peek().text in pb ? a = pb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var c, d; c = this.expect("(", "[", ".");)"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        }, throwError: function (a, c) {
            throw ja("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        }, peekToken: function () {
            if (0 ===
                this.tokens.length)throw ja("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (a, c, d, e) {
            return this.peekAhead(0, a, c, d, e)
        }, peekAhead: function (a, c, d, e, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var g = a.text;
                if (g === c || g === d || g === e || g === f || !(c || d || e || f))return a
            }
            return !1
        }, expect: function (a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
        }, consume: function (a) {
            if (0 === this.tokens.length)throw ja("ueoe", this.text);
            var c = this.expect(a);
            c || this.throwError("is unexpected, expecting [" + a +
                "]", this.peek());
            return c
        }, unaryFn: function (a, c) {
            var d = qb[a];
            return x(function (a, f) {
                return d(a, f, c)
            }, {constant: c.constant, inputs: [c]})
        }, binaryFn: function (a, c, d, e) {
            var f = qb[c];
            return x(function (c, e) {
                return f(c, e, a, d)
            }, {constant: a.constant && d.constant, inputs: !e && [a, d]})
        }, identifier: function () {
            for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");)a += this.consume().text + this.consume().text;
            return Df(a, this.options, this.text)
        }, constant: function () {
            var a = this.consume().value;
            return x(function () {
                return a
            }, {constant: !0, literal: !0})
        }, statements: function () {
            for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (c, d) {
                for (var e, f = 0, g = a.length; f < g; f++)e = a[f](c, d);
                return e
            }
        }, filterChain: function () {
            for (var a = this.expression(); this.expect("|");)a = this.filter(a);
            return a
        }, filter: function (a) {
            var c = this.$filter(this.consume().text), d, e;
            if (this.peek(":"))for (d = [], e = []; this.expect(":");)d.push(this.expression());
            var f = [a].concat(d || []);
            return x(function (f, h) {
                var l = a(f, h);
                if (e) {
                    e[0] = l;
                    for (l = d.length; l--;)e[l + 1] = d[l](f, h);
                    return c.apply(s, e)
                }
                return c(l)
            }, {constant: !c.$stateful && f.every(ic), inputs: !c.$stateful && f})
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var a = this.ternary(), c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), x(function (d, f) {
                    return a.assign(d, c(d, f), f)
                },
                {inputs: [a, c]})) : a
        }, ternary: function () {
            var a = this.logicalOR(), c;
            if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
                var d = this.assignment();
                return x(function (e, f) {
                    return a(e, f) ? c(e, f) : d(e, f)
                }, {constant: a.constant && c.constant && d.constant})
            }
            return a
        }, logicalOR: function () {
            for (var a = this.logicalAND(), c; c = this.expect("||");)a = this.binaryFn(a, c.text, this.logicalAND(), !0);
            return a
        }, logicalAND: function () {
            for (var a = this.equality(), c; c = this.expect("&&");)a = this.binaryFn(a, c.text, this.equality(), !0);
            return a
        }, equality: function () {
            for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");)a = this.binaryFn(a, c.text, this.relational());
            return a
        }, relational: function () {
            for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");)a = this.binaryFn(a, c.text, this.additive());
            return a
        }, additive: function () {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-");)a = this.binaryFn(a, c.text, this.multiplicative());
            return a
        }, multiplicative: function () {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%");)a =
                this.binaryFn(a, c.text, this.unary());
            return a
        }, unary: function () {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(lb.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
        }, fieldAccess: function (a) {
            var c = this.identifier();
            return x(function (d, e, f) {
                d = f || a(d, e);
                return null == d ? s : c(d)
            }, {
                assign: function (d, e, f) {
                    var g = a(d, f);
                    g || a.assign(d, g = {}, f);
                    return c.assign(g, e)
                }
            })
        }, objectIndex: function (a) {
            var c = this.text, d = this.expression();
            this.consume("]");
            return x(function (e, f) {
                var g = a(e, f), h = d(e, f);
                ra(h, c);
                return g ? ka(g[h], c) : s
            }, {
                assign: function (e, f, g) {
                    var h = ra(d(e, g), c), l = ka(a(e, g), c);
                    l || a.assign(e, l = {}, g);
                    return l[h] = f
                }
            })
        }, functionCall: function (a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression()); while (this.expect(","))
            }
            this.consume(")");
            var e = this.text, f = d.length ? [] : null;
            return function (g, h) {
                var l = c ? c(g, h) : y(c) ? s : g, k = a(g, h, l) || A;
                if (f)for (var m = d.length; m--;)f[m] = ka(d[m](g, h), e);
                ka(l, e);
                if (k) {
                    if (k.constructor === k)throw ja("isecfn",
                        e);
                    if (k === $f || k === ag || k === bg)throw ja("isecff", e);
                }
                l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
                f && (f.length = 0);
                return ka(l, e)
            }
        }, arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]"))break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return x(function (c, d) {
                for (var e = [], f = 0, g = a.length; f < g; f++)e.push(a[f](c, d));
                return e
            }, {literal: !0, constant: a.every(ic), inputs: a})
        }, object: function () {
            var a = [], c = [];
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}"))break;
                    var d = this.consume();
                    d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);
                    this.consume(":");
                    c.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("}");
            return x(function (d, f) {
                for (var g = {}, h = 0, l = c.length; h < l; h++)g[a[h]] = c[h](d, f);
                return g
            }, {literal: !0, constant: c.every(ic), inputs: c})
        }
    };
    var Ff = ga(), Ef = ga(), Gf = Object.prototype.valueOf, za = F("$sce"), la = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        }, da = F("$compile"), X = V.createElement("a"),
        nd = ya(T.location.href);
    Ic.$inject = ["$provide"];
    od.$inject = ["$locale"];
    qd.$inject = ["$locale"];
    var td = ".", Qf = {
        yyyy: Z("FullYear", 4),
        yy: Z("FullYear", 2, 0, !0),
        y: Z("FullYear", 1),
        MMMM: Kb("Month"),
        MMM: Kb("Month", !0),
        MM: Z("Month", 2, 1),
        M: Z("Month", 1, 1),
        dd: Z("Date", 2),
        d: Z("Date", 1),
        HH: Z("Hours", 2),
        H: Z("Hours", 1),
        hh: Z("Hours", 2, -12),
        h: Z("Hours", 1, -12),
        mm: Z("Minutes", 2),
        m: Z("Minutes", 1),
        ss: Z("Seconds", 2),
        s: Z("Seconds", 1),
        sss: Z("Milliseconds", 3),
        EEEE: Kb("Day"),
        EEE: Kb("Day", !0),
        a: function (a, c) {
            return 12 > a.getHours() ?
                c.AMPMS[0] : c.AMPMS[1]
        },
        Z: function (a) {
            a = -1 * a.getTimezoneOffset();
            return a = (0 <= a ? "+" : "") + (Jb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Jb(Math.abs(a % 60), 2))
        },
        ww: vd(2),
        w: vd(1),
        G: lc,
        GG: lc,
        GGG: lc,
        GGGG: function (a, c) {
            return 0 >= a.getFullYear() ? c.ERANAMES[0] : c.ERANAMES[1]
        }
    }, Pf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, Of = /^\-?\d+$/;
    pd.$inject = ["$locale"];
    var Lf = ca(L), Mf = ca(vb);
    rd.$inject = ["$parse"];
    var Yd = ca({
        restrict: "E", compile: function (a, c) {
            if (!c.href && !c.xlinkHref && !c.name)return function (a, c) {
                if ("a" === c[0].nodeName.toLowerCase()) {
                    var f = "[object SVGAnimatedString]" === Aa.call(c.prop("href")) ? "xlink:href" : "href";
                    c.on("click", function (a) {
                        c.attr(f) || a.preventDefault()
                    })
                }
            }
        }
    }), wb = {};
    q(Fb, function (a, c) {
        if ("multiple" != a) {
            var d = va("ng-" + c);
            wb[d] = function () {
                return {
                    restrict: "A", priority: 100, link: function (a, f, g) {
                        a.$watch(g[d], function (a) {
                            g.$set(c, !!a)
                        })
                    }
                }
            }
        }
    });
    q(Sc, function (a, c) {
        wb[c] = function () {
            return {
                priority: 100, link: function (a, e, f) {
                    if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) &&
                        (e = f.ngPattern.match(Sf))) {
                        f.$set("ngPattern", new RegExp(e[1], e[2]));
                        return
                    }
                    a.$watch(f[c], function (a) {
                        f.$set(c, a)
                    })
                }
            }
        }
    });
    q(["src", "srcset", "href"], function (a) {
        var c = va("ng-" + a);
        wb[c] = function () {
            return {
                priority: 99, link: function (d, e, f) {
                    var g = a, h = a;
                    "href" === a && "[object SVGAnimatedString]" === Aa.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
                    f.$observe(c, function (c) {
                        c ? (f.$set(h, c), Qa && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
                    })
                }
            }
        }
    });
    var Lb = {
        $addControl: A, $$renameControl: function (a,
                                                   c) {
            a.$name = c
        }, $removeControl: A, $setValidity: A, $setDirty: A, $setPristine: A, $setSubmitted: A
    };
    wd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Dd = function (a) {
            return ["$timeout", function (c) {
                return {
                    name: "form", restrict: a ? "EAC" : "E", controller: wd, compile: function (d, e) {
                        d.addClass(Ra).addClass(ob);
                        var f = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
                        return {
                            pre: function (a, d, e, k) {
                                if (!("action"in e)) {
                                    var m = function (c) {
                                        a.$apply(function () {
                                            k.$commitViewValue();
                                            k.$setSubmitted()
                                        });
                                        c.preventDefault()
                                    };
                                    d[0].addEventListener("submit", m, !1);
                                    d.on("$destroy", function () {
                                        c(function () {
                                            d[0].removeEventListener("submit", m, !1)
                                        }, 0, !1)
                                    })
                                }
                                var r = k.$$parentForm;
                                f && (kb(a, null, k.$name, k, k.$name), e.$observe(f, function (c) {
                                    k.$name !== c && (kb(a, null, k.$name, s, k.$name), r.$$renameControl(k, c), kb(a, null, k.$name, k, k.$name))
                                }));
                                d.on("$destroy", function () {
                                    r.$removeControl(k);
                                    f && kb(a, null, e[f], s, k.$name);
                                    x(k, Lb)
                                })
                            }
                        }
                    }
                }
            }]
        }, Zd = Dd(), le = Dd(!0), Rf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, dg = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        eg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, fg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Ed = /^(\d{4})-(\d{2})-(\d{2})$/, Fd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, oc = /^(\d{4})-W(\d\d)$/, Gd = /^(\d{4})-(\d\d)$/, Hd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Id = {
            text: function (a, c, d, e, f, g) {
                mb(a, c, d, e, f, g);
                mc(e)
            },
            date: nb("date", Ed, Nb(Ed, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": nb("datetimelocal", Fd, Nb(Fd, "yyyy MM dd HH mm ss sss".split(" ")),
                "yyyy-MM-ddTHH:mm:ss.sss"),
            time: nb("time", Hd, Nb(Hd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: nb("week", oc, function (a, c) {
                if (ea(a))return a;
                if (O(a)) {
                    oc.lastIndex = 0;
                    var d = oc.exec(a);
                    if (d) {
                        var e = +d[1], f = +d[2], g = d = 0, h = 0, l = 0, k = ud(e), f = 7 * (f - 1);
                        c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
                        return new Date(e, 0, k.getDate() + f, d, g, h, l)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: nb("month", Gd, Nb(Gd, ["yyyy", "MM"]), "yyyy-MM"),
            number: function (a, c, d, e, f, g) {
                yd(a, c, d, e);
                mb(a, c, d, e, f, g);
                e.$$parserName =
                    "number";
                e.$parsers.push(function (a) {
                    return e.$isEmpty(a) ? null : fg.test(a) ? parseFloat(a) : s
                });
                e.$formatters.push(function (a) {
                    if (!e.$isEmpty(a)) {
                        if (!Q(a))throw Ob("numfmt", a);
                        a = a.toString()
                    }
                    return a
                });
                if (y(d.min) || d.ngMin) {
                    var h;
                    e.$validators.min = function (a) {
                        return e.$isEmpty(a) || C(h) || a >= h
                    };
                    d.$observe("min", function (a) {
                        y(a) && !Q(a) && (a = parseFloat(a, 10));
                        h = Q(a) && !isNaN(a) ? a : s;
                        e.$validate()
                    })
                }
                if (y(d.max) || d.ngMax) {
                    var l;
                    e.$validators.max = function (a) {
                        return e.$isEmpty(a) || C(l) || a <= l
                    };
                    d.$observe("max", function (a) {
                        y(a) && !Q(a) && (a = parseFloat(a, 10));
                        l = Q(a) && !isNaN(a) ? a : s;
                        e.$validate()
                    })
                }
            },
            url: function (a, c, d, e, f, g) {
                mb(a, c, d, e, f, g);
                mc(e);
                e.$$parserName = "url";
                e.$validators.url = function (a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || dg.test(d)
                }
            },
            email: function (a, c, d, e, f, g) {
                mb(a, c, d, e, f, g);
                mc(e);
                e.$$parserName = "email";
                e.$validators.email = function (a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || eg.test(d)
                }
            },
            radio: function (a, c, d, e) {
                C(d.name) && c.attr("name", ++rb);
                c.on("click", function (a) {
                    c[0].checked && e.$setViewValue(d.value, a && a.type)
                });
                e.$render =
                    function () {
                        c[0].checked = d.value == e.$viewValue
                    };
                d.$observe("value", e.$render)
            },
            checkbox: function (a, c, d, e, f, g, h, l) {
                var k = zd(l, a, "ngTrueValue", d.ngTrueValue, !0), m = zd(l, a, "ngFalseValue", d.ngFalseValue, !1);
                c.on("click", function (a) {
                    e.$setViewValue(c[0].checked, a && a.type)
                });
                e.$render = function () {
                    c[0].checked = e.$viewValue
                };
                e.$isEmpty = function (a) {
                    return !1 === a
                };
                e.$formatters.push(function (a) {
                    return fa(a, k)
                });
                e.$parsers.push(function (a) {
                    return a ? k : m
                })
            },
            hidden: A,
            button: A,
            submit: A,
            reset: A,
            file: A
        }, Cc = ["$browser",
            "$sniffer", "$filter", "$parse", function (a, c, d, e) {
                return {
                    restrict: "E", require: ["?ngModel"], link: {
                        pre: function (f, g, h, l) {
                            l[0] && (Id[L(h.type)] || Id.text)(f, g, h, l[0], c, a, d, e)
                        }
                    }
                }
            }], gg = /^(true|false|\d+)$/, De = function () {
            return {
                restrict: "A", priority: 100, compile: function (a, c) {
                    return gg.test(c.ngValue) ? function (a, c, f) {
                        f.$set("value", a.$eval(f.ngValue))
                    } : function (a, c, f) {
                        a.$watch(f.ngValue, function (a) {
                            f.$set("value", a)
                        })
                    }
                }
            }
        }, de = ["$compile", function (a) {
            return {
                restrict: "AC", compile: function (c) {
                    a.$$addBindingClass(c);
                    return function (c, e, f) {
                        a.$$addBindingInfo(e, f.ngBind);
                        e = e[0];
                        c.$watch(f.ngBind, function (a) {
                            e.textContent = a === s ? "" : a
                        })
                    }
                }
            }
        }], fe = ["$interpolate", "$compile", function (a, c) {
            return {
                compile: function (d) {
                    c.$$addBindingClass(d);
                    return function (d, f, g) {
                        d = a(f.attr(g.$attr.ngBindTemplate));
                        c.$$addBindingInfo(f, d.expressions);
                        f = f[0];
                        g.$observe("ngBindTemplate", function (a) {
                            f.textContent = a === s ? "" : a
                        })
                    }
                }
            }
        }], ee = ["$sce", "$parse", "$compile", function (a, c, d) {
            return {
                restrict: "A", compile: function (e, f) {
                    var g = c(f.ngBindHtml),
                        h = c(f.ngBindHtml, function (a) {
                            return (a || "").toString()
                        });
                    d.$$addBindingClass(e);
                    return function (c, e, f) {
                        d.$$addBindingInfo(e, f.ngBindHtml);
                        c.$watch(h, function () {
                            e.html(a.getTrustedHtml(g(c)) || "")
                        })
                    }
                }
            }
        }], Ce = ca({
            restrict: "A", require: "ngModel", link: function (a, c, d, e) {
                e.$viewChangeListeners.push(function () {
                    a.$eval(d.ngChange)
                })
            }
        }), ge = nc("", !0), ie = nc("Odd", 0), he = nc("Even", 1), je = Ia({
            compile: function (a, c) {
                c.$set("ngCloak", s);
                a.removeClass("ng-cloak")
            }
        }), ke = [function () {
            return {
                restrict: "A", scope: !0, controller: "@",
                priority: 500
            }
        }], Hc = {}, hg = {blur: !0, focus: !0};
    q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var c = va("ng-" + a);
        Hc[c] = ["$parse", "$rootScope", function (d, e) {
            return {
                restrict: "A", compile: function (f, g) {
                    var h = d(g[c], null, !0);
                    return function (c, d) {
                        d.on(a, function (d) {
                            var f = function () {
                                h(c, {$event: d})
                            };
                            hg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                        })
                    }
                }
            }
        }]
    });
    var ne = ["$animate", function (a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (c, d, e, f, g) {
                    var h, l, k;
                    c.$watch(e.ngIf, function (c) {
                        c ? l || g(function (c, f) {
                            l = f;
                            c[c.length++] = V.createComment(" end ngIf: " + e.ngIf + " ");
                            h = {clone: c};
                            a.enter(c, d.parent(), d)
                        }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = ub(h.clone), a.leave(k).then(function () {
                            k = null
                        }), h = null))
                    })
                }
            }
        }], oe = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (a, c, d, e) {
            return {
                restrict: "ECA", priority: 400, terminal: !0, transclude: "element",
                controller: ba.noop, compile: function (f, g) {
                    var h = g.ngInclude || g.src, l = g.onload || "", k = g.autoscroll;
                    return function (f, g, n, q, v) {
                        var s = 0, t, p, H, J = function () {
                            p && (p.remove(), p = null);
                            t && (t.$destroy(), t = null);
                            H && (d.leave(H).then(function () {
                                p = null
                            }), p = H, H = null)
                        };
                        f.$watch(e.parseAsResourceUrl(h), function (e) {
                            var h = function () {
                                !y(k) || k && !f.$eval(k) || c()
                            }, n = ++s;
                            e ? (a(e, !0).then(function (a) {
                                if (n === s) {
                                    var c = f.$new();
                                    q.template = a;
                                    a = v(c, function (a) {
                                        J();
                                        d.enter(a, null, g).then(h)
                                    });
                                    t = c;
                                    H = a;
                                    t.$emit("$includeContentLoaded",
                                        e);
                                    f.$eval(l)
                                }
                            }, function () {
                                n === s && (J(), f.$emit("$includeContentError", e))
                            }), f.$emit("$includeContentRequested", e)) : (J(), q.template = null)
                        })
                    }
                }
            }
        }], Fe = ["$compile", function (a) {
            return {
                restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, f) {
                    /SVG/.test(d[0].toString()) ? (d.empty(), a(Kc(f.template, V).childNodes)(c, function (a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(f.template), a(d.contents())(c))
                }
            }
        }], pe = Ia({
            priority: 450, compile: function () {
                return {
                    pre: function (a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        Be = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (a, c, d, e) {
                    var f = c.attr(d.$attr.ngList) || ", ", g = "false" !== d.ngTrim, h = g ? U(f) : f;
                    e.$parsers.push(function (a) {
                        if (!C(a)) {
                            var c = [];
                            a && q(a.split(h), function (a) {
                                a && c.push(g ? U(a) : a)
                            });
                            return c
                        }
                    });
                    e.$formatters.push(function (a) {
                        return w(a) ? a.join(f) : s
                    });
                    e.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, ob = "ng-valid", Ad = "ng-invalid", Ra = "ng-pristine", Mb = "ng-dirty", Cd = "ng-pending", Ob = new F("ngModel"), ig = ["$scope", "$exceptionHandler", "$attrs",
            "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, c, d, e, f, g, h, l, k, m) {
                this.$modelValue = this.$viewValue = Number.NaN;
                this.$$rawModelValue = s;
                this.$validators = {};
                this.$asyncValidators = {};
                this.$parsers = [];
                this.$formatters = [];
                this.$viewChangeListeners = [];
                this.$untouched = !0;
                this.$touched = !1;
                this.$pristine = !0;
                this.$dirty = !1;
                this.$valid = !0;
                this.$invalid = !1;
                this.$error = {};
                this.$$success = {};
                this.$pending = s;
                this.$name = m(d.name || "", !1)(a);
                var r = f(d.ngModel), n = r.assign, u = r, v = n,
                    P = null, t, p = this;
                this.$$setOptions = function (a) {
                    if ((p.$options = a) && a.getterSetter) {
                        var c = f(d.ngModel + "()"), g = f(d.ngModel + "($$$p)");
                        u = function (a) {
                            var d = r(a);
                            E(d) && (d = c(a));
                            return d
                        };
                        v = function (a, c) {
                            E(r(a)) ? g(a, {$$$p: p.$modelValue}) : n(a, p.$modelValue)
                        }
                    } else if (!r.assign)throw Ob("nonassign", d.ngModel, ta(e));
                };
                this.$render = A;
                this.$isEmpty = function (a) {
                    return C(a) || "" === a || null === a || a !== a
                };
                var H = e.inheritedData("$formController") || Lb, J = 0;
                xd({
                    ctrl: this, $element: e, set: function (a, c) {
                        a[c] = !0
                    }, unset: function (a,
                                        c) {
                        delete a[c]
                    }, parentForm: H, $animate: g
                });
                this.$setPristine = function () {
                    p.$dirty = !1;
                    p.$pristine = !0;
                    g.removeClass(e, Mb);
                    g.addClass(e, Ra)
                };
                this.$setDirty = function () {
                    p.$dirty = !0;
                    p.$pristine = !1;
                    g.removeClass(e, Ra);
                    g.addClass(e, Mb);
                    H.$setDirty()
                };
                this.$setUntouched = function () {
                    p.$touched = !1;
                    p.$untouched = !0;
                    g.setClass(e, "ng-untouched", "ng-touched")
                };
                this.$setTouched = function () {
                    p.$touched = !0;
                    p.$untouched = !1;
                    g.setClass(e, "ng-touched", "ng-untouched")
                };
                this.$rollbackViewValue = function () {
                    h.cancel(P);
                    p.$viewValue =
                        p.$$lastCommittedViewValue;
                    p.$render()
                };
                this.$validate = function () {
                    if (!Q(p.$modelValue) || !isNaN(p.$modelValue)) {
                        var a = p.$$rawModelValue, c = p.$valid, d = p.$modelValue, e = p.$options && p.$options.allowInvalid;
                        p.$$runValidators(a, p.$$lastCommittedViewValue, function (f) {
                            e || c === f || (p.$modelValue = f ? a : s, p.$modelValue !== d && p.$$writeModelToScope())
                        })
                    }
                };
                this.$$runValidators = function (a, c, d) {
                    function e() {
                        var d = !0;
                        q(p.$validators, function (e, f) {
                            var h = e(a, c);
                            d = d && h;
                            g(f, h)
                        });
                        return d ? !0 : (q(p.$asyncValidators, function (a,
                                                                         c) {
                            g(c, null)
                        }), !1)
                    }

                    function f() {
                        var d = [], e = !0;
                        q(p.$asyncValidators, function (f, h) {
                            var k = f(a, c);
                            if (!k || !E(k.then))throw Ob("$asyncValidators", k);
                            g(h, s);
                            d.push(k.then(function () {
                                g(h, !0)
                            }, function (a) {
                                e = !1;
                                g(h, !1)
                            }))
                        });
                        d.length ? k.all(d).then(function () {
                            h(e)
                        }, A) : h(!0)
                    }

                    function g(a, c) {
                        l === J && p.$setValidity(a, c)
                    }

                    function h(a) {
                        l === J && d(a)
                    }

                    J++;
                    var l = J;
                    (function () {
                        var a = p.$$parserName || "parse";
                        if (t === s)g(a, null); else return t || (q(p.$validators, function (a, c) {
                            g(c, null)
                        }), q(p.$asyncValidators, function (a, c) {
                            g(c,
                                null)
                        })), g(a, t), t;
                        return !0
                    })() ? e() ? f() : h(!1) : h(!1)
                };
                this.$commitViewValue = function () {
                    var a = p.$viewValue;
                    h.cancel(P);
                    if (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators)p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate()
                };
                this.$$parseAndValidate = function () {
                    var c = p.$$lastCommittedViewValue;
                    if (t = C(c) ? s : !0)for (var d = 0; d < p.$parsers.length; d++)if (c = p.$parsers[d](c), C(c)) {
                        t = !1;
                        break
                    }
                    Q(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = u(a));
                    var e = p.$modelValue,
                        f = p.$options && p.$options.allowInvalid;
                    p.$$rawModelValue = c;
                    f && (p.$modelValue = c, p.$modelValue !== e && p.$$writeModelToScope());
                    p.$$runValidators(c, p.$$lastCommittedViewValue, function (a) {
                        f || (p.$modelValue = a ? c : s, p.$modelValue !== e && p.$$writeModelToScope())
                    })
                };
                this.$$writeModelToScope = function () {
                    v(a, p.$modelValue);
                    q(p.$viewChangeListeners, function (a) {
                        try {
                            a()
                        } catch (d) {
                            c(d)
                        }
                    })
                };
                this.$setViewValue = function (a, c) {
                    p.$viewValue = a;
                    p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(c)
                };
                this.$$debounceViewValueCommit =
                    function (c) {
                        var d = 0, e = p.$options;
                        e && y(e.debounce) && (e = e.debounce, Q(e) ? d = e : Q(e[c]) ? d = e[c] : Q(e["default"]) && (d = e["default"]));
                        h.cancel(P);
                        d ? P = h(function () {
                            p.$commitViewValue()
                        }, d) : l.$$phase ? p.$commitViewValue() : a.$apply(function () {
                            p.$commitViewValue()
                        })
                    };
                a.$watch(function () {
                    var c = u(a);
                    if (c !== p.$modelValue && (p.$modelValue === p.$modelValue || c === c)) {
                        p.$modelValue = p.$$rawModelValue = c;
                        t = s;
                        for (var d = p.$formatters, e = d.length, f = c; e--;)f = d[e](f);
                        p.$viewValue !== f && (p.$viewValue = p.$$lastCommittedViewValue = f, p.$render(),
                            p.$$runValidators(c, f, A))
                    }
                    return c
                })
            }], Ae = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: ig,
                priority: 1,
                compile: function (c) {
                    c.addClass(Ra).addClass("ng-untouched").addClass(ob);
                    return {
                        pre: function (a, c, f, g) {
                            var h = g[0], l = g[1] || Lb;
                            h.$$setOptions(g[2] && g[2].$options);
                            l.$addControl(h);
                            f.$observe("name", function (a) {
                                h.$name !== a && l.$$renameControl(h, a)
                            });
                            a.$on("$destroy", function () {
                                l.$removeControl(h)
                            })
                        }, post: function (c, e, f, g) {
                            var h = g[0];
                            if (h.$options &&
                                h.$options.updateOn)e.on(h.$options.updateOn, function (a) {
                                h.$$debounceViewValueCommit(a && a.type)
                            });
                            e.on("blur", function (e) {
                                h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched))
                            })
                        }
                    }
                }
            }
        }], jg = /(\s+|^)default(\s+|$)/, Ee = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (a, c) {
                    var d = this;
                    this.$options = a.$eval(c.ngModelOptions);
                    this.$options.updateOn !== s ? (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(jg, function () {
                        d.$options.updateOnDefault = !0;
                        return " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, qe = Ia({terminal: !0, priority: 1E3}), re = ["$locale", "$interpolate", function (a, c) {
            var d = /{}/g, e = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA", link: function (f, g, h) {
                    function l(a) {
                        g.text(a || "")
                    }

                    var k = h.count, m = h.$attr.when && g.attr(h.$attr.when), r = h.offset || 0, n = f.$eval(m) || {}, u = {}, m = c.startSymbol(), s = c.endSymbol(), y = m + k + "-" + r + s, t = ba.noop, p;
                    q(h, function (a, c) {
                        var d = e.exec(c);
                        d && (d = (d[1] ? "-" : "") + L(d[2]), n[d] = g.attr(h.$attr[c]))
                    });
                    q(n, function (a, e) {
                        u[e] = c(a.replace(d,
                            y))
                    });
                    f.$watch(k, function (c) {
                        c = parseFloat(c);
                        var d = isNaN(c);
                        d || c in n || (c = a.pluralCat(c - r));
                        c === p || d && isNaN(p) || (t(), t = f.$watch(u[c], l), p = c)
                    })
                }
            }
        }], se = ["$parse", "$animate", function (a, c) {
            var d = F("ngRepeat"), e = function (a, c, d, e, k, m, q) {
                a[d] = e;
                k && (a[k] = m);
                a.$index = c;
                a.$first = 0 === c;
                a.$last = c === q - 1;
                a.$middle = !(a.$first || a.$last);
                a.$odd = !(a.$even = 0 === (c & 1))
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function (f, g) {
                    var h = g.ngRepeat, l = V.createComment(" end ngRepeat: " +
                        h + " "), k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!k)throw d("iexp", h);
                    var m = k[1], r = k[2], n = k[3], u = k[4], k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!k)throw d("iidexp", m);
                    var v = k[3] || k[1], y = k[2];
                    if (n && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw d("badident", n);
                    var t, p, H, F, B = {$id: Na};
                    u ? t = a(u) : (H = function (a, c) {
                        return Na(c)
                    },
                        F = function (a) {
                            return a
                        });
                    return function (a, f, g, k, m) {
                        t && (p = function (c, d, e) {
                            y && (B[y] = c);
                            B[v] = d;
                            B.$index = e;
                            return t(a, B)
                        });
                        var u = ga();
                        a.$watchCollection(r, function (g) {
                            var k, r, t = f[0], G, B = ga(), x, C, A, N, E, w, I;
                            n && (a[n] = g);
                            if (Sa(g))E = g, r = p || H; else {
                                r = p || F;
                                E = [];
                                for (I in g)g.hasOwnProperty(I) && "$" != I.charAt(0) && E.push(I);
                                E.sort()
                            }
                            x = E.length;
                            I = Array(x);
                            for (k = 0; k < x; k++)if (C = g === E ? k : E[k], A = g[C], N = r(C, A, k), u[N])w = u[N], delete u[N], B[N] = w, I[k] = w; else {
                                if (B[N])throw q(I, function (a) {
                                    a && a.scope && (u[a.id] = a)
                                }), d("dupes",
                                    h, N, A);
                                I[k] = {id: N, scope: s, clone: s};
                                B[N] = !0
                            }
                            for (G in u) {
                                w = u[G];
                                N = ub(w.clone);
                                c.leave(N);
                                if (N[0].parentNode)for (k = 0, r = N.length; k < r; k++)N[k].$$NG_REMOVED = !0;
                                w.scope.$destroy()
                            }
                            for (k = 0; k < x; k++)if (C = g === E ? k : E[k], A = g[C], w = I[k], w.scope) {
                                G = t;
                                do G = G.nextSibling; while (G && G.$$NG_REMOVED);
                                w.clone[0] != G && c.move(ub(w.clone), null, z(t));
                                t = w.clone[w.clone.length - 1];
                                e(w.scope, k, v, A, y, C, x)
                            } else m(function (a, d) {
                                w.scope = d;
                                var f = l.cloneNode(!1);
                                a[a.length++] = f;
                                c.enter(a, null, z(t));
                                t = f;
                                w.clone = a;
                                B[w.id] = w;
                                e(w.scope, k, v,
                                    A, y, C, x)
                            });
                            u = B
                        })
                    }
                }
            }
        }], te = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (c, d, e) {
                    c.$watch(e.ngShow, function (c) {
                        a[c ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], me = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (c, d, e) {
                    c.$watch(e.ngHide, function (c) {
                        a[c ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], ue = Ia(function (a, c, d) {
            a.$watch(d.ngStyle, function (a, d) {
                d && a !== d && q(d, function (a, d) {
                    c.css(d,
                        "")
                });
                a && c.css(a)
            }, !0)
        }), ve = ["$animate", function (a) {
            return {
                restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (c, d, e, f) {
                    var g = [], h = [], l = [], k = [], m = function (a, c) {
                        return function () {
                            a.splice(c, 1)
                        }
                    };
                    c.$watch(e.ngSwitch || e.on, function (c) {
                        var d, e;
                        d = 0;
                        for (e = l.length; d < e; ++d)a.cancel(l[d]);
                        d = l.length = 0;
                        for (e = k.length; d < e; ++d) {
                            var s = ub(h[d].clone);
                            k[d].$destroy();
                            (l[d] = a.leave(s)).then(m(l, d))
                        }
                        h.length = 0;
                        k.length = 0;
                        (g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
                            c.transclude(function (d,
                                                   e) {
                                k.push(e);
                                var f = c.element;
                                d[d.length++] = V.createComment(" end ngSwitchWhen: ");
                                h.push({clone: d});
                                a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }], we = Ia({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, c, d, e, f) {
                e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
                e.cases["!" + d.ngSwitchWhen].push({transclude: f, element: c})
            }
        }), xe = Ia({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, c, d, e, f) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({
                    transclude: f,
                    element: c
                })
            }
        }), ze = Ia({
            restrict: "EAC", link: function (a, c, d, e, f) {
                if (!f)throw F("ngTransclude")("orphan", ta(c));
                f(function (a) {
                    c.empty();
                    c.append(a)
                })
            }
        }), $d = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (c, d) {
                    "text/ng-template" == d.type && a.put(d.id, c[0].text)
                }
            }
        }], kg = F("ngOptions"), ye = ca({restrict: "A", terminal: !0}), ae = ["$compile", "$parse", function (a, c) {
            var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                e = {$setViewValue: A};
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function (a, c, d) {
                    var l = this, k = {}, m = e, q;
                    l.databound = d.ngModel;
                    l.init = function (a, c, d) {
                        m = a;
                        q = d
                    };
                    l.addOption = function (c, d) {
                        Ma(c, '"option value"');
                        k[c] = !0;
                        m.$viewValue == c && (a.val(c), q.parent() && q.remove());
                        d && d[0].hasAttribute("selected") && (d[0].selected = !0)
                    };
                    l.removeOption = function (a) {
                        this.hasOption(a) && (delete k[a], m.$viewValue === a && this.renderUnknownOption(a))
                    };
                    l.renderUnknownOption = function (c) {
                        c =
                            "? " + Na(c) + " ?";
                        q.val(c);
                        a.prepend(q);
                        a.val(c);
                        q.prop("selected", !0)
                    };
                    l.hasOption = function (a) {
                        return k.hasOwnProperty(a)
                    };
                    c.$on("$destroy", function () {
                        l.renderUnknownOption = A
                    })
                }],
                link: function (e, g, h, l) {
                    function k(a, c, d, e) {
                        d.$render = function () {
                            var a = d.$viewValue;
                            e.hasOption(a) ? (B.parent() && B.remove(), c.val(a), "" === a && t.prop("selected", !0)) : null == a && t ? c.val("") : e.renderUnknownOption(a)
                        };
                        c.on("change", function () {
                            a.$apply(function () {
                                B.parent() && B.remove();
                                d.$setViewValue(c.val())
                            })
                        })
                    }

                    function m(a, c, d) {
                        var e;
                        d.$render = function () {
                            var a = new fb(d.$viewValue);
                            q(c.find("option"), function (c) {
                                c.selected = y(a.get(c.value))
                            })
                        };
                        a.$watch(function () {
                            fa(e, d.$viewValue) || (e = oa(d.$viewValue), d.$render())
                        });
                        c.on("change", function () {
                            a.$apply(function () {
                                var a = [];
                                q(c.find("option"), function (c) {
                                    c.selected && a.push(c.value)
                                });
                                d.$setViewValue(a)
                            })
                        })
                    }

                    function r(e, f, g) {
                        function h(a, c, d) {
                            U[A] = d;
                            I && (U[I] = c);
                            return a(e, U)
                        }

                        function k(a) {
                            var c;
                            if (u)if (L && w(a)) {
                                c = new fb([]);
                                for (var d = 0; d < a.length; d++)c.put(h(L, null, a[d]), !0)
                            } else c =
                                new fb(a); else L && (a = h(L, null, a));
                            return function (d, e) {
                                var f;
                                f = L ? L : z ? z : D;
                                return u ? y(c.remove(h(f, d, e))) : a === h(f, d, e)
                            }
                        }

                        function l() {
                            p || (e.$$postDigest(r), p = !0)
                        }

                        function m(a, c, d) {
                            a[c] = a[c] || 0;
                            a[c] += d ? 1 : -1
                        }

                        function r() {
                            p = !1;
                            var a = {"": []}, c = [""], d, l, s, t, v;
                            s = g.$viewValue;
                            t = O(e) || [];
                            var A = I ? Object.keys(t).sort() : t, w, z, E, D, S = {};
                            v = k(s);
                            var Q = !1, V, X;
                            R = {};
                            for (D = 0; E = A.length, D < E; D++) {
                                w = D;
                                if (I && (w = A[D], "$" === w.charAt(0)))continue;
                                z = t[w];
                                d = h(M, w, z) || "";
                                (l = a[d]) || (l = a[d] = [], c.push(d));
                                d = v(w, z);
                                Q = Q || d;
                                z = h(B, w, z);
                                z = y(z) ? z : "";
                                X = L ? L(e, U) : I ? A[D] : D;
                                L && (R[X] = w);
                                l.push({id: X, label: z, selected: d})
                            }
                            u || (x || null === s ? a[""].unshift({
                                id: "",
                                label: "",
                                selected: !Q
                            }) : Q || a[""].unshift({id: "?", label: "", selected: !0}));
                            w = 0;
                            for (A = c.length; w < A; w++) {
                                d = c[w];
                                l = a[d];
                                T.length <= w ? (s = {
                                    element: F.clone().attr("label", d),
                                    label: l.label
                                }, t = [s], T.push(t), f.append(s.element)) : (t = T[w], s = t[0], s.label != d && s.element.attr("label", s.label = d));
                                Q = null;
                                D = 0;
                                for (E = l.length; D < E; D++)d = l[D], (v = t[D + 1]) ? (Q = v.element, v.label !== d.label && (m(S, v.label, !1), m(S, d.label,
                                    !0), Q.text(v.label = d.label), Q.prop("label", v.label)), v.id !== d.id && Q.val(v.id = d.id), Q[0].selected !== d.selected && (Q.prop("selected", v.selected = d.selected), Qa && Q.prop("selected", v.selected))) : ("" === d.id && x ? V = x : (V = C.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), t.push(v = {
                                    element: V,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }), m(S, d.label, !0), Q ? Q.after(V) : s.element.append(V), Q = V);
                                for (D++; t.length > D;)d = t.pop(), m(S, d.label, !1), d.element.remove()
                            }
                            for (; T.length >
                                   w;) {
                                l = T.pop();
                                for (D = 1; D < l.length; ++D)m(S, l[D].label, !1);
                                l[0].element.remove()
                            }
                            q(S, function (a, c) {
                                0 < a ? n.addOption(c) : 0 > a && n.removeOption(c)
                            })
                        }

                        var t;
                        if (!(t = v.match(d)))throw kg("iexp", v, ta(f));
                        var B = c(t[2] || t[1]), A = t[4] || t[6], E = / as /.test(t[0]) && t[1], z = E ? c(E) : null, I = t[5], M = c(t[3] || ""), D = c(t[2] ? t[1] : A), O = c(t[7]), L = t[8] ? c(t[8]) : null, R = {}, T = [[{
                            element: f,
                            label: ""
                        }]], U = {};
                        x && (a(x)(e), x.removeClass("ng-scope"), x.remove());
                        f.empty();
                        f.on("change", function () {
                            e.$apply(function () {
                                var a = O(e) || [], c;
                                if (u)c = [], q(f.val(),
                                    function (d) {
                                        d = L ? R[d] : d;
                                        c.push("?" === d ? s : "" === d ? null : h(z ? z : D, d, a[d]))
                                    }); else {
                                    var d = L ? R[f.val()] : f.val();
                                    c = "?" === d ? s : "" === d ? null : h(z ? z : D, d, a[d])
                                }
                                g.$setViewValue(c);
                                r()
                            })
                        });
                        g.$render = r;
                        e.$watchCollection(O, l);
                        e.$watchCollection(function () {
                            var a = O(e), c;
                            if (a && w(a)) {
                                c = Array(a.length);
                                for (var d = 0, f = a.length; d < f; d++)c[d] = h(B, d, a[d])
                            } else if (a)for (d in c = {}, a)a.hasOwnProperty(d) && (c[d] = h(B, d, a[d]));
                            return c
                        }, l);
                        u && e.$watchCollection(function () {
                            return g.$modelValue
                        }, l)
                    }

                    if (l[1]) {
                        var n = l[0];
                        l = l[1];
                        var u = h.multiple,
                            v = h.ngOptions, x = !1, t, p = !1, C = z(V.createElement("option")), F = z(V.createElement("optgroup")), B = C.clone();
                        h = 0;
                        for (var A = g.children(), E = A.length; h < E; h++)if ("" === A[h].value) {
                            t = x = A.eq(h);
                            break
                        }
                        n.init(l, x, B);
                        u && (l.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        });
                        v ? r(e, g, l) : u ? m(e, g, l) : k(e, g, l, n)
                    }
                }
            }
        }], ce = ["$interpolate", function (a) {
            var c = {addOption: A, removeOption: A};
            return {
                restrict: "E", priority: 100, compile: function (d, e) {
                    if (C(e.value)) {
                        var f = a(d.text(), !0);
                        f || e.$set("value", d.text())
                    }
                    return function (a, d, e) {
                        var k =
                            d.parent(), m = k.data("$selectController") || k.parent().data("$selectController");
                        m && m.databound || (m = c);
                        f ? a.$watch(f, function (a, c) {
                            e.$set("value", a);
                            c !== a && m.removeOption(c);
                            m.addOption(a, d)
                        }) : m.addOption(e.value, d);
                        d.on("$destroy", function () {
                            m.removeOption(e.value)
                        })
                    }
                }
            }
        }], be = ca({restrict: "E", terminal: !1}), Ec = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    e && (d.required = !0, e.$validators.required = function (a, c) {
                        return !d.required || !e.$isEmpty(c)
                    }, d.$observe("required", function () {
                        e.$validate()
                    }))
                }
            }
        },
        Dc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f, g = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            O(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test)throw F("ngPattern")("noregexp", g, a, ta(c));
                            f = a || s;
                            e.$validate()
                        });
                        e.$validators.pattern = function (a) {
                            return e.$isEmpty(a) || C(f) || f.test(a)
                        }
                    }
                }
            }
        }, Gc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f = -1;
                        d.$observe("maxlength", function (a) {
                            a = aa(a);
                            f = isNaN(a) ? -1 : a;
                            e.$validate()
                        });
                        e.$validators.maxlength = function (a, c) {
                            return 0 > f || e.$isEmpty(c) || c.length <= f
                        }
                    }
                }
            }
        }, Fc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f = 0;
                        d.$observe("minlength", function (a) {
                            f = aa(a) || 0;
                            e.$validate()
                        });
                        e.$validators.minlength = function (a, c) {
                            return e.$isEmpty(c) || c.length >= f
                        }
                    }
                }
            }
        };
    T.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Sd(), Ud(ba), z(V).ready(function () {
        Od(V, xc)
    }))
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/* Routes
 AngularJS v1.3.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (q, d, C) {
    'use strict';
    function v(r, k, h) {
        return {
            restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (a, f, b, c, y) {
                function z() {
                    l && (h.cancel(l), l = null);
                    m && (m.$destroy(), m = null);
                    n && (l = h.leave(n), l.then(function () {
                        l = null
                    }), n = null)
                }

                function x() {
                    var b = r.current && r.current.locals;
                    if (d.isDefined(b && b.$template)) {
                        var b = a.$new(), c = r.current;
                        n = y(b, function (b) {
                            h.enter(b, null, n || f).then(function () {
                                !d.isDefined(t) || t && !a.$eval(t) || k()
                            });
                            z()
                        });
                        m = c.scope = b;
                        m.$emit("$viewContentLoaded");
                        m.$eval(w)
                    } else z()
                }

                var m, n, l, t = b.autoscroll, w = b.onload || "";
                a.$on("$routeChangeSuccess", x);
                x()
            }
        }
    }

    function A(d, k, h) {
        return {
            restrict: "ECA", priority: -400, link: function (a, f) {
                var b = h.current, c = b.locals;
                f.html(c.$template);
                var y = d(f.contents());
                b.controller && (c.$scope = a, c = k(b.controller, c), b.controllerAs && (a[b.controllerAs] = c), f.data("$ngControllerController", c), f.children().data("$ngControllerController", c));
                y(a)
            }
        }
    }

    q = d.module("ngRoute", ["ng"]).provider("$route", function () {
        function r(a, f) {
            return d.extend(Object.create(a),
                f)
        }

        function k(a, d) {
            var b = d.caseInsensitiveMatch, c = {originalPath: a, regexp: a}, h = c.keys = [];
            a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (a, d, b, c) {
                a = "?" === c ? c : null;
                c = "*" === c ? c : null;
                h.push({name: b, optional: !!a});
                d = d || "";
                return "" + (a ? "" : d) + "(?:" + (a ? d : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "")
            }).replace(/([\/$\*])/g, "\\$1");
            c.regexp = new RegExp("^" + a + "$", b ? "i" : "");
            return c
        }

        var h = {};
        this.when = function (a, f) {
            var b = d.copy(f);
            d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0);
            d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch);
            h[a] = d.extend(b, a && k(a, b));
            if (a) {
                var c = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                h[c] = d.extend({redirectTo: a}, k(c, b))
            }
            return this
        };
        this.caseInsensitiveMatch = !1;
        this.otherwise = function (a) {
            "string" === typeof a && (a = {redirectTo: a});
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (a, f, b, c, k, q, x) {
            function m(b) {
                var e = s.current;
                (v = (p = l()) && e && p.$$route === e.$$route && d.equals(p.pathParams, e.pathParams) && !p.reloadOnSearch && !w) || !e && !p || a.$broadcast("$routeChangeStart", p, e).defaultPrevented && b && b.preventDefault()
            }

            function n() {
                var u = s.current, e = p;
                if (v)u.params = e.params, d.copy(u.params, b), a.$broadcast("$routeUpdate", u); else if (e || u)w = !1, (s.current = e) && e.redirectTo && (d.isString(e.redirectTo) ? f.path(t(e.redirectTo, e.params)).search(e.params).replace() : f.url(e.redirectTo(e.pathParams, f.path(), f.search())).replace()), c.when(e).then(function () {
                    if (e) {
                        var a =
                            d.extend({}, e.resolve), b, g;
                        d.forEach(a, function (b, e) {
                            a[e] = d.isString(b) ? k.get(b) : k.invoke(b, null, null, e)
                        });
                        d.isDefined(b = e.template) ? d.isFunction(b) && (b = b(e.params)) : d.isDefined(g = e.templateUrl) && (d.isFunction(g) && (g = g(e.params)), g = x.getTrustedResourceUrl(g), d.isDefined(g) && (e.loadedTemplateUrl = g, b = q(g)));
                        d.isDefined(b) && (a.$template = b);
                        return c.all(a)
                    }
                }).then(function (c) {
                    e == s.current && (e && (e.locals = c, d.copy(e.params, b)), a.$broadcast("$routeChangeSuccess", e, u))
                }, function (b) {
                    e == s.current && a.$broadcast("$routeChangeError",
                        e, u, b)
                })
            }

            function l() {
                var a, b;
                d.forEach(h, function (c, h) {
                    var g;
                    if (g = !b) {
                        var k = f.path();
                        g = c.keys;
                        var m = {};
                        if (c.regexp)if (k = c.regexp.exec(k)) {
                            for (var l = 1, n = k.length; l < n; ++l) {
                                var p = g[l - 1], q = k[l];
                                p && q && (m[p.name] = q)
                            }
                            g = m
                        } else g = null; else g = null;
                        g = a = g
                    }
                    g && (b = r(c, {params: d.extend({}, f.search(), a), pathParams: a}), b.$$route = c)
                });
                return b || h[null] && r(h[null], {params: {}, pathParams: {}})
            }

            function t(a, b) {
                var c = [];
                d.forEach((a || "").split(":"), function (a, d) {
                    if (0 === d)c.push(a); else {
                        var f = a.match(/(\w+)(?:[?*])?(.*)/),
                            h = f[1];
                        c.push(b[h]);
                        c.push(f[2] || "");
                        delete b[h]
                    }
                });
                return c.join("")
            }

            var w = !1, p, v, s = {
                routes: h, reload: function () {
                    w = !0;
                    a.$evalAsync(function () {
                        m();
                        n()
                    })
                }, updateParams: function (a) {
                    if (this.current && this.current.$$route)a = d.extend({}, this.current.params, a), f.path(t(this.current.$$route.originalPath, a)), f.search(a); else throw B("norout");
                }
            };
            a.$on("$locationChangeStart", m);
            a.$on("$locationChangeSuccess", n);
            return s
        }]
    });
    var B = d.$$minErr("ngRoute");
    q.provider("$routeParams", function () {
        this.$get = function () {
            return {}
        }
    });
    q.directive("ngView", v);
    q.directive("ngView", A);
    v.$inject = ["$route", "$anchorScroll", "$animate"];
    A.$inject = ["$compile", "$controller", "$route"]
})(window, window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function () {
    "use strict";
    var t = this, i = t.Chart, e = function (t) {
        this.canvas = t.canvas, this.ctx = t;
        var i = function (t, i) {
            return t["offset" + i] ? t["offset" + i] : document.defaultView.getComputedStyle(t).getPropertyValue(i)
        }, e = this.width = i(t.canvas, "Width"), n = this.height = i(t.canvas, "Height");
        t.canvas.width = e, t.canvas.height = n;
        var e = this.width = t.canvas.width, n = this.height = t.canvas.height;
        return this.aspectRatio = this.width / this.height, s.retinaScale(this), this
    };
    e.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function () {
            },
            onAnimationComplete: function () {
            }
        }
    }, e.types = {};
    var s = e.helpers = {}, n = s.each = function (t, i, e) {
        var s = Array.prototype.slice.call(arguments, 3);
        if (t)if (t.length === +t.length) {
            var n;
            for (n = 0; n < t.length; n++)i.apply(e, [t[n], n].concat(s))
        } else for (var o in t)i.apply(e, [t[o], o].concat(s))
    }, o = s.clone = function (t) {
        var i = {};
        return n(t, function (e, s) {
            t.hasOwnProperty(s) && (i[s] = e)
        }), i
    }, a = s.extend = function (t) {
        return n(Array.prototype.slice.call(arguments, 1), function (i) {
            n(i, function (e, s) {
                i.hasOwnProperty(s) && (t[s] = e)
            })
        }), t
    }, h = s.merge = function () {
        var t = Array.prototype.slice.call(arguments, 0);
        return t.unshift({}), a.apply(null, t)
    }, l = s.indexOf = function (t, i) {
        if (Array.prototype.indexOf)return t.indexOf(i);
        for (var e = 0; e < t.length; e++)if (t[e] === i)return e;
        return -1
    }, r = (s.where = function (t, i) {
        var e = [];
        return s.each(t, function (t) {
            i(t) && e.push(t)
        }), e
    }, s.findNextWhere = function (t, i, e) {
        e || (e = -1);
        for (var s = e + 1; s < t.length; s++) {
            var n = t[s];
            if (i(n))return n
        }
    }, s.findPreviousWhere = function (t, i, e) {
        e || (e = t.length);
        for (var s = e - 1; s >= 0; s--) {
            var n = t[s];
            if (i(n))return n
        }
    }, s.inherits = function (t) {
        var i = this, e = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return i.apply(this, arguments)
        }, s = function () {
            this.constructor = e
        };
        return s.prototype = i.prototype, e.prototype = new s, e.extend = r, t && a(e.prototype, t), e.__super__ = i.prototype, e
    }), c = s.noop = function () {
    }, u = s.uid = function () {
        var t = 0;
        return function () {
            return "chart-" + t++
        }
    }(), d = s.warn = function (t) {
        window.console && "function" == typeof window.console.warn && console.warn(t)
    }, p = s.amd = "function" == typeof define && define.amd, f = s.isNumber = function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }, g = s.max = function (t) {
        return Math.max.apply(Math, t)
    }, m = s.min = function (t) {
        return Math.min.apply(Math, t)
    }, v = (s.cap = function (t, i, e) {
        if (f(i)) {
            if (t > i)return i
        } else if (f(e) && e > t)return e;
        return t
    }, s.getDecimalPlaces = function (t) {
        return t % 1 !== 0 && f(t) ? t.toString().split(".")[1].length : 0
    }), S = s.radians = function (t) {
        return t * (Math.PI / 180)
    }, x = (s.getAngleFromPoint = function (t, i) {
        var e = i.x - t.x, s = i.y - t.y, n = Math.sqrt(e * e + s * s), o = 2 * Math.PI + Math.atan2(s, e);
        return 0 > e && 0 > s && (o += 2 * Math.PI), {angle: o, distance: n}
    }, s.aliasPixel = function (t) {
        return t % 2 === 0 ? 0 : .5
    }), y = (s.splineCurve = function (t, i, e, s) {
        var n = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2)), o = Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2)), a = s * n / (n + o), h = s * o / (n + o);
        return {
            inner: {x: i.x - a * (e.x - t.x), y: i.y - a * (e.y - t.y)},
            outer: {x: i.x + h * (e.x - t.x), y: i.y + h * (e.y - t.y)}
        }
    }, s.calculateOrderOfMagnitude = function (t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }), C = (s.calculateScaleRange = function (t, i, e, s, n) {
        var o = 2, a = Math.floor(i / (1.5 * e)), h = o >= a, l = g(t), r = m(t);
        l === r && (l += .5, r >= .5 && !s ? r -= .5 : l += .5);
        for (var c = Math.abs(l - r), u = y(c), d = Math.ceil(l / (1 * Math.pow(10, u))) * Math.pow(10, u), p = s ? 0 : Math.floor(r / (1 * Math.pow(10, u))) * Math.pow(10, u), f = d - p, v = Math.pow(10, u), S = Math.round(f / v); (S > a || a > 2 * S) && !h;)if (S > a)v *= 2, S = Math.round(f / v), S % 1 !== 0 && (h = !0); else if (n && u >= 0) {
            if (v / 2 % 1 !== 0)break;
            v /= 2, S = Math.round(f / v)
        } else v /= 2, S = Math.round(f / v);
        return h && (S = o, v = f / S), {steps: S, stepValue: v, min: p, max: p + S * v}
    }, s.template = function (t, i) {
        function e(t, i) {
            var e = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : s[t] = s[t];
            return i ? e(i) : e
        }

        if (t instanceof Function)return t(i);
        var s = {};
        return e(t, i)
    }), w = (s.generateLabels = function (t, i, e, s) {
        var o = new Array(i);
        return labelTemplateString && n(o, function (i, n) {
            o[n] = C(t, {value: e + s * (n + 1)})
        }), o
    }, s.easingEffects = {
        linear: function (t) {
            return t
        }, easeInQuad: function (t) {
            return t * t
        }, easeOutQuad: function (t) {
            return -1 * t * (t - 2)
        }, easeInOutQuad: function (t) {
            return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
        }, easeInCubic: function (t) {
            return t * t * t
        }, easeOutCubic: function (t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1)
        }, easeInOutCubic: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, easeInQuart: function (t) {
            return t * t * t * t
        }, easeOutQuart: function (t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1)
        }, easeInOutQuart: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
        }, easeInQuint: function (t) {
            return 1 * (t /= 1) * t * t * t * t
        }, easeOutQuint: function (t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
        }, easeInOutQuint: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, easeInSine: function (t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
        }, easeOutSine: function (t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2))
        }, easeInOutSine: function (t) {
            return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
        }, easeInExpo: function (t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
        }, easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
        }, easeInOutExpo: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
        }, easeInCirc: function (t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
        }, easeOutCirc: function (t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
        }, easeInOutCirc: function (t) {
            return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, easeInElastic: function (t) {
            var i = 1.70158, e = 0, s = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e)))
        }, easeOutElastic: function (t) {
            var i = 1.70158, e = 0, s = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), s * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - i) * Math.PI / e) + 1)
        }, easeInOutElastic: function (t) {
            var i = 1.70158, e = 0, s = 1;
            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (e || (e = .3 * 1.5), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) * .5 + 1)
        }, easeInBack: function (t) {
            var i = 1.70158;
            return 1 * (t /= 1) * t * ((i + 1) * t - i)
        }, easeOutBack: function (t) {
            var i = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((i + 1) * t + i) + 1)
        }, easeInOutBack: function (t) {
            var i = 1.70158;
            return (t /= .5) < 1 ? .5 * t * t * (((i *= 1.525) + 1) * t - i) : .5 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2)
        }, easeInBounce: function (t) {
            return 1 - w.easeOutBounce(1 - t)
        }, easeOutBounce: function (t) {
            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }, easeInOutBounce: function (t) {
            return .5 > t ? .5 * w.easeInBounce(2 * t) : .5 * w.easeOutBounce(2 * t - 1) + .5
        }
    }), b = s.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                return window.setTimeout(t, 1e3 / 60)
            }
    }(), P = s.cancelAnimFrame = function () {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
                return window.clearTimeout(t, 1e3 / 60)
            }
    }(), L = (s.animationLoop = function (t, i, e, s, n, o) {
        var a = 0, h = w[e] || w.linear, l = function () {
            a++;
            var e = a / i, r = h(e);
            t.call(o, r, e, a), s.call(o, r, e), i > a ? o.animationFrame = b(l) : n.apply(o)
        };
        b(l)
    }, s.getRelativePosition = function (t) {
        var i, e, s = t.originalEvent || t, n = t.currentTarget || t.srcElement, o = n.getBoundingClientRect();
        return s.touches ? (i = s.touches[0].clientX - o.left, e = s.touches[0].clientY - o.top) : (i = s.clientX - o.left, e = s.clientY - o.top), {
            x: i,
            y: e
        }
    }, s.addEvent = function (t, i, e) {
        t.addEventListener ? t.addEventListener(i, e) : t.attachEvent ? t.attachEvent("on" + i, e) : t["on" + i] = e
    }), k = s.removeEvent = function (t, i, e) {
        t.removeEventListener ? t.removeEventListener(i, e, !1) : t.detachEvent ? t.detachEvent("on" + i, e) : t["on" + i] = c
    }, F = (s.bindEvents = function (t, i, e) {
        t.events || (t.events = {}), n(i, function (i) {
            t.events[i] = function () {
                e.apply(t, arguments)
            }, L(t.chart.canvas, i, t.events[i])
        })
    }, s.unbindEvents = function (t, i) {
        n(i, function (i, e) {
            k(t.chart.canvas, e, i)
        })
    }), R = s.getMaximumWidth = function (t) {
        var i = t.parentNode;
        return i.clientWidth
    }, T = s.getMaximumHeight = function (t) {
        var i = t.parentNode;
        return i.clientHeight
    }, A = (s.getMaximumSize = s.getMaximumWidth, s.retinaScale = function (t) {
        var i = t.ctx, e = t.canvas.width, s = t.canvas.height;
        window.devicePixelRatio && (i.canvas.style.width = e + "px", i.canvas.style.height = s + "px", i.canvas.height = s * window.devicePixelRatio, i.canvas.width = e * window.devicePixelRatio, i.scale(window.devicePixelRatio, window.devicePixelRatio))
    }), M = s.clear = function (t) {
        t.ctx.clearRect(0, 0, t.width, t.height)
    }, W = s.fontString = function (t, i, e) {
        return i + " " + t + "px " + e
    }, z = s.longestText = function (t, i, e) {
        t.font = i;
        var s = 0;
        return n(e, function (i) {
            var e = t.measureText(i).width;
            s = e > s ? e : s
        }), s
    }, B = s.drawRoundedRectangle = function (t, i, e, s, n, o) {
        t.beginPath(), t.moveTo(i + o, e), t.lineTo(i + s - o, e), t.quadraticCurveTo(i + s, e, i + s, e + o), t.lineTo(i + s, e + n - o), t.quadraticCurveTo(i + s, e + n, i + s - o, e + n), t.lineTo(i + o, e + n), t.quadraticCurveTo(i, e + n, i, e + n - o), t.lineTo(i, e + o), t.quadraticCurveTo(i, e, i + o, e), t.closePath()
    };
    e.instances = {}, e.Type = function (t, i, s) {
        this.options = i, this.chart = s, this.id = u(), e.instances[this.id] = this, i.responsive && this.resize(), this.initialize.call(this, t)
    }, a(e.Type.prototype, {
        initialize: function () {
            return this
        }, clear: function () {
            return M(this.chart), this
        }, stop: function () {
            return P(this.animationFrame), this
        }, resize: function (t) {
            this.stop();
            var i = this.chart.canvas, e = R(this.chart.canvas), s = this.options.maintainAspectRatio ? e / this.chart.aspectRatio : T(this.chart.canvas);
            return i.width = this.chart.width = e, i.height = this.chart.height = s, A(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
        }, reflow: c, render: function (t) {
            return t && this.reflow(), this.options.animation && !t ? s.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
        }, generateLegend: function () {
            return C(this.options.legendTemplate, this)
        }, destroy: function () {
            this.clear(), F(this, this.events);
            var t = this.chart.canvas;
            t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete e.instances[this.id]
        }, showTooltip: function (t, i) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var o = function (t) {
                var i = !1;
                return t.length !== this.activeElements.length ? i = !0 : (n(t, function (t, e) {
                    t !== this.activeElements[e] && (i = !0)
                }, this), i)
            }.call(this, t);
            if (o || i) {
                if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)if (this.datasets && this.datasets.length > 1) {
                    for (var a, h, r = this.datasets.length - 1; r >= 0 && (a = this.datasets[r].points || this.datasets[r].bars || this.datasets[r].segments, h = l(a, t[0]), -1 === h); r--);
                    var c = [], u = [], d = function () {
                        var t, i, e, n, o, a = [], l = [], r = [];
                        return s.each(this.datasets, function (i) {
                            t = i.points || i.bars || i.segments, t[h] && t[h].hasValue() && a.push(t[h])
                        }), s.each(a, function (t) {
                            l.push(t.x), r.push(t.y), c.push(s.template(this.options.multiTooltipTemplate, t)), u.push({
                                fill: t._saved.fillColor || t.fillColor,
                                stroke: t._saved.strokeColor || t.strokeColor
                            })
                        }, this), o = m(r), e = g(r), n = m(l), i = g(l), {
                            x: n > this.chart.width / 2 ? n : i,
                            y: (o + e) / 2
                        }
                    }.call(this, h);
                    new e.MultiTooltip({
                        x: d.x,
                        y: d.y,
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        xOffset: this.options.tooltipXOffset,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        titleTextColor: this.options.tooltipTitleFontColor,
                        titleFontFamily: this.options.tooltipTitleFontFamily,
                        titleFontStyle: this.options.tooltipTitleFontStyle,
                        titleFontSize: this.options.tooltipTitleFontSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        labels: c,
                        legendColors: u,
                        legendColorBackground: this.options.multiTooltipKeyBackground,
                        title: t[0].label,
                        chart: this.chart,
                        ctx: this.chart.ctx,
                        custom: this.options.customTooltips
                    }).draw()
                } else n(t, function (t) {
                    var i = t.tooltipPosition();
                    new e.Tooltip({
                        x: Math.round(i.x),
                        y: Math.round(i.y),
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        caretHeight: this.options.tooltipCaretSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        text: C(this.options.tooltipTemplate, t),
                        chart: this.chart,
                        custom: this.options.customTooltips
                    }).draw()
                }, this);
                return this
            }
        }, toBase64Image: function () {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }), e.Type.extend = function (t) {
        var i = this, s = function () {
            return i.apply(this, arguments)
        };
        if (s.prototype = o(i.prototype), a(s.prototype, t), s.extend = e.Type.extend, t.name || i.prototype.name) {
            var n = t.name || i.prototype.name, l = e.defaults[i.prototype.name] ? o(e.defaults[i.prototype.name]) : {};
            e.defaults[n] = a(l, t.defaults), e.types[n] = s, e.prototype[n] = function (t, i) {
                var o = h(e.defaults.global, e.defaults[n], i || {});
                return new s(t, o, this)
            }
        } else d("Name not provided for this chart, so it hasn't been registered");
        return i
    }, e.Element = function (t) {
        a(this, t), this.initialize.apply(this, arguments), this.save()
    }, a(e.Element.prototype, {
        initialize: function () {
        }, restore: function (t) {
            return t ? n(t, function (t) {
                this[t] = this._saved[t]
            }, this) : a(this, this._saved), this
        }, save: function () {
            return this._saved = o(this), delete this._saved._saved, this
        }, update: function (t) {
            return n(t, function (t, i) {
                this._saved[i] = this[i], this[i] = t
            }, this), this
        }, transition: function (t, i) {
            return n(t, function (t, e) {
                this[e] = (t - this._saved[e]) * i + this._saved[e]
            }, this), this
        }, tooltipPosition: function () {
            return {x: this.x, y: this.y}
        }, hasValue: function () {
            return f(this.value)
        }
    }), e.Element.extend = r, e.Point = e.Element.extend({
        display: !0, inRange: function (t, i) {
            var e = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(i - this.y, 2) < Math.pow(e, 2)
        }, draw: function () {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
            }
        }
    }), e.Arc = e.Element.extend({
        inRange: function (t, i) {
            var e = s.getAngleFromPoint(this, {
                x: t,
                y: i
            }), n = e.angle >= this.startAngle && e.angle <= this.endAngle, o = e.distance >= this.innerRadius && e.distance <= this.outerRadius;
            return n && o
        }, tooltipPosition: function () {
            var t = this.startAngle + (this.endAngle - this.startAngle) / 2, i = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {x: this.x + Math.cos(t) * i, y: this.y + Math.sin(t) * i}
        }, draw: function (t) {
            var i = this.ctx;
            i.beginPath(), i.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), i.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), i.closePath(), i.strokeStyle = this.strokeColor, i.lineWidth = this.strokeWidth, i.fillStyle = this.fillColor, i.fill(), i.lineJoin = "bevel", this.showStroke && i.stroke()
        }
    }), e.Rectangle = e.Element.extend({
        draw: function () {
            var t = this.ctx, i = this.width / 2, e = this.x - i, s = this.x + i, n = this.base - (this.base - this.y), o = this.strokeWidth / 2;
            this.showStroke && (e += o, s -= o, n += o), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(e, this.base), t.lineTo(e, n), t.lineTo(s, n), t.lineTo(s, this.base), t.fill(), this.showStroke && t.stroke()
        }, height: function () {
            return this.base - this.y
        }, inRange: function (t, i) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && i >= this.y && i <= this.base
        }
    }), e.Tooltip = e.Element.extend({
        draw: function () {
            var t = this.chart.ctx;
            t.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var i = this.caretPadding = 2, e = t.measureText(this.text).width + 2 * this.xPadding, s = this.fontSize + 2 * this.yPadding, n = s + this.caretHeight + i;
            this.x + e / 2 > this.chart.width ? this.xAlign = "left" : this.x - e / 2 < 0 && (this.xAlign = "right"), this.y - n < 0 && (this.yAlign = "below");
            var o = this.x - e / 2, a = this.y - n;
            if (t.fillStyle = this.fillColor, this.custom)this.custom(this); else {
                switch (this.yAlign) {
                    case"above":
                        t.beginPath(), t.moveTo(this.x, this.y - i), t.lineTo(this.x + this.caretHeight, this.y - (i + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (i + this.caretHeight)), t.closePath(), t.fill();
                        break;
                    case"below":
                        a = this.y + i + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + i), t.lineTo(this.x + this.caretHeight, this.y + i + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + i + this.caretHeight), t.closePath(), t.fill()
                }
                switch (this.xAlign) {
                    case"left":
                        o = this.x - e + (this.cornerRadius + this.caretHeight);
                        break;
                    case"right":
                        o = this.x - (this.cornerRadius + this.caretHeight)
                }
                B(t, o, a, e, s, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, o + e / 2, a + s / 2)
            }
        }
    }), e.MultiTooltip = e.Element.extend({
        initialize: function () {
            this.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = W(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width, i = z(this.ctx, this.font, this.labels) + this.fontSize + 3, e = g([i, t]);
            this.width = e + 2 * this.xPadding;
            var s = this.height / 2;
            this.y - s < 0 ? this.y = s : this.y + s > this.chart.height && (this.y = this.chart.height - s), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        }, getLineHeight: function (t) {
            var i = this.y - this.height / 2 + this.yPadding, e = t - 1;
            return 0 === t ? i + this.titleFontSize / 2 : i + (1.5 * this.fontSize * e + this.fontSize / 2) + 1.5 * this.titleFontSize
        }, draw: function () {
            if (this.custom)this.custom(this); else {
                B(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, s.each(this.labels, function (i, e) {
                    t.fillStyle = this.textColor, t.fillText(i, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(e + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[e].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    }), e.Scale = e.Element.extend({
        initialize: function () {
            this.fit()
        }, buildYLabels: function () {
            this.yLabels = [];
            for (var t = v(this.stepValue), i = 0; i <= this.steps; i++)this.yLabels.push(C(this.templateString, {value: (this.min + i * this.stepValue).toFixed(t)}));
            this.yLabelWidth = this.display && this.showLabels ? z(this.ctx, this.font, this.yLabels) : 0
        }, addXLabel: function (t) {
            this.xLabels.push(t), this.valuesCount++, this.fit()
        }, removeXLabel: function () {
            this.xLabels.shift(), this.valuesCount--, this.fit()
        }, fit: function () {
            this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var t, i = this.endPoint - this.startPoint;
            for (this.calculateYRange(i), this.buildYLabels(), this.calculateXLabelRotation(); i > this.endPoint - this.startPoint;)i = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(i), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
        }, calculateXLabelRotation: function () {
            this.ctx.font = this.font;
            var t, i, e = this.ctx.measureText(this.xLabels[0]).width, s = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = s / 2 + 3, this.xScalePaddingLeft = e / 2 > this.yLabelWidth + 10 ? e / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                var n, o = z(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = o;
                for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0;)n = Math.cos(S(this.xLabelRotation)), t = n * e, i = n * s, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * o;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(S(this.xLabelRotation)) * o + 3)
            } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
        }, calculateYRange: c, drawingArea: function () {
            return this.startPoint - this.endPoint
        }, calculateY: function (t) {
            var i = this.drawingArea() / (this.min - this.max);
            return this.endPoint - i * (t - this.min)
        }, calculateX: function (t) {
            var i = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)), e = i / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1), s = e * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (s += e / 2), Math.round(s)
        }, update: function (t) {
            s.extend(this, t), this.fit()
        }, draw: function () {
            var t = this.ctx, i = (this.endPoint - this.startPoint) / this.steps, e = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor, t.font = this.font, n(this.yLabels, function (n, o) {
                var a = this.endPoint - i * o, h = Math.round(a), l = this.showHorizontalLines;
                t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(n, e - 10, a), 0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), h += s.aliasPixel(t.lineWidth), l && (t.moveTo(e, h), t.lineTo(this.width, h), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(e - 5, h), t.lineTo(e, h), t.stroke(), t.closePath()
            }, this), n(this.xLabels, function (i, e) {
                var s = this.calculateX(e) + x(this.lineWidth), n = this.calculateX(e - (this.offsetGridLines ? .5 : 0)) + x(this.lineWidth), o = this.xLabelRotation > 0, a = this.showVerticalLines;
                0 !== e || a || (a = !0), a && t.beginPath(), e > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a && (t.moveTo(n, this.endPoint), t.lineTo(n, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(n, this.endPoint), t.lineTo(n, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(s, o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * S(this.xLabelRotation)), t.font = this.font, t.textAlign = o ? "right" : "center", t.textBaseline = o ? "middle" : "top", t.fillText(i, 0, 0), t.restore()
            }, this))
        }
    }), e.RadialScale = e.Element.extend({
        initialize: function () {
            this.size = m([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        }, calculateCenterOffset: function (t) {
            var i = this.drawingArea / (this.max - this.min);
            return (t - this.min) * i
        }, update: function () {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
        }, buildYLabels: function () {
            this.yLabels = [];
            for (var t = v(this.stepValue), i = 0; i <= this.steps; i++)this.yLabels.push(C(this.templateString, {value: (this.min + i * this.stepValue).toFixed(t)}))
        }, getCircumference: function () {
            return 2 * Math.PI / this.valuesCount
        }, setScaleSize: function () {
            var t, i, e, s, n, o, a, h, l, r, c, u, d = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), p = this.width, g = 0;
            for (this.ctx.font = W(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++)t = this.getPointPosition(i, d), e = this.ctx.measureText(C(this.templateString, {value: this.labels[i]})).width + 5, 0 === i || i === this.valuesCount / 2 ? (s = e / 2, t.x + s > p && (p = t.x + s, n = i), t.x - s < g && (g = t.x - s, a = i)) : i < this.valuesCount / 2 ? t.x + e > p && (p = t.x + e, n = i) : i > this.valuesCount / 2 && t.x - e < g && (g = t.x - e, a = i);
            l = g, r = Math.ceil(p - this.width), o = this.getIndexAngle(n), h = this.getIndexAngle(a), c = r / Math.sin(o + Math.PI / 2), u = l / Math.sin(h + Math.PI / 2), c = f(c) ? c : 0, u = f(u) ? u : 0, this.drawingArea = d - (u + c) / 2, this.setCenterPoint(u, c)
        }, setCenterPoint: function (t, i) {
            var e = this.width - i - this.drawingArea, s = t + this.drawingArea;
            this.xCenter = (s + e) / 2, this.yCenter = this.height / 2
        }, getIndexAngle: function (t) {
            var i = 2 * Math.PI / this.valuesCount;
            return t * i - Math.PI / 2
        }, getPointPosition: function (t, i) {
            var e = this.getIndexAngle(t);
            return {x: Math.cos(e) * i + this.xCenter, y: Math.sin(e) * i + this.yCenter}
        }, draw: function () {
            if (this.display) {
                var t = this.ctx;
                if (n(this.yLabels, function (i, e) {
                        if (e > 0) {
                            var s, n = e * (this.drawingArea / this.steps), o = this.yCenter - n;
                            if (this.lineWidth > 0)if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc)t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke(); else {
                                t.beginPath();
                                for (var a = 0; a < this.valuesCount; a++)s = this.getPointPosition(a, this.calculateCenterOffset(this.min + e * this.stepValue)), 0 === a ? t.moveTo(s.x, s.y) : t.lineTo(s.x, s.y);
                                t.closePath(), t.stroke()
                            }
                            if (this.showLabels) {
                                if (t.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var h = t.measureText(i).width;
                                    t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                }
                                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(i, this.xCenter, o)
                            }
                        }
                    }, this), !this.lineArc) {
                    t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                    for (var i = this.valuesCount - 1; i >= 0; i--) {
                        if (this.angleLineWidth > 0) {
                            var e = this.getPointPosition(i, this.calculateCenterOffset(this.max));
                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(e.x, e.y), t.stroke(), t.closePath()
                        }
                        var s = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
                        t.font = W(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                        var o = this.labels.length, a = this.labels.length / 2, h = a / 2, l = h > i || i > o - h, r = i === h || i === o - h;
                        t.textAlign = 0 === i ? "center" : i === a ? "center" : a > i ? "left" : "right", t.textBaseline = r ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[i], s.x, s.y)
                    }
                }
            }
        }
    }), s.addEvent(window, "resize", function () {
        var t;
        return function () {
            clearTimeout(t), t = setTimeout(function () {
                n(e.instances, function (t) {
                    t.options.responsive && t.resize(t.render, !0)
                })
            }, 50)
        }
    }()), p ? define(function () {
        return e
    }) : "object" == typeof module && module.exports && (module.exports = e), t.Chart = e, e.noConflict = function () {
        return t.Chart = i, e
    }
}).call(this), function () {
    "use strict";
    var t = this, i = t.Chart, e = i.helpers, s = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        barShowStroke: !0,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    i.Type.extend({
        name: "Bar", defaults: s, initialize: function (t) {
            var s = this.options;
            this.ScaleClass = i.Scale.extend({
                offsetGridLines: !0, calculateBarX: function (t, i, e) {
                    var n = this.calculateBaseWidth(), o = this.calculateX(e) - n / 2, a = this.calculateBarWidth(t);
                    return o + a * i + i * s.barDatasetSpacing + a / 2
                }, calculateBaseWidth: function () {
                    return this.calculateX(1) - this.calculateX(0) - 2 * s.barValueSpacing
                }, calculateBarWidth: function (t) {
                    var i = this.calculateBaseWidth() - (t - 1) * s.barDatasetSpacing;
                    return i / t
                }
            }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function (t) {
                var i = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                this.eachBars(function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), e.each(i, function (t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                }), this.showTooltip(i)
            }), this.BarClass = i.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }), e.each(t.datasets, function (i) {
                var s = {label: i.label || null, fillColor: i.fillColor, strokeColor: i.strokeColor, bars: []};
                this.datasets.push(s), e.each(i.data, function (e, n) {
                    s.bars.push(new this.BarClass({
                        value: e,
                        label: t.labels[n],
                        datasetLabel: i.label,
                        strokeColor: i.strokeColor,
                        fillColor: i.fillColor,
                        highlightFill: i.highlightFill || i.fillColor,
                        highlightStroke: i.highlightStroke || i.strokeColor
                    }))
                }, this)
            }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (t, i, s) {
                e.extend(t, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, s, i),
                    y: this.scale.endPoint
                }), t.save()
            }, this), this.render()
        }, update: function () {
            this.scale.update(), e.each(this.activeElements, function (t) {
                t.restore(["fillColor", "strokeColor"])
            }), this.eachBars(function (t) {
                t.save()
            }), this.render()
        }, eachBars: function (t) {
            e.each(this.datasets, function (i, s) {
                e.each(i.bars, t, this, s)
            }, this)
        }, getBarsAtEvent: function (t) {
            for (var i, s = [], n = e.getRelativePosition(t), o = function (t) {
                s.push(t.bars[i])
            }, a = 0; a < this.datasets.length; a++)for (i = 0; i < this.datasets[a].bars.length; i++)if (this.datasets[a].bars[i].inRange(n.x, n.y))return e.each(this.datasets, o), s;
            return s
        }, buildScale: function (t) {
            var i = this, s = function () {
                var t = [];
                return i.eachBars(function (i) {
                    t.push(i.value)
                }), t
            }, n = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: t.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function (t) {
                    var i = e.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    e.extend(this, i)
                },
                xLabels: t,
                font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && e.extend(n, {
                calculateYRange: e.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new this.ScaleClass(n)
        }, addData: function (t, i) {
            e.each(t, function (t, e) {
                this.datasets[e].bars.push(new this.BarClass({
                    value: t,
                    label: i,
                    x: this.scale.calculateBarX(this.datasets.length, e, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[e].strokeColor,
                    fillColor: this.datasets[e].fillColor
                }))
            }, this), this.scale.addXLabel(i), this.update()
        }, removeData: function () {
            this.scale.removeXLabel(), e.each(this.datasets, function (t) {
                t.bars.shift()
            }, this), this.update()
        }, reflow: function () {
            e.extend(this.BarClass.prototype, {y: this.scale.endPoint, base: this.scale.endPoint});
            var t = e.extend({height: this.chart.height, width: this.chart.width});
            this.scale.update(t)
        }, draw: function (t) {
            var i = t || 1;
            this.clear();
            this.chart.ctx;
            this.scale.draw(i), e.each(this.datasets, function (t, s) {
                e.each(t.bars, function (t, e) {
                    t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                        x: this.scale.calculateBarX(this.datasets.length, s, e),
                        y: this.scale.calculateY(t.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, i).draw())
                }, this)
            }, this)
        }
    })
}.call(this), function () {
    "use strict";
    var t = this, i = t.Chart, e = i.helpers, s = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    i.Type.extend({
        name: "Doughnut", defaults: s, initialize: function (t) {
            this.segments = [], this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = i.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function (t) {
                var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                e.each(this.segments, function (t) {
                    t.restore(["fillColor"])
                }), e.each(i, function (t) {
                    t.fillColor = t.highlightColor
                }), this.showTooltip(i)
            }), this.calculateTotal(t), e.each(t, function (t, i) {
                this.addData(t, i, !0)
            }, this), this.render()
        }, getSegmentsAtEvent: function (t) {
            var i = [], s = e.getRelativePosition(t);
            return e.each(this.segments, function (t) {
                t.inRange(s.x, s.y) && i.push(t)
            }, this), i
        }, addData: function (t, i, e) {
            var s = i || this.segments.length;
            this.segments.splice(s, 0, new this.SegmentArc({
                value: t.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: t.color,
                highlightColor: t.highlight || t.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                label: t.label
            })), e || (this.reflow(), this.update())
        }, calculateCircumference: function (t) {
            return 2 * Math.PI * (Math.abs(t) / this.total)
        }, calculateTotal: function (t) {
            this.total = 0, e.each(t, function (t) {
                this.total += Math.abs(t.value)
            }, this)
        }, update: function () {
            this.calculateTotal(this.segments), e.each(this.activeElements, function (t) {
                t.restore(["fillColor"])
            }), e.each(this.segments, function (t) {
                t.save()
            }), this.render()
        }, removeData: function (t) {
            var i = e.isNumber(t) ? t : this.segments.length - 1;
            this.segments.splice(i, 1), this.reflow(), this.update()
        }, reflow: function () {
            e.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, e.each(this.segments, function (t) {
                t.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                })
            }, this)
        }, draw: function (t) {
            var i = t ? t : 1;
            this.clear(), e.each(this.segments, function (t, e) {
                t.transition({
                    circumference: this.calculateCircumference(t.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                }, i), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle)
            }, this)
        }
    }), i.types.Doughnut.extend({name: "Pie", defaults: e.merge(s, {percentageInnerCutout: 0})})
}.call(this), function () {
    "use strict";
    var t = this, i = t.Chart, e = i.helpers, s = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        bezierCurve: !0,
        bezierCurveTension: .4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    i.Type.extend({
        name: "Line", defaults: s, initialize: function (t) {
            this.PointClass = i.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function (t) {
                    return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                }
            }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function (t) {
                var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), e.each(i, function (t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                }), this.showTooltip(i)
            }), e.each(t.datasets, function (i) {
                var s = {
                    label: i.label || null,
                    fillColor: i.fillColor,
                    strokeColor: i.strokeColor,
                    pointColor: i.pointColor,
                    pointStrokeColor: i.pointStrokeColor,
                    points: []
                };
                this.datasets.push(s), e.each(i.data, function (e, n) {
                    s.points.push(new this.PointClass({
                        value: e,
                        label: t.labels[n],
                        datasetLabel: i.label,
                        strokeColor: i.pointStrokeColor,
                        fillColor: i.pointColor,
                        highlightFill: i.pointHighlightFill || i.pointColor,
                        highlightStroke: i.pointHighlightStroke || i.pointStrokeColor
                    }))
                }, this), this.buildScale(t.labels), this.eachPoints(function (t, i) {
                    e.extend(t, {x: this.scale.calculateX(i), y: this.scale.endPoint}), t.save()
                }, this)
            }, this), this.render()
        }, update: function () {
            this.scale.update(), e.each(this.activeElements, function (t) {
                t.restore(["fillColor", "strokeColor"])
            }), this.eachPoints(function (t) {
                t.save()
            }), this.render()
        }, eachPoints: function (t) {
            e.each(this.datasets, function (i) {
                e.each(i.points, t, this)
            }, this)
        }, getPointsAtEvent: function (t) {
            var i = [], s = e.getRelativePosition(t);
            return e.each(this.datasets, function (t) {
                e.each(t.points, function (t) {
                    t.inRange(s.x, s.y) && i.push(t)
                })
            }, this), i
        }, buildScale: function (t) {
            var s = this, n = function () {
                var t = [];
                return s.eachPoints(function (i) {
                    t.push(i.value)
                }), t
            }, o = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: t.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function (t) {
                    var i = e.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    e.extend(this, i)
                },
                xLabels: t,
                font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && e.extend(o, {
                calculateYRange: e.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new i.Scale(o)
        }, addData: function (t, i) {
            e.each(t, function (t, e) {
                this.datasets[e].points.push(new this.PointClass({
                    value: t,
                    label: i,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[e].pointStrokeColor,
                    fillColor: this.datasets[e].pointColor
                }))
            }, this), this.scale.addXLabel(i), this.update()
        }, removeData: function () {
            this.scale.removeXLabel(), e.each(this.datasets, function (t) {
                t.points.shift()
            }, this), this.update()
        }, reflow: function () {
            var t = e.extend({height: this.chart.height, width: this.chart.width});
            this.scale.update(t)
        }, draw: function (t) {
            var i = t || 1;
            this.clear();
            var s = this.chart.ctx, n = function (t) {
                return null !== t.value
            }, o = function (t, i, s) {
                return e.findNextWhere(i, n, s) || t
            }, a = function (t, i, s) {
                return e.findPreviousWhere(i, n, s) || t
            };
            this.scale.draw(i), e.each(this.datasets, function (t) {
                var h = e.where(t.points, n);
                e.each(t.points, function (t, e) {
                    t.hasValue() && t.transition({y: this.scale.calculateY(t.value), x: this.scale.calculateX(e)}, i)
                }, this), this.options.bezierCurve && e.each(h, function (t, i) {
                    var s = i > 0 && i < h.length - 1 ? this.options.bezierCurveTension : 0;
                    t.controlPoints = e.splineCurve(a(t, h, i), t, o(t, h, i), s), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(h, function (t, i) {
                    if (0 === i)s.moveTo(t.x, t.y); else if (this.options.bezierCurve) {
                        var e = a(t, h, i);
                        s.bezierCurveTo(e.controlPoints.outer.x, e.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                    } else s.lineTo(t.x, t.y)
                }, this), s.stroke(), this.options.datasetFill && h.length > 0 && (s.lineTo(h[h.length - 1].x, this.scale.endPoint), s.lineTo(h[0].x, this.scale.endPoint), s.fillStyle = t.fillColor, s.closePath(), s.fill()), e.each(h, function (t) {
                    t.draw()
                })
            }, this)
        }
    })
}.call(this), function () {
    "use strict";
    var t = this, i = t.Chart, e = i.helpers, s = {
        scaleShowLabelBackdrop: !0,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: !0,
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        scaleShowLine: !0,
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    i.Type.extend({
        name: "PolarArea", defaults: s, initialize: function (t) {
            this.segments = [], this.SegmentArc = i.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.scale = new i.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: !0,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: t.length
            }), this.updateScaleRange(t), this.scale.update(), e.each(t, function (t, i) {
                this.addData(t, i, !0)
            }, this), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function (t) {
                var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                e.each(this.segments, function (t) {
                    t.restore(["fillColor"])
                }), e.each(i, function (t) {
                    t.fillColor = t.highlightColor
                }), this.showTooltip(i)
            }), this.render()
        }, getSegmentsAtEvent: function (t) {
            var i = [], s = e.getRelativePosition(t);
            return e.each(this.segments, function (t) {
                t.inRange(s.x, s.y) && i.push(t)
            }, this), i
        }, addData: function (t, i, e) {
            var s = i || this.segments.length;
            this.segments.splice(s, 0, new this.SegmentArc({
                fillColor: t.color,
                highlightColor: t.highlight || t.color,
                label: t.label,
                value: t.value,
                outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI
            })), e || (this.reflow(), this.update())
        }, removeData: function (t) {
            var i = e.isNumber(t) ? t : this.segments.length - 1;
            this.segments.splice(i, 1), this.reflow(), this.update()
        }, calculateTotal: function (t) {
            this.total = 0, e.each(t, function (t) {
                this.total += t.value
            }, this), this.scale.valuesCount = this.segments.length
        }, updateScaleRange: function (t) {
            var i = [];
            e.each(t, function (t) {
                i.push(t.value)
            });
            var s = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            e.extend(this.scale, s, {
                size: e.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            })
        }, update: function () {
            this.calculateTotal(this.segments), e.each(this.segments, function (t) {
                t.save()
            }), this.reflow(), this.render()
        }, reflow: function () {
            e.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.updateScaleRange(this.segments), this.scale.update(), e.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }), e.each(this.segments, function (t) {
                t.update({outerRadius: this.scale.calculateCenterOffset(t.value)})
            }, this)
        }, draw: function (t) {
            var i = t || 1;
            this.clear(), e.each(this.segments, function (t, e) {
                t.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(t.value)
                }, i), t.endAngle = t.startAngle + t.circumference, 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle), t.draw()
            }, this), this.scale.draw()
        }
    })
}.call(this), function () {
    "use strict";
    var t = this, i = t.Chart, e = i.helpers;
    i.Type.extend({
        name: "Radar",
        defaults: {
            scaleShowLine: !0,
            angleShowLineOut: !0,
            scaleShowLabels: !1,
            scaleBeginAtZero: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        },
        initialize: function (t) {
            this.PointClass = i.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            }), this.datasets = [], this.buildScale(t), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function (t) {
                var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), e.each(i, function (t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                }), this.showTooltip(i)
            }), e.each(t.datasets, function (i) {
                var s = {
                    label: i.label || null,
                    fillColor: i.fillColor,
                    strokeColor: i.strokeColor,
                    pointColor: i.pointColor,
                    pointStrokeColor: i.pointStrokeColor,
                    points: []
                };
                this.datasets.push(s), e.each(i.data, function (e, n) {
                    var o;
                    this.scale.animation || (o = this.scale.getPointPosition(n, this.scale.calculateCenterOffset(e))), s.points.push(new this.PointClass({
                        value: e,
                        label: t.labels[n],
                        datasetLabel: i.label,
                        x: this.options.animation ? this.scale.xCenter : o.x,
                        y: this.options.animation ? this.scale.yCenter : o.y,
                        strokeColor: i.pointStrokeColor,
                        fillColor: i.pointColor,
                        highlightFill: i.pointHighlightFill || i.pointColor,
                        highlightStroke: i.pointHighlightStroke || i.pointStrokeColor
                    }))
                }, this)
            }, this), this.render()
        },
        eachPoints: function (t) {
            e.each(this.datasets, function (i) {
                e.each(i.points, t, this)
            }, this)
        },
        getPointsAtEvent: function (t) {
            var i = e.getRelativePosition(t), s = e.getAngleFromPoint({
                x: this.scale.xCenter,
                y: this.scale.yCenter
            }, i), n = 2 * Math.PI / this.scale.valuesCount, o = Math.round((s.angle - 1.5 * Math.PI) / n), a = [];
            return (o >= this.scale.valuesCount || 0 > o) && (o = 0), s.distance <= this.scale.drawingArea && e.each(this.datasets, function (t) {
                a.push(t.points[o])
            }), a
        },
        buildScale: function (t) {
            this.scale = new i.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.chart.height,
                width: this.chart.width,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: t.labels,
                valuesCount: t.datasets[0].data.length
            }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
        },
        updateScaleRange: function (t) {
            var i = function () {
                var i = [];
                return e.each(t, function (t) {
                    t.data ? i = i.concat(t.data) : e.each(t.points, function (t) {
                        i.push(t.value)
                    })
                }), i
            }(), s = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            e.extend(this.scale, s)
        },
        addData: function (t, i) {
            this.scale.valuesCount++, e.each(t, function (t, e) {
                var s = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                this.datasets[e].points.push(new this.PointClass({
                    value: t,
                    label: i,
                    x: s.x,
                    y: s.y,
                    strokeColor: this.datasets[e].pointStrokeColor,
                    fillColor: this.datasets[e].pointColor
                }))
            }, this), this.scale.labels.push(i), this.reflow(), this.update()
        },
        removeData: function () {
            this.scale.valuesCount--, this.scale.labels.shift(), e.each(this.datasets, function (t) {
                t.points.shift()
            }, this), this.reflow(), this.update()
        },
        update: function () {
            this.eachPoints(function (t) {
                t.save()
            }), this.reflow(), this.render()
        },
        reflow: function () {
            e.extend(this.scale, {
                width: this.chart.width,
                height: this.chart.height,
                size: e.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
        },
        draw: function (t) {
            var i = t || 1, s = this.chart.ctx;
            this.clear(), this.scale.draw(), e.each(this.datasets, function (t) {
                e.each(t.points, function (t, e) {
                    t.hasValue() && t.transition(this.scale.getPointPosition(e, this.scale.calculateCenterOffset(t.value)), i)
                }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(t.points, function (t, i) {
                    0 === i ? s.moveTo(t.x, t.y) : s.lineTo(t.x, t.y)
                }, this), s.closePath(), s.stroke(), s.fillStyle = t.fillColor, s.fill(), e.each(t.points, function (t) {
                    t.hasValue() && t.draw()
                })
            }, this)
        }
    })
}.call(this);


/*Angular Charts*/
!function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["angular", "chart.js"], t) : "object" == typeof exports ? module.exports = t(require("angular"), require("chart.js")) : t(angular, Chart)
}(function (t, e) {
    "use strict";
    function n() {
        var n = {}, r = {
            Chart: e, getOptions: function (e) {
                var r = e && n[e] || {};
                return t.extend({}, n, r)
            }
        };
        this.setOptions = function (e, r) {
            return r ? (n[e] = t.extend(n[e] || {}, r), void 0) : (r = e, n = t.extend(n, r), void 0)
        }, this.$get = function () {
            return r
        }
    }

    function r(n) {
        function r(t, e) {
            return t && e && t.length && e.length ? Array.isArray(t[0]) ? t.length === e.length && t[0].length === e[0].length : e.reduce(a, 0) > 0 ? t.length === e.length : !1 : !1
        }

        function a(t, e) {
            return t + e
        }

        function o(e, r, a) {
            if (r.data && r.data.length) {
                r.getColour = "function" == typeof r.getColour ? r.getColour : l, r.colours = c(e, r);
                var o = a[0], u = o.getContext("2d"), s = Array.isArray(r.data[0]) ? g(r.labels, r.data, r.series || [], r.colours) : p(r.labels, r.data, r.colours), f = t.extend({}, n.getOptions(e), r.options), h = new n.Chart(u)[e](s, f);
                return r.$emit("create", h), ["hover", "click"].forEach(function (t) {
                    r[t] && (o["click" === t ? "onclick" : "onmousemove"] = i(r, h, t))
                }), r.legend && "false" !== r.legend && v(a, h), h
            }
        }

        function i(t, e, n) {
            return function (r) {
                var a = e.getPointsAtEvent || e.getBarsAtEvent || e.getSegmentsAtEvent;
                if (a) {
                    var o = a.call(e, r);
                    t[n](o, r), t.$apply()
                }
            }
        }

        function c(r, a) {
            for (var o = t.copy(a.colours || n.getOptions(r).colours || e.defaults.global.colours); o.length < a.data.length;)o.push(a.getColour());
            return o.map(u)
        }

        function u(t) {
            return "object" == typeof t && null !== t ? t : "string" == typeof t && "#" === t[0] ? s(d(t.substr(1))) : l()
        }

        function l() {
            var t = [f(0, 255), f(0, 255), f(0, 255)];
            return s(t)
        }

        function s(t) {
            return {
                fillColor: h(t, .2),
                strokeColor: h(t, 1),
                pointColor: h(t, 1),
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: h(t, .8)
            }
        }

        function f(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }

        function h(t, e) {
            return "rgba(" + t.concat(e).join(",") + ")"
        }

        function d(t) {
            var e = parseInt(t, 16), n = e >> 16 & 255, r = e >> 8 & 255, a = 255 & e;
            return [n, r, a]
        }

        function g(e, n, r, a) {
            return {
                labels: e, datasets: n.map(function (e, n) {
                    var o = t.copy(a[n]);
                    return o.label = r[n], o.data = e, o
                })
            }
        }

        function p(t, e, n) {
            return t.map(function (t, r) {
                return {label: t, value: e[r], color: n[r].strokeColor, highlight: n[r].pointHighlightStroke}
            })
        }

        function v(t, e) {
            var n = t.parent(), r = n.find("chart-legend"), a = "<chart-legend>" + e.generateLegend() + "</chart-legend>";
            r.length ? r.replaceWith(a) : n.append(a)
        }

        function y(t, e, n) {
            Array.isArray(n.data[0]) ? t.datasets.forEach(function (t, n) {
                (t.points || t.bars).forEach(function (t, r) {
                    t.value = e[n][r]
                })
            }) : t.segments.forEach(function (t, n) {
                t.value = e[n]
            }), t.update(), n.$emit("update", t)
        }

        function C(t) {
            return !t || Array.isArray(t) && !t.length || "object" == typeof t && !Object.keys(t).length
        }

        return function (e) {
            return {
                restrict: "CA",
                scope: {
                    data: "=",
                    labels: "=",
                    options: "=",
                    series: "=",
                    colours: "=?",
                    getColour: "=?",
                    chartType: "=",
                    legend: "@",
                    click: "=",
                    hover: "="
                },
                link: function (n, a) {
                    function i(r, i) {
                        if (!C(r) && !t.equals(r, i)) {
                            var u = e || n.chartType;
                            u && (c && c.destroy(), c = o(u, n, a))
                        }
                    }

                    var c, u = document.createElement("div");
                    u.className = "chart-container", a.replaceWith(u), u.appendChild(a[0]), "object" == typeof window.G_vmlCanvasManager && null !== window.G_vmlCanvasManager && "function" == typeof window.G_vmlCanvasManager.initElement && window.G_vmlCanvasManager.initElement(a[0]), n.$watch("data", function (t, i) {
                        if (t && t.length && (!Array.isArray(t[0]) || t[0].length)) {
                            var u = e || n.chartType;
                            if (u) {
                                if (c) {
                                    if (r(t, i))return y(c, t, n);
                                    c.destroy()
                                }
                                c = o(u, n, a)
                            }
                        }
                    }, !0), n.$watch("series", i, !0), n.$watch("labels", i, !0), n.$watch("options", i, !0), n.$watch("colours", i, !0), n.$watch("chartType", function (e, r) {
                        C(e) || t.equals(e, r) || (c && c.destroy(), c = o(e, n, a))
                    }), n.$on("$destroy", function () {
                        c && c.destroy()
                    })
                }
            }
        }
    }

    e.defaults.global.responsive = !0, e.defaults.global.multiTooltipTemplate = "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>", e.defaults.global.colours = ["#97BBCD", "#DCDCDC", "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"], t.module("chart.js", []).provider("ChartJs", n).factory("ChartJsFactory", ["ChartJs", r]).directive("chartBase", ["ChartJsFactory", function (t) {
        return new t
    }]).directive("chartLine", ["ChartJsFactory", function (t) {
        return new t("Line")
    }]).directive("chartBar", ["ChartJsFactory", function (t) {
        return new t("Bar")
    }]).directive("chartRadar", ["ChartJsFactory", function (t) {
        return new t("Radar")
    }]).directive("chartDoughnut", ["ChartJsFactory", function (t) {
        return new t("Doughnut")
    }]).directive("chartPie", ["ChartJsFactory", function (t) {
        return new t("Pie")
    }]).directive("chartPolarArea", ["ChartJsFactory", function (t) {
        return new t("PolarArea")
    }])
});
//# sourceMappingURL=angular-chart.min.js.map

/*Demo preview js*/
(function (b, a, c) {
    b.danidemo = b.extend({}, {
        addLog: function (j, f, i) {
            var h = new Date();
            var e = b("<li />", {"class": "demo-" + f});
            var g = "[" + h.getHours() + ":" + h.getMinutes() + ":" + h.getSeconds() + "] ";
            g += i;
            e.html(g);
            b(j).prepend(e)
        }, addFile: function (g, e, d) {
            var f = '<div id="demo-file' + e + '"><img src="http://placehold.it/48.png" class="demo-image-preview" /><span class="demo-file-id">#' + e + "</span> - " + d.name + ' <span class="demo-file-size">(' + b.danidemo.humanizeSize(d.size) + ')</span><br />Status: <span class="demo-file-status">Waiting to upload</span><div class="progress progress-striped active"><div class="progress-bar" role="progressbar" style="width: 0%;"><span class="sr-only">0% Complete</span></div></div></div>';
            var e = b(g).attr("file-counter");
            if (!e) {
                b(g).empty();
                e = 0
            }
            e++;
            b(g).attr("file-counter", e);
            b(g).prepend(f)
        }, updateFileStatus: function (e, d, f) {
            b("#demo-file" + e).find("span.demo-file-status").html(f).addClass("demo-file-status-" + d)
        }, updateFileProgress: function (d, e) {
            b("#demo-file" + d).find("div.progress-bar").width(e);
            b("#demo-file" + d).find("span.sr-only").html(e + " Complete")
        }, humanizeSize: function (e) {
            var d = Math.floor(Math.log(e) / Math.log(1024));
            return (e / Math.pow(1024, d)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][d]
        }
    }, b.danidemo)
})(jQuery, this);

/*DM Uploader JS file */
/*
 * dmuploader.min.js - Jquery File Uploader - 0.1
 * http://www.daniel.com.uy/projects/jquery-file-uploader/
 *
 * Copyright (c) 2013 Daniel Morales
 * Dual licensed under the MIT and GPL licenses.
 * http://www.daniel.com.uy/doc/license/
 */
(function(t){var n="dmUploader";var r={url:document.URL,method:"POST",extraData:{},maxFileSize:0,allowedTypes:"*",extFilter:null,dataType:null,fileName:"file",onInit:function(){},onFallbackMode:function(){message},onNewFile:function(e,t){},onBeforeUpload:function(e){},onComplete:function(){},onUploadProgress:function(e,t){},onUploadSuccess:function(e,t){},onUploadError:function(e,t){},onFileTypeError:function(e){},onFileSizeError:function(e){},onFileExtError:function(e){}};var i=function(e,n){this.element=t(e);this.settings=t.extend({},r,n);if(!this.checkBrowser()){return false}this.init();return true};i.prototype.checkBrowser=function(){if(window.FormData===undefined){this.settings.onFallbackMode.call(this.element,"Browser doesn't support Form API");return false}if(this.element.find("input[type=file]").length>0){return true}if(!this.checkEvent("drop",this.element)||!this.checkEvent("dragstart",this.element)){this.settings.onFallbackMode.call(this.element,"Browser doesn't support Ajax Drag and Drop");return false}return true};i.prototype.checkEvent=function(e,t){var t=t||document.createElement("div");var e="on"+e;var n=e in t;if(!n){if(!t.setAttribute){t=document.createElement("div")}if(t.setAttribute&&t.removeAttribute){t.setAttribute(e,"");n=typeof t[e]=="function";if(typeof t[e]!="undefined"){t[e]=undefined}t.removeAttribute(e)}}t=null;return n};i.prototype.init=function(){var e=this;e.queue=new Array;e.queuePos=-1;e.queueRunning=false;e.element.on("drop",function(t){t.preventDefault();var n=t.originalEvent.dataTransfer.files;e.queueFiles(n)});e.element.find("input[type=file]").on("change",function(n){var r=n.target.files;e.queueFiles(r);t(this).val("")});this.settings.onInit.call(this.element)};i.prototype.queueFiles=function(e){var n=this.queue.length;for(var r=0;r<e.length;r++){var i=e[r];if(this.settings.maxFileSize>0&&i.size>this.settings.maxFileSize){this.settings.onFileSizeError.call(this.element,i);continue}if(this.settings.allowedTypes!="*"&&!i.type.match(this.settings.allowedTypes)){this.settings.onFileTypeError.call(this.element,i);continue}if(this.settings.extFilter!=null){var s=this.settings.extFilter.toLowerCase().split(";");var o=i.name.toLowerCase().split(".").pop();if(t.inArray(o,s)<0){this.settings.onFileExtError.call(this.element,i);continue}}this.queue.push(i);var u=this.queue.length-1;this.settings.onNewFile.call(this.element,u,i)}if(this.queueRunning){return false}if(this.queue.length==n){return false}this.processQueue();return true};i.prototype.processQueue=function(){var n=this;n.queuePos++;if(n.queuePos>=n.queue.length){n.settings.onComplete.call(n.element);n.queuePos=n.queue.length-1;n.queueRunning=false;return}var r=n.queue[n.queuePos];var i=new FormData;i.append(n.settings.fileName,r);n.settings.onBeforeUpload.call(n.element,n.queuePos);t.each(n.settings.extraData,function(e,t){i.append(e,t)});n.queueRunning=true;t.ajax({url:n.settings.url,type:n.settings.method,dataType:n.settings.dataType,data:i,cache:false,contentType:false,processData:false,forceSync:false,xhr:function(){var r=t.ajaxSettings.xhr();if(r.upload){r.upload.addEventListener("progress",function(t){var r=0;var i=t.loaded||t.position;var s=t.total||e.totalSize;if(t.lengthComputable){r=Math.ceil(i/s*100)}n.settings.onUploadProgress.call(n.element,n.queuePos,r)},false)}return r},success:function(e,t,r){n.settings.onUploadSuccess.call(n.element,n.queuePos,e)},error:function(e,t,r){n.settings.onUploadError.call(n.element,n.queuePos,r)},complete:function(e,t){n.processQueue()}})};t.fn.dmUploader=function(e){return this.each(function(){if(!t.data(this,n)){t.data(this,n,new i(this,e))}})};t(document).on("dragenter",function(e){e.stopPropagation();e.preventDefault()});t(document).on("dragover",function(e){e.stopPropagation();e.preventDefault()});t(document).on("drop",function(e){e.stopPropagation();e.preventDefault()})})(jQuery)