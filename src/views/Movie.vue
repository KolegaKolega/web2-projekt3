<template>
  <h3>This is from mounted -> The app was refreshed: {{refreshed}} </h3>
  <h1>The best movie is {{bestMovie}}</h1>
  <h2>Because is acting:</h2>
  <div>
    <div v-if="biggerThen23">
      <h2>Name of the actor dose not fit anymore</h2>
      <!--TODO: put refresh -->
    </div>
    <div v-else>
      <input v-bind:value="actor">
      <h2>actor: {{actor}}</h2>
      <button v-on:click="addLetterA">Add letter a to actor</button>
      <h3>(Try to put more a-s, when the name are not going to fit in the input label)</h3>
    </div>
  </div>
  <div>
    <h2>Ranking: {{updateRanking}}</h2>
    <h3>Set up a ranking and hit enter</h3>
    <input v-model="ranking" @keyup.enter="setRanking">
  </div>

</template>

<script>
export default {
  data(){
    return{
      bestMovie: "Shawshank redemption",
      actor: "Morgan Freeman",
      ranking: 9.2,
      updateRanking: 9.2,
      refreshed: 0,
    };
  },
  methods:{
    addLetterA() {
      this.actor = this.actor + "a"
    },
    setRanking(){
      this.updateRanking = this.ranking
    }
  },
  computed:{
    biggerThen23: function(){
      return this.actor.length >= 23
    }

  },
  mounted() {
    this.refreshed = new Date().toLocaleTimeString("hr-HR");
  }
};
</script>

<style scoped>
* {
  font-size: 25px;
}

</style>