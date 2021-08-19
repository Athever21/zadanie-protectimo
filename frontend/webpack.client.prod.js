const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const cwd = process.cwd();

module.exports = {
  name: "browser",
  mode: "production",
  entry: [path.join(cwd, "client", "index.tsx")],
  output: {
    path: path.join(cwd, "build"),
    filename: "dist-[name].js",
    publicPath: "/build/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.join(cwd, "client")
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: path.join(cwd, "client")
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
}