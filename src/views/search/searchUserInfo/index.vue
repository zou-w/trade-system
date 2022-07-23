<template>
  <div class="open">
    <div class="open-header">用户信息查询</div>
    <div class="search">
      <h-input
        v-model="cardName"
        id="userName"
        placeholder="请输入用户姓名"
        style="width: 300px"
        :clearable="true"
      ></h-input>
      <h-input
        required
        v-model="cardNum"
        placeholder="请输入用户身份证号码"
        style="width: 300px"
        :maxlength="18"
        :clearable="true"
      ></h-input>
      <h-button type="primary" @click="search">搜索</h-button>
    </div>
    <div class="content">
      <div slot="demo">
        <h-row style="background: #eee; padding: 20px">
          <h-col span="11">
            <div class="left-content">
              <div class="left-title">个人信息</div>
              <div class="item">
                <p>用户类型：{{ userInfo.userType }}</p>
                <p>姓名：{{ userInfo.cardName }}</p>
                <p>证件类型：{{ userInfo.cardType }}</p>
                <p>身份证号码：{{ userInfo.cardNum }}</p>
                <p>电话：{{ userInfo.phoneNum }}</p>
                <p>银行卡号：{{ userInfo.cardInfo }}</p>
                <p>风险等级：{{ userInfo.userRiskLevel }}</p>
                <p>账户余额：{{ userInfo.accountBalance }}</p>
              </div>
            </div>
          </h-col>
          <h-col span="11" offset="2">
            <h-card shadow>
              <div tb>
                <div class="left-title">近期记录</div>
                <h-table
                  :columns="columns1"
                  :data="tradeInfo"
                  :notSetWidth="true"
                  max-height="100"
                  height="300px"
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
      cardName: "",
      cardNum: "",
      userInfo: {},
      tradeInfo: [],
      columns1: [
        {
          title: "姓名",
          key: "cardName",
          width: 100,
          fixed: "left",
        },
        {
          title: "交易类型",
          key: "rechargeType",
          width: 100,
        },
        {
          title: "交易金额",
          key: "rechargeValue",
          width: 150,
          render: (h, params) => {
            const row = params.row;
            const color = row.rechargeType === "充值" ? "red" : "green";
            const text = row.rechargeValue;
            return h(
              "Tag",
              {
                props: {
                  type: "dot",
                  color: color,
                },
              },
              text
            );
          },
        },
        {
          title: "账户余额",
          key: "accountBalance",
          width: 100,
        },
        {
          title: "交易时间",
          key: "rechargeTime",
          sortable: true,
          width: 200,
        },
        {
          title: "交易卡号",
          key: "cardInfo",
          width: 200,
        },
      ],
    };
  },
  methods: {
    search() {
      this.searchUser();
      this.searchRecharge();
    },
    //查询用户信息
    searchUser() {
      core
        .fetch({
          method: "post",
          url: "/api/searchUser",
          params: {
            cardName: this.ardName,
            cardNum: this.cardNum,
          },
        })
        .then((res) => {
          const { message, data } = res;
          this.userInfo = data;
          this.$hMessage.info(message);
        });
    },
    //查询用户提现充值信息
    searchRecharge() {
      core
        .fetch({
          method: "get",
          url: "/api/searchRecharge",
          params: {
            cardName: this.ardName,
            cardNum: this.cardNum,
          },
        })
        .then((res) => {
          const { data } = res;
          this.tradeInfo = data;
        });
    },
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
    height: 50px;
    margin-top: 15px;
    font-weight: 400;
    font-size: 20px;
    background-color: #fff;
    border-radius: 8px;
  }
  .content {
    width: 100%;
    height: 60vh;
    margin-top: 15px;
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 10px;
  }
  .left-title {
    font-weight: 800;
    font-size: 25px;
    text-align: center;
  }
  .left-content {
    padding: 15px;
    background: #fff;
    border-radius: 10px;
  }
  .item {
    font-weight: 550;
    font-size: 15px;
    line-height: 5vh;
  }
}
</style>
