import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueParticles from 'vue-particles'

import 'default-passive-events'

import App from './App.vue'

Vue.config.productionTip = false


Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(VueParticles);  

new Vue({
  render: h => h(App),
}).$mount('#app')
