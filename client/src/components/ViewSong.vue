<template>
<v-app>
    <!-- <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs10 offset-xs1>
            <panel title="歌曲详情">
              <v-card
                dark
                color="grey lighten-4"
                class="black--text"/>
                演唱者
                <v-card-text color="black">{{song.title}} |
                  {{song.artist}} | {{song.album}} |
                  {{song.genre}} | {{song.albumImageUrl}} |
                  {{song.youtubeID}} | {{song.lyrics}} |
                  {{song.tab}}
                </v-card-text>
            </panel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> -->
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media :src="song.albumImageUrl" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{song.artist}}</h3>
            <div>{{song.title}}</div>
            <div>{{song.artist}}</div>
            <div>{{song.lyrics}}</div>
          </div>
        </v-card-title>
        <!-- <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-flex>
  </v-layout>
  </v-app>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel
  }
}
</script>
<style>

</style>
