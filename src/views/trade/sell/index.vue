<template>
  <div class="open">
    <div class="open-header">
      <h-input
        v-model="cardName"
        id="userName"
        placeholder="请输入用户姓名"
        style="width: 300px"
      >
        <h-icon name="android-person" slot="prepend"></h-icon>
      </h-input>
      <h-input
        required
        v-model="cardNum"
        placeholder="请输入用户身份证号码"
        style="width: 300px"
        :maxlength="18"
      >
        <h-icon name="android-person" slot="prepend"></h-icon>
      </h-input>
      <h-button type="primary" @click="searchSell">搜索</h-button>
    </div>
    <div class="content">
      <h-table
        width="1200"
        height="350"
        border
        :columns="sellTable"
        :data="this.sellPerson"
      >
      </h-table>
    </div>
    <div class="open-footer">
      <!-- 分页 -->
      <div style="margin: 10px; overflow: hidden">
        <div style="float: right">
          <h-page :total="100" :current="1" @on-change="changePage"></h-page>
        </div>
      </div>
    </div>
    <TradeInfo ref="sellMsgBox" />
  </div>
</template>
<script>
import request from "@/service/request.js";
import TradeInfo from "../../../components/TradingInfo.vue";
export default {
  components: {
    TradeInfo,
  },
  data() {
    const that = this;
    return {
      cardName: "",
      cardNum: "",
      sellPerson: [],
      modal: false,
      sellTable: [
        {
          title: "姓名",
          key: "cardName",
          width: 150,
        },
        {
          title: "身份证信息",
          key: "cardNum",
          width: 350,
        },
        {
          title: "产品名字",
          key: "productName",
          width: 200,
        },
        {
          title: "产品id",
          key: "productId",
          width: 200,
        },
       
        {
          title: "当前产品份额",
          key: "personNum",
          width: 190,
        },
       
        {
          title: "操作",
          key: "action",
          fixed: "right",
          width: 120,
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
                      that.modal = true;
                      that.$refs.sellMsgBox.changeSellModal(
                        that.modal,
                        params.row
                      );
                    },
                  },
                },
                "赎回"
              ),
            ]);
          },
        },
      ],
    };
  },
  methods: {
    searchSell() {
      request({
        method: "post",
        url: "/searchSell",
        params: {
          cardName: this.cardName,
          cardNum: this.cardNum,
        },
      }).then((res) => {
        const { message, data } = res;
        this.sellPerson = data;
        this.$hMessage.info(message);
        console.log("@", this.sellPerson);
      });
    },
    //分页
    changePage() {
      // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
      this.sellTable = this.sellPerson();
    },
    sellInfo() {
      console.log("@@");
    },
  },
};
</script>

<style lang="less" scoped>
.open {
  .open-header {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 50px;
    font-weight: 400;
    font-size: 20px;
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
