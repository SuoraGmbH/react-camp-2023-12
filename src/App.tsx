import WiederholungsKomponente from "./components/WiederholungsKomponente.tsx";
import Counter from "./components/Counter.tsx";
import DynamicTimeEntryList from "./components/DynamicTimeEntryList.tsx";
import GithubRepoStats from "./components/GithubRepoStats.tsx";
import TimeEntryListFromBackend from "./components/TimeEntryListFromBackend.tsx";
import GithubRepoStatsQuery from "./components/GithubRepoStatsQuery.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: "always",
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <GithubRepoStatsQuery repoName="facebook/react" />
      {/*<GithubRepoStatsQuery repoName="facebook/react" />*/}
      {/*<GithubRepoStatsQuery repoName="angular/angular" />*/}
      {/*<GithubRepoStatsQuery repoName="SuoraGmbH/react-camp-2023-12" />*/}
      {/*<TimeEntryListFromBackend />*/}
      {/*<GithubRepoStats />*/}
      <DynamicTimeEntryList />
      <Counter />

      <WiederholungsKomponente name="Günther" />
      <WiederholungsKomponente name="André" />
    </QueryClientProvider>
  );
}

export default App;
