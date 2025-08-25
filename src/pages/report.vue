<script setup>
import Navbar from "@/components/Navbar.vue";
import Foot from "@/components/Foot.vue";
import Loader from "@/components/Loader.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const name = ref("");
const email = ref("");
const bioLink = ref("");
const reportType = ref("");
const reason = ref("");
const loading = ref(false);
const error = ref(false);

const handleSubmit = () => {
	error.value = false;
	if (
		!name.value ||
		!email.value ||
		!bioLink.value ||
		!reportType.value ||
		!reason.value
	) {
		error.value = true;
		return;
	}
	loading.value = true;
	setTimeout(() => {
		loading.value = false;
		alert("Report submitted successfully!");
		router.push("/");
	}, 1500);
};
</script>

<template>
	<div class="min-h-screen flex flex-col justify-between bg-[#F5F5F5]">
		<div class="fixed top-0 z-40 bg-transparent pt-2 max-md:pt-5 w-full">
			<div class="container">
				<Navbar />
			</div>
		</div>
		<header class="relative overflow-hidden" aria-label="Help header">
			<div
				class="hero-gradient pt-32 pb-8 md:py-24 md:pb-6 flex flex-col items-center justify-center"
				role="img"
				aria-label="Animated gradient background"
			>
				<h1
					class="text-3xl text-center md:text-5xl font-bold leading-tight text-white drop-shadow-sm mb-6"
				>
					Report
				</h1>

			</div>
		</header>
		<div
			class="flex-grow flex items-center flex-col justify-center px-4 my-12"
		>
			<div
				class="rounded-2xl shadow-lg p-8 w-full max-w-md bg-white text-gray-900"
			>
				<!-- Title -->
				<div class="flex items-center gap-2 mb-6">
					<img class="h-7" src="@/assets/img/rep.svg" alt="" />
					<h2 class="text-2xl font-bold text-purple-600">
						Report a Violation
					</h2>
				</div>

				<p class="text-sm text-gray-600 mb-4">
					Please use the form below to report a violation or an account you
					think we should review. You can view our
					<router-link
						to="/terms"
						class="!text-purple-600 hover:!text-green-500 font-semibold"
						>Terms of Use</router-link
					>.
				</p>

				<!-- Form inputs -->
				<form @submit.prevent="handleSubmit" class="space-y-4 mt-4">
					<!-- Name -->
					<div class="relative w-full">
						<input
							v-model="name"
							id="name"
							type="text"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pt-6 pb-2 px-3 text-sm text-gray-700 placeholder-transparent shadow-sm transition focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							for="name"
							class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							Your name
						</label>
						<p v-if="error && !name" class="text-red-500 text-xs mt-1">
							Please enter your name
						</p>
					</div>

					<!-- Email -->
					<div class="relative w-full">
						<input
							v-model="email"
							id="email"
							type="email"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pt-6 pb-2 px-3 text-sm text-gray-700 placeholder-transparent shadow-sm transition focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							for="email"
							class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							Your email
						</label>
						<p v-if="error && !email" class="text-red-500 text-xs mt-1">
							Please enter a valid email
						</p>
					</div>

					<!-- Bio Link page -->
					<div class="relative w-full">
						<input
							v-model="bioLink"
							id="bioLink"
							type="text"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pt-6 pb-2 px-3 text-sm text-gray-700 placeholder-transparent shadow-sm transition focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							for="bioLink"
							class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							Bio Link page you are reporting *
						</label>
						<p v-if="error && !bioLink" class="text-red-500 text-xs mt-1">
							Please enter a Bio Link page
						</p>
					</div>

					<div class="relative w-full">
						<!-- Select -->
						<select
							v-model="reportType"
							id="reportType"
							class="peer block w-full appearance-none rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pt-6 pb-2 pl-4 pr-10 text-sm text-gray-700 shadow-sm transition focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						>
							<option value="" disabled selected hidden></option>
							<option>Spam, fraud and phishing</option>
							<option>Copyright (DMCA)</option>
							<option>Hate speech</option>
							<option>Adult content without notice</option>
							<option>Illegal services</option>
							<option>Privacy and impersonation</option>
							<option>Other</option>
						</select>

						<!-- Floating label -->
						<label
							for="reportType"
							class="absolute left-4 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600 top-1 text-sm"
							:class="reportType ? 'top-1 text-sm text-green-600' : ''"
						>
							Type of Report *
						</label>

						<!-- Custom dropdown arrow -->
						<div
							class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
						>
							<svg
								:class="[
									'h-5 w-5 text-gray-400 transition-transform duration-200',
									reportType
										? 'rotate-180 text-green-600'
										: 'rotate-0',
								]"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>

						<!-- Error message -->
						<p
							v-if="error && !reportType"
							class="text-red-500 text-xs mt-1"
						>
							Please select a type
						</p>
					</div>
					<!-- Why -->
					<div class="relative w-full">
						<textarea
							v-model="reason"
							id="reason"
							rows="3"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pt-6 pb-2 px-3 text-sm text-gray-700 placeholder-transparent shadow-sm transition focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						></textarea>
						<label
							for="reason"
							class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							Why are you reporting this page? *
						</label>
						<p v-if="error && !reason" class="text-red-500 text-xs mt-1">
							Please provide a reason
						</p>
					</div>

					<!-- Submit -->
					<button
						type="submit"
						:class="loading && '!py-4'"
						class="w-full h-12 flex items-center justify-center rounded-lg text-xl font-bold border border-purple-600 transition-all duration-500 hover:bg-green-500 active:bg-green-500 hover:border-green-500 active:border-green-500 hover:text-white active:text-white bg-purple-600 text-white"
					>
						<span v-if="!loading">Submit</span>
						<Loader v-else />
					</button>
				</form>
			</div>

			<!-- Back to home -->
			<router-link to="/" class="flex items-center gap-2 mt-4 mb-1 mx-auto">
				<img src="@/assets/img/home1.svg" alt="home-icon" class="h-6" />
				<span
					class="!text-purple-600 mt-1 font-medium transition-colors duration-300 hover:!text-green-500"
				>
					Back to Home
				</span>
			</router-link>
		</div>
		<Foot />
	</div>
</template>

<style scoped>
/* Анимированный градиент — ранглар: #06AB4F ва #6F33DE */
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
