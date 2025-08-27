<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
	image: null,
	name: "",
	bio: "",
	links: [{ name: "", url: "" }],
});

const imagePreview = ref(null);
const isImageLoading = ref(false);
const isSubmitting = ref(false);
const error = ref(false);

const handleImageUpload = (e) => {
	const file = e.target.files[0];
	if (!file) return;
	isImageLoading.value = true;
	const reader = new FileReader();
	reader.onload = () => {
		imagePreview.value = reader.result;
		form.image = file;
		isImageLoading.value = false;
	};
	reader.readAsDataURL(file);
};

const addLink = () => form.links.push({ name: "", url: "" });
const removeLink = (index) => form.links.splice(index, 1);

const handleSubmit = () => {
	error.value = false;
	if (!form.image || !form.name.trim()) {
		error.value = true;
		return;
	}

	for (let link of form.links) {
		if (link.url && !/^https?:\/\/.+/i.test(link.url)) {
			alert("Havola noto‘g‘ri formatda!");
			return;
		}
	}

	isSubmitting.value = true;
	setTimeout(() => {
		isSubmitting.value = false;
		router.push("/dashboard");
	}, 1500);
};
</script>

<template>
	<div class="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
		<form
			@submit.prevent="handleSubmit"
			class="rounded-2xl shadow-lg p-8 w-full max-w-md bg-white text-gray-900"
		>
			<!-- Title -->
			<div class="flex items-center gap-2 mb-6">
				<h2 class="text-2xl font-bold text-purple-600">Setup your page</h2>
			</div>

			<div class="flex gap-4 items-center mb-6">
				<!-- Rasm yuklash -->
				<div class="flex flex-col items-center">
					<label class="relative cursor-pointer group">
						<input
							type="file"
							accept="image/*"
							class="hidden"
							@change="handleImageUpload"
						/>
						<div
							class="w-28 h-28 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative"
						>
							<div
								v-if="isImageLoading"
								class="absolute inset-0 flex items-center justify-center bg-white/70"
							>
								<div
									class="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-500"
								></div>
							</div>
							<img
								v-if="imagePreview"
								:src="imagePreview"
								class="object-cover w-full h-full"
							/>
							<span v-else class="text-gray-400 text-sm">+</span>
							<div
								class="absolute inset-0 bg-purple-500/40 opacity-0 group-hover:opacity-100 transition"
							></div>
						</div>
					</label>
					<!-- Image Error -->
					<p v-if="error && !form.image" class="text-red-500 text-xs mt-2">
						Please upload an image
					</p>
					
				</div>

				<div class="flex-1">
					<!-- Name -->
					<div class="relative w-full mb-4">
						<input
							v-model="form.name"
							id="name"
							type="text"
							placeholder=" "
							class="peer block w-full px-3 rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							for="name"
							class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							Your name
						</label>
						<p
							v-if="error && !form.name"
							class="text-red-500 text-xs mt-1"
						>
							Please enter your name
						</p>
					</div>

					<!-- Bio -->
					<div class="relative w-full">
						<input
							v-model="form.bio"
							id="bio"
							type="text"
							placeholder=" "
							class="peer block px-3 w-full rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							for="bio"
							class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							Bio
						</label>
						<p
							v-if="error && !form.name"
							class="text-red-500 text-xs mt-1"
						>
							Please enter bio
						</p>
					</div>
				</div>
			</div>
			<h2 class="font-extrabold text-purple-600 text-lg mb-2">
				Add your first link
			</h2>
			<!-- Havolalar -->
			<div
				v-for="(link, index) in form.links"
				:key="index"
				class="my-4 border-b border-black/10 pb-4"
			>
				<div class="relative">
					<input
						v-model="link.name"
						type="text"
						placeholder=" "
						:id="'linkname' + index"
						class="peer block w-full px-3 rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
					/>
					<label
						:for="'linkname' + index"
						class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
					>
						Link name
					</label>
					<p v-if="error && !link.name" class="text-red-500 text-xs mt-1">
						Please enter Link name
					</p>
				</div>
				<div class="relative mt-4">
					<input
						v-model="link.url"
						type="url"
						:id="'url' + index"
						placeholder=" "
						class="peer block w-full px-3 rounded-lg border border-[#93c5fd] bg-[#eff3f5]/50 pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
					/>
					<label
						:for="'url' + index"
						class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
					>
						URL
					</label>
					<p v-if="error && !link.name" class="text-red-500 text-xs mt-1">
						Please enter url
					</p>
				</div>
			</div>

			<!-- Link qo‘shish -->
			<button
				type="button"
				@click="addLink"
				class="text-purple-600 font-semibold mb-4 hover:text-green-500 transition"
			>
				+ Add another link
			</button>

			<!-- Submit -->
			<button
				type="submit"
				:class="isSubmitting && '!py-4'"
				class="w-full h-12.5 flex items-center justify-center rounded-lg text-xl font-bold border border-purple-600 transition-all ease-in-out duration-500 hover:bg-green-500 active:bg-green-500 hover:border-green-500 active:border-green-500 hover:text-white active:text-white hover:cursor-pointer bg-purple-600 text-white"
				:disabled="isSubmitting"
			>
				<span v-if="!isSubmitting">GET STARTED</span>
				<span v-else class="flex items-center gap-2">
					<div
						class="animate-spin rounded-full h-5 w-5 border-t-2 border-white"
					></div>
					Loading...
				</span>
			</button>
		</form>
	</div>
</template>
