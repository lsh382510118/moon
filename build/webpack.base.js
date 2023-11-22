const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const config = require('../public/config')[isDev ? 'dev' : 'build'];

module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'), // 入口文件
  // 打包文件出口
  output: {
    filename: 'static/js/[name].[chunkhash:8].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径, 通常是CDN地址
  },
  mode: "development",
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, '../src')],
        test: /.(ts|tsx)$/,
        use: [
          // 'thread-loader', // 多线程，比较适合大项目，这里不太适合开起来
          {
            loader: 'babel-loader',
            options: {
              // 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
              presets: [
                [
                  "@babel/preset-env",
                  {
                     "useBuiltIns": "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
                     "corejs": 3, // 配置使用core-js低版本
                    }
                  ],
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }]
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  "corejs": 3
                }
              ]
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        include: [path.resolve(__dirname, '../src')],
        test: /\.(le|c)ss$/,
        use: [
          // 'style-loader', 
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    overrideBrowserslist: [
                      ">0.25%",
                      "not dead"
                    ]
                  })
                ]
              }
            }
          }, 'less-loader'
        ],
        exclude: /node_modules/
      },
      {
        test:/.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/fonts/[name].[contenthash:8][ext]', // 加上[contenthash:8]
        },
      },
      {
        test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/images/[name].[contenthash:8][ext]', // 文件输出目录和命名
        },
      },
      {
        test: /.html$/,
        use: 'html-withimg-loader'
      }

    ],
  },
  resolve: {
    
    // modules: [path.resolve(__dirname, '../node_modules')], // 如果用的是pnpm 就暂时不要配置这个，会有幽灵依赖的问题，访问不到很多模块。
    extensions: ['.js', '.tsx', '.ts'],
    modules: ['./src/components', 'node_modules'], //从左到右依次查找
    alias: {
      '@': path.join(__dirname, '../src')
      // 'react-native': '@my/react-native-web' //这个包名是我随便写的哈
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV: JSON.stringify('dev'), //字符串
      FLAG: 'true' //FLAG 是个布尔类型
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
      //个人习惯将css文件放在单独目录下
      //publicPath:'../'   //如果你的output的publicPath配置的是 './' 这种相对路径，那么如果将css文件放在单独目录下，记得在这里指定一下publicPath 
    }),
    //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
      config: config.template,
      inject: true, // 自动注入静态资源
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: '3000', //默认是8080
    hot: true,
    // quiet: false, //默认不启用
    // inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    // stats: "errors-only", //终端仅打印 error
    // overlay: false, //默认不启用
    // clientLogLevel: "silent", //日志等级
    // compress: true //是否启用 gzip 压缩
    proxy: {
      // "/api": "http://localhost:4000"
    }
  }
}