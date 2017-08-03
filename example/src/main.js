import Vue from 'vue'
import App from './App.vue'

import Collapse from '../../src/index.js'
Vue.use(Collapse)

import VmRate from 'vue-multiple-rate'
import 'vue-multiple-rate/lib/rate.css'
Vue.component(VmRate.name, VmRate)

import VmTabs from 'vue-multiple-tabs'
Vue.use(VmTabs)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
  el: '#app',
  render: h => h(App)
})
