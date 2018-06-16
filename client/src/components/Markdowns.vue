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
                v-for="Markdown in Markdowns"
                :key="Markdown.id">
                <v-card-text color="black">{{Markdown.title}} |
                  {{Markdown.author}} |
                  {{Markdown.description}}
                </v-card-text>
                <v-btn
                color="primary"
                @click="navigateTo({
                    name: 'Markdown',
                    params: {
                      MarkdownId: Markdown.id
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
      Markdowns: null
    }
  },
  async mounted () {
    this.Markdowns = (await MarkdownService.index()).data
    console.log(this.Markdowns)
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
