"use client";

import { profilesData } from "@/lib";

import { ProfileContext, TopBarMenuContext } from "@/context";
import { TopBarMenuItems } from "@/types";
import { useContext, useEffect } from "react";

export default function Profile({ params }: { params: { username: string } }) {
  const { setCurrentPage } = useContext(TopBarMenuContext);
  const { setProfile } = useContext(ProfileContext);
  useEffect(() => {
    setCurrentPage(TopBarMenuItems.Profile);
    const profile = profilesData.find(
      (profile) => profile.username === params.username
    );
    console.log(profile, "profile");
    setProfile(profile!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.username]);
  return (
    <div>
      <h1>Profile {params.username}</h1>
    </div>
  );
}
