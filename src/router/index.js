import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/InicioView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pokemones",
    name: "pokemones",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PokemonesView.vue"),
  },
  {
    path: "/favoritos",
    name: "favoritos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FavoritosView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
