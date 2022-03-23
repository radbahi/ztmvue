<template>
  <p v-if="age >= 25">{{ msg }}</p>
  <p v-else>You must be 25 years or older to view this message</p>
</template>

<script>
export default {
  // name is used to identify components within the vue devtools on the browser
  // vue requires names to be multi-word to prevent conflicts with html. doesn't apply to file names(?)
  name: "Greeting-vue",
  props: ["age"],
  data() {
    return {
      msg: "Hello World!",
    };
  },
};
</script>

<style scoped lang="scss">
// lang is set to use sass
// using scoped binds the styles defined below to this component only instead of globally

$color: red;

p {
  color: $color;
}
</style>
