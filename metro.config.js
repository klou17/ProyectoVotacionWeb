// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getDefaultConfig } = require('expo/metro-config')

module.exports = (() => {
  const config = getDefaultConfig(__dirname)

  return config
})()
