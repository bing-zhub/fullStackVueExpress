<template>
  <div>
    <v-btn primary :disabled="currentPage===1" @click="currentPage-=1">
      上一页
    </v-btn>
    {{currentPage}} / {{pageCount}}
    <v-btn primary :disabled="currentPage===pageCount" @click="currentPage+=1">
      下一页
    </v-btn>
    <pdf
      src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
      @num-pages="pageCount = $event"
      @page-loaded="currentPage = $event"
      :page="currentPage"
    />
  </div>
</template>
<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  },
  data () {
    return {
      currentPage: 1,
      pageCount: 0
    }
  }
}
</script>
