<template>
  <div class="about">
    <h2>About</h2>
    <button @click="transition()">遷移</button>
  </div>
</template>

<script>
export default {
  methods: {
    transition() {
      this.$router.push({name:"Home"});
    }
  }
}
</script>

