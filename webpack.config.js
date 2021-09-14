const path = require('path');
const sassPath = path.join(__dirname, './src/index.scss')

module.exports = {
  entry: './src/index.tsx',
  module: {
    test: /\.scss$/i,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, sassPath),
            ],
          },
          prependData: `        
                    @import "${path.resolve(__dirname, sassPath)}";
                `,
        },
      },
    ],
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};