new Vue ({
	el: '#vue-app',

	data: {
		health: 100,
		ended: false,
		half: false,
		alsmost: false,
	},

	methods: {
		damage() {
			this.dmg = Math.floor(Math.random() * Math.floor(10));
			this.health -= this.dmg;

			if(this.health <= 50) {
				this.half = true;
			} if(this.health <= 20) {
				this.almost = true;
			} if(this.health <= 0) {
				this.ended = true;
			}
		},
		reset() {
			this.health = 100;
			this.half = false; 
			this.almost = false;
			this.ended = false;
		}
	},
})