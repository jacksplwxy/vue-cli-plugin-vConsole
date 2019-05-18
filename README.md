# vue-cli-plugin-vConsole

[![npm version](https://img.shields.io/npm/v/vue-cli-plugin-vconsole2.svg?style=flat-square)](https://www.npmjs.org/package/vue-cli-plugin-vconsole2)
[![npm downloads](https://img.shields.io/npm/dm/vue-cli-plugin-vconsole2.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vue-cli-plugin-vconsole2)

the vConsole  for Vue CLI3 plugins

## Install
``` Shell
vue add vconsole2
```
or 
``` Shell
vue add vue-cli-plugin-vconsole2
```

## Tips
You can use the options of the `vconsole-webpack-plugin` in the vue config like this:
``` JavaScript
// vue.config.js or configure in the pagckage.json.
module.exports = {
  pluginOptions: {
    vconsole: { enable: true /* others... */ }
  }
}
```
