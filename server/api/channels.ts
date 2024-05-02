import { getFakeChannel, getFakeVideo } from "~/utils";
import type { Video } from "~/types";

const array = (max = 5, min = 1) => Array(~~(Math.random() * (max - min) + min)).fill({})

export default defineEventHandler((event) => {
  const channels = array().map(() => getFakeChannel());
  return channels.map((channel) => {
    const videos: Video[] = array(700, 3).map(() => getFakeVideo());
    channel.videos = videos;
    channel.videosCount = videos.length;
    channel.basicVideosCount = videos.filter((video) => video.type === "basic").length;
    channel.shortsCount = videos.filter((video) => video.type === "short").length;
    return channel;
  });
});