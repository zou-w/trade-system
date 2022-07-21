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
              <h-icon name="android-person" slot="prepend"></h-icon>
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
import { fuzzySearch } from "../../../utils/search-utils";
export default {
  data() {
    return {
      formItem: {
        productName: "",
      },
      productLists: this.mockTableData1(),
      productListsTitle: [
        {
          title: "产品名称",
          key: "productName",
        },
        {
          title: "产品编号",
          key: "productId",
        },
        {
          title: "产品类型",
          key: "productType",
        },
        {
          title: "产品总额",
          key: "productNum",
        },
        {
          title: "产品净值",
          key: "productPrice",
          sortable: true,
          render: (h, params) => {
            return h("Tag", params.row.productPrice);
          },
        },
        {
          title: "产品风险等级",
          key: "productLevel",
          render: (h, params) => {
            const row = params.row;
            const color =
              row.productLevel === "high"
                ? "red"
                : row.productLevel === "low"
                ? "green"
                : "blue";
            const text =
              row.productLevel === "high"
                ? "高风险"
                : row.productLevel === "low"
                ? "低风险"
                : "中等风险";
            return h(
              "Tag",
              {
                props: {
                  type: "dot",
                  color: color,
                },
              },
              text
            );
          },
        },
      ],
    };
  },
  methods: {
    searchProduct() {
      this.productLists = fuzzySearch(
        this.productLists,
        this.formItem.productName
      );
    },
    //数据
    mockTableData1() {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          productName: "商圈" + Math.floor(Math.random() * 100 + 1),
          productLevel: Math.floor(Math.random() * 3 + 1),
          productId: Math.floor(Math.random() * 7 + 1),
          productType: Math.floor(Math.random() * 7 + 1),
          productNum: Math.floor(Math.random() * 7 + 1),
          productPrice: Math.floor(Math.random() * 7 + 1),
        });
      }
      return data;
    },
    changePage() {
      // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
      this.productLists = this.mockTableData1();
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
  }
}
</style>
