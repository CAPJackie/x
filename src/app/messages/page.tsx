import { directMessages } from "@/lib/mock-data";
import { DirectMessage } from "@/types";
import Image from "next/image";
import Link from "next/link";

function dateConverter(date: string) {
  // converts 12/11/2023 to Nov 12, 2023 using Date
  const dateObj = new Date(date);
  return dateObj.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function Message({ dm }: { dm: DirectMessage }) {
  return (
    <div className="flex flex-row p-4 text-[15px] leading-4">
      <Image
        alt="sender profile"
        width={40}
        height={40}
        src={dm.user.avatar}
        className="h-[40px] w-[40px] mr-2"
      />
      <div className="flex flex-col w-full">
        <div className="flex flex-row">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row shrink-0 overflow-x-auto">
              <Link href={`/${dm.user.username}`} className="mr-1 font-bold">
                <span className="font-bold">{dm.user.name}</span>{" "}
              </Link>
              <div className="text-twitter-gray">
                <span>@{dm.user.username}</span>
                <span className="px-1">·</span>
                <span>{dateConverter(dm.date)}</span>
              </div>
            </div>
            <button className="">
              <Image
                src={"/images/dots.svg"}
                alt="three dots"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
        </div>
        <div className="text-left font-normal text-twitter-gray">
          <p>{dm.content}</p>
        </div>
      </div>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="w-full p-3">
      {/* TODO: Make Explore icon work */}
      <input
        className="w-full bg-transparent border rounded-full h-10 px-4 border-twitter-dark-gray text-[14px] text-twitter-gray placeholder:text-twitter-gray before:content-[url('/images/explore.svg')] before:h-[16px] before:w-[16px] before:absolute before:left-4 before:top-2"
        placeholder="Search Direct Messages"
      />
    </div>
  );
}

async function getDirectMessages(): Promise<DirectMessage[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(directMessages);
    }, 1000);
  });
}

export default async function Messages() {
  const directMessages = await getDirectMessages();
  return (
    <div>
      <SearchInput />
      {directMessages.map((dm) => (
        <Message key={dm.id} dm={dm} />
      ))}
    </div>
  );
}
