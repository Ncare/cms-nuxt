module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '旧时光',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '以梦为马，莫负韶华' },
      { hid: 'keywords', name: 'keywords', content: '前端, 读书, Vue,' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  css: [
    { src: '~assets/index.less', lang: 'less' }
  ],

  plugins: [
    { src: '~/plugins/clickOutside.js', ssr: false },
    { src: '~/plugins/filter.js'}
  ],

  router: {
    middleware: ['layout']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    postcss: [
      require('postcss-nested')(),
      require('postcss-hexrgba')(),
      require('postcss-responsive-type')(),
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],

    styleResources: {
      less: ['./assets/variable.less'],
      options: {}
    }
  }
}
