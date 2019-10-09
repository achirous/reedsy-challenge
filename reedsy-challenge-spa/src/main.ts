import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BookPage from './views/BookPage.vue';

Vue.config.productionTip = false;
Vue.component('bookPage', BookPage);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
