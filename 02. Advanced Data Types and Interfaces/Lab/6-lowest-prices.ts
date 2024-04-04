type Product = {
    name: string,
    price: number,
    town: string
};

function lowestPrices(input: string[]) {
    let result: Product[] = [];
    let lowestPriceProducts: Product[] | any[] = [];

    for (let product of input) {
        let [town, name, priceAsString] = product.split(' | ');
        let price = Number(priceAsString);

        let productObj: Product = { town, name, price };
        result.push(productObj);
    }

    for (let product of result) {
        if (!lowestPriceProducts.some(x => x.name === product.name)) {
            lowestPriceProducts.push(product);
        } else {
            let element = lowestPriceProducts.find(x => x.name === product.name);
            let index = lowestPriceProducts.indexOf(element);

            if (element.price > product.price) {
                lowestPriceProducts.splice(index, 1, product);
            }
        }
    }

    lowestPriceProducts.forEach(x => console.log(`${x.name} -> ${x.price} (${x.town})`));
}