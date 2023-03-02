<template>
  <div>

      <!-- Start Slide -->
      <b-container class="main-slide">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          >
            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide img-src="https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/305664414_1249514142562724_4490597012580547501_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHCsRWiV-5NFJt7YUM13mf3IAPhp99Lu8sgA-Gn30u7y6_3tTBlpw1c3j5yW6GO4JivIi0nxnLpi6exdxXs69pi&_nc_ohc=LkSeVVi_pR0AX_Sco89&_nc_oc=AQkE4x6eSpq9_txxeG-hKIGeVE2meXgtmFTwDcoMH0LiXriVwQpLMtJXx0A5jMKAYTI&_nc_ht=scontent.fpnh7-1.fna&oh=00_AfD4zyd68AyJPeRgmp_vGqTCeEF7cIu8GLvkeK54ahYteQ&oe=6404374E" img-alt="Blank image">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>

            <b-carousel-slide img-src="https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/305664414_1249514142562724_4490597012580547501_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHCsRWiV-5NFJt7YUM13mf3IAPhp99Lu8sgA-Gn30u7y6_3tTBlpw1c3j5yW6GO4JivIi0nxnLpi6exdxXs69pi&_nc_ohc=LkSeVVi_pR0AX_Sco89&_nc_oc=AQkE4x6eSpq9_txxeG-hKIGeVE2meXgtmFTwDcoMH0LiXriVwQpLMtJXx0A5jMKAYTI&_nc_ht=scontent.fpnh7-1.fna&oh=00_AfD4zyd68AyJPeRgmp_vGqTCeEF7cIu8GLvkeK54ahYteQ&oe=6404374E" img-alt="Blank image">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>
        </b-carousel>
      </b-container>
      <!-- End Slide -->

      <!-- Start Video -->
      <b-container class="mt-5">
        <h2 align="center" 
          :class="$colorMode.value=='dark'?'text-orange' : 'text-black'"
        >
          <b>Best Collection Videos in this Month</b>
        </h2>
        <client-only>
          <div class="video-slide mt-5">
            <div class="swiper mySwiper" ref="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide card" v-for="item in allVideos" :key="item">
                  <iframe width="100%" style="height:15rem" :src="item['url']" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <p :class="$colorMode.value=='dark'?'text-light-mode' : 'text-light-mode'" class="pt-2">
                   {{ item['title'] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </client-only>
      </b-container>
      <!-- End Video -->

      <!-- Start Article -->
      <b-container class="mt-5">
        <h2 
          align="center" 
          :class="$colorMode.value=='dark'?'text-orange' : 'text-black'"
        >
          <b>Explore New</b>
        </h2>
        <div class="mt-5">
          <b-tabs pills content-class="mt-3" align="center">
            <!-- <b-tab :title="$t('all_category')" active>

              <b-row  v-if="loading" class="mt-5" >
                <b-col class="mb-4" cols="12" xl="3" lg="3" md="6" sm="6" v-for="i in 8" :key="i">
                  <b-card no-body class="bg-white">
                    <b-skeleton-img height="250px"></b-skeleton-img>
                  </b-card>
                </b-col>
              </b-row>

              <b-row v-else class="mt-5">
                <b-col  cols="12" xl="3" lg="3" md="6" sm="6" v-for="item in allCategory" :key="item" class="mb-4">
                  <nuxt-link :to="`/Detail?id=${item.id}&type=${item.type}`">
                    <b-card >
                      <figure class="position-relative">
                        <b-badge class="position-absolute orange-bg" style="top:10px;left:10px">
                          {{ item.type==1?$t('course'):item.type==2?$t('article'):$t('about_job') }}
                        </b-badge>
                        <img :src="getImage(item['image'])" alt="">
                      </figure>
                      <b-card-text>
                        <div :class="$colorMode.value=='dark'?'text-light-mode' : 'text-light-mode'">
                          <span class="mb-0 mt-0" style="font-size:13px">
                            {{ dateFormat(item['created_at']) }}
                          </span>
                          <h6 class="two-line">
                            {{ item['title'] }}
                          </h6>
                        </div>
                      </b-card-text>
                    </b-card>
                  </nuxt-link>
                </b-col>
              </b-row>
            </b-tab> -->
            <b-tab :title="$t('course')">
              <b-row class="mt-5">
                <b-col cols="12" xl="3" lg="3" md="6" sm="6" v-for="item in courses" :key="item.index" class="mb-4">
                  <nuxt-link :to="`/Detail?id=${item.id}&type=${item.type}`">
                    <b-card >
                      <figure class="position-relative">
                        <b-badge class="position-absolute orange-bg" style="top:10px;left:10px">
                          {{ $t('course') }}
                        </b-badge>
                        <img :src="getImage(item['image'])" alt="">
                      </figure>
                      <b-card-text>
                        <div :class="$colorMode.value=='dark'?'text-light-mode' : 'text-light-mode'">
                          <span class="mb-0 mt-0" style="font-size:13px">
                            {{ dateFormat(item['created_at']) }}
                          </span>
                          <h6 class="two-line">
                          {{ item['title'] }}
                          </h6>
                        </div>
                      </b-card-text>
                    </b-card>
                  </nuxt-link>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab :title="$t('article')">
              <b-row class="mt-5">
                <b-col cols="12" xl="3" lg="3" md="6" sm="6" v-for="item in news" :key="item.index" class="mb-4">
                  <nuxt-link :to="`/Detail?id=${item.id}&type=${item.type}`">
                    <b-card >
                      <figure class="position-relative">
                        <b-badge class="position-absolute orange-bg" style="top:10px;left:10px">
                          {{ $t('article') }}
                        </b-badge>
                        <img :src="getImage(item['image'])" alt="">
                      </figure>
                      <b-card-text>
                        <div :class="$colorMode.value=='dark'?'text-light-mode' : 'text-light-mode'">
                          <span class="mb-0 mt-0" style="font-size:13px">
                            {{ dateFormat(item['created_at']) }}
                          </span>
                          <h6 class="two-line">
                          {{ item['title'] }}
                          </h6>
                        </div>
                      </b-card-text>
                    </b-card>
                  </nuxt-link>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab :title="$t('job')">
              <b-row class="mt-5">
                <b-col cols="12" xl="3" lg="3" md="6" sm="6" v-for="item in job" :key="item.index" class="mb-4">
                  <nuxt-link :to="`/Detail?id=${item.id}&type=${item.type}`">
                    <b-card >
                      <figure class="position-relative">
                        <b-badge class="position-absolute orange-bg" style="top:10px;left:10px">
                          {{ $t('article') }}
                        </b-badge>
                        <img :src="getImage(item['image'])" alt="">
                      </figure>
                      <b-card-text>
                        <div :class="$colorMode.value=='dark'?'text-light-mode' : 'text-light-mode'">
                          <span class="mb-0 mt-0" style="font-size:13px">
                            {{ dateFormat(item['created_at']) }}
                          </span>
                          <h6 class="two-line">
                          {{ item['title'] }}
                          </h6>
                        </div>
                      </b-card-text>
                    </b-card>
                  </nuxt-link>
                </b-col>
              </b-row>
            </b-tab>
          </b-tabs>
        </div>
        
      </b-container>
      <!-- End Article -->

      <!-- Start Founder -->
      <b-container class="mt-5">
        <h2 
          align="center" 
          :class="$colorMode.value=='dark'?'text-orange' : 'text-black'"
        >
          <b>Founder</b>
        </h2>
        <div class="mt-5">
          <b-row>
            <b-col cols="12" xl="4" lg="4" md="4" sm="4">
              <figure>
                <!-- width 200 -->
                  <img src="https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/313307825_1275751709938967_2909858508474953925_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHCtKpCgF6zYYFKBgJTqcWClm1CBeaYLTCWbUIF5pgtMNE_WCs5CsD5P49bfsa9b5Rm6Nmm68mYnXYUByl6CqO8&_nc_ohc=dzPXdUw2FhEAX-4gf7O&tn=0yl9aK4_G8xjrCgv&_nc_ht=scontent.fpnh7-1.fna&oh=00_AfBZUlrUexMZc0kwbi3O7VjMkR92Um7MAQzu46wg3uHEIw&oe=6403FD0C" alt="">
              </figure>
            </b-col>
            <b-col cols="12" xl="8" lg="8" md="8" sm="8">
              <h5>Etec center</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint laborum labore eius quo! Quam nam provident officia maiores asperiores molestias est tempora mollitia, quaerat cumque voluptatem, laboriosam deleniti quod.
              </p>
              <hr class="mt-5">
              <b-row>
                <b-col cols="6">
                  <a target="_blank" class="text-white" href="https://www.facebook.com/kroitchetlaor">
                    <b-button block class="orange-bg p-2 ml-3 float-left" pill>
                      {{ $t('follow') }}
                    </b-button>
                  </a>
                </b-col>
                <b-col cols="6">
                  <a target="_blank" href="https://m.me/kroitchetlaor">
                    <b-button block pill class="p-2" >
                      {{ $t('contact') }}
                    </b-button>
                  </a>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <!-- End Founder -->

    
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';
import moment from 'moment';
import ogImage from '@/assets/image/logo.jpg';
export default {
  colorMode: 'light',
  head () {
    return {
      meta: [
        { hid: 'og:image', property: 'og:image', content: require('../assets/image/logo.jpg') }
      ]
    }
  },
  name: 'IndexPage',
  components: {
  },
  data() {
    return {
      loading: true,
      api_key: '',
      allVideos: [],
      news: [],
      courses: [],
      job: []
    }
  },
  created() {
    
  },
   mounted() {
     setTimeout(() => {
       this.$nextTick();
        new Swiper(this.$refs.swiper, {
          slidesPerView: 3,
          spaceBetween: 5,
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },
          autoplay: {
            delay: 10000,
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }
        });
    }, 2000);
    
      this.get()
  },
  watch: {
  },
  methods: {
    async get(){
      await this.$axios.$get('getAllVideo').then(response => {
        this.allVideos = response.data
      })

      await this.$axios.$get('getAllNews').then(response => {
        this.news = response.data
      })

      await this.$axios.$get('getAllCourse').then(response => {
        this.courses = response.data
        this.loading = false
      })
 
      await this.$axios.$post('job/lists').then(response => {
        this.job = response.data
      })

    },
    getImage(image) {
        return 'https://etec-api.loveounnas.xyz/image_etec/' + image
    },
    dateFormat(date){
      return moment(date).format('llll')
    }
  }
}
</script>
<style>

</style>