"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useInsertionEffect, useLayoutEffect } from "react";

export function Footer() {
  const pathname = usePathname();
  const getSrc = (name: string) => {
    return `/images/${name}${pathname.includes(name) ? "_selected" : ""}.svg`;
  };

  const handleScroll = () => {
    const footer: HTMLElement | null = document.querySelector("footer");
    if (!footer) return;
    // console.log(window.scrollY, "scrollY");
    if (window.scrollY < 50) {
      footer.style.opacity = "1";
      return;
    }
    const footerHeight = footer.offsetHeight;
    if (Number(footer.style.opacity) > 0.3) {
      footer.style.opacity = String(
        (footerHeight - (window.scrollY - 50)) / footerHeight
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    //TODO: Create Component for each item
    //TODO: Create each page
    //TODO: Buil For you layout / Following layout
    //TODO: Search page
    //TODO: Grok page
    //TODO: Notifications page
    //TODO: Messages page
    //TODO: Communities page
    //TODO: Tablet
    //TODO: Desktop
    <footer className="fixed bottom-0 h-[53px] w-full border-t-[1px] border-twitter-dark-gray bg-black">
      <nav className="h-full">
        <ul className="flex flex-row items-center h-full justify-between">
          <li key="1" className="w-full flex">
            <Link href={"/home"} className="w-full flex justify-center">
              <Image
                src={getSrc("home")}
                className="h-[26px] w-[26px] m-[8px]"
                alt="home"
                width={26}
                height={26}
              />
            </Link>
          </li>
          <li key="2" className="w-full flex">
            <Link href={"/explore"} className="w-full flex justify-center">
              <Image
                src={getSrc("explore")}
                className="h-[26px] w-[26px] m-[8px]"
                alt="explore"
                width={26}
                height={26}
              />
            </Link>
          </li>
          <li key="3" className="w-full flex">
            <Link href={"/grok"} className="w-full flex justify-center">
              <Image
                src={getSrc("grok")}
                className="h-[26px] w-[26px] m-[8px]"
                alt="grok"
                width={26}
                height={26}
              />
            </Link>
          </li>
          <li key="4" className="w-full flex">
            <Link
              href={"/notifications"}
              className="w-full flex justify-center"
            >
              <Image
                src={getSrc("notifications")}
                className="h-[26px] w-[26px] m-[8px]"
                alt="notifications"
                width={26}
                height={26}
              />
            </Link>
          </li>
          <li key="5" className="w-full flex">
            <Link href={"/messages"} className="w-full flex justify-center">
              <Image
                src={getSrc("messages")}
                className="h-[26px] w-[26px] m-[8px]"
                alt="messages"
                width={26}
                height={26}
              />
            </Link>
          </li>
          <li key="6" className="w-full flex">
            <Link
              href={"/communities/explore"}
              className="w-full flex justify-center"
            >
              <Image
                src={getSrc("communities")}
                className="h-[26px] w-[26px] m-[8px]"
                alt="communities"
                width={26}
                height={26}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
