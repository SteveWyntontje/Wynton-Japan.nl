const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig(
  process.env.NODE_ENV === "production"
    ? {
        transpileDependencies: true,
        publicPath: "https://storage.googleapis.com/wynton-site",
        assetsDir: "assets",
        outputDir: "dist",
      }
    : {
        transpileDependencies: true,
      }
);
module.exports = {
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  }
}