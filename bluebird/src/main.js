import Vue from 'vue'
import routes from './routes'

import BootstrapVue from "bootstrap-vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faListAlt} from '@fortawesome/free-solid-svg-icons'
import { faStore} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


Vue.use(BootstrapVue)


library.add(faPhone)
library.add(faStore)
library.add(faListAlt)
library.add(faCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  el: '#app',
  render: h => h(App)
})
