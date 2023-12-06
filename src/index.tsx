import ReactDOM from "react-dom";
import App from "./App.tsx";
import { setupWorker } from "msw/browser";
import { githubApiReposFacebookReactSuccessMock } from "./mock/api.github.com/repos/facebook/react/success.ts";

async function enableMocking() {
  // Nur in development wollen wir mocks haben
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  // das sollte man eigentlich etwas anders machen,
  // damit nicht im production-bundle MSW & die mocks landen
  // Seht dafür auf https://mswjs.io/docs/integrations/browser
  const worker = setupWorker(githubApiReposFacebookReactSuccessMock);
  return worker.start({ onUnhandledRequest: "bypass" });
}

// Das ist nur für development sinnvoll

enableMocking().then(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
