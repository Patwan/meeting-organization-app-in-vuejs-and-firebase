import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/shared/Alert.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAudoRdfJJX65SYOYiIWdQgv3TEPxolFtg',
      authDomain: 'vuetify-app.firebaseapp.com',
      databaseURL: 'https://vuetify-app.firebaseio.com',
      projectId: 'vuetify-app',
      storageBucket: ''
    })
    this.$store.dispatch('loadedMeetups')
  }
})
