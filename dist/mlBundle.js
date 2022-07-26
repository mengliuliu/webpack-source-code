
        (function(modules) {
          function require(fileName) {
            const fn = modules[fileName];
            const module = { exports:{}};
            fn(require, module, module.exports)
            return module.exports
          }
          require('E:\Desktop\projects\webpack-source-code\src\index.js')
        })({'E:\Desktop\projects\webpack-source-code\src\index.js' : function(require, module, exports) {"use strict";

var _utils = require("./utils.js");

document.write((0, _utils.print)('world'));},'./utils.js' : function(require, module, exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

function print(name) {
  return "你好" + name;
}},})
    