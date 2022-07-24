<template>
  <div class="open">
    <div class="searchProduct">
      <div class="searchForm">
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
      <div class="btn">
        <h-button class="add" type="primary" size="large" @click="addProduct"
          >添加产品</h-button
        >
        <h-button type="error" size="large" @click="deleteProduct"
          >删除产品</h-button
        >
      </div>
    </div>
    <div class="showProduct">
      <h-table
        width="1200"
        height="500"
        border
        :columns="productLists"
        :data="this.productList"
        @on-select="selectInfo"
      >
      </h-table>
      <!-- 分页 -->
      <div style="margin: 10px; overflow: hidden">
        <div style="float: right">
          <h-page :total="100" :current="1"></h-page>
        </div>
      </div>
      <addProductVue ref="showAddProduct" />
      <editProductVue ref="showEditProduct" />
    </div>
  </div>
</template>
<script>
import request from "../../service/request";
import { fuzzySearch } from "../../utils/search-utils";
import addProductVue from "../../components/AddProduct.vue";
import editProductVue from "../../components/editProduct.vue";
export default {
  components: {
    addProductVue,
    editProductVue,
  },
  data() {
    const that = this;
    return {
      formItem: {
        productName: "",
      },
      productList: [],
      //原数组
      productIds: [],
      productLists: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "产品名称",
          key: "productName",
          width: 200,
        },
        {
          title: "产品编号",
          key: "productId",
          width: 200,
        },
        {
          title: "产品类型",
          key: "productType",
          width: 200,
        },
        {
          title: "产品总额",
          key: "productNum",
          width: 150,
        },
        {
          title: "产品净值",
          key: "productPrice",
          width: 150,
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
        {
          title: "操作",
          key: "action",
          fixed: "right",
          width: 100,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                    type: "primary",
                  },
                  on: {
                    click() {
                      console.log("编辑");
                      that.modal = true;
                      that.$refs.showEditProduct.changeSellModal(
                        that.modal,
                        params.row
                      );
                    },
                  },
                },
                "编辑"
              ),
            ]);
          },
        },
      ],
    };
  },
  methods: {
    getProductLists() {
      request({
        method: "get",
        url: "/showProduct",
        data: {
          allProduct: 1,
        },
      }).then((res) => {
        this.productList = res.data;
      });
    },
    //搜索产品
    searchProduct() {
      if (this.formItem.productName === "") {
        this.getProductLists();
      } else {
        this.productList = fuzzySearch(
          this.productList,
          this.formItem.productName
        );
      }
    },
    //选中状态
    selectInfo(e) {
      //选中的数据项
      this.productIds = [];
      e.map((item) => {
        this.productIds.push(item.productId);
      });
      this.productIds1 = JSON.parse(JSON.stringify(this.productIds));
    },
    //添加产品
    addProduct() {
      this.$refs.showAddProduct.changeSellModal(true);
    },
    //删除产品
    deleteProduct() {
      console.log(this.productIds1);
      if (this.productIds1 !== undefined) {
        request({
          method: "post",
          url: "/deleteProduct",
          data: {
            productId: this.productIds1,
          },
        }).then((res) => {
          const { message } = res;
          this.$hMessage.success(message);
          this.getProductLists();
        });
      } else {
        this.$hMessage.info("请选择删除的产品");
      }
    },
  },
  created() {
    // 获取产品列表;
    this.getProductLists();
  },
};
</script>

<style lang="less" scoped>
.open {
  width: 100%;
  height: 83vh;
  padding: 18px;
  background-color: #fff;
  border-radius: 10px;
  .searchProduct {
    display: flex;
    justify-content: space-around;
    .btn {
      .add {
        margin-right: 50px;
      }
    }
  }
}
</style>
