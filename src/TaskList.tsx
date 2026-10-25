import { useState } from 'react';
function TaskRow({title}:{title:string}) {
  const [note,setNote]=useState('');
  return <li>{title}<input aria-label={`Note for ${title}`} value={note} onChange={e=>setNote(e.target.value)}/></li>;
}
export function TaskList() {
  const [rows,setRows]=useState([{id:1,title:'First'},{id:2,title:'Second'}]);
  return <section><h2>Notes</h2><button onClick={()=>setRows([...rows].reverse())}>Reverse tasks</button><ul>{rows.map((row,index)=><TaskRow key={index} title={row.title}/>)}</ul></section>;
}
