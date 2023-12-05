import TimeEntryView from "./components/TimeEntryView.tsx";
import TimeEntryForm from "./components/TimeEntryForm.tsx";
import WiederholungsKomponente from "./components/WiederholungsKomponente.tsx";
import Counter from "./components/Counter.tsx";
import TimeEntryList from "./components/TimeEntryList.tsx";

function App() {
  return (
    <div>
      <TimeEntryList />
      <Counter />
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
