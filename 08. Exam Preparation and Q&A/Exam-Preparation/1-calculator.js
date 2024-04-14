function calculator(firstNumber, operator, secondNumber) {
    var result = 0;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default: result = 'Invalid operator!';
    }
    console.log(typeof result === 'number' ? result.toFixed(2) : result);
}
calculator(5, '+', 11);
