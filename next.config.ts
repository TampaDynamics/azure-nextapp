import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Correct for SWA hybrid hosting (do NOT use "export")
  output: 'standalone',

  // Usually not needed to force externals for Node runtime;
  // leave empty unless you deliberately want to externalize a package.
  serverExternalPackages: [],

  // Let SWA set global security headers (see staticwebapp.config.json).
  // Keep Next headers for *route-specific* overrides only (if you need them).
  headers: async () => [
    // Example: add a header to a specific route only
    // {
    //   source: '/dashboard/:path*',
    //   headers: [{ key: 'Cache-Control', value: 'no-store' }]
    // }
  ],

  // Quality-of-life options (optional)
  reactStrictMode: true,
  poweredByHeader: false
};

export default nextConfig;
