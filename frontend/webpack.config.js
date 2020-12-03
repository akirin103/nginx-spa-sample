const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.js',

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'bundle.js',
  },
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: 'dist',
    open: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,  // .jsxも対象に含む
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react' //ReactのPresetを追加
            ],
            plugins: ['@babel/plugin-syntax-jsx'] //JSXパース用
          }
        }
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']  // .jsxも省略可能対象にする
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
