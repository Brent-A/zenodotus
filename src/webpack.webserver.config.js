/*
Portions based on https://github.com/bengrunfeld/rexpack/blob/master/webpack.server.config.js
  Copyright (c) 2019 Ben Grunfeld and his affiliates
  Licensed under MIT LICENSE

*/

/*

The webpack build for the server code is used to enable transpiling ES6-8 to ES5.

The webpack-node-externals module prevents the bundling of the node_modules dependencies and allows
dependencies to load as normal in a node.js environment.

webpack would normally bundle these dependencies and re-direct imports for the purpose of
deployment to a browser.

Note: that prod and dev mode are set in npm scripts.

*/
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = (env, argv) => {
  const SERVER_PATH = (argv.mode === 'production') ?
    './webserver/webserver-prod.js' :
    './webserver/webserver-dev.js'

  return ({
    entry: {
      webserver: SERVER_PATH,
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    mode: argv.mode,
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don't put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
      rules: [
        {
          // Transpiles ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  })
}

// Webpack 4 basic tutorial:
// https://www.valentinog.com/blog/webpack-4-tutorial/#webpack_4_production_and_development_mode

// Development mode is optimized for build speed and does nothing more than providing an un-minified bundle.
// Production mode enables all sorts of optimizations like minification, scope hoisting, tree-shaking and more.
