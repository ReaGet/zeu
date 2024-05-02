<template>
  <article class="flex gap-8 pt-4">
    <h3>{{ video.title }}</h3>
    <span>{{ video.viewsCount }}</span>
    <span>{{ video.uploadDate }}</span>
  </article>
</template>

<script setup lang="ts">
import type { Video } from '~/types';

defineProps<{
  video: Video
}>();
</script>