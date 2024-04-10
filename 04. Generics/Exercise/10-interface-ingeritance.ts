interface Machine {
    operate(): void;
}

interface Vehicle extends Machine {
    drive(): void;
}

class Cars implements Vehicle {
    type: string;
    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    operate() {
        console.log("Operating the car.");
    }

    drive() {
        console.log("Driving the car.");
    }
}

let myCar2 = new Cars();
myCar.operate();
myCar.drive();
