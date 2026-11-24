import { suggestedUsers, trendExamples } from "@/lib/mock-data";
import { TopBarMenuItems } from "@/types";
import Image from "next/image";
import Link from "next/link";

function formatPosts(n: number): string {
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
}

/** Right column with search, trends and follow suggestions. Desktop only. */
export function RightSidebar() {
  const trends = trendExamples[TopBarMenuItems.ForYou]?.slice(0, 5) ?? [];

  return (
    <aside className="sticky top-0 hidden h-screen w-[350px] shrink-0 flex-col gap-4 overflow-y-auto py-2 pl-8 desktop:flex">
      <label className="flex h-11 shrink-0 items-center gap-3 rounded-full border border-twitter-dark-gray px-4 text-twitter-gray focus-within:border-[#1d9bf0]">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
        </svg>
        <input
          type="search"
          placeholder="Search"
          className="w-full bg-transparent text-[15px] text-white placeholder:text-twitter-gray focus:outline-none"
        />
      </label>

      <section className="rounded-2xl border border-twitter-dark-gray">
        <h2 className="px-4 py-3 text-xl font-extrabold">
          What&apos;s happening
        </h2>
        <ul>
          {trends.map((trend) => (
            <li
              key={trend.name}
              className="px-4 py-3 transition-colors hover:bg-white/[0.03]"
            >
              <p className="text-[13px] text-twitter-gray">{trend.title}</p>
              <p className="text-[15px] font-bold">{trend.name}</p>
              <p className="text-[13px] text-twitter-gray">
                {formatPosts(trend.tweets)} posts
              </p>
            </li>
          ))}
        </ul>
        <Link
          href="/explore"
          className="block rounded-b-2xl px-4 py-4 text-[15px] text-[#1d9bf0] hover:bg-white/[0.03]"
        >
          Show more
        </Link>
      </section>

      <section className="rounded-2xl border border-twitter-dark-gray">
        <h2 className="px-4 py-3 text-xl font-extrabold">Who to follow</h2>
        <ul>
          {suggestedUsers.map((user) => (
            <li
              key={user.username}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/[0.03]"
            >
              <Image
                src={user.avatar}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
              <Link href={`/${user.username}`} className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-bold hover:underline">
                  {user.name}
                </p>
                <p className="truncate text-[15px] text-twitter-gray">
                  @{user.username}
                </p>
              </Link>
              <button className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-black hover:bg-white/90">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
