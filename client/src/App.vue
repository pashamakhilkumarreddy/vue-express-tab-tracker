<template>
  <div id="app">
    <v-app>
      <Home />
    </v-app>
  </div>
</template>

<script>
import Home from '@/components/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
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
</style>
