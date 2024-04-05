class Animal {
    public eat(): void {
        console.log('eating...');
    }
}

class Dog extends Animal {
    constructor() {
        super();
    }

    public bark(): void {
        console.log('barking...');
    }
}

class Cat extends Animal {
    constructor() {
        super();
    }
    
    public meow(): void {
        console.log('meowing...');
    }
}