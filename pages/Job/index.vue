<template>
    <b-container class="main-slide" >
        <b-row v-if="job_loading" class="mt-5" >
          <b-col class="mb-4" cols="12" xl="4" lg="4" md="6" sm="6" v-for="i in 6" :key="i">
            <div class="card-content-dg p-2">
              <b-skeleton animation="wave" width="90%"></b-skeleton>
              <b-skeleton animation="wave" width="100%"></b-skeleton>
              <b-skeleton-img height="200px"></b-skeleton-img>
              <b-skeleton animation="wave" class="mt-1" width="100%"></b-skeleton>
              <b-skeleton animation="wave" width="95%"></b-skeleton>
              <b-skeleton animation="wave" width="100%"></b-skeleton>
            </div>
          </b-col>
        </b-row>


        <b-row v-else>
            <b-col class="mb-1 mt-5"  cols="12" xl="4" lg="4" md="6" sm="6" v-for="item in jobs" :key="item.index">
              <nuxt-link :to="`/Detail/${item.id}/${item.type}`">
                <div class="card-content-dg p-2">
                  <b-card-text>
                    <span class="mb-0 mt-0" style="font-size:13px">
                          {{ dateFormat(item['created_at']) }}
                    </span>
                    <h6 class="three-line title">
                        {{ getNameByLocalByLang(item['title']) }}
                    </h6>
                  </b-card-text>
                  <figure class="position-relative">
                    <b-badge class="position-absolute orange-bg" style="top:10px;left:10px">
                      {{ $t('about_job') }}
                    </b-badge>
                    <img :src="`${api_key}/image_etec/${item['image']}`" alt="">
                  </figure>
                  <b-card-text>
                    <div :class="$colorMode.value=='dark'?'text-light-mode' : 'text-light-mode'">
                      <h6 class="four-line description">
                        {{ getNameByLocalByLang(item['description']) }}
                      </h6>
                    </div>
                  </b-card-text>
                </div>
              </nuxt-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import moment from 'moment';
 export default{
    colorMode: 'light',
    data() {
        return {
           api_key: process.env.BASE_URL,
           jobs: [],
           job_loading: true,
        }
    },
    created(){
        this.get()
    },
    methods:{
        get(){
            this.$axios.$post('job/lists').then(response => {
                this.jobs = response.data.data
                this.job_loading = false
            })
        },
        dateFormat(date){
            return moment(date).format('llll')
        },
        getImage(image) {
            return 'https://etec-api.loveounnas.xyz/image_etec/' + image
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