module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/style/main.scss";
        `,
      },
    },
  },
};