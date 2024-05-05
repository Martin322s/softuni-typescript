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

// Null & Undefined
let undefinedVariable: undefined;
let undefinedVariable2: undefined = undefined;
let obj: null = null;

// Arrays
let names: string[] = ['Pesho', 'Mitkp', 'Gosho'];
let grades: Array<number> = [1, 13, 5, 1, 5];

// Tuples
let stringTuple: [string, string] = ['Martin', 'Sofroniev'];
let numberTuple: [number, string] = [1, 'Ivan'];
let simpleTuple: [null, object] = [null, {}];