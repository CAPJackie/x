"use client";

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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col fixed left-0 top-0 h-screen w-[68px] border-r border-twitter-dark-gray bg-black z-40 items-center py-3 max-[425px]:hidden">
      <Link
        href="/home"
        className="p-3 rounded-full hover:bg-white/10 transition-colors mb-2"
        aria-label="X"
      >
        <Image src="/images/x.svg" alt="X logo" width={28} height={28} />
      </Link>

      <nav className="flex flex-col items-center gap-1 flex-1">
        {navItems.map(({ href, label, icon }) => {
          const segment = href.split("/")[1];
          const isActive = pathname.split("/")[1] === segment;
          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={cn(
                "p-3 rounded-full hover:bg-white/10 transition-colors",
              )}
            >
              <Image
                src={`/images/${icon}${isActive ? "_selected" : ""}.svg`}
                alt={label}
                width={26}
                height={26}
                className="h-[26px] w-[26px]"
              />
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col items-center gap-3">
        <button
          className="w-[52px] h-[52px] rounded-full bg-[#1d9bf0] flex items-center justify-center hover:bg-[#1a8cd8] transition-colors"
          aria-label="Post"
        >
          <Image
            src="/images/add-single-file.svg"
            alt="Post"
            width={22}
            height={22}
          />
        </button>
        <button className="w-[40px] h-[40px] rounded-full overflow-hidden hover:opacity-80 transition-opacity">
          <Image
            src="/images/profile.jpeg"
            alt="Profile"
            width={40}
            height={40}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </button>
      </div>
    </aside>
  );
}
