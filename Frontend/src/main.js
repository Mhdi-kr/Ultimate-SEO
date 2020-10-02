import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma-rtl.min.css'
import 'animate.css/animate.min.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
