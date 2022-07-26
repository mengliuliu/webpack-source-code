module.exports = {
    trailingComma: 'all', //对象的最后一个属性末尾也会添加 , ，比如 { a: 1, b: 2 } 会格式为 { a: 1, b: 2, } 。
    tabWidth: 4, //缩进大小
    semi: false, // 分号是否添加
    singleQuote: true, //是否单引号，绝壁选择单引号啊，不会真有人还用双引号吧？不会吧！😏
    // jsxSingleQuote: true, // jsx 语法下是否单引号，同上。
    endOfLine: 'lf', // 与 .editorconfig 保持一致设置。
    printWidth: 120, // 单行代码最长字符长度，超过之后会自动格式化换行。
    bracketSpacing: true, //在对象中的括号之间打印空格， {a: 5} 格式化为 { a: 5 } 。
    arrowParens: 'always', //箭头函数的参数无论有几个，都要括号包裹。比如 (a) => {} ，如果设为 avoid ，会自动格式化为 a => {} 。
}
