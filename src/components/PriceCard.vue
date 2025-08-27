<script setup>
import { defineProps } from "vue";
import checked from "./icons/checked.vue";
import NumberFlip from "./NumberFlip.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
	year: {
		type: Boolean,
		default: false,
	},
});

function handleClick(item) {
	if (item == "Basic") {
		router.push("/signup-next-step");
	} else {
		router.push("/checkout");
	}
}
</script>

<template>
	<div
		class="border rounded-2xl p-7 transition-transform duration-300 hover:scale-103 active:scale-103 max-sm:p-6 flex flex-col items-center"
		:class="
			data.popular
				? 'border-green-500 bg-white '
				: 'border-gray-50  bg-gray-50'
		"
	>
		<span
			class="h-6 flex items-center mb-6 rounded-lg text-sm text-white px-4"
			v-if="data.popular"
		>
			Most Popular
		</span>

		<span class="text-fiolet font-bold text-base max-sm:text-sm">
			{{ data.name }}
		</span>

		<div class="flex items-end gap-0 mt-4 mb-2.5">
			<!-- Raqamlar animatsiya bilan -->
			<NumberFlip
				v-if="data.price !== 'Free'"
				:value="!year ? data.price : data.year"
			/>
			<span v-else class="font-bold text-5xl max-sm:text-[26px]">
				Free
			</span>

			<!-- Oy / Yil -->
			<transition name="fade-scale" mode="out-in">
				<span
					v-if="data.price != 'Free'"
					class="text-sm text-gray-890 max-sm:text-xs"
				>
					{{ !year ? "/month" : "/year" }}
				</span>
			</transition>
		</div>

		<span class="text-center text-sm text-gray-890 max-sm:text-xs">
			{{ data.title }}
		</span>

		<div
			class="mt-7.5 mb-6 max-sm:my-4 max-sm:gap-2.5 flex flex-col gap-4 text-primary w-full"
		>
			<div
				v-for="(item, i) in data.slugs"
				:key="i"
				class="flex items-center gap-2 relative group cursor-pointer"
			>
				<checked class="text-[10px]" />
				<span class="text-lg max-sm:text-base"> {{ item }} </span>

				<!-- Tooltip -->
				<div
					class="absolute left-0 right-0 bottom-full mb-2 bg-green-500 text-white text-xs rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10 pointer-events-none"
				>
					{{ i + 1 }}. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Aperiam, veritatis!
					<div
						class="absolute top-full left-4 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-green-500"
					></div>
				</div>
			</div>
		</div>

		<button
			@click="handleClick(data.name)"
			class="rounded-lg border border-fiolet w-full h-12.5 text-xl font-bold flex items-center justify-center hover:bg-green-500 active:bg-green-500 transition-all ease-in-out duration-500 hover:border-green-500 active:border-green-500 hover:text-white active:text-white hover:cursor-pointer"
			:class="data.popular ? 'bg-fiolet text-white' : 'bg-white text-fiolet'"
		>
			Get Started
		</button>
	</div>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
	transition: all 0.3s ease;
}
.fade-scale-enter-from {
	opacity: 0;
	transform: scale(0.95);
}
.fade-scale-leave-to {
	opacity: 0;
	transform: scale(1.05);
}
</style>
