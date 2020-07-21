import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue';
import './plugins/element.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

axios.defaults.baseURL =
  'https://script.google.com/macros/s/AKfycbwPLSVXQ45oscqcxProGYRFy0ttuiikyysRMH9TX0QRNQLdhq0/exec';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const DEFAULT_TITLE = '氣候變遷情境故事';
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
