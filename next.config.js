/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    turbo: {},
  },
  // webpack: (config) => {
  //   // config.externals is needed to resolve the following errors:
  //   // Module not found: Can't resolve 'bufferutil'
  //   // Module not found: Can't resolve 'utf-8-validate'
  //   config.externals.push({
  //     bufferutil: 'bufferutil',
  //     'utf-8-validate': 'utf-8-validate',
  //   });

  //   return config;
  // },
});
