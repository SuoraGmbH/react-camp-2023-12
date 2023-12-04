import * as React from "react";

const TimeEntryForm: React.FunctionComponent = () => {
  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {};
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello World");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Speichern</button>
    </form>
  );
};

export default TimeEntryForm;
