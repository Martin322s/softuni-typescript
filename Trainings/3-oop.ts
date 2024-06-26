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
class Parent {
    name?: string;
    age?: number;
    eyeColor: string | undefined;
    hairColor: string | undefined;

    constructor(eyeColor: string, hairColor: string, name?: string, age?: number) {
        // Parent specific props
        this.name = name;
        this.age = age;
        // Inherit available props
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }
}

class Child extends Parent {
    name: string;
    age: number;

    constructor(name: string, age: number, eyeColor: string, hairColor: string) {
        // Parent inheirted
        super(eyeColor, hairColor);
        // Child specific props
        this.name = name;
        this.age = age;

    }
}

// Encapsulation
class Human {
    name: string;
    protected egn: string;

    constructor(name: string, egn: string) {
        this.name = name;
        this.egn = egn;
    }
}

let pesho = new Human('Pesho', '9865741233');

// Polymorphism
interface Animal {
    move: () => void
}

class Lion {
    move() {
        console.log('Moving by walking on the ground.');
    }
}

class Fish {
    move() {
        console.log('Moving by swimming in the ocean.');
    }
}

// SOLID
// 1. Single Responsibility Principle
class LoginUserService {
    loginUser() {

    }

    // import User repository
    searchUser() {

    }
}

class UserRepository {
    searchUser() {

    }
}

// 2. Open-Closed Principle
class Order {
    constructor(private items: { price: number }[], protected discount: number = 0) { }

    calculateTotal() {
        const subtotal = this.items.reduce((total, item) => total + item.price, 0);
        return subtotal - subtotal * (this.discount / 100);
    }
}

class DiscountedOrder extends Order {
    constructor(items: { price: number }[], protected discount: number) {
        super(items);
    }

    applyDiscount() {
        return this.calculateTotal() * (1 - this.discount / 100);
    }
}

// 3. Liskov Substitution Principle
class CoffeeMachine {
    makeCoffee() {

    }
}

class LavazzaCoffeeMachine extends CoffeeMachine {
    makeCoffee() {

    }
}

// 4. Interface Segregation Principle
interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}

interface Geo {
    lat: string,
    lng: string
}

interface UserInterface {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    geo: Geo,
    phone: string,
    website: string,
    company: Company
}

// 5. Dependency Inversion Principle
class Wallet {
    balance: number;
  
    constructor(balance: number) {
      this.balance = balance;
    }
  }
  
  class Course {
    courses: string[];
  
    constructor(courses: string[]) {
      this.courses = courses;
    }
  }
  
  //  BAD PRACTICE!
  class UserCL {
    wallet: Wallet;
    username: string;
    course: Course;
    //   DON'T DO THAT -> BAD PRACTICE
    constructor(username: string, balance: number, courses: string[]) {
      this.username = username;
      this.wallet = new Wallet(balance);
      this.course = new Course(courses);
    }
  }
  
  const userPesho = new UserCL("pesho123", 3000, ["JS", "Python"]);
  console.log("balance: ", userPesho.username, userPesho.wallet.balance);
  console.log("courses", userPesho.course.courses);
  console.log("----------------------");
  const userMaria = new UserCL("maria123", 4000, ["NodeJS", "SQL", "C++"]);
  console.log("balance: ", userMaria.username, userMaria.wallet.balance);
  console.log("courses", userMaria.course.courses);
  
  // GOOD PRACTICE
  class UserC {
    wallet: Wallet;
    username: string;
    course: Course;
  
    // INJECTED!
    constructor(username: string, wallet: Wallet, course: Course) {
      this.username = username;
      this.wallet = wallet;
      this.course = course;
    }
  }
  
  const walletIvan = new Wallet(4000);
  const coursesIvan = new Course(["C#", "JS"]);
  const userIvan = new UserC("ivan123", walletIvan, coursesIvan);
  console.log("balance: ", userIvan.username, userIvan.wallet.balance);
  console.log("courses", userIvan.course.courses);

// Classes - Function constructor and Objects
class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    horn() {
        console.log('Beep! Beep!');
    }
}

let ford: Car = new Car('Ford', 'Focus', 2007);
console.log(ford);

// Propertiesm Methods, Constructor
class DriverCar {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    horn() {
        console.log('Beep! Beep!');
    }
}

// Static, Accessors and Access Modifiers
class Maths {
    static PI: number = 3.144698665445665;
    static pow(num: number, power: number): number {
        return num ** power;
    }
}

console.log(Maths.PI);
console.log(Maths.pow(2, 5));

class Vehicle {
    public model: string;
    private brand: string;
    protected year: number;

    constructor(model: string, brand: string, year: number) {
        this.model = model;
        this.brand = brand;
        this.year = year;
    }

    get getBrand() {
        return this.brand;
    }

    set setBrand(brand: string) {
        this.brand = brand;
    }
}

class BMW extends Vehicle {
    constructor(model: string, brand: string, year: number) {
        super(model, brand, year);
    }

    get getModel() {
        return this.model;
    }
}

let car: Vehicle = new Vehicle('340i', 'bmw', 2007);
let bmw: BMW = new BMW('340i', 'bmw', 2007);

console.log(car.getBrand);

bmw.setBrand = 'opel';

console.log(bmw.getBrand);

// Readonly and Abstract classes
abstract class Plant {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Tree extends Plant {
    constructor(name: string) {
        super(name);
    }
}

let appleTree = new Tree('Apple');
console.log(appleTree.name);

// BONUS: NEW keyword workflow
function make(constructor: any, ...params: any[]) {
    // 1. Create an object
    let object = {};

    // 2. Set properties
    constructor.apply(object, params);

    // 3. Set prototype
    Object.setPrototypeOf(object, constructor.prototype);

    // 4. Return the object
    return object;
}

let peach = make(Vehicle, '340i', 'bmw', 2007);

console.log(peach);
