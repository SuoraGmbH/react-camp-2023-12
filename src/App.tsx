import TimeEntryView, { TimeEntryView2 } from "./components/TimeEntryView.tsx";

function App() {
  const timeEntryFromBackend = {
    id: "nsiadijoasdasokdasok",
    comment: "Hallo Welt",
    start: new Date(),
    end: new Date(),
    highlight: true,
  };

  return (
    <div>
      <h1>Nennt mich gerne Christian</h1>
      <TimeEntryView
        timeEntry={{
          id: "nsiadijoas",
          comment: "Hallo Welt",
          start: new Date(),
          end: new Date(),
        }}
      />

      <TimeEntryView2
        id="jnds"
        comment="test"
        start={new Date()}
        end={new Date()}
      />

      <TimeEntryView timeEntry={timeEntryFromBackend} highlight={true} />

      <TimeEntryView2
        id={timeEntryFromBackend.id}
        comment={timeEntryFromBackend.comment}
        start={timeEntryFromBackend.start}
        end={timeEntryFromBackend.end}
        highlight={true}
      />

      <TimeEntryView2 {...timeEntryFromBackend} />
    </div>
  );
}

export default App;
