<template>
    <div class="container">
        <div class="jumbotron">
          <h1>Share Link Generator</h1>
        </div>
        <div id="app">
          <form @submit.prevent="generateURLs">
            <h2>Input</h2>
            <div class="form-group">
              <label for="url">URL</label>
              <input class="form-control" name="url" type="url" pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?" required v-model.trim="url">
            </div>
            <div class="form-group">
              <label for="url">Text</label>
              <input class="form-control" name="text" type="text" required v-model.trim="text">
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit">Generate</button>
            </div>
          </form>
          <template v-if="success">
          <h2>Output</h2>
          <div class="form-group">
            <label for="url">Facebook <a :href="facebookURL" target="_blank" rel="noopener noreferrer">Test</a></label>
            <input name="url" type="url" class="form-control" v-model="facebookURL">
          </div>
          <div class="form-group">
            <label for="url">Twitter <a :href="twitterURL" target="_blank" rel="noopener noreferrer">Test</a></label>
            <input name="text" type="text" class="form-control" v-model="twitterURL">
          </div>
          <div class="form-group">
            <label for="url">LinkedIn <a :href="linkedinURL" target="_blank" rel="noopener noreferrer">Test</a></label>
            <input name="text" type="text" class="form-control" v-model="linkedinURL">
          </div>
          </template>
        </div>
      </div>
</template>



<script>

export default {
    
  data() {
    return {
 url: '',
    text: '',
    facebookURL: '',
    twitterURL: '',
    linkedinURL: '',
    success: false
    }
   
  },
  computed: {
    encodedURL() {
      return encodeURIComponent(this.url);
    },
    encodedText() {
      return encodeURIComponent(this.text);
    }
  },
  methods: {
    generateURLs(event) {
      if (event.target.checkValidity()) {
        this.success = true;
        this.facebookURL =  'https://www.facebook.com/dialog/feed?app_id=1389892087910588%20&redirect_uri=https://etec-center1.netlify.app&link=https://etec-center1.netlify.app&picture=http://placekitten.com/500/500%20&caption=This%20is%20the%20caption%20&description=This%20is%20the%20description'
        this.twitterURL =  'https://twitter.com/intent/tweet?text=' + this.encodedText + '&url=' + this.encodedURL;
        this.linkedinURL = 'http://www.linkedin.com/shareArticle?mini=true&url=' + this.encodedURL + '&title=' + this.encodedText;
      }
    }
  }
}


</script>