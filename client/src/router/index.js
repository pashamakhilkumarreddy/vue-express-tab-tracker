import Vue from 'vue';
import VueRouter from 'vue-router';

import Register from '@/components/auth/Register.vue';
import Login from '@/components/auth/Login.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
