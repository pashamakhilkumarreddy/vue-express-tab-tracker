<template>
  <section class="not-found">
    <div class="content">
      <h1 class="text-h6 text-sm-h3 text-md-h2 mt-12">
        Oops! Looks like you're lost!
      </h1>
      <router-link to="/home">Let's go home</router-link>
    </div>
    <img src="../../assets/images/NotFound.png" alt="Page Not Found" decoding="async" loading="lazy"
      importance="high" />
  </section>
</template>
<script>
export default {
  name: 'PageNotFound',
};
</script>
<style lang="scss" scoped>
.not-found {
  position: relative;
}

.not-found .content {
  position: absolute;
  width: 100%;
  height: 100%;
}

.not-found h1,
.not-found a {
  font-family: 'NunitoExtraBoldItalic';
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.not-found a {
  font-family: 'NunitoBlackItalic';
  font-size: 1.8rem;
}

img {
  width: 100%;
  height: auto;
}
</style>
