<template>
  <v-content>
    <app-header />
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    <app-footer />
  </v-content>
</template>
<style scoped>

</style>
<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>
