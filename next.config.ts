import { createMDX } from '@hanzo/docs/mdx/next';
import type { NextConfig } from 'next';
import path from 'node:path';

const config: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  serverExternalPackages: ['shiki'],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

const withMDX = createMDX({
  outDir: '.docs',
});

export default withMDX(config);
