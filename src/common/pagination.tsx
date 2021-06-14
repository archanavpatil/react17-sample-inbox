import { createEmptyArray } from "../utils/style";
export const MAX_RECS_PER_PAGE: number = 10;

export interface IPaginationProps {
  currentPage: number;
  totalRecs: number; 
  onChange: (page: number) => void;
}

export default function Pagination(props: IPaginationProps) {
  const getFirstRecOnPage = (idx: number): number => { return idx*MAX_RECS_PER_PAGE + 1 };
  const getLastRecOnPage = (idx: number): number => { return ((idx+1)*MAX_RECS_PER_PAGE > props.totalRecs) ? props.totalRecs : (idx+1)*MAX_RECS_PER_PAGE}
  const records = (idx: number): string => { return getFirstRecOnPage(idx) + " - " + getLastRecOnPage(idx)}
  const onPageChage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(parseInt(e.target.value));
  }
  return props.totalRecs > MAX_RECS_PER_PAGE ? <select defaultValue={props.currentPage} onChange={onPageChage}>
    { createEmptyArray((Math.floor((props.totalRecs -1) / MAX_RECS_PER_PAGE)) + 1, 0).map((ele, idx) => {
      return <option key={idx} value={idx}>{records(idx)}</option>;
    })}
  </select> : <div>0 - {props.totalRecs}</div>;
}