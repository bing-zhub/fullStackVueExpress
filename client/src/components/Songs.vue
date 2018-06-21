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
              <v-card
                dark
                color="grey lighten-4"
                class="black--text"
                v-for="song in songs"
                :key="song.id">
                <v-card-text color="black">
                  {{song.genre}}     {{song.title}}
                  {{song.artist}}    {{song.album}}
                </v-card-text>
                <v-btn
                color="primary"
                @click="navigateTo({
                    name: 'song',
                    params: {
                      songId: song.id
                    }
                  })">
                  查看
                </v-btn>
                <v-divider inset></v-divider>
              </v-card>
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
