const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    //entry: './src/style/style.scss',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
    },
    mode: 'production',
    //devtool: 'inline-source-map',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use:["style-loader","css-loader","sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [{
                loader:'image-webpack-loader',
                options:{
                    pngquant:{
                        quality:[.80, .85],
                    },
                },
            }],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            ],
        },
    plugins:[
        new CopyPlugin({
            patterns: [
                {from: 'src/img', to: 'img'},
            ]
        }),
    ],

};