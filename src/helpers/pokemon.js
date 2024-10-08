import { getEvolutionsData } from "../services/pokemonServices";


const formatHeight = (height) => {
  return (
    (height / 10) + 'm'
  );
};

const formatWeight = (weight) => {
  return (
    (weight / 10) + 'kg'
  );
};

const formatStats = (stats) => {
  const nameTypes = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SpA",
    "special-defense": "SpD",
    speed: "SPD",
  };
  const newStats = stats.map(({ stat, base_stat }) => ({
    name: nameTypes[stat.name],
    base_stat,
  }));

  newStats.push({
    name: "TOT",
    base_stat: newStats.reduce((acc, stat) => stat.base_stat + acc, 0),
  });

  return newStats;
};

const getImageByPokemon = (sprites) => {
  return (
    sprites.other["official-artwork"].front_default
  );
};

const formatTypes = (types) => types.map((type) => type.type.name);

const formatAbilities = (abilities) =>
  abilities.map((ability) => ability.ability.name);

const getPokemonDescription = (pokemonSpecie) => {
  let texto = '';
  for (let i = 0; i < pokemonSpecie.flavor_text_entries.length; i++){
    if(pokemonSpecie.flavor_text_entries[i].language.name == 'es'){
      texto = pokemonSpecie.flavor_text_entries[i].flavor_text;
      break;
    }
  }
  if(texto){
    return texto;
  }
  return pokemonSpecie.flavor_text_entries[1].flavor_text;
}
  
const getEvolutions = async (evolutionInfo) => {
  const evolutions = [];
  let evolutionData = evolutionInfo.chain;
  
  do {
    const evoDetails = evolutionData["evolution_details"][0];
    evolutions.push({
      name: evolutionData.species.name,
      
      min_level: evoDetails?.min_level ?? 1,
    });

    evolutionData = evolutionData.evolves_to[0];
  } while (evolutionData);

  const promises = getEvolutionsData(evolutions);
  try {
    const responses = await Promise.allSettled(promises);
    assignInfoToEvolutions(responses, evolutions);
  } catch (err) {
    console.log(err);
  }

  return evolutions;
};

const assignInfoToEvolutions = (responses, evolutions) => {
  responses.forEach((response, index) => {
    if (response.status === "fulfilled") {
      evolutions[index].image =
        response.value.sprites.other["official-artwork"].front_default;
      evolutions[index].pokemonInfo = response.value;
    }
  });
};

export {
  formatHeight,
  formatWeight,
  formatStats,
  formatTypes,
  formatAbilities,
  getPokemonDescription,
  getEvolutions,
  assignInfoToEvolutions,
  getImageByPokemon
};