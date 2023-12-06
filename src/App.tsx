import WiederholungsKomponente from "./components/WiederholungsKomponente.tsx";
import Counter from "./components/Counter.tsx";
import DynamicTimeEntryList from "./components/DynamicTimeEntryList.tsx";
import GithubRepoStats from "./components/GithubRepoStats.tsx";

function App() {
  return (
    <div>
      <GithubRepoStats />
      <DynamicTimeEntryList />
      <Counter />

      <WiederholungsKomponente name="Günther" />
      <WiederholungsKomponente name="André" />
    </div>
  );
}

export default App;
