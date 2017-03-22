// work with all paths in a cross-platform manner
const path = require('path');

// plugins covered below
const { ProvidePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// configure source and distribution folder paths
const srcFolder = 'src';
const distFolder = 'dist';

// merge the common configuration with the environment specific configuration
module.exports = {

    // entry point for application
    entry: {
        'app': path.join(__dirname, srcFolder, 'ts', 'app.tsx')
    },

    // allows us to require modules using
    // import { someExport } from './my-module';
    // instead of
    // import { someExport } from './my-module.ts';
    // with the extensions in the list, the extension can be omitted from the 
    // import from path
    resolve: {
        // order matters, resolves left to right
        extensions: ['', '.js', '.ts', '.tsx', '.json'],
        // root is an absolute path to the folder containing our application 
        // modules
        root: path.join(__dirname, srcFolder, 'ts')
    },

    module: {
        loaders: [
            // process all TypeScript files (ts and tsx) through the TypeScript 
            // preprocessor
            { test: /\.tsx?$/,loader: 'ts-loader' },
            // processes JSON files, useful for config files and mock data
            { test: /\.json$/, loader: 'json' },
            // transpiles global SCSS stylesheets
            // loader order is executed right to left
            {
                test: /\.scss$/,
                exclude: [path.join(__dirname, srcFolder, 'ts')],
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            // process Bootstrap SCSS files
            {
                test: /\.scss$/,
                exclude: [path.join(__dirname, srcFolder, 'scss')],
                loaders: ['raw', 'sass']
            }
        ]
    },

    // configuration for the postcss loader which modifies CSS after
    // processing
    // autoprefixer plugin for postcss adds vendor specific prefixing for
    // non-standard or experimental css properties
    postcss: [ require('autoprefixer') ],

    plugins: [
        // provides Promise and fetch API for browsers which do not support
        // them
        new ProvidePlugin({
            'Promise': 'es6-promise',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        // copies image files directly when they are changed
        new CopyWebpackPlugin([{
            from: path.join(srcFolder, 'images'),
            to: path.join('..', 'images')
        }]),
        // copies the index.html file, and injects a reference to the output JS 
        // file, app.js
        new HtmlWebpackPlugin({
            template: path.join(__dirname, srcFolder, 'index.html'),
            filename:  path.join('..', 'index.html'),
            inject: 'body',
        })
    ],

    // output file settings
    // path points to web server content folder where the web server will serve 
    // the files from file name is the name of the files, where [name] is the 
    // name of each entry point	
    output: {
        path: path.join(__dirname, distFolder, 'js'),
        filename: '[name].js',
        publicPath: '/js'
    },

    // use full source maps
    // this specific setting value is required to set breakpoints in they
    // TypeScript source in the web browser for development other source map
    devtool: 'source-map',

    // use the webpack dev server to serve up the web application
    devServer: {
        // files are served from this folder
        contentBase: 'dist',
        // support HTML5 History API for react router
        historyApiFallback: true,
        // listen to port 5000, change this to another port if another server 
        // is already listening on this port
        port: 5000,
        // proxy requests to the JSON server REST service
        proxy: {
            '/widgets': {
                // server to proxy
                target: 'http://localhost:3010/widgets'
            },
            '/cars': {
                // server to proxy
                target: 'http://localhost:3010/cars'
            }            
        }
    }

};
