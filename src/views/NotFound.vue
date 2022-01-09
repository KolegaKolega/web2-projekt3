<template>
  <h1>Sorry, {{ $route.params.catchAll }} is not found.</h1>
  Try <router-link to="/">Movie</router-link>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>

</style>