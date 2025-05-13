function L(e, r, a) {
  e.prototype = r.prototype = a, a.constructor = e;
}
function j(e, r) {
  var a = Object.create(e.prototype);
  for (var n in r) a[n] = r[n];
  return a;
}
function v() {
}
var R = 0.7, P = 1 / R, w = "\\s*([+-]?\\d+)\\s*", _ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", x = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", te = /^#([0-9a-f]{3,8})$/, ae = new RegExp(`^rgb\\(${w},${w},${w}\\)$`), ne = new RegExp(`^rgb\\(${x},${x},${x}\\)$`), ie = new RegExp(`^rgba\\(${w},${w},${w},${_}\\)$`), fe = new RegExp(`^rgba\\(${x},${x},${x},${_}\\)$`), oe = new RegExp(`^hsl\\(${_},${x},${x}\\)$`), se = new RegExp(`^hsla\\(${_},${x},${x},${_}\\)$`), V = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
L(v, H, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: q,
  // Deprecated! Use color.formatHex.
  formatHex: q,
  formatHex8: le,
  formatHsl: xe,
  formatRgb: B,
  toString: B
});
function q() {
  return this.rgb().formatHex();
}
function le() {
  return this.rgb().formatHex8();
}
function xe() {
  return z(this).formatHsl();
}
function B() {
  return this.rgb().formatRgb();
}
function H(e) {
  var r, a;
  return e = (e + "").trim().toLowerCase(), (r = te.exec(e)) ? (a = r[1].length, r = parseInt(r[1], 16), a === 6 ? D(r) : a === 3 ? new f(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : a === 8 ? A(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : a === 4 ? A(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = ae.exec(e)) ? new f(r[1], r[2], r[3], 1) : (r = ne.exec(e)) ? new f(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = ie.exec(e)) ? A(r[1], r[2], r[3], r[4]) : (r = fe.exec(e)) ? A(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = oe.exec(e)) ? G(r[1], r[2] / 100, r[3] / 100, 1) : (r = se.exec(e)) ? G(r[1], r[2] / 100, r[3] / 100, r[4]) : V.hasOwnProperty(e) ? D(V[e]) : e === "transparent" ? new f(NaN, NaN, NaN, 0) : null;
}
function D(e) {
  return new f(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function A(e, r, a, n) {
  return n <= 0 && (e = r = a = NaN), new f(e, r, a, n);
}
function ce(e) {
  return e instanceof v || (e = H(e)), e ? (e = e.rgb(), new f(e.r, e.g, e.b, e.opacity)) : new f();
}
function he(e, r, a, n) {
  return arguments.length === 1 ? ce(e) : new f(e, r, a, n ?? 1);
}
function f(e, r, a, n) {
  this.r = +e, this.g = +r, this.b = +a, this.opacity = +n;
}
L(f, he, j(v, {
  brighter(e) {
    return e = e == null ? P : Math.pow(P, e), new f(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? R : Math.pow(R, e), new f(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new f(u(this.r), u(this.g), u(this.b), S(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: O,
  // Deprecated! Use color.formatHex.
  formatHex: O,
  formatHex8: de,
  formatRgb: X,
  toString: X
}));
function O() {
  return `#${g(this.r)}${g(this.g)}${g(this.b)}`;
}
function de() {
  return `#${g(this.r)}${g(this.g)}${g(this.b)}${g((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function X() {
  const e = S(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${u(this.r)}, ${u(this.g)}, ${u(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function S(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function u(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function g(e) {
  return e = u(e), (e < 16 ? "0" : "") + e.toString(16);
}
function G(e, r, a, n) {
  return n <= 0 ? e = r = a = NaN : a <= 0 || a >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new l(e, r, a, n);
}
function z(e) {
  if (e instanceof l) return new l(e.h, e.s, e.l, e.opacity);
  if (e instanceof v || (e = H(e)), !e) return new l();
  if (e instanceof l) return e;
  e = e.rgb();
  var r = e.r / 255, a = e.g / 255, n = e.b / 255, i = Math.min(r, a, n), t = Math.max(r, a, n), c = NaN, o = t - i, s = (t + i) / 2;
  return o ? (r === t ? c = (a - n) / o + (a < n) * 6 : a === t ? c = (n - r) / o + 2 : c = (r - a) / o + 4, o /= s < 0.5 ? t + i : 2 - t - i, c *= 60) : o = s > 0 && s < 1 ? 0 : c, new l(c, o, s, e.opacity);
}
function ge(e, r, a, n) {
  return arguments.length === 1 ? z(e) : new l(e, r, a, n ?? 1);
}
function l(e, r, a, n) {
  this.h = +e, this.s = +r, this.l = +a, this.opacity = +n;
}
L(l, ge, j(v, {
  brighter(e) {
    return e = e == null ? P : Math.pow(P, e), new l(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? R : Math.pow(R, e), new l(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, a = this.l, n = a + (a < 0.5 ? a : 1 - a) * r, i = 2 * a - n;
    return new f(
      I(e >= 240 ? e - 240 : e + 120, i, n),
      I(e, i, n),
      I(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new l(W(this.h), N(this.s), N(this.l), S(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = S(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${W(this.h)}, ${N(this.s) * 100}%, ${N(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function W(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function N(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function I(e, r, a) {
  return (e < 60 ? r + (a - r) * e / 60 : e < 180 ? a : e < 240 ? r + (a - r) * (240 - e) / 60 : r) * 255;
}
function be(e) {
  const r = new Image();
  let a = null;
  const n = new Promise((s, h) => {
    if (a) {
      s(a);
      return;
    }
    r.onload = () => {
      a = r, s(r);
    }, r.onerror = (b) => {
      h(b);
    }, r.src = typeof e == "string" ? e : URL.createObjectURL(e);
  }), i = document.createElement("canvas"), t = i.getContext("webgl");
  if (!t)
    throw new Error("Failed to get WebGL context");
  const o = (() => {
    const s = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
        v_texCoord = a_texCoord;
      }
    `, h = `
      precision mediump float;
      uniform sampler2D u_image;
      uniform float u_targetHue;
      varying vec2 v_texCoord;

      float hue2rgb(float p, float q, float t) {
        if (t < 0.0) t += 1.0;
        if (t > 1.0) t -= 1.0;
        if (t < 1.0 / 6.0) return p + (q - p) * 6.0 * t;
        if (t < 1.0 / 2.0) return q;
        if (t < 2.0 / 3.0) return p + (q - p) * (2.0 / 3.0 - t) * 6.0;
        return p;
      }

      vec3 rgbToHsl(vec3 color) {
        float r = color.r, g = color.g, b = color.b;
        float maxVal = max(r, max(g, b));
        float minVal = min(r, min(g, b));
        float h = 0.0, s = 0.0, l = (maxVal + minVal) / 2.0;

        if (maxVal != minVal) {
          float d = maxVal - minVal;
          s = l > 0.5 ? d / (2.0 - maxVal - minVal) : d / (maxVal + minVal);
          if (maxVal == r) {
            h = (g - b) / d + (g < b ? 6.0 : 0.0);
          } else if (maxVal == g) {
            h = (b - r) / d + 2.0;
          } else {
            h = (r - g) / d + 4.0;
          }
          h /= 6.0;
        }
        return vec3(h, s, l);
      }

      vec3 hslToRgb(vec3 hsl) {
        float h = hsl.x, s = hsl.y, l = hsl.z;
        float r, g, b;

        if (s == 0.0) {
          r = g = b = l; // achromatic
        } else {
          float q = l < 0.5 ? l * (1.0 + s) : l + s - l * s;
          float p = 2.0 * l - q;
          r = hue2rgb(p, q, h + 1.0 / 3.0);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1.0 / 3.0);
        }
        return vec3(r, g, b);
      }

      void main() {
        vec4 color = texture2D(u_image, v_texCoord);
        vec3 hsl = rgbToHsl(color.rgb);
        hsl.x = u_targetHue / 360.0; // Adjust hue
        gl_FragColor = vec4(hslToRgb(hsl), color.a);
      }
    `, b = Y(t, t.VERTEX_SHADER, s), d = Y(t, t.FRAGMENT_SHADER, h);
    return ue(t, b, d);
  })();
  return async (s) => {
    const h = await n;
    i.width = h.width, i.height = h.height;
    const b = H(s);
    if (!b)
      throw new Error("Invalid target color");
    let d;
    const T = b.rgb(), y = T.r / 255, m = T.g / 255, E = T.b / 255, $ = Math.min(y, m, E), p = Math.max(y, m, E);
    p === $ ? d = 0 : p === y ? d = ((m - E) / (p - $) + (m < E ? 6 : 0)) * 60 : p === m ? d = ((E - y) / (p - $) + 2) * 60 : d = ((y - m) / (p - $) + 4) * 60, t.useProgram(o);
    const C = t.getUniformLocation(o, "u_targetHue");
    if (C === null)
      throw new Error("Failed to get uniform location for u_targetHue");
    t.uniform1f(C, d);
    const F = t.createTexture();
    if (!F)
      throw new Error("Failed to create texture");
    t.bindTexture(t.TEXTURE_2D, F), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texImage2D(
      t.TEXTURE_2D,
      0,
      t.RGBA,
      t.RGBA,
      t.UNSIGNED_BYTE,
      h
    );
    const K = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, K), t.bufferData(
      t.ARRAY_BUFFER,
      new Float32Array([
        -1,
        -1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        -1,
        1,
        1
      ]),
      t.STATIC_DRAW
    );
    const k = t.getAttribLocation(o, "a_position");
    t.enableVertexAttribArray(k), t.vertexAttribPointer(k, 2, t.FLOAT, !1, 0, 0);
    const J = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, J), t.bufferData(
      t.ARRAY_BUFFER,
      new Float32Array([
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1
      ]),
      t.STATIC_DRAW
    );
    const U = t.getAttribLocation(o, "a_texCoord");
    t.enableVertexAttribArray(U), t.vertexAttribPointer(U, 2, t.FLOAT, !1, 0, 0), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.viewport(0, 0, i.width, i.height), t.drawArrays(t.TRIANGLES, 0, 6);
    const Q = performance.now();
    return new Promise((Z, ee) => {
      i.toBlob((M) => {
        if (M) {
          const re = performance.now();
          console.log(`Image loaded in ${re - Q} ms`), Z(M);
        } else
          ee(new Error("Failed to create Blob from canvas"));
      });
    });
  };
}
function Y(e, r, a) {
  const n = e.createShader(r);
  if (!n)
    throw new Error("Failed to create shader");
  if (e.shaderSource(n, a), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS))
    throw new Error(e.getShaderInfoLog(n) || "Shader compile error");
  return n;
}
function ue(e, r, a) {
  const n = e.createProgram();
  if (e.attachShader(n, r), e.attachShader(n, a), e.linkProgram(n), !e.getProgramParameter(n, e.LINK_STATUS))
    throw new Error(e.getProgramInfoLog(n) || "Program link error");
  return n;
}
export {
  be as processImage
};
