import Vue from 'vue'
import App from './App.vue'


import './assets/scss/sb-admin-2.scss'; 
import './assets/vendor/fontawesome-free/css/all.min.css';  
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
