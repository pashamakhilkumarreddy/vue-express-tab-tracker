<template>
  <panel title="Recently Viewed Songs">
    <template v-slot:panel-content>
      <v-data-table
        :headers="headers"
        :options.sync="options"
        :items="histories"
        :items-per-page="5"
        class="elevation-3"
        item-key="item"
        :locale="'en-US'">
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
      ],
      options: {
        sortBy: ['createdAt'],
        descending: true,
      },
      histories: [],
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
        this.histories = (await SongsHistoryService.getRecentlyViewedSongs()).data.histories;
      }
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
