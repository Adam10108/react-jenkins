const {
  addDecoratorsLegacy,
  override,
  fixBabelImports
} = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)
