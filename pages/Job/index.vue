<template>
    <b-container class="main-slide" >
        <b-row>
            <b-col cols="12" xl="3" lg="3" md="6" sm="6" v-for="item in jobs" :key="item.index" class="mb-4">
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
    </b-container>
</template>

<script>
import moment from 'moment';
 export default{
    colorMode: 'light',
    data() {
        return {
           jobs: []
        }
    },
    created(){
        this.get()
    },
    methods:{
        get(){
            this.$axios.$post('job/lists').then(response => {
                this.jobs = response.data.data
            })
        },
        dateFormat(date){
            return moment(date).format('llll')
        }
    }
 }
</script>