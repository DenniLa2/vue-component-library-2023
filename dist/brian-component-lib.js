import { defineComponent as _, openBlock as s, createElementBlock as r, toDisplayString as p } from 'vue'

const a = { class: 'btn-cta' }, d = /* @__PURE__ */ _({
  __name: 'FccButton',
  props: {
    text: {},
  },
  setup(t) {
    return (e, o) => (s(), r('button', a, p(e.text), 1))
  },
})
const u = (t, e) => {
  const o = t.__vccOpts || t
  for (const [c, n] of e)
    o[c] = n
  return o
}, l = /* @__PURE__ */ u(d, [['__scopeId', 'data-v-8addfdfd']])
export {
  l as FccButton,
}
