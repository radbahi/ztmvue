const vm = Vue.createApp({
  //the data property is used to store single values, objects, and arrays. NOT functions.
  data() {
    return {
      firstName: "John",
      middleName: '',
      lastName: "Doe",
      url: "https://google.com",
      age: 20,
    };
  },
  //methods is where we define functions for our app. we can make requests, update elements, etc.
  methods: {
    //arrow functions can mess up vue's proxy mechanisms, so stick to regular function for now
    increment() {
      this.age++;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value
    },
    updateLastName(msg, event) {
      //we can also use .prevent on the v-on directive in the html tag to do .preventDefault()
      // event.preventDefault();
      console.log(msg);
      this.lastName = event.target.value;
    },
  },
  //computed is where we would define functions that calculate a value. you must ALWAYS return a value. its more performant for calculations
  //computed functions do NOT use parentheses when being invoked in expressions
  computed: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
    },
  },
  //whenever a change occurs, you can run a function to execute additional logic, especially async tasks. not used often.
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20
      }, 3000)
    }
  }
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Bob";
//   //we don't need to call $data specifically, because vue uses a proxy to get that data
// }, 2000);
