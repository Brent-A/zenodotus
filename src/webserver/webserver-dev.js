/*
 * Portions based on https://github.com/HugoDF/express-postgres-starter/blob/master/server.js
 *   Copyright (c) 2019 Hugo Di Francesco
 *   Licensed under The MIT License (MIT)
 *
 * Portions based on https://github.com/bengrunfeld/rexpack/blob/master/src/server/server-dev.js
 *   Copyright (c) 2019 Ben Grunfeld and his affiliates
 *   Licensed under the MIT LICENSE
 *
 */

import path from 'path';
import express from 'express';
import morgan from 'morgan';
import clientSession from 'client-sessions';
import helmet from 'helmet';
import {SESSION_SECRET} from './config';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import browserConfig from '../webpack.browser.dev.config.js'

const app = express();
const DIST_DIR = __dirname,
      HTML_FILE = path.join(DIST_DIR, 'index.html'),
      browserCompiler = webpack(browserConfig);

// Configure express to compile and hot reload
// the browser project.

app.use(webpackDevMiddleware(browserCompiler, {
  publicPath: browserConfig.output.publicPath
}));

app.use(webpackHotMiddleware(browserCompiler));


app.get('/', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})


// const api = require('./src/api');

app.get('/health', (req, res) => res.sendStatus(200));

app.use(morgan('short'));
app.use(express.json());
app.use(
  clientSession({
    cookieName: 'session',
    secret: SESSION_SECRET,
    duration: 24 * 60 * 60 * 1000
  })
);
app.use(helmet());

// app.use(api);


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
