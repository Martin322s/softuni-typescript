interface Vehicle {
    type: string;
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    operate() {
        throw new Error("Method not implemented.");
    }
    drive() {
        throw new Error("Method not implemented.");
    }
    type = 'Car';

    start() {
        console.log("Car started");
    }

    stop() {
        console.log("Car stopped");
    }
}

class Bike implements Vehicle {
    drive(): void {
        throw new Error("Method not implemented.");
    }
    operate(): void {
        throw new Error("Method not implemented.");
    }
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
