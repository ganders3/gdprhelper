document.body.style.border = "5px solid red";

console.log('Hello');


var btns = document.getElementsByTagName("button");
console.log(btns);

// runOrder();

function runOrder() {
	buttons = getButtons();
	clickButtons(buttons);
}

function getButtons() {
	// console.log("Running getButtons");
	var btns = document.getElementsByTagName("button");
	console.log(btns);
	return(btns);
}

function clickButtons(btns) {
	// console.log("btns");
	// console.log(btns);
	// console.log(btns.item(0).item(0));
	for (let i=0; i < btns.length; i++) {
		btns[i].click();
	}
}

function testClick() {
	console.log("Clicked the test button");
}

function realClick() {
	console.log("CLICKED THE REAL BUTTON");
}