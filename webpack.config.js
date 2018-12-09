module.exports = {
  entry: ['./src/index.js'],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8082,
    watchContentBase: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    },
    historyApiFallback: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.scss$/,
      loader: "scss-loader!style-loader!css-loader"
    },
    {
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    },
    {
      test: /\.jpg$/,
      loader: "file-loader"
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    },
    {
      test: /\.svg$/,
      exclude: /node_modules/,
      loader: 'svg-react-loader',
    },
    {
      test: /\.gif$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    }
    ]
  }
};