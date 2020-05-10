<template>
  <panel title="Songs">
    <template v-slot:panel-content>
      <router-link :to="{name: 'create-song'}">
        <v-btn class="cyan accent-2 mb-4"
          fab
          light
          medium
          absolute
          right
          top
          middle>
          <v-icon>
            add
          </v-icon>
        </v-btn>
      </router-link>

      <div v-for="song in songs" :key="song.id.toString()">
        {{song.title}}
        {{song.artist}}
        {{song.album}}
      </div>
    </template>
  </panel>
</template>
<style scoped>
</style>
<script>
import SongsService from '@/services/SongsService';
import Panel from '@/components/Panel.vue';

export default {
  name: 'Songs',
  data() {
    return {
      songs: [],
    };
  },
  async mounted() {
    try {
      const { songs } = (await SongsService.getSongs()).data;
      this.songs = JSON.parse(songs);
    } catch (err) {
      console.error(err.response.data.error);
    }
  },
  components: {
    Panel,
  },
  methods: {},
};
</script>
