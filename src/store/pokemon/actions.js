import axios from "axios";

//* GETTING DATA FROM API TO FILL LIST PAGE - DYNAMIC URL PARAMS  *//
export default {
  async getData({ commit, state }) {
    try {
      const req = await axios(state.BASE_URL, { params: state.urlParams });
      const data = await req.data;
      commit("SET_POKEMON_LIST", data.results);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  },

  //* GETTING DATA, JUST THE REQUIRED POKÉMON *//
  async getPokemon({ commit, state }, url) {
    try {
      const req = await axios(url);
      const data = await req.data;
      const infoPokemonTable = {
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        height: data.height,
        weight: data.weight,
        image: data.sprites.other?.dream_world?.front_default,
        id: data.id,
      };
      const isDuplicated = state.pokeDataTable.some(
        (pokemon) => pokemon.id === infoPokemonTable.id
      );
      if (!isDuplicated) commit("ADD_POKEMON_TABLE", infoPokemonTable);
    } catch (error) {
      console.error(error);
    }
  },
};
