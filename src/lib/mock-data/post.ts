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

export const posts: Post[] = [
  {
    id: "1",
    tweet:
      "Just shipped a feature that took 3 days to build and 10 minutes to break in prod. Classic.",
    user: {
      name: "Sarah Chen",
      username: "sarahcodes",
      avatar: "/images/profile-x.jpeg",
    },
    comments: 412,
    retweets: 1800,
    likes: 24300,
    views: 892000,
    date: "2m",
  },
  {
    id: "2",
    tweet:
      "Hot take: the best programming language is the one your team already knows and ships with. Unpopular but true.",
    user: {
      name: "DevRant Daily",
      username: "devrantdaily",
      avatar: "/images/profile.jpeg",
    },
    comments: 2100,
    retweets: 4500,
    likes: 38700,
    views: 1400000,
    date: "14m",
  },
  {
    id: "3",
    tweet:
      "The economy added 275,000 jobs last month, beating expectations of 198,000. Unemployment holds at 3.8%. Thread 🧵",
    user: {
      name: "Bloomberg Markets",
      username: "markets",
      avatar: "/images/profile-x.jpeg",
    },
    comments: 980,
    retweets: 3200,
    likes: 11400,
    views: 6500000,
    date: "31m",
    media: { type: "image", url: "/images/post.jpeg" },
  },
  {
    id: "4",
    tweet:
      "reminder that you don't have to be productive every single day. rest is part of the process.",
    user: {
      name: "maya 🌙",
      username: "mayawrites",
      avatar: "/images/profileSender.jpg",
    },
    comments: 534,
    retweets: 12800,
    likes: 97600,
    views: 2100000,
    date: "45m",
  },
  {
    id: "5",
    tweet:
      "We just crossed 10 million users. Never thought we'd get here when I was building v1 alone in my apartment. Thank you all 🙏",
    user: {
      name: "Alex Rivera",
      username: "alexbuilds",
      avatar: "/images/profile.jpeg",
    },
    comments: 3400,
    retweets: 7100,
    likes: 142000,
    views: 4800000,
    date: "1h",
    media: { type: "image", url: "/images/post.jpeg" },
  },
  {
    id: "6",
    tweet:
      "LLMs are genuinely the most overhyped AND the most underhyped technology simultaneously depending on the use case. wild times.",
    user: {
      name: "Priya Nair",
      username: "priya_ml",
      avatar: "/images/profile-x.jpeg",
    },
    comments: 1700,
    retweets: 5900,
    likes: 43200,
    views: 1900000,
    date: "2h",
  },
  {
    id: "7",
    tweet:
      "PSA: your commit messages are love letters to future you. write accordingly.",
    user: {
      name: "Tom Hanks (not that one)",
      username: "tomh_dev",
      avatar: "/images/profileSender.jpg",
    },
    comments: 220,
    retweets: 8400,
    likes: 61000,
    views: 980000,
    date: "3h",
  },
  {
    id: "8",
    tweet:
      "Breaking: the EU is set to introduce new AI regulation legislation by Q3. Key provisions include mandatory audits for high-risk systems and real-time transparency logs.",
    user: {
      name: "Tech Policy Watch",
      username: "techpolicywatch",
      avatar: "/images/profile.jpeg",
    },
    comments: 640,
    retweets: 2800,
    likes: 9700,
    views: 3200000,
    date: "3h",
    media: { type: "image", url: "/images/post.jpeg" },
  },
  {
    id: "9",
    tweet:
      "the fact that we can fold a piece of glass, put the entire internet in it, and carry it in our pocket is still insane to me",
    user: {
      name: "wonder daily",
      username: "wonderdaily",
      avatar: "/images/profile-x.jpeg",
    },
    comments: 389,
    retweets: 15600,
    likes: 201000,
    views: 7400000,
    date: "4h",
  },
  {
    id: "10",
    tweet:
      "Tried to explain to my parents what I do for work again. They now think I 'fix computers for a living.' I'm a distributed systems engineer but sure, same thing.",
    user: {
      name: "Carlos M.",
      username: "carlosm_eng",
      avatar: "/images/profileSender.jpg",
    },
    comments: 1800,
    retweets: 21000,
    likes: 173000,
    views: 5600000,
    date: "5h",
  },
  {
    id: "11",
    tweet:
      "Just read 40 papers on RAG pipelines so you don't have to. Here's what actually works in production 👇",
    user: {
      name: "AI Weekly",
      username: "aiweekly",
      avatar: "/images/profile.jpeg",
    },
    comments: 880,
    retweets: 6700,
    likes: 48900,
    views: 2700000,
    date: "6h",
    media: { type: "image", url: "/images/post.jpeg" },
  },
  {
    id: "12",
    tweet:
      "genuinely cannot believe people are still gatekeeping coding. if you write code, you're a programmer. period.",
    user: {
      name: "jade 💻",
      username: "jadecodes_",
      avatar: "/images/profile-x.jpeg",
    },
    comments: 2900,
    retweets: 9800,
    likes: 84500,
    views: 3100000,
    date: "7h",
  },
  {
    id: "13",
    tweet: "Quiet reminder: done is better than perfect. ship the thing.",
    user: {
      name: "Startup Wisdom",
      username: "startupwisdom",
      avatar: "/images/profile.jpeg",
    },
    comments: 145,
    retweets: 17200,
    likes: 129000,
    views: 4200000,
    date: "8h",
  },
  {
    id: "14",
    tweet:
      "New personal record: deployed to wrong environment 3 times before 9am. Coffee wasn't enough today.",
    user: {
      name: "João Ferreira",
      username: "joaof_dev",
      avatar: "/images/profileSender.jpg",
    },
    comments: 670,
    retweets: 4100,
    likes: 52300,
    views: 1100000,
    date: "9h",
  },
  {
    id: "15",
    tweet:
      "The open source community built something extraordinary this decade. Billions of dollars of value, given away for free. still blows my mind.",
    user: {
      name: "Lena Böhm",
      username: "lenaboehm",
      avatar: "/images/profile-x.jpeg",
    },
    comments: 430,
    retweets: 7300,
    likes: 62100,
    views: 2400000,
    date: "10h",
    media: { type: "image", url: "/images/post.jpeg" },
  },
  {
    id: "16",
    tweet:
      "day 47 of learning to code. just built my first full-stack app. it's ugly and broken but it's MINE and i'm crying happy tears rn",
    user: {
      name: "learning.log",
      username: "learninglog_",
      avatar: "/images/profileSender.jpg",
    },
    comments: 1200,
    retweets: 18900,
    likes: 215000,
    views: 6800000,
    date: "11h",
  },
  {
    id: "17",
    tweet:
      "Fascinating thread on how sleep deprivation compounds technical debt in engineering teams. The correlation is stronger than most managers want to admit.",
    user: {
      name: "Engineering Ops",
      username: "engops",
      avatar: "/images/profile.jpeg",
    },
    comments: 540,
    retweets: 3800,
    likes: 29400,
    views: 1600000,
    date: "13h",
  },
  {
    id: "18",
    tweet:
      'every "10x developer" i\'ve ever met was just someone who deleted code instead of writing more of it',
    user: {
      name: "Kevin Park",
      username: "kevinparkio",
      avatar: "/images/profile-x.jpeg",
    },
    comments: 3600,
    retweets: 24500,
    likes: 187000,
    views: 8900000,
    date: "14h",
  },
  {
    id: "19",
    tweet:
      "New open-source project just dropped: zero-dependency TypeScript runtime validator that infers types from your schema automatically. link in bio.",
    user: {
      name: "OSS Drops",
      username: "ossdrops",
      avatar: "/images/profileSender.jpg",
    },
    comments: 760,
    retweets: 5200,
    likes: 37800,
    views: 890000,
    date: "16h",
    media: { type: "image", url: "/images/post.jpeg" },
  },
  {
    id: "20",
    tweet:
      'we need to talk about how "move fast and break things" destroyed trust in tech and we\'re still paying for it years later',
    user: {
      name: "Nia Thompson",
      username: "niathompson",
      avatar: "/images/profile.jpeg",
    },
    comments: 4200,
    retweets: 11300,
    likes: 96400,
    views: 5100000,
    date: "18h",
  },
];
