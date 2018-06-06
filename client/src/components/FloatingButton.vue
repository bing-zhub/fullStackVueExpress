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
      <v-icon large>face</v-icon>
      <v-icon large>close</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="red"
      @click="$vuetify.goTo(0, options)"
    >
      <v-icon large>arrow_drop_up</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="indigo"
      mx-3
    >
      <div style="font-size:2em">
        <i class="fab fa-qq"></i>
      </div>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="green"
      mx-4
    >
      <div style="font-size:2em">
        <i class="fab fa-weixin"></i>
      </div>
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
