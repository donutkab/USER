// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import LongdoMap from 'longdo-map-vue' 

Vue.config.productionTip = false


Vue.use(LongdoMap, {     
  load: {         
       apiKey: ''     
  } 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



