"use client";

import { Footer, Header } from "@/components";
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
        <Header />
        <div className="mb-[53px]">{children}</div>
        <Footer />
      </ProfileContext.Provider>
    </TopBarMenuContext.Provider>
  );
}
