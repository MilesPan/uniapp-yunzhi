<template>
	<view class="content">
		123
		<Tabbar :selected="selected" @switchTab="switchTab"></Tabbar>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import Tabbar from '../../components/tabbar.vue'
	const selected = ref(0);
	function switchTab(idx : number) {
		selected.value = idx
	}
</script>

<style>

</style>