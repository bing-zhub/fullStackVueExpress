<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{title}}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <slot></slot>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: [
    'title'
  ]
}
</script>
<style>

</style>
