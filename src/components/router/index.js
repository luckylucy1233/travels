import Router from 'vue-router'
import Home from '../home/home.vue'
import Destination from '../destination/destination.vue'
import Guides from '../guides/guides.vue'
import AboutUs from '../aboutUs/aboutUs.vue'

export default new Router({
  mode:'history',
  scrollBehavior(to, from, savePostion){
    if (to.hash){
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home',name:'home', component:Home, },
    { path: '/destination',name:'destination', component:Destination, },
    { path: '/guides',name:'guides', component:Guides, },
    { path: '/aboutUs',name:'aboutUs', component:AboutUs, }
  ],
})
