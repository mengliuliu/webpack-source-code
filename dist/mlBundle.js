;(function (modules) {
    function require(fileName) {
        const fn = modules[fileName]
        const module = { exports: {} }
        fn(require, module, module.exports)
        return module.exports
    }
    require('/Users/mengliu/Desktop/projects/webpack-source-code/src/index.js')
})({
    '/Users/mengliu/Desktop/projects/webpack-source-code/src/index.js': function (require, module, exports) {
        'use strict'

        var _utils = require('./utils.js')

        var webpack = require('webpack')

        document.write((0, _utils.print)('world'))
    },
    './utils.js': function (require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
            value: true,
        })
        exports.print = print

        // import { n } from './another.js'
        // console.log(n)
        function print(name) {
            return '你好' + name
        }
    },
})
