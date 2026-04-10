"use client";

import { Footer, Header, Sidebar } from "@/components";
import { ProfileContext, TopBarMenuContext } from "@/context";
import { TopBarMenuItems } from "@/types";
import { useState } from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPage, setCurrentPage] = useState(TopBarMenuItems.ForYou);
  const [profile, setProfile] = useState({
    username: "",
    name: "",
    bio: "",
    location: "",
    website: "",
    birthDate: "",
    followers: 0,
    following: 0,
    tweetCount: 0,
    joinedDate: "",
    profileImage: "",
    coverImage: "",
    likes: 0,
    lists: 0,
  });
  return (
    <TopBarMenuContext.Provider value={{ currentPage, setCurrentPage }}>
      <ProfileContext.Provider value={{ profile, setProfile }}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1 ml-[68px] max-[425px]:ml-0">
            <div className="mx-auto w-full max-w-[425px] sm:max-w-[540px] lg:max-w-[600px] xl:max-w-[680px] 2xl:max-w-[780px] min-h-screen flex flex-col max-[425px]:pb-[53px]">
              <Header />
              <div className="flex-1">{children}</div>
            </div>
          </div>
          <Footer />
        </div>
      </ProfileContext.Provider>
    </TopBarMenuContext.Provider>
  );
}
