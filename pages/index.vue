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
      <!-- <b-container class="mt-5">
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
      </b-container> -->
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
            <b-tab :title="$t('course')" active @click="get(key.course)">
              <b-row v-if="course_loading" class="mt-5" >
                <b-col cols="12" style="margin-bottom:-3rem">
                  <b-skeleton-img height="550px"></b-skeleton-img>
                </b-col>
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

              <b-row v-else class="mt-5">
                <b-col cols="12" class="position-relative " >
                  <figure >
                    <div
                    class="defualt-show w-100"
                     style="height:500px"
                    :style="`background-image: linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 / 91%)), url('${getImage(default_course['image'])}');`">
                        <div class="main-content-title">
                            <p class="text-white">
                              {{ dateFormat(default_course['created_at']) }}
                            </p>
                            <nuxt-link :to="`/Detail?id=${default_course['id']}&type=${default_course['type']}&default=1`">
                              <h3 class="text-white bg-image-default" >
                                    {{ getNameByLocalByLang(default_course['title']) }}
                              </h3> 
                            </nuxt-link>
                            <div class="button">
                              <nuxt-link 
                              :to="`/Detail?id=${default_course['id']}&type=${default_course['type']}&default=1`"
                              >
                                {{ $t('read_more') }}
                              </nuxt-link>
                            </div>
                        </div>
                  </div>
                  </figure>
                </b-col>
                <b-col cols="12" xl="4" lg="4" md="6" sm="6" v-for="item in courses" :key="item.index" class="mb-4">
                  <nuxt-link :to="`/Detail?id=${item.id}&type=${item.type}`">
                    <b-card no-body class="p-2" >
                      <span class="mb-0 mt-0" style="font-size:13px">
                            {{ dateFormat(item['created_at']) }}
                      </span>
                      <h6 class="three-line">
                          {{ getNameByLocalByLang(item['title']) }}
                      </h6>
                      <figure class="position-relative">
                        <b-badge class="position-absolute orange-bg" style="top:10px;left:10px">
                          {{ $t('course') }}
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

            </b-tab>
            <b-tab :title="$t('article')" @click="get(key.article)">
              <b-row v-if="article_loading" class="mt-5" >
                <b-col cols="12" style="margin-bottom:-3rem">
                  <b-skeleton-img height="550px"></b-skeleton-img>
                </b-col>
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
             
              <b-row v-else class="mt-5">
                <b-col cols="12" class="position-relative " >
                  <figure >
                    <div
                     style="height:500px"
                     class="defualt-show w-100"
                    :style="`background-image: linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 / 91%)), url('${getImage(default_article['image'])}');`">
                        <div class="main-content-title">
                            <p class="text-white">
                              {{ dateFormat(default_article['created_at']) }}
                            </p>
                            <nuxt-link :to="`/Detail?id=${default_article['id']}&type=${default_article['type']}&default=1`">
                              <h3 class="text-white bg-image-default" >
                                    {{ getNameByLocalByLang(default_article['title']) }}
                              </h3> 
                            </nuxt-link>
                            <div class="button">
                              <nuxt-link :to="`/Detail?id=${default_article['id']}&type=${default_article['type']}&default=1`">
                                {{ $t('read_more') }}
                              </nuxt-link>
                            </div>
                        </div>
                  </div>
                  </figure>
                </b-col>
                <b-col cols="12" xl="4" lg="4" md="6" sm="6" v-for="item in news" :key="item.index" class="mb-4">
                  <nuxt-link :to="`/Detail?id=${item.id}&type=${item.type}`">
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
            </b-tab>
            <b-tab :title="$t('job')" @click="get(key.job)">
              <b-row v-if="job_loading" class="mt-5" >
                <b-col cols="12" style="margin-bottom:-3rem">
                  <b-skeleton-img height="550px"></b-skeleton-img>
                </b-col>
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
             
              <b-row v-else class="mt-5">
                <b-col cols="12" class="position-relative " >
                  <figure >
                    <div
                     style="height:500px"
                     class="defualt-show w-100"
                    :style="`background-image: linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 / 91%)), url('${getImage(default_job['image'])}');`">
                        <div class="main-content-title">
                            <p class="text-white">
                              {{ dateFormat(default_job['created_at']) }}
                            </p>
                            <nuxt-link :to="`/Detail?id=${default_job['id']}&type=${default_job['type']}&default=1`">
                              <h3 class="text-white bg-image-default" >
                                    {{ getNameByLocalByLang(default_job['title']) }}
                              </h3> 
                            </nuxt-link>
                            <div class="button">
                              <nuxt-link :to="`/Detail?id=${default_job['id']}&type=${default_job['type']}&default=1`">
                                {{ $t('read_more') }}
                              </nuxt-link>
                            </div>
                        </div>
                  </div>
                  </figure>
                </b-col>
                <b-col cols="12" xl="4" lg="4" md="6" sm="6" v-for="item in job" :key="item.index" class="mb-4">
                  <nuxt-link :to="`/Detail?id=${item.id}&type=${item.type}`">
                    <b-card no-body class="p-2" >
                      <b-card-text>
                        <span class="mb-0 mt-0" style="font-size:13px">
                              {{ dateFormat(item['created_at']) }}
                        </span>
                        <h6 class="three-line">
                            {{ getNameByLocalByLang(item['title']) }}
                        </h6>
                      </b-card-text>
                      <figure class="position-relative">
                        <b-badge class="position-absolute orange-bg" style="top:10px;left:10px">
                          {{ $t('about_job') }}
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
              <div id="wrapper">
                <a class="fb-share" href="#">Share This</a> 
              </div>
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
// import Swiper from 'swiper/swiper-bundle.min';
// import 'swiper/swiper-bundle.min.css';
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
      default_course: '',
      default_article: '',
      default_job: '',
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
  mounted(){
    // window.fbAsyncInit = function() {
    //     FB.init({
    //       appId      : '145634995501895',
    //       status           : true,
    //       cookie           : true,
    //       version    : 'v2.1'
    //     });
    //   };

    //   (function(d, s, id){
    //       var js, fjs = d.getElementsByTagName(s)[0];
    //       if (d.getElementById(id)) {return;}
    //       js = d.createElement(s); js.id = id;
    //       js.src = "//connect.facebook.net/en_US/sdk.js";
    //       fjs.parentNode.insertBefore(js, fjs);
    //   }(document, 'script', 'facebook-jssdk'));

    //    document.querySelector('.fb-share').onclick = function(){
    //     FB.ui({
    //       method: 'feed',
    //       link: 'https://developers.facebook.com/docs/'
    //     }, function(response){});
              
    //    }
       

  },
  watch: {
  },
  methods: {
    async get(key='course'){
      if(key==this.key.course){
        if(this.course_loading){
          await this.$axios.$get('setting/course').then(response => {
            this.default_course = response
          })
          await this.$axios.$get('getAllCourse').then(response => {
            this.courses = response.data
            this.course_loading = false
          })
        }
        
      }else if(key==this.key.article){
        if(this.article_loading){
            await this.$axios.$get('setting/article').then(response => {
              this.default_article = response
            })
           await this.$axios.$get('getAllNews').then(response => {
            this.news = response.data
            this.article_loading = false
          })
        }
      }else if(key==this.key.job){
        if(this.job_loading){
          await this.$axios.$get('setting/job').then(response => {
              this.default_job = response
          })
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
<style>

</style>