module.exports = {
  // 应用 id
  id: "7f457c00-050c-11ed-ae14-2d255aaaa495",
  // 应用类型
  type: "app",
  // 打开之后将使用内置的路由引擎，自动处理路由关系，否则需要手动设置路由
  autoRouting: true,
  // 设置路由前缀，通常用于部署到非根目录
  base: "/",
  // 配置路由模式
  mode: "hash",
  // 插件
  plugins: ["@hsui/plugin-lint"],
  // 代理
  proxy: {
    "/api": {
      target: "https://mock.apifox.cn/m1/1300795-0-default", // 需要代理的域名
      changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      pathRewrite: {
        //重写匹配的字段，如果不需要在请求路径上，重写为""
        "^/api": "",
      },
    },
  },
  // 设置静态资源文件打包时的相对路径
  publicPath: "/",
  // 部署配置
  see: {
    // 系统类型
    systemType: "HUI",
  },
  // 使用 Vuex 进行状态管理
  vuex: true,
};
