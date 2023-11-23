const isDEV = process.env.NODE_ENV === 'development'; // 是否是开发模式

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
        "corejs": 3 // 配置使用core-js使用的版本
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ];

  const plugins = [
    isDEV && require.resolve('react-refresh/babel'), // 如果是开发模式,就启动react热更新插件
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ].filter(Boolean); // 移除数组中的 falsy 值

  return {
    presets,
    plugins
  };
};
