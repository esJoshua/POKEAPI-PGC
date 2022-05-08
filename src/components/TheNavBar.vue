<template>
  <div class="absolute w-full top-0">
    <Menubar
      :model="items"
      class="justify-content-between py-3 px-6 surface-600 text-0 text-xl"
    >
      <template #start>
        <h1 class="text-lg md:text-2xl lg:text-6xl">{{ brandName }}</h1>
      </template>
    </Menubar>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TheNavbarComp",
  setup() {
    const brandName = "API-Pokémon";
    let items = ref([
      {
        label: "Inicio",
        to: "/",
      },
      {
        label: "Pokemones",
        to: "/pokemones",
      },
      {
        label: "Favoritos",
        to: "/favoritos",
      },
    ]);
    return { brandName, items };
  },
};
</script>

<style scoped>
@media screen and (min-width: 960px) {
  :deep(.p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link
      .p-menuitem-text) {
    color: var(--surface-0);
  }
}
:deep(.p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover) {
  background: none;
}
:deep(.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus) {
  box-shadow: none;
  border: none;
}
:deep(.p-menubar .p-menubar-button) {
  color: var(--surface-0);
}
</style>
