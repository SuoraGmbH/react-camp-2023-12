import WiederholungsKomponente from "./components/WiederholungsKomponente.tsx";
import Counter from "./components/Counter.tsx";
import DynamicTimeEntryList from "./components/DynamicTimeEntryList.tsx";
import GithubRepoStats from "./components/GithubRepoStats.tsx";
import TimeEntryListFromBackend from "./components/TimeEntryListFromBackend.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

function App() {
  return (
      <TimeEntryListFromBackend />
      <GithubRepoStats />
    <QueryClientProvider client={client}>
      <DynamicTimeEntryList />
      <Counter />

      <WiederholungsKomponente name="Günther" />
      <WiederholungsKomponente name="André" />
    </QueryClientProvider>
  );
}

export default App;
