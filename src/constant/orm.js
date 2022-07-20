export const PRODUCT_TYPE_ORM = {
  special: "专户产品",
  normal: "普通",
};

export const PRODUCT_STATUS_ORM = {
  releaseNormal: "正常",
  releaseFail: "发布失败",
  releaseSuccess: "发布成功",
};

export const SELL_TABLE = [
  {
    title: "姓名",
    key: "cardName",
    width: 100,
  },
  {
    title: "身份证信息",
    key: "cardNum",
    width: 300,
  },
  {
    title: "产品名字",
    key: "productName",
    width: 100,
  },
  {
    title: "产品id",
    key: "productId",
    width: 100,
  },
  {
    title: "订单编号",
    key: "buyId",
    width: 200,
  },
  {
    title: "当前产品份额",
    key: "personNum",
    width: 100,
  },
  {
    title: "购买时间",
    key: "buyTime",
    width: 200,
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
              click(productId) {
                this.sellMsgBox = true;
              },
            },
          },
          "赎回"
        ),
      ]);
    },
  },
];
