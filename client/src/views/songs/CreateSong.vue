<template>
  <v-layout>
    <v-flex xs4 class="mr-3">
      <panel title="Song Metadata">
        <template v-slot:panel-content>
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
        </template>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Metadata">
        <template v-slot:panel-content>
          <v-textarea name="lyrics" label="Lyrics" value="" v-model="song.lyrics"
            :rules="[required]"></v-textarea>
          <v-textarea name="tab" label="Tab" value="" v-model="song.tab"
            :rules="[required]"></v-textarea>
            <!-- <div class="err" v-html="error" /> -->
            <div class="submit-error err" v-if="error">
              {{error}}
            </div>
            <br />
            <v-btn dark class="blue font-weight-bold" @click="createSong">
              Create Song
            </v-btn>
        </template>
      </panel>
    </v-flex>
  </v-layout>
</template>
<style scoped>
.mb-20 {
  margin-bottom: 10rem;
}
</style>
<script>
import SongsService from '@/services/SongsService';

export default {
  name: 'CreateSong',
  metaInfo: {
    title: 'Create a new song',
  },
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
