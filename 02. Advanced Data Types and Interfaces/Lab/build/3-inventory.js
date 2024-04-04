"use strict";
function heroInventory(input) {
    let result = [];
    for (let hero of input) {
        let [heroName, levelAsString, ...items] = hero.split(' / ');
        let level = Number(levelAsString);
        let heroObj = { heroName, level, items };
        result.push(heroObj);
    }
    let sortedResult = result.sort((a, b) => a.level - b.level);
    sortedResult.forEach(hero => {
        console.log(`Hero: ${hero.heroName}
            level => ${hero.level}
            Items => ${hero.items.join(', ')}`);
    });
}
heroInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
