const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './frontend/src/index.js'),
  },
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
        exclude: /node_modules/,
        use: [

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
          // },
        ],
      },
    ],
  },
};
