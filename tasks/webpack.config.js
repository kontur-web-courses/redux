const path = require('path');
const tasks = require('./tasks').tasks;
const webpack = require('webpack');

const entries = {};
const rewrites = [];

const publicPath = '/build';

for (let k in tasks) {
  addTask(tasks[k].order, tasks[k].id);
}

function addTask(order, id) {
  const orderAndId = order + '.' + id;
  entries[id] = ['./src/' + orderAndId + '/index.js'];
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
        test: /\.(woff|woff2|png|jpg|gif|eot|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 2000,
          },
        },
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: {
      rewrites: rewrites,
    },
    open: true,
    publicPath,
    hot: true
  }
};
