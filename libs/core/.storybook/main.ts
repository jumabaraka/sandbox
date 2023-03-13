// Imports the Storybook's configuration and options API
import type { StorybookConfig, Options } from '@storybook/core-common';
//import { StorybookConfig } from '@storybook/web-components'
import type { Configuration } from 'webpack';
import { config as rootMain } from '../../../.storybook/main';

/**
 * @see https://github.com/storybookjs/storybook/blob/main/docs/configure/overview.md#using-storybook-api
 * @see https://github.com/storybookjs/storybook/blob/main/lib/client-logger/src/index.ts
 */
const config =  {
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: false,
        lazyCompilation: false,
      },
    },
  },

  addons: ['@storybook/addon-essentials'],

  framework: '@storybook/web-components-webpack5',

  logLevel: 'warn',
  features: {
    babelModeV7: true,
    storyStoreV7: true,
    postcss: true,
  },
  webpackFinal: async (config: Configuration, options: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, options);
    }

    // add your own webpack tweaks if needed
    return config;
  },
};

export default config;
