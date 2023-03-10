<template>
    <b-container class="main-slide" >
        <div class="fb-share-button" 
            data-href="https://etec-center1.netlify.app/Detail?id=5&type=2&image=640358ffb69c17.36735928.png" 
            data-layout="button_count">
        </div>
        <a href="https://www.facebook.com/sharer.php?u=https://etec-center1.netlify.app/Detail?id=7&type=2&image=6405f6dcea9651.30450625.png">Facebook</a>
        <b-row>
            <b-col cols="12" xl="8" lg="12" md="12" xs="12" class="mt-3">
               <h3>{{ getNameByLocalByLang(detail['title']) }}​</h3>
               <b-row>
                 <b-col cols="12" xl="6" lg="6" md="6" xs="6" class="mt-3">
                    <span>
                        {{ convertDateEnToKh(detail['created_at']).day }}, {{ convertDateEnToKh(detail['created_at']).month }} {{ convertDateEnToKh(detail['created_at']).year }}
                    </span>
                 </b-col>
          
               </b-row>
               <hr>
               <b-row>
                <b-col cols="12" class="content-detail">
                    <div v-html="description"></div>
                    
                    <!-- <p>ក្នុងប្រវត្តិសាស្រ្តពិភពលោក​រាប់ពាន់​ឆ្នាំមកនេះ មាន​ការលេចឡើង​ចក្រភពជាច្រើន។ ខាងក្រោមនេះ​គឺ​ជាចក្រភពធំៗទាំង១០០ ដោយ​ក្នុងនោះ​នៅតំបន់អាស៊ីអាគ្នេយ៍​ក៏មាន ៤ចក្រភពផងដែរ រួមមាន​ចក្រភពខ្មែរ (Khmer Empire), ភូមា (Taungoo Empire), Srivijaya Empire និង Majaphit Empire ដែល​ចក្រភពទាំងពីរជាផ្នែកមួយ​នៃឥណ្ឌូណេស៊ី និងម៉ាឡេស៊ី​​បច្ចុប្បន្ន។ អតីតចក្រភព​ធំជាងគេ គឺអង់គ្លេស បន្ទាប់មក ម៉ុងហ្គោល និង​រុស្ស៊ី។</p>
                    <figure>
                        <img src="https://via.placeholder.com/1000x400" alt="">
                    </figure>
                    <p>ក្នុងប្រវត្តិសាស្រ្តពិភពលោក​រាប់ពាន់​ឆ្នាំមកនេះ មាន​ការលេចឡើង​ចក្រភពជាច្រើន។ ខាងក្រោមនេះ​គឺ​ជាចក្រភពធំៗទាំង១០០ ដោយ​ក្នុងនោះ​នៅតំបន់អាស៊ីអាគ្នេយ៍​ក៏មាន ៤ចក្រភពផងដែរ រួមមាន​ចក្រភពខ្មែរ (Khmer Empire), ភូមា (Taungoo Empire), Srivijaya Empire និង Majaphit Empire ដែល​ចក្រភពទាំងពីរជាផ្នែកមួយ​នៃឥណ្ឌូណេស៊ី និងម៉ាឡេស៊ី​​បច្ចុប្បន្ន។ អតីតចក្រភព​ធំជាងគេ គឺអង់គ្លេស បន្ទាប់មក ម៉ុងហ្គោល និង​រុស្ស៊ី។</p>
                     -->
                </b-col>
               </b-row>
            </b-col>
            <b-col cols="12" xl="4" lg="12" md="12" xs="12" class="mt-3">
               <h5 class="pb-1" style="border-bottom: 3px solid #FD7237;width:fit-content;">
                អត្ថបទទាក់ទង
                </h5>
                <div v-for="item in relate_content" :key="item" :class="$colorMode.value=='dark'?'text-white' : 'text-light-mode'">
                     <nuxt-link :to="`/Detail?id=${item.id}&type=${item.type}`" style="color:white" >
                        <b-row >
                              <b-col cols="3" xl="4" lg="2" md="3" xs="3">
                                  <figure>
                                      <img :src="getImage(item.image)" alt="">
                                  </figure>
                              </b-col>
                              <b-col cols="9" xl="8" lg="10" md="9" xs="9" class="pl-0">
                                  <p class="three-line">
                                  {{ getNameByLocalByLang(item.title) }}
                                  </p>
                              </b-col>
                      </b-row>
                    </nuxt-link>
                </div>
                
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import moment from 'moment'
export default{
    colorMode: 'light',
    name: "Detail",
    async asyncData(context) {
      const detail = await context.$axios.get('https://etec-api.loveounnas.xyz/api/getAllNews')
      return {meta: detail.data.data[0]}
    },
    head(){
        return {
        meta:[
          { hid: 'og-type', property: 'og:type', 
            content: 'Etec Center' 
          },
          {
                hid: "og:title",
                property: "og:title",
                content: this.detail.title,
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "description",
            },
          { 
            hid: 'og-image', property: 'og:image',
            content: 'https://etec-api.loveounnas.xyz/image_etec/'+this.meta.image
          },
          { hid: 'og-url', property: 'og:url', 
            content: this.url
          },
          { property: "og:image:width", content: "740" },
          { property: "og:image:height", content: "300" },
        ]
      }
    },
    data(){
        return {
           detail: {},
           share_image: this.$route.query.image,
           url: this.$route.fullPath,
           id: null,
           type: null,
           relate_content: [],
           image: ''
        }
    },
    created() {
      //  this.findById()
        this.get()
        //this.getApp()
    },
    computed: {
        description: function(){
            return this.detail.text
        }
    },
    mounted(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
            fjs.parentNode.insertBefore(js, fjs);
            }
        (document, 'script', 'facebook-jssdk'))
    },
    methods: {
        findById(){
            this.id = this.$route.query.id
            this.type = this.$route.query.type
            this.default = this.$route.query.default ?? null
            var input = {
                id: this.id,
                type: this.type,
                default: this.default
            }
            this.$axios.$post('detail',input).then(response => {
                this.detail = response
                this.detail.date = moment(this.detail.created_at, "YYYYMMDD").fromNow();
                this.image = this.detail.image
            })
        },
        get(){
            var input = {
                id: this.id,
                type: this.type
            }
            this.$axios.$post('relate/content',input).then(response => {
                this.relate_content = response
            })
        },
        getApp(){
           this.url =  process.env.baseUrl + this.$route.fullPath
        },

        convertDateEnToKh(date) {
            var day = moment(date).format('DD').toString()
            var month = moment(date).format('MM').toString()
            var year = moment(date).format('YYYY').toString()
            var days = '';
            var months = '';
            var years = '';
            for (var i = 0; i < day.length; i++) {
                days += this.convertNmberEnKh(day.charAt(i));
            }
            months = this.convertMonthEnKh(month);
            for (var i = 0; i < year.length; i++) {
                years += this.convertNmberEnKh(year.charAt(i));
            }
            let result = {
                day: days,
                month: months,
                year: years,
            }
            return result;
        },

        convertNmberEnKh(number) {
			let numbers = '';
			switch (parseInt(number)) {
				case 0:
					numbers = "០";
					break;
				case 1:
					numbers = "១";
					break;
				case 2:
					numbers = "២";
					break;
				case 3:
					numbers = "៣";
					break;
				case 4:
					numbers = "៤";
					break;
				case 5:
					numbers = "៥";
					break;
				case 6:
					numbers = "៦";
					break;
				case 7:
					numbers = "៧";
					break;
				case 8:
					numbers = "៨";
					break;
				case 9:
					numbers = "៩";
					break;
			}
			return numbers;
		},

        convertMonthEnKh(number) {
			let numbers = '';
			switch (parseInt(number)) {
				case 0:
					numbers = "";
					break;
				case 1:
					numbers = "មករា";
					break;
				case 2:
					numbers = "កុម្ភះ";
					break;
				case 3:
					numbers = "មីនា";
					break;
				case 4:
					numbers = "មេសា";
					break;
				case 5:
					numbers = "ឧសភា";
					break;
				case 6:
					numbers = "មិថុនា";
					break;
				case 7:
					numbers = "កក្កដា";
					break;
				case 8:
					numbers = "សីហា";
					break;
				case 9:
					numbers = "កញ្ញា";
					break;
				case 10:
					numbers = "តុលា";
					break;
				case 11:
					numbers = "វិច្ឆិកា";
					break;
				case 12:
					numbers = "ធ្នូ";
					break;
			}
			return numbers;
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
<style lang="scss">
.content-detail{
    img{
        max-width: 100% !important;
        width: 100% !important;
        height: auto !important;
    }
}
</style>