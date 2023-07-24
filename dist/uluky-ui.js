import {
  openBlock as S,
  createElementBlock as z,
  createElementVNode as wt,
  warn as Mt,
  watch as $t,
  unref as c,
  inject as w,
  ref as O,
  computed as g,
  getCurrentInstance as ct,
  defineComponent as A,
  mergeProps as D,
  renderSlot as T,
  useSlots as lt,
  Text as Nt,
  createBlock as H,
  resolveDynamicComponent as C,
  withCtx as V,
  Fragment as Bt,
  normalizeClass as K,
  createCommentVNode as L,
  provide as At,
  reactive as Rt,
  toRef as X,
  createSlots as Ht,
  createTextVNode as Tt,
  toDisplayString as Vt,
} from 'vue'

process.env.NODE_ENV !== 'production' && Object.freeze({})
process.env.NODE_ENV !== 'production' && Object.freeze([])
const zt = () => {
  }, It = Object.prototype.hasOwnProperty, tt = (t, r) => It.call(t, r), J = (t) => typeof t == 'string',
  ft = (t) => t !== null && typeof t == 'object'

function Pt(t) {
  for (var r = -1, e = t == null ? 0 : t.length, n = {}; ++r < e;) {
    var a = t[r]
    n[a[0]] = a[1]
  }
  return n
}

const Ot = (t) => t === void 0, Ft = (t) => typeof t == 'number', Ct = (t) => J(t) ? !Number.isNaN(Number(t)) : !1

class Et extends Error {
  constructor(r) {
    super(r), this.name = 'ElementPlusError'
  }
}

function dt(t, r) {
  if (process.env.NODE_ENV !== 'production') {
    const e = J(t) ? new Et(`[${ t }] ${ r }`) : t
    console.warn(e)
  }
}

const jt = 'utils/dom/style'

function Gt(t, r = 'px') {
  if (!t)
    return ''
  if (Ft(t) || Ct(t))
    return `${ t }${ r }`
  if (J(t))
    return t
  dt(jt, 'binding value must be a string or number')
}

/*! Element Plus Icons Vue v2.1.0 */
var Kt = (t, r) => {
  let e = t.__vccOpts || t
  for (let [n, a] of r)
    e[n] = a
  return e
}, Lt = {
  name: 'Loading',
}, Ut = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 1024 1024',
}, Wt = /* @__PURE__ */ wt(
  'path',
  {
    fill: 'currentColor',
    d: 'M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z',
  },
  null,
  -1,
  /* HOISTED */
), qt = [
  Wt,
]

function Dt(t, r, e, n, a, o) {
  return S(), z('svg', Ut, qt)
}

var Jt = /* @__PURE__ */ Kt(Lt, [['render', Dt], ['__file', 'loading.vue']])
const ht = '__epPropKey', Z = (t) => t, Zt = (t) => ft(t) && !!t[ht], gt = (t, r) => {
    if (!ft(t) || Zt(t))
      return t
    const { values: e, required: n, default: a, type: o, validator: s } = t, f = {
      type: o,
      required: !!n,
      validator: e || s ? (v) => {
        let p = !1, m = []
        if (e && (m = Array.from(e), tt(t, 'default') && m.push(a), p || (p = m.includes(v))), s && (p || (p = s(v))), !p && m.length > 0) {
          const R = [...new Set(m)].map((d) => JSON.stringify(d)).join(', ')
          Mt(`Invalid prop: validation failed${ r ? ` for prop "${ r }"` : '' }. Expected one of [${ R }], got value ${ JSON.stringify(v) }.`)
        }
        return p
      } : void 0,
      [ht]: !0,
    }
    return tt(t, 'default') && (f.default = a), f
  }, vt = (t) => Pt(Object.entries(t).map(([r, e]) => [
    r,
    gt(e, r),
  ])), et = Z([
    String,
    Object,
    Function,
  ]), bt = (t, r) => {
    if (t.install = (e) => {
      for (const n of [t, ...Object.values(r ?? {})])
        e.component(n.name, n)
    }, r)
      for (const [e, n] of Object.entries(r))
        t[e] = n
    return t
  }, Yt = (t) => (t.install = zt, t), Qt = ['', 'default', 'small', 'large'],
  Xt = ({ from: t, replacement: r, scope: e, version: n, ref: a, type: o = 'API' }, s) => {
    $t(() => c(s), (u) => {
      u && dt(e, `[${ o }] ${ t } is about to be deprecated in version ${ n }, please use ${ r } instead.
For more detail, please visit: ${ a }
`)
    }, {
      immediate: !0,
    })
  }, rt = 'el', te = 'is-', N = (t, r, e, n, a) => {
    let o = `${ t }-${ r }`
    return e && (o += `-${ e }`), n && (o += `__${ n }`), a && (o += `--${ a }`), o
  }, ee = Symbol('namespaceContextKey'), re = (t) => {
    const r = t || w(ee, O(rt))
    return g(() => c(r) || rt)
  }, F = (t, r) => {
    const e = re(r)
    return {
      namespace: e,
      b: (i = '') => N(e.value, t, i, '', ''),
      e: (i) => i ? N(e.value, t, '', i, '') : '',
      m: (i) => i ? N(e.value, t, '', '', i) : '',
      be: (i, l) => i && l ? N(e.value, t, i, l, '') : '',
      em: (i, l) => i && l ? N(e.value, t, '', i, l) : '',
      bm: (i, l) => i && l ? N(e.value, t, i, '', l) : '',
      bem: (i, l, b) => i && l && b ? N(e.value, t, i, l, b) : '',
      is: (i, ...l) => {
        const b = l.length >= 1 ? l[0] : !0
        return i && b ? `${ te }${ i }` : ''
      },
      cssVar: (i) => {
        const l = {}
        for (const b in i)
          i[b] && (l[`--${ e.value }-${ b }`] = i[b])
        return l
      },
      cssVarName: (i) => `--${ e.value }-${ i }`,
      cssVarBlock: (i) => {
        const l = {}
        for (const b in i)
          i[b] && (l[`--${ e.value }-${ t }-${ b }`] = i[b])
        return l
      },
      cssVarBlockName: (i) => `--${ e.value }-${ t }-${ i }`,
    }
  }, pt = (t) => {
    const r = ct()
    return g(() => {
      var e, n
      return (n = (e = r == null ? void 0 : r.proxy) == null ? void 0 : e.$props) == null ? void 0 : n[t]
    })
  }, ne = gt({
    type: String,
    values: Qt,
    required: !1,
  }), ae = Symbol('size'), oe = () => {
    const t = w(ae, {})
    return g(() => c(t.size) || '')
  }, se = Symbol(), nt = O()

function ie(t, r = void 0) {
  const e = ct() ? w(se, nt) : nt
  return t ? g(() => {
    var n, a
    return (a = (n = e.value) == null ? void 0 : n[t]) != null ? a : r
  }) : e
}

var Y = (t, r) => {
  const e = t.__vccOpts || t
  for (const [n, a] of r)
    e[n] = a
  return e
}
const ue = vt({
  size: {
    type: Z([Number, String]),
  },
  color: {
    type: String,
  },
}), ce = A({
  name: 'ElIcon',
  inheritAttrs: !1,
}), le = /* @__PURE__ */ A({
  ...ce,
  props: ue,
  setup(t) {
    const r = t, e = F('icon'), n = g(() => {
      const { size: a, color: o } = r
      return !a && !o ? {} : {
        fontSize: Ot(a) ? void 0 : Gt(a),
        '--color': o,
      }
    })
    return (a, o) => (S(), z('i', D({
      class: c(e).b(),
      style: c(n),
    }, a.$attrs), [
      T(a.$slots, 'default'),
    ], 16))
  },
})
var fe = /* @__PURE__ */ Y(le, [['__file', '/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue']])
const at = bt(fe), Q = Symbol('formContextKey'), mt = Symbol('formItemContextKey'), de = (t, r = {}) => {
  const e = O(void 0), n = r.prop ? e : pt('size'), a = r.global ? e : oe(),
    o = r.form ? { size: void 0 } : w(Q, void 0), s = r.formItem ? { size: void 0 } : w(mt, void 0)
  return g(() => n.value || c(t) || (s == null ? void 0 : s.size) || (o == null ? void 0 : o.size) || a.value || '')
}, yt = (t) => {
  const r = pt('disabled'), e = w(Q, void 0)
  return g(() => r.value || c(t) || (e == null ? void 0 : e.disabled) || !1)
}, he = () => {
  const t = w(Q, void 0), r = w(mt, void 0)
  return {
    form: t,
    formItem: r,
  }
}, kt = Symbol('buttonGroupContextKey'), ge = (t, r) => {
  Xt({
    from: 'type.text',
    replacement: 'link',
    version: '3.0.0',
    scope: 'props',
    ref: 'https://element-plus.org/en-US/component/button.html#button-attributes',
  }, g(() => t.type === 'text'))
  const e = w(kt, void 0), n = ie('button'), { form: a } = he(), o = de(g(() => e == null ? void 0 : e.size)), s = yt(),
    u = O(), f = lt(), v = g(() => t.type || (e == null ? void 0 : e.type) || ''), p = g(() => {
      var _, i, l
      return (l = (i = t.autoInsertSpace) != null ? i : (_ = n.value) == null ? void 0 : _.autoInsertSpace) != null ? l : !1
    }), m = g(() => t.tag === 'button' ? {
      ariaDisabled: s.value || t.loading,
      disabled: s.value || t.loading,
      autofocus: t.autofocus,
      type: t.nativeType,
    } : {}), R = g(() => {
      var _
      const i = (_ = f.default) == null ? void 0 : _.call(f)
      if (p.value && (i == null ? void 0 : i.length) === 1) {
        const l = i[0]
        if ((l == null ? void 0 : l.type) === Nt) {
          const b = l.children
          return /^\p{Unified_Ideograph}{2}$/u.test(b.trim())
        }
      }
      return !1
    })
  return {
    _disabled: s,
    _size: o,
    _type: v,
    _ref: u,
    _props: m,
    shouldAddSpace: R,
    handleClick: (_) => {
      t.nativeType === 'reset' && (a == null || a.resetFields()), r('click', _)
    },
  }
}, ve = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
], be = ['button', 'submit', 'reset'], U = vt({
  size: ne,
  disabled: Boolean,
  type: {
    type: String,
    values: ve,
    default: '',
  },
  icon: {
    type: et,
  },
  nativeType: {
    type: String,
    values: be,
    default: 'button',
  },
  loading: Boolean,
  loadingIcon: {
    type: et,
    default: () => Jt,
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0,
  },
  tag: {
    type: Z([String, Object]),
    default: 'button',
  }
}), pe = {
  click: (t) => t instanceof MouseEvent,
};

function h(t, r) {
  me(t) && (t = '100%')
  var e = ye(t)
  return t = r === 360 ? t : Math.min(r, Math.max(0, parseFloat(t))), e && (t = parseInt(String(t * r), 10) / 100), Math.abs(t - r) < 1e-6 ? 1 : (r === 360 ? t = (t < 0 ? t % r + r : t % r) / parseFloat(String(r)) : t = t % r / parseFloat(String(r)), t)
}

function I(t) {
  return Math.min(1, Math.max(0, t))
}

function me(t) {
  return typeof t == 'string' && t.indexOf('.') !== -1 && parseFloat(t) === 1
}

function ye(t) {
  return typeof t == 'string' && t.indexOf('%') !== -1
}

function St(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
}

function P(t) {
  return t <= 1 ? ''.concat(Number(t) * 100, '%') : t
}

function B(t) {
  return t.length === 1 ? '0' + t : String(t)
}

function ke(t, r, e) {
  return {
    r: h(t, 255) * 255,
    g: h(r, 255) * 255,
    b: h(e, 255) * 255,
  }
}

function ot(t, r, e) {
  t = h(t, 255), r = h(r, 255), e = h(e, 255)
  var n = Math.max(t, r, e), a = Math.min(t, r, e), o = 0, s = 0, u = (n + a) / 2
  if (n === a)
    s = 0, o = 0
  else {
    var f = n - a
    switch (s = u > 0.5 ? f / (2 - n - a) : f / (n + a), n) {
      case t:
        o = (r - e) / f + (r < e ? 6 : 0)
        break
      case r:
        o = (e - t) / f + 2
        break
      case e:
        o = (t - r) / f + 4
        break
    }
    o /= 6
  }
  return { h: o, s, l: u }
}

function E(t, r, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + (r - t) * (6 * e) : e < 1 / 2 ? r : e < 2 / 3 ? t + (r - t) * (2 / 3 - e) * 6 : t
}

function Se(t, r, e) {
  var n, a, o
  if (t = h(t, 360), r = h(r, 100), e = h(e, 100), r === 0)
    a = e, o = e, n = e
  else {
    var s = e < 0.5 ? e * (1 + r) : e + r - e * r, u = 2 * e - s
    n = E(u, s, t + 1 / 3), a = E(u, s, t), o = E(u, s, t - 1 / 3)
  }
  return { r: n * 255, g: a * 255, b: o * 255 }
}

function st(t, r, e) {
  t = h(t, 255), r = h(r, 255), e = h(e, 255)
  var n = Math.max(t, r, e), a = Math.min(t, r, e), o = 0, s = n, u = n - a, f = n === 0 ? 0 : u / n
  if (n === a)
    o = 0
  else {
    switch (n) {
      case t:
        o = (r - e) / u + (r < e ? 6 : 0)
        break
      case r:
        o = (e - t) / u + 2
        break
      case e:
        o = (t - r) / u + 4
        break
    }
    o /= 6
  }
  return { h: o, s: f, v: s }
}

function _e(t, r, e) {
  t = h(t, 360) * 6, r = h(r, 100), e = h(e, 100)
  var n = Math.floor(t), a = t - n, o = e * (1 - r), s = e * (1 - a * r), u = e * (1 - (1 - a) * r), f = n % 6,
    v = [e, s, o, o, u, e][f], p = [u, e, e, s, o, o][f], m = [o, o, u, e, e, s][f]
  return { r: v * 255, g: p * 255, b: m * 255 }
}

function it(t, r, e, n) {
  var a = [
    B(Math.round(t).toString(16)),
    B(Math.round(r).toString(16)),
    B(Math.round(e).toString(16)),
  ]
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join('')
}

function xe(t, r, e, n, a) {
  var o = [
    B(Math.round(t).toString(16)),
    B(Math.round(r).toString(16)),
    B(Math.round(e).toString(16)),
    B(we(n)),
  ]
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join('')
}

function we(t) {
  return Math.round(parseFloat(t) * 255).toString(16)
}

function ut(t) {
  return y(t) / 255
}

function y(t) {
  return parseInt(t, 16)
}
function Me(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255,
  }
}

var W = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
}

function $e(t) {
  var r = { r: 0, g: 0, b: 0 }, e = 1, n = null, a = null, o = null, s = !1, u = !1
  return typeof t == 'string' && (t = Ae(t)), typeof t == 'object' && (x(t.r) && x(t.g) && x(t.b) ? (r = ke(t.r, t.g, t.b), s = !0, u = String(t.r).substr(-1) === '%' ? 'prgb' : 'rgb') : x(t.h) && x(t.s) && x(t.v) ? (n = P(t.s), a = P(t.v), r = _e(t.h, n, a), s = !0, u = 'hsv') : x(t.h) && x(t.s) && x(t.l) && (n = P(t.s), o = P(t.l), r = Se(t.h, n, o), s = !0, u = 'hsl'), Object.prototype.hasOwnProperty.call(t, 'a') && (e = t.a)), e = St(e), {
    ok: s,
    format: t.format || u,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: e,
  }
}

var Ne = '[-\\+]?\\d+%?', Be = '[-\\+]?\\d*\\.\\d+%?', $ = '(?:'.concat(Be, ')|(?:').concat(Ne, ')'),
  j = '[\\s|\\(]+('.concat($, ')[,|\\s]+(').concat($, ')[,|\\s]+(').concat($, ')\\s*\\)?'),
  G = '[\\s|\\(]+('.concat($, ')[,|\\s]+(').concat($, ')[,|\\s]+(').concat($, ')[,|\\s]+(').concat($, ')\\s*\\)?'),
  k = {
    CSS_UNIT: new RegExp($),
    rgb: new RegExp('rgb' + j),
    rgba: new RegExp('rgba' + G),
    hsl: new RegExp('hsl' + j),
    hsla: new RegExp('hsla' + G),
    hsv: new RegExp('hsv' + j),
    hsva: new RegExp('hsva' + G),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  }

function Ae(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1
  var r = !1
  if (W[t])
    t = W[t], r = !0
  else if (t === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
  var e = k.rgb.exec(t)
  return e ? { r: e[1], g: e[2], b: e[3] } : (e = k.rgba.exec(t), e ? {
    r: e[1],
    g: e[2],
    b: e[3],
    a: e[4],
  } : (e = k.hsl.exec(t), e ? { h: e[1], s: e[2], l: e[3] } : (e = k.hsla.exec(t), e ? {
    h: e[1],
    s: e[2],
    l: e[3],
    a: e[4],
  } : (e = k.hsv.exec(t), e ? { h: e[1], s: e[2], v: e[3] } : (e = k.hsva.exec(t), e ? {
    h: e[1],
    s: e[2],
    v: e[3],
    a: e[4],
  } : (e = k.hex8.exec(t), e ? {
    r: y(e[1]),
    g: y(e[2]),
    b: y(e[3]),
    a: ut(e[4]),
    format: r ? 'name' : 'hex8',
  } : (e = k.hex6.exec(t), e ? {
    r: y(e[1]),
    g: y(e[2]),
    b: y(e[3]),
    format: r ? 'name' : 'hex',
  } : (e = k.hex4.exec(t), e ? {
    r: y(e[1] + e[1]),
    g: y(e[2] + e[2]),
    b: y(e[3] + e[3]),
    a: ut(e[4] + e[4]),
    format: r ? 'name' : 'hex8',
  } : (e = k.hex3.exec(t), e ? {
    r: y(e[1] + e[1]),
    g: y(e[2] + e[2]),
    b: y(e[3] + e[3]),
    format: r ? 'name' : 'hex',
  } : !1)))))))))
}

function x(t) {
  return !!k.CSS_UNIT.exec(String(t))
}
var Re = (
  /** @class */
  function () {
    function t(r, e) {
      r === void 0 && (r = ''), e === void 0 && (e = {})
      var n
      if (r instanceof t)
        return r
      typeof r == 'number' && (r = Me(r)), this.originalInput = r
      var a = $e(r)
      this.originalInput = r, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = e.format) !== null && n !== void 0 ? n : a.format, this.gradientType = e.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok
    }

    return t.prototype.isDark = function () {
      return this.getBrightness() < 128
    }, t.prototype.isLight = function () {
      return !this.isDark()
    }, t.prototype.getBrightness = function () {
      var r = this.toRgb()
      return (r.r * 299 + r.g * 587 + r.b * 114) / 1e3
    }, t.prototype.getLuminance = function () {
      var r = this.toRgb(), e, n, a, o = r.r / 255, s = r.g / 255, u = r.b / 255
      return o <= 0.03928 ? e = o / 12.92 : e = Math.pow((o + 0.055) / 1.055, 2.4), s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), u <= 0.03928 ? a = u / 12.92 : a = Math.pow((u + 0.055) / 1.055, 2.4), 0.2126 * e + 0.7152 * n + 0.0722 * a
    }, t.prototype.getAlpha = function () {
      return this.a
    }, t.prototype.setAlpha = function (r) {
      return this.a = St(r), this.roundA = Math.round(100 * this.a) / 100, this
    }, t.prototype.isMonochrome = function () {
      var r = this.toHsl().s
      return r === 0
    }, t.prototype.toHsv = function () {
      var r = st(this.r, this.g, this.b)
      return { h: r.h * 360, s: r.s, v: r.v, a: this.a }
    }, t.prototype.toHsvString = function () {
      var r = st(this.r, this.g, this.b), e = Math.round(r.h * 360), n = Math.round(r.s * 100),
        a = Math.round(r.v * 100)
      return this.a === 1 ? 'hsv('.concat(e, ', ').concat(n, '%, ').concat(a, '%)') : 'hsva('.concat(e, ', ').concat(n, '%, ').concat(a, '%, ').concat(this.roundA, ')')
    }, t.prototype.toHsl = function () {
      var r = ot(this.r, this.g, this.b)
      return { h: r.h * 360, s: r.s, l: r.l, a: this.a }
    }, t.prototype.toHslString = function () {
      var r = ot(this.r, this.g, this.b), e = Math.round(r.h * 360), n = Math.round(r.s * 100),
        a = Math.round(r.l * 100)
      return this.a === 1 ? 'hsl('.concat(e, ', ').concat(n, '%, ').concat(a, '%)') : 'hsla('.concat(e, ', ').concat(n, '%, ').concat(a, '%, ').concat(this.roundA, ')')
    }, t.prototype.toHex = function (r) {
      return r === void 0 && (r = !1), it(this.r, this.g, this.b, r)
    }, t.prototype.toHexString = function (r) {
      return r === void 0 && (r = !1), '#' + this.toHex(r)
    }, t.prototype.toHex8 = function (r) {
      return r === void 0 && (r = !1), xe(this.r, this.g, this.b, this.a, r)
    }, t.prototype.toHex8String = function (r) {
      return r === void 0 && (r = !1), '#' + this.toHex8(r)
    }, t.prototype.toHexShortString = function (r) {
      return r === void 0 && (r = !1), this.a === 1 ? this.toHexString(r) : this.toHex8String(r)
    }, t.prototype.toRgb = function () {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a,
      }
    }, t.prototype.toRgbString = function () {
      var r = Math.round(this.r), e = Math.round(this.g), n = Math.round(this.b)
      return this.a === 1 ? 'rgb('.concat(r, ', ').concat(e, ', ').concat(n, ')') : 'rgba('.concat(r, ', ').concat(e, ', ').concat(n, ', ').concat(this.roundA, ')')
    }, t.prototype.toPercentageRgb = function () {
      var r = function (e) {
        return ''.concat(Math.round(h(e, 255) * 100), '%')
      }
      return {
        r: r(this.r),
        g: r(this.g),
        b: r(this.b),
        a: this.a,
      }
    }, t.prototype.toPercentageRgbString = function () {
      var r = function (e) {
        return Math.round(h(e, 255) * 100)
      }
      return this.a === 1 ? 'rgb('.concat(r(this.r), '%, ').concat(r(this.g), '%, ').concat(r(this.b), '%)') : 'rgba('.concat(r(this.r), '%, ').concat(r(this.g), '%, ').concat(r(this.b), '%, ').concat(this.roundA, ')')
    }, t.prototype.toName = function () {
      if (this.a === 0)
        return 'transparent'
      if (this.a < 1)
        return !1
      for (var r = '#' + it(this.r, this.g, this.b, !1), e = 0, n = Object.entries(W); e < n.length; e++) {
        var a = n[e], o = a[0], s = a[1]
        if (r === s)
          return o
      }
      return !1
    }, t.prototype.toString = function (r) {
      var e = !!r
      r = r ?? this.format
      var n = !1, a = this.a < 1 && this.a >= 0, o = !e && a && (r.startsWith('hex') || r === 'name')
      return o ? r === 'name' && this.a === 0 ? this.toName() : this.toRgbString() : (r === 'rgb' && (n = this.toRgbString()), r === 'prgb' && (n = this.toPercentageRgbString()), (r === 'hex' || r === 'hex6') && (n = this.toHexString()), r === 'hex3' && (n = this.toHexString(!0)), r === 'hex4' && (n = this.toHex8String(!0)), r === 'hex8' && (n = this.toHex8String()), r === 'name' && (n = this.toName()), r === 'hsl' && (n = this.toHslString()), r === 'hsv' && (n = this.toHsvString()), n || this.toHexString())
    }, t.prototype.toNumber = function () {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }, t.prototype.clone = function () {
      return new t(this.toString())
    }, t.prototype.lighten = function (r) {
      r === void 0 && (r = 10)
      var e = this.toHsl()
      return e.l += r / 100, e.l = I(e.l), new t(e)
    }, t.prototype.brighten = function (r) {
      r === void 0 && (r = 10)
      var e = this.toRgb()
      return e.r = Math.max(0, Math.min(255, e.r - Math.round(255 * -(r / 100)))), e.g = Math.max(0, Math.min(255, e.g - Math.round(255 * -(r / 100)))), e.b = Math.max(0, Math.min(255, e.b - Math.round(255 * -(r / 100)))), new t(e)
    }, t.prototype.darken = function (r) {
      r === void 0 && (r = 10)
      var e = this.toHsl()
      return e.l -= r / 100, e.l = I(e.l), new t(e)
    }, t.prototype.tint = function (r) {
      return r === void 0 && (r = 10), this.mix('white', r)
    }, t.prototype.shade = function (r) {
      return r === void 0 && (r = 10), this.mix('black', r)
    }, t.prototype.desaturate = function (r) {
      r === void 0 && (r = 10)
      var e = this.toHsl()
      return e.s -= r / 100, e.s = I(e.s), new t(e)
    }, t.prototype.saturate = function (r) {
      r === void 0 && (r = 10)
      var e = this.toHsl()
      return e.s += r / 100, e.s = I(e.s), new t(e)
    }, t.prototype.greyscale = function () {
      return this.desaturate(100)
    }, t.prototype.spin = function (r) {
      var e = this.toHsl(), n = (e.h + r) % 360
      return e.h = n < 0 ? 360 + n : n, new t(e)
    }, t.prototype.mix = function (r, e) {
      e === void 0 && (e = 50)
      var n = this.toRgb(), a = new t(r).toRgb(), o = e / 100, s = {
        r: (a.r - n.r) * o + n.r,
        g: (a.g - n.g) * o + n.g,
        b: (a.b - n.b) * o + n.b,
        a: (a.a - n.a) * o + n.a,
      }
      return new t(s)
    }, t.prototype.analogous = function (r, e) {
      r === void 0 && (r = 6), e === void 0 && (e = 30)
      var n = this.toHsl(), a = 360 / e, o = [this]
      for (n.h = (n.h - (a * r >> 1) + 720) % 360; --r;)
        n.h = (n.h + a) % 360, o.push(new t(n))
      return o
    }, t.prototype.complement = function () {
      var r = this.toHsl()
      return r.h = (r.h + 180) % 360, new t(r)
    }, t.prototype.monochromatic = function (r) {
      r === void 0 && (r = 6)
      for (var e = this.toHsv(), n = e.h, a = e.s, o = e.v, s = [], u = 1 / r; r--;)
        s.push(new t({ h: n, s: a, v: o })), o = (o + u) % 1
      return s
    }, t.prototype.splitcomplement = function () {
      var r = this.toHsl(), e = r.h
      return [
        this,
        new t({ h: (e + 72) % 360, s: r.s, l: r.l }),
        new t({ h: (e + 216) % 360, s: r.s, l: r.l }),
      ]
    }, t.prototype.onBackground = function (r) {
      var e = this.toRgb(), n = new t(r).toRgb(), a = e.a + n.a * (1 - e.a)
      return new t({
        r: (e.r * e.a + n.r * n.a * (1 - e.a)) / a,
        g: (e.g * e.a + n.g * n.a * (1 - e.a)) / a,
        b: (e.b * e.a + n.b * n.a * (1 - e.a)) / a,
        a,
      })
    }, t.prototype.triad = function () {
      return this.polyad(3)
    }, t.prototype.tetrad = function () {
      return this.polyad(4)
    }, t.prototype.polyad = function (r) {
      for (var e = this.toHsl(), n = e.h, a = [this], o = 360 / r, s = 1; s < r; s++)
        a.push(new t({ h: (n + s * o) % 360, s: e.s, l: e.l }))
      return a
    }, t.prototype.equals = function (r) {
      return this.toRgbString() === new t(r).toRgbString()
    }, t
  }()
);
function M(t, r = 20) {
  return t.mix('#141414', r).toString()
}
function He(t) {
  const r = yt(), e = F('button')
  return g(() => {
    let n = {}
    const a = t.color
    if (a) {
      const o = new Re(a), s = t.dark ? o.tint(20).toString() : M(o, 20)
      if (t.plain)
        n = e.cssVarBlock({
          'bg-color': t.dark ? M(o, 90) : o.tint(90).toString(),
          'text-color': a,
          'border-color': t.dark ? M(o, 50) : o.tint(50).toString(),
          'hover-text-color': `var(${ e.cssVarName('color-white') })`,
          'hover-bg-color': a,
          'hover-border-color': a,
          'active-bg-color': s,
          'active-text-color': `var(${ e.cssVarName('color-white') })`,
          'active-border-color': s,
        }), r.value && (n[e.cssVarBlockName('disabled-bg-color')] = t.dark ? M(o, 90) : o.tint(90).toString(), n[e.cssVarBlockName('disabled-text-color')] = t.dark ? M(o, 50) : o.tint(50).toString(), n[e.cssVarBlockName('disabled-border-color')] = t.dark ? M(o, 80) : o.tint(80).toString())
      else {
        const u = t.dark ? M(o, 30) : o.tint(30).toString(),
          f = o.isDark() ? `var(${ e.cssVarName('color-white') })` : `var(${ e.cssVarName('color-black') })`
        if (n = e.cssVarBlock({
          'bg-color': a,
          'text-color': f,
          'border-color': a,
          'hover-bg-color': u,
          'hover-text-color': f,
          'hover-border-color': u,
          'active-bg-color': s,
          'active-border-color': s,
        }), r.value) {
          const v = t.dark ? M(o, 50) : o.tint(50).toString()
          n[e.cssVarBlockName('disabled-bg-color')] = v, n[e.cssVarBlockName('disabled-text-color')] = t.dark ? 'rgba(255, 255, 255, 0.5)' : `var(${ e.cssVarName('color-white') })`, n[e.cssVarBlockName('disabled-border-color')] = v
        }
      }
    }
    return n
  });
}

const Te = A({
  name: 'ElButton',
}), Ve = /* @__PURE__ */ A({
  ...Te,
  props: U,
  emits: pe,
  setup(t, { expose: r, emit: e }) {
    const n = t, a = He(n), o = F('button'), {
      _ref: s,
      _size: u,
      _type: f,
      _disabled: v,
      _props: p,
      shouldAddSpace: m,
      handleClick: R,
    } = ge(n, e)
    return r({
      ref: s,
      size: u,
      type: f,
      disabled: v,
      shouldAddSpace: m,
    }), (d, _) => (S(), H(C(d.tag), D({
      ref_key: '_ref',
      ref: s,
    }, c(p), {
      class: [
        c(o).b(),
        c(o).m(c(f)),
        c(o).m(c(u)),
        c(o).is('disabled', c(v)),
        c(o).is('loading', d.loading),
        c(o).is('plain', d.plain),
        c(o).is('round', d.round),
        c(o).is('circle', d.circle),
        c(o).is('text', d.text),
        c(o).is('link', d.link),
        c(o).is('has-bg', d.bg),
      ],
      style: c(a),
      onClick: c(R),
    }), {
      default: V(() => [
        d.loading ? (S(), z(Bt, { key: 0 }, [
          d.$slots.loading ? T(d.$slots, 'loading', { key: 0 }) : (S(), H(c(at), {
            key: 1,
            class: K(c(o).is('loading')),
          }, {
            default: V(() => [
              (S(), H(C(d.loadingIcon))),
            ]),
            _: 1,
          }, 8, ['class'])),
        ], 64)) : d.icon || d.$slots.icon ? (S(), H(c(at), { key: 1 }, {
          default: V(() => [
            d.icon ? (S(), H(C(d.icon), { key: 0 })) : T(d.$slots, 'icon', { key: 1 }),
          ]),
          _: 3,
        })) : L('v-if', !0),
        d.$slots.default ? (S(), z('span', {
          key: 2,
          class: K({ [c(o).em('text', 'expand')]: c(m) }),
        }, [
          T(d.$slots, 'default'),
        ], 2)) : L('v-if', !0),
      ]),
      _: 3,
    }, 16, ['class', 'style', 'onClick']));
  }
});
var ze = /* @__PURE__ */ Y(Ve, [['__file', '/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue']])
const Ie = {
  size: U.size,
  type: U.type,
}, Pe = A({
  name: 'ElButtonGroup',
}), Oe = /* @__PURE__ */ A({
  ...Pe,
  props: Ie,
  setup(t) {
    const r = t
    At(kt, Rt({
      size: X(r, 'size'),
      type: X(r, 'type'),
    }))
    const e = F('button')
    return (n, a) => (S(), z('div', {
      class: K(`${ c(e).b('group') }`),
    }, [
      T(n.$slots, 'default'),
    ], 2))
  },
})
var _t = /* @__PURE__ */ Y(Oe, [['__file', '/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue']])
const Fe = bt(ze, {
  ButtonGroup: _t,
})
Yt(_t)
var q = /* @__PURE__ */ ((t) => (t.RoundedMain = 'btn-rounded-main', t.RoundedIconOnly = 'btn-rounded-icon-only', t.RoundedSecondary = 'btn-rounded-secondary', t.RoundedWarning = 'btn-rounded-warning', t.TextDefault = 'btn-text-default', t))(q || {}),
  xt = /* @__PURE__ */ ((t) => (t.large = 'btn-rounded--large', t.medium = 'btn-rounded--medium', t.mini = 'btn-rounded--mini', t))(xt || {})
const We = /* @__PURE__ */ A({
  __name: 'UButton',
  props: {
    design: { default: q.RoundedMain },
    label: {},
    disabled: { type: Boolean, default: !1 },
    iconLocation: {},
    size: {
      default: (t) => {
        if (t.design !== q.TextDefault)
          return t.size ?? xt.large
      },
    },
  },
  setup(t) {
    const r = t, e = lt(), n = g(() => [
      r.design ?? '',
      r.iconLocation ?? '',
      r.size ?? '',
    ])
    return (a, o) => (S(), H(c(Fe), D({
      class: ['btn', n.value],
      disabled: !!a.disabled,
    }, a.$attrs), Ht({ _: 2 }, [
      a.label ? {
        name: 'default',
        fn: V(() => [
          Tt(Vt(a.label), 1),
        ]),
        key: '0',
      } : void 0,
      c(e).icon ? {
        name: 'icon',
        fn: V(() => [
          c(e).icon ? T(a.$slots, 'icon', { key: 0 }) : L('', !0),
        ]),
        key: '1',
      } : void 0,
    ]), 1040, ['class', 'disabled']))
  }
});
var Ce = /* @__PURE__ */ ((t) => (t.left = 'left', t.right = 'right', t.up = 'up', t.down = 'down', t))(Ce || {}),
  Ee = /* @__PURE__ */ ((t) => (t.s24 = 's24', t.s32 = 's32', t))(Ee || {}),
  je = /* @__PURE__ */ ((t) => (t.s_32_27 = 's_32_27', t.s_42_36 = 's_42_36', t))(je || {}),
  Ge = /* @__PURE__ */ ((t) => (t.Back = 'Back', t.Forward = 'Forward', t))(Ge || {}),
  Ke = /* @__PURE__ */ ((t) => (t.primary = 'primary', t.secondary = 'secondary', t.allusion = 'allusion', t.contrast = 'contrast', t.warning = 'warning', t.success = 'success', t.hint = 'hint', t.search = 'search', t))(Ke || {}),
  Le = /* @__PURE__ */ ((t) => (t.s10 = 's10', t.s6 = 's6', t))(Le || {})
export {
  q as EButtonDesign,
  xt as EButtonSize,
  Ge as EDirectionArrow,
  Ce as EDirection_x4,
  Ke as EIconColor,
  je as ELogoSize,
  Ee as EMoneyDirectionSize,
  Le as EXSize,
  We as UButton,
}
