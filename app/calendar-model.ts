import { exerciseDay } from './challenge';
export type CalendarDay = {number:number;date:string|null;status:'done'|'rest'|'missed'|'today'|'upcoming'|'unset';current:boolean};
export function calendarDays(start:string|null,today:string,completed:string[]):CalendarDay[]{
 const dates=new Set(completed);
 return Array.from({length:30},(_,i)=>{
  if(!start)return {number:i+1,date:null,status:'unset',current:false};
  const date=new Date(Date.parse(start+'T00:00:00Z')+i*86400000).toISOString().slice(0,10);
  const status=dates.has(date)?'done':!exerciseDay(i)?'rest':date<today?'missed':date===today?'today':'upcoming';
  return {number:i+1,date,status,current:date===today};
 });
}
