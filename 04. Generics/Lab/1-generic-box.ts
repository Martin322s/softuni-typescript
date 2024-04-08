class Box<T> {
    property: T;

    constructor(value: T) {
        this.property = value;
    }

    toString(): string {
        return `${this.property} is of type ${typeof this.property}`;
    }
}

let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
