<template>
    <b-container class="main-slide" >
        <b-row v-if="video_loading" class="mt-5" >
            <b-col class="mb-4" cols="12" xl="4" lg="4" md="6" sm="6" v-for="i in 6" :key="i">
            <div class="card-content-dg p-2">
                <b-skeleton-img height="200px"></b-skeleton-img>
                <b-skeleton animation="wave" class="mt-1" width="100%"></b-skeleton>
                <b-skeleton animation="wave" width="95%"></b-skeleton>
                <b-skeleton animation="wave" width="100%"></b-skeleton>
            </div>
            </b-col>
        </b-row>

        <b-row v-else>
            <b-col class=" mt-5" cols="12" xl="4" lg="4" md="6" sm="6" v-for="item in videos" :key="item" >
                <div class="card-content-dg p-2">
                <iframe width="100%" style="height:15rem" :src="item['url']" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p :class="$colorMode.value=='dark'?'text-light-mode' : 'text-light-mode'" class="pt-2">
                   {{ item['title'] }}
                </p>
            </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
 export default{
    colorMode: 'light',
    head () {
    return {
      title: "KroIT | Videos | វីដេអូ",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "KroIT | Video Motivation | Etec Center",
        },
        { 
          hid: 'og:image', property: 'og:image', content: require('@/assets/image/logo.jpg')
        },
        {
          hid: "og:description",
          name: 'og:description',
          property: "og:description",
          content: "ETEC I.T Training Center is a School located in Phnom Penh, KH. The business is listed under  school category.It has received 1 reviews with an average rating of 3 stars.",
        },
        { 
          hid: 'og-url', property: 'og:url', 
          content: this.web_url
        },
      ]
    }
    },
    data() {
        return {
           videos: [],
           video_loading: true,
           web_url: process.env.WEB_URL+"/Video"
        }
    },
    created(){
        this.get()
    },
    methods:{
        get(){
            this.$axios.$get('getAllVideo').then(response => {
                this.videos = response.data
                this.video_loading = false
            })
        },
        getNameByLocalByLang(name, local = 'latin_name') {
				if (name != '') {
					try {
						name = JSON.parse(name)
						if (this.$i18n.locale == 'en') {
							return name.latin_name
						} else {
							return name.local_name
						}
					} catch (e) {
						return name
					}
				} else {
					return null
				}
		},
    }
 }
</script>