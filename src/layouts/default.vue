<template>
  <div class="layout">
    <div class="layout-ceiling">
      <div class="layout-ceiling-main">
        <img class="logo" :src="imgUrl" alt="" />
      </div>
    </div>
    <h-row name="flex">
      <h-col span="4" class="layout-menu-left">
        <h-menu
          active-name="1-2"
          theme="light"
          width="auto"
          :open-names="['1']"
        >
          <div class="layout-logo-left"></div>
          <router-link to="/">
            <h-menu-item name="home"> 首页 </h-menu-item>
          </router-link>
          <!-- 开户 -->
          <h-submenu name="openAccount">
            <template v-slot:title>
              <h-icon name="android-person-add"></h-icon>
              开户
            </template>
            <router-link to="/openAccount">
              <h-menu-item name="openAccount"> 用户开户 </h-menu-item>
            </router-link>
          </h-submenu>
          <!-- 产品 -->
          <h-submenu name="product">
            <template v-slot:title>
              <h-icon name="publishgoods_fill"></h-icon>
              产品
            </template>
            <router-link to="/product"
              ><h-menu-item name="product">产品管理</h-menu-item></router-link
            >
          </h-submenu>
          <!-- 查询 -->
          <h-submenu name="search">
            <template v-slot:title>
              <h-icon name="t-b-lookup"></h-icon>
              查询
            </template>

            <router-link to="/search/searchUserInfo"
              ><h-menu-item name="searchUserInfo"
                >用户信息查询</h-menu-item
              ></router-link
            >

            <router-link to="/search/searchProductInfo"
              ><h-menu-item name="searchProductInfo"
                >产品信息查询</h-menu-item
              ></router-link
            >

            <router-link to="/search/searchTradingInfo"
              ><h-menu-item name="searchTradingInfo"
                >流水查询</h-menu-item
              ></router-link
            >
          </h-submenu>
          <!-- 交易 -->
          <h-submenu name="trade">
            <template v-slot:title>
              <h-icon name="financial_fill"></h-icon>
              交易
            </template>
            <router-link to="/trade/buy">
              <h-menu-item name="buy"> 申购 </h-menu-item>
            </router-link>
            <router-link to="/trade/sell">
              <h-menu-item name="sell"> 赎回 </h-menu-item>
            </router-link>
            <router-link to="/trade/pay">
              <h-menu-item name="pay"> 充值/提现 </h-menu-item>
            </router-link>
          </h-submenu>
          <!-- 清算 -->
          <h-submenu name="clear">
            <template v-slot:title>
              <h-icon name="refresh1"></h-icon>
              清算
            </template>
            <router-link to="/clear">
              <h-menu-item name="clear"> 清算 </h-menu-item>
            </router-link>
          </h-submenu>
        </h-menu>
      </h-col>
      <h-col span="20">
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view />
          </div>
        </div>
        <div class="layout-footer layout-copy">制作-重邮练习生</div>
      </h-col>
    </h-row>
  </div>
</template>

<script>
import logo from "../assets/team4_logo.png";
export default {
  data() {
    return {
      imgUrl: logo,
    };
  },
};
</script>

<style lang="less">
.layout-ceiling-main {
  height: 8vh;
  padding: 5px 0;
  background-color: #001529;
  .logo {
    width: 50px;
    height: 50px;
    margin-left: 30px;
  }
}
.h-menu-vertical {
  height: 92vh;
}

.h-menu-item-active {
  > a {
    color: #fff;
  }
}

.layout-menu-left {
  overflow-y: auto;
}

.layout-content {
  height: calc(92vh - 30px);
  background-color: #f0f2f5;
}

.layout-content-main {
  padding: 24px;
}

.layout-footer {
  height: 30px;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
