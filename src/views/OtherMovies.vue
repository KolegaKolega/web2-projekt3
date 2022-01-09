<template>
  <h2>Other movies</h2>
  <ul>
    <li v-for="m in movies" :key="m">{{ m }}</li>
  </ul>
  <h2>Other actors</h2>
  <ul>
    <li v-for="a in actors" :key="a">{{ a }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      movies: ["Fight club", "Godfather"],
      actors: ["Bred Pitt", "Marlon Brando"],
    };
  },
};
</script>

<style scoped></style>
