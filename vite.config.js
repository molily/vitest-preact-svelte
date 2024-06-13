import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import preact from '@preact/preset-vite';

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), svelte(), svelteTesting()],
  test: {
    environment: 'jsdom',
    deps: {
      optimizer: {
        web: {
          enabled: true,
          include: ['@testing-library/preact'],
        },
      },
    },
    /*
    alias: [
      // https://vitest.dev/config/#alias
      // This is passed to @rollup/plugin-alias as the "entries" field
      // https://github.com/rollup/plugins/tree/master/packages/alias#entries
      // In Vitest, force loading of Svelte's browser build so that lifecycle methods are called.
      // https://github.com/testing-library/svelte-testing-library/issues/222#issuecomment-1909993331
      {
        find: /^svelte$/,
        replacement: join(currentDir, 'node_modules/svelte/src/runtime/'),
      },
    ],
    */
  },
});
