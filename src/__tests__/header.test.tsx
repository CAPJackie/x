import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/header";
import { TopBarMenuContext } from "@/context/top-bar-menu-context";
import { ProfileContext } from "@/context/profile-context";
import { TopBarMenuItems } from "@/types";
import { Profile } from "@/types";

// Mock next/navigation
const mockPathname = jest.fn();
jest.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
}));

const defaultProfile: Profile = {
  username: "testuser",
  name: "Test User",
  bio: "Test bio",
  location: "Test City",
  website: "https://test.com",
  birthDate: "1990-01-01",
  followers: 100,
  following: 50,
  tweetCount: 42,
  joinedDate: "2020-01-01",
  profileImage: "/images/test.jpg",
  coverImage: "/images/test-cover.jpg",
  likes: 200,
  lists: 5,
};

function renderHeader(
  currentPage: TopBarMenuItems = TopBarMenuItems.ForYou,
  profile: Profile = defaultProfile,
  pathname: string = "/home",
) {
  mockPathname.mockReturnValue(pathname);
  const setCurrentPage = jest.fn();
  const setProfile = jest.fn();

  const result = render(
    <TopBarMenuContext.Provider value={{ currentPage, setCurrentPage }}>
      <ProfileContext.Provider value={{ profile, setProfile }}>
        <Header />
      </ProfileContext.Provider>
    </TopBarMenuContext.Provider>,
  );

  return { ...result, setCurrentPage, setProfile };
}

describe("Header Component", () => {
  describe("Home page header", () => {
    it("renders the header element", () => {
      renderHeader(TopBarMenuItems.ForYou, defaultProfile, "/home");
      expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("renders the X logo", () => {
      renderHeader(TopBarMenuItems.ForYou, defaultProfile, "/home");
      expect(screen.getByAltText("logo")).toBeInTheDocument();
    });

    it("renders the profile image button", () => {
      renderHeader(TopBarMenuItems.ForYou, defaultProfile, "/home");
      expect(screen.getByAltText("profile image")).toBeInTheDocument();
    });

    it("renders For you and Following tabs on /home", () => {
      renderHeader(TopBarMenuItems.ForYou, defaultProfile, "/home");
      expect(screen.getByText("For you")).toBeInTheDocument();
      expect(screen.getByText("Following")).toBeInTheDocument();
    });

    it("does not render explore-specific tabs on /home", () => {
      renderHeader(TopBarMenuItems.ForYou, defaultProfile, "/home");
      expect(screen.queryByText("Trending")).not.toBeInTheDocument();
      expect(screen.queryByText("News")).not.toBeInTheDocument();
      expect(screen.queryByText("Sports")).not.toBeInTheDocument();
    });
  });

  describe("Explore page header", () => {
    it("renders explore tabs", () => {
      renderHeader(TopBarMenuItems.ForYou, defaultProfile, "/explore");
      expect(screen.getByText("For you")).toBeInTheDocument();
      expect(screen.getByText("Trending")).toBeInTheDocument();
      expect(screen.getByText("News")).toBeInTheDocument();
      expect(screen.getByText("Sports")).toBeInTheDocument();
      expect(screen.getByText("Entertainment")).toBeInTheDocument();
    });
  });

  describe("Notifications page header", () => {
    it("renders notification tabs", () => {
      renderHeader(TopBarMenuItems.All, defaultProfile, "/notifications");
      expect(screen.getByText("All")).toBeInTheDocument();
      expect(screen.getByText("Verified")).toBeInTheDocument();
      expect(screen.getByText("Mentions")).toBeInTheDocument();
    });
  });

  describe("Profile page header", () => {
    it("renders back button and profile info", () => {
      renderHeader(TopBarMenuItems.Profile, defaultProfile, "/testuser");
      expect(screen.getByAltText("back")).toBeInTheDocument();
      expect(screen.getByText("Test User")).toBeInTheDocument();
      expect(screen.getByText("42 posts")).toBeInTheDocument();
    });

    it("renders a link back to home", () => {
      renderHeader(TopBarMenuItems.Profile, defaultProfile, "/testuser");
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/");
    });
  });

  describe("Tab interactions", () => {
    it("calls setCurrentPage when a tab is clicked", () => {
      const { setCurrentPage } = renderHeader(
        TopBarMenuItems.ForYou,
        defaultProfile,
        "/home",
      );
      fireEvent.click(screen.getByText("Following"));
      expect(setCurrentPage).toHaveBeenCalledWith(TopBarMenuItems.Following);
    });

    it("applies bold style to active tab", () => {
      renderHeader(TopBarMenuItems.ForYou, defaultProfile, "/home");
      const forYouTab = screen.getByText("For you").closest("a");
      expect(forYouTab).toHaveClass("font-bold");
    });

    it("does not apply bold to inactive tab", () => {
      renderHeader(TopBarMenuItems.ForYou, defaultProfile, "/home");
      const followingTab = screen.getByText("Following").closest("a");
      expect(followingTab).not.toHaveClass("font-bold");
    });
  });

  describe("Pages without tabs", () => {
    it("renders header without nav for messages page", () => {
      renderHeader(TopBarMenuItems.ForYou, defaultProfile, "/messages");
      expect(screen.getByRole("banner")).toBeInTheDocument();
      expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    });

    it("renders header without nav for grok page", () => {
      renderHeader(TopBarMenuItems.ForYou, defaultProfile, "/grok");
      expect(screen.getByRole("banner")).toBeInTheDocument();
      expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    });
  });
});
