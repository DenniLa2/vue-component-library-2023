import { defineComponent as _, openBlock as s, createElementBlock as r, toDisplayString as p } from 'vue'

const a = { class: 'btn-cta' }, u = /* @__PURE__ */ _({
  __name: 'FccButton',
  props: {
    text: {},
  },
  setup(t) {
    return (e, o) => (s(), r('button', a, p(e.text), 1))
  },
})
const l = (t, e) => {
  const o = t.__vccOpts || t
  for (const [c, n] of e)
    o[c] = n
  return o
}, i = /* @__PURE__ */ l(u, [['__scopeId', 'data-v-52feeb12']])
export {
  i as FccButton,
}
