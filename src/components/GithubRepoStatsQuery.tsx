import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface Props {
  repoName: string;
}

const GithubRepoStatsQuery: React.FunctionComponent<Props> = ({ repoName }) => {
  const { data, isLoading, isFetching } = useQuery({
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/repos/${repoName}`,
        {},
      );

      return response.json();
    },
    queryKey: ["githubRepoData", repoName],
  });

  if (!data) {
    return (
      <div>
        Loading<p>isLoading: {JSON.stringify(isLoading)}</p>
        <p>isFetching: {JSON.stringify(isFetching)}</p>
      </div>
    );
  }

  return (
    <div>
      <p>isLoading: {JSON.stringify(isLoading)}</p>
      <p>isFetching: {JSON.stringify(isFetching)}</p>
      {repoName} ✨: {data.stargazers_count}
    </div>
  );
};

export default GithubRepoStatsQuery;
