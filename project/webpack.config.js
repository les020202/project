const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path=require("path");
const { Template, Chunk } = require("webpack");

module.exports={
    mode:"development",

    entry:{
        index:"./PhoneBookMain.js",
        pc:"./detail.js",
    }, 

    output:{
        path:path.resolve(__dirname,"PhoneBookMain"),   
        filename:"[name].js",
    },

    module:{
        rules:[
            {
                test: /\.css$/i,  
                use: [MiniCssExtractPlugin.loader,"css-loader"]
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./PhoneBookMain.html',
            filename:'PhoneBookMain.html',
            Chunks:['PhoneBookMain','detail']
        }),
        new HtmlWebpackPlugin({
            template:'./detail.html',
            filename:'detail.html',
            Chunks:['detail']
        }),
        new MiniCssExtractPlugin(),
    ]
}
