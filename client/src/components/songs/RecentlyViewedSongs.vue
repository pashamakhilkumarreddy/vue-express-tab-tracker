<template>
  <panel title="Recently Viewed Songs">
    <template v-slot:panel-content>
      <v-data-table
        :headers="headers"
        :options.sync="pagination"
        :items="bookmarks"
        :items-per-page="5"
        class="elevation-3"
        item-key="item"
        :locale="'en-US'">
        <template v-slot:body="{ items }">
          <tr v-for="item in items" :key="item.name">
            <td class="text-left">
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
<style scoped>
</style>
<script>
import { mapState } from 'vuex';
import SongsHistoryService from '@/services/SongsHistoryService';

export default {
  name: 'RecentlyViewedSongs',
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
        {
          text: '',
          value: '',
          sortable: true,
          align: 'start',
        },
      ],
      pagination: {
        // sortBy: 'date',
        descending: true,
      },
      bookmarks: [],
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
      if (this.isUserLoggedIn) {
        this.bookmarks = (await SongsHistoryService.getRecentlyViewedSongs({
          userId: this.user.id,
        })).data;
      }
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
