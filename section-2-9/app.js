const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
  //methods is where we define functions for our app
  methods: {
    //arrow functions can mess up vue's proxy mechanisms, so stick to regular function for now
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount(".app");

// setTimeout(() => {
//   vm.firstName = "Bob";
//   //we don't need to call $data specifically, because vue uses a proxy to get that data
// }, 2000);
