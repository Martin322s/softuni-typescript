class CompareElements<T> {
    public array: T[];

    constructor(value: T[]) {
        this.array = value;
    }

    compare(comparator: any) {
        let count = this.array.filter(x => x === comparator).length;
        return count;
    }
}

let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c.compare(1));

