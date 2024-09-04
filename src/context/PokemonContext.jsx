import { createContext, useState } from "react";
import {
  formatAbilities,
  formatStats,
  formatTypes,
  getEvolutions,
  getPokemonDescription,
  getImageByPokemon
} from "../helpers/pokemon";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [showDetailPokemon, setShowDetailPokemon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showPokemon = async (pokemonInfo) => {
    setIsLoading(true);

    const dataQuery = await fetch(pokemonInfo.species.url);
    const dataSpecies = await dataQuery.json();

    const dataQuery2 = await fetch(dataSpecies.evolution_chain.url);
    const dataEvolution = await dataQuery2.json();

    const { id, name, height, weight, stats, types, abilities } = pokemonInfo;
    const evolutions = await getEvolutions(dataEvolution);

    setPokemonDetail({
      id,
      name,
      height,
      weight,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbilities(abilities),
      description: getPokemonDescription(dataSpecies),
      evolutions,
      image: getImageByPokemon(pokemonInfo.sprites),
    });
    setShowDetailPokemon(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const closePokemonDetail = () => {
    setShowDetailPokemon(false);
  };

  return (
    <PokemonContext.Provider
      value={{
        showDetailPokemon,
        showPokemon,
        closePokemonDetail,
        pokemonDetail,
        isLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };