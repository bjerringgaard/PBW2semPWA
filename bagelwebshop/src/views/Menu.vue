<template>
	<v-container>
		<v-row>
			<v-col offset-md="1" md="5">
				<div class="pa-2" id="info_box">
						<h1>Menu Items</h1>
					<v-simple-table id="menu_table">
							<thead>
								<tr>
									<th></th>
									<th class="text-left" style="width:70%">Name of item</th>
									<th class="text-left" style="width:100px">Price</th>
									<th class="text-left" style="width:100px">Add to basket</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in menuItems" :key="item.name">
									<td id="td_img">
										<v-img v-bind:src="item.image"></v-img>
									</td>
									<td>
										<span id="td_name">{{ item.name }}</span> <br>
										<span id="td_desc">{{ item.description }}</span>
									</td>
									<td>{{ item.price }}</td>
									<td>
										<v-btn small text  v-on:click="addToBasket(item)">
											<v-icon color="orange">mdi-plus-box</v-icon>
										</v-btn>
									</td>
								</tr>
							</tbody>
					</v-simple-table>
				</div>
			</v-col>
			<v-col offset-md="1" md="4">
				<div class="pa-2" id="info_box">
					<h1>Basket</h1>
					<v-simple-table id="menu_table" v-if="basket.length > 0">
							<thead>
								<tr>
									<th class="text-left" style="width:30%">Quantity</th>
									<th class="text-left" style="width:50%">Name of item</th>
									<th class="text-left" style="width:20%">Price</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in basket" :key="item.name">
									<td>
										<v-icon v-on:click="decreaseQtn(item)">mdi-minus-box</v-icon>
										{{ item.quantity }}
										<v-icon v-on:click="increaseQtn(item)">mdi-plus-box</v-icon>
									</td>
									<td>{{ item.name }}</td>
									<td>{{ item.price }}</td>
								</tr>
							</tbody>
					</v-simple-table>

					<v-simple-table v-else>
						<p>The Basket is Empty</p>
					</v-simple-table>

					<div id="basket_checkout" style="margin:0;" class="mt-4">
						<v-row>
							<v-col style="width: 30%;">
								<p>Subtotal: </p>
								<p>Total delivery: </p>
								<p>Total Amount: </p>
							</v-col>
							<v-col style="width: 30%;">
								<p>{{ subTotal }} DKK</p>
								<p>10 DKK</p>
								<p><b>{{ total }} DKK</b></p>
							</v-col>
						</v-row>
						<v-row>
							<v-col>
								<v-btn color="orange" class="mb-4" v-on:click="addCheckoutItem()">CheckOut</v-btn>
							</v-col>
						</v-row>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
/* eslint-disable no-unused-vars */
import { dbMenuAdd } from '../../firebase'

export default {
    data () {
      return {
		basketDump: [],
      }
	},
	beforeCreate() {
		this.$store.dispatch('setMenuItems')
	},
	methods: {
		addCheckoutItem(){
			this.$store.dispatch('setCheckoutItem')
		},
		addToBasket(item) {
			this.basketDump.push({
				name: item.name,
				price: item.price,
				quantity: 1
			});
			this.$store.commit('addBasketItems', this.basketDump);
			this.basketDump = [];
		},
		increaseQtn(item) {
			item.quantity++
		},
		decreaseQtn(item) {
			item.quantity--;

			if(item.quantity === 0){
				this.basket.splice(this.basket.indexOf(item), 1)
			}
		},
	},

	computed: {
		basket() {
			// return this.$store.state.basketItems
			return this.$store.getters.getBasketItems
		},
		menuItems() {
			return this.$store.getters.getMenuItems
		},

		subTotal() {
			var subCost = 0;
			for(var items in this.basket){
				var individualItem = this.basket[items];
				subCost += individualItem.quantity * individualItem.price;
			}
			return subCost
		},
		total(){
			var deliveryPrice = 10;
			var totalCost = this.subTotal
			return totalCost + deliveryPrice
		},
	},
  }
</script>

<style lang="scss" scoped>

	#info{
		background-color: white;
	}

	tr th{
		font-weight: 300;
	}

	#td_name {
		font-weight: bold;	
	}

	#td_desc{
		font-style: italic;
		font-weight: 300;
		color: map-get($colorz, darkgrey);
		font-size: 13px;
	}

	#td_img{
		max-width: 40px;
		max-height: 40px;
		padding: 0;
	}

	tr td{
		padding: 10px 10px 10px 16px;
	}

	h1 {
		@include infobox_mixin(5px, map-get($colorz, white), 10px, 5px, map-get($colorz, white));
		font-weight: bold;
		text-transform: uppercase;
		font-size: 16px;
		text-align: right;
	}

		.col:last-child h1 {
			text-align: left;
		}
	
	#basket_checkout{
		background-color: white;
		font-size: 13px;
		padding-left: 20px;
		padding-top: 30px;
		width: 100%;
	}
		#basket_checkout p:first-child {
			line-height: 2px;
		}

		#basket_checkout .col:nth-child(2){
			text-align: right;
			margin-right: 7%;
		}

</style>