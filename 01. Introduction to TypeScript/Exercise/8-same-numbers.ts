function sameNumbers(input: number): void {
    let inputAsArray: string[] = input.toString().split('');
    let numberForCompare: string = inputAsArray[0];
    let areSame: boolean = false;
    let sum: number = 0;
    let result: string[] = inputAsArray.filter(x => x !== numberForCompare);
    inputAsArray.map(Number).forEach(x => sum += x);

    if (result.length > 0) {
        areSame = false;
        console.log(areSame);
        console.log(sum);
    } else {
        areSame = true;
        console.log(areSame);
        console.log(sum);
    }
}