<template>
  <panel title="Tab" v-if="tab">
    <template v-slot:panel-content>
      <textarea readonly v-model="tab">
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
  name: 'Tab',
  data() {
    return {};
  },
  props: {
    tab: {
      type: String,
      required: true,
    },
  },
};
</script>
