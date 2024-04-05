class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function opinionPoll(name: string, age: number): void {
    let person: Person = new Person(name, age);
    console.log(`${person.name} is ${person.age} years old.`);
}