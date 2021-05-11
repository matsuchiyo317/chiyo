<template>
  <div id="app"></div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("changeDataAction1");
    await this.$store.dispatch("changeDataAction2");
  },
};
</script>
