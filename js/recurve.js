!(function (t) {
  function n(u) {
    if (e[u]) return e[u].exports;
    var r = (e[u] = { exports: {}, id: u, loaded: !1 });
    return t[u].call(r.exports, r, r.exports, n), (r.loaded = !0), r.exports;
  }
  var e = {};
  return (n.m = t), (n.c = e), (n.p = ''), n(0);
})([
  function (t, n, e) {
    t.exports = e(15);
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.default = {
        weighted: function (t, n) {
          for (var e = Math.min(t.length, n.length), u = e, r = 0; u--; )
            r += n[u];
          var i = r,
            o = [];
          for (u = 0, r = 0; u < e; u++) (r += n[u]), o.push(r / i);
          return function (n) {
            for (u = 0; u < e; u++)
              if (n <= o[u]) {
                var r = u > 0 ? o[u - 1] : 0;
                return t[u]((n - r) / (o[u] - r));
              }
            return 1;
          };
        },
        piecewise: function (t, n) {
          var e = void 0,
            u = Math.min(t.length, weights.length);
          return function (r) {
            for (e = 0; e < u - 1; e++)
              if (r <= n[e]) {
                var i = e > 0 ? n[e - 1] : 0;
                return t[e]((r - i) / (n[e] - i));
              }
            var o = u > 1 ? n[u - 2] : 0;
            return t[u - 1]((r - o) / (1 - o));
          };
        },
      });
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var e = {
      in: function (t, n) {
        return n || (n = 1.70158), t * t * (t * n + t - n);
      },
      out: function (t, n) {
        return n || (n = 1.70158), (t -= 1) * t * (t * n + t + n) + 1;
      },
      inOut: function (t, n) {
        return (
          n || (n = 1.70158),
          (t *= 2) < 1
            ? 0.5 * t * t * (t * n + t - n)
            : 0.5 * (t -= 2) * t * (t * n + t + n) + 1
        );
      },
    };
    n.default = e;
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var e = function (t) {
        return t < 0.363636
          ? 7.5625 * t * t
          : t < 0.727273
          ? 7.5625 * (t -= 0.545455) * t + 0.75
          : t < 0.909091
          ? 7.5625 * (t -= 0.818182) * t + 0.9375
          : 7.5625 * (t -= 0.954545) * t + 0.984375;
      },
      u = {
        in: function (t) {
          return 1 - e(1 - t);
        },
        out: function (t) {
          return e(t);
        },
        inOut: function (t) {
          return t < 0.5 ? 0.5 - 0.5 * e(1 - 2 * t) : 0.5 * e(2 * t - 1) + 0.5;
        },
      };
    n.default = u;
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var e = {
      in: function (t) {
        return -1 * (Math.sqrt(1 - t * t) - 1);
      },
      out: function (t) {
        return Math.sqrt(1 - (t -= 1) * t);
      },
      inOut: function (t) {
        return (t *= 2) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * Math.sqrt(1 - (t -= 2) * t) + 0.5;
      },
    };
    n.default = e;
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var e = {
      in: function (t) {
        return t * t * t;
      },
      out: function (t) {
        return (t -= 1) * t * t + 1;
      },
      inOut: function (t) {
        return (t *= 2) < 1 ? t * t * t * 0.5 : 0.5 * ((t -= 2) * t * t + 2);
      },
    };
    n.default = e;
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var e = {
      in: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : -1 *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3);
      },
      out: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : Math.pow(2, -10 * t) *
              Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3) +
            1;
      },
      inOut: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : ((t *= 2),
            t < 1
              ? -0.5 *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3)
              : 0.5 *
                  Math.pow(2, -10 * (t -= 1)) *
                  Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3) +
                1);
      },
    };
    n.default = e;
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var e = {
      in: function (t, n) {
        return n || (n = 2), 0 == t ? 0 : Math.pow(n, 10 * (t - 1));
      },
      out: function (t, n) {
        return n || (n = 2), 1 == t ? 1 : -Math.pow(n, -10 * t) + 1;
      },
      inOut: function (t, n) {
        return (
          n || (n = 2),
          (t *= 2) < 1
            ? 0 == t
              ? 0
              : 0.5 * Math.pow(n, 10 * (t - 1))
            : 2 == t
            ? 1
            : -0.5 * Math.pow(n, -10 * (t - 1)) + 1
        );
      },
    };
    n.default = e;
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var e = {
      in: function (t) {
        return t * t;
      },
      out: function (t) {
        return (2 - t) * t;
      },
      inOut: function (t) {
        return (t *= 2) < 1 ? t * t * 0.5 : 0.5 * ((2 - (t -= 1)) * t + 1);
      },
    };
    n.default = e;
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var e = {
      in: function (t) {
        return t * t * t * t;
      },
      out: function (t) {
        return 1 - (t -= 1) * t * t * t;
      },
      inOut: function (t) {
        return (t *= 2) < 1
          ? t * t * t * t * 0.5
          : 1 - (t -= 2) * t * t * t * 0.5;
      },
    };
    n.default = e;
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var e = {
      in: function (t) {
        return t * t * t * t * t;
      },
      out: function (t) {
        return (t -= 1) * t * t * t * t + 1;
      },
      inOut: function (t) {
        return (t *= 2) < 1
          ? t * t * t * t * t * 0.5
          : 0.5 * ((t -= 2) * t * t * t * t + 2);
      },
    };
    n.default = e;
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var e = {
      in: function (t) {
        return -Math.cos((t * Math.PI) / 2) + 1;
      },
      out: function (t) {
        return Math.sin((t * Math.PI) / 2);
      },
      inOut: function (t) {
        return (-Math.cos(t * Math.PI) + 1) / 2;
      },
    };
    n.default = e;
  },
  function (t, n, e) {
    'use strict';
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = e(13),
      i = e(8),
      o = u(i),
      a = e(5),
      f = u(a),
      c = e(9),
      l = u(c),
      s = e(10),
      d = u(s),
      M = e(11),
      v = u(M),
      p = e(4),
      h = u(p),
      _ = e(7),
      O = u(_),
      P = e(2),
      b = u(P),
      y = e(6),
      j = u(y),
      m = e(3),
      w = u(m);
    n.default = {
      constant: r.constant,
      maxValue: r.maxValue,
      minValue: r.minValue,
      inverse: r.inverse,
      Linear: r.Linear,
      Quad: o.default,
      Cubic: f.default,
      Quart: l.default,
      Quint: d.default,
      Strong: d.default,
      Sine: v.default,
      Circ: h.default,
      Expo: O.default,
      Back: b.default,
      Elastic: j.default,
      Bounce: w.default,
    };
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    (n.constant = function (t, n) {
      return 'undefined' != typeof n ? n : 1;
    }),
      (n.maxValue = function (t) {
        return 1;
      }),
      (n.minValue = function (t) {
        return 0;
      }),
      (n.inverse = function (t) {
        return 1 - t;
      }),
      (n.Linear = function (t) {
        return t;
      });
  },
  function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.default = {
        repeat: function (t) {
          return t - ~~t;
        },
        pingpong: function (t) {
          return ~~t % 2 ? 1 - t + ~~t : t - ~~t;
        },
        clamp: function (t) {
          return Math.max(0, Math.min(1, t));
        },
      });
  },
  function (t, n, e) {
    'use strict';
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var r = e(14),
      i = u(r),
      o = e(12),
      a = u(o),
      f = e(1),
      c = u(f);
    window.recurve = {
      normalize: i.default,
      ease: a.default,
      compose: c.default,
    };
  },
]);
