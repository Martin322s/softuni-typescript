class Person {
    public firstName: string;
    public lastName: string;
    public age: number;
    public email: string;

    constructor(firstName: string, lastName: string, age: number, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(): string {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person: Person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
