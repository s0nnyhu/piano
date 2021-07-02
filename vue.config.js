const path = require('path');
module.exports = {
    publicPath: '/piano/',
    configureWebpack: {
        resolve: {
            alias: {
                "~": path.resolve(__dirname, 'src/'),
            }
        }
    },
}
