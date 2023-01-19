const config = {
  compress: true,
  swcMinify: true,
  eslint: {
    dirs: ['src'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
};

module.exports = async (_phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    ...defaultConfig,
    ...config,
  };

  delete nextConfig.webpackDevMiddleware;
  delete nextConfig.configOrigin;
  delete nextConfig.target;
  delete nextConfig.webpack5;
  delete nextConfig.amp;
  delete nextConfig.assetPrefix;
  delete nextConfig.experimental;
  delete nextConfig.i18n;

  return nextConfig;
};
