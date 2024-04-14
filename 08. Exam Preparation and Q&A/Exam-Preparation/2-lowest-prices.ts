type Product = {
    townName: string,
    productName: string, 
    price: number
}

function lowestPrices(input: string[]): void {
    let result: Product[] = [];

    for (let product of input) {
        let [townName, productName, priceAsString] = product.split(' | ');
        let price: number = Number(priceAsString);
        let productFound: Product | undefined = result.find(x => x.productName === productName);
        
        if (productFound) {
            if (productFound.price > price) {
                let index: number = result.indexOf(productFound);
                result.splice(index, 1, { townName, productName, price });
            }
        } else {
            result.push({ townName, productName, price });
        }
    }

    result
        .forEach((x: Product) => console.log(`${x.productName} -> ${x.price} (${x.townName})`));
}