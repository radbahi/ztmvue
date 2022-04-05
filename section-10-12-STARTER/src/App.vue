<template>
	<div id="app">
		<!-- v-slot or # gives us access to the data in the HelloWorld component -->
		<!-- we can also destruct which is how im pulling user -->
		<hello-world #default="{user, favorites}">
			<p>Hello {{ user.name }}. I like {{ favorites[0] }}.</p></hello-world
		>
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld,
	},
};
</script>
