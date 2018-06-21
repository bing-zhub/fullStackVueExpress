<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
          <div style="">{{markdown.title}}</div>
          <td/>
          {{markdown.author}}
          <vue-markdown :source="markdown.content">
          </vue-markdown>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import MarkdownService from '@/services/MarkdownService'
export default {
  data () {
    return {
      markdown: {}
    }
  },
  components: {
    VueMarkdown
  },
  async mounted () {
    const markdownId = this.$store.state.route.params.markdownId
    this.markdown = (await MarkdownService.show(markdownId)).data
  }
}
</script>
<style>
</style>
