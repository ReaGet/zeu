import type { Channel } from "~/types";
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
    createdAt: faker.date.anytime().toDateString(),
  }
} 