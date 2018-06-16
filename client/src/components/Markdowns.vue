<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs10 offset-xs1>
            <panel title='Markdowns'>
              <router-link  slot="action" :to="{name: 'create-markdown'}">
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
                v-for="markdown in markdowns"
                :key="markdown.id">
                <v-card-text color="black">{{markdown.title}} |
                  {{markdown.author}} |
                  {{markdown.description}}
                </v-card-text>
                <v-btn
                color="primary"
                @click="navigateTo({
                    name: 'markdown',
                    params: {
                      markdownId: markdown.id
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
import MarkdownService from '@/services/MarkdownService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      markdowns: null
    }
  },
  async mounted () {
    this.markdowns = (await MarkdownService.index()).data
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
