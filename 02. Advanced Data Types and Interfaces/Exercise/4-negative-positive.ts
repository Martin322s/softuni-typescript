function negativePositiveNumbers(input: number[]): void {
    let result: number[] = [];

    for (let num of input) {
        if (num >= 0) {
            result.push(num);
        } else {
            result.unshift(num);
        }
    }

    console.log(result.join('\n'));
}