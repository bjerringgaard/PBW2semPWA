<template>
	<div>
		<button type="button" v-on:click="update">Add Beverage - child</button>
		<hr>
		<button v-on:click="deleteCakes">Delete An item</button>
		
		<ul>
			<li v-for="(cake, index) in cakes" :key="index" v-on:click="cake.show = !cake.show">
				<p>{{ cake.name }}</p>
				<p v-show="cake.show">{{ cake.tastyness }}</p>
			</li>
			
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			cakes: {
				type: Array,
				require: true
			}
		},
		
		data() {
			return {
				
			}
		},

		methods: {
			deleteCakes() {
				this.cakes.pop()
			},

			update(){
				this.$emit('update');
			}
		},
	}
</script>

<style lang="scss" scoped>
	ul {
		display: flex;
		max-width: 1000px;
		margin: 20px auto;
		padding: 10px;
		box-sizing: border-box;
	}

	li{
		list-style: none;
		padding: 20px;
		margin: 10px;
		text-align: center;
		border: 1px solid greenyellow;
		flex-grow: 1;
		flex-basis: 200px;
	}
</style>