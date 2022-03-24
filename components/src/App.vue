<template>
  <h3>Hey!</h3>
  <!-- age below is how to send down props to a child component. always remember to bind -->
  <greeting :age="age"></greeting>
  <!-- @age-change below listens to the method in that component with the same name. we're making it increment age here -->
  <!-- remember that age gets updated for any other child components as well -->
  <user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></user>
</template>

<script>
import Greeting from "./components/Greeting.vue";
import User from "./components/User.vue";

export default {
  // name is used to identify components within the vue devtools on the browser
  name: "App",
  //below is how to register a component locally. don't forget to import the component within the script tag
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      //age is set here so multiple child components can depend on and use it
      age: 20,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      //alternative way to pass data to parent component from child with a callback func, but vue recommends using emit events
      this.age += num;
    },
  },
};
</script>
