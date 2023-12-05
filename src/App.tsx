import TimeEntryView from "./components/TimeEntryView.tsx";
import TimeEntryForm from "./components/TimeEntryForm.tsx";
import WiederholungsKomponente from "./components/WiederholungsKomponente.tsx";

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

      <WiederholungsKomponente name="Günther" />
      <WiederholungsKomponente name="André" />
    </div>
  );
}

export default App;
