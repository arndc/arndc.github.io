const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['**/*', '!.git', '!.gitignore'],
            }),
            new CopyPlugin(['README.md', 'CNAME']),
        ],
    },
};
