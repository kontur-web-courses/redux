const path = require('path');
const tasks = require('./tasks').tasks;
const webpack = require('webpack');

const entries = {};
const rewrites = [];

const publicPath = '/build';

for (let k in tasks) {
  const {order, id, typed} = tasks[k];
  addTask(order, id, typed);
}

function addTask(order, id, typed = false) {
  const orderAndId = order + '.' + id;
  const indexFileName = typed ? 'index.tsx' : 'index.js';

  entries[id] = [`./src/${orderAndId}/${indexFileName}`];
  rewrites.push({
    from: new RegExp('^\/(' + orderAndId.replace(/\./, '\\.') + ')|(' + order + ')$', 'i'),
    to: '/src/' + orderAndId + '/index.html'
  });
}

module.exports = {
  entry: entries,
  output: {
    path: path.resolve('build'),
    publicPath,
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: 'tsconfig.json',
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: 'global'
          }
        }]
      },
      {
        test: /\.(png|woff|woff2|eot)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    historyApiFallback: {
      rewrites: rewrites,
    },
    open: true,
    publicPath
  }
};
