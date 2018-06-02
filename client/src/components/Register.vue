<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <panel title="Register">
              <v-card-text>
                <v-form autocomplete="off">
                  <v-text-field prepend-icon="person" palceholder="email" name="login" label="Email" type="text" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" palceholder="password" name="password" label="Password" id="password1" type="password" v-model="password1" autocomplete="new-password"></v-text-field>
                  <v-text-field prepend-icon="lock" palceholder="password" name="password" label="Confirm Password" id="password2" type="password" v-model="password2" autocomplete="new-password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.stop="dialog = !dialog" @click="register">Sigup</v-btn>
              </v-card-actions>
            </panel>
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
import Panel from '@/components/Panel'

require('../../node_modules/material-icons/iconfont/material-icons.css')

export default {
  data () {
    return {
      email: '',
      password1: '',
      password2: '',
      error: null,
      drawer: null,
      dialog: false,
      message: '注册成功'
    }
  },
  methods: {
    async register () {
      try {
        if (this.password1 !== this.password2) {
          this.message = '两次密码输入不一致,请重试'
        } else {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
          this.message = '登录成功'
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        }
      } catch (err) {
        this.message = err.response.data.error
      }
    }
  },
  components: {
    Panel
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
