import React from "react";
import { useQuery } from "@tanstack/react-query";

interface Props {
  repoName: string;
}

const GithubRepoStatsQuery: React.FunctionComponent<Props> = ({ repoName }) => {
  const { data } = useQuery({
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
    return <div>Loading</div>;
  }

  return (
    <div>
      {repoName} ✨: {data.stargazers_count}
    </div>
  );
};

export default GithubRepoStatsQuery;
