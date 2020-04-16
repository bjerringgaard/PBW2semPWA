<template>
	<v-container>
		<v-row>
			<v-col offset-md="1" md="5">
				<div class="pa-2" id="info_box">
						<h1>Menu Items</h1>
					<v-simple-table id="menu_table">
							<thead>
								<tr>
									<th class="text-left" style="width:70%">Name
										<v-btn color="orange" small text to="/addNew">
											<v-icon>mdi-plus</v-icon><span style="padding:0 10px;">Add item</span>
										</v-btn>
									</th>
									<th class="text-left" style="width:100px">Price</th>
									<th class="text-left" style="width:100px">Edit</th>
									<th class="text-left" style="width:100px">Remove</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in menuItems" :key="item.name">
									<td>
										<span id="td_name">{{ item.name }}</span> <br>
										<span id="td_desc">{{ item.description }}</span>
									</td>
									<td>{{ item.price }}</td>
									<td>
										<v-btn small text>
											<v-icon color="orange">mdi-pencil</v-icon>
										</v-btn>
									</td>
									<td>
										<v-btn small text v-on:click="deleteItem(item.id)">
											<v-icon color="incomplete">mdi-delete</v-icon>
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
					<div id="basket_checkout">
						Right
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { dbMenuAdd } from '../../firebase'

export default {
    data () {
      return {
		basket: [],
        menuItems: [],
      }
	},

	created() {
		dbMenuAdd.get().then((querySnapshot) => {
			querySnapshot.forEach((doc => {
				console.log(doc.id, " => ", doc.data());
				var menuItemData = doc.data();
				this.menuItems.push({
					id: doc.id,
					name: menuItemData.name,
					description: menuItemData.description,
					price: menuItemData.price
				})
			}))
		})
	},

	methods: {
		deleteItem(id){
			dbMenuAdd.doc(id).delete().then(function(){
			//	console.log("Item Deleted");
			}).catch(function(error){
				console.error("Error when deleting: ", error);
			});
		},

		addToBasket(item) {
			if(this.basket.find(itemInArray => item.name === itemInArray.name)){
				item = this.basket.find(itemInArray => item.name === itemInArray.name);
				this.increaseQtn(item);
			}
			else{
				this.basket.push({
					name: item.name,
					price: item.price,
					quantity: 1
			})
			}
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

	tr td{
		padding: 10px 10px 10px 16px;
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