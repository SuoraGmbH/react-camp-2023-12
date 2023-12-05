import { render } from "@testing-library/react";
import Welcome from "./Welcome.tsx";

describe("<Welcome />", () => {
  test("smoke test123", () => {
    render(<Welcome name="Michael" />);
  });
});
