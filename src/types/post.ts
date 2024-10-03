import { User } from "./user";

export type Post = {
  id: string;
  tweet: string;
  user: User;
  comments: number;
  retweets: number;
  likes: number;
  views: number;
  date: string;
  media: {
    type: "image" | "video";
    url: string;
  };
};
