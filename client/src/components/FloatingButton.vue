<template>
  <v-speed-dial
    absolute
    bottom
    left
    open-on-hover
    fixed
  >
    <v-btn
      slot="activator"
      color="blue darken-2"
      dark
      fab
    >
      <v-icon>account_circle</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="green"
      @click="$vuetify.goTo(0, options)"
    >
      <v-icon>edit</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="indigo"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="red"
    >
      <v-icon>delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>

export default {
  data () {
    return {
      duration: 500,
      offset: 0,
      easing: 'easeInOutCubic'
    }
  },
  computed: {
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    }
  }
}
</script>
<style>
#create .speed-dial {
  position: absolute;
}

#create .btn--floating {
  position: relative;
}
</style>
