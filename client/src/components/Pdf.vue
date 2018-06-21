<template>
  <div style="margin-top: 20px">
    <v-btn primary :disabled="currentPage===1" @click="currentPage-=1">
      上一页
    </v-btn>
    {{currentPage}} / {{pageCount}}
    <v-btn primary :disabled="currentPage===pageCount" @click="currentPage+=1">
      下一页
    </v-btn>
    <pdf
      src="http://palvg171j.bkt.clouddn.com/2018%E8%AE%B2%E4%B9%89_Wed%20Jun%2020%202018_3907.pdf"
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
