<template>
  <div class="w-7 md:w-5">
    <Fieldset
      :legend="pokemon.name"
      fieldset-content="text-center"
      class="border-900"
    >
      <img :src="pokemon.image" :alt="pokemon.name" class="h-10rem w-10rem" />
    </Fieldset>
  </div>
</template>

<script>
export default {
  name: "CardPokeComp",
  props: {
    pokemon: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
:deep(.p-fieldset .p-fieldset-legend) {
  margin-left: 2rem;
  border: none;
  background-color: var(--surface-0);
}
</style>
