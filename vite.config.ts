import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, './app/components'),
      '@Contexts': path.resolve(__dirname, './app/contexts'),
      '@Routes': path.resolve(__dirname, './app/routes'),
      '@Schema': path.resolve(__dirname, './app/schema'),
      '@Utilities': path.resolve(__dirname, './app/utilities'),
    },
  },
  server: {
    port: 3000,
  },
});
