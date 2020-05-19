<template>
  <v-layout>
    <v-flex xs12 sm5 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs />
    </v-flex>
    <v-flex xs11 :class="[{
        sm12: !isUserLoggedIn,
        sm7: isUserLoggedIn,
      }, { 'm-auto': true }, { 'ml-4': isUserLoggedIn}]">
      <songs-search-panel />
      <songs-panel />
    </v-flex>
  </v-layout>
</template>
<style scoped>
</style>
<script>
import { mapState } from 'vuex';
import SongsService from '@/services/SongsService';
import SongsBookmarks from './SongsBookmarks.vue';
import SongsPanel from './SongsPanel.vue';
import SongsSearchPanel from './SongsSearchPanel.vue';
import RecentlyViewedSongs from './RecentlyViewedSongs.vue';

export default {
  name: 'Index',
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs,
  },
  data() {
    return {
      songs: [],
    };
  },
  metaInfo: {
    title: 'Songs',
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
    ]),
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
