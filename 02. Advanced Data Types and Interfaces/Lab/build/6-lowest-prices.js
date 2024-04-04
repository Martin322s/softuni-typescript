"use strict";
function lowestPrices(input) {
    let result = [];
    let lowestPriceProducts = [];
    for (let product of input) {
        let [town, name, priceAsString] = product.split(' | ');
        let price = Number(priceAsString);
        let productObj = { town, name, price };
        result.push(productObj);
    }
    for (let product of result) {
        if (!lowestPriceProducts.some(x => x.name === product.name)) {
            lowestPriceProducts.push(product);
        }
        else {
            let element = lowestPriceProducts.find(x => x.name === product.name);
            let index = lowestPriceProducts.indexOf(element);
            if (element.price > product.price) {
                lowestPriceProducts.splice(index, 1, product);
            }
        }
    }
    lowestPriceProducts.forEach(x => console.log(`${x.name} -> ${x.price} (${x.town})`));
}
lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
    'New York | Sample Product | 999',
]);
