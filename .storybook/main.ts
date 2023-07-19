import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config: StorybookConfig = {
  async viteFinal(config, { configType }) {

    // config.resolve.alias['vue-i18n'] = 'vue-i18n/dist/vue-i18n.cjs.js';

    return mergeConfig(config, {
      define: { process: { env: {}, client: true } },
    })
  },
  stories: [
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    // '@nuxtjs/storybook',
    // '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
