export const roster=['فارس','اديب','معاذ','ريان','اويس','باولي','حسن','زياد','عبدالملك','هادي'].map((name,i)=>({id:`player-${i+1}`,name}));
export const validPlayer=(id:unknown)=>roster.some(p=>p.id===id);
export const dayIndex=(today:string,start:string)=>Math.round((Date.parse(today)-Date.parse(start))/86400000);
export const exerciseDay=(d:number)=>Number.isInteger(d)&&d>=0&&d<30&&d%2===0;
export const validValues=(v:unknown):v is number[]=>Array.isArray(v)&&v.length===8&&v.every(n=>typeof n==='number'&&Number.isInteger(n)&&n>=0&&n<=86400);

