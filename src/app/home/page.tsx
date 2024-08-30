import Image from "next/image";
import Link from "next/link";

type Post = {
  id: string;
  tweet: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
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

const post: Post = {
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

function ActionableItem({ icon, count }: { icon: string; count: number }) {
  return (
    <div className="flex flex-row items-center space-x-1 text-twitter-gray">
      <button>
        <Image
          src={icon}
          alt="icon"
          width={19}
          height={19}
          className="w-[19px] h-[19px]"
        />
      </button>
      <span className="text-[13px] mt-[2px]">{count}</span>
    </div>
  );
}

export default async function Home() {
  const posts = Array.from({ length: 10 }).map((_, index) => post);
  return posts.map((post, index) => (
    <div
      key={post.id + index}
      className="flex flex-row py-[12px] px-[16px] border-twitter text-[15px]"
    >
      <div className="flex items-start mr-2">
        <Link href={`/${post.user.username}`}>
          <Image
            src={post.user.avatar}
            alt="avatar"
            width={40}
            height={40}
            className="min-w-[40px] min-h-[40px] rounded-full flex-1"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row mb-[2px]">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row">
              <Link href={`/${post.user.username}`} className="mr-1">
                <span className="font-bold">{post.user.name}</span>{" "}
              </Link>
              <div className="text-twitter-gray">
                <span>@{post.user.username} </span>
                <span className="px-1">·</span>
                <span>{post.date}</span>
              </div>
            </div>
            <button className="">
              <Image
                src={"/images/dots.svg"}
                alt="three dots"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
        </div>
        <div className="text-left font-normal">
          <p>{post.tweet}</p>
        </div>
        {post.media.type === "image" && (
          <button className="mt-3 ">
            <Image
              src={post.media.url}
              alt="media"
              width={400}
              height={400}
              className="w-[400px] h-[400px] rounded-2xl"
            />
          </button>
        )}
        <div className="flex flex-row items-center mt-3 justify-between">
          <div className="flex flex-row items-center justify-between w-full">
            <ActionableItem icon="/images/comments.svg" count={post.comments} />
            <ActionableItem icon="/images/retweet.svg" count={post.retweets} />
            <ActionableItem icon="/images/like.svg" count={post.likes} />
            <ActionableItem icon="/images/views.svg" count={post.views} />
            <div />
          </div>
          <div className="flex flex-row items-center">
            <button className="mr-4">
              <Image
                src={"/images/save.svg"}
                alt="save"
                width={19}
                height={19}
                className="min-w-[19px] h-[19px]"
              />
            </button>
            <button>
              <Image
                src={"/images/share.svg"}
                alt="share"
                width={19}
                height={19}
                className="min-w-[19px] h-[19px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
}
