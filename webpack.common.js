'use strict';

const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/src/app.js`;
webpackConfig.output = {
  filename: '[name].[hash].js',
  path: `${__dirname}/build`,
};

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    title: 'React App',
    template: `${__dirname}/src/index.html`,
  }),

  new DefinePlugin({
    API_URL: JSON.stringify(process.env.API_URL),
  }),
];

webpackConfig.module = {};

webpackConfig.module.rules = [  
  {
    test: /\.(jpg|gif|png|svg)$/,
    use: [
      'file-loader',
    ],
  },
  {
    test: /\.js/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env', 'stage-0', 'react'],
        plugins: ['transform-react-jsx-source'],
        cacheDirectory: true,
      },
    },
  },
];
