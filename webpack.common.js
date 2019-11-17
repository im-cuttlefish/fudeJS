const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/i,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".jpg", ".jpeg", ".png", ".gif", ".svg"],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./assets/index.html",
      favicon: './assets/favicon.png',
      inject: true
    })
  ]
};
