<template>
  <div class="open">
    <div class="open-header">用户申购</div>
    <div class="content">
      <h-form :model="buyInfo" :label-width="200">
        <h-form-item label="用户姓名">
          <h-input
            v-model="buyInfo.cardName"
            placeholder="请输入姓名"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="用户银行卡号">
          <h-input
            v-model="buyInfo.cardInfo"
            placeholder="请输入银行卡号码"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="购买产品编码">
          <h-input
            v-model="buyInfo.productId"
            placeholder="请输入购买产品编码"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="购买产品的名字">
          <h-input
            v-model="buyInfo.productName"
            placeholder="请输入购买产品的名字"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="购买产品的金额">
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
      buyInfo: {
        productId: "",
        cardName: "",
        productName: "",
        cardInfo: "",
        buyNum: "",
      },
      modal: true,
    };
  },
  methods: {
    submitBuy() {
      let buyTime1 = Date.now();
      let buyTime = format(buyTime1);
      this.$refs.tradeInfo.changeModal(this.modal);
      // core
      //   .fetch({
      //     method: "post",
      //     url: "http://127.0.0.1:4523/m1/1300795-0-default/createUserInfo",
      //     data: {
      //       ...this.formItem,
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     this.$router.push("/openAccount/test");
      //       if (res.data.state === "登录成功") {
      //       this.$router.push("/test");
      //     }
      //   });
    },
  },
};
</script>

<style lang="less" scoped>
.open {
  .open-header {
    width: 100%;
    height: 50px;
    margin-top: 15px;
    padding: 10px 0;
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
    padding: 30px 0;
    background-color: #fff;
    border-radius: 10px;
  }
  .open-footer {
    width: 100%;
    height: 100px;
    margin-top: 40px;
    background-color: #fff;
    border-radius: 10px;
    .btn {
      margin: 30px 45%;
    }
  }
}
</style>
