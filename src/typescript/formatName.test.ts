import { describe } from "vitest";
import { formatName } from "./formatName.tsx";

describe("formatName", () => {
  test("snapshot test", () => {
    expect(
      formatName({ firstName: "Mickey", lastName: "Mouse" }),
    ).toMatchInlineSnapshot('"Mickey Mouse"');
  });
});
