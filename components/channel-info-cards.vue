<template>
  <div class="flex justify-start gap-8 overflow-x-auto">
    <div
      v-for="[title, value] in infoBlocks"
      :key="title"
      class="flex flex-col shrink-0 gap-4 w-64 px-6 py-4 rounded-xl bg-[#D9D9D9]"
    >
      <span class="text-2xl font-bold line-clamp-1">{{  value  }}</span>
      <span class="text-lg uppercase">{{ title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Channel } from "~/types";
import { computed } from "vue";

const props = defineProps<{
  channel: Channel,
}>();

const infoBlocks = computed(() => {
  return [
    ["Registration Date", props.channel.createdAt],
    ["Total views", props.channel.viewsCount],
    ["Subscribers", props.channel.subscribersCount],
    ["Videos", props.channel.videosCount],
    ["Shorts", props.channel.shortsCount],
  ]
});
</script>