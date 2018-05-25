const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

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

      ["lessons"].forEach(name => {
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
    path: path.join(__dirname, "public"),
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
    ]
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin({ name: "shared" })],
  devtool: "inline-source-map",
  devServer: {
    quiet: false,
    noInfo: false,
    historyApiFallback: {
      rewrites: []
    }
  }
};
