const path = require('path');

module.exports = 
{
  cache: true,
  devtool: 'inline-source-map',
  entry: {
      main: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ 
          loader: "ts-loader", options: { 
            transpileOnly: true
          } 
        }]
      },
    ]
  }
};
