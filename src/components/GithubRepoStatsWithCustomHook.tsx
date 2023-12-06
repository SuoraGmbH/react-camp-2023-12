import React from "react";
import useRepoData from "../hooks/useRepoData.ts";

const GithubRepoStatsWithCustomHook: React.FunctionComponent = () => {
  const repoData = useRepoData();

  if (!repoData) {
    return <div>Loading</div>;
  }

  return <div>react ✨: {repoData.stargazers_count}</div>;
};

export default GithubRepoStatsWithCustomHook;
