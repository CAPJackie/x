import React from "react";
import { render, screen } from "@testing-library/react";
import ClientLayout from "@/app/clientLayout";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/home",
}));

describe("ClientLayout Component", () => {
  it("renders children", () => {
    render(
      <ClientLayout>
        <div data-testid="child">Child Content</div>
      </ClientLayout>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("renders the Header component", () => {
    render(
      <ClientLayout>
        <div>Child</div>
      </ClientLayout>,
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders the Footer component", () => {
    render(
      <ClientLayout>
        <div>Child</div>
      </ClientLayout>,
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders navigation links from Footer", () => {
    render(
      <ClientLayout>
        <div>Child</div>
      </ClientLayout>,
    );
    // Footer should have links
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders the default menu tabs for home page", () => {
    render(
      <ClientLayout>
        <div>Child</div>
      </ClientLayout>,
    );
    expect(screen.getByText("For you")).toBeInTheDocument();
    expect(screen.getByText("Following")).toBeInTheDocument();
  });
});
