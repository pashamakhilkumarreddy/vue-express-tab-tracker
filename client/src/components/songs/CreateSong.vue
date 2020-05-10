<template>
  <panel title = "Song Metadata">
    <template v-slot:panel-content>
      <form name="create-song-form" autocomplete="off">
        <v-text-field label="Title" v-model="song.title"></v-text-field>
        <br>
        <v-text-field label="Artist" v-model="song.artist"></v-text-field>
        <v-text-field label="Genre" v-model="song.genre"></v-text-field>
        <v-text-field label="Album" v-model="song.album"></v-text-field>
        <v-text-field label="Album Image URL" v-model="song.albumImageURL"></v-text-field>
        <v-text-field label="YouTube Id" v-model="song.youtubeId"></v-text-field>
        <v-textarea
          name="lyrics"
          label="Lyrics"
          auto-grow
          value=""
          v-model="song.lyrics"
        ></v-textarea>
        <v-textarea
          name="tab"
          label="Tab"
          auto-grow
          value=""
          v-model="song.tab"
        ></v-textarea>
        <div class="err" v-html="error" />
        <br />
        <v-btn dark class="cyan font-weight-bold" @click="createSong">
          Create Song
        </v-btn>
      </form>
    </template>
  </panel>
</template>
<style scoped>
.mb-20 {
  margin-bottom: 10rem;
}
</style>
<script>
import SongsService from '@/services/SongsService';
import Panel from '@/components/Panel.vue';

export default {
  name: 'CreateSong',
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURL: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
      },
      error: null,
    };
  },
  components: {
    Panel,
  },
  methods: {
    async createSong() {
      try {
        const newSong = await SongsService.createSong(this.song);
        if (!newSong.data.error && newSong.data.song) {
          this.$router.push({
            name: 'create-song',
          });
        }
      } catch (err) {
        console.error(err);
        const {
          messages,
          error,
        } = err.response.data;
        this.error = error ? messages[0] : '';
      }
    },
  },
};
</script>
