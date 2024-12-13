const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  chainWebpack: config => {
    // Garante que apenas uma instância do html-webpack-plugin seja configurada
    config.plugin('html').tap(args => {
      args[0].title = 'library-frontend';
      args[0].template = './public/index.html';
      args[0].filename = 'index.html';
      return args;
    });
  },
  configureWebpack: {
    output: {
      clean: true, // Limpa o diretório antes do build
    },
  },
});
