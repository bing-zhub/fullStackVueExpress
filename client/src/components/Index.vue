<template>
    <v-app light>
    <v-content>
      <v-container>
        <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <div class="text-xs-center">
              <v-avatar size="125px">
                <img
                  class="img-circle elevation-7 mb-1"
                  src="http://palvg171j.bkt.clouddn.com/profile.jpeg"
                >
              </v-avatar>
              <div class="headline">Bing <span style="font-weight:bold">Zhu</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">This man is lazy, nothing left</div>
              <v-layout justify-space-between>
                <a href="http://palvg171j.bkt.clouddn.com/qrcode.jpeg" class="body-2">Wechat</a>
                <a @click="navigateTo({
                      name: 'root'
                    })" class="body-2">Home</a>
                    <p>最近进入考试周,比较忙commit就水水得了</p>
                <a href="https://github.com/bing-zhub" class="body-2">Github</a>
              </v-layout>
            </div>
          </v-flex>
          <v-flex xs12 md5 offset-md2>
            <div v-for="markdown in markdowns" :key="markdown.id">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="170px"
                  :src="markdown.imageUrl"
                >
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ markdown.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  {{ markdown.description }}
                </v-card-text>
                <v-card-actions>
                  <v-btn flat class="blue--text"
                    @click="navigateTo({
                      name: 'markdown',
                      params: {
                        markdownId: markdown.id
                      }
                    })">Read More</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer class="secondary" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
            by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            and <a class="white--text" href="https://github.com/bing-zhub" target="_blank">Bing Zhu</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>
<script>
import MarkdownService from '@/services/MarkdownService'

export default {
  data () {
    return {
      title: 'Your Logo',
      markdowns: null
    }
  },
  async mounted () {
    this.markdowns = (await MarkdownService.index()).data
    console.log(this.markdowns)
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style>
</style>
