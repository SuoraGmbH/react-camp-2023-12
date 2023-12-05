import * as React from "react";

interface Props {
  name?: string;
}

const WiederholungsKomponente: React.FunctionComponent<Props> = ({ name }) => {
  if (!name) {
    return <div>Fremde Leute grüße ich nicht</div>;
  }

  const handleClick = function () {
    console.log(`Der Gruß für ${name} wurde geklickt`);
  };

  return <div onClick={handleClick}>Hallo {name.toUpperCase()}</div>;
};

export default WiederholungsKomponente;
