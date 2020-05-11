import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Register from '@/components/auth/Register.vue';
import Login from '@/components/auth/Login.vue';
import CreateSong from '@/components/songs/CreateSong.vue';
import EditSong from '@/components/songs/EditSong.vue';
import Songs from '@/components/songs/Songs.vue';
import Song from '@/components/songs/song/Song.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs,
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
    },
  ],
});
