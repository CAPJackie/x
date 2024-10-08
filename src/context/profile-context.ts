import { Profile } from "@/types";
import { createContext } from "react";

type ProfileContextType = {
  profile: Profile;
  setProfile: (profile: Profile) => void;
};

const defaultValues: ProfileContextType = {
  profile: {
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
  },
  setProfile: (profile: any) => {},
};

export const ProfileContext = createContext(defaultValues);
