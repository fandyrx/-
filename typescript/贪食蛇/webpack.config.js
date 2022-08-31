const path = require ("path")
const  HTMLWebpackPlugin = require ("html-webpack-plugin")

//所有配置写在这
module.exports = {
 //指定入口文件
  entry:"./src/index.ts",
  //指定打包文件所在目录
  output:{
    clean:true,
    //打包文件的目录指定
    path:path.resolve(__dirname,"dist"),
    //打包后的文件名
    filename:'bundle.js',
    environment:{
      arrowFunction:false
    }
  },

  //webpack打包的使用模块
  module:{
    //指定加载跪着
    rules:[
      {
        // 指定规则生效的文件
        test:/\.ts$/,//正则匹配 .ts文件
        use:[
         {
          loader:"babel-loader",
          options:{
            presets:[
              [ 
                // 指定环境的插件
                "@babel/preset-env",
                {
                  //配置信息
                  targets:{
                    "chrome":"88"
                  },
                  "corejs":"3",
                  "useBuiltIns":"usage"
                }
              ]
            ]
          }
         },
          "ts-loader"],
        exclude:/node_modules/

      },
      {
        //设置less的处理
        test:/\.less$/,
        use:[
          //loader执行顺序从下到生
          "style-loader",
          "css-loader",
          //postcss
          {
            loader:"postcss-loader",
            options:{
           
              postcssOptions:{
                plugins:[
                  [
                    'postcss-preset-env',
                    {
                      browsers:'last 5 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins:[
    new  HTMLWebpackPlugin({
      // title:'自定义html标题'
      template:"./src/index.html"
    }),
  ],
  resolve:{
    //设置可引入模块
    extensions:['.ts','.js',".less"]
  },
  
  mode:'production'
}