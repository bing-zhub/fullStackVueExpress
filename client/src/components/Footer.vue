<template>
  <v-footer height="auto">
    <v-flex xs12 >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            class="mx-3 white--text"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          这个人很懒,什么都没有留下...
        </v-card-text>
        <v-card-text class="white--text">
          &copy;2018 — Powered by <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ['fab fa-weixin', 'fab fa-qq', 'fab fa-google-plus', 'fas fa-graduation-cap']
  })
}
</script>
