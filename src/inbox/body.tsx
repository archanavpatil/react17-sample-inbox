import React, { useState } from "react";

export const DEFAULT_LIMIT: number = 50;

export interface IEmailBodyProps {
  text: string;
}

export default function EmailBody(props: IEmailBodyProps) {

  const [seeMore, setSeeMore] = useState<boolean>(props.text.length > DEFAULT_LIMIT); 

  const toggleSeeMore = (): void => { setSeeMore(!seeMore); }

  const showMore = () => {
    return <>{props.text.substring(0, 50 )}<span className="show-more" onClick={toggleSeeMore}>Show More</span></>
  }

  const showLess = () => {
    return props.text.length > 50 ? <>{props.text}<span className="show-more" onClick={toggleSeeMore}>Show Less</span></> 
      : props.text;
  }

  return <div className="body">
    { seeMore ? showMore() : showLess() }
  </div>;
}