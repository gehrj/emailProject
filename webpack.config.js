var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './browser/react/index.js',
    output: { path: __dirname, filename: './public/bundle.js'},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};


// var webpack = require('webpack');

// module.exports = {
//   entry: './browser/react/index.js',
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js'
//   },
//   context: __dirname,
//   devtool: 'source-map',
//   module: {
//     loaders: [
//       {
//         test: /jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// };
