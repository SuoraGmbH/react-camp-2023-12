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

  it("should contain the expected list items", () => {
    render(<DynamicTimeEntryList />);

    expect(
      screen
        .getAllByRole("listitem")
        .map((element) => element.textContent?.toLowerCase()),
    ).toMatchInlineSnapshot(`
      [
        "hallo welt",
        "hallo welt 2",
        "hallo dritter eintrag",
      ]
    `);
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

  it("snapshot after submit", async () => {
    const { container } = render(<DynamicTimeEntryList />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
      "Hallo Testing Library{enter}",
    );

    // Relativ fragil, weil jede Änderung am HTML des forms oder der liste den test brechen lässt
    // expect(container).toMatchSnapshot();

    // Weniger fragil, weil das form nicht mehr drin ist, änderungen am HTML der list items lässt die tests noch fehlschlagen
    // expect(screen.getAllByRole("listitem")).toMatchSnapshot();

    // Noch weniger fragil, schlägt nur noch fehl, wenn plötzlich neuer Text in die ListItems gerendert wird,
    // oder sich die Reihenfolge der Items ändert. Beides ist vermutlich gewünscht.
    expect(
      screen
        .getAllByRole("listitem")
        .map((element) => element.textContent?.toLowerCase()),
    ).toMatchInlineSnapshot(`
      [
        "hallo welt",
        "hallo welt 2",
        "hallo dritter eintrag",
        "hallo testing library",
      ]
    `);
  });
});
