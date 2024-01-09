/**
 * Provides a way to add custom webpack config
 * 
 * @param {*} config webpack config
 * @param {*} env the environment
 */
module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.md$/,
    type: 'asset/source',
  })

  return config;
}
