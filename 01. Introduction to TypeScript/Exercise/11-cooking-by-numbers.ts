function cookingByNumbers(numberAsString: string, ...input: string[]): void {
    let result: number = Number(numberAsString);

    let chop = (number: number): number => number / 2;
    let dice = (number: number): number => Math.sqrt(number);
    let spice = (number: number): number => number + 1;
    let bake = (number: number): number => number * 3;
    let fillet = (number: number): number => number -= number * 0.20;
    
    for (let operation of input) {
        switch(operation) {
            case "chop" :
                result = chop(result);
                console.log(result);
                break;
            case "dice" :
                result = dice(result);
                console.log(result);
                break;
            case "spice" :
                result = spice(result);
                console.log(result);
                break;
            case "bake" :
                result = bake(result);
                console.log(result);
                break;
            case "fillet" :
                result = fillet(result)
                console.log(result);
                break;
        }
    }
}