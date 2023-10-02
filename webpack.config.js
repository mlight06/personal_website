const path = require('path');

module.exports = {
  // entry: {
  //   main: path.resolve(__dirname, './frontend/src/index.js'),
  // },
  entry: './frontend/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './frontend/deploy'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|png)$/,
        // type: 'asset/resource',
        exclude: /node_modules/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '/frontend/src/images[name].[ext]',
          //   },
          // },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-transform-runtime',
              ],
            },
          },
          // {
          //   loader: 'url-loader',
          // },
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     bypassOnDebug: true, // webpack@1.x
          //     disable: true, // webpack@2.x and newer
          //     mozjpeg: {
          //       progressive: true,
          //     },
          //   },
          // },
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '/frontend/src/images[name].[ext]',
          //   },
          // },
        ],
      },
      {
        // {
        test: /\.(?:ico|gif|png|jpg|jpeg|pdf)$/i,
        // type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
        // },
      },
    ],
  },
};
