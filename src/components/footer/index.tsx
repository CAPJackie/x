"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Footer() {
  const pathname = usePathname();
  const getSrc = (name: string) => {
    return `/images/${name}${pathname.includes(name) ? "_selected" : ""}.svg`;
  };

  const handleScroll = () => {
    if (window.innerWidth > 425) return;
    const footer: HTMLElement | null = document.querySelector("footer");
    if (!footer) return;
    const opacity = Math.max(0.4, 1 - window.scrollY / 300);
    footer.style.opacity = String(opacity);
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
    //TODO: Grok page
    //TODO: Notifications page
    //TODO: Messages page
    //TODO: Communities page
    //TODO: Tablet
    //TODO: Desktop
    <footer className="hidden max-[425px]:flex fixed bottom-0 left-0 right-0 h-[53px] bg-black border-t border-twitter-dark-gray z-50 transition-opacity duration-300">
      <nav className="h-full w-full">
        <ul className="flex flex-row items-center h-full justify-between lg:justify-center lg:gap-8">
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
