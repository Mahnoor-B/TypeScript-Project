const path = require("path");

module.exports = {
  entry: ["./src/index.ts"],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    publicPath: "dist",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
