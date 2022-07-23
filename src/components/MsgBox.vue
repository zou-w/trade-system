<template>
  <div>
    <!-- 购买提示 -->
    <h-msg-box v-model="modal1" width="360">
      <p slot="header" style="color: #00b894; text-align: center">
        <h-icon name="success"></h-icon>
        <span>申购订单信息</span>
      </p>
      <div style="text-align: center">
        <h3>购买客户为:{{ buyInfo.cardName }}</h3>
        <h3>购买卡号为:{{ buyInfo.cardNum }}</h3>
        <h3>购买产品Id为:{{ buyInfo.productId }}</h3>
        <h3>购买产品名称为:{{ buyInfo.productName }}</h3>
        <h3>购买产品金额为:{{ buyInfo.buyNum }}</h3>
        <h3>购买产品时间为:{{ buyInfo.buyTime }}</h3>
        <h3>购买产品的订单编号为:{{ buyInfo.buyId }}</h3>
      </div>
      <div slot="footer">
        <h-button type="success" size="large" long @click="ok">确定</h-button>
      </div>
    </h-msg-box>
    <!-- 卖出提示 -->
    <h-msg-box v-model="modal2" width="360">
      <p slot="header" style="color: #00b894; text-align: center">
        <h-icon name="success"></h-icon>
        <span>赎回订单信息</span>
      </p>
      <div style="text-align: center">
        <h3>赎回客户为:{{ sellInfo.cardName }}</h3>
        <h3>赎回卡号为:{{ sellInfo.cardNum }}</h3>
        <h3>赎回产品Id为:{{ sellInfo.productId }}</h3>
        <h3>赎回产品名称为:{{ sellInfo.productName }}</h3>
        <h3>赎回产品金额为:{{ sellInfo.sellNum }}</h3>
        <h3>赎回产品时间为:{{ sellInfo.sellTime }}</h3>
        <h3>赎回产品的订单编号为:{{ sellInfo.sellId }}</h3>
        <h3>当前产品剩余份额:{{ sellInfo.personNum }}</h3>
      </div>
      <div slot="footer">
        <h-button type="success" size="large" long @click="ok">确定</h-button>
      </div>
    </h-msg-box>
    <!-- 充值提示 -->
    <h-msg-box v-model="modal3" width="360">
      <p slot="header" style="color: #00b894; text-align: center">
        <h-icon name="success"></h-icon>
        <span>充值订单信息</span>
      </p>
      <div style="text-align: center">
        <h3>充值客户为:{{ rechargeInfo.cardName }}</h3>
        <h3>充值客户身份证号为:{{ rechargeInfo.cardNum }}</h3>
        <h3>充值银行卡号为:{{ rechargeInfo.cardInfo }}</h3>
        <h3>充值金额为:{{ rechargeInfo.rechargeValue }}</h3>
        <h3>当前余额位:{{ rechargeInfo.totalValue }}</h3>
        <h3>充值时间为:{{ rechargeInfo.rechargeTime }}</h3>
        <h3>充值订单编号为:{{ rechargeInfo.rechargeId }}</h3>
      </div>
      <div slot="footer">
        <h-button type="success" size="large" long @click="ok">确定</h-button>
      </div>
    </h-msg-box>
    <!-- 提现提示 -->
    <h-msg-box v-model="modal4" width="360">
      <p slot="header" style="color: #00b894; text-align: center">
        <h-icon name="success"></h-icon>
        <span>提现订单信息</span>
      </p>
      <div style="text-align: center">
        <h3>提现客户为:{{ withdrawalInfo.cardName }}</h3>
        <h3>提现客户身份证号为:{{ withdrawalInfo.cardNum }}</h3>
        <h3>提现银行卡号为:{{ withdrawalInfo.cardInfo }}</h3>
        <h3>提现金额为:{{ withdrawalInfo.withdrawalValue }}</h3>
        <h3>提现时间为:{{ withdrawalInfo.withdrawalTime }}</h3>
        <h3>提现订单编号为:{{ withdrawalInfo.withdrawalId }}</h3>
      </div>
      <div slot="footer">
        <h-button type="success" size="large" long @click="ok">确定</h-button>
      </div>
    </h-msg-box>
  </div>
</template>

<script>
import {
  SELL_INFO,
  BUY_INFO,
  WITH_DRAWAL_VALUE,
  RECHARGE,
} from "../constant/orm";
export default {
  name: "MsgBox",
  data() {
    return {
      modal1: false, //购买
      modal2: false, //赎回
      modal3: false, //充值
      modal4: false, //提现
      buyInfo: BUY_INFO,
      sellInfo: SELL_INFO,
      //充值
      rechargeInfo: RECHARGE,
      //提现
      withdrawalInfo: WITH_DRAWAL_VALUE,
    };
  },
  methods: {
    // 购买信息
    changeBuyModal(params, res) {
      this.modal1 = params;
      this.buyInfo = res;
      console.log(res);
    },
    // 卖出信息
    changeSellModal(params, res) {
      this.modal2 = params;
      this.sellInfo = res;
    },
    rechargeModal(params, res) {
      this.modal3 = params;
      this.rechargeInfo = res;
    },
    withdrawalModal(params, res) {
      this.modal4 = params;
      this.withdrawalInfo = res;
    },
    ok() {
      this.modal1 = false;
      this.modal2 = false;
      this.modal3 = false;
      this.modal4 = false;
      location.reload();
    },
  },
};
</script>

<style></style>
