import { render, screen } from "@testing-library/react";
import GithubRepoStats from "./GithubRepoStats.tsx";
import { mockServer } from "../setupTests.ts";
import { beforeEach, expect } from "vitest";
import { githubApiReposFacebookReactSuccessMock } from "../mock/api.github.com/repos/facebook/react/success.ts";

describe("<GithubRepoStats />", () => {
  beforeEach(() => {
    mockServer.use(githubApiReposFacebookReactSuccessMock);
  });

  test("smoke test", async () => {
    render(<GithubRepoStats />);
  });

  it("should initially render a loading indicator", async () => {
    render(<GithubRepoStats />);
    expect(screen.getByText(/loading/i)).toBeVisible();
  });

  it("should render the data from the backend", async () => {
    render(<GithubRepoStats />);
    expect(await screen.findByText(/4711/)).toBeVisible();
  });
});
