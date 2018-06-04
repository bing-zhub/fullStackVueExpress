<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="action"></slot>
    </v-toolbar>
    <slot>
      No Data is defined
    </slot>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: [
    'title'
  ],
  methods: {
    naviTo (des) {
      this.$route.push({
        name: des
      })
    }
  }
}
</script>
<style>

</style>
