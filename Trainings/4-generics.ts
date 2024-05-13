// Design Patterns
// 1. Singleton - class design pattern, which returns ONLY one instance
class Singleton {
    private static instance: Singleton | null = null;

    private constructor() {}

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