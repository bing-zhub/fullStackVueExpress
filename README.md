# fullStackVueExpress

这是一个基于vue和express的全栈项目,目标是实现一个符合Material Design风格的CMS系统.
其应用场景可以是博客/分享网站(技术,文学,养生等)/小型公司,工作室主页 etc..

前端基于vue-cli提供的webpack模板进行开发, 使用vuetify作为前端组件库, 配合一些列的第三方组件化工具,完成前端的开发.

后端使用express.采用Sequelize对数据库进行增删改查操作.

前后端使用axios完成RESTfull交互

## Getting started

1.`git clone https://github.com/bing-zhub/fullStackVueExpress.git`

2.`cd fullStackVueExpress`

### client

3.`cd client`

4.`cnpm install`

5.`npm run start`

### server

3.`cd server`

4.`cnpm install`

5.`npm run start`

*注意* 你需要在config目录下配置config.js以实现数据库连接等, 如果不进行配置 将无法运行

```js
module.exports = {
    port:process.env.PORT || 8081,
    db:{
        database: process.env.DB_NAME || 'your dbname',
        user: process.env.DB_USER || 'your db user',
        password: process.env.DB_PWD || 'your db password',
        options:{
            dialect: process.env.DIALECT || 'your db version',
            host: process.env.HOST || 'your db host',
            storage: './example.mysql'
        }
    },
    authentication:{
        jwtSecret: process.env.JWT_SECRET || 'bing'
    }
}
```

## 技术栈

### 前端 vue 使用vue-cli的webpack模板

- axios api请求工具

基于promise的HTTP客户端

- vuex状态管理

```
用户的登录状态, 页面路由状态等
```

- vue-router 前端路由

```
对前端url进行解析, 指向不同界面
```

- vuetify 前端组件

```
一个符合MaterialDesign的前端组件库 对vue支持甚好
```

- fontawesome

```
前端图标库: 图标组件库
```

- quillEditor

```
富文本编辑器: 作用户编辑用(todo)
```

- editor.md,simplemde-markdown-editor

```
Markdown编辑器: 一个高生产力markdown工具(todo)
```

- video player (to do)

### 后端 express

- bcrypt-nodejs sha256加密工具

- bluebird promisify工具

- body-parser api请求解析工具

- cors 跨域请求工具

- joi 数据模型验证

- jsonwebtoken 用户身份信息认证

- morgan 日志中间件

- sequelize 基于promise的ORM工具,用于数据库交互

### 数据库 mysql

## 目录结构

```
--client
    --build build文件夹**vue-cli生成**
    --config webpack等配置文件**vue-cli生成**
    --node_modules 各种依赖库
    --src vue前端源码
        -- assets 放置一些静态文件
            -- highlight markdown语法高亮样式
            -- style 公用css样式库
        -- components 组件库使用大驼峰命名
            -- Blank.vue 空白模板便于创建新组件
            -- CreateSong.vue 用于创建新内容
            -- Dialog.vue 会话弹出框
            -- FloatingButton.vue 浮动按钮
            -- Footer.vue 页脚
            -- Header.vue 页眉
            -- HelloWorld.vue vue-cli自动生成的首页
            -- Login.vue 登录界面
            -- Markdown.vue Markdown编辑器
            -- Page404.vue 404页面
            -- Panel.vue 面板公用组件
            -- QuillEditor.vue 富文本编辑器
            -- Register.vue 注册页面
            -- Songs.vue 主要内容加载页
            -- ViewSong.vue 详情页
        -- config
        -- router 路由处理
            -- index.js 前端路由
        -- services 服务处理
            -- Api.js 发送api请求
            -- AuthenticationServices.js 处理登录/注册
            -- SongServices.js 处理歌曲查看/添加/详情
        -- store 状态仓库
            -- 放置state mutation actions
        -- App.vue 主入口
        -- main.js 主入口
    --static 静态资源
    --test 测试文件
--server
    -- node_modules 服务端第三方库
    -- src 服务端源码
        -- config
            -- config.js 配置端口/数据库服务器/JWT 密码
        -- controller api详细处理
            -- AuthenticationController.js 处理来自前端的登录注册请求
            -- SongsController.js 处理来自前端的检索添加请求
        -- model 数据库Schema
            -- index.js 数据库Schema索引
            -- Song.js 歌曲Schema
            -- User.js 用户Schema
        -- policy 输入验证规则
            -- AuthenticationControllerPolicy.js 验证注册时用户名与密码是否规范
    -- app.js 后端主入口
    -- routes.js 后端路由,对api进行路由
```

## 示例 -- 用户注册

### 前端 (client)

入口文件 index.html, 在div标签中id为app的位置会由vue渲染页面
vue主文件在src/app.vue

```html
<template>
  <div id="app">
    <v-app>
    <!-- 注册页面入口在header中 -->
      <page-header/>
      <main>
        <v-container fluid>
          <router-view></router-view>
          <v-flex offset-xs5>
            <floating-button/>
          </v-flex>
        </v-container>
      </main>
      <page-footer/>
    </v-app>
  </div>
</template>
```

page-header page-footer与floating-button会在全局出现(任何页面都包含着三个组件)
router-view会根据当前url渲染不同的内容

<page-header/>为自定义组件 为页面页面的header 通过

```js
import PageHeader from '@/components/Header' 
//引入header @是webpack的alias 配置为src目录
import PageFooter from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'

export default {
  name: 'App',
  components: {
    PageHeader, //在组件中注册header, 不注册无法直接使用自定义组件
    PageFooter,
    FloatingButton
  }
}
```

进行组件注册,在header中放置一些导航信息

下面就进入header.vue

```html
<template>
  <v-toolbar fixde dark class="cyan" color="primary">
    <v-toolbar-title class="mr-4" light>
    <!--工具栏-->
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
          @click="navigateTo({name: 'songs'})">
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
        <!-- @click会注册一个监听器 但点击时调用navigateTo方法(自定义方法) -->
        <!-- 传入router对象-->
        <!-- v-if是一个条件渲染 当v-if后的值为false时 不渲染(隐藏) -->
        <!-- 是为了在用户登陆后隐藏注册和登录按钮 v-if是由vuex管理的全局状态 -->
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
```

Script

```js
export default {
  methods: {
  //自定义方法 在单击时 将route放入全局router 实现页面跳转
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
```

根据路由检索 route/index.js 中的定义

```js
import Register from '@/components/Register'
export default new Router({
  routes: [
   {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
```

'/register' 被指向 'src/components/Register'

```html
<v-card-text>
                <v-form autocomplete="off">
                  <v-text-field
                  prepend-icon="person"
                  palceholder="email"
                  name="login"
                  label="Email"
                  type="text"
                  :rules="[rules.required]"
                  v-model="email">
                  </v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  palceholder="password"
                  name="password"
                  label="Password"
                  id="password1"
                  type="password"
                  :rules="[rules.required]"
                  v-model="password1"
                  autocomplete="new-password">
                  </v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  palceholder="password"
                  name="password"
                  label="Confirm Password"
                  id="password2"
                  type="password"
                  :rules="[rules.required]"
                  v-model="password2"
                  autocomplete="new-password">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.stop="dialog = !dialog" @click="register">Sigup</v-btn>
              </v-card-actions>
```

  dialog组件

```html
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
```

注册ui组件主要有vuetify的v-form提供 三个v-form-field分别定义了三个字段邮箱/密码/确认密码  
在v-card-actions 定义了两个监听 当事件触发 打开dialog被设置为true 显示出来 并且触发自定义的方法register :rules用来限制用户输入

```js
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password1: '',
      password2: '',
      error: null,
      drawer: null,
      dialog: false,
      message: '注册成功',
      rules: {
        required: (value) => !!value || '这是一个必填项'
      }
    }
  },
  methods: {
    async register () {
      try {
        if (this.email === '' || this.password1 === '' || this.password2 === '') {
          this.message = '信息未填写完整'
        } else if (this.password1 !== this.password2) {
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
```

在register中引用AuthenticationService提供的register方法 并传入一个对象 这是一个异步操作用到了async/await 在调用成功后 将message设置为'登陆成功' 

之后对store进行dispatch
![vuex](https://vuex.vuejs.org/vuex.png)
只有通过dispatch才能触发store中的action从而修改state

我们在main.js中进行了如下的声明

```js
import store from '@/store/store'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```

从而将store注册为一个全局组件

store.js

```js
import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default new vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    }
  }
})
```

这里设置了三个state:token,user,isUserLoggedIn
isUserLoggedIn通过判断token和user是否为空实现
user与token的更改则由action和mutation实现

回到register.vue 我们通过`import AuthenticationService from '@/services/AuthenticationService'`引用了AuthenticationService 在这个模块中 实现了与后端的交互 注册/登录

```js
import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
```

在这个模块中我们向后端'/register'发出post请求 参数为credentials即`{
            email: this.email,
            password: this.password
          }`

在这里我们还引用Api模块

```js
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
```

在这个模块中我们导入了axios用来实现http请求,并配置了后端的基地址.

**至此,前端已经发出了API请求,等待后端处理**

### 后端(server)

后端主入口为`src/app.js`

```js
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const {sequelize} = require('./models')
const config = require('./config/config')
const routes = require('./routes')

const app = express();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({force:false})
    .then(() => {
        app.listen(config.port)  
        console.log(`Server started on port ${config.port}`)      
    })
```

通过require将所有的外部引用文件导入到项目中,通过app.use将引入的文件注册到全局 使之可以在全局进行访问
`require('./routes')(app)`完成路由的注册

在`routes.js`中

```js
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AuthenticationController = require('../src/controller/AuthenticationController') 

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
```

通过require导入AuthenticationControllerPolicy和AuthenticationController,其中前者主要用于检测用户的输入的合法性(通过joi及正则表达式进行验证),后者用于数据库操作.
AuthenticationControllerPolicy作为一个中间件,先于AuthenticationController执行.
在`AuthenticationControllerPolicy.js`中

```js
const Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema = {
            email:Joi.string().email(),
            password:Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
        }

        const {error, value} = Joi.validate(req.body, schema)

        if(error){
            switch(error.details[0].type){
                case 'string.email':
                    res.status(400).send({
                        error : 'you have to provide a validate email address'
                    })
                    break
                case 'string.regex.base':
                    res.status(400).send({
                        error: `you have to provide a validate password:

                        1. upper case 2. lower case 3.numerics 4. 8-32 in length`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'invalidated registration information'
                    })
            }
        }else{
            next();
        }
    }
}
```

使用joi验证用户的邮箱是否合法,密码是否由大小写数字8-32位组成.
调用语句`Joi.validate`去用创建schema验证请求体
如果不符合schema则报错,下面就通过一个条件分支进行判断,把具体的出错原因返回到前端,以支持用户修改. 如果没有出现错误,即符合schema则调用next(),执行`AuthenticationController.js`的内容

`AuthenticationController.js`中

```js
const {User} = require('../models')

module.exports = {
  async register (req, res) {
      try{
          const user = await User.create(req.body)
          res.send(user.toJSON())
      }catch (err){
          res.status(400).send({
              error:"this email is already in use."
          })
      }
  }
}
```

User为数据库的Schema定义了表的字段以及数据类型,通过require导入进来
这个模块导出的为一个异步方法 register() 
首先通过`User.create(req.body)`创建一个User实例,数据位请求中的body
创建成功后将示例user析为json格式返回到前端

至此后端的任务也已经完成.

本项目采取前后端分离的方式进行开发, 以最大化开发灵活度. 并且使用eslint规范,代码具有一定的规范性
