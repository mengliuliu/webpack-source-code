const path = require('path')

module.exports = {
    mode: 'none',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
}
