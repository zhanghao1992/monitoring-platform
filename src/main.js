// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import './assets/css/reset.css'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './axios/index'
import VueJsonp from 'vue-jsonp'
import VueSession from 'vue-session'
import Vuex from 'vuex'
import store from './store/store'
import 'jquery'
import i18n from './lang' // Internationalization

Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})
Vue.prototype.$http = axios
Vue.use(VueJsonp)
Vue.use(VueSession)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
