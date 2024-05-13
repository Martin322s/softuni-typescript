// Design Patterns
// 1. Singleton - class design pattern, which returns ONLY one instance
class Singleton {
    private static instance: Singleton | null = null;

    private constructor() { }

    static getInstance(): Singleton | null {
        if (this.instance === null) {
            this.instance = new Singleton();
        }

        return this.instance;
    }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

console.log(instance1 === instance2);

// 2. Factory pattern - function, which creates instances
class CarFactory {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    getBrand(): string {
        return this.brand;
    }
}

class BMWCar extends CarFactory {
    constructor(brand: string) {
        super(brand);
    }
}

class OpelCar extends CarFactory {
    constructor(brand: string) {
        super(brand);
    }
}

function factory(brand: string) {
    switch (brand) {
        case 'BMW': return new BMWCar(brand);
        case 'Opel': return new OpelCar(brand);
        default: throw new Error('Car type not supported!');
    }
}

console.log(factory('BMW'));
console.log(factory('Opel'));

// 3. Observer pattern
interface Observer {
    update(message: string): void;
}

class Subject {
    private observers: Observer[] = [];

    public addObserver(observer: Observer): void {
        this.observers.push(observer)
    }

    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObservers(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
}

class ConcreteObserver implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public update(message: string): void {
        console.log(`${this.name} received message: ${message}`);
    }
}

const subject = new Subject();
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notifyObservers('Hello Observers!');
subject.removeObserver(observer1);
subject.notifyObservers('Hello again!');