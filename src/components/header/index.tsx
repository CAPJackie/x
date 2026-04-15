"use client";

import { ProfileContext, TopBarMenuContext } from "@/context";
import { cn } from "@/lib/utils";
import { TopBarMenuItems } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";

export function Header() {
  const { currentPage, setCurrentPage } = useContext(TopBarMenuContext);
  const { profile } = useContext(ProfileContext);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const topBarMenuOptions: { [key: string]: { name: TopBarMenuItems }[] } = {
    home: [
      { name: TopBarMenuItems.ForYou },
      { name: TopBarMenuItems.Following },
    ],
    explore: [
      { name: TopBarMenuItems.ForYou },
      { name: TopBarMenuItems.Trending },
      { name: TopBarMenuItems.News },
      { name: TopBarMenuItems.Sports },
      { name: TopBarMenuItems.Entertainment },
    ],
    notifications: [
      { name: TopBarMenuItems.All },
      { name: TopBarMenuItems.Mentions },
    ],
  };
  const pathname = usePathname();
  const currentPageFromPathname = pathname.split("/")[1];
  const isProfilePage = currentPage === TopBarMenuItems.Profile;

  useEffect(() => {
    const handleHeaderScroll = () => {
      if (window.innerWidth > 425) return;
      const currentY = window.scrollY;
      if (currentY > lastScrollYRef.current && currentY > 10) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }
      lastScrollYRef.current = currentY;
    };
    window.addEventListener("scroll", handleHeaderScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleHeaderScroll);
  }, []);

  useEffect(() => {
    //setCurrentPage(currentPageFromPathname);}
    if (!topBarMenuOptions[currentPageFromPathname]) return;
    setCurrentPage(topBarMenuOptions[currentPageFromPathname][0].name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageFromPathname]);

  if (
    (topBarMenuOptions[currentPageFromPathname] &&
      topBarMenuOptions[currentPageFromPathname].length === 0) ||
    !profile
  ) {
    throw Error("Page not found");
  }
  return (
    <header
      className={cn(
        "w-full flex flex-col",
        "max-[425px]:sticky max-[425px]:top-0 max-[425px]:z-50 max-[425px]:bg-black max-[425px]:transition-transform max-[425px]:duration-300",
        {
          "h-[53px]":
            !!topBarMenuOptions[currentPageFromPathname] || isProfilePage,
          "h-0": !topBarMenuOptions[currentPageFromPathname] && !isProfilePage,
          "max-[425px]:h-auto": true,
          "max-[425px]:-translate-y-full": headerHidden,
        },
      )}
    >
      {/* Phone-only top bar: profile image | X logo | Subscribe */}
      {!isProfilePage && currentPageFromPathname !== "notifications" && (
        <div className="hidden max-[425px]:flex items-center justify-between px-4 h-[53px]">
          <button className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/profile.jpeg"
              alt="Profile"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </button>
          <Image src="/images/x.svg" alt="X" width={24} height={24} />
          <button className="border border-white rounded-full px-4 py-1.5 text-sm font-bold leading-none flex-shrink-0">
            Subscribe
          </button>
        </div>
      )}
      {/* Phone-only top bar for notifications: profile image | Notifications | gear */}
      {!isProfilePage && currentPageFromPathname === "notifications" && (
        <div className="hidden max-[425px]:flex items-center justify-between px-4 h-[53px]">
          <div className="flex items-center gap-3 flex-1">
            <button className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/profile.jpeg"
                alt="Profile"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </button>
            <span className="text-[17px] font-bold">Notifications</span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M12 8.666c-1.843 0-3.333 1.49-3.333 3.334 0 1.843 1.49 3.333 3.333 3.333 1.843 0 3.333-1.49 3.333-3.333 0-1.844-1.49-3.334-3.333-3.334zm7.5 2.167c.032-.35.05-.7.05-1.083s-.018-.733-.05-1.083l2.301-1.334c.217-.125.274-.4.133-.608l-2.167-3.75c-.14-.207-.433-.274-.65-.166l-2.7 1.083c-.567-.433-1.183-.8-1.85-1.083l-.4-2.867C14.117.217 13.883 0 13.6 0h-4.2c-.283 0-.517.217-.567.5l-.4 2.867C7.767 3.65 7.15 4.017 6.567 4.45L3.867 3.367c-.25-.1-.533 0-.65.166L1.05 7.283c-.133.208-.083.483.133.609l2.301 1.333c-.032.35-.05.7-.05 1.083s.018.733.05 1.083L1.183 12.725c-.216.125-.274.4-.133.608l2.167 3.75c.14.208.433.275.65.167l2.7-1.083c.566.433 1.183.8 1.85 1.083l.4 2.867c.05.283.283.5.566.5h4.2c.284 0 .517-.217.567-.5l.4-2.867c.667-.283 1.283-.65 1.85-1.083l2.7 1.083c.25.1.533 0 .65-.167l2.166-3.75c.134-.208.084-.483-.133-.608l-2.3-1.334z" />
            </svg>
          </button>
        </div>
      )}
      {isProfilePage && (
        <div className="h-[53px] w-full flex items-center justify-start px-4 border-b border-twitter">
          <Link href="/">
            <button className="w-9 h-9">
              <Image
                src={"/images/arrow-left.svg"}
                className="w-5 h-5"
                alt="back"
                width={32}
                height={32}
              />
            </button>
          </Link>
          <div className="flex flex-col ml-5 space-y-1">
            <h1 className="text-[17px] font-bold leading-5">{profile?.name}</h1>
            <span className="text-[13px] font-normal leading-4 text-twitter-gray">
              {profile?.tweetCount} posts
            </span>
          </div>
        </div>
      )}
      {!isProfilePage && (
        <>
          {topBarMenuOptions[currentPageFromPathname] && (
            <nav className="h-[53px] flex border-twitter overflow-hidden overflow-x-scroll w-full max-w-full">
              {topBarMenuOptions[currentPageFromPathname].map((option) => {
                return (
                  <a
                    key={option.name}
                    onClick={() => setCurrentPage(option.name)}
                    className={cn(
                      "relative px-4 flex justify-center items-center font-medium active:bg-[#e7e9ea]/10 min-w-[56px] shrink-0 grow",
                      {
                        "font-bold": currentPage === option.name,
                      },
                    )}
                  >
                    <span
                      className={cn("relative", {
                        "text-twitter-gray": currentPage !== option.name,
                      })}
                    >
                      {option.name}
                    </span>
                    {currentPage === option.name && (
                      <div className="h-[4px] w-20 absolute bg-[#1d9bf0] rounded-full bottom-0 left-1/2 -translate-x-1/2" />
                    )}
                  </a>
                );
              })}
            </nav>
          )}
        </>
      )}
    </header>
  );
}
