<template>
  <div class="about">
    <button @click="created">住所自動入力</button>
    <p>Address:{{show}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      show: ""
    }
  },
  props: ["parentNum"],
  methods: {
    async created() {
      const item = await axios.get(
        `https://apis.postcode-jp.com/api/v4/postcodes/${this.parentNum}`
      );
      console.log(item);
      const postData = item.data;
      this.show = postData.data[0].allAddress;
    }
  }
};
</script>
