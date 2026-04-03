import {
  post,
  profilesData,
  directMessages,
  notifications,
} from "@/lib/mock-data";

describe("Mock Data - Post", () => {
  it("should have required post fields", () => {
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("tweet");
    expect(post).toHaveProperty("user");
    expect(post).toHaveProperty("comments");
    expect(post).toHaveProperty("retweets");
    expect(post).toHaveProperty("likes");
    expect(post).toHaveProperty("views");
    expect(post).toHaveProperty("date");
    expect(post).toHaveProperty("media");
  });

  it("should have valid user data in post", () => {
    expect(post.user).toHaveProperty("name");
    expect(post.user).toHaveProperty("username");
    expect(post.user).toHaveProperty("avatar");
    expect(typeof post.user.name).toBe("string");
    expect(typeof post.user.username).toBe("string");
  });

  it("should have valid media data", () => {
    expect(["image", "video"]).toContain(post.media.type);
    expect(typeof post.media.url).toBe("string");
  });

  it("should have numeric engagement fields", () => {
    expect(typeof post.comments).toBe("number");
    expect(typeof post.retweets).toBe("number");
    expect(typeof post.likes).toBe("number");
    expect(typeof post.views).toBe("number");
  });
});

describe("Mock Data - Profiles", () => {
  it("should be a non-empty array", () => {
    expect(Array.isArray(profilesData)).toBe(true);
    expect(profilesData.length).toBeGreaterThan(0);
  });

  it("each profile should have required fields", () => {
    profilesData.forEach((profile) => {
      expect(profile).toHaveProperty("username");
      expect(profile).toHaveProperty("name");
      expect(profile).toHaveProperty("bio");
      expect(profile).toHaveProperty("location");
      expect(profile).toHaveProperty("website");
      expect(profile).toHaveProperty("birthDate");
      expect(profile).toHaveProperty("followers");
      expect(profile).toHaveProperty("following");
      expect(profile).toHaveProperty("tweetCount");
      expect(profile).toHaveProperty("joinedDate");
      expect(profile).toHaveProperty("profileImage");
      expect(profile).toHaveProperty("coverImage");
      expect(profile).toHaveProperty("likes");
      expect(profile).toHaveProperty("lists");
    });
  });

  it("each profile should have unique usernames", () => {
    const usernames = profilesData.map((p) => p.username);
    expect(new Set(usernames).size).toBe(usernames.length);
  });

  it("each profile should have numeric stat fields", () => {
    profilesData.forEach((profile) => {
      expect(typeof profile.followers).toBe("number");
      expect(typeof profile.following).toBe("number");
      expect(typeof profile.tweetCount).toBe("number");
      expect(typeof profile.likes).toBe("number");
      expect(typeof profile.lists).toBe("number");
    });
  });
});

describe("Mock Data - Direct Messages", () => {
  it("should be a non-empty array", () => {
    expect(Array.isArray(directMessages)).toBe(true);
    expect(directMessages.length).toBeGreaterThan(0);
  });

  it("each message should have required fields", () => {
    directMessages.forEach((dm) => {
      expect(dm).toHaveProperty("id");
      expect(dm).toHaveProperty("user");
      expect(dm).toHaveProperty("date");
      expect(dm).toHaveProperty("content");
    });
  });

  it("each message should have valid user data", () => {
    directMessages.forEach((dm) => {
      expect(dm.user).toHaveProperty("name");
      expect(dm.user).toHaveProperty("username");
      expect(dm.user).toHaveProperty("avatar");
    });
  });

  it("each message should have unique ids", () => {
    const ids = directMessages.map((dm) => dm.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("Mock Data - Notifications", () => {
  it("should have the All notifications array", () => {
    expect(notifications).toHaveProperty("All");
    expect(Array.isArray(notifications.All)).toBe(true);
    expect(notifications.All.length).toBeGreaterThan(0);
  });

  it("each notification should have id and message", () => {
    notifications.All.forEach((notification) => {
      expect(notification).toHaveProperty("id");
      expect(notification).toHaveProperty("message");
      expect(typeof notification.id).toBe("number");
      expect(typeof notification.message).toBe("string");
    });
  });

  it("Verified and Mentions should be optional", () => {
    // These can be undefined per the Notifications type
    expect(notifications.Verified).toBeUndefined();
    expect(notifications.Mentions).toBeUndefined();
  });
});
