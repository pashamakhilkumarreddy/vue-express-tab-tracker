<template>
<v-row justify="center" class="mt-12">
  <v-col cols="10" xl="7" lg="6" sm="10" xs="10">
    <v-card raised class="text-center">
      <v-card-title class="justify-center blue darken-2">
        <h1 class="font-weight-bold white--text">Login</h1>
      </v-card-title>
      <div class="pl-6 pr-6 pt-8 pb-4">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br>
          <v-text-field label="Password" type="password" v-model="password"
            autocomplete="new-password">
          </v-text-field>
          <div class="err" v-html="error" />
          <br />
          <v-btn dark class="cyan font-weight-bold" @click="login">
            Register
          </v-btn>
        </form>
      </div>
    </v-card>
  </v-col>
</v-row>
</template>
<style scoped>

</style>
<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
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
