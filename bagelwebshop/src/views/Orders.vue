<template>
	<v-container>
		<v-row>
			<v-col offset-md="1" md="6">
				<h1>Orders</h1>
					<div id="info" class="pa-2">
						<v-row class="ma-0">
							<v-col cols="12" md="1" class="pa-2">
								<p class="body-1 font-weight-bold pl-1 darkgrey--text">INFO:</p>
							</v-col>
							<v-col cols="12" md="5" class="pa-2 pl-5">
								<v-row align="center">
									<div id="status_box" class="complete"> COMPLETED </div>
									<span class="font-weight-light caption pl-1">Done</span>
								</v-row>

								<v-row align="center">
									<div id="status_box" class="inprogress"> IN-PROGRESS </div>
									<span class="font-weight-light caption pl-1">Working on it</span>
								</v-row>

								<v-row align="center">
									<div id="status_box" class="incomplete"> NOT STARTED </div>
									<span class="font-weight-light caption pl-1">Not started yet</span>
								</v-row>
							</v-col>
							<v-col cols="12" md="6" class="pa-2">
								<v-row>
									<div id="status_box" class="complete"> COMPLETED </div>
									<div id="status_box" class="inprogress"> IN-PROGRESS </div>
									<div id="status_box" class="incomplete"> NOT STARTED </div>
								</v-row>
								<v-row>
									<p class="body-1 font-weight-light caption pl-1">Click to switch stage</p> <br>
								</v-row>
								<v-row>
									<span class="body-1 font-weight-light caption pl-1">
										<v-icon color="grey">mdi-package-down</v-icon> 
										Archive to "hide" it from Orders list
									</span>
								</v-row>
							</v-col>
						</v-row>
					</div>

					<!-- Order Area List -->

					<div id="info" class="pa-2 mt-1">
						<p class="body-1 font-weight-bold pa-3 darkgrey--text">ORDERS:</p>
					<v-simple-table id="menu_table">
							<thead>
								<tr>
									<th class="text-left" style="width:10%">Order Nr.</th>
									<th class="text-left" style="width:10%">Qty</th>
									<th class="text-left" style="width:40%">Item</th>
									<th class="text-left" style="width:10%">Price</th>
									<th class="text-left" style="width:10%">Status</th>
									<th class="text-left" style="width:10%">Archive</th>
									<th class="text-left" style="width:10%">Remove</th>
								</tr>
							</thead>
							<tbody class="font-weight-light">
								<!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
								<tr v-for="item in orderItems" :key="item.name" v-if="item.storeOrder == false">
									<td>{{ item.orderNumber }}</td>
									<td class="py-3"><p v-for="subitem in item.orderLines" :key="subitem.id" style="margin:0;">{{ subitem.quantity }}</p></td>
									<td class="py-3"><p v-for="subitem in item.orderLines" :key="subitem.id" style="margin:0;">{{ subitem.name }}</p></td>
									<td class="py-3"><p v-for="subitem in item.orderLines" :key="subitem.id" style="margin:0;">{{ subitem.price }}</p></td>
									<td><div id="status_box" v-bind:class="item.status" v-on:click="switchStage(item.id)"> 
										{{ item.status }} 
										</div></td>
									<td>
										<v-btn small text  v-on:click="archiveOrderItem(item.id)">
											<v-icon color="grey">mdi-package-down</v-icon>
										</v-btn>
									</td>
									<td>
										<v-btn small text  v-on:click="deleteOrderItem(item.id)">
											<v-icon color="incomplete">mdi-delete</v-icon>
										</v-btn>
									</td>
								</tr>
							</tbody>
					</v-simple-table>
					</div>
			</v-col>
			<v-col offset-md="0" md="4">
					<h1>Revenue</h1>
					<div class="pa-2" id="info" >
						<p class="font-weight-bold body-1 darkgrey--text">COMPLETED ORDERS:</p>
					<div class="pa-2 mt-1" id="info" >
						<p id="totalOrders">TOTAL ORDERS: <span class="incomplete--text font-weight-bold">{{orderItems.length}}</span></p>
					</div>
					<!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
					<div id="revenueList" class="pa-2 mt-1" v-for="item in orderItems" :key="item.name" v-if="item.archive == true">
						<p>
							OrderNumber: 
							{{ item.orderNumber }}
							<v-btn small text v-on:click="deleteOrderItem()"><v-icon color="incomplete">mdi-delete</v-icon></v-btn>
						</p>
					</div>
					</div>
					<div class="pa-2 mt-1" id="info">
						<div id="totalRevenue">
							<p id="totalRevenueText">
								Total Revenue: <span id="totalRevenueTextTotal"> {{ revenueTotal }}</span>
							</p>
						</div>
					</div>
					
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
/* eslint-disable no-unused-vars */
import { dbOrders } from '../../firebase'

export default {
    data () {
      return {
		basketDump: [],
      }
	},
	beforeCreate() {
		this.$store.dispatch('setOrderItems')
	},
	methods: {
		switchStage(id) {
			let selectedOrderItem = this.orderItems.filter(item => item.id === id)[0];

			if(selectedOrderItem.status === "inprogress"){
				dbOrders.doc(id).update({status:"complete"})
				.then(() => {
				})
			}

			else if(selectedOrderItem.status === "incomplete"){
				dbOrders.doc(id).update({status:"inprogress"})
				.then(() => {
				})
			}

			else if(selectedOrderItem.status === "complete"){
				dbOrders.doc(id).update({status:"incomplete"})
				.then(() => {
				})
			}
		},

		archiveOrderItem(id){
			dbOrders.doc(id).update({archive: true, storeOrder: true})
			.then(() => {	
			})
		},

		deleteOrderItem(id){
			dbOrders.doc(id).delete().then(() => {

			}).catch((error) => {

			})
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
		orderItems() {
			return this.$store.getters.getOrderItems
		},
		revenueTotal() {
			var revenueIncome = 0;

			this.orderItems.forEach(element => {
				if(element.archive == true) {
					element.orderLines.forEach(el =>{
						revenueIncome += el.price * el.quantity
					})
				}
			});
			return revenueIncome
		}
	},
  }
</script>

<style lang="scss" scoped>

#status_box{
	height: 35px;
	width: 90px;

	font-size:12px;
	border-radius: 2px;
	display: flex;
	justify-content: center;
	align-items: center;
	
	margin: 5px;
	color: white;
	text-shadow: 1px 1px 1px #aaa;
}

#totalRevenue {
	padding: 20px 10px 20px 0;
	display: flex;
}
	#totalRevenueText {
		display: flex;
		margin: 0;
		justify-content: space-between;
		font-style: italic;
		width: 100%;
	}
	#totalRevenueTextTotal {
		font-weight: bold;
		font-style: normal;
	}

</style>