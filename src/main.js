import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"

import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faListAlt} from '@fortawesome/free-solid-svg-icons'
import { faStore} from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//Vue.use(VueCarousel);
Vue.use(BootstrapVue)


library.add(faPhone)
library.add(faStore)
library.add(faListAlt)
library.add(faCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('button-counter', {
  data: function () {
    alert("hello");
  },
  template: '<button v-on:click="count++"> Request more info!</button>'
})

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})


window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
