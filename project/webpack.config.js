const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path=require("path");
const { Template, Chunk } = require("webpack");

module.exports={
    mode:"development",

    entry:{
        PhoneBookMain:"./PhoneBookMain.js",
        detail:"./detail.js",
        detail_ch:"./detail_ch.js",
        detail2:"./detail2.js",
        PhoneBookMain_ch:"./PhoneBookMain_ch.js",
        PhoneBookMain_de:"./PhoneBookMain_de.js",
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
            Chunks:['PhoneBookMain','detail','detail_ch','PhoneBookMain_ch','PhoneBookMain_de']
        }),
        new HtmlWebpackPlugin({
            template:'./detail.html',
            filename:'detail.html',
            Chunks:['detail']
        }),
        new HtmlWebpackPlugin({
            template:'./detail_ch.html',
            filename:'detail_ch.html',
            Chunks:['detail_ch']
        }),
        new HtmlWebpackPlugin({
            template:'./detail2.html',
            filename:'detail2.html',
            Chunks:['detail2']
        }),
        new HtmlWebpackPlugin({
            template:'./PhoneBookMain_ch.html',
            filename:'PhoneBookMain_ch.html',
            Chunks:['PhoneBookMain_ch']
        }),
        new HtmlWebpackPlugin({
            template:'./PhoneBookMain_de.html',
            filename:'PhoneBookMain_de.html',
            Chunks:['PhoneBookMain_de']
        }),
        new MiniCssExtractPlugin(),
    ]
}