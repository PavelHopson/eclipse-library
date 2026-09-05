(() => {
  // web/original-motion/vendor/c0d000e106acc85b04c2.js
  var um = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
  var dm = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
  var Pf = 0;
  var Tu = 1;
  var Lf = 2;
  var Kr = 1;
  var Df = 2;
  var ks = 3;
  var $n = 0;
  var Je = 1;
  var Un = 2;
  var Fn = 0;
  var Hi = 1;
  var Au = 2;
  var Eu = 3;
  var wu = 4;
  var Nf = 5;
  var mi = 100;
  var Uf = 101;
  var Ff = 102;
  var Of = 103;
  var Bf = 104;
  var zf = 200;
  var Vf = 201;
  var kf = 202;
  var Gf = 203;
  var so = 204;
  var ro = 205;
  var Hf = 206;
  var Wf = 207;
  var Xf = 208;
  var qf = 209;
  var Yf = 210;
  var Zf = 211;
  var Jf = 212;
  var $f = 213;
  var Kf = 214;
  var ao = 0;
  var oo = 1;
  var lo = 2;
  var Wi = 3;
  var co = 4;
  var ho = 5;
  var uo = 6;
  var fo = 7;
  var Qr = 0;
  var Qf = 1;
  var jf = 2;
  var Sn = 0;
  var Cu = 1;
  var Ru = 2;
  var Iu = 3;
  var Pu = 4;
  var Lu = 5;
  var Du = 6;
  var Nu = 7;
  var wl = 300;
  var On = 301;
  var Mi = 302;
  var jr = 303;
  var ta = 304;
  var Gs = 306;
  var dr = 1e3;
  var je = 1001;
  var fr = 1002;
  var Ee = 1003;
  var Uu = 1004;
  var Hs = 1005;
  var _e = 1006;
  var ea = 1007;
  var Bn = 1008;
  var sn = 1009;
  var Fu = 1010;
  var Ou = 1011;
  var Ws = 1012;
  var Cl = 1013;
  var mn = 1014;
  var qe = 1015;
  var zn = 1016;
  var Rl = 1017;
  var Il = 1018;
  var Xs = 1020;
  var Bu = 35902;
  var zu = 35899;
  var Vu = 1021;
  var ku = 1022;
  var Ye = 1023;
  var Pn = 1026;
  var Si = 1027;
  var Pl = 1028;
  var na = 1029;
  var bi = 1030;
  var Ll = 1031;
  var Dl = 1033;
  var ia = 33776;
  var sa = 33777;
  var ra = 33778;
  var aa = 33779;
  var Nl = 35840;
  var Ul = 35841;
  var Fl = 35842;
  var Ol = 35843;
  var Bl = 36196;
  var zl = 37492;
  var Vl = 37496;
  var kl = 37488;
  var Gl = 37489;
  var oa = 37490;
  var Hl = 37491;
  var Wl = 37808;
  var Xl = 37809;
  var ql = 37810;
  var Yl = 37811;
  var Zl = 37812;
  var Jl = 37813;
  var $l = 37814;
  var Kl = 37815;
  var Ql = 37816;
  var jl = 37817;
  var tc = 37818;
  var ec = 37819;
  var nc = 37820;
  var ic = 37821;
  var sc = 36492;
  var rc = 36494;
  var ac = 36495;
  var oc = 36283;
  var lc = 36284;
  var la = 36285;
  var cc = 36286;
  var pr = 2300;
  var po = 2301;
  var io = 2302;
  var oh = 2303;
  var zi = 2400;
  var Vi = 2401;
  var mr = 2402;
  var sp = 3200;
  var ei = 0;
  var rp = 1;
  var ni = "";
  var Qe = "srgb";
  var gr = "srgb-linear";
  var _r = "linear";
  var ae = "srgb";
  var Bi = 7680;
  var lh = 519;
  var ap = 512;
  var op = 513;
  var lp = 514;
  var uc = 515;
  var cp = 516;
  var hp = 517;
  var dc = 518;
  var up = 519;
  var xr = 35044;
  var Hu = "300 es";
  var ln = 2e3;
  var Xi = 2001;
  function ig(s30) {
    for (let t = s30.length - 1; t >= 0; --t) if (s30[t] >= 65535) return true;
    return false;
  }
  function dp(s30) {
    return ArrayBuffer.isView(s30) && !(s30 instanceof DataView);
  }
  function Cs(s30) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", s30);
  }
  function fp() {
    let s30 = Cs("canvas");
    return s30.style.display = "block", s30;
  }
  var vd = {};
  var gi = null;
  function vr(...s30) {
    let t = "THREE." + s30.shift();
    gi ? gi("log", t, ...s30) : console.log(t, ...s30);
  }
  function pp(s30) {
    let t = s30[0];
    if (typeof t == "string" && t.startsWith("TSL:")) {
      let e = s30[1];
      e && e.isStackTrace ? s30[0] += " " + e.getLocation() : s30[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
    }
    return s30;
  }
  function ot(...s30) {
    s30 = pp(s30);
    let t = "THREE." + s30.shift();
    if (gi) gi("warn", t, ...s30);
    else {
      let e = s30[0];
      e && e.isStackTrace ? console.warn(e.getError(t)) : console.warn(t, ...s30);
    }
  }
  function Rt(...s30) {
    s30 = pp(s30);
    let t = "THREE." + s30.shift();
    if (gi) gi("error", t, ...s30);
    else {
      let e = s30[0];
      e && e.isStackTrace ? console.error(e.getError(t)) : console.error(t, ...s30);
    }
  }
  function pi(...s30) {
    let t = s30.join(" ");
    t in vd || (vd[t] = true, ot(...s30));
  }
  function mp(s30, t, e) {
    return new Promise(function(n2, i2) {
      function r2() {
        switch (s30.clientWaitSync(t, s30.SYNC_FLUSH_COMMANDS_BIT, 0)) {
          case s30.WAIT_FAILED:
            i2();
            break;
          case s30.TIMEOUT_EXPIRED:
            setTimeout(r2, e);
            break;
          default:
            n2();
        }
      }
      setTimeout(r2, e);
    });
  }
  var gp = { [ao]: oo, [lo]: uo, [co]: fo, [Wi]: ho, [oo]: ao, [uo]: lo, [fo]: co, [ho]: Wi };
  var hn = class {
    addEventListener(t, e) {
      this._listeners === void 0 && (this._listeners = {});
      let n2 = this._listeners;
      n2[t] === void 0 && (n2[t] = []), n2[t].indexOf(e) === -1 && n2[t].push(e);
    }
    hasEventListener(t, e) {
      let n2 = this._listeners;
      return n2 === void 0 ? false : n2[t] !== void 0 && n2[t].indexOf(e) !== -1;
    }
    removeEventListener(t, e) {
      let n2 = this._listeners;
      if (n2 === void 0) return;
      let i2 = n2[t];
      if (i2 !== void 0) {
        let r2 = i2.indexOf(e);
        r2 !== -1 && i2.splice(r2, 1);
      }
    }
    dispatchEvent(t) {
      let e = this._listeners;
      if (e === void 0) return;
      let n2 = e[t.type];
      if (n2 !== void 0) {
        t.target = this;
        let i2 = n2.slice(0);
        for (let r2 = 0, a = i2.length; r2 < a; r2++) i2[r2].call(this, t);
        t.target = null;
      }
    }
  };
  var ze = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var yd = 1234567;
  var Gi = Math.PI / 180;
  var qi = 180 / Math.PI;
  function cn() {
    let s30 = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n2 = Math.random() * 4294967295 | 0;
    return (ze[s30 & 255] + ze[s30 >> 8 & 255] + ze[s30 >> 16 & 255] + ze[s30 >> 24 & 255] + "-" + ze[t & 255] + ze[t >> 8 & 255] + "-" + ze[t >> 16 & 15 | 64] + ze[t >> 24 & 255] + "-" + ze[e & 63 | 128] + ze[e >> 8 & 255] + "-" + ze[e >> 16 & 255] + ze[e >> 24 & 255] + ze[n2 & 255] + ze[n2 >> 8 & 255] + ze[n2 >> 16 & 255] + ze[n2 >> 24 & 255]).toLowerCase();
  }
  function Vt(s30, t, e) {
    return Math.max(t, Math.min(e, s30));
  }
  function Wu(s30, t) {
    return (s30 % t + t) % t;
  }
  function og(s30, t, e, n2, i2) {
    return n2 + (s30 - t) * (i2 - n2) / (e - t);
  }
  function lg(s30, t, e) {
    return s30 !== t ? (e - s30) / (t - s30) : 0;
  }
  function cr(s30, t, e) {
    return (1 - e) * s30 + e * t;
  }
  function cg(s30, t, e, n2) {
    return cr(s30, t, 1 - Math.exp(-e * n2));
  }
  function hg(s30, t = 1) {
    return t - Math.abs(Wu(s30, t * 2) - t);
  }
  function ug(s30, t, e) {
    return s30 <= t ? 0 : s30 >= e ? 1 : (s30 = (s30 - t) / (e - t), s30 * s30 * (3 - 2 * s30));
  }
  function dg(s30, t, e) {
    return s30 <= t ? 0 : s30 >= e ? 1 : (s30 = (s30 - t) / (e - t), s30 * s30 * s30 * (s30 * (s30 * 6 - 15) + 10));
  }
  function fg(s30, t) {
    return s30 + Math.floor(Math.random() * (t - s30 + 1));
  }
  function pg(s30, t) {
    return s30 + Math.random() * (t - s30);
  }
  function mg(s30) {
    return s30 * (0.5 - Math.random());
  }
  function gg(s30) {
    s30 !== void 0 && (yd = s30);
    let t = yd += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  function _g(s30) {
    return s30 * Gi;
  }
  function xg(s30) {
    return s30 * qi;
  }
  function vg(s30) {
    return (s30 & s30 - 1) === 0 && s30 !== 0;
  }
  function yg(s30) {
    return Math.pow(2, Math.ceil(Math.log(s30) / Math.LN2));
  }
  function Mg(s30) {
    return Math.pow(2, Math.floor(Math.log(s30) / Math.LN2));
  }
  function Sg(s30, t, e, n2, i2) {
    let r2 = Math.cos, a = Math.sin, o3 = r2(e / 2), l2 = a(e / 2), c3 = r2((t + n2) / 2), h3 = a((t + n2) / 2), d4 = r2((t - n2) / 2), u3 = a((t - n2) / 2), f3 = r2((n2 - t) / 2), p2 = a((n2 - t) / 2);
    switch (i2) {
      case "XYX":
        s30.set(o3 * h3, l2 * d4, l2 * u3, o3 * c3);
        break;
      case "YZY":
        s30.set(l2 * u3, o3 * h3, l2 * d4, o3 * c3);
        break;
      case "ZXZ":
        s30.set(l2 * d4, l2 * u3, o3 * h3, o3 * c3);
        break;
      case "XZX":
        s30.set(o3 * h3, l2 * p2, l2 * f3, o3 * c3);
        break;
      case "YXY":
        s30.set(l2 * f3, o3 * h3, l2 * p2, o3 * c3);
        break;
      case "ZYZ":
        s30.set(l2 * p2, l2 * f3, o3 * h3, o3 * c3);
        break;
      default:
        ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i2);
    }
  }
  function Xe(s30, t) {
    switch (t.constructor) {
      case Float32Array:
        return s30;
      case Uint32Array:
        return s30 / 4294967295;
      case Uint16Array:
        return s30 / 65535;
      case Uint8Array:
        return s30 / 255;
      case Int32Array:
        return Math.max(s30 / 2147483647, -1);
      case Int16Array:
        return Math.max(s30 / 32767, -1);
      case Int8Array:
        return Math.max(s30 / 127, -1);
      default:
        throw new Error("THREE.MathUtils: Invalid component type.");
    }
  }
  function $t(s30, t) {
    switch (t.constructor) {
      case Float32Array:
        return s30;
      case Uint32Array:
        return Math.round(s30 * 4294967295);
      case Uint16Array:
        return Math.round(s30 * 65535);
      case Uint8Array:
        return Math.round(s30 * 255);
      case Int32Array:
        return Math.round(s30 * 2147483647);
      case Int16Array:
        return Math.round(s30 * 32767);
      case Int8Array:
        return Math.round(s30 * 127);
      default:
        throw new Error("THREE.MathUtils: Invalid component type.");
    }
  }
  var bg = { DEG2RAD: Gi, RAD2DEG: qi, generateUUID: cn, clamp: Vt, euclideanModulo: Wu, mapLinear: og, inverseLerp: lg, lerp: cr, damp: cg, pingpong: hg, smoothstep: ug, smootherstep: dg, randInt: fg, randFloat: pg, randFloatSpread: mg, seededRandom: gg, degToRad: _g, radToDeg: xg, isPowerOfTwo: vg, ceilPowerOfTwo: yg, floorPowerOfTwo: Mg, setQuaternionFromProperEuler: Sg, normalize: $t, denormalize: Xe };
  var _a;
  var Q = (_a = class {
    constructor(t = 0, e = 0) {
      this.x = t, this.y = e;
    }
    get width() {
      return this.x;
    }
    set width(t) {
      this.x = t;
    }
    get height() {
      return this.y;
    }
    set height(t) {
      this.y = t;
    }
    set(t, e) {
      return this.x = t, this.y = e, this;
    }
    setScalar(t) {
      return this.x = t, this.y = t, this;
    }
    setX(t) {
      return this.x = t, this;
    }
    setY(t) {
      return this.y = t, this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("THREE.Vector2: index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("THREE.Vector2: index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t) {
      return this.x = t.x, this.y = t.y, this;
    }
    add(t) {
      return this.x += t.x, this.y += t.y, this;
    }
    addScalar(t) {
      return this.x += t, this.y += t, this;
    }
    addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this;
    }
    addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this;
    }
    sub(t) {
      return this.x -= t.x, this.y -= t.y, this;
    }
    subScalar(t) {
      return this.x -= t, this.y -= t, this;
    }
    subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this;
    }
    multiply(t) {
      return this.x *= t.x, this.y *= t.y, this;
    }
    multiplyScalar(t) {
      return this.x *= t, this.y *= t, this;
    }
    divide(t) {
      return this.x /= t.x, this.y /= t.y, this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
      let e = this.x, n2 = this.y, i2 = t.elements;
      return this.x = i2[0] * e + i2[3] * n2 + i2[6], this.y = i2[1] * e + i2[4] * n2 + i2[7], this;
    }
    min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
    }
    max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
    }
    clamp(t, e) {
      return this.x = Vt(this.x, t.x, e.x), this.y = Vt(this.y, t.y, e.y), this;
    }
    clampScalar(t, e) {
      return this.x = Vt(this.x, t, e), this.y = Vt(this.y, t, e), this;
    }
    clampLength(t, e) {
      let n2 = this.length();
      return this.divideScalar(n2 || 1).multiplyScalar(Vt(n2, t, e));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t) {
      let e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (e === 0) return Math.PI / 2;
      let n2 = this.dot(t) / e;
      return Math.acos(Vt(n2, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      let e = this.x - t.x, n2 = this.y - t.y;
      return e * e + n2 * n2;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
    }
    lerpVectors(t, e, n2) {
      return this.x = t.x + (e.x - t.x) * n2, this.y = t.y + (e.y - t.y) * n2, this;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    fromArray(t, e = 0) {
      return this.x = t[e], this.y = t[e + 1], this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this.x, t[e + 1] = this.y, t;
    }
    fromBufferAttribute(t, e) {
      return this.x = t.getX(e), this.y = t.getY(e), this;
    }
    rotateAround(t, e) {
      let n2 = Math.cos(e), i2 = Math.sin(e), r2 = this.x - t.x, a = this.y - t.y;
      return this.x = r2 * n2 - a * i2 + t.x, this.y = r2 * i2 + a * n2 + t.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }, _a.prototype.isVector2 = true, _a);
  var Fe = class {
    constructor(t = 0, e = 0, n2 = 0, i2 = 1) {
      this.isQuaternion = true, this._x = t, this._y = e, this._z = n2, this._w = i2;
    }
    static slerpFlat(t, e, n2, i2, r2, a, o3) {
      let l2 = n2[i2 + 0], c3 = n2[i2 + 1], h3 = n2[i2 + 2], d4 = n2[i2 + 3], u3 = r2[a + 0], f3 = r2[a + 1], p2 = r2[a + 2], _ = r2[a + 3];
      if (d4 !== _ || l2 !== u3 || c3 !== f3 || h3 !== p2) {
        let g = l2 * u3 + c3 * f3 + h3 * p2 + d4 * _;
        g < 0 && (u3 = -u3, f3 = -f3, p2 = -p2, _ = -_, g = -g);
        let m2 = 1 - o3;
        if (g < 0.9995) {
          let M2 = Math.acos(g), S2 = Math.sin(M2);
          m2 = Math.sin(m2 * M2) / S2, o3 = Math.sin(o3 * M2) / S2, l2 = l2 * m2 + u3 * o3, c3 = c3 * m2 + f3 * o3, h3 = h3 * m2 + p2 * o3, d4 = d4 * m2 + _ * o3;
        } else {
          l2 = l2 * m2 + u3 * o3, c3 = c3 * m2 + f3 * o3, h3 = h3 * m2 + p2 * o3, d4 = d4 * m2 + _ * o3;
          let M2 = 1 / Math.sqrt(l2 * l2 + c3 * c3 + h3 * h3 + d4 * d4);
          l2 *= M2, c3 *= M2, h3 *= M2, d4 *= M2;
        }
      }
      t[e] = l2, t[e + 1] = c3, t[e + 2] = h3, t[e + 3] = d4;
    }
    static multiplyQuaternionsFlat(t, e, n2, i2, r2, a) {
      let o3 = n2[i2], l2 = n2[i2 + 1], c3 = n2[i2 + 2], h3 = n2[i2 + 3], d4 = r2[a], u3 = r2[a + 1], f3 = r2[a + 2], p2 = r2[a + 3];
      return t[e] = o3 * p2 + h3 * d4 + l2 * f3 - c3 * u3, t[e + 1] = l2 * p2 + h3 * u3 + c3 * d4 - o3 * f3, t[e + 2] = c3 * p2 + h3 * f3 + o3 * u3 - l2 * d4, t[e + 3] = h3 * p2 - o3 * d4 - l2 * u3 - c3 * f3, t;
    }
    get x() {
      return this._x;
    }
    set x(t) {
      this._x = t, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      this._y = t, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      this._z = t, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t) {
      this._w = t, this._onChangeCallback();
    }
    set(t, e, n2, i2) {
      return this._x = t, this._y = e, this._z = n2, this._w = i2, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t) {
      return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
    }
    setFromEuler(t, e = true) {
      let n2 = t._x, i2 = t._y, r2 = t._z, a = t._order, o3 = Math.cos, l2 = Math.sin, c3 = o3(n2 / 2), h3 = o3(i2 / 2), d4 = o3(r2 / 2), u3 = l2(n2 / 2), f3 = l2(i2 / 2), p2 = l2(r2 / 2);
      switch (a) {
        case "XYZ":
          this._x = u3 * h3 * d4 + c3 * f3 * p2, this._y = c3 * f3 * d4 - u3 * h3 * p2, this._z = c3 * h3 * p2 + u3 * f3 * d4, this._w = c3 * h3 * d4 - u3 * f3 * p2;
          break;
        case "YXZ":
          this._x = u3 * h3 * d4 + c3 * f3 * p2, this._y = c3 * f3 * d4 - u3 * h3 * p2, this._z = c3 * h3 * p2 - u3 * f3 * d4, this._w = c3 * h3 * d4 + u3 * f3 * p2;
          break;
        case "ZXY":
          this._x = u3 * h3 * d4 - c3 * f3 * p2, this._y = c3 * f3 * d4 + u3 * h3 * p2, this._z = c3 * h3 * p2 + u3 * f3 * d4, this._w = c3 * h3 * d4 - u3 * f3 * p2;
          break;
        case "ZYX":
          this._x = u3 * h3 * d4 - c3 * f3 * p2, this._y = c3 * f3 * d4 + u3 * h3 * p2, this._z = c3 * h3 * p2 - u3 * f3 * d4, this._w = c3 * h3 * d4 + u3 * f3 * p2;
          break;
        case "YZX":
          this._x = u3 * h3 * d4 + c3 * f3 * p2, this._y = c3 * f3 * d4 + u3 * h3 * p2, this._z = c3 * h3 * p2 - u3 * f3 * d4, this._w = c3 * h3 * d4 - u3 * f3 * p2;
          break;
        case "XZY":
          this._x = u3 * h3 * d4 - c3 * f3 * p2, this._y = c3 * f3 * d4 - u3 * h3 * p2, this._z = c3 * h3 * p2 + u3 * f3 * d4, this._w = c3 * h3 * d4 + u3 * f3 * p2;
          break;
        default:
          ot("Quaternion: .setFromEuler() encountered an unknown order: " + a);
      }
      return e === true && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t, e) {
      let n2 = e / 2, i2 = Math.sin(n2);
      return this._x = t.x * i2, this._y = t.y * i2, this._z = t.z * i2, this._w = Math.cos(n2), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t) {
      let e = t.elements, n2 = e[0], i2 = e[4], r2 = e[8], a = e[1], o3 = e[5], l2 = e[9], c3 = e[2], h3 = e[6], d4 = e[10], u3 = n2 + o3 + d4;
      if (u3 > 0) {
        let f3 = 0.5 / Math.sqrt(u3 + 1);
        this._w = 0.25 / f3, this._x = (h3 - l2) * f3, this._y = (r2 - c3) * f3, this._z = (a - i2) * f3;
      } else if (n2 > o3 && n2 > d4) {
        let f3 = 2 * Math.sqrt(1 + n2 - o3 - d4);
        this._w = (h3 - l2) / f3, this._x = 0.25 * f3, this._y = (i2 + a) / f3, this._z = (r2 + c3) / f3;
      } else if (o3 > d4) {
        let f3 = 2 * Math.sqrt(1 + o3 - n2 - d4);
        this._w = (r2 - c3) / f3, this._x = (i2 + a) / f3, this._y = 0.25 * f3, this._z = (l2 + h3) / f3;
      } else {
        let f3 = 2 * Math.sqrt(1 + d4 - n2 - o3);
        this._w = (a - i2) / f3, this._x = (r2 + c3) / f3, this._y = (l2 + h3) / f3, this._z = 0.25 * f3;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t, e) {
      let n2 = t.dot(e) + 1;
      return n2 < 1e-8 ? (n2 = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n2) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n2)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n2), this.normalize();
    }
    angleTo(t) {
      return 2 * Math.acos(Math.abs(Vt(this.dot(t), -1, 1)));
    }
    rotateTowards(t, e) {
      let n2 = this.angleTo(t);
      if (n2 === 0) return this;
      let i2 = Math.min(1, e / n2);
      return this.slerp(t, i2), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let t = this.length();
      return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
    }
    multiply(t) {
      return this.multiplyQuaternions(this, t);
    }
    premultiply(t) {
      return this.multiplyQuaternions(t, this);
    }
    multiplyQuaternions(t, e) {
      let n2 = t._x, i2 = t._y, r2 = t._z, a = t._w, o3 = e._x, l2 = e._y, c3 = e._z, h3 = e._w;
      return this._x = n2 * h3 + a * o3 + i2 * c3 - r2 * l2, this._y = i2 * h3 + a * l2 + r2 * o3 - n2 * c3, this._z = r2 * h3 + a * c3 + n2 * l2 - i2 * o3, this._w = a * h3 - n2 * o3 - i2 * l2 - r2 * c3, this._onChangeCallback(), this;
    }
    slerp(t, e) {
      let n2 = t._x, i2 = t._y, r2 = t._z, a = t._w, o3 = this.dot(t);
      o3 < 0 && (n2 = -n2, i2 = -i2, r2 = -r2, a = -a, o3 = -o3);
      let l2 = 1 - e;
      if (o3 < 0.9995) {
        let c3 = Math.acos(o3), h3 = Math.sin(c3);
        l2 = Math.sin(l2 * c3) / h3, e = Math.sin(e * c3) / h3, this._x = this._x * l2 + n2 * e, this._y = this._y * l2 + i2 * e, this._z = this._z * l2 + r2 * e, this._w = this._w * l2 + a * e, this._onChangeCallback();
      } else this._x = this._x * l2 + n2 * e, this._y = this._y * l2 + i2 * e, this._z = this._z * l2 + r2 * e, this._w = this._w * l2 + a * e, this.normalize();
      return this;
    }
    slerpQuaternions(t, e, n2) {
      return this.copy(t).slerp(e, n2);
    }
    random() {
      let t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n2 = Math.random(), i2 = Math.sqrt(1 - n2), r2 = Math.sqrt(n2);
      return this.set(i2 * Math.sin(t), i2 * Math.cos(t), r2 * Math.sin(e), r2 * Math.cos(e));
    }
    equals(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
    }
    fromArray(t, e = 0) {
      return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
    }
    fromBufferAttribute(t, e) {
      return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t) {
      return this._onChangeCallback = t, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  };
  var _a2;
  var C = (_a2 = class {
    constructor(t = 0, e = 0, n2 = 0) {
      this.x = t, this.y = e, this.z = n2;
    }
    set(t, e, n2) {
      return n2 === void 0 && (n2 = this.z), this.x = t, this.y = e, this.z = n2, this;
    }
    setScalar(t) {
      return this.x = t, this.y = t, this.z = t, this;
    }
    setX(t) {
      return this.x = t, this;
    }
    setY(t) {
      return this.y = t, this;
    }
    setZ(t) {
      return this.z = t, this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("THREE.Vector3: index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("THREE.Vector3: index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this;
    }
    add(t) {
      return this.x += t.x, this.y += t.y, this.z += t.z, this;
    }
    addScalar(t) {
      return this.x += t, this.y += t, this.z += t, this;
    }
    addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
    }
    addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
    }
    sub(t) {
      return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
    }
    subScalar(t) {
      return this.x -= t, this.y -= t, this.z -= t, this;
    }
    subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
    }
    multiply(t) {
      return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
    }
    multiplyScalar(t) {
      return this.x *= t, this.y *= t, this.z *= t, this;
    }
    multiplyVectors(t, e) {
      return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
    }
    applyEuler(t) {
      return this.applyQuaternion(Md.setFromEuler(t));
    }
    applyAxisAngle(t, e) {
      return this.applyQuaternion(Md.setFromAxisAngle(t, e));
    }
    applyMatrix3(t) {
      let e = this.x, n2 = this.y, i2 = this.z, r2 = t.elements;
      return this.x = r2[0] * e + r2[3] * n2 + r2[6] * i2, this.y = r2[1] * e + r2[4] * n2 + r2[7] * i2, this.z = r2[2] * e + r2[5] * n2 + r2[8] * i2, this;
    }
    applyNormalMatrix(t) {
      return this.applyMatrix3(t).normalize();
    }
    applyMatrix4(t) {
      let e = this.x, n2 = this.y, i2 = this.z, r2 = t.elements, a = 1 / (r2[3] * e + r2[7] * n2 + r2[11] * i2 + r2[15]);
      return this.x = (r2[0] * e + r2[4] * n2 + r2[8] * i2 + r2[12]) * a, this.y = (r2[1] * e + r2[5] * n2 + r2[9] * i2 + r2[13]) * a, this.z = (r2[2] * e + r2[6] * n2 + r2[10] * i2 + r2[14]) * a, this;
    }
    applyQuaternion(t) {
      let e = this.x, n2 = this.y, i2 = this.z, r2 = t.x, a = t.y, o3 = t.z, l2 = t.w, c3 = 2 * (a * i2 - o3 * n2), h3 = 2 * (o3 * e - r2 * i2), d4 = 2 * (r2 * n2 - a * e);
      return this.x = e + l2 * c3 + a * d4 - o3 * h3, this.y = n2 + l2 * h3 + o3 * c3 - r2 * d4, this.z = i2 + l2 * d4 + r2 * h3 - a * c3, this;
    }
    project(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
    }
    unproject(t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
    }
    transformDirection(t) {
      let e = this.x, n2 = this.y, i2 = this.z, r2 = t.elements;
      return this.x = r2[0] * e + r2[4] * n2 + r2[8] * i2, this.y = r2[1] * e + r2[5] * n2 + r2[9] * i2, this.z = r2[2] * e + r2[6] * n2 + r2[10] * i2, this.normalize();
    }
    divide(t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
    }
    max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
    }
    clamp(t, e) {
      return this.x = Vt(this.x, t.x, e.x), this.y = Vt(this.y, t.y, e.y), this.z = Vt(this.z, t.z, e.z), this;
    }
    clampScalar(t, e) {
      return this.x = Vt(this.x, t, e), this.y = Vt(this.y, t, e), this.z = Vt(this.z, t, e), this;
    }
    clampLength(t, e) {
      let n2 = this.length();
      return this.divideScalar(n2 || 1).multiplyScalar(Vt(n2, t, e));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
    }
    lerpVectors(t, e, n2) {
      return this.x = t.x + (e.x - t.x) * n2, this.y = t.y + (e.y - t.y) * n2, this.z = t.z + (e.z - t.z) * n2, this;
    }
    cross(t) {
      return this.crossVectors(this, t);
    }
    crossVectors(t, e) {
      let n2 = t.x, i2 = t.y, r2 = t.z, a = e.x, o3 = e.y, l2 = e.z;
      return this.x = i2 * l2 - r2 * o3, this.y = r2 * a - n2 * l2, this.z = n2 * o3 - i2 * a, this;
    }
    projectOnVector(t) {
      let e = t.lengthSq();
      if (e === 0) return this.set(0, 0, 0);
      let n2 = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n2);
    }
    projectOnPlane(t) {
      return Sc.copy(this).projectOnVector(t), this.sub(Sc);
    }
    reflect(t) {
      return this.sub(Sc.copy(t).multiplyScalar(2 * this.dot(t)));
    }
    angleTo(t) {
      let e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (e === 0) return Math.PI / 2;
      let n2 = this.dot(t) / e;
      return Math.acos(Vt(n2, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      let e = this.x - t.x, n2 = this.y - t.y, i2 = this.z - t.z;
      return e * e + n2 * n2 + i2 * i2;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
    }
    setFromSpherical(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    }
    setFromSphericalCoords(t, e, n2) {
      let i2 = Math.sin(e) * t;
      return this.x = i2 * Math.sin(n2), this.y = Math.cos(e) * t, this.z = i2 * Math.cos(n2), this;
    }
    setFromCylindrical(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    }
    setFromCylindricalCoords(t, e, n2) {
      return this.x = t * Math.sin(e), this.y = n2, this.z = t * Math.cos(e), this;
    }
    setFromMatrixPosition(t) {
      let e = t.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this;
    }
    setFromMatrixScale(t) {
      let e = this.setFromMatrixColumn(t, 0).length(), n2 = this.setFromMatrixColumn(t, 1).length(), i2 = this.setFromMatrixColumn(t, 2).length();
      return this.x = e, this.y = n2, this.z = i2, this;
    }
    setFromMatrixColumn(t, e) {
      return this.fromArray(t.elements, e * 4);
    }
    setFromMatrix3Column(t, e) {
      return this.fromArray(t.elements, e * 3);
    }
    setFromEuler(t) {
      return this.x = t._x, this.y = t._y, this.z = t._z, this;
    }
    setFromColor(t) {
      return this.x = t.r, this.y = t.g, this.z = t.b, this;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    }
    fromArray(t, e = 0) {
      return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
    }
    fromBufferAttribute(t, e) {
      return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      let t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n2 = Math.sqrt(1 - e * e);
      return this.x = n2 * Math.cos(t), this.y = e, this.z = n2 * Math.sin(t), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }, _a2.prototype.isVector3 = true, _a2);
  var Sc = new C();
  var Md = new Fe();
  var _a3;
  var Xt = (_a3 = class {
    constructor(t, e, n2, i2, r2, a, o3, l2, c3) {
      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n2, i2, r2, a, o3, l2, c3);
    }
    set(t, e, n2, i2, r2, a, o3, l2, c3) {
      let h3 = this.elements;
      return h3[0] = t, h3[1] = i2, h3[2] = o3, h3[3] = e, h3[4] = r2, h3[5] = l2, h3[6] = n2, h3[7] = a, h3[8] = c3, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t) {
      let e = this.elements, n2 = t.elements;
      return e[0] = n2[0], e[1] = n2[1], e[2] = n2[2], e[3] = n2[3], e[4] = n2[4], e[5] = n2[5], e[6] = n2[6], e[7] = n2[7], e[8] = n2[8], this;
    }
    extractBasis(t, e, n2) {
      return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n2.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(t) {
      let e = t.elements;
      return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      let n2 = t.elements, i2 = e.elements, r2 = this.elements, a = n2[0], o3 = n2[3], l2 = n2[6], c3 = n2[1], h3 = n2[4], d4 = n2[7], u3 = n2[2], f3 = n2[5], p2 = n2[8], _ = i2[0], g = i2[3], m2 = i2[6], M2 = i2[1], S2 = i2[4], v = i2[7], E = i2[2], T2 = i2[5], R2 = i2[8];
      return r2[0] = a * _ + o3 * M2 + l2 * E, r2[3] = a * g + o3 * S2 + l2 * T2, r2[6] = a * m2 + o3 * v + l2 * R2, r2[1] = c3 * _ + h3 * M2 + d4 * E, r2[4] = c3 * g + h3 * S2 + d4 * T2, r2[7] = c3 * m2 + h3 * v + d4 * R2, r2[2] = u3 * _ + f3 * M2 + p2 * E, r2[5] = u3 * g + f3 * S2 + p2 * T2, r2[8] = u3 * m2 + f3 * v + p2 * R2, this;
    }
    multiplyScalar(t) {
      let e = this.elements;
      return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
    }
    determinant() {
      let t = this.elements, e = t[0], n2 = t[1], i2 = t[2], r2 = t[3], a = t[4], o3 = t[5], l2 = t[6], c3 = t[7], h3 = t[8];
      return e * a * h3 - e * o3 * c3 - n2 * r2 * h3 + n2 * o3 * l2 + i2 * r2 * c3 - i2 * a * l2;
    }
    invert() {
      let t = this.elements, e = t[0], n2 = t[1], i2 = t[2], r2 = t[3], a = t[4], o3 = t[5], l2 = t[6], c3 = t[7], h3 = t[8], d4 = h3 * a - o3 * c3, u3 = o3 * l2 - h3 * r2, f3 = c3 * r2 - a * l2, p2 = e * d4 + n2 * u3 + i2 * f3;
      if (p2 === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      let _ = 1 / p2;
      return t[0] = d4 * _, t[1] = (i2 * c3 - h3 * n2) * _, t[2] = (o3 * n2 - i2 * a) * _, t[3] = u3 * _, t[4] = (h3 * e - i2 * l2) * _, t[5] = (i2 * r2 - o3 * e) * _, t[6] = f3 * _, t[7] = (n2 * l2 - c3 * e) * _, t[8] = (a * e - n2 * r2) * _, this;
    }
    transpose() {
      let t, e = this.elements;
      return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
    }
    getNormalMatrix(t) {
      return this.setFromMatrix4(t).invert().transpose();
    }
    transposeIntoArray(t) {
      let e = this.elements;
      return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
    }
    setUvTransform(t, e, n2, i2, r2, a, o3) {
      let l2 = Math.cos(r2), c3 = Math.sin(r2);
      return this.set(n2 * l2, n2 * c3, -n2 * (l2 * a + c3 * o3) + a + t, -i2 * c3, i2 * l2, -i2 * (-c3 * a + l2 * o3) + o3 + e, 0, 0, 1), this;
    }
    scale(t, e) {
      return pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(bc.makeScale(t, e)), this;
    }
    rotate(t) {
      return pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(bc.makeRotation(-t)), this;
    }
    translate(t, e) {
      return pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(bc.makeTranslation(t, e)), this;
    }
    makeTranslation(t, e) {
      return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
    }
    makeRotation(t) {
      let e = Math.cos(t), n2 = Math.sin(t);
      return this.set(e, -n2, 0, n2, e, 0, 0, 0, 1), this;
    }
    makeScale(t, e) {
      return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
    }
    equals(t) {
      let e = this.elements, n2 = t.elements;
      for (let i2 = 0; i2 < 9; i2++) if (e[i2] !== n2[i2]) return false;
      return true;
    }
    fromArray(t, e = 0) {
      for (let n2 = 0; n2 < 9; n2++) this.elements[n2] = t[n2 + e];
      return this;
    }
    toArray(t = [], e = 0) {
      let n2 = this.elements;
      return t[e] = n2[0], t[e + 1] = n2[1], t[e + 2] = n2[2], t[e + 3] = n2[3], t[e + 4] = n2[4], t[e + 5] = n2[5], t[e + 6] = n2[6], t[e + 7] = n2[7], t[e + 8] = n2[8], t;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }, _a3.prototype.isMatrix3 = true, _a3);
  var bc = new Xt();
  var Sd = new Xt().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
  var bd = new Xt().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
  function Tg() {
    let s30 = { enabled: true, workingColorSpace: gr, spaces: {}, convert: function(i2, r2, a) {
      return this.enabled === false || r2 === a || !r2 || !a || (this.spaces[r2].transfer === ae && (i2.r = Jn(i2.r), i2.g = Jn(i2.g), i2.b = Jn(i2.b)), this.spaces[r2].primaries !== this.spaces[a].primaries && (i2.applyMatrix3(this.spaces[r2].toXYZ), i2.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === ae && (i2.r = ws(i2.r), i2.g = ws(i2.g), i2.b = ws(i2.b))), i2;
    }, workingToColorSpace: function(i2, r2) {
      return this.convert(i2, this.workingColorSpace, r2);
    }, colorSpaceToWorking: function(i2, r2) {
      return this.convert(i2, r2, this.workingColorSpace);
    }, getPrimaries: function(i2) {
      return this.spaces[i2].primaries;
    }, getTransfer: function(i2) {
      return i2 === ni ? _r : this.spaces[i2].transfer;
    }, getToneMappingMode: function(i2) {
      return this.spaces[i2].outputColorSpaceConfig.toneMappingMode || "standard";
    }, getLuminanceCoefficients: function(i2, r2 = this.workingColorSpace) {
      return i2.fromArray(this.spaces[r2].luminanceCoefficients);
    }, define: function(i2) {
      Object.assign(this.spaces, i2);
    }, _getMatrix: function(i2, r2, a) {
      return i2.copy(this.spaces[r2].toXYZ).multiply(this.spaces[a].fromXYZ);
    }, _getDrawingBufferColorSpace: function(i2) {
      return this.spaces[i2].outputColorSpaceConfig.drawingBufferColorSpace;
    }, _getUnpackColorSpace: function(i2 = this.workingColorSpace) {
      return this.spaces[i2].workingColorSpaceConfig.unpackColorSpace;
    }, fromWorkingColorSpace: function(i2, r2) {
      return pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), s30.workingToColorSpace(i2, r2);
    }, toWorkingColorSpace: function(i2, r2) {
      return pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), s30.colorSpaceToWorking(i2, r2);
    } }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n2 = [0.3127, 0.329];
    return s30.define({ [gr]: { primaries: t, whitePoint: n2, transfer: _r, toXYZ: Sd, fromXYZ: bd, luminanceCoefficients: e, workingColorSpaceConfig: { unpackColorSpace: Qe }, outputColorSpaceConfig: { drawingBufferColorSpace: Qe } }, [Qe]: { primaries: t, whitePoint: n2, transfer: ae, toXYZ: Sd, fromXYZ: bd, luminanceCoefficients: e, outputColorSpaceConfig: { drawingBufferColorSpace: Qe } } }), s30;
  }
  var ee = Tg();
  function Jn(s30) {
    return s30 < 0.04045 ? s30 * 0.0773993808 : Math.pow(s30 * 0.9478672986 + 0.0521327014, 2.4);
  }
  function ws(s30) {
    return s30 < 31308e-7 ? s30 * 12.92 : 1.055 * Math.pow(s30, 0.41666) - 0.055;
  }
  var as;
  var mo = class {
    static getDataURL(t, e = "image/png") {
      if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
      let n2;
      if (t instanceof HTMLCanvasElement) n2 = t;
      else {
        as === void 0 && (as = Cs("canvas")), as.width = t.width, as.height = t.height;
        let i2 = as.getContext("2d");
        t instanceof ImageData ? i2.putImageData(t, 0, 0) : i2.drawImage(t, 0, 0, t.width, t.height), n2 = as;
      }
      return n2.toDataURL(e);
    }
    static sRGBToLinear(t) {
      if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
        let e = Cs("canvas");
        e.width = t.width, e.height = t.height;
        let n2 = e.getContext("2d");
        n2.drawImage(t, 0, 0, t.width, t.height);
        let i2 = n2.getImageData(0, 0, t.width, t.height), r2 = i2.data;
        for (let a = 0; a < r2.length; a++) r2[a] = Jn(r2[a] / 255) * 255;
        return n2.putImageData(i2, 0, 0), e;
      } else if (t.data) {
        let e = t.data.slice(0);
        for (let n2 = 0; n2 < e.length; n2++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n2] = Math.floor(Jn(e[n2] / 255) * 255) : e[n2] = Jn(e[n2]);
        return { data: e, width: t.width, height: t.height };
      } else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
    }
  };
  var Ag = 0;
  var Rn = class {
    constructor(t = null) {
      this.isSource = true, Object.defineProperty(this, "id", { value: Ag++ }), this.uuid = cn(), this.data = t, this.dataReady = true, this.version = 0;
    }
    getSize(t) {
      let e = this.data;
      return typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight, 0) : typeof VideoFrame < "u" && e instanceof VideoFrame ? t.set(e.displayWidth, e.displayHeight, 0) : e !== null ? t.set(e.width, e.height, e.depth || 0) : t.set(0, 0, 0), t;
    }
    set needsUpdate(t) {
      t === true && this.version++;
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string";
      if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
      let n2 = { uuid: this.uuid, url: "" }, i2 = this.data;
      if (i2 !== null) {
        let r2;
        if (Array.isArray(i2)) {
          r2 = [];
          for (let a = 0, o3 = i2.length; a < o3; a++) i2[a].isDataTexture ? r2.push(Tc(i2[a].image)) : r2.push(Tc(i2[a]));
        } else r2 = Tc(i2);
        n2.url = r2;
      }
      return e || (t.images[this.uuid] = n2), n2;
    }
  };
  function Tc(s30) {
    return typeof HTMLImageElement < "u" && s30 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s30 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s30 instanceof ImageBitmap ? mo.getDataURL(s30) : s30.data ? { data: Array.from(s30.data), width: s30.width, height: s30.height, type: s30.data.constructor.name } : (ot("Texture: Unable to serialize Texture."), {});
  }
  var Eg = 0;
  var Ac = new C();
  var we = class s extends hn {
    constructor(t = s.DEFAULT_IMAGE, e = s.DEFAULT_MAPPING, n2 = je, i2 = je, r2 = _e, a = Bn, o3 = Ye, l2 = sn, c3 = s.DEFAULT_ANISOTROPY, h3 = ni) {
      super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Eg++ }), this.uuid = cn(), this.name = "", this.source = new Rn(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n2, this.wrapT = i2, this.magFilter = r2, this.minFilter = a, this.anisotropy = c3, this.format = o3, this.internalFormat = null, this.type = l2, this.offset = new Q(0, 0), this.repeat = new Q(1, 1), this.center = new Q(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Xt(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h3, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = false;
    }
    get width() {
      return this.source.getSize(Ac).x;
    }
    get height() {
      return this.source.getSize(Ac).y;
    }
    get depth() {
      return this.source.getSize(Ac).z;
    }
    get image() {
      return this.source.data;
    }
    set image(t) {
      this.source.data = t;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    addUpdateRange(t, e) {
      this.updateRanges.push({ start: t, count: e });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.normalized = t.normalized, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = true, this;
    }
    setValues(t) {
      for (let e in t) {
        let n2 = t[e];
        if (n2 === void 0) {
          ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);
          continue;
        }
        let i2 = this[e];
        if (i2 === void 0) {
          ot(`Texture.setValues(): property '${e}' does not exist.`);
          continue;
        }
        i2 && n2 && i2.isVector2 && n2.isVector2 || i2 && n2 && i2.isVector3 && n2.isVector3 || i2 && n2 && i2.isMatrix3 && n2.isMatrix3 ? i2.copy(n2) : this[e] = n2;
      }
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string";
      if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
      let n2 = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, normalized: this.normalized, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
      return Object.keys(this.userData).length > 0 && (n2.userData = this.userData), e || (t.textures[this.uuid] = n2), n2;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t) {
      if (this.mapping !== wl) return t;
      if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
        case dr:
          t.x = t.x - Math.floor(t.x);
          break;
        case je:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case fr:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
      if (t.y < 0 || t.y > 1) switch (this.wrapT) {
        case dr:
          t.y = t.y - Math.floor(t.y);
          break;
        case je:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case fr:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
      return this.flipY && (t.y = 1 - t.y), t;
    }
    set needsUpdate(t) {
      t === true && (this.version++, this.source.needsUpdate = true);
    }
    set needsPMREMUpdate(t) {
      t === true && this.pmremVersion++;
    }
  };
  we.DEFAULT_IMAGE = null;
  we.DEFAULT_MAPPING = wl;
  we.DEFAULT_ANISOTROPY = 1;
  var _a4;
  var ce = (_a4 = class {
    constructor(t = 0, e = 0, n2 = 0, i2 = 1) {
      this.x = t, this.y = e, this.z = n2, this.w = i2;
    }
    get width() {
      return this.z;
    }
    set width(t) {
      this.z = t;
    }
    get height() {
      return this.w;
    }
    set height(t) {
      this.w = t;
    }
    set(t, e, n2, i2) {
      return this.x = t, this.y = e, this.z = n2, this.w = i2, this;
    }
    setScalar(t) {
      return this.x = t, this.y = t, this.z = t, this.w = t, this;
    }
    setX(t) {
      return this.x = t, this;
    }
    setY(t) {
      return this.y = t, this;
    }
    setZ(t) {
      return this.z = t, this;
    }
    setW(t) {
      return this.w = t, this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("THREE.Vector4: index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("THREE.Vector4: index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
    }
    add(t) {
      return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
    }
    addScalar(t) {
      return this.x += t, this.y += t, this.z += t, this.w += t, this;
    }
    addVectors(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
    }
    addScaledVector(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
    }
    sub(t) {
      return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
    }
    subScalar(t) {
      return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
    }
    subVectors(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
    }
    multiply(t) {
      return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
    }
    multiplyScalar(t) {
      return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
    }
    applyMatrix4(t) {
      let e = this.x, n2 = this.y, i2 = this.z, r2 = this.w, a = t.elements;
      return this.x = a[0] * e + a[4] * n2 + a[8] * i2 + a[12] * r2, this.y = a[1] * e + a[5] * n2 + a[9] * i2 + a[13] * r2, this.z = a[2] * e + a[6] * n2 + a[10] * i2 + a[14] * r2, this.w = a[3] * e + a[7] * n2 + a[11] * i2 + a[15] * r2, this;
    }
    divide(t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    setAxisAngleFromQuaternion(t) {
      this.w = 2 * Math.acos(t.w);
      let e = Math.sqrt(1 - t.w * t.w);
      return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
    }
    setAxisAngleFromRotationMatrix(t) {
      let e, n2, i2, r2, l2 = t.elements, c3 = l2[0], h3 = l2[4], d4 = l2[8], u3 = l2[1], f3 = l2[5], p2 = l2[9], _ = l2[2], g = l2[6], m2 = l2[10];
      if (Math.abs(h3 - u3) < 0.01 && Math.abs(d4 - _) < 0.01 && Math.abs(p2 - g) < 0.01) {
        if (Math.abs(h3 + u3) < 0.1 && Math.abs(d4 + _) < 0.1 && Math.abs(p2 + g) < 0.1 && Math.abs(c3 + f3 + m2 - 3) < 0.1) return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        let S2 = (c3 + 1) / 2, v = (f3 + 1) / 2, E = (m2 + 1) / 2, T2 = (h3 + u3) / 4, R2 = (d4 + _) / 4, x3 = (p2 + g) / 4;
        return S2 > v && S2 > E ? S2 < 0.01 ? (n2 = 0, i2 = 0.707106781, r2 = 0.707106781) : (n2 = Math.sqrt(S2), i2 = T2 / n2, r2 = R2 / n2) : v > E ? v < 0.01 ? (n2 = 0.707106781, i2 = 0, r2 = 0.707106781) : (i2 = Math.sqrt(v), n2 = T2 / i2, r2 = x3 / i2) : E < 0.01 ? (n2 = 0.707106781, i2 = 0.707106781, r2 = 0) : (r2 = Math.sqrt(E), n2 = R2 / r2, i2 = x3 / r2), this.set(n2, i2, r2, e), this;
      }
      let M2 = Math.sqrt((g - p2) * (g - p2) + (d4 - _) * (d4 - _) + (u3 - h3) * (u3 - h3));
      return Math.abs(M2) < 1e-3 && (M2 = 1), this.x = (g - p2) / M2, this.y = (d4 - _) / M2, this.z = (u3 - h3) / M2, this.w = Math.acos((c3 + f3 + m2 - 1) / 2), this;
    }
    setFromMatrixPosition(t) {
      let e = t.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
    }
    min(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
    }
    max(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
    }
    clamp(t, e) {
      return this.x = Vt(this.x, t.x, e.x), this.y = Vt(this.y, t.y, e.y), this.z = Vt(this.z, t.z, e.z), this.w = Vt(this.w, t.w, e.w), this;
    }
    clampScalar(t, e) {
      return this.x = Vt(this.x, t, e), this.y = Vt(this.y, t, e), this.z = Vt(this.z, t, e), this.w = Vt(this.w, t, e), this;
    }
    clampLength(t, e) {
      let n2 = this.length();
      return this.divideScalar(n2 || 1).multiplyScalar(Vt(n2, t, e));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
    }
    lerpVectors(t, e, n2) {
      return this.x = t.x + (e.x - t.x) * n2, this.y = t.y + (e.y - t.y) * n2, this.z = t.z + (e.z - t.z) * n2, this.w = t.w + (e.w - t.w) * n2, this;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
    }
    fromArray(t, e = 0) {
      return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
    }
    fromBufferAttribute(t, e) {
      return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }, _a4.prototype.isVector4 = true, _a4);
  var yr = class extends hn {
    constructor(t = 1, e = 1, n2 = {}) {
      super(), n2 = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: _e, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false, useArrayDepthTexture: false }, n2), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = n2.depth, this.scissor = new ce(0, 0, t, e), this.scissorTest = false, this.viewport = new ce(0, 0, t, e), this.textures = [];
      let i2 = { width: t, height: e, depth: n2.depth }, r2 = new we(i2), a = n2.count;
      for (let o3 = 0; o3 < a; o3++) this.textures[o3] = r2.clone(), this.textures[o3].isRenderTargetTexture = true, this.textures[o3].renderTarget = this;
      this._setTextureOptions(n2), this.depthBuffer = n2.depthBuffer, this.stencilBuffer = n2.stencilBuffer, this.resolveDepthBuffer = n2.resolveDepthBuffer, this.resolveStencilBuffer = n2.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n2.depthTexture, this.samples = n2.samples, this.multiview = n2.multiview, this.useArrayDepthTexture = n2.useArrayDepthTexture;
    }
    _setTextureOptions(t = {}) {
      let e = { minFilter: _e, generateMipmaps: false, flipY: false, internalFormat: null };
      t.mapping !== void 0 && (e.mapping = t.mapping), t.wrapS !== void 0 && (e.wrapS = t.wrapS), t.wrapT !== void 0 && (e.wrapT = t.wrapT), t.wrapR !== void 0 && (e.wrapR = t.wrapR), t.magFilter !== void 0 && (e.magFilter = t.magFilter), t.minFilter !== void 0 && (e.minFilter = t.minFilter), t.format !== void 0 && (e.format = t.format), t.type !== void 0 && (e.type = t.type), t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy), t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace), t.flipY !== void 0 && (e.flipY = t.flipY), t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps), t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat);
      for (let n2 = 0; n2 < this.textures.length; n2++) this.textures[n2].setValues(e);
    }
    get texture() {
      return this.textures[0];
    }
    set texture(t) {
      this.textures[0] = t;
    }
    set depthTexture(t) {
      this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t;
    }
    get depthTexture() {
      return this._depthTexture;
    }
    setSize(t, e, n2 = 1) {
      if (this.width !== t || this.height !== e || this.depth !== n2) {
        this.width = t, this.height = e, this.depth = n2;
        for (let i2 = 0, r2 = this.textures.length; i2 < r2; i2++) this.textures[i2].image.width = t, this.textures[i2].image.height = e, this.textures[i2].image.depth = n2, this.textures[i2].isData3DTexture !== true && (this.textures[i2].isArrayTexture = this.textures[i2].image.depth > 1);
        this.dispose();
      }
      this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
      for (let e = 0, n2 = t.textures.length; e < n2; e++) {
        this.textures[e] = t.textures[e].clone(), this.textures[e].isRenderTargetTexture = true, this.textures[e].renderTarget = this;
        let i2 = Object.assign({}, t.textures[e].image);
        this.textures[e].source = new Rn(i2);
      }
      return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this.multiview = t.multiview, this.useArrayDepthTexture = t.useArrayDepthTexture, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Ze = class extends yr {
    constructor(t = 1, e = 1, n2 = {}) {
      super(t, e, n2), this.isWebGLRenderTarget = true;
    }
  };
  var Rs = class extends we {
    constructor(t = null, e = 1, n2 = 1, i2 = 1) {
      super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: n2, depth: i2 }, this.magFilter = Ee, this.minFilter = Ee, this.wrapR = je, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(t) {
      this.layerUpdates.add(t);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  };
  var Is = class extends we {
    constructor(t = null, e = 1, n2 = 1, i2 = 1) {
      super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: n2, depth: i2 }, this.magFilter = Ee, this.minFilter = Ee, this.wrapR = je, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var _a5;
  var Ht = (_a5 = class {
    constructor(t, e, n2, i2, r2, a, o3, l2, c3, h3, d4, u3, f3, p2, _, g) {
      this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n2, i2, r2, a, o3, l2, c3, h3, d4, u3, f3, p2, _, g);
    }
    set(t, e, n2, i2, r2, a, o3, l2, c3, h3, d4, u3, f3, p2, _, g) {
      let m2 = this.elements;
      return m2[0] = t, m2[4] = e, m2[8] = n2, m2[12] = i2, m2[1] = r2, m2[5] = a, m2[9] = o3, m2[13] = l2, m2[2] = c3, m2[6] = h3, m2[10] = d4, m2[14] = u3, m2[3] = f3, m2[7] = p2, m2[11] = _, m2[15] = g, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new _a5().fromArray(this.elements);
    }
    copy(t) {
      let e = this.elements, n2 = t.elements;
      return e[0] = n2[0], e[1] = n2[1], e[2] = n2[2], e[3] = n2[3], e[4] = n2[4], e[5] = n2[5], e[6] = n2[6], e[7] = n2[7], e[8] = n2[8], e[9] = n2[9], e[10] = n2[10], e[11] = n2[11], e[12] = n2[12], e[13] = n2[13], e[14] = n2[14], e[15] = n2[15], this;
    }
    copyPosition(t) {
      let e = this.elements, n2 = t.elements;
      return e[12] = n2[12], e[13] = n2[13], e[14] = n2[14], this;
    }
    setFromMatrix3(t) {
      let e = t.elements;
      return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(t, e, n2) {
      return this.determinantAffine() === 0 ? (t.set(1, 0, 0), e.set(0, 1, 0), n2.set(0, 0, 1), this) : (t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n2.setFromMatrixColumn(this, 2), this);
    }
    makeBasis(t, e, n2) {
      return this.set(t.x, e.x, n2.x, 0, t.y, e.y, n2.y, 0, t.z, e.z, n2.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(t) {
      if (t.determinantAffine() === 0) return this.identity();
      let e = this.elements, n2 = t.elements, i2 = 1 / os.setFromMatrixColumn(t, 0).length(), r2 = 1 / os.setFromMatrixColumn(t, 1).length(), a = 1 / os.setFromMatrixColumn(t, 2).length();
      return e[0] = n2[0] * i2, e[1] = n2[1] * i2, e[2] = n2[2] * i2, e[3] = 0, e[4] = n2[4] * r2, e[5] = n2[5] * r2, e[6] = n2[6] * r2, e[7] = 0, e[8] = n2[8] * a, e[9] = n2[9] * a, e[10] = n2[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromEuler(t) {
      let e = this.elements, n2 = t.x, i2 = t.y, r2 = t.z, a = Math.cos(n2), o3 = Math.sin(n2), l2 = Math.cos(i2), c3 = Math.sin(i2), h3 = Math.cos(r2), d4 = Math.sin(r2);
      if (t.order === "XYZ") {
        let u3 = a * h3, f3 = a * d4, p2 = o3 * h3, _ = o3 * d4;
        e[0] = l2 * h3, e[4] = -l2 * d4, e[8] = c3, e[1] = f3 + p2 * c3, e[5] = u3 - _ * c3, e[9] = -o3 * l2, e[2] = _ - u3 * c3, e[6] = p2 + f3 * c3, e[10] = a * l2;
      } else if (t.order === "YXZ") {
        let u3 = l2 * h3, f3 = l2 * d4, p2 = c3 * h3, _ = c3 * d4;
        e[0] = u3 + _ * o3, e[4] = p2 * o3 - f3, e[8] = a * c3, e[1] = a * d4, e[5] = a * h3, e[9] = -o3, e[2] = f3 * o3 - p2, e[6] = _ + u3 * o3, e[10] = a * l2;
      } else if (t.order === "ZXY") {
        let u3 = l2 * h3, f3 = l2 * d4, p2 = c3 * h3, _ = c3 * d4;
        e[0] = u3 - _ * o3, e[4] = -a * d4, e[8] = p2 + f3 * o3, e[1] = f3 + p2 * o3, e[5] = a * h3, e[9] = _ - u3 * o3, e[2] = -a * c3, e[6] = o3, e[10] = a * l2;
      } else if (t.order === "ZYX") {
        let u3 = a * h3, f3 = a * d4, p2 = o3 * h3, _ = o3 * d4;
        e[0] = l2 * h3, e[4] = p2 * c3 - f3, e[8] = u3 * c3 + _, e[1] = l2 * d4, e[5] = _ * c3 + u3, e[9] = f3 * c3 - p2, e[2] = -c3, e[6] = o3 * l2, e[10] = a * l2;
      } else if (t.order === "YZX") {
        let u3 = a * l2, f3 = a * c3, p2 = o3 * l2, _ = o3 * c3;
        e[0] = l2 * h3, e[4] = _ - u3 * d4, e[8] = p2 * d4 + f3, e[1] = d4, e[5] = a * h3, e[9] = -o3 * h3, e[2] = -c3 * h3, e[6] = f3 * d4 + p2, e[10] = u3 - _ * d4;
      } else if (t.order === "XZY") {
        let u3 = a * l2, f3 = a * c3, p2 = o3 * l2, _ = o3 * c3;
        e[0] = l2 * h3, e[4] = -d4, e[8] = c3 * h3, e[1] = u3 * d4 + _, e[5] = a * h3, e[9] = f3 * d4 - p2, e[2] = p2 * d4 - f3, e[6] = o3 * h3, e[10] = _ * d4 + u3;
      }
      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromQuaternion(t) {
      return this.compose(wg, t, Cg);
    }
    lookAt(t, e, n2) {
      let i2 = this.elements;
      return an.subVectors(t, e), an.lengthSq() === 0 && (an.z = 1), an.normalize(), ai.crossVectors(n2, an), ai.lengthSq() === 0 && (Math.abs(n2.z) === 1 ? an.x += 1e-4 : an.z += 1e-4, an.normalize(), ai.crossVectors(n2, an)), ai.normalize(), pa.crossVectors(an, ai), i2[0] = ai.x, i2[4] = pa.x, i2[8] = an.x, i2[1] = ai.y, i2[5] = pa.y, i2[9] = an.y, i2[2] = ai.z, i2[6] = pa.z, i2[10] = an.z, this;
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      let n2 = t.elements, i2 = e.elements, r2 = this.elements, a = n2[0], o3 = n2[4], l2 = n2[8], c3 = n2[12], h3 = n2[1], d4 = n2[5], u3 = n2[9], f3 = n2[13], p2 = n2[2], _ = n2[6], g = n2[10], m2 = n2[14], M2 = n2[3], S2 = n2[7], v = n2[11], E = n2[15], T2 = i2[0], R2 = i2[4], x3 = i2[8], A3 = i2[12], I2 = i2[1], P3 = i2[5], N2 = i2[9], H2 = i2[13], X = i2[2], O = i2[6], W = i2[10], G = i2[14], K2 = i2[3], it = i2[7], ut = i2[11], lt = i2[15];
      return r2[0] = a * T2 + o3 * I2 + l2 * X + c3 * K2, r2[4] = a * R2 + o3 * P3 + l2 * O + c3 * it, r2[8] = a * x3 + o3 * N2 + l2 * W + c3 * ut, r2[12] = a * A3 + o3 * H2 + l2 * G + c3 * lt, r2[1] = h3 * T2 + d4 * I2 + u3 * X + f3 * K2, r2[5] = h3 * R2 + d4 * P3 + u3 * O + f3 * it, r2[9] = h3 * x3 + d4 * N2 + u3 * W + f3 * ut, r2[13] = h3 * A3 + d4 * H2 + u3 * G + f3 * lt, r2[2] = p2 * T2 + _ * I2 + g * X + m2 * K2, r2[6] = p2 * R2 + _ * P3 + g * O + m2 * it, r2[10] = p2 * x3 + _ * N2 + g * W + m2 * ut, r2[14] = p2 * A3 + _ * H2 + g * G + m2 * lt, r2[3] = M2 * T2 + S2 * I2 + v * X + E * K2, r2[7] = M2 * R2 + S2 * P3 + v * O + E * it, r2[11] = M2 * x3 + S2 * N2 + v * W + E * ut, r2[15] = M2 * A3 + S2 * H2 + v * G + E * lt, this;
    }
    multiplyScalar(t) {
      let e = this.elements;
      return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
    }
    determinant() {
      let t = this.elements, e = t[0], n2 = t[4], i2 = t[8], r2 = t[12], a = t[1], o3 = t[5], l2 = t[9], c3 = t[13], h3 = t[2], d4 = t[6], u3 = t[10], f3 = t[14], p2 = t[3], _ = t[7], g = t[11], m2 = t[15], M2 = l2 * f3 - c3 * u3, S2 = o3 * f3 - c3 * d4, v = o3 * u3 - l2 * d4, E = a * f3 - c3 * h3, T2 = a * u3 - l2 * h3, R2 = a * d4 - o3 * h3;
      return e * (_ * M2 - g * S2 + m2 * v) - n2 * (p2 * M2 - g * E + m2 * T2) + i2 * (p2 * S2 - _ * E + m2 * R2) - r2 * (p2 * v - _ * T2 + g * R2);
    }
    determinantAffine() {
      let t = this.elements, e = t[0], n2 = t[4], i2 = t[8], r2 = t[1], a = t[5], o3 = t[9], l2 = t[2], c3 = t[6], h3 = t[10];
      return e * (a * h3 - o3 * c3) - n2 * (r2 * h3 - o3 * l2) + i2 * (r2 * c3 - a * l2);
    }
    transpose() {
      let t = this.elements, e;
      return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
    }
    setPosition(t, e, n2) {
      let i2 = this.elements;
      return t.isVector3 ? (i2[12] = t.x, i2[13] = t.y, i2[14] = t.z) : (i2[12] = t, i2[13] = e, i2[14] = n2), this;
    }
    invert() {
      let t = this.elements, e = t[0], n2 = t[1], i2 = t[2], r2 = t[3], a = t[4], o3 = t[5], l2 = t[6], c3 = t[7], h3 = t[8], d4 = t[9], u3 = t[10], f3 = t[11], p2 = t[12], _ = t[13], g = t[14], m2 = t[15], M2 = e * o3 - n2 * a, S2 = e * l2 - i2 * a, v = e * c3 - r2 * a, E = n2 * l2 - i2 * o3, T2 = n2 * c3 - r2 * o3, R2 = i2 * c3 - r2 * l2, x3 = h3 * _ - d4 * p2, A3 = h3 * g - u3 * p2, I2 = h3 * m2 - f3 * p2, P3 = d4 * g - u3 * _, N2 = d4 * m2 - f3 * _, H2 = u3 * m2 - f3 * g, X = M2 * H2 - S2 * N2 + v * P3 + E * I2 - T2 * A3 + R2 * x3;
      if (X === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      let O = 1 / X;
      return t[0] = (o3 * H2 - l2 * N2 + c3 * P3) * O, t[1] = (i2 * N2 - n2 * H2 - r2 * P3) * O, t[2] = (_ * R2 - g * T2 + m2 * E) * O, t[3] = (u3 * T2 - d4 * R2 - f3 * E) * O, t[4] = (l2 * I2 - a * H2 - c3 * A3) * O, t[5] = (e * H2 - i2 * I2 + r2 * A3) * O, t[6] = (g * v - p2 * R2 - m2 * S2) * O, t[7] = (h3 * R2 - u3 * v + f3 * S2) * O, t[8] = (a * N2 - o3 * I2 + c3 * x3) * O, t[9] = (n2 * I2 - e * N2 - r2 * x3) * O, t[10] = (p2 * T2 - _ * v + m2 * M2) * O, t[11] = (d4 * v - h3 * T2 - f3 * M2) * O, t[12] = (o3 * A3 - a * P3 - l2 * x3) * O, t[13] = (e * P3 - n2 * A3 + i2 * x3) * O, t[14] = (_ * S2 - p2 * E - g * M2) * O, t[15] = (h3 * E - d4 * S2 + u3 * M2) * O, this;
    }
    scale(t) {
      let e = this.elements, n2 = t.x, i2 = t.y, r2 = t.z;
      return e[0] *= n2, e[4] *= i2, e[8] *= r2, e[1] *= n2, e[5] *= i2, e[9] *= r2, e[2] *= n2, e[6] *= i2, e[10] *= r2, e[3] *= n2, e[7] *= i2, e[11] *= r2, this;
    }
    getMaxScaleOnAxis() {
      let t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n2 = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i2 = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n2, i2));
    }
    makeTranslation(t, e, n2) {
      return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n2, 0, 0, 0, 1), this;
    }
    makeRotationX(t) {
      let e = Math.cos(t), n2 = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -n2, 0, 0, n2, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t) {
      let e = Math.cos(t), n2 = Math.sin(t);
      return this.set(e, 0, n2, 0, 0, 1, 0, 0, -n2, 0, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t) {
      let e = Math.cos(t), n2 = Math.sin(t);
      return this.set(e, -n2, 0, 0, n2, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t, e) {
      let n2 = Math.cos(e), i2 = Math.sin(e), r2 = 1 - n2, a = t.x, o3 = t.y, l2 = t.z, c3 = r2 * a, h3 = r2 * o3;
      return this.set(c3 * a + n2, c3 * o3 - i2 * l2, c3 * l2 + i2 * o3, 0, c3 * o3 + i2 * l2, h3 * o3 + n2, h3 * l2 - i2 * a, 0, c3 * l2 - i2 * o3, h3 * l2 + i2 * a, r2 * l2 * l2 + n2, 0, 0, 0, 0, 1), this;
    }
    makeScale(t, e, n2) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n2, 0, 0, 0, 0, 1), this;
    }
    makeShear(t, e, n2, i2, r2, a) {
      return this.set(1, n2, r2, 0, t, 1, a, 0, e, i2, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t, e, n2) {
      let i2 = this.elements, r2 = e._x, a = e._y, o3 = e._z, l2 = e._w, c3 = r2 + r2, h3 = a + a, d4 = o3 + o3, u3 = r2 * c3, f3 = r2 * h3, p2 = r2 * d4, _ = a * h3, g = a * d4, m2 = o3 * d4, M2 = l2 * c3, S2 = l2 * h3, v = l2 * d4, E = n2.x, T2 = n2.y, R2 = n2.z;
      return i2[0] = (1 - (_ + m2)) * E, i2[1] = (f3 + v) * E, i2[2] = (p2 - S2) * E, i2[3] = 0, i2[4] = (f3 - v) * T2, i2[5] = (1 - (u3 + m2)) * T2, i2[6] = (g + M2) * T2, i2[7] = 0, i2[8] = (p2 + S2) * R2, i2[9] = (g - M2) * R2, i2[10] = (1 - (u3 + _)) * R2, i2[11] = 0, i2[12] = t.x, i2[13] = t.y, i2[14] = t.z, i2[15] = 1, this;
    }
    decompose(t, e, n2) {
      let i2 = this.elements;
      t.x = i2[12], t.y = i2[13], t.z = i2[14];
      let r2 = this.determinantAffine();
      if (r2 === 0) return n2.set(1, 1, 1), e.identity(), this;
      let a = os.set(i2[0], i2[1], i2[2]).length(), o3 = os.set(i2[4], i2[5], i2[6]).length(), l2 = os.set(i2[8], i2[9], i2[10]).length();
      r2 < 0 && (a = -a), gn.copy(this);
      let c3 = 1 / a, h3 = 1 / o3, d4 = 1 / l2;
      return gn.elements[0] *= c3, gn.elements[1] *= c3, gn.elements[2] *= c3, gn.elements[4] *= h3, gn.elements[5] *= h3, gn.elements[6] *= h3, gn.elements[8] *= d4, gn.elements[9] *= d4, gn.elements[10] *= d4, e.setFromRotationMatrix(gn), n2.x = a, n2.y = o3, n2.z = l2, this;
    }
    makePerspective(t, e, n2, i2, r2, a, o3 = ln, l2 = false) {
      let c3 = this.elements, h3 = 2 * r2 / (e - t), d4 = 2 * r2 / (n2 - i2), u3 = (e + t) / (e - t), f3 = (n2 + i2) / (n2 - i2), p2, _;
      if (l2) p2 = r2 / (a - r2), _ = a * r2 / (a - r2);
      else if (o3 === ln) p2 = -(a + r2) / (a - r2), _ = -2 * a * r2 / (a - r2);
      else if (o3 === Xi) p2 = -a / (a - r2), _ = -a * r2 / (a - r2);
      else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o3);
      return c3[0] = h3, c3[4] = 0, c3[8] = u3, c3[12] = 0, c3[1] = 0, c3[5] = d4, c3[9] = f3, c3[13] = 0, c3[2] = 0, c3[6] = 0, c3[10] = p2, c3[14] = _, c3[3] = 0, c3[7] = 0, c3[11] = -1, c3[15] = 0, this;
    }
    makeOrthographic(t, e, n2, i2, r2, a, o3 = ln, l2 = false) {
      let c3 = this.elements, h3 = 2 / (e - t), d4 = 2 / (n2 - i2), u3 = -(e + t) / (e - t), f3 = -(n2 + i2) / (n2 - i2), p2, _;
      if (l2) p2 = 1 / (a - r2), _ = a / (a - r2);
      else if (o3 === ln) p2 = -2 / (a - r2), _ = -(a + r2) / (a - r2);
      else if (o3 === Xi) p2 = -1 / (a - r2), _ = -r2 / (a - r2);
      else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o3);
      return c3[0] = h3, c3[4] = 0, c3[8] = 0, c3[12] = u3, c3[1] = 0, c3[5] = d4, c3[9] = 0, c3[13] = f3, c3[2] = 0, c3[6] = 0, c3[10] = p2, c3[14] = _, c3[3] = 0, c3[7] = 0, c3[11] = 0, c3[15] = 1, this;
    }
    equals(t) {
      let e = this.elements, n2 = t.elements;
      for (let i2 = 0; i2 < 16; i2++) if (e[i2] !== n2[i2]) return false;
      return true;
    }
    fromArray(t, e = 0) {
      for (let n2 = 0; n2 < 16; n2++) this.elements[n2] = t[n2 + e];
      return this;
    }
    toArray(t = [], e = 0) {
      let n2 = this.elements;
      return t[e] = n2[0], t[e + 1] = n2[1], t[e + 2] = n2[2], t[e + 3] = n2[3], t[e + 4] = n2[4], t[e + 5] = n2[5], t[e + 6] = n2[6], t[e + 7] = n2[7], t[e + 8] = n2[8], t[e + 9] = n2[9], t[e + 10] = n2[10], t[e + 11] = n2[11], t[e + 12] = n2[12], t[e + 13] = n2[13], t[e + 14] = n2[14], t[e + 15] = n2[15], t;
    }
  }, _a5.prototype.isMatrix4 = true, _a5);
  var os = new C();
  var gn = new Ht();
  var wg = new C(0, 0, 0);
  var Cg = new C(1, 1, 1);
  var ai = new C();
  var pa = new C();
  var an = new C();
  var Td = new Ht();
  var Ad = new Fe();
  var yn = class s2 {
    constructor(t = 0, e = 0, n2 = 0, i2 = s2.DEFAULT_ORDER) {
      this.isEuler = true, this._x = t, this._y = e, this._z = n2, this._order = i2;
    }
    get x() {
      return this._x;
    }
    set x(t) {
      this._x = t, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      this._y = t, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      this._z = t, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t) {
      this._order = t, this._onChangeCallback();
    }
    set(t, e, n2, i2 = this._order) {
      return this._x = t, this._y = e, this._z = n2, this._order = i2, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t) {
      return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t, e = this._order, n2 = true) {
      let i2 = t.elements, r2 = i2[0], a = i2[4], o3 = i2[8], l2 = i2[1], c3 = i2[5], h3 = i2[9], d4 = i2[2], u3 = i2[6], f3 = i2[10];
      switch (e) {
        case "XYZ":
          this._y = Math.asin(Vt(o3, -1, 1)), Math.abs(o3) < 0.9999999 ? (this._x = Math.atan2(-h3, f3), this._z = Math.atan2(-a, r2)) : (this._x = Math.atan2(u3, c3), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-Vt(h3, -1, 1)), Math.abs(h3) < 0.9999999 ? (this._y = Math.atan2(o3, f3), this._z = Math.atan2(l2, c3)) : (this._y = Math.atan2(-d4, r2), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(Vt(u3, -1, 1)), Math.abs(u3) < 0.9999999 ? (this._y = Math.atan2(-d4, f3), this._z = Math.atan2(-a, c3)) : (this._y = 0, this._z = Math.atan2(l2, r2));
          break;
        case "ZYX":
          this._y = Math.asin(-Vt(d4, -1, 1)), Math.abs(d4) < 0.9999999 ? (this._x = Math.atan2(u3, f3), this._z = Math.atan2(l2, r2)) : (this._x = 0, this._z = Math.atan2(-a, c3));
          break;
        case "YZX":
          this._z = Math.asin(Vt(l2, -1, 1)), Math.abs(l2) < 0.9999999 ? (this._x = Math.atan2(-h3, c3), this._y = Math.atan2(-d4, r2)) : (this._x = 0, this._y = Math.atan2(o3, f3));
          break;
        case "XZY":
          this._z = Math.asin(-Vt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u3, c3), this._y = Math.atan2(o3, r2)) : (this._x = Math.atan2(-h3, f3), this._y = 0);
          break;
        default:
          ot("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
      }
      return this._order = e, n2 === true && this._onChangeCallback(), this;
    }
    setFromQuaternion(t, e, n2) {
      return Td.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Td, e, n2);
    }
    setFromVector3(t, e = this._order) {
      return this.set(t.x, t.y, t.z, e);
    }
    reorder(t) {
      return Ad.setFromEuler(this), this.setFromQuaternion(Ad, t);
    }
    equals(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
    }
    fromArray(t) {
      return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
    }
    _onChange(t) {
      return this._onChangeCallback = t, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  };
  yn.DEFAULT_ORDER = "XYZ";
  var Ps = class {
    constructor() {
      this.mask = 1;
    }
    set(t) {
      this.mask = (1 << t | 0) >>> 0;
    }
    enable(t) {
      this.mask |= 1 << t | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t) {
      this.mask ^= 1 << t | 0;
    }
    disable(t) {
      this.mask &= ~(1 << t | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t) {
      return (this.mask & t.mask) !== 0;
    }
    isEnabled(t) {
      return (this.mask & (1 << t | 0)) !== 0;
    }
  };
  var Rg = 0;
  var Ed = new C();
  var ls = new Fe();
  var Gn = new Ht();
  var ma = new C();
  var Js = new C();
  var Ig = new C();
  var Pg = new Fe();
  var wd = new C(1, 0, 0);
  var Cd = new C(0, 1, 0);
  var Rd = new C(0, 0, 1);
  var Id = { type: "added" };
  var Lg = { type: "removed" };
  var cs = { type: "childadded", child: null };
  var Ec = { type: "childremoved", child: null };
  var re = class s3 extends hn {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Rg++ }), this.uuid = cn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = s3.DEFAULT_UP.clone();
      let t = new C(), e = new yn(), n2 = new Fe(), i2 = new C(1, 1, 1);
      function r2() {
        n2.setFromEuler(e, false);
      }
      function a() {
        e.setFromQuaternion(n2, void 0, false);
      }
      e._onChange(r2), n2._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n2 }, scale: { configurable: true, enumerable: true, value: i2 }, modelViewMatrix: { value: new Ht() }, normalMatrix: { value: new Xt() } }), this.matrix = new Ht(), this.matrixWorld = new Ht(), this.matrixAutoUpdate = s3.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = s3.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Ps(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t) {
      return this.quaternion.premultiply(t), this;
    }
    setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    }
    setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, true);
    }
    setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    }
    setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    }
    rotateOnAxis(t, e) {
      return ls.setFromAxisAngle(t, e), this.quaternion.multiply(ls), this;
    }
    rotateOnWorldAxis(t, e) {
      return ls.setFromAxisAngle(t, e), this.quaternion.premultiply(ls), this;
    }
    rotateX(t) {
      return this.rotateOnAxis(wd, t);
    }
    rotateY(t) {
      return this.rotateOnAxis(Cd, t);
    }
    rotateZ(t) {
      return this.rotateOnAxis(Rd, t);
    }
    translateOnAxis(t, e) {
      return Ed.copy(t).applyQuaternion(this.quaternion), this.position.add(Ed.multiplyScalar(e)), this;
    }
    translateX(t) {
      return this.translateOnAxis(wd, t);
    }
    translateY(t) {
      return this.translateOnAxis(Cd, t);
    }
    translateZ(t) {
      return this.translateOnAxis(Rd, t);
    }
    localToWorld(t) {
      return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t) {
      return this.updateWorldMatrix(true, false), t.applyMatrix4(Gn.copy(this.matrixWorld).invert());
    }
    lookAt(t, e, n2) {
      t.isVector3 ? ma.copy(t) : ma.set(t, e, n2);
      let i2 = this.parent;
      this.updateWorldMatrix(true, false), Js.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Gn.lookAt(Js, ma, this.up) : Gn.lookAt(ma, Js, this.up), this.quaternion.setFromRotationMatrix(Gn), i2 && (Gn.extractRotation(i2.matrixWorld), ls.setFromRotationMatrix(Gn), this.quaternion.premultiply(ls.invert()));
    }
    add(t) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return t === this ? (Rt("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Id), cs.child = t, this.dispatchEvent(cs), cs.child = null) : Rt("Object3D.add: object not an instance of THREE.Object3D.", t), this);
    }
    remove(t) {
      if (arguments.length > 1) {
        for (let n2 = 0; n2 < arguments.length; n2++) this.remove(arguments[n2]);
        return this;
      }
      let e = this.children.indexOf(t);
      return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Lg), Ec.child = t, this.dispatchEvent(Ec), Ec.child = null), this;
    }
    removeFromParent() {
      let t = this.parent;
      return t !== null && t.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t) {
      return this.updateWorldMatrix(true, false), Gn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), Gn.multiply(t.parent.matrixWorld)), t.applyMatrix4(Gn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(Id), cs.child = t, this.dispatchEvent(cs), cs.child = null, this;
    }
    getObjectById(t) {
      return this.getObjectByProperty("id", t);
    }
    getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    }
    getObjectByProperty(t, e) {
      if (this[t] === e) return this;
      for (let n2 = 0, i2 = this.children.length; n2 < i2; n2++) {
        let a = this.children[n2].getObjectByProperty(t, e);
        if (a !== void 0) return a;
      }
    }
    getObjectsByProperty(t, e, n2 = []) {
      this[t] === e && n2.push(this);
      let i2 = this.children;
      for (let r2 = 0, a = i2.length; r2 < a; r2++) i2[r2].getObjectsByProperty(t, e, n2);
      return n2;
    }
    getWorldPosition(t) {
      return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Js, t, Ig), t;
    }
    getWorldScale(t) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Js, Pg, t), t;
    }
    getWorldDirection(t) {
      this.updateWorldMatrix(true, false);
      let e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {
    }
    traverse(t) {
      t(this);
      let e = this.children;
      for (let n2 = 0, i2 = e.length; n2 < i2; n2++) e[n2].traverse(t);
    }
    traverseVisible(t) {
      if (this.visible === false) return;
      t(this);
      let e = this.children;
      for (let n2 = 0, i2 = e.length; n2 < i2; n2++) e[n2].traverseVisible(t);
    }
    traverseAncestors(t) {
      let e = this.parent;
      e !== null && (t(e), e.traverseAncestors(t));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      let t = this.pivot;
      if (t !== null) {
        let e = t.x, n2 = t.y, i2 = t.z, r2 = this.matrix.elements;
        r2[12] += e - r2[0] * e - r2[4] * n2 - r2[8] * i2, r2[13] += n2 - r2[1] * e - r2[5] * n2 - r2[9] * i2, r2[14] += i2 - r2[2] * e - r2[6] * n2 - r2[10] * i2;
      }
      this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t = true);
      let e = this.children;
      for (let n2 = 0, i2 = e.length; n2 < i2; n2++) e[n2].updateMatrixWorld(t);
    }
    updateWorldMatrix(t, e, n2 = false) {
      let i2 = this.parent;
      if (t === true && i2 !== null && i2.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n2) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, n2 = true), e === true) {
        let r2 = this.children;
        for (let a = 0, o3 = r2.length; a < o3; a++) r2[a].updateWorldMatrix(false, true, n2);
      }
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string", n2 = {};
      e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n2.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
      let i2 = {};
      i2.uuid = this.uuid, i2.type = this.type, this.name !== "" && (i2.name = this.name), this.castShadow === true && (i2.castShadow = true), this.receiveShadow === true && (i2.receiveShadow = true), this.visible === false && (i2.visible = false), this.frustumCulled === false && (i2.frustumCulled = false), this.renderOrder !== 0 && (i2.renderOrder = this.renderOrder), this.static !== false && (i2.static = this.static), Object.keys(this.userData).length > 0 && (i2.userData = this.userData), i2.layers = this.layers.mask, i2.matrix = this.matrix.toArray(), i2.up = this.up.toArray(), this.pivot !== null && (i2.pivot = this.pivot.toArray()), this.matrixAutoUpdate === false && (i2.matrixAutoUpdate = false), this.morphTargetDictionary !== void 0 && (i2.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (i2.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (i2.type = "InstancedMesh", i2.count = this.count, i2.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i2.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i2.type = "BatchedMesh", i2.perObjectFrustumCulled = this.perObjectFrustumCulled, i2.sortObjects = this.sortObjects, i2.drawRanges = this._drawRanges, i2.reservedRanges = this._reservedRanges, i2.geometryInfo = this._geometryInfo.map((o3) => ({ ...o3, boundingBox: o3.boundingBox ? o3.boundingBox.toJSON() : void 0, boundingSphere: o3.boundingSphere ? o3.boundingSphere.toJSON() : void 0 })), i2.instanceInfo = this._instanceInfo.map((o3) => ({ ...o3 })), i2.availableInstanceIds = this._availableInstanceIds.slice(), i2.availableGeometryIds = this._availableGeometryIds.slice(), i2.nextIndexStart = this._nextIndexStart, i2.nextVertexStart = this._nextVertexStart, i2.geometryCount = this._geometryCount, i2.maxInstanceCount = this._maxInstanceCount, i2.maxVertexCount = this._maxVertexCount, i2.maxIndexCount = this._maxIndexCount, i2.geometryInitialized = this._geometryInitialized, i2.matricesTexture = this._matricesTexture.toJSON(t), i2.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (i2.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (i2.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (i2.boundingBox = this.boundingBox.toJSON()));
      function r2(o3, l2) {
        return o3[l2.uuid] === void 0 && (o3[l2.uuid] = l2.toJSON(t)), l2.uuid;
      }
      if (this.isScene) this.background && (this.background.isColor ? i2.background = this.background.toJSON() : this.background.isTexture && (i2.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i2.environment = this.environment.toJSON(t).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i2.geometry = r2(t.geometries, this.geometry);
        let o3 = this.geometry.parameters;
        if (o3 !== void 0 && o3.shapes !== void 0) {
          let l2 = o3.shapes;
          if (Array.isArray(l2)) for (let c3 = 0, h3 = l2.length; c3 < h3; c3++) {
            let d4 = l2[c3];
            r2(t.shapes, d4);
          }
          else r2(t.shapes, l2);
        }
      }
      if (this.isSkinnedMesh && (i2.bindMode = this.bindMode, i2.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r2(t.skeletons, this.skeleton), i2.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
        let o3 = [];
        for (let l2 = 0, c3 = this.material.length; l2 < c3; l2++) o3.push(r2(t.materials, this.material[l2]));
        i2.material = o3;
      } else i2.material = r2(t.materials, this.material);
      if (this.children.length > 0) {
        i2.children = [];
        for (let o3 = 0; o3 < this.children.length; o3++) i2.children.push(this.children[o3].toJSON(t).object);
      }
      if (this.animations.length > 0) {
        i2.animations = [];
        for (let o3 = 0; o3 < this.animations.length; o3++) {
          let l2 = this.animations[o3];
          i2.animations.push(r2(t.animations, l2));
        }
      }
      if (e) {
        let o3 = a(t.geometries), l2 = a(t.materials), c3 = a(t.textures), h3 = a(t.images), d4 = a(t.shapes), u3 = a(t.skeletons), f3 = a(t.animations), p2 = a(t.nodes);
        o3.length > 0 && (n2.geometries = o3), l2.length > 0 && (n2.materials = l2), c3.length > 0 && (n2.textures = c3), h3.length > 0 && (n2.images = h3), d4.length > 0 && (n2.shapes = d4), u3.length > 0 && (n2.skeletons = u3), f3.length > 0 && (n2.animations = f3), p2.length > 0 && (n2.nodes = p2);
      }
      return n2.object = i2, n2;
      function a(o3) {
        let l2 = [];
        for (let c3 in o3) {
          let h3 = o3[c3];
          delete h3.metadata, l2.push(h3);
        }
        return l2;
      }
    }
    clone(t) {
      return new this.constructor().copy(this, t);
    }
    copy(t, e = true) {
      if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.pivot = t.pivot !== null ? t.pivot.clone() : null, this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.static = t.static, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === true) for (let n2 = 0; n2 < t.children.length; n2++) {
        let i2 = t.children[n2];
        this.add(i2.clone());
      }
      return this;
    }
  };
  re.DEFAULT_UP = new C(0, 1, 0);
  re.DEFAULT_MATRIX_AUTO_UPDATE = true;
  re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  var fi = class extends re {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  };
  var Dg = { type: "move" };
  var Ls = class {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return this._hand === null && (this._hand = new fi(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
    }
    getTargetRaySpace() {
      return this._targetRay === null && (this._targetRay = new fi(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new C(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new C()), this._targetRay;
    }
    getGripSpace() {
      return this._grip === null && (this._grip = new fi(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new C(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new C(), this._grip.eventsEnabled = false), this._grip;
    }
    dispatchEvent(t) {
      return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
    }
    connect(t) {
      if (t && t.hand) {
        let e = this._hand;
        if (e) for (let n2 of t.hand.values()) this._getHandJoint(e, n2);
      }
      return this.dispatchEvent({ type: "connected", data: t }), this;
    }
    disconnect(t) {
      return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
    }
    update(t, e, n2) {
      let i2 = null, r2 = null, a = null, o3 = this._targetRay, l2 = this._grip, c3 = this._hand;
      if (t && e.session.visibilityState !== "visible-blurred") {
        if (c3 && t.hand) {
          a = true;
          for (let _ of t.hand.values()) {
            let g = e.getJointPose(_, n2), m2 = this._getHandJoint(c3, _);
            g !== null && (m2.matrix.fromArray(g.transform.matrix), m2.matrix.decompose(m2.position, m2.rotation, m2.scale), m2.matrixWorldNeedsUpdate = true, m2.jointRadius = g.radius), m2.visible = g !== null;
          }
          let h3 = c3.joints["index-finger-tip"], d4 = c3.joints["thumb-tip"], u3 = h3.position.distanceTo(d4.position), f3 = 0.02, p2 = 5e-3;
          c3.inputState.pinching && u3 > f3 + p2 ? (c3.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !c3.inputState.pinching && u3 <= f3 - p2 && (c3.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
        } else l2 !== null && t.gripSpace && (r2 = e.getPose(t.gripSpace, n2), r2 !== null && (l2.matrix.fromArray(r2.transform.matrix), l2.matrix.decompose(l2.position, l2.rotation, l2.scale), l2.matrixWorldNeedsUpdate = true, r2.linearVelocity ? (l2.hasLinearVelocity = true, l2.linearVelocity.copy(r2.linearVelocity)) : l2.hasLinearVelocity = false, r2.angularVelocity ? (l2.hasAngularVelocity = true, l2.angularVelocity.copy(r2.angularVelocity)) : l2.hasAngularVelocity = false, l2.eventsEnabled && l2.dispatchEvent({ type: "gripUpdated", data: t, target: this })));
        o3 !== null && (i2 = e.getPose(t.targetRaySpace, n2), i2 === null && r2 !== null && (i2 = r2), i2 !== null && (o3.matrix.fromArray(i2.transform.matrix), o3.matrix.decompose(o3.position, o3.rotation, o3.scale), o3.matrixWorldNeedsUpdate = true, i2.linearVelocity ? (o3.hasLinearVelocity = true, o3.linearVelocity.copy(i2.linearVelocity)) : o3.hasLinearVelocity = false, i2.angularVelocity ? (o3.hasAngularVelocity = true, o3.angularVelocity.copy(i2.angularVelocity)) : o3.hasAngularVelocity = false, this.dispatchEvent(Dg)));
      }
      return o3 !== null && (o3.visible = i2 !== null), l2 !== null && (l2.visible = r2 !== null), c3 !== null && (c3.visible = a !== null), this;
    }
    _getHandJoint(t, e) {
      if (t.joints[e.jointName] === void 0) {
        let n2 = new fi();
        n2.matrixAutoUpdate = false, n2.visible = false, t.joints[e.jointName] = n2, t.add(n2);
      }
      return t.joints[e.jointName];
    }
  };
  var _p = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  var oi = { h: 0, s: 0, l: 0 };
  var ga = { h: 0, s: 0, l: 0 };
  function wc(s30, t, e) {
    return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? s30 + (t - s30) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? s30 + (t - s30) * 6 * (2 / 3 - e) : s30;
  }
  var St = class {
    constructor(t, e, n2) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n2);
    }
    set(t, e, n2) {
      if (e === void 0 && n2 === void 0) {
        let i2 = t;
        i2 && i2.isColor ? this.copy(i2) : typeof i2 == "number" ? this.setHex(i2) : typeof i2 == "string" && this.setStyle(i2);
      } else this.setRGB(t, e, n2);
      return this;
    }
    setScalar(t) {
      return this.r = t, this.g = t, this.b = t, this;
    }
    setHex(t, e = Qe) {
      return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, ee.colorSpaceToWorking(this, e), this;
    }
    setRGB(t, e, n2, i2 = ee.workingColorSpace) {
      return this.r = t, this.g = e, this.b = n2, ee.colorSpaceToWorking(this, i2), this;
    }
    setHSL(t, e, n2, i2 = ee.workingColorSpace) {
      if (t = Wu(t, 1), e = Vt(e, 0, 1), n2 = Vt(n2, 0, 1), e === 0) this.r = this.g = this.b = n2;
      else {
        let r2 = n2 <= 0.5 ? n2 * (1 + e) : n2 + e - n2 * e, a = 2 * n2 - r2;
        this.r = wc(a, r2, t + 1 / 3), this.g = wc(a, r2, t), this.b = wc(a, r2, t - 1 / 3);
      }
      return ee.colorSpaceToWorking(this, i2), this;
    }
    setStyle(t, e = Qe) {
      function n2(r2) {
        r2 !== void 0 && parseFloat(r2) < 1 && ot("Color: Alpha component of " + t + " will be ignored.");
      }
      let i2;
      if (i2 = /^(\w+)\(([^\)]*)\)/.exec(t)) {
        let r2, a = i2[1], o3 = i2[2];
        switch (a) {
          case "rgb":
          case "rgba":
            if (r2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o3)) return n2(r2[4]), this.setRGB(Math.min(255, parseInt(r2[1], 10)) / 255, Math.min(255, parseInt(r2[2], 10)) / 255, Math.min(255, parseInt(r2[3], 10)) / 255, e);
            if (r2 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o3)) return n2(r2[4]), this.setRGB(Math.min(100, parseInt(r2[1], 10)) / 100, Math.min(100, parseInt(r2[2], 10)) / 100, Math.min(100, parseInt(r2[3], 10)) / 100, e);
            break;
          case "hsl":
          case "hsla":
            if (r2 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o3)) return n2(r2[4]), this.setHSL(parseFloat(r2[1]) / 360, parseFloat(r2[2]) / 100, parseFloat(r2[3]) / 100, e);
            break;
          default:
            ot("Color: Unknown color model " + t);
        }
      } else if (i2 = /^\#([A-Fa-f\d]+)$/.exec(t)) {
        let r2 = i2[1], a = r2.length;
        if (a === 3) return this.setRGB(parseInt(r2.charAt(0), 16) / 15, parseInt(r2.charAt(1), 16) / 15, parseInt(r2.charAt(2), 16) / 15, e);
        if (a === 6) return this.setHex(parseInt(r2, 16), e);
        ot("Color: Invalid hex color " + t);
      } else if (t && t.length > 0) return this.setColorName(t, e);
      return this;
    }
    setColorName(t, e = Qe) {
      let n2 = _p[t.toLowerCase()];
      return n2 !== void 0 ? this.setHex(n2, e) : ot("Color: Unknown color " + t), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t) {
      return this.r = t.r, this.g = t.g, this.b = t.b, this;
    }
    copySRGBToLinear(t) {
      return this.r = Jn(t.r), this.g = Jn(t.g), this.b = Jn(t.b), this;
    }
    copyLinearToSRGB(t) {
      return this.r = ws(t.r), this.g = ws(t.g), this.b = ws(t.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t = Qe) {
      return ee.workingToColorSpace(Ve.copy(this), t), Math.round(Vt(Ve.r * 255, 0, 255)) * 65536 + Math.round(Vt(Ve.g * 255, 0, 255)) * 256 + Math.round(Vt(Ve.b * 255, 0, 255));
    }
    getHexString(t = Qe) {
      return ("000000" + this.getHex(t).toString(16)).slice(-6);
    }
    getHSL(t, e = ee.workingColorSpace) {
      ee.workingToColorSpace(Ve.copy(this), e);
      let n2 = Ve.r, i2 = Ve.g, r2 = Ve.b, a = Math.max(n2, i2, r2), o3 = Math.min(n2, i2, r2), l2, c3, h3 = (o3 + a) / 2;
      if (o3 === a) l2 = 0, c3 = 0;
      else {
        let d4 = a - o3;
        switch (c3 = h3 <= 0.5 ? d4 / (a + o3) : d4 / (2 - a - o3), a) {
          case n2:
            l2 = (i2 - r2) / d4 + (i2 < r2 ? 6 : 0);
            break;
          case i2:
            l2 = (r2 - n2) / d4 + 2;
            break;
          case r2:
            l2 = (n2 - i2) / d4 + 4;
            break;
        }
        l2 /= 6;
      }
      return t.h = l2, t.s = c3, t.l = h3, t;
    }
    getRGB(t, e = ee.workingColorSpace) {
      return ee.workingToColorSpace(Ve.copy(this), e), t.r = Ve.r, t.g = Ve.g, t.b = Ve.b, t;
    }
    getStyle(t = Qe) {
      ee.workingToColorSpace(Ve.copy(this), t);
      let e = Ve.r, n2 = Ve.g, i2 = Ve.b;
      return t !== Qe ? `color(${t} ${e.toFixed(3)} ${n2.toFixed(3)} ${i2.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n2 * 255)},${Math.round(i2 * 255)})`;
    }
    offsetHSL(t, e, n2) {
      return this.getHSL(oi), this.setHSL(oi.h + t, oi.s + e, oi.l + n2);
    }
    add(t) {
      return this.r += t.r, this.g += t.g, this.b += t.b, this;
    }
    addColors(t, e) {
      return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
    }
    addScalar(t) {
      return this.r += t, this.g += t, this.b += t, this;
    }
    sub(t) {
      return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
    }
    multiply(t) {
      return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
    }
    multiplyScalar(t) {
      return this.r *= t, this.g *= t, this.b *= t, this;
    }
    lerp(t, e) {
      return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
    }
    lerpColors(t, e, n2) {
      return this.r = t.r + (e.r - t.r) * n2, this.g = t.g + (e.g - t.g) * n2, this.b = t.b + (e.b - t.b) * n2, this;
    }
    lerpHSL(t, e) {
      this.getHSL(oi), t.getHSL(ga);
      let n2 = cr(oi.h, ga.h, e), i2 = cr(oi.s, ga.s, e), r2 = cr(oi.l, ga.l, e);
      return this.setHSL(n2, i2, r2), this;
    }
    setFromVector3(t) {
      return this.r = t.x, this.g = t.y, this.b = t.z, this;
    }
    applyMatrix3(t) {
      let e = this.r, n2 = this.g, i2 = this.b, r2 = t.elements;
      return this.r = r2[0] * e + r2[3] * n2 + r2[6] * i2, this.g = r2[1] * e + r2[4] * n2 + r2[7] * i2, this.b = r2[2] * e + r2[5] * n2 + r2[8] * i2, this;
    }
    equals(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    }
    fromArray(t, e = 0) {
      return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
    }
    toArray(t = [], e = 0) {
      return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
    }
    fromBufferAttribute(t, e) {
      return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  };
  var Ve = new St();
  St.NAMES = _p;
  var go = class s4 {
    constructor(t, e = 25e-5) {
      this.isFogExp2 = true, this.name = "", this.color = new St(t), this.density = e;
    }
    clone() {
      return new s4(this.color, this.density);
    }
    toJSON() {
      return { type: "FogExp2", name: this.name, color: this.color.getHex(), density: this.density };
    }
  };
  var xo = class extends re {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new yn(), this.environmentIntensity = 1, this.environmentRotation = new yn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    copy(t, e) {
      return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
    }
  };
  var _n = new C();
  var Hn = new C();
  var Cc = new C();
  var Wn = new C();
  var hs = new C();
  var us = new C();
  var Pd = new C();
  var Rc = new C();
  var Ic = new C();
  var Pc = new C();
  var Lc = new ce();
  var Dc = new ce();
  var Nc = new ce();
  var Cn = class s5 {
    constructor(t = new C(), e = new C(), n2 = new C()) {
      this.a = t, this.b = e, this.c = n2;
    }
    static getNormal(t, e, n2, i2) {
      i2.subVectors(n2, e), _n.subVectors(t, e), i2.cross(_n);
      let r2 = i2.lengthSq();
      return r2 > 0 ? i2.multiplyScalar(1 / Math.sqrt(r2)) : i2.set(0, 0, 0);
    }
    static getBarycoord(t, e, n2, i2, r2) {
      _n.subVectors(i2, e), Hn.subVectors(n2, e), Cc.subVectors(t, e);
      let a = _n.dot(_n), o3 = _n.dot(Hn), l2 = _n.dot(Cc), c3 = Hn.dot(Hn), h3 = Hn.dot(Cc), d4 = a * c3 - o3 * o3;
      if (d4 === 0) return r2.set(0, 0, 0), null;
      let u3 = 1 / d4, f3 = (c3 * l2 - o3 * h3) * u3, p2 = (a * h3 - o3 * l2) * u3;
      return r2.set(1 - f3 - p2, p2, f3);
    }
    static containsPoint(t, e, n2, i2) {
      return this.getBarycoord(t, e, n2, i2, Wn) === null ? false : Wn.x >= 0 && Wn.y >= 0 && Wn.x + Wn.y <= 1;
    }
    static getInterpolation(t, e, n2, i2, r2, a, o3, l2) {
      return this.getBarycoord(t, e, n2, i2, Wn) === null ? (l2.x = 0, l2.y = 0, "z" in l2 && (l2.z = 0), "w" in l2 && (l2.w = 0), null) : (l2.setScalar(0), l2.addScaledVector(r2, Wn.x), l2.addScaledVector(a, Wn.y), l2.addScaledVector(o3, Wn.z), l2);
    }
    static getInterpolatedAttribute(t, e, n2, i2, r2, a) {
      return Lc.setScalar(0), Dc.setScalar(0), Nc.setScalar(0), Lc.fromBufferAttribute(t, e), Dc.fromBufferAttribute(t, n2), Nc.fromBufferAttribute(t, i2), a.setScalar(0), a.addScaledVector(Lc, r2.x), a.addScaledVector(Dc, r2.y), a.addScaledVector(Nc, r2.z), a;
    }
    static isFrontFacing(t, e, n2, i2) {
      return _n.subVectors(n2, e), Hn.subVectors(t, e), _n.cross(Hn).dot(i2) < 0;
    }
    set(t, e, n2) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(n2), this;
    }
    setFromPointsAndIndices(t, e, n2, i2) {
      return this.a.copy(t[e]), this.b.copy(t[n2]), this.c.copy(t[i2]), this;
    }
    setFromAttributeAndIndices(t, e, n2, i2) {
      return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n2), this.c.fromBufferAttribute(t, i2), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    }
    getArea() {
      return _n.subVectors(this.c, this.b), Hn.subVectors(this.a, this.b), _n.cross(Hn).length() * 0.5;
    }
    getMidpoint(t) {
      return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return s5.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(t) {
      return t.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, e) {
      return s5.getBarycoord(t, this.a, this.b, this.c, e);
    }
    getInterpolation(t, e, n2, i2, r2) {
      return s5.getInterpolation(t, this.a, this.b, this.c, e, n2, i2, r2);
    }
    containsPoint(t) {
      return s5.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return s5.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(t) {
      return t.intersectsTriangle(this);
    }
    closestPointToPoint(t, e) {
      let n2 = this.a, i2 = this.b, r2 = this.c, a, o3;
      hs.subVectors(i2, n2), us.subVectors(r2, n2), Rc.subVectors(t, n2);
      let l2 = hs.dot(Rc), c3 = us.dot(Rc);
      if (l2 <= 0 && c3 <= 0) return e.copy(n2);
      Ic.subVectors(t, i2);
      let h3 = hs.dot(Ic), d4 = us.dot(Ic);
      if (h3 >= 0 && d4 <= h3) return e.copy(i2);
      let u3 = l2 * d4 - h3 * c3;
      if (u3 <= 0 && l2 >= 0 && h3 <= 0) return a = l2 / (l2 - h3), e.copy(n2).addScaledVector(hs, a);
      Pc.subVectors(t, r2);
      let f3 = hs.dot(Pc), p2 = us.dot(Pc);
      if (p2 >= 0 && f3 <= p2) return e.copy(r2);
      let _ = f3 * c3 - l2 * p2;
      if (_ <= 0 && c3 >= 0 && p2 <= 0) return o3 = c3 / (c3 - p2), e.copy(n2).addScaledVector(us, o3);
      let g = h3 * p2 - f3 * d4;
      if (g <= 0 && d4 - h3 >= 0 && f3 - p2 >= 0) return Pd.subVectors(r2, i2), o3 = (d4 - h3) / (d4 - h3 + (f3 - p2)), e.copy(i2).addScaledVector(Pd, o3);
      let m2 = 1 / (g + _ + u3);
      return a = _ * m2, o3 = u3 * m2, e.copy(n2).addScaledVector(hs, a).addScaledVector(us, o3);
    }
    equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
  };
  var Ue = class {
    constructor(t = new C(1 / 0, 1 / 0, 1 / 0), e = new C(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = t, this.max = e;
    }
    set(t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }
    setFromArray(t) {
      this.makeEmpty();
      for (let e = 0, n2 = t.length; e < n2; e += 3) this.expandByPoint(xn.fromArray(t, e));
      return this;
    }
    setFromBufferAttribute(t) {
      this.makeEmpty();
      for (let e = 0, n2 = t.count; e < n2; e++) this.expandByPoint(xn.fromBufferAttribute(t, e));
      return this;
    }
    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n2 = t.length; e < n2; e++) this.expandByPoint(t[e]);
      return this;
    }
    setFromCenterAndSize(t, e) {
      let n2 = xn.copy(e).multiplyScalar(0.5);
      return this.min.copy(t).sub(n2), this.max.copy(t).add(n2), this;
    }
    setFromObject(t, e = false) {
      return this.makeEmpty(), this.expandByObject(t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }
    expandByPoint(t) {
      return this.min.min(t), this.max.max(t), this;
    }
    expandByVector(t) {
      return this.min.sub(t), this.max.add(t), this;
    }
    expandByScalar(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }
    expandByObject(t, e = false) {
      t.updateWorldMatrix(false, false);
      let n2 = t.geometry;
      if (n2 !== void 0) {
        let r2 = n2.getAttribute("position");
        if (e === true && r2 !== void 0 && t.isInstancedMesh !== true) for (let a = 0, o3 = r2.count; a < o3; a++) t.isMesh === true ? t.getVertexPosition(a, xn) : xn.fromBufferAttribute(r2, a), xn.applyMatrix4(t.matrixWorld), this.expandByPoint(xn);
        else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), _a6.copy(t.boundingBox)) : (n2.boundingBox === null && n2.computeBoundingBox(), _a6.copy(n2.boundingBox)), _a6.applyMatrix4(t.matrixWorld), this.union(_a6);
      }
      let i2 = t.children;
      for (let r2 = 0, a = i2.length; r2 < a; r2++) this.expandByObject(i2[r2], e);
      return this;
    }
    containsPoint(t) {
      return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
    }
    containsBox(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
    }
    getParameter(t, e) {
      return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(t) {
      return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
    }
    intersectsSphere(t) {
      return this.clampPoint(t.center, xn), xn.distanceToSquared(t.center) <= t.radius * t.radius;
    }
    intersectsPlane(t) {
      let e, n2;
      return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n2 = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n2 = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n2 += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n2 += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n2 += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n2 += t.normal.z * this.min.z), e <= -t.constant && n2 >= -t.constant;
    }
    intersectsTriangle(t) {
      if (this.isEmpty()) return false;
      this.getCenter($s), xa.subVectors(this.max, $s), ds.subVectors(t.a, $s), fs.subVectors(t.b, $s), ps.subVectors(t.c, $s), li.subVectors(fs, ds), ci.subVectors(ps, fs), Ei.subVectors(ds, ps);
      let e = [0, -li.z, li.y, 0, -ci.z, ci.y, 0, -Ei.z, Ei.y, li.z, 0, -li.x, ci.z, 0, -ci.x, Ei.z, 0, -Ei.x, -li.y, li.x, 0, -ci.y, ci.x, 0, -Ei.y, Ei.x, 0];
      return !Uc(e, ds, fs, ps, xa) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Uc(e, ds, fs, ps, xa)) ? false : (va.crossVectors(li, ci), e = [va.x, va.y, va.z], Uc(e, ds, fs, ps, xa));
    }
    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max);
    }
    distanceToPoint(t) {
      return this.clampPoint(t, xn).distanceTo(t);
    }
    getBoundingSphere(t) {
      return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(xn).length() * 0.5), t;
    }
    intersect(t) {
      return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }
    applyMatrix4(t) {
      return this.isEmpty() ? this : (Xn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Xn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Xn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Xn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Xn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Xn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Xn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Xn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Xn), this);
    }
    translate(t) {
      return this.min.add(t), this.max.add(t), this;
    }
    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
    toJSON() {
      return { min: this.min.toArray(), max: this.max.toArray() };
    }
    fromJSON(t) {
      return this.min.fromArray(t.min), this.max.fromArray(t.max), this;
    }
  };
  var Xn = [new C(), new C(), new C(), new C(), new C(), new C(), new C(), new C()];
  var xn = new C();
  var _a6 = new Ue();
  var ds = new C();
  var fs = new C();
  var ps = new C();
  var li = new C();
  var ci = new C();
  var Ei = new C();
  var $s = new C();
  var xa = new C();
  var va = new C();
  var wi = new C();
  function Uc(s30, t, e, n2, i2) {
    for (let r2 = 0, a = s30.length - 3; r2 <= a; r2 += 3) {
      wi.fromArray(s30, r2);
      let o3 = i2.x * Math.abs(wi.x) + i2.y * Math.abs(wi.y) + i2.z * Math.abs(wi.z), l2 = t.dot(wi), c3 = e.dot(wi), h3 = n2.dot(wi);
      if (Math.max(-Math.max(l2, c3, h3), Math.min(l2, c3, h3)) > o3) return false;
    }
    return true;
  }
  var Zn = Ng();
  function Ng() {
    let s30 = new ArrayBuffer(4), t = new Float32Array(s30), e = new Uint32Array(s30), n2 = new Uint32Array(512), i2 = new Uint32Array(512);
    for (let l2 = 0; l2 < 256; ++l2) {
      let c3 = l2 - 127;
      c3 < -27 ? (n2[l2] = 0, n2[l2 | 256] = 32768, i2[l2] = 24, i2[l2 | 256] = 24) : c3 < -14 ? (n2[l2] = 1024 >> -c3 - 14, n2[l2 | 256] = 1024 >> -c3 - 14 | 32768, i2[l2] = -c3 - 1, i2[l2 | 256] = -c3 - 1) : c3 <= 15 ? (n2[l2] = c3 + 15 << 10, n2[l2 | 256] = c3 + 15 << 10 | 32768, i2[l2] = 13, i2[l2 | 256] = 13) : c3 < 128 ? (n2[l2] = 31744, n2[l2 | 256] = 64512, i2[l2] = 24, i2[l2 | 256] = 24) : (n2[l2] = 31744, n2[l2 | 256] = 64512, i2[l2] = 13, i2[l2 | 256] = 13);
    }
    let r2 = new Uint32Array(2048), a = new Uint32Array(64), o3 = new Uint32Array(64);
    for (let l2 = 1; l2 < 1024; ++l2) {
      let c3 = l2 << 13, h3 = 0;
      for (; (c3 & 8388608) === 0; ) c3 <<= 1, h3 -= 8388608;
      c3 &= -8388609, h3 += 947912704, r2[l2] = c3 | h3;
    }
    for (let l2 = 1024; l2 < 2048; ++l2) r2[l2] = 939524096 + (l2 - 1024 << 13);
    for (let l2 = 1; l2 < 31; ++l2) a[l2] = l2 << 23;
    a[31] = 1199570944, a[32] = 2147483648;
    for (let l2 = 33; l2 < 63; ++l2) a[l2] = 2147483648 + (l2 - 32 << 23);
    a[63] = 3347054592;
    for (let l2 = 1; l2 < 64; ++l2) l2 !== 32 && (o3[l2] = 1024);
    return { floatView: t, uint32View: e, baseTable: n2, shiftTable: i2, mantissaTable: r2, exponentTable: a, offsetTable: o3 };
  }
  var Ce = new C();
  var ya = new Q();
  var Ug = 0;
  var oe = class extends hn {
    constructor(t, e, n2 = false) {
      if (super(), Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: Ug++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n2, this.usage = xr, this.updateRanges = [], this.gpuType = qe, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(t) {
      t === true && this.version++;
    }
    setUsage(t) {
      return this.usage = t, this;
    }
    addUpdateRange(t, e) {
      this.updateRanges.push({ start: t, count: e });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t) {
      return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
    }
    copyAt(t, e, n2) {
      t *= this.itemSize, n2 *= e.itemSize;
      for (let i2 = 0, r2 = this.itemSize; i2 < r2; i2++) this.array[t + i2] = e.array[n2 + i2];
      return this;
    }
    copyArray(t) {
      return this.array.set(t), this;
    }
    applyMatrix3(t) {
      if (this.itemSize === 2) for (let e = 0, n2 = this.count; e < n2; e++) ya.fromBufferAttribute(this, e), ya.applyMatrix3(t), this.setXY(e, ya.x, ya.y);
      else if (this.itemSize === 3) for (let e = 0, n2 = this.count; e < n2; e++) Ce.fromBufferAttribute(this, e), Ce.applyMatrix3(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
      return this;
    }
    applyMatrix4(t) {
      for (let e = 0, n2 = this.count; e < n2; e++) Ce.fromBufferAttribute(this, e), Ce.applyMatrix4(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, n2 = this.count; e < n2; e++) Ce.fromBufferAttribute(this, e), Ce.applyNormalMatrix(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
      return this;
    }
    transformDirection(t) {
      for (let e = 0, n2 = this.count; e < n2; e++) Ce.fromBufferAttribute(this, e), Ce.transformDirection(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
      return this;
    }
    set(t, e = 0) {
      return this.array.set(t, e), this;
    }
    getComponent(t, e) {
      let n2 = this.array[t * this.itemSize + e];
      return this.normalized && (n2 = Xe(n2, this.array)), n2;
    }
    setComponent(t, e, n2) {
      return this.normalized && (n2 = $t(n2, this.array)), this.array[t * this.itemSize + e] = n2, this;
    }
    getX(t) {
      let e = this.array[t * this.itemSize];
      return this.normalized && (e = Xe(e, this.array)), e;
    }
    setX(t, e) {
      return this.normalized && (e = $t(e, this.array)), this.array[t * this.itemSize] = e, this;
    }
    getY(t) {
      let e = this.array[t * this.itemSize + 1];
      return this.normalized && (e = Xe(e, this.array)), e;
    }
    setY(t, e) {
      return this.normalized && (e = $t(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
    }
    getZ(t) {
      let e = this.array[t * this.itemSize + 2];
      return this.normalized && (e = Xe(e, this.array)), e;
    }
    setZ(t, e) {
      return this.normalized && (e = $t(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
    }
    getW(t) {
      let e = this.array[t * this.itemSize + 3];
      return this.normalized && (e = Xe(e, this.array)), e;
    }
    setW(t, e) {
      return this.normalized && (e = $t(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
    }
    setXY(t, e, n2) {
      return t *= this.itemSize, this.normalized && (e = $t(e, this.array), n2 = $t(n2, this.array)), this.array[t + 0] = e, this.array[t + 1] = n2, this;
    }
    setXYZ(t, e, n2, i2) {
      return t *= this.itemSize, this.normalized && (e = $t(e, this.array), n2 = $t(n2, this.array), i2 = $t(i2, this.array)), this.array[t + 0] = e, this.array[t + 1] = n2, this.array[t + 2] = i2, this;
    }
    setXYZW(t, e, n2, i2, r2) {
      return t *= this.itemSize, this.normalized && (e = $t(e, this.array), n2 = $t(n2, this.array), i2 = $t(i2, this.array), r2 = $t(r2, this.array)), this.array[t + 0] = e, this.array[t + 1] = n2, this.array[t + 2] = i2, this.array[t + 3] = r2, this;
    }
    onUpload(t) {
      return this.onUploadCallback = t, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      let t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
      return this.name !== "" && (t.name = this.name), this.usage !== xr && (t.usage = this.usage), t;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Mr = class extends oe {
    constructor(t, e, n2) {
      super(new Uint16Array(t), e, n2);
    }
  };
  var Sr = class extends oe {
    constructor(t, e, n2) {
      super(new Uint32Array(t), e, n2);
    }
  };
  var Tt = class extends oe {
    constructor(t, e, n2) {
      super(new Float32Array(t), e, n2);
    }
  };
  var Fg = new Ue();
  var Ks = new C();
  var Fc = new C();
  var Ie = class {
    constructor(t = new C(), e = -1) {
      this.isSphere = true, this.center = t, this.radius = e;
    }
    set(t, e) {
      return this.center.copy(t), this.radius = e, this;
    }
    setFromPoints(t, e) {
      let n2 = this.center;
      e !== void 0 ? n2.copy(e) : Fg.setFromPoints(t).getCenter(n2);
      let i2 = 0;
      for (let r2 = 0, a = t.length; r2 < a; r2++) i2 = Math.max(i2, n2.distanceToSquared(t[r2]));
      return this.radius = Math.sqrt(i2), this;
    }
    copy(t) {
      return this.center.copy(t.center), this.radius = t.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t) {
      let e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t) {
      return t.intersectsSphere(this);
    }
    intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t, e) {
      let n2 = this.center.distanceToSquared(t);
      return e.copy(t), n2 > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
    }
    getBoundingBox(t) {
      return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    }
    applyMatrix4(t) {
      return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
    }
    translate(t) {
      return this.center.add(t), this;
    }
    expandByPoint(t) {
      if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
      Ks.subVectors(t, this.center);
      let e = Ks.lengthSq();
      if (e > this.radius * this.radius) {
        let n2 = Math.sqrt(e), i2 = (n2 - this.radius) * 0.5;
        this.center.addScaledVector(Ks, i2 / n2), this.radius += i2;
      }
      return this;
    }
    union(t) {
      return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (Fc.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Ks.copy(t.center).add(Fc)), this.expandByPoint(Ks.copy(t.center).sub(Fc))), this);
    }
    equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return { radius: this.radius, center: this.center.toArray() };
    }
    fromJSON(t) {
      return this.radius = t.radius, this.center.fromArray(t.center), this;
    }
  };
  var Og = 0;
  var fn = new Ht();
  var Oc = new re();
  var ms = new C();
  var on = new Ue();
  var Qs = new Ue();
  var Ne = new C();
  var Yt = class s6 extends hn {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Og++ }), this.uuid = cn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}, this._transformed = false;
    }
    getIndex() {
      return this.index;
    }
    setIndex(t) {
      return Array.isArray(t) ? this.index = new (ig(t) ? Sr : Mr)(t, 1) : this.index = t, this;
    }
    setIndirect(t, e = 0) {
      return this.indirect = t, this.indirectOffset = e, this;
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    setAttribute(t, e) {
      return this.attributes[t] = e, this;
    }
    deleteAttribute(t) {
      return delete this.attributes[t], this;
    }
    hasAttribute(t) {
      return this.attributes[t] !== void 0;
    }
    addGroup(t, e, n2 = 0) {
      this.groups.push({ start: t, count: e, materialIndex: n2 });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t, e) {
      this.drawRange.start = t, this.drawRange.count = e;
    }
    applyMatrix4(t) {
      let e = this.attributes.position;
      e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = true);
      let n2 = this.attributes.normal;
      if (n2 !== void 0) {
        let r2 = new Xt().getNormalMatrix(t);
        n2.applyNormalMatrix(r2), n2.needsUpdate = true;
      }
      let i2 = this.attributes.tangent;
      return i2 !== void 0 && (i2.transformDirection(t), i2.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = true, this;
    }
    applyQuaternion(t) {
      return fn.makeRotationFromQuaternion(t), this.applyMatrix4(fn), this;
    }
    rotateX(t) {
      return fn.makeRotationX(t), this.applyMatrix4(fn), this;
    }
    rotateY(t) {
      return fn.makeRotationY(t), this.applyMatrix4(fn), this;
    }
    rotateZ(t) {
      return fn.makeRotationZ(t), this.applyMatrix4(fn), this;
    }
    translate(t, e, n2) {
      return fn.makeTranslation(t, e, n2), this.applyMatrix4(fn), this;
    }
    scale(t, e, n2) {
      return fn.makeScale(t, e, n2), this.applyMatrix4(fn), this;
    }
    lookAt(t) {
      return Oc.lookAt(t), Oc.updateMatrix(), this.applyMatrix4(Oc.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(ms).negate(), this.translate(ms.x, ms.y, ms.z), this;
    }
    setFromPoints(t) {
      let e = this.getAttribute("position");
      if (e === void 0) {
        let n2 = [];
        for (let i2 = 0, r2 = t.length; i2 < r2; i2++) {
          let a = t[i2];
          n2.push(a.x, a.y, a.z || 0);
        }
        this.setAttribute("position", new Tt(n2, 3));
      } else {
        let n2 = Math.min(t.length, e.count);
        for (let i2 = 0; i2 < n2; i2++) {
          let r2 = t[i2];
          e.setXYZ(i2, r2.x, r2.y, r2.z || 0);
        }
        t.length > e.count && ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = true;
      }
      return this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new Ue());
      let t = this.attributes.position, e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) {
        Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0));
        return;
      }
      if (t !== void 0) {
        if (this.boundingBox.setFromBufferAttribute(t), e) for (let n2 = 0, i2 = e.length; n2 < i2; n2++) {
          let r2 = e[n2];
          on.setFromBufferAttribute(r2), this.morphTargetsRelative ? (Ne.addVectors(this.boundingBox.min, on.min), this.boundingBox.expandByPoint(Ne), Ne.addVectors(this.boundingBox.max, on.max), this.boundingBox.expandByPoint(Ne)) : (this.boundingBox.expandByPoint(on.min), this.boundingBox.expandByPoint(on.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new Ie());
      let t = this.attributes.position, e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) {
        Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new C(), 1 / 0);
        return;
      }
      if (t) {
        let n2 = this.boundingSphere.center;
        if (on.setFromBufferAttribute(t), e) for (let r2 = 0, a = e.length; r2 < a; r2++) {
          let o3 = e[r2];
          Qs.setFromBufferAttribute(o3), this.morphTargetsRelative ? (Ne.addVectors(on.min, Qs.min), on.expandByPoint(Ne), Ne.addVectors(on.max, Qs.max), on.expandByPoint(Ne)) : (on.expandByPoint(Qs.min), on.expandByPoint(Qs.max));
        }
        on.getCenter(n2);
        let i2 = 0;
        for (let r2 = 0, a = t.count; r2 < a; r2++) Ne.fromBufferAttribute(t, r2), i2 = Math.max(i2, n2.distanceToSquared(Ne));
        if (e) for (let r2 = 0, a = e.length; r2 < a; r2++) {
          let o3 = e[r2], l2 = this.morphTargetsRelative;
          for (let c3 = 0, h3 = o3.count; c3 < h3; c3++) Ne.fromBufferAttribute(o3, c3), l2 && (ms.fromBufferAttribute(t, c3), Ne.add(ms)), i2 = Math.max(i2, n2.distanceToSquared(Ne));
        }
        this.boundingSphere.radius = Math.sqrt(i2), isNaN(this.boundingSphere.radius) && Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      let t = this.index, e = this.attributes;
      if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
        Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
      }
      let n2 = e.position, i2 = e.normal, r2 = e.uv, a = this.getAttribute("tangent");
      (a === void 0 || a.count !== n2.count) && (a = new oe(new Float32Array(4 * n2.count), 4), this.setAttribute("tangent", a));
      let o3 = [], l2 = [];
      for (let x3 = 0; x3 < n2.count; x3++) o3[x3] = new C(), l2[x3] = new C();
      let c3 = new C(), h3 = new C(), d4 = new C(), u3 = new Q(), f3 = new Q(), p2 = new Q(), _ = new C(), g = new C();
      function m2(x3, A3, I2) {
        c3.fromBufferAttribute(n2, x3), h3.fromBufferAttribute(n2, A3), d4.fromBufferAttribute(n2, I2), u3.fromBufferAttribute(r2, x3), f3.fromBufferAttribute(r2, A3), p2.fromBufferAttribute(r2, I2), h3.sub(c3), d4.sub(c3), f3.sub(u3), p2.sub(u3);
        let P3 = 1 / (f3.x * p2.y - p2.x * f3.y);
        isFinite(P3) && (_.copy(h3).multiplyScalar(p2.y).addScaledVector(d4, -f3.y).multiplyScalar(P3), g.copy(d4).multiplyScalar(f3.x).addScaledVector(h3, -p2.x).multiplyScalar(P3), o3[x3].add(_), o3[A3].add(_), o3[I2].add(_), l2[x3].add(g), l2[A3].add(g), l2[I2].add(g));
      }
      let M2 = this.groups;
      M2.length === 0 && (M2 = [{ start: 0, count: t.count }]);
      for (let x3 = 0, A3 = M2.length; x3 < A3; ++x3) {
        let I2 = M2[x3], P3 = I2.start, N2 = I2.count;
        for (let H2 = P3, X = P3 + N2; H2 < X; H2 += 3) m2(t.getX(H2 + 0), t.getX(H2 + 1), t.getX(H2 + 2));
      }
      let S2 = new C(), v = new C(), E = new C(), T2 = new C();
      function R2(x3) {
        E.fromBufferAttribute(i2, x3), T2.copy(E);
        let A3 = o3[x3];
        S2.copy(A3), S2.sub(E.multiplyScalar(E.dot(A3))).normalize(), v.crossVectors(T2, A3);
        let P3 = v.dot(l2[x3]) < 0 ? -1 : 1;
        a.setXYZW(x3, S2.x, S2.y, S2.z, P3);
      }
      for (let x3 = 0, A3 = M2.length; x3 < A3; ++x3) {
        let I2 = M2[x3], P3 = I2.start, N2 = I2.count;
        for (let H2 = P3, X = P3 + N2; H2 < X; H2 += 3) R2(t.getX(H2 + 0)), R2(t.getX(H2 + 1)), R2(t.getX(H2 + 2));
      }
      this._transformed = true;
    }
    computeVertexNormals() {
      let t = this.index, e = this.getAttribute("position");
      if (e !== void 0) {
        let n2 = this.getAttribute("normal");
        if (n2 === void 0 || n2.count !== e.count) n2 = new oe(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n2);
        else for (let u3 = 0, f3 = n2.count; u3 < f3; u3++) n2.setXYZ(u3, 0, 0, 0);
        let i2 = new C(), r2 = new C(), a = new C(), o3 = new C(), l2 = new C(), c3 = new C(), h3 = new C(), d4 = new C();
        if (t) for (let u3 = 0, f3 = t.count; u3 < f3; u3 += 3) {
          let p2 = t.getX(u3 + 0), _ = t.getX(u3 + 1), g = t.getX(u3 + 2);
          i2.fromBufferAttribute(e, p2), r2.fromBufferAttribute(e, _), a.fromBufferAttribute(e, g), h3.subVectors(a, r2), d4.subVectors(i2, r2), h3.cross(d4), o3.fromBufferAttribute(n2, p2), l2.fromBufferAttribute(n2, _), c3.fromBufferAttribute(n2, g), o3.add(h3), l2.add(h3), c3.add(h3), n2.setXYZ(p2, o3.x, o3.y, o3.z), n2.setXYZ(_, l2.x, l2.y, l2.z), n2.setXYZ(g, c3.x, c3.y, c3.z);
        }
        else for (let u3 = 0, f3 = e.count; u3 < f3; u3 += 3) i2.fromBufferAttribute(e, u3 + 0), r2.fromBufferAttribute(e, u3 + 1), a.fromBufferAttribute(e, u3 + 2), h3.subVectors(a, r2), d4.subVectors(i2, r2), h3.cross(d4), n2.setXYZ(u3 + 0, h3.x, h3.y, h3.z), n2.setXYZ(u3 + 1, h3.x, h3.y, h3.z), n2.setXYZ(u3 + 2, h3.x, h3.y, h3.z);
        this.normalizeNormals(), n2.needsUpdate = true;
      }
    }
    normalizeNormals() {
      let t = this.attributes.normal;
      for (let e = 0, n2 = t.count; e < n2; e++) Ne.fromBufferAttribute(t, e), Ne.normalize(), t.setXYZ(e, Ne.x, Ne.y, Ne.z);
    }
    toNonIndexed() {
      function t(o3, l2) {
        let c3 = o3.array, h3 = o3.itemSize, d4 = o3.normalized, u3 = new c3.constructor(l2.length * h3), f3 = 0, p2 = 0;
        for (let _ = 0, g = l2.length; _ < g; _++) {
          o3.isInterleavedBufferAttribute ? f3 = l2[_] * o3.data.stride + o3.offset : f3 = l2[_] * h3;
          for (let m2 = 0; m2 < h3; m2++) u3[p2++] = c3[f3++];
        }
        return new oe(u3, h3, d4);
      }
      if (this.index === null) return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      let e = new s6(), n2 = this.index.array, i2 = this.attributes;
      for (let o3 in i2) {
        let l2 = i2[o3], c3 = t(l2, n2);
        e.setAttribute(o3, c3);
      }
      let r2 = this.morphAttributes;
      for (let o3 in r2) {
        let l2 = [], c3 = r2[o3];
        for (let h3 = 0, d4 = c3.length; h3 < d4; h3++) {
          let u3 = c3[h3], f3 = t(u3, n2);
          l2.push(f3);
        }
        e.morphAttributes[o3] = l2;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      let a = this.groups;
      for (let o3 = 0, l2 = a.length; o3 < l2; o3++) {
        let c3 = a[o3];
        e.addGroup(c3.start, c3.count, c3.materialIndex);
      }
      return e;
    }
    toJSON() {
      let t = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
      if (t.uuid = this.uuid, t.type = this.parameters !== void 0 && this._transformed === true ? "BufferGeometry" : this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0 && this._transformed !== true) {
        let l2 = this.parameters;
        for (let c3 in l2) l2[c3] !== void 0 && (t[c3] = l2[c3]);
        return t;
      }
      t.data = { attributes: {} };
      let e = this.index;
      e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
      let n2 = this.attributes;
      for (let l2 in n2) {
        let c3 = n2[l2];
        t.data.attributes[l2] = c3.toJSON(t.data);
      }
      let i2 = {}, r2 = false;
      for (let l2 in this.morphAttributes) {
        let c3 = this.morphAttributes[l2], h3 = [];
        for (let d4 = 0, u3 = c3.length; d4 < u3; d4++) {
          let f3 = c3[d4];
          h3.push(f3.toJSON(t.data));
        }
        h3.length > 0 && (i2[l2] = h3, r2 = true);
      }
      r2 && (t.data.morphAttributes = i2, t.data.morphTargetsRelative = this.morphTargetsRelative);
      let a = this.groups;
      a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
      let o3 = this.boundingSphere;
      return o3 !== null && (t.data.boundingSphere = o3.toJSON()), t;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      let e = {};
      this.name = t.name;
      let n2 = t.index;
      n2 !== null && this.setIndex(n2.clone());
      let i2 = t.attributes;
      for (let c3 in i2) {
        let h3 = i2[c3];
        this.setAttribute(c3, h3.clone(e));
      }
      let r2 = t.morphAttributes;
      for (let c3 in r2) {
        let h3 = [], d4 = r2[c3];
        for (let u3 = 0, f3 = d4.length; u3 < f3; u3++) h3.push(d4[u3].clone(e));
        this.morphAttributes[c3] = h3;
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      let a = t.groups;
      for (let c3 = 0, h3 = a.length; c3 < h3; c3++) {
        let d4 = a[c3];
        this.addGroup(d4.start, d4.count, d4.materialIndex);
      }
      let o3 = t.boundingBox;
      o3 !== null && (this.boundingBox = o3.clone());
      let l2 = t.boundingSphere;
      return l2 !== null && (this.boundingSphere = l2.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this._transformed = t._transformed, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var We = new C();
  var Bg = 0;
  var Pe = class extends hn {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Bg++ }), this.uuid = cn(), this.name = "", this.type = "Material", this.blending = Hi, this.side = $n, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = so, this.blendDst = ro, this.blendEquation = mi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new St(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Wi, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = lh, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Bi, this.stencilZFail = Bi, this.stencilZPass = Bi, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t) {
      this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t) {
      if (t !== void 0) for (let e in t) {
        let n2 = t[e];
        if (n2 === void 0) {
          ot(`Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        let i2 = this[e];
        if (i2 === void 0) {
          ot(`Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i2 && i2.isColor ? i2.set(n2) : i2 && i2.isVector2 && n2 && n2.isVector2 || i2 && i2.isEuler && n2 && n2.isEuler || i2 && i2.isVector3 && n2 && n2.isVector3 ? i2.copy(n2) : this[e] = n2;
      }
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string";
      e && (t = { textures: {}, images: {} });
      let n2 = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
      n2.uuid = this.uuid, n2.type = this.type, this.name !== "" && (n2.name = this.name), this.color && this.color.isColor && (n2.color = this.color.getHex()), this.roughness !== void 0 && (n2.roughness = this.roughness), this.metalness !== void 0 && (n2.metalness = this.metalness), this.sheen !== void 0 && (n2.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n2.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n2.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n2.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n2.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n2.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n2.shininess = this.shininess), this.clearcoat !== void 0 && (n2.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n2.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n2.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n2.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n2.dispersion = this.dispersion), this.iridescence !== void 0 && (n2.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n2.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n2.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n2.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n2.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n2.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n2.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n2.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n2.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n2.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n2.lightMap = this.lightMap.toJSON(t).uuid, n2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n2.aoMap = this.aoMap.toJSON(t).uuid, n2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n2.bumpMap = this.bumpMap.toJSON(t).uuid, n2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n2.normalMap = this.normalMap.toJSON(t).uuid, n2.normalMapType = this.normalMapType, n2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n2.displacementMap = this.displacementMap.toJSON(t).uuid, n2.displacementScale = this.displacementScale, n2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n2.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n2.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n2.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n2.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n2.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n2.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n2.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n2.combine = this.combine)), this.envMapRotation !== void 0 && (n2.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n2.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n2.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n2.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n2.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n2.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n2.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n2.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n2.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n2.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n2.size = this.size), this.shadowSide !== null && (n2.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n2.sizeAttenuation = this.sizeAttenuation), this.blending !== Hi && (n2.blending = this.blending), this.side !== $n && (n2.side = this.side), this.vertexColors === true && (n2.vertexColors = true), this.opacity < 1 && (n2.opacity = this.opacity), this.transparent === true && (n2.transparent = true), this.blendSrc !== so && (n2.blendSrc = this.blendSrc), this.blendDst !== ro && (n2.blendDst = this.blendDst), this.blendEquation !== mi && (n2.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n2.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n2.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n2.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n2.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n2.blendAlpha = this.blendAlpha), this.depthFunc !== Wi && (n2.depthFunc = this.depthFunc), this.depthTest === false && (n2.depthTest = this.depthTest), this.depthWrite === false && (n2.depthWrite = this.depthWrite), this.colorWrite === false && (n2.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n2.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== lh && (n2.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n2.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n2.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Bi && (n2.stencilFail = this.stencilFail), this.stencilZFail !== Bi && (n2.stencilZFail = this.stencilZFail), this.stencilZPass !== Bi && (n2.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n2.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n2.rotation = this.rotation), this.polygonOffset === true && (n2.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n2.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n2.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n2.linewidth = this.linewidth), this.dashSize !== void 0 && (n2.dashSize = this.dashSize), this.gapSize !== void 0 && (n2.gapSize = this.gapSize), this.scale !== void 0 && (n2.scale = this.scale), this.dithering === true && (n2.dithering = true), this.alphaTest > 0 && (n2.alphaTest = this.alphaTest), this.alphaHash === true && (n2.alphaHash = true), this.alphaToCoverage === true && (n2.alphaToCoverage = true), this.premultipliedAlpha === true && (n2.premultipliedAlpha = true), this.forceSinglePass === true && (n2.forceSinglePass = true), this.allowOverride === false && (n2.allowOverride = false), this.wireframe === true && (n2.wireframe = true), this.wireframeLinewidth > 1 && (n2.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n2.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n2.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n2.flatShading = true), this.visible === false && (n2.visible = false), this.toneMapped === false && (n2.toneMapped = false), this.fog === false && (n2.fog = false), Object.keys(this.userData).length > 0 && (n2.userData = this.userData);
      function i2(r2) {
        let a = [];
        for (let o3 in r2) {
          let l2 = r2[o3];
          delete l2.metadata, a.push(l2);
        }
        return a;
      }
      if (e) {
        let r2 = i2(t.textures), a = i2(t.images);
        r2.length > 0 && (n2.textures = r2), a.length > 0 && (n2.images = a);
      }
      return n2;
    }
    fromJSON(t, e) {
      if (t.uuid !== void 0 && (this.uuid = t.uuid), t.name !== void 0 && (this.name = t.name), t.color !== void 0 && this.color !== void 0 && this.color.setHex(t.color), t.roughness !== void 0 && (this.roughness = t.roughness), t.metalness !== void 0 && (this.metalness = t.metalness), t.sheen !== void 0 && (this.sheen = t.sheen), t.sheenColor !== void 0 && (this.sheenColor = new St().setHex(t.sheenColor)), t.sheenRoughness !== void 0 && (this.sheenRoughness = t.sheenRoughness), t.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(t.emissive), t.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(t.specular), t.specularIntensity !== void 0 && (this.specularIntensity = t.specularIntensity), t.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(t.specularColor), t.shininess !== void 0 && (this.shininess = t.shininess), t.clearcoat !== void 0 && (this.clearcoat = t.clearcoat), t.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = t.clearcoatRoughness), t.dispersion !== void 0 && (this.dispersion = t.dispersion), t.iridescence !== void 0 && (this.iridescence = t.iridescence), t.iridescenceIOR !== void 0 && (this.iridescenceIOR = t.iridescenceIOR), t.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = t.iridescenceThicknessRange), t.transmission !== void 0 && (this.transmission = t.transmission), t.thickness !== void 0 && (this.thickness = t.thickness), t.attenuationDistance !== void 0 && (this.attenuationDistance = t.attenuationDistance), t.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(t.attenuationColor), t.anisotropy !== void 0 && (this.anisotropy = t.anisotropy), t.anisotropyRotation !== void 0 && (this.anisotropyRotation = t.anisotropyRotation), t.fog !== void 0 && (this.fog = t.fog), t.flatShading !== void 0 && (this.flatShading = t.flatShading), t.blending !== void 0 && (this.blending = t.blending), t.combine !== void 0 && (this.combine = t.combine), t.side !== void 0 && (this.side = t.side), t.shadowSide !== void 0 && (this.shadowSide = t.shadowSide), t.opacity !== void 0 && (this.opacity = t.opacity), t.transparent !== void 0 && (this.transparent = t.transparent), t.alphaTest !== void 0 && (this.alphaTest = t.alphaTest), t.alphaHash !== void 0 && (this.alphaHash = t.alphaHash), t.depthFunc !== void 0 && (this.depthFunc = t.depthFunc), t.depthTest !== void 0 && (this.depthTest = t.depthTest), t.depthWrite !== void 0 && (this.depthWrite = t.depthWrite), t.colorWrite !== void 0 && (this.colorWrite = t.colorWrite), t.blendSrc !== void 0 && (this.blendSrc = t.blendSrc), t.blendDst !== void 0 && (this.blendDst = t.blendDst), t.blendEquation !== void 0 && (this.blendEquation = t.blendEquation), t.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = t.blendSrcAlpha), t.blendDstAlpha !== void 0 && (this.blendDstAlpha = t.blendDstAlpha), t.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = t.blendEquationAlpha), t.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(t.blendColor), t.blendAlpha !== void 0 && (this.blendAlpha = t.blendAlpha), t.stencilWriteMask !== void 0 && (this.stencilWriteMask = t.stencilWriteMask), t.stencilFunc !== void 0 && (this.stencilFunc = t.stencilFunc), t.stencilRef !== void 0 && (this.stencilRef = t.stencilRef), t.stencilFuncMask !== void 0 && (this.stencilFuncMask = t.stencilFuncMask), t.stencilFail !== void 0 && (this.stencilFail = t.stencilFail), t.stencilZFail !== void 0 && (this.stencilZFail = t.stencilZFail), t.stencilZPass !== void 0 && (this.stencilZPass = t.stencilZPass), t.stencilWrite !== void 0 && (this.stencilWrite = t.stencilWrite), t.wireframe !== void 0 && (this.wireframe = t.wireframe), t.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = t.wireframeLinewidth), t.wireframeLinecap !== void 0 && (this.wireframeLinecap = t.wireframeLinecap), t.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = t.wireframeLinejoin), t.rotation !== void 0 && (this.rotation = t.rotation), t.linewidth !== void 0 && (this.linewidth = t.linewidth), t.dashSize !== void 0 && (this.dashSize = t.dashSize), t.gapSize !== void 0 && (this.gapSize = t.gapSize), t.scale !== void 0 && (this.scale = t.scale), t.polygonOffset !== void 0 && (this.polygonOffset = t.polygonOffset), t.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = t.polygonOffsetFactor), t.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = t.polygonOffsetUnits), t.dithering !== void 0 && (this.dithering = t.dithering), t.alphaToCoverage !== void 0 && (this.alphaToCoverage = t.alphaToCoverage), t.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = t.premultipliedAlpha), t.forceSinglePass !== void 0 && (this.forceSinglePass = t.forceSinglePass), t.allowOverride !== void 0 && (this.allowOverride = t.allowOverride), t.visible !== void 0 && (this.visible = t.visible), t.toneMapped !== void 0 && (this.toneMapped = t.toneMapped), t.userData !== void 0 && (this.userData = t.userData), t.vertexColors !== void 0 && (typeof t.vertexColors == "number" ? this.vertexColors = t.vertexColors > 0 : this.vertexColors = t.vertexColors), t.size !== void 0 && (this.size = t.size), t.sizeAttenuation !== void 0 && (this.sizeAttenuation = t.sizeAttenuation), t.map !== void 0 && (this.map = e[t.map] || null), t.matcap !== void 0 && (this.matcap = e[t.matcap] || null), t.alphaMap !== void 0 && (this.alphaMap = e[t.alphaMap] || null), t.bumpMap !== void 0 && (this.bumpMap = e[t.bumpMap] || null), t.bumpScale !== void 0 && (this.bumpScale = t.bumpScale), t.normalMap !== void 0 && (this.normalMap = e[t.normalMap] || null), t.normalMapType !== void 0 && (this.normalMapType = t.normalMapType), t.normalScale !== void 0) {
        let n2 = t.normalScale;
        Array.isArray(n2) === false && (n2 = [n2, n2]), this.normalScale = new Q().fromArray(n2);
      }
      return t.displacementMap !== void 0 && (this.displacementMap = e[t.displacementMap] || null), t.displacementScale !== void 0 && (this.displacementScale = t.displacementScale), t.displacementBias !== void 0 && (this.displacementBias = t.displacementBias), t.roughnessMap !== void 0 && (this.roughnessMap = e[t.roughnessMap] || null), t.metalnessMap !== void 0 && (this.metalnessMap = e[t.metalnessMap] || null), t.emissiveMap !== void 0 && (this.emissiveMap = e[t.emissiveMap] || null), t.emissiveIntensity !== void 0 && (this.emissiveIntensity = t.emissiveIntensity), t.specularMap !== void 0 && (this.specularMap = e[t.specularMap] || null), t.specularIntensityMap !== void 0 && (this.specularIntensityMap = e[t.specularIntensityMap] || null), t.specularColorMap !== void 0 && (this.specularColorMap = e[t.specularColorMap] || null), t.envMap !== void 0 && (this.envMap = e[t.envMap] || null), t.envMapRotation !== void 0 && this.envMapRotation.fromArray(t.envMapRotation), t.envMapIntensity !== void 0 && (this.envMapIntensity = t.envMapIntensity), t.reflectivity !== void 0 && (this.reflectivity = t.reflectivity), t.refractionRatio !== void 0 && (this.refractionRatio = t.refractionRatio), t.lightMap !== void 0 && (this.lightMap = e[t.lightMap] || null), t.lightMapIntensity !== void 0 && (this.lightMapIntensity = t.lightMapIntensity), t.aoMap !== void 0 && (this.aoMap = e[t.aoMap] || null), t.aoMapIntensity !== void 0 && (this.aoMapIntensity = t.aoMapIntensity), t.gradientMap !== void 0 && (this.gradientMap = e[t.gradientMap] || null), t.clearcoatMap !== void 0 && (this.clearcoatMap = e[t.clearcoatMap] || null), t.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = e[t.clearcoatRoughnessMap] || null), t.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = e[t.clearcoatNormalMap] || null), t.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new Q().fromArray(t.clearcoatNormalScale)), t.iridescenceMap !== void 0 && (this.iridescenceMap = e[t.iridescenceMap] || null), t.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = e[t.iridescenceThicknessMap] || null), t.transmissionMap !== void 0 && (this.transmissionMap = e[t.transmissionMap] || null), t.thicknessMap !== void 0 && (this.thicknessMap = e[t.thicknessMap] || null), t.anisotropyMap !== void 0 && (this.anisotropyMap = e[t.anisotropyMap] || null), t.sheenColorMap !== void 0 && (this.sheenColorMap = e[t.sheenColorMap] || null), t.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = e[t.sheenRoughnessMap] || null), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
      let e = t.clippingPlanes, n2 = null;
      if (e !== null) {
        let i2 = e.length;
        n2 = new Array(i2);
        for (let r2 = 0; r2 !== i2; ++r2) n2[r2] = e[r2].clone();
      }
      return this.clippingPlanes = n2, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.allowOverride = t.allowOverride, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t) {
      t === true && this.version++;
    }
  };
  var js = new C();
  var _s = new C();
  var xs = new C();
  var vs = new Q();
  var tr = new Q();
  var xp = new Ht();
  var Ma = new C();
  var er = new C();
  var Sa = new C();
  var Ld = new Q();
  var Bc = new Q();
  var Dd = new Q();
  var Ta = new C();
  var Nd = new C();
  var qn = new C();
  var zc = new C();
  var Aa = new C();
  var hi = new C();
  var Vc = new C();
  var Ea = new C();
  var kc = new C();
  var _i = class {
    constructor(t = new C(), e = new C(0, 0, -1)) {
      this.origin = t, this.direction = e;
    }
    set(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    }
    copy(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    }
    at(t, e) {
      return e.copy(this.origin).addScaledVector(this.direction, t);
    }
    lookAt(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this;
    }
    recast(t) {
      return this.origin.copy(this.at(t, qn)), this;
    }
    closestPointToPoint(t, e) {
      e.subVectors(t, this.origin);
      let n2 = e.dot(this.direction);
      return n2 < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n2);
    }
    distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }
    distanceSqToPoint(t) {
      let e = qn.subVectors(t, this.origin).dot(this.direction);
      return e < 0 ? this.origin.distanceToSquared(t) : (qn.copy(this.origin).addScaledVector(this.direction, e), qn.distanceToSquared(t));
    }
    distanceSqToSegment(t, e, n2, i2) {
      zc.copy(t).add(e).multiplyScalar(0.5), Aa.copy(e).sub(t).normalize(), hi.copy(this.origin).sub(zc);
      let r2 = t.distanceTo(e) * 0.5, a = -this.direction.dot(Aa), o3 = hi.dot(this.direction), l2 = -hi.dot(Aa), c3 = hi.lengthSq(), h3 = Math.abs(1 - a * a), d4, u3, f3, p2;
      if (h3 > 0) if (d4 = a * l2 - o3, u3 = a * o3 - l2, p2 = r2 * h3, d4 >= 0) if (u3 >= -p2) if (u3 <= p2) {
        let _ = 1 / h3;
        d4 *= _, u3 *= _, f3 = d4 * (d4 + a * u3 + 2 * o3) + u3 * (a * d4 + u3 + 2 * l2) + c3;
      } else u3 = r2, d4 = Math.max(0, -(a * u3 + o3)), f3 = -d4 * d4 + u3 * (u3 + 2 * l2) + c3;
      else u3 = -r2, d4 = Math.max(0, -(a * u3 + o3)), f3 = -d4 * d4 + u3 * (u3 + 2 * l2) + c3;
      else u3 <= -p2 ? (d4 = Math.max(0, -(-a * r2 + o3)), u3 = d4 > 0 ? -r2 : Math.min(Math.max(-r2, -l2), r2), f3 = -d4 * d4 + u3 * (u3 + 2 * l2) + c3) : u3 <= p2 ? (d4 = 0, u3 = Math.min(Math.max(-r2, -l2), r2), f3 = u3 * (u3 + 2 * l2) + c3) : (d4 = Math.max(0, -(a * r2 + o3)), u3 = d4 > 0 ? r2 : Math.min(Math.max(-r2, -l2), r2), f3 = -d4 * d4 + u3 * (u3 + 2 * l2) + c3);
      else u3 = a > 0 ? -r2 : r2, d4 = Math.max(0, -(a * u3 + o3)), f3 = -d4 * d4 + u3 * (u3 + 2 * l2) + c3;
      return n2 && n2.copy(this.origin).addScaledVector(this.direction, d4), i2 && i2.copy(zc).addScaledVector(Aa, u3), f3;
    }
    intersectSphere(t, e) {
      qn.subVectors(t.center, this.origin);
      let n2 = qn.dot(this.direction), i2 = qn.dot(qn) - n2 * n2, r2 = t.radius * t.radius;
      if (i2 > r2) return null;
      let a = Math.sqrt(r2 - i2), o3 = n2 - a, l2 = n2 + a;
      return l2 < 0 ? null : o3 < 0 ? this.at(l2, e) : this.at(o3, e);
    }
    intersectsSphere(t) {
      return t.radius < 0 ? false : this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }
    distanceToPlane(t) {
      let e = t.normal.dot(this.direction);
      if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
      let n2 = -(this.origin.dot(t.normal) + t.constant) / e;
      return n2 >= 0 ? n2 : null;
    }
    intersectPlane(t, e) {
      let n2 = this.distanceToPlane(t);
      return n2 === null ? null : this.at(n2, e);
    }
    intersectsPlane(t) {
      let e = t.distanceToPoint(this.origin);
      return e === 0 || t.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t, e) {
      let n2, i2, r2, a, o3, l2, c3 = 1 / this.direction.x, h3 = 1 / this.direction.y, d4 = 1 / this.direction.z, u3 = this.origin;
      return c3 >= 0 ? (n2 = (t.min.x - u3.x) * c3, i2 = (t.max.x - u3.x) * c3) : (n2 = (t.max.x - u3.x) * c3, i2 = (t.min.x - u3.x) * c3), h3 >= 0 ? (r2 = (t.min.y - u3.y) * h3, a = (t.max.y - u3.y) * h3) : (r2 = (t.max.y - u3.y) * h3, a = (t.min.y - u3.y) * h3), n2 > a || r2 > i2 || ((r2 > n2 || isNaN(n2)) && (n2 = r2), (a < i2 || isNaN(i2)) && (i2 = a), d4 >= 0 ? (o3 = (t.min.z - u3.z) * d4, l2 = (t.max.z - u3.z) * d4) : (o3 = (t.max.z - u3.z) * d4, l2 = (t.min.z - u3.z) * d4), n2 > l2 || o3 > i2) || ((o3 > n2 || n2 !== n2) && (n2 = o3), (l2 < i2 || i2 !== i2) && (i2 = l2), i2 < 0) ? null : this.at(n2 >= 0 ? n2 : i2, e);
    }
    intersectsBox(t) {
      return this.intersectBox(t, qn) !== null;
    }
    intersectTriangle(t, e, n2, i2, r2) {
      Vc.subVectors(e, t), Ea.subVectors(n2, t), kc.crossVectors(Vc, Ea);
      let a = this.direction.dot(kc), o3;
      if (a > 0) {
        if (i2) return null;
        o3 = 1;
      } else if (a < 0) o3 = -1, a = -a;
      else return null;
      hi.subVectors(this.origin, t);
      let l2 = o3 * this.direction.dot(Ea.crossVectors(hi, Ea));
      if (l2 < 0) return null;
      let c3 = o3 * this.direction.dot(Vc.cross(hi));
      if (c3 < 0 || l2 + c3 > a) return null;
      let h3 = -o3 * hi.dot(kc);
      return h3 < 0 ? null : this.at(h3 / a, r2);
    }
    applyMatrix4(t) {
      return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
    }
    equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Ln = class extends Pe {
    constructor(t) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new St(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new yn(), this.combine = Qr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
    }
    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
    }
  };
  var Ud = new Ht();
  var Ci = new _i();
  var wa = new Ie();
  var Fd = new C();
  var Ca = new C();
  var Ra = new C();
  var Ia = new C();
  var Gc = new C();
  var Pa = new C();
  var Od = new C();
  var La = new C();
  var Se = class extends re {
    constructor(t = new Yt(), e = new Ln()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
    }
    copy(t, e) {
      return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes, n2 = Object.keys(e);
      if (n2.length > 0) {
        let i2 = e[n2[0]];
        if (i2 !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r2 = 0, a = i2.length; r2 < a; r2++) {
            let o3 = i2[r2].name || String(r2);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o3] = r2;
          }
        }
      }
    }
    getVertexPosition(t, e) {
      let n2 = this.geometry, i2 = n2.attributes.position, r2 = n2.morphAttributes.position, a = n2.morphTargetsRelative;
      e.fromBufferAttribute(i2, t);
      let o3 = this.morphTargetInfluences;
      if (r2 && o3) {
        Pa.set(0, 0, 0);
        for (let l2 = 0, c3 = r2.length; l2 < c3; l2++) {
          let h3 = o3[l2], d4 = r2[l2];
          h3 !== 0 && (Gc.fromBufferAttribute(d4, t), a ? Pa.addScaledVector(Gc, h3) : Pa.addScaledVector(Gc.sub(e), h3));
        }
        e.add(Pa);
      }
      return e;
    }
    raycast(t, e) {
      let n2 = this.geometry, i2 = this.material, r2 = this.matrixWorld;
      i2 !== void 0 && (n2.boundingSphere === null && n2.computeBoundingSphere(), wa.copy(n2.boundingSphere), wa.applyMatrix4(r2), Ci.copy(t.ray).recast(t.near), !(wa.containsPoint(Ci.origin) === false && (Ci.intersectSphere(wa, Fd) === null || Ci.origin.distanceToSquared(Fd) > (t.far - t.near) ** 2)) && (Ud.copy(r2).invert(), Ci.copy(t.ray).applyMatrix4(Ud), !(n2.boundingBox !== null && Ci.intersectsBox(n2.boundingBox) === false) && this._computeIntersections(t, e, Ci)));
    }
    _computeIntersections(t, e, n2) {
      let i2, r2 = this.geometry, a = this.material, o3 = r2.index, l2 = r2.attributes.position, c3 = r2.attributes.uv, h3 = r2.attributes.uv1, d4 = r2.attributes.normal, u3 = r2.groups, f3 = r2.drawRange;
      if (o3 !== null) if (Array.isArray(a)) for (let p2 = 0, _ = u3.length; p2 < _; p2++) {
        let g = u3[p2], m2 = a[g.materialIndex], M2 = Math.max(g.start, f3.start), S2 = Math.min(o3.count, Math.min(g.start + g.count, f3.start + f3.count));
        for (let v = M2, E = S2; v < E; v += 3) {
          let T2 = o3.getX(v), R2 = o3.getX(v + 1), x3 = o3.getX(v + 2);
          i2 = Da(this, m2, t, n2, c3, h3, d4, T2, R2, x3), i2 && (i2.faceIndex = Math.floor(v / 3), i2.face.materialIndex = g.materialIndex, e.push(i2));
        }
      }
      else {
        let p2 = Math.max(0, f3.start), _ = Math.min(o3.count, f3.start + f3.count);
        for (let g = p2, m2 = _; g < m2; g += 3) {
          let M2 = o3.getX(g), S2 = o3.getX(g + 1), v = o3.getX(g + 2);
          i2 = Da(this, a, t, n2, c3, h3, d4, M2, S2, v), i2 && (i2.faceIndex = Math.floor(g / 3), e.push(i2));
        }
      }
      else if (l2 !== void 0) if (Array.isArray(a)) for (let p2 = 0, _ = u3.length; p2 < _; p2++) {
        let g = u3[p2], m2 = a[g.materialIndex], M2 = Math.max(g.start, f3.start), S2 = Math.min(l2.count, Math.min(g.start + g.count, f3.start + f3.count));
        for (let v = M2, E = S2; v < E; v += 3) {
          let T2 = v, R2 = v + 1, x3 = v + 2;
          i2 = Da(this, m2, t, n2, c3, h3, d4, T2, R2, x3), i2 && (i2.faceIndex = Math.floor(v / 3), i2.face.materialIndex = g.materialIndex, e.push(i2));
        }
      }
      else {
        let p2 = Math.max(0, f3.start), _ = Math.min(l2.count, f3.start + f3.count);
        for (let g = p2, m2 = _; g < m2; g += 3) {
          let M2 = g, S2 = g + 1, v = g + 2;
          i2 = Da(this, a, t, n2, c3, h3, d4, M2, S2, v), i2 && (i2.faceIndex = Math.floor(g / 3), e.push(i2));
        }
      }
    }
  };
  function zg(s30, t, e, n2, i2, r2, a, o3) {
    let l2;
    if (t.side === Je ? l2 = n2.intersectTriangle(a, r2, i2, true, o3) : l2 = n2.intersectTriangle(i2, r2, a, t.side === $n, o3), l2 === null) return null;
    La.copy(o3), La.applyMatrix4(s30.matrixWorld);
    let c3 = e.ray.origin.distanceTo(La);
    return c3 < e.near || c3 > e.far ? null : { distance: c3, point: La.clone(), object: s30 };
  }
  function Da(s30, t, e, n2, i2, r2, a, o3, l2, c3) {
    s30.getVertexPosition(o3, Ca), s30.getVertexPosition(l2, Ra), s30.getVertexPosition(c3, Ia);
    let h3 = zg(s30, t, e, n2, Ca, Ra, Ia, Od);
    if (h3) {
      let d4 = new C();
      Cn.getBarycoord(Od, Ca, Ra, Ia, d4), i2 && (h3.uv = Cn.getInterpolatedAttribute(i2, o3, l2, c3, d4, new Q())), r2 && (h3.uv1 = Cn.getInterpolatedAttribute(r2, o3, l2, c3, d4, new Q())), a && (h3.normal = Cn.getInterpolatedAttribute(a, o3, l2, c3, d4, new C()), h3.normal.dot(n2.direction) > 0 && h3.normal.multiplyScalar(-1));
      let u3 = { a: o3, b: l2, c: c3, normal: new C(), materialIndex: 0 };
      Cn.getNormal(Ca, Ra, Ia, u3.normal), h3.face = u3, h3.barycoord = d4;
    }
    return h3;
  }
  var nr = new ce();
  var Bd = new ce();
  var zd = new ce();
  var Vg = new ce();
  var Vd = new Ht();
  var Na = new C();
  var Hc = new Ie();
  var kd = new Ht();
  var Wc = new _i();
  var tn = class extends we {
    constructor(t = null, e = 1, n2 = 1, i2, r2, a, o3, l2, c3 = Ee, h3 = Ee, d4, u3) {
      super(null, a, o3, l2, c3, h3, i2, r2, d4, u3), this.isDataTexture = true, this.image = { data: t, width: e, height: n2 }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Gd = new Ht();
  var kg = new Ht();
  var ys = new Ht();
  var Hd = new Ht();
  var Wd = new Ue();
  var Gg = new Ht();
  var ir = new Se();
  var sr = new Ie();
  var Xc = new C();
  var Hg = new C();
  var Wg = new Xt();
  var wn = class {
    constructor(t = new C(1, 0, 0), e = 0) {
      this.isPlane = true, this.normal = t, this.constant = e;
    }
    set(t, e) {
      return this.normal.copy(t), this.constant = e, this;
    }
    setComponents(t, e, n2, i2) {
      return this.normal.set(t, e, n2), this.constant = i2, this;
    }
    setFromNormalAndCoplanarPoint(t, e) {
      return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
    }
    setFromCoplanarPoints(t, e, n2) {
      let i2 = Xc.subVectors(n2, e).cross(Hg.subVectors(t, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i2, t), this;
    }
    copy(t) {
      return this.normal.copy(t.normal), this.constant = t.constant, this;
    }
    normalize() {
      let t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), this.constant *= t, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(t) {
      return this.normal.dot(t) + this.constant;
    }
    distanceToSphere(t) {
      return this.distanceToPoint(t.center) - t.radius;
    }
    projectPoint(t, e) {
      return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
    }
    intersectLine(t, e, n2 = true) {
      let i2 = t.delta(Xc), r2 = this.normal.dot(i2);
      if (r2 === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
      let a = -(t.start.dot(this.normal) + this.constant) / r2;
      return n2 === true && (a < 0 || a > 1) ? null : e.copy(t.start).addScaledVector(i2, a);
    }
    intersectsLine(t) {
      let e = this.distanceToPoint(t.start), n2 = this.distanceToPoint(t.end);
      return e < 0 && n2 > 0 || n2 < 0 && e > 0;
    }
    intersectsBox(t) {
      return t.intersectsPlane(this);
    }
    intersectsSphere(t) {
      return t.intersectsPlane(this);
    }
    coplanarPoint(t) {
      return t.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t, e) {
      let n2 = e || Wg.getNormalMatrix(t), i2 = this.coplanarPoint(Xc).applyMatrix4(t), r2 = this.normal.applyMatrix3(n2).normalize();
      return this.constant = -i2.dot(r2), this;
    }
    translate(t) {
      return this.constant -= t.dot(this.normal), this;
    }
    equals(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Ri = new Ie();
  var Xg = new Q(0.5, 0.5);
  var Fa = new C();
  var Kn = class {
    constructor(t = new wn(), e = new wn(), n2 = new wn(), i2 = new wn(), r2 = new wn(), a = new wn()) {
      this.planes = [t, e, n2, i2, r2, a];
    }
    set(t, e, n2, i2, r2, a) {
      let o3 = this.planes;
      return o3[0].copy(t), o3[1].copy(e), o3[2].copy(n2), o3[3].copy(i2), o3[4].copy(r2), o3[5].copy(a), this;
    }
    copy(t) {
      let e = this.planes;
      for (let n2 = 0; n2 < 6; n2++) e[n2].copy(t.planes[n2]);
      return this;
    }
    setFromProjectionMatrix(t, e = ln, n2 = false) {
      let i2 = this.planes, r2 = t.elements, a = r2[0], o3 = r2[1], l2 = r2[2], c3 = r2[3], h3 = r2[4], d4 = r2[5], u3 = r2[6], f3 = r2[7], p2 = r2[8], _ = r2[9], g = r2[10], m2 = r2[11], M2 = r2[12], S2 = r2[13], v = r2[14], E = r2[15];
      if (i2[0].setComponents(c3 - a, f3 - h3, m2 - p2, E - M2).normalize(), i2[1].setComponents(c3 + a, f3 + h3, m2 + p2, E + M2).normalize(), i2[2].setComponents(c3 + o3, f3 + d4, m2 + _, E + S2).normalize(), i2[3].setComponents(c3 - o3, f3 - d4, m2 - _, E - S2).normalize(), n2) i2[4].setComponents(l2, u3, g, v).normalize(), i2[5].setComponents(c3 - l2, f3 - u3, m2 - g, E - v).normalize();
      else if (i2[4].setComponents(c3 - l2, f3 - u3, m2 - g, E - v).normalize(), e === ln) i2[5].setComponents(c3 + l2, f3 + u3, m2 + g, E + v).normalize();
      else if (e === Xi) i2[5].setComponents(l2, u3, g, v).normalize();
      else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
      return this;
    }
    intersectsObject(t) {
      if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
      else {
        let e = t.geometry;
        e.boundingSphere === null && e.computeBoundingSphere(), Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
      }
      return this.intersectsSphere(Ri);
    }
    intersectsSprite(t) {
      Ri.center.set(0, 0, 0);
      let e = Xg.distanceTo(t.center);
      return Ri.radius = 0.7071067811865476 + e, Ri.applyMatrix4(t.matrixWorld), this.intersectsSphere(Ri);
    }
    intersectsSphere(t) {
      let e = this.planes, n2 = t.center, i2 = -t.radius;
      for (let r2 = 0; r2 < 6; r2++) if (e[r2].distanceToPoint(n2) < i2) return false;
      return true;
    }
    intersectsBox(t) {
      let e = this.planes;
      for (let n2 = 0; n2 < 6; n2++) {
        let i2 = e[n2];
        if (Fa.x = i2.normal.x > 0 ? t.max.x : t.min.x, Fa.y = i2.normal.y > 0 ? t.max.y : t.min.y, Fa.z = i2.normal.z > 0 ? t.max.z : t.min.z, i2.distanceToPoint(Fa) < 0) return false;
      }
      return true;
    }
    containsPoint(t) {
      let e = this.planes;
      for (let n2 = 0; n2 < 6; n2++) if (e[n2].distanceToPoint(t) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Xd = new Ht();
  var To = class s7 {
    constructor() {
      this.coordinateSystem = ln, this._frustums = [], this._count = 0;
    }
    setFromArrayCamera(t) {
      let e = t.cameras, n2 = this._frustums;
      for (let i2 = 0; i2 < e.length; i2++) {
        let r2 = e[i2];
        Xd.multiplyMatrices(r2.projectionMatrix, r2.matrixWorldInverse), n2[i2] === void 0 && (n2[i2] = new Kn()), n2[i2].setFromProjectionMatrix(Xd, r2.coordinateSystem, r2.reversedDepth);
      }
      return this._count = e.length, this;
    }
    intersectsObject(t) {
      let e = this._frustums;
      for (let n2 = 0; n2 < this._count; n2++) if (e[n2].intersectsObject(t)) return true;
      return false;
    }
    intersectsSprite(t) {
      let e = this._frustums;
      for (let n2 = 0; n2 < this._count; n2++) if (e[n2].intersectsSprite(t)) return true;
      return false;
    }
    intersectsSphere(t) {
      let e = this._frustums;
      for (let n2 = 0; n2 < this._count; n2++) if (e[n2].intersectsSphere(t)) return true;
      return false;
    }
    intersectsBox(t) {
      let e = this._frustums;
      for (let n2 = 0; n2 < this._count; n2++) if (e[n2].intersectsBox(t)) return true;
      return false;
    }
    containsPoint(t) {
      let e = this._frustums;
      for (let n2 = 0; n2 < this._count; n2++) if (e[n2].containsPoint(t)) return true;
      return false;
    }
    copy(t) {
      this.coordinateSystem = t.coordinateSystem;
      let e = this._frustums, n2 = t._frustums;
      for (let i2 = 0; i2 < t._count; i2++) e[i2] === void 0 && (e[i2] = new Kn()), e[i2].copy(n2[i2]);
      return this._count = t._count, this;
    }
    clone() {
      return new s7().copy(this);
    }
  };
  var xh = class {
    constructor() {
      this.index = 0, this.pool = [], this.list = [];
    }
    push(t, e, n2, i2) {
      let r2 = this.pool, a = this.list;
      this.index >= r2.length && r2.push({ start: -1, count: -1, z: -1, index: -1 });
      let o3 = r2[this.index];
      a.push(o3), this.index++, o3.start = t, o3.count = e, o3.z = n2, o3.index = i2;
    }
    reset() {
      this.list.length = 0, this.index = 0;
    }
  };
  var $e = new Ht();
  var Zg = new St(1, 1, 1);
  var Jg = new Kn();
  var $g = new To();
  var Oa = new Ue();
  var Ii = new Ie();
  var rr = new C();
  var qd = new C();
  var Kg = new C();
  var Yc = new xh();
  var ke = new Se();
  var Eo = new C();
  var wo = new C();
  var Yd = new Ht();
  var ar = new _i();
  var za = new Ie();
  var Zc = new C();
  var Zd = new C();
  var Jd = new C();
  var $d = new C();
  var Ar = class extends Pe {
    constructor(t) {
      super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new St(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t);
    }
    copy(t) {
      return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
    }
  };
  var Kd = new Ht();
  var vh = new _i();
  var ka = new Ie();
  var Ga = new C();
  var Ro = class extends re {
    constructor(t = new Yt(), e = new Ar()) {
      super(), this.isPoints = true, this.type = "Points", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
    }
    copy(t, e) {
      return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
    }
    raycast(t, e) {
      let n2 = this.geometry, i2 = this.matrixWorld, r2 = t.params.Points.threshold, a = n2.drawRange;
      if (n2.boundingSphere === null && n2.computeBoundingSphere(), ka.copy(n2.boundingSphere), ka.applyMatrix4(i2), ka.radius += r2, t.ray.intersectsSphere(ka) === false) return;
      Kd.copy(i2).invert(), vh.copy(t.ray).applyMatrix4(Kd);
      let o3 = r2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), l2 = o3 * o3, c3 = n2.index, d4 = n2.attributes.position;
      if (c3 !== null) {
        let u3 = Math.max(0, a.start), f3 = Math.min(c3.count, a.start + a.count);
        for (let p2 = u3, _ = f3; p2 < _; p2++) {
          let g = c3.getX(p2);
          Ga.fromBufferAttribute(d4, g), Qd(Ga, g, l2, i2, t, e, this);
        }
      } else {
        let u3 = Math.max(0, a.start), f3 = Math.min(d4.count, a.start + a.count);
        for (let p2 = u3, _ = f3; p2 < _; p2++) Ga.fromBufferAttribute(d4, p2), Qd(Ga, p2, l2, i2, t, e, this);
      }
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes, n2 = Object.keys(e);
      if (n2.length > 0) {
        let i2 = e[n2[0]];
        if (i2 !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let r2 = 0, a = i2.length; r2 < a; r2++) {
            let o3 = i2[r2].name || String(r2);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[o3] = r2;
          }
        }
      }
    }
  };
  function Qd(s30, t, e, n2, i2, r2, a) {
    let o3 = vh.distanceSqToPoint(s30);
    if (o3 < e) {
      let l2 = new C();
      vh.closestPointToPoint(s30, l2), l2.applyMatrix4(n2);
      let c3 = i2.ray.origin.distanceTo(l2);
      if (c3 < i2.near || c3 > i2.far) return;
      r2.push({ distance: c3, distanceToRay: Math.sqrt(o3), point: l2, index: t, face: null, faceIndex: null, barycoord: null, object: a });
    }
  }
  var Zi = class extends we {
    constructor(t = [], e = On, n2, i2, r2, a, o3, l2, c3, h3) {
      super(t, e, n2, i2, r2, a, o3, l2, c3, h3), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  };
  var Qn = class extends we {
    constructor(t, e, n2 = mn, i2, r2, a, o3 = Ee, l2 = Ee, c3, h3 = Pn, d4 = 1) {
      if (h3 !== Pn && h3 !== Si) throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      let u3 = { width: t, height: e, depth: d4 };
      super(u3, i2, r2, a, o3, l2, h3, n2, c3), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(t) {
      return super.copy(t), this.source = new Rn(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
    }
  };
  var Po = class extends Qn {
    constructor(t, e = mn, n2 = On, i2, r2, a = Ee, o3 = Ee, l2, c3 = Pn) {
      let h3 = { width: t, height: t, depth: 1 }, d4 = [h3, h3, h3, h3, h3, h3];
      super(t, t, e, n2, i2, r2, a, o3, l2, c3), this.image = d4, this.isCubeDepthTexture = true, this.isCubeTexture = true;
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  };
  var Er = class extends we {
    constructor(t = null) {
      super(), this.sourceTexture = t, this.isExternalTexture = true;
    }
    copy(t) {
      return super.copy(t), this.sourceTexture = t.sourceTexture, this;
    }
  };
  var Ji = class s8 extends Yt {
    constructor(t = 1, e = 1, n2 = 1, i2 = 1, r2 = 1, a = 1) {
      super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n2, widthSegments: i2, heightSegments: r2, depthSegments: a };
      let o3 = this;
      i2 = Math.floor(i2), r2 = Math.floor(r2), a = Math.floor(a);
      let l2 = [], c3 = [], h3 = [], d4 = [], u3 = 0, f3 = 0;
      p2("z", "y", "x", -1, -1, n2, e, t, a, r2, 0), p2("z", "y", "x", 1, -1, n2, e, -t, a, r2, 1), p2("x", "z", "y", 1, 1, t, n2, e, i2, a, 2), p2("x", "z", "y", 1, -1, t, n2, -e, i2, a, 3), p2("x", "y", "z", 1, -1, t, e, n2, i2, r2, 4), p2("x", "y", "z", -1, -1, t, e, -n2, i2, r2, 5), this.setIndex(l2), this.setAttribute("position", new Tt(c3, 3)), this.setAttribute("normal", new Tt(h3, 3)), this.setAttribute("uv", new Tt(d4, 2));
      function p2(_, g, m2, M2, S2, v, E, T2, R2, x3, A3) {
        let I2 = v / R2, P3 = E / x3, N2 = v / 2, H2 = E / 2, X = T2 / 2, O = R2 + 1, W = x3 + 1, G = 0, K2 = 0, it = new C();
        for (let ut = 0; ut < W; ut++) {
          let lt = ut * P3 - H2;
          for (let bt = 0; bt < O; bt++) {
            let Qt = bt * I2 - N2;
            it[_] = Qt * M2, it[g] = lt * S2, it[m2] = X, c3.push(it.x, it.y, it.z), it[_] = 0, it[g] = 0, it[m2] = T2 > 0 ? 1 : -1, h3.push(it.x, it.y, it.z), d4.push(bt / R2), d4.push(1 - ut / x3), G += 1;
          }
        }
        for (let ut = 0; ut < x3; ut++) for (let lt = 0; lt < R2; lt++) {
          let bt = u3 + lt + O * ut, Qt = u3 + lt + O * (ut + 1), de = u3 + (lt + 1) + O * (ut + 1), ne = u3 + (lt + 1) + O * ut;
          l2.push(bt, Qt, ne), l2.push(Qt, de, ne), K2 += 6;
        }
        o3.addGroup(f3, K2, A3), f3 += K2, u3 += G;
      }
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s8(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
    }
  };
  var Lo = class s9 extends Yt {
    constructor(t = 1, e = 1, n2 = 4, i2 = 8, r2 = 1) {
      super(), this.type = "CapsuleGeometry", this.parameters = { radius: t, height: e, capSegments: n2, radialSegments: i2, heightSegments: r2 }, e = Math.max(0, e), n2 = Math.max(1, Math.floor(n2)), i2 = Math.max(3, Math.floor(i2)), r2 = Math.max(1, Math.floor(r2));
      let a = [], o3 = [], l2 = [], c3 = [], h3 = e / 2, d4 = Math.PI / 2 * t, u3 = e, f3 = 2 * d4 + u3, p2 = n2 * 2 + r2, _ = i2 + 1, g = new C(), m2 = new C();
      for (let M2 = 0; M2 <= p2; M2++) {
        let S2 = 0, v = 0, E = 0, T2 = 0;
        if (M2 <= n2) {
          let A3 = M2 / n2, I2 = A3 * Math.PI / 2;
          v = -h3 - t * Math.cos(I2), E = t * Math.sin(I2), T2 = -t * Math.cos(I2), S2 = A3 * d4;
        } else if (M2 <= n2 + r2) {
          let A3 = (M2 - n2) / r2;
          v = -h3 + A3 * e, E = t, T2 = 0, S2 = d4 + A3 * u3;
        } else {
          let A3 = (M2 - n2 - r2) / n2, I2 = A3 * Math.PI / 2;
          v = h3 + t * Math.sin(I2), E = t * Math.cos(I2), T2 = t * Math.sin(I2), S2 = d4 + u3 + A3 * d4;
        }
        let R2 = Math.max(0, Math.min(1, S2 / f3)), x3 = 0;
        M2 === 0 ? x3 = 0.5 / i2 : M2 === p2 && (x3 = -0.5 / i2);
        for (let A3 = 0; A3 <= i2; A3++) {
          let I2 = A3 / i2, P3 = I2 * Math.PI * 2, N2 = Math.sin(P3), H2 = Math.cos(P3);
          m2.x = -E * H2, m2.y = v, m2.z = E * N2, o3.push(m2.x, m2.y, m2.z), g.set(-E * H2, T2, E * N2), g.normalize(), l2.push(g.x, g.y, g.z), c3.push(I2 + x3, R2);
        }
        if (M2 > 0) {
          let A3 = (M2 - 1) * _;
          for (let I2 = 0; I2 < i2; I2++) {
            let P3 = A3 + I2, N2 = A3 + I2 + 1, H2 = M2 * _ + I2, X = M2 * _ + I2 + 1;
            a.push(P3, N2, H2), a.push(N2, X, H2);
          }
        }
      }
      this.setIndex(a), this.setAttribute("position", new Tt(o3, 3)), this.setAttribute("normal", new Tt(l2, 3)), this.setAttribute("uv", new Tt(c3, 2));
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s9(t.radius, t.height, t.capSegments, t.radialSegments, t.heightSegments);
    }
  };
  var Do = class s10 extends Yt {
    constructor(t = 1, e = 32, n2 = 0, i2 = Math.PI * 2) {
      super(), this.type = "CircleGeometry", this.parameters = { radius: t, segments: e, thetaStart: n2, thetaLength: i2 }, e = Math.max(3, e);
      let r2 = [], a = [], o3 = [], l2 = [], c3 = new C(), h3 = new Q();
      a.push(0, 0, 0), o3.push(0, 0, 1), l2.push(0.5, 0.5);
      for (let d4 = 0, u3 = 3; d4 <= e; d4++, u3 += 3) {
        let f3 = n2 + d4 / e * i2;
        c3.x = t * Math.cos(f3), c3.y = t * Math.sin(f3), a.push(c3.x, c3.y, c3.z), o3.push(0, 0, 1), h3.x = (a[u3] / t + 1) / 2, h3.y = (a[u3 + 1] / t + 1) / 2, l2.push(h3.x, h3.y);
      }
      for (let d4 = 1; d4 <= e; d4++) r2.push(d4, d4 + 1, 0);
      this.setIndex(r2), this.setAttribute("position", new Tt(a, 3)), this.setAttribute("normal", new Tt(o3, 3)), this.setAttribute("uv", new Tt(l2, 2));
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s10(t.radius, t.segments, t.thetaStart, t.thetaLength);
    }
  };
  var wr = class s11 extends Yt {
    constructor(t = 1, e = 1, n2 = 1, i2 = 32, r2 = 1, a = false, o3 = 0, l2 = Math.PI * 2) {
      super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: n2, radialSegments: i2, heightSegments: r2, openEnded: a, thetaStart: o3, thetaLength: l2 };
      let c3 = this;
      i2 = Math.floor(i2), r2 = Math.floor(r2);
      let h3 = [], d4 = [], u3 = [], f3 = [], p2 = 0, _ = [], g = n2 / 2, m2 = 0;
      M2(), a === false && (t > 0 && S2(true), e > 0 && S2(false)), this.setIndex(h3), this.setAttribute("position", new Tt(d4, 3)), this.setAttribute("normal", new Tt(u3, 3)), this.setAttribute("uv", new Tt(f3, 2));
      function M2() {
        let v = new C(), E = new C(), T2 = 0, R2 = (e - t) / n2;
        for (let x3 = 0; x3 <= r2; x3++) {
          let A3 = [], I2 = x3 / r2, P3 = I2 * (e - t) + t;
          for (let N2 = 0; N2 <= i2; N2++) {
            let H2 = N2 / i2, X = H2 * l2 + o3, O = Math.sin(X), W = Math.cos(X);
            E.x = P3 * O, E.y = -I2 * n2 + g, E.z = P3 * W, d4.push(E.x, E.y, E.z), v.set(O, R2, W).normalize(), u3.push(v.x, v.y, v.z), f3.push(H2, 1 - I2), A3.push(p2++);
          }
          _.push(A3);
        }
        for (let x3 = 0; x3 < i2; x3++) for (let A3 = 0; A3 < r2; A3++) {
          let I2 = _[A3][x3], P3 = _[A3 + 1][x3], N2 = _[A3 + 1][x3 + 1], H2 = _[A3][x3 + 1];
          (t > 0 || A3 !== 0) && (h3.push(I2, P3, H2), T2 += 3), (e > 0 || A3 !== r2 - 1) && (h3.push(P3, N2, H2), T2 += 3);
        }
        c3.addGroup(m2, T2, 0), m2 += T2;
      }
      function S2(v) {
        let E = p2, T2 = new Q(), R2 = new C(), x3 = 0, A3 = v === true ? t : e, I2 = v === true ? 1 : -1;
        for (let N2 = 1; N2 <= i2; N2++) d4.push(0, g * I2, 0), u3.push(0, I2, 0), f3.push(0.5, 0.5), p2++;
        let P3 = p2;
        for (let N2 = 0; N2 <= i2; N2++) {
          let X = N2 / i2 * l2 + o3, O = Math.cos(X), W = Math.sin(X);
          R2.x = A3 * W, R2.y = g * I2, R2.z = A3 * O, d4.push(R2.x, R2.y, R2.z), u3.push(0, I2, 0), T2.x = O * 0.5 + 0.5, T2.y = W * 0.5 * I2 + 0.5, f3.push(T2.x, T2.y), p2++;
        }
        for (let N2 = 0; N2 < i2; N2++) {
          let H2 = E + N2, X = P3 + N2;
          v === true ? h3.push(X, X + 1, H2) : h3.push(X + 1, X, H2), x3 += 3;
        }
        c3.addGroup(m2, x3, v === true ? 1 : 2), m2 += x3;
      }
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s11(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
    }
  };
  var Cr = class s12 extends wr {
    constructor(t = 1, e = 1, n2 = 32, i2 = 1, r2 = false, a = 0, o3 = Math.PI * 2) {
      super(0, t, e, n2, i2, r2, a, o3), this.type = "ConeGeometry", this.parameters = { radius: t, height: e, radialSegments: n2, heightSegments: i2, openEnded: r2, thetaStart: a, thetaLength: o3 };
    }
    static fromJSON(t) {
      return new s12(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
    }
  };
  var vi = class s13 extends Yt {
    constructor(t = [], e = [], n2 = 1, i2 = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t, indices: e, radius: n2, detail: i2 };
      let r2 = [], a = [];
      o3(i2), c3(n2), h3(), this.setAttribute("position", new Tt(r2, 3)), this.setAttribute("normal", new Tt(r2.slice(), 3)), this.setAttribute("uv", new Tt(a, 2)), i2 === 0 ? this.computeVertexNormals() : this.normalizeNormals();
      function o3(M2) {
        let S2 = new C(), v = new C(), E = new C();
        for (let T2 = 0; T2 < e.length; T2 += 3) f3(e[T2 + 0], S2), f3(e[T2 + 1], v), f3(e[T2 + 2], E), l2(S2, v, E, M2);
      }
      function l2(M2, S2, v, E) {
        let T2 = E + 1, R2 = [];
        for (let x3 = 0; x3 <= T2; x3++) {
          R2[x3] = [];
          let A3 = M2.clone().lerp(v, x3 / T2), I2 = S2.clone().lerp(v, x3 / T2), P3 = T2 - x3;
          for (let N2 = 0; N2 <= P3; N2++) N2 === 0 && x3 === T2 ? R2[x3][N2] = A3 : R2[x3][N2] = A3.clone().lerp(I2, N2 / P3);
        }
        for (let x3 = 0; x3 < T2; x3++) for (let A3 = 0; A3 < 2 * (T2 - x3) - 1; A3++) {
          let I2 = Math.floor(A3 / 2);
          A3 % 2 === 0 ? (u3(R2[x3][I2 + 1]), u3(R2[x3 + 1][I2]), u3(R2[x3][I2])) : (u3(R2[x3][I2 + 1]), u3(R2[x3 + 1][I2 + 1]), u3(R2[x3 + 1][I2]));
        }
      }
      function c3(M2) {
        let S2 = new C();
        for (let v = 0; v < r2.length; v += 3) S2.x = r2[v + 0], S2.y = r2[v + 1], S2.z = r2[v + 2], S2.normalize().multiplyScalar(M2), r2[v + 0] = S2.x, r2[v + 1] = S2.y, r2[v + 2] = S2.z;
      }
      function h3() {
        let M2 = new C();
        for (let S2 = 0; S2 < r2.length; S2 += 3) {
          M2.x = r2[S2 + 0], M2.y = r2[S2 + 1], M2.z = r2[S2 + 2];
          let v = g(M2) / 2 / Math.PI + 0.5, E = m2(M2) / Math.PI + 0.5;
          a.push(v, 1 - E);
        }
        p2(), d4();
      }
      function d4() {
        for (let M2 = 0; M2 < a.length; M2 += 6) {
          let S2 = a[M2 + 0], v = a[M2 + 2], E = a[M2 + 4], T2 = Math.max(S2, v, E), R2 = Math.min(S2, v, E);
          T2 > 0.9 && R2 < 0.1 && (S2 < 0.2 && (a[M2 + 0] += 1), v < 0.2 && (a[M2 + 2] += 1), E < 0.2 && (a[M2 + 4] += 1));
        }
      }
      function u3(M2) {
        r2.push(M2.x, M2.y, M2.z);
      }
      function f3(M2, S2) {
        let v = M2 * 3;
        S2.x = t[v + 0], S2.y = t[v + 1], S2.z = t[v + 2];
      }
      function p2() {
        let M2 = new C(), S2 = new C(), v = new C(), E = new C(), T2 = new Q(), R2 = new Q(), x3 = new Q();
        for (let A3 = 0, I2 = 0; A3 < r2.length; A3 += 9, I2 += 6) {
          M2.set(r2[A3 + 0], r2[A3 + 1], r2[A3 + 2]), S2.set(r2[A3 + 3], r2[A3 + 4], r2[A3 + 5]), v.set(r2[A3 + 6], r2[A3 + 7], r2[A3 + 8]), T2.set(a[I2 + 0], a[I2 + 1]), R2.set(a[I2 + 2], a[I2 + 3]), x3.set(a[I2 + 4], a[I2 + 5]), E.copy(M2).add(S2).add(v).divideScalar(3);
          let P3 = g(E);
          _(T2, I2 + 0, M2, P3), _(R2, I2 + 2, S2, P3), _(x3, I2 + 4, v, P3);
        }
      }
      function _(M2, S2, v, E) {
        E < 0 && M2.x === 1 && (a[S2] = M2.x - 1), v.x === 0 && v.z === 0 && (a[S2] = E / 2 / Math.PI + 0.5);
      }
      function g(M2) {
        return Math.atan2(M2.z, -M2.x);
      }
      function m2(M2) {
        return Math.atan2(-M2.y, Math.sqrt(M2.x * M2.x + M2.z * M2.z));
      }
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s13(t.vertices, t.indices, t.radius, t.detail);
    }
  };
  var No = class s14 extends vi {
    constructor(t = 1, e = 0) {
      let n2 = (1 + Math.sqrt(5)) / 2, i2 = 1 / n2, r2 = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i2, -n2, 0, -i2, n2, 0, i2, -n2, 0, i2, n2, -i2, -n2, 0, -i2, n2, 0, i2, -n2, 0, i2, n2, 0, -n2, 0, -i2, n2, 0, -i2, -n2, 0, i2, n2, 0, i2], a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
      super(r2, a, t, e), this.type = "DodecahedronGeometry", this.parameters = { radius: t, detail: e };
    }
    static fromJSON(t) {
      return new s14(t.radius, t.detail);
    }
  };
  var Ha = new C();
  var Wa = new C();
  var Jc = new C();
  var Xa = new Cn();
  var Uo = class extends Yt {
    constructor(t = null, e = 1) {
      if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t, thresholdAngle: e }, t !== null) {
        let i2 = Math.pow(10, 4), r2 = Math.cos(Gi * e), a = t.getIndex(), o3 = t.getAttribute("position"), l2 = a ? a.count : o3.count, c3 = [0, 0, 0], h3 = ["a", "b", "c"], d4 = new Array(3), u3 = {}, f3 = [];
        for (let p2 = 0; p2 < l2; p2 += 3) {
          a ? (c3[0] = a.getX(p2), c3[1] = a.getX(p2 + 1), c3[2] = a.getX(p2 + 2)) : (c3[0] = p2, c3[1] = p2 + 1, c3[2] = p2 + 2);
          let { a: _, b: g, c: m2 } = Xa;
          if (_.fromBufferAttribute(o3, c3[0]), g.fromBufferAttribute(o3, c3[1]), m2.fromBufferAttribute(o3, c3[2]), Xa.getNormal(Jc), d4[0] = `${Math.round(_.x * i2)},${Math.round(_.y * i2)},${Math.round(_.z * i2)}`, d4[1] = `${Math.round(g.x * i2)},${Math.round(g.y * i2)},${Math.round(g.z * i2)}`, d4[2] = `${Math.round(m2.x * i2)},${Math.round(m2.y * i2)},${Math.round(m2.z * i2)}`, !(d4[0] === d4[1] || d4[1] === d4[2] || d4[2] === d4[0])) for (let M2 = 0; M2 < 3; M2++) {
            let S2 = (M2 + 1) % 3, v = d4[M2], E = d4[S2], T2 = Xa[h3[M2]], R2 = Xa[h3[S2]], x3 = `${v}_${E}`, A3 = `${E}_${v}`;
            A3 in u3 && u3[A3] ? (Jc.dot(u3[A3].normal) <= r2 && (f3.push(T2.x, T2.y, T2.z), f3.push(R2.x, R2.y, R2.z)), u3[A3] = null) : x3 in u3 || (u3[x3] = { index0: c3[M2], index1: c3[S2], normal: Jc.clone() });
          }
        }
        for (let p2 in u3) if (u3[p2]) {
          let { index0: _, index1: g } = u3[p2];
          Ha.fromBufferAttribute(o3, _), Wa.fromBufferAttribute(o3, g), f3.push(Ha.x, Ha.y, Ha.z), f3.push(Wa.x, Wa.y, Wa.z);
        }
        this.setAttribute("position", new Tt(f3, 3));
      }
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
  };
  var un = class {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
    }
    getPoint() {
      ot("Curve: .getPoint() not implemented.");
    }
    getPointAt(t, e) {
      let n2 = this.getUtoTmapping(t);
      return this.getPoint(n2, e);
    }
    getPoints(t = 5) {
      let e = [];
      for (let n2 = 0; n2 <= t; n2++) e.push(this.getPoint(n2 / t));
      return e;
    }
    getSpacedPoints(t = 5) {
      let e = [];
      for (let n2 = 0; n2 <= t; n2++) e.push(this.getPointAt(n2 / t));
      return e;
    }
    getLength() {
      let t = this.getLengths();
      return t[t.length - 1];
    }
    getLengths(t = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = false;
      let e = [], n2, i2 = this.getPoint(0), r2 = 0;
      e.push(0);
      for (let a = 1; a <= t; a++) n2 = this.getPoint(a / t), r2 += n2.distanceTo(i2), e.push(r2), i2 = n2;
      return this.cacheArcLengths = e, e;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(t, e = null) {
      let n2 = this.getLengths(), i2 = 0, r2 = n2.length, a;
      e ? a = e : a = t * n2[r2 - 1];
      let o3 = 0, l2 = r2 - 1, c3;
      for (; o3 <= l2; ) if (i2 = Math.floor(o3 + (l2 - o3) / 2), c3 = n2[i2] - a, c3 < 0) o3 = i2 + 1;
      else if (c3 > 0) l2 = i2 - 1;
      else {
        l2 = i2;
        break;
      }
      if (i2 = l2, n2[i2] === a) return i2 / (r2 - 1);
      let h3 = n2[i2], u3 = n2[i2 + 1] - h3, f3 = (a - h3) / u3;
      return (i2 + f3) / (r2 - 1);
    }
    getTangent(t, e) {
      let i2 = t - 1e-4, r2 = t + 1e-4;
      i2 < 0 && (i2 = 0), r2 > 1 && (r2 = 1);
      let a = this.getPoint(i2), o3 = this.getPoint(r2), l2 = e || (a.isVector2 ? new Q() : new C());
      return l2.copy(o3).sub(a).normalize(), l2;
    }
    getTangentAt(t, e) {
      let n2 = this.getUtoTmapping(t);
      return this.getTangent(n2, e);
    }
    computeFrenetFrames(t, e = false) {
      let n2 = new C(), i2 = [], r2 = [], a = [], o3 = new C(), l2 = new Ht();
      for (let f3 = 0; f3 <= t; f3++) {
        let p2 = f3 / t;
        i2[f3] = this.getTangentAt(p2, new C());
      }
      r2[0] = new C(), a[0] = new C();
      let c3 = Number.MAX_VALUE, h3 = Math.abs(i2[0].x), d4 = Math.abs(i2[0].y), u3 = Math.abs(i2[0].z);
      h3 <= c3 && (c3 = h3, n2.set(1, 0, 0)), d4 <= c3 && (c3 = d4, n2.set(0, 1, 0)), u3 <= c3 && n2.set(0, 0, 1), o3.crossVectors(i2[0], n2).normalize(), r2[0].crossVectors(i2[0], o3), a[0].crossVectors(i2[0], r2[0]);
      for (let f3 = 1; f3 <= t; f3++) {
        if (r2[f3] = r2[f3 - 1].clone(), a[f3] = a[f3 - 1].clone(), o3.crossVectors(i2[f3 - 1], i2[f3]), o3.length() > Number.EPSILON) {
          o3.normalize();
          let p2 = Math.acos(Vt(i2[f3 - 1].dot(i2[f3]), -1, 1));
          r2[f3].applyMatrix4(l2.makeRotationAxis(o3, p2));
        }
        a[f3].crossVectors(i2[f3], r2[f3]);
      }
      if (e === true) {
        let f3 = Math.acos(Vt(r2[0].dot(r2[t]), -1, 1));
        f3 /= t, i2[0].dot(o3.crossVectors(r2[0], r2[t])) > 0 && (f3 = -f3);
        for (let p2 = 1; p2 <= t; p2++) r2[p2].applyMatrix4(l2.makeRotationAxis(i2[p2], f3 * p2)), a[p2].crossVectors(i2[p2], r2[p2]);
      }
      return { tangents: i2, normals: r2, binormals: a };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this;
    }
    toJSON() {
      let t = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
      return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
    }
    fromJSON(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this;
    }
  };
  var Us = class extends un {
    constructor(t = 0, e = 0, n2 = 1, i2 = 1, r2 = 0, a = Math.PI * 2, o3 = false, l2 = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n2, this.yRadius = i2, this.aStartAngle = r2, this.aEndAngle = a, this.aClockwise = o3, this.aRotation = l2;
    }
    getPoint(t, e = new Q()) {
      let n2 = e, i2 = Math.PI * 2, r2 = this.aEndAngle - this.aStartAngle, a = Math.abs(r2) < Number.EPSILON;
      for (; r2 < 0; ) r2 += i2;
      for (; r2 > i2; ) r2 -= i2;
      r2 < Number.EPSILON && (a ? r2 = 0 : r2 = i2), this.aClockwise === true && !a && (r2 === i2 ? r2 = -i2 : r2 = r2 - i2);
      let o3 = this.aStartAngle + t * r2, l2 = this.aX + this.xRadius * Math.cos(o3), c3 = this.aY + this.yRadius * Math.sin(o3);
      if (this.aRotation !== 0) {
        let h3 = Math.cos(this.aRotation), d4 = Math.sin(this.aRotation), u3 = l2 - this.aX, f3 = c3 - this.aY;
        l2 = u3 * h3 - f3 * d4 + this.aX, c3 = u3 * d4 + f3 * h3 + this.aY;
      }
      return n2.set(l2, c3);
    }
    copy(t) {
      return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
    }
    toJSON() {
      let t = super.toJSON();
      return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
    }
  };
  var Fo = class extends Us {
    constructor(t, e, n2, i2, r2, a) {
      super(t, e, n2, n2, i2, r2, a), this.isArcCurve = true, this.type = "ArcCurve";
    }
  };
  function Xu() {
    let s30 = 0, t = 0, e = 0, n2 = 0;
    function i2(r2, a, o3, l2) {
      s30 = r2, t = o3, e = -3 * r2 + 3 * a - 2 * o3 - l2, n2 = 2 * r2 - 2 * a + o3 + l2;
    }
    return { initCatmullRom: function(r2, a, o3, l2, c3) {
      i2(a, o3, c3 * (o3 - r2), c3 * (l2 - a));
    }, initNonuniformCatmullRom: function(r2, a, o3, l2, c3, h3, d4) {
      let u3 = (a - r2) / c3 - (o3 - r2) / (c3 + h3) + (o3 - a) / h3, f3 = (o3 - a) / h3 - (l2 - a) / (h3 + d4) + (l2 - o3) / d4;
      u3 *= h3, f3 *= h3, i2(a, o3, u3, f3);
    }, calc: function(r2) {
      let a = r2 * r2, o3 = a * r2;
      return s30 + t * r2 + e * a + n2 * o3;
    } };
  }
  var jd = new C();
  var tf = new C();
  var $c = new Xu();
  var Kc = new Xu();
  var Qc = new Xu();
  var Oo = class extends un {
    constructor(t = [], e = false, n2 = "centripetal", i2 = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n2, this.tension = i2;
    }
    getPoint(t, e = new C()) {
      let n2 = e, i2 = this.points, r2 = i2.length, a = (r2 - (this.closed ? 0 : 1)) * t, o3 = Math.floor(a), l2 = a - o3;
      this.closed ? o3 += o3 > 0 ? 0 : (Math.floor(Math.abs(o3) / r2) + 1) * r2 : l2 === 0 && o3 === r2 - 1 && (o3 = r2 - 2, l2 = 1);
      let c3, h3;
      this.closed || o3 > 0 ? c3 = i2[(o3 - 1) % r2] : (tf.subVectors(i2[0], i2[1]).add(i2[0]), c3 = tf);
      let d4 = i2[o3 % r2], u3 = i2[(o3 + 1) % r2];
      if (this.closed || o3 + 2 < r2 ? h3 = i2[(o3 + 2) % r2] : (jd.subVectors(i2[r2 - 1], i2[r2 - 2]).add(i2[r2 - 1]), h3 = jd), this.curveType === "centripetal" || this.curveType === "chordal") {
        let f3 = this.curveType === "chordal" ? 0.5 : 0.25, p2 = Math.pow(c3.distanceToSquared(d4), f3), _ = Math.pow(d4.distanceToSquared(u3), f3), g = Math.pow(u3.distanceToSquared(h3), f3);
        _ < 1e-4 && (_ = 1), p2 < 1e-4 && (p2 = _), g < 1e-4 && (g = _), $c.initNonuniformCatmullRom(c3.x, d4.x, u3.x, h3.x, p2, _, g), Kc.initNonuniformCatmullRom(c3.y, d4.y, u3.y, h3.y, p2, _, g), Qc.initNonuniformCatmullRom(c3.z, d4.z, u3.z, h3.z, p2, _, g);
      } else this.curveType === "catmullrom" && ($c.initCatmullRom(c3.x, d4.x, u3.x, h3.x, this.tension), Kc.initCatmullRom(c3.y, d4.y, u3.y, h3.y, this.tension), Qc.initCatmullRom(c3.z, d4.z, u3.z, h3.z, this.tension));
      return n2.set($c.calc(l2), Kc.calc(l2), Qc.calc(l2)), n2;
    }
    copy(t) {
      super.copy(t), this.points = [];
      for (let e = 0, n2 = t.points.length; e < n2; e++) {
        let i2 = t.points[e];
        this.points.push(i2.clone());
      }
      return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
    }
    toJSON() {
      let t = super.toJSON();
      t.points = [];
      for (let e = 0, n2 = this.points.length; e < n2; e++) {
        let i2 = this.points[e];
        t.points.push(i2.toArray());
      }
      return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
    }
    fromJSON(t) {
      super.fromJSON(t), this.points = [];
      for (let e = 0, n2 = t.points.length; e < n2; e++) {
        let i2 = t.points[e];
        this.points.push(new C().fromArray(i2));
      }
      return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
    }
  };
  function ef(s30, t, e, n2, i2) {
    let r2 = (n2 - t) * 0.5, a = (i2 - e) * 0.5, o3 = s30 * s30, l2 = s30 * o3;
    return (2 * e - 2 * n2 + r2 + a) * l2 + (-3 * e + 3 * n2 - 2 * r2 - a) * o3 + r2 * s30 + e;
  }
  function jg(s30, t) {
    let e = 1 - s30;
    return e * e * t;
  }
  function t0(s30, t) {
    return 2 * (1 - s30) * s30 * t;
  }
  function e0(s30, t) {
    return s30 * s30 * t;
  }
  function hr(s30, t, e, n2) {
    return jg(s30, t) + t0(s30, e) + e0(s30, n2);
  }
  function n0(s30, t) {
    let e = 1 - s30;
    return e * e * e * t;
  }
  function i0(s30, t) {
    let e = 1 - s30;
    return 3 * e * e * s30 * t;
  }
  function s0(s30, t) {
    return 3 * (1 - s30) * s30 * s30 * t;
  }
  function r0(s30, t) {
    return s30 * s30 * s30 * t;
  }
  function ur(s30, t, e, n2, i2) {
    return n0(s30, t) + i0(s30, e) + s0(s30, n2) + r0(s30, i2);
  }
  var Rr = class extends un {
    constructor(t = new Q(), e = new Q(), n2 = new Q(), i2 = new Q()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n2, this.v3 = i2;
    }
    getPoint(t, e = new Q()) {
      let n2 = e, i2 = this.v0, r2 = this.v1, a = this.v2, o3 = this.v3;
      return n2.set(ur(t, i2.x, r2.x, a.x, o3.x), ur(t, i2.y, r2.y, a.y, o3.y)), n2;
    }
    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
    }
    toJSON() {
      let t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
    }
  };
  var Bo = class extends un {
    constructor(t = new C(), e = new C(), n2 = new C(), i2 = new C()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n2, this.v3 = i2;
    }
    getPoint(t, e = new C()) {
      let n2 = e, i2 = this.v0, r2 = this.v1, a = this.v2, o3 = this.v3;
      return n2.set(ur(t, i2.x, r2.x, a.x, o3.x), ur(t, i2.y, r2.y, a.y, o3.y), ur(t, i2.z, r2.z, a.z, o3.z)), n2;
    }
    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
    }
    toJSON() {
      let t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
    }
  };
  var Ir = class extends un {
    constructor(t = new Q(), e = new Q()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t, this.v2 = e;
    }
    getPoint(t, e = new Q()) {
      let n2 = e;
      return t === 1 ? n2.copy(this.v2) : (n2.copy(this.v2).sub(this.v1), n2.multiplyScalar(t).add(this.v1)), n2;
    }
    getPointAt(t, e) {
      return this.getPoint(t, e);
    }
    getTangent(t, e = new Q()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t, e) {
      return this.getTangent(t, e);
    }
    copy(t) {
      return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
    }
    toJSON() {
      let t = super.toJSON();
      return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
    }
  };
  var zo = class extends un {
    constructor(t = new C(), e = new C()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
    }
    getPoint(t, e = new C()) {
      let n2 = e;
      return t === 1 ? n2.copy(this.v2) : (n2.copy(this.v2).sub(this.v1), n2.multiplyScalar(t).add(this.v1)), n2;
    }
    getPointAt(t, e) {
      return this.getPoint(t, e);
    }
    getTangent(t, e = new C()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t, e) {
      return this.getTangent(t, e);
    }
    copy(t) {
      return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
    }
    toJSON() {
      let t = super.toJSON();
      return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
    }
  };
  var Pr = class extends un {
    constructor(t = new Q(), e = new Q(), n2 = new Q()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n2;
    }
    getPoint(t, e = new Q()) {
      let n2 = e, i2 = this.v0, r2 = this.v1, a = this.v2;
      return n2.set(hr(t, i2.x, r2.x, a.x), hr(t, i2.y, r2.y, a.y)), n2;
    }
    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
    }
    toJSON() {
      let t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
    }
  };
  var Lr = class extends un {
    constructor(t = new C(), e = new C(), n2 = new C()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n2;
    }
    getPoint(t, e = new C()) {
      let n2 = e, i2 = this.v0, r2 = this.v1, a = this.v2;
      return n2.set(hr(t, i2.x, r2.x, a.x), hr(t, i2.y, r2.y, a.y), hr(t, i2.z, r2.z, a.z)), n2;
    }
    copy(t) {
      return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
    }
    toJSON() {
      let t = super.toJSON();
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
    }
  };
  var Dr = class extends un {
    constructor(t = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t;
    }
    getPoint(t, e = new Q()) {
      let n2 = e, i2 = this.points, r2 = (i2.length - 1) * t, a = Math.floor(r2), o3 = r2 - a, l2 = i2[a === 0 ? a : a - 1], c3 = i2[a], h3 = i2[a > i2.length - 2 ? i2.length - 1 : a + 1], d4 = i2[a > i2.length - 3 ? i2.length - 1 : a + 2];
      return n2.set(ef(o3, l2.x, c3.x, h3.x, d4.x), ef(o3, l2.y, c3.y, h3.y, d4.y)), n2;
    }
    copy(t) {
      super.copy(t), this.points = [];
      for (let e = 0, n2 = t.points.length; e < n2; e++) {
        let i2 = t.points[e];
        this.points.push(i2.clone());
      }
      return this;
    }
    toJSON() {
      let t = super.toJSON();
      t.points = [];
      for (let e = 0, n2 = this.points.length; e < n2; e++) {
        let i2 = this.points[e];
        t.points.push(i2.toArray());
      }
      return t;
    }
    fromJSON(t) {
      super.fromJSON(t), this.points = [];
      for (let e = 0, n2 = t.points.length; e < n2; e++) {
        let i2 = t.points[e];
        this.points.push(new Q().fromArray(i2));
      }
      return this;
    }
  };
  var Vo = Object.freeze({ __proto__: null, ArcCurve: Fo, CatmullRomCurve3: Oo, CubicBezierCurve: Rr, CubicBezierCurve3: Bo, EllipseCurve: Us, LineCurve: Ir, LineCurve3: zo, QuadraticBezierCurve: Pr, QuadraticBezierCurve3: Lr, SplineCurve: Dr });
  var ko = class extends un {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(t) {
      this.curves.push(t);
    }
    closePath() {
      let t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
      if (!t.equals(e)) {
        let n2 = t.isVector2 === true ? "LineCurve" : "LineCurve3";
        this.curves.push(new Vo[n2](e, t));
      }
      return this;
    }
    getPoint(t, e) {
      let n2 = t * this.getLength(), i2 = this.getCurveLengths(), r2 = 0;
      for (; r2 < i2.length; ) {
        if (i2[r2] >= n2) {
          let a = i2[r2] - n2, o3 = this.curves[r2], l2 = o3.getLength(), c3 = l2 === 0 ? 0 : 1 - a / l2;
          return o3.getPointAt(c3, e);
        }
        r2++;
      }
      return null;
    }
    getLength() {
      let t = this.getCurveLengths();
      return t[t.length - 1];
    }
    updateArcLengths() {
      this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      let t = [], e = 0;
      for (let n2 = 0, i2 = this.curves.length; n2 < i2; n2++) e += this.curves[n2].getLength(), t.push(e);
      return this.cacheLengths = t, t;
    }
    getSpacedPoints(t = 40) {
      let e = [];
      for (let n2 = 0; n2 <= t; n2++) e.push(this.getPoint(n2 / t));
      return this.autoClose && e.push(e[0]), e;
    }
    getPoints(t = 12) {
      let e = [], n2;
      for (let i2 = 0, r2 = this.curves; i2 < r2.length; i2++) {
        let a = r2[i2], o3 = a.isEllipseCurve ? t * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? t * a.points.length : t, l2 = a.getPoints(o3);
        for (let c3 = 0; c3 < l2.length; c3++) {
          let h3 = l2[c3];
          n2 && n2.equals(h3) || (e.push(h3), n2 = h3);
        }
      }
      return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
    }
    copy(t) {
      super.copy(t), this.curves = [];
      for (let e = 0, n2 = t.curves.length; e < n2; e++) {
        let i2 = t.curves[e];
        this.curves.push(i2.clone());
      }
      return this.autoClose = t.autoClose, this;
    }
    toJSON() {
      let t = super.toJSON();
      t.autoClose = this.autoClose, t.curves = [];
      for (let e = 0, n2 = this.curves.length; e < n2; e++) {
        let i2 = this.curves[e];
        t.curves.push(i2.toJSON());
      }
      return t;
    }
    fromJSON(t) {
      super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
      for (let e = 0, n2 = t.curves.length; e < n2; e++) {
        let i2 = t.curves[e];
        this.curves.push(new Vo[i2.type]().fromJSON(i2));
      }
      return this;
    }
  };
  var $i = class extends ko {
    constructor(t) {
      super(), this.type = "Path", this.currentPoint = new Q(), t && this.setFromPoints(t);
    }
    setFromPoints(t) {
      this.moveTo(t[0].x, t[0].y);
      for (let e = 1, n2 = t.length; e < n2; e++) this.lineTo(t[e].x, t[e].y);
      return this;
    }
    moveTo(t, e) {
      return this.currentPoint.set(t, e), this;
    }
    lineTo(t, e) {
      let n2 = new Ir(this.currentPoint.clone(), new Q(t, e));
      return this.curves.push(n2), this.currentPoint.set(t, e), this;
    }
    quadraticCurveTo(t, e, n2, i2) {
      let r2 = new Pr(this.currentPoint.clone(), new Q(t, e), new Q(n2, i2));
      return this.curves.push(r2), this.currentPoint.set(n2, i2), this;
    }
    bezierCurveTo(t, e, n2, i2, r2, a) {
      let o3 = new Rr(this.currentPoint.clone(), new Q(t, e), new Q(n2, i2), new Q(r2, a));
      return this.curves.push(o3), this.currentPoint.set(r2, a), this;
    }
    splineThru(t) {
      let e = [this.currentPoint.clone()].concat(t), n2 = new Dr(e);
      return this.curves.push(n2), this.currentPoint.copy(t[t.length - 1]), this;
    }
    arc(t, e, n2, i2, r2, a) {
      let o3 = this.currentPoint.x, l2 = this.currentPoint.y;
      return this.absarc(t + o3, e + l2, n2, i2, r2, a), this;
    }
    absarc(t, e, n2, i2, r2, a) {
      return this.absellipse(t, e, n2, n2, i2, r2, a), this;
    }
    ellipse(t, e, n2, i2, r2, a, o3, l2) {
      let c3 = this.currentPoint.x, h3 = this.currentPoint.y;
      return this.absellipse(t + c3, e + h3, n2, i2, r2, a, o3, l2), this;
    }
    absellipse(t, e, n2, i2, r2, a, o3, l2) {
      let c3 = new Us(t, e, n2, i2, r2, a, o3, l2);
      if (this.curves.length > 0) {
        let d4 = c3.getPoint(0);
        d4.equals(this.currentPoint) || this.lineTo(d4.x, d4.y);
      }
      this.curves.push(c3);
      let h3 = c3.getPoint(1);
      return this.currentPoint.copy(h3), this;
    }
    copy(t) {
      return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
    }
    toJSON() {
      let t = super.toJSON();
      return t.currentPoint = this.currentPoint.toArray(), t;
    }
    fromJSON(t) {
      return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
    }
  };
  var Ki = class extends $i {
    constructor(t) {
      super(t), this.uuid = cn(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(t) {
      let e = [];
      for (let n2 = 0, i2 = this.holes.length; n2 < i2; n2++) e[n2] = this.holes[n2].getPoints(t);
      return e;
    }
    extractPoints(t) {
      return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
    }
    copy(t) {
      super.copy(t), this.holes = [];
      for (let e = 0, n2 = t.holes.length; e < n2; e++) {
        let i2 = t.holes[e];
        this.holes.push(i2.clone());
      }
      return this;
    }
    toJSON() {
      let t = super.toJSON();
      t.uuid = this.uuid, t.holes = [];
      for (let e = 0, n2 = this.holes.length; e < n2; e++) {
        let i2 = this.holes[e];
        t.holes.push(i2.toJSON());
      }
      return t;
    }
    fromJSON(t) {
      super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
      for (let e = 0, n2 = t.holes.length; e < n2; e++) {
        let i2 = t.holes[e];
        this.holes.push(new $i().fromJSON(i2));
      }
      return this;
    }
  };
  function a0(s30, t, e = 2) {
    let n2 = t && t.length, i2 = n2 ? t[0] * e : s30.length, r2 = vp(s30, 0, i2, e, true), a = [];
    if (!r2 || r2.next === r2.prev) return a;
    let o3, l2, c3;
    if (n2 && (r2 = u0(s30, t, r2, e)), s30.length > 80 * e) {
      o3 = s30[0], l2 = s30[1];
      let h3 = o3, d4 = l2;
      for (let u3 = e; u3 < i2; u3 += e) {
        let f3 = s30[u3], p2 = s30[u3 + 1];
        f3 < o3 && (o3 = f3), p2 < l2 && (l2 = p2), f3 > h3 && (h3 = f3), p2 > d4 && (d4 = p2);
      }
      c3 = Math.max(h3 - o3, d4 - l2), c3 = c3 !== 0 ? 32767 / c3 : 0;
    }
    return Nr(r2, a, e, o3, l2, c3, 0), a;
  }
  function vp(s30, t, e, n2, i2) {
    let r2;
    if (i2 === S0(s30, t, e, n2) > 0) for (let a = t; a < e; a += n2) r2 = nf(a / n2 | 0, s30[a], s30[a + 1], r2);
    else for (let a = e - n2; a >= t; a -= n2) r2 = nf(a / n2 | 0, s30[a], s30[a + 1], r2);
    return r2 && Fs(r2, r2.next) && (Fr(r2), r2 = r2.next), r2;
  }
  function Qi(s30, t) {
    if (!s30) return s30;
    t || (t = s30);
    let e = s30, n2;
    do
      if (n2 = false, !e.steiner && (Fs(e, e.next) || xe(e.prev, e, e.next) === 0)) {
        if (Fr(e), e = t = e.prev, e === e.next) break;
        n2 = true;
      } else e = e.next;
    while (n2 || e !== t);
    return t;
  }
  function Nr(s30, t, e, n2, i2, r2, a) {
    if (!s30) return;
    !a && r2 && g0(s30, n2, i2, r2);
    let o3 = s30;
    for (; s30.prev !== s30.next; ) {
      let l2 = s30.prev, c3 = s30.next;
      if (r2 ? l0(s30, n2, i2, r2) : o0(s30)) {
        t.push(l2.i, s30.i, c3.i), Fr(s30), s30 = c3.next, o3 = c3.next;
        continue;
      }
      if (s30 = c3, s30 === o3) {
        a ? a === 1 ? (s30 = c0(Qi(s30), t), Nr(s30, t, e, n2, i2, r2, 2)) : a === 2 && h0(s30, t, e, n2, i2, r2) : Nr(Qi(s30), t, e, n2, i2, r2, 1);
        break;
      }
    }
  }
  function o0(s30) {
    let t = s30.prev, e = s30, n2 = s30.next;
    if (xe(t, e, n2) >= 0) return false;
    let i2 = t.x, r2 = e.x, a = n2.x, o3 = t.y, l2 = e.y, c3 = n2.y, h3 = Math.min(i2, r2, a), d4 = Math.min(o3, l2, c3), u3 = Math.max(i2, r2, a), f3 = Math.max(o3, l2, c3), p2 = n2.next;
    for (; p2 !== t; ) {
      if (p2.x >= h3 && p2.x <= u3 && p2.y >= d4 && p2.y <= f3 && lr(i2, o3, r2, l2, a, c3, p2.x, p2.y) && xe(p2.prev, p2, p2.next) >= 0) return false;
      p2 = p2.next;
    }
    return true;
  }
  function l0(s30, t, e, n2) {
    let i2 = s30.prev, r2 = s30, a = s30.next;
    if (xe(i2, r2, a) >= 0) return false;
    let o3 = i2.x, l2 = r2.x, c3 = a.x, h3 = i2.y, d4 = r2.y, u3 = a.y, f3 = Math.min(o3, l2, c3), p2 = Math.min(h3, d4, u3), _ = Math.max(o3, l2, c3), g = Math.max(h3, d4, u3), m2 = Eh(f3, p2, t, e, n2), M2 = Eh(_, g, t, e, n2), S2 = s30.prevZ, v = s30.nextZ;
    for (; S2 && S2.z >= m2 && v && v.z <= M2; ) {
      if (S2.x >= f3 && S2.x <= _ && S2.y >= p2 && S2.y <= g && S2 !== i2 && S2 !== a && lr(o3, h3, l2, d4, c3, u3, S2.x, S2.y) && xe(S2.prev, S2, S2.next) >= 0 || (S2 = S2.prevZ, v.x >= f3 && v.x <= _ && v.y >= p2 && v.y <= g && v !== i2 && v !== a && lr(o3, h3, l2, d4, c3, u3, v.x, v.y) && xe(v.prev, v, v.next) >= 0)) return false;
      v = v.nextZ;
    }
    for (; S2 && S2.z >= m2; ) {
      if (S2.x >= f3 && S2.x <= _ && S2.y >= p2 && S2.y <= g && S2 !== i2 && S2 !== a && lr(o3, h3, l2, d4, c3, u3, S2.x, S2.y) && xe(S2.prev, S2, S2.next) >= 0) return false;
      S2 = S2.prevZ;
    }
    for (; v && v.z <= M2; ) {
      if (v.x >= f3 && v.x <= _ && v.y >= p2 && v.y <= g && v !== i2 && v !== a && lr(o3, h3, l2, d4, c3, u3, v.x, v.y) && xe(v.prev, v, v.next) >= 0) return false;
      v = v.nextZ;
    }
    return true;
  }
  function c0(s30, t) {
    let e = s30;
    do {
      let n2 = e.prev, i2 = e.next.next;
      !Fs(n2, i2) && Mp(n2, e, e.next, i2) && Ur(n2, i2) && Ur(i2, n2) && (t.push(n2.i, e.i, i2.i), Fr(e), Fr(e.next), e = s30 = i2), e = e.next;
    } while (e !== s30);
    return Qi(e);
  }
  function h0(s30, t, e, n2, i2, r2) {
    let a = s30;
    do {
      let o3 = a.next.next;
      for (; o3 !== a.prev; ) {
        if (a.i !== o3.i && v0(a, o3)) {
          let l2 = Sp(a, o3);
          a = Qi(a, a.next), l2 = Qi(l2, l2.next), Nr(a, t, e, n2, i2, r2, 0), Nr(l2, t, e, n2, i2, r2, 0);
          return;
        }
        o3 = o3.next;
      }
      a = a.next;
    } while (a !== s30);
  }
  function u0(s30, t, e, n2) {
    let i2 = [];
    for (let r2 = 0, a = t.length; r2 < a; r2++) {
      let o3 = t[r2] * n2, l2 = r2 < a - 1 ? t[r2 + 1] * n2 : s30.length, c3 = vp(s30, o3, l2, n2, false);
      c3 === c3.next && (c3.steiner = true), i2.push(x0(c3));
    }
    i2.sort(d0);
    for (let r2 = 0; r2 < i2.length; r2++) e = f0(i2[r2], e);
    return e;
  }
  function d0(s30, t) {
    let e = s30.x - t.x;
    if (e === 0 && (e = s30.y - t.y, e === 0)) {
      let n2 = (s30.next.y - s30.y) / (s30.next.x - s30.x), i2 = (t.next.y - t.y) / (t.next.x - t.x);
      e = n2 - i2;
    }
    return e;
  }
  function f0(s30, t) {
    let e = p0(s30, t);
    if (!e) return t;
    let n2 = Sp(e, s30);
    return Qi(n2, n2.next), Qi(e, e.next);
  }
  function p0(s30, t) {
    let e = t, n2 = s30.x, i2 = s30.y, r2 = -1 / 0, a;
    if (Fs(s30, e)) return e;
    do {
      if (Fs(s30, e.next)) return e.next;
      if (i2 <= e.y && i2 >= e.next.y && e.next.y !== e.y) {
        let d4 = e.x + (i2 - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
        if (d4 <= n2 && d4 > r2 && (r2 = d4, a = e.x < e.next.x ? e : e.next, d4 === n2)) return a;
      }
      e = e.next;
    } while (e !== t);
    if (!a) return null;
    let o3 = a, l2 = a.x, c3 = a.y, h3 = 1 / 0;
    e = a;
    do {
      if (n2 >= e.x && e.x >= l2 && n2 !== e.x && yp(i2 < c3 ? n2 : r2, i2, l2, c3, i2 < c3 ? r2 : n2, i2, e.x, e.y)) {
        let d4 = Math.abs(i2 - e.y) / (n2 - e.x);
        Ur(e, s30) && (d4 < h3 || d4 === h3 && (e.x > a.x || e.x === a.x && m0(a, e))) && (a = e, h3 = d4);
      }
      e = e.next;
    } while (e !== o3);
    return a;
  }
  function m0(s30, t) {
    return xe(s30.prev, s30, t.prev) < 0 && xe(t.next, s30, s30.next) < 0;
  }
  function g0(s30, t, e, n2) {
    let i2 = s30;
    do
      i2.z === 0 && (i2.z = Eh(i2.x, i2.y, t, e, n2)), i2.prevZ = i2.prev, i2.nextZ = i2.next, i2 = i2.next;
    while (i2 !== s30);
    i2.prevZ.nextZ = null, i2.prevZ = null, _0(i2);
  }
  function _0(s30) {
    let t, e = 1;
    do {
      let n2 = s30, i2;
      s30 = null;
      let r2 = null;
      for (t = 0; n2; ) {
        t++;
        let a = n2, o3 = 0;
        for (let c3 = 0; c3 < e && (o3++, a = a.nextZ, !!a); c3++) ;
        let l2 = e;
        for (; o3 > 0 || l2 > 0 && a; ) o3 !== 0 && (l2 === 0 || !a || n2.z <= a.z) ? (i2 = n2, n2 = n2.nextZ, o3--) : (i2 = a, a = a.nextZ, l2--), r2 ? r2.nextZ = i2 : s30 = i2, i2.prevZ = r2, r2 = i2;
        n2 = a;
      }
      r2.nextZ = null, e *= 2;
    } while (t > 1);
    return s30;
  }
  function Eh(s30, t, e, n2, i2) {
    return s30 = (s30 - e) * i2 | 0, t = (t - n2) * i2 | 0, s30 = (s30 | s30 << 8) & 16711935, s30 = (s30 | s30 << 4) & 252645135, s30 = (s30 | s30 << 2) & 858993459, s30 = (s30 | s30 << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, s30 | t << 1;
  }
  function x0(s30) {
    let t = s30, e = s30;
    do
      (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
    while (t !== s30);
    return e;
  }
  function yp(s30, t, e, n2, i2, r2, a, o3) {
    return (i2 - a) * (t - o3) >= (s30 - a) * (r2 - o3) && (s30 - a) * (n2 - o3) >= (e - a) * (t - o3) && (e - a) * (r2 - o3) >= (i2 - a) * (n2 - o3);
  }
  function lr(s30, t, e, n2, i2, r2, a, o3) {
    return !(s30 === a && t === o3) && yp(s30, t, e, n2, i2, r2, a, o3);
  }
  function v0(s30, t) {
    return s30.next.i !== t.i && s30.prev.i !== t.i && !y0(s30, t) && (Ur(s30, t) && Ur(t, s30) && M0(s30, t) && (xe(s30.prev, s30, t.prev) || xe(s30, t.prev, t)) || Fs(s30, t) && xe(s30.prev, s30, s30.next) > 0 && xe(t.prev, t, t.next) > 0);
  }
  function xe(s30, t, e) {
    return (t.y - s30.y) * (e.x - t.x) - (t.x - s30.x) * (e.y - t.y);
  }
  function Fs(s30, t) {
    return s30.x === t.x && s30.y === t.y;
  }
  function Mp(s30, t, e, n2) {
    let i2 = Ya(xe(s30, t, e)), r2 = Ya(xe(s30, t, n2)), a = Ya(xe(e, n2, s30)), o3 = Ya(xe(e, n2, t));
    return !!(i2 !== r2 && a !== o3 || i2 === 0 && qa(s30, e, t) || r2 === 0 && qa(s30, n2, t) || a === 0 && qa(e, s30, n2) || o3 === 0 && qa(e, t, n2));
  }
  function qa(s30, t, e) {
    return t.x <= Math.max(s30.x, e.x) && t.x >= Math.min(s30.x, e.x) && t.y <= Math.max(s30.y, e.y) && t.y >= Math.min(s30.y, e.y);
  }
  function Ya(s30) {
    return s30 > 0 ? 1 : s30 < 0 ? -1 : 0;
  }
  function y0(s30, t) {
    let e = s30;
    do {
      if (e.i !== s30.i && e.next.i !== s30.i && e.i !== t.i && e.next.i !== t.i && Mp(e, e.next, s30, t)) return true;
      e = e.next;
    } while (e !== s30);
    return false;
  }
  function Ur(s30, t) {
    return xe(s30.prev, s30, s30.next) < 0 ? xe(s30, t, s30.next) >= 0 && xe(s30, s30.prev, t) >= 0 : xe(s30, t, s30.prev) < 0 || xe(s30, s30.next, t) < 0;
  }
  function M0(s30, t) {
    let e = s30, n2 = false, i2 = (s30.x + t.x) / 2, r2 = (s30.y + t.y) / 2;
    do
      e.y > r2 != e.next.y > r2 && e.next.y !== e.y && i2 < (e.next.x - e.x) * (r2 - e.y) / (e.next.y - e.y) + e.x && (n2 = !n2), e = e.next;
    while (e !== s30);
    return n2;
  }
  function Sp(s30, t) {
    let e = wh(s30.i, s30.x, s30.y), n2 = wh(t.i, t.x, t.y), i2 = s30.next, r2 = t.prev;
    return s30.next = t, t.prev = s30, e.next = i2, i2.prev = e, n2.next = e, e.prev = n2, r2.next = n2, n2.prev = r2, n2;
  }
  function nf(s30, t, e, n2) {
    let i2 = wh(s30, t, e);
    return n2 ? (i2.next = n2.next, i2.prev = n2, n2.next.prev = i2, n2.next = i2) : (i2.prev = i2, i2.next = i2), i2;
  }
  function Fr(s30) {
    s30.next.prev = s30.prev, s30.prev.next = s30.next, s30.prevZ && (s30.prevZ.nextZ = s30.nextZ), s30.nextZ && (s30.nextZ.prevZ = s30.prevZ);
  }
  function wh(s30, t, e) {
    return { i: s30, x: t, y: e, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
  }
  function S0(s30, t, e, n2) {
    let i2 = 0;
    for (let r2 = t, a = e - n2; r2 < e; r2 += n2) i2 += (s30[a] - s30[r2]) * (s30[r2 + 1] + s30[a + 1]), a = r2;
    return i2;
  }
  var Ch = class {
    static triangulate(t, e, n2 = 2) {
      return a0(t, e, n2);
    }
  };
  var vn = class s15 {
    static area(t) {
      let e = t.length, n2 = 0;
      for (let i2 = e - 1, r2 = 0; r2 < e; i2 = r2++) n2 += t[i2].x * t[r2].y - t[r2].x * t[i2].y;
      return n2 * 0.5;
    }
    static isClockWise(t) {
      return s15.area(t) < 0;
    }
    static triangulateShape(t, e) {
      let n2 = [], i2 = [], r2 = [];
      sf(t), rf(n2, t);
      let a = t.length;
      e.forEach(sf);
      for (let l2 = 0; l2 < e.length; l2++) i2.push(a), a += e[l2].length, rf(n2, e[l2]);
      let o3 = Ch.triangulate(n2, i2);
      for (let l2 = 0; l2 < o3.length; l2 += 3) r2.push(o3.slice(l2, l2 + 3));
      return r2;
    }
  };
  function sf(s30) {
    let t = s30.length;
    t > 2 && s30[t - 1].equals(s30[0]) && s30.pop();
  }
  function rf(s30, t) {
    for (let e = 0; e < t.length; e++) s30.push(t[e].x), s30.push(t[e].y);
  }
  var Go = class s16 extends Yt {
    constructor(t = new Ki([new Q(0.5, 0.5), new Q(-0.5, 0.5), new Q(-0.5, -0.5), new Q(0.5, -0.5)]), e = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t];
      let n2 = this, i2 = [], r2 = [];
      for (let o3 = 0, l2 = t.length; o3 < l2; o3++) {
        let c3 = t[o3];
        a(c3);
      }
      this.setAttribute("position", new Tt(i2, 3)), this.setAttribute("uv", new Tt(r2, 2)), this.computeVertexNormals();
      function a(o3) {
        let l2 = [], c3 = e.curveSegments !== void 0 ? e.curveSegments : 12, h3 = e.steps !== void 0 ? e.steps : 1, d4 = e.depth !== void 0 ? e.depth : 1, u3 = e.bevelEnabled !== void 0 ? e.bevelEnabled : true, f3 = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, p2 = e.bevelSize !== void 0 ? e.bevelSize : f3 - 0.1, _ = e.bevelOffset !== void 0 ? e.bevelOffset : 0, g = e.bevelSegments !== void 0 ? e.bevelSegments : 3, m2 = e.extrudePath, M2 = e.UVGenerator !== void 0 ? e.UVGenerator : b0, S2, v = false, E, T2, R2, x3;
        if (m2) {
          S2 = m2.getSpacedPoints(h3), v = true, u3 = false;
          let j2 = m2.isCatmullRomCurve3 ? m2.closed : false;
          E = m2.computeFrenetFrames(h3, j2), T2 = new C(), R2 = new C(), x3 = new C();
        }
        u3 || (g = 0, f3 = 0, p2 = 0, _ = 0);
        let A3 = o3.extractPoints(c3), I2 = A3.shape, P3 = A3.holes;
        if (!vn.isClockWise(I2)) {
          I2 = I2.reverse();
          for (let j2 = 0, nt = P3.length; j2 < nt; j2++) {
            let et = P3[j2];
            vn.isClockWise(et) && (P3[j2] = et.reverse());
          }
        }
        function H2(j2) {
          let et = 10000000000000001e-36, xt = j2[0];
          for (let mt = 1; mt <= j2.length; mt++) {
            let Bt = mt % j2.length, Pt = j2[Bt], Gt = Pt.x - xt.x, qt = Pt.y - xt.y, L = Gt * Gt + qt * qt, he = Math.max(Math.abs(Pt.x), Math.abs(Pt.y), Math.abs(xt.x), Math.abs(xt.y)), te = et * he * he;
            if (L <= te) {
              j2.splice(Bt, 1), mt--;
              continue;
            }
            xt = Pt;
          }
        }
        H2(I2), P3.forEach(H2);
        let X = P3.length, O = I2;
        for (let j2 = 0; j2 < X; j2++) {
          let nt = P3[j2];
          I2 = I2.concat(nt);
        }
        function W(j2, nt, et) {
          return nt || Rt("ExtrudeGeometry: vec does not exist"), j2.clone().addScaledVector(nt, et);
        }
        let G = I2.length;
        function K2(j2, nt, et) {
          let xt, mt, Bt, Pt = j2.x - nt.x, Gt = j2.y - nt.y, qt = et.x - j2.x, L = et.y - j2.y, he = Pt * Pt + Gt * Gt, te = Pt * L - Gt * qt;
          if (Math.abs(te) > Number.EPSILON) {
            let w2 = Math.sqrt(he), y2 = Math.sqrt(qt * qt + L * L), F2 = nt.x - Gt / w2, V = nt.y + Pt / w2, q = et.x - L / y2, rt = et.y + qt / y2, at = ((q - F2) * L - (rt - V) * qt) / (Pt * L - Gt * qt);
            xt = F2 + Pt * at - j2.x, mt = V + Gt * at - j2.y;
            let Y2 = xt * xt + mt * mt;
            if (Y2 <= 2) return new Q(xt, mt);
            Bt = Math.sqrt(Y2 / 2);
          } else {
            let w2 = false;
            Pt > Number.EPSILON ? qt > Number.EPSILON && (w2 = true) : Pt < -Number.EPSILON ? qt < -Number.EPSILON && (w2 = true) : Math.sign(Gt) === Math.sign(L) && (w2 = true), w2 ? (xt = -Gt, mt = Pt, Bt = Math.sqrt(he)) : (xt = Pt, mt = Gt, Bt = Math.sqrt(he / 2));
          }
          return new Q(xt / Bt, mt / Bt);
        }
        let it = [];
        for (let j2 = 0, nt = O.length, et = nt - 1, xt = j2 + 1; j2 < nt; j2++, et++, xt++) et === nt && (et = 0), xt === nt && (xt = 0), it[j2] = K2(O[j2], O[et], O[xt]);
        let ut = [], lt, bt = it.concat();
        for (let j2 = 0, nt = X; j2 < nt; j2++) {
          let et = P3[j2];
          lt = [];
          for (let xt = 0, mt = et.length, Bt = mt - 1, Pt = xt + 1; xt < mt; xt++, Bt++, Pt++) Bt === mt && (Bt = 0), Pt === mt && (Pt = 0), lt[xt] = K2(et[xt], et[Bt], et[Pt]);
          ut.push(lt), bt = bt.concat(lt);
        }
        let Qt;
        if (g === 0) Qt = vn.triangulateShape(O, P3);
        else {
          let j2 = [], nt = [];
          for (let et = 0; et < g; et++) {
            let xt = et / g, mt = f3 * Math.cos(xt * Math.PI / 2), Bt = p2 * Math.sin(xt * Math.PI / 2) + _;
            for (let Pt = 0, Gt = O.length; Pt < Gt; Pt++) {
              let qt = W(O[Pt], it[Pt], Bt);
              Nt(qt.x, qt.y, -mt), xt === 0 && j2.push(qt);
            }
            for (let Pt = 0, Gt = X; Pt < Gt; Pt++) {
              let qt = P3[Pt];
              lt = ut[Pt];
              let L = [];
              for (let he = 0, te = qt.length; he < te; he++) {
                let w2 = W(qt[he], lt[he], Bt);
                Nt(w2.x, w2.y, -mt), xt === 0 && L.push(w2);
              }
              xt === 0 && nt.push(L);
            }
          }
          Qt = vn.triangulateShape(j2, nt);
        }
        let de = Qt.length, ne = p2 + _;
        for (let j2 = 0; j2 < G; j2++) {
          let nt = u3 ? W(I2[j2], bt[j2], ne) : I2[j2];
          v ? (R2.copy(E.normals[0]).multiplyScalar(nt.x), T2.copy(E.binormals[0]).multiplyScalar(nt.y), x3.copy(S2[0]).add(R2).add(T2), Nt(x3.x, x3.y, x3.z)) : Nt(nt.x, nt.y, 0);
        }
        for (let j2 = 1; j2 <= h3; j2++) for (let nt = 0; nt < G; nt++) {
          let et = u3 ? W(I2[nt], bt[nt], ne) : I2[nt];
          v ? (R2.copy(E.normals[j2]).multiplyScalar(et.x), T2.copy(E.binormals[j2]).multiplyScalar(et.y), x3.copy(S2[j2]).add(R2).add(T2), Nt(x3.x, x3.y, x3.z)) : Nt(et.x, et.y, d4 / h3 * j2);
        }
        for (let j2 = g - 1; j2 >= 0; j2--) {
          let nt = j2 / g, et = f3 * Math.cos(nt * Math.PI / 2), xt = p2 * Math.sin(nt * Math.PI / 2) + _;
          for (let mt = 0, Bt = O.length; mt < Bt; mt++) {
            let Pt = W(O[mt], it[mt], xt);
            Nt(Pt.x, Pt.y, d4 + et);
          }
          for (let mt = 0, Bt = P3.length; mt < Bt; mt++) {
            let Pt = P3[mt];
            lt = ut[mt];
            for (let Gt = 0, qt = Pt.length; Gt < qt; Gt++) {
              let L = W(Pt[Gt], lt[Gt], xt);
              v ? Nt(L.x, L.y + S2[h3 - 1].y, S2[h3 - 1].x + et) : Nt(L.x, L.y, d4 + et);
            }
          }
        }
        J(), ct();
        function J() {
          let j2 = i2.length / 3;
          if (u3) {
            let nt = 0, et = G * nt;
            for (let xt = 0; xt < de; xt++) {
              let mt = Qt[xt];
              kt(mt[2] + et, mt[1] + et, mt[0] + et);
            }
            nt = h3 + g * 2, et = G * nt;
            for (let xt = 0; xt < de; xt++) {
              let mt = Qt[xt];
              kt(mt[0] + et, mt[1] + et, mt[2] + et);
            }
          } else {
            for (let nt = 0; nt < de; nt++) {
              let et = Qt[nt];
              kt(et[2], et[1], et[0]);
            }
            for (let nt = 0; nt < de; nt++) {
              let et = Qt[nt];
              kt(et[0] + G * h3, et[1] + G * h3, et[2] + G * h3);
            }
          }
          n2.addGroup(j2, i2.length / 3 - j2, 0);
        }
        function ct() {
          let j2 = i2.length / 3, nt = 0;
          st(O, nt), nt += O.length;
          for (let et = 0, xt = P3.length; et < xt; et++) {
            let mt = P3[et];
            st(mt, nt), nt += mt.length;
          }
          n2.addGroup(j2, i2.length / 3 - j2, 1);
        }
        function st(j2, nt) {
          let et = j2.length;
          for (; --et >= 0; ) {
            let xt = et, mt = et - 1;
            mt < 0 && (mt = j2.length - 1);
            for (let Bt = 0, Pt = h3 + g * 2; Bt < Pt; Bt++) {
              let Gt = G * Bt, qt = G * (Bt + 1), L = nt + xt + Gt, he = nt + mt + Gt, te = nt + mt + qt, w2 = nt + xt + qt;
              Ot(L, he, te, w2);
            }
          }
        }
        function Nt(j2, nt, et) {
          l2.push(j2), l2.push(nt), l2.push(et);
        }
        function kt(j2, nt, et) {
          se(j2), se(nt), se(et);
          let xt = i2.length / 3, mt = M2.generateTopUV(n2, i2, xt - 3, xt - 2, xt - 1);
          Wt(mt[0]), Wt(mt[1]), Wt(mt[2]);
        }
        function Ot(j2, nt, et, xt) {
          se(j2), se(nt), se(xt), se(nt), se(et), se(xt);
          let mt = i2.length / 3, Bt = M2.generateSideWallUV(n2, i2, mt - 6, mt - 3, mt - 2, mt - 1);
          Wt(Bt[0]), Wt(Bt[1]), Wt(Bt[3]), Wt(Bt[1]), Wt(Bt[2]), Wt(Bt[3]);
        }
        function se(j2) {
          i2.push(l2[j2 * 3 + 0]), i2.push(l2[j2 * 3 + 1]), i2.push(l2[j2 * 3 + 2]);
        }
        function Wt(j2) {
          r2.push(j2.x), r2.push(j2.y);
        }
      }
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    toJSON() {
      let t = super.toJSON(), e = this.parameters.shapes, n2 = this.parameters.options;
      return T0(e, n2, t);
    }
    static fromJSON(t, e) {
      let n2 = [];
      for (let r2 = 0, a = t.shapes.length; r2 < a; r2++) {
        let o3 = e[t.shapes[r2]];
        n2.push(o3);
      }
      let i2 = t.options.extrudePath;
      return i2 !== void 0 && (t.options.extrudePath = new Vo[i2.type]().fromJSON(i2)), new s16(n2, t.options);
    }
  };
  var b0 = { generateTopUV: function(s30, t, e, n2, i2) {
    let r2 = t[e * 3], a = t[e * 3 + 1], o3 = t[n2 * 3], l2 = t[n2 * 3 + 1], c3 = t[i2 * 3], h3 = t[i2 * 3 + 1];
    return [new Q(r2, a), new Q(o3, l2), new Q(c3, h3)];
  }, generateSideWallUV: function(s30, t, e, n2, i2, r2) {
    let a = t[e * 3], o3 = t[e * 3 + 1], l2 = t[e * 3 + 2], c3 = t[n2 * 3], h3 = t[n2 * 3 + 1], d4 = t[n2 * 3 + 2], u3 = t[i2 * 3], f3 = t[i2 * 3 + 1], p2 = t[i2 * 3 + 2], _ = t[r2 * 3], g = t[r2 * 3 + 1], m2 = t[r2 * 3 + 2];
    return Math.abs(o3 - h3) < Math.abs(a - c3) ? [new Q(a, 1 - l2), new Q(c3, 1 - d4), new Q(u3, 1 - p2), new Q(_, 1 - m2)] : [new Q(o3, 1 - l2), new Q(h3, 1 - d4), new Q(f3, 1 - p2), new Q(g, 1 - m2)];
  } };
  function T0(s30, t, e) {
    if (e.shapes = [], Array.isArray(s30)) for (let n2 = 0, i2 = s30.length; n2 < i2; n2++) {
      let r2 = s30[n2];
      e.shapes.push(r2.uuid);
    }
    else e.shapes.push(s30.uuid);
    return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
  }
  var Ho = class s17 extends vi {
    constructor(t = 1, e = 0) {
      let n2 = (1 + Math.sqrt(5)) / 2, i2 = [-1, n2, 0, 1, n2, 0, -1, -n2, 0, 1, -n2, 0, 0, -1, n2, 0, 1, n2, 0, -1, -n2, 0, 1, -n2, n2, 0, -1, n2, 0, 1, -n2, 0, -1, -n2, 0, 1], r2 = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
      super(i2, r2, t, e), this.type = "IcosahedronGeometry", this.parameters = { radius: t, detail: e };
    }
    static fromJSON(t) {
      return new s17(t.radius, t.detail);
    }
  };
  var Wo = class s18 extends Yt {
    constructor(t = [new Q(0, -0.5), new Q(0.5, 0), new Q(0, 0.5)], e = 12, n2 = 0, i2 = Math.PI * 2) {
      super(), this.type = "LatheGeometry", this.parameters = { points: t, segments: e, phiStart: n2, phiLength: i2 }, e = Math.floor(e), i2 = Vt(i2, 0, Math.PI * 2);
      let r2 = [], a = [], o3 = [], l2 = [], c3 = [], h3 = 1 / e, d4 = new C(), u3 = new Q(), f3 = new C(), p2 = new C(), _ = new C(), g = 0, m2 = 0;
      for (let M2 = 0; M2 <= t.length - 1; M2++) switch (M2) {
        case 0:
          g = t[M2 + 1].x - t[M2].x, m2 = t[M2 + 1].y - t[M2].y, f3.x = m2 * 1, f3.y = -g, f3.z = m2 * 0, _.copy(f3), f3.normalize(), l2.push(f3.x, f3.y, f3.z);
          break;
        case t.length - 1:
          l2.push(_.x, _.y, _.z);
          break;
        default:
          g = t[M2 + 1].x - t[M2].x, m2 = t[M2 + 1].y - t[M2].y, f3.x = m2 * 1, f3.y = -g, f3.z = m2 * 0, p2.copy(f3), f3.x += _.x, f3.y += _.y, f3.z += _.z, f3.normalize(), l2.push(f3.x, f3.y, f3.z), _.copy(p2);
      }
      for (let M2 = 0; M2 <= e; M2++) {
        let S2 = n2 + M2 * h3 * i2, v = Math.sin(S2), E = Math.cos(S2);
        for (let T2 = 0; T2 <= t.length - 1; T2++) {
          d4.x = t[T2].x * v, d4.y = t[T2].y, d4.z = t[T2].x * E, a.push(d4.x, d4.y, d4.z), u3.x = M2 / e, u3.y = T2 / (t.length - 1), o3.push(u3.x, u3.y);
          let R2 = l2[3 * T2 + 0] * v, x3 = l2[3 * T2 + 1], A3 = l2[3 * T2 + 0] * E;
          c3.push(R2, x3, A3);
        }
      }
      for (let M2 = 0; M2 < e; M2++) for (let S2 = 0; S2 < t.length - 1; S2++) {
        let v = S2 + M2 * t.length, E = v, T2 = v + t.length, R2 = v + t.length + 1, x3 = v + 1;
        r2.push(E, T2, x3), r2.push(R2, x3, T2);
      }
      this.setIndex(r2), this.setAttribute("position", new Tt(a, 3)), this.setAttribute("uv", new Tt(o3, 2)), this.setAttribute("normal", new Tt(c3, 3));
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s18(t.points, t.segments, t.phiStart, t.phiLength);
    }
  };
  var Or = class s19 extends vi {
    constructor(t = 1, e = 0) {
      let n2 = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], i2 = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
      super(n2, i2, t, e), this.type = "OctahedronGeometry", this.parameters = { radius: t, detail: e };
    }
    static fromJSON(t) {
      return new s19(t.radius, t.detail);
    }
  };
  var Os = class s20 extends Yt {
    constructor(t = 1, e = 1, n2 = 1, i2 = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n2, heightSegments: i2 };
      let r2 = t / 2, a = e / 2, o3 = Math.floor(n2), l2 = Math.floor(i2), c3 = o3 + 1, h3 = l2 + 1, d4 = t / o3, u3 = e / l2, f3 = [], p2 = [], _ = [], g = [];
      for (let m2 = 0; m2 < h3; m2++) {
        let M2 = m2 * u3 - a;
        for (let S2 = 0; S2 < c3; S2++) {
          let v = S2 * d4 - r2;
          p2.push(v, -M2, 0), _.push(0, 0, 1), g.push(S2 / o3), g.push(1 - m2 / l2);
        }
      }
      for (let m2 = 0; m2 < l2; m2++) for (let M2 = 0; M2 < o3; M2++) {
        let S2 = M2 + c3 * m2, v = M2 + c3 * (m2 + 1), E = M2 + 1 + c3 * (m2 + 1), T2 = M2 + 1 + c3 * m2;
        f3.push(S2, v, T2), f3.push(v, E, T2);
      }
      this.setIndex(f3), this.setAttribute("position", new Tt(p2, 3)), this.setAttribute("normal", new Tt(_, 3)), this.setAttribute("uv", new Tt(g, 2));
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s20(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  };
  var Xo = class s21 extends Yt {
    constructor(t = 0.5, e = 1, n2 = 32, i2 = 1, r2 = 0, a = Math.PI * 2) {
      super(), this.type = "RingGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: n2, phiSegments: i2, thetaStart: r2, thetaLength: a }, n2 = Math.max(3, n2), i2 = Math.max(1, i2);
      let o3 = [], l2 = [], c3 = [], h3 = [], d4 = t, u3 = (e - t) / i2, f3 = new C(), p2 = new Q();
      for (let _ = 0; _ <= i2; _++) {
        for (let g = 0; g <= n2; g++) {
          let m2 = r2 + g / n2 * a;
          f3.x = d4 * Math.cos(m2), f3.y = d4 * Math.sin(m2), l2.push(f3.x, f3.y, f3.z), c3.push(0, 0, 1), p2.x = (f3.x / e + 1) / 2, p2.y = (f3.y / e + 1) / 2, h3.push(p2.x, p2.y);
        }
        d4 += u3;
      }
      for (let _ = 0; _ < i2; _++) {
        let g = _ * (n2 + 1);
        for (let m2 = 0; m2 < n2; m2++) {
          let M2 = m2 + g, S2 = M2, v = M2 + n2 + 1, E = M2 + n2 + 2, T2 = M2 + 1;
          o3.push(S2, v, T2), o3.push(v, E, T2);
        }
      }
      this.setIndex(o3), this.setAttribute("position", new Tt(l2, 3)), this.setAttribute("normal", new Tt(c3, 3)), this.setAttribute("uv", new Tt(h3, 2));
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s21(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
    }
  };
  var qo = class s22 extends Yt {
    constructor(t = new Ki([new Q(0, 0.5), new Q(-0.5, -0.5), new Q(0.5, -0.5)]), e = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = { shapes: t, curveSegments: e };
      let n2 = [], i2 = [], r2 = [], a = [], o3 = 0, l2 = 0;
      if (Array.isArray(t) === false) c3(t);
      else for (let h3 = 0; h3 < t.length; h3++) c3(t[h3]), this.addGroup(o3, l2, h3), o3 += l2, l2 = 0;
      this.setIndex(n2), this.setAttribute("position", new Tt(i2, 3)), this.setAttribute("normal", new Tt(r2, 3)), this.setAttribute("uv", new Tt(a, 2));
      function c3(h3) {
        let d4 = i2.length / 3, u3 = h3.extractPoints(e), f3 = u3.shape, p2 = u3.holes;
        vn.isClockWise(f3) === false && (f3 = f3.reverse());
        for (let g = 0, m2 = p2.length; g < m2; g++) {
          let M2 = p2[g];
          vn.isClockWise(M2) === true && (p2[g] = M2.reverse());
        }
        let _ = vn.triangulateShape(f3, p2);
        for (let g = 0, m2 = p2.length; g < m2; g++) {
          let M2 = p2[g];
          f3 = f3.concat(M2);
        }
        for (let g = 0, m2 = f3.length; g < m2; g++) {
          let M2 = f3[g];
          i2.push(M2.x, M2.y, 0), r2.push(0, 0, 1), a.push(M2.x, M2.y);
        }
        for (let g = 0, m2 = _.length; g < m2; g++) {
          let M2 = _[g], S2 = M2[0] + d4, v = M2[1] + d4, E = M2[2] + d4;
          n2.push(S2, v, E), l2 += 3;
        }
      }
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    toJSON() {
      let t = super.toJSON(), e = this.parameters.shapes;
      return A0(e, t);
    }
    static fromJSON(t, e) {
      let n2 = [];
      for (let i2 = 0, r2 = t.shapes.length; i2 < r2; i2++) {
        let a = e[t.shapes[i2]];
        n2.push(a);
      }
      return new s22(n2, t.curveSegments);
    }
  };
  function A0(s30, t) {
    if (t.shapes = [], Array.isArray(s30)) for (let e = 0, n2 = s30.length; e < n2; e++) {
      let i2 = s30[e];
      t.shapes.push(i2.uuid);
    }
    else t.shapes.push(s30.uuid);
    return t;
  }
  var Br = class s23 extends Yt {
    constructor(t = 1, e = 32, n2 = 16, i2 = 0, r2 = Math.PI * 2, a = 0, o3 = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: n2, phiStart: i2, phiLength: r2, thetaStart: a, thetaLength: o3 }, e = Math.max(3, Math.floor(e)), n2 = Math.max(2, Math.floor(n2));
      let l2 = Math.min(a + o3, Math.PI), c3 = 0, h3 = [], d4 = new C(), u3 = new C(), f3 = [], p2 = [], _ = [], g = [];
      for (let m2 = 0; m2 <= n2; m2++) {
        let M2 = [], S2 = m2 / n2, v = a + S2 * o3, E = t * Math.cos(v), T2 = Math.sqrt(t * t - E * E), R2 = 0;
        m2 === 0 && a === 0 ? R2 = 0.5 / e : m2 === n2 && l2 === Math.PI && (R2 = -0.5 / e);
        for (let x3 = 0; x3 <= e; x3++) {
          let A3 = x3 / e, I2 = i2 + A3 * r2;
          d4.x = -T2 * Math.cos(I2), d4.y = E, d4.z = T2 * Math.sin(I2), p2.push(d4.x, d4.y, d4.z), u3.copy(d4).normalize(), _.push(u3.x, u3.y, u3.z), g.push(A3 + R2, 1 - S2), M2.push(c3++);
        }
        h3.push(M2);
      }
      for (let m2 = 0; m2 < n2; m2++) for (let M2 = 0; M2 < e; M2++) {
        let S2 = h3[m2][M2 + 1], v = h3[m2][M2], E = h3[m2 + 1][M2], T2 = h3[m2 + 1][M2 + 1];
        (m2 !== 0 || a > 0) && f3.push(S2, v, T2), (m2 !== n2 - 1 || l2 < Math.PI) && f3.push(v, E, T2);
      }
      this.setIndex(f3), this.setAttribute("position", new Tt(p2, 3)), this.setAttribute("normal", new Tt(_, 3)), this.setAttribute("uv", new Tt(g, 2));
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s23(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
    }
  };
  var Yo = class s24 extends vi {
    constructor(t = 1, e = 0) {
      let n2 = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], i2 = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
      super(n2, i2, t, e), this.type = "TetrahedronGeometry", this.parameters = { radius: t, detail: e };
    }
    static fromJSON(t) {
      return new s24(t.radius, t.detail);
    }
  };
  var Zo = class s25 extends Yt {
    constructor(t = 1, e = 0.4, n2 = 12, i2 = 48, r2 = Math.PI * 2, a = 0, o3 = Math.PI * 2) {
      super(), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: n2, tubularSegments: i2, arc: r2, thetaStart: a, thetaLength: o3 }, n2 = Math.floor(n2), i2 = Math.floor(i2);
      let l2 = [], c3 = [], h3 = [], d4 = [], u3 = new C(), f3 = new C(), p2 = new C();
      for (let _ = 0; _ <= n2; _++) {
        let g = a + _ / n2 * o3;
        for (let m2 = 0; m2 <= i2; m2++) {
          let M2 = m2 / i2 * r2;
          f3.x = (t + e * Math.cos(g)) * Math.cos(M2), f3.y = (t + e * Math.cos(g)) * Math.sin(M2), f3.z = e * Math.sin(g), c3.push(f3.x, f3.y, f3.z), u3.x = t * Math.cos(M2), u3.y = t * Math.sin(M2), p2.subVectors(f3, u3).normalize(), h3.push(p2.x, p2.y, p2.z), d4.push(m2 / i2), d4.push(_ / n2);
        }
      }
      for (let _ = 1; _ <= n2; _++) for (let g = 1; g <= i2; g++) {
        let m2 = (i2 + 1) * _ + g - 1, M2 = (i2 + 1) * (_ - 1) + g - 1, S2 = (i2 + 1) * (_ - 1) + g, v = (i2 + 1) * _ + g;
        l2.push(m2, M2, v), l2.push(M2, S2, v);
      }
      this.setIndex(l2), this.setAttribute("position", new Tt(c3, 3)), this.setAttribute("normal", new Tt(h3, 3)), this.setAttribute("uv", new Tt(d4, 2));
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s25(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
    }
  };
  var Jo = class s26 extends Yt {
    constructor(t = 1, e = 0.4, n2 = 64, i2 = 8, r2 = 2, a = 3) {
      super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t, tube: e, tubularSegments: n2, radialSegments: i2, p: r2, q: a }, n2 = Math.floor(n2), i2 = Math.floor(i2);
      let o3 = [], l2 = [], c3 = [], h3 = [], d4 = new C(), u3 = new C(), f3 = new C(), p2 = new C(), _ = new C(), g = new C(), m2 = new C();
      for (let S2 = 0; S2 <= n2; ++S2) {
        let v = S2 / n2 * r2 * Math.PI * 2;
        M2(v, r2, a, t, f3), M2(v + 0.01, r2, a, t, p2), g.subVectors(p2, f3), m2.addVectors(p2, f3), _.crossVectors(g, m2), m2.crossVectors(_, g), _.normalize(), m2.normalize();
        for (let E = 0; E <= i2; ++E) {
          let T2 = E / i2 * Math.PI * 2, R2 = -e * Math.cos(T2), x3 = e * Math.sin(T2);
          d4.x = f3.x + (R2 * m2.x + x3 * _.x), d4.y = f3.y + (R2 * m2.y + x3 * _.y), d4.z = f3.z + (R2 * m2.z + x3 * _.z), l2.push(d4.x, d4.y, d4.z), u3.subVectors(d4, f3).normalize(), c3.push(u3.x, u3.y, u3.z), h3.push(S2 / n2), h3.push(E / i2);
        }
      }
      for (let S2 = 1; S2 <= n2; S2++) for (let v = 1; v <= i2; v++) {
        let E = (i2 + 1) * (S2 - 1) + (v - 1), T2 = (i2 + 1) * S2 + (v - 1), R2 = (i2 + 1) * S2 + v, x3 = (i2 + 1) * (S2 - 1) + v;
        o3.push(E, T2, x3), o3.push(T2, R2, x3);
      }
      this.setIndex(o3), this.setAttribute("position", new Tt(l2, 3)), this.setAttribute("normal", new Tt(c3, 3)), this.setAttribute("uv", new Tt(h3, 2));
      function M2(S2, v, E, T2, R2) {
        let x3 = Math.cos(S2), A3 = Math.sin(S2), I2 = E / v * S2, P3 = Math.cos(I2);
        R2.x = T2 * (2 + P3) * 0.5 * x3, R2.y = T2 * (2 + P3) * A3 * 0.5, R2.z = T2 * Math.sin(I2) * 0.5;
      }
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    static fromJSON(t) {
      return new s26(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
    }
  };
  var $o = class s27 extends Yt {
    constructor(t = new Lr(new C(-1, -1, 0), new C(-1, 1, 0), new C(1, 1, 0)), e = 64, n2 = 1, i2 = 8, r2 = false) {
      super(), this.type = "TubeGeometry", this.parameters = { path: t, tubularSegments: e, radius: n2, radialSegments: i2, closed: r2 };
      let a = t.computeFrenetFrames(e, r2);
      this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
      let o3 = new C(), l2 = new C(), c3 = new Q(), h3 = new C(), d4 = [], u3 = [], f3 = [], p2 = [];
      _(), this.setIndex(p2), this.setAttribute("position", new Tt(d4, 3)), this.setAttribute("normal", new Tt(u3, 3)), this.setAttribute("uv", new Tt(f3, 2));
      function _() {
        for (let S2 = 0; S2 < e; S2++) g(S2);
        g(r2 === false ? e : 0), M2(), m2();
      }
      function g(S2) {
        h3 = t.getPointAt(S2 / e, h3);
        let v = a.normals[S2], E = a.binormals[S2];
        for (let T2 = 0; T2 <= i2; T2++) {
          let R2 = T2 / i2 * Math.PI * 2, x3 = Math.sin(R2), A3 = -Math.cos(R2);
          l2.x = A3 * v.x + x3 * E.x, l2.y = A3 * v.y + x3 * E.y, l2.z = A3 * v.z + x3 * E.z, l2.normalize(), u3.push(l2.x, l2.y, l2.z), o3.x = h3.x + n2 * l2.x, o3.y = h3.y + n2 * l2.y, o3.z = h3.z + n2 * l2.z, d4.push(o3.x, o3.y, o3.z);
        }
      }
      function m2() {
        for (let S2 = 1; S2 <= e; S2++) for (let v = 1; v <= i2; v++) {
          let E = (i2 + 1) * (S2 - 1) + (v - 1), T2 = (i2 + 1) * S2 + (v - 1), R2 = (i2 + 1) * S2 + v, x3 = (i2 + 1) * (S2 - 1) + v;
          p2.push(E, T2, x3), p2.push(T2, R2, x3);
        }
      }
      function M2() {
        for (let S2 = 0; S2 <= e; S2++) for (let v = 0; v <= i2; v++) c3.x = S2 / e, c3.y = v / i2, f3.push(c3.x, c3.y);
      }
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
    toJSON() {
      let t = super.toJSON();
      return t.path = this.parameters.path.toJSON(), t;
    }
    static fromJSON(t) {
      return new s27(new Vo[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
    }
  };
  var Ko = class extends Yt {
    constructor(t = null) {
      if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t }, t !== null) {
        let e = [], n2 = /* @__PURE__ */ new Set(), i2 = new C(), r2 = new C();
        if (t.index !== null) {
          let a = t.attributes.position, o3 = t.index, l2 = t.groups;
          l2.length === 0 && (l2 = [{ start: 0, count: o3.count, materialIndex: 0 }]);
          for (let c3 = 0, h3 = l2.length; c3 < h3; ++c3) {
            let d4 = l2[c3], u3 = d4.start, f3 = d4.count;
            for (let p2 = u3, _ = u3 + f3; p2 < _; p2 += 3) for (let g = 0; g < 3; g++) {
              let m2 = o3.getX(p2 + g), M2 = o3.getX(p2 + (g + 1) % 3);
              i2.fromBufferAttribute(a, m2), r2.fromBufferAttribute(a, M2), af(i2, r2, n2) === true && (e.push(i2.x, i2.y, i2.z), e.push(r2.x, r2.y, r2.z));
            }
          }
        } else {
          let a = t.attributes.position;
          for (let o3 = 0, l2 = a.count / 3; o3 < l2; o3++) for (let c3 = 0; c3 < 3; c3++) {
            let h3 = 3 * o3 + c3, d4 = 3 * o3 + (c3 + 1) % 3;
            i2.fromBufferAttribute(a, h3), r2.fromBufferAttribute(a, d4), af(i2, r2, n2) === true && (e.push(i2.x, i2.y, i2.z), e.push(r2.x, r2.y, r2.z));
          }
        }
        this.setAttribute("position", new Tt(e, 3));
      }
    }
    copy(t) {
      return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
    }
  };
  function af(s30, t, e) {
    let n2 = `${s30.x},${s30.y},${s30.z}-${t.x},${t.y},${t.z}`, i2 = `${t.x},${t.y},${t.z}-${s30.x},${s30.y},${s30.z}`;
    return e.has(n2) === true || e.has(i2) === true ? false : (e.add(n2), e.add(i2), true);
  }
  var of = Object.freeze({ __proto__: null, BoxGeometry: Ji, CapsuleGeometry: Lo, CircleGeometry: Do, ConeGeometry: Cr, CylinderGeometry: wr, DodecahedronGeometry: No, EdgesGeometry: Uo, ExtrudeGeometry: Go, IcosahedronGeometry: Ho, LatheGeometry: Wo, OctahedronGeometry: Or, PlaneGeometry: Os, PolyhedronGeometry: vi, RingGeometry: Xo, ShapeGeometry: qo, SphereGeometry: Br, TetrahedronGeometry: Yo, TorusGeometry: Zo, TorusKnotGeometry: Jo, TubeGeometry: $o, WireframeGeometry: Ko });
  function ns(s30) {
    let t = {};
    for (let e in s30) {
      t[e] = {};
      for (let n2 in s30[e]) {
        let i2 = s30[e][n2];
        if (lf(i2)) i2.isRenderTargetTexture ? (ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n2] = null) : t[e][n2] = i2.clone();
        else if (Array.isArray(i2)) if (lf(i2[0])) {
          let r2 = [];
          for (let a = 0, o3 = i2.length; a < o3; a++) r2[a] = i2[a].clone();
          t[e][n2] = r2;
        } else t[e][n2] = i2.slice();
        else t[e][n2] = i2;
      }
    }
    return t;
  }
  function He(s30) {
    let t = {};
    for (let e = 0; e < s30.length; e++) {
      let n2 = ns(s30[e]);
      for (let i2 in n2) t[i2] = n2[i2];
    }
    return t;
  }
  function lf(s30) {
    return s30 && (s30.isColor || s30.isMatrix3 || s30.isMatrix4 || s30.isVector2 || s30.isVector3 || s30.isVector4 || s30.isTexture || s30.isQuaternion);
  }
  function E0(s30) {
    let t = [];
    for (let e = 0; e < s30.length; e++) t.push(s30[e].clone());
    return t;
  }
  function qu(s30) {
    let t = s30.getRenderTarget();
    return t === null ? s30.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : ee.workingColorSpace;
  }
  var bp = { clone: ns, merge: He };
  var w0 = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;
  var C0 = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
  var en = class extends Pe {
    constructor(t) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = w0, this.fragmentShader = C0, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
    }
    copy(t) {
      return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = ns(t.uniforms), this.uniformsGroups = E0(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this.defaultAttributeValues = Object.assign({}, t.defaultAttributeValues), this.index0AttributeName = t.index0AttributeName, this.uniformsNeedUpdate = t.uniformsNeedUpdate, this;
    }
    toJSON(t) {
      let e = super.toJSON(t);
      e.glslVersion = this.glslVersion, e.uniforms = {};
      for (let i2 in this.uniforms) {
        let a = this.uniforms[i2].value;
        a && a.isTexture ? e.uniforms[i2] = { type: "t", value: a.toJSON(t).uuid } : a && a.isColor ? e.uniforms[i2] = { type: "c", value: a.getHex() } : a && a.isVector2 ? e.uniforms[i2] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? e.uniforms[i2] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? e.uniforms[i2] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? e.uniforms[i2] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? e.uniforms[i2] = { type: "m4", value: a.toArray() } : e.uniforms[i2] = { value: a };
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
      let n2 = {};
      for (let i2 in this.extensions) this.extensions[i2] === true && (n2[i2] = true);
      return Object.keys(n2).length > 0 && (e.extensions = n2), e;
    }
    fromJSON(t, e) {
      if (super.fromJSON(t, e), t.uniforms !== void 0) for (let n2 in t.uniforms) {
        let i2 = t.uniforms[n2];
        switch (this.uniforms[n2] = {}, i2.type) {
          case "t":
            this.uniforms[n2].value = e[i2.value] || null;
            break;
          case "c":
            this.uniforms[n2].value = new St().setHex(i2.value);
            break;
          case "v2":
            this.uniforms[n2].value = new Q().fromArray(i2.value);
            break;
          case "v3":
            this.uniforms[n2].value = new C().fromArray(i2.value);
            break;
          case "v4":
            this.uniforms[n2].value = new ce().fromArray(i2.value);
            break;
          case "m3":
            this.uniforms[n2].value = new Xt().fromArray(i2.value);
            break;
          case "m4":
            this.uniforms[n2].value = new Ht().fromArray(i2.value);
            break;
          default:
            this.uniforms[n2].value = i2.value;
        }
      }
      if (t.defines !== void 0 && (this.defines = t.defines), t.vertexShader !== void 0 && (this.vertexShader = t.vertexShader), t.fragmentShader !== void 0 && (this.fragmentShader = t.fragmentShader), t.glslVersion !== void 0 && (this.glslVersion = t.glslVersion), t.extensions !== void 0) for (let n2 in t.extensions) this.extensions[n2] = t.extensions[n2];
      return t.lights !== void 0 && (this.lights = t.lights), t.clipping !== void 0 && (this.clipping = t.clipping), this;
    }
  };
  var zr = class extends en {
    constructor(t) {
      super(t), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
    }
  };
  var kr = class extends Pe {
    constructor(t) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = sp, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
    }
    copy(t) {
      return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
    }
  };
  var Gr = class extends Pe {
    constructor(t) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
    }
    copy(t) {
      return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
    }
  };
  function ki(s30, t) {
    return !s30 || s30.constructor === t ? s30 : typeof t.BYTES_PER_ELEMENT == "number" ? new t(s30) : Array.prototype.slice.call(s30);
  }
  var yi = class {
    constructor(t, e, n2, i2) {
      this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = i2 !== void 0 ? i2 : new e.constructor(n2), this.sampleValues = e, this.valueSize = n2, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(t) {
      let e = this.parameterPositions, n2 = this._cachedIndex, i2 = e[n2], r2 = e[n2 - 1];
      t: {
        e: {
          let a;
          n: {
            i: if (!(t < i2)) {
              for (let o3 = n2 + 2; ; ) {
                if (i2 === void 0) {
                  if (t < r2) break i;
                  return n2 = e.length, this._cachedIndex = n2, this.copySampleValue_(n2 - 1);
                }
                if (n2 === o3) break;
                if (r2 = i2, i2 = e[++n2], t < i2) break e;
              }
              a = e.length;
              break n;
            }
            if (!(t >= r2)) {
              let o3 = e[1];
              t < o3 && (n2 = 2, r2 = o3);
              for (let l2 = n2 - 2; ; ) {
                if (r2 === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (n2 === l2) break;
                if (i2 = r2, r2 = e[--n2 - 1], t >= r2) break e;
              }
              a = n2, n2 = 0;
              break n;
            }
            break t;
          }
          for (; n2 < a; ) {
            let o3 = n2 + a >>> 1;
            t < e[o3] ? a = o3 : n2 = o3 + 1;
          }
          if (i2 = e[n2], r2 = e[n2 - 1], r2 === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (i2 === void 0) return n2 = e.length, this._cachedIndex = n2, this.copySampleValue_(n2 - 1);
        }
        this._cachedIndex = n2, this.intervalChanged_(n2, r2, i2);
      }
      return this.interpolate_(n2, r2, t, i2);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t) {
      let e = this.resultBuffer, n2 = this.sampleValues, i2 = this.valueSize, r2 = t * i2;
      for (let a = 0; a !== i2; ++a) e[a] = n2[r2 + a];
      return e;
    }
    interpolate_() {
      throw new Error("THREE.Interpolant: Call to abstract method.");
    }
    intervalChanged_() {
    }
  };
  var al = class extends yi {
    constructor(t, e, n2, i2) {
      super(t, e, n2, i2), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: zi, endingEnd: zi };
    }
    intervalChanged_(t, e, n2) {
      let i2 = this.parameterPositions, r2 = t - 2, a = t + 1, o3 = i2[r2], l2 = i2[a];
      if (o3 === void 0) switch (this.getSettings_().endingStart) {
        case Vi:
          r2 = t, o3 = 2 * e - n2;
          break;
        case mr:
          r2 = i2.length - 2, o3 = e + i2[r2] - i2[r2 + 1];
          break;
        default:
          r2 = t, o3 = n2;
      }
      if (l2 === void 0) switch (this.getSettings_().endingEnd) {
        case Vi:
          a = t, l2 = 2 * n2 - e;
          break;
        case mr:
          a = 1, l2 = n2 + i2[1] - i2[0];
          break;
        default:
          a = t - 1, l2 = e;
      }
      let c3 = (n2 - e) * 0.5, h3 = this.valueSize;
      this._weightPrev = c3 / (e - o3), this._weightNext = c3 / (l2 - n2), this._offsetPrev = r2 * h3, this._offsetNext = a * h3;
    }
    interpolate_(t, e, n2, i2) {
      let r2 = this.resultBuffer, a = this.sampleValues, o3 = this.valueSize, l2 = t * o3, c3 = l2 - o3, h3 = this._offsetPrev, d4 = this._offsetNext, u3 = this._weightPrev, f3 = this._weightNext, p2 = (n2 - e) / (i2 - e), _ = p2 * p2, g = _ * p2, m2 = -u3 * g + 2 * u3 * _ - u3 * p2, M2 = (1 + u3) * g + (-1.5 - 2 * u3) * _ + (-0.5 + u3) * p2 + 1, S2 = (-1 - f3) * g + (1.5 + f3) * _ + 0.5 * p2, v = f3 * g - f3 * _;
      for (let E = 0; E !== o3; ++E) r2[E] = m2 * a[h3 + E] + M2 * a[c3 + E] + S2 * a[l2 + E] + v * a[d4 + E];
      return r2;
    }
  };
  var Hr = class extends yi {
    constructor(t, e, n2, i2) {
      super(t, e, n2, i2);
    }
    interpolate_(t, e, n2, i2) {
      let r2 = this.resultBuffer, a = this.sampleValues, o3 = this.valueSize, l2 = t * o3, c3 = l2 - o3, h3 = (n2 - e) / (i2 - e), d4 = 1 - h3;
      for (let u3 = 0; u3 !== o3; ++u3) r2[u3] = a[c3 + u3] * d4 + a[l2 + u3] * h3;
      return r2;
    }
  };
  var ol = class extends yi {
    constructor(t, e, n2, i2) {
      super(t, e, n2, i2);
    }
    interpolate_(t) {
      return this.copySampleValue_(t - 1);
    }
  };
  var ll = class extends yi {
    interpolate_(t, e, n2, i2) {
      let r2 = this.resultBuffer, a = this.sampleValues, o3 = this.valueSize, l2 = t * o3, c3 = l2 - o3, h3 = this.inTangents, d4 = this.outTangents;
      if (!h3 || !d4) {
        let p2 = (n2 - e) / (i2 - e), _ = 1 - p2;
        for (let g = 0; g !== o3; ++g) r2[g] = a[c3 + g] * _ + a[l2 + g] * p2;
        return r2;
      }
      let u3 = o3 * 2, f3 = t - 1;
      for (let p2 = 0; p2 !== o3; ++p2) {
        let _ = a[c3 + p2], g = a[l2 + p2], m2 = f3 * u3 + p2 * 2, M2 = d4[m2], S2 = d4[m2 + 1], v = t * u3 + p2 * 2, E = h3[v], T2 = h3[v + 1], R2 = (n2 - e) / (i2 - e), x3, A3, I2, P3, N2;
        for (let H2 = 0; H2 < 8; H2++) {
          x3 = R2 * R2, A3 = x3 * R2, I2 = 1 - R2, P3 = I2 * I2, N2 = P3 * I2;
          let O = N2 * e + 3 * P3 * R2 * M2 + 3 * I2 * x3 * E + A3 * i2 - n2;
          if (Math.abs(O) < 1e-10) break;
          let W = 3 * P3 * (M2 - e) + 6 * I2 * R2 * (E - M2) + 3 * x3 * (i2 - E);
          if (Math.abs(W) < 1e-10) break;
          R2 = R2 - O / W, R2 = Math.max(0, Math.min(1, R2));
        }
        r2[p2] = N2 * _ + 3 * P3 * R2 * S2 + 3 * I2 * x3 * T2 + A3 * g;
      }
      return r2;
    }
  };
  var nn = class {
    constructor(t, e, n2, i2) {
      if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
      this.name = t, this.times = ki(e, this.TimeBufferType), this.values = ki(n2, this.ValueBufferType), this.setInterpolation(i2 || this.DefaultInterpolation);
    }
    static toJSON(t) {
      let e = t.constructor, n2;
      if (e.toJSON !== this.toJSON) n2 = e.toJSON(t);
      else {
        n2 = { name: t.name, times: ki(t.times, Array), values: ki(t.values, Array) };
        let i2 = t.getInterpolation();
        i2 !== t.DefaultInterpolation && (n2.interpolation = i2);
      }
      return n2.type = t.ValueTypeName, n2;
    }
    InterpolantFactoryMethodDiscrete(t) {
      return new ol(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodLinear(t) {
      return new Hr(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodSmooth(t) {
      return new al(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodBezier(t) {
      let e = new ll(this.times, this.values, this.getValueSize(), t);
      return this.settings && (e.inTangents = this.settings.inTangents, e.outTangents = this.settings.outTangents), e;
    }
    setInterpolation(t) {
      let e;
      switch (t) {
        case pr:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case po:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case io:
          e = this.InterpolantFactoryMethodSmooth;
          break;
        case oh:
          e = this.InterpolantFactoryMethodBezier;
          break;
      }
      if (e === void 0) {
        let n2 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (this.createInterpolant === void 0) if (t !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n2);
        return ot("KeyframeTrack:", n2), this;
      }
      return this.createInterpolant = e, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return pr;
        case this.InterpolantFactoryMethodLinear:
          return po;
        case this.InterpolantFactoryMethodSmooth:
          return io;
        case this.InterpolantFactoryMethodBezier:
          return oh;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t) {
      if (t !== 0) {
        let e = this.times;
        for (let n2 = 0, i2 = e.length; n2 !== i2; ++n2) e[n2] += t;
      }
      return this;
    }
    scale(t) {
      if (t !== 1) {
        let e = this.times;
        for (let n2 = 0, i2 = e.length; n2 !== i2; ++n2) e[n2] *= t;
      }
      return this;
    }
    trim(t, e) {
      let n2 = this.times, i2 = n2.length, r2 = 0, a = i2 - 1;
      for (; r2 !== i2 && n2[r2] < t; ) ++r2;
      for (; a !== -1 && n2[a] > e; ) --a;
      if (++a, r2 !== 0 || a !== i2) {
        r2 >= a && (a = Math.max(a, 1), r2 = a - 1);
        let o3 = this.getValueSize();
        this.times = n2.slice(r2, a), this.values = this.values.slice(r2 * o3, a * o3);
      }
      return this;
    }
    validate() {
      let t = true, e = this.getValueSize();
      e - Math.floor(e) !== 0 && (Rt("KeyframeTrack: Invalid value size in track.", this), t = false);
      let n2 = this.times, i2 = this.values, r2 = n2.length;
      r2 === 0 && (Rt("KeyframeTrack: Track is empty.", this), t = false);
      let a = null;
      for (let o3 = 0; o3 !== r2; o3++) {
        let l2 = n2[o3];
        if (typeof l2 == "number" && isNaN(l2)) {
          Rt("KeyframeTrack: Time is not a valid number.", this, o3, l2), t = false;
          break;
        }
        if (a !== null && a > l2) {
          Rt("KeyframeTrack: Out of order keys.", this, o3, l2, a), t = false;
          break;
        }
        a = l2;
      }
      if (i2 !== void 0 && dp(i2)) for (let o3 = 0, l2 = i2.length; o3 !== l2; ++o3) {
        let c3 = i2[o3];
        if (isNaN(c3)) {
          Rt("KeyframeTrack: Value is not a valid number.", this, o3, c3), t = false;
          break;
        }
      }
      return t;
    }
    optimize() {
      let t = this.times.slice(), e = this.values.slice(), n2 = this.getValueSize(), i2 = this.getInterpolation() === io, r2 = t.length - 1, a = 1;
      for (let o3 = 1; o3 < r2; ++o3) {
        let l2 = false, c3 = t[o3], h3 = t[o3 + 1];
        if (c3 !== h3 && (o3 !== 1 || c3 !== t[0])) if (i2) l2 = true;
        else {
          let d4 = o3 * n2, u3 = d4 - n2, f3 = d4 + n2;
          for (let p2 = 0; p2 !== n2; ++p2) {
            let _ = e[d4 + p2];
            if (_ !== e[u3 + p2] || _ !== e[f3 + p2]) {
              l2 = true;
              break;
            }
          }
        }
        if (l2) {
          if (o3 !== a) {
            t[a] = t[o3];
            let d4 = o3 * n2, u3 = a * n2;
            for (let f3 = 0; f3 !== n2; ++f3) e[u3 + f3] = e[d4 + f3];
          }
          ++a;
        }
      }
      if (r2 > 0) {
        t[a] = t[r2];
        for (let o3 = r2 * n2, l2 = a * n2, c3 = 0; c3 !== n2; ++c3) e[l2 + c3] = e[o3 + c3];
        ++a;
      }
      return a !== t.length ? (this.times = t.slice(0, a), this.values = e.slice(0, a * n2)) : (this.times = t, this.values = e), this;
    }
    clone() {
      let t = this.times.slice(), e = this.values.slice(), n2 = this.constructor, i2 = new n2(this.name, t, e);
      return i2.createInterpolant = this.createInterpolant, i2;
    }
  };
  nn.prototype.ValueTypeName = "";
  nn.prototype.TimeBufferType = Float32Array;
  nn.prototype.ValueBufferType = Float32Array;
  nn.prototype.DefaultInterpolation = po;
  var jn = class extends nn {
    constructor(t, e, n2) {
      super(t, e, n2);
    }
  };
  jn.prototype.ValueTypeName = "bool";
  jn.prototype.ValueBufferType = Array;
  jn.prototype.DefaultInterpolation = pr;
  jn.prototype.InterpolantFactoryMethodLinear = void 0;
  jn.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Wr = class extends nn {
    constructor(t, e, n2, i2) {
      super(t, e, n2, i2);
    }
  };
  Wr.prototype.ValueTypeName = "color";
  var Bs = class extends nn {
    constructor(t, e, n2, i2) {
      super(t, e, n2, i2);
    }
  };
  Bs.prototype.ValueTypeName = "number";
  var cl = class extends yi {
    constructor(t, e, n2, i2) {
      super(t, e, n2, i2);
    }
    interpolate_(t, e, n2, i2) {
      let r2 = this.resultBuffer, a = this.sampleValues, o3 = this.valueSize, l2 = (n2 - e) / (i2 - e), c3 = t * o3;
      for (let h3 = c3 + o3; c3 !== h3; c3 += 4) Fe.slerpFlat(r2, 0, a, c3 - o3, a, c3, l2);
      return r2;
    }
  };
  var zs = class extends nn {
    constructor(t, e, n2, i2) {
      super(t, e, n2, i2);
    }
    InterpolantFactoryMethodLinear(t) {
      return new cl(this.times, this.values, this.getValueSize(), t);
    }
  };
  zs.prototype.ValueTypeName = "quaternion";
  zs.prototype.InterpolantFactoryMethodSmooth = void 0;
  var ti = class extends nn {
    constructor(t, e, n2) {
      super(t, e, n2);
    }
  };
  ti.prototype.ValueTypeName = "string";
  ti.prototype.ValueBufferType = Array;
  ti.prototype.DefaultInterpolation = pr;
  ti.prototype.InterpolantFactoryMethodLinear = void 0;
  ti.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Xr = class extends nn {
    constructor(t, e, n2, i2) {
      super(t, e, n2, i2);
    }
  };
  Xr.prototype.ValueTypeName = "vector";
  var qr = class {
    constructor(t, e, n2) {
      let i2 = this, r2 = false, a = 0, o3 = 0, l2, c3 = [];
      this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n2, this._abortController = null, this.itemStart = function(h3) {
        o3++, r2 === false && i2.onStart !== void 0 && i2.onStart(h3, a, o3), r2 = true;
      }, this.itemEnd = function(h3) {
        a++, i2.onProgress !== void 0 && i2.onProgress(h3, a, o3), a === o3 && (r2 = false, i2.onLoad !== void 0 && i2.onLoad());
      }, this.itemError = function(h3) {
        i2.onError !== void 0 && i2.onError(h3);
      }, this.resolveURL = function(h3) {
        return h3 = h3.normalize("NFC"), l2 ? l2(h3) : h3;
      }, this.setURLModifier = function(h3) {
        return l2 = h3, this;
      }, this.addHandler = function(h3, d4) {
        return c3.push(h3, d4), this;
      }, this.removeHandler = function(h3) {
        let d4 = c3.indexOf(h3);
        return d4 !== -1 && c3.splice(d4, 2), this;
      }, this.getHandler = function(h3) {
        for (let d4 = 0, u3 = c3.length; d4 < u3; d4 += 2) {
          let f3 = c3[d4], p2 = c3[d4 + 1];
          if (f3.global && (f3.lastIndex = 0), f3.test(h3)) return p2;
        }
        return null;
      }, this.abort = function() {
        return this.abortController.abort(), this._abortController = null, this;
      };
    }
    get abortController() {
      return this._abortController || (this._abortController = new AbortController()), this._abortController;
    }
  };
  var Ep = new qr();
  var Ge = class {
    constructor(t) {
      this.manager = t !== void 0 ? t : Ep, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    load() {
    }
    loadAsync(t, e) {
      let n2 = this;
      return new Promise(function(i2, r2) {
        n2.load(t, i2, e, r2);
      });
    }
    parse() {
    }
    setCrossOrigin(t) {
      return this.crossOrigin = t, this;
    }
    setWithCredentials(t) {
      return this.withCredentials = t, this;
    }
    setPath(t) {
      return this.path = t, this;
    }
    setResourcePath(t) {
      return this.resourcePath = t, this;
    }
    setRequestHeader(t) {
      return this.requestHeader = t, this;
    }
    abort() {
      return this;
    }
  };
  Ge.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  var jc = new Ht();
  var hf = new C();
  var uf = new C();
  var Za = new C();
  var Ja = new Fe();
  var En = new C();
  var Vs = class extends re {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Ht(), this.projectionMatrix = new Ht(), this.projectionMatrixInverse = new Ht(), this.coordinateSystem = ln, this._reversedDepth = false;
    }
    get reversedDepth() {
      return this._reversedDepth;
    }
    copy(t, e) {
      return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
    }
    getWorldDirection(t) {
      return super.getWorldDirection(t).negate();
    }
    updateMatrixWorld(t) {
      super.updateMatrixWorld(t), this.matrixWorld.decompose(Za, Ja, En), En.x === 1 && En.y === 1 && En.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Za, Ja, En.set(1, 1, 1)).invert();
    }
    updateWorldMatrix(t, e, n2 = false) {
      super.updateWorldMatrix(t, e, n2), this.matrixWorld.decompose(Za, Ja, En), En.x === 1 && En.y === 1 && En.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Za, Ja, En.set(1, 1, 1)).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var ui = new C();
  var df = new Q();
  var ff = new Q();
  var Re = class extends Vs {
    constructor(t = 50, e = 1, n2 = 0.1, i2 = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n2, this.far = i2, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(t, e) {
      return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
    }
    setFocalLength(t) {
      let e = 0.5 * this.getFilmHeight() / t;
      this.fov = qi * 2 * Math.atan(e), this.updateProjectionMatrix();
    }
    getFocalLength() {
      let t = Math.tan(Gi * 0.5 * this.fov);
      return 0.5 * this.getFilmHeight() / t;
    }
    getEffectiveFOV() {
      return qi * 2 * Math.atan(Math.tan(Gi * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t, e, n2) {
      ui.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(ui.x, ui.y).multiplyScalar(-t / ui.z), ui.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n2.set(ui.x, ui.y).multiplyScalar(-t / ui.z);
    }
    getViewSize(t, e) {
      return this.getViewBounds(t, df, ff), e.subVectors(ff, df);
    }
    setViewOffset(t, e, n2, i2, r2, a) {
      this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n2, this.view.offsetY = i2, this.view.width = r2, this.view.height = a, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      let t = this.near, e = t * Math.tan(Gi * 0.5 * this.fov) / this.zoom, n2 = 2 * e, i2 = this.aspect * n2, r2 = -0.5 * i2, a = this.view;
      if (this.view !== null && this.view.enabled) {
        let l2 = a.fullWidth, c3 = a.fullHeight;
        r2 += a.offsetX * i2 / l2, e -= a.offsetY * n2 / c3, i2 *= a.width / l2, n2 *= a.height / c3;
      }
      let o3 = this.filmOffset;
      o3 !== 0 && (r2 += t * o3 / this.getFilmWidth()), this.projectionMatrix.makePerspective(r2, r2 + i2, e, e - n2, t, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
    }
  };
  var es = class extends Vs {
    constructor(t = -1, e = 1, n2 = 1, i2 = -1, r2 = 0.1, a = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n2, this.bottom = i2, this.near = r2, this.far = a, this.updateProjectionMatrix();
    }
    copy(t, e) {
      return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
    }
    setViewOffset(t, e, n2, i2, r2, a) {
      this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n2, this.view.offsetY = i2, this.view.width = r2, this.view.height = a, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      let t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n2 = (this.right + this.left) / 2, i2 = (this.top + this.bottom) / 2, r2 = n2 - t, a = n2 + t, o3 = i2 + e, l2 = i2 - e;
      if (this.view !== null && this.view.enabled) {
        let c3 = (this.right - this.left) / this.view.fullWidth / this.zoom, h3 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r2 += c3 * this.view.offsetX, a = r2 + c3 * this.view.width, o3 -= h3 * this.view.offsetY, l2 = o3 - h3 * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r2, a, o3, l2, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
    }
  };
  var _f = new Ht();
  var xf = new Ht();
  var Li = new Ht();
  var Ss = -90;
  var bs = 1;
  var yl = class extends re {
    constructor(t, e, n2) {
      super(), this.type = "CubeCamera", this.renderTarget = n2, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      let i2 = new Re(Ss, bs, t, e);
      i2.layers = this.layers, this.add(i2);
      let r2 = new Re(Ss, bs, t, e);
      r2.layers = this.layers, this.add(r2);
      let a = new Re(Ss, bs, t, e);
      a.layers = this.layers, this.add(a);
      let o3 = new Re(Ss, bs, t, e);
      o3.layers = this.layers, this.add(o3);
      let l2 = new Re(Ss, bs, t, e);
      l2.layers = this.layers, this.add(l2);
      let c3 = new Re(Ss, bs, t, e);
      c3.layers = this.layers, this.add(c3);
    }
    updateCoordinateSystem() {
      let t = this.coordinateSystem, e = this.children.concat(), [n2, i2, r2, a, o3, l2] = e;
      for (let c3 of e) this.remove(c3);
      if (t === ln) n2.up.set(0, 1, 0), n2.lookAt(1, 0, 0), i2.up.set(0, 1, 0), i2.lookAt(-1, 0, 0), r2.up.set(0, 0, -1), r2.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o3.up.set(0, 1, 0), o3.lookAt(0, 0, 1), l2.up.set(0, 1, 0), l2.lookAt(0, 0, -1);
      else if (t === Xi) n2.up.set(0, -1, 0), n2.lookAt(-1, 0, 0), i2.up.set(0, -1, 0), i2.lookAt(1, 0, 0), r2.up.set(0, 0, 1), r2.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o3.up.set(0, -1, 0), o3.lookAt(0, 0, 1), l2.up.set(0, -1, 0), l2.lookAt(0, 0, -1);
      else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
      for (let c3 of e) this.add(c3), c3.updateMatrixWorld();
    }
    update(t, e) {
      this.parent === null && this.updateMatrixWorld();
      let { renderTarget: n2, activeMipmapLevel: i2 } = this;
      this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
      let [r2, a, o3, l2, c3, h3] = this.children, d4 = t.getRenderTarget(), u3 = t.getActiveCubeFace(), f3 = t.getActiveMipmapLevel(), p2 = t.xr.enabled;
      t.xr.enabled = false;
      let _ = n2.texture.generateMipmaps;
      n2.texture.generateMipmaps = false;
      let g = false;
      t.isWebGLRenderer === true ? g = t.state.buffers.depth.getReversed() : g = t.reversedDepthBuffer, t.setRenderTarget(n2, 0, i2), g && t.autoClear === false && t.clearDepth(), t.render(e, r2), t.setRenderTarget(n2, 1, i2), g && t.autoClear === false && t.clearDepth(), t.render(e, a), t.setRenderTarget(n2, 2, i2), g && t.autoClear === false && t.clearDepth(), t.render(e, o3), t.setRenderTarget(n2, 3, i2), g && t.autoClear === false && t.clearDepth(), t.render(e, l2), t.setRenderTarget(n2, 4, i2), g && t.autoClear === false && t.clearDepth(), t.render(e, c3), n2.texture.generateMipmaps = _, t.setRenderTarget(n2, 5, i2), g && t.autoClear === false && t.clearDepth(), t.render(e, h3), t.setRenderTarget(d4, u3, f3), t.xr.enabled = p2, n2.texture.needsPMREMUpdate = true;
    }
  };
  var Ml = class extends Re {
    constructor(t = []) {
      super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t;
    }
  };
  var Sl = class {
    constructor() {
      this._previousTime = 0, this._currentTime = 0, this._startTime = performance.now(), this._delta = 0, this._elapsed = 0, this._timescale = 1, this._document = null, this._pageVisibilityHandler = null;
    }
    connect(t) {
      this._document = t, t.hidden !== void 0 && (this._pageVisibilityHandler = N0.bind(this), t.addEventListener("visibilitychange", this._pageVisibilityHandler, false));
    }
    disconnect() {
      this._pageVisibilityHandler !== null && (this._document.removeEventListener("visibilitychange", this._pageVisibilityHandler), this._pageVisibilityHandler = null), this._document = null;
    }
    getDelta() {
      return this._delta / 1e3;
    }
    getElapsed() {
      return this._elapsed / 1e3;
    }
    getTimescale() {
      return this._timescale;
    }
    setTimescale(t) {
      return this._timescale = t, this;
    }
    reset() {
      return this._currentTime = performance.now() - this._startTime, this;
    }
    dispose() {
      this.disconnect();
    }
    update(t) {
      return this._pageVisibilityHandler !== null && this._document.hidden === true ? this._delta = 0 : (this._previousTime = this._currentTime, this._currentTime = (t !== void 0 ? t : performance.now()) - this._startTime, this._delta = (this._currentTime - this._previousTime) * this._timescale, this._elapsed += this._delta), this;
    }
  };
  function N0() {
    this._document.hidden === false && this.reset();
  }
  var Di = new C();
  var nh = new Fe();
  var U0 = new C();
  var Ni = new C();
  var Ui = new C();
  var Fi = new C();
  var vf = new Fe();
  var F0 = new C();
  var Oi = new C();
  var Yu = "\\[\\]\\.:\\/";
  var O0 = new RegExp("[" + Yu + "]", "g");
  var Zu = "[^" + Yu + "]";
  var B0 = "[^" + Yu.replace("\\.", "") + "]";
  var z0 = /((?:WC+[\/:])*)/.source.replace("WC", Zu);
  var V0 = /(WCOD+)?/.source.replace("WCOD", B0);
  var k0 = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Zu);
  var G0 = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Zu);
  var H0 = new RegExp("^" + z0 + V0 + k0 + G0 + "$");
  var W0 = ["material", "materials", "bones", "map"];
  var Yh = class {
    constructor(t, e, n2) {
      let i2 = n2 || le.parseTrackName(e);
      this._targetGroup = t, this._bindings = t.subscribe_(e, i2);
    }
    getValue(t, e) {
      this.bind();
      let n2 = this._targetGroup.nCachedObjects_, i2 = this._bindings[n2];
      i2 !== void 0 && i2.getValue(t, e);
    }
    setValue(t, e) {
      let n2 = this._bindings;
      for (let i2 = this._targetGroup.nCachedObjects_, r2 = n2.length; i2 !== r2; ++i2) n2[i2].setValue(t, e);
    }
    bind() {
      let t = this._bindings;
      for (let e = this._targetGroup.nCachedObjects_, n2 = t.length; e !== n2; ++e) t[e].bind();
    }
    unbind() {
      let t = this._bindings;
      for (let e = this._targetGroup.nCachedObjects_, n2 = t.length; e !== n2; ++e) t[e].unbind();
    }
  };
  var le = class s28 {
    constructor(t, e, n2) {
      this.path = e, this.parsedPath = n2 || s28.parseTrackName(e), this.node = s28.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(t, e, n2) {
      return t && t.isAnimationObjectGroup ? new s28.Composite(t, e, n2) : new s28(t, e, n2);
    }
    static sanitizeNodeName(t) {
      return t.replace(/\s/g, "_").replace(O0, "");
    }
    static parseTrackName(t) {
      let e = H0.exec(t);
      if (e === null) throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + t);
      let n2 = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] }, i2 = n2.nodeName && n2.nodeName.lastIndexOf(".");
      if (i2 !== void 0 && i2 !== -1) {
        let r2 = n2.nodeName.substring(i2 + 1);
        W0.indexOf(r2) !== -1 && (n2.nodeName = n2.nodeName.substring(0, i2), n2.objectName = r2);
      }
      if (n2.propertyName === null || n2.propertyName.length === 0) throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + t);
      return n2;
    }
    static findNode(t, e) {
      if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid) return t;
      if (t.skeleton) {
        let n2 = t.skeleton.getBoneByName(e);
        if (n2 !== void 0) return n2;
      }
      if (t.children) {
        let n2 = function(r2) {
          for (let a = 0; a < r2.length; a++) {
            let o3 = r2[a];
            if (o3.name === e || o3.uuid === e) return o3;
            let l2 = n2(o3.children);
            if (l2) return l2;
          }
          return null;
        }, i2 = n2(t.children);
        if (i2) return i2;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(t, e) {
      t[e] = this.targetObject[this.propertyName];
    }
    _getValue_array(t, e) {
      let n2 = this.resolvedProperty;
      for (let i2 = 0, r2 = n2.length; i2 !== r2; ++i2) t[e++] = n2[i2];
    }
    _getValue_arrayElement(t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t, e) {
      this.resolvedProperty.toArray(t, e);
    }
    _setValue_direct(t, e) {
      this.targetObject[this.propertyName] = t[e];
    }
    _setValue_direct_setNeedsUpdate(t, e) {
      this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
      this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(t, e) {
      let n2 = this.resolvedProperty;
      for (let i2 = 0, r2 = n2.length; i2 !== r2; ++i2) n2[i2] = t[e++];
    }
    _setValue_array_setNeedsUpdate(t, e) {
      let n2 = this.resolvedProperty;
      for (let i2 = 0, r2 = n2.length; i2 !== r2; ++i2) n2[i2] = t[e++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
      let n2 = this.resolvedProperty;
      for (let i2 = 0, r2 = n2.length; i2 !== r2; ++i2) n2[i2] = t[e++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
    }
    _setValue_arrayElement_setNeedsUpdate(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(t, e) {
      this.resolvedProperty.fromArray(t, e);
    }
    _setValue_fromArray_setNeedsUpdate(t, e) {
      this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
      this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(t, e) {
      this.bind(), this.getValue(t, e);
    }
    _setValue_unbound(t, e) {
      this.bind(), this.setValue(t, e);
    }
    bind() {
      let t = this.node, e = this.parsedPath, n2 = e.objectName, i2 = e.propertyName, r2 = e.propertyIndex;
      if (t || (t = s28.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
        ot("PropertyBinding: No target node found for track: " + this.path + ".");
        return;
      }
      if (n2) {
        let c3 = e.objectIndex;
        switch (n2) {
          case "materials":
            if (!t.material) {
              Rt("PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!t.material.materials) {
              Rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              return;
            }
            t = t.material.materials;
            break;
          case "bones":
            if (!t.skeleton) {
              Rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              return;
            }
            t = t.skeleton.bones;
            for (let h3 = 0; h3 < t.length; h3++) if (t[h3].name === c3) {
              c3 = h3;
              break;
            }
            break;
          case "map":
            if ("map" in t) {
              t = t.map;
              break;
            }
            if (!t.material) {
              Rt("PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!t.material.map) {
              Rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
              return;
            }
            t = t.material.map;
            break;
          default:
            if (t[n2] === void 0) {
              Rt("PropertyBinding: Can not bind to objectName of node undefined.", this);
              return;
            }
            t = t[n2];
        }
        if (c3 !== void 0) {
          if (t[c3] === void 0) {
            Rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
            return;
          }
          t = t[c3];
        }
      }
      let a = t[i2];
      if (a === void 0) {
        let c3 = e.nodeName;
        Rt("PropertyBinding: Trying to update property for track: " + c3 + "." + i2 + " but it wasn't found.", t);
        return;
      }
      let o3 = this.Versioning.None;
      this.targetObject = t, t.isMaterial === true ? o3 = this.Versioning.NeedsUpdate : t.isObject3D === true && (o3 = this.Versioning.MatrixWorldNeedsUpdate);
      let l2 = this.BindingType.Direct;
      if (r2 !== void 0) {
        if (i2 === "morphTargetInfluences") {
          if (!t.geometry) {
            Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
            return;
          }
          if (!t.geometry.morphAttributes) {
            Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          t.morphTargetDictionary[r2] !== void 0 && (r2 = t.morphTargetDictionary[r2]);
        }
        l2 = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r2;
      } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l2 = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l2 = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i2;
      this.getValue = this.GetterByBindingType[l2], this.setValue = this.SetterByBindingTypeAndVersioning[l2][o3];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  };
  le.Composite = Yh;
  le.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
  le.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
  le.prototype.GetterByBindingType = [le.prototype._getValue_direct, le.prototype._getValue_array, le.prototype._getValue_arrayElement, le.prototype._getValue_toArray];
  le.prototype.SetterByBindingTypeAndVersioning = [[le.prototype._setValue_direct, le.prototype._setValue_direct_setNeedsUpdate, le.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [le.prototype._setValue_array, le.prototype._setValue_array_setNeedsUpdate, le.prototype._setValue_array_setMatrixWorldNeedsUpdate], [le.prototype._setValue_arrayElement, le.prototype._setValue_arrayElement_setNeedsUpdate, le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [le.prototype._setValue_fromArray, le.prototype._setValue_fromArray_setNeedsUpdate, le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
  var X0 = new Float32Array(1);
  var yf = new Ht();
  var eu = class {
    constructor(t, e, n2 = 0, i2 = 1 / 0) {
      this.ray = new _i(t, e), this.near = n2, this.far = i2, this.camera = null, this.layers = new Ps(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
    }
    set(t, e) {
      this.ray.set(t, e);
    }
    setFromCamera(t, e) {
      e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, e.projectionMatrix.elements[14]).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : Rt("Raycaster: Unsupported camera type: " + e.type);
    }
    setFromXRController(t) {
      return yf.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(yf), this;
    }
    intersectObject(t, e = true, n2 = []) {
      return nu(t, this, n2, e), n2.sort(Mf), n2;
    }
    intersectObjects(t, e = true, n2 = []) {
      for (let i2 = 0, r2 = t.length; i2 < r2; i2++) nu(t[i2], this, n2, e);
      return n2.sort(Mf), n2;
    }
  };
  function Mf(s30, t) {
    return s30.distance - t.distance;
  }
  function nu(s30, t, e, n2) {
    let i2 = true;
    if (s30.layers.test(t.layers) && s30.raycast(t, e) === false && (i2 = false), i2 === true && n2 === true) {
      let r2 = s30.children;
      for (let a = 0, o3 = r2.length; a < o3; a++) nu(r2[a], t, e, true);
    }
  }
  var iu = class {
    constructor(t = true) {
      this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false, ot("Clock: This module has been deprecated. Please use THREE.Timer instead.");
    }
    start() {
      this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
    }
    stop() {
      this.getElapsedTime(), this.running = false, this.autoStart = false;
    }
    getElapsedTime() {
      return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
      let t = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        let e = performance.now();
        t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
      }
      return t;
    }
  };
  var su = class {
    constructor(t = 1, e = 0, n2 = 0) {
      this.radius = t, this.phi = e, this.theta = n2;
    }
    set(t, e, n2) {
      return this.radius = t, this.phi = e, this.theta = n2, this;
    }
    copy(t) {
      return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
    }
    makeSafe() {
      return this.phi = Vt(this.phi, 1e-6, Math.PI - 1e-6), this;
    }
    setFromVector3(t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z);
    }
    setFromCartesianCoords(t, e, n2) {
      return this.radius = Math.sqrt(t * t + e * e + n2 * n2), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n2), this.phi = Math.acos(Vt(e / this.radius, -1, 1))), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var _a7;
  var au = (_a7 = class {
    constructor(t, e, n2, i2) {
      this.elements = [1, 0, 0, 1], t !== void 0 && this.set(t, e, n2, i2);
    }
    identity() {
      return this.set(1, 0, 0, 1), this;
    }
    fromArray(t, e = 0) {
      for (let n2 = 0; n2 < 4; n2++) this.elements[n2] = t[n2 + e];
      return this;
    }
    set(t, e, n2, i2) {
      let r2 = this.elements;
      return r2[0] = t, r2[2] = e, r2[1] = n2, r2[3] = i2, this;
    }
  }, _a7.prototype.isMatrix2 = true, _a7);
  var Sf = new Q();
  var bf = new C();
  var Ka = new C();
  var Ts = new C();
  var As = new C();
  var ih = new C();
  var Y0 = new C();
  var Z0 = new C();
  var Tf = new C();
  var di = new C();
  var Qa = new Ht();
  var sh = new Ht();
  var J0 = new C();
  var Af = new St();
  var Ef = new St();
  var wf = new C();
  var ja = new C();
  var Cf = new C();
  var to = new C();
  var Me = new Vs();
  var eo = new Ue();
  var Rf = new C();
  var Su = class extends hn {
    constructor(t, e = null) {
      super(), this.object = t, this.domElement = e, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
    }
    connect(t) {
      if (t === void 0) {
        ot("Controls: connect() now requires an element.");
        return;
      }
      this.domElement !== null && this.disconnect(), this.domElement = t;
    }
    disconnect() {
    }
    dispose() {
    }
    update() {
    }
  };
  function fc(s30, t, e, n2) {
    let i2 = j0(n2);
    switch (e) {
      case Vu:
        return s30 * t;
      case Pl:
        return s30 * t / i2.components * i2.byteLength;
      case na:
        return s30 * t / i2.components * i2.byteLength;
      case bi:
        return s30 * t * 2 / i2.components * i2.byteLength;
      case Ll:
        return s30 * t * 2 / i2.components * i2.byteLength;
      case ku:
        return s30 * t * 3 / i2.components * i2.byteLength;
      case Ye:
        return s30 * t * 4 / i2.components * i2.byteLength;
      case Dl:
        return s30 * t * 4 / i2.components * i2.byteLength;
      case ia:
      case sa:
        return Math.floor((s30 + 3) / 4) * Math.floor((t + 3) / 4) * 8;
      case ra:
      case aa:
        return Math.floor((s30 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
      case Ul:
      case Ol:
        return Math.max(s30, 16) * Math.max(t, 8) / 4;
      case Nl:
      case Fl:
        return Math.max(s30, 8) * Math.max(t, 8) / 2;
      case Bl:
      case zl:
      case kl:
      case Gl:
        return Math.floor((s30 + 3) / 4) * Math.floor((t + 3) / 4) * 8;
      case Vl:
      case oa:
      case Hl:
        return Math.floor((s30 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
      case Wl:
        return Math.floor((s30 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
      case Xl:
        return Math.floor((s30 + 4) / 5) * Math.floor((t + 3) / 4) * 16;
      case ql:
        return Math.floor((s30 + 4) / 5) * Math.floor((t + 4) / 5) * 16;
      case Yl:
        return Math.floor((s30 + 5) / 6) * Math.floor((t + 4) / 5) * 16;
      case Zl:
        return Math.floor((s30 + 5) / 6) * Math.floor((t + 5) / 6) * 16;
      case Jl:
        return Math.floor((s30 + 7) / 8) * Math.floor((t + 4) / 5) * 16;
      case $l:
        return Math.floor((s30 + 7) / 8) * Math.floor((t + 5) / 6) * 16;
      case Kl:
        return Math.floor((s30 + 7) / 8) * Math.floor((t + 7) / 8) * 16;
      case Ql:
        return Math.floor((s30 + 9) / 10) * Math.floor((t + 4) / 5) * 16;
      case jl:
        return Math.floor((s30 + 9) / 10) * Math.floor((t + 5) / 6) * 16;
      case tc:
        return Math.floor((s30 + 9) / 10) * Math.floor((t + 7) / 8) * 16;
      case ec:
        return Math.floor((s30 + 9) / 10) * Math.floor((t + 9) / 10) * 16;
      case nc:
        return Math.floor((s30 + 11) / 12) * Math.floor((t + 9) / 10) * 16;
      case ic:
        return Math.floor((s30 + 11) / 12) * Math.floor((t + 11) / 12) * 16;
      case sc:
      case rc:
      case ac:
        return Math.ceil(s30 / 4) * Math.ceil(t / 4) * 16;
      case oc:
      case lc:
        return Math.ceil(s30 / 4) * Math.ceil(t / 4) * 8;
      case la:
      case cc:
        return Math.ceil(s30 / 4) * Math.ceil(t / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${e} format.`);
  }
  function j0(s30) {
    switch (s30) {
      case sn:
      case Fu:
        return { byteLength: 1, components: 1 };
      case Ws:
      case Ou:
      case zn:
        return { byteLength: 2, components: 1 };
      case Rl:
      case Il:
        return { byteLength: 2, components: 4 };
      case mn:
      case Cl:
      case qe:
        return { byteLength: 4, components: 1 };
      case Bu:
      case zu:
        return { byteLength: 4, components: 3 };
    }
    throw new Error(`THREE.TextureUtils: Unknown texture type ${s30}.`);
  }
  typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "185" } }));
  typeof window < "u" && (window.__THREE__ ? ot("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "185");
  function Kp() {
    let s30 = null, t = false, e = null, n2 = null;
    function i2(r2, a) {
      e(r2, a), n2 = s30.requestAnimationFrame(i2);
    }
    return { start: function() {
      t !== true && e !== null && s30 !== null && (n2 = s30.requestAnimationFrame(i2), t = true);
    }, stop: function() {
      s30 !== null && s30.cancelAnimationFrame(n2), t = false;
    }, setAnimationLoop: function(r2) {
      e = r2;
    }, setContext: function(r2) {
      s30 = r2;
    } };
  }
  function t_(s30) {
    let t = /* @__PURE__ */ new WeakMap();
    function e(o3, l2) {
      let c3 = o3.array, h3 = o3.usage, d4 = c3.byteLength, u3 = s30.createBuffer();
      s30.bindBuffer(l2, u3), s30.bufferData(l2, c3, h3), o3.onUploadCallback();
      let f3;
      if (c3 instanceof Float32Array) f3 = s30.FLOAT;
      else if (typeof Float16Array < "u" && c3 instanceof Float16Array) f3 = s30.HALF_FLOAT;
      else if (c3 instanceof Uint16Array) o3.isFloat16BufferAttribute ? f3 = s30.HALF_FLOAT : f3 = s30.UNSIGNED_SHORT;
      else if (c3 instanceof Int16Array) f3 = s30.SHORT;
      else if (c3 instanceof Uint32Array) f3 = s30.UNSIGNED_INT;
      else if (c3 instanceof Int32Array) f3 = s30.INT;
      else if (c3 instanceof Int8Array) f3 = s30.BYTE;
      else if (c3 instanceof Uint8Array) f3 = s30.UNSIGNED_BYTE;
      else if (c3 instanceof Uint8ClampedArray) f3 = s30.UNSIGNED_BYTE;
      else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c3);
      return { buffer: u3, type: f3, bytesPerElement: c3.BYTES_PER_ELEMENT, version: o3.version, size: d4 };
    }
    function n2(o3, l2, c3) {
      let h3 = l2.array, d4 = l2.updateRanges;
      if (s30.bindBuffer(c3, o3), d4.length === 0) s30.bufferSubData(c3, 0, h3);
      else {
        d4.sort((f3, p2) => f3.start - p2.start);
        let u3 = 0;
        for (let f3 = 1; f3 < d4.length; f3++) {
          let p2 = d4[u3], _ = d4[f3];
          _.start <= p2.start + p2.count + 1 ? p2.count = Math.max(p2.count, _.start + _.count - p2.start) : (++u3, d4[u3] = _);
        }
        d4.length = u3 + 1;
        for (let f3 = 0, p2 = d4.length; f3 < p2; f3++) {
          let _ = d4[f3];
          s30.bufferSubData(c3, _.start * h3.BYTES_PER_ELEMENT, h3, _.start, _.count);
        }
        l2.clearUpdateRanges();
      }
      l2.onUploadCallback();
    }
    function i2(o3) {
      return o3.isInterleavedBufferAttribute && (o3 = o3.data), t.get(o3);
    }
    function r2(o3) {
      o3.isInterleavedBufferAttribute && (o3 = o3.data);
      let l2 = t.get(o3);
      l2 && (s30.deleteBuffer(l2.buffer), t.delete(o3));
    }
    function a(o3, l2) {
      if (o3.isInterleavedBufferAttribute && (o3 = o3.data), o3.isGLBufferAttribute) {
        let h3 = t.get(o3);
        (!h3 || h3.version < o3.version) && t.set(o3, { buffer: o3.buffer, type: o3.type, bytesPerElement: o3.elementSize, version: o3.version });
        return;
      }
      let c3 = t.get(o3);
      if (c3 === void 0) t.set(o3, e(o3, l2));
      else if (c3.version < o3.version) {
        if (c3.size !== o3.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        n2(c3.buffer, o3, l2), c3.version = o3.version;
      }
    }
    return { get: i2, remove: r2, update: a };
  }
  var e_ = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`;
  var n_ = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`;
  var i_ = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`;
  var s_ = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;
  var r_ = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`;
  var a_ = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`;
  var o_ = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`;
  var l_ = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`;
  var c_ = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`;
  var h_ = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`;
  var u_ = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`;
  var d_ = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`;
  var f_ = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`;
  var p_ = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`;
  var m_ = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`;
  var g_ = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`;
  var __ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`;
  var x_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`;
  var v_ = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`;
  var y_ = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`;
  var M_ = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`;
  var S_ = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`;
  var b_ = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`;
  var T_ = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`;
  var A_ = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`;
  var E_ = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`;
  var w_ = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`;
  var C_ = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`;
  var R_ = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`;
  var I_ = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`;
  var P_ = "gl_FragColor = linearToOutputTexel( gl_FragColor );";
  var L_ = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`;
  var D_ = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`;
  var N_ = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`;
  var U_ = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`;
  var F_ = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`;
  var O_ = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`;
  var B_ = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`;
  var z_ = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`;
  var V_ = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;
  var k_ = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`;
  var G_ = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`;
  var H_ = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`;
  var W_ = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`;
  var X_ = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`;
  var q_ = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`;
  var Y_ = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`;
  var Z_ = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`;
  var J_ = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`;
  var $_ = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`;
  var K_ = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`;
  var Q_ = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`;
  var j_ = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`;
  var tx = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`;
  var ex = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`;
  var nx = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`;
  var ix = `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`;
  var sx = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`;
  var rx = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;
  var ax = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;
  var ox = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`;
  var lx = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`;
  var cx = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`;
  var hx = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`;
  var ux = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;
  var dx = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`;
  var fx = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`;
  var px = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`;
  var mx = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`;
  var gx = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;
  var _x = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`;
  var xx = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;
  var vx = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`;
  var yx = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`;
  var Mx = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;
  var Sx = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;
  var bx = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`;
  var Tx = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`;
  var Ax = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`;
  var Ex = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`;
  var wx = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`;
  var Cx = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`;
  var Rx = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`;
  var Ix = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`;
  var Px = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`;
  var Lx = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`;
  var Dx = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`;
  var Nx = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`;
  var Ux = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`;
  var Fx = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`;
  var Ox = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`;
  var Bx = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`;
  var zx = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`;
  var Vx = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`;
  var kx = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`;
  var Gx = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`;
  var Hx = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`;
  var Wx = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`;
  var Xx = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`;
  var qx = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`;
  var Yx = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`;
  var Zx = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`;
  var Jx = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`;
  var $x = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`;
  var Kx = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;
  var Qx = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;
  var jx = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;
  var tv = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
  var ev = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`;
  var nv = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
  var iv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;
  var sv = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
  var rv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;
  var av = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
  var ov = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`;
  var lv = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`;
  var cv = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`;
  var hv = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`;
  var uv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`;
  var dv = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
  var fv = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
  var pv = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
  var mv = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`;
  var gv = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
  var _v = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
  var xv = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
  var vv = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`;
  var yv = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
  var Mv = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`;
  var Sv = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`;
  var bv = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
  var Tv = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
  var Av = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`;
  var Ev = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
  var wv = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
  var Cv = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
  var Rv = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`;
  var Iv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
  var Pv = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
  var Lv = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
  var Dv = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
  var Nv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;
  var Kt = { alphahash_fragment: e_, alphahash_pars_fragment: n_, alphamap_fragment: i_, alphamap_pars_fragment: s_, alphatest_fragment: r_, alphatest_pars_fragment: a_, aomap_fragment: o_, aomap_pars_fragment: l_, batching_pars_vertex: c_, batching_vertex: h_, begin_vertex: u_, beginnormal_vertex: d_, bsdfs: f_, iridescence_fragment: p_, bumpmap_pars_fragment: m_, clipping_planes_fragment: g_, clipping_planes_pars_fragment: __, clipping_planes_pars_vertex: x_, clipping_planes_vertex: v_, color_fragment: y_, color_pars_fragment: M_, color_pars_vertex: S_, color_vertex: b_, common: T_, cube_uv_reflection_fragment: A_, defaultnormal_vertex: E_, displacementmap_pars_vertex: w_, displacementmap_vertex: C_, emissivemap_fragment: R_, emissivemap_pars_fragment: I_, colorspace_fragment: P_, colorspace_pars_fragment: L_, envmap_fragment: D_, envmap_common_pars_fragment: N_, envmap_pars_fragment: U_, envmap_pars_vertex: F_, envmap_physical_pars_fragment: Y_, envmap_vertex: O_, fog_vertex: B_, fog_pars_vertex: z_, fog_fragment: V_, fog_pars_fragment: k_, gradientmap_pars_fragment: G_, lightmap_pars_fragment: H_, lights_lambert_fragment: W_, lights_lambert_pars_fragment: X_, lights_pars_begin: q_, lights_toon_fragment: Z_, lights_toon_pars_fragment: J_, lights_phong_fragment: $_, lights_phong_pars_fragment: K_, lights_physical_fragment: Q_, lights_physical_pars_fragment: j_, lights_fragment_begin: tx, lights_fragment_maps: ex, lights_fragment_end: nx, lightprobes_pars_fragment: ix, logdepthbuf_fragment: sx, logdepthbuf_pars_fragment: rx, logdepthbuf_pars_vertex: ax, logdepthbuf_vertex: ox, map_fragment: lx, map_pars_fragment: cx, map_particle_fragment: hx, map_particle_pars_fragment: ux, metalnessmap_fragment: dx, metalnessmap_pars_fragment: fx, morphinstance_vertex: px, morphcolor_vertex: mx, morphnormal_vertex: gx, morphtarget_pars_vertex: _x, morphtarget_vertex: xx, normal_fragment_begin: vx, normal_fragment_maps: yx, normal_pars_fragment: Mx, normal_pars_vertex: Sx, normal_vertex: bx, normalmap_pars_fragment: Tx, clearcoat_normal_fragment_begin: Ax, clearcoat_normal_fragment_maps: Ex, clearcoat_pars_fragment: wx, iridescence_pars_fragment: Cx, opaque_fragment: Rx, packing: Ix, premultiplied_alpha_fragment: Px, project_vertex: Lx, dithering_fragment: Dx, dithering_pars_fragment: Nx, roughnessmap_fragment: Ux, roughnessmap_pars_fragment: Fx, shadowmap_pars_fragment: Ox, shadowmap_pars_vertex: Bx, shadowmap_vertex: zx, shadowmask_pars_fragment: Vx, skinbase_vertex: kx, skinning_pars_vertex: Gx, skinning_vertex: Hx, skinnormal_vertex: Wx, specularmap_fragment: Xx, specularmap_pars_fragment: qx, tonemapping_fragment: Yx, tonemapping_pars_fragment: Zx, transmission_fragment: Jx, transmission_pars_fragment: $x, uv_pars_fragment: Kx, uv_pars_vertex: Qx, uv_vertex: jx, worldpos_vertex: tv, background_vert: ev, background_frag: nv, backgroundCube_vert: iv, backgroundCube_frag: sv, cube_vert: rv, cube_frag: av, depth_vert: ov, depth_frag: lv, distance_vert: cv, distance_frag: hv, equirect_vert: uv, equirect_frag: dv, linedashed_vert: fv, linedashed_frag: pv, meshbasic_vert: mv, meshbasic_frag: gv, meshlambert_vert: _v, meshlambert_frag: xv, meshmatcap_vert: vv, meshmatcap_frag: yv, meshnormal_vert: Mv, meshnormal_frag: Sv, meshphong_vert: bv, meshphong_frag: Tv, meshphysical_vert: Av, meshphysical_frag: Ev, meshtoon_vert: wv, meshtoon_frag: Cv, points_vert: Rv, points_frag: Iv, shadow_vert: Pv, shadow_frag: Lv, sprite_vert: Dv, sprite_frag: Nv };
  var _t = { common: { diffuse: { value: new St(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Xt() }, alphaMap: { value: null }, alphaMapTransform: { value: new Xt() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Xt() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Xt() }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Xt() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Xt() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Xt() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Xt() }, normalScale: { value: new Q(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Xt() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Xt() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Xt() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Xt() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new St(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null }, probesSH: { value: null }, probesMin: { value: new C() }, probesMax: { value: new C() }, probesResolution: { value: new C() } }, points: { diffuse: { value: new St(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Xt() }, alphaTest: { value: 0 }, uvTransform: { value: new Xt() } }, sprite: { diffuse: { value: new St(16777215) }, opacity: { value: 1 }, center: { value: new Q(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Xt() }, alphaMap: { value: null }, alphaMapTransform: { value: new Xt() }, alphaTest: { value: 0 } } };
  var kn = { basic: { uniforms: He([_t.common, _t.specularmap, _t.envmap, _t.aomap, _t.lightmap, _t.fog]), vertexShader: Kt.meshbasic_vert, fragmentShader: Kt.meshbasic_frag }, lambert: { uniforms: He([_t.common, _t.specularmap, _t.envmap, _t.aomap, _t.lightmap, _t.emissivemap, _t.bumpmap, _t.normalmap, _t.displacementmap, _t.fog, _t.lights, { emissive: { value: new St(0) }, envMapIntensity: { value: 1 } }]), vertexShader: Kt.meshlambert_vert, fragmentShader: Kt.meshlambert_frag }, phong: { uniforms: He([_t.common, _t.specularmap, _t.envmap, _t.aomap, _t.lightmap, _t.emissivemap, _t.bumpmap, _t.normalmap, _t.displacementmap, _t.fog, _t.lights, { emissive: { value: new St(0) }, specular: { value: new St(1118481) }, shininess: { value: 30 }, envMapIntensity: { value: 1 } }]), vertexShader: Kt.meshphong_vert, fragmentShader: Kt.meshphong_frag }, standard: { uniforms: He([_t.common, _t.envmap, _t.aomap, _t.lightmap, _t.emissivemap, _t.bumpmap, _t.normalmap, _t.displacementmap, _t.roughnessmap, _t.metalnessmap, _t.fog, _t.lights, { emissive: { value: new St(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Kt.meshphysical_vert, fragmentShader: Kt.meshphysical_frag }, toon: { uniforms: He([_t.common, _t.aomap, _t.lightmap, _t.emissivemap, _t.bumpmap, _t.normalmap, _t.displacementmap, _t.gradientmap, _t.fog, _t.lights, { emissive: { value: new St(0) } }]), vertexShader: Kt.meshtoon_vert, fragmentShader: Kt.meshtoon_frag }, matcap: { uniforms: He([_t.common, _t.bumpmap, _t.normalmap, _t.displacementmap, _t.fog, { matcap: { value: null } }]), vertexShader: Kt.meshmatcap_vert, fragmentShader: Kt.meshmatcap_frag }, points: { uniforms: He([_t.points, _t.fog]), vertexShader: Kt.points_vert, fragmentShader: Kt.points_frag }, dashed: { uniforms: He([_t.common, _t.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Kt.linedashed_vert, fragmentShader: Kt.linedashed_frag }, depth: { uniforms: He([_t.common, _t.displacementmap]), vertexShader: Kt.depth_vert, fragmentShader: Kt.depth_frag }, normal: { uniforms: He([_t.common, _t.bumpmap, _t.normalmap, _t.displacementmap, { opacity: { value: 1 } }]), vertexShader: Kt.meshnormal_vert, fragmentShader: Kt.meshnormal_frag }, sprite: { uniforms: He([_t.sprite, _t.fog]), vertexShader: Kt.sprite_vert, fragmentShader: Kt.sprite_frag }, background: { uniforms: { uvTransform: { value: new Xt() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Kt.background_vert, fragmentShader: Kt.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Xt() } }, vertexShader: Kt.backgroundCube_vert, fragmentShader: Kt.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Kt.cube_vert, fragmentShader: Kt.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Kt.equirect_vert, fragmentShader: Kt.equirect_frag }, distance: { uniforms: He([_t.common, _t.displacementmap, { referencePosition: { value: new C() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Kt.distance_vert, fragmentShader: Kt.distance_frag }, shadow: { uniforms: He([_t.lights, _t.fog, { color: { value: new St(0) }, opacity: { value: 1 } }]), vertexShader: Kt.shadow_vert, fragmentShader: Kt.shadow_frag } };
  kn.physical = { uniforms: He([kn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Xt() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Xt() }, clearcoatNormalScale: { value: new Q(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Xt() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Xt() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Xt() }, sheen: { value: 0 }, sheenColor: { value: new St(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Xt() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Xt() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Xt() }, transmissionSamplerSize: { value: new Q() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Xt() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new St(0) }, specularColor: { value: new St(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Xt() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Xt() }, anisotropyVector: { value: new Q() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Xt() } }]), vertexShader: Kt.meshphysical_vert, fragmentShader: Kt.meshphysical_frag };
  var pc = { r: 0, b: 0, g: 0 };
  var Uv = new Ht();
  var Qp = new Xt();
  Qp.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
  function Fv(s30, t, e, n2, i2, r2) {
    let a = new St(0), o3 = i2 === true ? 0 : 1, l2, c3, h3 = null, d4 = 0, u3 = null;
    function f3(M2) {
      let S2 = M2.isScene === true ? M2.background : null;
      if (S2 && S2.isTexture) {
        let v = M2.backgroundBlurriness > 0;
        S2 = t.get(S2, v);
      }
      return S2;
    }
    function p2(M2) {
      let S2 = false, v = f3(M2);
      v === null ? g(a, o3) : v && v.isColor && (g(v, 1), S2 = true);
      let E = s30.xr.getEnvironmentBlendMode();
      E === "additive" ? e.buffers.color.setClear(0, 0, 0, 1, r2) : E === "alpha-blend" && e.buffers.color.setClear(0, 0, 0, 0, r2), (s30.autoClear || S2) && (e.buffers.depth.setTest(true), e.buffers.depth.setMask(true), e.buffers.color.setMask(true), s30.clear(s30.autoClearColor, s30.autoClearDepth, s30.autoClearStencil));
    }
    function _(M2, S2) {
      let v = f3(S2);
      v && (v.isCubeTexture || v.mapping === Gs) ? (c3 === void 0 && (c3 = new Se(new Ji(1, 1, 1), new en({ name: "BackgroundCubeMaterial", uniforms: ns(kn.backgroundCube.uniforms), vertexShader: kn.backgroundCube.vertexShader, fragmentShader: kn.backgroundCube.fragmentShader, side: Je, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c3.geometry.deleteAttribute("normal"), c3.geometry.deleteAttribute("uv"), c3.onBeforeRender = function(E, T2, R2) {
        this.matrixWorld.copyPosition(R2.matrixWorld);
      }, Object.defineProperty(c3.material, "envMap", { get: function() {
        return this.uniforms.envMap.value;
      } }), n2.update(c3)), c3.material.uniforms.envMap.value = v, c3.material.uniforms.backgroundBlurriness.value = S2.backgroundBlurriness, c3.material.uniforms.backgroundIntensity.value = S2.backgroundIntensity, c3.material.uniforms.backgroundRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(S2.backgroundRotation)).transpose(), v.isCubeTexture && v.isRenderTargetTexture === false && c3.material.uniforms.backgroundRotation.value.premultiply(Qp), c3.material.toneMapped = ee.getTransfer(v.colorSpace) !== ae, (h3 !== v || d4 !== v.version || u3 !== s30.toneMapping) && (c3.material.needsUpdate = true, h3 = v, d4 = v.version, u3 = s30.toneMapping), c3.layers.enableAll(), M2.unshift(c3, c3.geometry, c3.material, 0, 0, null)) : v && v.isTexture && (l2 === void 0 && (l2 = new Se(new Os(2, 2), new en({ name: "BackgroundMaterial", uniforms: ns(kn.background.uniforms), vertexShader: kn.background.vertexShader, fragmentShader: kn.background.fragmentShader, side: $n, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l2.geometry.deleteAttribute("normal"), Object.defineProperty(l2.material, "map", { get: function() {
        return this.uniforms.t2D.value;
      } }), n2.update(l2)), l2.material.uniforms.t2D.value = v, l2.material.uniforms.backgroundIntensity.value = S2.backgroundIntensity, l2.material.toneMapped = ee.getTransfer(v.colorSpace) !== ae, v.matrixAutoUpdate === true && v.updateMatrix(), l2.material.uniforms.uvTransform.value.copy(v.matrix), (h3 !== v || d4 !== v.version || u3 !== s30.toneMapping) && (l2.material.needsUpdate = true, h3 = v, d4 = v.version, u3 = s30.toneMapping), l2.layers.enableAll(), M2.unshift(l2, l2.geometry, l2.material, 0, 0, null));
    }
    function g(M2, S2) {
      M2.getRGB(pc, qu(s30)), e.buffers.color.setClear(pc.r, pc.g, pc.b, S2, r2);
    }
    function m2() {
      c3 !== void 0 && (c3.geometry.dispose(), c3.material.dispose(), c3 = void 0), l2 !== void 0 && (l2.geometry.dispose(), l2.material.dispose(), l2 = void 0);
    }
    return { getClearColor: function() {
      return a;
    }, setClearColor: function(M2, S2 = 1) {
      a.set(M2), o3 = S2, g(a, o3);
    }, getClearAlpha: function() {
      return o3;
    }, setClearAlpha: function(M2) {
      o3 = M2, g(a, o3);
    }, render: p2, addToRenderList: _, dispose: m2 };
  }
  function Ov(s30, t) {
    let e = s30.getParameter(s30.MAX_VERTEX_ATTRIBS), n2 = {}, i2 = u3(null), r2 = i2, a = false;
    function o3(P3, N2, H2, X, O) {
      let W = false, G = d4(P3, X, H2, N2);
      r2 !== G && (r2 = G, c3(r2.object)), W = f3(P3, X, H2, O), W && p2(P3, X, H2, O), O !== null && t.update(O, s30.ELEMENT_ARRAY_BUFFER), (W || a) && (a = false, v(P3, N2, H2, X), O !== null && s30.bindBuffer(s30.ELEMENT_ARRAY_BUFFER, t.get(O).buffer));
    }
    function l2() {
      return s30.createVertexArray();
    }
    function c3(P3) {
      return s30.bindVertexArray(P3);
    }
    function h3(P3) {
      return s30.deleteVertexArray(P3);
    }
    function d4(P3, N2, H2, X) {
      let O = X.wireframe === true, W = n2[N2.id];
      W === void 0 && (W = {}, n2[N2.id] = W);
      let G = P3.isInstancedMesh === true ? P3.id : 0, K2 = W[G];
      K2 === void 0 && (K2 = {}, W[G] = K2);
      let it = K2[H2.id];
      it === void 0 && (it = {}, K2[H2.id] = it);
      let ut = it[O];
      return ut === void 0 && (ut = u3(l2()), it[O] = ut), ut;
    }
    function u3(P3) {
      let N2 = [], H2 = [], X = [];
      for (let O = 0; O < e; O++) N2[O] = 0, H2[O] = 0, X[O] = 0;
      return { geometry: null, program: null, wireframe: false, newAttributes: N2, enabledAttributes: H2, attributeDivisors: X, object: P3, attributes: {}, index: null };
    }
    function f3(P3, N2, H2, X) {
      let O = r2.attributes, W = N2.attributes, G = 0, K2 = H2.getAttributes();
      for (let it in K2) if (K2[it].location >= 0) {
        let lt = O[it], bt = W[it];
        if (bt === void 0 && (it === "instanceMatrix" && P3.instanceMatrix && (bt = P3.instanceMatrix), it === "instanceColor" && P3.instanceColor && (bt = P3.instanceColor)), lt === void 0 || lt.attribute !== bt || bt && lt.data !== bt.data) return true;
        G++;
      }
      return r2.attributesNum !== G || r2.index !== X;
    }
    function p2(P3, N2, H2, X) {
      let O = {}, W = N2.attributes, G = 0, K2 = H2.getAttributes();
      for (let it in K2) if (K2[it].location >= 0) {
        let lt = W[it];
        lt === void 0 && (it === "instanceMatrix" && P3.instanceMatrix && (lt = P3.instanceMatrix), it === "instanceColor" && P3.instanceColor && (lt = P3.instanceColor));
        let bt = {};
        bt.attribute = lt, lt && lt.data && (bt.data = lt.data), O[it] = bt, G++;
      }
      r2.attributes = O, r2.attributesNum = G, r2.index = X;
    }
    function _() {
      let P3 = r2.newAttributes;
      for (let N2 = 0, H2 = P3.length; N2 < H2; N2++) P3[N2] = 0;
    }
    function g(P3) {
      m2(P3, 0);
    }
    function m2(P3, N2) {
      let H2 = r2.newAttributes, X = r2.enabledAttributes, O = r2.attributeDivisors;
      H2[P3] = 1, X[P3] === 0 && (s30.enableVertexAttribArray(P3), X[P3] = 1), O[P3] !== N2 && (s30.vertexAttribDivisor(P3, N2), O[P3] = N2);
    }
    function M2() {
      let P3 = r2.newAttributes, N2 = r2.enabledAttributes;
      for (let H2 = 0, X = N2.length; H2 < X; H2++) N2[H2] !== P3[H2] && (s30.disableVertexAttribArray(H2), N2[H2] = 0);
    }
    function S2(P3, N2, H2, X, O, W, G) {
      G === true ? s30.vertexAttribIPointer(P3, N2, H2, O, W) : s30.vertexAttribPointer(P3, N2, H2, X, O, W);
    }
    function v(P3, N2, H2, X) {
      _();
      let O = X.attributes, W = H2.getAttributes(), G = N2.defaultAttributeValues;
      for (let K2 in W) {
        let it = W[K2];
        if (it.location >= 0) {
          let ut = O[K2];
          if (ut === void 0 && (K2 === "instanceMatrix" && P3.instanceMatrix && (ut = P3.instanceMatrix), K2 === "instanceColor" && P3.instanceColor && (ut = P3.instanceColor)), ut !== void 0) {
            let lt = ut.normalized, bt = ut.itemSize, Qt = t.get(ut);
            if (Qt === void 0) continue;
            let de = Qt.buffer, ne = Qt.type, J = Qt.bytesPerElement, ct = ne === s30.INT || ne === s30.UNSIGNED_INT || ut.gpuType === Cl;
            if (ut.isInterleavedBufferAttribute) {
              let st = ut.data, Nt = st.stride, kt = ut.offset;
              if (st.isInstancedInterleavedBuffer) {
                for (let Ot = 0; Ot < it.locationSize; Ot++) m2(it.location + Ot, st.meshPerAttribute);
                P3.isInstancedMesh !== true && X._maxInstanceCount === void 0 && (X._maxInstanceCount = st.meshPerAttribute * st.count);
              } else for (let Ot = 0; Ot < it.locationSize; Ot++) g(it.location + Ot);
              s30.bindBuffer(s30.ARRAY_BUFFER, de);
              for (let Ot = 0; Ot < it.locationSize; Ot++) S2(it.location + Ot, bt / it.locationSize, ne, lt, Nt * J, (kt + bt / it.locationSize * Ot) * J, ct);
            } else {
              if (ut.isInstancedBufferAttribute) {
                for (let st = 0; st < it.locationSize; st++) m2(it.location + st, ut.meshPerAttribute);
                P3.isInstancedMesh !== true && X._maxInstanceCount === void 0 && (X._maxInstanceCount = ut.meshPerAttribute * ut.count);
              } else for (let st = 0; st < it.locationSize; st++) g(it.location + st);
              s30.bindBuffer(s30.ARRAY_BUFFER, de);
              for (let st = 0; st < it.locationSize; st++) S2(it.location + st, bt / it.locationSize, ne, lt, bt * J, bt / it.locationSize * st * J, ct);
            }
          } else if (G !== void 0) {
            let lt = G[K2];
            if (lt !== void 0) switch (lt.length) {
              case 2:
                s30.vertexAttrib2fv(it.location, lt);
                break;
              case 3:
                s30.vertexAttrib3fv(it.location, lt);
                break;
              case 4:
                s30.vertexAttrib4fv(it.location, lt);
                break;
              default:
                s30.vertexAttrib1fv(it.location, lt);
            }
          }
        }
      }
      M2();
    }
    function E() {
      A3();
      for (let P3 in n2) {
        let N2 = n2[P3];
        for (let H2 in N2) {
          let X = N2[H2];
          for (let O in X) {
            let W = X[O];
            for (let G in W) h3(W[G].object), delete W[G];
            delete X[O];
          }
        }
        delete n2[P3];
      }
    }
    function T2(P3) {
      if (n2[P3.id] === void 0) return;
      let N2 = n2[P3.id];
      for (let H2 in N2) {
        let X = N2[H2];
        for (let O in X) {
          let W = X[O];
          for (let G in W) h3(W[G].object), delete W[G];
          delete X[O];
        }
      }
      delete n2[P3.id];
    }
    function R2(P3) {
      for (let N2 in n2) {
        let H2 = n2[N2];
        for (let X in H2) {
          let O = H2[X];
          if (O[P3.id] === void 0) continue;
          let W = O[P3.id];
          for (let G in W) h3(W[G].object), delete W[G];
          delete O[P3.id];
        }
      }
    }
    function x3(P3) {
      for (let N2 in n2) {
        let H2 = n2[N2], X = P3.isInstancedMesh === true ? P3.id : 0, O = H2[X];
        if (O !== void 0) {
          for (let W in O) {
            let G = O[W];
            for (let K2 in G) h3(G[K2].object), delete G[K2];
            delete O[W];
          }
          delete H2[X], Object.keys(H2).length === 0 && delete n2[N2];
        }
      }
    }
    function A3() {
      I2(), a = true, r2 !== i2 && (r2 = i2, c3(r2.object));
    }
    function I2() {
      i2.geometry = null, i2.program = null, i2.wireframe = false;
    }
    return { setup: o3, reset: A3, resetDefaultState: I2, dispose: E, releaseStatesOfGeometry: T2, releaseStatesOfObject: x3, releaseStatesOfProgram: R2, initAttributes: _, enableAttribute: g, disableUnusedAttributes: M2 };
  }
  function Bv(s30, t, e) {
    let n2;
    function i2(l2) {
      n2 = l2;
    }
    function r2(l2, c3) {
      s30.drawArrays(n2, l2, c3), e.update(c3, n2, 1);
    }
    function a(l2, c3, h3) {
      h3 !== 0 && (s30.drawArraysInstanced(n2, l2, c3, h3), e.update(c3, n2, h3));
    }
    function o3(l2, c3, h3) {
      if (h3 === 0) return;
      t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n2, l2, 0, c3, 0, h3);
      let u3 = 0;
      for (let f3 = 0; f3 < h3; f3++) u3 += c3[f3];
      e.update(u3, n2, 1);
    }
    this.setMode = i2, this.render = r2, this.renderInstances = a, this.renderMultiDraw = o3;
  }
  function zv(s30, t, e, n2) {
    let i2;
    function r2() {
      if (i2 !== void 0) return i2;
      if (t.has("EXT_texture_filter_anisotropic") === true) {
        let R2 = t.get("EXT_texture_filter_anisotropic");
        i2 = s30.getParameter(R2.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else i2 = 0;
      return i2;
    }
    function a(R2) {
      return !(R2 !== Ye && n2.convert(R2) !== s30.getParameter(s30.IMPLEMENTATION_COLOR_READ_FORMAT));
    }
    function o3(R2) {
      let x3 = R2 === zn && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
      return !(R2 !== sn && n2.convert(R2) !== s30.getParameter(s30.IMPLEMENTATION_COLOR_READ_TYPE) && R2 !== qe && !x3);
    }
    function l2(R2) {
      if (R2 === "highp") {
        if (s30.getShaderPrecisionFormat(s30.VERTEX_SHADER, s30.HIGH_FLOAT).precision > 0 && s30.getShaderPrecisionFormat(s30.FRAGMENT_SHADER, s30.HIGH_FLOAT).precision > 0) return "highp";
        R2 = "mediump";
      }
      return R2 === "mediump" && s30.getShaderPrecisionFormat(s30.VERTEX_SHADER, s30.MEDIUM_FLOAT).precision > 0 && s30.getShaderPrecisionFormat(s30.FRAGMENT_SHADER, s30.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let c3 = e.precision !== void 0 ? e.precision : "highp", h3 = l2(c3);
    h3 !== c3 && (ot("WebGLRenderer:", c3, "not supported, using", h3, "instead."), c3 = h3);
    let d4 = e.logarithmicDepthBuffer === true, u3 = e.reversedDepthBuffer === true && t.has("EXT_clip_control");
    e.reversedDepthBuffer === true && u3 === false && ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
    let f3 = s30.getParameter(s30.MAX_TEXTURE_IMAGE_UNITS), p2 = s30.getParameter(s30.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = s30.getParameter(s30.MAX_TEXTURE_SIZE), g = s30.getParameter(s30.MAX_CUBE_MAP_TEXTURE_SIZE), m2 = s30.getParameter(s30.MAX_VERTEX_ATTRIBS), M2 = s30.getParameter(s30.MAX_VERTEX_UNIFORM_VECTORS), S2 = s30.getParameter(s30.MAX_VARYING_VECTORS), v = s30.getParameter(s30.MAX_FRAGMENT_UNIFORM_VECTORS), E = s30.getParameter(s30.MAX_SAMPLES), T2 = s30.getParameter(s30.SAMPLES);
    return { isWebGL2: true, getMaxAnisotropy: r2, getMaxPrecision: l2, textureFormatReadable: a, textureTypeReadable: o3, precision: c3, logarithmicDepthBuffer: d4, reversedDepthBuffer: u3, maxTextures: f3, maxVertexTextures: p2, maxTextureSize: _, maxCubemapSize: g, maxAttributes: m2, maxVertexUniforms: M2, maxVaryings: S2, maxFragmentUniforms: v, maxSamples: E, samples: T2 };
  }
  function Vv(s30) {
    let t = this, e = null, n2 = 0, i2 = false, r2 = false, a = new wn(), o3 = new Xt(), l2 = { value: null, needsUpdate: false };
    this.uniform = l2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d4, u3) {
      let f3 = d4.length !== 0 || u3 || n2 !== 0 || i2;
      return i2 = u3, n2 = d4.length, f3;
    }, this.beginShadows = function() {
      r2 = true, h3(null);
    }, this.endShadows = function() {
      r2 = false;
    }, this.setGlobalState = function(d4, u3) {
      e = h3(d4, u3, 0);
    }, this.setState = function(d4, u3, f3) {
      let p2 = d4.clippingPlanes, _ = d4.clipIntersection, g = d4.clipShadows, m2 = s30.get(d4);
      if (!i2 || p2 === null || p2.length === 0 || r2 && !g) r2 ? h3(null) : c3();
      else {
        let M2 = r2 ? 0 : n2, S2 = M2 * 4, v = m2.clippingState || null;
        l2.value = v, v = h3(p2, u3, S2, f3);
        for (let E = 0; E !== S2; ++E) v[E] = e[E];
        m2.clippingState = v, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += M2;
      }
    };
    function c3() {
      l2.value !== e && (l2.value = e, l2.needsUpdate = n2 > 0), t.numPlanes = n2, t.numIntersection = 0;
    }
    function h3(d4, u3, f3, p2) {
      let _ = d4 !== null ? d4.length : 0, g = null;
      if (_ !== 0) {
        if (g = l2.value, p2 !== true || g === null) {
          let m2 = f3 + _ * 4, M2 = u3.matrixWorldInverse;
          o3.getNormalMatrix(M2), (g === null || g.length < m2) && (g = new Float32Array(m2));
          for (let S2 = 0, v = f3; S2 !== _; ++S2, v += 4) a.copy(d4[S2]).applyMatrix4(M2, o3), a.normal.toArray(g, v), g[v + 3] = a.constant;
        }
        l2.value = g, l2.needsUpdate = true;
      }
      return t.numPlanes = _, t.numIntersection = 0, g;
    }
  }
  var Ti = 4;
  var Cp = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
  var is = 20;
  var kv = 256;
  var ca = new es();
  var Rp = new St();
  var Ju = null;
  var $u = 0;
  var Ku = 0;
  var Qu = false;
  var Gv = new C();
  var gc = class {
    constructor(t) {
      this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
    }
    fromScene(t, e = 0, n2 = 0.1, i2 = 100, r2 = {}) {
      let { size: a = 256, position: o3 = Gv } = r2;
      Ju = this._renderer.getRenderTarget(), $u = this._renderer.getActiveCubeFace(), Ku = this._renderer.getActiveMipmapLevel(), Qu = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
      let l2 = this._allocateTargets();
      return l2.depthBuffer = true, this._sceneToCubeUV(t, n2, i2, l2, o3), e > 0 && this._blur(l2, 0, 0, e), this._applyPMREM(l2), this._cleanup(l2), l2;
    }
    fromEquirectangular(t, e = null) {
      return this._fromTexture(t, e);
    }
    fromCubemap(t, e = null) {
      return this._fromTexture(t, e);
    }
    compileCubemapShader() {
      this._cubemapMaterial === null && (this._cubemapMaterial = Lp(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      this._equirectMaterial === null && (this._equirectMaterial = Pp(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
    }
    _setSize(t) {
      this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
      for (let t = 0; t < this._lodMeshes.length; t++) this._lodMeshes[t].geometry.dispose();
    }
    _cleanup(t) {
      this._renderer.setRenderTarget(Ju, $u, Ku), this._renderer.xr.enabled = Qu, t.scissorTest = false, qs(t, 0, 0, t.width, t.height);
    }
    _fromTexture(t, e) {
      t.mapping === On || t.mapping === Mi ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Ju = this._renderer.getRenderTarget(), $u = this._renderer.getActiveCubeFace(), Ku = this._renderer.getActiveMipmapLevel(), Qu = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
      let n2 = e || this._allocateTargets();
      return this._textureToCubeUV(t, n2), this._applyPMREM(n2), this._cleanup(n2), n2;
    }
    _allocateTargets() {
      let t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n2 = { magFilter: _e, minFilter: _e, generateMipmaps: false, type: zn, format: Ye, colorSpace: gr, depthBuffer: false }, i2 = Ip(t, e, n2);
      if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
        this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ip(t, e, n2);
        let { _lodMax: r2 } = this;
        ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = Hv(r2)), this._blurMaterial = Xv(r2, t, e), this._ggxMaterial = Wv(r2, t, e);
      }
      return i2;
    }
    _compileMaterial(t) {
      let e = new Se(new Yt(), t);
      this._renderer.compile(e, ca);
    }
    _sceneToCubeUV(t, e, n2, i2, r2) {
      let l2 = new Re(90, 1, e, n2), c3 = [1, -1, 1, 1, 1, 1], h3 = [1, 1, 1, -1, -1, -1], d4 = this._renderer, u3 = d4.autoClear, f3 = d4.toneMapping;
      d4.getClearColor(Rp), d4.toneMapping = Sn, d4.autoClear = false, d4.state.buffers.depth.getReversed() && (d4.setRenderTarget(i2), d4.clearDepth(), d4.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Se(new Ji(), new Ln({ name: "PMREM.Background", side: Je, depthWrite: false, depthTest: false })));
      let _ = this._backgroundBox, g = _.material, m2 = false, M2 = t.background;
      M2 ? M2.isColor && (g.color.copy(M2), t.background = null, m2 = true) : (g.color.copy(Rp), m2 = true);
      for (let S2 = 0; S2 < 6; S2++) {
        let v = S2 % 3;
        v === 0 ? (l2.up.set(0, c3[S2], 0), l2.position.set(r2.x, r2.y, r2.z), l2.lookAt(r2.x + h3[S2], r2.y, r2.z)) : v === 1 ? (l2.up.set(0, 0, c3[S2]), l2.position.set(r2.x, r2.y, r2.z), l2.lookAt(r2.x, r2.y + h3[S2], r2.z)) : (l2.up.set(0, c3[S2], 0), l2.position.set(r2.x, r2.y, r2.z), l2.lookAt(r2.x, r2.y, r2.z + h3[S2]));
        let E = this._cubeSize;
        qs(i2, v * E, S2 > 2 ? E : 0, E, E), d4.setRenderTarget(i2), m2 && d4.render(_, l2), d4.render(t, l2);
      }
      d4.toneMapping = f3, d4.autoClear = u3, t.background = M2;
    }
    _textureToCubeUV(t, e) {
      let n2 = this._renderer, i2 = t.mapping === On || t.mapping === Mi;
      i2 ? (this._cubemapMaterial === null && (this._cubemapMaterial = Lp()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Pp());
      let r2 = i2 ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
      a.material = r2;
      let o3 = r2.uniforms;
      o3.envMap.value = t;
      let l2 = this._cubeSize;
      qs(e, 0, 0, 3 * l2, 2 * l2), n2.setRenderTarget(e), n2.render(a, ca);
    }
    _applyPMREM(t) {
      let e = this._renderer, n2 = e.autoClear;
      e.autoClear = false;
      let i2 = this._lodMeshes.length;
      for (let r2 = 1; r2 < i2; r2++) this._applyGGXFilter(t, r2 - 1, r2);
      e.autoClear = n2;
    }
    _applyGGXFilter(t, e, n2) {
      let i2 = this._renderer, r2 = this._pingPongRenderTarget, a = this._ggxMaterial, o3 = this._lodMeshes[n2];
      o3.material = a;
      let l2 = a.uniforms, c3 = n2 / (this._lodMeshes.length - 1), h3 = e / (this._lodMeshes.length - 1), d4 = Math.sqrt(c3 * c3 - h3 * h3), u3 = 0 + c3 * 1.25, f3 = d4 * u3, { _lodMax: p2 } = this, _ = this._sizeLods[n2], g = 3 * _ * (n2 > p2 - Ti ? n2 - p2 + Ti : 0), m2 = 4 * (this._cubeSize - _);
      l2.envMap.value = t.texture, l2.roughness.value = f3, l2.mipInt.value = p2 - e, qs(r2, g, m2, 3 * _, 2 * _), i2.setRenderTarget(r2), i2.render(o3, ca), l2.envMap.value = r2.texture, l2.roughness.value = 0, l2.mipInt.value = p2 - n2, qs(t, g, m2, 3 * _, 2 * _), i2.setRenderTarget(t), i2.render(o3, ca);
    }
    _blur(t, e, n2, i2, r2) {
      let a = this._pingPongRenderTarget;
      this._halfBlur(t, a, e, n2, i2, "latitudinal", r2), this._halfBlur(a, t, n2, n2, i2, "longitudinal", r2);
    }
    _halfBlur(t, e, n2, i2, r2, a, o3) {
      let l2 = this._renderer, c3 = this._blurMaterial;
      a !== "latitudinal" && a !== "longitudinal" && Rt("blur direction must be either latitudinal or longitudinal!");
      let h3 = 3, d4 = this._lodMeshes[i2];
      d4.material = c3;
      let u3 = c3.uniforms, f3 = this._sizeLods[n2] - 1, p2 = isFinite(r2) ? Math.PI / (2 * f3) : 2 * Math.PI / (2 * is - 1), _ = r2 / p2, g = isFinite(r2) ? 1 + Math.floor(h3 * _) : is;
      g > is && ot(`sigmaRadians, ${r2}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${is}`);
      let m2 = [], M2 = 0;
      for (let R2 = 0; R2 < is; ++R2) {
        let x3 = R2 / _, A3 = Math.exp(-x3 * x3 / 2);
        m2.push(A3), R2 === 0 ? M2 += A3 : R2 < g && (M2 += 2 * A3);
      }
      for (let R2 = 0; R2 < m2.length; R2++) m2[R2] = m2[R2] / M2;
      u3.envMap.value = t.texture, u3.samples.value = g, u3.weights.value = m2, u3.latitudinal.value = a === "latitudinal", o3 && (u3.poleAxis.value = o3);
      let { _lodMax: S2 } = this;
      u3.dTheta.value = p2, u3.mipInt.value = S2 - n2;
      let v = this._sizeLods[i2], E = 3 * v * (i2 > S2 - Ti ? i2 - S2 + Ti : 0), T2 = 4 * (this._cubeSize - v);
      qs(e, E, T2, 3 * v, 2 * v), l2.setRenderTarget(e), l2.render(d4, ca);
    }
  };
  function Hv(s30) {
    let t = [], e = [], n2 = [], i2 = s30, r2 = s30 - Ti + 1 + Cp.length;
    for (let a = 0; a < r2; a++) {
      let o3 = Math.pow(2, i2);
      t.push(o3);
      let l2 = 1 / o3;
      a > s30 - Ti ? l2 = Cp[a - s30 + Ti - 1] : a === 0 && (l2 = 0), e.push(l2);
      let c3 = 1 / (o3 - 2), h3 = -c3, d4 = 1 + c3, u3 = [h3, h3, d4, h3, d4, d4, h3, h3, d4, d4, h3, d4], f3 = 6, p2 = 6, _ = 3, g = 2, m2 = 1, M2 = new Float32Array(_ * p2 * f3), S2 = new Float32Array(g * p2 * f3), v = new Float32Array(m2 * p2 * f3);
      for (let T2 = 0; T2 < f3; T2++) {
        let R2 = T2 % 3 * 2 / 3 - 1, x3 = T2 > 2 ? 0 : -1, A3 = [R2, x3, 0, R2 + 2 / 3, x3, 0, R2 + 2 / 3, x3 + 1, 0, R2, x3, 0, R2 + 2 / 3, x3 + 1, 0, R2, x3 + 1, 0];
        M2.set(A3, _ * p2 * T2), S2.set(u3, g * p2 * T2);
        let I2 = [T2, T2, T2, T2, T2, T2];
        v.set(I2, m2 * p2 * T2);
      }
      let E = new Yt();
      E.setAttribute("position", new oe(M2, _)), E.setAttribute("uv", new oe(S2, g)), E.setAttribute("faceIndex", new oe(v, m2)), n2.push(new Se(E, null)), i2 > Ti && i2--;
    }
    return { lodMeshes: n2, sizeLods: t, sigmas: e };
  }
  function Ip(s30, t, e) {
    let n2 = new Ze(s30, t, e);
    return n2.texture.mapping = Gs, n2.texture.name = "PMREM.cubeUv", n2.scissorTest = true, n2;
  }
  function qs(s30, t, e, n2, i2) {
    s30.viewport.set(t, e, n2, i2), s30.scissor.set(t, e, n2, i2);
  }
  function Wv(s30, t, e) {
    return new en({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: kv, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${s30}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: xc(), fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`, blending: Fn, depthTest: false, depthWrite: false });
  }
  function Xv(s30, t, e) {
    let n2 = new Float32Array(is), i2 = new C(0, 1, 0);
    return new en({ name: "SphericalGaussianBlur", defines: { n: is, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${s30}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n2 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i2 } }, vertexShader: xc(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Fn, depthTest: false, depthWrite: false });
  }
  function Pp() {
    return new en({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: xc(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Fn, depthTest: false, depthWrite: false });
  }
  function Lp() {
    return new en({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: xc(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Fn, depthTest: false, depthWrite: false });
  }
  function xc() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
  }
  var _c = class extends Ze {
    constructor(t = 1, e = {}) {
      super(t, t, e), this.isWebGLCubeRenderTarget = true;
      let n2 = { width: t, height: t, depth: 1 }, i2 = [n2, n2, n2, n2, n2, n2];
      this.texture = new Zi(i2), this._setTextureOptions(e), this.texture.isRenderTargetTexture = true;
    }
    fromEquirectangularTexture(t, e) {
      this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
      let n2 = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i2 = new Ji(5, 5, 5), r2 = new en({ name: "CubemapFromEquirect", uniforms: ns(n2.uniforms), vertexShader: n2.vertexShader, fragmentShader: n2.fragmentShader, side: Je, blending: Fn });
      r2.uniforms.tEquirect.value = e;
      let a = new Se(i2, r2), o3 = e.minFilter;
      return e.minFilter === Bn && (e.minFilter = _e), new yl(1, 10, this).update(t, a), e.minFilter = o3, a.geometry.dispose(), a.material.dispose(), this;
    }
    clear(t, e = true, n2 = true, i2 = true) {
      let r2 = t.getRenderTarget();
      for (let a = 0; a < 6; a++) t.setRenderTarget(this, a), t.clear(e, n2, i2);
      t.setRenderTarget(r2);
    }
  };
  function qv(s30) {
    let t = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), n2 = null;
    function i2(u3, f3 = false) {
      return u3 == null ? null : f3 ? a(u3) : r2(u3);
    }
    function r2(u3) {
      if (u3 && u3.isTexture) {
        let f3 = u3.mapping;
        if (f3 === jr || f3 === ta) if (t.has(u3)) {
          let p2 = t.get(u3).texture;
          return o3(p2, u3.mapping);
        } else {
          let p2 = u3.image;
          if (p2 && p2.height > 0) {
            let _ = new _c(p2.height);
            return _.fromEquirectangularTexture(s30, u3), t.set(u3, _), u3.addEventListener("dispose", c3), o3(_.texture, u3.mapping);
          } else return null;
        }
      }
      return u3;
    }
    function a(u3) {
      if (u3 && u3.isTexture) {
        let f3 = u3.mapping, p2 = f3 === jr || f3 === ta, _ = f3 === On || f3 === Mi;
        if (p2 || _) {
          let g = e.get(u3), m2 = g !== void 0 ? g.texture.pmremVersion : 0;
          if (u3.isRenderTargetTexture && u3.pmremVersion !== m2) return n2 === null && (n2 = new gc(s30)), g = p2 ? n2.fromEquirectangular(u3, g) : n2.fromCubemap(u3, g), g.texture.pmremVersion = u3.pmremVersion, e.set(u3, g), g.texture;
          if (g !== void 0) return g.texture;
          {
            let M2 = u3.image;
            return p2 && M2 && M2.height > 0 || _ && M2 && l2(M2) ? (n2 === null && (n2 = new gc(s30)), g = p2 ? n2.fromEquirectangular(u3) : n2.fromCubemap(u3), g.texture.pmremVersion = u3.pmremVersion, e.set(u3, g), u3.addEventListener("dispose", h3), g.texture) : null;
          }
        }
      }
      return u3;
    }
    function o3(u3, f3) {
      return f3 === jr ? u3.mapping = On : f3 === ta && (u3.mapping = Mi), u3;
    }
    function l2(u3) {
      let f3 = 0, p2 = 6;
      for (let _ = 0; _ < p2; _++) u3[_] !== void 0 && f3++;
      return f3 === p2;
    }
    function c3(u3) {
      let f3 = u3.target;
      f3.removeEventListener("dispose", c3);
      let p2 = t.get(f3);
      p2 !== void 0 && (t.delete(f3), p2.dispose());
    }
    function h3(u3) {
      let f3 = u3.target;
      f3.removeEventListener("dispose", h3);
      let p2 = e.get(f3);
      p2 !== void 0 && (e.delete(f3), p2.dispose());
    }
    function d4() {
      t = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), n2 !== null && (n2.dispose(), n2 = null);
    }
    return { get: i2, dispose: d4 };
  }
  function Yv(s30) {
    let t = {};
    function e(n2) {
      if (t[n2] !== void 0) return t[n2];
      let i2 = s30.getExtension(n2);
      return t[n2] = i2, i2;
    }
    return { has: function(n2) {
      return e(n2) !== null;
    }, init: function() {
      e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
    }, get: function(n2) {
      let i2 = e(n2);
      return i2 === null && pi("WebGLRenderer: " + n2 + " extension not supported."), i2;
    } };
  }
  function Zv(s30, t, e, n2) {
    let i2 = {}, r2 = /* @__PURE__ */ new WeakMap();
    function a(d4) {
      let u3 = d4.target;
      u3.index !== null && t.remove(u3.index);
      for (let p2 in u3.attributes) t.remove(u3.attributes[p2]);
      u3.removeEventListener("dispose", a), delete i2[u3.id];
      let f3 = r2.get(u3);
      f3 && (t.remove(f3), r2.delete(u3)), n2.releaseStatesOfGeometry(u3), u3.isInstancedBufferGeometry === true && delete u3._maxInstanceCount, e.memory.geometries--;
    }
    function o3(d4, u3) {
      return i2[u3.id] === true || (u3.addEventListener("dispose", a), i2[u3.id] = true, e.memory.geometries++), u3;
    }
    function l2(d4) {
      let u3 = d4.attributes;
      for (let f3 in u3) t.update(u3[f3], s30.ARRAY_BUFFER);
    }
    function c3(d4) {
      let u3 = [], f3 = d4.index, p2 = d4.attributes.position, _ = 0;
      if (p2 === void 0) return;
      if (f3 !== null) {
        let M2 = f3.array;
        _ = f3.version;
        for (let S2 = 0, v = M2.length; S2 < v; S2 += 3) {
          let E = M2[S2 + 0], T2 = M2[S2 + 1], R2 = M2[S2 + 2];
          u3.push(E, T2, T2, R2, R2, E);
        }
      } else {
        let M2 = p2.array;
        _ = p2.version;
        for (let S2 = 0, v = M2.length / 3 - 1; S2 < v; S2 += 3) {
          let E = S2 + 0, T2 = S2 + 1, R2 = S2 + 2;
          u3.push(E, T2, T2, R2, R2, E);
        }
      }
      let g = new (p2.count >= 65535 ? Sr : Mr)(u3, 1);
      g.version = _;
      let m2 = r2.get(d4);
      m2 && t.remove(m2), r2.set(d4, g);
    }
    function h3(d4) {
      let u3 = r2.get(d4);
      if (u3) {
        let f3 = d4.index;
        f3 !== null && u3.version < f3.version && c3(d4);
      } else c3(d4);
      return r2.get(d4);
    }
    return { get: o3, update: l2, getWireframeAttribute: h3 };
  }
  function Jv(s30, t, e) {
    let n2;
    function i2(d4) {
      n2 = d4;
    }
    let r2, a;
    function o3(d4) {
      r2 = d4.type, a = d4.bytesPerElement;
    }
    function l2(d4, u3) {
      s30.drawElements(n2, u3, r2, d4 * a), e.update(u3, n2, 1);
    }
    function c3(d4, u3, f3) {
      f3 !== 0 && (s30.drawElementsInstanced(n2, u3, r2, d4 * a, f3), e.update(u3, n2, f3));
    }
    function h3(d4, u3, f3) {
      if (f3 === 0) return;
      t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n2, u3, 0, r2, d4, 0, f3);
      let _ = 0;
      for (let g = 0; g < f3; g++) _ += u3[g];
      e.update(_, n2, 1);
    }
    this.setMode = i2, this.setIndex = o3, this.render = l2, this.renderInstances = c3, this.renderMultiDraw = h3;
  }
  function $v(s30) {
    let t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    function n2(r2, a, o3) {
      switch (e.calls++, a) {
        case s30.TRIANGLES:
          e.triangles += o3 * (r2 / 3);
          break;
        case s30.LINES:
          e.lines += o3 * (r2 / 2);
          break;
        case s30.LINE_STRIP:
          e.lines += o3 * (r2 - 1);
          break;
        case s30.LINE_LOOP:
          e.lines += o3 * r2;
          break;
        case s30.POINTS:
          e.points += o3 * r2;
          break;
        default:
          Rt("WebGLInfo: Unknown draw mode:", a);
          break;
      }
    }
    function i2() {
      e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
    }
    return { memory: t, render: e, programs: null, autoReset: true, reset: i2, update: n2 };
  }
  function Kv(s30, t, e) {
    let n2 = /* @__PURE__ */ new WeakMap(), i2 = new ce();
    function r2(a, o3, l2) {
      let c3 = a.morphTargetInfluences, h3 = o3.morphAttributes.position || o3.morphAttributes.normal || o3.morphAttributes.color, d4 = h3 !== void 0 ? h3.length : 0, u3 = n2.get(o3);
      if (u3 === void 0 || u3.count !== d4) {
        let A3 = function() {
          R2.dispose(), n2.delete(o3), o3.removeEventListener("dispose", A3);
        };
        u3 !== void 0 && u3.texture.dispose();
        let f3 = o3.morphAttributes.position !== void 0, p2 = o3.morphAttributes.normal !== void 0, _ = o3.morphAttributes.color !== void 0, g = o3.morphAttributes.position || [], m2 = o3.morphAttributes.normal || [], M2 = o3.morphAttributes.color || [], S2 = 0;
        f3 === true && (S2 = 1), p2 === true && (S2 = 2), _ === true && (S2 = 3);
        let v = o3.attributes.position.count * S2, E = 1;
        v > t.maxTextureSize && (E = Math.ceil(v / t.maxTextureSize), v = t.maxTextureSize);
        let T2 = new Float32Array(v * E * 4 * d4), R2 = new Rs(T2, v, E, d4);
        R2.type = qe, R2.needsUpdate = true;
        let x3 = S2 * 4;
        for (let I2 = 0; I2 < d4; I2++) {
          let P3 = g[I2], N2 = m2[I2], H2 = M2[I2], X = v * E * 4 * I2;
          for (let O = 0; O < P3.count; O++) {
            let W = O * x3;
            f3 === true && (i2.fromBufferAttribute(P3, O), T2[X + W + 0] = i2.x, T2[X + W + 1] = i2.y, T2[X + W + 2] = i2.z, T2[X + W + 3] = 0), p2 === true && (i2.fromBufferAttribute(N2, O), T2[X + W + 4] = i2.x, T2[X + W + 5] = i2.y, T2[X + W + 6] = i2.z, T2[X + W + 7] = 0), _ === true && (i2.fromBufferAttribute(H2, O), T2[X + W + 8] = i2.x, T2[X + W + 9] = i2.y, T2[X + W + 10] = i2.z, T2[X + W + 11] = H2.itemSize === 4 ? i2.w : 1);
          }
        }
        u3 = { count: d4, texture: R2, size: new Q(v, E) }, n2.set(o3, u3), o3.addEventListener("dispose", A3);
      }
      if (a.isInstancedMesh === true && a.morphTexture !== null) l2.getUniforms().setValue(s30, "morphTexture", a.morphTexture, e);
      else {
        let f3 = 0;
        for (let _ = 0; _ < c3.length; _++) f3 += c3[_];
        let p2 = o3.morphTargetsRelative ? 1 : 1 - f3;
        l2.getUniforms().setValue(s30, "morphTargetBaseInfluence", p2), l2.getUniforms().setValue(s30, "morphTargetInfluences", c3);
      }
      l2.getUniforms().setValue(s30, "morphTargetsTexture", u3.texture, e), l2.getUniforms().setValue(s30, "morphTargetsTextureSize", u3.size);
    }
    return { update: r2 };
  }
  function Qv(s30, t, e, n2, i2) {
    let r2 = /* @__PURE__ */ new WeakMap();
    function a(c3) {
      let h3 = i2.render.frame, d4 = c3.geometry, u3 = t.get(c3, d4);
      if (r2.get(u3) !== h3 && (t.update(u3), r2.set(u3, h3)), c3.isInstancedMesh && (c3.hasEventListener("dispose", l2) === false && c3.addEventListener("dispose", l2), r2.get(c3) !== h3 && (e.update(c3.instanceMatrix, s30.ARRAY_BUFFER), c3.instanceColor !== null && e.update(c3.instanceColor, s30.ARRAY_BUFFER), r2.set(c3, h3))), c3.isSkinnedMesh) {
        let f3 = c3.skeleton;
        r2.get(f3) !== h3 && (f3.update(), r2.set(f3, h3));
      }
      return u3;
    }
    function o3() {
      r2 = /* @__PURE__ */ new WeakMap();
    }
    function l2(c3) {
      let h3 = c3.target;
      h3.removeEventListener("dispose", l2), n2.releaseStatesOfObject(h3), e.remove(h3.instanceMatrix), h3.instanceColor !== null && e.remove(h3.instanceColor);
    }
    return { update: a, dispose: o3 };
  }
  var jv = { [Cu]: "LINEAR_TONE_MAPPING", [Ru]: "REINHARD_TONE_MAPPING", [Iu]: "CINEON_TONE_MAPPING", [Pu]: "ACES_FILMIC_TONE_MAPPING", [Du]: "AGX_TONE_MAPPING", [Nu]: "NEUTRAL_TONE_MAPPING", [Lu]: "CUSTOM_TONE_MAPPING" };
  function ty(s30, t, e, n2, i2, r2) {
    let a = new Ze(t, e, { type: s30, depthBuffer: i2, stencilBuffer: r2, samples: n2 ? 4 : 0, depthTexture: i2 ? new Qn(t, e) : void 0 }), o3 = new Ze(t, e, { type: zn, depthBuffer: false, stencilBuffer: false }), l2 = new Yt();
    l2.setAttribute("position", new Tt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), l2.setAttribute("uv", new Tt([0, 2, 0, 0, 2, 0], 2));
    let c3 = new zr({ uniforms: { tDiffuse: { value: null } }, vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`, fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`, depthTest: false, depthWrite: false }), h3 = new Se(l2, c3), d4 = new es(-1, 1, 1, -1, 0, 1), u3 = null, f3 = null, p2 = false, _, g = null, m2 = [], M2 = false;
    this.setSize = function(S2, v) {
      a.setSize(S2, v), o3.setSize(S2, v);
      for (let E = 0; E < m2.length; E++) {
        let T2 = m2[E];
        T2.setSize && T2.setSize(S2, v);
      }
    }, this.setEffects = function(S2) {
      m2 = S2, M2 = m2.length > 0 && m2[0].isRenderPass === true;
      let v = a.width, E = a.height;
      for (let T2 = 0; T2 < m2.length; T2++) {
        let R2 = m2[T2];
        R2.setSize && R2.setSize(v, E);
      }
    }, this.begin = function(S2, v) {
      if (p2 || S2.toneMapping === Sn && m2.length === 0) return false;
      if (g = v, v !== null) {
        let E = v.width, T2 = v.height;
        (a.width !== E || a.height !== T2) && this.setSize(E, T2);
      }
      return M2 === false && S2.setRenderTarget(a), _ = S2.toneMapping, S2.toneMapping = Sn, true;
    }, this.hasRenderPass = function() {
      return M2;
    }, this.end = function(S2, v) {
      S2.toneMapping = _, p2 = true;
      let E = a, T2 = o3;
      for (let R2 = 0; R2 < m2.length; R2++) {
        let x3 = m2[R2];
        if (x3.enabled !== false && (x3.render(S2, T2, E, v), x3.needsSwap !== false)) {
          let A3 = E;
          E = T2, T2 = A3;
        }
      }
      if (u3 !== S2.outputColorSpace || f3 !== S2.toneMapping) {
        u3 = S2.outputColorSpace, f3 = S2.toneMapping, c3.defines = {}, ee.getTransfer(u3) === ae && (c3.defines.SRGB_TRANSFER = "");
        let R2 = jv[f3];
        R2 && (c3.defines[R2] = ""), c3.needsUpdate = true;
      }
      c3.uniforms.tDiffuse.value = E.texture, S2.setRenderTarget(g), S2.render(h3, d4), g = null, p2 = false;
    }, this.isCompositing = function() {
      return p2;
    }, this.dispose = function() {
      a.depthTexture && a.depthTexture.dispose(), a.dispose(), o3.dispose(), l2.dispose(), c3.dispose();
    };
  }
  var jp = new we();
  var ed = new Qn(1, 1);
  var tm = new Rs();
  var em = new Is();
  var nm = new Zi();
  var Dp = [];
  var Np = [];
  var Up = new Float32Array(16);
  var Fp = new Float32Array(9);
  var Op = new Float32Array(4);
  function Zs(s30, t, e) {
    let n2 = s30[0];
    if (n2 <= 0 || n2 > 0) return s30;
    let i2 = t * e, r2 = Dp[i2];
    if (r2 === void 0 && (r2 = new Float32Array(i2), Dp[i2] = r2), t !== 0) {
      n2.toArray(r2, 0);
      for (let a = 1, o3 = 0; a !== t; ++a) o3 += e, s30[a].toArray(r2, o3);
    }
    return r2;
  }
  function Le(s30, t) {
    if (s30.length !== t.length) return false;
    for (let e = 0, n2 = s30.length; e < n2; e++) if (s30[e] !== t[e]) return false;
    return true;
  }
  function De(s30, t) {
    for (let e = 0, n2 = t.length; e < n2; e++) s30[e] = t[e];
  }
  function vc(s30, t) {
    let e = Np[t];
    e === void 0 && (e = new Int32Array(t), Np[t] = e);
    for (let n2 = 0; n2 !== t; ++n2) e[n2] = s30.allocateTextureUnit();
    return e;
  }
  function ey(s30, t) {
    let e = this.cache;
    e[0] !== t && (s30.uniform1f(this.addr, t), e[0] = t);
  }
  function ny(s30, t) {
    let e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (s30.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
    else {
      if (Le(e, t)) return;
      s30.uniform2fv(this.addr, t), De(e, t);
    }
  }
  function iy(s30, t) {
    let e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s30.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
    else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (s30.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
    else {
      if (Le(e, t)) return;
      s30.uniform3fv(this.addr, t), De(e, t);
    }
  }
  function sy(s30, t) {
    let e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s30.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
    else {
      if (Le(e, t)) return;
      s30.uniform4fv(this.addr, t), De(e, t);
    }
  }
  function ry(s30, t) {
    let e = this.cache, n2 = t.elements;
    if (n2 === void 0) {
      if (Le(e, t)) return;
      s30.uniformMatrix2fv(this.addr, false, t), De(e, t);
    } else {
      if (Le(e, n2)) return;
      Op.set(n2), s30.uniformMatrix2fv(this.addr, false, Op), De(e, n2);
    }
  }
  function ay(s30, t) {
    let e = this.cache, n2 = t.elements;
    if (n2 === void 0) {
      if (Le(e, t)) return;
      s30.uniformMatrix3fv(this.addr, false, t), De(e, t);
    } else {
      if (Le(e, n2)) return;
      Fp.set(n2), s30.uniformMatrix3fv(this.addr, false, Fp), De(e, n2);
    }
  }
  function oy(s30, t) {
    let e = this.cache, n2 = t.elements;
    if (n2 === void 0) {
      if (Le(e, t)) return;
      s30.uniformMatrix4fv(this.addr, false, t), De(e, t);
    } else {
      if (Le(e, n2)) return;
      Up.set(n2), s30.uniformMatrix4fv(this.addr, false, Up), De(e, n2);
    }
  }
  function ly(s30, t) {
    let e = this.cache;
    e[0] !== t && (s30.uniform1i(this.addr, t), e[0] = t);
  }
  function cy(s30, t) {
    let e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (s30.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
    else {
      if (Le(e, t)) return;
      s30.uniform2iv(this.addr, t), De(e, t);
    }
  }
  function hy(s30, t) {
    let e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s30.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
    else {
      if (Le(e, t)) return;
      s30.uniform3iv(this.addr, t), De(e, t);
    }
  }
  function uy(s30, t) {
    let e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s30.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
    else {
      if (Le(e, t)) return;
      s30.uniform4iv(this.addr, t), De(e, t);
    }
  }
  function dy(s30, t) {
    let e = this.cache;
    e[0] !== t && (s30.uniform1ui(this.addr, t), e[0] = t);
  }
  function fy(s30, t) {
    let e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (s30.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
    else {
      if (Le(e, t)) return;
      s30.uniform2uiv(this.addr, t), De(e, t);
    }
  }
  function py(s30, t) {
    let e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s30.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
    else {
      if (Le(e, t)) return;
      s30.uniform3uiv(this.addr, t), De(e, t);
    }
  }
  function my(s30, t) {
    let e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s30.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
    else {
      if (Le(e, t)) return;
      s30.uniform4uiv(this.addr, t), De(e, t);
    }
  }
  function gy(s30, t, e) {
    let n2 = this.cache, i2 = e.allocateTextureUnit();
    n2[0] !== i2 && (s30.uniform1i(this.addr, i2), n2[0] = i2);
    let r2;
    this.type === s30.SAMPLER_2D_SHADOW ? (ed.compareFunction = e.isReversedDepthBuffer() ? dc : uc, r2 = ed) : r2 = jp, e.setTexture2D(t || r2, i2);
  }
  function _y(s30, t, e) {
    let n2 = this.cache, i2 = e.allocateTextureUnit();
    n2[0] !== i2 && (s30.uniform1i(this.addr, i2), n2[0] = i2), e.setTexture3D(t || em, i2);
  }
  function xy(s30, t, e) {
    let n2 = this.cache, i2 = e.allocateTextureUnit();
    n2[0] !== i2 && (s30.uniform1i(this.addr, i2), n2[0] = i2), e.setTextureCube(t || nm, i2);
  }
  function vy(s30, t, e) {
    let n2 = this.cache, i2 = e.allocateTextureUnit();
    n2[0] !== i2 && (s30.uniform1i(this.addr, i2), n2[0] = i2), e.setTexture2DArray(t || tm, i2);
  }
  function yy(s30) {
    switch (s30) {
      case 5126:
        return ey;
      case 35664:
        return ny;
      case 35665:
        return iy;
      case 35666:
        return sy;
      case 35674:
        return ry;
      case 35675:
        return ay;
      case 35676:
        return oy;
      case 5124:
      case 35670:
        return ly;
      case 35667:
      case 35671:
        return cy;
      case 35668:
      case 35672:
        return hy;
      case 35669:
      case 35673:
        return uy;
      case 5125:
        return dy;
      case 36294:
        return fy;
      case 36295:
        return py;
      case 36296:
        return my;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return gy;
      case 35679:
      case 36299:
      case 36307:
        return _y;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return xy;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return vy;
    }
  }
  function My(s30, t) {
    s30.uniform1fv(this.addr, t);
  }
  function Sy(s30, t) {
    let e = Zs(t, this.size, 2);
    s30.uniform2fv(this.addr, e);
  }
  function by(s30, t) {
    let e = Zs(t, this.size, 3);
    s30.uniform3fv(this.addr, e);
  }
  function Ty(s30, t) {
    let e = Zs(t, this.size, 4);
    s30.uniform4fv(this.addr, e);
  }
  function Ay(s30, t) {
    let e = Zs(t, this.size, 4);
    s30.uniformMatrix2fv(this.addr, false, e);
  }
  function Ey(s30, t) {
    let e = Zs(t, this.size, 9);
    s30.uniformMatrix3fv(this.addr, false, e);
  }
  function wy(s30, t) {
    let e = Zs(t, this.size, 16);
    s30.uniformMatrix4fv(this.addr, false, e);
  }
  function Cy(s30, t) {
    s30.uniform1iv(this.addr, t);
  }
  function Ry(s30, t) {
    s30.uniform2iv(this.addr, t);
  }
  function Iy(s30, t) {
    s30.uniform3iv(this.addr, t);
  }
  function Py(s30, t) {
    s30.uniform4iv(this.addr, t);
  }
  function Ly(s30, t) {
    s30.uniform1uiv(this.addr, t);
  }
  function Dy(s30, t) {
    s30.uniform2uiv(this.addr, t);
  }
  function Ny(s30, t) {
    s30.uniform3uiv(this.addr, t);
  }
  function Uy(s30, t) {
    s30.uniform4uiv(this.addr, t);
  }
  function Fy(s30, t, e) {
    let n2 = this.cache, i2 = t.length, r2 = vc(e, i2);
    Le(n2, r2) || (s30.uniform1iv(this.addr, r2), De(n2, r2));
    let a;
    this.type === s30.SAMPLER_2D_SHADOW ? a = ed : a = jp;
    for (let o3 = 0; o3 !== i2; ++o3) e.setTexture2D(t[o3] || a, r2[o3]);
  }
  function Oy(s30, t, e) {
    let n2 = this.cache, i2 = t.length, r2 = vc(e, i2);
    Le(n2, r2) || (s30.uniform1iv(this.addr, r2), De(n2, r2));
    for (let a = 0; a !== i2; ++a) e.setTexture3D(t[a] || em, r2[a]);
  }
  function By(s30, t, e) {
    let n2 = this.cache, i2 = t.length, r2 = vc(e, i2);
    Le(n2, r2) || (s30.uniform1iv(this.addr, r2), De(n2, r2));
    for (let a = 0; a !== i2; ++a) e.setTextureCube(t[a] || nm, r2[a]);
  }
  function zy(s30, t, e) {
    let n2 = this.cache, i2 = t.length, r2 = vc(e, i2);
    Le(n2, r2) || (s30.uniform1iv(this.addr, r2), De(n2, r2));
    for (let a = 0; a !== i2; ++a) e.setTexture2DArray(t[a] || tm, r2[a]);
  }
  function Vy(s30) {
    switch (s30) {
      case 5126:
        return My;
      case 35664:
        return Sy;
      case 35665:
        return by;
      case 35666:
        return Ty;
      case 35674:
        return Ay;
      case 35675:
        return Ey;
      case 35676:
        return wy;
      case 5124:
      case 35670:
        return Cy;
      case 35667:
      case 35671:
        return Ry;
      case 35668:
      case 35672:
        return Iy;
      case 35669:
      case 35673:
        return Py;
      case 5125:
        return Ly;
      case 36294:
        return Dy;
      case 36295:
        return Ny;
      case 36296:
        return Uy;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return Fy;
      case 35679:
      case 36299:
      case 36307:
        return Oy;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return By;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return zy;
    }
  }
  var nd = class {
    constructor(t, e, n2) {
      this.id = t, this.addr = n2, this.cache = [], this.type = e.type, this.setValue = yy(e.type);
    }
  };
  var id = class {
    constructor(t, e, n2) {
      this.id = t, this.addr = n2, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Vy(e.type);
    }
  };
  var sd = class {
    constructor(t) {
      this.id = t, this.seq = [], this.map = {};
    }
    setValue(t, e, n2) {
      let i2 = this.seq;
      for (let r2 = 0, a = i2.length; r2 !== a; ++r2) {
        let o3 = i2[r2];
        o3.setValue(t, e[o3.id], n2);
      }
    }
  };
  var ju = /(\w+)(\])?(\[|\.)?/g;
  function Bp(s30, t) {
    s30.seq.push(t), s30.map[t.id] = t;
  }
  function ky(s30, t, e) {
    let n2 = s30.name, i2 = n2.length;
    for (ju.lastIndex = 0; ; ) {
      let r2 = ju.exec(n2), a = ju.lastIndex, o3 = r2[1], l2 = r2[2] === "]", c3 = r2[3];
      if (l2 && (o3 = o3 | 0), c3 === void 0 || c3 === "[" && a + 2 === i2) {
        Bp(e, c3 === void 0 ? new nd(o3, s30, t) : new id(o3, s30, t));
        break;
      } else {
        let d4 = e.map[o3];
        d4 === void 0 && (d4 = new sd(o3), Bp(e, d4)), e = d4;
      }
    }
  }
  var Ys = class {
    constructor(t, e) {
      this.seq = [], this.map = {};
      let n2 = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
      for (let a = 0; a < n2; ++a) {
        let o3 = t.getActiveUniform(e, a), l2 = t.getUniformLocation(e, o3.name);
        ky(o3, l2, this);
      }
      let i2 = [], r2 = [];
      for (let a of this.seq) a.type === t.SAMPLER_2D_SHADOW || a.type === t.SAMPLER_CUBE_SHADOW || a.type === t.SAMPLER_2D_ARRAY_SHADOW ? i2.push(a) : r2.push(a);
      i2.length > 0 && (this.seq = i2.concat(r2));
    }
    setValue(t, e, n2, i2) {
      let r2 = this.map[e];
      r2 !== void 0 && r2.setValue(t, n2, i2);
    }
    setOptional(t, e, n2) {
      let i2 = e[n2];
      i2 !== void 0 && this.setValue(t, n2, i2);
    }
    static upload(t, e, n2, i2) {
      for (let r2 = 0, a = e.length; r2 !== a; ++r2) {
        let o3 = e[r2], l2 = n2[o3.id];
        l2.needsUpdate !== false && o3.setValue(t, l2.value, i2);
      }
    }
    static seqWithValue(t, e) {
      let n2 = [];
      for (let i2 = 0, r2 = t.length; i2 !== r2; ++i2) {
        let a = t[i2];
        a.id in e && n2.push(a);
      }
      return n2;
    }
  };
  function zp(s30, t, e) {
    let n2 = s30.createShader(t);
    return s30.shaderSource(n2, e), s30.compileShader(n2), n2;
  }
  var Gy = 37297;
  var Hy = 0;
  function Wy(s30, t) {
    let e = s30.split(`
`), n2 = [], i2 = Math.max(t - 6, 0), r2 = Math.min(t + 6, e.length);
    for (let a = i2; a < r2; a++) {
      let o3 = a + 1;
      n2.push(`${o3 === t ? ">" : " "} ${o3}: ${e[a]}`);
    }
    return n2.join(`
`);
  }
  var Vp = new Xt();
  function Xy(s30) {
    ee._getMatrix(Vp, ee.workingColorSpace, s30);
    let t = `mat3( ${Vp.elements.map((e) => e.toFixed(4))} )`;
    switch (ee.getTransfer(s30)) {
      case _r:
        return [t, "LinearTransferOETF"];
      case ae:
        return [t, "sRGBTransferOETF"];
      default:
        return ot("WebGLProgram: Unsupported color space: ", s30), [t, "LinearTransferOETF"];
    }
  }
  function kp(s30, t, e) {
    let n2 = s30.getShaderParameter(t, s30.COMPILE_STATUS), r2 = (s30.getShaderInfoLog(t) || "").trim();
    if (n2 && r2 === "") return "";
    let a = /ERROR: 0:(\d+)/.exec(r2);
    if (a) {
      let o3 = parseInt(a[1]);
      return e.toUpperCase() + `

` + r2 + `

` + Wy(s30.getShaderSource(t), o3);
    } else return r2;
  }
  function qy(s30, t) {
    let e = Xy(t);
    return [`vec4 ${s30}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`);
  }
  var Yy = { [Cu]: "Linear", [Ru]: "Reinhard", [Iu]: "Cineon", [Pu]: "ACESFilmic", [Du]: "AgX", [Nu]: "Neutral", [Lu]: "Custom" };
  function Zy(s30, t) {
    let e = Yy[t];
    return e === void 0 ? (ot("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + s30 + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + s30 + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
  }
  var mc = new C();
  function Jy() {
    ee.getLuminanceCoefficients(mc);
    let s30 = mc.x.toFixed(4), t = mc.y.toFixed(4), e = mc.z.toFixed(4);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s30}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
  }
  function $y(s30) {
    return [s30.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s30.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(ua).join(`
`);
  }
  function Ky(s30) {
    let t = [];
    for (let e in s30) {
      let n2 = s30[e];
      n2 !== false && t.push("#define " + e + " " + n2);
    }
    return t.join(`
`);
  }
  function Qy(s30, t) {
    let e = {}, n2 = s30.getProgramParameter(t, s30.ACTIVE_ATTRIBUTES);
    for (let i2 = 0; i2 < n2; i2++) {
      let r2 = s30.getActiveAttrib(t, i2), a = r2.name, o3 = 1;
      r2.type === s30.FLOAT_MAT2 && (o3 = 2), r2.type === s30.FLOAT_MAT3 && (o3 = 3), r2.type === s30.FLOAT_MAT4 && (o3 = 4), e[a] = { type: r2.type, location: s30.getAttribLocation(t, a), locationSize: o3 };
    }
    return e;
  }
  function ua(s30) {
    return s30 !== "";
  }
  function Gp(s30, t) {
    let e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
    return s30.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
  }
  function Hp(s30, t) {
    return s30.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
  }
  var jy = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function rd(s30) {
    return s30.replace(jy, eM);
  }
  var tM = /* @__PURE__ */ new Map();
  function eM(s30, t) {
    let e = Kt[t];
    if (e === void 0) {
      let n2 = tM.get(t);
      if (n2 !== void 0) e = Kt[n2], ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n2);
      else throw new Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
    }
    return rd(e);
  }
  var nM = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Wp(s30) {
    return s30.replace(nM, iM);
  }
  function iM(s30, t, e, n2) {
    let i2 = "";
    for (let r2 = parseInt(t); r2 < parseInt(e); r2++) i2 += n2.replace(/\[\s*i\s*\]/g, "[ " + r2 + " ]").replace(/UNROLLED_LOOP_INDEX/g, r2);
    return i2;
  }
  function Xp(s30) {
    let t = `precision ${s30.precision} float;
	precision ${s30.precision} int;
	precision ${s30.precision} sampler2D;
	precision ${s30.precision} samplerCube;
	precision ${s30.precision} sampler3D;
	precision ${s30.precision} sampler2DArray;
	precision ${s30.precision} sampler2DShadow;
	precision ${s30.precision} samplerCubeShadow;
	precision ${s30.precision} sampler2DArrayShadow;
	precision ${s30.precision} isampler2D;
	precision ${s30.precision} isampler3D;
	precision ${s30.precision} isamplerCube;
	precision ${s30.precision} isampler2DArray;
	precision ${s30.precision} usampler2D;
	precision ${s30.precision} usampler3D;
	precision ${s30.precision} usamplerCube;
	precision ${s30.precision} usampler2DArray;
	`;
    return s30.precision === "highp" ? t += `
#define HIGH_PRECISION` : s30.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : s30.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
  }
  var sM = { [Kr]: "SHADOWMAP_TYPE_PCF", [ks]: "SHADOWMAP_TYPE_VSM" };
  function rM(s30) {
    return sM[s30.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
  }
  var aM = { [On]: "ENVMAP_TYPE_CUBE", [Mi]: "ENVMAP_TYPE_CUBE", [Gs]: "ENVMAP_TYPE_CUBE_UV" };
  function oM(s30) {
    return s30.envMap === false ? "ENVMAP_TYPE_CUBE" : aM[s30.envMapMode] || "ENVMAP_TYPE_CUBE";
  }
  var lM = { [Mi]: "ENVMAP_MODE_REFRACTION" };
  function cM(s30) {
    return s30.envMap === false ? "ENVMAP_MODE_REFLECTION" : lM[s30.envMapMode] || "ENVMAP_MODE_REFLECTION";
  }
  var hM = { [Qr]: "ENVMAP_BLENDING_MULTIPLY", [Qf]: "ENVMAP_BLENDING_MIX", [jf]: "ENVMAP_BLENDING_ADD" };
  function uM(s30) {
    return s30.envMap === false ? "ENVMAP_BLENDING_NONE" : hM[s30.combine] || "ENVMAP_BLENDING_NONE";
  }
  function dM(s30) {
    let t = s30.envMapCubeUVHeight;
    if (t === null) return null;
    let e = Math.log2(t) - 2, n2 = 1 / t;
    return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n2, maxMip: e };
  }
  function fM(s30, t, e, n2) {
    let i2 = s30.getContext(), r2 = e.defines, a = e.vertexShader, o3 = e.fragmentShader, l2 = rM(e), c3 = oM(e), h3 = cM(e), d4 = uM(e), u3 = dM(e), f3 = $y(e), p2 = Ky(r2), _ = i2.createProgram(), g, m2, M2 = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
    e.isRawShaderMaterial ? (g = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, p2].filter(ua).join(`
`), g.length > 0 && (g += `
`), m2 = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, p2].filter(ua).join(`
`), m2.length > 0 && (m2 += `
`)) : (g = [Xp(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, p2, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h3 : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexNormals ? "#define HAS_NORMAL" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l2 : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ua).join(`
`), m2 = [Xp(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, p2, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c3 : "", e.envMap ? "#define " + h3 : "", e.envMap ? "#define " + d4 : "", u3 ? "#define CUBEUV_TEXEL_WIDTH " + u3.texelWidth : "", u3 ? "#define CUBEUV_TEXEL_HEIGHT " + u3.texelHeight : "", u3 ? "#define CUBEUV_MAX_MIP " + u3.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "", e.vertexAlphas || e.batchingColor ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l2 : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== Sn ? "#define TONE_MAPPING" : "", e.toneMapping !== Sn ? Kt.tonemapping_pars_fragment : "", e.toneMapping !== Sn ? Zy("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Kt.colorspace_pars_fragment, qy("linearToOutputTexel", e.outputColorSpace), Jy(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(ua).join(`
`)), a = rd(a), a = Gp(a, e), a = Hp(a, e), o3 = rd(o3), o3 = Gp(o3, e), o3 = Hp(o3, e), a = Wp(a), o3 = Wp(o3), e.isRawShaderMaterial !== true && (M2 = `#version 300 es
`, g = [f3, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + g, m2 = ["#define varying in", e.glslVersion === Hu ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === Hu ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + m2);
    let S2 = M2 + g + a, v = M2 + m2 + o3, E = zp(i2, i2.VERTEX_SHADER, S2), T2 = zp(i2, i2.FRAGMENT_SHADER, v);
    i2.attachShader(_, E), i2.attachShader(_, T2), e.index0AttributeName !== void 0 ? i2.bindAttribLocation(_, 0, e.index0AttributeName) : e.hasPositionAttribute === true && i2.bindAttribLocation(_, 0, "position"), i2.linkProgram(_);
    function R2(P3) {
      if (s30.debug.checkShaderErrors) {
        let N2 = i2.getProgramInfoLog(_) || "", H2 = i2.getShaderInfoLog(E) || "", X = i2.getShaderInfoLog(T2) || "", O = N2.trim(), W = H2.trim(), G = X.trim(), K2 = true, it = true;
        if (i2.getProgramParameter(_, i2.LINK_STATUS) === false) if (K2 = false, typeof s30.debug.onShaderError == "function") s30.debug.onShaderError(i2, _, E, T2);
        else {
          let ut = kp(i2, E, "vertex"), lt = kp(i2, T2, "fragment");
          Rt("WebGLProgram: Shader Error " + i2.getError() + " - VALIDATE_STATUS " + i2.getProgramParameter(_, i2.VALIDATE_STATUS) + `

Material Name: ` + P3.name + `
Material Type: ` + P3.type + `

Program Info Log: ` + O + `
` + ut + `
` + lt);
        }
        else O !== "" ? ot("WebGLProgram: Program Info Log:", O) : (W === "" || G === "") && (it = false);
        it && (P3.diagnostics = { runnable: K2, programLog: O, vertexShader: { log: W, prefix: g }, fragmentShader: { log: G, prefix: m2 } });
      }
      i2.deleteShader(E), i2.deleteShader(T2), x3 = new Ys(i2, _), A3 = Qy(i2, _);
    }
    let x3;
    this.getUniforms = function() {
      return x3 === void 0 && R2(this), x3;
    };
    let A3;
    this.getAttributes = function() {
      return A3 === void 0 && R2(this), A3;
    };
    let I2 = e.rendererExtensionParallelShaderCompile === false;
    return this.isReady = function() {
      return I2 === false && (I2 = i2.getProgramParameter(_, Gy)), I2;
    }, this.destroy = function() {
      n2.releaseStatesOfProgram(this), i2.deleteProgram(_), this.program = void 0;
    }, this.type = e.shaderType, this.name = e.shaderName, this.id = Hy++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = E, this.fragmentShader = T2, this;
  }
  var pM = 0;
  var ad = class {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(t, e, n2) {
      let i2 = this._getShaderCacheForMaterial(t);
      return i2.has(e) === false && (i2.add(e), e.usedTimes++), i2.has(n2) === false && (i2.add(n2), n2.usedTimes++), this;
    }
    remove(t) {
      let e = this.materialCache.get(t);
      for (let n2 of e) n2.usedTimes--, n2.usedTimes === 0 && this.shaderCache.delete(n2.code);
      return this.materialCache.delete(t), this;
    }
    getVertexShaderStage(t) {
      return this._getShaderStage(t.vertexShader);
    }
    getFragmentShaderStage(t) {
      return this._getShaderStage(t.fragmentShader);
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(t) {
      let e = this.materialCache, n2 = e.get(t);
      return n2 === void 0 && (n2 = /* @__PURE__ */ new Set(), e.set(t, n2)), n2;
    }
    _getShaderStage(t) {
      let e = this.shaderCache, n2 = e.get(t);
      return n2 === void 0 && (n2 = new od(t), e.set(t, n2)), n2;
    }
  };
  var od = class {
    constructor(t) {
      this.id = pM++, this.code = t, this.usedTimes = 0;
    }
  };
  function mM(s30) {
    return s30 === bi || s30 === oa || s30 === la;
  }
  function gM(s30, t, e, n2, i2, r2) {
    let a = new Ps(), o3 = new ad(), l2 = /* @__PURE__ */ new Set(), c3 = [], h3 = /* @__PURE__ */ new Map(), d4 = n2.logarithmicDepthBuffer, u3 = n2.precision, f3 = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distance", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
    function p2(x3) {
      return l2.add(x3), x3 === 0 ? "uv" : `uv${x3}`;
    }
    function _(x3, A3, I2, P3, N2, H2) {
      let X = P3.fog, O = N2.geometry, W = x3.isMeshStandardMaterial || x3.isMeshLambertMaterial || x3.isMeshPhongMaterial ? P3.environment : null, G = x3.isMeshStandardMaterial || x3.isMeshLambertMaterial && !x3.envMap || x3.isMeshPhongMaterial && !x3.envMap, K2 = t.get(x3.envMap || W, G), it = K2 && K2.mapping === Gs ? K2.image.height : null, ut = f3[x3.type];
      x3.precision !== null && (u3 = n2.getMaxPrecision(x3.precision), u3 !== x3.precision && ot("WebGLProgram.getParameters:", x3.precision, "not supported, using", u3, "instead."));
      let lt = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, bt = lt !== void 0 ? lt.length : 0, Qt = 0;
      O.morphAttributes.position !== void 0 && (Qt = 1), O.morphAttributes.normal !== void 0 && (Qt = 2), O.morphAttributes.color !== void 0 && (Qt = 3);
      let de, ne, J, ct;
      if (ut) {
        let wt = kn[ut];
        de = wt.vertexShader, ne = wt.fragmentShader;
      } else {
        de = x3.vertexShader, ne = x3.fragmentShader;
        let wt = o3.getVertexShaderStage(x3), ve = o3.getFragmentShaderStage(x3);
        o3.update(x3, wt, ve), J = wt.id, ct = ve.id;
      }
      let st = s30.getRenderTarget(), Nt = s30.state.buffers.depth.getReversed(), kt = N2.isInstancedMesh === true, Ot = N2.isBatchedMesh === true, se = !!x3.map, Wt = !!x3.matcap, j2 = !!K2, nt = !!x3.aoMap, et = !!x3.lightMap, xt = !!x3.bumpMap && x3.wireframe === false, mt = !!x3.normalMap, Bt = !!x3.displacementMap, Pt = !!x3.emissiveMap, Gt = !!x3.metalnessMap, qt = !!x3.roughnessMap, L = x3.anisotropy > 0, he = x3.clearcoat > 0, te = x3.dispersion > 0, w2 = x3.iridescence > 0, y2 = x3.sheen > 0, F2 = x3.transmission > 0, V = L && !!x3.anisotropyMap, q = he && !!x3.clearcoatMap, rt = he && !!x3.clearcoatNormalMap, at = he && !!x3.clearcoatRoughnessMap, Y2 = w2 && !!x3.iridescenceMap, $ = w2 && !!x3.iridescenceThicknessMap, dt = y2 && !!x3.sheenColorMap, Lt = y2 && !!x3.sheenRoughnessMap, gt = !!x3.specularMap, ft = !!x3.specularColorMap, Ft = !!x3.specularIntensityMap, zt = F2 && !!x3.transmissionMap, Zt = F2 && !!x3.thicknessMap, D2 = !!x3.gradientMap, ht = !!x3.alphaMap, Z2 = x3.alphaTest > 0, pt = !!x3.alphaHash, Mt = !!x3.extensions, tt = Sn;
      x3.toneMapped && (st === null || st.isXRRenderTarget === true) && (tt = s30.toneMapping);
      let It = { shaderID: ut, shaderType: x3.type, shaderName: x3.name, vertexShader: de, fragmentShader: ne, defines: x3.defines, customVertexShaderID: J, customFragmentShaderID: ct, isRawShaderMaterial: x3.isRawShaderMaterial === true, glslVersion: x3.glslVersion, precision: u3, batching: Ot, batchingColor: Ot && N2._colorsTexture !== null, instancing: kt, instancingColor: kt && N2.instanceColor !== null, instancingMorph: kt && N2.morphTexture !== null, outputColorSpace: st === null ? s30.outputColorSpace : st.isXRRenderTarget === true ? st.texture.colorSpace : ee.workingColorSpace, alphaToCoverage: !!x3.alphaToCoverage, map: se, matcap: Wt, envMap: j2, envMapMode: j2 && K2.mapping, envMapCubeUVHeight: it, aoMap: nt, lightMap: et, bumpMap: xt, normalMap: mt, displacementMap: Bt, emissiveMap: Pt, normalMapObjectSpace: mt && x3.normalMapType === rp, normalMapTangentSpace: mt && x3.normalMapType === ei, packedNormalMap: mt && x3.normalMapType === ei && mM(x3.normalMap.format), metalnessMap: Gt, roughnessMap: qt, anisotropy: L, anisotropyMap: V, clearcoat: he, clearcoatMap: q, clearcoatNormalMap: rt, clearcoatRoughnessMap: at, dispersion: te, iridescence: w2, iridescenceMap: Y2, iridescenceThicknessMap: $, sheen: y2, sheenColorMap: dt, sheenRoughnessMap: Lt, specularMap: gt, specularColorMap: ft, specularIntensityMap: Ft, transmission: F2, transmissionMap: zt, thicknessMap: Zt, gradientMap: D2, opaque: x3.transparent === false && x3.blending === Hi && x3.alphaToCoverage === false, alphaMap: ht, alphaTest: Z2, alphaHash: pt, combine: x3.combine, mapUv: se && p2(x3.map.channel), aoMapUv: nt && p2(x3.aoMap.channel), lightMapUv: et && p2(x3.lightMap.channel), bumpMapUv: xt && p2(x3.bumpMap.channel), normalMapUv: mt && p2(x3.normalMap.channel), displacementMapUv: Bt && p2(x3.displacementMap.channel), emissiveMapUv: Pt && p2(x3.emissiveMap.channel), metalnessMapUv: Gt && p2(x3.metalnessMap.channel), roughnessMapUv: qt && p2(x3.roughnessMap.channel), anisotropyMapUv: V && p2(x3.anisotropyMap.channel), clearcoatMapUv: q && p2(x3.clearcoatMap.channel), clearcoatNormalMapUv: rt && p2(x3.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: at && p2(x3.clearcoatRoughnessMap.channel), iridescenceMapUv: Y2 && p2(x3.iridescenceMap.channel), iridescenceThicknessMapUv: $ && p2(x3.iridescenceThicknessMap.channel), sheenColorMapUv: dt && p2(x3.sheenColorMap.channel), sheenRoughnessMapUv: Lt && p2(x3.sheenRoughnessMap.channel), specularMapUv: gt && p2(x3.specularMap.channel), specularColorMapUv: ft && p2(x3.specularColorMap.channel), specularIntensityMapUv: Ft && p2(x3.specularIntensityMap.channel), transmissionMapUv: zt && p2(x3.transmissionMap.channel), thicknessMapUv: Zt && p2(x3.thicknessMap.channel), alphaMapUv: ht && p2(x3.alphaMap.channel), vertexTangents: !!O.attributes.tangent && (mt || L), vertexNormals: !!O.attributes.normal, vertexColors: x3.vertexColors, vertexAlphas: x3.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, pointsUvs: N2.isPoints === true && !!O.attributes.uv && (se || ht), fog: !!X, useFog: x3.fog === true, fogExp2: !!X && X.isFogExp2, flatShading: x3.wireframe === false && (x3.flatShading === true || O.attributes.normal === void 0 && mt === false && (x3.isMeshLambertMaterial || x3.isMeshPhongMaterial || x3.isMeshStandardMaterial || x3.isMeshPhysicalMaterial)), sizeAttenuation: x3.sizeAttenuation === true, logarithmicDepthBuffer: d4, reversedDepthBuffer: Nt, skinning: N2.isSkinnedMesh === true, hasPositionAttribute: O.attributes.position !== void 0, morphTargets: O.morphAttributes.position !== void 0, morphNormals: O.morphAttributes.normal !== void 0, morphColors: O.morphAttributes.color !== void 0, morphTargetsCount: bt, morphTextureStride: Qt, numDirLights: A3.directional.length, numPointLights: A3.point.length, numSpotLights: A3.spot.length, numSpotLightMaps: A3.spotLightMap.length, numRectAreaLights: A3.rectArea.length, numHemiLights: A3.hemi.length, numDirLightShadows: A3.directionalShadowMap.length, numPointLightShadows: A3.pointShadowMap.length, numSpotLightShadows: A3.spotShadowMap.length, numSpotLightShadowsWithMaps: A3.numSpotLightShadowsWithMaps, numLightProbes: A3.numLightProbes, numLightProbeGrids: H2.length, numClippingPlanes: r2.numPlanes, numClipIntersection: r2.numIntersection, dithering: x3.dithering, shadowMapEnabled: s30.shadowMap.enabled && I2.length > 0, shadowMapType: s30.shadowMap.type, toneMapping: tt, decodeVideoTexture: se && x3.map.isVideoTexture === true && ee.getTransfer(x3.map.colorSpace) === ae, decodeVideoTextureEmissive: Pt && x3.emissiveMap.isVideoTexture === true && ee.getTransfer(x3.emissiveMap.colorSpace) === ae, premultipliedAlpha: x3.premultipliedAlpha, doubleSided: x3.side === Un, flipSided: x3.side === Je, useDepthPacking: x3.depthPacking >= 0, depthPacking: x3.depthPacking || 0, index0AttributeName: x3.index0AttributeName, extensionClipCullDistance: Mt && x3.extensions.clipCullDistance === true && e.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Mt && x3.extensions.multiDraw === true || Ot) && e.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: e.has("KHR_parallel_shader_compile"), customProgramCacheKey: x3.customProgramCacheKey() };
      return It.vertexUv1s = l2.has(1), It.vertexUv2s = l2.has(2), It.vertexUv3s = l2.has(3), l2.clear(), It;
    }
    function g(x3) {
      let A3 = [];
      if (x3.shaderID ? A3.push(x3.shaderID) : (A3.push(x3.customVertexShaderID), A3.push(x3.customFragmentShaderID)), x3.defines !== void 0) for (let I2 in x3.defines) A3.push(I2), A3.push(x3.defines[I2]);
      return x3.isRawShaderMaterial === false && (m2(A3, x3), M2(A3, x3), A3.push(s30.outputColorSpace)), A3.push(x3.customProgramCacheKey), A3.join();
    }
    function m2(x3, A3) {
      x3.push(A3.precision), x3.push(A3.outputColorSpace), x3.push(A3.envMapMode), x3.push(A3.envMapCubeUVHeight), x3.push(A3.mapUv), x3.push(A3.alphaMapUv), x3.push(A3.lightMapUv), x3.push(A3.aoMapUv), x3.push(A3.bumpMapUv), x3.push(A3.normalMapUv), x3.push(A3.displacementMapUv), x3.push(A3.emissiveMapUv), x3.push(A3.metalnessMapUv), x3.push(A3.roughnessMapUv), x3.push(A3.anisotropyMapUv), x3.push(A3.clearcoatMapUv), x3.push(A3.clearcoatNormalMapUv), x3.push(A3.clearcoatRoughnessMapUv), x3.push(A3.iridescenceMapUv), x3.push(A3.iridescenceThicknessMapUv), x3.push(A3.sheenColorMapUv), x3.push(A3.sheenRoughnessMapUv), x3.push(A3.specularMapUv), x3.push(A3.specularColorMapUv), x3.push(A3.specularIntensityMapUv), x3.push(A3.transmissionMapUv), x3.push(A3.thicknessMapUv), x3.push(A3.combine), x3.push(A3.fogExp2), x3.push(A3.sizeAttenuation), x3.push(A3.morphTargetsCount), x3.push(A3.morphAttributeCount), x3.push(A3.numDirLights), x3.push(A3.numPointLights), x3.push(A3.numSpotLights), x3.push(A3.numSpotLightMaps), x3.push(A3.numHemiLights), x3.push(A3.numRectAreaLights), x3.push(A3.numDirLightShadows), x3.push(A3.numPointLightShadows), x3.push(A3.numSpotLightShadows), x3.push(A3.numSpotLightShadowsWithMaps), x3.push(A3.numLightProbes), x3.push(A3.shadowMapType), x3.push(A3.toneMapping), x3.push(A3.numClippingPlanes), x3.push(A3.numClipIntersection), x3.push(A3.depthPacking);
    }
    function M2(x3, A3) {
      a.disableAll(), A3.instancing && a.enable(0), A3.instancingColor && a.enable(1), A3.instancingMorph && a.enable(2), A3.matcap && a.enable(3), A3.envMap && a.enable(4), A3.normalMapObjectSpace && a.enable(5), A3.normalMapTangentSpace && a.enable(6), A3.clearcoat && a.enable(7), A3.iridescence && a.enable(8), A3.alphaTest && a.enable(9), A3.vertexColors && a.enable(10), A3.vertexAlphas && a.enable(11), A3.vertexUv1s && a.enable(12), A3.vertexUv2s && a.enable(13), A3.vertexUv3s && a.enable(14), A3.vertexTangents && a.enable(15), A3.anisotropy && a.enable(16), A3.alphaHash && a.enable(17), A3.batching && a.enable(18), A3.dispersion && a.enable(19), A3.batchingColor && a.enable(20), A3.gradientMap && a.enable(21), A3.packedNormalMap && a.enable(22), A3.vertexNormals && a.enable(23), x3.push(a.mask), a.disableAll(), A3.fog && a.enable(0), A3.useFog && a.enable(1), A3.flatShading && a.enable(2), A3.logarithmicDepthBuffer && a.enable(3), A3.reversedDepthBuffer && a.enable(4), A3.skinning && a.enable(5), A3.morphTargets && a.enable(6), A3.morphNormals && a.enable(7), A3.morphColors && a.enable(8), A3.premultipliedAlpha && a.enable(9), A3.shadowMapEnabled && a.enable(10), A3.doubleSided && a.enable(11), A3.flipSided && a.enable(12), A3.useDepthPacking && a.enable(13), A3.dithering && a.enable(14), A3.transmission && a.enable(15), A3.sheen && a.enable(16), A3.opaque && a.enable(17), A3.pointsUvs && a.enable(18), A3.decodeVideoTexture && a.enable(19), A3.decodeVideoTextureEmissive && a.enable(20), A3.alphaToCoverage && a.enable(21), A3.numLightProbeGrids > 0 && a.enable(22), A3.hasPositionAttribute && a.enable(23), x3.push(a.mask);
    }
    function S2(x3) {
      let A3 = f3[x3.type], I2;
      if (A3) {
        let P3 = kn[A3];
        I2 = bp.clone(P3.uniforms);
      } else I2 = x3.uniforms;
      return I2;
    }
    function v(x3, A3) {
      let I2 = h3.get(A3);
      return I2 !== void 0 ? ++I2.usedTimes : (I2 = new fM(s30, A3, x3, i2), c3.push(I2), h3.set(A3, I2)), I2;
    }
    function E(x3) {
      if (--x3.usedTimes === 0) {
        let A3 = c3.indexOf(x3);
        c3[A3] = c3[c3.length - 1], c3.pop(), h3.delete(x3.cacheKey), x3.destroy();
      }
    }
    function T2(x3) {
      o3.remove(x3);
    }
    function R2() {
      o3.dispose();
    }
    return { getParameters: _, getProgramCacheKey: g, getUniforms: S2, acquireProgram: v, releaseProgram: E, releaseShaderCache: T2, programs: c3, dispose: R2 };
  }
  function _M() {
    let s30 = /* @__PURE__ */ new WeakMap();
    function t(a) {
      return s30.has(a);
    }
    function e(a) {
      let o3 = s30.get(a);
      return o3 === void 0 && (o3 = {}, s30.set(a, o3)), o3;
    }
    function n2(a) {
      s30.delete(a);
    }
    function i2(a, o3, l2) {
      s30.get(a)[o3] = l2;
    }
    function r2() {
      s30 = /* @__PURE__ */ new WeakMap();
    }
    return { has: t, get: e, remove: n2, update: i2, dispose: r2 };
  }
  function xM(s30, t) {
    return s30.groupOrder !== t.groupOrder ? s30.groupOrder - t.groupOrder : s30.renderOrder !== t.renderOrder ? s30.renderOrder - t.renderOrder : s30.material.id !== t.material.id ? s30.material.id - t.material.id : s30.materialVariant !== t.materialVariant ? s30.materialVariant - t.materialVariant : s30.z !== t.z ? s30.z - t.z : s30.id - t.id;
  }
  function qp(s30, t) {
    return s30.groupOrder !== t.groupOrder ? s30.groupOrder - t.groupOrder : s30.renderOrder !== t.renderOrder ? s30.renderOrder - t.renderOrder : s30.z !== t.z ? t.z - s30.z : s30.id - t.id;
  }
  function Yp() {
    let s30 = [], t = 0, e = [], n2 = [], i2 = [];
    function r2() {
      t = 0, e.length = 0, n2.length = 0, i2.length = 0;
    }
    function a(u3) {
      let f3 = 0;
      return u3.isInstancedMesh && (f3 += 2), u3.isSkinnedMesh && (f3 += 1), f3;
    }
    function o3(u3, f3, p2, _, g, m2) {
      let M2 = s30[t];
      return M2 === void 0 ? (M2 = { id: u3.id, object: u3, geometry: f3, material: p2, materialVariant: a(u3), groupOrder: _, renderOrder: u3.renderOrder, z: g, group: m2 }, s30[t] = M2) : (M2.id = u3.id, M2.object = u3, M2.geometry = f3, M2.material = p2, M2.materialVariant = a(u3), M2.groupOrder = _, M2.renderOrder = u3.renderOrder, M2.z = g, M2.group = m2), t++, M2;
    }
    function l2(u3, f3, p2, _, g, m2) {
      let M2 = o3(u3, f3, p2, _, g, m2);
      p2.transmission > 0 ? n2.push(M2) : p2.transparent === true ? i2.push(M2) : e.push(M2);
    }
    function c3(u3, f3, p2, _, g, m2) {
      let M2 = o3(u3, f3, p2, _, g, m2);
      p2.transmission > 0 ? n2.unshift(M2) : p2.transparent === true ? i2.unshift(M2) : e.unshift(M2);
    }
    function h3(u3, f3, p2) {
      e.length > 1 && e.sort(u3 || xM), n2.length > 1 && n2.sort(f3 || qp), i2.length > 1 && i2.sort(f3 || qp), p2 && (e.reverse(), n2.reverse(), i2.reverse());
    }
    function d4() {
      for (let u3 = t, f3 = s30.length; u3 < f3; u3++) {
        let p2 = s30[u3];
        if (p2.id === null) break;
        p2.id = null, p2.object = null, p2.geometry = null, p2.material = null, p2.group = null;
      }
    }
    return { opaque: e, transmissive: n2, transparent: i2, init: r2, push: l2, unshift: c3, finish: d4, sort: h3 };
  }
  function vM() {
    let s30 = /* @__PURE__ */ new WeakMap();
    function t(n2, i2) {
      let r2 = s30.get(n2), a;
      return r2 === void 0 ? (a = new Yp(), s30.set(n2, [a])) : i2 >= r2.length ? (a = new Yp(), r2.push(a)) : a = r2[i2], a;
    }
    function e() {
      s30 = /* @__PURE__ */ new WeakMap();
    }
    return { get: t, dispose: e };
  }
  function yM() {
    let s30 = {};
    return { get: function(t) {
      if (s30[t.id] !== void 0) return s30[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = { direction: new C(), color: new St() };
          break;
        case "SpotLight":
          e = { position: new C(), direction: new C(), color: new St(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          e = { position: new C(), color: new St(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          e = { direction: new C(), skyColor: new St(), groundColor: new St() };
          break;
        case "RectAreaLight":
          e = { color: new St(), position: new C(), halfWidth: new C(), halfHeight: new C() };
          break;
      }
      return s30[t.id] = e, e;
    } };
  }
  function MM() {
    let s30 = {};
    return { get: function(t) {
      if (s30[t.id] !== void 0) return s30[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Q() };
          break;
        case "SpotLight":
          e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Q() };
          break;
        case "PointLight":
          e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Q(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
          break;
      }
      return s30[t.id] = e, e;
    } };
  }
  var SM = 0;
  function bM(s30, t) {
    return (t.castShadow ? 2 : 0) - (s30.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (s30.map ? 1 : 0);
  }
  function TM(s30) {
    let t = new yM(), e = MM(), n2 = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
    for (let c3 = 0; c3 < 9; c3++) n2.probe.push(new C());
    let i2 = new C(), r2 = new Ht(), a = new Ht();
    function o3(c3) {
      let h3 = 0, d4 = 0, u3 = 0;
      for (let A3 = 0; A3 < 9; A3++) n2.probe[A3].set(0, 0, 0);
      let f3 = 0, p2 = 0, _ = 0, g = 0, m2 = 0, M2 = 0, S2 = 0, v = 0, E = 0, T2 = 0, R2 = 0;
      c3.sort(bM);
      for (let A3 = 0, I2 = c3.length; A3 < I2; A3++) {
        let P3 = c3[A3], N2 = P3.color, H2 = P3.intensity, X = P3.distance, O = null;
        if (P3.shadow && P3.shadow.map && (P3.shadow.map.texture.format === bi ? O = P3.shadow.map.texture : O = P3.shadow.map.depthTexture || P3.shadow.map.texture), P3.isAmbientLight) h3 += N2.r * H2, d4 += N2.g * H2, u3 += N2.b * H2;
        else if (P3.isLightProbe) {
          for (let W = 0; W < 9; W++) n2.probe[W].addScaledVector(P3.sh.coefficients[W], H2);
          R2++;
        } else if (P3.isDirectionalLight) {
          let W = t.get(P3);
          if (W.color.copy(P3.color).multiplyScalar(P3.intensity), P3.castShadow) {
            let G = P3.shadow, K2 = e.get(P3);
            K2.shadowIntensity = G.intensity, K2.shadowBias = G.bias, K2.shadowNormalBias = G.normalBias, K2.shadowRadius = G.radius, K2.shadowMapSize = G.mapSize, n2.directionalShadow[f3] = K2, n2.directionalShadowMap[f3] = O, n2.directionalShadowMatrix[f3] = P3.shadow.matrix, M2++;
          }
          n2.directional[f3] = W, f3++;
        } else if (P3.isSpotLight) {
          let W = t.get(P3);
          W.position.setFromMatrixPosition(P3.matrixWorld), W.color.copy(N2).multiplyScalar(H2), W.distance = X, W.coneCos = Math.cos(P3.angle), W.penumbraCos = Math.cos(P3.angle * (1 - P3.penumbra)), W.decay = P3.decay, n2.spot[_] = W;
          let G = P3.shadow;
          if (P3.map && (n2.spotLightMap[E] = P3.map, E++, G.updateMatrices(P3), P3.castShadow && T2++), n2.spotLightMatrix[_] = G.matrix, P3.castShadow) {
            let K2 = e.get(P3);
            K2.shadowIntensity = G.intensity, K2.shadowBias = G.bias, K2.shadowNormalBias = G.normalBias, K2.shadowRadius = G.radius, K2.shadowMapSize = G.mapSize, n2.spotShadow[_] = K2, n2.spotShadowMap[_] = O, v++;
          }
          _++;
        } else if (P3.isRectAreaLight) {
          let W = t.get(P3);
          W.color.copy(N2).multiplyScalar(H2), W.halfWidth.set(P3.width * 0.5, 0, 0), W.halfHeight.set(0, P3.height * 0.5, 0), n2.rectArea[g] = W, g++;
        } else if (P3.isPointLight) {
          let W = t.get(P3);
          if (W.color.copy(P3.color).multiplyScalar(P3.intensity), W.distance = P3.distance, W.decay = P3.decay, P3.castShadow) {
            let G = P3.shadow, K2 = e.get(P3);
            K2.shadowIntensity = G.intensity, K2.shadowBias = G.bias, K2.shadowNormalBias = G.normalBias, K2.shadowRadius = G.radius, K2.shadowMapSize = G.mapSize, K2.shadowCameraNear = G.camera.near, K2.shadowCameraFar = G.camera.far, n2.pointShadow[p2] = K2, n2.pointShadowMap[p2] = O, n2.pointShadowMatrix[p2] = P3.shadow.matrix, S2++;
          }
          n2.point[p2] = W, p2++;
        } else if (P3.isHemisphereLight) {
          let W = t.get(P3);
          W.skyColor.copy(P3.color).multiplyScalar(H2), W.groundColor.copy(P3.groundColor).multiplyScalar(H2), n2.hemi[m2] = W, m2++;
        }
      }
      g > 0 && (s30.has("OES_texture_float_linear") === true ? (n2.rectAreaLTC1 = _t.LTC_FLOAT_1, n2.rectAreaLTC2 = _t.LTC_FLOAT_2) : (n2.rectAreaLTC1 = _t.LTC_HALF_1, n2.rectAreaLTC2 = _t.LTC_HALF_2)), n2.ambient[0] = h3, n2.ambient[1] = d4, n2.ambient[2] = u3;
      let x3 = n2.hash;
      (x3.directionalLength !== f3 || x3.pointLength !== p2 || x3.spotLength !== _ || x3.rectAreaLength !== g || x3.hemiLength !== m2 || x3.numDirectionalShadows !== M2 || x3.numPointShadows !== S2 || x3.numSpotShadows !== v || x3.numSpotMaps !== E || x3.numLightProbes !== R2) && (n2.directional.length = f3, n2.spot.length = _, n2.rectArea.length = g, n2.point.length = p2, n2.hemi.length = m2, n2.directionalShadow.length = M2, n2.directionalShadowMap.length = M2, n2.pointShadow.length = S2, n2.pointShadowMap.length = S2, n2.spotShadow.length = v, n2.spotShadowMap.length = v, n2.directionalShadowMatrix.length = M2, n2.pointShadowMatrix.length = S2, n2.spotLightMatrix.length = v + E - T2, n2.spotLightMap.length = E, n2.numSpotLightShadowsWithMaps = T2, n2.numLightProbes = R2, x3.directionalLength = f3, x3.pointLength = p2, x3.spotLength = _, x3.rectAreaLength = g, x3.hemiLength = m2, x3.numDirectionalShadows = M2, x3.numPointShadows = S2, x3.numSpotShadows = v, x3.numSpotMaps = E, x3.numLightProbes = R2, n2.version = SM++);
    }
    function l2(c3, h3) {
      let d4 = 0, u3 = 0, f3 = 0, p2 = 0, _ = 0, g = h3.matrixWorldInverse;
      for (let m2 = 0, M2 = c3.length; m2 < M2; m2++) {
        let S2 = c3[m2];
        if (S2.isDirectionalLight) {
          let v = n2.directional[d4];
          v.direction.setFromMatrixPosition(S2.matrixWorld), i2.setFromMatrixPosition(S2.target.matrixWorld), v.direction.sub(i2), v.direction.transformDirection(g), d4++;
        } else if (S2.isSpotLight) {
          let v = n2.spot[f3];
          v.position.setFromMatrixPosition(S2.matrixWorld), v.position.applyMatrix4(g), v.direction.setFromMatrixPosition(S2.matrixWorld), i2.setFromMatrixPosition(S2.target.matrixWorld), v.direction.sub(i2), v.direction.transformDirection(g), f3++;
        } else if (S2.isRectAreaLight) {
          let v = n2.rectArea[p2];
          v.position.setFromMatrixPosition(S2.matrixWorld), v.position.applyMatrix4(g), a.identity(), r2.copy(S2.matrixWorld), r2.premultiply(g), a.extractRotation(r2), v.halfWidth.set(S2.width * 0.5, 0, 0), v.halfHeight.set(0, S2.height * 0.5, 0), v.halfWidth.applyMatrix4(a), v.halfHeight.applyMatrix4(a), p2++;
        } else if (S2.isPointLight) {
          let v = n2.point[u3];
          v.position.setFromMatrixPosition(S2.matrixWorld), v.position.applyMatrix4(g), u3++;
        } else if (S2.isHemisphereLight) {
          let v = n2.hemi[_];
          v.direction.setFromMatrixPosition(S2.matrixWorld), v.direction.transformDirection(g), _++;
        }
      }
    }
    return { setup: o3, setupView: l2, state: n2 };
  }
  function Zp(s30) {
    let t = new TM(s30), e = [], n2 = [], i2 = [];
    function r2(u3) {
      d4.camera = u3, e.length = 0, n2.length = 0, i2.length = 0;
    }
    function a(u3) {
      e.push(u3);
    }
    function o3(u3) {
      n2.push(u3);
    }
    function l2(u3) {
      i2.push(u3);
    }
    function c3() {
      t.setup(e);
    }
    function h3(u3) {
      t.setupView(e, u3);
    }
    let d4 = { lightsArray: e, shadowsArray: n2, lightProbeGridArray: i2, camera: null, lights: t, transmissionRenderTarget: {}, textureUnits: 0 };
    return { init: r2, state: d4, setupLights: c3, setupLightsView: h3, pushLight: a, pushShadow: o3, pushLightProbeGrid: l2 };
  }
  function AM(s30) {
    let t = /* @__PURE__ */ new WeakMap();
    function e(i2, r2 = 0) {
      let a = t.get(i2), o3;
      return a === void 0 ? (o3 = new Zp(s30), t.set(i2, [o3])) : r2 >= a.length ? (o3 = new Zp(s30), a.push(o3)) : o3 = a[r2], o3;
    }
    function n2() {
      t = /* @__PURE__ */ new WeakMap();
    }
    return { get: e, dispose: n2 };
  }
  var EM = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
  var wM = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`;
  var CM = [new C(1, 0, 0), new C(-1, 0, 0), new C(0, 1, 0), new C(0, -1, 0), new C(0, 0, 1), new C(0, 0, -1)];
  var RM = [new C(0, -1, 0), new C(0, -1, 0), new C(0, 0, 1), new C(0, 0, -1), new C(0, -1, 0), new C(0, -1, 0)];
  var Jp = new Ht();
  var ha = new C();
  var td = new C();
  function IM(s30, t, e) {
    let n2 = new Kn(), i2 = new Q(), r2 = new Q(), a = new ce(), o3 = new kr(), l2 = new Gr(), c3 = {}, h3 = e.maxTextureSize, d4 = { [$n]: Je, [Je]: $n, [Un]: Un }, u3 = new en({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Q() }, radius: { value: 4 } }, vertexShader: EM, fragmentShader: wM }), f3 = u3.clone();
    f3.defines.HORIZONTAL_PASS = 1;
    let p2 = new Yt();
    p2.setAttribute("position", new oe(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    let _ = new Se(p2, u3), g = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Kr;
    let m2 = this.type;
    this.render = function(T2, R2, x3) {
      if (g.enabled === false || g.autoUpdate === false && g.needsUpdate === false || T2.length === 0) return;
      this.type === Df && (ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = Kr);
      let A3 = s30.getRenderTarget(), I2 = s30.getActiveCubeFace(), P3 = s30.getActiveMipmapLevel(), N2 = s30.state;
      N2.setBlending(Fn), N2.buffers.depth.getReversed() === true ? N2.buffers.color.setClear(0, 0, 0, 0) : N2.buffers.color.setClear(1, 1, 1, 1), N2.buffers.depth.setTest(true), N2.setScissorTest(false);
      let H2 = m2 !== this.type;
      H2 && R2.traverse(function(X) {
        X.material && (Array.isArray(X.material) ? X.material.forEach((O) => O.needsUpdate = true) : X.material.needsUpdate = true);
      });
      for (let X = 0, O = T2.length; X < O; X++) {
        let W = T2[X], G = W.shadow;
        if (G === void 0) {
          ot("WebGLShadowMap:", W, "has no shadow.");
          continue;
        }
        if (G.autoUpdate === false && G.needsUpdate === false) continue;
        i2.copy(G.mapSize);
        let K2 = G.getFrameExtents();
        i2.multiply(K2), r2.copy(G.mapSize), (i2.x > h3 || i2.y > h3) && (i2.x > h3 && (r2.x = Math.floor(h3 / K2.x), i2.x = r2.x * K2.x, G.mapSize.x = r2.x), i2.y > h3 && (r2.y = Math.floor(h3 / K2.y), i2.y = r2.y * K2.y, G.mapSize.y = r2.y));
        let it = s30.state.buffers.depth.getReversed();
        if (G.camera._reversedDepth = it, G.map === null || H2 === true) {
          if (G.map !== null && (G.map.depthTexture !== null && (G.map.depthTexture.dispose(), G.map.depthTexture = null), G.map.dispose()), this.type === ks) {
            if (W.isPointLight) {
              ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
              continue;
            }
            G.map = new Ze(i2.x, i2.y, { format: bi, type: zn, minFilter: _e, magFilter: _e, generateMipmaps: false }), G.map.texture.name = W.name + ".shadowMap", G.map.depthTexture = new Qn(i2.x, i2.y, qe), G.map.depthTexture.name = W.name + ".shadowMapDepth", G.map.depthTexture.format = Pn, G.map.depthTexture.compareFunction = null, G.map.depthTexture.minFilter = Ee, G.map.depthTexture.magFilter = Ee;
          } else W.isPointLight ? (G.map = new _c(i2.x), G.map.depthTexture = new Po(i2.x, mn)) : (G.map = new Ze(i2.x, i2.y), G.map.depthTexture = new Qn(i2.x, i2.y, mn)), G.map.depthTexture.name = W.name + ".shadowMap", G.map.depthTexture.format = Pn, this.type === Kr ? (G.map.depthTexture.compareFunction = it ? dc : uc, G.map.depthTexture.minFilter = _e, G.map.depthTexture.magFilter = _e) : (G.map.depthTexture.compareFunction = null, G.map.depthTexture.minFilter = Ee, G.map.depthTexture.magFilter = Ee);
          G.camera.updateProjectionMatrix();
        }
        let ut = G.map.isWebGLCubeRenderTarget ? 6 : 1;
        for (let lt = 0; lt < ut; lt++) {
          if (G.map.isWebGLCubeRenderTarget) s30.setRenderTarget(G.map, lt), s30.clear();
          else {
            lt === 0 && (s30.setRenderTarget(G.map), s30.clear());
            let bt = G.getViewport(lt);
            a.set(r2.x * bt.x, r2.y * bt.y, r2.x * bt.z, r2.y * bt.w), N2.viewport(a);
          }
          if (W.isPointLight) {
            let bt = G.camera, Qt = G.matrix, de = W.distance || bt.far;
            de !== bt.far && (bt.far = de, bt.updateProjectionMatrix()), ha.setFromMatrixPosition(W.matrixWorld), bt.position.copy(ha), td.copy(bt.position), td.add(CM[lt]), bt.up.copy(RM[lt]), bt.lookAt(td), bt.updateMatrixWorld(), Qt.makeTranslation(-ha.x, -ha.y, -ha.z), Jp.multiplyMatrices(bt.projectionMatrix, bt.matrixWorldInverse), G._frustum.setFromProjectionMatrix(Jp, bt.coordinateSystem, bt.reversedDepth);
          } else G.updateMatrices(W);
          n2 = G.getFrustum(), v(R2, x3, G.camera, W, this.type);
        }
        G.isPointLightShadow !== true && this.type === ks && M2(G, x3), G.needsUpdate = false;
      }
      m2 = this.type, g.needsUpdate = false, s30.setRenderTarget(A3, I2, P3);
    };
    function M2(T2, R2) {
      let x3 = t.update(_);
      u3.defines.VSM_SAMPLES !== T2.blurSamples && (u3.defines.VSM_SAMPLES = T2.blurSamples, f3.defines.VSM_SAMPLES = T2.blurSamples, u3.needsUpdate = true, f3.needsUpdate = true), T2.mapPass === null && (T2.mapPass = new Ze(i2.x, i2.y, { format: bi, type: zn })), u3.uniforms.shadow_pass.value = T2.map.depthTexture, u3.uniforms.resolution.value = T2.mapSize, u3.uniforms.radius.value = T2.radius, s30.setRenderTarget(T2.mapPass), s30.clear(), s30.renderBufferDirect(R2, null, x3, u3, _, null), f3.uniforms.shadow_pass.value = T2.mapPass.texture, f3.uniforms.resolution.value = T2.mapSize, f3.uniforms.radius.value = T2.radius, s30.setRenderTarget(T2.map), s30.clear(), s30.renderBufferDirect(R2, null, x3, f3, _, null);
    }
    function S2(T2, R2, x3, A3) {
      let I2 = null, P3 = x3.isPointLight === true ? T2.customDistanceMaterial : T2.customDepthMaterial;
      if (P3 !== void 0) I2 = P3;
      else if (I2 = x3.isPointLight === true ? l2 : o3, s30.localClippingEnabled && R2.clipShadows === true && Array.isArray(R2.clippingPlanes) && R2.clippingPlanes.length !== 0 || R2.displacementMap && R2.displacementScale !== 0 || R2.alphaMap && R2.alphaTest > 0 || R2.map && R2.alphaTest > 0 || R2.alphaToCoverage === true) {
        let N2 = I2.uuid, H2 = R2.uuid, X = c3[N2];
        X === void 0 && (X = {}, c3[N2] = X);
        let O = X[H2];
        O === void 0 && (O = I2.clone(), X[H2] = O, R2.addEventListener("dispose", E)), I2 = O;
      }
      if (I2.visible = R2.visible, I2.wireframe = R2.wireframe, A3 === ks ? I2.side = R2.shadowSide !== null ? R2.shadowSide : R2.side : I2.side = R2.shadowSide !== null ? R2.shadowSide : d4[R2.side], I2.alphaMap = R2.alphaMap, I2.alphaTest = R2.alphaToCoverage === true ? 0.5 : R2.alphaTest, I2.map = R2.map, I2.clipShadows = R2.clipShadows, I2.clippingPlanes = R2.clippingPlanes, I2.clipIntersection = R2.clipIntersection, I2.displacementMap = R2.displacementMap, I2.displacementScale = R2.displacementScale, I2.displacementBias = R2.displacementBias, I2.wireframeLinewidth = R2.wireframeLinewidth, I2.linewidth = R2.linewidth, x3.isPointLight === true && I2.isMeshDistanceMaterial === true) {
        let N2 = s30.properties.get(I2);
        N2.light = x3;
      }
      return I2;
    }
    function v(T2, R2, x3, A3, I2) {
      if (T2.visible === false) return;
      if (T2.layers.test(R2.layers) && (T2.isMesh || T2.isLine || T2.isPoints) && (T2.castShadow || T2.receiveShadow && I2 === ks) && (!T2.frustumCulled || n2.intersectsObject(T2))) {
        T2.modelViewMatrix.multiplyMatrices(x3.matrixWorldInverse, T2.matrixWorld);
        let H2 = t.update(T2), X = T2.material;
        if (Array.isArray(X)) {
          let O = H2.groups;
          for (let W = 0, G = O.length; W < G; W++) {
            let K2 = O[W], it = X[K2.materialIndex];
            if (it && it.visible) {
              let ut = S2(T2, it, A3, I2);
              T2.onBeforeShadow(s30, T2, R2, x3, H2, ut, K2), s30.renderBufferDirect(x3, null, H2, ut, T2, K2), T2.onAfterShadow(s30, T2, R2, x3, H2, ut, K2);
            }
          }
        } else if (X.visible) {
          let O = S2(T2, X, A3, I2);
          T2.onBeforeShadow(s30, T2, R2, x3, H2, O, null), s30.renderBufferDirect(x3, null, H2, O, T2, null), T2.onAfterShadow(s30, T2, R2, x3, H2, O, null);
        }
      }
      let N2 = T2.children;
      for (let H2 = 0, X = N2.length; H2 < X; H2++) v(N2[H2], R2, x3, A3, I2);
    }
    function E(T2) {
      T2.target.removeEventListener("dispose", E);
      for (let x3 in c3) {
        let A3 = c3[x3], I2 = T2.target.uuid;
        I2 in A3 && (A3[I2].dispose(), delete A3[I2]);
      }
    }
  }
  function PM(s30, t) {
    function e() {
      let D2 = false, ht = new ce(), Z2 = null, pt = new ce(0, 0, 0, 0);
      return { setMask: function(Mt) {
        Z2 !== Mt && !D2 && (s30.colorMask(Mt, Mt, Mt, Mt), Z2 = Mt);
      }, setLocked: function(Mt) {
        D2 = Mt;
      }, setClear: function(Mt, tt, It, wt, ve) {
        ve === true && (Mt *= wt, tt *= wt, It *= wt), ht.set(Mt, tt, It, wt), pt.equals(ht) === false && (s30.clearColor(Mt, tt, It, wt), pt.copy(ht));
      }, reset: function() {
        D2 = false, Z2 = null, pt.set(-1, 0, 0, 0);
      } };
    }
    function n2() {
      let D2 = false, ht = false, Z2 = null, pt = null, Mt = null;
      return { setReversed: function(tt) {
        if (ht !== tt) {
          let It = t.get("EXT_clip_control");
          tt ? It.clipControlEXT(It.LOWER_LEFT_EXT, It.ZERO_TO_ONE_EXT) : It.clipControlEXT(It.LOWER_LEFT_EXT, It.NEGATIVE_ONE_TO_ONE_EXT), ht = tt;
          let wt = Mt;
          Mt = null, this.setClear(wt);
        }
      }, getReversed: function() {
        return ht;
      }, setTest: function(tt) {
        tt ? st(s30.DEPTH_TEST) : Nt(s30.DEPTH_TEST);
      }, setMask: function(tt) {
        Z2 !== tt && !D2 && (s30.depthMask(tt), Z2 = tt);
      }, setFunc: function(tt) {
        if (ht && (tt = gp[tt]), pt !== tt) {
          switch (tt) {
            case ao:
              s30.depthFunc(s30.NEVER);
              break;
            case oo:
              s30.depthFunc(s30.ALWAYS);
              break;
            case lo:
              s30.depthFunc(s30.LESS);
              break;
            case Wi:
              s30.depthFunc(s30.LEQUAL);
              break;
            case co:
              s30.depthFunc(s30.EQUAL);
              break;
            case ho:
              s30.depthFunc(s30.GEQUAL);
              break;
            case uo:
              s30.depthFunc(s30.GREATER);
              break;
            case fo:
              s30.depthFunc(s30.NOTEQUAL);
              break;
            default:
              s30.depthFunc(s30.LEQUAL);
          }
          pt = tt;
        }
      }, setLocked: function(tt) {
        D2 = tt;
      }, setClear: function(tt) {
        Mt !== tt && (Mt = tt, ht && (tt = 1 - tt), s30.clearDepth(tt));
      }, reset: function() {
        D2 = false, Z2 = null, pt = null, Mt = null, ht = false;
      } };
    }
    function i2() {
      let D2 = false, ht = null, Z2 = null, pt = null, Mt = null, tt = null, It = null, wt = null, ve = null;
      return { setTest: function(me) {
        D2 || (me ? st(s30.STENCIL_TEST) : Nt(s30.STENCIL_TEST));
      }, setMask: function(me) {
        ht !== me && !D2 && (s30.stencilMask(me), ht = me);
      }, setFunc: function(me, bn, Tn) {
        (Z2 !== me || pt !== bn || Mt !== Tn) && (s30.stencilFunc(me, bn, Tn), Z2 = me, pt = bn, Mt = Tn);
      }, setOp: function(me, bn, Tn) {
        (tt !== me || It !== bn || wt !== Tn) && (s30.stencilOp(me, bn, Tn), tt = me, It = bn, wt = Tn);
      }, setLocked: function(me) {
        D2 = me;
      }, setClear: function(me) {
        ve !== me && (s30.clearStencil(me), ve = me);
      }, reset: function() {
        D2 = false, ht = null, Z2 = null, pt = null, Mt = null, tt = null, It = null, wt = null, ve = null;
      } };
    }
    let r2 = new e(), a = new n2(), o3 = new i2(), l2 = /* @__PURE__ */ new WeakMap(), c3 = /* @__PURE__ */ new WeakMap(), h3 = {}, d4 = {}, u3 = {}, f3 = /* @__PURE__ */ new WeakMap(), p2 = [], _ = null, g = false, m2 = null, M2 = null, S2 = null, v = null, E = null, T2 = null, R2 = null, x3 = new St(0, 0, 0), A3 = 0, I2 = false, P3 = null, N2 = null, H2 = null, X = null, O = null, W = s30.getParameter(s30.MAX_COMBINED_TEXTURE_IMAGE_UNITS), G = false, K2 = 0, it = s30.getParameter(s30.VERSION);
    it.indexOf("WebGL") !== -1 ? (K2 = parseFloat(/^WebGL (\d)/.exec(it)[1]), G = K2 >= 1) : it.indexOf("OpenGL ES") !== -1 && (K2 = parseFloat(/^OpenGL ES (\d)/.exec(it)[1]), G = K2 >= 2);
    let ut = null, lt = {}, bt = s30.getParameter(s30.SCISSOR_BOX), Qt = s30.getParameter(s30.VIEWPORT), de = new ce().fromArray(bt), ne = new ce().fromArray(Qt);
    function J(D2, ht, Z2, pt) {
      let Mt = new Uint8Array(4), tt = s30.createTexture();
      s30.bindTexture(D2, tt), s30.texParameteri(D2, s30.TEXTURE_MIN_FILTER, s30.NEAREST), s30.texParameteri(D2, s30.TEXTURE_MAG_FILTER, s30.NEAREST);
      for (let It = 0; It < Z2; It++) D2 === s30.TEXTURE_3D || D2 === s30.TEXTURE_2D_ARRAY ? s30.texImage3D(ht, 0, s30.RGBA, 1, 1, pt, 0, s30.RGBA, s30.UNSIGNED_BYTE, Mt) : s30.texImage2D(ht + It, 0, s30.RGBA, 1, 1, 0, s30.RGBA, s30.UNSIGNED_BYTE, Mt);
      return tt;
    }
    let ct = {};
    ct[s30.TEXTURE_2D] = J(s30.TEXTURE_2D, s30.TEXTURE_2D, 1), ct[s30.TEXTURE_CUBE_MAP] = J(s30.TEXTURE_CUBE_MAP, s30.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ct[s30.TEXTURE_2D_ARRAY] = J(s30.TEXTURE_2D_ARRAY, s30.TEXTURE_2D_ARRAY, 1, 1), ct[s30.TEXTURE_3D] = J(s30.TEXTURE_3D, s30.TEXTURE_3D, 1, 1), r2.setClear(0, 0, 0, 1), a.setClear(1), o3.setClear(0), st(s30.DEPTH_TEST), a.setFunc(Wi), xt(false), mt(Tu), st(s30.CULL_FACE), nt(Fn);
    function st(D2) {
      h3[D2] !== true && (s30.enable(D2), h3[D2] = true);
    }
    function Nt(D2) {
      h3[D2] !== false && (s30.disable(D2), h3[D2] = false);
    }
    function kt(D2, ht) {
      return u3[D2] !== ht ? (s30.bindFramebuffer(D2, ht), u3[D2] = ht, D2 === s30.DRAW_FRAMEBUFFER && (u3[s30.FRAMEBUFFER] = ht), D2 === s30.FRAMEBUFFER && (u3[s30.DRAW_FRAMEBUFFER] = ht), true) : false;
    }
    function Ot(D2, ht) {
      let Z2 = p2, pt = false;
      if (D2) {
        Z2 = f3.get(ht), Z2 === void 0 && (Z2 = [], f3.set(ht, Z2));
        let Mt = D2.textures;
        if (Z2.length !== Mt.length || Z2[0] !== s30.COLOR_ATTACHMENT0) {
          for (let tt = 0, It = Mt.length; tt < It; tt++) Z2[tt] = s30.COLOR_ATTACHMENT0 + tt;
          Z2.length = Mt.length, pt = true;
        }
      } else Z2[0] !== s30.BACK && (Z2[0] = s30.BACK, pt = true);
      pt && s30.drawBuffers(Z2);
    }
    function se(D2) {
      return _ !== D2 ? (s30.useProgram(D2), _ = D2, true) : false;
    }
    let Wt = { [mi]: s30.FUNC_ADD, [Uf]: s30.FUNC_SUBTRACT, [Ff]: s30.FUNC_REVERSE_SUBTRACT };
    Wt[Of] = s30.MIN, Wt[Bf] = s30.MAX;
    let j2 = { [zf]: s30.ZERO, [Vf]: s30.ONE, [kf]: s30.SRC_COLOR, [so]: s30.SRC_ALPHA, [Yf]: s30.SRC_ALPHA_SATURATE, [Xf]: s30.DST_COLOR, [Hf]: s30.DST_ALPHA, [Gf]: s30.ONE_MINUS_SRC_COLOR, [ro]: s30.ONE_MINUS_SRC_ALPHA, [qf]: s30.ONE_MINUS_DST_COLOR, [Wf]: s30.ONE_MINUS_DST_ALPHA, [Zf]: s30.CONSTANT_COLOR, [Jf]: s30.ONE_MINUS_CONSTANT_COLOR, [$f]: s30.CONSTANT_ALPHA, [Kf]: s30.ONE_MINUS_CONSTANT_ALPHA };
    function nt(D2, ht, Z2, pt, Mt, tt, It, wt, ve, me) {
      if (D2 === Fn) {
        g === true && (Nt(s30.BLEND), g = false);
        return;
      }
      if (g === false && (st(s30.BLEND), g = true), D2 !== Nf) {
        if (D2 !== m2 || me !== I2) {
          if ((M2 !== mi || E !== mi) && (s30.blendEquation(s30.FUNC_ADD), M2 = mi, E = mi), me) switch (D2) {
            case Hi:
              s30.blendFuncSeparate(s30.ONE, s30.ONE_MINUS_SRC_ALPHA, s30.ONE, s30.ONE_MINUS_SRC_ALPHA);
              break;
            case Au:
              s30.blendFunc(s30.ONE, s30.ONE);
              break;
            case Eu:
              s30.blendFuncSeparate(s30.ZERO, s30.ONE_MINUS_SRC_COLOR, s30.ZERO, s30.ONE);
              break;
            case wu:
              s30.blendFuncSeparate(s30.DST_COLOR, s30.ONE_MINUS_SRC_ALPHA, s30.ZERO, s30.ONE);
              break;
            default:
              Rt("WebGLState: Invalid blending: ", D2);
              break;
          }
          else switch (D2) {
            case Hi:
              s30.blendFuncSeparate(s30.SRC_ALPHA, s30.ONE_MINUS_SRC_ALPHA, s30.ONE, s30.ONE_MINUS_SRC_ALPHA);
              break;
            case Au:
              s30.blendFuncSeparate(s30.SRC_ALPHA, s30.ONE, s30.ONE, s30.ONE);
              break;
            case Eu:
              Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case wu:
              Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              Rt("WebGLState: Invalid blending: ", D2);
              break;
          }
          S2 = null, v = null, T2 = null, R2 = null, x3.set(0, 0, 0), A3 = 0, m2 = D2, I2 = me;
        }
        return;
      }
      Mt = Mt || ht, tt = tt || Z2, It = It || pt, (ht !== M2 || Mt !== E) && (s30.blendEquationSeparate(Wt[ht], Wt[Mt]), M2 = ht, E = Mt), (Z2 !== S2 || pt !== v || tt !== T2 || It !== R2) && (s30.blendFuncSeparate(j2[Z2], j2[pt], j2[tt], j2[It]), S2 = Z2, v = pt, T2 = tt, R2 = It), (wt.equals(x3) === false || ve !== A3) && (s30.blendColor(wt.r, wt.g, wt.b, ve), x3.copy(wt), A3 = ve), m2 = D2, I2 = false;
    }
    function et(D2, ht) {
      D2.side === Un ? Nt(s30.CULL_FACE) : st(s30.CULL_FACE);
      let Z2 = D2.side === Je;
      ht && (Z2 = !Z2), xt(Z2), D2.blending === Hi && D2.transparent === false ? nt(Fn) : nt(D2.blending, D2.blendEquation, D2.blendSrc, D2.blendDst, D2.blendEquationAlpha, D2.blendSrcAlpha, D2.blendDstAlpha, D2.blendColor, D2.blendAlpha, D2.premultipliedAlpha), a.setFunc(D2.depthFunc), a.setTest(D2.depthTest), a.setMask(D2.depthWrite), r2.setMask(D2.colorWrite);
      let pt = D2.stencilWrite;
      o3.setTest(pt), pt && (o3.setMask(D2.stencilWriteMask), o3.setFunc(D2.stencilFunc, D2.stencilRef, D2.stencilFuncMask), o3.setOp(D2.stencilFail, D2.stencilZFail, D2.stencilZPass)), Pt(D2.polygonOffset, D2.polygonOffsetFactor, D2.polygonOffsetUnits), D2.alphaToCoverage === true ? st(s30.SAMPLE_ALPHA_TO_COVERAGE) : Nt(s30.SAMPLE_ALPHA_TO_COVERAGE);
    }
    function xt(D2) {
      P3 !== D2 && (D2 ? s30.frontFace(s30.CW) : s30.frontFace(s30.CCW), P3 = D2);
    }
    function mt(D2) {
      D2 !== Pf ? (st(s30.CULL_FACE), D2 !== N2 && (D2 === Tu ? s30.cullFace(s30.BACK) : D2 === Lf ? s30.cullFace(s30.FRONT) : s30.cullFace(s30.FRONT_AND_BACK))) : Nt(s30.CULL_FACE), N2 = D2;
    }
    function Bt(D2) {
      D2 !== H2 && (G && s30.lineWidth(D2), H2 = D2);
    }
    function Pt(D2, ht, Z2) {
      D2 ? (st(s30.POLYGON_OFFSET_FILL), (X !== ht || O !== Z2) && (X = ht, O = Z2, a.getReversed() && (ht = -ht), s30.polygonOffset(ht, Z2))) : Nt(s30.POLYGON_OFFSET_FILL);
    }
    function Gt(D2) {
      D2 ? st(s30.SCISSOR_TEST) : Nt(s30.SCISSOR_TEST);
    }
    function qt(D2) {
      D2 === void 0 && (D2 = s30.TEXTURE0 + W - 1), ut !== D2 && (s30.activeTexture(D2), ut = D2);
    }
    function L(D2, ht, Z2) {
      Z2 === void 0 && (ut === null ? Z2 = s30.TEXTURE0 + W - 1 : Z2 = ut);
      let pt = lt[Z2];
      pt === void 0 && (pt = { type: void 0, texture: void 0 }, lt[Z2] = pt), (pt.type !== D2 || pt.texture !== ht) && (ut !== Z2 && (s30.activeTexture(Z2), ut = Z2), s30.bindTexture(D2, ht || ct[D2]), pt.type = D2, pt.texture = ht);
    }
    function he() {
      let D2 = lt[ut];
      D2 !== void 0 && D2.type !== void 0 && (s30.bindTexture(D2.type, null), D2.type = void 0, D2.texture = void 0);
    }
    function te() {
      try {
        s30.compressedTexImage2D(...arguments);
      } catch (D2) {
        Rt("WebGLState:", D2);
      }
    }
    function w2() {
      try {
        s30.compressedTexImage3D(...arguments);
      } catch (D2) {
        Rt("WebGLState:", D2);
      }
    }
    function y2() {
      try {
        s30.texSubImage2D(...arguments);
      } catch (D2) {
        Rt("WebGLState:", D2);
      }
    }
    function F2() {
      try {
        s30.texSubImage3D(...arguments);
      } catch (D2) {
        Rt("WebGLState:", D2);
      }
    }
    function V() {
      try {
        s30.compressedTexSubImage2D(...arguments);
      } catch (D2) {
        Rt("WebGLState:", D2);
      }
    }
    function q() {
      try {
        s30.compressedTexSubImage3D(...arguments);
      } catch (D2) {
        Rt("WebGLState:", D2);
      }
    }
    function rt() {
      try {
        s30.texStorage2D(...arguments);
      } catch (D2) {
        Rt("WebGLState:", D2);
      }
    }
    function at() {
      try {
        s30.texStorage3D(...arguments);
      } catch (D2) {
        Rt("WebGLState:", D2);
      }
    }
    function Y2() {
      try {
        s30.texImage2D(...arguments);
      } catch (D2) {
        Rt("WebGLState:", D2);
      }
    }
    function $() {
      try {
        s30.texImage3D(...arguments);
      } catch (D2) {
        Rt("WebGLState:", D2);
      }
    }
    function dt(D2) {
      return d4[D2] !== void 0 ? d4[D2] : s30.getParameter(D2);
    }
    function Lt(D2, ht) {
      d4[D2] !== ht && (s30.pixelStorei(D2, ht), d4[D2] = ht);
    }
    function gt(D2) {
      de.equals(D2) === false && (s30.scissor(D2.x, D2.y, D2.z, D2.w), de.copy(D2));
    }
    function ft(D2) {
      ne.equals(D2) === false && (s30.viewport(D2.x, D2.y, D2.z, D2.w), ne.copy(D2));
    }
    function Ft(D2, ht) {
      let Z2 = c3.get(ht);
      Z2 === void 0 && (Z2 = /* @__PURE__ */ new WeakMap(), c3.set(ht, Z2));
      let pt = Z2.get(D2);
      pt === void 0 && (pt = s30.getUniformBlockIndex(ht, D2.name), Z2.set(D2, pt));
    }
    function zt(D2, ht) {
      let pt = c3.get(ht).get(D2);
      l2.get(ht) !== pt && (s30.uniformBlockBinding(ht, pt, D2.__bindingPointIndex), l2.set(ht, pt));
    }
    function Zt() {
      s30.disable(s30.BLEND), s30.disable(s30.CULL_FACE), s30.disable(s30.DEPTH_TEST), s30.disable(s30.POLYGON_OFFSET_FILL), s30.disable(s30.SCISSOR_TEST), s30.disable(s30.STENCIL_TEST), s30.disable(s30.SAMPLE_ALPHA_TO_COVERAGE), s30.blendEquation(s30.FUNC_ADD), s30.blendFunc(s30.ONE, s30.ZERO), s30.blendFuncSeparate(s30.ONE, s30.ZERO, s30.ONE, s30.ZERO), s30.blendColor(0, 0, 0, 0), s30.colorMask(true, true, true, true), s30.clearColor(0, 0, 0, 0), s30.depthMask(true), s30.depthFunc(s30.LESS), a.setReversed(false), s30.clearDepth(1), s30.stencilMask(4294967295), s30.stencilFunc(s30.ALWAYS, 0, 4294967295), s30.stencilOp(s30.KEEP, s30.KEEP, s30.KEEP), s30.clearStencil(0), s30.cullFace(s30.BACK), s30.frontFace(s30.CCW), s30.polygonOffset(0, 0), s30.activeTexture(s30.TEXTURE0), s30.bindFramebuffer(s30.FRAMEBUFFER, null), s30.bindFramebuffer(s30.DRAW_FRAMEBUFFER, null), s30.bindFramebuffer(s30.READ_FRAMEBUFFER, null), s30.useProgram(null), s30.lineWidth(1), s30.scissor(0, 0, s30.canvas.width, s30.canvas.height), s30.viewport(0, 0, s30.canvas.width, s30.canvas.height), s30.pixelStorei(s30.PACK_ALIGNMENT, 4), s30.pixelStorei(s30.UNPACK_ALIGNMENT, 4), s30.pixelStorei(s30.UNPACK_FLIP_Y_WEBGL, false), s30.pixelStorei(s30.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), s30.pixelStorei(s30.UNPACK_COLORSPACE_CONVERSION_WEBGL, s30.BROWSER_DEFAULT_WEBGL), s30.pixelStorei(s30.PACK_ROW_LENGTH, 0), s30.pixelStorei(s30.PACK_SKIP_PIXELS, 0), s30.pixelStorei(s30.PACK_SKIP_ROWS, 0), s30.pixelStorei(s30.UNPACK_ROW_LENGTH, 0), s30.pixelStorei(s30.UNPACK_IMAGE_HEIGHT, 0), s30.pixelStorei(s30.UNPACK_SKIP_PIXELS, 0), s30.pixelStorei(s30.UNPACK_SKIP_ROWS, 0), s30.pixelStorei(s30.UNPACK_SKIP_IMAGES, 0), h3 = {}, d4 = {}, ut = null, lt = {}, u3 = {}, f3 = /* @__PURE__ */ new WeakMap(), p2 = [], _ = null, g = false, m2 = null, M2 = null, S2 = null, v = null, E = null, T2 = null, R2 = null, x3 = new St(0, 0, 0), A3 = 0, I2 = false, P3 = null, N2 = null, H2 = null, X = null, O = null, de.set(0, 0, s30.canvas.width, s30.canvas.height), ne.set(0, 0, s30.canvas.width, s30.canvas.height), r2.reset(), a.reset(), o3.reset();
    }
    return { buffers: { color: r2, depth: a, stencil: o3 }, enable: st, disable: Nt, bindFramebuffer: kt, drawBuffers: Ot, useProgram: se, setBlending: nt, setMaterial: et, setFlipSided: xt, setCullFace: mt, setLineWidth: Bt, setPolygonOffset: Pt, setScissorTest: Gt, activeTexture: qt, bindTexture: L, unbindTexture: he, compressedTexImage2D: te, compressedTexImage3D: w2, texImage2D: Y2, texImage3D: $, pixelStorei: Lt, getParameter: dt, updateUBOMapping: Ft, uniformBlockBinding: zt, texStorage2D: rt, texStorage3D: at, texSubImage2D: y2, texSubImage3D: F2, compressedTexSubImage2D: V, compressedTexSubImage3D: q, scissor: gt, viewport: ft, reset: Zt };
  }
  function LM(s30, t, e, n2, i2, r2, a) {
    let o3 = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l2 = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c3 = new Q(), h3 = /* @__PURE__ */ new WeakMap(), d4 = /* @__PURE__ */ new Set(), u3, f3 = /* @__PURE__ */ new WeakMap(), p2 = false;
    try {
      p2 = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
    } catch {
    }
    function _(w2, y2) {
      return p2 ? new OffscreenCanvas(w2, y2) : Cs("canvas");
    }
    function g(w2, y2, F2) {
      let V = 1, q = te(w2);
      if ((q.width > F2 || q.height > F2) && (V = F2 / Math.max(q.width, q.height)), V < 1) if (typeof HTMLImageElement < "u" && w2 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w2 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w2 instanceof ImageBitmap || typeof VideoFrame < "u" && w2 instanceof VideoFrame) {
        let rt = Math.floor(V * q.width), at = Math.floor(V * q.height);
        u3 === void 0 && (u3 = _(rt, at));
        let Y2 = y2 ? _(rt, at) : u3;
        return Y2.width = rt, Y2.height = at, Y2.getContext("2d").drawImage(w2, 0, 0, rt, at), ot("WebGLRenderer: Texture has been resized from (" + q.width + "x" + q.height + ") to (" + rt + "x" + at + ")."), Y2;
      } else return "data" in w2 && ot("WebGLRenderer: Image in DataTexture is too big (" + q.width + "x" + q.height + ")."), w2;
      return w2;
    }
    function m2(w2) {
      return w2.generateMipmaps;
    }
    function M2(w2) {
      s30.generateMipmap(w2);
    }
    function S2(w2) {
      return w2.isWebGLCubeRenderTarget ? s30.TEXTURE_CUBE_MAP : w2.isWebGL3DRenderTarget ? s30.TEXTURE_3D : w2.isWebGLArrayRenderTarget || w2.isCompressedArrayTexture ? s30.TEXTURE_2D_ARRAY : s30.TEXTURE_2D;
    }
    function v(w2, y2, F2, V, q, rt = false) {
      if (w2 !== null) {
        if (s30[w2] !== void 0) return s30[w2];
        ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w2 + "'");
      }
      let at;
      V && (at = t.get("EXT_texture_norm16"), at || ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
      let Y2 = y2;
      if (y2 === s30.RED && (F2 === s30.FLOAT && (Y2 = s30.R32F), F2 === s30.HALF_FLOAT && (Y2 = s30.R16F), F2 === s30.UNSIGNED_BYTE && (Y2 = s30.R8), F2 === s30.UNSIGNED_SHORT && at && (Y2 = at.R16_EXT), F2 === s30.SHORT && at && (Y2 = at.R16_SNORM_EXT)), y2 === s30.RED_INTEGER && (F2 === s30.UNSIGNED_BYTE && (Y2 = s30.R8UI), F2 === s30.UNSIGNED_SHORT && (Y2 = s30.R16UI), F2 === s30.UNSIGNED_INT && (Y2 = s30.R32UI), F2 === s30.BYTE && (Y2 = s30.R8I), F2 === s30.SHORT && (Y2 = s30.R16I), F2 === s30.INT && (Y2 = s30.R32I)), y2 === s30.RG && (F2 === s30.FLOAT && (Y2 = s30.RG32F), F2 === s30.HALF_FLOAT && (Y2 = s30.RG16F), F2 === s30.UNSIGNED_BYTE && (Y2 = s30.RG8), F2 === s30.UNSIGNED_SHORT && at && (Y2 = at.RG16_EXT), F2 === s30.SHORT && at && (Y2 = at.RG16_SNORM_EXT)), y2 === s30.RG_INTEGER && (F2 === s30.UNSIGNED_BYTE && (Y2 = s30.RG8UI), F2 === s30.UNSIGNED_SHORT && (Y2 = s30.RG16UI), F2 === s30.UNSIGNED_INT && (Y2 = s30.RG32UI), F2 === s30.BYTE && (Y2 = s30.RG8I), F2 === s30.SHORT && (Y2 = s30.RG16I), F2 === s30.INT && (Y2 = s30.RG32I)), y2 === s30.RGB_INTEGER && (F2 === s30.UNSIGNED_BYTE && (Y2 = s30.RGB8UI), F2 === s30.UNSIGNED_SHORT && (Y2 = s30.RGB16UI), F2 === s30.UNSIGNED_INT && (Y2 = s30.RGB32UI), F2 === s30.BYTE && (Y2 = s30.RGB8I), F2 === s30.SHORT && (Y2 = s30.RGB16I), F2 === s30.INT && (Y2 = s30.RGB32I)), y2 === s30.RGBA_INTEGER && (F2 === s30.UNSIGNED_BYTE && (Y2 = s30.RGBA8UI), F2 === s30.UNSIGNED_SHORT && (Y2 = s30.RGBA16UI), F2 === s30.UNSIGNED_INT && (Y2 = s30.RGBA32UI), F2 === s30.BYTE && (Y2 = s30.RGBA8I), F2 === s30.SHORT && (Y2 = s30.RGBA16I), F2 === s30.INT && (Y2 = s30.RGBA32I)), y2 === s30.RGB && (F2 === s30.UNSIGNED_SHORT && at && (Y2 = at.RGB16_EXT), F2 === s30.SHORT && at && (Y2 = at.RGB16_SNORM_EXT), F2 === s30.UNSIGNED_INT_5_9_9_9_REV && (Y2 = s30.RGB9_E5), F2 === s30.UNSIGNED_INT_10F_11F_11F_REV && (Y2 = s30.R11F_G11F_B10F)), y2 === s30.RGBA) {
        let $ = rt ? _r : ee.getTransfer(q);
        F2 === s30.FLOAT && (Y2 = s30.RGBA32F), F2 === s30.HALF_FLOAT && (Y2 = s30.RGBA16F), F2 === s30.UNSIGNED_BYTE && (Y2 = $ === ae ? s30.SRGB8_ALPHA8 : s30.RGBA8), F2 === s30.UNSIGNED_SHORT && at && (Y2 = at.RGBA16_EXT), F2 === s30.SHORT && at && (Y2 = at.RGBA16_SNORM_EXT), F2 === s30.UNSIGNED_SHORT_4_4_4_4 && (Y2 = s30.RGBA4), F2 === s30.UNSIGNED_SHORT_5_5_5_1 && (Y2 = s30.RGB5_A1);
      }
      return (Y2 === s30.R16F || Y2 === s30.R32F || Y2 === s30.RG16F || Y2 === s30.RG32F || Y2 === s30.RGBA16F || Y2 === s30.RGBA32F) && t.get("EXT_color_buffer_float"), Y2;
    }
    function E(w2, y2) {
      let F2;
      return w2 ? y2 === null || y2 === mn || y2 === Xs ? F2 = s30.DEPTH24_STENCIL8 : y2 === qe ? F2 = s30.DEPTH32F_STENCIL8 : y2 === Ws && (F2 = s30.DEPTH24_STENCIL8, ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : y2 === null || y2 === mn || y2 === Xs ? F2 = s30.DEPTH_COMPONENT24 : y2 === qe ? F2 = s30.DEPTH_COMPONENT32F : y2 === Ws && (F2 = s30.DEPTH_COMPONENT16), F2;
    }
    function T2(w2, y2) {
      return m2(w2) === true || w2.isFramebufferTexture && w2.minFilter !== Ee && w2.minFilter !== _e ? Math.log2(Math.max(y2.width, y2.height)) + 1 : w2.mipmaps !== void 0 && w2.mipmaps.length > 0 ? w2.mipmaps.length : w2.isCompressedTexture && Array.isArray(w2.image) ? y2.mipmaps.length : 1;
    }
    function R2(w2) {
      let y2 = w2.target;
      y2.removeEventListener("dispose", R2), A3(y2), y2.isVideoTexture && h3.delete(y2), y2.isHTMLTexture && d4.delete(y2);
    }
    function x3(w2) {
      let y2 = w2.target;
      y2.removeEventListener("dispose", x3), P3(y2);
    }
    function A3(w2) {
      let y2 = n2.get(w2);
      if (y2.__webglInit === void 0) return;
      let F2 = w2.source, V = f3.get(F2);
      if (V) {
        let q = V[y2.__cacheKey];
        q.usedTimes--, q.usedTimes === 0 && I2(w2), Object.keys(V).length === 0 && f3.delete(F2);
      }
      n2.remove(w2);
    }
    function I2(w2) {
      let y2 = n2.get(w2);
      s30.deleteTexture(y2.__webglTexture);
      let F2 = w2.source, V = f3.get(F2);
      delete V[y2.__cacheKey], a.memory.textures--;
    }
    function P3(w2) {
      let y2 = n2.get(w2);
      if (w2.depthTexture && (w2.depthTexture.dispose(), n2.remove(w2.depthTexture)), w2.isWebGLCubeRenderTarget) for (let V = 0; V < 6; V++) {
        if (Array.isArray(y2.__webglFramebuffer[V])) for (let q = 0; q < y2.__webglFramebuffer[V].length; q++) s30.deleteFramebuffer(y2.__webglFramebuffer[V][q]);
        else s30.deleteFramebuffer(y2.__webglFramebuffer[V]);
        y2.__webglDepthbuffer && s30.deleteRenderbuffer(y2.__webglDepthbuffer[V]);
      }
      else {
        if (Array.isArray(y2.__webglFramebuffer)) for (let V = 0; V < y2.__webglFramebuffer.length; V++) s30.deleteFramebuffer(y2.__webglFramebuffer[V]);
        else s30.deleteFramebuffer(y2.__webglFramebuffer);
        if (y2.__webglDepthbuffer && s30.deleteRenderbuffer(y2.__webglDepthbuffer), y2.__webglMultisampledFramebuffer && s30.deleteFramebuffer(y2.__webglMultisampledFramebuffer), y2.__webglColorRenderbuffer) for (let V = 0; V < y2.__webglColorRenderbuffer.length; V++) y2.__webglColorRenderbuffer[V] && s30.deleteRenderbuffer(y2.__webglColorRenderbuffer[V]);
        y2.__webglDepthRenderbuffer && s30.deleteRenderbuffer(y2.__webglDepthRenderbuffer);
      }
      let F2 = w2.textures;
      for (let V = 0, q = F2.length; V < q; V++) {
        let rt = n2.get(F2[V]);
        rt.__webglTexture && (s30.deleteTexture(rt.__webglTexture), a.memory.textures--), n2.remove(F2[V]);
      }
      n2.remove(w2);
    }
    let N2 = 0;
    function H2() {
      N2 = 0;
    }
    function X() {
      return N2;
    }
    function O(w2) {
      N2 = w2;
    }
    function W() {
      let w2 = N2;
      return w2 >= i2.maxTextures && ot("WebGLTextures: Trying to use " + w2 + " texture units while this GPU supports only " + i2.maxTextures), N2 += 1, w2;
    }
    function G(w2) {
      let y2 = [];
      return y2.push(w2.wrapS), y2.push(w2.wrapT), y2.push(w2.wrapR || 0), y2.push(w2.magFilter), y2.push(w2.minFilter), y2.push(w2.anisotropy), y2.push(w2.internalFormat), y2.push(w2.format), y2.push(w2.type), y2.push(w2.generateMipmaps), y2.push(w2.premultiplyAlpha), y2.push(w2.flipY), y2.push(w2.unpackAlignment), y2.push(w2.colorSpace), y2.join();
    }
    function K2(w2, y2) {
      let F2 = n2.get(w2);
      if (w2.isVideoTexture && L(w2), w2.isRenderTargetTexture === false && w2.isExternalTexture !== true && w2.version > 0 && F2.__version !== w2.version) {
        let V = w2.image;
        if (V === null) ot("WebGLRenderer: Texture marked for update but no image data found.");
        else if (V.complete === false) ot("WebGLRenderer: Texture marked for update but image is incomplete");
        else {
          Nt(F2, w2, y2);
          return;
        }
      } else w2.isExternalTexture && (F2.__webglTexture = w2.sourceTexture ? w2.sourceTexture : null);
      e.bindTexture(s30.TEXTURE_2D, F2.__webglTexture, s30.TEXTURE0 + y2);
    }
    function it(w2, y2) {
      let F2 = n2.get(w2);
      if (w2.isRenderTargetTexture === false && w2.version > 0 && F2.__version !== w2.version) {
        Nt(F2, w2, y2);
        return;
      } else w2.isExternalTexture && (F2.__webglTexture = w2.sourceTexture ? w2.sourceTexture : null);
      e.bindTexture(s30.TEXTURE_2D_ARRAY, F2.__webglTexture, s30.TEXTURE0 + y2);
    }
    function ut(w2, y2) {
      let F2 = n2.get(w2);
      if (w2.isRenderTargetTexture === false && w2.version > 0 && F2.__version !== w2.version) {
        Nt(F2, w2, y2);
        return;
      }
      e.bindTexture(s30.TEXTURE_3D, F2.__webglTexture, s30.TEXTURE0 + y2);
    }
    function lt(w2, y2) {
      let F2 = n2.get(w2);
      if (w2.isCubeDepthTexture !== true && w2.version > 0 && F2.__version !== w2.version) {
        kt(F2, w2, y2);
        return;
      }
      e.bindTexture(s30.TEXTURE_CUBE_MAP, F2.__webglTexture, s30.TEXTURE0 + y2);
    }
    let bt = { [dr]: s30.REPEAT, [je]: s30.CLAMP_TO_EDGE, [fr]: s30.MIRRORED_REPEAT }, Qt = { [Ee]: s30.NEAREST, [Uu]: s30.NEAREST_MIPMAP_NEAREST, [Hs]: s30.NEAREST_MIPMAP_LINEAR, [_e]: s30.LINEAR, [ea]: s30.LINEAR_MIPMAP_NEAREST, [Bn]: s30.LINEAR_MIPMAP_LINEAR }, de = { [ap]: s30.NEVER, [up]: s30.ALWAYS, [op]: s30.LESS, [uc]: s30.LEQUAL, [lp]: s30.EQUAL, [dc]: s30.GEQUAL, [cp]: s30.GREATER, [hp]: s30.NOTEQUAL };
    function ne(w2, y2) {
      if (y2.type === qe && t.has("OES_texture_float_linear") === false && (y2.magFilter === _e || y2.magFilter === ea || y2.magFilter === Hs || y2.magFilter === Bn || y2.minFilter === _e || y2.minFilter === ea || y2.minFilter === Hs || y2.minFilter === Bn) && ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s30.texParameteri(w2, s30.TEXTURE_WRAP_S, bt[y2.wrapS]), s30.texParameteri(w2, s30.TEXTURE_WRAP_T, bt[y2.wrapT]), (w2 === s30.TEXTURE_3D || w2 === s30.TEXTURE_2D_ARRAY) && s30.texParameteri(w2, s30.TEXTURE_WRAP_R, bt[y2.wrapR]), s30.texParameteri(w2, s30.TEXTURE_MAG_FILTER, Qt[y2.magFilter]), s30.texParameteri(w2, s30.TEXTURE_MIN_FILTER, Qt[y2.minFilter]), y2.compareFunction && (s30.texParameteri(w2, s30.TEXTURE_COMPARE_MODE, s30.COMPARE_REF_TO_TEXTURE), s30.texParameteri(w2, s30.TEXTURE_COMPARE_FUNC, de[y2.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
        if (y2.magFilter === Ee || y2.minFilter !== Hs && y2.minFilter !== Bn || y2.type === qe && t.has("OES_texture_float_linear") === false) return;
        if (y2.anisotropy > 1 || n2.get(y2).__currentAnisotropy) {
          let F2 = t.get("EXT_texture_filter_anisotropic");
          s30.texParameterf(w2, F2.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y2.anisotropy, i2.getMaxAnisotropy())), n2.get(y2).__currentAnisotropy = y2.anisotropy;
        }
      }
    }
    function J(w2, y2) {
      let F2 = false;
      w2.__webglInit === void 0 && (w2.__webglInit = true, y2.addEventListener("dispose", R2));
      let V = y2.source, q = f3.get(V);
      q === void 0 && (q = {}, f3.set(V, q));
      let rt = G(y2);
      if (rt !== w2.__cacheKey) {
        q[rt] === void 0 && (q[rt] = { texture: s30.createTexture(), usedTimes: 0 }, a.memory.textures++, F2 = true), q[rt].usedTimes++;
        let at = q[w2.__cacheKey];
        at !== void 0 && (q[w2.__cacheKey].usedTimes--, at.usedTimes === 0 && I2(y2)), w2.__cacheKey = rt, w2.__webglTexture = q[rt].texture;
      }
      return F2;
    }
    function ct(w2, y2, F2) {
      return Math.floor(Math.floor(w2 / F2) / y2);
    }
    function st(w2, y2, F2, V) {
      let rt = w2.updateRanges;
      if (rt.length === 0) e.texSubImage2D(s30.TEXTURE_2D, 0, 0, 0, y2.width, y2.height, F2, V, y2.data);
      else {
        rt.sort((Lt, gt) => Lt.start - gt.start);
        let at = 0;
        for (let Lt = 1; Lt < rt.length; Lt++) {
          let gt = rt[at], ft = rt[Lt], Ft = gt.start + gt.count, zt = ct(ft.start, y2.width, 4), Zt = ct(gt.start, y2.width, 4);
          ft.start <= Ft + 1 && zt === Zt && ct(ft.start + ft.count - 1, y2.width, 4) === zt ? gt.count = Math.max(gt.count, ft.start + ft.count - gt.start) : (++at, rt[at] = ft);
        }
        rt.length = at + 1;
        let Y2 = e.getParameter(s30.UNPACK_ROW_LENGTH), $ = e.getParameter(s30.UNPACK_SKIP_PIXELS), dt = e.getParameter(s30.UNPACK_SKIP_ROWS);
        e.pixelStorei(s30.UNPACK_ROW_LENGTH, y2.width);
        for (let Lt = 0, gt = rt.length; Lt < gt; Lt++) {
          let ft = rt[Lt], Ft = Math.floor(ft.start / 4), zt = Math.ceil(ft.count / 4), Zt = Ft % y2.width, D2 = Math.floor(Ft / y2.width), ht = zt, Z2 = 1;
          e.pixelStorei(s30.UNPACK_SKIP_PIXELS, Zt), e.pixelStorei(s30.UNPACK_SKIP_ROWS, D2), e.texSubImage2D(s30.TEXTURE_2D, 0, Zt, D2, ht, Z2, F2, V, y2.data);
        }
        w2.clearUpdateRanges(), e.pixelStorei(s30.UNPACK_ROW_LENGTH, Y2), e.pixelStorei(s30.UNPACK_SKIP_PIXELS, $), e.pixelStorei(s30.UNPACK_SKIP_ROWS, dt);
      }
    }
    function Nt(w2, y2, F2) {
      let V = s30.TEXTURE_2D;
      (y2.isDataArrayTexture || y2.isCompressedArrayTexture) && (V = s30.TEXTURE_2D_ARRAY), y2.isData3DTexture && (V = s30.TEXTURE_3D);
      let q = J(w2, y2), rt = y2.source;
      e.bindTexture(V, w2.__webglTexture, s30.TEXTURE0 + F2);
      let at = n2.get(rt);
      if (rt.version !== at.__version || q === true) {
        if (e.activeTexture(s30.TEXTURE0 + F2), (typeof ImageBitmap < "u" && y2.image instanceof ImageBitmap) === false) {
          let Z2 = ee.getPrimaries(ee.workingColorSpace), pt = y2.colorSpace === ni ? null : ee.getPrimaries(y2.colorSpace), Mt = y2.colorSpace === ni || Z2 === pt ? s30.NONE : s30.BROWSER_DEFAULT_WEBGL;
          e.pixelStorei(s30.UNPACK_FLIP_Y_WEBGL, y2.flipY), e.pixelStorei(s30.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y2.premultiplyAlpha), e.pixelStorei(s30.UNPACK_COLORSPACE_CONVERSION_WEBGL, Mt);
        }
        e.pixelStorei(s30.UNPACK_ALIGNMENT, y2.unpackAlignment);
        let $ = g(y2.image, false, i2.maxTextureSize);
        $ = he(y2, $);
        let dt = r2.convert(y2.format, y2.colorSpace), Lt = r2.convert(y2.type), gt = v(y2.internalFormat, dt, Lt, y2.normalized, y2.colorSpace, y2.isVideoTexture);
        ne(V, y2);
        let ft, Ft = y2.mipmaps, zt = y2.isVideoTexture !== true, Zt = at.__version === void 0 || q === true, D2 = rt.dataReady, ht = T2(y2, $);
        if (y2.isDepthTexture) gt = E(y2.format === Si, y2.type), Zt && (zt ? e.texStorage2D(s30.TEXTURE_2D, 1, gt, $.width, $.height) : e.texImage2D(s30.TEXTURE_2D, 0, gt, $.width, $.height, 0, dt, Lt, null));
        else if (y2.isDataTexture) if (Ft.length > 0) {
          zt && Zt && e.texStorage2D(s30.TEXTURE_2D, ht, gt, Ft[0].width, Ft[0].height);
          for (let Z2 = 0, pt = Ft.length; Z2 < pt; Z2++) ft = Ft[Z2], zt ? D2 && e.texSubImage2D(s30.TEXTURE_2D, Z2, 0, 0, ft.width, ft.height, dt, Lt, ft.data) : e.texImage2D(s30.TEXTURE_2D, Z2, gt, ft.width, ft.height, 0, dt, Lt, ft.data);
          y2.generateMipmaps = false;
        } else zt ? (Zt && e.texStorage2D(s30.TEXTURE_2D, ht, gt, $.width, $.height), D2 && st(y2, $, dt, Lt)) : e.texImage2D(s30.TEXTURE_2D, 0, gt, $.width, $.height, 0, dt, Lt, $.data);
        else if (y2.isCompressedTexture) if (y2.isCompressedArrayTexture) {
          zt && Zt && e.texStorage3D(s30.TEXTURE_2D_ARRAY, ht, gt, Ft[0].width, Ft[0].height, $.depth);
          for (let Z2 = 0, pt = Ft.length; Z2 < pt; Z2++) if (ft = Ft[Z2], y2.format !== Ye) if (dt !== null) if (zt) {
            if (D2) if (y2.layerUpdates.size > 0) {
              let Mt = fc(ft.width, ft.height, y2.format, y2.type);
              for (let tt of y2.layerUpdates) {
                let It = ft.data.subarray(tt * Mt / ft.data.BYTES_PER_ELEMENT, (tt + 1) * Mt / ft.data.BYTES_PER_ELEMENT);
                e.compressedTexSubImage3D(s30.TEXTURE_2D_ARRAY, Z2, 0, 0, tt, ft.width, ft.height, 1, dt, It);
              }
              y2.clearLayerUpdates();
            } else e.compressedTexSubImage3D(s30.TEXTURE_2D_ARRAY, Z2, 0, 0, 0, ft.width, ft.height, $.depth, dt, ft.data);
          } else e.compressedTexImage3D(s30.TEXTURE_2D_ARRAY, Z2, gt, ft.width, ft.height, $.depth, 0, ft.data, 0, 0);
          else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else zt ? D2 && e.texSubImage3D(s30.TEXTURE_2D_ARRAY, Z2, 0, 0, 0, ft.width, ft.height, $.depth, dt, Lt, ft.data) : e.texImage3D(s30.TEXTURE_2D_ARRAY, Z2, gt, ft.width, ft.height, $.depth, 0, dt, Lt, ft.data);
        } else {
          zt && Zt && e.texStorage2D(s30.TEXTURE_2D, ht, gt, Ft[0].width, Ft[0].height);
          for (let Z2 = 0, pt = Ft.length; Z2 < pt; Z2++) ft = Ft[Z2], y2.format !== Ye ? dt !== null ? zt ? D2 && e.compressedTexSubImage2D(s30.TEXTURE_2D, Z2, 0, 0, ft.width, ft.height, dt, ft.data) : e.compressedTexImage2D(s30.TEXTURE_2D, Z2, gt, ft.width, ft.height, 0, ft.data) : ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : zt ? D2 && e.texSubImage2D(s30.TEXTURE_2D, Z2, 0, 0, ft.width, ft.height, dt, Lt, ft.data) : e.texImage2D(s30.TEXTURE_2D, Z2, gt, ft.width, ft.height, 0, dt, Lt, ft.data);
        }
        else if (y2.isDataArrayTexture) if (zt) {
          if (Zt && e.texStorage3D(s30.TEXTURE_2D_ARRAY, ht, gt, $.width, $.height, $.depth), D2) if (y2.layerUpdates.size > 0) {
            let Z2 = fc($.width, $.height, y2.format, y2.type);
            for (let pt of y2.layerUpdates) {
              let Mt = $.data.subarray(pt * Z2 / $.data.BYTES_PER_ELEMENT, (pt + 1) * Z2 / $.data.BYTES_PER_ELEMENT);
              e.texSubImage3D(s30.TEXTURE_2D_ARRAY, 0, 0, 0, pt, $.width, $.height, 1, dt, Lt, Mt);
            }
            y2.clearLayerUpdates();
          } else e.texSubImage3D(s30.TEXTURE_2D_ARRAY, 0, 0, 0, 0, $.width, $.height, $.depth, dt, Lt, $.data);
        } else e.texImage3D(s30.TEXTURE_2D_ARRAY, 0, gt, $.width, $.height, $.depth, 0, dt, Lt, $.data);
        else if (y2.isData3DTexture) zt ? (Zt && e.texStorage3D(s30.TEXTURE_3D, ht, gt, $.width, $.height, $.depth), D2 && e.texSubImage3D(s30.TEXTURE_3D, 0, 0, 0, 0, $.width, $.height, $.depth, dt, Lt, $.data)) : e.texImage3D(s30.TEXTURE_3D, 0, gt, $.width, $.height, $.depth, 0, dt, Lt, $.data);
        else if (y2.isFramebufferTexture) {
          if (Zt) if (zt) e.texStorage2D(s30.TEXTURE_2D, ht, gt, $.width, $.height);
          else {
            let Z2 = $.width, pt = $.height;
            for (let Mt = 0; Mt < ht; Mt++) e.texImage2D(s30.TEXTURE_2D, Mt, gt, Z2, pt, 0, dt, Lt, null), Z2 >>= 1, pt >>= 1;
          }
        } else if (y2.isHTMLTexture) {
          if ("texElementImage2D" in s30) {
            let Z2 = s30.canvas;
            if (Z2.hasAttribute("layoutsubtree") || Z2.setAttribute("layoutsubtree", "true"), $.parentNode !== Z2) {
              Z2.appendChild($), d4.add(y2), Z2.onpaint = (pt) => {
                let Mt = pt.changedElements;
                for (let tt of d4) Mt.includes(tt.image) && (tt.needsUpdate = true);
              }, Z2.requestPaint();
              return;
            }
            if (s30.texElementImage2D.length === 3) s30.texElementImage2D(s30.TEXTURE_2D, s30.RGBA8, $);
            else {
              let Mt = s30.RGBA, tt = s30.RGBA, It = s30.UNSIGNED_BYTE;
              s30.texElementImage2D(s30.TEXTURE_2D, 0, Mt, tt, It, $);
            }
            s30.texParameteri(s30.TEXTURE_2D, s30.TEXTURE_MIN_FILTER, s30.LINEAR), s30.texParameteri(s30.TEXTURE_2D, s30.TEXTURE_WRAP_S, s30.CLAMP_TO_EDGE), s30.texParameteri(s30.TEXTURE_2D, s30.TEXTURE_WRAP_T, s30.CLAMP_TO_EDGE);
          }
        } else if (Ft.length > 0) {
          if (zt && Zt) {
            let Z2 = te(Ft[0]);
            e.texStorage2D(s30.TEXTURE_2D, ht, gt, Z2.width, Z2.height);
          }
          for (let Z2 = 0, pt = Ft.length; Z2 < pt; Z2++) ft = Ft[Z2], zt ? D2 && e.texSubImage2D(s30.TEXTURE_2D, Z2, 0, 0, dt, Lt, ft) : e.texImage2D(s30.TEXTURE_2D, Z2, gt, dt, Lt, ft);
          y2.generateMipmaps = false;
        } else if (zt) {
          if (Zt) {
            let Z2 = te($);
            e.texStorage2D(s30.TEXTURE_2D, ht, gt, Z2.width, Z2.height);
          }
          D2 && e.texSubImage2D(s30.TEXTURE_2D, 0, 0, 0, dt, Lt, $);
        } else e.texImage2D(s30.TEXTURE_2D, 0, gt, dt, Lt, $);
        m2(y2) && M2(V), at.__version = rt.version, y2.onUpdate && y2.onUpdate(y2);
      }
      w2.__version = y2.version;
    }
    function kt(w2, y2, F2) {
      if (y2.image.length !== 6) return;
      let V = J(w2, y2), q = y2.source;
      e.bindTexture(s30.TEXTURE_CUBE_MAP, w2.__webglTexture, s30.TEXTURE0 + F2);
      let rt = n2.get(q);
      if (q.version !== rt.__version || V === true) {
        e.activeTexture(s30.TEXTURE0 + F2);
        let at = ee.getPrimaries(ee.workingColorSpace), Y2 = y2.colorSpace === ni ? null : ee.getPrimaries(y2.colorSpace), $ = y2.colorSpace === ni || at === Y2 ? s30.NONE : s30.BROWSER_DEFAULT_WEBGL;
        e.pixelStorei(s30.UNPACK_FLIP_Y_WEBGL, y2.flipY), e.pixelStorei(s30.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y2.premultiplyAlpha), e.pixelStorei(s30.UNPACK_ALIGNMENT, y2.unpackAlignment), e.pixelStorei(s30.UNPACK_COLORSPACE_CONVERSION_WEBGL, $);
        let dt = y2.isCompressedTexture || y2.image[0].isCompressedTexture, Lt = y2.image[0] && y2.image[0].isDataTexture, gt = [];
        for (let tt = 0; tt < 6; tt++) !dt && !Lt ? gt[tt] = g(y2.image[tt], true, i2.maxCubemapSize) : gt[tt] = Lt ? y2.image[tt].image : y2.image[tt], gt[tt] = he(y2, gt[tt]);
        let ft = gt[0], Ft = r2.convert(y2.format, y2.colorSpace), zt = r2.convert(y2.type), Zt = v(y2.internalFormat, Ft, zt, y2.normalized, y2.colorSpace), D2 = y2.isVideoTexture !== true, ht = rt.__version === void 0 || V === true, Z2 = q.dataReady, pt = T2(y2, ft);
        ne(s30.TEXTURE_CUBE_MAP, y2);
        let Mt;
        if (dt) {
          D2 && ht && e.texStorage2D(s30.TEXTURE_CUBE_MAP, pt, Zt, ft.width, ft.height);
          for (let tt = 0; tt < 6; tt++) {
            Mt = gt[tt].mipmaps;
            for (let It = 0; It < Mt.length; It++) {
              let wt = Mt[It];
              y2.format !== Ye ? Ft !== null ? D2 ? Z2 && e.compressedTexSubImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, It, 0, 0, wt.width, wt.height, Ft, wt.data) : e.compressedTexImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, It, Zt, wt.width, wt.height, 0, wt.data) : ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D2 ? Z2 && e.texSubImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, It, 0, 0, wt.width, wt.height, Ft, zt, wt.data) : e.texImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, It, Zt, wt.width, wt.height, 0, Ft, zt, wt.data);
            }
          }
        } else {
          if (Mt = y2.mipmaps, D2 && ht) {
            Mt.length > 0 && pt++;
            let tt = te(gt[0]);
            e.texStorage2D(s30.TEXTURE_CUBE_MAP, pt, Zt, tt.width, tt.height);
          }
          for (let tt = 0; tt < 6; tt++) if (Lt) {
            D2 ? Z2 && e.texSubImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, 0, 0, 0, gt[tt].width, gt[tt].height, Ft, zt, gt[tt].data) : e.texImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, 0, Zt, gt[tt].width, gt[tt].height, 0, Ft, zt, gt[tt].data);
            for (let It = 0; It < Mt.length; It++) {
              let ve = Mt[It].image[tt].image;
              D2 ? Z2 && e.texSubImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, It + 1, 0, 0, ve.width, ve.height, Ft, zt, ve.data) : e.texImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, It + 1, Zt, ve.width, ve.height, 0, Ft, zt, ve.data);
            }
          } else {
            D2 ? Z2 && e.texSubImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, 0, 0, 0, Ft, zt, gt[tt]) : e.texImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, 0, Zt, Ft, zt, gt[tt]);
            for (let It = 0; It < Mt.length; It++) {
              let wt = Mt[It];
              D2 ? Z2 && e.texSubImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, It + 1, 0, 0, Ft, zt, wt.image[tt]) : e.texImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + tt, It + 1, Zt, Ft, zt, wt.image[tt]);
            }
          }
        }
        m2(y2) && M2(s30.TEXTURE_CUBE_MAP), rt.__version = q.version, y2.onUpdate && y2.onUpdate(y2);
      }
      w2.__version = y2.version;
    }
    function Ot(w2, y2, F2, V, q, rt) {
      let at = r2.convert(F2.format, F2.colorSpace), Y2 = r2.convert(F2.type), $ = v(F2.internalFormat, at, Y2, F2.normalized, F2.colorSpace), dt = n2.get(y2), Lt = n2.get(F2);
      if (Lt.__renderTarget = y2, !dt.__hasExternalTextures) {
        let gt = Math.max(1, y2.width >> rt), ft = Math.max(1, y2.height >> rt);
        q === s30.TEXTURE_3D || q === s30.TEXTURE_2D_ARRAY ? e.texImage3D(q, rt, $, gt, ft, y2.depth, 0, at, Y2, null) : e.texImage2D(q, rt, $, gt, ft, 0, at, Y2, null);
      }
      e.bindFramebuffer(s30.FRAMEBUFFER, w2), qt(y2) ? o3.framebufferTexture2DMultisampleEXT(s30.FRAMEBUFFER, V, q, Lt.__webglTexture, 0, Gt(y2)) : (q === s30.TEXTURE_2D || q >= s30.TEXTURE_CUBE_MAP_POSITIVE_X && q <= s30.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s30.framebufferTexture2D(s30.FRAMEBUFFER, V, q, Lt.__webglTexture, rt), e.bindFramebuffer(s30.FRAMEBUFFER, null);
    }
    function se(w2, y2, F2) {
      if (s30.bindRenderbuffer(s30.RENDERBUFFER, w2), y2.depthBuffer) {
        let V = y2.depthTexture, q = V && V.isDepthTexture ? V.type : null, rt = E(y2.stencilBuffer, q), at = y2.stencilBuffer ? s30.DEPTH_STENCIL_ATTACHMENT : s30.DEPTH_ATTACHMENT;
        qt(y2) ? o3.renderbufferStorageMultisampleEXT(s30.RENDERBUFFER, Gt(y2), rt, y2.width, y2.height) : F2 ? s30.renderbufferStorageMultisample(s30.RENDERBUFFER, Gt(y2), rt, y2.width, y2.height) : s30.renderbufferStorage(s30.RENDERBUFFER, rt, y2.width, y2.height), s30.framebufferRenderbuffer(s30.FRAMEBUFFER, at, s30.RENDERBUFFER, w2);
      } else {
        let V = y2.textures;
        for (let q = 0; q < V.length; q++) {
          let rt = V[q], at = r2.convert(rt.format, rt.colorSpace), Y2 = r2.convert(rt.type), $ = v(rt.internalFormat, at, Y2, rt.normalized, rt.colorSpace);
          qt(y2) ? o3.renderbufferStorageMultisampleEXT(s30.RENDERBUFFER, Gt(y2), $, y2.width, y2.height) : F2 ? s30.renderbufferStorageMultisample(s30.RENDERBUFFER, Gt(y2), $, y2.width, y2.height) : s30.renderbufferStorage(s30.RENDERBUFFER, $, y2.width, y2.height);
        }
      }
      s30.bindRenderbuffer(s30.RENDERBUFFER, null);
    }
    function Wt(w2, y2, F2) {
      let V = y2.isWebGLCubeRenderTarget === true;
      if (e.bindFramebuffer(s30.FRAMEBUFFER, w2), !(y2.depthTexture && y2.depthTexture.isDepthTexture)) throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
      let q = n2.get(y2.depthTexture);
      if (q.__renderTarget = y2, (!q.__webglTexture || y2.depthTexture.image.width !== y2.width || y2.depthTexture.image.height !== y2.height) && (y2.depthTexture.image.width = y2.width, y2.depthTexture.image.height = y2.height, y2.depthTexture.needsUpdate = true), V) {
        if (q.__webglInit === void 0 && (q.__webglInit = true, y2.depthTexture.addEventListener("dispose", R2)), q.__webglTexture === void 0) {
          q.__webglTexture = s30.createTexture(), e.bindTexture(s30.TEXTURE_CUBE_MAP, q.__webglTexture), ne(s30.TEXTURE_CUBE_MAP, y2.depthTexture);
          let dt = r2.convert(y2.depthTexture.format), Lt = r2.convert(y2.depthTexture.type), gt;
          y2.depthTexture.format === Pn ? gt = s30.DEPTH_COMPONENT24 : y2.depthTexture.format === Si && (gt = s30.DEPTH24_STENCIL8);
          for (let ft = 0; ft < 6; ft++) s30.texImage2D(s30.TEXTURE_CUBE_MAP_POSITIVE_X + ft, 0, gt, y2.width, y2.height, 0, dt, Lt, null);
        }
      } else K2(y2.depthTexture, 0);
      let rt = q.__webglTexture, at = Gt(y2), Y2 = V ? s30.TEXTURE_CUBE_MAP_POSITIVE_X + F2 : s30.TEXTURE_2D, $ = y2.depthTexture.format === Si ? s30.DEPTH_STENCIL_ATTACHMENT : s30.DEPTH_ATTACHMENT;
      if (y2.depthTexture.format === Pn) qt(y2) ? o3.framebufferTexture2DMultisampleEXT(s30.FRAMEBUFFER, $, Y2, rt, 0, at) : s30.framebufferTexture2D(s30.FRAMEBUFFER, $, Y2, rt, 0);
      else if (y2.depthTexture.format === Si) qt(y2) ? o3.framebufferTexture2DMultisampleEXT(s30.FRAMEBUFFER, $, Y2, rt, 0, at) : s30.framebufferTexture2D(s30.FRAMEBUFFER, $, Y2, rt, 0);
      else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
    }
    function j2(w2) {
      let y2 = n2.get(w2), F2 = w2.isWebGLCubeRenderTarget === true;
      if (y2.__boundDepthTexture !== w2.depthTexture) {
        let V = w2.depthTexture;
        if (y2.__depthDisposeCallback && y2.__depthDisposeCallback(), V) {
          let q = () => {
            delete y2.__boundDepthTexture, delete y2.__depthDisposeCallback, V.removeEventListener("dispose", q);
          };
          V.addEventListener("dispose", q), y2.__depthDisposeCallback = q;
        }
        y2.__boundDepthTexture = V;
      }
      if (w2.depthTexture && !y2.__autoAllocateDepthBuffer) if (F2) for (let V = 0; V < 6; V++) Wt(y2.__webglFramebuffer[V], w2, V);
      else {
        let V = w2.texture.mipmaps;
        V && V.length > 0 ? Wt(y2.__webglFramebuffer[0], w2, 0) : Wt(y2.__webglFramebuffer, w2, 0);
      }
      else if (F2) {
        y2.__webglDepthbuffer = [];
        for (let V = 0; V < 6; V++) if (e.bindFramebuffer(s30.FRAMEBUFFER, y2.__webglFramebuffer[V]), y2.__webglDepthbuffer[V] === void 0) y2.__webglDepthbuffer[V] = s30.createRenderbuffer(), se(y2.__webglDepthbuffer[V], w2, false);
        else {
          let q = w2.stencilBuffer ? s30.DEPTH_STENCIL_ATTACHMENT : s30.DEPTH_ATTACHMENT, rt = y2.__webglDepthbuffer[V];
          s30.bindRenderbuffer(s30.RENDERBUFFER, rt), s30.framebufferRenderbuffer(s30.FRAMEBUFFER, q, s30.RENDERBUFFER, rt);
        }
      } else {
        let V = w2.texture.mipmaps;
        if (V && V.length > 0 ? e.bindFramebuffer(s30.FRAMEBUFFER, y2.__webglFramebuffer[0]) : e.bindFramebuffer(s30.FRAMEBUFFER, y2.__webglFramebuffer), y2.__webglDepthbuffer === void 0) y2.__webglDepthbuffer = s30.createRenderbuffer(), se(y2.__webglDepthbuffer, w2, false);
        else {
          let q = w2.stencilBuffer ? s30.DEPTH_STENCIL_ATTACHMENT : s30.DEPTH_ATTACHMENT, rt = y2.__webglDepthbuffer;
          s30.bindRenderbuffer(s30.RENDERBUFFER, rt), s30.framebufferRenderbuffer(s30.FRAMEBUFFER, q, s30.RENDERBUFFER, rt);
        }
      }
      e.bindFramebuffer(s30.FRAMEBUFFER, null);
    }
    function nt(w2, y2, F2) {
      let V = n2.get(w2);
      y2 !== void 0 && Ot(V.__webglFramebuffer, w2, w2.texture, s30.COLOR_ATTACHMENT0, s30.TEXTURE_2D, 0), F2 !== void 0 && j2(w2);
    }
    function et(w2) {
      let y2 = w2.texture, F2 = n2.get(w2), V = n2.get(y2);
      w2.addEventListener("dispose", x3);
      let q = w2.textures, rt = w2.isWebGLCubeRenderTarget === true, at = q.length > 1;
      if (at || (V.__webglTexture === void 0 && (V.__webglTexture = s30.createTexture()), V.__version = y2.version, a.memory.textures++), rt) {
        F2.__webglFramebuffer = [];
        for (let Y2 = 0; Y2 < 6; Y2++) if (y2.mipmaps && y2.mipmaps.length > 0) {
          F2.__webglFramebuffer[Y2] = [];
          for (let $ = 0; $ < y2.mipmaps.length; $++) F2.__webglFramebuffer[Y2][$] = s30.createFramebuffer();
        } else F2.__webglFramebuffer[Y2] = s30.createFramebuffer();
      } else {
        if (y2.mipmaps && y2.mipmaps.length > 0) {
          F2.__webglFramebuffer = [];
          for (let Y2 = 0; Y2 < y2.mipmaps.length; Y2++) F2.__webglFramebuffer[Y2] = s30.createFramebuffer();
        } else F2.__webglFramebuffer = s30.createFramebuffer();
        if (at) for (let Y2 = 0, $ = q.length; Y2 < $; Y2++) {
          let dt = n2.get(q[Y2]);
          dt.__webglTexture === void 0 && (dt.__webglTexture = s30.createTexture(), a.memory.textures++);
        }
        if (w2.samples > 0 && qt(w2) === false) {
          F2.__webglMultisampledFramebuffer = s30.createFramebuffer(), F2.__webglColorRenderbuffer = [], e.bindFramebuffer(s30.FRAMEBUFFER, F2.__webglMultisampledFramebuffer);
          for (let Y2 = 0; Y2 < q.length; Y2++) {
            let $ = q[Y2];
            F2.__webglColorRenderbuffer[Y2] = s30.createRenderbuffer(), s30.bindRenderbuffer(s30.RENDERBUFFER, F2.__webglColorRenderbuffer[Y2]);
            let dt = r2.convert($.format, $.colorSpace), Lt = r2.convert($.type), gt = v($.internalFormat, dt, Lt, $.normalized, $.colorSpace, w2.isXRRenderTarget === true), ft = Gt(w2);
            s30.renderbufferStorageMultisample(s30.RENDERBUFFER, ft, gt, w2.width, w2.height), s30.framebufferRenderbuffer(s30.FRAMEBUFFER, s30.COLOR_ATTACHMENT0 + Y2, s30.RENDERBUFFER, F2.__webglColorRenderbuffer[Y2]);
          }
          s30.bindRenderbuffer(s30.RENDERBUFFER, null), w2.depthBuffer && (F2.__webglDepthRenderbuffer = s30.createRenderbuffer(), se(F2.__webglDepthRenderbuffer, w2, true)), e.bindFramebuffer(s30.FRAMEBUFFER, null);
        }
      }
      if (rt) {
        e.bindTexture(s30.TEXTURE_CUBE_MAP, V.__webglTexture), ne(s30.TEXTURE_CUBE_MAP, y2);
        for (let Y2 = 0; Y2 < 6; Y2++) if (y2.mipmaps && y2.mipmaps.length > 0) for (let $ = 0; $ < y2.mipmaps.length; $++) Ot(F2.__webglFramebuffer[Y2][$], w2, y2, s30.COLOR_ATTACHMENT0, s30.TEXTURE_CUBE_MAP_POSITIVE_X + Y2, $);
        else Ot(F2.__webglFramebuffer[Y2], w2, y2, s30.COLOR_ATTACHMENT0, s30.TEXTURE_CUBE_MAP_POSITIVE_X + Y2, 0);
        m2(y2) && M2(s30.TEXTURE_CUBE_MAP), e.unbindTexture();
      } else if (at) {
        for (let Y2 = 0, $ = q.length; Y2 < $; Y2++) {
          let dt = q[Y2], Lt = n2.get(dt), gt = s30.TEXTURE_2D;
          (w2.isWebGL3DRenderTarget || w2.isWebGLArrayRenderTarget) && (gt = w2.isWebGL3DRenderTarget ? s30.TEXTURE_3D : s30.TEXTURE_2D_ARRAY), e.bindTexture(gt, Lt.__webglTexture), ne(gt, dt), Ot(F2.__webglFramebuffer, w2, dt, s30.COLOR_ATTACHMENT0 + Y2, gt, 0), m2(dt) && M2(gt);
        }
        e.unbindTexture();
      } else {
        let Y2 = s30.TEXTURE_2D;
        if ((w2.isWebGL3DRenderTarget || w2.isWebGLArrayRenderTarget) && (Y2 = w2.isWebGL3DRenderTarget ? s30.TEXTURE_3D : s30.TEXTURE_2D_ARRAY), e.bindTexture(Y2, V.__webglTexture), ne(Y2, y2), y2.mipmaps && y2.mipmaps.length > 0) for (let $ = 0; $ < y2.mipmaps.length; $++) Ot(F2.__webglFramebuffer[$], w2, y2, s30.COLOR_ATTACHMENT0, Y2, $);
        else Ot(F2.__webglFramebuffer, w2, y2, s30.COLOR_ATTACHMENT0, Y2, 0);
        m2(y2) && M2(Y2), e.unbindTexture();
      }
      w2.depthBuffer && j2(w2);
    }
    function xt(w2) {
      let y2 = w2.textures;
      for (let F2 = 0, V = y2.length; F2 < V; F2++) {
        let q = y2[F2];
        if (m2(q)) {
          let rt = S2(w2), at = n2.get(q).__webglTexture;
          e.bindTexture(rt, at), M2(rt), e.unbindTexture();
        }
      }
    }
    let mt = [], Bt = [];
    function Pt(w2) {
      if (w2.samples > 0) {
        if (qt(w2) === false) {
          let y2 = w2.textures, F2 = w2.width, V = w2.height, q = s30.COLOR_BUFFER_BIT, rt = w2.stencilBuffer ? s30.DEPTH_STENCIL_ATTACHMENT : s30.DEPTH_ATTACHMENT, at = n2.get(w2), Y2 = y2.length > 1;
          if (Y2) for (let dt = 0; dt < y2.length; dt++) e.bindFramebuffer(s30.FRAMEBUFFER, at.__webglMultisampledFramebuffer), s30.framebufferRenderbuffer(s30.FRAMEBUFFER, s30.COLOR_ATTACHMENT0 + dt, s30.RENDERBUFFER, null), e.bindFramebuffer(s30.FRAMEBUFFER, at.__webglFramebuffer), s30.framebufferTexture2D(s30.DRAW_FRAMEBUFFER, s30.COLOR_ATTACHMENT0 + dt, s30.TEXTURE_2D, null, 0);
          e.bindFramebuffer(s30.READ_FRAMEBUFFER, at.__webglMultisampledFramebuffer);
          let $ = w2.texture.mipmaps;
          $ && $.length > 0 ? e.bindFramebuffer(s30.DRAW_FRAMEBUFFER, at.__webglFramebuffer[0]) : e.bindFramebuffer(s30.DRAW_FRAMEBUFFER, at.__webglFramebuffer);
          for (let dt = 0; dt < y2.length; dt++) {
            if (w2.resolveDepthBuffer && (w2.depthBuffer && (q |= s30.DEPTH_BUFFER_BIT), w2.stencilBuffer && w2.resolveStencilBuffer && (q |= s30.STENCIL_BUFFER_BIT)), Y2) {
              s30.framebufferRenderbuffer(s30.READ_FRAMEBUFFER, s30.COLOR_ATTACHMENT0, s30.RENDERBUFFER, at.__webglColorRenderbuffer[dt]);
              let Lt = n2.get(y2[dt]).__webglTexture;
              s30.framebufferTexture2D(s30.DRAW_FRAMEBUFFER, s30.COLOR_ATTACHMENT0, s30.TEXTURE_2D, Lt, 0);
            }
            s30.blitFramebuffer(0, 0, F2, V, 0, 0, F2, V, q, s30.NEAREST), l2 === true && (mt.length = 0, Bt.length = 0, mt.push(s30.COLOR_ATTACHMENT0 + dt), w2.depthBuffer && w2.resolveDepthBuffer === false && (mt.push(rt), Bt.push(rt), s30.invalidateFramebuffer(s30.DRAW_FRAMEBUFFER, Bt)), s30.invalidateFramebuffer(s30.READ_FRAMEBUFFER, mt));
          }
          if (e.bindFramebuffer(s30.READ_FRAMEBUFFER, null), e.bindFramebuffer(s30.DRAW_FRAMEBUFFER, null), Y2) for (let dt = 0; dt < y2.length; dt++) {
            e.bindFramebuffer(s30.FRAMEBUFFER, at.__webglMultisampledFramebuffer), s30.framebufferRenderbuffer(s30.FRAMEBUFFER, s30.COLOR_ATTACHMENT0 + dt, s30.RENDERBUFFER, at.__webglColorRenderbuffer[dt]);
            let Lt = n2.get(y2[dt]).__webglTexture;
            e.bindFramebuffer(s30.FRAMEBUFFER, at.__webglFramebuffer), s30.framebufferTexture2D(s30.DRAW_FRAMEBUFFER, s30.COLOR_ATTACHMENT0 + dt, s30.TEXTURE_2D, Lt, 0);
          }
          e.bindFramebuffer(s30.DRAW_FRAMEBUFFER, at.__webglMultisampledFramebuffer);
        } else if (w2.depthBuffer && w2.resolveDepthBuffer === false && l2) {
          let y2 = w2.stencilBuffer ? s30.DEPTH_STENCIL_ATTACHMENT : s30.DEPTH_ATTACHMENT;
          s30.invalidateFramebuffer(s30.DRAW_FRAMEBUFFER, [y2]);
        }
      }
    }
    function Gt(w2) {
      return Math.min(i2.maxSamples, w2.samples);
    }
    function qt(w2) {
      let y2 = n2.get(w2);
      return w2.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && y2.__useRenderToTexture !== false;
    }
    function L(w2) {
      let y2 = a.render.frame;
      h3.get(w2) !== y2 && (h3.set(w2, y2), w2.update());
    }
    function he(w2, y2) {
      let F2 = w2.colorSpace, V = w2.format, q = w2.type;
      return w2.isCompressedTexture === true || w2.isVideoTexture === true || F2 !== gr && F2 !== ni && (ee.getTransfer(F2) === ae ? (V !== Ye || q !== sn) && ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Rt("WebGLTextures: Unsupported texture color space:", F2)), y2;
    }
    function te(w2) {
      return typeof HTMLImageElement < "u" && w2 instanceof HTMLImageElement ? (c3.width = w2.naturalWidth || w2.width, c3.height = w2.naturalHeight || w2.height) : typeof VideoFrame < "u" && w2 instanceof VideoFrame ? (c3.width = w2.displayWidth, c3.height = w2.displayHeight) : (c3.width = w2.width, c3.height = w2.height), c3;
    }
    this.allocateTextureUnit = W, this.resetTextureUnits = H2, this.getTextureUnits = X, this.setTextureUnits = O, this.setTexture2D = K2, this.setTexture2DArray = it, this.setTexture3D = ut, this.setTextureCube = lt, this.rebindTextures = nt, this.setupRenderTarget = et, this.updateRenderTargetMipmap = xt, this.updateMultisampleRenderTarget = Pt, this.setupDepthRenderbuffer = j2, this.setupFrameBufferTexture = Ot, this.useMultisampledRTT = qt, this.isReversedDepthBuffer = function() {
      return e.buffers.depth.getReversed();
    };
  }
  function DM(s30, t) {
    function e(n2, i2 = ni) {
      let r2, a = ee.getTransfer(i2);
      if (n2 === sn) return s30.UNSIGNED_BYTE;
      if (n2 === Rl) return s30.UNSIGNED_SHORT_4_4_4_4;
      if (n2 === Il) return s30.UNSIGNED_SHORT_5_5_5_1;
      if (n2 === Bu) return s30.UNSIGNED_INT_5_9_9_9_REV;
      if (n2 === zu) return s30.UNSIGNED_INT_10F_11F_11F_REV;
      if (n2 === Fu) return s30.BYTE;
      if (n2 === Ou) return s30.SHORT;
      if (n2 === Ws) return s30.UNSIGNED_SHORT;
      if (n2 === Cl) return s30.INT;
      if (n2 === mn) return s30.UNSIGNED_INT;
      if (n2 === qe) return s30.FLOAT;
      if (n2 === zn) return s30.HALF_FLOAT;
      if (n2 === Vu) return s30.ALPHA;
      if (n2 === ku) return s30.RGB;
      if (n2 === Ye) return s30.RGBA;
      if (n2 === Pn) return s30.DEPTH_COMPONENT;
      if (n2 === Si) return s30.DEPTH_STENCIL;
      if (n2 === Pl) return s30.RED;
      if (n2 === na) return s30.RED_INTEGER;
      if (n2 === bi) return s30.RG;
      if (n2 === Ll) return s30.RG_INTEGER;
      if (n2 === Dl) return s30.RGBA_INTEGER;
      if (n2 === ia || n2 === sa || n2 === ra || n2 === aa) if (a === ae) if (r2 = t.get("WEBGL_compressed_texture_s3tc_srgb"), r2 !== null) {
        if (n2 === ia) return r2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n2 === sa) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n2 === ra) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n2 === aa) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else return null;
      else if (r2 = t.get("WEBGL_compressed_texture_s3tc"), r2 !== null) {
        if (n2 === ia) return r2.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n2 === sa) return r2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n2 === ra) return r2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n2 === aa) return r2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
      if (n2 === Nl || n2 === Ul || n2 === Fl || n2 === Ol) if (r2 = t.get("WEBGL_compressed_texture_pvrtc"), r2 !== null) {
        if (n2 === Nl) return r2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n2 === Ul) return r2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n2 === Fl) return r2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n2 === Ol) return r2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
      if (n2 === Bl || n2 === zl || n2 === Vl || n2 === kl || n2 === Gl || n2 === oa || n2 === Hl) if (r2 = t.get("WEBGL_compressed_texture_etc"), r2 !== null) {
        if (n2 === Bl || n2 === zl) return a === ae ? r2.COMPRESSED_SRGB8_ETC2 : r2.COMPRESSED_RGB8_ETC2;
        if (n2 === Vl) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r2.COMPRESSED_RGBA8_ETC2_EAC;
        if (n2 === kl) return r2.COMPRESSED_R11_EAC;
        if (n2 === Gl) return r2.COMPRESSED_SIGNED_R11_EAC;
        if (n2 === oa) return r2.COMPRESSED_RG11_EAC;
        if (n2 === Hl) return r2.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
      if (n2 === Wl || n2 === Xl || n2 === ql || n2 === Yl || n2 === Zl || n2 === Jl || n2 === $l || n2 === Kl || n2 === Ql || n2 === jl || n2 === tc || n2 === ec || n2 === nc || n2 === ic) if (r2 = t.get("WEBGL_compressed_texture_astc"), r2 !== null) {
        if (n2 === Wl) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r2.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n2 === Xl) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r2.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n2 === ql) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r2.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n2 === Yl) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r2.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n2 === Zl) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r2.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n2 === Jl) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r2.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n2 === $l) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r2.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n2 === Kl) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r2.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n2 === Ql) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r2.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n2 === jl) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r2.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n2 === tc) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r2.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n2 === ec) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r2.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n2 === nc) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r2.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n2 === ic) return a === ae ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r2.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
      if (n2 === sc || n2 === rc || n2 === ac) if (r2 = t.get("EXT_texture_compression_bptc"), r2 !== null) {
        if (n2 === sc) return a === ae ? r2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r2.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n2 === rc) return r2.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n2 === ac) return r2.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
      if (n2 === oc || n2 === lc || n2 === la || n2 === cc) if (r2 = t.get("EXT_texture_compression_rgtc"), r2 !== null) {
        if (n2 === oc) return r2.COMPRESSED_RED_RGTC1_EXT;
        if (n2 === lc) return r2.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n2 === la) return r2.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n2 === cc) return r2.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
      return n2 === Xs ? s30.UNSIGNED_INT_24_8 : s30[n2] !== void 0 ? s30[n2] : null;
    }
    return { convert: e };
  }
  var NM = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`;
  var UM = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
  var ld = class {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(t, e) {
      if (this.texture === null) {
        let n2 = new Er(t.texture);
        (t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = n2;
      }
    }
    getMesh(t) {
      if (this.texture !== null && this.mesh === null) {
        let e = t.cameras[0].viewport, n2 = new en({ vertexShader: NM, fragmentShader: UM, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
        this.mesh = new Se(new Os(20, 20), n2);
      }
      return this.mesh;
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
    getDepthTexture() {
      return this.texture;
    }
  };
  var cd = class extends hn {
    constructor(t, e) {
      super();
      let n2 = this, i2 = null, r2 = 1, a = null, o3 = "local-floor", l2 = 1, c3 = null, h3 = null, d4 = null, u3 = null, f3 = null, p2 = null, _ = typeof XRWebGLBinding < "u", g = new ld(), m2 = {}, M2 = e.getContextAttributes(), S2 = null, v = null, E = [], T2 = [], R2 = new Q(), x3 = null, A3 = new Re();
      A3.viewport = new ce();
      let I2 = new Re();
      I2.viewport = new ce();
      let P3 = [A3, I2], N2 = new Ml(), H2 = null, X = null;
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(J) {
        let ct = E[J];
        return ct === void 0 && (ct = new Ls(), E[J] = ct), ct.getTargetRaySpace();
      }, this.getControllerGrip = function(J) {
        let ct = E[J];
        return ct === void 0 && (ct = new Ls(), E[J] = ct), ct.getGripSpace();
      }, this.getHand = function(J) {
        let ct = E[J];
        return ct === void 0 && (ct = new Ls(), E[J] = ct), ct.getHandSpace();
      };
      function O(J) {
        let ct = T2.indexOf(J.inputSource);
        if (ct === -1) return;
        let st = E[ct];
        st !== void 0 && (st.update(J.inputSource, J.frame, c3 || a), st.dispatchEvent({ type: J.type, data: J.inputSource }));
      }
      function W() {
        i2.removeEventListener("select", O), i2.removeEventListener("selectstart", O), i2.removeEventListener("selectend", O), i2.removeEventListener("squeeze", O), i2.removeEventListener("squeezestart", O), i2.removeEventListener("squeezeend", O), i2.removeEventListener("end", W), i2.removeEventListener("inputsourceschange", G);
        for (let J = 0; J < E.length; J++) {
          let ct = T2[J];
          ct !== null && (T2[J] = null, E[J].disconnect(ct));
        }
        H2 = null, X = null, g.reset();
        for (let J in m2) delete m2[J];
        t.setRenderTarget(S2), f3 = null, u3 = null, d4 = null, i2 = null, v = null, ne.stop(), n2.isPresenting = false, t.setPixelRatio(x3), t.setSize(R2.width, R2.height, false), n2.dispatchEvent({ type: "sessionend" });
      }
      this.setFramebufferScaleFactor = function(J) {
        r2 = J, n2.isPresenting === true && ot("WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(J) {
        o3 = J, n2.isPresenting === true && ot("WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return c3 || a;
      }, this.setReferenceSpace = function(J) {
        c3 = J;
      }, this.getBaseLayer = function() {
        return u3 !== null ? u3 : f3;
      }, this.getBinding = function() {
        return d4 === null && _ && (d4 = new XRWebGLBinding(i2, e)), d4;
      }, this.getFrame = function() {
        return p2;
      }, this.getSession = function() {
        return i2;
      }, this.setSession = async function(J) {
        if (i2 = J, i2 !== null) {
          if (S2 = t.getRenderTarget(), i2.addEventListener("select", O), i2.addEventListener("selectstart", O), i2.addEventListener("selectend", O), i2.addEventListener("squeeze", O), i2.addEventListener("squeezestart", O), i2.addEventListener("squeezeend", O), i2.addEventListener("end", W), i2.addEventListener("inputsourceschange", G), M2.xrCompatible !== true && await e.makeXRCompatible(), x3 = t.getPixelRatio(), t.getSize(R2), _ && "createProjectionLayer" in XRWebGLBinding.prototype) {
            let st = null, Nt = null, kt = null;
            M2.depth && (kt = M2.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, st = M2.stencil ? Si : Pn, Nt = M2.stencil ? Xs : mn);
            let Ot = { colorFormat: e.RGBA8, depthFormat: kt, scaleFactor: r2 };
            d4 = this.getBinding(), u3 = d4.createProjectionLayer(Ot), i2.updateRenderState({ layers: [u3] }), t.setPixelRatio(1), t.setSize(u3.textureWidth, u3.textureHeight, false), v = new Ze(u3.textureWidth, u3.textureHeight, { format: Ye, type: sn, depthTexture: new Qn(u3.textureWidth, u3.textureHeight, Nt, void 0, void 0, void 0, void 0, void 0, void 0, st), stencilBuffer: M2.stencil, colorSpace: t.outputColorSpace, samples: M2.antialias ? 4 : 0, resolveDepthBuffer: u3.ignoreDepthValues === false, resolveStencilBuffer: u3.ignoreDepthValues === false });
          } else {
            let st = { antialias: M2.antialias, alpha: true, depth: M2.depth, stencil: M2.stencil, framebufferScaleFactor: r2 };
            f3 = new XRWebGLLayer(i2, e, st), i2.updateRenderState({ baseLayer: f3 }), t.setPixelRatio(1), t.setSize(f3.framebufferWidth, f3.framebufferHeight, false), v = new Ze(f3.framebufferWidth, f3.framebufferHeight, { format: Ye, type: sn, colorSpace: t.outputColorSpace, stencilBuffer: M2.stencil, resolveDepthBuffer: f3.ignoreDepthValues === false, resolveStencilBuffer: f3.ignoreDepthValues === false });
          }
          v.isXRRenderTarget = true, this.setFoveation(l2), c3 = null, a = await i2.requestReferenceSpace(o3), ne.setContext(i2), ne.start(), n2.isPresenting = true, n2.dispatchEvent({ type: "sessionstart" });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (i2 !== null) return i2.environmentBlendMode;
      }, this.getDepthTexture = function() {
        return g.getDepthTexture();
      };
      function G(J) {
        for (let ct = 0; ct < J.removed.length; ct++) {
          let st = J.removed[ct], Nt = T2.indexOf(st);
          Nt >= 0 && (T2[Nt] = null, E[Nt].disconnect(st));
        }
        for (let ct = 0; ct < J.added.length; ct++) {
          let st = J.added[ct], Nt = T2.indexOf(st);
          if (Nt === -1) {
            for (let Ot = 0; Ot < E.length; Ot++) if (Ot >= T2.length) {
              T2.push(st), Nt = Ot;
              break;
            } else if (T2[Ot] === null) {
              T2[Ot] = st, Nt = Ot;
              break;
            }
            if (Nt === -1) break;
          }
          let kt = E[Nt];
          kt && kt.connect(st);
        }
      }
      let K2 = new C(), it = new C();
      function ut(J, ct, st) {
        K2.setFromMatrixPosition(ct.matrixWorld), it.setFromMatrixPosition(st.matrixWorld);
        let Nt = K2.distanceTo(it), kt = ct.projectionMatrix.elements, Ot = st.projectionMatrix.elements, se = kt[14] / (kt[10] - 1), Wt = kt[14] / (kt[10] + 1), j2 = (kt[9] + 1) / kt[5], nt = (kt[9] - 1) / kt[5], et = (kt[8] - 1) / kt[0], xt = (Ot[8] + 1) / Ot[0], mt = se * et, Bt = se * xt, Pt = Nt / (-et + xt), Gt = Pt * -et;
        if (ct.matrixWorld.decompose(J.position, J.quaternion, J.scale), J.translateX(Gt), J.translateZ(Pt), J.matrixWorld.compose(J.position, J.quaternion, J.scale), J.matrixWorldInverse.copy(J.matrixWorld).invert(), kt[10] === -1) J.projectionMatrix.copy(ct.projectionMatrix), J.projectionMatrixInverse.copy(ct.projectionMatrixInverse);
        else {
          let qt = se + Pt, L = Wt + Pt, he = mt - Gt, te = Bt + (Nt - Gt), w2 = j2 * Wt / L * qt, y2 = nt * Wt / L * qt;
          J.projectionMatrix.makePerspective(he, te, w2, y2, qt, L), J.projectionMatrixInverse.copy(J.projectionMatrix).invert();
        }
      }
      function lt(J, ct) {
        ct === null ? J.matrixWorld.copy(J.matrix) : J.matrixWorld.multiplyMatrices(ct.matrixWorld, J.matrix), J.matrixWorldInverse.copy(J.matrixWorld).invert();
      }
      this.updateCamera = function(J) {
        if (i2 === null) return;
        let ct = J.near, st = J.far;
        g.texture !== null && (g.depthNear > 0 && (ct = g.depthNear), g.depthFar > 0 && (st = g.depthFar)), N2.near = I2.near = A3.near = ct, N2.far = I2.far = A3.far = st, (H2 !== N2.near || X !== N2.far) && (i2.updateRenderState({ depthNear: N2.near, depthFar: N2.far }), H2 = N2.near, X = N2.far), N2.layers.mask = J.layers.mask | 6, A3.layers.mask = N2.layers.mask & -5, I2.layers.mask = N2.layers.mask & -3;
        let Nt = J.parent, kt = N2.cameras;
        lt(N2, Nt);
        for (let Ot = 0; Ot < kt.length; Ot++) lt(kt[Ot], Nt);
        kt.length === 2 ? ut(N2, A3, I2) : N2.projectionMatrix.copy(A3.projectionMatrix), bt(J, N2, Nt);
      };
      function bt(J, ct, st) {
        st === null ? J.matrix.copy(ct.matrixWorld) : (J.matrix.copy(st.matrixWorld), J.matrix.invert(), J.matrix.multiply(ct.matrixWorld)), J.matrix.decompose(J.position, J.quaternion, J.scale), J.updateMatrixWorld(true), J.projectionMatrix.copy(ct.projectionMatrix), J.projectionMatrixInverse.copy(ct.projectionMatrixInverse), J.isPerspectiveCamera && (J.fov = qi * 2 * Math.atan(1 / J.projectionMatrix.elements[5]), J.zoom = 1);
      }
      this.getCamera = function() {
        return N2;
      }, this.getFoveation = function() {
        if (!(u3 === null && f3 === null)) return l2;
      }, this.setFoveation = function(J) {
        l2 = J, u3 !== null && (u3.fixedFoveation = J), f3 !== null && f3.fixedFoveation !== void 0 && (f3.fixedFoveation = J);
      }, this.hasDepthSensing = function() {
        return g.texture !== null;
      }, this.getDepthSensingMesh = function() {
        return g.getMesh(N2);
      }, this.getCameraTexture = function(J) {
        return m2[J];
      };
      let Qt = null;
      function de(J, ct) {
        if (h3 = ct.getViewerPose(c3 || a), p2 = ct, h3 !== null) {
          let st = h3.views;
          f3 !== null && (t.setRenderTargetFramebuffer(v, f3.framebuffer), t.setRenderTarget(v));
          let Nt = false;
          st.length !== N2.cameras.length && (N2.cameras.length = 0, Nt = true);
          for (let Wt = 0; Wt < st.length; Wt++) {
            let j2 = st[Wt], nt = null;
            if (f3 !== null) nt = f3.getViewport(j2);
            else {
              let xt = d4.getViewSubImage(u3, j2);
              nt = xt.viewport, Wt === 0 && (t.setRenderTargetTextures(v, xt.colorTexture, xt.depthStencilTexture), t.setRenderTarget(v));
            }
            let et = P3[Wt];
            et === void 0 && (et = new Re(), et.layers.enable(Wt), et.viewport = new ce(), P3[Wt] = et), et.matrix.fromArray(j2.transform.matrix), et.matrix.decompose(et.position, et.quaternion, et.scale), et.projectionMatrix.fromArray(j2.projectionMatrix), et.projectionMatrixInverse.copy(et.projectionMatrix).invert(), et.viewport.set(nt.x, nt.y, nt.width, nt.height), Wt === 0 && (N2.matrix.copy(et.matrix), N2.matrix.decompose(N2.position, N2.quaternion, N2.scale)), Nt === true && N2.cameras.push(et);
          }
          let kt = i2.enabledFeatures;
          if (kt && kt.includes("depth-sensing") && i2.depthUsage == "gpu-optimized" && _) {
            d4 = n2.getBinding();
            let Wt = d4.getDepthInformation(st[0]);
            Wt && Wt.isValid && Wt.texture && g.init(Wt, i2.renderState);
          }
          if (kt && kt.includes("camera-access") && _) {
            t.state.unbindTexture(), d4 = n2.getBinding();
            for (let Wt = 0; Wt < st.length; Wt++) {
              let j2 = st[Wt].camera;
              if (j2) {
                let nt = m2[j2];
                nt || (nt = new Er(), m2[j2] = nt);
                let et = d4.getCameraImage(j2);
                nt.sourceTexture = et;
              }
            }
          }
        }
        for (let st = 0; st < E.length; st++) {
          let Nt = T2[st], kt = E[st];
          Nt !== null && kt !== void 0 && kt.update(Nt, ct, c3 || a);
        }
        Qt && Qt(J, ct), ct.detectedPlanes && n2.dispatchEvent({ type: "planesdetected", data: ct }), p2 = null;
      }
      let ne = new Kp();
      ne.setAnimationLoop(de), this.setAnimationLoop = function(J) {
        Qt = J;
      }, this.dispose = function() {
      };
    }
  };
  var FM = new Ht();
  var im = new Xt();
  im.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
  function OM(s30, t) {
    function e(g, m2) {
      g.matrixAutoUpdate === true && g.updateMatrix(), m2.value.copy(g.matrix);
    }
    function n2(g, m2) {
      m2.color.getRGB(g.fogColor.value, qu(s30)), m2.isFog ? (g.fogNear.value = m2.near, g.fogFar.value = m2.far) : m2.isFogExp2 && (g.fogDensity.value = m2.density);
    }
    function i2(g, m2, M2, S2, v) {
      m2.isNodeMaterial ? m2.uniformsNeedUpdate = false : m2.isMeshBasicMaterial ? r2(g, m2) : m2.isMeshLambertMaterial ? (r2(g, m2), m2.envMap && (g.envMapIntensity.value = m2.envMapIntensity)) : m2.isMeshToonMaterial ? (r2(g, m2), d4(g, m2)) : m2.isMeshPhongMaterial ? (r2(g, m2), h3(g, m2), m2.envMap && (g.envMapIntensity.value = m2.envMapIntensity)) : m2.isMeshStandardMaterial ? (r2(g, m2), u3(g, m2), m2.isMeshPhysicalMaterial && f3(g, m2, v)) : m2.isMeshMatcapMaterial ? (r2(g, m2), p2(g, m2)) : m2.isMeshDepthMaterial ? r2(g, m2) : m2.isMeshDistanceMaterial ? (r2(g, m2), _(g, m2)) : m2.isMeshNormalMaterial ? r2(g, m2) : m2.isLineBasicMaterial ? (a(g, m2), m2.isLineDashedMaterial && o3(g, m2)) : m2.isPointsMaterial ? l2(g, m2, M2, S2) : m2.isSpriteMaterial ? c3(g, m2) : m2.isShadowMaterial ? (g.color.value.copy(m2.color), g.opacity.value = m2.opacity) : m2.isShaderMaterial && (m2.uniformsNeedUpdate = false);
    }
    function r2(g, m2) {
      g.opacity.value = m2.opacity, m2.color && g.diffuse.value.copy(m2.color), m2.emissive && g.emissive.value.copy(m2.emissive).multiplyScalar(m2.emissiveIntensity), m2.map && (g.map.value = m2.map, e(m2.map, g.mapTransform)), m2.alphaMap && (g.alphaMap.value = m2.alphaMap, e(m2.alphaMap, g.alphaMapTransform)), m2.bumpMap && (g.bumpMap.value = m2.bumpMap, e(m2.bumpMap, g.bumpMapTransform), g.bumpScale.value = m2.bumpScale, m2.side === Je && (g.bumpScale.value *= -1)), m2.normalMap && (g.normalMap.value = m2.normalMap, e(m2.normalMap, g.normalMapTransform), g.normalScale.value.copy(m2.normalScale), m2.side === Je && g.normalScale.value.negate()), m2.displacementMap && (g.displacementMap.value = m2.displacementMap, e(m2.displacementMap, g.displacementMapTransform), g.displacementScale.value = m2.displacementScale, g.displacementBias.value = m2.displacementBias), m2.emissiveMap && (g.emissiveMap.value = m2.emissiveMap, e(m2.emissiveMap, g.emissiveMapTransform)), m2.specularMap && (g.specularMap.value = m2.specularMap, e(m2.specularMap, g.specularMapTransform)), m2.alphaTest > 0 && (g.alphaTest.value = m2.alphaTest);
      let M2 = t.get(m2), S2 = M2.envMap, v = M2.envMapRotation;
      S2 && (g.envMap.value = S2, g.envMapRotation.value.setFromMatrix4(FM.makeRotationFromEuler(v)).transpose(), S2.isCubeTexture && S2.isRenderTargetTexture === false && g.envMapRotation.value.premultiply(im), g.reflectivity.value = m2.reflectivity, g.ior.value = m2.ior, g.refractionRatio.value = m2.refractionRatio), m2.lightMap && (g.lightMap.value = m2.lightMap, g.lightMapIntensity.value = m2.lightMapIntensity, e(m2.lightMap, g.lightMapTransform)), m2.aoMap && (g.aoMap.value = m2.aoMap, g.aoMapIntensity.value = m2.aoMapIntensity, e(m2.aoMap, g.aoMapTransform));
    }
    function a(g, m2) {
      g.diffuse.value.copy(m2.color), g.opacity.value = m2.opacity, m2.map && (g.map.value = m2.map, e(m2.map, g.mapTransform));
    }
    function o3(g, m2) {
      g.dashSize.value = m2.dashSize, g.totalSize.value = m2.dashSize + m2.gapSize, g.scale.value = m2.scale;
    }
    function l2(g, m2, M2, S2) {
      g.diffuse.value.copy(m2.color), g.opacity.value = m2.opacity, g.size.value = m2.size * M2, g.scale.value = S2 * 0.5, m2.map && (g.map.value = m2.map, e(m2.map, g.uvTransform)), m2.alphaMap && (g.alphaMap.value = m2.alphaMap, e(m2.alphaMap, g.alphaMapTransform)), m2.alphaTest > 0 && (g.alphaTest.value = m2.alphaTest);
    }
    function c3(g, m2) {
      g.diffuse.value.copy(m2.color), g.opacity.value = m2.opacity, g.rotation.value = m2.rotation, m2.map && (g.map.value = m2.map, e(m2.map, g.mapTransform)), m2.alphaMap && (g.alphaMap.value = m2.alphaMap, e(m2.alphaMap, g.alphaMapTransform)), m2.alphaTest > 0 && (g.alphaTest.value = m2.alphaTest);
    }
    function h3(g, m2) {
      g.specular.value.copy(m2.specular), g.shininess.value = Math.max(m2.shininess, 1e-4);
    }
    function d4(g, m2) {
      m2.gradientMap && (g.gradientMap.value = m2.gradientMap);
    }
    function u3(g, m2) {
      g.metalness.value = m2.metalness, m2.metalnessMap && (g.metalnessMap.value = m2.metalnessMap, e(m2.metalnessMap, g.metalnessMapTransform)), g.roughness.value = m2.roughness, m2.roughnessMap && (g.roughnessMap.value = m2.roughnessMap, e(m2.roughnessMap, g.roughnessMapTransform)), m2.envMap && (g.envMapIntensity.value = m2.envMapIntensity);
    }
    function f3(g, m2, M2) {
      g.ior.value = m2.ior, m2.sheen > 0 && (g.sheenColor.value.copy(m2.sheenColor).multiplyScalar(m2.sheen), g.sheenRoughness.value = m2.sheenRoughness, m2.sheenColorMap && (g.sheenColorMap.value = m2.sheenColorMap, e(m2.sheenColorMap, g.sheenColorMapTransform)), m2.sheenRoughnessMap && (g.sheenRoughnessMap.value = m2.sheenRoughnessMap, e(m2.sheenRoughnessMap, g.sheenRoughnessMapTransform))), m2.clearcoat > 0 && (g.clearcoat.value = m2.clearcoat, g.clearcoatRoughness.value = m2.clearcoatRoughness, m2.clearcoatMap && (g.clearcoatMap.value = m2.clearcoatMap, e(m2.clearcoatMap, g.clearcoatMapTransform)), m2.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = m2.clearcoatRoughnessMap, e(m2.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), m2.clearcoatNormalMap && (g.clearcoatNormalMap.value = m2.clearcoatNormalMap, e(m2.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(m2.clearcoatNormalScale), m2.side === Je && g.clearcoatNormalScale.value.negate())), m2.dispersion > 0 && (g.dispersion.value = m2.dispersion), m2.iridescence > 0 && (g.iridescence.value = m2.iridescence, g.iridescenceIOR.value = m2.iridescenceIOR, g.iridescenceThicknessMinimum.value = m2.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = m2.iridescenceThicknessRange[1], m2.iridescenceMap && (g.iridescenceMap.value = m2.iridescenceMap, e(m2.iridescenceMap, g.iridescenceMapTransform)), m2.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = m2.iridescenceThicknessMap, e(m2.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), m2.transmission > 0 && (g.transmission.value = m2.transmission, g.transmissionSamplerMap.value = M2.texture, g.transmissionSamplerSize.value.set(M2.width, M2.height), m2.transmissionMap && (g.transmissionMap.value = m2.transmissionMap, e(m2.transmissionMap, g.transmissionMapTransform)), g.thickness.value = m2.thickness, m2.thicknessMap && (g.thicknessMap.value = m2.thicknessMap, e(m2.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = m2.attenuationDistance, g.attenuationColor.value.copy(m2.attenuationColor)), m2.anisotropy > 0 && (g.anisotropyVector.value.set(m2.anisotropy * Math.cos(m2.anisotropyRotation), m2.anisotropy * Math.sin(m2.anisotropyRotation)), m2.anisotropyMap && (g.anisotropyMap.value = m2.anisotropyMap, e(m2.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = m2.specularIntensity, g.specularColor.value.copy(m2.specularColor), m2.specularColorMap && (g.specularColorMap.value = m2.specularColorMap, e(m2.specularColorMap, g.specularColorMapTransform)), m2.specularIntensityMap && (g.specularIntensityMap.value = m2.specularIntensityMap, e(m2.specularIntensityMap, g.specularIntensityMapTransform));
    }
    function p2(g, m2) {
      m2.matcap && (g.matcap.value = m2.matcap);
    }
    function _(g, m2) {
      let M2 = t.get(m2).light;
      g.referencePosition.value.setFromMatrixPosition(M2.matrixWorld), g.nearDistance.value = M2.shadow.camera.near, g.farDistance.value = M2.shadow.camera.far;
    }
    return { refreshFogUniforms: n2, refreshMaterialUniforms: i2 };
  }
  function BM(s30, t, e, n2) {
    let i2 = {}, r2 = {}, a = [], o3 = s30.getParameter(s30.MAX_UNIFORM_BUFFER_BINDINGS);
    function l2(v, E) {
      let T2 = E.program;
      n2.uniformBlockBinding(v, T2);
    }
    function c3(v, E) {
      let T2 = i2[v.id];
      T2 === void 0 && (g(v), T2 = h3(v), i2[v.id] = T2, v.addEventListener("dispose", M2));
      let R2 = E.program;
      n2.updateUBOMapping(v, R2);
      let x3 = t.render.frame;
      r2[v.id] !== x3 && (u3(v), r2[v.id] = x3);
    }
    function h3(v) {
      let E = d4();
      v.__bindingPointIndex = E;
      let T2 = s30.createBuffer(), R2 = v.__size, x3 = v.usage;
      return s30.bindBuffer(s30.UNIFORM_BUFFER, T2), s30.bufferData(s30.UNIFORM_BUFFER, R2, x3), s30.bindBuffer(s30.UNIFORM_BUFFER, null), s30.bindBufferBase(s30.UNIFORM_BUFFER, E, T2), T2;
    }
    function d4() {
      for (let v = 0; v < o3; v++) if (a.indexOf(v) === -1) return a.push(v), v;
      return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
    }
    function u3(v) {
      let E = i2[v.id], T2 = v.uniforms, R2 = v.__cache;
      s30.bindBuffer(s30.UNIFORM_BUFFER, E);
      for (let x3 = 0, A3 = T2.length; x3 < A3; x3++) {
        let I2 = T2[x3];
        if (Array.isArray(I2)) for (let P3 = 0, N2 = I2.length; P3 < N2; P3++) f3(I2[P3], x3, P3, R2);
        else f3(I2, x3, 0, R2);
      }
      s30.bindBuffer(s30.UNIFORM_BUFFER, null);
    }
    function f3(v, E, T2, R2) {
      if (_(v, E, T2, R2) === true) {
        let x3 = v.__offset, A3 = v.value;
        if (Array.isArray(A3)) {
          let I2 = 0;
          for (let P3 = 0; P3 < A3.length; P3++) {
            let N2 = A3[P3], H2 = m2(N2);
            p2(N2, v.__data, I2), typeof N2 != "number" && typeof N2 != "boolean" && !N2.isMatrix3 && !ArrayBuffer.isView(N2) && (I2 += H2.storage / Float32Array.BYTES_PER_ELEMENT);
          }
        } else p2(A3, v.__data, 0);
        s30.bufferSubData(s30.UNIFORM_BUFFER, x3, v.__data);
      }
    }
    function p2(v, E, T2) {
      typeof v == "number" || typeof v == "boolean" ? E[0] = v : v.isMatrix3 ? (E[0] = v.elements[0], E[1] = v.elements[1], E[2] = v.elements[2], E[3] = 0, E[4] = v.elements[3], E[5] = v.elements[4], E[6] = v.elements[5], E[7] = 0, E[8] = v.elements[6], E[9] = v.elements[7], E[10] = v.elements[8], E[11] = 0) : ArrayBuffer.isView(v) ? E.set(new v.constructor(v.buffer, v.byteOffset, E.length)) : v.toArray(E, T2);
    }
    function _(v, E, T2, R2) {
      let x3 = v.value, A3 = E + "_" + T2;
      if (R2[A3] === void 0) return typeof x3 == "number" || typeof x3 == "boolean" ? R2[A3] = x3 : ArrayBuffer.isView(x3) ? R2[A3] = x3.slice() : R2[A3] = x3.clone(), true;
      {
        let I2 = R2[A3];
        if (typeof x3 == "number" || typeof x3 == "boolean") {
          if (I2 !== x3) return R2[A3] = x3, true;
        } else {
          if (ArrayBuffer.isView(x3)) return true;
          if (I2.equals(x3) === false) return I2.copy(x3), true;
        }
      }
      return false;
    }
    function g(v) {
      let E = v.uniforms, T2 = 0, R2 = 16;
      for (let A3 = 0, I2 = E.length; A3 < I2; A3++) {
        let P3 = Array.isArray(E[A3]) ? E[A3] : [E[A3]];
        for (let N2 = 0, H2 = P3.length; N2 < H2; N2++) {
          let X = P3[N2], O = Array.isArray(X.value) ? X.value : [X.value];
          for (let W = 0, G = O.length; W < G; W++) {
            let K2 = O[W], it = m2(K2), ut = T2 % R2, lt = ut % it.boundary, bt = ut + lt;
            T2 += lt, bt !== 0 && R2 - bt < it.storage && (T2 += R2 - bt), X.__data = new Float32Array(it.storage / Float32Array.BYTES_PER_ELEMENT), X.__offset = T2, T2 += it.storage;
          }
        }
      }
      let x3 = T2 % R2;
      return x3 > 0 && (T2 += R2 - x3), v.__size = T2, v.__cache = {}, this;
    }
    function m2(v) {
      let E = { boundary: 0, storage: 0 };
      return typeof v == "number" || typeof v == "boolean" ? (E.boundary = 4, E.storage = 4) : v.isVector2 ? (E.boundary = 8, E.storage = 8) : v.isVector3 || v.isColor ? (E.boundary = 16, E.storage = 12) : v.isVector4 ? (E.boundary = 16, E.storage = 16) : v.isMatrix3 ? (E.boundary = 48, E.storage = 48) : v.isMatrix4 ? (E.boundary = 64, E.storage = 64) : v.isTexture ? ot("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(v) ? (E.boundary = 16, E.storage = v.byteLength) : ot("WebGLRenderer: Unsupported uniform value type.", v), E;
    }
    function M2(v) {
      let E = v.target;
      E.removeEventListener("dispose", M2);
      let T2 = a.indexOf(E.__bindingPointIndex);
      a.splice(T2, 1), s30.deleteBuffer(i2[E.id]), delete i2[E.id], delete r2[E.id];
    }
    function S2() {
      for (let v in i2) s30.deleteBuffer(i2[v]);
      a = [], i2 = {}, r2 = {};
    }
    return { bind: l2, update: c3, dispose: S2 };
  }
  var zM = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
  var Vn = null;
  function VM() {
    return Vn === null && (Vn = new tn(zM, 16, 16, bi, zn), Vn.name = "DFG_LUT", Vn.minFilter = _e, Vn.magFilter = _e, Vn.wrapS = je, Vn.wrapT = je, Vn.generateMipmaps = false, Vn.needsUpdate = true), Vn;
  }
  var $p = class {
    constructor(t = {}) {
      let { canvas: e = fp(), context: n2 = null, depth: i2 = true, stencil: r2 = false, alpha: a = false, antialias: o3 = false, premultipliedAlpha: l2 = true, preserveDrawingBuffer: c3 = false, powerPreference: h3 = "default", failIfMajorPerformanceCaveat: d4 = false, reversedDepthBuffer: u3 = false, outputBufferType: f3 = sn } = t;
      this.isWebGLRenderer = true;
      let p2;
      if (n2 !== null) {
        if (typeof WebGLRenderingContext < "u" && n2 instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        p2 = n2.getContextAttributes().alpha;
      } else p2 = a;
      let _ = f3, g = /* @__PURE__ */ new Set([Dl, Ll, na]), m2 = /* @__PURE__ */ new Set([sn, mn, Ws, Xs, Rl, Il]), M2 = new Uint32Array(4), S2 = new Int32Array(4), v = new C(), E = null, T2 = null, R2 = [], x3 = [], A3 = null;
      this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = Sn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
      let I2 = this, P3 = false, N2 = null, H2 = null, X = null, O = null;
      this._outputColorSpace = Qe;
      let W = 0, G = 0, K2 = null, it = -1, ut = null, lt = new ce(), bt = new ce(), Qt = null, de = new St(0), ne = 0, J = e.width, ct = e.height, st = 1, Nt = null, kt = null, Ot = new ce(0, 0, J, ct), se = new ce(0, 0, J, ct), Wt = false, j2 = new Kn(), nt = false, et = false, xt = new Ht(), mt = new C(), Bt = new ce(), Pt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true }, Gt = false;
      function qt() {
        return K2 === null ? st : 1;
      }
      let L = n2;
      function he(b2, U2) {
        return e.getContext(b2, U2);
      }
      try {
        let b2 = { alpha: true, depth: i2, stencil: r2, antialias: o3, premultipliedAlpha: l2, preserveDrawingBuffer: c3, powerPreference: h3, failIfMajorPerformanceCaveat: d4 };
        if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${"185"}`), e.addEventListener("webglcontextlost", ve, false), e.addEventListener("webglcontextrestored", me, false), e.addEventListener("webglcontextcreationerror", bn, false), L === null) {
          let U2 = "webgl2";
          if (L = he(U2, b2), L === null) throw he(U2) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
        }
      } catch (b2) {
        throw Rt("WebGLRenderer: " + b2.message), b2;
      }
      let te, w2, y2, F2, V, q, rt, at, Y2, $, dt, Lt, gt, ft, Ft, zt, Zt, D2, ht, Z2, pt, Mt, tt;
      function It() {
        te = new Yv(L), te.init(), pt = new DM(L, te), w2 = new zv(L, te, t, pt), y2 = new PM(L, te), w2.reversedDepthBuffer && u3 && y2.buffers.depth.setReversed(true), H2 = L.createFramebuffer(), X = L.createFramebuffer(), O = L.createFramebuffer(), F2 = new $v(L), V = new _M(), q = new LM(L, te, y2, V, w2, pt, F2), rt = new qv(I2), at = new t_(L), Mt = new Ov(L, at), Y2 = new Zv(L, at, F2, Mt), $ = new Qv(L, Y2, at, Mt, F2), D2 = new Kv(L, w2, q), Ft = new Vv(V), dt = new gM(I2, rt, te, w2, Mt, Ft), Lt = new OM(I2, V), gt = new vM(), ft = new AM(te), Zt = new Fv(I2, rt, y2, $, p2, l2), zt = new IM(I2, $, w2), tt = new BM(L, F2, w2, y2), ht = new Bv(L, te, F2), Z2 = new Jv(L, te, F2), F2.programs = dt.programs, I2.capabilities = w2, I2.extensions = te, I2.properties = V, I2.renderLists = gt, I2.shadowMap = zt, I2.state = y2, I2.info = F2;
      }
      It(), _ !== sn && (A3 = new ty(_, e.width, e.height, o3, i2, r2));
      let wt = new cd(I2, L);
      this.xr = wt, this.getContext = function() {
        return L;
      }, this.getContextAttributes = function() {
        return L.getContextAttributes();
      }, this.forceContextLoss = function() {
        let b2 = te.get("WEBGL_lose_context");
        b2 && b2.loseContext();
      }, this.forceContextRestore = function() {
        let b2 = te.get("WEBGL_lose_context");
        b2 && b2.restoreContext();
      }, this.getPixelRatio = function() {
        return st;
      }, this.setPixelRatio = function(b2) {
        b2 !== void 0 && (st = b2, this.setSize(J, ct, false));
      }, this.getSize = function(b2) {
        return b2.set(J, ct);
      }, this.setSize = function(b2, U2, k2 = true) {
        if (wt.isPresenting) {
          ot("WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        J = b2, ct = U2, e.width = Math.floor(b2 * st), e.height = Math.floor(U2 * st), k2 === true && (e.style.width = b2 + "px", e.style.height = U2 + "px"), A3 !== null && A3.setSize(e.width, e.height), this.setViewport(0, 0, b2, U2);
      }, this.getDrawingBufferSize = function(b2) {
        return b2.set(J * st, ct * st).floor();
      }, this.setDrawingBufferSize = function(b2, U2, k2) {
        J = b2, ct = U2, st = k2, e.width = Math.floor(b2 * k2), e.height = Math.floor(U2 * k2), this.setViewport(0, 0, b2, U2);
      }, this.setEffects = function(b2) {
        if (_ === sn) {
          Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
          return;
        }
        if (b2) {
          for (let U2 = 0; U2 < b2.length; U2++) if (b2[U2].isOutputPass === true) {
            ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
        }
        A3.setEffects(b2 || []);
      }, this.getCurrentViewport = function(b2) {
        return b2.copy(lt);
      }, this.getViewport = function(b2) {
        return b2.copy(Ot);
      }, this.setViewport = function(b2, U2, k2, B) {
        b2.isVector4 ? Ot.set(b2.x, b2.y, b2.z, b2.w) : Ot.set(b2, U2, k2, B), y2.viewport(lt.copy(Ot).multiplyScalar(st).round());
      }, this.getScissor = function(b2) {
        return b2.copy(se);
      }, this.setScissor = function(b2, U2, k2, B) {
        b2.isVector4 ? se.set(b2.x, b2.y, b2.z, b2.w) : se.set(b2, U2, k2, B), y2.scissor(bt.copy(se).multiplyScalar(st).round());
      }, this.getScissorTest = function() {
        return Wt;
      }, this.setScissorTest = function(b2) {
        y2.setScissorTest(Wt = b2);
      }, this.setOpaqueSort = function(b2) {
        Nt = b2;
      }, this.setTransparentSort = function(b2) {
        kt = b2;
      }, this.getClearColor = function(b2) {
        return b2.copy(Zt.getClearColor());
      }, this.setClearColor = function() {
        Zt.setClearColor(...arguments);
      }, this.getClearAlpha = function() {
        return Zt.getClearAlpha();
      }, this.setClearAlpha = function() {
        Zt.setClearAlpha(...arguments);
      }, this.clear = function(b2 = true, U2 = true, k2 = true) {
        let B = 0;
        if (b2) {
          let z2 = false;
          if (K2 !== null) {
            let yt = K2.texture.format;
            z2 = g.has(yt);
          }
          if (z2) {
            let yt = K2.texture.type, Et = m2.has(yt), vt = Zt.getClearColor(), Ct = Zt.getClearAlpha(), Dt = vt.r, Jt = vt.g, jt = vt.b;
            Et ? (M2[0] = Dt, M2[1] = Jt, M2[2] = jt, M2[3] = Ct, L.clearBufferuiv(L.COLOR, 0, M2)) : (S2[0] = Dt, S2[1] = Jt, S2[2] = jt, S2[3] = Ct, L.clearBufferiv(L.COLOR, 0, S2));
          } else B |= L.COLOR_BUFFER_BIT;
        }
        U2 && (B |= L.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(true)), k2 && (B |= L.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), B !== 0 && L.clear(B);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.setNodesHandler = function(b2) {
        b2.setRenderer(this), N2 = b2;
      }, this.dispose = function() {
        e.removeEventListener("webglcontextlost", ve, false), e.removeEventListener("webglcontextrestored", me, false), e.removeEventListener("webglcontextcreationerror", bn, false), Zt.dispose(), gt.dispose(), ft.dispose(), V.dispose(), rt.dispose(), $.dispose(), Mt.dispose(), tt.dispose(), dt.dispose(), wt.dispose(), wt.removeEventListener("sessionstart", ud), wt.removeEventListener("sessionend", dd), Ai.stop();
      };
      function ve(b2) {
        b2.preventDefault(), vr("WebGLRenderer: Context Lost."), P3 = true;
      }
      function me() {
        vr("WebGLRenderer: Context Restored."), P3 = false;
        let b2 = F2.autoReset, U2 = zt.enabled, k2 = zt.autoUpdate, B = zt.needsUpdate, z2 = zt.type;
        It(), F2.autoReset = b2, zt.enabled = U2, zt.autoUpdate = k2, zt.needsUpdate = B, zt.type = z2;
      }
      function bn(b2) {
        Rt("WebGLRenderer: A WebGL context could not be created. Reason: ", b2.statusMessage);
      }
      function Tn(b2) {
        let U2 = b2.target;
        U2.removeEventListener("dispose", Tn), sm(U2);
      }
      function sm(b2) {
        rm(b2), V.remove(b2);
      }
      function rm(b2) {
        let U2 = V.get(b2).programs;
        U2 !== void 0 && (U2.forEach(function(k2) {
          dt.releaseProgram(k2);
        }), b2.isShaderMaterial && dt.releaseShaderCache(b2));
      }
      this.renderBufferDirect = function(b2, U2, k2, B, z2, yt) {
        U2 === null && (U2 = Pt);
        let Et = z2.isMesh && z2.matrixWorld.determinantAffine() < 0, vt = lm(b2, U2, k2, B, z2);
        y2.setMaterial(B, Et);
        let Ct = k2.index, Dt = 1;
        if (B.wireframe === true) {
          if (Ct = Y2.getWireframeAttribute(k2), Ct === void 0) return;
          Dt = 2;
        }
        let Jt = k2.drawRange, jt = k2.attributes.position, Ut = Jt.start * Dt, ue = (Jt.start + Jt.count) * Dt;
        yt !== null && (Ut = Math.max(Ut, yt.start * Dt), ue = Math.min(ue, (yt.start + yt.count) * Dt)), Ct !== null ? (Ut = Math.max(Ut, 0), ue = Math.min(ue, Ct.count)) : jt != null && (Ut = Math.max(Ut, 0), ue = Math.min(ue, jt.count));
        let be = ue - Ut;
        if (be < 0 || be === 1 / 0) return;
        Mt.setup(z2, B, vt, k2, Ct);
        let ye, fe = ht;
        if (Ct !== null && (ye = at.get(Ct), fe = Z2, fe.setIndex(ye)), z2.isMesh) B.wireframe === true ? (y2.setLineWidth(B.wireframeLinewidth * qt()), fe.setMode(L.LINES)) : fe.setMode(L.TRIANGLES);
        else if (z2.isLine) {
          let Be = B.linewidth;
          Be === void 0 && (Be = 1), y2.setLineWidth(Be * qt()), z2.isLineSegments ? fe.setMode(L.LINES) : z2.isLineLoop ? fe.setMode(L.LINE_LOOP) : fe.setMode(L.LINE_STRIP);
        } else z2.isPoints ? fe.setMode(L.POINTS) : z2.isSprite && fe.setMode(L.TRIANGLES);
        if (z2.isBatchedMesh) if (te.get("WEBGL_multi_draw")) fe.renderMultiDraw(z2._multiDrawStarts, z2._multiDrawCounts, z2._multiDrawCount);
        else {
          let Be = z2._multiDrawStarts, At = z2._multiDrawCounts, rn = z2._multiDrawCount, ie = Ct ? at.get(Ct).bytesPerElement : 1, dn = V.get(B).currentProgram.getUniforms();
          for (let An = 0; An < rn; An++) dn.setValue(L, "_gl_DrawID", An), fe.render(Be[An] / ie, At[An]);
        }
        else if (z2.isInstancedMesh) fe.renderInstances(Ut, be, z2.count);
        else if (k2.isInstancedBufferGeometry) {
          let Be = k2._maxInstanceCount !== void 0 ? k2._maxInstanceCount : 1 / 0, At = Math.min(k2.instanceCount, Be);
          fe.renderInstances(Ut, be, At);
        } else fe.render(Ut, be);
      };
      function hd(b2, U2, k2) {
        b2.transparent === true && b2.side === Un && b2.forceSinglePass === false ? (b2.side = Je, b2.needsUpdate = true, fa(b2, U2, k2), b2.side = $n, b2.needsUpdate = true, fa(b2, U2, k2), b2.side = Un) : fa(b2, U2, k2);
      }
      this.compile = function(b2, U2, k2 = null) {
        k2 === null && (k2 = b2), T2 = ft.get(k2), T2.init(U2), x3.push(T2), k2.traverseVisible(function(z2) {
          z2.isLight && z2.layers.test(U2.layers) && (T2.pushLight(z2), z2.castShadow && T2.pushShadow(z2));
        }), b2 !== k2 && b2.traverseVisible(function(z2) {
          z2.isLight && z2.layers.test(U2.layers) && (T2.pushLight(z2), z2.castShadow && T2.pushShadow(z2));
        }), T2.setupLights();
        let B = /* @__PURE__ */ new Set();
        return b2.traverse(function(z2) {
          if (!(z2.isMesh || z2.isPoints || z2.isLine || z2.isSprite)) return;
          let yt = z2.material;
          if (yt) if (Array.isArray(yt)) for (let Et = 0; Et < yt.length; Et++) {
            let vt = yt[Et];
            hd(vt, k2, z2), B.add(vt);
          }
          else hd(yt, k2, z2), B.add(yt);
        }), T2 = x3.pop(), B;
      }, this.compileAsync = function(b2, U2, k2 = null) {
        let B = this.compile(b2, U2, k2);
        return new Promise((z2) => {
          function yt() {
            if (B.forEach(function(Et) {
              V.get(Et).currentProgram.isReady() && B.delete(Et);
            }), B.size === 0) {
              z2(b2);
              return;
            }
            setTimeout(yt, 10);
          }
          te.get("KHR_parallel_shader_compile") !== null ? yt() : setTimeout(yt, 10);
        });
      };
      let yc = null;
      function am(b2) {
        yc && yc(b2);
      }
      function ud() {
        Ai.stop();
      }
      function dd() {
        Ai.start();
      }
      let Ai = new Kp();
      Ai.setAnimationLoop(am), typeof self < "u" && Ai.setContext(self), this.setAnimationLoop = function(b2) {
        yc = b2, wt.setAnimationLoop(b2), b2 === null ? Ai.stop() : Ai.start();
      }, wt.addEventListener("sessionstart", ud), wt.addEventListener("sessionend", dd), this.render = function(b2, U2) {
        if (U2 !== void 0 && U2.isCamera !== true) {
          Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
          return;
        }
        if (P3 === true) return;
        N2 !== null && N2.renderStart(b2, U2);
        let k2 = wt.enabled === true && wt.isPresenting === true, B = A3 !== null && (K2 === null || k2) && A3.begin(I2, K2);
        if (b2.matrixWorldAutoUpdate === true && b2.updateMatrixWorld(), U2.parent === null && U2.matrixWorldAutoUpdate === true && U2.updateMatrixWorld(), wt.enabled === true && wt.isPresenting === true && (A3 === null || A3.isCompositing() === false) && (wt.cameraAutoUpdate === true && wt.updateCamera(U2), U2 = wt.getCamera()), b2.isScene === true && b2.onBeforeRender(I2, b2, U2, K2), T2 = ft.get(b2, x3.length), T2.init(U2), T2.state.textureUnits = q.getTextureUnits(), x3.push(T2), xt.multiplyMatrices(U2.projectionMatrix, U2.matrixWorldInverse), j2.setFromProjectionMatrix(xt, ln, U2.reversedDepth), et = this.localClippingEnabled, nt = Ft.init(this.clippingPlanes, et), E = gt.get(b2, R2.length), E.init(), R2.push(E), wt.enabled === true && wt.isPresenting === true) {
          let Et = I2.xr.getDepthSensingMesh();
          Et !== null && Mc(Et, U2, -1 / 0, I2.sortObjects);
        }
        Mc(b2, U2, 0, I2.sortObjects), E.finish(), I2.sortObjects === true && E.sort(Nt, kt, U2.reversedDepth), Gt = wt.enabled === false || wt.isPresenting === false || wt.hasDepthSensing() === false, Gt && Zt.addToRenderList(E, b2), this.info.render.frame++, this.info.autoReset === true && this.info.reset(), nt === true && Ft.beginShadows();
        let z2 = T2.state.shadowsArray;
        if (zt.render(z2, b2, U2), nt === true && Ft.endShadows(), (B && A3.hasRenderPass()) === false) {
          let Et = E.opaque, vt = E.transmissive;
          if (T2.setupLights(), U2.isArrayCamera) {
            let Ct = U2.cameras;
            if (vt.length > 0) for (let Dt = 0, Jt = Ct.length; Dt < Jt; Dt++) {
              let jt = Ct[Dt];
              pd(Et, vt, b2, jt);
            }
            Gt && Zt.render(b2);
            for (let Dt = 0, Jt = Ct.length; Dt < Jt; Dt++) {
              let jt = Ct[Dt];
              fd(E, b2, jt, jt.viewport);
            }
          } else vt.length > 0 && pd(Et, vt, b2, U2), Gt && Zt.render(b2), fd(E, b2, U2);
        }
        K2 !== null && G === 0 && (q.updateMultisampleRenderTarget(K2), q.updateRenderTargetMipmap(K2)), B && A3.end(I2), b2.isScene === true && b2.onAfterRender(I2, b2, U2), Mt.resetDefaultState(), it = -1, ut = null, x3.pop(), x3.length > 0 ? (T2 = x3[x3.length - 1], q.setTextureUnits(T2.state.textureUnits), nt === true && Ft.setGlobalState(I2.clippingPlanes, T2.state.camera)) : T2 = null, R2.pop(), R2.length > 0 ? E = R2[R2.length - 1] : E = null, N2 !== null && N2.renderEnd();
      };
      function Mc(b2, U2, k2, B) {
        if (b2.visible === false) return;
        if (b2.layers.test(U2.layers)) {
          if (b2.isGroup) k2 = b2.renderOrder;
          else if (b2.isLOD) b2.autoUpdate === true && b2.update(U2);
          else if (b2.isLightProbeGrid) T2.pushLightProbeGrid(b2);
          else if (b2.isLight) T2.pushLight(b2), b2.castShadow && T2.pushShadow(b2);
          else if (b2.isSprite) {
            if (!b2.frustumCulled || j2.intersectsSprite(b2)) {
              B && Bt.setFromMatrixPosition(b2.matrixWorld).applyMatrix4(xt);
              let Et = $.update(b2), vt = b2.material;
              vt.visible && E.push(b2, Et, vt, k2, Bt.z, null);
            }
          } else if ((b2.isMesh || b2.isLine || b2.isPoints) && (!b2.frustumCulled || j2.intersectsObject(b2))) {
            let Et = $.update(b2), vt = b2.material;
            if (B && (b2.boundingSphere !== void 0 ? (b2.boundingSphere === null && b2.computeBoundingSphere(), Bt.copy(b2.boundingSphere.center)) : (Et.boundingSphere === null && Et.computeBoundingSphere(), Bt.copy(Et.boundingSphere.center)), Bt.applyMatrix4(b2.matrixWorld).applyMatrix4(xt)), Array.isArray(vt)) {
              let Ct = Et.groups;
              for (let Dt = 0, Jt = Ct.length; Dt < Jt; Dt++) {
                let jt = Ct[Dt], Ut = vt[jt.materialIndex];
                Ut && Ut.visible && E.push(b2, Et, Ut, k2, Bt.z, jt);
              }
            } else vt.visible && E.push(b2, Et, vt, k2, Bt.z, null);
          }
        }
        let yt = b2.children;
        for (let Et = 0, vt = yt.length; Et < vt; Et++) Mc(yt[Et], U2, k2, B);
      }
      function fd(b2, U2, k2, B) {
        let { opaque: z2, transmissive: yt, transparent: Et } = b2;
        T2.setupLightsView(k2), nt === true && Ft.setGlobalState(I2.clippingPlanes, k2), B && y2.viewport(lt.copy(B)), z2.length > 0 && da(z2, U2, k2), yt.length > 0 && da(yt, U2, k2), Et.length > 0 && da(Et, U2, k2), y2.buffers.depth.setTest(true), y2.buffers.depth.setMask(true), y2.buffers.color.setMask(true), y2.setPolygonOffset(false);
      }
      function pd(b2, U2, k2, B) {
        if ((k2.isScene === true ? k2.overrideMaterial : null) !== null) return;
        if (T2.state.transmissionRenderTarget[B.id] === void 0) {
          let Ut = te.has("EXT_color_buffer_half_float") || te.has("EXT_color_buffer_float");
          T2.state.transmissionRenderTarget[B.id] = new Ze(1, 1, { generateMipmaps: true, type: Ut ? zn : sn, minFilter: Bn, samples: Math.max(4, w2.samples), stencilBuffer: r2, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: ee.workingColorSpace });
        }
        let yt = T2.state.transmissionRenderTarget[B.id], Et = B.viewport || lt;
        yt.setSize(Et.z * I2.transmissionResolutionScale, Et.w * I2.transmissionResolutionScale);
        let vt = I2.getRenderTarget(), Ct = I2.getActiveCubeFace(), Dt = I2.getActiveMipmapLevel();
        I2.setRenderTarget(yt), I2.getClearColor(de), ne = I2.getClearAlpha(), ne < 1 && I2.setClearColor(16777215, 0.5), I2.clear(), Gt && Zt.render(k2);
        let Jt = I2.toneMapping;
        I2.toneMapping = Sn;
        let jt = B.viewport;
        if (B.viewport !== void 0 && (B.viewport = void 0), T2.setupLightsView(B), nt === true && Ft.setGlobalState(I2.clippingPlanes, B), da(b2, k2, B), q.updateMultisampleRenderTarget(yt), q.updateRenderTargetMipmap(yt), te.has("WEBGL_multisampled_render_to_texture") === false) {
          let Ut = false;
          for (let ue = 0, be = U2.length; ue < be; ue++) {
            let ye = U2[ue], { object: fe, geometry: Be, material: At, group: rn } = ye;
            if (At.side === Un && fe.layers.test(B.layers)) {
              let ie = At.side;
              At.side = Je, At.needsUpdate = true, md(fe, k2, B, Be, At, rn), At.side = ie, At.needsUpdate = true, Ut = true;
            }
          }
          Ut === true && (q.updateMultisampleRenderTarget(yt), q.updateRenderTargetMipmap(yt));
        }
        I2.setRenderTarget(vt, Ct, Dt), I2.setClearColor(de, ne), jt !== void 0 && (B.viewport = jt), I2.toneMapping = Jt;
      }
      function da(b2, U2, k2) {
        let B = U2.isScene === true ? U2.overrideMaterial : null;
        for (let z2 = 0, yt = b2.length; z2 < yt; z2++) {
          let Et = b2[z2], { object: vt, geometry: Ct, group: Dt } = Et, Jt = Et.material;
          Jt.allowOverride === true && B !== null && (Jt = B), vt.layers.test(k2.layers) && md(vt, U2, k2, Ct, Jt, Dt);
        }
      }
      function md(b2, U2, k2, B, z2, yt) {
        b2.onBeforeRender(I2, U2, k2, B, z2, yt), b2.modelViewMatrix.multiplyMatrices(k2.matrixWorldInverse, b2.matrixWorld), b2.normalMatrix.getNormalMatrix(b2.modelViewMatrix), z2.onBeforeRender(I2, U2, k2, B, b2, yt), z2.transparent === true && z2.side === Un && z2.forceSinglePass === false ? (z2.side = Je, z2.needsUpdate = true, I2.renderBufferDirect(k2, U2, B, z2, b2, yt), z2.side = $n, z2.needsUpdate = true, I2.renderBufferDirect(k2, U2, B, z2, b2, yt), z2.side = Un) : I2.renderBufferDirect(k2, U2, B, z2, b2, yt), b2.onAfterRender(I2, U2, k2, B, z2, yt);
      }
      function fa(b2, U2, k2) {
        U2.isScene !== true && (U2 = Pt);
        let B = V.get(b2), z2 = T2.state.lights, yt = T2.state.shadowsArray, Et = z2.state.version, vt = dt.getParameters(b2, z2.state, yt, U2, k2, T2.state.lightProbeGridArray), Ct = dt.getProgramCacheKey(vt), Dt = B.programs;
        B.environment = b2.isMeshStandardMaterial || b2.isMeshLambertMaterial || b2.isMeshPhongMaterial ? U2.environment : null, B.fog = U2.fog;
        let Jt = b2.isMeshStandardMaterial || b2.isMeshLambertMaterial && !b2.envMap || b2.isMeshPhongMaterial && !b2.envMap;
        B.envMap = rt.get(b2.envMap || B.environment, Jt), B.envMapRotation = B.environment !== null && b2.envMap === null ? U2.environmentRotation : b2.envMapRotation, Dt === void 0 && (b2.addEventListener("dispose", Tn), Dt = /* @__PURE__ */ new Map(), B.programs = Dt);
        let jt = Dt.get(Ct);
        if (jt !== void 0) {
          if (B.currentProgram === jt && B.lightsStateVersion === Et) return _d(b2, vt), jt;
        } else vt.uniforms = dt.getUniforms(b2), N2 !== null && b2.isNodeMaterial && N2.build(b2, k2, vt), b2.onBeforeCompile(vt, I2), jt = dt.acquireProgram(vt, Ct), Dt.set(Ct, jt), B.uniforms = vt.uniforms;
        let Ut = B.uniforms;
        return (!b2.isShaderMaterial && !b2.isRawShaderMaterial || b2.clipping === true) && (Ut.clippingPlanes = Ft.uniform), _d(b2, vt), B.needsLights = hm(b2), B.lightsStateVersion = Et, B.needsLights && (Ut.ambientLightColor.value = z2.state.ambient, Ut.lightProbe.value = z2.state.probe, Ut.directionalLights.value = z2.state.directional, Ut.directionalLightShadows.value = z2.state.directionalShadow, Ut.spotLights.value = z2.state.spot, Ut.spotLightShadows.value = z2.state.spotShadow, Ut.rectAreaLights.value = z2.state.rectArea, Ut.ltc_1.value = z2.state.rectAreaLTC1, Ut.ltc_2.value = z2.state.rectAreaLTC2, Ut.pointLights.value = z2.state.point, Ut.pointLightShadows.value = z2.state.pointShadow, Ut.hemisphereLights.value = z2.state.hemi, Ut.directionalShadowMatrix.value = z2.state.directionalShadowMatrix, Ut.spotLightMatrix.value = z2.state.spotLightMatrix, Ut.spotLightMap.value = z2.state.spotLightMap, Ut.pointShadowMatrix.value = z2.state.pointShadowMatrix), B.lightProbeGrid = T2.state.lightProbeGridArray.length > 0, B.currentProgram = jt, B.uniformsList = null, jt;
      }
      function gd(b2) {
        if (b2.uniformsList === null) {
          let U2 = b2.currentProgram.getUniforms();
          b2.uniformsList = Ys.seqWithValue(U2.seq, b2.uniforms);
        }
        return b2.uniformsList;
      }
      function _d(b2, U2) {
        let k2 = V.get(b2);
        k2.outputColorSpace = U2.outputColorSpace, k2.batching = U2.batching, k2.batchingColor = U2.batchingColor, k2.instancing = U2.instancing, k2.instancingColor = U2.instancingColor, k2.instancingMorph = U2.instancingMorph, k2.skinning = U2.skinning, k2.morphTargets = U2.morphTargets, k2.morphNormals = U2.morphNormals, k2.morphColors = U2.morphColors, k2.morphTargetsCount = U2.morphTargetsCount, k2.numClippingPlanes = U2.numClippingPlanes, k2.numIntersection = U2.numClipIntersection, k2.vertexAlphas = U2.vertexAlphas, k2.vertexTangents = U2.vertexTangents, k2.toneMapping = U2.toneMapping;
      }
      function om(b2, U2) {
        if (b2.length === 0) return null;
        if (b2.length === 1) return b2[0].texture !== null ? b2[0] : null;
        v.setFromMatrixPosition(U2.matrixWorld);
        for (let k2 = 0, B = b2.length; k2 < B; k2++) {
          let z2 = b2[k2];
          if (z2.texture !== null && z2.boundingBox.containsPoint(v)) return z2;
        }
        return null;
      }
      function lm(b2, U2, k2, B, z2) {
        U2.isScene !== true && (U2 = Pt), q.resetTextureUnits();
        let yt = U2.fog, Et = B.isMeshStandardMaterial || B.isMeshLambertMaterial || B.isMeshPhongMaterial ? U2.environment : null, vt = K2 === null ? I2.outputColorSpace : K2.isXRRenderTarget === true ? K2.texture.colorSpace : ee.workingColorSpace, Ct = B.isMeshStandardMaterial || B.isMeshLambertMaterial && !B.envMap || B.isMeshPhongMaterial && !B.envMap, Dt = rt.get(B.envMap || Et, Ct), Jt = B.vertexColors === true && !!k2.attributes.color && k2.attributes.color.itemSize === 4, jt = !!k2.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Ut = !!k2.morphAttributes.position, ue = !!k2.morphAttributes.normal, be = !!k2.morphAttributes.color, ye = Sn;
        B.toneMapped && (K2 === null || K2.isXRRenderTarget === true) && (ye = I2.toneMapping);
        let fe = k2.morphAttributes.position || k2.morphAttributes.normal || k2.morphAttributes.color, Be = fe !== void 0 ? fe.length : 0, At = V.get(B), rn = T2.state.lights;
        if (nt === true && (et === true || b2 !== ut)) {
          let ge = b2 === ut && B.id === it;
          Ft.setState(B, b2, ge);
        }
        let ie = false;
        B.version === At.__version ? (At.needsLights && At.lightsStateVersion !== rn.state.version || At.outputColorSpace !== vt || z2.isBatchedMesh && At.batching === false || !z2.isBatchedMesh && At.batching === true || z2.isBatchedMesh && At.batchingColor === true && z2.colorTexture === null || z2.isBatchedMesh && At.batchingColor === false && z2.colorTexture !== null || z2.isInstancedMesh && At.instancing === false || !z2.isInstancedMesh && At.instancing === true || z2.isSkinnedMesh && At.skinning === false || !z2.isSkinnedMesh && At.skinning === true || z2.isInstancedMesh && At.instancingColor === true && z2.instanceColor === null || z2.isInstancedMesh && At.instancingColor === false && z2.instanceColor !== null || z2.isInstancedMesh && At.instancingMorph === true && z2.morphTexture === null || z2.isInstancedMesh && At.instancingMorph === false && z2.morphTexture !== null || At.envMap !== Dt || B.fog === true && At.fog !== yt || At.numClippingPlanes !== void 0 && (At.numClippingPlanes !== Ft.numPlanes || At.numIntersection !== Ft.numIntersection) || At.vertexAlphas !== Jt || At.vertexTangents !== jt || At.morphTargets !== Ut || At.morphNormals !== ue || At.morphColors !== be || At.toneMapping !== ye || At.morphTargetsCount !== Be || !!At.lightProbeGrid != T2.state.lightProbeGridArray.length > 0) && (ie = true) : (ie = true, At.__version = B.version);
        let dn = At.currentProgram;
        ie === true && (dn = fa(B, U2, z2), N2 && B.isNodeMaterial && N2.onUpdateProgram(B, dn, At));
        let An = false, ii = false, ss = false, pe = dn.getUniforms(), Te = At.uniforms;
        if (y2.useProgram(dn.program) && (An = true, ii = true, ss = true), B.id !== it && (it = B.id, ii = true), At.needsLights) {
          let ge = om(T2.state.lightProbeGridArray, z2);
          At.lightProbeGrid !== ge && (At.lightProbeGrid = ge, ii = true);
        }
        if (An || ut !== b2) {
          y2.buffers.depth.getReversed() && b2.reversedDepth !== true && (b2._reversedDepth = true, b2.updateProjectionMatrix()), pe.setValue(L, "projectionMatrix", b2.projectionMatrix), pe.setValue(L, "viewMatrix", b2.matrixWorldInverse);
          let ri = pe.map.cameraPosition;
          ri !== void 0 && ri.setValue(L, mt.setFromMatrixPosition(b2.matrixWorld)), w2.logarithmicDepthBuffer && pe.setValue(L, "logDepthBufFC", 2 / (Math.log(b2.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && pe.setValue(L, "isOrthographic", b2.isOrthographicCamera === true), ut !== b2 && (ut = b2, ii = true, ss = true);
        }
        if (At.needsLights && (rn.state.directionalShadowMap.length > 0 && pe.setValue(L, "directionalShadowMap", rn.state.directionalShadowMap, q), rn.state.spotShadowMap.length > 0 && pe.setValue(L, "spotShadowMap", rn.state.spotShadowMap, q), rn.state.pointShadowMap.length > 0 && pe.setValue(L, "pointShadowMap", rn.state.pointShadowMap, q)), z2.isSkinnedMesh) {
          pe.setOptional(L, z2, "bindMatrix"), pe.setOptional(L, z2, "bindMatrixInverse");
          let ge = z2.skeleton;
          ge && (ge.boneTexture === null && ge.computeBoneTexture(), pe.setValue(L, "boneTexture", ge.boneTexture, q));
        }
        z2.isBatchedMesh && (pe.setOptional(L, z2, "batchingTexture"), pe.setValue(L, "batchingTexture", z2._matricesTexture, q), pe.setOptional(L, z2, "batchingIdTexture"), pe.setValue(L, "batchingIdTexture", z2._indirectTexture, q), pe.setOptional(L, z2, "batchingColorTexture"), z2._colorsTexture !== null && pe.setValue(L, "batchingColorTexture", z2._colorsTexture, q));
        let si = k2.morphAttributes;
        if ((si.position !== void 0 || si.normal !== void 0 || si.color !== void 0) && D2.update(z2, k2, dn), (ii || At.receiveShadow !== z2.receiveShadow) && (At.receiveShadow = z2.receiveShadow, pe.setValue(L, "receiveShadow", z2.receiveShadow)), (B.isMeshStandardMaterial || B.isMeshLambertMaterial || B.isMeshPhongMaterial) && B.envMap === null && U2.environment !== null && (Te.envMapIntensity.value = U2.environmentIntensity), Te.dfgLUT !== void 0 && (Te.dfgLUT.value = VM()), ii) {
          if (pe.setValue(L, "toneMappingExposure", I2.toneMappingExposure), At.needsLights && cm(Te, ss), yt && B.fog === true && Lt.refreshFogUniforms(Te, yt), Lt.refreshMaterialUniforms(Te, B, st, ct, T2.state.transmissionRenderTarget[b2.id]), At.needsLights && At.lightProbeGrid) {
            let ge = At.lightProbeGrid;
            Te.probesSH.value = ge.texture, Te.probesMin.value.copy(ge.boundingBox.min), Te.probesMax.value.copy(ge.boundingBox.max), Te.probesResolution.value.copy(ge.resolution);
          }
          Ys.upload(L, gd(At), Te, q);
        }
        if (B.isShaderMaterial && B.uniformsNeedUpdate === true && (Ys.upload(L, gd(At), Te, q), B.uniformsNeedUpdate = false), B.isSpriteMaterial && pe.setValue(L, "center", z2.center), pe.setValue(L, "modelViewMatrix", z2.modelViewMatrix), pe.setValue(L, "normalMatrix", z2.normalMatrix), pe.setValue(L, "modelMatrix", z2.matrixWorld), B.uniformsGroups !== void 0) {
          let ge = B.uniformsGroups;
          for (let ri = 0, rs = ge.length; ri < rs; ri++) {
            let xd = ge[ri];
            tt.update(xd, dn), tt.bind(xd, dn);
          }
        }
        return dn;
      }
      function cm(b2, U2) {
        b2.ambientLightColor.needsUpdate = U2, b2.lightProbe.needsUpdate = U2, b2.directionalLights.needsUpdate = U2, b2.directionalLightShadows.needsUpdate = U2, b2.pointLights.needsUpdate = U2, b2.pointLightShadows.needsUpdate = U2, b2.spotLights.needsUpdate = U2, b2.spotLightShadows.needsUpdate = U2, b2.rectAreaLights.needsUpdate = U2, b2.hemisphereLights.needsUpdate = U2;
      }
      function hm(b2) {
        return b2.isMeshLambertMaterial || b2.isMeshToonMaterial || b2.isMeshPhongMaterial || b2.isMeshStandardMaterial || b2.isShadowMaterial || b2.isShaderMaterial && b2.lights === true;
      }
      this.getActiveCubeFace = function() {
        return W;
      }, this.getActiveMipmapLevel = function() {
        return G;
      }, this.getRenderTarget = function() {
        return K2;
      }, this.setRenderTargetTextures = function(b2, U2, k2) {
        let B = V.get(b2);
        B.__autoAllocateDepthBuffer = b2.resolveDepthBuffer === false, B.__autoAllocateDepthBuffer === false && (B.__useRenderToTexture = false), V.get(b2.texture).__webglTexture = U2, V.get(b2.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : k2, B.__hasExternalTextures = true;
      }, this.setRenderTargetFramebuffer = function(b2, U2) {
        let k2 = V.get(b2);
        k2.__webglFramebuffer = U2, k2.__useDefaultFramebuffer = U2 === void 0;
      }, this.setRenderTarget = function(b2, U2 = 0, k2 = 0) {
        K2 = b2, W = U2, G = k2;
        let B = null, z2 = false, yt = false;
        if (b2) {
          let vt = V.get(b2);
          if (vt.__useDefaultFramebuffer !== void 0) {
            y2.bindFramebuffer(L.FRAMEBUFFER, vt.__webglFramebuffer), lt.copy(b2.viewport), bt.copy(b2.scissor), Qt = b2.scissorTest, y2.viewport(lt), y2.scissor(bt), y2.setScissorTest(Qt), it = -1;
            return;
          } else if (vt.__webglFramebuffer === void 0) q.setupRenderTarget(b2);
          else if (vt.__hasExternalTextures) q.rebindTextures(b2, V.get(b2.texture).__webglTexture, V.get(b2.depthTexture).__webglTexture);
          else if (b2.depthBuffer) {
            let Jt = b2.depthTexture;
            if (vt.__boundDepthTexture !== Jt) {
              if (Jt !== null && V.has(Jt) && (b2.width !== Jt.image.width || b2.height !== Jt.image.height)) throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
              q.setupDepthRenderbuffer(b2);
            }
          }
          let Ct = b2.texture;
          (Ct.isData3DTexture || Ct.isDataArrayTexture || Ct.isCompressedArrayTexture) && (yt = true);
          let Dt = V.get(b2).__webglFramebuffer;
          b2.isWebGLCubeRenderTarget ? (Array.isArray(Dt[U2]) ? B = Dt[U2][k2] : B = Dt[U2], z2 = true) : b2.samples > 0 && q.useMultisampledRTT(b2) === false ? B = V.get(b2).__webglMultisampledFramebuffer : Array.isArray(Dt) ? B = Dt[k2] : B = Dt, lt.copy(b2.viewport), bt.copy(b2.scissor), Qt = b2.scissorTest;
        } else lt.copy(Ot).multiplyScalar(st).floor(), bt.copy(se).multiplyScalar(st).floor(), Qt = Wt;
        if (k2 !== 0 && (B = H2), y2.bindFramebuffer(L.FRAMEBUFFER, B) && y2.drawBuffers(b2, B), y2.viewport(lt), y2.scissor(bt), y2.setScissorTest(Qt), z2) {
          let vt = V.get(b2.texture);
          L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + U2, vt.__webglTexture, k2);
        } else if (yt) {
          let vt = U2;
          for (let Ct = 0; Ct < b2.textures.length; Ct++) {
            let Dt = V.get(b2.textures[Ct]);
            L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0 + Ct, Dt.__webglTexture, k2, vt);
          }
        } else if (b2 !== null && k2 !== 0) {
          let vt = V.get(b2.texture);
          L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, vt.__webglTexture, k2);
        }
        it = -1;
      }, this.readRenderTargetPixels = function(b2, U2, k2, B, z2, yt, Et, vt = 0) {
        if (!(b2 && b2.isWebGLRenderTarget)) {
          Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          return;
        }
        let Ct = V.get(b2).__webglFramebuffer;
        if (b2.isWebGLCubeRenderTarget && Et !== void 0 && (Ct = Ct[Et]), Ct) {
          y2.bindFramebuffer(L.FRAMEBUFFER, Ct);
          try {
            let Dt = b2.textures[vt], Jt = Dt.format, jt = Dt.type;
            if (b2.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + vt), !w2.textureFormatReadable(Jt)) {
              Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
              return;
            }
            if (!w2.textureTypeReadable(jt)) {
              Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
              return;
            }
            U2 >= 0 && U2 <= b2.width - B && k2 >= 0 && k2 <= b2.height - z2 && L.readPixels(U2, k2, B, z2, pt.convert(Jt), pt.convert(jt), yt);
          } finally {
            let Dt = K2 !== null ? V.get(K2).__webglFramebuffer : null;
            y2.bindFramebuffer(L.FRAMEBUFFER, Dt);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function(b2, U2, k2, B, z2, yt, Et, vt = 0) {
        if (!(b2 && b2.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let Ct = V.get(b2).__webglFramebuffer;
        if (b2.isWebGLCubeRenderTarget && Et !== void 0 && (Ct = Ct[Et]), Ct) if (U2 >= 0 && U2 <= b2.width - B && k2 >= 0 && k2 <= b2.height - z2) {
          y2.bindFramebuffer(L.FRAMEBUFFER, Ct);
          let Dt = b2.textures[vt], Jt = Dt.format, jt = Dt.type;
          if (b2.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + vt), !w2.textureFormatReadable(Jt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!w2.textureTypeReadable(jt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          let Ut = L.createBuffer();
          L.bindBuffer(L.PIXEL_PACK_BUFFER, Ut), L.bufferData(L.PIXEL_PACK_BUFFER, yt.byteLength, L.STREAM_READ), L.readPixels(U2, k2, B, z2, pt.convert(Jt), pt.convert(jt), 0);
          let ue = K2 !== null ? V.get(K2).__webglFramebuffer : null;
          y2.bindFramebuffer(L.FRAMEBUFFER, ue);
          let be = L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return L.flush(), await mp(L, be, 4), L.bindBuffer(L.PIXEL_PACK_BUFFER, Ut), L.getBufferSubData(L.PIXEL_PACK_BUFFER, 0, yt), L.deleteBuffer(Ut), L.deleteSync(be), yt;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }, this.copyFramebufferToTexture = function(b2, U2 = null, k2 = 0) {
        let B = Math.pow(2, -k2), z2 = Math.floor(b2.image.width * B), yt = Math.floor(b2.image.height * B), Et = U2 !== null ? U2.x : 0, vt = U2 !== null ? U2.y : 0;
        q.setTexture2D(b2, 0), L.copyTexSubImage2D(L.TEXTURE_2D, k2, 0, 0, Et, vt, z2, yt), y2.unbindTexture();
      }, this.copyTextureToTexture = function(b2, U2, k2 = null, B = null, z2 = 0, yt = 0) {
        let Et, vt, Ct, Dt, Jt, jt, Ut, ue, be, ye = b2.isCompressedTexture ? b2.mipmaps[yt] : b2.image;
        if (k2 !== null) Et = k2.max.x - k2.min.x, vt = k2.max.y - k2.min.y, Ct = k2.isBox3 ? k2.max.z - k2.min.z : 1, Dt = k2.min.x, Jt = k2.min.y, jt = k2.isBox3 ? k2.min.z : 0;
        else {
          let Te = Math.pow(2, -z2);
          Et = Math.floor(ye.width * Te), vt = Math.floor(ye.height * Te), b2.isDataArrayTexture ? Ct = ye.depth : b2.isData3DTexture ? Ct = Math.floor(ye.depth * Te) : Ct = 1, Dt = 0, Jt = 0, jt = 0;
        }
        B !== null ? (Ut = B.x, ue = B.y, be = B.z) : (Ut = 0, ue = 0, be = 0);
        let fe = pt.convert(U2.format), Be = pt.convert(U2.type), At;
        U2.isData3DTexture ? (q.setTexture3D(U2, 0), At = L.TEXTURE_3D) : U2.isDataArrayTexture || U2.isCompressedArrayTexture ? (q.setTexture2DArray(U2, 0), At = L.TEXTURE_2D_ARRAY) : (q.setTexture2D(U2, 0), At = L.TEXTURE_2D), y2.activeTexture(L.TEXTURE0), y2.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, U2.flipY), y2.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U2.premultiplyAlpha), y2.pixelStorei(L.UNPACK_ALIGNMENT, U2.unpackAlignment);
        let rn = y2.getParameter(L.UNPACK_ROW_LENGTH), ie = y2.getParameter(L.UNPACK_IMAGE_HEIGHT), dn = y2.getParameter(L.UNPACK_SKIP_PIXELS), An = y2.getParameter(L.UNPACK_SKIP_ROWS), ii = y2.getParameter(L.UNPACK_SKIP_IMAGES);
        y2.pixelStorei(L.UNPACK_ROW_LENGTH, ye.width), y2.pixelStorei(L.UNPACK_IMAGE_HEIGHT, ye.height), y2.pixelStorei(L.UNPACK_SKIP_PIXELS, Dt), y2.pixelStorei(L.UNPACK_SKIP_ROWS, Jt), y2.pixelStorei(L.UNPACK_SKIP_IMAGES, jt);
        let ss = b2.isDataArrayTexture || b2.isData3DTexture, pe = U2.isDataArrayTexture || U2.isData3DTexture;
        if (b2.isDepthTexture) {
          let Te = V.get(b2), si = V.get(U2), ge = V.get(Te.__renderTarget), ri = V.get(si.__renderTarget);
          y2.bindFramebuffer(L.READ_FRAMEBUFFER, ge.__webglFramebuffer), y2.bindFramebuffer(L.DRAW_FRAMEBUFFER, ri.__webglFramebuffer);
          for (let rs = 0; rs < Ct; rs++) ss && (L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, V.get(b2).__webglTexture, z2, jt + rs), L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, V.get(U2).__webglTexture, yt, be + rs)), L.blitFramebuffer(Dt, Jt, Et, vt, Ut, ue, Et, vt, L.DEPTH_BUFFER_BIT, L.NEAREST);
          y2.bindFramebuffer(L.READ_FRAMEBUFFER, null), y2.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
        } else if (z2 !== 0 || b2.isRenderTargetTexture || V.has(b2)) {
          let Te = V.get(b2), si = V.get(U2);
          y2.bindFramebuffer(L.READ_FRAMEBUFFER, X), y2.bindFramebuffer(L.DRAW_FRAMEBUFFER, O);
          for (let ge = 0; ge < Ct; ge++) ss ? L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, Te.__webglTexture, z2, jt + ge) : L.framebufferTexture2D(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, Te.__webglTexture, z2), pe ? L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, si.__webglTexture, yt, be + ge) : L.framebufferTexture2D(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, si.__webglTexture, yt), z2 !== 0 ? L.blitFramebuffer(Dt, Jt, Et, vt, Ut, ue, Et, vt, L.COLOR_BUFFER_BIT, L.NEAREST) : pe ? L.copyTexSubImage3D(At, yt, Ut, ue, be + ge, Dt, Jt, Et, vt) : L.copyTexSubImage2D(At, yt, Ut, ue, Dt, Jt, Et, vt);
          y2.bindFramebuffer(L.READ_FRAMEBUFFER, null), y2.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
        } else pe ? b2.isDataTexture || b2.isData3DTexture ? L.texSubImage3D(At, yt, Ut, ue, be, Et, vt, Ct, fe, Be, ye.data) : U2.isCompressedArrayTexture ? L.compressedTexSubImage3D(At, yt, Ut, ue, be, Et, vt, Ct, fe, ye.data) : L.texSubImage3D(At, yt, Ut, ue, be, Et, vt, Ct, fe, Be, ye) : b2.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, yt, Ut, ue, Et, vt, fe, Be, ye.data) : b2.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, yt, Ut, ue, ye.width, ye.height, fe, ye.data) : L.texSubImage2D(L.TEXTURE_2D, yt, Ut, ue, Et, vt, fe, Be, ye);
        y2.pixelStorei(L.UNPACK_ROW_LENGTH, rn), y2.pixelStorei(L.UNPACK_IMAGE_HEIGHT, ie), y2.pixelStorei(L.UNPACK_SKIP_PIXELS, dn), y2.pixelStorei(L.UNPACK_SKIP_ROWS, An), y2.pixelStorei(L.UNPACK_SKIP_IMAGES, ii), yt === 0 && U2.generateMipmaps && L.generateMipmap(At), y2.unbindTexture();
      }, this.initRenderTarget = function(b2) {
        V.get(b2).__webglFramebuffer === void 0 && q.setupRenderTarget(b2);
      }, this.initTexture = function(b2) {
        b2.isCubeTexture ? q.setTextureCube(b2, 0) : b2.isData3DTexture ? q.setTexture3D(b2, 0) : b2.isDataArrayTexture || b2.isCompressedArrayTexture ? q.setTexture2DArray(b2, 0) : q.setTexture2D(b2, 0), y2.unbindTexture();
      }, this.resetState = function() {
        W = 0, G = 0, K2 = null, y2.reset(), Mt.reset();
      }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    get coordinateSystem() {
      return ln;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(t) {
      this._outputColorSpace = t;
      let e = this.getContext();
      e.drawingBufferColorSpace = ee._getDrawingBufferColorSpace(t), e.unpackColorSpace = ee._getUnpackColorSpace();
    }
  };

  // web/original-motion/vendor/60e1c589a45d343720a4.js
  var D = { type: "change" };
  var b = { type: "start" };
  var M = { type: "end" };
  var f = new _i();
  var T = new wn();
  var j = Math.cos(70 * bg.DEG2RAD);
  var n = new C();
  var r = 2 * Math.PI;
  var o = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 };
  var y = 1e-6;
  var S = class extends Su {
    constructor(t, e = null) {
      super(t, e), this.state = o.NONE, this.target = new C(), this.cursor = new C(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: um.ROTATE, MIDDLE: um.DOLLY, RIGHT: um.PAN }, this.touches = { ONE: dm.ROTATE, TWO: dm.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new C(), this._lastQuaternion = new Fe(), this._lastTargetPosition = new C(), this._quat = new Fe().setFromUnitVectors(t.up, new C(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new su(), this._sphericalDelta = new su(), this._scale = 1, this._panOffset = new C(), this._rotateStart = new Q(), this._rotateEnd = new Q(), this._rotateDelta = new Q(), this._panStart = new Q(), this._panEnd = new Q(), this._panDelta = new Q(), this._dollyStart = new Q(), this._dollyEnd = new Q(), this._dollyDelta = new Q(), this._dollyDirection = new C(), this._mouse = new Q(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = k.bind(this), this._onPointerDown = A.bind(this), this._onPointerUp = x.bind(this), this._onContextMenu = z.bind(this), this._onMouseWheel = I.bind(this), this._onKeyDown = Y.bind(this), this._onTouchStart = U.bind(this), this._onTouchMove = Z.bind(this), this._onMouseDown = C2.bind(this), this._onMouseMove = N.bind(this), this._interceptControlDown = K.bind(this), this._interceptControlUp = H.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
    }
    set cursorStyle(t) {
      this._cursorStyle = t, t === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
    }
    get cursorStyle() {
      return this._cursorStyle;
    }
    connect(t) {
      super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
    }
    disconnect() {
      this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "";
    }
    dispose() {
      this.disconnect();
    }
    getPolarAngle() {
      return this._spherical.phi;
    }
    getAzimuthalAngle() {
      return this._spherical.theta;
    }
    getDistance() {
      return this.object.position.distanceTo(this.target);
    }
    listenToKeyEvents(t) {
      t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
    }
    stopListenToKeyEvents() {
      this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
    }
    saveState() {
      this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
    }
    reset() {
      this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(D), this.update(), this.state = o.NONE;
    }
    pan(t, e) {
      this._pan(t, e), this.update();
    }
    dollyIn(t) {
      this._dollyIn(t), this.update();
    }
    dollyOut(t) {
      this._dollyOut(t), this.update();
    }
    rotateLeft(t) {
      this._rotateLeft(t), this.update();
    }
    rotateUp(t) {
      this._rotateUp(t), this.update();
    }
    update(t = null) {
      let e = this.object.position;
      n.copy(e).sub(this.target), n.applyQuaternion(this._quat), this._spherical.setFromVector3(n), this.autoRotate && this.state === o.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
      let s30 = this.minAzimuthAngle, a = this.maxAzimuthAngle;
      isFinite(s30) && isFinite(a) && (s30 < -Math.PI ? s30 += r : s30 > Math.PI && (s30 -= r), a < -Math.PI ? a += r : a > Math.PI && (a -= r), s30 <= a ? this._spherical.theta = Math.max(s30, Math.min(a, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s30 + a) / 2 ? Math.max(s30, this._spherical.theta) : Math.min(a, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
      let h3 = false;
      if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
      else {
        let l2 = this._spherical.radius;
        this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), h3 = l2 != this._spherical.radius;
      }
      if (n.setFromSpherical(this._spherical), n.applyQuaternion(this._quatInverse), e.copy(this.target).add(n), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
        let l2 = null;
        if (this.object.isPerspectiveCamera) {
          let d4 = n.length();
          l2 = this._clampDistance(d4 * this._scale);
          let m2 = d4 - l2;
          this.object.position.addScaledVector(this._dollyDirection, m2), this.object.updateMatrixWorld(), h3 = !!m2;
        } else if (this.object.isOrthographicCamera) {
          let d4 = new C(this._mouse.x, this._mouse.y, 0);
          d4.unproject(this.object);
          let m2 = this.object.zoom;
          this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), h3 = m2 !== this.object.zoom;
          let g = new C(this._mouse.x, this._mouse.y, 0);
          g.unproject(this.object), this.object.position.sub(g).add(d4), this.object.updateMatrixWorld(), l2 = n.length();
        } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
        l2 !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(l2).add(this.object.position) : (f.origin.copy(this.object.position), f.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(f.direction)) < j ? this.object.lookAt(this.target) : (T.setFromNormalAndCoplanarPoint(this.object.up, this.target), f.intersectPlane(T, this.target))));
      } else if (this.object.isOrthographicCamera) {
        let l2 = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), l2 !== this.object.zoom && (this.object.updateProjectionMatrix(), h3 = true);
      }
      return this._scale = 1, this._performCursorZoom = false, h3 || this._lastPosition.distanceToSquared(this.object.position) > y || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > y || this._lastTargetPosition.distanceToSquared(this.target) > y ? (this.dispatchEvent(D), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
    }
    _getAutoRotationAngle(t) {
      return t !== null ? r / 60 * this.autoRotateSpeed * t : r / 60 / 60 * this.autoRotateSpeed;
    }
    _getZoomScale(t) {
      let e = Math.abs(t * 0.01);
      return Math.pow(0.95, this.zoomSpeed * e);
    }
    _rotateLeft(t) {
      this._sphericalDelta.theta -= t;
    }
    _rotateUp(t) {
      this._sphericalDelta.phi -= t;
    }
    _panLeft(t, e) {
      n.setFromMatrixColumn(e, 0), n.multiplyScalar(-t), this._panOffset.add(n);
    }
    _panUp(t, e) {
      this.screenSpacePanning === true ? n.setFromMatrixColumn(e, 1) : (n.setFromMatrixColumn(e, 0), n.crossVectors(this.object.up, n)), n.multiplyScalar(t), this._panOffset.add(n);
    }
    _pan(t, e) {
      let s30 = this.domElement;
      if (this.object.isPerspectiveCamera) {
        let a = this.object.position;
        n.copy(a).sub(this.target);
        let h3 = n.length();
        h3 *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * h3 / s30.clientHeight, this.object.matrix), this._panUp(2 * e * h3 / s30.clientHeight, this.object.matrix);
      } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / s30.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / s30.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
    }
    _dollyOut(t) {
      this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
    }
    _dollyIn(t) {
      this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
    }
    _updateZoomParameters(t, e) {
      if (!this.zoomToCursor) return;
      this._performCursorZoom = true;
      let s30 = this.domElement.getBoundingClientRect(), a = t - s30.left, h3 = e - s30.top, l2 = s30.width, d4 = s30.height;
      this._mouse.x = a / l2 * 2 - 1, this._mouse.y = -(h3 / d4) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
    }
    _clampDistance(t) {
      return Math.max(this.minDistance, Math.min(this.maxDistance, t));
    }
    _handleMouseDownRotate(t) {
      this._rotateStart.set(t.clientX, t.clientY);
    }
    _handleMouseDownDolly(t) {
      this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
    }
    _handleMouseDownPan(t) {
      this._panStart.set(t.clientX, t.clientY);
    }
    _handleMouseMoveRotate(t) {
      this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
      let e = this.domElement;
      this._rotateLeft(r * this._rotateDelta.x / e.clientHeight), this._rotateUp(r * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
    }
    _handleMouseMoveDolly(t) {
      this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
    }
    _handleMouseMovePan(t) {
      this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
    }
    _handleMouseWheel(t) {
      this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
    }
    _handleKeyDown(t) {
      let e = false;
      switch (t.code) {
        case this.keys.UP:
          t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(r * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
          break;
        case this.keys.BOTTOM:
          t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-r * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
          break;
        case this.keys.LEFT:
          t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(r * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
          break;
        case this.keys.RIGHT:
          t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-r * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
          break;
      }
      e && (t.preventDefault(), this.update());
    }
    _handleTouchStartRotate(t) {
      if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
      else {
        let e = this._getSecondPointerPosition(t), s30 = 0.5 * (t.pageX + e.x), a = 0.5 * (t.pageY + e.y);
        this._rotateStart.set(s30, a);
      }
    }
    _handleTouchStartPan(t) {
      if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
      else {
        let e = this._getSecondPointerPosition(t), s30 = 0.5 * (t.pageX + e.x), a = 0.5 * (t.pageY + e.y);
        this._panStart.set(s30, a);
      }
    }
    _handleTouchStartDolly(t) {
      let e = this._getSecondPointerPosition(t), s30 = t.pageX - e.x, a = t.pageY - e.y, h3 = Math.sqrt(s30 * s30 + a * a);
      this._dollyStart.set(0, h3);
    }
    _handleTouchStartDollyPan(t) {
      this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
    }
    _handleTouchStartDollyRotate(t) {
      this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
    }
    _handleTouchMoveRotate(t) {
      if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
      else {
        let s30 = this._getSecondPointerPosition(t), a = 0.5 * (t.pageX + s30.x), h3 = 0.5 * (t.pageY + s30.y);
        this._rotateEnd.set(a, h3);
      }
      this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
      let e = this.domElement;
      this._rotateLeft(r * this._rotateDelta.x / e.clientHeight), this._rotateUp(r * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
    }
    _handleTouchMovePan(t) {
      if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
      else {
        let e = this._getSecondPointerPosition(t), s30 = 0.5 * (t.pageX + e.x), a = 0.5 * (t.pageY + e.y);
        this._panEnd.set(s30, a);
      }
      this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
    }
    _handleTouchMoveDolly(t) {
      let e = this._getSecondPointerPosition(t), s30 = t.pageX - e.x, a = t.pageY - e.y, h3 = Math.sqrt(s30 * s30 + a * a);
      this._dollyEnd.set(0, h3), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
      let l2 = (t.pageX + e.x) * 0.5, d4 = (t.pageY + e.y) * 0.5;
      this._updateZoomParameters(l2, d4);
    }
    _handleTouchMoveDollyPan(t) {
      this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
    }
    _handleTouchMoveDollyRotate(t) {
      this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
    }
    _addPointer(t) {
      this._pointers.push(t.pointerId);
    }
    _removePointer(t) {
      delete this._pointerPositions[t.pointerId];
      for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) {
        this._pointers.splice(e, 1);
        return;
      }
    }
    _isTrackingPointer(t) {
      for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) return true;
      return false;
    }
    _trackPointer(t) {
      let e = this._pointerPositions[t.pointerId];
      e === void 0 && (e = new Q(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
    }
    _getSecondPointerPosition(t) {
      let e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
      return this._pointerPositions[e];
    }
    _customWheelEvent(t) {
      let e = t.deltaMode, s30 = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
      switch (e) {
        case 1:
          s30.deltaY *= 16;
          break;
        case 2:
          s30.deltaY *= 100;
          break;
      }
      return t.ctrlKey && !this._controlActive && (s30.deltaY *= 10), s30;
    }
  };
  function A(i2) {
    this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i2.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i2) && (this._addPointer(i2), i2.pointerType === "touch" ? this._onTouchStart(i2) : this._onMouseDown(i2), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
  }
  function k(i2) {
    this.enabled !== false && (i2.pointerType === "touch" ? this._onTouchMove(i2) : this._onMouseMove(i2));
  }
  function x(i2) {
    switch (this._removePointer(i2), this._pointers.length) {
      case 0:
        this.domElement.releasePointerCapture(i2.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(M), this.state = o.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
        break;
      case 1:
        let t = this._pointers[0], e = this._pointerPositions[t];
        this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
        break;
    }
  }
  function C2(i2) {
    let t;
    switch (i2.button) {
      case 0:
        t = this.mouseButtons.LEFT;
        break;
      case 1:
        t = this.mouseButtons.MIDDLE;
        break;
      case 2:
        t = this.mouseButtons.RIGHT;
        break;
      default:
        t = -1;
    }
    switch (t) {
      case um.DOLLY:
        if (this.enableZoom === false) return;
        this._handleMouseDownDolly(i2), this.state = o.DOLLY;
        break;
      case um.ROTATE:
        if (i2.ctrlKey || i2.metaKey || i2.shiftKey) {
          if (this.enablePan === false) return;
          this._handleMouseDownPan(i2), this.state = o.PAN;
        } else {
          if (this.enableRotate === false) return;
          this._handleMouseDownRotate(i2), this.state = o.ROTATE;
        }
        break;
      case um.PAN:
        if (i2.ctrlKey || i2.metaKey || i2.shiftKey) {
          if (this.enableRotate === false) return;
          this._handleMouseDownRotate(i2), this.state = o.ROTATE;
        } else {
          if (this.enablePan === false) return;
          this._handleMouseDownPan(i2), this.state = o.PAN;
        }
        break;
      default:
        this.state = o.NONE;
    }
    this.state !== o.NONE && this.dispatchEvent(b);
  }
  function N(i2) {
    switch (this.state) {
      case o.ROTATE:
        if (this.enableRotate === false) return;
        this._handleMouseMoveRotate(i2);
        break;
      case o.DOLLY:
        if (this.enableZoom === false) return;
        this._handleMouseMoveDolly(i2);
        break;
      case o.PAN:
        if (this.enablePan === false) return;
        this._handleMouseMovePan(i2);
        break;
    }
  }
  function I(i2) {
    this.enabled === false || this.enableZoom === false || this.state !== o.NONE || (i2.preventDefault(), this.dispatchEvent(b), this._handleMouseWheel(this._customWheelEvent(i2)), this.dispatchEvent(M));
  }
  function Y(i2) {
    this.enabled !== false && this._handleKeyDown(i2);
  }
  function U(i2) {
    switch (this._trackPointer(i2), this._pointers.length) {
      case 1:
        switch (this.touches.ONE) {
          case dm.ROTATE:
            if (this.enableRotate === false) return;
            this._handleTouchStartRotate(i2), this.state = o.TOUCH_ROTATE;
            break;
          case dm.PAN:
            if (this.enablePan === false) return;
            this._handleTouchStartPan(i2), this.state = o.TOUCH_PAN;
            break;
          default:
            this.state = o.NONE;
        }
        break;
      case 2:
        switch (this.touches.TWO) {
          case dm.DOLLY_PAN:
            if (this.enableZoom === false && this.enablePan === false) return;
            this._handleTouchStartDollyPan(i2), this.state = o.TOUCH_DOLLY_PAN;
            break;
          case dm.DOLLY_ROTATE:
            if (this.enableZoom === false && this.enableRotate === false) return;
            this._handleTouchStartDollyRotate(i2), this.state = o.TOUCH_DOLLY_ROTATE;
            break;
          default:
            this.state = o.NONE;
        }
        break;
      default:
        this.state = o.NONE;
    }
    this.state !== o.NONE && this.dispatchEvent(b);
  }
  function Z(i2) {
    switch (this._trackPointer(i2), this.state) {
      case o.TOUCH_ROTATE:
        if (this.enableRotate === false) return;
        this._handleTouchMoveRotate(i2), this.update();
        break;
      case o.TOUCH_PAN:
        if (this.enablePan === false) return;
        this._handleTouchMovePan(i2), this.update();
        break;
      case o.TOUCH_DOLLY_PAN:
        if (this.enableZoom === false && this.enablePan === false) return;
        this._handleTouchMoveDollyPan(i2), this.update();
        break;
      case o.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === false && this.enableRotate === false) return;
        this._handleTouchMoveDollyRotate(i2), this.update();
        break;
      default:
        this.state = o.NONE;
    }
  }
  function z(i2) {
    this.enabled !== false && i2.preventDefault();
  }
  function K(i2) {
    i2.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
  }
  function H(i2) {
    i2.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
  }

  // web/original-motion/vendor/c503477c70af3333192d.js
  var m = { name: "CopyShader", uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}` };
  var h = class {
    constructor() {
      this.isPass = true, this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
    }
    setSize() {
    }
    render() {
      console.error("THREE.Pass: .render() must be implemented in derived pass.");
    }
    dispose() {
    }
  };
  var R = new es(-1, 1, 1, -1, 0, 1);
  var d = class extends Yt {
    constructor() {
      super(), this.setAttribute("position", new Tt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Tt([0, 2, 0, 0, 2, 0], 2));
    }
  };
  var P = new d();
  var l = class {
    constructor(e) {
      this._mesh = new Se(P, e);
    }
    dispose() {
      this._mesh.geometry.dispose();
    }
    render(e) {
      e.render(this._mesh, R);
    }
    get material() {
      return this._mesh.material;
    }
    set material(e) {
      this._mesh.material = e;
    }
  };
  var u = class extends h {
    constructor(e, t = "tDiffuse") {
      super(), this.textureID = t, this.uniforms = null, this.material = null, e instanceof en ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = bp.clone(e.uniforms), this.material = new en({ name: e.name !== void 0 ? e.name : "unspecified", defines: Object.assign({}, e.defines), uniforms: this.uniforms, vertexShader: e.vertexShader, fragmentShader: e.fragmentShader })), this._fsQuad = new l(this.material);
    }
    render(e, t, r2) {
      this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = r2.texture), this._fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
    }
    dispose() {
      this.material.dispose(), this._fsQuad.dispose();
    }
  };
  var o2 = class extends h {
    constructor(e, t) {
      super(), this.scene = e, this.camera = t, this.clear = true, this.needsSwap = false, this.inverse = false;
    }
    render(e, t, r2) {
      let i2 = e.getContext(), s30 = e.state;
      s30.buffers.color.setMask(false), s30.buffers.depth.setMask(false), s30.buffers.color.setLocked(true), s30.buffers.depth.setLocked(true);
      let f3, n2;
      this.inverse ? (f3 = 0, n2 = 1) : (f3 = 1, n2 = 0), s30.buffers.stencil.setTest(true), s30.buffers.stencil.setOp(i2.REPLACE, i2.REPLACE, i2.REPLACE), s30.buffers.stencil.setFunc(i2.ALWAYS, f3, 4294967295), s30.buffers.stencil.setClear(n2), s30.buffers.stencil.setLocked(true), e.setRenderTarget(r2), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s30.buffers.color.setLocked(false), s30.buffers.depth.setLocked(false), s30.buffers.color.setMask(true), s30.buffers.depth.setMask(true), s30.buffers.stencil.setLocked(false), s30.buffers.stencil.setFunc(i2.EQUAL, 1, 4294967295), s30.buffers.stencil.setOp(i2.KEEP, i2.KEEP, i2.KEEP), s30.buffers.stencil.setLocked(true);
    }
  };
  var c = class extends h {
    constructor() {
      super(), this.needsSwap = false;
    }
    render(e) {
      e.state.buffers.stencil.setLocked(false), e.state.buffers.stencil.setTest(false);
    }
  };
  var w = class {
    constructor(e, t) {
      if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
        let r2 = e.getSize(new Q());
        this._width = r2.width, this._height = r2.height, t = new Ze(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: zn }), t.texture.name = "EffectComposer.rt1";
      } else this._width = t.width, this._height = t.height;
      this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = true, this.passes = [], this.copyPass = new u(m), this.copyPass.material.blending = Fn, this.timer = new Sl();
    }
    swapBuffers() {
      let e = this.readBuffer;
      this.readBuffer = this.writeBuffer, this.writeBuffer = e;
    }
    addPass(e) {
      this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    insertPass(e, t) {
      this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    removePass(e) {
      let t = this.passes.indexOf(e);
      t !== -1 && this.passes.splice(t, 1);
    }
    isLastEnabledPass(e) {
      for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return false;
      return true;
    }
    render(e) {
      this.timer.update(), e === void 0 && (e = this.timer.getDelta());
      let t = this.renderer.getRenderTarget(), r2 = false;
      for (let i2 = 0, s30 = this.passes.length; i2 < s30; i2++) {
        let f3 = this.passes[i2];
        if (f3.enabled !== false) {
          if (f3.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i2), f3.render(this.renderer, this.writeBuffer, this.readBuffer, e, r2), f3.needsSwap) {
            if (r2) {
              let n2 = this.renderer.getContext(), p2 = this.renderer.state.buffers.stencil;
              p2.setFunc(n2.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), p2.setFunc(n2.EQUAL, 1, 4294967295);
            }
            this.swapBuffers();
          }
          o2 !== void 0 && (f3 instanceof o2 ? r2 = true : f3 instanceof c && (r2 = false));
        }
      }
      this.renderer.setRenderTarget(t);
    }
    reset(e) {
      if (e === void 0) {
        let t = this.renderer.getSize(new Q());
        this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
      }
      this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
    }
    setSize(e, t) {
      this._width = e, this._height = t;
      let r2 = this._width * this._pixelRatio, i2 = this._height * this._pixelRatio;
      this.renderTarget1.setSize(r2, i2), this.renderTarget2.setSize(r2, i2);
      for (let s30 = 0; s30 < this.passes.length; s30++) this.passes[s30].setSize(r2, i2);
    }
    setPixelRatio(e) {
      this._pixelRatio = e, this.setSize(this._width, this._height);
    }
    dispose() {
      this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
    }
  };

  // web/original-motion/vendor/bdbe4f8ec954f04c70bf.js
  var s29 = class {
    constructor() {
      this.isPass = true, this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
    }
    setSize() {
    }
    render() {
      console.error("THREE.Pass: .render() must be implemented in derived pass.");
    }
    dispose() {
    }
  };
  var d2 = new es(-1, 1, 1, -1, 0, 1);
  var i = class extends Yt {
    constructor() {
      super(), this.setAttribute("position", new Tt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Tt([0, 2, 0, 0, 2, 0], 2));
    }
  };
  var A2 = new i();
  var u2 = class extends s29 {
    constructor(e, o3, l2 = null, a = null, t = null) {
      super(), this.scene = e, this.camera = o3, this.overrideMaterial = l2, this.clearColor = a, this.clearAlpha = t, this.clear = true, this.clearDepth = false, this.needsSwap = false, this.isRenderPass = true, this._oldClearColor = new St();
    }
    render(e, o3, l2) {
      let a = e.autoClear;
      e.autoClear = false;
      let t, h3;
      this.overrideMaterial !== null && (h3 = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (t = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == true && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : l2), this.clear === true && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(t), this.overrideMaterial !== null && (this.scene.overrideMaterial = h3), e.autoClear = a;
    }
  };

  // web/original-motion/vendor/69fb78b443cb82f6969c.js
  var f2 = class {
    constructor() {
      this.isPass = true, this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
    }
    setSize() {
    }
    render() {
      console.error("THREE.Pass: .render() must be implemented in derived pass.");
    }
    dispose() {
    }
  };
  var F = new es(-1, 1, 1, -1, 0, 1);
  var x2 = class extends Yt {
    constructor() {
      super(), this.setAttribute("position", new Tt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Tt([0, 2, 0, 0, 2, 0], 2));
    }
  };
  var P2 = new x2();
  var c2 = class {
    constructor(e) {
      this._mesh = new Se(P2, e);
    }
    dispose() {
      this._mesh.geometry.dispose();
    }
    render(e) {
      e.render(this._mesh, F);
    }
    get material() {
      return this._mesh.material;
    }
    set material(e) {
      this._mesh.material = e;
    }
  };
  var d3 = { name: "CopyShader", uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}` };
  var C3 = { name: "LuminosityHighPassShader", uniforms: { tDiffuse: { value: null }, luminosityThreshold: { value: 1 }, smoothWidth: { value: 1 }, defaultColor: { value: new St(0) }, defaultOpacity: { value: 0 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}` };
  var p = class h2 extends f2 {
    constructor(e, l2 = 1, r2, i2) {
      super(), this.strength = l2, this.radius = r2, this.threshold = i2, this.resolution = e !== void 0 ? new Q(e.x, e.y) : new Q(256, 256), this.clearColor = new St(0, 0, 0), this.needsSwap = false, this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
      let t = Math.round(this.resolution.x / 2), s30 = Math.round(this.resolution.y / 2);
      this.renderTargetBright = new Ze(t, s30, { type: zn }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = false;
      for (let a = 0; a < this.nMips; a++) {
        let g = new Ze(t, s30, { type: zn });
        g.texture.name = "UnrealBloomPass.h" + a, g.texture.generateMipmaps = false, this.renderTargetsHorizontal.push(g);
        let b2 = new Ze(t, s30, { type: zn });
        b2.texture.name = "UnrealBloomPass.v" + a, b2.texture.generateMipmaps = false, this.renderTargetsVertical.push(b2), t = Math.round(t / 2), s30 = Math.round(s30 / 2);
      }
      let u3 = C3;
      this.highPassUniforms = bp.clone(u3.uniforms), this.highPassUniforms.luminosityThreshold.value = i2, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new en({ uniforms: this.highPassUniforms, vertexShader: u3.vertexShader, fragmentShader: u3.fragmentShader }), this.separableBlurMaterials = [];
      let o3 = [6, 10, 14, 18, 22];
      t = Math.round(this.resolution.x / 2), s30 = Math.round(this.resolution.y / 2);
      for (let a = 0; a < this.nMips; a++) this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o3[a])), this.separableBlurMaterials[a].uniforms.invSize.value = new Q(1 / t, 1 / s30), t = Math.round(t / 2), s30 = Math.round(s30 / 2);
      this.compositeMaterial = this._getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = l2, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
      let w2 = [1, 0.8, 0.6, 0.4, 0.2];
      this.compositeMaterial.uniforms.bloomFactors.value = w2, this.bloomTintColors = [new C(1, 1, 1), new C(1, 1, 1), new C(1, 1, 1), new C(1, 1, 1), new C(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, this.copyUniforms = bp.clone(d3.uniforms), this.blendMaterial = new en({ uniforms: this.copyUniforms, vertexShader: d3.vertexShader, fragmentShader: d3.fragmentShader, premultipliedAlpha: true, blending: Au, depthTest: false, depthWrite: false, transparent: true }), this._oldClearColor = new St(), this._oldClearAlpha = 1, this._basic = new Ln(), this._fsQuad = new c2(null);
    }
    dispose() {
      for (let e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
      for (let e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
      this.renderTargetBright.dispose();
      for (let e = 0; e < this.separableBlurMaterials.length; e++) this.separableBlurMaterials[e].dispose();
      this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this._basic.dispose(), this._fsQuad.dispose();
    }
    setSize(e, l2) {
      let r2 = Math.round(e / 2), i2 = Math.round(l2 / 2);
      this.renderTargetBright.setSize(r2, i2);
      for (let t = 0; t < this.nMips; t++) this.renderTargetsHorizontal[t].setSize(r2, i2), this.renderTargetsVertical[t].setSize(r2, i2), this.separableBlurMaterials[t].uniforms.invSize.value = new Q(1 / r2, 1 / i2), r2 = Math.round(r2 / 2), i2 = Math.round(i2 / 2);
    }
    render(e, l2, r2, i2, t) {
      e.getClearColor(this._oldClearColor), this._oldClearAlpha = e.getClearAlpha();
      let s30 = e.autoClear;
      e.autoClear = false, e.setClearColor(this.clearColor, 0), t && e.state.buffers.stencil.setTest(false), this.renderToScreen && (this._fsQuad.material = this._basic, this._basic.map = r2.texture, e.setRenderTarget(null), e.clear(), this._fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = r2.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this._fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this._fsQuad.render(e);
      let u3 = this.renderTargetBright;
      for (let o3 = 0; o3 < this.nMips; o3++) this._fsQuad.material = this.separableBlurMaterials[o3], this.separableBlurMaterials[o3].uniforms.colorTexture.value = u3.texture, this.separableBlurMaterials[o3].uniforms.direction.value = h2.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[o3]), e.clear(), this._fsQuad.render(e), this.separableBlurMaterials[o3].uniforms.colorTexture.value = this.renderTargetsHorizontal[o3].texture, this.separableBlurMaterials[o3].uniforms.direction.value = h2.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[o3]), e.clear(), this._fsQuad.render(e), u3 = this.renderTargetsVertical[o3];
      this._fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this._fsQuad.render(e), this._fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, t && e.state.buffers.stencil.setTest(true), this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(r2), this._fsQuad.render(e)), e.setClearColor(this._oldClearColor, this._oldClearAlpha), e.autoClear = s30;
    }
    _getSeparableBlurMaterial(e) {
      let l2 = [], r2 = e / 3;
      for (let i2 = 0; i2 < e; i2++) l2.push(0.39894 * Math.exp(-0.5 * i2 * i2 / (r2 * r2)) / r2);
      return new en({ defines: { KERNEL_RADIUS: e }, uniforms: { colorTexture: { value: null }, invSize: { value: new Q(0.5, 0.5) }, direction: { value: new Q(0.5, 0.5) }, gaussianCoefficients: { value: l2 } }, vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`, fragmentShader: `

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}` });
    }
    _getCompositeMaterial(e) {
      return new en({ defines: { NUM_MIPS: e }, uniforms: { blurTexture1: { value: null }, blurTexture2: { value: null }, blurTexture3: { value: null }, blurTexture4: { value: null }, blurTexture5: { value: null }, bloomStrength: { value: 1 }, bloomFactors: { value: null }, bloomTintColors: { value: null }, bloomRadius: { value: 0 } }, vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`, fragmentShader: `

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}` });
    }
  };
  p.BlurDirectionX = new Q(1, 0);
  p.BlurDirectionY = new Q(0, 1);

  // web/original-motion/black-hole/script.js
  var BLACK_HOLE_EVENT_HORIZON_RADIUS = 1;
  var DISK_INNER_RADIUS = BLACK_HOLE_EVENT_HORIZON_RADIUS + 0.15;
  var DISK_OUTER_RADIUS = 5.5;
  var LENSING_SPHERE_RADIUS = BLACK_HOLE_EVENT_HORIZON_RADIUS + 0.07;
  var GLOW_RADIUS_FACTOR = 1.07;
  var PHOTON_SPHERE_RADIUS = BLACK_HOLE_EVENT_HORIZON_RADIUS * 1.5;
  var scene = new xo();
  scene.fog = new go(4, 0.085);
  var camera = new Re(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    2e3
  );
  var renderer = new $p({
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = Qe;
  renderer.toneMapping = Pu;
  renderer.toneMappingExposure = 0.95;
  document.body.appendChild(renderer.domElement);
  var composer = new w(renderer);
  var renderPass = new u2(scene, camera);
  composer.addPass(renderPass);
  var bloomPass = new p(
    new Q(window.innerWidth, window.innerHeight),
    0.7,
    0.7,
    0.75
  );
  composer.addPass(bloomPass);
  var controls = new S(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.04;
  controls.rotateSpeed = 0.6;
  controls.autoRotate = false;
  controls.autoRotateSpeed = 0.12;
  controls.target.set(0, 0, 0);
  controls.minDistance = 2.5;
  controls.maxDistance = 100;
  controls.enablePan = false;
  var autoRotateEnabled = false;
  var autoRotateToggle = document.getElementById("autoRotateToggle");
  var rotateIconSVG = `<svg class="ui-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`;
  function updateAutoRotateText() {
    autoRotateToggle.innerHTML = rotateIconSVG + `<span>Auto-Rotate: ${autoRotateEnabled ? "ON" : "OFF"}</span>`;
  }
  updateAutoRotateText();
  autoRotateToggle.addEventListener("click", () => {
    autoRotateEnabled = !autoRotateEnabled;
    controls.autoRotate = autoRotateEnabled;
    updateAutoRotateText();
  });
  var triggerEffectButton = document.getElementById("triggerEffectButton");
  var effectIconSVG = `<svg class="ui-icon" viewBox="0 0 24 24" style="stroke-width:1.5;" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="8"/></svg>`;
  triggerEffectButton.innerHTML = effectIconSVG + `<span>Disk Echo</span>`;
  triggerEffectButton.addEventListener("click", () => {
    triggerDiskEcho();
  });
  var starGeometry = new Yt();
  var starCount = 45e3;
  var starPositions = new Float32Array(starCount * 3);
  var starColors = new Float32Array(starCount * 3);
  var starSizes = new Float32Array(starCount);
  var starAlphas = new Float32Array(starCount);
  var starFieldRadius = 1200;
  var baseColor = new St(16777215);
  var blueColor = new St(11197951);
  var yellowColor = new St(16777130);
  var redColor = new St(16764108);
  for (let i2 = 0; i2 < starCount; i2++) {
    const i3 = i2 * 3;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const theta = 2 * Math.PI * i2 / goldenRatio;
    const phi = Math.acos(1 - 2 * (i2 + 0.5) / starCount);
    const radius = Math.cbrt(Math.random()) * starFieldRadius;
    starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    starPositions[i3 + 2] = radius * Math.cos(phi);
    const starColor = baseColor.clone();
    const colorType = Math.random();
    let colorIntensity = Math.random() * 0.4 + 0.6;
    if (colorType < 0.5) {
      starColor.lerp(blueColor, Math.random() * 0.3);
    } else if (colorType < 0.85) {
      starColor.lerp(yellowColor, Math.random() * 0.2);
      colorIntensity *= 0.9;
    } else {
      starColor.lerp(redColor, Math.random() * 0.15);
      colorIntensity *= 0.8;
    }
    starColor.multiplyScalar(colorIntensity);
    starColors[i3] = starColor.r;
    starColors[i3 + 1] = starColor.g;
    starColors[i3 + 2] = starColor.b;
    const sizeVariation = Math.random();
    if (sizeVariation > 0.997) {
      starSizes[i2] = bg.randFloat(1.5, 2.2);
    } else if (sizeVariation > 0.98) {
      starSizes[i2] = bg.randFloat(0.8, 1.5);
    } else {
      starSizes[i2] = bg.randFloat(0.3, 0.8);
    }
    const distFactor = Math.min(1, radius / starFieldRadius);
    starSizes[i2] *= 1 - distFactor * 0.3;
    starAlphas[i2] = Math.random() * 0.5 + 0.5;
  }
  starGeometry.setAttribute("position", new oe(starPositions, 3));
  starGeometry.setAttribute("color", new oe(starColors, 3));
  starGeometry.setAttribute("size", new oe(starSizes, 1));
  starGeometry.setAttribute("alpha", new oe(starAlphas, 1));
  var starMaterial = new en({
    uniforms: {
      uTime: {
        value: 0
      },
      uDiskEchoActive: {
        value: 0
      },
      uDiskEchoIntensity: {
        value: 0
      }
    },
    vertexShader: `
        attribute float size;
        attribute float alpha;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uDiskEchoActive;
        uniform float uDiskEchoIntensity;
        
        void main() {
            vColor = color;
            vAlpha = alpha;
            
            vec3 adjustedPosition = position;
            if (uDiskEchoActive > 0.0) {
                float distFromCenter = length(position);
                float pushFactor = uDiskEchoIntensity * 0.025 * smoothstep(50.0, 300.0, distFromCenter);
                adjustedPosition = position * (1.0 + pushFactor);
            }
            
            vec4 mvPosition = modelViewMatrix * vec4(adjustedPosition, 1.0);
            gl_PointSize = size * (350.0 / -mvPosition.z) * (1.0 + uDiskEchoIntensity * 0.35);
            gl_Position = projectionMatrix * mvPosition;
        }`,
    fragmentShader: `
        uniform float uTime;
        uniform float uDiskEchoIntensity;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
            float r = length(gl_PointCoord - vec2(0.5, 0.5));
            float baseAlpha = 1.0 - smoothstep(0.45, 0.5, r);
            if (baseAlpha < 0.01) discard;
            
            float twinkleSpeed = vAlpha * 1.5 + 0.5 + uDiskEchoIntensity * 4.0;
            float twinkleRange = 0.15 + uDiskEchoIntensity * 0.4;
            float twinkle = sin(uTime * twinkleSpeed + vAlpha * 10.0) * twinkleRange + 0.9;
            
            vec3 finalColor = vColor * twinkle * (1.0 + uDiskEchoIntensity * 0.9);
            
            gl_FragColor = vec4(finalColor, baseAlpha * vAlpha * (1.0 + uDiskEchoIntensity * 0.45));
        }`,
    blending: Au,
    depthWrite: false,
    transparent: true,
    vertexColors: true
  });
  var stars = new Ro(starGeometry, starMaterial);
  scene.add(stars);
  var blackHoleGeometry = new Br(BLACK_HOLE_EVENT_HORIZON_RADIUS, 64, 32);
  var blackHoleMaterial = new Ln({
    color: 0
  });
  var blackHole = new Se(blackHoleGeometry, blackHoleMaterial);
  blackHole.renderOrder = 0;
  scene.add(blackHole);
  var themes = {
    inferno: {
      diskHot: new St(16777215),
      diskMid: new St(16755251),
      diskEdge: new St(13382426),
      diskDeep: new St(6691328),
      lensing: new St(16764006),
      glow: new St(16746547),
      photonSphere: new St(16759620),
      primaryWave: new St(16755251),
      secondaryWave: new St(16733440),
      tertiaryWave: new St(16768290)
    },
    ruby: {
      diskHot: new St(16770273),
      diskMid: new St(14684511),
      diskEdge: new St(9109504),
      diskDeep: new St(5570560),
      lensing: new St(16737095),
      glow: new St(16729344),
      photonSphere: new St(16744272),
      primaryWave: new St(16729344),
      secondaryWave: new St(14684511),
      tertiaryWave: new St(16737095)
    },
    plasma: {
      diskHot: new St(16777215),
      diskMid: new St(6750054),
      diskEdge: new St(52301),
      diskDeep: new St(26150),
      lensing: new St(10092441),
      glow: new St(6750105),
      photonSphere: new St(8978346),
      primaryWave: new St(6750105),
      secondaryWave: new St(2293674),
      tertiaryWave: new St(11206604)
    },
    void: {
      diskHot: new St(16777215),
      diskMid: new St(8900346),
      diskEdge: new St(2003199),
      diskDeep: new St(139),
      lensing: new St(11591910),
      glow: new St(11393254),
      photonSphere: new St(10079487),
      primaryWave: new St(11393254),
      secondaryWave: new St(2003199),
      tertiaryWave: new St(11591910)
    }
  };
  var currentThemeName = "inferno";
  var currentTheme = themes[currentThemeName];
  var diskGeometry = new Xo(DISK_INNER_RADIUS, DISK_OUTER_RADIUS, 128, 64);
  var diskMaterial = new en({
    uniforms: {
      uTime: {
        value: 0
      },
      uColorHot: {
        value: new St().copy(currentTheme.diskHot)
      },
      uColorMid: {
        value: new St().copy(currentTheme.diskMid)
      },
      uColorEdge: {
        value: new St().copy(currentTheme.diskEdge)
      },
      uColorDeep: {
        value: new St().copy(currentTheme.diskDeep)
      },
      uCameraPosition: {
        value: camera.position
      },
      uRippleActive: {
        value: 0
      },
      uRippleStartTime: {
        value: 0
      },
      uRippleDuration: {
        value: 2.8
      },
      uPrimaryWaveColor: {
        value: new St(currentTheme.primaryWave)
      },
      uSecondaryWaveColor: {
        value: new St(currentTheme.secondaryWave)
      },
      uTertiaryWaveColor: {
        value: new St(currentTheme.tertiaryWave)
      },
      uRippleMaxRadius: {
        value: DISK_OUTER_RADIUS
      },
      uRippleThickness: {
        value: DISK_OUTER_RADIUS * 0.12
      },
      uRippleIntensity: {
        value: 0
      },
      uRippleDistortionStrength: {
        value: 0
      }
    },
    vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        varying float vRadius;
        uniform float uRippleDistortionStrength;
        uniform float uTime;
        
        void main() {
            vUv = uv;
            vPosition = position;
            vRadius = length(position.xy);
            
            vec3 adjustedPosition = position;
            if (uRippleDistortionStrength > 0.0) {
                float angle = atan(position.y, position.x);
                float distortionAmount = sin(angle * 10.0 + uTime * 7.0 + vRadius * 2.0) * 0.08 * uRippleDistortionStrength;
                adjustedPosition.z += distortionAmount;
            }
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(adjustedPosition, 1.0);
        }`,
    fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorHot;
        uniform vec3 uColorMid;
        uniform vec3 uColorEdge;
        uniform vec3 uColorDeep;
        uniform vec3 uCameraPosition;
        varying vec2 vUv;
        varying vec3 vPosition;
        varying float vRadius;

        uniform float uRippleActive;
        uniform float uRippleStartTime;
        uniform float uRippleDuration;
        uniform vec3 uPrimaryWaveColor;
        uniform vec3 uSecondaryWaveColor;
        uniform vec3 uTertiaryWaveColor;
        uniform float uRippleMaxRadius;
        uniform float uRippleThickness;
        uniform float uRippleIntensity;

        float rand(vec2 n){return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);}
        
        float noise(vec2 p){
            vec2 ip=floor(p);
            vec2 u=fract(p);
            u=u*u*(3.0-2.0*u);
            float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
            return res*res;
        }
        
        float fbm(vec2 p, float timeOffset, float freq, int octaves) {
            float total=0.0;
            float amplitude=0.65;
            float persistence=0.5;
            for(int i=0;i<octaves;i++){
                float timeScale=0.6+0.12*float(i);
                float noiseVal = noise(p*freq+vec2(timeOffset*timeScale*0.45,timeOffset*timeScale*0.3));
                total+=amplitude*noiseVal;
                vec2 warpOffset=vec2(noiseVal*0.18,-noiseVal*0.12);
                p+=warpOffset*amplitude*0.5;
                freq*=2.0;
                amplitude*=persistence;
            }
            return total;
        }
        
        float vortexPattern(float dist, float angle, float time){
            float spiralStrength=5.8;
            float timeScale=0.6;
            float angleOffset=dist*0.28;
            float spiral=sin(angle*2.3+angleOffset+dist*spiralStrength-time*timeScale);
            return smoothstep(-0.38,0.68,spiral)*0.32;
        }
        
        float calculateRippleIntensity(float dist, float rippleProgress, float currentRippleRadius, float thickness, float speedFactor) {
            if (rippleProgress <= 0.0 || rippleProgress >= 1.0) return 0.0;
            
            float distToRippleCenter = abs(dist - currentRippleRadius);
            float halfThickness = thickness * 0.5 * mix(1.0, 0.25, rippleProgress);
            
            float waveEnergyFactor = pow(1.0 - rippleProgress, 0.8 * speedFactor);
            float waveShape = smoothstep(halfThickness, halfThickness - (thickness * 0.25), distToRippleCenter);
            
            float angle = atan(vPosition.y, vPosition.x);
            float angleMod = sin(angle * 10.0 + rippleProgress * 15.0) * 0.15 + 0.9;
            
            return waveShape * waveEnergyFactor * angleMod;
        }
        
        void main(){
            float dist = vRadius;
            float innerEdge = ${DISK_INNER_RADIUS.toFixed(2)};
            float outerEdge = ${DISK_OUTER_RADIUS.toFixed(2)};
            float normalizedPos = clamp((dist - innerEdge) / (outerEdge - innerEdge), 0.0, 1.0);
            float angle = atan(vPosition.y, vPosition.x);
            float orbitalVelocity = 1.0 / sqrt(max(dist, 0.1));
            float dopplerFactor = 0.0; float beamingFactor = 1.0;
            
            if (length(uCameraPosition) > 0.01) {
                vec3 tangentialDirection = normalize(vec3(-vPosition.y, vPosition.x, 0.0));
                vec3 toCamera = normalize(uCameraPosition - vPosition);
                dopplerFactor = dot(toCamera, tangentialDirection) * orbitalVelocity * 0.3;
                beamingFactor = 1.0 + dopplerFactor * 0.4;
                beamingFactor = clamp(beamingFactor, 0.5, 2.0);
            }
            
            float rotationSpeedFactor = 4.8/(pow(dist,1.6)+1.1);
            float rotatedAngle = angle-uTime*rotationSpeedFactor*0.52;
            vec2 baseCoord = vec2(dist*1.9, rotatedAngle*3.6);
            float evolvingTime = uTime*0.17;
            
            float noiseValueFast = fbm(baseCoord, evolvingTime * 1.2, 2.2, 6);
            float noiseValueSlow = fbm(baseCoord * 0.6, evolvingTime * 0.5, 1.5, 4);
            float noiseValue = noiseValueFast * 0.7 + noiseValueSlow * 0.4;
            float vortexValue = vortexPattern(dist, angle, uTime);
            float finalPattern = noiseValue*0.8 + vortexValue*1.1;
            
            float temperature = orbitalVelocity * (1.0 + finalPattern * 0.3);
            temperature = clamp(temperature, 0.0, 2.0);
            vec3 colorInner = mix(uColorHot, uColorMid, smoothstep(0.0, 0.40, normalizedPos) * (1.0 - temperature * 0.3));
            vec3 colorOuterBlend = mix(uColorMid, uColorEdge, smoothstep(0.40, 0.80, normalizedPos));
            vec3 colorDeepBlend = mix(uColorEdge, uColorDeep, smoothstep(0.80, 1.0, normalizedPos));
            vec3 color = mix(colorInner, colorOuterBlend, smoothstep(0.40, 0.80, normalizedPos));
            color = mix(color, colorDeepBlend, smoothstep(0.80, 1.0, normalizedPos));
            
            float redshiftFactor = dopplerFactor * 0.15;
            vec3 redshift = vec3(1.0 + redshiftFactor, 1.0, 1.0 - redshiftFactor);
            color *= redshift;
            
            float patternBrightness = (finalPattern+0.5)*1.15;
            patternBrightness += pow(max(0.0,finalPattern-0.5),1.3)*0.6;
            float radialBrightness = pow(1.0-smoothstep(0.0,0.8,normalizedPos),1.9)*3.0+0.25;
            float finalBrightness = patternBrightness*radialBrightness*beamingFactor;
            
            float combinedRippleIntensity = 0.0;
            vec3 rippleColorContribution = vec3(0.0);
            
            if (uRippleActive > 0.5) {
                float rippleTime = uTime - uRippleStartTime;
                float rippleProgress = clamp(rippleTime / uRippleDuration, 0.0, 1.0);
                
                float primarySpeed = 1.0;
                float primaryRadius = mix(innerEdge, uRippleMaxRadius, rippleProgress * primarySpeed);
                float primaryIntensity = calculateRippleIntensity(dist, rippleProgress, primaryRadius, uRippleThickness, primarySpeed);
                
                float secondarySpeed = 0.75;
                float secondaryProgress = max(0.0, rippleProgress - 0.1) * secondarySpeed;
                float secondaryRadius = mix(innerEdge, uRippleMaxRadius * 0.85, secondaryProgress);
                float secondaryIntensity = calculateRippleIntensity(dist, secondaryProgress, secondaryRadius, uRippleThickness * 0.8, secondarySpeed) * 0.8;
                
                float tertiarySpeed = 0.5;
                float tertiaryProgress = max(0.0, rippleProgress - 0.2) * tertiarySpeed;
                float tertiaryRadius = mix(innerEdge, uRippleMaxRadius * 0.7, tertiaryProgress);
                float tertiaryIntensity = calculateRippleIntensity(dist, tertiaryProgress, tertiaryRadius, uRippleThickness * 0.6, tertiarySpeed) * 0.6;
                
                combinedRippleIntensity = primaryIntensity + secondaryIntensity + tertiaryIntensity;
                
                rippleColorContribution = uPrimaryWaveColor * primaryIntensity +
                                            uSecondaryWaveColor * secondaryIntensity +
                                            uTertiaryWaveColor * tertiaryIntensity;
                                            
                float sparkleNoiseVal = rand(vUv * vec2(300.0, 500.0) + uTime * vec2(20.0 + primaryIntensity * 10.0, 30.0 + primaryIntensity * 15.0) );
                float sparkleThreshold = 0.985 - primaryIntensity * 0.03;
                if (primaryIntensity > 0.02 && sparkleNoiseVal > sparkleThreshold) {
                    float sparkleBrightness = pow((sparkleNoiseVal - sparkleThreshold) / (1.0 - sparkleThreshold), 2.0);
                    rippleColorContribution += mix(uPrimaryWaveColor, vec3(1.0), 0.6) * primaryIntensity * sparkleBrightness * 10.0 * uRippleIntensity;
                }

                float afterglowPulse = sin(rippleProgress * 15.0) * 0.5 + 0.5;
                float afterglowIntensity = smoothstep(0.0, 0.3, rippleProgress) * (1.0 - rippleProgress) * 0.4 * afterglowPulse;
                combinedRippleIntensity += afterglowIntensity * smoothstep(innerEdge, innerEdge + 1.5, dist);
            }
            
            float rippleBoost = combinedRippleIntensity * 9.0 * uRippleIntensity;
            color *= (finalBrightness + rippleBoost);
            
            if (combinedRippleIntensity * uRippleIntensity > 0.01) {
                float shimmerEffect = sin(angle * 20.0 + uTime * 10.0 + dist * 5.0) * 0.15 + 0.9;
                vec3 currentRippleColors = rippleColorContribution * shimmerEffect;
                color = mix(color, currentRippleColors * 1.8, min(1.0, combinedRippleIntensity * uRippleIntensity * 1.5));
            }

            float hotBoost = smoothstep(3.0, 5.0, finalBrightness + rippleBoost) * smoothstep(0.0, 0.1, normalizedPos);
            color = mix(color, vec3(1.0, 1.0, 1.0), hotBoost * 0.45);
            
            float innerAlpha = smoothstep(0.0, 0.06, normalizedPos);
            float outerAlpha = 1.0 - smoothstep(0.85, 1.0, normalizedPos);
            float noiseAlphaFactor = clamp(finalPattern * 0.35 + 0.75, 0.65, 1.0);
            float alpha = innerAlpha * outerAlpha * noiseAlphaFactor;
            
            float rippleAlphaBoost = combinedRippleIntensity * 0.9 * uRippleIntensity;
            
            color = clamp(color, 0.0, 8.0);
            gl_FragColor = vec4(color, clamp(alpha + rippleAlphaBoost, 0.0, 1.0));
        }`,
    transparent: true,
    side: Un,
    depthWrite: false,
    blending: Au
  });
  var accretionDisk = new Se(diskGeometry, diskMaterial);
  accretionDisk.rotation.x = Math.PI / 2.6;
  accretionDisk.renderOrder = 1;
  scene.add(accretionDisk);
  var photonSphereGeometry = new Br(PHOTON_SPHERE_RADIUS, 64, 32);
  var photonSphereMaterial = new en({
    uniforms: {
      uTime: {
        value: 0
      },
      uColor: {
        value: new St().copy(currentTheme.photonSphere)
      },
      uDiskEchoActive: {
        value: 0
      },
      uDiskEchoIntensity: {
        value: 0
      }
    },
    vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * mvPosition;
        }`,
    fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uDiskEchoActive;
        uniform float uDiskEchoIntensity;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        
        void main() {
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 3.0);
            
            float pulseRate = 2.0 + uDiskEchoIntensity * 8.0;
            float pulseDepth = 0.1 + uDiskEchoIntensity * 0.5;
            float pulse = sin(uTime * pulseRate) * pulseDepth + 0.9;
            
            float alpha = fresnel * (0.3 + uDiskEchoIntensity * 0.6) * pulse;
            
            vec3 finalColor = uColor;
            if (uDiskEchoActive > 0.5) {
                float colorPulse = sin(uTime * 4.0 + dot(vNormal, vec3(1.0)) * 5.0) * 0.5 + 0.5;
                finalColor = mix(finalColor, finalColor * vec3(1.4, 1.2, 0.8), colorPulse * uDiskEchoIntensity * 1.2);
                finalColor *= (1.0 + uDiskEchoIntensity * 0.7);
            }
            
            gl_FragColor = vec4(finalColor, alpha);
        }`,
    transparent: true,
    side: $n,
    depthWrite: false,
    blending: Au
  });
  var photonSphere = new Se(photonSphereGeometry, photonSphereMaterial);
  photonSphere.renderOrder = 4;
  scene.add(photonSphere);
  var lensingGeometry = new Br(LENSING_SPHERE_RADIUS, 64, 32);
  var lensingMaterial = new en({
    uniforms: {
      uTime: {
        value: 0
      },
      uLensingColor: {
        value: new St().copy(currentTheme.lensing)
      },
      uDiskEchoActive: {
        value: 0
      },
      uDiskEchoIntensity: {
        value: 0
      }
    },
    vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * mvPosition;
        }`,
    fragmentShader: `
        uniform float uTime;
        uniform vec3 uLensingColor;
        uniform float uDiskEchoActive;
        uniform float uDiskEchoIntensity;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        
        float fresnel(vec3 d,vec3 n,float p){
            return pow(1.0-abs(dot(normalize(d),n)),p);
        }
        
        float rand(vec2 n){
            return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);
        }
        
        float noise(vec2 p){
            vec2 ip=floor(p);
            vec2 u=fract(p);
            u=u*u*(3.0-2.0*u);
            float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
            return res*res;
        }
        
        void main(){
            vec3 viewDir=normalize(vViewPosition);
            
            float fresnelPower = 5.2 - uDiskEchoIntensity * 1.5;
            float fF=fresnel(viewDir,vNormal,fresnelPower);
            
            float pulseSpeed = 0.55 + uDiskEchoIntensity * 3.0;
            float pulseDepth = 0.12 + uDiskEchoIntensity * 0.4;
            float p=(sin(uTime*pulseSpeed+length(vViewPosition)*0.12)*pulseDepth+0.95);
            
            float noiseScale = 7.0 + uDiskEchoIntensity * 5.0;
            float noiseSpeed = 0.35 + uDiskEchoIntensity * 1.2;
            vec2 nC=vNormal.xy*noiseScale+uTime*noiseSpeed;
            float nV=noise(nC)*(0.12 + uDiskEchoIntensity * 0.15);
            vec3 dN=normalize(vNormal+vec3(nV,nV*0.6,0.0));
            
            float alphaBase = 0.68 + uDiskEchoIntensity * 0.5;
            float a=fF*alphaBase*p;
            
            float edgePower = 8.5 - uDiskEchoIntensity * 3.5;
            a+=pow(1.0-abs(dot(viewDir,dN)),edgePower)*(0.38 + uDiskEchoIntensity * 0.6);
            
            vec3 finalColor = uLensingColor;
            if (uDiskEchoActive > 0.5) {
                float colorShift = dot(viewDir, vNormal) * 0.5 + 0.5;
                finalColor = mix(finalColor, finalColor * vec3(1.3, 1.1, 0.9), colorShift * uDiskEchoIntensity);
                finalColor *= (1.0 + uDiskEchoIntensity * 0.4);
            }
            
            gl_FragColor=vec4(finalColor, clamp(a,0.0,1.0)*0.90);
        }`,
    transparent: true,
    side: $n,
    depthWrite: false,
    blending: Au
  });
  var lensingEffectSphere = new Se(lensingGeometry, lensingMaterial);
  lensingEffectSphere.scale.multiplyScalar(1.62);
  lensingEffectSphere.renderOrder = 2;
  scene.add(lensingEffectSphere);
  var glowGeometry = new Br(BLACK_HOLE_EVENT_HORIZON_RADIUS, 64, 32);
  var glowMaterial = new en({
    uniforms: {
      uTime: {
        value: 0
      },
      uGlowColor: {
        value: new St().copy(currentTheme.glow)
      },
      uDiskEchoActive: {
        value: 0
      },
      uDiskEchoIntensity: {
        value: 0
      },
      uDiskEchoColor: {
        value: new St().copy(currentTheme.primaryWave)
      }
    },
    vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * mvPosition;
        }`,
    fragmentShader: `
        uniform float uTime;
        uniform vec3 uGlowColor;
        uniform float uDiskEchoActive;
        uniform float uDiskEchoIntensity;
        uniform vec3 uDiskEchoColor;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        
        float rand(vec2 n){
            return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);
        }
        
        float noise(vec2 p){
            vec2 ip=floor(p);
            vec2 u=fract(p);
            u=u*u*(3.0-2.0*u);
            float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
            return res*res;
        }
        
        void main(){
            float glowPower = 2.6 - uDiskEchoIntensity * 1.2;
            float i=pow(0.68-dot(vNormal,normalize(vViewPosition)), glowPower);
            
            float pulseSpeed = 0.7 + uDiskEchoIntensity * 7.0;
            float pulseDepth = 0.18 + uDiskEchoIntensity * 0.5;
            float p=sin(uTime*pulseSpeed+vNormal.y*1.8)*pulseDepth+0.88;
            
            float noiseScale = 9.0 + uDiskEchoIntensity * 8.0;
            float noiseSpeed = 1.8 + uDiskEchoIntensity * 6.0;
            float f=noise(vNormal.xz*noiseScale+uTime*noiseSpeed)*(0.35 + uDiskEchoIntensity * 0.25)+0.75;
            
            float fI=clamp(i*p*f,0.0,1.0)*(0.92 + uDiskEchoIntensity * 0.5);
            
            vec3 finalColor = uGlowColor;
            if (uDiskEchoActive > 0.5) {
                float flarePattern = noise(vNormal.xy * 15.0 + uTime * 3.0) * noise(vNormal.yz * 12.0 + uTime * 2.0);
                float flarePulse = sin(uTime * 8.0 + flarePattern * 10.0) * 0.5 + 0.5;
                vec3 flareColor = mix(uGlowColor, uDiskEchoColor, flarePulse);
                
                finalColor = mix(uGlowColor, flareColor * 1.8, uDiskEchoIntensity * flarePulse * 1.2);
                finalColor *= (1.0 + uDiskEchoIntensity * 0.8);
            }
            
            gl_FragColor=vec4(finalColor, fI);
        }`,
    transparent: true,
    side: Je,
    blending: Au,
    depthWrite: false
  });
  var glowEffect = new Se(glowGeometry, glowMaterial);
  glowEffect.scale.multiplyScalar(GLOW_RADIUS_FACTOR * 1.16);
  glowEffect.renderOrder = 3;
  scene.add(glowEffect);
  var lastRippleTime = -Infinity;
  var RIPPLE_COOLDOWN = 0.5;
  var diskEchoIntensity = 0;
  var diskEchoActive = false;
  var diskEchoStartTime = 0;
  var DISK_ECHO_DURATION = 2.8;
  function triggerDiskEcho() {
    const currentTime = clock.getElapsedTime();
    if (currentTime - lastRippleTime < RIPPLE_COOLDOWN) {
      return;
    }
    lastRippleTime = currentTime;
    diskEchoStartTime = currentTime;
    diskEchoActive = true;
    diskMaterial.uniforms.uRippleActive.value = 1;
    diskMaterial.uniforms.uRippleStartTime.value = currentTime;
    diskMaterial.uniforms.uPrimaryWaveColor.value.copy(themes[currentThemeName].primaryWave).multiplyScalar(3);
    diskMaterial.uniforms.uSecondaryWaveColor.value.copy(themes[currentThemeName].secondaryWave).multiplyScalar(2.7);
    diskMaterial.uniforms.uTertiaryWaveColor.value.copy(themes[currentThemeName].tertiaryWave).multiplyScalar(2.4);
    glowMaterial.uniforms.uDiskEchoColor.value.copy(themes[currentThemeName].primaryWave).multiplyScalar(1.8);
    bloomPass.strength = 1.3;
    bloomPass.threshold = 0.6;
  }
  var raycaster = new eu();
  var pointer = new Q();
  function onPointerDown(event) {
    if (event.target.closest(".ui-panel")) return;
    if (event.isPrimary === false && event.pointerType !== "touch") return;
    let x3, y2;
    if (event.touches && event.touches.length > 0) {
      x3 = event.touches[0].clientX;
      y2 = event.touches[0].clientY;
    } else {
      x3 = event.clientX;
      y2 = event.clientY;
    }
    pointer.x = x3 / window.innerWidth * 2 - 1;
    pointer.y = -(y2 / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(blackHole, false);
    if (intersects.length > 0) triggerDiskEcho();
  }
  renderer.domElement.addEventListener("pointerdown", onPointerDown, false);
  var themeButtonsContainer = document.getElementById("theme-buttons");
  themeButtonsContainer.addEventListener("click", (event) => {
    const button = event.target.closest(".theme-button");
    if (button) {
      const themeName = button.dataset.theme;
      if (themes[themeName] && themeName !== currentThemeName) {
        currentThemeName = themeName;
        currentTheme = themes[currentThemeName];
        diskMaterial.uniforms.uColorHot.value.copy(currentTheme.diskHot);
        diskMaterial.uniforms.uColorMid.value.copy(currentTheme.diskMid);
        diskMaterial.uniforms.uColorEdge.value.copy(currentTheme.diskEdge);
        diskMaterial.uniforms.uColorDeep.value.copy(currentTheme.diskDeep);
        lensingMaterial.uniforms.uLensingColor.value.copy(currentTheme.lensing);
        glowMaterial.uniforms.uGlowColor.value.copy(currentTheme.glow);
        photonSphereMaterial.uniforms.uColor.value.copy(currentTheme.photonSphere);
        diskMaterial.uniforms.uPrimaryWaveColor.value.copy(currentTheme.primaryWave).multiplyScalar(3);
        diskMaterial.uniforms.uSecondaryWaveColor.value.copy(currentTheme.secondaryWave).multiplyScalar(2.7);
        diskMaterial.uniforms.uTertiaryWaveColor.value.copy(currentTheme.tertiaryWave).multiplyScalar(2.4);
        glowMaterial.uniforms.uDiskEchoColor.value.copy(currentTheme.primaryWave).multiplyScalar(1.8);
        themeButtonsContainer.querySelectorAll(".theme-button").forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      }
    }
  });
  setTimeout(() => {
    const info = document.getElementById("info");
    if (info) info.style.opacity = "0";
  }, 7e3);
  var resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      bloomPass.resolution.set(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    }, 150);
  });
  var clock = new iu();
  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = clock.getDelta();
    diskMaterial.uniforms.uTime.value = elapsedTime;
    lensingMaterial.uniforms.uTime.value = elapsedTime;
    glowMaterial.uniforms.uTime.value = elapsedTime;
    starMaterial.uniforms.uTime.value = elapsedTime;
    photonSphereMaterial.uniforms.uTime.value = elapsedTime;
    diskMaterial.uniforms.uCameraPosition.value.copy(camera.position);
    if (diskEchoActive) {
      const timeSinceEchoStart = elapsedTime - diskEchoStartTime;
      const normalizedTime = timeSinceEchoStart / DISK_ECHO_DURATION;
      let intensityVal;
      if (normalizedTime < 0.07) {
        intensityVal = normalizedTime / 0.07;
      } else {
        const t = (normalizedTime - 0.07) / (1 - 0.07);
        intensityVal = Math.pow(1 - t, 1.8);
        intensityVal += Math.sin(t * Math.PI) * 0.35 * Math.pow(1 - t, 0.5);
      }
      diskEchoIntensity = Math.max(0, Math.min(1, intensityVal));
      const pulseFactor = Math.sin(elapsedTime * 15) * 0.15 + 1;
      diskEchoIntensity *= pulseFactor;
      diskEchoIntensity = Math.min(1.2, diskEchoIntensity);
      let distortionStrengthFactor = 0;
      if (normalizedTime < 0.4) {
        distortionStrengthFactor = Math.sin(normalizedTime / 0.4 * Math.PI);
      }
      diskMaterial.uniforms.uRippleDistortionStrength.value = distortionStrengthFactor * diskEchoIntensity * 2;
      if (timeSinceEchoStart >= DISK_ECHO_DURATION) {
        diskEchoActive = false;
        diskEchoIntensity = 0;
        diskMaterial.uniforms.uRippleActive.value = 0;
        diskMaterial.uniforms.uRippleDistortionStrength.value = 0;
        bloomPass.strength = 0.7;
        bloomPass.threshold = 0.75;
      }
      diskMaterial.uniforms.uRippleIntensity.value = diskEchoIntensity;
      starMaterial.uniforms.uDiskEchoActive.value = diskEchoActive ? 1 : 0;
      starMaterial.uniforms.uDiskEchoIntensity.value = diskEchoIntensity;
      photonSphereMaterial.uniforms.uDiskEchoActive.value = diskEchoActive ? 1 : 0;
      photonSphereMaterial.uniforms.uDiskEchoIntensity.value = diskEchoIntensity;
      lensingMaterial.uniforms.uDiskEchoActive.value = diskEchoActive ? 1 : 0;
      lensingMaterial.uniforms.uDiskEchoIntensity.value = diskEchoIntensity;
      glowMaterial.uniforms.uDiskEchoActive.value = diskEchoActive ? 1 : 0;
      glowMaterial.uniforms.uDiskEchoIntensity.value = diskEchoIntensity;
    }
    controls.update();
    stars.rotation.y += deltaTime * 4e-3;
    stars.rotation.x += deltaTime * 15e-4;
    composer.render(deltaTime);
  }
  function initialCameraAnimation() {
    const startPosition = new C(0, 15, 18);
    const endPosition = new C(0, 5, 8);
    const duration = 4500;
    const startTime = Date.now();
    camera.position.copy(startPosition);
    controls.enabled = false;
    function updateCamera() {
      const elapsed = Date.now() - startTime;
      if (elapsed < duration) {
        const progress = elapsed / duration;
        const t = 1 - Math.pow(1 - progress, 5);
        camera.position.lerpVectors(startPosition, endPosition, t);
        controls.target.set(0, 0, 0);
        requestAnimationFrame(updateCamera);
      } else {
        camera.position.copy(endPosition);
        controls.target.set(0, 0, 0);
        controls.enabled = true;
      }
    }
    updateCamera();
  }
  window.onload = () => {
    initialCameraAnimation();
    animate();
  };
})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
