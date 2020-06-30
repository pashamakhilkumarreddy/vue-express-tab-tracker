import Vue from 'vue';
import Vuetify from 'vuetify';
import VueMeta from 'vue-meta';
import VueYouTubeEmbed from 'vue-youtube-embed';
import {
  sync,
} from 'vuex-router-sync';
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate';

import Panel from '@/components/globals/Panel.vue';
import store from '@/store';

import router from './router';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';
import './assets/styles/main.scss';
import './utils/validations';

Vue.use(Vuetify);
Vue.use(VueMeta);
Vue.use(VueYouTubeEmbed);
Vue.component('panel', Panel);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

sync(store, router);
setInteractionMode('eager');

// router.beforeEach((to, from, next) => {
//   const whiteListedRoutes = ['login', 'register', 'home', 'songs'];
//   if (whiteListedRoutes.indexOf(to.name) === -1 && !store.state.isUserLoggedIn) {
//     next({
//       name: 'login',
//     });
//   } else {
//     next();
//   }
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount('#app');
