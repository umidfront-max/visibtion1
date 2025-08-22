<script setup lang="ts">
import { ref } from "vue";

const imgSrc = ref(`/logo-bg.svg?t=${Date.now()}`);
const _formData = ref({
	username: "",
	password: "",
});

const login = () => {
	console.log("Kirish:", _formData.value);
};
</script>

<template>
	<div class="grid grid-cols-1 md:grid-cols-2 h-screen">
		<!-- Left Side -->
		<div class="flex flex-col justify-center px-8 md:px-16 bg-white">
		
			<!-- Form -->
			<section class="w-full md:w-3/4 mx-auto">
				<h1
					class="font-semibold mb-8 text-[#191970] text-3xl md:text-4xl text-center md:text-left"
				>
					Login
				</h1>

				<!-- Username -->
				<div class="relative w-full mb-6">
					<input
						v-model="_formData.username"
						id="username"
						type="text"
						placeholder=" "
						class="peer block w-full rounded-lg border border-[#93c5fd] !bg-[#eff3f5]/50 px-3 pt-6 pb-2 text-sm !text-gray placeholder-transparent shadow-sm transition-all duration-300 focus:border-[#1e40af] focus:!bg-[#1e40af]/10 focus:ring-2 focus:!ring-[#1e40af] focus:outline-none hover:!border-[#60a5fa]"
					/>
					<label
						for="username"
						class="absolute left-3 top-1 text-[#191970] text-sm font-medium transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#191970] peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#191970]"
					>
						Login
					</label>
				</div>

				<!-- Password -->
				<div class="relative w-full mb-6">
					<input
						v-model="_formData.password"
						id="password"
						type="password"
						placeholder=" "
						class="peer block w-full rounded-lg border border-[#93c5fd] !bg-[#eff3f5]/50 px-3 pt-6 pb-2 text-sm !text-gray placeholder-transparent shadow-sm transition-all duration-300 focus:border-[#1e40af] focus:!bg-[#1e40af]/10 focus:ring-2 focus:!ring-[#1e40af] focus:outline-none hover:!border-[#60a5fa]"
					/>
					<label
						for="password"
						class="absolute left-3 top-1 text-[#191970] text-sm font-medium transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#191970] peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#191970]"
					>
						Parol
					</label>
				</div>

				<!-- Submit -->
				<button
					@click="login"
					class="w-full h-12 rounded-xl cursor-pointer font-inter-600 mt-2 !bg-[#1e40af] hover:!bg-[#081c5e] transition-all duration-300 shadow-md hover:shadow-lg text-white"
				>
					<i class="ri-login-circle-line mr-2"></i>
					Enter
				</button>
			</section>
		</div>

		<!-- Right Side -->
		<div
			class="hidden md:flex items-center justify-center bg-gradient-to-br from-[#191970] via-[#000080] to-[#4b0082]"
		>
			<img
				class="max-h-[80%] px-10 drop-shadow-xl"
				:src="imgSrc"
				alt="Logo"
			/>
		</div>
	</div>
</template>
