<template>
  <panel title="Search">
    <template v-slot:panel-content>
      <v-text-field label="Search by song title, artist, album or genre"
      type="text" v-model="search">
      </v-text-field>
    </template>
  </panel>
</template>
<style scoped>
</style>
<script>
import _ from 'lodash';

export default {
  name: 'SongsSearchPanel',
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs',
      };
      if (this.search) {
        route.query = {
          search: value,
        };
      }
      this.$router.push(route, () => {});
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>
