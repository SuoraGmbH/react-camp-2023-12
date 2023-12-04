interface Props {
  city?: string;
}

export function Welcome({ city }: Props): JSX.Element {
  if (!city) {
    return <h1>Hello Bielefeld!</h1>;
  }

  return <h1>Hello {city.toUpperCase()}</h1>;
}
