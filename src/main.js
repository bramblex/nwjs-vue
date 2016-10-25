// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)


import About from './components/About.vue'
import Settings from './components/Settings.vue'

const routes = [
  {path: '/', redirect: '/about'},
  {path: '/about', component: About},
  {path: '/settings', component: Settings},
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
