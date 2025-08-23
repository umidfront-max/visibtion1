<template>
	<div class="min-h-screen flex flex-col bg-[#F5F5F5] text-gray-900">
		<!-- Header -->
		<LayoutHeader />

		<!-- Form -->
		<div class="flex-grow flex items-center flex-col justify-center px-4 mt-4">
			<div class="rounded-2xl shadow-lg p-8 w-full max-w-md bg-white text-gray-900">
				<!-- Title -->
				<div class="flex items-center gap-2 mb-6">
					<img class="h-7" src="@/assets/img/log2.svg" alt="logo" />
					<h2 class="text-2xl font-bold text-purple-600">Forgot password</h2>
				</div>

				<p class="text-sm text-gray-600 mb-6">
					Enter your email below to receive a password reset link.
				</p>

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
						>
							Email address
						</label>
						<p v-if="error && !email" class="text-red-500 text-xs mt-1">
							Please enter your email
						</p>
					</div>

					<!-- Reset button -->
					<button
						type="submit"
						:class="loading && '!py-4'"
						class="w-full h-12.5 flex items-center justify-center rounded-lg text-xl font-bold border border-purple-600 transition-all ease-in-out duration-500 hover:bg-green-500 active:bg-green-500 hover:border-green-500 active:border-green-500 hover:text-white active:text-white hover:cursor-pointer bg-purple-600 text-white"
					>
						<span v-if="!loading">Reset Password</span>
						<Loader v-else />
					</button>

					<!-- Go back -->
					<div class="flex justify-center items-center text-center mt-4">
						<div class="relative group">
							<router-link
								to="/login"
								class="!text-purple-600 !font-semibold active:!text-green-500 hover:!text-green-500 transition"
							>
								or Go Back
							</router-link>
							<span
								class="absolute left-0 bottom-0 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full group-active:w-full"
							></span>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Gmail from "@/components/icons/gmail.vue";
import Loader from "@/components/Loader.vue";
import LayoutHeader from "../components/LayoutHeader.vue";

const router = useRouter();
const email = ref("");
const loading = ref(false);
const error = ref(false);

// Form submit
const handleSubmit = () => {
	error.value = false;
	if (!email.value) {
		error.value = true;
		return;
	}
	loading.value = true;
	setTimeout(() => {
		loading.value = false;
		// Success bo'lsa, masalan reset link yuborilgan degan sahifa qilish mumkin
		alert("Password reset link sent to your email!");
		router.push("/login");
	}, 1500);
};
</script>
