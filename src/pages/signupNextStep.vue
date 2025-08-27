<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import LayoutHeader from "../components/LayoutHeader.vue";
import Loader from "@/components/Loader.vue";

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
	<div class="min-h-screen flex flex-col justify-center bg-[#F5F5F5]">
		<LayoutHeader />
		<div class="flex-grow flex justify-center items-center">
			<form
				@submit.prevent="handleSubmit"
				class="rounded-2xl shadow-lg p-8 w-full max-w-md my-6 bg-white text-gray-900"
			>
				<!-- Title -->
				<div class="flex items-center gap-2 mb-6">
					<h2 class="text-2xl font-bold text-purple-600">
						Setup your page
					</h2>
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
								:class="error && !form.image && '!border-red-500'"
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
								<span v-else class="text-gray-400 text-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										:class="error && !form.image && '!text-red-500'"
										class="w-6"
									>
										<path
											d="M9.82843 5L7.82843 7H4V19H20V7H16.1716L14.1716 5H9.82843ZM9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM12 18C8.96243 18 6.5 15.5376 6.5 12.5C6.5 9.46243 8.96243 7 12 7C15.0376 7 17.5 9.46243 17.5 12.5C17.5 15.5376 15.0376 18 12 18ZM12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16Z"
										></path>
									</svg>
								</span>
								<div
									class="absolute inset-0 bg-purple-500/40 opacity-0 group-hover:opacity-100 transition"
								></div>
							</div>
						</label>
						<!-- Image Error -->
						<p
							v-if="error && !form.image"
							class="text-red-500 text-xs mt-2"
						>
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
					class="my-4 border border-purple-600 relative rounded-lg bg-purple-50 p-4"
				>
					<div class="relative">
						<input
							v-model="link.name"
							type="text"
							placeholder=" "
							:id="'linkname' + index"
							class="peer block w-full px-3 !bg-white rounded-lg border border-[#93c5fd] pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							:for="'linkname' + index"
							class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							Link name
						</label>
						<p
							v-if="error && !link.name"
							class="text-red-500 text-xs mt-1"
						>
							Please enter Link name
						</p>
					</div>
					<div class="relative mt-4">
						<input
							v-model="link.url"
							type="url"
							:id="'url' + index"
							placeholder=" "
							class="peer block !bg-white w-full px-3 rounded-lg border border-[#93c5fd] pt-6 pb-2 text-sm text-gray-700 placeholder-transparent shadow-sm transition-all duration-300 focus:border-green-500 focus:bg-green-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
						<label
							:for="'url' + index"
							class="absolute left-3 top-1 text-purple-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-600"
						>
							URL
						</label>
						<p
							v-if="error && !link.name"
							class="text-red-500 text-xs mt-1"
						>
							Please enter url
						</p>
					</div>

					<svg
                  v-if="index != 0"
                  @click="removeLink(index)"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="text-red-500 cursor-pointer bg-white rounded-full white w-6 absolute -top-2.5 -right-2.5"
					>
						<path
							d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"
						></path>
					</svg>
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
					<Loader v-else />
				</button>
			</form>
		</div>
	</div>
</template>
