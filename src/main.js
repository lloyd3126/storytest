import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './plugins/element.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

axios.defaults.baseURL =
  'https://script.google.com/macros/s/AKfycbwPLSVXQ45oscqcxProGYRFy0ttuiikyysRMH9TX0QRNQLdhq0/exec';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
