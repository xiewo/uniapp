<template>
	<view class="container">
		
		<uni-nav-bar  :statusBar="true" 
		 rightText="右边" @clickLeft='back' 
		 leftIcon="arrowleft"  color="red">
		   <template v-slot:left>
			   <view style='color: #007AFF;'>首页</view>
		   </template>
		 </uni-nav-bar>
		 <br />
		 <slot-tset>
			 我是插槽
			 
			 <view>
				 我是index传过去的
			   <uni-calendar  :insert="true" :lunar="true" 
				:range='true' @change="change"
				 :selected='selected'
				/>
			 </view>
			 <template v-slot:haed>
				 <view>
					 
				  <text >我是传过来的头部</text>
				  <uni-icons type='back' color='red' size=40></uni-icons>
				 </view>
			 </template>
		 </slot-tset>
		 
	</view>
</template>

<script>
	import slotTset	from '@/components/custom/slot/slot.vue'
	export default {
		data() {
			return {
				selected:[{date: '2020-04-01', info: '签到', data: { custom: 'hah', name: 'Nine'}}]
			}
		},
		methods: {
			
            back(){
			 console.log(1111)
			},
			change(){
				console.log(111)	
			}
		},
		components:{
			slotTset
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
