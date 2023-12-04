import TimeEntryView from "./components/TimeEntryView.tsx";
import TimeEntryForm from "./components/TimeEntryForm.tsx";

function App() {
  return (
    <div>
      <h1>Nennt mich gerne Christian</h1>
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
