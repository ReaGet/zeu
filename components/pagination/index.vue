<template>
  <div class="flex gap-2 justify-center">
    <button
      class="border border-black px-4 py-2 rounded-lg"
      :class="{
        'pointer-events-none border-gray-400': currentPage === 0,
      }"
      @click="() => emits('change', Math.max(currentPage - 1, 0))"
    ><</button>
    <span class="border border-gray-400 px-4 py-2 rounded-lg">{{ currentPage + 1 }}</span>
    <button
      class="border border-black px-4 py-2 rounded-lg"
      :class="{
        'pointer-events-none border-gray-400': currentPage === totalPages,
      }"
      @click="() => emits('change', Math.min(currentPage + 1, totalPages))"
    >></button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  currentPage: number
  totalPages: number
}>(), {
  currentPage: 0,
});

const emits = defineEmits<{
  (e: "change", currentPage: number): void
}>()
</script>