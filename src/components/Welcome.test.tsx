import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome.tsx";
import { expect } from "vitest";

describe("<Welcome />", () => {
  test("smoke test123", () => {
    render(<Welcome name="Michael" />);
  });

  it("should say Hallo Michael", () => {
    render(<Welcome name="Michael" />);

    expect(screen.getByText("Hallo Michael")).toBeVisible();
  });

  it("should greet the user", () => {
    render(<Welcome name="Michael" />);

    expect(screen.getByText("Hallo", { exact: false })).toBeVisible();
    expect(screen.getByText(/hallo|hola|salut/i)).toBeVisible();
  });

  it("should say the users name", () => {
    render(<Welcome name="Michael" />);

    expect(screen.getByText(/michael/i)).toBeVisible();
  });

  it("should do exactly what it did before!", () => {
    const { container } = render(<Welcome name="Michael" />);

    expect(container).toMatchSnapshot();
  });
});
