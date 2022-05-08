import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import "../node_modules/primeflex/primeflex.css";

const app = createApp(App);
app.use(store).use(router).use(PrimeVue);
/* eslint-disable */
app.component("Fieldset", FieldSet);
app.component("Menubar", Menubar);
app.component("Button", Button);
app.component("DataTable", DataTable);
app.component("Column", Column);

app.mount("#app");

app.mount("#app");
