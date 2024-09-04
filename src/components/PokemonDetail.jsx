import { colorByStat, colorByType, bgByType } from "../constants/pokemon";
import Evolutions from "./Evolutions";

const PokemonDetail = ({ pokemon }) => {
  return (
    <>
      <header className="absolute left-1/2 -translate-x-1/2 -translate-y-[60%] scale-[90%] md:scale-[45%] lg:scale-[90%] xl:-translate-y-[72%] xl:scale-[120%] z-20">
        <img src={pokemon?.image} alt="" />
      </header>
      <div className={`rounded-tl-3xl space-y-4 rounded-tr-3xl overflow-y-auto px-4 pt-16 grid gap-2 content-start h-full hidden-scroll ${bgByType[pokemon?.types[0]]}`}>
        <div className="space-y-2">
          <span className="opacity-60 text-slate-50 text-2xl font-semibold">
            N° {pokemon?.id}
          </span>
          <h2 className="text-white font-bold text-2xl capitalize drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">{pokemon?.name}</h2>
          <ul className="flex gap-2 justify-center capitalize font-semibold">
            {pokemon?.types.map((type) => (
              <li className={`shadow-md p-1 rounded-md px-4 text-white text-sm ${colorByType[type]}`} key={type} >
                {type}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white">
          <h4 className="pb-2 font-bold capitalize drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Pokedex Entry</h4>
          <p className="text-slate-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">{pokemon?.description}</p>
        </div>
        {/* Altura y peso */}
        <section className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <h4 className="font-bold capitalize text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Height</h4>
            <span className="bg-slate-100 block rounded-full p-1 text-sm font-semibold">0.7m</span>
          </div>
          <div className="grid gap-2">
            <h4 className="font-bold capitalize text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Weight</h4>
            <span className="bg-slate-100 block rounded-full p-1 text-sm font-semibold">6.9kg</span>
          </div>
        </section>
        {/* Habilidades */}
        <section className="grid gap-2">
          <h4 className="font-bold capitalize text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Abilities</h4>
          <ul className="grid grid-cols-2 gap-4">
            {pokemon?.abilities.map((ability) => (
              <li
                key={ability}
                className="bg-slate-100 block rounded-full p-1 capitalize text-sm font-semibold"
              >
                <span>{ability}</span>
              </li>
            ))}
          </ul>
        </section>
        {/* Stats */}
        <section className="grid gap-2">
          <h4 className="font-bold capitalize text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Stats</h4>
          <ul className="flex justify-center gap-3 flex-wrap">
            {pokemon?.stats.map((stat) => (
              <li
                className={`p-1 rounded-full ${colorByStat[stat.name]}`}
                key={stat.name}
              >
                <div className="bg-green-500 rounded-full w-[26px] aspect-square grid place-content-center">
                  <span className="text-[10px] text-white font-semibold">
                    {stat.name}
                  </span>
                </div>
                <span className="font-bold text-xs">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="grid gap-2 pb-6">
          <h4 className="font-bold capitalize text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Evolutions</h4>
          <Evolutions evolutions={pokemon?.evolutions ?? []} />
        </section>
      </div>
    </>
  );
};
export default PokemonDetail;