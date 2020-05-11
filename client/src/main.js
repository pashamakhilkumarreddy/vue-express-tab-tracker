import Vue from 'vue';
import Vuetify from 'vuetify';
import VueMeta from 'vue-meta';
import VueYouTubeEmbed from 'vue-youtube-embed';
import { sync } from 'vuex-router-sync';

import 'vuetify/dist/vuetify.min.css';
import store from '@/store/store';
import router from './router';
import App from './App.vue';

Vue.use(Vuetify);
Vue.use(VueMeta);
Vue.use(VueYouTubeEmbed);

sync(store, router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount('#app');
