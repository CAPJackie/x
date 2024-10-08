import { Post } from "@/types";

export const post: Post = {
  id: "1",
  tweet: "Hello World",
  user: {
    name: "John Doe",
    username: "johndoe",
    avatar: "/images/profile-x.jpeg",
  },
  comments: 20,
  retweets: 30,
  likes: 10,
  views: 100,
  date: "1h",
  media: {
    type: "image",
    url: "/images/post.jpeg",
  },
};
