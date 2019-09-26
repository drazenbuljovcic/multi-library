module.exports = api => {
  api.cache(false);
  console.log(api)
  return {
    "sourceMaps": 'inline',
    "ignore": [
      "src/**/*.spec.js",
      "src/**/*.test.js",
    ],
    "presets": [
      [
        "@babel/preset-env",
        { modules: false },
      ],
    ],
    "plugins": [
      [
        "@babel/plugin-transform-runtime",
        {
          "absoluteRuntime": false,
          "corejs": false,
          "helpers": false,
          "regenerator": true,
          "useESModules": false,
        },
      ],
      [
        "@babel/plugin-transform-modules-commonjs",
      ],
    ],
  };
};
