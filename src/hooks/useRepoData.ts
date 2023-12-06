import { useEffect, useState } from "react";
import { GithubRepoData } from "../domain/GithubRepoData.tsx";

const useRepoData = () => {
  const [repoData, setRepoData] = useState<GithubRepoData>();
  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react").then((response) => {
      response.json().then((data) => {
        setRepoData(data);
      });
    });
  }, []);

  return repoData;
};

export default useRepoData;
