<template>
  <div class="open">
    <div class="open-header">用户申购</div>
    <div class="content">
      <h-form :model="buyInfo" :label-width="200">
        <h-form-item label="用户姓名" prop="cardName" required>
          <h-input
            v-model="buyInfo.cardName"
            placeholder="请输入姓名"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="用户银行卡号" prop="cardInfo" :validRules="cardInfoRule" required>
          <h-input
            v-model="buyInfo.cardInfo"
            placeholder="请输入银行卡号码"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="购买产品编码" prop="productId" required>
          <h-input
            v-model="buyInfo.productId"
            placeholder="请输入购买产品编码"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="购买产品的名字" prop="productName" required>
          <h-input
            v-model="buyInfo.productName"
            placeholder="请输入购买产品的名字"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="购买产品的金额" prop="buyNum" required>
          <h-typefield
            v-model="buyInfo.buyNum"
            style="width: 300px"
            integerNum="8"
            type="money"
            placeholder="请输入购买产品的金额"
            bigTips
            isround
          ></h-typefield>
        </h-form-item>
      </h-form>
    </div>
    <div class="open-footer">
      <h-button @click="submitBuy" class="btn" type="primary" size="large"
        >申购</h-button
      >
    </div>
    <Msg-Box ref="tradeInfo" />
    <!-- 弹框提示 -->
    <h-msg-box
      v-model="modal1"
      :escClose="true"
      title="确认购买该产品购买"
      @on-ok="ok"
      @on-cancel="cancel"
      :beforeEscClose="beforetest"
    >
      <p>当前产品风险等级为:</p>
      <p>您当前的客户类型为:</p>
      <p>确定是否购买该产品</p>
    </h-msg-box>
  </div>
</template>
<script>
import core from "@hsui/core";
import { format } from "../../../utils/format-utils";
import MsgBox from "../../../components/MsgBox.vue";
const cardInfoRule=/^([1-9]{1})(\d{14}|\d{18})$/; /** 银行卡号规范 */

export default {
  components: {
    MsgBox,
  },
  data() {
    return {
      buyInfo: {
        productId: "",
        cardName: "",
        productName: "",
        cardInfo: "",
        buyNum: "",
      },
      modal1: false,
      modal: true,
      buyMessage: "是否确定申购",

       cardInfoRule: [
          { test:cardInfoRule, message: "请输入正确格式", trigger: "blur" },
        ]
    };
  },
  methods: {
    submitBuy() {
      this.modal1 = true;
      // 风险等级判断
    },
    beforetest() {
      return true;
    },
    ok() {
      let buyTime1 = Date.now();
      let buyTime = format(buyTime1);
      core
        .fetch({
          method: "post",
          url: "/api/buy",
          data: {
            ...this.buyInfo,
            buyTime: buyTime,
          },
        })
        .then((res) => {
          console.log(res);
          // 购买成功展示购买单信息
          this.$refs.tradeInfo.changeBuyModal(this.modal, res.data);
          // this.$router.push("/openAccount/test");
          //   if (res.data.state === "登录成功") {
          //   this.$router.push("/test");
          // }
        });
    },
    cancel() {
      this.$hMessage.info("取消购买");
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
    .btn {
      margin: 30px 45%;
    }
  }
}
</style>
