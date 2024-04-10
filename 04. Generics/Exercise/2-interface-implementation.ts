interface Vehicle {
    type: string;
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    type = 'Car';

    start() {
        console.log("Car started");
    }

    stop() {
        console.log("Car stopped");
    }
}

class Bike implements Vehicle {
    type = 'Bike';

    start() {
        console.log("Bike started");
    }

    stop() {
        console.log("Bike stopped");
    }
}

let myCar = new Car();
myCar.start();
myCar.stop();