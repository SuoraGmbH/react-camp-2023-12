import TimeEntryView from "./components/TimeEntryView.tsx";
import TimeEntryForm from "./components/TimeEntryForm.tsx";

function App() {
  return (
    <div>
      <TimeEntryForm />
      <TimeEntryView
        timeEntry={{
          id: "nsiadijoas",
          comment: "Hallo Welt",
          start: new Date(),
          end: new Date(),
        }}
      />
    </div>
  );
}

export default App;
