
import Home from './components/Home.vue'
import RequestForm from './components/RequestForm.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import TermsOfUse from './components/TermsOfUse.vue'


export default [
  { path: '/', component:  Home },
  { path: '/request-form', component: RequestForm },
  { path: '/terms-of-use', component: TermsOfUse },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/*', redirect: '/'}
]
