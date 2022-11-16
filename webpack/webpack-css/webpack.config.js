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
      }
    ]
  }
}
