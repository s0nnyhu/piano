const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "~": path.resolve(__dirname, 'src/'),
            }
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Home - Piano';
                args[0].template = './public/index.html';
                return args;
            })
    }
}
