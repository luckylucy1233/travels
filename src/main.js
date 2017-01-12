// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './components/router'
// import ElementUI from 'element-ui'
// // import 'element-ui/lib/theme-default/index.css'

// Vue.use(Router,ElementUI)
Vue.use(Router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
