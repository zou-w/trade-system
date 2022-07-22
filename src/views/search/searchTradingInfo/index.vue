<template>
  <div class="open">
    <div class="open-header">标题</div>
    <div class="content">内容</div>
    <div class="open-footer">底部</div>
  </div>
</template>
<script>
import core from "@hsui/core";
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.open {
  .open-header {
    width: 100%;
    height: 50px;
    padding-top: 10px;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
  }
  .content {
    width: 100%;
    height: 400px;
    margin-top: 40px;
    padding: 30px 10px;
    background-color: #fff;
    border-radius: 10px;
  }
  .open-footer {
    width: 100%;
    height: 100px;
    margin-top: 40px;
    padding: 10px 0;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
