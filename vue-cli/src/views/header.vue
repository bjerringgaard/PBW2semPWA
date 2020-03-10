<template>
	<header>
		<h3 v-on:click="changeStuff">{{ title }}</h3>
	</header>
</template>

<script>
	import { bus } from '../main.js'

	export default {
		data() {
			return {
				title: "awesome header"
			}
		},
		methods: {
			changeStuff() {
				bus.$emit('stuffChange', 'I changed stuff with event bus')
			}
		}
	}
</script>

<style lang="scss" scoped>
header{
	background-color: darkgrey;
	padding: 10px;
	height: 50px;
	text-align: center;
}
	

</style>