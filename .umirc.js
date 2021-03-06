export default {
  history: 'hash',
  hash: true,

  publicPath: "./",
  proxy: {
    "/api": {
      "target": "http://localhost:8888/",
      "changeOrigin": true,
      "pathRewrite": {"^/api": ""}
    }
  },
  theme: {
    "primary-color": "#30344d",
    // '@icon-url': '"/iconfont/iconfont"'
  },
  plugins:[
    ['umi-plugin-react', {
      dva: true,
      antd: true,  // antd 默认不开启，如有使用需自行配置
      routes: {   //基于 umi-plugin-routes 实现，用于批量修改路由。
        exclude: [/models\//],
      },
      polyfills: ['ie9'],//目前只能配置 ['ie9']，实现一键兼容到 IE9。
      locale: {},
      library: 'react',
      hardSource: false,
      dynamicImport: true,
      // pwa: {},
      // hd: true,
      fastClick: true
    }],
  ]

}
