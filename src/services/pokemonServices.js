
const getEvolutionsData = (evolutions) => {
  return evolutions.map(
    async (evolution) => {
      const responseEvo = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolution.name}/`);
      return await responseEvo.json();
    }
  );
};


export { getEvolutionsData };