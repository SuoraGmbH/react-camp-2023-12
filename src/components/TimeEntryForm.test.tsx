import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import TimeEntryForm from "./TimeEntryForm.tsx";
import { userEvent } from "@testing-library/user-event";

describe("<TimeEntryForm />", () => {
  test("Smoke test", () => {
    render(<TimeEntryForm onTimeEntryAdd={() => {}} />);
  });

  it("should create a new time entry when the user submits the form", async () => {
    // vitest.useFakeTimers({ shouldAdvanceTime: true, advanceTimeDelta: 0 });
    // vitest.setSystemTime(new Date("2023-12-06 10:40:00"));
    const handleTimeEntryAddMock = vitest.fn();
    render(<TimeEntryForm onTimeEntryAdd={handleTimeEntryAddMock} />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", { name: /kommentar/i }),
      "unit test{enter}",
    );

    expect(handleTimeEntryAddMock).toHaveBeenCalledOnce();
    expect(handleTimeEntryAddMock).toHaveBeenCalledWith(
      expect.objectContaining({
        comment: "UNIT TEST",
        // start: new Date(),
      }),
    );
  });
});
