<template>
<div class="layout-content-main">
  <div class="title">
    <div class="title1">今日</div>
    <div class="title2">历史记录</div>
  </div>
  <div class="container"> 
    <div class="step">
      <h-steps :current="2" direction="vertical">
        <h-step title="已完成" content="日初始化"></h-step>
        <h-step title="已完成" content="接收数据"></h-step>
        <h-step title="进行中" content="确认处理数据"></h-step>
        <h-step title="待进行" content="处理完成"></h-step>
      </h-steps>
    </div>
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
  </div>
  <div class="button">
    <button>清算</button>
    <button>重新清算</button>
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
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
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
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
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
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
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
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
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
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
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
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
        {
          time: "周小伟",
          status: "深圳市南山区深南大道",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>

.container{
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
}
.title{
  display: flex;
  justify-content: space-between;
}
.title1 {
  margin-left: 20% ;
  font-size: 30px;
  font-weight: 900;
}
.title2 {
  font-size: 30px;
  font-weight: 900;
  margin-right: 25%;
  
}
.h-steps-item {
  height: 120px;
}
.h-steps-content {
  font-size: 30px;
}
.btn {
  margin-top: 80%;
  align-items: center;
  margin-left: 5%;
}
button {
  width: 20%;
  height: 50px;
  background-color: #298dff;
  border-radius: 60px;
  border: none;
  font-size: 20px;
  color: white;
  margin-right: 70px;
}
button:hover{
  color: #2569b6;
  
   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

button:active {
  background-color: #298dff;
  box-shadow: 0 5px rgb(124, 124, 124);
  transform: translateY(4px);
}
</style>

