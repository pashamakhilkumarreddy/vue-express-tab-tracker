<template>
  <panel title = "Song Metadata">
    <template v-slot:panel-content>
      <form name="create-song-form" autocomplete="off">
        <v-text-field label="Title" v-model="song.title" :rules="[required]"></v-text-field>
        <br>
        <v-text-field label="Artist" v-model="song.artist" :rules="[required]">
        </v-text-field>
        <v-text-field label="Genre" v-model="song.genre" :rules="[required]">
        </v-text-field>
        <v-text-field label="Album" v-model="song.album" :rules="[required]">
        </v-text-field>
        <v-text-field label="Album Image URL" v-model="song.albumImageURL" :rules="[required]">
        </v-text-field>
        <v-text-field label="YouTube Id" v-model="song.youtubeId" :rules="[required]">
        </v-text-field>
        <v-textarea
          name="lyrics"
          label="Lyrics"
          auto-grow
          value=""
          v-model="song.lyrics"
          :rules="[required]"
        ></v-textarea>
        <v-textarea
          name="tab"
          label="Tab"
          auto-grow
          value=""
          v-model="song.tab"
          :rules="[required]"
        ></v-textarea>
        <!-- <div class="err" v-html="error" /> -->
        <div class="submit-error err" v-if="error">
          {{error}}
        </div>
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
      required: (value) => !!value || 'Required',
    };
  },
  components: {
    Panel,
  },
  methods: {
    async createSong() {
      try {
        this.error = null;
        const isSongDataFilled = Object.keys(this.song).every((key) => !!this.song[key]);
        if (isSongDataFilled) {
          const newSong = await SongsService.createSong(this.song);
          if (!newSong.data.error && newSong.data.song) {
            this.$router.push({
              name: 'songs',
            });
          }
        } else {
          this.error = 'Please fill in all the required fields!!';
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
