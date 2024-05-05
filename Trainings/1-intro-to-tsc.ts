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