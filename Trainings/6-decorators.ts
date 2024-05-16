// Basic Decorator
function classDecorator(constructor: Function) {
    console.log('Decoraator called!');
}

@classDecorator
class Emitter {
    constructor() {
        console.log('Constructor called!');
    }
}

const emit = new Emitter();

console.log(emit);