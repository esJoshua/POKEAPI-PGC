export default {
  SET_PAGE(state, payLoad) {
    state.page = payLoad;
  },
  SET_URL_PARAMS(state, payLoad) {
    state.urlParams.offset = payLoad;
  },
  SET_POKEMON_LIST(state, payLoad) {
    state.pokeDataList = payLoad;
  },
  ADD_POKEMON_TABLE(state, payLoad) {
    state.pokeDataTable.push(payLoad);
  },
  REMOVE_POKEMON_TABLE(state, payLoad) {
    const index = state.pokeDataTable.findIndex(
      (item) => item.id == payLoad.id
    );
    state.pokeDataTable.splice(index, 1);
  },
  ADD_FAVORITE(state, payLoad) {
    //** TO AVOID REPEATED POKÉMONS BEFORE PUSH TO STATE *//
    let indexOfRepeatedPokemon = state.favPokemons.findIndex(
      (pokemon) => pokemon.id == payLoad.id
    );
    indexOfRepeatedPokemon < 0
      ? state.favPokemons.push(payLoad)
      : console.log(payLoad.name, "Ya existe en favoritos");
  },
};
