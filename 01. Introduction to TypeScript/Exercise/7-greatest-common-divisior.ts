function greatestDivisior(numOne: number, numTwo: number): void {
    let result: number = 0;

    while (numOne !== numTwo) {
        if (numOne >= numTwo) {
            numOne -= numTwo;
        } else {
            numTwo -= numOne;
        }
        result = numOne;
    }

    console.log(result);
}