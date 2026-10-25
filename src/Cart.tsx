import { memo, useState } from 'react';
type Line={name:string;quantity:number};
const Total=memo(function Total({lines}:{lines:Line[]}){return <output aria-label="Cart total">{lines.reduce((n,line)=>n+line.quantity,0)}</output>;});
export function Cart() {
  const [lines,setLines]=useState<Line[]>([{name:'Seat',quantity:1}]);
  const [changes,setChanges]=useState(0);
  function add(){lines[0].quantity++;setLines(lines);setChanges(changes+1);}
  return <section><h2>Seats</h2><button onClick={add}>Add seat</button><span aria-label="Changes">{changes}</span><Total lines={lines}/></section>;
}
