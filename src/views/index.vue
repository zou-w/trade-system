<template>
  <div class="home">
    <h1>第四组----交易系统</h1>
    <div class="content">
      <img class="logo" :src="img_url" alt="" />
    </div>
  </div>
</template>

<script>
import group from "@/assets/team4_logo.png";
export default {
  data() {
    return {
      img_url: group,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 83vh;
  padding: 18px;
  overflow: auto;
  background-color: #fff;
  border-radius: 10px;
  h1 {
    text-align: center;
  }
  .content {
    .logo {
      width: 50vh;
      height: 50vh;
      margin: 10px auto;
    }
  }
}
</style>
