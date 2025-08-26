<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./Navbar.vue";
import StartFree from "./StartFree.vue";
import HamburgerMenu from "./MenuBar.vue";

const firstText = "all-inclusive ".split("");
const secondText = "link".split("");
const link =
  "https://www.figma.com/design/N6Yzn7QkUmAMDExor5VSUU/visitbio-full-design?node-id=2051-4&t=h0DGcR5xlnGBIZVA-0";

const animationDuration = 60;
const restartDelay = 4000;
const restartKey = ref(0);
const isOpen = ref(false);

function closeNav() {
  isOpen.value = false;
}

onMounted(() => {
  const totalLetters = firstText.length + secondText.length;
  setInterval(() => {
    restartKey.value++;
  }, totalLetters * animationDuration + restartDelay);
});
</script>

<template>
  <div class="h-[670px] max-sm:h-222 w-full relative info overflow-x-hidden">
    <div class="container">
      <!-- DIV (o‘ngdan chapga 30px) -->
      <div
        class="max-w-170 pt-39 max-xl:pt-28 max-md:text-center max-xl:max-w-120 relative z-2 animate-div"
      >
        <h1
          class="font-bold text-5xl uppercase text-primary max-xl:text-4xl max-lg:text-[28px]"
        >
          Showcase who you are with one
          <span>
            <a :href="link" class="" :key="restartKey">
              <span class="inline-block">
                <template v-for="(letter, index) in firstText" :key="'f' + index">
                  <span
                    class="inline-block animate-letter text-fiolet"
                    :style="{ animationDelay: `${index * 0.06}s` }"
                  >
                    {{ letter }}
                  </span>
                </template>
              </span>
              <span class="text-fiolet inline-block ml-2">
                <template
                  v-for="(letter, index) in secondText"
                  :key="'s' + index"
                >
                  <span
                    class="inline-block animate-letter"
                    :style="{
                      animationDelay: `${(firstText.length + index) * 0.06}s`,
                    }"
                  >
                    {{ letter }}
                  </span>
                </template>
              </span>
            </a>
          </span>
        </h1>
        <p
          class="text-primary text-2xl pt-8 pr-30 max-md:pt-6 max-md:pr-0 max-md:text-center relative z-2 max-md:text-xl"
        >
          A single link, endless possibilities — bio, business card, landing
          page, and more.
        </p>
        <StartFree class="mt-13.5 max-md:mt-6" />
      </div>

      <!-- IMG (chapdan o‘ngga 30px) -->
      <img
        src="../assets/img/phone-gr.svg"
        class="absolute right-0 bottom-0 max-sm:object-cover h-148 w-auto object-contain max-lg:h-108 z-0 animate-img"
      />
    </div>
  </div>
</template>

<style scoped>
/* Div animatsiyasi (o‘ngdan chapga 30px + opacity) */
@keyframes divEnter {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-div {
  animation: divEnter 0.8s ease-out forwards;
}

/* Img animatsiyasi (chapdan o‘ngga 30px + opacity) */
@keyframes imgEnter {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-img {
  animation: imgEnter 0.8s ease-out forwards;
}
</style>
