<template>
  <div id="app">
    <v-app>
      <app-header />
        <v-content>
          <v-container fluid class="mb-14">
            <router-view />
          </v-container>
        </v-content>
      <app-footer />
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'App',
  components: {
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
