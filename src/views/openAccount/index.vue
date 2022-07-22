<template>
  <div class="open">
    <div class="open-header">用户开户</div>
    <div class="content">
      <h-form
        :ref="formItem"
        :model="formItem"
        :label-width="200"
      >
        <h-form-item label="客户类型" prop="userType" required>
          <h-select
            style="width: 200px"
            v-model="formItem.userType"
            placeholder="请选择"
          >
            <h-option value="person">个体</h-option>
            <h-option value="enterprise">企业</h-option>
          </h-select>
        </h-form-item>

        <h-form-item label="用户姓名" prop="cardName" :validRules="nameRule" required>
          <h-input
            v-model="formItem.cardName"
            placeholder="请输入姓名"
            style="width: 300px"
          ></h-input>
        </h-form-item>

        <h-form-item label="用户电话" prop="phoneNum" :validRules="phoneNumRule" required>
          <h-input
            v-model="formItem.phoneNum"
            placeholder="请输入电话号码"
            style="width: 300px"
            type="int"
            maxlength="11"
          ></h-input>
        </h-form-item>

        <h-form-item label="证件类型" prop="cardType" required>
          <h-select
            style="width: 200px"
            v-model="formItem.cardType"
            placeholder="请选择"
          >
            <h-option value="idCard">身份证</h-option>
            <h-option value="passport">护照</h-option>
          </h-select>
        </h-form-item>

        <h-form-item label="用户证件号码" prop="cardNum" :validRules="cardNumRule" required>
          <h-input
            v-model="formItem.cardNum"
            placeholder="请输入证件号码"
            style="width: 300px"
            :maxlength="18"
          ></h-input>
        </h-form-item>

        <h-form-item label="用户银行卡号码" prop="cardInfo" :validRules="cardInfoRule" required>
          <h-typefield
            style="width: 300px"
            v-model="formItem.cardInfo"
            type="cardNo"
            placeholder="请输入银行卡号码"
            :maxlength="19"
            bigTips
          ></h-typefield>
        </h-form-item>
      </h-form>
    </div>
    <div class="open-footer">
      <h-button @click="submitUser" class="btn" type="primary" size="large"
        >申购</h-button
      >
    </div>
  </div>
</template>

<script>
import core from "@hsui/core";

const nameRule= /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/;  /** 姓名规范 */
const phoneNumrule = /^[1][3,4,5,7,8][0-9]{9}$/; /** 电话号码格式 */
const cardNumrule = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/; /**  身份证号格式 */
const cardInforule=/^([1-9]{1})(\d{14}|\d{18})$/; /** 银行卡号 */
export default {
  data() {
    return {
      formItem: {
        userType: "" /*客户类型 */,
        cardName: "" /*客户姓名 */,
        phoneNum: "" /*电话号码 */,
        cardInfo: "" /*银行卡号 */,
        cardType: "" /*证件类型 */,
        cardNum: "" /*身份证号 */,
      },

        phoneNumRule: [
          { test:phoneNumrule,message:"请输入正确电话号码",trigger:"blur"}
        ],
        cardNumRule: [
          { test: cardNumrule, message: "请输入正确身份证号", trigger: "blur" },
        ],
        cardInfoRule: [
          { test:cardInforule, message: "请输入正确银行卡号", trigger: "blur" },
        ],
         nameRule: [
          { test: nameRule, message: "请输入正确姓名", trigger: "blur" },
        ],
    
    };
  },
  methods: {
    submitUser() {
      console.log(this.formItem);
      core
        .fetch({
          method: "post",
          url: "/api/createUserInfo",
          data: {
            ...this.formItem,
          },
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/openAccount/test");
          //   if (res.data.state === "登录成功") {
          //   this.$router.push("/test");
          // }
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
