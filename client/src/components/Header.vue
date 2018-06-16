<template>
  <v-toolbar fixde dark class="cyan" color="primary">
    <v-toolbar-title class="mr-4" light>
        <span
          @click="navigateTo({name: 'root'})" class="home">
            <v-icon>home</v-icon>
            <span md>Homepage</span>
        </span>
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn
          flat
          dark
          @click="navigateTo({name: 'markdowns'})">
            发现
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn
          flat
          dark
          v-if='!$store.state.isUserLoggedIn'
          @click="navigateTo({name: 'register'})">
            注册&nbsp;&nbsp;<v-icon>fas fa-user-plus</v-icon>
        </v-btn>
        <v-btn
          flat
          dark
          v-if='!$store.state.isUserLoggedIn'
          @click="navigateTo({name: 'login'})">
            登录&nbsp;&nbsp;<v-icon>fas fa-sign-in-alt</v-icon>
        </v-btn>
        <v-btn
          flat
          dark
          v-if='$store.state.isUserLoggedIn'
          @click="logout">
            退出登录&nbsp;&nbsp;<v-icon>fas fa-sign-out-alt</v-icon>
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home{
    cursor: pointer;
}
</style>
