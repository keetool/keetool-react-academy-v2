const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    output: {
        publicPath: "/",
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000,
        historyApiFallback: true,
        stats: {
            children: false
        },
        host: '0.0.0.0',
        public: 'localhost:3000',
        disableHostCheck: true
    }
});