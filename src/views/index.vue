<template>
  <div class="home">
    <div class="logo">
      <img class="hs-logo" :src="hs_logo" alt="hundson" />
      <img class="cqupt-logo" :src="cqupt_logo" alt="cqupt" />
    </div>

    <h1>基金交易管理系统</h1>
    <div class="content">
      <img class="team4-logo" :src="img_url" alt="四组logo" />
    </div>
  </div>
</template>

<script>
import group from "@/assets/team4_logo.png";
import hsLogo from "@/assets/hundson.gif";
import cqupt from "@/assets/cqupt.png";
export default {
  data() {
    return {
      img_url: group,
      hs_logo: hsLogo,
      cqupt_logo: cqupt,
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
  background: #fff;
  border-radius: 10px;
  h1 {
    font-size: 60px;
    text-align: center;
  }

  .logo {
    display: flex;
    justify-content: flex-end;
    .hs-logo {
      width: 8vh;
      height: 5vh;
      margin-right: 20px;
    }
    .cqupt-logo {
      width: 5vh;
      height: 5vh;
      margin-right: 20px;
    }
  }

  .content {
    .team4-logo {
      width: 50vh;
      height: 50vh;
      margin: 10px auto;
    }
  }
}
</style>
