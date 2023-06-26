// 人物属性
const path = require('path');
// 插件 html-webpack-plugin 让webpack打包后生成html文件并自动引入打包后的js  命令:yarn add html-webpack-plugin  -D
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 配置默认出口和入口
    entry: './src/index.js',//入口  ./当前文件所在的文件夹
    output: {
        path: path.resolve(__dirname, 'dist'),//出口  当前路径 dist文件夹
        // 配置文件路径前的公共地址,默认为空是静态资源  
        // 公共路径(publicPath),该配置能帮助你为项目中的所有资源(是所有资源)指定一个基础路径
        // publicPath: '',  不太懂，这个居然会影响到下面自动打包的访问
        filename: 'bundle.js',//出口文件名
    },
    mode: 'development', // 设置mode
    // 配置插件  
    plugins: [
        // 配置自动生成html的插件
        new HtmlWebpackPlugin({
            template: './demo/index.html' // 以此html文件为模板为基准生成打包后的html文件
        })
    ],
    // asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
    // asset/inline 导出一个资源的 data URI(base64)。之前通过使用 url-loader 实现。
    // asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
    // asset 在导出一个 data URI(base64) 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。
    module: {//加载器 固定不能改
        rules: [//规则  固定不能改
            {//一个具体的规则对象
                // 支持打包css文件
                test: /\.css$/i,//匹配.css结尾的文件
                use: ["style-loader", "css-loader"],//让webpack使用者2个loader处理css文件
                // 从右到左的，所以不能颠倒顺序
                // css-loader:webpack 解析css文件把css代码一起打包进js中
                // style-loader ：css代码插入到DOM中(style标签)
            },
            {
                // 支持less文件
                test: /\.less$/,
                // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
                use: ["style-loader", "css-loader", 'less-loader']
            },
            // 支持打包图片格式  仅适用于webpack5版本
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset'//匹配上面的文件后，webpack会把他们当作静态资源处理打包
                //如果设置的是asset模式
                // 以8kb大小区分图片文件 大于8kb的直接在打包后的文件夹中
                // 小于8kb的，把图片文件转base64 导入js文件
            },
            // 支持字体图标打包
            { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
                test: /\.(eot|svg|ttf|woff|woff2)$/,//匹配相应的字体图标文件 
                type: 'asset/resource',
                generator: {//生成文件名字 -定义规则
                    filename: 'font/[name].[hash:6][ext]'
                }
            },
            // 兼容js
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,//不去匹配这些文件夹下的文件
                use: {
                    loader: 'babel-loader',//使用这个loader文件
                    options: {
                        presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                    }
                }
            },
        ],
    },
    // 用 devServer 启动一个开发服务器 
    devServer: {
        //配置使用当前的工作目录来提供静态资源
        static: {
            publicPath: '/public',//前缀，此静态目录就为 ：http://localhost:8080/public
            directory: './',
        }
    }
}
console.log(__dirname)