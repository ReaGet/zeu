import { getFakeChannel } from "~/utils";

export default defineEventHandler((event) => {
  return Array(~~(Math.random() * 4 + 1)).fill({}).map(() => getFakeChannel());
});