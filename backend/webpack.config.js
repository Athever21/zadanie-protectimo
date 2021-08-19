const path = require("path");
const nodeExternals = require("webpack-node-externals");

const cwd = process.cwd();

module.exports = {
  name: "server",
  entry: [path.join(cwd, "src", "index.ts")],
  externals: nodeExternals(),
  output: {
    path: path.join(cwd, "public"),
    filename: "server.js",
    publicPath: "/build/"
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: "ts-loader",
        include: path.join(cwd, "src")
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  }
}