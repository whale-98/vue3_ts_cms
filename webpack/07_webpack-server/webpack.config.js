const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'web',
  mode:'development',
  devtool:'source-map',
  entry:"./src/main.js",
  output:{
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js"
  },
  devServer: {
    static: {
      directory: './public'
    },
    hot: true,
    compress: true
  },
  module:{
    rules:[
      {
        test: /\.(css|less)$/,
        use:[
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "postcss-loader"},
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|fig|svg)$/i,        type: 'asset',
        generator:{
          filename: "img/[name].[hash:6][ext]"
        },
        parser:{
          dataUrlCondition:{
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new DefinePlugin({
      BASE_URL:"'123'"
    }),
    new CopyWebpackPlugin({
      patterns:[
        {
          from: "public",
          to:"./",
          globOptions:{
            ignore:[
              "**/index.html"
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
}
