<template>
	<div class="min-h-screen bg-[#F5F5F5] flex flex-col">
		<!-- Header -->
		<header
			class="w-full flex justify-between items-center px-6 py-4 bg-white shadow"
		>
			<div class="font-bold text-xl text-purple-600">LOGO</div>
			<div>
				<span class="text-gray-600">Don't have an account?</span>
				<router-link
					to="/signup"
					class="ml-2 text-purple-600 hover:text-green-500 hover:underline transition"
				>
					Sign up
				</router-link>
			</div>
		</header>

		<!-- Form -->
		<div class="flex-grow flex items-center justify-center px-4">
			<div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
				<!-- Title -->
				<div class="flex items-center gap-2 mb-6">
					<!-- <lord-icon
						src="https://cdn.lordicon.com/dxjqoygy.json"
						trigger="loop"
						colors="primary:#6a0dad,secondary:#00c853"
						style="width: 40px; height: 40px"
					/> -->
					<img class="h-7" src="@/assets/img/logins.svg" alt="" />
					<h2 class="text-2xl font-bold text-purple-600">Login</h2>
				</div>

				<!-- Form inputs -->
				<form @submit.prevent="handleSubmit" class="space-y-4">
					<!-- Username -->
					<div class="relative w-full">
						<!-- <span class="absolute left-3 top-4 text-purple-500"> -->
						<Gmail class="absolute left-3 top-4 text-purple-500" />
						<!-- </span> -->
						<input
							v-model="username"
							id="username"
							type="text"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pl-10 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							for="username"
							class="absolute left-10 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							Username or Email
						</label>
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
							:type="showPassword ? 'text' : 'password'"
							placeholder=" "
							class="peer block w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pl-10 pr-10 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
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
						<p
							v-if="error && !password"
							class="text-red-500 text-xs mt-1"
						>
							Please enter password
						</p>
					</div>

					<!-- Remember + Forgot -->
					<div class="flex items-center justify-between">
						<label class="flex items-center gap-2 cursor-pointer">
							<input type="checkbox" v-model="remember" class="hidden" />
							<div
								:class="[
									'w-10 h-6 rounded-full p-1 transition',
									remember ? 'bg-green-500' : 'bg-gray-300',
								]"
							>
								<div
									:class="[
										'w-4 h-4 bg-white rounded-full shadow transform transition',
										remember ? 'translate-x-4' : '',
									]"
								></div>
							</div>
							<span class="text-sm text-gray-600">Remember me</span>
						</label>

						<router-link
							to="/login"
							class="!text-purple-600 !font-semibold hover:!text-green-500 active:!text-green-500 active:!underline hover:!underline transition text-sm"
						>
							Forgot password?
						</router-link>
					</div>

					<!-- Login button -->
					<button
						type="submit"
						class="w-full flex items-center justify-center py-2 rounded-lg bg-purple-600 text-white font-semibold transition hover:bg-green-500"
					>
						<span v-if="!loading">Login</span>
						<div
							v-else
							class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
						></div>
					</button>

					<!-- Social login -->
					<div class="flex flex-col gap-3 mt-4">
						<Google />
						<LinkedIn />
						<Facebook />
					</div>
				</form>

				<!-- Sign up bottom -->
				<div class="text-center mt-4">
					<router-link
						to="/login"
						class="!text-purple-600 !font-extrabold active:!underline hover:!underline active:!text-green-500 hover:!text-green-500 transition"
					>
						Sign Up
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Gmail from "@/components/icons/gmail.vue";
import Password from "@/components/icons/password.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Google from "@/components/icons/Google.vue";
const router = useRouter();
const username = ref("");
const password = ref("");
const remember = ref(false);
const showPassword = ref(false);
const loading = ref(false);
const error = ref(false);

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

const socialLogin = (provider) => {
	loading.value = true;
	setTimeout(() => {
		loading.value = false;
		router.push("/");
	}, 1200);
};
</script>

<style scoped>
.social-btn {
	position: relative;
	padding: 10px 15px;
	border-radius: 25px;
	font-weight: 600;
	border: 1px solid;
	overflow: hidden;
	cursor: pointer;
	transition: color 0.3s ease-out;
	background: transparent;
}

.social-btn::before {
	content: "";
	position: absolute;
	inset: 0;
	margin: auto;
	border-radius: 50%;
	display: block;
	width: 20em;
	height: 20em;
	left: -5em;
	transition: box-shadow 0.5s ease-out;
	z-index: -1;
}

/* GOOGLE */
.social-btn.google {
	color: #db4437;
	border-color: #db4437;
}
.social-btn.google:hover {
	color: #fff;
}
.social-btn.google:hover::before {
	box-shadow: inset 0 0 0 10em #db4437;
}

/* FACEBOOK */
.social-btn.facebook {
	color: #1877f2;
	border-color: #1877f2;
}
.social-btn.facebook:hover {
	color: #fff;
}
.social-btn.facebook:hover::before {
	box-shadow: inset 0 0 0 10em #1877f2;
}

/* LINKEDIN */
.social-btn.linkedin {
	color: #0077b5;
	border-color: #0077b5;
}
.social-btn.linkedin:hover {
	color: #fff;
}
.social-btn.linkedin:hover::before {
	box-shadow: inset 0 0 0 10em #0077b5;
}
</style>
