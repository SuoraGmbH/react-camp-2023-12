import React from "react";

interface Props {
  name: string;
}

const Welcome: React.FunctionComponent<Props> = ({ name }) => {
  return <div>Hallo {name}</div>;
};

export default Welcome;
