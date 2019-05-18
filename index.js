const VConsoleWebPackPlugin = require('vconsole-webpack-plugin')

module.exports = (api, projectOptions) => {
    const { vconsole } = projectOptions.pluginOptions || {}
    api.configureWebpack(webpackConfig => {
        webpackConfig.plugins.push(new VConsoleWebPackPlugin(Object.assign({
            enable: process.env.NODE_ENV !== 'production'
        }, vconsole)))
    })
}