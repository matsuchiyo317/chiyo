<template>
  <div class="card">
    <img class="card-img" src="https://coachtech-video.s3-ap-northeast-1.amazonaws.com/clouds-449822_640.jpg" />
    <div class="cord-content">
      <h1 class="card-title">{{city}}</h1>
    </div>
    <div class="card-link">
      <a @click="$router.push({ name:'About', params: { city: city} })">About</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["city"],
};
</script>

<style scoped>
.card {
  width: 27%;
  margin: 30px 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin: 20px;
  text-align: center;
  color: #333;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.card-link a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
  cursor: pointer;
}
.card-link a:hover {
  color: #0090aa;
}
</style>