export type Channel = {
  id: string
  title: string
  description: string
  channelId: string
  formatedChannelId: string
  monetization: boolean
  subscribersCount: number
  viewsCount: number
  videosCount: number
  basicVideosCount: number
  shortsCount: number
  postsCount: number
  avatar: string
  banner: string
  createdAt: string

  shorts?: Video[];
  posts?: Post[];
  videos?: Video[];
}

export type Video = {
  id: string
  type: "basic" | "short"
  title: string
  description: string
  videoId: string
  duration: number
  viewsCount: number
  thumbnail: string
  createdAt: string
  updatedAt: string
}

export type Post = {

}