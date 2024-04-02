function biggerHalf(arr: number[]): void {
    let resultArr: number[] = [];
    let sortedArr: number[] = arr.sort((a: number, b: number) => a - b);
    let startNumber = sortedArr.length % 2 === 0 
            ? Math.ceil(sortedArr.length / 2) 
            : Math.ceil(sortedArr.length / 2) - 1;
    
    for (let i: number = startNumber; i < sortedArr.length; i++) {
        resultArr.push(sortedArr[i]);
    }

    console.log(resultArr);
}