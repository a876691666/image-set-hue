(function(m,x){typeof exports=="object"&&typeof module<"u"?x(exports):typeof define=="function"&&define.amd?define(["exports"],x):(m=typeof globalThis<"u"?globalThis:m||self,x(m.ImageSetHue={}))})(this,function(m){"use strict";function x(e,r,a){e.prototype=r.prototype=a,a.constructor=e}function F(e,r){var a=Object.create(e.prototype);for(var n in r)a[n]=r[n];return a}function R(){}var _=.7,A=1/_,p="\\s*([+-]?\\d+)\\s*",T="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",c="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",J=/^#([0-9a-f]{3,8})$/,Q=new RegExp(`^rgb\\(${p},${p},${p}\\)$`),Z=new RegExp(`^rgb\\(${c},${c},${c}\\)$`),ee=new RegExp(`^rgba\\(${p},${p},${p},${T}\\)$`),re=new RegExp(`^rgba\\(${c},${c},${c},${T}\\)$`),te=new RegExp(`^hsl\\(${T},${c},${c}\\)$`),ae=new RegExp(`^hsla\\(${T},${c},${c},${T}\\)$`),k={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};x(R,N,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:M,formatHex:M,formatHex8:ne,formatHsl:ie,formatRgb:U,toString:U});function M(){return this.rgb().formatHex()}function ne(){return this.rgb().formatHex8()}function ie(){return O(this).formatHsl()}function U(){return this.rgb().formatRgb()}function N(e){var r,a;return e=(e+"").trim().toLowerCase(),(r=J.exec(e))?(a=r[1].length,r=parseInt(r[1],16),a===6?V(r):a===3?new f(r>>8&15|r>>4&240,r>>4&15|r&240,(r&15)<<4|r&15,1):a===8?S(r>>24&255,r>>16&255,r>>8&255,(r&255)/255):a===4?S(r>>12&15|r>>8&240,r>>8&15|r>>4&240,r>>4&15|r&240,((r&15)<<4|r&15)/255):null):(r=Q.exec(e))?new f(r[1],r[2],r[3],1):(r=Z.exec(e))?new f(r[1]*255/100,r[2]*255/100,r[3]*255/100,1):(r=ee.exec(e))?S(r[1],r[2],r[3],r[4]):(r=re.exec(e))?S(r[1]*255/100,r[2]*255/100,r[3]*255/100,r[4]):(r=te.exec(e))?D(r[1],r[2]/100,r[3]/100,1):(r=ae.exec(e))?D(r[1],r[2]/100,r[3]/100,r[4]):k.hasOwnProperty(e)?V(k[e]):e==="transparent"?new f(NaN,NaN,NaN,0):null}function V(e){return new f(e>>16&255,e>>8&255,e&255,1)}function S(e,r,a,n){return n<=0&&(e=r=a=NaN),new f(e,r,a,n)}function fe(e){return e instanceof R||(e=N(e)),e?(e=e.rgb(),new f(e.r,e.g,e.b,e.opacity)):new f}function oe(e,r,a,n){return arguments.length===1?fe(e):new f(e,r,a,n??1)}function f(e,r,a,n){this.r=+e,this.g=+r,this.b=+a,this.opacity=+n}x(f,oe,F(R,{brighter(e){return e=e==null?A:Math.pow(A,e),new f(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?_:Math.pow(_,e),new f(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new f(h(this.r),h(this.g),h(this.b),P(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:q,formatHex:q,formatHex8:se,formatRgb:B,toString:B}));function q(){return`#${d(this.r)}${d(this.g)}${d(this.b)}`}function se(){return`#${d(this.r)}${d(this.g)}${d(this.b)}${d((isNaN(this.opacity)?1:this.opacity)*255)}`}function B(){const e=P(this.opacity);return`${e===1?"rgb(":"rgba("}${h(this.r)}, ${h(this.g)}, ${h(this.b)}${e===1?")":`, ${e})`}`}function P(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function h(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function d(e){return e=h(e),(e<16?"0":"")+e.toString(16)}function D(e,r,a,n){return n<=0?e=r=a=NaN:a<=0||a>=1?e=r=NaN:r<=0&&(e=NaN),new s(e,r,a,n)}function O(e){if(e instanceof s)return new s(e.h,e.s,e.l,e.opacity);if(e instanceof R||(e=N(e)),!e)return new s;if(e instanceof s)return e;e=e.rgb();var r=e.r/255,a=e.g/255,n=e.b/255,i=Math.min(r,a,n),t=Math.max(r,a,n),g=NaN,o=t-i,l=(t+i)/2;return o?(r===t?g=(a-n)/o+(a<n)*6:a===t?g=(n-r)/o+2:g=(r-a)/o+4,o/=l<.5?t+i:2-t-i,g*=60):o=l>0&&l<1?0:g,new s(g,o,l,e.opacity)}function le(e,r,a,n){return arguments.length===1?O(e):new s(e,r,a,n??1)}function s(e,r,a,n){this.h=+e,this.s=+r,this.l=+a,this.opacity=+n}x(s,le,F(R,{brighter(e){return e=e==null?A:Math.pow(A,e),new s(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?_:Math.pow(_,e),new s(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,r=isNaN(e)||isNaN(this.s)?0:this.s,a=this.l,n=a+(a<.5?a:1-a)*r,i=2*a-n;return new f(C(e>=240?e-240:e+120,i,n),C(e,i,n),C(e<120?e+240:e-120,i,n),this.opacity)},clamp(){return new s(X(this.h),H(this.s),H(this.l),P(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=P(this.opacity);return`${e===1?"hsl(":"hsla("}${X(this.h)}, ${H(this.s)*100}%, ${H(this.l)*100}%${e===1?")":`, ${e})`}`}}));function X(e){return e=(e||0)%360,e<0?e+360:e}function H(e){return Math.max(0,Math.min(1,e||0))}function C(e,r,a){return(e<60?r+(a-r)*e/60:e<180?a:e<240?r+(a-r)*(240-e)/60:r)*255}function ce(e){const r=new Image;let a=null;const n=new Promise((l,u)=>{if(a){l(a);return}r.onload=()=>{a=r,l(r)},r.onerror=w=>{u(w)},r.src=typeof e=="string"?e:URL.createObjectURL(e)}),i=document.createElement("canvas"),t=i.getContext("webgl");if(!t)throw new Error("Failed to get WebGL context");const o=(()=>{const l=`
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
        v_texCoord = a_texCoord;
      }
    `,u=`
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
    `,w=G(t,t.VERTEX_SHADER,l),b=G(t,t.FRAGMENT_SHADER,u);return xe(t,w,b)})();return async l=>{const u=await n;i.width=u.width,i.height=u.height;const w=N(l);if(!w)throw new Error("Invalid target color");let b;const I=w.rgb(),v=I.r/255,y=I.g/255,$=I.b/255,L=Math.min(v,y,$),E=Math.max(v,y,$);E===L?b=0:E===v?b=((y-$)/(E-L)+(y<$?6:0))*60:E===y?b=(($-v)/(E-L)+2)*60:b=((v-y)/(E-L)+4)*60,t.useProgram(o);const j=t.getUniformLocation(o,"u_targetHue");if(j===null)throw new Error("Failed to get uniform location for u_targetHue");t.uniform1f(j,b);const W=t.createTexture();if(!W)throw new Error("Failed to create texture");t.bindTexture(t.TEXTURE_2D,W),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,u);const he=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,he),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const Y=t.getAttribLocation(o,"a_position");t.enableVertexAttribArray(Y),t.vertexAttribPointer(Y,2,t.FLOAT,!1,0,0);const de=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,de),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),t.STATIC_DRAW);const z=t.getAttribLocation(o,"a_texCoord");t.enableVertexAttribArray(z),t.vertexAttribPointer(z,2,t.FLOAT,!1,0,0),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.viewport(0,0,i.width,i.height),t.drawArrays(t.TRIANGLES,0,6);const ge=performance.now();return new Promise((ue,be)=>{i.toBlob(K=>{if(K){const me=performance.now();console.log(`Image loaded in ${me-ge} ms`),ue(K)}else be(new Error("Failed to create Blob from canvas"))})})}}function G(e,r,a){const n=e.createShader(r);if(!n)throw new Error("Failed to create shader");if(e.shaderSource(n,a),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(n)||"Shader compile error");return n}function xe(e,r,a){const n=e.createProgram();if(e.attachShader(n,r),e.attachShader(n,a),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(n)||"Program link error");return n}m.processImage=ce,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});
