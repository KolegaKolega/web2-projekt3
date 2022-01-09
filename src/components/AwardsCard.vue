<template>
  <div>
    <h2>Shawshank redemption : number of awards {{award1}}</h2>
    <button v-on:click="addAward1">Add award</button>
  </div>
  <div>
    <h2>Fight club : number of awards {{award2}}</h2>
    <button v-on:click="addAward2">Add award</button>
  </div>
  <div>
    <h2>Godfather : number of awards {{award3}}</h2>
    <button v-on:click="addAward3">Add award</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      award1 : 0,
      award2: 0,
      award3: 0
    };
  },
  methods:{
    addAward1(){
      this.award1 = this.award1 +1
    },
    addAward2(){
      this.award2 = this.award2 +1
    },
    addAward3(){
      this.award3 = this.award3 +1
    }
  }
};
</script>

<style scoped>

</style>