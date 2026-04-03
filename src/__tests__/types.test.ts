import { TopBarMenuItems } from "@/types/top-bar-menu-items";

describe("TopBarMenuItems enum", () => {
  it("should have all expected menu items", () => {
    expect(TopBarMenuItems.ForYou).toBe("For you");
    expect(TopBarMenuItems.Following).toBe("Following");
    expect(TopBarMenuItems.Trending).toBe("Trending");
    expect(TopBarMenuItems.News).toBe("News");
    expect(TopBarMenuItems.Sports).toBe("Sports");
    expect(TopBarMenuItems.Entertainment).toBe("Entertainment");
    expect(TopBarMenuItems.All).toBe("All");
    expect(TopBarMenuItems.Verified).toBe("Verified");
    expect(TopBarMenuItems.Mentions).toBe("Mentions");
    expect(TopBarMenuItems.Profile).toBe("Profile");
  });

  it("should have exactly 10 items", () => {
    const values = Object.values(TopBarMenuItems);
    expect(values).toHaveLength(10);
  });

  it("should have unique values", () => {
    const values = Object.values(TopBarMenuItems);
    expect(new Set(values).size).toBe(values.length);
  });
});
