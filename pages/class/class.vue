<template>
	<view class='container'>
		<scroll-view class='scroll' scroll-y="true" 
		 @scrolltolower = "scrolltolower">
			<view class='wrap' 
			 v-for='(item,index) in moviesList'
			 :key='index'>
				  <view class='left'>
					  <image mode='aspectFill' :src='item.images.small' />
				  </view>
				  <view class='right'>
					  <view>
						  {{item.title}}
						  <text class='scro'>
						     {{item.rating.average||'即将上映'}}
						  </text>
					  </view>
					  <view> {{item.year}}</view>
					  <view>{{item.genres.join('/')}}</view>
				  </view>
			</view>
			<view  v-if='isShow' 
			  style='text-align: center;font-zize: 20upx; color: #808080' >                 ---没有更多数据---
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {comingSoon,newMovies,top250} from '../../apis'
	export default {
		data() {
			return {
			testList: ['即将上映的电影','豆瓣电影新片榜','豆瓣电影Top250'],
			start: 0 ,
			typeNum: -1,
			moviesList: [],
			isShow: false,
			};
		},
		onLoad(option){
			// console.log(option.title);
			// console.log(this.testList.indexOf(option.title));
			this.typeNum = this.testList.indexOf(option.title)
			uni.showLoading({
				title: '加载中',
				mask: true,
			})
			this.getClassDate(this.typeNum)({
					city:this.$store.state.city,
					count:10,
					start:0,
				}).then((res)=>{
					let [err, data] = res;
				   this.moviesList =  data.data.subjects;
				   // console.log(this.moviesList)
					uni.hideLoading();
				});
				
		},
		methods:{
			scrolltolower(){
				uni.showLoading({
					title: '加载中',
					mask: true,
				})
				
				this.start += 10;
				this.getClassDate(this.typeNum)({
						city:this.$store.state.city,
						count:10,
						start:this.start ,
					}).then((res)=>{
					
					let [err, data] = res;
					
					let subjects = data.data.subjects;
				 //   // this.moviesList =  data.data.subjects;
				 //   // console.log(this.moviesList)
				  if(subjects.length === 0 ){
					  this.isShow = true;
				  }
				
				   Array.prototype.push.apply(this.moviesList,subjects);
				 // console.log(this.moviesList)
				   uni.hideLoading();
				});
			},
			getClassDate(state){
               let  fnList = [comingSoon,newMovies,top250];
			   return fnList[state]
			},
			
			
		}
	}
</script>

<style lang="scss">
   .container{
	   width: 100%;
	   height: 100%;
       padding: 0 20upx;
	   box-sizing: border-box;
	   background-color: #ddd;
	   .scroll{
	     height: 1000upx;
		 flex: 1;
		  .wrap{
			  width: 100%;
			  margin-top: 30upx;
			  padding-bottom: 20upx;
			  display: flex;
			  border-bottom: 1upx solid #333333;
			  .left{
				  margin-right: 20upx;
				  image{
					  width: 150upx;
					  height: 200upx;
					 }
			  }
			  
			  .right{
				  flex: 1;
					
				  .scro{
					  float: right;
					  width: 160upx;
					  height: 50upx;
					  background-color: #DD524D;
					  border-radius: 20upx;
					  text-align: center;
					  line-height: 50upx;
					    font-size: 24upx;
				  }
			  }
		  }
	  
	 } 
   }
</style>
