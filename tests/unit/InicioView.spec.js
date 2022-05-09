import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import InicioView from "@/views/InicioView.vue";
import FavoritosView from "@/views/FavoritosView.vue";

test("Sanity test", () => {
  expect(true).toBe(true);
});

describe("InicioView.vue", () => {
  test("test the presence of the class 'h-screen'", () => {
    const wrapper = mount(InicioView);
    expect(wrapper.classes()).toContain("h-screen");
  });

  test("renders a component via routing", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/favoritos",
          name: "FavoritosView",
          component: FavoritosView,
        },
      ],
    });
    router.push("/favoritos");
    await router.isReady();
    const wrapper = mount(InicioView, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent(InicioView).exists()).toBe(true);
  });
});
