<template>
  <div class="col-12 md:col-6 grid justify-content-center mt-0 w-100 md:w-5">
    <p class="col-6 text-sm sm:text-xl capitalize font-semibold">
      {{ pokemon.name }}
    </p>
    <Button
      class="px-5 bg-cyan-500 button--radius"
      label="Info"
      @click="displayPokemon(pokemon.url)"
    ></Button>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "ListPokeData",
  props: {
    pokemon: {
      type: Object,
      default: () => {},
    },
  },
  components: {},
  setup() {
    const store = useStore();
    const displayPokemon = (url) => {
      store.dispatch("pokemon/getPokemon", url);
    };
    return { displayPokemon };
  },
};
</script>
