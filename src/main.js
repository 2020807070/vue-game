import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueTouch from 'kim-vue-touch'

Vue.use(vueTouch)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
