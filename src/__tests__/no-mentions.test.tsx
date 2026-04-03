import React from "react";
import { render, screen } from "@testing-library/react";
import NoMentions from "@/app/notifications/no-mentions";

describe("NoMentions Component", () => {
  it("renders the heading", () => {
    render(<NoMentions />);
    expect(screen.getByText("Nothing to see here — yet")).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<NoMentions />);
    expect(screen.getByText(/When someone mentions you/)).toBeInTheDocument();
  });

  it("renders with correct heading level", () => {
    render(<NoMentions />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Nothing to see here — yet");
  });
});
