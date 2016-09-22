import Vue from 'vue'
import VueRes from 'vue-resource'
import Router from 'vue-router'
import App from './App'
import Index from './subpages/Index'
import Gsdt from './subpages/Gsdt'
import Gsjj from './subpages/Gsjj'
import Hyfa from './subpages/Hyfa'
import Lxfs from './subpages/Lxfs'
import Lyb from './subpages/Lyb'
import Qyln from './subpages/Qyln'
import Swhz from './subpages/Swhz'
import Zpxx from './subpages/Zpxx'
import Zyyw from './subpages/Zyyw'

// plugins
import Device from './plugins/device'

import ToastPlugin from './plugins/toast'
import AlertPlugin from './plugins/alert'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Router)
Vue.use(VueRes)
Vue.config.devtools = true

// $device
Vue.use(Device)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

const router = new Router({
  transitionOnLoad: false
})

/**
* sync router params
*/
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

/**
* sync router loading status
*/
const commit = store.commit || store.dispatch
router.beforeEach(({ to, from, next }) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (toIndex > fromIndex) {
      commit('UPDATE_DIRECTION', 'forward')
    } else {
      commit('UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    commit('UPDATE_DIRECTION', 'forward')
  }
  commit('UPDATE_LOADING', true)
  setTimeout(next, 50)
})
router.afterEach(() => {
  commit('UPDATE_LOADING', false)
})

sync(store, router)

router.map({
  '/': {
    name: '公司首页',
    component: Index
  },
  '/subpages/gsdt': {
    name: '公司动态',
    component: Gsdt
  },
  '/subpages/gsjj': {
    name: '公司简介',
    component: Gsjj
  },
  '/subpages/hyfa': {
    name: '行业方案',
    component: Hyfa
  },
  '/subpages/lxfs': {
    name: '联系方式',
    component: Lxfs
  },
  '/subpages/lyb': {
    name: '留言板',
    component: Lyb
  },
  '/subpages/qyln': {
    name: '企业理念',
    component: Qyln
  },
  '/subpages/swhz': {
    name: '商务合作',
    component: Swhz
  },
  '/subpages/zpxx': {
    name: '招聘信息',
    component: Zpxx
  },
  '/subpages/zyyw': {
    name: '主营业务',
    component: Zyyw
  }
})

router.start(App, '#app')
