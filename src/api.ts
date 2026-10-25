export const tasks = Array.from({length:12},(_,i)=>({id:i+1,title:`Task ${i+1}`,team:i<3?'Blue':'Red'}));
export function customer(id: string): Promise<string> {
  return new Promise(resolve=>setTimeout(()=>resolve(id==='a'?'Avery':'Blair'),id==='a'?200:20));
}
