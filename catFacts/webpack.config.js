const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'catsfacts.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};