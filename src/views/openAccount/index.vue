<template>
  <div class="open">
    <div class="open-header">用户开户</div>
    <div class="content">
      <h-form :model="formItem" :label-width="200">
        <h-form-item label="客户类型">
          <h-select
            style="width: 200px"
            v-model="formItem.userType"
            placeholder="请选择"
          >
            <h-option value="person">个体</h-option>
            <h-option value="enterprise">企业</h-option>
          </h-select>
        </h-form-item>
        <h-form-item label="用户姓名">
          <h-input
            v-model="formItem.cardName"
            placeholder="请输入姓名"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="用户电话">
          <h-input
            v-model="formItem.phoneNum"
            placeholder="请输入电话号码"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="证件类型">
          <h-select
            style="width: 200px"
            v-model="formItem.cardType"
            placeholder="请选择"
          >
            <h-option value="idCard">身份证</h-option>
            <h-option value="passport">护照</h-option>
          </h-select>
        </h-form-item>
        <h-form-item label="用户证件号码">
          <h-input
            v-model="formItem.cardNum"
            placeholder="请输入证件号码"
            style="width: 300px"
          ></h-input>
        </h-form-item>
        <h-form-item label="用户银行卡号码">
          <h-input
            v-model="formItem.cardInfo"
            placeholder="请输入银行卡号码"
            style="width: 300px"
          ></h-input>
        </h-form-item>
      </h-form>
    </div>
    <div class="open-footer">
      <h-button @click="submitUser" class="btn" type="primary" size="large"
        >提交个人信息</h-button
      >
    </div>
  </div>
</template>

<script>
import core from "@hsui/core";
export default {
  data() {
    return {
      formItem: {
        userType: "",
        cardName: "",
        phoneNum: "",
        cardInfo: "",
        userType: "",
        cardNum: "",
      },
    };
  },
  methods: {
    submitUser() {
      console.log(core);
      core
        .fetch({
          method: "post",
          url: "http://127.0.0.1:4523/m1/1300795-0-default/createUserInfo",
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
