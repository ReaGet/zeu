<template>
  <div class="flex gap-8">
    <div
      v-for="channel in channels"
      :key="channel.id"
      class="flex flex-col items-center gap-2 max-w-72 text-center"
      @click="emits('select', channel)"
    >
      <div
        class="w-20 h-20 bg-gray-400 rounded-full cursor-pointer"
        :class="{ 'ring-2 ring-black': activeChannel.id === channel.id }"
      ></div>
      <span class="line-clamp-1 text-lg text-gray-500">{{ channel.title }}</span>
    </div>

    <button
      class="p-4 mt-5 mb-auto bg-[#EEEEEE] rounded-full"
      type="button"
    >
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="6.30952" x2="13" y2="6.30952" stroke="#777777"/>
        <line x1="6.30957" y1="13" x2="6.30957" stroke="#777777"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Channel } from "~/types";

defineProps<{
  channels: Channel[],
  activeChannel: Channel,
}>();

const emits = defineEmits<{
  (e: 'select', channel: Channel): void
}>();
</script>
