const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        plus: './index-plus.ts',
        // minus: './index-minus.ts'
    },
    target: 'web',
    mode: 'none',
    // mode: 'production',
    resolve: {
        extensions: ['.ts'],
        alias: {
            // lodash: path.resolve(__dirname, 'node_modules/lodash-es/lodash.js')
        }
    },
    externals: {
        // 'lodash/subtract': '_.subtract',
        // 'lodash-es': '_'
    },
    optimization: {
        runtimeChunk: 'single',
        sideEffects: true, // <= get rid unused utility function from external library
        usedExports: true, // <= treat exports as independent entities
        minimize: true, // <= use specified minimizer to cleanup the output
        // minimizer: [
        //     new TerserPlugin({
        //         parallel: true,
        //         terserOptions: {
        //             compress: {
        //                 unused: true // <= get rid of unused if available
        //             },
        //             output: {
        //                 beautify: true
        //             }
        //         }
        //     })
        // ],
        minimizer: [
            (compiler) => {
            //   const TerserPlugin = require('terser-webpack-plugin');
            // console.log('[][][][][][]', compiler);
            
              new TerserPlugin({ 
                terserOptions: {
                compress: {
                    unused: true // <= get rid of unused if available
                },
                output: {
                    beautify: true
                }}
              }).apply(compiler);
            }
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: [
                    info => {
                        console.log('22222222',info);
                        return {
                            loader: "awesome-typescript-loader"
                        };
                    },
                    // info => {
                    //     console.log('1111111111', info);
                    //     return {
                    //         loader: "ts-loader"
                    //     };
                    // }
                ]
            }
        ]
    }
}