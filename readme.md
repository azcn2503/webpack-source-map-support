# Webpack Source Map Support

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
