/**
 * mode development production
 * entry 入口文件
 * output path filename  打包输出路径
 * devtool source-map
 * module rules loader
 * plugins 插件
 * devServer 开发服务器 
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src/app.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    devtool: 'source-map',

    // 配置loader的查找路径
    resolveLoader:{
        modules:[
            'node_modules',
            resolve(__dirname,'loaders')
        ],
    },
    
    module: {
        rules: [
            {
                test: /\.tpl$/,
                use: [
                    'babel-loader',   // 用babel-loader处理下面转化的
                    // 配置自己的loader
                    {
                        loader: 'tpl-loader', // 使用tpl-loader转化
                        options: {
                            log: true
                        }
                    }
                ]
            }
        ]
    },
    
    // 插件是数组
    plugins:[
        //HtmlWebpackPlugin可以把打包好的文件当成脚本，然后index.html是默认的模板
        new HtmlWebpackPlugin({
            template:resolve(__dirname,'index.html')
        })
    ],
    devServer:{
        port:'3333'
    }
}