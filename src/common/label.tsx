import React from "react";
import { getClassName } from "../utils/style";

export interface ILabelProps {
  text: string;
  className?: string;
  separator: ":" | "";
}
export default function Label(props: ILabelProps) {
  return <div className={getClassName("label", props.className)}>{props.text}{props.separator}</div>;
}

Label.defaultProps = {
  separator: ":"
}