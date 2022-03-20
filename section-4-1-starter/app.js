let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },

  template: `{{message}}`,

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
});

vm.mount("#app");
