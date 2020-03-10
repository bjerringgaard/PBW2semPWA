function newStuff() {

	var storedInput = document.form.sum1.value;
	
	if(storedInput === ""){
		alert("Tyoe something in the Input");
	}
	else {
		return document.getElementById("Hitme").innerHTML = storedInput;
	}
}

// The Fortune Teller
var myStatus = "Web Developer";
var livingCountry = "Denmark";
var marryName = "Charlotte";
var numKids = "2";

const fortuneTeller = `"You will be a ${myStatus} in ${livingCountry} and married to ${marryName} with ${numKids} kids"`;
console.log(fortuneTeller);


//The Age Calculator
var birthYear = 1998;
var futureYear = 2021;

var ageLow = (futureYear - birthYear - 1);
var ageHigh = (futureYear - birthYear);

const ageCalc = `I will be either ${ageLow} or ${ageHigh} in ${futureYear}`;
console.log(ageCalc);


//Life Supply
var currentAge = 19;
var maxAge = 80;
var everyday = 4;
var dayYear = 365;
var lifeSupply = (maxAge - currentAge) * everyday * dayYear

const lifeSupplyCalc = `"You will need ${lifeSupply} pieces, to last you until the ripe old age of ${maxAge}"`;
console.log(lifeSupplyCalc);


