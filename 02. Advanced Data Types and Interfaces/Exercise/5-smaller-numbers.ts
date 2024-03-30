function smallestTwoNumbers(input: number[]): void {
    let sortedArr: number[] = input.sort((a, b) => a - b);
    let firstSmallNumber: number = sortedArr[0];
    let secondSmallNumber: number = sortedArr[1];

    console.log(firstSmallNumber + ' ' + secondSmallNumber);
}