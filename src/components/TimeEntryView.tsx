import * as React from "react";

interface Props {
  comment: string;
}

const TimeEntryView: React.FunctionComponent<Props> = (props) => {
  return <div>{props.comment}</div>;
};

export default TimeEntryView;
