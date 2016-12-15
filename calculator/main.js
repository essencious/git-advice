var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
var input = document.querySelector('.display');

function getInput() {
	return input.innerHTML;
}

function updateScreen(newVal) {
	input.innerHTML = newVal;
}

function clearScreen() {
	input.innerHTML = '';
	decimalAdded = false;
}

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var inputVal = getInput();
		var btnVal = this.innerHTML;

		if(btnVal == 'C') {
			clearScreen();
		}

		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];

			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');

			if(equation)
				updateScreen(eval(equation));

			decimalAdded = false;
		}

		else if(operators.indexOf(btnVal) > -1) {
			var lastChar = inputVal[inputVal.length - 1];

			if(inputVal != '' && operators.indexOf(lastChar) == -1)
				updateScreen(inputVal + btnVal);

			else if(inputVal == '' && btnVal == '-')
				updateScreen(inputVal + btnVal);

			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				updateScreen(inputVal.replace(/.$/, btnVal));
			}

			decimalAdded =false;
		}

		else if(btnVal == '.') {
			if(!decimalAdded) {
				updateScreen(inputVal + btnVal);
				decimalAdded = true;
			}
		}

		else {
			updateScreen(inputVal + btnVal);
		}

		e.preventDefault();
	}
}
