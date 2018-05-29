const fs = require("fs");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const extractSass = new ExtractTextPlugin({
  filename: path.join(__dirname, "lessons", "index.scss")
});

const lessonsDir = path.join(__dirname, "lessons");
const lessonDirs = fs
  .readdirSync(lessonsDir)
  .map(f => path.join(lessonsDir, f))
  .filter(f => fs.lstatSync(f).isDirectory());

//Config -->
module.exports = {
  //config ready go!
  entry: lessonDirs.reduce(
    (chunks, dir) => {
      const baseDir = path.basename(dir);

      //Check for possible JS files in each lesson directory
      ["exercise", "solution"].forEach(name => {
        const file = path.join(dir, `${name}.js`);

        if (fs.existsSync(file)) {
          chunks[`${baseDir}-${name}`] = file;
        }
      });
      return chunks;
    },
    {
      shared: ["react", "react-dom"],
      index: path.join(lessonsDir, "index.js")
    }
  ),
  output: {
    path: path.join(__dirname, "public/"),
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(ttf|eot|svg|png|jpg)$/, loader: "file" },
      {
        test: /\.woff(2)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(scss)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
      ]
    }
    ]},
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: "shared" }),
    new webpack.ProvidePlugin({
      $: "jquery", // Used for Bootstrap JavaScript components
      jQuery: "jquery", // Used for Bootstrap JavaScript components
      Popper: ["popper.js", "default"] // Used for Bootstrap dropdown, popup and tooltip JavaScript components
    }),
    extractSass
  ],
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: "public",
    open: "chrome",
    quiet: false,
    noInfo: false,
    historyApiFallback: {
      rewrites: []
    }
  },
  stats: {
    assets: false,
    assetsSort: "field",
    colors: true,
    version: true,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false,
    // Display the distance from the entry point for each module
    depth: false,

    // Display the entry points with the corresponding bundles
    entrypoints: false
  }
};
