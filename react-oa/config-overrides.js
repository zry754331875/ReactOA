const path = require('path')
const rootDir = path.resolve(__dirname) + '/'
const srcDir = rootDir + 'src/'

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
    },'antd-mobile'], config);

    config.resolve.alias = {
        '@src': srcDir,
        '@assets': srcDir + 'assets',
        '@page': srcDir + 'page',
        '@store': srcDir + 'store',
        '@utils': srcDir + 'utils',
        '@compoment': srcDir + 'compoment'
    }

    return config;
};