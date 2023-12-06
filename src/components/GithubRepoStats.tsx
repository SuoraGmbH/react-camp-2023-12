import React, { useEffect, useState } from "react";
import { GithubRepoData } from "../domain/GithubRepoData.tsx";

const GithubRepoStats: React.FunctionComponent = () => {
  const [repoData, setRepoData] = useState<GithubRepoData>();

  console.log("Komponente rendert");
  useEffect(() => {
    console.log(
      "Dies hier wird nur NACH dem *INITIALEN* rendering der Komponente ausgeführt",
    );
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setRepoData(data);
      });
    });
  }, []);

  // Parameter mit fetch übergeben
  // useEffect(() => {
  //   fetch("https://api.github.com/repos/facebook/react", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ test: "test" }),
  //   }).then((response) => {
  //     response.json().then((data) => {
  //       console.log(data);
  //       setRepoData(data);
  //     });
  //   });
  // }, []);

  if (!repoData) {
    return <div>Loading</div>;
  }

  return <div>react ✨: {repoData.stargazers_count}</div>;
};

export default GithubRepoStats;
