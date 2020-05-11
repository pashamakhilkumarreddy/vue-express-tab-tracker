<template>
  <v-flex xs8 class="m-auto">
    <panel title="Songs">
      <template v-slot:panel-content>
        <!-- <router-link :to="{name: 'create-song'}"> -->
        <v-btn class="blue darken-1 accent-2 mb-4" @click="navigateTo({ name: 'create-song' })" fab
          light medium absolute right top middle>
          <v-icon>
            add
          </v-icon>
        </v-btn>
        <!-- </router-link> -->

        <div class="song" v-for="song in songs" :key="song.id.toString()">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn dark class="blue" @click="navigateTo({
                path: `/songs/${song.id}`,
                params: { songId: song.id }
              })">
                View
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <div class="album-image"
                :style="{ 'background': `url(${song.albumImageURL}) no-repeat center` }"></div>
            </v-flex>
          </v-layout>
        </div>
      </template>
    </panel>
  </v-flex>
</template>
<style scoped>
.song {
  padding: 1.25rem;
  height: 19rem;
  overflow: hidden;
  border: 2px solid #90caf9;
  margin: 0 0 1rem 0;
  border-radius: 10px;
}

.song-title {
  font-size: 2.5rem;
  text-transform: capitalize;
}

.song-artist {
  font-size: 2rem;
}

.song-genre {
  font-size: 1.5rem;
}

.album-image {
  margin: 0 auto;
  height: 16rem;
  width: 100%;
  background-size: cover !important;
}
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
  components: {
    Panel,
  },
};
</script>
