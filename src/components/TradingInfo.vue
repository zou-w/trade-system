<template>
  <div>
    <!-- 赎回信息 -->
    <div>
      <h-msg-box
        v-model="modal1"
        :escClose="true"
        title="产品赎回信息提示详情"
        @on-ok="ok"
        @on-cancel="cancel"
        :beforeEscClose="beforetest"
      >
        <h-form :model="sellInfo" :label-width="100">
          <h-form-item label="用户姓名">
            <h-input
              v-model="sellInfo.cardName"
              placeholder="请输入姓名"
              style="width: 300px"
            ></h-input>
          </h-form-item>
          <h-form-item label="用户身份证信息">
            <h-input
              v-model="sellInfo.cardNum"
              placeholder="请输入用户身份证信息"
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
          <h-form-item label="购买产品名称">
            <h-input
              v-model="sellInfo.productName"
              placeholder="请输入购买产品名称"
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
      </h-msg-box>
    </div>
    <div>
      <Msg-Box ref="tradeInfo" />
    </div>
  </div>
</template>

<script>
import request from "@/service/request.js";
import { format } from "../utils/format-utils";
import MsgBox from "./MsgBox.vue";
export default {
  name: "TradingInfo",
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
    changeSellModal(params, data) {
      this.modal1 = params;
      this.sellInfo = data;
    },
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
      request({
        method: "post",
        url: "/sell",
        data: {
          ...this.sellInfo,
          sellTime: sellTime,
          dealType: "赎回",
        },
      }).then((res) => {
        console.log(res);
        // 购买成功展示购买单信息
        this.$refs.tradeInfo.changeSellModal(this.modal, res.data);
      });
    },
    cancel() {
      this.$hMessage.info("取消赎回");
    },
  },
};
</script>

<style></style>
