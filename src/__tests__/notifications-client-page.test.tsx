import React from "react";
import { render, screen } from "@testing-library/react";
import NotificationsClientPage from "@/app/notifications/notifications-client-page";
import { TopBarMenuContext } from "@/context/top-bar-menu-context";
import { TopBarMenuItems } from "@/types";
import { Notifications } from "@/types";

const mockNotifications: Notifications = {
  All: [
    { id: 1, message: "User A followed you" },
    { id: 2, message: "User B liked your post" },
  ],
};

function renderWithContext(
  currentPage: TopBarMenuItems,
  notifications: Notifications,
) {
  const setCurrentPage = jest.fn();
  return render(
    <TopBarMenuContext.Provider value={{ currentPage, setCurrentPage }}>
      <NotificationsClientPage notifications={notifications} />
    </TopBarMenuContext.Provider>,
  );
}

describe("NotificationsClientPage Component", () => {
  it('renders all notifications when currentPage is "All"', () => {
    renderWithContext(TopBarMenuItems.All, mockNotifications);
    expect(screen.getByText("User A followed you")).toBeInTheDocument();
    expect(screen.getByText("User B liked your post")).toBeInTheDocument();
  });

  it("renders notification articles", () => {
    renderWithContext(TopBarMenuItems.All, mockNotifications);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(2);
  });

  it("renders NoVerified when Verified page has no data", () => {
    renderWithContext(TopBarMenuItems.Verified, mockNotifications);
    expect(
      screen.getByText("Nothing to see here — yet"),
    ).toBeInTheDocument();
    // Check for the Learn more link which is specific to NoVerified
    expect(screen.getByText("Learn more")).toBeInTheDocument();
  });

  it("renders NoMentions when Mentions page has no data", () => {
    renderWithContext(TopBarMenuItems.Mentions, mockNotifications);
    expect(
      screen.getByText("Nothing to see here — yet"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/When someone mentions you/),
    ).toBeInTheDocument();
  });

  it("renders Verified notifications when data is provided", () => {
    const notificationsWithVerified: Notifications = {
      ...mockNotifications,
      Verified: [{ id: 3, message: "Verified user liked your post" }],
    };
    renderWithContext(TopBarMenuItems.Verified, notificationsWithVerified);
    expect(
      screen.getByText("Verified user liked your post"),
    ).toBeInTheDocument();
  });

  it("renders Mentions notifications when data is provided", () => {
    const notificationsWithMentions: Notifications = {
      ...mockNotifications,
      Mentions: [{ id: 4, message: "@you was mentioned in a post" }],
    };
    renderWithContext(TopBarMenuItems.Mentions, notificationsWithMentions);
    expect(
      screen.getByText("@you was mentioned in a post"),
    ).toBeInTheDocument();
  });
});
