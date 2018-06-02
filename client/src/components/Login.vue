<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm80 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form autocomplete="off">
                  <v-text-field prepend-icon="person" palceholder="email" name="login" label="Login" type="text" v-model="email" autocomplete="new-password"></v-text-field>
                  <v-text-field prepend-icon="lock" palceholder="password" name="password" label="Password" id="password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.stop="dialog = !dialog " @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
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
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

require('../../node_modules/material-icons/iconfont/material-icons.css')

export default {
  data () {
    return {
      email: '',
      password: '',
      dialog: false,
      message: '登录成功'
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        this.error = err.response.data.error
        this.message = err.response
      }
    }
  },
  props: {
    source: String
  }
}
</script>

<style>
.error{
  color:red;
}
</style>
