import { createRequire } from 'module';
import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: require.resolve('sass'),
    loadPaths: [path.join(rootDir, 'src', 'styles')],
    additionalData: `@use 'tokens' as *;\n`
  },
  experimental: {
    agentFeedback: true
  },
  cacheComponents: true,
  partialPrefetching: true
};

export default nextConfig;
