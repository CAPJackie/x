import {
  DirectMessage,
  Notifications,
  Post,
  TopBarMenuItems,
  TrendingSection,
} from "@/types";

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

export const trendExamples: Partial<TrendingSection> = {
  [TopBarMenuItems.ForYou]: [
    {
      title: "Trending in Colombia",
      name: "Bancolombia",
      tweets: 1190,
    },
    {
      title: "Trending in Movies",
      name: "Rubina",
      tweets: 10400,
    },
    {
      title: "Trending in Colombia",
      name: "Daviplata",
      tweets: 3561,
    },
    {
      title: "Trending",
      name: "Harris and Walz",
      tweets: 184000,
    },
    {
      title: "Trending in Colombia",
      name: "Skynet",
      tweets: 54700,
    },
    {
      title: "Trending in Politics",
      name: "Bacon",
      tweets: 27900,
    },
  ],
  [TopBarMenuItems.News]: [
    {
      title: "Trending in News",
      name: "News",
      tweets: 1190,
    },
    {
      title: "Trending in News",
      name: "News 2",
      tweets: 10400,
    },
    {
      title: "Trending in Colombia",
      name: "Daviplata",
      tweets: 3561,
    },
    {
      title: "Trending",
      name: "Harris and Walz",
      tweets: 184000,
    },
    {
      title: "Trending in Colombia",
      name: "Skynet",
      tweets: 54700,
    },
    {
      title: "Trending in Politics",
      name: "Bacon",
      tweets: 27900,
    },
  ],
  [TopBarMenuItems.Sports]: [
    {
      title: "Trending in Sports",
      name: "Sport 1",
      tweets: 1190,
    },
    {
      title: "Trending in Sports",
      name: "Sport 2",
      tweets: 10400,
    },
    {
      title: "Trending in Colombia",
      name: "Daviplata",
      tweets: 3561,
    },
    {
      title: "Trending",
      name: "Harris and Walz",
      tweets: 184000,
    },
    {
      title: "Trending in Colombia",
      name: "Skynet",
      tweets: 54700,
    },
    {
      title: "Trending in Politics",
      name: "Bacon",
      tweets: 27900,
    },
  ],
  [TopBarMenuItems.Entertainment]: [
    {
      title: "Trending in Entertainment",
      name: "Bancolombia",
      tweets: 1190,
    },
    {
      title: "Trending in Entertainment",
      name: "Rubina",
      tweets: 10400,
    },
    {
      title: "Trending in Colombia",
      name: "Daviplata",
      tweets: 3561,
    },
    {
      title: "Trending",
      name: "Harris and Walz",
      tweets: 184000,
    },
    {
      title: "Trending in Colombia",
      name: "Skynet",
      tweets: 54700,
    },
    {
      title: "Trending in Politics",
      name: "Bacon",
      tweets: 27900,
    },
  ],
  [TopBarMenuItems.Trending]: [
    {
      title: "Trending in Bogota",
      name: "Bancolombia",
      tweets: 1190,
    },
    {
      title: "Trending in Bogota",
      name: "Rubina",
      tweets: 10400,
    },
    {
      title: "Trending in Colombia",
      name: "Daviplata",
      tweets: 3561,
    },
    {
      title: "Trending",
      name: "Harris and Walz",
      tweets: 184000,
    },
    {
      title: "Trending in Colombia",
      name: "Skynet",
      tweets: 54700,
    },
    {
      title: "Trending in Politics",
      name: "Bacon",
      tweets: 27900,
    },
  ],
};

export const notifications: Notifications = {
  All: [{ id: 1, message: "Carlos Salvino and 9 others followed you" }],
};

export const directMessages: DirectMessage[] = [
  {
    id: 1,
    user: {
      name: "Carlos Salvino",
      username: "CarlosSalvino",
      avatar: "/images/profileSender.jpg",
    },
    date: "12/11/2023",
    content: "Hello, how are you?",
  },
  {
    id: 2,
    user: {
      name: "Devin Swan",
      username: "DevinSwan",
      avatar: "/images/profileSender.jpg",
    },
    date: "10/07/2022",
    content: "Hello, how are you?",
  },
  {
    id: 3,
    user: {
      name: "Bancolombia",
      username: "Bancolombia",
      avatar: "/images/profileSender.jpg",
    },
    date: "10/07/2022",
    content: "Hello, how are you?",
  },
  {
    id: 4,
    user: {
      name: "Test",
      username: "test",
      avatar: "/images/profileSender.jpg",
    },
    date: "10/07/2022",
    content: "Hello, how are you?",
  },
  {
    id: 5,
    user: {
      name: "Lorem Ipsum",
      username: "loremIpsum",
      avatar: "/images/profileSender.jpg",
    },
    date: "10/07/2022",
    content: "Hello, how are you?",
  },
];
