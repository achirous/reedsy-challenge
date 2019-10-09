import Vue from 'vue';
import Router, { Route } from 'vue-router';
import BookPage from './views/BookPage.vue';
import BookList from './views/BookList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'bookList',
      component: BookList,
    },
    {
      path: '/books/:slug',
      name: 'bookPage',
      component: BookPage,
    },
  ],
});
