import Image from "next/image";

type Trending = {
  title: string;
  name: string;
  tweets: number;
};

export default async function Explore() {
  const trendExamples: Trending[] = [
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
  ];
  return (
    <div className="flex flex-col">
      <div className="border-twitter px-[16px] py-[12px]">
        <div className="rounded-2xl bg-[#16181c] px-[4px] py-[12px]">
          <div className="flex justify-center">
            <span className="text-[15px] font-normal leading-[20px] text-twitter-gray">
              Thanks. Refresh this page to update these trends.
            </span>
          </div>
        </div>
      </div>
      <ul>
        {trendExamples.map((trend) => (
          <li
            key={trend.name}
            className="relative flex flex-row items-center w-full px-[16px] py-[12px]"
          >
            <div className="flex flex-col w-full space-y-[4px]">
              <div className="flex flex-row justify-between">
                <span className="text-[13px] text-twitter-gray leading-[16px]">
                  {trend.title}
                </span>
                <button className="absolute right-[16px] top-[8px]">
                  <Image
                    src={"/images/dots.svg"}
                    alt="three dots"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              <span className="text-[15px] font-bold leading-[20px]">
                {trend.name}
              </span>
              <span className="text-[13px] text-twitter-gray leading-[16px]">
                {trend.tweets} Posts
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
