// Design Patterns
// 1. Singleton pattern - class design pattern, which returns ONLY one instance
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

// 3. Observer pattern - dynamic object, which can be subscribed and notified about changes
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

// 4. Strategy pattern - family of capsulated algorithms each one interchangeable
interface DeliveryStrategy {
    calcCost(weight: number, distance: number): number;
}

class EcontStrategy implements DeliveryStrategy {
    calcCost(weight: number, distance: number): number {
        return (weight * distance) / 100;
    }
}
class SpeedyStrategy implements DeliveryStrategy {
    calcCost(weight: number, distance: number): number {
        return weight * distance - 100;
    }
}
class FedExStrategy implements DeliveryStrategy {
    calcCost(weight: number, distance: number): number {
        return weight * distance * distance;
    }
}

class DeliveryCalcCost {
    private deliveryStrategy: DeliveryStrategy;

    constructor(deliveryStrategy: DeliveryStrategy) {
        this.deliveryStrategy = deliveryStrategy;
    }

    calculateCost(weight: number, distance: number): number {
        return this.deliveryStrategy.calcCost(weight, distance);
    }
}

const econtDelivery = new EcontStrategy();
const speedyDelivery = new SpeedyStrategy();
const fedexDelivery = new FedExStrategy();

// econt
const calcEcont = new DeliveryCalcCost(econtDelivery);
const costEcont = calcEcont.calculateCost(10, 100);
// speedy
const calcSpeedy = new DeliveryCalcCost(speedyDelivery);
const costSpeedy = calcSpeedy.calculateCost(10, 100);
// fedex
const calcFedex = new DeliveryCalcCost(fedexDelivery);
const costFedex = calcFedex.calculateCost(10, 100);

// 5. Adapter pattern - incompatible interfaces to work together by providing a wrapper
interface Target {
    request(): string;
}

class Adaptee {
    public specificRequest(): string {
        return ".ecafretni gnitseuqer yllacificepS";
    }
}

class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

function clientCode(target: Target) {
    console.log(target.request());
}

const adaptee = new Adaptee();
console.log("Adaptee: " + adaptee.specificRequest());

const adapter = new Adapter(adaptee);
clientCode(adapter);

// Generics - Basic example
const stringParam = (param: string): string => {
    return `${param} is having type ${typeof param}`;
}

const numberParam = (param: number): string => {
    return `${param} is having type ${typeof param}`;
}

console.log(stringParam('xyz'));
console.log(numberParam(123));