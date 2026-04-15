import { posts } from "@/lib/mock-data";
import PostFeed from "./post-feed";

export default async function Home() {
  return <PostFeed posts={posts} />;
}
