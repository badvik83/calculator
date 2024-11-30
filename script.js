const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = "";
let previousNumber = "";
let operator = "";
display.value = '0';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentNumber = '';
            previousNumber = '';
            display.value = '0'; // Clear display
        } else if (value === '=') {
            display.value = operate();
        } else if (value === '.'){
            
        } else if (value === "+/-"){

        } else if (value === "%") {
            currentNumber /= 100;
            display.value = currentNumber;
        } else if (value >= '0' && value <= '9') {
            currentNumber += value;
            display.value = currentNumber;
        }
        else {
            if (previousNumber !== "") {
                display.value = operate();
            }
            previousNumber = currentNumber;
            currentNumber = "";
            operator = value;
        }
    });
});

function operate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case  
 '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            if (currentNumber === '0') {
                result = "ERROR"
                break;
            }
            else {
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break; }
        default:
            result = currentNumber;
    }
    currentNumber = result.toString();  

    return result;
}