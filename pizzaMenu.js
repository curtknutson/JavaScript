function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");

	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"    ";
			}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	text1=text1+"$"+sizeTotal+".00";
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1); // All these variables will be passed on to each function
	console.log("receipt text1 after crust: "+text1);
	
function getCrust(runningTotal, text1) {
	console.log("incoming crust: "+runningTotal+"   "+text1);
	var crustTotal = 0;
	var selectedCrust = document.querySelector('input[name=Crust]:checked').value;
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	text1=text1+"<br>"+selectedCrust+"    +$"+crustTotal+".00"+"<br>";
	console.log("selected crust: "+selectedCrust);
	console.log("crust text1: "+text1);
	console.log("Purchase Total w crust: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getMeat(runningTotal,text1);
};//end getCrust function
function getMeat(runningTotal,text1) {
	console.log("incoming meat: "+runningTotal+"   "+text1);
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"   ";
		}
	}
	
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
		text1=text1+"no meat    ";
	}
	runningTotal = (runningTotal + meatTotal);
	text1=text1+"+$"+meatTotal+".00";
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCheese(runningTotal,text1);
};//end getMeat function
function getCheese(runningTotal, text1) {
	console.log("incoming cheese: "+runningTotal+"   "+text1);
	var cheeseTotal = 0;
	var selectedCheese = document.querySelector('input[name=Cheese]:checked').value;
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	text1=text1+"<br>"+selectedCheese+"    +$"+cheeseTotal+".00";
	console.log("selected cheese: "+selectedCheese);
	console.log("cheese text1: "+text1);
	console.log("Purchase Total w cheese: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getSauce(runningTotal,text1);
};//end getCheese function
function getSauce(runningTotal, text1) {
	console.log("incoming cheese: "+runningTotal+"   "+text1);
	var sauceTotal = 0;
	var selectedSauce = document.querySelector('input[name=Sauce]:checked').value;
	
	text1=text1+"<br>"+selectedSauce+"    "+"+$"+sauceTotal+".00"+"<br>";
	console.log("selected sauce: "+selectedSauce);
	console.log("sauce text1: "+text1);
	console.log("Purchase Total w sauce: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggies(runningTotal,text1);
};//end getSauce function
function getVeggies(runningTotal,text1) {
	console.log("incoming veggies: "+runningTotal+"   "+text1);
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggies.push(veggieArray[j].value);
			console.log("selected veggie item: ("+veggieArray[j].value+")");
			text1 = text1+veggieArray[j].value+"   ";
		}
	}
	var veggieCount = selectedVeggies.length;
	if (veggieCount > 1) {
		veggiesTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
		text1=text1+"no veggies    ";
	}
	runningTotal = (runningTotal + veggiesTotal);
	text1=text1+"+$"+veggiesTotal+".00"+"<br><br>Total Price:   $"+runningTotal+".00<br><br>";
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggies - 1 free veggie = "+"$"+veggiesTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	
};//end getVeggies function
};//end getReceipt function