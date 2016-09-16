const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const express = require('express');
const config = require('./webpack.config.js');
const app = new (express)();
const port = 3002;
const compiler = webpack(config);


app.use(historyApiFallback({
  verbose: true
}));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use('/static', express.static(__dirname + '/static'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`Server started on port ${port}`);
  }
});
