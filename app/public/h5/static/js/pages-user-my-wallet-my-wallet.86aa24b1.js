(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-my-wallet-my-wallet"],{"0663":function(t,n,a){"use strict";a.r(n);var i=a("1d76"),e=a("4c0f");for(var u in e)"default"!==u&&function(t){a.d(n,t,(function(){return e[t]}))}(u);var o,c=a("f0c5"),s=Object(c["a"])(e["default"],i["b"],i["c"],!1,null,"36ad0aa5",null,!1,i["a"],o);n["default"]=s.exports},"0f3e":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,user_info:{}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;t._get("user.wallet/index",{},(function(n){t.user_info=n.data.userInfo,t.loadding=!1,uni.hideLoading()}))},gotoPage:function(t){uni.navigateTo({url:t})}}};n.default=i},"1d76":function(t,n,a){"use strict";var i;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return i}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.loadding?t._e():a("v-uni-view",{staticClass:"my-wallet p30 bg-white tc"},[a("v-uni-view",{staticClass:"d-c-c p-30-0"},[a("span",{staticClass:"icon iconfont icon-qianbao",staticStyle:{"font-size":"200rpx",color:"#d2b975"}})]),a("v-uni-view",{},[a("v-uni-text",{staticClass:"f24"},[t._v("￥")]),a("v-uni-text",{staticClass:"f40 fb"},[t._v(t._s(t.user_info.balance))])],1),a("v-uni-view",{staticClass:"pt10 f24 gray9"},[t._v("账户余额（元）")]),a("v-uni-view",{staticClass:"p-30-0 d-a-c f28",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoPage("/pages/user/my-wallet/bill/bill")}}},[t._v("账单详情")])],1)],1)},u=[]},"4c0f":function(t,n,a){"use strict";a.r(n);var i=a("0f3e"),e=a.n(i);for(var u in i)"default"!==u&&function(t){a.d(n,t,(function(){return i[t]}))}(u);n["default"]=e.a}}]);