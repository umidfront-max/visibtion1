<template>
	<header
		class="w-full flex justify-between items-center px-6 py-3 shadow bg-white"
	>
		<router-link to="/" class="!text-purple-600 font-bold text-xl"
			>LOGO</router-link
		>
		<div class="flex items-center gap-4">
			<!-- Theme toggle -->
			<button
				id="theme-toggle"
				class="theme-toggle p-2 rounded-full transition"
				@click="toggleTheme"
				:aria-label="theme"
			>
				<svg
					class="sun-and-moon"
					aria-hidden="true"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<mask class="moon" id="moon-mask">
						<rect x="0" y="0" width="100%" height="100%" fill="white" />
						<circle cx="24" cy="10" r="6" fill="black" />
					</mask>
					<circle
						class="sun"
						cx="12"
						cy="12"
						r="6"
						mask="url(#moon-mask)"
						fill="currentColor"
					/>
					<g class="sun-beams" stroke="currentColor">
						<line x1="12" y1="1" x2="12" y2="3" />
						<line x1="12" y1="21" x2="12" y2="23" />
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
						<line x1="1" y1="12" x2="3" y2="12" />
						<line x1="21" y1="12" x2="23" y2="12" />
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
					</g>
				</svg>
			</button>
    
			<div v-if="route.path == '/login' " class="flex items-center gap-2">
				<span class="text-gray-600">Don't have an account?</span>
				<div class="relative group">
					<router-link
						to="/signup"
						class="!text-purple-600 active:!text-green-500 hover:!text-green-500 transition"
					>
						Sign Up
					</router-link>
				</div>
			</div>
			<div v-else class="flex items-center gap-2">
				<span class="text-gray-600">Already have an account?</span>
				<div class="relative group">
					<router-link
						to="/login"
						class="!text-purple-600 active:!text-green-500 hover:!text-green-500 transition"
					>
						Login
					</router-link>
				</div>
			</div>
		</div>
	</header>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const storageKey = "theme-preference";
const theme = ref(localStorage.getItem(storageKey) || "light");
const route = useRoute()
function toggleTheme() {
	theme.value = theme.value === "light" ? "dark" : "light";
	localStorage.setItem(storageKey, theme.value);
	document.documentElement.setAttribute("data-theme", theme.value);
}
</script>

<style scoped>
.theme-toggle {
	color: #9333ea;
	transition: color 0.3s ease;
}
.theme-toggle:hover {
	color: #22c55e;
}

/* Quyosh-oy icon animatsiyasi login.vue bilan bir xil */
.sun-and-moon > :is(.moon, .sun, .sun-beams) {
	transform-origin: center;
}
.sun-and-moon > :is(.moon, .sun) {
	fill: currentColor;
}
.sun-and-moon > .sun-beams {
	stroke: currentColor;
	stroke-width: 2px;
}
[data-theme="dark"] .sun-and-moon > .sun {
	transform: scale(1.75);
}
[data-theme="dark"] .sun-and-moon > .sun-beams {
	opacity: 0;
}
[data-theme="dark"] .sun-and-moon > .moon > circle {
	transform: translateX(-7px);
}
@supports (cx: 1) {
	[data-theme="dark"] .sun-and-moon > .moon > circle {
		cx: 17;
		transform: translateX(0);
	}
}
</style>
