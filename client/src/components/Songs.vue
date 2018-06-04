<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs10 offset-xs1>
            <panel title='Songs'>
              <router-link  slot="action" :to="{name: 'create-song'}">
                <v-btn
                  flat
                  fab
                  medium>
                  <v-icon>add</v-icon>
                </v-btn>
              </router-link>
              <!-- ↑相同↓ -->
              <!-- <slot name="action">
                <v-btn
                @click="navigateTo({name:'create-song'})">
                  <v-icon>add</v-icon>
                </v-btn>
              </slot> -->
              <div class="social-share" data-sites='qq,wechat,qzone' data-url='http://www.baidu.com'>
              </div>
              <v-card
                dark
                color="blue darken-1"
                v-for="song in songs"
                :key="song.id">
                <v-card-text>{{song.title}} |
                  {{song.artist}} | {{song.album}} |
                  {{song.genre}} | {{song.albumImageUrl}} |
                  {{song.youtubeID}} | {{song.lyrics}} |
                  {{song.tab}}</v-card-text>
              </v-card>
              <v-spacer></v-spacer>
            </panel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null,
      config: {
        // url: 'http://www.baidu.com', // 网址，默认使用 window.location.href
        source: 'Hello', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        // title: '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        // description: '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        // image: '', // 图片, 默认取网页中第一个img标签
        sites: ['qzone', 'qq', 'wechat'], // 启用的站点
        // disabled: ['google', 'facebook', 'weibo','twitter', 'douban'], // 禁用的站点
        // wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
        // wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
      }
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
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
