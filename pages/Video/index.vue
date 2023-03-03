<template>
    <b-container class="main-slide" >
        <b-row>
            <b-col class="mb-4" xl="3" lg="3" md="4" sm="6" cols="12" v-for="item in videos" :key="item" >
                <iframe width="100%" style="height:15rem" :src="item['url']" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <p :class="$colorMode.value=='dark'?'text-light-mode' : 'text-light-mode'" class="pt-2">
                   {{ item['title'] }}
                </p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
 export default{
    colorMode: 'light',
    data() {
        return {
           videos: []
        }
    },
    created(){
        this.get()
    },
    methods:{
        get(){
            this.$axios.$get('getAllVideo').then(response => {
                this.videos = response.data
            })
        }
    }
 }
</script>