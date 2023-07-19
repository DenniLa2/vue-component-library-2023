import { defineComponent as c, openBlock as s, createElementBlock as a, toDisplayString as r } from 'vue'

const p = { class: 'btn-cta' }, u = /* @__PURE__ */ c({
  __name: 'UButton',
  props: {
    text: {},
  },
  setup(t) {
    return (o, e) => (s(), a('button', p, r(o.text), 1))
  },
})
const l = (t, o) => {
  const e = t.__vccOpts || t
  for (const [n, _] of o)
    e[n] = _
  return e
}, d = /* @__PURE__ */ l(u, [['__scopeId', 'data-v-9356a36a']])
export {
  d as FccButton,
}
