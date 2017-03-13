const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['main.js'],
  },

  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'dist/js/[name].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      xhtml: true,
      template: 'pug-loader?pretty!src/index.pug',
    }),
  ],

  devServer: {
    stats: {
      colors: true, cached: false, children: false, chunks: false, modules: false,
    },
  },


  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'src/components'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.vue'],
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
  },


  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',

    }, {
      test: /\.vue$/,
      include: path.resolve(__dirname, 'src/components'),
      loader: 'vue-loader',
      options: {
        postcss: [
          autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'] }),
        ],
      },

    }, {
      // test: /\.(jpe?g|png|gif)/,
      include: path.resolve(__dirname, 'src/img'),
      loader: 'file-loader',
      options: {
        name: 'dist/[path][name].[ext]',
      },
    }],
  },
};

module.exports = config;
