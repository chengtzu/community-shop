<template>
	<view v-if="!loadding">
		<view class="address-list bg-white">
					<form @submit="editCommunity">
						<view class="d-s-c p30">
						    <text>收货人</text>
						    <input class="ml20" name="name" type="text" v-model="name" placeholder-class="grary"
						           placeholder="姓名"></input>
						</view>
						<view class="d-s-c p30">
						    <text>联系方式</text>
						    <input class="ml20" name="phone" type="text" v-model="phone" placeholder-class="grary"
						           placeholder="手机号码"></input>
						</view>
						<view class="d-s-c p30">
						        <text>所在地区</text>
						        <view class="input-box">
						           <!-- <input class="ml20" type="text" value="" placeholder-class="grary" placeholder=""
						                   v-model="selectCommunity" disabled="true"
						                   @click="showMulLinkageThreePicker"></input> -->
									<picker @change="bindPickerCommunityChange" :range="CommunityList">	
										<label class="ml20">{{CommunityList[index]}}</label>		
									</picker>
						        </view>
						</view>
						<view class="d-s-c p30">
						        <text>详细地址</text>
						        <textarea class="ml20 flex-1" name="detail" :auto-height="true" v-model="detail"
						                  placeholder="楼号/单元/房号"></textarea>
						</view>
					</form>
		</view>

		<view class="p30">
			<button type="primary" form-type="submit" class="btn-red f30 mt30">确认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/*是否加载完成*/
				loadding:true,
				name:'',
				phone:'',
				detail:'',
				selectCommunity:'选择小区',
				options: {},
				CommunityList:['金域华城'],
				index:0
			}
		},
		onLoad:function(options){
			this.options = options;
		},
		onShow:function(){
			uni.showLoading({
			    title: '加载中',
				mask:true
			});
			/*获取地址列表*/
			this.getData();
		},
		methods: {
			/*获取数据*/
			getData() {
				let self = this;
				let dataType = self.dataType;
				self._get('user.address/lists', {}, function(res) {
					
					self.loadding=false;
					uni.hideLoading();
				});
			},

			/*跳转页面*/
			gotoPage(path) {
				uni.navigateTo({
					url: path
				});
			},
			bindPickerCommunityChange(e){
				this.index = e.detail.value;
				this.selectCommunity = this.CommunityList[this.index];
			},
			/*编辑地址*/
			editCommunity(e) {
				
			}
		}
	}
</script>

<style>
	.address-list {
		padding-bottom: 90rpx;
	}

	.foot-btns {
		padding: 0;
	}

	.foot-btns .btn-red {
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 0;
	}
</style>
