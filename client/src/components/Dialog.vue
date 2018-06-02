<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span>Information</span>
        <v-spacer></v-spacer>
        <v-menu bottom left>
        </v-menu>
      </v-card-title>
      <span>{{ message }}</span>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      message: ''
    }
  },
  props: [
    'dialog',
    'message'
  ]
}
</script>

