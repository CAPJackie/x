"use client";

import { currentUser } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/home", label: "Home", icon: "home" },
  { href: "/explore", label: "Explore", icon: "explore" },
  { href: "/notifications", label: "Notifications", icon: "notifications" },
  { href: "/messages", label: "Messages", icon: "messages" },
  { href: "/grok", label: "Grok", icon: "grok" },
  { href: "/communities/explore", label: "Communities", icon: "communities" },
];

/**
 * Left navigation. Hidden on mobile (the Footer tab bar replaces it),
 * icon-only on tablet, icons + labels on desktop.
 */
export function Sidebar() {
  const pathname = usePathname();
  const currentSegment = pathname.split("/")[1];

  return (
    <aside className="sticky top-0 z-40 hidden h-screen shrink-0 flex-col items-center bg-black py-3 tablet:flex tablet:w-[88px] desktop:w-[275px] desktop:items-start desktop:px-3">
      <Link
        href="/home"
        className="mb-2 rounded-full p-3 transition-colors hover:bg-white/10"
        aria-label="X"
      >
        <Image
          src="/images/x.svg"
          alt="X logo"
          width={28}
          height={27}
          className="h-auto w-7"
        />
      </Link>

      <nav className="flex w-full flex-1 flex-col items-center gap-1 desktop:items-start">
        {navItems.map(({ href, label, icon }) => {
          const isActive = currentSegment === href.split("/")[1];
          return (
            <Link
              key={href}
              href={href}
              title={label}
              aria-current={isActive ? "page" : undefined}
              className="flex items-center gap-5 rounded-full p-3 transition-colors hover:bg-white/10 desktop:pr-6"
            >
              <Image
                src={`/images/${icon}${isActive ? "_selected" : ""}.svg`}
                alt=""
                width={26}
                height={26}
                className="h-[26px] w-[26px]"
              />
              <span
                className={cn("hidden text-xl desktop:inline", {
                  "font-bold": isActive,
                })}
              >
                {label}
              </span>
            </Link>
          );
        })}

        <button
          className="mt-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#1d9bf0] transition-colors hover:bg-[#1a8cd8] desktop:w-[90%]"
          aria-label="Post"
        >
          <Image
            src="/images/add-single-file.svg"
            alt=""
            width={22}
            height={22}
            className="h-[22px] w-[22px] desktop:hidden"
          />
          <span className="hidden text-[17px] font-bold desktop:inline">
            Post
          </span>
        </button>
      </nav>

      <button className="flex items-center gap-3 rounded-full p-3 transition-colors hover:bg-white/10 desktop:w-full">
        <Image
          src={currentUser.avatar}
          alt="Profile"
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
        <span className="hidden min-w-0 flex-col text-left text-[15px] leading-5 desktop:flex">
          <span className="truncate font-bold">{currentUser.name}</span>
          <span className="truncate text-twitter-gray">
            @{currentUser.username}
          </span>
        </span>
      </button>
    </aside>
  );
}
