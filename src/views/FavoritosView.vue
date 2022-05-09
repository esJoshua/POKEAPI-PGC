<template>
  <div class="container--view pb-4">
    <h1 class="ml-6 mt-8 font-light">{{ title }}</h1>
    <div class="mt-4 grid justify-content-evenly">
      <FavoritosCard
        v-for="pokemon in favPokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FavoritosCard from "@/components/FavoritosCard";

export default {
  name: "FavoritosView",
  components: {
    FavoritosCard,
  },
  setup() {
    const { state } = useStore();
    const title = "Tus Favoritos";

    const favPokemons = computed(() => {
      return state.pokemon.favPokemons;
    });
    return { favPokemons, title };
  },
};
</script>

<style>
.p-fieldset-content {
  text-align: center;
}
</style>
