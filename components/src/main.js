import { createApp } from "vue";
import App from "./App.vue";
// import Greeting from "./components/Greeting.vue";

const vm = createApp(App);

// vue requires names to be multi-word to prevent conflicts with html. doesn't apply to file names(?)
// any components defined here are global, but it makes it less performant for webpack. try to register components locally when possible
// vm.component("Greeting-vue", Greeting);

vm.mount("#app");
