import React from "react";

export interface IBadgeProps {
  sender: string;
} 
export default function Badge(props: IBadgeProps) {

  return <div className="badge-parent">
    <div className="badge">
      {props.sender.charAt(0)}
    </div>
  </div>;
} 