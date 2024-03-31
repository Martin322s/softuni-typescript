function calorieObject(input: string[]): void {
    type Calorie = { [key: string]: number };
    let obj: Calorie = {};

    for (let i: number = 0; i < input.length; i += 2) {
        let name: string = input[i];
        let value: number = Number(input[i + 1]);
        
        if (obj[name]) {
            obj[name] = obj[name] + value;
        } else {
            obj[name] = value;
        }
    }

    console.log(obj);
}