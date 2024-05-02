<template>
  <ChannelList
    :channels="channels"
    :activeChannel="activeChannel"
    @select="(channel) => activeChannel = channel"
  />
  <ChannelInfoCards
    :channel="activeChannel"
  />
  <section class="flex flex-col w-full px-8 py-6 rounded-xl bg-gray-200">
    <div class="flex justify-between items-center">
      <h2 class="my-0 text-2xl font-bold">Videos</h2>
    </div>
    <VideoTableList
      :videos="activeChannel.videos"
    />
  </section>
  channels
</template>

<script setup lang="ts">
import type { Channel } from "~/types";
import type { Ref } from "vue";

const { data } = await useFetch<Channel[]>("/api/channels");
const channels: Ref<Channel[]> = data;

const activeChannel = ref<Channel>(channels.value[0]);
</script>