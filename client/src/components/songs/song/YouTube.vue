<template>
  <panel title="Youtube Video">
    <template v-slot:panel-content v-if="url">
      <youtube :video-id="url"
      player-width="95%"
      :player-height="410">
      </youtube>
    </template>
  </panel>
</template>
<style scoped>
iframe {
  width: 90%;
}
</style>
<script>
export default {
  name: 'YouTube',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
