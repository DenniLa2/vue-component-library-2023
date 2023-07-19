import { defineComponent as o, openBlock as n, createElementBlock as s, toDisplayString as c } from 'vue'

const u = { class: 'btn-cta' }, d = /* @__PURE__ */ o({
  __name: 'UButton',
  props: {
    text: {},
  },
  setup(_) {
    return (t, e) => (n(), s('button', u, c(t.text), 1))
  },
})
const a = (_, t) => {
  const e = _.__vccOpts || _
  for (const [p, r] of t)
    e[p] = r
  return e
}, g = /* @__PURE__ */ a(d, [['__scopeId', 'data-v-9356a36a']]), l = { class: 'u-tag' }, f = /* @__PURE__ */ o({
  __name: 'UTag',
  props: {
    text: {},
  },
  setup(_) {
    return (t, e) => (n(), s('span', l, c(t.text), 1))
  },
})
const m = /* @__PURE__ */ a(f, [['__scopeId', 'data-v-7ff12b89']])
export {
  g as UButton,
  m as UTag,
}
