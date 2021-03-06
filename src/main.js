// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store/'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "babel-polyfill"

import 'swiper/dist/css/swiper.css'
import 'style/reset.css'
import 'style/border.css'
import 'style/border.css'
import 'style/iconfont.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
