import React from "react";
import { render, screen } from "@testing-library/react";
import { NoVerified } from "@/app/notifications/no-verified";

describe("NoVerified Component", () => {
  it("renders the heading", () => {
    render(<NoVerified />);
    expect(
      screen.getByText("Nothing to see here — yet"),
    ).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<NoVerified />);
    expect(
      screen.getByText(/Likes, mentions, reposts, and a whole lot more/),
    ).toBeInTheDocument();
  });

  it("renders the Learn more link", () => {
    render(<NoVerified />);
    expect(screen.getByText("Learn more")).toBeInTheDocument();
  });

  it("renders the no verified image", () => {
    render(<NoVerified />);
    const img = screen.getByAltText("No verified notifications");
    expect(img).toBeInTheDocument();
  });

  it("renders with correct heading level", () => {
    render(<NoVerified />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});
