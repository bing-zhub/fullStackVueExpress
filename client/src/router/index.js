import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import Page404 from '@/components/Page404'
import QuillEditor from '@/components/QuillEditor'
import ViewSong from '@/components/ViewSong'
import CreateMarkdown from '@/components/CreateMarkdown'
import Markdowns from '@/components/Markdowns'
import ViewMarkdown from '@/components/ViewMarkdown'

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
      component: Index
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
      path: '/quill',
      name: 'quill',
      component: QuillEditor
    }, {
      path: '/song/:songId',
      name: 'song',
      component: ViewSong
    }, {
      path: '/markdowns/create',
      name: 'create-markdown',
      component: CreateMarkdown
    }, {
      path: '/markdowns',
      name: 'markdowns',
      component: Markdowns
    }, {
      path: '/markdown/:markdownId',
      name: 'markdown',
      component: ViewMarkdown
    }
  ]
})
