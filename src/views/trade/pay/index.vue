<template>
  <div class="open">
    <div class="open-header">充值 AND 提现</div>
    <div class="content">
      <!-- 充值 -->
      <div>
        <h-form ref="userInfo1" :model="userInfo1" :label-width="200">
          <h-form-item
            label="输入用户姓名"
            prop="cardName"
            :validRules="nameRule"
            required
          >
            <h-input
              v-model="userInfo1.cardName"
              placeholder="请输入用户姓名"
              style="width: 300px"
            ></h-input>
          </h-form-item>
          <h-form-item
            label="输入用户身份证信息"
            prop="cardNum"
            :validRules="cardNumRule"
            required
          >
            <h-input
              v-model="userInfo1.cardNum"
              placeholder="请输入用户身份证信息"
              style="width: 300px"
              @on-blur="searchInfo"
            ></h-input>
          </h-form-item>
          <h-form-item label="选择银行卡" prop="cardInfo" required>
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
          <h-form-item
            label="请选择充值金额"
            prop="rechargeValue"
            :validRules="moneyRule"
            required
          >
            <h-typefield
              v-model="userInfo1.rechargeValue"
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
              @click="recharge('userInfo1')"
              >充值</h-button
            >
          </h-form-item>
        </h-form>
      </div>
      <!-- 提现 -->
      <div>
        <h-form ref="userInfo2" :model="userInfo2" :label-width="200">
          <h-form-item
            label="输入用户姓名"
            prop="cardName"
            :validRules="nameRule"
            required
          >
            <h-input
              v-model="userInfo2.cardName"
              placeholder="请输入用户姓名"
              style="width: 300px"
            ></h-input>
          </h-form-item>
          <h-form-item
            label="输入用户身份证信息"
            prop="cardNum"
            :validRules="cardNumRule"
            required
          >
            <h-input
              v-model="userInfo2.cardNum"
              placeholder="请输入用户身份证信息"
              style="width: 300px"
              @on-blur="searchInfo"
            ></h-input>
          </h-form-item>
          <h-form-item label="选择银行卡" prop="cardInfo" required>
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
          <h-form-item
            label="请选择提现金额"
            prop="withdrawalValue"
            :validRules="moneyRule"
            required
          >
            <h-typefield
              v-model="userInfo2.withdrawalValue"
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
              @click="withdrawal('userInfo2')"
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
import request from "@/service/request.js";
import { format } from "../../../utils/format-utils";
import MsgBox from "../../../components/MsgBox.vue";
export default {
  components: {
    MsgBox,
  },
  data() {
    const cardNumrule =
      /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/; /**  身份证号格式 */
    const nameRule =
      /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/; /** 姓名规范 */
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

      cardNumRule: [
        { test: cardNumrule, message: "请输入正确身份证号", trigger: "blur" },
      ],
      nameRule: [
        { test: nameRule, message: "请输入正确姓名", trigger: "blur" },
      ],
      moneyRule: [
        {
          message: "金额只能为整数",
          trigger: "blur",
        },
      ],
    };
  },
  methods: {
    searchInfo() {
      //查询用户信息
      request({
        method: "post",
        url: "/searchUser",
        data: {
          cardName: this.userInfo1.cardName,
          cardNum: this.userInfo1.cardNum,
        },
      }).then((res) => {
        console.log(res);
        this.cardInfos = [];
        this.cardInfos.push(res.data.cardInfo);
      });
    },
    //充值
    recharge(name) {
      let rechargeTime = this.newTime();
      this.$refs[name].validate((valid) => {
        if (valid) {
          request({
            method: "post",
            url: "/recharge",
            data: {
              ...this.userInfo1,
              rechargeValue: this.rechargeValue,
              rechargeTime: rechargeTime,
              dealType: "充值",
            },
          }).then((res) => {
            console.log("充值", res.data);
            this.$refs.tradeInfo.rechargeModal(this.modal, res.data);
          });
        } else {
          this.$hMessage.error("表单验证失败!");
        }
      });
    },
    //提现
    withdrawal(name) {
      let withdrawalTime = this.newTime();
      this.$refs[name].validate((valid) => {
        if (valid) {
          request({
            method: "post",
            url: "/withdrawal",
            data: {
              ...this.userInfo2,
              withdrawalValue: this.withdrawalValue,
              withdrawalTime: withdrawalTime,
              dealType: "提现",
            },
          }).then((res) => {
            console.log("充值", res.data);
            this.$refs.tradeInfo.withdrawalModal(this.modal, res.data);
            //   if (res.data.state === "登录成功") {
            //   this.$router.push("/test");
            // }
          });
        } else {
          this.$hMessage.error("表单验证失败!");
        }
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
