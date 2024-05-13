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