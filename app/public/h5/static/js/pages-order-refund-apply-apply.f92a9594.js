(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-refund-apply-apply","components-upload-upload"],{"129fe":function(t,e,i){"use strict";(function(t){i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{imageList:[]}},onLoad:function(){},mounted:function(){this.chooseImageFunc()},methods:{chooseImageFunc:function(){var t=this;uni.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.uploadFile(e.tempFilePaths)}})},uploadFile:function(e){var i=this,a=0,n=e.length,s={token:uni.getStorageSync("token"),app_id:i.getAppId()};e.forEach((function(e,u){uni.uploadFile({url:i.websiteUrl+"/index.php?s=/api/file.upload/image",filePath:e,name:"iFile",formData:s,success:function(t){var e="object"===typeof t.data?t.data:JSON.parse(t.data);1===e.code&&i.imageList.push(e.data)},complete:function(){a++,n===a&&(t("log","upload complete"," at components/upload/upload.vue:58"),i.$emit("getImgs",i.imageList))}})}))}}};e.default=a}).call(this,i("0de9")["log"])},"706e":function(t,e,i){"use strict";i.r(e);var a=i("8436"),n=i("a2e3");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var u,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"2334e4ba",null,!1,a["a"],u);e["default"]=c.exports},8436:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view")},s=[]},9285:function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("706e")),s=a(i("493d")),u={components:{Upload:n.default,imageComponent:s.default},data:function(){return{loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,type:10,isUpload:!1,order_product_id:0,product:{},images:[]}},onLoad:function(t){this.order_product_id=t.order_product_id},mounted:function(){uni.showLoading({title:"加载中",mask:!0}),this.getData()},methods:{getData:function(){var t=this,e=t.order_product_id;t._get("user.refund/apply",{order_product_id:e},(function(e){t.product=e.data.detail,t.loadding=!1,uni.hideLoading()}))},tabType:function(t){this.type=t},formSubmit:function(e){var i=this,a=e.detail.value;a.type=i.type,a.order_product_id=i.order_product_id,a.images=JSON.stringify(i.images),t("log",a," at pages/order/refund/apply/apply.vue:153"),i._post("user.refund/apply",a,(function(t){uni.showToast({title:t.msg,duration:3e3,complete:function(){uni.navigateTo({url:"/pages/order/refund/index/index"})}})}))},openUpload:function(){this.isUpload=!0},getImgsFunc:function(e){var i=this;t("log",i.images=i.images.concat(e)," at pages/order/refund/apply/apply.vue:176"),i.isUpload=!1}}};e.default=u}).call(this,i("0de9")["log"])},a2e3:function(t,e,i){"use strict";i.r(e);var a=i("129fe"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},bfa7:function(t,e,i){"use strict";i.r(e);var a=i("9285"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},d282:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loadding?t._e():i("v-uni-view",{staticClass:"refund-apply pb100"},[i("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)},reset:function(e){arguments[0]=e=t.$handleEvent(e),t.formReset.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"one-product d-s-c p30 bg-white "},[i("v-uni-view",{staticClass:"cover"},[i("v-uni-image",{attrs:{src:t.product.image.file_path,mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"flex-1"},[i("v-uni-view",{staticClass:"pro-info"},[t._v(t._s(t.product.product_name))]),i("v-uni-view",{staticClass:"pt10 p-0-30 f24 gray9"},[i("v-uni-text",{},[t._v("单价：¥"+t._s(t.product.line_price))]),i("v-uni-text",{staticClass:"ml20"},[t._v("数量："+t._s(t.product.total_num))])],1)],1)],1),i("v-uni-view",{staticClass:"group bg-white"},[i("v-uni-view",{staticClass:"group-hd border-b-e"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"min-name"},[t._v("服务类型")])],1)],1),i("v-uni-view",{staticClass:"d-s-c p-20-0"},[i("v-uni-button",{class:10==t.type?"btn-red-border":"",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabType(10)}}},[t._v("退货/退款")]),i("v-uni-button",{class:20==t.type?"ml20 btn-red-border":"ml20",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabType(20)}}},[t._v("换货")])],1)],1),i("v-uni-view",{staticClass:"group bg-white"},[i("v-uni-view",{staticClass:"group-hd"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"min-name"},[t._v("申请原因")])],1)],1),i("v-uni-view",{staticClass:"d-s-c"},[i("v-uni-textarea",{staticClass:"p10 box-s-b border",staticStyle:{height:"120rpx"},attrs:{value:"",name:"content",placeholder:"请详细填写申请原因，注意保持商品的完好，建议您先与卖家沟通"}})],1)],1),10==t.type?i("v-uni-view",{staticClass:"group bg-white"},[i("v-uni-view",{staticClass:"group-hd"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"min-name"},[t._v("退款金额：")]),i("v-uni-text",{staticClass:"red"},[t._v("¥"+t._s(t.product.total_price))])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"group bg-white"},[i("v-uni-view",{staticClass:"group-hd"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"min-name"},[t._v("上传凭证")]),i("v-uni-text",{staticClass:"gray9"},[t._v("(最多6张)")])],1)],1),i("v-uni-view",{staticClass:"upload-list d-s-c"},[t._l(t.images,(function(t,e){return i("v-uni-view",{key:e,staticClass:"item"},[i("v-uni-image",{attrs:{src:t.file_path,mode:"aspectFit"}})],1)})),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"upload-btn d-c-c d-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openUpload()}}},[i("v-uni-text",{staticClass:"icon iconfont icon-xiangji"}),i("v-uni-text",{staticClass:"gray9"},[t._v("上传图片")])],1)],1)],2)],1),i("v-uni-view",{staticClass:"foot-btns"},[i("v-uni-button",{staticClass:"btn-red",attrs:{"form-type":"submit"}},[t._v("确认提交")])],1)],1),t.isUpload?i("Upload",{on:{getImgs:function(e){arguments[0]=e=t.$handleEvent(e),t.getImgsFunc.apply(void 0,arguments)}}}):t._e()],1)},s=[]},d85d:function(t,e,i){"use strict";i.r(e);var a=i("d282"),n=i("bfa7");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var u,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"5dc608d8",null,!1,a["a"],u);e["default"]=c.exports}}]);