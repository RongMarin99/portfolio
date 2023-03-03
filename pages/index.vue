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
            <b-carousel-slide v-for="item in slide" :key="item.index"
                :img-src="getImage(item['image'])" img-alt="Blank image">
              <p>
                <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. -->
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
            <b-tab :title="$t('course')" active @click="get(key.course)">
              <b-row  v-if="course_loading" class="mt-5" >
                <b-col class="mb-4" cols="12" xl="3" lg="3" md="6" sm="6" v-for="i in 8" :key="i">
                  <b-card no-body class="bg-white">
                    <b-skeleton-img height="250px"></b-skeleton-img>
                  </b-card>
                </b-col>
              </b-row>

              <b-row v-else class="mt-5">
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
            <b-tab :title="$t('article')" @click="get(key.article)">
              <b-row  v-if="article_loading" class="mt-5" >
                <b-col class="mb-4" cols="12" xl="3" lg="3" md="6" sm="6" v-for="i in 8" :key="i">
                  <b-card no-body class="bg-white">
                    <b-skeleton-img height="250px"></b-skeleton-img>
                  </b-card>
                </b-col>
              </b-row>
             
              <b-row v-else class="mt-5">
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
            <b-tab :title="$t('job')" @click="get(key.job)">
              <b-row  v-if="job_loading" class="mt-5" >
                <b-col class="mb-4" cols="12" xl="3" lg="3" md="6" sm="6" v-for="i in 8" :key="i">
                  <b-card no-body class="bg-white">
                    <b-skeleton-img height="250px"></b-skeleton-img>
                  </b-card>
                </b-col>
              </b-row>
             
              <b-row class="mt-5">
                <b-col cols="12" xl="3" lg="3" md="6" sm="6" v-for="item in job" :key="item.index" class="mb-4">
                  <nuxt-link :to="`/Detail?id=${item.id}&type=${item.type}`">
                    <b-card >
                      <figure class="position-relative">
                        <b-badge class="position-absolute orange-bg" style="top:10px;left:10px">
                          {{ $t('about_job') }}
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
                  <img :src="getImage(founder.image)" alt="">
              </figure>
            </b-col>
            <b-col cols="12" xl="8" lg="8" md="8" sm="8">
              <h5>
                {{ founder.name }}
              </h5>
              <p>
                {{ founder.description }}
              </p>
              <hr class="mt-5">
              <b-row>
                <b-col cols="6">
                  <a target="_blank" class="text-white" :href="founder.social_media_url">
                    <b-button block class="orange-bg p-2 ml-3 float-left" pill>
                      {{ $t('follow') }}
                    </b-button>
                  </a>
                </b-col>
                <b-col cols="6">
                  <a target="_blank" :href="founder.contact_url">
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
      course_loading: true,
      article_loading: true,
      job_loading: true,
      api_key: '',
      allVideos: [],
      news: [],
      courses: [],
      job: [],
      key: {
        course: 'course',
        article: 'article',
        job: 'job'
      },
      slide: [],
      url: 'getAllCourse',
      founder: ''
    }
  },
  created() {
    this.getSlide()
    this.get()
    this.getFounder()
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
              slidesPerView: 2,
              spaceBetween: 40
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }
        });
    }, 2000);
    this.getVideo()
  },
  watch: {
  },
  methods: {
    async get(key='course'){
      if(key==this.key.course){
        if(this.course_loading){
          await this.$axios.$get('getAllCourse').then(response => {
            this.courses = response.data
            this.course_loading = false
          })
        }
      }else if(key==this.key.article){
        if(this.article_loading){
           await this.$axios.$get('getAllNews').then(response => {
            this.news = response.data
            this.article_loading = false
          })
        }
      }else if(key==this.key.job){
        if(this.job_loading){
          await this.$axios.$post('job/lists').then(response => {
            this.job = response.data.data
            this.job_loading = false
          })
        }
      }
    },
    async getSlide(){
      await this.$axios.$post('slide/lists').then(response => {
        this.slide = response.data.data
      })
    },
    async getVideo(){
      await this.$axios.$get('getAllVideo').then(response => {
        this.allVideos = response.data
      })
    },
    async getFounder(){
      await this.$axios.$get('founder/get').then(response => {
        this.founder = response
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