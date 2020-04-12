<template>
	<view>
		
		
	<view class='container' v-if='Object.keys(details).length !==0'>
	
		<image class='backImage' :src='details.images.small'  />
		<view class='shade'>
			
			<image :src='details.images.small' />
			<view class='nar'>
				<view class='title'>
					{{details.title}}
				</view>
				<view v-if='details.rating.average !==0'>
					<text>评分:{{details.rating.average}}</text>
				</view>
				<view class='des'>
					<text>摘要</text>
				</view>
				<view class='cont'>
					<text>{{details.summary}}</text>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import {details} from '../../apis'
	export default {
		data() {
			return {
				details: {}
			};
		},
		onLoad(option) {
			
			details(option.id).then((res)=>{
				 console.log(res)
				let [err, data] = res;
				this.details = data.data;
				console.log(this.details)
			})
		}
		
	}
</script>

<style lang="scss">
  .container{
	  width: 100%;
	 
	  background-color: #CCCCCC;
	 .backImage{
		 width: 100%;
		 height: 500upx;
	 }
	 
	 .shade{
		 
		 image{
			 width: 200upx;
			 height: 200upx;

			 text-align: center;
		 }
		 .nar{
			 
			 .title{
				 text-align: center;
				 font-weight: bold;
				 font-size: 30upx;
			 }
		 }
	 }
  }
</style>
