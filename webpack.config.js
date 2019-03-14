const path = require('path');

module.exports = {
  entry: './js/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'es6-environment.bundle.js'
  }
};
