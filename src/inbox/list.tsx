import React from "react";
import { IEmail } from "./data";
import Email from "./email";

export interface IListProps {
  emails: IEmail[];
}

export default function List(props: IListProps) {
  return <div>
    { props.emails.map((email, idx) => {
        return <Email key={idx} email={email}/>;
      })
    }
    </div>;
}