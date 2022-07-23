<template>
  <div class="layout-content-main">
    <div class="container">
      <div class="clear">
        <div class="title1">今日</div>
        <div class="step">
          <h-steps :current="current" direction="vertical">
            <h-step title="已完成" content="日初始化"></h-step>
            <h-step title="已完成" content="接收数据"></h-step>
            <h-step title="进行中" content="确认处理数据"></h-step>
            <h-step title="待进行" content="处理完成"></h-step>
          </h-steps>
        </div>
        <div class="btn">
          <div>
            <button @click="clear">清算</button>
          </div>
          <div>
            <button @click="reclear">重新清算</button>
          </div>
        </div>
      </div>
      <div class="tb">
        <div class="title2">历史记录</div>
        <h-table
          height="400"
          width="300"
          :columns="columns1"
          :data="clearLog"
          headAlgin="center"
          bodyAlgin="center"
        ></h-table>
      </div>
    </div>
  </div>
</template>

<script>
import core from "@hsui/core";
import { format } from "../../utils/format-utils";
import { CLEAR_INFO } from "../../constant/orm";
export default {
  data() {
    return {
      columns1: CLEAR_INFO,
      clearLog: [],
      current: 0,
      isClear: false,
    };
  },
  methods: {
    showClear() {
      core
        .fetch({
          method: "get",
          url: "/api/showClear",
          params: {
            showClear: "",
          },
        })
        .then((res) => {
          const { isClear } = res.data;
          if (isClear === true) {
            this.current = 4;
          } else {
            this.current = 0;
          }
        });
    },
    getClearLog() {
      core
        .fetch({
          method: "get",
          url: "/api/clearLog",
          params: {
            showClearLog: "",
          },
        })
        .then((res) => {
          this.clearLog = res.data;
        });
    },
    clear() {
      let Time1 = Date.now();
      let Time = format(Time1);
      core
        .fetch({
          method: "post",
          url: "/api/clear",
          data: {
            figure: 1,
            clearData: Time,
          },
        })
        .then((res) => {
          this.$hMessage.info(res.message);
          location.reload();
        });
    },
    reclear() {
      let Time1 = Date.now();
      let Time = format(Time1);
      core
        .fetch({
          method: "post",
          url: "/api/reclear",
          data: {
            figure: 0,
            clearData: Time,
          },
        })
        .then((res) => {
          this.$hMessage.info(res.message);
          location.reload();
        });
    },
  },
  created() {
    this.getClearLog();
    this.showClear();
  },
};
</script>

<style lang="less" scoped>
.layout-content-main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 83vh;
  padding: 0;
  overflow: auto;
  background-color: white;
  border-radius: 10px;
}
.container {
  display: flex;
  justify-content: space-around;
}
.title2,
.title1 {
  margin-bottom: 20px;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 10px;
}
.title1 {
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
  align-items: center;
  justify-content: space-between;
}
.tb {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  width: 150px;
  height: 50px;
  margin-right: 30px;
  color: white;
  font-size: 20px;
  background-color: #298dff;
  border: none;
  border-radius: 60px;
}
button:hover {
  color: #ffffff;

  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

button:active {
  background-color: #298dff;
  box-shadow: 0 1px rgb(124, 124, 124);
  transform: translateY(2px);
}
</style>
