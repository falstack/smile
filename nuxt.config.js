const qiniuConf = require('./qiniu')
const nodeEnv = process.env.NODE_ENV
const isDev = nodeEnv === 'development'
const ENV = require('./.env')

module.exports = {
  mode: 'universal',
  env: {
    API_URL: ENV.BASE_URL.API_URL[nodeEnv],
    API_URL_BROWSER: ENV.BASE_URL.API_URL_BROWSER[nodeEnv],
    SOCKET_HOST: ENV.SOCKET_HOST[nodeEnv]
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: val => val || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover'
      },
      {
        name: 'format-detection',
        content: 'telephone=no,email=no,address=no'
      }
    ],
    link: [
      { rel: 'dns-prefetch', href: 'https://file.calibur.tv' },
      { rel: 'dns-prefetch', href: 'https://m1.calibur.tv' },
      { rel: 'preconnect', href: 'https://api.calibur.tv' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://file.calibur.tv/favicon.ico'
      }
    ],
    script: [
      {
        src: '//qqq.gtimg.cn/miniprogram/webview_jssdk/qqjssdk-1.0.0.js',
        type: 'text/javascript'
      },
      {
        src: '//res2.wx.qq.com/open/js/jweixin-1.4.0.js',
        type: 'text/javascript',
        async: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/global.scss', '~/assets/font/iconfont.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios.all.js', '~/plugins/components.all.js', '~/plugins/prototypes.all.js', '~/plugins/prototypes.client.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
  ],

  styleResources: {
    scss: ['./assets/css/var.scss', './assets/css/mixin.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  router: {
    extendRoutes(routes) {
      for (const route of routes) {
        const props = /:/.test(route.path)
        route.props = props
        if (route.children) {
          for (const item of route.children) {
            item.props = props
          }
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    loaders: {
      cssModules: {
        localsConvention: 'camelCase'
      }
    },
    publicPath: isDev ? '/_nuxt/' : `${qiniuConf.host}${qiniuConf.key_prefix}`,
    babel: {
      presets: [
        [
          '@nuxt/babel-preset-app',
          {
            corejs: { version: 3 }
          }
        ]
      ],
      plugins: [
        [
          'component',
          {
            libraryName: '@calibur/sakura',
            styleLibraryName: 'theme-sakura'
          }
        ]
      ]
    },
    postcss: {
      plugins: {
        'postcss-px-to-viewport': {
          viewportWidth: 375,
          unitPrecision: 2
        }
      },
      preset: {
        autoprefixer: {
          remove: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
