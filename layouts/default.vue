<template>
    <div>
      
        <Header></Header>
      
        <Nuxt></Nuxt>

        <Footer></Footer>
     
    </div>
</template>
<script>
export default{
    components: {
      LazyHydrate,
      Header: () => import('~/components/Header/index.vue'),
      Footer: () => import('~/components/Footer/index.vue')
    },
    head () {
      return {
        title: "រ៉ុង ម៉ារីន | Rong Marin",
        // htmlAttrs: {
        //   lang: this.$i18n.locale
        // },
        meta: [
          {
            hid: "og:title",
            property: "og:title",
            content: "Rong Marin | Web Developer",
          },
          { 
            hid: 'og:image', property: 'og:image', content: require('@/static/image/logo.png')
          },
          {
            hid: "description",
            name: 'description',
            property: "description",
            content: "Rong Marin website is clean and concise. This web developer portfolio consists of three sections – the homepage with his bio, a dedicated project page, and a contact page.An interesting aspect of his portfolio’s design is that visitors can switch between light and dark themes by clicking on the options in the lower-left corner of the website.",
          },
          { 
            hid: 'og-url', property: 'og:url', 
            content: this.web_url
          },
        ]
      }
    },
    data(){
        return {
          api_key: process.env.BASE_URL,
        }
    },
    methods: {
        // switchLang(locale){
        //   if (this.$i18n.locale !== locale) {
        //       this.$i18n.locale = locale;
        //       //cookie.set('lang',locale)
        //   }
        // },
        onSearch(){
          this.$router.push({path: `/Search/${this.search}`});
        }
    }
   
}
</script>
<style>
@font-face {
  font-family: Hanuman;
  src: url('../assets/fonts/KantumruyPro-VariableFont_wght.ttf');
}
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-family: Hanuman !important;
}
.dark-mode body {
  background-color: #091a28 ;
  color: #ebf4f1;
}
.footer-dark{
  background-color: #1a2130;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.dropdown .nav-link{
  padding: 0px !important;
  margin-top: 10px;
  margin-left:5px;
}
li a.nuxt-link-exact-active {
    color: #FD7237 !important;
  }
  
</style>