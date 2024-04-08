class Container<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }
}

let numberContainer = new Container<number>(123);
console.log(numberContainer.getItem());

let stringContainer = new Container<string>("test");
console.log(stringContainer.getItem());