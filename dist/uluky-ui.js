import {
  defineComponent as u,
  useSlots as c,
  computed as m,
  resolveComponent as b,
  openBlock as f,
  createBlock as p,
  mergeProps as y,
  createSlots as v,
  withCtx as a,
  createTextVNode as g,
  toDisplayString as k,
  unref as r,
  renderSlot as R,
  createCommentVNode as C,
} from 'vue'

var d = /* @__PURE__ */ ((e) => (e.RoundedMain = 'btn-rounded-main', e.RoundedIconOnly = 'btn-rounded-icon-only', e.RoundedSecondary = 'btn-rounded-secondary', e.RoundedWarning = 'btn-rounded-warning', e.TextDefault = 'btn-text-default', e))(d || {}),
  l = /* @__PURE__ */ ((e) => (e.large = 'btn-rounded--large', e.medium = 'btn-rounded--medium', e.mini = 'btn-rounded--mini', e))(l || {})
const T = /* @__PURE__ */ u({
  __name: 'UButton',
  props: {
    design: { default: d.RoundedMain },
    label: {},
    disabled: { type: Boolean, default: !1 },
    iconLocation: {},
    size: {
      default: (e) => {
        if (e.design !== d.TextDefault)
          return e.size ?? l.large
      },
    },
  },
  setup(e) {
    const o = e, t = c(), s = m(() => [
      o.design ?? '',
      o.iconLocation ?? '',
      o.size ?? '',
    ])
    return (n, _) => {
      const i = b('ElButton')
      return f(), p(i, y({
        class: ['btn', s.value],
        disabled: !!n.disabled,
      }, n.$attrs), v({ _: 2 }, [
        n.label ? {
          name: 'default',
          fn: a(() => [
            g(k(n.label), 1),
          ]),
          key: '0',
        } : void 0,
        r(t).icon ? {
          name: 'icon',
          fn: a(() => [
            r(t).icon ? R(n.$slots, 'icon', { key: 0 }) : C('', !0),
          ]),
          key: '1',
        } : void 0,
      ]), 1040, ['class', 'disabled'])
    }
  },
})
export {
  T as UButton,
}
