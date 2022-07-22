<template>
  <div class="open">
    <div class="open-header">用户交易查询</div>
    <div class="content">
      <div class="searchTitle">
        <h-form :model="formItem" :label-width="120">
          <h-form-item label="搜索用户交易查询:">
            <h-input
              v-model="formItem.cardName"
              placeholder="请输入用户姓名"
              style="width: 300px"
            >
              <h-icon name="android-person" slot="prepend"></h-icon>
            </h-input>
            <h-input
              v-model="formItem.cardNum"
              placeholder="请输入用户身份证号码"
              style="width: 300px"
              :maxlength="18"
              class="input-num"
            >
              <h-icon name="android-person" slot="prepend"></h-icon>
            </h-input>
            <h-button class="btn" type="primary" @click="searchTrade"
              >搜索</h-button
            >
          </h-form-item>
        </h-form>
      </div>
      <div class="showProducts">
        <h-table
          :data="tradeLists"
          :columns="productListsTitle"
          stripe
        ></h-table>
        <div style="margin: 15px; overflow: hidden">
          <div style="float: right">
            <h-page :total="100" :current="1" @on-change="changePage"></h-page>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import core from "@hsui/core";
import { USER_TRADE_INFO } from "../../../constant/orm";
export default {
  data() {
    return {
      formItem: {
        cardName: "",
        cardNum: "",
      },
      tradeLists: this.mockTableData1(),
      productListsTitle: USER_TRADE_INFO,
    };
  },
  methods: {
    //搜索订单信息
    searchTrade() {
      core
        .fetch({
          method: "get",
          url: "/api/searchTrade",
          params: {
            ...this.formItem,
          },
        })
        .then((res) => {
          this.tradeLists = res.data;
          console.log("@", this.tradeLists);
        });
    },
    //数据
    mockTableData1() {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          cardName: "商圈" + Math.floor(Math.random() * 100 + 1),
          cardInfo: Math.floor(Math.random() * 3 + 1),
          tradeType: Math.floor(Math.random() * 7 + 1),
          tradeValue: Math.floor(Math.random() * 7 + 1),
          tradeTime: Math.floor(Math.random() * 7 + 1),
        });
      }
      return data;
    },
    changePage() {
      // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
      this.tradeLists = this.mockTableData1();
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
    height: 530px;
    margin-top: 40px;
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 10px;
    .searchTitle {
      .input-num {
        margin-left: 20px;
      }
      .btn {
        margin-left: 100px;
      }
    }
  }
}
</style>
