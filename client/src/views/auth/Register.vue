<template>
  <v-flex xs6 class="m-auto">
    <panel title="Register">
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
              @click.prevent="handleSubmit(register)">
              <span class="text-h6">
                Register
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
  name: 'Register',
  metaInfo: {
    title: 'Register',
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        this.error = '';
        if (this.email.trim() && this.password.trim()) {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password,
          });
          if (!response.data.error) {
            this.$router.push({
              name: 'login',
            });
          }
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
