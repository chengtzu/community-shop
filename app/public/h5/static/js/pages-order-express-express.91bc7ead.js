(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-express-express"],{"3df6":function(e,t,i){"use strict";i.r(t);var s=i("44fb"),a=i.n(s);for(var r in s)"default"!==r&&function(e){i.d(t,e,(function(){return s[e]}))}(r);t["default"]=a.a},"44fb":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,order_id:0,express:{list:{}}}},onLoad:function(e){uni.showLoading({title:"加载中",mask:!0}),this.order_id=e.order_id},mounted:function(){this.getData()},methods:{getData:function(){var e=this,t=e.order_id;e._get("user.order/express",{order_id:t},(function(t){e.express=t.data.express,e.loadding=!1,uni.hideLoading()}))}}};t.default=s},"6ab3":function(e,t,i){"use strict";i.r(t);var s=i("a2d5"),a=i("3df6");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("fbcd");var n,o=i("f0c5"),d=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"77ffd77c",null,!1,s["a"],n);t["default"]=d.exports},"81ee":function(e,t,i){var s=i("24fb");t=s(!1),t.push([e.i,'.express-info .base-info[data-v-77ffd77c]{background:#fff;border-bottom:1px solid #eee}.express-info .list[data-v-77ffd77c]{padding:%?30?% %?30?% %?30?% %?50?%;margin-top:%?20?%;border-top:1px solid #eee;background:#fff}.express-info .list .item[data-v-77ffd77c]{position:relative;padding:%?30?%;padding-left:%?40?%;padding-right:0;border-left:1px solid #ccc}.express-info .list .item[data-v-77ffd77c]::before{display:block;content:"";position:absolute;top:%?30?%;left:%?-18?%;width:%?20?%;height:%?20?%;border:%?8?% solid #fff;-webkit-border-radius:50%;border-radius:50%;background:#ccc}.express-info .list .item[data-v-77ffd77c]::after{display:block;content:"";position:absolute;top:%?30?%;left:%?-18?%;width:%?30?%;height:%?30?%;-webkit-border-radius:50%;border-radius:50%;border:%?4?% solid #ccc}.express-info .list .item.active[data-v-77ffd77c]::before{background:#f00808}.express-info .list .item.active[data-v-77ffd77c]::after{border:%?4?% solid #f00808}.express-info .list .item[data-v-77ffd77c]{color:#999}.express-info .list .item.active[data-v-77ffd77c]{color:#f00808}',""]),e.exports=t},a2d5:function(e,t,i){"use strict";var s;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return s}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loadding?e._e():i("v-uni-view",{staticClass:"express-info"},[i("v-uni-view",{staticClass:"base-info p30"},[i("v-uni-view",{staticClass:"name"},[i("v-uni-text",{staticClass:"gray9"},[e._v("物流公司：")]),i("v-uni-text",{staticClass:"fb"},[e._v(e._s(e.express.express_name))])],1),i("v-uni-view",{staticClass:"order-code pt20"},[i("v-uni-text",{staticClass:"gray9"},[e._v("物流单号：")]),i("v-uni-text",{staticClass:"fb red"},[e._v(e._s(e.express.express_no))])],1)],1),i("v-uni-view",{staticClass:"list"},e._l(e.express.list,(function(t,s){return i("v-uni-view",{key:s,class:0==s?"active item":"item"},[i("v-uni-view",{staticClass:"content"},[e._v(e._s(t.context)+"-"+e._s(t.status))]),i("v-uni-view",{staticClass:"datetime"},[e._v(e._s(t.time))])],1)})),1)],1)},r=[]},d9ab:function(e,t,i){var s=i("81ee");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=i("4f06").default;a("8fc44580",s,!0,{sourceMap:!1,shadowMode:!1})},fbcd:function(e,t,i){"use strict";var s=i("d9ab"),a=i.n(s);a.a}}]);