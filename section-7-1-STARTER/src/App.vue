<template>
	<button type="button" @click="flag = !flag">Toggle</button>
	<!-- transition is used to wrap components you want to, well, use a transition with -->
	<!-- if setting transition duration in-element, vue will prioritize this over any duration set in css -->
	<!-- https://vuejs.org/guide/built-ins/transition.html -->
	<!-- <transition name="fade" mode="out-in">
		<h2 v-if="flag" key="main">Hello world!</h2>
		<h2 v-else key="secondary">Another hello!</h2>
	</transition> -->

	<!-- <transition name="zoom" type="animation" appear>
		appear makes animations play on mount
		<h2 v-if="flag">Hello</h2>
	</transition> -->

	<!-- using javascript for animations. web animations api -->
	<!-- https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API -->
	<!-- <transition
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
		name="fade"
		:css="true"
	>
		setting :css to false tells vue to not check if this is css everytime the anim plays, makes it more performant
		<h2 v-if="flag">Hey</h2>
	</transition> -->
	<button @click="addItem">Add</button>
	<ul>
		<!-- the animate__animated stuff comes from animate.css, a 3rd party library we enabled in index.html via cdn -->
		<transition-group
			name="fade"
			enter-active-class="animate__animated animate__flipInX"
			leave-active-class="animate__animated animate__flipOutX"
		>
			<li
				v-for="(number, index) in numbers"
				:key="number"
				@click="removeItem(index)"
			>
				{{ number }}
			</li>
		</transition-group>
	</ul>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			flag: true,
			numbers: [1, 2, 3, 4, 5],
		};
	},
	methods: {
		addItem() {
			const num = Math.floor(Math.random() * 100 + 1);
			const index = Math.floor(Math.random() * this.numbers.length);
			this.numbers.splice(index, 0, num);
		},
		removeItem(index) {
			this.numbers.splice(index, 1);
		},
		beforeEnter(el) {
			console.log("beforeEnter", el);
		},
		enter(el) {
			console.log("enter", el);
			// const animation = el.animate([{ transform: "scale3d(0,0,0)" }, {}], {
			// 	duration: 1000,
			// });

			// // done only works on enter and leave. its a func that tells vue the anim is finished
			// animation.onfinish = () => {
			// 	done();
			// };
		},
		afterEnter(el) {
			console.log("afterEnter", el);
		},
		beforeLeave(el) {
			console.log("beforeLeave", el);
		},
		leave(el) {
			console.log("leave", el);

			// const animation = el.animate([{}, { transform: "scale3d(0,0,0)" }], {
			// 	duration: 1000,
			// });

			// // done only works on enter and leave. its a func that tells vue the anim is finished
			// animation.onfinish = () => {
			// 	done();
			// };
		},
		afterLeave(el) {
			console.log("afterLeave", el);
		},
	},
};
</script>

<style>
.animate__flipOutX {
	/* this is how to override the defaults from animate.css */
	/* NOT WORKING */
	position: absolute;
}

.animate__animated {
	/* this is how to override the defaults from animate.css */
	/* NOT WORKING */
	animation-duration: 1.5s;
}

li {
	font-size: 22px;
	cursor: pointer;
}
h2 {
	width: 400px;
	padding: 20px;
	margin: 20px;
}

.fade-enter-from {
	opacity: 0;
}
.fade-enter-active {
	transition: all 1s linear;
}
.fade-enter-to {
	color: red;
}

.fade-leave-to {
	transition: all 1s linear;
	opacity: 0;
	color: yellow;
}

.fade-move {
	/* this moves the list items in an animation. vue knows to auto associate this with all elements named fade */
	transition: all 1s linear;
}

.fade-leave-active {
	/* this makes the animation of removing a list item play properly */
	position: absolute;
}

.zoom-enter-active {
	animation: zoom-in 1s linear forwards;
	transition: all 2s linear;
	/* if there's 2 different durations, vue will default to the longer one. */
	/* set type in the element's tag if you want to use the shorter one */
}
.zoom-leave-active {
	animation: zoom-out 1s linear forwards;
	transition: all 2s linear;
	/* if there's 2 different durations, vue will default to the longer one. */
	/* set type in the element's tag if you want to use the shorter one */
}

.zoom-enter-from {
	opacity: 0;
}

.zoom-leave-to {
	opacity: 0;
}

@keyframes zoom-in {
	from {
		transform: scale(0, 0);
	}
	to {
		transform: scale(1, 1);
	}
}
@keyframes zoom-out {
	from {
		transform: scale(1, 1);
	}
	to {
		transform: scale(0, 0);
	}
}
</style>
