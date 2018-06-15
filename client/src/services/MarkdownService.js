import Api from '@/services/Api'

// Api().method(api请求地址)

export default {
  index () {
    return Api().get('markdown')
  },
  post (markdown) {
    return Api().post('markdown', markdown)
  },
  show (markdownId) {
    return Api().get(`markdown/${markdownId}`)
  }
}
