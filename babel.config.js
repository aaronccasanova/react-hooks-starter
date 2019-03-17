// https://babeljs.io/docs/en/configuration#babelconfigjs

module.exports = function(api) {
  // https://babeljs.io/docs/en/config-files#apicache
  api.cache(true)

  const presets = ['@babel/preset-env', '@babel/preset-react']

  return {
    presets,
  }
}
