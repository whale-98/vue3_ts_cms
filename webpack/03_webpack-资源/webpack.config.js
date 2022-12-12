const path = require('path')

module.exports = {
  entry:"./src/main.js",
  output:{
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
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
          // {
          //   loader: "postcss-loader",
          //   options:{
          //     postcssOptions: {
          //       plugins:[
          //         require('autoprefixer')
          //       ]
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.(png|jpe?g|fig|svg)$/i,
        type: 'asset',
        generator:{
          filename: "img/[name].[hash:6][ext]"
        },
        parser:{
          dataUrlCondition:{
            maxSize: 100 * 1024
          }
        }
      }
    ]
  }
}
