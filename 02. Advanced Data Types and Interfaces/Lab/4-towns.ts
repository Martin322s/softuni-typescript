type Town = {
    name: string,
    latitude: string,
    longitude: string
};

function towns(input: string[]) {
    let result: Town[] = [];

    for (let town of input) {
        let [name, longitudeAsString, latitudeAsString] = town.split(' | ');
        let longitude = Number(longitudeAsString).toFixed(2);
        let latitude = Number(latitudeAsString).toFixed(2);

        let townObj: Town = { name, longitude, latitude };
        result.push(townObj);
    }

    result.forEach(town => console.log(town));
}