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
  //console.log(topBarMenuOptions[currentPageFromPathname], "pathname");
  return (
    <header
      className={cn("h-[107px] w-full flex flex-col", {
        "h-[53px]": !topBarMenuOptions[currentPageFromPathname],
      })}
    >
      {isProfilePage && (
        <div className="h-[54px] w-full flex items-center justify-start px-4 border-b border-twitter">
          <Link href="/">
            <button className="w-9 h-9">
              <Image
                src={"/images/arrow-left.svg"}
                className="w-5 h-5"
                alt="back"
                width={20}
                height={20}
              />
            </button>
          </Link>
          <div className="flex flex-col ml-5 space-y-1">
            <h1 className="text-[17px] font-bold leading-5">{profile.name}</h1>
            <span className="text-[13px] font-normal leading-4 text-twitter-gray">
              {profile!.tweetCount} posts
            </span>
          </div>
        </div>
      )}
      {!isProfilePage && (
        <>
          <div
            className={cn(
              "h-[50%] px-4 flex items-center justify-start relative",
              {
                "h-full": !topBarMenuOptions[currentPageFromPathname],
              }
            )}
          >
            <button className="w-[32px] h-[36px]">
              <Image
                src={"/images/profile.jpeg"}
                className="w-[32px] h-[36px]"
                alt="profile image"
                width={32}
                height={36}
              />
            </button>
            <button className="absolute left-[calc(50%_-_12px)]">
              <Image
                src={"/images/x.svg"}
                className="w-[24px] h-[24px]"
                alt="logo"
                width={24}
                height={24}
              />
            </button>
          </div>
          {topBarMenuOptions[currentPageFromPathname] && (
            <nav className="h-[50%] flex border-twitter overflow-hidden overflow-x-scroll w-full max-w-full">
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
