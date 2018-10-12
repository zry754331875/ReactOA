const path = require('path')
const webpack = require('webpack')
const rootDir = path.resolve(__dirname) + '/'
const srcDir = rootDir + 'src/'
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const {
    injectBabelPlugin
} = require('react-app-rewired');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css'
        }],
        config,
    );

    config = injectBabelPlugin(['import', {
        libraryName: 'antd-mobile',
        style: 'css'
    }, 'antd-mobile'], config);

    config.resolve.alias = {
        '@src': srcDir,
        '@assets': srcDir + 'assets',
        '@page': srcDir + 'page',
        '@store': srcDir + 'store',
        '@utils': srcDir + 'utils',
        '@component': srcDir + 'component'
    }

    config = rewireReactHotLoader(config, env)

    config.optimization.minimizer = [new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true,
        }
      }
    })]

    return config;
};