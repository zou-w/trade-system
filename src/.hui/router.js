import { initRouter, initRouterLayout } from '@hsui/core'

export default initRouter(
  [
    {
      path: '/',
      component: initRouterLayout(layout => {
        return import('@/layouts/' + layout + '.vue')
      }),
      children: [
        {
          name: 'index',
          path: '',
          component: Index
        },
        {
          name: 'clear-index',
          path: 'clear',
          component: ClearIndex
        },
        {
          name: 'login-index',
          path: 'login',
          component: LoginIndex
        },
        {
          name: 'openAccount-index',
          path: 'openAccount',
          component: OpenAccountIndex
        },
        {
          name: 'product-index',
          path: 'product',
          component: ProductIndex
        },
        {
          name: 'openAccount-test-index',
          path: 'openAccount/test',
          component: OpenAccountTestIndex
        },
        {
          name: 'search-searchProductInfo-index',
          path: 'search/searchProductInfo',
          component: SearchSearchProductInfoIndex
        },
        {
          name: 'search-searchTradingInfo-index',
          path: 'search/searchTradingInfo',
          component: SearchSearchTradingInfoIndex
        },
        {
          name: 'search-searchUserInfo-index',
          path: 'search/searchUserInfo',
          component: SearchSearchUserInfoIndex
        },
        {
          name: 'trade-buy-index',
          path: 'trade/buy',
          component: TradeBuyIndex
        },
        {
          name: 'trade-pay-index',
          path: 'trade/pay',
          component: TradePayIndex
        },
        {
          name: 'trade-repeal-index',
          path: 'trade/repeal',
          component: TradeRepealIndex
        },
        {
          name: 'trade-sell-index',
          path: 'trade/sell',
          component: TradeSellIndex
        },
        {
          name: 'product-id',
          path: 'product/:id?',
          component: ProductId
        },
        {
          name: '__404__',
          path: '*',
          component: __404__
        }
      ]
    }
  ],
  { base: '/', mode: 'hash' }
)

function Index() {
  return import(/* webpackChunkName: "index" */ '@/views/index.vue')
}
function ClearIndex() {
  return import(/* webpackChunkName: "clear-index" */ '@/views/clear/index.vue')
}
function LoginIndex() {
  return import(/* webpackChunkName: "login-index" */ '@/views/login/index.vue')
}
function OpenAccountIndex() {
  return import(
    /* webpackChunkName: "openAccount-index" */ '@/views/openAccount/index.vue'
  )
}
function ProductIndex() {
  return import(
    /* webpackChunkName: "product-index" */ '@/views/product/index.vue'
  )
}
function OpenAccountTestIndex() {
  return import(
    /* webpackChunkName: "openAccount-test-index" */ '@/views/openAccount/test/index.vue'
  )
}
function SearchSearchProductInfoIndex() {
  return import(
    /* webpackChunkName: "search-searchProductInfo-index" */ '@/views/search/searchProductInfo/index.vue'
  )
}
function SearchSearchTradingInfoIndex() {
  return import(
    /* webpackChunkName: "search-searchTradingInfo-index" */ '@/views/search/searchTradingInfo/index.vue'
  )
}
function SearchSearchUserInfoIndex() {
  return import(
    /* webpackChunkName: "search-searchUserInfo-index" */ '@/views/search/searchUserInfo/index.vue'
  )
}
function TradeBuyIndex() {
  return import(
    /* webpackChunkName: "trade-buy-index" */ '@/views/trade/buy/index.vue'
  )
}
function TradePayIndex() {
  return import(
    /* webpackChunkName: "trade-pay-index" */ '@/views/trade/pay/index.vue'
  )
}
function TradeRepealIndex() {
  return import(
    /* webpackChunkName: "trade-repeal-index" */ '@/views/trade/repeal/index.vue'
  )
}
function TradeSellIndex() {
  return import(
    /* webpackChunkName: "trade-sell-index" */ '@/views/trade/sell/index.vue'
  )
}
function ProductId() {
  return import(/* webpackChunkName: "product-id" */ '@/views/product/_id.vue')
}
function __404__() {
  return import(/* webpackChunkName: "__404__" */ '@/views/__404__.vue')
}
