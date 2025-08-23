<template>
	<div
		class="min-h-screen flex flex-col transition-colors duration-300"
		:class="
			theme === 'dark'
				? 'bg-black/70 text-white'
				: 'bg-[#F5F5F5] text-gray-900'
		"
	>
		<!-- Header -->
		<header
			class="w-full flex justify-between items-center px-6 py-3 shadow transition-colors duration-300"
			:class="theme === 'dark' ? 'bg-black/30' : 'bg-white'"
		>
			<img
				src="../assets/img/logo.jpeg"
				class="w-auto h-10 object-contain"
			/>

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
							<rect
								x="0"
								y="0"
								width="100%"
								height="100%"
								fill="white"
							/>
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

				<div>
					<span
						:class="theme === 'dark' ? 'text-gray-300' : 'text-gray-600'"
					>
						Don't have an account?
					</span>
					<router-link
						to="/signup"
						class="ml-2 text-purple-600 hover:text-green-500 hover:underline transition"
					>
						Sign up
					</router-link>
				</div>
			</div>
		</header>

      
		<!-- Form -->
		<div class="flex-grow flex items-center flex-col justify-center px-4">
         <!-- Back to home -->
         <router-link to="/" class="flex items-center gap-2 my-4 mx-auto">
            <img src="@/assets/img/home1.svg" alt="home-icon" class="h-6" />
            <span
               class="!text-purple-600 mt-1 font-medium transition-colors duration-300 hover:!text-green-500"
            >
               Back to Home
            </span>
         </router-link>
			<div
				class="rounded-2xl shadow-lg p-8 w-full max-w-md transition-colors duration-300"
				:class="
					theme === 'dark'
						? 'bg-gray-300 text-white'
						: 'bg-white text-gray-900'
				"
			>
				<!-- Title -->
				<div class="flex items-center gap-2 mb-6">
					<img class="h-7" src="@/assets/img/log2.svg" alt="" />
					<h2 class="text-2xl font-bold text-purple-600">Login</h2>
				</div>

				<!-- Form inputs -->
				<form @submit.prevent="handleSubmit" class="space-y-4">
					<!-- Username -->
					<div class="relative w-full">
						<Gmail class="absolute left-3 top-4 text-purple-500" />
						<input
							v-model="username"
							id="username"
							type="text"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pl-10 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
							:class="
								theme === 'dark'
									? 'bg-gray-700 text-white border-gray-500'
									: ''
							"
						/>
						<label
							for="username"
							class="absolute left-10 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							Username or Email
						</label>
					</div>

					<!-- Password -->
					<div class="relative w-full">
						<Password class="absolute left-3 top-4 text-purple-500" />
						<input
							v-model="password"
							id="password"
							:type="showPassword ? 'text' : 'password'"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pl-10 pr-10 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
							:class="
								theme === 'dark'
									? 'bg-gray-700 text-white border-gray-500'
									: ''
							"
						/>
						<label
							for="password"
							class="absolute left-10 top-1 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							Password
						</label>
						<span
							class="absolute right-3 top-3.5 cursor-pointer text-gray-500"
							@click="showPassword = !showPassword"
						>
							<i
								:class="
									showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
								"
							></i>
						</span>
					</div>

					<!-- Remember + Forgot -->
					<div class="flex items-center justify-between">
						<label class="flex items-center gap-2 cursor-pointer">
							<input type="checkbox" v-model="remember" class="hidden" />
							<div
								:class="[
									'w-10 h-6 rounded-full p-1 transition',
									remember
										? 'bg-green-500'
										: theme === 'dark'
										? 'bg-gray-600'
										: 'bg-gray-300',
								]"
							>
								<div
									:class="[
										'w-4 h-4 rounded-full shadow transform transition',
										remember ? 'translate-x-4' : '',
										theme === 'dark' ? 'bg-gray-200' : 'bg-white',
									]"
								></div>
							</div>
							<span
								class="text-sm"
								:class="
									theme === 'dark' ? 'text-black/80' : 'text-gray-600'
								"
							>
								Remember me
							</span>
						</label>
						<div class="group relative">
							<router-link
								to="/login"
								class="!text-purple-600 !font-semibold hover:!text-green-500 active:!text-green-500 transition text-sm"
							>
								Forgot password?
							</router-link>
							<span
								class="absolute left-0 bottom-0 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full group-active:w-full"
							></span>
						</div>
					</div>

					<!-- Login button -->
					<button
						type="submit"
						:class="loading && '!py-2'"
						class="w-full h-12.5 flex items-center justify-center rounded-lg text-xl font-bold border border-purple-600 transition-all ease-in-out duration-500 hover:bg-green-500 active:bg-green-500 hover:border-green-500 active:border-green-500 hover:text-white active:text-white hover:cursor-pointer bg-purple-600 text-white"
					>
						<span v-if="!loading">Login</span>
						<Loader v-else />
					</button>

					<!-- Social login -->
					<div class="flex flex-col gap-3 mt-4">
						<Google />
						<Facebook1 />
						<LinkedIn />
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Gmail from "@/components/icons/gmail.vue";
import Password from "@/components/icons/password.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
import Facebook1 from "@/components/icons/Facebook1.vue";
import Google from "@/components/icons/Google.vue";
import Loader from "@/components/Loader.vue";

const router = useRouter();
const username = ref("");
const password = ref("");
const remember = ref(false);
const showPassword = ref(false);
const loading = ref(false);
const error = ref(false);

// Theme logic
const storageKey = "theme-preference";
const theme = ref(getColorPreference());

function getColorPreference() {
	if (localStorage.getItem(storageKey))
		return localStorage.getItem(storageKey);
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function setPreference() {
	localStorage.setItem(storageKey, theme.value);
	document.documentElement.setAttribute("data-theme", theme.value);
}

function toggleTheme() {
	theme.value = theme.value === "light" ? "dark" : "light";
	setPreference();
}

onMounted(() => {
	setPreference();
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", ({ matches: isDark }) => {
			theme.value = isDark ? "dark" : "light";
			setPreference();
		});
});

// Form submit
const handleSubmit = () => {
	error.value = false;
	if (!username.value || !password.value) {
		error.value = true;
		return;
	}
	loading.value = true;
	setTimeout(() => {
		loading.value = false;
		router.push("/");
	}, 1500);
};
</script>

<style scoped>
.theme-toggle {
	color: #9333ea;
	transition: color 0.3s ease;
}
.theme-toggle:hover {
	color: #22c55e;
}

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

/* Animatsiya */
@media (prefers-reduced-motion: no-preference) {
	.sun-and-moon > .sun {
		transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	.sun-and-moon > .sun-beams {
		transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
			opacity 0.5s ease;
	}
	.sun-and-moon .moon > circle {
		transition: transform 0.25s cubic-bezier(0.19, 1, 0.22, 1);
	}
	@supports (cx: 1) {
		.sun-and-moon .moon > circle {
			transition: cx 0.25s cubic-bezier(0.19, 1, 0.22, 1);
		}
	}
	[data-theme="dark"] .sun-and-moon > .sun {
		transition-timing-function: ease;
		transition-duration: 0.25s;
		transform: scale(1.75);
	}
	[data-theme="dark"] .sun-and-moon > .sun-beams {
		transition-duration: 0.15s;
		transform: rotateZ(-25deg);
	}
	[data-theme="dark"] .sun-and-moon > .moon > circle {
		transition-duration: 0.5s;
		transition-delay: 0.25s;
	}
}
</style>
