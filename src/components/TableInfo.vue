<template>
  <div>
    <DataTable
      :value="currentPokemon"
      responsiveLayout="scroll"
      :paginator="true"
      :rows="5"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 15, 30]"
      currentPageReportTemplate="Mostrando registros del {first} al {last} de un total de {totalRecords} registros."
      class="mx-6 mt-8 bg-white border-900"
      scrollHeight="520px"
      :scrollable="true"
    >
      <template #empty>
        <div class="text-900">{{ msgEmptyTable }}</div>
      </template>
      <Column field="favorite" header="Favorito" class="border-900">
        <template #body="slotProps">
          <Button
            class="bg-cyan-500 button--radius"
            @click="addFavorite(slotProps.data)"
          >
            AGREGAR
          </Button>
        </template>
      </Column>
      <Column field="name" header="Nombre" class="border-900 text-900">
      </Column>
      <Column field="height" header="Alto" class="border-900 text-900"></Column>
      <Column
        field="weight"
        header="Ancho"
        class="border-900 text-900"
      ></Column>
      <Column field="image" header="Imagen" class="border-900">
        <template #body="slotProps">
          <img :src="slotProps.data.image" class="h-5rem w-5rem" /> </template
      ></Column>
      <Column field="delete" header="Eliminar" class="border-900">
        <template #body="slotProps">
          <Button
            class="border-circle p-button-danger"
            @click="removePokemon(slotProps.data)"
            ><i class="pi pi-trash" style="font-size: 25px"></i
          ></Button> </template
      ></Column>
    </DataTable>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "TableInfoComp",
  setup() {
    const store = useStore();
    const msgEmptyTable = "No has seleccionado un pokémon.";

    const currentPokemon = computed(() => {
      return store.state.pokemon.pokeDataTable;
    });

    const addFavorite = (pokemon) => {
      store.commit("pokemon/ADD_FAVORITE", pokemon);
    };
    const removePokemon = (pokemon) => {
      store.commit("pokemon/REMOVE_POKEMON_TABLE", pokemon);
    };

    return {
      msgEmptyTable,
      currentPokemon,
      addFavorite,
      removePokemon,
    };
  },
};
</script>

<style scoped>
:deep(.p-datatable .p-datatable-thead > tr > th) {
  background: var(--surface-0);
  color: black;
}
:deep(.p-datatable .p-column-header-content) {
  width: 8rem;
}
:deep(.p-paginator-current) {
  font-size: x-small;
}
:deep(.p-datatable .p-paginator) {
  border-color: black;
}
</style>
