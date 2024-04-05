class Pokemon {
    constructor(
        public name: string,
        public element: string,
        public health: number
    ) {}
}

class Trainer {
    public badges: number = 0;
    public pokemons: Pokemon[] = [];

    constructor(public name: string) {}

    addPokemon(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }

    checkElement(element: string): void {
        let found = this.pokemons.some(p => p.element === element && p.health > 0);
        if (found) {
            this.badges += 1;
        } else {
            this.pokemons.forEach(p => p.health -= 10);
            this.pokemons = this.pokemons.filter(p => p.health > 0);
        }
    }

    getPokemonCount(): number {
        return this.pokemons.length;
    }
}

class PokemonTrainerRegistry {
    private trainers: Map<string, Trainer> = new Map<string, Trainer>();

    addPokemonToTrainer(input: string): void {
        let [trainerName, pokemonName, pokemonElement, pokemonHealth] = input.split(" ");
        let health = parseInt(pokemonHealth);
        if (!this.trainers.has(trainerName)) {
            this.trainers.set(trainerName, new Trainer(trainerName));
        }
        const trainer = this.trainers.get(trainerName)!;
        trainer.addPokemon(new Pokemon(pokemonName, pokemonElement, health));
    }

    runTournament(commands: string[]): void {
        commands.forEach(command => {
            if (command !== "End") {
                this.trainers.forEach(trainer => {
                    trainer.checkElement(command);
                });
            }
        });
    }

    printResults(): void {
        Array.from(this.trainers.values())
            .sort((a, b) => b.badges - a.badges || a.name.localeCompare(b.name))
            .forEach(trainer => {
                console.log(`${trainer.name} ${trainer.badges} ${trainer.getPokemonCount()}`);
            });
    }
}

const registry = new PokemonTrainerRegistry();
registry.addPokemonToTrainer("Peter Charizard Fire 100");
registry.addPokemonToTrainer("George Squirtle Water 38");
registry.addPokemonToTrainer("Peter Pikachu Electricity 10");
registry.addPokemonToTrainer("Sam Blastoise Water 18");
registry.addPokemonToTrainer("Narry Pikachu Electricity 22");
registry.addPokemonToTrainer("John Kadabra Psychic 90");

// Start of the tournament
registry.runTournament([
    "Tournament",
    "Fire",
    "Electricity",
    "Fire",
    "End"
]);

// Print the results
registry.printResults();