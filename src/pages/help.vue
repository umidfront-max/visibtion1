<script setup>
import Navbar from "@/components/Navbar.vue";
import Foot from "@/components/Foot.vue";
import { ref } from "vue";

const searchQuery = ref("");

const helpLinks = ref([
	{
		title: "Getting Started",
		url: "/help/#",
		icon: "https://intercom.help/bio-link/assets/svg/icon:comms-mail/1c1a1c",
	},
	{
		title: "Account Management",
		url: "/help/#",
		icon: "https://intercom.help/bio-link/assets/svg/icon:tools-edit/1c1a1c",
	},
	{
		title: "Pricing & Billing",
		url: "/help/#",
		icon: "https://intercom.help/bio-link/assets/svg/icon:tools-setting2/1c1a1c",
	},
	{
		title: "Privacy & Security",
		url: "/help/#",
		icon: "https://intercom.help/bio-link/assets/svg/icon:tools-dashboard/1c1a1c",
	},
	{
		title: "Report an Issue",
		url: "/help/#",
		icon: "https://intercom.help/bio-link/assets/svg/icon:book-library/1c1a1c",
	},
	{
		title: "Terms and privacy",
		url: "/help/#",
		icon: "https://intercom.help/bio-link/assets/svg/icon:tools-locked/1c1a1c",
	},
]);
</script>

<template>
	<div class="min-h-screen flex flex-col justify-between">
		<!-- Navbar -->
		<div class="fixed top-0 z-40 w-full bg-transparent pt-2 max-md:pt-5">
			<div class="container">
				<Navbar />
			</div>
		</div>

		<!-- Header with animated gradient -->
		<header class="relative overflow-hidden">
			<div
				class="hero-gradient py-24 md:py-36 flex flex-col items-center justify-center"
			>
				<h1
					class="text-3xl md:text-5xl text-center font-bold text-white drop-shadow-sm mb-6"
				>
					Help Center
				</h1>

				<!-- Search input -->
				<div class="relative border !border-white rounded-lg w-full max-w-xl mx-auto max-xl:!w-4/5">
					<input
						v-model="searchQuery"
						type="text"
						id="helpSearch"
						placeholder=" "
						class="peer block w-full rounded-lg border border-gray-300 bg-white py-4 px-4 text-gray-700 text-sm shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all"
					/>
					<label
						for="helpSearch"
						class="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-green-500 peer-focus:text-xs"
					>
						Search articles...
					</label>
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

		<!-- Help cards -->
		<main class="container py-12">
			<div class="grid gap-6 w-4/5 mx-auto max-md:my-6 max-sm:gap-4 max-md:w-full">
				<router-link
					:to="link.url"
					v-for="(link, index) in helpLinks"
					:key="index"
					class="bg-white rounded-lg p-6 max-sm:p-4 hover:shadow border border-black/10 hover:border-black/40 transition-shadow duration-300 flex items-center justify-between cursor-pointer"
				>
					<div class="flex items-center gap-6 max-sm:gap-4">
						<img :src="link.icon" alt="icon" class="w-8 h-8" />
						<div>
							<div
								class="text-lg font-semibold text-black/70 hover:text-green-500"
							>
								{{ link.title }}
							</div>
							<p class="text-gray-500 text-sm mt-1">
								Lorem ipsum dolor sit amet.
							</p>
						</div>
					</div>
					<img
						src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
						alt="arrow"
						class="w-5 h-5 opacity-50"
					/>
				</router-link>
			</div>
		</main>

		<Foot />
	</div>
</template>

<style scoped>
.hero-gradient {
	background: linear-gradient(120deg, #06ab4f, #6f33de, #06ab4f, #6f33de);
	background-size: 300% 300%;
	animation: gradientShift 8s ease-in-out infinite alternate;
}

@keyframes gradientShift {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 50% 50%;
	}
	100% {
		background-position: 100% 50%;
	}
}
</style>
