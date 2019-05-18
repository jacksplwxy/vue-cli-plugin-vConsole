const VConsole_webpack = require('vconsole-webpack-plugin')

module.exports = (api, projectOptions) => {
    api.configureWebpack(webpackConfig => {
        webpackConfig.plugins.push(new VConsole_webpack(projectOptions.pluginOptions.vConsole || projectOptions.pluginOptions.vconsole))
    })
}