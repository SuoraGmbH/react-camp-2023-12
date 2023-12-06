import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import DynamicTimeEntryList from "./DynamicTimeEntryList.tsx";
import { userEvent } from "@testing-library/user-event";

describe("<DynamicTimeEntryList />", () => {
  test("Smoke Test", () => {
    render(<DynamicTimeEntryList />);
  });

  it("should have a textfield for the Kommentar", () => {
    render(<DynamicTimeEntryList />);

    expect(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
    ).toBeVisible();
  });

  it("should have three list items", () => {
    render(<DynamicTimeEntryList />);

    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("should contain four list items after the user typed into the textfield and clicked the submit button", async () => {
    render(<DynamicTimeEntryList />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
      "Hallo Testing Library",
    );

    await user.click(
      screen.getByRole("button", {
        name: /speichern/i,
      }),
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });

  it("should contain four list items after the user typed into the textfield and pressed enter", async () => {
    render(<DynamicTimeEntryList />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
      "Hallo Testing Library{enter}",
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });
});
