import { createStore } from "vuex";
import pokemon from "./pokemon";
import auth from "./auth";

export default createStore({
  modules: {
    pokemon,
    auth,
  },
});
