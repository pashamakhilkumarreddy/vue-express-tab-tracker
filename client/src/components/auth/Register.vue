<template>
  <div></div>
</template>
<style scoped>

</style>
<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
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
      }
    },
  },
};
</script>
