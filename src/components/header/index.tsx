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
      { name: TopBarMenuItems.Verified },
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
      {!isProfilePage && (
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
                      "px-4 flex justify-center items-center font-medium active:bg-[#e7e9ea]/10 min-w-[56px] shrink-0 grow",
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
                      {currentPage === option.name && (
                        <div
                          className={cn(
                            "h-[4px] w-full absolute bg-[#1d9bf0] rounded-full bottom-[-14px]",
                          )}
                        />
                      )}
                    </span>
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
