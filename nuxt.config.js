export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
    ],
    script: [
     
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/flag.js',mode:'client'},
    {src: '~/plugins/share.js',mode:'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/color-mode'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-social-sharing/nuxt',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-material-design-icons-iconfont',
    	[
			'nuxt-i18n',
			{
				locales: [
					{
						code: 'en',
						name: 'English',
						file: 'en.js',
						iso: 'en'
					},
					{
						code: 'kh',
						name: 'khmer',
						file: 'kh.js',
						iso: 'kh'
					}
				],
				lazy: true,
				defaultLocale: 'kh',
				langDir: 'lang/'
				// vueI18nLoader: true
			}
		],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8000/api/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: {
    color: '#FD7237',
  },
   loadingIndicator: {
    name: 'wandering-cubes',
    color: '#FD7237',
    background: 'white'
  },
}
