<template>
  <v-main>
    <v-container fluid class="mb-14">
      <v-layout align-content-center justify-center>
        <v-flex 10 align-self-center>
          <h1 class="text-center mt-12 text-h2 font-weight-bold">{{title}}</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>
<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
  },
  data() {
    return {
      text: 'Welcome to Tab Tracker',
      title: '',
      intervalId: null,
    };
  },
  mounted() {
    this.setTitle();
  },
  methods: {
    setTitle() {
      let i = 0;
      const updateTitle = () => {
        if (i < this.text.length) {
          this.title += this.text[i];
          i += 1;
        }
      };
      this.intervalId = setInterval(updateTitle, 200);
    },
  },
  destroyed() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
};
</script>
