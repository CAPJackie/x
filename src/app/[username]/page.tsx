"use client";

import { profilesData } from "@/lib";

import { ProfileContext, TopBarMenuContext } from "@/context";
import { TopBarMenuItems } from "@/types";
import { notFound } from "next/navigation";
import { use, useContext, useEffect } from "react";

export default function Profile({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  // Next 16: route params are a Promise.
  const { username } = use(params);
  const { setCurrentPage } = useContext(TopBarMenuContext);
  const { setProfile } = useContext(ProfileContext);
  const profile = profilesData.find((p) => p.username === username);
  if (!profile) notFound();
  useEffect(() => {
    setCurrentPage(TopBarMenuItems.Profile);
    setProfile(profile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
  return (
    <div className="flex flex-col">
      <h1>Profile {username}</h1>
    </div>
  );
}
