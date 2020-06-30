<template>
  <v-flex xs6 class="m-auto">
    <panel title="Login">
      <template v-slot:panel-content>
        <ValidationObserver v-slot="{ handleSubmit, invalid }">
          <form class="auth-form" name="tab-tracker-form" autocomplete="off">
            <ValidationProvider name="Email" rules="required|email|minmax:6,90" :bails="true"
              v-slot="{ errors }">
              <v-text-field label="Email" type="email" v-model="email" :error-messages="errors"
                required></v-text-field>
            </ValidationProvider>
            <br />
            <ValidationProvider name="Password" rules="required|password|minmax:8,36" :bails="true"
              v-slot="{ errors }">
              <v-text-field label="Password" type="password" v-model="password"
                :error-messages="errors" autocomplete="new-password" required>
              </v-text-field>
            </ValidationProvider>
            <div class="err" v-html="error" />
            <br />
            <v-btn class="cyan font-weight-bold white--text" :disabled="invalid"
              @click.prevent="handleSubmit(login)">
              <span class="text-h6">
                Log In
              </span>
            </v-btn>
          </form>
        </ValidationObserver>
      </template>
    </panel>
  </v-flex>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Login',
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
        if (this.email.trim() && this.password.trim()) {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password,
          });
          console.log(response);
          this.$store.dispatch('setToken', response.data.token);
          this.$store.dispatch('setUser', response.data.user);
          this.$router.push({
            name: 'songs',
          });
        }
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
