const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: "./src/js/bootstrap.js",
  output: {
    path: path.resolve(__dirname, "./dist"), // eslint-disable-line
    filename: "bootstrap.js"
  },
  plugins: [
    new CopyPlugin({ patterns: ['./src/www/index.html', './src/www/style.css'] })
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }]
      }
    ]
  },
  experiments: {
    asyncWebAssembly: true,
  },
  resolve: {
    extensions: ['.js', '.wasm'],
    modules: [
      "node_modules"
    ],
    alias: {
      "wasi_snapshot_preview1": path.resolve(__dirname, './src/js/wasi_snapshot_preview1.js'), // eslint-disable-line
    }
  },
  performance: {
    hints: false
  }
};
