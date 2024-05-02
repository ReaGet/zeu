<template>
  <div
    v-if="videos"
    class="flex flex-col gap-4 mt-10 divide-y divide-black"
  >
    <VideoTableItem
      v-for="video in slicedProducts"
      :key="video.id"
      :video="video"
    />

    <Pagination
      class="mt-8 border-none"
      :current-page="currentPage"
      :total-pages="~~(videos.length / videosPerPage)"
      :step="videosPerPage"
      @change="(newPage) => currentPage = newPage"
    />
  </div>
  <div v-else class="p-8 w-full text-center">
    There is no videos yet
  </div>
</template>

<script setup lang="ts">
import type { Video } from "~/types";

const props = defineProps<{
  videos: Video[]
}>();

const currentPage = ref(0),
  videosPerPage = 20;

const slicedProducts = computed(() => {
  const start = currentPage.value * videosPerPage,
    end = start + videosPerPage;
  return props.videos.slice(start, end);
});

</script>