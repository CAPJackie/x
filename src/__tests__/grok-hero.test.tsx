import React from "react";
import { render, screen } from "@testing-library/react";
import GrokHero from "@/app/grok/grok-hero";

describe("GrokHero Component", () => {
  it("renders the Grok heading", () => {
    render(<GrokHero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Grok");
  });

  it("renders the disclaimer text", () => {
    render(<GrokHero />);
    expect(
      screen.getByText("Grok can make mistakes. Verify its outputs."),
    ).toBeInTheDocument();
  });

  it("renders the GrokInput component", () => {
    render(<GrokHero />);
    // GrokInput contains a textarea with placeholder "Ask anything"
    expect(screen.getByPlaceholderText("Ask anything")).toBeInTheDocument();
  });
});
