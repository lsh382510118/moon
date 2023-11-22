module.exports = {
  "parser": "@typescript-eslint/parser",
  env: {
      node: true, // 启用node中全局变量
      browser: true  // 启用浏览器中全局变量
  },
  // 继承 Eslint 规则
  extends: ['eslint:recommended'],
  parserOptions: { // 解析选项
      ecmaVersion: 6, // ES 语法版本
      sourceType: "module", // ES 模块化
      ecmaFeatures: { // ES 其他特性
        jsx: true // 如果是 React 项目，就需要开启 jsx 语法
      }
  },
  "plugins": [
    "@typescript-eslint",
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    'no-var': 'off',
    'no-console': 'off',
    "import/no-unresolved": [2, { "commonjs": true, "amd": true }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2, //  `"error"` 或 `2`
  }
}

