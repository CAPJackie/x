"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const getSrc = (name: string) => {
    return `/images/${name}${pathname.includes(name) ? "_selected" : ""}.svg`;
  };
  return (
    //TODO: Create Component for each item
    //TODO: Create each page
    //TODO: Build For you layout / Following layout
    //TODO: Search page
    //TODO: Grok page
    //TODO: Notifications page
    //TODO: Messages page
    //TODO: Communities page
    //TODO: Tablet
    //TODO: Desktop
    <footer className="absolute bottom-0 h-[53px] w-full border-t-[1px] border-[#2f3336]">
      <nav className="h-full">
        <ul className="flex flex-row items-center h-full justify-between">
          <li className="w-full flex">
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
          <li className="w-full flex">
            <Link href={"/search"} className="w-full flex justify-center">
              <Image
                src={getSrc("search")}
                className="h-[26px] w-[26px] m-[8px]"
                alt="search"
                width={26}
                height={26}
              />
            </Link>
          </li>
          <li className="w-full flex">
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
          <li className="w-full flex">
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
          <li className="w-full flex">
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
          <li className="w-full flex">
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
