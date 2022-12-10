var firstInput = document.querySelector("#first-input");
var secondInput = document.querySelector("#second-input");
var thirdInput = document.querySelector("#third-input");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector("#output");




checkBtn.addEventListener('click', function submitHandler() {
	var initialPrice = Number(firstInput.value);
	var currentPrice = Number(secondInput.value);
	var stocksQuantity = Number(thirdInput.value);

	calculateProfitOrLoss(initialPrice, stocksQuantity, currentPrice);
});



function calculateProfitOrLoss(initial, quantity, current) {
	
	if (initial > current) {
		let loss = (initial - current) * quantity;
		let lossPercentage = (loss / (initial * quantity)) * 100;
		output.style.color = 'red';
		output.innerHTML = `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercentage}%`;
	}

	else if (initial < current) {
		let profit = (current - initial) * quantity;
		let profitPercentage = (profit / (initial * quantity)) * 100;
		output.style.color = 'green';
		output.innerHTML = `Yay!! Your Profit is ${profit} and profit Percentage is ${profitPercentage}%`;
	}

    
	else {
		output.style.color = 'white';
		output.innerHTML = `No pain No gain, and no gain no pain :)`;
	}
}