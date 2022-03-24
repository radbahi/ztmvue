<template>
	<app-form>
		<!-- v-slot tells the child where this slot content should be placed. only works with template tags -->
		<template v-slot:help>
			<p>{{ help }}</p>
		</template>
		<template v-slot:fields>
			<input type="text" placeholder="email" />
			<input type="text" placeholder="username" />
			<input type="password" placeholder="password" />
		</template>
		<template v-slot:buttons><button type="submit">Submit</button></template>
		<p>Default text</p>
	</app-form>
	<app-form>
		<template v-slot:help><p>Contact help text.</p></template>
		<template v-slot:fields>
			<input type="text" placeholder="name" />
			<input type="text" placeholder="message" />
		</template>
		<template v-slot:buttons>
			<button type="submit">Submit</button>
		</template>
	</app-form>
</template>

<script>
// form is already an html tag so we import the form component as AppForm to avoid conflicts
import AppForm from "./components/Form.vue";
export default {
	name: "App",
	components: {
		AppForm,
	},
	data() {
		return {
			help: "This is some help text.",
		};
	},
};
</script>
