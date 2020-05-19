<template>
  <panel :title="song.title" v-if="song">
    <template v-slot:panel-content>
      <div class="song">
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
            <br />
            <v-btn dark class="blue font-weight-bold mr-4 mb-2" @click="navigateTo({
                path: `/songs/${song.id}/edit`,
                params: { songId: song.id }
              })">
              Edit Song
            </v-btn>
            <v-btn dark class="blue font-weight-bold mr-4 mb-2"
              v-if="isUserLoggedIn && !bookmark"
              @click="setBookmark">
              Bookmark
            </v-btn>
            <v-btn dark class="blue font-weight-bold"
              v-if="isUserLoggedIn && bookmark"
              @click="unbookmark">
              Unbookmark
            </v-btn>
          </v-flex>
          <v-flex xs6>
            <div class="album-image"
              :style="{ 'background': `url(${song.albumImageURL}) no-repeat center` }"></div>
            <div class="song-album">
              {{song.album}}
            </div>
          </v-flex>
        </v-layout>
      </div>
    </template>
  </panel>
</template>
<style scoped>
.song {
  padding: 1.25rem;
  height: auto;
  overflow: hidden;
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

.song-album,
.song-genre {
  font-size: 1.5rem;
}

.album-image {
  margin: 0 auto;
  height: 16rem;
  width: 100%;
  background-size: cover !important;
}

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
import BookmarksService from '@/services/BookmarksService';

export default {
  name: 'SongMetaData',
  components: {
  },
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bookmark: null,
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
  },
  watch: {
    async song() {
      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        const { bookmarks } = (await BookmarksService.getBookmarks({
          songId: this.song.id,
        })).data;
        if (bookmarks.length) {
          [this.bookmark] = bookmarks;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async setBookmark() {
      try {
        this.bookmark = (await BookmarksService.addBookmark({
          songId: this.song.id,
        })).data.bookmark;
      } catch (err) {
        console.error(err);
      }
    },
    async unbookmark() {
      try {
        await BookmarksService.deleteBookmark({
          bookmarkId: this.bookmark.id,
        });
        this.bookmark = null;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
