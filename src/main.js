// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store/'
import components from './components/headnav.vue' //加载公共组件

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
    routes
})
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
