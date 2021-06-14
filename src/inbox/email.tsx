import React from "react";
import Label from "../common/label";
import Value from "../common/value";
import { getCurrentDate } from "../utils/date";
import Badge from "./badge";
import EmailBody from "./body";
import { IEmail } from "./data";

export interface IEmailProps {
  email: IEmail;
}
export default function Email(props: IEmailProps) {
  return <div className="email">
    <span className="badge-space">
      <Badge sender={props.email.email}/>
    </span>
    <span>
      <div className="details">
        <Label text="From"/>
        <Value text={props.email.email} />
      </div>
      <div className="details">
        <Label text="Subject"/>
        <Value text={props.email.name} />
      </div>
      <div className="details">
        <EmailBody text={props.email.body} />
      </div>
      <div className="details">
        { getCurrentDate() }
      </div>
    </span>
    
  </div>;
}