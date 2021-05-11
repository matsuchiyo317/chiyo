<template>
  <div class="home flex">
    <Card v-for="(data,index) in lists" :key="index" :city="data.city" />
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  data() {
    return {
      lists: [
        {city:"sapporo"},
        {city:"tokyo"},
        {city:"nagoya"},
        {city:"osaka"},
        {city:"fukuoka"},
        {city:"naha"}
      ]
    };
  },
  components: {
    Card
  }
};
</script>

<style scoped>
body {
  background: #eee;
}
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
