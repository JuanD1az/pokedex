import PokemonDetail from "./PokemonDetail";

const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  return (
    <section
      className={`fixed lg:hidden top-0 left-0 right-0 h-screen transition-all duration-500 z-40 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } backdrop-blur-md bg-black/70`}
    >
      <button
        onClick={onCloseModal}
        className="absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-10 w-10 text-white" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </button>
      <article
        className={`bg-white h-[85%] absolute w-full rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${
          showModal ? "bottom-0" : "-bottom-full"
        }`}
      >
        <PokemonDetail pokemon={pokemon} />
      </article>
    </section>
  );
};
export default ModalPokemon;