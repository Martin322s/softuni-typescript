function solve(textOne: string, textTwo: string, textThree: string) {
    let lengthSum: number = textOne.length + textTwo.length + textThree.length;
    let averageSum: number = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(averageSum);
}

solve('pasta', '5', '22.3');