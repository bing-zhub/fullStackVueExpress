<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm80 md4>
            <panel title='登录'>
              <v-card-text>
                <v-form autocomplete="off">
                  <v-text-field
                  prepend-icon="person"
                  palceholder="example@example.com"
                  name="login"
                  label="电子邮箱"
                  type="text"
                  v-model="email"
                  autocomplete="new-password"
                  :rules="[rules.required]">
                  </v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  palceholder="password"
                  name="password"
                  label="密码"
                  id="password"
                  type="password"
                  v-model="password"
                  autocomplete="new-password"
                  :rules="[rules.required]">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.stop="dialog = !dialog " @click="login">登录</v-btn>
              </v-card-actions>
            </panel>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                <v-card-title>
                  <span>提醒</span>
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
      password: '',
      dialog: false,
      message: '登录成功',
      rules: {
        required: (value) => !!value || '这是一个必填项'
      }
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
