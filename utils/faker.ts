import type { Channel, Video } from "~/types";
import { faker } from "@faker-js/faker";

export const getFakeChannel = (): Channel => {
  const videosCount = faker.number.int({ max: 1000 }),
    basicVideosCount = faker.number.int({ max: 1000 - videosCount });
  return {
    id: faker.string.nanoid(8),
    title: `${Math.random() > 0.5 ? faker.person.suffix() + " " : ""}${faker.person.firstName()}`,
    description: faker.lorem.paragraph({ min: 1, max: 3 }),
    channelId: faker.string.nanoid(11),
    formatedChannelId: `@${faker.company.name()}`,
    monetization: faker.number.int({ max: 10 }) > 5,
    subscribersCount: faker.number.int({ max: 160_000_000 }),
    viewsCount: faker.number.int({ max: 2_000_000_000 }),
    videosCount,
    basicVideosCount,
    shortsCount: videosCount - basicVideosCount,
    postsCount: faker.number.int({ max: 500 }),
    avatar: faker.image.avatar(),
    banner: faker.image.avatar(),
    videos: [],
    createdAt: faker.date.anytime().toDateString(),
  }
}

export const getFakeVideo = (): Video => {
  return {
    id: faker.string.nanoid(8),
    type: Math.random() > 0.5 ? "basic" : "short",
    videoId: faker.string.nanoid(11),
    title: faker.lorem.words({ min: 1, max: 5 }),
    description: faker.lorem.paragraph({ min: 1, max: 3 }),
    duration: 100,
    viewsCount: faker.number.int({ max: 2_000_000_000 }),
    thumbnail: faker.image.avatar(),
    uploadDate: faker.date.anytime().toDateString(),
    publishDate: faker.date.anytime().toDateString(),
  }
}