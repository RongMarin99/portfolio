<template>
    <b-container class="main-slide" >
      <b-row v-if="article_loading" class="mt-5" >
        <b-col class="mb-4" cols="12" xl="4" lg="4" md="6" sm="6" v-for="i in 6" :key="i">
          <b-card no-body class="bg-white p-2">
            <b-skeleton animation="wave" width="90%"></b-skeleton>
            <b-skeleton animation="wave" width="100%"></b-skeleton>
            <b-skeleton-img height="200px"></b-skeleton-img>
            <b-skeleton animation="wave" class="mt-1" width="100%"></b-skeleton>
            <b-skeleton animation="wave" width="95%"></b-skeleton>
            <b-skeleton animation="wave" width="100%"></b-skeleton>
          </b-card>
        </b-col>
      </b-row>

        <b-row v-else>
            <b-col class="mb-1 mt-5" cols="12" xl="4" lg="4" md="6" sm="6" v-for="item in Category" :key="item">
              <nuxt-link :to="`/Detail?id=${item.id}&type=${item.type}&image=${item.image}`">
                <b-card no-body class="p-2" >
                  <span class="mb-0 mt-0" style="font-size:13px">
                        {{ dateFormat(item['created_at']) }}
                  </span>
                  <h6 class="three-line">
                      {{ getNameByLocalByLang(item['title']) }}
                  </h6>
                  <figure class="position-relative">
                    <b-badge class="position-absolute orange-bg" style="top:10px;left:10px">
                      {{ $t('article') }}
                    </b-badge>
                    <img :src="getImage(item['image'])" alt="">
                  </figure>
                  <b-card-text>
                    <div :class="$colorMode.value=='dark'?'text-light-mode' : 'text-light-mode'">
                      <h6>
                        {{ getNameByLocalByLang(item['description']) }}
                      </h6>
                    </div>
                  </b-card-text>
                </b-card>
              </nuxt-link>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import moment from 'moment';
export default{
  colorMode: 'light',
  // async asyncData(context) {
  //   const data = await context.$axios.$post('https://etec-api.loveounnas.xyz/api/article')
  //   context.store.dispatch('articles/setArticle', data[0])
  // },
    data(){
        return {
            Category:[],
            type: null,
            article_loading: true,
        }
    },
    created(){
        this.get()
    },
    methods:{
        get(){
            this.$axios.$post('article').then(response => {
                this.Category = response
                this.article_loading = false
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
    }
}
</script>