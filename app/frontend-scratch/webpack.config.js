const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // where webpack will start bundling
    entry: path.join(__dirname, "src", "index.js"),
    // output of bundled file
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
          {
            // use babel-loader to transpile all files (except node_modules) ending with .js  
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                // used to transpile ES2015+ and JSX
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
        ]
      },
    plugins: [
        // injects script tag into /public/index.html and moves it to /dist
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
}