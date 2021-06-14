import React, { useEffect, useState } from "react";
import { IEmail } from "./data";
import List from "./list";
import Pagination, { MAX_RECS_PER_PAGE } from "../common/pagination";
import Label from "../common/label";
import Value from "../common/value";

export interface IInboxProps {}

export default function Inbox(props: IInboxProps) {
  let allEmails = useEmails(props);
  let [page, setPage] = useState(0);
  let firstRecOnPage = page * MAX_RECS_PER_PAGE;
  return <div className="inbox">
    <List emails={allEmails.slice(firstRecOnPage, firstRecOnPage + MAX_RECS_PER_PAGE)} />
    <div className="inbox-pagination">
      <Label text="Page No"/>
      <Value text={(page + 1).toString()} />
      &nbsp;&nbsp;&nbsp;
      <Label text="Records"/>
      <Pagination currentPage={page} totalRecs={allEmails.length} onChange={(page) => {setPage(page);}}/>
    </div>
  </div>;
}

function useEmails(props: IInboxProps): IEmail[] {
  const [iemails, setEmails] = useState<IEmail[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then(response => {
      response.json().then(resp => setEmails(resp));
    });
    console.log("Running Use Rffect");
    
  }, [props]);
  return iemails;
}