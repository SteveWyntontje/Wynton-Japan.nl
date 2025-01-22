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
