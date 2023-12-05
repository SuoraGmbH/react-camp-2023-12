import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter.tsx";
import { userEvent } from "@testing-library/user-event";

describe("<Counter />", () => {
  it("should render without crashing", () => {
    render(<Counter />);
  });

  it("should initially be zero", () => {
    render(<Counter />);

    expect(screen.getByText(/0/)).toBeVisible();
  });

  it("should display 1 after clicking the button", async () => {
    render(<Counter />);

    // Hilft euch, die passenden Element zu finden
    // screen.logTestingPlaygroundURL();

    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });

    await userEvent.click(incrementButton);

    expect(screen.getByText(/1/)).toBeVisible();
  });

  it("should display 1 after clicking the button (shortened)", async () => {
    render(<Counter />);
    await userEvent.click(
      screen.getByRole("button", {
        name: /increment/i,
      }),
    );
    expect(screen.getByText(/1/)).toBeVisible();
  });
});
