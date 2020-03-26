<template>
	<div>
		<v-navigation-drawer v-model="drawer" app>
		<ul>
			<router-link tag="li" to="/"><v-icon>mdi-home</v-icon>Home</router-link>
			<router-link tag="li" to="/about"><v-icon>mdi-alert-circle</v-icon>About</router-link>
		</ul>
		</v-navigation-drawer>

		<v-app-bar app>
		<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title class="headline">
				<span>BAGELS BY</span>
				<span class="font-weight-light">Jerry McBagel</span>
			</v-toolbar-title> 
		</v-app-bar>
	</div>
</template>

<script>
	export default {
		data : () => ({
			drawer: null,
		}),
	}
</script>

<style lang="scss" scoped>

</style>