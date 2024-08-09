'use client';

import { TopBarMenuContext } from "@/context";
import { TopBarMenuItems } from "@/types";
import Image from "next/image";
import { useContext } from "react";

export function Header() {
    const {currentPage, setCurrentPage} = useContext(TopBarMenuContext);
    return <header className="h-[107px] w-full flex flex-col">
        <div className="h-[50%] px-4 flex items-center justify-start relative">
            <button className="w-[32px] h-[36px]">
                <Image src={'/images/profile.jpeg'} className="w-[32px] h-[36px]" alt="profile image" width={32} height={36} />
            </button>
            <button className="absolute left-[calc(50%_-_12px)]">
                <Image src={'/images/x.svg'} className="w-[24px] h-[24px]" alt="logo" width={24} height={24} />
            </button>
        </div>
        <nav className="h-[50%] flex">
            <a onClick={()=>setCurrentPage(TopBarMenuItems.ForYou)} className="px-4 w-full flex justify-center items-center">For you</a>
            <a onClick={()=>setCurrentPage(TopBarMenuItems.Following)} className="px-4 w-full flex justify-center items-center">Following</a>
        </nav>
    </header>;
}