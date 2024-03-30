function biggerHalf(input: number[]): number[] {
    let result: number[] = [];
    let sortedArr: number[] = input.sort((a, b) => a - b);
    let limit: number = Math.ceil(sortedArr.length / 2);

    if (sortedArr.length % 2 !== 0) {
        for (let i: number = sortedArr.length; i >= limit; i--) {
            result.push(sortedArr[i - 1]);
        }
    } else {
        for (let i: number = sortedArr.length; i > sortedArr.length / 2; i--) {
            result.push(sortedArr[i - 1]);
        }
    }

    return result.reverse();
}