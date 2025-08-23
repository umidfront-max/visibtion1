<template>
	<button
		@click="toggleTheme"
		class="relative w-12 h-6 rounded-full transition-colors duration-300"
		:class="isDark ? 'bg-green-500' : 'bg-purple-600'"
	>
		<span
			class="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300"
			:class="isDark ? 'translate-x-6' : ''"
		></span>
	</button>
</template>

<script setup>
import { ref, watch } from "vue";

const isDark = ref(false);

const toggleTheme = () => {
	isDark.value = !isDark.value;
	// Bodyga class qo‘shamiz
	if (isDark.value) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
};

// localStorage orqali holatni saqlash
watch(isDark, (val) => {
	localStorage.setItem("theme", val ? "dark" : "light");
});

// Sahifa ochilganda oxirgi holatni olish
if (localStorage.getItem("theme") === "dark") {
	isDark.value = true;
	document.documentElement.classList.add("dark");
}
</script>
