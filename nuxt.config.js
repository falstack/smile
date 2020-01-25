const nodeEnv = process.env.NODE_ENV
const isDev = nodeEnv === 'development'

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover'
      },
      {
        name: 'format-detection',
        content: 'telephone=no,email=no,address=no'
      },
      {
        name: 'applicable-device',
        content: 'mobile'
      },
      { name: 'renderer', content: 'webkit|ie-comp|ie-stand' },
      { name: 'force-rendering', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }
    ],
    link: [
      { rel: 'dns-prefetch', href: 'https://file.calibur.tv' },
      { rel: 'dns-prefetch', href: 'https://m1.calibur.tv' },
      { rel: 'preconnect', href: 'https://app.calibur.tv' },
      { rel: 'preconnect', href: 'https://api.calibur.tv' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://file.calibur.tv/favicon.ico'
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
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/components.all.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    publicPath: isDev ? '/_nuxt/' : 'https://file.calibur.tv/smile/',
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
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
