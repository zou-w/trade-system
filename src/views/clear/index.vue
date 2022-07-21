<template>
  <div class="layout-content-main">
    <div class="container">
      <div class="clear">
        <div class="title1">今日</div>
        <div class="step">
          <h-steps :current="2" direction="vertical">
            <h-step title="已完成" content="日初始化"></h-step>
            <h-step title="已完成" content="接收数据"></h-step>
            <h-step title="进行中" content="确认处理数据"></h-step>
            <h-step title="待进行" content="处理完成"></h-step>
          </h-steps>
        </div>
        <div class="btn">
          <div>
            <button>清算</button>
          </div>
          <div>
            <button>重新清算</button>
          </div>
        </div>
      </div>
      <div class="tb">
        <div class="title2">历史记录</div>
        <h-table
          height="400"
          width="300"
          :columns="columns1"
          :data="data2"
          headAlgin="center"
          bodyAlgin="center"
          adaptiveNoDataHeight="true"
        ></h-table>
      </div>
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
        }
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.layout-content-main {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.container {
  display: flex;
  justify-content: space-around;
}
.title2,.title1{
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
  letter-spacing: 10px;
}
.title1{
  margin-right: 35px;
}
.clear {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.h-steps-item {
  height: 120px;
}
.h-steps-content {
  font-size: 30px;
}
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tb {
  display: flex;
  align-items: center;
  flex-direction: column;
}
button {
  width: 150px;
  height: 50px;
  background-color: #298dff;
  border-radius: 60px;
  border: none;
  font-size: 20px;
  color: white;
  margin-right: 30px;
}
button:hover {
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

button:active {
  background-color: #298dff;
  box-shadow: 0 1px rgb(124, 124, 124);
  transform: translateY(2px);
}
</style>

