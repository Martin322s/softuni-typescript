function evenElement(arr: string[]) {
    let resultArr: number[] = [];

    for (let i: number = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            resultArr.push(Number(arr[i]));
        }
    }

    console.log(resultArr.join(' '));
}

evenElement(['5']);