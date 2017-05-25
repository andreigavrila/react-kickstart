module.exports = {
  entry: './assets/js/index.js',
  output: {
    filename: 'dist/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        loader : 'babel-loader'
      }
    ]
  }
};