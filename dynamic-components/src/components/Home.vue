<template>
	<h1>Home page</h1>
</template>

<script>
export default {
	name: "Home-vue",
	unmounted() {
		console.log("Home unmounted");
	},
	//if using keep-alive, this is the lifecycle hook to run code when switching on/off a dynamic component
	activated() {
		console.log("Home activated");
	},
	deactivated() {
		console.log("Home deactivated");
	},
};
</script>
