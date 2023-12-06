import useFetchData from "./useFetchData.ts";

const useRepoData = () => {
  return useFetchData("https://api.github.com/repos/facebook/react");
};

export default useRepoData;
