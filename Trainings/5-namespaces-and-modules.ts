/// <reference path="5-export-namespace.ts" />
// import animal = Animal;

// const dolphin = new animal.Mammal('dolphin');
// console.log(dolphin);

import laptops = TechShop.Laptop;

const samsung = new laptops.Samsung();

console.log(TechShop.sum(1, 2));
