(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-confirm-order-confirm-order"],{"0b97":function(t,e,s){"use strict";s.r(e);var i=s("136c"),a=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"136c":function(t,e,s){"use strict";var i=s("4ea4");s("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(s("f130")),r=i(s("493d")),n=s("7ba8"),o={components:{Myinfo:a.default,imageComponent:r.default},data:function(){return{loading:!0,options:{},indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,tab_type:0,product_id:"",product_num:"",ProductData:[],OrderData:[],exist_address:!1,Address:{region:[]},extract_shop:[],product_sku_id:0,delivery:10,remark:"",pay_type:20,deliverySetting:[]}},onLoad:function(t){var e=this;e.options=t},onShow:function(){this.getData()},methods:{hasType:function(t){return-1!=this.deliverySetting.indexOf(t)},getData:function(){var t=this;uni.showLoading({title:"加载中",mask:!0});var e=function(e){t.exist_address=e.data.exist_address,t.Address=e.data.address,t.ProductData=e.data.product_list,t.OrderData=e.data,t.deliverySetting=e.data.deliverySetting,0==t.OrderData.order_pay_price&&(t.pay_type=10),t.loading=!1},s={delivery:t.delivery};"buy"===t.options.order_type?t._get("order.order/buy",Object.assign({},s,{product_id:t.options.product_id,product_num:t.options.product_num,product_sku_id:t.options.product_sku_id}),(function(t){e(t)})):"cart"===t.options.order_type&&t._get("order.order/cart",Object.assign({},s,{cart_ids:t.options.cart_ids||0}),(function(t){e(t)}))},tabFunc:function(t){this.tab_type=t,this.delivery=0==t?10:20,this.getData()},SubmitOrder:function(){var t=this,e="wx";uni.showLoading({title:"加载中",mask:!0});var s={delivery:t.delivery,remark:t.remark,pay_type:t.pay_type,pay_source:e},i="";"buy"===t.options.order_type&&(i="order.order/buy",s=Object.assign({},s,{product_id:t.options.product_id,product_num:t.options.product_num,product_sku_id:t.options.product_sku_id})),"cart"===t.options.order_type&&(i="order.order/cart",s=Object.assign({},s,{cart_ids:t.options.cart_ids||0})),t._post(i,s,(function(e){(0,n.pay)(e,t)}))}}};e.default=o},4469:function(t,e,s){var i=s("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wrap[data-v-af1c8d00]{padding-bottom:%?90?%}',""]),t.exports=e},"44b4":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},props:["Address","exist_address"],onLoad:function(){},mounted:function(){},methods:{addAddress:function(){var t="/pages/user/address/address?source=order";this.exist_address||(t="/pages/user/address/add/add"),uni.navigateTo({url:t})}}};e.default=i},"4a7e":function(t,e,s){"use strict";s.r(e);var i=s("a10e"),a=s("0b97");for(var r in a)"default"!==r&&function(t){s.d(e,t,(function(){return a[t]}))}(r);s("d510");var n,o=s("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"af1c8d00",null,!1,i["a"],n);e["default"]=c.exports},"5f25":function(t,e,s){"use strict";var i;s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[null==t.Address?s("v-uni-view",{staticClass:"add-address d-s-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addAddress()}}},[s("v-uni-view",{staticClass:"icon-box mr10"},[s("span",{staticClass:"icon iconfont icon-dizhi1"})]),s("v-uni-text",[t._v("请添加收货地址")])],1):s("v-uni-view",{staticClass:"address-defalut-wrap"},[s("v-uni-view",{staticClass:"info"},[s("v-uni-text",{staticClass:"state"},[t._v("默认")]),s("v-uni-text",{staticClass:"type"},[t._v("家")]),s("v-uni-text",{staticClass:"province-c-a"},[t._v(t._s(t.Address.region.province)+" "+t._s(t.Address.region.city)+" "+t._s(t.Address.region.region))])],1),s("v-uni-view",{staticClass:"address"},[s("v-uni-text",{staticClass:"fb gray3"},[t._v(t._s(t.Address.detail))]),s("v-uni-view",{staticClass:"icon-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addAddress()}}},[s("span",{staticClass:"icon iconfont icon-jiantou"})])],1),s("v-uni-view",{staticClass:"user"},[s("v-uni-text",{staticClass:"name"},[t._v(t._s(t.Address.name))]),s("v-uni-text",{staticClass:"tel"},[t._v(t._s(t.Address.phone))])],1)],1),s("v-uni-view",{staticClass:"addree-bottom"},t._l(10,(function(t,e){return s("v-uni-view",{key:e,staticClass:"stripe"},[s("v-uni-text",{class:e%2==0?"red":"blue"}),s("v-uni-text",{staticClass:"white"})],1)})),1)],1)},r=[]},"7ba8":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.pay=void 0;var s=function(t,e,s,a){if(-10===t.code)return e.showError(t.msg),!1;20==t.data.pay_type&&WeixinJSBridge.invoke("getBrandWCPayRequest",JSON.parse(t.data.payment),(function(s){"get_brand_wcpay_request:ok"==s.err_msg?i(t,e):"get_brand_wcpay_request:cancel"==s.err_msg?e.showSuccess("支付取消",(function(){r(t,a)})):e.showError("订单未支付成功",(function(){r(t,a)}))})),10==t.data.pay_type&&i(t,e,s),99==t.data.pay_type&&i(t,e,s)};function i(t,e,s){s?s(t):a(t)}function a(t){uni.redirectTo({url:"/pages/order/pay-success/pay-success?order_id="+t.data.order_id})}function r(t,e){e?e(t):uni.navigateTo({url:"/pages/order/order-detail/order-detail?order_id="+t.data.order_id})}e.pay=s}).call(this,s("0de9")["log"])},a10e:function(t,e,s){"use strict";var i;s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading?t._e():s("v-uni-view",{staticClass:"wrap"},[0==t.tab_type?s("Myinfo",{attrs:{Address:t.Address,exist_address:t.exist_address}}):t._e(),s("v-uni-view",{staticClass:"vender"},[s("v-uni-view",{staticClass:"group-hd"},[s("v-uni-view",{staticClass:"left"},[s("v-uni-text",{staticClass:"min-name"},[t._v("商品")])],1)],1),s("v-uni-view",{staticClass:"list"},t._l(t.ProductData,(function(e,i){return s("v-uni-view",{key:i,staticClass:"item"},[s("v-uni-view",{staticClass:"cover"},[s("v-uni-image",{attrs:{src:e.product_image,mode:"aspectFit"}})],1),s("v-uni-view",{staticClass:"info"},[s("v-uni-view",{staticClass:"title"},[t._v(t._s(e.product_name))]),s("v-uni-view",{staticClass:"describe"},[t._v(t._s(e.product_sku.product_attr))]),s("v-uni-view",{staticClass:"level-box count_choose"},[s("v-uni-view",{staticClass:"price"},[t._v("¥"),s("v-uni-text",{staticClass:"num"},[t._v(t._s(e.product_price))])],1),s("v-uni-view",{staticClass:"num-wrap"},[s("v-uni-view",{staticClass:"f22"},[t._v("×"+t._s(e.total_num))])],1)],1)],1)],1)})),1),s("v-uni-view",{staticClass:"total-box"},[s("v-uni-text",[t._v("共"+t._s(t.OrderData.order_total_num)+"件商品，")]),s("v-uni-view",{},[t._v("合计："),s("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(t.OrderData.order_total_price))])],1)],1)],1),s("v-uni-view",{staticClass:"buy-checkout"},[s("v-uni-view",{staticClass:"item"},[s("v-uni-text",{staticClass:"key"},[t._v("订单总金额：")]),s("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(t.OrderData.order_total_price))])],1),s("v-uni-view",{staticClass:"item"},[s("v-uni-text",{staticClass:"key"},[t._v("配送费用：")]),s("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(t.OrderData.express_price))])],1)],1),s("v-uni-view",{staticClass:"buy-checkout"},[s("v-uni-view",{staticClass:"item active"},[s("v-uni-view",{staticClass:"d-s-c"},[s("v-uni-view",{staticClass:"icon-box d-c-c mr10"},[s("span",{staticClass:"icon iconfont icon-weixin"})]),s("v-uni-text",{staticClass:"key"},[t._v("微信支付：")])],1),s("v-uni-view",{staticClass:"icon-box d-c-c"},[s("span",{staticClass:"icon iconfont icon-xuanze"})])],1)],1),s("v-uni-view",{staticClass:"buyer-message uni-textarea"},[s("v-uni-textarea",{staticClass:"textarea",attrs:{remark:t.remark,"placeholder-style":"color:#cccccc;",placeholder:"选项:买家留言"}})],1),s("v-uni-view",{staticClass:"foot-pay-btns"},[t.OrderData.force_points?t._e():s("v-uni-view",{staticClass:"price"},[t._v("¥"),s("v-uni-text",{staticClass:"num"},[t._v(t._s(t.OrderData.order_pay_price))])],1),s("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.SubmitOrder.apply(void 0,arguments)}}},[t._v("提交订单")])],1)],1)},r=[]},d2fd:function(t,e,s){"use strict";s.r(e);var i=s("44b4"),a=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},d510:function(t,e,s){"use strict";var i=s("f18f"),a=s.n(i);a.a},f130:function(t,e,s){"use strict";s.r(e);var i=s("5f25"),a=s("d2fd");for(var r in a)"default"!==r&&function(t){s.d(e,t,(function(){return a[t]}))}(r);var n,o=s("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"b15d623a",null,!1,i["a"],n);e["default"]=c.exports},f18f:function(t,e,s){var i=s("4469");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=s("4f06").default;a("31369032",i,!0,{sourceMap:!1,shadowMode:!1})}}]);