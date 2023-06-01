const path = require('path');

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'migisapp.bundle.js'
  },
  target: 'node',
}