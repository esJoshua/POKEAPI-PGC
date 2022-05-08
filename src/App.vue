<template>
  <TheNavBar />

  <router-view />
</template>

<script>
import { useStore } from "vuex";
import TheNavBar from "@/components/TheNavBar.vue";

export default {
  name: "App",
  components: {
    TheNavBar,
  },
  setup() {
    const store = useStore();
    (() => {
      store.dispatch("pokemon/getData");
    })();
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container--view {
  margin-top: 8rem;
}
</style>
