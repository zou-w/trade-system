<template>
  <div class="open">
    <div class="open-header">用户申购</div>
    <div class="content">
      <h-form ref="buyInfo" :model="buyInfo" :label-width="200">
        <h-form-item
          label="用户姓名"
          prop="cardName"
          :validRules="nameRule"
          required
        >
          <h-input
            v-model="buyInfo.cardName"
            placeholder="请输入姓名"
            style="width: 300px"
          ></h-input>
        </h-form-item>

        <h-form-item
          label="用户证件号码"
          prop="cardNum"
          :validRules="cardNumRule"
          required
        >
          <h-input
            v-model="buyInfo.cardNum"
            placeholder="请输入证件号码"
            style="width: 300px"
            :maxlength="18"
          ></h-input>
        </h-form-item>

        <h-form-item label="用户银行卡号码" prop="cardInfo" required>
          <h-typefield
            style="width: 300px"
            v-model="buyInfo.cardInfo"
            type="cardNo"
            placeholder="请输入银行卡号码"
            :step="19"
          ></h-typefield>
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
      <h-button
        @click="submitBuy('buyInfo')"
        class="btn"
        type="primary"
        size="large"
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
      <h3>当前产品风险等级为:{{ productLevel }}</h3>
      <h3>您当前的客户类型为:{{ userRiskLevel }}</h3>
      <h3>确定是否购买该产品?</h3>
    </h-msg-box>
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
    const nameRule =
      /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/; /** 姓名规范 */
    const cardNumRule =
      /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/; /**  身份证号格式 */
    return {
      buyInfo: {
        productId: "",
        cardName: "",
        cardNum: "",
        productName: "",
        cardInfo: "",
        buyNum: "",
      },
      modal1: false,
      modal: true,
      buyMessage: "是否确定申购",
      productLevel: "",
      userRiskLevel: "",
      cardInfoRule: [{ message: "请输入正确身份证", trigger: "blur" }],
      nameRule: [
        { test: nameRule, message: "请输入正确姓名", trigger: "blur" },
      ],
      cardNumRule: [
        { test: cardNumRule, message: "请输入正确身份证号", trigger: "blur" },
      ],
    };
  },
  methods: {
    submitBuy(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.searchProductLevel();
          this.searchUserLevel();
          this.modal1 = true;
        } else {
          this.$hMessage.error("表单验证失败!");
        }
      });
      // 风险等级判断
    },
    //查询产品风险等级
    searchProductLevel() {
      core
        .fetch({
          method: "get",
          url: "/api/searchProduct",
          params: {
            productName: this.buyInfo.productName,
          },
        })
        .then((res) => {
          const { productLevel } = res.data;
          this.productLevel = productLevel;
        });
    },
    //查询用户风险等级
    searchUserLevel() {
      core
        .fetch({
          method: "post",
          url: "/api/searchUser",
          params: {
            cardName: this.buyInfo.cardName,
            cardNum: this.buyInfo.cardNum,
          },
        })
        .then((res) => {
          const { userRiskLevel } = res.data;
          this.userRiskLevel = userRiskLevel;
        });
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
