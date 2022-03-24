<template>
  <button type="button" @click="onClickAge">Increase Age Event</button>
  <button type="button" @click="ageChangeFn(3)">Increase Age CB</button>

  <p>The user is {{ age }} years old</p>
  <p>{{ ageDoubled }} is your age doubled</p>
</template>

<script>
export default {
  name: "User-vue",
  //below is how to pull in props from a parent component and use validation for those props. you CANNOT mutate props without using emit
  props: {
    age: {
      type: Number,
      //   required: true, required not necessary if there's a default key
      //    default: 20
      validator(value) {
        //custom validator. this runs before the component instance is created, so you can't access data, computed, or methods options in here
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  //the emits option helps vue document what the component does. also gets rid of a warning in the console
  emits: ["age-change"],
  computed: {
    ageDoubled() {
      //every prop is accessible directly with the "this" keyword
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      //$emit lets the parent component know that the child component is going to change props
      this.$emit("age-change", 3);
    },
  },
};
</script>

<style></style>
