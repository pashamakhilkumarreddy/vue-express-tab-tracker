<template>
  <v-flex xs6 class="m-auto">
    <panel title="Login">
      <template v-slot:panel-content>
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br>
          <v-text-field label="Password" type="password" v-model="password"
            autocomplete="new-password">
          </v-text-field>
          <div class="err" v-html="error" />
          <br />
          <v-btn dark class="cyan font-weight-bold" @click.enter.prevent="login">
            Login
          </v-btn>
        </form>
      </template>
    </panel>
  </v-flex>
</template>
<style scoped>
</style>
<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Login',
  components: {
  },
  metaInfo: {
    title: 'Login',
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        this.error = '';
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({
          name: 'songs',
        });
      } catch (err) {
        console.error(err);
        const {
          messages,
          error,
        } = err.response.data;
        this.error = error ? messages[0] : '';
      }
    },
  },
};
</script>
