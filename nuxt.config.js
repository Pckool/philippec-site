
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  ssr: true,
  target: 'server',
  telemetry: true,
  components: [
		'~/components',
		'~/components/photography',
		'~/components/webdev',
		'~/components/main',
		'~/components/general',
	],
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Philippe Clesca' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'How Can I Help You?' || process.env.npm_package_description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://kit.fontawesome.com/17cd5d7c90.js"}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/overlayimage.scss',
    '~/static/fonts/Scilla-webfont/stylesheet.css',
    '~/static/fonts/Archia-Regular/stylesheet.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/composition-api',
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  serverMiddleware: [
    '~/api/contact'
  ],
  server: {
    port: process.env.PORT || 8080,
    host: "0.0.0.0"
  },
  loading: {
    continuous: true,
    
  },
  loadingIndicator: {
    name: 'pulse',
    color: '',
  }
}
