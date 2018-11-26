import Vue from 'vue'

import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faListAlt} from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faStore} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import SplashArea from './components/SplashArea.vue'
import FlowerCsa from './components/FlowerCsa.vue'
import Events from './components/Events.vue'
import Bouquets from './components/Bouquets.vue'
import TopBar from './components/TopBar.vue'
import LivePlants from './components/LivePlants.vue'
import FooterNav from './components/FooterNav.vue'
import Home from './components/Home.vue'
import RequestForm from './components/RequestForm.vue'


Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', component:  Home },
  { path: '/request-form', component: RequestForm },
  { path: '/*', redirect: '/'}
];


const router = new VueRouter({
  routes,
  mode: 'history'
})

library.add(faPhone)
library.add(faStore)
library.add(faListAlt)
library.add(faCircle)
library.add(faFacebook)
library.add(faInstagram)
library.add(faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  el: '#app',
  router,

  render: h => h(App)
})
