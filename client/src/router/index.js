import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
// import Heart from '@/components/Heart'
import Markdown from '@/components/Markdown'
import Page404 from '@/components/Page404'
import QuillEditor from '@/components/QuillEditor'
import ViewSong from '@/components/ViewSong'
import CreateMarkdown from '@/components/CreateMarkdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'page404',
      component: Page404
    }, {
      path: '/',
      name: 'root',
      component: HelloWorld
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/songs',
      name: 'songs',
      component: Songs
    }, {
      path: '/songs/create',
      name: 'create-song',
      component: CreateSong
    }, {
      path: '/markdown',
      name: 'markdown',
      component: Markdown
    }, {
      path: '/quill',
      name: 'quill',
      component: QuillEditor
    }, {
      path: '/song/:songId',
      name: 'song',
      component: ViewSong
    }, {
      path: '/markdown/create',
      component: CreateMarkdown
    }
  ]
})
