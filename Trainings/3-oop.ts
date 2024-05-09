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
// Encapsulation
// Polymorphism

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