<template>
	<form>
		<!-- slots are a way to pass markup from parent to child. look at the form component in App.vue -->
		<!-- identify which parts of your component are unique and leave that to be handled with slots -->
		<div class="help">
			<!-- by giving a slot a name, we have more control on where slot content is placed -->
			<slot name="help"></slot>
		</div>
		<div class="fields">
			<slot name="fields"></slot>
		</div>
		<div class="buttons">
			<slot name="buttons"></slot>
		</div>
		<!-- any elements with no name assigned get moved to this default slot with no name -->
		<slot></slot>
	</form>
</template>

<script>
export default {
	name: "form-vue",
};
</script>
