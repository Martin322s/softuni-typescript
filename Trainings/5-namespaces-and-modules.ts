/// <reference path="5-export-namespace.ts" />

const dolphin = new Animal.Mammal('dolphin');
console.log(dolphin);

import laptops = TechShop.Laptop;

const samsung = new laptops.Samsung();