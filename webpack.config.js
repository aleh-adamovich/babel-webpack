const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProd = env.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(jpeg|jpg|png|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Test Label',
        template: 'public/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'name-[hash:8].css'
      })
    ],

    devServer: {
      open: true
    }
  }
}
