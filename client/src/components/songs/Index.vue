<template>
  <v-flex xs8 class="m-auto">
    <songs-search-panel />
    <songs-panel />
  </v-flex>
</template>
<style scoped>

</style>
<script>
import SongsService from '@/services/SongsService';
import SongsPanel from './SongsPanel.vue';
import SongsSearchPanel from './SongsSearchPanel.vue';

export default {
  name: 'Index',
  components: {
    SongsPanel,
    SongsSearchPanel,
  },
  data() {
    return {
      songs: [],
    };
  },
  metaInfo: {
    title: 'Songs',
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  async mounted() {
    try {
      const { songs } = (await SongsService.getSongs()).data;
      this.songs = JSON.parse(songs);
    } catch (err) {
      console.error(err.response.data.error);
    }
  },
};
</script>
