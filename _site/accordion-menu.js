var amenuOptions = {
    menuId: "accordion",
    linkIdToMenuHtml: null,
    expand: "all", //"single", "full,180px", "multiple", "all" or "alltop"
    speed: 200, //in ms
    license: "2a8e9"
};

var amenu = new McAcdnMenu(amenuOptions);

/* Accordion Menu v2018.6.12 Copyright www.menucool.com */
function McAcdnMenu(d) {
    "use strict";
    if (typeof String.prototype.trim !== "function") String.prototype.trim = function () {
        return this[c](/^\s+|\s+$/g, "")
    };
    var g = "className",
        a = "length",
        y = "addEventListener",
        e = "parentNode",
        q = "nodeName",
        b = "style",
        c = "replace",
        h = "height",
        o = "display",
        f = "clientHeight",
        r = document,
        N = "createElement",
        v = "getElementById",
        K = "fromCharCode",
        E = "charCodeAt",
        t = setTimeout,
        m = function (a, b) {
            return r[a](b)
        },
        z = function (a, d) {
            if (typeof getComputedStyle != "undefined") var c = getComputedStyle(a, null);
            else if (a.currentStyle) c = a.currentStyle;
            else c = a[b];
            return c[d]
        },
        B = function (a, b) {
            return a.getElementsByTagName(b)
        },
        R = 0,
        p = 0,
        k, n, i, u = d.expand,
        j = 0,
        T = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
        Q = function (e, d) {
            for (var c = [], b = 0; b < e[a]; b++) c[c[a]] = String[K](e[E](b) - (d ? d : 3));
            return c.join("")
        },
        ib = function (a) {
            return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        },
        G = function (a, c, b) {
            if (a[y]) a[y](c, b, false);
            else a.attachEvent && a.attachEvent("on" + c, b)
        },
        cb = function (b, d) {
            var c = b[a];
            while (c--)
                if (b[c] === d) return true;
            return false
        },
        A = function (b, a) {
            return cb(b[g].split(" "), a)
        },
        l = function (a, b, c) {
            if (!A(a, b))
                if (!a[g]) a[g] = b;
                else if (c) a[g] = b + " " + a[g];
            else a[g] += " " + b
        },
        D = function (d, f) {
            if (d[g]) {
                for (var e = "", c = d[g].split(" "), b = 0, h = c[a]; b < h; b++)
                    if (c[b] !== f) e += c[b] + " ";
                d[g] = e.trim()
            }
        },
        eb = function (a) {
            a[e].removeChild(a);
            a = null
        },
        L = function (d) {
            if (d && d.nodeType == 1) {
                var b = d.childNodes;
                if (b && b[a]) {
                    var c = b[a];
                    while (c--) {
                        b[c].nodeType == 3 && b[c].nodeValue.trim() == "" && eb(b[c]);
                        L(b[c])
                    }
                }
            }
        },
        db = function (a) {
            if (a && a.stopPropagation) a.stopPropagation();
            else if (window.event) window.event.cancelBubble = true
        },
        Y = function (a) {
            a.s1 = z(a, "marginTop");
            a.s2 = z(a, "marginBottom");
            a.s3 = z(a, "paddingTop");
            a.s4 = z(a, "paddingBottom");
            a.s34 = parseFloat(a.s3) + parseFloat(a.s4);
            a.s0 = a[f] - a.s34 + "px"
        },
        gb = function (a) {
            var c = a[b];
            c[h] = a.s0;
            c.marginTop = a.s1;
            c.marginBottom = a.s2;
            c.paddingTop = a.s3;
            c.paddingBottom = a.s4;
            t(function () {
                s(a, 0);
                if (!a.Ht) a[b][h] = "auto";
                a[f];
                s(a, 1)
            }, k)
        },
        P = function (c) {
            var a = c[b];
            a[h] = a.marginTop = a.marginBottom = a.paddingTop = a.paddingBottom = "0px";
            t(function () {
                a[o] = "none"
            }, k + 10)
        },
        Z = function (a) {
            if (a[f]) {
                D(a.caret, "active");
                a[b][o] = "none"
            } else {
                l(a.caret, "active");
                a[b][o] = "block";
                if (a.Ht) a[b][h] = a.Ht
            }
        },
        fb = function (a) {
            if (a[f]) {
                a.s0 = a.Ht ? a.Ht : a[f] - a.s34 + "px";
                a[b][h] = a.s0;
                a[f];
                P(a);
                D(a.caret, "active")
            } else {
                var c = a[b];
                s(a, 0);
                c[o] = "block";
                if (a.Ht) a.s0 = a.Ht;
                else {
                    c[h] = "auto";
                    a.s0 = a[f] - a.s34 + "px"
                }
                c[h] = "0px";
                a[f];
                s(a, 1);
                gb(a);
                l(a.caret, "active")
            }
        },
        F = function (a) {
            if (k) fb(a);
            else Z(a)
        },
        J = function (m, j) {
            var d = B(m, "li"),
                g = d[a],
                c;
            while (g--) {
                c = d[g].subUl;
                if (c)
                    if (A(d[g], "active")) {
                        l(c.caret, "active");
                        if (c.Ht) c[b][h] = c.Ht;
                        j && !c[f] && F(c)
                    } else if (u == "all" || u == "alltop" && c[e][e] == i) l(c.caret, "active");
                else {
                    c[b][o] = "none";
                    k && P(c)
                }
            }
        },
        W = function (i) {
            var b = i.target || i.srcElement;
            if (b[q] == "DIV")
                if (b[e][q] == "LI") b = b[e];
                else if (b[e][e][q] == "LI") b = b[e][e];
            var c = b.subUl;
            if (c) {
                if ((u == "single" || p) && !c[f])
                    for (var h = b[e].children, d, g = 0; g < h[a]; g++) {
                        d = h[g].subUl;
                        d && d != c && d[f] > 0 && F(d)
                    }
                if (c.Ht && c[f]) return;
                F(c)
            }
        },
        x = function (a) {
            (a[q] == "LI" || a[q] == "A") && l(a, "active", 1);
            !(a.id && a.id == d.menuId) && x(a[e])
        },
        S = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/],
        X = function (k) {
            if (j) {
                if (typeof j == "string") j = m(v, j);
                if (j) try {
                    x(j)
                } catch (l) {}
                return
            }
            var e = -1,
                g = -1,
                h = r.location.href.toLowerCase()[c]("www.", "")[c](/([\-\[\].$()*+?])/g, "\\$1")[c](/#$/, "") + "$",
                i = new RegExp(h, "i"),
                f, d = B(k, "a");
            if (e == -1)
                for (b = 0; b < d[a]; b++)
                    if (A(d[b], "active")) {
                        e = b;
                        break
                    } if (e == -1)
                for (var b = 0; b < d[a]; b++)
                    if (d[b].href) {
                        f = d[b].href[c]("www.", "").match(i);
                        if (f && f[0][a] >= g) {
                            e = b;
                            g = f[0][a]
                        }
                    } if (e == -1) {
                h = r.location.href.toLowerCase()[c]("www.", "")[c](/https?:\/\//, "")[c](/([\-\[\].$()*+])/g, "\\$1")[c](/([?&#])([^?&#]+)/g, "($1$2)?")[c](/\(\?/g, "(\\?")[c](/#$/, "");
                i = new RegExp(h, "i");
                for (b = 0; b < d[a]; b++)
                    if (d[b].href) {
                        f = d[b].href[c]("www.", "")[c](/https?:\/\//, "").match(i);
                        if (f && f[0][a] > g) {
                            e = b;
                            g = f[0][a]
                        }
                    }
            }
            e != -1 && V(d[e])
        },
        s = function (a, c) {
            if (k) a[b].transition = a[b].WebkitTransition = "all " + (c ? k : 0) + "ms ease"
        },
        H = function (k, h) {
            var i = k.childNodes,
                j = i[a],
                d, c, f;
            while (j--) {
                d = i[j];
                c = d.childNodes[a] > 1 ? d.childNodes[1] : 0;
                h && l(d, "top", 1);
                if (c) {
                    d.subUl = c;
                    l(d, "has-sub");
                    Y(c);
                    f = m(N, "div");
                    f[g] = "caret";
                    if (h && p) {
                        c.Ht = p;
                        c[b].overflow = "auto"
                    }
                    var e = d.firstChild;
                    if (e && e[q] == "DIV") c.caret = e.insertBefore(f, e.firstChild);
                    else c.caret = d.insertBefore(f, e);
                    s(c, 1);
                    G(d, "click", W);
                    G(c, "click", db);
                    c.nodeType == 1 && c.nodeName == "UL" && H(c, 0)
                }
            }
        },
        O = function (a) {
            bb(d.license);
            this.a(a)
        },
        bb = function (b) {
            var c = ib(document.domain.replace("www.", ""));
            try {
                typeof atob == "function" && (function (b, d) {
                    var c = Q(atob("dy13QWgsLT9taixPLHowNC1BQStwKyoqTyx6MHoycGlya3hsMTUtQUEreCstd0E0P21qLHctd19uYTJtcndpdnhGaWpzdmksbV9rKCU2NiU3NSU2RSUlNjYlNzUlNkUlNjMlNzQlNjklNkYlNkUlMjAlNjUlMjglKSo8Zy9kYm1tKXVpanQtMio8aCkxKjxoKTIqPGpnKW4+SylvLXAqKnx3YnMhcz5OYnVpL3Nib2VwbikqLXQ+ZAFeLXY+bCkoV3BtaGl2JHR5dmdsZXdpJHZpcW1yaGl2KCotdz4ocWJzZm91T3BlZig8ZHBvdHBtZi9tcGgpcyo8amcpdC9vcGVmT2JuZj4+KEIoKnQ+ayl0KgE8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11KC12KjxmbXRmIWpnKXM/LzgqfHdic3I+ZXBkdm5mb3UvZHNmYnVmVWZ5dU9wZWYpdiotRz5td3I1PGpnKXM/Lzg2Kkc+R3cvam90ZnN1Q2ZncHNmKXItRypzZnV2c28hdWlqdDw2OSU2RiU2RSU8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11cGR2bmYlJG91L2RzZmJ1ZlVmeQ=="), b[a] + parseInt(b.charAt(1))).substr(0, 3);
                    typeof this[c] === "function" && this[c](d, S, T)
                })(c, b)
            } catch (d) {}
        };
    O.prototype = {
        a: function (f) {
            L(f);
            var e = B(f, "ul");
            if (e[a]) i = e = e[0];
            else return;
            if (u.indexOf("full") != -1) {
                p = u[c]("full", "")[c](",", "").trim();
                if (!p) p = "200px"
            }
            R = typeof e[b].transition == "undefined" && typeof e[b].WebkitTransition == "undefined";
            var g = d.speed;
            k = R ? 0 : typeof g == "undefined" ? 150 : g;
            X(e);
            H(e, 1);
            J(e);
            n[b].visibility = "visible"
        }
    };
    var V = function (b) {
            (new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", function (d) {
                for (var c = [], b = 0, e = d[a]; b < e; b++) c[c[a]] = String[K](d[E](b) - 4);
                return c.join("")
            }("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,~-zev$gA~_fa,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-$\u0081?vixyvr$|/e,}_6a-/}_5a/e,}_4a-$\u00810OAjyrgxmsr,|0}-vixyvr$|2glevEx,}-$\u00810qAe_k,+spjluzl+-a\u0080\u0080+5:+0rAtevwiMrx,O,q04--\u0080\u0080:0zAm_k,+kvthpu+-a?mj,z2pirkxl@7-zA+p5x+?zev$sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?j,h-?mj,q%AN,r/+e+0s--$zev$vAQexl2verhsq,-0w0yAk,+Hjjvykpvu'Tlu|'{yphs'}lyzpvu+-?mj,v@27-wAg_na_na2tvizmsywWmfpmrk?mj,v@2:**%w-wAg_na?mj,w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\u0081mj,vB2=-wAm2fsh}?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l{Uvkl+-a,y-0w-$\u0081"))).apply(this, [d, E, i, b, S, x, Q, T, r, e])
        },
        U = function (d) {
            var a;
            if (window.XMLHttpRequest) a = new XMLHttpRequest;
            else a = new ActiveXObject("Microsoft.XMLHTTP");
            a.onreadystatechange = function () {
                if (a.readyState == 4 && a.status == 200) {
                    var f = a.responseText,
                        h = /^[\s\S]*<body[^>]*>([\s\S]+)<\/body>[\s\S]*$/i;
                    if (h.test(f)) f = f[c](h, "$1");
                    f = f[c](/^\s+|\s+$/g, "");
                    var g = m(N, "div");
                    g[b].padding = "0";
                    g[b].margin = "0";
                    d[e].insertBefore(g, d);
                    g.innerHTML = f;
                    d[b][o] = "none";
                    M()
                }
            };
            a.open("GET", d.href, true);
            a.send()
        },
        M = function () {
            n = m(v, d.menuId);
            if (n && n.innerHTML[a] > 18) {
                new O(n);
                d.initCallback && t(d.initCallback, 0)
            }
        },
        C = function () {
            var a = d.linkIdToMenuHtml;
            if (a) {
                var b = m(v, a);
                if (b) U(b);
                else alert('<a id="' + a + '"> not found.')
            } else M()
        },
        ab = function (c) {
            var a = 0;

            function b() {
                if (a) return;
                a = 1;
                t(c, 14)
            }
            if (r[y]) r[y]("DOMContentLoaded", b, false);
            else G(window, "load", b)
        };
    if (typeof d.initOnDomReady == "undefined") d.initOnDomReady = 1;
    if (d.initOnDomReady)
        if (m(v, d.menuId)) C();
        else ab(C);
    var w = 0,
        hb = function (d) {
            w = 0;
            var b = B(i, "*"),
                c = b[a];
            while (c--) A(b[c], "active") && D(b[c], "active");
            x(d);
            J(i, 1)
        },
        I = function (a) {
            if (typeof a == "string") var b = m(v, a);
            else b = a;
            if (b) hb(b);
            else if (w < 20) {
                w++;
                w++;
                t(function () {
                    I(a)
                }, 20 * w)
            }
        };
    return {
        init: function (a) {
            if (a) j = a;
            !i && C()
        },
        clear: function () {
            n.innerHTML = "";
            n = i = null
        },
        expand: function (a) {
            I(a)
        },
        close: function () {
            this.expand(i)
        }
    }
}