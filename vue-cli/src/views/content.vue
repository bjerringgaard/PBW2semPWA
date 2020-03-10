<template>
	<div>
		<ul>
			<li v-for="(beverage, index) in beverages" :key="index">
				{{ beverage.brands }}
			</li>
		</ul>
		<cakes v-bind:cakes="cakes" v-on:update="addBeverage"/>
	</div>
</template>

<script>
	import cakes from './../components/cakes.vue'

	export default {
		components: {
			'cakes': cakes
		},

		data() {
			return {
				beverages: [],
				cakes: [
					{ name: 'cocolatecake', tastyness: 'super delissh', show: false },
					{ name: 'bananacake', tastyness: 'super hot', show: false },
					{ name: 'strawberry', tastyness: 'MMMHH', show: false },
					{ name: 'muffins', tastyness: 'YESS', show: false },
					{ name: 'healthy', tastyness: 'meh', show: false },
					{ name: 'cinnamonbun', tastyness: 'spicy', show: false },
					]
				}
			},
		
		methods: {
			addBeverage() {
				this.beverages.push({ brands: "some drink brand" })
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>