const path = require("path");
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  mode: "development",

  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["solid"],
        },
      },

      {
        test: /\.tsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["@babel/plugin-transform-modules-commonjs"],
              presets: ["solid"],
            },
          },
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};

export default config;
