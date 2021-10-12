const path = require('path');

module.exports = {
  mode: 'production',
  entry: './NeatForm.js',
  output: {
    path: path.resolve('dist'),
    filename: 'NeatForm.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};