import React from "react";
import { getClassName } from "../utils/style"

export interface IValueProps {
  text: string;
  className?: string;
}
export default function Value(props: IValueProps) {
  return <div className={getClassName("value", props.className)}>{props.text}</div>;
}