import {env} from 'cloudflare:workers';
const enc=new TextEncoder();
export const cookieName='stshwad_invite';
export function inviteCode(){return (env as unknown as Record<string,string>).INVITE_CODE||''}
async function key(){return crypto.subtle.importKey('raw',enc.encode(inviteCode()),{name:'HMAC',hash:'SHA-256'},false,['sign','verify'])}
export async function token(){const exp=String(Date.now()+180*86400000);const sig=await crypto.subtle.sign('HMAC',await key(),enc.encode('invite:'+exp));return exp+'.'+Array.from(new Uint8Array(sig),v=>v.toString(16).padStart(2,'0')).join('')}
export async function allowed(req:Request){if(!inviteCode())return false;const raw=req.headers.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith(cookieName+'='))?.slice(cookieName.length+1)||'';const [exp,sig]=raw.split('.');if(!/^\d+$/.test(exp)||Number(exp)<Date.now()||!/^[a-f0-9]{64}$/.test(sig||''))return false;return crypto.subtle.verify('HMAC',await key(),Uint8Array.from(sig.match(/../g)!,x=>parseInt(x,16)),enc.encode('invite:'+exp))}
export const denied=()=>Response.json({error:'أدخل رمز الدعوة للدخول'},{status:401,headers:{'Cache-Control':'no-store'}});
