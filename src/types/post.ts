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
  media?: {
    type: "image" | "video";
    url: string;
    /** Intrinsic size, used to reserve space and keep the aspect ratio. */
    width: number;
    height: number;
  };
};
