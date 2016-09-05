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
    component: function (resolve) {
      require(['./Home'], resolve)
    }
  },
  '/subpages/index': {
    component: Index
  },
  '/subpages/gsdt': {
    component: Gsdt
  },
  '/subpages/gsjj': {
    component: Gsjj
  },
  '/subpages/hyfa': {
    component: Hyfa
  },
  '/subpages/lxfs': {
    component: Lxfs
  },
  '/subpages/lyb': {
    component: Lyb
  },
  '/subpages/qyln': {
    component: Qyln
  },
  '/subpages/swhz': {
    component: Swhz
  },
  '/subpages/zpxx': {
    component: Zpxx
  },
  '/subpages/zyyw': {
    component: Zyyw
  }
})

router.start(App, '#app')
