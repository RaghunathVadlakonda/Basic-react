const path = require('path');

// dist folder to save/store after bundle
const DIST_DIR = path.resolve(__dirname, "dist");

// src folder for taking files to bundle
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
    entry : SRC_DIR + '/app/index.js',
    output : {
        path :DIST_DIR + '/app',
        filename : 'bundle.js',
        publicPath : '/app/'
    },
    modules : {
        loaders : [
            {
                test:/\.js?/,
                include:SRC_DIR,
                loader: 'babel-loader',
                query : {
                    presets : ["babel-loader","babel-es2015","babel-stage-2"]
                }
            }
        ]
    }
}