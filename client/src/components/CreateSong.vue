<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs6>
            <panel title="Song Metadata">
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Title"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="song.title">
                  </v-text-field>

                  <v-text-field
                    label="Aritist"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="song.artist">
                  </v-text-field>

                  <v-text-field
                    label="Genre"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="song.genre">
                  </v-text-field>

                  <v-text-field
                    label="Album"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="song.album">
                  </v-text-field>

                  <v-text-field
                    label="AlbumImageUrl"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="song.albumImageUrl">
                  </v-text-field>

                  <v-text-field
                    label="Tab"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="song.tab">
                  </v-text-field>

                  <v-text-field
                    label="Lyrics"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="song.lyrics"
                    multi-line>
                  </v-text-field>
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
                  <span>提醒</span>
                  <v-spacer></v-spacer>
                  <v-menu bottom left>
                  </v-menu>
                </v-card-title>
                <span>{{ message }}</span>
                <v-card-actions>
                  <v-btn color="primary" flat @click.stop="dialog=false" @click="redirect">关闭</v-btn>
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
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        lyrics: '',
        tab: ''
      },
      dialog: false,
      message: '添加成功',
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async post () {
      try {
        const isAllFilled = Object
          .keys(this.song)
          .every(key => !!this.song[key])
        console.log(this.song)
        if (!isAllFilled) {
          this.message = '文本框未填写完整'
          return
        }

        const response = await SongsService.post({
          title: this.song.title,
          artist: this.song.artist,
          genre: this.song.genre,
          album: this.song.album,
          albumImageUrl: this.song.albumImageUrl,
          lyrics: this.song.lyrics,
          tab: this.song.tab
        })
        console.log(response.data)
      } catch (err) {
        console.log(err)
        this.messgae = err
      }
    },
    redirect () {
      const isAllFilled = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (isAllFilled) {
        this.$router.push({
          name: 'songs'
        })
      }
    }
  }
}
</script>
<style>

</style>
