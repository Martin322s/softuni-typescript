class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): string {
        return `${this.name} aged ${this.age} says hello!`;
    }
}

// String
let firstName: string = 'Martin'; // Single quotes
let secondName: string = "Sofroniev"; // Double quotes
let fullName: string = `${firstName} ${secondName}`; // Interpolation

// Number
let integer: number = 12;
let floatingPoint: number = 3.14;
let binary: number = 0x001011001;
let hex = 0E45;

// Boolean
let alwaysTrue: boolean = true;
let alwaysFalse: boolean = false;
let isGreater: boolean = 5 < 2;

// Symbol
let symOne: symbol = Symbol('key1');
let symTwo: symbol = Symbol('key2');
let areEqual: boolean = symOne === symTwo;
