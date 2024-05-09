// Abstraction
class Bird {
    name: string;
    age: number;
    isSeasonal: boolean;

    constructor(name: string, age: number, isSeasonal: boolean) {
        this.name = name;
        this.age = age;
        this.isSeasonal = isSeasonal;
    }
}

class Swallow extends Bird {
    feathersColor: string;

    constructor(name: string, age: number, isSeasonal: boolean, feathersColor: string) {
        super(name, age, isSeasonal);
        this.feathersColor = feathersColor;
    }
}

class Stork extends Bird {
    height: number;

    constructor(name: string, age: number, isSeasonal: boolean, height: number) {
        super(name, age, isSeasonal);
        this.height = height;
    }
}

// Inheritance
class Parent {
    name?: string;
    age?: number;
    eyeColor: string | undefined;
    hairColor: string | undefined;

    constructor(eyeColor: string, hairColor: string, name?: string, age?: number) {
        // Parent specific props
        this.name = name;
        this.age = age;
        // Inherit available props
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }
}

class Child extends Parent {
    name: string;
    age: number;

    constructor(name: string, age: number, eyeColor: string, hairColor: string) {
        // Parent inheirted
        super(eyeColor, hairColor);
        // Child specific props
        this.name = name;
        this.age = age;

    }
}

// Encapsulation
class Human {
    name: string;
    protected egn: string;

    constructor(name: string, egn: string) {
        this.name = name;
        this.egn = egn;
    }
}

let pesho = new Human('Pesho', '9865741233');

// Polymorphism
interface Animal {
    move: () => void
}

class Lion {
    move() {
        console.log('Moving by walking on the ground.');
    }
}

class Fish {
    move() {
        console.log('Moving by swimming in the ocean.');
    }
}

// SOLID
// 1. Single Responsibility Principle
// 2. Open-Closed Principle
// 3. Liskov Substitution Principle
// 4. Interface Segregation Principle
// 5. Dependency Inversion Principle

// Classes - Function constructor and Objects

// Propertiesm Methods, Constructor
// Static, Accessors and Access Modifiers
// Readonly and Abstract classes

// BONUS: NEW keyword workflow