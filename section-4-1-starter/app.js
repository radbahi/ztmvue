let vm = Vue.createApp({
  // template: ``,
});

vm.component("hello", {
  template: `<h1>{{message}}</h1>`,
  data() {
    return {
      message: "Hello World!",
    };
  },
});

vm.mount("#app");

// vm2 does NOT use the vue compiler. the version without the compiler is more lightweight and runs faster...
// but we have to write our own render functions

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!",
//     };
//   },
//   //by creating our own render function, we don't use the compiler
//   render() {
//     //h is short for hyperscripts
//     return Vue.h("h1", this.message);
//   },
// }).mount("#app2");

// ------------------------------------------------LIFECYCLE AND VIRTUAL DOM STUFF-------------------------------------------

//https://vuejs.org/guide/essentials/lifecycle.html lifecycle
//https://vuejs.org/guide/extras/rendering-mechanism.html virtual DOM
//https://vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity reactivity with vue
// beforeCreate() {
//   console.log("beforeCreate() function called!", this.message);
// },
// created() {
//   console.log("created() function called!", this.message);
// },
// beforeMount() {
//   console.log("beforeMount() function called!", this.$el);
// },
// mounted() {
//   console.log("mounted() function called!", this.$el);
// },
// beforeUpdate() {
//   console.log("beforeUpdate() function called!");
// },
// updated() {
//   console.log("updated() function called!");
// },
// beforeUnmount() {
//   console.log("beforeUnmount() function called!");
// },
// unmounted() {
//   console.log("unmounted() function called!");
// },
