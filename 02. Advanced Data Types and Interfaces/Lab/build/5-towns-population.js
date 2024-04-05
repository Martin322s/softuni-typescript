"use strict";
function townPopulation(input) {
    let resultObj = {};
    for (let town of input) {
        let [name, populationAsString] = town.split(' <-> ');
        let population = Number(populationAsString);
        if (!resultObj[name]) {
            resultObj[name] = population;
        }
        else {
            resultObj[name] += population;
        }
    }
    for (let key in resultObj) {
        console.log(`${key} : ${resultObj[key]}`);
    }
}
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Montana <-> 1'
]);
