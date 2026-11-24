"use client";

import { Footer, Header, RightSidebar, Sidebar } from "@/components";
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
        <div className="flex min-h-screen justify-center">
          <Sidebar />
          <main className="flex min-h-screen w-full min-w-0 flex-col pb-[53px] tablet:w-[600px] tablet:shrink-0 tablet:border-x tablet:border-twitter-dark-gray tablet:pb-0">
            <Header />
            <div className="flex-1">{children}</div>
          </main>
          <RightSidebar />
          <Footer />
        </div>
      </ProfileContext.Provider>
    </TopBarMenuContext.Provider>
  );
}
