import Router from 'vue-router'
import Home from '../home/home.vue'
import Destination from '../destination/destination.vue'
import Guides from '../guides/guides.vue'
import AboutUs from '../aboutUs/aboutUs.vue'
import Contract from '../contract/contract.vue'
import Domestic from '../destination/Domestic.vue'
import HongMT from '../destination/HongMT.vue'
import JapanK from '../destination/JapanK.vue'
import SouthAsia from '../destination/SouthAsia.vue'
import EurA from '../destination/EurA.vue'
import AusAfri from '../destination/AusAfri.vue'

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savePostion) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'home', component: Home},
    {path: '/destination', name: 'destination', component: Destination,
      children: [
        {
          path:'/',redirect: '/domestic'
        },
        {
          // 国内
          path: '/domestic', name: 'domestic', component: Domestic
        },
        {
          // 港澳台 hongkong macau taiwan
          path: '/hmt', name: 'hmt', component: HongMT
        },
        {
          // 日韩 JAPAN Korea,
          path: '/japanK', name: 'japanK', component: JapanK
        },
        {
          // 东南亚 southeast Asia
          path: '/southAsia', name: 'southAsia', component: SouthAsia
        },
        {
          // 欧美 Europe American
          path: '/eurA', name: 'eurA', component: EurA
        },
        {
          // 澳非 Austrilia Afica
          path: '/ausAfri', name: 'ausAfri', component: AusAfri
        },
      ]
    },
    {path: '/guides', name: 'guides', component: Guides},
    {path: '/aboutUs', name: 'aboutUs', component: AboutUs},
    {path: '/contract', name: 'contract', component: Contract}
  ],
})
