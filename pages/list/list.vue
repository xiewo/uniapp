<template>
	<view class='container'>
		<view class='banerList'>
			<swiper class='swiper' :indicator-dots="true" :autoplay="true" :interval="1500">
				<swiper-item v-for=' (item,index) in nowPlayingList.subjects' :key='index'>
					<image class='slider1' 
					mode='widthFix' :src='item.images.small' 
					@click='toDtails(item.id)' />
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 正在上映的电影 -->
		<view class='list' v-for='(item,index) in moviesList' :key='index'>
			<view class='title'>{{item.title}}</view>
			<scroll-view scroll-x="true" style='white-space: nowrap;'>
				<view class='slider' v-for=' (t,idx) in item.subjects' :key='idx'>
					<image mode='aspectFill' :src='t.images.small'
					 @click='toDtails(t.id)' />
					<view class='name'>{{t.title}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {comingSoon,newMovies,top250} from '../../apis'
	export default {
		data() {
			return {
				moviesList: []
			}
		},
		onReady() {
			this.$store.dispatch('getCity');
			this.pageInit();
			
		},
		computed: {
			nowPlayingList() {
				return this.$store.state.nowPlayingList;
			}
		},
		methods: {
			pageInit() {
				uni.showLoading({
					title: '加载中'
				})
                Promise.all([
					this._comingSoon(),
					this._newMovies(),
					this._top250()
				]).then((res)=>{
					uni.hideLoading()
					// console.log(res)
					let rel = []
					res.map((item)=>{
					 rel.push(item[1].data);
					})
					console.log(rel)
					this.moviesList = rel;
					
				})
			},
			_comingSoon(){
				return  comingSoon({
						city: this.$store.state.city,
						start: "0",
						count: '8'
					})
			},
            _newMovies(){
				return newMovies({
					city: this.$store.state.city,
					start: "0",
					count: '8'
				})
			},
			_top250(){
				return top250({
					city: this.$store.state.city,
					start: "0",
					count: '8'
				})
			},
			toDtails(id){
				console.log(id)
				uni.navigateTo({
					url: '../details/details?id=' + id,
				})
			}
		},
	}
</script>

<style lang='scss'>
	.container {
		padding: 0 5upx;
		width: 100%;

		.banerList {
			width: 100%;
			height: 320upx;

			.slider1 {
				width: 100%;
				height: 320upx;
			}
		}



		.list {

			width: 100%;
			margin: 20upx 0;

			.title {
				margin-bottom: 10upx;
			}

			.slider {
				width: 200upx;
				height: 100%;
				display: inline-block;
				padding: 5upx;

				image {
					width: 100%;
					height: 250upx;
				}

				.name {
					width: 100%;
					overflow: hidden;
					text-align: center;
					font-size: 24upx;
				}
			}
		}
	}
</style>
