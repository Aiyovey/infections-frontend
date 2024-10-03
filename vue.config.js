module.exports = {
  publicPath: "./",
  devServer: {
    client: {
      overlay: false,
    },
    port: 80,
    open: true,
    proxy: { //配置跨域
      '/api': {
        target: 'http://localhost:8080',  //本地
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
