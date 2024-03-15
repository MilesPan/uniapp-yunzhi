<template>
	<view class="container">
		<swiper class="swiper" :indicator-dots="false" indicator-color="#90AC5A" @change="handleChange"
			:current="currentIndex">
			<swiper-item v-for="(item, index) in imgs" :key="index">
				<image class="img" :src="item" mode="scaleToFill"></image>
				<button type="primary" class="nextButton" @click="handleNextClick">下一步</button>
			</swiper-item>
		</swiper>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	const currentIndex = ref(0)
	const imgs = ref([
		"../../static/first.webp",
		"../../static/second.webp",
		"../../static/thrid.webp",
	])
	const handleNextClick = () => {
		if (currentIndex.value < imgs.value.length - 1) {
			currentIndex.value += 1
			return;
		}
		uni.navigateTo({
			url: "/pages/index/index"
		})
	}
	const handleChange = ({ detail }) => {
		currentIndex.value = detail.current
	}
</script>

<style>
	.container {
		width: 100vw;
		height: 100vh;
	}

	.swiper {
		width: 100vw;
		height: 100vh;
	}

	.img {
		width: 100%;
		height: 100%;
	}

	.nextButton {
		background-color: #43CF7C;
		border-radius: 40rpx;
		font-size: 16px;
		width: 78vw;
		position: absolute;
		bottom: calc(20px);
		left: 50%;
		transform: translateX(-50%);
	}
</style>