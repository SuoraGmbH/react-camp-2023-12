import * as React from "react";

type Localization = typeof localization;
type Language = keyof Localization;

function sayGoodMorning(country: Language): React.ReactNode {
  return <i>{localization[country]}</i>;
}

const localization = {
  de: "Guten Morgen",
  nl: "Goedemorgen",
  en: "Good morning",
};

export const element = <h1>{sayGoodMorning("nl")}, Sara!</h1>;
