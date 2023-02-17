<template>
  <div>
      <!-- Start Header -->
      <b-container fluid 
        :class="dark?'dark-mode' : 'bg-white' " 
        style="border-bottom:0.1px solid #ededed">
          <b-navbar toggleable="lg">
            <b-container class="p-2">
              <b-navbar-brand href="#">
                <img src="https://pxdraft.com/themeforest/maffei/assets/img/logo.svg" alt="">
              </b-navbar-brand>
  
              <b-navbar-toggle 
                target="nav-collapse" 
                class="ml-auto"
              >
              <span class="material-icons" :class="dark?'text-dark-mode' : 'text-light-mode'">menu</span>
            </b-navbar-toggle>
  
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="m-auto" :class="dark?'text-dark-mode' : 'text-light-mode'">
                  <b-nav-item class="pl-4" >
                    {{ $t('home') }}
                  </b-nav-item>
                  <b-nav-item class="pl-4">
                    {{ $t('course') }}
                  </b-nav-item>
                  <b-nav-item class="pl-4">
                    {{ $t('article') }}
                  </b-nav-item>
                  <b-nav-item class="pl-4">
                    {{ $t('video') }}
                  </b-nav-item>
                  <b-nav-item class="pl-4">
                    {{ $t('job') }}
                  </b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="m-right">
                  <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" :placeholder="$t('search')+'...'"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0 orange-bg" type="submit">{{ $t('search') }}</b-button>
                  </b-nav-form>
  
                  <b-nav-item-dropdown class="ml-2 mr-1" right>
                    <template #text>
                      <span v-if="$i18n.locale == 'en'">
                        <flag iso="gb" />
                      </span>
                      <span v-else>
                        <flag iso="kh" />
                      </span>
                    </template>
                    <b-dropdown-item :to="switchLocalePath('en')" >
                      <flag iso="gb" /> {{ $t('english') }}
                    </b-dropdown-item>
                    <b-dropdown-item :to="switchLocalePath('kh')">
                      <flag iso="kh" /> {{ $t('khmer') }}
                    </b-dropdown-item>
                  </b-nav-item-dropdown>
  
                  <b-nav-item>
                    <span 
                       @click="dark=!dark" 
                       class="material-icons"
                       :class="dark?'text-dark-mode' : 'text-light-mode'"
                    >brightness_4</span>
                  </b-nav-item>
                </b-navbar-nav>
  
              </b-collapse> 
          </b-container>
          </b-navbar>
      </b-container>
      <!-- End Header -->

      <!-- Start Slide -->
      <b-container class="mt-2">
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
            <!-- Text slides with image -->
            <b-carousel-slide
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://picsum.photos/1024/480/?image=52"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
              <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="https://picsum.photos/1024/480/?image=55"
                  alt="image slot"
                >
              </template>
  </b-carousel-slide>

  <!-- Slide with blank fluid image to maintain slide aspect ratio -->
  <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
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
          :class="dark?'text-orange' : 'text-black'"
        >
          <b>Best Collection Videos in this Month</b>
        </h2>
        <!-- <div class="video-slide mt-5">
          <div class="swiper mySwiper">
            <div class="center">
              <div class="swiper-slide" v-for="item in 10" :key="item">
                <iframe width="100%" style="height:15rem" src="https://www.youtube.com/embed/VgS5CP7zlXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p :class="dark?'text-light-mode' : 'text-light-mode'">
                  {{ item['title'] }}
                </p>
              </div>
            </div>
          </div>
        </div> -->
      </b-container>
      <!-- End Video -->

      <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="banner" v-for="banner in banners">
            <!-- Render original HTML in server, render Swiper in browser (client) -->
            <img class="h-64 w-64" :src="banner" />
    
          </div>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
export default {
  name: 'IndexPage',
  components: {
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      banners: ["/slider-1.png", "/slider-2.png", "/slider-3.png"],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
      },
      dark: false,
      slickOptions: {
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        centerMode: true,
        centerPadding: '60px',
        autoplaySpeed: 10000,
        pauseOnHover: true,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
      },
      api_key: '',
      allVideos: [],
      allCategory: [],
      news: [],
      courses: []
    }
  },
  created() {
    this.get()
  },
  watch: {
  },
  mounted() {
    // var swiper = new Swiper(".mySwiper", {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   breakpoints: {
    //     640: {
    //       slidesPerView: 1,
    //       spaceBetween: 10,
    //     },
    //     768: {
    //       slidesPerView: 2,
    //       spaceBetween: 10,
    //     },
    //     1024: {
    //       slidesPerView: 3,
    //       spaceBetween: 15,
    //     },
    //   },
    // });
  },
  methods: {
    async get(){
      await this.$axios.$get('getAllVideo').then(response => {
        this.allVideos = response.data
      })

      // await this.$axios.$get('getAllCategory').then(response => {
      //   console.log(100,response);
      // })

      await this.$axios.$get('getAllNews').then(response => {
        this.news = response.data
      })

      await this.$axios.$get('getAllCourse').then(response => {
        this.courses = response.data
      })

      this.allCategory = this.news.concat(this.courses)
      this.allCategory = this.allCategory.sort((a, b) => {
        return a.date.localeCompare(b.date);
      });
      console.log(100,this.allCategory);
    },
    getImage(image) {
        return 'http://localhost:8000/image_etec/' + image
    },
  }
}
</script>
