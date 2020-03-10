<template>
	<div>
		<h3>Signup Two</h3>
		<input v-model="message" placeholder="editMe">
		<p>Message is: {{ message }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: ''
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>