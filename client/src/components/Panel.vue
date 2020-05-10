<template>
  <v-row justify="center" class="mt-12">
    <v-col cols="10" xl="7" lg="6" sm="10" xs="10">
      <v-card raised class="text-center">
        <v-card-title class="justify-center blue darken-2">
          <h1 class="font-weight-bold white--text">{{title}}</h1>
        </v-card-title>

        <div class="pl-6 pr-6 pt-8 pb-4">
          <slot name="panel-content">
            No Slot content detected.
          </slot>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'Panel',
  props: {
    title: {
      type: String,
      default: 'Hello',
    },
  },
  data() {
    return {};
  },
};
</script>
