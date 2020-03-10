<template>
	<footer>
		<p>{{ footerText }}</p>
		<button type="button" v-on:click="component = 'signupone'">signupOne</button>
		<button type="button" v-on:click="component = 'signuptwo'">signupTwo</button>
		<keep-alive>
			<component v-bind:is="component"></component>
		</keep-alive>
	</footer>
</template>

<script>
	import { bus } from '../main.js'
	import signupOne from '../components/signupOne.vue'
	import signupTwo from '../components/signupTwo.vue'

	export default {
		components: {
			'signupone': signupOne,
			'signuptwo': signupTwo,
		},

		data() {
			return {
				component: 'signupone',
				footerText: 'Copyright anno 2020'
			}
		},

		created() {
			bus.$on('stuffChange', (data) => {
				this.footerText = data;
			})
		}
	}
</script>

<style lang="scss" scoped>
	footer {
		background-color: lightcyan;
		padding: 10px; 
		text-align: center;
	}
</style>