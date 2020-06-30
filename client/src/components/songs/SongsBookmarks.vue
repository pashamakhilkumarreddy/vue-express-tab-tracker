<template>
  <panel title="Bookmarks">
    <template v-slot:panel-content>
      <v-data-table :headers="headers" :options.sync="options" :items="bookmarks"
        :items-per-page="5" class="elevation-3" item-key="item" :locale="'en-US'">
        <template v-slot:body="{ items }">
          <tr v-for="item in items" :key="item.name">
            <td class="text-left pl-4">
              {{item.title}}
            </td>
            <td class="text-left">
              {{item.artist}}
            </td>
          </tr>
        </template>
      </v-data-table>
    </template>
  </panel>
</template>
<script>
import { mapState } from 'vuex';
import BookmarksService from '@/services/BookmarksService';

export default {
  name: 'SongsBookmarks',
  data() {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Artist',
          value: 'artist',
          sortable: true,
          align: 'start',
        },
      ],
      options: {
        sortBy: ['createdAt'],
        descending: true,
      },
      bookmarks: [],
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
    ]),
  },
  async mounted() {
    try {
      if (this.isUserLoggedIn) {
        this.bookmarks = (await BookmarksService.getBookmarks()).data.bookmarks;
      }
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
