<script setup>
import { defineProps, ref, watch, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  digitHeight: {
    type: Number,
    default: 40, // har bir raqam balandligi (px)
  },
  digitWidth: {
    type: Number,
    default: 28, // default eni
  },
});

const responsiveDigitWidth = ref(props.digitWidth);

const updateDigitWidth = () => {
  if (window.innerWidth <= 768) {
    responsiveDigitWidth.value = 20; // max-md bo'lsa kichrayadi
  } else {
    responsiveDigitWidth.value = props.digitWidth;
  }
};

onMounted(() => {
  updateDigitWidth();
  window.addEventListener("resize", updateDigitWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateDigitWidth);
});

// Har bir belgini obyekt sifatida saqlaymiz (raqammi yoki belgi)
const displayedValue = ref(
  props.value.toString().split("").map((ch) => ({
    char: ch,
    isDigit: /\d/.test(ch),
    num: /\d/.test(ch) ? Number(ch) : null,
  }))
);

watch(
  () => props.value,
  (newVal) => {
    const chars = newVal.toString().split("");

    // Agar eski va yangi uzunligi farqli bo'lsa ham ishlaydi
    displayedValue.value = chars.map((ch) => ({
      char: ch,
      isDigit: /\d/.test(ch),
      num: /\d/.test(ch) ? Number(ch) : null,
    }));
  }
);
</script>

<template>
  <div class="flex">
    <div
      v-for="(item, i) in displayedValue"
      :key="i"
      class="flex justify-center items-center"
      :style="{
        width: item.isDigit ? responsiveDigitWidth + 'px' : 'auto',
        height: digitHeight + 'px',
      }"
    >
      <!-- Agar raqam bo‘lsa slot-machine -->
      <template v-if="item.isDigit">
        <div
          class="overflow-hidden relative"
          :style="{ width: responsiveDigitWidth + 'px', height: digitHeight + 'px' }"
        >
          <div
            class="transition-transform duration-700 ease-out"
            :style="{
              transform: `translateY(-${item.num * digitHeight}px)`,
            }"
          >
            <div
              v-for="n in 10"
              :key="n"
              class="flex items-center justify-center font-bold text-5xl max-md:text-[22px]"
              :style="{
                height: digitHeight + 'px',
                width: responsiveDigitWidth + 'px',
              }"
            >
              {{ n - 1 }}
            </div>
          </div>
        </div>
      </template>

      <!-- Agar belgi bo‘lsa oddiy chiqsin -->
      <template v-else>
        <span class="font-bold text-5xl max-md:text-[22px]">{{ item.char }}</span>
      </template>
    </div>
  </div>
</template>
