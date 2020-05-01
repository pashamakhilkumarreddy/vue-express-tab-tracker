import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import router from './router';
import App from './App.vue';

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount('#app');
