import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import routes from './routes.js'

//import * as firebase from 'firebase'

/* font awesome icons */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faListAlt} from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faStore} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const config = {
  apiKey: "AIzaSyBr-tzWbjg2zXbi7NdcMiJ_aah6Uk7OKyc",
  projectId: "bluebirdflowers-1bdb6",
  authDomain: "bluebirdflowers-1bdb6.firebaseapp.com",
  databaseURL: "https://bluebirdflowers-1bdb6.firebaseio.com/",
  storageBucket: "https://bluebirdflowers-1bdb6.appspot.com",
  name: 'bluebirdflowers',
  senderId: '426054211952'
};

const myFirebaseApp = firebase.initializeApp(config);
console.log(myFirebaseApp);  // "[DEFAULT]"*/

Vue.use(VueRouter)
Vue.use(BootstrapVue)


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
library.add(faHandPointer)

Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
