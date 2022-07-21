<template>
  <div class="container">
    <div class="title1">今日</div>
    <div class="title2">历史记录</div>
    <div class="table">
      <h-table
        height="600"
        width="300"
        :columns="columns1"
        :data="data2"
        headAlgin="center"
        bodyAlgin="center"
        adaptiveNoDataHeight="true"
      ></h-table>
    </div>
    <div class="step">
      <h-steps :current="2" direction="vertical">
        <h-step title="已完成" content="日初始化"></h-step>
        <h-step title="已完成" content="接收数据"></h-step>
        <h-step title="进行中" content="确认处理数据"></h-step>
        <h-step title="待进行" content="处理完成"></h-step>
      </h-steps>
    </div>
    <div class="btn">
      <button class="clear" long>清算</button>
      <button class="reclear" long>重新清算</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "时间",
          key: "time",
        },
        {
          title: "状态",
          key: "status",
        },
      ],
      data2: [
        {
          time: "王小明",
          status: "北京市朝阳区芍药居",
        },
        {
          time: "张小刚",
          status: "北京市海淀区西二旗",
        },
        {
          time: "李小红",
          status: "上海市浦东新区世纪大道",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.step {
  padding-top: 150px;
  padding-right: 50%;
  padding-left: 360px;
}
.title1 {
  position: absolute;
  margin-top: 30px;
  margin-left: 360px;
  font-weight: 900;
  font-size: 30px;
}
.title2 {
  position: absolute;
  margin-top: 30px;
  margin-left: 72%;
  font-weight: 900;
  font-size: 30px;
}

.table {
  position: fixed;
  padding-top: 8%;
  padding-left: 55%;
}
.h-steps-item {
  height: 120px;
}
.h-steps-content {
  font-size: 30px;
}
.btn {
  align-items: center;
  padding-top: 8%;
  padding-left: 12%;
}
button {
  width: 20%;
  height: 50px;
  margin-right: 70px;
  color: white;
  font-size: 20px;
  background-color: #298dff;
  border: none;
  border-radius: 60px;
}
button:hover {
  color: #2569b6;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

button:active {
  background-color: #298dff;
  box-shadow: 0 5px rgb(124, 124, 124);
  transform: translateY(4px);
}
</style>
