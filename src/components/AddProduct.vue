<template>
  <div>
    <!-- 赎回信息 -->
    <div>
      <h-msg-box
        v-model="modal"
        :escClose="true"
        title="添加产品信息填取"
        @on-ok="ok"
        @on-cancel="cancel"
        :beforeEscClose="beforetest"
      >
        <h-form :model="productInfo" :label-width="100">
          <h-form-item label="产品名称">
            <h-input
              v-model="productInfo.productName"
              placeholder="请输入产品名称"
              style="width: 300px"
            ></h-input>
          </h-form-item>
          <h-form-item label="产品编号">
            <h-input
              v-model="productInfo.productId"
              placeholder="请输入产品编号"
              style="width: 300px"
            ></h-input>
          </h-form-item>
          <h-form-item label="产品类型">
            <h-input
              v-model="productInfo.productType"
              placeholder="请输入产品类型"
              style="width: 300px"
            ></h-input>
          </h-form-item>
          <h-form-item label="产品总额">
            <h-input
              v-model="productInfo.productNum"
              placeholder="请输入产品总额"
              style="width: 300px"
            ></h-input>
          </h-form-item>
          <h-form-item label="产品净值">
            <h-typefield
              v-model="productInfo.productPrice"
              style="width: 300px"
              integerNum="8"
              type="money"
              placeholder="请输入产品净值"
              suffixNum="0"
              bigTips
              isround
            ></h-typefield>
          </h-form-item>
          <h-form-item label="产品风险等级">
            <h-select
              style="width: 200px"
              v-model="productInfo.productLevel"
              placeholder="请选择"
            >
              <h-option value="high">高风险</h-option>
              <h-option value="middle">中等风险</h-option>
              <h-option value="low">低风险</h-option>
            </h-select>
          </h-form-item>
        </h-form>
      </h-msg-box>
    </div>
  </div>
</template>

<script>
import core from "@hsui/core";
import { PRODUCT_INFO } from "../constant/orm";
export default {
  name: "addProduct",
  data() {
    return {
      modal: false,
      productInfo: PRODUCT_INFO,
    };
  },
  methods: {
    changeSellModal(params) {
      console.log(params);
      this.modal = params;
    },
    beforetest() {
      return true;
    },
    ok() {
      core
        .fetch({
          method: "post",
          url: "/api/addProduct",
          data: {
            ...this.productInfo,
          },
        })
        .then((res) => {
          const { message } = res;
          this.$hMessage.success(message);
          location.reload();
        });
    },
    cancel() {
      this.$hMessage.info("取消添加");
    },
  },
};
</script>

<style></style>
