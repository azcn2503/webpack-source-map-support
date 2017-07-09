# Webpack Source Map Support

[![Build Status](https://travis-ci.org/azcn2503/webpack-source-map-support.svg?branch=master)](https://travis-ci.org/azcn2503/webpack-source-map-support)

A simple way to enable source-map support for your backend Webpack built applications:

### How to use:

Require it in your `webpack.config.js`
```js
var WebpackSourceMapSupport = require("webpack-source-map-support");
```

Then just add it as a plugin:

```js
plugins: [
	new WebpackSourceMapSupport(),
	// ... other plugins
]
```
