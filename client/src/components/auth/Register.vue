<template>
  <panel title="Register">
    <template v-slot:panel-content>
      <form name="tab-tracker-form" autocomplete="off">
        <v-text-field label="Email" v-model="email"></v-text-field>
        <br>
        <v-text-field label="Password" type="password" v-model="password"
          autocomplete="new-password">
        </v-text-field>
        <div class="err" v-html="error" />
        <br />
        <v-btn dark class="cyan font-weight-bold" @click="register">
          Register
        </v-btn>
      </form>
    </template>
  </panel>
</template>
<style scoped>
  .err {
    color: #f00;
  }
</style>
<script>
import AuthenticationService from '@/services/AuthenticationService';
import Panel from '@/components/Panel.vue';

export default {
  name: 'Register',
  components: {
    Panel,
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
        const response = await AuthenticationService.register({
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
