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
};
