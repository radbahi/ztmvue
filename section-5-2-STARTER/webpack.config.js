//this file contains the settings for webpack
//babel helps webpack with compiling backwards-compatible code for older browsers

const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        //tells webpack to compile js files, ignore all files in node_modules, and use babel
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      {
        //tells webpack to compile scss files and to use sass as well as necessary loaders. however, plugins are better for production than loaders
        //we're no longer using "style-loader", but the mini css plugin instead. this is how to load it
        //the order in which elements in use are matters
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "main.css",
    }),
  ],
  //watch: true will auto-recompile if webpack detects a change
  watch: true,
};
