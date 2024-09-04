import { useEffect, useState } from "react";
import { colorByType, bgByType } from "../constants/pokemon";
import '../index.css';

const PokemonPreview = ({ pokemonURL, onClick }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async() => {
    const res = await fetch(pokemonURL)
    const data = await res.json();
    setPokemon(data);
  };

  useEffect(() => {
    getPokemon();
    
  }, []);

  return (
    <article
    onClick={() => onClick(pokemon)}
    className={`${ bgByType[pokemon?.types[0].type.name] } rounded-[30px] relative font-semibold capitalize p-4 shadow-md cursor-pointer group gap-2 flex`}
  >
    <div className="p-4 w-full max-w-[60%] z-20">
      <h4 className="text-lg mb-2 break-words text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">{pokemon?.name}</h4>
      <ul className="flex flex-col gap-2 text-center">
        {pokemon?.types.map((type) => (
          <li
            className={`shadow-md p-1 rounded-md px-2 text-white text-sm ${
              colorByType[type.type.name]
            }`}
            key={type.type.name}
          >
            {type.type.name}
          </li>
        ))}
      </ul>
    </div>
    <div className="h-full flex justify-center items-center overflow-hidden z-20">
      <img
        className="group-hover:scale-110 transition-transform"
        src={
          pokemon?.sprites.other["official-artwork"].front_default
        }
        alt=""
      />
    </div>
    <span className="right-0 top-0 p-4 px-6 absolute opacity-60 text-slate-50 text-2xl z-10 w-full flex justify-end">N° {pokemon?.id}</span>
  </article>
  );
};
export default PokemonPreview;