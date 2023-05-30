'use strict'

const { name:pageNmae } = require('./package.json')
const path = require('path')
// const { webpack: AutoImportPlugin } = require('@jd/tpaas-autoimport')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: `/${pageNmae}/`,
  assetsDir: 'static',
  outputDir: 'dist',
  lintOnSave: false,
  parallel: false,
  productionSourceMap: false,
  transpileDependencies: [
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${pageNmae}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp-${pageNmae}`,
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
    performance: {
      hints: false,
    },
    module: {
      rules: [{ parser: { system: false } }],
    },
    plugins: [
    //   new AutoImportPlugin({
    //     modules: {
    //       pages: './**/*.{vue,yaml}',
    //       plugins: './*/index.js',
    //     },
    //   }),
    ],
  },
  pluginOptions: {
    windicss: {
      configFiles: [resolve('windi.config.js')],
    },
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // babel 因为服务是从server启动的，这里手动加载babel config
    config.module
      .rule('compile')
      .test(/\.js$/)
      .include.add(resolve('src'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .options(require('./babel.config'))
      .end()

    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
