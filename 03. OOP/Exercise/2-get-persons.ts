class Person2 {
    public firstName?: string;
    public lastName?: string;
    public age?: number;
    public email?: string;

    constructor(firstName?: string, lastName?: string, age?: number, email?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(): string {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

function getPersons(): Person2[] {
    const firstObject: Person2 = new Person2('Anna', 'Simspon', 22, 'anna@yahoo.com');
    const secondObject: Person2 = new Person2('SoftUni', 'Education', 11, 'university@softuni.bg');
    const thirdObject: Person2 = new Person2('Stephan', 'Johnson', 25, 'steph@gmail.com');
    const fourthObject: Person2 = new Person2('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    return [
        firstObject,
        secondObject,
        thirdObject,
        fourthObject
    ]
}