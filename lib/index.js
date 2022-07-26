const Compiler = require('./compiler')
const options = require('../ml.webpack.config')

new Compiler(options).run()
