<template>
  <div id="app">
    <v-app>
      <app-header />
      <Home />
      <app-footer />
    </v-app>
  </div>
</template>

<script>
import Home from '@/components/Home.vue';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'App',
  components: {
    Home,
    'app-header': Header,
    'app-footer': Footer,
  },
  metaInfo: {
  // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Home',
    // all titles will be injected into this template
    titleTemplate: '%s | Tab Tracker',
  },
};
</script>

<style>
.mb-14 {
  margin-bottom: 7rem;
}

.err {
  color: #f00;
}

header {
  max-height: 50px;
}

.m-auto {
  margin: auto;
}
</style>
