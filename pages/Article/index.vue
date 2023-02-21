<template>
    <b-container class="main-slide" >
        <b-row>
            <b-col class="mb-4" cols="12" xl="3" lg="3" md="6" sm="6" v-for="item in Category" :key="item">
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
                            {{ item['date'] }}
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
    </b-container>
</template>
<script>
export default{
    data(){
        return {
            Category:[],
            type: null
        }
    },
    created(){
        this.get()
    },
    methods:{
        get(){
            this.$axios.$post('article').then(response => {
                this.Category = response
                console.log(100, response);
            })
        },
        getImage(image) {
          return 'http://localhost:8000/image_etec/' + image
          //  return 'http://etec-api.loveounnas.xyz/image_etec/' + image
        },
    }
}
</script>