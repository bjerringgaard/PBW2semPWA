<template>
	<v-container>
		<v-row>
			<v-col offset-md="1" md="5">
				<div class="pa-2" id="info_box">
					<h1>Add new item</h1>
						<div id="info">
						<v-text-field label="Name of Bagel" required v-model="name">
						</v-text-field>
						<v-text-field label="Description" required v-model="description">
						</v-text-field>
						<v-text-field label="Price" required v-model="price">
						</v-text-field>
						<v-btn color="complete" v-on:click="addNewMenuItem">
							Add Item
						</v-btn>
							<v-btn color="incomplete">
							Cancel
						</v-btn>
					</div>
				</div>
			</v-col>
			<v-col offset-md="1" md="4">
				<div class="pa-2" id="info_box">
					<h1>Preview</h1>
					<div id="info">
						<v-simple-table id="menu-table">
							<thead>
								<tr>
									<th class="text-left" style="width:70%">Name</th>
									<th class="text-left" style="width:100px">Price DKK</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span id="td_name">{{ name }}</span> <br>
										<span id="td_desc">{{ description }}</span>
									</td>
									<td id="td_preview">{{ price }}</td>
								</tr>
							</tbody>
						</v-simple-table>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { dbMenuAdd } from '../../../firebase.js'

export default {
	data() {
		return {
			name: '',
			description: '',
			price: ''			
		}
	},
	methods: {
		addNewMenuItem(){
			dbMenuAdd.add({
				name: this.name,
				description: this.description,
				price: this.price,
			})
		}
	}
}
</script>

<style lang="scss" scoped>

	#info{
		background-color: white;
		padding: 10px;
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