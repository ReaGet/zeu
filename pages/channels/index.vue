<template>
  <ChannelList
    :channels="channels"
    :activeChannel="activeChannel"
    @select="(channel) => activeChannel = channel"
  />
  <ChannelInfoCards
    :channel="activeChannel"
  />
  channels
</template>

<script setup lang="ts">
import type { Channel } from "~/types";
import { onMounted, ref } from "vue";
import type { Ref } from "vue";

const { data } = await useFetch<Channel[]>("/api/channels");
const channels: Ref<Channel[]> = data;

const activeChannel = ref<Channel>(channels.value[0]);
</script>