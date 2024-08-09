"use client";

import { TopBarMenuContext } from "@/context";
import { TopBarMenuItems } from "@/types";
import cn from "classnames";
import Image from "next/image";
import { useContext } from "react";

export function Header() {
  const { currentPage, setCurrentPage } = useContext(TopBarMenuContext);
  return (
    <header className="h-[107px] w-full flex flex-col">
      <div className="h-[50%] px-4 flex items-center justify-start relative">
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
      <nav className="h-[50%] flex">
        <a
          onClick={() => setCurrentPage(TopBarMenuItems.ForYou)}
          className={cn(
            "px-4 w-full flex justify-center items-center flex-col font-medium",
            {
              "bg-[#e7e9ea]/10 font-bold":
                currentPage === TopBarMenuItems.ForYou,
            }
          )}
        >
          <span
            className={cn("relative", {
              "text-[#71767b]": currentPage !== TopBarMenuItems.ForYou,
            })}
          >
            For you
            {currentPage === TopBarMenuItems.ForYou && (
              <div
                className={cn(
                  "h-[4px] w-full absolute bg-[#1d9bf0] rounded-full bottom-[-14px]"
                )}
              />
            )}
          </span>
        </a>
        <a
          onClick={() => setCurrentPage(TopBarMenuItems.Following)}
          className={cn(
            "px-4 w-full flex justify-center items-center font-medium",
            {
              "bg-[#e7e9ea]/10 font-bold":
                currentPage === TopBarMenuItems.Following,
            }
          )}
        >
          <span
            className={cn("relative", {
              "text-[#71767b]": currentPage !== TopBarMenuItems.Following,
            })}
          >
            Following
            {currentPage === TopBarMenuItems.Following && (
              <div
                className={cn(
                  "h-[4px] w-full absolute bg-[#1d9bf0] rounded-full bottom-[-14px]"
                )}
              />
            )}
          </span>
        </a>
      </nav>
    </header>
  );
}
