import { classicNameResolver } from "typescript";

export function getClassName(defaultClassName: string, className: string|null|undefined): string {
  return className ? defaultClassName + " " + className : defaultClassName;
}

export function createEmptyArray<T>(lenght: number, ele: T): T[] {
  if(lenght <= 0 ) return [];
  else {
    let arr: T[] = [];
    for(let i=0; i < lenght; i++) {
      arr.push(ele);
    }
    return arr;
  }
} 