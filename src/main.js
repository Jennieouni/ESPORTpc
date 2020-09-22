// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

window.token = ''
let bus = new Vue()
Vue.prototype.bus = bus
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (localStorage.token) { // 判断当前的token是否存在
      next()
    } else {
      // console.log('需要登录')
      next(() => {
        // path: '/login',
        // query: {redirect: router.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        // let item = document.getElementById('login-wrap')
        // let item2 = document.getElementById('login-bg')
        // item.style.display = 'none'
        // item2.style.display = 'none'
      })
    }
  } else {
    next()
  }
})
