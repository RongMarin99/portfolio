<template>
    <b-container class="main-slide" >
        <b-row>
            <b-col cols="12" xl="8" lg="12" md="12" xs="12" class="mt-3">
               <h3>{{ detail['title'] }}​</h3>
               <b-row>
                 <b-col cols="12" xl="6" lg="6" md="6" xs="6" class="mt-3">
                    <span>
                        {{ convertDateEnToKh(detail['created_at']).day }}, {{ convertDateEnToKh(detail['created_at']).month }} {{ convertDateEnToKh(detail['created_at']).year }}
                    </span>
                 </b-col>
                 <b-col cols="12" xl="6" lg="6" md="6" xs="6" class="mt-3 d-flex justify-content-end">
                    <div class="float-right rounded px-2 py-1 ml-1"  style="font-size:12px; background-color:#1DA0F3">
                        <ShareNetwork
                            network="telegram"
                            url="http://rongmarin.hyperphp.com"
                            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                            description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                            quote="The hot reload is so fast it\'s near instant. - Evan You"
                            hashtags="vuejs,vite"
                        >
                        <div class="text-white d-flex">
                            <i class="material-icons" style="font-size:17px">send</i>&nbsp; Telegram
                            </div> 
                        </ShareNetwork>
                    </div>  
                    <div class="float-right bg-primary rounded px-2 py-1 ml-1"  style="font-size:12px">
                            <ShareNetwork
                                network="facebook"
                                :url="`https://effortless-froyo-c29932.netlify.app/Detail?id=5&type=2`"
                                title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                                description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                                quote="The hot reload is so fast it\'s near instant. - Evan You"
                                hashtags="etec,center,etec-center"
                                media="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0MgKIRz1r2jrOw0KuuOnlnkgR-KOlsagi1w&usqp=CAU"
                            >
                            <div class="text-white d-flex">
                                <i class="material-icons" style="font-size:17px">share</i>&nbsp; Facebook
                                </div> 
                            </ShareNetwork>
                    </div>
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
                <b-row v-for="item in 10" :key="item">
                    <b-col cols="3" xl="4" lg="2" md="3" xs="3">
                        <figure>
                            <img src="https://via.placeholder.com/250" alt="">
                        </figure>
                    </b-col>
                    <b-col cols="9" xl="8" lg="10" md="9" xs="9" class="pl-0">
                        <p>
                            តារាល្បីៗ ជូនពរ​គ្រួសារ​តារាចម្រៀង ទេព បូព្រឹក្ស ទើបសម្រាល​កូន ជាមួយ​ពាក្យពេចន៍​ដ៏កក់ក្ដៅផ្សេងៗគ្នា
                        </p>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import moment from 'moment'
export default{
    colorMode: 'light',
    name: "Detail",
    head(){
      return {
        meta:[
          { hid: 'og-type', property: 'og:type', content: 'website' },
          {
                hid: "og:title",
                property: "og:title",
                content: "My Amazing Blog on The Joy of Painting",
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "Articles focused on the beautiful art of landscape painting.",
            },
          { 
            hid: 'og-image', property: 'og:image',
            content: 'https://etec-api.loveounnas.xyz/image_etec/'+this.detail.image
            //content: 'https://etec-api.loveounnas.xyz/image_etec/63f5bffa0399e5.40405733.png'
          },
          { hid: 'og-url', property: 'og:url', content: 'https://effortless-froyo-c29932.netlify.app/' },
          { property: "og:image:width", content: "740" },
            { property: "og:image:height", content: "300" },
        ]
      }
    },
    data(){
        return {
           detail: {},
           url: null,
           id: null,
           type: null,
        }
    },
    mounted() {
        this.findById()
        this.getApp()
    },
    computed: {
        description: function(){
            return this.detail.text
        }
    },
    methods: {
        findById(){
            this.id = this.$route.query.id
            this.type = this.$route.query.type
            var input = {
                id: this.id,
                type: this.type
            }
            this.$axios.$post('detail',input).then(response => {
                console.log(100,response);
                this.detail = response
                this.detail.date = moment(this.detail.created_at, "YYYYMMDD").fromNow();
            })
        },

        getApp(){
           this.url = this.$route.fullPath
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