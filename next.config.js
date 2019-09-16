const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
});
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
};