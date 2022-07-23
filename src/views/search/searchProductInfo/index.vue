<template>
  <div class="open">
    <div class="open-header">产品信息查询列表</div>
    <div class="content">
      <div class="searchTitle">
        <h-form :model="formItem" :label-width="80">
          <h-form-item label="搜索产品:">
            <h-input
              type="text"
              v-model="formItem.productName"
              placeholder="请输入搜索的产品"
              style="width: 300px"
              @on-blur="searchProduct"
            >
              <h-icon
                name="android-cart
                .icon-android-cart"
                slot="prepend"
              ></h-icon>
            </h-input>
          </h-form-item>
        </h-form>
      </div>
      <div class="showProducts">
        <h-table
          :data="productLists"
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
import { PRODUCT_LISTS_TITLE } from "../../../constant/orm";
import { fuzzySearch } from "../../../utils/search-utils";
export default {
  data() {
    return {
      formItem: {
        productName: "",
      },
      productLists: [],
      productListsTitle: PRODUCT_LISTS_TITLE,
    };
  },
  methods: {
    searchUserProduct() {
      core
        .fetch({
          method: "get",
          url: "/api/showProduct",
          data: {
            allProduct: 1,
          },
        })
        .then((res) => {
          const { message } = res;
          console.log(res.data);
          this.productLists = res.data;
          this.$hMessage.info(message);
        });
    },
    searchProduct() {
      if (this.formItem.productName === "") {
        this.searchUserProduct();
      } else {
        this.productLists = fuzzySearch(
          this.productLists,
          this.formItem.productName
        );
      }
    },
    changePage() {
      // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
      this.productLists = this.searchUserProduct();
    },
  },
  created() {
    this.searchUserProduct();
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
  }
}
</style>
