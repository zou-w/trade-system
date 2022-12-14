export const PRODUCT_TYPE_ORM = {
  special: "专户产品",
  normal: "普通",
};

export const PRODUCT_STATUS_ORM = {
  releaseNormal: "正常",
  releaseFail: "发布失败",
  releaseSuccess: "发布成功",
};

export const PRODUCT_INFO = {
  productId: "",
  productName: "",
  productNum: "",
  productType: "",
  productLevel: "",
  productPrice: "",
};

export const SELL_INFO = {
  cardName: "",
  cardNum: "",
  personNum: "",
  productId: "",
  productName: "",
  sellId: "",
  sellNum: "",
  sellTime: "",
};

export const BUY_INFO = {
  buyId: "",
  buyNum: "",
  buyTime: "",
  cardName: "",
  cardNum: "",
  productId: "",
  productName: "",
};

export const RECHARGE = {
  cardInfo: "",
  cardName: "",
  cardNum: "",
  rechargeId: "",
  rechargeTime: "",
  rechargeValue: "",
  totalValue: "",
};

export const WITH_DRAWAL_VALUE = {
  cardInfo: "",
  cardName: "",
  cardNum: "",
  withdrawalId: "",
  withdrawalTime: "",
  withdrawalValue: "",
};

export const PRODUCT_LISTS_TITLE = [
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
];

export const USER_TRADE_INFO = [
  {
    title: "用户姓名",
    key: "cardName",
  },
  {
    title: "用户银行卡信息",
    key: "cardInfo",
  },
  {
    title: "交易类型",
    key: "tradeType",
    render: (h, params) => {
      const row = params.row;
      const color = row.tradeType === "申购" ? "red" : "green";
      const text = row.tradeType === "申购" ? "申购" : "赎回";
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
    title: "交易金额",
    key: "tradeValue",
    render: (h, params) => {
      return h("Tag", params.row.tradeValue);
    },
  },
  {
    title: "交易时间",
    key: "tradeTime",
    sortable: true,
  },
];

export const CLEAR_INFO = [
  {
    title: "时间",
    key: "date",
    sortable: true,
  },
  {
    title: "状态",
    key: "figureNum",
    render: (h, params) => {
      const row = params.row;
      const color = row.figureNum === "false" ? "red" : "green";
      const text = row.figureNum === "false" ? "未清算" : "清算";
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
];
