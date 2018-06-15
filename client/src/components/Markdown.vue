<template>
  <div id="editor">
      <mavon-editor style="height: 100%" v-model="src"></mavon-editor>
      <v-btn class="primary ml-2" @click="log">log</v-btn>
  </div>
</template>
<script>

export default {
  data () {
    return {
      src: `# this is h1
## this is h2`
    }
  },
  methods: {
    log () {
      console.log(this.src)
    }
  }
}
</script>
<style>
#editor {
  margin: auto;
  width: 80%;
  height: 580px;
}
</style>
