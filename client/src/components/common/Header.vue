<template>
  <v-toolbar fixed class="blue darken-2" dark dense>
    <v-toolbar-title class="mr-4">
      <router-link class="main-logo" tag="span" :to="{ name: 'home' }">
        Tab Tracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn text depressed @click="navigateTo({ name: 'songs' })">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text depressed @click="navigateTo({ name: 'login' })"
        v-if="!$store.state.isUserLoggedIn">
        Login
      </v-btn>

      <v-btn text depressed @click="navigateTo({ name: 'register' })"
       v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>

      <v-btn text depressed v-if="$store.state.isUserLoggedIn" @click="logout">
        Log Out
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
      this.$router.push(route, () => {});
    },
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'home',
      });
    },
  },
};
</script>
