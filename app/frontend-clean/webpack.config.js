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
    devServer: {
      proxy: {
        '/api': 'http://localhost:5000',
      }
    },
    module: {
        rules: [
          {
            // use babel-loader to transpile all files (except node_modules) ending with .js or .jsx  
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
          { // for style files
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          { // for image files
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
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