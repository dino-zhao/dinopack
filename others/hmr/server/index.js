const express = require("express");
const webpack = require("webpack");
const webpackconfig = require("../webpack.config");
const webpackMiddleware = require("webpack-dev-middleware");

var webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();

const webpackCompiler = webpack(webpackconfig);
const wpmw = webpackMiddleware(webpackCompiler, {});
app.use(wpmw);
app.use(
  webpackHotMiddleware(webpackCompiler, {
    log: console.log,
  })
);
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
