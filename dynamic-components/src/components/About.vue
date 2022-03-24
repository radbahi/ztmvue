<template>
	<h1>About page</h1>
</template>

<script>
export default {
	name: "About-vue",
	unmounted() {
		console.log("About unmounted");
	},
	//if using keep-alive, this is the lifecycle hook to run code when switching on/off a dynamic component
	activated() {
		console.log("About activated");
	},
	deactivated() {
		console.log("About deactivated");
	},
};
</script>
