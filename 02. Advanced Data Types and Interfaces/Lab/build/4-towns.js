"use strict";
function towns(input) {
    let result = [];
    for (let town of input) {
        let [name, longitudeAsString, latitudeAsString] = town.split(' | ');
        let longitude = Number(longitudeAsString).toFixed(2);
        let latitude = Number(latitudeAsString).toFixed(2);
        let townObj = { name, longitude, latitude };
        result.push(townObj);
    }
    result.forEach(town => console.log(town));
}
