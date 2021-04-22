<template>
  <div id="header"> 
    <input type="text" v-model="getData">
    <button @click="oyaheokuru">親に送る</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getData: ""
    }
  },
  methods: {
    oyaheokuru() {
      this.$emit("getChildData",this.getData);
      this.getData = "";
    }
  }
};
</script>
<style scoped>
</style>