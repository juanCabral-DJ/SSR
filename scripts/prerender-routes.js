(async () => {
  const fs = require("fs");
  const pokemonId = Array.from({ length: 151 }, (_, i) => i + 1);

  let filecontent = pokemonId.map(
    id => `/pokemons/${id}`
  ).join("\n");

  const pokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30`)
    .then(res => res.json());

  filecontent += "\n"
  filecontent += pokemonList.results.map(
    pokemon => `/pokemons/${pokemon.name}`
  ).join("\n")


  fs.writeFileSync("routes.txt", filecontent)

})();
