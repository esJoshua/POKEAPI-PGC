import store from "@/store/index";
import { createStore } from "vuex";

describe("Vuex", () => {
  test("change page", () => {
    store.commit("pokemon/SET_PAGE", 2);
    expect(store.state.pokemon.page).toBe(2);
  });

  test("mutation delete the correct object", () => {
    const store = createStore({
      state: {
        pokeDataTable: [
          { name: "test1", id: 1 },
          { name: "test2", id: 2 },
          { name: "test3", id: 3 },
        ],
      },
      mutations: {
        REMOVE_POKEMON_TABLE(state, payLoad) {
          const index = state.pokeDataTable.findIndex(
            (item) => item.id == payLoad.id
          );
          state.pokeDataTable.splice(index, 1);
        },
      },
    });
    store.commit("REMOVE_POKEMON_TABLE", { name: "test2", id: 2 });
    expect(store.state.pokeDataTable).toStrictEqual([
      { name: "test1", id: 1 },
      { name: "test3", id: 3 },
    ]);
  });
});
