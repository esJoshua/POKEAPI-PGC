<template>
  <div>
    <Fieldset :legend="fieldsetLegend" class="mx-6 border-900">
      <div class="grid text-left mt-0 justify-content-between">
        <ListPokeData
          v-for="(pokemon, index) in dataPokemon"
          :key="index"
          :pokemon="pokemon"
        />
      </div>
    </Fieldset>
    <div class="ml-6 mt-3">
      <Button
        class="p-button-outlined p-button-plain button--radius"
        @click="previous()"
        v-if="offsetParams"
        >Anterior</Button
      >
      <Button
        class="p-button-secondary button--radius"
        :class="{ 'ml-3': offsetParams }"
        @click="next()"
        >Siguiente</Button
      >
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ListPokeData from "@/components/ListPokeData";
import { getUrlParams } from "@/composables/getUrlParams";

export default {
  name: "ListPokeComp",
  components: {
    ListPokeData,
  },
  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const fieldsetLegend = "Lista de Pokemones";
    const store = useStore();

    const dataPokemon = computed(() => {
      return store.state.pokemon.pokeDataList;
    });
    const offsetParams = computed(() => {
      return store.state.pokemon.urlParams.offset;
    });

    return { ...getUrlParams(), fieldsetLegend, offsetParams, dataPokemon };
  },
};
</script>

<style scoped>
:deep(.p-fieldset .p-fieldset-legend) {
  margin-left: 2rem;
  border: none;
  background-color: var(--surface-0);
}

:deep(.p-button.p-component.p-button-secondary) {
  background: var(--surface-600);
  border-color: var(--surface-600);
}
:deep(.p-button:enabled:focus) {
  background-color: var(--surface-600);
  border-color: var(--surface-600);
  color: var(--surface-0);
}
</style>
