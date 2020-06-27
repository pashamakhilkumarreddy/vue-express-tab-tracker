<template>
  <v-row justify="center" class="mt-6">
    <v-col xs10>
      <v-card raised class="text-center">
        <v-card-title class="justify-center blue darken-2">
          <h1 class="font-weight-bold white--text">{{title}}</h1>
        </v-card-title>

        <div class="pl-6 pr-6 pt-8 pb-4">
          <slot name="panel-content">
            Nothing here!!!
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
};
</script>
