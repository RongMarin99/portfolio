<template>
    <b-container class="main-slide" >
        <b-row>
            <b-col cols="8" class="mt-3">
               <h3>មោទកភាព! ចក្រភពអង្គរ ឬចក្រភពខ្មែរ លេចឡើងលើផែនទី​ចក្រភព​ចំនួន១០០ ក្នុងប្រវត្តិសាស្រ្តពិភពលោក​</h3>
               <b-row>
                 <b-col cols="6" class="mt-3">
                    <span>អង្គារ, 7 កុម្ភៈ 2023 10:36</span>
                 </b-col>
                 <b-col cols="6" class="mt-3">
                    <div class="float-right bg-primary rounded px-2 py-1 ml-1"  style="font-size:12px">
                            <ShareNetwork
                                network="facebook"
                                url="http://rongmarin.hyperphp.com"
                                title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                                description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                                quote="The hot reload is so fast it\'s near instant. - Evan You"
                                hashtags="vuejs,vite"
                            >
                            <div class="text-white d-flex">
                                <i class="material-icons" style="font-size:17px">share</i>&nbsp; Facebook
                                </div> 
                            </ShareNetwork>
                    </div>
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
                 </b-col>
               </b-row>
               <hr>
               <b-row>
                <b-col cols="12">
                    <p>ក្នុងប្រវត្តិសាស្រ្តពិភពលោក​រាប់ពាន់​ឆ្នាំមកនេះ មាន​ការលេចឡើង​ចក្រភពជាច្រើន។ ខាងក្រោមនេះ​គឺ​ជាចក្រភពធំៗទាំង១០០ ដោយ​ក្នុងនោះ​នៅតំបន់អាស៊ីអាគ្នេយ៍​ក៏មាន ៤ចក្រភពផងដែរ រួមមាន​ចក្រភពខ្មែរ (Khmer Empire), ភូមា (Taungoo Empire), Srivijaya Empire និង Majaphit Empire ដែល​ចក្រភពទាំងពីរជាផ្នែកមួយ​នៃឥណ្ឌូណេស៊ី និងម៉ាឡេស៊ី​​បច្ចុប្បន្ន។ អតីតចក្រភព​ធំជាងគេ គឺអង់គ្លេស បន្ទាប់មក ម៉ុងហ្គោល និង​រុស្ស៊ី។</p>
                    <figure>
                        <img src="https://via.placeholder.com/1000x400" alt="">
                    </figure>
                    <p>ក្នុងប្រវត្តិសាស្រ្តពិភពលោក​រាប់ពាន់​ឆ្នាំមកនេះ មាន​ការលេចឡើង​ចក្រភពជាច្រើន។ ខាងក្រោមនេះ​គឺ​ជាចក្រភពធំៗទាំង១០០ ដោយ​ក្នុងនោះ​នៅតំបន់អាស៊ីអាគ្នេយ៍​ក៏មាន ៤ចក្រភពផងដែរ រួមមាន​ចក្រភពខ្មែរ (Khmer Empire), ភូមា (Taungoo Empire), Srivijaya Empire និង Majaphit Empire ដែល​ចក្រភពទាំងពីរជាផ្នែកមួយ​នៃឥណ្ឌូណេស៊ី និងម៉ាឡេស៊ី​​បច្ចុប្បន្ន។ អតីតចក្រភព​ធំជាងគេ គឺអង់គ្លេស បន្ទាប់មក ម៉ុងហ្គោល និង​រុស្ស៊ី។</p>
                    
                </b-col>
               </b-row>
            </b-col>
            <b-col cols="4" class="mt-3">
               <h5 class="pb-1" style="border-bottom: 3px solid #FD7237;width:fit-content;">
                អត្ថបទទាក់ទង
                </h5>
                <b-row v-for="item in 10" :key="item">
                    <b-col cols="4">
                        <figure>
                            <img src="https://via.placeholder.com/250" alt="">
                        </figure>
                    </b-col>
                    <b-col cols="8" class="pl-0">
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
export default{
    name: "Detail",
    data(){
        return {
           
        }
    }
}
</script>