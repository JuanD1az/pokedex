import { useRef, useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const INITIAL_LIMIT = 40;
const INCREASE_LIMIT = 20;

export const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const targetObserver = useRef(null);
  const entry = useIntersectionObserver(targetObserver, {});
  const isVisible = !!entry?.isIntersecting;

  const pokemonsByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );

  const handleChangePokemonName = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const getAllPokemons = async() => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000")
    const data = await res.json();
    setAllPokemons(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    const maxPokemons = pokemonsByName.length;
    if (isVisible && maxPokemons !== 0) {
      const newLimit = limit + INCREASE_LIMIT;
      newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit);
    }
  }, [isVisible]);

  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [pokemonName]);

  return (
    <section className="relative">
      <header className="flex flex-row items-center mb-6 space-x-4">
				<svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="fill-current h-10 w-10 text-red-500" viewBox="0 0 512.000000 514.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,514.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M2310 5126 c-371 -40 -690 -141 -1002 -317 -348 -195 -665 -488 -881 -814 -241 -363 -400 -810 -424 -1192 l-6 -103 676 0 677 0 4 23 c58 274 109 398 242 577 300 407 848 582 1328 425 316 -103 564 -314 711 -605 55 -109 72 -159 104 -300 l27 -115 644 -3 c355 -1 660 0 679 3 l34 6 -7 77 c-76 885 -618 1680 -1415 2077 -204 101 -467 192 -649 225 -241 43 -541 57 -742 36z"/> <path d="M2365 3495 c-334 -74 -609 -327 -715 -660 -31 -97 -40 -345 -16 -462 60 -296 266 -546 558 -675 133 -59 203 -70 403 -65 150 3 178 7 240 29 171 62 285 135 415 269 107 111 185 250 226 409 21 78 23 328 4 430 -56 305 -304 582 -620 692 -140 48 -358 63 -495 33z"/> <path d="M0 2381 c0 -86 29 -281 61 -410 84 -340 238 -669 441 -943 83 -112 368 -399 492 -497 340 -265 747 -439 1196 -508 162 -25 568 -25 730 0 439 68 881 254 1198 506 444 352 754 807 906 1330 48 165 96 431 96 532 l0 39 -674 0 c-396 0 -677 -4 -680 -9 -4 -5 -15 -51 -26 -103 -24 -119 -46 -181 -103 -293 -170 -338 -489 -584 -842 -650 -71 -14 -129 -16 -280 -13 -170 4 -200 8 -280 32 -257 77 -490 238 -644 445 -120 162 -178 301 -236 569 l-5 22 -675 0 -675 0 0 -49z"/> </g> </svg>
        <h1 className=" text-4xl font-bold">Pokedex</h1>
      </header>
      <form>
        <div className="bg-white p-4 pl-6 flex rounded-2xl shadow-md text-lg">
          <input className="outline-none flex-1" type="text" autoComplete="off" placeholder="Search your Pokemon" name="pokemonName" onChange={handleChangePokemonName} />
          <button type="button" className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors">
            <img src="/pokeball-icon.png" alt="" className="w-5 h-5"/>
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName.slice(0, limit)} />

      <span ref={targetObserver} className="absolute bottom-[2%]"></span>
    </section>
  )
}
