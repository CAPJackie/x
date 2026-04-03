import React from "react";
import { render, screen } from "@testing-library/react";
import GrokInput from "@/app/grok/grok-input";

describe("GrokInput Component", () => {
  it("renders the text area with placeholder", () => {
    render(<GrokInput />);
    expect(screen.getByPlaceholderText("Ask anything")).toBeInTheDocument();
  });

  it("renders the add file button", () => {
    render(<GrokInput />);
    expect(screen.getByAltText("add file")).toBeInTheDocument();
  });

  it("renders the send button", () => {
    render(<GrokInput />);
    expect(screen.getByAltText("send search")).toBeInTheDocument();
  });

  it("renders exactly two buttons", () => {
    render(<GrokInput />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });
});
