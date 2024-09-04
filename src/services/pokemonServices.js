
const getEvolutionsData = (evolutions) => {
  return evolutions.map(
    async (evolution) => {
      const test = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolution.name}/`);
      return await test.json();
    }
  );
};


export { getEvolutionsData };