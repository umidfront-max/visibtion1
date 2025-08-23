<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Loader from "@/components/Loader.vue";

const router = useRouter();
const code = ref(["", "", "", "", "", ""]);
const loading = ref(false);
const error = ref(false);
const inputs = ref([]);

const correctCode = "123456"; // Test uchun

// Theme toggle
const storageKey = "theme-preference";
const theme = ref(localStorage.getItem(storageKey) || "light");

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
  localStorage.setItem(storageKey, theme.value);
  document.documentElement.setAttribute("data-theme", theme.value);
}

// Focusni boshqarish
function moveNext(index, event) {
  const value = event.target.value;

  if (value && index < 5) {
    // qiymat yozilsa keyingisiga fokus
    inputs.value[index + 1].focus();
  } else if (!value && index > 0) {
    // qiymat o‘chirilsa oldingisiga fokus
    inputs.value[index - 1].focus();
  }
}

const handleVerify = () => {
  const enteredCode = code.value.join("");
  error.value = false;
  if (enteredCode.length < 6) {
    error.value = true;
    return;
  }
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    if (enteredCode === correctCode) {
      router.push("/"); // Success sahifaga redirect
    } else {
      error.value = true;
    }
  }, 1200);
};

// Sahifa ochilganda birinchi inputga fokus qilish
onMounted(() => {
  if (inputs.value[0]) {
    inputs.value[0].focus();
  }
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#F5F5F5] text-gray-900">
    <!-- Header -->
    <header
      class="w-full flex justify-between items-center px-6 py-3 shadow bg-white"
    >
      <router-link to="/" class="!text-purple-600 font-bold text-xl">
        LOGO
      </router-link>
      <div class="flex items-center gap-4">
        <!-- Theme toggle -->
        <button
          id="theme-toggle"
          class="theme-toggle p-2 rounded-full transition"
          @click="toggleTheme"
          :aria-label="theme"
        >
          <!-- Icon (sun & moon) -->
          <svg
            class="sun-and-moon"
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <mask class="moon" id="moon-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
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
      </div>
    </header>

    <!-- Form -->
    <div class="flex-grow flex items-center flex-col justify-center px-4 mt-4">
      <div
        class="rounded-2xl shadow-lg p-8 w-full max-w-md bg-white text-gray-900"
      >
        <!-- Title -->
        <div class="flex items-center gap-2 mb-6">
          <img class="h-7" src="@/assets/img/log2.svg" alt="" />
          <h2 class="text-2xl font-bold text-purple-600">Verify Code</h2>
        </div>

        <p class="text-sm text-gray-600 mb-6">
          We’ve sent a 6-digit verification code to your email. Please enter it
          below:
        </p>

        <!-- Code input -->
        <form @submit.prevent="handleVerify" class="space-y-4">
          <div class="flex justify-between gap-2">
            <input
              v-for="(digit, index) in code"
              :key="index"
              ref="inputs"
              v-model="code[index]"
              type="text"
              maxlength="1"
              class="w-12 h-12 text-center text-lg font-bold !border !border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:!ring-green-500"
              @input="moveNext(index, $event)"
            />
          </div>

          <p v-if="error" class="text-red-500 text-xs mt-2 text-center">
            Invalid code, please try again.
          </p>

          <!-- Verify button -->
          <button
            type="submit"
            :class="loading && '!py-4'"
            class="w-full h-12.5 flex items-center justify-center rounded-lg text-xl font-bold border border-purple-600 transition-all ease-in-out duration-500 hover:bg-green-500 active:bg-green-500 hover:border-green-500 active:border-green-500 hover:text-white active:text-white hover:cursor-pointer bg-purple-600 text-white mt-4"
          >
            <span v-if="!loading">Verify</span>
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
  </div>
</template>
