import { useState } from 'react';
import { tasks } from './api';
export function Tasks() {
  const [team,setTeam]=useState('All'),[page,setPage]=useState(1);
  const filtered=tasks.filter(task=>team==='All'||task.team===team);
  const visible=filtered.slice((page-1)*3,page*3);
  return <section><h2>Queue</h2><select aria-label="Team" value={team} onChange={e=>setTeam(e.target.value)}>{['All','Blue','Red'].map(t=><option key={t}>{t}</option>)}</select><button disabled={page===1} onClick={()=>setPage(page-1)}>Previous</button><button disabled={page*3>=filtered.length} onClick={()=>setPage(page+1)}>Next</button><p>Page {page}</p><ul aria-label="Queue">{visible.map(t=><li key={t.id}>{t.title}</li>)}</ul></section>;
}
