<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs10 offset-xs1>
            <panel title='Songs'>
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
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>
<style>

</style>
