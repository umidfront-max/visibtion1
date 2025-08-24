<script setup>
import Navbar from "@/components/Navbar.vue";
import Foot from "@/components/Foot.vue";
import { ref } from "vue";
const searchQuery = ref("");
const helpLinks = ref([
	{ title: "Getting Started", url: "#" },
	{ title: "Account Management", url: "#" },
	{ title: "Pricing & Billing", url: "#" },
	{ title: "Privacy & Security", url: "#" },
	{ title: "Report an Issue", url: "#" },
]);
</script>

<template>
	<div class="min-h-screen flex flex-col justify-between">
		<!-- Navbar -->
		<div class="fixed top-0 z-40 bg-transparent pt-2 max-md:pt-5 w-full">
			<div class="container">
				<Navbar />
			</div>
		</div>

		<!-- Header with gradient -->
		<header class="relative overflow-hidden" aria-label="Help header">
			<div
				class="hero-gradient py-24 md:py-36 flex flex-col items-center justify-center"
				role="img"
				aria-label="Animated gradient background"
			>
				<h1
					class="text-3xl text-center md:text-5xl font-bold leading-tight text-white drop-shadow-sm mb-6"
				>
					Help Center
				</h1>

				<div class="relative w-full max-w-xl mx-auto">
					<!-- Input field -->
					<input
						v-model="searchQuery"
						type="text"
						id="helpSearch"
						placeholder=" "
						class="peer block w-full rounded-lg !border !border-gray-300 bg-white py-4 px-4 text-gray-700 text-sm shadow-sm focus:!border-green-500 focus:ring-2 focus:!ring-green-500 focus:outline-none transition-all"
					/>
					<!-- Floating label -->
					<label
						for="helpSearch"
						class="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-green-500 peer-focus:text-xs"
					>
						Search articles...
					</label>
					<!-- Search icon -->
					<div
						class="pointer-events-none absolute inset-y-0 right-3 flex items-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-400 peer-focus:text-green-500 transition-colors"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</header>

		<!-- Help cards section -->
		<main class="container py-12">
			<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
				<div
					v-for="(link, index) in helpLinks"
					:key="index"
					class="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
				>
					<a
						:href="link.url"
						class="text-lg font-semibold text-gray-800 hover:text-green-500"
					>
						{{ link.title }}
					</a>
					<p class="mt-2 text-gray-500 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>
		</main>

		<Foot />
	</div>
</template>

<style scoped>
/* Gradient background */
.hero-gradient {
	background: linear-gradient(120deg, #06ab4f, #6f33de, #06ab4f);
	background-size: 200% 200%;
	animation: gradientShift 12s ease-in-out infinite alternate;
}

@keyframes gradientShift {
	0% {
		background-position: 0% 50%;
	}
	100% {
		background-position: 100% 50%;
	}
}
</style>
