import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/footer";

// Mock next/navigation
const mockPathname = jest.fn();
jest.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
}));

describe("Footer Component", () => {
  beforeEach(() => {
    mockPathname.mockReturnValue("/home");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the footer element", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders navigation", () => {
    render(<Footer />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(6);
  });

  it("renders link to home", () => {
    render(<Footer />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/home");
  });

  it("renders link to explore", () => {
    render(<Footer />);
    const exploreLink = screen.getByRole("link", { name: /explore/i });
    expect(exploreLink).toHaveAttribute("href", "/explore");
  });

  it("renders link to grok", () => {
    render(<Footer />);
    const grokLink = screen.getByRole("link", { name: /grok/i });
    expect(grokLink).toHaveAttribute("href", "/grok");
  });

  it("renders link to notifications", () => {
    render(<Footer />);
    const notifLink = screen.getByRole("link", { name: /notifications/i });
    expect(notifLink).toHaveAttribute("href", "/notifications");
  });

  it("renders link to messages", () => {
    render(<Footer />);
    const msgLink = screen.getByRole("link", { name: /messages/i });
    expect(msgLink).toHaveAttribute("href", "/messages");
  });

  it("renders link to communities", () => {
    render(<Footer />);
    const commLink = screen.getByRole("link", { name: /communities/i });
    expect(commLink).toHaveAttribute("href", "/communities/explore");
  });

  it("uses selected icon for current path", () => {
    mockPathname.mockReturnValue("/home");
    render(<Footer />);
    const homeImg = screen.getByAltText("home");
    expect(homeImg).toHaveAttribute(
      "src",
      expect.stringContaining("home_selected"),
    );
  });

  it("uses unselected icon for non-current path", () => {
    mockPathname.mockReturnValue("/home");
    render(<Footer />);
    const exploreImg = screen.getByAltText("explore");
    // Should not contain "selected" since we're on /home
    expect(exploreImg.getAttribute("src")).not.toContain("selected");
  });

  it("registers and cleans up scroll event listener", () => {
    const addSpy = jest.spyOn(window, "addEventListener");
    const removeSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = render(<Footer />);
    expect(addSpy).toHaveBeenCalledWith("scroll", expect.any(Function));

    unmount();
    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it("sets scrollRestoration to manual", () => {
    render(<Footer />);
    expect(window.history.scrollRestoration).toBe("manual");
  });
});
