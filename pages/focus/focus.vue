<template>
	<view class='container' v-if='Object.keys(nowPlayingList).length!==0'>
		 <image :src='nowPlayingList.subjects[0].images.small' />
		 <button type='primary' @click='toPath'>立即体验</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onReady() {
			this.$store.dispatch('getCity');
		},
		methods: {
			toPath(){
				uni.navigateTo({
					url: '../list/list'
				})
			}
		},
		computed: {
			nowPlayingList(){
				// console.log(Object.keys(this.$store.state.nowPlayingList))
				return this.$store.state.nowPlayingList;
			}
		}
		
	}
</script>

<style lang="scss">
   .container{
	   width: 100%;
	   height: 100%;
	   position: relative;
	   text-align: center;
	   
	   image{
		 width: 100%;
		 height: 1200upx;
		 flex: 1;
	   }
	   button{
		   position: absolute;
		   bottom: 20upx;
		   left: 50%;
		   background-color: rgba(0,234,0,0.5);
		   transform: translateX(-50%);
	   }
   }
</style>
