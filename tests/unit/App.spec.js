import { shallowMount } from "@vue/test-utils";
import store from "@/store/index";
import router from "@/router";
import App from "@/App.vue";
import TheNavBar from "@/components/TheNavBar.vue";

describe("App.vue", () => {
  test("TheNavBar component's exist", async () => {
    router.push("/");
    const wrapper = shallowMount(App, {
      global: { plugins: [store, router] },
    });
    expect(wrapper.findComponent(TheNavBar).exists()).toBe(true);
  });
});
