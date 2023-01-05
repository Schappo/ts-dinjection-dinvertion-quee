/// <reference types="vitest" />
import { ConfigEnv, defineConfig, UserConfigExport } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import tsconfigPaths from 'vite-tsconfig-paths';

export const name = 'vite-plugin-node';

// https://vitejs.dev/config/
// eslint-disable-next-line no-empty-pattern
export default function ({}: ConfigEnv): UserConfigExport {
  return defineConfig({
    build: {
      target: 'ESNext',
      lib: {
        name,
        entry: 'src/index.ts',
        fileName: (format) => `${name}.${format}.js`,
      },
      sourcemap: true,
    },
    server: {
      port: 3000,
    },
    plugins: [
      tsconfigPaths(),
      ...VitePluginNode({
        adapter: 'express',
        appPath: './src/app.ts',
        tsCompiler: 'swc',
      }),
    ],
    optimizeDeps: {
      exclude: [],
      esbuildOptions: {
        target: 'esnext',
      },
    },
  });
}
