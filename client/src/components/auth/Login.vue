<template>
  <div></div>
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
      }
    },
  },
};
</script>
