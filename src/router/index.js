
import VueRouter from 'vue-router'
import Home from '../pages/home/home.vue'
import Destination from '../pages/destination/destination.vue'
import Guides from '../pages/guides/guides.vue'
import AboutUs from '../pages/aboutUs/aboutUs.vue'
import Contract from '../pages/contract/contract.vue'
import Domestic from '../pages/destination/Domestic.vue'
import HongMT from '../pages/destination/HongMT.vue'
import JapanK from '../pages/destination/JapanK.vue'
import SouthAsia from '../pages/destination/SouthAsia.vue'
import EurA from '../pages/destination/EurA.vue'
import AusAfri from '../pages/destination/AusAfri.vue'
import Content from '../pages/guides/content.vue'
import Personal from '../pages/personal/personal.vue'
import Login from '../pages/login/login.vue'
// import Index from '../pages/index/index.vue'
import Index from '../pages/center/index.vue'
import SignOut from '../pages/signout/index.vue'

export default [
  {
  // // mode: 'history',
  // // //路由跳转回到顶部
  // // scrollBehavior(to, from, savePostion) {
  // //     return {x: 0, y: 0}
  // // },
  // // routes: [
      path: '/',
      redirect: '/home'
    }, 
    {
      path: '/login', //登陆
      meta: { auth: false },
      name: 'login',
      component: Login
    },
     {
      path: '/signout', //登陆
      name: 'signout',
      component: SignOut
    },
     {
      path: '/index', //个人中心
      meta: { auth: true },
      name: 'index',
      component: Index
    },{
      path: '/home', //首页
      meta: { auth: false },
      name: 'home',
      component: Home
    }, {
      path: '/destination',
      component: Destination
    }, {
      path: '/guides',
      // name: 'guides',
      component: Guides,
      children: [
        {
          // 国内
          path: '/',
          name: 'guides',
          component: Domestic
        }, {
          // 港澳台 hongkong macau taiwan
          path: 'hmt',
          name: 'hmt',
          component: HongMT
        }, {
          // 日韩 JAPAN Korea,
          path: 'japanK',
          name: 'japanK',
          component: JapanK
        }, {
          // 东南亚 southeast Asia
          path: 'southAsia',
          name: 'southAsia',
          component: SouthAsia
        }, {
          // 欧美 Europe American
          path: 'eurA',
          name: 'eurA',
          component: EurA
        }, {
          // 澳非 Austrilia Afica
          path: 'ausAfri',
          name: 'ausAfri',
          component: AusAfri
        }
      ]
    }, {
      path: '/guides/content',
      name: 'content',
      component: Content
    }, {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs
    }, {
      path: '/contract',
      name: 'contract',
      component: Contract
    }, {
      path: '/personal',
      name: 'personal',
      component: Personal
    }
  // ]
]
