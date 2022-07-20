<template>
  <div class="container">
    <h-steps class="step" :current="2"  direction="vertical">
      <h-step title="已完成" content="日初始化"></h-step>
      <h-step title="已完成" content="接收数据"></h-step>
      <h-step title="进行中" content="确认处理数据"></h-step>
      <h-step title="待进行" content="处理完成"></h-step>
    </h-steps>
  </div>
  
  
</template>


<script>
export default {};
</script>

<style lang="less" scoped>
      .step  {
        margin-left: 200px;
        padding: 30px 0;
        font-weight: 800;
        font-size: 50px;
        position: relative;
        line-height: 0px;
      }
      .h-steps-item {
        height: 180px;
        }
      .h-steps-content{
        font-size:30px;
      }
</style>

