<template>
  <TheNavBar />

  <router-view />
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";

export default {
  name: "App",
  components: {
    TheNavBar,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
