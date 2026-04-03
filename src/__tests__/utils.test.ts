import { cn } from "@/lib/utils";

describe("cn utility function", () => {
  it("should merge simple class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("should handle a single class name", () => {
    expect(cn("foo")).toBe("foo");
  });

  it("should handle empty inputs", () => {
    expect(cn()).toBe("");
  });

  it("should filter out falsy values", () => {
    expect(cn("foo", undefined, null, false, "bar")).toBe("foo bar");
  });

  it("should handle conditional class objects", () => {
    expect(cn("base", { active: true, disabled: false })).toBe("base active");
  });

  it("should handle arrays of class names", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar");
  });

  it("should merge conflicting Tailwind classes (last wins)", () => {
    expect(cn("px-4", "px-8")).toBe("px-8");
  });

  it("should merge conflicting Tailwind responsive classes", () => {
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
  });

  it("should preserve non-conflicting Tailwind classes", () => {
    expect(cn("px-4", "py-2", "text-lg")).toBe("px-4 py-2 text-lg");
  });

  it("should handle complex conditional + tailwind merge scenario", () => {
    const isActive = true;
    const result = cn("px-4 py-2", { "font-bold": isActive, "font-normal": !isActive });
    expect(result).toBe("px-4 py-2 font-bold");
  });
});
