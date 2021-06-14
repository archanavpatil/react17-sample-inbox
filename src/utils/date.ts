export function getCurrentDate(): string {
  const today = new Date();
  let dd:number|string = today.getDate();
  let mm:number|string = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  let hour: number|string = today.getHours();
  let min: number|string = today.getMinutes();
  let sec: number|string = today.getSeconds();
  if(dd < 10) dd = '0' + dd ;
  if(mm < 10) mm = '0' + mm;
  if(hour < 10) hour = '0' + hour;
  if(min < 10) min = '0' + min;
  if(sec < 10) sec = '0' + sec;

  return dd + '/' + mm + '/' + yyyy + " " + hour + ":" + min + ":" + sec;
}