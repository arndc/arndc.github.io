const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.module
            .rule('scss')
            .oneOf('vue')
            .use('resolve-url-loader')
            .loader('resolve-url-loader').options({ keepQuery: true })
            .before('sass-loader');
    },
    configureWebpack: {
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['**/*', '!.git', '!.gitignore'],
            }),
            new CopyPlugin(['README.md', 'CNAME']),
        ],
        resolve: {
            alias: {
                '~theme': path.resolve(__dirname, 'src/assets/themes'),
            },
        },
    },
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                prependData: `@import "~theme/main";`,
            },
        },
    },
};
