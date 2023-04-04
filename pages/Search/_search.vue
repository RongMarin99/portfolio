<template>
    <b-container class="main-slide" >
        <b-row v-if="search_loeading" class="mt-5">
            <b-col class="mb-4" cols="12" xl="4" lg="4" md="6" sm="6" v-for="i in 6" :key="i">
                <div class="card-content-dg p-2">
                   <b-overlay
                        id="overlay-background"
                        show
                        spinner-variant="orange"
                        variant="transparent"
                        opacity=0.85
                        blur="0px"
                        rounded="sm"
                      >
                      <b-skeleton animation="wave" width="95%"></b-skeleton>
                      <b-skeleton animation="wave" width="85%"></b-skeleton>
                      <b-skeleton-img height="200px"></b-skeleton-img>
                      <b-skeleton animation="wave" class="mt-1" width="25%"></b-skeleton>
                      <b-skeleton animation="wave" width="85%"></b-skeleton>
                      <b-skeleton animation="wave" width="95%"></b-skeleton>
                    </b-overlay>
                </div>
              </b-col>
        </b-row>

        <b-row v-else class="mt-5">
            <b-col cols="12" xl="4" lg="4" md="6" sm="6" v-for="item in result" :key="item.index" class="mb-4">
                <nuxt-link :to="`/Detail/${item.id}/${item.type}`">
                <div class="card-content-dg p-2">
                    <span class="mb-0 mt-0" style="font-size:13px">
                        {{ dateFormat(item['created_at']) }}
                    </span>
                    <h6 class="three-line title">
                        {{ getNameByLocalByLang(item['title']) }}
                    </h6>
                    <figure class="position-relative">
                    <b-badge class="position-absolute orange-bg" style="top:10px;left:10px">
                        {{ $t('article') }}
                    </b-badge>
                    <nuxt-img 
                      loading="lazy"
                      format="webp"
                      quality="80"
                      :src="`${api_key}/image_etec/${item['image']}`"
                      :alt="getNameByLocalByLang(item['title'])"
                    />
                    </figure>
                    <b-card-text> 
                    <div class="viewer px-1">
                      <i class="material-icons">visibility</i> {{ item['viewer'] }} {{ $t('viewer') }}
                    </div>
                    <div :class="$colorMode.value=='dark'?'text-light-mode' : 'text-light-mode'">
                        <h6 class="four-line description">
                        {{ getNameByLocalByLang(item['description']) }}
                        </h6>
                    </div>
                    </b-card-text>
                </div>
                </nuxt-link>
            </b-col>
            
            <b-col cols="12" class="d-flex justify-content-center" v-if="!result.length>0">
                <h1>{{ $route.params.search }} {{ $t('search_not_found') }}</h1>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import moment from 'moment'
export default{
    colorMode: 'light',
    name: "Search",
    head () {
    return {
      title: this.$route.params.search,
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "KroIT | Etec Center",
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
    data(){
        return {
            api_key: process.env.BASE_URL,
            result: [],
            search_loeading: true,
            web_url: process.env.WEB_URL+"/Search/"+this.$route.params.search
        }
    },
    mounted(){
        this.get()
    },
    methods: {
        get(){
            this.$axios.$post('search',{title: this.$route.params.search}).then(res => {
                this.result = res
                this.search_loeading = false
            })
        },
        getImage(image) {
            return 'https://etec-api.loveounnas.xyz/image_etec/' + image
        },
        dateFormat(date){
          return moment(date).format('llll')
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
    onSearch(){
      this.$router.push({path: `/Search/${this.search}`}); 
    }
    }
}
</script>