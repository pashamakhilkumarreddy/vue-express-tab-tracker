<template>
  <v-toolbar fixed class="blue darken-2" dark dense>
    <v-toolbar-title class="mr-4">
      <span class="main-logo" @click="navigateTo({ name: 'home' })">
        Tab Tracker
      </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text depressed>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn text depressed @click="navigateTo({ name: 'login' })">
        Login
      </v-btn>

      <v-btn text depressed @click="navigateTo({ name: 'register' })">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<style scoped>
.main-logo {
  cursor: pointer;
}

button {
  background: transparent !important;
}
</style>
<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
