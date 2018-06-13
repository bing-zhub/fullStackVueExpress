<template>
  <div id="app">
    <v-app>
      <page-header />
        <v-container fluid>
          <main>
            <router-view></router-view>
            <!-- h -->
            <v-flex offset-xs5>
              <floating-button/>
            </v-flex>
          </main>
        </v-container>
        <div>
          <page-footer/>
        </div>
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
