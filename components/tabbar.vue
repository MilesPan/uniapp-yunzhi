<template>
	<view class="tab-bar">
		<view v-for="(item,index) in list" :key="index" class="tab-bar-item" @click="switchTab(item, index)">
			<template v-if="index === 2">
				<image class="tab_center_img" :src="selected === index ? item.selectedIconPath : item.iconPath"
					:style="{width: item.width, height: item.height}"></image>
			</template>
			<template v-else>
				<image class="tab_img" :src=" selected === index ? item.selectedIconPath : item.iconPath"
					:style="{width: selected === index ?item.activeWidth: item.width, height: selected === index ?item.activeHeight: item.height}">
				</image>
			</template>
		</view>
	</view>
</template>
<script lang="ts" setup>
	import { reactive } from 'vue';
	const props = defineProps<{ selected : number }>()
	const emits = defineEmits(['switchTab'])
	const list = reactive([
		{
			"pagePath": "pages/index/index",
			"text": "头像",
			"iconPath": "../../static/Star.webp",
			"selectedIconPath": "../../static/starActive.webp",
			"width": '46rpx',
			"height": '46rpx',
			"activeWidth": "76rpx",
			"activeHeight": "76rpx"
		},
		{
			"pagePath": "pages/bizhi/index",
			"text": "壁纸",
			"iconPath": "../../static/Vector.webp",
			"selectedIconPath": "../../static/VectorActive.webp",
			"width": '46rpx',
			"height": '46rpx',
			"activeWidth": "76rpx",
			"activeHeight": "76rpx"
		},
		{
			"pagePath": "pages/bizhi/index",
			"text": "证件照",
			"iconPath": "../../static/center.webp",
			"width": '95rpx',
			"height": '90rpx'
		},
		{
			"pagePath": "pages/bizhi/index",
			"text": "证件照",
			"iconPath": "../../static/chat.webp",
			"selectedIconPath": "../../static/chatActive.webp",
			"width": '46rpx',
			"height": '46rpx',
			"activeWidth": "76rpx",
			"activeHeight": "76rpx"
		},
		{
			"pagePath": "pages/bizhi/index",
			"text": "头像易",
			"iconPath": "../../static/user.webp",
			"selectedIconPath": "../../static/userActive.webp",
			"width": '35rpx',
			"height": '45rpx',
			"activeWidth": "76rpx",
			"activeHeight": "76rpx"
		}])
	function switchTab(item, index) {
		let url = item.pagePath;
		console.log(index)
		emits('switchTab', index)
		uni.switchTab({
			url
		})
	}
</script>

<style lang="scss">
	.tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: env(safe-area-inset-bottom); // 适配iphoneX的底部

		.tab-bar-item {
			flex: 1;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.tab_center_img {
				position: absolute;
				top: -30rpx;
			}



		}
	}
</style>