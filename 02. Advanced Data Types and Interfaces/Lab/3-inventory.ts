type Hero = {
    heroName: string,
    level: number,
    items: string[]
};

function heroInventory(input: string[]): void {
    let result: Hero[] = [];

    for (let hero of input) {
        let [heroName, levelAsString, ...items] = hero.split(' / ');
        let level = Number(levelAsString);
        let heroObj: Hero = { heroName, level, items };
        result.push(heroObj);
    }

    let sortedResult: Hero[] = result.sort((a, b) => a.level - b.level);

    sortedResult.forEach(hero => {
        console.log(`
            Hero: ${hero.heroName}
            level => ${hero.level}
            Items => ${hero.items.join(', ')}`);
    });
}