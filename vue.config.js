const path = require('path')
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve('examples')) 
            .set('~', path.resolve('packages'));
        config.module
            .rule('js')
            .include.add(/packages/)
            .end()
            .include.add(/examples/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options;
            });
    }
}