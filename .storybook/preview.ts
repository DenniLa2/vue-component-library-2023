import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
// import { createI18n } from 'vue-i18n'
import ElementPlus from 'element-plus'
// import '../assets/style/index.scss'
import 'element-plus/dist/index.css'

// const i18n = createI18n({
//   langDir: "lang",
//   messages: { infoBar: {step: 'step', done: 'Done'} },
//   defaultLocale: "en",
//   legacy: false,
//   locale: "en",
// });
//
// setup((app) => {
//   app.use(i18n);
// });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

setup(app => app.use(ElementPlus))

export default preview
