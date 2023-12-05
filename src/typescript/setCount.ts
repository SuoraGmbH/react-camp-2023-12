type NewValueType = number | ((prevNumber: number) => number);

const setCount = (newValue: NewValueType) => {
  if (typeof newValue === "number") {
    // das eine
  } else {
    newValue(prev);
  }
};
