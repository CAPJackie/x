import { cn } from "@/lib/utils";

describe("cn utility function", () => {
  it("should merge class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });
});
