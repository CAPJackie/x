import React from "react";
import { render } from "@testing-library/react";
import GrokCommonSearches from "@/app/grok/grok-common-searches";

describe("GrokCommonSearches Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<GrokCommonSearches />);
    expect(container.querySelector("div")).toBeInTheDocument();
  });

  it("renders an empty div", () => {
    const { container } = render(<GrokCommonSearches />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
