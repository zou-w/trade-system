<template>
  <!-- 赎回信息 -->
  <div>
    <h-msg-box
      v-model="modalSell"
      :escClose="true"
      title="产品赎回信息提示详情"
      @on-ok="ok"
      @on-cancel="cancel"
      :beforeEscClose="beforetest"
    >
      <p>赎回客户为:{{ sellInfo.cardName }}</p>
      <p>赎回卡号为:{{ sellInfo.cardNum }}</p>
      <p>赎回产品Id为:{{ sellInfo.productId }}</p>
      <p>赎回产品名称为:{{ sellInfo.productName }}</p>
      <p>赎回产品金额为:{{ sellInfo.sellNum }}</p>
      <p>赎回产品时间为:{{ sellInfo.sellTime }}</p>
      <p>赎回产品的订单编号为:{{ sellInfo.sellId }}</p>
      <p>当前产品剩余份额:{{ sellInfo.personNum }}</p>
    </h-msg-box>
    <h-form :model="sellInfo" :label-width="200">
      <h-form-item label="用户姓名">
        <h-input
          v-model="sellInfo.cardName"
          placeholder="请输入姓名"
          style="width: 300px"
        ></h-input>
      </h-form-item>
      <h-form-item label="用户银行卡号">
        <h-input
          v-model="sellInfo.cardInfo"
          placeholder="请输入银行卡号码"
          style="width: 300px"
        ></h-input>
      </h-form-item>
      <h-form-item label="购买产品编码">
        <h-input
          v-model="sellInfo.productId"
          placeholder="请输入购买产品编码"
          style="width: 300px"
        ></h-input>
      </h-form-item>
      <h-form-item label="购买产品的名字">
        <h-input
          v-model="sellInfo.productName"
          placeholder="请输入购买产品的名字"
          style="width: 300px"
        ></h-input>
      </h-form-item>
      <h-form-item label="赎回的份额">
        <h-typefield
          v-model="sellInfo.sellNum"
          style="width: 300px"
          integerNum="8"
          type="money"
          placeholder="请输入赎回的份额"
          suffixNum="0"
          bigTips
          isround
        ></h-typefield>
      </h-form-item>
    </h-form>
    <div>
      <h-button @click="submitSell" class="btn" type="primary" size="large"
        >赎回</h-button
      >
    </div>
  </div>
  <div>
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
      <p>确认赎回当前产品?</p>
    </h-msg-box>
  </div>
</template>

<script>
import core from "@hsui/core";
import { format } from "../../../utils/format-utils";
import MsgBox from "../../../components/MsgBox.vue";
export default {
  name: "tradeInfo",
  components: {
    MsgBox,
  },
  data() {
    return {
      sellInfo: {
        productId: "",
        cardName: "",
        productName: "",
        cardInfo: "",
        sellNum: "",
      },
      modal1: false,
      modal: true,
    };
  },
  methods: {
    submitSell() {
      this.modal1 = true;
      // 风险等级判断
    },
    beforetest() {
      return true;
    },
    ok() {
      let sellTime1 = Date.now();
      let sellTime = format(sellTime1);
      core
        .fetch({
          method: "post",
          url: "http://127.0.0.1:4523/m1/1300795-0-default/sell",
          data: {
            ...this.sellInfo,
            sellTime: sellTime,
          },
        })
        .then((res) => {
          console.log(res);
          // 购买成功展示购买单信息
          this.$refs.tradeInfo.changeSellModal(this.modal, res.data);
          // this.$router.push("/openAccount/test");
          //   if (res.data.state === "登录成功") {
          //   this.$router.push("/test");
          // }
        });
    },
    cancel() {
      this.$hMessage.info("取消赎回");
    },
  },
};
</script>

<style></style>
