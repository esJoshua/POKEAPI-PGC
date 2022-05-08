<template>
  <div class="container--view pb-4">
    <ListPoke />

    <TableInfo />
  </div>
</template>

<script>
import ListPoke from "@/components/ListPoke";
import TableInfo from "@/components/TableInfo";

export default {
  name: "PokemonesView",
  components: {
    ListPoke,
    TableInfo,
  },
};
</script>

<style>
.button--radius {
  border-radius: 10px;
}
</style>
