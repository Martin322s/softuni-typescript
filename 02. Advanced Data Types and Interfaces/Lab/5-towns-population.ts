type TownPopulation = {
    [key: string]: number
}

function townPopulation(input: string[]) {
    let resultObj: TownPopulation = {};

    for (let town of input) {
        let [name, populationAsString] = town.split(' <-> ');
        let population = Number(populationAsString);

        if (!resultObj[name]) {
            resultObj[name] = population;
        } else {
            resultObj[name] += population;
        }
    }

    for (let key in resultObj) {
        console.log(`${key} : ${resultObj[key]}`);
    }
}