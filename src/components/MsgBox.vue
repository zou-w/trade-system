<template>
  <div>
    <!-- 购买提示 -->
    <h-msg-box
      v-model="modal"
      :escClose="true"
      title="产品购买信息提示详情"
      @on-ok="ok"
      @on-cancel="cancel"
      :beforeEscClose="beforetest"
    >
      <p>购买客户为:{{ buyInfo.cardName }}</p>
      <p>购买卡号为:{{ buyInfo.cardNum }}</p>
      <p>购买产品Id为:{{ buyInfo.productId }}</p>
      <p>购买产品名称为:{{ buyInfo.productName }}</p>
      <p>购买产品金额为:{{ buyInfo.buyNum }}</p>
      <p>购买产品时间为:{{ buyInfo.buyTime }}</p>
      <p>购买产品的订单编号为:{{ buyInfo.buyId }}</p>
    </h-msg-box>
    <!-- 卖出提示 -->
    <h-msg-box
      v-model="modal"
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
  </div>
</template>

<script>
export default {
  name: "MsgBox",
  data() {
    return {
      modal: false,
      buyInfo: {
        buyId: "",
        buyNum: "",
        buyTime: "",
        cardName: "",
        cardNum: "",
        productId: "",
        productName: "",
      },
      sellInfo: {
        cardName: "",
        cardNum: "",
        personNum: "",
        productId: "",
        productName: "",
        sellId: "",
        sellNum: "",
        sellTime: "",
      },
    };
  },
  methods: {
    // 购买信息
    changeBuyModal(params, res) {
      console.log(params);
      console.log(res);
      this.modal = params;
      this.buyInfo = res;
    },
    // 卖出信息
    changeSellModal(params, res) {
      console.log(params);
      console.log(res);
      this.modal = params;
      this.sellInfo = res;
    },
    beforetest() {
      return true;
    },
    ok() {
      this.$hMessage.info("点击了确定");
    },
    cancel() {
      this.$hMessage.info("点击了取消");
    },
  },
};
</script>

<style></style>
