import { Pokemons } from "../components/Pokemons";
import { Aside } from "../components/Aside";
import ModalPokemon from "../components/ModalPokemon";
import usePokemonContext from "../hooks/usePokemonContext";


export const PokedexPage = () => {
  const { showDetailPokemon, closePokemonDetail, pokemonDetail, isLoading } = usePokemonContext();

  return (
    <main className="max-w-screen-xl mx-auto px-4 xl:px-0">
      <section className="w-full gap-5 grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemons />
        <Aside pokemon={pokemonDetail} isLoading={isLoading} />
        <ModalPokemon
          showModal={showDetailPokemon}
          onCloseModal={closePokemonDetail}
          pokemon={pokemonDetail}
        />
      </section>
    </main>

  )
}
