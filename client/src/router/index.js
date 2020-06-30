import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';

import Register from '@/views/auth/Register.vue';
import Login from '@/views/auth/Login.vue';
import CreateSong from '@/views/songs/CreateSong.vue';
import EditSong from '@/views/songs/EditSong.vue';
import Index from '@/views/songs/Index.vue';
import Song from '@/views/songs/Song.vue';

const Home = () => import('@/views/Home.vue');

const PageNotFound = () => import('@/components/errors/PageNotFound.vue');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    alias: ['/home', '/index'],
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/songs/create',
    name: 'create-song',
    component: CreateSong,
    beforeEnter(to, from, next) {
      const {
        isUserLoggedIn,
        token,
      } = store.state;
      if (isUserLoggedIn && token) {
        next();
      } else {
        next({
          name: 'login',
        });
      }
    },
  },
  {
    path: '/songs',
    name: 'songs',
    component: Index,
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: Song,
  },
  {
    path: '/songs/:songId/edit',
    name: 'edit-song',
    component: EditSong,
    beforeEnter(to, from, next) {
      const {
        isUserLoggedIn,
        token,
      } = store.state;
      if (isUserLoggedIn && token) {
        next();
      } else {
        next({
          name: 'login',
        });
      }
    },
  },
  {
    path: '*',
    name: 'not-found',
    component: PageNotFound,
  },
  ],
});
