<template>
	<div class="min-h-screen flex flex-col bg-[#F5F5F5] text-gray-900">
		<!-- Header -->
		<LayoutHeader />

		<!-- Form -->
		<div
			class="flex-grow flex items-center flex-col justify-center px-4 mt-4"
		>
			<div
				class="rounded-2xl shadow-lg p-8 w-full max-w-md bg-white text-gray-900"
			>
				<!-- Title -->
				<div class="flex items-center gap-2 mb-6">
					<img class="h-7" src="@/assets/img/avatar.svg" alt="avatar" />
					<h2 class="text-2xl font-bold text-purple-600">
						Create Account
					</h2>
				</div>

				<!-- Form inputs -->
				<form @submit.prevent="handleSubmit" class="space-y-4">
					<!-- Email -->
					<div class="relative w-full">
						<Gmail class="absolute left-3 top-4 text-purple-500" />
						<input
							v-model="email"
							id="email"
							type="email"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pl-10 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							for="email"
							class="absolute left-10 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
							>Email</label
						>
						<p v-if="error && !email" class="text-red-500 text-xs mt-1">
							Please enter email
						</p>
					</div>

					<!-- Username -->
					<div class="relative w-full">
						<img
							class="w-5 absolute left-3 top-4"
							src="@/assets/img/user.svg"
							alt=""
						/>
						<input
							v-model="username"
							id="username"
							type="text"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pl-10 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							for="username"
							class="absolute left-10 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
							>Username</label
						>
						<p
							v-if="error && !username"
							class="text-red-500 text-xs mt-1"
						>
							Please enter username
						</p>
					</div>

					<!-- Password -->
					<div class="relative w-full">
						<Password class="absolute left-3 top-4 text-purple-500" />
						<input
							v-model="password"
							id="password"
							:type="showPassword ? 'text' : 'password'"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pl-10 pr-10 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							for="password"
							class="absolute left-10 top-1 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
							>Password</label
						>
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
						<p
							v-if="error && !password"
							class="text-red-500 text-xs mt-1"
						>
							Please enter password
						</p>
					</div>

					<!-- Verify Code -->
					<div v-if="showCode" class="relative w-full mt-4">
						<input
							v-model="code"
							id="code"
							type="text"
							maxlength="6"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pl-3 pr-20 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							for="code"
							class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							6-digit Code
						</label>

						<!-- Resend button -->
						<button
							v-if="!ResLoad"
							type="button"
							class="!text-purple-600 absolute right-2 top-3 cursor-pointer text-base hover:text-green-500 font-medium"
							@click="resendCode"
						>
							Resend
						</button>
						<Loader v-else class="absolute right-5 top-2.5" />

						<!-- Help text -->
						<div class="mt-1 text-xs text-gray-500">
							<p>Enter the 6-digit code we sent to your email.</p>
							<p>If you don’t see it, check your spam folder.</p>
						</div>

						<!-- Error -->
						<p v-if="error && !code" class="text-red-500 text-xs mt-1">
							Please enter code
						</p>
					</div>

					<!-- Continue button -->
					<button
						type="submit"
						:class="loading && '!py-4'"
						class="w-full h-12.5 flex items-center justify-center rounded-lg text-xl font-bold border border-purple-600 transition-all ease-in-out duration-500 hover:bg-green-500 active:bg-green-500 hover:border-green-500 active:border-green-500 hover:text-white active:text-white hover:cursor-pointer bg-purple-600 text-white"
					>
						<span v-if="!loading">CONTINUE</span>
						<Loader v-else />
					</button>

					<!-- Or With -->
					<div class="flex items-center my-4">
						<hr class="flex-grow border-gray-300" />
						<span class="mx-2 text-gray-500">Or With</span>
						<hr class="flex-grow border-gray-300" />
					</div>

					<!-- Social login -->
					<div class="flex flex-col gap-3">
						<Google text="Signup with Google" />
						<Facebook1 text="Signup with Facebook" />
						<LinkedIn text="Signup with LinkedIn" />
					</div>

					<!-- Terms -->
					<p class="text-xs text-gray-500 mt-4 text-center">
						By signing up, you agree to our
						<router-link
							to="/terms"
							class="!text-purple-600 hover:!text-green-500 transition"
							>Terms of use</router-link
						>
						and
						<router-link
							to="/privacy-policy"
							class="!text-purple-600 hover:!text-green-500 transition"
							>Privacy Policy</router-link
						>.
					</p>
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
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Gmail from "@/components/icons/gmail.vue";
import Password from "@/components/icons/password.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
import Facebook1 from "@/components/icons/Facebook1.vue";
import Google from "@/components/icons/Google.vue";
import Loader from "@/components/Loader.vue";
import LayoutHeader from "../components/LayoutHeader.vue";

const router = useRouter();
const route = useRoute();
const email = ref("");
const username = ref(route.query.username || "");
const password = ref("");
const showPassword = ref(false);
const loading = ref(false);
const error = ref(false);
const showCode = ref(false);
const ResLoad = ref(false);
const code = ref("");

// Form submit
const handleSubmit = () => {
	error.value = false;

	// Step 1: validate form
	if (!showCode.value) {
		if (!email.value || !username.value || !password.value) {
			error.value = true;
			return;
		}
		// show code input
		loading.value = true;

		setTimeout(() => {
			loading.value = false;
			showCode.value = true;
		}, 1000);
		return;
	}

	// Step 2: validate code
	if (showCode.value) {
		if (!code.value) {
			error.value = true;
			return;
		}
		loading.value = true;
		setTimeout(() => {
			loading.value = false;
			router.push("/login");
		}, 1000);
	}
};

// resend code
const resendCode = () => {
	ResLoad.value = true;
	setTimeout(() => {
		ResLoad.value = false;
	}, 1000);
};
</script>
