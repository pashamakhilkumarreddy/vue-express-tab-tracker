<template>
  <div v-if="song">
    <v-layout>
      <v-flex xs6 class="mr-3">
        <song-meta-data :song="song" />
      </v-flex>

      <v-flex xs6>
        <you-tube :url="song.youtubeId" v-if="song.youtubeId" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 class="mr-3">
        <tab :tab="song.tab"  v-if="song.tab" />
      </v-flex>

      <v-flex xs6>
        <lyrics :lyrics="song.lyrics"  v-if="song.lyrics" />
      </v-flex>
    </v-layout>
  </div>
</template>
<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 45rem;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 0.25rem;
}
</style>
<script>
import { mapState } from 'vuex';

import SongsService from '@/services/SongsService';
import SongsHistoryService from '@/services/SongsHistoryService';
import SongMetaData from '@/components/songs/song/SongMetaData.vue';
import YouTube from './YouTube.vue';
import Lyrics from './Lyrics.vue';
import Tab from './Tab.vue';

export default {
  name: 'Song',
  components: {
    SongMetaData,
    YouTube,
    Lyrics,
    Tab,
  },
  metaInfo: {
    title: 'Song',
  },
  data() {
    return {
      song: {},
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
  },
  async mounted() {
    try {
      const { songId } = this.$store.state.route.params;
      const { song } = (await SongsService.getSong(songId)).data;
      this.song = song;
      if (this.isUserLoggedIn) {
        SongsHistoryService.setRecentlyViewedSong({
          songId,
          userId: this.user.id,
        });
      }
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
