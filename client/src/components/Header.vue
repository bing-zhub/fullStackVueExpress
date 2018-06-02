<template>
  <v-toolbar fixde dark class="cyan" color="primary">
    <v-toolbar-title class="mr-4" light>
        <span @click="navigateTo({name: 'root'})" class="home">
            死宅の快乐天堂
        </span>
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn flat dark>
            browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn
          flat
          dark
          v-if='!$store.state.isUserLoggedIn'
          @click="navigateTo({name: 'register'})">
            Sign up
        </v-btn>
        <v-btn
          flat
          dark
          v-if='!$store.state.isUserLoggedIn'
          @click="navigateTo({name: 'login'})">
            Log in
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home{
    cursor: pointer;
}
</style>
