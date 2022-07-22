<template>
  <div class="open">
    <div class="open-header">用户信息查询</div>
    <div class="search">
      <h-input
        v-model="cardName"
        id="userName"
        placeholder="请输入用户姓名"
        style="width: 300px"
        clearable="true"
      ></h-input>
      <h-input
        required
        v-model="cardNum"
        placeholder="请输入用户身份证号码"
        style="width: 300px"
        :maxlength="18"
        clearable="true"
      ></h-input>
      <h-button type="primary" @click="searchSell">搜索</h-button>
    </div>
    <div class="content">
      <div slot="demo">
        <h-row style="background: #eee; padding: 20px">
          <h-col span="11">
            <h-card :bordered="true" :padding="25">
              <p slot="title">个人信息</p>
              <div class="item">
                <p>姓名：</p>
                <p>ID：</p>
                <p>电话：</p>
                <p>证件类型：</p>
                <p>证件号码：</p>
                <p>注册银行卡号：</p>
                <p>风险等级：</p>
              </div>
            </h-card>
          </h-col>
          <h-col span="11" offset="2">
            <h-card shadow>
              <div tb>
                 <h-table
                :columns="columns1"
                :data="data2"
                :notSetWidth=true
                height="400"
                @on-scroll="onScroll"
              ></h-table>
              </div>
            </h-card>
          </h-col>
        </h-row>
      </div>
    </div>
  </div>
</template>

<script>
import core from "@hsui/core";
export default {
  data() {
    return {
      columns1: [
        {
          title: "时间",
          key: "time",
        },
        {
          title: "交易类型",
          key: "type",
        },
        {
          title: "金额",
          key: "money",
        },
      ],
      data2: [
        {
          time: "2022.7.22",
          type: "申购",
          money: "123",
        },
         
      ],
    };
  },
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
  .search {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 40px;
    height: 50px;
    font-weight: 400;
    font-size: 20px;
    background-color: #fff;
    border-radius: 8px;
  }
  .content {
    width: 100%;
    height: 530px;
    margin-top: 40px;
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 10px;
  }

  .h-card-head-inner,
  .h-card-head p {
    text-align: center;
    display: inline-block;
    width: 100%;
    height: 37px;
    line-height: 35px;
    font-size: 30px;
    color: #495060;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .h-card-bordered {
    height: 433px;
  }

  element.style {
    background: rgb(238, 238, 238);
    padding: 12px;
  }
  .item {
    line-height: 40px;
    font-size: 20px;
    font-weight: 550;
  }
}
</style>