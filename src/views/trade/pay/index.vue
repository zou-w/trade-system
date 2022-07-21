<template>
  <div class="open">
    <div class="open-header">充值 AND 提现</div>
    <div class="content">
      <!-- 充值 -->
      <div>
        <h-form :model="userInfo1" :label-width="200">
          <h-form-item label="输入用户姓名">
            <h-input
              v-model="userInfo1.cardName"
              placeholder="请输入用户姓名"
              style="width: 300px"
            ></h-input>
          </h-form-item>
          <h-form-item label="输入用户身份证信息">
            <h-input
              v-model="userInfo1.cardNum"
              placeholder="请输入用户身份证信息"
              style="width: 300px"
              @on-blur="searchInfo"
            ></h-input>
          </h-form-item>
          <h-form-item label="选择银行卡">
            <h-select
              v-model="userInfo1.cardInfo"
              placeholder="请选择"
              style="width: 300px"
            >
              <h-option v-for="item in cardInfos" :value="item" :key="item">{{
                item
              }}</h-option>
            </h-select>
          </h-form-item>
          <h-form-item label="请选择充值金额">
            <h-typefield
              v-model="rechargeValue"
              style="width: 300px"
              integerNum="8"
              type="money"
              placeholder="其他充值金额"
              bigTips
              isround
            ></h-typefield>
          </h-form-item>
          <h-form-item>
            <h-button
              shape="circle"
              nativeType="button"
              type="primary"
              style="width: 200px"
              @click="recharge"
              >充值</h-button
            >
          </h-form-item>
        </h-form>
      </div>
      <!-- 提现 -->
      <div>
        <h-form :model="userInfo2" :label-width="200">
          <h-form-item label="输入用户姓名">
            <h-input
              v-model="userInfo2.cardName"
              placeholder="请输入用户姓名"
              style="width: 300px"
            ></h-input>
          </h-form-item>
          <h-form-item label="输入用户身份证信息">
            <h-input
              v-model="userInfo2.cardNum"
              placeholder="请输入用户身份证信息"
              style="width: 300px"
              @on-blur="searchInfo"
            ></h-input>
          </h-form-item>
          <h-form-item label="选择银行卡">
            <h-select
              v-model="userInfo2.cardInfo"
              placeholder="请选择"
              style="width: 300px"
            >
              <h-option v-for="item in cardInfos" :value="item" :key="item">{{
                item
              }}</h-option>
            </h-select>
          </h-form-item>
          <h-form-item label="请选择提现金额">
            <h-typefield
              v-model="withdrawalValue"
              style="width: 300px"
              integerNum="8"
              type="money"
              placeholder="其他提现金额"
              bigTips
            ></h-typefield>
          </h-form-item>
          <h-form-item>
            <h-button
              shape="circle"
              nativeType="button"
              type="primary"
              style="width: 200px"
              @click="withdrawal"
              >提现</h-button
            >
          </h-form-item>
        </h-form>
      </div>
      <!-- 订单提示 -->
      <Msg-Box ref="tradeInfo" />
    </div>
  </div>
</template>
<script>
import core from "@hsui/core";
import { format } from "../../../utils/format-utils";
import MsgBox from "../../../components/MsgBox.vue";
export default {
  components: {
    MsgBox,
  },
  data() {
    return {
      userInfo1: {
        cardName: "",
        cardNum: "",
        cardInfo: "",
      },
      userInfo2: {
        cardName: "",
        cardNum: "",
        cardInfo: "",
      },
      rechargeValue: "",
      withdrawalValue: "",
      cardInfos: [],
      modal: true,
    };
  },
  methods: {
    searchInfo() {
      //查询用户信息
      core
        .fetch({
          method: "post",
          url: "/api/searchUser",
          data: {
            cardName: this.userInfo1.cardName,
            cardNum: this.userInfo1.cardNum,
          },
        })
        .then((res) => {
          this.cardInfos = [];
          res.data.map((item) => {
            this.cardInfos.push(item.cardInfo);
          });
          //   if (res.data.state === "登录成功") {
          //   this.$router.push("/test");
          // }
        });
    },
    //充值
    recharge() {
      let rechargeTime = this.newTime();
      core
        .fetch({
          method: "post",
          url: "/api/recharge",
          data: {
            ...this.userInfo1,
            rechargeValue: this.rechargeValue,
            rechargeTime: rechargeTime,
          },
        })
        .then((res) => {
          console.log("充值", res.data);
          this.$refs.tradeInfo.rechargeModal(this.modal, res.data);
          //   if (res.data.state === "登录成功") {
          //   this.$router.push("/test");
          // }
        });
    },
    //提现
    withdrawal() {
      let withdrawalTime = this.newTime();
      core
        .fetch({
          method: "post",
          url: "/api/withdrawal",
          data: {
            ...this.userInfo2,
            withdrawalValue: this.withdrawalValue,
            withdrawalTime: withdrawalTime,
          },
        })
        .then((res) => {
          console.log("充值", res.data);
          this.$refs.tradeInfo.withdrawalModal(this.modal, res.data);
          //   if (res.data.state === "登录成功") {
          //   this.$router.push("/test");
          // }
        });
    },
    //新建时间
    newTime() {
      let Time1 = Date.now();
      return format(Time1);
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
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 500px;
    margin-top: 40px;
    padding: 30px 10px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
