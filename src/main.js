import Vue from 'vue'
import App from './App.vue'

import './plugins/bootstrap-vue.js'

// import './assets/css/icofont.min.css'
// import './assets/css/boxicons.min.css'
// import './assets/css/animate.min.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/css/venobox.css'
// import './assets/css/aos.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
