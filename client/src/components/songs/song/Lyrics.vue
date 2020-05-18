<template>
  <panel title="Lyrics" v-if="lyrics">
    <template v-slot:panel-content>
      <textarea readonly v-model="lyrics">
      </textarea>
    </template>
  </panel>
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
export default {
  name: 'SongLyrics',
  components: {
  },
  data() {
    return {};
  },
  props: {
    lyrics: {
      type: String,
      required: true,
    },
  },
};
</script>
