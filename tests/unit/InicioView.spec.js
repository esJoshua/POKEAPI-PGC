import { shallowMount } from "@vue/test-utils";
import InicioView from "@/views/InicioView.vue";

describe("InicioView.vue", () => {
  test("Test the presence of the class 'h-screen'", () => {
    const wrapper = shallowMount(InicioView);
    expect(wrapper.classes()).toContain("h-screen");
  });
});
