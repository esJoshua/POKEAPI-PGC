import axios from "axios";
//** NOT FUNCTIONAL, DESCRIPTIVE ONLY *//
export default {
  namespaced: true,
  state: {
    email: "simulate@correo.com", //user
    password: "simulate", //user
    token: "",
  },

  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    //** SENDING LOGIN DATA - BACK END AUTHENTICATE & IF OK, CREATE JWT - RETURN JWT RESPONSE *//
    async getToken({ state, commit }) {
      const urlPostToken = state.URL_BASE;
      const config = {
        body: {
          email: state.email,
          password: state.password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const req = await axios.post(urlPostToken, config);
        const token = req.data.access_token;
        commit("SET_TOKEN", token);
        //localStorage.setItem('user', JSON.stringify(req.data)
      } catch (error) {
        console.log("Error al pedir el token", error);
      }
    },

    //* REQUEST DATA WITH JWT ON AUTHORIZATION HEADER - BACK END CHECK JWT & IF OK, AUTHORIZE USER *//
    //* RETURN RESPONSE BASED ON AUTHORITIES *//
    async getData({ commit, state }) {
      const token = state.token;
      //let user = JSON.parse(localStorage.getItem('user'))
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + token,
          //Authorization: "Bearer" + user.access_token,
        },
      };
      try {
        const req = await axios(
          state.URL_BASE,
          { params: state.urlParams },
          config
        );
        const data = await req.data;
        commit("SET_POKEMON_LIST", data.results);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
