<template>
  <div id="app">
    <v-app>
      <page-header />
      <main>
        <v-container fluid>
          <router-view></router-view>
          <!-- h -->
          <v-flex offset-xs5>
            <floating-button/>
          </v-flex>
        </v-container>
      </main>
      <page-footer/>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header'
import PageFooter from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    FloatingButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
