import { useStore } from "vuex";

export function getUrlParams() {
  const store = useStore();

  let page = store.state.pokemon.page;
  //* GETTING URL PARAMS TO LOAD PREVIOUS PAGE *//
  const previous = () => {
    //console.log("Page:", page);
    const previousOffset = (--page - 1) * store.state.pokemon.urlParams.limit;
    store.commit("pokemon/SET_PAGE", page);
    store.commit("pokemon/SET_URL_PARAMS", previousOffset);
    store.dispatch("pokemon/getData");
  };
  //* GETTING URL PARAMS TO LOAD NEXT PAGE *//
  const next = () => {
    const nextOffset = page++ * store.state.pokemon.urlParams.limit;
    //console.log("Page:", page);
    store.commit("pokemon/SET_PAGE", page);
    store.commit("pokemon/SET_URL_PARAMS", nextOffset);
    store.dispatch("pokemon/getData");
  };
  return { page, previous, next };
}
