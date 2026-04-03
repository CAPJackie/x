import { createContext } from "react";
import { ProfileContext } from "@/context/profile-context";
import { TopBarMenuContext } from "@/context/top-bar-menu-context";
import { TopBarMenuItems } from "@/types";

describe("ProfileContext", () => {
  it("should be a valid React context", () => {
    expect(ProfileContext).toBeDefined();
    expect(ProfileContext.Provider).toBeDefined();
    expect(ProfileContext.Consumer).toBeDefined();
  });

  it("should have correct default values", () => {
    // Access default value through the context's internal structure
    const defaultValue = (ProfileContext as any)._currentValue;
    expect(defaultValue).toHaveProperty("profile");
    expect(defaultValue).toHaveProperty("setProfile");
    expect(defaultValue.profile).toEqual({
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
  });

  it("should have a no-op setProfile by default", () => {
    const defaultValue = (ProfileContext as any)._currentValue;
    // Should not throw when called
    expect(() => defaultValue.setProfile({})).not.toThrow();
  });
});

describe("TopBarMenuContext", () => {
  it("should be a valid React context", () => {
    expect(TopBarMenuContext).toBeDefined();
    expect(TopBarMenuContext.Provider).toBeDefined();
    expect(TopBarMenuContext.Consumer).toBeDefined();
  });

  it("should have correct default values", () => {
    const defaultValue = (TopBarMenuContext as any)._currentValue;
    expect(defaultValue).toHaveProperty("currentPage");
    expect(defaultValue).toHaveProperty("setCurrentPage");
    expect(defaultValue.currentPage).toBe(TopBarMenuItems.ForYou);
  });

  it("should have a no-op setCurrentPage by default", () => {
    const defaultValue = (TopBarMenuContext as any)._currentValue;
    expect(() =>
      defaultValue.setCurrentPage(TopBarMenuItems.Following),
    ).not.toThrow();
  });
});
