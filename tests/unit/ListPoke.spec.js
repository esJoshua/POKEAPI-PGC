import { mount } from "@vue/test-utils";
import store from "@/store/index";
import ListPoke from "@/components/ListPoke.vue";

describe("ListPoke.vue", () => {
  test("uses vuex urlParams state", async () => {
    const wrapper = mount(ListPoke, {
      global: { plugins: [store] },
    });
    expect(wrapper.html()).toContain("Lista de Pokemones");
  });
});
