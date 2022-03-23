<template>
  <button type="button" @click="onClickAge">Increase Age</button>

  <p>The user is {{ age }} years old</p>
  <p>{{ ageDoubled }} is your age doubled</p>
</template>

<script>
export default {
  name: "User-vue",
  //below is how to pull in props from a parent component. you CANNOT mutate props without using emit
  props: ["age"],
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
