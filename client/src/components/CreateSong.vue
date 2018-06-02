<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex xs6>
            <panel title="Song Metadata">
              <v-card-text>
                <v-form>
                  <v-text-field label="Title" type="text" v-model="title"></v-text-field>
                  <v-text-field label="Aritist" type="text" v-model="aritist"></v-text-field>
                  <v-text-field label="Genre" type="text" v-model="genre"></v-text-field>
                  <v-text-field label="Album" type="text" v-model="album"></v-text-field>
                  <v-text-field label="AlbumImageUrl" type="text" v-model="albumImageUrl"></v-text-field>
                  <v-text-field label="YoutubeID" type="text" v-model="youtubeID"></v-text-field>
                  <v-text-field label="Lyrics" type="text" v-model="lyrics" multi-line></v-text-field>
                  <v-text-field label="Tab" type="text" v-model="tab" multi-line></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.stop="dialog = !dialog" @click="post">添加</v-btn>
              </v-card-actions>
            </panel>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                <v-card-title>
                  <span>Information</span>
                  <v-spacer></v-spacer>
                  <v-menu bottom left>
                  </v-menu>
                </v-card-title>
                <span>{{ message }}</span>
                <v-card-actions>
                  <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
  data () {
    return {
      title: '',
      aritist: '',
      genre: '',
      album: '',
      albumImageUrl: '',
      youtubeID: '',
      lyrics: '',
      tab: '',
      dialog: false,
      message: '添加成功'
    }
  },
  components: {
    Panel
  },
  methods: {
    async post () {
      try {
        const response = await SongsService.post({
          title: this.title,
          artist: this.artist,
          genre: this.genre,
          album: this.album,
          albumImageUrl: this.albumImageUrl,
          youtubeID: this.youtubeID,
          lyrics: this.lyrics,
          tab: this.tab
        })

        console.log(response)
      } catch (err) {
        console.log(err)
        this.messgae = err
      }
    }
  }
}
</script>
<style>

</style>
