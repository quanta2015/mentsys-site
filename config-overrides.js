const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias
} = require('customize-cra')
const path = require('path')
const addLessLoader = require("customize-cra-less-loader");



module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#038fde',
        }
      }
    }
  }),
  addDecoratorsLegacy(),
  disableEsLint(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@app': path.resolve(__dirname, 'src/app'),
    '@util': path.resolve(__dirname, 'src/util'),
    '@constant': path.resolve(__dirname, 'src/constant'),
    '@component': path.resolve(__dirname, 'src/component'),
  }),
)
