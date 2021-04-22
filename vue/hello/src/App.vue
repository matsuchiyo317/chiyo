<template>
  <div id="app">
  <Header @getChildData="showChildText"></Header>
  <p v-for="(item,index) in textList" :key="index">{{item}}</p>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  data() {
    return {
      textList: []
    };
  },
  methods: {
    showChildText(getData) {
      this.textList.push(getData);
    }
  },
  components: {
    Header
  }
}
</script>

<style></style>