"use client";

import { ProfileContext, TopBarMenuContext } from "@/context";
import { TopBarMenuItems } from "@/types";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export function Header() {
  const { currentPage, setCurrentPage } = useContext(TopBarMenuContext);
  const { profile } = useContext(ProfileContext);
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
        "h-[107px] w-full flex flex-col",
        "md:h-[140px] lg:h-[180px]",
        {
          "h-[53px] md:h-[70px] lg:h-[90px]":
            !topBarMenuOptions[currentPageFromPathname],
        }
      )}
    >
      {isProfilePage && (
        <div className="h-[54px] md:h-[70px] lg:h-[90px] w-full flex items-center justify-start px-4 border-b border-twitter">
          <Link href="/">
            <button className="w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16">
              <Image
                src={"/images/arrow-left.svg"}
                className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                alt="back"
                width={32}
                height={32}
              />
            </button>
          </Link>
          <div className="flex flex-col ml-5 space-y-1">
            <h1 className="text-[17px] md:text-[20px] lg:text-[24px] font-bold leading-5">
              {profile?.name}
            </h1>
            <span className="text-[13px] md:text-[15px] lg:text-[17px] font-normal leading-4 text-twitter-gray">
              {profile?.tweetCount} posts
            </span>
          </div>
        </div>
      )}
      {!isProfilePage && (
        <>
          <div
            className={cn(
              "h-[50%] px-4 flex items-center justify-start relative",
              "md:h-[60px] lg:h-[90px]",
              {
                "h-full md:h-full lg:h-full":
                  !topBarMenuOptions[currentPageFromPathname],
              }
            )}
          >
            <button className="w-[32px] h-[36px] md:w-[48px] md:h-[54px] lg:w-[64px] lg:h-[72px]">
              <Image
                src={"/images/profile.jpeg"}
                className="rounded-full"
                alt="profile image"
                width={64}
                height={72}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </button>
            <button
              className={cn(
                "absolute left-1/2 -translate-x-1/2",
                "w-[24px] h-[24px]",
                "md:w-[32px] md:h-[32px]",
                "lg:w-[40px] lg:h-[40px]"
              )}
            >
              <Image
                src={"/images/x.svg"}
                alt="logo"
                width={40}
                height={40}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </button>
          </div>
          {topBarMenuOptions[currentPageFromPathname] && (
            <nav className="h-[50%] md:h-[80px] lg:h-[90px] flex border-twitter overflow-hidden overflow-x-scroll w-full max-w-full">
              {topBarMenuOptions[currentPageFromPathname].map((option) => {
                return (
                  <a
                    key={option.name}
                    onClick={() => setCurrentPage(option.name)}
                    className={cn(
                      "px-4 flex justify-center items-center font-medium active:bg-[#e7e9ea]/10 min-w-[56px] shrink-0 grow",
                      {
                        "font-bold": currentPage === option.name,
                      }
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
                            "h-[4px] w-full absolute bg-[#1d9bf0] rounded-full bottom-[-14px]"
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
