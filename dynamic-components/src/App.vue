<template>
	<select v-model="componentName">
		<!-- these values change the componentName -->
		<option value="Home">Home</option>
		<option value="About">About</option>
	</select>
	<!-- the component tag allows you to load a component dynamically -->
	<!-- we are pointing to the imported component names being selected through the dropdown menu to render -->
	<!-- keep in mind that the data in these components get reset if changed. check console when changing -->
	<!-- wrapping component with keep-alive prevents unmounting. saves the component to memory -->
	<keep-alive>
		<component :is="componentName"></component>
	</keep-alive>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
	name: "App",
	components: {
		Home,
		About,
	},
	data() {
		return {
			componentName: "Home",
		};
	},
};
</script>
